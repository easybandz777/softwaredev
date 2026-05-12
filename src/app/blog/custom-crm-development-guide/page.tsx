import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import {
    Terminal,
    Check,
    ArrowRight,
    MapPin,
    BookOpen,
    Calendar,
    Calculator,
    AlertTriangle,
    Wrench,
    DollarSign,
    Clock,
    GitBranch,
    Layers,
    Workflow,
    Shield,
    LineChart,
} from "lucide-react";

const PUBLISHED_ISO = "2026-05-12";
const PUBLISHED_DISPLAY = "May 12, 2026";
const READING_MINUTES = 19;

export const metadata: Metadata = {
    title: "Custom CRM Development: The Complete Guide (2026) | QuantLab",
    description:
        "Custom CRM development guide from a Macon/Atlanta engineering firm — when to build, cost ranges, architecture, migration, and the real tradeoffs vs Salesforce, HubSpot, and Pipedrive.",
    alternates: {
        canonical:
            "https://quantlabusa.dev/blog/custom-crm-development-guide",
    },
    openGraph: {
        title: "Custom CRM Development: The Complete Guide (2026)",
        description:
            "Founder-led guide to building a custom CRM that fits your sales motion — cost, timeline, architecture, migration, and honest tradeoffs vs Salesforce, HubSpot, and Pipedrive.",
        url: "https://quantlabusa.dev/blog/custom-crm-development-guide",
        type: "article",
        publishedTime: PUBLISHED_ISO,
        authors: ["Bill Beltz"],
        siteName: "QUANT LAB USA",
        images: [
            {
                url: "https://quantlabusa.dev/og/custom-crm-development-guide.png",
                width: 1200,
                height: 630,
                alt: "Custom CRM Development: The Complete Guide",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Custom CRM Development: The Complete Guide (2026)",
        description:
            "When to build a custom CRM, what it costs, how long it takes, and the architecture we actually ship — straight from the founder's chair.",
    },
};

const cityLinks: { slug: string; label: string }[] = [
    { slug: "atlanta-ga", label: "Atlanta, GA" },
    { slug: "macon-ga", label: "Macon, GA" },
    { slug: "augusta-ga", label: "Augusta, GA" },
    { slug: "savannah-ga", label: "Savannah, GA" },
    { slug: "columbus-ga", label: "Columbus, GA" },
    { slug: "miami-fl", label: "Miami, FL" },
    { slug: "austin-tx", label: "Austin, TX" },
    { slug: "dallas-tx", label: "Dallas, TX" },
    { slug: "charlotte-nc", label: "Charlotte, NC" },
    { slug: "nashville-tn", label: "Nashville, TN" },
];

const tableOfContents: { id: string; label: string }[] = [
    { id: "why-saas-crms-fail", label: "1. Why off-the-shelf CRMs fail at scale" },
    { id: "when-custom-makes-sense", label: "2. When custom CRM actually makes sense" },
    { id: "comparison", label: "3. Custom vs Salesforce vs HubSpot vs Pipedrive" },
    { id: "architecture", label: "4. The architecture we actually ship" },
    { id: "feature-anatomy", label: "5. Feature anatomy: what a real custom CRM contains" },
    { id: "cost", label: "6. What a custom CRM costs" },
    { id: "timeline", label: "7. Timeline: from kickoff to live" },
    { id: "migration", label: "8. Migration: moving off your current CRM without losing history" },
    { id: "case-studies", label: "9. Case studies: three CRMs we shipped this year" },
    { id: "pitfalls", label: "10. Pitfalls that kill custom CRM projects" },
    { id: "build-vs-buy", label: "11. The build-vs-buy decision framework" },
    { id: "what-we-ship", label: "12. What we actually ship (deliverables checklist)" },
    { id: "service-area", label: "13. Where we serve" },
    { id: "faq", label: "14. FAQ: 12 hard questions about custom CRMs" },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Custom CRM Development: The Complete Guide (2026)",
    description:
        "An engineering firm's guide to custom CRM development — when to build, what it costs, the architecture we ship, migration strategy, and honest tradeoffs against Salesforce, HubSpot, and Pipedrive.",
    image: "https://quantlabusa.dev/og/custom-crm-development-guide.png",
    datePublished: PUBLISHED_ISO,
    dateModified: PUBLISHED_ISO,
    author: {
        "@type": "Person",
        name: "Bill Beltz",
        url: "https://quantlabusa.dev/about",
        jobTitle: "Founder, QUANT LAB USA INC",
    },
    publisher: {
        "@type": "Organization",
        name: "QUANT LAB USA INC",
        url: "https://quantlabusa.dev",
        logo: {
            "@type": "ImageObject",
            url: "https://quantlabusa.dev/logo.png",
        },
    },
    mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://quantlabusa.dev/blog/custom-crm-development-guide",
    },
    keywords:
        "custom crm development, custom crm development atlanta, custom crm software, build custom crm, salesforce alternative, hubspot alternative, custom crm cost, next.js crm, postgresql crm",
    wordCount: 4100,
    articleSection: "Custom Software Development",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://quantlabusa.dev/",
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://quantlabusa.dev/blog",
        },
        {
            "@type": "ListItem",
            position: 3,
            name: "Custom CRM Development: The Complete Guide",
            item: "https://quantlabusa.dev/blog/custom-crm-development-guide",
        },
    ],
};

