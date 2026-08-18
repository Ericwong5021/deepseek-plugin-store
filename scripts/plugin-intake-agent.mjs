#!/usr/bin/env node
import fs from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { classifyEvidence, loadRegistryPlugins, pluginId, readJson, repositoryFromUrl, validInstallSpec, writeJson } from './registry-lib.mjs'

const eventPath = process.env.GITHUB_EVENT_PATH
const outputPath = process.env.GITHUB_OUTPUT
const token = process.env.GITHUB_TOKEN || ''
const workspace = path.join(process.env.RUNNER_TEMP || os.tmpdir(), `plugin-intake-${process.env.GITHUB_RUN_ID || process.pid}`)
const replyPath = path.join(workspace, 'reply.md')
const prBodyPath = path.join(workspace, 'pr.md')
const maxBody = 1048576
const headers = {
  Accept: 'application/vnd.github+json',
  'User-Agent': 'deepseek-plugin-store-intake-agent',
  ...(token ? { Authorization: `Bearer ${token}` } : {}),
}

const request = async (url, options = {}) => {
  const response = await fetch(url, { ...options, signal: AbortSignal.timeout(30000) })
  const declaredLength = Number(response.headers.get('content-length') || 0)
  if (declaredLength > maxBody) throw new Error(`${url}: response exceeds 1 MiB`)
  const text = await response.text()
  if (Buffer.byteLength(text) > maxBody) throw new Error(`${url}: response exceeds 1 MiB`)
  return { response, text }
}

const githubJson = async (apiPath, fallbackStatus = []) => {
  const { response, text } = await request(`https://api.github.com${apiPath}`, { headers })
  if (fallbackStatus.includes(response.status)) return null
  if (!response.ok) throw new Error(`GitHub API ${apiPath}: ${response.status}`)
  return JSON.parse(text)
}

const githubRaw = async (apiPath, fallbackStatus = []) => {
  const { response, text } = await request(`https://api.github.com${apiPath}`, {
    headers: { ...headers, Accept: 'application/vnd.github.raw+json' },
  })
  if (fallbackStatus.includes(response.status)) return null
  if (!response.ok) throw new Error(`GitHub API ${apiPath}: ${response.status}`)
  return text
}

const parseFields = (body) => {
  const fields = new Map()
  const pattern = /^###\s+(.+?)\s*\r?\n+([\s\S]*?)(?=\r?\n###\s+|$)/gm
  for (const match of String(body || '').matchAll(pattern)) {
    const value = match[2].trim()
    if (value && value !== '_No response_') fields.set(match[1].trim().toLowerCase(), value)
  }
  return fields
}

const field = (fields, names) => {
  for (const name of names) {
    const value = fields.get(name.toLowerCase())
    if (value) return value
  }
  return ''
}

const inferredIntent = (issue) => {
  const labels = new Set((issue.labels || []).map((label) => typeof label === 'string' ? label : label.name))
  if (labels.has('plugin-submission')) return 'plugin_submission'
  if (labels.has('plugin-correction')) return 'plugin_correction'
  if (labels.has('plugin-claim')) return 'plugin_claim'
  if (labels.has('plugin-report')) return 'plugin_report'
  const title = String(issue.title || '')
  if (/^\[(?:add plugin|plugin)\]/i.test(title)) return 'plugin_submission'
  if (/^\[correction\]/i.test(title)) return 'plugin_correction'
  if (/^\[claim\]/i.test(title)) return 'plugin_claim'
  if (/^\[plugin report\]/i.test(title)) return 'plugin_report'
  const fields = parseFields(issue.body)
  if (fields.has('install identifier') && fields.has('category') && fields.has('summary')) return 'plugin_submission'
  if (fields.has('correction type') && fields.has('proposed value')) return 'plugin_correction'
  if (fields.has('maintainer proof')) return 'plugin_claim'
  if (fields.has('report type')) return 'plugin_report'
  return 'other'
}

const normalizeRepository = (value) => {
  const direct = repositoryFromUrl(String(value || '').trim())
  if (direct) return direct
  const url = String(value || '').match(/https:\/\/github\.com\/[\w.-]+\/[\w.-]+/i)?.[0]
  if (url) return repositoryFromUrl(url)
  const shorthand = String(value || '').trim().match(/^([\w.-]+\/[\w.-]+)$/)?.[1]
  return shorthand || null
}

