# DeepSeek Plugin Store 前期建站实施指导

状态：可执行  
基线时间：2026-08-14 03:07 CST  
适用仓库：

- `/Users/wangyidong/project/deepseek-plugin-store`：公开数据源、抓取、校验、投稿入口、竞品监控。
- `/Users/wangyidong/project/deepseek-plugin-store-site`：私有 Astro 站点、Ranking 展示、插件详情页、SEO、Cloudflare Pages 部署。

## 1. 最终定位

DeepSeek Plugin Store 不是另一个 Awesome List，而是 DeepSeek Harness 插件生态的独立 Ranking 与 Discovery 入口。

用户进入首页后应依次得到四个答案：

1. 最近哪些插件增长最快。
2. 哪些插件在生态中最受关注。
3. 最近出现了哪些新插件。
4. 每个插件如何安装、证据来自哪里、最近是否仍在维护。

网站对外只陈述可验证事实。Stars、增长量、仓库时间、Manifest 和来源属于证据；安全、兼容性、质量、安装量、用户评分和官方认可不得从这些数据推断。

## 2. 第一周目标

第一周只完成以下四项：

1. 本站已验证插件集合覆盖竞品全部有效插件，并至少保有一个经相同规则验证的增量插件。
2. 建立可持续的 GitHub 指标历史，能够计算 24 小时与 7 天增长。
3. 首页形成 `Trending This Week`、`Fastest Growing`、`Top by Stars`、`Just Released` 四类发现入口。
4. 每个有效插件都具有可索引的独立详情页。

本周不做用户账户、评论、评分、支付、广告后台、数据库、服务端 API、真实安装统计、自动安全认证、完整 Marketplace 交易和批量 AI 内容。

## 3. 当前基线

### 3.1 本站

- 公开数据文件当前收录 305 个已验证插件和 245 个相关项目。
- 插件的硬性验证条件是仓库 `package.json` 中存在 `dsh.bundle`。
- 数据抓取已经覆盖 GitHub `topic:dsh-plugin`，本地未提交改动正在增加 `awesome-dsh-plugin` 种子源。
- 公开仓库已经具备目录校验、每小时更新工作流、竞品监控脚本、Submit 与 Claim Issue Form 的本地改动。
- 私有站点已经使用 Astro 静态生成首页、目录页、插件详情页、提交页、sitemap 和 robots。
- 当前首页已有 Featured、Popular by GitHub Stars 和 Recently Added，但没有真实的历史增长数据和 Trending。

### 3.2 竞品观测

2026-08-14 03:07 CST 的只读观测：

- `awesome-dsh-plugin/awesome-dsh-plugin`：92 Stars、11 Forks，仓库创建于 2026-08-13 13:55 UTC。
- `awesome-dsh-plugin.com` 与 `dshfind.com` 均可访问。
- 上游 README 中检测到 107 个唯一 GitHub 仓库链接；该数字包含 DeepSeek Harness 等非插件资源，不能直接作为有效插件数。

竞品数字只作为当日基线，不写死为长期目标。长期覆盖率必须通过“双方都经过本站验证规则后的仓库集合差异”计算。

## 4. 已选技术方案

继续使用现有双仓与静态生成架构，不迁移 Next.js，不新增数据库。

```text
GitHub topic / dsh.bundle 搜索 / Awesome 种子 / Submit
                         |
                         v
        deepseek-plugin-store（公开真值）
        plugins + history + rankings + validation
                         |
                  固定提交 SHA
                         v
      deepseek-plugin-store-site（Astro 静态站）
       首页榜单 + 目录 + 独立详情页 + SEO
                         |
                         v
              Cloudflare Pages / 主域名
```

选择该方案的原因：

- 现有数据与页面能力已经可用，迁移框架不会增加第一周的竞争优势。
- Astro 静态生成适合数百个插件详情页和搜索引擎收录。
- 排名计算可以在公开仓库的自动更新中完成，站点只消费固定 SHA 的确定性结果。
- 不引入数据库可以降低部署、迁移、权限和回滚成本。

该方案假设 GitHub 公开仓库元数据仍是早期生态的主要可验证信号。如果插件作者普遍转为私有仓库或 GitHub Stars 失去区分度，Trending 会退化为来源发现榜单，届时再引入经用户授权的站内出站点击信号；第一周不提前建设该系统。