const faqItems: { q: string; a: string }[] = [
    {
        q: "At what revenue does custom CRM development start paying back?",
        a: "The break-even line we see in our work is roughly $1M to $3M ARR, or any team paying more than about $800 per month combined across Salesforce, HubSpot, Outreach, ZoomInfo, and the connector glue between them. Below that, a well-configured Pipedrive or HubSpot Starter is usually the right call. Above that, the per-seat ratchet and the cost of forcing your workflow into a vendor object model usually exceed the cost of a custom build inside 18 to 24 months.",
    },
    {
        q: "How long until our team is actually using the CRM in production?",
        a: "Six weeks from kickoff to a usable v1 if scope is disciplined. Three months to a polished v2 with reporting, automations, and at least one third-party integration (QuickBooks, Stripe, Twilio, etc.). Anything that promises a full-feature custom CRM in under six weeks is either underscoping or hiding the scope.",
    },
    {
        q: "Do we have to migrate off our existing CRM in one shot?",
        a: "No. Most of our migrations run in dual-write mode for two to four weeks — the old CRM stays read-only as the system of record for closed deals while the new CRM becomes the system of record for new pipeline. Once parity is verified and reporting is reconciled, we cut over.",
    },
    {
        q: "Do we own the source code?",
        a: "Yes. You get the GitHub repository, the PostgreSQL schema, the deployment configuration, the environment variable map, and the documentation. There is no platform tax, no per-seat ratchet, and no exit ransom if you ever want to take it in-house.",
    },
    {
        q: "What stack do you build on, and why?",
        a: "Next.js 16 with the App Router, React 19, TypeScript, PostgreSQL via Prisma, Stripe for billing, Resend for transactional email, and Vercel for hosting. The same stack runs every CRM we have shipped this year. It is boring in the best way — fast to develop on, cheap to host, easy to hire for, and battle-tested in production.",
    },
    {
        q: "Will the custom CRM integrate with QuickBooks, Stripe, Gmail, and Slack?",
        a: "Yes. QuickBooks Online (bi-directional sync of customers, vendors, items, and accounts), Stripe (subscriptions, one-time charges, webhooks, refunds), Gmail and Outlook (thread sync), Google Calendar, Slack (channel + DM notifications), and Twilio (SMS, voice) are all routine integrations we ship. Each is scoped and quoted with the build.",
    },
    {
        q: "What happens if our process changes a year after launch?",
        a: "You have two paths and we plan for both. You can retain QuantLab on a monthly basis for ongoing feature work — about $4k to $12k per month depending on velocity. Or you bring it in-house: the codebase is documented for handoff, the schema is portable PostgreSQL, and the deployment runs on infrastructure your team can take over.",
    },
    {
        q: "Can we host the CRM ourselves, or does it have to live on Vercel?",
        a: "It can live wherever you want. Vercel is the default because it removes a week of deployment toil, but every custom CRM we ship is portable to AWS, GCP, Azure, Render, Fly, or your own colo. PostgreSQL is the only hard dependency, and you can run it on Neon, Supabase, AWS RDS, or self-hosted.",
    },
    {
        q: "Do you offer a fixed price or hourly?",
        a: "Fixed-fee per phase. Discovery is $2,500 separately. The MVP build is quoted as a single fixed number after discovery is complete. Change requests outside the agreed scope are quoted before any work starts. We do not work hourly — the incentives are wrong.",
    },
    {
        q: "Who owns the customer data?",
        a: "You do. The PostgreSQL database is yours; the schema is documented; and you can dump it to plain SQL at any time with a one-line command. There is no proprietary export format, no data hostage, no monthly fee to access your own records.",
    },
    {
        q: "How do you handle SOC 2, HIPAA, or PCI compliance?",
        a: "If your business needs SOC 2 or HIPAA, we build to the relevant control set from day one — audit logging, role-based access control, encryption at rest and in transit, no PHI in logs, and infrastructure-as-code so the auditor can read the deployment. PCI is sidestepped by keeping card data inside Stripe and only handling tokens.",
    },
    {
        q: "What is the single biggest reason custom CRM projects fail?",
        a: "Scope creep driven by people who were not in the discovery sessions. We have seen it more times than any technical issue. The fix is to lock scope in writing at discovery, ship the MVP without negotiation, and re-open scope at the v2 review. Anyone who tells you a custom build can absorb late additions for free is either lying or about to learn an expensive lesson on your dime.",
    },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
        },
    })),
};

