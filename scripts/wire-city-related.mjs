#!/usr/bin/env node
/**
 * Wire <RelatedIndustries /> and <RelatedPosts /> into all 14 city landing
 * pages. Splices in directly above the existing "Related services & nearby
 * cities" h2 anchor each city already renders.
 *
 * Each city gets topic-relevant pinned posts (Atlanta posts for Atlanta,
 * Georgia security guides for cyber-corridor cities, etc.) and an industries
 * shortlist sized to that metro's real economic mix.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const CITIES = [
    {
        slug: "atlanta-ga",
        cityName: "Atlanta",
        industries: ["fintech", "saas", "e-commerce", "construction"],
        topics: ["atlanta", "build-vs-buy"],
        pinned: [
            "atlanta-software-development-guide-2026",
            "best-custom-software-development-companies-atlanta-2026",
            "best-penetration-testing-companies-georgia-2026",
        ],
    },
    {
        slug: "augusta-ga",
        cityName: "Augusta",
        industries: ["fintech", "saas", "healthcare", "manufacturing"],
        topics: ["pentest", "atlanta"],
        pinned: [
            "best-penetration-testing-companies-georgia-2026",
            "soc2-pentest-prep-guide-2026",
            "atlanta-software-development-guide-2026",
        ],
    },
    {
        slug: "austin-tx",
        cityName: "Austin",
        industries: ["saas", "fintech", "e-commerce", "healthcare"],
        topics: ["saas", "build-vs-buy", "stack"],
        pinned: [
            "build-vs-buy-software-2026",
            "building-multi-tenant-saas-postgres-rls",
            "nextjs-vs-remix-vs-sveltekit-2026",
        ],
    },
    {
        slug: "charlotte-nc",
        cityName: "Charlotte",
        industries: ["fintech", "insurance", "saas", "real-estate"],
        topics: ["build-vs-buy", "saas", "stripe"],
        pinned: [
            "nextjs-stripe-integration-guide",
            "custom-crm-development-guide",
            "build-vs-buy-software-2026",
        ],
    },
    {
        slug: "chicago-il",
        cityName: "Chicago",
        industries: ["fintech", "manufacturing", "healthcare", "insurance"],
        topics: ["build-vs-buy", "stack", "pentest"],
        pinned: [
            "build-vs-buy-software-2026",
            "what-is-penetration-testing",
            "building-multi-tenant-saas-postgres-rls",
        ],
    },
    {
        slug: "columbus-ga",
        cityName: "Columbus",
        industries: ["manufacturing", "fintech", "healthcare", "saas"],
        topics: ["atlanta", "build-vs-buy"],
        pinned: [
            "atlanta-software-development-guide-2026",
            "build-vs-buy-software-2026",
            "best-penetration-testing-companies-georgia-2026",
        ],
    },
    {
        slug: "dallas-tx",
        cityName: "Dallas",
        industries: ["fintech", "manufacturing", "insurance", "real-estate"],
        topics: ["build-vs-buy", "saas", "stripe"],
        pinned: [
            "build-vs-buy-software-2026",
            "custom-crm-development-guide",
            "nextjs-stripe-integration-guide",
        ],
    },
    {
        slug: "macon-ga",
        cityName: "Macon",
        industries: ["construction", "healthcare", "e-commerce", "manufacturing"],
        topics: ["atlanta", "build-vs-buy", "crm"],
        pinned: [
            "atlanta-software-development-guide-2026",
            "custom-crm-development-guide",
            "build-vs-buy-software-2026",
        ],
    },
    {
        slug: "miami-fl",
        cityName: "Miami",
        industries: ["fintech", "e-commerce", "real-estate", "saas"],
        topics: ["stripe", "saas", "build-vs-buy"],
        pinned: [
            "nextjs-stripe-integration-guide",
            "stripe-connect-marketplace-architecture",
            "building-multi-tenant-saas-postgres-rls",
        ],
    },
    {
        slug: "nashville-tn",
        cityName: "Nashville",
        industries: ["healthcare", "saas", "e-commerce", "fintech"],
        topics: ["compliance", "saas", "build-vs-buy"],
        pinned: [
            "hipaa-compliant-saas-architecture",
            "build-vs-buy-software-2026",
            "custom-crm-development-guide",
        ],
    },
    {
        slug: "new-york-ny",
        cityName: "New York",
        industries: ["fintech", "saas", "insurance", "legal-services"],
        topics: ["compliance", "stack", "build-vs-buy"],
        pinned: [
            "soc2-pentest-prep-guide-2026",
            "building-multi-tenant-saas-postgres-rls",
            "build-vs-buy-software-2026",
        ],
    },
    {
        slug: "san-francisco-ca",
        cityName: "San Francisco",
        industries: ["saas", "fintech", "e-commerce", "healthcare"],
        topics: ["saas", "stack", "build-vs-buy"],
        pinned: [
            "nextjs-vs-remix-vs-sveltekit-2026",
            "building-multi-tenant-saas-postgres-rls",
            "internal-tools-platform-engineering-guide",
        ],
    },
    {
        slug: "savannah-ga",
        cityName: "Savannah",
        industries: ["e-commerce", "manufacturing", "saas", "real-estate"],
        topics: ["atlanta", "build-vs-buy", "stripe"],
        pinned: [
            "atlanta-software-development-guide-2026",
            "nextjs-stripe-integration-guide",
            "build-vs-buy-software-2026",
        ],
    },
    {
        slug: "seattle-wa",
        cityName: "Seattle",
        industries: ["saas", "fintech", "healthcare", "e-commerce"],
        topics: ["saas", "stack", "build-vs-buy"],
        pinned: [
            "building-multi-tenant-saas-postgres-rls",
            "nextjs-vs-remix-vs-sveltekit-2026",
            "build-vs-buy-software-2026",
        ],
    },
];

const IMPORT_ANCHOR = `import { ConsultationCTA } from "@/components/ConsultationCTA";`;
const IMPORT_INSERT = `import { ConsultationCTA } from "@/components/ConsultationCTA";\nimport { RelatedPosts } from "@/components/RelatedPosts";\nimport { RelatedIndustries } from "@/components/RelatedIndustries";`;

const RELATED_HEADING_ANCHOR = `                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services & nearby cities</h2>`;
const ANIMATED_OPEN = `                <AnimatedSection className="mb-16">\n`;

function relatedBlocks(city) {
    const industriesJson = JSON.stringify(city.industries);
    const topicsJson = JSON.stringify(city.topics);
    const pinnedJson = JSON.stringify(city.pinned);
    return `                <AnimatedSection className="mb-16">
                    <RelatedIndustries
                        industries={${industriesJson}}
                        heading="Industries we serve in ${city.cityName}"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={${topicsJson}}
                        pinned={${pinnedJson}}
                        heading="Reading for ${city.cityName} founders"
                    />
                </AnimatedSection>

`;
}

let changed = 0;
let skipped = 0;
const skippedSlugs = [];

for (const city of CITIES) {
    const path = resolve(ROOT, "src/app", `software-development-${city.slug}`, "page.tsx");
    let src;
    try {
        src = readFileSync(path, "utf8");
    } catch (e) {
        console.warn(`SKIP ${city.slug}: ${e.message}`);
        skipped++;
        skippedSlugs.push(city.slug);
        continue;
    }

    if (src.includes("@/components/RelatedPosts")) {
        skipped++;
        skippedSlugs.push(city.slug);
        continue;
    }
    if (!src.includes(IMPORT_ANCHOR)) {
        console.warn(`SKIP ${city.slug}: no ConsultationCTA import anchor`);
        skipped++;
        skippedSlugs.push(city.slug);
        continue;
    }
    if (!src.includes(RELATED_HEADING_ANCHOR)) {
        console.warn(`SKIP ${city.slug}: no Related services & nearby cities h2 anchor`);
        skipped++;
        skippedSlugs.push(city.slug);
        continue;
    }

    // Find AnimatedSection opening immediately before the Related heading.
    const h2Idx = src.indexOf(RELATED_HEADING_ANCHOR);
    const openIdx = src.lastIndexOf(ANIMATED_OPEN, h2Idx);
    if (openIdx === -1) {
        console.warn(`SKIP ${city.slug}: no AnimatedSection opener before Related heading`);
        skipped++;
        skippedSlugs.push(city.slug);
        continue;
    }

    let out = src.replace(IMPORT_ANCHOR, IMPORT_INSERT);
    // Re-locate after import edit.
    const h2IdxAfter = out.indexOf(RELATED_HEADING_ANCHOR);
    const openIdxAfter = out.lastIndexOf(ANIMATED_OPEN, h2IdxAfter);

    out = out.slice(0, openIdxAfter) + relatedBlocks(city) + out.slice(openIdxAfter);

    writeFileSync(path, out, "utf8");
    changed++;
    console.log(`wired ${city.slug}`);
}

console.log(`\nDone. Changed: ${changed}, Skipped: ${skipped}`);
if (skippedSlugs.length) console.log(`Skipped slugs: ${skippedSlugs.join(", ")}`);
