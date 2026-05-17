#!/usr/bin/env node
/**
 * Add a <RelatedCities /> block to the four service pages that lack any
 * city-grid coverage: algorithmic-trading-systems, cloud-infrastructure,
 * custom-business-software, web-applications.
 *
 * Splices in after the bottom CTA's opening AnimatedSection so it sits
 * directly above the page-bottom call to action.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const SERVICES = [
    {
        slug: "algorithmic-trading-systems",
        heading: "Algorithmic trading clients — where we work",
    },
    {
        slug: "cloud-infrastructure",
        heading: "Cloud infrastructure clients — where we work",
    },
    {
        slug: "custom-business-software",
        heading: "Custom business software clients — where we work",
    },
    {
        slug: "web-applications",
        heading: "Next.js client metros — where we work",
    },
];

const IMPORT_ANCHOR = `import { RelatedPosts } from "@/components/RelatedPosts";`;
const IMPORT_INSERT = `import { RelatedPosts } from "@/components/RelatedPosts";\nimport { RelatedCities } from "@/components/RelatedCities";`;

// The bottom CTA on each page is wrapped in `<AnimatedSection>` with no className.
// We splice the RelatedCities block right before that bottom AnimatedSection.
const BOTTOM_CTA_OPEN = `                <AnimatedSection>\n                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">`;

function citiesBlock(svc) {
    return `                <AnimatedSection className="mb-16">
                    <RelatedCities heading="${svc.heading}" max={8} />
                </AnimatedSection>

`;
}

let changed = 0;
let skipped = 0;
const skippedSlugs = [];

for (const svc of SERVICES) {
    const path = resolve(ROOT, "src/app/services", svc.slug, "page.tsx");
    let src;
    try {
        src = readFileSync(path, "utf8");
    } catch (e) {
        console.warn(`SKIP ${svc.slug}: ${e.message}`);
        skipped++;
        skippedSlugs.push(svc.slug);
        continue;
    }

    if (src.includes("@/components/RelatedCities")) {
        skipped++;
        skippedSlugs.push(svc.slug);
        continue;
    }
    if (!src.includes(IMPORT_ANCHOR)) {
        console.warn(`SKIP ${svc.slug}: no RelatedPosts import anchor`);
        skipped++;
        skippedSlugs.push(svc.slug);
        continue;
    }
    if (!src.includes(BOTTOM_CTA_OPEN)) {
        console.warn(`SKIP ${svc.slug}: no bottom CTA anchor`);
        skipped++;
        skippedSlugs.push(svc.slug);
        continue;
    }

    let out = src.replace(IMPORT_ANCHOR, IMPORT_INSERT);
    out = out.replace(BOTTOM_CTA_OPEN, citiesBlock(svc) + BOTTOM_CTA_OPEN);

    writeFileSync(path, out, "utf8");
    changed++;
    console.log(`wired ${svc.slug}`);
}

console.log(`\nDone. Changed: ${changed}, Skipped: ${skipped}`);
if (skippedSlugs.length) console.log(`Skipped slugs: ${skippedSlugs.join(", ")}`);