## 5. 数据来源与覆盖率规则

### 5.1 来源优先级

抓取按以下顺序形成候选集合，但所有来源使用同一验证标准：

1. GitHub `topic:dsh-plugin`。
2. GitHub 代码搜索中声明 `dsh.bundle` 的公开仓库。
3. `awesome-dsh-plugin` 的固定提交内容。
4. 其他公开 Awesome List 或目录。
5. Submit Issue 和维护者 Claim。

抓取失败必须按来源隔离。单个 Awesome 站点不可用时，保留该来源最近一次成功结果并记录错误，不得阻断 GitHub Topic 与其他来源更新。GitHub 主数据完全不可用时，本次更新失败并保留线上上一次成功版本。

### 5.2 去重与验证

- 主键使用 GitHub `owner/repository` 的小写形式。
- 仓库重命名通过 GitHub API 返回的当前 `full_name` 归一化。
- 只有发现 `package.json:dsh.bundle` 的仓库进入插件集合。
- 未发现 Manifest 的候选进入相关项目集合，不混入插件覆盖率。
- Archived 仓库继续保留，但必须标记状态并从 Trending 与 Fastest Growing 中排除。
- 删除或暂时不可达的仓库保留最近一次记录，并标记最近检查错误；连续 7 天不可达后再进入人工复核，不自动删除。

### 5.3 覆盖率口径

每次更新生成以下集合：

- `local_verified`：本站全部有效插件仓库。
- `upstream_verified`：从竞品内容抽取后，再经本站 `dsh.bundle` 规则验证的仓库。
- `missing_from_local = upstream_verified - local_verified`。
- `local_increment = local_verified - upstream_verified`。

覆盖阶段通过条件：

- `missing_from_local` 数量为 0。
- `local_increment` 数量大于 0。
- 所有本地插件均可追溯到至少一个 `discoverySource`。
- 新出现的竞品有效插件在两个小时或两次计划任务内进入本站候选或明确失败队列。

## 6. 数据契约

### 6.1 当前插件元数据

`data/plugins.json` 继续作为当前目录真值。每个插件至少保存：

- `fullName`
- `url`
- `description`
- `stars`
- `forks`
- `createdAt`
- `pushedAt`
- `license`
- `archived`
- `npmName`
- `category`
- `discoverySources`
- `manifestPath`
- `manifestCheckedAt`
- `metadataCapturedAt`
- `lastCheckError`

无法确认的字段使用 `null`，不得用推测值填充。Schema 变更时提高 `schemaVersion`，公开仓库和私有站点必须在同一阶段完成兼容后再提交。

### 6.2 历史数据

新增 `data/github-history.json`，只保存排名所需的紧凑历史：

- 顶层：`schemaVersion`、`updatedAt`、`intervalHours`、`retentionDays`、`series`。
- `series` 以标准化后的 `owner/repository` 为键。
- 每个采样点保存 `capturedAt`、`stars`、`forks`。
- 每 6 小时最多写入一个采样点，保留 30 天。
- 同一时间桶重复运行时覆盖该桶，不追加重复记录。
- 插件缺少足够历史时，增长字段为 `null`，不得显示为 0。

### 6.3 排名结果

新增 `data/rankings.json`，由公开仓库生成，私有站点直接消费：

- `generatedAt`
- `historyCoverage`
- `topByStars`
- `fastestGrowing24h`
- `trending7d`
- `justReleased`

每个榜单项保存仓库主键、榜单名、名次、用于排序的原始指标、时间窗口和计算版本。页面不得自行复制一套计算逻辑。

## 7. Ranking 规则

### 7.1 Top by Stars

- 范围：未归档且当前可访问的已验证插件。
- 排序：Stars 降序；Stars 相同则按 Forks、最近 Push 时间、仓库名依次排序。
- 可立即上线，不依赖历史数据。

### 7.2 Just Released

- 范围：未归档且当前可访问的已验证插件。
- 排序：GitHub `createdAt` 降序。
- `addedAt` 只代表本站收录时间，不得冒充插件发布时间。
- 可立即上线，但必须先补齐 `createdAt`。

### 7.3 Fastest Growing 24h

