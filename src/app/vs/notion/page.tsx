import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Scale, Check, ArrowRight } from "lucide-react";
import { comparisonMetadata } from "@/lib/seoMeta";

export const metadata: Metadata = comparisonMetadata({
    competitor: "Notion",
    title: "QUANT LAB USA vs Notion: Custom App Development 2026",
    description:
        "Notion is a superb docs-and-databases workspace for knowledge and light tracking. When a database becomes an operational system, a custom app wins. Honest 2026 comparison.",
    slug: "/vs/notion",
});

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "QUANT LAB USA vs Notion: Custom App vs Docs-and-Databases Workspace in 2026",
    description:
        "Honest comparison of Notion against a custom-built application. Feature matrix, where flexible databases stop scaling, per-seat cost compounding, and the point where a real app beats a Notion workspace.",
    url: "https://quantlabusa.dev/vs/notion",
    isPartOf: {
        "@type": "WebSite",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
    },
    about: {
        "@type": "Thing",
        name: "Notion Alternative",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Custom Business Software", item: "https://quantlabusa.dev/services/custom-business-software" },
        { "@type": "ListItem", position: 3, name: "vs Notion", item: "https://quantlabusa.dev/vs/notion" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "When is a custom app a better fit than Notion?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Custom usually wins when a Notion database has quietly become the system of record for an operational process, performance drags as rows and relations grow, you need real validation and integrity Notion does not enforce, or per-seat pricing across the whole company has passed the cost of a one-time build. For docs, wikis, knowledge bases, and light tracking, Notion is superb and hard to beat.",
            },
        },
        {
            "@type": "Question",
            name: "Can you migrate our Notion databases to a custom app?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Notion exposes a REST API covering pages, databases, properties, and relations, plus Markdown and CSV export. We model the databases into a proper PostgreSQL schema with real foreign keys and constraints, preserve the page content where it matters, and rebuild the filtered views your team relies on as application screens.",
            },
        },
        {
            "@type": "Question",
            name: "What is the timeline to replace a Notion workflow?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "6 to 12 weeks for the first production release. A single database with a few views is fast. A workspace with many interlinked databases, rollups, and synced content takes the upper end of that range.",
            },
        },
        {
            "@type": "Question",
            name: "Do we own the code if we leave Notion?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Completely. You get the GitHub repository, the PostgreSQL schema, the deployment configs, and the documentation. No per-seat pricing, no performance ceiling as databases grow, no relation limits, and no exit cost as the team and the data grow.",
            },
        },
        {
            "@type": "Question",
            name: "Is Notion ever the right long-term choice?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Often, yes. For documentation, wikis, knowledge bases, project notes, and light databases, Notion is excellent and should not be replaced. The hybrid pattern keeps Notion for knowledge and docs and builds custom only for the operational database that has quietly become a system of record.",
            },
        },
        {
            "@type": "Question",
            name: "How does the cost compare at 40 seats?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Notion's Plus and Business plans run roughly $10 to $18 per seat per month billed annually, so 40 seats lands somewhere around $5k to $9k per year before AI add-ons. A custom app at $40k to $75k one-time with a $12k to $20k annual retainer is usually more in year one, then competitive to cheaper from year two as seats and data grow.",
            },
        },
    ],
};

const proCustom = [
    "You own the schema, the source code, and the deployment",
    "Real relational integrity, constraints, and validation",
    "No performance ceiling as rows and relations grow",
    "Business logic in tested TypeScript, not formulas and rollups",
    "No per-seat ratchet as the whole company gets access",
];

const proNotion = [
    "Superb for docs, wikis, and knowledge bases",
    "Flexible databases anyone can build without code",
    "Pages, blocks, and content live alongside structured data",
    "Fast to set up, friendly for non-technical teams",
    "Roadmap funded by Notion R&D, not your engineering budget",
];

