#!/usr/bin/env node
import { pathToFileURL } from 'node:url'
import { classifyEvidence, loadRegistryPlugins, pluginId, readJson, repositoryFromUrl, validInstallSpec, writeJson } from './registry-lib.mjs'

const TOKEN = process.env.GITHUB_TOKEN ?? ''
const HEADERS = {
  Accept: 'application/vnd.github+json',
  'User-Agent': 'deepseek-plugin-store',
  ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}),
}
const LIMIT = Math.min(100, Math.max(1, Number.parseInt(process.env.DISCOVERY_VERIFY_LIMIT || '100', 10) || 100))
const MAX_BODY = 1048576

const request = async (url, options = {}) => {
  const response = await fetch(url, { ...options, signal: AbortSignal.timeout(30000) })
  const length = Number(response.headers.get('content-length') || 0)
  if (length > MAX_BODY) throw new Error(`${url}: response exceeds 1 MiB`)
  const text = await response.text()
  if (Buffer.byteLength(text) > MAX_BODY) throw new Error(`${url}: response exceeds 1 MiB`)
  return { response, text }
}

const fetchJson = async (url) => {
  const { response, text } = await request(url, { headers: HEADERS })
  if (!response.ok) throw new Error(`${url}: ${response.status}`)
  return JSON.parse(text)
}

const searchPage = async (query, page) => fetchJson(`https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&sort=updated&order=desc&per_page=100&page=${page}`)
const searchTimestamp = (seconds) => new Date(seconds * 1000).toISOString().replace('.000Z', 'Z')

const searchRange = async (from, to) => {
  const query = `topic:dsh-plugin fork:true created:${searchTimestamp(from)}..${searchTimestamp(to)}`
  const first = await searchPage(query, 1)
  if (first.incomplete_results) throw new Error(`incomplete GitHub search results for ${query}`)
  if (first.total_count > 1000) {
    if (from >= to) throw new Error(`more than 1000 topic repositories were created at ${searchTimestamp(from)}`)
    const midpoint = Math.floor((from + to) / 2)
    return [...await searchRange(from, midpoint), ...await searchRange(midpoint + 1, to)]
  }
  const items = [...first.items]
  for (let page = 2; page <= Math.ceil(first.total_count / 100); page++) items.push(...(await searchPage(query, page)).items)
  return items
}

const mapLimit = async (items, limit, fn) => {
  const output = new Array(items.length)
  let index = 0
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (index < items.length) {
      const current = index++
      output[current] = await fn(items[current])
    }
  }))
  return output
}

const failure = (reason, at) => ({ at, reason: String(reason).slice(0, 500) })

const fetchEvidence = async (fullName) => {
  const repository = await fetchJson(`https://api.github.com/repos/${fullName}`)
  const packageResult = await request(`https://raw.githubusercontent.com/${fullName}/HEAD/package.json`, { headers: { 'User-Agent': 'deepseek-plugin-store' } })
  let pkg = null
  if (packageResult.response.ok) pkg = JSON.parse(packageResult.text)
  else if (packageResult.response.status !== 404) throw new Error(`package.json ${packageResult.response.status}`)
  const readmeResult = await request(`https://api.github.com/repos/${fullName}/readme`, { headers: { ...HEADERS, Accept: 'application/vnd.github.raw+json' } })
  const readme = readmeResult.response.ok ? readmeResult.text : ''
  if (!readmeResult.response.ok && readmeResult.response.status !== 404) throw new Error(`README ${readmeResult.response.status}`)
  let release = null
  try {
    release = await fetchJson(`https://api.github.com/repos/${fullName}/releases/latest`)
  } catch (error) {
    if (!String(error.message).endsWith(': 404')) throw error
  }
  return { repository, pkg, readme, release }
}

