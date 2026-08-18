import { readJson } from '../registry-lib.mjs'

const r2Capabilities = new Set(['shell.execute', 'credential.read', 'filesystem.write', 'computer.control', 'binary.execute'])

export const loadPolicy = async (file = 'governance/policy.json') => readJson(file)

export const applyPolicy = ({ actor = {}, ruleResult, aiDecision, policy }) => {
  const capabilities = [...new Set([...(ruleResult.capabilities || []), ...(aiDecision.risk?.capabilities || [])])]
  const riskLevel = capabilities.some((capability) => r2Capabilities.has(capability)) || aiDecision.risk?.level === 'R2'
    ? 'R2'
    : actor.maintainerVerified && aiDecision.risk?.level === 'R0'
      ? 'R0'
      : 'R1'
  const reasons = []
  let finalDecision = 'needs_human'
  if (!ruleResult.passed) {
    finalDecision = 'needs_changes'
    reasons.push(...ruleResult.results.filter((result) => !result.passed).map((result) => result.code))
  } else if (riskLevel === 'R2') {
    reasons.push('HIGH_RISK_CAPABILITY')
  } else if (!actor.maintainerVerified) {
    reasons.push('UNVERIFIED_MAINTAINER')
  } else if (aiDecision.decision !== 'approve' || aiDecision.confidence < policy.thresholds.r0Confidence) {
    reasons.push('AI_REVIEW_REQUIRED')
  } else {
    finalDecision = 'approved'
  }
  const autoMerge = Boolean(finalDecision === 'approved' && riskLevel === 'R0' && policy.autoMerge.enabled && policy.autoMerge.humanOverrideRate < policy.autoMerge.maximumHumanOverrideRate && policy.autoMerge.highRiskFalseNegatives === 0)
  return {
    schemaVersion: 1,
    policyVersion: policy.version,
    finalDecision,
    riskLevel,
    capabilities,
    autoMerge,
    shadowMode: policy.shadowMode,
    reasons,
    trace: {
      rulesPassed: ruleResult.passed,
      aiDecision: aiDecision.decision,
      aiConfidence: aiDecision.confidence,
      maintainerVerified: Boolean(actor.maintainerVerified),
    },
  }
}
