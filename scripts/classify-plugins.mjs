#!/usr/bin/env node
import fs from 'node:fs/promises'
import { EvidenceCollector, buildCacheKey } from './governance/evidence.mjs'
import { LLMAdapter } from './governance/llm.mjs'
import { applyPolicy, loadPolicy } from './governance/policy.mjs'
import { runDeterministicChecks } from './governance/rules.mjs'
import { readStateCollection, syncStateCollection } from './governance/state.mjs'
import { createFailureRecord, failureClass, failureRetryAt, shouldClassify } from './governance/stability.mjs'
import { loadRegistryPlugins, readJson, sha256 } from './registry-lib.mjs'

const apiKey = process.env.LLM_CLASSIFIER_API_KEY ?? ''
const githubToken = process.env.GITHUB_TOKEN ?? ''
const baseUrl = process.env.LLM_CLASSIFIER_BASE_URL || 'https://codex.talktodo.cn/v1'
const model = process.env.LLM_CLASSIFIER_MODEL || 'gpt-5.3-codex-spark'
const limit = Math.min(250, Math.max(1, Number.parseInt(process.env.LLM_CLASSIFIER_LIMIT || '20', 10) || 20))
const concurrency = Math.min(20, Math.max(1, Number.parseInt(process.env.LLM_CLASSIFIER_CONCURRENCY || '6', 10) || 6))
const target = String(process.env.LLM_CLASSIFIER_PLUGIN || '').trim().toLowerCase()
const force = process.env.LLM_CLASSIFIER_FORCE === '1'
const shadowMode = process.env.GOVERNANCE_SHADOW_MODE !== '0'
const humanSources = new Set(['reviewed-override', 'accepted-maintainer', 'editorial-review'])

const taxonomy = await readJson('registry/taxonomy.json')
const policy = await loadPolicy()
const candidateData = await readStateCollection('candidates')
const registryFiles = await loadRegistryPlugins()
const observations = await readStateCollection('observations')
const cache = await readStateCollection('classifications')
const originalCache = structuredClone(cache)
const originalCandidates = structuredClone(candidateData)
if (![1, 2].includes(cache.schemaVersion) || !cache.classifications || Array.isArray(cache.classifications)) throw new Error('governance classification state is invalid')
cache.schemaVersion = 2
let changed = false

for (const entry of Object.values(cache.classifications)) {
  if (entry.status !== 'failed') continue
  const classification = failureClass(entry.error)
  const nextRetryAt = failureRetryAt({ classification, errorText: entry.error, now: entry.lastAttemptAt })
  const failureState = {
    failureClass: classification,
    attemptCount: entry.attemptCount || 1,
    firstFailedAt: entry.firstFailedAt || entry.lastAttemptAt,
    nextRetryAt,
    retryable: nextRetryAt !== null,
  }
  for (const [key, value] of Object.entries(failureState)) {
    if (entry[key] === value) continue
    entry[key] = value
    changed = true
  }
}

const registryItems = registryFiles.map(({ value }) => ({
  id: value.id,
  fullName: value.repository.fullName,
  summary: value.summaries.en || value.summaries.zh || '',
  type: 'registry',
  classification: value.classification,
  repositoryCommitSha: observations.repositories[value.id]?.compatibility?.repositoryCommitSha || null,
}))
const candidateItems = Object.values(candidateData.candidates).filter((candidate) => candidate.checks?.admissionReady === true).map((candidate) => ({
  id: candidate.id,
  fullName: candidate.repository.fullName,
  summary: candidate.summary || '',
  type: 'candidate',
  classification: candidate.classificationSuggestion,
  repositoryCommitSha: candidate.checks?.repositoryCommitSha || null,
}))
const itemsById = new Map(registryItems.map((item) => [item.id, item]))
for (const item of candidateItems) if (!itemsById.has(item.id)) itemsById.set(item.id, item)
const items = [...itemsById.values()]

const activeIds = new Set(items.map((item) => item.id))
for (const id of Object.keys(cache.classifications)) {
  if (!activeIds.has(id)) {
    delete cache.classifications[id]
    changed = true
  }
}

const eligible = items
const matched = target ? eligible.filter((item) => item.id.toLowerCase() === target || item.fullName.toLowerCase() === target) : eligible
if (target && !matched.length) throw new Error(`plugin not found: ${target}`)
const pauseCandidates = [process.env.LLM_CLASSIFIER_PAUSED_UNTIL, ...Object.values(cache.classifications).filter((entry) => entry.status === 'failed' && entry.failureClass === 'rate_limited').map((entry) => entry.nextRetryAt)].filter(Boolean).sort()
const pausedUntil = pauseCandidates.at(-1) || null
const paused = !target && pausedUntil && Date.parse(pausedUntil) > Date.now()
const queue = (paused ? [] : matched)
  .filter((item) => shouldClassify(cache.classifications[item.id], Date.now(), item.repositoryCommitSha, force))
  .sort((a, b) => Number(Boolean(b.classification?.needsReview)) - Number(Boolean(a.classification?.needsReview)) || Number(b.type === 'candidate') - Number(a.type === 'candidate') || a.id.localeCompare(b.id))
  .slice(0, limit)

if (queue.length && !apiKey) throw new Error('LLM_CLASSIFIER_API_KEY is required while governance classifications remain')

const collector = new EvidenceCollector({ token: githubToken, maxEvidenceBytes: policy.evidence.maximumBytes })
const adapter = new LLMAdapter({ apiKey, baseUrl, model, promptVersion: policy.prompts.classification })
const taxonomyHash = sha256(taxonomy)
let classified = 0
let failed = 0
let unchanged = 0
const evidenceResults = await collector.collectMany(queue)
let cursor = 0

