import { promises as fs } from "node:fs";
import path from "node:path";
import {
  MONITOR_DIR,
  ensureDir,
  fetchSitemap,
  today,
  writeReport,
  type SitemapEntry,
} from "./_lib.ts";

interface Snapshot {
  date: string;
  entries: SitemapEntry[];
}

async function loadPreviousSnapshot(): Promise<Snapshot | null> {
  await ensureDir(MONITOR_DIR);
  const files = await fs.readdir(MONITOR_DIR);
  const snaps = files
    .filter((f) => /^sitemap-snapshot-\d{4}-\d{2}-\d{2}\.json$/.test(f))
    .sort();
  const todayFile = `sitemap-snapshot-${today()}.json`;
  const previous = snaps.filter((f) => f !== todayFile).pop();
  if (!previous) return null;
  const raw = await fs.readFile(path.join(MONITOR_DIR, previous), "utf8");
  return JSON.parse(raw) as Snapshot;
}

function render(
  current: Snapshot,
  prev: Snapshot | null,
): string {
  const lines: string[] = [];
  lines.push(`# Sitemap Diff — ${current.date}`);
  lines.push("");
  lines.push(`- Current URL count: ${current.entries.length}`);
  if (!prev) {
    lines.push("- No previous snapshot found; this becomes the baseline.");
    lines.push("");
    return lines.join("\n") + "\n";
  }
  lines.push(`- Previous snapshot date: ${prev.date}`);
  lines.push(`- Previous URL count: ${prev.entries.length}`);
  const curMap = new Map(current.entries.map((e) => [e.url, e]));
  const prevMap = new Map(prev.entries.map((e) => [e.url, e]));
  const added = current.entries.filter((e) => !prevMap.has(e.url));
  const removed = prev.entries.filter((e) => !curMap.has(e.url));
  const changed: { url: string; from?: string; to?: string }[] = [];
  for (const e of current.entries) {
    const p = prevMap.get(e.url);
    if (!p) continue;
    if ((p.changefreq ?? "") !== (e.changefreq ?? "")) {
      changed.push({
        url: e.url,
        from: p.changefreq,
        to: e.changefreq,
      });
    }
  }
  lines.push(`- Added: ${added.length}`);
  lines.push(`- Removed: ${removed.length}`);
  lines.push(`- Changed changefreq: ${changed.length}`);
  lines.push("");
  lines.push("## Added");
  lines.push("");
  if (added.length === 0) lines.push("None.");
  else for (const e of added) lines.push(`- ${e.url}`);
  lines.push("");
  lines.push("## Removed");
  lines.push("");
  if (removed.length === 0) lines.push("None.");
  else for (const e of removed) lines.push(`- ${e.url}`);
  lines.push("");
  lines.push("## Changefreq changes");
  lines.push("");
  if (changed.length === 0) lines.push("None.");
  else {
    lines.push("| URL | From | To |");
    lines.push("|---|---|---|");
    for (const c of changed) {
      lines.push(`| ${c.url} | ${c.from ?? ""} | ${c.to ?? ""} |`);
    }
  }
  lines.push("");
  return lines.join("\n") + "\n";
}

async function main(): Promise<void> {
  const entries = await fetchSitemap();
  const current: Snapshot = { date: today(), entries };
  await ensureDir(MONITOR_DIR);
  const snapPath = path.join(MONITOR_DIR, `sitemap-snapshot-${today()}.json`);
  const prev = await loadPreviousSnapshot();
  await fs.writeFile(snapPath, JSON.stringify(current, null, 2), "utf8");
  const out = render(current, prev);
  const full = await writeReport(`sitemap-diff-${today()}.md`, out);
  console.log(`Wrote ${path.relative(process.cwd(), full)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
