#!/usr/bin/env node
import fs from 'node:fs/promises'
import { classifyEvidence, pluginId, readJson, repositoryFromUrl, writeJson } from './registry-lib.mjs'

const existing = await fs.readdir('registry/plugins').catch((error) => error.code === 'ENOENT' ? [] : Promise.reject(error))
if (existing.some((file) => file.endsWith('.json'))) throw new Error('registry/plugins already contains plugin records')

const catalog = await readJson('data/catalog.json')
const taxonomy = await readJson('registry/taxonomy.json')
const upstream = await readJson('data/upstream-sync.json', {})
const entries = [...catalog.plugins]
const observations = { schemaVersion: 2, updatedAt: catalog.updatedAt, repositories: {} }
const registryIds = new Set()
await fs.mkdir('registry/plugins', { recursive: true })

for (const entry of entries) {
  const id = pluginId(entry.fullName)
  const classification = classifyEvidence({
    fullName: entry.fullName,
    description: entry.description || entry.summary || '',
    legacyCategory: entry.category?.id || '',
  }, taxonomy)
  const manifestFound = entry.compatibility?.manifestFound === true
  const installTargets = [{ type: 'github', spec: entry.installSpec || `github:${entry.fullName}` }]
  const record = {
    schemaVersion: 2,
    id,
    displayName: entry.fullName.split('/')[1],
    repository: { fullName: entry.fullName, url: entry.url },
    aliases: [],
    summaries: { zh: entry.description || entry.summary || '', en: entry.description || entry.summary || '' },
    installTargets,
    classification,
    admission: {
      status: manifestFound ? 'verified' : 'legacy-pending',
      evidence: manifestFound ? ['package.json:dsh.bundle'] : ['legacy-catalog-listing'],
    },
    lifecycle: { status: entry.archived ? 'deprecated' : 'active' },
    visibility: 'listed',
    maintainers: [entry.author || entry.fullName.split('/')[0]],
    addedAt: entry.addedAt || catalog.updatedAt.slice(0, 10),
  }
  await writeJson(`registry/plugins/${id}.json`, record)
  registryIds.add(id)
  observations.repositories[id] = {
    repository: entry.fullName,
    github: {
      stars: entry.github?.stars ?? entry.stars ?? 0,
      license: entry.github?.license ?? entry.license ?? null,
      archived: entry.github?.archived ?? entry.archived ?? false,
      lastPushAt: entry.github?.lastPushAt ?? entry.pushedAt ?? null,
      capturedAt: entry.github?.capturedAt ?? catalog.updatedAt,
      starHistory: [{ capturedAt: entry.github?.capturedAt ?? catalog.updatedAt, stars: entry.github?.stars ?? entry.stars ?? 0 }],
    },
    compatibility: {
      manifestFound,
      manifestPath: manifestFound ? 'package.json:dsh.bundle' : null,
      npmName: entry.npmName ?? null,
      installSpec: entry.installSpec || `github:${entry.fullName}`,
      checkedAt: entry.compatibility?.checkedAt ?? catalog.updatedAt,
    },
    discovery: {
      origins: entry.source?.origins || [entry.source?.type || 'legacy-catalog'],
      firstSeenAt: entry.addedAt ? `${entry.addedAt}T00:00:00Z` : catalog.updatedAt,
      lastSeenAt: catalog.updatedAt,
    },
    failures: [],
    lastSuccessfulAt: catalog.updatedAt,
  }
}

const candidates = { schemaVersion: 2, updatedAt: upstream.checkedAt || catalog.updatedAt, candidates: {} }
const candidateSources = [
  ...(catalog.related || []).map((entry) => ({ repository: entry.fullName, url: entry.url, summary: entry.description || entry.summary || '', origin: 'legacy-related' })),
  ...((upstream.processing?.pendingUpstreamEntries || []).map((entry) => ({ repository: repositoryFromUrl(entry.url), url: entry.url, summary: entry.name || '', origin: 'awesome-dsh-plugin' }))),
]
for (const candidate of candidateSources) {
  if (!candidate.repository) continue
  const id = pluginId(candidate.repository)
  if (registryIds.has(id) || candidates.candidates[id]) continue
  candidates.candidates[id] = {
    id,
    repository: { fullName: candidate.repository, url: candidate.url || `https://github.com/${candidate.repository}` },
    summary: candidate.summary,
    sources: [candidate.origin],
    admission: { status: 'candidate' },
    lifecycle: { suggestion: 'incubating' },
    visibility: 'hidden',
    discoveredAt: upstream.checkedAt || catalog.updatedAt,
    lastSeenAt: upstream.checkedAt || catalog.updatedAt,
    checks: { admissionReady: false, reasons: ['not-reviewed'] },
    failures: [],
  }
}

await writeJson('data/observations.json', observations)
await writeJson('data/candidates.json', candidates)
console.log(`imported ${entries.length} registry records and ${Object.keys(candidates.candidates).length} hidden candidates`)
