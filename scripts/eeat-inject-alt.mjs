#!/usr/bin/env node
// Second-pass E-E-A-T injector for the 6 blog posts that use the
// <RelatedPosts /> tail pattern instead of the "All blog posts" tail.
//
// Inserts the EditorialFooter immediately before the closing </AnimatedSection>
// + closing </article> tags. Re-runnable; skips files that already include it.

import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const REPO_ROOT = join(dirname(__filename), "..");

const TARGETS = [
    "atlanta-software-development-guide-2026",
    "build-vs-buy-software-2026",
    "custom-crm-development-guide",
    "nextjs-stripe-integration-guide",
    "what-is-mitre-attack-framework",
    "what-is-penetration-testing",
];

const EDITORIAL_IMPORT = `import { EditorialFooter } from "@/components/EditorialFooter";`;

// Insert immediately before the closing `</article>` tag's `</AnimatedSection>`
// that wraps the RelatedPosts block.
const ANCHOR = `            </article>\n        </main>\n    );\n}`;
const REPLACEMENT = `            <div className="container mx-auto px-6 max-w-4xl mt-12">
                <EditorialFooter />
            </div>

            </article>
        </main>
    );
}`;

const results = [];
for (const slug of TARGETS) {
    const file = join(REPO_ROOT, "src/app/blog", slug, "page.tsx");
    let src = readFileSync(file, "utf8");
    const original = src;

    // Re-point any /about byline links to /authors/bill-beltz.
    src = src.replace(
        /By <Link href="\/about" className="text-sky-400 hover:underline">William Beltz<\/Link>/g,
        'By <Link href="/authors/bill-beltz" className="text-sky-400 hover:underline">William Beltz</Link>',
    );
    src = src.replace(
        /By <Link href="\/about" className="text-sky-400 hover:underline">Bill Beltz<\/Link>/g,
        'By <Link href="/authors/bill-beltz" className="text-sky-400 hover:underline">Bill Beltz</Link>',
    );

    if (src.includes("EditorialFooter")) {
        if (src !== original) writeFileSync(file, src, "utf8");
        results.push({ slug, changed: src !== original, added: false });
        continue;
    }

    // Inject import.
    const ctaImportRe = /(import \{ ConsultationCTA \} from "@\/components\/ConsultationCTA";)/;
    if (ctaImportRe.test(src)) {
        src = src.replace(ctaImportRe, `$1\n${EDITORIAL_IMPORT}`);
    } else {
        src = src.replace(/(import [^\n]+;\n)/, `$1${EDITORIAL_IMPORT}\n`);
    }

    if (!src.endsWith(ANCHOR + "\n") && !src.includes(ANCHOR)) {
        results.push({ slug, changed: false, added: false, reason: "anchor missing" });
        continue;
    }

    src = src.replace(ANCHOR, REPLACEMENT);
    writeFileSync(file, src, "utf8");
    results.push({ slug, changed: true, added: true });
}

console.log("Alt injector:", {
    scanned: results.length,
    added: results.filter((r) => r.added).length,
    skipped: results.filter((r) => !r.added).length,
});
if (process.env.VERBOSE) {
    for (const r of results) console.log(" -", r);
}
