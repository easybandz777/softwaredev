import { promises as fs } from "node:fs";
import path from "node:path";

export const dynamic = "force-static";
export const revalidate = 3600;

const SITE_URL = "https://quantlabusa.dev";
const SITE_TITLE = "QUANT LAB USA";
const SITE_SUBTITLE =
  "Custom software development, custom CRMs, Stripe and payments infrastructure, algorithmic trading systems, and offensive security from QUANT LAB USA INC.";
const AUTHOR_NAME = "William Beltz";
const AUTHOR_EMAIL = "beltz@quantlabusa.dev";

type BlogEntry = {
  slug: string;
  title: string;
  summary: string;
  updated: string;
};

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((word) => (word.length > 0 ? word[0].toUpperCase() + word.slice(1) : word))
    .join(" ");
}

async function readBlogDirectory(): Promise<string[]> {
  const candidates = [
    path.join(process.cwd(), "src", "app", "blog"),
    path.join(process.cwd(), "app", "blog"),
  ];

  for (const candidate of candidates) {
    try {
      const items = await fs.readdir(candidate, { withFileTypes: true });
      return items
        .filter((entry) => entry.isDirectory() && !entry.name.startsWith("_") && !entry.name.startsWith("."))
        .map((entry) => entry.name);
    } catch {
      continue;
    }
  }

  return [];
}

async function readEntryMetadata(slug: string): Promise<BlogEntry | null> {
  const dirCandidates = [
    path.join(process.cwd(), "src", "app", "blog", slug),
    path.join(process.cwd(), "app", "blog", slug),
  ];

  for (const dir of dirCandidates) {
    try {
      const pagePath = path.join(dir, "page.tsx");
      const stat = await fs.stat(pagePath);
      const source = await fs.readFile(pagePath, "utf8");

      const titleMatch =
        source.match(/title:\s*"([^"]+)"/) ||
        source.match(/title:\s*'([^']+)'/) ||
        source.match(/title:\s*`([^`]+)`/);
      const descMatch =
        source.match(/description:\s*"([^"]+)"/) ||
        source.match(/description:\s*'([^']+)'/) ||
        source.match(/description:\s*`([^`]+)`/);

      return {
        slug,
        title: titleMatch ? titleMatch[1] : slugToTitle(slug),
        summary: descMatch
          ? descMatch[1]
          : "Article from QUANT LAB USA on software engineering, cybersecurity, payments, and platform design.",
        updated: stat.mtime.toISOString(),
      };
    } catch {
      continue;
    }
  }

  return null;
}

export async function GET(): Promise<Response> {
  const slugs = await readBlogDirectory();
  const entries: BlogEntry[] = [];

  for (const slug of slugs) {
    const entry = await readEntryMetadata(slug);
    if (entry) entries.push(entry);
  }

  entries.sort((a, b) => (a.updated < b.updated ? 1 : -1));

  const feedUpdated = entries[0]?.updated ?? new Date().toISOString();

  const entryXml = entries
    .map((entry) => {
      const url = `${SITE_URL}/blog/${entry.slug}`;
      return `  <entry>
    <title>${escapeXml(entry.title)}</title>
    <link href="${escapeXml(url)}" rel="alternate" type="text/html" />
    <id>${escapeXml(url)}</id>
    <updated>${entry.updated}</updated>
    <published>${entry.updated}</published>
    <summary type="text">${escapeXml(entry.summary)}</summary>
    <author>
      <name>${escapeXml(AUTHOR_NAME)}</name>
      <email>${escapeXml(AUTHOR_EMAIL)}</email>
    </author>
  </entry>`;
    })
    .join("\n");

  const atom = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${escapeXml(SITE_TITLE)}</title>
  <subtitle>${escapeXml(SITE_SUBTITLE)}</subtitle>
  <link href="${SITE_URL}/feed.xml" rel="self" type="application/atom+xml" />
  <link href="${SITE_URL}" rel="alternate" type="text/html" />
  <id>${SITE_URL}/</id>
  <updated>${feedUpdated}</updated>
  <rights>Copyright QUANT LAB USA INC</rights>
  <generator uri="${SITE_URL}">QUANT LAB USA feed</generator>
  <author>
    <name>${escapeXml(AUTHOR_NAME)}</name>
    <email>${escapeXml(AUTHOR_EMAIL)}</email>
    <uri>${SITE_URL}</uri>
  </author>
${entryXml}
</feed>
`;

  return new Response(atom, {
    status: 200,
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
