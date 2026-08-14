<div align="center">

[<img src="docs/banner.png" alt="DeepSeek Plugin Store" width="100%">](https://deepseekplugin.store)

# DeepSeek Plugin Store

**发现、安装 DeepSeek Harness 生态中经过验证的插件、工具与扩展。**

[![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)
[![Catalog Update](https://github.com/Ericwong5021/deepseek-plugin-store/actions/workflows/update.yml/badge.svg)](https://github.com/Ericwong5021/deepseek-plugin-store/actions/workflows/update.yml)
[![Verified Plugins](https://img.shields.io/badge/verified_plugins-569-c9362b?style=flat-square)](#all-verified-plugins)
[![License: CC0-1.0](https://img.shields.io/badge/license-CC0--1.0-292522?style=flat-square)](LICENSE)

[**浏览插件商店 →**](https://deepseekplugin.store) · [提交插件](https://github.com/Ericwong5021/deepseek-plugin-store/issues/new?template=plugin-submission.yml) · [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)

**中文** · [English](README.en.md)

</div>

---

本目录会自动抓取带有 [`dsh-plugin`](https://github.com/topics/dsh-plugin) topic 的仓库，并检查 `package.json` 中是否声明 `dsh.bundle`。只有通过这项安装性验证的项目才会进入插件目录。

> **569 个已验证插件** · **430 个相关项目** · 每小时更新 · 上次同步：2026-08-14 05:11 UTC

## 目录

- [按分类浏览](#browse-by-category)
- [热门插件](#popular-plugins)
- [安装插件](#installing-plugins)
- [全部已验证插件](#all-verified-plugins)
- [相关项目](#related-projects)
- [收录你的插件](#get-listed)

<a id="browse-by-category"></a>
## 按分类浏览

| | 分类 | 插件数 |
|:--:|:--|--:|
| 🎨 | [UI 增强](#ui-enhancements) | 153 |
| 🔁 | [工作流与自动化](#workflow-automation) | 65 |
| 🛠️ | [工具集](#tools) | 94 |
| 🔔 | [通知与监控](#notifications) | 15 |
| 🧑‍💻 | [开发辅助](#dev-helpers) | 20 |
| 🎓 | [学习与教育](#learning) | 1 |
| 🧩 | [其他](#misc) | 221 |

<a id="popular-plugins"></a>
## 热门插件

| # | 插件 | 分类 | Stars |
|--:|:--|:--|--:|
| 1 | [liustack/modlens](https://github.com/liustack/modlens) | 其他 | ★884 |
| 2 | [ccch1mneyyy/dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) | 工具集 | ★516 |
| 3 | [omdsh-dev/DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) | UI 增强 | ★402 |
| 4 | [Anionex/dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) | UI 增强 | ★240 |
| 5 | [Nagi-ovo/dsh-ads](https://github.com/Nagi-ovo/dsh-ads) | UI 增强 | ★212 |

<sub>按当前 GitHub Stars 排序，热度不代表本项目背书。</sub>

<a id="installing-plugins"></a>
## 安装插件

```sh
# npm 包，预构建，推荐使用
dsh plugin --profile <name> add <npm-package>

# GitHub 源码，首次安装时按提示允许构建，然后重试
dsh plugin --profile <name> add github:<owner>/<repo>
```

> ⚠️ 从 GitHub 源码安装的插件会在你的设备上执行构建脚本。请只安装你信任的来源，并尽可能固定到具体提交： `github:owner/repo#<sha>`.

<a id="all-verified-plugins"></a>
## 全部已验证插件

<a id="ui-enhancements"></a>
<details>
<summary><strong>🎨 UI 增强</strong> <sup>153 个插件</sup></summary>

### UI 增强

- [omdsh-dev/DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) ★402 · `dsh-better-sidebar` — 一个侧边栏的完整工作台，支持三方拓展注册新Tab页面，内置文件渲染编辑/终端/Git/子代理
- [Anionex/dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) ★240 · `@dsh-external/dsh-vision-toolkit` — 让纯文本模型更好地做视觉任务的DeepSeek Harness插件：带意图的图片问答、长截图 OCR、UI 还原等｜DeepSeek Harness-native integration for agent-vision-toolkit: image Q&A, long-screenshot OCR, UI restoration, grounding, pixel diff, Artifacts, and Web UI.
- [Nagi-ovo/dsh-ads](https://github.com/Nagi-ovo/dsh-ads) ★212 · `@dsh-external/dsh-ads` — 是兄弟就来蹬我！DSH Web UI 广告：2005 年中文站点风格的侧栏广告 / 对话内信息流 / 角落弹窗 + 一个真实热区比视觉小得多的关闭叉。素材全虚构，域名打码。
- [hust-open-atom-club/oh-dsh](https://github.com/hust-open-atom-club/oh-dsh) ★98 · `@oh-dsh/desktop` — 一站式 DeepSeek Harness 社区发行版：TUI、桌面端与 Web UI 三种形态统一体验，支持分层安装、一步到位，免去手工整合打包。
- [huiliyi37/dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) ★94 · `@huiliyi37/dsh-tianshu-tui` — dsh-tianshu-tui — DeepSeek Harness terminal UI +harness workflow。是官方 DeepSeek Harness 上的交互式终端 UI 插件。渲染核心从本仓库自研的harness agent  Tianshu-Tui 演进而来，在官方的基础上增加了TDD与证据门等工作流。
- [Nagi-ovo/dsh-visualize](https://github.com/Nagi-ovo/dsh-visualize) ★53 · `@dsh-external/dsh-visualize` — DSH 对话内生成式 UI 插件：模型把交互式 HTML 卡片直接画进会话流——visualize 工具 + 配套 skill + 沙箱渲染卡，带流式预览、组件浮入动画与鲸鱼蓝主题跟随
- [ZSeven-W/dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil) ★47 · `@zseven-w/dsh-openpencil` — OpenPencil design preview and editing plugin for DSH
- [omdsh-dev/dsh-genui](https://github.com/omdsh-dev/dsh-genui) ★40 · `@omdsh-dev/dsh-genui` — GenUI for DeepSeek Harness: interactive UI components rendered inline in assistant replies via the dsh-ui fence — layout, charts, plots, forms, quizzes, mermaid, 3D scenes, and an action event loop back to the model. Ships the fence-teaching host plugin, the browser renderer (client half), and the genui skill.
- [alingalingling/ui-status-label](https://github.com/alingalingling/ui-status-label) ★24 · `dsh-ui-status-label` — 把你鲸鱼娘思考时的 deep diving 自定义成任意你想要的样子
- [omdsh-dev/dsh-custom-tool](https://github.com/omdsh-dev/dsh-custom-tool) ★19 · `dsh-custom-tool` — Create and manage sandboxed JavaScript tools for DeepSeek Harness with a Monaco editor and model-driven tool lifecycle.
- [ccq1/dsh-side-panel](https://github.com/ccq1/dsh-side-panel) ★10 · `@dsh-external/dsh-side-panel` — DSH 侧边栏，集成文件浏览器、终端和 Git 审查，方便预览文件。
- [lhh010/dsh-minigames](https://github.com/lhh010/dsh-minigames) ★10 · `@dsh-external/dsh-minigames` — DSH Web UI 右侧小游戏面板：18 款离线小游戏（恐龙跳一跳 / 俄罗斯方块 / 坦克大战 / 扫雷 / 2048 / 数独 / 吃豆人 / 跟枪练习等），可扩展游戏注册表，等待模型回复或修 bug 时的摸鱼神器
- [omdsh-dev/dsh-gomoku](https://github.com/omdsh-dev/dsh-gomoku) ★8 · `@deepseek-ai/dsh-gomoku` — 在DSH中与AI下五子棋，也可以让AI对局，看哪个AI棋力更强
- [omdsh-dev/dsh-data-agent](https://github.com/omdsh-dev/dsh-data-agent) ★8 · `@deepseek-ai/dsh-data-agent` — 定义了专用的Data Agent预设，让AI帮你查询、更新、分析。
- [dsh-tui/dsh-tui](https://github.com/dsh-tui/dsh-tui) ★8 · `@dsh-tui/dsh-tui` — Claude Code-style terminal UI for DeepSeek Harness agents, as an out-of-tree dsh plugin bundle
- [dingyi222666/dsh-focus-chat](https://github.com/dingyi222666/dsh-focus-chat) ★8 · `@dingyi222666/dsh-focus-chat` — 为 dsh 提供新的「聚焦会话」精简会话视图，更轻松易于阅读，只关注最终产出结果。
- [Nwflower/dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) ★8 · `dsh-chat-import` — 从Claude Code、Codex、Reasonix等Agent工具导入历史消息，并在DSH中继续对话
- [HsiangNianian/dsh-auto-continue](https://github.com/HsiangNianian/dsh-auto-continue) ★8 · `dsh-client-auto-continue` — DSH Web UI plugin: automatically sends "继续" (continue) when a request is interrupted by network errors or other non-human causes
- [HuanLinOTO/dsh-plugin-mineru](https://github.com/HuanLinOTO/dsh-plugin-mineru) ★6 · `@huanlin/dsh-plugin-mineru` — 向模型暴露 MinerU 文档解析工具，将 PDF/图片/DOCX/PPTX/XLSX 转为结构化 Markdown/JSON | Exposes MinerU document-parsing tools to the model, converting PDF/images/DOCX/PPTX/XLSX into structured Markdown/JSON
- [vlln/dsh-task-status](https://github.com/vlln/dsh-task-status) ★6 · `@dsh-external/dsh-task-status` — DSH 插件：后台任务状态条（对话页任务进度 + 实时输出 tail）。官方 bundle 插件，dsh plugin --profile web add 安装
- [Zhenyu98/dsh-context-doctor](https://github.com/Zhenyu98/dsh-context-doctor) ★6 · `dsh-context-doctor` — DSH 上下文注入审计插件：统计 AGENTS.md 指令链/技能目录/工具 schema 的 token 成本，检测重复与冲突；Web UI 圆环面板 + context_audit 工具。Context Doctor for DeepSeek Harness: audit instruction-chain / skill catalog / tool schemas token cost.
- [LoserFox/telegram](https://github.com/LoserFox/telegram) ★6 · `@loserfox/telegram` — Telegram Bot API 桥接插件：长轮询、per-chat 会话、HTML 格式化
- [Sev7een/ds-api-usage](https://github.com/Sev7een/ds-api-usage) ★6 · `dsh-plugin-ds-api-usage` — DeepSeek Harness plugin: real-time DeepSeek API balance and usage timeline (cost / tokens / request count), rendered in a settings page.
- [THU-MAIC/dsh-openmaic](https://github.com/THU-MAIC/dsh-openmaic) ★5 · `@openmaic/dsh-openmaic` — OpenMAIC for DeepSeek Harness: classrooms, slides, interactive widgets, and Socratic teaching
- [gxinxing/deepseek-harness-tui](https://github.com/gxinxing/deepseek-harness-tui) ★5 · `deepseek-harness-tui` — Terminal-native interactive TUI for DeepSeek Harness (dsh) — built with Ink, React for terminals
- [omdsh-dev/plugin-template](https://github.com/omdsh-dev/plugin-template) ★4 · `@your-scope/dsh-plugin-template` — 基于原turtle ui官方仓库创建的plugin模板仓库
- [lehhair/dsh-diff-viewer](https://github.com/lehhair/dsh-diff-viewer) ★4 · `@dsh-external/dsh-diff-viewer` — DSH Web GUI PiUI-style diff viewer plugin: replaces the stock DiffBlock for write/edit tool calls via ui-tool diff-card chain slots (host patch included). Private.
- [Toukaiteio/dsh-plugin-installer](https://github.com/Toukaiteio/dsh-plugin-installer) ★4 · `dsh-plugin-installer` — A marketplace plugin to quickly integrate your DeepSeek Harness into the GitHub plugin ecosystem.
- [xingyingyuzhui/dsh-updater-ui](https://github.com/xingyingyuzhui/dsh-updater-ui) ★4 · `dsh-updater-ui` — DeepSeek Harness 更新检查器：设置页一键检查/拉取 DSH 更新（git pull --ff-only），自动后台检查 + 红点提醒 + 版本对比 + 更新说明。DSH updater with one-click pull, auto-check, version diff and changelog preview.
- [omdsh-dev/dsh-advisor](https://github.com/omdsh-dev/dsh-advisor) ★4 · `dsh-advisor` — Advisor - Pair a second model that passively reviews each turn and injects notes.  搭配一个会在每轮对话被动注入见解和审查的副模型。
- [turtle1999/turtle-ui](https://github.com/turtle1999/turtle-ui) ★4 · `@deepseek-ai/dsh-tui` — as is, no warranty
- [HuanLinOTO/dsh-plugin-yet-another-subagent](https://github.com/HuanLinOTO/dsh-plugin-yet-another-subagent) ★4 · `@huanlin/dsh-plugin-yet-another-subagent` — 可配置子代理 profile 系统，单一 subagent 工具 + profile 参数，含 Web UI 设置/实时进度/子代理树 | Configurable subagent profile system: single subagent tool + profile param, with Web UI settings/real-time progress/subagent tree
- [bill9109/dsh-web-ui-notify](https://github.com/bill9109/dsh-web-ui-notify) ★4 · `@bill9109/dsh-web-ui-notify` — 为 DSH 增加桌面通知提醒
- [Buyi-wsgzg/dsh-sidechain](https://github.com/Buyi-wsgzg/dsh-sidechain) ★3 · `@dsh-external/dsh-sidechain` — DSH 侧会话插件：/side 持续性侧会话（Codex 风格）与 /btw 一次性侧问（Claude 风格）——在临时 fork 中运行、不写入主会话历史；Web UI 右侧链面板内嵌对话，主会话保持不变
- [keepermttl/dsh-archive-viewer](https://github.com/keepermttl/dsh-archive-viewer) ★3 · `@dsh-external/dsh-archive-viewer` — DeepSeek Harness 归档会话管理插件：查看/恢复已归档会话（回到原工作区分组）+ 右上角一键关闭 dsh。MIT 许可，欢迎收录到任何插件合集，注明出处即可。
- [yuezengwu/dsh-explain](https://github.com/yuezengwu/dsh-explain) ★3 · `dsh-explain` — DSH 本地优先学习模式插件：跨会话全局学习线程、按来源讲解、ExplainContext、压缩与可诊断设置界面
- [Favio8/dsh-plugin-deepeye](https://github.com/Favio8/dsh-plugin-deepeye) ★3 · `dsh-plugin-deepeye` — DeepEye vision plugin for DeepSeek Harness (DSH): image description, OCR, VQA, UI layout, and clipboard analysis.
- [HuanLinOTO/dsh-plugin-better-sidebar-plugin-office](https://github.com/HuanLinOTO/dsh-plugin-better-sidebar-plugin-office) ★3 · `@huanlin/dsh-plugin-better-sidebar-plugin-office` — 为 better-sidebar 提供 Office 三件套预览（.docx/.xlsx/.pptx），独立 bundle 瘦身主体 | Provides Office-suite preview (.docx/.xlsx/.pptx) for better-sidebar as a separate bundle to slim the core
- [renat3u/dsh-web-archive](https://github.com/renat3u/dsh-web-archive) ★3 · `dsh-web-archive` — 折叠对话当中众多的“无用消息”，例如Think、Bash等
- [anweat/dsh-web-search-pro](https://github.com/anweat/dsh-web-search-pro) ★3 · `dsh-web-search-pro` — Enhanced, persistent web search plugin for DeepSeek Harness (multi-engine search, SQLite+LRU cache, platform backends, Playwright rendering)
- [zjl88858/dsh-huadongbianzuqi](https://github.com/zjl88858/dsh-huadongbianzuqi) ★3 · `dsh-huadong-bianzuqi` — DeepSeek Harness的滑动变祖器插件
- [Mongfayi/dsh-recall](https://github.com/Mongfayi/dsh-recall) ★3 · `dsh-recall` — Message recall (撤回) plugin for the DSH Web UI: one undo button on each user message that removes the turn and everything after it, durably, without reverting code changes.
- [dancingmemory/dskin](https://github.com/dancingmemory/dskin) ★3 · `dskin` — DSKIN · DeepSeek Harness（DSH）卡通像素皮肤插件 / Cartoon pixel skin plugin for DSH Web GUI — 原始界面不动，像素宠物会散步、眨眼、跳跃 / living pixel pets that stroll, blink and hop
- [Elaina-real/dsh-tiered-approval](https://github.com/Elaina-real/dsh-tiered-approval) ★2 · `dsh-tiered-approval` — Tiered auto-review for DeepSeek Harness: static-rule safety net + LLM reviewer + human fallback — auto-allow safe actions, deny irreversible ones, ask a human for the rest.
- [titanwings/dsh-plannotator](https://github.com/titanwings/dsh-plannotator) ★2 · `@dsh-external/dsh-plannotator` — DSH 计划批注插件：选中计划原文、逐条批注，并把结构化反馈送回 Agent。 / A DSH plan-review plugin for anchored annotations and structured Agent feedback.
- [omdsh-dev/dsh-fun-weather](https://github.com/omdsh-dev/dsh-fun-weather) ★2 · `@deepseek-ai/dsh-fun-weather` — DSH weather tab and weather-following themes powered by Open-Meteo
- [havingautism/dsh-deepresearch](https://github.com/havingautism/dsh-deepresearch) ★2 · `@deepseek-ai/dsh-deepresearch` — Independent evidence-first research workflow with durable state and its own Web view
- [ben7am1n/dsh-review-skills](https://github.com/ben7am1n/dsh-review-skills) ★2 · `dsh-review-skills` — Engineering-discipline skill pack for DeepSeek Harness — code review, simplification, plan-then-execute, test-first, and conflict resolution, delivered as a bundled skill provider plugin.
- [bitterSmilezzz/dsh-mac-desktop](https://github.com/bitterSmilezzz/dsh-mac-desktop) ★2 · `dsh-mac-desktop` — DeepSeek Harness plugin: open the Web GUI in a native macOS desktop window (SwiftUI + WKWebView).
- [havingautism/dsh-notebooks](https://github.com/havingautism/dsh-notebooks) ★2 · `@deepseek-ai/dsh-notebooks` — Independent cross-session notebooks with model tools, typed Remote API, and Web view
- [omdsh-dev/dsh-lark](https://github.com/omdsh-dev/dsh-lark) ★2 · `dsh-lark-channel` — Lark/Feishu IM bot channel for DeepSeek Harness: chats drive agents, replies and approvals return as messages and cards | 飞书 DeepSeek Harness 插件
- [wuxiangru915/dsh-review-loop](https://github.com/wuxiangru915/dsh-review-loop) ★2 · `@dsh-plugin/dsh-review-loop` — Incremental diff reviewer for DeepSeek Harness — Web UI review panel + /review command. 增量代码审查插件：checkpoint 增量队列 + 审查意见注入 agent.
- [loudMore/dsh-drop-to-path](https://github.com/loudMore/dsh-drop-to-path) ★2 · `@dsh-external/dsh-drop-to-path` — DSH 插件:图片与文件直达纯文本模型——图片保留原生附件体验,PDF/Office/压缩包/视频/音频显示为附件栏方块,点击发送时自动转为工作区路径,配合 dsh-vision-toolkit 粘贴即看图。A DSH plugin that delivers images AND files to text-only models as workspace paths: images keep the native attachment UI, other files show as square chips in the rail, paths append on send — pairs with dsh-vision-toolkit.
- [Xilin3/dsh-prompt-persona](https://github.com/Xilin3/dsh-prompt-persona) ★2 · `@xilin3/dsh-prompt-persona` — DSH plugin: edit the system prompt (deployment persona) from the Settings page, with live preview.
- [Player-MINEPIG/dsh-llm-codex-oauth](https://github.com/Player-MINEPIG/dsh-llm-codex-oauth) ★2 · `dsh-llm-codex-oauth` — 在 dsh（DeepSeek Harness）里使用你的 ChatGPT / Codex 订阅。插件通过 OpenAI Codex 的 OAuth 流程登录 ChatGPT 账号，把订阅额度暴露成 dsh 的 `codex-oauth` 模型提供方。
- [dongsheng123132/task-passport](https://github.com/dongsheng123132/task-passport) ★2 · `task-passport` — Open task handoff protocol for DeepSeek Harness, WorkBuddy, Claude Code and Codex — verified state, not chat logs
- [KarlOfLaw/dsh-goal-mode-enhance](https://github.com/KarlOfLaw/dsh-goal-mode-enhance) ★2 · `dsh-goal-mode` — 为 DeepSeek Harness 提供可视化 goal 模式：Goal 栏 / 头部入口 / 设置页（历史+多会话总览）/ goal_overview 模型工具
- [Mongfayi/dsh-local-filetree](https://github.com/Mongfayi/dsh-local-filetree) ★2 · `dsh-local-filetree` — File tree panel for the DSH Web UI: the right details column shows the current session workspace tree (lazy, read-only).
- [HuanLinOTO/dsh-plugin-spur](https://github.com/HuanLinOTO/dsh-plugin-spur) ★2 · `@huanlin/dsh-plugin-spur` — 聊天流中悬挂皮鞭，甩动鞭梢（>2.0 px/ms）即向 agent 发送 go work 消息 | A whip hanging in the chat stream; flick the tip (>2.0 px/ms) to send the agent a "go work!" message
- [omdsh-dev/dsh-inspect](https://github.com/omdsh-dev/dsh-inspect) ★2 · `@dsh-external/dsh-inspect` — 发现问题(checkup) → 修复交付(fix) → 质量复查(review) 的对抗式闭环插件：基于官方 workflow 引擎的检查/修复/复查工具集
- [zevorn/dsh-humanize](https://github.com/zevorn/dsh-humanize) ★2 · `@humanize/dsh-humanize` — Humanize RLCR bundle for the DeepSeek Harness: DSH skills, Codex review, and the Humanize trajectory view.
- [bill9109/dsh-drag-and-drop](https://github.com/bill9109/dsh-drag-and-drop) ★2 · `@bill9109/dsh-drag-and-drop` — 为 DSH Web UI 增加跨平台文件拖拽与原始路径插入能力，无需复制文件
- [Ericwong5021/dsh-kanban](https://github.com/Ericwong5021/dsh-kanban) ★2 · `dsh-kanban` — Task board plugin for the DeepSeek Harness Web UI
- [orriduck/dsh-tui](https://github.com/orriduck/dsh-tui) ★2 · `dsh-tui` — A small, session-aware terminal UI for DeepSeek Harness
- [lehhair/dsh-mobile](https://github.com/lehhair/dsh-mobile) ★2 · `@dsh-external/dsh-mobile` — DSH mobile-friendly web UI plugin (PiUI chat-pager mode): on narrow screens the stock three-column frame becomes a horizontal scroll-snap pager — sidebar | chat — with the chat column rendered completely untouched as a flush rounded card with a PiUI-style 3D flip; swipe or the top-left button flips pages, a settle re-snap always lands on a whole page, and the sidebar page shares the chat background. Safe-area + virtual-keyboard insets, touch-sized controls, hidden scrollbars on coarse pointers. Pure client-side adaptation over the stock frame — zero core changes, works on official rc.2 distributions.
- [Moeblack/dsh-prompt-studio](https://github.com/Moeblack/dsh-prompt-studio) ★2 · `dsh-prompt-studio` — DSH plugin: edit user and built-in system-prompt sections with live preview (Prompt Studio)
- [PerryLink/dsh-auto-review](https://github.com/PerryLink/dsh-auto-review) ★1 · `dsh-auto-review` — Second-model AI auto-review for DeepSeek Harness approval requests: a read-only reviewer subagent returns structured allow/deny verdicts with reasons, fail-closed by default, fully auditable from the session log (approval/asked -> autoReview/verdict -> approval/decided).
- [rxa3c/chat2skill](https://github.com/rxa3c/chat2skill) ★1 · `chat2skill-plugin-runtime` — Extracting and iterating skills from daily conversations with AI
- [stushansusu/dsh-miku-skin](https://github.com/stushansusu/dsh-miku-skin) ★1 · `@deepseek-ai/dsh-client-ui-skin-miku` — 初音未来主题皮肤，用于 DeepSeek Harness (DSH) Web GUI —— 蓝紫洋红渐变、毛玻璃面板、可自定义背景图、亮暗双主题
- [RealAlexandreAI/dsh-cloudflare-browser-run](https://github.com/RealAlexandreAI/dsh-cloudflare-browser-run) ★1 · `dsh-cloudflare-browser-run` — dsh browser-run: CF Browser Run web tools (markdown/screenshot/pdf) for DeepSeek Harness
- [YYTbit/dsh-plugin-code-review](https://github.com/YYTbit/dsh-plugin-code-review) ★1 · `dsh-plugin-code-review` — Structured code review skill for DeepSeek Harness
- [wellorbetter/dsh-product-delivery-workflow](https://github.com/wellorbetter/dsh-product-delivery-workflow) ★1 · `@wellorbetter/dsh-product-delivery-workflow` — 100% AI-native product delivery workflow plugin for DeepSeek Harness: full product-to-release pipeline (research → PRD → OpenSpec → parallel multi-agent → review loops → tests → release audit) with loop closure. 产品交付工作流插件：从产品到发布全流程，自带闭环，100% AI 原生，睡前启动醒来收货。
- [yumimanji/dsh-ui-spec](https://github.com/yumimanji/dsh-ui-spec) ★1 · `dsh-ui-spec` — DeepSeek Harness plugin: turn UI screenshots into structured, implementation-grade web frontend specs. Deterministic geometry (sharp) + optional vision-model semantics, merged into one JSON + Markdown spec.
- [LX2000WASD/dsh-web-plugin-manager](https://github.com/LX2000WASD/dsh-web-plugin-manager) ★1 · `dsh-web-plugin-manager` — 在 Web UI 中一键管理 DeepSeek Harness (DSH) 插件：查看、实时启停、安装/卸载、环境管理、插件市场。bundle 与非 bundle 插件全覆盖。
- [Hyperionjust/dsh-tool-underseal](https://github.com/Hyperionjust/dsh-tool-underseal) ★1 · `dsh-tool-underseal` — Model-facing typed tools wrapping the frozen, reviewed underseal adapter for the DeepSeek Harness
- [fengzhiyushui/dsh-desktop-window](https://github.com/fengzhiyushui/dsh-desktop-window) ★1 · `dsh-desktop-window` — DSH 桌面窗口插件：以独立应用窗口打开 DeepSeek Harness Web UI（自动开窗 + 会话头部手动开关 + 设置页自动开窗开关）
- [Asaiuta/dsh-session-hub](https://github.com/Asaiuta/dsh-session-hub) ★1 · `dsh-session-hub` — Aggregate and natively control multiple remote DeepSeek Harness (DSH) servers' sessions from one official Web UI — hub gateway + official-UI bridge. 多服务器 DSH 会话聚合与原生操控
- [drfccv/dsh-theme-neko](https://github.com/drfccv/dsh-theme-neko) ★1 · `dsh-theme-neko` — A Nachoneko (甘城猫猫) themed skin for the DeepSeek Harness web GUI.
- [lin-cheng-lab/dsh-reloader](https://github.com/lin-cheng-lab/dsh-reloader) ★1 · `dsh-reloader` — DSH 一键重启：装完插件说一句 reload 就自动重启生效，不用手动 Ctrl+C 🔄
- [lehhair/dsh-split-panes](https://github.com/lehhair/dsh-split-panes) ★1 · `@dsh-external/dsh-split-panes` — DSH split-pane conversation plugin: PiUI-style multi-pane conversation surface — split/stack panes, per-pane sessions, sidebar session drag & drop, single-row fused header. Needs the renderer session-scope capability (see README).
- [Jesse-njx/dsh-chatnode-wechat](https://github.com/Jesse-njx/dsh-chatnode-wechat) ★1 · `@dsh-cowork/chatnode-wechat` — Chat with, monitor, and approve your DSH agents from WeChat — an iLink gateway + conversation node bundle for DeepSeek Harness
- [SiYue-ZO/dsh-translator](https://github.com/SiYue-ZO/dsh-translator) ★1 · `dsh-translator` — Turn DeepSeek Harness into a focused, configurable AI translation workspace.
- [PerryLink/dsh-background-agents](https://github.com/PerryLink/dsh-background-agents) ★1 · `dsh-background-agents` — Interactive long-session background agents for DeepSeek Harness: start a durable continuable child agent, watch its progress in the Web UI sidebar, message it any time, and interrupt it - all through the official subagent seam.
- [TwotwoPiggy/dsh-balance](https://github.com/TwotwoPiggy/dsh-balance) ★1 · `dsh-balance` — A DeepSeek Harness plugin for real-time token tracking and highly accurate session cost estimation, featuring dynamic peak/off-peak pricing support.
- [MC5lan/dsh-multimodal](https://github.com/MC5lan/dsh-multimodal) ★1 · `dsh-multimodal` — 给 DeepSeek 安装一双眼睛和一支画笔:会话里直接贴截图/图片,GLM 视觉模型先精确转写图片内容(报错信息、代码、界面逐字保留),然后 DeepSeek 继续处理你的问题——同一轮完成,全程无感;需要配图时,DeepSeek 自动调用文生图后端出图并显示在会话中。
- [ZhuXinAI/sidesight](https://github.com/ZhuXinAI/sidesight) ★1 · `sidesight` — CLI-first vision sidecar for text-only coding agents. Analyze screenshots, diagrams, charts, UI diffs, and videos with OpenAI-compatible multimodal models.
- [WSL043/dsh-codex-subscription](https://github.com/WSL043/dsh-codex-subscription) ★1 · `@wsl043/dsh-codex-subscription` — Cache-aware ChatGPT / Codex subscription plugin for DeepSeek Harness
- [shi275773124/falsify-dsh](https://github.com/shi275773124/falsify-dsh) ★1 · `falsify-dsh` — DeepSeek Harness adapter for the public Falsify CLI. Adjudicator receipt, not a second-opinion workflow.
- [akira399/dsh-godot-skill](https://github.com/akira399/dsh-godot-skill) ★1 · `dsh-godot-skill` — Godot Engine 4.x 全栈游戏开发技能插件 for DeepSeek Harness (DSH) — registers the godot-4-development skill at runtime
- [LoftyTao/dsh-ui-workbench](https://github.com/LoftyTao/dsh-ui-workbench) ★1 · `dsh-ui-workbench` — DeepSeek Harness WebUI 的右侧边文件管理以及变更审查界面插件。
- [Ruler4396/dsh-launcher-lifetime](https://github.com/Ruler4396/dsh-launcher-lifetime) ★1 · `dsh-launcher-lifetime` — DeepSeek Harness (dsh) plugin: control the dsh service lifetime (always-on / tray / follow-window) for the dsh-launcher shell
- [Nexus-Aethra/DSH-plugin-switch](https://github.com/Nexus-Aethra/DSH-plugin-switch) ★1 · `dsh-plugin-switch` — DSH Plugin Switch is a marketplace for DeepSeek Harness plugins and skills. It lets users browse, search, and install community projects from GitHub, automatically detecting whether a repository is a DSH plugin or a DSH skill and installing it to the correct location.
- [Mingxi2077/dsh-plugin-review](https://github.com/Mingxi2077/dsh-plugin-review) ★1 · `plugin-review` — DSH Review Mode plugin: multi-dimension code health scoring + radar chart + review history (DSH 审查模式插件)
- [NigelYao/dsh-view-modes](https://github.com/NigelYao/dsh-view-modes) ★1 · `dsh-view-modes` — view modes for deepseek harness, including Verbose, Normal, Summary Mode
- [wuyuanjiang1/dsh2wechat](https://github.com/wuyuanjiang1/dsh2wechat) ★1 · `dshplug` — DeepSeek Harness 微信 ClawBot 消息桥插件
- [Jesse-njx/dsh-routines](https://github.com/Jesse-njx/dsh-routines) ★1 · `@dsh-routines/bundle` — dsh-routines — scheduled agents for DSH: run a prompt on a cron, get the digest where you already are (file digests, chatnode delivery, unattended-safe)
- [BrambleXu/dsh-annotate](https://github.com/BrambleXu/dsh-annotate) ★1 · `dsh-annotate` — Visual browser element annotation for DeepSeek Harness, capturing DOM, styles, accessibility data, comments, and viewport screenshots. DeepSeek Harness 浏览器元素标注插件，捕获 DOM、样式、可访问性数据、评论和视口截图。
- [lordship12138-crypto/dsh-plugin-dedup](https://github.com/lordship12138-crypto/dsh-plugin-dedup) ★1 · `dsh-plugin-dedup` — Review duplicate dynamic Cordis plugins and produce merge plans for DeepSeek Harness (DSH). Detects content-similar packages (token Jaccard/containment), clusters duplicates, and yields safe merge plans or superset final sources. Entirely AI-generated.
- [franksong2702/dsh-codex-connect](https://github.com/franksong2702/dsh-codex-connect) ★1 · `dsh-codex-connect` — ChatGPT OAuth and Codex models for DeepSeek Harness.
- [RealAlexandreAI/dsh-atuin](https://github.com/RealAlexandreAI/dsh-atuin) ★1 · `dsh-atuin` — dsh atuin-history: record dsh user prompts into atuin shell history
- [BlockRunAI/dsh-clawrouter](https://github.com/BlockRunAI/dsh-clawrouter) ★1 · `dsh-clawrouter` — A second brain for your DeepSeek Harness agent — strong-model review before risky tool calls, plus 70 models from one wallet.
- [yequ172672/dsh-codex-subscription](https://github.com/yequ172672/dsh-codex-subscription) ★1 · `dsh-llm-codex` — DSH 插件:直接复用 Codex CLI 本地登录订阅凭证,在 DeepSeek Harness 中使用 ChatGPT 订阅模型,无需 API Key | DSH plugin: reuse your Codex CLI local subscription login to use ChatGPT subscription models in DeepSeek Harness, no API key required
- [TtTRz/dsh-wecom](https://github.com/TtTRz/dsh-wecom) ★1 · `dsh-wecom` — WeCom AI Bot channel for DeepSeek Harness — every chat runs a persistent, preset-backed agent with real tools.
- [nekogpt/dsh-ui-quote-selection](https://github.com/nekogpt/dsh-ui-quote-selection) ★1 · `dsh-ui-quote-selection` — Codex-style select-to-quote for DeepSeek Harness Web: quote any chat text into the composer as a native reference chip.
- [Starfie1d1272/dsh-builtin-toggles](https://github.com/Starfie1d1272/dsh-builtin-toggles) ★1 · `dsh-builtin-toggles` — Safe GUI toggles for optional built-in plugins in DeepSeek Harness Web.
- [dyuan311/dsh-openai-codex-oauth](https://github.com/dyuan311/dsh-openai-codex-oauth) ★1 · `dsh-openai-codex-oauth` — ChatGPT subscription OAuth for the openai-codex provider in DeepSeek Harness
- [ben7am1n/dsh-telegram](https://github.com/ben7am1n/dsh-telegram) ★1 · `dsh-telegram` — Telegram runtime adapter for DeepSeek Harness — chat with your dsh agents from Telegram.
- [BeAChanger/dsh-openclaw-acp](https://github.com/BeAChanger/dsh-openclaw-acp) ★1 · `dsh-openclaw-acp` — DeepSeek Harness bundle for OpenClaw and WeChat over ACP
- [Ayase34/gal-view](https://github.com/Ayase34/gal-view) ★1 · `gal-view` — DSH Web GUI 会话页的 GAL 视窗：Galgame 风格对话视图 + 场景元素可视化编辑器
- [omdsh-dev/7d7d](https://github.com/omdsh-dev/7d7d) ★1 · `@mattheliu/7d7d` — 7d7d —— 7k7k 风格的 DSH 游戏门户：在 Web UI 内生成、同步并游玩 HTML5 与自托管 Ruffle Flash 小游戏。
- [omdsh-dev/dsh-auto-chess](https://github.com/omdsh-dev/dsh-auto-chess) ★1 · `@deepseek-ai/dsh-auto-chess` — DSH Web里的自走棋插件：人机对战或双AI对弈
- [Fishquito7/dsh-skill-viewer](https://github.com/Fishquito7/dsh-skill-viewer) ★1 · `dsh-skill-viewer` — DSH Web UI plugin: Skills settings section with hot enable/disable, delete and add
- [xu1132/dsh-plugin-browser](https://github.com/xu1132/dsh-plugin-browser) ★1 · `dsh-plugin-browser` — A DeepSeek Harness community plugin that drives a headless Playwright browser: rendered page text, screenshots, and page automation
- [XCNXNXNX/dsh-portable-tavern](https://github.com/XCNXNXNX/dsh-portable-tavern) ★1 · `dsh-portable-tavern` — DeepSeek Harness 的「便携酒馆」插件：RPG 式 SillyTavern V2/V3 角色卡生成器 + 酒馆角色扮演聊天。支持世界书、角色卡 JSON/PNG 导入导出、面板主题与本地音乐。独立插件，仅依赖官方 @deepseek-ai SDK。
- [ropon/dsh-plugin-clawrouters](https://github.com/ropon/dsh-plugin-clawrouters) ★1 · `dsh-plugin-clawrouters` — One-key ClawRouters plugin for DeepSeek Harness: chat, image, video, and web search
- [DGPisces/deepseek-harness-openai-oauth](https://github.com/DGPisces/deepseek-harness-openai-oauth) ★1 · `deepseek-harness-openai-oauth` — DeepSeek Harness provider for GPT models using managed ChatGPT OAuth through Codex app-server
- [pandashere/dsh-kimi-bridge](https://github.com/pandashere/dsh-kimi-bridge) ★1 · `dsh-kimi-bridge` — Kimi CLI bridge plugin for DeepSeek Harness with review-only mode and a Web conversation tab.
- [JeremyGuo/dsh-custom-workspace](https://github.com/JeremyGuo/dsh-custom-workspace) ★1 · `dsh-custom-workspace` — Per-workspace appearance settings for DeepSeek Harness Web
- [havingautism/dsh-ultra-ui](https://github.com/havingautism/dsh-ultra-ui) ★1 · `@deepseek-ai/dsh-ultra-ui` — Codemini-inspired compact disclosure for every DSH Web Tool call
- [Yan-Zero/dsh-codex](https://github.com/Yan-Zero/dsh-codex) ★1 · `dsh-codex` — Use your ChatGPT subscription in DeepSeek Harness through OpenAI's Codex sign-in flow
- [mixin-ai/dsh-git-branch-switcher](https://github.com/mixin-ai/dsh-git-branch-switcher) ★0 · `@mixin-ai/dsh-git-branch-switcher` — DeepSeek Harness web plugin: git branch pill in the session header with UI branch switching
- [MoonShadow1976/chiral-pulse](https://github.com/MoonShadow1976/chiral-pulse) ★0 · `@dsh-plugins/chiral-pulse` — CHIRAL PULSE — a Death Stranding-styled BB pod vital-signs monitor for the DeepSeek Harness web UI: the session's heartbeat waveform is the hero, and the pulse reacts to real agent activity.
- [lehhair/dsh-home-ui](https://github.com/lehhair/dsh-home-ui) ★0 · `@dsh-external/dsh-home-ui` — PiUI-inspired home feed visual refinement plugin for DeepSeek Harness web client (pure extension, zero core changes)
- [jinhuang712/dsh-survey](https://github.com/jinhuang712/dsh-survey) ★0 · `dsh-survey` — 问卷式批量提问插件 for DeepSeek Harness：一次性问 10+ 题（单选/多选/是否 toggle/对比题/开放题），可跳过、全屏浮层、提交后对半 recap
- [simon300000/dsh-auto](https://github.com/simon300000/dsh-auto) ★0 · `dsh-auto` — dsh Auto Approve
- [suntianc/dsh-codex-auth](https://github.com/suntianc/dsh-codex-auth) ★0 · `dsh-codex-auth` — DeepSeek Harness plugin that reuses the local Codex CLI ChatGPT login and adds a native GPT Auth settings card
- [xiaoxiao-svg/delivery-review-dsh-plugin](https://github.com/xiaoxiao-svg/delivery-review-dsh-plugin) ★0 · `delivery-review-plugin` — delivery-review-plugin（Claude Code 双 Agent 交付协作工作流插件）的 DeepSeek Harness 移植版。基于 DSH 的 Cordis 插件系统，以 bundle 方式分发，不改动 DSH 源码，全部能力由插件行在配置层挂载。
- [makuralymi/dsh-webUI-Glass-Theme](https://github.com/makuralymi/dsh-webUI-Glass-Theme) ★0 · `dsh-client-ui-frosted-glass` — Global frosted-glass (backdrop blur) theme plugin for the dsh web UI
- [xDer666/dsh-mobile-nav](https://github.com/xDer666/dsh-mobile-nav) ★0 · `dsh-mobile-nav` — Ultra-light mobile nav for DSH web UI: hamburger button + drawer sidebar on narrow screens, chat stays full-width. Pure client-side, zero build.
- [xjackzenvey/Dsh-UI-Enhance](https://github.com/xjackzenvey/Dsh-UI-Enhance) ★0 · `dsh-ui-enhance` — Deepseek Harness 增强工具
- [318197375/dsh-bottom-stats](https://github.com/318197375/dsh-bottom-stats) ★0 · `dsh-bottom-stats` — DSH plugin: full-width conversation stats line (no truncation) + context occupancy progress bar for the DeepSeek Harness web UI
- [BrambleXu/dsh-revdiff](https://github.com/BrambleXu/dsh-revdiff) ★0 · `dsh-revdiff` — Native interactive Git diff review for DeepSeek Harness with structured annotations sent back to the current Agent session. DeepSeek Harness 原生交互式 Git diff 审查，支持结构化批注并回传当前 Agent 会话。
- [KinGao294/dsh-skin](https://github.com/KinGao294/dsh-skin) ★0 · `dsh-skin` — Skin switcher + custom wallpaper for DeepSeek Harness (dsh): curated --dsw-alias-* palettes, translucent wallpaper with opacity/blur controls, persisted per browser (like Codex themes) — 换皮肤 / 自定义背景插件
- [yweilai77-dev/dsh-plugin-cost](https://github.com/yweilai77-dev/dsh-plugin-cost) ★0 · `dsh-plugin-cost` — Session cost estimate for the DSH Web UI: tokenUsage projection × configurable price table, with a one-click refresh of official DeepSeek prices
- [MAXeaglet/dsh-bash-terminal](https://github.com/MAXeaglet/dsh-bash-terminal) ★0 · `dsh-bash-terminal` — DSH plugin: one shell tool that runs commands through PowerShell, Git Bash, or WSL on Windows, with a user-chosen default terminal in the Web UI settings.
- [dongsheng123132/dsh-cad-review](https://github.com/dongsheng123132/dsh-cad-review) ★0 · `dsh-cad-review` — Evidence-first ASCII DXF inspection and deterministic CAD rule review for DeepSeek Harness
- [Chi-hong22/dsh-latexcp](https://github.com/Chi-hong22/dsh-latexcp) ★0 · `@chi-hong22/dsh-latexcp` — DeepSeek Harness (DSH) Web 界面 LaTeX 公式复制插件：悬停公式浮现复制按钮，一键复制公式的 TeX 源码。
- [citrusli2026/dsh-mobile-ui](https://github.com/citrusli2026/dsh-mobile-ui) ★0 · `dsh-mobile-ui` — Mobile UI overlay (bottom strip, session drawer) for the DeepSeek Harness web GUI — out-of-tree dsh client plugin
- [minatoAI/jina-dsh-plugin](https://github.com/minatoAI/jina-dsh-plugin) ★0 · `dsh-jina` — Jina AI tools for DeepSeek Harness: 12 model tools (web / arXiv / SSRN search, read, screenshot, embeddings, rerank, classify, PDF, primer) plus a settings-page API key card with live balance check.
- [karuboniru/dsh-approval-guardian](https://github.com/karuboniru/dsh-approval-guardian) ★0 · `dsh-approval-guardian` — 模仿codex auto-review 的自动审批机制
- [hurry060215-tech/dsh-api-usage-bar](https://github.com/hurry060215-tech/dsh-api-usage-bar) ★0 · `dsh-api-usage-bar` — Cache-aware API token usage bar for the DeepSeek Harness Web UI
- [realguan/dsh-mermaid-preview](https://github.com/realguan/dsh-mermaid-preview) ★0 · `dsh-mermaid-preview` — Render Mermaid fenced code blocks as diagrams in DeepSeek Harness (dsh) web — a dynamic Cordis client plugin, no shell changes needed.
- [gnulife/dsh-plugin-wechat](https://github.com/gnulife/dsh-plugin-wechat) ★0 · `dsh-plugin-wechat` — DeepSeek Harness (DSH) 个人微信 ClawBot 插件：OpenClaw 负责微信通道（扫码登录/收发消息），DSH 负责大脑，两者通过 OpenAI 兼容协议桥接。
- [Ox0400/dsh-vault](https://github.com/Ox0400/dsh-vault) ★0 · `dsh-vault` — Encrypted credential vault for DeepSeek Harness — AES-256-GCM + TOTP, model tools + Settings UI
- [147228/dsh-black-whale](https://github.com/147228/dsh-black-whale) ★0 · `@xiaoyao-ai/dsh-client-ui-skin-black-whale` — DeepSeek Harness 黑鲸实验室主题：官网黑鲸 × 夕小瑶 IP，真实 profile 可安装的 Web UI 插件
- [chajiuqqq/dsh-claude-theme](https://github.com/chajiuqqq/dsh-claude-theme) ★0 · `dsh-claude-theme` — dsh的claude风格界面
- [leechen298/Code2Skill](https://github.com/leechen298/Code2Skill) ★0 · `@leechen298/code2skill` — Generate and review portable Function, MCP, and Agent Skill packages from existing code.
- [Luaphes/dsh-web-attention-badge](https://github.com/Luaphes/dsh-web-attention-badge) ★0 · `dsh-web-attention-badge` — Attention reminders for the DeepSeek Harness Web UI: frame badge, (N) tab title and whale-favicon recolor for sessions waiting for input or finished unopened.
- [radaren/dsh-auth](https://github.com/radaren/dsh-auth) ★0 · `dsh-auth` — Cookie authentication and IPv4 binding for the DeepSeek Harness Web UI
- [liuup/dsh-latex-tools](https://github.com/liuup/dsh-latex-tools) ★0 · `dsh-latex-tools` — ♾️ Copy and export the LaTeX in DeepSeek Harness 悬停任意 LaTeX 公式即可复制 TeX 源码或导出为独立的 SVG 文件
- [lonelymoon87/dsh-guardian](https://github.com/lonelymoon87/dsh-guardian) ★0 · `dsh-guardian` — Runtime tool policy, dangerous-command guard, and output redaction for DeepSeek Harness.
- [zuoguyoupan2023/adhdgofly-dsh-ext](https://github.com/zuoguyoupan2023/adhdgofly-dsh-ext) ★0 · `adhdgofly-dsh-ext` — ADHDGoFly POS highlighting plugin for DeepSeek Harness Web: nouns green, verbs red, adjectives/adverbs purple, others gray in rendered Markdown
- [Jesse-njx/dsh-docker](https://github.com/Jesse-njx/dsh-docker) ★0 · `@dsh-docker/bundle` — dsh-docker — typed, guarded container control for DSH: structured docker/compose tools, project-aware targeting, an approval gate for destructive ops, service-health context, and a replayable status-table renderer

</details>

<a id="workflow-automation"></a>
<details>
<summary><strong>🔁 工作流与自动化</strong> <sup>65 个插件</sup></summary>

### 工作流与自动化

- [icetomoyo/dsh_workflow](https://github.com/icetomoyo/dsh_workflow) ★46 · `@dsh-external/workflow` — 把Claude Code的UltraCode模式带给DSH，把 DSH 的一次性多 Agent 调度，升级为可生成、可保存、可治理、可观察、可恢复的 Workflow 层
- [omdsh-dev/dsh-annotation](https://github.com/omdsh-dev/dsh-annotation) ★24 · `@omdsh-dev/dsh-annotation` — DSH Web 选中批注插件：选文字→批注→回车随消息发送；气泡隐藏批注块（零闪烁）；回复按 Annotation N 逐条对照（可悬浮芯片）。官方 bundle，零核心改动
- [titanwings/dsh-automation](https://github.com/titanwings/dsh-automation) ★16 · `@dsh-external/dsh-automation` — DSH 自动化插件：让 Coding 任务按计划在全新 Agent Session 中运行，并由用户或 Agent 创建和管理定时任务。 / Run coding tasks in fresh Agent sessions and manage schedules from DSH Web or an Agent.
- [LoserFox/distill](https://github.com/LoserFox/distill) ★13 · `@loserfox/distill` — 自动对话蒸馏：后台 subagent 反省 + 技能 create/update
- [hellodigua/dsh-emoji](https://github.com/hellodigua/dsh-emoji) ★8 · `@dsh-external/dsh-emoji` — 为AI回复自动添加表情的插件
- [omdsh-dev/dsh-security-audit](https://github.com/omdsh-dev/dsh-security-audit) ★8 · `@deepseek-ai/dsh-security-audit` — DSH 本机安全审计插件：配置/插件来源/会话/网络暴露面，只读脱敏风险报告
- [yjh051108/dsh-super-injector](https://github.com/yjh051108/dsh-super-injector) ★6 · `@dsh-external/dsh-super-injector` — 超级模组注入器：运行时注入任意本地 DSH 插件包（junction 链接 + loader.create，不碰 patch/package.json/不重启），热重载全家桶 + 开发侧挂区一键转正 + 一键卸载 + 路由自愈，清单持久化重启自动恢复——DSH 生态的 BepInEx 式模组注入入口
- [omdsh-dev/dsh-deep-research](https://github.com/omdsh-dev/dsh-deep-research) ★6 · `@dsh-external/dsh-deep-research` — Adaptive deep-research orchestrator plugin for DeepSeek Harness (official workflow engine, cybernetics/information-theory design)
- [lzszq/dsh-scholar](https://github.com/lzszq/dsh-scholar) ★5 · `@dsh-scholar/research-plugin` — dsh-scholar
- [Flyvhidbwo/dsh-vision-proxy](https://github.com/Flyvhidbwo/dsh-vision-proxy) ★4 · `dsh-vision-proxy` — DeepSeek Harness 插件：DeepSeek 大脑 + 自动识图。附加图片自动经 VLM 转译成文字后交给 DeepSeek 作答
- [fuhefei/dsh-sentinel](https://github.com/fuhefei/dsh-sentinel) ★4 · `@dsh-external/dsh-sentinel` — Condition-driven wakeup for DeepSeek Harness: durable file/command/http/process/webhook watches that wake the agent, with dock, sidebar branch, and a global dashboard.
- [jiesou/dsh-stream-rules](https://github.com/jiesou/dsh-stream-rules) ★3 · `@jiesou/dsh-stream-rules` — 模式匹配自动注入 steering rules，不占系统上下文 - Inject rules when needed, without wasting context. Similar to oh-my-pi's "Time-traveling stream rules", but with a very simple and compact code implementation.
- [humblebanana/dsh-record-replay](https://github.com/humblebanana/dsh-record-replay) ★3 · `dsh-record-replay` — DeepSeek Harness record macOS desktop workflows by demonstration and turn them into agent skills (open-record-replay skill + orr_* tools)
- [Areium/dsh-fail-logger](https://github.com/Areium/dsh-fail-logger) ★3 · `dsh-fail-logger` — DeepSeek Harness（DSH）插件：自动记录所有执行模式（原生工具 / PTC run_code / 代码内嵌工具调用）的工具失败错因，去重、计数、确定性排序后沉淀进 skill 的机器维护实录区段——让 Agent 越用越少错。
- [huashenglian/dsh-her-eyes](https://github.com/huashenglian/dsh-her-eyes) ★3 · `dsh-her-eyes` — 一个可以让ai自动调用VLM(多模态模型)进行视觉分析的dsh插件。A dsh plugin that allows AI to automatically invoke VLMs (multimodal models) for visual analysis.
- [william-jin-cmu/dsh-evolve](https://github.com/william-jin-cmu/dsh-evolve) ★3 · `@dsh-external/dsh-evolve` — 自进化插件：agent 在 session 内随对话给自己长出/剪掉能力 —— evolve_add 热挂载持久化 cordis 插件（下一 step 工具即可见），evolve_remove 可逆卸载，重启自动恢复
- [omdsh-dev/dsh-daily-progress](https://github.com/omdsh-dev/dsh-daily-progress) ★2 · `dsh-daily-progress` — DSH daily progress achievement plugin: evening plans for tomorrow, a todo-style checklist today, and a thermometer completion-rate widget in the composer dock
- [mitao-su/dsh-playwright-cli](https://github.com/mitao-su/dsh-playwright-cli) ★2 · `dsh-playwright-cli` — DeepSeek Harness (DSH) host plugin wrapping the Playwright CLI: install browsers, run tests, open the HTML report from the agent loop.
- [zp-home/dsh-recommend](https://github.com/zp-home/dsh-recommend) ★2 · `dsh-recommend` — DSH 插件生态透明排行与推荐：每日自动抓取 dsh-plugin 话题 + 公开评分模型 + 排行/推荐插件与静态站
- [omdsh-dev/dsh-tool-regex](https://github.com/omdsh-dev/dsh-tool-regex) ★2 · `@deepseek-ai/dsh-tool-regex` — DSH 正则工具插件：测试匹配/提取捕获组/安全替换/静态解释正则（不执行代码），零依赖，注册 regex 工具
- [jiruidai/dsh-meta-orchestrator](https://github.com/jiruidai/dsh-meta-orchestrator) ★2 · `dsh-meta-orchestrator` — A model-native meta-agent plugin for DeepSeek Harness that uses the underlying model’s reasoning and planning capabilities to synthesize task-specific workflows at runtime and coordinate tools and subagents.
- [yoke233/dsh-prime-agent](https://github.com/yoke233/dsh-prime-agent) ★2 · `dsh-prime-agent` — Prime Agent-inspired persistent RLM control plane for DeepSeek Harness Code Mode
- [AnacondaKC/dsh-douyin](https://github.com/AnacondaKC/dsh-douyin) ★2 · `dsh-douyin` — DSH WebUI 侧栏短视频插件：原生播放器、系列导航、直链解析与精确历史回放
- [vlln/dsh-loop](https://github.com/vlln/dsh-loop) ★2 · `@dsh-external/dsh-loop` — DSH 插件：定时循环（/loop 命令 + loop 工具 + 活动状态条）。官方 bundle 插件，dsh plugin --profile web add 安装
- [omdsh-dev/dsh-revive](https://github.com/omdsh-dev/dsh-revive) ★2 · `dsh-revive` — DSH 一键复活：重启后给所有被打断的会话自动发送「继续」指令（/revive 命令 + revive_sessions 工具 + 浏览器一键按钮）
- [jkrandom-sudo/dsh-plugin-audit](https://github.com/jkrandom-sudo/dsh-plugin-audit) ★2 · `dsh-plugin-audit` — Security audit plugin for DeepSeek Harness: static permission profiling + runtime sentinel
- [RealAlexandreAI/dsh-nocturne-memory](https://github.com/RealAlexandreAI/dsh-nocturne-memory) ★1 · `dsh-nocturne-memory` — dsh memory: Nocturne Memory client for DeepSeek Harness
- [Clizo1209/dsh-playwright-browser](https://github.com/Clizo1209/dsh-playwright-browser) ★1 · `dsh-playwright-browser` — Playwright browser automation for DeepSeek Harness｜面向 DeepSeek Harness 的 Playwright 浏览器自动化插件
- [akira399/dsh-plugin-publisher](https://github.com/akira399/dsh-plugin-publisher) ★1 · `dsh-plugin-publisher` — DSH 插件开发与 GitHub 发布工作流技能插件 (consent-gated) — develop, verify, publish & marketplace-visible DSH plugins
- [shelken/dsh-co-authored-by](https://github.com/shelken/dsh-co-authored-by) ★1 · `@shelken/dsh-co-authored-by` — dsh plugin: auto-inject Co-Authored-By and Generated-By trailers on git commit
- [agentic-control-plane/dsh-acp-plugin](https://github.com/agentic-control-plane/dsh-acp-plugin) ★1 · `dsh-plugin-acp` — Agentic Control Plane for DeepSeek Harness — policy-check every tool call before it runs
- [omdsh-dev/dsh-llm-fallbacks](https://github.com/omdsh-dev/dsh-llm-fallbacks) ★1 · `dsh-llm-fallbacks` — An dsh plugin for role-based LLM retry&fallback strategy. 基于角色的模型重试备用策略插件
- [qing3a/dsh-event-auditor](https://github.com/qing3a/dsh-event-auditor) ★1 · `@qing3a/dsh-event-auditor` — DeepSeek Harness 事件流审计面板插件：观察事件类型/分发模式/计数/最近事件，帮助插件作者理解 harness 内部
- [csiroqa/dsh-schedule](https://github.com/csiroqa/dsh-schedule) ★1 · `@dsh-external/dsh-schedule` — DeepSeek Harness（DSH）定时任务 + 状态监控插件：按 cron 时间表自动触发 Agent 执行任务，/status 与设置页仪表盘查看系统与 harness 综合状态。Scheduled tasks (cron) + status monitoring plugin for DeepSeek Harness.
- [ben7am1n/dsh-browser](https://github.com/ben7am1n/dsh-browser) ★1 · `dsh-browser` — Playwright-powered browser automation for DeepSeek Harness
- [levi-qiao/dsh-plugin-longgraph](https://github.com/levi-qiao/dsh-plugin-longgraph) ★1 · `dsh-plugin-longgraph` — DeepSeek Harness community plugin: longgraph / loop-graph / loop-converge authoring skills on ctx.skills
- [TT-Wang/dsh-slice-agent-loop](https://github.com/TT-Wang/dsh-slice-agent-loop) ★1 · `@dsh-external/dsh-slice-agent-loop` — A drop-in DeepSeek Harness agent loop whose context engine is a bounded slice instead of a growing transcript
- [zcx369658780/governed-workflow-for-dsh](https://github.com/zcx369658780/governed-workflow-for-dsh) ★1 · `dsh-governed-workflow` — Policy-enforced, evidence-first governed workflows for DeepSeek Harness agents.
- [omdsh-dev/ex-setting](https://github.com/omdsh-dev/ex-setting) ★1 · `@deepseek-ai/dsh-ex-setting` — DSH的设置扩展
- [tianji-qingtian/dsh-model-router](https://github.com/tianji-qingtian/dsh-model-router) ★1 · `dsh-model-router` — Model router & cost optimizer for DeepSeek Harness: heuristic tier routing, failure fallback, and live per-session token/cache/cost stats
- [cesaryike/dsh-image-to-path](https://github.com/cesaryike/dsh-image-to-path) ★1 · `dsh-image-to-path` — DSH 插件:让纯文本模型对话也能拖图/贴图——图片自动保存到会话工作区,以文件路径交给模型(多模态模型不受影响)
- [pandashere/dsh-self-control-guard](https://github.com/pandashere/dsh-self-control-guard) ★1 · `self-control-guard` — Self-control guard plugin for DeepSeek Harness host exit and restart workflows.
- [omdsh-dev/dsh-kb-sieve](https://github.com/omdsh-dev/dsh-kb-sieve) ★1 · `@dsh-external/dsh-kb-sieve` — DSH knowledge-base plugin: build audit-able KB packs (references + SQLite FTS5) from md/txt/docx/pdf, deterministic retrieval (kb_query) and original-text reading (kb_read), zero-script generated skills. Apache-2.0.
- [xiaomiba0904/dsh-obsidian-export](https://github.com/xiaomiba0904/dsh-obsidian-export) ★1 · `dsh-obsidian-export` — DeepSeek Harness (DSH) plugin: export conversations to an Obsidian vault, plus read/search/list/tags/backlinks tools and automatic vault discovery.
- [f0909172434/dsh-plugin-verified-search](https://github.com/f0909172434/dsh-plugin-verified-search) ★0 · `dsh-plugin-verified-search` — Verified current-source search workflow for DeepSeek Harness
- [ziyou979/dsh-llm-oauth](https://github.com/ziyou979/dsh-llm-oauth) ★0 · `dsh-llm-oauth` — DeepSeek Harness plugin: OAuth / subscription-plan LLM providers (Grok, GitHub Copilot, OpenAI Codex, Anthropic, OpenRouter)
- [zimai233/dsh-wash-calendar](https://github.com/zimai233/dsh-wash-calendar) ★0 · `dsh-wash-calendar` — Recurring habit scheduling calendar for DeepSeek Harness. Turn last-wash dates and intervals into next-occurrence, schedule, check and advice tools for any recurring health/habit routine.
- [alison-xx/deepseek-harness-flow](https://github.com/alison-xx/deepseek-harness-flow) ★0 · `deepseek-harness-flow` — Visual workflows and multi-model evaluation for DeepSeek Harness
- [reshuibuduo/tmcra-deepseek-harness-memory](https://github.com/reshuibuduo/tmcra-deepseek-harness-memory) ★0 · `tmcra-deepseek-harness-memory` — Automatic cross-conversation TMCRA memory for DeepSeek Harness
- [green-dalii/dsh-shift-router](https://github.com/green-dalii/dsh-shift-router) ★0 · `dsh-shift-router` — Two-tier model router for DeepSeek Harness — LLM-Judge routing, multi-model fallback chains, exponential-backoff failover, and task-level orchestration (DSH adaptation of pi-shift-router)
- [acosmi/dsh-session-supervisor](https://github.com/acosmi/dsh-session-supervisor) ★0 · `dsh-session-supervisor` — Durable, bounded lifecycle supervisor with scheduled evaluation for live DeepSeek Harness sessions (community plugin)
- [LingyeSoul/dsh-rider](https://github.com/LingyeSoul/dsh-rider) ★0 · `dsh-rider` — DSH plugin: free web search tool (DuckDuckGo via ddg-kit with system-proxy support, automatic Bing fallback) + front-loaded vision understanding tool (vision_understand: understand images via a vision-capable model configured in DSH when the conversation model has no image modality). Official bundle plugin, install: dsh plugin --profile web add github:LingyeSoul/dsh-rider#main。DSH 插件：免费网络搜索（duckduckgo_search 工具）+ 前置视觉理解（vision_understand 工具）。
- [Towzai/dsh-memory](https://github.com/Towzai/dsh-memory) ★0 · `@towzai/dsh-memory` — Cross-session memory plugin for DeepSeek Harness (dsh): embedding search + automatic system-prompt injection
- [csiroqa/dsh-backup-sync](https://github.com/csiroqa/dsh-backup-sync) ★0 · `@dsh-external/dsh-backup-sync` — DeepSeek Harness（DSH）备份/恢复 + 跨机同步插件：本地快照、WebDAV 推送/拉取、自动备份与失效归档清理。Snapshot backup, restore and cross-machine sync plugin for DeepSeek Harness: local snapshots, incremental WebDAV push/pull, auto-backup retention and stale archive sweep.
- [Jesse-njx/dsh-polyglot](https://github.com/Jesse-njx/dsh-polyglot) ★0 · `@dsh-polyglot/bundle` — dsh-polyglot — the model switch for DSH: generic OpenAI-compatible ctx.llm adapter, curated free/cheap DeepSeek presets, automatic provider fallback on rate limits
- [winyh/dsh-geo](https://github.com/winyh/dsh-geo) ★0 · `dsh-geo` — 生成式引擎优化（GEO）DeepSeek Harness 插件：面向本地 Markdown 知识库的 SEO、GEO 与 AEO 审计工具。
- [lonelymoon87/dsh-gitflow](https://github.com/lonelymoon87/dsh-gitflow) ★0 · `dsh-gitflow` — Git status, diff, commit, pull request, and worktree workflows for DeepSeek Harness.
- [lonelymoon87/dsh-specflow](https://github.com/lonelymoon87/dsh-specflow) ★0 · `dsh-specflow` — Specification-driven development toolkit for DeepSeek Harness.
- [cheng-nan01/dsh-tool-playwright](https://github.com/cheng-nan01/dsh-tool-playwright) ★0 · `dsh-tool-playwright` — 一个给 DeepSeek Harness 用的插件：让 AI 能真的打开浏览器上网——打开网页、点按钮、填表单、翻页、看页面内容，就像人一样操作浏览器。
- [biociao/dsh-science](https://github.com/biociao/dsh-science) ★0 · `dsh-science` — Claude Science-style research workbench for DeepSeek Harness: ReAct research-loop engine (research_* tools), versioned artifacts with provenance (artifact_* tools), and 10 science skills for genomics / pathogens / bioinformatics.
- [mario03690/dsh-netcafe](https://github.com/mario03690/dsh-netcafe) ★0 · `dsh-netcafe` — DeepSeek Harness bundle: adds AI NetCafé's hosted outcome tools (statement extraction with reconciliation, SQL dialect transpile, mainland-China reachability, cross-session memory, scheduled agents) to your dsh profile in one install.
- [ZK-Andy/dsh-continual-evolve](https://github.com/ZK-Andy/dsh-continual-evolve) ★0 · `dsh-continual-evolve` — Continual self-evolution plugin for DeepSeek Harness: versioned, auditable, rollback-safe harness state refined from session trajectories, with a benchmark-driven validation loop.
- [userInner/dsh-academic-research](https://github.com/userInner/dsh-academic-research) ★0 · `@onpeople/dsh-academic-research` — Evidence-grounded bilingual academic research plugin for DeepSeek Harness and OnPeople
- [dongsheng123132/dsh-switch](https://github.com/dongsheng123132/dsh-switch) ★0 · `dsh-switch` — Evidence-first model control plane for DeepSeek Harness
- [Jesse-njx/dsh-tmuxctl](https://github.com/Jesse-njx/dsh-tmuxctl) ★0 · `@dsh-tmuxctl/bundle` — dsh-tmuxctl — the control plane for tmux: list, drive, capture, split, swap, run, and watch the panes you already have open, with safety by default (DeepSeek Harness plugin bundle)

</details>

<a id="tools"></a>
<details>
<summary><strong>🛠️ 工具集</strong> <sup>94 个插件</sup></summary>

### 工具集

- [ccch1mneyyy/dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) ★516 · `dsh-cc-tui` — 解决DSH 官方尚无终端 TUI 痛点的补位之作，献给偏爱cli的各位极客：Claude Code 风格全屏交互终端插件——像素鲸鱼顶栏、实时工作状态行、思考流式展开、双击 Esc 回滚、上下文进度条 + TPS 仪表。npm 一键安装。
- [liustack/modsearch](https://github.com/liustack/modsearch) ★74 · `@liustack/modsearch` — The web plugin for DeepSeek Harness, and the search bridge for every text-only coding agent. Ask the web or X, get structured JSON evidence (search, fetch, citations).
- [omdsh-dev/dsh-at-file](https://github.com/omdsh-dev/dsh-at-file) ★65 · `dsh-at-file` — Codex-style @file mentions for DeepSeek Harness: search workspace files in the composer and attach their contents to prompts.
- [omdsh-dev/dsh-notification](https://github.com/omdsh-dev/dsh-notification) ★27 · `dsh-notification` — Desktop notifications for DeepSeek Harness turn completions, with per-outcome controls and include/exclude keyword rules.
- [omdsh-dev/dsh-toolkit](https://github.com/omdsh-dev/dsh-toolkit) ★11 · `@deepseek-ai/dsh-toolkit` — DSH 零依赖工具包 collection —— time / encoding / json / calculator / csv / regex / markdown / diff / stat / schema 十个确定性工具，统一入口一键安装
- [omdsh-dev/dsh-plugin-check](https://github.com/omdsh-dev/dsh-plugin-check) ★11 · `@deepseek-ai/dsh-plugin-check` — DSH 插件健康检查工具：扫描插件仓库的清单协议 / patch 格式 / 构建陷阱 / hub 收录状态，零依赖只读，注册 plugin_check 工具
- [vlln/dsh-navbar](https://github.com/vlln/dsh-navbar) ★8 · `@dsh-external/dsh-navbar` — DSH 插件：对话节点导航条（右缘节点串快速跳转 user 消息）。官方 bundle 插件，dsh plugin --profile web add 安装
- [omdsh-dev/fabric](https://github.com/omdsh-dev/fabric) ★8 · `cordis-fabric-bundle` — 一种类似MC Fabric的hook处理器
- [omdsh-dev/dsh-session-health](https://github.com/omdsh-dev/dsh-session-health) ★7 · `@deepseek-ai/dsh-session-health` — DSH 会话健康检查插件：多帧 zstd 会话文件的帧级扫描诊断（torn/损坏/空会话检测），零依赖只读，注册 session_health 工具
- [LoserFox/dsh-git-identity](https://github.com/LoserFox/dsh-git-identity) ★7 · `@loserfox/git-identity` — DSH 插件：git 提交固定使用环境自身作者身份（优先 gh CLI 登录账号，GitHub noreply 邮箱），GIT_AUTHOR_*/GIT_COMMITTER_* 环境变量注入压过一切 git config
- [lhmd/dsh-promotion-toolkit](https://github.com/lhmd/dsh-promotion-toolkit) ★6 · `@lhmd/dsh-promotion-toolkit` — 把你的任何想法，变成每个平台原生的宣发内容 | Turn any idea into platform-native publicity
- [lhmd/dsh-director-toolkit](https://github.com/lhmd/dsh-director-toolkit) ★6 · `@lhmd/dsh-director-toolkit` — DSH Director Toolkit is a DeepSeek Harness plugin for 3D artists, technical designers, and creative coders. Paste a half-formed idea, a reference note, or a portfolio caption and get a compact direction pack for Blender, Three.js, Houdini, or C4D.
- [awesome-dsh-plugin/dsh-find-plugin](https://github.com/awesome-dsh-plugin/dsh-find-plugin) ★5 · `dsh-find-plugin` — Find DSH plugins inside the agent — live GitHub dsh-plugin topic search, star-ranked / 会话内搜索发现 DSH 插件
- [omdsh-dev/Qwen-MM-Plugins](https://github.com/omdsh-dev/Qwen-MM-Plugins) ★3 · `@deepseek-ai/dsh-qwen-mm` — Qwen-MM-Plugins支持
- [HuanLinOTO/dsh-plugin-interpreters](https://github.com/HuanLinOTO/dsh-plugin-interpreters) ★3 · `@huanlin/dsh-plugin-interpreters` — 暴露 run_python/run_node 工具，通过 stdin 执行代码返回 stdout/stderr/exit，含解释器路径配置卡 | Exposes run_python/run_node tools that execute code via stdin and return stdout/stderr/exit, with interpreter-path config card
- [omdsh-dev/dsh-tool-csv](https://github.com/omdsh-dev/dsh-tool-csv) ★3 · `@deepseek-ai/dsh-tool-csv` — DSH CSV 数据工具插件：解析/查询/统计/转换 CSV 文本（RFC 4180），零依赖状态机解析器，注册 csv 工具
- [detpecca/dsh-llm-wiki](https://github.com/detpecca/dsh-llm-wiki) ★3 · `@detpecca/dsh-llm-wiki` — DeepSeek Harness plugin — manage an LLM-Wiki knowledge base from the agent: wiki_search / wiki_read / wiki_stats / wiki_validate / wiki_errorbook / wiki_ingest
- [omdsh-dev/dsh-tool-calculator](https://github.com/omdsh-dev/dsh-tool-calculator) ★3 · `@deepseek-ai/dsh-tool-calculator` — DSH 计算器工具插件：安全的数学表达式求值器，零依赖递归下降解析器
- [omdsh-dev/dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon) ★3 · `dsh-mnemon` — Mnemon 与 DSH 的深度集成插件，为 DSH 提供完备的本地记忆系统：运行时记忆、可检索档案与受监督记忆体。
- [titanwings/dsh-better-browser](https://github.com/titanwings/dsh-better-browser) ★3 · `@dsh-external/dsh-better-browser` — DSH 真实浏览器插件：通过 Kimi WebBridge 让 Agent 操作用户已登录的浏览器，并提供 13 个 webbridge_* 工具。 / Let DSH Agents use your signed-in browser through thirteen Kimi WebBridge tools.
- [bill9109/dsh-webbridge](https://github.com/bill9109/dsh-webbridge) ★3 · `@bill9109/dsh-webbridge` — DSH 结合 Kimi WebBridge
- [HuanLinOTO/dsh-plugin-sleep](https://github.com/HuanLinOTO/dsh-plugin-sleep) ★3 · `@huanlin/dsh-plugin-sleep` — 向模型暴露 sleep 工具，按指定毫秒暂停执行后返回，支持取消/clamp | Exposes a sleep tool that pauses for specified ms then returns, with cancellation/clamping
- [gxpppp/dsh-search-mcp](https://github.com/gxpppp/dsh-search-mcp) ★3 · `dsh-search-mcp` — Replace dsh's built-in web search with search MCP servers (Tavily/Brave/Exa/Perplexity/DuckDuckGo/custom), configured from the web Settings page. Disables the built-in DeepSeek search provider while enabled.
- [omdsh-dev/dsh-book2skill](https://github.com/omdsh-dev/dsh-book2skill) ★2 · `dsh-book2skill` — DSH book-to-skill plugin: a 5-stage long task (fetch → parse → understand → generate → install) with 3 human gates, host tools for the agent and a browser timeline panel
- [XYZ1024-alt/dsh-side-panel](https://github.com/XYZ1024-alt/dsh-side-panel) ★2 · `dsh-side-panel` — Right-side developer panel for DeepSeek Harness: files, session history, and git version control
- [sunshine-lang/dsh-pdf](https://github.com/sunshine-lang/dsh-pdf) ★2 · `dsh-pdf` — PDF toolbox for DeepSeek Harness: extract text, metadata, and page ranges via pdfjs-dist (local, no API key)
- [HuanLinOTO/dsh-plugin-aigc-canvas](https://github.com/HuanLinOTO/dsh-plugin-aigc-canvas) ★2 · `@huanlin/dsh-plugin-aigc-canvas` — provider-agnostic AIGC HTTP 桥 + 无限画布 + ffmpeg 后处理，13 个工具含画布连边/reroll/媒体编辑 | Provider-agnostic AIGC HTTP bridge + infinite canvas + ffmpeg post-processing; 13 tools incl. canvas linking/reroll/media-edit
- [HuanLinOTO/dsh-plugin-anti-ads](https://github.com/HuanLinOTO/dsh-plugin-anti-ads) ★2 · `@huanlin/dsh-plugin-anti-ads` — DSH Web 广告拦截器，四层独立防御拦截 dsh-ads 插件的所有广告位 | DSH Web ad blocker with four independent defense layers targeting the dsh-ads plugin
- [omdsh-dev/dsh-tool-schema](https://github.com/omdsh-dev/dsh-tool-schema) ★2 · `@deepseek-ai/dsh-tool-schema` — DSH JSON Schema 验证工具插件：validate/paths/explain/normalize，零网络零动态执行
- [STARDUSTLC666/dsh-email](https://github.com/STARDUSTLC666/dsh-email) ★2 · `dsh-email` — DeepSeek Harness 邮件插件：email_list/read/search/send/folders/attachment 六工具，内置 QQ/163/126/新浪/阿里/Gmail/Outlook/iCloud 八个预设，多账号、附件收发、Web 设置页配置，纯 Node 全平台。
- [dingyi222666/dsh-session-notification](https://github.com/dingyi222666/dsh-session-notification) ★2 · `@dingyi222666/dsh-session-notification` — 提供会话完成等四种状态的通知响应，支持浏览器提示和提示词
- [zhaoscsc/dsh-wikilink](https://github.com/zhaoscsc/dsh-wikilink) ★2 · `dsh-wikilink` — Obsidian-style [[wikilink]] mentions for the DeepSeek Harness web GUI: fuzzy-search note titles and attach their contents to the prompt
- [1na-ko/dsh-hdc-bridge](https://github.com/1na-ko/dsh-hdc-bridge) ★2 · `dsh-hdc-bridge` — DSH 原生鸿蒙设备桥：hdc 工具让 Agent 完成截图-看图-装包-验证的闭环调试 / DSH-native HarmonyOS device bridge
- [lunw/shopline-ai-toolkit-dsh](https://github.com/lunw/shopline-ai-toolkit-dsh) ★2 · `shopline-ai-toolkit-dsh` — SHOPLINE AI Toolkit for DeepSeek Harness (dsh-plugin): official SHOPLINE Developer MCP bridge + SHOPLINE agent skills, mirroring the Shopify AI Toolkit architecture. dsh-plugin
- [1475505/dsh-plugin-miliastra-toolbox](https://github.com/1475505/dsh-plugin-miliastra-toolbox) ★2 · `dsh-plugin-miliastra-toolbox` — 将千星沙箱（原神千星奇域）知识库接入 Deepseek Harness 的插件
- [yangzhe1003/dsh-web-search-firecrawl](https://github.com/yangzhe1003/dsh-web-search-firecrawl) ★2 · `@yangzhe1003/dsh-web-search-firecrawl` — Firecrawl-backed search provider plugin for the DeepSeek Harness web capability seam (ctx.web)
- [omdsh-dev/dsh-tool-stat](https://github.com/omdsh-dev/dsh-tool-stat) ★2 · `@deepseek-ai/dsh-tool-stat` — DSH 统计工具插件：描述统计/百分位数/频数分布/相关性，零依赖纯函数确定性
- [omdsh-dev/dsh-tool-time](https://github.com/omdsh-dev/dsh-tool-time) ★2 · `@deepseek-ai/dsh-tool-time` — DSH 时间工具插件：严格 ISO 8601 解析、IANA 时区转换、UTC 日历运算、固定时长差，零依赖
- [omdsh-dev/dsh-tool-encoding](https://github.com/omdsh-dev/dsh-tool-encoding) ★2 · `@deepseek-ai/dsh-tool-encoding` — DSH 编码/哈希工具插件：base64/base64url/url/hex 编解码、md5/sha1/sha256/sha512 哈希、UUID 生成，零依赖
- [omdsh-dev/dsh-tool-diff](https://github.com/omdsh-dev/dsh-tool-diff) ★2 · `@deepseek-ai/dsh-tool-diff` — DSH Diff 工具插件：文本/JSON/CSV/Markdown 结构化比较与 unified diff，零依赖只读，注册 diff 工具
- [omdsh-dev/dsh-tool-json](https://github.com/omdsh-dev/dsh-tool-json) ★2 · `@deepseek-ai/dsh-tool-json` — DSH JSON 查询工具插件：JMESPath 子集查询，零依赖递归下降解析器
- [omdsh-dev/dsh-tool-markdown](https://github.com/omdsh-dev/dsh-tool-markdown) ★2 · `@deepseek-ai/dsh-tool-markdown` — DSH Markdown 工具插件：HTML↔Markdown 转换、GFM 表格规范化、目录生成，零依赖轻量解析器，注册 markdown 工具
- [YYTbit/dsh-plugin-vision-toolkit](https://github.com/YYTbit/dsh-plugin-vision-toolkit) ★1 · `dsh-plugin-vision-toolkit` — Vision toolkit for DeepSeek Harness -- give text-only agents eyes
- [Jesse-njx/dsh-memory](https://github.com/Jesse-njx/dsh-memory) ★1 · `@dsh-memory/bundle` — Cited memory over DSH's lossless session log — distilled, human-auditable facts with citations back to the exact source events; memory_read/memory_expand tools, recall index, and a dsh-memory CLI.
- [mitao-su/dsh-playwright-native](https://github.com/mitao-su/dsh-playwright-native) ★1 · `dsh-playwright-native` — 把原生 Playwright CLI 注册为 DeepSeek Harness 透传工具（dsh-plugin）
- [ch1bug/dsh-mimo-agent-tools](https://github.com/ch1bug/dsh-mimo-agent-tools) ★1 · `dsh-mimo-agent-tools` — Xiaomi MiMo search + multimodal tools for DeepSeek Harness agents: mimo_search/vision/audio/video/asr/tts
- [yuzi-ska/DSH-Chrome-devtools](https://github.com/yuzi-ska/DSH-Chrome-devtools) ★1 · `dsh-chrome-devtools` — Real Chrome browser control for DeepSeek Harness agents, powered by Chrome DevTools MCP
- [YJSoooooo/dsh-chrome](https://github.com/YJSoooooo/dsh-chrome) ★1 · `dsh-chrome` — Chrome profile bridge for DeepSeek Harness: control an existing signed-in Chrome profile through chrome_repl.
- [khiqwq/dsh-system-proxy](https://github.com/khiqwq/dsh-system-proxy) ★1 · `dsh-system-proxy` — DSH host plugin - smart outbound HTTP(S) routing: named proxies (http/https/socks4/4a/5/5h), per-host/provider/plugin rules, direct-first fallback with health memory (global fetch + node http/https)
- [BrambleXu/dsh-prompt-profile](https://github.com/BrambleXu/dsh-prompt-profile) ★1 · `dsh-prompt-profile` — Reusable Markdown prompt profiles for DeepSeek Harness with per-turn model selection, argument substitution, and state restoration. DeepSeek Harness 可复用 Markdown Prompt Profile，支持单轮模型选择、参数替换和状态恢复。
- [ben7am1n/dsh-security-scan](https://github.com/ben7am1n/dsh-security-scan) ★1 · `dsh-security-scan` — Secret & dangerous-pattern scanner for DeepSeek Harness — a security_scan tool that finds leaked API keys, tokens, private keys and credential files, with full redaction.
- [PangYiMing/dsh-screenshot-diff](https://github.com/PangYiMing/dsh-screenshot-diff) ★1 · `dsh-screenshot-diff` — DSH plugin: pixel-diff two screenshots into diff.png + triptych (pixelmatch) — 像素对比工具
- [omdsh-dev/omdsh-runtime](https://github.com/omdsh-dev/omdsh-runtime) ★1 · `@omdsh/runtime` — Lightweight OMDSH Runtime for official Profile composition, candidate generations, recovery, and Workshop integration
- [zimai233/dsh-figma-to-lottie](https://github.com/zimai233/dsh-figma-to-lottie) ★1 · `dsh-figma-to-lottie` — Figma/SVG to Lottie animation compiler for DeepSeek Harness. Turn SVG paths and keyframe data into self-contained .lottie.json files.
- [zhouzhencheng07/dsh-tavily-search](https://github.com/zhouzhencheng07/dsh-tavily-search) ★1 · `dsh-tavily-search` — Free keyless Tavily web search tool for DeepSeek Harness (dsh)
- [RealAlexandreAI/dsh-all-search](https://github.com/RealAlexandreAI/dsh-all-search) ★1 · `dsh-all-search` — dsh search: AnySearch web search provider for DeepSeek Harness (ctx.web)
- [pinch-eng/dsh-audio-dub](https://github.com/pinch-eng/dsh-audio-dub) ★1 · `dsh-audio-dub` — Dub video and audio into 10 languages with voice cloning, from a DeepSeek Harness agent | DSH 视频/音频配音插件
- [bitterSmilezzz/dsh-model-selector](https://github.com/bitterSmilezzz/dsh-model-selector) ★1 · `dsh-model-selector` — DeepSeek Harness web plugin: provider-group collapse + name search for the conversation model picker.
- [Wine-Red/dsh-prompt-stash](https://github.com/Wine-Red/dsh-prompt-stash) ★1 · `dsh-prompt-stash` — Local, per-session prompt stash for DeepSeek Harness Web | 本地、分对话的提示词输入暂存工具。写了一半的长提示词，临时需要先问一个短问题？ 同时准备多个方案，但尚未决定发哪一个？将未完成的想法放入草稿架中，准备好后再继续完成
- [tanf1ng/dsh-tool-hackernews](https://github.com/tanf1ng/dsh-tool-hackernews) ★1 · `dsh-tool-hackernews` — Hacker News tool suite (hn_top_stories, hn_search, hn_item) for DeepSeek Harness agents
- [Dino6021/dsh-usage-cost](https://github.com/Dino6021/dsh-usage-cost) ★1 · `dsh-usage-cost` — DSH plugin: per-step timestamped DeepSeek API usage timeline + peak/off-peak cost readout. Official bundle; install via: dsh plugin --profile web add github:Dino6021/dsh-usage-cost#main
- [CrazyShout/dsh-ssh-remote](https://github.com/CrazyShout/dsh-ssh-remote) ★1 · `dsh-ssh-remote` — SSH remote workspaces for DeepSeek Harness: browse/read/write remote files, run remote commands, with connection status dots.
- [vibeinging/dsh-tool-search](https://github.com/vibeinging/dsh-tool-search) ★1 · `@deepseek-ai/dsh-tool-search` — Per-agent on-demand tool discovery and progressive schema disclosure for DeepSeek Harness
- [YYTbit/dsh-plugin-rag](https://github.com/YYTbit/dsh-plugin-rag) ★1 · `dsh-plugin-rag` — Local knowledge base RAG for DeepSeek Harness
- [TheYoungChen/dsh-plugin-market](https://github.com/TheYoungChen/dsh-plugin-market) ★1 · `dsh-plugin-market` — DeepSeek Harness plugin market - browse, search & install dsh-plugin topic plugins (dsh 插件市场：浏览/搜索/安装插件)
- [AnacondaKC/dsh-custom-css](https://github.com/AnacondaKC/dsh-custom-css) ★1 · `dsh-custom-css` — DSH WebUI 自定义 CSS 插件：共享样式、冲突保护与本地文件导入
- [Moeblack/dsh-payload-capture](https://github.com/Moeblack/dsh-payload-capture) ★1 · `dsh-payload-capture` — DSH 插件：捕捉每次上行模型 API payload，JSON 落盘
- [Jesse-njx/dsh-skillport](https://github.com/Jesse-njx/dsh-skillport) ★1 · `@dsh-skillport/bundle` — Every skill you already have — Claude Code, Codex, Cursor, Gemini CLI — works in DSH: Agent Skills SKILL.md discovery, Tier-2 conversions, find_skill search, and a skills doctor
- [PerryLink/dsh-checkpoint-rewind](https://github.com/PerryLink/dsh-checkpoint-rewind) ★1 · `dsh-checkpoint-rewind` — Claude Code /rewind for DeepSeek Harness — git-first workspace snapshots before every mutation, turn-boundary session forks, one-shot /rewind restore. A dsh-plugin capability seam.
- [Moximxxx/dsh-find-skill](https://github.com/Moximxxx/dsh-find-skill) ★1 · `dsh-find-skill` — dsh plugin bridging the vercel-labs/skills ecosystem: LLM-driven skill search, install, and lifecycle for temp/project/global scopes.
- [songqikong/dash](https://github.com/songqikong/dash) ★1 · `dash-tui` — DASH — Deepseek Agentic Service Harness
- [TecFancy/dsh-deeptutor](https://github.com/TecFancy/dsh-deeptutor) ★1 · `dsh-deeptutor` — DeepTutor bridge bundle for DeepSeek Harness (dsh): learning capabilities, knowledge bases & note archiving. | DeepTutor 桥接插件(bundle),为 DeepSeek Harness 提供学习能力、知识库与笔记归档工具。
- [why913/dshx](https://github.com/why913/dshx) ★1 · `@why913/dshx` — The missing companion CLI for DeepSeek Harness (dsh): manage MCP servers with dry-run checks, migrate from Claude Code / Codex in one command | dsh 的 MCP 管理与迁移工具
- [gordonlu/dsh-context-lens](https://github.com/gordonlu/dsh-context-lens) ★1 · `dsh-context-lens` — Request Context Profiler for DeepSeek Harness — see what changed between model requests, and how cache reuse changed with it.
- [bill9109/dsh-101](https://github.com/bill9109/dsh-101) ★1 · `@dsh-external/dsh-101` — DSH 文档阅读模式
- [PangYiMing/dsh-browser-control](https://github.com/PangYiMing/dsh-browser-control) ★1 · `dsh-browser-control` — DSH plugin for controlling browsers (CDP/Playwright) — DeepSeek Harness 操控浏览器插件
- [longyu065/dsh-session-index](https://github.com/longyu065/dsh-session-index) ★1 · `dsh-session-index` — 会话全文索引插件：监听 session/event 构建跨会话索引，提供 session_search / session_index_stats 工具，优先使用框架自带 ctx.sessionQuery (SQLite FTS5)
- [BiBoyang/dsh-eval-harness](https://github.com/BiBoyang/dsh-eval-harness) ★1 · `dsh-eval-harness` — DSH 插件评测工具：YAML 用例驱动真实 agent 回归评测 + baseline 对比 PASS/WARN/FAIL 门禁｜Regression eval harness for DeepSeek Harness plugins
- [sala003/dsh-tool-describe-image](https://github.com/sala003/dsh-tool-describe-image) ★0 · `dsh-tool-describe-image` — DSH plugin: describe_image tool + paste-image-to-text browser half, bridging image understanding to text-only models via DashScope qwen-vl
- [Sanqi-normal/dsh-webui-market-plugin](https://github.com/Sanqi-normal/dsh-webui-market-plugin) ★0 · `@sanqi-normal/dsh-webui-market-plugin` — dsh Web GUI 社区插件市场：浏览 awesome-dsh-plugin.com 插件目录，一键安装/卸载到 profile。Community plugin market for the DeepSeek Harness (dsh) web GUI: browse, install and uninstall plugins into a profile.
- [Jesse-njx/dsh-voice](https://github.com/Jesse-njx/dsh-voice) ★0 · `@dsh-voice/bundle` — Voice notes in, spoken answers out — dictate audio that becomes user messages (transcribe), have the agent read replies aloud (speak), and leave walk-away narration on long headless runs. Local-first: plain audio files under ~/.dsh/voice/.
- [lonelymoon87/dsh-code-intel](https://github.com/lonelymoon87/dsh-code-intel) ★0 · `dsh-code-intel` — Symbol-aware code indexing and hybrid search for DeepSeek Harness.
- [jorinyang/dsh-doctor](https://github.com/jorinyang/dsh-doctor) ★0 · `@jorinyang/dsh-doctor` — DeepSeek Harness environment diagnostic tool: dsh_doctor checks env, profile, config, bundles, mount, port, health, and disk
- [hellosky983/dsh-qrcode](https://github.com/hellosky983/dsh-qrcode) ★0 · `dsh-qrcode` — 离线二维码生成器：DeepSeek Harness 插件，纯本地、零网络、零 shell，给模型一个 qrcode 工具
- [zhuiyueya/dsh-voice](https://github.com/zhuiyueya/dsh-voice) ★0 · `dsh-voice` — Voice for DeepSeek Harness（dsh） —  speech-to-text input +  read-aloud TTS for text-only DeepSeek, zero API key.
- [flymysql/dsh-memory](https://github.com/flymysql/dsh-memory) ★0 · `dsh-memory-vault` — Cross-session memory vault for DeepSeek Harness: remember / recall / forget tools, per-turn prompt injection, and a browser management page.
- [kangjinghang/dsh-xueqiu](https://github.com/kangjinghang/dsh-xueqiu) ★0 · `dsh-xueqiu` — 雪球 mini 行情面板 — DeepSeek Harness 免登录 A股/港美股实时行情、K线、分时、热榜、7x24快讯。可拖拽悬浮面板，交易时段智能刷新。
- [PicGo/dsh-plugin](https://github.com/PicGo/dsh-plugin) ★0 · `@picgo/dsh-plugin` — Upload images and files to your image host from DeepSeek Harness, powered by PicGo
- [MicroHEROX/dsh-exa-mcp](https://github.com/MicroHEROX/dsh-exa-mcp) ★0 · `dsh-exa-mcp` — Exa Search MCP for DeepSeek Harness: mounts the remote Exa MCP endpoint (https://mcp.exa.ai/mcp) through the in-box @deepseek-ai/dsh-mcp-client bridge
- [YELEBAI/dsh-plugin-marketplace](https://github.com/YELEBAI/dsh-plugin-marketplace) ★0 · `dsh-plugin-marketplace` — Verified plugin marketplace and autonomous registry for DeepSeek Harness
- [STARDUSTLC666/dsh-dingtalk](https://github.com/STARDUSTLC666/dsh-dingtalk) ★0 · `dsh-dingtalk` — 钉钉群机器人单向通知工具（DeepSeek Harness 插件）：agent 推送 Markdown / 纯文本消息到钉钉群，支持加签安全模式。
- [STARDUSTLC666/dsh-calendar](https://github.com/STARDUSTLC666/dsh-calendar) ★0 · `dsh-calendar` — DSH 日历工具插件：通过 CalDAV 读写日历事件（Google / iCloud / Nextcloud / 自定义）
- [Nwflower/dsh-file-claim](https://github.com/Nwflower/dsh-file-claim) ★0 · `dsh-file-claim` — File claim / protection for concurrent DeepSeek Harness (DSH) sessions working the same workspace: claim/release, heartbeat stale takeover, async pending merge area (git 3-way merge). DSH Host plugin.
- [zimai233/dsh-image-search](https://github.com/zimai233/dsh-image-search) ★0 · `dsh-image-search` — Multi-engine reverse image search aggregator for DeepSeek Harness. Turn one public image URL into Google Lens / Baidu / Yandex / TinEye / SauceNAO / IQDB / Ascii2d search links.

</details>

<a id="notifications"></a>
<details>
<summary><strong>🔔 通知与监控</strong> <sup>15 个插件</sup></summary>

### 通知与监控

- [NanmiCoder/dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) ★155 · `dsh-agent-teams` — AgentTeams plugin for DeepSeek Harness
- [MuziIsabel/dsh-win-notify](https://github.com/MuziIsabel/dsh-win-notify) ★4 · `dsh-win-notify` — DSH plugin: Windows toast notification with sound when an agent task completes
- [congchuanling-dot/DSH-Telegram-Relay](https://github.com/congchuanling-dot/DSH-Telegram-Relay) ★4 · `dsh-telegram-relay` — DSH Relay 让你可以通过 Telegram 远程与 DeepSeek Harness 对话，并接收通知。DSH Relay turns Telegram into a remote conversation and notification channel for DeepSeek Harness.
- [yuxino/dsh-blue-whale-maid](https://github.com/yuxino/dsh-blue-whale-maid) ★2 · `dsh-blue-whale-maid` — dsh web 的桌面宠物插件，本质是一个任务完成提醒器。
- [jelly-000/dsh-balance-monitor](https://github.com/jelly-000/dsh-balance-monitor) ★2 · `dsh-balance-monitor` — DeepSeek 账户余额、剩余比例条与今日花费，显示在 dsh 侧边栏底部 · DeepSeek balance, remaining-ratio bar and today's spend in the dsh sidebar footer.
- [sjscy05/dsh-task-progress-notifier](https://github.com/sjscy05/dsh-task-progress-notifier) ★2 · `dsh-task-progress-notifier` — DeepSeek Harness plugin: track todo_write progress and pop native desktop reminders (bottom-right).
- [yoke233/dsh-tool-monitor](https://github.com/yoke233/dsh-tool-monitor) ★1 · `dsh-tool-monitor` — Monitor existing DeepSeek Harness background jobs without running commands twice
- [lvyuchuiyi/dsh-funpack](https://github.com/lvyuchuiyi/dsh-funpack) ★1 · `dsh-funpack` — ??????????????????????? DeepSeek Harness ??
- [STARDUSTLC666/dsh-slack](https://github.com/STARDUSTLC666/dsh-slack) ★1 · `dsh-slack` — DSH 社区插件：Slack 通知/桥接（v0.2 支持 Socket Mode 双向：收件箱 + 线程回复）
- [BiBoyang/dsh-im-bridge](https://github.com/BiBoyang/dsh-im-bridge) ★1 · `dsh-im-bridge` — DSH 插件：把 DeepSeek Harness 桥接到 IM（v0.1 微信/iLink；钉钉/飞书/Telegram 预留）。turn/approval 推送 + 远程批准/注入，持久去重/收敛分段/合并窗口。
- [ben7am1n/dsh-deepseek-usage](https://github.com/ben7am1n/dsh-deepseek-usage) ★1 · `dsh-deepseek-usage` — DeepSeek balance and token usage tools for DeepSeek Harness
- [Equinox7379/dsh-turn-watchdog](https://github.com/Equinox7379/dsh-turn-watchdog) ★0 · `dsh-turn-watchdog` — Turn watchdog for DSH: detects stuck turns and injects a quiet warning.
- [kiim-wong/dsh-push](https://github.com/kiim-wong/dsh-push) ★0 · `dsh-push` — Push DeepSeek Harness agent lifecycle notifications to configurable channels
- [yeshimei/dsh-sound](https://github.com/yeshimei/dsh-sound) ★0 · `dsh-sound` — Distinct alert sounds for DeepSeek Harness: network error, approval request, question asked, and turn-completion notifications.
- [rizkirmdhnnn/dsh-tool-notify](https://github.com/rizkirmdhnnn/dsh-tool-notify) ★0 · `dsh-tool-notify` — DSH plugin: model-facing notify tool for DeepSeek Harness — send notifications to ntfy or generic webhooks when an agent task finishes.

</details>

<a id="dev-helpers"></a>
<details>
<summary><strong>🧑‍💻 开发辅助</strong> <sup>20 个插件</sup></summary>

### 开发辅助

- [erduotong/dsh-plugin-graph](https://github.com/erduotong/dsh-plugin-graph) ★2 · `dsh-plugin-graph` — 一个Deepseek Harness的插件关系图谱可视化插件
- [shuguang1994/project-blueprint](https://github.com/shuguang1994/project-blueprint) ★2 · `project-blueprint` — Make any project AI-agent-ready in one command. Adaptive tech stack detection (7 languages × 14 frameworks × 61 components), auto-generates AGENTS.md, docs skeleton, CI/CD, and testing infrastructure. 一句话让任何项目具备 AI 开发能力。
- [sunshine-lang/dsh-plugin-template](https://github.com/sunshine-lang/dsh-plugin-template) ★2 · `{{NAME}}` — Ready-to-publish DeepSeek Harness plugin skeleton: bundle format, tool DSL, config, tests, and a scaffold script
- [YYTbit/dsh-plugin-meta-memory](https://github.com/YYTbit/dsh-plugin-meta-memory) ★1 · `dsh-plugin-meta-memory` — Structured long-term memory system for DeepSeek Harness
- [unnnnoooo/dsh-cue-plugin](https://github.com/unnnnoooo/dsh-cue-plugin) ★1 · `dsh-cue-plugin` — DeepSeek Harness 的跨会话引用(cue)插件
- [cking000bigdemon/dsh-toolbelt](https://github.com/cking000bigdemon/dsh-toolbelt) ★1 · `dsh-toolbelt` — Eight DeepSeek Harness plugins: persona, language guard, per-request vision fallback, python/windows write guards, cross-agent memory, image generation, and skill shell injection.
- [skitse/dsh-dev-actions](https://github.com/skitse/dsh-dev-actions) ★1 · `dsh-dev-actions` — AI turns repeated dev commands, prompts, and habits into one-click DeepSeek Harness actions.
- [ben7am1n/dsh-lens-lite](https://github.com/ben7am1n/dsh-lens-lite) ★1 · `dsh-lens-lite` — Post-edit diagnostics for DeepSeek Harness
- [Bleed00/dsh-claude-mem](https://github.com/Bleed00/dsh-claude-mem) ★1 · `@bleed00/dsh-claude-mem` — DeepSeek Harness plugin integrating claude-mem (memory for dsh)
- [PerryLink/dsh-memento](https://github.com/PerryLink/dsh-memento) ★1 · `dsh-memento` — Bounded, layered, approval-gated, auditable cross-session memory for DeepSeek Harness (capability seam: ctx.memory + SQLite provider + memory tool + frozen snapshot injection)
- [Isekai-Mfu/dsh-mimo-vision-hint](https://github.com/Isekai-Mfu/dsh-mimo-vision-hint) ★1 · `dsh-mimo-vision-hint` — DSH plugin: dispatch image-recognition tasks to an opencode-go mimo-v2.5 subagent via system-prompt injection
- [suimi8/dsh-test-runner](https://github.com/suimi8/dsh-test-runner) ★1 · `dsh-test-runner` — DSH plugin: structured test runner tool (test_run) — auto-detect vitest/jest/pytest/node:test, run tests, parse failure summaries for the model.
- [PerryLink/dsh-doublecheck](https://github.com/PerryLink/dsh-doublecheck) ★1 · `dsh-doublecheck` — Double-check before you ship: grill the requirements, test the implementation, prove the delivery. An engineering-discipline bundle for DeepSeek Harness.
- [PerryLink/dsh-lsp-actions](https://github.com/PerryLink/dsh-lsp-actions) ★1 · `dsh-lsp-actions` — LSP action surface for DeepSeek Harness: lsp_diagnostics, lsp_format, and lsp_completion tools over language servers
- [PangYiMing/dsh-bisect-debug](https://github.com/PangYiMing/dsh-bisect-debug) ★1 · `dsh-bisect-debug` — DSH plugin: bisect bugs (code / boundary / commit) — 二分法定位 bug 根因
- [a179-sanae/dsh-code-check](https://github.com/a179-sanae/dsh-code-check) ★1 · `@a179-sanae/dsh-code-check` — Auto type-check and lint diagnostics for DeepSeek Harness: after the model edits code, tsc runs in the background and a code_check tool reports what broke
- [Alexis-fish/dsh-projects](https://github.com/Alexis-fish/dsh-projects) ★0 · `dsh-projects` — Codex-style projects for DeepSeek Harness
- [cyanseek/dsh-tool-chaos](https://github.com/cyanseek/dsh-tool-chaos) ★0 · `dsh-tool-chaos` — Deterministic fault injection and autonomous resilience tests for DeepSeek Harness tools
- [ICCuse/dsh-pain-point-check](https://github.com/ICCuse/dsh-pain-point-check) ★0 · `dsh-pain-point-check` — Enforced pain-point-check guard plugin for DeepSeek Harness: after two non-converged experiments it injects the three questions, denies non-investigative tool calls until answered, and blocks same-direction retries. dsh-plugin
- [NexusAgentX/dsh-lens](https://github.com/NexusAgentX/dsh-lens) ★0 · `dsh-lens` — Real-time code feedback for DeepSeek Harness — LSP, linters, formatters, structural analysis via a host-native adapter around the pi-lens engine.

</details>

<a id="learning"></a>
<details>
<summary><strong>🎓 学习与教育</strong> <sup>1 个插件</sup></summary>

### 学习与教育

- [cendaifeng/dsh-learn-everything](https://github.com/cendaifeng/dsh-learn-everything) ★3 · `dsh-learn-everything` — Feynman learning-mode plugin for DeepSeek Harness: /learn on|off, structured lesson cards, rich HTML teaching.

</details>

<a id="misc"></a>
<details>
<summary><strong>🧩 其他</strong> <sup>221 个插件</sup></summary>

### 其他

- [liustack/modlens](https://github.com/liustack/modlens) ★884 · `@liustack/modlens` — The first vision plugin for DeepSeek Harness, and the vision bridge for every text-only coding agent. Paste an image, get structured JSON evidence (OCR, layout, semantics).
- [vlln/whale-girl](https://github.com/vlln/whale-girl) ★65 · `whale-girl` — DSH Web GUI 桌面宠物插件（QQ 宠物形态）：右下角悬浮、可拖拽/投喂/玩耍的积累型伙伴。官方 repository-plugin（.dsh-plugin 格式），config.yaml 安装：github:dsh-external/whale-girl#<ref>&path:/.dsh-plugin
- [Jayden-X-L/forkprobe](https://github.com/Jayden-X-L/forkprobe) ★63 · `forkprobe-dsh` — Compare multiple skills on the same task and pick the winner.
- [omdsh-dev/dsh-open-in-vscode](https://github.com/omdsh-dev/dsh-open-in-vscode) ★35 · `dsh-open-in-vscode` — Open DeepSeek Harness workspace directories in VS Code directly from the web GUI.
- [Anionex/dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind) ★26 · `@dsh-external/turn-rewind` — deepseek harness对话和代码状态回退插件 | DSH — rewind conversation and workspace state, powered by a persistent Change Ledger
- [forrestchang/dsh-multica-runtime](https://github.com/forrestchang/dsh-multica-runtime) ★22 · `@multica-ai/dsh-runtime` — Support dsh runtime on Multica.
- [Chinesezjc/dsh-interconnect](https://github.com/Chinesezjc/dsh-interconnect) ★20 · `dsh-interconnect` — Cross-instance message/event handoff plugins for DSH (interconnect service + tools)
- [Moeblack/dsh-message-edit](https://github.com/Moeblack/dsh-message-edit) ★14 · `dsh-message-edit` — DSH plugin: branch-based message editing, reroll, retry, version timeline
- [Anionex/dsh-computer-use](https://github.com/Anionex/dsh-computer-use) ★14 · `@dsh-external/dsh-computer-use` — 为 DeepSeek Harness 提供电脑控制插件：新鲜 Accessibility 观测、过期状态拒绝、作用域权限与安全输入（目前支持macos）｜Accessibility-first macOS Computer Use bundle for DSH with fresh observations, stale-state rejection, scoped permissions, and safe input.
- [hellodigua/dsh-share](https://github.com/hellodigua/dsh-share) ★12 · `@dsh-external/dsh-share` — dsh对话分享插件，一键分享你的对话
- [bobleer/dsh-acp-for-bitfun](https://github.com/bobleer/dsh-acp-for-bitfun) ★9 · `dsh-acp-for-bitfun` — BitFun 与 DSH ACP 交互对接 插件
- [william-jin-cmu/dsh-stickers](https://github.com/william-jin-cmu/dsh-stickers) ★8 · `@dsh-external/dsh-stickers` — DSH WebUI sticker plugin for bidirectional user and agent reactions
- [AnacondaKC/dsh-stock-market](https://github.com/AnacondaKC/dsh-stock-market) ★7 · `dsh-stock-market` — 有效解决了写代码的时候账户不能同时亏钱的BUG
- [springbrand-lab/dsh-oauth-mcp-client](https://github.com/springbrand-lab/dsh-oauth-mcp-client) ★6 · `@dsh-external/dsh-oauth-mcp-client` — OAuth 2.1 Streamable HTTP MCP client plugin for DeepSeek Harness.
- [keleus/deepseek-pet](https://github.com/keleus/deepseek-pet) ★5 · `deepseek-pet` — 在你的deepseek-harness上养一只吃白饭的大蓝鲸
- [Ghost011118/dsh-balance-meter](https://github.com/Ghost011118/dsh-balance-meter) ★5 · `dsh-balance-meter` — DeepSeek account balance and session cost readout for the DeepSeek Harness Web GUI
- [hyqhyq3/dsh-mcp-manager](https://github.com/hyqhyq3/dsh-mcp-manager) ★5 · `dsh-mcp-manager` — MCP server manager plugin for DeepSeek Harness: Settings → MCP page, OAuth (PKCE + dynamic client registration) or static-token auth, tools registered as mcp__<name>__*
- [bugmaker2/dsh-plugin-template](https://github.com/bugmaker2/dsh-plugin-template) ★5 · `dsh-plugin-template` — Template for deepseek-harness plugin development.
- [knqiufan/powercontext-dsh](https://github.com/knqiufan/powercontext-dsh) ★4 · `powercontext-dsh` — DeepSeek Harness plugin that connects to a PowerContext Server over HTTP for recall, memory, handoff, experience, and skills.
- [SnowCrescenter-tech/dsh-milestone](https://github.com/SnowCrescenter-tech/dsh-milestone) ★4 · `dsh-milestone` — Git-style milestone timeline for DeepSeek Harness - hover for metadata, click to jump to any message. 会话里程碑导航条：像 Git 提交图一眼定位每条提问，悬停看时间/轮次/耗时/TTFT，点击即跳转。
- [Degurechaff57/dsh-openapi](https://github.com/Degurechaff57/dsh-openapi) ★4 · `dsh-openapi` — Safe OpenAPI 3.x discovery and API calling tools for DeepSeek Harness
- [sliverp/DeepSeek-harness-qqbot](https://github.com/sliverp/DeepSeek-harness-qqbot) ★4 · `deepseek-harness-qqbot` — QQ Bot text and image channel plugin for DeepSeek Harness
- [nowledge-co/nowledge-mem-deepseek-harness](https://github.com/nowledge-co/nowledge-mem-deepseek-harness) ★4 · `nowledge-mem-deepseek-harness` — Nowledge Mem community plugin bundle for DeepSeek Harness
- [yanglongyun/dsh-ramify](https://github.com/yanglongyun/dsh-ramify) ★4 · `@ramify/dsh-ramify` — Ramify 是 DeepSeek Harness 的创意分支画布插件，用树状工作区生成、对比和迭代多个可交互方案。
- [happyren/dsh-agent-messaging](https://github.com/happyren/dsh-agent-messaging) ★4 · `dsh-agent-messaging` — Cross-session agent-to-agent messaging for DeepSeek Harness — address another session by name and deliver a message into its inbox.
- [LiangYin233/dsh-model-config-sync](https://github.com/LiangYin233/dsh-model-config-sync) ★3 · `dsh-model-config-sync` — DSH 高级模型配置器：为 DeepSeek Harness 提供将 pi-ai 预设模型的上下文、输出上限、推理挡位一键应用到自定义提供商的能力。
- [HuanLinOTO/dsh-plugin-d399](https://github.com/HuanLinOTO/dsh-plugin-d399) ★3 · `@huanlin/dsh-plugin-d399` — 模型生成时右下角弹出小游戏菜单（Wordle/消消乐/192 款参数化小游戏，可拓展注册表） | Pops up a mini-game menu while the model generates (Wordle/Match-3/192 parametric mini-games, extensible registry)
- [YYTbit/dsh-plugin-cost-tracker](https://github.com/YYTbit/dsh-plugin-cost-tracker) ★3 · `dsh-plugin-cost-tracker` — Token cost tracker for DeepSeek Harness
- [openma-ai/deepseek-harness-acp](https://github.com/openma-ai/deepseek-harness-acp) ★3 · `@openma/deepseek-harness-acp` — ACP server implementation for DeepSeek harness
- [HuanLinOTO/dsh-plugin-ya-workspace-sidebar](https://github.com/HuanLinOTO/dsh-plugin-ya-workspace-sidebar) ★3 · `@huanlin/dsh-plugin-ya-workspace-sidebar` — DSH Web 工作区侧栏替代，顶部全局最近会话 + Workspace→Session 二级菜单 + 面包屑 | DSH Web workspace sidebar replacement: top global recent sessions + Workspace→Session two-level menu + breadcrumbs
- [wingoo/codex-plugin-dsh](https://github.com/wingoo/codex-plugin-dsh) ★3 · `codex-plugin-dsh` — Use local Codex App Server as a model provider in DeepSeek Harness
- [omdsh-dev/dsh-hub](https://github.com/omdsh-dev/dsh-hub) ★3 · `@omdsh/dsh-hub` — OMDSH community extension hub built on official DeepSeek Harness contracts
- [imetn/dsh-lark-bridge](https://github.com/imetn/dsh-lark-bridge) ★3 · `dsh-lark-bridge` — Bidirectional Lark/Feishu controller for DeepSeek Harness
- [Moeblack/deepseek-manners](https://github.com/Moeblack/deepseek-manners) ★3 · `deepseek-manners` — DSH 插件：给每次消息后注入感谢语（deepseek-manners）
- [KitDoesIt/dsh-compaction-instant](https://github.com/KitDoesIt/dsh-compaction-instant) ★3 · `dsh-compaction-instant` — LLM-free lossless* compaction engine for DeepSeek Harness
- [ZeroHackz/OpenFlowFrames](https://github.com/ZeroHackz/OpenFlowFrames) ★3 · `@zerohackz/dsh-openflowframes` — DeepSeek Harness plugin exposing OpenFlowFrames video frame interpolation (RIFE) as agent tools
- [fakechris/dsh-track](https://github.com/fakechris/dsh-track) ★3 · `@fakechris/dsh-track` — DSH Track Bridge 插件：嵌入式任务管理引擎——决策点协议、念头捕获墙、Linear 形 issue 存储（bundle），AI 与人之间的任务轨道
- [sliverp/DeepSeek-harness-wecom](https://github.com/sliverp/DeepSeek-harness-wecom) ★3 · `deepseek-harness-wecom` — WeCom AI Bot text and image bridge for DeepSeek Harness
- [codeAnqiang-ma/dsh-superpowers](https://github.com/codeAnqiang-ma/dsh-superpowers) ★2 · `dsh-superpowers` — Superpowers (obra/superpowers) as a DeepSeek Harness plugin: the methodology skills plus their session bootstrap
- [syy-shark/dsh-music-plugin](https://github.com/syy-shark/dsh-music-plugin) ★2 · `dsh-music-plugin` — DeepSeek Harness music plugin (dsh-plugin)
- [YYTbit/dsh-plugin-opencode-bridge](https://github.com/YYTbit/dsh-plugin-opencode-bridge) ★2 · `dsh-plugin-opencode-bridge` — Bridge opencode skills and config into DeepSeek Harness
- [yoke233/dsh-openai-codex-auth](https://github.com/yoke233/dsh-openai-codex-auth) ★2 · `dsh-openai-codex-auth` — OpenAI Codex OAuth login and usage card plugin for DeepSeek Harness
- [PerryLink/dsh-claude-move](https://github.com/PerryLink/dsh-claude-move) ★2 · `dsh-claude-move` — DeepSeek Harness (dsh) plugin: migrate Claude Code sessions, memory, skills and CLAUDE.md into DSH with seamless resume (claude_scan / import_claude / resume-claude / web panel)
- [securstack/securstack-dsh-plugin](https://github.com/securstack/securstack-dsh-plugin) ★2 · `@securstack/dsh-plugin` — SecurStack adapter for DeepSeek Harness: run repository security scans, policy gates, doctor diagnostics, and JSON CLI results from safe AI-agent tools.
- [omdsh-dev/dsh-longbridge](https://github.com/omdsh-dev/dsh-longbridge) ★2 · `dsh-longbridge` — DSH Longbridge (长桥) HK/US market plugin: quotes, account, positions and order tools plus a settings surface
- [sunshine-lang/dsh-weather](https://github.com/sunshine-lang/dsh-weather) ★2 · `dsh-weather` — Weather tool for DeepSeek Harness: current conditions and multi-day forecasts via Open-Meteo (free, no API key)
- [YYTbit/dsh-plugin-claude-bridge](https://github.com/YYTbit/dsh-plugin-claude-bridge) ★2 · `dsh-plugin-claude-bridge` — Bridge Claude Code memory, skills, and config into DeepSeek Harness
- [pinkllo/dsh-reasoning-translator](https://github.com/pinkllo/dsh-reasoning-translator) ★2 · `dsh-reasoning-translator` — DeepSeek Harness plugin: make the model write its chain-of-thought in your language
- [Drifter-yh/dsh-tool-policy](https://github.com/Drifter-yh/dsh-tool-policy) ★2 · `dsh-tool-policy` — Declarative deny-by-default tool policy plugin for DeepSeek Harness
- [bobleer/deepseek-harness-plugin-mcp](https://github.com/bobleer/deepseek-harness-plugin-mcp) ★2 · `deepseek-harness-plugin-mcp` — MCP server that lets any agent discover, install, and run DeepSeek Harness plugins (topic: dsh-plugin).
- [HuanLinOTO/dsh-plugin-auto-blame](https://github.com/HuanLinOTO/dsh-plugin-auto-blame) ★2 · `@huanlin/dsh-plugin-auto-blame` — 模型回合结束后用 LLM 生成 3 条批判性跟进建议，点击即发送 | After a model turn, an LLM generates 3 critical follow-up suggestions shown as click-to-send chips
- [PivotStackIntelligence/dsh-github](https://github.com/PivotStackIntelligence/dsh-github) ★2 · `dsh-github` — Source Control and GitHub panel for DeepSeek Harness.
- [vibeinging/dsh-agent-budget](https://github.com/vibeinging/dsh-agent-budget) ★2 · `@deepseek-ai/dsh-agent-budget` — Native Harness agent-tree token budget plugin
- [omdsh-dev/dsh-voice-funasr](https://github.com/omdsh-dev/dsh-voice-funasr) ★2 · `dsh-voice-funasr` — DSH web plugin: local offline FunASR voice input (paraformer int8 onnx sidecar, Web Speech fallback, LLM polish).
- [oil-oil/dsh-vision](https://github.com/oil-oil/dsh-vision) ★2 · `@oil-oil/dsh-vision` — Near-native image understanding for DeepSeek Harness
- [PangYiMing/dsh-mobile-control](https://github.com/PangYiMing/dsh-mobile-control) ★2 · `dsh-mobile-control` — DSH plugin for controlling mobile devices (ADB/iOS) — DeepSeek Harness 操控手机插件
- [030611/qiushi-dsh-evidence-audit](https://github.com/030611/qiushi-dsh-evidence-audit) ★2 · `qiushi-dsh-evidence-audit` — Observe-only hash-chained evidence receipts for DeepSeek Harness
- [Han-1413141/dsh-cost-meter](https://github.com/Han-1413141/dsh-cost-meter) ★2 · `dsh-cost-meter` — DeepSeek Harness 会话费用统计插件:本会话费用、当日费用、历史记录与官方价格同步
- [Han-1413141/dsh-sticky-disclosure](https://github.com/Han-1413141/dsh-sticky-disclosure) ★2 · `dsh-sticky-disclosure` — DSH Web client plugin: collapse every expanded section (Think / tool cards) in the conversation in one click, with a customizable hotkey.
- [sakikoTGW/pack-agent](https://github.com/sakikoTGW/pack-agent) ★2 · `@sakikotgw/pack-agent` — Agent Modpack — 像装 MC 整合包一样，装你的 agent。
- [zibo2025/dsh-orchestrator](https://github.com/zibo2025/dsh-orchestrator) ★2 · `dsh-orchestrator` — 【编排模式】为 DeepSeek Harness 提供多智能体编排模式：主智能体分解分派、worker 全网格互通，支持逐 worker 指定模型与思考强度
- [hccccc01333/dsh-report-html](https://github.com/hccccc01333/dsh-report-html) ★2 · `dsh-report-html` — Generate self-contained interactive HTML reports from Markdown, tables, charts, China province maps, flowcharts, math, and drill-down tables — a DeepSeek Harness (dsh) plugin
- [LingLambda/dsh-undo](https://github.com/LingLambda/dsh-undo) ★2 · `dsh-undo` — Context undo/redo plugin for DeepSeek Harness (dsh): roll the model context back to the last completed step and restore it again.
- [XiLuovo/dsh-session-timeline](https://github.com/XiLuovo/dsh-session-timeline) ★2 · `dsh-session-timeline` — DeepSeek Harness 会话时间轴插件：横短横线波浪、当前消息定位、点击跳转、圆角预览 tooltip、可收起/展开
- [omdsh-dev/dsh-daily-fortune](https://github.com/omdsh-dev/dsh-daily-fortune) ★2 · `@deepseek-ai/dsh-daily-fortune` — DSH daily fortune plugin with Guan Yin lots, Tarot spreads, and daily quotes
- [omdsh-dev/dsh-fun-typewriter](https://github.com/omdsh-dev/dsh-fun-typewriter) ★2 · `@deepseek-ai/dsh-fun-typewriter` — DSH Typewriter: WebAudio typing ambience with a plugin-owned settings API and zero audio assets
- [omdsh-dev/dsh-paddle-ocr](https://github.com/omdsh-dev/dsh-paddle-ocr) ★2 · `dsh-paddle-ocr` — DSH PaddleOCR (百度 PaddleOCR-VL 文档布局解析) plugin: OCR tools plus a settings card and task panel
- [YYTbit/dsh-plugin-codex-bridge](https://github.com/YYTbit/dsh-plugin-codex-bridge) ★2 · `dsh-plugin-codex-bridge` — Bridge codex skills and config into DeepSeek Harness
- [morlay/session-persistence-rdb](https://github.com/morlay/session-persistence-rdb) ★2 · `@morlay/session-persistence-rdb` — session 关系型数据库持久化
- [omdsh-dev/sandbox-micro](https://github.com/omdsh-dev/sandbox-micro) ★2 · `@deepseek-ai/dsh-sandbox-microsandbox` — microsandbox支持
- [MirDie/dsh-xai](https://github.com/MirDie/dsh-xai) ★2 · `dsh-xai` — xAI Grok SuperGrok / X Premium OAuth for DeepSeek Harness
- [YYTbit/dsh-plugin-pi-bridge](https://github.com/YYTbit/dsh-plugin-pi-bridge) ★2 · `dsh-plugin-pi-bridge` — Bridge pi skills and config into DeepSeek Harness
- [omdsh-dev/dsh-pet-corner](https://github.com/omdsh-dev/dsh-pet-corner) ★2 · `@deepseek-ai/dsh-pet-corner` — DSH Pet Corner: a floating pet, keyless pet-image proxy, favorites, and plugin-owned settings API
- [vibeinging/dsh-trace](https://github.com/vibeinging/dsh-trace) ★2 · `@deepseek-ai/dsh-trace` — DeepSeek Harness telemetry backend that exports turns, model steps, and tool calls to yiTrace over HTTP.
- [JasonJin2006/dsh-sound-effects-plugin](https://github.com/JasonJin2006/dsh-sound-effects-plugin) ★2 · `dsh-sound-effects-plugin` — Reasonix-style sound effects for DeepSeek Harness: generative pentatonic ambient music while the agent works, E6-G6-C7 success chime, A6-E6 attention chime (Web Audio, zero assets).
- [hashdiana/dsh-token-usage](https://github.com/hashdiana/dsh-token-usage) ★2 · `dsh-token-usage` — 更清晰美观的会话 Token 用量条：上下文占用、输入/输出/缓存分解、吞吐与首字延迟，取代默认的纯文本 stats 行
- [omdsh-dev/sandbox-nono](https://github.com/omdsh-dev/sandbox-nono) ★2 · `@deepseek-ai/dsh-sandbox-nono` — nono沙盒支持
- [omdsh-dev/dsh-ernie-image](https://github.com/omdsh-dev/dsh-ernie-image) ★2 · `dsh-ernie-image` — DSH ERNIE-Image-Turbo text-to-image plugin: generate images via Baidu AI Studio, save them as durable session attachments, plus a settings card and a generation gallery panel
- [sjscy05/matlab-modelsim-vivado-plugin](https://github.com/sjscy05/matlab-modelsim-vivado-plugin) ★2 · `mmv-dspic` — DeepSeek Harness plugin: MATLAB + ModelSim + Vivado full-flow tools for digital communication IC design tasks (mmv-dspic)
- [omdsh-dev/session-teleport](https://github.com/omdsh-dev/session-teleport) ★1 · `@mattheliu/session-teleport` — PostgreSQL-backed single-writer session handoff service for DeepSeek Harness
- [zimixvx/dsh-archive-manager](https://github.com/zimixvx/dsh-archive-manager) ★1 · `dsh-archive-manager` — A minimal DeepSeek Harness Web plugin that lists archived sessions and permanently deletes an archived session directory after explicit confirmation.
- [030611/dsh-verification-receipt](https://github.com/030611/dsh-verification-receipt) ★1 · `dsh-verification-receipt` — Privacy-minimal heuristic per-turn verification summaries for DeepSeek Harness
- [ben7am1n/dsh-webhook-bridge](https://github.com/ben7am1n/dsh-webhook-bridge) ★1 · `dsh-webhook-bridge` — Generic webhook receiver for DeepSeek Harness — POST to a local endpoint to wake a dsh agent.
- [Elohia/dsh-plugin-mm-vision](https://github.com/Elohia/dsh-plugin-mm-vision) ★1 · `dsh-plugin-mm-vision` — mm-vision (通感编码器) for DeepSeek Harness — give any text-only LLM the ability to see images via structured spatial text encoding. Registers the mm_vision tool.
- [EvilIrving/dsh-proof](https://github.com/EvilIrving/dsh-proof) ★1 · `dsh-proof` — Independent read-only acceptance layer for DeepSeek Harness: spawns a read-only verifier before each top-level turn closes and steers gaps back into the agent.
- [aryswisnu/dsh-eval-regression](https://github.com/aryswisnu/dsh-eval-regression) ★1 · `dsh-eval-regression` — Deterministic, CI-safe golden-output evaluation for DeepSeek Harness
- [shyboy/dsh-k12-lesson-builder](https://github.com/shyboy/dsh-k12-lesson-builder) ★1 · `dsh-k12-lesson-builder` — DeepSeek Harness plugin for generating synchronized K12 English PPTX and DOCX lesson materials
- [bill9109/dsh-conversation-share](https://github.com/bill9109/dsh-conversation-share) ★1 · `@bill9109/dsh-conversation-share` — 分享任意段落的 DSH 对话
- [tensorlakeai/dsh-tensorlake-sandbox](https://github.com/tensorlakeai/dsh-tensorlake-sandbox) ★1 · `@tensorlake/dsh-sandbox` — A deepseek harness plugin for tensorlake sandbox
- [lin-cheng-lab/dsh-plugin-doctor](https://github.com/lin-cheng-lab/dsh-plugin-doctor) ★1 · `dsh-plugin-doctor` — DSH 插件体检：安装前检查 peer 版本兼容性，防止 rc 不匹配崩溃 🩺
- [omdsh-dev/web-components](https://github.com/omdsh-dev/web-components) ★1 · `@deepseek-ai/dsh-client-web-component` — web-components支持
- [dongsheng123132/dsh-lineage](https://github.com/dongsheng123132/dsh-lineage) ★1 · `dsh-lineage` — Content-addressed data and action lineage evidence for DeepSeek Harness
- [ben7am1n/dsh-memory](https://github.com/ben7am1n/dsh-memory) ★1 · `dsh-memory` — Durable cross-session SQLite memory for DeepSeek Harness
- [ilharp/dsh-tool-approval](https://github.com/ilharp/dsh-tool-approval) ★1 · `dsh-tool-approval` — Manual approval for Deepseek Harness (aka "Manual Mode"/"Ask Mode")
- [baidd1011/dsh-code-impact](https://github.com/baidd1011/dsh-code-impact) ★1 · `dsh-code-impact` — 面向 DeepSeek Harness 的只读 TypeScript/JavaScript 代码变更影响分析插件 Read-only TypeScript/JavaScript change impact analysis plugin for DeepSeek Harness
- [Simon314620/dsh-turn-index](https://github.com/Simon314620/dsh-turn-index) ★1 · `dsh-turn-index` — deepseek harness的侧边栏对话轮次索引插件
- [omdsh-dev/dsh-scout](https://github.com/omdsh-dev/dsh-scout) ★1 · `@deepseek-ai/dsh-tool-scout` — 面向 DeepSeek Harness 的只读环境探测插件，为智能体提供运行环境、软件版本、系统资源、端口、服务、硬件及工作区信息。
- [jihongboo/dsh-apple-mode](https://github.com/jihongboo/dsh-apple-mode) ★1 · `dsh-apple-mode` — Xcode AI integration for DeepSeek Harness: 26 Xcode MCP tools (mcpbridge), Apple platform skills, Xcode Intelligence-style persona. Agent preset + global MCP bundle.
- [PerryLink/dsh-permission-rules](https://github.com/PerryLink/dsh-permission-rules) ★1 · `dsh-permission-rules` — Claude Code-style declarative permission rules for DeepSeek Harness: ordered allow/deny/ask rules with tool-name, argument (glob/regex), and workspace-path matching on the tools/pre-execute waterfall, session-log audit, and HMR reload.
- [EvilIrving/dsh-repro](https://github.com/EvilIrving/dsh-repro) ★1 · `dsh-repro` — Export a minimal, secret-scrubbed, replayable problem bundle for DeepSeek Harness via the /repro command.
- [miaobuao/dsh-document-parser](https://github.com/miaobuao/dsh-document-parser) ★1 · `dsh-document-parser` — A DeepSeek Harness document parsing tool powered by LiteParse
- [DTSFO/dsh-model-modes](https://github.com/DTSFO/dsh-model-modes) ★1 · `dsh-model-modes` — Capability-aware reasoning controls and Fast model routing for DeepSeek Harness
- [omdsh-dev/sandbox-mxc](https://github.com/omdsh-dev/sandbox-mxc) ★1 · `@deepseek-ai/dsh-sandbox-mxc` — 微软跨平台沙盒支持
- [shujiTech/dsh-plugin-wepre](https://github.com/shujiTech/dsh-plugin-wepre) ★1 · `dsh-plugin-wepre` — DeepSeek Harness plugin: publish single-screen content cards to WePre Next from a dsh agent session
- [Opr4Mp3r/deepseek-harness-plugin-from-scratch](https://github.com/Opr4Mp3r/deepseek-harness-plugin-from-scratch) ★1 · `deepseek-harness-plugin-from-scratch` — Code-audited, progressive guide to production-grade DeepSeek Harness plugins
- [quan2005/dsh-plugin-jinji](https://github.com/quan2005/dsh-plugin-jinji) ★1 · `dsh-plugin-jinji` — 把「记忆」带进 DeepSeek Harness：极简文本记忆系统，双轨记忆（流水日志 + 人物/产品实体画像），大模型为核心驱动。无需安装其他软件，无需编译，无第三方依赖。
- [YYTbit/dsh-plugin-auto-docs](https://github.com/YYTbit/dsh-plugin-auto-docs) ★1 · `dsh-plugin-auto-docs` — Auto documentation generation skill for DeepSeek Harness
- [Toukaiteio/dsh-effort-tweak](https://github.com/Toukaiteio/dsh-effort-tweak) ★1 · `dsh-effort-tweak` — A DeepSeek Harness plugin that allows you to change the reasoning effort of custom models in WebUI.
- [Luke-Yong/dsh-plugin-knowledge-graph](https://github.com/Luke-Yong/dsh-plugin-knowledge-graph) ★1 · `dsh-plugin-knowledge-graph` — dsh-plugin-knowledge-graph for Deepseek Harness
- [bitterSmilezzz/dsh-skill-manager](https://github.com/bitterSmilezzz/dsh-skill-manager) ★1 · `dsh-skill-manager` — Skills management page for DeepSeek Harness Web Settings (dsh plugin)
- [yoke233/dsh-pixel-whale](https://github.com/yoke233/dsh-pixel-whale) ★1 · `dsh-pixel-whale` — A lively pixel-whale running-state companion for DeepSeek Harness Web.
- [ben7am1n/dsh-claude-marketplace](https://github.com/ben7am1n/dsh-claude-marketplace) ★1 · `dsh-claude-marketplace` — Claude Code marketplace compatibility for DeepSeek Harness
- [Small-tailqwq/dsh-tps](https://github.com/Small-tailqwq/dsh-tps) ★1 · `@dsh-external/tps` — 只是一个 tps 插件
- [030611/dsh-telemetry-redactor](https://github.com/030611/dsh-telemetry-redactor) ★1 · `dsh-telemetry-redactor` — Fail-closed export-copy redaction for DeepSeek Harness session telemetry
- [Uddoo/dsh-dashboard](https://github.com/Uddoo/dsh-dashboard) ★1 · `dsh-dashboard` — Symphony-compatible Linear issue orchestrator and native operations dashboard for DeepSeek Harness.
- [0xsline/dsh-spotlight](https://github.com/0xsline/dsh-spotlight) ★1 · `@dsh-external/dsh-spotlight` — Keyboard-first command palette for DeepSeek Harness Web
- [Liu-ty/dsh-balance-display](https://github.com/Liu-ty/dsh-balance-display) ★1 · `dsh-balance-display` — DeepSeek API balance overlay for DeepSeek Harness
- [xiaoshihou514/dsh-weixin](https://github.com/xiaoshihou514/dsh-weixin) ★1 · `dsh-weixin` — DeepSeek Harness: Weixin
- [lynkas/dsh-think-flow-flow](https://github.com/lynkas/dsh-think-flow-flow) ★1 · `dsh-think-flow-flow` — DeepSeek Harness client plugin: constant-rate typewriter reveal for assistant output and reasoning, with per-model gating.
- [brittanistrehlowll-oss/dsh-quota-panel](https://github.com/brittanistrehlowll-oss/dsh-quota-panel) ★1 · `dsh-quota-panel` — Provider quota/balance corner panel for the dsh web surface (DeepSeek Harness plugin): server-side credential proxies plus a config-driven page badge.
- [GengDaPeng/dsh-agent-message](https://github.com/GengDaPeng/dsh-agent-message) ★1 · `dsh-agent-message` — 跨会话 Agent 通信插件 for DeepSeek Harness：让同一进程里的不同 Agent 会话互相收发消息。
- [tree201/dsh-capability-inspector](https://github.com/tree201/dsh-capability-inspector) ★1 · `dsh-capability-inspector` — DeepSeek Harness Doctor and DSH runtime diagnostics for tools, models, skills, workspaces, sessions, plugins, and MCP troubleshooting
- [PixLunaLab/dsh-plugin-pixluna](https://github.com/PixLunaLab/dsh-plugin-pixluna) ★1 · `dsh-plugin-pixluna` — dsh-plugin-pixluna | 让 DSH 自己看涩图！
- [ang-XWBWZ/dsh-approval-ai](https://github.com/ang-XWBWZ/dsh-approval-ai) ★1 · `@llangtop/dsh-approval-ai` — AI approval answerer for DeepSeek Harness (DSH) using the unified LLM route with fail-closed policy checks.
- [Alexis-fish/dsh-worktrees](https://github.com/Alexis-fish/dsh-worktrees) ★1 · `dsh-worktrees` — Git worktree isolation for parallel DeepSeek Harness sessions
- [Hu9956/dsh-codex-provider](https://github.com/Hu9956/dsh-codex-provider) ★1 · `dsh-codex-provider` — OpenAI Codex provider for DeepSeek Harness with device-code OAuth, Codex CLI import, token refresh, and a web settings panel.
- [MOLAaaaaaaa/dsh-seismicx](https://github.com/MOLAaaaaaaa/dsh-seismicx) ★1 · `dsh-seismicx` — DeepSeek Harness plugin for the SeismicX earthquake-catalog skill
- [lin-cheng-lab/dsh-deepseek-balance](https://github.com/lin-cheng-lab/dsh-deepseek-balance) ★1 · `dsh-deepseek-balance` — DeepSeek API 余额监视器：DSH 右下角悬浮徽章 + 7天/30天用量费用图表
- [918154429/dsh-codex-import](https://github.com/918154429/dsh-codex-import) ★1 · `dsh-codex-import` — Read-only Codex setup compatibility scanner for DeepSeek Harness
- [tappass/dsh-governance](https://github.com/tappass/dsh-governance) ★1 · `@tappass/dsh-governance` — The authority layer for agentic AI, as a DeepSeek Harness plugin. Governs every tool call against your business rules via TapPass /v1/govern.
- [kerwin2046/dsh-pin-recall](https://github.com/kerwin2046/dsh-pin-recall) ★1 · `dsh-pin-recall` — DeepSeek Harness plugin: pin assistant replies and recall them into the model turn
- [arrow949/dsh-turn-approval](https://github.com/arrow949/dsh-turn-approval) ★1 · `dsh-turn-approval` — Turn-scoped "Allow for this task" approvals for DeepSeek Harness.
- [pandashere/dsh-codex-bridge](https://github.com/pandashere/dsh-codex-bridge) ★1 · `dsh-codex-bridge` — Codex CLI bridge plugin for DeepSeek Harness with host tools and a Web conversation tab.
- [jumpserver-east/jumpserver-dsh](https://github.com/jumpserver-east/jumpserver-dsh) ★1 · `dsh-jumpserver` — DeepSeek Harness plugin: manage JumpServer assets and operate on them through KoKo
- [PangYiMing/dsh-port-guard](https://github.com/PangYiMing/dsh-port-guard) ★1 · `dsh-port-guard` — DSH plugin: triage port conflicts (reuse / switch / precise kill) — 端口占用处置
- [chushixixin/dsh-harness-mcp-server](https://github.com/chushixixin/dsh-harness-mcp-server) ★1 · `@chushixixin/dsh-harness-mcp-server` — Expose DeepSeek Harness agent capabilities as an MCP server (brain=Hermes, arms=Harness)
- [lynx-gt/dsh-subagent-tools](https://github.com/lynx-gt/dsh-subagent-tools) ★1 · `dsh-subagent-tools` — DeepSeek Harness subagent delegation enhancement
- [alooshxl/dsh-session-pins](https://github.com/alooshxl/dsh-session-pins) ★1 · `@dsh-external/dsh-session-pins` — Persistent pinned-session menu for DeepSeek Harness
- [qyw233/dsh-deeplink](https://github.com/qyw233/dsh-deeplink) ★1 · `@dsh-community/dsh-deeplink` — DSH WebUI 深链插件：?session=/?workspace= 直接打开指定项目对话
- [lynx-gt/dsh-subagent-cwd](https://github.com/lynx-gt/dsh-subagent-cwd) ★1 · `dsh-subagent-cwd` — DeepSeek Harness subagent delegation enhancement
- [benzhoupo/dsh-effort-config](https://github.com/benzhoupo/dsh-effort-config) ★1 · `dsh-effort-config` — dsh plugin: configure reasoning-effort levels (wire spellings), route default level and Anthropic token budgets for third-party models from the settings page; selection reuses the native model-picker Effort panel.
- [Moeblack/dsh-skins](https://github.com/Moeblack/dsh-skins) ★1 · `@dsh-external/dsh-web-skins` — Mirror of dsh-external/dsh-skins + feat: harbor (夕港) dusk-harbor skin
- [xiaoshihou514/dsh-vision](https://github.com/xiaoshihou514/dsh-vision) ★1 · `dsh-vision` — DeepSeek Harness: vision
- [PerryLink/dsh-mcp-panel](https://github.com/PerryLink/dsh-mcp-panel) ★1 · `dsh-mcp-panel` — Read-only runtime management panel for the official DeepSeek Harness MCP client: /mcp command + Settings MCP tab with status, tools, errors, reconnect counts, sanitized display and controlled patch suggestions (Apache-2.0, dsh-plugin).
- [blue-a11y/dsh-client-shortcuts](https://github.com/blue-a11y/dsh-client-shortcuts) ★1 · `@blue-a11y/dsh-client-shortcuts` — Global keyboard shortcuts plugin for the DeepSeek Harness web GUI: ctx.shortcuts registry service + mod+l/mod+k/mod+shift+c default bindings
- [huguangyu666/dsh-plugin-session-import](https://github.com/huguangyu666/dsh-plugin-session-import) ★1 · `dsh-plugin-session-import` — DeepSeek Harness plugin: import claude-code / codex / reasonix / zcode sessions
- [YYTbit/dsh-plugin-agent-dashboard](https://github.com/YYTbit/dsh-plugin-agent-dashboard) ★1 · `dsh-plugin-agent-dashboard` — Multi-agent dashboard skill for DeepSeek Harness
- [vibeinging/dsh-turn-navigator](https://github.com/vibeinging/dsh-turn-navigator) ★1 · `@deepseek-ai/dsh-turn-navigator` — Private DSH Web turn navigation plugin
- [ben7am1n/dsh-mcp-proxy](https://github.com/ben7am1n/dsh-mcp-proxy) ★1 · `dsh-mcp-proxy` — Context-cheap lazy MCP access for DeepSeek Harness
- [Acidmoon/DIzzy-DSH](https://github.com/Acidmoon/DIzzy-DSH) ★1 · `dizzy-dsh` — My DSH plugins
- [Spirtxiaoqi7/mindspace-dsh-session-memory](https://github.com/Spirtxiaoqi7/mindspace-dsh-session-memory) ★1 · `mindspace-dsh-session-memory` — Editable, session-isolated personalization memory for DeepSeek Harness
- [PangYiMing/dsh-batch-regression](https://github.com/PangYiMing/dsh-batch-regression) ★1 · `dsh-batch-regression` — DSH plugin: run a command N rounds, judge by median/distribution — 批量回归取统计结论
- [YYTbit/dsh-plugin-context-compressor](https://github.com/YYTbit/dsh-plugin-context-compressor) ★1 · `dsh-plugin-context-compressor` — Context compression skill for DeepSeek Harness
- [agent-plaza/agent-plaza](https://github.com/agent-plaza/agent-plaza) ★1 · `agent-plaza` — Zero-signup public commons for AI agents — HTTP API + Agent Skill (Codex, Cursor, Hermes)
- [kam74515-boop/dsh-everything-oauth](https://github.com/kam74515-boop/dsh-everything-oauth) ★1 · `dsh-everything-oauth` — Import local Codex / Grok / Claude / OpenCode / CC Switch logins into DeepSeek Harness
- [Demogorgon314/dsh-resume-plugin](https://github.com/Demogorgon314/dsh-resume-plugin) ★1 · `dsh-resume-plugin` — 让 DeepSeek Harness 安全读取并继续 Codex 与 Claude Code 的历史会话。
- [suimi8/dsh-cost-ledger](https://github.com/suimi8/dsh-cost-ledger) ★1 · `dsh-cost-ledger` — Cross-session persistent cost ledger for DeepSeek Harness: logs every LLM token usage to SQLite and exposes record/query/budget tools. Built-in DeepSeek pricing, overridable via config.
- [dongsheng123132/dsh-action-parity](https://github.com/dongsheng123132/dsh-action-parity) ★0 · `dsh-action-parity` — Cross-surface action binding and replay parity evidence for DeepSeek Harness
- [bpc-oss/dsh-web-billing](https://github.com/bpc-oss/dsh-web-billing) ★0 · `dsh-web-billing` — RMB/USD token-billing plugin for DeepSeek Harness (dsh web): official-policy auto pricing with peak/off-peak hours, per-message ledger, account balance, locale-driven currency display. 人民币/美元 token 计费插件
- [wuwangmao/dsh-qwen-multimodal](https://github.com/wuwangmao/dsh-qwen-multimodal) ★0 · `dsh-qwen-multimodal` — DSH bundle: Qwen multimodal bridge — vision (qwen3-vl), speech-to-text (qwen3-asr), text-to-image (qwen-image), for DeepSeek Harness
- [cyanseek/dsh-landscape](https://github.com/cyanseek/dsh-landscape) ★0 · `dsh-landscape` — Agent-first DeepSeek Harness plugin intelligence: verify existing plugins, identify missing capabilities, and generate build-ready briefs.
- [sublatesublate-design/dsh-doctor-windows](https://github.com/sublatesublate-design/dsh-doctor-windows) ★0 · `dsh-doctor-windows` — Windows environment diagnostics for DeepSeek Harness
- [linyp/dsh-plugin-langfuse](https://github.com/linyp/dsh-plugin-langfuse) ★0 · `dsh-plugin-langfuse` — Langfuse observability for DeepSeek Harness (dsh): exports agent sessions as OpenTelemetry trace trees (GenAI semconv) to Langfuse's OTLP endpoint
- [fountunt/dsh-session-cleaner](https://github.com/fountunt/dsh-session-cleaner) ★0 · `dsh-session-cleaner` — Delete DeepSeek Harness sessions from the running web runtime: live store detach, workspace records, and on-disk artifacts.
- [winyh/dsh-growth](https://github.com/winyh/dsh-growth) ★0 · `dsh-growth` — Growth acquisition and user growth analysis for DeepSeek Harness: AARRR, retention, MRR, experiments and unit economics.
- [causebefore/dsh-pomodoro](https://github.com/causebefore/dsh-pomodoro) ★0 · `dsh-pomodoro` — DeepSeek Harness Web 番茄钟插件：可配置专注与休息时长，提供侧栏入口和可拖动浮动面板
- [Arnoldkevin/prismrelay-mcp](https://github.com/Arnoldkevin/prismrelay-mcp) ★0 · `prismrelay-mcp` — Vision-first local MCP that gives text-only Agents image understanding through Agnes AI (BYOK).
- [DTSFO/dsh-conversation-rewind](https://github.com/DTSFO/dsh-conversation-rewind) ★0 · `dsh-conversation-rewind` — Append-only conversation rewind and safe message editing for DeepSeek Harness
- [csiroqa/dsh-hotkeys](https://github.com/csiroqa/dsh-hotkeys) ★0 · `@dsh-plugin/hotkeys` — DeepSeek Harness（DSH）全局快捷键插件：会话切换、发送/清空草稿、停止生成、复制与归档，键位可在设置中自定义。Global keyboard shortcuts plugin for DeepSeek Harness.
- [vvlife/dsh-agnes-paseo](https://github.com/vvlife/dsh-agnes-paseo) ★0 · `dsh-agnes-paseo` — DeepSeek Harness (dsh) 插件：接入 Agnes AI 模型网关，并一键把 dsh 注册为 Paseo 的 ACP provider
- [dongsheng123132/dsh-narrative-ledger](https://github.com/dongsheng123132/dsh-narrative-ledger) ★0 · `dsh-narrative-ledger` — Verifiable narrative state, continuity and character-knowledge ledger for DeepSeek Harness
- [Heyflyingpig/long-draft-input](https://github.com/Heyflyingpig/long-draft-input) ★0 · `long-draft-input` — Collapse very long composer drafts into a summary card without changing DSH message submission.
- [zhangzujian/dsh-subprocess-inherit-environment](https://github.com/zhangzujian/dsh-subprocess-inherit-environment) ★0 · `@zhangzujian/dsh-subprocess-inherit-environment` — DSH plugin that forwards the complete Harness environment through ctx.subprocess
- [zhangzujian/dsh-same-mode-sandbox-noop](https://github.com/zhangzujian/dsh-same-mode-sandbox-noop) ★0 · `@zhangzujian/dsh-same-mode-sandbox-noop` — DSH compatibility plugin for redundant same-mode sandbox escalation requests
- [hellosky983/dsh-skillradar](https://github.com/hellosky983/dsh-skillradar) ★0 · `dsh-skillradar` — Skill Radar for DeepSeek Harness (dsh): scan the current session's visible skills, score relevance against the conversation, and recommend which skill to load.
- [dongsheng123132/dsh-benchmark](https://github.com/dongsheng123132/dsh-benchmark) ★0 · `dsh-benchmark` — Reproducible deterministic benchmark evidence for DSH tools and plugins
- [sliverp/DeepSeek-harness-dingtalk](https://github.com/sliverp/DeepSeek-harness-dingtalk) ★0 · `deepseek-harness-dingtalk` — DingTalk Stream text and image channel plugin for DeepSeek Harness
- [dongsheng123132/dsh-release-proof](https://github.com/dongsheng123132/dsh-release-proof) ★0 · `dsh-release-proof` — Reproducible multi-source release evidence for DeepSeek Harness
- [youjiaqi421/dsh-plugin-workspace-rules](https://github.com/youjiaqi421/dsh-plugin-workspace-rules) ★0 · `dsh-plugin-workspace-rules` — Load Cursor, Gemini CLI, and GitHub Copilot workspace instructions into DeepSeek Harness.
- [sliverp/DeepSeek-harness-lark](https://github.com/sliverp/DeepSeek-harness-lark) ★0 · `deepseek-harness-lark` — Feishu and Lark text and image channel plugin for DeepSeek Harness
- [ChuanTianML/dsh-open-with](https://github.com/ChuanTianML/dsh-open-with) ★0 · `dsh-open-with` — Open DeepSeek Harness workspaces in detected or configured local editors
- [tkr520521/dsh-team-runner](https://github.com/tkr520521/dsh-team-runner) ★0 · `dsh-team-runner` — Multi-agent orchestration plugin for DeepSeek Harness: team presets, subagent delegation, sequential pipelines, and policy gates.
- [cyberlieflife/dsh-model-thinking](https://github.com/cyberlieflife/dsh-model-thinking) ★0 · `dsh-model-thinking` — DSH (DeepSeek Harness) web plugin: thinking intensity / reasoning effort settings for custom OpenAI-compatible (pi-ai) models
- [EvilIrving/dsh-context-proxy](https://github.com/EvilIrving/dsh-context-proxy) ★0 · `dsh-context-proxy` — Thin on-demand context-retrieval layer for DeepSeek Harness: context_query / context_slice / context_grep tools over the sessionQuery and subprocess seams.
- [Jesse-njx/dsh-crosstalk](https://github.com/Jesse-njx/dsh-crosstalk) ★0 · `@dsh-crosstalk/bundle` — Cross-session messaging for DSH — any session on the machine can list and message any other, Claude Code-style
- [cakeni/harness-whale](https://github.com/cakeni/harness-whale) ★0 · `harness-whale` — Unofficial community pet for DeepSeek Harness — a native DSH web plugin
- [LKRCharon/dsh-egress-guard](https://github.com/LKRCharon/dsh-egress-guard) ★0 · `dsh-egress-guard` — Local, zero-network, fail-closed secret preflight for DeepSeek Harness model requests.
- [fishxcode/dsh-plugin-deepseek-balance](https://github.com/fishxcode/dsh-plugin-deepseek-balance) ★0 · `dsh-plugin-deepseek-balance` — DeepSeek Harness Web client plugin that displays real-time DeepSeek API balance.
- [sliverp/DeepSeek-harness-weixin](https://github.com/sliverp/DeepSeek-harness-weixin) ★0 · `deepseek-harness-weixin` — Weixin ClawBot channel plugin for DeepSeek Harness with QR login and text/image messaging
- [1HelloMan1/dsh-stats-dashboard](https://github.com/1HelloMan1/dsh-stats-dashboard) ★0 · `dsh-stats-dashboard` — DSH plugin: provider/model usage stats dashboard with response speed, call log, token totals, cache rate, cost estimates, CSV export
- [Stormycry-cryp/dsh-AuthInOne](https://github.com/Stormycry-cryp/dsh-AuthInOne) ★0 · `dsh-auth-in-one` — DSH-native provider API configuration, model switching, and auditable token/cost analytics for DeepSeek Harness.
- [hashdiana/dsh-archived-sessions](https://github.com/hashdiana/dsh-archived-sessions) ★0 · `dsh-archived-sessions` — 在设置面板中新增“已归档会话”分区：列出被归档的会话（默认在侧边栏不可见），点击即可重新打开
- [HongzhongL/dsh-hotswap](https://github.com/HongzhongL/dsh-hotswap) ★0 · `dsh-hotswap` — Runtime hot-swap for DeepSeek Harness plugins: hot enable/disable/restart and auto hot-mount bundles from the Web GUI — no dsh restart.
- [xu1132/dsh-plugin-hello](https://github.com/xu1132/dsh-plugin-hello) ★0 · `dsh-plugin-hello` — A minimal DeepSeek Harness community plugin that registers a callable hello tool
- [zimai233/dsh-video-downloader](https://github.com/zimai233/dsh-video-downloader) ★0 · `dsh-video-downloader` — Media downloader for DeepSeek Harness. Detect and download video/audio from Bilibili, YouTube, Douyin, Xiaohongshu.
- [pangzi499/dsh-balance-stats](https://github.com/pangzi499/dsh-balance-stats) ★0 · `dsh-balance-stats` — Community balance and spend statistics plugin for DeepSeek Harness Web, with session usage and privacy-preserving invoice summaries.
- [yangYzc/dsh-plugin-quote-reply](https://github.com/yangYzc/dsh-plugin-quote-reply) ★0 · `dsh-plugin-quote-reply` — DSH plugin: select text in a conversation, then quote it into the composer or reply in a new window. / DeepSeek Harness 划词引用插件：选中文字一键引用回复或新窗口回复。
- [ch1bug/dsh-wsl-bridge](https://github.com/ch1bug/dsh-wsl-bridge) ★0 · `dsh-wsl-bridge` — Windows access tools for WSL agents: win_ls/win_read/win_write/win_run/win_open/win_path/win_drives as a DeepSeek Harness bundle
- [RNlao/dsh-wallpaper](https://github.com/RNlao/dsh-wallpaper) ★0 · `dsh-wallpaper` — DSH wallpaper plugin: choose an image/gradient as the DSH web background, with local-folder browsing, crop, blur, dim, panel translucency and position controls.
- [akqwpeter-prog/dsh-media-skills](https://github.com/akqwpeter-prog/dsh-media-skills) ★0 · `dsh-media-skills` — 给 DeepSeek Harness 装上「眼睛」和「画笔」——免费读图 + 免费生图 Skill。Eyes & brush for DeepSeek Harness: free image reading & generation. 👁️🎨
- [MysaDC/dsh-plugin-description](https://github.com/MysaDC/dsh-plugin-description) ★0 · `dsh-plugin-description` — mount one row in the composition and every plugin card on the Web Settings plugin list page gets a bilingual (zh/en) description; it also publishes the pluginDescriptions service so other plugins can register their own descriptions.
- [walnut-a/dsh-user-message-navigation](https://github.com/walnut-a/dsh-user-message-navigation) ★0 · `dsh-user-message-navigation` — A user-message navigation rail plugin for DeepSeek Harness
- [Equinox7379/dsh-daily-brief](https://github.com/Equinox7379/dsh-daily-brief) ★0 · `dsh-daily-brief` — Daily activity brief for DSH: per-session turns/messages/tool-call stats. Read-only.
- [Equinox7379/dsh-update-radar](https://github.com/Equinox7379/dsh-update-radar) ★0 · `dsh-update-radar` — Update radar for DSH: checks installed plugins against git upstreams.
- [zimai233/dsh-adhd-copilot](https://github.com/zimai233/dsh-adhd-copilot) ★0 · `dsh-adhd-copilot` — ADHD behavioral coaching skill for DeepSeek Harness. Guides readers through task execution - breaks tasks into micro-steps, manages overwhelm, provides launch rituals, calibrates time estimates, and recovers from self-blame.
- [smanx/dsh-conversation-indicator](https://github.com/smanx/dsh-conversation-indicator) ★0 · `dsh-conversation-indicator` — Conversation indicator plugin for the DeepSeek Harness web GUI: a compact rail beside the scrollbar marks each user message; hover for the summary, click to jump. / DeepSeek Harness Web GUI 对话指示器插件：滚动条旁紧凑面板标记每条用户消息，悬停看摘要，点击跳转。
- [dongsheng123132/dsh-2origin](https://github.com/dongsheng123132/dsh-2origin) ★0 · `dsh-2origin` — Evidence-first 2Origin state projection, diff and immutable freeze for DeepSeek Harness
- [Kevoyuan/dsh-mac-vision](https://github.com/Kevoyuan/dsh-mac-vision) ★0 · `dsh-mac-vision` — On-device macOS OCR and Apple Vision for DeepSeek Harness — one native plugin with a bundled Skill.
- [csiroqa/dsh-command-opt](https://github.com/csiroqa/dsh-command-opt) ★0 · `@dsh-external/dsh-command-opt` — DeepSeek Harness（DSH）命令优化插件：Tab/Enter 补全命令名、参数格式引导与提示弹框、tool 开启会话（subagent）补丁、空对话命令输出修复。Command optimization plugin for DeepSeek Harness.
- [inmny/dsh-git-bash](https://github.com/inmny/dsh-git-bash) ★0 · `dsh-plugin-git-bash` — Use Git for Windows Bash as the default DeepSeek Harness shell
- [NexusAgentX/dsh-mcp-adapter](https://github.com/NexusAgentX/dsh-mcp-adapter) ★0 · `dsh-mcp-adapter` — MCP adapter for DeepSeek Harness — one proxy tool instead of dumping every MCP schema into context.
- [yingjunnan/dsh-deepseek-quota](https://github.com/yingjunnan/dsh-deepseek-quota) ★0 · `dsh-deepseek-quota` — DeepSeek API quota (balance) widget for the DSH web GUI: a floating bottom-right card showing remaining DeepSeek API balance.
- [dongsheng123132/dsh-capability-receipt](https://github.com/dongsheng123132/dsh-capability-receipt) ★0 · `dsh-capability-receipt` — Content-addressed receipts for skills actually loaded by DeepSeek Harness
- [ChuanTianML/dsh-share](https://github.com/ChuanTianML/dsh-share) ★0 · `dsh-share` — Privacy-first Markdown and self-contained HTML sharing for DeepSeek Harness sessions
- [malevrigns/dsh-session-stars](https://github.com/malevrigns/dsh-session-stars) ★0 · `dsh-session-stars` — Favorite DeepSeek Harness Sessions and reopen them from a global cross-Workspace center.
- [121103qwq/dsh-vision-sidecar](https://github.com/121103qwq/dsh-vision-sidecar) ★0 · `dsh-vision-sidecar` — Hosted free vision sidecar for DeepSeek Harness with durable session evidence
- [wuxinzhe/dsh-speech-sherpa](https://github.com/wuxinzhe/dsh-speech-sherpa) ★0 · `dsh-speech-sherpa` — DeepSeek Harness 本地离线语音插件：STT 语音识别 + TTS 语音合成 + WebUI 按住说话（Sherpa-ONNX）
- [LuZhouheng/dsh-gen3d](https://github.com/LuZhouheng/dsh-gen3d) ★0 · `dsh-gen3d` — DeepSeek Harness 3D 角色生成插件：直连 Meshy / Hunyuan3D / Tripo3D / Rodin 官方 API，自配 key，mock 回退
- [Meredith2328/dsh-sticky-note](https://github.com/Meredith2328/dsh-sticky-note) ★0 · `dsh-sticky-note` — DSH 便签插件：随手记点子/感想/TODO，Markdown 预览 + 快捷键 + 历史归档，存储路径可配置
- [Xplore-LAB/dsh-plugin-asmemory](https://github.com/Xplore-LAB/dsh-plugin-asmemory) ★0 · `dsh-plugin-asmemory` — Action-State Memory Engine: typed time-series memory (states + actions) with trend/anomaly/causal analysis for DeepSeek Harness
- [zimai233/dsh-exam-countdown](https://github.com/zimai233/dsh-exam-countdown) ★0 · `dsh-exam-countdown` — Chinese exam countdown for DeepSeek Harness. Query 64 built-in exams (gaokao, kaoyan, civil service, CET-4/6, CPA, bar exam...) and get days-until dates computed by pure date math with rolling yearly recurrence.

</details>

<a id="related-projects"></a>
## 相关项目

以下仓库使用了 `dsh-plugin` topic，但尚未提供可安装的 `dsh.bundle`。它们可能是启动器、文档、技能集或开发资源。

<details>
<summary><strong>展开 430 个相关项目</strong></summary>

- [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) ★69203 — DeepSeek Harness: Everything is a Plugin.
- [titanwings/colleague-skill](https://github.com/titanwings/colleague-skill) ★21513 — 将冰冷的离别化为温暖的 Skill，欢迎加入数字生命1.0！Transforming cold farewells into warm skills? It's giving rebirth era. Welcome to Digital Life 1.0. 🫶
- [Devin-AXIS/iPolloWork](https://github.com/Devin-AXIS/iPolloWork) ★3742 — A next-generation, source-available AI workspace with a self-evolving agent runtime for editable code, design, presentations, websites, and video—a Codex alternative that integrates DeepSeek Harness for subagent delegation, combining iPolloWork’s complete AI workbench with DSH’s specialized agents and both plugin ecosystems in one workflow.
- [whiteguo233/OpenBiliClaw](https://github.com/whiteguo233/OpenBiliClaw) ★2136 — 本地私有、开源的自进化跨平台 AI 内容发现 Agent：先理解你，再主动从 B站、小红书、抖音、YouTube、X、知乎、Reddit、微博等平台与开放 Web 寻找内容。（支持 deepseek harness 插件） | Local-first open-source cross-platform AI content discovery agent: understands you, then proactively finds content across Bilibili, Xiaohongshu, Douyin, YouTube, X, Zhihu, Reddit, Weibo and the open web.（support deepseek harness plugin）
- [paean-ai/deeptide](https://github.com/paean-ai/deeptide) ★1037 — Built by DeepSeek, for DeepSeek — a Swift-native macOS coding agent
- [zhu1090093659/dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui) ★974 — Plugin and skin collection for DeepSeek Harness (DSH) Web UI - task board, git graph, right-side panel, remote mobile UI, pet, live token stats, and skin center.
- [nutshellai-tech/mobius](https://github.com/nutshellai-tech/mobius) ★936 — The first self-evolving open-source Agent OS, connecting your team, AI agents, devices, and compute
- [Anionex/agent-vision-toolkit](https://github.com/Anionex/agent-vision-toolkit) ★671 — 为纯文本模型"看图“设计更好的视觉工具箱和技能，支持多图理解，图片问答，前端UI还原、GUI 自动化等，并可选无缝接入多个主流agent，直接识别粘贴图片｜ A vision toolkit and skill designed for text-only llms — image Q&A, long-screenshot OCR, frontend UI restoration, and GUI automation, with optional seamless integration for Codex, Claude Code, Pi, Oh My Pi, and OpenCode
- [hellowind777/helloagents](https://github.com/hellowind777/helloagents) ★667 — 一个自主的高级智能伙伴，不仅分析问题，更持续工作直到完成实现和验证。
- [sandbaseai/sandbase-harness](https://github.com/sandbaseai/sandbase-harness) ★566 — Open-source CMA-compatible agent runtime. Run multi-agent systems locally with any model (Ollama/vLLM/Claude/GPT), MCP tools, scenario templates, and a beautiful dashboard. One command start. Built for enterprise teams.
- [AdamPlatin123/awesome-dsh-plugins](https://github.com/AdamPlatin123/awesome-dsh-plugins) ★528 — 前部索引仓库（Radar）：自动扫描发现的所有 dsh 插件候选；经测试合格的将移入后序精选目录仓库
- [PM-Shawn/Abu-Cowork](https://github.com/PM-Shawn/Abu-Cowork) ★312 — Open-source alternative to Claude Cowork — a local-first AI agent desktop app · multi-model · self-evolving skills · privacy-first · multi-Harness roadmap · DeepSeek Harness integration in progress
- [linhay/harmony-next.skills](https://github.com/linhay/harmony-next.skills) ★310 — 🚀 Expert guidance for HarmonyOS NEXT (API 12+) development. Covers IDE operations, performance tuning, architecture (HAP/HAR/HSP), and automation testing.
- [awesome-dsh-plugin/awesome-dsh-plugin](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin) ★290 — A curated list of plugins for DeepSeek Harness (dsh) · DeepSeek Harness 插件精选列表
- [alaliqing/claude-paper](https://github.com/alaliqing/claude-paper) ★285 — 📚 Claude Code plugin that automates research papers study with automatic material generation, code demonstrations, and interactive web viewer.
- [morluto/rea](https://github.com/morluto/rea) ★270 — Reverse engineer anything with agents, from app behavior down to native binaries.
- [Small-tailqwq/dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale) ★268 — DSH Web 鲸鱼娘皮肤系列(深海女仆工坊 maid-atelier)——CC BY-NC-SA 4.0
- [cofy-x/axern](https://github.com/cofy-x/axern) ★260 — Open-source sandboxes for AI agents, untrusted code execution, and durable services.
- [SepineTam/mcp-for-stata](https://github.com/SepineTam/mcp-for-stata) ★240 — A MCP server for Stata to integrate Stata into your agent.
- [0xsline/awesome-deepseek-harness](https://github.com/0xsline/awesome-deepseek-harness) ★238 — DeepSeek Harness (DSH) ecosystem: curated plugins, tools, and infrastructure from dsh-external/hub and the public dsh-plugin topic.
- [openma-ai/open-managed-agents](https://github.com/openma-ai/open-managed-agents) ★235 — Open-source Claude Managed Agents API implementation and self-hosted Claude Tag-style agent runtime. Drop-in compatible; runs on Cloudflare Workers/Durable Objects or Node.js. Apache 2.0.
- [humblebanana/open-record-replay](https://github.com/humblebanana/open-record-replay) ★135 — Open-source macOS record-and-replay workflow recorder for computer use agents. Captures mouse, keyboard, and UI events as structured traces so agents can learn, replay, and automate real desktop tasks.
- [zhaoolee/notes](https://github.com/zhaoolee/notes) ★134 — 开源版锤子便签，复刻锤科美学，一键Docker私有化部署，支持skill调用，支持dsh plugin，支持多租户，一键生成公众号格式，支持导出便签为图片
- [Sikao-Engine/KimiX](https://github.com/Sikao-Engine/KimiX) ★104 — The next-gen lightweight coding agent cli
- [Electricitysheep/dsh-handbook](https://github.com/Electricitysheep/dsh-handbook) ★83 — DeepSeek Harness (dsh) 从 0 到 1 深度手册：安装/插件开发/性能调优/实测案例/同模型多 Agent 实测对比（中文 + 英文 PDF）
- [pulseaiclub/phi](https://github.com/pulseaiclub/phi) ★73 — a coding Agent from pi. ∞ providers, sub-agents, hashline edits, and a permission gate, Deepseek 中最好看的tui
- [wink-run/tokenbank](https://github.com/wink-run/tokenbank) ★70 — Token Bank — the local LLM gateway that sits between your AI agents and every provider.  Know where tokens go · Spend less with smart routing to Ollama, Groq, GitHub Models · Earn by sharing idle quota on a community P2P network.  One-click onboarding for Cursor, Claude Code, Codex CLI, Gemini CLI — no agent changes. Full trace, seamless model swap
- [taxueseek/argo](https://github.com/taxueseek/argo) ★61 — 专门为 agent 打造的 agent 搜索工具，具备多语言搜索能力，覆盖中文/英文/学术/代码/购物/金融/新闻/百科。
- [Nagi-ovo/dsh-find-plugins](https://github.com/Nagi-ovo/dsh-find-plugins) ★54
- [Lum1104/dsh-browser](https://github.com/Lum1104/dsh-browser) ★50 — dsh plugin: Chrome sidebar extension that lets DSH operate your browser directly—no vision capabilities required.
- [Lyn-77/ProMentor](https://github.com/Lyn-77/ProMentor) ★48 — ProMentor 是一个 AI Coding Agent Skill。装上它，你的 AI 编程助手立刻化身为导师——扫描项目架构、生成阶梯式 Chapter、带你手写核心逻辑、自动判题、AI Code Review。
- [Ruler4396/dsh-launcher](https://github.com/Ruler4396/dsh-launcher) ★44 — Lightweight Windows launcher for DeepSeek Harness: silent autostart at logon + a minimal WebView2 window instead of a full browser
- [btspoony/mstar-harness](https://github.com/btspoony/mstar-harness) ★41 — A Skill-driven Harness/Loop Engineering Workflow Agent Plugin
- [bruc3van/awesome-dsh-plugin](https://github.com/bruc3van/awesome-dsh-plugin) ★40 — 用 30 秒找到适合你的 DeepSeek Harness 插件。 不只是仓库列表：这里告诉你插件解决什么问题、适合谁，以及从哪里开始。
- [Alex-Yanggg/awesome-DSH-plugin](https://github.com/Alex-Yanggg/awesome-DSH-plugin) ★39 — A meticulously curated list of useful plugins, extensions, tools and development resources built for DSH, covering productivity enhancement, functional expansion, debugging utilities and custom development modules.
- [morluto/jacobian](https://github.com/morluto/jacobian) ★39 — Pure mathematics for agents: search for examples and counterexamples, compute exactly, and independently check what a result proves.
- [morluto/flameox](https://github.com/morluto/flameox) ★31 — Runtime evidence that helps agents trace, profile, and burn down hotspots in application and native code, GPU kernels, and inference stacks.
- [yuukiLike/zeromd](https://github.com/yuukiLike/zeromd) ★30 — Obsidian 零成本同步：iPhone ↔ Mac，GitHub 自动备份。本地优先 + 长期积累。｜Local First. Zero-cost Obsidian sync across iPhone, Mac & GitHub. Let knowledge grow over time.
- [LaplaceYoung/oh-my-dsh](https://github.com/LaplaceYoung/oh-my-dsh) ★29 — oh-my-dsh：面向 DSH (DeepSeek Harness) 的插件生态——700+ 插件，只通过扩展接缝注册，不修改 agent-loop 骨架
- [csyangwen/dsh-memory-evolve](https://github.com/csyangwen/dsh-memory-evolve) ★26 — 为 DeepSeek Harness 带来「跨会话长期记忆 + 后台自我进化」能力的纯插件实现：五轨记忆 · git 分支感知 · 回合内自我审查 · 技能自我进化与技能管理器 · 四轨待办 · COI 调度 · 会话广播 · 会话搜索 · 提示词管理器 · 临时信息便签——零核心修改、零运行时依赖，随装随用、卸载即净。
- [openguardrails/openguardrails](https://github.com/openguardrails/openguardrails) ★25 — The vendor-neutral protocol for AI agent safety & security — and the neutral benchmark that ranks the vendors.
- [hanelalo/browser-bridge](https://github.com/hanelalo/browser-bridge) ★25 — 让你的agent真的像你一样操控你的浏览器窗口
- [zenx0x/allinluna](https://github.com/zenx0x/allinluna) ★24 — Resource-aware multi-agent orchestration for Codex and DeepSeek Harness (All in Flash DSH plugin)
- [vlln/plugin-registry](https://github.com/vlln/plugin-registry) ★23 — DSH 插件生态基建：薄控制台（浏览器面板管理官方 repository 插件，0 patch）+ make-dsh-plugin skill 官方插件开发引导
- [ali-meoo/meoo-cli](https://github.com/ali-meoo/meoo-cli) ★21 — meoo cli 是秒悟（Meoo）官方推出的命令行工具，让 Claude Code、Codex、Cursor、Qoder等本地 agent 在帮你写完前端代码后，能直接接管「数据库、用户登录、文件存储、部署上线」的所有云端工作——你只需要在终端跑一条命令，剩下的交给 AI。
- [Dominic789654/awesome-deepseek-harness](https://github.com/Dominic789654/awesome-deepseek-harness) ★19 — A curated list of plugins, skills, MCP servers, orchestrators & UIs for DeepSeek Harness (DSH). Visualization · PPT · Coding · Agents · Loops (auto-research) and more. #dsh
- [lhh010/dsh-ui-whale](https://github.com/lhh010/dsh-ui-whale) ★19 — 【求⭐】🐋DSH Web UI 全手绘像素鲸鱼伙伴插件：会话标题栏常驻，平时眨眼/偶尔摆尾/动胸鳍，思考运行时持续动起来，回合完成头顶喷水，点击还会冒爱心，不工作时还会偷懒睡觉，零核心改动。 【喜欢的话就点点star⭐吧~】
- [iuikj/dsh-desktop](https://github.com/iuikj/dsh-desktop) ★18 — 一个微调美观的DeepSeek harness客户端（欢迎插件加入）
- [huiliyi37/dsh-tianshu-build](https://github.com/huiliyi37/dsh-tianshu-build) ★17 — dsh-tianshu-tui — DeepSeek Harness terminal UI
- [YunTaiHua/illusion-agent](https://github.com/YunTaiHua/illusion-agent) ★17 — Illusion-Agent: Where fantasy meets functionality — an AI agent platform for terminal, browser, any model, any OS.
- [morluto/leantoken](https://github.com/morluto/leantoken) ★16 — Code intelligence for agents: find the code that matters and keep your context window and tokens lean.
- [whiteguo233/dsh-openbiliclaw](https://github.com/whiteguo233/dsh-openbiliclaw) ★16 — OpenBiliClaw 是本地运行的跨平台个性化内容推荐 Agent，持续理解你的兴趣并主动找内容。本仓库是它的 DeepSeek Harness 插件：DSH 界面常驻第四栏（推荐/内容库/对话/画像/设置），注册 22 个 Agent Bridge 工具，让 Agent 也能读推荐、答探测、闭环学习。
- [pingfanfan/hello-dsh](https://github.com/pingfanfan/hello-dsh) ★15 — 从零开始，看懂 DeepSeek Harness 的「万物皆可插件」— 零基础插件开发教程（含 22 个中文技能实例）| Zero-to-plugin tutorial for DeepSeek Harness
- [william-jin-cmu/dsh-vision](https://github.com/william-jin-cmu/dsh-vision) ★14 — dsh 插件：给纯文本 DeepSeek 加视觉——view_image 工具桥接任意 OpenAI 兼容 VLM（默认智谱免费档，实测 4 厂商 10 模型）
- [wess09/DeepSeekHarnessDesktop](https://github.com/wess09/DeepSeekHarnessDesktop) ★14 — DeepSeekHarness桌面端打包
- [JustGenius-s/DSH-Desktop](https://github.com/JustGenius-s/DSH-Desktop) ★13 — DSH-Desktop
- [vibeinging/dsh-work](https://github.com/vibeinging/dsh-work) ★13 — Local-first AI workbench for DSH Plugins, combining Agent sessions, project files, data analysis, web research, MCP, and Office artifacts in an Electron desktop app.
- [libukai/awesome-deepseek-harness](https://github.com/libukai/awesome-deepseek-harness) ★13 — DeepSeek Harness 终极指南：快速入门、资源推荐、精选插件与实用工具 ｜The Ultimate Guide to DeepSeek Harness: QuickStart, Resources, Plugins&Toolkit
- [SenmuuuuW/dsh-group-photo](https://github.com/SenmuuuuW/dsh-group-photo) ★12 — DSH 内测收官合影墙：GitHub OAuth 零权限登录 + 冻结白名单校验的拍立得合影站（含 DSH Skill 包装）
- [ChisaAlter/Deepseek-Harness-Desktop](https://github.com/ChisaAlter/Deepseek-Harness-Desktop) ★11 — Electron desktop shell for DeepSeek Harness web UI
- [huawolf/news-agent](https://github.com/huawolf/news-agent) ★11 — AI-powered personal news aggregator with LLM scoring, Web console, and push notifications to Feishu/Discord.
- [ysr666/dsh-vision-router](https://github.com/ysr666/dsh-vision-router) ★11 — DeepSeek Harness plugin: turn-level vision routing with provider fallback chains, a cached vision_describe tool with JSON output and image downscaling, and optional per-host proxy support.
- [bruc3van/dsh-desktop](https://github.com/bruc3van/dsh-desktop) ★10 — DeepSeek Harness Desktop 是一款社区维护的非官方第三方桌面客户端，通过直接加载官方 Web UI，为普通用户提供开箱即用的独立桌面体验：它可以自动复用本机已运行的官方实例，也可以使用安装包内置的 dsh 运行时启动服务，无需用户额外安装 Node.js 或 CLI，并提供智能连接、远程实例连接、托盘常驻、运行时监护和异常恢复等桌面增强。
- [Fisfzy/ego-browser](https://github.com/Fisfzy/ego-browser) ★9 — DSH（DeepSeek Harness）插件：把 ego-lite 浏览器（给 AI Agent 用的 Chromium）接入 HARNESS——13 个结构化 ego_* 工具（文本语义快照、语义定位点击、表单填充、截图、CDP 控制、任务空间隔离），内置 ego 运行时，Linux + Chrome 开箱即用，无需克隆官方仓库或手动构建。
- [147228/dsh-xiaoyao-skins](https://github.com/147228/dsh-xiaoyao-skins) ★9 — 夕小瑶 × DeepSeek Harness Web 皮肤合集、安装器与社区创作工具链
- [GoalfyAI/goalfydata](https://github.com/GoalfyAI/goalfydata) ★9 — A shared data backend for AI agents and authorized teams.
- [Totoro-qaq/Cobsidian](https://github.com/Totoro-qaq/Cobsidian) ★9 — Agent-agnostic workflow skill for maintaining Obsidian knowledge bases
- [omdsh-dev/dsh-plugin-dev](https://github.com/omdsh-dev/dsh-plugin-dev) ★9 — DSH 插件开发踩坑与做法档案（skill + 文档）：cordis 双副本、tsconfig 三件套、Windows junction、多帧 zstd 等实测记录
- [bradeGithub/DSH-Plugins-Marketplace](https://github.com/bradeGithub/DSH-Plugins-Marketplace) ★8 — DSH插件市场 / DSH Plugin Marketplace: 在 DeepSeek Harness Web GUI 中一键浏览、安装与更新 GitHub topic:dsh-plugin 的全部插件 | browse, install & update all GitHub dsh-plugin plugins in the DSH Web GUI
- [CanglongCl/dsh-web-review](https://github.com/CanglongCl/dsh-web-review) ★8 — DeepSeek Harness Web GUI 的网页预览与元素批注插件，让 AI 根据可视化反馈直接修改前端源码。
- [morluto/internalcot](https://github.com/morluto/internalcot) ★8 — Make agents show their full chain of thought.
- [like-study1/Oh-My-DSH](https://github.com/like-study1/Oh-My-DSH) ★7 — 🐳 DeepSeek Harness 插件聚合社区 — 自动同步 dsh-plugin 生态 · 精选目录 · 每 8 小时自动维护 | Oh-My-DSH: a community-maintained catalog of DeepSeek Harness plugins, auto-synced from the dsh-plugin topic
- [chen-001/dsh-grok-tui](https://github.com/chen-001/dsh-grok-tui) ★7 — Use dsh via grok-build's TUI.
- [unknowbug/RE-Framework](https://github.com/unknowbug/RE-Framework) ★7 — Modular engineering methodology framework for AI agents — reverse engineering & software development (core + re-binary / re-code / swe modules).
- [lhh010/dsh-ui-progress](https://github.com/lhh010/dsh-ui-progress) ★7 — DSH Web UI 会话进度插件：输入框停靠区常驻会话进度条（todos 真实进度 / 实时 token 生成速率 / 中断橘红态 / 待办提醒），零核心改动
- [ginuim/multi-screen-wireframe](https://github.com/ginuim/multi-screen-wireframe) ★6 — Generate offline multi-screen wireframes with canvas + demo navigation. Zero Node/npm.
- [whitelonng/dshcode](https://github.com/whitelonng/dshcode) ★6 — Community desktop companion for DeepSeek Harness — one-click Electron app for macOS and Windows
- [lhh010/dsh-paste-input](https://github.com/lhh010/dsh-paste-input) ★6 — DSH WebUI 文件输入增强：Ctrl+V 粘贴（带首次告知弹窗）+ 拖拽 + 选择文件，发送时复制进会话工作区临时目录
- [icodesign/orbis](https://github.com/icodesign/orbis) ★5 — A mobile client for deepseek harness remote control
- [omdsh-dev/dsh-plugin-skills](https://github.com/omdsh-dev/dsh-plugin-skills) ★5 — Agent skills for building and testing DeepSeek Harness plugins — from scaffolding a new plugin package to choosing the right test tiers, entirely inside an agent session.
- [lhh010/dsh-bash-encoding](https://github.com/lhh010/dsh-bash-encoding) ★5 — DSH bash 输出编码自动识别插件：替换 ctx.bash，自管 spawn 收集原始字节，自动检测 UTF-16LE/UTF-8/GBK 等编码并正确解码，修复 WSL/Windows 下 bash 工具的中文乱码。
- [fakechris/dsh-harness-ops](https://github.com/fakechris/dsh-harness-ops) ★5 — DSH 运维工具箱：升级、重启、故障都不用操心。① 官方每日快照 A/B 双槽轮换——旧插件迁移+构建+验收全过才原子切换，一键回滚，旧版本永远兜底；② 守护 10s 自动拉起 web + agent 断点自动续接，重启无人值守；③ web 全挂（A/B 都坏、agent 不可用）时 dsh-doctor 一条命令自救：九项诊断→机械修复配置→LLM 深度检测修复（完整推理实时可见）→拉起 web。install via: git clone + bash scripts/install.sh
- [chyra-moon/deepseek-harness-desktop](https://github.com/chyra-moon/deepseek-harness-desktop) ★5 — DeepSeek Harness desktop shell: 1:1 replica of the official web UI as a Windows desktop app (community project)
- [xiaohai-78/Top](https://github.com/xiaohai-78/Top) ★5 — 📊 Daily leaderboard for the dsh-external plugin ecosystem — tracks every repo, ranks by stars, archives daily snapshots, and shows the latest ranking on the homepage.
- [DDDFXYqiming/Agent_Extensions](https://github.com/DDDFXYqiming/Agent_Extensions) ★5 — Agent Skills & DeepSeek Harness (DSH) 扩展库：通用智能体技能（General_skills）+ DSH 标准插件（dsh-plugin），开箱即用的 AI Agent 能力增强集合。
- [unknowbug/anchorlaw](https://github.com/unknowbug/anchorlaw) ★5 — Code verification protocol for vibe coding — every claim must have a verifiable practice anchor.
- [Komeiji-Shiki/graycode-for-dsh](https://github.com/Komeiji-Shiki/graycode-for-dsh) ★5
- [Tyan66666/billion-context-dsh](https://github.com/Tyan66666/billion-context-dsh) ★5 — Model-driven context management (Active Context Pruning / ACP) for the DeepSeek Harness — the model decides when and what to compress. Ported from billion-context-pi (ranxianglei); acp-kernel reused verbatim. CompactionEngine backend with compress/decompress/search_context/acp_status tools.
- [KirschBluteX/engineer-software](https://github.com/KirschBluteX/engineer-software) ★5 — A focused, evidence-driven Codex workflow for software engineering tasks.
- [octoparse/agent-skills](https://github.com/octoparse/agent-skills) ★4 — Collection of Octoparse agent skills
- [gameswu/dsh-plugin-background](https://github.com/gameswu/dsh-plugin-background) ★4 — dsh壁纸插件
- [YYTbit/awesome-dsh-bridges](https://github.com/YYTbit/awesome-dsh-bridges) ★4 — Bridge your favorite AI coding tools into DeepSeek Harness
- [HuanLinOTO/dsh-plugin-pet-rs](https://github.com/HuanLinOTO/dsh-plugin-pet-rs) ★4 — DSH 桌宠（Rust 版），5 态鲸鱼 + 双 SSE 实时推送 + 透明置顶窗 + 系统托盘，三端支持 | DSH desktop pet (Rust edition): 5-state whale + dual SSE real-time push + transparent always-on-top window + tray, cross-platform
- [moxisuki/dsh-lan](https://github.com/moxisuki/dsh-lan) ★4 — DeepSeek Harness（dsh）的局域网插件：一条 overlay 把 dsh web 绑定到局域网，并通过 index tap 注入 crypto.randomUUID    │ polyfill 修复非安全上下文启动崩溃。
- [01Virex/dsh-status-rotator](https://github.com/01Virex/dsh-status-rotator) ★4 — A DeepSeek Harness (dsh) web plugin that replaces the "Deep diving…" turn-status label with phase-aware, typewriter-animated, rainbow-gradient phrases — all configurable from a JSON file.
- [Thhoho/reSanity](https://github.com/Thhoho/reSanity) ★4 — reSanity 散修 — 散户的认知组合管理：查证、避坑、记忆、复盘。一份 SKILL.md，零依赖。
- [FlashingChen/dsh-worktree](https://github.com/FlashingChen/dsh-worktree) ★4 — Codex-style permanent git worktrees for DeepSeek Harness: worktree_create/list/remove agent tools, a /worktree chat command, and durable per-repo manifests.
- [runzhliu/deepseek-harness-docker](https://github.com/runzhliu/deepseek-harness-docker) ★4 — Community Docker and Kubernetes packaging for DeepSeek Harness (@deepseek-ai/dsh), with a hardened image, Compose stack, Helm chart, Web UI, and headless CLI.
- [PlutoKeating/dsh-lark-bot](https://github.com/PlutoKeating/dsh-lark-bot) ★4 — dsh-lark-bot：把 DeepSeek Harness (dsh) 桥接进飞书/Lark 的 bot，含完整项目工作区管理。A bridge bot connecting DeepSeek Harness (dsh) into Feishu/Lark with full workspace management. deepseek · deepseek harness · feishu · lark · bridge · bot
- [lhh010/dsh-input-history](https://github.com/lhh010/dsh-input-history) ★4 — DSH Web 输入历史插件：Ctrl+Up / Ctrl+Down 像终端一样召回与切换已发送消息，零核心改动
- [ayuanwong/deepseek-harness-ux](https://github.com/ayuanwong/deepseek-harness-ux) ★4 — 长任务，不刷屏：关键进度清晰可见，完成后自动折叠，详情随时展开。 Long agent tasks, without transcript clutter: focused progress, auto-folded history, details on demand.
- [wangshunnn/oh-my-dsh](https://github.com/wangshunnn/oh-my-dsh) ★4 — 🐋 All you need is oh-my-dsh ｜ DeepSeek Harness 社区插件索引与精选（自动更新）
- [opensetk/dsh-xiaohei](https://github.com/opensetk/dsh-xiaohei) ★4 — dsh的罗小黑插件
- [AngelosZou/graphlint](https://github.com/AngelosZou/graphlint) ★4
- [shaokeyibb/dsh-plugin-product-subagents](https://github.com/shaokeyibb/dsh-plugin-product-subagents) ★4 — Role-based Codex / Claude Code / ACP subagent providers for the DeepSeek Harness — continuable children, durable session recovery, per-role product permissions, and delegation with a permission ceiling.
- [wangyang10/image-vision](https://github.com/wangyang10/image-vision) ★4
- [Ychris12138/dsh-usage-stats](https://github.com/Ychris12138/dsh-usage-stats) ★4 — Token usage heatmap, per-model breakdowns, and DeepSeek account balance for the DeepSeek Harness Web GUI (dsh web).
- [longyu065/dsh-desktop](https://github.com/longyu065/dsh-desktop) ★4 — Desktop shell for DeepSeek Harness Web GUI — auto-installs dsh, native macOS tray, packaged for macOS & Windows.
- [Electricitysheep/dsh-tool-turbo](https://github.com/Electricitysheep/dsh-tool-turbo) ★4 — Per-round reasoning_effort optimizer for DeepSeek Harness (dsh): auto-downgrades tool-call reasoning for simple tool chains, lifting back for heavy work. Cuts thinking time between tool calls.
- [shinelon/eyes-for-deepseek](https://github.com/shinelon/eyes-for-deepseek) ★4
- [omdsh-dev/dsh-mygo](https://github.com/omdsh-dev/dsh-mygo) ★4
- [LaplaceYoung/dsh-qq2006](https://github.com/LaplaceYoung/dsh-qq2006) ★4 — DSH (DeepSeek Harness) 的 QQ2006 皮肤插件：注册 qq2006 主题、镜像 body[data-ds-skin]、全局皮肤表与完整素材
- [whyihaveyou/dsh-suite](https://github.com/whyihaveyou/dsh-suite) ★3 — Bilingual curated DeepSeek Harness plugin directory — daily compat CI, create-dsh-plugin scaffold, own plugins.
- [AlliotTech/deepseek-harness-docker](https://github.com/AlliotTech/deepseek-harness-docker) ★3 — deepseek-harness docker部署
- [Leeaoyin/dr-agent-skills](https://github.com/Leeaoyin/dr-agent-skills) ★3 — Structured, reusable skill modules for AI coding agents — covering engineering workflows, reliability evaluation, and production readiness.
- [GiantGKL/dsh-cost](https://github.com/GiantGKL/dsh-cost) ★3 — DeepSeek Harness (DSH) plugin: live conversation cost and DeepSeek account balance in the composer stats row — RMB in Chinese UI, USD in English UI
- [yyh-001/dsh-companion](https://github.com/yyh-001/dsh-companion) ★3 — DeepSeek 陪伴模式插件 —— 人设、记忆、聊得下去：SOUL 人格 + Hermes 长期记忆，可选 QQ 通道
- [litestartup-com/litestartup-skills](https://github.com/litestartup-com/litestartup-skills) ★3 — Publish blog, docs, website, changelog, send campaign email directly from your AI agent. Write content, run one prompt, go live in seconds.
- [RangeKing/vibemeter](https://github.com/RangeKing/vibemeter) ★3 — See what your agents are doing. Understand how you work together.
- [modusensus/dsh-mneme](https://github.com/modusensus/dsh-mneme) ★3 — Mneme——把记忆主权还给人的记忆插件：SQLite + 可人工编辑的 Markdown 双写，autoDream 在梦境中巩固记忆，140 个测试护航。
- [fff122/dsh-research-notes](https://github.com/fff122/dsh-research-notes) ★3 — A lightweight research notes plugin for DeepSeek Harness
- [walkinglabs/awesome-deepseek-harness-plugins](https://github.com/walkinglabs/awesome-deepseek-harness-plugins) ★3 — A curated, bilingual list of verified plugins, tools, design workflows, and learning resources for DeepSeek Harness (DSH).
- [morluto/smokinggun](https://github.com/morluto/smokinggun) ★3 — Help your agents find the smoking gun they're looking for. Optimization evidence for agents: find complexity hotspots.
- [Small-tailqwq/dsh-deepcel](https://github.com/Small-tailqwq/dsh-deepcel) ★3 — 一款模仿 excel 的 dsh 皮肤
- [wssfk12138/dsh-wechat-notify](https://github.com/wssfk12138/dsh-wechat-notify) ★3 — DeepSeek Harness 插件：为 agent 新增 wechat_notify 工具，让 AI 通过本机 ClawBot 微信通道主动给你发通知（任务完成 / 需决策时），中文可靠、掉线自提示。
- [RYun601/dsh-launcher](https://github.com/RYun601/dsh-launcher) ★3 — Windows 下 DeepSeek Harness Web 的启动与管理工具：deepseek 命令一键前台/后台启动、自动打开浏览器、状态查询、停止服务与更新检查，支持一行命令安装
- [SnowCrescenter-tech/dsh-desktop](https://github.com/SnowCrescenter-tech/dsh-desktop) ★3 — DeepSeek Harness 桌面版 — 原生 Windows 桌面壳（无边框窗口 / 系统托盘 / 原生通知 / 单实例 / 开机自启）| Native Windows desktop shell for DeepSeek Harness (frameless window, tray, native notifications, single-instance, auto-launch)
- [morluto/gitcontribute](https://github.com/morluto/gitcontribute) ★3 — Contribution research for agents: check repository guidance, related work, code context, and validation before writing a patch.
- [coppynight/dsh-doctor](https://github.com/coppynight/dsh-doctor) ★3 — DSH 插件：flutter-doctor 风格诊断与修复（安装级 + harness 内检查，安全自动修复）。官方 repository-plugin（.dsh-plugin 格式）
- [zsyu9779/dsh-desktop](https://github.com/zsyu9779/dsh-desktop) ★3 — Unofficial cross-platform desktop app for DeepSeek Harness. Native Wails shell for the DSH Web UI on macOS, Windows, and Linux.
- [Void0312Aurora/dsh-desktop-electron](https://github.com/Void0312Aurora/dsh-desktop-electron) ★3 — Cross-platform Electron desktop shell for the DSH Web GUI: tray-resident standalone window over your own dsh web, no bundled Node runtime
- [omdsh-dev/dsh-hub-workshop](https://github.com/omdsh-dev/dsh-hub-workshop) ★3 — Public DSH Hub Workshop catalog and feed projection
- [william-jin-cmu/dsh-companion](https://github.com/william-jin-cmu/dsh-companion) ★3 — DeepSeek Harness 的常驻桌面助手：全局唤起、定时自动化、快捷回复、插件市场
- [HeiGeAi/deepseek-harness-skin](https://github.com/HeiGeAi/deepseek-harness-skin) ★3 — DeepSeek Harness 换肤系统：21 套内置皮肤 + 一张图生成整套配色的自定义皮肤。数据源驱动，保对比度推导，构建期校验可读性。
- [lwmxiaobei/dsh-plugins](https://github.com/lwmxiaobei/dsh-plugins) ★3 — DeepSeek Harness 社区插件目录，自动汇总并基础校验 GitHub 插件，支持搜索、筛选、双语详情与最新版本安装命令复制。Community directory for DeepSeek Harness plugins with automated discovery, basic validation, search, filters, bilingual details, and latest version install commands.
- [chen-001/dsh-chat-width](https://github.com/chen-001/dsh-chat-width) ★3 — Adjust the width of dsh's reply.
- [Fisfzy/zotero-harvest](https://github.com/Fisfzy/zotero-harvest) ★3 — Zotero 文献采集入库插件（DSH external plugin）：多源检索（OpenAlex/arXiv/Crossref/Europe PMC/Semantic Scholar）+ OA 下载链接解析（Unpaywall）+ 充分性审计 + 入库本地 Zotero + 触发 zotero-wave-rag 重建
- [paean-ai/8x-skills](https://github.com/paean-ai/8x-skills) ★3
- [ZASENJC/dsh-plugins-store](https://github.com/ZASENJC/dsh-plugins-store) ★3 — 自动收录和分类 GitHub dsh-plugin Topic 项目的静态目录网站
- [entireyu/dsh-launcher](https://github.com/entireyu/dsh-launcher) ★3 — DeepSeek Harness Launcher（DSH 安装启动助手），由DSH + DS-V4-Pro-0813开发的tauri程序。
- [rainforest888/dsh-plugins-raincode](https://github.com/rainforest888/dsh-plugins-raincode) ★3 — dsh plugin: DeepSeek Harness 的模型层 = raincode(模型池/缓存/重试) + /skills 浏览
- [hikariming/dshfind](https://github.com/hikariming/dshfind) ★3 — DSH (DeepSeek Harness) 原理学习、插件市场与最佳实践 · Learn DSH principles, plugin marketplace & best practices
- [moduqishi/GrassVison](https://github.com/moduqishi/GrassVison) ★3 — 给 DeepSeek 等纯文本大模型外挂图像理解能力的实现无感添加视觉能力。提供 OpenAI 兼容的 API，自动将图片请求交给视觉模型分析，再将结构化结果注入文本模型，使增强后的模型体验接近原生多模态。
- [openma-ai/deepseek-harness-tui](https://github.com/openma-ai/deepseek-harness-tui) ★3 — TUI Plugin of DeepSeek Harness
- [kejixiaoliang/awesome-dsh-plugins](https://github.com/kejixiaoliang/awesome-dsh-plugins) ★2 — DeepSeek Harness (DSH) 插件精选目录 — 14 类 280+ 个社区插件，覆盖 MCP / Skill / TUI / 多 Agent / 上下文记忆 / UI 皮肤，点链接直达仓库。Curated directory of dsh plugins for DeepSeek Harness.
- [NEXTINDIE/DeepSeek-Harness-for-VS-Code](https://github.com/NEXTINDIE/DeepSeek-Harness-for-VS-Code) ★2 — Use DeepSeek Harness in VS Code like ChatGPT/Copilot: @dsh in native chat, standalone views, cross-project sessions, shared via DSH API. Auto-starts server.
- [sjscy05/deepseek-harness-vision-plugin](https://github.com/sjscy05/deepseek-harness-vision-plugin) ★2 — vision_read tool: lets the text-only DeepSeek main model read images through a configurable vision sub-model (OpenAI-compatible / Anthropic / Gemini APIs). Scratch plugin for DeepSeek Harness.
- [renat3u/dsh-paseo](https://github.com/renat3u/dsh-paseo) ★2 — DSH 的paseo插件扩展支持
- [Lixiaoyiao/deepseek-harness-action](https://github.com/Lixiaoyiao/deepseek-harness-action) ★2 — Community GitHub Action for DeepSeek Harness — AI Code Review · CI Diagnosis · Auto Fix · Issue → PR
- [ccch1mneyyy/dsh-working-activity](https://github.com/ccch1mneyyy/dsh-working-activity) ★2 — DSH 实时模型工作状态行：俏皮思考文案、运行中的工具、回合总结、自我叙述（⏵）— 用于 TUI 提示栏与 Web UI
- [emredeveloper/deepseek-harness-huggingface](https://github.com/emredeveloper/deepseek-harness-huggingface) ★2 — DeepSeek Harness tools for discovering models on Hugging Face Hub.
- [hisaniwo/dsh-ergonomics](https://github.com/hisaniwo/dsh-ergonomics) ★2 — DSH 会话人体工学：/new 一键新会话 + 输入历史 ↑↓ 回溯
- [vvlife/awesome-deepseek-harness-plugins](https://github.com/vvlife/awesome-deepseek-harness-plugins) ★2 — A curated list of plugins, tools, skins, and extensions for DeepSeek Harness (DSH).
- [KnCRJVirX/dsh-desktop](https://github.com/KnCRJVirX/dsh-desktop) ★2 — Desktop wrapper for the DeepSeek Harness (DSH). Deepseek Haeness 的 Electron 桌面端封装。
- [mrbbbaixue/dsh-desktop](https://github.com/mrbbbaixue/dsh-desktop) ★2 — .NET 10 WPF + WebView2 desktop launcher for DeepSeek Harness (dsh): managed child process, tray controls, HiDPI, native title bar theme following
- [yauntyour/DSH-for-VSC](https://github.com/yauntyour/DSH-for-VSC) ★2 — 把 DeepSeek Harness（DSH）的 WebUI 搬进 VS Code：编辑器内嵌面板 + 侧边栏控制台，服务离线自动拉起，日志随时可查。
- [kevenxz/dsh-desktop](https://github.com/kevenxz/dsh-desktop) ★2 — Windows desktop client for DeepSeek Harness — native window, tray, shared DSH profiles and sessions.
- [Tieboyh/dsh-session-search](https://github.com/Tieboyh/dsh-session-search) ★2 — Index-free cross-agent session search for DeepSeek Harness
- [hyls9527/dsh-plugins](https://github.com/hyls9527/dsh-plugins) ★2 — Ecosystem plugins for DeepSeek Harness: bounded cross-session memory and skill lifecycle curation, ported from hermes-agent. Tagged dsh-plugin.
- [Tokimorphling/tokilake-ai-gateway](https://github.com/Tokimorphling/tokilake-ai-gateway) ★2 — Self-hosted AI gateway for distributed local LLM GPUs. OpenAI-compatible API with NAT traversal, WebSocket/QUIC tunnels, Ollama/vLLM/SGLang workers.
- [JustGenius-s/DSH-Plugs](https://github.com/JustGenius-s/DSH-Plugs) ★2 — DSH Plugins Cellection
- [Yuuz12/dsh-webui-auth](https://github.com/Yuuz12/dsh-webui-auth) ★2 — Persistent auth plugin for DeepSeek Harness WebUI: enforce login at the HTTP/transport layer (resources, /api, WebSocket) — unbypassable via devtools, zero dependencies.
- [PerryLink/dsh-plugin-guide](https://github.com/PerryLink/dsh-plugin-guide) ★2 — Everything you need to build DeepSeek Harness plugins: official docs archive (EN/ZH), Cordis primer, 15-repo community deep-dive, 20+ battle-tested pitfalls - plus the dsh-plugin-guide agent skill.
- [GooodWei/context-vista](https://github.com/GooodWei/context-vista) ★2 — 为 DeepSeek Harness 提供右侧悬浮栏以及 /context 命令，用环形图实时展示当前上下文 token 用量与分配，compact指令效果，同时支持估算费用消耗，对标 Claude Code 的 /context。
- [InklingYoshi584/dsh-tool-hashline](https://github.com/InklingYoshi584/dsh-tool-hashline) ★2 — Hash-anchored read/edit/grep tools for DeepSeek Harness: every line carries a content hash, stale anchors are rejected before touching the file.
- [Sunrisepeak/dsh-index](https://github.com/Sunrisepeak/dsh-index) ★2 — DeepSeek Harness Plugin and Agent Profile Package Index - Install dsh-plugin with just one command
- [HarcoChen/dsh-vsc-integration](https://github.com/HarcoChen/dsh-vsc-integration) ★2 — Deepseek-Harness Vscode Integration
- [weijiafu14/pi2dsh](https://github.com/weijiafu14/pi2dsh) ★2 — Bridge the Pi and DeepSeek Harness ecosystems: one Pi Host ABI runs unmodified Pi extensions as native DSH plugins. 打通 Pi 与 DSH 生态。
- [omdsh-dev/dsh-github-integration](https://github.com/omdsh-dev/dsh-github-integration) ★2
- [dpskh/dsh-a2a](https://github.com/dpskh/dsh-a2a) ★2 — Agent2Agent mesh for the Harness
- [TYEclipse/dsh-webfetch](https://github.com/TYEclipse/dsh-webfetch) ★2 — Web page reader for DeepSeek Harness (dsh): fetch any URL and extract clean Markdown / plain text plus a link inventory - zero runtime dependencies, read-only
- [Scorp1o117/dsh-tool-vision](https://github.com/Scorp1o117/dsh-tool-vision) ★2 — Vision model for DeepSeek Harness | DeepSeek Harness 外置视觉模型插件
- [MashedPotato817/dsh-git-plugin](https://github.com/MashedPotato817/dsh-git-plugin) ★2 — Git workflow plugin for DeepSeek Harness: slash commands and read-only git tools
- [Yihong89/dsh-plugins](https://github.com/Yihong89/dsh-plugins) ★2 — DeepSeek Harness (DSH) plugins. First: dsh-usage-report — per-session token usage & estimated cost (/usage + usage_report), priced from the DeepSeek pricing table.
- [Beants/dsh-trellis](https://github.com/Beants/dsh-trellis) ★2 — Trellis workflow integration for DeepSeek Harness: Trellis skills, /trellis commands, and .trellis scaffolding
- [Mappedinfo/PlainDeck](https://github.com/Mappedinfo/PlainDeck) ★2 — Local-first, Git-native visual slide editor with plain JSON sources.
- [shiningsprk-arch/dsh-context-viewer](https://github.com/shiningsprk-arch/dsh-context-viewer) ★2 — DeepSeek Harness 上下文查看器：浏览思考链、shell 命令、工具调用与结果的桌面应用
- [Qintsg/dsh-safe-delete](https://github.com/Qintsg/dsh-safe-delete) ★2 — Safe delete plugin for DeepSeek Harness (DSH): move files to trash / staging area instead of permanent removal, with restore and purge support.
- [zzh-newlearner/dsh-postmortem](https://github.com/zzh-newlearner/dsh-postmortem) ★2 — Local-first failure postmortems for DeepSeek Harness sessions.
- [HackSing/dsh-plugins](https://github.com/HackSing/dsh-plugins) ★2 — A bilingual, continuously maintained directory of plugins for DeepSeek Harness (DSH).
- [HaoyueQin/deepseek-harness-desktop](https://github.com/HaoyueQin/deepseek-harness-desktop) ★2 — A desktop shell for DeepSeek Harness — the pluggable AI agent harness from DeepSeek. Wrap the official dsh web UI into a native-feeling, always-on desktop app. / 为 DeepSeek Harness（DeepSeek 开源的可插拔 AI Agent harness）打造的桌面应用壳，把官方 dsh web 界面包装成原生质感、常驻后台的桌面应用。
- [NoWint/Oh-My-DSH](https://github.com/NoWint/Oh-My-DSH) ★2 — 🐋 DeepSeek Harness 插件精选集 · 300+ dsh-plugin 收录 · 22 大分类
- [KhanZou/Deepseek-Harness-as-Desktop](https://github.com/KhanZou/Deepseek-Harness-as-Desktop) ★2 — Turn DeepSeek Harness into a Codex-style desktop app: native WebView2 shell, system tray, auto-start, Windows toasts, and a Desktop settings tab with a one-of-N skin center.
- [AprilWizard/dsh-multi-cot](https://github.com/AprilWizard/dsh-multi-cot) ★2 — Multi-CoT plugin for DeepSeek Harness: multi-sampled test-time compute, internal voting, and a plan/execute/review workflow
- [dbydd/dsh-onlyne](https://github.com/dbydd/dsh-onlyne) ★2 — IM gateway for DeepSeek Harness agents — send and receive QQ, WeChat, Feishu and Telegram messages from dsh sessions.
- [omdsh-dev/dsh-fun-ticker](https://github.com/omdsh-dev/dsh-fun-ticker) ★2 — DSH 行情跑马灯插件：可自选标的的加密/汇率/A股/指数/港美股跑马灯，免 key 数据源，宿主代理+缓存
- [384961890-ui/pawin-brain-deepseek-harness](https://github.com/384961890-ui/pawin-brain-deepseek-harness) ★2 — A brain-inspired runtime for DeepSeek Harness agents — remember, self-correct, learn. v0.1 ships memory (injection, notes, recall), 100% covered.
- [Andy8647/dsh-auto-approval](https://github.com/Andy8647/dsh-auto-approval) ★2
- [SeverusZh/dsh-notify-windows](https://github.com/SeverusZh/dsh-notify-windows) ★2 — DeepSeek Harness 插件：任务完成时发送 Windows 系统通知
- [SnowCrescenter-tech/dsh-launcher](https://github.com/SnowCrescenter-tech/dsh-launcher) ★2 — DeepSeek Harness 一键启动器 | Windows 便携免安装版 - One-click portable launcher for DeepSeek Harness (no Node.js, no pnpm, no CLI)
- [xinCodes/deepseek-billing-plugin](https://github.com/xinCodes/deepseek-billing-plugin) ★2 — DeepSeek Harness (DSH) 插件：DeepSeek 官方 API 余额与当前会话费用估算
- [WardLu/shadow-vision](https://github.com/WardLu/shadow-vision) ★2 — Open-source MCP vision server that gives text-only LLMs and AI agents image understanding, OCR, visual analysis, UI inspection, and multimodal capabilities.
- [yyh-001/dsh-expression](https://github.com/yyh-001/dsh-expression) ★2 — 找得到、发得出 —— DSH 表情包插件：语义搜图，只发真实文件，走 companion QQ 通道
- [hnmrxz/dsh-plugin-deepseek-balance](https://github.com/hnmrxz/dsh-plugin-deepseek-balance) ★2 — 在 DeepSeek Harness (dsh) 底部状态栏实时显示 DeepSeek 账户余额。
- [boNeXY226/dsh-cost-chip](https://github.com/boNeXY226/dsh-cost-chip) ★2 — DeepSeek Harness (dsh) 插件：/cost 查看每个会话花费 + 可拖拽的悬浮费用胶囊
- [15828148/dsh-portable-launcher](https://github.com/15828148/dsh-portable-launcher) ★2 — One-click portable launcher for DeepSeek Harness (dsh) Web UI on Windows. Auto-installs Node.js and dsh with China mirror fallback, 3-stage progress with retries and resume, zero-download fast path when ready. No admin needed.
- [Scorp1o117/dsh-soul-md](https://github.com/Scorp1o117/dsh-soul-md) ★2 — Soul.md persona for DeepSeek Harness | DeepSeek Harness 人设卡插件
- [whiteguo233/dsh-cc-connect](https://github.com/whiteguo233/dsh-cc-connect) ★2 — 通过cc connect远程使用dsh
- [vcxmug/dsh-enhance](https://github.com/vcxmug/dsh-enhance) ★2 — Native Firecrawl tools for DeepSeek Harness agents via MCP — one composition row, zero custom code
- [lordqyxz/dsh-ark-quota](https://github.com/lordqyxz/dsh-ark-quota) ★2 — 火山方舟订阅套餐剩余额度 DSH 侧边栏小组件（宿主代理 GetCodingPlanUsage + 浏览器 widget + 免重启 cookie 刷新工具）
- [cccakeee/awesome-dsh-plugins](https://github.com/cccakeee/awesome-dsh-plugins) ★2 — A curated, evidence-led directory of DeepSeek Harness (DSH) plugins: verified loadable extensions, skills, and permission-aware installation guidance.
- [oitsukiii/deepseek-harness-lan](https://github.com/oitsukiii/deepseek-harness-lan) ★2 — Run DeepSeek Harness Web UI on your home LAN — 4 minimal patches + one-click apply/revert scripts | 让 DeepSeek Harness 的 Web UI 在局域网跑起来
- [techysy/deepseek-harness-fnos](https://github.com/techysy/deepseek-harness-fnos) ★2 — DeepSeek Harness (DeepSeek 官方 agent 浏览器 UI) fnOS 应用 — 本地常驻服务, 官方统一网关接入
- [openma-ai/deepseek-harness-typescript-sdk](https://github.com/openma-ai/deepseek-harness-typescript-sdk) ★2 — TypeScript SDK for DeepSeek Harness (dsh) — drive AI agent turns in a runtime subprocess over JSON-RPC stdio. Mirrors the official Python SDK.
- [MorGogh/widget-dock](https://github.com/MorGogh/widget-dock) ★2 — DSH plugin: draggable widget panel (balance, tokens, stats, commands, goal, cost) for DeepSeek Harness
- [Fisfzy/zotero-wave-rag](https://github.com/Fisfzy/zotero-wave-rag) ★2 — 面向 Zotero 论文库的浪潮式 RAG 细节检索系统 —— DSH 外部插件。移植 VCPToolBox 浪潮语义动力学思想（标签河道图传播/虫洞跳转/钟型阻尼/Ω重排），配 BM25+RRF 混合检索、claim-evidence 忠实度校验、两级增量索引
- [xuender/dsh-history](https://github.com/xuender/dsh-history) ★2 — Recall and re-run the current session's command history with ↑/↓ keys in the DSH Web composer.
- [Elohia/pi-mm-vision](https://github.com/Elohia/pi-mm-vision) ★2 — Synesthesia Encoder (通感编码器) — give any text-only LLM (DeepSeek, etc.) the ability to see images via structured spatial text encoding. A Pi agent extension.
- [Scorp1o117/dsh-tdai-memory](https://github.com/Scorp1o117/dsh-tdai-memory) ★2 — Agent memory for DeepSeek Harness | DeepSeek Harness 记忆插件
- [renat3u/tonghuashun-webui](https://github.com/renat3u/tonghuashun-webui) ★2 — 仿同花顺的webui插件
- [1690834643/dsh-usage-dashboard](https://github.com/1690834643/dsh-usage-dashboard) ★2 — DeepSeek Harness (dsh) web plugin: API balance + today's spend widget in the sidebar footer. /api/dsh-usage route + React client bundle, no build step required.
- [MaimoryLab/dib](https://github.com/MaimoryLab/dib) ★2 — DSH-in-Box: A DSH runtime and plugin packager
- [orxz/deepseek-harness-themes](https://github.com/orxz/deepseek-harness-themes) ★2 — A collection of UI themes for deepseek-harness.
- [Bandersnatch0x/design-playbook](https://github.com/Bandersnatch0x/design-playbook) ★1 — Design I/O plugin for Claude Code & coding agents — declarations + contracts that make UI generation constrained, reviewable, and recirculatable. Not a style pack; composes with ui-ux-pro-max + frontend-design.
- [xing-shuyin/ds-web-ui](https://github.com/xing-shuyin/ds-web-ui) ★1 — My DeepSeek Harness Web UI
- [MashedPotato817/dsh-tool-browser](https://github.com/MashedPotato817/dsh-tool-browser) ★1 — Native browser automation tools for DeepSeek Harness, powered by Playwright + Edge
- [schhaohao/dsh-file-explorer](https://github.com/schhaohao/dsh-file-explorer) ★1 — dsh-file-explorer
- [TohsakaRIN521/dsh-academic-skill](https://github.com/TohsakaRIN521/dsh-academic-skill) ★1 — academic-paper-completion 旨在补全你将要发表的文章中除了理论计算数值分析的其余部分,减少或消除ai引用幻觉
- [sikwoxy/dsh-tool-reqpipe](https://github.com/sikwoxy/dsh-tool-reqpipe) ★1 — reqpipe — DeepSeek Harness 需求流水线插件（7 tools）+ Python CLI（需求→方案→评审→开发）
- [baixinghao/intent-gate](https://github.com/baixinghao/intent-gate) ★1 — Stop AI coding agents from guessing. MCP server + Claude Code plugin that enforces intent alignment BEFORE coding: PRD → intent-confidence gate → Mermaid contracts (state machines / sequence diagrams / decision tables) → mechanical lint with zero CRITICAL → then code. Human-in-the-loop, file-persisted, zero-config.
- [rsagacom/dsh-ajw](https://github.com/rsagacom/dsh-ajw) ★1 — DS安甲网 (ds.ajw.cn) · 为你的 DeepSeek Harness 机器人 安装上所需功能的装甲吧 — 每日聚合 DeepSeek Harness / DSH 插件生态开源项目
- [kyorakuyk/dsh-desktop](https://github.com/kyorakuyk/dsh-desktop) ★1 — DeepSeek Harness desktop client — Tauri shell over the dsh web host
- [fff122/dsh-task-checklist](https://github.com/fff122/dsh-task-checklist) ★1 — Local task checklist plugin for DeepSeek Harness.
- [Jinsong-Zhou/safe-find-dsh-plugins](https://github.com/Jinsong-Zhou/safe-find-dsh-plugins) ★1 — Discover and install the best DeepSeek Harness plugins for a user's task
- [FEOH333/dsh-delegate](https://github.com/FEOH333/dsh-delegate) ★1 — dsh-delegate: model-aware subagent delegation for DeepSeek Harness — per-call models, depends_on dependency gating, per-child personas, a durable run roster, audit events, and conversation-flow tool cards. | 给 DeepSeek Harness 的子代理委派加上：按次选模型、依赖门控、角色人设、任务花名册。
- [t1yOS/t1y-skills](https://github.com/t1yOS/t1y-skills) ★1 — expert skill package for AI coding assistants working with the t1yOS Serverless platform.
- [sb1733831438-maker/DSH-closerAI](https://github.com/sb1733831438-maker/DSH-closerAI) ★1 — CloserAI - a local-first, model-agnostic, permission-transparent desktop AI workbench built on DeepSeek Harness.
- [Proton1917/dsh-live-stats](https://github.com/Proton1917/dsh-live-stats) ★1 — Live token estimates and true streaming TPS for DeepSeek Harness Web
- [xlight/deepseek-visionary](https://github.com/xlight/deepseek-visionary) ★1 — 使用 DeepSeek 官方多模态视觉模型让你的 Agent 不再眼瞎（支持 DSH、Zed、OpenCode、Codex、Claude Code、Cursor、Claude Desktop）
- [acosmi/dsh-plugin](https://github.com/acosmi/dsh-plugin) ★1 — Community plugin collection for DeepSeek Harness (DSH)
- [czzzlq/deepseek-harness-background](https://github.com/czzzlq/deepseek-harness-background) ★1 — deepseek-harness背景自定义
- [dpskh/dsh-checkpoint](https://github.com/dpskh/dsh-checkpoint) ★1 — Mark an exploration start in the session; pairs with rewind to fold the exploration out of context.
- [UynajGI/dsh-ssh](https://github.com/UynajGI/dsh-ssh) ★1 — SSH remote-execution plugin for DeepSeek Harness: ProxyJump chain, SFTP filesystem, subprocess and PTY over ssh2
- [crayonlu/dsh-web-search-tavily](https://github.com/crayonlu/dsh-web-search-tavily) ★1 — Tavily-backed web search provider for DeepSeek Harness (ctx.web) — no DeepSeek API key required
- [TiankunDai/dsh-vision-LMstudio](https://github.com/TiankunDai/dsh-vision-LMstudio) ★1 — 让你能通过deepseek harness调用LM studio加载的本地视觉模型
- [FlytoMAYDAY80/dsh-pet](https://github.com/FlytoMAYDAY80/dsh-pet) ★1 — 🐋 DSH 有声桌宠：悬浮桌面的 DeepSeek 小鲸鱼，不打开 DSH 也能实时感知会话状态（需要确认/工作中/完成/空闲/离线），支持音效提醒与零代码定制素材
- [kinyokun/dsh-session-import](https://github.com/kinyokun/dsh-session-import) ★1 — DeepSeek Harness 会话日志导入插件，可将session log还原为对话。
- [hnmrxz/dsh-plugin-sysmon](https://github.com/hnmrxz/dsh-plugin-sysmon) ★1 — Local system resource monitor (CPU / memory / disk / load / uptime) for the DeepSeek Harness bottom status bar.
- [PerryLink/dsh-skill-pack-security](https://github.com/PerryLink/dsh-skill-pack-security) ★1 — Security-audit skill pack for DeepSeek Harness (dsh): 5 agent skills - secret scan, dependency audit, supply-chain review, prompt-injection review, audit orchestration. Zero runtime code. Apache-2.0.
- [qingzhuo-cn/agent-fix](https://github.com/qingzhuo-cn/agent-fix) ★1 — Universal repair skill & CLI for AI coding agents (Claude Code, Codex, OpenCode, Hermes) — npm postinstall, GUI PATH, Node version, registry, auth, DeepSeek provider
- [Civitasv/dsh-plugin-colorscheme](https://github.com/Civitasv/dsh-plugin-colorscheme) ★1 — Colorscheme Plugin For DeepSeek Harness
- [moduqishi/dsh-opencode-usage](https://github.com/moduqishi/dsh-opencode-usage) ★1 — DeepSeek Harness (dsh web) plugin: opencode.ai 5h/week/month quota usage progress in the session header, frosted-glass detail panel, model-channel filtering.
- [jark006/RemoteOps](https://github.com/jark006/RemoteOps) ★1 — RemoteOps 是一个面向远程系统维护和嵌入式 Linux 开发的 MCP 工具。
- [rabbitknight/dsh-tui](https://github.com/rabbitknight/dsh-tui) ★1 — DeepSeek HarnessTerminal UI.
- [kelai141/dsh-host-web-compat](https://github.com/kelai141/dsh-host-web-compat) ★1 — dsh 宿主插件——经 webserver 钩子向页面注入旧内核浏览器 polyfill。
- [flee42/dsh-desktop](https://github.com/flee42/dsh-desktop) ★1 — DeepSeek Harness（DSH）的桌面版启动器
- [hnmrxz/dsh-plugin-usage-dashboard](https://github.com/hnmrxz/dsh-plugin-usage-dashboard) ★1 — DeepSeek usage & cost dashboard for the DSH bottom status bar: per-session token/cost aggregation with low-balance budget alert.
- [omdsh-dev/dsh-tool-browser](https://github.com/omdsh-dev/dsh-tool-browser) ★1
- [YinFengWindy/dsh-plugin-shiori-role](https://github.com/YinFengWindy/dsh-plugin-shiori-role) ★1
- [DoggyHU/dsh4vscode](https://github.com/DoggyHU/dsh4vscode) ★1 — DSH Chat for VS Code — DeepSeek Harness chat windows inside VS Code (OpenCode-style independent sessions, model auto-routing)
- [studyzy/dsh-suggest-prompt](https://github.com/studyzy/dsh-suggest-prompt) ★1 — dsh-plugin suggest next prompt
- [Alyosha28/deep_option](https://github.com/Alyosha28/deep_option) ★1 — 港美股期权研究与风险 Agent（公开 source-available 原型）
- [AdamPlatin123/dsh-tonghuashun](https://github.com/AdamPlatin123/dsh-tonghuashun) ★1 — DSH harness 客户端插件：同花顺行情终端风格皮肤 + 代码量 K 线行情面板（ui-skin-ths + ui-market）
- [LJH-snow/dsh-tool-github](https://github.com/LJH-snow/dsh-tool-github) ★1 — GitHub tools for DeepSeek Harness: repo lookup, issue listing, code search, and PR drafts
- [anweat/dsh-plugin-dev-guide](https://github.com/anweat/dsh-plugin-dev-guide) ★1 — DSH (DeepSeek Harness) plugin development & publishing guide: from first plugin to auto-publish to the community
- [Babulubobo/dsh-codex-oauth](https://github.com/Babulubobo/dsh-codex-oauth) ★1 — use your codex subscription in deepseek harness
- [Gandufu/dsh-plugin](https://github.com/Gandufu/dsh-plugin) ★1 — DeepSeek Harness 插件集合｜齐天大圣双主题皮肤，支持亮暗模式、响应式布局与热插拔
- [FantasyStarry/dsh-token-stats](https://github.com/FantasyStarry/dsh-token-stats) ★1 — 按自然日统计 LLM token 用量（按提供商/模型/会话，含子代理对账）：侧边栏常驻小部件 + 设置页"用量统计"分区 + 插件配置表单 + /usage 命令
- [hawkongz/doubao-vision-dsh](https://github.com/hawkongz/doubao-vision-dsh) ★1 — 让纯文本模型通过桌面豆包看见聊天图片的 DeepSeek Harness 宿主插件(CDP 桥接,全预设生效,识别可取消)
- [justinhuangai/oh-my-deepseek-harness](https://github.com/justinhuangai/oh-my-deepseek-harness) ★1 — 更易用的 DeepSeek Harness ，一键安装，原生桌面客户端，自带精选dsh插件和皮肤...全部开箱即用。
- [hccccc01333/dsh-excel-chat](https://github.com/hccccc01333/dsh-excel-chat) ★1 — dsh-excel-chat — talk to Excel in DeepSeek Harness: create, edit, repair, and verify spreadsheets by conversation (cells, formulas, styles, filters, tables, charts); every edit is auto-validated.
- [crayonlu/dsh-web-search-firecrawl](https://github.com/crayonlu/dsh-web-search-firecrawl) ★1 — Firecrawl-backed web search provider for DeepSeek Harness (ctx.web) — no DeepSeek API key required
- [BruceWu1126/dsh-web-background](https://github.com/BruceWu1126/dsh-web-background) ★1 — DeepSeek Harness Web UI background customization plugin
- [dingkaihu63/dsh-robotic-harness](https://github.com/dingkaihu63/dsh-robotic-harness) ★1 — Robotic Harness: embodied-intelligence research tools for DeepSeek Harness - robot asset inspection, MuJoCo pick-place simulation with fault injection, evidence-based diagnostics, and reproducible experiment bundles.
- [qing3a/dsh-plugin-verify](https://github.com/qing3a/dsh-plugin-verify) ★1 — 验证 DSH 插件的 CLI：一条命令跑 mock-llm 完整 agent 循环，检查 waterfall 链与零副作用，产出验证报告
- [dsh-plugin/dsh-plugin.github.io](https://github.com/dsh-plugin/dsh-plugin.github.io) ★1 — DeepSeek Harness community plugin workshop and directory
- [PerryLink/dsh-output-styles](https://github.com/PerryLink/dsh-output-styles) ★1 — Claude Code outputStyles for DeepSeek Harness - session-scoped, durable, runtime-switchable model output styles (/style command, output_style storage domain, systemPrompt injection)
- [feiyang-dev/DeepSeek-Harness-Desktop](https://github.com/feiyang-dev/DeepSeek-Harness-Desktop) ★1 — 一个 Electron 桌面壳，内嵌官方 DeepSeek Harness Web UI。启动时让用户选择安装模式，自动完成环境检测、安装、服务拉起，以百分比进度条展示各阶段，服务就绪后打开主界面。
- [hrhgit/deepseek-harness-plugin-manager](https://github.com/hrhgit/deepseek-harness-plugin-manager) ★1 — Web plugin manager for DeepSeek Harness (DSH): inspect, search, group, enable, and disable Cordis plugins.
- [xinmo114514/dsh-usage-widget](https://github.com/xinmo114514/dsh-usage-widget) ★1 — DSH (DeepSeek Harness) 持久化 Web 插件：Token 用量统计悬浮窗 —— 可拖动窗口/圆点、曲线/热力图、总 tokens 大数字；宿主半聚合会话日志并提供 /usage/api/snapshot
- [jLeon-account/dsh-client-usage](https://github.com/jLeon-account/dsh-client-usage) ★1 — DeepSeek Harness（DSH）网页客户端插件：实时展示会话级 API token 用量与估算费用，支持缓存命中/未命中分桶、上下文占用，自动适配 DeepSeek 峰谷计价与调价｜DSH web plugin: real-time token usage & cost estimate
- [Yuuz12/dsh-vision-helper](https://github.com/Yuuz12/dsh-vision-helper) ★1 — DeepSeek Harness Vision Helper/DeepSeek Harness 视觉辅助方案
- [PeanutsDou/peanut-dsh-plugin](https://github.com/PeanutsDou/peanut-dsh-plugin) ★1 — PeanutsDou 的 DeepSeek Harness 插件合集：dsh-launcher 桌面壳等个人维护插件
- [haytham818/dsh-notify](https://github.com/haytham818/dsh-notify) ★1 — DSH system notification plugin: desktop notifications when an agent finishes a task, errors, asks a question, or waits for approval (dsh 系统通知插件)
- [echo-escape/dsh-workbench](https://github.com/echo-escape/dsh-workbench) ★1 — 这是一个用于展示和分享为开发的各类插件（Plugins）与技能（Skills）的集合。您可以在这里浏览并发现能增强您 DSH 体验的扩展！
- [TYEclipse/dsh-plugins-hub](https://github.com/TYEclipse/dsh-plugins-hub) ★1 — Independent plugin index for DeepSeek Harness (dsh) — curated directory of community plugins, updated daily
- [zeroa234/dsh-preset-minimal-windows](https://github.com/zeroa234/dsh-preset-minimal-windows) ★1 — Minimal Windows agent preset + Git Bash tool for DeepSeek Harness: gitbash & pwsh & str_replace_editor, drop-in replacement for the official minimal preset on win32 / DeepSeek Harness 极简模式（Windows）Agent 预设 + Git Bash 工具：Git Bash + PowerShell + str_replace_editor 三工具，官方 minimal 预设的 win32 平替
- [ShawnSiao/dsh-credentials-keychain](https://github.com/ShawnSiao/dsh-credentials-keychain) ★1 — Planned OS-backed credential provider for DeepSeek Harness
- [Spirit4471/multimodal-bridge](https://github.com/Spirit4471/multimodal-bridge) ★1 — multimodal-bridge 是一个多模态能力桥：把 Qwen 的视觉理解（Qwen-VL）与图像生成（Qwen-Image）带给没有原生多模态能力的纯文本模型（如 DeepSeek）。它有两种形态、同一套后端：  MCP Server（qwen_vision / qwen_generate 工具）：任何支持 MCP 的宿主（Claude Code、Kimi Code 等）直接挂载； DSH 插件（npm 包 dsh-multimodal-bridge，DeepSeek Harness bundle）：dsh plugin add 一行安装，含模型自动 fallback、尺寸自适应与图片结果卡片。
- [detpecca/DSH-Wiki](https://github.com/detpecca/DSH-Wiki) ★1
- [PerryLink/dsh-session-pin](https://github.com/PerryLink/dsh-session-pin) ★1 — Pin sessions in the DeepSeek Harness (DSH) web sidebar - dual-face plugin with a hover pin badge, durable pinning, and top ordering
- [Jesse-njx/dsh-cowork](https://github.com/Jesse-njx/dsh-cowork) ★1 — READ + WRITE for office documents & notebooks in DeepSeek Harness — doc_read/doc_write tools (xlsx, pdf, docx, pptx, ipynb) plus MCP server and CLI
- [fff122/dsh-prompt-presets](https://github.com/fff122/dsh-prompt-presets) ★1 — Local reusable prompt presets for DeepSeek Harness.
- [krislavten/ai-sdk-provider-dsh](https://github.com/krislavten/ai-sdk-provider-dsh) ★1 — AI SDK provider that drives a DeepSeek Harness (dsh) runtime as a LanguageModelV3 — works on AI SDK v6 and v7
- [coderPerseus/dsh-hub](https://github.com/coderPerseus/dsh-hub) ★1 — Discover The Best DSH plugins
- [Deklan-Deng/Dcode](https://github.com/Deklan-Deng/Dcode) ★1 — Deepseek-harness 桌面端
- [Loong-wql/Build-HOS-mcp](https://github.com/Loong-wql/Build-HOS-mcp) ★1 — 适用于Codex的鸿蒙应用开发插件（HarmonyOS application development plugin ）
- [wulun811/LiuHe](https://github.com/wulun811/LiuHe) ★1 — LLM-native code toolkit: Rust multi-language parser (tree-sitter) + 44 MCP tools for atomic editing, impact analysis, reference tracing and deterministic zero-LLM code quality gates. Built for the handless, eyeless, memoryless LLM.
- [Shmilyol/galgame-skin](https://github.com/Shmilyol/galgame-skin) ★1
- [lujoai/Lujo-MCP](https://github.com/lujoai/Lujo-MCP) ★1 — 基于 MCP 协议的 AI 调试追踪平台，提供会话管理、链路追踪、错误分析与 Dashboard 可视化
- [dhj-l/dsh-git-review](https://github.com/dhj-l/dsh-git-review) ★1 — DSH 动态插件：在会话头部展示工作区 git 变更文件列表，点击文件在右侧抽屉查看带语法高亮的 GitHub 风格 diff。
- [moduqishi/dsh-open-in-finder](https://github.com/moduqishi/dsh-open-in-finder) ★1 — DeepSeek Harness (dsh web) plugin: one-click open-in-Finder icon in the session header.
- [kalynnka/vscode-deepseek-harness](https://github.com/kalynnka/vscode-deepseek-harness) ★1 — Unofficial: drive your own DeepSeek Harness (dsh) as a native VS Code chat agent, beside Claude Code and Codex.
- [TQSY114514/dsh-ui-appearance](https://github.com/TQSY114514/dsh-ui-appearance) ★1 — Appearance customization plugin for DeepSeek Harness: theme color palette, background image, opacity/blur, glass effect
- [fff122/dsh-agent-arcade](https://github.com/fff122/dsh-agent-arcade) ★1 — Deterministic Agent-played Snake game for DeepSeek Harness.
- [PerryLink/dsh-composer-history](https://github.com/PerryLink/dsh-composer-history) ★1 — Terminal-style input history for the DeepSeek Harness web composer - edge-first arrow keys, draft stashing with exact restore, Esc recovery. A dsh-plugin.
- [TT-Wang/dsh-assembler](https://github.com/TT-Wang/dsh-assembler) ★1 — Vibe-assembly for DeepSeek Harness: turn a natural-language agent requirement into a composed agent preset by matching the capability catalog. Registers the /assemble command.
- [Jinsong-Zhou/dsh-html-canvas](https://github.com/Jinsong-Zhou/dsh-html-canvas) ★1 — A DeepSeek Harness plugin that turns AI-generated HTML into a click-to-edit canvas beside the chat
- [yjm110517/content-to-editable-ppt-skill](https://github.com/yjm110517/content-to-editable-ppt-skill) ★1 — Bootstrap runtime for generating multi-slide editable PowerPoint presentations from topics, documents, or outlines.
- [Ethanout/computer-use-plus](https://github.com/Ethanout/computer-use-plus) ★1 — Low-token, low-latency Windows computer-use MCP with learned shortcuts, UIA/CDP/OCR routing, and DeepSeek Harness support
- [Fisfzy/math-lean](https://github.com/Fisfzy/math-lean) ★1 — dsh-lean-prover: Lean kernel-verified math reasoning plugin (DSH Cordis)
- [ZgblKylin/dsh-terminal](https://github.com/ZgblKylin/dsh-terminal) ★1 — Integrate terminal plugin for DeepSeek Harness
- [mouliangyu/dsh-plugins](https://github.com/mouliangyu/dsh-plugins) ★1 — Community plugins for DeepSeek Harness
- [niyongsheng/free-vision-skill](https://github.com/niyongsheng/free-vision-skill) ★1 — Local‑only vision skill for macOS 本地化识图技能
- [yjm110517/visual-to-editable-ppt-skill](https://github.com/yjm110517/visual-to-editable-ppt-skill) ★1
- [vexpaer/ContextGate](https://github.com/vexpaer/ContextGate) ★1 — ContextGate — a context-folding gate plugin for DeepSeek Harness (DSH) / Cordis. Intercepts LLM request streams and folds oversized conversation history into a summary to keep context length under control.
- [white0dew/awesome-dsh-plugins](https://github.com/white0dew/awesome-dsh-plugins) ★1 — Awesome DSH Plugins: a public GitHub directory for DeepSeek Harness plugins, DSH plugins, install commands, and ecosystem discovery.
- [jasonsun29/ds-balance-card](https://github.com/jasonsun29/ds-balance-card) ★1 — DeepSeek Harness 常驻额度卡片插件:自动识别已配置的平台 API Key,显示余额与 Coding Plan 额度
- [randerous/dsh-turn-meta](https://github.com/randerous/dsh-turn-meta) ★1 — Opt-in per-step turn metadata for DeepSeek Harness — a minimal first-plugin template (dsh-plugin)
- [ang-XWBWZ/Pwiki](https://github.com/ang-XWBWZ/Pwiki) ★1 — Local-first knowledge retrieval engine for AI agents — BM25, semantic search, reranking, MCP, Pi Agent and DeepSeek Harness integration.
- [czzzlq/deepseek-harness-desktop](https://github.com/czzzlq/deepseek-harness-desktop) ★1 — deepseek-harness-desktop / deepseek-harness桌面端
- [TheChengXi/intent-flow](https://github.com/TheChengXi/intent-flow) ★1 — IntentFlow — Comment-Driven Development Framework 注释驱动开发框架：以 @intent 注释为契约的 AI 辅助开发工作流（需求/设计/执行/报告四阶段 + 状态机自动流转），提供 pi 扩展、MCP Server、CLI 三种形态
- [ShawnSiao/dsh-agent-eval](https://github.com/ShawnSiao/dsh-agent-eval) ★1 — Planned repeatable agent and plugin regression evaluation for DeepSeek Harness
- [drscrewdriver/inferglow](https://github.com/drscrewdriver/inferglow) ★1 — go 语言实现的ai 基座+ tui +server系统
- [joyfoxai/dsh-eco-router](https://github.com/joyfoxai/dsh-eco-router) ★1 — A token-efficient model-routing flywheel for the DeepSeek Harness.
- [KarlOfLaw/dsh-side-chat](https://github.com/KarlOfLaw/dsh-side-chat) ★1 — Parent-session-aware side chat plugin for DeepSeek Harness
- [Hyperionjust/Primordial-soup-](https://github.com/Hyperionjust/Primordial-soup-) ★1 — The first collision-based memory system: it doesn't retrieve old ideas — it smashes old cards into new ones.
- [TtTRz/dsh-gatedflow](https://github.com/TtTRz/dsh-gatedflow) ★1 — Gated, durable human-in-the-loop workflow engine for DeepSeek Harness.
- [omdsh-dev/toybox](https://github.com/omdsh-dev/toybox) ★1 — DSH 插件玩具箱 —— 构建链：TypeScript 源码（plugins/<id>/src/*.mts）→ 单文件 MCP 服务器产物（.dsh-plugin/server/*.mjs）
- [cute-baobao/dsh-usage-meter](https://github.com/cute-baobao/dsh-usage-meter) ★1 — DeepSeek Harness plugin: per-model daily token usage recorder (input/output/cache hits) with a Web GUI dashboard.
- [Bandersnatch0x/amber-protocol](https://github.com/Bandersnatch0x/amber-protocol) ★1 — Amber Protocol: repository-local governance for coding agents, including a DeepSeek Harness (dsh) patch overlay.
- [sunshine-lang/dsh-plugins](https://github.com/sunshine-lang/dsh-plugins) ★1 — Unified portal for DeepSeek Harness plugins by sunshine-lang: dsh-weather, dsh-pdf, dsh-plugin-template
- [yyyyukari/dsh-plugin-workshop](https://github.com/yyyyukari/dsh-plugin-workshop) ★1 — Steam Workshop-style in-app plugin browser for DeepSeek Harness (DSH) Web UI - zero-server: search, trending windows, Chinese search & bilingual translation, signature filtering, smart one-click install/uninstall
- [randerous/dsh-turn-budget](https://github.com/randerous/dsh-turn-budget) ★1 — Advisory turn step-budget reminders for DeepSeek Harness — loop convergence guard (dsh-plugin)
- [spike-faye-lei/spike-faye-lei-dsh-skills](https://github.com/spike-faye-lei/spike-faye-lei-dsh-skills) ★1 — spike-faye-lei/dsh-skills
- [TYEclipse/dsh-netdoctor](https://github.com/TYEclipse/dsh-netdoctor) ★1 — Network diagnostics toolbox for DeepSeek Harness (dsh): DNS lookup, ICMP ping, TCP port check, TLS cert check, traceroute, public IP — six read-only probes, zero runtime dependencies
- [Porphyrioon/ironlaw](https://github.com/Porphyrioon/ironlaw) ★1 — IronLaw: evidence-backed completion and repair layer for coding agents
- [Scorp1o117/dsh-plugin-marketplace](https://github.com/Scorp1o117/dsh-plugin-marketplace) ★1 — Plugin marketplace for DeepSeek Harness | DeepSeek Harness 插件市场
- [dpskh/dsh-rewind](https://github.com/dpskh/dsh-rewind) ★1 — Fold everything since the last checkpoint mark into an auto-generated report, replacing it in context while keeping the full log.
- [william-jin-cmu/dsh-artifact](https://github.com/william-jin-cmu/dsh-artifact) ★1 — dsh 插件：文件交付协议——send_artifact 工具经 tool/result meta 携带结构化描述子，任意客户端可渲染
- [SakalioLabs/dsh-code-ide](https://github.com/SakalioLabs/dsh-code-ide) ★1 — DeepSeek Harness Code IDE Plugin
- [ylwl1997/noatmark-dsh-plugin](https://github.com/ylwl1997/noatmark-dsh-plugin) ★1 — NoAtMark text hygiene as a DeepSeek Harness (dsh) plugin — sanitize untrusted text, scan invisible characters, clean LLM formatting, and escape CSV injection.
- [tttnny/DSH-Launcher](https://github.com/tttnny/DSH-Launcher) ★1 — DSH Launcher — macOS menu bar app that manages the DeepSeek Harness web service via launchd
- [ArtificialNotImbecile/dsh-context-taxonomy](https://github.com/ArtificialNotImbecile/dsh-context-taxonomy) ★1 — Logical-call context taxonomy plugin for DeepSeek Harness
- [Ericwong5021/deepseek-plugin-store](https://github.com/Ericwong5021/deepseek-plugin-store) ★1 — DeepSeek Harness 独立社区插件商店：发现、安装并提交经过验证的插件、工具与扩展。 | Independent community plugin directory.
- [omdsh-dev/omdsh](https://github.com/omdsh-dev/omdsh) ★1 — Private staging source for the Oh My DSH community distribution.
- [omdsh-dev/dsh-input-history](https://github.com/omdsh-dev/dsh-input-history) ★0 — DSH Web 输入历史插件：Ctrl+Up / Ctrl+Down 像终端一样召回与切换已发送消息，零核心改动
- [omdsh-dev/dsh-ui-progress](https://github.com/omdsh-dev/dsh-ui-progress) ★0 — DSH Web UI 会话进度插件：输入框停靠区常驻会话进度条（todos 真实进度 / 实时 token 生成速率 / 中断橘红态 / 待办提醒），零核心改动
- [ChenSheg/knowledge-from-literature-and-bilibili](https://github.com/ChenSheg/knowledge-from-literature-and-bilibili) ★0 — A tool box for literature search and analysis
- [Tokimorphling/deepseek-harness-rs](https://github.com/Tokimorphling/deepseek-harness-rs) ★0 — A rust port for deepseek's harness
- [dshiq04/dsh-notify](https://github.com/dshiq04/dsh-notify) ★0 — 面向deepseek harness的消息通知插件
- [kuailexiaozixin/fasthtml-desktop](https://github.com/kuailexiaozixin/fasthtml-desktop) ★0 — FastHTML + pywebview 桌面应用全生命周期技能（本地 HTTP + WebView2 + PyInstaller）
- [railgun0325/dsh-phone](https://github.com/railgun0325/dsh-phone) ★0 — 让 DeepSeek Harness 的 agent 跑在手机里，通过 Magisk root 原生操作安卓系统（截图/点击/滑动/开应用）+ 移动端布局 + WebView APK
- [Misaki14987/dsh-theme-taffy](https://github.com/Misaki14987/dsh-theme-taffy) ★0 — 永雏塔菲 (AceTaffy)「雏草姬之梦」dream skin — DeepSeek Harness Web UI 主题插件
- [XJungit/omdp](https://github.com/XJungit/omdp) ★0 — only my DSH plugins — monorepo of DeepSeek Harness plugin bundles
- [cyzlmh/dsh-pi-adapter](https://github.com/cyzlmh/dsh-pi-adapter) ★0 — Run pi coding-agent extensions (ExtensionAPI) inside DeepSeek Harness via a cordis plugin bridge
- [xiaoyuxiaoyuqwq/dsh-desktop](https://github.com/xiaoyuxiaoyuqwq/dsh-desktop) ★0 — DeepSeek Harness desktop shell — one-click Electron wrapper around dsh web
- [openHacking/pptkit-presentation](https://github.com/openHacking/pptkit-presentation) ★0 — End-user presentation workflows, preview application, and Agent Skill powered by PPTKit.
- [skyzhao1223/dsh-plugin-scaffold](https://github.com/skyzhao1223/dsh-plugin-scaffold) ★0 — Minimal runnable DeepSeek Harness (dsh) plugin scaffold: one model-facing tool via ctx.tools
- [SailingLoong/loongport-dsh](https://github.com/SailingLoong/loongport-dsh) ★0 — LoongPort npm setup CLI for DeepSeek Harness (dsh) OpenAI-compatible routes
- [kelai141/dsh-shell-termux](https://github.com/kelai141/dsh-shell-termux) ★0 — dsh 的安卓/Termux bash 能力提供者——显式 Termux 环境注入、探测诊断、诚实的应用域沙箱声明。
- [dshiq04/dsh-deepseek-balance](https://github.com/dshiq04/dsh-deepseek-balance) ★0 — 面向deepseek harness的余额查看插件
- [liguobao/dsh-desktop](https://github.com/liguobao/dsh-desktop) ★0 — An independent, open-source desktop wrapper for DeepSeek Harness. It starts the bundled @deepseek-ai/dsh Web UI locally and loads it in a hardened Electron window on Linux, macOS, and Windows.
- [Chungor/owlx-mcp](https://github.com/Chungor/owlx-mcp) ★0 — OwlX MCP server - live crypto structure scores, MemeSniper, token financials and recorded signal hit-rate as MCP tools for Claude, Cursor, DeepSeek Harness, Grok and any MCP client.
- [nightwhale-dev/nightwhale](https://github.com/nightwhale-dev/nightwhale) ★0 — The community power-layer for DeepSeek Harness (dsh). 夜鲲 — 吞并生态好能力,评测集筛选,只喂真正有效的增强。
- [greatwhitesharklab/dsh-plugin-subagent-manager](https://github.com/greatwhitesharklab/dsh-plugin-subagent-manager) ★0 — Model-first subagent management for the DeepSeek Harness: list the model catalog, spawn subagents with a pinned provider/model, and enumerate session subagents.
- [dmsobtl/dsh-session-analyst](https://github.com/dmsobtl/dsh-session-analyst) ★0 — DSH 插件：Agent 会话质量分析 —— 工具成功率、token 效率、冗余调用检测、跨会话回归对比。PS：上传文件有点问题，等我重新整理下
- [kanallas/api-cost-meter](https://github.com/kanallas/api-cost-meter) ★0 — DeepSeek Harness API cost meter plugin: peak/off-peak spend badge, current unit prices, official account balance
- [lispking/git-skills](https://github.com/lispking/git-skills) ★0 — A powerful Claude Code Git assistant skill that provides intelligent branch management, commit message conventions, workflow assistance, and code review guidance.
- [cnskycn/deepseek-harness-desktop](https://github.com/cnskycn/deepseek-harness-desktop) ★0 — Desktop app wrapper for DeepSeek Harness (dsh) Web UI - one-click Windows installer
- [hccccc01333/dsh-eval](https://github.com/hccccc01333/dsh-eval) ★0
- [kuailexiaozixin/tkinter-desktop](https://github.com/kuailexiaozixin/tkinter-desktop) ★0 — Tkinter/ttk 原生桌面应用全生命周期技能（MVC + pygubu .ui + SQLite + PyInstaller）
- [darker2016/WorkbuddySkillGroups4DSH](https://github.com/darker2016/WorkbuddySkillGroups4DSH) ★0 — WorkBuddy 专家团 Skill 开源包 → DeepSeek Harness (dsh) 插件式 skillgroups 包：44 个多角色专家团队 SKILL.md bundle，支持 ~/.dsh/skills 安装与 Cordis 插件注册。WorkBuddy expert-team skill groups repackaged as a DeepSeek Harness plugin skillgroups pack (44 SKILL.md bundles).
- [baiyun200/dsh-dashboard](https://github.com/baiyun200/dsh-dashboard) ★0 — DSH 插件看板 · DeepSeek Harness 插件生态可视化（shadcn/ui，每日自动构建部署）
- [omdsh-dev/dsh-bash-encoding](https://github.com/omdsh-dev/dsh-bash-encoding) ★0 — DSH bash 输出编码自动识别插件：替换 ctx.bash，自管 spawn 收集原始字节，自动检测 UTF-16LE/UTF-8/GBK 等编码并正确解码，修复 WSL/Windows 下 bash 工具的中文乱码。
- [Sdongmaker/vpshub](https://github.com/Sdongmaker/vpshub) ★0 — VPS Hub for DeepSeek Harness: SSH ledger plugin — agents discover, test, execute on, and transfer files to your cloud servers. Keys stay local as path references.
- [Aloneswork/deepseek-harness-codex-bridge](https://github.com/Aloneswork/deepseek-harness-codex-bridge) ★0 — Bidirectional MCP bridge for DeepSeek Harness and Codex collaboration
- [edwardyang0011/dsh-ui-skins](https://github.com/edwardyang0011/dsh-ui-skins) ★0 — DeepSeek Harness Skin Plugin
- [bernardleex526/oh_my_deepseek_harness](https://github.com/bernardleex526/oh_my_deepseek_harness) ★0 — DeepSeek Harness 多智能体编排模式 — 灵感来自 oh-my-opencode-slim
- [H1a3x/dsh-prompt-inject](https://github.com/H1a3x/dsh-prompt-inject) ★0 — System-prompt template injection for DeepSeek Harness — named templates with a global default plus per-workspace overrides.
- [Very12345/sai-dsh-plugins](https://github.com/Very12345/sai-dsh-plugins) ★0 — First-party DeepSeek Harness plugins for the sai Android coding agent
- [lonelymoon87/dsh-vscode](https://github.com/lonelymoon87/dsh-vscode) ★0 — VS Code client for the DeepSeek Harness SDK runtime.
- [hellosz/dsh-ntfy](https://github.com/hellosz/dsh-ntfy) ★0 — DeepSeek Harness (DSH) host-plane plugin: push ntfy notifications when the agent needs approval or finishes a task.
- [wly8691-jpg/knowlp-rag](https://github.com/wly8691-jpg/knowlp-rag) ★0 — KnowLP-RAG: dual knowledge graph retrieval for Markdown notes - MCP stdio server for DeepSeek Harness (dsh) & Claude Code
- [H1a3x/dsh-token-stats](https://github.com/H1a3x/dsh-token-stats) ★0 — Floating draggable token usage statistics panel for DeepSeek Harness
- [MAXeaglet/dsh-plugin-manager](https://github.com/MAXeaglet/dsh-plugin-manager) ★0 — DSH 插件管理器：桌面 GUI + CLI，管理 dsh 的 profile、插件与一键启动 dsh web (Tauri 2 + Node CLI)
- [zprolab/WhaleKit](https://github.com/zprolab/WhaleKit) ★0 — Superpowers customized for DeepSeek Harness
- [Jesse-njx/dsh-plugin-manager-registry](https://github.com/Jesse-njx/dsh-plugin-manager-registry) ★0 — @dsh-pm/registry — discover dsh plugins by merging the awesome-dsh-plugin list, GitHub dsh-plugin-topic search, and npm keyword search into one deduped, offline-tolerant registry (the discovery engine of dsh pm)
- [Jesse-njx/dsh-plugin-manager](https://github.com/Jesse-njx/dsh-plugin-manager) ★0 — dsh pm — discover, install, update, and manage dsh plugins from the CLI: multi-source search (awesome list + GitHub + npm), doctor audit, per-profile state
- [green-dalii/dsh-plugin-dev-skill](https://github.com/green-dalii/dsh-plugin-dev-skill) ★0 — DeepSeek Harness Plugin Dev Skill — 让任何 Agent 都能正确、高效、符合规范地开发 DSH 插件（含精简提炼参考文档与论文解读）
- [oslook/awesome-dsh-plugins](https://github.com/oslook/awesome-dsh-plugins) ★0 — Deekseek Harness Plugins
- [ophielel/dsh-devkit](https://github.com/ophielel/dsh-devkit) ★0
- [Miku196/dsh-tokensave](https://github.com/Miku196/dsh-tokensave) ★0 — DSH port of pi-tokensaver: keeps the tokensave semantic graph fresh and teaches the agent to prefer its MCP tools
- [ljsysfurryACE/dsh-aura-scheduler](https://github.com/ljsysfurryACE/dsh-aura-scheduler) ★0 — Proactive scheduling for DeepSeek Harness: Aura heartbeat + value network (official is model-driven only)
- [ljsysfurryACE/dsh-memory-director](https://github.com/ljsysfurryACE/dsh-memory-director) ★0 — MemoryDirector plugin for DeepSeek Harness: LLM-driven remember/forget (official harness has no memory)
- [asdf17128/dshp](https://github.com/asdf17128/dshp) ★0 — Manage DeepSeek Harness profiles — list, create, clone, diff, and share a whole dsh setup as one portable file.
- [asdf17128/dsh-doctor](https://github.com/asdf17128/dsh-doctor) ★0 — Find what your DeepSeek Harness (dsh) patches silently broke — dead patches, config fields dropped by whole-config replacement, unmaintained plugins. Read-only, zero deps.
- [NinjaSln-labs/dsh-plugins](https://github.com/NinjaSln-labs/dsh-plugins) ★0 — DSH plugin collection: DeepSeek Harness community plugins (session-health, knowledge, ...)
- [Youngxj/dsh-ProjectModel](https://github.com/Youngxj/dsh-ProjectModel) ★0 — deepseek项目组功能
- [Fromlan/godot-agent-rpc](https://github.com/Fromlan/godot-agent-rpc) ★0 — Drive the Godot 4.x editor from an AI agent: Godot agent_rpc addon + DeepSeek Harness dsh-tool-godot plugin (loopback TCP JSON-lines bridge, 27 godot_* tools)
- [zhangzheng25/deepseek_harness_desktop](https://github.com/zhangzheng25/deepseek_harness_desktop) ★0
- [kelai141/dsh-client-ui-responsive](https://github.com/kelai141/dsh-client-ui-responsive) ★0 — dsh Web UI 的移动响应式 AppFrame——派生自 dsh-client-ui-layout，新增 <640px 抽屉侧栏、底部 sheet 与安全区。
- [sisyphus-iambe/northstar-exam](https://github.com/sisyphus-iambe/northstar-exam) ★0 — Trust checkpoint for AI-generated code, agent reports & embodied-AI artifacts — the exam hall for LLM output. Solves LLM hallucination with programmatic verification: four-layer statistical exams, invariant examiner, conclusion anchors. No LLM self-evaluation — deterministic verdicts.
- [weijiafu14/dsh-remote-sandbox](https://github.com/weijiafu14/dsh-remote-sandbox) ★0 — Crash-resilient remote execution world for DeepSeek Harness: ctx.fs/ctx.subprocess over an E2B sandbox with heartbeat keep-alive, transparent recovery, and workspace sync.
- [omdsh-dev/dsh-ui-whale](https://github.com/omdsh-dev/dsh-ui-whale) ★0 — 【求⭐】🐋DSH Web UI 全手绘像素鲸鱼伙伴插件：会话标题栏常驻，平时眨眼/偶尔摆尾/动胸鳍，思考运行时持续动起来，回合完成头顶喷水，点击还会冒爱心，不工作时还会偷懒睡觉，零核心改动。 【喜欢的话就点点star⭐吧~】
- [dongsheng123132/awesome-dsh-plugins](https://github.com/dongsheng123132/awesome-dsh-plugins) ★0 — Evidence-backed DeepSeek Harness plugin radar and 2Origin plugin lab
- [ljsysfurryACE/dsh-compaction](https://github.com/ljsysfurryACE/dsh-compaction) ★0 — AgentFrame compaction backend for DeepSeek Harness: semantic+physical KV compression (35.6x)
- [onlca/dsh-ssh](https://github.com/onlca/dsh-ssh) ★0 — DeepSeek Harness 插件:远程主机目录作为工作区,零目标主机安装
- [Wanbinyu/dsh-plugin-git-inspect](https://github.com/Wanbinyu/dsh-plugin-git-inspect) ★0 — Read-only Git inspection tools for DeepSeek Harness
- [dhj-l/dsh-client-ui-question-history](https://github.com/dhj-l/dsh-client-ui-question-history) ★0 — Floating right-edge question-history panel for the DeepSeek Harness web GUI: lists the current session's user questions and jumps the transcript on click
- [xiangshangya/deepseek-harness-desktop](https://github.com/xiangshangya/deepseek-harness-desktop) ★0 — Electron desktop app for DeepSeek Harness: bundles the dsh web server and its frontend into one installable app
- [Xieweikang123/dsh-vision-bridge](https://github.com/Xieweikang123/dsh-vision-bridge) ★0 — Give a text-only dsh model eyes: pasted images recognized into text via an OpenAI-compatible vision endpoint.
- [Fishsb/dsh-prompt-enhancer](https://github.com/Fishsb/dsh-prompt-enhancer) ★0 — DeepSeek Harness DSH 提示词增强插件：✨ 一键优化草稿
- [KeLearns/dsh-update-checker](https://github.com/KeLearns/dsh-update-checker) ★0 — DeepSeek Harness official runtime update checker plugin
- [Wanbinyu/dsh-billing](https://github.com/Wanbinyu/dsh-billing) ★0
- [kazecreator/dsh-plugins](https://github.com/kazecreator/dsh-plugins) ★0 — Monorepo of DeepSeek Harness (dsh) plugins — including dsh-im (Telegram & WeChat IM bridge)
- [Gordonynh/dsh-plugin-codex-import](https://github.com/Gordonynh/dsh-plugin-codex-import) ★0 — DeepSeek Harness plugin: import OpenAI Codex conversation history into DSH sessions via /codex-import | 用 /codex-import 把 Codex 历史对话导入 DSH
- [longyu065/dsh-theme-ti](https://github.com/longyu065/dsh-theme-ti) ★0 — Dota 2 The International (TI) skin for the DeepSeek Harness web UI: a deep-navy + teal/gold token theme with vector wings artwork, registered into the client ThemeRuntime.
- [Very12345/sai](https://github.com/Very12345/sai) ★0 — A local-first Android coding agent powered by the official DeepSeek Harness
- [0sour/dsh-plugins](https://github.com/0sour/dsh-plugins) ★0 — DeepSeek Harness (dsh) plugins by 0sour - ???? (dsh-plugin topic)
- [flymysql/dsh-remote](https://github.com/flymysql/dsh-remote) ★0 — Remote-access assistant for DeepSeek Harness: /remote command and settings page printing the exact SSH tunnel / reverse-tunnel / reverse-proxy commands (harness intentionally binds loopback only)
- [wangxiang0605qvq/dsh-auto-compact](https://github.com/wangxiang0605qvq/dsh-auto-compact) ★0 — DeepSeek Harness 自动压缩插件：模型工具 compact_now，回合结束后自动压缩上下文 | Auto compaction plugin for DSH: compact_now tool, compacts context after the turn
- [Karuisawa-Mrs/dsh-plugins](https://github.com/Karuisawa-Mrs/dsh-plugins) ★0 — Community plugins for DeepSeek Harness (DSH)
- [qingchunnh/dsh-desktop](https://github.com/qingchunnh/dsh-desktop) ★0 — DeepSeek Harness 的桌面客户端，自动检测本机运行环境，启动并连接 dsh Web UI
- [howlma/dsh-desktop](https://github.com/howlma/dsh-desktop) ★0 — DeepSeek Harness desktop client: boots (or reuses) the Harness gateway on launch and embeds the official web UI
- [maque2333/dsh-ui-topbar-compact](https://github.com/maque2333/dsh-ui-topbar-compact) ★0 — 缩窄DeepSeek Harness原生webUI顶栏
- [jasper-zsh/dsh-plugin-llm-codex](https://github.com/jasper-zsh/dsh-plugin-llm-codex) ★0 — 让 DeepSeek Harness（DSH） 通过 ChatGPT/Codex 订阅调用 openai-codex 模型，无需配置 OpenAI API Key。
- [Lehmaning/dsh-randomuuid-polyfill](https://github.com/Lehmaning/dsh-randomuuid-polyfill) ★0 — dsh client plugin that installs crypto.randomUUID on insecure origins (plain HTTP over a LAN address)
- [omdsh-dev/dsh-science](https://github.com/omdsh-dev/dsh-science) ★0 — Reproducible Python and R work on DeepSeek Harness, built as plugins.
- [MashedPotato817/dsh-tui](https://github.com/MashedPotato817/dsh-tui) ★0 — Terminal client for DeepSeek Harness: Claude Code-style agent conversation with Vim modal input and a HUD, over the one DSH HTTP contract.
- [Aeanfx/dsh-plugin-dated-folders](https://github.com/Aeanfx/dsh-plugin-dated-folders) ★0 — Tidy by date — every file your agent generates is archived into a YYYY-MM-DD_<topic> folder automatically. One folder per day, zero clutter.
- [houyongsheng/deepseek-harness-molt](https://github.com/houyongsheng/deepseek-harness-molt) ★0 — The coding agent that grows its own tools. It reflects after each task, writes a reusable tool, tests it, and keeps it in a skill library that compounds.
- [rxh1999/dsh-jingle](https://github.com/rxh1999/dsh-jingle) ★0 — Play sounds on dsh events — a sound-effects plugin for the DeepSeek Harness
- [sindo-s/dsh-qq-bot](https://github.com/sindo-s/dsh-qq-bot) ★0 — DeepSeek Harness plugin bridging QQ official Bot API to dsh agents (no third-party bot framework)
- [junhongchashui/dsh-vision-relay](https://github.com/junhongchashui/dsh-vision-relay) ★0 — 零修改、零切换的 DeepSeek Harness 视觉能力插件：纯文本模型粘贴即读图片，云端 + 本地 Ollama 双后端自动切换，ModLens v2 风格结构化证据输出。
- [Leawind/dsh-minecraft-dev](https://github.com/Leawind/dsh-minecraft-dev) ★0 — 一个面向 Minecraft 模组开发的 DeepSeek Harness Agent 预设
- [aryswisnu/dsh-composition-check](https://github.com/aryswisnu/dsh-composition-check) ★0 — Evidence-backed compatibility checks for DeepSeek Harness plugin stacks
- [kingsunb/dsh-model-plus](https://github.com/kingsunb/dsh-model-plus) ★0
- [ChuanTianML/dsh-island](https://github.com/ChuanTianML/dsh-island) ★0 — A lightweight macOS status island for every DeepSeek Harness session.
- [git-hub-cloud/workled](https://github.com/git-hub-cloud/workled) ★0 — workled skill

</details>

<a id="get-listed"></a>
## 收录你的插件

给你的插件仓库添加 [`dsh-plugin`](https://github.com/topics/dsh-plugin) topic，并在 `package.json` 中声明 `dsh.bundle` manifest。每小时执行的抓取会自动收录，无需提交 PR。

[提交插件 →](https://github.com/Ericwong5021/deepseek-plugin-store/issues/new?template=plugin-submission.yml)

## 许可协议

[CC0-1.0](LICENSE) · 目录数据来自 GitHub 公开 API，每小时自动刷新。

<sub>社区项目，与 DeepSeek 无隶属关系，也未获得 DeepSeek 背书。</sub>
