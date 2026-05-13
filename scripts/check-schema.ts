import path from "node:path";
import { SITE, fetchSitemap, pMap, timedFetch, today, writeReport } from "./_lib.ts";

interface SchemaIssue {
  url: string;
  type: string;
  level: "error" | "warning";
  field: string;
  message: string;
}

interface UrlResult {
  url: string;
  blocks: number;
  types: string[];
  issues: SchemaIssue[];
}

const REQUIRED: Record<string, string[]> = {
  Article: ["headline", "author", "datePublished", "image"],
  BlogPosting: ["headline", "author", "datePublished", "image"],
  Service: ["name", "provider"],
  FAQPage: ["mainEntity"],
  BreadcrumbList: ["itemListElement"],
  Organization: ["name", "url"],
  LocalBusiness: ["name", "address", "telephone"],
  WebSite: ["url", "name"],
  Product: ["name", "offers"],
  HowTo: ["name", "step"],
  Review: ["itemReviewed", "reviewRating", "author"],
  AggregateRating: ["ratingValue", "ratingCount"],
};

const TOP_PATHS = [
  "/",
  "/services",
  "/pricing",
  "/contact",
  "/about",
  "/methodology",
  "/blog",
  "/work",
  "/faq",
  "/reviews",
  "/services/custom-crm-development",
  "/services/penetration-testing",
  "/services/cloud-infrastructure",
  "/services/web-applications",
  "/services/api-development",
  "/services/saas-platform-development",
  "/services/ai-integration-services",
  "/services/devops-engineering",
  "/services/ecommerce-development",
  "/services/mobile-app-development",
  "/software-development-atlanta-ga",
  "/software-development-miami-fl",
  "/software-development-austin-tx",
  "/software-development-dallas-tx",
  "/software-development-macon-ga",
  "/calculators/crm-roi",
  "/vs/hubspot",
  "/blog/custom-crm-development-guide",
  "/press",
  "/press-kit",
];

function extractJsonLd(html: string): unknown[] {
  const out: unknown[] = [];
  const re =
    /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  for (const m of html.matchAll(re)) {
    let raw = m[1].trim();
    raw = raw.replace(/<!--[\s\S]*?-->/g, "");
    try {
      const parsed = JSON.parse(raw);
      out.push(parsed);
    } catch {
      out.push({ __parseError: true, raw: raw.slice(0, 120) });
    }
  }
  return out;
}

function flatten(node: unknown, acc: unknown[] = []): unknown[] {
  if (Array.isArray(node)) {
    for (const n of node) flatten(n, acc);
    return acc;
  }
  if (node && typeof node === "object") {
    acc.push(node);
    const obj = node as Record<string, unknown>;
    if (Array.isArray(obj["@graph"])) {
      for (const n of obj["@graph"] as unknown[]) flatten(n, acc);
    }
  }
  return acc;
}

function validateNode(url: string, node: Record<string, unknown>): SchemaIssue[] {
  const issues: SchemaIssue[] = [];
  const rawType = node["@type"];
  const types = Array.isArray(rawType) ? rawType : [rawType];
  for (const t of types) {
    if (typeof t !== "string") continue;
    const required = REQUIRED[t];
    if (!required) continue;
    for (const field of required) {
      if (node[field] === undefined || node[field] === null || node[field] === "") {
        issues.push({
          url,
          type: t,
          level: "error",
          field,
          message: `Required field "${field}" missing on ${t}`,
        });
      }
    }
    if (t === "Article" || t === "BlogPosting") {
      if (!node["dateModified"]) {
        issues.push({
          url,
          type: t,
          level: "warning",
          field: "dateModified",
          message: "Recommended field dateModified missing",
        });
      }
    }
  }
  return issues;
}

async function checkUrl(url: string): Promise<UrlResult> {
  const r = await timedFetch(url);
  if (!r.body) {
    return {
      url,
      blocks: 0,
      types: [],
      issues: [
        {
          url,
          type: "(fetch)",
          level: "error",
          field: "(http)",
          message: `Fetch failed: ${r.error ?? r.status}`,
        },
      ],
    };
  }
  const blocks = extractJsonLd(r.body);
  const issues: SchemaIssue[] = [];
  const types = new Set<string>();
  for (const block of blocks) {
    if (
      block &&
      typeof block === "object" &&
      (block as Record<string, unknown>).__parseError
    ) {
      issues.push({
        url,
        type: "(json)",
        level: "error",
        field: "(parse)",
        message: "JSON-LD block failed to parse",
      });
      continue;
    }
    const nodes = flatten(block);
    for (const n of nodes) {
      if (!n || typeof n !== "object") continue;
      const node = n as Record<string, unknown>;
      const t = node["@type"];
      if (typeof t === "string") types.add(t);
      else if (Array.isArray(t)) for (const x of t) if (typeof x === "string") types.add(x);
      issues.push(...validateNode(url, node));
    }
  }
  return { url, blocks: blocks.length, types: [...types], issues };
}

function render(results: UrlResult[]): string {
  const lines: string[] = [];
  const totalIssues = results.reduce((s, r) => s + r.issues.length, 0);
  const errors = results.reduce(
    (s, r) => s + r.issues.filter((i) => i.level === "error").length,
    0,
  );
  lines.push(`# Schema Validation — ${today()}`);
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`- URLs checked: ${results.length}`);
  lines.push(`- Total issues: ${totalIssues}`);
  lines.push(`- Errors: ${errors}`);
  lines.push(`- Warnings: ${totalIssues - errors}`);
  lines.push("");
  lines.push("## Issues");
  lines.push("");
  if (totalIssues === 0) {
    lines.push("None.");
  } else {
    lines.push("| URL | Type | Level | Field | Message |");
    lines.push("|---|---|---|---|---|");
    for (const r of results) {
      for (const i of r.issues) {
        lines.push(
          `| ${i.url} | ${i.type} | ${i.level} | ${i.field} | ${i.message.replace(/\|/g, "\\|")} |`,
        );
      }
    }
  }
  lines.push("");
  lines.push("## Schema coverage per URL");
  lines.push("");
  lines.push("| URL | JSON-LD blocks | Types |");
  lines.push("|---|---:|---|");
  for (const r of results) {
    lines.push(
      `| ${r.url} | ${r.blocks} | ${r.types.join(", ") || "(none)"} |`,
    );
  }
  lines.push("");
  return lines.join("\n") + "\n";
}

async function main(): Promise<void> {
  let targets: string[];
  if (process.argv.includes("--sitemap")) {
    const entries = await fetchSitemap();
    targets = entries.map((e) => e.url).slice(0, 30);
  } else {
    targets = TOP_PATHS.map((p) => `${SITE}${p}`);
  }
  const results = await pMap(targets, 8, (u) => checkUrl(u));
  const out = render(results);
  const full = await writeReport(`schema-validation-${today()}.md`, out);
  console.log(`Wrote ${path.relative(process.cwd(), full)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