const normalizeInstallTarget = (value, canonicalName, packageName) => {
  const raw = String(value || '').trim()
  const repository = normalizeRepository(raw.replace(/^github:/i, ''))
  if (!raw || repository?.toLowerCase() === canonicalName.toLowerCase()) return { type: 'github', spec: `github:${canonicalName}` }
  const npmName = raw.replace(/^npm:/i, '')
  if (packageName && npmName.toLowerCase() === packageName.toLowerCase() && validInstallSpec(packageName)) return { type: 'npm', spec: packageName }
  return { type: 'github', spec: `github:${canonicalName}` }
}

const normalizeMaintainer = (value, fallback) => {
  const text = String(value || '').trim()
  const handle = text.match(/@([\w-]+)/)?.[1]
    || text.match(/github(?:\s+username|\s+account)?\s*:\s*([\w-]+)/i)?.[1]
    || text.match(/repository\s+owner\s*:\s*([\w-]+)/i)?.[1]
    || text.match(/^([\w-]+)$/)?.[1]
  return handle || fallback
}

const summaryText = (value, fallback) => String(value || fallback || '').trim().replace(/\s+/g, ' ').slice(0, 500)

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

const categoryFromIssue = (value, taxonomy) => {
  const normalized = String(value || '').trim().toLowerCase()
  if (!normalized) return null
  return taxonomy.categories.find((category) => {
    const group = taxonomy.groups.find((entry) => entry.id === category.group)
    const variants = [
      category.id,
      category.titles.en,
      category.titles.zh,
      `${group?.titles.en} / ${category.titles.en}`,
      `${group?.titles.zh} / ${category.titles.zh}`,
    ]
    return variants.some((variant) => variant?.toLowerCase() === normalized)
  }) || null
}

const checkRunsFor = async (fullName, sha) => {
  const [checks, status] = await Promise.all([
    githubJson(`/repos/${fullName}/commits/${sha}/check-runs?per_page=100`, [403, 404]),
    githubJson(`/repos/${fullName}/commits/${sha}/status`, [403, 404]),
  ])
  const runs = checks?.check_runs || []
  const statuses = status?.statuses || []
  const pending = runs.filter((run) => run.status !== 'completed').map((run) => run.name)
  const failed = runs.filter((run) => run.status === 'completed' && !['success', 'neutral', 'skipped'].includes(run.conclusion)).map((run) => run.name)
  if (status?.total_count > 0 && status.state === 'pending') pending.push('commit status')
  if (status?.total_count > 0 && ['failure', 'error'].includes(status.state)) failed.push('commit status')
  return {
    configured: runs.length + statuses.length > 0,
    pending: [...new Set(pending)],
    failed: [...new Set(failed)],
    passed: pending.length === 0 && failed.length === 0,
  }
}

const writeResult = async ({ outcome, reply = '', repository = '', id = '', prBody = '', intent = '', title = '', draft = false }) => {
  await fs.mkdir(workspace, { recursive: true })
  if (reply) await fs.writeFile(replyPath, reply)
  if (prBody) await fs.writeFile(prBodyPath, prBody)
  if (outputPath) {
    await fs.appendFile(outputPath, `outcome=${outcome}\nreply_file=${reply ? replyPath : ''}\nrepository=${repository}\nplugin_id=${id}\npr_body_file=${prBody ? prBodyPath : ''}\nintent=${intent}\npr_title=${title}\npr_draft=${draft ? 'true' : 'false'}\n`)
  }
}

const rejectionReply = (fullName, failures, checkSummary) => `插件录入检查未通过 / Plugin admission checks did not pass

仓库 / Repository: ${fullName || '未识别 / not identified'}

${failures.map((failure) => `- ❌ ${failure}`).join('\n')}
${checkSummary.length ? `\n已通过 / Passed\n\n${checkSummary.map((item) => `- ✅ ${item}`).join('\n')}\n` : ''}
请修复后编辑或重新打开此 Issue，Agent 会重新检查。外部仓库代码不会在本工作流中执行。

Please fix the listed items and edit or reopen this issue. The agent will run again. External repository code is never executed by this workflow.
`

