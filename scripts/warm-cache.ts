import { promises as fs } from "node:fs";
import path from "node:path";
import {
  MONITOR_DIR,
  ensureDir,
  fetchSitemap,
  pMap,
  timedFetch,
  today,
} from "./_lib.ts";

const UAS = [
  {
    name: "Googlebot",
    value:
      "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
  },
  {
    name: "Bingbot",
    value:
      "Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)",
  },
];

interface Row {
  url: string;
  ua: string;
  status: number;
  ttfb_ms: number;
  error?: string;
}

async function main(): Promise<void> {
  const entries = await fetchSitemap();
  const tasks: { url: string; ua: { name: string; value: string } }[] = [];
  for (const e of entries) {
    for (const ua of UAS) tasks.push({ url: e.url, ua });
  }
  const rows = await pMap(tasks, 10, async ({ url, ua }) => {
    const r = await timedFetch(url, { headers: { "user-agent": ua.value } });
    return {
      url,
      ua: ua.name,
      status: r.status,
      ttfb_ms: r.ttfb,
      error: r.error,
    } as Row;
  });
  const tsv: string[] = ["url\tua\tstatus\tttfb_ms\terror"];
  for (const r of rows) {
    tsv.push(
      [r.url, r.ua, r.status, r.ttfb_ms, r.error ?? ""].join("\t"),
    );
  }
  await ensureDir(MONITOR_DIR);
  const tsvPath = path.join(MONITOR_DIR, `cache-warm-${today()}.tsv`);
  await fs.writeFile(tsvPath, tsv.join("\n") + "\n", "utf8");
  const ok = rows.filter((r) => r.status >= 200 && r.status < 400).length;
  const bad = rows.length - ok;
  const avgTtfb =
    rows.reduce((s, r) => s + (r.ttfb_ms || 0), 0) / Math.max(1, rows.length);
  const summary = [
    `# Cache Warm Run — ${today()}`,
    "",
    `- Total requests: ${rows.length}`,
    `- OK: ${ok}`,
    `- Failed: ${bad}`,
    `- Avg TTFB: ${avgTtfb.toFixed(0)} ms`,
    `- TSV: ${path.basename(tsvPath)}`,
    "",
  ].join("\n");
  await fs.writeFile(
    path.join(MONITOR_DIR, `cache-warm-${today()}.md`),
    summary,
    "utf8",
  );
  console.log(`Wrote ${path.relative(process.cwd(), tsvPath)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
