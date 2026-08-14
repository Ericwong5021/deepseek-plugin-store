#!/usr/bin/env node
import crypto from 'node:crypto'
import fs from 'node:fs/promises'

const TOKEN = process.env.GITHUB_TOKEN ?? ''
const HEADERS = {
  'Accept': 'application/vnd.github+json',
  'User-Agent': 'deepseek-plugin-store',
  ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}),
}

async function searchPage(query, page) {
  const res = await fetch(
    `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&sort=updated&order=desc&per_page=100&page=${page}`,
    { headers: HEADERS, signal: AbortSignal.timeout(30000) },
  )
  if (!res.ok) throw new Error(`search page ${page}: ${res.status}`)
  const json = await res.json()
  if (json.incomplete_results) throw new Error(`incomplete GitHub search results for ${query}`)
  return json
}

const dateAfter = (date) => new Date(Date.parse(`${date}T00:00:00Z`) + 86400000).toISOString().slice(0, 10)

async function searchRange(from, to) {
  const query = `topic:dsh-plugin fork:true created:${from}..${to}`
  const first = await searchPage(query, 1)
  if (first.total_count > 1000) {
    if (from === to) throw new Error(`more than 1000 topic repositories were created on ${from}`)
    const start = Date.parse(`${from}T00:00:00Z`)
    const end = Date.parse(`${to}T00:00:00Z`)
    const midpoint = new Date(start + (end - start) * 0.9).toISOString().slice(0, 10)
    const left = await searchRange(from, midpoint)
    const right = await searchRange(dateAfter(midpoint), to)
    return [...left, ...right]
  }
  const items = [...first.items]
  for (let page = 2; page <= Math.ceil(first.total_count / 100); page++) {
    const json = await searchPage(query, page)
    items.push(...json.items)
  }
  return items
}

async function searchRepos() {
  const items = await searchRange('2007-01-01', new Date().toISOString().slice(0, 10))
  const seen = new Set()
  return items.filter((r) => !seen.has(r.full_name) && seen.add(r.full_name))
}

async function fetchRepository(fullName) {
  const response = await fetch(`https://api.github.com/repos/${fullName}`, { headers: HEADERS })
  if (!response.ok) throw new Error(`editor pick ${fullName}: ${response.status}`)
  return response.json()
}

async function fetchPackageJson(fullName) {
  try {
    const res = await fetch(
      `https://raw.githubusercontent.com/${fullName}/HEAD/package.json`,
      { headers: { 'User-Agent': 'deepseek-plugin-store' }, signal: AbortSignal.timeout(30000) },
    )
    if (!res.ok) return null
    const length = Number(res.headers.get('content-length') || 0)
    if (length > 262144) return null
    const text = await res.text()
    if (Buffer.byteLength(text) > 262144) return null
    return JSON.parse(text)
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

function npmPackageName(value) {
  if (typeof value !== 'string') return null
  return /^(?:@[a-z0-9][a-z0-9._~-]*\/[a-z0-9][a-z0-9._~-]*|[a-z0-9][a-z0-9._~-]*)$/.test(value) ? value : null
}

const editorPicks = JSON.parse(await fs.readFile('data/editor-picks.json', 'utf8'))
const [topicRepos, editorPickRepos] = await Promise.all([
  searchRepos(),
  mapLimit(editorPicks, 8, async (entry) => ({
    ...await fetchRepository(entry.repository),
    editorPick: entry,
  })),
])
const repoMap = new Map(topicRepos.map((repo) => [repo.full_name.toLowerCase(), { ...repo, fromTopic: true }]))
for (const repo of editorPickRepos) {
  const key = repo.full_name.toLowerCase()
  repoMap.set(key, { ...(repoMap.get(key) || {}), ...repo, fromTopic: repoMap.has(key) })
}
const repos = [...repoMap.values()]
const sourceFingerprint = crypto.createHash('sha256').update(JSON.stringify(repos
  .map((repo) => [repo.full_name, repo.pushed_at, repo.updated_at, Boolean(repo.editorPick)])
  .sort(([a], [b]) => a.localeCompare(b)))).digest('hex')
console.log(`search: ${topicRepos.length} topic repos + ${editorPickRepos.length} editor picks = ${repos.length} unique repos`)

const enriched = await mapLimit(repos, 10, async (repo) => {
  const pkg = await fetchPackageJson(repo.full_name)
  const manifestFound = Boolean(pkg?.dsh?.bundle)
  return {
    fullName: repo.full_name,
    url: repo.html_url,
    description: repo.editorPick?.summary ?? repo.description ?? pkg?.description ?? '',
    stars: repo.stargazers_count,
    pushedAt: repo.pushed_at,
    license: repo.license?.spdx_id ?? null,
    archived: Boolean(repo.archived),
    isPlugin: true,
    npmName: npmPackageName(pkg?.name),
    category: repo.editorPick
      ? { id: 'editor-picks', title: '编辑精选 / Editor Picks' }
      : categorize(repo, pkg),
    manifestFound,
    editorPick: Boolean(repo.editorPick),
    fromTopic: Boolean(repo.fromTopic),
  }
})

const plugins = enriched.sort((a, b) => b.stars - a.stars)
const related = []
let addedDates = {}
try { addedDates = JSON.parse(await fs.readFile('data/added-dates.json', 'utf8')) } catch {}
const today = new Date().toISOString().slice(0, 10)
for (const plugin of plugins) {
  addedDates[plugin.url] ||= today
  plugin.addedAt = addedDates[plugin.url]
}
console.log(`selected catalog repositories: ${plugins.length}`)

const generatedAt = new Date().toISOString()

const slugify = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
for (const plugin of plugins) {
  plugin.slug = slugify(plugin.fullName)
  plugin.name = plugin.fullName
  plugin.summary = plugin.description
  plugin.tags = [plugin.category.id]
  plugin.repositoryUrl = plugin.url
  plugin.installSpec = `github:${plugin.fullName}`
  plugin.author = plugin.fullName.split('/')[0]
  plugin.featured = plugin.editorPick
  plugin.status = plugin.archived ? 'archived' : 'active'
  plugin.source = plugin.editorPick
    ? {
        type: 'editor-pick',
        origins: plugin.fromTopic ? ['editor-pick', 'github-topic'] : ['editor-pick'],
        file: 'data/editor-picks.json',
        ...(plugin.fromTopic ? { topic: 'dsh-plugin' } : {}),
      }
    : {
        type: 'github-topic',
        origins: ['github-topic'],
        topic: 'dsh-plugin',
      }
  plugin.github = {
    stars: plugin.stars,
    license: plugin.license,
    lastPushAt: plugin.pushedAt,
    archived: plugin.archived,
    capturedAt: generatedAt
  }
  plugin.compatibility = {
    manifestFound: plugin.manifestFound,
    manifestPath: plugin.manifestFound ? 'package.json:dsh.bundle' : null,
    checkedAt: generatedAt
  }
  delete plugin.manifestFound
  delete plugin.editorPick
  delete plugin.fromTopic
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
  sourceCommit: sourceFingerprint,
  source: {
    provider: 'github',
    repository: 'Ericwong5021/deepseek-plugin-store',
    sources: ['topic:dsh-plugin', 'data/editor-picks.json'],
    verification: 'topic:dsh-plugin or manual editor selection',
  },
  plugins,
  related,
}
const catalogJson = JSON.stringify(catalog, null, 2) + '\n'
await fs.writeFile('data/catalog.json', catalogJson)
await fs.writeFile('data/plugins.json', catalogJson)
console.log('README.md + README.en.md + README.zh.md + data/catalog.json written')