const collectRepositoryEvidence = async (fullName) => {
  const repository = await githubJson(`/repos/${fullName}`)
  const canonicalName = repository.full_name
  const branch = await githubJson(`/repos/${canonicalName}/branches/${encodeURIComponent(repository.default_branch)}`)
  const commitSha = branch.commit.sha
  const ref = encodeURIComponent(commitSha)
  const [packageText, readme, tree] = await Promise.all([
    githubRaw(`/repos/${canonicalName}/contents/package.json?ref=${ref}`, [404]),
    githubRaw(`/repos/${canonicalName}/readme?ref=${ref}`, [404]),
    githubJson(`/repos/${canonicalName}/git/trees/${ref}?recursive=1`, [404]),
  ])
  let pkg = null
  let packageError = ''
  if (packageText) {
    try {
      pkg = JSON.parse(packageText)
    } catch (error) {
      packageError = error.message
    }
  }
  const bundle = pkg?.dsh?.bundle
  const bundleValid = Boolean(bundle && typeof bundle === 'object' && !Array.isArray(bundle) && Object.keys(bundle).length)
  const files = new Set((tree?.tree || []).filter((entry) => entry.type === 'blob').map((entry) => entry.path))
  const missingManifestPaths = bundleValid ? manifestPaths(bundle).filter((entry) => !files.has(entry)) : []
  return { repository, canonicalName, commitSha, packageText, packageError, pkg, readme, tree, bundleValid, missingManifestPaths }
}

const inspectAdmission = async (evidence) => {
  const { repository, canonicalName, commitSha, packageText, packageError, readme, tree, bundleValid, missingManifestPaths } = evidence
  const codeChecks = await checkRunsFor(canonicalName, commitSha)
  const readmeGuidance = Boolean(readme && /install|installation|usage|quick.?start|setup|安装|使用|配置|快速开始|dsh plugin/i.test(readme))
  const failures = []
  const passed = []
  if (repository.private) failures.push('仓库不是公开仓库 / Repository is not public')
  else passed.push('公开仓库 / Public repository')
  if (repository.archived || repository.disabled) failures.push('仓库已归档或禁用 / Repository is archived or disabled')
  else passed.push('仓库处于可维护状态 / Repository is active')
  if (!packageText) failures.push('根目录缺少 package.json / Root package.json is missing')
  else if (packageError) failures.push(`package.json 不是有效 JSON / Invalid package.json: ${packageError}`)
  else passed.push('package.json 可解析 / package.json parses')
  if (!bundleValid) failures.push('根目录 package.json 未声明有效的 dsh.bundle / Root package.json does not declare a valid dsh.bundle')
  else passed.push('可识别为 DSH 插件 / Recognized as a DSH plugin through package.json:dsh.bundle')
  if (!readme?.trim()) failures.push('缺少 README / README is missing')
  else if (!readmeGuidance) failures.push('README 缺少安装或使用说明 / README lacks installation or usage guidance')
  else passed.push('README 包含安装或使用说明 / README includes installation or usage guidance')
  if (tree?.truncated) failures.push('仓库文件树过大，无法完成完整性检查 / Repository tree is too large for a complete integrity check')
  if (missingManifestPaths.length) failures.push(`dsh.bundle 引用的文件不存在 / Missing dsh.bundle files: ${missingManifestPaths.join(', ')}`)
  else if (bundleValid) passed.push('dsh.bundle 文件引用完整 / dsh.bundle file references resolve')
  if (codeChecks.pending.length) failures.push(`默认分支代码检查尚未完成 / Default-branch checks are pending: ${codeChecks.pending.join(', ')}`)
  if (codeChecks.failed.length) failures.push(`默认分支代码检查失败 / Default-branch checks failed: ${codeChecks.failed.join(', ')}`)
  if (codeChecks.passed) passed.push(codeChecks.configured ? '默认分支代码检查通过 / Default-branch checks pass' : '默认分支没有失败的代码检查 / No failing default-branch checks')
  return { failures, passed, codeChecks }
}

