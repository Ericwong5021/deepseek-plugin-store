import { sha256 } from '../registry-lib.mjs'

const defaultLimit = 200 * 1024
const graphqlBatchSize = 5

const boundedRequest = async (url, headers, limit, fallback = []) => {
  const response = await fetch(url, { headers, signal: AbortSignal.timeout(45000) })
  if (fallback.includes(response.status)) return null
  const declared = Number(response.headers.get('content-length') || 0)
  if (declared > limit) throw new Error(`${url}: response exceeds evidence limit`)
  const text = await response.text()
  if (Buffer.byteLength(text) > limit) throw new Error(`${url}: response exceeds evidence limit`)
  if (!response.ok) throw new Error(`${url}: ${response.status} ${text.slice(0, 240)}`)
  return text
}

export class EvidenceCollector {
  constructor({ token = '', maxEvidenceBytes = defaultLimit } = {}) {
    this.maxEvidenceBytes = maxEvidenceBytes
    this.maxTransportBytes = Math.max(maxEvidenceBytes, 4 * 1024 * 1024)
    this.headers = {
      Accept: 'application/vnd.github+json',
      'User-Agent': 'deepseek-plugin-store-governance',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    }
  }

  async json(path, fallback = []) {
    const text = await boundedRequest(`https://api.github.com${path}`, this.headers, this.maxTransportBytes, fallback)
    return text === null ? null : JSON.parse(text)
  }

  async raw(path, fallback = []) {
    return boundedRequest(`https://api.github.com${path}`, { ...this.headers, Accept: 'application/vnd.github.raw+json' }, this.maxTransportBytes, fallback)
  }

