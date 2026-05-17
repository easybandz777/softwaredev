/**
 * scripts/seo-rank-check.ts
 *
 * Weekly rank tracker for QUANT LAB USA.
 *
 * Inputs:
 *   - seo-deliverables/keyword-strategy/tracking-keywords.json (canonical)
 *     OR seo-deliverables/monitoring/tracking-keywords.json (fallback pointer)
 *
 * Outputs:
 *   - seo-deliverables/monitoring/rank-check-<date>.md (human report)
 *   - seo-deliverables/monitoring/rank-check-<date>.json (machine-readable snapshot)
 *   - seo-deliverables/monitoring/rank-history.json (running timeseries)
 *
 * Backends, in priority order:
 *   1. SerpApi   — set SERPAPI_KEY (free tier: 100 searches/mo). Best signal,
 *                  returns SERP features alongside organic rank.
 *   2. DataForSEO — set DATAFORSEO_LOGIN / DATAFORSEO_PASSWORD (paid).
 *                  Used if SERPAPI_KEY missing.
 *   3. manual    — set SEO_RANK_BACKEND=manual to force a scrape of Google's
 *                  HTML results with a desktop UA. *Highly* rate-limited; Google
 *                  will captcha you fast. Useful only for ad-hoc one-offs.
 *   4. skip      — default when no creds. Writes a report explaining what
 *                  needs to be configured.
 *
 * IMPORTANT: All backends except #4 cost money or burn quota. The script will
 * refuse to run more than `--max` keywords per invocation (default 25, configurable
 * via SEO_RANK_MAX env or --max=N flag). Use --all to bypass.
 *
 * Run:
 *   npm run monitor:rank
 *   SERPAPI_KEY=... npm run monitor:rank
 *   SEO_RANK_BACKEND=manual npm run monitor:rank -- --max=5
 *   npm run monitor:rank -- --all
 */

import { promises as fs } from "node:fs";
import path from "node:path";
import {
  MONITOR_DIR,
  SITE,
  ensureDir,
  pMap,
  today,
  writeReport,
} from "./_lib.ts";

interface KeywordRow {
  keyword: string;
  cluster?: string;
  primary_url?: string;
  volume?: string;
  difficulty?: number;
  intent?: string;
  geo?: string;
  target_rank?: number;
}

interface RankResult {
  keyword: string;
  primary_url?: string;
  target_rank?: number;
  rank: number | null;          // 1-based position of our domain on SERP, null = not in top 100
  url_ranked?: string;          // the URL that ranked (may differ from primary_url)
  serp_features: string[];      // featured snippet, paa, sitelinks, etc.
  total_results?: number;
  source: "serpapi" | "dataforseo" | "manual" | "skipped";
  error?: string;
  fetched_at: string;
}

