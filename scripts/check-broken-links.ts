import path from "node:path";
import {
  SITE,
  fetchSitemap,
  pMap,
  timedFetch,
  today,
  writeReport,
} from "./_lib.ts";

interface LinkCheck {
  source: string;
  target: string;
  status: number;
  ttfb: number;
  error?: string;
}

function extractLinks(html: string, sourceUrl: string): string[] {
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
    const noHash = resolved.split("#")[0];
    found.add(noHash);
  }
  return [...found];
}

function render(results: LinkCheck[]): string {
  const broken = results.filter((r) => r.status >= 400 || r.status === 0);
  const redirects = results.filter((r) => r.status >= 300 && r.status < 400);
  const ok = results.filter((r) => r.status >= 200 && r.status < 300);
  const lines: string[] = [];
  lines.push(`# Broken Links Audit — ${today()}`);
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`- Total links checked: ${results.length}`);
  lines.push(`- OK (2xx): ${ok.length}`);
  lines.push(`- Redirects (3xx): ${redirects.length}`);
  lines.push(`- Broken (4xx/5xx/network): ${broken.length}`);
  lines.push("");
  lines.push("## Broken links");
  lines.push("");
  if (broken.length === 0) {
    lines.push("None.");
  } else {
    lines.push("| Source | Target | Status | Error |");
    lines.push("|---|---|---|---|");
    for (const r of broken) {
      lines.push(
        `| ${r.source} | ${r.target} | ${r.status} | ${(r.error ?? "").replace(/\|/g, "\\|")} |`,
      );
    }
  }
  lines.push("");
  lines.push("## Redirects");
  lines.push("");
  if (redirects.length === 0) {
    lines.push("None.");
  } else {
    lines.push("| Source | Target | Status |");
    lines.push("|---|---|---|");
    for (const r of redirects) {
      lines.push(`| ${r.source} | ${r.target} | ${r.status} |`);
    }
  }
  lines.push("");
  return lines.join("\n") + "\n";
}

async function main(): Promise<void> {
  const entries = await fetchSitemap();
  const pages = entries.map((e) => e.url);
  const pageHtml = new Map<string, string>();
  await pMap(pages, 10, async (url) => {
    const r = await timedFetch(url, {
      headers: { "user-agent": "QuantLabSEOMonitor/1.0 (broken-link-check)" },
    });
    if (r.body) pageHtml.set(url, r.body);
  });
  const pairs: { source: string; target: string }[] = [];
  const seen = new Set<string>();
  for (const [source, html] of pageHtml) {
    const links = extractLinks(html, source);
    for (const target of links) {
      const key = `${source}->${target}`;
      if (seen.has(key)) continue;
      seen.add(key);
      pairs.push({ source, target });
    }
  }
  for (const url of pages) {
    const key = `__sitemap__->${url}`;
    if (!seen.has(key)) {
      seen.add(key);
      pairs.push({ source: "(sitemap)", target: url });
    }
  }
  const results = await pMap(pairs, 12, async ({ source, target }) => {
    const r = await timedFetch(target, {
      method: "GET",
      headers: { "user-agent": "QuantLabSEOMonitor/1.0 (broken-link-check)" },
    });
    return {
      source,
      target,
      status: r.status,
      ttfb: r.ttfb,
      error: r.error,
    } as LinkCheck;
  });
  const out = render(results);
  const full = await writeReport(`broken-links-${today()}.md`, out);
  console.log(`Wrote ${path.relative(process.cwd(), full)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
