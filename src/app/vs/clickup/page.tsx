import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Scale, Check, ArrowRight } from "lucide-react";
import { comparisonMetadata } from "@/lib/seoMeta";

export const metadata: Metadata = comparisonMetadata({
    competitor: "ClickUp",
    title: "QUANT LAB USA vs ClickUp: Custom Internal Tooling in 2026",
    description:
        "ClickUp is a deep, affordable work-management suite. When you bend it into an operational system it was not built to be, custom internal tooling wins. Honest 2026 comparison.",
    slug: "/vs/clickup",
});

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "QUANT LAB USA vs ClickUp: Custom Internal Tooling vs Work Management in 2026",
    description:
        "Honest comparison of ClickUp against custom-built internal tooling. Feature matrix, per-seat cost compounding, the limits of bending a work-management suite, and when a real app wins.",
    url: "https://quantlabusa.dev/vs/clickup",
    isPartOf: {
        "@type": "WebSite",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
    },
    about: {
        "@type": "Thing",
        name: "ClickUp Alternative",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Custom Business Software", item: "https://quantlabusa.dev/services/custom-business-software" },
        { "@type": "ListItem", position: 3, name: "vs ClickUp", item: "https://quantlabusa.dev/vs/clickup" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "When is custom internal tooling a better fit than ClickUp?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Custom usually wins when you have bent ClickUp into an operational system it was never meant to be — using tasks as records for a real workflow — when automations and custom fields have become fragile, when reporting outgrows the dashboards, or when per-seat pricing across the company has passed the cost of a build. For project and task management, ClickUp is excellent.",
            },
        },
        {
            "@type": "Question",
            name: "Can you migrate our ClickUp workspace to custom tooling?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. ClickUp exposes a full REST API plus export covering spaces, lists, tasks, custom fields, and relationships. We separate genuine project management from the operational data you forced into tasks, model that data into a proper PostgreSQL schema, and rebuild the operational workflow as a real application while project management can stay in ClickUp.",
            },
        },
        {
            "@type": "Question",
            name: "What is the timeline to replace a ClickUp-based workflow?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "6 to 12 weeks for the first production release. Replacing a single operational workflow that was crammed into ClickUp is fast. Untangling several interlinked workspaces that grew into a back-office system takes the upper end of that range.",
            },
        },
        {
            "@type": "Question",
            name: "Do we own the code if we leave ClickUp?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Completely. You get the GitHub repository, the PostgreSQL schema, the deployment configs, and the documentation. No per-seat ratchet, no per-feature plan gating, and no exit cost as the team grows.",
            },
        },
        {
            "@type": "Question",
            name: "Should we replace ClickUp entirely or keep it for projects?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Usually keep it for what it is good at. The hybrid pattern keeps ClickUp for genuine project and task management and builds custom only for the operational workflow you forced into it. The two integrate cleanly through the ClickUp API where that is useful.",
            },
        },
        {
            "@type": "Question",
            name: "How does the cost compare at 40 seats?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "ClickUp's paid tiers run roughly $7 to $19 per seat per month, so 40 seats lands somewhere around $3k to $9k per year — genuinely cheap. The case for custom is rarely pure license cost at that scale; it is the hidden cost of maintaining a fragile operational system on top of a task tool, plus the reporting and integrity you do not get.",
            },
        },
    ],
};

const proCustom = [
    "You own the schema, the source code, and the deployment",
    "Operational data modeled as real records, not tasks in disguise",
    "Reporting straight off PostgreSQL with real integrity",
    "Automations in tested TypeScript, not a fragile rule chain",
    "No per-seat ratchet or per-feature plan gating as you grow",
];

const proClickUp = [
    "Genuinely deep, flexible work and project management at a low price",
    "Views, custom fields, docs, and automations cover a huge range",
    "Fast to adopt for task and project workflows across a whole team",
    "Strong free and low-cost tiers make it easy to start",
    "Roadmap funded by ClickUp R&D, not your engineering budget",
];

