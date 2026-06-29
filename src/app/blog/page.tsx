import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { ArrowRight, Calendar, User } from "lucide-react";

export const metadata: Metadata = {
    title: "Engineering Blog: Custom Software & Pentest | QUANT LAB USA",
    description:
        "Founder-written guides on custom software, CRM builds, Stripe Connect, Next.js, and penetration testing — practical 2026 essays by Bill Beltz, no fluff. Subscribe.",
    alternates: { canonical: "https://quantlabusa.dev/blog" },
    openGraph: {
        title: "Blog | QUANT LAB USA",
        description:
            "Founder-written essays on custom software, CRMs, Stripe, Next.js, and offensive security.",
        url: "https://quantlabusa.dev/blog",
        type: "website",
    },
};

type BlogPost = {
    slug: string;
    title: string;
    excerpt: string;
    category: "Software" | "Cybersecurity" | "Local";
    date: string;
    readMinutes: number;
};

const posts: BlogPost[] = [
    {
        slug: "build-vs-buy-software-2026",
        title: "Build vs Buy Software: A 2026 Decision Framework for SaaS Founders",
        excerpt:
            "Three-year TCO math, the 80/20 rule, and a 12-question checklist for deciding whether to write the check or write the code.",
        category: "Software",
        date: "2026-05-12",
        readMinutes: 11,
    },
    {
        slug: "what-is-penetration-testing",
        title: "What Is Penetration Testing? A Founder's 2026 Buyer Guide",
        excerpt:
            "What a pentest actually is, the five types you can buy, what a real report looks like, and how much one should cost.",
        category: "Cybersecurity",
        date: "2026-05-12",
        readMinutes: 12,
    },
    {
        slug: "atlanta-software-development-guide-2026",
        title: "Atlanta Software Development: A Founder's 2026 Guide",
        excerpt:
            "The Atlanta tech scene, what local shops cost, the industries we know best, and the questions every ATL founder should ask before signing.",
        category: "Local",
        date: "2026-05-12",
        readMinutes: 10,
    },
    {
        slug: "what-is-mitre-attack-framework",
        title: "What Is the MITRE ATT&CK Framework? A Plain-English 2026 Guide",
        excerpt:
            "Tactics, techniques, sub-techniques, and how red teams and blue teams use the matrix in real engagements.",
        category: "Cybersecurity",
        date: "2026-05-12",
        readMinutes: 11,
    },
    {
        slug: "nextjs-stripe-integration-guide",
        title: "Next.js + Stripe: The Complete 2026 Integration Guide",
        excerpt:
            "Server Actions, the Payment Element, webhook idempotency, subscriptions, multi-tenant billing, and a production-grade testing pattern.",
        category: "Software",
        date: "2026-05-12",
        readMinutes: 14,
    },
    {
        slug: "2026-state-of-custom-software-development",
        title: "2026 State of Custom Software Development",
        excerpt:
            "Industry-wide pricing, timeline, and engagement-model benchmarks heading into 2026.",
        category: "Software",
        date: "2026-05-12",
        readMinutes: 13,
    },
    {
        slug: "best-custom-software-development-companies-atlanta-2026",
        title: "Best Custom Software Development Companies in Atlanta (2026)",
        excerpt:
            "Senior-shop shortlist for Atlanta founders — who builds what, pricing tiers, and the vertical specialization each firm leans on.",
        category: "Local",
        date: "2026-05-12",
        readMinutes: 11,
    },
    {
        slug: "best-penetration-testing-companies-georgia-2026",
        title: "Best Penetration Testing Companies in Georgia (2026)",
        excerpt:
            "Georgia-based pentest providers compared by methodology, reporting depth, SOC 2 alignment, and price.",
        category: "Cybersecurity",
        date: "2026-05-12",
        readMinutes: 12,
    },
    {
        slug: "building-multi-tenant-saas-postgres-rls",
        title: "Building Multi-Tenant SaaS on Postgres RLS",
        excerpt:
            "Row-level security patterns for isolating tenant data without spinning up separate databases per customer.",
        category: "Software",
        date: "2026-05-12",
        readMinutes: 13,
    },
    {
        slug: "crm-data-migration-from-spreadsheets",
        title: "CRM Data Migration from Spreadsheets",
        excerpt:
            "How to move messy spreadsheet pipelines into a real CRM without losing notes, history, or trust.",
        category: "Software",
        date: "2026-05-12",
        readMinutes: 11,
    },
    {
        slug: "crm-migration-from-salesforce-checklist",
        title: "CRM Migration from Salesforce Checklist",
        excerpt:
            "Step-by-step plan for moving off Salesforce to a custom system without losing pipeline history.",
        category: "Software",
        date: "2026-05-12",
        readMinutes: 12,
    },
    {
        slug: "custom-crm-development-guide",
        title: "Custom CRM Development Guide",
        excerpt:
            "When custom CRM beats Salesforce, HubSpot, and Zoho — and what the build actually looks like end to end.",
        category: "Software",
        date: "2026-05-12",
        readMinutes: 14,
    },
    {
        slug: "custom-crm-vs-salesforce-vs-hubspot-2026",
        title: "Custom CRM vs Salesforce vs HubSpot (2026)",
        excerpt:
            "Head-to-head TCO and capability comparison for mid-market sales teams choosing a CRM in 2026.",
        category: "Software",
        date: "2026-05-12",
        readMinutes: 13,
    },
    {
        slug: "custom-internal-tools-vs-retool-2026",
        title: "Custom Internal Tools vs Retool (2026)",
        excerpt:
            "Where Retool wins, where it caps your team, and when to write a real Next.js app instead.",
        category: "Software",
        date: "2026-05-12",
        readMinutes: 11,
    },
    {
        slug: "custom-software-rfp-template-2026",
        title: "Custom Software RFP Template (2026)",
        excerpt:
            "A reusable RFP template plus the questions every founder forgets to ask before signing an SOW.",
        category: "Software",
        date: "2026-05-12",
        readMinutes: 12,
    },
    {
        slug: "cybersecurity-services-for-saas-startups-2026",
        title: "Cybersecurity Services for SaaS Startups (2026)",
        excerpt:
            "What security work a SaaS founder actually needs in years 1-3 — and what to skip until you have customers worth attacking.",
        category: "Cybersecurity",
        date: "2026-05-12",
        readMinutes: 12,
    },
    {
        slug: "dedicated-development-team-vs-agency",
        title: "Dedicated Development Team vs Agency",
        excerpt:
            "Engagement-model trade-offs when scaling a software bench past the founder-led phase.",
        category: "Software",
        date: "2026-05-12",
        readMinutes: 10,
    },
    {
        slug: "hipaa-compliant-saas-architecture",
        title: "HIPAA-Compliant SaaS Architecture",
        excerpt:
            "BAA-eligible cloud, encrypted PHI flows, and audit-friendly logging patterns for healthcare SaaS.",
        category: "Cybersecurity",
        date: "2026-05-12",
        readMinutes: 14,
    },
    {
        slug: "hire-fractional-cto-vs-software-firm",
        title: "Hire a Fractional CTO vs a Software Firm",
        excerpt:
            "When each engagement model fits — and the hybrid that often beats both for early-stage teams.",
        category: "Software",
        date: "2026-05-12",
        readMinutes: 10,
    },
    {
        slug: "how-to-choose-a-software-development-company-checklist",
        title: "How to Choose a Software Development Company (Checklist)",
        excerpt:
            "A founder-focused checklist for vetting senior software firms before you write the deposit check.",
        category: "Software",
        date: "2026-05-12",
        readMinutes: 11,
    },
    {
        slug: "internal-tools-platform-engineering-guide",
        title: "Internal Tools Platform Engineering Guide",
        excerpt:
            "Architectural patterns for ops dashboards, admin panels, and back-office UIs that don't rot in year two.",
        category: "Software",
        date: "2026-05-12",
        readMinutes: 11,
    },
    {
        slug: "nextjs-vs-remix-vs-sveltekit-2026",
        title: "Next.js vs Remix vs SvelteKit (2026)",
        excerpt:
            "Framework selection criteria for production web apps — runtime, ecosystem, deployment, and team factors.",
        category: "Software",
        date: "2026-05-12",
        readMinutes: 12,
    },
    {
        slug: "pci-dss-compliance-saas-checklist",
        title: "PCI-DSS Compliance for SaaS Checklist",
        excerpt:
            "What PCI scope reduction looks like when you route payments through Stripe — plus the controls that still apply.",
        category: "Cybersecurity",
        date: "2026-05-12",
        readMinutes: 12,
    },
    {
        slug: "penetration-test-cost-2026",
        title: "Penetration Test Cost (2026)",
        excerpt:
            "Real pricing benchmarks for web app, network, AD, and red team engagements — plus what drives the spread.",
        category: "Cybersecurity",
        date: "2026-05-12",
        readMinutes: 11,
    },
    {
        slug: "red-team-vs-pen-test-vs-audit",
        title: "Red Team vs Pen Test vs Audit",
        excerpt:
            "Three engagement types, three buyer profiles, and when each one is the right call.",
        category: "Cybersecurity",
        date: "2026-05-12",
        readMinutes: 10,
    },
    {
        slug: "soc2-pentest-prep-guide-2026",
        title: "SOC 2 Pentest Prep Guide (2026)",
        excerpt:
            "Pre-audit pentesting that maps cleanly to SOC 2 CC controls — scoped, sequenced, and report-ready.",
        category: "Cybersecurity",
        date: "2026-05-12",
        readMinutes: 11,
    },
    {
        slug: "software-development-contract-redlines",
        title: "Software Development Contract Redlines",
        excerpt:
            "Clauses every founder should push back on in an SOW or MSA — IP, indemnification, source escrow, and acceptance.",
        category: "Software",
        date: "2026-05-12",
        readMinutes: 12,
    },
    {
        slug: "stripe-connect-marketplace-architecture",
        title: "Stripe Connect Marketplace Architecture",
        excerpt:
            "Account types, fund flows, and reconciliation for multi-party payments built on Stripe Connect.",
        category: "Software",
        date: "2026-05-12",
        readMinutes: 12,
    },
    {
        slug: "stripe-webhook-security-best-practices",
        title: "Stripe Webhook Security Best Practices",
        excerpt:
            "Idempotency, signature verification, retries, and dead-letter handling for production Stripe webhook handlers.",
        category: "Software",
        date: "2026-05-12",
        readMinutes: 11,
    },
    {
        slug: "vcs-vcio-vs-software-development-firm",
        title: "vCISO / vCIO vs a Software Development Firm",
        excerpt:
            "Where security leadership stops and software delivery begins — and the hybrid most fast-moving teams actually need.",
        category: "Cybersecurity",
        date: "2026-05-12",
        readMinutes: 10,
    },
    {
        slug: "what-is-a-pen-test-vs-vulnerability-scan",
        title: "What Is a Pen Test vs a Vulnerability Scan",
        excerpt:
            "Two very different security activities that get sold under the same label — and what each actually does for you.",
        category: "Cybersecurity",
        date: "2026-05-12",
        readMinutes: 9,
    },
    {
        slug: "custom-crm-for-real-estate-teams-2026",
        title: "Custom CRM for Real Estate Teams: 2026 Guide",
        excerpt:
            "MLS sync, transaction pipelines, commission splits, and lead routing — when a brokerage should build a CRM instead of renting one.",
        category: "Software",
        date: "2026-06-03",
        readMinutes: 12,
    },
    {
        slug: "salesforce-alternatives-for-small-business-2026",
        title: "Salesforce Alternatives for Small Business (2026)",
        excerpt:
            "HubSpot, Pipedrive, Zoho, Airtable, or custom — an engineer's honest take on the exact scenario where each one actually wins.",
        category: "Software",
        date: "2026-06-03",
        readMinutes: 11,
    },
    {
        slug: "spreadsheet-to-web-app-migration-guide",
        title: "Spreadsheet to Web App: Migration Guide",
        excerpt:
            "Data modeling, validation, access control, and a phased rollout for turning a business-critical spreadsheet into a real web app without losing data.",
        category: "Software",
        date: "2026-06-03",
        readMinutes: 11,
    },
    {
        slug: "internal-tools-vs-custom-software-2026",
        title: "Internal Tools vs Custom Software (2026)",
        excerpt:
            "Low-code tools like Retool versus purpose-built software — the real cost, ownership, and scaling trade-offs, plus a framework for choosing.",
        category: "Software",
        date: "2026-06-03",
        readMinutes: 11,
    },
    {
        slug: "stripe-vs-paddle-vs-lemon-squeezy-2026",
        title: "Stripe vs Paddle vs Lemon Squeezy (2026)",
        excerpt:
            "Payment gateway versus merchant of record, sales tax and VAT, real pricing, and which billing platform fits your SaaS stage.",
        category: "Software",
        date: "2026-06-03",
        readMinutes: 9,
    },
    {
        slug: "handling-failed-payments-in-stripe",
        title: "Handling Failed Payments in Stripe",
        excerpt:
            "Smart Retries, dunning emails, the payment_failed webhook, grace periods, and card-update flows that actually recover involuntary churn.",
        category: "Software",
        date: "2026-06-03",
        readMinutes: 9,
    },
    {
        slug: "saas-pricing-models-explained-2026",
        title: "SaaS Pricing Models Explained (2026)",
        excerpt:
            "Flat-rate, tiered, usage-based, per-seat, and hybrid — when each fits, the billing engineering each demands, and how to implement them in Stripe.",
        category: "Software",
        date: "2026-06-03",
        readMinutes: 10,
    },
    {
        slug: "subscription-billing-system-architecture",
        title: "Subscription Billing System Architecture",
        excerpt:
            "Entitlements, proration, invoicing, webhook-driven state, idempotency, and reconciliation — concrete Stripe-backed patterns for a robust billing system.",
        category: "Software",
        date: "2026-06-03",
        readMinutes: 11,
    },
    {
        slug: "penetration-testing-for-fintech-startups-2026",
        title: "Penetration Testing for Fintech Startups (2026)",
        excerpt:
            "The real fintech threat model, what to test, PCI DSS and SOC 2 drivers, MITRE ATT&CK mapping, and honest pricing for a fintech pentest.",
        category: "Cybersecurity",
        date: "2026-06-03",
        readMinutes: 13,
    },
    {
        slug: "owasp-top-10-explained-2026",
        title: "The OWASP Top 10 Explained (2026)",
        excerpt:
            "Every OWASP Top 10 category in plain English with a real-world example and the concrete defense — the 2026 reference for founders and engineers.",
        category: "Cybersecurity",
        date: "2026-06-03",
        readMinutes: 12,
    },
    {
        slug: "how-to-prepare-for-a-soc-2-audit-2026",
        title: "How to Prepare for a SOC 2 Audit (2026)",
        excerpt:
            "The five Trust Services Criteria, the controls and evidence auditors ask for, where the pentest fits, and a realistic readiness timeline.",
        category: "Cybersecurity",
        date: "2026-06-03",
        readMinutes: 13,
    },
    {
        slug: "api-security-best-practices-2026",
        title: "API Security Best Practices (2026)",
        excerpt:
            "Authentication, authorization, rate limiting, input validation, secrets, and the OWASP API Top 10 — with code and MITRE ATT&CK mapping.",
        category: "Cybersecurity",
        date: "2026-06-03",
        readMinutes: 13,
    },
    {
        slug: "nextjs-16-app-router-guide-2026",
        title: "Next.js 16 App Router Guide: The 2026 Mental Model",
        excerpt:
            "Server vs client components, layouts, routing, data fetching, and the caching model — with code and the real tradeoffs.",
        category: "Software",
        date: "2026-06-03",
        readMinutes: 10,
    },
    {
        slug: "server-components-vs-client-components-explained",
        title: "Server Components vs Client Components Explained (2026)",
        excerpt:
            "Where the boundary goes, the common mistakes that bloat bundles, and the performance tradeoffs — with code.",
        category: "Software",
        date: "2026-06-03",
        readMinutes: 9,
    },
    {
        slug: "postgres-vs-mysql-for-saas-2026",
        title: "Postgres vs MySQL for SaaS (2026): An Honest Comparison",
        excerpt:
            "JSON, extensions, row-level security, indexing, replication, and ops — which we ship for SaaS workloads and the honest tradeoffs.",
        category: "Software",
        date: "2026-06-03",
        readMinutes: 9,
    },
    {
        slug: "scaling-a-saas-database-guide-2026",
        title: "Scaling a SaaS Database: The 2026 Engineering Guide",
        excerpt:
            "The right order of operations — indexing, connection pooling, read replicas, partitioning, caching, and when to actually shard.",
        category: "Software",
        date: "2026-06-03",
        readMinutes: 10,
    },
    {
        slug: "soc-2-vs-iso-27001-2026",
        title: "SOC 2 vs ISO 27001 (2026): Which to Pursue for US SaaS",
        excerpt:
            "The real differences, when to pursue each, where they overlap, effort and cost, and how to run one program that earns both.",
        category: "Cybersecurity",
        date: "2026-06-03",
        readMinutes: 9,
    },
    {
        slug: "gdpr-for-us-saas-companies-2026",
        title: "GDPR for US SaaS Companies (2026): An Engineer's Guide",
        excerpt:
            "When GDPR applies to a US company, the data subject rights you must support, DPAs and subprocessors, and the engineering it implies.",
        category: "Cybersecurity",
        date: "2026-06-03",
        readMinutes: 8,
    },
    {
        slug: "hipaa-compliance-checklist-for-startups-2026",
        title: "HIPAA Compliance Checklist for Startups (2026)",
        excerpt:
            "Technical, administrative, and physical safeguards, BAAs, and the program work that turns architecture into a defensible posture.",
        category: "Cybersecurity",
        date: "2026-06-03",
        readMinutes: 8,
    },
    {
        slug: "ccpa-vs-gdpr-for-saas-2026",
        title: "CCPA vs GDPR for SaaS (2026): Build Once, Satisfy Both",
        excerpt:
            "How the two privacy regimes differ, where they overlap, and the single set of controls you can build once to satisfy both.",
        category: "Cybersecurity",
        date: "2026-06-03",
        readMinutes: 8,
    },
    {
        slug: "database-migrations-without-downtime-2026",
        title: "Zero-Downtime Database Migrations: A 2026 Playbook",
        excerpt:
            "Expand-contract migrations, backfills, dual writes, and the deploy choreography that ships schema changes without a maintenance window.",
        category: "Software",
        date: "2026-02-04",
        readMinutes: 12,
    },
    {
        slug: "api-rate-limiting-strategies-2026",
        title: "API Rate Limiting Strategies for 2026",
        excerpt:
            "Token bucket vs sliding window, per-key quotas, 429 semantics, and where to enforce limits — gateway, app, or both.",
        category: "Software",
        date: "2026-02-18",
        readMinutes: 10,
    },
    {
        slug: "caching-strategies-for-saas-2026",
        title: "Caching Strategies for SaaS (2026)",
        excerpt:
            "Cache layers from CDN to Redis, invalidation that actually works, stampede protection, and what you should never cache.",
        category: "Software",
        date: "2026-03-03",
        readMinutes: 11,
    },
    {
        slug: "event-driven-architecture-for-saas-2026",
        title: "Event-Driven Architecture for SaaS (2026)",
        excerpt:
            "Queues, the outbox pattern, idempotency, and exactly-once myths — when events beat synchronous calls and when they bite back.",
        category: "Software",
        date: "2026-03-17",
        readMinutes: 12,
    },
    {
        slug: "background-jobs-and-queues-in-production-2026",
        title: "Background Jobs & Queues in Production (2026)",
        excerpt:
            "Retries, dead-letter queues, visibility timeouts, and the observability you need before a job silently fails at 3 a.m.",
        category: "Software",
        date: "2026-03-28",
        readMinutes: 10,
    },
    {
        slug: "observability-for-startups-2026",
        title: "Observability for Startups: Logs, Metrics, Traces (2026)",
        excerpt:
            "A pragmatic stack for small teams — structured logs, the four golden signals, tracing, and alerts that don't cry wolf.",
        category: "Software",
        date: "2026-04-08",
        readMinutes: 11,
    },
    {
        slug: "preventing-sql-injection-2026",
        title: "Preventing SQL Injection in Modern Web Apps (2026)",
        excerpt:
            "Parameterized queries, ORMs, least-privilege database roles, and why string concatenation is still breaching apps in 2026.",
        category: "Cybersecurity",
        date: "2026-02-11",
        readMinutes: 9,
    },
    {
        slug: "xss-prevention-guide-2026",
        title: "XSS Prevention: A 2026 Developer's Guide",
        excerpt:
            "Output encoding, a real Content-Security-Policy, framework escaping, and the sinks that still let script slip through.",
        category: "Cybersecurity",
        date: "2026-02-25",
        readMinutes: 9,
    },
    {
        slug: "securing-rest-apis-2026",
        title: "Securing REST APIs: A 2026 Checklist",
        excerpt:
            "Authentication vs authorization, scopes, input validation, rate limits, and the OWASP API Top 10 mapped to concrete fixes.",
        category: "Cybersecurity",
        date: "2026-03-11",
        readMinutes: 10,
    },
    {
        slug: "secrets-management-best-practices-2026",
        title: "Secrets Management Best Practices (2026)",
        excerpt:
            "Vaults, KMS, short-lived credentials, rotation, and keeping API keys out of your repo, logs, and error messages.",
        category: "Cybersecurity",
        date: "2026-03-24",
        readMinutes: 10,
    },
    {
        slug: "ransomware-protection-for-small-business-2026",
        title: "Ransomware Protection for Small Business (2026)",
        excerpt:
            "Tested backups, segmentation, EDR, patch discipline, and the incident-response plan you write before you ever need it.",
        category: "Cybersecurity",
        date: "2026-04-02",
        readMinutes: 11,
    },
    {
        slug: "vulnerability-management-program-guide-2026",
        title: "Building a Vulnerability Management Program (2026)",
        excerpt:
            "Scan cadence, CVSS triage, remediation SLAs, and reporting that turns a noisy scanner into a defensible program.",
        category: "Cybersecurity",
        date: "2026-04-15",
        readMinutes: 11,
    },
    {
        slug: "saas-churn-reduction-playbook-2026",
        title: "The SaaS Churn Reduction Playbook (2026)",
        excerpt:
            "Instrument the churn you can see, fix onboarding and time-to-value, and the save-flow tactics that move net revenue retention.",
        category: "Software",
        date: "2026-04-22",
        readMinutes: 12,
    },
    {
        slug: "usage-based-billing-implementation-2026",
        title: "Implementing Usage-Based Billing (2026)",
        excerpt:
            "Metering, aggregation, idempotent event ingestion, Stripe metered prices, and invoicing that customers actually trust.",
        category: "Software",
        date: "2026-05-01",
        readMinutes: 12,
    },
    {
        slug: "saas-onboarding-best-practices-2026",
        title: "SaaS Onboarding Best Practices (2026)",
        excerpt:
            "Activation milestones, empty states, checklists, and the instrumentation that tells you exactly where new users stall.",
        category: "Software",
        date: "2026-05-08",
        readMinutes: 10,
    },
    {
        slug: "product-analytics-for-saas-2026",
        title: "Product Analytics for SaaS: A 2026 Setup Guide",
        excerpt:
            "Event taxonomy, identity, funnels, and retention curves — a clean analytics foundation without drowning in dashboards.",
        category: "Software",
        date: "2026-05-13",
        readMinutes: 10,
    },
    {
        slug: "saas-security-questionnaire-guide-2026",
        title: "Surviving the SaaS Security Questionnaire (2026)",
        excerpt:
            "How to answer SIG and CAIQ-style questionnaires fast, what evidence to keep ready, and when a SOC 2 short-circuits the whole thing.",
        category: "Cybersecurity",
        date: "2026-05-20",
        readMinutes: 10,
    },
    {
        slug: "multi-region-saas-deployment-2026",
        title: "Multi-Region SaaS Deployment (2026)",
        excerpt:
            "Active-active vs active-passive, data residency, failover, and the latency and cost trade-offs of going multi-region.",
        category: "Software",
        date: "2026-05-27",
        readMinutes: 12,
    },
    {
        slug: "cost-to-build-saas-mvp-georgia-2026",
        title: "What It Costs to Build a SaaS MVP in Georgia (2026)",
        excerpt:
            "Real ranges for a production MVP built in Georgia — scope tiers, what drives the number, and where founders overspend.",
        category: "Local",
        date: "2026-01-21",
        readMinutes: 11,
    },
    {
        slug: "savannah-software-development-guide-2026",
        title: "Savannah Software Development: A 2026 Guide",
        excerpt:
            "Who builds custom software for Savannah businesses, what it costs, and how to vet a partner from the coast.",
        category: "Local",
        date: "2026-01-28",
        readMinutes: 9,
    },
    {
        slug: "augusta-software-development-guide-2026",
        title: "Augusta Software Development: A 2026 Guide",
        excerpt:
            "Custom software, CRM, and cybersecurity for Augusta companies — local context, budgets, and how to choose a builder.",
        category: "Local",
        date: "2026-02-06",
        readMinutes: 9,
    },
    {
        slug: "hiring-fractional-cto-atlanta-2026",
        title: "Hiring a Fractional CTO in Atlanta (2026)",
        excerpt:
            "What a fractional CTO does, when Atlanta startups need one, typical engagement shapes, and how it compares to an agency.",
        category: "Local",
        date: "2026-02-13",
        readMinutes: 10,
    },
    {
        slug: "columbus-ga-software-development-guide-2026",
        title: "Columbus, GA Software Development: A 2026 Guide",
        excerpt:
            "A practical guide to building custom software in Columbus, Georgia — costs, partner selection, and local considerations.",
        category: "Local",
        date: "2026-02-20",
        readMinutes: 9,
    },
    {
        slug: "software-maintenance-costs-explained-2026",
        title: "Software Maintenance Costs, Explained (2026)",
        excerpt:
            "Why maintenance runs 15–25% of build cost a year, what it actually buys, and how to budget for it without surprises.",
        category: "Software",
        date: "2026-03-06",
        readMinutes: 9,
    },
    {
        slug: "building-a-rag-pipeline-2026",
        title: "Building a RAG Pipeline for Your Docs (2026)",
        excerpt:
            "Chunking, embeddings, a vector store, retrieval, and grounding — the architecture that makes an LLM answer from your data.",
        category: "Software",
        date: "2026-05-30",
        readMinutes: 12,
    },
    {
        slug: "adding-ai-features-to-your-saas-2026",
        title: "Adding AI Features to Your SaaS (2026)",
        excerpt:
            "Where AI actually helps, build-vs-API trade-offs, evals, guardrails, and shipping features without torching your margins.",
        category: "Software",
        date: "2026-06-05",
        readMinutes: 11,
    },
    {
        slug: "llm-cost-optimization-2026",
        title: "LLM Cost Optimization for Startups (2026)",
        excerpt:
            "Model routing, caching, prompt and context trimming, batching, and the levers that cut inference spend without hurting quality.",
        category: "Software",
        date: "2026-06-10",
        readMinutes: 10,
    },
    {
        slug: "preventing-prompt-injection-2026",
        title: "Preventing Prompt Injection in AI Apps (2026)",
        excerpt:
            "Why prompt injection is the new injection class, trust boundaries for tools and retrieval, and layered mitigations that hold.",
        category: "Cybersecurity",
        date: "2026-06-15",
        readMinutes: 10,
    },
    {
        slug: "vector-database-comparison-2026",
        title: "Vector Database Comparison (2026)",
        excerpt:
            "pgvector, Pinecone, Weaviate, Qdrant, and friends — how to choose by scale, latency, ops burden, and cost.",
        category: "Software",
        date: "2026-06-19",
        readMinutes: 11,
    },
    {
        slug: "data-warehouse-vs-data-lake-2026",
        title: "Data Warehouse vs Data Lake (2026)",
        excerpt:
            "Definitions without the hype, when each fits, the lakehouse middle ground, and ETL vs ELT trade-offs for SaaS teams.",
        category: "Software",
        date: "2026-06-24",
        readMinutes: 10,
    },
];

