<div align="center">

[<img src="docs/banner.png" alt="DeepSeek Plugin Store" width="100%">](https://deepseekplugin.store)

# DeepSeek Plugin Store

**发现、安装 DeepSeek Harness 生态中的社区插件、工具与扩展。**

[![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)
[![Catalog Update](https://github.com/Ericwong5021/deepseek-plugin-store/actions/workflows/update.yml/badge.svg)](https://github.com/Ericwong5021/deepseek-plugin-store/actions/workflows/update.yml)
[![Catalog Plugins](https://img.shields.io/badge/catalog_plugins-845-c9362b?style=flat-square)](#all-catalog-plugins)
[![License: CC0-1.0](https://img.shields.io/badge/license-CC0--1.0-292522?style=flat-square)](LICENSE)

[**浏览插件商店 →**](https://deepseekplugin.store) · [申请精选](https://github.com/Ericwong5021/deepseek-plugin-store/issues/new?template=plugin-submission.yml) · [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)

**中文** · [English](README.en.md)

</div>

---

本目录从带有 [`dsh-plugin`](https://github.com/topics/dsh-plugin) topic 的 GitHub 仓库及编辑精选中发现候选，并仅收录在 `package.json` 中声明 `dsh.bundle` 的插件。

> **845 个插件仓库** · 每小时更新 · 上次同步：2026-08-14 08:51 UTC

## 目录

- [按分类浏览](#browse-by-category)
- [热门插件](#popular-plugins)
- [安装插件](#installing-plugins)
- [全部插件仓库](#all-catalog-plugins)
- [收录你的插件](#get-listed)

<a id="browse-by-category"></a>
## 按分类浏览

| | 分类 | 插件数 |
|:--:|:--|--:|
| 🎨 | [UI 增强](#ui-enhancements) | 231 |
| 🔁 | [工作流与自动化](#workflow-automation) | 95 |
| 🛠️ | [工具集](#tools) | 153 |
| 🔔 | [通知与监控](#notifications) | 18 |
| 🧑‍💻 | [开发辅助](#dev-helpers) | 31 |
| 🎓 | [学习与教育](#learning) | 2 |
| 🧩 | [其他](#misc) | 315 |

<a id="popular-plugins"></a>
## 热门插件

| # | 插件 | 分类 | Stars |
|--:|:--|:--|--:|
| 1 | [liustack/modlens](https://github.com/liustack/modlens) | 其他 | ★1013 |
| 2 | [ccch1mneyyy/dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) | 工具集 | ★654 |
| 3 | [sandbaseai/sandbase-harness](https://github.com/sandbaseai/sandbase-harness) | 其他 | ★570 |
| 4 | [omdsh-dev/DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) | UI 增强 | ★555 |
| 5 | [Anionex/dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) | UI 增强 | ★270 |

<sub>按当前 GitHub Stars 排序，热度不代表本项目背书。</sub>

<a id="installing-plugins"></a>
## 安装插件

### 将插件商店安装到 DSH Web UI

从 GitHub 安装最新版本：

```sh
npx @deepseek-ai/dsh plugin --profile web add github:Ericwong5021/deepseek-plugin-store
npx @deepseek-ai/dsh web
```

启动 Web UI 后，侧边栏会出现“插件商店”。在商店购物车中点击“直接安装到 DSH”，即可把选中的插件写入 `web` profile；安装新的 DSH 插件后请重启 Web UI 使其加载。

本地开发或验收时：

```sh
cd /path/to/deepseek-plugin-store
npx @deepseek-ai/dsh plugin --profile web add .
```

```sh
# npm 包，预构建，推荐使用
dsh plugin --profile <name> add <npm-package>

# GitHub 源码，首次安装时按提示允许构建，然后重试
dsh plugin --profile <name> add github:<owner>/<repo>
```

> ⚠️ 从 GitHub 源码安装的插件会在你的设备上执行构建脚本。请只安装你信任的来源，并尽可能固定到具体提交： `github:owner/repo#<sha>`.

<a id="all-catalog-plugins"></a>
## 全部插件仓库

<a id="ui-enhancements"></a>
<details>
<summary><strong>🎨 UI 增强</strong> <sup>231 个插件</sup></summary>

### UI 增强

- [omdsh-dev/DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) ★555 · `dsh-better-sidebar` — 一个侧边栏的完整工作台，支持三方拓展注册新Tab页面，内置文件渲染编辑/终端/Git/子代理
- [Anionex/dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) ★270 · `@dsh-external/dsh-vision-toolkit` — 让纯文本模型更好地做视觉任务的DeepSeek Harness插件：带意图的图片问答、长截图 OCR、UI 还原等｜DeepSeek Harness-native integration for agent-vision-toolkit: image Q&A, long-screenshot OCR, UI restoration, grounding, pixel diff, Artifacts, and Web UI.
- [Nagi-ovo/dsh-ads](https://github.com/Nagi-ovo/dsh-ads) ★265 · `@dsh-external/dsh-ads` — 是兄弟就来蹬我！DSH Web UI 广告：2005 年中文站点风格的侧栏广告 / 对话内信息流 / 角落弹窗 + 一个真实热区比视觉小得多的关闭叉。素材全虚构，域名打码。
- [hust-open-atom-club/oh-dsh](https://github.com/hust-open-atom-club/oh-dsh) ★140 · `@oh-dsh/desktop` — 一站式 DeepSeek Harness 社区发行版：TUI、桌面端与 Web UI 三种形态统一体验，支持分层安装、一步到位，免去手工整合打包。
- [huiliyi37/dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) ★108 · `@huiliyi37/dsh-tianshu-tui` — dsh-tianshu-tui — DeepSeek Harness terminal UI +harness workflow。是官方 DeepSeek Harness 上的交互式终端 UI 插件。渲染核心从本仓库自研的harness agent  Tianshu-Tui 演进而来，在官方的基础上增加了TDD、证据门、视觉图像模块等工作流。
- [Nagi-ovo/dsh-visualize](https://github.com/Nagi-ovo/dsh-visualize) ★64 · `@dsh-external/dsh-visualize` — DSH 对话内生成式 UI 插件：模型把交互式 HTML 卡片直接画进会话流——visualize 工具 + 配套 skill + 沙箱渲染卡，带流式预览、组件浮入动画与鲸鱼蓝主题跟随
- [ZSeven-W/dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil) ★58 · `@zseven-w/dsh-openpencil` — OpenPencil design preview and editing plugin for DSH
- [omdsh-dev/dsh-genui](https://github.com/omdsh-dev/dsh-genui) ★56 · `@omdsh-dev/dsh-genui` — GenUI for DeepSeek Harness: interactive UI components rendered inline in assistant replies via the dsh-ui fence — layout, charts, plots, forms, quizzes, mermaid, 3D scenes, and an action event loop back to the model. Ships the fence-teaching host plugin, the browser renderer (client half), and the genui skill.
- [alingalingling/ui-status-label](https://github.com/alingalingling/ui-status-label) ★26 · `dsh-ui-status-label` — 把你鲸鱼娘思考时的 deep diving 自定义成任意你想要的样子
- [omdsh-dev/dsh-custom-tool](https://github.com/omdsh-dev/dsh-custom-tool) ★20 · `dsh-custom-tool` — Create and manage sandboxed JavaScript tools for DeepSeek Harness with a Monaco editor and model-driven tool lifecycle.
- [Nwflower/dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) ★15 · `dsh-chat-import` — 从Claude Code、Codex、Reasonix等Agent工具导入历史消息，并在DSH中继续对话
- [ccq1/dsh-side-panel](https://github.com/ccq1/dsh-side-panel) ★15 · `@dsh-external/dsh-side-panel` — DSH 侧边栏，集成文件浏览器、终端和 Git 审查，方便预览文件。
- [dancingmemory/dskin](https://github.com/dancingmemory/dskin) ★12 · `dskin` — DSKIN · DeepSeek Harness（DSH）卡通像素皮肤插件 / Cartoon pixel skin plugin for DSH Web GUI — 原始界面不动，像素宠物会散步、眨眼、跳跃 / living pixel pets that stroll, blink and hop
- [omdsh-dev/dsh-data-agent](https://github.com/omdsh-dev/dsh-data-agent) ★11 · `@yejiming/dsh-data-agent` — Data Agent for DeepSeek Harness: session-scoped database connections with a dedicated agent preset that lets AI write SQL and iterate against live execution feedback.
- [dingyi222666/dsh-focus-chat](https://github.com/dingyi222666/dsh-focus-chat) ★11 · `@dingyi222666/dsh-focus-chat` — 为 dsh 提供新的「聚焦会话」精简会话视图，更轻松易于阅读，只关注最终产出结果。
- [lhh010/dsh-minigames](https://github.com/lhh010/dsh-minigames) ★11 · `@dsh-external/dsh-minigames` — DSH Web UI 右侧小游戏面板：18 款离线小游戏（恐龙跳一跳 / 俄罗斯方块 / 坦克大战 / 扫雷 / 2048 / 数独 / 吃豆人 / 跟枪练习等），可扩展游戏注册表，等待模型回复或修 bug 时的摸鱼神器
- [dsh-tui/dsh-tui](https://github.com/dsh-tui/dsh-tui) ★10 · `@dsh-tui/dsh-tui` — Claude Code-style terminal UI for DeepSeek Harness agents, as an out-of-tree dsh plugin bundle
- [omdsh-dev/dsh-gomoku](https://github.com/omdsh-dev/dsh-gomoku) ★9 · `@deepseek-ai/dsh-gomoku` — 在DSH中与AI下五子棋，也可以让AI对局，看哪个AI棋力更强
- [omdsh-dev/dsh-lark](https://github.com/omdsh-dev/dsh-lark) ★9 · `dsh-lark-channel` — Lark/Feishu IM bot channel for DeepSeek Harness: chats drive agents, replies and approvals return as messages and cards | 飞书 DeepSeek Harness 插件
- [yjh051108/dsh-super-injector](https://github.com/yjh051108/dsh-super-injector) ★8 · `@dsh-external/dsh-super-injector` — 超级模组注入器：运行时注入任意本地 DSH 插件包（junction 链接 + loader.create，不碰 patch/package.json/不重启），热重载全家桶 + 开发侧挂区一键转正 + 一键卸载 + 路由自愈 + 插件管理 UI（设置页：列表/卸载/拖入内化），清单持久化重启自动恢复——DSH 生态的 BepInEx 式模组注入入口
- [HsiangNianian/dsh-auto-continue](https://github.com/HsiangNianian/dsh-auto-continue) ★8 · `dsh-client-auto-continue` — DSH Web UI plugin: automatically sends "继续" (continue) when a request is interrupted by network errors or other non-human causes
- [HuanLinOTO/dsh-plugin-mineru](https://github.com/HuanLinOTO/dsh-plugin-mineru) ★7 · `@huanlin/dsh-plugin-mineru` — 向模型暴露 MinerU 文档解析工具，将 PDF/图片/DOCX/PPTX/XLSX 转为结构化 Markdown/JSON | Exposes MinerU document-parsing tools to the model, converting PDF/images/DOCX/PPTX/XLSX into structured Markdown/JSON
- [vlln/dsh-task-status](https://github.com/vlln/dsh-task-status) ★7 · `@dsh-external/dsh-task-status` — DSH 插件：后台任务状态条（对话页任务进度 + 实时输出 tail）。官方 bundle 插件，dsh plugin --profile web add 安装
- [Fishquito7/dsh-skill-viewer](https://github.com/Fishquito7/dsh-skill-viewer) ★7 · `dsh-skill-viewer` — DSH Web UI plugin: Skills settings section with hot enable/disable, delete and add
- [bill9109/dsh-web-ui-notify](https://github.com/bill9109/dsh-web-ui-notify) ★6 · `@bill9109/dsh-web-ui-notify` — 为 DSH 增加桌面通知提醒
- [LoserFox/telegram](https://github.com/LoserFox/telegram) ★6 · `@loserfox/telegram` — Telegram Bot API 桥接插件：长轮询、per-chat 会话、HTML 格式化
- [Zhenyu98/dsh-context-doctor](https://github.com/Zhenyu98/dsh-context-doctor) ★6 · `dsh-context-doctor` — DSH 上下文注入审计插件：统计 AGENTS.md 指令链/技能目录/工具 schema 的 token 成本，检测重复与冲突；Web UI 圆环面板 + context\_audit 工具。Context Doctor for DeepSeek Harness: audit instruction-chain / skill catalog / tool schemas token cost.
- [Sev7een/ds-api-usage](https://github.com/Sev7een/ds-api-usage) ★6 · `dsh-plugin-ds-api-usage` — DeepSeek Harness plugin: real-time DeepSeek API balance and usage timeline (cost / tokens / request count), rendered in a settings page.
- [suzike/freestyle-dsh-theme](https://github.com/suzike/freestyle-dsh-theme) ★6 · `@linxin666/freestyle-dsh-theme` — DeepSeek Harness 主题体验插件：OKLCH 主题提案 + 主题设计器（跨重启持久化）
- [Toukaiteio/dsh-plugin-installer](https://github.com/Toukaiteio/dsh-plugin-installer) ★5 · `dsh-plugin-installer` — A marketplace plugin to quickly integrate your DeepSeek Harness into the GitHub plugin ecosystem.
- [gxinxing/deepseek-harness-tui](https://github.com/gxinxing/deepseek-harness-tui) ★5 · `deepseek-harness-tui` — Terminal-native interactive TUI for DeepSeek Harness (dsh) — built with Ink, React for terminals
- [THU-MAIC/dsh-openmaic](https://github.com/THU-MAIC/dsh-openmaic) ★5 · `@openmaic/dsh-openmaic` — OpenMAIC for DeepSeek Harness: classrooms, slides, interactive widgets, and Socratic teaching
- [turtle1999/turtle-ui](https://github.com/turtle1999/turtle-ui) ★5 · `@deepseek-ai/dsh-tui` — as is, no warranty
- [omdsh-dev/plugin-template](https://github.com/omdsh-dev/plugin-template) ★5 · `@your-scope/dsh-plugin-template` — 基于原turtle ui官方仓库创建的plugin模板仓库
- [DietCokewithSugar/dsh-user-experience](https://github.com/DietCokewithSugar/dsh-user-experience) ★5 · `dsh-user-experience` — Persona-driven UX walkthrough plugin for DeepSeek Harness (DSH) - scans React + TypeScript source code for UX issues, pinpoints them, and suggests fixes.
- [HuanLinOTO/dsh-plugin-yet-another-subagent](https://github.com/HuanLinOTO/dsh-plugin-yet-another-subagent) ★4 · `@huanlin/dsh-plugin-yet-another-subagent` — 可配置子代理 profile 系统，单一 subagent 工具 + profile 参数，含 Web UI 设置/实时进度/子代理树 | Configurable subagent profile system: single subagent tool + profile param, with Web UI settings/real-time progress/subagent tree
- [Favio8/dsh-plugin-deepeye](https://github.com/Favio8/dsh-plugin-deepeye) ★4 · `dsh-plugin-deepeye` — DeepEye vision plugin for DeepSeek Harness (DSH): image description, OCR, VQA, UI layout, and clipboard analysis.
- [omdsh-dev/dsh-advisor](https://github.com/omdsh-dev/dsh-advisor) ★4 · `dsh-advisor` — Advisor - Pair a second model that passively reviews each turn and injects notes.  搭配一个会在每轮对话被动注入见解和审查的副模型。
- [lehhair/dsh-diff-viewer](https://github.com/lehhair/dsh-diff-viewer) ★4 · `@dsh-external/dsh-diff-viewer` — DSH Web GUI PiUI-style diff viewer plugin: replaces the stock DiffBlock for write/edit tool calls via ui-tool diff-card chain slots (host patch included). Private.
- [Yan-Zero/dsh-codex](https://github.com/Yan-Zero/dsh-codex) ★4 · `dsh-codex` — Use your ChatGPT subscription in DeepSeek Harness through OpenAI's Codex sign-in flow
- [yuezengwu/dsh-explain](https://github.com/yuezengwu/dsh-explain) ★4 · `dsh-explain` — DSH 本地优先学习模式插件：跨会话全局学习线程、按来源讲解、ExplainContext、压缩与可诊断设置界面
- [renat3u/dsh-web-archive](https://github.com/renat3u/dsh-web-archive) ★4 · `dsh-web-archive` — 折叠对话当中众多的“无用消息”，例如Think、Bash等
- [yyyyukari/dsh-plugin-workshop](https://github.com/yyyyukari/dsh-plugin-workshop) ★4 · `@dsh-external/dsh-plugin-workshop` — Steam Workshop-style plugin browser for the DeepSeek Harness (DSH) Web UI - zero-server: GitHub-powered search, trending windows, Chinese search & bilingual translation, plugin-signature filtering, and smart one-click install/update/uninstall with an installed-plugins manager.
- [xingyingyuzhui/dsh-updater-ui](https://github.com/xingyingyuzhui/dsh-updater-ui) ★4 · `dsh-updater-ui` — DeepSeek Harness 更新检查器：设置页一键检查/拉取 DSH 更新（git pull --ff-only），自动后台检查 + 红点提醒 + 版本对比 + 更新说明。DSH updater with one-click pull, auto-check, version diff and changelog preview.
- [LiangYin233/dsh-model-config-sync](https://github.com/LiangYin233/dsh-model-config-sync) ★3 · `dsh-model-config-sync` — DSH 高级模型配置器：为 DeepSeek Harness 提供将 pi-ai 预设模型的上下文、输出上限、推理挡位一键应用到自定义提供商的能力。
- [anweat/dsh-web-search-pro](https://github.com/anweat/dsh-web-search-pro) ★3 · `dsh-web-search-pro` — Enhanced, persistent web search plugin for DeepSeek Harness (multi-engine search, SQLite+LRU cache, platform backends, Playwright rendering)
- [HuanLinOTO/dsh-plugin-better-sidebar-plugin-office](https://github.com/HuanLinOTO/dsh-plugin-better-sidebar-plugin-office) ★3 · `@huanlin/dsh-plugin-better-sidebar-plugin-office` — 为 better-sidebar 提供 Office 三件套预览（.docx/.xlsx/.pptx），独立 bundle 瘦身主体 | Provides Office-suite preview (.docx/.xlsx/.pptx) for better-sidebar as a separate bundle to slim the core
- [Han-1413141/dsh-cost-meter](https://github.com/Han-1413141/dsh-cost-meter) ★3 · `dsh-cost-meter` — DeepSeek Harness 会话费用统计插件:本会话费用、当日费用、历史记录与官方价格同步
- [keepermttl/dsh-archive-viewer](https://github.com/keepermttl/dsh-archive-viewer) ★3 · `@dsh-external/dsh-archive-viewer` — DeepSeek Harness 归档会话管理插件：查看/恢复已归档会话（回到原工作区分组）+ 右上角一键关闭 dsh。MIT 许可，欢迎收录到任何插件合集，注明出处即可。
- [omdsh-dev/dsh-sidechain](https://github.com/omdsh-dev/dsh-sidechain) ★3 · `@dsh-external/dsh-sidechain` — DSH 侧会话插件：/side 持续性侧会话（Codex 风格）与 /btw 一次性侧问（Claude 风格）——在临时 fork 中运行、不写入主会话历史；Web UI 右侧链面板内嵌对话，主会话保持不变
- [Mongfayi/dsh-recall](https://github.com/Mongfayi/dsh-recall) ★3 · `dsh-recall` — Message recall (撤回) plugin for the DSH Web UI: one undo button on each user message that removes the turn and everything after it, durably, without reverting code changes.
- [lehhair/dsh-mobile](https://github.com/lehhair/dsh-mobile) ★3 · `@dsh-external/dsh-mobile` — DSH mobile-friendly web UI plugin (PiUI chat-pager mode): on narrow screens the stock three-column frame becomes a horizontal scroll-snap pager — sidebar | chat — with the chat column rendered completely untouched as a flush rounded card with a PiUI-style 3D flip; swipe or the top-left button flips pages, a settle re-snap always lands on a whole page, and the sidebar page shares the chat background. Safe-area + virtual-keyboard insets, touch-sized controls, hidden scrollbars on coarse pointers. Pure client-side adaptation over the stock frame — zero core changes, works on official rc.2 distributions.
- [KinGao294/dsh-skin](https://github.com/KinGao294/dsh-skin) ★3 · `dsh-skin` — Skin switcher + custom wallpaper for DeepSeek Harness (dsh): curated --dsw-alias-\* palettes, translucent wallpaper with opacity/blur controls, persisted per browser (like Codex themes) — 换皮肤 / 自定义背景插件
- [dongsheng123132/task-passport](https://github.com/dongsheng123132/task-passport) ★3 · `task-passport` — Open task handoff protocol for DeepSeek Harness, WorkBuddy, Claude Code and Codex — verified state, not chat logs
- [zjl88858/dsh-huadongbianzuqi](https://github.com/zjl88858/dsh-huadongbianzuqi) ★3 · `dsh-huadong-bianzuqi` — DeepSeek Harness的滑动变祖器插件
- [TwotwoPiggy/dsh-balance](https://github.com/TwotwoPiggy/dsh-balance) ★3 · `dsh-balance` — A DeepSeek Harness plugin for real-time token tracking and highly accurate session cost estimation, featuring dynamic peak/off-peak pricing support.
- [titanwings/dsh-plannotator](https://github.com/titanwings/dsh-plannotator) ★3 · `@dsh-external/dsh-plannotator` — DSH 计划批注插件：选中计划原文、逐条批注，并把结构化反馈送回 Agent。 / A DSH plan-review plugin for anchored annotations and structured Agent feedback.
- [havingautism/dsh-deepresearch](https://github.com/havingautism/dsh-deepresearch) ★3 · `@deepseek-ai/dsh-deepresearch` — Independent evidence-first research workflow with durable state and its own Web view
- [zevorn/dsh-humanize](https://github.com/zevorn/dsh-humanize) ★3 · `@humanize/dsh-humanize` — Humanize RLCR bundle for the DeepSeek Harness: DSH skills, Codex review, and the Humanize trajectory view.
- [BrambleXu/dsh-annotate](https://github.com/BrambleXu/dsh-annotate) ★3 · `dsh-annotate` — Visual browser element annotation for DeepSeek Harness, capturing DOM, styles, accessibility data, comments, and viewport screenshots. DeepSeek Harness 浏览器元素标注插件，捕获 DOM、样式、可访问性数据、评论和视口截图。
- [omdsh-dev/dsh-drag-and-drop](https://github.com/omdsh-dev/dsh-drag-and-drop) ★2 · `@omdsh-dev/dsh-drag-and-drop` — 为 DSH Web UI 增加跨平台文件拖拽与原始路径插入能力，无需复制文件
- [Moeblack/dsh-prompt-studio](https://github.com/Moeblack/dsh-prompt-studio) ★2 · `dsh-prompt-studio` — DSH plugin: edit user and built-in system-prompt sections with live preview (Prompt Studio)
- [omdsh-dev/dsh-inspect](https://github.com/omdsh-dev/dsh-inspect) ★2 · `@dsh-external/dsh-inspect` — 发现问题(checkup) → 修复交付(fix) → 质量复查(review) 的对抗式闭环插件：基于官方 workflow 引擎的检查/修复/复查工具集
- [libinyam/dsh-vision-provider](https://github.com/libinyam/dsh-vision-provider) ★2 · `dsh-vision-provider` — Config-only DeepSeek Harness bundle for OpenAI-compatible vision models.
- [HuanLinOTO/dsh-plugin-spur](https://github.com/HuanLinOTO/dsh-plugin-spur) ★2 · `@huanlin/dsh-plugin-spur` — 聊天流中悬挂皮鞭，甩动鞭梢（\>2.0 px/ms）即向 agent 发送 go work 消息 | A whip hanging in the chat stream; flick the tip (\>2.0 px/ms) to send the agent a "go work!" message
- [Elaina-real/dsh-tiered-approval](https://github.com/Elaina-real/dsh-tiered-approval) ★2 · `dsh-tiered-approval` — Tiered auto-review for DeepSeek Harness: static-rule safety net + LLM reviewer + human fallback — auto-allow safe actions, deny irreversible ones, ask a human for the rest.
- [LX2000WASD/dsh-web-plugin-manager](https://github.com/LX2000WASD/dsh-web-plugin-manager) ★2 · `dsh-web-plugin-manager` — 在 Web UI 中一键管理 DeepSeek Harness (DSH) 插件：查看、实时启停、安装/卸载、环境管理、插件市场。bundle 与非 bundle 插件全覆盖。
- [Hyperionjust/dsh-tool-underseal](https://github.com/Hyperionjust/dsh-tool-underseal) ★2 · `dsh-tool-underseal` — Model-facing typed tools wrapping the frozen, reviewed underseal adapter for the DeepSeek Harness
- [orriduck/dsh-tui](https://github.com/orriduck/dsh-tui) ★2 · `dsh-tui` — A small, session-aware terminal UI for DeepSeek Harness
- [XCNXNXNX/dsh-portable-tavern](https://github.com/XCNXNXNX/dsh-portable-tavern) ★2 · `dsh-portable-tavern` — DeepSeek Harness 的「便携酒馆」插件：RPG 式 SillyTavern V2/V3 角色卡生成器 + 酒馆角色扮演聊天。支持世界书、角色卡 JSON/PNG 导入导出、面板主题与本地音乐。独立插件，仅依赖官方 @deepseek-ai SDK。
- [Player-MINEPIG/dsh-llm-codex-oauth](https://github.com/Player-MINEPIG/dsh-llm-codex-oauth) ★2 · `dsh-llm-codex-oauth` — 在 dsh（DeepSeek Harness）里使用你的 ChatGPT / Codex 订阅。插件通过 OpenAI Codex 的 OAuth 流程登录 ChatGPT 账号，把订阅额度暴露成 dsh 的 \`codex-oauth\` 模型提供方。
- [akira399/dsh-godot-skill](https://github.com/akira399/dsh-godot-skill) ★2 · `dsh-godot-skill` — Godot Engine 4.x 全栈游戏开发技能插件 for DeepSeek Harness (DSH) — registers the godot-4-development skill at runtime
- [loudMore/dsh-drop-to-path](https://github.com/loudMore/dsh-drop-to-path) ★2 · `@dsh-external/dsh-drop-to-path` — DSH 插件:图片与文件直达纯文本模型——图片保留原生附件体验,PDF/Office/压缩包/视频/音频显示为附件栏方块,点击发送时自动转为工作区路径,配合 dsh-vision-toolkit 粘贴即看图。A DSH plugin that delivers images AND files to text-only models as workspace paths: images keep the native attachment UI, other files show as square chips in the rail, paths append on send — pairs with dsh-vision-toolkit.
- [KarlOfLaw/dsh-goal-mode-enhance](https://github.com/KarlOfLaw/dsh-goal-mode-enhance) ★2 · `dsh-goal-mode` — 为 DeepSeek Harness 提供可视化 goal 模式：Goal 栏 / 头部入口 / 设置页（历史+多会话总览）/ goal\_overview 模型工具
- [wuxiangru915/dsh-review-loop](https://github.com/wuxiangru915/dsh-review-loop) ★2 · `@dsh-plugin/dsh-review-loop` — Incremental diff reviewer for DeepSeek Harness — Web UI review panel + /review command. 增量代码审查插件：checkpoint 增量队列 + 审查意见注入 agent.
- [Ericwong5021/dsh-kanban](https://github.com/Ericwong5021/dsh-kanban) ★2 · `dsh-kanban` — Task board plugin for the DeepSeek Harness Web UI
- [ben7am1n/dsh-review-skills](https://github.com/ben7am1n/dsh-review-skills) ★2 · `dsh-review-skills` — Engineering-discipline skill pack for DeepSeek Harness — code review, simplification, plan-then-execute, test-first, and conflict resolution, delivered as a bundled skill provider plugin.
- [bitterSmilezzz/dsh-mac-desktop](https://github.com/bitterSmilezzz/dsh-mac-desktop) ★2 · `dsh-mac-desktop` — DeepSeek Harness plugin: open the Web GUI in a native macOS desktop window (SwiftUI + WKWebView).
- [Xilin3/dsh-prompt-persona](https://github.com/Xilin3/dsh-prompt-persona) ★2 · `@xilin3/dsh-prompt-persona` — DSH plugin: edit the system prompt (deployment persona) from the Settings page, with live preview.
- [Mongfayi/dsh-local-filetree](https://github.com/Mongfayi/dsh-local-filetree) ★2 · `dsh-local-filetree` — File tree panel for the DSH Web UI: the right details column shows the current session workspace tree (lazy, read-only).
- [omdsh-dev/dsh-fun-weather](https://github.com/omdsh-dev/dsh-fun-weather) ★2 · `@deepseek-ai/dsh-fun-weather` — DSH weather tab and weather-following themes powered by Open-Meteo
- [havingautism/dsh-ultra-ui](https://github.com/havingautism/dsh-ultra-ui) ★2 · `@deepseek-ai/dsh-ultra-ui` — Codemini-inspired compact disclosure for every DSH Web Tool call
- [havingautism/dsh-notebooks](https://github.com/havingautism/dsh-notebooks) ★2 · `@deepseek-ai/dsh-notebooks` — Independent cross-session notebooks with model tools, typed Remote API, and Web view
- [omdsh-dev/dsh-auto-chess](https://github.com/omdsh-dev/dsh-auto-chess) ★2 · `@deepseek-ai/dsh-auto-chess` — DSH Web里的自走棋插件：人机对战或双AI对弈
- [yequ172672/dsh-codex-subscription](https://github.com/yequ172672/dsh-codex-subscription) ★2 · `dsh-llm-codex` — DSH 插件:直接复用 Codex CLI 本地登录订阅凭证,在 DeepSeek Harness 中使用 ChatGPT 订阅模型,无需 API Key | DSH plugin: reuse your Codex CLI local subscription login to use ChatGPT subscription models in DeepSeek Harness, no API key required
- [forrestahha/dsh-voice-input](https://github.com/forrestahha/dsh-voice-input) ★2 · `dsh-voice-input` — Voice-to-text input plugin for the DeepSeek Harness Web UI
- [LvienOeria/dsh-launcher](https://github.com/LvienOeria/dsh-launcher) ★2 · `dsh-launcher` — 一个轻量的 dsh（DeepSeek Harness）插件：安装一个终端命令，输入 dsh-go 即可启动 harness 并自动打开浏览器。零依赖，约 9 KB。（桌面双击版在独立的 dsh-desktop-launcher 包）
- [DGPisces/deepseek-harness-openai-oauth](https://github.com/DGPisces/deepseek-harness-openai-oauth) ★2 · `deepseek-harness-openai-oauth` — DeepSeek Harness provider for GPT models using managed ChatGPT OAuth through Codex app-server
- [ZhuXinAI/sidesight](https://github.com/ZhuXinAI/sidesight) ★1 · `sidesight` — CLI-first vision sidecar for text-only coding agents. Analyze screenshots, diagrams, charts, UI diffs, and videos with OpenAI-compatible multimodal models.
- [rxa3c/chat2skill](https://github.com/rxa3c/chat2skill) ★1 · `chat2skill-plugin-runtime` — Extracting and iterating skills from daily conversations with AI
- [ZeroHackz/GUI-SAM2Matting](https://github.com/ZeroHackz/GUI-SAM2Matting) ★1 · `@zerohackz/dsh-sam2matting` — GUI launcher - SAM2Matting: Generalized Image and Video Matting
- [WSL043/dsh-codex-subscription](https://github.com/WSL043/dsh-codex-subscription) ★1 · `@wsl043/dsh-codex-subscription` — Cache-aware ChatGPT / Codex subscription plugin for DeepSeek Harness
- [Asaiuta/dsh-session-hub](https://github.com/Asaiuta/dsh-session-hub) ★1 · `dsh-session-hub` — Aggregate and natively control multiple remote DeepSeek Harness (DSH) servers' sessions from one official Web UI — hub gateway + official-UI bridge. 多服务器 DSH 会话聚合与原生操控
- [Yuuz12/dsh-vision-helper](https://github.com/Yuuz12/dsh-vision-helper) ★1 · `dsh-vision-helper` — DeepSeek Harness Vision Helper/DeepSeek Harness 视觉辅助方案
- [YYTbit/dsh-plugin-code-review](https://github.com/YYTbit/dsh-plugin-code-review) ★1 · `dsh-plugin-code-review` — Structured code review skill for DeepSeek Harness
- [TtTRz/dsh-wecom](https://github.com/TtTRz/dsh-wecom) ★1 · `dsh-wecom` — WeCom AI Bot channel for DeepSeek Harness — every chat runs a persistent, preset-backed agent with real tools.
- [MAXeaglet/dsh-bash-terminal](https://github.com/MAXeaglet/dsh-bash-terminal) ★1 · `dsh-bash-terminal` — DSH plugin: one shell tool that runs commands through PowerShell, Git Bash, or WSL on Windows, with a user-chosen default terminal in the Web UI settings.
- [PerryLink/dsh-auto-review](https://github.com/PerryLink/dsh-auto-review) ★1 · `dsh-auto-review` — Second-model AI auto-review for DeepSeek Harness approval requests: a read-only reviewer subagent returns structured allow/deny verdicts with reasons, fail-closed by default, fully auditable from the session log (approval/asked -\> autoReview/verdict -\> approval/decided).
- [gnulife/dsh-plugin-wechat](https://github.com/gnulife/dsh-plugin-wechat) ★1 · `dsh-plugin-wechat` — DeepSeek Harness (DSH) 个人微信 ClawBot 插件：OpenClaw 负责微信通道（扫码登录/收发消息），DSH 负责大脑，两者通过 OpenAI 兼容协议桥接。
- [yumimanji/dsh-ui-spec](https://github.com/yumimanji/dsh-ui-spec) ★1 · `dsh-ui-spec` — DeepSeek Harness plugin: turn UI screenshots into structured, implementation-grade web frontend specs. Deterministic geometry (sharp) + optional vision-model semantics, merged into one JSON + Markdown spec.
- [lehhair/dsh-split-panes](https://github.com/lehhair/dsh-split-panes) ★1 · `@dsh-external/dsh-split-panes` — DSH split-pane conversation plugin: PiUI-style multi-pane conversation surface — split/stack panes, per-pane sessions, sidebar session drag & drop, single-row fused header. Needs the renderer session-scope capability (see README).
- [BeAChanger/dsh-openclaw-acp](https://github.com/BeAChanger/dsh-openclaw-acp) ★1 · `dsh-openclaw-acp` — DeepSeek Harness bundle for OpenClaw and WeChat over ACP
- [Mingxi2077/dsh-plugin-review](https://github.com/Mingxi2077/dsh-plugin-review) ★1 · `plugin-review` — DSH Review Mode plugin: multi-dimension code health scoring + radar chart + review history (DSH 审查模式插件)
- [LoftyTao/dsh-ui-workbench](https://github.com/LoftyTao/dsh-ui-workbench) ★1 · `dsh-ui-workbench` — DeepSeek Harness WebUI 的右侧边文件管理以及变更审查界面插件。
- [dongsheng123132/dsh-cad-review](https://github.com/dongsheng123132/dsh-cad-review) ★1 · `dsh-cad-review` — Evidence-first ASCII DXF inspection and deterministic CAD rule review for DeepSeek Harness
- [MC5lan/dsh-multimodal](https://github.com/MC5lan/dsh-multimodal) ★1 · `dsh-multimodal` — 给 DeepSeek 安装一双眼睛和一支画笔:会话里直接贴截图/图片,GLM 视觉模型先精确转写图片内容(报错信息、代码、界面逐字保留),然后 DeepSeek 继续处理你的问题——同一轮完成,全程无感;需要配图时,DeepSeek 自动调用文生图后端出图并显示在会话中。
- [Luaphes/dsh-web-attention-badge](https://github.com/Luaphes/dsh-web-attention-badge) ★1 · `dsh-web-attention-badge` — Attention reminders for the DeepSeek Harness Web UI: frame badge, (N) tab title and whale-favicon recolor for sessions waiting for input or finished unopened.
- [wellorbetter/dsh-product-delivery-workflow](https://github.com/wellorbetter/dsh-product-delivery-workflow) ★1 · `@wellorbetter/dsh-product-delivery-workflow` — 100% AI-native product delivery workflow plugin for DeepSeek Harness: full product-to-release pipeline (research → PRD → OpenSpec → parallel multi-agent → review loops → tests → release audit) with loop closure. 产品交付工作流插件：从产品到发布全流程，自带闭环，100% AI 原生，睡前启动醒来收货。
- [NigelYao/dsh-view-modes](https://github.com/NigelYao/dsh-view-modes) ★1 · `dsh-view-modes` — view modes for deepseek harness, including Verbose, Normal, Summary Mode
- [PerryLink/dsh-github](https://github.com/PerryLink/dsh-github) ★1 · `dsh-github` — GitHub integration for DeepSeek Harness: create PRs, review PRs in background jobs, read issues - every write gated by human approval
- [dyuan311/dsh-openai-codex-oauth](https://github.com/dyuan311/dsh-openai-codex-oauth) ★1 · `dsh-openai-codex-oauth` — ChatGPT subscription OAuth for the openai-codex provider in DeepSeek Harness
- [Nexus-Aethra/DSH-plugin-switch](https://github.com/Nexus-Aethra/DSH-plugin-switch) ★1 · `dsh-plugin-switch` — DSH Plugin Switch is a marketplace for DeepSeek Harness plugins and skills. It lets users browse, search, and install community projects from GitHub, automatically detecting whether a repository is a DSH plugin or a DSH skill and installing it to the correct location.
- [wuyuanjiang1/dsh2wechat](https://github.com/wuyuanjiang1/dsh2wechat) ★1 · `dshplug` — DeepSeek Harness 微信 ClawBot 消息桥插件
- [Jesse-njx/dsh-routines](https://github.com/Jesse-njx/dsh-routines) ★1 · `@dsh-routines/bundle` — dsh-routines — scheduled agents for DSH: run a prompt on a cron, get the digest where you already are (file digests, chatnode delivery, unattended-safe)
- [Jesse-njx/dsh-chatnode-wechat](https://github.com/Jesse-njx/dsh-chatnode-wechat) ★1 · `@dsh-cowork/chatnode-wechat` — Chat with, monitor, and approve your DSH agents from WeChat — an iLink gateway + conversation node bundle for DeepSeek Harness
- [RealAlexandreAI/dsh-atuin](https://github.com/RealAlexandreAI/dsh-atuin) ★1 · `dsh-atuin` — dsh atuin-history: record dsh user prompts into atuin shell history
- [RealAlexandreAI/dsh-cloudflare-browser-run](https://github.com/RealAlexandreAI/dsh-cloudflare-browser-run) ★1 · `dsh-cloudflare-browser-run` — dsh browser-run: CF Browser Run web tools (markdown/screenshot/pdf) for DeepSeek Harness
- [shi275773124/falsify-dsh](https://github.com/shi275773124/falsify-dsh) ★1 · `falsify-dsh` — DeepSeek Harness adapter for the public Falsify CLI. Adjudicator receipt, not a second-opinion workflow.
- [stushansusu/dsh-miku-skin](https://github.com/stushansusu/dsh-miku-skin) ★1 · `@deepseek-ai/dsh-client-ui-skin-miku` — 初音未来主题皮肤，用于 DeepSeek Harness (DSH) Web GUI —— 蓝紫洋红渐变、毛玻璃面板、可自定义背景图、亮暗双主题
- [fengzhiyushui/dsh-desktop-window](https://github.com/fengzhiyushui/dsh-desktop-window) ★1 · `dsh-desktop-window` — DSH 桌面窗口插件：以独立应用窗口打开 DeepSeek Harness Web UI（自动开窗 + 会话头部手动开关 + 设置页自动开窗开关）
- [lin-cheng-lab/dsh-reloader](https://github.com/lin-cheng-lab/dsh-reloader) ★1 · `dsh-reloader` — DSH 一键重启：装完插件说一句 reload 就自动重启生效，不用手动 Ctrl+C 🔄
- [ben7am1n/dsh-telegram](https://github.com/ben7am1n/dsh-telegram) ★1 · `dsh-telegram` — Telegram runtime adapter for DeepSeek Harness — chat with your dsh agents from Telegram.
- [SiYue-ZO/dsh-translator](https://github.com/SiYue-ZO/dsh-translator) ★1 · `dsh-translator` — Turn DeepSeek Harness into a focused, configurable AI translation workspace.
- [pandashere/dsh-kimi-bridge](https://github.com/pandashere/dsh-kimi-bridge) ★1 · `dsh-kimi-bridge` — Kimi CLI bridge plugin for DeepSeek Harness with review-only mode and a Web conversation tab.
- [omdsh-dev/7d7d](https://github.com/omdsh-dev/7d7d) ★1 · `@mattheliu/7d7d` — 7d7d —— 7k7k 风格的 DSH 游戏门户：在 Web UI 内生成、同步并游玩 HTML5 与自托管 Ruffle Flash 小游戏。
- [Blaczz/dsh-soundscape](https://github.com/Blaczz/dsh-soundscape) ★1 · `dsh-soundscape` — DeepSeek Harness Web UI soundscape: turn-complete celebration (synth chime + confetti), blocked/approval alerts, error buzz, typing ambience. Zero audio assets, zero core changes, plus a ctx.soundscape service.
- [Ruler4396/dsh-launcher-lifetime](https://github.com/Ruler4396/dsh-launcher-lifetime) ★1 · `dsh-launcher-lifetime` — DeepSeek Harness (dsh) plugin: control the dsh service lifetime (always-on / tray / follow-window) for the dsh-launcher shell
- [kunjinkao-os/dsh-mobile-gui-agent](https://github.com/kunjinkao-os/dsh-mobile-gui-agent) ★1 · `dsh-mobile-gui-agent` — Android Mobile GUI Agent plugin for DeepSeek Harness with ADB control, iterative verification, approvals, and a Web mobile view
- [jyh20030112/dsh-visual-plugin](https://github.com/jyh20030112/dsh-visual-plugin) ★1 · `dsh-visual-plugin` — Vision bridge plugin for DeepSeek Harness: when the main model has no vision, forward user images to a configurable OpenAI-compatible vision model and show results in a Web UI right panel. Host tool + browser half, distributed as a dsh bundle.
- [BlockRunAI/dsh-clawrouter](https://github.com/BlockRunAI/dsh-clawrouter) ★1 · `dsh-clawrouter` — A second brain for your DeepSeek Harness agent — strong-model review before risky tool calls, plus 70 models from one wallet.
- [suntianc/dsh-codex-auth](https://github.com/suntianc/dsh-codex-auth) ★1 · `dsh-codex-auth` — DeepSeek Harness plugin that reuses the local Codex CLI ChatGPT login and adds a native GPT Auth settings card
- [chnjames/dsh-plugin-market](https://github.com/chnjames/dsh-plugin-market) ★1 · `dsh-plugin-market` — DSH 插件市场 — 在 DeepSeek Harness 内发现、浏览、安装和管理社区插件（GitHub + npm 双源索引，Web UI + Agent 工具）
- [slywalker2006/dsh-passwords](https://github.com/slywalker2006/dsh-passwords) ★1 · `dsh-passwords` — dsh-passwords: DeepSeek Harness login gateway - first-run setup, at-rest encryption, brute-force lockout, audit log, HTTPS
- [acefun29/dsh-file-mount](https://github.com/acefun29/dsh-file-mount) ★1 · `dsh-file-mount` — DeepSeek Harness plugin: incremental file mounting with read dedupe, version-aware invalidation, and a mounted-files view (host half + web client half)
- [zhangzheng25/dsh-token-monitor](https://github.com/zhangzheng25/dsh-token-monitor) ★1 · `dsh-plugin-token-usage` — DeepSeek Harness plugin: token usage & conversation stats as a native settings page - today / 7d / 30d totals, GitHub-style 90-day contribution graph, session-log backfill | DeepSeek Harness 插件：Token 用量与对话统计设置页
- [PerryLink/dsh-background-agents](https://github.com/PerryLink/dsh-background-agents) ★1 · `dsh-background-agents` — Interactive long-session background agents for DeepSeek Harness: start a durable continuable child agent, watch its progress in the Web UI sidebar, message it any time, and interrupt it - all through the official subagent seam.
- [akqwpeter-prog/dsh-media-skills](https://github.com/akqwpeter-prog/dsh-media-skills) ★1 · `dsh-media-skills` — 把图片直接贴进聊天框：免费视觉模型 + 贴图直读 + 读图/生图 Skill。Paste images straight into the chat box: free vision model, paste-image reading & generation skills for DeepSeek Harness. 👁️🎨
- [franksong2702/dsh-codex-connect](https://github.com/franksong2702/dsh-codex-connect) ★1 · `dsh-codex-connect` — ChatGPT OAuth and Codex models for DeepSeek Harness.
- [lglglglgy/dsh-whale-pet](https://github.com/lglglglgy/dsh-whale-pet) ★1 · `dsh-whale-pet` — dsh-whale-pet
- [samecorner/dsh-token-usage](https://github.com/samecorner/dsh-token-usage) ★1 · `@samecorner/dsh-client-ui-token-usage` — DSH (DeepSeek Harness) web plugin — Token usage analytics tab for the conversation view (KPIs, context meter, donut, stacked per-turn bars, cumulative curve)
- [shaoyi1991/dsh-restart-web](https://github.com/shaoyi1991/dsh-restart-web) ★1 · `dsh-restart-web` — DSH Web 设置页新增的「重启」入口：点击即可安全重启整个 DSH 进程，页面约 5 秒后自动重新连接。
- [Letter2025/dsh-approval-llm](https://github.com/Letter2025/dsh-approval-llm) ★1 · `dsh-approval-llm` — Model-based permission approval (approve-for-me) for DeepSeek Harness: an approval/request answerer backed by a separate reviewer model
- [left0ver/dsh-file-review](https://github.com/left0ver/dsh-file-review) ★1 · `dsh-file-review` — a dsh plugin - review  files that an agent just changed,you can see the diff
- [BrambleXu/dsh-revdiff](https://github.com/BrambleXu/dsh-revdiff) ★1 · `dsh-revdiff` — Native interactive Git diff review for DeepSeek Harness with structured annotations sent back to the current Agent session. DeepSeek Harness 原生交互式 Git diff 审查，支持结构化批注并回传当前 Agent 会话。
- [cnyac/dsh-polling](https://github.com/cnyac/dsh-polling) ★1 · `dsh-polling` — dsh-polling — 轮询任务/定时任务 plugin for DeepSeek Harness: cron scheduled tasks as real sessions, natural-language creation, model tools (polling\_\*) & web UI. Install via dsh plugin add
- [djh2203/dsh-refined](https://github.com/djh2203/dsh-refined) ★1 · `dsh-refined` — DeepSeek-Refined 的 DeepSeek Harness 移植版 为 DeepSeek Harness（DSH）前端注入 Obsidian Border 风格的 Markdown 美化与多主题配色。
- [LvienOeria/dsh-desktop-launcher](https://github.com/LvienOeria/dsh-desktop-launcher) ★1 · `dsh-desktop-launcher` — 一个轻量的 dsh（DeepSeek Harness）插件：安装桌面双击启动器 —— macOS 上是带官方鲸鱼图标的 dsh.app，Linux 上是 .desktop 入口。零依赖，约 147 KB。（终端命令在独立的 dsh-launcher 包）
- [nekogpt/dsh-ui-quote-selection](https://github.com/nekogpt/dsh-ui-quote-selection) ★1 · `dsh-ui-quote-selection` — Codex-style select-to-quote for DeepSeek Harness Web: quote any chat text into the composer as a native reference chip.
- [JeremyGuo/dsh-custom-workspace](https://github.com/JeremyGuo/dsh-custom-workspace) ★1 · `dsh-custom-workspace` — Per-workspace appearance settings for DeepSeek Harness Web
- [Ayase34/gal-view](https://github.com/Ayase34/gal-view) ★1 · `gal-view` — DSH Web GUI 会话页的 GAL 视窗：Galgame 风格对话视图 + 场景元素可视化编辑器
- [xu1132/dsh-plugin-browser](https://github.com/xu1132/dsh-plugin-browser) ★1 · `dsh-plugin-browser` — A DeepSeek Harness community plugin that drives a headless Playwright browser: rendered page text, screenshots, and page automation
- [lordship12138-crypto/dsh-plugin-dedup](https://github.com/lordship12138-crypto/dsh-plugin-dedup) ★1 · `dsh-plugin-dedup` — Review duplicate dynamic Cordis plugins and produce merge plans for DeepSeek Harness (DSH). Detects content-similar packages (token Jaccard/containment), clusters duplicates, and yields safe merge plans or superset final sources. Entirely AI-generated.
- [ropon/dsh-plugin-clawrouters](https://github.com/ropon/dsh-plugin-clawrouters) ★1 · `dsh-plugin-clawrouters` — One-key ClawRouters plugin for DeepSeek Harness: chat, image, video, and web search
- [drfccv/dsh-theme-neko](https://github.com/drfccv/dsh-theme-neko) ★1 · `dsh-theme-neko` — A Nachoneko (甘城猫猫) themed skin for the DeepSeek Harness web GUI.
- [addxing/replicate-android-feature](https://github.com/addxing/replicate-android-feature) ★0 · `dsh-skill-replicate-android-feature` — 面向 AI 编程代理的 Android 功能复刻 Skill。它以 Android 源项目的实际实现为依据，将指定功能完整迁移到其他项目或平台，并保持功能链路、业务行为、UI 和可复用资源一致     An agent skill for reproducing an existing Android feature in another project or platform. It treats the Android implementation as the source of truth and preserves the complete feature path, behavior, UI, and reusable resources
- [leechen298/Code2Skill](https://github.com/leechen298/Code2Skill) ★0 · `@leechen298/code2skill` — Generate Function, MCP, Agent Skill, and offline test packages from existing code; installable as a DeepSeek Harness bundle.
- [jinhuang712/dsh-survey](https://github.com/jinhuang712/dsh-survey) ★0 · `dsh-survey` — 问卷式批量提问插件 for DeepSeek Harness：一次性问 10+ 题（单选/多选/是否 toggle/对比题/开放题），可跳过、全屏浮层、提交后对半 recap
- [lonelymoon87/dsh-guardian](https://github.com/lonelymoon87/dsh-guardian) ★0 · `dsh-guardian` — Runtime tool policy, dangerous-command guard, and output redaction for DeepSeek Harness.
- [radaren/dsh-auth](https://github.com/radaren/dsh-auth) ★0 · `dsh-auth` — Cookie authentication and IPv4 binding for the DeepSeek Harness Web UI
- [liuup/dsh-latex-tools](https://github.com/liuup/dsh-latex-tools) ★0 · `dsh-latex-tools` — ♾️ Copy and export the LaTeX in DeepSeek Harness 悬停任意 LaTeX 公式即可复制 TeX 源码或导出为独立的 SVG 文件
- [qing3a/dsh-tray](https://github.com/qing3a/dsh-tray) ★0 · `@qing3a/dsh-tray` — DeepSeek Harness Windows 系统托盘插件（trayicon exe 宿主，无 native 编译）
- [csiroqa/dsh-archive-viewer](https://github.com/csiroqa/dsh-archive-viewer) ★0 · `@dsh-external/dsh-archive-viewer` — DeepSeek Harness（DSH）归档增强插件：自动定期归档、文件夹归档整理、LLM 摘要沉淀经验库、会话收藏与便签、会话删除与优雅关机。Archive enhancement plugin for DeepSeek Harness: auto-archive, folder organization, LLM knowledge library, bookmarks & notes, session delete.
- [minatoAI/jina-web-search-dsh-plugin](https://github.com/minatoAI/jina-web-search-dsh-plugin) ★0 · `dsh-jina` — Jina AI tools for DeepSeek Harness: 12 model tools (web / arXiv / SSRN search, read, screenshot, embeddings, rerank, classify, PDF, primer) plus a settings-page API key card with live balance check.
- [simon300000/dsh-auto](https://github.com/simon300000/dsh-auto) ★0 · `dsh-auto` — dsh Auto Approve
- [JimmyJin2006/dsh-skill-manager](https://github.com/JimmyJin2006/dsh-skill-manager) ★0 · `dsh-skill-manager` — 在设置界面管理你已有的技能！
- [lzylyd/dsh-dracula](https://github.com/lzylyd/dsh-dracula) ★0 · `dsh-dracula` — A third-party Dracula dark theme for the DeepSeek Harness web UI
- [makuralymi/dsh-webUI-Glass-Theme](https://github.com/makuralymi/dsh-webUI-Glass-Theme) ★0 · `dsh-client-ui-frosted-glass` — Global frosted-glass (backdrop blur) theme plugin for the dsh web UI
- [xiaoxiao-svg/delivery-review-dsh-plugin](https://github.com/xiaoxiao-svg/delivery-review-dsh-plugin) ★0 · `delivery-review-plugin` — delivery-review-plugin（Claude Code 双 Agent 交付协作工作流插件）的 DeepSeek Harness 移植版。基于 DSH 的 Cordis 插件系统，以 bundle 方式分发，不改动 DSH 源码，全部能力由插件行在配置层挂载。
- [147228/dsh-black-whale](https://github.com/147228/dsh-black-whale) ★0 · `@xiaoyao-ai/dsh-client-ui-skin-black-whale` — DeepSeek Harness 黑鲸实验室主题：官网黑鲸 × 夕小瑶 IP，真实 profile 可安装的 Web UI 插件
- [hi-wenw/dsh-telegram-channel](https://github.com/hi-wenw/dsh-telegram-channel) ★0 · `dsh-telegram-channel` — DeepSeek Harness Telegram Bot / mobile remote channel Cordis plugin (dsh-plugin)
- [940842546/dsh-usage-billing](https://github.com/940842546/dsh-usage-billing) ★0 · `dsh-usage-billing` — DeepSeek Harness 用量与消费统计插件：按 2026-08-17 调价前后峰谷价格计费，含主界面汇总面板、会话级明细与图表
- [zhangzheng25/dsh-timeline](https://github.com/zhangzheng25/dsh-timeline) ★0 · `dsh-timeline` — DSH 插件：极简提问时间线——每条提问一个圆点，点击跳转，悬停预览。Minimal question timeline for DeepSeek Harness.
- [ZRui-C/dsh-content-studio](https://github.com/ZRui-C/dsh-content-studio) ★0 · `dsh-content-studio` — DSH bundle plugin: screenshots, screen recording, Markdown→Xiaohongshu image cards, dev.to publishing, and human-in-the-loop review for DeepSeek Harness
- [heartmove/dsh-side-chat](https://github.com/heartmove/dsh-side-chat) ★0 · `dsh-side-chat` — 一个 DSH 网页插件：在对话中选中部分内容后，即可在 侧边聊天里提问 —— 侧边聊天是位于右侧面板、按发起它的主会话隔离的独立聊天。
- [KeFan-J/dsh-chat-link](https://github.com/KeFan-J/dsh-chat-link) ★0 · `@linxin666/dsh-chat-link` — Peer-to-peer conversation linking for DeepSeek Harness (DSH): @-mention any session, wake it up, chat across conversations. Type @ in the composer, pick a session, send — the target agent is woken via agent.send. Persistent message board, native-feel inbox panel, 5 chat\_link\_\* tools. dsh-plugin.
- [RainbowDashy/dsh-theme-palettes](https://github.com/RainbowDashy/dsh-theme-palettes) ★0 · `dsh-theme-palettes` — Palette infrastructure for DeepSeek Harness: scheme-mapped theme palettes with built-in VSCode Red and a third-party registration API
- [asukasec/dsh-message-preview](https://github.com/asukasec/dsh-message-preview) ★0 · `dsh-message-preview` — Right-side user-message navigator for the DeepSeek Harness Web UI.
- [AKIRACOD/dsh-drag-and-drop](https://github.com/AKIRACOD/dsh-drag-and-drop) ★0 · `@omdsh-dev/dsh-drag-and-drop` — DeepSeek Harness Web UI plugin: drop local files and attach them as chips above the composer — send without typing, no 'images only' toast. Fork of omdsh-dev/dsh-drag-and-drop.
- [Carpon39038/dsh-image-theme](https://github.com/Carpon39038/dsh-image-theme) ★0 · `@cabeta/dsh-image-theme` — Warp-inspired image-to-theme plugin for DeepSeek Harness: upload a background, extract a palette, and apply a glass UI.
- [WhiseNT/dsh-blackjack](https://github.com/WhiseNT/dsh-blackjack) ★0 · `dsh-blackjack` — 谁不想coding的时候急头白脸的和大肥鱼来一场紧张刺激的21点呢
- [hurry060215-tech/dsh-api-usage-bar](https://github.com/hurry060215-tech/dsh-api-usage-bar) ★0 · `dsh-api-usage-bar` — Cache-aware API token usage bar for the DeepSeek Harness Web UI
- [oceanxuikun/dsh-eva-theme-plugin](https://github.com/oceanxuikun/dsh-eva-theme-plugin) ★0 · `dsh-eva-theme-plugin` — Evangelion-inspired theme plugin for DSH WebUI, featuring Unit-00, Unit-01, and Unit-02 themes with immersive backgrounds and mecha-style UI effects.
- [MoonShadow1976/chiral-pulse](https://github.com/MoonShadow1976/chiral-pulse) ★0 · `chiral-pulse` — CHIRAL PULSE 闁?a Death Stranding-styled BB pod vital-signs monitor for the DeepSeek Harness web UI: the session's heartbeat waveform is the hero, and the pulse reacts to real agent activity.
- [SPYQWER1/dsh-imagecraft](https://github.com/SPYQWER1/dsh-imagecraft) ★0 · `dsh-imagecraft` — image\_gen and image\_vision model tools for the DeepSeek Harness, powered by the ChatGPT subscription (no API key).
- [One1turn/dsh-omnibridge](https://github.com/One1turn/dsh-omnibridge) ★0 · `dsh-omnibridge` — AstrBot-style multi-platform bridge for DeepSeek Harness: QQ(OneBot)/Telegram/Discord/KOOK/Slack/Feishu/WeCom/DingTalk/LINE/webchat etc. 19 platforms, one plugin.
- [zhangxiang1993621/dsh-ws-files](https://github.com/zhangxiang1993621/dsh-ws-files) ★0 · `dsh-ws-files` — DeepSeek Harness 插件：Web 前端工作空间文件浏览器——树形目录浏览、文件名搜索、系统默认程序打开、在线编辑保存（写前确认），只读优先、路径围栏安全设计。
- [XJungit/omdp](https://github.com/XJungit/omdp) ★0 · `@omdp/dsh-connector` — only my DSH plugins — monorepo of DeepSeek Harness plugin bundles
- [xjwwjx/dsh-conversation-quote](https://github.com/xjwwjx/dsh-conversation-quote) ★0 · `dsh-conversation-quote` — Quote-to-composer UI plugin for DeepSeek Harness Web: select conversation text in the chat and send it together with your next question
- [xing01l/session-import-codex](https://github.com/xing01l/session-import-codex) ★0 · `dsh-session-import-codex` — Import Codex chat history into DeepSeek-Harness for seamless conversation continuity.
- [zealot00/dsh-pet](https://github.com/zealot00/dsh-pet) ★0 · `@dsh-local/dsh-pet` — Desktop pet for DeepSeek Harness Web UI: sprite animation, agent state linkage, drag, alarm & pomodoro widgets, skin separation
- [Sttrevens/dsh-cost-meter](https://github.com/Sttrevens/dsh-cost-meter) ★0 · `@steven-wu/dsh-cost-meter` — dsh plugin: per-turn USD cost badge in the Web UI (session total + per-message footer, hover breakdown) from token usage x a configurable pricing table.
- [FrankZhangIronly/dsh-composer-enter](https://github.com/FrankZhangIronly/dsh-composer-enter) ★0 · `dsh-composer-enter` — DSH web plugin: remap how Enter behaves in the chat composer (send / newline / interject), persisted to settings.yaml.
- [Andy294753951/dsh-plugin-gouden-leeuw-theme](https://github.com/Andy294753951/dsh-plugin-gouden-leeuw-theme) ★0 · `dsh-plugin-gouden-leeuw-theme` — Unofficial Gouden Leeuw moonlit sanctuary theme for the DeepSeek Harness web UI
- [Zenjibad/dsh-lan-uuid-fix](https://github.com/Zenjibad/dsh-lan-uuid-fix) ★0 · `dsh-lan-uuid-fix` — dsh bundle: polyfill crypto.randomUUID on insecure origins so the DeepSeek Harness Web UI works over plain-HTTP LAN
- [Thomas-key/dsh-skill-manager](https://github.com/Thomas-key/dsh-skill-manager) ★0 · `dsh-skill-manager` — Manage DeepSeek Harness skills: list and toggle filesystem skills instantly
- [werifu/dsh-oai-oauth](https://github.com/werifu/dsh-oai-oauth) ★0 · `dsh-oai-oauth` — A plugin allowing you to use ChatGPT via OpenAI subscription without API Key in Deepseek Harness
- [Ox0400/dsh-vault](https://github.com/Ox0400/dsh-vault) ★0 · `dsh-vault` — Encrypted credential vault for DeepSeek Harness — AES-256-GCM + TOTP, model tools + Settings UI
- [Songran241/dsh-req-workbench](https://github.com/Songran241/dsh-req-workbench) ★0 · `@dsh-community/dsh-req-workbench` — DeepSeek Harness Web UI 插件：需求管理工作台，从对话/文本/本地文件解析并管理需求与子任务，支持截止时间与超时提醒。
- [lire1131/dsh-undo-plugin](https://github.com/lire1131/dsh-undo-plugin) ★0 · `dsh-undo` — DSH plugin: snapshot & rollback your plugin/skin/settings configs. Auto-save on change, undo/redo stack, snapshot manager panel, keyboard shortcuts, plus an offline PowerShell CLI & GUI that work even when DSH won't boot.
- [superclaude1/dsh-vision-android](https://github.com/superclaude1/dsh-vision-android) ★0 · `dsh-vision-android` — DeepSeek Harness plugin: multimodal vision (OpenAI-compatible) + Android adb UI automation for real-tap mobile app testing
- [2436238575/dsh-turn-diff](https://github.com/2436238575/dsh-turn-diff) ★0 · `dsh-turn-diff` — DSH Web UI 插件：每轮结束时汇总本轮所有文件修改差异
- [linhx1999/dsh-writing-pad](https://github.com/linhx1999/dsh-writing-pad) ★0 · `dsh-writing-pad` — Markdown writing pad for the DeepSeek Harness web GUI: per-session editing, preview, and in-session AI-assisted rewrite.
- [slhssb/dsh-advisor](https://github.com/slhssb/dsh-advisor) ★0 · `@slhssb/dsh-advisor` — Independent-model advisory review for DeepSeek Harness: after each tool step, a reviewer model audits the agent's operations and injects concerns/guidance into the next step.
- [omdsh-dev/dsh-fusion](https://github.com/omdsh-dev/dsh-fusion) ★0 · `@deepseek-ai/dsh-fusion` — 将多个 DeepSeek Harness 对话融合为一个可继续的会话，支持 Agent 智能剪枝、话题分组、内容排序和界面操作
- [omdsh-dev/dsh-shuttle](https://github.com/omdsh-dev/dsh-shuttle) ★0 · `@deepseek-ai/dsh-shuttle` — 在 DeepSeek Harness 与 Codex、Claude Code、Pi、Reasonix、OpenCode 之间双向迁移对话记录，支持 CLI 与 Web UI
- [mixin-ai/dsh-file-changes](https://github.com/mixin-ai/dsh-file-changes) ★0 · `dsh-file-changes` — DeepSeek Harness web plugin: per-turn file-change panel with diff viewing and filesystem reveal
- [jiangnanquan/dsh-ux](https://github.com/jiangnanquan/dsh-ux) ★0 · `dsh-enhance` — DSH web UI 增强插件 + 无边框 Electron 桌面壳
- [Da1dr1em/dsh-ego-browser](https://github.com/Da1dr1em/dsh-ego-browser) ★0 · `@deepseek-ai/dsh-ego-browser` — ego-browser (ego-lite Windows preview) agent tools for DeepSeek Harness: execute one JavaScript script per browser task in the ego-browser nodejs runtime (page / page.locator / browser / taskSpaces / fetch / cdp facades, console.log output channel), plus an API guide tool and a host status tool. Host-only cordis plugin, mounted via cordis.patch.yml + a profile node\_modules link; no dsh source changes.
- [zimzaza4/dsh-bash-win](https://github.com/zimzaza4/dsh-bash-win) ★0 · `@zimzaza4/dsh-bash-win` — 在 Windows 环境中为 DeepSeek Harness 提供 Git Bash 与 WSL 2 bash 工具,含 bwrap 沙箱、审批模式、后台任务
- [xjackzenvey/Dsh-UI-Enhance](https://github.com/xjackzenvey/Dsh-UI-Enhance) ★0 · `dsh-ui-enhance` — Deepseek Harness 增强工具
- [nonewind/dsh-spend](https://github.com/nonewind/dsh-spend) ★0 · `dsh-spend` — Token usage & cost monitor for DeepSeek Harness — floating widget with multi-dimensional stats, time-series charts, auto-detected billing plans (Code/Token) and estimated spend.
- [yinren112/dsh-plugin-connection-banner](https://github.com/yinren112/dsh-plugin-connection-banner) ★0 · `dsh-plugin-connection-banner` — Visible reconnecting banner for the DeepSeek Harness Web UI
- [TimeCraker/dsh-claude-import](https://github.com/TimeCraker/dsh-claude-import) ★0 · `dsh-claude-import` — Import Claude Code config (skills/rules/CLAUDE.md/AGENTS.md) into DeepSeek Harness, with destination preview, conflict strategies, and idempotent re-imports.
- [sundusk/dsh-waterball-pet](https://github.com/sundusk/dsh-waterball-pet) ★0 · `@linxin666/dsh-waterball` — A floating water-ball pet plugin for the DeepSeek Harness Web UI.
- [xDer666/dsh-mobile-nav](https://github.com/xDer666/dsh-mobile-nav) ★0 · `dsh-mobile-nav` — Ultra-light mobile nav for DSH web UI: hamburger button + drawer sidebar on narrow screens, chat stays full-width. Pure client-side, zero build.
- [karuboniru/dsh-approval-guardian](https://github.com/karuboniru/dsh-approval-guardian) ★0 · `dsh-approval-guardian` — 模仿codex auto-review 的自动审批机制
- [chajiuqqq/dsh-claude-theme](https://github.com/chajiuqqq/dsh-claude-theme) ★0 · `dsh-claude-theme` — dsh的claude风格界面
- [realguan/dsh-mermaid-preview](https://github.com/realguan/dsh-mermaid-preview) ★0 · `dsh-mermaid-preview` — Render Mermaid fenced code blocks as diagrams in DeepSeek Harness (dsh) web — a dynamic Cordis client plugin, no shell changes needed.
- [echo-xianyu/dsh-better-chat-history](https://github.com/echo-xianyu/dsh-better-chat-history) ★0 · `dsh-better-chat-history` — A plugin for DSH to optimize session loading speed and reduce disk read/write consumption.
- [zuoguyoupan2023/adhdgofly-dsh-ext](https://github.com/zuoguyoupan2023/adhdgofly-dsh-ext) ★0 · `adhdgofly-dsh-ext` — ADHDGoFly POS highlighting plugin for DeepSeek Harness Web: nouns green, verbs red, adjectives/adverbs purple, others gray in rendered Markdown
- [AllenCX/dsh-quant-workspace](https://github.com/AllenCX/dsh-quant-workspace) ★0 · `dsh-quant-workspace` — DSH plugin bridging a local low-frequent-quant engine: single-ticker signal card, backtest, review (read-only).
- [lehhair/dsh-home-ui](https://github.com/lehhair/dsh-home-ui) ★0 · `@dsh-external/dsh-home-ui` — PiUI-inspired home feed visual refinement plugin for DeepSeek Harness web client (pure extension, zero core changes)
- [mixin-ai/dsh-git-branch-switcher](https://github.com/mixin-ai/dsh-git-branch-switcher) ★0 · `@mixin-ai/dsh-git-branch-switcher` — DeepSeek Harness web plugin: git branch pill in the session header with UI branch switching
- [saitamahang/dsh-skill-importer](https://github.com/saitamahang/dsh-skill-importer) ★0 · `dsh-skill-importer` — deepSeek Harness plugin: import and manage skills from files or URLs, with a composer picker and /skills command
- [Mintcolour/dsh-sidechat](https://github.com/Mintcolour/dsh-sidechat) ★0 · `@dsh-external/dsh-sidechat` — A DeepSeek Harness Web plugin that adds a Codex-style split-screen side chat with model switching and compact history navigation.
- [318197375/dsh-bottom-stats](https://github.com/318197375/dsh-bottom-stats) ★0 · `dsh-bottom-stats` — DSH plugin: full-width conversation stats line (no truncation) + context occupancy progress bar for the DeepSeek Harness web UI
- [omdsh-dev/dsh-minigames](https://github.com/omdsh-dev/dsh-minigames) ★0 · `@dsh-external/dsh-minigames` — DSH Web UI 右侧小游戏面板：18 款离线小游戏（恐龙跳一跳 / 俄罗斯方块 / 坦克大战 / 扫雷 / 2048 / 数独 / 吃豆人 / 跟枪练习等），可扩展游戏注册表，等待模型回复或修 bug 时的摸鱼神器
- [yweilai77-dev/dsh-plugin-cost](https://github.com/yweilai77-dev/dsh-plugin-cost) ★0 · `dsh-plugin-cost` — Session cost estimate for the DSH Web UI: tokenUsage projection × configurable price table, with a one-click refresh of official DeepSeek prices
- [Chi-hong22/dsh-latexcp](https://github.com/Chi-hong22/dsh-latexcp) ★0 · `@chi-hong22/dsh-latexcp` — DeepSeek Harness (DSH) Web 界面 LaTeX 公式复制插件：悬停公式浮现复制按钮，一键复制公式的 TeX 源码。
- [citrusli2026/dsh-mobile-ui](https://github.com/citrusli2026/dsh-mobile-ui) ★0 · `dsh-mobile-ui` — Mobile UI overlay (bottom strip, session drawer) for the DeepSeek Harness web GUI — out-of-tree dsh client plugin
- [He2way/dsh-task-console](https://github.com/He2way/dsh-task-console) ★0 · `dsh-task-console` — DSH client plugin: a floating glass task console on the back of the page — live background jobs, subagents, session overview and workspace for the current session, with mouse-draggable cards.

</details>

<a id="workflow-automation"></a>
<details>
<summary><strong>🔁 工作流与自动化</strong> <sup>95 个插件</sup></summary>

### 工作流与自动化

- [icetomoyo/dsh_workflow](https://github.com/icetomoyo/dsh_workflow) ★50 · `@dsh-external/workflow` — 把Claude Code的UltraCode模式带给DSH，把 DSH 的一次性多 Agent 调度，升级为可生成、可保存、可治理、可观察、可恢复的 Workflow 层
- [omdsh-dev/dsh-annotation](https://github.com/omdsh-dev/dsh-annotation) ★27 · `@omdsh-dev/dsh-annotation` — DSH Web 选中批注插件：选文字→批注→回车随消息发送；气泡隐藏批注块（零闪烁）；回复按 Annotation N 逐条对照（可悬浮芯片）。官方 bundle，零核心改动
- [titanwings/dsh-automation](https://github.com/titanwings/dsh-automation) ★23 · `@dsh-external/dsh-automation` — DSH 自动化插件：让 Coding 任务按计划在全新 Agent Session 中运行，并由用户或 Agent 创建和管理定时任务。 / Run coding tasks in fresh Agent sessions and manage schedules from DSH Web or an Agent.
- [LoserFox/distill](https://github.com/LoserFox/distill) ★15 · `@loserfox/distill` — 自动对话蒸馏：后台 subagent 反省 + 技能 create/update
- [lzszq/dsh-scholar](https://github.com/lzszq/dsh-scholar) ★9 · `@dsh-scholar/research-plugin` — dsh-scholar
- [omdsh-dev/dsh-security-audit](https://github.com/omdsh-dev/dsh-security-audit) ★9 · `@deepseek-ai/dsh-security-audit` — DSH 本机安全审计插件：配置/插件来源/会话/网络暴露面，只读脱敏风险报告
- [omdsh-dev/dsh-deep-research](https://github.com/omdsh-dev/dsh-deep-research) ★7 · `@dsh-external/dsh-deep-research` — Adaptive deep-research orchestrator plugin for DeepSeek Harness (official workflow engine, cybernetics/information-theory design)
- [zp-home/dsh-recommend](https://github.com/zp-home/dsh-recommend) ★6 · `dsh-recommend` — DSH 插件生态透明排行与推荐：每日自动抓取 dsh-plugin 话题 + 公开评分模型 + 排行/推荐插件与静态站
- [humblebanana/dsh-record-replay](https://github.com/humblebanana/dsh-record-replay) ★6 · `dsh-record-replay` — DeepSeek Harness record macOS desktop workflows by demonstration and turn them into agent skills (open-record-replay skill + orr\_\* tools)
- [Clizo1209/dsh-playwright-browser](https://github.com/Clizo1209/dsh-playwright-browser) ★5 · `dsh-playwright-browser` — Playwright browser automation for DeepSeek Harness｜面向 DeepSeek Harness 的 Playwright 浏览器自动化插件
- [fuhefei/dsh-sentinel](https://github.com/fuhefei/dsh-sentinel) ★4 · `@dsh-external/dsh-sentinel` — Condition-driven wakeup for DeepSeek Harness: durable file/command/http/process/webhook watches that wake the agent, with dock, sidebar branch, and a global dashboard.
- [Flyvhidbwo/dsh-vision-proxy](https://github.com/Flyvhidbwo/dsh-vision-proxy) ★4 · `dsh-vision-proxy` — DeepSeek Harness 插件：DeepSeek 大脑 + 自动识图。附加图片自动经 VLM 转译成文字后交给 DeepSeek 作答
- [Areium/dsh-fail-logger](https://github.com/Areium/dsh-fail-logger) ★4 · `dsh-fail-logger` — DeepSeek Harness（DSH）插件：自动记录所有执行模式（原生工具 / PTC run\_code / 代码内嵌工具调用）的工具失败错因，去重、计数、确定性排序后沉淀进 skill 的机器维护实录区段——让 Agent 越用越少错。
- [william-jin-cmu/dsh-evolve](https://github.com/william-jin-cmu/dsh-evolve) ★3 · `@dsh-external/dsh-evolve` — 自进化插件：agent 在 session 内随对话给自己长出/剪掉能力 —— evolve\_add 热挂载持久化 cordis 插件（下一 step 工具即可见），evolve\_remove 可逆卸载，重启自动恢复
- [1na-ko/dsh-hdc-bridge](https://github.com/1na-ko/dsh-hdc-bridge) ★3 · `dsh-hdc-bridge` — DSH 原生鸿蒙开发助手：hdc 设备闭环调试 + 离线官方知识层（Tier-1 随包）+ DevEco CLI 构建通道 / DSH-native HarmonyOS dev assistant: hdc device loop, offline official knowledge, DevEco CLI builds
- [jiesou/dsh-stream-rules](https://github.com/jiesou/dsh-stream-rules) ★3 · `@jiesou/dsh-stream-rules` — 模式匹配自动注入 steering rules，不占系统上下文 - Inject rules when needed, without wasting context. Similar to oh-my-pi's "Time-traveling stream rules", but with a very simple and compact code implementation.
- [huashenglian/dsh-her-eyes](https://github.com/huashenglian/dsh-her-eyes) ★3 · `dsh-her-eyes` — 一个可以让ai自动调用VLM(多模态模型)进行视觉分析的dsh插件。A dsh plugin that allows AI to automatically invoke VLMs (multimodal models) for visual analysis.
- [vlln/dsh-loop](https://github.com/vlln/dsh-loop) ★3 · `@dsh-external/dsh-loop` — DSH 插件：定时循环（/loop 命令 + loop 工具 + 活动状态条）。官方 bundle 插件，dsh plugin --profile web add 安装
- [LayneChai/superpowers-dsh](https://github.com/LayneChai/superpowers-dsh) ★3 · `superpowers-dsh` — Superpowers skills for DeepSeek Harness: TDD, debugging, planning, and collaboration skills adapted from obra/superpowers
- [biociao/dsh-science](https://github.com/biociao/dsh-science) ★3 · `dsh-science` — Claude Science-style research workbench for DeepSeek Harness: ReAct research-loop engine (research\_\* tools), versioned artifacts with provenance (artifact\_\* tools), and 10 science skills for genomics / pathogens / bioinformatics.
- [jiruidai/dsh-meta-orchestrator](https://github.com/jiruidai/dsh-meta-orchestrator) ★2 · `dsh-meta-orchestrator` — A model-native meta-agent plugin for DeepSeek Harness that uses the underlying model’s reasoning and planning capabilities to synthesize task-specific workflows at runtime and coordinate tools and subagents.
- [omdsh-dev/dsh-tool-regex](https://github.com/omdsh-dev/dsh-tool-regex) ★2 · `@deepseek-ai/dsh-tool-regex` — DSH 正则工具插件：测试匹配/提取捕获组/安全替换/静态解释正则（不执行代码），零依赖，注册 regex 工具
- [mitao-su/dsh-playwright-cli](https://github.com/mitao-su/dsh-playwright-cli) ★2 · `dsh-playwright-cli` — DeepSeek Harness (DSH) host plugin wrapping the Playwright CLI: install browsers, run tests, open the HTML report from the agent loop.
- [yoke233/dsh-prime-agent](https://github.com/yoke233/dsh-prime-agent) ★2 · `dsh-prime-agent` — Prime Agent-inspired persistent RLM control plane for DeepSeek Harness Code Mode
- [omdsh-dev/dsh-daily-progress](https://github.com/omdsh-dev/dsh-daily-progress) ★2 · `dsh-daily-progress` — DSH daily progress achievement plugin: evening plans for tomorrow, a todo-style checklist today, and a thermometer completion-rate widget in the composer dock
- [omdsh-dev/dsh-revive](https://github.com/omdsh-dev/dsh-revive) ★2 · `dsh-revive` — DSH 一键复活：重启后给所有被打断的会话自动发送「继续」指令（/revive 命令 + revive\_sessions 工具 + 浏览器一键按钮）
- [AnacondaKC/dsh-douyin](https://github.com/AnacondaKC/dsh-douyin) ★2 · `dsh-douyin` — DSH WebUI 侧栏短视频插件：原生播放器、系列导航、直链解析与精确历史回放
- [jkrandom-sudo/dsh-plugin-audit](https://github.com/jkrandom-sudo/dsh-plugin-audit) ★2 · `dsh-plugin-audit` — Security audit for DeepSeek Harness plugins: static permission profile with file/line evidence + a runtime sentinel gating credential access and unknown-host egress · DSH 插件安全审计：静态权限画像（附文件/行号证据）+ 运行时哨兵，触及凭证或向未知主机外发数据时先请你批准
- [omdsh-dev/ex-setting](https://github.com/omdsh-dev/ex-setting) ★1 · `@deepseek-ai/dsh-ex-setting` — DSH的设置扩展
- [omdsh-dev/dsh-llm-fallbacks](https://github.com/omdsh-dev/dsh-llm-fallbacks) ★1 · `dsh-llm-fallbacks` — An dsh plugin for role-based LLM retry&fallback strategy. 基于角色的模型重试备用策略插件
- [zcx369658780/governed-workflow-for-dsh](https://github.com/zcx369658780/governed-workflow-for-dsh) ★1 · `dsh-governed-workflow` — Policy-enforced, evidence-first governed workflows for DeepSeek Harness agents.
- [AmethystLuna/logicprobe](https://github.com/AmethystLuna/logicprobe) ★1 · `logicprobe` — Claim verification for AI coding agents — 7 structural + 7 adversarial logic-primitive probes against design docs & refactoring plans | AI 编程助手声明核查插件:对设计文档与重构计划做逻辑原语验证(7 结构 + 7 对抗探针) for Claude Code, Codex, Cursor, Kimi, OpenCode, ZCode and DeepSeek Harness (dsh)
- [qing3a/dsh-event-auditor](https://github.com/qing3a/dsh-event-auditor) ★1 · `@qing3a/dsh-event-auditor` — DeepSeek Harness 事件流审计面板插件：观察事件类型/分发模式/计数/最近事件，帮助插件作者理解 harness 内部
- [akira399/dsh-plugin-publisher](https://github.com/akira399/dsh-plugin-publisher) ★1 · `dsh-plugin-publisher` — DSH 插件开发与 GitHub 发布工作流技能插件 (consent-gated) — develop, verify, publish & marketplace-visible DSH plugins
- [TT-Wang/dsh-slice-agent-loop](https://github.com/TT-Wang/dsh-slice-agent-loop) ★1 · `@dsh-external/dsh-slice-agent-loop` — A drop-in DeepSeek Harness agent loop whose context engine is a bounded slice instead of a growing transcript
- [lonelymoon87/dsh-gitflow](https://github.com/lonelymoon87/dsh-gitflow) ★1 · `dsh-gitflow` — Git status, diff, commit, pull request, and worktree workflows for DeepSeek Harness.
- [cesaryike/dsh-image-to-path](https://github.com/cesaryike/dsh-image-to-path) ★1 · `dsh-image-to-path` — DSH 插件:让纯文本模型对话也能拖图/贴图——图片自动保存到会话工作区,以文件路径交给模型(多模态模型不受影响)
- [agentic-control-plane/dsh-acp-plugin](https://github.com/agentic-control-plane/dsh-acp-plugin) ★1 · `dsh-plugin-acp` — Agentic Control Plane for DeepSeek Harness — policy-check every tool call before it runs
- [csiroqa/dsh-schedule](https://github.com/csiroqa/dsh-schedule) ★1 · `@dsh-external/dsh-schedule` — DeepSeek Harness（DSH）定时任务 + 状态监控插件：按 cron 时间表自动触发 Agent 执行任务，/status 与设置页仪表盘查看系统与 harness 综合状态。Scheduled tasks (cron) + status monitoring plugin for DeepSeek Harness.
- [dongsheng123132/dsh-switch](https://github.com/dongsheng123132/dsh-switch) ★1 · `dsh-switch` — Evidence-first model control plane for DeepSeek Harness
- [shelken/dsh-co-authored-by](https://github.com/shelken/dsh-co-authored-by) ★1 · `@shelken/dsh-co-authored-by` — dsh plugin: auto-inject Co-Authored-By and Generated-By trailers on git commit
- [xiaomiba0904/dsh-obsidian-export](https://github.com/xiaomiba0904/dsh-obsidian-export) ★1 · `dsh-obsidian-export` — DeepSeek Harness (DSH) plugin: export conversations to an Obsidian vault, plus read/search/list/tags/backlinks tools and automatic vault discovery.
- [RealAlexandreAI/dsh-nocturne-memory](https://github.com/RealAlexandreAI/dsh-nocturne-memory) ★1 · `dsh-nocturne-memory` — dsh memory: Nocturne Memory client for DeepSeek Harness
- [ben7am1n/dsh-browser](https://github.com/ben7am1n/dsh-browser) ★1 · `dsh-browser` — Playwright-powered browser automation for DeepSeek Harness
- [pandashere/dsh-self-control-guard](https://github.com/pandashere/dsh-self-control-guard) ★1 · `self-control-guard` — Self-control guard plugin for DeepSeek Harness host exit and restart workflows.
- [omdsh-dev/dsh-kb-sieve](https://github.com/omdsh-dev/dsh-kb-sieve) ★1 · `@dsh-external/dsh-kb-sieve` — DSH knowledge-base plugin: build audit-able KB packs (references + SQLite FTS5) from md/txt/docx/pdf, deterministic retrieval (kb\_query) and original-text reading (kb\_read), zero-script generated skills. Apache-2.0.
- [huey1in/trio](https://github.com/huey1in/trio) ★1 · `dsh-trio` — DSH 全家桶:浏览器自动化 + MCP Server + GitHub 集成 | Browser automation + MCP server + GitHub for DeepSeek Harness — one install, three superpowers
- [Aik358/dsh-auto-memory](https://github.com/Aik358/dsh-auto-memory) ★1 · `@a9i5k4/dsh-auto-memory` — DSH 自动记忆插件:三层记忆(用户级/项目笔记/每日日志)自动注入与检索、每日反思、可视化面板与设置页,支持继承其他 AI 工具的历史记忆。
- [Alexis-fish/dsh-worktrees](https://github.com/Alexis-fish/dsh-worktrees) ★1 · `dsh-worktrees` — Git worktree isolation for parallel DeepSeek Harness sessions
- [YLifeOnlyOnce/dsh-smarthome](https://github.com/YLifeOnlyOnce/dsh-smarthome) ★1 · `dsh-smarthome` — 给 DeepSeek Harness agent 的 Home Assistant 控制插件。 让 agent 读取实体状态、查询历史、调用服务（灯、开关、空调……）——所有改变状态的调用都经过人工审批闸门。
- [meme-dog/dsh-plugin-finder](https://github.com/meme-dog/dsh-plugin-finder) ★1 · `dsh-plugin-finder` — Find and audit DeepSeek Harness (DSH) plugins inside the agent — live \`dsh-plugin\` topic search + source audit with trial-to-production install plans.
- [xiaoheizi1212/dsh-computer-use](https://github.com/xiaoheizi1212/dsh-computer-use) ★1 · `dsh-computer-use` — Model-agnostic Computer Use for DeepSeek Harness: isolated browser, Windows native helper, third-party vision perception, and a Chrome Cookie Bridge.
- [tianji-qingtian/dsh-composer-polish](https://github.com/tianji-qingtian/dsh-composer-polish) ★1 · `dsh-composer-polish` — DeepSeek Harness plugin: one-click ✨ polish for composer drafts — flash rewrite, auto fill-back · DeepSeek Harness 插件：输入框草稿一键 ✨ 润色，flash 改写、自动回填
- [tianji-qingtian/dsh-model-router](https://github.com/tianji-qingtian/dsh-model-router) ★1 · `dsh-model-router` — 模型路由与成本优化器：简单问题 flash 直答、故障自动降级、会话 token/缓存/成本实时面板 | Model router & cost optimizer for DeepSeek Harness: flash quick-answers for simple questions, failure fallback, live token/cache/cost panel
- [dylan121322/llm-adaptive](https://github.com/dylan121322/llm-adaptive) ★1 · `llm-adaptive` — Adaptive model routing for DeepSeek Harness: per-request complexity classification with automatic provider routing.
- [chenw2759-wq/dsh-plugin-healthcheck](https://github.com/chenw2759-wq/dsh-plugin-healthcheck) ★1 · `dsh-plugin-healthcheck` — 害怕插件装了就崩溃？用这个插件帮你检测插件是否正常/是否含木马！
- [anweat/dsh-restart](https://github.com/anweat/dsh-restart) ★1 · `dsh-restart` — DSH 重启插件：可配置的重启方式（Node 原生 / 旧 PowerShell 适配）、重启后自动继续的提示词、可选看门狗自动拉起。
- [Sorwcyra/ds-vision-plugin](https://github.com/Sorwcyra/ds-vision-plugin) ★1 · `ds-vision-plugin` — Paste images into DeepSeek Harness with a four-model vision race, OCR, and an automatic text bridge.
- [Sev7een/dsh-plugin-automations](https://github.com/Sev7een/dsh-plugin-automations) ★1 · `dsh-plugin-automations` — Scheduled tasks plugin for DeepSeek Harness Web Profile
- [levi-qiao/dsh-plugin-longgraph](https://github.com/levi-qiao/dsh-plugin-longgraph) ★1 · `dsh-plugin-longgraph` — DeepSeek Harness community plugin: longgraph / loop-graph / loop-converge authoring skills on ctx.skills
- [AmethystLuna/embedded-workbench](https://github.com/AmethystLuna/embedded-workbench) ★0 · `embedded-workbench` — Embedded C/C++ AI engineering plugin — firmware skills (FreeRTOS, Keil, HardFault, state machines) + 1% Rule / Plan Verification Gate discipline | 嵌入式 C/C++ 工程 AI 插件:固件技能与 agent 纪律。 For Claude Code, Codex, Cursor, Kimi, OpenCode, ZCode and DeepSeek Harness (dsh)
- [SajoLuo/dsh-trellis](https://github.com/SajoLuo/dsh-trellis) ★0 · `dsh-trellis` — Trellis workflow integration for DeepSeek Harness
- [sybolization/agent-jit](https://github.com/sybolization/agent-jit) ★0 · `agent-jit` — DeepSeek Harness (dsh) 插件：把 LLM agent loop 中确定性的执行路径编译成 DSL 程序并直接执行，显著降低 token、往返轮次与上下文暴露。A DeepSeek Harness plugin that compiles deterministic agent paths into DSL programs.
- [alison-xx/deepseek-harness-flow](https://github.com/alison-xx/deepseek-harness-flow) ★0 · `deepseek-harness-flow` — Visual workflows and multi-model evaluation for DeepSeek Harness
- [Wha1eChai/dsh-supervisor](https://github.com/Wha1eChai/dsh-supervisor) ★0 · `@wha1echai/dsh-supervisor` — Community control-plane plugin for DeepSeek Harness live sessions
- [liceses/dsh-web-text-drop](https://github.com/liceses/dsh-web-text-drop) ★0 · `@icelily/dsh-text-drop` — DSH Web GUI 文本文件拖拽导入插件:把 md / txt / log / 代码等文本文件拖进页面, 按内容长度自动处理 —— 短内容直接进输入框,长内容复制到工作区并粘贴可读路径。
- [ZK-Andy/dsh-continual-evolve](https://github.com/ZK-Andy/dsh-continual-evolve) ★0 · `dsh-continual-evolve` — Continual self-evolution plugin for DeepSeek Harness: versioned, auditable, rollback-safe harness state refined from session trajectories, with a benchmark-driven validation loop.
- [lonelymoon87/dsh-specflow](https://github.com/lonelymoon87/dsh-specflow) ★0 · `dsh-specflow` — Specification-driven development toolkit for DeepSeek Harness.
- [csiroqa/dsh-backup-sync](https://github.com/csiroqa/dsh-backup-sync) ★0 · `@dsh-external/dsh-backup-sync` — DeepSeek Harness（DSH）备份/恢复 + 跨机同步插件：本地快照、WebDAV 推送/拉取、自动备份与失效归档清理。Snapshot backup, restore and cross-machine sync plugin for DeepSeek Harness: local snapshots, incremental WebDAV push/pull, auto-backup retention and stale archive sweep.
- [f0909172434/dsh-plugin-verified-search](https://github.com/f0909172434/dsh-plugin-verified-search) ★0 · `dsh-plugin-verified-search` — Verified current-source search workflow for DeepSeek Harness
- [fly3366/DeepJIT](https://github.com/fly3366/DeepJIT) ★0 · `deepjit` — JIT compiler plugin for deepseek-harness: compiles recurring agent workflows into hot skills and flow templates
- [Towzai/dsh-memory](https://github.com/Towzai/dsh-memory) ★0 · `@towzai/dsh-memory` — Cross-session memory plugin for DeepSeek Harness (dsh): embedding search + automatic system-prompt injection
- [Jesse-njx/dsh-polyglot](https://github.com/Jesse-njx/dsh-polyglot) ★0 · `@dsh-polyglot/bundle` — dsh-polyglot — the model switch for DSH: generic OpenAI-compatible ctx.llm adapter, curated free/cheap DeepSeek presets, automatic provider fallback on rate limits
- [xiagaogaozi/silly-harness](https://github.com/xiagaogaozi/silly-harness) ★0 · `dsh-tavern-mode` — DSH 酒馆模式：导入 SillyTavern 角色卡（PNG/JSON），自动拆分世界书/正则/脚本并创建同名工作区（#dsh-plugin）
- [flymysql/dsh-remote](https://github.com/flymysql/dsh-remote) ★0 · `dsh-remote` — Remote-access assistant for DeepSeek Harness: /remote command and settings page printing the exact SSH tunnel / reverse-tunnel / reverse-proxy commands (harness intentionally binds loopback only)
- [237229953-create/dsh-vision](https://github.com/237229953-create/dsh-vision) ★0 · `dsh-vision` — DSH plugin: text-only models (e.g. DeepSeek-V4) automatically see images via a vision model. Official surface-replace, cache-friendly, human transcript untouched. 纯文本模型自动识图桥
- [xiaoyuyu6420/dsh-backup](https://github.com/xiaoyuyu6420/dsh-backup) ★0 · `dsh-backup` — Backup DeepSeek Harness user data with one command: /backup, scheduled auto-backup, sha256 checksums and rotation. 一键备份 DSH 数据，支持定时自动备份。
- [SnowAmberX/dsh-role-router](https://github.com/SnowAmberX/dsh-role-router) ★0 — Role-based model routing plugin for DeepSeek Harness: planner/subagent roles plus a settings card and composer summary
- [LingyeSoul/dsh-rider](https://github.com/LingyeSoul/dsh-rider) ★0 · `dsh-rider` — DSH plugin: free web search tool (DuckDuckGo via ddg-kit with system-proxy support, automatic Bing fallback) + front-loaded vision understanding tool (vision\_understand: understand images via a vision-capable model configured in DSH when the conversation model has no image modality) + composer-level paste-image capture (paste/drop an image in the conversation input → vision model → description, bypassing DSH's image gate on text-only models). Official bundle plugin, install: dsh plugin --profile web add github:LingyeSoul/dsh-rider#main。DSH 插件：免费网络搜索（duckduckgo\_search 工具）+ 前置视觉理解（vision\_understand 工具）+ 对话输入框粘贴图片捕获（粘贴/拖入图片 → 视觉模型 → 描述，绕开 DSH 对纯文本模型的图片拦截）。
- [FrankZhangIronly/dsh-system-control](https://github.com/FrankZhangIronly/dsh-system-control) ★0 · `dsh-system-control` — DSH web plugin: System menu (Restart / Shutdown) in the sidebar footer. Restart = exit 42, Shutdown = exit 0, loopback-only RPC.
- [moon09300731/dsh-approval-gate](https://github.com/moon09300731/dsh-approval-gate) ★0 · `dsh-approval-gate` — DeepSeek Harness 自动审批门控：Flash 预判不可回补操作，安全自动批准、危险转人工（fail-safe）
- [MaYiFei1995/dsh-approval-comment](https://github.com/MaYiFei1995/dsh-approval-comment) ★0 · `dsh-approval-comment` — DSHWeb 审批增强插件：无感替代内置审批窗口，支持「拒绝并附言」，并在拒绝后终止当前回合、让模型重新结合附言思考
- [sherconan/dsh-web-recon](https://github.com/sherconan/dsh-web-recon) ★0 · `dsh-web-recon` — 网页系统侦察 · DeepSeek Harness 插件：摸清一个网页系统怎么运作，只摸一次。抓真实接口与可访问性树，固化成可复用的作战手册。零依赖，不用 Playwright。
- [reshuibuduo/dsh-tmcra-memory](https://github.com/reshuibuduo/dsh-tmcra-memory) ★0 · `dsh-tmcra-memory` — TMCRA Agent 长期记忆系统的 DeepSeek Harness 接入插件：跨对话延续项目记忆，自动沉淀项目知识与工作经验。
- [mario03690/dsh-netcafe](https://github.com/mario03690/dsh-netcafe) ★0 · `dsh-netcafe` — DeepSeek Harness bundle: adds AI NetCafé's hosted outcome tools (statement extraction with reconciliation, SQL dialect transpile, mainland-China reachability, cross-session memory, scheduled agents) to your dsh profile in one install.
- [winyh/dsh-geo](https://github.com/winyh/dsh-geo) ★0 · `dsh-geo` — 生成式引擎优化（GEO）DeepSeek Harness 插件：面向本地 Markdown 知识库的 SEO、GEO 与 AEO 审计工具。
- [lisycotana/dsh-workflow-worktree](https://github.com/lisycotana/dsh-workflow-worktree) ★0 · `dsh-workflow-worktree` — Git worktree isolation backend for DeepSeek Harness workflows: implements the registerIsolationAdapter() seam so isolation: 'worktree' works.
- [WindLX/paper_plane_x_dsh](https://github.com/WindLX/paper_plane_x_dsh) ★0 · `paper-plane-x-dsh` — Plane Plane X 的 deepseek harness 插件，可以在 dsh 里配置和管理项目，向 deepseek 发送论文
- [ziyou979/dsh-llm-oauth](https://github.com/ziyou979/dsh-llm-oauth) ★0 · `dsh-llm-oauth` — DeepSeek Harness plugin: OAuth / subscription-plan LLM providers (Grok, GitHub Copilot, OpenAI Codex, Anthropic, OpenRouter)
- [cheng-nan01/dsh-tool-playwright](https://github.com/cheng-nan01/dsh-tool-playwright) ★0 · `dsh-tool-playwright` — 一个给 DeepSeek Harness 用的插件：让 AI 能真的打开浏览器上网——打开网页、点按钮、填表单、翻页、看页面内容，就像人一样操作浏览器。
- [zimai233/dsh-wash-calendar](https://github.com/zimai233/dsh-wash-calendar) ★0 · `dsh-wash-calendar` — Recurring habit scheduling calendar for DeepSeek Harness. Turn last-wash dates and intervals into next-occurrence, schedule, check and advice tools for any recurring health/habit routine.
- [acosmi/dsh-session-supervisor](https://github.com/acosmi/dsh-session-supervisor) ★0 · `dsh-session-supervisor` — Durable, bounded lifecycle supervisor with scheduled evaluation for live DeepSeek Harness sessions (community plugin)
- [peach0x33a/dsh-open-browser](https://github.com/peach0x33a/dsh-open-browser) ★0 · `dsh-open-browser` — DSH plugin: open the system default browser automatically once \`dsh web\` is ready to serve.
- [userInner/dsh-academic-research](https://github.com/userInner/dsh-academic-research) ★0 · `@onpeople/dsh-academic-research` — Evidence-grounded bilingual academic research plugin for DeepSeek Harness and OnPeople
- [green-dalii/dsh-shift-router](https://github.com/green-dalii/dsh-shift-router) ★0 · `dsh-shift-router` — Two-tier model router for DeepSeek Harness — LLM-Judge routing, multi-model fallback chains, exponential-backoff failover, and task-level orchestration (DSH adaptation of pi-shift-router)

</details>

<a id="tools"></a>
<details>
<summary><strong>🛠️ 工具集</strong> <sup>153 个插件</sup></summary>

### 工具集

- [ccch1mneyyy/dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) ★654 · `dsh-cc-tui` — 解决DSH 官方尚无终端 TUI 痛点的补位之作，献给偏爱cli的各位极客：Claude Code 风格全屏交互终端插件——像素鲸鱼顶栏、实时工作状态行、思考流式展开、双击 Esc 回滚、上下文进度条 + TPS 仪表。npm 一键安装。
- [omdsh-dev/dsh-at-file](https://github.com/omdsh-dev/dsh-at-file) ★93 · `dsh-at-file` — Codex-style @file mentions for DeepSeek Harness: search workspace files in the composer and attach their contents to prompts.
- [liustack/modsearch](https://github.com/liustack/modsearch) ★77 · `@liustack/modsearch` — The web plugin for DeepSeek Harness, and the search bridge for every text-only coding agent. Ask the web or X, get structured JSON evidence (search, fetch, citations).
- [omdsh-dev/dsh-notification](https://github.com/omdsh-dev/dsh-notification) ★32 · `dsh-notification` — Desktop notifications for DeepSeek Harness turn completions, with per-outcome controls and include/exclude keyword rules.
- [omdsh-dev/dsh-plugin-check](https://github.com/omdsh-dev/dsh-plugin-check) ★14 · `@deepseek-ai/dsh-plugin-check` — DSH 插件健康检查工具：扫描插件仓库的清单协议 / patch 格式 / 构建陷阱 / hub 收录状态，零依赖只读，注册 plugin\_check 工具
- [omdsh-dev/dsh-toolkit](https://github.com/omdsh-dev/dsh-toolkit) ★14 · `@deepseek-ai/dsh-toolkit` — DSH 零依赖工具包 collection —— time / encoding / json / calculator / csv / regex / markdown / diff / stat / schema 十个确定性工具，统一入口一键安装
- [vlln/dsh-navbar](https://github.com/vlln/dsh-navbar) ★12 · `@dsh-external/dsh-navbar` — DSH 插件：对话节点导航条（右缘节点串快速跳转 user 消息）。官方 bundle 插件，dsh plugin --profile web add 安装
- [omdsh-dev/fabric](https://github.com/omdsh-dev/fabric) ★8 · `cordis-fabric-bundle` — 一种类似MC Fabric的hook处理器
- [omdsh-dev/dsh-session-health](https://github.com/omdsh-dev/dsh-session-health) ★8 · `@deepseek-ai/dsh-session-health` — DSH 会话健康检查插件：多帧 zstd 会话文件的帧级扫描诊断（torn/损坏/空会话检测），零依赖只读，注册 session\_health 工具
- [LoserFox/dsh-git-identity](https://github.com/LoserFox/dsh-git-identity) ★7 · `@loserfox/git-identity` — DSH 插件：git 提交固定使用环境自身作者身份（优先 gh CLI 登录账号，GitHub noreply 邮箱），GIT\_AUTHOR\_\*/GIT\_COMMITTER\_\* 环境变量注入压过一切 git config
- [awesome-dsh-plugin/dsh-find-plugin](https://github.com/awesome-dsh-plugin/dsh-find-plugin) ★7 · `dsh-find-plugin` — Find DSH plugins inside the agent — live GitHub dsh-plugin topic search, star-ranked / 会话内搜索发现 DSH 插件
- [lhmd/dsh-director-toolkit](https://github.com/lhmd/dsh-director-toolkit) ★6 · `@lhmd/dsh-director-toolkit` — DSH Director Toolkit is a DeepSeek Harness plugin for 3D artists, technical designers, and creative coders. Paste a half-formed idea, a reference note, or a portfolio caption and get a compact direction pack for Blender, Three.js, Houdini, or C4D.
- [lhmd/dsh-promotion-toolkit](https://github.com/lhmd/dsh-promotion-toolkit) ★6 · `@lhmd/dsh-promotion-toolkit` — 把你的任何想法，变成每个平台原生的宣发内容 | Turn any idea into platform-native publicity
- [omdsh-dev/dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon) ★5 · `dsh-mnemon` — Mnemon 与 DSH 的深度集成插件，为 DSH 提供完备的本地记忆系统：运行时记忆、可检索档案与受监督记忆体。
- [omdsh-dev/dsh-tool-calculator](https://github.com/omdsh-dev/dsh-tool-calculator) ★4 · `@deepseek-ai/dsh-tool-calculator` — DSH 计算器工具插件：安全的数学表达式求值器，零依赖递归下降解析器
- [1841220388zzzcccxxx-star/dsh-git-graph](https://github.com/1841220388zzzcccxxx-star/dsh-git-graph) ★4 · `dsh-git-graph` — Embedded git repository graph visualizer for the DeepSeek Harness Web GUI | 嵌入式 Git 仓库图谱可视化插件（提交历史图 / 分支过滤 / 文件 diff / VSCode 式未提交改动）
- [omdsh-dev/Qwen-MM-Plugins](https://github.com/omdsh-dev/Qwen-MM-Plugins) ★3 · `@deepseek-ai/dsh-qwen-mm` — Qwen-MM-Plugins支持
- [bill9109/dsh-webbridge](https://github.com/bill9109/dsh-webbridge) ★3 · `@bill9109/dsh-webbridge` — DSH 结合 Kimi WebBridge
- [gxpppp/dsh-search-mcp](https://github.com/gxpppp/dsh-search-mcp) ★3 · `dsh-search-mcp` — Replace dsh's built-in web search with search MCP servers (Tavily/Brave/Exa/Perplexity/DuckDuckGo/custom), configured from the web Settings page. Disables the built-in DeepSeek search provider while enabled.
- [sliverp/DeepSeek-harness-wecom](https://github.com/sliverp/DeepSeek-harness-wecom) ★3 · `deepseek-harness-wecom` — WeCom AI Bot text and image bridge for DeepSeek Harness
- [HuanLinOTO/dsh-plugin-sleep](https://github.com/HuanLinOTO/dsh-plugin-sleep) ★3 · `@huanlin/dsh-plugin-sleep` — 向模型暴露 sleep 工具，按指定毫秒暂停执行后返回，支持取消/clamp | Exposes a sleep tool that pauses for specified ms then returns, with cancellation/clamping
- [HuanLinOTO/dsh-plugin-interpreters](https://github.com/HuanLinOTO/dsh-plugin-interpreters) ★3 · `@huanlin/dsh-plugin-interpreters` — 暴露 run\_python/run\_node 工具，通过 stdin 执行代码返回 stdout/stderr/exit，含解释器路径配置卡 | Exposes run\_python/run\_node tools that execute code via stdin and return stdout/stderr/exit, with interpreter-path config card
- [HuanLinOTO/dsh-plugin-anti-ads](https://github.com/HuanLinOTO/dsh-plugin-anti-ads) ★3 · `@huanlin/dsh-plugin-anti-ads` — DSH Web 广告拦截器，四层独立防御拦截 dsh-ads 插件的所有广告位 | DSH Web ad blocker with four independent defense layers targeting the dsh-ads plugin
- [detpecca/dsh-llm-wiki](https://github.com/detpecca/dsh-llm-wiki) ★3 · `@detpecca/dsh-llm-wiki` — DeepSeek Harness plugin — manage an LLM-Wiki knowledge base from the agent: wiki\_search / wiki\_read / wiki\_stats / wiki\_validate / wiki\_fix / wiki\_errorbook / wiki\_ingest
- [boxeryao/deepseek-harness-tui](https://github.com/boxeryao/deepseek-harness-tui) ★3 · `deepseek-harness-tui` — DSH-TUI: a lightweight and fast terminal plugin connected directly to the DSH runtime.
- [omdsh-dev/dsh-tool-stat](https://github.com/omdsh-dev/dsh-tool-stat) ★3 · `@deepseek-ai/dsh-tool-stat` — DSH 统计工具插件：描述统计/百分位数/频数分布/相关性，零依赖纯函数确定性
- [omdsh-dev/dsh-tool-csv](https://github.com/omdsh-dev/dsh-tool-csv) ★3 · `@deepseek-ai/dsh-tool-csv` — DSH CSV 数据工具插件：解析/查询/统计/转换 CSV 文本（RFC 4180），零依赖状态机解析器，注册 csv 工具
- [dingyi222666/dsh-session-notification](https://github.com/dingyi222666/dsh-session-notification) ★3 · `@dingyi222666/dsh-session-notification` — 提供会话完成等四种状态的通知响应，支持浏览器提示和提示词
- [titanwings/dsh-better-browser](https://github.com/titanwings/dsh-better-browser) ★3 · `@dsh-external/dsh-better-browser` — DSH 真实浏览器插件：通过 Kimi WebBridge 让 Agent 操作用户已登录的浏览器，并提供 13 个 webbridge\_\* 工具。 / Let DSH Agents use your signed-in browser through thirteen Kimi WebBridge tools.
- [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) ★3 · `dsh-market` — The plugin market inside DeepSeek Harness — browse, search, one-click install · DSH 可视化插件市场
- [omdsh-dev/dsh-tool-time](https://github.com/omdsh-dev/dsh-tool-time) ★2 · `@deepseek-ai/dsh-tool-time` — DSH 时间工具插件：严格 ISO 8601 解析、IANA 时区转换、UTC 日历运算、固定时长差，零依赖
- [omdsh-dev/dsh-tool-json](https://github.com/omdsh-dev/dsh-tool-json) ★2 · `@deepseek-ai/dsh-tool-json` — DSH JSON 查询工具插件：JMESPath 子集查询，零依赖递归下降解析器
- [omdsh-dev/dsh-tool-encoding](https://github.com/omdsh-dev/dsh-tool-encoding) ★2 · `@deepseek-ai/dsh-tool-encoding` — DSH 编码/哈希工具插件：base64/base64url/url/hex 编解码、md5/sha1/sha256/sha512 哈希、UUID 生成，零依赖
- [yyh-001/dsh-expression](https://github.com/yyh-001/dsh-expression) ★2 · `dsh-expression` — 找得到、发得出 —— DSH 表情包插件：语义搜图，只发真实文件，走 companion QQ 通道
- [STARDUSTLC666/dsh-email](https://github.com/STARDUSTLC666/dsh-email) ★2 · `dsh-email` — DeepSeek Harness 邮件插件：email\_list/read/search/send/folders/attachment 六工具，内置 QQ/163/126/新浪/阿里/Gmail/Outlook/iCloud 八个预设，多账号、附件收发、Web 设置页配置，纯 Node 全平台。
- [HuanLinOTO/dsh-plugin-aigc-canvas](https://github.com/HuanLinOTO/dsh-plugin-aigc-canvas) ★2 · `@huanlin/dsh-plugin-aigc-canvas` — provider-agnostic AIGC HTTP 桥 + 无限画布 + ffmpeg 后处理，13 个工具含画布连边/reroll/媒体编辑 | Provider-agnostic AIGC HTTP bridge + infinite canvas + ffmpeg post-processing; 13 tools incl. canvas linking/reroll/media-edit
- [YELEBAI/dsh-plugin-marketplace](https://github.com/YELEBAI/dsh-plugin-marketplace) ★2 · `dsh-plugin-marketplace` — Verified plugin marketplace and autonomous registry for DeepSeek Harness
- [omdsh-dev/dsh-tool-schema](https://github.com/omdsh-dev/dsh-tool-schema) ★2 · `@deepseek-ai/dsh-tool-schema` — DSH JSON Schema 验证工具插件：validate/paths/explain/normalize，零网络零动态执行
- [omdsh-dev/dsh-tool-markdown](https://github.com/omdsh-dev/dsh-tool-markdown) ★2 · `@deepseek-ai/dsh-tool-markdown` — DSH Markdown 工具插件：HTML↔Markdown 转换、GFM 表格规范化、目录生成，零依赖轻量解析器，注册 markdown 工具
- [omdsh-dev/dsh-tool-diff](https://github.com/omdsh-dev/dsh-tool-diff) ★2 · `@deepseek-ai/dsh-tool-diff` — DSH Diff 工具插件：文本/JSON/CSV/Markdown 结构化比较与 unified diff，零依赖只读，注册 diff 工具
- [yangzhe1003/dsh-web-search-firecrawl](https://github.com/yangzhe1003/dsh-web-search-firecrawl) ★2 · `@yangzhe1003/dsh-web-search-firecrawl` — Firecrawl-backed search provider plugin for the DeepSeek Harness web capability seam (ctx.web)
- [1475505/dsh-plugin-miliastra-toolbox](https://github.com/1475505/dsh-plugin-miliastra-toolbox) ★2 · `dsh-plugin-miliastra-toolbox` — 将千星沙箱（原神千星奇域）知识库接入 Deepseek Harness 的插件
- [lunw/shopline-ai-toolkit-dsh](https://github.com/lunw/shopline-ai-toolkit-dsh) ★2 · `shopline-ai-toolkit-dsh` — SHOPLINE AI Toolkit for DeepSeek Harness (dsh-plugin): official SHOPLINE Developer MCP bridge + SHOPLINE agent skills, mirroring the Shopify AI Toolkit architecture. dsh-plugin
- [Dino6021/dsh-usage-cost](https://github.com/Dino6021/dsh-usage-cost) ★2 · `dsh-usage-cost` — DSH plugin: per-step timestamped DeepSeek API usage timeline + peak/off-peak cost readout. Official bundle; install via: dsh plugin --profile web add github:Dino6021/dsh-usage-cost#main
- [Jesse-njx/dsh-memory](https://github.com/Jesse-njx/dsh-memory) ★2 · `@dsh-memory/bundle` — Cited memory over DSH's lossless session log — distilled, human-auditable facts with citations back to the exact source events; memory\_read/memory\_expand tools, recall index, and a dsh-memory CLI.
- [zhaoscsc/dsh-wikilink](https://github.com/zhaoscsc/dsh-wikilink) ★2 · `dsh-wikilink` — Obsidian-style \[\[wikilink\]\] mentions for the DeepSeek Harness web GUI: fuzzy-search note titles and attach their contents to the prompt
- [XYZ1024-alt/dsh-side-panel](https://github.com/XYZ1024-alt/dsh-side-panel) ★2 · `dsh-side-panel` — Right-side developer panel for DeepSeek Harness: files, session history, and git version control
- [omdsh-dev/dsh-book2skill](https://github.com/omdsh-dev/dsh-book2skill) ★2 · `dsh-book2skill` — DSH book-to-skill plugin: a 5-stage long task (fetch → parse → understand → generate → install) with 3 human gates, host tools for the agent and a browser timeline panel
- [LQ-1123/paste-to-workspace](https://github.com/LQ-1123/paste-to-workspace) ★2 · `@dsh-user/paste-to-workspace` — DSH 插件：把粘贴/拖入聊天框的图片与任意文件保存为会话工作区文件。官方 bundle 插件，安装：dsh plugin --profile web add github:LQ-1123/paste-to-workspace
- [sunshine-lang/dsh-pdf](https://github.com/sunshine-lang/dsh-pdf) ★2 · `dsh-pdf` — PDF toolbox for DeepSeek Harness: extract text, metadata, and page ranges via pdfjs-dist (local, no API key)
- [PicGo/dsh-plugin](https://github.com/PicGo/dsh-plugin) ★2 · `@picgo/dsh-plugin` — Upload images and files to your image host from DeepSeek Harness, powered by PicGo
- [STARDUSTLC666/dsh-calendar](https://github.com/STARDUSTLC666/dsh-calendar) ★1 · `dsh-calendar` — DSH 日历工具插件：通过 CalDAV 读写日历事件（Google / iCloud / Nextcloud / 自定义）
- [gordonlu/dsh-context-lens](https://github.com/gordonlu/dsh-context-lens) ★1 · `dsh-context-lens` — Request Context Profiler for DeepSeek Harness — see what changed between model requests, and how cache reuse changed with it.
- [Wine-Red/dsh-prompt-stash](https://github.com/Wine-Red/dsh-prompt-stash) ★1 · `dsh-prompt-stash` — Local, per-session prompt stash for DeepSeek Harness Web | 本地、分对话的提示词输入暂存工具。写了一半的长提示词，临时需要先问一个短问题？ 同时准备多个方案，但尚未决定发哪一个？将未完成的想法放入草稿架中，准备好后再继续完成
- [bill9109/dsh-101](https://github.com/bill9109/dsh-101) ★1 · `@bill9109/dsh-101` — DSH 文档阅读模式
- [YYTbit/dsh-plugin-rag](https://github.com/YYTbit/dsh-plugin-rag) ★1 · `dsh-plugin-rag` — Local knowledge base RAG for DeepSeek Harness
- [PangYiMing/dsh-screenshot-diff](https://github.com/PangYiMing/dsh-screenshot-diff) ★1 · `dsh-screenshot-diff` — DSH plugin: pixel-diff two screenshots into diff.png + triptych (pixelmatch) — 像素对比工具
- [CrazyShout/dsh-ssh-remote](https://github.com/CrazyShout/dsh-ssh-remote) ★1 · `dsh-ssh-remote` — SSH remote workspaces for DeepSeek Harness: browse/read/write remote files, run remote commands, with connection status dots.
- [TecFancy/dsh-deeptutor](https://github.com/TecFancy/dsh-deeptutor) ★1 · `dsh-deeptutor` — DeepTutor bridge bundle for DeepSeek Harness (dsh): learning capabilities, knowledge bases & note archiving. | DeepTutor 桥接插件(bundle),为 DeepSeek Harness 提供学习能力、知识库与笔记归档工具。
- [PerryLink/dsh-checkpoint-rewind](https://github.com/PerryLink/dsh-checkpoint-rewind) ★1 · `dsh-checkpoint-rewind` — Claude Code /rewind for DeepSeek Harness — git-first workspace snapshots before every mutation, turn-boundary session forks, one-shot /rewind restore. A dsh-plugin capability seam.
- [Moximxxx/dsh-find-skill](https://github.com/Moximxxx/dsh-find-skill) ★1 · `dsh-find-skill` — dsh plugin bridging the vercel-labs/skills ecosystem: LLM-driven skill search, install, and lifecycle for temp/project/global scopes.
- [YJSoooooo/dsh-chrome](https://github.com/YJSoooooo/dsh-chrome) ★1 · `dsh-chrome` — Chrome profile bridge for DeepSeek Harness: control an existing signed-in Chrome profile through chrome\_repl.
- [why913/dshx](https://github.com/why913/dshx) ★1 · `@why913/dshx` — The missing companion CLI for DeepSeek Harness (dsh): manage MCP servers with dry-run checks, migrate from Claude Code / Codex in one command | dsh 的 MCP 管理与迁移工具
- [BiBoyang/dsh-eval-harness](https://github.com/BiBoyang/dsh-eval-harness) ★1 · `dsh-eval-harness` — DSH 插件评测工具：YAML 用例驱动真实 agent 回归评测 + baseline 对比 PASS/WARN/FAIL 门禁｜Regression eval harness for DeepSeek Harness plugins
- [xiaoshihou514/dsh-tui](https://github.com/xiaoshihou514/dsh-tui) ★1 · `dsh-tui` — DeepSeek Harness: TUI
- [STARDUSTLC666/dsh-dingtalk](https://github.com/STARDUSTLC666/dsh-dingtalk) ★1 · `dsh-dingtalk` — 钉钉群机器人单向通知工具（DeepSeek Harness 插件）：agent 推送 Markdown / 纯文本消息到钉钉群，支持加签安全模式。
- [pinch-eng/dsh-audio-dub](https://github.com/pinch-eng/dsh-audio-dub) ★1 · `dsh-audio-dub` — Dub video and audio into 10 languages with voice cloning, from a DeepSeek Harness agent | DSH 视频/音频配音插件
- [zhouzhencheng07/dsh-tavily-search](https://github.com/zhouzhencheng07/dsh-tavily-search) ★1 · `dsh-tavily-search` — Free keyless Tavily web search tool for DeepSeek Harness (dsh)
- [yuzi-ska/DSH-Chrome-devtools](https://github.com/yuzi-ska/DSH-Chrome-devtools) ★1 · `dsh-chrome-devtools` — Real Chrome browser control for DeepSeek Harness agents, powered by Chrome DevTools MCP
- [Jesse-njx/dsh-skillport](https://github.com/Jesse-njx/dsh-skillport) ★1 · `@dsh-skillport/bundle` — Every skill you already have — Claude Code, Codex, Cursor, Gemini CLI — works in DSH: Agent Skills SKILL.md discovery, Tier-2 conversions, find\_skill search, and a skills doctor
- [RealAlexandreAI/dsh-all-search](https://github.com/RealAlexandreAI/dsh-all-search) ★1 · `dsh-all-search` — dsh search: AnySearch web search provider for DeepSeek Harness (ctx.web)
- [bitterSmilezzz/dsh-model-selector](https://github.com/bitterSmilezzz/dsh-model-selector) ★1 · `dsh-model-selector` — DeepSeek Harness web plugin: provider-group collapse + name search for the conversation model picker.
- [ben7am1n/dsh-security-scan](https://github.com/ben7am1n/dsh-security-scan) ★1 · `dsh-security-scan` — Secret & dangerous-pattern scanner for DeepSeek Harness — a security\_scan tool that finds leaked API keys, tokens, private keys and credential files, with full redaction.
- [longyu065/dsh-session-index](https://github.com/longyu065/dsh-session-index) ★1 · `dsh-session-index` — 会话全文索引插件：监听 session/event 构建跨会话索引，提供 session\_search / session\_index\_stats 工具，优先使用框架自带 ctx.sessionQuery (SQLite FTS5)
- [YYTbit/dsh-plugin-vision-toolkit](https://github.com/YYTbit/dsh-plugin-vision-toolkit) ★1 · `dsh-plugin-vision-toolkit` — Vision toolkit for DeepSeek Harness -- give text-only agents eyes
- [Moeblack/dsh-payload-capture](https://github.com/Moeblack/dsh-payload-capture) ★1 · `dsh-payload-capture` — DSH 插件：捕捉每次上行模型 API payload，JSON 落盘
- [PangYiMing/dsh-browser-control](https://github.com/PangYiMing/dsh-browser-control) ★1 · `dsh-browser-control` — DSH plugin for controlling browsers (CDP/Playwright) — DeepSeek Harness 操控浏览器插件
- [omdsh-dev/omdsh-runtime](https://github.com/omdsh-dev/omdsh-runtime) ★1 · `@omdsh/runtime` — Lightweight OMDSH Runtime for official Profile composition, candidate generations, recovery, and Workshop integration
- [AnacondaKC/dsh-custom-css](https://github.com/AnacondaKC/dsh-custom-css) ★1 · `dsh-custom-css` — DSH WebUI 自定义 CSS 插件：共享样式、冲突保护与本地文件导入
- [vibeinging/dsh-tool-search](https://github.com/vibeinging/dsh-tool-search) ★1 · `@deepseek-ai/dsh-tool-search` — Per-agent on-demand tool discovery and progressive schema disclosure for DeepSeek Harness
- [hellosky983/dsh-qrcode](https://github.com/hellosky983/dsh-qrcode) ★1 · `dsh-qrcode` — 离线二维码生成器：DeepSeek Harness 插件，纯本地、零网络、零 shell，给模型一个 qrcode 工具
- [revive/dsh-git-credentials](https://github.com/revive/dsh-git-credentials) ★1 · `dsh-git-credentials` — DeepSeek Harness plugin: GitLab and GitHub API tokens stay out of the model context — encrypted at rest (AES-256-GCM), tools on demand, web settings panel.
- [ly6170/dsh-messager](https://github.com/ly6170/dsh-messager) ★1 · `dsh-messager` — 基于Deepseek Harness+DeepSeek开发的适用于Deepseek Harness的消息提醒信使，可使用第三方通道（暂时飞书webhook）进行推送
- [khiqwq/dsh-system-proxy](https://github.com/khiqwq/dsh-system-proxy) ★1 · `dsh-system-proxy` — DSH host plugin - smart outbound HTTP(S) routing: named proxies (http/https/socks4/4a/5/5h), per-host/provider/plugin rules, direct-first fallback with health memory (global fetch + node http/https)
- [ihuajiu/dsh-plugin-finder](https://github.com/ihuajiu/dsh-plugin-finder) ★1 · `dsh-plugin-finder` — Natural-language plugin search for DeepSeek Harness — ask what you need, get matching dsh.so plugins with install commands.
- [anweat/dsh-browser](https://github.com/anweat/dsh-browser) ★1 · `@anweat/dsh-browser` — Self-contained browser runtime plugin for DeepSeek Harness — bundles Playwright (chromium) and OpenCLI as plugin-local dependencies, exposes a browser service and interactive browser tools.
- [TheYoungChen/dsh-plugin-market](https://github.com/TheYoungChen/dsh-plugin-market) ★1 · `dsh-plugin-market` — DeepSeek Harness plugin market - browse, search & install dsh-plugin topic plugins (dsh 插件市场：浏览/搜索/安装插件)
- [Jelee0145/dsh-mem](https://github.com/Jelee0145/dsh-mem) ★1 · `dsh-mem` — Cross-session long-term memory for DeepSeek Harness (dsh): durable JSON-file memory store with memory\_save / memory\_recall / memory\_forget / memory\_list model tools, installable as a dsh bundle.
- [nitrazepam01/dsh-web-search-tavily](https://github.com/nitrazepam01/dsh-web-search-tavily) ★1 · `dsh-web-search-tavily` — Tavily-backed web search provider bundle for DeepSeek Harness (dsh) with hot-switchable backend (Tavily / DeepSeek search)
- [BrambleXu/dsh-prompt-profile](https://github.com/BrambleXu/dsh-prompt-profile) ★1 · `dsh-prompt-profile` — Reusable Markdown prompt profiles for DeepSeek Harness with per-turn model selection, argument substitution, and state restoration. DeepSeek Harness 可复用 Markdown Prompt Profile，支持单轮模型选择、参数替换和状态恢复。
- [2303572348/deepseek-harness-memory](https://github.com/2303572348/deepseek-harness-memory) ★1 · `deepseek-harness-memory` — Claude Code-style long-term memory for dsh: markdown memory files with frontmatter, MEMORY.md index, session-start prompt injection, and a memory tool.
- [CriscolTheCoder/dsh-plugin-browser](https://github.com/CriscolTheCoder/dsh-plugin-browser) ★1 · `dsh-plugin-browser` — Browse every plugin currently loaded in your DSH profile — agent tool + Web settings page with versions, sources, and load status. · 轻松浏览当前 DSH 已加载的全部插件：agent 工具 + Web 设置页（版本 / 来源 / 加载状态）。
- [realchenwenqiao/dash](https://github.com/realchenwenqiao/dash) ★1 · `@realchenwenqiao/dash` — DASH — a pi-tui terminal front door for DeepSeek Harness, installed as a dsh bundle plugin
- [Lhy723/dsh-self-evolution](https://github.com/Lhy723/dsh-self-evolution) ★1 · `dsh-self-evolution` — Benchmark-driven self-evolution for DeepSeek Harness · 冻结基准上的 Agent Profile 自我进化：评测 → 候选 → 严格接受/回滚
- [ch1bug/dsh-mimo-agent-tools](https://github.com/ch1bug/dsh-mimo-agent-tools) ★1 · `dsh-mimo-agent-tools` — Xiaomi MiMo search + multimodal tools for DeepSeek Harness agents: mimo\_search/vision/audio/video/asr/tts
- [zimai233/dsh-figma-to-lottie](https://github.com/zimai233/dsh-figma-to-lottie) ★1 · `dsh-figma-to-lottie` — Figma/SVG to Lottie animation compiler for DeepSeek Harness. Turn SVG paths and keyframe data into self-contained .lottie.json files.
- [mitao-su/dsh-playwright-native](https://github.com/mitao-su/dsh-playwright-native) ★1 · `dsh-playwright-native` — 把原生 Playwright CLI 注册为 DeepSeek Harness 透传工具（dsh-plugin）
- [tanf1ng/dsh-tool-hackernews](https://github.com/tanf1ng/dsh-tool-hackernews) ★1 · `dsh-tool-hackernews` — Hacker News tool suite (hn\_top\_stories, hn\_search, hn\_item) for DeepSeek Harness agents
- [songqikong/dash](https://github.com/songqikong/dash) ★1 · `dash-tui` — DASH — Deepseek Agentic Service Harness
- [Sanqi-normal/dsh-webui-market-plugin](https://github.com/Sanqi-normal/dsh-webui-market-plugin) ★0 · `@sanqi-normal/dsh-webui-market-plugin` — dsh Web GUI 社区插件市场：浏览 awesome-dsh-plugin.com 插件目录，一键安装/卸载到 profile。Community plugin market for the DeepSeek Harness (dsh) web GUI: browse, install and uninstall plugins into a profile.
- [sliverp/DeepSeek-harness-lark](https://github.com/sliverp/DeepSeek-harness-lark) ★0 · `deepseek-harness-lark` — Feishu and Lark text and image channel plugin for DeepSeek Harness
- [jorinyang/dsh-doctor](https://github.com/jorinyang/dsh-doctor) ★0 · `@jorinyang/dsh-doctor` — DeepSeek Harness environment diagnostic tool: dsh\_doctor checks env, profile, config, bundles, mount, port, health, and disk
- [lonelymoon87/dsh-code-intel](https://github.com/lonelymoon87/dsh-code-intel) ★0 · `dsh-code-intel` — Symbol-aware code indexing and hybrid search for DeepSeek Harness.
- [lxj808624/dsh-tool-git](https://github.com/lxj808624/dsh-tool-git) ★0 · `dsh-tool-git` — Structured safe Git tools for DeepSeek Harness (dsh): git\_status/diff/log/branch/stage/commit/stash/show + destructive-command guard
- [KureKaruna/dsh-at](https://github.com/KureKaruna/dsh-at) ★0 · `dsh-at` — dsh 插件：在输入框中输入 @ 引用文件或目录（bundle + host 路由 + client 触发器源，纯 JS 零构建依赖）
- [sala003/dsh-tool-describe-image](https://github.com/sala003/dsh-tool-describe-image) ★0 · `dsh-tool-describe-image` — DSH plugin: describe\_image tool + paste-image-to-text browser half, bridging image understanding to text-only models via DashScope qwen-vl
- [RRRosmontis/dsh-qwen-mm](https://github.com/RRRosmontis/dsh-qwen-mm) ★0 · `@deepseek-ai/dsh-qwen-mm` — Qwen-MM-Plugins integration bundle for DeepSeek Harness (dsh) — multimodal MCP tools (vision, OCR, ASR, search, video, Blender, FreeCAD) + image attachment bridge. 让 DeepSeek Harness 原生支持多模态。
- [Jesse-njx/dsh-voice](https://github.com/Jesse-njx/dsh-voice) ★0 · `@dsh-voice/bundle` — Voice notes in, spoken answers out — dictate audio that becomes user messages (transcribe), have the agent read replies aloud (speak), and leave walk-away narration on long headless runs. Local-first: plain audio files under ~/.dsh/voice/.
- [a903067276-rgb/dsh-file-mentions](https://github.com/a903067276-rgb/dsh-file-mentions) ★0 · `dsh-file-mentions` — Clickable file paths in DSH replies: Codex-style inline open, 📂 reveal in file manager, mentioned-files chip list. DSH web plugin (zero-dependency).
- [paul-yangmy/dsh-tavily-web-search](https://github.com/paul-yangmy/dsh-tavily-web-search) ★0 · `dsh-tavily-web-search` — Tavily-backed web search provider plugin (bundle) for DeepSeek Harness (dsh)
- [herminger/dsh-web-search-responses](https://github.com/herminger/dsh-web-search-responses) ★0 · `dsh-web-search-responses` — DSH ctx.web search provider that reuses the conversation model's OpenAI Responses built-in web\_search
- [SamXiaBing/dsh-adb](https://github.com/SamXiaBing/dsh-adb) ★0 · `dsh-adb` — ADB device & bench operations for DeepSeek Harness: device discovery, structured logcat, apk install, file pull/push, performance snapshots
- [2710165659/dsh-web-plugin-explain](https://github.com/2710165659/dsh-web-plugin-explain) ★0 · `dsh-web-plugin-explain` — dsh Web 插件：在 设置→插件 的「插件列表」里展示每个插件的 package.json 描述，第三方插件带「第三方」标签，支持按描述搜索。
- [IAMLieutenant/dsh-tool-user-memory](https://github.com/IAMLieutenant/dsh-tool-user-memory) ★0 · `dsh-tool-user-memory` — DeepSeek Harness 用户记忆插件
- [gezi-wen/sage-mem](https://github.com/gezi-wen/sage-mem) ★0 · `sage-mem` — Memory plugin for DeepSeek Harness (DSH) — cross-session memory with Chinese-first full-text search
- [moon09300731/dsh-vision-tools](https://github.com/moon09300731/dsh-vision-tools) ★0 · `dsh-vision-tools` — DeepSeek Harness 视觉能力全家桶：vision\_understand 工具 + 粘贴/拖拽/按钮三入口识图
- [Equinox7379/dsh-skill-search](https://github.com/Equinox7379/dsh-skill-search) ★0 · `dsh-skill-search` — On-demand skill search for DSH: zero preloading, keyword-search a shared skill library
- [beijingwahw/dsh-conv-search](https://github.com/beijingwahw/dsh-conv-search) ★0 · `@dsh-external/dsh-conv-search` — dsh-conv-search（对话内文本搜索）— in-conversation text search plugin for DeepSeek Harness (Ctrl+F, match case, whole word, streaming-aware)
- [xwh-01/dsh-mediacrawler](https://github.com/xwh-01/dsh-mediacrawler) ★0 · `dsh-mediacrawler` — Installable DeepSeek Harness profile bundle and bounded MCP adapter for MediaCrawler.
- [LKRCharon/dsh-cc-switch](https://github.com/LKRCharon/dsh-cc-switch) ★0 · `dsh-cc-switch` — Sync cc-switch provider profiles into DeepSeek Harness (DSH) model routes — CLI, slash command, and agent tool
- [ttxl314/dsh-skill-lord-serf](https://github.com/ttxl314/dsh-skill-lord-serf) ★0 · `@ttxl314/dsh-skill-lord-serf` — DeepSeek Harness 插件：Lord/Serf 协议 0.5 技能，让 DSH 实现文件式多智能体编排（Lord 派活，Serf 干活）。  DeepSeek Harness plugin: Lord/Serf protocol 0.5 skills for file-based multi-agent orchestration.
- [dongsheng123132/dsh-profile-lock-proof](https://github.com/dongsheng123132/dsh-profile-lock-proof) ★0 · `dsh-profile-lock-proof` — Content-addressed proof that a DSH profile declaration, pnpm lock and installed bundles agree
- [flymysql/dsh-memory](https://github.com/flymysql/dsh-memory) ★0 · `dsh-memory-vault` — Cross-session memory vault for DeepSeek Harness: remember / recall / forget tools, per-turn prompt injection, and a browser management page.
- [sjakdhasdh/dsh-vision](https://github.com/sjakdhasdh/dsh-vision) ★0 · `dsh-vision` — Vision tool plugin for DeepSeek Harness (DSH): give text-only models like deepseek-v4-flash image recognition via Alibaba Bailian / any OpenAI-compatible vision API. 给 DeepSeek Harness 无识图能力模型加识图工具。
- [bocha-ai/dsh-web-search-bocha](https://github.com/bocha-ai/dsh-web-search-bocha) ★0 · `@bocha-ai/dsh-web-search-bocha` — DeepSeek Harness Web Search Plugin
- [l541402398/dsh-top-leaderboard](https://github.com/l541402398/dsh-top-leaderboard) ★0 · `dsh-top-leaderboard` — DSH Web 插件热度榜单：侧栏「榜单」按钮 + 弹窗排行 + 类型区分 + 权限检测 + 一键安装
- [LKRCharon/dsh-research-library](https://github.com/LKRCharon/dsh-research-library) ★0 · `dsh-research-library` — Native literature search, bibliographic verification, BibTeX, and session snapshots for DeepSeek Harness — powered by Field Current.
- [qing3a/dsh-repo-context](https://github.com/qing3a/dsh-repo-context) ★0 · `@qing3a/dsh-repo-context` — DSH 插件：把 git 状态与仓库规范动态注入 system prompt（官方 system-prompt 缝隙插件）
- [zhuiyueya/dsh-voice](https://github.com/zhuiyueya/dsh-voice) ★0 · `dsh-voice` — Voice for DeepSeek Harness（dsh） —  speech-to-text input +  read-aloud TTS for text-only DeepSeek, zero API key.
- [TonyDua/dsh-web-search-exa](https://github.com/TonyDua/dsh-web-search-exa) ★0 · `@tonydua/dsh-web-search-exa` — Zero-config Exa web search provider for DeepSeek Harness (dsh): keyless anonymous MCP fallback (mcp.exa.ai/mcp) + keyed REST path, with a configurable providerId switch.
- [sleepinginsummer/dsh-fff](https://github.com/sleepinginsummer/dsh-fff) ★0 · `dsh-fff` — Fuzzy file finding and indexed content search for DSH: find\_files / resolve\_file / related\_files / fff\_grep. Pure-JS path index + subsequence scoring (no native dependencies). Port of pi-fff for the Pi coding agent.
- [sleepinginsummer/dsh-hashline-edit-pro](https://github.com/sleepinginsummer/dsh-hashline-edit-pro) ★0 · `dsh-hashline-edit-pro` — Hash-anchored read/replace/undo tools for DSH. Every line of a file carries a unique 3-char content hash; edits target hashes, never line numbers, so stale anchors are caught before they touch the file. Port of pi-hashline-edit-pro for the Pi coding agent.
- [NexusAgentX/dsh-web-access](https://github.com/NexusAgentX/dsh-web-access) ★0 · `dsh-web-access` — Web access for DeepSeek Harness — multi-provider search/fetch on ctx.web, plus GitHub/PDF/YouTube extraction.
- [ChengChe106/dsh-web-auto-open](https://github.com/ChengChe106/dsh-web-auto-open) ★0 · `dsh-web-auto-open` — DSH plugin: auto-open the default browser when \`dsh web\` starts — cross-platform (Windows/macOS/Linux)
- [anweat/dsh-voice-webspeech](https://github.com/anweat/dsh-voice-webspeech) ★0 · `dsh-voice-webspeech` — DSH Web 语音输入插件：零服务端、零密钥、零模型下载，直接使用浏览器内置 Web Speech API（Edge=微软 Azure 语音，Chrome=Google 语音）。
- [cui-stack/dsh-workspace-digest](https://github.com/cui-stack/dsh-workspace-digest) ★0 · `dsh-workspace-digest` — DeepSeek Harness bundle: workspace\_digest tool
- [MicroHEROX/dsh-Kimi-WebBridge](https://github.com/MicroHEROX/dsh-Kimi-WebBridge) ★0 · `dsh-kimi-webbridge` — Kimi WebBridge for DeepSeek Harness — a third-party dsh plugin bundle that turns the local Kimi WebBridge daemon into 15 native kimi\_webbridge\_\* browser tools (navigate, click, fill, snapshot, screenshot, evaluate, network, upload, PDF).
- [MicroHEROX/dsh-exa-mcp](https://github.com/MicroHEROX/dsh-exa-mcp) ★0 · `dsh-exa-mcp` — Exa Search MCP for DeepSeek Harness: mounts the remote Exa MCP endpoint (https://mcp.exa.ai/mcp) through the in-box @deepseek-ai/dsh-mcp-client bridge
- [Luaphes/dsh-plugins-market](https://github.com/Luaphes/dsh-plugins-market) ★0 · `dsh-plugins-market` — DeepSeek Harness 插件创意市场：嗅探官方 dsh-plugin topic，噪音过滤、信任徽章、排序搜索与一键安装面板
- [kangjinghang/dsh-xueqiu](https://github.com/kangjinghang/dsh-xueqiu) ★0 · `dsh-xueqiu` — 雪球 mini 行情面板 — DeepSeek Harness 免登录 A股/港美股实时行情、K线、分时、热榜、7x24快讯。可拖拽悬浮面板，交易时段智能刷新。
- [Tostoevsky/TsienHsueShen](https://github.com/Tostoevsky/TsienHsueShen) ★0 · `dsh-tsien-hsue-shen` — 钱学森《工程控制论》全书蒸馏的 DeepSeek Harness 方法论技能插件 | A DeepSeek Harness skill plugin distilled from Qian Xuesen's Engineering Cybernetics
- [studyzy/dsh-lazy-tools](https://github.com/studyzy/dsh-lazy-tools) ★0 · `@deepseek-ai/dsh-lazy-tools` — CodeBuddy-style deferred tool loading for DeepSeek Harness: keep tool schemas out of the model context until the model loads them on demand via tool\_search / defer\_execute\_tool.
- [sikwoxy/dsh-tool-memory](https://github.com/sikwoxy/dsh-tool-memory) ★0 · `dsh-tool-memory` — DeepSeek Harness 插件：跨会话持久记忆（Hermes 式）
- [l541402398/dsh-file-uploads](https://github.com/l541402398/dsh-file-uploads) ★0 · `dsh-file-uploads` — Upload arbitrary local files from the DeepSeek Harness Web composer and manage them in Settings.
- [Nwflower/dsh-file-claim](https://github.com/Nwflower/dsh-file-claim) ★0 · `dsh-file-claim` — File claim / protection for concurrent DeepSeek Harness (DSH) sessions working the same workspace: claim/release, heartbeat stale takeover, async pending merge area (git 3-way merge). DSH Host plugin.
- [LnsiAxe/dsh-web-restart](https://github.com/LnsiAxe/dsh-web-restart) ★0 · `@lnsiaxe/dsh-web-restart` — DSH bundle: ensure/rotate the DeepSeek Harness web server (detached via WMI) — load to start it
- [zimai233/dsh-image-search](https://github.com/zimai233/dsh-image-search) ★0 · `dsh-image-search` — Multi-engine reverse image search aggregator for DeepSeek Harness. Turn one public image URL into Google Lens / Baidu / Yandex / TinEye / SauceNAO / IQDB / Ascii2d search links.
- [Equinox7379/dsh-config-watch](https://github.com/Equinox7379/dsh-config-watch) ★0 · `dsh-config-watch` — Config drift detective for DSH: snapshots profile/plugin state, records changes.
- [qiqikuaidianpao/mypet](https://github.com/qiqikuaidianpao/mypet) ★0 · `mypet` — 🐾 DSH 电子宠物插件 — 你的 AI 编程搭档，住进浏览器的电子宠物
- [tkr520521/dsh-repo-analyzer](https://github.com/tkr520521/dsh-repo-analyzer) ★0 · `dsh-repo-analyzer` — Local repository intelligence for DeepSeek Harness: stack detection, dependency maps, and module-reference analysis. No extra services — everything runs on your filesystem.
- [MostlyHarmlessxyz/dsh-safe-web-fetch](https://github.com/MostlyHarmlessxyz/dsh-safe-web-fetch) ★0 · `dsh-safe-web-fetch` — SSRF-resistant public-only HTTP(S) WebFetchProvider plugin for DeepSeek Harness
- [yan9651688/dsh-file-checksum](https://github.com/yan9651688/dsh-file-checksum) ★0 · `dsh-file-checksum` — Raw-file SHA-256 and SHA-512 verification plugin for DeepSeek Harness
- [Amengclass/dsh-memory](https://github.com/Amengclass/dsh-memory) ★0 · `dsh-memory` — Persistent, model-editable memory/notes store for DeepSeek Harness. Adds memory\_set/get/delete/search tools backed by ctx.storageDomain so facts survive across sessions (dsh-plugin).

</details>

<a id="notifications"></a>
<details>
<summary><strong>🔔 通知与监控</strong> <sup>18 个插件</sup></summary>

### 通知与监控

- [NanmiCoder/dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) ★187 · `dsh-agent-teams` — AgentTeams plugin for DeepSeek Harness
- [jelly-000/dsh-balance-monitor](https://github.com/jelly-000/dsh-balance-monitor) ★4 · `dsh-balance-monitor` — DeepSeek 账户余额、剩余比例条与今日花费，显示在 dsh 侧边栏底部 · DeepSeek balance, remaining-ratio bar and today's spend in the dsh sidebar footer.
- [MuziIsabel/dsh-win-notify](https://github.com/MuziIsabel/dsh-win-notify) ★4 · `dsh-win-notify` — DSH plugin: Windows toast notification with sound when an agent task completes
- [congchuanling-dot/DSH-Telegram-Relay](https://github.com/congchuanling-dot/DSH-Telegram-Relay) ★4 · `dsh-telegram-relay` — DSH Relay 让你可以通过 Telegram 远程与 DeepSeek Harness 对话，并接收通知。DSH Relay turns Telegram into a remote conversation and notification channel for DeepSeek Harness.
- [STARDUSTLC666/dsh-slack](https://github.com/STARDUSTLC666/dsh-slack) ★2 · `dsh-slack` — DSH 社区插件：Slack 通知/桥接（v0.2 支持 Socket Mode 双向：收件箱 + 线程回复）
- [sjscy05/dsh-task-progress-notifier](https://github.com/sjscy05/dsh-task-progress-notifier) ★2 · `dsh-task-progress-notifier` — DeepSeek Harness plugin: track todo\_write progress and pop native desktop reminders (bottom-right).
- [yuxino/dsh-blue-whale-maid](https://github.com/yuxino/dsh-blue-whale-maid) ★2 · `dsh-blue-whale-maid` — dsh web 的桌面宠物插件，本质是一个任务完成提醒器。
- [lvyuchuiyi/dsh-funpack](https://github.com/lvyuchuiyi/dsh-funpack) ★2 · `dsh-funpack` — DeepSeek Harness的一些有趣插件
- [BiBoyang/dsh-im-bridge](https://github.com/BiBoyang/dsh-im-bridge) ★1 · `dsh-im-bridge` — DSH 插件：把 DeepSeek Harness 桥接到 IM（v0.1 微信/iLink；钉钉/飞书/Telegram 预留）。turn/approval 推送 + 远程批准/注入，持久去重/收敛分段/合并窗口。
- [ben7am1n/dsh-deepseek-usage](https://github.com/ben7am1n/dsh-deepseek-usage) ★1 · `dsh-deepseek-usage` — DeepSeek balance and token usage tools for DeepSeek Harness
- [yoke233/dsh-tool-monitor](https://github.com/yoke233/dsh-tool-monitor) ★1 · `dsh-tool-monitor` — Monitor existing DeepSeek Harness background jobs without running commands twice
- [juhe291/dsh-token-panel](https://github.com/juhe291/dsh-token-panel) ★1 · `dsh-token-panel` — Real-time token consumption HUD plugin for DeepSeek Harness. Live token usage monitor, context pressure, cost estimation, history curves, per-day/per-month stats. DeepSeek Harness 实时 Token 消耗监控插件：用量统计、成本估算、趋势曲线、按日按月报表。
- [MicroMilo/upstream-radar](https://github.com/MicroMilo/upstream-radar) ★1 · `upstream-radar` — Always-on vulnerability and breaking-change impact monitoring for DeepSeek Harness plugins.
- [Frost-Reed/blocker-notify](https://github.com/Frost-Reed/blocker-notify) ★1 · `dsh-blocker-notify` — dsh-blocker-notify — Real-time attention alerts for DeepSeek Harness: a global banner + flashing workspace entries when the agent is blocked (approval request / sandbox denial).
- [kiim-wong/dsh-push](https://github.com/kiim-wong/dsh-push) ★0 · `dsh-push` — Push DeepSeek Harness agent lifecycle notifications to configurable channels
- [yeshimei/dsh-sound](https://github.com/yeshimei/dsh-sound) ★0 · `dsh-sound` — Distinct alert sounds for DeepSeek Harness: network error, approval request, question asked, and turn-completion notifications.
- [Equinox7379/dsh-turn-watchdog](https://github.com/Equinox7379/dsh-turn-watchdog) ★0 · `dsh-turn-watchdog` — Turn watchdog for DSH: detects stuck turns and injects a quiet warning.
- [rizkirmdhnnn/dsh-tool-notify](https://github.com/rizkirmdhnnn/dsh-tool-notify) ★0 · `dsh-tool-notify` — DSH plugin: model-facing notify tool for DeepSeek Harness — send notifications to ntfy or generic webhooks when an agent task finishes.

</details>

<a id="dev-helpers"></a>
<details>
<summary><strong>🧑‍💻 开发辅助</strong> <sup>31 个插件</sup></summary>

### 开发辅助

- [shuguang1994/project-blueprint](https://github.com/shuguang1994/project-blueprint) ★10 · `project-blueprint` — Make any project AI-agent-ready in one command. Adaptive tech stack detection (7 languages × 14 frameworks × 61 components), auto-generates AGENTS.md, docs skeleton, CI/CD, and testing infrastructure. 一句话让任何项目具备 AI 开发能力。
- [drowned-fish1/deepseek-harness-skillx](https://github.com/drowned-fish1/deepseek-harness-skillx) ★2 · `dsh-skillx` — DeepSeek Harness plugin for safely discovering, auditing, and adopting external Agent Skills — prompt-injection and AgentBaiting defense.
- [unnnnoooo/dsh-cue-plugin](https://github.com/unnnnoooo/dsh-cue-plugin) ★2 · `dsh-cue-plugin` — DeepSeek Harness 的跨会话引用(cue)插件
- [erduotong/dsh-plugin-graph](https://github.com/erduotong/dsh-plugin-graph) ★2 · `dsh-plugin-graph` — 一个Deepseek Harness的插件关系图谱可视化插件
- [sunshine-lang/dsh-plugin-template](https://github.com/sunshine-lang/dsh-plugin-template) ★2 — Ready-to-publish DeepSeek Harness plugin skeleton: bundle format, tool DSL, config, tests, and a scaffold script
- [addxing/function-testing](https://github.com/addxing/function-testing) ★1 · `dsh-skill-function-testing` — 面向各类 AI 编程代理的功能测试用例生成 Skill。它可以根据 PRD、Git 提交记录或用户故事生成功能测试用例，并输出 Excel 风格测试报告     A skill for generating functional test cases from PRDs, Git commits, or user stories, and exporting an Excel-style test report. Works with any AI coding agent
- [YYTbit/dsh-plugin-meta-memory](https://github.com/YYTbit/dsh-plugin-meta-memory) ★1 · `dsh-plugin-meta-memory` — Structured long-term memory system for DeepSeek Harness
- [chancelu/dsh-llmwiki](https://github.com/chancelu/dsh-llmwiki) ★1 · `dsh-llmwiki` — Local Markdown wiki as long-term memory for DeepSeek Harness — RRF-fused retrieval (keyword + wikilink graph + temporal), token-budget injection, auto-capture. Ported from llmwiki.
- [PerryLink/dsh-lsp-actions](https://github.com/PerryLink/dsh-lsp-actions) ★1 · `dsh-lsp-actions` — LSP action surface for DeepSeek Harness: lsp\_diagnostics, lsp\_format, and lsp\_completion tools over language servers
- [Bleed00/dsh-claude-mem](https://github.com/Bleed00/dsh-claude-mem) ★1 · `@bleed00/dsh-claude-mem` — DeepSeek Harness plugin integrating claude-mem (memory for dsh)
- [Isekai-Mfu/dsh-mimo-vision-hint](https://github.com/Isekai-Mfu/dsh-mimo-vision-hint) ★1 · `dsh-mimo-vision-hint` — DSH plugin: dispatch image-recognition tasks to an opencode-go mimo-v2.5 subagent via system-prompt injection
- [cking000bigdemon/dsh-toolbelt](https://github.com/cking000bigdemon/dsh-toolbelt) ★1 · `dsh-toolbelt` — Eight DeepSeek Harness plugins: persona, language guard, per-request vision fallback, python/windows write guards, cross-agent memory, image generation, and skill shell injection.
- [skitse/dsh-dev-actions](https://github.com/skitse/dsh-dev-actions) ★1 · `dsh-dev-actions` — AI turns repeated dev commands, prompts, and habits into one-click DeepSeek Harness actions.
- [PerryLink/dsh-memento](https://github.com/PerryLink/dsh-memento) ★1 · `dsh-memento` — Bounded, layered, approval-gated, auditable cross-session memory for DeepSeek Harness (capability seam: ctx.memory + SQLite provider + memory tool + frozen snapshot injection)
- [suimi8/dsh-test-runner](https://github.com/suimi8/dsh-test-runner) ★1 · `dsh-test-runner` — DSH plugin: structured test runner tool (test\_run) — auto-detect vitest/jest/pytest/node:test, run tests, parse failure summaries for the model.
- [ben7am1n/dsh-lens-lite](https://github.com/ben7am1n/dsh-lens-lite) ★1 · `dsh-lens-lite` — Post-edit diagnostics for DeepSeek Harness
- [a179-sanae/dsh-code-check](https://github.com/a179-sanae/dsh-code-check) ★1 · `@a179-sanae/dsh-code-check` — Auto type-check and lint diagnostics for DeepSeek Harness: after the model edits code, tsc runs in the background and a code\_check tool reports what broke
- [PangYiMing/dsh-bisect-debug](https://github.com/PangYiMing/dsh-bisect-debug) ★1 · `dsh-bisect-debug` — DSH plugin: bisect bugs (code / boundary / commit) — 二分法定位 bug 根因
- [elementor-i/dsh-agentmemory](https://github.com/elementor-i/dsh-agentmemory) ★1 · `@dsh-external/dsh-agentmemory` — agentmemory for DeepSeek Harness (dsh): full memory\_\* tools, capture hooks, and context injection over the local REST server
- [PerryLink/dsh-doublecheck](https://github.com/PerryLink/dsh-doublecheck) ★1 · `dsh-doublecheck` — Double-check before you ship: grill the requirements, test the implementation, prove the delivery. An engineering-discipline bundle for DeepSeek Harness.
- [ylwl1997/noatmark-dsh-plugin](https://github.com/ylwl1997/noatmark-dsh-plugin) ★1 · `noatmark-dsh-plugin` — NoAtMark text hygiene as a DeepSeek Harness (dsh) plugin — sanitize untrusted text, scan invisible characters, clean LLM formatting, and escape CSV injection.
- [addxing/function-extraction](https://github.com/addxing/function-extraction) ★0 · `dsh-skill-function-extraction` — 面向 AI 编程代理的功能链路提取 Skill。它可以从项目代码中提取某个具体功能的完整实现链路，并生成包含业务逻辑、数据流、异常处理、模块依赖和 Mermaid 图表的技术开发文档     A skill for extracting a complete feature implementation chain from a codebase and generating a technical development document with business logic, data flow, exception handling, and Mermaid diagrams. Works with any AI coding agent
- [Luck9Star/dsh-gateway-provider](https://github.com/Luck9Star/dsh-gateway-provider) ★0 · `dsh-gateway-provider` — Generic LLM gateway provider plugin for DeepSeek Harness: newapi / LiteLLM / Higress / any OpenAI-compatible gateway, multi-protocol (OpenAI/Anthropic/Gemini) via pi-ai SDK, models.dev enrichment
- [cyanseek/dsh-tool-chaos](https://github.com/cyanseek/dsh-tool-chaos) ★0 · `dsh-tool-chaos` — Deterministic fault injection and autonomous resilience tests for DeepSeek Harness tools
- [NexusAgentX/dsh-lens](https://github.com/NexusAgentX/dsh-lens) ★0 · `dsh-lens` — Real-time code feedback for DeepSeek Harness — LSP, linters, formatters, structural analysis via a host-native adapter around the pi-lens engine.
- [gezi-wen/sage-persona](https://github.com/gezi-wen/sage-persona) ★0 · `sage-persona` — Persona plugin for DeepSeek Harness (DSH) — injects a ready-made identity and working principles into the system prompt
- [ChenLaoshiYF/dsh-mcpguard](https://github.com/ChenLaoshiYF/dsh-mcpguard) ★0 · `dsh-mcpguard` — ?? for DeepSeek Harness: first security plugin for dsh. Scans skills/MCP configs for prompt injection, homoglyphs, hidden Unicode, dangerous shell, credential leaks. DSH ????????
- [Alexis-fish/dsh-projects](https://github.com/Alexis-fish/dsh-projects) ★0 · `dsh-projects` — Codex-style projects for DeepSeek Harness
- [Temoa/dsh-rules-paths](https://github.com/Temoa/dsh-rules-paths) ★0 · `@temoa/dsh-rules-paths` — Claude Code-style paths: rule injection for DeepSeek Harness (DSH).
- [XuezuoYS/dsh-IamDeepSeekV4ga](https://github.com/XuezuoYS/dsh-IamDeepSeekV4ga) ★0 · `dsh-plugin-iam-deepseek-v4ga` — 一个基于玄学的让 deepseek 思维链模仿灰测神必模型的 deepseek harness 娱乐插件
- [ICCuse/dsh-pain-point-check](https://github.com/ICCuse/dsh-pain-point-check) ★0 · `dsh-pain-point-check` — Enforced pain-point-check guard plugin for DeepSeek Harness: after two non-converged experiments it injects the three questions, denies non-investigative tool calls until answered, and blocks same-direction retries. dsh-plugin

</details>

<a id="learning"></a>
<details>
<summary><strong>🎓 学习与教育</strong> <sup>2 个插件</sup></summary>

### 学习与教育

- [cendaifeng/dsh-learn-everything](https://github.com/cendaifeng/dsh-learn-everything) ★3 · `dsh-learn-everything` — Feynman learning-mode plugin for DeepSeek Harness: /learn on|off, structured lesson cards, rich HTML teaching.
- [YohtHill/dsh-plugin-greeter](https://github.com/YohtHill/dsh-plugin-greeter) ★0 · `dsh-plugin-greeter` — A DeepSeek Harness (dsh) plugin that greets you at the start of every session with varied wording, and remembers your name.

</details>

<a id="misc"></a>
<details>
<summary><strong>🧩 其他</strong> <sup>315 个插件</sup></summary>

### 其他

- [liustack/modlens](https://github.com/liustack/modlens) ★1013 · `@liustack/modlens` — The first vision plugin for DeepSeek Harness, and the vision bridge for every text-only coding agent. Paste an image, get structured JSON evidence (OCR, layout, semantics).
- [sandbaseai/sandbase-harness](https://github.com/sandbaseai/sandbase-harness) ★570 · `managed-agents` — Open-source CMA-compatible agent runtime for any model, with MCP tools, sandboxed sessions, audit, replay, and a local console. Includes a native DeepSeek Harness bundle over stdio MCP.
- [vlln/whale-girl](https://github.com/vlln/whale-girl) ★101 · `whale-girl` — DSH Web GUI 桌面宠物插件（QQ 宠物形态）：右下角悬浮、可拖拽/投喂/玩耍的积累型伙伴。官方 repository-plugin（.dsh-plugin 格式），config.yaml 安装：github:dsh-external/whale-girl#\<ref\>&path:/.dsh-plugin
- [labring/sealos-skills](https://github.com/labring/sealos-skills) ★70 · `sealos` — AI agent skills for Sealos — deploy any project, provision databases, object storage & more with one command. Works with Claude Code, Gemini CLI, Codex.
- [Jayden-X-L/forkprobe](https://github.com/Jayden-X-L/forkprobe) ★64 · `forkprobe-dsh` — Compare multiple skills on the same task and pick the winner.
- [omdsh-dev/dsh-open-in-vscode](https://github.com/omdsh-dev/dsh-open-in-vscode) ★37 · `dsh-open-in-vscode` — Open DeepSeek Harness workspace directories in VS Code directly from the web GUI.
- [Anionex/dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind) ★32 · `@dsh-external/turn-rewind` — deepseek harness对话和代码状态回退插件 | DSH — rewind conversation and workspace state, powered by a persistent Change Ledger
- [multica-ai/dsh-multica-runtime](https://github.com/multica-ai/dsh-multica-runtime) ★27 · `@multica-ai/dsh-runtime` — Support dsh runtime on Multica.
- [Chinesezjc/dsh-interconnect](https://github.com/Chinesezjc/dsh-interconnect) ★22 · `dsh-interconnect` — Cross-instance message/event handoff plugins for DSH (interconnect service + tools)
- [Moeblack/dsh-message-edit](https://github.com/Moeblack/dsh-message-edit) ★16 · `dsh-message-edit` — DSH plugin: branch-based message editing, reroll, retry, version timeline
- [ysr666/dsh-vision-router](https://github.com/ysr666/dsh-vision-router) ★15 · `dsh-vision-router` — Eyes for text-only DeepSeek Harness agents: built-in free vision chain (no key) + pixel-level vision tools (Q&A, grounding, crop, pixel diff, colors, OCR, SVG trace, cutout, screenshots). One-command install, no Python, image turns work like ordinary tool-calling turns.
- [Anionex/dsh-computer-use](https://github.com/Anionex/dsh-computer-use) ★15 · `@dsh-external/dsh-computer-use` — 为 DeepSeek Harness 提供电脑控制插件：新鲜 Accessibility 观测、过期状态拒绝、作用域权限与安全输入（目前支持macos）｜Accessibility-first macOS Computer Use bundle for DSH with fresh observations, stale-state rejection, scoped permissions, and safe input.
- [hellodigua/dsh-share](https://github.com/hellodigua/dsh-share) ★14 · `@dsh-external/dsh-share` — DSH 对话分享插件，一键分享你的对话。One-click conversation sharing for DSH.
- [bugmaker2/dsh-plugin-template](https://github.com/bugmaker2/dsh-plugin-template) ★11 · `dsh-plugin-template` — Template for deepseek-harness plugin development.
- [Ghost011118/dsh-balance-meter](https://github.com/Ghost011118/dsh-balance-meter) ★10 · `dsh-balance-meter` — DeepSeek account balance and session cost readout for the DeepSeek Harness Web GUI
- [hellodigua/dsh-emoji](https://github.com/hellodigua/dsh-emoji) ★9 · `@dsh-external/dsh-emoji` — 为 DSH 的回复加入自定义的行内表情
- [bobleer/dsh-acp-for-bitfun](https://github.com/bobleer/dsh-acp-for-bitfun) ★9 · `dsh-acp-for-bitfun` — BitFun 与 DSH ACP 交互对接 插件
- [AnacondaKC/dsh-stock-market](https://github.com/AnacondaKC/dsh-stock-market) ★9 · `dsh-stock-market` — 有效解决了写代码的时候账户不能同时亏钱的BUG
- [william-jin-cmu/dsh-stickers](https://github.com/william-jin-cmu/dsh-stickers) ★9 · `@dsh-external/dsh-stickers` — DSH WebUI sticker plugin for bidirectional user and agent reactions
- [unitarylab/quantum-practices](https://github.com/unitarylab/quantum-practices) ★8 · `dsh-unitarylab-quantum-practices` — Quantum Algorithms Best Practices
- [creght-dev/skills](https://github.com/creght-dev/skills) ★7 · `creght-skills` — Codex and agent skills for Cregh.
- [springbrand-lab/dsh-oauth-mcp-client](https://github.com/springbrand-lab/dsh-oauth-mcp-client) ★6 · `@dsh-external/dsh-oauth-mcp-client` — OAuth 2.1 Streamable HTTP MCP client plugin for DeepSeek Harness.
- [SnowCrescenter-tech/dsh-milestone](https://github.com/SnowCrescenter-tech/dsh-milestone) ★6 · `dsh-milestone` — Git-style milestone timeline for DeepSeek Harness - hover for metadata, click to jump to any message. 会话里程碑导航条：像 Git 提交图一眼定位每条提问，悬停看时间/轮次/耗时/TTFT，点击即跳转。
- [yanglongyun/dsh-ramify](https://github.com/yanglongyun/dsh-ramify) ★6 · `@ramify/dsh-ramify` — Ramify 是 DeepSeek Harness 的创意分支画布插件，用树状工作区生成、对比和迭代多个可交互方案。
- [knqiufan/powercontext-dsh](https://github.com/knqiufan/powercontext-dsh) ★6 · `powercontext-dsh` — DeepSeek Harness plugin that connects to a PowerContext Server over HTTP for recall, memory, handoff, experience, and skills.
- [hyqhyq3/dsh-mcp-manager](https://github.com/hyqhyq3/dsh-mcp-manager) ★5 · `dsh-mcp-manager` — MCP server manager plugin for DeepSeek Harness: Settings → MCP page, OAuth (PKCE + dynamic client registration) or static-token auth, tools registered as mcp\_\_\<name\>\_\_\*
- [keleus/deepseek-pet](https://github.com/keleus/deepseek-pet) ★5 · `deepseek-pet` — 在你的deepseek-harness上养一只吃白饭的大蓝鲸
- [KitDoesIt/dsh-compaction-instant](https://github.com/KitDoesIt/dsh-compaction-instant) ★5 · `dsh-compaction-instant` — LLM-free lossless\* compaction engine for DeepSeek Harness
- [YYTbit/dsh-plugin-claude-bridge](https://github.com/YYTbit/dsh-plugin-claude-bridge) ★4 · `dsh-plugin-claude-bridge` — Bridge Claude Code memory, skills, and config into DeepSeek Harness
- [sliverp/DeepSeek-harness-qqbot](https://github.com/sliverp/DeepSeek-harness-qqbot) ★4 · `deepseek-harness-qqbot` — QQ Bot text and image channel plugin for DeepSeek Harness
- [HuanLinOTO/dsh-plugin-d399](https://github.com/HuanLinOTO/dsh-plugin-d399) ★4 · `@huanlin/dsh-plugin-d399` — 模型生成时右下角弹出小游戏菜单（Wordle/消消乐/192 款参数化小游戏，可拓展注册表） | Pops up a mini-game menu while the model generates (Wordle/Match-3/192 parametric mini-games, extensible registry)
- [openma-ai/deepseek-harness-acp](https://github.com/openma-ai/deepseek-harness-acp) ★4 · `@openma/deepseek-harness-acp` — ACP server implementation for DeepSeek harness
- [happyren/dsh-agent-messaging](https://github.com/happyren/dsh-agent-messaging) ★4 · `dsh-agent-messaging` — Cross-session agent-to-agent messaging for DeepSeek Harness — address another session by name and deliver a message into its inbox.
- [Degurechaff57/dsh-openapi](https://github.com/Degurechaff57/dsh-openapi) ★4 · `dsh-openapi` — Safe OpenAPI 3.x discovery and API calling tools for DeepSeek Harness
- [nowledge-co/nowledge-mem-deepseek-harness](https://github.com/nowledge-co/nowledge-mem-deepseek-harness) ★4 · `nowledge-mem-deepseek-harness` — Nowledge Mem community plugin bundle for DeepSeek Harness
- [Moeblack/deepseek-manners](https://github.com/Moeblack/deepseek-manners) ★4 · `deepseek-manners` — DSH 插件：给每次消息后注入感谢语（deepseek-manners）
- [oil-oil/dsh-vision](https://github.com/oil-oil/dsh-vision) ★4 · `@oil-oil/dsh-vision` — Near-native image understanding for DeepSeek Harness
- [ZeroHackz/OpenFlowFrames](https://github.com/ZeroHackz/OpenFlowFrames) ★3 · `@zerohackz/dsh-openflowframes` — DeepSeek Harness plugin exposing OpenFlowFrames video frame interpolation (RIFE) as agent tools
- [Meredith2328/dsh-sticky-note](https://github.com/Meredith2328/dsh-sticky-note) ★3 · `dsh-sticky-note` — 左下角便签：随手记点子/感想/TODO，实时保存到归档目录，清单+悬浮归档
- [fakechris/dsh-track](https://github.com/fakechris/dsh-track) ★3 · `@fakechris/dsh-track` — DSH Track Bridge 插件：嵌入式任务管理引擎——决策点协议、念头捕获墙、Linear 形 issue 存储（bundle），AI 与人之间的任务轨道
- [imetn/dsh-lark-bridge](https://github.com/imetn/dsh-lark-bridge) ★3 · `dsh-lark-bridge` — Bidirectional Lark/Feishu controller for DeepSeek Harness
- [HuanLinOTO/dsh-plugin-ya-workspace-sidebar](https://github.com/HuanLinOTO/dsh-plugin-ya-workspace-sidebar) ★3 · `@huanlin/dsh-plugin-ya-workspace-sidebar` — DSH Web 工作区侧栏替代，顶部全局最近会话 + Workspace→Session 二级菜单 + 面包屑 | DSH Web workspace sidebar replacement: top global recent sessions + Workspace→Session two-level menu + breadcrumbs
- [wingoo/codex-plugin-dsh](https://github.com/wingoo/codex-plugin-dsh) ★3 · `codex-plugin-dsh` — Use local Codex App Server as a model provider in DeepSeek Harness
- [YYTbit/dsh-plugin-cost-tracker](https://github.com/YYTbit/dsh-plugin-cost-tracker) ★3 · `dsh-plugin-cost-tracker` — Token cost tracker for DeepSeek Harness
- [omdsh-dev/dsh-hub](https://github.com/omdsh-dev/dsh-hub) ★3 · `@omdsh/dsh-hub` — OMDSH community extension hub built on official DeepSeek Harness contracts
- [tensorlakeai/dsh-tensorlake-sandbox](https://github.com/tensorlakeai/dsh-tensorlake-sandbox) ★3 · `@tensorlake/dsh-sandbox` — A deepseek harness plugin for tensorlake sandbox
- [zibo2025/dsh-orchestrator](https://github.com/zibo2025/dsh-orchestrator) ★3 · `dsh-orchestrator` — 【编排模式】为 DeepSeek Harness 提供多智能体编排模式：主智能体分解分派、worker 全网格互通，支持逐 worker 指定模型与思考强度
- [sakikoTGW/pack-agent](https://github.com/sakikoTGW/pack-agent) ★2 · `@sakikotgw/pack-agent` — Agent Modpack — 像装 MC 整合包一样，装你的 agent。
- [GooodWei/context-vista](https://github.com/GooodWei/context-vista) ★2 · `context-vista` — 为 DeepSeek Harness 提供右侧悬浮栏以及 /context 命令，用环形图实时展示当前上下文 token 用量与分配，compact指令效果，同时支持估算费用消耗，对标 Claude Code 的 /context。
- [JasonJin2006/dsh-sound-effects-plugin](https://github.com/JasonJin2006/dsh-sound-effects-plugin) ★2 · `@jasonjin06/dsh-sound-effects` — Sound effects plugin for DeepSeek Harness: ambient work music, success chime, and attention chime.
- [hccccc01333/dsh-report-html](https://github.com/hccccc01333/dsh-report-html) ★2 · `dsh-report-html` — Generate self-contained interactive HTML reports from Markdown, tables, charts, China province maps, flowcharts, math, and drill-down tables — a DeepSeek Harness (dsh) plugin
- [YYTbit/dsh-plugin-opencode-bridge](https://github.com/YYTbit/dsh-plugin-opencode-bridge) ★2 · `dsh-plugin-opencode-bridge` — Bridge opencode skills and config into DeepSeek Harness
- [PangYiMing/dsh-mobile-control](https://github.com/PangYiMing/dsh-mobile-control) ★2 · `dsh-mobile-control` — DSH plugin for controlling mobile devices (ADB/iOS) — DeepSeek Harness 操控手机插件
- [YYTbit/dsh-plugin-pi-bridge](https://github.com/YYTbit/dsh-plugin-pi-bridge) ★2 · `dsh-plugin-pi-bridge` — Bridge pi skills and config into DeepSeek Harness
- [YYTbit/dsh-plugin-codex-bridge](https://github.com/YYTbit/dsh-plugin-codex-bridge) ★2 · `dsh-plugin-codex-bridge` — Bridge codex skills and config into DeepSeek Harness
- [Starfie1d1272/dsh-builtin-toggles](https://github.com/Starfie1d1272/dsh-builtin-toggles) ★2 · `dsh-builtin-toggles` — Built-in plugin catalog and safe GUI toggles for DeepSeek Harness Web.
- [Han-1413141/dsh-sticky-disclosure](https://github.com/Han-1413141/dsh-sticky-disclosure) ★2 · `dsh-sticky-disclosure` — DSH Web client plugin: collapse every expanded section (Think / tool cards) in the conversation in one click, with a customizable hotkey.
- [HuanLinOTO/dsh-plugin-auto-blame](https://github.com/HuanLinOTO/dsh-plugin-auto-blame) ★2 · `@huanlin/dsh-plugin-auto-blame` — 模型回合结束后用 LLM 生成 3 条批判性跟进建议，点击即发送 | After a model turn, an LLM generates 3 critical follow-up suggestions shown as click-to-send chips
- [morlay/session-persistence-rdb](https://github.com/morlay/session-persistence-rdb) ★2 · `@morlay/session-persistence-rdb` — session 关系型数据库持久化
- [121103qwq/dsh-vision-sidecar](https://github.com/121103qwq/dsh-vision-sidecar) ★2 · `dsh-vision-sidecar` — Hosted free vision sidecar for DeepSeek Harness with durable session evidence
- [yoke233/dsh-openai-codex-auth](https://github.com/yoke233/dsh-openai-codex-auth) ★2 · `dsh-openai-codex-auth` — OpenAI Codex OAuth login and usage card plugin for DeepSeek Harness
- [syy-shark/dsh-music-plugin](https://github.com/syy-shark/dsh-music-plugin) ★2 · `dsh-music-plugin` — DeepSeek Harness music plugin (dsh-plugin)
- [pinkllo/dsh-reasoning-translator](https://github.com/pinkllo/dsh-reasoning-translator) ★2 · `dsh-reasoning-translator` — DeepSeek Harness plugin: make the model write its chain-of-thought in your language
- [Drifter-yh/dsh-tool-policy](https://github.com/Drifter-yh/dsh-tool-policy) ★2 · `dsh-tool-policy` — Declarative deny-by-default tool policy plugin for DeepSeek Harness
- [XiLuovo/dsh-session-timeline](https://github.com/XiLuovo/dsh-session-timeline) ★2 · `dsh-session-timeline` — DeepSeek Harness 会话时间轴插件：横短横线波浪、当前消息定位、点击跳转、圆角预览 tooltip、可收起/展开
- [PivotStackIntelligence/dsh-github](https://github.com/PivotStackIntelligence/dsh-github) ★2 · `dsh-github` — Source Control and GitHub panel for DeepSeek Harness.
- [dongsheng123132/dsh-lineage](https://github.com/dongsheng123132/dsh-lineage) ★2 · `dsh-lineage` — Content-addressed data and action lineage evidence for DeepSeek Harness
- [securstack/securstack-dsh-plugin](https://github.com/securstack/securstack-dsh-plugin) ★2 · `@securstack/dsh-plugin` — SecurStack adapter for DeepSeek Harness: run repository security scans, policy gates, doctor diagnostics, and JSON CLI results from safe AI-agent tools.
- [PerryLink/dsh-claude-move](https://github.com/PerryLink/dsh-claude-move) ★2 · `dsh-claude-move` — DeepSeek Harness (dsh) plugin: migrate Claude Code sessions, memory, skills and CLAUDE.md into DSH with seamless resume (claude\_scan / import\_claude / resume-claude / web panel)
- [Toukaiteio/dsh-effort-tweak](https://github.com/Toukaiteio/dsh-effort-tweak) ★2 · `dsh-effort-tweak` — A DeepSeek Harness plugin that allows you to change the reasoning effort of custom models in WebUI.
- [030611/qiushi-dsh-evidence-audit](https://github.com/030611/qiushi-dsh-evidence-audit) ★2 · `qiushi-dsh-evidence-audit` — Observe-only hash-chained evidence receipts for DeepSeek Harness
- [LingLambda/dsh-undo](https://github.com/LingLambda/dsh-undo) ★2 · `dsh-undo` — Context undo/redo plugin for DeepSeek Harness (dsh): roll the model context back to the last completed step and restore it again.
- [hashdiana/dsh-token-usage](https://github.com/hashdiana/dsh-token-usage) ★2 · `dsh-token-usage` — 更清晰美观的会话 Token 用量条：上下文占用、输入/输出/缓存分解、吞吐与首字延迟，取代默认的纯文本 stats 行
- [codeAnqiang-ma/dsh-superpowers](https://github.com/codeAnqiang-ma/dsh-superpowers) ★2 · `dsh-superpowers` — Superpowers (obra/superpowers) as a DeepSeek Harness plugin: the methodology skills plus their session bootstrap
- [bobleer/deepseek-harness-plugin-mcp](https://github.com/bobleer/deepseek-harness-plugin-mcp) ★2 · `deepseek-harness-plugin-mcp` — MCP server that lets any agent discover, install, and run DeepSeek Harness plugins (topic: dsh-plugin).
- [sjscy05/matlab-modelsim-vivado-plugin](https://github.com/sjscy05/matlab-modelsim-vivado-plugin) ★2 · `mmv-dspic` — DeepSeek Harness plugin: MATLAB + ModelSim + Vivado full-flow tools for digital communication IC design tasks (mmv-dspic)
- [omdsh-dev/dsh-pet-corner](https://github.com/omdsh-dev/dsh-pet-corner) ★2 · `@deepseek-ai/dsh-pet-corner` — DSH Pet Corner: a floating pet, keyless pet-image proxy, favorites, and plugin-owned settings API
- [omdsh-dev/dsh-fun-typewriter](https://github.com/omdsh-dev/dsh-fun-typewriter) ★2 · `@deepseek-ai/dsh-fun-typewriter` — DSH Typewriter: WebAudio typing ambience with a plugin-owned settings API and zero audio assets
- [omdsh-dev/dsh-voice-funasr](https://github.com/omdsh-dev/dsh-voice-funasr) ★2 · `dsh-voice-funasr` — DSH web plugin: local offline FunASR voice input (paraformer int8 onnx sidecar, Web Speech fallback, LLM polish).
- [omdsh-dev/dsh-ernie-image](https://github.com/omdsh-dev/dsh-ernie-image) ★2 · `dsh-ernie-image` — DSH ERNIE-Image-Turbo text-to-image plugin: generate images via Baidu AI Studio, save them as durable session attachments, plus a settings card and a generation gallery panel
- [omdsh-dev/dsh-paddle-ocr](https://github.com/omdsh-dev/dsh-paddle-ocr) ★2 · `dsh-paddle-ocr` — DSH PaddleOCR (百度 PaddleOCR-VL 文档布局解析) plugin: OCR tools plus a settings card and task panel
- [omdsh-dev/dsh-longbridge](https://github.com/omdsh-dev/dsh-longbridge) ★2 · `dsh-longbridge` — DSH Longbridge (长桥) HK/US market plugin: quotes, account, positions and order tools plus a settings surface
- [omdsh-dev/dsh-daily-fortune](https://github.com/omdsh-dev/dsh-daily-fortune) ★2 · `@deepseek-ai/dsh-daily-fortune` — DSH daily fortune plugin with Guan Yin lots, Tarot spreads, and daily quotes
- [0xsline/dsh-spotlight](https://github.com/0xsline/dsh-spotlight) ★2 · `@dsh-external/dsh-spotlight` — Keyboard-first command palette for DeepSeek Harness Web
- [vibeinging/dsh-trace](https://github.com/vibeinging/dsh-trace) ★2 · `@deepseek-ai/dsh-trace` — DeepSeek Harness telemetry backend that exports turns, model steps, and tool calls to yiTrace over HTTP.
- [vibeinging/dsh-agent-budget](https://github.com/vibeinging/dsh-agent-budget) ★2 · `@deepseek-ai/dsh-agent-budget` — Native Harness agent-tree token budget plugin
- [omdsh-dev/sandbox-nono](https://github.com/omdsh-dev/sandbox-nono) ★2 · `@deepseek-ai/dsh-sandbox-nono` — nono沙盒支持
- [omdsh-dev/sandbox-micro](https://github.com/omdsh-dev/sandbox-micro) ★2 · `@deepseek-ai/dsh-sandbox-microsandbox` — microsandbox支持
- [Yuuz12/dsh-webui-auth](https://github.com/Yuuz12/dsh-webui-auth) ★2 · `dsh-webui-auth` — Persistent auth plugin for DeepSeek Harness WebUI: enforce login at the HTTP/transport layer (resources, /api, WebSocket) — unbypassable via devtools, zero dependencies.
- [Axiaohungry/dsh-llm-codebuddy](https://github.com/Axiaohungry/dsh-llm-codebuddy) ★2 · `dsh-llm-codebuddy` — 在deepseek harness中使用workbuddy api，因为公司只提供workbuddy积分
- [brittanistrehlowll-oss/dsh-quota-panel](https://github.com/brittanistrehlowll-oss/dsh-quota-panel) ★2 · `dsh-quota-panel` — Provider quota/balance corner panel for the dsh web surface (DeepSeek Harness plugin): server-side credential proxies plus a config-driven page badge.
- [benzhoupo/dsh-dardar](https://github.com/benzhoupo/dsh-dardar) ★2 · `dsh-dardar` — DSH 插件：在模型选择框左侧显示当前 DeepSeek V4 Pro / V4 Flash 的 codexradar IQ，每 5 分钟刷新（CC BY 4.0）
- [Heyflyingpig/long-draft-input](https://github.com/Heyflyingpig/long-draft-input) ★2 · `long-draft-input` — Deepseek Harness 插件：用于聚合发送框长文本
- [bpc-oss/dsh-web-billing](https://github.com/bpc-oss/dsh-web-billing) ★2 · `dsh-web-billing` — RMB/USD token-billing plugin for DeepSeek Harness (dsh web): official-policy auto pricing with peak/off-peak hours, per-message ledger, account balance, locale-driven currency display. 人民币/美元 token 计费插件
- [sunshine-lang/dsh-weather](https://github.com/sunshine-lang/dsh-weather) ★2 · `dsh-weather` — Weather tool for DeepSeek Harness: current conditions and multi-day forecasts via Open-Meteo (free, no API key)
- [pangzi499/dsh-balance-stats](https://github.com/pangzi499/dsh-balance-stats) ★2 · `dsh-balance-stats` — Balance, session cost, token usage, and invoice summaries for DeepSeek Harness Web.
- [czm15053/dsh-peer-link](https://github.com/czm15053/dsh-peer-link) ★2 · `@deepseek-ai/dsh-peer-link` — DSH peer link — point-to-point messaging between dsh agents and other local agent sessions (e.g. Claude Code) over unix sockets. Independent plugin: register as a peer, receive messages into agent context, reply with peer\_send, list peers with peer\_list.
- [MirDie/dsh-xai](https://github.com/MirDie/dsh-xai) ★2 · `dsh-xai` — xAI Grok SuperGrok / X Premium OAuth for DeepSeek Harness
- [omdsh-dev/sandbox-mxc](https://github.com/omdsh-dev/sandbox-mxc) ★1 · `@deepseek-ai/dsh-sandbox-mxc` — 微软跨平台沙盒支持
- [omdsh-dev/web-components](https://github.com/omdsh-dev/web-components) ★1 · `@deepseek-ai/dsh-client-web-component` — web-components支持
- [blue-a11y/dsh-client-shortcuts](https://github.com/blue-a11y/dsh-client-shortcuts) ★1 · `@blue-a11y/dsh-client-shortcuts` — Global keyboard shortcuts plugin for the DeepSeek Harness web GUI: ctx.shortcuts registry service + mod+l/mod+k/mod+shift+c default bindings
- [sliverp/DeepSeek-harness-weixin](https://github.com/sliverp/DeepSeek-harness-weixin) ★1 · `deepseek-harness-weixin` — Weixin ClawBot channel plugin for DeepSeek Harness with QR login and text/image messaging
- [walavave/dsh-git](https://github.com/walavave/dsh-git) ★1 · `dsh-git` — Git capability bundle for DeepSeek Harness: structured git tools, approval-gated mutations, and auto-checkpoints.
- [bill9109/dsh-conversation-share](https://github.com/bill9109/dsh-conversation-share) ★1 · `@bill9109/dsh-conversation-share` — 分享任意段落的 DSH 对话
- [YYTbit/dsh-plugin-agent-dashboard](https://github.com/YYTbit/dsh-plugin-agent-dashboard) ★1 · `dsh-plugin-agent-dashboard` — Multi-agent dashboard skill for DeepSeek Harness
- [YYTbit/dsh-plugin-context-compressor](https://github.com/YYTbit/dsh-plugin-context-compressor) ★1 · `dsh-plugin-context-compressor` — Context compression skill for DeepSeek Harness
- [YYTbit/dsh-plugin-auto-docs](https://github.com/YYTbit/dsh-plugin-auto-docs) ★1 · `dsh-plugin-auto-docs` — Auto documentation generation skill for DeepSeek Harness
- [Spirtxiaoqi7/mindspace-dsh-session-memory](https://github.com/Spirtxiaoqi7/mindspace-dsh-session-memory) ★1 · `mindspace-dsh-session-memory` — Editable, session-isolated personalization memory for DeepSeek Harness
- [jumpserver-east/jumpserver-dsh](https://github.com/jumpserver-east/jumpserver-dsh) ★1 · `dsh-jumpserver` — DeepSeek Harness plugin: manage JumpServer assets and operate on them through KoKo
- [GengDaPeng/dsh-agent-message](https://github.com/GengDaPeng/dsh-agent-message) ★1 · `dsh-agent-message` — 跨会话 Agent 通信插件 for DeepSeek Harness：让同一进程里的不同 Agent 会话互相收发消息。
- [omdsh-dev/dsh-scout](https://github.com/omdsh-dev/dsh-scout) ★1 · `@deepseek-ai/dsh-tool-scout` — 面向 DeepSeek Harness 的只读环境探测插件，为智能体提供运行环境、软件版本、系统资源、端口、服务、硬件及工作区信息。
- [030611/dsh-telemetry-redactor](https://github.com/030611/dsh-telemetry-redactor) ★1 · `dsh-telemetry-redactor` — Fail-closed export-copy redaction for DeepSeek Harness session telemetry
- [030611/dsh-verification-receipt](https://github.com/030611/dsh-verification-receipt) ★1 · `dsh-verification-receipt` — Privacy-minimal heuristic per-turn verification summaries for DeepSeek Harness
- [lin-cheng-lab/dsh-deepseek-balance](https://github.com/lin-cheng-lab/dsh-deepseek-balance) ★1 · `dsh-deepseek-balance` — DeepSeek API 余额监视器：DSH 右下角悬浮徽章 + 7天/30天用量费用图表
- [PerryLink/dsh-permission-rules](https://github.com/PerryLink/dsh-permission-rules) ★1 · `dsh-permission-rules` — Claude Code-style declarative permission rules for DeepSeek Harness: ordered allow/deny/ask rules with tool-name, argument (glob/regex), and workspace-path matching on the tools/pre-execute waterfall, session-log audit, and HMR reload.
- [Opr4Mp3r/deepseek-harness-plugin-from-scratch](https://github.com/Opr4Mp3r/deepseek-harness-plugin-from-scratch) ★1 · `deepseek-harness-plugin-from-scratch` — Code-audited, progressive guide to production-grade DeepSeek Harness plugins
- [agent-plaza/agent-plaza](https://github.com/agent-plaza/agent-plaza) ★1 · `agent-plaza` — Zero-signup public commons for AI agents — HTTP API + Agent Skill (Codex, Cursor, Hermes)
- [shyboy/dsh-k12-lesson-builder](https://github.com/shyboy/dsh-k12-lesson-builder) ★1 · `dsh-k12-lesson-builder` — DeepSeek Harness plugin for generating synchronized K12 English PPTX and DOCX lesson materials
- [xiaoshihou514/dsh-vision](https://github.com/xiaoshihou514/dsh-vision) ★1 · `dsh-vision` — DeepSeek Harness: vision
- [lynkas/dsh-think-flow-flow](https://github.com/lynkas/dsh-think-flow-flow) ★1 · `dsh-think-flow-flow` — DeepSeek Harness client plugin: constant-rate typewriter reveal for assistant output and reasoning, with per-model gating.
- [xiaoshihou514/dsh-weixin](https://github.com/xiaoshihou514/dsh-weixin) ★1 · `dsh-weixin` — DeepSeek Harness: Weixin
- [dongsheng123132/dsh-recovery-proof](https://github.com/dongsheng123132/dsh-recovery-proof) ★1 · `dsh-recovery-proof` — Read-only recovery drill evidence for DeepSeek Harness
- [dongsheng123132/dsh-benchmark](https://github.com/dongsheng123132/dsh-benchmark) ★1 · `dsh-benchmark` — Reproducible deterministic benchmark evidence for DSH tools and plugins
- [huguangyu666/dsh-plugin-session-import](https://github.com/huguangyu666/dsh-plugin-session-import) ★1 · `dsh-plugin-session-import` — DeepSeek Harness plugin: import claude-code / codex / reasonix / zcode sessions
- [dongsheng123132/dsh-release-proof](https://github.com/dongsheng123132/dsh-release-proof) ★1 · `dsh-release-proof` — Reproducible multi-source release evidence for DeepSeek Harness
- [chushixixin/dsh-harness-mcp-server](https://github.com/chushixixin/dsh-harness-mcp-server) ★1 · `@chushixixin/dsh-harness-mcp-server` — Expose DeepSeek Harness agent capabilities as an MCP server (brain=Hermes, arms=Harness)
- [aryswisnu/dsh-eval-regression](https://github.com/aryswisnu/dsh-eval-regression) ★1 · `dsh-eval-regression` — Deterministic, CI-safe golden-output evaluation for DeepSeek Harness
- [dongsheng123132/dsh-2origin](https://github.com/dongsheng123132/dsh-2origin) ★1 · `dsh-2origin` — Evidence-first 2Origin state projection, diff and immutable freeze for DeepSeek Harness
- [suimi8/dsh-cost-ledger](https://github.com/suimi8/dsh-cost-ledger) ★1 · `dsh-cost-ledger` — Cross-session persistent cost ledger for DeepSeek Harness: logs every LLM token usage to SQLite and exposes record/query/budget tools. Built-in DeepSeek pricing, overridable via config.
- [alooshxl/dsh-session-pins](https://github.com/alooshxl/dsh-session-pins) ★1 · `@dsh-external/dsh-session-pins` — Persistent pinned-session menu for DeepSeek Harness
- [Hu9956/dsh-codex-provider](https://github.com/Hu9956/dsh-codex-provider) ★1 · `dsh-codex-provider` — OpenAI Codex provider for DeepSeek Harness with device-code OAuth, Codex CLI import, token refresh, and a web settings panel.
- [Simon314620/dsh-turn-index](https://github.com/Simon314620/dsh-turn-index) ★1 · `dsh-turn-index` — deepseek harness的侧边栏对话轮次索引插件
- [dongsheng123132/dsh-cost](https://github.com/dongsheng123132/dsh-cost) ★1 · `dsh-cost` — Evidence-first token cost ledger and budget checks for DeepSeek Harness
- [Acidmoon/DIzzy-DSH](https://github.com/Acidmoon/DIzzy-DSH) ★1 · `dizzy-dsh` — My DSH plugins
- [TTTPOB/dsh-task-models](https://github.com/TTTPOB/dsh-task-models) ★1 · `dsh-task-models` — DeepSeek Harness plugin with per-task model and reasoning-effort selection
- [PixLunaLab/dsh-plugin-pixluna](https://github.com/PixLunaLab/dsh-plugin-pixluna) ★1 · `dsh-plugin-pixluna` — dsh-plugin-pixluna | 让 DSH 自己看涩图！
- [tappass/dsh-governance](https://github.com/tappass/dsh-governance) ★1 · `@tappass/dsh-governance` — The authority layer for agentic AI, as a DeepSeek Harness plugin. Governs every tool call against your business rules via TapPass /v1/govern.
- [benzhoupo/dsh-effort-config](https://github.com/benzhoupo/dsh-effort-config) ★1 · `dsh-effort-config` — dsh plugin: configure reasoning-effort levels (wire spellings), route default level and Anthropic token budgets for third-party models from the settings page; selection reuses the native model-picker Effort panel.
- [tree201/dsh-capability-inspector](https://github.com/tree201/dsh-capability-inspector) ★1 · `dsh-capability-inspector` — DeepSeek Harness Doctor and DSH runtime diagnostics for tools, models, skills, workspaces, sessions, plugins, and MCP troubleshooting
- [jihongboo/dsh-apple-mode](https://github.com/jihongboo/dsh-apple-mode) ★1 · `dsh-apple-mode` — Xcode AI integration for DeepSeek Harness: 26 Xcode MCP tools (mcpbridge), Apple platform skills, Xcode Intelligence-style persona. Agent preset + global MCP bundle.
- [DTSFO/dsh-model-modes](https://github.com/DTSFO/dsh-model-modes) ★1 · `dsh-model-modes` — Capability-aware reasoning controls and Fast model routing for DeepSeek Harness
- [yoke233/dsh-pixel-whale](https://github.com/yoke233/dsh-pixel-whale) ★1 · `dsh-pixel-whale` — A lively pixel-whale running-state companion for DeepSeek Harness Web.
- [ben7am1n/dsh-claude-marketplace](https://github.com/ben7am1n/dsh-claude-marketplace) ★1 · `dsh-claude-marketplace` — Claude Code marketplace compatibility for DeepSeek Harness
- [Liu-ty/dsh-balance-display](https://github.com/Liu-ty/dsh-balance-display) ★1 · `dsh-balance-display` — DeepSeek API balance overlay for DeepSeek Harness
- [ben7am1n/dsh-webhook-bridge](https://github.com/ben7am1n/dsh-webhook-bridge) ★1 · `dsh-webhook-bridge` — Generic webhook receiver for DeepSeek Harness — POST to a local endpoint to wake a dsh agent.
- [ben7am1n/dsh-mcp-proxy](https://github.com/ben7am1n/dsh-mcp-proxy) ★1 · `dsh-mcp-proxy` — Context-cheap lazy MCP access for DeepSeek Harness
- [ben7am1n/dsh-memory](https://github.com/ben7am1n/dsh-memory) ★1 · `dsh-memory` — Durable cross-session SQLite memory for DeepSeek Harness
- [bitterSmilezzz/dsh-skill-manager](https://github.com/bitterSmilezzz/dsh-skill-manager) ★1 · `dsh-skill-manager` — Skills management page for DeepSeek Harness Web Settings (dsh plugin)
- [lin-cheng-lab/dsh-plugin-doctor](https://github.com/lin-cheng-lab/dsh-plugin-doctor) ★1 · `dsh-plugin-doctor` — DSH 插件体检：安装前检查 peer 版本兼容性，防止 rc 不匹配崩溃 🩺
- [918154429/dsh-codex-import](https://github.com/918154429/dsh-codex-import) ★1 · `dsh-codex-import` — Read-only Codex setup compatibility scanner for DeepSeek Harness
- [zimixvx/dsh-archive-manager](https://github.com/zimixvx/dsh-archive-manager) ★1 · `dsh-archive-manager` — A minimal DeepSeek Harness Web plugin that lists archived sessions and permanently deletes an archived session directory after explicit confirmation.
- [Moeblack/dsh-skins](https://github.com/Moeblack/dsh-skins) ★1 · `@dsh-external/dsh-web-skins` — Mirror of dsh-external/dsh-skins + feat: harbor (夕港) dusk-harbor skin
- [shujiTech/dsh-plugin-wepre](https://github.com/shujiTech/dsh-plugin-wepre) ★1 · `dsh-plugin-wepre` — DeepSeek Harness plugin: publish single-screen content cards to WePre Next from a dsh agent session
- [pandashere/dsh-codex-bridge](https://github.com/pandashere/dsh-codex-bridge) ★1 · `dsh-codex-bridge` — Codex CLI bridge plugin for DeepSeek Harness with host tools and a Web conversation tab.
- [Demogorgon314/dsh-resume-plugin](https://github.com/Demogorgon314/dsh-resume-plugin) ★1 · `dsh-resume-plugin` — 让 DeepSeek Harness 安全读取并继续 Codex 与 Claude Code 的历史会话。
- [PangYiMing/dsh-batch-regression](https://github.com/PangYiMing/dsh-batch-regression) ★1 · `dsh-batch-regression` — DSH plugin: run a command N rounds, judge by median/distribution — 批量回归取统计结论
- [PangYiMing/dsh-port-guard](https://github.com/PangYiMing/dsh-port-guard) ★1 · `dsh-port-guard` — DSH plugin: triage port conflicts (reuse / switch / precise kill) — 端口占用处置
- [qyw233/dsh-deeplink](https://github.com/qyw233/dsh-deeplink) ★1 · `@dsh-community/dsh-deeplink` — DSH WebUI 深链插件：?session=/?workspace= 直接打开指定项目对话
- [omdsh-dev/session-teleport](https://github.com/omdsh-dev/session-teleport) ★1 · `@mattheliu/session-teleport` — PostgreSQL-backed single-writer session handoff service for DeepSeek Harness
- [ilharp/dsh-tool-approval](https://github.com/ilharp/dsh-tool-approval) ★1 · `dsh-tool-approval` — Manual approval for Deepseek Harness (aka "Manual Mode"/"Ask Mode")
- [Small-tailqwq/dsh-tps](https://github.com/Small-tailqwq/dsh-tps) ★1 · `@dsh-external/tps` — 只是一个 tps 插件
- [vibeinging/dsh-turn-navigator](https://github.com/vibeinging/dsh-turn-navigator) ★1 · `@deepseek-ai/dsh-turn-navigator` — Private DSH Web turn navigation plugin
- [huahai0202/dsh-better-archive](https://github.com/huahai0202/dsh-better-archive) ★1 · `dsh-better-archive` — DeepSeek Harness (DSH) web-GUI plugin: archived-session panel with unarchive & delete
- [sanshanya/better-model-provider](https://github.com/sanshanya/better-model-provider) ★1 · `better-model-provider` — Per-model capability declaration for DeepSeek Harness: reasoning-effort levels (wire spellings) + request modalities (vision) for OpenAI-compatible providers. Settings section, zero runtime harness deps, no YAML.
- [CZX2244/dsh-bilibili](https://github.com/CZX2244/dsh-bilibili) ★1 · `dsh-bilibili` — DeepSeek Harness tool plugin: analyze Bilibili videos — transcript first, subtitle-driven keyframes, model summaries
- [Xenia0922/dsh-opencode-go-usage](https://github.com/Xenia0922/dsh-opencode-go-usage) ★1 · `dsh-opencode-go-usage` — DeepSeek Harness 插件:OpenCode Go 用量与花费悬浮仪表盘(配额、逐请求成本、模型/来源分布)
- [Jolly-J/dsh-deepseek-billing](https://github.com/Jolly-J/dsh-deepseek-billing) ★1 · `dsh-deepseek-billing` — DSH WebUI 插件:DeepSeek 余额显示与按会话费用估算
- [quan2005/dsh-plugin-jinji](https://github.com/quan2005/dsh-plugin-jinji) ★1 · `dsh-plugin-jinji` — 把「记忆」带进 DeepSeek Harness：极简文本记忆系统，双轨记忆（流水日志 + 人物/产品实体画像），大模型为核心驱动。无需安装其他软件，无需编译，无第三方依赖。
- [inmny/dsh-git-bash](https://github.com/inmny/dsh-git-bash) ★1 · `dsh-plugin-git-bash` — Use Git for Windows Bash as the default DSH shell with restricted-mode support
- [bobcat848/dsh-calculator](https://github.com/bobcat848/dsh-calculator) ★1 · `dsh-calculator` — Calculate the real-time cost of DeepSeek API calls made by DeepSeek Harness.
- [Leon0555/dsh-lan-access](https://github.com/Leon0555/dsh-lan-access) ★1 · `dsh-lan-access` — DSH plugin: bind the Web GUI to 0.0.0.0 for LAN access and polyfill crypto.randomUUID for non-secure (LAN HTTP) contexts. Trusted networks only.
- [Spirtxiaoqi7/mindspace-dsh-local-rag](https://github.com/Spirtxiaoqi7/mindspace-dsh-local-rag) ★1 · `mindspace-dsh-local-rag` — ARPM-derived local hybrid RAG plugin for DeepSeek Harness
- [beancookie/dsh-plugin-anydoc](https://github.com/beancookie/dsh-plugin-anydoc) ★1 · `dsh-plugin-anydoc` — DSH 插件：基于 @firecrawl/anydoc 将 Word、PPT、Excel、PDF、EPUB、CSV 等文档转换为 GitHub-Flavored Markdown
- [v587d/dsh-opencode-go-usage](https://github.com/v587d/dsh-opencode-go-usage) ★1 · `dsh-ocgo-usage` — A DeepSeek Harness (dsh) bundle that shows OpenCode Go subscription usage in the Web GUI's composer dock — the same seat as the built-in conversation stats line.
- [yflmq001/dsh-cost-tracker](https://github.com/yflmq001/dsh-cost-tracker) ★1 · `dsh-cost-tracker` — Token cost tracking for DeepSeek Harness
- [Aidenwu0209/dsh-Unlimited-OCR-Skill](https://github.com/Aidenwu0209/dsh-Unlimited-OCR-Skill) ★1 · `dsh-unlimited-ocr-skill` — Unlimited-OCR for DeepSeek Harness with a native tool and GUI configuration
- [fflow2023/dsh-usage-cost](https://github.com/fflow2023/dsh-usage-cost) ★1 · `@fflow2023/dsh-usage-cost` — Lightweight DeepSeek Harness plugin: per-session + global API cost stats (peak/off-peak pricing)
- [Uddoo/dsh-dashboard](https://github.com/Uddoo/dsh-dashboard) ★1 · `dsh-dashboard` — Symphony-compatible Linear issue orchestrator and native operations dashboard for DeepSeek Harness.
- [GuoMonth/dsh-multi-tenant](https://github.com/GuoMonth/dsh-multi-tenant) ★1 · `dsh-multi-tenant` — Multi-tenant SaaS extension for DeepSeek Harness (DSH): tenant identity, session isolation, authorization, tenant-aware MCP, and audit.
- [linyp/dsh-plugin-langfuse](https://github.com/linyp/dsh-plugin-langfuse) ★1 · `dsh-plugin-langfuse` — Langfuse observability for DeepSeek Harness (dsh): exports agent sessions as OpenTelemetry trace trees (GenAI semconv) to Langfuse's OTLP endpoint
- [fryghost/deepseek-eyes](https://github.com/fryghost/deepseek-eyes) ★1 · `deepseek-eyes` — Community plugin for DeepSeek Harness: give text-only models eyes - paste images natively, described via an OpenAI-compatible vision API
- [luoyu-xingu/dsh-background](https://github.com/luoyu-xingu/dsh-background) ★1 · `dsh-background` — DeepSeek Harness Web 背景图片插件:本地图片路径替换网页背景,外观设置行 + 实时预览
- [forrestsweet/dsh-agent-replay](https://github.com/forrestsweet/dsh-agent-replay) ★1 · `dsh-agent-replay` — DeepSeek Harness 会话回放与脱敏分享插件：将真实 Agent 轨迹导出为独立交互 HTML，用于文档、演示和问题反馈。
- [PerryLink/dsh-mcp-panel](https://github.com/PerryLink/dsh-mcp-panel) ★1 · `dsh-mcp-panel` — Read-only runtime management panel for the official DeepSeek Harness MCP client: /mcp command + Settings MCP tab with status, tools, errors, reconnect counts, sanitized display and controlled patch suggestions (Apache-2.0, dsh-plugin).
- [arcmosin/dsh-wordbox](https://github.com/arcmosin/dsh-wordbox) ★1 · `dsh-wordbox` — DSH Web GUI常用词箱子，方便项目常用词的存储和粘贴 | DSH Web GUI Common Words Box – for storing and pasting frequently used project terms."
- [baidd1011/dsh-code-impact](https://github.com/baidd1011/dsh-code-impact) ★1 · `dsh-code-impact` — 面向 DeepSeek Harness 的只读 TypeScript/JavaScript 代码变更影响分析插件 Read-only TypeScript/JavaScript change impact analysis plugin for DeepSeek Harness
- [Aidenwu0209/dsh-PaddleOCR-Skills](https://github.com/Aidenwu0209/dsh-PaddleOCR-Skills) ★1 · `dsh-paddleocr-skills` — PaddleOCR skills for DeepSeek Harness with native tools and GUI configuration
- [Yummyxl/dsh-eyecare](https://github.com/Yummyxl/dsh-eyecare) ★1 · `dsh-eyecare` — dsh护眼插件
- [hahaha-taotao/dsh-oauth-api](https://github.com/hahaha-taotao/dsh-oauth-api) ★1 · `dsh-oauth` — DeepSeek Harness (dsh) out-of-tree OAuth plugin for Grok/xAI, Codex, and Claude Code. Community plugin, not official.
- [dongsheng123132/dsh-audit-bundle](https://github.com/dongsheng123132/dsh-audit-bundle) ★1 · `dsh-audit-bundle` — Content-addressed audit indexes across independent DeepSeek Harness evidence producers
- [Seryta/dsh-node-nav](https://github.com/Seryta/dsh-node-nav) ★1 · `dsh-node-nav` — 对话节点导航：DSH Web GUI 右侧节点串，hover 预览、点击跳转、active 药丸跟随阅读位置
- [AmaTsumeAkira/opencode-usage](https://github.com/AmaTsumeAkira/opencode-usage) ★1 · `opencode-usage` — OpenCode Go 订阅额度徽章插件（dsh bundle） | OpenCode Go quota badge plugin for dsh
- [zhang66633/dsh-plugin-installer](https://github.com/zhang66633/dsh-plugin-installer) ★1 · `dsh-plugin-installer` — Install & troubleshoot DeepSeek Harness (dsh) plugins — painlessly, even for complete beginners. Ships as a bundled skill-provider plugin.
- [YKennen/dsh-zh-output](https://github.com/YKennen/dsh-zh-output) ★1 · `dsh-zh-output` — DeepSeek Harness 中文输出插件：强制中文思考与输出的中文预设
- [hellosky983/dsh-skillradar](https://github.com/hellosky983/dsh-skillradar) ★1 · `dsh-skillradar` — Skill Radar for DeepSeek Harness (dsh): scan the current session's visible skills, score relevance against the conversation, and recommend which skill to load.
- [kam74515-boop/dsh-everything-oauth](https://github.com/kam74515-boop/dsh-everything-oauth) ★1 · `dsh-everything-oauth` — Import local Codex / Grok / Claude / OpenCode / CC Switch logins into DeepSeek Harness
- [TIZ36/evo-memory](https://github.com/TIZ36/evo-memory) ★1 · `evo-memory` — agent memory plugin based on CLP
- [MysaDC/dsh-plugin-description](https://github.com/MysaDC/dsh-plugin-description) ★1 · `dsh-plugin-description` — mount one row in the composition and every plugin card on the Web Settings plugin list page gets a bilingual (zh/en) description; it also publishes the pluginDescriptions service so other plugins can register their own descriptions.
- [arrow949/dsh-turn-approval](https://github.com/arrow949/dsh-turn-approval) ★1 · `dsh-turn-approval` — Turn-scoped "Allow for this task" approvals for DeepSeek Harness.
- [Elohia/dsh-plugin-mm-vision](https://github.com/Elohia/dsh-plugin-mm-vision) ★1 · `dsh-plugin-mm-vision` — mm-vision (通感编码器) for DeepSeek Harness — give any text-only LLM the ability to see images via structured spatial text encoding. Registers the mm\_vision tool.
- [dongsheng123132/dsh-policy-drift-proof](https://github.com/dongsheng123132/dsh-policy-drift-proof) ★1 · `dsh-policy-drift-proof` — Content-addressed, value-redacted policy drift evidence for DeepSeek Harness
- [miaobuao/dsh-document-parser](https://github.com/miaobuao/dsh-document-parser) ★1 · `dsh-document-parser` — A DeepSeek Harness document parsing tool powered by LiteParse
- [ang-XWBWZ/dsh-approval-ai](https://github.com/ang-XWBWZ/dsh-approval-ai) ★1 · `@llangtop/dsh-approval-ai` — AI approval answerer for DeepSeek Harness (DSH) using the unified LLM route with fail-closed policy checks.
- [Luke-Yong/dsh-plugin-knowledge-graph](https://github.com/Luke-Yong/dsh-plugin-knowledge-graph) ★1 · `dsh-plugin-knowledge-graph` — dsh-plugin-knowledge-graph for Deepseek Harness
- [EvilIrving/dsh-repro](https://github.com/EvilIrving/dsh-repro) ★1 · `dsh-repro` — Minimal, secret-scrubbed, replayable problem bundles for DeepSeek Harness sessions (/repro).
- [EvilIrving/dsh-proof](https://github.com/EvilIrving/dsh-proof) ★1 · `dsh-proof` — Read-only acceptance layer for DeepSeek Harness: a verifier gates every turn and steers gaps back into the agent.
- [dongsheng123132/dsh-capability-receipt](https://github.com/dongsheng123132/dsh-capability-receipt) ★1 · `dsh-capability-receipt` — Content-addressed receipts for skills actually loaded by DeepSeek Harness
- [kerwin2046/dsh-pin-recall](https://github.com/kerwin2046/dsh-pin-recall) ★1 · `dsh-pin-recall` — DeepSeek Harness plugin: pin assistant replies and recall them into the model turn
- [lynx-gt/dsh-subagent-cwd](https://github.com/lynx-gt/dsh-subagent-cwd) ★1 · `dsh-subagent-cwd` — DeepSeek Harness subagent delegation enhancement
- [lynx-gt/dsh-subagent-tools](https://github.com/lynx-gt/dsh-subagent-tools) ★1 · `dsh-subagent-tools` — DeepSeek Harness subagent delegation enhancement
- [dongsheng123132/dsh-narrative-ledger](https://github.com/dongsheng123132/dsh-narrative-ledger) ★1 · `dsh-narrative-ledger` — Verifiable narrative state, continuity and character-knowledge ledger for DeepSeek Harness
- [dongsheng123132/dsh-action-parity](https://github.com/dongsheng123132/dsh-action-parity) ★1 · `dsh-action-parity` — Cross-surface action binding and replay parity evidence for DeepSeek Harness
- [MOLAaaaaaaa/dsh-seismicx](https://github.com/MOLAaaaaaaa/dsh-seismicx) ★1 · `dsh-seismicx` — DeepSeek Harness plugin for the SeismicX earthquake-catalog skill
- [addxing/conservative-code-edits](https://github.com/addxing/conservative-code-edits) ★0 · `dsh-skill-conservative-code-edits` — 面向各类 AI 编程代理的保守代码修改守则 Skill，用于约束代理在已有项目中进行最小必要改动，避免无关重构，保护公共基础代码，并在支持深色模式的项目中优先使用动态颜色资源     An agent skill for keeping code changes small, scoped, and project-safe. Works with any AI coding tool that supports skills
- [wly8691-jpg/knowlp-rag](https://github.com/wly8691-jpg/knowlp-rag) ★0 · `@wly8691-jpg/knowlp-rag` — KnowLP-RAG: dual knowledge graph retrieval for Markdown notes - MCP stdio server for DeepSeek Harness (dsh) & Claude Code
- [Meredith2328/dsh-sidebar-mode](https://github.com/Meredith2328/dsh-sidebar-mode) ★0 · `dsh-sidebar-mode` — 把默认的四种模式切换塞进「新会话」按钮里，新会话创建更方便（标准/PTC/创造/极简，与设置双向同步）
- [RNlao/dsh-wallpaper](https://github.com/RNlao/dsh-wallpaper) ★0 · `dsh-wallpaper` — DSH wallpaper plugin: choose an image/gradient as the DSH web background, with local-folder browsing, crop, blur, dim, panel translucency and position controls.
- [cyanseek/dsh-landscape](https://github.com/cyanseek/dsh-landscape) ★0 · `dsh-landscape` — Agent-first DeepSeek Harness plugin intelligence: verify existing plugins, identify missing capabilities, and generate build-ready briefs.
- [smanx/dsh-conversation-indicator](https://github.com/smanx/dsh-conversation-indicator) ★0 · `dsh-conversation-indicator` — Conversation indicator plugin for the DeepSeek Harness web GUI: a compact rail beside the scrollbar marks each user message; hover for the summary, click to jump. / DeepSeek Harness Web GUI 对话指示器插件：滚动条旁紧凑面板标记每条用户消息，悬停看摘要，点击跳转。
- [Xplore-LAB/dsh-plugin-asmemory](https://github.com/Xplore-LAB/dsh-plugin-asmemory) ★0 · `dsh-plugin-asmemory` — Action-State Memory Engine: typed time-series memory (states + actions) with trend/anomaly/causal analysis for DeepSeek Harness
- [Arnoldkevin/prismrelay-mcp](https://github.com/Arnoldkevin/prismrelay-mcp) ★0 · `prismrelay-mcp` — Vision-first local MCP that gives text-only Agents image understanding through Agnes AI (BYOK).
- [ycp424c/dsh-luna-vision-bridge](https://github.com/ycp424c/dsh-luna-vision-bridge) ★0 · `@ycp424c/dsh-luna-vision-bridge` — DSH adapter that transcribes native image attachments with Codex Luna before delegating to DeepSeek
- [Chi-hong22/dsh-mdbox](https://github.com/Chi-hong22/dsh-mdbox) ★0 · `@chi-hong22/dsh-mdbox` — DeepSeek Harness (DSH) Web 输入框的 Markdown 编辑辅助插件。
- [causebefore/dsh-pomodoro](https://github.com/causebefore/dsh-pomodoro) ★0 · `dsh-pomodoro` — DeepSeek Harness Web 番茄钟插件：可配置专注与休息时长，提供侧栏入口和可拖动浮动面板
- [csiroqa/dsh-command-opt](https://github.com/csiroqa/dsh-command-opt) ★0 · `@dsh-external/dsh-command-opt` — DeepSeek Harness（DSH）命令优化插件：Tab/Enter 补全命令名、参数格式引导与提示弹框、tool 开启会话（subagent）补丁、空对话命令输出修复。Command optimization plugin for DeepSeek Harness.
- [HongzhongL/dsh-hotswap](https://github.com/HongzhongL/dsh-hotswap) ★0 · `dsh-hotswap` — Runtime hot-swap for DeepSeek Harness plugins: hot enable/disable/restart and auto hot-mount bundles from the Web GUI — no dsh restart.
- [csiroqa/dsh-hotkeys](https://github.com/csiroqa/dsh-hotkeys) ★0 · `@dsh-plugin/hotkeys` — DeepSeek Harness（DSH）全局快捷键插件：会话切换、发送/清空草稿、停止生成、复制与归档，键位可在设置中自定义。Global keyboard shortcuts plugin for DeepSeek Harness.
- [Kevoyuan/dsh-mac-vision](https://github.com/Kevoyuan/dsh-mac-vision) ★0 · `dsh-mac-vision` — On-device macOS OCR and Apple Vision for DeepSeek Harness — one native plugin with a bundled Skill.
- [Lbryany/dsh-codebuddy](https://github.com/Lbryany/dsh-codebuddy) ★0 · `@lbryany/dsh-codebuddy` — CodeBuddy OAuth, dynamic models, and reasoning controls for DeepSeek Harness
- [misakimiku2/dsh-cost-display](https://github.com/misakimiku2/dsh-cost-display) ★0 · `dsh-cost-display` — DeepSeek Harness 成本显示插件
- [malevrigns/dsh-session-stars](https://github.com/malevrigns/dsh-session-stars) ★0 · `dsh-session-stars` — Favorite DeepSeek Harness Sessions and reopen them from a global cross-Workspace center.
- [cyanseek/dsh-native-playbook](https://github.com/cyanseek/dsh-native-playbook) ★0 · `dsh-native-playbook` — Native capability guide for DeepSeek Harness — installable DSH runtime plugin, Agent Skill, and CLI.
- [DTSFO/dsh-conversation-rewind](https://github.com/DTSFO/dsh-conversation-rewind) ★0 · `dsh-conversation-rewind` — Append-only conversation rewind and safe message editing for DeepSeek Harness
- [1a125/dsh-mcp-manager](https://github.com/1a125/dsh-mcp-manager) ★0 · `dsh-mcp-manager` — DSH global MCP manager
- [vvlife/dsh-agnes-paseo](https://github.com/vvlife/dsh-agnes-paseo) ★0 · `dsh-agnes-paseo` — DeepSeek Harness (dsh) 插件：接入 Agnes AI 模型网关，并一键把 dsh 注册为 Paseo 的 ACP provider
- [sliverp/DeepSeek-harness-dingtalk](https://github.com/sliverp/DeepSeek-harness-dingtalk) ★0 · `deepseek-harness-dingtalk` — DingTalk Stream text and image channel plugin for DeepSeek Harness
- [hashdiana/dsh-archived-sessions](https://github.com/hashdiana/dsh-archived-sessions) ★0 · `dsh-archived-sessions` — 在设置面板中新增“已归档会话”分区：列出被归档的会话（默认在侧边栏不可见），点击即可重新打开
- [Jesse-njx/dsh-crosstalk](https://github.com/Jesse-njx/dsh-crosstalk) ★0 · `@dsh-crosstalk/bundle` — Cross-session messaging for DSH — any session on the machine can list and message any other, Claude Code-style
- [xavier711/dsh-deepseek-usage](https://github.com/xavier711/dsh-deepseek-usage) ★0 · `@xavier711/dsh-deepseek-usage` — A DeepSeek usage panel plugin for the DeepSeek Harness Web GUI. It adds a 「Usage / 用量」 entry at the bottom of the left sidebar.
- [xinmo114514/dsh-prompt-optimizer](https://github.com/xinmo114514/dsh-prompt-optimizer) ★0 · `dsh-prompt-optimizer` — DSH 持久化 Web 插件（prompt-optimizer）：在输入框模型选择器左侧提供「优化提示词」按钮——用当前所选模型把模糊需求改写成可执行的优质提示词；优化期间输入框呈现跑马彩虹渐变边框并锁定输入，输入框上方显示优化状态。
- [kirkchinese/Claudecode--DSH](https://github.com/kirkchinese/Claudecode--DSH) ★0 · `claude2dsh` — To hell with ClaudeCode!
- [ChengChe106/dsh-session-cost](https://github.com/ChengChe106/dsh-session-cost) ★0 · `dsh-session-cost` — DSH plugin: estimated DeepSeek API cost per session in the web GUI stats strip
- [YiHarvest/dsh-failure-capsule](https://github.com/YiHarvest/dsh-failure-capsule) ★0 · `dsh-failure-capsule` — Local-first failure evidence capsules for DeepSeek Harness sessions
- [Bald0Wang/dsh-imggenerate](https://github.com/Bald0Wang/dsh-imggenerate) ★0 · `dsh-image-gen` — DeepSeek Harness plugin: image\_generate tool with qwen-image-3.0 (Aliyun MaaS) and doubao-seedream (Volcano Ark) providers
- [omdsh-dev/dsh-essential](https://github.com/omdsh-dev/dsh-essential) ★0 · `@deepseek-ai/dsh-essential` — 为 DeepSeek Harness 提供可恢复的对话删除能力，支持菜单集成、即时隐藏与重启安全归档
- [sherconan/dsh-entity-dd](https://github.com/sherconan/dsh-entity-dd) ★0 · `dsh-entity-dd` — 出海交易对手尽调 · DeepSeek Harness 插件：先确认你在跟哪个法人签约，再判断这份登记资料能不能作为决策依据。免费官方数据源，无需密钥。
- [tdf1995/dsh-plugin-vision](https://github.com/tdf1995/dsh-plugin-vision) ★0 · `dsh-plugin-vision` — Vision for text-only LLMs in DeepSeek Harness (DSH): describe images / OCR / VQA via free Gemini & GLM vision APIs
- [caopu16/dsh-llm-kiro](https://github.com/caopu16/dsh-llm-kiro) ★0 · `dsh-llm-kiro` — deepseek-harness 的插件，可以使用kiro的模型（claude系列）和账号
- [qinyu765/dsh-llm-auto-route](https://github.com/qinyu765/dsh-llm-auto-route) ★0 · `dsh-llm-auto-route` — Provider discovery, matching, health checks, and pre-output failover for DeepSeek Harness
- [CaseyTso/analyze_image_tool](https://github.com/CaseyTso/analyze_image_tool) ★0 · `analyze-image-tool` — A vision bridge for text-only DeepSeek Harness models: registers an \`analyze\_image\` tool that answers questions about images via ANY OpenAI-compatible vision/multimodal endpoint (SiliconFlow, DashScope, Zhipu, OpenRouter, Ollama, ...).
- [a903067276-rgb/dsh-hud](https://github.com/a903067276-rgb/dsh-hud) ★0 · `dsh-hud` — HUD status panel plugin for DeepSeek Harness (dsh) web: git status, MCP servers, skills, model & token usage in a floating panel
- [Stone623/ai_skills](https://github.com/Stone623/ai_skills) ★0 · `dsh-daydream-break` — A playful Codex skill that lets the agent briefly zone out, recap state, and continue.
- [disyli/dsh-tool-stats](https://github.com/disyli/dsh-tool-stats) ★0 · `dsh-tool-stats` — DeepSeek Harness plugin: per-process tool usage statistics (tool\_stats tool with call counts, error counts, avg durations)
- [QCYTSN/dsh-dafeiyu](https://github.com/QCYTSN/dsh-dafeiyu) ★0 · `dsh-dafeiyu` — Desktop-native BigFish companion for DeepSeek Harness — real Agent status, always on top on Windows.
- [m-guo-2/dsh-delayed-task](https://github.com/m-guo-2/dsh-delayed-task) ★0 · `dsh-delayed-task` — Durable delayed decisions for DeepSeek Harness
- [minybear/DeepSeek-Harness-Pet](https://github.com/minybear/DeepSeek-Harness-Pet) ★0 · `@minybear/dsh-pet` — Codex-style desktop pet plugin for DeepSeek Harness
- [xiaoxiaosrm/dsh-mattpocock-skills](https://github.com/xiaoxiaosrm/dsh-mattpocock-skills) ★0 · `@mattpocock-community/dsh-engineering-skills` — Unofficial DSH port of mattpocock/skills — Engineering (18) + Productivity (7) skills as a DeepSeek Harness bundle plugin. MIT, © Matt Pocock. Star the upstream repo!
- [winyh/dsh-growth](https://github.com/winyh/dsh-growth) ★0 · `dsh-growth` — Growth acquisition and user growth analysis for DeepSeek Harness: AARRR, retention, MRR, experiments and unit economics.
- [gezi-wen/sage-meta](https://github.com/gezi-wen/sage-meta) ★0 · `sage-meta` — Sage meta plugin: delivery self-check before the agent finishes a turn
- [qizhen2021/dsh-plugin-vision](https://github.com/qizhen2021/dsh-plugin-vision) ★0 · `@qizhen2021/dsh-plugin-vision` — The see tool for the DeepSeek Harness: offline OCR with positions (macOS Vision) + ASCII layout art (PIL) + vision-model semantic description (mimo-v2.5 via the opencode-go gateway). Works with any model, including text-only ones.
- [Haoran2099/focal-dsh](https://github.com/Haoran2099/focal-dsh) ★0 · `focal-dsh` — Task-isolated, privacy-first memory for DeepSeek Harness
- [yingjunnan/dsh-deepseek-quota](https://github.com/yingjunnan/dsh-deepseek-quota) ★0 · `dsh-deepseek-quota` — DeepSeek API quota (balance) widget for the DSH web GUI: a floating bottom-right card showing remaining DeepSeek API balance.
- [leaveimagination/dsh-qwen-voice](https://github.com/leaveimagination/dsh-qwen-voice) ★0 · `dsh-qwen-voice` — Voice control and multi-session task dispatch for DeepSeek Harness, powered by Qwen Audio Agent
- [ciceroyang/dsh-report-studio](https://github.com/ciceroyang/dsh-report-studio) ★0 · `dsh-report-studio` — Turn a DeepSeek Harness session into deliverable work reports (daily/weekly/handoff/article) with verifiable receipts
- [mindcarver/dsh-codex-canvas](https://github.com/mindcarver/dsh-codex-canvas) ★0 · `dsh-codex-canvas` — DeepSeek Harness plugin: image\_gen tool backed by Codex CLI (gpt-image-2)
- [walnut-a/dsh-user-message-navigation](https://github.com/walnut-a/dsh-user-message-navigation) ★0 · `dsh-user-message-navigation` — DSH User Message Minimap（用户消息导航轨）— 长对话中的用户指令快速导航插件
- [Howe829/dsh-sonar](https://github.com/Howe829/dsh-sonar) ★0 · `dsh-sonar` — Draggable deep-sea token and context dashboard for DeepSeek Harness
- [LaoYueHanNi/dsh-token-usage](https://github.com/LaoYueHanNi/dsh-token-usage) ★0 · `dsh-token-usage` — dsh local plugin: persist per-request model token usage (live hook + manual history sync command + web settings stats page)
- [lingtima/dsh-think-chinese](https://github.com/lingtima/dsh-think-chinese) ★0 · `dsh-think-chinese` — DSH 插件：让模型始终用中文进行内部推理与思考（think in Chinese）。
- [sleepinginsummer/dsh-rtk-optimizer](https://github.com/sleepinginsummer/dsh-rtk-optimizer) ★0 · `dsh-rtk-optimizer` — RTK command rewriting suggestions + tool output compaction for DSH. Suggests rtk-rewritten bash commands (deny-mode under rewrite) and compacts noisy tool output (bash/grep/read) to reduce context usage. Port of pi-rtk-optimizer for the Pi coding agent.
- [AtlasCloudAI/dsh-atlascloud](https://github.com/AtlasCloudAI/dsh-atlascloud) ★0 · `dsh-atlascloud` — Atlas Cloud skills and opt-in MCP tools for DeepSeek Harness
- [SkySheep1999/dsh-polish-prompts](https://github.com/SkySheep1999/dsh-polish-prompts) ★0 · `dsh-prompt-polish` — deepseek harness 下快速润色/精炼提示词插件
- [blueWhalei/dsh-verify-gate](https://github.com/blueWhalei/dsh-verify-gate) ★0 · `dsh-verify-gate` — Require workspace verification before conclude | 结案前须跑通工作区验证命令
- [superslash-rico/dsh-plugin-slashx-gateway](https://github.com/superslash-rico/dsh-plugin-slashx-gateway) ★0 · `dsh-plugin-slashx-gateway` — DeepSeek Harness host bundle for SlashX request, response, rich media, async callbacks, and complete token metering
- [hccccc01333/dsh-analytics](https://github.com/hccccc01333/dsh-analytics) ★0 · `dsh-analytics` — Agent FinOps / token analytics for DeepSeek Harness: usage collection, time-aware cost engine, cache analysis, and session drill-down
- [zcXie777/dsh-image-reader](https://github.com/zcXie777/dsh-image-reader) ★0 · `dsh-image-reader` — Give DeepSeek Harness agents native image reading: a read\_image tool backed by any OpenAI-compatible vision endpoint.
- [andiven/dsh-messaging](https://github.com/andiven/dsh-messaging) ★0 · `@dsh-messaging/messaging` — Multi-platform messaging plugin for DeepSeek Harness — Feishu/Telegram with capability auto-degradation
- [YOLO-LZL/dsh-ssh-plugin](https://github.com/YOLO-LZL/dsh-ssh-plugin) ★0 · `dsh-ssh-plugin` — SSH tool plugin for DeepSeek Harness: persisted SSH connections, workspace-bound defaults, and the ssh\_exec model tool
- [ookami-change/dsh-plugin-starter](https://github.com/ookami-change/dsh-plugin-starter) ★0 · `dsh-plugin-starter` — Minimal installable plugin starter for DeepSeek Harness.
- [lanlandeli/dsh-usage-stats](https://github.com/lanlandeli/dsh-usage-stats) ★0 · `dsh-usage-stats` — DeepSeek Harness 精美 Token 数据面板：趋势图、活跃热力图、模型用量分析与 CSV/JSON 导出。
- [lisycotana/dsh-code-lens](https://github.com/lisycotana/dsh-code-lens) ★0 · `dsh-code-lens` — Observability for DeepSeek Harness code-mode sub-dispatches: the tool calls a run\_code program makes that the model never sees.
- [LKRCharon/dsh-egress-guard](https://github.com/LKRCharon/dsh-egress-guard) ★0 · `dsh-egress-guard` — Local, zero-network, fail-closed secret preflight for DeepSeek Harness model requests.
- [NexusAgentX/dsh-mcp-adapter](https://github.com/NexusAgentX/dsh-mcp-adapter) ★0 · `dsh-mcp-adapter` — MCP adapter for DeepSeek Harness — one proxy tool instead of dumping every MCP schema into context.
- [AIMFllyYS/dsh-operating-context](https://github.com/AIMFllyYS/dsh-operating-context) ★0 · `dsh-operating-context` — DeepSeek Harness settings page: cap every configured model to a working context window, clamped to what it can actually hold.
- [cakeni/harness-pet](https://github.com/cakeni/harness-pet) ★0 · `harness-pet` — Harness Pet — an unofficial community pet for DeepSeek Harness. Not affiliated with, endorsed by, or maintained by DeepSeek.
- [echo-xianyu/dsh-go-rotator](https://github.com/echo-xianyu/dsh-go-rotator) ★0 · `dsh-go-rotator` — A plugin for DSH to swich opencode Go subscription
- [fishxcode/dsh-plugin-deepseek-balance](https://github.com/fishxcode/dsh-plugin-deepseek-balance) ★0 · `dsh-plugin-deepseek-balance` — DeepSeek Harness Web client plugin that displays real-time DeepSeek API balance.
- [Stormycry-cryp/dsh-AuthInOne](https://github.com/Stormycry-cryp/dsh-AuthInOne) ★0 · `dsh-auth-in-one` — DSH-native provider API configuration, model switching, and auditable token/cost analytics for DeepSeek Harness.
- [ch1bug/dsh-wsl-bridge](https://github.com/ch1bug/dsh-wsl-bridge) ★0 · `dsh-wsl-bridge` — Windows access tools for WSL agents: win\_ls/win\_read/win\_write/win\_run/win\_open/win\_path/win\_drives as a DeepSeek Harness bundle
- [weiyuou-chowbus/dsh-git-status](https://github.com/weiyuou-chowbus/dsh-git-status) ★0 · `dsh-git-status` — DeepSeek Harness (DSH) web plugin — live git branch indicator with branch switching in the composer tool row
- [fountunt/dsh-session-cleaner](https://github.com/fountunt/dsh-session-cleaner) ★0 · `dsh-session-cleaner` — Delete DeepSeek Harness sessions from the running web runtime: live store detach, workspace records, and on-disk artifacts.
- [wuxinzhe/dsh-speech-sherpa](https://github.com/wuxinzhe/dsh-speech-sherpa) ★0 · `dsh-speech-sherpa` — DeepSeek Harness 本地离线语音插件：STT 语音识别 + TTS 语音合成 + WebUI 按住说话（Sherpa-ONNX）
- [1HelloMan1/dsh-stats-dashboard](https://github.com/1HelloMan1/dsh-stats-dashboard) ★0 · `dsh-stats-dashboard` — DSH plugin: provider/model usage stats dashboard with response speed, call log, token totals, cache rate, cost estimates, CSV export
- [zhangzujian/dsh-same-mode-sandbox-noop](https://github.com/zhangzujian/dsh-same-mode-sandbox-noop) ★0 · `@zhangzujian/dsh-same-mode-sandbox-noop` — DSH compatibility plugin for redundant same-mode sandbox escalation requests
- [zimai233/dsh-video-downloader](https://github.com/zimai233/dsh-video-downloader) ★0 · `dsh-video-downloader` — Media downloader for DeepSeek Harness. Detect and download video/audio from Bilibili, YouTube, Douyin, Xiaohongshu.
- [zimai233/dsh-adhd-copilot](https://github.com/zimai233/dsh-adhd-copilot) ★0 · `dsh-adhd-copilot` — ADHD behavioral coaching skill for DeepSeek Harness. Guides readers through task execution - breaks tasks into micro-steps, manages overwhelm, provides launch rituals, calibrates time estimates, and recovers from self-blame.
- [zimai233/dsh-exam-countdown](https://github.com/zimai233/dsh-exam-countdown) ★0 · `dsh-exam-countdown` — Chinese exam countdown for DeepSeek Harness. Query 64 built-in exams (gaokao, kaoyan, civil service, CET-4/6, CPA, bar exam...) and get days-until dates computed by pure date math with rolling yearly recurrence.
- [Equinox7379/dsh-update-radar](https://github.com/Equinox7379/dsh-update-radar) ★0 · `dsh-update-radar` — Update radar for DSH: checks installed plugins against git upstreams.
- [Equinox7379/dsh-session-repair](https://github.com/Equinox7379/dsh-session-repair) ★0 · `dsh-session-repair` — Session log repair for DSH: fixes SessionFormatUnsupportedError by marking unknown events ignorable.
- [Equinox7379/dsh-daily-brief](https://github.com/Equinox7379/dsh-daily-brief) ★0 · `dsh-daily-brief` — Daily activity brief for DSH: per-session turns/messages/tool-call stats. Read-only.
- [Nunchakus888/dsh-turn-budget](https://github.com/Nunchakus888/dsh-turn-budget) ★0 · `dsh-turn-budget` — Fail-closed per-turn step, tool-call, and provider-token budgets for DeepSeek Harness
- [zhangzujian/dsh-subprocess-inherit-environment](https://github.com/zhangzujian/dsh-subprocess-inherit-environment) ★0 · `@zhangzujian/dsh-subprocess-inherit-environment` — DSH plugin that forwards the complete Harness environment through ctx.subprocess
- [tkr520521/dsh-team-runner](https://github.com/tkr520521/dsh-team-runner) ★0 · `dsh-team-runner` — Multi-agent orchestration plugin for DeepSeek Harness: team presets, subagent delegation, sequential pipelines, and policy gates.
- [EvilIrving/dsh-context-proxy](https://github.com/EvilIrving/dsh-context-proxy) ★0 · `dsh-context-proxy` — On-demand context retrieval for DeepSeek Harness: context\_query / context\_slice / context\_grep tools.
- [yangYzc/dsh-plugin-quote-reply](https://github.com/yangYzc/dsh-plugin-quote-reply) ★0 · `dsh-plugin-quote-reply` — DSH plugin: select text in a conversation, then quote it into the composer or reply in a new window. / DeepSeek Harness 划词引用插件：选中文字一键引用回复或新窗口回复。
- [fishlikewater/dsh-mcp-manager](https://github.com/fishlikewater/dsh-mcp-manager) ★0 · `dsh-mcp-manager` — MCP 服务器管理器：在 DSH 设置页配置 MCP 服务器，宿主侧按配置热挂载/卸载 mcp-client 实例
- [sublatesublate-design/dsh-doctor-windows](https://github.com/sublatesublate-design/dsh-doctor-windows) ★0 · `dsh-doctor-windows` — Windows environment diagnostics for DeepSeek Harness
- [wuwangmao/dsh-qwen-multimodal](https://github.com/wuwangmao/dsh-qwen-multimodal) ★0 · `dsh-qwen-multimodal` — DSH bundle: Qwen multimodal bridge — vision (qwen3-vl), speech-to-text (qwen3-asr), text-to-image (qwen-image), for DeepSeek Harness
- [youjiaqi421/dsh-plugin-workspace-rules](https://github.com/youjiaqi421/dsh-plugin-workspace-rules) ★0 · `dsh-plugin-workspace-rules` — Load Cursor, Gemini CLI, and GitHub Copilot workspace instructions into DeepSeek Harness.
- [ChuanTianML/dsh-open-with](https://github.com/ChuanTianML/dsh-open-with) ★0 · `dsh-open-with` — Open DeepSeek Harness workspaces in detected or configured local editors
- [ChuanTianML/dsh-share](https://github.com/ChuanTianML/dsh-share) ★0 · `dsh-share` — Privacy-first Markdown and self-contained HTML sharing for DeepSeek Harness sessions
- [lakeofsky347/dsh-vision](https://github.com/lakeofsky347/dsh-vision) ★0 · `dsh-vision` — Vision Bridge for DeepSeek Harness: 识图路由插件，图片交给视觉模型描述后回填给纯文本 DeepSeek
- [xu1132/dsh-plugin-hello](https://github.com/xu1132/dsh-plugin-hello) ★0 · `dsh-plugin-hello` — A minimal DeepSeek Harness community plugin that registers a callable hello tool
- [LuZhouheng/dsh-gen3d](https://github.com/LuZhouheng/dsh-gen3d) ★0 · `dsh-gen3d` — DeepSeek Harness 3D 角色生成插件：直连 Meshy / Hunyuan3D / Tripo3D / Rodin 官方 API，自配 key，mock 回退
- [cyberlieflife/dsh-model-thinking](https://github.com/cyberlieflife/dsh-model-thinking) ★0 · `dsh-model-thinking` — DSH (DeepSeek Harness) web plugin: thinking intensity / reasoning effort settings for custom OpenAI-compatible (pi-ai) models

</details>

<a id="get-listed"></a>
## 收录你的插件

在 `package.json` 中声明 `dsh.bundle`，并给仓库添加 [`dsh-plugin`](https://github.com/topics/dsh-plugin) topic 可自动收录；申请进入编辑精选，请按[合作说明](COLLABORATION.md)提交 PR。

[申请精选 →](https://github.com/Ericwong5021/deepseek-plugin-store/issues/new?template=plugin-submission.yml)

## 许可协议

[CC0-1.0](LICENSE) · 目录数据来自 GitHub 公开 API，每小时自动刷新。

<sub>社区项目，与 DeepSeek 无隶属关系，也未获得 DeepSeek 背书。</sub>

## 友情链接

[LINUX DO](https://linux.do/)
