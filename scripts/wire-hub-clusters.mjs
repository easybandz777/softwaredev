#!/usr/bin/env node
/**
 * Wire <TopicClusters /> into the /services hub and the homepage.
 * Idempotent: detects existing wiring and re-applies if missing.
 *
 * Also expands the /blog hub posts[] array to include every post in
 * src/app/blog/ — the previous hub only listed 5 posts even though 31 were
 * live, leaving 26 posts orphaned from the canonical blog index.
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

// ---------------------------------------------------------------------------
// Homepage: add TopicClusters import + section before <About />
// ---------------------------------------------------------------------------
function wireHomepage() {
    const p = resolve(ROOT, "src/app/page.tsx");
    let src = readFileSync(p, "utf8");
    let changed = false;

    if (!src.includes("@/components/TopicClusters")) {
        // Insert import after the Contact import (it appears in every revision).
        const anchor = `import { Contact } from "@/components/Contact";`;
        if (!src.includes(anchor)) {
            console.warn("homepage: skipped — no Contact import anchor");
            return false;
        }
        src = src.replace(
            anchor,
            `${anchor}\nimport { TopicClusters } from "@/components/TopicClusters";`,
        );
        changed = true;
    }

    if (!src.includes("<TopicClusters")) {
        const placement = `      <About />`;
        if (!src.includes(placement)) {
            console.warn("homepage: skipped — no <About /> anchor");
            return false;
        }
        src = src.replace(
            placement,
            `      <section className="container mx-auto px-6 py-16">
        <TopicClusters
          heading="Where to dig in next"
          intro="Five topic clusters covering almost every QUANT LAB conversation — each bundles a pillar service with the supporting deep-dive posts and calculators, so you can read a topic end to end in twenty minutes."
        />
      </section>
      <About />`,
        );
        changed = true;
    }

    if (changed) {
        writeFileSync(p, src, "utf8");
        console.log("homepage: wired TopicClusters");
    } else {
        console.log("homepage: already wired (no-op)");
    }
    return changed;
}

// ---------------------------------------------------------------------------
// /services hub: add TopicClusters import + section after cyber grid
// ---------------------------------------------------------------------------
function wireServicesHub() {
    const p = resolve(ROOT, "src/app/services/page.tsx");
    let src = readFileSync(p, "utf8");
    let changed = false;

    if (!src.includes("@/components/TopicClusters")) {
        const anchor = `import { ConsultationCTA } from "@/components/ConsultationCTA";`;
        if (!src.includes(anchor)) {
            console.warn("services hub: skipped — no ConsultationCTA import anchor");
            return false;
        }
        src = src.replace(
            anchor,
            `${anchor}\nimport { TopicClusters } from "@/components/TopicClusters";`,
        );
        changed = true;
    }

    if (!src.includes("<TopicClusters")) {
        // Two known cyber grid close patterns across revisions. Try each in order.
        const candidates = [
            `                <div className="mb-24">\n                    <ServiceGrid items={cyberAndPentest} />\n                </div>`,
            `                <div className="mb-20">\n                    <ServiceGrid items={cyberAndPentest} />\n                </div>`,
        ];
        let inserted = false;
        for (const anchor of candidates) {
            if (src.includes(anchor)) {
                src = src.replace(
                    anchor,
                    `${anchor}\n\n                {/* Topic clusters — hub-and-spoke navigation by buyer intent */}\n                <AnimatedSection className="mb-24">\n                    <div className="border-t border-white/5 pt-16">\n                        <TopicClusters\n                            heading="Pick a cluster, not a single service"\n                            intro="Most QUANT LAB engagements span three or four pages of this site — a service, a comparison, a blog deep-dive, and a calculator. These five clusters bundle the pages that go together, so you can read the whole topic in a sitting."\n                        />\n                    </div>\n                </AnimatedSection>`,
                );
                inserted = true;
                changed = true;
                break;
            }
        }
        if (!inserted) {
            console.warn("services hub: skipped — no cyber grid anchor matched");
            return false;
        }
    }

    if (changed) {
        writeFileSync(p, src, "utf8");
        console.log("services hub: wired TopicClusters");
    } else {
        console.log("services hub: already wired (no-op)");
    }
    return changed;
}

// ---------------------------------------------------------------------------
// /blog hub: expand posts[] to cover every post in src/app/blog/
// ---------------------------------------------------------------------------
function expandBlogHub() {
    const blogDir = resolve(ROOT, "src/app/blog");
    const allSlugs = readdirSync(blogDir).filter((d) => {
        const dir = resolve(blogDir, d);
        try {
            return statSync(dir).isDirectory();
        } catch {
            return false;
        }
    });

    const p = resolve(ROOT, "src/app/blog/page.tsx");
    let src = readFileSync(p, "utf8");
    const listed = Array.from(src.matchAll(/slug:\s*"([^"]+)"/g)).map((m) => m[1]);
    const missing = allSlugs.filter((s) => !listed.includes(s));

    if (missing.length === 0) {
        console.log(`blog hub: all ${allSlugs.length} posts already listed`);
        return false;
    }

    // Per-post catalog used for the missing entries. Same data the RelatedPosts
    // registry uses so the hub never drifts from the topic mapping.
    const CATALOG = {
        "2026-state-of-custom-software-development": { title: "2026 State of Custom Software Development", category: "Software", excerpt: "Industry-wide pricing, timeline, and engagement-model benchmarks heading into 2026.", readMinutes: 13 },
        "best-custom-software-development-companies-atlanta-2026": { title: "Best Custom Software Development Companies in Atlanta (2026)", category: "Local", excerpt: "Senior-shop shortlist for Atlanta founders — who builds what, pricing tiers, and the vertical specialization each firm leans on.", readMinutes: 11 },
        "best-penetration-testing-companies-georgia-2026": { title: "Best Penetration Testing Companies in Georgia (2026)", category: "Cybersecurity", excerpt: "Georgia-based pentest providers compared by methodology, reporting depth, SOC 2 alignment, and price.", readMinutes: 12 },
        "building-multi-tenant-saas-postgres-rls": { title: "Building Multi-Tenant SaaS on Postgres RLS", category: "Software", excerpt: "Row-level security patterns for isolating tenant data without spinning up separate databases per customer.", readMinutes: 13 },
        "crm-data-migration-from-spreadsheets": { title: "CRM Data Migration from Spreadsheets", category: "Software", excerpt: "How to move messy spreadsheet pipelines into a real CRM without losing notes, history, or trust.", readMinutes: 11 },
        "crm-migration-from-salesforce-checklist": { title: "CRM Migration from Salesforce Checklist", category: "Software", excerpt: "Step-by-step plan for moving off Salesforce to a custom system without losing pipeline history.", readMinutes: 12 },
        "custom-crm-development-guide": { title: "Custom CRM Development Guide", category: "Software", excerpt: "When custom CRM beats Salesforce, HubSpot, and Zoho — and what the build actually looks like end to end.", readMinutes: 14 },
        "custom-crm-vs-salesforce-vs-hubspot-2026": { title: "Custom CRM vs Salesforce vs HubSpot (2026)", category: "Software", excerpt: "Head-to-head TCO and capability comparison for mid-market sales teams choosing a CRM in 2026.", readMinutes: 13 },
        "custom-internal-tools-vs-retool-2026": { title: "Custom Internal Tools vs Retool (2026)", category: "Software", excerpt: "Where Retool wins, where it caps your team, and when to write a real Next.js app instead.", readMinutes: 11 },
        "custom-software-rfp-template-2026": { title: "Custom Software RFP Template (2026)", category: "Software", excerpt: "A reusable RFP template plus the questions every founder forgets to ask before signing an SOW.", readMinutes: 12 },
        "cybersecurity-services-for-saas-startups-2026": { title: "Cybersecurity Services for SaaS Startups (2026)", category: "Cybersecurity", excerpt: "What security work a SaaS founder actually needs in years 1-3 — and what to skip until you have customers worth attacking.", readMinutes: 12 },
        "dedicated-development-team-vs-agency": { title: "Dedicated Development Team vs Agency", category: "Software", excerpt: "Engagement-model trade-offs when scaling a software bench past the founder-led phase.", readMinutes: 10 },
        "hipaa-compliant-saas-architecture": { title: "HIPAA-Compliant SaaS Architecture", category: "Cybersecurity", excerpt: "BAA-eligible cloud, encrypted PHI flows, and audit-friendly logging patterns for healthcare SaaS.", readMinutes: 14 },
        "hire-fractional-cto-vs-software-firm": { title: "Hire a Fractional CTO vs a Software Firm", category: "Software", excerpt: "When each engagement model fits — and the hybrid that often beats both for early-stage teams.", readMinutes: 10 },
        "how-to-choose-a-software-development-company-checklist": { title: "How to Choose a Software Development Company (Checklist)", category: "Software", excerpt: "A founder-focused checklist for vetting senior software firms before you write the deposit check.", readMinutes: 11 },
        "internal-tools-platform-engineering-guide": { title: "Internal Tools Platform Engineering Guide", category: "Software", excerpt: "Architectural patterns for ops dashboards, admin panels, and back-office UIs that don't rot in year two.", readMinutes: 11 },
        "nextjs-vs-remix-vs-sveltekit-2026": { title: "Next.js vs Remix vs SvelteKit (2026)", category: "Software", excerpt: "Framework selection criteria for production web apps — runtime, ecosystem, deployment, and team factors.", readMinutes: 12 },
        "pci-dss-compliance-saas-checklist": { title: "PCI-DSS Compliance for SaaS Checklist", category: "Cybersecurity", excerpt: "What PCI scope reduction looks like when you route payments through Stripe — plus the controls that still apply.", readMinutes: 12 },
        "penetration-test-cost-2026": { title: "Penetration Test Cost (2026)", category: "Cybersecurity", excerpt: "Real pricing benchmarks for web app, network, AD, and red team engagements — plus what drives the spread.", readMinutes: 11 },
        "red-team-vs-pen-test-vs-audit": { title: "Red Team vs Pen Test vs Audit", category: "Cybersecurity", excerpt: "Three engagement types, three buyer profiles, and when each one is the right call.", readMinutes: 10 },
        "soc2-pentest-prep-guide-2026": { title: "SOC 2 Pentest Prep Guide (2026)", category: "Cybersecurity", excerpt: "Pre-audit pentesting that maps cleanly to SOC 2 CC controls — scoped, sequenced, and report-ready.", readMinutes: 11 },
        "software-development-contract-redlines": { title: "Software Development Contract Redlines", category: "Software", excerpt: "Clauses every founder should push back on in an SOW or MSA — IP, indemnification, source escrow, and acceptance.", readMinutes: 12 },
        "stripe-connect-marketplace-architecture": { title: "Stripe Connect Marketplace Architecture", category: "Software", excerpt: "Account types, fund flows, and reconciliation for multi-party payments built on Stripe Connect.", readMinutes: 12 },
        "stripe-webhook-security-best-practices": { title: "Stripe Webhook Security Best Practices", category: "Software", excerpt: "Idempotency, signature verification, retries, and dead-letter handling for production Stripe webhook handlers.", readMinutes: 11 },
        "vcs-vcio-vs-software-development-firm": { title: "vCISO / vCIO vs a Software Development Firm", category: "Cybersecurity", excerpt: "Where security leadership stops and software delivery begins — and the hybrid most fast-moving teams actually need.", readMinutes: 10 },
        "what-is-a-pen-test-vs-vulnerability-scan": { title: "What Is a Pen Test vs a Vulnerability Scan", category: "Cybersecurity", excerpt: "Two very different security activities that get sold under the same label — and what each actually does for you.", readMinutes: 9 },
    };

    const newEntries = [];
    for (const slug of missing) {
        const meta = CATALOG[slug];
        if (!meta) {
            console.warn(`blog hub: no catalog entry for ${slug}, skipping`);
            continue;
        }
        const safeTitle = meta.title.replace(/"/g, '\\"');
        const safeExcerpt = meta.excerpt.replace(/"/g, '\\"');
        newEntries.push(`    {
        slug: "${slug}",
        title: "${safeTitle}",
        excerpt:
            "${safeExcerpt}",
        category: "${meta.category}",
        date: "2026-05-12",
        readMinutes: ${meta.readMinutes},
    },`);
    }

    if (newEntries.length === 0) {
        console.log(`blog hub: no catalog matches for ${missing.length} missing slugs`);
        return false;
    }

    // Find the closing of the posts array and insert just before it.
    // Pattern: array ends with `    },\n];` (last entry comma + bracket).
    const closeAnchor = `    },\n];`;
    const closeIdx = src.indexOf(closeAnchor);
    if (closeIdx === -1) {
        console.warn("blog hub: skipped — no posts[] close anchor");
        return false;
    }

    const before = src.slice(0, closeIdx + `    },\n`.length);
    const after = src.slice(closeIdx + `    },\n`.length);
    src = before + newEntries.join("\n") + "\n" + after;

    writeFileSync(p, src, "utf8");
    console.log(`blog hub: appended ${newEntries.length} missing posts`);
    return true;
}

wireHomepage();
wireServicesHub();
expandBlogHub();
