import fs from 'node:fs/promises'
import crypto from 'node:crypto'
import os from 'node:os'
import path from 'node:path'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'

const exec = promisify(execFile)
const now = new Date().toISOString()
const repository = 'awesome-dsh-plugin/awesome-dsh-plugin'
const repositoryUrl = `https://github.com/${repository}`
const websiteUrl = 'https://awesome-dsh-plugin.com/'
const rawBase = `https://raw.githubusercontent.com/${repository}/main`
const apiBase = 'https://api.github.com'
const headers = {
  Accept: 'application/vnd.github+json',
  'User-Agent': 'deepseek-plugin-store',
  ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
}

const sha256 = (value) => crypto.createHash('sha256').update(value).digest('hex')
const readJson = async (file, fallback = null) => {
  try { return JSON.parse(await fs.readFile(file, 'utf8')) } catch { return fallback }
}
const fetchText = async (url, options = {}) => {
  const response = await fetch(url, { redirect: 'follow', headers: { 'User-Agent': 'deepseek-plugin-store', ...options.headers } })
  const text = await response.text()
  return { response, text }
}
const fetchApi = async (pathName) => {
  const response = await fetch(`${apiBase}${pathName}`, { headers })
  const text = await response.text()
  if (!response.ok) throw new Error(`${pathName}: ${response.status} ${text.slice(0, 180)}`)
  return JSON.parse(text)
}
const runGit = async (args, cwd) => (await exec('git', args, { cwd, maxBuffer: 20 * 1024 * 1024 })).stdout.trim()

const previous = await readJson('data/upstream-sync.json')
const failures = []
const sources = []
const content = {}
const recordContent = (key, url, status, text, extra = {}) => {
  const value = { url, checkedAt: now, status, length: text.length, fingerprint: text ? sha256(text) : null, ...extra }
  content[key] = value
  sources.push({ url, checkedAt: now, status })
  return value
}

const rawFiles = ['README.md', 'README.zh.md', 'docs/index.html', 'docs/zh/index.html', 'docs/sitemap.xml', 'docs/feed.xml', 'docs/zh/feed.xml', 'docs/plugins.json']
const raw = {}
for (const file of rawFiles) {
  const result = await fetchText(`${rawBase}/${file}`)
  raw[file] = result.text
  recordContent(`raw:${file}`, `${rawBase}/${file}`, result.response.ok ? 'ok' : 'failed', result.text, { httpStatus: result.response.status, etag: result.response.headers.get('etag') })
  if (!result.response.ok) failures.push(`${file}: HTTP ${result.response.status}`)
}

let apiStatus = 'ok'
try {
  const repositoryApi = await fetchApi(`/repos/${repository}`)
  content.apiRepository = { url: `${apiBase}/repos/${repository}`, checkedAt: now, status: 'ok', fingerprint: sha256(JSON.stringify(repositoryApi)) }
  sources.push({ url: `${apiBase}/repos/${repository}`, checkedAt: now, status: 'ok' })
} catch (error) {
  apiStatus = 'failed'
  failures.push(`GitHub REST API: ${error.message}`)
  sources.push({ url: `${apiBase}/repos/${repository}`, checkedAt: now, status: 'failed' })
}

