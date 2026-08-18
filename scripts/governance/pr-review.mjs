#!/usr/bin/env node
import fs from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { EvidenceCollector } from './evidence.mjs'
import { LLMAdapter } from './llm.mjs'
import { applyPolicy, loadPolicy } from './policy.mjs'
import { runDeterministicChecks } from './rules.mjs'
import { readJson } from '../registry-lib.mjs'

const event = JSON.parse(await fs.readFile(process.env.GITHUB_EVENT_PATH, 'utf8'))
const pullRequest = event.pull_request
const token = process.env.GITHUB_TOKEN || ''
const headers = { Accept: 'application/vnd.github+json', 'User-Agent': 'deepseek-plugin-store-governance', ...(token ? { Authorization: `Bearer ${token}` } : {}) }
const request = async (url, accept = 'application/vnd.github+json') => {
  const response = await fetch(url, { headers: { ...headers, Accept: accept }, signal: AbortSignal.timeout(45000) })
  const text = await response.text()
  if (!response.ok) throw new Error(`${url}: ${response.status} ${text.slice(0, 240)}`)
  if (Buffer.byteLength(text) > 200 * 1024) throw new Error(`${url}: response exceeds review limit`)
  return text
}

const outputPath = process.env.GITHUB_OUTPUT
const resultPath = path.join(process.env.RUNNER_TEMP || os.tmpdir(), 'governance-pr-review.json')
const reviewPath = path.join(process.env.RUNNER_TEMP || os.tmpdir(), 'governance-pr-review.md')
let record
let decisionRecord
try {
  const files = JSON.parse(await request(`${pullRequest.url}/files?per_page=100`))
  const registryFile = files.find((file) => /^registry\/plugins\/[a-z0-9-]+\.json$/.test(file.filename) && file.status !== 'removed')
  if (!registryFile) throw new Error('no reviewable registry plugin record found')
  const content = JSON.parse(await request(`https://api.github.com/repos/${event.repository.full_name}/contents/${registryFile.filename}?ref=${pullRequest.head.sha}`))
  record = JSON.parse(Buffer.from(content.content, 'base64').toString('utf8'))
  const diff = await request(pullRequest.diff_url, 'application/vnd.github.v3.diff')
  const taxonomy = await readJson('registry/taxonomy.json')
  const policy = await loadPolicy()
  const evidence = await new EvidenceCollector({ token, maxEvidenceBytes: policy.evidence.maximumBytes }).collect({ fullName: record.repository.fullName, commitSha: record.source?.verifiedCommitSha })
  const reviewEvidence = { ...evidence, evidenceRefs: [...evidence.evidenceRefs, 'diff', 'record', 'pull_request'] }
  const ruleResult = runDeterministicChecks({ snapshot: evidence, taxonomy, installSpec: record.installTargets?.[0]?.spec })
  const adapter = new LLMAdapter({
    apiKey: process.env.LLM_CLASSIFIER_API_KEY || '',
    baseUrl: process.env.LLM_CLASSIFIER_BASE_URL || 'https://codex.talktodo.cn/v1',
    model: process.env.LLM_CLASSIFIER_MODEL || 'gpt-5.3-codex-spark',
    promptVersion: policy.prompts.pullRequestReview,
  })
  if (!adapter.apiKey) throw new Error('semantic review key is not configured')
  const aiDecision = await adapter.reviewPullRequest(diff, { pullRequest: { number: pullRequest.number, author: pullRequest.user.login }, record, policyVersion: policy.version }, reviewEvidence, taxonomy)
  const governance = applyPolicy({ actor: { maintainerVerified: false }, ruleResult, aiDecision, policy })
  decisionRecord = {
    schemaVersion: 1,
    decisionId: `pr-${pullRequest.number}-${pullRequest.head.sha.slice(0, 12)}`,
    pullRequestNumber: pullRequest.number,
    pluginId: record.id,
    repositoryCommitSha: evidence.repositoryCommitSha,
    policyVersion: policy.version,
    promptVersion: policy.prompts.pullRequestReview,
    model: adapter.model,
    rules: ruleResult,
    ai: aiDecision,
    final: governance,
    createdAt: new Date().toISOString(),
  }
} catch (error) {
  decisionRecord = {
    schemaVersion: 1,
    decisionId: `pr-${pullRequest.number}-${pullRequest.head.sha.slice(0, 12)}`,
    pullRequestNumber: pullRequest.number,
    pluginId: record?.id || null,
    final: { finalDecision: 'needs_human', riskLevel: 'R1', autoMerge: false, shadowMode: true, reasons: ['REVIEW_UNAVAILABLE'] },
    error: String(error.message || error).slice(0, 800),
    createdAt: new Date().toISOString(),
  }
}

await fs.writeFile(resultPath, JSON.stringify(decisionRecord, null, 2) + '\n')
await fs.writeFile(reviewPath, `Governance review: **${decisionRecord.final.finalDecision}** · Risk: **${decisionRecord.final.riskLevel}**\n\n${decisionRecord.final.reasons.map((reason) => `- ${reason}`).join('\n') || '- Policy checks passed'}\n\nDecision record: \`${decisionRecord.decisionId}\`\n`)
if (outputPath) await fs.appendFile(outputPath, `decision=${decisionRecord.final.finalDecision}\nrisk=${decisionRecord.final.riskLevel}\nauto_merge=${decisionRecord.final.autoMerge ? 'true' : 'false'}\nreview_file=${reviewPath}\nrecord_file=${resultPath}\n`)
