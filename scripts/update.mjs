#!/usr/bin/env node
/**
 * Crawl GitHub for repos tagged `dsh-plugin`, verify each one's package.json
 * for a `dsh.bundle` manifest (what makes it an installable DSH plugin),
 * then regenerate README.md and the catalog data.
 *
 * Usage: GITHUB_TOKEN=xxx node scripts/update.mjs
 */

const TOKEN = process.env.GITHUB_TOKEN ?? ''
const HEADERS = {
  'Accept': 'application/vnd.github+json',
  'User-Agent': 'deepseek-plugin-store',
  ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}),
}

async function searchRepos() {
  const items = []
  for (let page = 1; page <= 10; page++) {
    const res = await fetch(
      `https://api.github.com/search/repositories?q=topic:dsh-plugin&per_page=100&page=${page}`,
      { headers: HEADERS },
    )
    if (!res.ok) throw new Error(`search page ${page}: ${res.status}`)
    const json = await res.json()
    items.push(...json.items)
    if (json.items.length < 100) break
  }
  const seen = new Set()
  return items.filter((r) => !seen.has(r.full_name) && seen.add(r.full_name))
}

async function fetchUpstreamRepos() {
  const [res, commitResponse] = await Promise.all([
    fetch('https://api.github.com/repos/awesome-dsh-plugin/awesome-dsh-plugin/contents/README.md', { headers: HEADERS }),
    fetch('https://api.github.com/repos/awesome-dsh-plugin/awesome-dsh-plugin/commits/main', { headers: HEADERS })
  ])
  if (!res.ok) throw new Error(`upstream readme: ${res.status}`)
  if (!commitResponse.ok) throw new Error(`upstream commit: ${commitResponse.status}`)
  const json = await res.json()
  const commit = await commitResponse.json()
  const text = Buffer.from(json.content, 'base64').toString('utf8')
  const names = [...text.matchAll(/https:\/\/github\.com\/([\w.-]+\/[\w.-]+)/g)].map((match) => match[1].replace(/\/$/, ''))
  const unique = [...new Set(names)].filter((name) => name !== 'awesome-dsh-plugin/awesome-dsh-plugin')
  const repos = await mapLimit(unique, 8, async (name) => {
    const response = await fetch(`https://api.github.com/repos/${name}`, { headers: HEADERS })
    if (!response.ok) return null
    const repo = await response.json()
    repo.discoverySource = 'awesome-dsh-plugin'
    repo.upstreamCommit = commit.sha
    return repo
  }).then((items) => items.filter(Boolean))
  return { repos, commit: commit.sha }
}

async function fetchPackageJson(fullName) {
  try {
    const res = await fetch(
      `https://raw.githubusercontent.com/${fullName}/HEAD/package.json`,
      { headers: { 'User-Agent': 'deepseek-plugin-store' } },
    )
    if (!res.ok) return null
    return await res.json()
  } catch {
    return null
  }
}

async function mapLimit(items, limit, fn) {
  const out = new Array(items.length)
  let i = 0
  await Promise.all(
    Array.from({ length: limit }, async () => {
      while (i < items.length) {
        const idx = i++
        out[idx] = await fn(items[idx])
      }
    }),
  )
  return out
}

// Keyword → category. First match wins; order matters.
const CATEGORIES = [
  ['ui-enhancements', 'UI 增强 / UI Enhancements', /\bui\b|界面|theme|主题|视图|view|chat|render|genui|focus|前端|launcher|启动器/i],
  ['workflow-automation', '工作流与自动化 / Workflow & Automation', /workflow|工作流|automat|自动|plan|计划|loop|schedul|cron|wakeup|sentinel|批注|review|审/i],
  ['tools', '工具集 / Tools', /toolkit|工具|search|搜索|fetch|browser|浏览器|terminal|终端|file|文件|notebook/i],
  ['notifications', '通知与监控 / Notifications & Monitoring', /notif|通知|alert|提醒|monitor|监控|watch/i],
  ['dev-helpers', '开发辅助 / Development Helpers', /\bdev\b|开发|debug|调试|lsp|test|测试|lint|inject|sdk/i],
  ['learning', '学习与教育 / Learning & Education', /学习|teach|教学|classroom|learn|explain|讲解|research|研究/i],
]

