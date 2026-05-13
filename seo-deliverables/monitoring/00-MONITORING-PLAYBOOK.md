# QUANT LAB USA — SEO Monitoring Playbook

This is the operations manual for the maintenance layer that sits on top of the wave 1-4 SEO build (192 sitemap URLs as of 2026-05-12). The site is live, GSC and Bing Webmaster are verified, and the work now shifts from one-time construction to weekly observability. This playbook documents the scripts, their cadence, how to read their output, what regressions mean, and how to escalate.

The Vercel Hobby plan only allows one daily cron and it is already used by the email-drip ticker (`/api/drip/tick`). Everything described here runs locally (or via an external scheduler) — there is no second Vercel cron to fight for.

## What ships in this monitoring layer

Seven Node + TypeScript scripts in `scripts/`, one Bash orchestrator, all idempotent, all writing dated reports to `seo-deliverables/monitoring/`. Reports use ISO `YYYY-MM-DD` so the directory sorts naturally and you can grep for the date you want.

| Script | What it does | Cadence | Output |
|---|---|---|---|
| `diff-sitemap.ts` | Snapshots `sitemap.xml`, diffs vs the previous snapshot | Weekly (Mon) | `sitemap-snapshot-<date>.json`, `sitemap-diff-<date>.md` |
| `check-indexing-status.ts` | Calls GSC URL Inspection API per URL (fallback: `site:` scrape) | Weekly (Mon) | `indexing-status-<date>.md` |
| `check-broken-links.ts` | Fetches every sitemap URL, extracts internal `<a>` hrefs, checks for 4xx/5xx | Weekly (Mon) | `broken-links-<date>.md` |
| `warm-cache.ts` | Fetches every sitemap URL as Googlebot + Bingbot to warm Vercel edge | Daily (any time) | `cache-warm-<date>.tsv`, `cache-warm-<date>.md` |
| `content-freshness-audit.ts` | Walks `src/app/**/page.tsx`, extracts `datePublished` / `dateModified` from JSON-LD, flags >90 days | Weekly (Mon) | `freshness-audit-<date>.md` |
| `lighthouse-batch.ts` | Lighthouse on 20 top URLs, compares to `lighthouse-report.md` baseline, flags >5pt drops | Weekly (Mon) — long, ~10 min | `lighthouse-trend-<date>.md` |
| `check-schema.ts` | Pulls 30 URLs, validates JSON-LD required fields per type | Weekly (Mon) | `schema-validation-<date>.md` |
| `run-all-audits.sh` | Runs all of the above with logging, writes the rollup | Weekly (Mon) | `00-WEEKLY-REPORT-<date>.md`, `run-all-<date>.log` |

## Recommended cadence

- **Daily** (or twice daily during a launch window): `npm run monitor:cache-warm`. Cheap, helps both crawlers, no setup needed.
- **Weekly, Monday morning**: `npm run monitor:all` (the orchestrator). Generates the `00-WEEKLY-REPORT-<date>.md` rollup. Skim it; only dive into individual reports if a row is flagged.
- **On every deploy that adds or removes routes**: `npm run monitor:links` and `npm run monitor:schema` immediately after `vercel --prod` finishes.
- **Quarterly or after major content overhauls**: `npm run monitor:lighthouse` alone, so you can compare a trend across multiple snapshots in one place.

## How to read each report

### `00-WEEKLY-REPORT-<date>.md`
Top-of-file table shows the exit code of each step. Anything non-zero is in the log block at the bottom. Headline numbers from each sub-report are inlined under "Summary" blocks so you can scan in 30 seconds without opening anything else.

