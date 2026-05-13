import { promises as fs } from "node:fs";
import path from "node:path";

export const SITE = "https://quantlabusa.dev";
export const SITEMAP_URL = `${SITE}/sitemap.xml`;
export const MONITOR_DIR = path.resolve(
  path.dirname(new URL(import.meta.url).pathname),
  "..",
  "seo-deliverables",
  "monitoring",
);

export function today(): string {
  return new Date().toISOString().slice(0, 10);
}

export async function ensureDir(dir: string): Promise<void> {
  await fs.mkdir(dir, { recursive: true });
}

export async function writeReport(
  filename: string,
  body: string,
): Promise<string> {
  await ensureDir(MONITOR_DIR);
  const full = path.join(MONITOR_DIR, filename);
  await fs.writeFile(full, body, "utf8");
  return full;
}

export async function readIfExists(file: string): Promise<string | null> {
  try {
    return await fs.readFile(file, "utf8");
  } catch {
    return null;
  }
}

export interface SitemapEntry {
  url: string;
  lastmod?: string;
  changefreq?: string;
  priority?: string;
}

export async function fetchSitemap(
  sitemapUrl: string = SITEMAP_URL,
): Promise<SitemapEntry[]> {
  const res = await fetch(sitemapUrl, {
    headers: { "User-Agent": "QuantLabSEOMonitor/1.0" },
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch sitemap ${sitemapUrl}: ${res.status}`);
  }
  const xml = await res.text();
  return parseSitemap(xml);
}

export function parseSitemap(xml: string): SitemapEntry[] {
  const urls: SitemapEntry[] = [];
  const blocks = xml.matchAll(/<url>([\s\S]*?)<\/url>/g);
  for (const m of blocks) {
    const block = m[1];
    const url = pluck(block, "loc");
    if (!url) continue;
    urls.push({
      url,
      lastmod: pluck(block, "lastmod"),
      changefreq: pluck(block, "changefreq"),
      priority: pluck(block, "priority"),
    });
  }
  return urls;
}

function pluck(block: string, tag: string): string | undefined {
  const m = block.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`));
  return m ? m[1].trim() : undefined;
}

export async function pMap<T, R>(
  items: T[],
  concurrency: number,
  worker: (item: T, idx: number) => Promise<R>,
): Promise<R[]> {
  const results: R[] = new Array(items.length);
  let idx = 0;
  async function next(): Promise<void> {
    while (true) {
      const i = idx++;
      if (i >= items.length) return;
      results[i] = await worker(items[i], i);
    }
  }
  const runners = Array.from(
    { length: Math.min(concurrency, items.length) },
    () => next(),
  );
  await Promise.all(runners);
  return results;
}

export async function timedFetch(
  url: string,
  init?: RequestInit,
): Promise<{ status: number; ttfb: number; body?: string; error?: string }> {
  const start = Date.now();
  try {
    const res = await fetch(url, init);
    const ttfb = Date.now() - start;
    let body: string | undefined;
    if (res.headers.get("content-type")?.includes("text")) {
      body = await res.text();
    }
    return { status: res.status, ttfb, body };
  } catch (err) {
    return {
      status: 0,
      ttfb: Date.now() - start,
      error: err instanceof Error ? err.message : String(err),
    };
  }
}

export function fmtTable(rows: (string | number)[][]): string {
  if (rows.length === 0) return "";
  const widths = rows[0].map((_, c) =>
    Math.max(...rows.map((r) => String(r[c] ?? "").length)),
  );
  const header = rows[0]
    .map((h, c) => String(h).padEnd(widths[c]))
    .join(" | ");
  const sep = widths.map((w) => "-".repeat(w)).join(" | ");
  const body = rows
    .slice(1)
    .map((r) =>
      r.map((c, i) => String(c ?? "").padEnd(widths[i])).join(" | "),
    )
    .join("\n");
  return `${header}\n${sep}\n${body}`;
}
