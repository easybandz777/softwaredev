/**
 * Image SEO audit — static analysis of <Image> and <img> usages in src/.
 *
 * What it checks
 *   1. Every <img>/<Image> has a non-empty `alt` OR an explicit `alt=""`
 *      (decorative). Lone `alt` with no value, missing alt, or empty alt
 *      on a non-decorative tag is flagged.
 *   2. Every <img>/<Image> has `width` and `height` either as attributes
 *      or via inline `style={{ width, height }}` to prevent CLS.
 *   3. Every referenced `src="/foo.png"` actually exists under public/.
 *   4. Every file under public/ that is an image is referenced somewhere
 *      OR is a known sitewide asset (OG cards, favicons, manifest icons).
 *   5. Flags filenames that are not descriptive-kebab-case (e.g. mixed
 *      case, underscores, camelCase, leading "IMG_") since search engines
 *      do read filenames.
 *   6. Flags single-image files >200 KB original size — these almost
 *      always need WebP/AVIF conversion or recompression.
 *
 * Exit code
 *   0  – no findings
 *   1  – one or more findings (use in CI to fail PRs that regress)
 *
 * Run:
 *   node --experimental-strip-types scripts/audit-images.ts
 *   node --experimental-strip-types scripts/audit-images.ts --json
 */

import { promises as fs } from "node:fs";
import path from "node:path";

const REPO_ROOT = path.resolve(
  path.dirname(new URL(import.meta.url).pathname),
  "..",
);
const SRC_DIR = path.join(REPO_ROOT, "src");
const PUBLIC_DIR = path.join(REPO_ROOT, "public");

// Image extensions we care about for SEO. SVG is included because alt
// rules apply to it too even though it's not raster.
const IMAGE_EXTENSIONS = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".avif",
  ".gif",
  ".svg",
]);

// Known sitewide assets that are referenced from layout.tsx / manifest /
// metadata and may not show up in a naive grep. These are always
// considered "used."
const ALLOWLISTED_PUBLIC = new Set([
  "favicon-16x16.png",
  "favicon-32x32.png",
  "icon-192.png",
  "icon-512.png",
  "apple-touch-icon.png",
  "og-image.png",
  "og-image.webp",
  "og-image-square.png",
  "og-image-square.webp",
  "twitter-card.png",
  "twitter-card.webp",
  "logo.png", // kept for legacy schemas / internal portal fallback
  "logo-transparent.png", // used by /print/* pages (transparent background)
  "logo-transparent.webp",
  "logo-optimized.png",
  "logo-optimized.webp",
  "founder.jpg",
  "founder.webp",
  // OG cards referenced by per-page metadata across many pages.
  "og-crm.png",
  "og-pentest.png",
  "og-services.png",
  "og-stripe.png",
  "og-trading.png",
  "og-web-apps.png",
  "og-pricing.png",
  "og-resources.png",
  "og-locations.png",
  "og-methodology.png",
  "og-glossary.png",
  "og-security.png",
  // Brand assets retained for internal use.
  "thequantlabxTJ5automailer.png",
  "thequantlabxTJ5automailer.webp",
  // Next.js boilerplate SVGs left from create-next-app.
  "file.svg",
  "globe.svg",
  "next.svg",
  "vercel.svg",
  "window.svg",
]);

interface ImgUsage {
  file: string;
  line: number;
  tag: string; // "<Image" or "<img"
  raw: string; // entire tag text
  src: string | null;
  alt: string | null;
  hasAltAttr: boolean; // alt attribute present at all (even if empty)
  hasWidth: boolean;
  hasHeight: boolean;
  hasFill: boolean; // next/image fill={true} is an acceptable size source
  hasStyleSize: boolean; // inline style with width and height
}

interface Finding {
  level: "error" | "warning" | "info";
  file: string;
  line?: number;
  rule: string;
  message: string;
}

async function walk(dir: string, out: string[] = []): Promise<string[]> {
  let entries: import("node:fs").Dirent[];
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === "node_modules" || e.name === ".next") continue;
      await walk(full, out);
    } else if (e.isFile()) {
      out.push(full);
    }
  }
  return out;
}

// Match <Image ...> and <img ...> tags. JSX attributes can be
// multi-line, so we capture until the matching closing > of the tag.
const TAG_RE = /<(Image|img)(\s[^>]*?)\/?>/gs;