### `sitemap-diff-<date>.md`
Three lists: added, removed, changed `changefreq`. Added is the celebration list. Removed is the alarm list — if a URL is removed unexpectedly (i.e. you didn't intentionally drop it), that's a regression. Changed `changefreq` matters less but is useful when, say, blog posts move from "weekly" to "monthly" after they stop being updated.

### `indexing-status-<date>.md`
Buckets: indexed, discovered (not yet crawled), crawled-not-indexed, blocked, error, unknown. The action items by bucket:
- **discovered (not crawled)**: usually a sign GSC is waiting. If a URL has been stuck here for 3+ weeks, ping the sitemap via the existing `/api/sitemap-ping/` route, or use the GSC UI to "Request indexing" on the worst offenders.
- **crawled-not-indexed**: thin content. Add unique copy, internal links, and schema; rerun next week.
- **blocked**: `robots.txt` is excluding the URL. Audit `public/robots.txt` and `next.config.ts` headers.
- **error**: usually transient. If the same URL errors two weeks in a row, open the GSC UI and look at the Coverage report.

If you don't have GSC API credentials wired up, the script falls back to scraping the `site:quantlabusa.dev` Google search query for a single approximate indexed count. That's just enough to detect a "Google dropped half our pages overnight" event.

### `broken-links-<date>.md`
Anything in the "Broken links" table is a real defect — either a typo on a published page or a route that 404s. The "Redirects" table is informational; a flood of new redirects after a deploy means someone changed slugs, which dilutes inbound links.

### `cache-warm-<date>.md` + `.tsv`
The TSV is for ad-hoc analysis (load it into Excel/Numbers to chart TTFB over time). The MD is a quick sanity check — total OK count and average TTFB. If TTFB jumps from ~80 ms to ~400 ms, something on Vercel changed (cold lambda, edge cache evicted, deploy in progress).

### `freshness-audit-<date>.md`
Pages older than 90 days are flagged. Refreshing doesn't mean rewriting the whole article — bump `dateModified`, add a paragraph, fix one stat, swap a screenshot. Google rewards demonstrable maintenance. The "Missing dateModified" section is the easier fix; just add the field to the JSON-LD on those pages.

### `lighthouse-trend-<date>.md`
Compares against `seo-deliverables/lighthouse-report.md` (the wave-3 baseline). Regressions are >5 point drops; anything under that is normal variance on a noisy headless run. If you see a real regression, run `npx @next/bundle-analyzer` to see which chunk grew.

### `schema-validation-<date>.md`
Validates required fields per type (Article needs `headline`, `author`, `datePublished`, `image`; Service needs `name`, `provider`; FAQPage needs `mainEntity`; BreadcrumbList needs `itemListElement`). Errors block rich results. Warnings are recommended fields (e.g., `dateModified`) — fix opportunistically.

## What to do when X regresses

- **Indexed count drops**: check `sitemap-diff` first — did you remove pages? If not, request indexing in GSC for the top 20 commercial pages, and verify `robots.txt` plus `<meta name="robots">` headers on a sample page using `curl -I`.
- **Broken links appear**: search for the source URL in the repo with `grep -r`. If it's a route that was renamed, add a `redirects()` entry in `next.config.ts` rather than fixing every internal link.
- **Lighthouse regression**: bisect with `git log --since=1.week`. Almost always a new bundle import. The two largest existing chunks (per the May 12 baseline) are already 34-55% unused — adding another heavy dep tips mobile Perf below 90 fast.
- **Schema errors**: the offending page.tsx file is in the source. The Article/BlogPosting fields are most often missing `image`. The BreadcrumbList component should be reused, not hand-rolled.
- **Cache TTFB spikes**: check the Vercel deployments dashboard. A failed deploy can leave the prior revision serving with no warm edge cache.

## Local cron setup

On macOS, the easiest path is `launchd` via `crontab -e`:

```
# Weekly Monday 06:00 local
0 6 * * 1 cd /Users/williambeltz/Documents/softwaredev && SKIP_LIGHTHOUSE=0 ./scripts/run-all-audits.sh
# Daily 06:00 local — cache warm only
0 6 * * * cd /Users/williambeltz/Documents/softwaredev && node scripts/warm-cache.ts
```

For "real" alerting, use an external scheduler that can hit a webhook on failure — `cron-job.org` (free, hits any URL on a schedule and emails on non-2xx) or BetterStack Cron. Both are zero-infra alternatives that don't burn the Vercel Hobby cron slot.

## GSC API setup, the short version

1. Cloud Console → create a project → enable "Google Search Console API".
2. Create a service account, generate a JSON key, download it.
3. In Search Console → Settings → Users and permissions → add the service-account email (looks like `xxx@yyy.iam.gserviceaccount.com`) with the "Owner" role for `quantlabusa.dev`.
4. Save the JSON locally (outside the repo). Set `GSC_SERVICE_ACCOUNT_JSON=/absolute/path/to/key.json` in your shell or in a local `.env` you do not commit.
5. Run `npm run monitor:indexing`. The script falls back to a `site:` scrape if the JSON isn't present, so you can ship the script before doing the API plumbing.

The fallback exists so the script never silently fails — it'll always write a report — but the per-URL detail only happens once GSC is wired up.

## Automation roadmap

These scripts emit deterministic markdown. The next layer is to push the headline numbers somewhere visible:
- **Slack**: a single webhook + 20 lines in `run-all-audits.sh` that `curl`s the rollup into a channel.
- **Email**: the same trick using Resend (already installed) — send the rollup MD as an HTML email to `beltz@quantlabusa.dev` each Monday morning.
- **Dashboard**: parse the dated reports into a single JSON timeseries and render a static chart page at `/internal/seo-trend` (auth-gated). This is the right destination once there's 8-12 weeks of data; before then the variance overwhelms the signal.
- **Anomaly detection**: simple rules first ("indexed count dropped >10% week-over-week"), not ML. ML on weekly samples will overfit instantly.

The point of this layer is not to replace your judgment. It's to make a regression undeniable by the time you next look at the repo.
