#!/usr/bin/env node
/**
 * Wire <RelatedPosts /> into the remaining spoke families: industries, vs
 * (comparison), calculators, and tools. These had decent inbound linking
 * already but few outbound to blog content, leaving them as crawl-equity
 * dead-ends. This script adds a topic-mapped related-posts grid right above
 * each page's existing bottom CTA.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

// Format: [dir, slug, topics[], optional heading, optional pinned[]]
const PAGES = [
    // Industries — topic = the relevant blog cluster for that vertical
    ["industries", "fintech", ["stripe", "compliance", "build-vs-buy"], "Fintech engineering & compliance reading", ["nextjs-stripe-integration-guide", "soc2-pentest-prep-guide-2026", "stripe-connect-marketplace-architecture"]],
    ["industries", "construction", ["crm", "build-vs-buy", "internal-tools"], "Construction software reading"],
    ["industries", "insurance", ["compliance", "saas", "build-vs-buy"], "Insurance software reading"],
    ["industries", "e-commerce", ["stripe", "saas", "stack"], "E-commerce engineering reading", ["nextjs-stripe-integration-guide", "stripe-connect-marketplace-architecture", "building-multi-tenant-saas-postgres-rls"]],
    ["industries", "healthcare", ["compliance", "saas"], "Healthcare SaaS reading", ["hipaa-compliant-saas-architecture", "soc2-pentest-prep-guide-2026", "building-multi-tenant-saas-postgres-rls"]],
    ["industries", "legal-services", ["compliance", "internal-tools", "saas"], "Legal-services software reading"],
    ["industries", "manufacturing", ["internal-tools", "build-vs-buy"], "Manufacturing software reading"],
    ["industries", "real-estate", ["crm", "build-vs-buy"], "Real-estate software reading"],
    ["industries", "saas", ["saas", "stack", "build-vs-buy"], "SaaS engineering reading", ["building-multi-tenant-saas-postgres-rls", "build-vs-buy-software-2026", "internal-tools-platform-engineering-guide"]],

    // /vs comparison pages — topic match per category
    ["vs", "big-4-pentest", ["pentest"], "Related security reading"],
    ["vs", "bubble-io", ["build-vs-buy", "stack"], "Related platform comparison reading"],
    ["vs", "hubspot", ["crm", "build-vs-buy"], "Related CRM comparison reading"],
    ["vs", "monday-com", ["internal-tools", "build-vs-buy"], "Related internal tools reading"],
    ["vs", "netsuite", ["build-vs-buy", "internal-tools"], "Related ERP & internal tools reading"],
    ["vs", "pipedrive", ["crm", "build-vs-buy"], "Related CRM comparison reading"],
    ["vs", "salesforce", ["crm", "build-vs-buy"], "Related CRM comparison reading", ["custom-crm-vs-salesforce-vs-hubspot-2026", "crm-migration-from-salesforce-checklist", "custom-crm-development-guide"]],
    ["vs", "shopify", ["stripe", "saas", "build-vs-buy"], "Related e-commerce reading"],
    ["vs", "toptal", ["build-vs-buy"], "Related dev-firm comparison reading"],
    ["vs", "upwork", ["build-vs-buy"], "Related dev-firm comparison reading"],
    ["vs", "webflow", ["stack", "build-vs-buy"], "Related platform comparison reading"],
    ["vs", "wordpress", ["stack", "build-vs-buy"], "Related platform comparison reading"],
    ["vs", "zoho", ["crm", "build-vs-buy"], "Related CRM comparison reading"],

    // Calculators — each tied to its pillar topic
    ["calculators", "build-vs-buy", ["build-vs-buy", "saas"], "Companion reading for the build-vs-buy calculator", ["build-vs-buy-software-2026", "custom-software-rfp-template-2026", "how-to-choose-a-software-development-company-checklist"]],
    ["calculators", "crm-roi", ["crm", "build-vs-buy"], "Companion reading for the CRM ROI calculator", ["custom-crm-development-guide", "custom-crm-vs-salesforce-vs-hubspot-2026", "crm-migration-from-salesforce-checklist"]],
    ["calculators", "pentest-cost", ["pentest"], "Companion reading for the pentest cost calculator", ["penetration-test-cost-2026", "what-is-penetration-testing", "soc2-pentest-prep-guide-2026"]],
    ["calculators", "stripe-cost", ["stripe"], "Companion reading for the Stripe cost calculator", ["nextjs-stripe-integration-guide", "stripe-connect-marketplace-architecture", "stripe-webhook-security-best-practices"]],

    // Tools — devtools / utilities
    ["tools", "cron-expression-builder", ["stack"], "Related engineering reading"],
    ["tools", "owasp-checklist-app", ["pentest"], "Related security reading"],
    ["tools", "schema-generator", ["stack"], "Related engineering reading"],
    ["tools", "stripe-webhook-tester", ["stripe", "stack"], "Related Stripe engineering reading"],
    ["tools", "uuid-and-id-generator", ["stack"], "Related engineering reading"],
];

const IMPORT_ANCHOR = `import { ConsultationCTA } from "@/components/ConsultationCTA";`;
const IMPORT_INSERT = `import { ConsultationCTA } from "@/components/ConsultationCTA";\nimport { RelatedPosts } from "@/components/RelatedPosts";`;

/**
 * These spoke families wrap their bottom CTA in <AnimatedSection> (no
 * className). Splice the RelatedPosts block right above it.
 */