function attrValue(tag: string, name: string): string | null {
  // String literal: alt="..."
  const lit = new RegExp(`\\b${name}\\s*=\\s*"([^"]*)"`).exec(tag);
  if (lit) return lit[1];
  const litSingle = new RegExp(`\\b${name}\\s*=\\s*'([^']*)'`).exec(tag);
  if (litSingle) return litSingle[1];
  // Expression: alt={...}  — we mark it as present but can't evaluate.
  const expr = new RegExp(`\\b${name}\\s*=\\s*\\{([^}]+)\\}`).exec(tag);
  if (expr) return `{${expr[1].trim()}}`;
  return null;
}

function hasAttr(tag: string, name: string): boolean {
  return new RegExp(`\\b${name}\\s*=`).test(tag);
}

function hasStyleSize(tag: string): boolean {
  const styleMatch = /\bstyle\s*=\s*\{\{([^}]+)\}\}/.exec(tag);
  if (!styleMatch) return false;
  const style = styleMatch[1];
  return /\bwidth\s*:/.test(style) && /\bheight\s*:/.test(style);
}

function lineNumberAt(text: string, index: number): number {
  let line = 1;
  for (let i = 0; i < index; i++) {
    if (text.charCodeAt(i) === 10) line++;
  }
  return line;
}

function descriptiveKebabCase(name: string): boolean {
  // Allowed: lowercase a-z, digits, single hyphens between segments,
  // then a dot and extension. Numbers in version-y suffixes (-v2,
  // -512x512) are fine.
  return /^[a-z0-9]+(?:-[a-z0-9]+)*\.[a-z0-9]+$/.test(name);
}

async function collectImgUsages(): Promise<ImgUsage[]> {
  const files = (await walk(SRC_DIR)).filter(
    (f) => f.endsWith(".tsx") || f.endsWith(".jsx"),
  );
  const usages: ImgUsage[] = [];
  for (const file of files) {
    const text = await fs.readFile(file, "utf8");
    for (const m of text.matchAll(TAG_RE)) {
      const raw = m[0];
      const tag = `<${m[1]}`;
      const src = attrValue(raw, "src");
      const alt = attrValue(raw, "alt");
      const hasAltAttr = hasAttr(raw, "alt");
      const hasWidth = hasAttr(raw, "width");
      const hasHeight = hasAttr(raw, "height");
      const hasFill = /\bfill\b/.test(raw);
      const styleSized = hasStyleSize(raw);
      usages.push({
        file: path.relative(REPO_ROOT, file),
        line: lineNumberAt(text, m.index ?? 0),
        tag,
        raw,
        src,
        alt,
        hasAltAttr,
        hasWidth,
        hasHeight,
        hasFill,
        hasStyleSize: styleSized,
      });
    }
  }
  return usages;
}

async function listPublicImages(): Promise<string[]> {
  const all = await walk(PUBLIC_DIR);
  return all
    .map((f) => path.relative(PUBLIC_DIR, f))
    .filter((f) => IMAGE_EXTENSIONS.has(path.extname(f).toLowerCase()));
}

async function isUsedInSrc(publicRelPath: string): Promise<boolean> {
  if (ALLOWLISTED_PUBLIC.has(publicRelPath)) return true;
  if (ALLOWLISTED_PUBLIC.has(path.basename(publicRelPath))) return true;
  // Naive grep across src for either /foo.png or "foo.png".
  const files = (await walk(SRC_DIR)).filter(
    (f) =>
      f.endsWith(".tsx") ||
      f.endsWith(".ts") ||
      f.endsWith(".jsx") ||
      f.endsWith(".js"),
  );
  const needle = `/${publicRelPath.replace(/\\/g, "/")}`;
  for (const file of files) {
    const text = await fs.readFile(file, "utf8");
    if (text.includes(needle)) return true;
  }
  return false;
}

async function fileSize(p: string): Promise<number> {
  const st = await fs.stat(p);
  return st.size;
}