export const discover = async () => {
  const now = new Date().toISOString()
  const staleBefore = Date.parse(now) - 7 * 86400000
  const retryBefore = Date.parse(now) - 6 * 3600000
  const taxonomy = await readJson('registry/taxonomy.json')
  const collection = await readJson('registry/collections/editor-picks.json')
  const registryFiles = await loadRegistryPlugins()
  const registry = new Map(registryFiles.map(({ value }) => [value.repository.fullName.toLowerCase(), value]))
  const observations = await readJson('data/observations.json')
  const candidateData = await readJson('data/candidates.json', { schemaVersion: 2, updatedAt: now, candidates: {} })
  const originalObservations = JSON.stringify(observations.repositories)
  const originalCandidates = JSON.stringify({ candidates: candidateData.candidates, failures: candidateData.failures || [] })
  const upstream = await readJson('data/upstream-sync.json', {})
  const sourceFailures = []
  const changedRegistryIds = new Set()
  const changedCandidateIds = new Set()
  let topicRepos = []
  try {
    topicRepos = await searchRange(Math.floor(Date.parse('2007-01-01T00:00:00Z') / 1000), Math.floor(Date.parse(now) / 1000))
  } catch (error) {
    sourceFailures.push(failure(`github-topic: ${error.message}`, now))
  }
  const pickRepos = await mapLimit(collection.items, 8, async (item) => {
    try {
      return await fetchJson(`https://api.github.com/repos/${item.repository}`)
    } catch (error) {
      sourceFailures.push(failure(`editor-pick ${item.repository}: ${error.message}`, now))
      return null
    }
  })
  const discovered = new Map()
  const addSource = (fullName, url, origin, metadata = null, summary = '') => {
    if (!fullName) return
    const key = fullName.toLowerCase()
    const current = discovered.get(key) || { fullName, url: url || `https://github.com/${fullName}`, origins: [], metadata: null, summary: '' }
    current.origins = [...new Set([...current.origins, origin])]
    current.metadata = metadata || current.metadata
    current.summary = summary || metadata?.description || current.summary
    discovered.set(key, current)
  }
  for (const repo of topicRepos) addSource(repo.full_name, repo.html_url, 'github-topic', repo)
  for (const repo of pickRepos.filter(Boolean)) addSource(repo.full_name, repo.html_url, 'editor-pick', repo)
  for (const entry of upstream.processing?.pendingUpstreamEntries || []) addSource(repositoryFromUrl(entry.url), entry.url, 'awesome-dsh-plugin', null, entry.name || '')
  for (const item of collection.items) addSource(item.repository, `https://github.com/${item.repository}`, 'editor-pick')
  for (const source of discovered.values()) {
    const record = registry.get(source.fullName.toLowerCase())
    if (record) {
      const observation = observations.repositories[record.id]
      if (!observation) continue
      const origins = [...new Set([...observation.discovery.origins, ...source.origins])]
      const originsChanged = origins.length !== observation.discovery.origins.length
      const metadataChanged = source.metadata && (
        source.metadata.pushed_at !== observation.github?.lastPushAt
        || source.metadata.stargazers_count !== observation.github?.stars
        || Boolean(source.metadata.archived) !== Boolean(observation.github?.archived)
        || (source.metadata.license?.spdx_id ?? null) !== (observation.github?.license ?? null)
      )
      if (metadataChanged) changedRegistryIds.add(record.id)
      if (originsChanged || metadataChanged) {
        observation.discovery.origins = origins
        observation.discovery.lastSeenAt = now
      }
      if (metadataChanged) {
        const history = observation.github.starHistory || []
        if (!history.length || history.at(-1).stars !== source.metadata.stargazers_count) history.push({ capturedAt: now, stars: source.metadata.stargazers_count })
        observation.github = {
          ...observation.github,
          stars: source.metadata.stargazers_count,
          license: source.metadata.license?.spdx_id ?? null,
          archived: Boolean(source.metadata.archived),
          lastPushAt: source.metadata.pushed_at,
          capturedAt: now,
          starHistory: history.slice(-90),
        }
      }
      continue
    }
    const id = pluginId(source.fullName)
    const existing = candidateData.candidates[id]
    const sources = [...new Set([...(existing?.sources || []), ...source.origins])]
    const sourcesChanged = !existing || sources.length !== existing.sources.length
    const metadataChanged = source.metadata && (
      source.metadata.pushed_at !== existing?.github?.lastPushAt
      || source.metadata.stargazers_count !== existing?.github?.stars
      || Boolean(source.metadata.archived) !== Boolean(existing?.github?.archived)
      || (source.metadata.license?.spdx_id ?? null) !== (existing?.github?.license ?? null)
    )
    const summary = source.summary || existing?.summary || ''
    const summaryChanged = !existing || summary !== existing.summary
    if (metadataChanged) changedCandidateIds.add(id)
    candidateData.candidates[id] = {
      id,
      repository: { fullName: source.fullName, url: source.url },
      summary,
      sources,
      admission: { status: 'candidate' },
      lifecycle: existing?.lifecycle || { suggestion: 'incubating' },
      visibility: 'hidden',
      discoveredAt: existing?.discoveredAt || now,
      lastSeenAt: !existing || sourcesChanged || metadataChanged || summaryChanged ? now : existing.lastSeenAt,
      checks: existing?.checks || { admissionReady: false, reasons: ['not-reviewed'] },
      failures: existing?.failures || [],
      ...(metadataChanged || !existing && source.metadata ? { github: {
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
  const queue = []
  for (const record of registry.values()) {
    const observation = observations.repositories[record.id]
    const changed = changedRegistryIds.has(record.id)
    const retryDue = !observation?.failures?.length || Date.parse(observation.failures.at(-1).at) < retryBefore
    const stale = observation?.failures?.length ? retryDue : !observation?.compatibility?.checkedAt || Date.parse(observation.compatibility.checkedAt) < staleBefore
    if (changed || stale && retryDue) queue.push({ type: 'registry', record, priority: changed ? 1 : 3 })
  }
  for (const candidate of Object.values(candidateData.candidates)) {
    const changed = changedCandidateIds.has(candidate.id)
    const retryDue = !candidate.failures?.length || Date.parse(candidate.failures.at(-1).at) < retryBefore
    const stale = candidate.failures?.length ? retryDue : candidate.checks?.checkedAt ? Date.parse(candidate.checks.checkedAt) < staleBefore : true
    if (changed || stale) queue.push({ type: 'candidate', candidate, priority: !candidate.checks?.checkedAt ? 0 : changed ? 1 : 2 })
  }
  queue.sort((a, b) => a.priority - b.priority || (a.record?.id || a.candidate.id).localeCompare(b.record?.id || b.candidate.id))
  const selected = queue.slice(0, LIMIT)
  await mapLimit(selected, 8, async (item) => {
    const fullName = item.record?.repository.fullName || item.candidate.repository.fullName
    try {
      const evidence = await fetchEvidence(fullName)
      const manifestFound = Boolean(evidence.pkg?.dsh?.bundle)
      const installSpec = `github:${fullName}`
      const readmeGuidance = /install|安装|usage|使用|dsh plugin/i.test(evidence.readme)
      const relevant = item.type === 'registry' || (item.candidate.sources || []).some((source) => ['github-topic', 'editor-pick', 'awesome-dsh-plugin'].includes(source))
      const checks = {
        checkedAt: now,
        publicRepository: !evidence.repository.private,
        manifestFound,
        manifestPath: manifestFound ? 'package.json:dsh.bundle' : null,
        installSpec,
        installSpecValid: validInstallSpec(installSpec),
        readmeFound: Boolean(evidence.readme.trim()),
        readmeGuidance,
        relevant,
        archived: Boolean(evidence.repository.archived),
      }
      checks.admissionReady = checks.publicRepository && checks.manifestFound && checks.installSpecValid && checks.readmeFound && checks.readmeGuidance && checks.relevant && !checks.archived
      checks.reasons = Object.entries(checks).filter(([key, value]) => !['checkedAt', 'admissionReady', 'reasons', 'manifestPath', 'installSpec'].includes(key) && value === false).map(([key]) => key)
      const createdAt = Date.parse(evidence.repository.created_at)
      const lifecycleSuggestion = !evidence.release || createdAt > Date.parse(now) - 30 * 86400000 ? 'incubating' : 'active'
      const classificationSuggestion = classifyEvidence({
        fullName,
        description: evidence.repository.description || '',
        packageDescription: evidence.pkg?.description || '',
        readme: evidence.readme,
      }, taxonomy)
      if (item.type === 'candidate') {
        item.candidate.summary = evidence.repository.description || evidence.pkg?.description || item.candidate.summary
        item.candidate.github = {
          stars: evidence.repository.stargazers_count,
          license: evidence.repository.license?.spdx_id ?? null,
          archived: Boolean(evidence.repository.archived),
          private: Boolean(evidence.repository.private),
          createdAt: evidence.repository.created_at,
          lastPushAt: evidence.repository.pushed_at,
          latestReleaseAt: evidence.release?.published_at ?? null,
          capturedAt: now,
        }
        item.candidate.checks = checks
        item.candidate.lifecycle = { suggestion: lifecycleSuggestion }
        item.candidate.classificationSuggestion = classificationSuggestion
        item.candidate.failures = []
        item.candidate.lastSeenAt = now
      } else {
        const observation = observations.repositories[item.record.id]
        const history = observation.github.starHistory || []
        if (!history.length || history.at(-1).stars !== evidence.repository.stargazers_count) history.push({ capturedAt: now, stars: evidence.repository.stargazers_count })
        observation.github = {
          stars: evidence.repository.stargazers_count,
          license: evidence.repository.license?.spdx_id ?? null,
          archived: Boolean(evidence.repository.archived),
          lastPushAt: evidence.repository.pushed_at,
          latestReleaseAt: evidence.release?.published_at ?? null,
          capturedAt: now,
          starHistory: history.slice(-90),
        }
        observation.compatibility = {
          manifestFound,
          manifestPath: manifestFound ? 'package.json:dsh.bundle' : null,
          npmName: typeof evidence.pkg?.name === 'string' ? evidence.pkg.name : null,
          installSpec,
          readmeFound: checks.readmeFound,
          readmeGuidance,
          checkedAt: now,
        }
        observation.failures = []
        observation.lastSuccessfulAt = now
        observation.discovery.lastSeenAt = now
      }
    } catch (error) {
      const target = item.type === 'candidate' ? item.candidate : observations.repositories[item.record.id]
      target.failures = [...(target.failures || []), failure(error.message, now)].slice(-20)
    }
  })
  candidateData.failures = sourceFailures
  observations.repositories = Object.fromEntries(Object.entries(observations.repositories).sort())
  candidateData.candidates = Object.fromEntries(Object.entries(candidateData.candidates).sort())
  if (JSON.stringify(observations.repositories) !== originalObservations) observations.updatedAt = now
  if (JSON.stringify({ candidates: candidateData.candidates, failures: candidateData.failures }) !== originalCandidates) candidateData.updatedAt = now
  await writeJson('data/observations.json', observations)
  await writeJson('data/candidates.json', candidateData)
  return { discovered: discovered.size, verified: selected.length, candidates: Object.keys(candidateData.candidates).length, sourceFailures: sourceFailures.length }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const result = await discover()
  console.log(JSON.stringify(result))
}
