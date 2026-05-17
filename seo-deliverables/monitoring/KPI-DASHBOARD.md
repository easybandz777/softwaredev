# QUANT LAB USA — SEO KPI Dashboard

Single source of truth for what to track, what to target, how to measure it, and how often to look. The metrics on this page are the only ones worth obsessing over for the next 12 months; everything else is either downstream of these or noise.

**Owner:** beltz@quantlabusa.dev
**Last updated:** 2026-05-16
**Cadence convention:** *Daily* (build a habit), *Weekly* (Monday morning sweep), *Monthly* (deeper analysis), *Quarterly* (strategy revisit).

---

## How to use this dashboard

1. **Every Monday morning:** run `npm run monitor:all` then open the generated `weekly-report-<date>.md`. It pulls the headline numbers from each monitor into a single page and auto-flags regressions. If anything is red, dive into the underlying monitor's dated report.
2. **For long-term trend:** monitors write dated reports to `seo-deliverables/monitoring/`. After 4-6 weeks you have enough data to chart. The rank tracker keeps a running history at `rank-history.json`.
3. **Anything not in this dashboard is probably noise.** Don't chase a metric just because someone tweeted it.

---

## 1. Traffic

| KPI | Target (12-month) | Current baseline | Source | Cadence | Automated? |
|---|---|---|---|---|---|
| Organic clicks (28d) from GSC | 750+ / week by month 9 | TBD (run `monitor:gsc` after GSC creds wired) | GSC Search Analytics API | Weekly | Yes (`monitor:gsc`) |
| Organic impressions (28d) | 100k / week by month 9 | TBD | GSC Search Analytics API | Weekly | Yes (`monitor:gsc`) |
| Aggregate organic CTR | 2.5%+ | TBD | derived in `monitor:gsc` | Weekly | Yes |
| Direct + referral sessions | trend up | requires Plausible / GA4 — not yet wired | analytics platform | Weekly | Manual |
| Top 10 landing pages by clicks | distribution across services, not stuck on `/` | TBD | `monitor:gsc` | Weekly | Yes |
| Country / city mix of organic visits | US first, GA/FL/TX heavy | requires GA4 | analytics platform | Monthly | Manual |

**Notes.** Traffic on its own is vanity. The next section (rankings) leads it by ~4-12 weeks; the section after that (conversions) trails it by ~1 week. If traffic moves and conversions don't, the keywords are wrong.

---

## 2. Rankings

| KPI | Target | Current baseline | Source | Cadence | Automated? |
|---|---|---|---|---|---|
| Keywords ranking in Google top 10 | ≥15 of 50 tracked | TBD (run `monitor:rank`) | `seo-deliverables/monitoring/rank-check-<date>.md` | Weekly | Yes (`monitor:rank`) |
| Keywords ranking in top 20 | ≥30 of 50 tracked | TBD | same | Weekly | Yes |
| Keywords at-or-above their `target_rank` field | 50%+ | TBD | same | Weekly | Yes |
| Brand search: `quantlab usa` top 3 | 1 | TBD | `monitor:rank` | Weekly | Yes |
| Average position (GSC) of top 100 pages | ≤20 by month 9 | TBD | `monitor:gsc` (column "Avg position") | Weekly | Yes |
| Number of "low-CTR opportunities" flagged (impressions ≥50, CTR <2%, position ≤10) | resolve ≥1 per week | TBD | `monitor:gsc` "Opportunity scan" | Weekly | Yes |

**Notes.** Rank backend cost-aware:
- **Free**: SerpApi 100 searches/month (covers 50 keywords twice/month or 25/week). Set `SERPAPI_KEY`.
- **Paid**: DataForSEO ~$0.003/keyword for full SERP (50 keywords/week = ~$0.60/mo). Set `DATAFORSEO_LOGIN` and `DATAFORSEO_PASSWORD`.
- **Manual scrape**: free but unreliable; Google captchas after ~5 searches in a row. Use only for ad-hoc spot checks.

---

## 3. Backlinks

| KPI | Target | Current baseline | Source | Cadence | Automated? |
|---|---|---|---|---|---|
| Referring domains | +5 per month | TBD | Ahrefs (paid) / Moz Link Explorer (free 10/mo) / GSC Links report | Monthly | Manual |
| Total backlinks | trend up | TBD | same | Monthly | Manual |
| Backlinks from DR≥50 domains | ≥1 per quarter | 0 | Ahrefs | Quarterly | Manual |
| Lost backlinks (delta) | 0 | TBD | same | Monthly | Manual |
| Anchor-text distribution (branded vs commercial vs informational) | balanced; ≤50% commercial | TBD | same | Monthly | Manual |

**Notes.** No automated free backlink data exists. The closest thing is GSC → Links → Top linking sites (manual export). Worth building a script that scrapes that once if it ever becomes a bottleneck — Bing Webmaster Tools also has a free backlink report.

---

## 4. Indexation

| KPI | Target | Current baseline | Source | Cadence | Automated? |
|---|---|---|---|---|---|
| Pages in sitemap | matches intended URL count | per `monitor:diff` snapshot | `sitemap-diff-<date>.md` | Weekly | Yes (`monitor:diff`) |
| Pages indexed by Google | ≥95% of sitemap | TBD | GSC Coverage report + `monitor:indexing` | Weekly | Yes (`monitor:indexing`) |
| Pages "discovered, not crawled" | ≤5% of sitemap | TBD | `monitor:indexing` | Weekly | Yes |
| Pages "crawled, not indexed" | ≤2% of sitemap | TBD | `monitor:indexing` | Weekly | Yes |
| Orphan pages (zero inbound links) | 0 | TBD | `monitor:link-graph` | Weekly | Yes (`monitor:link-graph`) |
| Pages with broken canonicals | 0 | TBD | `monitor:canonical` | Weekly | Yes (`monitor:canonical`) |
| URLs added or removed in sitemap (week-over-week) | intentional only | TBD | `monitor:diff` | Weekly | Yes |

