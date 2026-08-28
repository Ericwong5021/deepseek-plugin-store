import fs from 'node:fs/promises'
import { pathToFileURL } from 'node:url'
import { buildCatalogOutputs } from './generate-catalog.mjs'

const CATEGORY_ICONS = {
  'editor-picks': '✨',
  'ui-enhancements': '🎨',
  'workflow-automation': '🔁',
  tools: '🛠️',
  notifications: '🔔',
  'dev-helpers': '🧑‍💻',
  learning: '🎓',
  misc: '🧩',
  'other-projects': '🔗',
}

const CATEGORY_ORDER = [
  'editor-picks',
  'ui-enhancements',
  'workflow-automation',
  'tools',
  'notifications',
  'dev-helpers',
  'learning',
  'misc',
  'other-projects',
]

const CATEGORY_TITLES = {
  en: {
    'editor-picks': 'Editor Picks',
    'ui-enhancements': 'UI Enhancements',
    'workflow-automation': 'Workflow & Automation',
    tools: 'Tools',
    notifications: 'Notifications & Monitoring',
    'dev-helpers': 'Development Helpers',
    learning: 'Learning & Education',
    misc: 'Miscellaneous',
    'other-projects': 'Other Projects',
  },
  zh: {
    'editor-picks': '编辑精选',
    'ui-enhancements': 'UI 增强',
    'workflow-automation': '工作流与自动化',
    tools: '工具集',
    notifications: '通知与监控',
    'dev-helpers': '开发辅助',
    learning: '学习与教育',
    misc: '其他',
    'other-projects': '其他项目',
  },
}

