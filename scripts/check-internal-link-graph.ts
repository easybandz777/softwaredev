/**
 * scripts/check-internal-link-graph.ts
 *
 * Builds the internal link graph of every URL in the sitemap, then surfaces:
 *   - Orphan pages: zero inbound internal links from any other page
 *   - Under-linked pages: <3 inbound internal links (rule of thumb)
 *   - Over-linked pages: >200 inbound (cluster magnet — usually fine but worth noting)
 *   - Broken internal links: <a href> targets that aren't in the sitemap and 404
 *   - Internal links to non-canonical URLs (trailing slash, query strings, etc.)
 *
 * Outputs:
 *   - seo-deliverables/monitoring/link-graph-<date>.md (human)
 *   - seo-deliverables/monitoring/link-graph-<date>.json (raw graph, useful for charting later)
 *
 * Run: npm run monitor:link-graph
 */

import { promises as fs } from "node:fs";
import path from "node:path";
import {
  MONITOR_DIR,
  SITE,
  ensureDir,
  fetchSitemap,
  pMap,
  timedFetch,
  today,
  writeReport,
} from "./_lib.ts";

interface PageInfo {
  url: string;
  outbound: string[];
  inbound: string[];
  fetched: boolean;
}

interface BrokenInternal {
  source: string;
  target: string;
  status: number;
  error?: string;
}

const UNDER_LINKED_THRESHOLD = 3;
const OVER_LINKED_THRESHOLD = 200;

function extractInternalLinks(html: string, sourceUrl: string): string[] {
  const found = new Set<string>();
  const re = /<a\s[^>]*href\s*=\s*["']([^"']+)["']/gi;
  for (const m of html.matchAll(re)) {
    let href = m[1].trim();
    if (!href) continue;
    if (href.startsWith("#")) continue;
    if (href.startsWith("mailto:") || href.startsWith("tel:")) continue;
    if (href.startsWith("javascript:")) continue;
    if (href.startsWith("//")) href = `https:${href}`;
    let resolved: string;
    try {
      resolved = new URL(href, sourceUrl).toString();
    } catch {
      continue;
    }
    if (!resolved.startsWith(SITE)) continue;
    // Normalize: drop hash, but keep query (some pages legitimately differ by query)
    const noHash = resolved.split("#")[0];
    found.add(noHash);
  }
  return [...found];
}

function normalize(u: string): string {
  // For graph comparison: strip trailing slash + drop empty queries
  let n = u.replace(/\/$/, "");
  n = n.replace(/\?$/, "");
  return n;
}

function render(
  pages: PageInfo[],
  broken: BrokenInternal[],
  nonCanonical: Array<{ source: string; target: string; normalized: string }>,
): string {
  const sitemapSet = new Set(pages.map((p) => normalize(p.url)));
  const orphans = pages.filter((p) => p.inbound.length === 0 && normalize(p.url) !== normalize(SITE));
  const under = pages.filter(
    (p) =>
      p.inbound.length > 0 &&
      p.inbound.length < UNDER_LINKED_THRESHOLD &&
      normalize(p.url) !== normalize(SITE),
  );
  const over = pages.filter((p) => p.inbound.length >= OVER_LINKED_THRESHOLD);
  const totalEdges = pages.reduce((s, p) => s + p.outbound.length, 0);
  const avgOut = totalEdges / Math.max(1, pages.length);
  const lines: string[] = [];
  lines.push(`# Internal Link Graph — ${today()}`);
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`- Pages in sitemap: ${pages.length}`);
  lines.push(`- Pages successfully fetched: ${pages.filter((p) => p.fetched).length}`);
  lines.push(`- Total internal-link edges: ${totalEdges}`);
  lines.push(`- Average outbound internal links per page: ${avgOut.toFixed(1)}`);
  lines.push(`- Orphan pages (zero inbound, excl. homepage): ${orphans.length}`);
  lines.push(`- Under-linked (<${UNDER_LINKED_THRESHOLD} inbound): ${under.length}`);
  lines.push(`- Over-linked (≥${OVER_LINKED_THRESHOLD} inbound): ${over.length}`);
  lines.push(`- Broken internal links: ${broken.length}`);
  lines.push(`- Internal links to non-canonical URL forms: ${nonCanonical.length}`);
  lines.push("");
  lines.push("## Orphan pages (zero inbound internal links)");
  lines.push("");
  if (orphans.length === 0) {
    lines.push("None.");
  } else {
    lines.push("These pages exist in sitemap.xml but no other page links to them.");
    lines.push("They depend entirely on external links + sitemap crawl for discovery.");
    lines.push("");
    for (const p of orphans.sort((a, b) => a.url.localeCompare(b.url))) {
      lines.push(`- ${p.url}`);
    }
  }
  lines.push("");
  lines.push(`## Under-linked pages (<${UNDER_LINKED_THRESHOLD} inbound)`);
  lines.push("");
  if (under.length === 0) {
    lines.push("None.");
  } else {
    lines.push("| URL | Inbound count |");
    lines.push("|---|---:|");
    for (const p of under.sort((a, b) => a.inbound.length - b.inbound.length)) {
      lines.push(`| ${p.url} | ${p.inbound.length} |`);
    }
  }
  lines.push("");
  lines.push(`## Most-linked pages (top 20 by inbound)`);
  lines.push("");
  lines.push("| URL | Inbound count |");
  lines.push("|---|---:|");
  const top = [...pages].sort((a, b) => b.inbound.length - a.inbound.length).slice(0, 20);
  for (const p of top) {
    lines.push(`| ${p.url} | ${p.inbound.length} |`);
  }
  lines.push("");
  lines.push("## Broken internal links");
  lines.push("");
  if (broken.length === 0) {
    lines.push("None.");
  } else {
    lines.push("| Source page | Broken target | Status | Error |");
    lines.push("|---|---|---:|---|");
    for (const b of broken) {
      lines.push(
        `| ${b.source} | ${b.target} | ${b.status} | ${(b.error ?? "").replace(/\|/g, "\\|")} |`,
      );
    }
  }
  lines.push("");
  lines.push("## Internal links pointing to non-canonical URL forms");
  lines.push("");
  if (nonCanonical.length === 0) {
    lines.push("None.");
  } else {
    lines.push("Target normalizes to a sitemap URL — internal links should use the canonical form.");
    lines.push("");
    lines.push("| Source | Linked-as | Canonical form |");
    lines.push("|---|---|---|");
    for (const r of nonCanonical) {
      lines.push(`| ${r.source} | ${r.target} | ${r.normalized} |`);
    }
  }
  lines.push("");
  lines.push("## Outbound count distribution");
  lines.push("");
  lines.push("| Outbound bucket | Count |");
  lines.push("|---|---:|");
  const buckets = { "0": 0, "1-5": 0, "6-15": 0, "16-30": 0, "31-60": 0, "61+": 0 };
  for (const p of pages) {
    const n = p.outbound.length;
    if (n === 0) buckets["0"]++;
    else if (n <= 5) buckets["1-5"]++;
    else if (n <= 15) buckets["6-15"]++;
    else if (n <= 30) buckets["16-30"]++;
    else if (n <= 60) buckets["31-60"]++;
    else buckets["61+"]++;
  }
  for (const [k, v] of Object.entries(buckets)) lines.push(`| ${k} | ${v} |`);
  void sitemapSet;
  lines.push("");
  return lines.join("\n") + "\n";
}

