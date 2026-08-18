#!/usr/bin/env node
import fs from 'node:fs/promises'
import { pathToFileURL } from 'node:url'
import { loadRegistryPlugins, readJson, sha256, titleForLegacyCategory } from './registry-lib.mjs'
import { readStateCollection } from './governance/state.mjs'

const OUTPUTS = ['data/catalog-v2.json', 'data/catalog.json', 'data/plugins.json', 'data/editor-picks.json']
const humanClassificationSources = new Set(['reviewed-override', 'accepted-maintainer', 'editorial-review'])

const withLlmClassification = (record, entry) => entry?.status === 'classified' && !humanClassificationSources.has(record.classification.source) ? {
  ...record,
  summaries: entry.summaries ? {
    zh: entry.summaries.zh,
    en: entry.summaries.en,
  } : record.summaries,
  classification: {
    group: entry.group,
    category: entry.category,
    tags: entry.tags,
    source: 'llm-classification',
    confidence: entry.confidence,
    evidence: [`llm:${entry.model}`, `sha256:${entry.evidenceHash}`],
    needsReview: entry.confidence === 'low' || entry.governance?.finalDecision !== 'approved',
    classifiedAt: entry.classifiedAt,
    reason: entry.reason,
  },
} : record

const buildRankings = (plugins, updatedAt, publicCategories) => {
  const eligible = plugins.filter((plugin) => plugin.admission.status === 'verified' && plugin.observations?.compatibility?.manifestFound === true && publicCategories.has(plugin.classification.category) && !plugin.classification.needsReview && ['active', 'incubating'].includes(plugin.lifecycle.status))
  const stars = (plugin) => plugin.observations?.github?.stars ?? 0
  const lastPush = (plugin) => plugin.observations?.github?.lastPushAt ?? ''
  const cutoffTime = Date.parse(updatedAt) - 30 * 86400000
  const cutoff = new Date(cutoffTime).toISOString().slice(0, 10)
  const risingCandidates = eligible.flatMap((plugin) => {
    const history = [...(plugin.observations?.github?.starHistory || [])].sort((a, b) => a.capturedAt.localeCompare(b.capturedAt))
    const latest = history.at(-1)
    if (!latest) return []
    const baseline = history.filter((point) => Date.parse(point.capturedAt) <= cutoffTime).at(-1) || history.find((point) => Date.parse(latest.capturedAt) - Date.parse(point.capturedAt) >= 86400000)
    return baseline ? [{ id: plugin.id, delta: latest.stars - baseline.stars, from: baseline.capturedAt, to: latest.capturedAt }] : []
  }).sort((a, b) => b.delta - a.delta || a.id.localeCompare(b.id))
  const rising = risingCandidates.filter((item) => item.delta > 0).slice(0, 100)
  return {
    generatedAt: updatedAt,
    eligibleCount: eligible.length,
    popular: {
      method: 'current-github-stars',
      limit: 100,
      items: [...eligible].sort((a, b) => stars(b) - stars(a) || a.id.localeCompare(b.id)).slice(0, 100).map((plugin) => plugin.id),
    },
    new: {
      method: 'registry-added-within-30-days',
      windowDays: 30,
      limit: 100,
      items: eligible.filter((plugin) => plugin.addedAt >= cutoff).sort((a, b) => b.addedAt.localeCompare(a.addedAt) || stars(b) - stars(a)).slice(0, 100).map((plugin) => plugin.id),
    },
    active: {
      method: 'latest-github-push',
      limit: 100,
      items: [...eligible].filter((plugin) => lastPush(plugin)).sort((a, b) => lastPush(b).localeCompare(lastPush(a)) || a.id.localeCompare(b.id)).slice(0, 100).map((plugin) => plugin.id),
    },
    rising: {
      method: 'github-star-growth-observed-up-to-30-days',
      windowDays: 30,
      minimumHistoryHours: 24,
      limit: 100,
      status: rising.length >= 10 ? 'ready' : 'insufficient-history',
      items: rising.length >= 10 ? rising.map((item) => item.id) : [],
      deltas: rising.length >= 10 ? Object.fromEntries(rising.map((item) => [item.id, item.delta])) : {},
      windows: rising.length >= 10 ? Object.fromEntries(rising.map((item) => [item.id, { from: item.from, to: item.to }])) : {},
    },
  }
}