const repoPage = await fetchText(repositoryUrl)
recordContent('github:repository-page', repositoryUrl, repoPage.response.ok ? 'ok' : 'failed', repoPage.text, { httpStatus: repoPage.response.status })
if (!repoPage.response.ok) failures.push(`GitHub repository page: HTTP ${repoPage.response.status}`)
const stars = Number(repoPage.text.match(/"stargazerCount":(\d+)/)?.[1] ?? NaN)
const forks = Number(repoPage.text.match(/"forksCount":(\d+)/)?.[1] ?? NaN)
const pullsPage = await fetchText(`${repositoryUrl}/pulls?q=is%3Apr+is%3Aopen`)
recordContent('github:open-pulls', `${repositoryUrl}/pulls?q=is%3Apr+is%3Aopen`, pullsPage.response.ok ? 'ok' : 'failed', pullsPage.text, { httpStatus: pullsPage.response.status })
if (!pullsPage.response.ok) failures.push(`GitHub open PR page: HTTP ${pullsPage.response.status}`)
const pullLinks = [...pullsPage.text.matchAll(/href="\/awesome-dsh-plugin\/awesome-dsh-plugin\/pull\/(\d+)"/g)].map((match) => Number(match[1]))
const pullNumbers = [...new Set(pullLinks)]
const issuesPage = await fetchText(`${repositoryUrl}/issues?q=is%3Aissue+is%3Aopen`)
recordContent('github:open-issues', `${repositoryUrl}/issues?q=is%3Aissue+is%3Aopen`, issuesPage.response.ok ? 'ok' : 'failed', issuesPage.text, { httpStatus: issuesPage.response.status })
if (!issuesPage.response.ok) failures.push(`GitHub open issue page: HTTP ${issuesPage.response.status}`)
const issueLinks = [...issuesPage.text.matchAll(/href="\/awesome-dsh-plugin\/awesome-dsh-plugin\/issues\/(\d+)"/g)].map((match) => Number(match[1]))
const issueNumbers = [...new Set(issueLinks)]

let website = {}
const websiteResult = await fetchText(websiteUrl)
recordContent('website:home', websiteUrl, websiteResult.response.ok ? 'ok' : 'failed', websiteResult.text, { httpStatus: websiteResult.response.status, finalUrl: websiteResult.response.url })
if (!websiteResult.response.ok) failures.push(`Website home: HTTP ${websiteResult.response.status}`)
const sitemapResult = await fetchText('https://awesome-dsh-plugin.com/sitemap.xml')
recordContent('website:sitemap', 'https://awesome-dsh-plugin.com/sitemap.xml', sitemapResult.response.ok ? 'ok' : 'failed', sitemapResult.text, { httpStatus: sitemapResult.response.status })
const feedResult = await fetchText('https://awesome-dsh-plugin.com/feed.xml')
recordContent('website:feed', 'https://awesome-dsh-plugin.com/feed.xml', feedResult.response.ok ? 'ok' : 'failed', feedResult.text, { httpStatus: feedResult.response.status })
if (!sitemapResult.response.ok) failures.push(`Website sitemap: HTTP ${sitemapResult.response.status}`)
if (!feedResult.response.ok) failures.push(`Website feed: HTTP ${feedResult.response.status}`)