async function main(): Promise<void> {
  await ensureDir(MONITOR_DIR);
  const entries = await fetchSitemap();
  const sitemapNorm = new Set(entries.map((e) => normalize(e.url)));
  const pages: PageInfo[] = entries.map((e) => ({
    url: e.url,
    outbound: [],
    inbound: [],
    fetched: false,
  }));
  const byUrl = new Map(pages.map((p) => [p.url, p]));

  // Phase 1: fetch every page in parallel
  await pMap(pages, 8, async (p) => {
    const r = await timedFetch(p.url, {
      headers: { "user-agent": "QuantLabSEOMonitor/1.0 (link-graph)" },
    });
    if (r.body) {
      p.fetched = true;
      p.outbound = extractInternalLinks(r.body, p.url);
    }
  });

  // Phase 2: tally inbound counts + flag non-canonical link forms
  const nonCanonical: Array<{ source: string; target: string; normalized: string }> = [];
  for (const p of pages) {
    for (const target of p.outbound) {
      const t = byUrl.get(target);
      if (t) {
        t.inbound.push(p.url);
      } else {
        // not exact sitemap match — check normalized form
        const norm = normalize(target);
        if (sitemapNorm.has(norm)) {
          // it's the same page, just a different form (trailing slash, etc.)
          const canonical = [...byUrl.keys()].find((k) => normalize(k) === norm);
          if (canonical) {
            byUrl.get(canonical)!.inbound.push(p.url);
            nonCanonical.push({
              source: p.url,
              target,
              normalized: canonical,
            });
          }
        }
      }
    }
  }

  // Phase 3: check status of every internal link target NOT in the sitemap
  const externalToSitemap = new Set<string>();
  for (const p of pages) {
    for (const target of p.outbound) {
      if (!byUrl.has(target) && !sitemapNorm.has(normalize(target))) {
        externalToSitemap.add(target);
      }
    }
  }
  const targetList = [...externalToSitemap];
  const brokenChecks = await pMap(targetList, 8, async (u) => {
    const r = await timedFetch(u, {
      method: "GET",
      headers: { "user-agent": "QuantLabSEOMonitor/1.0 (link-graph-status)" },
    });
    return { url: u, status: r.status, error: r.error };
  });
  const brokenByTarget = new Map<string, { status: number; error?: string }>();
  for (const c of brokenChecks) {
    if (c.status >= 400 || c.status === 0) {
      brokenByTarget.set(c.url, { status: c.status, error: c.error });
    }
  }
  const broken: BrokenInternal[] = [];
  const seenPair = new Set<string>();
  for (const p of pages) {
    for (const target of p.outbound) {
      const info = brokenByTarget.get(target);
      if (!info) continue;
      const key = `${p.url}->${target}`;
      if (seenPair.has(key)) continue;
      seenPair.add(key);
      broken.push({ source: p.url, target, status: info.status, error: info.error });
    }
  }

  // Serialize graph
  await fs.writeFile(
    path.join(MONITOR_DIR, `link-graph-${today()}.json`),
    JSON.stringify(
      pages.map((p) => ({
        url: p.url,
        inbound_count: p.inbound.length,
        outbound_count: p.outbound.length,
        outbound: p.outbound,
        inbound: p.inbound,
      })),
      null,
      2,
    ),
    "utf8",
  );

  const out = render(pages, broken, nonCanonical);
  const full = await writeReport(`link-graph-${today()}.md`, out);
  console.log(`Wrote ${path.relative(process.cwd(), full)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
