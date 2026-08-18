import assert from 'node:assert/strict'
import test from 'node:test'
import { createFailureRecord, formatGovernanceReview, mergeCandidateDiscovery, selectEvidenceSummary, shouldClassify, shouldReplaceCandidateClassification } from './stability.mjs'

const existingCandidate = {
  id: 'agentmail-to-dsh-agentmail',
  repository: {
    fullName: 'agentmail-to/dsh-agentmail',
    url: 'https://github.com/agentmail-to/dsh-agentmail',
  },
  summary: 'Give a DeepSeek Harness agent its own email inbox.',
  sources: ['github-topic'],
  admission: { status: 'candidate' },
  lifecycle: { suggestion: 'active' },
  visibility: 'hidden',
  discoveredAt: '2026-08-18T13:14:30.302Z',
  lastSeenAt: '2026-08-18T13:14:30.302Z',
  checks: {
    checkedAt: '2026-08-18T13:14:30.302Z',
    repositoryCommitSha: 'a'.repeat(40),
    admissionReady: true,
    reasons: [],
  },
  failures: [],
  classificationSuggestion: {
    group: 'integrations-communication',
    category: 'external-services',
    source: 'llm-classification',
    confidence: 'high',
  },
}

test('unchanged candidate discovery preserves useful summary', () => {
  const result = mergeCandidateDiscovery({
    existing: existingCandidate,
    source: {
      fullName: 'agentmail-to/dsh-agentmail',
      url: 'https://github.com/agentmail-to/dsh-agentmail',
      origins: ['awesome-dsh-plugin'],
      summary: 'agentmail-to/dsh-agentmail',
      metadata: null,
    },
    now: '2026-08-18T14:52:56.984Z',
  })
  assert.equal(result.summary, existingCandidate.summary)
})

test('unchanged candidate discovery preserves classification suggestion', () => {
  const result = mergeCandidateDiscovery({
    existing: existingCandidate,
    source: {
      fullName: 'agentmail-to/dsh-agentmail',
      url: 'https://github.com/agentmail-to/dsh-agentmail',
      origins: ['awesome-dsh-plugin'],
      summary: 'agentmail-to/dsh-agentmail',
      metadata: null,
    },
    now: '2026-08-18T14:52:56.984Z',
  })
  assert.deepEqual(result.classificationSuggestion, existingCandidate.classificationSuggestion)
})

test('unchanged SHA preserves candidate summary during evidence refresh', () => {
  const summary = selectEvidenceSummary({
    existingSummary: existingCandidate.summary,
    evidenceSummary: 'agentmail-to/dsh-agentmail',
    fullName: existingCandidate.repository.fullName,
    previousCommitSha: 'a'.repeat(40),
    repositoryCommitSha: 'a'.repeat(40),
  })
  assert.equal(summary, existingCandidate.summary)
})

test('unchanged or first-observed SHA preserves candidate classification suggestion', () => {
  assert.equal(shouldReplaceCandidateClassification({ existingSuggestion: existingCandidate.classificationSuggestion, previousCommitSha: 'a'.repeat(40), repositoryCommitSha: 'a'.repeat(40) }), false)
  assert.equal(shouldReplaceCandidateClassification({ existingSuggestion: existingCandidate.classificationSuggestion, previousCommitSha: null, repositoryCommitSha: 'a'.repeat(40) }), false)
  assert.equal(shouldReplaceCandidateClassification({ existingSuggestion: existingCandidate.classificationSuggestion, previousCommitSha: 'a'.repeat(40), repositoryCommitSha: 'b'.repeat(40) }), true)
})

test('repository not found failures wait seven days before retry', () => {
  const now = '2026-08-18T14:52:55.146Z'
  const entry = createFailureRecord({
    previous: null,
    error: new Error('https://api.github.com/repos/example/missing: 404 Not Found'),
    now,
    model: 'gpt-5.3-codex-spark',
    promptVersion: 'classify-v2',
    policyVersion: '2026-08-18',
    shadowMode: true,
  })
  assert.equal(entry.failureClass, 'repository_not_found')
  assert.equal(entry.attemptCount, 1)
  assert.equal(entry.retryable, true)
  assert.equal(entry.nextRetryAt, '2026-08-25T14:52:55.146Z')
  assert.equal(shouldClassify({ status: 'failed', ...entry }, Date.parse('2026-08-25T14:52:55.145Z')), false)
  assert.equal(shouldClassify({ status: 'failed', ...entry }, Date.parse(entry.nextRetryAt)), true)
})

test('permanent identity failures never retry', () => {
  const entry = createFailureRecord({
    previous: null,
    error: new Error('invalid identity: example/plugin'),
    now: '2026-08-18T14:52:55.146Z',
    model: 'gpt-5.3-codex-spark',
    promptVersion: 'classify-v2',
    policyVersion: '2026-08-18',
    shadowMode: true,
  })
  assert.equal(entry.failureClass, 'invalid_identity')
  assert.equal(entry.retryable, false)
  assert.equal(entry.nextRetryAt, null)
  assert.equal(shouldClassify({ status: 'failed', ...entry }, Date.now()), false)
})

test('governance review displays the current evidence SHA', () => {
  const text = formatGovernanceReview({
    decisionId: 'pr-40-current',
    repositoryCommitSha: 'b'.repeat(40),
    final: {
      finalDecision: 'needs_human',
      riskLevel: 'R2',
      reasons: ['HIGH_RISK_CAPABILITY'],
    },
  })
  assert.match(text, /Decision record: `pr-40-current`/)
  assert.ok(text.includes(`Evidence SHA: \`${'b'.repeat(40)}\``))
})
