import fs from 'node:fs/promises'

const catalog = JSON.parse(await fs.readFile('data/catalog.json', 'utf8'))
const pluginsMirror = JSON.parse(await fs.readFile('data/plugins.json', 'utf8'))
const editorPicks = JSON.parse(await fs.readFile('data/editor-picks.json', 'utf8'))
if (JSON.stringify(catalog) !== JSON.stringify(pluginsMirror)) throw new Error('data/plugins.json must mirror data/catalog.json')
if (catalog.schemaVersion !== 1) throw new Error('schemaVersion must be 1')
if (!catalog.updatedAt || !catalog.sourceCommit || !Array.isArray(catalog.plugins) || !Array.isArray(catalog.related)) throw new Error('catalog top-level fields are invalid')
if (!Array.isArray(editorPicks)) throw new Error('editor picks must be an array')

const unique = (label, values) => {
  const seen = new Set()
  for (const value of values) {
    if (!value) throw new Error(`${label} contains an empty value`)
    if (seen.has(value)) throw new Error(`duplicate ${label}: ${value}`)
    seen.add(value)
  }
}

unique('repository', catalog.plugins.map((plugin) => plugin.url))
unique('plugin name', catalog.plugins.map((plugin) => plugin.fullName.toLowerCase()))
unique('slug', catalog.plugins.map((plugin) => plugin.slug))
unique('install spec', catalog.plugins.map((plugin) => plugin.installSpec))

for (const entry of editorPicks) {
  if (!entry || !/^[\w.-]+\/[\w.-]+$/.test(entry.repository)) throw new Error(`invalid editor pick repository: ${entry?.repository}`)
  if (entry.summary !== undefined && (typeof entry.summary !== 'string' || !entry.summary.trim())) throw new Error(`invalid editor pick summary: ${entry.repository}`)
}
unique('editor pick', editorPicks.map((entry) => entry.repository.toLowerCase()))

for (const plugin of catalog.plugins) {
  if (plugin.isPlugin !== true) throw new Error(`${plugin.fullName} is not selected as a plugin`)
  if (!/^https:\/\/github\.com\/[\w.-]+\/[\w.-]+\/?$/.test(plugin.url)) throw new Error(`invalid repository URL: ${plugin.url}`)
  if (!plugin.category?.id || !plugin.pushedAt || typeof plugin.summary !== 'string' || !plugin.author || !plugin.status) throw new Error(`incomplete plugin: ${plugin.fullName}`)
  if (plugin.installSpec !== `github:${plugin.fullName}`) throw new Error(`invalid install spec: ${plugin.fullName}`)
  if (plugin.source?.type === 'github-topic') {
    if (plugin.source.topic !== 'dsh-plugin') throw new Error(`invalid topic source: ${plugin.fullName}`)
  } else if (plugin.source?.type === 'editor-pick') {
    if (plugin.source.file !== 'data/editor-picks.json' || plugin.category.id !== 'editor-picks' || plugin.featured !== true) throw new Error(`invalid editor pick source: ${plugin.fullName}`)
  } else {
    throw new Error(`invalid discovery source: ${plugin.fullName}`)
  }
  if (typeof plugin.compatibility?.manifestFound !== 'boolean') throw new Error(`invalid manifest evidence: ${plugin.fullName}`)
  if (plugin.compatibility.manifestFound && plugin.compatibility.manifestPath !== 'package.json:dsh.bundle') throw new Error(`invalid manifest path: ${plugin.fullName}`)
  if (!plugin.compatibility.manifestFound && plugin.compatibility.manifestPath !== null) throw new Error(`unexpected manifest path: ${plugin.fullName}`)
  if (plugin.quality) {
    if (!Number.isInteger(plugin.quality.score) || plugin.quality.score < 0 || plugin.quality.score > 100) throw new Error(`invalid quality score: ${plugin.fullName}`)
    if (!['A', 'B', 'C', 'D'].includes(plugin.quality.grade)) throw new Error(`invalid quality grade: ${plugin.fullName}`)
    if (!plugin.quality.assessedAt || !plugin.quality.sourceLastPushAt || !plugin.quality.analyzer?.model) throw new Error(`incomplete quality assessment: ${plugin.fullName}`)
  }
}

console.log(`validated ${catalog.plugins.length} catalog repositories and ${editorPicks.length} editor picks`)