export default function CustomCRMDevelopmentGuidePage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <article className="container mx-auto px-6 max-w-4xl">
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
                        <li>
                            <Link href="/blog" className="hover:text-sky-400 transition-colors">
                                Blog
                            </Link>
                        </li>
                        <li aria-hidden="true" className="text-gray-700">
                            ›
                        </li>
                        <li className="text-gray-300">
                            Custom CRM Development: The Complete Guide
                        </li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom CRM Development: The Complete Guide
                    </h1>
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-400 mb-8">
                        <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <time dateTime={PUBLISHED_ISO}>{PUBLISHED_DISPLAY}</time>
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {READING_MINUTES} min read
                        </span>
                        <span>
                            By{" "}
                            <Link href="/about" className="text-sky-400 hover:underline">
                                Bill Beltz
                            </Link>
                            , Founder, QUANT LAB USA INC
                        </span>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-300 space-y-5 leading-relaxed text-lg">
                        <p>
                            Most companies do not need a custom CRM. The ones that do are
                            usually past $1M ARR, paying a four-figure monthly SaaS bill
                            for the privilege of bending their sales motion to fit a vendor
                            object model, and watching their reps stop logging activity
                            because the tool is in their way. The break point arrives
                            quietly — a deal slips because three tools disagreed on who
                            owned the account, a forecast gets rebuilt in a spreadsheet
                            because the standard report cannot answer the question the
                            board is asking, and an integrations engineer has to be hired
                            to keep Salesforce, HubSpot, and Outreach from drifting apart.
                            At that point the question is no longer{" "}
                            <em>can we afford a custom CRM</em>; it is{" "}
                            <em>can we afford the one we are currently renting</em>. This
                            guide is the one I wish I had handed every founder who
                            eventually became a{" "}
                            <Link
                                href="/services/custom-crm-development"
                                className="text-sky-400 hover:underline"
                            >
                                custom CRM development
                            </Link>{" "}
                            client of mine. It covers when to build, what it costs, how
                            long it takes, the architecture we actually ship at{" "}
                            <Link href="/about" className="text-sky-400 hover:underline">
                                QUANT LAB USA INC
                            </Link>
                            , the honest tradeoffs against Salesforce, HubSpot, and
                            Pipedrive, and the three projects we shipped this year that
                            illustrate the pattern. If you are reading this from{" "}
                            <Link
                                href="/services/custom-crm-development/atlanta-ga"
                                className="text-sky-400 hover:underline"
                            >
                                Atlanta
                            </Link>
                            ,{" "}
                            <Link
                                href="/services/custom-crm-development/macon-ga"
                                className="text-sky-400 hover:underline"
                            >
                                Macon
                            </Link>
                            , or anywhere our team serves, the framework applies.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="rounded-2xl border border-white/10 bg-[#0d1526]/60 p-6 md:p-8">
                        <h2 className="text-lg font-semibold text-white mb-4">
                            Table of contents
                        </h2>
                        <ol className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                            {tableOfContents.map((section) => (
                                <li key={section.id}>
                                    <a
                                        href={`#${section.id}`}
                                        className="text-gray-400 hover:text-sky-400 transition-colors"
                                    >
                                        {section.label}
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <section id="why-saas-crms-fail">
                        <div className="flex items-center gap-3 mb-6">
                            <AlertTriangle className="w-7 h-7 text-sky-400" />
                            <h2 className="text-2xl md:text-3xl font-bold text-white">
                                1. Why off-the-shelf CRMs fail at scale
                            </h2>
                        </div>
                        <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                            <p>
                                Salesforce, HubSpot, and Pipedrive are excellent products
                                for the workflow they were designed around. The trouble is
                                that none of them was designed around <em>your</em>{" "}
                                workflow. They were designed around the median sales motion
                                of the median B2B SaaS company circa 2014, and every
                                customization beyond that median costs you time, money, or
                                report fidelity. By the time a sales operations lead has
                                rebuilt your pipeline as a stack of custom objects, the
                                vendor object model has become a tax you pay every quarter
                                in admin hours.
                            </p>
                            <h3 className="text-xl font-semibold text-white pt-4">
                                The four classic failure modes
                            </h3>
                            <p>
                                <strong className="text-gray-200">
                                    The custom-field tumor.
                                </strong>{" "}
                                Standard objects gain forty, then ninety, then two hundred
                                custom fields. Half are stale. Reps stop filling them in.
                                Reports become unreliable because the field someone is
                                segmenting on was renamed in 2023 and never backfilled.
                            </p>
                            <p>
                                <strong className="text-gray-200">
                                    The integration tax.
                                </strong>{" "}
                                Marketing automation, outbound platforms, support, billing,
                                and product analytics each have their own definition of an
                                Account. Keeping them in sync requires Zapier, then Tray,
                                then Workato, then a dedicated integrations engineer. The
                                "single source of truth" becomes whichever tool screamed
                                loudest in the last sync conflict.
                            </p>
                            <p>
                                <strong className="text-gray-200">The seat ratchet.</strong>{" "}
                                Per-seat pricing ratchets up every renewal. A 12-person
                                team on Salesforce Sales Cloud Enterprise plus a couple of
                                add-ons can clear $5,000 a month before consultants. That
                                budget compounds.
                            </p>
                            <p>
                                <strong className="text-gray-200">
                                    The report you cannot build.
                                </strong>{" "}
                                Eventually the board asks a question that the standard
                                reporting engine cannot answer. The data is in the platform
                                — it just is not exposed in the way you need. Someone ends
                                up dumping CSVs into a spreadsheet, building a parallel
                                source of truth, and the org quietly forks.
                            </p>
                            <p>
                                Each failure mode is fixable. Together they signal that the
                                business has outgrown the templates. The right move is not
                                to bolt a fifth tool on; it is to replace the stack with
                                software shaped around your actual operation. That is what{" "}
                                <Link
                                    href="/services/custom-crm-development"
                                    className="text-sky-400 hover:underline"
                                >
                                    a custom CRM build
                                </Link>{" "}
                                is for.
                            </p>
                        </div>
                    </section>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <section id="when-custom-makes-sense">
                        <div className="flex items-center gap-3 mb-6">
                            <Calculator className="w-7 h-7 text-sky-400" />
                            <h2 className="text-2xl md:text-3xl font-bold text-white">
                                2. When custom CRM actually makes sense
                            </h2>
                        </div>
                        <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                            <p>
                                We turn away roughly a third of the prospects who ask us
                                about custom CRM development. The reason is almost always
                                the same: their team is small enough, their process is
                                generic enough, and their SaaS bill is low enough that a
                                well-configured Pipedrive or HubSpot Starter would serve
                                them better than a custom build. Honesty about that line is
                                the most important thing a custom shop can offer.
                            </p>
                            <h3 className="text-xl font-semibold text-white pt-4">
                                The four-question threshold test
                            </h3>
                            <ol className="list-decimal pl-6 space-y-3">
                                <li>
                                    <strong className="text-gray-200">
                                        Are you paying more than $800 per month
                                    </strong>{" "}
                                    combined across CRM, sales engagement, lead enrichment,
                                    and the connector glue (Zapier, Tray, Workato) between
                                    them? If yes, the recurring cost is already in custom
                                    territory.
                                </li>
                                <li>
                                    <strong className="text-gray-200">
                                        Do at least two people in the org maintain a
                                        parallel spreadsheet
                                    </strong>{" "}
                                    because the CRM cannot answer their question? Parallel
                                    spreadsheets are the unambiguous signal of a workflow
                                    mismatch.
                                </li>
                                <li>
                                    <strong className="text-gray-200">
                                        Have you customized standard objects to the point
                                        of unrecognizability?
                                    </strong>{" "}
                                    If the standard Account, Contact, Opportunity model no
                                    longer maps to your business, you are paying for an
                                    object model you cannot use.
                                </li>
                                <li>
                                    <strong className="text-gray-200">
                                        Are you between $1M and $10M ARR with a sales
                                        motion that has a real shape?
                                    </strong>{" "}
                                    This is the sweet spot where custom CRMs return the
                                    investment fastest — the team is big enough that a
                                    badly fit tool costs real money, and small enough that
                                    you can decide and ship without a procurement cycle.
                                </li>
                            </ol>
                            <p>
                                Three yeses and the build pencils out. Four yeses and you
                                are already losing money waiting. If you want a clean
                                second opinion on where you sit, the{" "}
                                <Link
                                    href="/calculators/stripe-cost"
                                    className="text-sky-400 hover:underline"
                                >
                                    Stripe cost calculator
                                </Link>{" "}
                                is a useful warmup for the same kind of unit-economics
                                math, and our scope calls are always free.
                            </p>
                        </div>
                    </section>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <section id="comparison">
                        <div className="flex items-center gap-3 mb-6">
                            <GitBranch className="w-7 h-7 text-sky-400" />
                            <h2 className="text-2xl md:text-3xl font-bold text-white">
                                3. Custom vs Salesforce vs HubSpot vs Pipedrive
                            </h2>
                        </div>
                        <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                            <p>
                                I have built on or migrated off all three. Here is the
                                honest comparison — not the sales deck, not the marketing
                                site, the comparison I give every founder who asks me over
                                coffee.
                            </p>
                            <h3 className="text-xl font-semibold text-white pt-2">
                                Salesforce
                            </h3>
                            <p>
                                Best at: large enterprise sales with deep org hierarchies,
                                heavily regulated industries, and any motion where the
                                object model genuinely fits. Worst at: speed of change.
                                Every customization compounds the platform tax. You will
                                hire an admin, then a developer, then a consulting firm,
                                and the renewal will still go up every year. The honest
                                comparison piece is at{" "}
                                <Link
                                    href="/vs/salesforce"
                                    className="text-sky-400 hover:underline"
                                >
                                    custom CRM vs Salesforce
                                </Link>
                                .
                            </p>
                            <h3 className="text-xl font-semibold text-white pt-2">
                                HubSpot
                            </h3>
                            <p>
                                Best at: marketing-led growth motions, content-heavy
                                inbound funnels, and small teams who want sales and
                                marketing in one tool. Worst at: bespoke pipelines, complex
                                product catalogs, and per-seat costs once the team crosses
                                fifteen. The Sales Hub Professional and Enterprise tiers
                                escalate quickly, and many of the workflows you actually
                                need live behind add-on SKUs.
                            </p>
                            <h3 className="text-xl font-semibold text-white pt-2">
                                Pipedrive
                            </h3>
                            <p>
                                Best at: linear, pipeline-driven sales for small B2B teams.
                                Cheap, clean, and the right answer for a five-person team
                                that does outbound calls. Worst at: anything beyond linear
                                pipelines. The moment you need branching workflows, deep
                                automation, or non-deal records (memberships, recurring
                                services, equipment) you will hit the ceiling fast.
                            </p>
                            <h3 className="text-xl font-semibold text-white pt-2">
                                Custom CRM
                            </h3>
                            <p>
                                Best at: businesses whose sales motion does not fit the
                                vendor object model — contractors, agencies, regulated
                                services, two-sided marketplaces, ops-heavy operators, and
                                anyone whose monthly SaaS bill has crossed $800 per month.
                                Worst at: handing you a five-day onramp. Custom is a
                                six-week MVP minimum; if you need a CRM by Monday, buy one.
                            </p>
                            <p>
                                The right move is rarely "rip and replace." Most of our
                                clients run their custom CRM alongside an existing tool for
                                a few weeks while we migrate the system of record. That
                                pattern is covered in section 8.
                            </p>
                        </div>
                    </section>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <section id="architecture">
                        <div className="flex items-center gap-3 mb-6">
                            <Layers className="w-7 h-7 text-sky-400" />
                            <h2 className="text-2xl md:text-3xl font-bold text-white">
                                4. The architecture we actually ship
                            </h2>
                        </div>
                        <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                            <p>
                                Every custom CRM QuantLab has shipped in the past year
                                shares the same architectural skeleton. The reason is not
                                tribal preference — it is that this stack lets us ship a
                                production-grade build in six weeks instead of six months.
                                The boring middle is doing the work.
                            </p>
                            <h3 className="text-xl font-semibold text-white pt-2">
                                The stack, top to bottom
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    "Next.js 16 (App Router) for the application — server components for data-heavy admin views, client components for interactive forms, edge functions for webhooks",
                                    "React 19 + TypeScript for the UI layer — strict mode, no JS escape hatches, ESLint configured for production rigor",
                                    "PostgreSQL via Prisma for the data layer — schema-as-code, migrations checked into git, the database is the source of truth and every other tool defers to it",
                                    "Stripe for billing, subscriptions, and one-time charges — wired through webhooks into the CRM record so finance and sales share one ledger",
                                    "Resend for transactional email and proposal delivery — the same pipe we use on Northcrest Fence and HobbsPeak",
                                    "NextAuth v5 or a custom JWT setup for authentication — role-based access from day one, audit log for every write",
                                    "Tailwind CSS + shadcn/Radix UI for the design system — fast to ship, consistent across admin and customer-facing views",
                                    "Vercel for hosting by default, portable to AWS / GCP / your own infra if you prefer",
                                    "Sentry for error tracking, Vercel Analytics for performance, OpenTelemetry hooks where the audit trail demands it",
                                ].map((line) => (
                                    <li key={line} className="flex gap-3 text-gray-300">
                                        <Check className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                                        <span>{line}</span>
                                    </li>
                                ))}
                            </ul>
                            <h3 className="text-xl font-semibold text-white pt-4">
                                Why this stack and not the others
                            </h3>
                            <p>
                                Next.js is the only frontend framework that ships server
                                components, edge functions, and a route-based mental model
                                without a separate API service. That collapses two teams of
                                infrastructure into one. PostgreSQL is the only OLTP
                                database with a thirty-year track record, JSON support,
                                first-class window functions, and a healthy hosting market.
                                Prisma is the only ORM that makes the migration story sane
                                across deployments. Stripe is the only billing platform
                                whose webhook contract has not changed in a way that broke
                                production. None of this is novel. It is boring on purpose.
                            </p>
                            <p>
                                When we wire all of this together for a client, the
                                deliverable is one repository, one database, one
                                deployment, one observability stack. That is the
                                architectural difference from a Salesforce + HubSpot +
                                Outreach + Workato stack: there is only one place to look
                                when something goes wrong, and only one bill to pay.
                            </p>
                        </div>
                    </section>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <section id="feature-anatomy">
                        <div className="flex items-center gap-3 mb-6">
                            <Workflow className="w-7 h-7 text-sky-400" />
                            <h2 className="text-2xl md:text-3xl font-bold text-white">
                                5. Feature anatomy: what a real custom CRM contains
                            </h2>
                        </div>
                        <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                            <p>
                                Every custom CRM is different in the details, but the
                                feature surface area is more predictable than founders
                                expect. Below is the anatomy of a production custom CRM
                                build the way we ship them — not a feature list to copy
                                blindly, but the territory you should know before you scope
                                anything.
                            </p>
                            <h3 className="text-xl font-semibold text-white pt-2">
                                The core eight
                            </h3>
                            <ol className="list-decimal pl-6 space-y-3">
                                <li>
                                    <strong className="text-gray-200">
                                        Contact and account records
                                    </strong>{" "}
                                    with deduplication, merge logic, custom fields native
                                    to your domain, and a full activity timeline per
                                    record.
                                </li>
                                <li>
                                    <strong className="text-gray-200">
                                        Pipeline and deal management
                                    </strong>{" "}
                                    with stages that mirror your real sales motion,
                                    weighted forecasting, deal aging alerts, and SLA
                                    enforcement on stage durations.
                                </li>
                                <li>
                                    <strong className="text-gray-200">
                                        Lead capture and enrichment
                                    </strong>{" "}
                                    wired to your website forms, inbound channels,{" "}
                                    <Link
                                        href="/work/j5-sales-os"
                                        className="text-sky-400 hover:underline"
                                    >
                                        Apify scrapers
                                    </Link>
                                    , and any outbound discovery tools you run.
                                </li>
                                <li>
                                    <strong className="text-gray-200">
                                        Communication logging
                                    </strong>{" "}
                                    — email threads via Gmail or Outlook OAuth, SMS via
                                    Twilio, calls via your dialer of choice, all stitched
                                    to the right contact and deal automatically.
                                </li>
                                <li>
                                    <strong className="text-gray-200">
                                        Automation and assignment rules
                                    </strong>{" "}
                                    — round-robin lead routing, deal-stage transitions,
                                    follow-up cadences, and SLA escalations expressed as
                                    real code instead of a vendor's drag-and-drop palette.
                                </li>
                                <li>
                                    <strong className="text-gray-200">
                                        Reporting and dashboards
                                    </strong>{" "}
                                    built on PostgreSQL views — pipeline coverage, win
                                    rate, stage velocity, source attribution, and any
                                    ad-hoc question the board asks.
                                </li>
                                <li>
                                    <strong className="text-gray-200">
                                        Permissioned multi-user access
                                    </strong>{" "}
                                    with roles, audit trails, and a clear handoff path for
                                    regulated industries.
                                </li>
                                <li>
                                    <strong className="text-gray-200">
                                        Integrations
                                    </strong>{" "}
                                    with{" "}
                                    <Link
                                        href="/services/stripe-integration"
                                        className="text-sky-400 hover:underline"
                                    >
                                        Stripe
                                    </Link>
                                    , QuickBooks Online, Gmail / Outlook, Google Calendar,
                                    Slack, and any vertical-specific platform your business
                                    requires.
                                </li>
                            </ol>
                            <h3 className="text-xl font-semibold text-white pt-4">
                                The four upgrades that turn v1 into v2
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    "Customer portal — the place clients can log in to review proposals, invoices, and project status. Adds a lot of value at low marginal cost because the data is already in the CRM.",
                                    "Document generation — signed PDF proposals, invoices, and contracts produced from the same record. We use @react-pdf/renderer for this on most builds.",
                                    "Billing module — subscriptions, retainers, and one-time charges run through Stripe and wired back into the CRM. Covered in detail at our subscription-billing service page.",
                                    "Analytics and BI surface — usually a metabase / BI overlay on the same Postgres so finance and sales can self-serve without writing SQL.",
                                ].map((item) => (
                                    <li key={item} className="flex gap-3 text-gray-300">
                                        <Check className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="pt-2">
                                Most clients ship the core eight in the MVP and add two of
                                the four upgrades in the v2 release. The remaining two
                                live in a backlog and get prioritized against business
                                value, not against feature parity with a vendor sales deck.
                            </p>
                        </div>
                    </section>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <section id="cost">
                        <div className="flex items-center gap-3 mb-6">
                            <DollarSign className="w-7 h-7 text-sky-400" />
                            <h2 className="text-2xl md:text-3xl font-bold text-white">
                                6. What a custom CRM costs
                            </h2>
                        </div>
                        <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                            <p>
                                Custom CRM development is a fixed-fee engagement at
                                QuantLab. The number lands somewhere between $15,000 and
                                $80,000+ depending on scope. Below are the three brackets
                                we see most often, with what each one buys you.
                            </p>
                            <h3 className="text-xl font-semibold text-white pt-2">
                                $15k – $25k — the MVP
                            </h3>
                            <p>
                                Contacts, accounts, a single pipeline, basic automation, a
                                clean admin UI, deployment, and 30 days of post-launch
                                support. Suitable for a five- to twelve-person team
                                replacing Pipedrive or HubSpot Starter. Six-week build, no
                                third-party integrations beyond Stripe checkout.
                            </p>
                            <h3 className="text-xl font-semibold text-white pt-2">
                                $30k – $50k — the standard build
                            </h3>
                            <p>
                                Everything in the MVP plus one full integration
                                (QuickBooks, Twilio, or Outlook), reporting and
                                dashboards, customer portal, multi-user roles with audit
                                log, and document generation (proposals or invoices).
                                Suitable for a fifteen- to forty-person team replacing
                                Salesforce Professional or HubSpot Sales Pro. Eight- to
                                twelve-week build.
                            </p>
                            <h3 className="text-xl font-semibold text-white pt-2">
                                $60k – $80k+ — the full platform
                            </h3>
                            <p>
                                The standard build plus a billing module, advanced
                                automation, multiple integrations (QuickBooks +{" "}
                                <Link
                                    href="/services/subscription-billing"
                                    className="text-sky-400 hover:underline"
                                >
                                    Stripe subscriptions
                                </Link>{" "}
                                + Outlook + Slack), a BI overlay, and a SOC 2 or HIPAA
                                control set if compliance is in scope. This is the bracket
                                where the CRM becomes the system of record for the whole
                                business, not just the sales team. Twelve- to sixteen-week
                                build.
                            </p>
                            <p>
                                Discovery is always priced separately at $2,500 so you can
                                decide whether to commit to the full build before any
                                production code is written. The discovery output — wireframes,
                                a database schema, a phased estimate — is yours to keep
                                even if you take it to another dev.
                            </p>
                        </div>
                        <div className="mt-8 rounded-2xl border border-sky-400/30 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-6 md:p-8">
                            <h3 className="text-xl font-semibold text-white mb-3">
                                A useful warmup for the cost math
                            </h3>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                Before we sit down for a scope call, most clients walk
                                through our{" "}
                                <Link
                                    href="/calculators/stripe-cost"
                                    className="text-sky-400 hover:underline"
                                >
                                    Stripe cost calculator
                                </Link>{" "}
                                to see what their current payments stack actually costs
                                them annually. It is the same exercise applied to the CRM
                                question — pull the real number out of the SaaS receipts
                                and compare it to a one-time build.
                            </p>
                            <Link
                                href="/calculators/stripe-cost"
                                className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 font-semibold"
                            >
                                Run the Stripe cost calculator
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </section>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <section id="timeline">
                        <div className="flex items-center gap-3 mb-6">
                            <Clock className="w-7 h-7 text-sky-400" />
                            <h2 className="text-2xl md:text-3xl font-bold text-white">
                                7. Timeline: from kickoff to live
                            </h2>
                        </div>
                        <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                            <p>
                                The honest timeline for a production-grade custom CRM is
                                six weeks to a usable v1 and three months to a polished v2
                                with reporting, automations, and at least one full
                                third-party integration. Anyone promising less is hiding
                                scope; anyone quoting more than six months for a v1 is
                                over-engineering.
                            </p>
                            <h3 className="text-xl font-semibold text-white pt-2">
                                Week-by-week breakdown
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    {
                                        head: "Weeks 1–2: Discovery",
                                        body: "Working sessions with sales, ops, and finance. We document the actual sales motion (not the org chart version of it), draft the database schema, and wireframe the admin UI. Output: a phased estimate and an architectural spec.",
                                    },
                                    {
                                        head: "Weeks 3–4: Foundation",
                                        body: "Schema, migrations, authentication, role-based access control, the audit log, and the empty admin shell deployed to staging. The skeleton is in production by the end of week four.",
                                    },
                                    {
                                        head: "Weeks 5–6: MVP build",
                                        body: "Contacts, accounts, pipeline, deal management, basic automation, lead capture forms, communication logging. By the end of week six, the team can log in and use the CRM for new pipeline.",
                                    },
                                    {
                                        head: "Weeks 7–8: Data migration",
                                        body: "Historical contacts, deals, and notes from the old system come in. We run the new CRM and the old one in parallel for two weeks while reconciliation completes.",
                                    },
                                    {
                                        head: "Weeks 9–12: v2 polish",
                                        body: "Reporting, dashboards, the first integration (QuickBooks, Stripe, Outlook), customer portal if it is in scope, and proposal or invoice generation if applicable.",
                                    },
                                    {
                                        head: "Weeks 13+: Continuous improvement",
                                        body: "Monthly retainer or in-house ownership. Either way, the system is yours and the codebase is documented for the path you choose.",
                                    },
                                ].map((row) => (
                                    <li
                                        key={row.head}
                                        className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-5"
                                    >
                                        <p className="text-white font-semibold mb-1">
                                            {row.head}
                                        </p>
                                        <p className="text-gray-400 leading-relaxed">
                                            {row.body}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <section id="migration">
                        <div className="flex items-center gap-3 mb-6">
                            <Wrench className="w-7 h-7 text-sky-400" />
                            <h2 className="text-2xl md:text-3xl font-bold text-white">
                                8. Migration: moving off your current CRM without losing
                                history
                            </h2>
                        </div>
                        <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                            <p>
                                The fear that kills more custom CRM projects than any
                                other is the fear of losing five years of customer history
                                in the cutover. The fix is not to cut over at all — it is
                                to run the new CRM alongside the old one until parity is
                                proven, then promote the new one to system-of-record.
                            </p>
                            <h3 className="text-xl font-semibold text-white pt-2">
                                The dual-write pattern we use
                            </h3>
                            <ol className="list-decimal pl-6 space-y-3">
                                <li>
                                    <strong className="text-gray-200">
                                        Phase 1: Read-only mirror.
                                    </strong>{" "}
                                    The new CRM stands up empty. We script a one-shot
                                    import of contacts, accounts, deals, notes, and
                                    activities from the old system. Spot-check on a sample
                                    of 50 records.
                                </li>
                                <li>
                                    <strong className="text-gray-200">
                                        Phase 2: Dual write.
                                    </strong>{" "}
                                    New pipeline gets logged in the new CRM. Closed deals
                                    and archive records stay in the old one. Both are read
                                    by the team during the transition.
                                </li>
                                <li>
                                    <strong className="text-gray-200">
                                        Phase 3: Reconciliation.
                                    </strong>{" "}
                                    Reporting parity is verified — closed-won counts, deal
                                    velocity, source attribution all match within an
                                    acceptable margin. Anything that drifts gets traced
                                    and explained.
                                </li>
                                <li>
                                    <strong className="text-gray-200">
                                        Phase 4: Cutover.
                                    </strong>{" "}
                                    The old CRM is downgraded to a read-only legal archive,
                                    or exported in full and decommissioned. The team is on
                                    the new system as the system of record.
                                </li>
                            </ol>
                            <p>
                                We have migrated off HubSpot, Salesforce, Pipedrive, Zoho,
                                Insightly, Copper, Method, and roughly a dozen
                                spreadsheets-pretending-to-be-CRMs. The pattern is the
                                same. The only project that ever lost history did so
                                because the client refused dual-write and insisted on a
                                weekend cutover. Do not do that.
                            </p>
                        </div>
                    </section>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <section id="case-studies">
                        <div className="flex items-center gap-3 mb-6">
                            <LineChart className="w-7 h-7 text-sky-400" />
                            <h2 className="text-2xl md:text-3xl font-bold text-white">
                                9. Case studies: three CRMs we shipped this year
                            </h2>
                        </div>
                        <div className="prose prose-invert max-w-none text-gray-400 space-y-5 leading-relaxed">
                            <p>
                                The fastest way to make this concrete is to walk through
                                three projects that landed in production in 2026. Each one
                                started with a team that had outgrown the templates, and
                                each one shipped on the architecture in section 4.
                            </p>

                            <h3 className="text-xl font-semibold text-white pt-2">
                                <Link
                                    href="/work/northcrest-fence"
                                    className="text-white hover:text-sky-400 transition-colors"
                                >
                                    Northcrest Fence &amp; Gate — Atlanta, GA
                                </Link>
                            </h3>
                            <p>
                                Northcrest is a premium fencing contractor serving
                                Alpharetta, Roswell, Johns Creek, Milton, and the Atlanta
                                metro suburbs. Before we showed up, the sales process was
                                handwritten notes in the truck, typed-up Word document
                                proposals back at the office, hours or days after the
                                homeowner had already heard from a competing contractor.
                                QuantLab built a unified Next.js 16 sales platform — public
                                marketing site, mobile-first estimate capture, automated
                                PDF proposal generation, and an admin portal — all sharing
                                one Prisma / Postgres data layer. Proposal turnaround
                                dropped from one to three business days to under thirty
                                minutes. The full write-up is at{" "}
                                <Link
                                    href="/work/northcrest-fence"
                                    className="text-sky-400 hover:underline"
                                >
                                    the Northcrest Fence case study
                                </Link>
                                . The lesson: a CRM is only as good as the speed at which
                                it lets your team respond. Cut latency, win more deals.
                            </p>

                            <h3 className="text-xl font-semibold text-white pt-4">
                                <Link
                                    href="/work/j5-sales-os"
                                    className="text-white hover:text-sky-400 transition-colors"
                                >
                                    J5 Sales OS — Macon, GA
                                </Link>
                            </h3>
                            <p>
                                J5 is an operator-grade lead generation and pipeline SaaS
                                — the team had outgrown HubSpot for the exact reason most
                                people do: the niche verticals their reps work do not
                                show up cleanly in standard CRM enrichment pipelines, and
                                their sales motion required tighter integration between
                                discovery, qualification, and outreach than HubSpot's
                                workflow tools could deliver. QuantLab built J5 Sales OS
                                on Next.js 16 + Prisma with Google Places lead discovery,
                                concurrent email enrichment with directory blocklists,
                                OpenAI-powered qualification, a full CRM pipeline, and a
                                self-serve analytics dashboard. The result is a single
                                seller doing the discovery, enrichment, and outreach
                                workload that previously required three tools and two
                                people. Full write-up at{" "}
                                <Link
                                    href="/work/j5-sales-os"
                                    className="text-sky-400 hover:underline"
                                >
                                    the J5 Sales OS case study
                                </Link>
                                .
                            </p>

                            <h3 className="text-xl font-semibold text-white pt-4">
                                <Link
                                    href="/work/bridgepointe-painting"
                                    className="text-white hover:text-sky-400 transition-colors"
                                >
                                    Bridgepointe Painting — Atlanta, GA
                                </Link>
                            </h3>
                            <p>
                                Bridgepointe is a luxury painting and remodeling
                                contractor serving nine Atlanta-metro suburbs. The
                                challenge was unusual: they needed CRM-grade pipeline
                                management <em>and</em> deep QuickBooks Online parity so
                                the owner did not have to run a parallel set of books.
                                QuantLab built a bespoke Next.js / TypeScript operations
                                platform with bi-directional QuickBooks Online sync of
                                customers, vendors, items, and chart-of-accounts entities,
                                plus a customer portal, employee and subcontractor
                                management, and project tracking from estimate to invoice
                                to completion. Bookkeeping reconciliation time dropped
                                meaningfully and the QuickBooks file no longer requires
                                manual entry from spreadsheets. The full case study is at{" "}
                                <Link
                                    href="/work/bridgepointe-painting"
                                    className="text-sky-400 hover:underline"
                                >
                                    Bridgepointe Painting
                                </Link>
                                . The lesson: when accounting and CRM share a single source
                                of truth, an entire class of reconciliation work
                                disappears.
                            </p>

                            <p className="pt-2">
                                Two other case studies worth reading if you are in
                                adjacent industries: the{" "}
                                <Link
                                    href="/work/hobbspeak"
                                    className="text-sky-400 hover:underline"
                                >
                                    HobbsPeak headless commerce build
                                </Link>{" "}
                                (customer accounts, artwork-on-file, reorder portal —
                                effectively a CRM for an e-commerce brand), the{" "}
                                <Link
                                    href="/work/wilder-recovery"
                                    className="text-sky-400 hover:underline"
                                >
                                    Wilder Recovery lot-management platform
                                </Link>{" "}
                                (customer + asset record consolidation with chain-of-custody
                                audit logging), and the{" "}
                                <Link
                                    href="/work/protectwithbri"
                                    className="text-sky-400 hover:underline"
                                >
                                    ProtectWithBri advisor site
                                </Link>{" "}
                                (consultation-intake CRM for a single-advisor practice).
                            </p>
                        </div>
                    </section>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-8 md:p-10 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                            Walk us through your sales motion.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-6 leading-relaxed">
                            A twenty-minute scope call is the fastest way to find out
                            whether custom CRM development is the right move for your
                            team. Founder-led from quote to handoff.
                        </p>
                        <ConsultationCTA
                            label="Book a Scope Call"
                            service="Custom CRM Development"
                            source="blog-crm-guide-mid"
                        />
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <section id="pitfalls">
                        <div className="flex items-center gap-3 mb-6">
                            <AlertTriangle className="w-7 h-7 text-sky-400" />
                            <h2 className="text-2xl md:text-3xl font-bold text-white">
                                10. Pitfalls that kill custom CRM projects
                            </h2>
                        </div>
                        <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                            <p>
                                I have seen every one of these in the wild — sometimes on
                                our projects, sometimes on rescue work after another shop
                                started and could not finish. None of them are technical.
                            </p>
                            <h3 className="text-xl font-semibold text-white pt-2">
                                Scope creep from outside the discovery room
                            </h3>
                            <p>
                                The single biggest project killer. Discovery finishes, the
                                scope is signed, the build is underway, and three weeks in
                                a department head who never came to discovery surfaces
                                with "just one more thing." Multiply by five departments.
                                The fix is to lock scope in writing, hold the line during
                                the MVP, and re-open scope at the v2 review with a
                                separate quote.
                            </p>
                            <h3 className="text-xl font-semibold text-white pt-2">
                                Premature optimization
                            </h3>
                            <p>
                                The team that has not built a CRM before wants to
                                pre-build for every edge case they have ever seen on a
                                Salesforce trail. The right answer is to ship the MVP for
                                the workflow you actually have today, then add capacity
                                when the load is real. Schema decisions are the one
                                exception; the data model has to be future-proofed because
                                migrations are expensive.
                            </p>
                            <h3 className="text-xl font-semibold text-white pt-2">
                                No source of truth
                            </h3>
                            <p>
                                If you cannot answer the question "where does an account
                                live?" the project will fail. Two systems both claiming to
                                be the system of record is the most expensive
                                anti-pattern in software. Pick one. Make every other tool
                                a read-only mirror.
                            </p>
                            <h3 className="text-xl font-semibold text-white pt-2">
                                Hourly billing
                            </h3>
                            <p>
                                Custom development on an hourly basis aligns incentives
                                badly. The vendor is paid to take longer; the client is
                                paid to specify less. Fixed-fee per phase makes the deal
                                honest. If your shop will only quote hourly, find a
                                different shop.
                            </p>
                            <h3 className="text-xl font-semibold text-white pt-2">
                                The offshore handoff
                            </h3>
                            <p>
                                The pitch goes: discovery in the US, build in another
                                country, "you save 60%." What you save in dollars you pay
                                in revision cycles, time-zone latency, and the absence of
                                a single person who can answer for the whole product.
                                Custom CRM development is too high-leverage a project to
                                hand off. We build it from{" "}
                                <Link
                                    href="/software-development-macon-ga"
                                    className="text-sky-400 hover:underline"
                                >
                                    Macon, Georgia
                                </Link>{" "}
                                and we are on the call.
                            </p>
                        </div>
                    </section>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <section id="build-vs-buy">
                        <div className="flex items-center gap-3 mb-6">
                            <Shield className="w-7 h-7 text-sky-400" />
                            <h2 className="text-2xl md:text-3xl font-bold text-white">
                                11. The build-vs-buy decision framework
                            </h2>
                        </div>
                        <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                            <p>
                                If you want a single-page heuristic to take to the leadership
                                meeting, this is mine. Three weighted criteria, scored on a
                                one-to-five scale.
                            </p>
                            <h3 className="text-xl font-semibold text-white pt-2">
                                Criterion 1: workflow specificity (weight 3)
                            </h3>
                            <p>
                                Score one if your sales motion is "qualify, demo, close" and
                                fits Pipedrive without modification. Score five if your
                                motion involves multi-party approvals, recurring services,
                                physical inventory, or any non-standard data shape (cases,
                                vehicles, properties, projects, certifications, licenses).
                            </p>
                            <h3 className="text-xl font-semibold text-white pt-2">
                                Criterion 2: integration depth (weight 2)
                            </h3>
                            <p>
                                Score one if you need a CRM and nothing else. Score five
                                if you need the CRM to be the system of record for billing
                                via{" "}
                                <Link
                                    href="/services/stripe-integration"
                                    className="text-sky-400 hover:underline"
                                >
                                    Stripe
                                </Link>
                                , accounting via QuickBooks, communications via Gmail or
                                Twilio, and at least one vertical-specific platform.
                            </p>
                            <h3 className="text-xl font-semibold text-white pt-2">
                                Criterion 3: total cost of ownership exposure (weight 2)
                            </h3>
                            <p>
                                Score one if your current SaaS stack costs under $400 per
                                month and you have no scale plans. Score five if you are
                                already over $800 per month and the renewals keep going up.
                            </p>
                            <h3 className="text-xl font-semibold text-white pt-2">
                                Reading the score
                            </h3>
                            <p>
                                Multiply each score by its weight and sum. Under 16: buy
                                Pipedrive or HubSpot. 16 to 24: configure the best
                                off-the-shelf tool you can, and revisit in 12 months. Over
                                24: schedule a discovery call and start scoping a custom
                                build. The math is rough on purpose; what matters is
                                whether your three scores show the same direction.
                            </p>
                        </div>
                    </section>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <section id="what-we-ship">
                        <div className="flex items-center gap-3 mb-6">
                            <Terminal className="w-7 h-7 text-sky-400" />
                            <h2 className="text-2xl md:text-3xl font-bold text-white">
                                12. What we actually ship (deliverables checklist)
                            </h2>
                        </div>
                        <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                            <p>
                                The deliverables list is the same on every custom CRM
                                engagement. Use it as a checklist against any vendor
                                quote — if any of these are missing, ask why.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "GitHub repository with the full source code — yours to keep, no lock-in",
                                    "Production deployment + staging environment, both on the same infrastructure pattern",
                                    "PostgreSQL database with schema-as-code migrations and a documented data dictionary",
                                    "Admin documentation covering every module and every common workflow",
                                    "User documentation for the sales team — short, screenshot-heavy, useful on day one",
                                    "30 days of post-launch support included in the fixed fee",
                                    "Data migration from your existing CRM or spreadsheets, including reconciliation",
                                    "Integrations with Stripe, QuickBooks, Gmail / Outlook, Google Calendar, Slack, or Twilio as scoped",
                                    "Audit log + role-based access control baked in from day one",
                                    "Optional retainer agreement for continued feature work, priced by phase",
                                ].map((item) => (
                                    <li key={item} className="flex gap-3 text-gray-300">
                                        <Check className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="pt-2">
                                Related services that often ship alongside a custom CRM:{" "}
                                <Link
                                    href="/services/subscription-billing"
                                    className="text-sky-400 hover:underline"
                                >
                                    subscription billing
                                </Link>
                                ,{" "}
                                <Link
                                    href="/services/license-server"
                                    className="text-sky-400 hover:underline"
                                >
                                    license server
                                </Link>
                                ,{" "}
                                <Link
                                    href="/services/payments-invoicing-licensing"
                                    className="text-sky-400 hover:underline"
                                >
                                    payments + invoicing + licensing
                                </Link>
                                , and the broader{" "}
                                <Link
                                    href="/services/custom-business-software"
                                    className="text-sky-400 hover:underline"
                                >
                                    custom business software
                                </Link>{" "}
                                practice for ops and back-office tools.
                            </p>
                        </div>
                    </section>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <section id="service-area">
                        <div className="flex items-center gap-3 mb-6">
                            <MapPin className="w-7 h-7 text-sky-400" />
                            <h2 className="text-2xl md:text-3xl font-bold text-white">
                                13. Where we serve
                            </h2>
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-6 max-w-3xl">
                            QuantLab is headquartered in Macon, Georgia. Custom CRM
                            development engagements run remotely by default, with on-site
                            kickoffs available across the Southeast and major US metros.
                            Each city below has a dedicated landing page with a slightly
                            different angle — local vertical mix, common integration
                            patterns, and references where we can name them.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                            {cityLinks.map((c) => (
                                <Link
                                    key={c.slug}
                                    href={`/services/custom-crm-development/${c.slug}`}
                                    className="group flex items-center justify-between rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 transition-all hover:border-sky-400/30 hover:bg-[#0d1526]"
                                >
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0" />
                                        <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                                            {c.label}
                                        </span>
                                    </div>
                                    <ArrowRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                                </Link>
                            ))}
                        </div>
                    </section>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <section id="faq">
                        <div className="flex items-center gap-3 mb-6">
                            <BookOpen className="w-7 h-7 text-sky-400" />
                            <h2 className="text-2xl md:text-3xl font-bold text-white">
                                14. FAQ: 12 hard questions about custom CRMs
                            </h2>
                        </div>
                        <div className="space-y-6">
                            {faqItems.map((item) => (
                                <div
                                    key={item.q}
                                    className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6"
                                >
                                    <h3 className="text-white font-semibold mb-2">
                                        {item.q}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        {item.a}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Stop fighting your CRM.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call Bill Beltz directly at{" "}
                            <a
                                href="tel:+17706521282"
                                className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400"
                            >
                                (770) 652-1282
                            </a>{" "}
                            or use the form on our{" "}
                            <Link
                                href="/contact"
                                className="text-sky-400 hover:underline"
                            >
                                contact page
                            </Link>{" "}
                            to book a twenty-minute scope call. Founder-led from quote to
                            handoff, built in Georgia, owned by you.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <ConsultationCTA
                                label="Book a Scope Call"
                                service="Custom CRM Development"
                                source="blog-crm-guide-footer"
                            />
                            <Link
                                href="/services/custom-crm-development"
                                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-transparent px-6 py-3 text-sm font-semibold text-white hover:border-sky-400/40 hover:bg-[#0d1526] transition-all"
                            >
                                Custom CRM service overview
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
