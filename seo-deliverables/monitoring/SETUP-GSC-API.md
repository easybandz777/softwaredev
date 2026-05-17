# Google Search Console API — Setup Guide

This guide enables two monitoring scripts:

- `npm run monitor:gsc` — pulls top queries / pages / impressions / CTR / position
- `npm run monitor:indexing` — checks per-URL indexation status via URL Inspection API

Both scripts share **one** Google service-account JSON key. Both fall back to stub behavior if the key is missing, so you can ship the scripts before doing this setup.

The same setup also enables the optional `SERPAPI_KEY` rank-tracker backend, covered at the bottom.

---

## Pre-requisites

- A Google account that owns the `quantlabusa.dev` property in Search Console.
- Verified property: `sc-domain:quantlabusa.dev` (Domain property) **or** `https://quantlabusa.dev/` (URL-prefix property). The scripts default to `https://quantlabusa.dev`; if you use Domain property, change `SITE` in `scripts/_lib.ts` to `sc-domain:quantlabusa.dev`.
- Local Node.js 22.6+ (already required by the repo).
- ~10 minutes the first time. Zero after.

---

## Step 1 — create a Google Cloud project (or reuse one)

1. Open <https://console.cloud.google.com/projectcreate>.
2. Project name: `quantlab-seo` (no organization needed).
3. Click **Create**. Wait a few seconds for it to provision.
4. Confirm the project picker at the top shows `quantlab-seo`.

> Already have a Cloud project (e.g., from Vercel / Stripe work)? Reuse it. Service accounts are scoped to the project; nothing about this conflicts with other usage.

---

## Step 2 — enable the Search Console API

1. With the project selected, open <https://console.cloud.google.com/apis/library/searchconsole.googleapis.com>.
2. Click **Enable**. Wait for the green checkmark.

> Note: the "Search Console API" (`searchconsole.googleapis.com`) covers both URL Inspection and Search Analytics. You do not need the legacy "Webmasters API" — they share the same backend now.

---

## Step 3 — create a service account

1. Open <https://console.cloud.google.com/iam-admin/serviceaccounts>.
2. Click **Create Service Account**.
3. Name: `seo-monitor`. ID: auto-fills. Description: `Read-only GSC + URL Inspection API access for SEO monitoring scripts`.
4. **Skip** the "Grant access to project" step — service accounts need no project-level IAM role for Search Console. Click **Continue** → **Done**.
5. The list now shows `seo-monitor@quantlab-seo.iam.gserviceaccount.com` (your exact name will vary by project ID).

---

## Step 4 — download a JSON key

1. From the service-accounts list, click the new account.
2. Open the **Keys** tab → **Add Key** → **Create new key** → choose **JSON** → **Create**.
3. A file like `quantlab-seo-abc12345.json` downloads automatically.
4. **DO NOT** commit this file. The repo's `.gitignore` should already exclude `*.json` keys, but verify with `git status`.
5. Move it somewhere durable:
   ```bash
   mkdir -p ~/secrets
   mv ~/Downloads/quantlab-seo-*.json ~/secrets/gsc-quantlabusa.json
   chmod 600 ~/secrets/gsc-quantlabusa.json
   ```

---

## Step 5 — grant the service account access in Search Console

The service-account email needs to be added as an **Owner** of the Search Console property (the URL Inspection API rejects anything less than Owner).

1. Copy the `client_email` from the JSON. It looks like `seo-monitor@quantlab-seo.iam.gserviceaccount.com`.
   ```bash
   cat ~/secrets/gsc-quantlabusa.json | grep client_email
   ```
2. Open <https://search.google.com/search-console>.
3. Pick the `quantlabusa.dev` property (or `sc-domain:quantlabusa.dev`).
4. Settings (gear icon, lower left) → **Users and permissions** → **Add user**.
5. Paste the email. Permission: **Owner**. Click **Add**.

> If you only see "Full" and "Restricted" as permission options, your property is the older "Domain" or "URL prefix" property and the **Owner** option lives on the parent verification page instead. Click the property name → "Property settings" → "Users and permissions" — Owner will be there.

---

## Step 6 — wire the env var locally