**Notes.** `monitor:indexing` only returns per-URL detail if `GSC_SERVICE_ACCOUNT_JSON` is set (see SETUP-GSC-API.md). Otherwise it falls back to a single-number `site:` scrape.

---

## 5. Conversions

| KPI | Target | Current baseline | Source | Cadence | Automated? |
|---|---|---|---|---|---|
| Contact form submissions from organic | ≥4 / month by month 6 | TBD | Plausible / GA4 + form analytics | Weekly | Manual |
| Newsletter sign-ups from organic | ≥10 / month | TBD | Resend dashboard | Weekly | Manual |
| Calculator completions (`/calculators/crm-roi`) | trend up | TBD | analytics | Monthly | Manual |
| Lead-magnet downloads | ≥10 / month | TBD | Resend / Stripe | Monthly | Manual |
| Cost-per-lead from organic | <$50 implicit | TBD | derived | Quarterly | Manual |
| Organic → discovery-call rate | ≥15% of contact forms | TBD | manual CRM | Quarterly | Manual |

**Notes.** No analytics platform is wired yet on the live site (see `seo-deliverables/analytics-setup.md` for the plan). Until then, this section is intentionally TBD — measure it manually from form submissions and Resend.

---

## 6. Technical health

| KPI | Target | Current baseline | Source | Cadence | Automated? |
|---|---|---|---|---|---|
| Broken internal links (4xx/5xx) | 0 | per `monitor:links` | `broken-links-<date>.md` | Weekly | Yes |
| Pages with valid Schema (no errors) | 100% | per `monitor:schema` | `schema-validation-<date>.md` | Weekly | Yes |
| Pages with duplicate `<title>` | 0 groups | per `monitor:meta-dupes` | `meta-duplicates-<date>.md` | Weekly | Yes |
| Pages with duplicate meta description | 0 groups | per `monitor:meta-dupes` | same | Weekly | Yes |
| Pages with title outside 30-65 chars | ≤5 | per `monitor:meta-dupes` | same | Weekly | Yes |
| Lighthouse mobile Perf score (sample of 20 URLs) | ≥85 avg | per `monitor:lighthouse` | `lighthouse-trend-<date>.md` | Weekly | Yes |
| Lighthouse mobile SEO score | ≥95 avg | per `monitor:lighthouse` | same | Weekly | Yes |
| Lighthouse mobile A11y score | ≥90 avg | per `monitor:lighthouse` | same | Weekly | Yes |
| Avg TTFB (Googlebot UA) | ≤200 ms | per `monitor:cache-warm` | `cache-warm-<date>.tsv` | Daily | Yes (`monitor:cache-warm`) |
| Pages older than 90 days (no `dateModified`) | ≤10 | per `monitor:freshness` | `freshness-audit-<date>.md` | Weekly | Yes |
| CWV LCP (75th percentile, Chrome UX Report) | ≤2.5s | TBD | CrUX dashboard | Monthly | Manual |
| CWV CLS (75th percentile) | ≤0.1 | TBD | CrUX dashboard | Monthly | Manual |
| CWV INP (75th percentile) | ≤200 ms | TBD | CrUX dashboard | Monthly | Manual |

---

## Update cadence summary

| When | What |
|---|---|
| **Daily** | `npm run monitor:cache-warm` (free, fast, warms edge) |
| **Weekly (Mon)** | `npm run monitor:all` → open `weekly-report-<date>.md`. Skim, drill into anything red. |
| **Weekly (Mon, post-deploy)** | After any deploy that adds/removes pages: re-run `monitor:diff`, `monitor:links`, `monitor:schema`. |
| **Weekly** | Update GSC manual export for backlinks (5-min task). |
| **Monthly** | CWV from CrUX, backlink delta from Ahrefs/Moz, conversion roll-up. Update `KPI-DASHBOARD.md` "Current baseline" column with actual numbers. |
| **Quarterly** | Revisit target numbers in light of 3-month trend. Add/remove keywords from `tracking-keywords.json`. Audit which sections of this dashboard have stopped being useful and prune. |

---

## Escalation thresholds

Trip any of these and stop what you are doing:

- **Organic clicks drop ≥30% week-over-week** (and not just a holiday): something broke. Check `monitor:indexing` first, then GSC Coverage manually.
- **Indexed pages drop ≥10%**: check `monitor:diff` for unintended removals, then check `robots.txt` and `<meta name="robots">` on a sample page.
- **Lighthouse mobile Perf drops ≥10 points**: bisect with `git log --since=1.week`, almost always a new heavy dependency.
- **Tracked top-10 keyword count drops by ≥3 in one week**: review GSC for the specific affected pages — content has likely been deprioritized or de-indexed.
- **More than 5 broken internal links**: something renamed routes without updating links or adding redirects in `next.config.ts`.
- **Brand keyword (`quantlab usa`) falls out of top 3**: usually a hosting / DNS / robots issue. Critical.

---

## Things this dashboard intentionally does NOT track

- **DA / DR / TF / spam score**: vanity metrics. Replaceable by "do real backlinks compound?"
- **Word counts**: long-form does not beat short useful pages.
- **Keyword density**: not how Google works in 2026.
- **Number of pages published**: see `seo-deliverables/content-calendars/` for cadence; quality > quantity.
- **Social shares**: do not correlate with rankings.
- **Bounce rate from GA4**: too noisy, replaced by per-page conversion rate.
