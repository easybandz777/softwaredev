import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Scale, Check, ArrowRight } from "lucide-react";
import { comparisonMetadata } from "@/lib/seoMeta";

export const metadata: Metadata = comparisonMetadata({
    competitor: "Bubble.io",
    title: "QUANT LAB vs Bubble.io: When No-Code Hits Its Ceiling | QUANT LAB USA",
    description:
        "Bubble.io is genuinely useful for getting an MVP in front of users. When workload, complexity, or cost outgrow the platform, a custom Next.js + PostgreSQL build is the natural next step. Honest comparison.",
    slug: "/vs/bubble-io",
});

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "QUANT LAB vs Bubble.io: When No-Code Hits Its Ceiling",
    description:
        "Honest comparison of Bubble.io against a custom Next.js plus PostgreSQL build. Feature matrix, cost compounding, migration path, and breakeven math for SaaS and internal-tool builders.",
    url: "https://quantlabusa.dev/vs/bubble-io",
    isPartOf: {
        "@type": "WebSite",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
    },
    about: {
        "@type": "Thing",
        name: "Bubble.io Alternative",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "SaaS Platform Development", item: "https://quantlabusa.dev/services/saas-platform-development" },
        { "@type": "ListItem", position: 3, name: "vs Bubble.io", item: "https://quantlabusa.dev/vs/bubble-io" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "When should we leave Bubble.io for a custom build?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Common breaking signals are: Workload Unit costs growing faster than revenue, page load times above three seconds on workflow-heavy pages, complex backend workflows that take longer to debug than to rebuild in code, API rate limits or data structure constraints blocking a feature, and enterprise customers asking for SOC 2 or HIPAA features Bubble cannot certify cleanly.",
            },
        },
        {
            "@type": "Question",
            name: "Can you migrate us from Bubble.io to a custom Next.js plus PostgreSQL build?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Bubble.io data exports through the Data API and the database CSV export cover all data types, fields, and records. Workflows get rebuilt as TypeScript code (not ported one-to-one), because the new architecture can usually do more with less brittleness. We typically run the Bubble app in parallel during cutover so users do not see downtime.",
            },
        },
        {
            "@type": "Question",
            name: "What is the timeline to replace a Bubble.io app with a custom build?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "8 to 16 weeks for the first production release on most Bubble migrations. The data model is usually the fast part because Bubble's database is already structured. The longer phase is rebuilding workflows as TypeScript and adding the testability, observability, and performance characteristics the platform did not provide.",
            },
        },
        {
            "@type": "Question",
            name: "Do we lose our Bubble.io users during the migration?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No. We run both systems in parallel during cutover, migrate user accounts with password resets (or social sign-in continuity), and switch DNS at a single planned cutover moment. Users see a faster, more reliable app — same workflows, better performance.",
            },
        },
        {
            "@type": "Question",
            name: "How does the cost compare at scale?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Bubble.io's Workload Unit (WU) pricing scales with usage. Apps that hit the platform hard often spend $1,500 to $4,000 per month on WUs alone before adding paid plugins, integrations, and capacity packs. A custom Next.js plus PostgreSQL build on Vercel plus Neon or AWS RDS typically runs $100 to $400 per month for equivalent traffic, with the build amortizing over 18 to 24 months against the savings.",
            },
        },
        {
            "@type": "Question",
            name: "Can we keep Bubble.io for internal tools and build customer-facing custom?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes — and this is the hybrid pattern we recommend most often. Bubble stays for internal admin tools, where its visual editor speed is genuinely valuable. The customer-facing product moves to Next.js plus PostgreSQL where performance, observability, and cost economics favor real code. Both connect to the same shared data through APIs.",
            },
        },
    ],
};

const proCustom = [
    "Flat, predictable hosting cost — no Workload Unit ratchet against your usage",
    "Sub-second page loads on workflow-heavy pages where Bubble slows down",
    "Real testability — unit tests, integration tests, CI/CD that Bubble cannot offer",
    "SOC 2 and HIPAA-ready infrastructure when enterprise customers need it",
    "You own the schema, the source code, and the deployment",
];

const proBubble = [
    "Fastest possible path to a working MVP — days, not weeks",
    "Visual editor lets non-engineers maintain and extend the product",
    "Built-in user management, database, file storage, and hosting in one product",
    "Plugin marketplace covers most integrations without writing code",
    "Roadmap funded by Bubble.io R&D, not your engineering budget",
];