Add to `~/.zshrc` (or `~/.bashrc`):

```bash
export GSC_SERVICE_ACCOUNT_JSON="$HOME/secrets/gsc-quantlabusa.json"
```

Reload your shell (`source ~/.zshrc`) and confirm:

```bash
echo "$GSC_SERVICE_ACCOUNT_JSON"
ls -l "$GSC_SERVICE_ACCOUNT_JSON"
```

---

## Step 7 — verify

```bash
# This should now write a report with per-URL detail instead of the fallback note.
npm run monitor:indexing

# This should write a report with real top queries / pages.
npm run monitor:gsc
```

Open the latest dated reports:

```bash
ls -lt seo-deliverables/monitoring/indexing-status-*.md | head -1
ls -lt seo-deliverables/monitoring/gsc-snapshot-*.md   | head -1
```

If the indexing report still says "Fallback (site: query scrape)", the env var isn't being seen by Node. Double-check `echo $GSC_SERVICE_ACCOUNT_JSON` in the same shell session before running `npm`.

---

## Step 8 (optional) — wire it for GitHub Actions

If you want the weekly cron in `.github/workflows/seo-monitoring.yml` to use the API:

1. In your repo on GitHub → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**.
2. Name: `GSC_SERVICE_ACCOUNT_JSON_B64`.
3. Value: base64-encoded JSON key:
   ```bash
   base64 -i ~/secrets/gsc-quantlabusa.json | pbcopy   # macOS
   # or: base64 ~/secrets/gsc-quantlabusa.json | xclip  # Linux
   ```
4. The workflow YAML reads `GSC_SERVICE_ACCOUNT_JSON_B64`, decodes it into a temp file, and exports `GSC_SERVICE_ACCOUNT_JSON` as the file's path. (See `.github/workflows/seo-monitoring.yml`.)

> Why base64? Multi-line PEM keys break GitHub secret parsing. Base64 keeps the whole thing on one line.

---

## Quotas and costs

| API | Free tier | Hard limit | What we use |
|---|---|---|---|
| Search Console — Search Analytics | 1,200 queries / minute, no daily cap | Burst-rate only | 3 queries per `monitor:gsc` run |
| Search Console — URL Inspection | 2,000 / day per property | 600 / minute | ~200 URLs once per week → well under |
| Cloud Console | Free | n/a | n/a |

No billing account required. The Search Console API does not bill at our usage tier.

---

## Optional — SerpApi key for rank tracking

The rank tracker (`npm run monitor:rank`) supports three backends. SerpApi has a free tier:

1. <https://serpapi.com/users/sign_up> — free account, 100 searches / month.
2. Dashboard → API key. Copy it.
3. Add to `~/.zshrc`:
   ```bash
   export SERPAPI_KEY="your_key_here"
   ```
4. Run:
   ```bash
   npm run monitor:rank -- --max=25
   ```

> 100/month covers 25 keywords/week (one weekly run). Bumping to all 50 keywords twice/month means 100/month exactly — careful with the budget.

For unlimited usage, use **DataForSEO** instead (paid; ~$0.003/keyword). Set:

```bash
export DATAFORSEO_LOGIN="your-login"
export DATAFORSEO_PASSWORD="your-password"
```

If neither is set, `monitor:rank` writes a stub report explaining how to configure it.

---

## Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| `GSC inspect failed: 403` | Service account not Owner | Re-check Step 5; permission must be **Owner**, not "Full" |
| `GSC inspect failed: 404` | Site URL mismatch | If you use the Domain property, change `SITE` in `_lib.ts` from `https://quantlabusa.dev` to `sc-domain:quantlabusa.dev` (or pass it explicitly to the inspect call) |
| `Failed to fetch sitemap` | Vercel deploying / DNS | Run `curl -I https://quantlabusa.dev/sitemap.xml`; retry once the 200 returns |
| `private_key` parse error | JSON file was edited or saved as a different format | Re-download from Cloud Console; do not open the JSON in Word/TextEdit |
| Reports written but data look stale | GSC has 2-3 day lag | Check the "Window:" header in the report — that's the actual date range used |
