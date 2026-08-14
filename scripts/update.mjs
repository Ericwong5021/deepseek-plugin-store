#!/usr/bin/env node
import crypto from 'node:crypto'

const TOKEN = process.env.GITHUB_TOKEN ?? ''
const HEADERS = {
  'Accept': 'application/vnd.github+json',
  'User-Agent': 'deepseek-plugin-store',
  ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}),
}

async function searchPage(query, page) {
  const res = await fetch(
    `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&sort=updated&order=desc&per_page=100&page=${page}`,
    { headers: HEADERS },
  )
  if (!res.ok) throw new Error(`search page ${page}: ${res.status}`)
  const json = await res.json()
  if (json.incomplete_results) throw new Error(`incomplete GitHub search results for ${query}`)
  return json
}

const dateAfter = (date) => new Date(Date.parse(`${date}T00:00:00Z`) + 86400000).toISOString().slice(0, 10)

async function searchRange(from, to) {
  const query = `topic:dsh-plugin created:${from}..${to}`
  const first = await searchPage(query, 1)
  if (first.total_count > 1000) {
    if (from === to) throw new Error(`more than 1000 topic repositories were created on ${from}`)
    const midpoint = new Date((Date.parse(`${from}T00:00:00Z`) + Date.parse(`${to}T00:00:00Z`)) / 2).toISOString().slice(0, 10)
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

const repos = await searchRepos()
const sourceFingerprint = crypto.createHash('sha256').update(JSON.stringify(repos
  .map((repo) => [repo.full_name, repo.pushed_at, repo.updated_at])
  .sort(([a], [b]) => a.localeCompare(b)))).digest('hex')
console.log(`search: ${repos.length} topic repos`)

const enriched = await mapLimit(repos, 10, async (repo) => {
  const pkg = await fetchPackageJson(repo.full_name)
  const manifestFound = Boolean(pkg?.dsh?.bundle)
  return {
    fullName: repo.full_name,
    url: repo.html_url,
    description: repo.description ?? pkg?.description ?? '',
    stars: repo.stargazers_count,
    pushedAt: repo.pushed_at,
    license: repo.license?.spdx_id ?? null,
    archived: Boolean(repo.archived),
    isPlugin: true,
    npmName: pkg?.name ?? null,
    category: categorize(repo, pkg),
    manifestFound,
  }
})

const plugins = enriched.sort((a, b) => b.stars - a.stars)
const related = []
const fs = await import('node:fs/promises')
let addedDates = {}
try { addedDates = JSON.parse(await fs.readFile('data/added-dates.json', 'utf8')) } catch {}
const today = new Date().toISOString().slice(0, 10)
for (const plugin of plugins) {
  addedDates[plugin.url] ||= today
  plugin.addedAt = addedDates[plugin.url]
}
console.log(`selected topic repositories: ${plugins.length}`)

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
    type: 'github-topic',
    origins: ['github-topic'],
    topic: 'dsh-plugin'
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
    sources: ['topic:dsh-plugin'],
    verification: 'topic:dsh-plugin',
  },
  plugins,
  related,
}
const catalogJson = JSON.stringify(catalog, null, 2) + '\n'
await fs.writeFile('data/catalog.json', catalogJson)
await fs.writeFile('data/plugins.json', catalogJson)
console.log('README.md + README.en.md + README.zh.md + data/catalog.json written')
