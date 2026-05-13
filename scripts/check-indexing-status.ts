import { promises as fs } from "node:fs";
import path from "node:path";
import {
  SITE,
  fetchSitemap,
  pMap,
  today,
  writeReport,
  type SitemapEntry,
} from "./_lib.ts";

interface IndexStatus {
  url: string;
  status:
    | "indexed"
    | "discovered"
    | "crawled-not-indexed"
    | "blocked"
    | "error"
    | "unknown";
  detail?: string;
}

interface GscToken {
  access_token: string;
  expires_at: number;
}

async function loadServiceAccount(): Promise<{
  client_email: string;
  private_key: string;
} | null> {
  const p = process.env.GSC_SERVICE_ACCOUNT_JSON;
  if (!p) return null;
  try {
    const raw = await fs.readFile(p, "utf8");
    const parsed = JSON.parse(raw);
    if (!parsed.client_email || !parsed.private_key) return null;
    return {
      client_email: parsed.client_email,
      private_key: parsed.private_key,
    };
  } catch {
    return null;
  }
}

function base64url(buf: Buffer): string {
  return buf
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

async function getGscToken(sa: {
  client_email: string;
  private_key: string;
}): Promise<GscToken> {
  const { createSign } = await import("node:crypto");
  const now = Math.floor(Date.now() / 1000);
  const header = base64url(
    Buffer.from(JSON.stringify({ alg: "RS256", typ: "JWT" })),
  );
  const payload = base64url(
    Buffer.from(
      JSON.stringify({
        iss: sa.client_email,
        scope: "https://www.googleapis.com/auth/webmasters.readonly",
        aud: "https://oauth2.googleapis.com/token",
        exp: now + 3600,
        iat: now,
      }),
    ),
  );
  const signer = createSign("RSA-SHA256");
  signer.update(`${header}.${payload}`);
  const sig = base64url(signer.sign(sa.private_key));
  const jwt = `${header}.${payload}.${sig}`;
  const body = new URLSearchParams({
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: jwt,
  });
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body,
  });
  if (!res.ok) {
    throw new Error(`GSC token request failed: ${res.status}`);
  }
  const json = (await res.json()) as {
    access_token: string;
    expires_in: number;
  };
  return {
    access_token: json.access_token,
    expires_at: Date.now() + (json.expires_in - 60) * 1000,
  };
}

async function inspectUrl(
  token: string,
  siteUrl: string,
  inspectionUrl: string,
): Promise<IndexStatus> {
  const res = await fetch(
    "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect",
    {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        inspectionUrl,
        siteUrl,
        languageCode: "en-US",
      }),
    },
  );
  if (!res.ok) {
    return {
      url: inspectionUrl,
      status: "error",
      detail: `GSC inspect failed: ${res.status}`,
    };
  }
  const json = (await res.json()) as {
    inspectionResult?: {
      indexStatusResult?: {
        verdict?: string;
        coverageState?: string;
        robotsTxtState?: string;
      };
    };
  };
  const result = json.inspectionResult?.indexStatusResult;
  if (!result) {
    return { url: inspectionUrl, status: "unknown" };
  }
  const verdict = result.verdict ?? "";
  const cov = result.coverageState ?? "";
  if (verdict === "PASS") return { url: inspectionUrl, status: "indexed", detail: cov };
  if (/discovered/i.test(cov)) return { url: inspectionUrl, status: "discovered", detail: cov };
  if (/crawled/i.test(cov)) return { url: inspectionUrl, status: "crawled-not-indexed", detail: cov };
  if (result.robotsTxtState && /disallow/i.test(result.robotsTxtState)) {
    return { url: inspectionUrl, status: "blocked", detail: result.robotsTxtState };
  }
  return { url: inspectionUrl, status: "unknown", detail: cov || verdict };
}

async function fallbackScrape(entries: SitemapEntry[]): Promise<IndexStatus[]> {
  const res = await fetch(
    `https://www.google.com/search?q=${encodeURIComponent("site:" + SITE.replace(/^https?:\/\//, ""))}`,
    {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
      },
    },
  );
  const html = res.ok ? await res.text() : "";
  const m =
    html.match(/About\s+([\d,]+)\s+results?/i) ||
    html.match(/Approximately\s+([\d,]+)\s+results?/i);
  const approx = m ? parseInt(m[1].replace(/,/g, ""), 10) : NaN;
  return entries.map((e) => ({
    url: e.url,
    status: "unknown" as const,
    detail: Number.isFinite(approx)
      ? `Site-wide approximate indexed count: ${approx} (fallback scrape — not per-URL)`
      : "Fallback scrape did not return a result count (rate-limited or markup changed)",
  }));
}

function render(results: IndexStatus[], mode: "gsc" | "fallback"): string {
  const buckets = {
    indexed: 0,
    discovered: 0,
    "crawled-not-indexed": 0,
    blocked: 0,
    error: 0,
    unknown: 0,
  } as Record<IndexStatus["status"], number>;
  for (const r of results) buckets[r.status]++;
  const lines: string[] = [];
  lines.push(`# Indexing Status — ${today()}`);
  lines.push("");
  lines.push(`Source: ${mode === "gsc" ? "Google Search Console URL Inspection API" : "Fallback (site: query scrape)"}`);
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`- Indexed: ${buckets.indexed}`);
  lines.push(`- Discovered (not indexed): ${buckets.discovered}`);
  lines.push(`- Crawled, not indexed: ${buckets["crawled-not-indexed"]}`);
  lines.push(`- Blocked: ${buckets.blocked}`);
  lines.push(`- Errors: ${buckets.error}`);
  lines.push(`- Unknown: ${buckets.unknown}`);
  lines.push(`- Total checked: ${results.length}`);
  lines.push("");
  lines.push("## Per-URL detail");
  lines.push("");
  lines.push("| URL | Status | Detail |");
  lines.push("|---|---|---|");
  for (const r of results) {
    lines.push(
      `| ${r.url} | ${r.status} | ${(r.detail ?? "").replace(/\|/g, "\\|")} |`,
    );
  }
  return lines.join("\n") + "\n";
}

async function main(): Promise<void> {
  const entries = await fetchSitemap();
  const sa = await loadServiceAccount();
  let results: IndexStatus[];
  let mode: "gsc" | "fallback";
  if (sa) {
    mode = "gsc";
    const tok = await getGscToken(sa);
    results = await pMap(entries, 4, async (e) => {
      try {
        return await inspectUrl(tok.access_token, SITE, e.url);
      } catch (err) {
        return {
          url: e.url,
          status: "error" as const,
          detail: err instanceof Error ? err.message : String(err),
        };
      }
    });
  } else {
    mode = "fallback";
    results = await fallbackScrape(entries);
  }
  const out = render(results, mode);
  const filename = `indexing-status-${today()}.md`;
  const full = await writeReport(filename, out);
  console.log(`Wrote ${path.relative(process.cwd(), full)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
