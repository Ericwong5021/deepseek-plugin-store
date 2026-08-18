#!/usr/bin/env node
import { EvidenceCollector, buildCacheKey } from './governance/evidence.mjs'
import { LLMAdapter } from './governance/llm.mjs'
import { applyPolicy, loadPolicy } from './governance/policy.mjs'
import { runDeterministicChecks } from './governance/rules.mjs'
import { readStateCollection, syncStateCollection } from './governance/state.mjs'
import { loadRegistryPlugins, readJson, sha256 } from './registry-lib.mjs'

const apiKey = process.env.LLM_CLASSIFIER_API_KEY ?? ''
const githubToken = process.env.GITHUB_TOKEN ?? ''
const baseUrl = process.env.LLM_CLASSIFIER_BASE_URL || 'https://codex.talktodo.cn/v1'
const model = process.env.LLM_CLASSIFIER_MODEL || 'gpt-5.3-codex-spark'
const limit = Math.min(100, Math.max(1, Number.parseInt(process.env.LLM_CLASSIFIER_LIMIT || '20', 10) || 20))
const target = String(process.env.LLM_CLASSIFIER_PLUGIN || '').trim().toLowerCase()
const force = process.env.LLM_CLASSIFIER_FORCE === '1'
const shadowMode = process.env.GOVERNANCE_SHADOW_MODE !== '0'
const humanSources = new Set(['reviewed-override', 'editorial-review'])

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

const items = [
  ...registryFiles.map(({ value }) => ({
    id: value.id,
    fullName: value.repository.fullName,
    summary: value.summaries.en || value.summaries.zh || '',
    type: 'registry',
    classification: value.classification,
    repositoryCommitSha: observations.repositories[value.id]?.compatibility?.repositoryCommitSha || null,
  })),
  ...Object.values(candidateData.candidates).filter((candidate) => candidate.checks?.admissionReady === true).map((candidate) => ({
    id: candidate.id,
    fullName: candidate.repository.fullName,
    summary: candidate.summary || '',
    type: 'candidate',
    classification: candidate.classificationSuggestion,
    repositoryCommitSha: candidate.checks?.repositoryCommitSha || null,
  })),
]

const activeIds = new Set(items.map((item) => item.id))
let changed = false
for (const id of Object.keys(cache.classifications)) {
  if (!activeIds.has(id)) {
    delete cache.classifications[id]
    changed = true
  }
}

const eligible = items.filter((item) => !humanSources.has(item.classification?.source))
const matched = target ? eligible.filter((item) => item.id.toLowerCase() === target || item.fullName.toLowerCase() === target) : eligible
if (target && !matched.length) throw new Error(`plugin not found or protected by human classification: ${target}`)
const queue = matched
  .filter((item) => force || cache.classifications[item.id]?.status !== 'classified' || !cache.classifications[item.id]?.cacheKey || item.repositoryCommitSha && cache.classifications[item.id]?.repositoryCommitSha !== item.repositoryCommitSha)
  .sort((a, b) => Number(Boolean(b.classification?.needsReview)) - Number(Boolean(a.classification?.needsReview)) || Number(b.type === 'candidate') - Number(a.type === 'candidate') || a.id.localeCompare(b.id))
  .slice(0, limit)

if (queue.length && !apiKey) throw new Error('LLM_CLASSIFIER_API_KEY is required while governance classifications remain')

const collector = new EvidenceCollector({ token: githubToken, maxEvidenceBytes: policy.evidence.maximumBytes })
const adapter = new LLMAdapter({ apiKey, baseUrl, model, promptVersion: policy.prompts.classification })
const taxonomyHash = sha256(taxonomy)
let classified = 0
let failed = 0
let unchanged = 0

for (const item of queue) {
  let evidence = null
  let cacheKey = ''
  try {
    evidence = await collector.collect(item)
    cacheKey = buildCacheKey({
      evidence,
      taxonomy,
      policyVersion: policy.version,
      promptVersion: policy.prompts.classification,
      model,
      evidenceSchemaVersion: policy.evidence.schemaVersion,
    })
    if (!force && cache.classifications[item.id]?.status === 'classified' && cache.classifications[item.id]?.cacheKey === cacheKey) {
      unchanged++
      continue
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
    cache.classifications[item.id] = {
      status: 'failed',
      model,
      promptVersion: policy.prompts.classification,
      policyVersion: policy.version,
      repositoryCommitSha: evidence?.repositoryCommitSha || null,
      cacheKey: cacheKey || null,
      lastAttemptAt: new Date().toISOString(),
      error: String(error.message || error).slice(0, 500),
      shadowMode,
    }
    failed++
    changed = true
    console.log(`::warning::classification failed for ${item.fullName}: ${error.message}`)
  }
  cache.updatedAt = new Date().toISOString()
  cache.classifications = Object.fromEntries(Object.entries(cache.classifications).sort())
}

if (!shadowMode) {
  for (const candidate of Object.values(candidateData.candidates)) {
    const entry = cache.classifications[candidate.id]
    if (entry?.status !== 'classified' || humanSources.has(candidate.classificationSuggestion?.source)) continue
    candidate.classificationSuggestion = {
      group: entry.group,
      category: entry.category,
      tags: entry.tags,
      source: 'llm-classification',
      confidence: entry.confidence,
      evidence: [`llm:${entry.model}`, `sha256:${entry.evidenceHash}`, `commit:${entry.repositoryCommitSha}`],
      needsReview: entry.governance.finalDecision !== 'approved',
      classifiedAt: entry.classifiedAt,
      reason: entry.reason,
    }
  }
  candidateData.updatedAt = new Date().toISOString()
  candidateData.candidates = Object.fromEntries(Object.entries(candidateData.candidates).sort())
  await syncStateCollection('candidates', originalCandidates, candidateData)
}

if (changed) {
  cache.updatedAt = cache.updatedAt || new Date().toISOString()
  cache.classifications = Object.fromEntries(Object.entries(cache.classifications).sort())
  await syncStateCollection('classifications', originalCache, cache)
}

const recognized = Object.values(cache.classifications).filter((entry) => entry.status === 'classified').length
console.log(JSON.stringify({ selected: queue.length, classified, failed, unchanged, recognized, total: eligible.length, target: target || null, force, shadowMode, adapter: adapter.capability }, null, 2))
if (target && failed) process.exitCode = 1
