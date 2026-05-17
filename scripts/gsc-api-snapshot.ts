/**
 * scripts/gsc-api-snapshot.ts
 *
 * Pulls a snapshot from Google Search Console's Search Analytics API:
 *   - top 100 queries by clicks (last 28 days)
 *   - top 100 pages by clicks (last 28 days)
 *   - top 50 queries by impressions (last 28 days, separate from clicks)
 *
 * Emits:
 *   - seo-deliverables/monitoring/gsc-snapshot-<date>.md (human)
 *   - seo-deliverables/monitoring/gsc-snapshot-<date>.csv (queries + pages, raw)
 *   - seo-deliverables/monitoring/gsc-snapshot-<date>.json (full payload)
 *
 * Requires:
 *   - env GSC_SERVICE_ACCOUNT_JSON pointing to a Google service-account JSON
 *     key (the same one used by check-indexing-status.ts).
 *   - The service-account email added as Owner in Search Console for the
 *     `quantlabusa.dev` property.
 *
 * If credentials are missing, writes a stub report explaining what to set,
 * exits 0 (idempotent / safe-to-run-in-CI).
 *
 * Run: npm run monitor:gsc
 */

import { promises as fs } from "node:fs";
import path from "node:path";
import { MONITOR_DIR, SITE, ensureDir, today, writeReport } from "./_lib.ts";

interface GscRow {
  keys: string[];
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

interface GscResp {
  rows?: GscRow[];
}

interface ServiceAccount {
  client_email: string;
  private_key: string;
}

async function loadServiceAccount(): Promise<ServiceAccount | null> {
  const p = process.env.GSC_SERVICE_ACCOUNT_JSON;
  if (!p) return null;
  try {
    const raw = await fs.readFile(p, "utf8");
    const parsed = JSON.parse(raw);
    if (!parsed.client_email || !parsed.private_key) return null;
    return {
      client_email: parsed.client_email,
      private_key: parsed.private_key,
    };
  } catch {
    return null;
  }
}

function base64url(buf: Buffer): string {
  return buf
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

async function getToken(sa: ServiceAccount): Promise<string> {
  const { createSign } = await import("node:crypto");
  const now = Math.floor(Date.now() / 1000);
  const header = base64url(
    Buffer.from(JSON.stringify({ alg: "RS256", typ: "JWT" })),
  );
  const payload = base64url(
    Buffer.from(
      JSON.stringify({
        iss: sa.client_email,
        scope: "https://www.googleapis.com/auth/webmasters.readonly",
        aud: "https://oauth2.googleapis.com/token",
        exp: now + 3600,
        iat: now,
      }),
    ),
  );
  const signer = createSign("RSA-SHA256");
  signer.update(`${header}.${payload}`);
  const sig = base64url(signer.sign(sa.private_key));
  const jwt = `${header}.${payload}.${sig}`;
  const body = new URLSearchParams({
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: jwt,
  });
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body,
  });
  if (!res.ok) {
    throw new Error(`GSC token request failed: ${res.status} ${await res.text()}`);
  }
  const json = (await res.json()) as { access_token: string };
  return json.access_token;
}

interface QueryParams {
  startDate: string;
  endDate: string;
  dimensions: string[];
  rowLimit: number;
  orderBy?: { field: string; descending?: boolean }[];
}

async function searchAnalytics(
  token: string,
  siteUrl: string,
  body: QueryParams,
): Promise<GscRow[]> {
  const url = `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(
    siteUrl,
  )}/searchAnalytics/query`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    throw new Error(
      `GSC searchAnalytics ${siteUrl} failed: ${res.status} ${await res.text()}`,
    );
  }
  const json = (await res.json()) as GscResp;
  return json.rows ?? [];
}

