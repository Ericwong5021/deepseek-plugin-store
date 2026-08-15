import fs from 'node:fs/promises'
import { pathToFileURL } from 'node:url'

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
    intro: '本目录从带有 [`dsh-plugin`](https://github.com/topics/dsh-plugin) topic 的 GitHub 仓库及编辑精选中发现候选，并仅收录在 `package.json` 中声明 `dsh.bundle` 的插件。',
    stats: (plugins, related, updatedAt) => `**${plugins} 个插件仓库** · **${related} 个其他项目** · 每小时更新 · 上次同步：${updatedAt} UTC`,
    contents: '目录',
    category: '按分类浏览',
    popular: '热门插件',
    installing: '安装插件',
    all: '全部目录项目',
    listed: '收录你的插件',
    categoryHeader: '分类',
    pluginHeader: '项目数',
    popularNote: '按当前 GitHub Stars 排序，热度不代表本项目背书。',
    groupCount: (count, related) => `${count} 个${related ? '项目' : '插件'}`,
    relatedNote: '仅带有 dsh-plugin topic 但未声明 dsh.bundle 的仓库会归入“其他项目”，网站只提供 GitHub 入口，不提供 DSH 直接安装。',
    listedBody: '在 `package.json` 中声明 `dsh.bundle`，并给仓库添加 [`dsh-plugin`](https://github.com/topics/dsh-plugin) topic 可自动收录；申请进入编辑精选，请按[合作说明](COLLABORATION.md)提交 PR。',
    browseStore: '浏览插件商店',
    submit: '申请精选',
    pluginColumn: '插件',
    starsColumn: 'Stars',
    npmInstallNote: 'npm 包，预构建，推荐使用',
    githubInstallNote: 'GitHub 源码，首次安装时按提示允许构建，然后重试',
    sourceWarning: '从 GitHub 源码安装的插件会在你的设备上执行构建脚本。请只安装你信任的来源，并尽可能固定到具体提交：',
    licenseTitle: '许可协议',
    license: '目录数据来自 GitHub 公开 API，每小时自动刷新。',
    disclaimer: '社区项目，与 DeepSeek 无隶属关系，也未获得 DeepSeek 背书。',
    linksTitle: '友情链接',
  } : {
    banner: 'docs/banner.png',
    tagline: 'Discover community plugins, tools, and extensions for the DeepSeek Harness ecosystem.',
    language: '[中文](README.md) · **English**',
    intro: 'This directory discovers candidates from GitHub repositories carrying the [`dsh-plugin`](https://github.com/topics/dsh-plugin) topic and manually selected Editor Picks, then lists only plugins declaring `dsh.bundle` in `package.json`.',
    stats: (plugins, related, updatedAt) => `**${plugins} plugin repositories** · **${related} other projects** · Updated hourly · Last sync: ${updatedAt} UTC`,
    contents: 'Contents',
    category: 'Browse by category',
    popular: 'Popular plugins',
    installing: 'Installing plugins',
    all: 'All catalog items',
    listed: 'Get your plugin listed',
    categoryHeader: 'Category',
    pluginHeader: 'Items',
    popularNote: 'Ranked by current GitHub Stars. Popularity is not an endorsement.',
    groupCount: (count, related) => `${count} ${related ? (count === 1 ? 'project' : 'projects') : (count === 1 ? 'plugin' : 'plugins')}`,
    relatedNote: 'Repositories that only carry the dsh-plugin topic without declaring dsh.bundle are grouped under Other Projects. The site provides a GitHub link only and does not offer direct DSH installation.',
    listedBody: 'Declare `dsh.bundle` in `package.json` and add the [`dsh-plugin`](https://github.com/topics/dsh-plugin) topic for automatic listing. To request an Editor Pick, open a PR following the [collaboration guide](COLLABORATION.md).',
    browseStore: 'Browse the Store',
    submit: 'Submit a plugin',
    pluginColumn: 'Plugin',
    starsColumn: 'Stars',
    npmInstallNote: 'npm package, prebuilt and recommended',
    githubInstallNote: 'GitHub source, follow the allowBuilds prompt on first install and retry',
    sourceWarning: 'GitHub-sourced plugins run build scripts on your machine at install time. Only install sources you trust, and pin a commit when possible:',
    licenseTitle: 'License',
    license: 'Catalog data comes from the public GitHub API and refreshes hourly.',
    disclaimer: 'Community project. Not affiliated with or endorsed by DeepSeek.',
    linksTitle: 'Links',
  }
}

export function renderReadmes(catalog) {
  const plugins = [...catalog.plugins].sort((a, b) => b.stars - a.stars)
  const related = [...(catalog.related ?? [])].sort((a, b) => b.stars - a.stars)
  const groups = new Map()
  for (const plugin of plugins) {
    if (!groups.has(plugin.category.id)) groups.set(plugin.category.id, { title: plugin.category.title, items: [] })
    groups.get(plugin.category.id).items.push(plugin)
  }
  if (related.length) groups.set('other-projects', { title: '其他项目 / Other Projects', items: related })
  const updatedAt = new Date(catalog.updatedAt).toISOString().slice(0, 16).replace('T', ' ')

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
    const popular = plugins
      .slice(0, 5)
      .map((plugin, index) => `| ${index + 1} | [${plugin.fullName}](${plugin.url}) | ${titles[plugin.category.id]} | ★${plugin.stars} |`)
      .join('\n')

    return `<div align="center">

[<img src="${copy.banner}" alt="DeepSeek Plugin Store" width="100%">](https://deepseekplugin.store)

# DeepSeek Plugin Store

**${copy.tagline}**

[![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)
[![Catalog Update](https://github.com/Ericwong5021/deepseek-plugin-store/actions/workflows/update.yml/badge.svg)](https://github.com/Ericwong5021/deepseek-plugin-store/actions/workflows/update.yml)
[![Catalog Plugins](https://img.shields.io/badge/catalog_plugins-${plugins.length}-c9362b?style=flat-square)](#all-catalog-plugins)
[![License: CC0-1.0](https://img.shields.io/badge/license-CC0--1.0-292522?style=flat-square)](LICENSE)

[**${copy.browseStore} →**](https://deepseekplugin.store) · [${copy.submit}](https://github.com/Ericwong5021/deepseek-plugin-store/issues/new?template=plugin-submission.yml) · [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)

${copy.language}

</div>

---

${copy.intro}

> ${copy.stats(plugins.length, related.length, updatedAt)}

${copy.relatedNote}

## ${copy.contents}

- [${copy.category}](#browse-by-category)
- [${copy.popular}](#popular-plugins)
- [${copy.installing}](#installing-plugins)
- [${copy.all}](#all-catalog-plugins)
- [${copy.listed}](#get-listed)

<a id="browse-by-category"></a>
## ${copy.category}

| | ${copy.categoryHeader} | ${copy.pluginHeader} |
|:--:|:--|--:|
${categoryDirectory}

<a id="popular-plugins"></a>
## ${copy.popular}

| # | ${copy.pluginColumn} | ${copy.categoryHeader} | ${copy.starsColumn} |
|--:|:--|:--|--:|
${popular}

<sub>${copy.popularNote}</sub>

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
  const catalog = JSON.parse(await fs.readFile('data/plugins.json', 'utf8'))
  const { readme, readmeEn, readmeZh } = renderReadmes(catalog)
  await Promise.all([
    fs.writeFile('README.md', readme),
    fs.writeFile('README.en.md', readmeEn),
    fs.writeFile('README.zh.md', readmeZh),
  ])
}
