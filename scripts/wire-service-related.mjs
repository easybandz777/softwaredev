#!/usr/bin/env node
/**
 * Wire <RelatedPosts /> into every service page directly above the existing
 * "Related services" grid. Builds the hub-and-spoke loop services <-> blog,
 * which previously had to be discovered via the navbar mega-menu only.
 *
 * Each service maps to 1-3 blog topics. Output is a 3-card grid surfaced
 * right before the in-cluster service grid the page already renders.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const SERVICES = [
    { slug: "active-directory-pentest", topics: ["pentest"], heading: "Pentest reading by topic" },
    { slug: "ai-integration-services", topics: ["stack", "saas"], heading: "Engineering reading" },
    { slug: "algorithmic-trading-systems", topics: ["stack", "build-vs-buy"], heading: "Engineering & build-vs-buy reading" },
    { slug: "api-development", topics: ["stack"], heading: "API & stack reading" },
    { slug: "cloud-infrastructure", topics: ["stack"], heading: "Infrastructure reading" },
    { slug: "custom-business-software", topics: ["build-vs-buy", "internal-tools"], heading: "Custom software reading", pinned: ["build-vs-buy-software-2026", "custom-internal-tools-vs-retool-2026", "internal-tools-platform-engineering-guide"] },
    { slug: "custom-crm-development", topics: ["crm", "build-vs-buy"], heading: "Custom CRM deep-dives", pinned: ["custom-crm-development-guide", "custom-crm-vs-salesforce-vs-hubspot-2026", "crm-migration-from-salesforce-checklist"] },
    { slug: "devops-engineering", topics: ["stack"], heading: "DevOps & stack reading" },
    { slug: "ecommerce-development", topics: ["stripe", "stack"], heading: "E-commerce engineering reading" },
    { slug: "license-server", topics: ["stripe", "build-vs-buy"], heading: "Stripe + licensing reading" },
    { slug: "mitre-attack-assessment", topics: ["pentest"], heading: "Red team reading", pinned: ["what-is-mitre-attack-framework", "red-team-vs-pen-test-vs-audit", "what-is-penetration-testing"] },
    { slug: "mobile-app-development", topics: ["stack", "saas"], heading: "Engineering reading" },
    { slug: "network-pentest", topics: ["pentest"], heading: "Network pentest reading" },
    { slug: "payments-invoicing-licensing", topics: ["stripe"], heading: "Stripe + payments reading", pinned: ["nextjs-stripe-integration-guide", "stripe-webhook-security-best-practices", "stripe-connect-marketplace-architecture"] },
    { slug: "penetration-testing", topics: ["pentest"], heading: "Pentest buyer reading", pinned: ["what-is-penetration-testing", "penetration-test-cost-2026", "soc2-pentest-prep-guide-2026"] },
    { slug: "saas-platform-development", topics: ["saas", "stack", "build-vs-buy"], heading: "SaaS engineering reading", pinned: ["building-multi-tenant-saas-postgres-rls", "build-vs-buy-software-2026", "hipaa-compliant-saas-architecture"] },
    { slug: "stripe-integration", topics: ["stripe", "stack"], heading: "Stripe engineering reading", pinned: ["nextjs-stripe-integration-guide", "stripe-webhook-security-best-practices", "pci-dss-compliance-saas-checklist"] },
    { slug: "subscription-billing", topics: ["stripe"], heading: "Subscription & billing reading", pinned: ["nextjs-stripe-integration-guide", "stripe-connect-marketplace-architecture", "pci-dss-compliance-saas-checklist"] },
    { slug: "web-app-pentest", topics: ["pentest"], heading: "Web app pentest reading" },
    { slug: "web-applications", topics: ["stack", "saas"], heading: "Next.js engineering reading", pinned: ["nextjs-vs-remix-vs-sveltekit-2026", "building-multi-tenant-saas-postgres-rls", "internal-tools-platform-engineering-guide"] },
];

const IMPORT_ANCHOR = `import { ConsultationCTA } from "@/components/ConsultationCTA";`;
const IMPORT_INSERT = `import { ConsultationCTA } from "@/components/ConsultationCTA";\nimport { RelatedPosts } from "@/components/RelatedPosts";`;

const RELATED_SERVICES_H2 = `                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services</h2>`;

function relatedPostsBlock(svc) {
    const topicsJson = JSON.stringify(svc.topics);
    const pinnedAttr = svc.pinned ? `                        pinned={${JSON.stringify(svc.pinned)}}\n` : "";
    return `                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={${topicsJson}}
                        heading="${svc.heading}"
${pinnedAttr}                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
${RELATED_SERVICES_H2}`;
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

    if (src.includes("@/components/RelatedPosts")) {
        skipped++;
        skippedSlugs.push(svc.slug);
        continue;
    }

    if (!src.includes(IMPORT_ANCHOR)) {
        console.warn(`SKIP ${svc.slug}: no ConsultationCTA import anchor`);
        skipped++;
        skippedSlugs.push(svc.slug);
        continue;
    }

    if (!src.includes(RELATED_SERVICES_H2)) {
        console.warn(`SKIP ${svc.slug}: no Related services h2 anchor`);
        skipped++;
        skippedSlugs.push(svc.slug);
        continue;
    }

    // Anchor for replacement: the AnimatedSection that wraps the Related services h2.
    // We need to find the opening "<AnimatedSection className=\"mb-16\">" immediately
    // preceding the Related services h2.
    const h2Idx = src.indexOf(RELATED_SERVICES_H2);
    const openTag = `                <AnimatedSection className="mb-16">\n`;
    const openIdx = src.lastIndexOf(openTag, h2Idx);
    if (openIdx === -1) {
        console.warn(`SKIP ${svc.slug}: cannot find opening AnimatedSection before Related services h2`);
        skipped++;
        skippedSlugs.push(svc.slug);
        continue;
    }

    let out = src.replace(IMPORT_ANCHOR, IMPORT_INSERT);
    // Re-find anchor after import edit (offsets shifted by exactly the inserted import length).
    const newOpenIdx = out.indexOf(openTag, openIdx);
    const block = relatedPostsBlock(svc);
    // Replace just the opening tag with our block (which itself reopens AnimatedSection + h2 + Related services).
    out =
        out.slice(0, newOpenIdx) +
        block +
        "\n" +
        out.slice(newOpenIdx + openTag.length + RELATED_SERVICES_H2.length + 1);

    writeFileSync(path, out, "utf8");
    changed++;
    console.log(`wired ${svc.slug}`);
}

console.log(`\nDone. Changed: ${changed}, Skipped: ${skipped}`);
if (skippedSlugs.length) console.log(`Skipped slugs: ${skippedSlugs.join(", ")}`);