const buildRecord = async ({ evidence, issue, fields, classificationOverride = null }) => {
  const { repository, canonicalName, commitSha, pkg, readme } = evidence
  const now = new Date().toISOString()
  const taxonomy = await readJson('registry/taxonomy.json')
  const suggestion = classifyEvidence({
    fullName: canonicalName,
    description: repository.description || '',
    packageDescription: pkg?.description || '',
    readme,
  }, taxonomy)
  const submittedCategory = categoryFromIssue(classificationOverride || field(fields, ['Category', '分类']), taxonomy)
  const classification = {
    ...suggestion,
    source: 'manifest-evidence',
    evidence: [...new Set([...suggestion.evidence, `issue:${issue.html_url}`, `commit:${commitSha}`, 'package.json:dsh.bundle'])].slice(0, 10),
    needsReview: true,
    issueUrl: issue.html_url,
    ...(submittedCategory ? { maintainerSuggestedCategory: submittedCategory.id } : {}),
  }
  const installTarget = normalizeInstallTarget(field(fields, ['Install identifier', 'Install spec', '安装标识']), canonicalName, pkg?.name)
  const summary = summaryText(field(fields, ['Summary', 'English summary', '简介']), repository.description || pkg?.description || canonicalName)
  const maintainer = normalizeMaintainer(field(fields, ['Maintainer identity', 'Maintainer GitHub account', '维护者']), repository.owner.login)
  return {
    schemaVersion: 2,
    id: pluginId(canonicalName),
    displayName: repository.name,
    repository: { fullName: canonicalName, url: repository.html_url },
    source: { verifiedCommitSha: commitSha, lastVerifiedAt: now },
    aliases: [],
    summaries: { zh: summary, en: summary },
    installTargets: [installTarget],
    classification,
    admission: { status: 'verified', evidence: ['package.json:dsh.bundle', `commit:${commitSha}`, `issue:${issue.html_url}`] },
    lifecycle: { status: repository.created_at && Date.parse(repository.created_at) > Date.parse(now) - 30 * 86400000 ? 'incubating' : 'active' },
    visibility: 'listed',
    maintainers: [maintainer],
    addedAt: now.slice(0, 10),
  }
}

const handleSubmission = async (event, issue, fields) => {
  const submittedRepository = field(fields, ['Repository URL', 'Plugin repository', 'Repository', '仓库地址', '插件仓库'])
  const fullName = normalizeRepository(submittedRepository || issue.body)
  if (!fullName) {
    await writeResult({ outcome: 'rejected', intent: 'submission', reply: rejectionReply('', ['未找到唯一、有效的 GitHub 仓库地址 / No valid GitHub repository was found'], []) })
    return
  }
  const evidence = await collectRepositoryEvidence(fullName)
  const { canonicalName } = evidence
  const id = pluginId(canonicalName)
  const existingRecords = await loadRegistryPlugins()
  const existing = existingRecords.find(({ value }) => value.id === id || value.repository.fullName.toLowerCase() === canonicalName.toLowerCase())
  if (existing) {
    await writeResult({
      outcome: 'duplicate',
      intent: 'submission',
      repository: canonicalName,
      id,
      reply: `该插件已经收录 / This plugin is already listed\n\n- Repository: ${existing.value.repository.url}\n- Registry: https://github.com/${event.repository.full_name}/blob/${event.repository.default_branch}/${existing.file}\n`,
    })
    return
  }
  const inspection = await inspectAdmission(evidence)
  if (inspection.failures.length) {
    await writeResult({ outcome: 'rejected', intent: 'submission', repository: canonicalName, id, reply: rejectionReply(canonicalName, inspection.failures, inspection.passed) })
    return
  }
  const record = await buildRecord({ evidence, issue, fields })
  await writeJson(`registry/plugins/${id}.json`, record)
  const prBody = `## Plugin / 插件\n\n- Repository: ${evidence.repository.html_url}\n- Install: \`${record.installTargets[0].spec}\`\n- Verified commit: \`${evidence.commitSha}\`\n- Intent: \`plugin_submission\`\n- Source issue: #${issue.number}\n\n## Admission checks / 录入检查\n\n${inspection.passed.map((item) => `- [x] ${item}`).join('\n')}\n- [x] Registry source validation\n\nCloses #${issue.number}\n`
  await writeResult({ outcome: 'accepted', intent: 'submission', repository: canonicalName, id, prBody, title: `feat: add ${canonicalName}` })
}