export default function CustomVsBubblePage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="container mx-auto px-6 max-w-4xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/services/saas-platform-development" className="hover:text-sky-400 transition-colors">SaaS Platform Development</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">vs Bubble.io</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Scale className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        QUANT LAB vs Bubble.io
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Bubble.io is genuinely useful for getting an MVP in front of users. The team that built on Bubble at idea stage is almost always glad they did — speed to market is real value. The math turns when Workload Unit cost, performance ceilings, or workflow complexity start to outgrow the platform. That is when a <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">custom Next.js + PostgreSQL build</Link> becomes the natural next step. Here is the honest comparison.
                    </p>
                    <ConsultationCTA label="Scope a Bubble Migration" />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Custom vs Bubble.io: which should I choose?</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>Choose Bubble when you are pre-product-market-fit, you need to ship an MVP in days rather than weeks, you do not have engineering on the team yet, and your traffic is low enough that Workload Unit cost is not yet a meaningful line item. Choose custom when your product has crossed product-market-fit, your WU spend has climbed past $1,500 per month, you have hit a performance ceiling on workflow-heavy pages, enterprise customers want SOC 2 or HIPAA features, or the visual editor has become slower than writing code for your team. The hybrid pattern (Bubble for internal admin, custom for customer-facing) is common and works well.</strong>
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Quick verdict</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left border border-white/10 rounded-xl overflow-hidden">
                            <thead className="bg-[#0d1526] text-white">
                                <tr>
                                    <th className="px-4 py-3 border-b border-white/10">Scenario</th>
                                    <th className="px-4 py-3 border-b border-white/10">Best choice</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Pre-PMF MVP, no engineering team, low traffic</td><td className="px-4 py-3 font-semibold text-white">Bubble.io</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Post-PMF, WU spend climbing, enterprise customers, performance ceiling</td><td className="px-4 py-3 font-semibold text-white">Custom build</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Bubble for internal admin, custom for customer-facing product</td><td className="px-4 py-3 font-semibold text-white">Hybrid</td></tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When Bubble.io is the right call</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Bubble.io earned its position as the strongest no-code app platform on the market. It is the right call when you are pre-product-market-fit, you need to validate a workflow with real users in days rather than weeks, you do not have engineers on the team yet, and you want a stack that one founder can maintain. The visual editor is genuinely fast, the database is real (not spreadsheet-shaped), and the deployment story is one click.
                        </p>
                        <p>
                            Many of the best-known no-code success stories — internal tools that became products, marketplace MVPs that found traction, vertical SaaS that validated a niche — started on Bubble and stayed there longer than expected because the platform kept being fast enough. Founders who pick Bubble at idea stage and ship in two weeks are almost always glad they did. The question is what to do when the platform starts to hold the product back.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Where Bubble.io starts to hit its ceiling</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Bubble hits a ceiling at a predictable pattern. The first squeeze is Workload Unit cost. Bubble's WU pricing scales with usage — every page load, every workflow run, every database query consumes WUs. Apps that hit product-market-fit often watch their monthly bill climb from $80 to $400 to $1,500 to $4,000 within a few quarters, even with WU optimization. None of this is Bubble being a bad value at the low end; it is the cost of running a fully-managed visual-development platform at scale.
                        </p>
                        <p>
                            The second squeeze is performance. Bubble pages with complex workflows or large data sources take noticeably longer to load than equivalent custom code. For customer-facing apps that compete on UX, the page-load gap becomes a conversion problem. The third squeeze is observability and testability. Bubble does not offer real unit tests, real integration tests, or the kind of error monitoring that modern engineering teams expect. When a workflow breaks in production, finding the cause is slower than it would be on a real codebase.
                        </p>
                        <p>
                            The fourth squeeze is compliance. Enterprise customers asking for SOC 2 or HIPAA features push you toward infrastructure Bubble was not designed to support. The fifth squeeze is hiring — once you can afford engineers, the visual editor becomes slower than writing code for the team you have.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When custom wins</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            A custom Next.js plus PostgreSQL build wins when you have crossed product-market-fit, your WU spend has climbed past your comfort zone, your performance ceiling is hurting conversion, your customers want enterprise compliance features Bubble cannot certify cleanly, or your team has grown to the point where engineers can ship faster in code than founders can ship in Bubble. <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platform development</Link> on Vercel plus Neon or AWS RDS gives you flat hosting cost, sub-second performance, real testability, and SOC 2-ready infrastructure as a starting point.
                        </p>
                        <p>
                            The other driver is rate of change. Custom code with CI/CD, code review, and tests lets a team change the product safely. Bubble lets you change anything fast, but breaking changes are also fast — and the cost of a workflow regression in production is real. Pair the build with <Link href="/services/ai-integration-services" className="text-sky-400 hover:underline">AI integration</Link> if your product is moving toward LLM-powered features that Bubble's plugin model handles awkwardly.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Side-by-side feature matrix</h2>
                    <div className="overflow-x-auto rounded-xl border border-white/5 bg-[#0d1526]/60">
                        <table className="min-w-full text-sm">
                            <thead className="bg-[#0a1120]/80 text-gray-400">
                                <tr>
                                    <th className="px-4 py-3 text-left font-semibold">Dimension</th>
                                    <th className="px-4 py-3 text-left font-semibold text-white">Custom build (QUANT LAB)</th>
                                    <th className="px-4 py-3 text-left font-semibold">Bubble.io</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-gray-300">
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Pricing model</td>
                                    <td className="px-4 py-3">One-time build + flat hosting</td>
                                    <td className="px-4 py-3">Plan tier + Workload Units + plugins</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Stack</td>
                                    <td className="px-4 py-3">Next.js + TypeScript + PostgreSQL</td>
                                    <td className="px-4 py-3">Bubble's proprietary runtime</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Performance</td>
                                    <td className="px-4 py-3">Sub-second page loads</td>
                                    <td className="px-4 py-3">Variable, slower on heavy workflows</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Testability</td>
                                    <td className="px-4 py-3">Unit, integration, end-to-end</td>
                                    <td className="px-4 py-3">Manual testing primarily</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Observability</td>
                                    <td className="px-4 py-3">Sentry, Datadog, OpenTelemetry</td>
                                    <td className="px-4 py-3">Server logs + manual debugging</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Compliance posture</td>
                                    <td className="px-4 py-3">SOC 2 / HIPAA-ready infra</td>
                                    <td className="px-4 py-3">Bubble platform certifications only</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Database</td>
                                    <td className="px-4 py-3">PostgreSQL with full SQL</td>
                                    <td className="px-4 py-3">Bubble's structured DB</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Reporting</td>
                                    <td className="px-4 py-3">PostgreSQL views, any BI tool</td>
                                    <td className="px-4 py-3">Bubble repeating groups + plugins</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Source code</td>
                                    <td className="px-4 py-3">Owned by client</td>
                                    <td className="px-4 py-3">Proprietary platform</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Hosting cost at scale</td>
                                    <td className="px-4 py-3">Flat, predictable</td>
                                    <td className="px-4 py-3">WU-based, scales with usage</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Time to MVP</td>
                                    <td className="px-4 py-3">8 to 16 weeks for production v1</td>
                                    <td className="px-4 py-3">Days for prototype</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Suitable for post-PMF growth</td>
                                    <td className="px-4 py-3">Yes, by design</td>
                                    <td className="px-4 py-3">Best at pre-PMF</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                            <h3 className="text-white font-semibold mb-4">Where custom wins</h3>
                            <ul className="space-y-2">
                                {proCustom.map((item) => (
                                    <li key={item} className="flex gap-2 text-gray-300 text-sm">
                                        <Check className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                            <h3 className="text-white font-semibold mb-4">Where Bubble.io wins</h3>
                            <ul className="space-y-2">
                                {proBubble.map((item) => (
                                    <li key={item} className="flex gap-2 text-gray-300 text-sm">
                                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Cost comparison at post-PMF scale</h2>
                    <div className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Run the simple version. A post-PMF Bubble app with steady production traffic, three years:
                        </p>
                        <ul className="space-y-2 text-sm text-gray-300 mb-4">
                            <li className="flex gap-2"><span className="text-sky-400">~$2,000/mo</span><span className="text-gray-400">=</span><span className="text-white">Bubble Production plan + WUs at steady load</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">+ ~$300/mo</span><span className="text-gray-400">=</span><span className="text-white">paid plugins + capacity packs + integrations</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">× 36 months</span><span className="text-gray-400">=</span><span className="text-white font-semibold">~$83k</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">+ ~$60k</span><span className="text-gray-400">=</span><span className="text-white">Bubble-specialist development work over 3 years</span></li>
                            <li className="flex gap-2 border-t border-white/5 pt-2 mt-2"><span className="text-emerald-400 font-semibold">~$143k</span><span className="text-gray-400">=</span><span className="text-white font-semibold">3-year Bubble TCO at this size</span></li>
                        </ul>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Compare against a custom Next.js plus PostgreSQL build at $60k to $120k one-time on Vercel plus Neon, plus $200 per month hosting and $20k to $30k annually for feature work and maintenance. That comes to $130k to $210k over three years. Headline three-year cost is close, but the gap widens after year three as WU consumption grows and custom hosting stays flat. The bigger value is performance, reliability, and the ability to hire engineers who can ship in your stack.
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            The math stays in Bubble's favor at the low end — pre-PMF, low traffic, no engineers, no enterprise customers. The flip happens when WU spend, performance, or compliance becomes a binding constraint. Most teams hit one of these within 18 to 24 months of finding product-market-fit.
                        </p>
                    </div>
                    <div className="mt-4">
                        <Link
                            href="/pricing"
                            className="inline-flex items-center gap-1 text-sky-400 hover:underline text-sm"
                        >
                            See our pricing for custom SaaS builds <ArrowRight className="w-3 h-3" />
                        </Link>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Migration path off Bubble.io</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The cutover follows a predictable pattern. Week one is data modeling — we extract your Bubble database schema (data types, fields, options, relationships) and remodel it into PostgreSQL with foreign keys, indexes, and constraints. Week two is API extraction through the Bubble Data API plus CSV export, with reconciliation reports so nothing goes missing. Authentication moves through a password-reset flow or social sign-in continuity.
                        </p>
                        <p>
                            Weeks three through twelve are the new system build — Next.js application, TypeScript backend, PostgreSQL schema, observability and CI/CD. Bubble stays live in parallel so users do not see downtime. The cutover happens with a final delta sync and a DNS switch at a planned moment. Bubble moves to read-only for 60 days as an archive before being decommissioned. The full pattern is documented in our <Link href="/blog/custom-crm-development-guide" className="text-sky-400 hover:underline">custom build methodology guide</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <ConsultationCTA label="Get a Bubble Migration Scope" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Real-world example</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            <Link href="/work/j5-sales-os" className="text-sky-400 hover:underline">J5 Sales OS</Link> is the closest internal analogue — a QUANT LAB-built sales platform with contact deduplication, outreach presets, dual-mode lead flow, embedded reporting, and Stripe plus QuickBooks integration. Same architecture pattern we ship to teams replacing post-PMF Bubble apps: Next.js plus PostgreSQL on Vercel, full TypeScript, observability and CI/CD from day one.
                        </p>
                        <p>
                            <Link href="/work/bridgepointe-painting" className="text-sky-400 hover:underline">Bridgepointe Painting</Link> is a vertical proof point. Field-service businesses often run their pipeline on Bubble, Airtable, or Monday until the workflow outgrows the platform. We built a custom CRM plus <Link href="/services/stripe-integration" className="text-sky-400 hover:underline">Stripe integration</Link> plus QuickBooks stack that closed their month-end from three days to thirty minutes — performance, integrity, and observability the no-code stack could not match.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "When should we leave Bubble.io for a custom build?",
                                a: "Common breaking signals are: Workload Unit costs growing faster than revenue, page load times above three seconds on workflow-heavy pages, complex backend workflows that take longer to debug than to rebuild in code, API rate limits or data structure constraints blocking a feature, and enterprise customers asking for SOC 2 or HIPAA features Bubble cannot certify cleanly.",
                            },
                            {
                                q: "Can you migrate us from Bubble.io to a custom Next.js plus PostgreSQL build?",
                                a: "Yes. Bubble.io data exports through the Data API and the database CSV export cover all data types, fields, and records. Workflows get rebuilt as TypeScript code (not ported one-to-one), because the new architecture can usually do more with less brittleness. We typically run the Bubble app in parallel during cutover so users do not see downtime.",
                            },
                            {
                                q: "Do we lose our Bubble.io users during the migration?",
                                a: "No. We run both systems in parallel during cutover, migrate user accounts with password resets (or social sign-in continuity), and switch DNS at a single planned cutover moment. Users see a faster, more reliable app — same workflows, better performance.",
                            },
                            {
                                q: "Can we keep Bubble.io for internal tools and build customer-facing custom?",
                                a: "Yes — and this is the hybrid pattern we recommend most often. Bubble stays for internal admin tools, where its visual editor speed is genuinely valuable. The customer-facing product moves to Next.js plus PostgreSQL where performance, observability, and cost economics favor real code. Both connect to the same shared data through APIs.",
                            },
                        ].map((item) => (
                            <div key={item.q} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related comparisons and services</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Link
                            href="/services/saas-platform-development"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">SaaS Platform Development</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">The full service page — what we build, methodology, pricing.</p>
                        </Link>
                        <Link
                            href="/services/web-applications"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">Web Application Development</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">If your migration is web-first, this is the underlying capability.</p>
                        </Link>
                        <Link
                            href="/vs/monday-com"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">vs Monday.com</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">The other no-code-hits-its-ceiling comparison — different platform, similar break point.</p>
                        </Link>
                        <Link
                            href="/vs/webflow"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">vs Webflow</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">The marketing-site equivalent comparison — different scope, same vendor-vs-custom math.</p>
                        </Link>
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Pull your last three months of WU costs.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or <Link href="/contact" className="text-sky-400 hover:underline">book a 20-minute scope call</Link>. We will walk through your WU trend, your performance metrics, your compliance roadmap, and the parts of your product Bubble is making harder than they need to be — and tell you straight whether Bubble is still right, custom is right, or you should run a hybrid.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
