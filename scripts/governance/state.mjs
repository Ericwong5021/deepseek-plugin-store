import fs from 'node:fs/promises'
import path from 'node:path'
import { readJson, sha256, writeJson } from '../registry-lib.mjs'

const definitions = {
  candidates: { legacy: 'data/candidates.json', key: 'candidates', schemaVersion: 2 },
  observations: { legacy: 'data/observations.json', key: 'repositories', schemaVersion: 2 },
  classifications: { legacy: 'data/plugin-classifications.json', key: 'classifications', schemaVersion: 2 },
}

export const stateFile = (kind, id) => `governance/state/${kind}/${sha256(id).slice(0, 2)}/${id}.json`
export const metaFile = (kind) => `governance/state/meta/${kind}.json`

const listStateFiles = async (kind) => {
  const root = `governance/state/${kind}`
  let shards
  try {
    shards = await fs.readdir(root, { withFileTypes: true })
  } catch (error) {
    if (error.code === 'ENOENT') return []
    throw error
  }
  const files = []
  for (const shard of shards.filter((entry) => entry.isDirectory()).sort((a, b) => a.name.localeCompare(b.name))) {
    const names = await fs.readdir(path.join(root, shard.name))
    for (const name of names.filter((entry) => entry.endsWith('.json')).sort()) files.push(path.join(root, shard.name, name))
  }
  return files
}

export const readStateCollection = async (kind) => {
  const definition = definitions[kind]
  if (!definition) throw new Error(`unknown governance state kind: ${kind}`)
  const files = await listStateFiles(kind)
  if (!files.length) return readJson(definition.legacy)
  const meta = await readJson(metaFile(kind), { schemaVersion: 1, updatedAt: null })
  const entries = await Promise.all(files.map(async (file) => {
    const value = await readJson(file)
    const id = path.basename(file, '.json')
    if ((value.id || id) !== id) throw new Error(`governance state identity mismatch: ${file}`)
    return [id, value]
  }))
  return {
    schemaVersion: definition.schemaVersion,
    updatedAt: meta.updatedAt,
    [definition.key]: Object.fromEntries(entries.sort(([a], [b]) => a.localeCompare(b))),
    ...(kind === 'candidates' ? { failures: meta.failures || [] } : {}),
  }
}

export const writeStateMeta = async (kind, value) => writeJson(metaFile(kind), { schemaVersion: 1, ...value })

export const syncStateCollection = async (kind, before, after) => {
  const definition = definitions[kind]
  const previous = before[definition.key] || {}
  const next = after[definition.key] || {}
  let changed = 0
  for (const [id, value] of Object.entries(next)) {
    if (JSON.stringify(previous[id]) === JSON.stringify(value)) continue
    await writeJson(stateFile(kind, id), value)
    changed++
  }
  for (const id of Object.keys(previous)) {
    if (id in next) continue
    await fs.unlink(stateFile(kind, id)).catch((error) => {
      if (error.code !== 'ENOENT') throw error
    })
    changed++
  }
  await writeStateMeta(kind, { updatedAt: after.updatedAt, ...(kind === 'candidates' ? { failures: after.failures || [] } : {}) })
  return changed
}

export const writeStateRecord = async (kind, id, value) => writeJson(stateFile(kind, id), value)
