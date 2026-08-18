#!/usr/bin/env node
import { pathToFileURL } from 'node:url'
import { loadRegistryPlugins, pluginId, readJson, validInstallSpec, validRepository } from './registry-lib.mjs'

const unique = (label, values) => {
  const seen = new Set()
  for (const value of values) {
    if (!value) throw new Error(`${label} contains an empty value`)
    const key = String(value).toLowerCase()
    if (seen.has(key)) throw new Error(`duplicate ${label}: ${value}`)
    seen.add(key)
  }
}

export const validateRegistry = async () => {
  const taxonomy = await readJson('registry/taxonomy.json')
  const collection = await readJson('registry/collections/editor-picks.json')
  const observations = await readJson('data/observations.json')
  const candidates = await readJson('data/candidates.json')
  const classifications = await readJson('data/plugin-classifications.json', { schemaVersion: 1, updatedAt: null, classifications: {} })
  const files = await loadRegistryPlugins()
  if (taxonomy.schemaVersion !== 2 || !Array.isArray(taxonomy.groups) || !Array.isArray(taxonomy.categories) || !Array.isArray(taxonomy.tags)) throw new Error('invalid registry taxonomy')
  if (taxonomy.policies?.primaryCategoriesPerPlugin !== 1 || taxonomy.policies?.minimumListedPluginsForPublicCategory !== 3 || JSON.stringify(taxonomy.policies.classificationPrecedence) !== JSON.stringify(['reviewed-override', 'accepted-maintainer', 'llm-classification', 'manifest-evidence', 'evidence-suggestion', 'keyword-suggestion', 'legacy-migration'])) throw new Error('invalid registry policies')
  if (collection.schemaVersion !== 2 || collection.id !== 'editor-picks' || !Array.isArray(collection.items)) throw new Error('invalid editor picks collection')
  if (observations.schemaVersion !== 2 || !observations.updatedAt || !observations.repositories || Array.isArray(observations.repositories)) throw new Error('invalid observations')
  if (candidates.schemaVersion !== 2 || !candidates.updatedAt || !candidates.candidates || Array.isArray(candidates.candidates)) throw new Error('invalid candidates')
  if (classifications.schemaVersion !== 1 || !classifications.classifications || Array.isArray(classifications.classifications)) throw new Error('invalid LLM classifications')
  if (!files.length) throw new Error('registry/plugins is empty')
  unique('group id', taxonomy.groups.map((group) => group.id))
  unique('category id', taxonomy.categories.map((category) => category.id))
  unique('tag id', taxonomy.tags)
  const groups = new Map(taxonomy.groups.map((group) => [group.id, group]))
  const categories = new Map(taxonomy.categories.map((category) => [category.id, category]))
  const tags = new Set(taxonomy.tags)
  for (const category of taxonomy.categories) {
    if (!groups.has(category.group) || !['public', 'internal'].includes(category.visibility) || !category.titles?.zh || !category.titles?.en) throw new Error(`invalid category: ${category.id}`)
  }
  for (const group of taxonomy.groups) {
    if (!group.titles?.zh || !group.titles?.en || !Array.isArray(group.categories)) throw new Error(`invalid group: ${group.id}`)
    for (const category of group.categories) if (categories.get(category)?.group !== group.id) throw new Error(`invalid group category reference: ${group.id}/${category}`)
  }
  const records = files.map(({ file, value }) => ({ file, ...value }))
  unique('plugin id', records.map((record) => record.id))
  unique('repository', records.map((record) => record.repository?.fullName))
  unique('repository URL', records.map((record) => record.repository?.url))
  unique('install spec', records.flatMap((record) => record.installTargets.map((target) => target.spec)))
  const repositoryMap = new Map(records.map((record) => [record.repository.fullName.toLowerCase(), record]))
  const listed = records.filter((record) => record.visibility === 'listed')
  const categoryCounts = new Map()
  for (const record of records) {
    if (record.schemaVersion !== 2 || record.file !== `registry/plugins/${record.id}.json` || pluginId(record.repository?.fullName || '') !== record.id) throw new Error(`invalid registry identity: ${record.file}`)
    if (!record.displayName || !validRepository(record.repository.fullName) || record.repository.url !== `https://github.com/${record.repository.fullName}`) throw new Error(`invalid repository: ${record.id}`)
    if (!record.summaries || typeof record.summaries.zh !== 'string' || typeof record.summaries.en !== 'string') throw new Error(`invalid summaries: ${record.id}`)
    if (!Array.isArray(record.installTargets) || !record.installTargets.length || record.installTargets.some((target) => !['github', 'npm'].includes(target.type) || !validInstallSpec(target.spec))) throw new Error(`invalid install targets: ${record.id}`)
    if (!categories.has(record.classification?.category) || categories.get(record.classification.category).group !== record.classification.group) throw new Error(`invalid classification: ${record.id}`)
    if (!Array.isArray(record.classification.tags) || record.classification.tags.some((tag) => !tags.has(tag))) throw new Error(`invalid classification tags: ${record.id}`)
    if (!['reviewed-override', 'legacy-migration', 'accepted-maintainer', 'manifest-evidence', 'editorial-review'].includes(record.classification.source)) throw new Error(`invalid classification source: ${record.id}`)
    if (!taxonomy.policies.admissionStatuses.includes(record.admission?.status)) throw new Error(`invalid admission status: ${record.id}`)
    if (!taxonomy.policies.lifecycleStatuses.includes(record.lifecycle?.status)) throw new Error(`invalid lifecycle status: ${record.id}`)
    if (!taxonomy.policies.visibilityStatuses.includes(record.visibility)) throw new Error(`invalid visibility: ${record.id}`)
    if (record.visibility === 'listed' && !['legacy-pending', 'verified'].includes(record.admission.status)) throw new Error(`listed plugin has invalid admission status: ${record.id}`)
    if (record.admission.status === 'verified' && observations.repositories[record.id]?.compatibility?.manifestFound !== true) throw new Error(`verified plugin lacks manifest evidence: ${record.id}`)
    if (!/^\d{4}-\d{2}-\d{2}$/.test(record.addedAt) || !Array.isArray(record.maintainers) || !record.maintainers.length) throw new Error(`invalid registry metadata: ${record.id}`)
    categoryCounts.set(record.classification.category, (categoryCounts.get(record.classification.category) || 0) + Number(record.visibility === 'listed'))
  }
  for (const [category, count] of categoryCounts) {
    if (categories.get(category).visibility === 'public' && count > 0 && count < taxonomy.policies.minimumListedPluginsForPublicCategory) throw new Error(`public category has fewer than 3 listed plugins: ${category}`)
  }
  for (const record of listed) if (!observations.repositories[record.id]) throw new Error(`listed plugin lacks observations: ${record.id}`)
  for (const [id, observation] of Object.entries(observations.repositories)) {
    const record = records.find((item) => item.id === id)
    if (!record || observation.repository.toLowerCase() !== record.repository.fullName.toLowerCase()) throw new Error(`orphan observation: ${id}`)
    if (!Array.isArray(observation.failures) || !observation.github || !observation.compatibility || !observation.discovery) throw new Error(`invalid observation: ${id}`)
  }
  unique('editor pick repository', collection.items.map((item) => item.repository))
  unique('editor pick rank', collection.items.map((item) => item.rank))
  for (const [index, item] of [...collection.items].sort((a, b) => a.rank - b.rank).entries()) {
    const record = repositoryMap.get(item.repository.toLowerCase())
    if (!record || record.visibility !== 'listed' || item.rank !== index + 1) throw new Error(`invalid editor pick: ${item.repository}`)
  }
  for (const [id, candidate] of Object.entries(candidates.candidates)) {
    if (candidate.id !== id || pluginId(candidate.repository?.fullName || '') !== id || !validRepository(candidate.repository.fullName)) throw new Error(`invalid candidate identity: ${id}`)
    if (candidate.visibility !== 'hidden' || candidate.admission?.status !== 'candidate') throw new Error(`candidate must remain hidden: ${id}`)
    if (records.some((record) => record.id === id)) throw new Error(`candidate duplicates registry plugin: ${id}`)
    if (!Array.isArray(candidate.sources) || !candidate.sources.length || !Array.isArray(candidate.failures)) throw new Error(`invalid candidate evidence: ${id}`)
  }
  for (const [id, classification] of Object.entries(classifications.classifications)) {
    if (!['classified', 'failed'].includes(classification.status)) throw new Error(`invalid LLM classification status: ${id}`)
    if (classification.status === 'failed') continue
    if (!categories.has(classification.category) || categories.get(classification.category).group !== classification.group) throw new Error(`invalid LLM classification category: ${id}`)
    if (!Array.isArray(classification.tags) || classification.tags.some((tag) => !tags.has(tag))) throw new Error(`invalid LLM classification tags: ${id}`)
    if (!['low', 'medium', 'high'].includes(classification.confidence) || !classification.model || !classification.promptVersion || !classification.classifiedAt || !classification.evidenceHash || !classification.reason) throw new Error(`invalid LLM classification metadata: ${id}`)
  }
  const code2Skill = repositoryMap.get('leechen298/code2skill')
  if (!code2Skill || code2Skill.classification.category !== 'plugin-development' || code2Skill.classification.issueUrl !== 'https://github.com/Ericwong5021/deepseek-plugin-store/issues/1') throw new Error('Issue #1 classification override is missing')
  return { plugins: records.length, listed: listed.length, candidates: Object.keys(candidates.candidates).length, classifications: Object.keys(classifications.classifications).length, editorPicks: collection.items.length }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const result = await validateRegistry()
  console.log(`validated registry ${result.plugins} plugins, ${result.candidates} candidates, ${result.editorPicks} editor picks`)
}