function categorize(repo, pkg) {
  const text = `${repo.name} ${repo.description ?? ''} ${pkg?.description ?? ''}`
  for (const [id, title, re] of CATEGORIES) if (re.test(text)) return { id, title }
  return { id: 'misc', title: '其他 / Miscellaneous' }
}

if (process.env.MERGE_UPSTREAM_ONLY === '1') {
  const fs = await import('node:fs/promises')
  const existing = JSON.parse(await fs.readFile('data/catalog.json', 'utf8'))
  const snapshot = JSON.parse(await fs.readFile('data/upstream-sync.json', 'utf8'))
  const upstreamCommit = snapshot.upstream.latestCommit.sha
  const readme = await (await fetch('https://raw.githubusercontent.com/awesome-dsh-plugin/awesome-dsh-plugin/main/README.md')).text()
  const pluginSection = readme.split(/^## /m).find((section) => /^(?:Plugins|插件 \/ Plugins|插件)\n/m.test(section)) ?? ''
  const categoryByTitle = new Map([
    ['UI Enhancements', 'ui-enhancements'],
    ['Sessions & Messages', 'misc'],
    ['Tools & Capabilities', 'tools'],
    ['Workflow & Automation', 'workflow-automation'],
    ['Notifications & Integrations', 'notifications'],
    ['Development & Runtime', 'dev-helpers'],
    ['Just for Fun', 'misc'],
  ])
  let currentCategory = null
  const entries = []
  for (const line of pluginSection.split('\n')) {
    const heading = line.match(/^### (.+)$/)
    if (heading) currentCategory = heading[1].trim()
    const entry = line.match(/^- \[([^\]]+)\]\((https:\/\/github\.com\/[^)]+)\)(?:\s+-\s+(.+))?$/)
    if (entry) entries.push({ name: entry[1], url: entry[2].replace(/\/$/, ''), description: entry[3] ?? '', category: categoryByTitle.get(currentCategory) ?? 'misc' })
  }
  const existingUrls = new Set(existing.plugins.map((plugin) => plugin.url.replace(/\/$/, '')))
  const generatedAt = new Date().toISOString()
  let addedDates = {}
  try { addedDates = JSON.parse(await fs.readFile('data/added-dates.json', 'utf8')) } catch {}
  const additions = await mapLimit(entries.filter((entry) => !existingUrls.has(entry.url)), 8, async (entry) => {
    const fullName = entry.url.replace('https://github.com/', '')
    const pkg = await fetchPackageJson(fullName)
    if (!pkg?.dsh?.bundle) return null
    const repoPage = await fetch(entry.url, { headers: { 'User-Agent': 'deepseek-plugin-store' } })
    const repoText = await repoPage.text()
    const stars = Number(repoText.match(/"stargazerCount":(\d+)/)?.[1] ?? 0)
    const license = repoText.match(/"license":\{"spdxId":"([^"]*)"/)?.[1] ?? null
    const commitFeed = await fetch(`${entry.url}/commits/HEAD.atom`, { headers: { 'User-Agent': 'deepseek-plugin-store' } })
    const commitText = await commitFeed.text()
    const pushedAt = commitText.match(/<updated>([^<]+)<\/updated>/)?.[1] ?? generatedAt
    const category = categoryByTitle.has(entry.category) ? { id: entry.category, title: CATEGORIES.find(([id]) => id === entry.category)?.[1] ?? '其他 / Miscellaneous' } : categorize({ name: fullName, description: `${entry.description} ${pkg.description ?? ''}` }, pkg)
    const plugin = {
      fullName,
      url: entry.url,
      description: pkg.description ?? entry.description,
      stars,
      pushedAt,
      license,
      archived: false,
      isPlugin: true,
      npmName: pkg.name ?? null,
      category,
      discoverySources: ['awesome-dsh-plugin'],
      upstreamCommits: [upstreamCommit],
    }
    plugin.addedAt = addedDates[plugin.url] ||= generatedAt.slice(0, 10)
    plugin.slug = plugin.fullName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
    plugin.name = plugin.fullName
    plugin.summary = plugin.description
    plugin.tags = [plugin.category.id]
    plugin.repositoryUrl = plugin.url
    plugin.installSpec = plugin.npmName || `github:${plugin.fullName}`
    plugin.author = plugin.fullName.split('/')[0]
    plugin.featured = false
    plugin.status = 'active'
    plugin.source = { type: 'upstream-import', origins: ['awesome-dsh-plugin'], upstreamRepository: 'awesome-dsh-plugin/awesome-dsh-plugin', upstreamCommits: [upstreamCommit] }
    plugin.github = { stars: plugin.stars, license: plugin.license, lastPushAt: plugin.pushedAt, archived: false, capturedAt: generatedAt }
    plugin.compatibility = { manifestFound: true, manifestPath: 'package.json:dsh.bundle', checkedAt: generatedAt }
    return plugin
  }).then((items) => items.filter(Boolean))
  const additionUrls = new Set(additions.map((plugin) => plugin.url))
  const additionInstallIdentifiers = new Set(additions.map((plugin) => plugin.npmName || `github:${plugin.fullName}`))
  const catalog = {
    ...existing,
    updatedAt: generatedAt,
    sourceCommit: upstreamCommit,
    plugins: [...existing.plugins.filter((plugin) => !additionInstallIdentifiers.has(plugin.npmName || `github:${plugin.fullName}`)), ...additions],
    related: existing.related.filter((project) => !additionUrls.has(project.url)),
  }
  const { renderReadmes } = await import('./render-readme.mjs')
  const { readme: renderedReadme, readmeEn, readmeZh } = renderReadmes(catalog)
  const catalogJson = JSON.stringify(catalog, null, 2) + '\n'
  await Promise.all([
    fs.writeFile('README.md', renderedReadme),
    fs.writeFile('README.en.md', readmeEn),
    fs.writeFile('README.zh.md', readmeZh),
    fs.writeFile('data/added-dates.json', JSON.stringify(Object.fromEntries(Object.entries(addedDates).sort()), null, 2) + '\n'),
    fs.writeFile('data/catalog.json', catalogJson),
    fs.writeFile('data/plugins.json', catalogJson),
  ])
  console.log(JSON.stringify({ additions: additions.map((plugin) => plugin.fullName), verifiedPlugins: catalog.plugins.length, related: catalog.related.length, sourceCommit: upstreamCommit }, null, 2))
  process.exit(0)
}

