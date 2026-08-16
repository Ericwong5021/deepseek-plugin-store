#!/usr/bin/env node
import { generateCatalog } from './generate-catalog.mjs'
import { readJson } from './registry-lib.mjs'
import { validateRegistry } from './validate-registry.mjs'

const registry = await validateRegistry()
await generateCatalog({ check: true })
const catalogV2 = await readJson('data/catalog-v2.json')
const catalog = await readJson('data/catalog.json')
const mirror = await readJson('data/plugins.json')
if (JSON.stringify(catalog) !== JSON.stringify(mirror)) throw new Error('data/plugins.json must mirror data/catalog.json')
if (catalogV2.schemaVersion !== 2 || catalog.schemaVersion !== 1) throw new Error('invalid public catalog schema versions')
const v2Urls = catalogV2.plugins.map((plugin) => plugin.repository.url).sort()
const v1Urls = catalog.plugins.map((plugin) => plugin.url).sort()
if (JSON.stringify(v2Urls) !== JSON.stringify(v1Urls)) throw new Error('v1 and v2 public rosters differ')
if (catalogV2.plugins.some((plugin) => plugin.visibility !== 'listed')) throw new Error('hidden plugin leaked into catalog v2')
const ids = new Set(catalogV2.plugins.map((plugin) => plugin.id))
for (const ranking of Object.values(catalogV2.collections.rankings)) {
  if (ranking.items.some((id) => !ids.has(id))) throw new Error(`ranking contains unknown plugin: ${ranking.method}`)
}
const code2Skill = catalog.plugins.find((plugin) => plugin.fullName.toLowerCase() === 'leechen298/code2skill')
if (code2Skill?.category?.id !== 'dev-helpers') throw new Error('Issue #1 legacy projection is incorrect')
console.log(`validated catalog v2 and v1 projections for ${registry.listed} listed plugins`)
