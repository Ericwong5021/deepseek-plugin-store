#!/usr/bin/env node
import fs from 'node:fs/promises'
import { execFileSync } from 'node:child_process'
import { generateCatalog } from '../generate-catalog.mjs'
import { pluginId, readJson } from '../registry-lib.mjs'
import { validateRegistry } from '../validate-registry.mjs'
import { stateFile } from './state.mjs'

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
const stateFiles = changes.filter((change) => /^governance\/state\/(candidates|observations|classifications)\/[a-f0-9]{2}\/[a-z0-9-]+\.json$/.test(change.file))
const stateMetaFiles = changes.filter((change) => /^governance\/state\/meta\/[a-z0-9-]+\.json$/.test(change.file))
const stateBatch = stateFiles.length + stateMetaFiles.length === changes.length && stateFiles.length > 0

const pullRequest = async () => {
  if (event.pull_request) return event.pull_request
  const number = process.env.GOVERNANCE_PR_NUMBER
  if (!number) return null
  const response = await fetch(`https://api.github.com/repos/${process.env.GITHUB_REPOSITORY}/pulls/${number}`, {
    headers: { Accept: 'application/vnd.github+json', 'User-Agent': 'deepseek-plugin-store-governance', ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}) },
    signal: AbortSignal.timeout(30000),
  })
  if (!response.ok) throw new Error(`pull request lookup failed: ${response.status}`)
  return response.json()
}

if (mode === 'registry-schema') {
  process.env.REGISTRY_SOURCE_ONLY = stateBatch ? '0' : '1'
  console.log(await validateRegistry())
} else if (mode === 'identity-uniqueness') {
  if (!registryFiles.length && !stateBatch) throw new Error('pull request does not change governance source records')
  for (const change of registryFiles.filter((item) => item.status !== 'D')) {
    const record = await readJson(change.file)
    if (change.file !== `registry/plugins/${record.id}.json` || record.id !== pluginId(record.repository?.fullName || '')) throw new Error(`registry identity mismatch: ${change.file}`)
  }
  for (const change of stateFiles.filter((item) => item.status !== 'D')) {
    const [, , kind, , name] = change.file.split('/')
    const id = name.slice(0, -5)
    const record = await readJson(change.file)
    if (record.id && record.id !== id) throw new Error(`state identity mismatch: ${change.file}`)
    if (stateFile(kind, id) !== change.file) throw new Error(`state shard mismatch: ${change.file}`)
  }
  process.env.REGISTRY_SOURCE_ONLY = stateBatch ? '0' : '1'
  console.log(await validateRegistry())
} else if (mode === 'path-scope') {
  const registryBatch = registryFiles.length === 1 && changes.length === 1
  if (!registryBatch && !stateBatch) throw new Error(`invalid governance path scope: ${changes.map((item) => item.file).join(', ')}`)
  console.log(registryBatch ? registryFiles[0].file : `${stateFiles.length} state records`)
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
  for (const change of stateFiles.filter((item) => item.status !== 'D')) {
    const record = await readJson(change.file)
    const sha = record.repositoryCommitSha || record.checks?.repositoryCommitSha || record.compatibility?.repositoryCommitSha
    if (sha && !/^[a-f0-9]{40}$/.test(sha)) throw new Error(`invalid state commit evidence: ${change.file}`)
  }
  console.log(`verified ${registryFiles.length} registry and ${stateFiles.length} state changes`)
} else if (mode === 'policy-gate') {
  const pr = await pullRequest()
  const body = pr?.body || ''
  const headRef = pr?.head?.ref || process.env.GITHUB_HEAD_REF || ''
  if (stateBatch) {
    if (!headRef.startsWith('automation/governance-') || !body.includes('Governance state batch')) throw new Error('state batch provenance is invalid')
    console.log(`policy gate accepted state batch ${headRef}`)
    process.exit(0)
  }
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