const BOTTOM_CTA_ANCHOR_PATTERNS = [
    `                <AnimatedSection>\n                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">`,
    `            <AnimatedSection>\n                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">`,
    `                <AnimatedSection>\n                    <div className="rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 to-emerald-500/5 p-8 md:p-12 text-center">`,
];

function block(topics, heading, pinned, indent = "                ") {
    const topicsJson = JSON.stringify(topics);
    const pinnedAttr = pinned
        ? `${indent}        pinned={${JSON.stringify(pinned)}}\n`
        : "";
    return `${indent}<AnimatedSection className="mb-16">
${indent}    <RelatedPosts
${indent}        topics={${topicsJson}}
${indent}        heading="${heading}"
${pinnedAttr}${indent}    />
${indent}</AnimatedSection>

`;
}

let changed = 0;
let skipped = 0;
const skippedSlugs = [];

for (const entry of PAGES) {
    const [dir, slug, topics, heading, pinned] = entry;
    const path = resolve(ROOT, "src/app", dir, slug, "page.tsx");
    let src;
    try {
        src = readFileSync(path, "utf8");
    } catch (e) {
        console.warn(`SKIP ${dir}/${slug}: ${e.message}`);
        skipped++;
        skippedSlugs.push(`${dir}/${slug}`);
        continue;
    }

    if (src.includes("@/components/RelatedPosts")) {
        skipped++;
        skippedSlugs.push(`${dir}/${slug}`);
        continue;
    }
    if (!src.includes(IMPORT_ANCHOR)) {
        console.warn(`SKIP ${dir}/${slug}: no ConsultationCTA import anchor`);
        skipped++;
        skippedSlugs.push(`${dir}/${slug}`);
        continue;
    }

    let anchorPattern = null;
    let indent = "                ";
    for (const pat of BOTTOM_CTA_ANCHOR_PATTERNS) {
        if (src.includes(pat)) {
            anchorPattern = pat;
            indent = pat.startsWith("                <") ? "                " : "            ";
            break;
        }
    }
    if (!anchorPattern) {
        console.warn(`SKIP ${dir}/${slug}: no bottom CTA anchor`);
        skipped++;
        skippedSlugs.push(`${dir}/${slug}`);
        continue;
    }

    let out = src.replace(IMPORT_ANCHOR, IMPORT_INSERT);
    out = out.replace(anchorPattern, block(topics, heading || "Related reading", pinned, indent) + anchorPattern);

    writeFileSync(path, out, "utf8");
    changed++;
    console.log(`wired ${dir}/${slug}`);
}

console.log(`\nDone. Changed: ${changed}, Skipped: ${skipped}`);
if (skippedSlugs.length) console.log(`Skipped: ${skippedSlugs.join(", ")}`);
