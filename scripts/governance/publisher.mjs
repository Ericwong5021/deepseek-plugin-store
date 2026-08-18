#!/usr/bin/env node
import { generateCatalog } from '../generate-catalog.mjs'
import { writeJson } from '../registry-lib.mjs'
import { readStateCollection } from './state.mjs'

export const publishGovernanceCatalog = async () => {
  const [candidates, observations, classifications] = await Promise.all([
    readStateCollection('candidates'),
    readStateCollection('observations'),
    readStateCollection('classifications'),
  ])
  await writeJson('data/candidates.json', candidates)
  await writeJson('data/observations.json', observations)
  await writeJson('data/plugin-classifications.json', classifications)
  const catalog = await generateCatalog()
  return {
    candidates: Object.keys(candidates.candidates).length,
    observations: Object.keys(observations.repositories).length,
    classifications: Object.keys(classifications.classifications).length,
    catalog,
  }
}

if (process.argv[1]?.endsWith('/publisher.mjs')) console.log(JSON.stringify(await publishGovernanceCatalog()))
