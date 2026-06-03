import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export type BlogTopic =
    | "crm"
    | "stripe"
    | "pentest"
    | "compliance"
    | "atlanta"
    | "stack"
    | "build-vs-buy"
    | "internal-tools"
    | "saas";

type PostEntry = {
    slug: string;
    title: string;
    blurb: string;
    topics: BlogTopic[];
};

/**
 * Authoritative registry of every blog post on the site. When a new post is
 * added under src/app/blog/<slug>/page.tsx, add an entry here so RelatedPosts
 * can surface it across other posts, service pages, and glossary terms.
 */
export const BLOG_POSTS: PostEntry[] = [
    {
        slug: "2026-state-of-custom-software-development",
        title: "2026 State of Custom Software Development",
        blurb: "Industry-wide pricing, timelines, and engagement-model benchmarks for the year ahead.",
        topics: ["build-vs-buy", "saas"],
    },
    {
        slug: "api-security-best-practices-2026",
        title: "API Security Best Practices (2026)",
        blurb: "Auth, rate limiting, input validation, secrets, and the OWASP API Top 10.",
        topics: ["pentest", "stack"],
    },
    {
        slug: "atlanta-software-development-guide-2026",
        title: "Atlanta Software Development: A Founder's 2026 Guide",
        blurb: "Tech scene, local-shop pricing, vertical strengths, and an interview checklist.",
        topics: ["atlanta", "build-vs-buy"],
    },
    {
        slug: "best-custom-software-development-companies-atlanta-2026",
        title: "Best Custom Software Development Companies in Atlanta (2026)",
        blurb: "Comparison guide for Atlanta buyers shortlisting senior shops.",
        topics: ["atlanta"],
    },
    {
        slug: "best-penetration-testing-companies-georgia-2026",
        title: "Best Penetration Testing Companies in Georgia (2026)",
        blurb: "Georgia-based pentest providers, what they actually deliver, and how to choose.",
        topics: ["pentest", "atlanta"],
    },
    {
        slug: "build-vs-buy-software-2026",
        title: "Build vs Buy Software: A 2026 Decision Framework",
        blurb: "Three-year TCO math, the 80/20 rule, and a 12-question checklist.",
        topics: ["build-vs-buy", "saas"],
    },
    {
        slug: "building-multi-tenant-saas-postgres-rls",
        title: "Building Multi-Tenant SaaS on Postgres RLS",
        blurb: "Row-level security patterns for isolating tenant data without separate databases.",
        topics: ["saas", "stack"],
    },
    {
        slug: "ccpa-vs-gdpr-for-saas-2026",
        title: "CCPA vs GDPR for SaaS (2026)",
        blurb: "How the two privacy regimes differ and the controls you build once to satisfy both.",
        topics: ["compliance"],
    },
    {
        slug: "crm-data-migration-from-spreadsheets",
        title: "CRM Data Migration from Spreadsheets",
        blurb: "How to move messy spreadsheet pipelines into a real CRM without losing history.",
        topics: ["crm"],
    },
    {
        slug: "crm-migration-from-salesforce-checklist",
        title: "CRM Migration from Salesforce Checklist",
        blurb: "Step-by-step plan for moving off Salesforce to a custom system.",
        topics: ["crm", "build-vs-buy"],
    },
    {
        slug: "custom-crm-development-guide",
        title: "Custom CRM Development Guide",
        blurb: "When custom CRM beats Salesforce, HubSpot, and Zoho — and what the build looks like.",
        topics: ["crm", "build-vs-buy"],
    },
    {
        slug: "custom-crm-for-real-estate-teams-2026",
        title: "Custom CRM for Real Estate Teams (2026)",
        blurb: "MLS sync, transaction pipelines, commission splits, and lead routing for brokerages.",
        topics: ["crm"],
    },
    {
        slug: "custom-crm-vs-salesforce-vs-hubspot-2026",
        title: "Custom CRM vs Salesforce vs HubSpot (2026)",
        blurb: "Head-to-head TCO and capability comparison for mid-market sales teams.",
        topics: ["crm", "build-vs-buy"],
    },
    {
        slug: "custom-internal-tools-vs-retool-2026",
        title: "Custom Internal Tools vs Retool (2026)",
        blurb: "Where Retool wins, where it caps you, and when to write a real Next.js app.",
        topics: ["internal-tools", "build-vs-buy"],
    },
    {
        slug: "custom-software-rfp-template-2026",
        title: "Custom Software RFP Template (2026)",
        blurb: "A reusable RFP template plus the questions every founder forgets to ask.",
        topics: ["build-vs-buy"],
    },
    {
        slug: "cybersecurity-services-for-saas-startups-2026",
        title: "Cybersecurity Services for SaaS Startups (2026)",
        blurb: "What security work a SaaS founder actually needs in years 1-3.",
        topics: ["pentest", "compliance", "saas"],
    },
    {
        slug: "dedicated-development-team-vs-agency",
        title: "Dedicated Development Team vs Agency",
        blurb: "Engagement-model trade-offs when scaling a software bench.",
        topics: ["build-vs-buy"],
    },
    {
        slug: "gdpr-for-us-saas-companies-2026",
        title: "GDPR for US SaaS Companies (2026)",
        blurb: "When GDPR applies to a US company and the data subject rights you must support.",
        topics: ["compliance"],
    },
    {
        slug: "handling-failed-payments-in-stripe",
        title: "Handling Failed Payments in Stripe",
        blurb: "Smart Retries, dunning, and card-update flows that recover involuntary churn.",
        topics: ["stripe"],
    },
    {
        slug: "hipaa-compliance-checklist-for-startups-2026",
        title: "HIPAA Compliance Checklist for Startups (2026)",
        blurb: "Technical, administrative, and physical safeguards, BAAs, and the program work.",
        topics: ["compliance"],
    },
    {
        slug: "hipaa-compliant-saas-architecture",
        title: "HIPAA-Compliant SaaS Architecture",
        blurb: "BAA-eligible cloud, encrypted PHI flows, and audit-friendly logging patterns.",
        topics: ["compliance", "saas"],
    },
    {
        slug: "hire-fractional-cto-vs-software-firm",
        title: "Hire a Fractional CTO vs a Software Firm",
        blurb: "When each model fits — and the hybrid that often beats both.",
        topics: ["build-vs-buy"],
    },
    {
        slug: "how-to-choose-a-software-development-company-checklist",
        title: "How to Choose a Software Development Company (Checklist)",
        blurb: "A founder-focused checklist for vetting senior software firms.",
        topics: ["build-vs-buy"],
    },
    {
        slug: "how-to-prepare-for-a-soc-2-audit-2026",
        title: "How to Prepare for a SOC 2 Audit (2026)",
        blurb: "The five Trust Services Criteria, the evidence auditors want, and where the pentest fits.",
        topics: ["compliance", "pentest"],
    },
    {
        slug: "internal-tools-platform-engineering-guide",
        title: "Internal Tools Platform Engineering Guide",
        blurb: "Architectural patterns for ops dashboards, admin panels, and back-office UIs.",
        topics: ["internal-tools", "stack"],
    },
    {
        slug: "internal-tools-vs-custom-software-2026",
        title: "Internal Tools vs Custom Software (2026)",
        blurb: "Low-code versus purpose-built — the real cost, ownership, and scaling trade-offs.",
        topics: ["internal-tools", "build-vs-buy"],
    },
    {
        slug: "nextjs-16-app-router-guide-2026",
        title: "Next.js 16 App Router Guide (2026)",
        blurb: "Server vs client components, layouts, routing, data fetching, and caching.",
        topics: ["stack"],
    },
    {
        slug: "nextjs-stripe-integration-guide",
        title: "Next.js + Stripe: The Complete Integration Guide",
        blurb: "Server Actions, the Payment Element, webhook idempotency, and subscriptions.",
        topics: ["stripe", "stack"],
    },
    {
        slug: "nextjs-vs-remix-vs-sveltekit-2026",
        title: "Next.js vs Remix vs SvelteKit (2026)",
        blurb: "Framework selection criteria for production web apps.",
        topics: ["stack"],
    },
    {
        slug: "owasp-top-10-explained-2026",
        title: "The OWASP Top 10 Explained (2026)",
        blurb: "Every category in plain English, with a real example and the concrete defense.",
        topics: ["pentest"],
    },
    {
        slug: "pci-dss-compliance-saas-checklist",
        title: "PCI-DSS Compliance for SaaS Checklist",
        blurb: "What PCI scope reduction looks like when you route payments through Stripe.",
        topics: ["compliance", "stripe", "saas"],
    },
    {
        slug: "penetration-test-cost-2026",
        title: "Penetration Test Cost (2026)",
        blurb: "Real pricing for web app, network, AD, and red team engagements.",
        topics: ["pentest"],
    },
    {
        slug: "penetration-testing-for-fintech-startups-2026",
        title: "Penetration Testing for Fintech Startups (2026)",
        blurb: "The real fintech threat model, PCI DSS and SOC 2 drivers, and honest cost.",
        topics: ["pentest"],
    },
    {
        slug: "postgres-vs-mysql-for-saas-2026",
        title: "Postgres vs MySQL for SaaS (2026)",
        blurb: "JSON, RLS, indexing, replication, and ops — which we ship and the tradeoffs.",
        topics: ["stack", "saas"],
    },
    {
        slug: "red-team-vs-pen-test-vs-audit",
        title: "Red Team vs Pen Test vs Audit",
        blurb: "Three engagement types, three buyer profiles, and when to use each.",
        topics: ["pentest", "compliance"],
    },
    {
        slug: "saas-pricing-models-explained-2026",
        title: "SaaS Pricing Models Explained (2026)",
        blurb: "Flat, tiered, usage, per-seat, and hybrid — when each fits and how to bill it.",
        topics: ["saas", "stripe"],
    },
    {
        slug: "salesforce-alternatives-for-small-business-2026",
        title: "Salesforce Alternatives for Small Business (2026)",
        blurb: "HubSpot, Pipedrive, Zoho, Airtable, or custom — when each one actually wins.",
        topics: ["crm"],
    },
    {
        slug: "scaling-a-saas-database-guide-2026",
        title: "Scaling a SaaS Database (2026)",
        blurb: "Indexing, pooling, read replicas, partitioning, caching, and when to shard.",
        topics: ["stack", "saas"],
    },
    {
        slug: "server-components-vs-client-components-explained",
        title: "Server Components vs Client Components (2026)",
        blurb: "Where the boundary goes, the bundle-bloating mistakes, and the tradeoffs.",
        topics: ["stack"],
    },
    {
        slug: "soc-2-vs-iso-27001-2026",
        title: "SOC 2 vs ISO 27001 (2026)",
        blurb: "The real differences, where they overlap, and one program that earns both.",
        topics: ["compliance"],
    },
    {
        slug: "soc2-pentest-prep-guide-2026",
        title: "SOC 2 Pentest Prep Guide (2026)",
        blurb: "Pre-audit pentesting that maps cleanly to SOC 2 CC controls.",
        topics: ["compliance", "pentest"],
    },
    {
        slug: "software-development-contract-redlines",
        title: "Software Development Contract Redlines",
        blurb: "Clauses every founder should push back on in an SOW or MSA.",
        topics: ["build-vs-buy"],
    },
    {
        slug: "spreadsheet-to-web-app-migration-guide",
        title: "Spreadsheet to Web App: Migration Guide",
        blurb: "Data modeling, validation, access control, and a phased, lossless rollout.",
        topics: ["internal-tools", "crm"],
    },
    {
        slug: "stripe-connect-marketplace-architecture",
        title: "Stripe Connect Marketplace Architecture",
        blurb: "Account types, fund flows, and reconciliation for multi-party payments.",
        topics: ["stripe", "stack"],
    },
    {
        slug: "stripe-vs-paddle-vs-lemon-squeezy-2026",
        title: "Stripe vs Paddle vs Lemon Squeezy (2026)",
        blurb: "Payment gateway vs merchant of record, sales tax and VAT, and real pricing.",
        topics: ["stripe"],
    },
    {
        slug: "stripe-webhook-security-best-practices",
        title: "Stripe Webhook Security Best Practices",
        blurb: "Idempotency, signature verification, retries, and dead-letter handling.",
        topics: ["stripe", "stack"],
    },
    {
        slug: "subscription-billing-system-architecture",
        title: "Subscription Billing System Architecture",
        blurb: "Entitlements, proration, webhook-driven state, idempotency, and reconciliation.",
        topics: ["stripe", "saas"],
    },
    {
        slug: "vcs-vcio-vs-software-development-firm",
        title: "vCISO / vCIO vs a Software Development Firm",
        blurb: "Where security leadership stops and software delivery begins.",
        topics: ["pentest", "build-vs-buy"],
    },
    {
        slug: "what-is-a-pen-test-vs-vulnerability-scan",
        title: "What Is a Pen Test vs a Vulnerability Scan",
        blurb: "Two very different security activities that get sold under the same label.",
        topics: ["pentest"],
    },
    {
        slug: "what-is-mitre-attack-framework",
        title: "What Is the MITRE ATT&CK Framework",
        blurb: "Tactics, techniques, and how red and blue teams use the matrix.",
        topics: ["pentest"],
    },
    {
        slug: "what-is-penetration-testing",
        title: "What Is Penetration Testing? A Founder's Buyer Guide",
        blurb: "What a pentest actually is, the five types you can buy, and what a real report looks like.",
        topics: ["pentest"],
    },
];

