import { promises as fs } from "node:fs";
import path from "node:path";
import { today, writeReport } from "./_lib.ts";

interface PageRecord {
  file: string;
  route: string;
  datePublished?: string;
  dateModified?: string;
  ageDays: number | null;
  staleDays: number | null;
  hasJsonLd: boolean;
}

const APP_DIR = path.resolve(
  path.dirname(new URL(import.meta.url).pathname),
  "..",
  "src",
  "app",
);

async function walk(dir: string): Promise<string[]> {
  const out: string[] = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === "api" || e.name.startsWith("_")) continue;
      out.push(...(await walk(full)));
    } else if (e.isFile() && e.name === "page.tsx") {
      out.push(full);
    }
  }
  return out;
}

function fileToRoute(file: string): string {
  const rel = path.relative(APP_DIR, file).replace(/\\/g, "/");
  let route = "/" + rel.replace(/\/page\.tsx$/, "");
  route = route.replace(/\/$/, "");
  if (route === "") route = "/";
  return route;
}

function extractDate(content: string, key: string): string | undefined {
  const re1 = new RegExp(`"${key}"\\s*:\\s*"([^"]+)"`);
  const re2 = new RegExp(`${key}\\s*:\\s*"([^"]+)"`);
  return content.match(re1)?.[1] ?? content.match(re2)?.[1];
}

function daysBetween(iso: string | undefined): number | null {
  if (!iso) return null;
  const t = Date.parse(iso);
  if (Number.isNaN(t)) return null;
  return Math.floor((Date.now() - t) / 86_400_000);
}

function render(records: PageRecord[]): string {
  const stale = records
    .filter((r) => r.staleDays !== null && r.staleDays > 90)
    .sort((a, b) => (b.staleDays ?? 0) - (a.staleDays ?? 0));
  const missingJsonLd = records.filter((r) => !r.hasJsonLd);
  const missingModified = records.filter(
    (r) => r.hasJsonLd && !r.dateModified,
  );
  const lines: string[] = [];
  lines.push(`# Content Freshness Audit — ${today()}`);
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`- Pages scanned: ${records.length}`);
  lines.push(`- Pages with JSON-LD dates: ${records.length - missingJsonLd.length}`);
  lines.push(`- Pages missing dateModified: ${missingModified.length}`);
  lines.push(`- Pages older than 90 days (stale): ${stale.length}`);
  lines.push("");
  lines.push("## Stale (>90 days since last modification)");
  lines.push("");
  if (stale.length === 0) {
    lines.push("None.");
  } else {
    lines.push("| Route | dateModified | Days stale |");
    lines.push("|---|---|---:|");
    for (const r of stale) {
      lines.push(
        `| ${r.route} | ${r.dateModified ?? r.datePublished ?? ""} | ${r.staleDays ?? ""} |`,
      );
    }
  }
  lines.push("");
  lines.push("## Missing dateModified in JSON-LD");
  lines.push("");
  if (missingModified.length === 0) lines.push("None.");
  else for (const r of missingModified) lines.push(`- ${r.route} (${path.relative(process.cwd(), r.file)})`);
  lines.push("");
  lines.push("## No JSON-LD dates found");
  lines.push("");
  if (missingJsonLd.length === 0) lines.push("None.");
  else for (const r of missingJsonLd) lines.push(`- ${r.route}`);
  lines.push("");
  lines.push("## All scanned pages");
  lines.push("");
  lines.push("| Route | datePublished | dateModified | Days since pub | Days since mod |");
  lines.push("|---|---|---|---:|---:|");
  for (const r of records.sort((a, b) => a.route.localeCompare(b.route))) {
    lines.push(
      `| ${r.route} | ${r.dateModified ? r.datePublished ?? "" : r.datePublished ?? ""} | ${r.dateModified ?? ""} | ${r.ageDays ?? ""} | ${r.staleDays ?? ""} |`,
    );
  }
  lines.push("");
  return lines.join("\n") + "\n";
}

async function main(): Promise<void> {
  const files = await walk(APP_DIR);
  const records: PageRecord[] = [];
  for (const file of files) {
    const content = await fs.readFile(file, "utf8");
    const datePublished = extractDate(content, "datePublished");
    const dateModified = extractDate(content, "dateModified");
    const hasJsonLd = Boolean(datePublished || dateModified);
    const ageDays = daysBetween(datePublished);
    const staleDays = daysBetween(dateModified ?? datePublished);
    records.push({
      file,
      route: fileToRoute(file),
      datePublished,
      dateModified,
      ageDays,
      staleDays,
      hasJsonLd,
    });
  }
  const out = render(records);
  const full = await writeReport(`freshness-audit-${today()}.md`, out);
  console.log(`Wrote ${path.relative(process.cwd(), full)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