- 指标：当前 Stars 减去最接近 24 小时前、且不晚于该时间的采样 Stars。
- 资格：历史跨度至少 20 小时，且增量大于 0。
- 排序：24 小时绝对新增 Stars 降序；相同则按当前 Stars、最近 Push 时间排序。
- 页面同时展示 `+N stars / 24h` 与当前 Stars，不用百分比替代绝对量。
- 在首个有效 24 小时窗口形成前，模块显示“正在建立历史基线”，不生成伪排名。

### 7.4 Trending This Week

Trending 是发现信号，不是质量、安全或兼容认证。只对历史跨度至少 6 天的未归档插件计算。

计算项统一归一到 0–100：

- `growthAbs`：7 天绝对新增 Stars，使用 `log(1 + delta7d)` 后按当期候选最大值归一。
- `growthRate`：`delta7d / max(stars7dAgo, 5)`，上限为 1，再乘 100。
- `starSignal`：当前 Stars 使用 `log(1 + stars)` 后按当期候选最大值归一。
- `activity`：最近 30 天有 Push 为 100，31–90 天为 60，91–180 天为 25，超过 180 天为 0。

公式固定为：

`trendingScore = 0.45 × growthAbs + 0.25 × growthRate + 0.20 × starSignal + 0.10 × activity`

规则：

- `delta7d <= 0` 的插件不进入 Trending。
- 分数保留一位小数，按分数降序；相同则按 `delta7d`、当前 Stars 排序。
- 页面显示公式说明、数据窗口和最后更新时间。
- 公式变更必须提高 `rankingVersion`，不可无记录地改变历史榜单含义。

### 7.5 DSH Score

第一周不发布统一 DSH Score。当前可验证数据不足以把热度、质量、安全和兼容性压缩成一个可信总分。待建立可复现的兼容性检查与更多用户行为信号后，再单独设计。

## 8. 页面信息架构

### 8.1 首页 `/`

首屏表达固定为“发现今天值得关注的 DeepSeek Harness 插件”，插件总数作为辅助证据，不作为主标题。

首页顺序：

1. Hero、全站搜索、目录入口、提交入口。
2. `Trending This Week`。
3. `Fastest Growing 24h`。
4. `Top by Stars`。
5. `Just Released`。
6. 分类入口。
7. 数据来源、更新时间、独立性与非官方声明。

每个榜单模块展示 5–6 个插件，提供进入完整目录并携带对应排序参数的链接。数据窗口尚未形成时保留模块标题与基线说明，不用 Featured 或 Stars 冒充 Trending。

### 8.2 目录 `/plugins`

保留名称、简介、标签和作者搜索，以及分类筛选。排序增加：

- Trending 7d
- Growth 24h
- Stars
- Newly released
- Recently updated

查询参数是可分享状态。无历史资格的插件在增长排序中排在有资格插件之后，并明确显示“历史不足”。

### 8.3 插件详情 `/plugins/[slug]`

每个有效插件必须生成唯一静态页面，并包含：

- 插件名、作者、简介、分类和状态。
- 安装命令与复制按钮。
- 当前 Stars、24h 增长、7d 增长、最后 Push、License。
- 简单增长历史；没有足够历史时显示数据起始时间。
- `dsh.bundle` Manifest 证据、检查时间和数据来源。
- 仓库链接、固定数据源提交 SHA。
- 同分类相似插件。
- 独立 title、description、canonical、Open Graph、Breadcrumb 和软件实体 JSON-LD。

README 摘要仅在能够稳定清洗和注明来源时加入。第一周优先使用仓库 description，不批量生成未经作者确认的 AI 描述。

### 8.4 投稿与 Claim `/submit`

- Submit 进入公开仓库的结构化 Issue Form。
- Claim 单独进入维护者证明表单。
- 提交不是自动批准，页面明确审核与验证流程。
- Claim 不改变 Ranking，也不自动授予 Featured、Verified 或认证状态。

## 9. 分阶段执行门禁

所有阶段在 `main` 上进行。每个阶段必须完成验收并形成独立本地提交，才允许进入下一阶段。两个仓库有改动时分别提交，不跨仓库混成一个提交。

### 阶段一：打平并证明覆盖率

数据仓库目标文件：