export default function CustomToolingVsClickUpPage() {
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
                        <li className="text-gray-300">vs ClickUp</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Scale className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        QUANT LAB USA vs ClickUp
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        ClickUp is a deep, affordable work-management suite, and for projects and tasks it is genuinely excellent. The math turns when teams quietly bend it into an operational system — using tasks as records for a real workflow it was never built to carry — and the custom fields and automations grow fragile where <Link href="/services/custom-business-software" className="text-sky-400 hover:underline">custom internal tooling</Link> would model the data properly. Here is the honest comparison.
                    </p>
                    <ConsultationCTA label="Scope a ClickUp Replacement" />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Custom tooling vs ClickUp: which should I choose?</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>Choose ClickUp for genuine project and task management — it is deep, flexible, and cheap, and there is no reason to build that yourself. Choose custom internal tooling when you have forced an operational workflow into tasks, when automations and custom fields have become a maintenance liability, when reporting outgrows the dashboards, or when the integrity of the data matters. The hybrid pattern keeps ClickUp for projects and builds custom for the operational system you crammed into it.</strong>
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
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Project and task management for a team</td><td className="px-4 py-3 font-semibold text-white">ClickUp</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Operational workflow forced into tasks, fragile automations</td><td className="px-4 py-3 font-semibold text-white">Custom tooling</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Keep ClickUp for projects, build the ops system custom</td><td className="px-4 py-3 font-semibold text-white">Hybrid</td></tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When ClickUp is the right call</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            ClickUp earned its following by being genuinely deep and genuinely cheap. Multiple views, rich custom fields, docs, goals, and a capable automation builder cover an enormous range of project and task workflows, and a whole team can adopt it without much training. The free and low-cost tiers make it easy to start, and for managing work it is one of the strongest products in its class.
                        </p>
                        <p>
                            If what you need is to plan projects, track tasks, coordinate a team, and report on progress, ClickUp is the right call and building that yourself would be a waste. The flexibility that lets you shape lists, statuses, and fields to your team is exactly what makes it good. That is the job the suite was built for, and it does it extremely well.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Where ClickUp starts to break</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            ClickUp strains at a predictable point, and it is usually self-inflicted in the best way — the tool is flexible enough that teams use it for things it was never meant to be. The first squeeze is the modeling stretch: you start using tasks as records for an operational process — orders, clients, inventory, cases — and bend custom fields and statuses to fake a data model. It works until the relationships between those records matter, and then the cracks show.
                        </p>
                        <p>
                            The second squeeze is automation fragility. The rule chains that orchestrate your faked workflow grow into something nobody wants to touch, with no version control and no real way to test before it breaks. The third squeeze is reporting and integrity — dashboards built on tasks-as-records cannot answer the questions a real schema would, and nothing stops someone entering the wrong thing in the wrong field. None of this is ClickUp being a bad product; it is the cost of running an operational system on a work-management tool, the same pattern we cover for admin tooling in our <Link href="/blog/internal-tools-platform-engineering-guide" className="text-sky-400 hover:underline">internal tools engineering guide</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When custom wins</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Custom internal tooling tends to win when you have forced an operational workflow into ClickUp tasks, your automations have become a maintenance liability, your reporting needs answers the dashboards cannot give, or the integrity of the data has started to matter to the business. <Link href="/services/custom-business-software" className="text-sky-400 hover:underline">Custom business software</Link> models that data as real records in a proper schema, with the relationships, validation, and reporting a task tool cannot provide.
                        </p>
                        <p>
                            The other common driver is the workflow becoming core to operations. When the process you crammed into ClickUp is how the business actually runs, it deserves a real application — one tuned to the job, with logic in tested code and reporting straight off the database. Project management can stay in ClickUp; the operational system moves to something built for it. If that workflow is closer to a product, our <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platform development</Link> path extends the same foundation.
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
                                    <th className="px-4 py-3 text-left font-semibold text-white">Custom tooling (QUANT LAB USA)</th>
                                    <th className="px-4 py-3 text-left font-semibold">ClickUp</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-gray-300">
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Pricing model</td>
                                    <td className="px-4 py-3">One-time build + optional retainer</td>
                                    <td className="px-4 py-3">$7 to $19 per seat / month</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Best for</td>
                                    <td className="px-4 py-3">Operational systems and ops tooling</td>
                                    <td className="px-4 py-3">Project and task management</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Data model</td>
                                    <td className="px-4 py-3">Real records, real relationships</td>
                                    <td className="px-4 py-3">Tasks with custom fields</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Data integrity</td>
                                    <td className="px-4 py-3">Constraints + validation</td>
                                    <td className="px-4 py-3">Loosely enforced fields</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Automation</td>
                                    <td className="px-4 py-3">Tested TypeScript, version-controlled</td>
                                    <td className="px-4 py-3">Rule builder, no testing</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Reporting</td>
                                    <td className="px-4 py-3">PostgreSQL, any BI tool</td>
                                    <td className="px-4 py-3">Dashboards over tasks</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">UI</td>
                                    <td className="px-4 py-3">Tuned to the workflow</td>
                                    <td className="px-4 py-3">Generic views and lists</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Integrations</td>
                                    <td className="px-4 py-3">Native API code, no markup</td>
                                    <td className="px-4 py-3">Connectors and API</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Project management</td>
                                    <td className="px-4 py-3">Not the point — keep ClickUp</td>
                                    <td className="px-4 py-3">Excellent, deep</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Source code</td>
                                    <td className="px-4 py-3">Owned by client</td>
                                    <td className="px-4 py-3">Proprietary platform</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Time to v1</td>
                                    <td className="px-4 py-3">6 to 12 weeks</td>
                                    <td className="px-4 py-3">Days to weeks</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Long-term fit for ops systems</td>
                                    <td className="px-4 py-3">Strong</td>
                                    <td className="px-4 py-3">Fragile past a point</td>
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
                            <h3 className="text-white font-semibold mb-4">Where ClickUp wins</h3>
                            <ul className="space-y-2">
                                {proClickUp.map((item) => (
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pricing reality</h2>
                    <div className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Be honest about this one: ClickUp is cheap, and the case for custom is rarely the license bill. A team on ClickUp at 40 seats, three years:
                        </p>
                        <ul className="space-y-2 text-sm text-gray-300 mb-4">
                            <li className="flex gap-2"><span className="text-sky-400">~$15/seat/mo</span><span className="text-gray-400">=</span><span className="text-white">ClickUp Business at 40 seats</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">× 36 months</span><span className="text-gray-400">=</span><span className="text-white font-semibold">~$22k</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">+ hidden cost</span><span className="text-gray-400">=</span><span className="text-white">admin time maintaining a fragile ops setup</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">+ hidden cost</span><span className="text-gray-400">=</span><span className="text-white">bad decisions from reporting you cannot trust</span></li>
                            <li className="flex gap-2 border-t border-white/5 pt-2 mt-2"><span className="text-emerald-400 font-semibold">the real cost</span><span className="text-gray-400">=</span><span className="text-white font-semibold">running operations on a task tool</span></li>
                        </ul>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            For project management, that license cost is money well spent and custom makes no sense. The case for a build is not about beating $22k of ClickUp licensing — a custom operational system at $40k to $70k one-time, plus $12k to $20k a year, is justified by the reliability, the trustworthy reporting, and the maintenance you stop paying for, not by the subscription line item.
                        </p>
                    </div>
                    <div className="mt-4">
                        <Link
                            href="/pricing"
                            className="inline-flex items-center gap-1 text-sky-400 hover:underline text-sm"
                        >
                            See our pricing for custom tooling work <ArrowRight className="w-3 h-3" />
                        </Link>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Migration path off ClickUp</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The cutover starts with a separation, not an export. Week one is untangling — we work out which parts of your workspace are genuine project management (which can stay in ClickUp) and which are an operational workflow that was forced into tasks. Only the latter needs to move. We model that data into a proper PostgreSQL schema with real records and relationships.
                        </p>
                        <p>
                            Extraction runs through the ClickUp REST API and export, covering spaces, lists, tasks, custom fields, and relationships, with reconciliation reports. Then it is a normal build — a Next.js application for the operational workflow, automations rewritten as tested code, and reporting straight off the database. ClickUp stays live for project management throughout and integrates with the new system through its API where that is useful, so nothing stops during the transition.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <ConsultationCTA label="Get a ClickUp Migration Scope" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "When is custom internal tooling a better fit than ClickUp?",
                                a: "Custom usually wins when you have bent ClickUp into an operational system it was never meant to be — using tasks as records for a real workflow — when automations and custom fields have become fragile, when reporting outgrows the dashboards, or when per-seat pricing across the company has passed the cost of a build. For project and task management, ClickUp is excellent.",
                            },
                            {
                                q: "Can you migrate our ClickUp workspace to custom tooling?",
                                a: "Yes. ClickUp exposes a full REST API plus export covering spaces, lists, tasks, custom fields, and relationships. We separate genuine project management from the operational data you forced into tasks, model that data into a proper PostgreSQL schema, and rebuild the operational workflow as a real application while project management can stay in ClickUp.",
                            },
                            {
                                q: "Should we replace ClickUp entirely or keep it for projects?",
                                a: "Usually keep it for what it is good at. The hybrid pattern keeps ClickUp for genuine project and task management and builds custom only for the operational workflow you forced into it. The two integrate cleanly through the ClickUp API where that is useful.",
                            },
                            {
                                q: "How does the cost compare at 40 seats?",
                                a: "ClickUp's paid tiers run roughly $7 to $19 per seat per month, so 40 seats lands somewhere around $3k to $9k per year — genuinely cheap. The case for custom is rarely pure license cost at that scale; it is the hidden cost of maintaining a fragile operational system on top of a task tool, plus the reporting and integrity you do not get.",
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
                            href="/vs/monday-com"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">vs monday.com</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">The other work-management comparison — same framing, different platform.</p>
                        </Link>
                        <Link
                            href="/vs/airtable"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">vs Airtable</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">A flexible database forced into an app, compared to a custom build.</p>
                        </Link>
                        <Link
                            href="/blog/internal-tools-platform-engineering-guide"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">Internal Tools Engineering Guide</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">Architectural patterns for ops dashboards and back-office UIs.</p>
                        </Link>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["internal-tools","build-vs-buy"]}
                        heading="Related internal-tools reading"
                    />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Running operations on ClickUp tasks?
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or <Link href="/contact" className="text-sky-400 hover:underline">book a 20-minute scope call</Link>. We will look at what you are actually running in ClickUp and tell you straight what should stay there for projects and what deserves a real operational system.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
