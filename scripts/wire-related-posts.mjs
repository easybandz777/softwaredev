#!/usr/bin/env node
/**
 * One-shot maintenance script: wire <RelatedPosts /> into every blog post
 * that ends with the shared "All blog posts" footer pattern, and into the
 * `</article>` close pattern for the older posts. Idempotent — skips files
 * that already import RelatedPosts.
 *
 * After this runs, every blog post has a topical related-reading grid before
 * its closing footer, removing dead-end posts and recirculating crawl
 * equity through the topic clusters.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

/**
 * Per-post topic assignments. `pinned` overrides ranking with curated picks
 * for high-intent posts (e.g. Atlanta posts pin Atlanta-cluster siblings).
 */
const POSTS = [
    {
        slug: "2026-state-of-custom-software-development",
        topics: ["build-vs-buy", "saas"],
        heading: "Continue the 2026 state-of-software series",
    },
    {
        slug: "atlanta-software-development-guide-2026",
        topics: ["atlanta", "build-vs-buy"],
        heading: "More Atlanta software intel",
        pinned: [
            "best-custom-software-development-companies-atlanta-2026",
            "best-penetration-testing-companies-georgia-2026",
            "how-to-choose-a-software-development-company-checklist",
        ],
    },
    {
        slug: "best-custom-software-development-companies-atlanta-2026",
        topics: ["atlanta", "build-vs-buy"],
        heading: "More Atlanta software intel",
        pinned: [
            "atlanta-software-development-guide-2026",
            "best-penetration-testing-companies-georgia-2026",
            "how-to-choose-a-software-development-company-checklist",
        ],
    },
    {
        slug: "best-penetration-testing-companies-georgia-2026",
        topics: ["pentest", "atlanta"],
        heading: "More Georgia security reading",
        pinned: [
            "penetration-test-cost-2026",
            "soc2-pentest-prep-guide-2026",
            "what-is-penetration-testing",
        ],
    },
    {
        slug: "build-vs-buy-software-2026",
        topics: ["build-vs-buy", "saas"],
        heading: "Related build vs buy reading",
    },
    {
        slug: "building-multi-tenant-saas-postgres-rls",
        topics: ["saas", "stack"],
        heading: "More SaaS engineering reading",
    },
    {
        slug: "crm-data-migration-from-spreadsheets",
        topics: ["crm"],
        heading: "More custom CRM reading",
    },
    {
        slug: "crm-migration-from-salesforce-checklist",
        topics: ["crm", "build-vs-buy"],
        heading: "More custom CRM reading",
        pinned: [
            "custom-crm-development-guide",
            "custom-crm-vs-salesforce-vs-hubspot-2026",
            "crm-data-migration-from-spreadsheets",
        ],
    },
    {
        slug: "custom-crm-development-guide",
        topics: ["crm", "build-vs-buy"],
        heading: "Continue the custom CRM series",
    },
    {
        slug: "custom-crm-vs-salesforce-vs-hubspot-2026",
        topics: ["crm", "build-vs-buy"],
        heading: "More custom CRM reading",
    },
    {
        slug: "custom-internal-tools-vs-retool-2026",
        topics: ["internal-tools", "build-vs-buy"],
        heading: "More internal tools reading",
    },
    {
        slug: "custom-software-rfp-template-2026",
        topics: ["build-vs-buy"],
        heading: "More buyer-side reading",
    },
    {
        slug: "cybersecurity-services-for-saas-startups-2026",
        topics: ["pentest", "compliance", "saas"],
        heading: "More SaaS security reading",
    },
    {
        slug: "dedicated-development-team-vs-agency",
        topics: ["build-vs-buy"],
        heading: "More engagement-model reading",
    },
    {
        slug: "hipaa-compliant-saas-architecture",
        topics: ["compliance", "saas"],
        heading: "More compliance + architecture reading",
    },
    {
        slug: "hire-fractional-cto-vs-software-firm",
        topics: ["build-vs-buy"],
        heading: "More buyer-side reading",
    },
    {
        slug: "how-to-choose-a-software-development-company-checklist",
        topics: ["build-vs-buy"],
        heading: "More buyer-side reading",
    },
    {
        slug: "internal-tools-platform-engineering-guide",
        topics: ["internal-tools", "stack"],
        heading: "More internal tools reading",
    },
    {
        slug: "nextjs-stripe-integration-guide",
        topics: ["stripe", "stack"],
        heading: "More Stripe engineering reading",
    },
    {
        slug: "nextjs-vs-remix-vs-sveltekit-2026",
        topics: ["stack"],
        heading: "More framework + stack reading",
    },
    {
        slug: "pci-dss-compliance-saas-checklist",
        topics: ["compliance", "stripe", "saas"],
        heading: "More compliance + payments reading",
    },
    {
        slug: "penetration-test-cost-2026",
        topics: ["pentest"],
        heading: "More pentest buyer reading",
    },
    {
        slug: "red-team-vs-pen-test-vs-audit",
        topics: ["pentest", "compliance"],
        heading: "More red team + pentest reading",
    },
    {
        slug: "soc2-pentest-prep-guide-2026",
        topics: ["compliance", "pentest"],
        heading: "More SOC 2 prep reading",
    },
    {
        slug: "software-development-contract-redlines",
        topics: ["build-vs-buy"],
        heading: "More buyer-side reading",
    },
    {
        slug: "stripe-connect-marketplace-architecture",
        topics: ["stripe", "stack"],
        heading: "More Stripe engineering reading",
    },
    {
        slug: "stripe-webhook-security-best-practices",
        topics: ["stripe", "stack"],
        heading: "More Stripe engineering reading",
    },
    {
        slug: "vcs-vcio-vs-software-development-firm",
        topics: ["pentest", "build-vs-buy"],
        heading: "More buyer-side security reading",
    },
    {
        slug: "what-is-a-pen-test-vs-vulnerability-scan",
        topics: ["pentest"],
        heading: "More pentest reading",
    },
    {
        slug: "what-is-mitre-attack-framework",
        topics: ["pentest"],
        heading: "More red team + ATT&CK reading",
    },
    {
        slug: "what-is-penetration-testing",
        topics: ["pentest"],
        heading: "More pentest reading",
    },
];