type Props = {
    /** Slug of the current post — excluded from output to avoid self-links. */
    currentSlug?: string;
    /** Topic anchors used to rank related posts. */
    topics?: BlogTopic[];
    heading?: string;
    className?: string;
    /** Optional curated overrides (slugs) — used first, then topic-matched fill. */
    pinned?: string[];
    max?: number;
};

function scorePost(post: PostEntry, topics: BlogTopic[]): number {
    if (!topics || topics.length === 0) return 0;
    let score = 0;
    for (const t of post.topics) {
        const idx = topics.indexOf(t);
        if (idx >= 0) score += topics.length - idx;
    }
    return score;
}

export function RelatedPosts({
    currentSlug,
    topics = [],
    heading,
    className,
    pinned,
    max = 3,
}: Props) {
    const candidates = BLOG_POSTS.filter((p) => p.slug !== currentSlug);

    let ordered: PostEntry[] = [];
    if (pinned && pinned.length > 0) {
        for (const slug of pinned) {
            const found = candidates.find((p) => p.slug === slug);
            if (found && !ordered.includes(found)) ordered.push(found);
        }
    }

    if (ordered.length < max) {
        const ranked = candidates
            .filter((p) => !ordered.includes(p))
            .map((p) => ({ p, s: scorePost(p, topics) }))
            .sort((a, b) => b.s - a.s || a.p.title.localeCompare(b.p.title));
        for (const { p } of ranked) {
            if (ordered.length >= max) break;
            ordered.push(p);
        }
    }

    ordered = ordered.slice(0, max);
    if (ordered.length === 0) return null;

    const title = heading ?? "Related reading";

    return (
        <section
            aria-label={title}
            className={`rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 ${className ?? ""}`}
        >
            <div className="flex items-baseline justify-between gap-4 mb-5">
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight inline-flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-indigo-300" aria-hidden="true" />
                    {title}
                </h2>
                <Link
                    href="/blog"
                    className="text-sm font-medium text-indigo-300 hover:text-indigo-200 transition-colors min-h-[44px] inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-quant-bg rounded"
                >
                    All posts
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {ordered.map((p) => (
                    <li key={p.slug}>
                        <Link
                            href={`/blog/${p.slug}`}
                            className="group flex h-full flex-col rounded-xl border border-white/5 bg-white/[0.02] hover:border-indigo-400/40 hover:bg-white/[0.05] transition-colors p-5 min-h-[140px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-quant-bg"
                        >
                            <h3 className="text-white font-semibold leading-snug mb-2">{p.title}</h3>
                            <p className="text-sm text-gray-400 leading-snug flex-1">{p.blurb}</p>
                            <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-indigo-300 group-hover:text-indigo-200">
                                Read post
                                <ArrowRight className="w-4 h-4" aria-hidden="true" />
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default RelatedPosts;
