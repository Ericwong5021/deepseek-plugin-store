# DeepSeek Plugin Store

> [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)（`dsh`）插件数据源 · 自动验证、定时更新
>
> An open source, **auto-verified** data source for the DeepSeek Plugin Store. Updated every 6 hours.

本列表由爬虫自动生成：抓取 GitHub 上所有 `dsh-plugin` topic 仓库，**逐个验证其 `package.json` 是否声明了 `dsh.bundle` manifest**（这是一个仓库能被 `dsh plugin add` 安装的硬性标志）。通过验证的才会进入插件列表，未通过的归入相关项目。

Every entry in the plugin sections is verified to carry a `dsh.bundle` manifest — the marker that makes a package actually installable via `dsh plugin add`.

📊 **301** verified plugins / **238** related projects · 🕐 Last updated: 2026-08-13 18:27 UTC

## 安装插件 / Installing plugins

```sh
# 从 npm 安装（推荐，预构建产物，一次成功）
dsh plugin --profile <name> add <npm-package>

# 从 GitHub 安装（拉源码，首次会因构建授权而失败，按提示配置 allowBuilds 后重试）
dsh plugin --profile <name> add github:<owner>/<repo>
```

> ⚠️ 安装 GitHub 来源的插件时，构建脚本会在你的机器上执行。请只安装你信任的插件，并尽量锁定 commit（`github:owner/repo#<sha>`）。

## 插件 / Plugins

### UI 增强 / UI Enhancements