const [topicRepos, upstreamSnapshot] = await Promise.all([searchRepos(), fetchUpstreamRepos()])
const upstreamRepos = upstreamSnapshot.repos
const repoMap = new Map()
for (const repo of [...topicRepos, ...upstreamRepos]) {
  const source = repo.discoverySource || 'github-topic'
  const existing = repoMap.get(repo.full_name)
  if (!existing) repoMap.set(repo.full_name, {
    ...repo,
    discoverySources: [source],
    upstreamCommits: repo.upstreamCommit ? [repo.upstreamCommit] : []
  })
  else {
    existing.discoverySources = [...new Set([...existing.discoverySources, source])]
    existing.upstreamCommits = [...new Set([...existing.upstreamCommits, ...(repo.upstreamCommit ? [repo.upstreamCommit] : [])])]
  }
}
const repos = [...repoMap.values()]
console.log(`search: ${topicRepos.length} topic repos + ${upstreamRepos.length} upstream entries = ${repos.length} unique repos`)

const enriched = await mapLimit(repos, 10, async (repo) => {
  const pkg = await fetchPackageJson(repo.full_name)
  const isPlugin = Boolean(pkg?.dsh?.bundle)
  return {
    fullName: repo.full_name,
    url: repo.html_url,
    description: repo.description ?? pkg?.description ?? '',
    stars: repo.stargazers_count,
    pushedAt: repo.pushed_at,
    license: repo.license?.spdx_id ?? null,
    archived: Boolean(repo.archived),
    isPlugin,
    npmName: isPlugin ? pkg.name ?? null : null,
    category: categorize(repo, pkg),
    discoverySources: repo.discoverySources,
    upstreamCommits: repo.upstreamCommits,
  }
})