function csvEscape(v: string | number): string {
  const s = String(v);
  if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

function rangeDays(n: number): { start: string; end: string } {
  const end = new Date();
  end.setUTCDate(end.getUTCDate() - 2); // GSC lags 2-3 days
  const start = new Date(end);
  start.setUTCDate(end.getUTCDate() - (n - 1));
  return { start: start.toISOString().slice(0, 10), end: end.toISOString().slice(0, 10) };
}

function renderStub(): string {
  return [
    `# GSC Snapshot — ${today()}`,
    "",
    "Skipped: `GSC_SERVICE_ACCOUNT_JSON` env var is not set.",
    "",
    "To enable this snapshot:",
    "1. Create a Google Cloud project, enable Search Console API.",
    "2. Create a service account, download its JSON key.",
    "3. In Search Console → Settings → Users and permissions, add the",
    "   service-account email with Owner role for `quantlabusa.dev`.",
    "4. Store the JSON key outside the repo, then:",
    "   ```",
    "   export GSC_SERVICE_ACCOUNT_JSON=/absolute/path/to/key.json",
    "   ```",
    "5. Re-run `npm run monitor:gsc`.",
    "",
    "Full walkthrough: [SETUP-GSC-API.md](./SETUP-GSC-API.md)",
    "",
  ].join("\n");
}

function render(
  topQueriesByClicks: GscRow[],
  topPagesByClicks: GscRow[],
  topQueriesByImpressions: GscRow[],
  range: { start: string; end: string },
): string {
  const sumClicks = topQueriesByClicks.reduce((a, r) => a + r.clicks, 0);
  const sumImpressions = topQueriesByClicks.reduce(
    (a, r) => a + r.impressions,
    0,
  );
  const ctr = sumImpressions > 0 ? sumClicks / sumImpressions : 0;
  const lines: string[] = [];
  lines.push(`# GSC Snapshot — ${today()}`);
  lines.push("");
  lines.push(`Window: ${range.start} → ${range.end} (last 28 days, GSC lag 2-3 days)`);
  lines.push("");
  lines.push("## Totals (across reported queries)");
  lines.push("");
  lines.push(`- Clicks (top 100 queries): ${sumClicks}`);
  lines.push(`- Impressions (top 100 queries): ${sumImpressions}`);
  lines.push(`- Aggregate CTR: ${(ctr * 100).toFixed(2)}%`);
  lines.push("");
  lines.push("## Top queries by clicks");
  lines.push("");
  lines.push("| # | Query | Clicks | Impressions | CTR | Avg position |");
  lines.push("|---:|---|---:|---:|---:|---:|");
  topQueriesByClicks.slice(0, 50).forEach((r, i) => {
    lines.push(
      `| ${i + 1} | ${r.keys[0]} | ${r.clicks} | ${r.impressions} | ${(
        r.ctr * 100
      ).toFixed(2)}% | ${r.position.toFixed(1)} |`,
    );
  });
  lines.push("");
  lines.push("## Top queries by impressions (visibility, not yet clicks)");
  lines.push("");
  lines.push("| # | Query | Impressions | Clicks | CTR | Avg position |");
  lines.push("|---:|---|---:|---:|---:|---:|");
  topQueriesByImpressions.slice(0, 50).forEach((r, i) => {
    lines.push(
      `| ${i + 1} | ${r.keys[0]} | ${r.impressions} | ${r.clicks} | ${(
        r.ctr * 100
      ).toFixed(2)}% | ${r.position.toFixed(1)} |`,
    );
  });
  lines.push("");
  lines.push("## Top pages by clicks");
  lines.push("");
  lines.push("| # | Page | Clicks | Impressions | CTR | Avg position |");
  lines.push("|---:|---|---:|---:|---:|---:|");
  topPagesByClicks.slice(0, 50).forEach((r, i) => {
    lines.push(
      `| ${i + 1} | ${r.keys[0]} | ${r.clicks} | ${r.impressions} | ${(
        r.ctr * 100
      ).toFixed(2)}% | ${r.position.toFixed(1)} |`,
    );
  });
  lines.push("");
  lines.push(
    "## Opportunity scan: high-impression / low-CTR (potential title rewrites)",
  );
  lines.push("");
  const opportunities = topQueriesByImpressions
    .filter((r) => r.impressions >= 50 && r.ctr < 0.02 && r.position <= 10)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 25);
  if (opportunities.length === 0) {
    lines.push("None matching threshold (≥50 impressions, CTR <2%, position ≤10).");
  } else {
    lines.push("| Query | Impressions | CTR | Position |");
    lines.push("|---|---:|---:|---:|");
    for (const r of opportunities) {
      lines.push(
        `| ${r.keys[0]} | ${r.impressions} | ${(r.ctr * 100).toFixed(
          2,
        )}% | ${r.position.toFixed(1)} |`,
      );
    }
  }
  lines.push("");
  return lines.join("\n") + "\n";
}

async function main(): Promise<void> {
  await ensureDir(MONITOR_DIR);
  const sa = await loadServiceAccount();
  if (!sa) {
    const stub = renderStub();
    const p = await writeReport(`gsc-snapshot-${today()}.md`, stub);
    console.log(`Wrote ${path.relative(process.cwd(), p)} (stub — no creds)`);
    return;
  }
  const token = await getToken(sa);
  const range = rangeDays(28);

  const topQueriesByClicks = await searchAnalytics(token, SITE, {
    startDate: range.start,
    endDate: range.end,
    dimensions: ["query"],
    rowLimit: 100,
    orderBy: [{ field: "clicks", descending: true }],
  });
  const topPagesByClicks = await searchAnalytics(token, SITE, {
    startDate: range.start,
    endDate: range.end,
    dimensions: ["page"],
    rowLimit: 100,
    orderBy: [{ field: "clicks", descending: true }],
  });
  const topQueriesByImpressions = await searchAnalytics(token, SITE, {
    startDate: range.start,
    endDate: range.end,
    dimensions: ["query"],
    rowLimit: 100,
    orderBy: [{ field: "impressions", descending: true }],
  });

  // CSV
  const csv: string[] = ["section,key,clicks,impressions,ctr,position"];
  for (const r of topQueriesByClicks) {
    csv.push(
      [
        "query_by_clicks",
        csvEscape(r.keys[0]),
        r.clicks,
        r.impressions,
        r.ctr,
        r.position,
      ].join(","),
    );
  }
  for (const r of topQueriesByImpressions) {
    csv.push(
      [
        "query_by_impressions",
        csvEscape(r.keys[0]),
        r.clicks,
        r.impressions,
        r.ctr,
        r.position,
      ].join(","),
    );
  }
  for (const r of topPagesByClicks) {
    csv.push(
      [
        "page_by_clicks",
        csvEscape(r.keys[0]),
        r.clicks,
        r.impressions,
        r.ctr,
        r.position,
      ].join(","),
    );
  }
  await fs.writeFile(
    path.join(MONITOR_DIR, `gsc-snapshot-${today()}.csv`),
    csv.join("\n") + "\n",
    "utf8",
  );

  // JSON
  await fs.writeFile(
    path.join(MONITOR_DIR, `gsc-snapshot-${today()}.json`),
    JSON.stringify(
      {
        date: today(),
        range,
        topQueriesByClicks,
        topPagesByClicks,
        topQueriesByImpressions,
      },
      null,
      2,
    ),
    "utf8",
  );

  const md = render(
    topQueriesByClicks,
    topPagesByClicks,
    topQueriesByImpressions,
    range,
  );
  const full = await writeReport(`gsc-snapshot-${today()}.md`, md);
  console.log(`Wrote ${path.relative(process.cwd(), full)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