const pluginSection = raw['README.md'].split(/^## /m).find((section) => /^(?:插件 \/ Plugins|Plugins|插件)\n/m.test(section)) ?? ''
const pluginEntries = [...pluginSection.matchAll(/^- \[([^\]]+)\]\((https:\/\/github\.com\/[^)]+)\)/gm)].map((match) => ({ name: match[1], url: match[2] }))
const categoryHeadings = [...pluginSection.matchAll(/^### (.+)$/gm)].map((match) => match[1].trim())
const websiteDescriptionCount = Number(websiteResult.text.match(/curated list of (\d+) DeepSeek Harness/i)?.[1] ?? NaN)
const sitemapUrls = [...sitemapResult.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1])
const feedEntries = [...feedResult.text.matchAll(/<entry>[\s\S]*?<title>([^<]+)<\/title>[\s\S]*?<id>([^<]+)<\/id>[\s\S]*?<updated>([^<]+)<\/updated>/g)].slice(0, 10).map((match) => ({ title: match[1], url: match[2], updatedAt: match[3] }))
website = {
  home: { reachable: websiteResult.response.ok, status: websiteResult.response.status, advertisedPluginEntries: Number.isFinite(websiteDescriptionCount) ? websiteDescriptionCount : null },
  sitemap: { reachable: sitemapResult.response.ok, status: sitemapResult.response.status, indexedPages: sitemapUrls.length, urls: sitemapUrls },
  feed: { reachable: feedResult.response.ok, status: feedResult.response.status, recentEntries: feedEntries },
  seo: {
    jsonLd: /application\/ld\+json/.test(websiteResult.text),
    hreflang: /hreflang=/.test(websiteResult.text),
    ogImage: /property="og:image"/.test(websiteResult.text),
    atomFeedLink: /application\/atom\+xml/.test(websiteResult.text),
    canonical: /rel="canonical"/.test(websiteResult.text),
    search: /type="search"|id="search"|placeholder="[^"]*Search/i.test(websiteResult.text),
    sortOrFilter: /data-cat=|sort|filter/i.test(websiteResult.text),
    copyInstall: /copy|data-cmd|navigator\.clipboard/i.test(websiteResult.text),
    installEntry: /dsh plugin|install/i.test(websiteResult.text),
  },
  pluginDetailPages: new Set(sitemapUrls.filter((url) => /\/(?:p|plugins?)\//.test(url)).map((url) => url.replace(/\/zh\//, '/'))).size,
}

let git = { status: 'failed', commitCount: null, latestCommit: null, recentCommits: [], newCommits: [], changedFiles: [], historyRewritten: false }
let tempDir = null
try {
  tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'deepseekstore-upstream-'))
  const bare = path.join(tempDir, 'repo.git')
  await exec('git', ['clone', '--bare', '--quiet', repositoryUrl + '.git', bare], { maxBuffer: 20 * 1024 * 1024 })
  const head = await runGit(['rev-parse', 'refs/heads/main'], bare)
  const count = Number(await runGit(['rev-list', '--count', 'refs/heads/main'], bare))
  const log = await runGit(['log', '--format=%H|%cI|%s|%ct', 'refs/heads/main'], bare)
  const commits = log ? log.split('\n').map((line) => { const [sha, date, title, epoch] = line.split('|'); return { sha, date, title, epoch: Number(epoch), url: `${repositoryUrl}/commit/${sha}` } }) : []
  const previousSha = previous?.upstream?.latestCommit?.sha
  const previousNewCommitShas = new Set((previous?.upstream?.newCommits ?? []).map((commit) => commit.sha).filter(Boolean))
  const knownCommitShas = new Set([
    ...(previous?.upstream?.processedCommitShas ?? []),
    previousSha,
    ...(previous?.upstream?.recentChanges ?? []).map((commit) => commit.sha),
    ...previousNewCommitShas,
  ].filter(Boolean))
  const previousCheckedAt = previous?.checkedAt ? Date.parse(previous.checkedAt) : NaN
  const previousIndex = previousSha ? commits.findIndex((commit) => commit.sha === previousSha) : -1
  const historyRewritten = Boolean(previousSha && previousIndex === -1)
  const historicalBaseline = [...(previous?.history ?? [])].reverse().find((entry) => entry.upstreamCommit && entry.upstreamCommit !== previousSha)
  const historicalBaselineCheckedAt = historicalBaseline?.checkedAt ? Date.parse(historicalBaseline.checkedAt) : NaN
  const recoveringHistory = Boolean(historicalBaseline && previousIndex === 0 && (!previous?.upstream?.recoveryCompletedAt || !previous?.upstream?.processedCommits?.length))
  const recoveryCandidates = recoveringHistory
    ? commits.filter((commit) => (!Number.isFinite(historicalBaselineCheckedAt) || Date.parse(commit.date) > historicalBaselineCheckedAt))
    : []
  const recoveredFromHistory = recoveringHistory && recoveryCandidates.length > 0
  const baselineCheckedAt = recoveredFromHistory ? Date.parse(historicalBaseline.checkedAt) : previousCheckedAt
  const newCommits = recoveredFromHistory
    ? recoveryCandidates
    : previousIndex > 0
    ? commits.slice(0, previousIndex)
    : commits.filter((commit) => !knownCommitShas.has(commit.sha) && (!Number.isFinite(baselineCheckedAt) || Date.parse(commit.date) > baselineCheckedAt))
  const changedFiles = []
  for (const commit of newCommits) {
    const files = await runGit(['diff-tree', '--no-commit-id', '--name-status', '-r', `${commit.sha}^`, commit.sha], bare)
    changedFiles.push(...files.split('\n').filter(Boolean).map((line) => ({ commitSha: commit.sha, value: line })))
  }
  git = { status: 'ok', head, commitCount: count, latestCommit: commits[0] ?? null, recentCommits: commits.slice(0, 8), newCommits, changedFiles: [...new Map(changedFiles.map((item) => [`${item.commitSha}:${item.value}`, item])).values()], historyRewritten, recoveredFromHistory, processedCommitShas: [...new Set([...(previous?.upstream?.processedCommitShas ?? []), ...commits.map((commit) => commit.sha)])] }
} catch (error) {
  failures.push(`Git clone: ${error.message}`)
} finally {
  if (tempDir) await fs.rm(tempDir, { recursive: true, force: true })
}