function entryLine(plugin) {
  const description = (plugin.description ?? '').replace(/\r?\n/g, ' ').replace(/[\\`*_[\]<>]/g, '\\$&').trim()
  const npm = plugin.npmName ? ` · \`${plugin.npmName}\`` : ''
  return `- [${plugin.fullName}](${plugin.url}) ★${plugin.stars}${npm}${description ? ` — ${description}` : ''}`
}

function localeCopy(zh) {
  return zh ? {
    banner: 'docs/banner.png',
    tagline: '发现、安装 DeepSeek Harness 生态中的社区插件、工具与扩展。',
    language: '**中文** · [English](README.en.md)',
    intro: '本目录从 [`dsh-plugin`](https://github.com/topics/dsh-plugin) Topic、编辑精选和提交 Issue 中发现候选。发现不等于收录；公开项目以 Registry 为准，新准入必须具备固定提交证据并声明 `package.json:dsh.bundle`。历史迁移记录可能保持 `legacy-pending`，但不会被当作已验证插件。',
    stats: (plugins, candidates, ready, updatedAt) => `**${plugins} 个已收录插件** · **${candidates} 个隐藏候选** · **${ready} 个通过结构预检** · 上次治理数据：${updatedAt} UTC`,
    contents: '目录',
    category: '按分类浏览',
    rankings: '数据榜单',
    popular: '热门',
    rising: '上升趋势',
    newest: '新收录',
    active: '最近活跃',
    installing: '安装插件',
    all: '全部目录项目',
    listed: '收录你的插件',
    categoryHeader: '分类',
    pluginHeader: '项目数',
    rankingNote: '榜单只从已验证、Manifest 观测通过、分类无待复核且处于 active/incubating 状态的插件中生成。热度和涨幅不代表本项目背书。',
    rankingEmpty: '当前证据不足，暂不发布该榜单。',
    groupCount: (count, related) => `${count} 个${related ? '项目' : '插件'}`,
    relatedNote: 'Topic 中发现但尚未进入 Registry 的项目保持隐藏候选状态，不会获得 DSH 直接安装入口。',
    listedBody: '在根目录 `package.json` 中声明有效的 `dsh.bundle`，准备安装或使用说明，然后提交[插件收录 Issue](https://github.com/Ericwong5021/deepseek-plugin-store/issues/new?template=plugin-submission.yml)。添加 [`dsh-plugin`](https://github.com/topics/dsh-plugin) Topic 只会进入自动发现候选池，不会绕过 Registry 准入。',
    governance: '插件治理',
    governanceBody: `- **真值源**：\`registry/plugins/<id>.json\` 管理公开插件；\`governance/state/**\` 记录候选、仓库观测和分类状态；\`data/*.json\` 和 README 是可重建发布物。
- **准入证据**：检查公开且未归档的仓库、可解析的根 \`package.json\`、有效 \`dsh.bundle\`、Manifest 引用文件、README 指引和默认分支检查，并保存固定 commit SHA。准入流程不执行外部仓库代码。
- **验证边界**：\`verified\` 表示结构和证据通过，不是安全审计或运行时兼容性保证；\`legacy-pending\` 只是显式的历史迁移状态。
- **分类顺序**：人工复核 > 已接受的维护者分类 > LLM 分类 > Manifest/文本/关键词证据 > 历史迁移。人工结论不会被自动分类覆盖。
- **定时分类**：LLM 分类 Action 每天 00:43 UTC（北京时间 08:43）处理一批插件，批次大小由 \`LLM_CLASSIFIER_LIMIT\` 配置；定时运行不会自动续跑下一批。
- **PR 门禁**：Schema、身份唯一性、路径范围、不可变证据、治理策略和 Catalog 确定性必须全部通过。
- **发布**：定时发现产生治理状态 PR；通过门禁后合并，Publisher 同步生成 Catalog、榜单和中英文 README。`,
    browseStore: '浏览插件商店',
    submit: '提交插件',
    pluginColumn: '插件',
    starsColumn: 'Stars',
    npmInstallNote: 'npm 包，预构建，推荐使用',
    githubInstallNote: 'GitHub 源码，首次安装时按提示允许构建，然后重试',
    sourceWarning: '从 GitHub 源码安装的插件会在你的设备上执行构建脚本。请只安装你信任的来源，并尽可能固定到具体提交：',
    licenseTitle: '许可协议',
    license: '目录数据来自 GitHub 公开 API，由治理工作流验证后发布。',
    disclaimer: '社区项目，与 DeepSeek 无隶属关系，也未获得 DeepSeek 背书。',
    linksTitle: '友情链接',
  } : {
    banner: 'docs/banner.png',
    tagline: 'Discover community plugins, tools, and extensions for the DeepSeek Harness ecosystem.',
    language: '[中文](README.md) · **English**',
    intro: 'This directory discovers candidates from the [`dsh-plugin`](https://github.com/topics/dsh-plugin) topic, Editor Picks, and submission issues. Discovery is not admission; public entries come from the Registry, and new admissions require immutable commit evidence plus `package.json:dsh.bundle`. Migrated records may remain `legacy-pending`, but they are not treated as verified plugins.',
    stats: (plugins, candidates, ready, updatedAt) => `**${plugins} listed plugins** · **${candidates} hidden candidates** · **${ready} structurally ready candidates** · Last governance data: ${updatedAt} UTC`,
    contents: 'Contents',
    category: 'Browse by category',
    rankings: 'Data-driven rankings',
    popular: 'Popular',
    rising: 'Rising',
    newest: 'New',
    active: 'Recently active',
    installing: 'Installing plugins',
    all: 'All catalog items',
    listed: 'Get your plugin listed',
    categoryHeader: 'Category',
    pluginHeader: 'Items',
    rankingNote: 'Rankings include only verified plugins with observed manifests, reviewed public classifications, and active or incubating lifecycle status. Popularity and growth are not endorsements.',
    rankingEmpty: 'The available evidence is insufficient to publish this ranking.',
    groupCount: (count, related) => `${count} ${related ? (count === 1 ? 'project' : 'projects') : (count === 1 ? 'plugin' : 'plugins')}`,
    relatedNote: 'Projects discovered through the topic remain hidden candidates until admitted to the Registry and do not receive a direct DSH installation entry.',
    listedBody: 'Declare a valid `dsh.bundle` in the root `package.json`, provide installation or usage guidance, then open a [plugin admission issue](https://github.com/Ericwong5021/deepseek-plugin-store/issues/new?template=plugin-submission.yml). Adding the [`dsh-plugin`](https://github.com/topics/dsh-plugin) topic only enters the discovery pool; it does not bypass Registry admission.',
    governance: 'Plugin governance',
    governanceBody: `- **Sources of truth**: \`registry/plugins/<id>.json\` stores listed plugins; \`governance/state/**\` stores candidates, repository observations, and classifications; \`data/*.json\` and the READMEs are reproducible publication artifacts.
- **Admission evidence**: the workflow checks a public and active repository, a parseable root \`package.json\`, a valid \`dsh.bundle\`, referenced manifest files, README guidance, and default-branch checks, then pins the reviewed commit SHA. External repository code is never executed during admission.
- **Verification boundary**: \`verified\` means the structural evidence passed; it is not a security audit or runtime compatibility guarantee. \`legacy-pending\` is an explicit migration state only.
- **Classification precedence**: human review > accepted maintainer classification > LLM classification > manifest/text/keyword evidence > legacy migration. Automated classification cannot override a human decision.
- **Scheduled classification**: the LLM classification Action processes one plugin batch every day at 00:43 UTC. \`LLM_CLASSIFIER_LIMIT\` controls the batch size, and scheduled runs do not automatically chain another batch.
- **PR gates**: schema, identity uniqueness, path scope, immutable evidence, governance policy, and deterministic catalog generation must all pass.
- **Publication**: scheduled discovery creates a governance-state PR. After the gates pass and the PR is merged, the Publisher regenerates the catalogs, rankings, and bilingual READMEs.`,
    browseStore: 'Browse the Store',
    submit: 'Submit a plugin',
    pluginColumn: 'Plugin',
    starsColumn: 'Stars',
    npmInstallNote: 'npm package, prebuilt and recommended',
    githubInstallNote: 'GitHub source, follow the allowBuilds prompt on first install and retry',
    sourceWarning: 'GitHub-sourced plugins run build scripts on your machine at install time. Only install sources you trust, and pin a commit when possible:',
    licenseTitle: 'License',
    license: 'Catalog data comes from the public GitHub API and is published after governance validation.',
    disclaimer: 'Community project. Not affiliated with or endorsed by DeepSeek.',
    linksTitle: 'Links',
  }
}

export function renderReadmes(catalog, catalogV2) {
  if (catalogV2?.schemaVersion !== 2) throw new Error('data/catalog-v2.json is missing or invalid')
  const plugins = [...catalog.plugins].sort((a, b) => b.stars - a.stars)
  const related = [...(catalog.related ?? [])].sort((a, b) => b.stars - a.stars)
  const pluginsV2 = new Map(catalogV2.plugins.map((plugin) => [plugin.id, plugin]))
  const categoriesV2 = new Map(catalogV2.taxonomy.categories.map((category) => [category.id, category]))
  const rankings = catalogV2.collections.rankings
  const candidateSummary = catalogV2.candidateSummary
  const groups = new Map()
  for (const plugin of plugins) {
    if (!groups.has(plugin.category.id)) groups.set(plugin.category.id, { title: plugin.category.title, items: [] })
    groups.get(plugin.category.id).items.push(plugin)
  }
  if (related.length) groups.set('other-projects', { title: '其他项目 / Other Projects', items: related })
  const updatedAt = new Date(catalogV2.updatedAt).toISOString().slice(0, 16).replace('T', ' ')

  function render(zh) {
    const copy = localeCopy(zh)
    const titles = CATEGORY_TITLES[zh ? 'zh' : 'en']
    const sections = CATEGORY_ORDER
      .filter((id) => groups.has(id))
      .map((id) => {
        const { items } = groups.get(id)
        return `<a id="${id}"></a>\n<details>\n<summary><strong>${CATEGORY_ICONS[id]} ${titles[id]}</strong> <sup>${copy.groupCount(items.length, id === 'other-projects')}</sup></summary>\n\n### ${titles[id]}\n\n${items.map(entryLine).join('\n')}\n\n</details>`
      })
      .join('\n\n')
    const categoryDirectory = CATEGORY_ORDER
      .filter((id) => groups.has(id))
      .map((id) => {
        const { items } = groups.get(id)
        return `| ${CATEGORY_ICONS[id]} | [${titles[id]}](#${id}) | ${items.length} |`
      })
      .join('\n')
    const rankingDefinition = [
      ['popular', copy.popular],
      ['rising', copy.rising],
      ['new', copy.newest],
      ['active', copy.active],
    ]
    const rankingSections = rankingDefinition.map(([id, title]) => {
      const rows = (rankings[id]?.items || []).slice(0, 5).flatMap((pluginId, index) => {
        const plugin = pluginsV2.get(pluginId)
        if (!plugin) return []
        const category = categoriesV2.get(plugin.classification.category)
        const stars = plugin.observations?.github?.stars ?? 0
        const metric = id === 'popular'
          ? `★${stars}`
          : id === 'rising'
            ? `+★${rankings.rising.deltas?.[pluginId] ?? 0}`
            : id === 'new'
              ? plugin.addedAt
              : plugin.observations?.github?.lastPushAt?.slice(0, 10) || '-'
        return [`| ${index + 1} | [${plugin.repository.fullName}](${plugin.repository.url}) | ${category?.titles?.[zh ? 'zh' : 'en'] || plugin.classification.category} | ${metric} |`]
      })
      if (!rows.length) return `### ${title}\n\n<sub>${copy.rankingEmpty}</sub>`
      return `### ${title}\n\n| # | ${copy.pluginColumn} | ${copy.categoryHeader} | ${id === 'popular' ? copy.starsColumn : zh ? '指标' : 'Metric'} |\n|--:|:--|:--|--:|\n${rows.join('\n')}`
    }).join('\n\n')

    return `<div align="center">

[<img src="${copy.banner}" alt="DeepSeek Plugin Store" width="100%">](https://deepseekplugin.store)

# DeepSeek Plugin Store

**${copy.tagline}**

[![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)
[![Governance Publisher](https://github.com/Ericwong5021/deepseek-plugin-store/actions/workflows/governance-publish.yml/badge.svg)](https://github.com/Ericwong5021/deepseek-plugin-store/actions/workflows/governance-publish.yml)
[![Catalog Plugins](https://img.shields.io/badge/catalog_plugins-${catalogV2.plugins.length}-c9362b?style=flat-square)](#all-catalog-plugins)
[![License: CC0-1.0](https://img.shields.io/badge/license-CC0--1.0-292522?style=flat-square)](LICENSE)

[**${copy.browseStore} →**](https://deepseekplugin.store) · [${copy.submit}](https://github.com/Ericwong5021/deepseek-plugin-store/issues/new?template=plugin-submission.yml) · [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)

${copy.language}

</div>

---

${copy.intro}

> ${copy.stats(catalogV2.plugins.length, candidateSummary.hidden, candidateSummary.admissionReady, updatedAt)}

${copy.relatedNote}

## ${copy.contents}

- [${copy.category}](#browse-by-category)
- [${copy.governance}](#plugin-governance)
- [${copy.rankings}](#rankings)
- [${copy.installing}](#installing-plugins)
- [${copy.all}](#all-catalog-plugins)
- [${copy.listed}](#get-listed)

<a id="browse-by-category"></a>
## ${copy.category}

| | ${copy.categoryHeader} | ${copy.pluginHeader} |
|:--:|:--|--:|
${categoryDirectory}

<a id="plugin-governance"></a>
## ${copy.governance}

${copy.governanceBody}

<a id="rankings"></a>
## ${copy.rankings}

${rankingSections}

<sub>${copy.rankingNote}</sub>

<a id="installing-plugins"></a>
## ${copy.installing}

\`\`\`sh
# ${copy.npmInstallNote}
dsh plugin --profile <name> add <npm-package>

# ${copy.githubInstallNote}
dsh plugin --profile <name> add github:<owner>/<repo>
\`\`\`

> ⚠️ ${copy.sourceWarning} \`github:owner/repo#<sha>\`.

<a id="all-catalog-plugins"></a>
## ${copy.all}

${sections}

<a id="get-listed"></a>
## ${copy.listed}

${copy.listedBody}

[${copy.submit} →](https://github.com/Ericwong5021/deepseek-plugin-store/issues/new?template=plugin-submission.yml)

## ${copy.licenseTitle}

[CC0-1.0](LICENSE) · ${copy.license}

<sub>${copy.disclaimer}</sub>

## ${copy.linksTitle}

[LINUX DO](https://linux.do/)
`
  }

  return { readme: render(true), readmeEn: render(false), readmeZh: render(true) }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const catalogOutputs = await buildCatalogOutputs()
  const catalog = JSON.parse(catalogOutputs['data/plugins.json'])
  const catalogV2 = JSON.parse(catalogOutputs['data/catalog-v2.json'])
  const outputs = renderReadmes(catalog, catalogV2)
  const files = new Map([
    ['README.md', outputs.readme],
    ['README.en.md', outputs.readmeEn],
    ['README.zh.md', outputs.readmeZh],
  ])
  if (process.argv.includes('--check')) {
    const stale = []
    for (const [file, expected] of files) {
      const actual = await fs.readFile(file, 'utf8').catch((error) => error.code === 'ENOENT' ? '' : Promise.reject(error))
      if (actual !== expected) stale.push(file)
    }
    if (stale.length) throw new Error(`README publication is stale: ${stale.join(', ')}`)
  } else {
    await Promise.all([...files].map(([file, contents]) => fs.writeFile(file, contents)))
  }
}
