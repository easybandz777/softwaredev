/**
 * scripts/seo-weekly-report.ts
 *
 * Aggregates the headline numbers from every other monitor script into a single
 * one-pager. Does NOT re-run the monitors — it reads the most-recent dated report
 * for each script and stitches them together. Run this after `run-all-audits.sh`
 * (or call the monitors yourself first).
 *
 * Output: seo-deliverables/monitoring/weekly-report-<date>.md
 *
 * Run: npm run monitor:weekly
 */

import { promises as fs } from "node:fs";
import path from "node:path";
import { MONITOR_DIR, today, writeReport } from "./_lib.ts";

interface Section {
  label: string;
  prefix: string; // file prefix e.g. "rank-check"
  required?: boolean; // mark in summary if missing
  // pull `## Summary` block out of the report
  summaryRe?: RegExp;
}

const SECTIONS: Section[] = [
  { label: "Sitemap diff", prefix: "sitemap-diff" },
  { label: "Indexing status", prefix: "indexing-status" },
  { label: "Broken links", prefix: "broken-links" },
  { label: "Cache warm", prefix: "cache-warm", required: false },
  { label: "Content freshness", prefix: "freshness-audit" },
  { label: "Schema validation", prefix: "schema-validation" },
  { label: "Lighthouse trend", prefix: "lighthouse-trend" },
  { label: "Rank check", prefix: "rank-check" },
  { label: "Canonical consistency", prefix: "canonical-check" },
  { label: "Meta duplicates", prefix: "meta-duplicates" },
  { label: "Internal link graph", prefix: "link-graph" },
  { label: "GSC snapshot", prefix: "gsc-snapshot" },
];

function extractSummary(md: string): string | null {
  // Pull the section between `## Summary` and the next `## `
  const re = /^## Summary\s*$([\s\S]*?)(?=^## |\Z)/m;
  const m = md.match(re);
  return m ? m[1].trim() : null;
}

interface FoundReport {
  filename: string;
  date: string;
  body: string;
  summary: string | null;
}

async function findLatest(prefix: string): Promise<FoundReport | null> {
  const files = await fs.readdir(MONITOR_DIR);
  const matches = files
    .filter((f) => f.startsWith(`${prefix}-`) && f.endsWith(".md"))
    .map((f) => {
      const d = f.slice(prefix.length + 1).replace(/\.md$/, "");
      return { file: f, date: d };
    })
    .filter((x) => /^\d{4}-\d{2}-\d{2}$/.test(x.date))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
  if (matches.length === 0) return null;
  const f = matches[0];
  const body = await fs.readFile(path.join(MONITOR_DIR, f.file), "utf8");
  return {
    filename: f.file,
    date: f.date,
    body,
    summary: extractSummary(body),
  };
}

function stalenessLabel(reportDate: string): string {
  const t = Date.parse(reportDate);
  if (Number.isNaN(t)) return "?";
  const days = Math.floor((Date.now() - t) / 86_400_000);
  if (days <= 1) return "fresh";
  if (days <= 7) return `${days}d old`;
  if (days <= 30) return `STALE ${days}d`;
  return `STALE ${days}d (urgent)`;
}

interface RankResult {
  keyword: string;
  rank: number | null;
  target_rank?: number;
  url_ranked?: string;
}

interface RankSnapshot {
  date: string;
  backend: string;
  results: RankResult[];
}

async function loadRankSnapshot(): Promise<RankSnapshot | null> {
  try {
    const files = await fs.readdir(MONITOR_DIR);
    const j = files
      .filter((f) => f.startsWith("rank-check-") && f.endsWith(".json"))
      .sort()
      .pop();
    if (!j) return null;
    const body = await fs.readFile(path.join(MONITOR_DIR, j), "utf8");
    return JSON.parse(body) as RankSnapshot;
  } catch {
    return null;
  }
}

interface LinkGraphNode {
  url: string;
  inbound_count: number;
  outbound_count: number;
}

async function loadLinkGraph(): Promise<LinkGraphNode[] | null> {
  try {
    const files = await fs.readdir(MONITOR_DIR);
    const j = files
      .filter((f) => f.startsWith("link-graph-") && f.endsWith(".json"))
      .sort()
      .pop();
    if (!j) return null;
    const body = await fs.readFile(path.join(MONITOR_DIR, j), "utf8");
    return JSON.parse(body) as LinkGraphNode[];
  } catch {
    return null;
  }
}

