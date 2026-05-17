#!/usr/bin/env node
/**
 * Wire <RelatedPosts /> into every glossary term page directly BEFORE the
 * "Related terms" heading. Each term maps to 1-3 blog topics so the related
 * posts shown line up with how the term is actually used in long-form posts.
 *
 * This closes the glossary -> blog gap (most glossary terms had 0 outbound
 * links to /blog before this).
 */
import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const TERMS = [
    { slug: "what-is-a-crm", topics: ["crm"] },
    { slug: "what-is-a-data-warehouse", topics: ["stack", "saas"] },
    { slug: "what-is-a-monorepo", topics: ["stack"] },
    { slug: "what-is-a-red-team", topics: ["pentest"] },
    { slug: "what-is-a-tech-stack", topics: ["stack"] },
    { slug: "what-is-a-web-app-firewall", topics: ["pentest", "compliance"] },
    { slug: "what-is-active-directory", topics: ["pentest"] },
    { slug: "what-is-an-api", topics: ["stack"] },
    { slug: "what-is-an-iam", topics: ["compliance", "pentest"] },
    { slug: "what-is-an-jwt", topics: ["stack"] },
    { slug: "what-is-an-mvp", topics: ["build-vs-buy", "saas"] },
    { slug: "what-is-an-soc-2-report", topics: ["compliance", "pentest"] },
    { slug: "what-is-blue-green-deployment", topics: ["stack"] },
    { slug: "what-is-cqrs", topics: ["stack"] },
    { slug: "what-is-domain-driven-design", topics: ["stack"] },
    { slug: "what-is-event-sourcing", topics: ["stack"] },
    { slug: "what-is-feature-flagging", topics: ["stack", "saas"] },
    { slug: "what-is-fido2", topics: ["compliance"] },
    { slug: "what-is-hipaa-compliance", topics: ["compliance", "saas"] },
    { slug: "what-is-jamstack", topics: ["stack"] },
    { slug: "what-is-microservices-architecture", topics: ["stack", "saas"] },
    { slug: "what-is-mitre-attack", topics: ["pentest"] },
    { slug: "what-is-multi-tenant-saas", topics: ["saas", "stack"] },
    { slug: "what-is-nextjs", topics: ["stack"] },
    { slug: "what-is-oauth2", topics: ["compliance", "stack"] },
    { slug: "what-is-owasp-top-10", topics: ["pentest"] },
    { slug: "what-is-passkey-authentication", topics: ["compliance"] },
    { slug: "what-is-pci-dss", topics: ["compliance", "stripe"] },
    { slug: "what-is-penetration-testing", topics: ["pentest"] },
    { slug: "what-is-product-led-growth", topics: ["saas", "build-vs-buy"] },
    { slug: "what-is-rest-vs-graphql", topics: ["stack"] },
    { slug: "what-is-saas", topics: ["saas"] },
    { slug: "what-is-saml-sso", topics: ["compliance"] },
    { slug: "what-is-secrets-management", topics: ["compliance", "stack"] },
    { slug: "what-is-server-side-rendering", topics: ["stack"] },
    { slug: "what-is-soc-2", topics: ["compliance", "pentest"] },
    { slug: "what-is-webhooks", topics: ["stripe", "stack"] },
    { slug: "what-is-zero-knowledge-architecture", topics: ["compliance", "stack"] },
    { slug: "what-is-zero-trust", topics: ["compliance", "pentest"] },
    { slug: "what-is-zero-trust-network-access", topics: ["compliance", "pentest"] },
];

const IMPORT_ANCHOR = `import { ConsultationCTA } from "@/components/ConsultationCTA";`;
const IMPORT_INSERT = `import { ConsultationCTA } from "@/components/ConsultationCTA";\nimport { RelatedPosts } from "@/components/RelatedPosts";`;
const RELATED_TERMS_H2 = `<h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>`;
// Glossary uses 3-card layout, so default RelatedPosts max=3 fits naturally.

function relatedPostsBlock(term) {
    const topicsJson = JSON.stringify(term.topics);
    return `                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        topics={${topicsJson}}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

`;
}

let changed = 0;
let skipped = 0;
const skippedSlugs = [];

for (const term of TERMS) {
    const path = resolve(ROOT, "src/app/glossary", term.slug, "page.tsx");
    let src;
    try {
        src = readFileSync(path, "utf8");
    } catch (e) {
        console.warn(`SKIP ${term.slug}: ${e.message}`);
        skipped++;
        skippedSlugs.push(term.slug);
        continue;
    }

    if (src.includes("@/components/RelatedPosts")) {
        skipped++;
        skippedSlugs.push(term.slug);
        continue;
    }

    if (!src.includes(IMPORT_ANCHOR)) {
        console.warn(`SKIP ${term.slug}: no ConsultationCTA import anchor`);
        skipped++;
        skippedSlugs.push(term.slug);
        continue;
    }

    if (!src.includes(RELATED_TERMS_H2)) {
        console.warn(`SKIP ${term.slug}: no Related terms h2 anchor`);
        skipped++;
        skippedSlugs.push(term.slug);
        continue;
    }

    // Find the AnimatedSection that wraps the Related terms h2 and splice block before it.
    const h2Idx = src.indexOf(RELATED_TERMS_H2);
    // Look up to find the preceding <AnimatedSection block opening.
    const openTagPattern = /<AnimatedSection className="mb-10">\n/g;
    let openIdx = -1;
    let lastMatchEnd = -1;
    openTagPattern.lastIndex = 0;
    let m;
    while ((m = openTagPattern.exec(src)) !== null) {
        if (m.index < h2Idx) {
            openIdx = m.index;
            lastMatchEnd = m.index + m[0].length;
        } else {
            break;
        }
    }
    if (openIdx === -1) {
        console.warn(`SKIP ${term.slug}: cannot find AnimatedSection opening before Related terms h2`);
        skipped++;
        skippedSlugs.push(term.slug);
        continue;
    }

    let out = src.replace(IMPORT_ANCHOR, IMPORT_INSERT);
    // Re-find opening index after import shift (the import insert adds exactly N chars; safer to search again).
    let newOpenIdx = -1;
    openTagPattern.lastIndex = 0;
    const h2IdxAfter = out.indexOf(RELATED_TERMS_H2);
    while ((m = openTagPattern.exec(out)) !== null) {
        if (m.index < h2IdxAfter) {
            newOpenIdx = m.index;
        } else {
            break;
        }
    }
    if (newOpenIdx === -1) {
        console.warn(`SKIP ${term.slug}: cannot relocate AnimatedSection opening after import edit`);
        skipped++;
        skippedSlugs.push(term.slug);
        continue;
    }

    out = out.slice(0, newOpenIdx) + relatedPostsBlock(term) + "                " + out.slice(newOpenIdx);

    writeFileSync(path, out, "utf8");
    changed++;
    console.log(`wired ${term.slug}`);
}

console.log(`\nDone. Changed: ${changed}, Skipped: ${skipped}`);
if (skippedSlugs.length) console.log(`Skipped slugs: ${skippedSlugs.join(", ")}`);