- `scripts/update.mjs`
- `scripts/validate.mjs`
- `scripts/monitor-upstream.mjs`
- `data/plugins.json`
- `data/upstream-sync.json`
- `.github/workflows/update.yml`

工作：

- 完成多来源隔离抓取、统一去重、Manifest 验证和来源追踪。
- 补齐 Forks、创建时间、归档状态和元数据检查时间。
- 在竞品快照中输出经过验证的集合差异，而不是估算页面数量。

验收：

- `missing_from_local = 0`。
- `local_increment > 0`。
- 插件主键、URL 和安装标识无重复。
- 每条插件记录至少一个发现来源。
- 单个竞品源故障不阻断其他来源更新。

建议提交：`feat: establish multi-source plugin coverage`

### 阶段二：建立增长历史和榜单产物

数据仓库目标文件：

- `scripts/update-history.mjs`
- `scripts/build-rankings.mjs`
- `scripts/validate.mjs`
- `data/github-history.json`
- `data/rankings.json`
- `.github/workflows/update.yml`
- `package.json`

工作：

- 每 6 小时写入紧凑 Stars 与 Forks 快照。
- 生成 Top、New、24h Growth 和 7d Trending。
- 校验时间递增、非负指标、唯一名次、计算版本和历史资格。

验收：

- 重复运行同一时间桶不会增加重复点。
- Top 与 New 可用。
- 历史不足时 24h 与 7d 榜单为空并带明确状态，而不是伪造结果。
- 满足窗口的固定样本能够复算出相同名次。
- 历史文件滚动保留 30 天，单次更新不会无限增长。

建议提交：`feat: add reproducible plugin rankings`

### 阶段三：把首页切换为 Ranking 与 Discovery

站点仓库目标文件：

- `scripts/fetch-catalog.mjs`
- `src/data/catalog.ts`
- `src/pages/index.astro`
- `src/pages/plugins/index.astro`
- `src/components/PluginCard.astro`
- `src/styles/global.css`

工作：

- 构建时从同一公开提交 SHA 下载插件目录与排名产物。
- 首页按既定顺序输出四类榜单。
- 目录支持榜单排序与 URL 状态。
- 卡片显示对应榜单的原始信号。

验收：

- 首页第一屏不再以完整大列表为核心。
- Top 与 New 排名和公开产物一致。
- 24h/7d 历史不足时页面诚实显示基线状态。
- 搜索、分类和排序组合后刷新 URL 状态不丢失。
- 无 JavaScript 时仍能读取首页榜单和插件链接。

建议提交：`feat: make rankings the primary discovery experience`

### 阶段四：完善独立插件页的 SEO 与证据

站点仓库目标文件：

- `src/pages/plugins/[slug].astro`
- `src/pages/sitemap.xml.ts`
- `src/components/PluginCard.astro`
- `src/styles/global.css`

工作：

- 展示增长、历史起点、Manifest、来源提交和仓库元数据。
- 修正相似插件排序，使其优先同分类且活跃，而不是取数据文件前 3 条。
- 保证所有有效插件进入 sitemap。

验收：

- 有效插件数等于生成的插件详情页数。
- 任取 10 个插件，页面的安装标识、Stars、增长、来源 SHA 与公开数据一致。
- 缺少 License、简介或历史时页面仍可生成，且使用“未确认”或“历史不足”。
- canonical 全部指向 `https://deepseekplugin.store/plugins/<slug>`。
- JSON-LD 不包含评分、安装量、安全认证或未确认兼容性。

建议提交：`feat: strengthen plugin evidence pages`

### 阶段五：闭合投稿、竞品监控和日常运营

数据仓库与站点仓库目标：

- Submit 与 Claim 从网站可以到达正确 Issue Form。
- 竞品快照保留 Stars、Forks、有效插件集合差异、最新提交和站点指纹。
- 形成每天可直接提取的增长榜单数据。

验收：

- 提交表单的必填字段足以完成验证和去重。
- Claim 需要公开维护者证据，且不会改变榜单。
- 竞品更新后两个小时内产生新快照或明确错误。
- 每日内容可以从 `rankings.json` 直接取得 3–5 个插件、增长量、详情页 URL 和数据时间。

建议提交：`feat: close the submission and monitoring loop`

## 10. 第一周日程

