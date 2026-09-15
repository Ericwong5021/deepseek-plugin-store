import crypto from 'node:crypto'
import fs from 'node:fs/promises'

export const readJson = async (file, fallback) => {
  try {
    return JSON.parse(await fs.readFile(file, 'utf8'))
  } catch (error) {
    if (error.code === 'ENOENT' && fallback !== undefined) return fallback
    throw new Error(`${file}: ${error.message}`)
  }
}

export const writeJson = async (file, value) => {
  await fs.mkdir(file.split('/').slice(0, -1).join('/'), { recursive: true })
  await fs.writeFile(file, JSON.stringify(value, null, 2) + '\n')
}

export const pluginId = (fullName) => fullName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

export const repositoryFromUrl = (url) => {
  const match = String(url || '').match(/^https:\/\/github\.com\/([\w.-]+\/[\w.-]+?)(?:\.git)?\/?(?:[?#].*)?$/i)
  return match?.[1] ?? null
}

export const validRepository = (value) => /^[\w.-]+\/[\w.-]+$/.test(value)

export const validInstallSpec = (value) => typeof value === 'string' && (
  /^github:[\w.-]+\/[\w.-]+(?:#[\w./-]+)?$/.test(value)
  || /^(?:@[a-z0-9][a-z0-9._~-]*\/[a-z0-9][a-z0-9._~-]*|[a-z0-9][a-z0-9._~-]*)$/.test(value)
)

export const loadRegistryPlugins = async () => {
  let files = []
  try {
    files = (await fs.readdir('registry/plugins')).filter((file) => file.endsWith('.json')).sort()
  } catch (error) {
    if (error.code !== 'ENOENT') throw error
  }
  return Promise.all(files.map(async (file) => ({ file: `registry/plugins/${file}`, value: await readJson(`registry/plugins/${file}`) })))
}

const categoryRules = [
  ['plugin-development', /\bplugin\b|插件|extension|扩展|bundle|cordis|sdk|scaffold|脚手架|manifest/i],
  ['code-generation', /code.?gen|代码生成|generate.{0,20}(?:code|function)|function.{0,20}generat|代码转换|refactor/i],
  ['testing-debugging', /\btest(?:ing)?\b|测试|debug|调试|lint|诊断|trace|日志|benchmark|eval/i],
  ['project-analysis', /project.{0,16}(?:analy|audit|review)|项目分析|代码审查|code.?review|dependency|依赖分析|git.?graph/i],
  ['orchestration', /orchestrat|编排|multi.?agent|多智能体|subagent|子代理|agent.?team|智能体团队/i],
  ['automation', /automat|自动化|cron|schedul|定时|wakeup|watcher|auto.?approval/i],
  ['planning-execution', /\bplan(?:ning)?\b|计划|任务|task|todo|workflow|工作流|执行|kanban/i],
  ['memory-context', /memory|记忆|context|上下文|prompt|会话|session|token/i],
  ['search-browsing', /search|搜索|browser|浏览器|playwright|网页|web.?fetch|crawler|爬虫/i],
  ['deep-research', /research|研究|literature|论文|academic|学术|deep.?research/i],
  ['knowledge-management', /knowledge|知识|rag|notebook|笔记|wiki|graph|知识库/i],
  ['document-processing', /document|文档|pdf|markdown|latex|office|pptx|docx|ocr/i],
  ['themes-layout', /theme|主题|skin|皮肤|color|配色|css|background|背景|layout|布局/i],
  ['navigation-panels', /sidebar|侧边栏|panel|面板|navigation|导航|launcher|启动器|menu|菜单|dashboard|仪表盘/i],
  ['visualization', /visuali[sz]|可视化|chart|图表|graph|图谱|render|渲染|canvas/i],
  ['desktop-mobile', /desktop|桌面|mobile|移动端|android|ios|electron|portable|web.?ui/i],
  ['files-terminal', /\bfile\b|文件|terminal|终端|shell|命令行|\bcli\b|directory|目录|ssh|git/i],
  ['data-processing', /\bdata\b|数据|database|数据库|sql|csv|json|analytics|统计|finance|stock|量化/i],
  ['media-tools', /image|图像|图片|video|视频|audio|音频|media|媒体|bilibili|douyin|ocr/i],
  ['general-utilities', /tool|工具|utility|实用|helper|助手|clipboard|剪贴板|copy|转换/i],
  ['external-services', /integration|集成|bridge|桥接|api|oauth|mcp|微信|wechat|telegram|discord|github|cloud|云/i],
  ['notifications-monitoring', /notif|通知|alert|提醒|monitor|监控|watch|observability|告警|status/i],
  ['collaboration', /collaborat|协作|share|分享|multi.?user|多用户|team|团队|comment|批注|review/i],
  ['education-explanation', /learn|学习|education|教育|teach|教学|tutorial|教程|explain|讲解|classroom/i],
]

const legacyWeights = {
  'ui-enhancements': ['themes-layout', 'navigation-panels', 'visualization', 'desktop-mobile'],
  'workflow-automation': ['automation', 'planning-execution', 'orchestration', 'memory-context'],
  tools: ['general-utilities', 'files-terminal', 'data-processing', 'media-tools', 'search-browsing'],
  notifications: ['notifications-monitoring'],
  'dev-helpers': ['plugin-development', 'testing-debugging', 'project-analysis', 'code-generation'],
  learning: ['education-explanation', 'deep-research', 'knowledge-management'],
}

const tagRules = [
  ['agent', /agent|智能体|代理/i], ['api', /\bapi\b/i], ['automation', /automat|自动化/i], ['browser', /browser|浏览器|playwright/i],
  ['chat', /chat|聊天|conversation|对话/i], ['cli', /\bcli\b|命令行/i], ['code-generation', /code.?gen|代码生成|generate.{0,20}code/i],
  ['collaboration', /collaborat|协作|multi.?user|多用户|team/i], ['context', /context|上下文/i], ['data', /\bdata\b|数据|database|数据库/i],
  ['debugging', /debug|调试|诊断|trace/i], ['desktop', /desktop|桌面|electron/i], ['document', /document|文档|pdf|markdown|latex|docx|pptx/i],
  ['education', /learn|学习|education|教学|教程|explain|讲解/i], ['file', /\bfile\b|文件|directory|目录/i], ['image', /image|图像|图片|ocr/i],
  ['integration', /integration|集成|bridge|桥接|oauth/i], ['knowledge', /knowledge|知识|rag|wiki/i], ['layout', /layout|布局|sidebar|侧边栏|panel|面板/i],
  ['mcp', /\bmcp\b/i], ['memory', /memory|记忆/i], ['mobile', /mobile|移动端|android|ios/i], ['monitoring', /monitor|监控|observability|status/i],
  ['notification', /notif|通知|alert|提醒/i], ['planning', /\bplan|计划|todo|task|任务/i], ['project-analysis', /audit|分析|review|审查|dependency/i],
  ['research', /research|研究|literature|论文/i], ['search', /search|搜索|crawler|爬虫/i], ['skill', /\bskill\b|技能/i], ['terminal', /terminal|终端|shell|ssh/i],
  ['testing', /\btest|测试|benchmark|eval/i], ['theme', /theme|主题|skin|皮肤|color|配色|background|背景/i], ['tool', /tool|工具|utility/i],
  ['ui', /\bui\b|界面|frontend|前端|web.?ui/i], ['video', /video|视频|bilibili|douyin/i], ['visualization', /visuali[sz]|可视化|chart|图表|graph|图谱/i],
  ['workflow', /workflow|工作流/i],
]

export const classifyEvidence = ({ fullName = '', description = '', packageDescription = '', readme = '', legacyCategory = '' }, taxonomy) => {
  const text = `${fullName} ${description} ${packageDescription} ${readme.slice(0, 12000)}`
  const scores = new Map()
  const evidence = []
  for (const [category, pattern] of categoryRules) {
    const matches = text.match(pattern)
    if (!matches) continue
    scores.set(category, (scores.get(category) || 0) + 3)
    evidence.push(`text:${category}:${String(matches[0]).toLowerCase()}`)
  }
  for (const [index, category] of (legacyWeights[legacyCategory] || []).entries()) {
    const weight = Math.max(1, 2 - index * 0.25)
    scores.set(category, (scores.get(category) || 0) + weight)
  }
  const ranked = [...scores.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
  const manual = fullName.toLowerCase() === 'leechen298/code2skill'
  const category = manual ? 'plugin-development' : ranked[0]?.[0] ?? 'uncategorized'
  const categoryDef = taxonomy.categories.find((entry) => entry.id === category)
  const tags = tagRules.filter(([, pattern]) => pattern.test(text)).map(([tag]) => tag)
  if (manual) tags.push('code-generation', 'mcp', 'skill', 'testing')
  const uniqueTags = [...new Set(tags)].sort()
  const top = ranked[0]?.[1] ?? 0
  const second = ranked[1]?.[1] ?? 0
  const needsReview = manual ? false : category === 'uncategorized' || top < 3 || top === second
  return {
    group: categoryDef.group,
    category,
    tags: uniqueTags,
    source: manual ? 'reviewed-override' : legacyCategory ? 'legacy-migration' : 'evidence-suggestion',
    confidence: manual ? 'high' : needsReview ? 'low' : top - second >= 2 ? 'high' : 'medium',
    evidence: manual ? ['issue:https://github.com/Ericwong5021/deepseek-plugin-store/issues/1'] : evidence.slice(0, 8),
    needsReview,
    ...(manual ? { issueUrl: 'https://github.com/Ericwong5021/deepseek-plugin-store/issues/1' } : {}),
  }
}

export const sha256 = (value) => crypto.createHash('sha256').update(typeof value === 'string' ? value : JSON.stringify(value)).digest('hex')

export const titleForLegacyCategory = (id) => ({
  'editor-picks': '编辑精选 / Editor Picks',
  'ui-enhancements': 'UI 增强 / UI Enhancements',
  'workflow-automation': '工作流与自动化 / Workflow & Automation',
  tools: '工具集 / Tools',
  notifications: '通知与监控 / Notifications & Monitoring',
  'dev-helpers': '开发辅助 / Development Helpers',
  learning: '学习与教育 / Learning & Education',
  misc: '其他 / Miscellaneous',
}[id])