const candidatePlugins = enriched.filter((p) => p.isPlugin).sort((a, b) => b.stars - a.stars)
const installIdentifiers = new Set()
const plugins = candidatePlugins.filter((plugin) => {
  const installIdentifier = plugin.npmName || `github:${plugin.fullName}`
  if (installIdentifiers.has(installIdentifier)) return false
  installIdentifiers.add(installIdentifier)
  return true
})
const related = enriched.filter((p) => !p.isPlugin).sort((a, b) => b.stars - a.stars)
const fs = await import('node:fs/promises')
let addedDates = {}
try { addedDates = JSON.parse(await fs.readFile('data/added-dates.json', 'utf8')) } catch {}
const today = new Date().toISOString().slice(0, 10)
for (const plugin of plugins) {
  addedDates[plugin.url] ||= today
  plugin.addedAt = addedDates[plugin.url]
}
console.log(`verified plugins: ${plugins.length}, related: ${related.length}`)

const generatedAt = new Date().toISOString()

const slugify = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
for (const plugin of plugins) {
  plugin.slug = slugify(plugin.fullName)
  plugin.name = plugin.fullName
  plugin.summary = plugin.description
  plugin.tags = [plugin.category.id]
  plugin.repositoryUrl = plugin.url
  plugin.installSpec = plugin.npmName || `github:${plugin.fullName}`
  plugin.author = plugin.fullName.split('/')[0]
  plugin.featured = false
  plugin.status = plugin.archived ? 'archived' : 'active'
  plugin.source = {
    type: plugin.discoverySources.includes('awesome-dsh-plugin') ? 'upstream-import' : 'github-topic',
    origins: plugin.discoverySources,
    upstreamRepository: plugin.discoverySources.includes('awesome-dsh-plugin') ? 'awesome-dsh-plugin/awesome-dsh-plugin' : null,
    upstreamCommits: plugin.upstreamCommits
  }
  plugin.github = {
    stars: plugin.stars,
    license: plugin.license,
    lastPushAt: plugin.pushedAt,
    archived: plugin.archived,
    capturedAt: generatedAt
  }
  plugin.compatibility = {
    manifestFound: true,
    manifestPath: 'package.json:dsh.bundle',
    checkedAt: generatedAt
  }
}

const { renderReadmes } = await import('./render-readme.mjs')
const { readme, readmeEn, readmeZh } = renderReadmes({ plugins, related, updatedAt: generatedAt })

await fs.mkdir('data', { recursive: true })
await fs.writeFile('README.md', readme)
await fs.writeFile('README.en.md', readmeEn)
await fs.writeFile('README.zh.md', readmeZh)
await fs.writeFile('data/added-dates.json', JSON.stringify(Object.fromEntries(Object.entries(addedDates).sort()), null, 2) + '\n')
const catalog = {
  schemaVersion: 1,
  updatedAt: generatedAt,
  sourceCommit: upstreamSnapshot.commit,
  source: {
    provider: 'github',
    repository: 'Ericwong5021/deepseek-plugin-store',
    sources: ['topic:dsh-plugin', 'awesome-dsh-plugin/awesome-dsh-plugin'],
    verification: 'package.json:dsh.bundle',
  },
  plugins,
  related,
}
const catalogJson = JSON.stringify(catalog, null, 2) + '\n'
await fs.writeFile('data/catalog.json', catalogJson)
await fs.writeFile('data/plugins.json', catalogJson)
console.log('README.md + README.en.md + README.zh.md + data/catalog.json written')