const legacyCategory = (plugin, featured, taxonomy) => featured ? 'editor-picks' : taxonomy.legacyProjection[plugin.classification.category] || 'misc'

export const buildCatalogOutputs = async () => {
  const taxonomy = await readJson('registry/taxonomy.json')
  const collection = await readJson('registry/collections/editor-picks.json')
  const observations = await readStateCollection('observations')
  const candidates = await readStateCollection('candidates')
  const quality = await readJson('data/plugin-quality.json', { schemaVersion: 1, assessments: {} })
  const classifications = await readStateCollection('classifications')
  const registryFiles = await loadRegistryPlugins()
  const records = registryFiles.map(({ value }) => withLlmClassification(value, classifications.classifications?.[value.id])).sort((a, b) => a.id.localeCompare(b.id))
  const registeredIds = new Set(records.map((record) => record.id))
  const visibleCandidates = Object.fromEntries(Object.entries(candidates.candidates || {}).filter(([id]) => !registeredIds.has(id)))
  const picks = new Map(collection.items.map((item) => [item.repository.toLowerCase(), item.rank]))
  const updatedAt = [observations.updatedAt, classifications.updatedAt].filter(Boolean).sort().at(-1)
  const sourceCommit = sha256({ taxonomy, collection, records, observations, candidates, quality, classifications })
  const pluginsV2 = records
    .filter((record) => record.visibility === 'listed')
    .map((record) => ({
      ...record,
      observations: observations.repositories[record.id] || null,
      editorial: picks.has(record.repository.fullName.toLowerCase()) ? { editorPick: true, rank: picks.get(record.repository.fullName.toLowerCase()) } : { editorPick: false },
      quality: quality.assessments?.[record.repository.fullName] || null,
    }))
  const publicCategories = new Set(taxonomy.categories.filter((category) => category.visibility === 'public').map((category) => category.id))
  const rankings = buildRankings(pluginsV2, updatedAt, publicCategories)
  const catalogV2 = {
    schemaVersion: 2,
    updatedAt,
    sourceCommit,
    source: {
      repository: 'Ericwong5021/deepseek-plugin-store',
      registry: 'registry/plugins',
      observations: 'governance/state/observations',
      candidates: 'governance/state/candidates',
      classifications: 'governance/state/classifications',
    },
    taxonomy: {
      groups: taxonomy.groups,
      categories: taxonomy.categories,
      tags: taxonomy.tags,
    },
    collections: {
      editorPicks: collection.items.map((item) => ({
        id: records.find((record) => record.repository.fullName.toLowerCase() === item.repository.toLowerCase())?.id ?? null,
        repository: item.repository,
        rank: item.rank,
      })),
      rankings,
    },
    plugins: pluginsV2,
    candidateSummary: {
      total: Object.keys(visibleCandidates).length,
      checked: Object.values(visibleCandidates).filter((candidate) => Boolean(candidate.checks?.checkedAt)).length,
      unchecked: Object.values(visibleCandidates).filter((candidate) => !candidate.checks?.checkedAt).length,
      admissionReady: Object.values(visibleCandidates).filter((candidate) => candidate.checks?.admissionReady === true).length,
      hidden: Object.values(visibleCandidates).filter((candidate) => candidate.visibility === 'hidden').length,
    },
  }
  const legacyPlugins = pluginsV2.map((plugin) => {
    const observation = plugin.observations || {}
    const github = observation.github || {}
    const compatibility = observation.compatibility || {}
    const featured = plugin.editorial.editorPick
    const categoryId = legacyCategory(plugin, featured, taxonomy)
    const description = plugin.summaries.en || plugin.summaries.zh || ''
    return {
      fullName: plugin.repository.fullName,
      url: plugin.repository.url,
      description,
      stars: github.stars ?? 0,
      pushedAt: github.lastPushAt || plugin.addedAt + 'T00:00:00Z',
      license: github.license ?? null,
      archived: github.archived === true,
      isPlugin: true,
      npmName: compatibility.npmName ?? null,
      category: { id: categoryId, title: titleForLegacyCategory(categoryId) },
      addedAt: plugin.addedAt,
      slug: plugin.id,
      name: plugin.repository.fullName,
      summary: description,
      tags: plugin.classification.tags.length ? plugin.classification.tags : [categoryId],
      repositoryUrl: plugin.repository.url,
      installSpec: plugin.installTargets[0].spec,
      author: plugin.maintainers[0] || plugin.repository.fullName.split('/')[0],
      featured,
      status: plugin.lifecycle.status === 'deprecated' || github.archived ? 'archived' : 'active',
      source: featured ? {
        type: 'editor-pick',
        origins: [...new Set(['editor-pick', ...(observation.discovery?.origins || [])])],
        file: 'data/editor-picks.json',
        ...(observation.discovery?.origins?.includes('github-topic') ? { topic: 'dsh-plugin' } : {}),
      } : observation.discovery?.origins?.includes('github-topic') ? {
        type: 'github-topic',
        origins: observation.discovery.origins,
        topic: 'dsh-plugin',
      } : {
        type: 'registry-v2',
        origins: observation.discovery?.origins || ['registry-v2'],
        file: `registry/plugins/${plugin.id}.json`,
      },
      github: {
        stars: github.stars ?? 0,
        license: github.license ?? null,
        lastPushAt: github.lastPushAt || null,
        archived: github.archived === true,
        capturedAt: github.capturedAt || updatedAt,
      },
      compatibility: {
        manifestFound: compatibility.manifestFound === true,
        manifestPath: compatibility.manifestFound === true ? 'package.json:dsh.bundle' : null,
        checkedAt: compatibility.checkedAt || updatedAt,
      },
      ...(plugin.quality ? { quality: plugin.quality } : {}),
    }
  }).sort((a, b) => b.stars - a.stars || a.fullName.localeCompare(b.fullName))
  const assessments = legacyPlugins.map((plugin) => plugin.quality).filter(Boolean)
  const catalogV1 = {
    schemaVersion: 1,
    updatedAt,
    sourceCommit,
    source: {
      provider: 'registry-v2',
      repository: 'Ericwong5021/deepseek-plugin-store',
      sources: ['registry/plugins', 'governance/state/observations', 'governance/state/classifications', 'registry/collections/editor-picks.json'],
      verification: 'package.json:dsh.bundle or legacy-pending',
    },
    plugins: legacyPlugins,
    related: [],
    quality: {
      method: 'ai-repository-analysis',
      disclaimer: 'Repository evidence review only; not a security audit or runtime verification.',
      analyzerVersion: quality.analyzerVersion || '1',
      model: quality.model || 'deepseek-v4-flash',
      analyzedPlugins: assessments.length,
      totalPlugins: legacyPlugins.length,
      updatedAt: assessments.map((item) => item.assessedAt).filter(Boolean).sort().at(-1) ?? null,
    },
  }
  const editorPicks = collection.items.map(({ repository }) => ({ repository }))
  return {
    'data/catalog-v2.json': JSON.stringify(catalogV2, null, 2) + '\n',
    'data/catalog.json': JSON.stringify(catalogV1, null, 2) + '\n',
    'data/plugins.json': JSON.stringify(catalogV1, null, 2) + '\n',
    'data/editor-picks.json': JSON.stringify(editorPicks, null, 2) + '\n',
  }
}

export const generateCatalog = async ({ check = false } = {}) => {
  const first = await buildCatalogOutputs()
  const second = await buildCatalogOutputs()
  for (const file of OUTPUTS) {
    if (first[file] !== second[file]) throw new Error(`non-deterministic catalog output: ${file}`)
    if (check) {
      let actual = ''
      try { actual = await fs.readFile(file, 'utf8') } catch {}
      if (actual !== first[file]) throw new Error(`generated catalog is stale: ${file}`)
    } else {
      await fs.writeFile(file, first[file])
    }
  }
  return { files: OUTPUTS, digest: sha256(OUTPUTS.map((file) => first[file]).join('\n')) }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const result = await generateCatalog({ check: process.argv.includes('--check') })
  console.log(`${process.argv.includes('--check') ? 'checked' : 'generated'} ${result.files.length} catalog files ${result.digest.slice(0, 12)}`)
}