- [Anionex/dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) ★142 · `@dsh-external/dsh-vision-toolkit` — 让纯文本模型更好地做视觉任务的DeepSeek Harness插件：带意图的图片问答、长截图 OCR、UI 还原等｜DeepSeek Harness-native integration for agent-vision-toolkit: image Q&A, long-screenshot OCR, UI restoration, grounding, pixel diff, Artifacts, and Web UI.
- [omdsh-dev/DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) ★115 · `dsh-better-sidebar` — 一个侧边栏的完整工作台，支持三方拓展注册新Tab页面，内置文件渲染编辑/终端/Git/子代理
- [Nagi-ovo/dsh-ads](https://github.com/Nagi-ovo/dsh-ads) ★96 · `@dsh-external/dsh-ads` — 是兄弟就来蹬我！DSH Web UI 广告：2005 年中文站点风格的侧栏广告 / 对话内信息流 / 角落弹窗 + 一个真实热区比视觉小得多的关闭叉。素材全虚构，域名打码。
- [huiliyi37/dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) ★73 · `@huiliyi37/dsh-tianshu-tui` — dsh-tianshu-tui — DeepSeek Harness terminal UI
- [hust-open-atom-club/oh-dsh](https://github.com/hust-open-atom-club/oh-dsh) ★62 · `@oh-dsh/desktop` — 一站式 DeepSeek Harness 社区发行版：TUI、桌面端与 Web UI 三种形态统一体验，支持分层安装、一步到位，免去手工整合打包。
- [ZSeven-W/dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil) ★32 · `@zseven-w/dsh-openpencil` — OpenPencil design preview and editing plugin for DSH
- [Nagi-ovo/dsh-visualize](https://github.com/Nagi-ovo/dsh-visualize) ★29 · `@dsh-external/dsh-visualize` — DSH 对话内生成式 UI 插件：模型把交互式 HTML 卡片直接画进会话流——visualize 工具 + 配套 skill + 沙箱渲染卡，带流式预览、组件浮入动画与鲸鱼蓝主题跟随
- [alingalingling/ui-status-label](https://github.com/alingalingling/ui-status-label) ★21 · `dsh-ui-status-label` — 把你鲸鱼娘思考时的 deep diving 自定义成任意你想要的样子
- [omdsh-dev/dsh-custom-tool](https://github.com/omdsh-dev/dsh-custom-tool) ★18 · `dsh-custom-tool` — Create and manage sandboxed JavaScript tools for DeepSeek Harness with a Monaco editor and model-driven tool lifecycle.
- [omdsh-dev/dsh-genui](https://github.com/omdsh-dev/dsh-genui) ★14 · `@omdsh-dev/dsh-genui` — GenUI for DeepSeek Harness: interactive UI components rendered inline in assistant replies via the dsh-ui fence — layout, charts, plots, forms, quizzes, mermaid, 3D scenes, and an action event loop back to the model. Ships the fence-teaching host plugin, the browser renderer (client half), and the genui skill.
- [ccq1/dsh-side-panel](https://github.com/ccq1/dsh-side-panel) ★8 · `@dsh-external/dsh-side-panel` — DSH 侧边栏，集成文件浏览器、终端和 Git 审查，方便预览文件。
- [dingyi222666/dsh-focus-chat](https://github.com/dingyi222666/dsh-focus-chat) ★7 · `@dingyi222666/dsh-focus-chat` — 提供新的「聚焦会话」精简会话视图，更轻松易于阅读，只关注最终产出结果。
- [omdsh-dev/dsh-gomoku](https://github.com/omdsh-dev/dsh-gomoku) ★6 · `@deepseek-ai/dsh-gomoku` — 在DSH中与AI下五子棋，也可以让AI对局，看哪个AI棋力更强
- [LoserFox/telegram](https://github.com/LoserFox/telegram) ★6 · `@loserfox/telegram` — Telegram Bot API 桥接插件：长轮询、per-chat 会话、HTML 格式化
- [Sev7een/ds-api-usage](https://github.com/Sev7een/ds-api-usage) ★6 · `dsh-plugin-ds-api-usage` — DeepSeek Harness plugin: real-time DeepSeek API balance and usage timeline (cost / tokens / request count), rendered in a settings page.
- [lhh010/dsh-minigames](https://github.com/lhh010/dsh-minigames) ★6 · `@dsh-external/dsh-minigames` — DSH Web UI 右侧小游戏面板：18 款离线小游戏（恐龙跳一跳 / 俄罗斯方块 / 坦克大战 / 扫雷 / 2048 / 数独 / 吃豆人 / 跟枪练习等），可扩展游戏注册表，等待模型回复或修 bug 时的摸鱼神器
- [openguardrails/dsh-tui](https://github.com/openguardrails/dsh-tui) ★5 · `@openguardrails/dsh-tui` — Claude Code-style terminal UI for DeepSeek Harness agents, as an out-of-tree dsh plugin bundle
- [Zhenyu98/dsh-context-doctor](https://github.com/Zhenyu98/dsh-context-doctor) ★5 · `dsh-context-doctor` — DSH 上下文注入审计插件：统计 AGENTS.md 指令链/技能目录/工具 schema 的 token 成本，检测重复与冲突；Web UI 圆环面板 + context_audit 工具。Context Doctor for DeepSeek Harness: audit instruction-chain / skill catalog / tool schemas token cost.
- [HuanLinOTO/dsh-plugin-mineru](https://github.com/HuanLinOTO/dsh-plugin-mineru) ★4 · `@huanlin/dsh-plugin-mineru` — DSH plugin exposing MineRU document parsing tools to the model
- [omdsh-dev/dsh-data-agent](https://github.com/omdsh-dev/dsh-data-agent) ★4 · `@deepseek-ai/dsh-data-agent` — 让AI帮你连数据库、写SQL的DSH插件
- [omdsh-dev/plugin-template](https://github.com/omdsh-dev/plugin-template) ★4 · `@your-scope/dsh-plugin-template` — 基于原turtle ui官方仓库创建的plugin模板仓库
- [Nwflower/dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) ★4 · `dsh-chat-import` — 从Claude Code、Codex、Reasonix等Agent工具导入历史消息，并在DSH中继续对话
- [Toukaiteio/dsh-plugin-installer](https://github.com/Toukaiteio/dsh-plugin-installer) ★3 · `dsh-plugin-installer` — A marketplace plugin to quickly integrate your DeepSeek Harness into the GitHub plugin ecosystem.
- [vlln/dsh-task-status](https://github.com/vlln/dsh-task-status) ★3 · `@dsh-external/dsh-task-status` — DSH 插件：后台任务状态条（对话页任务进度 + 实时输出 tail）。官方 bundle 插件，dsh plugin --profile web add 安装
- [gxinxing/deepseek-harness-tui](https://github.com/gxinxing/deepseek-harness-tui) ★3 · `deepseek-harness-tui` — Terminal-native interactive TUI for DeepSeek Harness (dsh) — built with Ink, React for terminals
- [THU-MAIC/dsh-openmaic](https://github.com/THU-MAIC/dsh-openmaic) ★3 · `@openmaic/dsh-openmaic` — OpenMAIC for DeepSeek Harness: classrooms, slides, interactive widgets, and Socratic teaching
- [HuanLinOTO/dsh-plugin-yet-another-subagent](https://github.com/HuanLinOTO/dsh-plugin-yet-another-subagent) ★3 · `@huanlin/dsh-plugin-yet-another-subagent` — Configurable subagent profiles with web UI settings, real-time toolcall/token display, and click-to-navigate child sessions.
- [bill9109/dsh-web-ui-notify](https://github.com/bill9109/dsh-web-ui-notify) ★3 · `@bill9109/dsh-web-ui-notify` — 为 DSH 增加桌面通知提醒
- [Roy-oss1/dsh-lark](https://github.com/Roy-oss1/dsh-lark) ★2 · `@dsh-contrib/dsh-lark-channel` — Lark/Feishu IM bot channel for DeepSeek Harness: chats drive agents, replies and approvals return as messages and cards | 飞书机器人 DSH 插件
- [1na-ko/dsh-hdc-bridge](https://github.com/1na-ko/dsh-hdc-bridge) ★2 · `dsh-hdc-bridge` — DSH 原生鸿蒙设备桥：hdc 工具让 Agent 完成截图-看图-装包-验证的闭环调试 / DSH-native HarmonyOS device bridge
- [wuxiangru915/dsh-review-loop](https://github.com/wuxiangru915/dsh-review-loop) ★2 · `@dsh-plugin/dsh-review-loop` — Incremental diff reviewer for DeepSeek Harness — Web UI review panel + /review command. 增量代码审查插件：checkpoint 增量队列 + 审查意见注入 agent.
- [KarlOfLaw/dsh-goal-mode-enhance](https://github.com/KarlOfLaw/dsh-goal-mode-enhance) ★2 · `dsh-goal-mode` — 为 DeepSeek Harness 提供可视化 goal 模式：Goal 栏 / 头部入口 / 设置页（历史+多会话总览）/ goal_overview 模型工具
- [Moeblack/dsh-prompt-studio](https://github.com/Moeblack/dsh-prompt-studio) ★2 · `dsh-prompt-studio` — DSH plugin: edit user and built-in system-prompt sections with live preview (Prompt Studio)
- [Mongfayi/dsh-recall](https://github.com/Mongfayi/dsh-recall) ★2 · `dsh-recall` — Message recall (撤回) plugin for the DSH Web UI: one undo button on each user message that removes the turn and everything after it, durably, without reverting code changes.
- [renat3u/dsh-web-archive](https://github.com/renat3u/dsh-web-archive) ★2 · `dsh-web-archive` — 折叠对话当中众多的“无用消息”，例如Think、Bash等
- [zevorn/dsh-humanize](https://github.com/zevorn/dsh-humanize) ★2 · `@humanize/dsh-humanize` — Humanize RLCR bundle for the DeepSeek Harness: DSH skills, Codex review, and the Humanize trajectory view.
- [omdsh-dev/dsh-inspect](https://github.com/omdsh-dev/dsh-inspect) ★2 · `@dsh-external/dsh-inspect` — 发现问题(checkup) → 修复交付(fix) → 质量复查(review) 的对抗式闭环插件：基于官方 workflow 引擎的检查/修复/复查工具集
- [Xilin3/dsh-prompt-persona](https://github.com/Xilin3/dsh-prompt-persona) ★2 · `@xilin3/dsh-prompt-persona` — DSH plugin: edit the system prompt (deployment persona) from the Settings page, with live preview.
- [HuanLinOTO/dsh-plugin-better-sidebar-plugin-office](https://github.com/HuanLinOTO/dsh-plugin-better-sidebar-plugin-office) ★2 · `@huanlin/dsh-plugin-better-sidebar-plugin-office` — DSH web plugin: Office file previewers (.docx/.xlsx/.pptx) for the better-sidebar editor. Registers the docx/xlsx/pptx file viewers through ctx.betterSidebar.registerFileViewer, keeping the heavy Office render libraries (docx-preview / Univer / SheetJS / pptx-renderer) out of the better-sidebar bundle.
- [btspoony/dsh-advisor](https://github.com/btspoony/dsh-advisor) ★2 · `dsh-advisor` — Advisor - Pair a second model that passively reviews each turn and injects notes.  搭配一个会在每轮对话被动注入见解和审查的副模型。
- [bitterSmilezzz/dsh-mac-desktop](https://github.com/bitterSmilezzz/dsh-mac-desktop) ★2 · `dsh-mac-desktop` — DeepSeek Harness plugin: open the Web GUI in a native macOS desktop window (SwiftUI + WKWebView).
- [Buyi-wsgzg/dsh-sidechain](https://github.com/Buyi-wsgzg/dsh-sidechain) ★2 · `@dsh-external/dsh-sidechain` — DSH 侧会话插件：/side 持续性侧会话（Codex 风格）与 /btw 一次性侧问（Claude 风格）——在临时 fork 中运行、不写入主会话历史；Web UI 右侧链面板内嵌对话，主会话保持不变
- [havingautism/dsh-notebooks](https://github.com/havingautism/dsh-notebooks) ★2 · `@deepseek-ai/dsh-notebooks` — Independent cross-session notebooks with model tools, typed Remote API, and Web view
- [titanwings/dsh-plannotator](https://github.com/titanwings/dsh-plannotator) ★2 · `@dsh-external/dsh-plannotator` — DSH 计划批注插件：选中计划原文、逐条批注，并把结构化反馈送回 Agent。 / A DSH plan-review plugin for anchored annotations and structured Agent feedback.
- [Elaina-real/dsh-tiered-approval](https://github.com/Elaina-real/dsh-tiered-approval) ★2 · `dsh-tiered-approval` — Tiered auto-review for DeepSeek Harness: static-rule safety net + LLM reviewer + human fallback — auto-allow safe actions, deny irreversible ones, ask a human for the rest.
- [Favio8/dsh-plugin-deepeye](https://github.com/Favio8/dsh-plugin-deepeye) ★2 · `dsh-plugin-deepeye` — DeepEye vision plugin for DeepSeek Harness (DSH): image description, OCR, VQA, UI layout, and clipboard analysis.
- [Mongfayi/dsh-local-filetree](https://github.com/Mongfayi/dsh-local-filetree) ★2 · `dsh-local-filetree` — File tree panel for the DSH Web UI: the right details column shows the current session workspace tree (lazy, read-only).
- [havingautism/dsh-deepresearch](https://github.com/havingautism/dsh-deepresearch) ★2 · `@deepseek-ai/dsh-deepresearch` — Independent evidence-first research workflow with durable state and its own Web view
- [turtle1999/turtle-ui](https://github.com/turtle1999/turtle-ui) ★2 · `@deepseek-ai/dsh-tui` — as is, no warranty
- [Ericwong5021/dsh-kanban](https://github.com/Ericwong5021/dsh-kanban) ★2 · `dsh-kanban` — Task board plugin for the DeepSeek Harness Web UI
- [orriduck/dsh-tui](https://github.com/orriduck/dsh-tui) ★2 · `dsh-tui` — A small, session-aware terminal UI for DeepSeek Harness
- [TwotwoPiggy/dsh-balance](https://github.com/TwotwoPiggy/dsh-balance) ★1 · `dsh-balance` — A DeepSeek Harness plugin for real-time token tracking and highly accurate session cost estimation, featuring dynamic peak/off-peak pricing support.
- [SiYue-ZO/dsh-translator](https://github.com/SiYue-ZO/dsh-translator) ★1 · `dsh-translator` — Turn DeepSeek Harness into a focused, configurable AI translation workspace.
- [Jesse-njx/dsh-chatnode-wechat](https://github.com/Jesse-njx/dsh-chatnode-wechat) ★1 · `@dsh-cowork/chatnode-wechat` — Chat with, monitor, and approve your DSH agents from WeChat — an iLink gateway + conversation node bundle for DeepSeek Harness
- [shi275773124/falsify-dsh](https://github.com/shi275773124/falsify-dsh) ★1 · `falsify-dsh` — DeepSeek Harness adapter for the public Falsify CLI. Adjudicator receipt, not a second-opinion workflow.
- [keepermttl/dsh-archive-viewer](https://github.com/keepermttl/dsh-archive-viewer) ★1 · `@dsh-external/dsh-archive-viewer` — DeepSeek Harness 归档会话管理插件：查看/恢复已归档会话（回到原工作区分组）+ 右上角一键关闭 dsh。MIT 许可，欢迎收录到任何插件合集，注明出处即可。
- [Jesse-njx/dsh-routines](https://github.com/Jesse-njx/dsh-routines) ★1 · `@dsh-routines/bundle` — dsh-routines — scheduled agents for DSH: run a prompt on a cron, get the digest where you already are (file digests, chatnode delivery, unattended-safe)
- [HuanLinOTO/dsh-plugin-spur](https://github.com/HuanLinOTO/dsh-plugin-spur) ★1 · `@huanlin/dsh-plugin-spur` — A braided whip (辫子) hanging in the chat-flow — grab the tip and swing to send "go work!" to the agent.
- [pandashere/dsh-kimi-bridge](https://github.com/pandashere/dsh-kimi-bridge) ★1 · `dsh-kimi-bridge` — Kimi CLI bridge plugin for DeepSeek Harness with review-only mode and a Web conversation tab.
- [anweat/dsh-web-search-pro](https://github.com/anweat/dsh-web-search-pro) ★1 · `dsh-web-search-pro` — Enhanced, persistent web search plugin for DeepSeek Harness (multi-engine search, SQLite+LRU cache, platform backends, Playwright rendering)
- [fengzhiyushui/dsh-desktop-window](https://github.com/fengzhiyushui/dsh-desktop-window) ★1 · `dsh-desktop-window` — DSH 桌面窗口插件：以独立应用窗口打开 DeepSeek Harness Web UI（自动开窗 + 会话头部手动开关 + 设置页自动开窗开关）
- [yuezengwu/dsh-explain](https://github.com/yuezengwu/dsh-explain) ★1 · `dsh-explain` — DSH 本地优先学习模式插件：跨会话全局学习线程、按来源讲解、ExplainContext、压缩与可诊断设置界面
- [RealAlexandreAI/dsh-atuin](https://github.com/RealAlexandreAI/dsh-atuin) ★1 · `dsh-atuin` — dsh atuin-history: record dsh user prompts into atuin shell history
- [omdsh-dev/7d7d](https://github.com/omdsh-dev/7d7d) ★1 · `@mattheliu/7d7d` — 7d7d —— 7k7k 风格的 DSH 游戏门户：在 Web UI 内生成、同步并游玩 HTML5 与自托管 Ruffle Flash 小游戏。
- [omdsh-dev/dsh-auto-chess](https://github.com/omdsh-dev/dsh-auto-chess) ★1 · `@deepseek-ai/dsh-auto-chess` — DSH Web里的自走棋插件：人机对战或双AI对弈
- [omdsh-dev/dsh-fun-weather](https://github.com/omdsh-dev/dsh-fun-weather) ★1 · `@deepseek-ai/dsh-fun-weather` — DSH weather tab and weather-following themes powered by Open-Meteo
- [ben7am1n/dsh-review-skills](https://github.com/ben7am1n/dsh-review-skills) ★1 · `dsh-review-skills` — Engineering-discipline skill pack for DeepSeek Harness — code review, simplification, plan-then-execute, test-first, and conflict resolution, delivered as a bundled skill provider plugin.
- [lehhair/dsh-split-panes](https://github.com/lehhair/dsh-split-panes) ★1 · `@dsh-external/dsh-split-panes` — DSH split-pane conversation plugin: PiUI-style multi-pane conversation surface — split/stack panes, per-pane sessions, sidebar session drag & drop, single-row fused header. Needs the renderer session-scope capability (see README).
- [lehhair/dsh-diff-viewer](https://github.com/lehhair/dsh-diff-viewer) ★1 · `@dsh-external/dsh-diff-viewer` — DSH Web GUI PiUI-style diff viewer plugin: replaces the stock DiffBlock for write/edit tool calls via ui-tool diff-card chain slots (host patch included). Private.
- [lin-cheng-lab/dsh-reloader](https://github.com/lin-cheng-lab/dsh-reloader) ★1 · `dsh-reloader` — DSH 一键重启：装完插件说一句 reload 就自动重启生效，不用手动 Ctrl+C 🔄
- [YYTbit/dsh-plugin-code-review](https://github.com/YYTbit/dsh-plugin-code-review) ★1 · `dsh-plugin-code-review` — Structured code review skill for DeepSeek Harness
- [RealAlexandreAI/dsh-cloudflare-browser-run](https://github.com/RealAlexandreAI/dsh-cloudflare-browser-run) ★1 · `dsh-cloudflare-browser-run` — dsh browser-run: CF Browser Run web tools (markdown/screenshot/pdf) for DeepSeek Harness
- [stushansusu/dsh-miku-skin](https://github.com/stushansusu/dsh-miku-skin) ★1 · `@deepseek-ai/dsh-client-ui-skin-miku` — 初音未来主题皮肤，用于 DeepSeek Harness (DSH) Web GUI —— 蓝紫洋红渐变、毛玻璃面板、可自定义背景图、亮暗双主题
- [lehhair/dsh-mobile](https://github.com/lehhair/dsh-mobile) ★1 · `@dsh-external/dsh-mobile` — DSH mobile-friendly web UI plugin (PiUI chat-pager mode): on narrow screens the stock three-column frame becomes a horizontal scroll-snap pager — sidebar | chat — with the chat column rendered completely untouched as a flush rounded card with a PiUI-style 3D flip; swipe or the top-left button flips pages, a settle re-snap always lands on a whole page, and the sidebar page shares the chat background. Safe-area + virtual-keyboard insets, touch-sized controls, hidden scrollbars on coarse pointers. Pure client-side adaptation over the stock frame — zero core changes, works on official rc.2 distributions.
- [Han-1413141/dsh-sticky-disclosure](https://github.com/Han-1413141/dsh-sticky-disclosure) ★1 · `dsh-sticky-disclosure` — DSH Web client plugin: pins off-screen expanded collapsible tags (Think / tool cards) to the top of the conversation viewport with a collapse hotkey
- [ZhuXinAI/sidesight](https://github.com/ZhuXinAI/sidesight) ★1 · `sidesight` — CLI-first vision sidecar for text-only coding agents. Analyze screenshots, diagrams, charts, UI diffs, and videos with OpenAI-compatible multimodal models.
- [BeAChanger/dsh-openclaw-acp](https://github.com/BeAChanger/dsh-openclaw-acp) ★1 · `dsh-openclaw-acp` — DeepSeek Harness bundle for OpenClaw and WeChat over ACP
- [ben7am1n/dsh-telegram](https://github.com/ben7am1n/dsh-telegram) ★1 · `dsh-telegram` — Telegram runtime adapter for DeepSeek Harness — chat with your dsh agents from Telegram.
- [bill9109/dsh-drag-and-drop](https://github.com/bill9109/dsh-drag-and-drop) ★1 · `@bill9109/dsh-drag-and-drop` — 为 DSH Web UI 增加跨平台文件拖拽与原始路径插入能力，无需复制文件
- [havingautism/dsh-ultra-ui](https://github.com/havingautism/dsh-ultra-ui) ★1 · `@deepseek-ai/dsh-ultra-ui` — Codemini-inspired compact disclosure for every DSH Web Tool call
- [wuyuanjiang1/dsh2wechat](https://github.com/wuyuanjiang1/dsh2wechat) ★0 · `dshplug` — DeepSeek Harness 微信 ClawBot 消息桥插件
- [147228/dsh-black-whale](https://github.com/147228/dsh-black-whale) ★0 · `@xiaoyao-ai/dsh-client-ui-skin-black-whale` — DeepSeek Harness 黑鲸实验室主题：官网黑鲸 × 夕小瑶 IP，真实 profile 可安装的 Web UI 插件
- [Chi-hong22/dsh-mdbox](https://github.com/Chi-hong22/dsh-mdbox) ★0 · `@dsh-external/dsh-mdbox` — DeepSeek Harness (DSH) Web 输入框的 Markdown 编辑辅助插件。
- [makuralymi/dsh-webUI-Glass-Theme](https://github.com/makuralymi/dsh-webUI-Glass-Theme) ★0 · `dsh-client-ui-frosted-glass` — Global frosted-glass (backdrop blur) theme plugin for the dsh web UI
- [xiaoxiao-svg/delivery-review-dsh-plugin](https://github.com/xiaoxiao-svg/delivery-review-dsh-plugin) ★0 · `delivery-review-plugin` — delivery-review-plugin（Claude Code 双 Agent 交付协作工作流插件）的 DeepSeek Harness 移植版。基于 DSH 的 Cordis 插件系统，以 bundle 方式分发，不改动 DSH 源码，全部能力由插件行在配置层挂载。
- [Yan-Zero/dsh-codex](https://github.com/Yan-Zero/dsh-codex) ★0 · `@dsh-external/dsh-openai-codex` — Use your ChatGPT subscription in DeepSeek Harness through OpenAI's Codex sign-in flow

### 工作流与自动化 / Workflow & Automation

- [icetomoyo/dsh_workflow](https://github.com/icetomoyo/dsh_workflow) ★34 · `@dsh-external/workflow` — 把Claude Code的UltraCode模式带给DSH，把 DSH 的一次性多 Agent 调度，升级为可生成、可保存、可治理、可观察、可恢复的 Workflow 层
- [omdsh-dev/dsh-annotation](https://github.com/omdsh-dev/dsh-annotation) ★16 · `@omdsh-dev/dsh-annotation` — DSH Web 选中批注插件：选文字→批注→回车随消息发送；气泡隐藏批注块（零闪烁）；回复按 Annotation N 逐条对照（可悬浮芯片）。官方 bundle，零核心改动
- [LoserFox/distill](https://github.com/LoserFox/distill) ★12 · `@loserfox/distill` — 自动对话蒸馏：后台 subagent 反省 + 技能 create/update
- [omdsh-dev/dsh-security-audit](https://github.com/omdsh-dev/dsh-security-audit) ★8 · `@deepseek-ai/dsh-security-audit` — DSH 本机安全审计插件：配置/插件来源/会话/网络暴露面，只读脱敏风险报告
- [hellodigua/dsh-emoji](https://github.com/hellodigua/dsh-emoji) ★7 · `@dsh-external/dsh-emoji` — 为AI回复自动添加表情的插件
- [titanwings/dsh-automation](https://github.com/titanwings/dsh-automation) ★6 · `@dsh-external/dsh-automation` — DSH 自动化插件：让 Coding 任务按计划在全新 Agent Session 中运行，并由用户或 Agent 创建和管理定时任务。 / Run coding tasks in fresh Agent sessions and manage schedules from DSH Web or an Agent.
- [yjh051108/dsh-super-injector](https://github.com/yjh051108/dsh-super-injector) ★6 · `@dsh-external/dsh-super-injector` — 超级模组注入器：运行时注入任意本地 DSH 插件包（junction 链接 + loader.create，不碰 patch/package.json/不重启），热重载全家桶 + 开发侧挂区一键转正 + 一键卸载 + 路由自愈，清单持久化重启自动恢复——DSH 生态的 BepInEx 式模组注入入口
- [omdsh-dev/dsh-deep-research](https://github.com/omdsh-dev/dsh-deep-research) ★4 · `@dsh-external/dsh-deep-research` — Adaptive deep-research orchestrator plugin for DeepSeek Harness (official workflow engine, cybernetics/information-theory design)
- [fuhefei/dsh-sentinel](https://github.com/fuhefei/dsh-sentinel) ★3 · `@dsh-external/dsh-sentinel` — Condition-driven wakeup for DeepSeek Harness: durable file/command/http/process/webhook watches that wake the agent, with dock, sidebar branch, and a global dashboard.
- [lzszq/dsh-scholar](https://github.com/lzszq/dsh-scholar) ★3 · `@dsh-scholar/research-plugin` — dsh-scholar
- [Flyvhidbwo/dsh-vision-proxy](https://github.com/Flyvhidbwo/dsh-vision-proxy) ★2 · `dsh-vision-proxy` — DeepSeek Harness 插件：DeepSeek 大脑 + 自动识图。附加图片自动经 Qwen VLM 转译成文字后交给 DeepSeek 作答
- [omdsh-dev/dsh-tool-regex](https://github.com/omdsh-dev/dsh-tool-regex) ★2 · `@deepseek-ai/dsh-tool-regex` — DSH 正则工具插件：测试匹配/提取捕获组/安全替换/静态解释正则（不执行代码），零依赖，注册 regex 工具
- [william-jin-cmu/dsh-evolve](https://github.com/william-jin-cmu/dsh-evolve) ★2 · `@dsh-external/dsh-evolve` — 自进化插件：agent 在 session 内随对话给自己长出/剪掉能力 —— evolve_add 热挂载持久化 cordis 插件（下一 step 工具即可见），evolve_remove 可逆卸载，重启自动恢复
- [AnacondaKC/dsh-douyin](https://github.com/AnacondaKC/dsh-douyin) ★2 · `dsh-douyin` — DSH WebUI 侧栏短视频插件：原生播放器、系列导航、直链解析与精确历史回放
- [mitao-su/dsh-playwright-cli](https://github.com/mitao-su/dsh-playwright-cli) ★2 · `dsh-playwright-cli` — DeepSeek Harness (DSH) host plugin wrapping the Playwright CLI: install browsers, run tests, open the HTML report from the agent loop.
- [vlln/dsh-loop](https://github.com/vlln/dsh-loop) ★2 · `@dsh-external/dsh-loop` — DSH 插件：定时循环（/loop 命令 + loop 工具 + 活动状态条）。官方 bundle 插件，dsh plugin --profile web add 安装
- [humblebanana/dsh-record-replay](https://github.com/humblebanana/dsh-record-replay) ★2 · `dsh-record-replay` — DeepSeek Harness record macOS desktop workflows by demonstration and turn them into agent skills (open-record-replay skill + orr_* tools)
- [omdsh-dev/dsh-daily-progress](https://github.com/omdsh-dev/dsh-daily-progress) ★1 · `dsh-daily-progress` — DSH daily progress achievement plugin: evening plans for tomorrow, a todo-style checklist today, and a thermometer completion-rate widget in the composer dock
- [btspoony/dsh-llm-fallbacks](https://github.com/btspoony/dsh-llm-fallbacks) ★1 · `dsh-llm-fallbacks` — An dsh plugin for role-based LLM retry&fallback strategy. 基于角色的模型重试备用策略插件
- [qing3a/dsh-event-auditor](https://github.com/qing3a/dsh-event-auditor) ★1 · `@dsh-external/dsh-event-auditor` — DeepSeek Harness 事件流审计面板插件：观察事件类型/分发模式/计数/最近事件，帮助插件作者理解 harness 内部
- [yoke233/dsh-prime-agent](https://github.com/yoke233/dsh-prime-agent) ★1 · `dsh-prime-agent` — Prime Agent-inspired persistent RLM control plane for DeepSeek Harness Code Mode
- [jiruidai/dsh-meta-orchestrator](https://github.com/jiruidai/dsh-meta-orchestrator) ★1 · `dsh-meta-orchestrator` — A model-native meta-agent plugin for DeepSeek Harness that uses the underlying model’s reasoning and planning capabilities to synthesize task-specific workflows at runtime and coordinate tools and subagents.
- [xiaomiba0904/dsh-obsidian-export](https://github.com/xiaomiba0904/dsh-obsidian-export) ★1 · `dsh-obsidian-export` — DeepSeek Harness (DSH) plugin: export conversations to an Obsidian vault, plus read/search/list/tags/backlinks tools and automatic vault discovery.
- [ben7am1n/dsh-browser](https://github.com/ben7am1n/dsh-browser) ★1 · `dsh-browser` — Playwright-powered browser automation for DeepSeek Harness
- [omdsh-dev/ex-setting](https://github.com/omdsh-dev/ex-setting) ★1 · `@deepseek-ai/dsh-ex-setting` — DSH的设置扩展
- [RealAlexandreAI/dsh-nocturne-memory](https://github.com/RealAlexandreAI/dsh-nocturne-memory) ★1 · `dsh-nocturne-memory` — dsh memory: Nocturne Memory client for DeepSeek Harness
- [omdsh-dev/dsh-revive](https://github.com/omdsh-dev/dsh-revive) ★1 · `dsh-revive` — DSH 一键复活：重启后给所有被打断的会话自动发送「继续」指令（/revive 命令 + revive_sessions 工具 + 浏览器一键按钮）
- [pandashere/dsh-self-control-guard](https://github.com/pandashere/dsh-self-control-guard) ★1 · `self-control-guard` — Self-control guard plugin for DeepSeek Harness host exit and restart workflows.
- [omdsh-dev/dsh-kb-sieve](https://github.com/omdsh-dev/dsh-kb-sieve) ★1 · `@dsh-external/dsh-kb-sieve` — DSH knowledge-base plugin: build audit-able KB packs (references + SQLite FTS5) from md/txt/docx/pdf, deterministic retrieval (kb_query) and original-text reading (kb_read), zero-script generated skills. Apache-2.0.
- [alison-xx/deepseek-harness-flow](https://github.com/alison-xx/deepseek-harness-flow) ★0 · `deepseek-harness-flow` — Visual workflows and multi-model evaluation for DeepSeek Harness
- [Jesse-njx/dsh-polyglot](https://github.com/Jesse-njx/dsh-polyglot) ★0 · `@dsh-polyglot/bundle` — dsh-polyglot — the model switch for DSH: generic OpenAI-compatible ctx.llm adapter, curated free/cheap DeepSeek presets, automatic provider fallback on rate limits
- [shelken/dsh-co-authored-by](https://github.com/shelken/dsh-co-authored-by) ★0 · `@shelken/dsh-co-authored-by` — dsh plugin: auto-inject Co-Authored-By and Generated-By trailers on git commit

### 工具集 / Tools

- [ccch1mneyyy/dsh-cc-tui](https://github.com/ccch1mneyyy/dsh-cc-tui) ★183 · `dsh-cc-tui` — DSH 官方尚无终端 TUI 的补位之作：Claude Code 风格全屏交互终端插件——像素鲸鱼顶栏、实时工作状态行、思考流式展开、双击 Esc 回滚、上下文进度条 + TPS 仪表。npm 一键安装。
- [omdsh-dev/dsh-at-file](https://github.com/omdsh-dev/dsh-at-file) ★24 · `dsh-at-file` — Codex-style @file mentions for DeepSeek Harness: search workspace files in the composer and attach their contents to prompts.
- [omdsh-dev/dsh-notification](https://github.com/omdsh-dev/dsh-notification) ★22 · `dsh-notification` — Desktop notifications for DeepSeek Harness turn completions, with per-outcome controls and include/exclude keyword rules.
- [omdsh-dev/dsh-toolkit](https://github.com/omdsh-dev/dsh-toolkit) ★10 · `@deepseek-ai/dsh-toolkit` — DSH 零依赖工具包 collection —— time / encoding / json / calculator / csv / regex / markdown / diff / stat / schema 十个确定性工具，统一入口一键安装
- [omdsh-dev/dsh-plugin-check](https://github.com/omdsh-dev/dsh-plugin-check) ★10 · `@deepseek-ai/dsh-plugin-check` — DSH 插件健康检查工具：扫描插件仓库的清单协议 / patch 格式 / 构建陷阱 / hub 收录状态，零依赖只读，注册 plugin_check 工具
- [LoserFox/dsh-git-identity](https://github.com/LoserFox/dsh-git-identity) ★7 · `@loserfox/git-identity` — DSH 插件：git 提交固定使用环境自身作者身份（优先 gh CLI 登录账号，GitHub noreply 邮箱），GIT_AUTHOR_*/GIT_COMMITTER_* 环境变量注入压过一切 git config
- [omdsh-dev/dsh-session-health](https://github.com/omdsh-dev/dsh-session-health) ★7 · `@deepseek-ai/dsh-session-health` — DSH 会话健康检查插件：多帧 zstd 会话文件的帧级扫描诊断（torn/损坏/空会话检测），零依赖只读，注册 session_health 工具
- [omdsh-dev/fabric](https://github.com/omdsh-dev/fabric) ★7 · `cordis-fabric-bundle` — 一种类似MC Fabric的hook处理器
- [omdsh-dev/dsh-tool-calculator](https://github.com/omdsh-dev/dsh-tool-calculator) ★3 · `@deepseek-ai/dsh-tool-calculator` — DSH 计算器工具插件：安全的数学表达式求值器，零依赖递归下降解析器
- [titanwings/dsh-better-browser](https://github.com/titanwings/dsh-better-browser) ★3 · `@dsh-external/dsh-better-browser` — DSH 真实浏览器插件：通过 Kimi WebBridge 让 Agent 操作用户已登录的浏览器，并提供 13 个 webbridge_* 工具。 / Let DSH Agents use your signed-in browser through thirteen Kimi WebBridge tools.
- [omdsh-dev/dsh-tool-csv](https://github.com/omdsh-dev/dsh-tool-csv) ★3 · `@deepseek-ai/dsh-tool-csv` — DSH CSV 数据工具插件：解析/查询/统计/转换 CSV 文本（RFC 4180），零依赖状态机解析器，注册 csv 工具
- [omdsh-dev/dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon) ★3 · `dsh-mnemon` — Mnemon 与 DSH 的深度集成插件，为 DSH 提供完备的本地记忆系统：运行时记忆、可检索档案与受监督记忆体。
- [vlln/dsh-navbar](https://github.com/vlln/dsh-navbar) ★3 · `@dsh-external/dsh-navbar` — DSH 插件：对话节点导航条（右缘节点串快速跳转 user 消息）。官方 bundle 插件，dsh plugin --profile web add 安装
- [zhaoscsc/dsh-wikilink](https://github.com/zhaoscsc/dsh-wikilink) ★2 · `dsh-wikilink` — Obsidian-style [[wikilink]] mentions for the DeepSeek Harness web GUI: fuzzy-search note titles and attach their contents to the prompt
- [dingyi222666/dsh-session-notification](https://github.com/dingyi222666/dsh-session-notification) ★2 · `@dingyi222666/dsh-session-notification` — 提供会话完成等四种状态的通知响应，支持浏览器提示和提示词
- [detpecca/dsh-llm-wiki](https://github.com/detpecca/dsh-llm-wiki) ★2 · `@detpecca/dsh-llm-wiki` — DeepSeek Harness plugin — manage an LLM-Wiki knowledge base from the agent: wiki_search / wiki_read / wiki_stats / wiki_validate / wiki_errorbook / wiki_ingest
- [omdsh-dev/dsh-tool-schema](https://github.com/omdsh-dev/dsh-tool-schema) ★2 · `@deepseek-ai/dsh-tool-schema` — DSH JSON Schema 验证工具插件：validate/paths/explain/normalize，零网络零动态执行
- [lunw/shopline-ai-toolkit-dsh](https://github.com/lunw/shopline-ai-toolkit-dsh) ★2 · `shopline-ai-toolkit-dsh` — SHOPLINE AI Toolkit for DeepSeek Harness (dsh-plugin): official SHOPLINE Developer MCP bridge + SHOPLINE agent skills, mirroring the Shopify AI Toolkit architecture. dsh-plugin
- [omdsh-dev/dsh-tool-stat](https://github.com/omdsh-dev/dsh-tool-stat) ★2 · `@deepseek-ai/dsh-tool-stat` — DSH 统计工具插件：描述统计/百分位数/频数分布/相关性，零依赖纯函数确定性
- [XYZ1024-alt/dsh-side-panel](https://github.com/XYZ1024-alt/dsh-side-panel) ★2 · `dsh-side-panel` — Right-side developer panel for DeepSeek Harness: files, session history, and git version control
- [omdsh-dev/dsh-tool-time](https://github.com/omdsh-dev/dsh-tool-time) ★2 · `@deepseek-ai/dsh-tool-time` — DSH 时间工具插件：严格 ISO 8601 解析、IANA 时区转换、UTC 日历运算、固定时长差，零依赖
- [omdsh-dev/dsh-tool-encoding](https://github.com/omdsh-dev/dsh-tool-encoding) ★2 · `@deepseek-ai/dsh-tool-encoding` — DSH 编码/哈希工具插件：base64/base64url/url/hex 编解码、md5/sha1/sha256/sha512 哈希、UUID 生成，零依赖
- [omdsh-dev/dsh-tool-markdown](https://github.com/omdsh-dev/dsh-tool-markdown) ★2 · `@deepseek-ai/dsh-tool-markdown` — DSH Markdown 工具插件：HTML↔Markdown 转换、GFM 表格规范化、目录生成，零依赖轻量解析器，注册 markdown 工具
- [omdsh-dev/dsh-tool-diff](https://github.com/omdsh-dev/dsh-tool-diff) ★2 · `@deepseek-ai/dsh-tool-diff` — DSH Diff 工具插件：文本/JSON/CSV/Markdown 结构化比较与 unified diff，零依赖只读，注册 diff 工具
- [omdsh-dev/dsh-tool-json](https://github.com/omdsh-dev/dsh-tool-json) ★2 · `@deepseek-ai/dsh-tool-json` — DSH JSON 查询工具插件：JMESPath 子集查询，零依赖递归下降解析器
- [omdsh-dev/Qwen-MM-Plugins](https://github.com/omdsh-dev/Qwen-MM-Plugins) ★1 · `@deepseek-ai/dsh-qwen-mm` — Qwen-MM-Plugins支持
- [yuzi-ska/DSH-Chrome-devtools](https://github.com/yuzi-ska/DSH-Chrome-devtools) ★1 · `dsh-chrome-devtools` — Real Chrome browser control for DeepSeek Harness agents, powered by Chrome DevTools MCP
- [bitterSmilezzz/dsh-model-selector](https://github.com/bitterSmilezzz/dsh-model-selector) ★1 · `dsh-model-selector` — DeepSeek Harness web plugin: provider-group collapse + name search for the conversation model picker.
- [omdsh-dev/omdsh-runtime](https://github.com/omdsh-dev/omdsh-runtime) ★1 · `@omdsh/runtime` — Lightweight OMDSH Runtime for official Profile composition, candidate generations, recovery, and Workshop integration
- [ben7am1n/dsh-security-scan](https://github.com/ben7am1n/dsh-security-scan) ★1 · `dsh-security-scan` — Secret & dangerous-pattern scanner for DeepSeek Harness — a security_scan tool that finds leaked API keys, tokens, private keys and credential files, with full redaction.
- [HuanLinOTO/dsh-plugin-anti-ads](https://github.com/HuanLinOTO/dsh-plugin-anti-ads) ★1 · `@huanlin/dsh-plugin-anti-ads` — DSH ad-suppression plugin: writes dsh-ads's own settings key to all-false, broadcasts its retire event, scrubs its portal from the DOM, and short-circuits its dynamic-tier fetch. Four layers, all client-side, all removable from a settings page of its own.
- [bill9109/dsh-webbridge](https://github.com/bill9109/dsh-webbridge) ★1 · `@bill9109/dsh-webbridge` — DSH 结合 Kimi WebBridge
- [RealAlexandreAI/dsh-all-search](https://github.com/RealAlexandreAI/dsh-all-search) ★1 · `dsh-all-search` — dsh search: AnySearch web search provider for DeepSeek Harness (ctx.web)
- [longyu065/dsh-session-index](https://github.com/longyu065/dsh-session-index) ★1 · `dsh-session-index` — 会话全文索引插件：监听 session/event 构建跨会话索引，提供 session_search / session_index_stats 工具，优先使用框架自带 ctx.sessionQuery (SQLite FTS5)
- [PangYiMing/dsh-browser-control](https://github.com/PangYiMing/dsh-browser-control) ★1 · `dsh-browser-control` — DSH plugin for controlling browsers (CDP/Playwright) — DeepSeek Harness 操控浏览器插件
- [gxpppp/dsh-search-mcp](https://github.com/gxpppp/dsh-search-mcp) ★1 · `dsh-search-mcp` — Replace dsh's built-in web search with search MCP servers (Tavily/Brave/Exa/Perplexity/DuckDuckGo/custom), configured from the web Settings page. Disables the built-in DeepSeek search provider while enabled.
- [bill9109/dsh-101](https://github.com/bill9109/dsh-101) ★1 · `@dsh-external/dsh-101` — DSH 文档阅读模式
- [Moeblack/dsh-payload-capture](https://github.com/Moeblack/dsh-payload-capture) ★1 · `dsh-payload-capture` — DSH 插件：捕捉每次上行模型 API payload，JSON 落盘
- [Jesse-njx/dsh-skillport](https://github.com/Jesse-njx/dsh-skillport) ★1 · `@dsh-skillport/bundle` — Every skill you already have — Claude Code, Codex, Cursor, Gemini CLI — works in DSH: Agent Skills SKILL.md discovery, Tier-2 conversions, find_skill search, and a skills doctor
- [1475505/dsh-plugin-miliastra-toolbox](https://github.com/1475505/dsh-plugin-miliastra-toolbox) ★1 · `dsh-plugin-miliastra-toolbox` — 将千星沙箱（原神千星奇域）知识库接入 Deepseek Harness 的插件
- [PangYiMing/dsh-screenshot-diff](https://github.com/PangYiMing/dsh-screenshot-diff) ★1 · `dsh-screenshot-diff` — DSH plugin: pixel-diff two screenshots into diff.png + triptych (pixelmatch) — 像素对比工具
- [HuanLinOTO/dsh-plugin-aigc-canvas](https://github.com/HuanLinOTO/dsh-plugin-aigc-canvas) ★1 · `@huanlin/dsh-plugin-aigc-canvas` — DSH plugin: provider-agnostic AIGC HTTP bridge + free canvas + ffmpeg post-processing. Exposes aigc_get_provider_info / aigc_http_request (endpoint + apiKey auto-attached) / aigc_provider_set_instructions / aigc_provider_get_instructions / aigc_canvas_place / aigc_canvas_link / aigc_canvas_unlink / aigc_canvas_list_elements / aigc_media_edit tools; generated files are placed at arbitrary canvas positions and can be double-clicked for prompt + params.
- [AnacondaKC/dsh-custom-css](https://github.com/AnacondaKC/dsh-custom-css) ★1 · `dsh-custom-css` — DSH WebUI 自定义 CSS 插件：共享样式、冲突保护与本地文件导入
- [Dino6021/dsh-usage-cost](https://github.com/Dino6021/dsh-usage-cost) ★1 · `dsh-usage-cost` — DSH plugin: per-step timestamped DeepSeek API usage timeline + peak/off-peak cost readout. Official bundle; install via: dsh plugin --profile web add github:Dino6021/dsh-usage-cost#main
- [YYTbit/dsh-plugin-vision-toolkit](https://github.com/YYTbit/dsh-plugin-vision-toolkit) ★1 · `dsh-plugin-vision-toolkit` — Vision toolkit for DeepSeek Harness -- give text-only agents eyes
- [omdsh-dev/dsh-book2skill](https://github.com/omdsh-dev/dsh-book2skill) ★1 · `dsh-book2skill` — DSH book-to-skill plugin: a 5-stage long task (fetch → parse → understand → generate → install) with 3 human gates, host tools for the agent and a browser timeline panel
- [YYTbit/dsh-plugin-rag](https://github.com/YYTbit/dsh-plugin-rag) ★1 · `dsh-plugin-rag` — Local knowledge base RAG for DeepSeek Harness
- [vibeinging/dsh-tool-search](https://github.com/vibeinging/dsh-tool-search) ★1 · `@deepseek-ai/dsh-tool-search` — Per-agent on-demand tool discovery and progressive schema disclosure for DeepSeek Harness
- [Jesse-njx/dsh-memory](https://github.com/Jesse-njx/dsh-memory) ★1 · `@dsh-memory/bundle` — Cited memory over DSH's lossless session log — distilled, human-auditable facts with citations back to the exact source events; memory_read/memory_expand tools, recall index, and a dsh-memory CLI.
- [gordonlu/dsh-context-lens](https://github.com/gordonlu/dsh-context-lens) ★1 · `dsh-context-lens` — Request Context Profiler for DeepSeek Harness — see what changed between model requests, and how cache reuse changed with it.
- [zhouzhencheng07/dsh-tavily-search](https://github.com/zhouzhencheng07/dsh-tavily-search) ★1 · `dsh-tavily-search` — Free keyless Tavily web search tool for DeepSeek Harness (dsh)
- [TecFancy/dsh-deeptutor](https://github.com/TecFancy/dsh-deeptutor) ★1 · `dsh-deeptutor` — DeepTutor bridge bundle for DeepSeek Harness (dsh): learning capabilities, knowledge bases & note archiving. | DeepTutor 桥接插件(bundle),为 DeepSeek Harness 提供学习能力、知识库与笔记归档工具。
- [yangzhe1003/dsh-web-search-firecrawl](https://github.com/yangzhe1003/dsh-web-search-firecrawl) ★1 · `@yangzhe1003/dsh-web-search-firecrawl` — Firecrawl-backed search provider plugin for the DeepSeek Harness web capability seam (ctx.web)
- [YJSoooooo/dsh-chrome](https://github.com/YJSoooooo/dsh-chrome) ★0 · `dsh-chrome` — Chrome profile bridge for DeepSeek Harness: control an existing signed-in Chrome profile through chrome_repl.
- [Jesse-njx/dsh-voice](https://github.com/Jesse-njx/dsh-voice) ★0 · `@dsh-voice/bundle` — Voice notes in, spoken answers out — dictate audio that becomes user messages (transcribe), have the agent read replies aloud (speak), and leave walk-away narration on long headless runs. Local-first: plain audio files under ~/.dsh/voice/.
- [Moximxxx/dsh-find-skill](https://github.com/Moximxxx/dsh-find-skill) ★0 · `dsh-find-skill` — dsh plugin bridging the vercel-labs/skills ecosystem: LLM-driven skill search, install, and lifecycle for temp/project/global scopes.
- [RRRosmontis/dsh-qwen-mm](https://github.com/RRRosmontis/dsh-qwen-mm) ★0 · `@deepseek-ai/dsh-qwen-mm` — Qwen-MM-Plugins integration bundle for DeepSeek Harness (dsh) — multimodal MCP tools (vision, OCR, ASR, search, video, Blender, FreeCAD) + image attachment bridge. 让 DeepSeek Harness 原生支持多模态。
- [lxj808624/dsh-tool-git](https://github.com/lxj808624/dsh-tool-git) ★0 · `dsh-tool-git` — Structured safe Git tools for DeepSeek Harness (dsh): git_status/diff/log/branch/stage/commit/stash/show + destructive-command guard
- [why913/dshx](https://github.com/why913/dshx) ★0 · `dshx` — The missing companion CLI for DeepSeek Harness (dsh): manage MCP servers with dry-run checks, migrate from Claude Code / Codex in one command | dsh 的 MCP 管理与迁移工具

### 通知与监控 / Notifications & Monitoring

- [NanmiCoder/dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) ★66 · `dsh-agent-teams` — AgentTeams plugin for DeepSeek Harness
- [congchuanling-dot/DSH-Telegram-Relay](https://github.com/congchuanling-dot/DSH-Telegram-Relay) ★2 · `dsh-telegram-relay` — DSH Relay 让你可以通过 Telegram 远程与 DeepSeek Harness 对话，并接收通知。DSH Relay turns Telegram into a remote conversation and notification channel for DeepSeek Harness.
- [MuziIsabel/dsh-win-notify](https://github.com/MuziIsabel/dsh-win-notify) ★2 · `dsh-win-notify` — DSH plugin: Windows toast notification with sound when an agent task completes
- [yoke233/dsh-tool-monitor](https://github.com/yoke233/dsh-tool-monitor) ★1 · `dsh-tool-monitor` — Monitor existing DeepSeek Harness background jobs without running commands twice
- [ben7am1n/dsh-deepseek-usage](https://github.com/ben7am1n/dsh-deepseek-usage) ★1 · `dsh-deepseek-usage` — DeepSeek balance and token usage tools for DeepSeek Harness
- [sjscy05/dsh-task-progress-notifier](https://github.com/sjscy05/dsh-task-progress-notifier) ★1 · `dsh-task-progress-notifier` — DeepSeek Harness plugin: track todo_write progress and pop native desktop reminders (bottom-right).
- [kiim-wong/dsh-push](https://github.com/kiim-wong/dsh-push) ★0 · `dsh-push` — Push DeepSeek Harness agent lifecycle notifications to configurable channels

### 开发辅助 / Development Helpers

- [jiesou/dsh-stream-rules](https://github.com/jiesou/dsh-stream-rules) ★2 · `dsh-stream-rules` — Inject rules when needed, without wasting context. Similar to oh-my-pi's "Time-traveling stream rules", but with a very simple and compact code implementation.
- [erduotong/dsh-plugin-graph](https://github.com/erduotong/dsh-plugin-graph) ★2 · `dsh-plugin-graph` — 一个Deepseek Harness的插件关系图谱可视化插件
- [YYTbit/dsh-plugin-meta-memory](https://github.com/YYTbit/dsh-plugin-meta-memory) ★1 · `dsh-plugin-meta-memory` — Structured long-term memory system for DeepSeek Harness
- [cking000bigdemon/dsh-toolbelt](https://github.com/cking000bigdemon/dsh-toolbelt) ★1 · `dsh-toolbelt` — Eight DeepSeek Harness plugins: persona, language guard, per-request vision fallback, python/windows write guards, cross-agent memory, image generation, and skill shell injection.
- [PangYiMing/dsh-bisect-debug](https://github.com/PangYiMing/dsh-bisect-debug) ★1 · `dsh-bisect-debug` — DSH plugin: bisect bugs (code / boundary / commit) — 二分法定位 bug 根因
- [ben7am1n/dsh-lens-lite](https://github.com/ben7am1n/dsh-lens-lite) ★1 · `dsh-lens-lite` — Post-edit diagnostics for DeepSeek Harness
- [a179-sanae/dsh-code-check](https://github.com/a179-sanae/dsh-code-check) ★1 · `@a179-sanae/dsh-code-check` — Auto type-check and lint diagnostics for DeepSeek Harness: after the model edits code, tsc runs in the background and a code_check tool reports what broke
- [suimi8/dsh-test-runner](https://github.com/suimi8/dsh-test-runner) ★0 · `dsh-test-runner` — DSH plugin: structured test runner tool (test_run) — auto-detect vitest/jest/pytest/node:test, run tests, parse failure summaries for the model.

### 学习与教育 / Learning & Education

- [cendaifeng/dsh-learn-everything](https://github.com/cendaifeng/dsh-learn-everything) ★2 · `dsh-learn-everything` — Feynman learning-mode plugin for DeepSeek Harness: /learn on|off, structured lesson cards, rich HTML teaching.

### 其他 / Miscellaneous

- [liustack/modlens](https://github.com/liustack/modlens) ★688 · `@liustack/modlens` — The first vision plugin for DeepSeek Harness, and the vision bridge for every text-only coding agent. Paste an image, get structured JSON evidence (OCR, layout, semantics).
- [omdsh-dev/dsh-open-in-vscode](https://github.com/omdsh-dev/dsh-open-in-vscode) ★34 · `dsh-open-in-vscode` — Open DeepSeek Harness workspace directories in VS Code directly from the web GUI.
- [vlln/whale-girl](https://github.com/vlln/whale-girl) ★24 · `whale-girl` — DSH Web GUI 桌面宠物插件（QQ 宠物形态）：右下角悬浮、可拖拽/投喂/玩耍的积累型伙伴。官方 repository-plugin（.dsh-plugin 格式），config.yaml 安装：github:dsh-external/whale-girl#<ref>&path:/.dsh-plugin
- [Anionex/dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind) ★22 · `@dsh-external/turn-rewind` — deepseek harness对话回退插件 | DSH — rewind conversation and workspace state, powered by a persistent Change Ledger
- [Chinesezjc/dsh-interconnect](https://github.com/Chinesezjc/dsh-interconnect) ★14 · `dsh-interconnect` — Cross-instance message/event handoff plugins for DSH (interconnect service + tools)
- [Anionex/dsh-computer-use](https://github.com/Anionex/dsh-computer-use) ★12 · `@dsh-external/dsh-computer-use` — 为 DeepSeek Harness 提供电脑控制插件：新鲜 Accessibility 观测、过期状态拒绝、作用域权限与安全输入（目前支持macos）｜Accessibility-first macOS Computer Use bundle for DSH with fresh observations, stale-state rejection, scoped permissions, and safe input.
- [Moeblack/dsh-message-edit](https://github.com/Moeblack/dsh-message-edit) ★11 · `dsh-message-edit` — DSH plugin: branch-based message editing, reroll, retry, version timeline
- [hellodigua/dsh-share](https://github.com/hellodigua/dsh-share) ★10 · `@dsh-external/dsh-share` — dsh对话分享插件，一键分享你的对话
- [bobleer/dsh-acp-for-bitfun](https://github.com/bobleer/dsh-acp-for-bitfun) ★9 · `dsh-acp-for-bitfun` — BitFun 与 DSH ACP 交互对接 插件
- [forrestchang/dsh-multica-runtime](https://github.com/forrestchang/dsh-multica-runtime) ★6 · `@multica-ai/dsh-runtime` — Support dsh runtime on Multica.
- [william-jin-cmu/dsh-stickers](https://github.com/william-jin-cmu/dsh-stickers) ★6 · `@dsh-external/dsh-stickers` — DSH WebUI sticker plugin for bidirectional user and agent reactions
- [Degurechaff57/dsh-openapi](https://github.com/Degurechaff57/dsh-openapi) ★4 · `dsh-openapi` — Safe OpenAPI 3.x discovery and API calling tools for DeepSeek Harness
- [happyren/dsh-agent-messaging](https://github.com/happyren/dsh-agent-messaging) ★4 · `dsh-agent-messaging` — Cross-session agent-to-agent messaging for DeepSeek Harness — address another session by name and deliver a message into its inbox.
- [YYTbit/dsh-plugin-cost-tracker](https://github.com/YYTbit/dsh-plugin-cost-tracker) ★3 · `dsh-plugin-cost-tracker` — Token cost tracker for DeepSeek Harness
- [ZeroHackz/OpenFlowFrames](https://github.com/ZeroHackz/OpenFlowFrames) ★3 · `@zerohackz/dsh-openflowframes` — DeepSeek Harness plugin exposing OpenFlowFrames video frame interpolation (RIFE) as agent tools
- [AnacondaKC/dsh-stock-market](https://github.com/AnacondaKC/dsh-stock-market) ★3 · `dsh-stock-market` — 有效解决了写代码的时候账户不能同时亏钱的BUG
- [codeAnqiang-ma/dsh-superpowers](https://github.com/codeAnqiang-ma/dsh-superpowers) ★2 · `dsh-superpowers` — Superpowers (obra/superpowers) as a DeepSeek Harness plugin: the methodology skills plus their session bootstrap
- [yuxino/dsh-blue-whale-maid](https://github.com/yuxino/dsh-blue-whale-maid) ★2 · `dsh-blue-whale-maid` — 蓝鲸女仆 — a desktop pixel pet for the DeepSeek Harness web GUI (artwork by simashui @ codex-pets.net)
- [sakikoTGW/pack-agent](https://github.com/sakikoTGW/pack-agent) ★2 · `@sakikotgw/pack-agent` — Agent Modpack — 像装 MC 整合包一样，装你的 agent。
- [omdsh-dev/dsh-hub](https://github.com/omdsh-dev/dsh-hub) ★2 · `@omdsh/dsh-hub` — OMDSH community extension hub built on official DeepSeek Harness contracts
- [HuanLinOTO/dsh-plugin-interpreters](https://github.com/HuanLinOTO/dsh-plugin-interpreters) ★2 · `@huanlin/dsh-plugin-interpreters` — Exposes run_python and run_node tools with configurable interpreter paths; settings card (via /interpreters/api HTTP route) lets users set the executable locations.
- [HuanLinOTO/dsh-plugin-ya-workspace-sidebar](https://github.com/HuanLinOTO/dsh-plugin-ya-workspace-sidebar) ★2 · `@huanlin/dsh-plugin-ya-workspace-sidebar` — Two-level DSH workspace sidebar with global recent sessions and breadcrumb navigation.
- [omdsh-dev/sandbox-micro](https://github.com/omdsh-dev/sandbox-micro) ★2 · `@deepseek-ai/dsh-sandbox-microsandbox` — microsandbox支持
- [Moeblack/deepseek-manners](https://github.com/Moeblack/deepseek-manners) ★2 · `deepseek-manners` — DSH 插件：给每次消息后注入感谢语（deepseek-manners）
- [nowledge-co/nowledge-mem-deepseek-harness](https://github.com/nowledge-co/nowledge-mem-deepseek-harness) ★2 · `nowledge-mem-deepseek-harness` — Nowledge Mem community plugin bundle for DeepSeek Harness
- [YYTbit/dsh-plugin-codex-bridge](https://github.com/YYTbit/dsh-plugin-codex-bridge) ★2 · `dsh-plugin-codex-bridge` — Bridge codex skills and config into DeepSeek Harness
- [morlay/session-persistence-rdb](https://github.com/morlay/session-persistence-rdb) ★2 · `@morlay/session-persistence-rdb` — session 关系型数据库持久化
- [LingLambda/dsh-undo](https://github.com/LingLambda/dsh-undo) ★2 · `dsh-undo` — Context undo/redo plugin for DeepSeek Harness (dsh): roll the model context back to the last completed step and restore it again.
- [keleus/deepseek-pet](https://github.com/keleus/deepseek-pet) ★2 · `deepseek-pet` — 在你的deepseek-harness上养一只吃白饭的大蓝鲸
- [YYTbit/dsh-plugin-claude-bridge](https://github.com/YYTbit/dsh-plugin-claude-bridge) ★2 · `dsh-plugin-claude-bridge` — Bridge Claude Code memory, skills, and config into DeepSeek Harness
- [YYTbit/dsh-plugin-opencode-bridge](https://github.com/YYTbit/dsh-plugin-opencode-bridge) ★2 · `dsh-plugin-opencode-bridge` — Bridge opencode skills and config into DeepSeek Harness
- [yoke233/dsh-openai-codex-auth](https://github.com/yoke233/dsh-openai-codex-auth) ★2 · `dsh-openai-codex-auth` — OpenAI Codex OAuth login and usage card plugin for DeepSeek Harness
- [LiangYin233/dsh-model-config-sync](https://github.com/LiangYin233/dsh-model-config-sync) ★2 · `dsh-model-config-sync` — DSH 高级模型配置器：为 DeepSeek Harness 提供将 pi-ai 预设模型的上下文、输出上限、推理挡位一键应用到自定义提供商的能力。
- [bobleer/deepseek-harness-plugin-mcp](https://github.com/bobleer/deepseek-harness-plugin-mcp) ★2 · `deepseek-harness-plugin-mcp` — MCP server that lets any agent discover, install, and run DeepSeek Harness plugins (topic: dsh-plugin).
- [PerryLink/dsh-claude-move](https://github.com/PerryLink/dsh-claude-move) ★2 · `dsh-claude-move` — DeepSeek Harness (dsh) plugin: migrate Claude Code sessions, memory, skills and CLAUDE.md into DSH with seamless resume (claude_scan / import_claude / resume-claude / web panel)
- [vibeinging/dsh-trace](https://github.com/vibeinging/dsh-trace) ★2 · `@deepseek-ai/dsh-trace` — DeepSeek Harness telemetry backend that exports turns, model steps, and tool calls to yiTrace over HTTP.
- [JasonJin2006/dsh-sound-effects-plugin](https://github.com/JasonJin2006/dsh-sound-effects-plugin) ★2 · `dsh-sound-effects-plugin` — Reasonix-style sound effects for DeepSeek Harness: generative pentatonic ambient music while the agent works, E6-G6-C7 success chime, A6-E6 attention chime (Web Audio, zero assets).
- [YYTbit/dsh-plugin-pi-bridge](https://github.com/YYTbit/dsh-plugin-pi-bridge) ★2 · `dsh-plugin-pi-bridge` — Bridge pi skills and config into DeepSeek Harness
- [hyqhyq3/dsh-mcp-manager](https://github.com/hyqhyq3/dsh-mcp-manager) ★2 · `dsh-mcp-manager` — MCP server manager plugin for DeepSeek Harness: Settings → MCP page, OAuth (PKCE + dynamic client registration) or static-token auth, tools registered as mcp__<name>__*
- [fakechris/dsh-track](https://github.com/fakechris/dsh-track) ★2 · `@deepseek-ai/dsh-track` — DSH Track Bridge 插件：嵌入式任务管理引擎——决策点协议、念头捕获墙、Linear 形 issue 存储（bundle），AI 与人之间的任务轨道
- [hashdiana/dsh-token-usage](https://github.com/hashdiana/dsh-token-usage) ★2 · `dsh-token-usage` — 更清晰美观的会话 Token 用量条：上下文占用、输入/输出/缓存分解、吞吐与首字延迟，取代默认的纯文本 stats 行
- [HuanLinOTO/dsh-plugin-sleep](https://github.com/HuanLinOTO/dsh-plugin-sleep) ★2 · `@huanlin/dsh-plugin-sleep` — DSH plugin exposing a single `sleep` tool that lets the model pause for a configurable number of milliseconds, honoring cancellation.
- [omdsh-dev/session-teleport](https://github.com/omdsh-dev/session-teleport) ★1 · `@mattheliu/session-teleport` — PostgreSQL-backed single-writer session handoff service for DeepSeek Harness
- [HuanLinOTO/dsh-plugin-d399](https://github.com/HuanLinOTO/dsh-plugin-d399) ★1 · `@huanlin/dsh-plugin-d399` — 深夜寂寞？来玩 D399 — 当模型生成时弹出小游戏菜单（wordle / 消消乐，可拓展游戏注册表）
- [bill9109/dsh-conversation-share](https://github.com/bill9109/dsh-conversation-share) ★1 · `@bill9109/dsh-conversation-share` — 分享任意段落的 DSH 对话
- [Small-tailqwq/dsh-tps](https://github.com/Small-tailqwq/dsh-tps) ★1 · `@dsh-external/tps` — 只是一个 tps 插件
- [wingoo/codex-plugin-dsh](https://github.com/wingoo/codex-plugin-dsh) ★1 · `codex-plugin-dsh` — Use local Codex App Server as a model provider in DeepSeek Harness
- [030611/qiushi-dsh-evidence-audit](https://github.com/030611/qiushi-dsh-evidence-audit) ★1 · `qiushi-dsh-evidence-audit` — Observe-only hash-chained evidence receipts for DeepSeek Harness
- [0xsline/dsh-spotlight](https://github.com/0xsline/dsh-spotlight) ★1 · `@dsh-external/dsh-spotlight` — Keyboard-first command palette for DeepSeek Harness Web
- [Liu-ty/dsh-balance-display](https://github.com/Liu-ty/dsh-balance-display) ★1 · `dsh-balance-display` — DeepSeek API balance overlay for DeepSeek Harness
- [ilharp/dsh-tool-approval](https://github.com/ilharp/dsh-tool-approval) ★1 · `dsh-tool-approval` — Manual approval for Deepseek Harness (aka "Manual Mode"/"Ask Mode")
- [ben7am1n/dsh-memory](https://github.com/ben7am1n/dsh-memory) ★1 · `dsh-memory` — Durable cross-session SQLite memory for DeepSeek Harness
- [vibeinging/dsh-agent-budget](https://github.com/vibeinging/dsh-agent-budget) ★1 · `@deepseek-ai/dsh-agent-budget` — Native Harness agent-tree token budget plugin
- [omdsh-dev/dsh-voice-funasr](https://github.com/omdsh-dev/dsh-voice-funasr) ★1 · `dsh-voice-funasr` — DSH web plugin: local offline FunASR voice input (paraformer int8 onnx sidecar, Web Speech fallback, LLM polish).
- [YYTbit/dsh-plugin-auto-docs](https://github.com/YYTbit/dsh-plugin-auto-docs) ★1 · `dsh-plugin-auto-docs` — Auto documentation generation skill for DeepSeek Harness
- [PangYiMing/dsh-mobile-control](https://github.com/PangYiMing/dsh-mobile-control) ★1 · `dsh-mobile-control` — DSH plugin for controlling mobile devices (ADB/iOS) — DeepSeek Harness 操控手机插件
- [bitterSmilezzz/dsh-skill-manager](https://github.com/bitterSmilezzz/dsh-skill-manager) ★1 · `dsh-skill-manager` — Skills management page for DeepSeek Harness Web Settings (dsh plugin)
- [yoke233/dsh-pixel-whale](https://github.com/yoke233/dsh-pixel-whale) ★1 · `dsh-pixel-whale` — A lively pixel-whale running-state companion for DeepSeek Harness Web.
- [ben7am1n/dsh-claude-marketplace](https://github.com/ben7am1n/dsh-claude-marketplace) ★1 · `dsh-claude-marketplace` — Claude Code marketplace compatibility for DeepSeek Harness
- [PixLunaLab/dsh-plugin-pixluna](https://github.com/PixLunaLab/dsh-plugin-pixluna) ★1 · `dsh-plugin-pixluna` — dsh-plugin-pixluna | 让 DSH 自己看涩图！
- [tree201/dsh-capability-inspector](https://github.com/tree201/dsh-capability-inspector) ★1 · `dsh-capability-inspector` — DeepSeek Harness Doctor and DSH runtime diagnostics for tools, models, skills, workspaces, sessions, plugins, and MCP troubleshooting
- [hccccc01333/dsh-report-html](https://github.com/hccccc01333/dsh-report-html) ★1 · `dsh-report-html` — Generate self-contained interactive HTML reports from Markdown, tables, charts, China province maps, flowcharts, math, and drill-down tables — a DeepSeek Harness (dsh) plugin
- [dongsheng123132/task-passport](https://github.com/dongsheng123132/task-passport) ★1 · `task-passport` — 让任务状态在 DeepSeek Harness、Claude Code、Codex 等 AI Harness 之间接力
- [omdsh-dev/dsh-fun-typewriter](https://github.com/omdsh-dev/dsh-fun-typewriter) ★1 · `@deepseek-ai/dsh-fun-typewriter` — DSH Typewriter: WebAudio typing ambience with a plugin-owned settings API and zero audio assets
- [PangYiMing/dsh-port-guard](https://github.com/PangYiMing/dsh-port-guard) ★1 · `dsh-port-guard` — DSH plugin: triage port conflicts (reuse / switch / precise kill) — 端口占用处置
- [omdsh-dev/dsh-paddle-ocr](https://github.com/omdsh-dev/dsh-paddle-ocr) ★1 · `dsh-paddle-ocr` — DSH PaddleOCR (百度 PaddleOCR-VL 文档布局解析) plugin: OCR tools plus a settings card and task panel
- [YYTbit/dsh-plugin-context-compressor](https://github.com/YYTbit/dsh-plugin-context-compressor) ★1 · `dsh-plugin-context-compressor` — Context compression skill for DeepSeek Harness
- [PangYiMing/dsh-batch-regression](https://github.com/PangYiMing/dsh-batch-regression) ★1 · `dsh-batch-regression` — DSH plugin: run a command N rounds, judge by median/distribution — 批量回归取统计结论
- [omdsh-dev/dsh-scout](https://github.com/omdsh-dev/dsh-scout) ★1 · `@deepseek-ai/dsh-tool-scout` — 面向 DeepSeek Harness 的只读环境探测插件，为智能体提供运行环境、软件版本、系统资源、端口、服务、硬件及工作区信息。
- [Drifter-yh/dsh-tool-policy](https://github.com/Drifter-yh/dsh-tool-policy) ★1 · `dsh-tool-policy` — Declarative deny-by-default tool policy plugin for DeepSeek Harness
- [pinkllo/dsh-reasoning-translator](https://github.com/pinkllo/dsh-reasoning-translator) ★1 · `dsh-reasoning-translator` — DeepSeek Harness plugin: make the model write its chain-of-thought in your language
- [jihongboo/dsh-apple-mode](https://github.com/jihongboo/dsh-apple-mode) ★1 · `dsh-apple-mode` — Xcode AI integration for DeepSeek Harness: 26 Xcode MCP tools (mcpbridge), Apple platform skills, Xcode Intelligence-style persona. Agent preset + global MCP bundle.
- [pandashere/dsh-codex-bridge](https://github.com/pandashere/dsh-codex-bridge) ★1 · `dsh-codex-bridge` — Codex CLI bridge plugin for DeepSeek Harness with host tools and a Web conversation tab.
- [jumpserver-east/jumpserver-dsh](https://github.com/jumpserver-east/jumpserver-dsh) ★1 · `dsh-jumpserver` — DeepSeek Harness plugin: manage JumpServer assets and operate on them through KoKo
- [lin-cheng-lab/dsh-deepseek-balance](https://github.com/lin-cheng-lab/dsh-deepseek-balance) ★1 · `dsh-deepseek-balance` — DeepSeek API 余额监视器：DSH 右下角悬浮徽章 + 7天/30天用量费用图表
- [omdsh-dev/dsh-pet-corner](https://github.com/omdsh-dev/dsh-pet-corner) ★1 · `@deepseek-ai/dsh-pet-corner` — DSH Pet Corner: a floating pet, keyless pet-image proxy, favorites, and plugin-owned settings API
- [qyw233/dsh-deeplink](https://github.com/qyw233/dsh-deeplink) ★1 · `@dsh-community/dsh-deeplink` — DSH WebUI 深链插件：?session=/?workspace= 直接打开指定项目对话
- [zimixvx/dsh-archive-manager](https://github.com/zimixvx/dsh-archive-manager) ★1 · `dsh-archive-manager` — A minimal DeepSeek Harness Web plugin that lists archived sessions and permanently deletes an archived session directory after explicit confirmation.
- [lin-cheng-lab/dsh-plugin-doctor](https://github.com/lin-cheng-lab/dsh-plugin-doctor) ★1 · `dsh-plugin-doctor` — DSH 插件体检：安装前检查 peer 版本兼容性，防止 rc 不匹配崩溃 🩺
- [omdsh-dev/web-components](https://github.com/omdsh-dev/web-components) ★1 · `@deepseek-ai/dsh-client-web-component` — web-components支持
- [omdsh-dev/dsh-daily-fortune](https://github.com/omdsh-dev/dsh-daily-fortune) ★1 · `@deepseek-ai/dsh-daily-fortune` — DSH daily fortune plugin with Guan Yin lots, Tarot spreads, and daily quotes
- [918154429/dsh-codex-import](https://github.com/918154429/dsh-codex-import) ★1 · `dsh-codex-import` — Read-only Codex setup compatibility scanner for DeepSeek Harness
- [tappass/dsh-governance](https://github.com/tappass/dsh-governance) ★1 · `@tappass/dsh-governance` — The authority layer for agentic AI, as a DeepSeek Harness plugin. Governs every tool call against your business rules via TapPass /v1/govern.
- [DTSFO/dsh-model-modes](https://github.com/DTSFO/dsh-model-modes) ★1 · `dsh-model-modes` — Capability-aware reasoning controls and Fast model routing for DeepSeek Harness
- [HuanLinOTO/dsh-plugin-auto-blame](https://github.com/HuanLinOTO/dsh-plugin-auto-blame) ★1 · `@huanlin/dsh-plugin-auto-blame` — Auto-blame: when a turn closes, asks an LLM for three cynical follow-up prompts and shows them as click-to-send bubbles above the composer. Host-gated master toggle in the settings page.
- [omdsh-dev/sandbox-mxc](https://github.com/omdsh-dev/sandbox-mxc) ★1 · `@deepseek-ai/dsh-sandbox-mxc` — 微软跨平台沙盒支持
- [Opr4Mp3r/deepseek-harness-plugin-from-scratch](https://github.com/Opr4Mp3r/deepseek-harness-plugin-from-scratch) ★1 · `deepseek-harness-plugin-from-scratch` — Code-audited, progressive guide to production-grade DeepSeek Harness plugins
- [shujiTech/dsh-plugin-wepre](https://github.com/shujiTech/dsh-plugin-wepre) ★1 · `dsh-plugin-wepre` — DeepSeek Harness plugin: publish single-screen content cards to WePre Next from a dsh agent session
- [SnowCrescenter-tech/dsh-milestone](https://github.com/SnowCrescenter-tech/dsh-milestone) ★1 · `dsh-milestone` — Git-style milestone timeline for DeepSeek Harness - hover for metadata, click to jump to any message. 会话里程碑导航条：像 Git 提交图一眼定位每条提问，悬停看时间/轮次/耗时/TTFT，点击即跳转。
- [omdsh-dev/dsh-longbridge](https://github.com/omdsh-dev/dsh-longbridge) ★1 · `dsh-longbridge` — DSH Longbridge (长桥) HK/US market plugin: quotes, account, positions and order tools plus a settings surface
- [ben7am1n/dsh-webhook-bridge](https://github.com/ben7am1n/dsh-webhook-bridge) ★1 · `dsh-webhook-bridge` — Generic webhook receiver for DeepSeek Harness — POST to a local endpoint to wake a dsh agent.
- [Moeblack/dsh-skins](https://github.com/Moeblack/dsh-skins) ★1 · `@dsh-external/dsh-web-skins` — Mirror of dsh-external/dsh-skins + feat: harbor (夕港) dusk-harbor skin
- [benzhoupo/dsh-effort-config](https://github.com/benzhoupo/dsh-effort-config) ★1 · `dsh-effort-config` — dsh plugin: configure reasoning-effort levels (wire spellings), route default level and Anthropic token budgets for third-party models from the settings page; selection reuses the native model-picker Effort panel.
- [imetn/dsh-lark-bridge](https://github.com/imetn/dsh-lark-bridge) ★1 · `dsh-lark-bridge` — Bidirectional Lark/Feishu controller for DeepSeek Harness
- [sjscy05/matlab-modelsim-vivado-plugin](https://github.com/sjscy05/matlab-modelsim-vivado-plugin) ★1 · `mmv-dspic` — DeepSeek Harness plugin: MATLAB + ModelSim + Vivado full-flow tools for digital communication IC design tasks (mmv-dspic)
- [omdsh-dev/sandbox-nono](https://github.com/omdsh-dev/sandbox-nono) ★1 · `@deepseek-ai/dsh-sandbox-nono` — nono沙盒支持
- [YYTbit/dsh-plugin-agent-dashboard](https://github.com/YYTbit/dsh-plugin-agent-dashboard) ★1 · `dsh-plugin-agent-dashboard` — Multi-agent dashboard skill for DeepSeek Harness
- [omdsh-dev/dsh-ernie-image](https://github.com/omdsh-dev/dsh-ernie-image) ★1 · `dsh-ernie-image` — DSH ERNIE-Image-Turbo text-to-image plugin: generate images via Baidu AI Studio, save them as durable session attachments, plus a settings card and a generation gallery panel
- [ben7am1n/dsh-mcp-proxy](https://github.com/ben7am1n/dsh-mcp-proxy) ★1 · `dsh-mcp-proxy` — Context-cheap lazy MCP access for DeepSeek Harness
- [vibeinging/dsh-turn-navigator](https://github.com/vibeinging/dsh-turn-navigator) ★1 · `@deepseek-ai/dsh-turn-navigator` — Private DSH Web turn navigation plugin
- [Acidmoon/DIzzy-DSH](https://github.com/Acidmoon/DIzzy-DSH) ★1 · `dizzy-dsh` — My DSH plugins
- [Demogorgon314/dsh-resume-plugin](https://github.com/Demogorgon314/dsh-resume-plugin) ★1 · `dsh-resume-plugin` — 让 DeepSeek Harness 安全读取并继续 Codex 与 Claude Code 的历史会话。
- [030611/dsh-telemetry-redactor](https://github.com/030611/dsh-telemetry-redactor) ★0 · `dsh-telemetry-redactor` — Fail-closed export-copy redaction for DeepSeek Harness session telemetry
- [Jesse-njx/dsh-crosstalk](https://github.com/Jesse-njx/dsh-crosstalk) ★0 · `@dsh-crosstalk/bundle` — Cross-session messaging for DSH — any session on the machine can list and message any other, Claude Code-style
- [bugmaker2/dsh-plugin-template](https://github.com/bugmaker2/dsh-plugin-template) ★0 · `dsh-plugin-template` — Template for deepseek-harness plugin development.
- [030611/dsh-verification-receipt](https://github.com/030611/dsh-verification-receipt) ★0 · `dsh-verification-receipt` — Privacy-minimal heuristic per-turn verification summaries for DeepSeek Harness
- [hashdiana/dsh-archived-sessions](https://github.com/hashdiana/dsh-archived-sessions) ★0 · `dsh-archived-sessions` — 在设置面板中新增“已归档会话”分区：列出被归档的会话（默认在侧边栏不可见），点击即可重新打开
- [121103qwq/dsh-vision-sidecar](https://github.com/121103qwq/dsh-vision-sidecar) ★0 · `dsh-vision-sidecar` — Hosted free vision sidecar for DeepSeek Harness with durable session evidence

## 相关项目与资源 / Related Projects

> 打了 `dsh-plugin` topic 但不是可安装组合包的仓库：启动器、文档、技能集、开发资源等。

- [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) ★36440 — DeepSeek Harness: Everything is a Plugin.
- [titanwings/colleague-skill](https://github.com/titanwings/colleague-skill) ★21032 — 将冰冷的离别化为温暖的 Skill，欢迎加入数字生命1.0！Transforming cold farewells into warm skills? It's giving rebirth era. Welcome to Digital Life 1.0. 🫶
- [Devin-AXIS/iPolloWork](https://github.com/Devin-AXIS/iPolloWork) ★3532 — Local-first visual AI workspace for editable code, docs, presentations, design, and video. DeepSeek Harness subagent collaboration is in active development.
- [whiteguo233/OpenBiliClaw](https://github.com/whiteguo233/OpenBiliClaw) ★1902 — 本地私有、开源的跨平台 AI 内容发现 Agent：先理解你，再主动从 B站、小红书、抖音、YouTube、X、知乎、Reddit、微博等平台与开放 Web 寻找内容。 | Local-first open-source cross-platform AI content discovery agent: understands you, then proactively finds content across Bilibili, Xiaohongshu, Douyin, YouTube, X, Zhihu, Reddit, Weibo and the open web.
- [paean-ai/deeptide](https://github.com/paean-ai/deeptide) ★1013 — Built by DeepSeek, for DeepSeek — a Swift-native macOS coding agent
- [nutshellai-tech/mobius](https://github.com/nutshellai-tech/mobius) ★913 — The first self-evolving open-source Agent OS, connecting your team, AI agents, devices, and compute
- [yejiming/MuseAI](https://github.com/yejiming/MuseAI) ★516 — 创建你的 AI 角色，进入你的故事世界。和角色聊天、冒险、穿书，让每一次互动都留下羁绊
- [Anionex/agent-vision-toolkit](https://github.com/Anionex/agent-vision-toolkit) ★507 — 为纯文本模型"看图“设计更好的视觉工具箱和技能，支持多图理解，图片问答，前端UI还原、GUI 自动化等，并可选无缝接入多个主流agent，直接识别粘贴图片｜ A vision toolkit and skill designed for text-only llms — image Q&A, long-screenshot OCR, frontend UI restoration, and GUI automation, with optional seamless integration for Codex, Claude Code, Pi, Oh My Pi, and OpenCode
- [zhu1090093659/dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui) ★467 — Plugin and skin collection for DeepSeek Harness (DSH) Web UI - task board, git graph, right-side panel, remote mobile UI, pet, live token stats, and skin center.
- [linhay/harmony-next.skills](https://github.com/linhay/harmony-next.skills) ★289 — 🚀 Expert guidance for HarmonyOS NEXT (API 12+) development. Covers IDE operations, performance tuning, architecture (HAP/HAR/HSP), and automation testing.
- [PM-Shawn/Abu-Cowork](https://github.com/PM-Shawn/Abu-Cowork) ★279 — Open-source alternative to Claude Cowork — a local-first AI agent desktop app · multi-model · self-evolving skills · privacy-first
- [AdamPlatin123/awesome-dsh-plugins](https://github.com/AdamPlatin123/awesome-dsh-plugins) ★277 — ✨ Awesome DSH Plugins — DeepSeek Harness plugin directory with daily compatibility tracking ｜ DeepSeek Harness 插件生态目录与每日兼容性追踪
- [alaliqing/claude-paper](https://github.com/alaliqing/claude-paper) ★272 — 📚 Claude Code plugin that automates research papers study with automatic material generation, code demonstrations, and interactive web viewer.
- [cofy-x/axern](https://github.com/cofy-x/axern) ★245 — Open-source sandboxes for AI agents, untrusted code execution, and durable services.
- [SepineTam/mcp-for-stata](https://github.com/SepineTam/mcp-for-stata) ★238 — A MCP server for Stata to integrate Stata into your agent.
- [openma-ai/open-managed-agents](https://github.com/openma-ai/open-managed-agents) ★228 — Open-source Claude Managed Agents API implementation and self-hosted Claude Tag-style agent runtime. Drop-in compatible; runs on Cloudflare Workers/Durable Objects or Node.js. Apache 2.0.
- [morluto/rea](https://github.com/morluto/rea) ★170 — Reverse engineer anything with agents, from app behavior down to native binaries.
- [0xsline/awesome-deepseek-harness](https://github.com/0xsline/awesome-deepseek-harness) ★126 — DeepSeek Harness (DSH) ecosystem: curated plugins, tools, and infrastructure from dsh-external/hub and the public dsh-plugin topic.
- [Small-tailqwq/dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale) ★106 — DSH Web 鲸鱼娘皮肤系列(深海女仆工坊 maid-atelier)——CC BY-NC-SA 4.0
- [awesome-dsh-plugin/awesome-dsh-plugin](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin) ★88 — A curated list of plugins for DeepSeek Harness (dsh) · DeepSeek Harness 插件精选列表
- [pulseaiclub/phi](https://github.com/pulseaiclub/phi) ★70 — a coding Agent from pi. sub-agents, hashline edits, and a permission gate
- [taxueseek/argo](https://github.com/taxueseek/argo) ★56 — 专门为 agent 打造的 agent 搜索工具，具备多语言搜索能力，覆盖中文/英文/学术/代码/购物/金融/新闻/百科。
- [Lyn-77/ProMentor](https://github.com/Lyn-77/ProMentor) ★46 — ProMentor 是一个 AI Coding Agent Skill。装上它，你的 AI 编程助手立刻化身为导师——扫描项目架构、生成阶梯式 Chapter、带你手写核心逻辑、自动判题、AI Code Review。
- [btspoony/mstar-harness](https://github.com/btspoony/mstar-harness) ★39 — A Skill-driven Harness/Loop Engineering Workflow Agent Plugin
- [morluto/jacobian](https://github.com/morluto/jacobian) ★37 — Pure mathematics for agents: search for examples and counterexamples, compute exactly, and independently check what a result proves.
- [Alex-Yanggg/awesome-DSH-plugin](https://github.com/Alex-Yanggg/awesome-DSH-plugin) ★30 — A meticulously curated list of useful plugins, extensions, tools and development resources built for DSH, covering productivity enhancement, functional expansion, debugging utilities and custom development modules.
- [morluto/flameox](https://github.com/morluto/flameox) ★30 — Runtime evidence that helps agents trace, profile, and burn down hotspots in application and native code, GPU kernels, and inference stacks.
- [yuukiLike/zeromd](https://github.com/yuukiLike/zeromd) ★28 — Obsidian 零成本同步：iPhone ↔ Mac，GitHub 自动备份。本地优先 + 长期积累。｜Local First. Zero-cost Obsidian sync across iPhone, Mac & GitHub. Let knowledge grow over time.
- [Nagi-ovo/dsh-find-plugins](https://github.com/Nagi-ovo/dsh-find-plugins) ★28
- [Lum1104/dsh-browser](https://github.com/Lum1104/dsh-browser) ★26 — dsh plugin: Chrome sidebar extension that lets DSH operate your browser directly—no vision capabilities required.
- [openguardrails/openguardrails](https://github.com/openguardrails/openguardrails) ★24 — The vendor-neutral protocol for AI agent safety & security — and the neutral benchmark that ranks the vendors.
- [hanelalo/browser-bridge](https://github.com/hanelalo/browser-bridge) ★22 — 让你的agent真的像你一样操控你的浏览器窗口
- [LaplaceYoung/oh-my-dsh](https://github.com/LaplaceYoung/oh-my-dsh) ★21 — oh-my-dsh：面向 DSH (DeepSeek Harness) 的插件生态——700+ 插件，只通过扩展接缝注册，不修改 agent-loop 骨架
- [Electricitysheep/dsh-handbook](https://github.com/Electricitysheep/dsh-handbook) ★20 — DeepSeek Harness (dsh) 从 0 到 1 深度手册：安装/插件开发/性能调优/实测案例/同模型多 Agent 实测对比（中文 + 英文 PDF）
- [bruc3van/awesome-dsh-plugin](https://github.com/bruc3van/awesome-dsh-plugin) ★18 — 用 30 秒找到适合你的 DeepSeek Harness 插件。 不只是仓库列表：这里告诉你插件解决什么问题、适合谁，以及从哪里开始。
- [Ruler4396/dsh-launcher](https://github.com/Ruler4396/dsh-launcher) ★17 — Lightweight Windows launcher for DeepSeek Harness: silent autostart at logon + a minimal WebView2 window instead of a full browser
- [YunTaiHua/illusion-agent](https://github.com/YunTaiHua/illusion-agent) ★16 — Illusion-Agent: Where fantasy meets functionality — an AI agent platform for terminal, browser, any model, any OS.
- [morluto/leantoken](https://github.com/morluto/leantoken) ★15 — Code intelligence for agents: find the code that matters and keep your context window and tokens lean.
- [lhh010/dsh-ui-whale](https://github.com/lhh010/dsh-ui-whale) ★15 — 【求⭐】🐋DSH Web UI 全手绘像素鲸鱼伙伴插件：会话标题栏常驻，平时眨眼/偶尔摆尾/动胸鳍，思考运行时持续动起来，回合完成头顶喷水，点击还会冒爱心，不工作时还会偷懒睡觉，零核心改动。 【喜欢的话就点点star⭐吧~】
- [huiliyi37/dsh-tianshu-build](https://github.com/huiliyi37/dsh-tianshu-build) ★15 — dsh-tianshu-tui — DeepSeek Harness terminal UI
- [csyangwen/dsh-memory-evolve](https://github.com/csyangwen/dsh-memory-evolve) ★13 — 为 DeepSeek Harness 带来「跨会话长期记忆 + 后台自我进化」能力的纯插件实现：五轨记忆 · git 分支感知 · 回合内自我审查 · 技能自我进化与技能管理器 · 四轨待办 · COI 调度 · 会话广播 · 会话搜索 · 提示词管理器 · 临时信息便签——零核心修改、零运行时依赖，随装随用、卸载即净。
- [SenmuuuuW/dsh-group-photo](https://github.com/SenmuuuuW/dsh-group-photo) ★12 — DSH 内测收官合影墙：GitHub OAuth 零权限登录 + 冻结白名单校验的拍立得合影站（含 DSH Skill 包装）
- [vlln/plugin-registry](https://github.com/vlln/plugin-registry) ★10 — DSH 插件生态基建：薄控制台（浏览器面板管理官方 repository 插件，0 patch）+ make-dsh-plugin skill 官方插件开发引导
- [william-jin-cmu/dsh-vision](https://github.com/william-jin-cmu/dsh-vision) ★10 — dsh 插件：给纯文本 DeepSeek 加视觉——view_image 工具桥接任意 OpenAI 兼容 VLM（默认智谱免费档，实测 4 厂商 10 模型）
- [Dominic789654/awesome-deepseek-harness](https://github.com/Dominic789654/awesome-deepseek-harness) ★9 — A curated list of plugins, skills, MCP servers, orchestrators & UIs for DeepSeek Harness (DSH). Visualization · PPT · Coding · Agents · Loops (auto-research) and more. #dsh
- [Totoro-qaq/Cobsidian](https://github.com/Totoro-qaq/Cobsidian) ★9 — Agent-agnostic workflow skill for maintaining Obsidian knowledge bases
- [vibeinging/dsh-work](https://github.com/vibeinging/dsh-work) ★8 — Local-first AI workbench for DSH Plugins, combining Agent sessions, project files, data analysis, web research, MCP, and Office artifacts in an Electron desktop app.
- [whiteguo233/dsh-openbiliclaw](https://github.com/whiteguo233/dsh-openbiliclaw) ★8 — OpenBiliClaw 是本地运行的跨平台个性化内容推荐 Agent，持续理解你的兴趣并主动找内容。本仓库是它的 DeepSeek Harness 插件：DSH 界面常驻第四栏（推荐/内容库/对话/画像/设置），注册 22 个 Agent Bridge 工具，让 Agent 也能读推荐、答探测、闭环学习。
- [omdsh-dev/dsh-plugin-dev](https://github.com/omdsh-dev/dsh-plugin-dev) ★8 — DSH 插件开发踩坑与做法档案（skill + 文档）：cordis 双副本、tsconfig 三件套、Windows junction、多帧 zstd 等实测记录
- [morluto/internalcot](https://github.com/morluto/internalcot) ★8 — Make agents show their full chain of thought.
- [unknowbug/RE-Framework](https://github.com/unknowbug/RE-Framework) ★6 — Modular engineering methodology framework for AI agents — reverse engineering & software development (core + re-binary / re-code / swe modules).
- [CanglongCl/dsh-web-review](https://github.com/CanglongCl/dsh-web-review) ★6 — DeepSeek Harness Web GUI 的网页预览与元素批注插件，让 AI 根据可视化反馈直接修改前端源码。
- [chen-001/dsh-grok-tui](https://github.com/chen-001/dsh-grok-tui) ★6 — Use dsh via grok-build's TUI.
- [lhh010/dsh-ui-progress](https://github.com/lhh010/dsh-ui-progress) ★6 — DSH Web UI 会话进度插件：输入框停靠区常驻会话进度条（todos 真实进度 / 实时 token 生成速率 / 中断橘红态 / 待办提醒），零核心改动
- [icodesign/orbis](https://github.com/icodesign/orbis) ★5 — A mobile client for deepseek harness remote control
- [xiaohai-78/Top](https://github.com/xiaohai-78/Top) ★5 — 📊 Daily leaderboard for the dsh-external plugin ecosystem — tracks every repo, ranks by stars, archives daily snapshots, and shows the latest ranking on the homepage.
- [fakechris/dsh-harness-ops](https://github.com/fakechris/dsh-harness-ops) ★5 — DSH 运维工具箱：升级、重启、故障都不用操心。① 官方每日快照 A/B 双槽轮换——旧插件迁移+构建+验收全过才原子切换，一键回滚，旧版本永远兜底；② 守护 10s 自动拉起 web + agent 断点自动续接，重启无人值守；③ web 全挂（A/B 都坏、agent 不可用）时 dsh-doctor 一条命令自救：九项诊断→机械修复配置→LLM 深度检测修复（完整推理实时可见）→拉起 web。install via: git clone + bash scripts/install.sh
- [unknowbug/anchorlaw](https://github.com/unknowbug/anchorlaw) ★5 — Code verification protocol for vibe coding — every claim must have a verifiable practice anchor.
- [Thhoho/reSanity](https://github.com/Thhoho/reSanity) ★4 — reSanity 散修 — 散户的认知组合管理：查证、避坑、记忆、复盘。一份 SKILL.md，零依赖。
- [wangyang10/image-vision](https://github.com/wangyang10/image-vision) ★4
- [wess09/DeepSeekHarnessDesktop](https://github.com/wess09/DeepSeekHarnessDesktop) ★4 — DeepSeekHarness桌面端打包
- [whitelonng/dshcode](https://github.com/whitelonng/dshcode) ★4 — Community desktop companion for DeepSeek Harness — one-click Electron app for macOS and Windows
- [wangshunnn/oh-my-dsh](https://github.com/wangshunnn/oh-my-dsh) ★4 — 🐋 Deepseek harness plugins.
- [lhh010/dsh-bash-encoding](https://github.com/lhh010/dsh-bash-encoding) ★4 — DSH bash 输出编码自动识别插件：替换 ctx.bash，自管 spawn 收集原始字节，自动检测 UTF-16LE/UTF-8/GBK 等编码并正确解码，修复 WSL/Windows 下 bash 工具的中文乱码。
- [AngelosZou/graphlint](https://github.com/AngelosZou/graphlint) ★4
- [shinelon/eyes-for-deepseek](https://github.com/shinelon/eyes-for-deepseek) ★4
- [lhh010/dsh-paste-input](https://github.com/lhh010/dsh-paste-input) ★4 — DSH WebUI 文件输入增强：Ctrl+V 粘贴（带首次告知弹窗）+ 拖拽 + 选择文件，发送时复制进会话工作区临时目录
- [omdsh-dev/dsh-mygo](https://github.com/omdsh-dev/dsh-mygo) ★4
- [whyihaveyou/dsh-suite](https://github.com/whyihaveyou/dsh-suite) ★3 — Bilingual curated DeepSeek Harness plugin directory — daily compat CI, create-dsh-plugin scaffold, own plugins.
- [RYun601/dsh-launcher](https://github.com/RYun601/dsh-launcher) ★3 — Windows 下 DeepSeek Harness Web 的启动与管理工具：deepseek 命令一键前台/后台启动、自动打开浏览器、状态查询、停止服务与更新检查，支持一行命令安装
- [Small-tailqwq/dsh-deepcel](https://github.com/Small-tailqwq/dsh-deepcel) ★3 — 一款模仿 excel 的 dsh 皮肤
- [yyh-001/dsh-companion](https://github.com/yyh-001/dsh-companion) ★3 — DeepSeek 陪伴模式插件 —— 人设、记忆、聊得下去：SOUL 人格 + Hermes 长期记忆，可选 QQ 通道
- [litestartup-com/litestartup-skills](https://github.com/litestartup-com/litestartup-skills) ★3 — Publish blog, docs, website, changelog, send campaign email directly from your AI agent. Write content, run one prompt, go live in seconds.
- [opensetk/dsh-xiaohei](https://github.com/opensetk/dsh-xiaohei) ★3 — dsh的罗小黑插件
- [bruc3van/dsh-desktop](https://github.com/bruc3van/dsh-desktop) ★3 — DeepSeek Harness Desktop 是一款社区维护的非官方第三方桌面客户端，通过直接加载官方 Web UI，为普通用户提供开箱即用的独立桌面体验：它可以自动复用本机已运行的官方实例，也可以使用安装包内置的 dsh 运行时启动服务，无需用户额外安装 Node.js 或 CLI，并提供智能连接、远程实例连接、托盘常驻、运行时监护和异常恢复等桌面增强。
- [Fisfzy/ego-browser](https://github.com/Fisfzy/ego-browser) ★3 — DSH（DeepSeek Harness）插件：把 ego-lite 浏览器（给 AI Agent 用的 Chromium）接入 HARNESS——13 个结构化 ego_* 工具（文本语义快照、语义定位点击、表单填充、截图、CDP 控制、任务空间隔离），内置 ego 运行时，Linux + Chrome 开箱即用，无需克隆官方仓库或手动构建。
- [omdsh-dev/dsh-plugin-skills](https://github.com/omdsh-dev/dsh-plugin-skills) ★3 — Agent skills for building and testing DeepSeek Harness plugins — from scaffolding a new plugin package to choosing the right test tiers, entirely inside an agent session.
- [Void0312Aurora/dsh-desktop-electron](https://github.com/Void0312Aurora/dsh-desktop-electron) ★3 — Cross-platform Electron desktop shell for the DSH Web GUI: tray-resident standalone window over your own dsh web, no bundled Node runtime
- [DDDFXYqiming/Agent_Extensions](https://github.com/DDDFXYqiming/Agent_Extensions) ★3 — Agent Skills & DeepSeek Harness (DSH) 扩展库：通用智能体技能（General_skills）+ DSH 标准插件（dsh-plugin），开箱即用的 AI Agent 能力增强集合。
- [lwmxiaobei/dsh-plugins](https://github.com/lwmxiaobei/dsh-plugins) ★3 — DeepSeek Harness 插件导航与介绍目录
- [william-jin-cmu/dsh-companion](https://github.com/william-jin-cmu/dsh-companion) ★3 — DeepSeek Harness 的常驻桌面助手：全局唤起、定时自动化、快捷回复、插件市场
- [Electricitysheep/dsh-tool-turbo](https://github.com/Electricitysheep/dsh-tool-turbo) ★3 — Per-round reasoning_effort optimizer for DeepSeek Harness (dsh): auto-downgrades tool-call reasoning for simple tool chains, lifting back for heavy work. Cuts thinking time between tool calls.
- [coppynight/dsh-doctor](https://github.com/coppynight/dsh-doctor) ★3 — DSH 插件：flutter-doctor 风格诊断与修复（安装级 + harness 内检查，安全自动修复）。官方 repository-plugin（.dsh-plugin 格式）
- [morluto/gitcontribute](https://github.com/morluto/gitcontribute) ★3 — Contribution research for agents: check repository guidance, related work, code context, and validation before writing a patch.
- [Komeiji-Shiki/graycode-for-dsh](https://github.com/Komeiji-Shiki/graycode-for-dsh) ★3
- [Fisfzy/zotero-harvest](https://github.com/Fisfzy/zotero-harvest) ★3 — Zotero 文献采集入库插件（DSH external plugin）：多源检索（OpenAlex/arXiv/Crossref/Europe PMC/Semantic Scholar）+ OA 下载链接解析（Unpaywall）+ 充分性审计 + 入库本地 Zotero + 触发 zotero-wave-rag 重建
- [gameswu/dsh-plugin-background](https://github.com/gameswu/dsh-plugin-background) ★3 — dsh壁纸插件
- [longyu065/dsh-desktop](https://github.com/longyu065/dsh-desktop) ★3 — Desktop shell for DeepSeek Harness Web GUI — auto-installs dsh, native macOS tray, packaged for macOS & Windows.
- [lhh010/dsh-input-history](https://github.com/lhh010/dsh-input-history) ★3 — DSH Web 输入历史插件：Ctrl+Up / Ctrl+Down 像终端一样召回与切换已发送消息，零核心改动
- [YYTbit/awesome-dsh-bridges](https://github.com/YYTbit/awesome-dsh-bridges) ★3 — Bridge your favorite AI coding tools into DeepSeek Harness
- [paean-ai/8x-skills](https://github.com/paean-ai/8x-skills) ★3
- [morluto/smokinggun](https://github.com/morluto/smokinggun) ★3 — Help your agents find the smoking gun they're looking for. Optimization evidence for agents: find complexity hotspots.
- [hikariming/dshfind](https://github.com/hikariming/dshfind) ★3 — DSH 学习与分享社区
- [moduqishi/GrassVison](https://github.com/moduqishi/GrassVison) ★3 — 给 DeepSeek 等纯文本大模型外挂图像理解能力的实现无感添加视觉能力。提供 OpenAI 兼容的 API，自动将图片请求交给视觉模型分析，再将结构化结果注入文本模型，使增强后的模型体验接近原生多模态。
- [LaplaceYoung/dsh-qq2006](https://github.com/LaplaceYoung/dsh-qq2006) ★3 — DSH (DeepSeek Harness) 的 QQ2006 皮肤插件：注册 qq2006 主题、镜像 body[data-ds-skin]、全局皮肤表与完整素材
- [FlashingChen/dsh-worktree](https://github.com/FlashingChen/dsh-worktree) ★2 — Codex-style permanent git worktrees for DeepSeek Harness: worktree_create/list/remove agent tools, a /worktree chat command, and durable per-repo manifests.
- [mrbbbaixue/dsh-desktop](https://github.com/mrbbbaixue/dsh-desktop) ★2 — .NET 10 WPF + WebView2 desktop launcher for DeepSeek Harness (dsh): managed child process, tray controls, HiDPI, native title bar theme following
- [wssfk12138/dsh-wechat-notify](https://github.com/wssfk12138/dsh-wechat-notify) ★2 — DeepSeek Harness 插件：为 agent 新增 wechat_notify 工具，让 AI 通过本机 ClawBot 微信通道主动给你发通知（任务完成 / 需决策时），中文可靠、掉线自提示。
- [GiantGKL/dsh-cost](https://github.com/GiantGKL/dsh-cost) ★2 — DeepSeek Harness (DSH) plugin: live conversation cost and DeepSeek account balance in the composer stats row — RMB in Chinese UI, USD in English UI
- [PerryLink/dsh-plugin-guide](https://github.com/PerryLink/dsh-plugin-guide) ★2 — Everything you need to build DeepSeek Harness plugins: official docs archive (EN/ZH), Cordis primer, 15-repo community deep-dive, 20+ battle-tested pitfalls - plus the dsh-plugin-guide agent skill.
- [GooodWei/context-vista](https://github.com/GooodWei/context-vista) ★2 — 为 DeepSeek Harness 提供右侧悬浮栏以及 /context 命令，用环形图实时展示当前上下文 token 用量与分配，compact指令效果，同时支持估算费用消耗，对标 Claude Code 的 /context。
- [omdsh-dev/dsh-hub-workshop](https://github.com/omdsh-dev/dsh-hub-workshop) ★2 — Public DSH Hub Workshop catalog and feed projection
- [Mappedinfo/PlainDeck](https://github.com/Mappedinfo/PlainDeck) ★2 — Local-first, Git-native visual slide editor with plain JSON sources.
- [shiningsprk-arch/dsh-context-viewer](https://github.com/shiningsprk-arch/dsh-context-viewer) ★2 — DeepSeek Harness 上下文查看器：浏览思考链、shell 命令、工具调用与结果的桌面应用
- [zzh-newlearner/dsh-postmortem](https://github.com/zzh-newlearner/dsh-postmortem) ★2 — Local-first failure postmortems for DeepSeek Harness sessions.
- [HackSing/dsh-plugins](https://github.com/HackSing/dsh-plugins) ★2 — A bilingual, continuously maintained directory of plugins for DeepSeek Harness (DSH).
- [Qintsg/dsh-safe-delete](https://github.com/Qintsg/dsh-safe-delete) ★2 — Safe delete plugin for DeepSeek Harness (DSH): move files to trash / staging area instead of permanent removal, with restore and purge support.
- [walkinglabs/awesome-deepseek-harness-plugins](https://github.com/walkinglabs/awesome-deepseek-harness-plugins) ★2 — A curated, bilingual list of verified plugins, tools, design workflows, and learning resources for DeepSeek Harness (DSH).
- [fff122/dsh-research-notes](https://github.com/fff122/dsh-research-notes) ★2 — A lightweight research notes plugin for DeepSeek Harness
- [HarcoChen/dsh-vsc-integration](https://github.com/HarcoChen/dsh-vsc-integration) ★2 — Deepseek-Harness Vscode Integration
- [Andy8647/dsh-auto-approval](https://github.com/Andy8647/dsh-auto-approval) ★2
- [kaziii/dsh-github-connector](https://github.com/kaziii/dsh-github-connector) ★2 — GitHub connector for DeepSeek Harness (dsh): one-click connect, create/review/merge PRs from the conversation
- [SeverusZh/dsh-notify-windows](https://github.com/SeverusZh/dsh-notify-windows) ★2 — DeepSeek Harness 插件：任务完成时发送 Windows 系统通知
- [chen-001/dsh-chat-width](https://github.com/chen-001/dsh-chat-width) ★2 — Adjust the width of dsh's reply.
- [yyh-001/dsh-expression](https://github.com/yyh-001/dsh-expression) ★2 — 找得到、发得出 —— DSH 表情包插件：语义搜图，只发真实文件，走 companion QQ 通道
- [WardLu/shadow-vision](https://github.com/WardLu/shadow-vision) ★2 — Open-source MCP vision server that gives text-only LLMs and AI agents image understanding, OCR, visual analysis, UI inspection, and multimodal capabilities.
- [Tokimorphling/tokilake-ai-gateway](https://github.com/Tokimorphling/tokilake-ai-gateway) ★2 — Self-hosted AI gateway for distributed local LLM GPUs. OpenAI-compatible API with NAT traversal, WebSocket/QUIC tunnels, Ollama/vLLM/SGLang workers.
- [dbydd/dsh-onlyne](https://github.com/dbydd/dsh-onlyne) ★2 — IM gateway for DeepSeek Harness agents — send and receive QQ, WeChat, Feishu and Telegram messages from dsh sessions.
- [zsyu9779/dsh-desktop](https://github.com/zsyu9779/dsh-desktop) ★2 — 非官方 DeepSeek Harness 桌面壳（Wails/Go）：把 @deepseek-ai/dsh 的 Web UI 包成 Codex 风格原生桌面应用。Unofficial Wails (Go) desktop shell wrapping the DeepSeek Harness web UI in a native Codex-style app.
- [cccakeee/awesome-dsh-plugins](https://github.com/cccakeee/awesome-dsh-plugins) ★2 — A curated, evidence-led directory of DeepSeek Harness (DSH) plugins: verified loadable extensions, skills, and permission-aware installation guidance.
- [runzhliu/deepseek-harness-docker](https://github.com/runzhliu/deepseek-harness-docker) ★2 — Community Docker and Kubernetes packaging for DeepSeek Harness (@deepseek-ai/dsh), with a hardened image, Compose stack, Helm chart, Web UI, and headless CLI.
- [renat3u/dsh-paseo](https://github.com/renat3u/dsh-paseo) ★2 — DSH 的paseo插件扩展支持
- [bradeGithub/DSH-Plugins-Marketplace](https://github.com/bradeGithub/DSH-Plugins-Marketplace) ★2 — DSH插件市场 / DSH Plugin Marketplace: 在 DeepSeek Harness Web GUI 中一键浏览、安装与更新 GitHub topic:dsh-plugin 的全部插件 | browse, install & update all GitHub dsh-plugin plugins in the DSH Web GUI
- [vvlife/awesome-deepseek-harness-plugins](https://github.com/vvlife/awesome-deepseek-harness-plugins) ★2 — A curated list of plugins, tools, skins, and extensions for DeepSeek Harness (DSH).
- [emredeveloper/deepseek-harness-huggingface](https://github.com/emredeveloper/deepseek-harness-huggingface) ★2 — DeepSeek Harness tools for discovering models on Hugging Face Hub.
- [hisaniwo/dsh-ergonomics](https://github.com/hisaniwo/dsh-ergonomics) ★2 — DSH 会话人体工学：/new 一键新会话 + 输入历史 ↑↓ 回溯
- [Tyan66666/billion-context-dsh](https://github.com/Tyan66666/billion-context-dsh) ★2 — Model-driven context management (Active Context Pruning / ACP) for the DeepSeek Harness — the model decides when and what to compress. Ported from billion-context-pi (ranxianglei); acp-kernel reused verbatim. CompactionEngine backend with compress/decompress/search_context/acp_status tools.
- [entireyu/dsh-launcher](https://github.com/entireyu/dsh-launcher) ★2 — DeepSeek Harness Launcher（DSH 安装启动助手），由DSH + DS-V4-Pro-0813开发的tauri程序。
- [MashedPotato817/dsh-git-plugin](https://github.com/MashedPotato817/dsh-git-plugin) ★2 — Git workflow plugin for DeepSeek Harness: slash commands and read-only git tools
- [Yihong89/dsh-plugins](https://github.com/Yihong89/dsh-plugins) ★2 — DeepSeek Harness (DSH) plugins. First: dsh-usage-report — per-session token usage & estimated cost (/usage + usage_report), priced from the DeepSeek pricing table.
- [whiteguo233/dsh-cc-connect](https://github.com/whiteguo233/dsh-cc-connect) ★2 — 通过cc connect远程使用dsh
- [openma-ai/deepseek-harness-typescript-sdk](https://github.com/openma-ai/deepseek-harness-typescript-sdk) ★2 — TypeScript SDK for DeepSeek Harness (dsh) — drive AI agent turns in a runtime subprocess over JSON-RPC stdio. Mirrors the official Python SDK.
- [MorGogh/widget-dock](https://github.com/MorGogh/widget-dock) ★2 — DSH plugin: draggable widget panel (balance, tokens, stats, commands, goal, cost) for DeepSeek Harness
- [renat3u/tonghuashun-webui](https://github.com/renat3u/tonghuashun-webui) ★2 — 仿同花顺的webui插件
- [1690834643/dsh-usage-dashboard](https://github.com/1690834643/dsh-usage-dashboard) ★2 — DeepSeek Harness (dsh) web plugin: API balance + today's spend widget in the sidebar footer. /api/dsh-usage route + React client bundle, no build step required.
- [sjscy05/deepseek-harness-vision-plugin](https://github.com/sjscy05/deepseek-harness-vision-plugin) ★1 — vision_read tool: lets the text-only DeepSeek main model read images through a configurable vision sub-model (OpenAI-compatible / Anthropic / Gemini APIs). Scratch plugin for DeepSeek Harness.
- [syy-shark/dsh-music-plugin](https://github.com/syy-shark/dsh-music-plugin) ★1 — DeepSeek Harness music plugin (dsh-plugin)
- [MashedPotato817/dsh-tool-browser](https://github.com/MashedPotato817/dsh-tool-browser) ★1 — Native browser automation tools for DeepSeek Harness, powered by Playwright + Edge
- [Bandersnatch0x/design-playbook](https://github.com/Bandersnatch0x/design-playbook) ★1 — Design I/O plugin for Claude Code & coding agents — declarations + contracts that make UI generation constrained, reviewable, and recirculatable. Not a style pack; composes with ui-ux-pro-max + frontend-design.
- [Proton1917/dsh-live-stats](https://github.com/Proton1917/dsh-live-stats) ★1 — Live token estimates and true streaming TPS for DeepSeek Harness Web
- [yumimanji/dsh-ui-spec](https://github.com/yumimanji/dsh-ui-spec) ★1 — DeepSeek Harness plugin: turn UI screenshots into structured, implementation-grade web frontend specs. Deterministic geometry (sharp) + optional vision-model semantics, merged into one JSON + Markdown spec.
- [KnCRJVirX/dsh-desktop](https://github.com/KnCRJVirX/dsh-desktop) ★1 — Desktop wrapper for the DeepSeek Harness (DSH). Deepseek Haeness 的 Electron 桌面端封装。
- [SnowCrescenter-tech/dsh-desktop](https://github.com/SnowCrescenter-tech/dsh-desktop) ★1 — DeepSeek Harness 桌面版 — 原生 Windows 桌面壳（无边框窗口 / 系统托盘 / 原生通知 / 单实例 / 开机自启）| Native Windows desktop shell for DeepSeek Harness (frameless window, tray, native notifications, single-instance, auto-launch)
- [HaoyueQin/deepseek-harness-desktop](https://github.com/HaoyueQin/deepseek-harness-desktop) ★1 — A desktop shell for DeepSeek Harness — the pluggable AI agent harness from DeepSeek. Wrap the official dsh web UI into a native-feeling, always-on desktop app. / 为 DeepSeek Harness（DeepSeek 开源的可插拔 AI Agent harness）打造的桌面应用壳，把官方 dsh web 界面包装成原生质感、常驻后台的桌面应用。
- [detpecca/DSH-Wiki](https://github.com/detpecca/DSH-Wiki) ★1
- [ShawnSiao/dsh-credentials-keychain](https://github.com/ShawnSiao/dsh-credentials-keychain) ★1 — Planned OS-backed credential provider for DeepSeek Harness
- [crayonlu/dsh-web-search-firecrawl](https://github.com/crayonlu/dsh-web-search-firecrawl) ★1 — Firecrawl-backed web search provider for DeepSeek Harness (ctx.web) — no DeepSeek API key required
- [BruceWu1126/dsh-web-background](https://github.com/BruceWu1126/dsh-web-background) ★1 — DeepSeek Harness Web UI background customization plugin
- [kevenxz/dsh-desktop](https://github.com/kevenxz/dsh-desktop) ★1 — Windows desktop client for DeepSeek Harness — native window, tray, shared DSH profiles and sessions.
- [Tieboyh/dsh-session-search](https://github.com/Tieboyh/dsh-session-search) ★1 — Index-free cross-agent session search for DeepSeek Harness
- [qingzhuo-cn/agent-fix](https://github.com/qingzhuo-cn/agent-fix) ★1 — Universal repair skill & CLI for AI coding agents (Claude Code, Codex, OpenCode, Hermes) — npm postinstall, GUI PATH, Node version, registry, auth, DeepSeek provider
- [Civitasv/dsh-plugin-colorscheme](https://github.com/Civitasv/dsh-plugin-colorscheme) ★1 — Colorscheme Plugin For DeepSeek Harness
- [studyzy/dsh-suggest-prompt](https://github.com/studyzy/dsh-suggest-prompt) ★1 — dsh-plugin suggest next prompt
- [Alyosha28/deep_option](https://github.com/Alyosha28/deep_option) ★1 — 港美股期权研究与风险 Agent（公开 source-available 原型）
- [AdamPlatin123/dsh-tonghuashun](https://github.com/AdamPlatin123/dsh-tonghuashun) ★1 — DSH harness 客户端插件：同花顺行情终端风格皮肤 + 代码量 K 线行情面板（ui-skin-ths + ui-market）
- [LJH-snow/dsh-tool-github](https://github.com/LJH-snow/dsh-tool-github) ★1 — GitHub tools for DeepSeek Harness: repo lookup, issue listing, code search, and PR drafts
- [moduqishi/dsh-open-in-finder](https://github.com/moduqishi/dsh-open-in-finder) ★1 — DeepSeek Harness (dsh web) plugin: one-click open-in-Finder icon in the session header.
- [AprilWizard/dsh-multi-cot](https://github.com/AprilWizard/dsh-multi-cot) ★1 — Multi-CoT plugin for DeepSeek Harness: multi-sampled test-time compute, internal voting, and a plan/execute/review workflow
- [vexpaer/ContextGate](https://github.com/vexpaer/ContextGate) ★1 — ContextGate — a context-folding gate plugin for DeepSeek Harness (DSH) / Cordis. Intercepts LLM request streams and folds oversized conversation history into a summary to keep context length under control.
- [Scorp1o117/dsh-soul-md](https://github.com/Scorp1o117/dsh-soul-md) ★1 — soul.md-style persona injection for DeepSeek Harness — load a markdown persona card into the system prompt with hot reload.
- [yjm110517/visual-to-editable-ppt-skill](https://github.com/yjm110517/visual-to-editable-ppt-skill) ★1
- [haytham818/dsh-notify](https://github.com/haytham818/dsh-notify) ★1 — DSH system notification plugin: desktop notifications when an agent finishes a task, errors, asks a question, or waits for approval (dsh 系统通知插件)
- [echo-escape/dsh-workbench](https://github.com/echo-escape/dsh-workbench) ★1 — Personal DeepSeek Harness (dsh) Agent Workbench - Monorepo for plugins, tools, and skills.
- [krislavten/ai-sdk-provider-dsh](https://github.com/krislavten/ai-sdk-provider-dsh) ★1 — AI SDK provider that drives a DeepSeek Harness (dsh) runtime as a LanguageModelV3 — works on AI SDK v6 and v7
- [Jesse-njx/dsh-cowork](https://github.com/Jesse-njx/dsh-cowork) ★1 — READ + WRITE for office documents & notebooks in DeepSeek Harness — doc_read/doc_write tools (xlsx, pdf, docx, pptx, ipynb) plus MCP server and CLI
- [fff122/dsh-prompt-presets](https://github.com/fff122/dsh-prompt-presets) ★1 — Local reusable prompt presets for DeepSeek Harness.
- [Scorp1o117/dsh-tool-vision](https://github.com/Scorp1o117/dsh-tool-vision) ★1 — External vision model tool for DeepSeek Harness — inspect_image sends images to any OpenAI-compatible endpoint (GPT-4o, Qwen-VL, GLM-4V, Ollama...).
- [omdsh-dev/dsh-github-integration](https://github.com/omdsh-dev/dsh-github-integration) ★1
- [yjm110517/content-to-editable-ppt-skill](https://github.com/yjm110517/content-to-editable-ppt-skill) ★1 — Bootstrap runtime for generating multi-slide editable PowerPoint presentations from topics, documents, or outlines.
- [SnowCrescenter-tech/dsh-launcher](https://github.com/SnowCrescenter-tech/dsh-launcher) ★1 — DeepSeek Harness 一键启动器 | Windows 便携免安装版 - One-click portable launcher for DeepSeek Harness (no Node.js, no pnpm, no CLI)
- [Ethanout/computer-use-plus](https://github.com/Ethanout/computer-use-plus) ★1 — Low-token, low-latency Windows computer-use MCP with learned shortcuts, UIA/CDP/OCR routing, and DeepSeek Harness support
- [ArtificialNotImbecile/dsh-context-taxonomy](https://github.com/ArtificialNotImbecile/dsh-context-taxonomy) ★1 — Logical-call context taxonomy plugin for DeepSeek Harness
- [Scorp1o117/dsh-tdai-memory](https://github.com/Scorp1o117/dsh-tdai-memory) ★1 — TencentDB Agent Memory for DeepSeek Harness — L0-L3 layered long-term memory with recall injection and search tools.
- [SakalioLabs/dsh-code-ide](https://github.com/SakalioLabs/dsh-code-ide) ★1 — DeepSeek Harness Code IDE Plugin
- [Fisfzy/zotero-wave-rag](https://github.com/Fisfzy/zotero-wave-rag) ★1 — 面向 Zotero 论文库的浪潮式 RAG 细节检索系统 —— DSH 外部插件。移植 VCPToolBox 浪潮语义动力学思想（标签河道图传播/虫洞跳转/钟型阻尼/Ω重排），配 BM25+RRF 混合检索、claim-evidence 忠实度校验、两级增量索引
- [william-jin-cmu/dsh-artifact](https://github.com/william-jin-cmu/dsh-artifact) ★1 — dsh 插件：文件交付协议——send_artifact 工具经 tool/result meta 携带结构化描述子，任意客户端可渲染
- [Fisfzy/math-lean](https://github.com/Fisfzy/math-lean) ★1 — dsh-lean-prover: Lean kernel-verified math reasoning plugin (DSH Cordis)
- [xiaoli-qwq/dsh-search](https://github.com/xiaoli-qwq/dsh-search) ★1 — 🕸️✨ Web-savvy search plugin for DeepSeek-Harness. Grok-level brain, zero search-API drama. Powered by DeepSeek & good vibes. 🧸
- [moduqishi/dsh-opencode-usage](https://github.com/moduqishi/dsh-opencode-usage) ★1 — DeepSeek Harness (dsh web) plugin: opencode.ai 5h/week/month quota usage progress in the session header, frosted-glass detail panel, model-channel filtering.
- [omdsh-dev/dsh-fun-ticker](https://github.com/omdsh-dev/dsh-fun-ticker) ★1 — DSH 行情跑马灯插件：可自选标的的加密/汇率/A股/指数/港美股跑马灯，免 key 数据源，宿主代理+缓存
- [384961890-ui/pawin-brain-deepseek-harness](https://github.com/384961890-ui/pawin-brain-deepseek-harness) ★1 — A brain-inspired runtime for DeepSeek Harness agents — remember, self-correct, learn. v0.1 ships memory (injection, notes, recall), 100% covered.
- [fff122/dsh-agent-arcade](https://github.com/fff122/dsh-agent-arcade) ★1 — Deterministic Agent-played Snake game for DeepSeek Harness.
- [wulun811/LiuHe](https://github.com/wulun811/LiuHe) ★1 — LLM-native code toolkit: Rust multi-language parser (tree-sitter) + 44 MCP tools for atomic editing, impact analysis, reference tracing and deterministic zero-LLM code quality gates. Built for the handless, eyeless, memoryless LLM.
- [randerous/dsh-turn-meta](https://github.com/randerous/dsh-turn-meta) ★1 — Opt-in per-step turn metadata for DeepSeek Harness — a minimal first-plugin template (dsh-plugin)
- [zcx369658780/governed-workflow-for-dsh](https://github.com/zcx369658780/governed-workflow-for-dsh) ★1 — Policy-enforced, evidence-first governed workflows for DeepSeek Harness agents.
- [rsagacom/dsh-ajw](https://github.com/rsagacom/dsh-ajw) ★1 — DS安甲网 (ds.ajw.cn) · 为你的 DeepSeek Harness 机器人 安装上所需功能的装甲吧 — 每日聚合 DeepSeek Harness / DSH 插件生态开源项目
- [sikwoxy/dsh-tool-reqpipe](https://github.com/sikwoxy/dsh-tool-reqpipe) ★1 — reqpipe — DeepSeek Harness 需求流水线插件（7 tools）+ Python CLI（需求→方案→评审→开发）
- [ChisaAlter/Deepseek-Harness-Desktop](https://github.com/ChisaAlter/Deepseek-Harness-Desktop) ★1 — Electron desktop shell for DeepSeek Harness web UI
- [schhaohao/dsh-file-explorer](https://github.com/schhaohao/dsh-file-explorer) ★1 — dsh-file-explorer
- [TohsakaRIN521/dsh-academic-skill](https://github.com/TohsakaRIN521/dsh-academic-skill) ★1 — academic-paper-completion 旨在补全你将要发表的文章中除了理论计算数值分析的其余部分,减少或消除ai引用幻觉
- [TiankunDai/dsh-vision-LMstudio](https://github.com/TiankunDai/dsh-vision-LMstudio) ★1 — 让你能通过deepseek harness调用LM studio加载的本地视觉模型
- [UynajGI/dsh-ssh](https://github.com/UynajGI/dsh-ssh) ★1 — SSH remote-execution plugin for DeepSeek Harness: ProxyJump chain, SFTP filesystem, subprocess and PTY over ssh2
- [crayonlu/dsh-web-search-tavily](https://github.com/crayonlu/dsh-web-search-tavily) ★1 — Tavily-backed web search provider for DeepSeek Harness (ctx.web) — no DeepSeek API key required
- [FlytoMAYDAY80/dsh-pet](https://github.com/FlytoMAYDAY80/dsh-pet) ★1 — 🐋 DSH 有声桌宠：悬浮桌面的 DeepSeek 小鲸鱼，不打开 DSH 也能实时感知会话状态（需要确认/工作中/完成/空闲/离线），支持音效提醒与零代码定制素材
- [lujoai/Lujo-MCP](https://github.com/lujoai/Lujo-MCP) ★1 — 基于 MCP 协议的 AI 调试追踪平台，提供会话管理、链路追踪、错误分析与 Dashboard 可视化
- [chyra-moon/deepseek-harness-desktop](https://github.com/chyra-moon/deepseek-harness-desktop) ★1 — DeepSeek Harness desktop shell: 1:1 replica of the official web UI as a Windows desktop app (community project)
- [omdsh-dev/dsh-tool-browser](https://github.com/omdsh-dev/dsh-tool-browser) ★1
- [moxisuki/dsh-lan](https://github.com/moxisuki/dsh-lan) ★1 — DeepSeek Harness（dsh）的局域网插件：一条 overlay 把 dsh web 绑定到局域网，并通过 index tap 注入 crypto.randomUUID    │ polyfill 修复非安全上下文启动崩溃。
- [HuanLinOTO/dsh-plugin-pet-rs](https://github.com/HuanLinOTO/dsh-plugin-pet-rs) ★1
- [fff122/dsh-task-checklist](https://github.com/fff122/dsh-task-checklist) ★1 — Local task checklist plugin for DeepSeek Harness.
- [ccch1mneyyy/dsh-working-activity](https://github.com/ccch1mneyyy/dsh-working-activity) ★1 — DSH 实时模型工作状态行：俏皮思考文案、运行中的工具、回合总结、自我叙述（⏵）— 用于 TUI 提示栏与 Web UI
- [ShawnSiao/dsh-agent-eval](https://github.com/ShawnSiao/dsh-agent-eval) ★1 — Planned repeatable agent and plugin regression evaluation for DeepSeek Harness
- [TheChengXi/intent-flow](https://github.com/TheChengXi/intent-flow) ★1 — IntentFlow — Comment-Driven Development Framework 注释驱动开发框架：以 @intent 注释为契约的 AI 辅助开发工作流（需求/设计/执行/报告四阶段 + 状态机自动流转），提供 pi 扩展、MCP Server、CLI 三种形态
- [joyfoxai/dsh-eco-router](https://github.com/joyfoxai/dsh-eco-router) ★1 — A token-efficient model-routing flywheel for the DeepSeek Harness.
- [jLeon-account/dsh-client-usage](https://github.com/jLeon-account/dsh-client-usage) ★1 — DeepSeek Harness（DSH）网页客户端插件：实时展示会话级 API token 用量与估算费用，支持缓存命中/未命中分桶、上下文占用，自动适配 DeepSeek 峰谷计价与调价｜DSH web plugin: real-time token usage & cost estimate
- [PeanutsDou/peanut-dsh-plugin](https://github.com/PeanutsDou/peanut-dsh-plugin) ★1 — PeanutsDou 的 DeepSeek Harness 插件合集：dsh-launcher 桌面壳等个人维护插件
- [lordqyxz/dsh-ark-quota](https://github.com/lordqyxz/dsh-ark-quota) ★1 — 火山方舟订阅套餐剩余额度 DSH 侧边栏小组件（宿主代理 GetCodingPlanUsage + 浏览器 widget + 免重启 cookie 刷新工具）
- [vcxmug/dsh-firecrawl](https://github.com/vcxmug/dsh-firecrawl) ★1 — Native Firecrawl tools for DeepSeek Harness agents via MCP — one composition row, zero custom code
- [omdsh-dev/toybox](https://github.com/omdsh-dev/toybox) ★1 — DSH 插件玩具箱 —— 构建链：TypeScript 源码（plugins/<id>/src/*.mts）→ 单文件 MCP 服务器产物（.dsh-plugin/server/*.mjs）
- [rainforest888/dsh-plugins-raincode](https://github.com/rainforest888/dsh-plugins-raincode) ★1 — dsh plugin: DeepSeek Harness 的模型层 = raincode(模型池/缓存/重试) + /skills 浏览
- [Bandersnatch0x/amber-protocol](https://github.com/Bandersnatch0x/amber-protocol) ★1 — Amber Protocol: repository-local governance for coding agents, including a DeepSeek Harness (dsh) patch overlay.
- [cute-baobao/dsh-usage-meter](https://github.com/cute-baobao/dsh-usage-meter) ★1 — DeepSeek Harness plugin: per-model daily token usage recorder (input/output/cache hits) with a Web GUI dashboard.
- [spike-faye-lei/spike-faye-lei-dsh-skills](https://github.com/spike-faye-lei/spike-faye-lei-dsh-skills) ★1 — spike-faye-lei/dsh-skills
- [randerous/dsh-turn-budget](https://github.com/randerous/dsh-turn-budget) ★1 — Advisory turn step-budget reminders for DeepSeek Harness — loop convergence guard (dsh-plugin)
- [Scorp1o117/dsh-plugin-marketplace](https://github.com/Scorp1o117/dsh-plugin-marketplace) ★1 — Plugin marketplace for DeepSeek Harness Web UI: browse github.com/topics/dsh-plugin inside the settings page — search, sort by stars, view install instructions.
- [openma-ai/deepseek-harness-tui](https://github.com/openma-ai/deepseek-harness-tui) ★1 — TUI Plugin of DeepSeek Harness
- [omdsh-dev/omdsh](https://github.com/omdsh-dev/omdsh) ★1 — Private staging source for the Oh My DSH community distribution.
- [Jesse-njx/dsh-plugin-manager-registry](https://github.com/Jesse-njx/dsh-plugin-manager-registry) ★0 — @dsh-pm/registry — discover dsh plugins by merging the awesome-dsh-plugin list, GitHub dsh-plugin-topic search, and npm keyword search into one deduped, offline-tolerant registry (the discovery engine of dsh pm)
- [dingkaihu63/dsh-robotic-harness](https://github.com/dingkaihu63/dsh-robotic-harness) ★0 — Robotic Harness: embodied-intelligence research tools for DeepSeek Harness - robot asset inspection, MuJoCo pick-place simulation with fault injection, evidence-based diagnostics, and reproducible experiment bundles.
- [xiaoyuxiaoyuqwq/dsh-desktop](https://github.com/xiaoyuxiaoyuqwq/dsh-desktop) ★0 — DeepSeek Harness desktop shell — one-click Electron wrapper around dsh web
- [lispking/git-skills](https://github.com/lispking/git-skills) ★0 — A powerful Claude Code Git assistant skill that provides intelligent branch management, commit message conventions, workflow assistance, and code review guidance.
- [lonelymoon87/dsh-code-intel](https://github.com/lonelymoon87/dsh-code-intel) ★0 — Symbol-aware code indexing and hybrid search for DeepSeek Harness.
- [lonelymoon87/dsh-specflow](https://github.com/lonelymoon87/dsh-specflow) ★0 — Specification-driven development toolkit for DeepSeek Harness.
- [lonelymoon87/dsh-gitflow](https://github.com/lonelymoon87/dsh-gitflow) ★0 — Git status, diff, commit, pull request, and worktree workflows for DeepSeek Harness.
- [asdf17128/dsh-doctor](https://github.com/asdf17128/dsh-doctor) ★0 — Find what your DeepSeek Harness (dsh) patches silently broke — dead patches, config fields dropped by whole-config replacement, unmaintained plugins. Read-only, zero deps.
- [wangxiang0605qvq/dsh-auto-compact](https://github.com/wangxiang0605qvq/dsh-auto-compact) ★0 — DeepSeek Harness 自动压缩插件：模型工具 compact_now，回合结束后自动压缩上下文 | Auto compaction plugin for DSH: compact_now tool, compacts context after the turn
- [Easyhoov/deepseek-harness-desktop](https://github.com/Easyhoov/deepseek-harness-desktop) ★0 — Unofficial in-process desktop app for DeepSeek Harness: the host composition boots inside the Electron main process with zero ports and an IPC bridge. Not affiliated with DeepSeek.
- [jark006/RemoteOps](https://github.com/jark006/RemoteOps) ★0 — RemoteOps 是一个面向远程系统维护和嵌入式 Linux 开发的 MCP 工具。
- [147228/dsh-xiaoyao-skins](https://github.com/147228/dsh-xiaoyao-skins) ★0 — 夕小瑶 × DeepSeek Harness Web 皮肤合集、安装器与社区创作工具链
- [Chungor/owlx-mcp](https://github.com/Chungor/owlx-mcp) ★0 — OwlX MCP server - live crypto structure scores, MemeSniper, token financials and recorded signal hit-rate as MCP tools for Claude, Cursor, DeepSeek Harness, Grok and any MCP client.
- [lonelymoon87/dsh-vscode](https://github.com/lonelymoon87/dsh-vscode) ★0 — VS Code client for the DeepSeek Harness SDK runtime.
- [jasonsun29/ds-balance-card](https://github.com/jasonsun29/ds-balance-card) ★0 — DeepSeek Harness 常驻额度卡片插件:自动识别已配置的平台 API Key,显示余额与 Coding Plan 额度
- [lonelymoon87/dsh-guardian](https://github.com/lonelymoon87/dsh-guardian) ★0 — Runtime tool policy, dangerous-command guard, and output redaction for DeepSeek Harness.
- [NEXTINDIE/DeepSeek-Harness-for-VS-Code](https://github.com/NEXTINDIE/DeepSeek-Harness-for-VS-Code) ★0 — Use DeepSeek Harness in VS Code like ChatGPT/Copilot: @dsh in native chat, standalone views, cross-project sessions, shared via DSH API. Auto-starts server.
- [TYEclipse/dsh-netdoctor](https://github.com/TYEclipse/dsh-netdoctor) ★0 — Network diagnostics toolbox for DeepSeek Harness (dsh): DNS lookup, ICMP ping, TCP port check, TLS cert check, traceroute, public IP — six read-only probes, zero runtime dependencies
- [wangxiang0605qvq/dsh-deepseek-balance](https://github.com/wangxiang0605qvq/dsh-deepseek-balance) ★0 — DeepSeek 余额插件：模型工具 + 侧边栏余额胶囊 | DeepSeek balance plugin for DSH: model tool + sidebar balance pill
- [cogine-ai/marketplace](https://github.com/cogine-ai/marketplace) ★0
- [Xplore-LAB/dsh-plugin-asmemory](https://github.com/Xplore-LAB/dsh-plugin-asmemory) ★0 — Action-State Memory Engine: typed time-series memory (states + actions) with trend/anomaly/causal analysis for DeepSeek Harness

## 贡献 / Contributing

为你的插件仓库添加 [`dsh-plugin`](https://github.com/topics/dsh-plugin) topic，并在 `package.json` 中声明 `dsh.bundle` manifest，下一次自动更新就会收录。无需提交 PR。

Add the `dsh-plugin` topic to your repo and declare a `dsh.bundle` manifest in `package.json` — the scheduled crawl will pick it up automatically. No PR needed.

分类有误或希望补充描述？欢迎提 [Issue](../../issues)。

## License

[CC0-1.0](LICENSE) · 数据来自 GitHub 公开 API，每 6 小时自动刷新。
