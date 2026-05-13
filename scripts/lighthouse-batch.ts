import { promises as fs } from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";
import { MONITOR_DIR, SITE, ensureDir, today, writeReport } from "./_lib.ts";

interface PageTarget {
  url: string;
  formFactor: "mobile" | "desktop";
}

interface PageScore {
  url: string;
  formFactor: "mobile" | "desktop";
  performance: number | null;
  accessibility: number | null;
  bestPractices: number | null;
  seo: number | null;
  error?: string;
}

const TARGETS: PageTarget[] = [
  { url: `${SITE}/`, formFactor: "mobile" },
  { url: `${SITE}/blog/custom-crm-development-guide`, formFactor: "mobile" },
  { url: `${SITE}/services/custom-crm-development`, formFactor: "desktop" },
  { url: `${SITE}/services/penetration-testing`, formFactor: "desktop" },
  { url: `${SITE}/software-development-atlanta-ga`, formFactor: "mobile" },
  { url: `${SITE}/vs/hubspot`, formFactor: "desktop" },
  { url: `${SITE}/pricing`, formFactor: "desktop" },
  { url: `${SITE}/contact`, formFactor: "mobile" },
  { url: `${SITE}/calculators/crm-roi`, formFactor: "mobile" },
  { url: `${SITE}/blog`, formFactor: "desktop" },
  { url: `${SITE}/services`, formFactor: "desktop" },
  { url: `${SITE}/about`, formFactor: "mobile" },
  { url: `${SITE}/methodology`, formFactor: "desktop" },
  { url: `${SITE}/work`, formFactor: "mobile" },
  { url: `${SITE}/faq`, formFactor: "mobile" },
  { url: `${SITE}/services/web-applications`, formFactor: "mobile" },
  { url: `${SITE}/services/cloud-infrastructure`, formFactor: "desktop" },
  { url: `${SITE}/software-development-miami-fl`, formFactor: "mobile" },
  { url: `${SITE}/software-development-austin-tx`, formFactor: "mobile" },
  { url: `${SITE}/reviews`, formFactor: "desktop" },
];

async function runLighthouse(t: PageTarget): Promise<PageScore> {
  return new Promise((resolve) => {
    const args = [
      "lighthouse@latest",
      t.url,
      "--quiet",
      "--output=json",
      "--output-path=stdout",
      "--chrome-flags=--headless --no-sandbox",
      "--only-categories=performance,accessibility,best-practices,seo",
      t.formFactor === "desktop" ? "--preset=desktop" : "--form-factor=mobile",
    ];
    const proc = spawn("npx", args, { stdio: ["ignore", "pipe", "pipe"] });
    let out = "";
    let err = "";
    proc.stdout.on("data", (d) => (out += d.toString()));
    proc.stderr.on("data", (d) => (err += d.toString()));
    const timeout = setTimeout(() => {
      proc.kill("SIGKILL");
    }, 180_000);
    proc.on("close", (code) => {
      clearTimeout(timeout);
      if (code !== 0) {
        resolve({
          url: t.url,
          formFactor: t.formFactor,
          performance: null,
          accessibility: null,
          bestPractices: null,
          seo: null,
          error: err.slice(0, 200) || `exit ${code}`,
        });
        return;
      }
      try {
        const json = JSON.parse(out);
        const cats = json.categories ?? {};
        resolve({
          url: t.url,
          formFactor: t.formFactor,
          performance: Math.round((cats.performance?.score ?? 0) * 100),
          accessibility: Math.round((cats.accessibility?.score ?? 0) * 100),
          bestPractices: Math.round(
            (cats["best-practices"]?.score ?? 0) * 100,
          ),
          seo: Math.round((cats.seo?.score ?? 0) * 100),
        });
      } catch (e) {
        resolve({
          url: t.url,
          formFactor: t.formFactor,
          performance: null,
          accessibility: null,
          bestPractices: null,
          seo: null,
          error: e instanceof Error ? e.message : String(e),
        });
      }
    });
  });
}

