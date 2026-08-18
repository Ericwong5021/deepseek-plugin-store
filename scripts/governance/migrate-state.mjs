#!/usr/bin/env node
import { readJson } from '../registry-lib.mjs'
import { syncStateCollection } from './state.mjs'

const empty = (key, schemaVersion = 2) => ({ schemaVersion, updatedAt: null, [key]: {} })
const candidates = await readJson('data/candidates.json')
const observations = await readJson('data/observations.json')
const classifications = await readJson('data/plugin-classifications.json')
const result = {
  candidates: await syncStateCollection('candidates', empty('candidates'), candidates),
  observations: await syncStateCollection('observations', empty('repositories'), observations),
  classifications: await syncStateCollection('classifications', empty('classifications'), classifications),
}
console.log(JSON.stringify(result))
