import fs from 'node:fs/promises'

const catalog = JSON.parse(await fs.readFile('data/plugins.json', 'utf8'))
if (catalog.schemaVersion !== 1) throw new Error('schemaVersion must be 1')
if (!catalog.updatedAt || !Array.isArray(catalog.plugins) || !Array.isArray(catalog.related)) throw new Error('catalog top-level fields are invalid')

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
const duplicateInstallIdentifiers = new Map()
for (const plugin of catalog.plugins) {
  const value = plugin.npmName || `github:${plugin.fullName}`
  duplicateInstallIdentifiers.set(value, [...(duplicateInstallIdentifiers.get(value) || []), plugin.fullName])
}
for (const [value, repositories] of duplicateInstallIdentifiers) {
  if (repositories.length > 1) console.warn(`legacy duplicate install identifier ${value}: ${repositories.join(', ')}`)
}

for (const plugin of catalog.plugins) {
  if (plugin.isPlugin !== true) throw new Error(`${plugin.fullName} is not verified as a plugin`)
  if (!/^https:\/\/github\.com\/[\w.-]+\/[\w.-]+\/?$/.test(plugin.url)) throw new Error(`invalid repository URL: ${plugin.url}`)
  if (!plugin.category?.id || !plugin.pushedAt) throw new Error(`incomplete plugin: ${plugin.fullName}`)
}

console.log(`validated ${catalog.plugins.length} plugins and ${catalog.related.length} related projects`)