async function main(): Promise<void> {
  const found: Record<string, FoundReport | null> = {};
  for (const s of SECTIONS) {
    found[s.prefix] = await findLatest(s.prefix);
  }
  const lines: string[] = [];
  lines.push(`# SEO Weekly Report — ${today()}`);
  lines.push("");
  lines.push(
    `Aggregated from the most-recent dated reports in \`seo-deliverables/monitoring/\`.`,
  );
  lines.push("");
  lines.push("## Report freshness");
  lines.push("");
  lines.push("| Monitor | Most-recent file | Date | Staleness |");
  lines.push("|---|---|---|---|");
  for (const s of SECTIONS) {
    const r = found[s.prefix];
    if (!r) {
      lines.push(`| ${s.label} | — | — | NEVER RUN |`);
    } else {
      lines.push(
        `| ${s.label} | [${r.filename}](./${r.filename}) | ${r.date} | ${stalenessLabel(r.date)} |`,
      );
    }
  }
  lines.push("");

  // Headline KPI roll-up
  lines.push("## Headline KPIs (current snapshot)");
  lines.push("");
  const rank = await loadRankSnapshot();
  if (rank) {
    const ranked = rank.results.filter((r) => r.rank != null);
    const top10 = ranked.filter((r) => (r.rank ?? 999) <= 10).length;
    const top20 = ranked.filter((r) => (r.rank ?? 999) <= 20).length;
    lines.push(
      `- **Tracked keywords ranking in top 10:** ${top10}/${rank.results.length} (backend: ${rank.backend})`,
    );
    lines.push(`- **Top 20:** ${top20}/${rank.results.length}`);
    const onTarget = ranked.filter(
      (r) => r.target_rank != null && (r.rank ?? 999) <= r.target_rank,
    ).length;
    lines.push(`- **At-or-above target rank:** ${onTarget}/${rank.results.length}`);
  } else {
    lines.push("- Rank check: no snapshot found. Run `npm run monitor:rank`.");
  }
  const graph = await loadLinkGraph();
  if (graph) {
    const orphans = graph.filter((g) => g.inbound_count === 0).length;
    const totalEdges = graph.reduce((s, g) => s + g.outbound_count, 0);
    lines.push(`- **Orphan pages:** ${orphans} (zero inbound internal links)`);
    lines.push(`- **Total internal link edges:** ${totalEdges}`);
  } else {
    lines.push("- Internal link graph: no snapshot found. Run `npm run monitor:link-graph`.");
  }
  lines.push("");

  // Inlined summaries
  lines.push("## Per-monitor summaries");
  lines.push("");
  for (const s of SECTIONS) {
    const r = found[s.prefix];
    lines.push(`### ${s.label}`);
    lines.push("");
    if (!r) {
      lines.push(`*Not yet run.* Generate with the corresponding \`npm run monitor:*\` script.`);
      lines.push("");
      continue;
    }
    if (r.summary) {
      lines.push(r.summary);
    } else {
      // fall back to a 10-line head if no Summary section
      lines.push("```");
      lines.push(r.body.split("\n").slice(0, 12).join("\n"));
      lines.push("```");
    }
    lines.push("");
  }

  // Action items: pull anything tagged as a problem
  lines.push("## Auto-suggested action items");
  lines.push("");
  const actions: string[] = [];
  // 1. orphans
  if (graph) {
    const orphans = graph.filter((g) => g.inbound_count === 0);
    if (orphans.length > 0) {
      actions.push(
        `- [ ] **Resolve ${orphans.length} orphan page(s).** See [${found["link-graph"]?.filename}](./${found["link-graph"]?.filename}).`,
      );
    }
  }
  // 2. dropped rankings
  if (rank) {
    const dropped = rank.results.filter(
      (r) =>
        r.rank == null ||
        (r.target_rank != null && r.rank > r.target_rank * 2),
    );
    if (dropped.length > 0) {
      actions.push(
        `- [ ] **${dropped.length} keyword(s) ranking far below target.** See [${found["rank-check"]?.filename}](./${found["rank-check"]?.filename}).`,
      );
    }
  }
  // 3. broken-links + schema heuristic from summary text
  for (const prefix of ["broken-links", "schema-validation"] as const) {
    const r = found[prefix];
    if (!r?.summary) continue;
    const broken = r.summary.match(/Broken \(4xx\/5xx\/network\):\s*(\d+)/);
    const errors = r.summary.match(/Errors:\s*(\d+)/);
    if (broken && parseInt(broken[1], 10) > 0) {
      actions.push(
        `- [ ] **${broken[1]} broken links.** See [${r.filename}](./${r.filename}).`,
      );
    }
    if (errors && parseInt(errors[1], 10) > 0) {
      actions.push(
        `- [ ] **${errors[1]} schema errors.** See [${r.filename}](./${r.filename}).`,
      );
    }
  }
  if (actions.length === 0) {
    lines.push("None auto-detected. Skim the per-monitor summaries above for nuance.");
  } else {
    lines.push(...actions);
  }
  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push(
    `Generated by \`scripts/seo-weekly-report.ts\`. Inputs are the most-recent dated reports in \`seo-deliverables/monitoring/\`. Re-run any monitor with the relevant \`npm run monitor:*\` script, then re-run this aggregator.`,
  );
  const out = lines.join("\n") + "\n";
  const full = await writeReport(`weekly-report-${today()}.md`, out);
  console.log(`Wrote ${path.relative(process.cwd(), full)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