const catalog = await readJson('data/catalog.json', { plugins: [], related: [] })
const catalogV2 = await readJson('data/catalog-v2.json', { plugins: [] })
const catalogUrls = new Set(catalogV2.plugins.map((plugin) => plugin.repository?.url).filter(Boolean))
const pendingUpstreamEntries = pluginEntries.filter((entry) => !catalogUrls.has(entry.url))
const pluginPages = []
const walk = async (directory) => {
  for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
    const full = path.join(directory, entry.name)
    if (entry.isDirectory()) await walk(full)
    else if (/\.(html|xml)$/.test(entry.name)) pluginPages.push(full)
  }
}
await walk('docs')
const docsHtml = pluginPages.filter((file) => file.endsWith('.html'))
const docsText = await Promise.all(docsHtml.map((file) => fs.readFile(file, 'utf8')))
const siteRoot = process.env.SITE_ROOT || '/Users/wangyidong/project/deepseek-plugin-store-site'
const siteSourceFiles = ['src/pages/index.astro', 'src/pages/plugins/index.astro', 'src/pages/plugins/[slug].astro', 'src/pages/submit.astro', 'src/layouts/BaseLayout.astro', 'src/pages/sitemap.xml.ts']
const siteSource = {}
for (const file of siteSourceFiles) {
  try { siteSource[file] = await fs.readFile(path.join(siteRoot, file), 'utf8') } catch (error) { failures.push(`site source ${file}: ${error.code || error.message}`) }
}
const siteText = Object.values(siteSource).join('\n')
const siteSourceAvailable = Object.keys(siteSource).length > 0
const siteCatalog = await readJson(path.join(siteRoot, 'src/data/catalog.json'))
const siteCatalogPluginCount = Array.isArray(siteCatalog?.plugins) ? siteCatalog.plugins.length : null
const indexedCapabilities = {
  ranking: /sort[^\n]*(stars|popular)|popular by signal|GitHub stars/i.test(siteText),
  trending: /trending/i.test(siteText),
  top: /\btop\b/i.test(siteText),
  rising: /rising/i.test(siteText),
  new: /recent|newest|recently/i.test(siteText),
  submit: /submit|submission/i.test(siteText),
  claim: /claim/i.test(siteText),
  similarPlugins: /similar/i.test(siteText),
  search: /type="search"|Search plugins/i.test(siteText),
  categoryFilter: /Filter by category|category=|plugin-category|\/categories\//i.test(siteText),
  copyInstall: /data-copy|clipboard/i.test(siteText),
  jsonLd: /application\/ld\+json/i.test(siteText),
  ogImage: /og:image/i.test(siteText),
  hreflang: /hreflang/i.test(siteText),
}
const siteIndependentPluginPages = siteSource['src/pages/plugins/[slug].astro'] ? catalog.plugins.length : 0
const siteIndexedPages = siteSourceAvailable ? catalog.plugins.length + 3 : docsHtml.length + pluginPages.filter((file) => file.endsWith('.xml')).length
const storeSnapshot = {
  verifiedPlugins: catalogV2.plugins.filter((plugin) => plugin.admission?.status === 'verified').length,
  legacyPendingPlugins: catalogV2.plugins.filter((plugin) => plugin.admission?.status === 'legacy-pending').length,
  listedPlugins: catalogV2.plugins.length,
  relatedProjects: catalog.related.length,
  indexedPages: siteIndexedPages,
  independentPluginPages: siteIndependentPluginPages,
  categories: [...new Set(catalogV2.plugins.map((plugin) => plugin.classification?.category).filter(Boolean))].sort(),
  coverage: indexedCapabilities,
  historicalSnapshotCount: previous?.history?.length ?? 0,
  source: { catalog: 'data/catalog-v2.json', checkedAt: now, updatedAt: catalogV2.updatedAt, sourceCommit: catalogV2.sourceCommit, siteRoot, siteSourceAvailable, siteCatalogPluginCount },
}
const previousVerifiedPlugins = previous?.store?.verifiedPlugins ?? storeSnapshot.verifiedPlugins
const convertedPlugins = Math.max(0, storeSnapshot.verifiedPlugins - previousVerifiedPlugins)
const catalogSourceChanged = catalogV2.sourceCommit !== previous?.store?.source?.sourceCommit
const sourceFilesChanged = convertedPlugins || catalogSourceChanged ? ['data/catalog-v2.json', 'data/catalog.json', 'data/plugins.json', 'data/candidates.json', 'data/observations.json'] : []
const slaGaps = []
if (catalogV2.plugins.length < pluginEntries.length) slaGaps.push({ priority: 'P0', capability: 'coverage', detail: `listed plugins ${catalogV2.plugins.length} below competitor README entries ${pluginEntries.length}` })
for (const [capability, detail] of [['trending', 'trending discovery surface'], ['rising', 'rising discovery surface'], ['ogImage', 'OG image metadata'], ['hreflang', 'hreflang metadata']]) {
  if (!indexedCapabilities[capability]) slaGaps.push({ priority: capability === 'ogImage' || capability === 'hreflang' ? 'P1' : 'P0', capability, detail })
}

