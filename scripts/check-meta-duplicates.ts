/**
 * scripts/check-meta-duplicates.ts
 *
 * For every URL in sitemap.xml:
 *   - Fetch HTML
 *   - Extract <title>, <meta name="description">, og:title, og:description
 *   - Flag exact duplicates (Google merges near-duplicate titles, killing CTR)
 *   - Flag overly long / short titles (target 50-60 chars) and descriptions
 *     (target 130-160 chars)
 *   - Flag pages missing either meta entirely
 *
 * Output: seo-deliverables/monitoring/meta-duplicates-<date>.md
 *
 * Run: npm run monitor:meta-dupes
 */

import path from "node:path";
import {
  fetchSitemap,
  pMap,
  timedFetch,
  today,
  writeReport,
} from "./_lib.ts";

interface MetaRow {
  url: string;
  title: string | null;
  description: string | null;
  og_title: string | null;
  og_description: string | null;
  titleLen: number;
  descLen: number;
  flags: string[];
}

const TITLE_MIN = 30;
const TITLE_MAX = 65;
const DESC_MIN = 110;
const DESC_MAX = 165;

function extractTag(html: string): string | null {
  const m = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return m ? decodeEntities(m[1].trim()) : null;
}

function extractMeta(html: string, name: string): string | null {
  // name or property variants. Tolerate attribute order.
  const reA = new RegExp(
    `<meta[^>]+(?:name|property)=["']${name}["'][^>]*\\bcontent=["']([^"']*)["']`,
    "i",
  );
  const reB = new RegExp(
    `<meta[^>]+content=["']([^"']*)["'][^>]*(?:name|property)=["']${name}["']`,
    "i",
  );
  return decodeEntities(html.match(reA)?.[1] ?? html.match(reB)?.[1] ?? "") || null;
}

function decodeEntities(s: string): string {
  if (!s) return s;
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'");
}

async function scrape(url: string): Promise<MetaRow> {
  const r = await timedFetch(url, {
    headers: { "user-agent": "QuantLabSEOMonitor/1.0 (meta-dupes)" },
  });
  if (!r.body) {
    return {
      url,
      title: null,
      description: null,
      og_title: null,
      og_description: null,
      titleLen: 0,
      descLen: 0,
      flags: [`fetch-error: ${r.error ?? r.status}`],
    };
  }
  const html = r.body;
  const title = extractTag(html);
  const description = extractMeta(html, "description");
  const og_title = extractMeta(html, "og:title");
  const og_description = extractMeta(html, "og:description");
  const flags: string[] = [];
  if (!title) flags.push("missing-title");
  if (!description) flags.push("missing-description");
  if (title && title.length < TITLE_MIN) flags.push(`title-short(${title.length})`);
  if (title && title.length > TITLE_MAX) flags.push(`title-long(${title.length})`);
  if (description && description.length < DESC_MIN) {
    flags.push(`desc-short(${description.length})`);
  }
  if (description && description.length > DESC_MAX) {
    flags.push(`desc-long(${description.length})`);
  }
  if (title && og_title && title !== og_title) flags.push("title!=og:title");
  if (description && og_description && description !== og_description) {
    flags.push("desc!=og:description");
  }
  return {
    url,
    title,
    description,
    og_title,
    og_description,
    titleLen: title?.length ?? 0,
    descLen: description?.length ?? 0,
    flags,
  };
}

function findDupes(
  rows: MetaRow[],
  pick: (r: MetaRow) => string | null,
): Array<{ value: string; urls: string[] }> {
  const map = new Map<string, string[]>();
  for (const r of rows) {
    const v = pick(r);
    if (!v) continue;
    const key = v.trim().toLowerCase();
    const arr = map.get(key) ?? [];
    arr.push(r.url);
    map.set(key, arr);
  }
  const dupes: Array<{ value: string; urls: string[] }> = [];
  for (const [k, urls] of map) {
    if (urls.length > 1) dupes.push({ value: k, urls });
  }
  return dupes.sort((a, b) => b.urls.length - a.urls.length);
}

function render(rows: MetaRow[]): string {
  const titleDupes = findDupes(rows, (r) => r.title);
  const descDupes = findDupes(rows, (r) => r.description);
  const flagged = rows.filter((r) => r.flags.length > 0);
  const lines: string[] = [];
  lines.push(`# Meta Title/Description Duplicates — ${today()}`);
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`- URLs scanned: ${rows.length}`);
  lines.push(`- Duplicate titles: ${titleDupes.length} groups`);
  lines.push(`- Duplicate descriptions: ${descDupes.length} groups`);
  lines.push(`- Pages with at least one flag: ${flagged.length}`);
  lines.push("");
  lines.push("### Length targets");
  lines.push("");
  lines.push(`- Title: ${TITLE_MIN}-${TITLE_MAX} chars (Google truncates above ~60)`);
  lines.push(`- Description: ${DESC_MIN}-${DESC_MAX} chars (Google truncates above ~160)`);
  lines.push("");
  lines.push("## Duplicate titles");
  lines.push("");
  if (titleDupes.length === 0) {
    lines.push("None.");
  } else {
    for (const d of titleDupes) {
      lines.push(`### "${d.value}" — used ${d.urls.length}x`);
      lines.push("");
      for (const u of d.urls) lines.push(`- ${u}`);
      lines.push("");
    }
  }
  lines.push("## Duplicate descriptions");
  lines.push("");
  if (descDupes.length === 0) {
    lines.push("None.");
  } else {
    for (const d of descDupes) {
      lines.push(`### "${d.value.slice(0, 100)}..." — used ${d.urls.length}x`);
      lines.push("");
      for (const u of d.urls) lines.push(`- ${u}`);
      lines.push("");
    }
  }
  lines.push("## Flagged pages (length / mismatch / missing)");
  lines.push("");
  if (flagged.length === 0) {
    lines.push("None.");
  } else {
    lines.push("| URL | Title len | Desc len | Flags |");
    lines.push("|---|---:|---:|---|");
    for (const r of flagged) {
      lines.push(
        `| ${r.url} | ${r.titleLen} | ${r.descLen} | ${r.flags.join(", ")} |`,
      );
    }
  }
  lines.push("");
  lines.push("## All meta");
  lines.push("");
  lines.push("| URL | Title | Description |");
  lines.push("|---|---|---|");
  for (const r of rows.sort((a, b) => a.url.localeCompare(b.url))) {
    lines.push(
      `| ${r.url} | ${(r.title ?? "—").replace(/\|/g, "\\|")} | ${(
        r.description ?? "—"
      ).replace(/\|/g, "\\|")} |`,
    );
  }
  lines.push("");
  return lines.join("\n") + "\n";
}

async function main(): Promise<void> {
  const entries = await fetchSitemap();
  const rows = await pMap(entries, 8, (e) => scrape(e.url));
  const out = render(rows);
  const full = await writeReport(`meta-duplicates-${today()}.md`, out);
  console.log(`Wrote ${path.relative(process.cwd(), full)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