  async graphql(inputs) {
    const variables = {}
    const fields = inputs.map((input, index) => {
      const [owner, name] = input.fullName.split('/')
      variables[`owner${index}`] = owner
      variables[`name${index}`] = name
      return `r${index}: repository(owner: $owner${index}, name: $name${index}) {
        nameWithOwner
        name
        description
        isPrivate
        isArchived
        isDisabled
        owner { login }
        repositoryTopics(first: 20) { nodes { topic { name } } }
        defaultBranchRef { name target { ... on Commit { oid } } }
        readme: object(expression: "HEAD:README.md") { ... on Blob { text } }
        readmeLower: object(expression: "HEAD:readme.md") { ... on Blob { text } }
        readmeZh: object(expression: "HEAD:README_ZH.md") { ... on Blob { text } }
        readmeZhDot: object(expression: "HEAD:README.zh.md") { ... on Blob { text } }
        readmeEn: object(expression: "HEAD:README.en.md") { ... on Blob { text } }
        packageJson: object(expression: "HEAD:package.json") { ... on Blob { text } }
        root: object(expression: "HEAD:") { ... on Tree { entries { name type } } }
      }`
    }).join('\n')
    const definitions = inputs.flatMap((_, index) => [`$owner${index}: String!`, `$name${index}: String!`]).join(', ')
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: { ...this.headers, 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: `query(${definitions}) { ${fields} }`, variables }),
      signal: AbortSignal.timeout(60000),
    })
    const text = await response.text()
    if (!response.ok) throw new Error(`graphql: ${response.status} ${text.slice(0, 300)}`)
    const result = JSON.parse(text)
    if (!result.data) throw new Error(`graphql: ${result.errors?.map((error) => error.message).join('; ') || 'invalid response'}`)
    return inputs.map((input, index) => {
      const repository = result.data[`r${index}`]
      if (!repository) return new Error(`${input.fullName}: 404 repository not found`)
      const readme = [repository.readme, repository.readmeZh, repository.readmeZhDot, repository.readmeEn, repository.readmeLower]
        .map((entry) => entry?.text || '')
        .find((entry) => entry.trim()) || ''
      const evidence = {
        schemaVersion: 1,
        repository: {
          fullName: repository.nameWithOwner,
          name: repository.name,
          description: repository.description || input.summary || '',
          topics: repository.repositoryTopics.nodes.map((entry) => entry.topic.name),
          private: repository.isPrivate,
          archived: repository.isArchived,
          disabled: repository.isDisabled,
          defaultBranch: repository.defaultBranchRef?.name || '',
          owner: repository.owner.login,
        },
        repositoryCommitSha: repository.defaultBranchRef?.target?.oid || '',
        capturedAt: new Date().toISOString(),
        readme: readme.slice(0, 120000),
        packageJson: (repository.packageJson?.text || '').slice(0, 40000),
        files: (repository.root?.entries || []).map((entry) => entry.name).slice(0, 2000),
        treeTruncated: false,
        evidenceRefs: ['repository', 'commit', 'readme', 'package.json', 'tree'],
      }
      let size = Buffer.byteLength(JSON.stringify(evidence))
      if (size > this.maxEvidenceBytes) evidence.readme = evidence.readme.slice(0, Math.max(0, evidence.readme.length - (size - this.maxEvidenceBytes) - 1024))
      size = Buffer.byteLength(JSON.stringify(evidence))
      while (size > this.maxEvidenceBytes && evidence.files.length) {
        evidence.files.pop()
        size = Buffer.byteLength(JSON.stringify(evidence))
      }
      if (!/^[a-f0-9]{40}$/.test(evidence.repositoryCommitSha)) return new Error(`${input.fullName}: repository default branch commit is unavailable`)
      if (size > this.maxEvidenceBytes) return new Error(`${input.fullName}: evidence exceeds limit after truncation`)
      evidence.evidenceHash = sha256(evidence)
      return evidence
    })
  }

  async collectMany(inputs) {
    const results = []
    for (let index = 0; index < inputs.length; index += graphqlBatchSize) {
      const chunk = inputs.slice(index, index + graphqlBatchSize)
      try {
        results.push(...await this.graphql(chunk))
      } catch (error) {
        results.push(...chunk.map(() => error))
      }
    }
    return results
  }

  async collect(input) {
    const fullName = typeof input === 'string' ? input : input.fullName
    const fallbackSummary = typeof input === 'string' ? '' : input.summary || ''
    const repository = await this.json(`/repos/${fullName}`)
    const requestedCommitSha = typeof input === 'string' ? '' : input.commitSha || ''
    const branch = requestedCommitSha ? null : await this.json(`/repos/${repository.full_name}/branches/${encodeURIComponent(repository.default_branch)}`)
    const commitSha = requestedCommitSha || branch.commit.sha
    const ref = encodeURIComponent(commitSha)
    const results = await Promise.allSettled([
      this.raw(`/repos/${repository.full_name}/readme?ref=${ref}`, [404]),
      this.raw(`/repos/${repository.full_name}/contents/package.json?ref=${ref}`, [404]),
      this.json(`/repos/${repository.full_name}/git/trees/${ref}?recursive=1`, [404]),
    ])
    const readme = results[0].status === 'fulfilled' ? results[0].value || '' : ''
    const packageJson = results[1].status === 'fulfilled' ? results[1].value || '' : ''
    const tree = results[2].status === 'fulfilled' ? results[2].value : null
    const evidence = {
      schemaVersion: 1,
      repository: {
        fullName: repository.full_name,
        name: repository.name,
        description: repository.description || fallbackSummary,
        topics: repository.topics || [],
        private: repository.private,
        archived: repository.archived,
        disabled: repository.disabled,
        defaultBranch: repository.default_branch,
        owner: repository.owner.login,
      },
      repositoryCommitSha: commitSha,
      capturedAt: new Date().toISOString(),
      readme: readme.slice(0, 120000),
      packageJson: packageJson.slice(0, 40000),
      files: (tree?.tree || []).filter((entry) => entry.type === 'blob').map((entry) => entry.path).slice(0, 2000),
      treeTruncated: Boolean(tree?.truncated),
      evidenceRefs: ['repository', 'commit', 'readme', 'package.json', 'tree'],
    }
    let size = Buffer.byteLength(JSON.stringify(evidence))
    if (size > this.maxEvidenceBytes) evidence.readme = evidence.readme.slice(0, Math.max(0, evidence.readme.length - (size - this.maxEvidenceBytes) - 1024))
    size = Buffer.byteLength(JSON.stringify(evidence))
    while (size > this.maxEvidenceBytes && evidence.files.length) {
      evidence.files.pop()
      size = Buffer.byteLength(JSON.stringify(evidence))
    }
    if (size > this.maxEvidenceBytes) throw new Error(`${repository.full_name}: evidence exceeds limit after truncation`)
    evidence.evidenceHash = sha256(evidence)
    return evidence
  }
}

export const buildCacheKey = ({ evidence, taxonomy, policyVersion, promptVersion, model, evidenceSchemaVersion = 1 }) => sha256({
  repositoryCommitSha: evidence.repositoryCommitSha,
  taxonomyHash: sha256(taxonomy),
  policyVersion,
  promptVersion,
  model,
  evidenceSchemaVersion,
})