| 天 | 交付物 | 当天结束条件 |
| --- | --- | --- |
| Day 1 | 多来源覆盖和集合差异 | 阶段一验收并提交 |
| Day 2 | 历史文件和排名生成 | 阶段二验收并提交 |
| Day 3 | Top、New 与基线状态首页 | 阶段三验收并提交 |
| Day 4 | 详情页证据与 sitemap | 阶段四验收并提交 |
| Day 5 | Submit、Claim、竞品监控闭环 | 阶段五验收并提交 |
| Day 6 | 首个 24h Growth 检查与页面校准 | 有资格数据才开放榜单结果 |
| Day 7 | 7 天基线进度、覆盖复核、发布内容准备 | 输出周报基线，不提前伪造 7d Trending |

完整 7 天历史只能在第一批采样满 6–7 天后形成。若 Day 1 不是从零点开始，Trending 正式结果允许顺延到首个满足资格的采样点，不能用较短窗口标成 7 天。

## 11. 运行与验收命令

以下命令供实施阶段使用。根据当前项目规则，未经用户明确要求，不主动执行编译。

公开数据仓库：

```sh
cd /Users/wangyidong/project/deepseek-plugin-store
npm run update
npm run monitor
npm run validate
git diff --check
git status --short
```

私有站点仓库：

```sh
cd /Users/wangyidong/project/deepseek-plugin-store-site
npm run build
git diff --check
git status --short
```

真实页面人工验收视口：1440px、768px、390px。检查首页榜单含义、查询参数、复制命令、详情页证据、404、sitemap、robots、主域名 canonical 和移动端横向溢出。

## 12. 自动化与外部依赖

- GitHub Actions 内置 `GITHUB_TOKEN`：读取公开仓库元数据并提交自动更新。
- `CLOUDFLARE_PAGES_DEPLOY_HOOK`：公开数据改变后触发私有网站重新部署。
- Cloudflare Pages：部署私有 Astro 站点并在构建失败时保留上次成功版本。
- Google Search Console 与 Bing Webmaster：发布后手动提交 sitemap。
- Cloudflare Web Analytics：观察访问和回访；第一周不把流量推断为安装量。

不需要 Supabase、Turso、Neon、Redis、第三方搜索服务或新的运行时密钥。

## 13. 发布与回滚

- 数据自动化先在公开仓库完成校验，再触发站点构建。
- 站点构建始终固定到公开数据仓库的一个提交 SHA，避免构建过程中数据漂移。
- 排名算法错误时，回滚站点展示到 Top by Stars 与 Just Released，同时保留历史文件，不删除采样数据。
- 数据 Schema 不兼容时，回滚公开数据提交与站点消费提交到上一对兼容版本。
- GitHub 或竞品源故障时不清空目录，继续提供最近一次成功快照并显示更新时间。
- 任何删除插件的动作先进入人工复核，不能由一次抓取失败触发。

## 14. 每日运营节奏

每天固定记录：

- 本站有效插件数、竞品有效插件数、缺口和本站增量。
- 有 24h 历史与 7d 历史的插件比例。
- 24h 增长最快的 5 个插件及详情页 URL。
- 竞品 Stars、Forks、最新提交、有效插件集合变化和新功能变化。
- 站点自然搜索访问、榜单到详情页点击、详情页到仓库或安装复制的出站行为。

对外内容只使用可复核的数据表达，例如“过去 24 小时 Stars 增加 N”，不得写成“用户最多”“安装量最高”“官方推荐”或“最安全”。

## 15. 首周最终验收

- 本站覆盖竞品全部经同一规则验证的插件，并存在独立增量。
- 所有插件具有来源、Manifest 证据和元数据检查时间。
- 历史采样自动运行，24h 与 7d 资格判断正确。
- 首页以四类发现榜单为核心，历史不足时不伪造趋势。
- 每个有效插件都有静态详情页和 sitemap URL。
- Submit 与 Claim 流程可达且边界明确。
- 数据故障不会清空线上目录，站点构建失败不会替换上次成功部署。
- 线上展示的每个数字都能追溯到公开数据提交和计算版本。

达到以上标准后，第二周再评估中文页面、作者页、分类静态页、Badge、站内出站点击趋势和兼容性检查；不自动扩展到登录、评分或交易系统。
