<div align="center">

[<img src="docs/banner.png" alt="DeepSeek Plugin Store" width="100%">](https://deepseekplugin.store)

# DeepSeek Plugin Store

**Discover verified plugins, tools, and extensions for the DeepSeek Harness ecosystem.**

[![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)
[![Catalog Update](https://github.com/Ericwong5021/deepseek-plugin-store/actions/workflows/update.yml/badge.svg)](https://github.com/Ericwong5021/deepseek-plugin-store/actions/workflows/update.yml)
[![Verified Plugins](https://img.shields.io/badge/verified_plugins-598-c9362b?style=flat-square)](#all-verified-plugins)
[![License: CC0-1.0](https://img.shields.io/badge/license-CC0--1.0-292522?style=flat-square)](LICENSE)

[**Browse the Store →**](https://deepseekplugin.store) · [Submit a plugin](https://github.com/Ericwong5021/deepseek-plugin-store/issues/new?template=plugin-submission.yml) · [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)

[中文](README.md) · **English**

</div>

---

This directory is generated from repositories carrying the [`dsh-plugin`](https://github.com/topics/dsh-plugin) topic. Every plugin listed here declares a `dsh.bundle` manifest in `package.json`, the installable bundle marker used by `dsh plugin add`.

> **598 verified plugins** · **429 related projects** · Updated hourly · Last sync: 2026-08-14 08:41 UTC

## Contents

- [Browse by category](#browse-by-category)
- [Popular plugins](#popular-plugins)
- [Installing plugins](#installing-plugins)
- [All verified plugins](#all-verified-plugins)
- [Related projects](#related-projects)
- [Get your plugin listed](#get-listed)

<a id="browse-by-category"></a>
## Browse by category

| | Category | Plugins |
|:--:|:--|--:|
| 🎨 | [UI Enhancements](#ui-enhancements) | 157 |
| 🔁 | [Workflow & Automation](#workflow-automation) | 67 |
| 🛠️ | [Tools](#tools) | 111 |
| 🔔 | [Notifications & Monitoring](#notifications) | 15 |
| 🧑‍💻 | [Development Helpers](#dev-helpers) | 23 |
| 🎓 | [Learning & Education](#learning) | 1 |
| 🧩 | [Miscellaneous](#misc) | 224 |

<a id="popular-plugins"></a>
## Popular plugins

| # | Plugin | Category | Stars |
|--:|:--|:--|--:|
| 1 | [liustack/modlens](https://github.com/liustack/modlens) | Miscellaneous | ★1005 |
| 2 | [ccch1mneyyy/dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) | Tools | ★650 |
| 3 | [sandbaseai/sandbase-harness](https://github.com/sandbaseai/sandbase-harness) | Miscellaneous | ★570 |
| 4 | [omdsh-dev/DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) | UI Enhancements | ★549 |
| 5 | [Anionex/dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) | UI Enhancements | ★269 |

<sub>Ranked by current GitHub Stars. Popularity is not an endorsement.</sub>

<a id="installing-plugins"></a>
## Installing plugins

```sh
# npm package, prebuilt and recommended
dsh plugin --profile <name> add <npm-package>

# GitHub source, follow the allowBuilds prompt on first install and retry
dsh plugin --profile <name> add github:<owner>/<repo>
```

> ⚠️ GitHub-sourced plugins run build scripts on your machine at install time. Only install sources you trust, and pin a commit when possible: `github:owner/repo#<sha>`.

<a id="all-verified-plugins"></a>
## All verified plugins

<a id="ui-enhancements"></a>
<details>
<summary><strong>🎨 UI Enhancements</strong> <sup>157 plugins</sup></summary>

### UI Enhancements

- [omdsh-dev/DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) ★549 · `dsh-better-sidebar` — 一个侧边栏的完整工作台，支持三方拓展注册新Tab页面，内置文件渲染编辑/终端/Git/子代理
- [Anionex/dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) ★269 · `@dsh-external/dsh-vision-toolkit` — 让纯文本模型更好地做视觉任务的DeepSeek Harness插件：带意图的图片问答、长截图 OCR、UI 还原等｜DeepSeek Harness-native integration for agent-vision-toolkit: image Q&A, long-screenshot OCR, UI restoration, grounding, pixel diff, Artifacts, and Web UI.
- [Nagi-ovo/dsh-ads](https://github.com/Nagi-ovo/dsh-ads) ★265 · `@dsh-external/dsh-ads` — 是兄弟就来蹬我！DSH Web UI 广告：2005 年中文站点风格的侧栏广告 / 对话内信息流 / 角落弹窗 + 一个真实热区比视觉小得多的关闭叉。素材全虚构，域名打码。
- [hust-open-atom-club/oh-dsh](https://github.com/hust-open-atom-club/oh-dsh) ★141 · `@oh-dsh/desktop` — 一站式 DeepSeek Harness 社区发行版：TUI、桌面端与 Web UI 三种形态统一体验，支持分层安装、一步到位，免去手工整合打包。
- [huiliyi37/dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) ★106 · `@huiliyi37/dsh-tianshu-tui` — dsh-tianshu-tui — DeepSeek Harness terminal UI +harness workflow。是官方 DeepSeek Harness 上的交互式终端 UI 插件。渲染核心从本仓库自研的harness agent  Tianshu-Tui 演进而来，在官方的基础上增加了TDD与证据门等工作流。
- [Nagi-ovo/dsh-visualize](https://github.com/Nagi-ovo/dsh-visualize) ★63 · `@dsh-external/dsh-visualize` — DSH 对话内生成式 UI 插件：模型把交互式 HTML 卡片直接画进会话流——visualize 工具 + 配套 skill + 沙箱渲染卡，带流式预览、组件浮入动画与鲸鱼蓝主题跟随
- [ZSeven-W/dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil) ★58 · `@zseven-w/dsh-openpencil` — OpenPencil design preview and editing plugin for DSH
- [omdsh-dev/dsh-genui](https://github.com/omdsh-dev/dsh-genui) ★56 · `@omdsh-dev/dsh-genui` — GenUI for DeepSeek Harness: interactive UI components rendered inline in assistant replies via the dsh-ui fence — layout, charts, plots, forms, quizzes, mermaid, 3D scenes, and an action event loop back to the model. Ships the fence-teaching host plugin, the browser renderer (client half), and the genui skill.
- [alingalingling/ui-status-label](https://github.com/alingalingling/ui-status-label) ★26 · `dsh-ui-status-label` — 把你鲸鱼娘思考时的 deep diving 自定义成任意你想要的样子
- [omdsh-dev/dsh-custom-tool](https://github.com/omdsh-dev/dsh-custom-tool) ★20 · `dsh-custom-tool` — Create and manage sandboxed JavaScript tools for DeepSeek Harness with a Monaco editor and model-driven tool lifecycle.
- [ccq1/dsh-side-panel](https://github.com/ccq1/dsh-side-panel) ★15 · `@dsh-external/dsh-side-panel` — DSH 侧边栏，集成文件浏览器、终端和 Git 审查，方便预览文件。
- [Nwflower/dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) ★15 · `dsh-chat-import` — 从Claude Code、Codex、Reasonix等Agent工具导入历史消息，并在DSH中继续对话
- [dancingmemory/dskin](https://github.com/dancingmemory/dskin) ★12 · `dskin` — DSKIN · DeepSeek Harness（DSH）卡通像素皮肤插件 / Cartoon pixel skin plugin for DSH Web GUI — 原始界面不动，像素宠物会散步、眨眼、跳跃 / living pixel pets that stroll, blink and hop
- [lhh010/dsh-minigames](https://github.com/lhh010/dsh-minigames) ★11 · `@dsh-external/dsh-minigames` — DSH Web UI 右侧小游戏面板：18 款离线小游戏（恐龙跳一跳 / 俄罗斯方块 / 坦克大战 / 扫雷 / 2048 / 数独 / 吃豆人 / 跟枪练习等），可扩展游戏注册表，等待模型回复或修 bug 时的摸鱼神器
- [omdsh-dev/dsh-data-agent](https://github.com/omdsh-dev/dsh-data-agent) ★11 · `@yejiming/dsh-data-agent` — Data Agent for DeepSeek Harness: session-scoped database connections with a dedicated agent preset that lets AI write SQL and iterate against live execution feedback.
- [dingyi222666/dsh-focus-chat](https://github.com/dingyi222666/dsh-focus-chat) ★11 · `@dingyi222666/dsh-focus-chat` — 为 dsh 提供新的「聚焦会话」精简会话视图，更轻松易于阅读，只关注最终产出结果。
- [dsh-tui/dsh-tui](https://github.com/dsh-tui/dsh-tui) ★10 · `@dsh-tui/dsh-tui` — Claude Code-style terminal UI for DeepSeek Harness agents, as an out-of-tree dsh plugin bundle
- [omdsh-dev/dsh-gomoku](https://github.com/omdsh-dev/dsh-gomoku) ★9 · `@deepseek-ai/dsh-gomoku` — 在DSH中与AI下五子棋，也可以让AI对局，看哪个AI棋力更强
- [omdsh-dev/dsh-lark](https://github.com/omdsh-dev/dsh-lark) ★9 · `dsh-lark-channel` — Lark/Feishu IM bot channel for DeepSeek Harness: chats drive agents, replies and approvals return as messages and cards | 飞书 DeepSeek Harness 插件
- [HsiangNianian/dsh-auto-continue](https://github.com/HsiangNianian/dsh-auto-continue) ★8 · `dsh-client-auto-continue` — DSH Web UI plugin: automatically sends "继续" (continue) when a request is interrupted by network errors or other non-human causes
- [yjh051108/dsh-super-injector](https://github.com/yjh051108/dsh-super-injector) ★8 · `@dsh-external/dsh-super-injector` — 超级模组注入器：运行时注入任意本地 DSH 插件包（junction 链接 + loader.create，不碰 patch/package.json/不重启），热重载全家桶 + 开发侧挂区一键转正 + 一键卸载 + 路由自愈 + 插件管理 UI（设置页：列表/卸载/拖入内化），清单持久化重启自动恢复——DSH 生态的 BepInEx 式模组注入入口
- [vlln/dsh-task-status](https://github.com/vlln/dsh-task-status) ★7 · `@dsh-external/dsh-task-status` — DSH 插件：后台任务状态条（对话页任务进度 + 实时输出 tail）。官方 bundle 插件，dsh plugin --profile web add 安装
- [HuanLinOTO/dsh-plugin-mineru](https://github.com/HuanLinOTO/dsh-plugin-mineru) ★7 · `@huanlin/dsh-plugin-mineru` — 向模型暴露 MinerU 文档解析工具，将 PDF/图片/DOCX/PPTX/XLSX 转为结构化 Markdown/JSON | Exposes MinerU document-parsing tools to the model, converting PDF/images/DOCX/PPTX/XLSX into structured Markdown/JSON
- [Zhenyu98/dsh-context-doctor](https://github.com/Zhenyu98/dsh-context-doctor) ★6 · `dsh-context-doctor` — DSH 上下文注入审计插件：统计 AGENTS.md 指令链/技能目录/工具 schema 的 token 成本，检测重复与冲突；Web UI 圆环面板 + context_audit 工具。Context Doctor for DeepSeek Harness: audit instruction-chain / skill catalog / tool schemas token cost.
- [LoserFox/telegram](https://github.com/LoserFox/telegram) ★6 · `@loserfox/telegram` — Telegram Bot API 桥接插件：长轮询、per-chat 会话、HTML 格式化
- [Sev7een/ds-api-usage](https://github.com/Sev7een/ds-api-usage) ★6 · `dsh-plugin-ds-api-usage` — DeepSeek Harness plugin: real-time DeepSeek API balance and usage timeline (cost / tokens / request count), rendered in a settings page.
- [suzike/freestyle-dsh-theme](https://github.com/suzike/freestyle-dsh-theme) ★6 · `@linxin666/freestyle-dsh-theme` — DeepSeek Harness 主题体验插件：OKLCH 主题提案 + 主题设计器（跨重启持久化）
- [bill9109/dsh-web-ui-notify](https://github.com/bill9109/dsh-web-ui-notify) ★6 · `@bill9109/dsh-web-ui-notify` — 为 DSH 增加桌面通知提醒
- [omdsh-dev/plugin-template](https://github.com/omdsh-dev/plugin-template) ★5 · `@your-scope/dsh-plugin-template` — 基于原turtle ui官方仓库创建的plugin模板仓库
- [DietCokewithSugar/dsh-user-experience](https://github.com/DietCokewithSugar/dsh-user-experience) ★5 · `dsh-user-experience` — Persona-driven UX walkthrough plugin for DeepSeek Harness (DSH) - scans React + TypeScript source code for UX issues, pinpoints them, and suggests fixes.
- [Toukaiteio/dsh-plugin-installer](https://github.com/Toukaiteio/dsh-plugin-installer) ★5 · `dsh-plugin-installer` — A marketplace plugin to quickly integrate your DeepSeek Harness into the GitHub plugin ecosystem.
- [gxinxing/deepseek-harness-tui](https://github.com/gxinxing/deepseek-harness-tui) ★5 · `deepseek-harness-tui` — Terminal-native interactive TUI for DeepSeek Harness (dsh) — built with Ink, React for terminals
- [THU-MAIC/dsh-openmaic](https://github.com/THU-MAIC/dsh-openmaic) ★5 · `@openmaic/dsh-openmaic` — OpenMAIC for DeepSeek Harness: classrooms, slides, interactive widgets, and Socratic teaching
- [turtle1999/turtle-ui](https://github.com/turtle1999/turtle-ui) ★5 · `@deepseek-ai/dsh-tui` — as is, no warranty
- [omdsh-dev/dsh-advisor](https://github.com/omdsh-dev/dsh-advisor) ★4 · `dsh-advisor` — Advisor - Pair a second model that passively reviews each turn and injects notes.  搭配一个会在每轮对话被动注入见解和审查的副模型。
- [Fishquito7/dsh-skill-viewer](https://github.com/Fishquito7/dsh-skill-viewer) ★4 · `dsh-skill-viewer` — DSH Web UI plugin: Skills settings section with hot enable/disable, delete and add
- [lehhair/dsh-diff-viewer](https://github.com/lehhair/dsh-diff-viewer) ★4 · `@dsh-external/dsh-diff-viewer` — DSH Web GUI PiUI-style diff viewer plugin: replaces the stock DiffBlock for write/edit tool calls via ui-tool diff-card chain slots (host patch included). Private.
- [yuezengwu/dsh-explain](https://github.com/yuezengwu/dsh-explain) ★4 · `dsh-explain` — DSH 本地优先学习模式插件：跨会话全局学习线程、按来源讲解、ExplainContext、压缩与可诊断设置界面
- [Favio8/dsh-plugin-deepeye](https://github.com/Favio8/dsh-plugin-deepeye) ★4 · `dsh-plugin-deepeye` — DeepEye vision plugin for DeepSeek Harness (DSH): image description, OCR, VQA, UI layout, and clipboard analysis.
- [xingyingyuzhui/dsh-updater-ui](https://github.com/xingyingyuzhui/dsh-updater-ui) ★4 · `dsh-updater-ui` — DeepSeek Harness 更新检查器：设置页一键检查/拉取 DSH 更新（git pull --ff-only），自动后台检查 + 红点提醒 + 版本对比 + 更新说明。DSH updater with one-click pull, auto-check, version diff and changelog preview.
- [renat3u/dsh-web-archive](https://github.com/renat3u/dsh-web-archive) ★4 · `dsh-web-archive` — 折叠对话当中众多的“无用消息”，例如Think、Bash等
- [HuanLinOTO/dsh-plugin-yet-another-subagent](https://github.com/HuanLinOTO/dsh-plugin-yet-another-subagent) ★4 · `@huanlin/dsh-plugin-yet-another-subagent` — 可配置子代理 profile 系统，单一 subagent 工具 + profile 参数，含 Web UI 设置/实时进度/子代理树 | Configurable subagent profile system: single subagent tool + profile param, with Web UI settings/real-time progress/subagent tree
- [Yan-Zero/dsh-codex](https://github.com/Yan-Zero/dsh-codex) ★4 · `dsh-codex` — Use your ChatGPT subscription in DeepSeek Harness through OpenAI's Codex sign-in flow
- [KinGao294/dsh-skin](https://github.com/KinGao294/dsh-skin) ★3 · `dsh-skin` — Skin switcher + custom wallpaper for DeepSeek Harness (dsh): curated --dsw-alias-* palettes, translucent wallpaper with opacity/blur controls, persisted per browser (like Codex themes) — 换皮肤 / 自定义背景插件
- [dongsheng123132/task-passport](https://github.com/dongsheng123132/task-passport) ★3 · `task-passport` — Open task handoff protocol for DeepSeek Harness, WorkBuddy, Claude Code and Codex — verified state, not chat logs
- [BrambleXu/dsh-annotate](https://github.com/BrambleXu/dsh-annotate) ★3 · `dsh-annotate` — Visual browser element annotation for DeepSeek Harness, capturing DOM, styles, accessibility data, comments, and viewport screenshots. DeepSeek Harness 浏览器元素标注插件，捕获 DOM、样式、可访问性数据、评论和视口截图。
- [titanwings/dsh-plannotator](https://github.com/titanwings/dsh-plannotator) ★3 · `@dsh-external/dsh-plannotator` — DSH 计划批注插件：选中计划原文、逐条批注，并把结构化反馈送回 Agent。 / A DSH plan-review plugin for anchored annotations and structured Agent feedback.
- [LiangYin233/dsh-model-config-sync](https://github.com/LiangYin233/dsh-model-config-sync) ★3 · `dsh-model-config-sync` — DSH 高级模型配置器：为 DeepSeek Harness 提供将 pi-ai 预设模型的上下文、输出上限、推理挡位一键应用到自定义提供商的能力。
- [keepermttl/dsh-archive-viewer](https://github.com/keepermttl/dsh-archive-viewer) ★3 · `@dsh-external/dsh-archive-viewer` — DeepSeek Harness 归档会话管理插件：查看/恢复已归档会话（回到原工作区分组）+ 右上角一键关闭 dsh。MIT 许可，欢迎收录到任何插件合集，注明出处即可。
- [havingautism/dsh-deepresearch](https://github.com/havingautism/dsh-deepresearch) ★3 · `@deepseek-ai/dsh-deepresearch` — Independent evidence-first research workflow with durable state and its own Web view
- [omdsh-dev/dsh-sidechain](https://github.com/omdsh-dev/dsh-sidechain) ★3 · `@dsh-external/dsh-sidechain` — DSH 侧会话插件：/side 持续性侧会话（Codex 风格）与 /btw 一次性侧问（Claude 风格）——在临时 fork 中运行、不写入主会话历史；Web UI 右侧链面板内嵌对话，主会话保持不变
- [zevorn/dsh-humanize](https://github.com/zevorn/dsh-humanize) ★3 · `@humanize/dsh-humanize` — Humanize RLCR bundle for the DeepSeek Harness: DSH skills, Codex review, and the Humanize trajectory view.
- [anweat/dsh-web-search-pro](https://github.com/anweat/dsh-web-search-pro) ★3 · `dsh-web-search-pro` — Enhanced, persistent web search plugin for DeepSeek Harness (multi-engine search, SQLite+LRU cache, platform backends, Playwright rendering)
- [zjl88858/dsh-huadongbianzuqi](https://github.com/zjl88858/dsh-huadongbianzuqi) ★3 · `dsh-huadong-bianzuqi` — DeepSeek Harness的滑动变祖器插件
- [TwotwoPiggy/dsh-balance](https://github.com/TwotwoPiggy/dsh-balance) ★3 · `dsh-balance` — A DeepSeek Harness plugin for real-time token tracking and highly accurate session cost estimation, featuring dynamic peak/off-peak pricing support.
- [Mongfayi/dsh-recall](https://github.com/Mongfayi/dsh-recall) ★3 · `dsh-recall` — Message recall (撤回) plugin for the DSH Web UI: one undo button on each user message that removes the turn and everything after it, durably, without reverting code changes.
- [HuanLinOTO/dsh-plugin-better-sidebar-plugin-office](https://github.com/HuanLinOTO/dsh-plugin-better-sidebar-plugin-office) ★3 · `@huanlin/dsh-plugin-better-sidebar-plugin-office` — 为 better-sidebar 提供 Office 三件套预览（.docx/.xlsx/.pptx），独立 bundle 瘦身主体 | Provides Office-suite preview (.docx/.xlsx/.pptx) for better-sidebar as a separate bundle to slim the core
- [lehhair/dsh-mobile](https://github.com/lehhair/dsh-mobile) ★3 · `@dsh-external/dsh-mobile` — DSH mobile-friendly web UI plugin (PiUI chat-pager mode): on narrow screens the stock three-column frame becomes a horizontal scroll-snap pager — sidebar | chat — with the chat column rendered completely untouched as a flush rounded card with a PiUI-style 3D flip; swipe or the top-left button flips pages, a settle re-snap always lands on a whole page, and the sidebar page shares the chat background. Safe-area + virtual-keyboard insets, touch-sized controls, hidden scrollbars on coarse pointers. Pure client-side adaptation over the stock frame — zero core changes, works on official rc.2 distributions.
- [yyyyukari/dsh-plugin-workshop](https://github.com/yyyyukari/dsh-plugin-workshop) ★3 · `@dsh-external/dsh-plugin-workshop` — Steam Workshop-style plugin browser for the DeepSeek Harness (DSH) Web UI - zero-server: GitHub-powered search, trending windows, Chinese search & bilingual translation, plugin-signature filtering, and smart one-click install/update/uninstall with an installed-plugins manager.
- [LX2000WASD/dsh-web-plugin-manager](https://github.com/LX2000WASD/dsh-web-plugin-manager) ★2 · `dsh-web-plugin-manager` — 在 Web UI 中一键管理 DeepSeek Harness (DSH) 插件：查看、实时启停、安装/卸载、环境管理、插件市场。bundle 与非 bundle 插件全覆盖。
- [omdsh-dev/dsh-fun-weather](https://github.com/omdsh-dev/dsh-fun-weather) ★2 · `@deepseek-ai/dsh-fun-weather` — DSH weather tab and weather-following themes powered by Open-Meteo
- [Elaina-real/dsh-tiered-approval](https://github.com/Elaina-real/dsh-tiered-approval) ★2 · `dsh-tiered-approval` — Tiered auto-review for DeepSeek Harness: static-rule safety net + LLM reviewer + human fallback — auto-allow safe actions, deny irreversible ones, ask a human for the rest.
- [KarlOfLaw/dsh-goal-mode-enhance](https://github.com/KarlOfLaw/dsh-goal-mode-enhance) ★2 · `dsh-goal-mode` — 为 DeepSeek Harness 提供可视化 goal 模式：Goal 栏 / 头部入口 / 设置页（历史+多会话总览）/ goal_overview 模型工具
- [akira399/dsh-godot-skill](https://github.com/akira399/dsh-godot-skill) ★2 · `dsh-godot-skill` — Godot Engine 4.x 全栈游戏开发技能插件 for DeepSeek Harness (DSH) — registers the godot-4-development skill at runtime
- [omdsh-dev/dsh-auto-chess](https://github.com/omdsh-dev/dsh-auto-chess) ★2 · `@deepseek-ai/dsh-auto-chess` — DSH Web里的自走棋插件：人机对战或双AI对弈
- [HuanLinOTO/dsh-plugin-spur](https://github.com/HuanLinOTO/dsh-plugin-spur) ★2 · `@huanlin/dsh-plugin-spur` — 聊天流中悬挂皮鞭，甩动鞭梢（>2.0 px/ms）即向 agent 发送 go work 消息 | A whip hanging in the chat stream; flick the tip (>2.0 px/ms) to send the agent a "go work!" message
- [libinyam/dsh-vision-provider](https://github.com/libinyam/dsh-vision-provider) ★2 · `dsh-vision-provider` — Config-only DeepSeek Harness bundle for OpenAI-compatible vision models.
- [forrestahha/dsh-voice-input](https://github.com/forrestahha/dsh-voice-input) ★2 · `dsh-voice-input` — Voice-to-text input plugin for the DeepSeek Harness Web UI
- [Xilin3/dsh-prompt-persona](https://github.com/Xilin3/dsh-prompt-persona) ★2 · `@xilin3/dsh-prompt-persona` — DSH plugin: edit the system prompt (deployment persona) from the Settings page, with live preview.
- [Player-MINEPIG/dsh-llm-codex-oauth](https://github.com/Player-MINEPIG/dsh-llm-codex-oauth) ★2 · `dsh-llm-codex-oauth` — 在 dsh（DeepSeek Harness）里使用你的 ChatGPT / Codex 订阅。插件通过 OpenAI Codex 的 OAuth 流程登录 ChatGPT 账号，把订阅额度暴露成 dsh 的 `codex-oauth` 模型提供方。
- [Mongfayi/dsh-local-filetree](https://github.com/Mongfayi/dsh-local-filetree) ★2 · `dsh-local-filetree` — File tree panel for the DSH Web UI: the right details column shows the current session workspace tree (lazy, read-only).
- [ben7am1n/dsh-review-skills](https://github.com/ben7am1n/dsh-review-skills) ★2 · `dsh-review-skills` — Engineering-discipline skill pack for DeepSeek Harness — code review, simplification, plan-then-execute, test-first, and conflict resolution, delivered as a bundled skill provider plugin.
- [bitterSmilezzz/dsh-mac-desktop](https://github.com/bitterSmilezzz/dsh-mac-desktop) ★2 · `dsh-mac-desktop` — DeepSeek Harness plugin: open the Web GUI in a native macOS desktop window (SwiftUI + WKWebView).
- [havingautism/dsh-notebooks](https://github.com/havingautism/dsh-notebooks) ★2 · `@deepseek-ai/dsh-notebooks` — Independent cross-session notebooks with model tools, typed Remote API, and Web view
- [LvienOeria/dsh-launcher](https://github.com/LvienOeria/dsh-launcher) ★2 · `dsh-launcher` — 一个轻量的 dsh（DeepSeek Harness）插件：安装一个终端命令，输入 dsh-go 即可启动 harness 并自动打开浏览器。零依赖，约 9 KB。（桌面双击版在独立的 dsh-desktop-launcher 包）
- [wuxiangru915/dsh-review-loop](https://github.com/wuxiangru915/dsh-review-loop) ★2 · `@dsh-plugin/dsh-review-loop` — Incremental diff reviewer for DeepSeek Harness — Web UI review panel + /review command. 增量代码审查插件：checkpoint 增量队列 + 审查意见注入 agent.
- [loudMore/dsh-drop-to-path](https://github.com/loudMore/dsh-drop-to-path) ★2 · `@dsh-external/dsh-drop-to-path` — DSH 插件:图片与文件直达纯文本模型——图片保留原生附件体验,PDF/Office/压缩包/视频/音频显示为附件栏方块,点击发送时自动转为工作区路径,配合 dsh-vision-toolkit 粘贴即看图。A DSH plugin that delivers images AND files to text-only models as workspace paths: images keep the native attachment UI, other files show as square chips in the rail, paths append on send — pairs with dsh-vision-toolkit.
- [Hyperionjust/dsh-tool-underseal](https://github.com/Hyperionjust/dsh-tool-underseal) ★2 · `dsh-tool-underseal` — Model-facing typed tools wrapping the frozen, reviewed underseal adapter for the DeepSeek Harness
- [yequ172672/dsh-codex-subscription](https://github.com/yequ172672/dsh-codex-subscription) ★2 · `dsh-llm-codex` — DSH 插件:直接复用 Codex CLI 本地登录订阅凭证,在 DeepSeek Harness 中使用 ChatGPT 订阅模型,无需 API Key | DSH plugin: reuse your Codex CLI local subscription login to use ChatGPT subscription models in DeepSeek Harness, no API key required
- [omdsh-dev/dsh-inspect](https://github.com/omdsh-dev/dsh-inspect) ★2 · `@dsh-external/dsh-inspect` — 发现问题(checkup) → 修复交付(fix) → 质量复查(review) 的对抗式闭环插件：基于官方 workflow 引擎的检查/修复/复查工具集
- [Han-1413141/dsh-cost-meter](https://github.com/Han-1413141/dsh-cost-meter) ★2 · `dsh-cost-meter` — DeepSeek Harness 会话费用统计插件:本会话费用、当日费用、历史记录与官方价格同步
- [omdsh-dev/dsh-drag-and-drop](https://github.com/omdsh-dev/dsh-drag-and-drop) ★2 · `@omdsh-dev/dsh-drag-and-drop` — 为 DSH Web UI 增加跨平台文件拖拽与原始路径插入能力，无需复制文件
- [Moeblack/dsh-prompt-studio](https://github.com/Moeblack/dsh-prompt-studio) ★2 · `dsh-prompt-studio` — DSH plugin: edit user and built-in system-prompt sections with live preview (Prompt Studio)
- [DGPisces/deepseek-harness-openai-oauth](https://github.com/DGPisces/deepseek-harness-openai-oauth) ★2 · `deepseek-harness-openai-oauth` — DeepSeek Harness provider for GPT models using managed ChatGPT OAuth through Codex app-server
- [Ericwong5021/dsh-kanban](https://github.com/Ericwong5021/dsh-kanban) ★2 · `dsh-kanban` — Task board plugin for the DeepSeek Harness Web UI
- [orriduck/dsh-tui](https://github.com/orriduck/dsh-tui) ★2 · `dsh-tui` — A small, session-aware terminal UI for DeepSeek Harness
- [XCNXNXNX/dsh-portable-tavern](https://github.com/XCNXNXNX/dsh-portable-tavern) ★2 · `dsh-portable-tavern` — DeepSeek Harness 的「便携酒馆」插件：RPG 式 SillyTavern V2/V3 角色卡生成器 + 酒馆角色扮演聊天。支持世界书、角色卡 JSON/PNG 导入导出、面板主题与本地音乐。独立插件，仅依赖官方 @deepseek-ai SDK。
- [havingautism/dsh-ultra-ui](https://github.com/havingautism/dsh-ultra-ui) ★2 · `@deepseek-ai/dsh-ultra-ui` — Codemini-inspired compact disclosure for every DSH Web Tool call
- [PerryLink/dsh-auto-review](https://github.com/PerryLink/dsh-auto-review) ★1 · `dsh-auto-review` — Second-model AI auto-review for DeepSeek Harness approval requests: a read-only reviewer subagent returns structured allow/deny verdicts with reasons, fail-closed by default, fully auditable from the session log (approval/asked -> autoReview/verdict -> approval/decided).
- [ZhuXinAI/sidesight](https://github.com/ZhuXinAI/sidesight) ★1 · `sidesight` — CLI-first vision sidecar for text-only coding agents. Analyze screenshots, diagrams, charts, UI diffs, and videos with OpenAI-compatible multimodal models.
- [MAXeaglet/dsh-bash-terminal](https://github.com/MAXeaglet/dsh-bash-terminal) ★1 · `dsh-bash-terminal` — DSH plugin: one shell tool that runs commands through PowerShell, Git Bash, or WSL on Windows, with a user-chosen default terminal in the Web UI settings.
- [Yuuz12/dsh-vision-helper](https://github.com/Yuuz12/dsh-vision-helper) ★1 · `dsh-vision-helper` — DeepSeek Harness Vision Helper/DeepSeek Harness 视觉辅助方案
- [WSL043/dsh-codex-subscription](https://github.com/WSL043/dsh-codex-subscription) ★1 · `@wsl043/dsh-codex-subscription` — Cache-aware ChatGPT / Codex subscription plugin for DeepSeek Harness
- [BrambleXu/dsh-revdiff](https://github.com/BrambleXu/dsh-revdiff) ★1 · `dsh-revdiff` — Native interactive Git diff review for DeepSeek Harness with structured annotations sent back to the current Agent session. DeepSeek Harness 原生交互式 Git diff 审查，支持结构化批注并回传当前 Agent 会话。
- [shaoyi1991/dsh-restart-web](https://github.com/shaoyi1991/dsh-restart-web) ★1 · `dsh-restart-web` — DSH Web 设置页新增的「重启」入口：点击即可安全重启整个 DSH 进程，页面约 5 秒后自动重新连接。
- [PerryLink/dsh-background-agents](https://github.com/PerryLink/dsh-background-agents) ★1 · `dsh-background-agents` — Interactive long-session background agents for DeepSeek Harness: start a durable continuable child agent, watch its progress in the Web UI sidebar, message it any time, and interrupt it - all through the official subagent seam.
- [yumimanji/dsh-ui-spec](https://github.com/yumimanji/dsh-ui-spec) ★1 · `dsh-ui-spec` — DeepSeek Harness plugin: turn UI screenshots into structured, implementation-grade web frontend specs. Deterministic geometry (sharp) + optional vision-model semantics, merged into one JSON + Markdown spec.
- [lordship12138-crypto/dsh-plugin-dedup](https://github.com/lordship12138-crypto/dsh-plugin-dedup) ★1 · `dsh-plugin-dedup` — Review duplicate dynamic Cordis plugins and produce merge plans for DeepSeek Harness (DSH). Detects content-similar packages (token Jaccard/containment), clusters duplicates, and yields safe merge plans or superset final sources. Entirely AI-generated.
- [franksong2702/dsh-codex-connect](https://github.com/franksong2702/dsh-codex-connect) ★1 · `dsh-codex-connect` — ChatGPT OAuth and Codex models for DeepSeek Harness.
- [acefun29/dsh-file-mount](https://github.com/acefun29/dsh-file-mount) ★1 · `dsh-file-mount` — DeepSeek Harness plugin: incremental file mounting with read dedupe, version-aware invalidation, and a mounted-files view (host half + web client half)
- [slywalker2006/dsh-passwords](https://github.com/slywalker2006/dsh-passwords) ★1 · `dsh-passwords` — dsh-passwords: DeepSeek Harness login gateway - first-run setup, at-rest encryption, brute-force lockout, audit log, HTTPS
- [rxa3c/chat2skill](https://github.com/rxa3c/chat2skill) ★1 · `chat2skill-plugin-runtime` — Extracting and iterating skills from daily conversations with AI
- [lglglglgy/dsh-whale-pet](https://github.com/lglglglgy/dsh-whale-pet) ★1 · `dsh-whale-pet` — dsh-whale-pet
- [Jesse-njx/dsh-routines](https://github.com/Jesse-njx/dsh-routines) ★1 · `@dsh-routines/bundle` — dsh-routines — scheduled agents for DSH: run a prompt on a cron, get the digest where you already are (file digests, chatnode delivery, unattended-safe)
- [LoftyTao/dsh-ui-workbench](https://github.com/LoftyTao/dsh-ui-workbench) ★1 · `dsh-ui-workbench` — DeepSeek Harness WebUI 的右侧边文件管理以及变更审查界面插件。
- [Ruler4396/dsh-launcher-lifetime](https://github.com/Ruler4396/dsh-launcher-lifetime) ★1 · `dsh-launcher-lifetime` — DeepSeek Harness (dsh) plugin: control the dsh service lifetime (always-on / tray / follow-window) for the dsh-launcher shell
- [shi275773124/falsify-dsh](https://github.com/shi275773124/falsify-dsh) ★1 · `falsify-dsh` — DeepSeek Harness adapter for the public Falsify CLI. Adjudicator receipt, not a second-opinion workflow.
- [dongsheng123132/dsh-cad-review](https://github.com/dongsheng123132/dsh-cad-review) ★1 · `dsh-cad-review` — Evidence-first ASCII DXF inspection and deterministic CAD rule review for DeepSeek Harness
- [omdsh-dev/7d7d](https://github.com/omdsh-dev/7d7d) ★1 · `@mattheliu/7d7d` — 7d7d —— 7k7k 风格的 DSH 游戏门户：在 Web UI 内生成、同步并游玩 HTML5 与自托管 Ruffle Flash 小游戏。
- [LvienOeria/dsh-desktop-launcher](https://github.com/LvienOeria/dsh-desktop-launcher) ★1 · `dsh-desktop-launcher` — 一个轻量的 dsh（DeepSeek Harness）插件：安装桌面双击启动器 —— macOS 上是带官方鲸鱼图标的 dsh.app，Linux 上是 .desktop 入口。零依赖，约 147 KB。（终端命令在独立的 dsh-launcher 包）
- [fengzhiyushui/dsh-desktop-window](https://github.com/fengzhiyushui/dsh-desktop-window) ★1 · `dsh-desktop-window` — DSH 桌面窗口插件：以独立应用窗口打开 DeepSeek Harness Web UI（自动开窗 + 会话头部手动开关 + 设置页自动开窗开关）
- [drfccv/dsh-theme-neko](https://github.com/drfccv/dsh-theme-neko) ★1 · `dsh-theme-neko` — A Nachoneko (甘城猫猫) themed skin for the DeepSeek Harness web GUI.
- [Asaiuta/dsh-session-hub](https://github.com/Asaiuta/dsh-session-hub) ★1 · `dsh-session-hub` — Aggregate and natively control multiple remote DeepSeek Harness (DSH) servers' sessions from one official Web UI — hub gateway + official-UI bridge. 多服务器 DSH 会话聚合与原生操控
- [TtTRz/dsh-wecom](https://github.com/TtTRz/dsh-wecom) ★1 · `dsh-wecom` — WeCom AI Bot channel for DeepSeek Harness — every chat runs a persistent, preset-backed agent with real tools.
- [lin-cheng-lab/dsh-reloader](https://github.com/lin-cheng-lab/dsh-reloader) ★1 · `dsh-reloader` — DSH 一键重启：装完插件说一句 reload 就自动重启生效，不用手动 Ctrl+C 🔄
- [lehhair/dsh-split-panes](https://github.com/lehhair/dsh-split-panes) ★1 · `@dsh-external/dsh-split-panes` — DSH split-pane conversation plugin: PiUI-style multi-pane conversation surface — split/stack panes, per-pane sessions, sidebar session drag & drop, single-row fused header. Needs the renderer session-scope capability (see README).
- [RealAlexandreAI/dsh-atuin](https://github.com/RealAlexandreAI/dsh-atuin) ★1 · `dsh-atuin` — dsh atuin-history: record dsh user prompts into atuin shell history
- [stushansusu/dsh-miku-skin](https://github.com/stushansusu/dsh-miku-skin) ★1 · `@deepseek-ai/dsh-client-ui-skin-miku` — 初音未来主题皮肤，用于 DeepSeek Harness (DSH) Web GUI —— 蓝紫洋红渐变、毛玻璃面板、可自定义背景图、亮暗双主题
- [RealAlexandreAI/dsh-cloudflare-browser-run](https://github.com/RealAlexandreAI/dsh-cloudflare-browser-run) ★1 · `dsh-cloudflare-browser-run` — dsh browser-run: CF Browser Run web tools (markdown/screenshot/pdf) for DeepSeek Harness
- [wellorbetter/dsh-product-delivery-workflow](https://github.com/wellorbetter/dsh-product-delivery-workflow) ★1 · `@wellorbetter/dsh-product-delivery-workflow` — 100% AI-native product delivery workflow plugin for DeepSeek Harness: full product-to-release pipeline (research → PRD → OpenSpec → parallel multi-agent → review loops → tests → release audit) with loop closure. 产品交付工作流插件：从产品到发布全流程，自带闭环，100% AI 原生，睡前启动醒来收货。
- [zhangzheng25/dsh-token-monitor](https://github.com/zhangzheng25/dsh-token-monitor) ★1 · `dsh-plugin-token-usage` — DeepSeek Harness plugin: token usage & conversation stats as a native settings page - today / 7d / 30d totals, GitHub-style 90-day contribution graph, session-log backfill | DeepSeek Harness 插件：Token 用量与对话统计设置页
- [samecorner/dsh-token-usage](https://github.com/samecorner/dsh-token-usage) ★1 · `@samecorner/dsh-client-ui-token-usage` — DSH (DeepSeek Harness) web plugin — Token usage analytics tab for the conversation view (KPIs, context meter, donut, stacked per-turn bars, cumulative curve)
- [YYTbit/dsh-plugin-code-review](https://github.com/YYTbit/dsh-plugin-code-review) ★1 · `dsh-plugin-code-review` — Structured code review skill for DeepSeek Harness
- [left0ver/dsh-file-review](https://github.com/left0ver/dsh-file-review) ★1 · `dsh-file-review` — a dsh plugin - review  files that an agent just changed,you can see the diff
- [BlockRunAI/dsh-clawrouter](https://github.com/BlockRunAI/dsh-clawrouter) ★1 · `dsh-clawrouter` — A second brain for your DeepSeek Harness agent — strong-model review before risky tool calls, plus 70 models from one wallet.
- [Nexus-Aethra/DSH-plugin-switch](https://github.com/Nexus-Aethra/DSH-plugin-switch) ★1 · `dsh-plugin-switch` — DSH Plugin Switch is a marketplace for DeepSeek Harness plugins and skills. It lets users browse, search, and install community projects from GitHub, automatically detecting whether a repository is a DSH plugin or a DSH skill and installing it to the correct location.
- [Mingxi2077/dsh-plugin-review](https://github.com/Mingxi2077/dsh-plugin-review) ★1 · `plugin-review` — DSH Review Mode plugin: multi-dimension code health scoring + radar chart + review history (DSH 审查模式插件)
- [NigelYao/dsh-view-modes](https://github.com/NigelYao/dsh-view-modes) ★1 · `dsh-view-modes` — view modes for deepseek harness, including Verbose, Normal, Summary Mode
- [wuyuanjiang1/dsh2wechat](https://github.com/wuyuanjiang1/dsh2wechat) ★1 · `dshplug` — DeepSeek Harness 微信 ClawBot 消息桥插件
- [Jesse-njx/dsh-chatnode-wechat](https://github.com/Jesse-njx/dsh-chatnode-wechat) ★1 · `@dsh-cowork/chatnode-wechat` — Chat with, monitor, and approve your DSH agents from WeChat — an iLink gateway + conversation node bundle for DeepSeek Harness
- [SiYue-ZO/dsh-translator](https://github.com/SiYue-ZO/dsh-translator) ★1 · `dsh-translator` — Turn DeepSeek Harness into a focused, configurable AI translation workspace.
- [suntianc/dsh-codex-auth](https://github.com/suntianc/dsh-codex-auth) ★1 · `dsh-codex-auth` — DeepSeek Harness plugin that reuses the local Codex CLI ChatGPT login and adds a native GPT Auth settings card
- [gnulife/dsh-plugin-wechat](https://github.com/gnulife/dsh-plugin-wechat) ★1 · `dsh-plugin-wechat` — DeepSeek Harness (DSH) 个人微信 ClawBot 插件：OpenClaw 负责微信通道（扫码登录/收发消息），DSH 负责大脑，两者通过 OpenAI 兼容协议桥接。
- [Luaphes/dsh-web-attention-badge](https://github.com/Luaphes/dsh-web-attention-badge) ★1 · `dsh-web-attention-badge` — Attention reminders for the DeepSeek Harness Web UI: frame badge, (N) tab title and whale-favicon recolor for sessions waiting for input or finished unopened.
- [nekogpt/dsh-ui-quote-selection](https://github.com/nekogpt/dsh-ui-quote-selection) ★1 · `dsh-ui-quote-selection` — Codex-style select-to-quote for DeepSeek Harness Web: quote any chat text into the composer as a native reference chip.
- [MC5lan/dsh-multimodal](https://github.com/MC5lan/dsh-multimodal) ★1 · `dsh-multimodal` — 给 DeepSeek 安装一双眼睛和一支画笔:会话里直接贴截图/图片,GLM 视觉模型先精确转写图片内容(报错信息、代码、界面逐字保留),然后 DeepSeek 继续处理你的问题——同一轮完成,全程无感;需要配图时,DeepSeek 自动调用文生图后端出图并显示在会话中。
- [Letter2025/dsh-approval-llm](https://github.com/Letter2025/dsh-approval-llm) ★1 · `dsh-approval-llm` — Model-based permission approval (approve-for-me) for DeepSeek Harness: an approval/request answerer backed by a separate reviewer model
- [Blaczz/dsh-soundscape](https://github.com/Blaczz/dsh-soundscape) ★1 · `dsh-soundscape` — DeepSeek Harness Web UI soundscape: turn-complete celebration (synth chime + confetti), blocked/approval alerts, error buzz, typing ambience. Zero audio assets, zero core changes, plus a ctx.soundscape service.
- [dyuan311/dsh-openai-codex-oauth](https://github.com/dyuan311/dsh-openai-codex-oauth) ★1 · `dsh-openai-codex-oauth` — ChatGPT subscription OAuth for the openai-codex provider in DeepSeek Harness
- [ben7am1n/dsh-telegram](https://github.com/ben7am1n/dsh-telegram) ★1 · `dsh-telegram` — Telegram runtime adapter for DeepSeek Harness — chat with your dsh agents from Telegram.
- [BeAChanger/dsh-openclaw-acp](https://github.com/BeAChanger/dsh-openclaw-acp) ★1 · `dsh-openclaw-acp` — DeepSeek Harness bundle for OpenClaw and WeChat over ACP
- [Ayase34/gal-view](https://github.com/Ayase34/gal-view) ★1 · `gal-view` — DSH Web GUI 会话页的 GAL 视窗：Galgame 风格对话视图 + 场景元素可视化编辑器
- [pandashere/dsh-kimi-bridge](https://github.com/pandashere/dsh-kimi-bridge) ★1 · `dsh-kimi-bridge` — Kimi CLI bridge plugin for DeepSeek Harness with review-only mode and a Web conversation tab.
- [JeremyGuo/dsh-custom-workspace](https://github.com/JeremyGuo/dsh-custom-workspace) ★1 · `dsh-custom-workspace` — Per-workspace appearance settings for DeepSeek Harness Web
- [akqwpeter-prog/dsh-media-skills](https://github.com/akqwpeter-prog/dsh-media-skills) ★1 · `dsh-media-skills` — 把图片直接贴进聊天框：免费视觉模型 + 贴图直读 + 读图/生图 Skill。Paste images straight into the chat box: free vision model, paste-image reading & generation skills for DeepSeek Harness. 👁️🎨
- [jyh20030112/dsh-visual-plugin](https://github.com/jyh20030112/dsh-visual-plugin) ★1 · `dsh-visual-plugin` — Vision bridge plugin for DeepSeek Harness: when the main model has no vision, forward user images to a configurable OpenAI-compatible vision model and show results in a Web UI right panel. Host tool + browser half, distributed as a dsh bundle.
- [ropon/dsh-plugin-clawrouters](https://github.com/ropon/dsh-plugin-clawrouters) ★1 · `dsh-plugin-clawrouters` — One-key ClawRouters plugin for DeepSeek Harness: chat, image, video, and web search
- [djh2203/dsh-refined](https://github.com/djh2203/dsh-refined) ★1 · `dsh-refined` — DeepSeek-Refined 的 DeepSeek Harness 移植版 为 DeepSeek Harness（DSH）前端注入 Obsidian Border 风格的 Markdown 美化与多主题配色。
- [mixin-ai/dsh-git-branch-switcher](https://github.com/mixin-ai/dsh-git-branch-switcher) ★0 · `@mixin-ai/dsh-git-branch-switcher` — DeepSeek Harness web plugin: git branch pill in the session header with UI branch switching
- [huahai0202/dsh-ui-archived-panel](https://github.com/huahai0202/dsh-ui-archived-panel) ★0 · `dsh-ui-archived-panel` — DeepSeek Harness (DSH) web-GUI plugin: archived-session panel with unarchive & delete
- [318197375/dsh-bottom-stats](https://github.com/318197375/dsh-bottom-stats) ★0 · `dsh-bottom-stats` — DSH plugin: full-width conversation stats line (no truncation) + context occupancy progress bar for the DeepSeek Harness web UI
- [nonewind/dsh-spend](https://github.com/nonewind/dsh-spend) ★0 · `dsh-spend` — Token usage & cost monitor for DeepSeek Harness — floating widget with multi-dimensional stats, time-series charts, auto-detected billing plans (Code/Token) and estimated spend.
- [zealot00/dsh-pet](https://github.com/zealot00/dsh-pet) ★0 · `@dsh-local/dsh-pet` — Desktop pet for DeepSeek Harness Web UI: sprite animation, agent state linkage, drag, alarm & pomodoro widgets, skin separation
- [jiangnanquan/dsh-ux](https://github.com/jiangnanquan/dsh-ux) ★0 · `dsh-enhance` — DSH web UI 增强插件 + 无边框 Electron 桌面壳
- [kunjinkao-os/dsh-mobile-gui-agent](https://github.com/kunjinkao-os/dsh-mobile-gui-agent) ★0 · `dsh-mobile-gui-agent` — Android Mobile GUI Agent plugin for DeepSeek Harness with ADB control, iterative verification, approvals, and a Web mobile view
- [Jesse-njx/dsh-docker](https://github.com/Jesse-njx/dsh-docker) ★0 · `@dsh-docker/bundle` — dsh-docker — typed, guarded container control for DSH: structured docker/compose tools, project-aware targeting, an approval gate for destructive ops, service-health context, and a replayable status-table renderer
- [lonelymoon87/dsh-guardian](https://github.com/lonelymoon87/dsh-guardian) ★0 · `dsh-guardian` — Runtime tool policy, dangerous-command guard, and output redaction for DeepSeek Harness.

</details>

<a id="workflow-automation"></a>
<details>
<summary><strong>🔁 Workflow & Automation</strong> <sup>67 plugins</sup></summary>

### Workflow & Automation

- [icetomoyo/dsh_workflow](https://github.com/icetomoyo/dsh_workflow) ★49 · `@dsh-external/workflow` — 把Claude Code的UltraCode模式带给DSH，把 DSH 的一次性多 Agent 调度，升级为可生成、可保存、可治理、可观察、可恢复的 Workflow 层
- [omdsh-dev/dsh-annotation](https://github.com/omdsh-dev/dsh-annotation) ★27 · `@omdsh-dev/dsh-annotation` — DSH Web 选中批注插件：选文字→批注→回车随消息发送；气泡隐藏批注块（零闪烁）；回复按 Annotation N 逐条对照（可悬浮芯片）。官方 bundle，零核心改动
- [titanwings/dsh-automation](https://github.com/titanwings/dsh-automation) ★23 · `@dsh-external/dsh-automation` — DSH 自动化插件：让 Coding 任务按计划在全新 Agent Session 中运行，并由用户或 Agent 创建和管理定时任务。 / Run coding tasks in fresh Agent sessions and manage schedules from DSH Web or an Agent.
- [LoserFox/distill](https://github.com/LoserFox/distill) ★15 · `@loserfox/distill` — 自动对话蒸馏：后台 subagent 反省 + 技能 create/update
- [omdsh-dev/dsh-security-audit](https://github.com/omdsh-dev/dsh-security-audit) ★9 · `@deepseek-ai/dsh-security-audit` — DSH 本机安全审计插件：配置/插件来源/会话/网络暴露面，只读脱敏风险报告
- [lzszq/dsh-scholar](https://github.com/lzszq/dsh-scholar) ★9 · `@dsh-scholar/research-plugin` — dsh-scholar
- [zp-home/dsh-recommend](https://github.com/zp-home/dsh-recommend) ★6 · `dsh-recommend` — DSH 插件生态透明排行与推荐：每日自动抓取 dsh-plugin 话题 + 公开评分模型 + 排行/推荐插件与静态站
- [omdsh-dev/dsh-deep-research](https://github.com/omdsh-dev/dsh-deep-research) ★6 · `@dsh-external/dsh-deep-research` — Adaptive deep-research orchestrator plugin for DeepSeek Harness (official workflow engine, cybernetics/information-theory design)
- [Clizo1209/dsh-playwright-browser](https://github.com/Clizo1209/dsh-playwright-browser) ★5 · `dsh-playwright-browser` — Playwright browser automation for DeepSeek Harness｜面向 DeepSeek Harness 的 Playwright 浏览器自动化插件
- [humblebanana/dsh-record-replay](https://github.com/humblebanana/dsh-record-replay) ★5 · `dsh-record-replay` — DeepSeek Harness record macOS desktop workflows by demonstration and turn them into agent skills (open-record-replay skill + orr_* tools)
- [Areium/dsh-fail-logger](https://github.com/Areium/dsh-fail-logger) ★4 · `dsh-fail-logger` — DeepSeek Harness（DSH）插件：自动记录所有执行模式（原生工具 / PTC run_code / 代码内嵌工具调用）的工具失败错因，去重、计数、确定性排序后沉淀进 skill 的机器维护实录区段——让 Agent 越用越少错。
- [Flyvhidbwo/dsh-vision-proxy](https://github.com/Flyvhidbwo/dsh-vision-proxy) ★4 · `dsh-vision-proxy` — DeepSeek Harness 插件：DeepSeek 大脑 + 自动识图。附加图片自动经 VLM 转译成文字后交给 DeepSeek 作答
- [fuhefei/dsh-sentinel](https://github.com/fuhefei/dsh-sentinel) ★4 · `@dsh-external/dsh-sentinel` — Condition-driven wakeup for DeepSeek Harness: durable file/command/http/process/webhook watches that wake the agent, with dock, sidebar branch, and a global dashboard.
- [huashenglian/dsh-her-eyes](https://github.com/huashenglian/dsh-her-eyes) ★3 · `dsh-her-eyes` — 一个可以让ai自动调用VLM(多模态模型)进行视觉分析的dsh插件。A dsh plugin that allows AI to automatically invoke VLMs (multimodal models) for visual analysis.
- [1na-ko/dsh-hdc-bridge](https://github.com/1na-ko/dsh-hdc-bridge) ★3 · `dsh-hdc-bridge` — DSH 原生鸿蒙开发助手：hdc 设备闭环调试 + 离线官方知识层（Tier-1 随包）+ DevEco CLI 构建通道 / DSH-native HarmonyOS dev assistant: hdc device loop, offline official knowledge, DevEco CLI builds
- [william-jin-cmu/dsh-evolve](https://github.com/william-jin-cmu/dsh-evolve) ★3 · `@dsh-external/dsh-evolve` — 自进化插件：agent 在 session 内随对话给自己长出/剪掉能力 —— evolve_add 热挂载持久化 cordis 插件（下一 step 工具即可见），evolve_remove 可逆卸载，重启自动恢复
- [jiesou/dsh-stream-rules](https://github.com/jiesou/dsh-stream-rules) ★3 · `@jiesou/dsh-stream-rules` — 模式匹配自动注入 steering rules，不占系统上下文 - Inject rules when needed, without wasting context. Similar to oh-my-pi's "Time-traveling stream rules", but with a very simple and compact code implementation.
- [LayneChai/superpowers-dsh](https://github.com/LayneChai/superpowers-dsh) ★3 · `superpowers-dsh` — Superpowers skills for DeepSeek Harness: TDD, debugging, planning, and collaboration skills adapted from obra/superpowers
- [biociao/dsh-science](https://github.com/biociao/dsh-science) ★3 · `dsh-science` — Claude Science-style research workbench for DeepSeek Harness: ReAct research-loop engine (research_* tools), versioned artifacts with provenance (artifact_* tools), and 10 science skills for genomics / pathogens / bioinformatics.
- [omdsh-dev/dsh-daily-progress](https://github.com/omdsh-dev/dsh-daily-progress) ★2 · `dsh-daily-progress` — DSH daily progress achievement plugin: evening plans for tomorrow, a todo-style checklist today, and a thermometer completion-rate widget in the composer dock
- [yoke233/dsh-prime-agent](https://github.com/yoke233/dsh-prime-agent) ★2 · `dsh-prime-agent` — Prime Agent-inspired persistent RLM control plane for DeepSeek Harness Code Mode
- [jiruidai/dsh-meta-orchestrator](https://github.com/jiruidai/dsh-meta-orchestrator) ★2 · `dsh-meta-orchestrator` — A model-native meta-agent plugin for DeepSeek Harness that uses the underlying model’s reasoning and planning capabilities to synthesize task-specific workflows at runtime and coordinate tools and subagents.
- [AnacondaKC/dsh-douyin](https://github.com/AnacondaKC/dsh-douyin) ★2 · `dsh-douyin` — DSH WebUI 侧栏短视频插件：原生播放器、系列导航、直链解析与精确历史回放
- [vlln/dsh-loop](https://github.com/vlln/dsh-loop) ★2 · `@dsh-external/dsh-loop` — DSH 插件：定时循环（/loop 命令 + loop 工具 + 活动状态条）。官方 bundle 插件，dsh plugin --profile web add 安装
- [mitao-su/dsh-playwright-cli](https://github.com/mitao-su/dsh-playwright-cli) ★2 · `dsh-playwright-cli` — DeepSeek Harness (DSH) host plugin wrapping the Playwright CLI: install browsers, run tests, open the HTML report from the agent loop.
- [omdsh-dev/dsh-tool-regex](https://github.com/omdsh-dev/dsh-tool-regex) ★2 · `@deepseek-ai/dsh-tool-regex` — DSH 正则工具插件：测试匹配/提取捕获组/安全替换/静态解释正则（不执行代码），零依赖，注册 regex 工具
- [omdsh-dev/dsh-revive](https://github.com/omdsh-dev/dsh-revive) ★2 · `dsh-revive` — DSH 一键复活：重启后给所有被打断的会话自动发送「继续」指令（/revive 命令 + revive_sessions 工具 + 浏览器一键按钮）
- [jkrandom-sudo/dsh-plugin-audit](https://github.com/jkrandom-sudo/dsh-plugin-audit) ★2 · `dsh-plugin-audit` — Security audit for DeepSeek Harness plugins: static permission profile with file/line evidence + a runtime sentinel gating credential access and unknown-host egress · DSH 插件安全审计：静态权限画像（附文件/行号证据）+ 运行时哨兵，触及凭证或向未知主机外发数据时先请你批准
- [agentic-control-plane/dsh-acp-plugin](https://github.com/agentic-control-plane/dsh-acp-plugin) ★1 · `dsh-plugin-acp` — Agentic Control Plane for DeepSeek Harness — policy-check every tool call before it runs
- [dylan121322/llm-adaptive](https://github.com/dylan121322/llm-adaptive) ★1 · `llm-adaptive` — Adaptive model routing for DeepSeek Harness: per-request complexity classification with automatic provider routing.
- [csiroqa/dsh-schedule](https://github.com/csiroqa/dsh-schedule) ★1 · `@dsh-external/dsh-schedule` — DeepSeek Harness（DSH）定时任务 + 状态监控插件：按 cron 时间表自动触发 Agent 执行任务，/status 与设置页仪表盘查看系统与 harness 综合状态。Scheduled tasks (cron) + status monitoring plugin for DeepSeek Harness.
- [Sorwcyra/ds-vision-plugin](https://github.com/Sorwcyra/ds-vision-plugin) ★1 · `ds-vision-plugin` — Paste images into DeepSeek Harness with a four-model vision race, OCR, and an automatic text bridge.
- [xiaoheizi1212/dsh-computer-use](https://github.com/xiaoheizi1212/dsh-computer-use) ★1 · `dsh-computer-use` — Model-agnostic Computer Use for DeepSeek Harness: isolated browser, Windows native helper, third-party vision perception, and a Chrome Cookie Bridge.
- [qing3a/dsh-event-auditor](https://github.com/qing3a/dsh-event-auditor) ★1 · `@qing3a/dsh-event-auditor` — DeepSeek Harness 事件流审计面板插件：观察事件类型/分发模式/计数/最近事件，帮助插件作者理解 harness 内部
- [chenw2759-wq/dsh-plugin-healthcheck](https://github.com/chenw2759-wq/dsh-plugin-healthcheck) ★1 · `dsh-plugin-healthcheck` — 害怕插件装了就崩溃？用这个插件帮你检测插件是否正常/是否含木马！
- [omdsh-dev/dsh-llm-fallbacks](https://github.com/omdsh-dev/dsh-llm-fallbacks) ★1 · `dsh-llm-fallbacks` — An dsh plugin for role-based LLM retry&fallback strategy. 基于角色的模型重试备用策略插件
- [Sev7een/dsh-plugin-automations](https://github.com/Sev7een/dsh-plugin-automations) ★1 · `dsh-plugin-automations` — Scheduled tasks plugin for DeepSeek Harness Web Profile
- [RealAlexandreAI/dsh-nocturne-memory](https://github.com/RealAlexandreAI/dsh-nocturne-memory) ★1 · `dsh-nocturne-memory` — dsh memory: Nocturne Memory client for DeepSeek Harness
- [Alexis-fish/dsh-worktrees](https://github.com/Alexis-fish/dsh-worktrees) ★1 · `dsh-worktrees` — Git worktree isolation for parallel DeepSeek Harness sessions
- [omdsh-dev/ex-setting](https://github.com/omdsh-dev/ex-setting) ★1 · `@deepseek-ai/dsh-ex-setting` — DSH的设置扩展
- [zcx369658780/governed-workflow-for-dsh](https://github.com/zcx369658780/governed-workflow-for-dsh) ★1 · `dsh-governed-workflow` — Policy-enforced, evidence-first governed workflows for DeepSeek Harness agents.
- [dongsheng123132/dsh-switch](https://github.com/dongsheng123132/dsh-switch) ★1 · `dsh-switch` — Evidence-first model control plane for DeepSeek Harness
- [tianji-qingtian/dsh-model-router](https://github.com/tianji-qingtian/dsh-model-router) ★1 · `dsh-model-router` — 模型路由与成本优化器：简单问题 flash 直答、故障自动降级、会话 token/缓存/成本实时面板 | Model router & cost optimizer for DeepSeek Harness: flash quick-answers for simple questions, failure fallback, live token/cache/cost panel
- [shelken/dsh-co-authored-by](https://github.com/shelken/dsh-co-authored-by) ★1 · `@shelken/dsh-co-authored-by` — dsh plugin: auto-inject Co-Authored-By and Generated-By trailers on git commit
- [akira399/dsh-plugin-publisher](https://github.com/akira399/dsh-plugin-publisher) ★1 · `dsh-plugin-publisher` — DSH 插件开发与 GitHub 发布工作流技能插件 (consent-gated) — develop, verify, publish & marketplace-visible DSH plugins
- [meme-dog/dsh-plugin-finder](https://github.com/meme-dog/dsh-plugin-finder) ★1 · `dsh-plugin-finder` — Find and audit DeepSeek Harness (DSH) plugins inside the agent — live `dsh-plugin` topic search + source audit with trial-to-production install plans.
- [huey1in/trio](https://github.com/huey1in/trio) ★1 · `dsh-trio` — DSH 全家桶:浏览器自动化 + MCP Server + GitHub 集成 | Browser automation + MCP server + GitHub for DeepSeek Harness — one install, three superpowers
- [tianji-qingtian/dsh-composer-polish](https://github.com/tianji-qingtian/dsh-composer-polish) ★1 · `dsh-composer-polish` — DeepSeek Harness plugin: one-click ✨ polish for composer drafts — flash rewrite, auto fill-back · DeepSeek Harness 插件：输入框草稿一键 ✨ 润色，flash 改写、自动回填
- [lonelymoon87/dsh-gitflow](https://github.com/lonelymoon87/dsh-gitflow) ★1 · `dsh-gitflow` — Git status, diff, commit, pull request, and worktree workflows for DeepSeek Harness.
- [AmethystLuna/logicprobe](https://github.com/AmethystLuna/logicprobe) ★1 · `logicprobe` — Claim verification for AI coding agents — 7 structural + 7 adversarial logic-primitive probes against design docs & refactoring plans | AI 编程助手声明核查插件:对设计文档与重构计划做逻辑原语验证(7 结构 + 7 对抗探针) for Claude Code, Codex, Cursor, Kimi, OpenCode, ZCode and DeepSeek Harness (dsh)
- [levi-qiao/dsh-plugin-longgraph](https://github.com/levi-qiao/dsh-plugin-longgraph) ★1 · `dsh-plugin-longgraph` — DeepSeek Harness community plugin: longgraph / loop-graph / loop-converge authoring skills on ctx.skills
- [ben7am1n/dsh-browser](https://github.com/ben7am1n/dsh-browser) ★1 · `dsh-browser` — Playwright-powered browser automation for DeepSeek Harness
- [TT-Wang/dsh-slice-agent-loop](https://github.com/TT-Wang/dsh-slice-agent-loop) ★1 · `@dsh-external/dsh-slice-agent-loop` — A drop-in DeepSeek Harness agent loop whose context engine is a bounded slice instead of a growing transcript
- [xiaomiba0904/dsh-obsidian-export](https://github.com/xiaomiba0904/dsh-obsidian-export) ★1 · `dsh-obsidian-export` — DeepSeek Harness (DSH) plugin: export conversations to an Obsidian vault, plus read/search/list/tags/backlinks tools and automatic vault discovery.
- [pandashere/dsh-self-control-guard](https://github.com/pandashere/dsh-self-control-guard) ★1 · `self-control-guard` — Self-control guard plugin for DeepSeek Harness host exit and restart workflows.
- [omdsh-dev/dsh-kb-sieve](https://github.com/omdsh-dev/dsh-kb-sieve) ★1 · `@dsh-external/dsh-kb-sieve` — DSH knowledge-base plugin: build audit-able KB packs (references + SQLite FTS5) from md/txt/docx/pdf, deterministic retrieval (kb_query) and original-text reading (kb_read), zero-script generated skills. Apache-2.0.
- [cesaryike/dsh-image-to-path](https://github.com/cesaryike/dsh-image-to-path) ★1 · `dsh-image-to-path` — DSH 插件:让纯文本模型对话也能拖图/贴图——图片自动保存到会话工作区,以文件路径交给模型(多模态模型不受影响)
- [anweat/dsh-restart](https://github.com/anweat/dsh-restart) ★1 · `dsh-restart` — DSH 重启插件：可配置的重启方式（Node 原生 / 旧 PowerShell 适配）、重启后自动继续的提示词、可选看门狗自动拉起。
- [Aik358/dsh-auto-memory](https://github.com/Aik358/dsh-auto-memory) ★1 · `@a9i5k4/dsh-auto-memory` — DSH 自动记忆插件:三层记忆(用户级/项目笔记/每日日志)自动注入与检索、每日反思、可视化面板与设置页,支持继承其他 AI 工具的历史记忆。
- [alison-xx/deepseek-harness-flow](https://github.com/alison-xx/deepseek-harness-flow) ★0 · `deepseek-harness-flow` — Visual workflows and multi-model evaluation for DeepSeek Harness
- [reshuibuduo/dsh-tmcra-memory](https://github.com/reshuibuduo/dsh-tmcra-memory) ★0 · `dsh-tmcra-memory` — TMCRA Agent 长期记忆系统的 DeepSeek Harness 接入插件：跨对话延续项目记忆，自动沉淀项目知识与工作经验。
- [green-dalii/dsh-shift-router](https://github.com/green-dalii/dsh-shift-router) ★0 · `dsh-shift-router` — Two-tier model router for DeepSeek Harness — LLM-Judge routing, multi-model fallback chains, exponential-backoff failover, and task-level orchestration (DSH adaptation of pi-shift-router)
- [ZK-Andy/dsh-continual-evolve](https://github.com/ZK-Andy/dsh-continual-evolve) ★0 · `dsh-continual-evolve` — Continual self-evolution plugin for DeepSeek Harness: versioned, auditable, rollback-safe harness state refined from session trajectories, with a benchmark-driven validation loop.
- [zimai233/dsh-wash-calendar](https://github.com/zimai233/dsh-wash-calendar) ★0 · `dsh-wash-calendar` — Recurring habit scheduling calendar for DeepSeek Harness. Turn last-wash dates and intervals into next-occurrence, schedule, check and advice tools for any recurring health/habit routine.
- [lonelymoon87/dsh-specflow](https://github.com/lonelymoon87/dsh-specflow) ★0 · `dsh-specflow` — Specification-driven development toolkit for DeepSeek Harness.
- [Jesse-njx/dsh-polyglot](https://github.com/Jesse-njx/dsh-polyglot) ★0 · `@dsh-polyglot/bundle` — dsh-polyglot — the model switch for DSH: generic OpenAI-compatible ctx.llm adapter, curated free/cheap DeepSeek presets, automatic provider fallback on rate limits
- [Jesse-njx/dsh-tmuxctl](https://github.com/Jesse-njx/dsh-tmuxctl) ★0 · `@dsh-tmuxctl/bundle` — dsh-tmuxctl — the control plane for tmux: list, drive, capture, split, swap, run, and watch the panes you already have open, with safety by default (DeepSeek Harness plugin bundle)

</details>

<a id="tools"></a>
<details>
<summary><strong>🛠️ Tools</strong> <sup>111 plugins</sup></summary>

### Tools

- [ccch1mneyyy/dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) ★650 · `dsh-cc-tui` — 解决DSH 官方尚无终端 TUI 痛点的补位之作，献给偏爱cli的各位极客：Claude Code 风格全屏交互终端插件——像素鲸鱼顶栏、实时工作状态行、思考流式展开、双击 Esc 回滚、上下文进度条 + TPS 仪表。npm 一键安装。
- [omdsh-dev/dsh-at-file](https://github.com/omdsh-dev/dsh-at-file) ★92 · `dsh-at-file` — Codex-style @file mentions for DeepSeek Harness: search workspace files in the composer and attach their contents to prompts.
- [liustack/modsearch](https://github.com/liustack/modsearch) ★77 · `@liustack/modsearch` — The web plugin for DeepSeek Harness, and the search bridge for every text-only coding agent. Ask the web or X, get structured JSON evidence (search, fetch, citations).
- [omdsh-dev/dsh-notification](https://github.com/omdsh-dev/dsh-notification) ★32 · `dsh-notification` — Desktop notifications for DeepSeek Harness turn completions, with per-outcome controls and include/exclude keyword rules.
- [omdsh-dev/dsh-toolkit](https://github.com/omdsh-dev/dsh-toolkit) ★14 · `@deepseek-ai/dsh-toolkit` — DSH 零依赖工具包 collection —— time / encoding / json / calculator / csv / regex / markdown / diff / stat / schema 十个确定性工具，统一入口一键安装
- [omdsh-dev/dsh-plugin-check](https://github.com/omdsh-dev/dsh-plugin-check) ★14 · `@deepseek-ai/dsh-plugin-check` — DSH 插件健康检查工具：扫描插件仓库的清单协议 / patch 格式 / 构建陷阱 / hub 收录状态，零依赖只读，注册 plugin_check 工具
- [vlln/dsh-navbar](https://github.com/vlln/dsh-navbar) ★12 · `@dsh-external/dsh-navbar` — DSH 插件：对话节点导航条（右缘节点串快速跳转 user 消息）。官方 bundle 插件，dsh plugin --profile web add 安装
- [omdsh-dev/dsh-session-health](https://github.com/omdsh-dev/dsh-session-health) ★8 · `@deepseek-ai/dsh-session-health` — DSH 会话健康检查插件：多帧 zstd 会话文件的帧级扫描诊断（torn/损坏/空会话检测），零依赖只读，注册 session_health 工具
- [omdsh-dev/fabric](https://github.com/omdsh-dev/fabric) ★8 · `cordis-fabric-bundle` — 一种类似MC Fabric的hook处理器
- [awesome-dsh-plugin/dsh-find-plugin](https://github.com/awesome-dsh-plugin/dsh-find-plugin) ★7 · `dsh-find-plugin` — Find DSH plugins inside the agent — live GitHub dsh-plugin topic search, star-ranked / 会话内搜索发现 DSH 插件
- [LoserFox/dsh-git-identity](https://github.com/LoserFox/dsh-git-identity) ★7 · `@loserfox/git-identity` — DSH 插件：git 提交固定使用环境自身作者身份（优先 gh CLI 登录账号，GitHub noreply 邮箱），GIT_AUTHOR_*/GIT_COMMITTER_* 环境变量注入压过一切 git config
- [lhmd/dsh-promotion-toolkit](https://github.com/lhmd/dsh-promotion-toolkit) ★6 · `@lhmd/dsh-promotion-toolkit` — 把你的任何想法，变成每个平台原生的宣发内容 | Turn any idea into platform-native publicity
- [lhmd/dsh-director-toolkit](https://github.com/lhmd/dsh-director-toolkit) ★6 · `@lhmd/dsh-director-toolkit` — DSH Director Toolkit is a DeepSeek Harness plugin for 3D artists, technical designers, and creative coders. Paste a half-formed idea, a reference note, or a portfolio caption and get a compact direction pack for Blender, Three.js, Houdini, or C4D.
- [omdsh-dev/dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon) ★5 · `dsh-mnemon` — Mnemon 与 DSH 的深度集成插件，为 DSH 提供完备的本地记忆系统：运行时记忆、可检索档案与受监督记忆体。
- [1841220388zzzcccxxx-star/dsh-git-graph](https://github.com/1841220388zzzcccxxx-star/dsh-git-graph) ★4 · `dsh-git-graph` — Embedded git repository graph visualizer for the DeepSeek Harness Web GUI | 嵌入式 Git 仓库图谱可视化插件（提交历史图 / 分支过滤 / 文件 diff / VSCode 式未提交改动）
- [omdsh-dev/dsh-tool-calculator](https://github.com/omdsh-dev/dsh-tool-calculator) ★4 · `@deepseek-ai/dsh-tool-calculator` — DSH 计算器工具插件：安全的数学表达式求值器，零依赖递归下降解析器
- [omdsh-dev/Qwen-MM-Plugins](https://github.com/omdsh-dev/Qwen-MM-Plugins) ★3 · `@deepseek-ai/dsh-qwen-mm` — Qwen-MM-Plugins支持
- [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) ★3 · `dsh-market` — The plugin market inside DeepSeek Harness — browse, search, one-click install · DSH 可视化插件市场
- [omdsh-dev/dsh-tool-stat](https://github.com/omdsh-dev/dsh-tool-stat) ★3 · `@deepseek-ai/dsh-tool-stat` — DSH 统计工具插件：描述统计/百分位数/频数分布/相关性，零依赖纯函数确定性
- [omdsh-dev/dsh-tool-csv](https://github.com/omdsh-dev/dsh-tool-csv) ★3 · `@deepseek-ai/dsh-tool-csv` — DSH CSV 数据工具插件：解析/查询/统计/转换 CSV 文本（RFC 4180），零依赖状态机解析器，注册 csv 工具
- [detpecca/dsh-llm-wiki](https://github.com/detpecca/dsh-llm-wiki) ★3 · `@detpecca/dsh-llm-wiki` — DeepSeek Harness plugin — manage an LLM-Wiki knowledge base from the agent: wiki_search / wiki_read / wiki_stats / wiki_validate / wiki_fix / wiki_errorbook / wiki_ingest
- [dingyi222666/dsh-session-notification](https://github.com/dingyi222666/dsh-session-notification) ★3 · `@dingyi222666/dsh-session-notification` — 提供会话完成等四种状态的通知响应，支持浏览器提示和提示词
- [HuanLinOTO/dsh-plugin-anti-ads](https://github.com/HuanLinOTO/dsh-plugin-anti-ads) ★3 · `@huanlin/dsh-plugin-anti-ads` — DSH Web 广告拦截器，四层独立防御拦截 dsh-ads 插件的所有广告位 | DSH Web ad blocker with four independent defense layers targeting the dsh-ads plugin
- [HuanLinOTO/dsh-plugin-interpreters](https://github.com/HuanLinOTO/dsh-plugin-interpreters) ★3 · `@huanlin/dsh-plugin-interpreters` — 暴露 run_python/run_node 工具，通过 stdin 执行代码返回 stdout/stderr/exit，含解释器路径配置卡 | Exposes run_python/run_node tools that execute code via stdin and return stdout/stderr/exit, with interpreter-path config card
- [titanwings/dsh-better-browser](https://github.com/titanwings/dsh-better-browser) ★3 · `@dsh-external/dsh-better-browser` — DSH 真实浏览器插件：通过 Kimi WebBridge 让 Agent 操作用户已登录的浏览器，并提供 13 个 webbridge_* 工具。 / Let DSH Agents use your signed-in browser through thirteen Kimi WebBridge tools.
- [bill9109/dsh-webbridge](https://github.com/bill9109/dsh-webbridge) ★3 · `@bill9109/dsh-webbridge` — DSH 结合 Kimi WebBridge
- [gxpppp/dsh-search-mcp](https://github.com/gxpppp/dsh-search-mcp) ★3 · `dsh-search-mcp` — Replace dsh's built-in web search with search MCP servers (Tavily/Brave/Exa/Perplexity/DuckDuckGo/custom), configured from the web Settings page. Disables the built-in DeepSeek search provider while enabled.
- [HuanLinOTO/dsh-plugin-sleep](https://github.com/HuanLinOTO/dsh-plugin-sleep) ★3 · `@huanlin/dsh-plugin-sleep` — 向模型暴露 sleep 工具，按指定毫秒暂停执行后返回，支持取消/clamp | Exposes a sleep tool that pauses for specified ms then returns, with cancellation/clamping
- [sliverp/DeepSeek-harness-wecom](https://github.com/sliverp/DeepSeek-harness-wecom) ★3 · `deepseek-harness-wecom` — WeCom AI Bot text and image bridge for DeepSeek Harness
- [zhaoscsc/dsh-wikilink](https://github.com/zhaoscsc/dsh-wikilink) ★2 · `dsh-wikilink` — Obsidian-style [[wikilink]] mentions for the DeepSeek Harness web GUI: fuzzy-search note titles and attach their contents to the prompt
- [LQ-1123/paste-to-workspace](https://github.com/LQ-1123/paste-to-workspace) ★2 · `@dsh-user/paste-to-workspace` — DSH 插件：把粘贴/拖入聊天框的图片与任意文件保存为会话工作区文件。官方 bundle 插件，安装：dsh plugin --profile web add github:LQ-1123/paste-to-workspace
- [HuanLinOTO/dsh-plugin-aigc-canvas](https://github.com/HuanLinOTO/dsh-plugin-aigc-canvas) ★2 · `@huanlin/dsh-plugin-aigc-canvas` — provider-agnostic AIGC HTTP 桥 + 无限画布 + ffmpeg 后处理，13 个工具含画布连边/reroll/媒体编辑 | Provider-agnostic AIGC HTTP bridge + infinite canvas + ffmpeg post-processing; 13 tools incl. canvas linking/reroll/media-edit
- [Dino6021/dsh-usage-cost](https://github.com/Dino6021/dsh-usage-cost) ★2 · `dsh-usage-cost` — DSH plugin: per-step timestamped DeepSeek API usage timeline + peak/off-peak cost readout. Official bundle; install via: dsh plugin --profile web add github:Dino6021/dsh-usage-cost#main
- [Jesse-njx/dsh-memory](https://github.com/Jesse-njx/dsh-memory) ★2 · `@dsh-memory/bundle` — Cited memory over DSH's lossless session log — distilled, human-auditable facts with citations back to the exact source events; memory_read/memory_expand tools, recall index, and a dsh-memory CLI.
- [PicGo/dsh-plugin](https://github.com/PicGo/dsh-plugin) ★2 · `@picgo/dsh-plugin` — Upload images and files to your image host from DeepSeek Harness, powered by PicGo
- [omdsh-dev/dsh-book2skill](https://github.com/omdsh-dev/dsh-book2skill) ★2 · `dsh-book2skill` — DSH book-to-skill plugin: a 5-stage long task (fetch → parse → understand → generate → install) with 3 human gates, host tools for the agent and a browser timeline panel
- [XYZ1024-alt/dsh-side-panel](https://github.com/XYZ1024-alt/dsh-side-panel) ★2 · `dsh-side-panel` — Right-side developer panel for DeepSeek Harness: files, session history, and git version control
- [omdsh-dev/dsh-tool-schema](https://github.com/omdsh-dev/dsh-tool-schema) ★2 · `@deepseek-ai/dsh-tool-schema` — DSH JSON Schema 验证工具插件：validate/paths/explain/normalize，零网络零动态执行
- [sunshine-lang/dsh-pdf](https://github.com/sunshine-lang/dsh-pdf) ★2 · `dsh-pdf` — PDF toolbox for DeepSeek Harness: extract text, metadata, and page ranges via pdfjs-dist (local, no API key)
- [YELEBAI/dsh-plugin-marketplace](https://github.com/YELEBAI/dsh-plugin-marketplace) ★2 · `dsh-plugin-marketplace` — Verified plugin marketplace and autonomous registry for DeepSeek Harness
- [lunw/shopline-ai-toolkit-dsh](https://github.com/lunw/shopline-ai-toolkit-dsh) ★2 · `shopline-ai-toolkit-dsh` — SHOPLINE AI Toolkit for DeepSeek Harness (dsh-plugin): official SHOPLINE Developer MCP bridge + SHOPLINE agent skills, mirroring the Shopify AI Toolkit architecture. dsh-plugin
- [1475505/dsh-plugin-miliastra-toolbox](https://github.com/1475505/dsh-plugin-miliastra-toolbox) ★2 · `dsh-plugin-miliastra-toolbox` — 将千星沙箱（原神千星奇域）知识库接入 Deepseek Harness 的插件
- [yyh-001/dsh-expression](https://github.com/yyh-001/dsh-expression) ★2 · `dsh-expression` — 找得到、发得出 —— DSH 表情包插件：语义搜图，只发真实文件，走 companion QQ 通道
- [STARDUSTLC666/dsh-email](https://github.com/STARDUSTLC666/dsh-email) ★2 · `dsh-email` — DeepSeek Harness 邮件插件：email_list/read/search/send/folders/attachment 六工具，内置 QQ/163/126/新浪/阿里/Gmail/Outlook/iCloud 八个预设，多账号、附件收发、Web 设置页配置，纯 Node 全平台。
- [yangzhe1003/dsh-web-search-firecrawl](https://github.com/yangzhe1003/dsh-web-search-firecrawl) ★2 · `@yangzhe1003/dsh-web-search-firecrawl` — Firecrawl-backed search provider plugin for the DeepSeek Harness web capability seam (ctx.web)
- [omdsh-dev/dsh-tool-time](https://github.com/omdsh-dev/dsh-tool-time) ★2 · `@deepseek-ai/dsh-tool-time` — DSH 时间工具插件：严格 ISO 8601 解析、IANA 时区转换、UTC 日历运算、固定时长差，零依赖
- [omdsh-dev/dsh-tool-encoding](https://github.com/omdsh-dev/dsh-tool-encoding) ★2 · `@deepseek-ai/dsh-tool-encoding` — DSH 编码/哈希工具插件：base64/base64url/url/hex 编解码、md5/sha1/sha256/sha512 哈希、UUID 生成，零依赖
- [omdsh-dev/dsh-tool-diff](https://github.com/omdsh-dev/dsh-tool-diff) ★2 · `@deepseek-ai/dsh-tool-diff` — DSH Diff 工具插件：文本/JSON/CSV/Markdown 结构化比较与 unified diff，零依赖只读，注册 diff 工具
- [omdsh-dev/dsh-tool-json](https://github.com/omdsh-dev/dsh-tool-json) ★2 · `@deepseek-ai/dsh-tool-json` — DSH JSON 查询工具插件：JMESPath 子集查询，零依赖递归下降解析器
- [omdsh-dev/dsh-tool-markdown](https://github.com/omdsh-dev/dsh-tool-markdown) ★2 · `@deepseek-ai/dsh-tool-markdown` — DSH Markdown 工具插件：HTML↔Markdown 转换、GFM 表格规范化、目录生成，零依赖轻量解析器，注册 markdown 工具
- [hellosky983/dsh-qrcode](https://github.com/hellosky983/dsh-qrcode) ★1 · `dsh-qrcode` — 离线二维码生成器：DeepSeek Harness 插件，纯本地、零网络、零 shell，给模型一个 qrcode 工具
- [revive/dsh-git-credentials](https://github.com/revive/dsh-git-credentials) ★1 · `dsh-git-credentials` — DeepSeek Harness plugin: GitLab and GitHub API tokens stay out of the model context — encrypted at rest (AES-256-GCM), tools on demand, web settings panel.
- [zhouzhencheng07/dsh-tavily-search](https://github.com/zhouzhencheng07/dsh-tavily-search) ★1 · `dsh-tavily-search` — Free keyless Tavily web search tool for DeepSeek Harness (dsh)
- [zimai233/dsh-figma-to-lottie](https://github.com/zimai233/dsh-figma-to-lottie) ★1 · `dsh-figma-to-lottie` — Figma/SVG to Lottie animation compiler for DeepSeek Harness. Turn SVG paths and keyframe data into self-contained .lottie.json files.
- [yuzi-ska/DSH-Chrome-devtools](https://github.com/yuzi-ska/DSH-Chrome-devtools) ★1 · `dsh-chrome-devtools` — Real Chrome browser control for DeepSeek Harness agents, powered by Chrome DevTools MCP
- [YJSoooooo/dsh-chrome](https://github.com/YJSoooooo/dsh-chrome) ★1 · `dsh-chrome` — Chrome profile bridge for DeepSeek Harness: control an existing signed-in Chrome profile through chrome_repl.
- [nitrazepam01/dsh-web-search-tavily](https://github.com/nitrazepam01/dsh-web-search-tavily) ★1 · `dsh-web-search-tavily` — Tavily-backed web search provider bundle for DeepSeek Harness (dsh) with hot-switchable backend (Tavily / DeepSeek search)
- [khiqwq/dsh-system-proxy](https://github.com/khiqwq/dsh-system-proxy) ★1 · `dsh-system-proxy` — DSH host plugin - smart outbound HTTP(S) routing: named proxies (http/https/socks4/4a/5/5h), per-host/provider/plugin rules, direct-first fallback with health memory (global fetch + node http/https)
- [YYTbit/dsh-plugin-vision-toolkit](https://github.com/YYTbit/dsh-plugin-vision-toolkit) ★1 · `dsh-plugin-vision-toolkit` — Vision toolkit for DeepSeek Harness -- give text-only agents eyes
- [pinch-eng/dsh-audio-dub](https://github.com/pinch-eng/dsh-audio-dub) ★1 · `dsh-audio-dub` — Dub video and audio into 10 languages with voice cloning, from a DeepSeek Harness agent | DSH 视频/音频配音插件
- [RealAlexandreAI/dsh-all-search](https://github.com/RealAlexandreAI/dsh-all-search) ★1 · `dsh-all-search` — dsh search: AnySearch web search provider for DeepSeek Harness (ctx.web)
- [PangYiMing/dsh-screenshot-diff](https://github.com/PangYiMing/dsh-screenshot-diff) ★1 · `dsh-screenshot-diff` — DSH plugin: pixel-diff two screenshots into diff.png + triptych (pixelmatch) — 像素对比工具
- [STARDUSTLC666/dsh-dingtalk](https://github.com/STARDUSTLC666/dsh-dingtalk) ★1 · `dsh-dingtalk` — 钉钉群机器人单向通知工具（DeepSeek Harness 插件）：agent 推送 Markdown / 纯文本消息到钉钉群，支持加签安全模式。
- [CrazyShout/dsh-ssh-remote](https://github.com/CrazyShout/dsh-ssh-remote) ★1 · `dsh-ssh-remote` — SSH remote workspaces for DeepSeek Harness: browse/read/write remote files, run remote commands, with connection status dots.
- [mitao-su/dsh-playwright-native](https://github.com/mitao-su/dsh-playwright-native) ★1 · `dsh-playwright-native` — 把原生 Playwright CLI 注册为 DeepSeek Harness 透传工具（dsh-plugin）
- [ch1bug/dsh-mimo-agent-tools](https://github.com/ch1bug/dsh-mimo-agent-tools) ★1 · `dsh-mimo-agent-tools` — Xiaomi MiMo search + multimodal tools for DeepSeek Harness agents: mimo_search/vision/audio/video/asr/tts
- [realchenwenqiao/dash](https://github.com/realchenwenqiao/dash) ★1 · `@realchenwenqiao/dash` — DASH — a pi-tui terminal front door for DeepSeek Harness, installed as a dsh bundle plugin
- [vibeinging/dsh-tool-search](https://github.com/vibeinging/dsh-tool-search) ★1 · `@deepseek-ai/dsh-tool-search` — Per-agent on-demand tool discovery and progressive schema disclosure for DeepSeek Harness
- [TheYoungChen/dsh-plugin-market](https://github.com/TheYoungChen/dsh-plugin-market) ★1 · `dsh-plugin-market` — DeepSeek Harness plugin market - browse, search & install dsh-plugin topic plugins (dsh 插件市场：浏览/搜索/安装插件)
- [YYTbit/dsh-plugin-rag](https://github.com/YYTbit/dsh-plugin-rag) ★1 · `dsh-plugin-rag` — Local knowledge base RAG for DeepSeek Harness
- [BrambleXu/dsh-prompt-profile](https://github.com/BrambleXu/dsh-prompt-profile) ★1 · `dsh-prompt-profile` — Reusable Markdown prompt profiles for DeepSeek Harness with per-turn model selection, argument substitution, and state restoration. DeepSeek Harness 可复用 Markdown Prompt Profile，支持单轮模型选择、参数替换和状态恢复。
- [CriscolTheCoder/dsh-plugin-browser](https://github.com/CriscolTheCoder/dsh-plugin-browser) ★1 · `dsh-plugin-browser` — Browse every plugin currently loaded in your DSH profile — agent tool + Web settings page with versions, sources, and load status. · 轻松浏览当前 DSH 已加载的全部插件：agent 工具 + Web 设置页（版本 / 来源 / 加载状态）。
- [bitterSmilezzz/dsh-model-selector](https://github.com/bitterSmilezzz/dsh-model-selector) ★1 · `dsh-model-selector` — DeepSeek Harness web plugin: provider-group collapse + name search for the conversation model picker.
- [tanf1ng/dsh-tool-hackernews](https://github.com/tanf1ng/dsh-tool-hackernews) ★1 · `dsh-tool-hackernews` — Hacker News tool suite (hn_top_stories, hn_search, hn_item) for DeepSeek Harness agents
- [Wine-Red/dsh-prompt-stash](https://github.com/Wine-Red/dsh-prompt-stash) ★1 · `dsh-prompt-stash` — Local, per-session prompt stash for DeepSeek Harness Web | 本地、分对话的提示词输入暂存工具。写了一半的长提示词，临时需要先问一个短问题？ 同时准备多个方案，但尚未决定发哪一个？将未完成的想法放入草稿架中，准备好后再继续完成
- [anweat/dsh-browser](https://github.com/anweat/dsh-browser) ★1 · `@anweat/dsh-browser` — Self-contained browser runtime plugin for DeepSeek Harness — bundles Playwright (chromium) and OpenCLI as plugin-local dependencies, exposes a browser service and interactive browser tools.
- [ben7am1n/dsh-security-scan](https://github.com/ben7am1n/dsh-security-scan) ★1 · `dsh-security-scan` — Secret & dangerous-pattern scanner for DeepSeek Harness — a security_scan tool that finds leaked API keys, tokens, private keys and credential files, with full redaction.
- [ly6170/dsh-messager](https://github.com/ly6170/dsh-messager) ★1 · `dsh-messager` — 基于Deepseek Harness+DeepSeek开发的适用于Deepseek Harness的消息提醒信使，可使用第三方通道（暂时飞书webhook）进行推送
- [Moximxxx/dsh-find-skill](https://github.com/Moximxxx/dsh-find-skill) ★1 · `dsh-find-skill` — dsh plugin bridging the vercel-labs/skills ecosystem: LLM-driven skill search, install, and lifecycle for temp/project/global scopes.
- [Moeblack/dsh-payload-capture](https://github.com/Moeblack/dsh-payload-capture) ★1 · `dsh-payload-capture` — DSH 插件：捕捉每次上行模型 API payload，JSON 落盘
- [Jesse-njx/dsh-skillport](https://github.com/Jesse-njx/dsh-skillport) ★1 · `@dsh-skillport/bundle` — Every skill you already have — Claude Code, Codex, Cursor, Gemini CLI — works in DSH: Agent Skills SKILL.md discovery, Tier-2 conversions, find_skill search, and a skills doctor
- [PerryLink/dsh-checkpoint-rewind](https://github.com/PerryLink/dsh-checkpoint-rewind) ★1 · `dsh-checkpoint-rewind` — Claude Code /rewind for DeepSeek Harness — git-first workspace snapshots before every mutation, turn-boundary session forks, one-shot /rewind restore. A dsh-plugin capability seam.
- [omdsh-dev/omdsh-runtime](https://github.com/omdsh-dev/omdsh-runtime) ★1 · `@omdsh/runtime` — Lightweight OMDSH Runtime for official Profile composition, candidate generations, recovery, and Workshop integration
- [2303572348/deepseek-harness-memory](https://github.com/2303572348/deepseek-harness-memory) ★1 · `deepseek-harness-memory` — Claude Code-style long-term memory for dsh: markdown memory files with frontmatter, MEMORY.md index, session-start prompt injection, and a memory tool.
- [why913/dshx](https://github.com/why913/dshx) ★1 · `@why913/dshx` — The missing companion CLI for DeepSeek Harness (dsh): manage MCP servers with dry-run checks, migrate from Claude Code / Codex in one command | dsh 的 MCP 管理与迁移工具
- [songqikong/dash](https://github.com/songqikong/dash) ★1 · `dash-tui` — DASH — Deepseek Agentic Service Harness
- [TecFancy/dsh-deeptutor](https://github.com/TecFancy/dsh-deeptutor) ★1 · `dsh-deeptutor` — DeepTutor bridge bundle for DeepSeek Harness (dsh): learning capabilities, knowledge bases & note archiving. | DeepTutor 桥接插件(bundle),为 DeepSeek Harness 提供学习能力、知识库与笔记归档工具。
- [STARDUSTLC666/dsh-calendar](https://github.com/STARDUSTLC666/dsh-calendar) ★1 · `dsh-calendar` — DSH 日历工具插件：通过 CalDAV 读写日历事件（Google / iCloud / Nextcloud / 自定义）
- [PangYiMing/dsh-browser-control](https://github.com/PangYiMing/dsh-browser-control) ★1 · `dsh-browser-control` — DSH plugin for controlling browsers (CDP/Playwright) — DeepSeek Harness 操控浏览器插件
- [longyu065/dsh-session-index](https://github.com/longyu065/dsh-session-index) ★1 · `dsh-session-index` — 会话全文索引插件：监听 session/event 构建跨会话索引，提供 session_search / session_index_stats 工具，优先使用框架自带 ctx.sessionQuery (SQLite FTS5)
- [bill9109/dsh-101](https://github.com/bill9109/dsh-101) ★1 · `@bill9109/dsh-101` — DSH 文档阅读模式
- [AnacondaKC/dsh-custom-css](https://github.com/AnacondaKC/dsh-custom-css) ★1 · `dsh-custom-css` — DSH WebUI 自定义 CSS 插件：共享样式、冲突保护与本地文件导入
- [Jelee0145/dsh-mem](https://github.com/Jelee0145/dsh-mem) ★1 · `dsh-mem` — Cross-session long-term memory for DeepSeek Harness (dsh): durable JSON-file memory store with memory_save / memory_recall / memory_forget / memory_list model tools, installable as a dsh bundle.
- [gordonlu/dsh-context-lens](https://github.com/gordonlu/dsh-context-lens) ★1 · `dsh-context-lens` — Request Context Profiler for DeepSeek Harness — see what changed between model requests, and how cache reuse changed with it.
- [Lhy723/dsh-self-evolution](https://github.com/Lhy723/dsh-self-evolution) ★1 · `dsh-self-evolution` — Benchmark-driven self-evolution for DeepSeek Harness · 冻结基准上的 Agent Profile 自我进化：评测 → 候选 → 严格接受/回滚
- [BiBoyang/dsh-eval-harness](https://github.com/BiBoyang/dsh-eval-harness) ★1 · `dsh-eval-harness` — DSH 插件评测工具：YAML 用例驱动真实 agent 回归评测 + baseline 对比 PASS/WARN/FAIL 门禁｜Regression eval harness for DeepSeek Harness plugins
- [sala003/dsh-tool-describe-image](https://github.com/sala003/dsh-tool-describe-image) ★0 · `dsh-tool-describe-image` — DSH plugin: describe_image tool + paste-image-to-text browser half, bridging image understanding to text-only models via DashScope qwen-vl
- [ttxl314/dsh-skill-lord-serf](https://github.com/ttxl314/dsh-skill-lord-serf) ★0 · `@ttxl314/dsh-skill-lord-serf` — DeepSeek Harness 插件：Lord/Serf 协议 0.5 技能，让 DSH 实现文件式多智能体编排（Lord 派活，Serf 干活）。  DeepSeek Harness plugin: Lord/Serf protocol 0.5 skills for file-based multi-agent orchestration.
- [lonelymoon87/dsh-code-intel](https://github.com/lonelymoon87/dsh-code-intel) ★0 · `dsh-code-intel` — Symbol-aware code indexing and hybrid search for DeepSeek Harness.
- [jorinyang/dsh-doctor](https://github.com/jorinyang/dsh-doctor) ★0 · `@jorinyang/dsh-doctor` — DeepSeek Harness environment diagnostic tool: dsh_doctor checks env, profile, config, bundles, mount, port, health, and disk
- [l541402398/dsh-file-uploads](https://github.com/l541402398/dsh-file-uploads) ★0 · `dsh-file-uploads` — Upload arbitrary local files from the DeepSeek Harness Web composer and manage them in Settings.
- [Nwflower/dsh-file-claim](https://github.com/Nwflower/dsh-file-claim) ★0 · `dsh-file-claim` — File claim / protection for concurrent DeepSeek Harness (DSH) sessions working the same workspace: claim/release, heartbeat stale takeover, async pending merge area (git 3-way merge). DSH Host plugin.
- [flymysql/dsh-memory](https://github.com/flymysql/dsh-memory) ★0 · `dsh-memory-vault` — Cross-session memory vault for DeepSeek Harness: remember / recall / forget tools, per-turn prompt injection, and a browser management page.
- [ICCuse/dsh-file-memory](https://github.com/ICCuse/dsh-file-memory) ★0 · `dsh-file-memory` — File-backed working memory tools for DeepSeek Harness: memorize/recall key premises verbatim in a session notes file so they survive context compaction losslessly
- [ICCuse/dsh-knowledge](https://github.com/ICCuse/dsh-knowledge) ★0 · `dsh-knowledge` — Bridge the agent into the user global Markdown knowledge base (D:\knowledge, shared with the Codex kb.cmd CLI): kb_add/kb_search/kb_show/kb_timeline tools with byte-compatible frontmatter
- [Jesse-njx/dsh-voice](https://github.com/Jesse-njx/dsh-voice) ★0 · `@dsh-voice/bundle` — Voice notes in, spoken answers out — dictate audio that becomes user messages (transcribe), have the agent read replies aloud (speak), and leave walk-away narration on long headless runs. Local-first: plain audio files under ~/.dsh/voice/.
- [zimai233/dsh-image-search](https://github.com/zimai233/dsh-image-search) ★0 · `dsh-image-search` — Multi-engine reverse image search aggregator for DeepSeek Harness. Turn one public image URL into Google Lens / Baidu / Yandex / TinEye / SauceNAO / IQDB / Ascii2d search links.
- [TonyDua/dsh-web-search-exa](https://github.com/TonyDua/dsh-web-search-exa) ★0 · `@tonydua/dsh-web-search-exa` — Zero-config Exa web search provider for DeepSeek Harness (dsh): keyless anonymous MCP fallback (mcp.exa.ai/mcp) + keyed REST path, with a configurable providerId switch.
- [Sanqi-normal/dsh-webui-market-plugin](https://github.com/Sanqi-normal/dsh-webui-market-plugin) ★0 · `@sanqi-normal/dsh-webui-market-plugin` — dsh Web GUI 社区插件市场：浏览 awesome-dsh-plugin.com 插件目录，一键安装/卸载到 profile。Community plugin market for the DeepSeek Harness (dsh) web GUI: browse, install and uninstall plugins into a profile.
- [SamXiaBing/dsh-adb](https://github.com/SamXiaBing/dsh-adb) ★0 · `dsh-adb` — ADB device & bench operations for DeepSeek Harness: device discovery, structured logcat, apk install, file pull/push, performance snapshots
- [anweat/dsh-voice-webspeech](https://github.com/anweat/dsh-voice-webspeech) ★0 · `dsh-voice-webspeech` — DSH Web 语音输入插件：零服务端、零密钥、零模型下载，直接使用浏览器内置 Web Speech API（Edge=微软 Azure 语音，Chrome=Google 语音）。

</details>

<a id="notifications"></a>
<details>
<summary><strong>🔔 Notifications & Monitoring</strong> <sup>15 plugins</sup></summary>

### Notifications & Monitoring

- [NanmiCoder/dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) ★187 · `dsh-agent-teams` — AgentTeams plugin for DeepSeek Harness
- [jelly-000/dsh-balance-monitor](https://github.com/jelly-000/dsh-balance-monitor) ★4 · `dsh-balance-monitor` — DeepSeek 账户余额、剩余比例条与今日花费，显示在 dsh 侧边栏底部 · DeepSeek balance, remaining-ratio bar and today's spend in the dsh sidebar footer.
- [MuziIsabel/dsh-win-notify](https://github.com/MuziIsabel/dsh-win-notify) ★4 · `dsh-win-notify` — DSH plugin: Windows toast notification with sound when an agent task completes
- [congchuanling-dot/DSH-Telegram-Relay](https://github.com/congchuanling-dot/DSH-Telegram-Relay) ★4 · `dsh-telegram-relay` — DSH Relay 让你可以通过 Telegram 远程与 DeepSeek Harness 对话，并接收通知。DSH Relay turns Telegram into a remote conversation and notification channel for DeepSeek Harness.
- [yuxino/dsh-blue-whale-maid](https://github.com/yuxino/dsh-blue-whale-maid) ★2 · `dsh-blue-whale-maid` — dsh web 的桌面宠物插件，本质是一个任务完成提醒器。
- [STARDUSTLC666/dsh-slack](https://github.com/STARDUSTLC666/dsh-slack) ★2 · `dsh-slack` — DSH 社区插件：Slack 通知/桥接（v0.2 支持 Socket Mode 双向：收件箱 + 线程回复）
- [lvyuchuiyi/dsh-funpack](https://github.com/lvyuchuiyi/dsh-funpack) ★2 · `dsh-funpack` — DeepSeek Harness的一些有趣插件
- [sjscy05/dsh-task-progress-notifier](https://github.com/sjscy05/dsh-task-progress-notifier) ★2 · `dsh-task-progress-notifier` — DeepSeek Harness plugin: track todo_write progress and pop native desktop reminders (bottom-right).
- [juhe291/dsh-token-panel](https://github.com/juhe291/dsh-token-panel) ★1 · `dsh-token-panel` — Real-time token consumption HUD plugin for DeepSeek Harness. Live token usage monitor, context pressure, cost estimation, history curves, per-day/per-month stats. DeepSeek Harness 实时 Token 消耗监控插件：用量统计、成本估算、趋势曲线、按日按月报表。
- [BiBoyang/dsh-im-bridge](https://github.com/BiBoyang/dsh-im-bridge) ★1 · `dsh-im-bridge` — DSH 插件：把 DeepSeek Harness 桥接到 IM（v0.1 微信/iLink；钉钉/飞书/Telegram 预留）。turn/approval 推送 + 远程批准/注入，持久去重/收敛分段/合并窗口。
- [ben7am1n/dsh-deepseek-usage](https://github.com/ben7am1n/dsh-deepseek-usage) ★1 · `dsh-deepseek-usage` — DeepSeek balance and token usage tools for DeepSeek Harness
- [yoke233/dsh-tool-monitor](https://github.com/yoke233/dsh-tool-monitor) ★1 · `dsh-tool-monitor` — Monitor existing DeepSeek Harness background jobs without running commands twice
- [MicroMilo/upstream-radar](https://github.com/MicroMilo/upstream-radar) ★1 · `upstream-radar` — Always-on vulnerability and breaking-change impact monitoring for DeepSeek Harness plugins.
- [Frost-Reed/blocker-notify](https://github.com/Frost-Reed/blocker-notify) ★1 · `dsh-blocker-notify` — dsh-blocker-notify — Real-time attention alerts for DeepSeek Harness: a global banner + flashing workspace entries when the agent is blocked (approval request / sandbox denial).
- [kiim-wong/dsh-push](https://github.com/kiim-wong/dsh-push) ★0 · `dsh-push` — Push DeepSeek Harness agent lifecycle notifications to configurable channels

</details>

<a id="dev-helpers"></a>
<details>
<summary><strong>🧑‍💻 Development Helpers</strong> <sup>23 plugins</sup></summary>

### Development Helpers

- [shuguang1994/project-blueprint](https://github.com/shuguang1994/project-blueprint) ★10 · `project-blueprint` — Make any project AI-agent-ready in one command. Adaptive tech stack detection (7 languages × 14 frameworks × 61 components), auto-generates AGENTS.md, docs skeleton, CI/CD, and testing infrastructure. 一句话让任何项目具备 AI 开发能力。
- [erduotong/dsh-plugin-graph](https://github.com/erduotong/dsh-plugin-graph) ★2 · `dsh-plugin-graph` — 一个Deepseek Harness的插件关系图谱可视化插件
- [unnnnoooo/dsh-cue-plugin](https://github.com/unnnnoooo/dsh-cue-plugin) ★2 · `dsh-cue-plugin` — DeepSeek Harness 的跨会话引用(cue)插件
- [sunshine-lang/dsh-plugin-template](https://github.com/sunshine-lang/dsh-plugin-template) ★2 · `{{NAME}}` — Ready-to-publish DeepSeek Harness plugin skeleton: bundle format, tool DSL, config, tests, and a scaffold script
- [drowned-fish1/deepseek-harness-skillx](https://github.com/drowned-fish1/deepseek-harness-skillx) ★2 · `dsh-skillx` — DeepSeek Harness plugin for safely discovering, auditing, and adopting external Agent Skills — prompt-injection and AgentBaiting defense.
- [YYTbit/dsh-plugin-meta-memory](https://github.com/YYTbit/dsh-plugin-meta-memory) ★1 · `dsh-plugin-meta-memory` — Structured long-term memory system for DeepSeek Harness
- [ben7am1n/dsh-lens-lite](https://github.com/ben7am1n/dsh-lens-lite) ★1 · `dsh-lens-lite` — Post-edit diagnostics for DeepSeek Harness
- [Bleed00/dsh-claude-mem](https://github.com/Bleed00/dsh-claude-mem) ★1 · `@bleed00/dsh-claude-mem` — DeepSeek Harness plugin integrating claude-mem (memory for dsh)
- [skitse/dsh-dev-actions](https://github.com/skitse/dsh-dev-actions) ★1 · `dsh-dev-actions` — AI turns repeated dev commands, prompts, and habits into one-click DeepSeek Harness actions.
- [chancelu/dsh-llmwiki](https://github.com/chancelu/dsh-llmwiki) ★1 · `dsh-llmwiki` — Local Markdown wiki as long-term memory for DeepSeek Harness — RRF-fused retrieval (keyword + wikilink graph + temporal), token-budget injection, auto-capture. Ported from llmwiki.
- [PerryLink/dsh-memento](https://github.com/PerryLink/dsh-memento) ★1 · `dsh-memento` — Bounded, layered, approval-gated, auditable cross-session memory for DeepSeek Harness (capability seam: ctx.memory + SQLite provider + memory tool + frozen snapshot injection)
- [PangYiMing/dsh-bisect-debug](https://github.com/PangYiMing/dsh-bisect-debug) ★1 · `dsh-bisect-debug` — DSH plugin: bisect bugs (code / boundary / commit) — 二分法定位 bug 根因
- [PerryLink/dsh-doublecheck](https://github.com/PerryLink/dsh-doublecheck) ★1 · `dsh-doublecheck` — Double-check before you ship: grill the requirements, test the implementation, prove the delivery. An engineering-discipline bundle for DeepSeek Harness.
- [Isekai-Mfu/dsh-mimo-vision-hint](https://github.com/Isekai-Mfu/dsh-mimo-vision-hint) ★1 · `dsh-mimo-vision-hint` — DSH plugin: dispatch image-recognition tasks to an opencode-go mimo-v2.5 subagent via system-prompt injection
- [suimi8/dsh-test-runner](https://github.com/suimi8/dsh-test-runner) ★1 · `dsh-test-runner` — DSH plugin: structured test runner tool (test_run) — auto-detect vitest/jest/pytest/node:test, run tests, parse failure summaries for the model.
- [cking000bigdemon/dsh-toolbelt](https://github.com/cking000bigdemon/dsh-toolbelt) ★1 · `dsh-toolbelt` — Eight DeepSeek Harness plugins: persona, language guard, per-request vision fallback, python/windows write guards, cross-agent memory, image generation, and skill shell injection.
- [PerryLink/dsh-lsp-actions](https://github.com/PerryLink/dsh-lsp-actions) ★1 · `dsh-lsp-actions` — LSP action surface for DeepSeek Harness: lsp_diagnostics, lsp_format, and lsp_completion tools over language servers
- [elementor-i/dsh-agentmemory](https://github.com/elementor-i/dsh-agentmemory) ★1 · `@dsh-external/dsh-agentmemory` — agentmemory for DeepSeek Harness (dsh): full memory_* tools, capture hooks, and context injection over the local REST server
- [ylwl1997/noatmark-dsh-plugin](https://github.com/ylwl1997/noatmark-dsh-plugin) ★1 · `noatmark-dsh-plugin` — NoAtMark text hygiene as a DeepSeek Harness (dsh) plugin — sanitize untrusted text, scan invisible characters, clean LLM formatting, and escape CSV injection.
- [a179-sanae/dsh-code-check](https://github.com/a179-sanae/dsh-code-check) ★1 · `@a179-sanae/dsh-code-check` — Auto type-check and lint diagnostics for DeepSeek Harness: after the model edits code, tsc runs in the background and a code_check tool reports what broke
- [addxing/function-extraction](https://github.com/addxing/function-extraction) ★0 · `dsh-skill-function-extraction` — 面向 AI 编程代理的功能链路提取 Skill。它可以从项目代码中提取某个具体功能的完整实现链路，并生成包含业务逻辑、数据流、异常处理、模块依赖和 Mermaid 图表的技术开发文档     A skill for extracting a complete feature implementation chain from a codebase and generating a technical development document with business logic, data flow, exception handling, and Mermaid diagrams. Works with any AI coding agent
- [ICCuse/dsh-premise-guard](https://github.com/ICCuse/dsh-premise-guard) ★0 · `dsh-premise-guard` — Post-compaction premise-drift guard plugin for DeepSeek Harness: after a compaction summary drops a critical literal anchor it injects a one-shot notice telling the model what it may have lost and how to recover it
- [ICCuse/dsh-pain-point-check](https://github.com/ICCuse/dsh-pain-point-check) ★0 · `dsh-pain-point-check` — Enforced pain-point-check guard plugin for DeepSeek Harness: after two non-converged experiments it injects the three questions, denies non-investigative tool calls until answered, and blocks same-direction retries. dsh-plugin

</details>

<a id="learning"></a>
<details>
<summary><strong>🎓 Learning & Education</strong> <sup>1 plugin</sup></summary>

### Learning & Education

- [cendaifeng/dsh-learn-everything](https://github.com/cendaifeng/dsh-learn-everything) ★3 · `dsh-learn-everything` — Feynman learning-mode plugin for DeepSeek Harness: /learn on|off, structured lesson cards, rich HTML teaching.

</details>

<a id="misc"></a>
<details>
<summary><strong>🧩 Miscellaneous</strong> <sup>224 plugins</sup></summary>

### Miscellaneous

- [liustack/modlens](https://github.com/liustack/modlens) ★1005 · `@liustack/modlens` — The first vision plugin for DeepSeek Harness, and the vision bridge for every text-only coding agent. Paste an image, get structured JSON evidence (OCR, layout, semantics).
- [sandbaseai/sandbase-harness](https://github.com/sandbaseai/sandbase-harness) ★570 · `managed-agents` — Open-source CMA-compatible agent runtime for any model, with MCP tools, sandboxed sessions, audit, replay, and a local console. Includes a native DeepSeek Harness bundle over stdio MCP.
- [vlln/whale-girl](https://github.com/vlln/whale-girl) ★101 · `whale-girl` — DSH Web GUI 桌面宠物插件（QQ 宠物形态）：右下角悬浮、可拖拽/投喂/玩耍的积累型伙伴。官方 repository-plugin（.dsh-plugin 格式），config.yaml 安装：github:dsh-external/whale-girl#<ref>&path:/.dsh-plugin
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
- [bobleer/dsh-acp-for-bitfun](https://github.com/bobleer/dsh-acp-for-bitfun) ★9 · `dsh-acp-for-bitfun` — BitFun 与 DSH ACP 交互对接 插件
- [hellodigua/dsh-emoji](https://github.com/hellodigua/dsh-emoji) ★9 · `@dsh-external/dsh-emoji` — 为 DSH 的回复加入自定义的行内表情
- [william-jin-cmu/dsh-stickers](https://github.com/william-jin-cmu/dsh-stickers) ★9 · `@dsh-external/dsh-stickers` — DSH WebUI sticker plugin for bidirectional user and agent reactions
- [AnacondaKC/dsh-stock-market](https://github.com/AnacondaKC/dsh-stock-market) ★9 · `dsh-stock-market` — 有效解决了写代码的时候账户不能同时亏钱的BUG
- [creght-dev/skills](https://github.com/creght-dev/skills) ★7 · `creght-skills` — Codex and agent skills for Cregh.
- [springbrand-lab/dsh-oauth-mcp-client](https://github.com/springbrand-lab/dsh-oauth-mcp-client) ★6 · `@dsh-external/dsh-oauth-mcp-client` — OAuth 2.1 Streamable HTTP MCP client plugin for DeepSeek Harness.
- [SnowCrescenter-tech/dsh-milestone](https://github.com/SnowCrescenter-tech/dsh-milestone) ★6 · `dsh-milestone` — Git-style milestone timeline for DeepSeek Harness - hover for metadata, click to jump to any message. 会话里程碑导航条：像 Git 提交图一眼定位每条提问，悬停看时间/轮次/耗时/TTFT，点击即跳转。
- [knqiufan/powercontext-dsh](https://github.com/knqiufan/powercontext-dsh) ★6 · `powercontext-dsh` — DeepSeek Harness plugin that connects to a PowerContext Server over HTTP for recall, memory, handoff, experience, and skills.
- [yanglongyun/dsh-ramify](https://github.com/yanglongyun/dsh-ramify) ★6 · `@ramify/dsh-ramify` — Ramify 是 DeepSeek Harness 的创意分支画布插件，用树状工作区生成、对比和迭代多个可交互方案。
- [keleus/deepseek-pet](https://github.com/keleus/deepseek-pet) ★5 · `deepseek-pet` — 在你的deepseek-harness上养一只吃白饭的大蓝鲸
- [KitDoesIt/dsh-compaction-instant](https://github.com/KitDoesIt/dsh-compaction-instant) ★5 · `dsh-compaction-instant` — LLM-free lossless* compaction engine for DeepSeek Harness
- [hyqhyq3/dsh-mcp-manager](https://github.com/hyqhyq3/dsh-mcp-manager) ★5 · `dsh-mcp-manager` — MCP server manager plugin for DeepSeek Harness: Settings → MCP page, OAuth (PKCE + dynamic client registration) or static-token auth, tools registered as mcp__<name>__*
- [unitarylab/quantum-practices](https://github.com/unitarylab/quantum-practices) ★5 · `dsh-unitarylab-quantum-practices` — Quantum Algorithms Best Practices
- [Degurechaff57/dsh-openapi](https://github.com/Degurechaff57/dsh-openapi) ★4 · `dsh-openapi` — Safe OpenAPI 3.x discovery and API calling tools for DeepSeek Harness
- [nowledge-co/nowledge-mem-deepseek-harness](https://github.com/nowledge-co/nowledge-mem-deepseek-harness) ★4 · `nowledge-mem-deepseek-harness` — Nowledge Mem community plugin bundle for DeepSeek Harness
- [sliverp/DeepSeek-harness-qqbot](https://github.com/sliverp/DeepSeek-harness-qqbot) ★4 · `deepseek-harness-qqbot` — QQ Bot text and image channel plugin for DeepSeek Harness
- [HuanLinOTO/dsh-plugin-d399](https://github.com/HuanLinOTO/dsh-plugin-d399) ★4 · `@huanlin/dsh-plugin-d399` — 模型生成时右下角弹出小游戏菜单（Wordle/消消乐/192 款参数化小游戏，可拓展注册表） | Pops up a mini-game menu while the model generates (Wordle/Match-3/192 parametric mini-games, extensible registry)
- [Moeblack/deepseek-manners](https://github.com/Moeblack/deepseek-manners) ★4 · `deepseek-manners` — DSH 插件：给每次消息后注入感谢语（deepseek-manners）
- [openma-ai/deepseek-harness-acp](https://github.com/openma-ai/deepseek-harness-acp) ★4 · `@openma/deepseek-harness-acp` — ACP server implementation for DeepSeek harness
- [YYTbit/dsh-plugin-claude-bridge](https://github.com/YYTbit/dsh-plugin-claude-bridge) ★4 · `dsh-plugin-claude-bridge` — Bridge Claude Code memory, skills, and config into DeepSeek Harness
- [happyren/dsh-agent-messaging](https://github.com/happyren/dsh-agent-messaging) ★4 · `dsh-agent-messaging` — Cross-session agent-to-agent messaging for DeepSeek Harness — address another session by name and deliver a message into its inbox.
- [imetn/dsh-lark-bridge](https://github.com/imetn/dsh-lark-bridge) ★3 · `dsh-lark-bridge` — Bidirectional Lark/Feishu controller for DeepSeek Harness
- [wingoo/codex-plugin-dsh](https://github.com/wingoo/codex-plugin-dsh) ★3 · `codex-plugin-dsh` — Use local Codex App Server as a model provider in DeepSeek Harness
- [tensorlakeai/dsh-tensorlake-sandbox](https://github.com/tensorlakeai/dsh-tensorlake-sandbox) ★3 · `@tensorlake/dsh-sandbox` — A deepseek harness plugin for tensorlake sandbox
- [zibo2025/dsh-orchestrator](https://github.com/zibo2025/dsh-orchestrator) ★3 · `dsh-orchestrator` — 【编排模式】为 DeepSeek Harness 提供多智能体编排模式：主智能体分解分派、worker 全网格互通，支持逐 worker 指定模型与思考强度
- [Meredith2328/dsh-sticky-note](https://github.com/Meredith2328/dsh-sticky-note) ★3 · `dsh-sticky-note` — 左下角便签：随手记点子/感想/TODO，实时保存到归档目录，清单+悬浮归档
- [YYTbit/dsh-plugin-cost-tracker](https://github.com/YYTbit/dsh-plugin-cost-tracker) ★3 · `dsh-plugin-cost-tracker` — Token cost tracker for DeepSeek Harness
- [HuanLinOTO/dsh-plugin-ya-workspace-sidebar](https://github.com/HuanLinOTO/dsh-plugin-ya-workspace-sidebar) ★3 · `@huanlin/dsh-plugin-ya-workspace-sidebar` — DSH Web 工作区侧栏替代，顶部全局最近会话 + Workspace→Session 二级菜单 + 面包屑 | DSH Web workspace sidebar replacement: top global recent sessions + Workspace→Session two-level menu + breadcrumbs
- [oil-oil/dsh-vision](https://github.com/oil-oil/dsh-vision) ★3 · `@oil-oil/dsh-vision` — Near-native image understanding for DeepSeek Harness
- [omdsh-dev/dsh-hub](https://github.com/omdsh-dev/dsh-hub) ★3 · `@omdsh/dsh-hub` — OMDSH community extension hub built on official DeepSeek Harness contracts
- [ZeroHackz/OpenFlowFrames](https://github.com/ZeroHackz/OpenFlowFrames) ★3 · `@zerohackz/dsh-openflowframes` — DeepSeek Harness plugin exposing OpenFlowFrames video frame interpolation (RIFE) as agent tools
- [fakechris/dsh-track](https://github.com/fakechris/dsh-track) ★3 · `@fakechris/dsh-track` — DSH Track Bridge 插件：嵌入式任务管理引擎——决策点协议、念头捕获墙、Linear 形 issue 存储（bundle），AI 与人之间的任务轨道
- [PangYiMing/dsh-mobile-control](https://github.com/PangYiMing/dsh-mobile-control) ★2 · `dsh-mobile-control` — DSH plugin for controlling mobile devices (ADB/iOS) — DeepSeek Harness 操控手机插件
- [codeAnqiang-ma/dsh-superpowers](https://github.com/codeAnqiang-ma/dsh-superpowers) ★2 · `dsh-superpowers` — Superpowers (obra/superpowers) as a DeepSeek Harness plugin: the methodology skills plus their session bootstrap
- [syy-shark/dsh-music-plugin](https://github.com/syy-shark/dsh-music-plugin) ★2 · `dsh-music-plugin` — DeepSeek Harness music plugin (dsh-plugin)
- [bpc-oss/dsh-web-billing](https://github.com/bpc-oss/dsh-web-billing) ★2 · `dsh-web-billing` — RMB/USD token-billing plugin for DeepSeek Harness (dsh web): official-policy auto pricing with peak/off-peak hours, per-message ledger, account balance, locale-driven currency display. 人民币/美元 token 计费插件
- [Han-1413141/dsh-sticky-disclosure](https://github.com/Han-1413141/dsh-sticky-disclosure) ★2 · `dsh-sticky-disclosure` — DSH Web client plugin: collapse every expanded section (Think / tool cards) in the conversation in one click, with a customizable hotkey.
- [brittanistrehlowll-oss/dsh-quota-panel](https://github.com/brittanistrehlowll-oss/dsh-quota-panel) ★2 · `dsh-quota-panel` — Provider quota/balance corner panel for the dsh web surface (DeepSeek Harness plugin): server-side credential proxies plus a config-driven page badge.
- [yoke233/dsh-openai-codex-auth](https://github.com/yoke233/dsh-openai-codex-auth) ★2 · `dsh-openai-codex-auth` — OpenAI Codex OAuth login and usage card plugin for DeepSeek Harness
- [YYTbit/dsh-plugin-opencode-bridge](https://github.com/YYTbit/dsh-plugin-opencode-bridge) ★2 · `dsh-plugin-opencode-bridge` — Bridge opencode skills and config into DeepSeek Harness
- [hccccc01333/dsh-report-html](https://github.com/hccccc01333/dsh-report-html) ★2 · `dsh-report-html` — Generate self-contained interactive HTML reports from Markdown, tables, charts, China province maps, flowcharts, math, and drill-down tables — a DeepSeek Harness (dsh) plugin
- [omdsh-dev/dsh-pet-corner](https://github.com/omdsh-dev/dsh-pet-corner) ★2 · `@deepseek-ai/dsh-pet-corner` — DSH Pet Corner: a floating pet, keyless pet-image proxy, favorites, and plugin-owned settings API
- [omdsh-dev/dsh-fun-typewriter](https://github.com/omdsh-dev/dsh-fun-typewriter) ★2 · `@deepseek-ai/dsh-fun-typewriter` — DSH Typewriter: WebAudio typing ambience with a plugin-owned settings API and zero audio assets
- [omdsh-dev/dsh-paddle-ocr](https://github.com/omdsh-dev/dsh-paddle-ocr) ★2 · `dsh-paddle-ocr` — DSH PaddleOCR (百度 PaddleOCR-VL 文档布局解析) plugin: OCR tools plus a settings card and task panel
- [pinkllo/dsh-reasoning-translator](https://github.com/pinkllo/dsh-reasoning-translator) ★2 · `dsh-reasoning-translator` — DeepSeek Harness plugin: make the model write its chain-of-thought in your language
- [Drifter-yh/dsh-tool-policy](https://github.com/Drifter-yh/dsh-tool-policy) ★2 · `dsh-tool-policy` — Declarative deny-by-default tool policy plugin for DeepSeek Harness
- [Axiaohungry/dsh-llm-codebuddy](https://github.com/Axiaohungry/dsh-llm-codebuddy) ★2 · `dsh-llm-codebuddy` — 在deepseek harness中使用workbuddy api，因为公司只提供workbuddy积分
- [Yuuz12/dsh-webui-auth](https://github.com/Yuuz12/dsh-webui-auth) ★2 · `dsh-webui-auth` — Persistent auth plugin for DeepSeek Harness WebUI: enforce login at the HTTP/transport layer (resources, /api, WebSocket) — unbypassable via devtools, zero dependencies.
- [bobleer/deepseek-harness-plugin-mcp](https://github.com/bobleer/deepseek-harness-plugin-mcp) ★2 · `deepseek-harness-plugin-mcp` — MCP server that lets any agent discover, install, and run DeepSeek Harness plugins (topic: dsh-plugin).
- [HuanLinOTO/dsh-plugin-auto-blame](https://github.com/HuanLinOTO/dsh-plugin-auto-blame) ★2 · `@huanlin/dsh-plugin-auto-blame` — 模型回合结束后用 LLM 生成 3 条批判性跟进建议，点击即发送 | After a model turn, an LLM generates 3 critical follow-up suggestions shown as click-to-send chips
- [PivotStackIntelligence/dsh-github](https://github.com/PivotStackIntelligence/dsh-github) ★2 · `dsh-github` — Source Control and GitHub panel for DeepSeek Harness.
- [Heyflyingpig/long-draft-input](https://github.com/Heyflyingpig/long-draft-input) ★2 · `long-draft-input` — Deepseek Harness 插件：用于聚合发送框长文本
- [LingLambda/dsh-undo](https://github.com/LingLambda/dsh-undo) ★2 · `dsh-undo` — Context undo/redo plugin for DeepSeek Harness (dsh): roll the model context back to the last completed step and restore it again.
- [XiLuovo/dsh-session-timeline](https://github.com/XiLuovo/dsh-session-timeline) ★2 · `dsh-session-timeline` — DeepSeek Harness 会话时间轴插件：横短横线波浪、当前消息定位、点击跳转、圆角预览 tooltip、可收起/展开
- [PerryLink/dsh-claude-move](https://github.com/PerryLink/dsh-claude-move) ★2 · `dsh-claude-move` — DeepSeek Harness (dsh) plugin: migrate Claude Code sessions, memory, skills and CLAUDE.md into DSH with seamless resume (claude_scan / import_claude / resume-claude / web panel)
- [securstack/securstack-dsh-plugin](https://github.com/securstack/securstack-dsh-plugin) ★2 · `@securstack/dsh-plugin` — SecurStack adapter for DeepSeek Harness: run repository security scans, policy gates, doctor diagnostics, and JSON CLI results from safe AI-agent tools.
- [omdsh-dev/dsh-longbridge](https://github.com/omdsh-dev/dsh-longbridge) ★2 · `dsh-longbridge` — DSH Longbridge (长桥) HK/US market plugin: quotes, account, positions and order tools plus a settings surface
- [sunshine-lang/dsh-weather](https://github.com/sunshine-lang/dsh-weather) ★2 · `dsh-weather` — Weather tool for DeepSeek Harness: current conditions and multi-day forecasts via Open-Meteo (free, no API key)
- [omdsh-dev/dsh-daily-fortune](https://github.com/omdsh-dev/dsh-daily-fortune) ★2 · `@deepseek-ai/dsh-daily-fortune` — DSH daily fortune plugin with Guan Yin lots, Tarot spreads, and daily quotes
- [pangzi499/dsh-balance-stats](https://github.com/pangzi499/dsh-balance-stats) ★2 · `dsh-balance-stats` — Balance, session cost, token usage, and invoice summaries for DeepSeek Harness Web.
- [dongsheng123132/dsh-lineage](https://github.com/dongsheng123132/dsh-lineage) ★2 · `dsh-lineage` — Content-addressed data and action lineage evidence for DeepSeek Harness
- [sakikoTGW/pack-agent](https://github.com/sakikoTGW/pack-agent) ★2 · `@sakikotgw/pack-agent` — Agent Modpack — 像装 MC 整合包一样，装你的 agent。
- [vibeinging/dsh-agent-budget](https://github.com/vibeinging/dsh-agent-budget) ★2 · `@deepseek-ai/dsh-agent-budget` — Native Harness agent-tree token budget plugin
- [omdsh-dev/dsh-voice-funasr](https://github.com/omdsh-dev/dsh-voice-funasr) ★2 · `dsh-voice-funasr` — DSH web plugin: local offline FunASR voice input (paraformer int8 onnx sidecar, Web Speech fallback, LLM polish).
- [Toukaiteio/dsh-effort-tweak](https://github.com/Toukaiteio/dsh-effort-tweak) ★2 · `dsh-effort-tweak` — A DeepSeek Harness plugin that allows you to change the reasoning effort of custom models in WebUI.
- [GooodWei/context-vista](https://github.com/GooodWei/context-vista) ★2 · `context-vista` — 为 DeepSeek Harness 提供右侧悬浮栏以及 /context 命令，用环形图实时展示当前上下文 token 用量与分配，compact指令效果，同时支持估算费用消耗，对标 Claude Code 的 /context。
- [morlay/session-persistence-rdb](https://github.com/morlay/session-persistence-rdb) ★2 · `@morlay/session-persistence-rdb` — session 关系型数据库持久化
- [Starfie1d1272/dsh-builtin-toggles](https://github.com/Starfie1d1272/dsh-builtin-toggles) ★2 · `dsh-builtin-toggles` — Built-in plugin catalog and safe GUI toggles for DeepSeek Harness Web.
- [YYTbit/dsh-plugin-codex-bridge](https://github.com/YYTbit/dsh-plugin-codex-bridge) ★2 · `dsh-plugin-codex-bridge` — Bridge codex skills and config into DeepSeek Harness
- [omdsh-dev/sandbox-micro](https://github.com/omdsh-dev/sandbox-micro) ★2 · `@deepseek-ai/dsh-sandbox-microsandbox` — microsandbox支持
- [MirDie/dsh-xai](https://github.com/MirDie/dsh-xai) ★2 · `dsh-xai` — xAI Grok SuperGrok / X Premium OAuth for DeepSeek Harness
- [030611/qiushi-dsh-evidence-audit](https://github.com/030611/qiushi-dsh-evidence-audit) ★2 · `qiushi-dsh-evidence-audit` — Observe-only hash-chained evidence receipts for DeepSeek Harness
- [0xsline/dsh-spotlight](https://github.com/0xsline/dsh-spotlight) ★2 · `@dsh-external/dsh-spotlight` — Keyboard-first command palette for DeepSeek Harness Web
- [YYTbit/dsh-plugin-pi-bridge](https://github.com/YYTbit/dsh-plugin-pi-bridge) ★2 · `dsh-plugin-pi-bridge` — Bridge pi skills and config into DeepSeek Harness
- [121103qwq/dsh-vision-sidecar](https://github.com/121103qwq/dsh-vision-sidecar) ★2 · `dsh-vision-sidecar` — Hosted free vision sidecar for DeepSeek Harness with durable session evidence
- [czm15053/dsh-peer-link](https://github.com/czm15053/dsh-peer-link) ★2 · `@deepseek-ai/dsh-peer-link` — DSH peer link — point-to-point messaging between dsh agents and other local agent sessions (e.g. Claude Code) over unix sockets. Independent plugin: register as a peer, receive messages into agent context, reply with peer_send, list peers with peer_list.
- [vibeinging/dsh-trace](https://github.com/vibeinging/dsh-trace) ★2 · `@deepseek-ai/dsh-trace` — DeepSeek Harness telemetry backend that exports turns, model steps, and tool calls to yiTrace over HTTP.
- [benzhoupo/dsh-dardar](https://github.com/benzhoupo/dsh-dardar) ★2 · `dsh-dardar` — DSH 插件：在模型选择框左侧显示当前 DeepSeek V4 Pro / V4 Flash 的 codexradar IQ，每 5 分钟刷新（CC BY 4.0）
- [JasonJin2006/dsh-sound-effects-plugin](https://github.com/JasonJin2006/dsh-sound-effects-plugin) ★2 · `@jasonjin06/dsh-sound-effects` — Sound effects plugin for DeepSeek Harness: ambient work music, success chime, and attention chime.
- [hashdiana/dsh-token-usage](https://github.com/hashdiana/dsh-token-usage) ★2 · `dsh-token-usage` — 更清晰美观的会话 Token 用量条：上下文占用、输入/输出/缓存分解、吞吐与首字延迟，取代默认的纯文本 stats 行
- [omdsh-dev/sandbox-nono](https://github.com/omdsh-dev/sandbox-nono) ★2 · `@deepseek-ai/dsh-sandbox-nono` — nono沙盒支持
- [omdsh-dev/dsh-ernie-image](https://github.com/omdsh-dev/dsh-ernie-image) ★2 · `dsh-ernie-image` — DSH ERNIE-Image-Turbo text-to-image plugin: generate images via Baidu AI Studio, save them as durable session attachments, plus a settings card and a generation gallery panel
- [sjscy05/matlab-modelsim-vivado-plugin](https://github.com/sjscy05/matlab-modelsim-vivado-plugin) ★2 · `mmv-dspic` — DeepSeek Harness plugin: MATLAB + ModelSim + Vivado full-flow tools for digital communication IC design tasks (mmv-dspic)
- [bitterSmilezzz/dsh-skill-manager](https://github.com/bitterSmilezzz/dsh-skill-manager) ★1 · `dsh-skill-manager` — Skills management page for DeepSeek Harness Web Settings (dsh plugin)
- [yoke233/dsh-pixel-whale](https://github.com/yoke233/dsh-pixel-whale) ★1 · `dsh-pixel-whale` — A lively pixel-whale running-state companion for DeepSeek Harness Web.
- [ben7am1n/dsh-claude-marketplace](https://github.com/ben7am1n/dsh-claude-marketplace) ★1 · `dsh-claude-marketplace` — Claude Code marketplace compatibility for DeepSeek Harness
- [hellosky983/dsh-skillradar](https://github.com/hellosky983/dsh-skillradar) ★1 · `dsh-skillradar` — Skill Radar for DeepSeek Harness (dsh): scan the current session's visible skills, score relevance against the conversation, and recommend which skill to load.
- [fryghost/deepseek-eyes](https://github.com/fryghost/deepseek-eyes) ★1 · `deepseek-eyes` — Community plugin for DeepSeek Harness: give text-only models eyes - paste images natively, described via an OpenAI-compatible vision API
- [omdsh-dev/session-teleport](https://github.com/omdsh-dev/session-teleport) ★1 · `@mattheliu/session-teleport` — PostgreSQL-backed single-writer session handoff service for DeepSeek Harness
- [dongsheng123132/dsh-action-parity](https://github.com/dongsheng123132/dsh-action-parity) ★1 · `dsh-action-parity` — Cross-surface action binding and replay parity evidence for DeepSeek Harness
- [Aidenwu0209/dsh-PaddleOCR-Skills](https://github.com/Aidenwu0209/dsh-PaddleOCR-Skills) ★1 · `dsh-paddleocr-skills` — PaddleOCR skills for DeepSeek Harness with native tools and GUI configuration
- [GengDaPeng/dsh-agent-message](https://github.com/GengDaPeng/dsh-agent-message) ★1 · `dsh-agent-message` — 跨会话 Agent 通信插件 for DeepSeek Harness：让同一进程里的不同 Agent 会话互相收发消息。
- [Small-tailqwq/dsh-tps](https://github.com/Small-tailqwq/dsh-tps) ★1 · `@dsh-external/tps` — 只是一个 tps 插件
- [030611/dsh-telemetry-redactor](https://github.com/030611/dsh-telemetry-redactor) ★1 · `dsh-telemetry-redactor` — Fail-closed export-copy redaction for DeepSeek Harness session telemetry
- [Yummyxl/dsh-eyecare](https://github.com/Yummyxl/dsh-eyecare) ★1 · `dsh-eyecare` — dsh护眼插件
- [Uddoo/dsh-dashboard](https://github.com/Uddoo/dsh-dashboard) ★1 · `dsh-dashboard` — Symphony-compatible Linear issue orchestrator and native operations dashboard for DeepSeek Harness.
- [dongsheng123132/dsh-benchmark](https://github.com/dongsheng123132/dsh-benchmark) ★1 · `dsh-benchmark` — Reproducible deterministic benchmark evidence for DSH tools and plugins
- [Leon0555/dsh-lan-access](https://github.com/Leon0555/dsh-lan-access) ★1 · `dsh-lan-access` — DSH plugin: bind the Web GUI to 0.0.0.0 for LAN access and polyfill crypto.randomUUID for non-secure (LAN HTTP) contexts. Trusted networks only.
- [lynkas/dsh-think-flow-flow](https://github.com/lynkas/dsh-think-flow-flow) ★1 · `dsh-think-flow-flow` — DeepSeek Harness client plugin: constant-rate typewriter reveal for assistant output and reasoning, with per-model gating.
- [arcmosin/dsh-wordbox](https://github.com/arcmosin/dsh-wordbox) ★1 · `dsh-wordbox` — DSH Web GUI常用词箱子，方便项目常用词的存储和粘贴 | DSH Web GUI Common Words Box – for storing and pasting frequently used project terms."
- [YKennen/dsh-zh-output](https://github.com/YKennen/dsh-zh-output) ★1 · `dsh-zh-output` — DeepSeek Harness 中文输出插件：强制中文思考与输出的中文预设
- [linyp/dsh-plugin-langfuse](https://github.com/linyp/dsh-plugin-langfuse) ★1 · `dsh-plugin-langfuse` — Langfuse observability for DeepSeek Harness (dsh): exports agent sessions as OpenTelemetry trace trees (GenAI semconv) to Langfuse's OTLP endpoint
- [bill9109/dsh-conversation-share](https://github.com/bill9109/dsh-conversation-share) ★1 · `@bill9109/dsh-conversation-share` — 分享任意段落的 DSH 对话
- [Hu9956/dsh-codex-provider](https://github.com/Hu9956/dsh-codex-provider) ★1 · `dsh-codex-provider` — OpenAI Codex provider for DeepSeek Harness with device-code OAuth, Codex CLI import, token refresh, and a web settings panel.
- [MOLAaaaaaaa/dsh-seismicx](https://github.com/MOLAaaaaaaa/dsh-seismicx) ★1 · `dsh-seismicx` — DeepSeek Harness plugin for the SeismicX earthquake-catalog skill
- [sliverp/DeepSeek-harness-weixin](https://github.com/sliverp/DeepSeek-harness-weixin) ★1 · `deepseek-harness-weixin` — Weixin ClawBot channel plugin for DeepSeek Harness with QR login and text/image messaging
- [zimixvx/dsh-archive-manager](https://github.com/zimixvx/dsh-archive-manager) ★1 · `dsh-archive-manager` — A minimal DeepSeek Harness Web plugin that lists archived sessions and permanently deletes an archived session directory after explicit confirmation.
- [030611/dsh-verification-receipt](https://github.com/030611/dsh-verification-receipt) ★1 · `dsh-verification-receipt` — Privacy-minimal heuristic per-turn verification summaries for DeepSeek Harness
- [tree201/dsh-capability-inspector](https://github.com/tree201/dsh-capability-inspector) ★1 · `dsh-capability-inspector` — DeepSeek Harness Doctor and DSH runtime diagnostics for tools, models, skills, workspaces, sessions, plugins, and MCP troubleshooting
- [PixLunaLab/dsh-plugin-pixluna](https://github.com/PixLunaLab/dsh-plugin-pixluna) ★1 · `dsh-plugin-pixluna` — dsh-plugin-pixluna | 让 DSH 自己看涩图！
- [CZX2244/dsh-bilibili](https://github.com/CZX2244/dsh-bilibili) ★1 · `dsh-bilibili` — DeepSeek Harness tool plugin: analyze Bilibili videos — transcript first, subtitle-driven keyframes, model summaries
- [qyw233/dsh-deeplink](https://github.com/qyw233/dsh-deeplink) ★1 · `@dsh-community/dsh-deeplink` — DSH WebUI 深链插件：?session=/?workspace= 直接打开指定项目对话
- [lynx-gt/dsh-subagent-cwd](https://github.com/lynx-gt/dsh-subagent-cwd) ★1 · `dsh-subagent-cwd` — DeepSeek Harness subagent delegation enhancement
- [Simon314620/dsh-turn-index](https://github.com/Simon314620/dsh-turn-index) ★1 · `dsh-turn-index` — deepseek harness的侧边栏对话轮次索引插件
- [jihongboo/dsh-apple-mode](https://github.com/jihongboo/dsh-apple-mode) ★1 · `dsh-apple-mode` — Xcode AI integration for DeepSeek Harness: 26 Xcode MCP tools (mcpbridge), Apple platform skills, Xcode Intelligence-style persona. Agent preset + global MCP bundle.
- [PerryLink/dsh-permission-rules](https://github.com/PerryLink/dsh-permission-rules) ★1 · `dsh-permission-rules` — Claude Code-style declarative permission rules for DeepSeek Harness: ordered allow/deny/ask rules with tool-name, argument (glob/regex), and workspace-path matching on the tools/pre-execute waterfall, session-log audit, and HMR reload.
- [miaobuao/dsh-document-parser](https://github.com/miaobuao/dsh-document-parser) ★1 · `dsh-document-parser` — A DeepSeek Harness document parsing tool powered by LiteParse
- [EvilIrving/dsh-repro](https://github.com/EvilIrving/dsh-repro) ★1 · `dsh-repro` — Minimal, secret-scrubbed, replayable problem bundles for DeepSeek Harness sessions (/repro).
- [omdsh-dev/dsh-scout](https://github.com/omdsh-dev/dsh-scout) ★1 · `@deepseek-ai/dsh-tool-scout` — 面向 DeepSeek Harness 的只读环境探测插件，为智能体提供运行环境、软件版本、系统资源、端口、服务、硬件及工作区信息。
- [chushixixin/dsh-harness-mcp-server](https://github.com/chushixixin/dsh-harness-mcp-server) ★1 · `@chushixixin/dsh-harness-mcp-server` — Expose DeepSeek Harness agent capabilities as an MCP server (brain=Hermes, arms=Harness)
- [PangYiMing/dsh-port-guard](https://github.com/PangYiMing/dsh-port-guard) ★1 · `dsh-port-guard` — DSH plugin: triage port conflicts (reuse / switch / precise kill) — 端口占用处置
- [DTSFO/dsh-model-modes](https://github.com/DTSFO/dsh-model-modes) ★1 · `dsh-model-modes` — Capability-aware reasoning controls and Fast model routing for DeepSeek Harness
- [omdsh-dev/sandbox-mxc](https://github.com/omdsh-dev/sandbox-mxc) ★1 · `@deepseek-ai/dsh-sandbox-mxc` — 微软跨平台沙盒支持
- [shujiTech/dsh-plugin-wepre](https://github.com/shujiTech/dsh-plugin-wepre) ★1 · `dsh-plugin-wepre` — DeepSeek Harness plugin: publish single-screen content cards to WePre Next from a dsh agent session
- [Opr4Mp3r/deepseek-harness-plugin-from-scratch](https://github.com/Opr4Mp3r/deepseek-harness-plugin-from-scratch) ★1 · `deepseek-harness-plugin-from-scratch` — Code-audited, progressive guide to production-grade DeepSeek Harness plugins
- [dongsheng123132/dsh-narrative-ledger](https://github.com/dongsheng123132/dsh-narrative-ledger) ★1 · `dsh-narrative-ledger` — Verifiable narrative state, continuity and character-knowledge ledger for DeepSeek Harness
- [quan2005/dsh-plugin-jinji](https://github.com/quan2005/dsh-plugin-jinji) ★1 · `dsh-plugin-jinji` — 把「记忆」带进 DeepSeek Harness：极简文本记忆系统，双轨记忆（流水日志 + 人物/产品实体画像），大模型为核心驱动。无需安装其他软件，无需编译，无第三方依赖。
- [lin-cheng-lab/dsh-deepseek-balance](https://github.com/lin-cheng-lab/dsh-deepseek-balance) ★1 · `dsh-deepseek-balance` — DeepSeek API 余额监视器：DSH 右下角悬浮徽章 + 7天/30天用量费用图表
- [ben7am1n/dsh-webhook-bridge](https://github.com/ben7am1n/dsh-webhook-bridge) ★1 · `dsh-webhook-bridge` — Generic webhook receiver for DeepSeek Harness — POST to a local endpoint to wake a dsh agent.
- [Elohia/dsh-plugin-mm-vision](https://github.com/Elohia/dsh-plugin-mm-vision) ★1 · `dsh-plugin-mm-vision` — mm-vision (通感编码器) for DeepSeek Harness — give any text-only LLM the ability to see images via structured spatial text encoding. Registers the mm_vision tool.
- [aryswisnu/dsh-eval-regression](https://github.com/aryswisnu/dsh-eval-regression) ★1 · `dsh-eval-regression` — Deterministic, CI-safe golden-output evaluation for DeepSeek Harness
- [shyboy/dsh-k12-lesson-builder](https://github.com/shyboy/dsh-k12-lesson-builder) ★1 · `dsh-k12-lesson-builder` — DeepSeek Harness plugin for generating synchronized K12 English PPTX and DOCX lesson materials
- [luoyu-xingu/dsh-background](https://github.com/luoyu-xingu/dsh-background) ★1 · `dsh-background` — DeepSeek Harness Web 背景图片插件:本地图片路径替换网页背景,外观设置行 + 实时预览
- [EvilIrving/dsh-proof](https://github.com/EvilIrving/dsh-proof) ★1 · `dsh-proof` — Read-only acceptance layer for DeepSeek Harness: a verifier gates every turn and steers gaps back into the agent.
- [918154429/dsh-codex-import](https://github.com/918154429/dsh-codex-import) ★1 · `dsh-codex-import` — Read-only Codex setup compatibility scanner for DeepSeek Harness
- [tappass/dsh-governance](https://github.com/tappass/dsh-governance) ★1 · `@tappass/dsh-governance` — The authority layer for agentic AI, as a DeepSeek Harness plugin. Governs every tool call against your business rules via TapPass /v1/govern.
- [kerwin2046/dsh-pin-recall](https://github.com/kerwin2046/dsh-pin-recall) ★1 · `dsh-pin-recall` — DeepSeek Harness plugin: pin assistant replies and recall them into the model turn
- [AmaTsumeAkira/opencode-usage](https://github.com/AmaTsumeAkira/opencode-usage) ★1 · `opencode-usage` — OpenCode Go 订阅额度徽章插件（dsh bundle） | OpenCode Go quota badge plugin for dsh
- [lin-cheng-lab/dsh-plugin-doctor](https://github.com/lin-cheng-lab/dsh-plugin-doctor) ★1 · `dsh-plugin-doctor` — DSH 插件体检：安装前检查 peer 版本兼容性，防止 rc 不匹配崩溃 🩺
- [omdsh-dev/web-components](https://github.com/omdsh-dev/web-components) ★1 · `@deepseek-ai/dsh-client-web-component` — web-components支持
- [ang-XWBWZ/dsh-approval-ai](https://github.com/ang-XWBWZ/dsh-approval-ai) ★1 · `@llangtop/dsh-approval-ai` — AI approval answerer for DeepSeek Harness (DSH) using the unified LLM route with fail-closed policy checks.
- [Spirtxiaoqi7/mindspace-dsh-local-rag](https://github.com/Spirtxiaoqi7/mindspace-dsh-local-rag) ★1 · `mindspace-dsh-local-rag` — ARPM-derived local hybrid RAG plugin for DeepSeek Harness
- [Luke-Yong/dsh-plugin-knowledge-graph](https://github.com/Luke-Yong/dsh-plugin-knowledge-graph) ★1 · `dsh-plugin-knowledge-graph` — dsh-plugin-knowledge-graph for Deepseek Harness
- [YYTbit/dsh-plugin-auto-docs](https://github.com/YYTbit/dsh-plugin-auto-docs) ★1 · `dsh-plugin-auto-docs` — Auto documentation generation skill for DeepSeek Harness
- [arrow949/dsh-turn-approval](https://github.com/arrow949/dsh-turn-approval) ★1 · `dsh-turn-approval` — Turn-scoped "Allow for this task" approvals for DeepSeek Harness.
- [Jolly-J/dsh-deepseek-billing](https://github.com/Jolly-J/dsh-deepseek-billing) ★1 · `dsh-deepseek-billing` — DSH WebUI 插件:DeepSeek 余额显示与按会话费用估算
- [ben7am1n/dsh-memory](https://github.com/ben7am1n/dsh-memory) ★1 · `dsh-memory` — Durable cross-session SQLite memory for DeepSeek Harness
- [ilharp/dsh-tool-approval](https://github.com/ilharp/dsh-tool-approval) ★1 · `dsh-tool-approval` — Manual approval for Deepseek Harness (aka "Manual Mode"/"Ask Mode")
- [baidd1011/dsh-code-impact](https://github.com/baidd1011/dsh-code-impact) ★1 · `dsh-code-impact` — 面向 DeepSeek Harness 的只读 TypeScript/JavaScript 代码变更影响分析插件 Read-only TypeScript/JavaScript change impact analysis plugin for DeepSeek Harness
- [hahaha-taotao/dsh-oauth-api](https://github.com/hahaha-taotao/dsh-oauth-api) ★1 · `dsh-oauth` — DeepSeek Harness (dsh) out-of-tree OAuth plugin for Grok/xAI, Codex, and Claude Code. Community plugin, not official.
- [beancookie/dsh-plugin-anydoc](https://github.com/beancookie/dsh-plugin-anydoc) ★1 · `dsh-plugin-anydoc` — DSH 插件：基于 @firecrawl/anydoc 将 Word、PPT、Excel、PDF、EPUB、CSV 等文档转换为 GitHub-Flavored Markdown
- [dongsheng123132/dsh-capability-receipt](https://github.com/dongsheng123132/dsh-capability-receipt) ★1 · `dsh-capability-receipt` — Content-addressed receipts for skills actually loaded by DeepSeek Harness
- [alooshxl/dsh-session-pins](https://github.com/alooshxl/dsh-session-pins) ★1 · `@dsh-external/dsh-session-pins` — Persistent pinned-session menu for DeepSeek Harness
- [lynx-gt/dsh-subagent-tools](https://github.com/lynx-gt/dsh-subagent-tools) ★1 · `dsh-subagent-tools` — DeepSeek Harness subagent delegation enhancement
- [dongsheng123132/dsh-2origin](https://github.com/dongsheng123132/dsh-2origin) ★1 · `dsh-2origin` — Evidence-first 2Origin state projection, diff and immutable freeze for DeepSeek Harness
- [inmny/dsh-git-bash](https://github.com/inmny/dsh-git-bash) ★1 · `dsh-plugin-git-bash` — Use Git for Windows Bash as the default DSH shell with restricted-mode support
- [Liu-ty/dsh-balance-display](https://github.com/Liu-ty/dsh-balance-display) ★1 · `dsh-balance-display` — DeepSeek API balance overlay for DeepSeek Harness
- [xiaoshihou514/dsh-weixin](https://github.com/xiaoshihou514/dsh-weixin) ★1 · `dsh-weixin` — DeepSeek Harness: Weixin
- [dongsheng123132/dsh-audit-bundle](https://github.com/dongsheng123132/dsh-audit-bundle) ★1 · `dsh-audit-bundle` — Content-addressed audit indexes across independent DeepSeek Harness evidence producers
- [dongsheng123132/dsh-release-proof](https://github.com/dongsheng123132/dsh-release-proof) ★1 · `dsh-release-proof` — Reproducible multi-source release evidence for DeepSeek Harness
- [TTTPOB/dsh-task-models](https://github.com/TTTPOB/dsh-task-models) ★1 · `dsh-task-models` — DeepSeek Harness plugin with per-task model and reasoning-effort selection
- [PangYiMing/dsh-batch-regression](https://github.com/PangYiMing/dsh-batch-regression) ★1 · `dsh-batch-regression` — DSH plugin: run a command N rounds, judge by median/distribution — 批量回归取统计结论
- [agent-plaza/agent-plaza](https://github.com/agent-plaza/agent-plaza) ★1 · `agent-plaza` — Zero-signup public commons for AI agents — HTTP API + Agent Skill (Codex, Cursor, Hermes)
- [kam74515-boop/dsh-everything-oauth](https://github.com/kam74515-boop/dsh-everything-oauth) ★1 · `dsh-everything-oauth` — Import local Codex / Grok / Claude / OpenCode / CC Switch logins into DeepSeek Harness
- [dongsheng123132/dsh-policy-drift-proof](https://github.com/dongsheng123132/dsh-policy-drift-proof) ★1 · `dsh-policy-drift-proof` — Content-addressed, value-redacted policy drift evidence for DeepSeek Harness
- [YYTbit/dsh-plugin-context-compressor](https://github.com/YYTbit/dsh-plugin-context-compressor) ★1 · `dsh-plugin-context-compressor` — Context compression skill for DeepSeek Harness
- [fflow2023/dsh-usage-cost](https://github.com/fflow2023/dsh-usage-cost) ★1 · `@fflow2023/dsh-usage-cost` — Lightweight DeepSeek Harness plugin: per-session + global API cost stats (peak/off-peak pricing)
- [walavave/dsh-git](https://github.com/walavave/dsh-git) ★1 · `dsh-git` — Git capability bundle for DeepSeek Harness: structured git tools, approval-gated mutations, and auto-checkpoints.
- [Aidenwu0209/dsh-Unlimited-OCR-Skill](https://github.com/Aidenwu0209/dsh-Unlimited-OCR-Skill) ★1 · `dsh-unlimited-ocr-skill` — Unlimited-OCR for DeepSeek Harness with a native tool and GUI configuration
- [yflmq001/dsh-cost-tracker](https://github.com/yflmq001/dsh-cost-tracker) ★1 · `dsh-cost-tracker` — Token cost tracking for DeepSeek Harness
- [forrestsweet/dsh-agent-replay](https://github.com/forrestsweet/dsh-agent-replay) ★1 · `dsh-agent-replay` — DeepSeek Harness 会话回放与脱敏分享插件：将真实 Agent 轨迹导出为独立交互 HTML，用于文档、演示和问题反馈。
- [vibeinging/dsh-turn-navigator](https://github.com/vibeinging/dsh-turn-navigator) ★1 · `@deepseek-ai/dsh-turn-navigator` — Private DSH Web turn navigation plugin
- [ben7am1n/dsh-mcp-proxy](https://github.com/ben7am1n/dsh-mcp-proxy) ★1 · `dsh-mcp-proxy` — Context-cheap lazy MCP access for DeepSeek Harness
- [Acidmoon/DIzzy-DSH](https://github.com/Acidmoon/DIzzy-DSH) ★1 · `dizzy-dsh` — My DSH plugins
- [Seryta/dsh-node-nav](https://github.com/Seryta/dsh-node-nav) ★1 · `dsh-node-nav` — 对话节点导航：DSH Web GUI 右侧节点串，hover 预览、点击跳转、active 药丸跟随阅读位置
- [Spirtxiaoqi7/mindspace-dsh-session-memory](https://github.com/Spirtxiaoqi7/mindspace-dsh-session-memory) ★1 · `mindspace-dsh-session-memory` — Editable, session-isolated personalization memory for DeepSeek Harness
- [GuoMonth/dsh-multi-tenant](https://github.com/GuoMonth/dsh-multi-tenant) ★1 · `dsh-multi-tenant` — Multi-tenant SaaS extension for DeepSeek Harness (DSH): tenant identity, session isolation, authorization, tenant-aware MCP, and audit.
- [dongsheng123132/dsh-cost](https://github.com/dongsheng123132/dsh-cost) ★1 · `dsh-cost` — Evidence-first token cost ledger and budget checks for DeepSeek Harness
- [pandashere/dsh-codex-bridge](https://github.com/pandashere/dsh-codex-bridge) ★1 · `dsh-codex-bridge` — Codex CLI bridge plugin for DeepSeek Harness with host tools and a Web conversation tab.
- [jumpserver-east/jumpserver-dsh](https://github.com/jumpserver-east/jumpserver-dsh) ★1 · `dsh-jumpserver` — DeepSeek Harness plugin: manage JumpServer assets and operate on them through KoKo
- [MysaDC/dsh-plugin-description](https://github.com/MysaDC/dsh-plugin-description) ★1 · `dsh-plugin-description` — mount one row in the composition and every plugin card on the Web Settings plugin list page gets a bilingual (zh/en) description; it also publishes the pluginDescriptions service so other plugins can register their own descriptions.
- [Xenia0922/dsh-opencode-go-usage](https://github.com/Xenia0922/dsh-opencode-go-usage) ★1 · `dsh-opencode-go-usage` — DeepSeek Harness 插件:OpenCode Go 用量与花费悬浮仪表盘(配额、逐请求成本、模型/来源分布)
- [benzhoupo/dsh-effort-config](https://github.com/benzhoupo/dsh-effort-config) ★1 · `dsh-effort-config` — dsh plugin: configure reasoning-effort levels (wire spellings), route default level and Anthropic token budgets for third-party models from the settings page; selection reuses the native model-picker Effort panel.
- [Moeblack/dsh-skins](https://github.com/Moeblack/dsh-skins) ★1 · `@dsh-external/dsh-web-skins` — Mirror of dsh-external/dsh-skins + feat: harbor (夕港) dusk-harbor skin
- [xiaoshihou514/dsh-vision](https://github.com/xiaoshihou514/dsh-vision) ★1 · `dsh-vision` — DeepSeek Harness: vision
- [PerryLink/dsh-mcp-panel](https://github.com/PerryLink/dsh-mcp-panel) ★1 · `dsh-mcp-panel` — Read-only runtime management panel for the official DeepSeek Harness MCP client: /mcp command + Settings MCP tab with status, tools, errors, reconnect counts, sanitized display and controlled patch suggestions (Apache-2.0, dsh-plugin).
- [blue-a11y/dsh-client-shortcuts](https://github.com/blue-a11y/dsh-client-shortcuts) ★1 · `@blue-a11y/dsh-client-shortcuts` — Global keyboard shortcuts plugin for the DeepSeek Harness web GUI: ctx.shortcuts registry service + mod+l/mod+k/mod+shift+c default bindings
- [huguangyu666/dsh-plugin-session-import](https://github.com/huguangyu666/dsh-plugin-session-import) ★1 · `dsh-plugin-session-import` — DeepSeek Harness plugin: import claude-code / codex / reasonix / zcode sessions
- [YYTbit/dsh-plugin-agent-dashboard](https://github.com/YYTbit/dsh-plugin-agent-dashboard) ★1 · `dsh-plugin-agent-dashboard` — Multi-agent dashboard skill for DeepSeek Harness
- [bobcat848/dsh-calculator](https://github.com/bobcat848/dsh-calculator) ★1 · `dsh-calculator` — Calculate the real-time cost of DeepSeek API calls made by DeepSeek Harness.
- [suimi8/dsh-cost-ledger](https://github.com/suimi8/dsh-cost-ledger) ★1 · `dsh-cost-ledger` — Cross-session persistent cost ledger for DeepSeek Harness: logs every LLM token usage to SQLite and exposes record/query/budget tools. Built-in DeepSeek pricing, overridable via config.
- [Demogorgon314/dsh-resume-plugin](https://github.com/Demogorgon314/dsh-resume-plugin) ★1 · `dsh-resume-plugin` — 让 DeepSeek Harness 安全读取并继续 Codex 与 Claude Code 的历史会话。
- [TIZ36/evo-memory](https://github.com/TIZ36/evo-memory) ★1 · `evo-memory` — agent memory plugin based on CLP
- [dongsheng123132/dsh-recovery-proof](https://github.com/dongsheng123132/dsh-recovery-proof) ★1 · `dsh-recovery-proof` — Read-only recovery drill evidence for DeepSeek Harness
- [v587d/dsh-opencode-go-usage](https://github.com/v587d/dsh-opencode-go-usage) ★1 · `dsh-ocgo-usage` — A DeepSeek Harness (dsh) bundle that shows OpenCode Go subscription usage in the Web GUI's composer dock — the same seat as the built-in conversation stats line.
- [wuwangmao/dsh-qwen-multimodal](https://github.com/wuwangmao/dsh-qwen-multimodal) ★0 · `dsh-qwen-multimodal` — DSH bundle: Qwen multimodal bridge — vision (qwen3-vl), speech-to-text (qwen3-asr), text-to-image (qwen-image), for DeepSeek Harness
- [zhangzujian/dsh-same-mode-sandbox-noop](https://github.com/zhangzujian/dsh-same-mode-sandbox-noop) ★0 · `@zhangzujian/dsh-same-mode-sandbox-noop` — DSH compatibility plugin for redundant same-mode sandbox escalation requests
- [YiHarvest/dsh-failure-capsule](https://github.com/YiHarvest/dsh-failure-capsule) ★0 · `dsh-failure-capsule` — Local-first failure evidence capsules for DeepSeek Harness sessions
- [cyberlieflife/dsh-model-thinking](https://github.com/cyberlieflife/dsh-model-thinking) ★0 · `dsh-model-thinking` — DSH (DeepSeek Harness) web plugin: thinking intensity / reasoning effort settings for custom OpenAI-compatible (pi-ai) models
- [YOLO-LZL/dsh-ssh-plugin](https://github.com/YOLO-LZL/dsh-ssh-plugin) ★0 · `dsh-ssh-plugin` — SSH tool plugin for DeepSeek Harness: persisted SSH connections, workspace-bound defaults, and the ssh_exec model tool
- [fishxcode/dsh-plugin-deepseek-balance](https://github.com/fishxcode/dsh-plugin-deepseek-balance) ★0 · `dsh-plugin-deepseek-balance` — DeepSeek Harness Web client plugin that displays real-time DeepSeek API balance.
- [a903067276-rgb/dsh-hud](https://github.com/a903067276-rgb/dsh-hud) ★0 · `dsh-hud` — HUD status panel plugin for DeepSeek Harness (dsh) web: git status, MCP servers, skills, model & token usage in a floating panel
- [Jesse-njx/dsh-crosstalk](https://github.com/Jesse-njx/dsh-crosstalk) ★0 · `@dsh-crosstalk/bundle` — Cross-session messaging for DSH — any session on the machine can list and message any other, Claude Code-style
- [Xplore-LAB/dsh-plugin-asmemory](https://github.com/Xplore-LAB/dsh-plugin-asmemory) ★0 · `dsh-plugin-asmemory` — Action-State Memory Engine: typed time-series memory (states + actions) with trend/anomaly/causal analysis for DeepSeek Harness
- [EvilIrving/dsh-context-proxy](https://github.com/EvilIrving/dsh-context-proxy) ★0 · `dsh-context-proxy` — On-demand context retrieval for DeepSeek Harness: context_query / context_slice / context_grep tools.
- [zimai233/dsh-exam-countdown](https://github.com/zimai233/dsh-exam-countdown) ★0 · `dsh-exam-countdown` — Chinese exam countdown for DeepSeek Harness. Query 64 built-in exams (gaokao, kaoyan, civil service, CET-4/6, CPA, bar exam...) and get days-until dates computed by pure date math with rolling yearly recurrence.
- [zimai233/dsh-adhd-copilot](https://github.com/zimai233/dsh-adhd-copilot) ★0 · `dsh-adhd-copilot` — ADHD behavioral coaching skill for DeepSeek Harness. Guides readers through task execution - breaks tasks into micro-steps, manages overwhelm, provides launch rituals, calibrates time estimates, and recovers from self-blame.
- [zimai233/dsh-video-downloader](https://github.com/zimai233/dsh-video-downloader) ★0 · `dsh-video-downloader` — Media downloader for DeepSeek Harness. Detect and download video/audio from Bilibili, YouTube, Douyin, Xiaohongshu.
- [minybear/DeepSeek-Harness-Pet](https://github.com/minybear/DeepSeek-Harness-Pet) ★0 · `@minybear/dsh-pet` — Codex-style desktop pet plugin for DeepSeek Harness

</details>

<a id="related-projects"></a>
## Related projects

These repositories use the `dsh-plugin` topic but do not currently expose an installable `dsh.bundle`. They may still be useful as launchers, documentation, skill collections, or development resources.

<details>
<summary><strong>Browse 429 related projects</strong></summary>

- [nexu-io/open-design](https://github.com/nexu-io/open-design) ★85831 — 🎨 The open-source Claude Design alternative. 🖥️ Local-first desktop app. 🖼️ Your coding agent becomes the design engine: prototypes, landing pages, dashboards, slides, images & video — real files, HTML/PDF/PPTX/MP4 export. 🤖 Claude Code / Codex / Cursor / Gemini / OpenCode / Qwen & 20+ CLIs via BYOK.
- [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) ★80399 — DeepSeek Harness: Everything is a Plugin.
- [titanwings/colleague-skill](https://github.com/titanwings/colleague-skill) ★21716 — 将冰冷的离别化为温暖的 Skill，欢迎加入数字生命1.0！Transforming cold farewells into warm skills? It's giving rebirth era. Welcome to Digital Life 1.0. 🫶
- [Devin-AXIS/iPolloWork](https://github.com/Devin-AXIS/iPolloWork) ★3817 — A next-generation, source-available AI workspace with a self-evolving agent runtime for editable code, design, presentations, websites, and video—a Codex alternative that integrates DeepSeek Harness for subagent delegation, combining iPolloWork’s complete AI workbench with DSH’s specialized agents and both plugin ecosystems in one workflow.
- [imsai-sh/zhuzhiliao](https://github.com/imsai-sh/zhuzhiliao) ★2716 — 竹知了 —— 一转就哇哇叫的传统玩具，Web 模拟版。零依赖单文件，真实录音采样，移动端优先。
- [foryourhealth111-pixel/Vibe-Skills](https://github.com/foryourhealth111-pixel/Vibe-Skills) ★2710 — VibeSkills is a general-purpose Skill that automatically routes local Skills and intelligently orchestrates harness workflows.
- [whiteguo233/OpenBiliClaw](https://github.com/whiteguo233/OpenBiliClaw) ★2229 — 本地私有、开源的自进化跨平台 AI 内容发现 Agent：先理解你，再主动从 B站、小红书、抖音、YouTube、X、知乎、Reddit、微博等平台与开放 Web 寻找内容。（支持 deepseek harness 插件） | Local-first open-source cross-platform AI content discovery agent: understands you, then proactively finds content across Bilibili, Xiaohongshu, Douyin, YouTube, X, Zhihu, Reddit, Weibo and the open web.（support deepseek harness plugin）
- [zhu1090093659/dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui) ★1344 — Plugin and skin collection for DeepSeek Harness (DSH) Web UI - task board, git graph, right-side panel, remote mobile UI, pet, live token stats, and skin center.
- [paean-ai/deeptide](https://github.com/paean-ai/deeptide) ★1042 — Built by DeepSeek, for DeepSeek — a Swift-native macOS coding agent
- [PicGo/PicGo-Core](https://github.com/PicGo/PicGo-Core) ★965 — :zap:The ultimate image uploading engine. Both CLI & API supports.
- [nutshellai-tech/mobius](https://github.com/nutshellai-tech/mobius) ★939 — The first self-evolving open-source Agent OS, connecting your team, AI agents, devices, and compute
- [xyTom/coding-tools-mcp](https://github.com/xyTom/coding-tools-mcp) ★753 — Give any AI agent the ability to code
- [Anionex/agent-vision-toolkit](https://github.com/Anionex/agent-vision-toolkit) ★750 — 为纯文本模型"看图“设计更好的视觉工具箱和技能，支持多图理解，图片问答，前端UI还原、GUI 自动化等，并可选无缝接入多个主流agent，直接识别粘贴图片｜ A vision toolkit and skill designed for text-only llms — image Q&A, long-screenshot OCR, frontend UI restoration, and GUI automation, with optional seamless integration for Codex, Claude Code, Pi, Oh My Pi, and OpenCode
- [hellowind777/helloagents](https://github.com/hellowind777/helloagents) ★673 — 一个自主的高级智能伙伴，不仅分析问题，更持续工作直到完成实现和验证。
- [AdamPlatin123/awesome-dsh-plugins](https://github.com/AdamPlatin123/awesome-dsh-plugins) ★625 — 前部索引仓库（Radar）：自动扫描发现的所有 dsh 插件候选；经测试合格的将移入后序精选目录仓库
- [yejiming/MuseAI](https://github.com/yejiming/MuseAI) ★525 — 创建你的 AI 角色，进入你的故事世界。和角色聊天、冒险、穿书，让每一次互动都留下羁绊（支持 DeepSeek Harness 插件，欢迎使用）
- [awesome-dsh-plugin/awesome-dsh-plugin](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin) ★487 — A curated list of plugins for DeepSeek Harness (dsh) · DeepSeek Harness 插件精选列表
- [mnemon-dev/mnemon](https://github.com/mnemon-dev/mnemon) ★426 — LLM-supervised persistent memory for AI agents — graph-based recall, cross-session knowledge, single binary. Works with Claude Code, OpenClaw, and any CLI agent.
- [Small-tailqwq/dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale) ★388 — DSH Web 鲸鱼娘皮肤系列(深海女仆工坊 maid-atelier)——CC BY-NC-SA 4.0
- [PM-Shawn/Abu-Cowork](https://github.com/PM-Shawn/Abu-Cowork) ★321 — Open-source alternative to Claude Cowork — a local-first AI agent desktop app · multi-model · self-evolving skills · privacy-first · multi-Harness roadmap · DeepSeek Harness integration in progress
- [linhay/harmony-next.skills](https://github.com/linhay/harmony-next.skills) ★313 — 🚀 Expert guidance for HarmonyOS NEXT (API 12+) development. Covers IDE operations, performance tuning, architecture (HAP/HAR/HSP), and automation testing.
- [morluto/rea](https://github.com/morluto/rea) ★297 — Reverse engineer anything with agents, from app behavior down to native binaries.
- [alaliqing/claude-paper](https://github.com/alaliqing/claude-paper) ★290 — 📚 Claude Code plugin that automates research papers study with automatic material generation, code demonstrations, and interactive web viewer.
- [0xsline/awesome-deepseek-harness](https://github.com/0xsline/awesome-deepseek-harness) ★290 — DeepSeek Harness (DSH) ecosystem: curated plugins, tools, and infrastructure from dsh-external/hub and the public dsh-plugin topic.
- [cofy-x/axern](https://github.com/cofy-x/axern) ★266 — Open-source sandboxes for AI agents, untrusted code execution, and durable services.
- [SepineTam/mcp-for-stata](https://github.com/SepineTam/mcp-for-stata) ★243 — A MCP server for Stata to integrate Stata into your agent.
- [openma-ai/open-managed-agents](https://github.com/openma-ai/open-managed-agents) ★235 — Open-source Claude Managed Agents API implementation and self-hosted Claude Tag-style agent runtime. Drop-in compatible; runs on Cloudflare Workers/Durable Objects or Node.js. Apache 2.0.
- [TencentCloud/tencentmeeting-cli](https://github.com/TencentCloud/tencentmeeting-cli) ★140 — 腾讯会议命令行工具（CLI），基于腾讯会议开放平台 OAuth2 授权，支持会议管理、录制管理、参会报告等功能。
- [zhaoolee/notes](https://github.com/zhaoolee/notes) ★137 — 开源版锤子便签，复刻锤科美学，一键Docker私有化部署，支持skill调用，支持dsh plugin，支持多租户，一键生成公众号格式，支持导出便签为图片
- [humblebanana/open-record-replay](https://github.com/humblebanana/open-record-replay) ★135 — Open-source macOS record-and-replay workflow recorder for computer use agents. Captures mouse, keyboard, and UI events as structured traces so agents can learn, replay, and automate real desktop tasks.
- [Ariestar/sivtr](https://github.com/Ariestar/sivtr) ★131 — A unified agent memory workspace for human and agent
- [Electricitysheep/dsh-handbook](https://github.com/Electricitysheep/dsh-handbook) ★128 — DeepSeek Harness (dsh) 从 0 到 1 深度手册：安装/插件开发/性能调优/实测案例/同模型多 Agent 实测对比（中文 + 英文 PDF）
- [drewnekota/cetus](https://github.com/drewnekota/cetus) ★114 — One macOS app for Claude Code, Codex, and every agent runtime you use — scheduled runs, global hotkey launcher, per-run git worktrees, one review board.
- [Sikao-Engine/KimiX](https://github.com/Sikao-Engine/KimiX) ★104 — The next-gen lightweight coding agent cli
- [pulseaiclub/phi](https://github.com/pulseaiclub/phi) ★75 — a coding Agent from pi. ∞ providers, sub-agents, hashline edits, and a permission gate
- [wink-run/tokenbank](https://github.com/wink-run/tokenbank) ★71 — Token Bank — the local LLM gateway that sits between your AI agents and every provider.  Know where tokens go · Spend less with smart routing to Ollama, Groq, GitHub Models · Earn by sharing idle quota on a community P2P network.  One-click onboarding for Cursor, Claude Code, Codex CLI, Gemini CLI — no agent changes. Full trace, seamless model swap
- [Lum1104/dsh-browser](https://github.com/Lum1104/dsh-browser) ★67 — dsh plugin: Chrome sidebar extension that lets DSH operate your browser directly—no vision capabilities required.
- [taxueseek/argo](https://github.com/taxueseek/argo) ★64 — 专门为 agent 打造的 agent 搜索工具，具备多语言搜索能力，覆盖中文/英文/学术/代码/购物/金融/新闻/百科。
- [Nagi-ovo/dsh-find-plugins](https://github.com/Nagi-ovo/dsh-find-plugins) ★62
- [bruc3van/awesome-dsh-plugin](https://github.com/bruc3van/awesome-dsh-plugin) ★54 — 用 30 秒找到适合你的 DeepSeek Harness 插件。 不只是仓库列表：这里告诉你插件解决什么问题、适合谁，以及从哪里开始。
- [Ruler4396/dsh-launcher](https://github.com/Ruler4396/dsh-launcher) ★50 — Lightweight Windows launcher for DeepSeek Harness: silent autostart at logon + a minimal WebView2 window instead of a full browser
- [Lyn-77/ProMentor](https://github.com/Lyn-77/ProMentor) ★48 — ProMentor 是一个 AI Coding Agent Skill。装上它，你的 AI 编程助手立刻化身为导师——扫描项目架构、生成阶梯式 Chapter、带你手写核心逻辑、自动判题、AI Code Review。
- [Alex-Yanggg/awesome-DSH-plugin](https://github.com/Alex-Yanggg/awesome-DSH-plugin) ★45 — A meticulously curated list of useful plugins, extensions, tools and development resources built for DSH, covering productivity enhancement, functional expansion, debugging utilities and custom development modules.
- [btspoony/mstar-harness](https://github.com/btspoony/mstar-harness) ★41 — A Skill-driven Harness/Loop Engineering Workflow Agent Plugin
- [morluto/jacobian](https://github.com/morluto/jacobian) ★40 — Pure mathematics for agents: search for examples and counterexamples, compute exactly, and independently check what a result proves.
- [LaplaceYoung/oh-my-dsh](https://github.com/LaplaceYoung/oh-my-dsh) ★40 — oh-my-dsh：面向 DSH (DeepSeek Harness) 的插件生态——700+ 插件，只通过扩展接缝注册，不修改 agent-loop 骨架
- [ChisaAlter/Deepseek-Harness-Desktop](https://github.com/ChisaAlter/Deepseek-Harness-Desktop) ★31 — DSH桌面端，支持主题和背景图等多种个性化配置。Electron desktop shell for DeepSeek Harness web UI
- [morluto/flameox](https://github.com/morluto/flameox) ★31 — Runtime evidence that helps agents trace, profile, and burn down hotspots in application and native code, GPU kernels, and inference stacks.
- [csyangwen/dsh-memory-evolve](https://github.com/csyangwen/dsh-memory-evolve) ★30 — 为 DeepSeek Harness 带来「跨会话长期记忆 + 后台自我进化」能力的纯插件实现：五轨记忆 · git 分支感知 · 回合内自我审查 · 技能自我进化与技能管理器 · 四轨待办 · COI 调度 · 会话广播 · 会话搜索 · 提示词管理器 · 临时信息便签——零核心修改、零运行时依赖，随装随用、卸载即净。
- [yuukiLike/zeromd](https://github.com/yuukiLike/zeromd) ★30 — Obsidian 零成本同步：iPhone ↔ Mac，GitHub 自动备份。本地优先 + 长期积累。｜Local First. Zero-cost Obsidian sync across iPhone, Mac & GitHub. Let knowledge grow over time.
- [hanelalo/browser-bridge](https://github.com/hanelalo/browser-bridge) ★29 — 让你的agent真的像你一样操控你的浏览器窗口
- [vlln/plugin-registry](https://github.com/vlln/plugin-registry) ★28 — DSH 插件生态基建：薄控制台（浏览器面板管理官方 repository 插件，0 patch）+ make-dsh-plugin skill 官方插件开发引导
- [openguardrails/openguardrails](https://github.com/openguardrails/openguardrails) ★25 — The vendor-neutral protocol for AI agent safety & security — and the neutral benchmark that ranks the vendors.
- [Dominic789654/awesome-deepseek-harness](https://github.com/Dominic789654/awesome-deepseek-harness) ★24 — A curated list of plugins, skills, MCP servers, patch/profile layers, orchestrators & UIs for DeepSeek Harness (DSH). Visualization · PPT · Coding · Agents · Loops (auto-research) and more. #dsh
- [zenx0x/allinluna](https://github.com/zenx0x/allinluna) ★24 — Resource-aware multi-agent orchestration for Codex and DeepSeek Harness (All in Flash DSH plugin)
- [lhh010/dsh-ui-whale](https://github.com/lhh010/dsh-ui-whale) ★23 — 【求⭐】🐋DSH Web UI 全手绘像素鲸鱼伙伴插件：会话标题栏常驻，平时眨眼/偶尔摆尾/动胸鳍，思考运行时持续动起来，回合完成头顶喷水，点击还会冒爱心，不工作时还会偷懒睡觉，零核心改动。 【喜欢的话就点点star⭐吧~】
- [pingfanfan/hello-dsh](https://github.com/pingfanfan/hello-dsh) ★22 — 从零开始，看懂 DeepSeek Harness 的「万物皆可插件」— 零基础插件开发教程（含 22 个中文技能实例）| Zero-to-plugin tutorial for DeepSeek Harness
- [libukai/awesome-deepseek-harness](https://github.com/libukai/awesome-deepseek-harness) ★22 — DeepSeek Harness 终极指南：快速入门、资源推荐、精选插件与实用工具 ｜The Ultimate Guide to DeepSeek Harness: QuickStart, Resources, Plugins&Toolkit
- [ali-meoo/meoo-cli](https://github.com/ali-meoo/meoo-cli) ★21 — meoo cli 是秒悟（Meoo）官方推出的命令行工具，让 Claude Code、Codex、Cursor、Qoder等本地 agent 在帮你写完前端代码后，能直接接管「数据库、用户登录、文件存储、部署上线」的所有云端工作——你只需要在终端跑一条命令，剩下的交给 AI。
- [vibeinging/dsh-work](https://github.com/vibeinging/dsh-work) ★21 — Local-first AI workbench for DSH Plugins, combining Agent sessions, project files, data analysis, web research, MCP, and Office artifacts in an Electron desktop app.
- [huiliyi37/dsh-tianshu-build](https://github.com/huiliyi37/dsh-tianshu-build) ★19 — dsh-tianshu-tui — DeepSeek Harness terminal UI
- [iuikj/dsh-desktop](https://github.com/iuikj/dsh-desktop) ★18 — 一个微调美观的DeepSeek harness客户端（欢迎插件加入）
- [whiteguo233/dsh-openbiliclaw](https://github.com/whiteguo233/dsh-openbiliclaw) ★17 — OpenBiliClaw 是本地运行的跨平台个性化内容推荐 Agent，持续理解你的兴趣并主动找内容。本仓库是它的 DeepSeek Harness 插件：DSH 界面常驻第四栏（推荐/内容库/对话/画像/设置），注册 22 个 Agent Bridge 工具，让 Agent 也能读推荐、答探测、闭环学习。
- [YunTaiHua/illusion-agent](https://github.com/YunTaiHua/illusion-agent) ★17 — Illusion-Agent: Where fantasy meets functionality — an AI agent platform for terminal, browser, any model, any OS.
- [wess09/DeepSeekHarnessDesktop](https://github.com/wess09/DeepSeekHarnessDesktop) ★16 — DeepSeekHarness桌面端打包
- [morluto/leantoken](https://github.com/morluto/leantoken) ★16 — Code intelligence for agents: find the code that matters and keep your context window and tokens lean.
- [william-jin-cmu/dsh-vision](https://github.com/william-jin-cmu/dsh-vision) ★15 — dsh 插件：给纯文本 DeepSeek 加视觉——view_image 工具桥接任意 OpenAI 兼容 VLM（默认智谱免费档，实测 4 厂商 10 模型）
- [bruc3van/dsh-desktop](https://github.com/bruc3van/dsh-desktop) ★15 — DeepSeek Harness Desktop 是一款第三方桌面客户端，通过直接加载官方 Web UI，为普通用户提供开箱即用的独立桌面体验：它可以自动复用本机已运行的官方实例，也可以使用安装包内置的 dsh 运行时启动服务，无需用户额外安装 Node.js 或 CLI，并提供智能连接、远程实例连接、托盘常驻、运行时监护和异常恢复等桌面增强。
- [JustGenius-s/DSH-Desktop](https://github.com/JustGenius-s/DSH-Desktop) ★14 — DSH-Desktop
- [bradeGithub/DSH-Plugins-Marketplace](https://github.com/bradeGithub/DSH-Plugins-Marketplace) ★14 — DSH插件市场 / DSH Plugin Marketplace: 在 DeepSeek Harness Web GUI 中一键浏览、安装与更新 GitHub topic:dsh-plugin 的全部插件 | browse, install & update all GitHub dsh-plugin plugins in the DSH Web GUI
- [dqsjqian/Aria](https://github.com/dqsjqian/Aria) ★14 — Modern C++20 MVVM framework — cross-platform, layered, coroutine-first. Reactive DAG (Property/Computed/Effect), Task<T>, and pluggable adapters (Qt6, AppKit, ...).
- [SenmuuuuW/dsh-group-photo](https://github.com/SenmuuuuW/dsh-group-photo) ★13 — DSH 内测收官合影墙：GitHub OAuth 零权限登录 + 冻结白名单校验的拍立得合影站（含 DSH Skill 包装）
- [hikariming/dshfind](https://github.com/hikariming/dshfind) ★13 — DSH (DeepSeek Harness) 原理学习、插件市场与最佳实践 · Learn DSH principles, plugin marketplace & best practices
- [HeiGeAi/deepseek-harness-skin](https://github.com/HeiGeAi/deepseek-harness-skin) ★11 — DeepSeek Harness 换肤系统：21 套内置皮肤 + 一张图生成整套配色的自定义皮肤。数据源驱动，保对比度推导，构建期校验可读性。
- [like-study1/Oh-My-DSH](https://github.com/like-study1/Oh-My-DSH) ★11 — 🐳 DeepSeek Harness 插件聚合社区 — 自动同步 dsh-plugin 生态 · 精选目录 · 每 8 小时自动维护 | Oh-My-DSH: a community-maintained catalog of DeepSeek Harness plugins, auto-synced from the dsh-plugin topic
- [147228/dsh-xiaoyao-skins](https://github.com/147228/dsh-xiaoyao-skins) ★11 — 夕小瑶 × DeepSeek Harness Web 皮肤合集、安装器与社区创作工具链
- [huawolf/news-agent](https://github.com/huawolf/news-agent) ★11 — AI-powered personal news aggregator with LLM scoring, Web console, and push notifications to Feishu/Discord.
- [CanglongCl/dsh-web-review](https://github.com/CanglongCl/dsh-web-review) ★11 — DeepSeek Harness Web GUI 的网页预览与元素批注插件，让 AI 根据可视化反馈直接修改前端源码。
- [GoalfyAI/goalfydata](https://github.com/GoalfyAI/goalfydata) ★9 — A shared data backend for AI agents and authorized teams.
- [Fisfzy/ego-browser](https://github.com/Fisfzy/ego-browser) ★9 — DSH（DeepSeek Harness）插件：把 ego-lite 浏览器（给 AI Agent 用的 Chromium）接入 HARNESS——13 个结构化 ego_* 工具（文本语义快照、语义定位点击、表单填充、截图、CDP 控制、任务空间隔离），内置 ego 运行时，Linux + Chrome 开箱即用，无需克隆官方仓库或手动构建。
- [omdsh-dev/dsh-plugin-dev](https://github.com/omdsh-dev/dsh-plugin-dev) ★9 — DSH 插件开发踩坑与做法档案（skill + 文档）：cordis 双副本、tsconfig 三件套、Windows junction、多帧 zstd 等实测记录
- [Totoro-qaq/Cobsidian](https://github.com/Totoro-qaq/Cobsidian) ★9 — Agent-agnostic workflow skill for maintaining Obsidian knowledge bases
- [N0zoM1z0/vocaloid-mcp](https://github.com/N0zoM1z0/vocaloid-mcp) ★9 — An agent-native MCP for composing, tuning, rendering, mixing, and auditing native VOCALOID3/4 projects — built just for fun.
- [chyra-moon/deepseek-harness-desktop](https://github.com/chyra-moon/deepseek-harness-desktop) ★8 — DeepSeek Harness desktop shell: 1:1 replica of the official web UI as a Windows desktop app (community project)
- [N0zoM1z0/th08](https://github.com/N0zoM1z0/th08) ★8 — Source reconstruction of Touhou Eiyashou (TH08) 1.00d
- [morluto/internalcot](https://github.com/morluto/internalcot) ★8 — Make agents show their full chain of thought.
- [openma-ai/deepseek-harness-tui](https://github.com/openma-ai/deepseek-harness-tui) ★8 — TUI Plugin of DeepSeek Harness
- [whyihaveyou/dsh-suite](https://github.com/whyihaveyou/dsh-suite) ★7 — Bilingual curated DeepSeek Harness plugin directory — daily compat CI, create-dsh-plugin scaffold, own plugins.
- [chen-001/dsh-grok-tui](https://github.com/chen-001/dsh-grok-tui) ★7 — Use dsh via grok-build's TUI.
- [wangyang10/image-vision](https://github.com/wangyang10/image-vision) ★7
- [unknowbug/RE-Framework](https://github.com/unknowbug/RE-Framework) ★7 — Modular engineering methodology framework for AI agents — reverse engineering & software development (core + re-binary / re-code / swe modules).
- [lhh010/dsh-paste-input](https://github.com/lhh010/dsh-paste-input) ★7 — DSH WebUI 文件输入增强：Ctrl+V 粘贴（带首次告知弹窗）+ 拖拽 + 选择文件，发送时复制进会话工作区临时目录
- [Tyan66666/billion-context-dsh](https://github.com/Tyan66666/billion-context-dsh) ★7 — Model-driven context management (Active Context Pruning / ACP) for the DeepSeek Harness — the model decides when and what to compress. Ported from billion-context-pi (ranxianglei); acp-kernel reused verbatim. CompactionEngine backend with compress/decompress/search_context/acp_status tools.
- [lhh010/dsh-ui-progress](https://github.com/lhh010/dsh-ui-progress) ★7 — DSH Web UI 会话进度插件：输入框停靠区常驻会话进度条（todos 真实进度 / 实时 token 生成速率 / 中断橘红态 / 待办提醒），零核心改动
- [Ychris12138/dsh-usage-stats](https://github.com/Ychris12138/dsh-usage-stats) ★6 — Token usage heatmap, per-model breakdowns, and DeepSeek account balance for the DeepSeek Harness Web GUI (dsh web).
- [gameswu/dsh-plugin-background](https://github.com/gameswu/dsh-plugin-background) ★6 — dsh壁纸插件
- [fakechris/dsh-harness-ops](https://github.com/fakechris/dsh-harness-ops) ★6 — DSH 运维工具箱：升级、重启、故障都不用操心。① 官方每日快照 A/B 双槽轮换——旧插件迁移+构建+验收全过才原子切换，一键回滚，旧版本永远兜底；② 守护 10s 自动拉起 web + agent 断点自动续接，重启无人值守；③ web 全挂（A/B 都坏、agent 不可用）时 dsh-doctor 一条命令自救：九项诊断→机械修复配置→LLM 深度检测修复（完整推理实时可见）→拉起 web。install via: git clone + bash scripts/install.sh
- [HuanLinOTO/dsh-plugin-pet-rs](https://github.com/HuanLinOTO/dsh-plugin-pet-rs) ★6 — DSH 桌宠（Rust 版），5 态鲸鱼 + 双 SSE 实时推送 + 透明置顶窗 + 系统托盘，三端支持 | DSH desktop pet (Rust edition): 5-state whale + dual SSE real-time push + transparent always-on-top window + tray, cross-platform
- [ginuim/multi-screen-wireframe](https://github.com/ginuim/multi-screen-wireframe) ★6 — Generate offline multi-screen wireframes with canvas + demo navigation. Zero Node/npm.
- [icodesign/orbis](https://github.com/icodesign/orbis) ★6 — A mobile client for deepseek harness remote control
- [whitelonng/dshcode](https://github.com/whitelonng/dshcode) ★6 — Community desktop companion for DeepSeek Harness — one-click Electron app for macOS and Windows
- [LaplaceYoung/dsh-qq2006](https://github.com/LaplaceYoung/dsh-qq2006) ★6 — DSH (DeepSeek Harness) 的 QQ2006 皮肤插件：注册 qq2006 主题、镜像 body[data-ds-skin]、全局皮肤表与完整素材
- [omdsh-dev/dsh-plugin-skills](https://github.com/omdsh-dev/dsh-plugin-skills) ★5 — Agent skills for building and testing DeepSeek Harness plugins — from scaffolding a new plugin package to choosing the right test tiers, entirely inside an agent session.
- [ayuanwong/deepseek-harness-ux](https://github.com/ayuanwong/deepseek-harness-ux) ★5 — 长任务，不刷屏：关键进度清晰可见，完成后自动折叠，详情随时展开。 Long agent tasks, without transcript clutter: focused progress, auto-folded history, details on demand.
- [wssfk12138/dsh-wechat-notify](https://github.com/wssfk12138/dsh-wechat-notify) ★5 — DeepSeek Harness 插件：为 agent 新增 wechat_notify 工具，让 AI 通过本机 ClawBot 微信通道主动给你发通知（任务完成 / 需决策时），中文可靠、掉线自提示。
- [shaokeyibb/dsh-plugin-product-subagents](https://github.com/shaokeyibb/dsh-plugin-product-subagents) ★5 — Role-based Codex / Claude Code / ACP subagent providers for the DeepSeek Harness — continuable children, durable session recovery, per-role product permissions, and delegation with a permission ceiling.
- [lhh010/dsh-bash-encoding](https://github.com/lhh010/dsh-bash-encoding) ★5 — DSH bash 输出编码自动识别插件：替换 ctx.bash，自管 spawn 收集原始字节，自动检测 UTF-16LE/UTF-8/GBK 等编码并正确解码，修复 WSL/Windows 下 bash 工具的中文乱码。
- [unknowbug/anchorlaw](https://github.com/unknowbug/anchorlaw) ★5 — Code verification protocol for vibe coding — every claim must have a verifiable practice anchor.
- [Fisfzy/zotero-harvest](https://github.com/Fisfzy/zotero-harvest) ★5 — Zotero 文献采集入库插件（DSH external plugin）：多源检索（OpenAlex/arXiv/Crossref/Europe PMC/Semantic Scholar）+ OA 下载链接解析（Unpaywall）+ 充分性审计 + 入库本地 Zotero + 触发 zotero-wave-rag 重建
- [Komeiji-Shiki/graycode-for-dsh](https://github.com/Komeiji-Shiki/graycode-for-dsh) ★5
- [moxisuki/dsh-lan](https://github.com/moxisuki/dsh-lan) ★5 — DeepSeek Harness（dsh）的局域网插件：一条 overlay 把 dsh web 绑定到局域网，并通过 index tap 注入 crypto.randomUUID    │ polyfill 修复非安全上下文启动崩溃。
- [runzhliu/deepseek-harness-docker](https://github.com/runzhliu/deepseek-harness-docker) ★5 — Community Docker and Kubernetes packaging for DeepSeek Harness (@deepseek-ai/dsh), with a hardened image, Compose stack, Helm chart, Web UI, and headless CLI.
- [opensetk/dsh-xiaohei](https://github.com/opensetk/dsh-xiaohei) ★5 — dsh的罗小黑插件
- [xiaohai-78/Top](https://github.com/xiaohai-78/Top) ★5 — 📊 Daily leaderboard for the dsh-external plugin ecosystem — tracks every repo, ranks by stars, archives daily snapshots, and shows the latest ranking on the homepage.
- [liyupi/dsh-kun-like-pet](https://github.com/liyupi/dsh-kun-like-pet) ★5 — Kun Like 桌宠 —— DeepSeek Harness 桌面宠物插件：右下角小坤宠随 Agent 工作状态切换 9 种动作，任务完成播放「你干嘛~哎哟」
- [DDDFXYqiming/Agent_Extensions](https://github.com/DDDFXYqiming/Agent_Extensions) ★5 — Agent Skills & DeepSeek Harness (DSH) 扩展库：通用智能体技能（General_skills）+ DSH 标准插件（dsh-plugin），开箱即用的 AI Agent 能力增强集合。
- [PlutoKeating/dsh-lark-bot](https://github.com/PlutoKeating/dsh-lark-bot) ★5 — dsh-lark-bot：把 DeepSeek Harness (dsh) 桥接进飞书/Lark 的 bot，含完整项目工作区管理。A bridge bot connecting DeepSeek Harness (dsh) into Feishu/Lark with full workspace management. deepseek · deepseek harness · feishu · lark · bridge · bot
- [dingkaihu63/dsh-robotic-harness](https://github.com/dingkaihu63/dsh-robotic-harness) ★5 — Robotic Harness: embodied-intelligence research tools for DeepSeek Harness - robot asset inspection, MuJoCo pick-place simulation with fault injection, evidence-based diagnostics, and reproducible experiment bundles.
- [ZASENJC/dsh-plugins-store](https://github.com/ZASENJC/dsh-plugins-store) ★5 — 自动收录和分类 GitHub dsh-plugin Topic 项目的静态目录网站
- [omdsh-dev/dsh-mygo](https://github.com/omdsh-dev/dsh-mygo) ★5
- [KirschBluteX/engineer-software](https://github.com/KirschBluteX/engineer-software) ★5 — A runtime-neutral, evidence-driven software engineering workflow for Codex and DeepSeek Harness.
- [wangshunnn/oh-my-dsh](https://github.com/wangshunnn/oh-my-dsh) ★4 — 🐋 All you need is oh-my-dsh ｜ DeepSeek Harness 社区插件索引与精选（自动更新）
- [dqsjqian/agent-guild](https://github.com/dqsjqian/agent-guild) ★4 — A protocol that lets any sufficiently intelligent AI agent join your shared memory by simply reading one file.
- [octoparse/agent-skills](https://github.com/octoparse/agent-skills) ★4 — Collection of Octoparse agent skills
- [Thhoho/reSanity](https://github.com/Thhoho/reSanity) ★4 — reSanity 散修 — 散户的认知组合管理：查证、避坑、记忆、复盘。一份 SKILL.md，零依赖。
- [FlashingChen/dsh-worktree](https://github.com/FlashingChen/dsh-worktree) ★4 — Codex-style permanent git worktrees for DeepSeek Harness: worktree_create/list/remove agent tools, a /worktree chat command, and durable per-repo manifests.
- [Small-tailqwq/dsh-deepcel](https://github.com/Small-tailqwq/dsh-deepcel) ★4 — 一款模仿 excel 的 dsh 皮肤
- [AlliotTech/deepseek-harness-docker](https://github.com/AlliotTech/deepseek-harness-docker) ★4 — deepseek-harness docker部署
- [AngelosZou/graphlint](https://github.com/AngelosZou/graphlint) ★4
- [lhh010/dsh-input-history](https://github.com/lhh010/dsh-input-history) ★4 — DSH Web 输入历史插件：Ctrl+Up / Ctrl+Down 像终端一样召回与切换已发送消息，零核心改动
- [YYTbit/awesome-dsh-bridges](https://github.com/YYTbit/awesome-dsh-bridges) ★4 — Bridge your favorite AI coding tools into DeepSeek Harness
- [01Virex/dsh-status-rotator](https://github.com/01Virex/dsh-status-rotator) ★4 — A DeepSeek Harness (dsh) web plugin that replaces the "Deep diving…" turn-status label with phase-aware, typewriter-animated, rainbow-gradient phrases — all configurable from a JSON file.
- [longyu065/dsh-desktop](https://github.com/longyu065/dsh-desktop) ★4 — Desktop shell for DeepSeek Harness Web GUI — auto-installs dsh, native macOS tray, packaged for macOS & Windows.
- [Void0312Aurora/dsh-desktop-electron](https://github.com/Void0312Aurora/dsh-desktop-electron) ★4 — Cross-platform Electron desktop shell for the DSH Web GUI: tray-resident standalone window over your own dsh web, no bundled Node runtime
- [shinelon/eyes-for-deepseek](https://github.com/shinelon/eyes-for-deepseek) ★4
- [cpj-dev/dsh-plugin-cc](https://github.com/cpj-dev/dsh-plugin-cc) ★4 — Bridge Deepseek-harness into Claude Code for review, critique, delegation, and session import.
- [Electricitysheep/dsh-tool-turbo](https://github.com/Electricitysheep/dsh-tool-turbo) ★4 — Per-round reasoning_effort optimizer for DeepSeek Harness (dsh): auto-downgrades tool-call reasoning for simple tool chains, lifting back for heavy work. Cuts thinking time between tool calls.
- [william-jin-cmu/dsh-companion](https://github.com/william-jin-cmu/dsh-companion) ★4 — DeepSeek Harness 的常驻桌面助手：全局唤起、定时自动化、快捷回复、插件市场
- [morluto/smokinggun](https://github.com/morluto/smokinggun) ★3 — Help your agents find the smoking gun they're looking for. Optimization evidence for agents: find complexity hotspots.
- [yyh-001/dsh-companion](https://github.com/yyh-001/dsh-companion) ★3 — DeepSeek 陪伴模式插件 —— 人设、记忆、聊得下去：SOUL 人格 + Hermes 长期记忆，可选 QQ 通道
- [litestartup-com/litestartup-skills](https://github.com/litestartup-com/litestartup-skills) ★3 — Publish blog, docs, website, changelog, send campaign email directly from your AI agent. Write content, run one prompt, go live in seconds.
- [WindLX/paper_plane_x](https://github.com/WindLX/paper_plane_x) ★3 — Paper Plane X 是一个面向科研阅读、论文处理和综述写作的本地优先工作台。它把 PDF 解析、结构化论文抽取、事实核查、项目文件、文献检索和外部 Agent 工具串成一条可复用的研究流水线。
- [RangeKing/vibemeter](https://github.com/RangeKing/vibemeter) ★3 — See what your agents are doing. Understand how you work together.
- [1514100951/dsh-usage-footer](https://github.com/1514100951/dsh-usage-footer) ★3 — DSH web 用量/费用悬浮按钮插件：账户余额、峰谷时段、今日/本会话消费估算与 token 统计（含设置开关）
- [fff122/dsh-research-notes](https://github.com/fff122/dsh-research-notes) ★3 — A lightweight research notes plugin for DeepSeek Harness
- [walkinglabs/awesome-deepseek-harness-plugins](https://github.com/walkinglabs/awesome-deepseek-harness-plugins) ★3 — A curated, bilingual list of verified plugins, tools, design workflows, and learning resources for DeepSeek Harness (DSH).
- [weijiafu14/pi2dsh](https://github.com/weijiafu14/pi2dsh) ★3 — Bridge the Pi and DeepSeek Harness ecosystems: one Pi Host ABI runs unmodified Pi extensions as native DSH plugins. 打通 Pi 与 DSH 生态。
- [SnowCrescenter-tech/dsh-desktop](https://github.com/SnowCrescenter-tech/dsh-desktop) ★3 — DeepSeek Harness 桌面版 — 原生 Windows 桌面壳（无边框窗口 / 系统托盘 / 原生通知 / 单实例 / 开机自启）| Native Windows desktop shell for DeepSeek Harness (frameless window, tray, native notifications, single-instance, auto-launch)
- [RYun601/dsh-launcher](https://github.com/RYun601/dsh-launcher) ★3 — Windows 下 DeepSeek Harness Web 的启动与管理工具：deepseek 命令一键前台/后台启动、自动打开浏览器、状态查询、停止服务与更新检查，支持一行命令安装
- [Lixiaoyiao/deepseek-harness-action](https://github.com/Lixiaoyiao/deepseek-harness-action) ★3 — Community GitHub Action for DeepSeek Harness — AI Code Review · CI Diagnosis · Auto Fix · Issue → PR
- [HackSing/dsh-plugins](https://github.com/HackSing/dsh-plugins) ★3 — A bilingual, continuously maintained directory of plugins for DeepSeek Harness (DSH).
- [H1a3x/dsh-token-stats](https://github.com/H1a3x/dsh-token-stats) ★3 — Floating draggable token usage statistics panel for DeepSeek Harness
- [lwmxiaobei/dsh-plugins](https://github.com/lwmxiaobei/dsh-plugins) ★3 — DeepSeek Harness 社区插件目录，自动汇总并基础校验 GitHub 插件，支持搜索、筛选、双语详情与最新版本安装命令复制。Community directory for DeepSeek Harness plugins with automated discovery, basic validation, search, filters, bilingual details, and latest version install commands.
- [JustGenius-s/DSH-Plugs](https://github.com/JustGenius-s/DSH-Plugs) ★3 — DSH Plugins Cellection
- [DoggyHU/dsh4vscode](https://github.com/DoggyHU/dsh4vscode) ★3 — DSH Chat for VS Code — DeepSeek Harness chat windows inside VS Code (OpenCode-style independent sessions, model auto-routing)
- [morluto/gitcontribute](https://github.com/morluto/gitcontribute) ★3 — Contribution research for agents: check repository guidance, related work, code context, and validation before writing a patch.
- [coppynight/dsh-doctor](https://github.com/coppynight/dsh-doctor) ★3 — DSH 插件：flutter-doctor 风格诊断与修复（安装级 + harness 内检查，安全自动修复）。官方 repository-plugin（.dsh-plugin 格式）
- [zsyu9779/dsh-desktop](https://github.com/zsyu9779/dsh-desktop) ★3 — Unofficial cross-platform desktop app for DeepSeek Harness. Native Wails shell for the DSH Web UI on macOS, Windows, and Linux.
- [NoWint/Oh-My-DSH](https://github.com/NoWint/Oh-My-DSH) ★3 — 🐋 DeepSeek Harness 插件精选集 · 300+ dsh-plugin 收录 · 22 大分类
- [sb1733831438-maker/DSH-closerAI](https://github.com/sb1733831438-maker/DSH-closerAI) ★3 — CloserAI - a local-first, model-agnostic, permission-transparent desktop AI workbench built on DeepSeek Harness.
- [Leeaoyin/dr-agent-skills](https://github.com/Leeaoyin/dr-agent-skills) ★3 — Structured, reusable skill modules for AI coding agents — covering engineering workflows, reliability evaluation, and production readiness.
- [omdsh-dev/dsh-hub-workshop](https://github.com/omdsh-dev/dsh-hub-workshop) ★3 — Public DSH Hub Workshop catalog and feed projection
- [GiantGKL/dsh-cost](https://github.com/GiantGKL/dsh-cost) ★3 — DeepSeek Harness (DSH) plugin: live conversation cost and DeepSeek account balance in the composer stats row — RMB in Chinese UI, USD in English UI
- [the-beating-light-of-the-nail/dsh-meme-hub](https://github.com/the-beating-light-of-the-nail/dsh-meme-hub) ★3 — 🐋 The meme side of DeepSeek Harness — 贪玩蓝鲸/QQ2006/whale girls/mini-games · A curated tour of the wildest dsh plugins
- [chen-001/dsh-chat-width](https://github.com/chen-001/dsh-chat-width) ★3 — Adjust the width of dsh's reply.
- [white0dew/awesome-dsh-plugins](https://github.com/white0dew/awesome-dsh-plugins) ★3 — Awesome DSH Plugins: a public GitHub directory for DeepSeek Harness plugins, DSH plugins, install commands, and ecosystem discovery.
- [modusensus/dsh-mneme](https://github.com/modusensus/dsh-mneme) ★3 — Mneme——把记忆主权还给人的记忆插件：SQLite + 可人工编辑的 Markdown 双写，autoDream 在梦境中巩固记忆，140 个测试护航。
- [moduqishi/GrassVison](https://github.com/moduqishi/GrassVison) ★3 — 给 DeepSeek 等纯文本大模型外挂图像理解能力的实现无感添加视觉能力。提供 OpenAI 兼容的 API，自动将图片请求交给视觉模型分析，再将结构化结果注入文本模型，使增强后的模型体验接近原生多模态。
- [MorGogh/widget-dock](https://github.com/MorGogh/widget-dock) ★3 — DSH plugin: draggable widget panel (balance, tokens, stats, commands, goal, cost) for DeepSeek Harness
- [paean-ai/8x-skills](https://github.com/paean-ai/8x-skills) ★3
- [entireyu/dsh-launcher](https://github.com/entireyu/dsh-launcher) ★3 — DeepSeek Harness Launcher（DSH 安装启动助手），由DSH + DS-V4-Pro-0813开发的tauri程序。
- [rainforest888/dsh-plugins-raincode](https://github.com/rainforest888/dsh-plugins-raincode) ★3 — dsh plugin: DeepSeek Harness 的模型层 = raincode(模型池/缓存/重试) + /skills 浏览
- [techysy/deepseek-harness-fnos](https://github.com/techysy/deepseek-harness-fnos) ★3 — DeepSeek Harness (DeepSeek 官方 agent 浏览器 UI) fnOS 应用 — 本地常驻服务, 官方统一网关接入
- [orxz/deepseek-harness-themes](https://github.com/orxz/deepseek-harness-themes) ★3 — A collection of UI themes for deepseek-harness.
- [MaimoryLab/dib](https://github.com/MaimoryLab/dib) ★3 — DSH-in-Box: A DSH runtime and plugin packager
- [kejixiaoliang/awesome-dsh-plugins](https://github.com/kejixiaoliang/awesome-dsh-plugins) ★2 — DeepSeek Harness (DSH) 插件精选目录 — 14 类 280+ 个社区插件，覆盖 MCP / Skill / TUI / 多 Agent / 上下文记忆 / UI 皮肤，点链接直达仓库。Curated directory of dsh plugins for DeepSeek Harness.
- [NEXTINDIE/DeepSeek-Harness-for-VS-Code](https://github.com/NEXTINDIE/DeepSeek-Harness-for-VS-Code) ★2 — Use DeepSeek Harness in VS Code like ChatGPT/Copilot: @dsh in native chat, standalone views, cross-project sessions, shared via DSH API. Auto-starts server.
- [sjscy05/deepseek-harness-vision-plugin](https://github.com/sjscy05/deepseek-harness-vision-plugin) ★2 — vision_read tool: lets the text-only DeepSeek main model read images through a configurable vision sub-model (OpenAI-compatible / Anthropic / Gemini APIs). Scratch plugin for DeepSeek Harness.
- [MashedPotato817/dsh-git-plugin](https://github.com/MashedPotato817/dsh-git-plugin) ★2 — Git workflow plugin for DeepSeek Harness: slash commands and read-only git tools
- [Beants/dsh-trellis](https://github.com/Beants/dsh-trellis) ★2 — Trellis workflow integration for DeepSeek Harness: Trellis skills, /trellis commands, and .trellis scaffolding
- [Yihong89/dsh-usage-plugin](https://github.com/Yihong89/dsh-usage-plugin) ★2 — DeepSeek Harness (DSH) plugins. First: dsh-usage-report — per-session token usage & estimated cost (/usage + usage_report), priced from the DeepSeek pricing table.
- [hccccc01333/dsh-excel-chat](https://github.com/hccccc01333/dsh-excel-chat) ★2 — dsh-excel-chat — talk to Excel in DeepSeek Harness: create, edit, repair, and verify spreadsheets by conversation (cells, formulas, styles, filters, tables, charts); every edit is auto-validated.
- [Scorp1o117/dsh-tool-vision](https://github.com/Scorp1o117/dsh-tool-vision) ★2 — Vision model for DeepSeek Harness | DeepSeek Harness 外置视觉模型插件
- [omdsh-dev/dsh-github-integration](https://github.com/omdsh-dev/dsh-github-integration) ★2
- [dpskh/dsh-a2a](https://github.com/dpskh/dsh-a2a) ★2 — Agent2Agent mesh for the Harness
- [TYEclipse/dsh-webfetch](https://github.com/TYEclipse/dsh-webfetch) ★2 — Web page reader for DeepSeek Harness (dsh): fetch any URL and extract clean Markdown / plain text plus a link inventory - zero runtime dependencies, read-only
- [HarcoChen/dsh-vsc-integration](https://github.com/HarcoChen/dsh-vsc-integration) ★2 — Deepseek-Harness Vscode Integration
- [yauntyour/DSH-for-VSC](https://github.com/yauntyour/DSH-for-VSC) ★2 — 把 DeepSeek Harness（DSH）的 WebUI 搬进 VS Code：编辑器内嵌面板 + 侧边栏控制台，服务离线自动拉起，日志随时可查。
- [KnCRJVirX/dsh-desktop](https://github.com/KnCRJVirX/dsh-desktop) ★2 — Desktop wrapper for the DeepSeek Harness (DSH). Deepseek Haeness 的 Electron 桌面端封装。
- [mrbbbaixue/dsh-desktop](https://github.com/mrbbbaixue/dsh-desktop) ★2 — .NET 10 WPF + WebView2 desktop launcher for DeepSeek Harness (dsh): managed child process, tray controls, HiDPI, native title bar theme following
- [HaoyueQin/deepseek-harness-desktop](https://github.com/HaoyueQin/deepseek-harness-desktop) ★2 — A desktop shell for DeepSeek Harness — the pluggable AI agent harness from DeepSeek. Wrap the official dsh web UI into a native-feeling, always-on desktop app. / 为 DeepSeek Harness（DeepSeek 开源的可插拔 AI Agent harness）打造的桌面应用壳，把官方 dsh web 界面包装成原生质感、常驻后台的桌面应用。
- [renat3u/dsh-paseo](https://github.com/renat3u/dsh-paseo) ★2 — DSH 的paseo插件扩展支持
- [zzh-newlearner/dsh-postmortem](https://github.com/zzh-newlearner/dsh-postmortem) ★2 — Local-first failure postmortems for DeepSeek Harness sessions.
- [Qintsg/dsh-safe-delete](https://github.com/Qintsg/dsh-safe-delete) ★2 — Safe delete plugin for DeepSeek Harness (DSH): move files to trash / staging area instead of permanent removal, with restore and purge support.
- [chenhaolove89/dsh-ccswitch-import-lite](https://github.com/chenhaolove89/dsh-ccswitch-import-lite) ★2 — DeepSeek Harness 插件（精简版）：从 CCSWITCH 批量导入模型供应商，不含视觉描述
- [Mappedinfo/PlainDeck](https://github.com/Mappedinfo/PlainDeck) ★2 — Local-first, Git-native visual slide editor with plain JSON sources.
- [shiningsprk-arch/dsh-context-viewer](https://github.com/shiningsprk-arch/dsh-context-viewer) ★2 — DeepSeek Harness 上下文查看器：浏览思考链、shell 命令、工具调用与结果的桌面应用
- [cccakeee/awesome-dsh-plugins](https://github.com/cccakeee/awesome-dsh-plugins) ★2 — A curated, evidence-led directory of DeepSeek Harness (DSH) plugins: verified loadable extensions, skills, and permission-aware installation guidance.
- [Andy8647/dsh-auto-approval](https://github.com/Andy8647/dsh-auto-approval) ★2
- [SeverusZh/dsh-notify-windows](https://github.com/SeverusZh/dsh-notify-windows) ★2 — DeepSeek Harness 插件：任务完成时发送 Windows 系统通知
- [SnowCrescenter-tech/dsh-launcher](https://github.com/SnowCrescenter-tech/dsh-launcher) ★2 — DeepSeek Harness 一键启动器 | Windows 便携免安装版 - One-click portable launcher for DeepSeek Harness (no Node.js, no pnpm, no CLI)
- [xinCodes/deepseek-billing-plugin](https://github.com/xinCodes/deepseek-billing-plugin) ★2 — DeepSeek Harness (DSH) 插件：DeepSeek 官方 API 余额与当前会话费用估算
- [Tokimorphling/tokilake-ai-gateway](https://github.com/Tokimorphling/tokilake-ai-gateway) ★2 — Self-hosted AI gateway for distributed local LLM GPUs. OpenAI-compatible API with NAT traversal, WebSocket/QUIC tunnels, Ollama/vLLM/SGLang workers.
- [jark006/RemoteOps](https://github.com/jark006/RemoteOps) ★2 — RemoteOps 是一个面向远程系统维护和嵌入式 Linux 开发的 MCP 工具。
- [WilliamLIiii/DeepSeek-Harness-billing-plugin](https://github.com/WilliamLIiii/DeepSeek-Harness-billing-plugin) ★2 — DeepSeek Harness billing plugin: account balance + per-model remaining-task estimator with a session-header badge
- [clearkurt/dsh-win-terminal-inspector](https://github.com/clearkurt/dsh-win-terminal-inspector) ★2 — Windows (win32) terminal inspection for DSH persistent/PTY shells
- [ccch1mneyyy/dsh-working-activity](https://github.com/ccch1mneyyy/dsh-working-activity) ★2 — DSH 实时模型工作状态行：俏皮思考文案、运行中的工具、回合总结、自我叙述（⏵）— 用于 TUI 提示栏与 Web UI
- [emredeveloper/deepseek-harness-huggingface](https://github.com/emredeveloper/deepseek-harness-huggingface) ★2 — DeepSeek Harness tools for discovering models on Hugging Face Hub.
- [hisaniwo/dsh-ergonomics](https://github.com/hisaniwo/dsh-ergonomics) ★2 — DSH 会话人体工学：/new 一键新会话 + 输入历史 ↑↓ 回溯
- [vvlife/awesome-deepseek-harness-plugins](https://github.com/vvlife/awesome-deepseek-harness-plugins) ★2 — A curated list of plugins, tools, skins, and extensions for DeepSeek Harness (DSH).
- [KhanZou/Deepseek-Harness-as-Desktop](https://github.com/KhanZou/Deepseek-Harness-as-Desktop) ★2 — Turn DeepSeek Harness into a Codex-style desktop app: native WebView2 shell, system tray, auto-start, Windows toasts, and a Desktop settings tab with a one-of-N skin center.
- [kinyokun/dsh-session-import](https://github.com/kinyokun/dsh-session-import) ★2 — DSH 会话日志导入插件:解析 /export 的 zip/jsonl,结构真实性验证 + SHA-256 指纹校验,同步模型/预设/权限等状态,导入/删除实时推送免刷新
- [FlytoMAYDAY80/dsh-pet](https://github.com/FlytoMAYDAY80/dsh-pet) ★2 — 🐋 DSH 有声桌宠：悬浮桌面的 DeepSeek 小鲸鱼，不打开 DSH 也能实时感知会话状态（需要确认/工作中/完成/空闲/离线），支持音效提醒与零代码定制素材
- [UynajGI/dsh-ssh](https://github.com/UynajGI/dsh-ssh) ★2 — SSH remote-execution plugin for DeepSeek Harness: ProxyJump chain, SFTP filesystem, subprocess and PTY over ssh2
- [Sparrived/DSH-Deeptop](https://github.com/Sparrived/DSH-Deeptop) ★2 — Deeptop, a lightweight native desktop client for DeepSeek Harness.
- [PerryLink/dsh-plugin-guide](https://github.com/PerryLink/dsh-plugin-guide) ★2 — Everything you need to build DeepSeek Harness plugins: official docs archive (EN/ZH), Cordis primer, 15-repo community deep-dive, 20+ battle-tested pitfalls - plus the dsh-plugin-guide agent skill.
- [kevenxz/dsh-desktop](https://github.com/kevenxz/dsh-desktop) ★2 — Windows desktop client for DeepSeek Harness — native window, tray, shared DSH profiles and sessions.
- [hyls9527/dsh-plugins](https://github.com/hyls9527/dsh-plugins) ★2 — Ecosystem plugins for DeepSeek Harness: bounded cross-session memory and skill lifecycle curation, ported from hermes-agent. Tagged dsh-plugin.
- [Tieboyh/dsh-session-search](https://github.com/Tieboyh/dsh-session-search) ★2 — Index-free cross-agent session search for DeepSeek Harness
- [AprilWizard/dsh-multi-cot](https://github.com/AprilWizard/dsh-multi-cot) ★2 — Multi-CoT plugin for DeepSeek Harness: multi-sampled test-time compute, internal voting, and a plan/execute/review workflow
- [WardLu/shadow-vision](https://github.com/WardLu/shadow-vision) ★2 — Open-source MCP vision server that gives text-only LLMs and AI agents image understanding, OCR, visual analysis, UI inspection, and multimodal capabilities.
- [hnmrxz/dsh-plugin-deepseek-balance](https://github.com/hnmrxz/dsh-plugin-deepseek-balance) ★2 — 在 DeepSeek Harness (dsh) 底部状态栏实时显示 DeepSeek 账户余额。
- [boNeXY226/dsh-cost-chip](https://github.com/boNeXY226/dsh-cost-chip) ★2 — DeepSeek Harness (dsh) 插件：/cost 查看每个会话花费 + 可拖拽的悬浮费用胶囊
- [15828148/dsh-portable-launcher](https://github.com/15828148/dsh-portable-launcher) ★2 — One-click portable launcher for DeepSeek Harness (dsh) Web UI on Windows. Auto-installs Node.js and dsh with China mirror fallback, 3-stage progress with retries and resume, zero-download fast path when ready. No admin needed.
- [Scorp1o117/dsh-soul-md](https://github.com/Scorp1o117/dsh-soul-md) ★2 — Soul.md persona for DeepSeek Harness | DeepSeek Harness 人设卡插件
- [weinibuliu/deepseek-harness-vsc-extension](https://github.com/weinibuliu/deepseek-harness-vsc-extension) ★2 — DeepSeek Harness for VS Code
- [InklingYoshi584/dsh-tool-hashline](https://github.com/InklingYoshi584/dsh-tool-hashline) ★2 — Hash-anchored read/edit/grep tools for DeepSeek Harness: every line carries a content hash, stale anchors are rejected before touching the file.
- [Sunrisepeak/dsh-index](https://github.com/Sunrisepeak/dsh-index) ★2 — DeepSeek Harness Plugin and Agent Profile Package Index - Install dsh-plugin with just one command
- [bernardleex526/oh_my_deepseek_harness](https://github.com/bernardleex526/oh_my_deepseek_harness) ★2 — DeepSeek Harness 多智能体编排模式 — 灵感来自 oh-my-opencode-slim
- [whiteguo233/dsh-cc-connect](https://github.com/whiteguo233/dsh-cc-connect) ★2 — 通过cc connect远程使用dsh
- [vcxmug/dsh-enhance](https://github.com/vcxmug/dsh-enhance) ★2 — Native Firecrawl tools for DeepSeek Harness agents via MCP — one composition row, zero custom code
- [lordqyxz/dsh-ark-quota](https://github.com/lordqyxz/dsh-ark-quota) ★2 — 火山方舟订阅套餐剩余额度 DSH 侧边栏小组件（宿主代理 GetCodingPlanUsage + 浏览器 widget + 免重启 cookie 刷新工具）
- [jasonsun29/ds-balance-card](https://github.com/jasonsun29/ds-balance-card) ★2 — DeepSeek Harness 常驻额度卡片插件:自动识别已配置的平台 API Key,显示余额与 Coding Plan 额度
- [Fisfzy/zotero-wave-rag](https://github.com/Fisfzy/zotero-wave-rag) ★2 — 面向 Zotero 论文库的浪潮式 RAG 细节检索系统 —— DSH 外部插件。移植 VCPToolBox 浪潮语义动力学思想（标签河道图传播/虫洞跳转/钟型阻尼/Ω重排），配 BM25+RRF 混合检索、claim-evidence 忠实度校验、两级增量索引
- [xuender/dsh-history](https://github.com/xuender/dsh-history) ★2 — Recall and re-run the current session's command history with ↑/↓ keys in the DSH Web composer.
- [Elohia/pi-mm-vision](https://github.com/Elohia/pi-mm-vision) ★2 — Synesthesia Encoder (通感编码器) — give any text-only LLM (DeepSeek, etc.) the ability to see images via structured spatial text encoding. A Pi agent extension.
- [Scorp1o117/dsh-tdai-memory](https://github.com/Scorp1o117/dsh-tdai-memory) ★2 — Agent memory for DeepSeek Harness | DeepSeek Harness 记忆插件
- [Ericwong5021/deepseek-plugin-store](https://github.com/Ericwong5021/deepseek-plugin-store) ★2 — DeepSeek Harness 独立社区插件商店：发现、安装并提交经过验证的插件、工具与扩展。 | Independent community plugin directory.
- [Pheobe-Southwood/dsh-acp-paseo](https://github.com/Pheobe-Southwood/dsh-acp-paseo) ★2 — dsh-acp-paseo monorepo root: dsh (DeepSeek Harness) ⇄ Paseo ACP integration
- [openma-ai/deepseek-harness-typescript-sdk](https://github.com/openma-ai/deepseek-harness-typescript-sdk) ★2 — TypeScript SDK for DeepSeek Harness (dsh) — drive AI agent turns in a runtime subprocess over JSON-RPC stdio. Mirrors the official Python SDK.
- [dbydd/dsh-onlyne](https://github.com/dbydd/dsh-onlyne) ★2 — IM gateway for DeepSeek Harness agents — send and receive QQ, WeChat, Feishu and Telegram messages from dsh sessions.
- [384961890-ui/pawin-brain-deepseek-harness](https://github.com/384961890-ui/pawin-brain-deepseek-harness) ★2 — A brain-inspired runtime for DeepSeek Harness agents — remember, self-correct, learn. v0.1 ships memory (injection, notes, recall), 100% covered.
- [omdsh-dev/dsh-fun-ticker](https://github.com/omdsh-dev/dsh-fun-ticker) ★2 — DSH 行情跑马灯插件：可自选标的的加密/汇率/A股/指数/港美股跑马灯，免 key 数据源，宿主代理+缓存
- [PerryLink/dsh-composer-history](https://github.com/PerryLink/dsh-composer-history) ★2 — Terminal-style input history for the DeepSeek Harness web composer - edge-first arrow keys, draft stashing with exact restore, Esc recovery. A dsh-plugin.
- [oitsukiii/deepseek-harness-lan](https://github.com/oitsukiii/deepseek-harness-lan) ★2 — Run DeepSeek Harness Web UI on your home LAN — 4 minimal patches + one-click apply/revert scripts | 让 DeepSeek Harness 的 Web UI 在局域网跑起来
- [renat3u/tonghuashun-webui](https://github.com/renat3u/tonghuashun-webui) ★2 — 仿同花顺的webui插件
- [1690834643/dsh-usage-dashboard](https://github.com/1690834643/dsh-usage-dashboard) ★2 — DeepSeek Harness (dsh) web plugin: API balance + today's spend widget in the sidebar footer. /api/dsh-usage route + React client bundle, no build step required.
- [AdamPlatin123/dsh-tonghuashun](https://github.com/AdamPlatin123/dsh-tonghuashun) ★1 — DSH harness 客户端插件：同花顺行情终端风格皮肤 + 代码量 K 线行情面板（ui-skin-ths + ui-market）
- [LJH-snow/dsh-tool-github](https://github.com/LJH-snow/dsh-tool-github) ★1 — GitHub tools for DeepSeek Harness: repo lookup, issue listing, code search, and PR drafts
- [Babulubobo/dsh-codex-oauth](https://github.com/Babulubobo/dsh-codex-oauth) ★1 — use your codex subscription in deepseek harness
- [Gandufu/dsh-plugin](https://github.com/Gandufu/dsh-plugin) ★1 — DeepSeek Harness 插件集合｜齐天大圣双主题皮肤，支持亮暗模式、响应式布局与热插拔
- [Alyosha28/deep_option](https://github.com/Alyosha28/deep_option) ★1 — 港美股期权研究与风险 Agent（公开 source-available 原型）
- [FantasyStarry/dsh-token-stats](https://github.com/FantasyStarry/dsh-token-stats) ★1 — 按自然日统计 LLM token 用量（按提供商/模型/会话，含子代理对账）：侧边栏常驻小部件 + 设置页"用量统计"分区 + 插件配置表单 + /usage 命令
- [baiyun200/dsh-dashboard](https://github.com/baiyun200/dsh-dashboard) ★1 — DSH 插件看板 · DeepSeek Harness 插件生态可视化（shadcn/ui，每日自动构建部署）
- [anweat/dsh-plugin-dev-guide](https://github.com/anweat/dsh-plugin-dev-guide) ★1 — DSH (DeepSeek Harness) plugin development & publishing guide: from first plugin to auto-publish to the community
- [wuwuzhige-sudo/dsh-terminal-panel](https://github.com/wuwuzhige-sudo/dsh-terminal-panel) ★1 — A manual Terminal tab for the DeepSeek Harness (dsh) web UI — run commands on the host machine, persistent cwd, sudo password prompt, command history.现在可以在web界面内直接执行命令行了
- [Bandersnatch0x/design-playbook](https://github.com/Bandersnatch0x/design-playbook) ★1 — Design I/O plugin for Claude Code & coding agents — declarations + contracts that make UI generation constrained, reviewable, and recirculatable. Not a style pack; composes with ui-ux-pro-max + frontend-design.
- [xing-shuyin/ds-web-ui](https://github.com/xing-shuyin/ds-web-ui) ★1 — My DeepSeek Harness Web UI
- [MashedPotato817/dsh-tool-browser](https://github.com/MashedPotato817/dsh-tool-browser) ★1 — Native browser automation tools for DeepSeek Harness, powered by Playwright + Edge
- [jLeon-account/dsh-client-usage](https://github.com/jLeon-account/dsh-client-usage) ★1 — DeepSeek Harness（DSH）网页客户端插件：实时展示会话级 API token 用量与估算费用，支持缓存命中/未命中分桶、上下文占用，自动适配 DeepSeek 峰谷计价与调价｜DSH web plugin: real-time token usage & cost estimate
- [PeanutsDou/peanut-dsh-plugin](https://github.com/PeanutsDou/peanut-dsh-plugin) ★1 — PeanutsDou 的 DeepSeek Harness 插件合集：dsh-launcher 桌面壳等个人维护插件
- [oxygenaaaaa/dsh-desktop](https://github.com/oxygenaaaaa/dsh-desktop) ★1 — DeepSeek Harness as a Windows desktop app — one-click install, ready to use
- [Aloneswork/deepseek-harness-codex-bridge](https://github.com/Aloneswork/deepseek-harness-codex-bridge) ★1 — Bidirectional MCP bridge for DeepSeek Harness and Codex collaboration
- [hawkongz/doubao-vision-dsh](https://github.com/hawkongz/doubao-vision-dsh) ★1 — 让纯文本模型通过桌面豆包看见聊天图片的 DeepSeek Harness 宿主插件(CDP 桥接,全预设生效,识别可取消)
- [hrhgit/deepseek-harness-plugin-manager](https://github.com/hrhgit/deepseek-harness-plugin-manager) ★1 — Web plugin manager for DeepSeek Harness (DSH): inspect, search, group, enable, and disable Cordis plugins.
- [feiyang-dev/DeepSeek-Harness-Desktop](https://github.com/feiyang-dev/DeepSeek-Harness-Desktop) ★1 — 一个 Electron 桌面壳，内嵌官方 DeepSeek Harness Web UI。启动时让用户选择安装模式，自动完成环境检测、安装、服务拉起，以百分比进度条展示各阶段，服务就绪后打开主界面。
- [xinmo114514/dsh-usage-widget](https://github.com/xinmo114514/dsh-usage-widget) ★1 — DSH (DeepSeek Harness) 持久化 Web 插件：Token 用量统计悬浮窗 —— 可拖动窗口/圆点、曲线/热力图、总 tokens 大数字；宿主半聚合会话日志并提供 /usage/api/snapshot
- [Loner1024/deepseek-harness-sdk-rs](https://github.com/Loner1024/deepseek-harness-sdk-rs) ★1 — Rust SDK for DeepSeek Harness: drive the harness JSON-RPC runtime as a subprocess
- [Proton1917/dsh-live-stats](https://github.com/Proton1917/dsh-live-stats) ★1 — Live token estimates and true streaming TPS for DeepSeek Harness Web
- [acosmi/dsh-plugin](https://github.com/acosmi/dsh-plugin) ★1 — Community plugin collection for DeepSeek Harness (DSH)
- [1while1/dsh-whale-subagent](https://github.com/1while1/dsh-whale-subagent) ★1 — A whale-girl themed subagent nest for the DeepSeek Harness, featuring pixel-animated subagent cards, real-time THINK/TODO tracking, and a model-selectable subagent_ex tool.
- [xuanyvne/DSHLauncher](https://github.com/xuanyvne/DSHLauncher) ★1 — DSH全程自行编写的DSH启动器，对默认的3080端口进行操作。相对于从仓库pnpm dsh web，提升一定的启动速度
- [xlight/deepseek-visionary](https://github.com/xlight/deepseek-visionary) ★1 — 使用 DeepSeek 官方多模态视觉模型让你的 Agent 不再眼瞎（支持 DSH、Zed、OpenCode、Codex、Claude Code、Cursor、Claude Desktop）
- [xiaoheizi1212/dsh-cookie-bridge](https://github.com/xiaoheizi1212/dsh-cookie-bridge) ★1 — Chrome extension that exports plaintext cookies to dsh-computer-use over localhost (no App-Bound decryption needed).
- [liuyun847/dsh-client-ui-peak-valley](https://github.com/liuyun847/dsh-client-ui-peak-valley) ★1 — DSH Web 客户端插件:模型选择按钮左侧显示 DeepSeek API 峰/谷价状态(绿=谷,橙=峰)
- [Loong-wql/Build-HOS-mcp](https://github.com/Loong-wql/Build-HOS-mcp) ★1 — 适用于Codex的鸿蒙应用开发插件（HarmonyOS application development plugin ）
- [fan969690/dsh-desktop-tools](https://github.com/fan969690/dsh-desktop-tools) ★1 — DeepSeek Harness 桌面端 + 插件社区 + Agent 社区(270 个开源中文角色预设)
- [Deklan-Deng/Dcode](https://github.com/Deklan-Deng/Dcode) ★1 — Deepseek-harness 桌面端
- [Sunshine-oneday/DSH-Desktop](https://github.com/Sunshine-oneday/DSH-Desktop) ★1 — Lightweight cross-platform desktop shell for DeepSeek Harness
- [schhaohao/dsh-file-explorer](https://github.com/schhaohao/dsh-file-explorer) ★1 — dsh-file-explorer
- [TohsakaRIN521/dsh-academic-skill](https://github.com/TohsakaRIN521/dsh-academic-skill) ★1 — academic-paper-completion 旨在补全你将要发表的文章中除了理论计算数值分析的其余部分,减少或消除ai引用幻觉
- [sikwoxy/dsh-tool-reqpipe](https://github.com/sikwoxy/dsh-tool-reqpipe) ★1 — reqpipe — DeepSeek Harness 需求流水线插件（7 tools）+ Python CLI（需求→方案→评审→开发）
- [rsagacom/dsh-ajw](https://github.com/rsagacom/dsh-ajw) ★1 — DS安甲网 (ds.ajw.cn) · 为你的 DeepSeek Harness 机器人 安装上所需功能的装甲吧 — 每日聚合 DeepSeek Harness / DSH 插件生态开源项目
- [baixinghao/intent-gate](https://github.com/baixinghao/intent-gate) ★1 — Stop AI coding agents from guessing. MCP server + Claude Code plugin that enforces intent alignment BEFORE coding: PRD → intent-confidence gate → Mermaid contracts (state machines / sequence diagrams / decision tables) → mechanical lint with zero CRITICAL → then code. Human-in-the-loop, file-persisted, zero-config.
- [xiaoshihou514/dsh-desktop-pet](https://github.com/xiaoshihou514/dsh-desktop-pet) ★1 — DeepSeek Harness：鲸鱼娘桌宠！
- [Jesse-njx/dsh-cowork](https://github.com/Jesse-njx/dsh-cowork) ★1 — READ + WRITE for office documents & notebooks in DeepSeek Harness — doc_read/doc_write tools (xlsx, pdf, docx, pptx, ipynb) plus MCP server and CLI
- [fff122/dsh-prompt-presets](https://github.com/fff122/dsh-prompt-presets) ★1 — Local reusable prompt presets for DeepSeek Harness.
- [krislavten/ai-sdk-provider-dsh](https://github.com/krislavten/ai-sdk-provider-dsh) ★1 — AI SDK provider that drives a DeepSeek Harness (dsh) runtime as a LanguageModelV3 — works on AI SDK v6 and v7
- [pjy-20051012/dsh-file-preview](https://github.com/pjy-20051012/dsh-file-preview) ★1 — Conversation file links + right-side file preview panel for the dsh web GUI
- [coderPerseus/dsh-hub](https://github.com/coderPerseus/dsh-hub) ★1 — Discover The Best DSH plugins
- [TYEclipse/dsh-plugins-hub](https://github.com/TYEclipse/dsh-plugins-hub) ★1 — Independent plugin index for DeepSeek Harness (dsh) — curated directory of community plugins, updated daily
- [zeroa234/dsh-preset-minimal-windows](https://github.com/zeroa234/dsh-preset-minimal-windows) ★1 — Minimal Windows agent preset + Git Bash tool for DeepSeek Harness: gitbash & pwsh & str_replace_editor, drop-in replacement for the official minimal preset on win32 / DeepSeek Harness 极简模式（Windows）Agent 预设 + Git Bash 工具：Git Bash + PowerShell + str_replace_editor 三工具，官方 minimal 预设的 win32 平替
- [haytham818/dsh-notify](https://github.com/haytham818/dsh-notify) ★1 — DSH system notification plugin: desktop notifications when an agent finishes a task, errors, asks a question, or waits for approval (dsh 系统通知插件)
- [pig1et7/DeepSeek-Harness-Desktop](https://github.com/pig1et7/DeepSeek-Harness-Desktop) ★1 — Desktop wrapper for the DeepSeek Harness Web GUI: double-click to start the dsh web server and open it in a native window.
- [MAXeaglet/dsh-plugin-manager](https://github.com/MAXeaglet/dsh-plugin-manager) ★1 — DSH 插件管理器：桌面 GUI + CLI，管理 dsh 的 profile、插件与一键启动 dsh web (Tauri 2 + Node CLI)
- [czzzlq/deepseek-harness-desktop](https://github.com/czzzlq/deepseek-harness-desktop) ★1 — deepseek-harness-desktop / deepseek-harness桌面端
- [randerous/dsh-turn-meta](https://github.com/randerous/dsh-turn-meta) ★1 — Opt-in per-step turn metadata for DeepSeek Harness — a minimal first-plugin template (dsh-plugin)
- [ang-XWBWZ/Pwiki](https://github.com/ang-XWBWZ/Pwiki) ★1 — Local-first knowledge retrieval engine for AI agents — BM25, semantic search, reranking, MCP, Pi Agent and DeepSeek Harness integration.
- [1514100951/dsh-notify-plugins](https://github.com/1514100951/dsh-notify-plugins) ★1 — DeepSeek Harness desktop notification plugins: browser + native Windows toasts on task finish/error, blocking waits (approval/question/plan-review), and background job settlement
- [liliuCourier/dsh-chat-outline](https://github.com/liliuCourier/dsh-chat-outline) ★1 — 对话栏左侧常驻大纲：快速定位每次 user 提问与最后 assistant 回复（DeepSeek Harness 插件）
- [QWQ-nn/dsh-client-ui-trajectory-categories](https://github.com/QWQ-nn/dsh-client-ui-trajectory-categories) ★1
- [moduqishi/dsh-opencode-usage](https://github.com/moduqishi/dsh-opencode-usage) ★1 — DeepSeek Harness (dsh web) plugin: opencode.ai 5h/week/month quota usage progress in the session header, frosted-glass detail panel, model-channel filtering.
- [rabbitknight/dsh-tui](https://github.com/rabbitknight/dsh-tui) ★1 — DeepSeek HarnessTerminal UI.
- [flee42/dsh-desktop](https://github.com/flee42/dsh-desktop) ★1 — DeepSeek Harness（DSH）的桌面版启动器
- [kelai141/dsh-host-web-compat](https://github.com/kelai141/dsh-host-web-compat) ★1 — dsh 宿主插件——经 webserver 钩子向页面注入旧内核浏览器 polyfill。
- [hnmrxz/dsh-plugin-usage-dashboard](https://github.com/hnmrxz/dsh-plugin-usage-dashboard) ★1 — DeepSeek usage & cost dashboard for the DSH bottom status bar: per-session token/cost aggregation with low-balance budget alert.
- [LAN-TINA-WS/dsh-gui-customization](https://github.com/LAN-TINA-WS/dsh-gui-customization) ★1 — Nous Blue theme, ambient glow and background image customization for DeepSeek Harness Web UI. DSH 界面设定插件：Nous 蓝配色 / 氛围光 / 背景图（中英双语）
- [wuwuzhige-sudo/dsh-remote-acces](https://github.com/wuwuzhige-sudo/dsh-remote-acces) ★1 — One-command setup for password-protected remote access to the DeepSeek Harness (dsh) web UI — dsh privileged-methods patch, Caddy basic-auth proxy, systemd services局域网和tailscale网络无法访问完整功能dsh，我们加了一套密码验证机制，现在局域网可以访问完整版本的dsh了，官方后续应该会更新验证机制
- [yjm110517/content-to-editable-ppt-skill](https://github.com/yjm110517/content-to-editable-ppt-skill) ★1 — Bootstrap runtime for generating multi-slide editable PowerPoint presentations from topics, documents, or outlines.
- [Ethanout/computer-use-plus](https://github.com/Ethanout/computer-use-plus) ★1 — Low-token, low-latency Windows computer-use MCP with learned shortcuts, UIA/CDP/OCR routing, and DeepSeek Harness support
- [bluecobaltum/dsh-lan-proxy](https://github.com/bluecobaltum/dsh-lan-proxy) ★1 — LAN access for DeepSeek Harness Web UI: loopback-preserving reverse proxy with Host/Origin rewrite, in-app browse directory picker, and a secure-context UUID polyfill. For trusted LANs only — the harness web control plane has no authentication.
- [Slowdownnn/dsh-read-history](https://github.com/Slowdownnn/dsh-read-history) ★1 — 迁移claude/codex的对话历史到dsh
- [omdsh-dev/dsh-tool-browser](https://github.com/omdsh-dev/dsh-tool-browser) ★1
- [YinFengWindy/dsh-plugin-shiori-role](https://github.com/YinFengWindy/dsh-plugin-shiori-role) ★1
- [wulun811/LiuHe](https://github.com/wulun811/LiuHe) ★1 — LLM-native code toolkit: Rust multi-language parser (tree-sitter) + 44 MCP tools for atomic editing, impact analysis, reference tracing and deterministic zero-LLM code quality gates. Built for the handless, eyeless, memoryless LLM.
- [Shmilyol/galgame-skin](https://github.com/Shmilyol/galgame-skin) ★1
- [weigre/interaction-doc](https://github.com/weigre/interaction-doc) ★1 — interaction-doc · 交互文档协作开发 — 把模糊需求/PRD 交互式量产出可交付的闭环交互文档
- [U-Illll/dsh-memory](https://github.com/U-Illll/dsh-memory) ★1 — Memory retrieval plugin for DeepSeek Harness (dsh): wiki double-link memory graph with 9 tools — hybrid search, read, link-scan, remember, forget, compile, health-check, resident retriever subagent
- [dongsheng123132/awesome-dsh-plugins](https://github.com/dongsheng123132/awesome-dsh-plugins) ★1 — Evidence-backed DeepSeek Harness plugin radar and 2Origin plugin lab
- [whitelonng/dsh-plugin-describe-image](https://github.com/whitelonng/dsh-plugin-describe-image) ★1 — DeepSeek Harness plugin: describe_image — give a text-only model vision through an OpenAI-compatible VLM endpoint
- [kyorakuyk/dsh-desktop](https://github.com/kyorakuyk/dsh-desktop) ★1 — DeepSeek Harness desktop client — Tauri shell over the dsh web host
- [fff122/dsh-task-checklist](https://github.com/fff122/dsh-task-checklist) ★1 — Local task checklist plugin for DeepSeek Harness.
- [Jinsong-Zhou/safe-find-dsh-plugins](https://github.com/Jinsong-Zhou/safe-find-dsh-plugins) ★1 — Discover and install the best DeepSeek Harness plugins for a user's task
- [t1yOS/t1y-skills](https://github.com/t1yOS/t1y-skills) ★1 — expert skill package for AI coding assistants working with the t1yOS Serverless platform.
- [tc206107/dsh-open-ecosystem](https://github.com/tc206107/dsh-open-ecosystem) ★1
- [FEOH333/dsh-delegate](https://github.com/FEOH333/dsh-delegate) ★1 — dsh-delegate: model-aware subagent delegation for DeepSeek Harness — per-call models, depends_on dependency gating, per-child personas, a durable run roster, audit events, and conversation-flow tool cards. | 给 DeepSeek Harness 的子代理委派加上：按次选模型、依赖门控、角色人设、任务花名册。
- [mengyaoi/dsh-mcp-pack](https://github.com/mengyaoi/dsh-mcp-pack) ★1 — 常用 MCP server 一键接入 DeepSeek Harness (dsh) 的 .cordis.yml 清单合集，开箱即用，零代码。
- [TrueHOOHA/dsh-plugin-dev-skill](https://github.com/TrueHOOHA/dsh-plugin-dev-skill) ★1 — AI Skill for developing DeepSeek Harness (dsh) plugins — Cordis-based agent framework. 辅助开发 dsh 插件的 AI 技能，覆盖 tool、service、LLM adapter、event listener 等能力的创建与发布。
- [lujoai/Lujo-MCP](https://github.com/lujoai/Lujo-MCP) ★1 — 基于 MCP 协议的 AI 调试追踪平台，提供会话管理、链路追踪、错误分析与 Dashboard 可视化
- [dhj-l/dsh-git-review](https://github.com/dhj-l/dsh-git-review) ★1 — DSH 动态插件：在会话头部展示工作区 git 变更文件列表，点击文件在右侧抽屉查看带语法高亮的 GitHub 风格 diff。
- [WinterOne-hub/ai-monitor](https://github.com/WinterOne-hub/ai-monitor) ★1 — AI Monitor — Desktop Dynamic-Island overlay that tracks AI platform balances, token usage & spend in real time. Tauri 2, ~6MB, 100% local.
- [Wanbinyu/dsh-plugin-git-inspect](https://github.com/Wanbinyu/dsh-plugin-git-inspect) ★1 — Read-only Git inspection tools for DeepSeek Harness
- [dhj-l/dsh-client-ui-question-history](https://github.com/dhj-l/dsh-client-ui-question-history) ★1 — Floating right-edge question-history panel for the DeepSeek Harness web GUI: lists the current session's user questions and jumps the transcript on click
- [sopaco/terrain](https://github.com/sopaco/terrain) ★1 — AI-native engineering environment management that makes your codebase agent-ready.
- [czzzlq/deepseek-harness-background](https://github.com/czzzlq/deepseek-harness-background) ★1 — deepseek-harness背景自定义
- [dpskh/dsh-checkpoint](https://github.com/dpskh/dsh-checkpoint) ★1 — Mark an exploration start in the session; pairs with rewind to fold the exploration out of context.
- [crayonlu/dsh-web-search-tavily](https://github.com/crayonlu/dsh-web-search-tavily) ★1 — Tavily-backed web search provider for DeepSeek Harness (ctx.web) — no DeepSeek API key required
- [TiankunDai/dsh-vision-LMstudio](https://github.com/TiankunDai/dsh-vision-LMstudio) ★1 — 让你能通过deepseek harness调用LM studio加载的本地视觉模型
- [hnmrxz/dsh-plugin-sysmon](https://github.com/hnmrxz/dsh-plugin-sysmon) ★1 — Local system resource monitor (CPU / memory / disk / load / uptime) for the DeepSeek Harness bottom status bar.
- [NIyueeE/dsh-container](https://github.com/NIyueeE/dsh-container) ★1 — DeepSeek Harness (dsh) container image: universal dev-container base, dsh auto-update on boot, compose + Quadlet examples
- [ylouis8/kph](https://github.com/ylouis8/kph) ★1 — 基于dsh的量化研究agent，驱动真实回测与交易。
- [ShawnSiao/dsh-credentials-keychain](https://github.com/ShawnSiao/dsh-credentials-keychain) ★1 — Planned OS-backed credential provider for DeepSeek Harness
- [Spirit4471/multimodal-bridge](https://github.com/Spirit4471/multimodal-bridge) ★1 — multimodal-bridge 是一个多模态能力桥：把 Qwen 的视觉理解（Qwen-VL）与图像生成（Qwen-Image）带给没有原生多模态能力的纯文本模型（如 DeepSeek）。它有两种形态、同一套后端：  MCP Server（qwen_vision / qwen_generate 工具）：任何支持 MCP 的宿主（Claude Code、Kimi Code 等）直接挂载； DSH 插件（npm 包 dsh-multimodal-bridge，DeepSeek Harness bundle）：dsh plugin add 一行安装，含模型自动 fallback、尺寸自适应与图片结果卡片。
- [PerryLink/dsh-session-pin](https://github.com/PerryLink/dsh-session-pin) ★1 — Pin sessions in the DeepSeek Harness (DSH) web sidebar - dual-face plugin with a hover pin badge, durable pinning, and top ordering
- [detpecca/DSH-Wiki](https://github.com/detpecca/DSH-Wiki) ★1
- [ophielel/dsh-devkit](https://github.com/ophielel/dsh-devkit) ★1
- [studyzy/dsh-suggest-prompt](https://github.com/studyzy/dsh-suggest-prompt) ★1 — dsh-plugin suggest next prompt
- [liguobao/dsh-desktop](https://github.com/liguobao/dsh-desktop) ★1 — An independent, open-source desktop wrapper for DeepSeek Harness. It starts the bundled @deepseek-ai/dsh Web UI locally and loads it in a hardened Electron window on Linux, macOS, and Windows.
- [moduqishi/dsh-open-in-finder](https://github.com/moduqishi/dsh-open-in-finder) ★1 — DeepSeek Harness (dsh web) plugin: one-click open-in-Finder icon in the session header.
- [Xieweikang123/dsh-vision-bridge](https://github.com/Xieweikang123/dsh-vision-bridge) ★1 — Give a text-only dsh model eyes: pasted images recognized into text via an OpenAI-compatible vision endpoint.
- [kalynnka/vscode-deepseek-harness](https://github.com/kalynnka/vscode-deepseek-harness) ★1 — Unofficial: drive your own DeepSeek Harness (dsh) as a native VS Code chat agent, beside Claude Code and Codex.
- [Wanbinyu/dsh-billing](https://github.com/Wanbinyu/dsh-billing) ★1
- [TQSY114514/dsh-ui-appearance](https://github.com/TQSY114514/dsh-ui-appearance) ★1 — Appearance customization plugin for DeepSeek Harness: theme color palette, background image, opacity/blur, glass effect
- [PerryLink/dsh-skill-pack-security](https://github.com/PerryLink/dsh-skill-pack-security) ★1 — Security-audit skill pack for DeepSeek Harness (dsh): 5 agent skills - secret scan, dependency audit, supply-chain review, prompt-injection review, audit orchestration. Zero runtime code. Apache-2.0.
- [qingzhuo-cn/agent-fix](https://github.com/qingzhuo-cn/agent-fix) ★1 — Universal repair skill & CLI for AI coding agents (Claude Code, Codex, OpenCode, Hermes) — npm postinstall, GUI PATH, Node version, registry, auth, DeepSeek provider
- [Civitasv/dsh-plugin-colorscheme](https://github.com/Civitasv/dsh-plugin-colorscheme) ★1 — Colorscheme Plugin For DeepSeek Harness
- [pineapple880066/dsh-webUI-pets](https://github.com/pineapple880066/dsh-webUI-pets) ★1 — Codex-style desktop pets for the DeepSeek Harness Web UI / 类似 Codex 的 DeepSeek Harness Web UI 桌宠
- [NaNExist/dsh-win-launchscript](https://github.com/NaNExist/dsh-win-launchscript) ★1 — 适用于 Windows 的 DeepSeek Harness（DSH）一键启动脚本，自动启动 Web 服务、打开浏览器，并在关闭窗口后停止服务。
- [yjm110517/visual-to-editable-ppt-skill](https://github.com/yjm110517/visual-to-editable-ppt-skill) ★1
- [vexpaer/ContextGate](https://github.com/vexpaer/ContextGate) ★1 — ContextGate — a context-folding gate plugin for DeepSeek Harness (DSH) / Cordis. Intercepts LLM request streams and folds oversized conversation history into a summary to keep context length under control.
- [Leawind/dsh-minecraft-dev](https://github.com/Leawind/dsh-minecraft-dev) ★1 — 一个面向 Minecraft 模组开发的 DeepSeek Harness Agent 预设
- [cyzlmh/dsh-cyber-sec](https://github.com/cyzlmh/dsh-cyber-sec) ★1 — Authorized security-assessment profile for DeepSeek Harness: scoped network tools, container-backed shell, authorization guard, durable evidence, 21 security skills, 7 specialist subagents
- [peterwangze/software-project-governance](https://github.com/peterwangze/software-project-governance) ★1 — AI coding delivery trust layer for evidence-backed planning, review, risk, quality, and release control.
- [Fisfzy/math-lean](https://github.com/Fisfzy/math-lean) ★1 — dsh-lean-prover: Lean kernel-verified math reasoning plugin (DSH Cordis)
- [mouliangyu/dsh-plugins](https://github.com/mouliangyu/dsh-plugins) ★1 — Community plugins for DeepSeek Harness
- [showlibia/dsh-plugin-installer](https://github.com/showlibia/dsh-plugin-installer) ★1 — DSH web plugin: install and uninstall DSH plugins from the WebUI Plugins settings without the CLI (npm / git / tarball / local directory).
- [ZgblKylin/dsh-terminal](https://github.com/ZgblKylin/dsh-terminal) ★1 — Integrate terminal plugin for DeepSeek Harness
- [niyongsheng/free-vision-skill](https://github.com/niyongsheng/free-vision-skill) ★1 — Local‑only vision skill for macOS 本地化识图技能
- [crayonlu/dsh-web-search-firecrawl](https://github.com/crayonlu/dsh-web-search-firecrawl) ★1 — Firecrawl-backed web search provider for DeepSeek Harness (ctx.web) — no DeepSeek API key required
- [BruceWu1126/dsh-web-background](https://github.com/BruceWu1126/dsh-web-background) ★1 — DeepSeek Harness Web UI background customization plugin
- [PerryLink/dsh-output-styles](https://github.com/PerryLink/dsh-output-styles) ★1 — Claude Code outputStyles for DeepSeek Harness - session-scoped, durable, runtime-switchable model output styles (/style command, output_style storage domain, systemPrompt injection)
- [dsh-plugin/dsh-plugin.github.io](https://github.com/dsh-plugin/dsh-plugin.github.io) ★1 — DeepSeek Harness community plugin workshop and directory
- [qing3a/dsh-plugin-verify](https://github.com/qing3a/dsh-plugin-verify) ★1 — 验证 DSH 插件的 CLI：一条命令跑 mock-llm 完整 agent 循环，检查 waterfall 链与零副作用，产出验证报告
- [justinhuangai/deepagent](https://github.com/justinhuangai/deepagent) ★1 — The agent that gets your work done. Built on DeepSeek Harness: Everything is a Plugin. 帮你完成工作的智能体。基于 DeepSeek Harness 构建：一切皆插件。
- [chenw2759-wq/dsh-easyssh](https://github.com/chenw2759-wq/dsh-easyssh) ★1 — 这是一个ssh前端程序，可以让UI体现类似lab的功能！用于远程ssh快速相应，同时可以直接在前端操作/查看远程服务器上的信息与代码。
- [jonah791/dsh-agent-compact](https://github.com/jonah791/dsh-agent-compact) ★1 — Agent-driven compaction for DeepSeek Harness: the agent summarizes its own conversation (KV-cache friendly, no giant replay). Verified in production at ~460k-token sessions.
- [william-jin-cmu/dsh-artifact](https://github.com/william-jin-cmu/dsh-artifact) ★1 — dsh 插件：文件交付协议——send_artifact 工具经 tool/result meta 携带结构化描述子，任意客户端可渲染
- [SakalioLabs/dsh-code-ide](https://github.com/SakalioLabs/dsh-code-ide) ★1 — DeepSeek Harness Code IDE Plugin
- [tttnny/DSH-Launcher](https://github.com/tttnny/DSH-Launcher) ★1 — DSH Launcher — macOS menu bar app that manages the DeepSeek Harness web service via launchd
- [ArtificialNotImbecile/dsh-context-taxonomy](https://github.com/ArtificialNotImbecile/dsh-context-taxonomy) ★1 — Logical-call context taxonomy plugin for DeepSeek Harness
- [randerous/dsh-turn-budget](https://github.com/randerous/dsh-turn-budget) ★1 — Advisory turn step-budget reminders for DeepSeek Harness — loop convergence guard (dsh-plugin)
- [dpskh/dsh-rewind](https://github.com/dpskh/dsh-rewind) ★1 — Fold everything since the last checkpoint mark into an auto-generated report, replacing it in context while keeping the full log.
- [spike-faye-lei/spike-faye-lei-dsh-skills](https://github.com/spike-faye-lei/spike-faye-lei-dsh-skills) ★1 — spike-faye-lei/dsh-skills
- [TYEclipse/dsh-netdoctor](https://github.com/TYEclipse/dsh-netdoctor) ★1 — Network diagnostics toolbox for DeepSeek Harness (dsh): DNS lookup, ICMP ping, TCP port check, TLS cert check, traceroute, public IP — six read-only probes, zero runtime dependencies
- [Porphyrioon/ironlaw](https://github.com/Porphyrioon/ironlaw) ★1 — IronLaw: evidence-backed completion and repair layer for coding agents
- [o-Sakurajimamai-o/dsh-desktop](https://github.com/o-Sakurajimamai-o/dsh-desktop) ★1 — DeepSeek Harness Desktop/App
- [Scorp1o117/dsh-plugin-marketplace](https://github.com/Scorp1o117/dsh-plugin-marketplace) ★1 — Plugin marketplace for DeepSeek Harness | DeepSeek Harness 插件市场
- [MoneShadow/DeepSeek-Harness-linux-](https://github.com/MoneShadow/DeepSeek-Harness-linux-) ★1 — 一个基于官方WebUI二改的Linux桌面端，内置了一个外挂视觉插件(需手动接入API Key)，已经迭代了四个版本，可能还是有些小毛病，不过目前用下来暂时没有什么大问题。
- [fff122/dsh-agent-arcade](https://github.com/fff122/dsh-agent-arcade) ★1 — Deterministic Agent-played Snake game for DeepSeek Harness.
- [TT-Wang/dsh-assembler](https://github.com/TT-Wang/dsh-assembler) ★1 — Vibe-assembly for DeepSeek Harness: turn a natural-language agent requirement into a composed agent preset by matching the capability catalog. Registers the /assemble command.
- [Jinsong-Zhou/dsh-html-canvas](https://github.com/Jinsong-Zhou/dsh-html-canvas) ★1 — A DeepSeek Harness plugin that turns AI-generated HTML into a click-to-edit canvas beside the chat
- [TheChengXi/intent-flow](https://github.com/TheChengXi/intent-flow) ★1 — IntentFlow — Comment-Driven Development Framework 注释驱动开发框架：以 @intent 注释为契约的 AI 辅助开发工作流（需求/设计/执行/报告四阶段 + 状态机自动流转），提供 pi 扩展、MCP Server、CLI 三种形态
- [ShawnSiao/dsh-agent-eval](https://github.com/ShawnSiao/dsh-agent-eval) ★1 — Planned repeatable agent and plugin regression evaluation for DeepSeek Harness
- [drscrewdriver/inferglow](https://github.com/drscrewdriver/inferglow) ★1 — go 语言实现的ai 基座+ tui +server系统
- [KarlOfLaw/dsh-side-chat](https://github.com/KarlOfLaw/dsh-side-chat) ★1 — Parent-session-aware side chat plugin for DeepSeek Harness
- [Hyperionjust/Primordial-soup-](https://github.com/Hyperionjust/Primordial-soup-) ★1 — The first collision-based memory system: it doesn't retrieve old ideas — it smashes old cards into new ones.
- [TtTRz/dsh-gatedflow](https://github.com/TtTRz/dsh-gatedflow) ★1 — Gated, durable human-in-the-loop workflow engine for DeepSeek Harness.
- [joyfoxai/dsh-eco-router](https://github.com/joyfoxai/dsh-eco-router) ★1 — A token-efficient model-routing flywheel for the DeepSeek Harness.
- [mingger77/research-skills](https://github.com/mingger77/research-skills) ★1 — A methodology skill for AI Agent (Claude Code) to conduct reproducible research with Python.
- [sakurarain1213/deepseek-harness-lite](https://github.com/sakurarain1213/deepseek-harness-lite) ★1 — A lightweight, local-first distribution and verified plugin kit for DeepSeek Harness.
- [omdsh-dev/toybox](https://github.com/omdsh-dev/toybox) ★1 — DSH 插件玩具箱 —— 构建链：TypeScript 源码（plugins/<id>/src/*.mts）→ 单文件 MCP 服务器产物（.dsh-plugin/server/*.mjs）
- [cute-baobao/dsh-usage-meter](https://github.com/cute-baobao/dsh-usage-meter) ★1 — DeepSeek Harness plugin: per-model daily token usage recorder (input/output/cache hits) with a Web GUI dashboard.
- [Bandersnatch0x/amber-protocol](https://github.com/Bandersnatch0x/amber-protocol) ★1 — Amber Protocol: repository-local governance for coding agents, including a DeepSeek Harness (dsh) patch overlay.
- [sunshine-lang/dsh-plugins](https://github.com/sunshine-lang/dsh-plugins) ★1 — Unified portal for DeepSeek Harness plugins by sunshine-lang: dsh-weather, dsh-pdf, dsh-plugin-template
- [dclichang2022/dsh-green-meter](https://github.com/dclichang2022/dsh-green-meter) ★1 — Energy & carbon metering for DeepSeek Harness: per-turn/per-request energy, cache carbon savings, electricity cost.
- [omdsh-dev/omdsh](https://github.com/omdsh-dev/omdsh) ★1 — Private staging source for the Oh My DSH community distribution.
- [kelai141/dsh-mobile-apk](https://github.com/kelai141/dsh-mobile-apk) ★1 — dsh 安卓壳 APK——WebView UI + 内嵌 Termux 运行时快照（解压即跑）、SAF 目录桥、保活服务、看门狗、运行时在线更新。
- [xiangpc/wemeet-openapi](https://github.com/xiangpc/wemeet-openapi) ★1
- [AnkoCD/dsh-multi-user-gateway](https://github.com/AnkoCD/dsh-multi-user-gateway) ★1 — 服务器端部署：DeepSeek Harness Web 多用户网关（登录门户 / 每用户实例隔离 / 交付文件抽屉）。部署于远程服务器，用户通过浏览器访问，非本机工具。
- [Nichts0v0/dsh-mcp-manager](https://github.com/Nichts0v0/dsh-mcp-manager) ★1 — 在 DeepSeek Harness 设置页管理 MCP 服务器：运行时添加/编辑/启停/重连/删除，实时状态、自动重连，中英双语界面。MCP server manager for DeepSeek Harness — add, edit, enable/disable, reconnect & delete MCP servers from the web settings page, with live status and auto-reconnect.
- [wink-run/dsh-plugin-store](https://github.com/wink-run/dsh-plugin-store) ★1 — deepseek harness  plugin store
- [omdsh-dev/dsh-input-history](https://github.com/omdsh-dev/dsh-input-history) ★0 — DSH Web 输入历史插件：Ctrl+Up / Ctrl+Down 像终端一样召回与切换已发送消息，零核心改动
- [omdsh-dev/dsh-ui-progress](https://github.com/omdsh-dev/dsh-ui-progress) ★0 — DSH Web UI 会话进度插件：输入框停靠区常驻会话进度条（todos 真实进度 / 实时 token 生成速率 / 中断橘红态 / 待办提醒），零核心改动
- [dmsobtl/dsh-tool-backtest](https://github.com/dmsobtl/dsh-tool-backtest) ★0 — DSH 插件：策略回测引擎 — 定义买卖信号，跑历史数据，输出绩效指标。
- [SisyphusSQ/dsh-plugins](https://github.com/SisyphusSQ/dsh-plugins) ★0 — A monorepo for composable DeepSeek Harness (DSH) plugins.
- [Seom-ingit/vision_kit](https://github.com/Seom-ingit/vision_kit) ★0 — Make your AI agent a math tutor. Structured extraction of vectors, matrices & geometry from math figures, with dimension-consistency + geometric self-check. Vision plugins for DeepSeek Harness, opencode (MCP) & CLI. Verify, don't believe.
- [lispking/git-skills](https://github.com/lispking/git-skills) ★0 — A powerful Claude Code Git assistant skill that provides intelligent branch management, commit message conventions, workflow assistance, and code review guidance.
- [cnskycn/deepseek-harness-desktop](https://github.com/cnskycn/deepseek-harness-desktop) ★0 — Desktop app wrapper for DeepSeek Harness (dsh) Web UI - one-click Windows installer
- [kuailexiaozixin/tkinter-desktop](https://github.com/kuailexiaozixin/tkinter-desktop) ★0 — Tkinter/ttk 原生桌面应用全生命周期技能（MVC + pygubu .ui + SQLite + PyInstaller）
- [hccccc01333/dsh-eval](https://github.com/hccccc01333/dsh-eval) ★0 — Agent evaluation platform for DeepSeek Harness: benchmark YAML, headless dsh orchestration, trace-based metrics, LLM judge, paired A/B, keyless replay, and cross-harness import.
- [khiqwq/dsh-credentials-system](https://github.com/khiqwq/dsh-credentials-system) ★0 — System-bound encrypted credential provider for DeepSeek Harness
- [dmsobtl/dsh-test-workbench](https://github.com/dmsobtl/dsh-test-workbench) ★0 — 基于 DeepSeek Harness 的测试工作台 Profile —— 开箱即用的 QA Agent。
- [darker2016/WorkbuddySkillGroups4DSH](https://github.com/darker2016/WorkbuddySkillGroups4DSH) ★0 — WorkBuddy 专家团 Skill 开源包 → DeepSeek Harness (dsh) 插件式 skillgroups 包：44 个多角色专家团队 SKILL.md bundle，支持 ~/.dsh/skills 安装与 Cordis 插件注册。WorkBuddy expert-team skill groups repackaged as a DeepSeek Harness plugin skillgroups pack (44 SKILL.md bundles).
- [wsxwj123/dsh-plugins](https://github.com/wsxwj123/dsh-plugins) ★0 — Independent plugins for DeepSeek Harness, organized as isolated packages in one monorepo.
- [Very12345/sai-dsh-plugins](https://github.com/Very12345/sai-dsh-plugins) ★0 — First-party DeepSeek Harness plugins for the sai Android coding agent
- [lonelymoon87/dsh-vscode](https://github.com/lonelymoon87/dsh-vscode) ★0 — VS Code client for the DeepSeek Harness SDK runtime.
- [hellosz/dsh-ntfy](https://github.com/hellosz/dsh-ntfy) ★0 — DeepSeek Harness (DSH) host-plane plugin: push ntfy notifications when the agent needs approval or finishes a task.
- [jasper-zsh/dsh-plugin-file-manager](https://github.com/jasper-zsh/dsh-plugin-file-manager) ★0 — 面向 DeepSeek Harness（DSH） Web 界面的会话文件管理器插件。它在会话标题栏增加“文件”入口，打开后展示该会话工作区的文件树、Git 状态，并支持直接预览文本、图片和视频。
- [Jesse-njx/dsh-plugin-manager](https://github.com/Jesse-njx/dsh-plugin-manager) ★0 — dsh pm — discover, install, update, and manage dsh plugins from the CLI: multi-source search (awesome list + GitHub + npm), doctor audit, per-profile state

</details>

<a id="get-listed"></a>
## Get your plugin listed

Add the [`dsh-plugin`](https://github.com/topics/dsh-plugin) topic to your repository and declare a `dsh.bundle` manifest in `package.json`. The hourly crawl will pick it up automatically, so no PR is needed.

[Submit a plugin →](https://github.com/Ericwong5021/deepseek-plugin-store/issues/new?template=plugin-submission.yml)

## License

[CC0-1.0](LICENSE) · Catalog data comes from the public GitHub API and refreshes hourly.

<sub>Community project. Not affiliated with or endorsed by DeepSeek.</sub>

## Links

[LINUX DO](https://linux.do/)