const DOMAIN = SITE.replace(/^https?:\/\//, "").replace(/\/$/, "");

const KEYWORDS_PATH_CANDIDATES = [
  path.resolve(
    path.dirname(new URL(import.meta.url).pathname),
    "..",
    "seo-deliverables",
    "keyword-strategy",
    "tracking-keywords.json",
  ),
  path.resolve(
    path.dirname(new URL(import.meta.url).pathname),
    "..",
    "seo-deliverables",
    "monitoring",
    "tracking-keywords.json",
  ),
];

const HISTORY_PATH = path.join(MONITOR_DIR, "rank-history.json");

const FALLBACK_USER_AGENTS = [
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
];

function argFlag(name: string): boolean {
  return process.argv.includes(`--${name}`);
}
function argValue(name: string): string | undefined {
  const pfx = `--${name}=`;
  const a = process.argv.find((x) => x.startsWith(pfx));
  return a ? a.slice(pfx.length) : undefined;
}

async function loadKeywords(): Promise<KeywordRow[]> {
  for (const p of KEYWORDS_PATH_CANDIDATES) {
    try {
      const raw = await fs.readFile(p, "utf8");
      const parsed = JSON.parse(raw);
      const list = (parsed.keywords ?? parsed) as unknown;
      if (Array.isArray(list)) return list as KeywordRow[];
    } catch {
      // try next
    }
  }
  return [];
}

function pickBackend(): "serpapi" | "dataforseo" | "manual" | "skip" {
  const forced = process.env.SEO_RANK_BACKEND;
  if (forced) {
    if (["serpapi", "dataforseo", "manual", "skip"].includes(forced)) {
      return forced as "serpapi" | "dataforseo" | "manual" | "skip";
    }
  }
  if (process.env.SERPAPI_KEY) return "serpapi";
  if (process.env.DATAFORSEO_LOGIN && process.env.DATAFORSEO_PASSWORD) {
    return "dataforseo";
  }
  return "skip";
}

interface SerpApiOrganic {
  position: number;
  link: string;
  title?: string;
  displayed_link?: string;
}

async function rankViaSerpApi(kw: KeywordRow): Promise<RankResult> {
  const key = process.env.SERPAPI_KEY!;
  const url = new URL("https://serpapi.com/search.json");
  url.searchParams.set("engine", "google");
  url.searchParams.set("q", kw.keyword);
  url.searchParams.set("num", "100");
  url.searchParams.set("hl", "en");
  url.searchParams.set("gl", "us");
  url.searchParams.set("api_key", key);
  if (kw.geo && kw.geo !== "national") {
    url.searchParams.set("location", kw.geo);
  }
  const res = await fetch(url.toString(), {
    headers: { accept: "application/json" },
  });
  if (!res.ok) {
    return {
      keyword: kw.keyword,
      primary_url: kw.primary_url,
      target_rank: kw.target_rank,
      rank: null,
      serp_features: [],
      source: "serpapi",
      error: `HTTP ${res.status}`,
      fetched_at: new Date().toISOString(),
    };
  }
  const json = (await res.json()) as {
    organic_results?: SerpApiOrganic[];
    answer_box?: { type?: string };
    knowledge_graph?: unknown;
    related_questions?: unknown[];
    inline_videos?: unknown[];
    inline_images?: unknown[];
    local_results?: unknown;
    sitelinks?: unknown;
    search_information?: { total_results?: number };
    error?: string;
  };
  if (json.error) {
    return {
      keyword: kw.keyword,
      primary_url: kw.primary_url,
      target_rank: kw.target_rank,
      rank: null,
      serp_features: [],
      source: "serpapi",
      error: json.error,
      fetched_at: new Date().toISOString(),
    };
  }
  const features: string[] = [];
  if (json.answer_box) features.push("answer-box");
  if (json.knowledge_graph) features.push("knowledge-graph");
  if (json.related_questions?.length) features.push("people-also-ask");
  if (json.inline_videos?.length) features.push("videos");
  if (json.inline_images?.length) features.push("images");
  if (json.local_results) features.push("local-pack");
  if (json.sitelinks) features.push("sitelinks");
  let rank: number | null = null;
  let url_ranked: string | undefined;
  for (const o of json.organic_results ?? []) {
    if (o.link && new URL(o.link).hostname.replace(/^www\./, "") === DOMAIN) {
      rank = o.position;
      url_ranked = o.link;
      break;
    }
  }
  return {
    keyword: kw.keyword,
    primary_url: kw.primary_url,
    target_rank: kw.target_rank,
    rank,
    url_ranked,
    serp_features: features,
    total_results: json.search_information?.total_results,
    source: "serpapi",
    fetched_at: new Date().toISOString(),
  };
}

async function rankViaDataForSeo(kw: KeywordRow): Promise<RankResult> {
  const login = process.env.DATAFORSEO_LOGIN!;
  const pw = process.env.DATAFORSEO_PASSWORD!;
  const auth = Buffer.from(`${login}:${pw}`).toString("base64");
  const body = [
    {
      keyword: kw.keyword,
      language_code: "en",
      location_code: 2840, // United States
      depth: 100,
    },
  ];
  const res = await fetch(
    "https://api.dataforseo.com/v3/serp/google/organic/live/regular",
    {
      method: "POST",
      headers: {
        authorization: `Basic ${auth}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    },
  );
  if (!res.ok) {
    return {
      keyword: kw.keyword,
      primary_url: kw.primary_url,
      target_rank: kw.target_rank,
      rank: null,
      serp_features: [],
      source: "dataforseo",
      error: `HTTP ${res.status}`,
      fetched_at: new Date().toISOString(),
    };
  }
  const json = (await res.json()) as {
    tasks?: Array<{
      result?: Array<{
        items?: Array<{
          type?: string;
          rank_absolute?: number;
          url?: string;
        }>;
      }>;
    }>;
  };
  const items = json.tasks?.[0]?.result?.[0]?.items ?? [];
  const features = new Set<string>();
  let rank: number | null = null;
  let url_ranked: string | undefined;
  for (const it of items) {
    if (it.type && it.type !== "organic") features.add(it.type);
    if (
      it.type === "organic" &&
      it.url &&
      new URL(it.url).hostname.replace(/^www\./, "") === DOMAIN
    ) {
      if (rank == null) {
        rank = it.rank_absolute ?? null;
        url_ranked = it.url;
      }
    }
  }
  return {
    keyword: kw.keyword,
    primary_url: kw.primary_url,
    target_rank: kw.target_rank,
    rank,
    url_ranked,
    serp_features: [...features],
    source: "dataforseo",
    fetched_at: new Date().toISOString(),
  };
}

async function rankViaManual(kw: KeywordRow): Promise<RankResult> {
  const ua =
    FALLBACK_USER_AGENTS[Math.floor(Math.random() * FALLBACK_USER_AGENTS.length)];
  const url = `https://www.google.com/search?q=${encodeURIComponent(
    kw.keyword,
  )}&num=100&hl=en&gl=us`;
  // small jitter to avoid hammering
  await new Promise((r) => setTimeout(r, 2_000 + Math.random() * 3_000));
  const res = await fetch(url, {
    headers: {
      "user-agent": ua,
      "accept-language": "en-US,en;q=0.9",
    },
  });
  if (!res.ok) {
    return {
      keyword: kw.keyword,
      primary_url: kw.primary_url,
      target_rank: kw.target_rank,
      rank: null,
      serp_features: [],
      source: "manual",
      error: `HTTP ${res.status} — Google likely served a captcha/consent page`,
      fetched_at: new Date().toISOString(),
    };
  }
  const html = await res.text();
  if (/recaptcha|unusual traffic|sorry\/index/i.test(html)) {
    return {
      keyword: kw.keyword,
      primary_url: kw.primary_url,
      target_rank: kw.target_rank,
      rank: null,
      serp_features: [],
      source: "manual",
      error: "Google served a captcha (rate-limited).",
      fetched_at: new Date().toISOString(),
    };
  }
  // Naive parse: pull every result link, then find the first match of DOMAIN.
  // Google rewrites href as /url?q=... — handle both that and direct https links.
  const features: string[] = [];
  if (/People also ask/i.test(html)) features.push("people-also-ask");
  if (/Featured snippet/i.test(html)) features.push("answer-box");
  if (/<g-section-with-header[^>]*>[^<]*Videos/i.test(html)) features.push("videos");
  if (/<g-section-with-header[^>]*>[^<]*Images/i.test(html)) features.push("images");
  if (/data-async-type=["']local["']/i.test(html) || /Local results/i.test(html)) {
    features.push("local-pack");
  }
  const linkRe = /<a[^>]+href=["'](?:\/url\?q=)?(https?:\/\/[^"'&]+)/gi;
  let rank: number | null = null;
  let url_ranked: string | undefined;
  let position = 0;
  const seenUrls = new Set<string>();
  for (const m of html.matchAll(linkRe)) {
    const link = m[1];
    if (
      link.includes("google.com") ||
      link.includes("youtube.com/results") ||
      link.includes("webcache.googleusercontent.com")
    ) {
      continue;
    }
    if (seenUrls.has(link)) continue;
    seenUrls.add(link);
    position += 1;
    try {
      const h = new URL(link).hostname.replace(/^www\./, "");
      if (h === DOMAIN) {
        rank = position;
        url_ranked = link;
        break;
      }
    } catch {
      continue;
    }
    if (position > 100) break;
  }
  return {
    keyword: kw.keyword,
    primary_url: kw.primary_url,
    target_rank: kw.target_rank,
    rank,
    url_ranked,
    serp_features: features,
    source: "manual",
    fetched_at: new Date().toISOString(),
  };
}

async function loadHistory(): Promise<
  Record<string, Array<{ date: string; rank: number | null; source: string }>>
> {
  try {
    const raw = await fs.readFile(HISTORY_PATH, "utf8");
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

async function saveHistory(
  history: Record<
    string,
    Array<{ date: string; rank: number | null; source: string }>
  >,
): Promise<void> {
  await ensureDir(MONITOR_DIR);
  await fs.writeFile(HISTORY_PATH, JSON.stringify(history, null, 2), "utf8");
}

function deltaCell(curr: number | null, prev: number | null | undefined): string {
  if (curr == null && prev == null) return "—";
  if (curr == null) return "dropped from top 100";
  if (prev == null) return "new (was unranked)";
  const d = curr - prev;
  if (d === 0) return "0";
  // rank goes up = number goes DOWN; show + for improvement, - for regression
  return d < 0 ? `+${-d} (better)` : `-${d} (worse)`;
}

function render(
  results: RankResult[],
  history: Record<
    string,
    Array<{ date: string; rank: number | null; source: string }>
  >,
  backend: string,
): string {
  const total = results.length;
  const ranked = results.filter((r) => r.rank != null);
  const inTop10 = ranked.filter((r) => (r.rank ?? 999) <= 10).length;
  const inTop20 = ranked.filter((r) => (r.rank ?? 999) <= 20).length;
  const inTop100 = ranked.filter((r) => (r.rank ?? 999) <= 100).length;
  const onTarget = ranked.filter(
    (r) => r.target_rank != null && (r.rank ?? 999) <= r.target_rank,
  ).length;
  const errors = results.filter((r) => r.error);
  const lines: string[] = [];
  lines.push(`# SEO Rank Check — ${today()}`);
  lines.push("");
  lines.push(`Backend: \`${backend}\``);
  if (backend === "skip") {
    lines.push("");
    lines.push(
      "> No rank-tracking backend configured. Set `SERPAPI_KEY` " +
        "(free tier 100/mo) or `DATAFORSEO_LOGIN`+`DATAFORSEO_PASSWORD`, " +
        "or run with `SEO_RANK_BACKEND=manual` (Google HTML scrape — fragile). " +
        "See [SETUP-GSC-API.md](./SETUP-GSC-API.md) for the SerpApi route.",
    );
    lines.push("");
    return lines.join("\n") + "\n";
  }
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`- Keywords checked: ${total}`);
  lines.push(`- Ranking in top 10: ${inTop10}`);
  lines.push(`- Ranking in top 20: ${inTop20}`);
  lines.push(`- Ranking in top 100: ${inTop100}`);
  lines.push(`- At or above target rank: ${onTarget}`);
  lines.push(`- Errors: ${errors.length}`);
  lines.push("");
  lines.push("## Per-keyword detail");
  lines.push("");
  lines.push(
    "| Keyword | Rank | Target | Δ vs last week | Ranked URL | SERP features | Source |",
  );
  lines.push("|---|---:|---:|---|---|---|---|");
  for (const r of results) {
    const hist = history[r.keyword] ?? [];
    const prev =
      hist.length > 1 ? hist[hist.length - 2]?.rank ?? null : null;
    const url_short =
      r.url_ranked && r.url_ranked.length > 70
        ? r.url_ranked.slice(0, 67) + "..."
        : r.url_ranked ?? "—";
    lines.push(
      `| ${r.keyword} | ${
        r.rank ?? "—"
      } | ${r.target_rank ?? "—"} | ${deltaCell(
        r.rank,
        prev,
      )} | ${url_short} | ${r.serp_features.join(", ") || "—"} | ${r.source} |`,
    );
  }
  lines.push("");
  if (errors.length > 0) {
    lines.push("## Errors");
    lines.push("");
    for (const e of errors) {
      lines.push(`- \`${e.keyword}\`: ${e.error}`);
    }
    lines.push("");
  }
  lines.push("## Trends (last 8 snapshots)");
  lines.push("");
  for (const r of results) {
    const hist = history[r.keyword] ?? [];
    const last = hist.slice(-8).map((h) => `${h.date}:${h.rank ?? "—"}`);
    lines.push(`- \`${r.keyword}\` → ${last.join(" → ") || "(no history)"}`);
  }
  lines.push("");
  return lines.join("\n") + "\n";
}

async function main(): Promise<void> {
  const all = await loadKeywords();
  if (all.length === 0) {
    console.error(
      "No keywords found. Add some to seo-deliverables/keyword-strategy/tracking-keywords.json",
    );
    process.exit(1);
  }
  const backend = pickBackend();
  const max = argFlag("all")
    ? all.length
    : parseInt(argValue("max") ?? process.env.SEO_RANK_MAX ?? "25", 10);
  const list = all.slice(0, max);
  const history = await loadHistory();

  let results: RankResult[];
  if (backend === "skip") {
    results = list.map((kw) => ({
      keyword: kw.keyword,
      primary_url: kw.primary_url,
      target_rank: kw.target_rank,
      rank: null,
      serp_features: [],
      source: "skipped",
      error: "No backend configured.",
      fetched_at: new Date().toISOString(),
    }));
  } else if (backend === "serpapi") {
    results = await pMap(list, 4, rankViaSerpApi);
  } else if (backend === "dataforseo") {
    results = await pMap(list, 4, rankViaDataForSeo);
  } else {
    // manual — strictly serial to avoid Google captcha
    results = [];
    for (const kw of list) results.push(await rankViaManual(kw));
  }

  // Update history with this run
  for (const r of results) {
    history[r.keyword] = history[r.keyword] ?? [];
    // Don't double-record same-day runs; replace the today entry if present.
    const t = today();
    const same = history[r.keyword].findIndex((h) => h.date === t);
    const entry = { date: t, rank: r.rank, source: r.source };
    if (same >= 0) history[r.keyword][same] = entry;
    else history[r.keyword].push(entry);
    // Cap history per keyword at 52 weeks
    if (history[r.keyword].length > 52) {
      history[r.keyword] = history[r.keyword].slice(-52);
    }
  }
  await saveHistory(history);

  // Write JSON snapshot
  await ensureDir(MONITOR_DIR);
  const jsonPath = path.join(MONITOR_DIR, `rank-check-${today()}.json`);
  await fs.writeFile(
    jsonPath,
    JSON.stringify({ date: today(), backend, results }, null, 2),
    "utf8",
  );

  const md = render(results, history, backend);
  const full = await writeReport(`rank-check-${today()}.md`, md);
  console.log(`Wrote ${path.relative(process.cwd(), full)}`);
  console.log(`Wrote ${path.relative(process.cwd(), jsonPath)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
