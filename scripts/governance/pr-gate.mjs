#!/usr/bin/env node
import fs from 'node:fs/promises'
import { execFileSync } from 'node:child_process'
import { generateCatalog } from '../generate-catalog.mjs'
import { pluginId, readJson } from '../registry-lib.mjs'
import { validateRegistry } from '../validate-registry.mjs'

const mode = process.argv[2]
const event = process.env.GITHUB_EVENT_PATH ? JSON.parse(await fs.readFile(process.env.GITHUB_EVENT_PATH, 'utf8')) : {}
const baseSha = event.pull_request?.base?.sha || process.env.GITHUB_BASE_SHA
const headSha = event.pull_request?.head?.sha || process.env.GITHUB_HEAD_SHA || 'HEAD'
if (!baseSha) throw new Error('pull request base SHA is missing')
const diff = execFileSync('git', ['diff', '--name-status', `${baseSha}...${headSha}`], { encoding: 'utf8' }).trim().split('\n').filter(Boolean)
const changes = diff.map((line) => {
  const [status, ...parts] = line.split('\t')
  return { status, file: parts.at(-1) }
})
const registryFiles = changes.filter((change) => /^registry\/plugins\/[a-z0-9-]+\.json$/.test(change.file))

if (mode === 'registry-schema') {
  process.env.REGISTRY_SOURCE_ONLY = '1'
  console.log(await validateRegistry())
} else if (mode === 'identity-uniqueness') {
  if (!registryFiles.length) throw new Error('pull request does not change a registry plugin record')
  for (const change of registryFiles.filter((item) => item.status !== 'D')) {
    const record = await readJson(change.file)
    if (change.file !== `registry/plugins/${record.id}.json` || record.id !== pluginId(record.repository?.fullName || '')) throw new Error(`registry identity mismatch: ${change.file}`)
  }
  process.env.REGISTRY_SOURCE_ONLY = '1'
  console.log(await validateRegistry())
} else if (mode === 'path-scope') {
  const unexpected = changes.filter((change) => !/^registry\/plugins\/[a-z0-9-]+\.json$/.test(change.file))
  if (unexpected.length) throw new Error(`unexpected paths: ${unexpected.map((item) => item.file).join(', ')}`)
  if (registryFiles.length !== 1) throw new Error(`expected exactly one registry plugin file, found ${registryFiles.length}`)
  console.log(registryFiles[0].file)
} else if (mode === 'immutable-evidence') {
  const token = process.env.GITHUB_TOKEN || ''
  for (const change of registryFiles.filter((item) => item.status !== 'D')) {
    const record = await readJson(change.file)
    const sha = record.source?.verifiedCommitSha
    if (!/^[a-f0-9]{40}$/.test(sha || '') || !record.admission?.evidence?.includes(`commit:${sha}`)) throw new Error(`immutable source evidence is missing: ${record.id}`)
    const response = await fetch(`https://api.github.com/repos/${record.repository.fullName}/commits/${sha}`, {
      headers: { Accept: 'application/vnd.github+json', 'User-Agent': 'deepseek-plugin-store-governance', ...(token ? { Authorization: `Bearer ${token}` } : {}) },
      signal: AbortSignal.timeout(30000),
    })
    if (!response.ok) throw new Error(`verified commit does not exist: ${record.repository.fullName}@${sha}`)
  }
  console.log(`verified ${registryFiles.length} immutable registry changes`)
} else if (mode === 'policy-gate') {
  const body = event.pull_request?.body || ''
  const issues = [...body.matchAll(/(?:closes|fixes|resolves)\s+#(\d+)/gi)].map((match) => match[1])
  if (new Set(issues).size !== 1) throw new Error('pull request must close exactly one source issue')
  for (const change of registryFiles.filter((item) => item.status !== 'D')) {
    const record = await readJson(change.file)
    if (record.classification?.source === 'accepted-maintainer' || record.classification?.needsReview !== true) throw new Error(`maintainer classification bypass is not allowed: ${record.id}`)
  }
  console.log(`policy gate linked issue ${issues[0]}`)
} else if (mode === 'catalog-determinism') {
  await generateCatalog()
  const first = await Promise.all(['data/catalog-v2.json', 'data/catalog.json', 'data/plugins.json', 'data/editor-picks.json'].map((file) => fs.readFile(file, 'utf8')))
  await generateCatalog()
  const second = await Promise.all(['data/catalog-v2.json', 'data/catalog.json', 'data/plugins.json', 'data/editor-picks.json'].map((file) => fs.readFile(file, 'utf8')))
  if (JSON.stringify(first) !== JSON.stringify(second)) throw new Error('catalog generation is not deterministic')
  console.log('catalog generation is deterministic')
} else {
  throw new Error(`unknown PR gate mode: ${mode}`)
}
