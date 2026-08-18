#!/usr/bin/env node
import { discover } from './discover.mjs'

const discovery = await discover()
console.log(JSON.stringify({ discovery }))
