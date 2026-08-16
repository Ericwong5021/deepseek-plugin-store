#!/usr/bin/env node
import { discover } from './discover.mjs'
import { generateCatalog } from './generate-catalog.mjs'

const discovery = await discover()
const catalog = await generateCatalog()
console.log(JSON.stringify({ discovery, catalog }))
