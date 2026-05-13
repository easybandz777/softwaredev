# SEO Monitoring — Setup

All scripts live in `scripts/`, write to `seo-deliverables/monitoring/`, and run on plain Node 20+ (no extra installer needed because every script uses native `fetch`, native TypeScript stripping, and the only optional external tool is `lighthouse` invoked through `npx`).

## Prerequisites

- Node.js 22.6+ (for native TypeScript execution via type stripping). The repo is currently running Node 25.x which works out of the box.
- macOS, Linux, or WSL. The Bash orchestrator (`run-all-audits.sh`) assumes a POSIX shell.
- Network access to `quantlabusa.dev` and (for the indexing script) `googleapis.com`.

## Install

There is nothing to install beyond the existing repo dependencies. Confirm:

```bash
cd /Users/williambeltz/Documents/softwaredev
npm install
node --version   # must be >= 22.6
```

Lighthouse is pulled on demand by `npx` the first time you run `npm run monitor:lighthouse`, so the first run takes about a minute longer.

## Environment variables

Only one var is needed for full functionality, and the scripts degrade gracefully if it is missing:

```bash
# Path to a Google service-account JSON file with GSC access
export GSC_SERVICE_ACCOUNT_JSON="/Users/williambeltz/secrets/gsc-quantlabusa.json"
```

Put it in `~/.zshrc` or your shell profile. **Do not commit the JSON file** — store it outside the repo. Without this variable, `check-indexing-status.ts` falls back to a `site:` query scrape (single-number indexed estimate, no per-URL detail).

There is no other required configuration. All other scripts read only the public sitemap and the live HTML of the site.

## GSC service-account walkthrough

1. Go to `console.cloud.google.com` → create a project (e.g. `quantlab-seo`).
2. Library → search for "Google Search Console API" → Enable.
3. IAM & Admin → Service Accounts → Create Service Account. Name it `seo-monitor`. No special roles needed at the project level.
4. On the new service account → Keys → Add Key → JSON. The browser downloads `seo-monitor-xxxx.json`. Save it somewhere safe (`~/secrets/` or similar), set `GSC_SERVICE_ACCOUNT_JSON` to its absolute path.
5. Copy the `client_email` value from the JSON (looks like `seo-monitor@quantlab-seo.iam.gserviceaccount.com`).
6. Open Search Console for `quantlabusa.dev` → Settings → Users and permissions → Add user → paste the `client_email` → role: **Owner** (the Inspection API requires Owner).
7. Run `npm run monitor:indexing` once to confirm. The report should now have per-URL status rather than the fallback note.

## Run examples

```bash
# Cache-warm only (fastest, run daily)
npm run monitor:cache-warm

# One specific audit
npm run monitor:links
npm run monitor:freshness
npm run monitor:schema
npm run monitor:indexing

# Lighthouse: slow (~10 min for 20 URLs)
npm run monitor:lighthouse

# Everything, with rollup. Set SKIP_LIGHTHOUSE=1 to omit lighthouse from a weekly run.
npm run monitor:all
# or directly:
./scripts/run-all-audits.sh
SKIP_LIGHTHOUSE=1 ./scripts/run-all-audits.sh
```

Every script writes a dated markdown report to `seo-deliverables/monitoring/`. Re-running on the same day overwrites that day's report (intentional — scripts are idempotent). The Bash orchestrator additionally writes a `00-WEEKLY-REPORT-<date>.md` rollup that summarizes every step.

## Where output lands

```
seo-deliverables/monitoring/
  00-WEEKLY-REPORT-2026-05-12.md     <- the rollup; start here
  run-all-2026-05-12.log              <- raw step logs
  sitemap-snapshot-2026-05-12.json
  sitemap-diff-2026-05-12.md
  indexing-status-2026-05-12.md
  broken-links-2026-05-12.md
  cache-warm-2026-05-12.tsv
  cache-warm-2026-05-12.md
  freshness-audit-2026-05-12.md
  schema-validation-2026-05-12.md
  lighthouse-trend-2026-05-12.md
```

Read the playbook (`00-MONITORING-PLAYBOOK.md`) for how to interpret each one and what to do when a metric regresses.
