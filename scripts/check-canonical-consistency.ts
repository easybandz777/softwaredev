/**
 * scripts/check-canonical-consistency.ts
 *
 * For every URL in sitemap.xml:
 *   - Fetch the page HTML
 *   - Extract <link rel="canonical">
 *   - Verify it resolves to an absolute URL on the same origin
 *   - Verify it points to the page being requested (self-referential) OR
 *     to an explicitly approved target (configured via map below)
 *   - Flag missing canonicals, off-domain canonicals, chain canonicals, etc.
 *
 * Output: seo-deliverables/monitoring/canonical-check-<date>.md
 *
 * Run: npm run monitor:canonical
 */

import path from "node:path";
import {
  SITE,
  fetchSitemap,
  pMap,
  timedFetch,
  today,
  writeReport,
} from "./_lib.ts";

interface CanonicalRow {
  url: string;
  canonical: string | null;
  status: "ok" | "missing" | "mismatch" | "off-domain" | "relative-bad" | "fetch-error";
  detail?: string;
  expected?: string;
}

/**
 * Explicit canonical overrides — if a page intentionally canonicals to a
 * different URL (e.g., a paginated /blog/page/2 → /blog), add the source URL
 * (as it appears in sitemap.xml) keyed to the expected canonical target here.
 *
 * Keep this short. Default is self-referential.
 */
const EXPECTED_CANONICALS: Record<string, string> = {
  // example: `${SITE}/blog/page/2`: `${SITE}/blog`,
};

function extractCanonical(html: string): string | null {
  // Tolerate attribute order: rel before href, or href before rel.
  const re1 =
    /<link\b[^>]*\brel\s*=\s*["']canonical["'][^>]*\bhref\s*=\s*["']([^"']+)["'][^>]*>/i;
  const re2 =
    /<link\b[^>]*\bhref\s*=\s*["']([^"']+)["'][^>]*\brel\s*=\s*["']canonical["'][^>]*>/i;
  return html.match(re1)?.[1] ?? html.match(re2)?.[1] ?? null;
}

function normalize(u: string): string {
  return u.replace(/\/$/, "").replace(/#.*$/, "").replace(/\?.*$/, "");
}

async function checkUrl(url: string): Promise<CanonicalRow> {
  const r = await timedFetch(url, {
    headers: { "user-agent": "QuantLabSEOMonitor/1.0 (canonical-check)" },
  });
  if (!r.body) {
    return {
      url,
      canonical: null,
      status: "fetch-error",
      detail: r.error ?? `HTTP ${r.status}`,
    };
  }
  const cano = extractCanonical(r.body);
  if (!cano) {
    return {
      url,
      canonical: null,
      status: "missing",
      detail: "<link rel=\"canonical\"> not found in HTML head",
    };
  }
  // Resolve relative → absolute
  let resolved: string;
  if (cano.startsWith("/")) {
    return {
      url,
      canonical: cano,
      status: "relative-bad",
      detail:
        "Canonical is relative (Google accepts it but rich-result tooling and some crawlers do not). Use absolute https URL.",
    };
  }
  try {
    resolved = new URL(cano, url).toString();
  } catch {
    return {
      url,
      canonical: cano,
      status: "mismatch",
      detail: "Canonical href is not a valid URL",
    };
  }
  // Off-domain check
  let host: string;
  try {
    host = new URL(resolved).hostname.replace(/^www\./, "");
  } catch {
    host = "";
  }
  const expectedHost = SITE.replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/$/, "");
  if (host !== expectedHost) {
    return {
      url,
      canonical: resolved,
      status: "off-domain",
      detail: `Canonical points to ${host}, expected ${expectedHost}`,
    };
  }
  const expected = EXPECTED_CANONICALS[url] ?? url;
  if (normalize(resolved) !== normalize(expected)) {
    return {
      url,
      canonical: resolved,
      status: "mismatch",
      detail: `Page advertises canonical ${resolved}, expected ${expected}`,
      expected,
    };
  }
  return { url, canonical: resolved, status: "ok" };
}

function render(rows: CanonicalRow[]): string {
  const ok = rows.filter((r) => r.status === "ok").length;
  const missing = rows.filter((r) => r.status === "missing");
  const mismatch = rows.filter((r) => r.status === "mismatch");
  const off = rows.filter((r) => r.status === "off-domain");
  const rel = rows.filter((r) => r.status === "relative-bad");
  const err = rows.filter((r) => r.status === "fetch-error");
  const lines: string[] = [];
  lines.push(`# Canonical Consistency — ${today()}`);
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`- URLs checked: ${rows.length}`);
  lines.push(`- OK (self-referential or expected target): ${ok}`);
  lines.push(`- Missing canonical: ${missing.length}`);
  lines.push(`- Mismatched target: ${mismatch.length}`);
  lines.push(`- Off-domain canonical: ${off.length}`);
  lines.push(`- Relative canonical (should be absolute): ${rel.length}`);
  lines.push(`- Fetch errors: ${err.length}`);
  lines.push("");
  const sections: [string, CanonicalRow[]][] = [
    ["Missing", missing],
    ["Mismatched", mismatch],
    ["Off-domain", off],
    ["Relative", rel],
    ["Fetch errors", err],
  ];
  for (const [label, list] of sections) {
    lines.push(`## ${label}`);
    lines.push("");
    if (list.length === 0) {
      lines.push("None.");
      lines.push("");
      continue;
    }
    lines.push("| URL | Canonical | Detail |");
    lines.push("|---|---|---|");
    for (const row of list) {
      lines.push(
        `| ${row.url} | ${row.canonical ?? "—"} | ${(row.detail ?? "").replace(
          /\|/g,
          "\\|",
        )} |`,
      );
    }
    lines.push("");
  }
  lines.push("## All canonicals");
  lines.push("");
  lines.push("| URL | Canonical | Status |");
  lines.push("|---|---|---|");
  for (const r of rows) {
    lines.push(`| ${r.url} | ${r.canonical ?? "—"} | ${r.status} |`);
  }
  lines.push("");
  return lines.join("\n") + "\n";
}

async function main(): Promise<void> {
  const entries = await fetchSitemap();
  const rows = await pMap(entries, 8, (e) => checkUrl(e.url));
  const out = render(rows);
  const full = await writeReport(`canonical-check-${today()}.md`, out);
  console.log(`Wrote ${path.relative(process.cwd(), full)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