export default function CustomAppVsNotionPage() {
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
                        <li><Link href="/services/custom-business-software" className="hover:text-sky-400 transition-colors">Custom Business Software</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">vs Notion</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Scale className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        QUANT LAB USA vs Notion
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Notion is a superb docs-and-databases workspace. For a wiki, a knowledge base, or light tracking that lives next to your notes, almost nothing is more flexible or pleasant. The math turns when one of those databases quietly becomes the system of record for an operational process, performance drags as rows pile up, and you need integrity and logic a <Link href="/services/custom-business-software" className="text-sky-400 hover:underline">custom app</Link> would enforce. Here is the honest comparison.
                    </p>
                    <ConsultationCTA label="Scope a Notion Replacement" />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Custom app vs Notion: which should I choose?</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>Choose Notion when the work is knowledge, documentation, and light tracking, and the value of having content and flexible databases in one friendly workspace outweighs everything else. Choose a custom app when a database has become an operational system of record, performance drags as it grows, you need real validation and integrity, or per-seat pricing across the company has passed the cost of a build. The hybrid pattern keeps Notion for docs and knowledge and builds custom for the database that has outgrown it.</strong>
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
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Docs, wikis, knowledge base, light tracking</td><td className="px-4 py-3 font-semibold text-white">Notion</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Operational system of record, real integrity, scale</td><td className="px-4 py-3 font-semibold text-white">Custom app</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Keep Notion for docs, build the operational app custom</td><td className="px-4 py-3 font-semibold text-white">Hybrid</td></tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When Notion is the right call</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Notion earned its place by merging documents and databases into one fluid workspace. Pages and blocks for writing, flexible databases for structure, relations and rollups to connect them, and an interface a non-technical team adopts immediately. For a company wiki, a knowledge base, a project hub, or a lightweight tracker that lives next to its documentation, the flexibility is genuinely hard to match by writing an application.
                        </p>
                        <p>
                            If your primary need is knowledge and content with some structure on the side, your data volume is modest, and your processes change often enough that locking them into a schema would slow you down, Notion is the right call. The database views, templates, and the growing automation and AI features cover a lot of ground, and Notion lets a team self-serve without code. That is the use case the product was built for, and it serves it extremely well.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Where Notion starts to break</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Notion hits a ceiling at a predictable point. The first squeeze is scale and performance — a flexible database is wonderful at a few hundred rows, but as a tracker grows into thousands of records with relations and rollups, the views slow down and the workspace that felt instant starts to lag. The structure that made Notion approachable was never built to be a high-volume operational store.
                        </p>
                        <p>
                            The second squeeze is integrity. Notion will happily let a property hold the wrong kind of value, leave a required relation empty, or accumulate duplicates, because it was designed for flexibility, not enforcement. The third squeeze is logic and per-seat economics — formulas and rollups can fake a surprising amount, but real stateful business logic is beyond them, and as the whole company needs access, the per-seat bill on the Business tier starts to move the value math that drew you in.
                        </p>
                        <p>
                            None of this is Notion being a bad product. It is the cost of running an operational system of record on a workspace designed for knowledge and flexibility. Many teams discover a Notion database has silently become mission-critical and meet some version of this curve. The broader framing lives in our <Link href="/blog/build-vs-buy-software-2026" className="text-sky-400 hover:underline">build vs buy software guide</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When custom wins</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            A custom app tends to win when a Notion database has become an operational system of record, performance drags as it grows, you need real integrity and validation, or per-seat pricing across the company has passed the amortized cost of a build. <Link href="/services/web-applications" className="text-sky-400 hover:underline">Custom web applications</Link> give you a proper PostgreSQL schema with foreign keys and constraints, a UI tuned to the workflow, and logic that lives in tested code rather than formulas and rollups.
                        </p>
                        <p>
                            The other common driver is correctness and reporting. When the data is the business, you want a system that enforces the rules and stays fast at scale, with a clean API for the rest of your stack and reporting straight off the database. If the workflow has grown into something closer to a product, our <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platform development</Link> path picks up from there, and our <Link href="/blog/spreadsheet-to-web-app-migration-guide" className="text-sky-400 hover:underline">spreadsheet-to-web-app guide</Link> covers the migration patterns.
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
                                    <th className="px-4 py-3 text-left font-semibold text-white">Custom app (QUANT LAB USA)</th>
                                    <th className="px-4 py-3 text-left font-semibold">Notion</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-gray-300">
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Pricing model</td>
                                    <td className="px-4 py-3">One-time build + optional retainer</td>
                                    <td className="px-4 py-3">$10 to $18 per seat / month + AI</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Seat scaling</td>
                                    <td className="px-4 py-3">Flat infrastructure cost</td>
                                    <td className="px-4 py-3">Linear per-seat ratchet</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Iteration speed (early)</td>
                                    <td className="px-4 py-3">Days to weeks</td>
                                    <td className="px-4 py-3">Minutes</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Performance at scale</td>
                                    <td className="px-4 py-3">Indexed, stays fast</td>
                                    <td className="px-4 py-3">Drags as rows + relations grow</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Relationships</td>
                                    <td className="px-4 py-3">Real foreign keys, enforced</td>
                                    <td className="px-4 py-3">Relations + rollups</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Data integrity</td>
                                    <td className="px-4 py-3">Constraints + validation</td>
                                    <td className="px-4 py-3">Property types, loosely enforced</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Business logic</td>
                                    <td className="px-4 py-3">Tested TypeScript, version-controlled</td>
                                    <td className="px-4 py-3">Formulas, rollups, light automations</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Docs + content</td>
                                    <td className="px-4 py-3">Built only if you need it</td>
                                    <td className="px-4 py-3">First-class pages and blocks</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Integrations</td>
                                    <td className="px-4 py-3">Native API code, no markup</td>
                                    <td className="px-4 py-3">API + connectors, some paid</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Source code</td>
                                    <td className="px-4 py-3">Owned by client</td>
                                    <td className="px-4 py-3">Proprietary platform</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Data residency</td>
                                    <td className="px-4 py-3">Your infrastructure / region</td>
                                    <td className="px-4 py-3">Notion-managed</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Long-term TCO at 40+ seats</td>
                                    <td className="px-4 py-3">Flat after build</td>
                                    <td className="px-4 py-3">Compounds with seats</td>
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
                            <h3 className="text-white font-semibold mb-4">Where Notion wins</h3>
                            <ul className="space-y-2">
                                {proNotion.map((item) => (
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Cost comparison at 40 seats</h2>
                    <div className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Run the simple version. A team on Notion Business, 40 seats, three years:
                        </p>
                        <ul className="space-y-2 text-sm text-gray-300 mb-4">
                            <li className="flex gap-2"><span className="text-sky-400">~$18/seat/mo</span><span className="text-gray-400">=</span><span className="text-white">Notion Business at 40 seats</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">× 36 months</span><span className="text-gray-400">=</span><span className="text-white font-semibold">~$26k</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">+ ~$10k</span><span className="text-gray-400">=</span><span className="text-white">AI add-on + paid connectors</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">+ ~$16k</span><span className="text-gray-400">=</span><span className="text-white">workaround upkeep + admin time</span></li>
                            <li className="flex gap-2 border-t border-white/5 pt-2 mt-2"><span className="text-emerald-400 font-semibold">~$52k</span><span className="text-gray-400">=</span><span className="text-white font-semibold">3-year Notion TCO at this size</span></li>
                        </ul>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Compare against a custom app at $40k to $75k one-time, plus $12k to $20k annually for feature work and maintenance. That comes to $76k to $135k over three years — more in year one, then a question of whether the operational database is critical enough to justify owning it outright. The gap closes fastest when the alternative is fighting performance and integrity on a database that has outgrown the workspace.
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            The math stays with Notion for knowledge, docs, and light databases at almost any team size. The flip happens for operational systems of record, where seats plus add-ons plus the cost of working around scale and integrity limits exceed the amortized cost of a one-time custom build.
                        </p>
                    </div>
                    <div className="mt-4">
                        <Link
                            href="/pricing"
                            className="inline-flex items-center gap-1 text-sky-400 hover:underline text-sm"
                        >
                            See our pricing for custom app work <ArrowRight className="w-3 h-3" />
                        </Link>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Migration path off Notion</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The cutover follows a predictable pattern. Week one is data modeling — we map your databases, properties, and relations into a clean PostgreSQL schema with real foreign keys, and we decide which loosely-typed properties become enforced constraints. Week two is extraction through the Notion API and Markdown or CSV export, covering database rows, properties, relations, and the page content worth preserving, with reconciliation reports so nothing goes missing.
                        </p>
                        <p>
                            From there it is a normal build — application screens that replace the filtered views your team relied on, formulas and rollups rewritten as tested code, and integrations wired natively into the rest of your stack. Notion stays live in parallel during the build so day-to-day work never stops, then you cut over the operational database once the new app reaches parity, while docs and knowledge can stay in Notion. The old database can remain a read-only archive for a window before being retired.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <ConsultationCTA label="Get a Notion Migration Scope" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "When is a custom app a better fit than Notion?",
                                a: "Custom usually wins when a Notion database has quietly become the system of record for an operational process, performance drags as rows and relations grow, you need real validation and integrity Notion does not enforce, or per-seat pricing across the whole company has passed the cost of a one-time build. For docs, wikis, knowledge bases, and light tracking, Notion is superb and hard to beat.",
                            },
                            {
                                q: "Can you migrate our Notion databases to a custom app?",
                                a: "Yes. Notion exposes a REST API covering pages, databases, properties, and relations, plus Markdown and CSV export. We model the databases into a proper PostgreSQL schema with real foreign keys and constraints, preserve the page content where it matters, and rebuild the filtered views your team relies on as application screens.",
                            },
                            {
                                q: "Is Notion ever the right long-term choice?",
                                a: "Often, yes. For documentation, wikis, knowledge bases, project notes, and light databases, Notion is excellent and should not be replaced. The hybrid pattern keeps Notion for knowledge and docs and builds custom only for the operational database that has quietly become a system of record.",
                            },
                            {
                                q: "How does the cost compare at 40 seats?",
                                a: "Notion's Plus and Business plans run roughly $10 to $18 per seat per month billed annually, so 40 seats lands somewhere around $5k to $9k per year before AI add-ons. A custom app at $40k to $75k one-time with a $12k to $20k annual retainer is usually more in year one, then competitive to cheaper from year two as seats and data grow.",
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
                            href="/services/custom-business-software"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">Custom Business Software</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">The full service page — what we build, methodology, pricing.</p>
                        </Link>
                        <Link
                            href="/vs/airtable"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">vs Airtable</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">Flexible database compared to a custom app you own.</p>
                        </Link>
                        <Link
                            href="/vs/asana"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">vs Asana</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">Work management versus a custom workflow app.</p>
                        </Link>
                        <Link
                            href="/blog/spreadsheet-to-web-app-migration-guide"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">Spreadsheet to Web App</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">When a flexible store outgrows itself, and how to migrate.</p>
                        </Link>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["build-vs-buy","internal-tools"]}
                        heading="Related build-vs-buy reading"
                    />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Do the math on your Notion workspace.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or <Link href="/contact" className="text-sky-400 hover:underline">book a 20-minute scope call</Link>. We will walk through your databases, your row counts, and your seat count and tell you straight whether Notion is still right, custom is right, or you should run a hybrid.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