const handleCorrection = async (event, issue, fields) => {
  const submittedRepository = field(fields, ['Plugin repository', 'Repository URL', 'Repository', '仓库地址', '插件仓库'])
  const fullName = normalizeRepository(submittedRepository || issue.body)
  if (!fullName) {
    await writeResult({ outcome: 'rejected', intent: 'correction', reply: rejectionReply('', ['未找到唯一、有效的 GitHub 仓库地址 / No valid GitHub repository was found'], []) })
    return
  }
  const evidence = await collectRepositoryEvidence(fullName)
  const inspection = await inspectAdmission(evidence)
  if (inspection.failures.length) {
    await writeResult({ outcome: 'rejected', intent: 'correction', repository: evidence.canonicalName, id: pluginId(evidence.canonicalName), reply: rejectionReply(evidence.canonicalName, inspection.failures, inspection.passed) })
    return
  }
  const correctionType = field(fields, ['Correction type', '修正类型'])
  const proposed = field(fields, ['Proposed value', '建议值'])
  if (!/^primary category$/i.test(correctionType)) {
    await writeResult({ outcome: 'needs_human', intent: 'correction', repository: evidence.canonicalName, id: pluginId(evidence.canonicalName), reply: `该修正类型需要人工复核 / This correction type needs human review\n\n- Repository: ${evidence.repository.html_url}\n- Field: ${correctionType}\n- Proposed value: ${proposed}\n` })
    return
  }
  const id = pluginId(evidence.canonicalName)
  const records = await loadRegistryPlugins()
  const existing = records.find(({ value }) => value.id === id)
  const record = existing?.value || await buildRecord({ evidence, issue, fields, classificationOverride: proposed })
  const taxonomy = await readJson('registry/taxonomy.json')
  const category = categoryFromIssue(proposed, taxonomy)
  if (!category) {
    await writeResult({ outcome: 'rejected', intent: 'correction', repository: evidence.canonicalName, id, reply: rejectionReply(evidence.canonicalName, [`无法识别建议分类 / Unknown proposed category: ${proposed}`], inspection.passed) })
    return
  }
  record.classification = {
    ...record.classification,
    group: category.group,
    category: category.id,
    source: 'manifest-evidence',
    confidence: 'medium',
    needsReview: true,
    maintainerSuggestedCategory: category.id,
    evidence: [...new Set([...(record.classification.evidence || []), `issue:${issue.html_url}`, `commit:${evidence.commitSha}`])].slice(0, 10),
    issueUrl: issue.html_url,
  }
  record.source = { verifiedCommitSha: evidence.commitSha, lastVerifiedAt: new Date().toISOString() }
  await writeJson(`registry/plugins/${id}.json`, record)
  const prBody = `## Correction / 修正\n\n- Repository: ${evidence.repository.html_url}\n- Field: Primary category\n- Proposed value: \`${category.id}\`\n- Verified commit: \`${evidence.commitSha}\`\n- Source issue: #${issue.number}\n\nThis draft changes only the requested classification field and keeps the submitter value as a reviewable suggestion.\n\nCloses #${issue.number}\n`
  await writeResult({ outcome: 'correction', intent: 'correction', repository: evidence.canonicalName, id, prBody, title: `fix: correct ${evidence.canonicalName} category`, draft: true })
}

const main = async () => {
  if (!eventPath) throw new Error('GITHUB_EVENT_PATH is missing')
  const event = JSON.parse(await fs.readFile(eventPath, 'utf8'))
  const issue = event.issue
  if (!issue) throw new Error('GitHub issue event is missing')
  const intent = inferredIntent(issue)
  if (!['plugin_submission', 'plugin_correction'].includes(intent)) {
    await writeResult({ outcome: 'ignored' })
    return
  }
  const fields = parseFields(issue.body)
  if (intent === 'plugin_submission') await handleSubmission(event, issue, fields)
  else await handleCorrection(event, issue, fields)
}

try {
  await main()
} catch (error) {
  await writeResult({
    outcome: 'error',
    reply: `自动检查暂时无法完成 / Automated review could not complete\n\n\`${String(error.message || error).slice(0, 800)}\`\n\n维护者可重新打开或编辑此 Issue 以重试。 / A maintainer can reopen or edit this issue to retry.\n`,
  })
}
