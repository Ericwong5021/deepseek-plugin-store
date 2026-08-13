#!/usr/bin/env node
/**
 * Crawl GitHub for repos tagged `dsh-plugin`, verify each one's package.json
 * for a `dsh.bundle` manifest (what makes it an installable DSH plugin),
 * then regenerate README.md and data/plugins.json.
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
  const res = await fetch('https://api.github.com/repos/awesome-dsh-plugin/awesome-dsh-plugin/contents/README.md', { headers: HEADERS })
  if (!res.ok) throw new Error(`upstream readme: ${res.status}`)
  const json = await res.json()
  const text = Buffer.from(json.content, 'base64').toString('utf8')
  const names = [...text.matchAll(/https:\/\/github\.com\/([\w.-]+\/[\w.-]+)/g)].map((match) => match[1].replace(/\/$/, ''))
  const unique = [...new Set(names)].filter((name) => name !== 'awesome-dsh-plugin/awesome-dsh-plugin')
  return mapLimit(unique, 8, async (name) => {
    const response = await fetch(`https://api.github.com/repos/${name}`, { headers: HEADERS })
    if (!response.ok) return null
    const repo = await response.json()
    repo.discoverySource = 'awesome-dsh-plugin'
    return repo
  }).then((items) => items.filter(Boolean))
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

const [topicRepos, upstreamRepos] = await Promise.all([searchRepos(), fetchUpstreamRepos()])
const repoMap = new Map()
for (const repo of [...topicRepos, ...upstreamRepos]) {
  const existing = repoMap.get(repo.full_name)
  if (!existing) repoMap.set(repo.full_name, { ...repo, discoverySources: [repo.discoverySource || 'github-topic'] })
  else existing.discoverySources = [...new Set([...existing.discoverySources, repo.discoverySource || 'github-topic'])]
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
    isPlugin,
    npmName: isPlugin ? pkg.name ?? null : null,
    category: categorize(repo, pkg),
    discoverySources: repo.discoverySources,
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

const { renderReadmes } = await import('./render-readme.mjs')
const { readme, readmeZh } = renderReadmes({ plugins, related, updatedAt: generatedAt })

await fs.mkdir('data', { recursive: true })
await fs.writeFile('README.md', readme)
await fs.writeFile('README.zh.md', readmeZh)
await fs.writeFile('data/added-dates.json', JSON.stringify(Object.fromEntries(Object.entries(addedDates).sort()), null, 2) + '\n')
await fs.writeFile('data/plugins.json', JSON.stringify({
  schemaVersion: 1,
  updatedAt: generatedAt,
  source: {
    provider: 'github',
    repository: 'Ericwong5021/deepseek-plugin-store',
    sources: ['topic:dsh-plugin', 'awesome-dsh-plugin/awesome-dsh-plugin'],
    verification: 'package.json:dsh.bundle',
  },
  plugins,
  related,
}, null, 2))
console.log('README.md + README.zh.md + data/plugins.json written')
