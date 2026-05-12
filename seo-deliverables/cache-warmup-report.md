# Vercel Edge Cache Warm-Up Report

**Site:** quantlabusa.dev
**Sitemap source:** `https://quantlabusa.dev/sitemap.xml`
**Date:** 2026-05-12
**Tool:** parallel `curl` (xargs -P 12, --max-time 20s)
**User-Agents:** Googlebot/2.1 (pass 1) and bingbot/2.0 (pass 2)

---

## Summary

| Metric | Pass 1 (Googlebot, cold) | Pass 2 (Bingbot, warm) | Delta |
|---|---|---|---|
| URLs requested | 177 | 177 | — |
| 200 OK | **173** | **173** | — |
| Failures (404) | 4 | 4 | unchanged |
| Avg TTFB | **197.9 ms** | **165.9 ms** | **-32.0 ms (-16.2%)** |
| P95 TTFB | **307 ms** | **260 ms** | **-47 ms (-15.3%)** |
| Min TTFB | 129 ms | 123 ms | — |
| Max TTFB | 448 ms | 323 ms | -125 ms |
| Slow (>5s) | 0 | 0 | — |

**Outcome:** Cache warming successful. The second pass (bingbot UA) showed a 16% reduction in average TTFB and a 15% reduction at p95 — confirming Vercel's edge cache populated correctly during pass 1 and served warm responses on pass 2. All warmed routes are now well under the 200 ms "good TTFB" Core Web Vitals threshold on average, with worst-case warm TTFB at 323 ms.

A warmed cache means the next live Googlebot or Bingbot hit returns from the edge instead of re-rendering through SSR, contributing to better LCP, faster crawl budget consumption, and improved indexing freshness signals.

---

## Persistent Failures (4)

All four are `/work/*` case-study slugs listed in `sitemap.xml` but returning **404** in production. They returned 404 in both passes plus a third immediate retry. They are NOT transient — these need a real fix.

| URL | Status (P1) | Status (P2) | Retry |
|---|---|---|---|
| https://quantlabusa.dev/work/northstar-trading-desk | 404 | 404 | 404 |
| https://quantlabusa.dev/work/coastal-yacht-services | 404 | 404 | 404 |
| https://quantlabusa.dev/work/regional-medical-billing | 404 | 404 | 404 |
| https://quantlabusa.dev/work/clear-channel-broadcast | 404 | 404 | 404 |

**Action required (out of scope for this task):** Either (a) create the case-study pages, or (b) remove these slugs from the sitemap generator so Googlebot doesn't index 404s. Soft-404s in `sitemap.xml` actively harm crawl trust.

---

## Slowest 10 URLs (sorted by cold/pass-1 TTFB)

| URL | Pass 1 TTFB | Pass 2 TTFB | Warmed Δ |
|---|---:|---:|---:|
| /services/mobile-app-development | 448 ms | 266 ms | -182 ms |
| /about/team | 350 ms | 152 ms | -198 ms |
| /services/mitre-attack-assessment | 345 ms | 123 ms | -222 ms |
| /services/custom-crm-development/macon-ga | 344 ms | 134 ms | -210 ms |
| /reviews | 344 ms | 155 ms | -189 ms |
| /services/custom-business-software | 339 ms | 156 ms | -183 ms |
| /services/payments-invoicing-licensing | 317 ms | 141 ms | -176 ms |
| /software-development-nashville-tn | 313 ms | 145 ms | -168 ms |
| /methodology | 309 ms | 144 ms | -165 ms |
| /services/subscription-billing | 307 ms | 154 ms | -153 ms |

Every slow page improved by 150–220 ms after warming — significant for LCP. The fact that `/services/mobile-app-development` is the slowest correlates with its larger payload (~183 KB), which is the heaviest single document on the site.

---

## Bonus Pass: Homepage Internal Link Crawl

Extracted 72 internal links from the homepage, deduped against the sitemap, found **11 candidates not in sitemap**:

- 10 were Next.js static asset hashes (`/_next/static/...`), `manifest.json`, `apple-touch-icon.png`, `favicon.ico`, `sitemap.xml` itself — these are CDN-cached automatically by Vercel and don't need page-level warming.
- **1 real-page orphan:** `https://quantlabusa.dev/industries` — **also returns 404** (no industries index page; only individual industry slugs exist).

The homepage links to `/industries` but no such page is rendered. Either build an industries index page or remove the link from the homepage. Logged here, not fixed (anti-requirement: don't modify code).

---

## Recommendations

1. **Rerun this script weekly** (Sundays evenings, US Eastern, ahead of Monday's heaviest Googlebot crawl window). A cron-friendly version of the warmup loop is below.
2. **Trigger warmup automatically after each Vercel production deploy** — fresh deploys evict the edge cache, so the first crawl after deploy is always cold. A GitHub Action or Vercel deploy webhook could call this.
3. **Fix the 5 sitemap 404s** before next Googlebot crawl. Listing 404s in `sitemap.xml` lowers the "sitemap trust score" and wastes crawl budget.
4. **Investigate the 183 KB `/services/mobile-app-development` payload** — it's 30%+ larger than peer service pages. Likely an oversized image or duplicated copy.

### Cron-friendly one-liner (for `crontab -e`)

```bash
# Warm Vercel edge cache for quantlabusa.dev every Sunday at 22:00 ET
0 22 * * 0 curl -s https://quantlabusa.dev/sitemap.xml | grep -oE '<loc>[^<]+</loc>' | sed 's/<loc>//; s/<\/loc>//' | xargs -P 12 -I {} curl -s -o /dev/null --max-time 20 -A "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" "{}" > /dev/null 2>&1
```

---

## Raw Data Files

- `/tmp/qlu-urls.txt` — 177 URLs extracted from sitemap
- `/tmp/qlu-pass1-googlebot.tsv` — pass 1 results (url, status, total_time, ttfb, size)
- `/tmp/qlu-pass2-bingbot.tsv` — pass 2 results
- `/tmp/qlu-orphans-warm.tsv` — homepage-link orphans warm-up results