const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://quantlabusa.dev/blog",
    name: "QUANT LAB USA Blog",
    description:
        "Founder-written essays on custom software, CRMs, Stripe, Next.js, and offensive security.",
    url: "https://quantlabusa.dev/blog",
    publisher: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        "@id": "https://quantlabusa.dev/#organization",
    },
    blogPost: posts.map((p) => ({
        "@type": "BlogPosting",
        headline: p.title,
        url: `https://quantlabusa.dev/blog/${p.slug}`,
        datePublished: p.date,
        author: {
            "@type": "Person",
            name: "William Beltz",
            url: "https://quantlabusa.dev/about",
        },
    })),
};

export default function BlogIndexPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
            />

            <section className="pt-32 pb-12 relative overflow-hidden">
                <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-quant-blue/8 rounded-full blur-[160px] pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10 max-w-5xl">
                    <nav aria-label="Breadcrumb" className="mb-8">
                        <ol className="flex items-center gap-2 text-xs text-gray-400">
                            <li>
                                <Link href="/" className="hover:text-sky-400 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li aria-hidden="true" className="text-gray-700">
                                ›
                            </li>
                            <li className="text-gray-300">Blog</li>
                        </ol>
                    </nav>
                    <span className="inline-block text-quant-blue text-sm font-semibold tracking-[0.2em] uppercase mb-5">
                        Field Notes
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                        The QUANT LAB USA Blog
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
                        Long-form essays written by Bill Beltz, founder of QUANT LAB USA INC. No
                        SEO sludge, no agency-speak — opinions backed by code we&apos;ve shipped
                        for paying clients.
                    </p>
                </div>
            </section>

            <section className="pb-24 relative">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {posts.map((post) => (
                            <AnimatedSection key={post.slug}>
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="group relative flex h-full flex-col rounded-2xl border border-white/8 bg-[#0d1526]/80 backdrop-blur-sm p-8 transition-all duration-300 hover:border-quant-blue/40 hover:bg-[#0d1526] overflow-hidden"
                                >
                                    <div className="flex items-center gap-3 mb-5">
                                        <span className="text-xs font-semibold tracking-[0.15em] uppercase text-sky-400">
                                            {post.category}
                                        </span>
                                        <span className="text-gray-700">·</span>
                                        <span className="inline-flex items-center gap-1 text-xs text-gray-400 font-mono">
                                            <Calendar className="w-3 h-3" />
                                            {post.date}
                                        </span>
                                        <span className="text-gray-700">·</span>
                                        <span className="text-xs text-gray-400 font-mono">
                                            {post.readMinutes} min read
                                        </span>
                                    </div>

                                    <h2 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-sky-100 transition-colors">
                                        {post.title}
                                    </h2>

                                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                                            <User className="w-3 h-3" />
                                            Bill Beltz
                                        </span>
                                        <div className="flex items-center gap-2 text-sky-400 text-sm font-medium group-hover:gap-3 transition-all">
                                            Read post
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 relative border-t border-white/5 bg-black/30">
                <div className="container mx-auto px-6 max-w-3xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Have a project that needs an engineer who writes like this?
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        Most of these posts started as questions paying clients asked. If yours
                        is in here, let&apos;s talk about building it.
                    </p>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                        Or call directly:{" "}
                        <a
                            href="tel:+17706521282"
                            className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400"
                        >
                            (770) 652-1282
                        </a>{" "}
                        ·{" "}
                        <a
                            href="mailto:beltz@quantlabusa.dev"
                            className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400"
                        >
                            beltz@quantlabusa.dev
                        </a>
                    </p>
                    <ConsultationCTA label="Book a Consultation" source="blog-index" />
                </div>
            </section>
        </main>
    );
}
