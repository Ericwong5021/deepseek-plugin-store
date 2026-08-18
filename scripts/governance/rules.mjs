import { validInstallSpec, validRepository } from '../registry-lib.mjs'

const capabilityPatterns = [
  ['shell.execute', /\b(?:child_process|execSync|spawnSync|shell\.execute|terminal control|powershell\.exe)\b/i],
  ['credential.read', /\b(?:credential|cookie|keychain|secret|api.?key|access.?token|auth.?token)\b/i],
  ['filesystem.write', /\b(?:writefile|appendfile|unlink|rename|chmod|filesystem write|file write)\b/i],
  ['computer.control', /\b(?:computer.?use|mouse|keyboard|desktop control|browser control)\b/i],
  ['binary.execute', /\b(?:download.{0,30}(?:binary|executable)|remote binary|installer)\b/i],
  ['network.access', /\b(?:fetch|http|websocket|proxy|network|api)\b/i],
]

const manifestPaths = (bundle) => {
  const paths = []
  const visit = (value, key = '') => {
    if (typeof value === 'string' && value.startsWith('./') && /(?:patch|entry|file|path|source|module)$/i.test(key)) paths.push(value.slice(2))
    if (Array.isArray(value)) for (const item of value) visit(item, key)
    if (value && typeof value === 'object' && !Array.isArray(value)) for (const [childKey, child] of Object.entries(value)) visit(child, childKey)
  }
  visit(bundle)
  return [...new Set(paths)]
}

export const runDeterministicChecks = ({ snapshot, taxonomy, installSpec = '' }) => {
  const results = []
  const add = (code, passed, evidenceRef, detail = '') => results.push({ code, passed, evidenceRef, detail })
  let pkg = null
  try {
    pkg = snapshot.packageJson ? JSON.parse(snapshot.packageJson) : null
    add('PACKAGE_JSON_VALID', Boolean(pkg), 'package.json')
  } catch (error) {
    add('PACKAGE_JSON_VALID', false, 'package.json', error.message)
  }
  const bundle = pkg?.dsh?.bundle
  const bundleValid = Boolean(bundle && typeof bundle === 'object' && !Array.isArray(bundle) && Object.keys(bundle).length)
  const missing = bundleValid ? manifestPaths(bundle).filter((file) => !snapshot.files.includes(file)) : []
  add('PUBLIC_REPOSITORY', !snapshot.repository.private, 'repository')
  add('ACTIVE_REPOSITORY', !snapshot.repository.archived && !snapshot.repository.disabled, 'repository')
  add('IMMUTABLE_COMMIT', /^[a-f0-9]{40}$/.test(snapshot.repositoryCommitSha), 'commit')
  add('VALID_REPOSITORY_IDENTITY', validRepository(snapshot.repository.fullName), 'repository')
  add('DSH_BUNDLE_PRESENT', bundleValid, 'package.json')
  add('MANIFEST_REFERENCES_VALID', bundleValid && !missing.length && !snapshot.treeTruncated, 'tree', missing.join(', '))
  add('README_PRESENT', Boolean(snapshot.readme.trim()), 'readme')
  if (installSpec) add('INSTALL_SPEC_VALID', validInstallSpec(installSpec), 'repository', installSpec)
  const text = `${snapshot.readme}\n${snapshot.packageJson}\n${snapshot.files.join('\n')}`
  const capabilities = capabilityPatterns.filter(([, pattern]) => pattern.test(text)).map(([capability]) => capability)
  return {
    passed: results.every((result) => result.passed),
    results,
    capabilities,
    admissionReady: results.filter((result) => ['PUBLIC_REPOSITORY', 'ACTIVE_REPOSITORY', 'IMMUTABLE_COMMIT', 'DSH_BUNDLE_PRESENT', 'MANIFEST_REFERENCES_VALID', 'README_PRESENT'].includes(result.code)).every((result) => result.passed),
    taxonomyCategories: taxonomy.categories.map((category) => category.id),
  }
}

export const validateAiDecision = ({ decision, taxonomy, evidenceRefs }) => {
  if (!decision || decision.schemaVersion !== 1) throw new Error('AI decision schemaVersion must be 1')
  const allowed = new Set(['intent', 'decision', 'classification', 'risk', 'confidence', 'requestedChanges', 'summary', 'schemaVersion'])
  if (Object.keys(decision).some((key) => !allowed.has(key))) throw new Error('AI decision contains unsupported fields')
  if (!['approve', 'needs_changes', 'needs_human', 'reject', 'blocked'].includes(decision.decision)) throw new Error('AI decision is invalid')
  const category = taxonomy.categories.find((entry) => entry.id === decision.classification?.primaryCategory)
  if (!category) throw new Error('AI classification category is invalid')
  const tags = new Set(taxonomy.tags)
  if (!Array.isArray(decision.classification.tags) || decision.classification.tags.some((tag) => !tags.has(tag)) || decision.classification.tags.length > 8) throw new Error('AI classification tags are invalid')
  if (!['R0', 'R1', 'R2'].includes(decision.risk?.level) || !Array.isArray(decision.risk.capabilities) || !Array.isArray(decision.risk.reasons)) throw new Error('AI risk result is invalid')
  const refs = new Set(evidenceRefs)
  const invalidReason = decision.risk.reasons.find((reason) => !reason.code || !refs.has(reason.evidenceRef))
  if (invalidReason) throw new Error(`AI risk reason references unknown evidence: ${String(invalidReason.evidenceRef)}`)
  if (typeof decision.confidence !== 'number' || decision.confidence < 0 || decision.confidence > 1) throw new Error('AI confidence is invalid')
  if (!Array.isArray(decision.requestedChanges) || typeof decision.summary !== 'string' || !decision.summary.trim()) throw new Error('AI decision metadata is invalid')
  return decision
}