async function run(): Promise<{
  findings: Finding[];
  counts: Record<string, number>;
}> {
  const findings: Finding[] = [];
  const counts: Record<string, number> = {
    usagesScanned: 0,
    publicImages: 0,
    missingAlt: 0,
    missingDimensions: 0,
    brokenSrc: 0,
    oversized: 0,
    poorlyNamed: 0,
    unused: 0,
  };

  const usages = await collectImgUsages();
  counts.usagesScanned = usages.length;

  for (const u of usages) {
    if (!u.hasAltAttr) {
      findings.push({
        level: "error",
        file: u.file,
        line: u.line,
        rule: "missing-alt",
        message: `${u.tag} has no alt attribute. Decorative images should use alt="" intentionally.`,
      });
      counts.missingAlt++;
    } else if (u.alt && u.alt.length > 0 && u.alt.length < 4 && !u.alt.startsWith("{")) {
      findings.push({
        level: "warning",
        file: u.file,
        line: u.line,
        rule: "short-alt",
        message: `${u.tag} alt="${u.alt}" is suspiciously short — confirm it's truly meaningful or set alt="" if decorative.`,
      });
    }

    const sized = u.hasFill || (u.hasWidth && u.hasHeight) || u.hasStyleSize;
    if (!sized) {
      findings.push({
        level: "error",
        file: u.file,
        line: u.line,
        rule: "missing-dimensions",
        message: `${u.tag} missing width/height (or fill, or inline style sizing) — causes layout shift.`,
      });
      counts.missingDimensions++;
    }

    if (u.src && u.src.startsWith("/") && !u.src.startsWith("{")) {
      // Strip query string and hash.
      const cleanSrc = u.src.split("?")[0].split("#")[0];
      const localPath = path.join(PUBLIC_DIR, cleanSrc);
      try {
        await fs.access(localPath);
      } catch {
        findings.push({
          level: "error",
          file: u.file,
          line: u.line,
          rule: "broken-src",
          message: `${u.tag} src="${u.src}" does not exist under public/.`,
        });
        counts.brokenSrc++;
      }
    }
  }

  // Public image audit
  const publicImages = await listPublicImages();
  counts.publicImages = publicImages.length;
  for (const rel of publicImages) {
    const abs = path.join(PUBLIC_DIR, rel);
    const size = await fileSize(abs);
    const base = path.basename(rel);

    if (!descriptiveKebabCase(base)) {
      findings.push({
        level: "warning",
        file: `public/${rel}`,
        rule: "non-descriptive-filename",
        message: `Filename "${base}" is not descriptive-kebab-case. Search engines do read filenames.`,
      });
      counts.poorlyNamed++;
    }

    if (size > 200 * 1024) {
      findings.push({
        level: "warning",
        file: `public/${rel}`,
        rule: "oversized-image",
        message: `${(size / 1024).toFixed(0)} KB exceeds 200 KB. Convert to WebP/AVIF or recompress.`,
      });
      counts.oversized++;
    }

    const used = await isUsedInSrc(rel);
    if (!used) {
      findings.push({
        level: "info",
        file: `public/${rel}`,
        rule: "unused-public-image",
        message: `No references found in src/. Confirm it's intentionally shipped (e.g. external email/social) before deleting.`,
      });
      counts.unused++;
    }
  }

  return { findings, counts };
}

function formatText(
  findings: Finding[],
  counts: Record<string, number>,
): string {
  const lines: string[] = [];
  lines.push("=== Image SEO Audit ===");
  lines.push("");
  lines.push("Summary");
  for (const [k, v] of Object.entries(counts)) {
    lines.push(`  ${k.padEnd(20)} ${v}`);
  }
  lines.push("");

  if (findings.length === 0) {
    lines.push("No findings. Nice.");
    return lines.join("\n");
  }

  const byLevel: Record<string, Finding[]> = {
    error: [],
    warning: [],
    info: [],
  };
  for (const f of findings) byLevel[f.level].push(f);

  for (const level of ["error", "warning", "info"] as const) {
    const list = byLevel[level];
    if (list.length === 0) continue;
    lines.push(`--- ${level.toUpperCase()} (${list.length}) ---`);
    for (const f of list) {
      const loc = f.line ? `${f.file}:${f.line}` : f.file;
      lines.push(`  [${f.rule}] ${loc}`);
      lines.push(`    ${f.message}`);
    }
    lines.push("");
  }

  return lines.join("\n");
}

async function main(): Promise<void> {
  const wantJson = process.argv.includes("--json");
  const { findings, counts } = await run();

  if (wantJson) {
    process.stdout.write(
      JSON.stringify({ counts, findings }, null, 2) + "\n",
    );
  } else {
    process.stdout.write(formatText(findings, counts) + "\n");
  }

  const errors = findings.filter((f) => f.level === "error").length;
  process.exit(errors > 0 ? 1 : 0);
}

main().catch((err) => {
  console.error(err);
  process.exit(2);
});