const upstreamFingerprint = sha256(JSON.stringify({ raw: Object.fromEntries(Object.entries(content).filter(([key]) => key.startsWith('raw:')).map(([key, value]) => [key, value.fingerprint])), website: content['website:home']?.fingerprint, sitemap: content['website:sitemap']?.fingerprint, feed: content['website:feed']?.fingerprint }))
const previousFingerprint = previous?.upstream?.contentFingerprint ?? null
const changed = {
  commitChanged: Boolean(git.newCommits.length || (git.latestCommit && previous?.upstream?.latestCommit?.sha !== git.latestCommit.sha)),
  websiteChanged: content['website:home']?.fingerprint !== (previous?.upstream?.websiteFingerprint ?? null),
  contentChanged: upstreamFingerprint !== previousFingerprint,
}
const metricChanges = []
const metrics = [
  ['stars', Number.isFinite(stars) ? stars : null],
  ['forks', Number.isFinite(forks) ? forks : null],
  ['openPullRequests', pullNumbers.length],
  ['openIssues', issueNumbers.length],
  ['pluginEntries', pluginEntries.length],
  ['websiteAdvertisedPluginEntries', website.home.advertisedPluginEntries],
  ['categoryCount', categoryHeadings.length],
  ['indexedPages', website.sitemap.indexedPages],
]
for (const [key, value] of metrics) {
  const previousValue = previous?.upstream?.[key]
  if (value !== null && previousValue !== undefined && previousValue !== null && value !== previousValue) metricChanges.push(`${key} ${previousValue} -> ${value}`)
}
const changeSummary = []
if (changed.commitChanged) changeSummary.push(`${git.newCommits.length} new upstream commits`)
if (git.historyRewritten) changeSummary.push('upstream history rewritten; compared by known SHAs and commit time')
if (git.recoveredFromHistory) changeSummary.push('recovered commits from the previous partial snapshot transition')
if (changed.websiteChanged) changeSummary.push('website home fingerprint changed')
if (changed.contentChanged) changeSummary.push('raw or website content fingerprint changed')
if (metricChanges.length) changeSummary.push(`metrics changed: ${metricChanges.join(', ')}`)
if (!changeSummary.length) changeSummary.push('no upstream commit or tracked content change since the previous snapshot')