const classifyItem = async (item, evidenceResult) => {
  let evidence = null
  let cacheKey = ''
  try {
    if (evidenceResult instanceof Error) throw evidenceResult
    evidence = evidenceResult
    cacheKey = buildCacheKey({
      evidence,
      taxonomy,
      policyVersion: policy.version,
      promptVersion: policy.prompts.classification,
      model,
      evidenceSchemaVersion: policy.evidence.schemaVersion,
    })
    if (!force && cache.classifications[item.id]?.status === 'classified' && cache.classifications[item.id]?.cacheKey === cacheKey && cache.classifications[item.id]?.summaries?.zh?.trim() && cache.classifications[item.id]?.summaries?.en?.trim()) {
      unchanged++
      return
    }
    const ruleResult = runDeterministicChecks({ snapshot: evidence, taxonomy })
    const aiDecision = await adapter.classifyPlugin(evidence, taxonomy, ruleResult)
    const governance = applyPolicy({ actor: { maintainerVerified: false }, ruleResult, aiDecision, policy: { ...policy, shadowMode } })
    const category = taxonomy.categories.find((entry) => entry.id === aiDecision.classification.primaryCategory)
    cache.classifications[item.id] = {
      status: 'classified',
      group: category.group,
      category: category.id,
      tags: aiDecision.classification.tags,
      confidence: aiDecision.confidence >= 0.9 ? 'high' : aiDecision.confidence >= 0.7 ? 'medium' : 'low',
      confidenceScore: aiDecision.confidence,
      reason: aiDecision.summary,
      summaries: {
        zh: aiDecision.descriptions.zh.trim(),
        en: aiDecision.descriptions.en.trim(),
      },
      risk: aiDecision.risk,
      governance,
      model,
      promptVersion: policy.prompts.classification,
      policyVersion: policy.version,
      classifiedAt: new Date().toISOString(),
      repositoryCommitSha: evidence.repositoryCommitSha,
      evidenceHash: evidence.evidenceHash,
      taxonomyHash,
      cacheKey,
      shadowMode,
    }
    classified++
    changed = true
    console.log(`classified ${item.fullName}: ${category.id} ${governance.riskLevel}`)
  } catch (error) {
    const now = new Date().toISOString()
    cache.classifications[item.id] = createFailureRecord({
      previous: cache.classifications[item.id],
      error,
      now,
      model,
      promptVersion: policy.prompts.classification,
      policyVersion: policy.version,
      repositoryCommitSha: evidence?.repositoryCommitSha || null,
      cacheKey: cacheKey || null,
      shadowMode,
    })
    failed++
    changed = true
    console.log(`::warning::classification failed for ${item.fullName}: ${error.message}`)
  }
}

const worker = async () => {
  while (cursor < queue.length) {
    const index = cursor++
    await classifyItem(queue[index], evidenceResults[index])
  }
}
await Promise.all(Array.from({ length: Math.min(concurrency, queue.length) }, worker))
if (queue.length) {
  cache.updatedAt = new Date().toISOString()
  cache.classifications = Object.fromEntries(Object.entries(cache.classifications).sort())
}

if (!shadowMode) {
  let candidateChanged = false
  for (const candidate of Object.values(candidateData.candidates)) {
    const entry = cache.classifications[candidate.id]
    if (entry?.status !== 'classified') continue
    if (entry.summaries?.en && candidate.summary !== entry.summaries.en) {
      candidate.summary = entry.summaries.en
      candidateChanged = true
    }
    if (humanSources.has(candidate.classificationSuggestion?.source)) continue
    const classificationSuggestion = {
      group: entry.group,
      category: entry.category,
      tags: entry.tags,
      source: 'llm-classification',
      confidence: entry.confidence,
      evidence: [`llm:${entry.model}`, `sha256:${entry.evidenceHash}`, `commit:${entry.repositoryCommitSha}`],
      needsReview: entry.governance?.finalDecision !== 'approved',
      classifiedAt: entry.classifiedAt,
      reason: entry.reason,
    }
    if (JSON.stringify(candidate.classificationSuggestion) !== JSON.stringify(classificationSuggestion)) {
      candidate.classificationSuggestion = classificationSuggestion
      candidateChanged = true
    }
  }
  if (candidateChanged) {
    candidateData.updatedAt = new Date().toISOString()
    candidateData.candidates = Object.fromEntries(Object.entries(candidateData.candidates).sort())
    await syncStateCollection('candidates', originalCandidates, candidateData)
  }
}

if (changed) {
  cache.updatedAt = cache.updatedAt || new Date().toISOString()
  cache.classifications = Object.fromEntries(Object.entries(cache.classifications).sort())
  await syncStateCollection('classifications', originalCache, cache)
}

const recognized = Object.values(cache.classifications).filter((entry) => entry.status === 'classified').length
const unavailable = Object.values(cache.classifications).filter((entry) => entry.status === 'failed').length
const remaining = eligible.filter((item) => shouldClassify(cache.classifications[item.id], Date.now(), item.repositoryCommitSha, false)).length
const result = { selected: queue.length, classified, failed, unchanged, recognized, unavailable, remaining, total: eligible.length, target: target || null, force, shadowMode, concurrency, paused, pausedUntil, adapter: adapter.capability }
console.log(JSON.stringify(result, null, 2))
if (process.env.GITHUB_OUTPUT) await fs.appendFile(process.env.GITHUB_OUTPUT, `remaining=${remaining}\nunavailable=${unavailable}\nrecognized=${recognized}\npaused=${paused}\npaused_until=${pausedUntil || ''}\n`)
if (target && failed) process.exitCode = 1
