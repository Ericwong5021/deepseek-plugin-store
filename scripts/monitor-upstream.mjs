import fs from 'node:fs/promises'
import crypto from 'node:crypto'

const headers = {
  Accept: 'application/vnd.github+json',
  'User-Agent': 'deepseek-plugin-store',
  ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {})
}

const github = async (path) => {
  const response = await fetch(`https://api.github.com${path}`, { headers })
  if (!response.ok) throw new Error(`${path}: ${response.status}`)
  return response.json()
}

const website = await fetch('https://awesome-dsh-plugin.com/')
const websiteText = website.ok ? await website.text() : ''
const [repository, commit, pulls, catalog] = await Promise.all([
  github('/repos/awesome-dsh-plugin/awesome-dsh-plugin'),
  github('/repos/awesome-dsh-plugin/awesome-dsh-plugin/commits/main'),
  github('/repos/awesome-dsh-plugin/awesome-dsh-plugin/pulls?state=open&per_page=100'),
  fs.readFile('data/catalog.json', 'utf8').then(JSON.parse)
])

let previous = null
try { previous = JSON.parse(await fs.readFile('data/upstream-sync.json', 'utf8')) } catch {}

const snapshot = {
  schemaVersion: 1,
  checkedAt: new Date().toISOString(),
  upstream: {
    repository: 'https://github.com/awesome-dsh-plugin/awesome-dsh-plugin',
    website: 'https://awesome-dsh-plugin.com/',
    repositoryReachable: true,
    websiteReachable: website.ok,
    stars: repository.stargazers_count,
    forks: repository.forks_count,
    openPullRequests: pulls.length,
    latestCommit: {
      sha: commit.sha,
      date: commit.commit.committer.date,
      message: commit.commit.message,
      url: commit.html_url
    },
    websiteFingerprint: websiteText ? crypto.createHash('sha256').update(websiteText).digest('hex') : null
  },
  store: {
    plugins: catalog.plugins.length,
    relatedProjects: catalog.related.length,
    independentPluginPages: catalog.plugins.length,
    indexedPages: catalog.plugins.length + 4,
    capabilities: ['featured', 'popular-by-stars', 'recently-added', 'search', 'category-filter', 'sorting', 'plugin-pages', 'submit', 'claim', 'similar-plugins']
  },
  change: {
    commitChanged: previous?.upstream?.latestCommit?.sha !== commit.sha,
    websiteChanged: previous?.upstream?.websiteFingerprint !== (websiteText ? crypto.createHash('sha256').update(websiteText).digest('hex') : null),
    previousCommit: previous?.upstream?.latestCommit?.sha || null
  }
}

await fs.writeFile('data/upstream-sync.json', JSON.stringify(snapshot, null, 2) + '\n')
console.log(`upstream: ${snapshot.upstream.latestCommit.sha.slice(0, 12)}, website ${website.ok ? 'reachable' : 'unreachable'}`)
