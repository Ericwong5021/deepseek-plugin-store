const HOUR = 60 * 60 * 1000
const DAY = 24 * HOUR

const retryPolicy = {
  repository_not_found: 7 * DAY,
  rate_limited: HOUR,
  network_error: 6 * HOUR,
  invalid_response: DAY,
  invalid_identity: Infinity,
}

export const isUsefulSummary = (value, fullName) => {
  const normalized = String(value || '').trim()
  return Boolean(normalized && normalized.toLowerCase() !== fullName.toLowerCase() && normalized.length > fullName.length)
}

export const mergeCandidateDiscovery = ({ existing, source, now }) => {
  const sources = [...new Set([...(existing?.sources || []), ...source.origins])]
  const metadataChanged = Boolean(source.metadata && (
    source.metadata.pushed_at !== existing?.github?.lastPushAt
    || source.metadata.stargazers_count !== existing?.github?.stars
    || Boolean(source.metadata.archived) !== Boolean(existing?.github?.archived)
    || (source.metadata.license?.spdx_id ?? null) !== (existing?.github?.license ?? null)
  ))
  const summary = [source.metadata?.description, existing?.summary, source.summary]
    .find((value) => isUsefulSummary(value, source.fullName))
    || existing?.summary
    || source.summary
    || ''
  const sourcesChanged = !existing || sources.length !== existing.sources.length
  const summaryChanged = !existing || summary !== existing.summary
  return {
    ...existing,
    id: existing?.id || source.id,
    repository: { fullName: source.fullName, url: source.url },
    summary,
    sources,
    admission: existing?.admission || { status: 'candidate' },
    lifecycle: existing?.lifecycle || { suggestion: 'incubating' },
    visibility: existing?.visibility || 'hidden',
    discoveredAt: existing?.discoveredAt || now,
    lastSeenAt: !existing || sourcesChanged || metadataChanged || summaryChanged ? now : existing.lastSeenAt,
    checks: existing?.checks || { admissionReady: false, reasons: ['not-reviewed'] },
    failures: existing?.failures || [],
    ...(metadataChanged || !existing && source.metadata ? { github: {
      ...existing?.github,
      stars: source.metadata.stargazers_count,
      license: source.metadata.license?.spdx_id ?? null,
      archived: Boolean(source.metadata.archived),
      private: Boolean(source.metadata.private),
      createdAt: source.metadata.created_at,
      lastPushAt: source.metadata.pushed_at,
      capturedAt: now,
    } } : existing?.github ? { github: existing.github } : {}),
  }
}

export const selectEvidenceSummary = ({ existingSummary, evidenceSummary, fullName, previousCommitSha, repositoryCommitSha }) => {
  if ((!previousCommitSha || previousCommitSha === repositoryCommitSha) && isUsefulSummary(existingSummary, fullName)) return existingSummary
  return isUsefulSummary(evidenceSummary, fullName) ? String(evidenceSummary).trim() : existingSummary || evidenceSummary || ''
}

export const shouldReplaceCandidateClassification = ({ existingSuggestion, previousCommitSha, repositoryCommitSha }) => {
  if (!existingSuggestion) return true
  return Boolean(previousCommitSha && previousCommitSha !== repositoryCommitSha)
}

export const failureClass = (error) => {
  const message = String(error?.message || error)
  if (/invalid identity|plugin not found or protected/i.test(message)) return 'invalid_identity'
  if (/(?:\s|:)404(?:\s|$)|not found/i.test(message)) return 'repository_not_found'
  if (/\b429\b|rate.?limit|secondary limit/i.test(message)) return 'rate_limited'
  if (/schema|invalid json|after json|json at position|unsupported fields|confidence is invalid|decision is invalid|risk result is invalid|classification .*invalid|plugin descriptions are invalid|model response|response did not contain text|unknown evidence|response_format|choices\[|structured output/i.test(message)) return 'invalid_response'
  return 'network_error'
}

export const failureRetryAt = ({ classification, errorText, now }) => {
  if (classification === 'rate_limited') {
    const resetAt = String(errorText).match(/"resets_at":\s*(\d+)/)?.[1]
    if (resetAt) return new Date(Number(resetAt) * 1000).toISOString()
    const resetSeconds = String(errorText).match(/"reset_seconds":\s*(\d+)/)?.[1]
    if (resetSeconds) return new Date(Date.parse(now) + Number(resetSeconds) * 1000).toISOString()
  }
  const delay = retryPolicy[classification]
  return Number.isFinite(delay) ? new Date(Date.parse(now) + delay).toISOString() : null
}

export const createFailureRecord = ({ previous, error, now, model, promptVersion, policyVersion, shadowMode, repositoryCommitSha = null, cacheKey = null }) => {
  const errorText = String(error?.message || error).slice(0, 500)
  const classification = failureClass(error)
  const delay = retryPolicy[classification]
  const retryable = Number.isFinite(delay)
  return {
    status: 'failed',
    model,
    promptVersion,
    policyVersion,
    repositoryCommitSha,
    cacheKey,
    failureClass: classification,
    attemptCount: previous?.status === 'failed' ? (previous.attemptCount || 1) + 1 : 1,
    firstFailedAt: previous?.status === 'failed' ? previous.firstFailedAt || previous.lastAttemptAt || now : now,
    lastAttemptAt: now,
    nextRetryAt: failureRetryAt({ classification, errorText, now }),
    retryable,
    error: errorText,
    shadowMode,
  }
}

export const shouldClassify = (entry, now = Date.now(), repositoryCommitSha = null, force = false) => {
  if (force || !entry) return true
  if (entry.status === 'failed') {
    if (entry.retryable === false) return false
    if (entry.failureClass !== 'rate_limited' && (entry.attemptCount || 1) < 2) return true
    const nextRetry = Date.parse(entry.nextRetryAt || 0)
    return !Number.isFinite(nextRetry) || nextRetry <= now
  }
  if (entry.status !== 'classified') return true
  if (!entry.summaries?.zh?.trim() || !entry.summaries?.en?.trim()) return true
  if (!repositoryCommitSha || !entry.repositoryCommitSha) return false
  return entry.repositoryCommitSha !== repositoryCommitSha
}

export const formatGovernanceReview = (decisionRecord) => {
  const evidence = decisionRecord.repositoryCommitSha ? `\nEvidence SHA: \`${decisionRecord.repositoryCommitSha}\`` : ''
  return `Governance review: **${decisionRecord.final.finalDecision}** · Risk: **${decisionRecord.final.riskLevel}**\n\n${decisionRecord.final.reasons.map((reason) => `- ${reason}`).join('\n') || '- Policy checks passed'}\n\nDecision record: \`${decisionRecord.decisionId}\`${evidence}\n`
}