const ALL_POSTS_FOOTER = `                <AnimatedSection className="mt-12">
                    <div className="flex items-center justify-between text-sm text-gray-400">
                        <Link href="/blog" className="hover:text-sky-400 inline-flex items-center gap-1">
                            <ArrowRight className="w-3 h-3 rotate-180" /> All blog posts
                        </Link>
                        <span>Updated May 12, 2026</span>
                    </div>
                </AnimatedSection>`;

function relatedPostsJsx(post) {
    const topicsJson = JSON.stringify(post.topics);
    const pinnedJson = post.pinned ? JSON.stringify(post.pinned) : null;
    const headingAttr = post.heading ? `                        heading="${post.heading}"\n` : "";
    const pinnedAttr = pinnedJson ? `                        pinned={${pinnedJson}}\n` : "";
    return `                <AnimatedSection className="mt-16 mb-12">
                    <RelatedPosts
                        currentSlug="${post.slug}"
                        topics={${topicsJson}}
${headingAttr}${pinnedAttr}                    />
                </AnimatedSection>

`;
}

const IMPORT_ANCHOR = `import { ConsultationCTA } from "@/components/ConsultationCTA";`;
const IMPORT_INSERT = `import { ConsultationCTA } from "@/components/ConsultationCTA";\nimport { RelatedPosts } from "@/components/RelatedPosts";`;

let changed = 0;
let skipped = 0;
const skippedSlugs = [];

for (const post of POSTS) {
    const path = resolve(ROOT, "src/app/blog", post.slug, "page.tsx");
    let src;
    try {
        src = readFileSync(path, "utf8");
    } catch (e) {
        console.warn(`SKIP ${post.slug}: ${e.message}`);
        skipped++;
        skippedSlugs.push(post.slug);
        continue;
    }

    if (src.includes("@/components/RelatedPosts")) {
        skipped++;
        skippedSlugs.push(post.slug);
        continue;
    }

    if (!src.includes(IMPORT_ANCHOR)) {
        console.warn(`SKIP ${post.slug}: no ConsultationCTA import anchor`);
        skipped++;
        skippedSlugs.push(post.slug);
        continue;
    }

    let out = src.replace(IMPORT_ANCHOR, IMPORT_INSERT);
    const jsx = relatedPostsJsx(post);

    if (out.includes(ALL_POSTS_FOOTER)) {
        out = out.replace(ALL_POSTS_FOOTER, jsx + ALL_POSTS_FOOTER);
    } else if (out.includes("            </article>")) {
        // Older posts have an <article> close before </main>; splice right before it.
        out = out.replace("            </article>", jsx + "            </article>");
    } else {
        console.warn(`SKIP ${post.slug}: no recognized footer anchor`);
        skipped++;
        skippedSlugs.push(post.slug);
        continue;
    }

    writeFileSync(path, out, "utf8");
    changed++;
    console.log(`wired ${post.slug}`);
}

console.log(`\nDone. Changed: ${changed}, Skipped: ${skipped}`);
if (skippedSlugs.length) console.log(`Skipped slugs: ${skippedSlugs.join(", ")}`);
