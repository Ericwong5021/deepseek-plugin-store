import fs from 'node:fs/promises'
import { validateAiDecision } from './rules.mjs'

const retryableFormats = new Set([400, 404, 405, 408, 415, 422, 429, 500, 501, 502, 503, 504])

const extractText = (response) => response.output_text
  || response.output?.flatMap((item) => item.content || []).find((item) => item.type === 'output_text')?.text
  || response.choices?.[0]?.message?.content
  || response.choices?.[0]?.text

const parseJson = (value) => {
  const text = String(value).trim().replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '')
  try {
    return JSON.parse(text)
  } catch (originalError) {
    const start = text.indexOf('{')
    let depth = 0
    let inString = false
    let escaped = false
    for (let index = start; index >= 0 && index < text.length; index++) {
      const character = text[index]
      if (inString) {
        if (escaped) escaped = false
        else if (character === '\\') escaped = true
        else if (character === '"') inString = false
        continue
      }
      if (character === '"') inString = true
      else if (character === '{') depth++
      else if (character === '}' && --depth === 0) return JSON.parse(text.slice(start, index + 1))
    }
    throw originalError
  }
}

const normalizeClassificationDecision = (value) => {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return value
  const allowed = new Set(['intent', 'decision', 'classification', 'risk', 'confidence', 'requestedChanges', 'summary', 'descriptions', 'schemaVersion'])
  const decision = Object.fromEntries(Object.entries(value).filter(([key]) => allowed.has(key)))
  decision.schemaVersion = 1
  if (typeof decision.decision === 'string') decision.decision = decision.decision.toLowerCase()
  if (typeof decision.confidence !== 'number') decision.confidence = Number.parseFloat(decision.confidence)
  if (Number.isFinite(decision.confidence) && decision.confidence > 1 && decision.confidence <= 100) decision.confidence /= 100
  if (!Array.isArray(decision.requestedChanges)) decision.requestedChanges = []
  if (decision.risk?.level) decision.risk.level = String(decision.risk.level).toUpperCase()
  if (decision.descriptions && typeof decision.descriptions === 'object') decision.descriptions = { zh: decision.descriptions.zh, en: decision.descriptions.en }
  return decision
}

export class LLMAdapter {
  constructor({ apiKey, baseUrl, model, promptVersion = 'classify-v2', schemaPath = 'scripts/governance/schemas/ai-decision.schema.json' }) {
    this.apiKey = apiKey
    this.baseUrl = baseUrl.replace(/\/$/, '')
    this.model = model
    this.promptVersion = promptVersion
    this.schemaPath = schemaPath
    this.capability = null
  }

  async request(path, body) {
    let lastError
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        const response = await fetch(`${this.baseUrl}${path}`, {
          method: 'POST',
          headers: { Authorization: `Bearer ${this.apiKey}`, 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
          signal: AbortSignal.timeout(60000),
        })
        const text = await response.text()
        if (response.ok) return JSON.parse(text)
        const error = new Error(`${path}: ${response.status} ${text.slice(0, 300)}`)
        error.status = response.status
        lastError = error
        if (attempt === 2 || ![408, 429, 500, 502, 503, 504].includes(response.status)) throw error
      } catch (error) {
        lastError = error
        if (attempt === 2 || error.status && ![408, 429, 500, 502, 503, 504].includes(error.status)) throw error
      }
      await new Promise((resolve) => setTimeout(resolve, attempt * 1500))
    }
    throw lastError
  }

  async call({ name, system, input, schema }) {
    const formats = this.capability ? [this.capability] : ['responses', 'chat', 'completions']
    let lastError
    for (const format of formats) {
      try {
        let response
        if (format === 'responses') {
          response = await this.request('/responses', {
            model: this.model,
            input: [
              { role: 'system', content: [{ type: 'input_text', text: system }] },
              { role: 'user', content: [{ type: 'input_text', text: JSON.stringify(input) }] },
            ],
            text: { format: { type: 'json_schema', name, schema, strict: true } },
          })
        } else if (format === 'chat') {
          response = await this.request('/chat/completions', {
            model: this.model,
            messages: [{ role: 'system', content: system }, { role: 'user', content: JSON.stringify(input) }],
            response_format: { type: 'json_schema', json_schema: { name, schema, strict: true } },
          })
        } else {
          response = await this.request('/completions', { model: this.model, prompt: `${system}\n\nRequired JSON Schema:\n${JSON.stringify(schema)}\n\nInput:\n${JSON.stringify(input)}\n\nReturn one JSON object that strictly matches the schema.`, max_tokens: 1200 })
        }
        const content = extractText(response)
        if (!content) throw new Error(`${format}: response did not contain text`)
        this.capability = format
        return parseJson(content)
      } catch (error) {
        lastError = error
        if (this.capability || (error.status && !retryableFormats.has(error.status))) throw error
      }
    }
    throw lastError
  }

  async decision(kind, input, taxonomy) {
    const schema = JSON.parse(await fs.readFile(this.schemaPath, 'utf8'))
    if (kind === 'classify-v2') {
      schema.required.push('descriptions')
      schema.properties.descriptions = {
        type: 'object',
        additionalProperties: false,
        required: ['zh', 'en'],
        properties: {
          zh: { type: 'string', minLength: 8, maxLength: 320 },
          en: { type: 'string', minLength: 8, maxLength: 320 },
        },
      }
    }
    schema.properties.classification.properties.primaryCategory.enum = taxonomy.categories.map((category) => category.id)
    schema.properties.classification.properties.tags.items.enum = taxonomy.tags
    schema.properties.risk.properties.reasons.items.properties.evidenceRef.enum = input.evidence.evidenceRefs
    const system = await fs.readFile(`governance/prompts/${kind}.md`, 'utf8')
    let decision = await this.call({ name: `governance_${kind.replace(/-/g, '_')}`, system, input, schema })
    if (kind === 'classify-v2') decision = normalizeClassificationDecision(decision)
    if (kind === 'classify-v2' && Array.isArray(decision.classification?.tags)) {
      const tags = new Set(taxonomy.tags)
      decision.classification.tags = [...new Set(decision.classification.tags)].filter((tag) => tags.has(tag)).slice(0, 8)
    }
    return validateAiDecision({ decision, taxonomy, evidenceRefs: input.evidence.evidenceRefs })
  }

  classifyPlugin(evidence, taxonomy, ruleResult) {
    return this.decision('classify-v2', { evidence, taxonomy, ruleResult }, taxonomy)
  }

  triageIssue(issue, context, taxonomy) {
    return this.decision('issue-triage-v1', { evidence: context.evidence, issue, context }, taxonomy)
  }

  reviewCorrection(currentRecord, proposedChange, evidence, taxonomy) {
    return this.decision('correction-review-v1', { evidence, currentRecord, proposedChange }, taxonomy)
  }

  reviewPullRequest(diff, policyContext, evidence, taxonomy) {
    return this.decision('pr-review-v1', { evidence, diff, policyContext }, taxonomy)
  }
}
