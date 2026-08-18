#!/usr/bin/env node
import { generateCatalog } from '../generate-catalog.mjs'
import { loadRegistryPlugins, writeJson } from '../registry-lib.mjs'
import { readStateCollection } from './state.mjs'

export const publishGovernanceCatalog = async () => {
  const [candidates, observations, classifications] = await Promise.all([
    readStateCollection('candidates'),
    readStateCollection('observations'),
    readStateCollection('classifications'),
  ])
  const registry = await loadRegistryPlugins()
  const registeredIds = new Set(registry.map(({ value }) => value.id))
  const publishedCandidates = {
    ...candidates,
    candidates: Object.fromEntries(Object.entries(candidates.candidates).filter(([id]) => !registeredIds.has(id))),
  }
  await writeJson('data/candidates.json', publishedCandidates)
  await writeJson('data/observations.json', observations)
  await writeJson('data/plugin-classifications.json', classifications)
  const catalog = await generateCatalog()
  return {
    candidates: Object.keys(publishedCandidates.candidates).length,
    observations: Object.keys(observations.repositories).length,
    classifications: Object.keys(classifications.classifications).length,
    catalog,
  }
}

if (process.argv[1]?.endsWith('/publisher.mjs')) console.log(JSON.stringify(await publishGovernanceCatalog()))