async function loadBaseline(): Promise<Map<string, Partial<PageScore>>> {
  const map = new Map<string, Partial<PageScore>>();
  const baselinePath = path.resolve(
    path.dirname(new URL(import.meta.url).pathname),
    "..",
    "seo-deliverables",
    "lighthouse-report.md",
  );
  try {
    const text = await fs.readFile(baselinePath, "utf8");
    const lineRe =
      /^\|\s*\d+\s*\|\s*`([^`]+)`\s*\|\s*(mobile|desktop)\s*\|\s*\*\*(\d+)\*\*\s*\|\s*\*\*(\d+)\*\*\s*\|\s*\*\*(\d+)\*\*\s*\|\s*\*\*(\d+)\*\*\s*\|/gm;
    for (const m of text.matchAll(lineRe)) {
      const route = m[1].startsWith("http") ? m[1] : `${SITE}${m[1]}`;
      map.set(route, {
        formFactor: m[2] as "mobile" | "desktop",
        performance: parseInt(m[3], 10),
        accessibility: parseInt(m[4], 10),
        bestPractices: parseInt(m[5], 10),
        seo: parseInt(m[6], 10),
      });
    }
  } catch {
    /* baseline missing */
  }
  return map;
}

type ScoreKey = "performance" | "accessibility" | "bestPractices" | "seo";

function pick(r: PageScore | Partial<PageScore>, k: ScoreKey): number | null | undefined {
  return (r as Record<ScoreKey, number | null | undefined>)[k];
}

function delta(curr: number | null | undefined, base: number | null | undefined): string {
  if (curr == null || base == null) return "n/a";
  const d = curr - base;
  if (d === 0) return "0";
  return d > 0 ? `+${d}` : `${d}`;
}

function render(scores: PageScore[], baseline: Map<string, Partial<PageScore>>): string {
  const regressions: { row: PageScore; cat: string; key: ScoreKey; delta: number; baseVal: number }[] = [];
  for (const r of scores) {
    const b = baseline.get(r.url);
    if (!b) continue;
    const pairs: [ScoreKey, string][] = [
      ["performance", "Perf"],
      ["accessibility", "A11y"],
      ["bestPractices", "BP"],
      ["seo", "SEO"],
    ];
    for (const [k, label] of pairs) {
      const baseVal = pick(b, k);
      const cur = pick(r, k);
      if (baseVal != null && cur != null && cur - baseVal < -5) {
        regressions.push({ row: r, cat: label, key: k, delta: cur - baseVal, baseVal });
      }
    }
  }
  const lines: string[] = [];
  lines.push(`# Lighthouse Trend — ${today()}`);
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`- Pages audited: ${scores.length}`);
  lines.push(`- Pages with errors: ${scores.filter((s) => s.error).length}`);
  lines.push(`- Regressions (>5 pt drop vs baseline): ${regressions.length}`);
  lines.push("");
  lines.push("## Regressions");
  lines.push("");
  if (regressions.length === 0) {
    lines.push("None.");
  } else {
    lines.push("| URL | Form | Category | Baseline | Now | Delta |");
    lines.push("|---|---|---|---:|---:|---:|");
    for (const r of regressions) {
      lines.push(
        `| ${r.row.url} | ${r.row.formFactor} | ${r.cat} | ${r.baseVal} | ${pick(r.row, r.key) ?? "err"} | ${r.delta} |`,
      );
    }
  }
  lines.push("");
  lines.push("## Full scores");
  lines.push("");
  lines.push("| URL | Form | Perf | A11y | BP | SEO | dPerf | dA11y | dBP | dSEO |");
  lines.push("|---|---|---:|---:|---:|---:|---:|---:|---:|---:|");
  for (const r of scores) {
    const b = baseline.get(r.url) ?? {};
    lines.push(
      `| ${r.url} | ${r.formFactor} | ${r.performance ?? "err"} | ${r.accessibility ?? "err"} | ${r.bestPractices ?? "err"} | ${r.seo ?? "err"} | ${delta(r.performance, b.performance)} | ${delta(r.accessibility, b.accessibility)} | ${delta(r.bestPractices, b.bestPractices)} | ${delta(r.seo, b.seo)} |`,
    );
  }
  lines.push("");
  const errs = scores.filter((s) => s.error);
  if (errs.length > 0) {
    lines.push("## Errors");
    lines.push("");
    for (const e of errs) lines.push(`- ${e.url}: ${e.error}`);
    lines.push("");
  }
  return lines.join("\n") + "\n";
}

async function main(): Promise<void> {
  await ensureDir(MONITOR_DIR);
  const baseline = await loadBaseline();
  const scores: PageScore[] = [];
  for (const t of TARGETS) {
    process.stdout.write(`Auditing ${t.formFactor} ${t.url}...\n`);
    scores.push(await runLighthouse(t));
  }
  const out = render(scores, baseline);
  const full = await writeReport(`lighthouse-trend-${today()}.md`, out);
  console.log(`Wrote ${path.relative(process.cwd(), full)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