const snapshot = {
  schemaVersion: 2,
  checkedAt: now,
  status: failures.length ? 'partial' : 'ok',
  sources,
  upstream: {
    repository: repositoryUrl,
    website: websiteUrl,
    repositoryReachable: git.status === 'ok' || repoPage.response.ok,
    websiteReachable: websiteResult.response.ok,
    stars: Number.isFinite(stars) ? stars : null,
    forks: Number.isFinite(forks) ? forks : null,
    commitCount: git.commitCount,
    openPullRequests: pullNumbers.length,
    openPullRequestNumbers: pullNumbers,
    openIssues: issueNumbers.length,
    openIssueNumbers: issueNumbers,
    pluginEntries: pluginEntries.length,
    websiteAdvertisedPluginEntries: website.home.advertisedPluginEntries,
    categories: categoryHeadings,
    categoryCount: categoryHeadings.length,
    indexedPages: website.sitemap.indexedPages,
    independentPluginPages: website.pluginDetailPages,
    recentAddedPages: website.feed.recentEntries,
    latestCommit: git.latestCommit ? { sha: git.latestCommit.sha, date: git.latestCommit.date, message: git.latestCommit.title, url: git.latestCommit.url } : null,
    recentChanges: git.recentCommits.map((commit) => ({ sha: commit.sha, date: commit.date, title: commit.title, url: commit.url, kind: /seo|title|masthead|feed|sitemap|site|html|og|hreflang/i.test(`${commit.title} ${git.changedFiles.filter((file) => file.commitSha === commit.sha).map((file) => file.value).join(' ')}`) ? 'site/SEO structure' : 'content/data' })),
    newCommits: git.newCommits.map((commit) => ({ sha: commit.sha, date: commit.date, title: commit.title, url: commit.url, files: git.changedFiles.filter((file) => file.commitSha === commit.sha).map((file) => file.value) })),
    changedFiles: git.changedFiles,
    historyRewritten: git.historyRewritten,
    recoveredFromHistory: git.recoveredFromHistory,
    recoveryCompletedAt: git.recoveredFromHistory ? now : (previous?.upstream?.recoveryCompletedAt ?? null),
    processedCommitShas: git.processedCommitShas,
    processedCommits: [...new Map([
      ...(previous?.upstream?.processedCommits ?? []),
      ...git.newCommits.map((commit) => ({
        sha: commit.sha,
        date: commit.date,
        title: commit.title,
        url: commit.url,
        files: git.changedFiles.filter((file) => file.commitSha === commit.sha).map((file) => file.value),
      })),
    ].map((commit) => [commit.sha, commit])).values()],
    contentFingerprint: upstreamFingerprint,
    websiteFingerprint: content['website:home']?.fingerprint ?? null,
    rawFingerprints: Object.fromEntries(Object.entries(content).filter(([key]) => key.startsWith('raw:'))),
    websiteStructure: website,
    apiStatus,
  },
  store: storeSnapshot,
  slaGaps,
  change: { ...changed, previousCommit: previous?.upstream?.latestCommit?.sha ?? null, previousContentFingerprint: previousFingerprint, summary: changeSummary },
  processing: {
    result: pendingUpstreamEntries.length ? `measured; ${pendingUpstreamEntries.length} upstream entries remain in hidden candidate review` : 'measured; no new upstream candidates',
    convertedPlugins,
    pendingUpstreamEntries,
    conversionBlocker: null,
    sourceFilesChanged,
    siteSourceStatus: !siteSourceAvailable
      ? 'site_source_missing'
      : siteCatalogPluginCount !== null && siteCatalogPluginCount !== catalog.plugins.length
      ? `available_separately; not modified because site catalog has ${siteCatalogPluginCount} plugins versus local ${catalog.plugins.length}; local source commit is unpublished`
      : convertedPlugins || catalogSourceChanged
      ? 'available_separately; local catalog changed; site source not modified in this run'
      : 'available_separately; no catalog delta',
  },
  failures,
  history: [...(previous?.history ?? []).slice(-23), { checkedAt: now, contentFingerprint: upstreamFingerprint, upstreamCommit: git.latestCommit?.sha ?? null, status: failures.length ? 'partial' : 'ok', summary: changeSummary.join('; ') }],
}

await fs.writeFile('data/upstream-sync.json', JSON.stringify(snapshot, null, 2) + '\n')
console.log(JSON.stringify({ status: snapshot.status, competitorPlugins: pluginEntries.length, websiteAdvertisedPlugins: website.home.advertisedPluginEntries, storePlugins: catalogV2.plugins.length, newCommits: git.newCommits.length, failures: failures.length }, null, 2))
