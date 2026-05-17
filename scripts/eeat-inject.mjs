#!/usr/bin/env node
// E-E-A-T injection script.
//
// Walks every src/app/blog/*/page.tsx (and a few other targets) and:
//   1. Re-points the inline "By <Link href=/about>" author link at the new
//      /authors/bill-beltz bio page (canonical author URL).
//   2. Adds an `import { EditorialFooter } from "@/components/EditorialFooter"`
//      next to the existing ConsultationCTA / AnimatedSection imports.
//   3. Inserts an <EditorialFooter /> AnimatedSection block immediately before
//      the existing "All blog posts" tail section.
//
// Re-runnable. Skips files that already contain `EditorialFooter`.

import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const REPO_ROOT = join(dirname(__filename), "..");
const BLOG_DIR = join(REPO_ROOT, "src/app/blog");

const EDITORIAL_IMPORT = `import { EditorialFooter } from "@/components/EditorialFooter";`;

// Insertion block — keeps the file's existing AnimatedSection indentation.
// We add a small chip linking to the author and editorial policy plus the
// full editorial footer card.
const FOOTER_BLOCK = `                <AnimatedSection className="mb-8">
                    <EditorialFooter />
                </AnimatedSection>

`;

const TAIL_ANCHOR =
    `                <AnimatedSection className="mt-12">
                    <div className="flex items-center justify-between text-sm text-gray-400">
                        <Link href="/blog" className="hover:text-sky-400 inline-flex items-center gap-1">
                            <ArrowRight className="w-3 h-3 rotate-180" /> All blog posts
                        </Link>`;

function* walk(dir) {
    for (const entry of readdirSync(dir)) {
        const full = join(dir, entry);
        const st = statSync(full);
        if (st.isDirectory()) yield* walk(full);
        else if (entry === "page.tsx") yield full;
    }
}

function processFile(file) {
    let src = readFileSync(file, "utf8");
    const original = src;

    // 1) Point "/about" byline links at /authors/bill-beltz
    src = src.replace(
        /By <Link href="\/about" className="text-sky-400 hover:underline">William Beltz<\/Link>/g,
        'By <Link href="/authors/bill-beltz" className="text-sky-400 hover:underline">William Beltz</Link>',
    );
    src = src.replace(
        /By <Link href="\/about" className="text-sky-400 hover:underline">Bill Beltz<\/Link>/g,
        'By <Link href="/authors/bill-beltz" className="text-sky-400 hover:underline">Bill Beltz</Link>',
    );

    // 2) Skip if EditorialFooter is already present (re-runnable).
    if (src.includes("EditorialFooter")) {
        if (src !== original) writeFileSync(file, src, "utf8");
        return { file, changed: src !== original, addedFooter: false };
    }

    // 3) Find the tail anchor and inject the footer block before it.
    const idx = src.indexOf(TAIL_ANCHOR);
    if (idx === -1) {
        if (src !== original) writeFileSync(file, src, "utf8");
        return { file, changed: src !== original, addedFooter: false, reason: "no tail anchor" };
    }

    // 4) Add the import next to the ConsultationCTA import.
    const ctaImportRe = /(import \{ ConsultationCTA \} from "@\/components\/ConsultationCTA";)/;
    if (ctaImportRe.test(src)) {
        src = src.replace(
            ctaImportRe,
            `$1\n${EDITORIAL_IMPORT}`,
        );
    } else if (!src.includes(EDITORIAL_IMPORT)) {
        // Fallback: drop after the first import line.
        src = src.replace(
            /(import [^\n]+;\n)/,
            `$1${EDITORIAL_IMPORT}\n`,
        );
    }

    // Re-find the anchor index (length may have shifted after the import edit).
    const insertAt = src.indexOf(TAIL_ANCHOR);
    if (insertAt === -1) {
        writeFileSync(file, src, "utf8");
        return { file, changed: true, addedFooter: false, reason: "anchor lost after import injection" };
    }
    src = src.slice(0, insertAt) + FOOTER_BLOCK + src.slice(insertAt);

    writeFileSync(file, src, "utf8");
    return { file, changed: true, addedFooter: true };
}

const results = [];
for (const file of walk(BLOG_DIR)) {
    if (file.endsWith("/blog/page.tsx")) continue;
    results.push(processFile(file));
}

const summary = {
    scanned: results.length,
    changed: results.filter((r) => r.changed).length,
    footerAdded: results.filter((r) => r.addedFooter).length,
    skipped: results.filter((r) => !r.changed).length,
    noAnchor: results.filter((r) => r.reason === "no tail anchor").length,
};
console.log("E-E-A-T injection summary:", summary);
if (process.env.VERBOSE) {
    for (const r of results) {
        if (!r.addedFooter) console.log(" - skipped:", r.file, r.reason ?? "(already wired)");
    }
}
