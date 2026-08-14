# Changelog

## 2026-08-14

### Strategy: awesome-dsh-plugin as the sole primary competitor

- Adopted `awesome-dsh-plugin` and `awesome-dsh-plugin.com` as the sole primary competitor for DeepSeekStore.
- Defined the product direction as a Plugin Database / Ranking / Discovery Engine, rather than a second Awesome List.
- Extended the hourly upstream sync plan to record competitor and DeepSeekStore snapshots, including plugin coverage, repository activity, PRs, indexed pages, SEO surface, and discovery capabilities.
- Established the first comparison priorities: coverage parity, 24-hour parity for basic discovery capabilities, then Ranking, Trending, Rising, New, DSH Score, plugin detail pages, growth history, and Submit / Claim.

### Current evidence

- Competitor website currently advertises 105 plugins and exposes 16 sitemap URLs, including bilingual home and category pages.
- Competitor site currently exposes bilingual metadata, JSON-LD, hreflang, OG image, Atom feed, category filtering, search, and copy-install actions.
- DeepSeekStore currently contains 305 verified plugins and 245 related projects in `data/plugins.json`, and exposes 16 sitemap URLs across the two locales and seven categories.
- DeepSeekStore's recent delivery sequence is data pipeline hardening, generated-site rebuild, and plugin submission intake.
- GitHub API checks for competitor repository metadata and pull requests returned HTTP 403 during this snapshot; those values remain unconfirmed until the hourly monitor obtains a successful authoritative read.

### Recommendation

Follow the competitor, but do not interrupt the current delivery rhythm for a broad rewrite.

1. Continue hourly measurement and maintain coverage parity using verified records. Compare like-for-like plugin records rather than raw list counts.
2. Make the next product increment a small homepage discovery layer: Top, New, and Rising derived from stored evidence. This is the smallest move that changes the product from list to discovery engine.
3. Add independent plugin pages only after the ranking data shape and website source boundary are stable; otherwise the work will multiply static pages before the ranking model is trustworthy.
4. Treat DSH Score, install counts, screenshots, and growth claims as later stages. Do not publish them until each metric has an identified source and historical snapshot.
5. Reassess the strategy after the first reliable seven-day competitor and DeepSeekStore snapshots. Continue only if the snapshots show measurable discovery value or a clear coverage gap.

Decision: follow the content and data surface now; defer a full ranking/detail-page build until the next measured increment proves the data model.
