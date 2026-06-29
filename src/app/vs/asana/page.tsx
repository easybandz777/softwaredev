import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Scale, Check, ArrowRight } from "lucide-react";
import { comparisonMetadata } from "@/lib/seoMeta";

export const metadata: Metadata = comparisonMetadata({
    competitor: "Asana",
    title: "QUANT LAB USA vs Asana: Custom Workflow Tooling 2026",
    description:
        "Asana is a polished work management tool for tasks, projects, and team coordination. When your process needs its own data and logic, custom workflow tooling wins. Honest 2026 comparison.",
    slug: "/vs/asana",
});

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "QUANT LAB USA vs Asana: Custom Workflow Tooling vs Work Management in 2026",
    description:
        "Honest comparison of Asana against a custom-built workflow application. Feature matrix, the limits of task-and-project structure, per-seat cost compounding, and the point where a purpose-built app beats a configured work tool.",
    url: "https://quantlabusa.dev/vs/asana",
    isPartOf: {
        "@type": "WebSite",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
    },
    about: {
        "@type": "Thing",
        name: "Asana Alternative",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Custom Business Software", item: "https://quantlabusa.dev/services/custom-business-software" },
        { "@type": "ListItem", position: 3, name: "vs Asana", item: "https://quantlabusa.dev/vs/asana" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "When is custom workflow tooling a better fit than Asana?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Custom usually wins when your process has outgrown a task-and-project model, you are stacking custom fields and rules to fake structure Asana does not have, you need the workflow tied directly to your own business data, or per-seat pricing across the whole company has passed the cost of a one-time build. For general team task coordination and project tracking, Asana is excellent and hard to beat.",
            },
        },
        {
            "@type": "Question",
            name: "Can you migrate our Asana projects to a custom app?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Asana exposes a full REST API covering tasks, projects, custom fields, sections, dependencies, comments, and attachments, plus CSV export. We model the work into a proper PostgreSQL schema with real relationships and constraints, port the rules into tested code, and rebuild the boards, lists, and timelines your team relies on as application views.",
            },
        },
        {
            "@type": "Question",
            name: "What is the timeline to replace an Asana workflow?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "6 to 12 weeks for the first production release. A single project type with a few rules is fast. A portfolio of interlinked projects with custom fields, dependencies, and a pile of integrations takes the upper end of that range.",
            },
        },
        {
            "@type": "Question",
            name: "Do we own the code if we leave Asana?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Completely. You get the GitHub repository, the PostgreSQL schema, the deployment configs, and the documentation. No per-seat pricing, no tier gates on the features you need, no rule limits, and no exit cost as the team and the data grow.",
            },
        },
        {
            "@type": "Question",
            name: "Is Asana ever the right long-term choice?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Often, yes. For cross-team task coordination, project planning, and lightweight process tracking, Asana is polished, fast to adopt, and should not be replaced. The hybrid pattern keeps Asana for general work management and builds custom only for the operational workflow that has outgrown a task model.",
            },
        },
        {
            "@type": "Question",
            name: "How does the cost compare at 40 seats?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Asana's Starter and Advanced plans run roughly $11 to $25 per seat per month billed annually, so 40 seats lands somewhere around $5k to $12k per year before add-ons. A custom workflow app at $45k to $80k one-time with a $14k to $22k annual retainer is usually a touch more in year one, then competitive to cheaper from year two as seats and data grow.",
            },
        },
    ],
};

const proCustom = [
    "You own the schema, the source code, and the deployment",
    "Your process modeled as real data, not faked with custom fields",
    "No per-seat ratchet as the whole company gets access",
    "Business logic in tested TypeScript, not stacked rules",
    "The workflow is tied directly to your own business data",
];

const proAsana = [
    "Polished, fast-to-adopt work management non-engineers love",
    "Excellent for cross-team coordination and project planning",
    "Lists, boards, timelines, and portfolios out of the box",
    "Broad integration and automation ecosystem",
    "Roadmap funded by Asana R&D, not your engineering budget",
];

export default function CustomAppVsAsanaPage() {
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
                        <li className="text-gray-300">vs Asana</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Scale className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        QUANT LAB USA vs Asana
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Asana is a polished work management tool. For cross-team task coordination and project planning, very little is faster to adopt or easier to live in. The math turns when your process outgrows a task-and-project model, you start faking structure with custom fields and rules, and you need the workflow tied to your own data in a way a <Link href="/services/custom-business-software" className="text-sky-400 hover:underline">custom app</Link> would handle natively. Here is the honest comparison.
                    </p>
                    <ConsultationCTA label="Scope an Asana Replacement" />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Custom tooling vs Asana: which should I choose?</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>Choose Asana when the work is general task and project coordination, the team is broad, and the speed of adoption and clean interface matter more than a perfectly tailored data model. Choose a custom app when your process has outgrown tasks-and-projects, you are stacking custom fields to fake structure, you need the workflow fused with your own business data, or per-seat pricing across the company has passed the cost of a build. The hybrid pattern keeps Asana for general work management and builds custom for the operational workflow that has outgrown it.</strong>
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
                                <tr className="border-b border-white/5"><td className="px-4 py-3">General task coordination and project planning</td><td className="px-4 py-3 font-semibold text-white">Asana</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Operational process fused with your own data</td><td className="px-4 py-3 font-semibold text-white">Custom app</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Keep Asana for planning, build the ops workflow custom</td><td className="px-4 py-3 font-semibold text-white">Hybrid</td></tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When Asana is the right call</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Asana earned its place by making work management approachable and genuinely pleasant to use. Tasks, subtasks, sections, dependencies, lists, boards, timelines, and portfolios, all wrapped in an interface a non-engineer adopts in an afternoon. For coordinating work across teams, planning a project, or tracking a lightweight process, the speed of getting a team productive is hard to match by writing an application.
                        </p>
                        <p>
                            If your needs map cleanly onto tasks and projects, your team is broad, and your processes benefit from a shared, friendly surface more than a tailored data model, Asana is the right call. The rules engine and the integration ecosystem cover a lot of ground, and Asana&apos;s reporting and goals features give leadership visibility without code. That is the use case the product was built for, and it serves it extremely well.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Where Asana starts to break</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Asana hits a ceiling at a predictable point. The first squeeze is the data model — everything is ultimately a task on a project, and when your real entities are orders, claims, applications, or assets, you end up bending them into tasks and bolting on custom fields to fake the structure you actually need. The model that made Asana approachable starts working against you.
                        </p>
                        <p>
                            The second squeeze is logic. The rules engine is great for routing and reminders, but as your process grows conditional and stateful, you stack rules and integrations into something with no version control and no real way to test before it misfires. The third squeeze is data isolation and per-seat economics — the work lives inside Asana rather than alongside your customers, billing, or inventory, and as the whole company needs access, the per-seat bill on the higher tiers starts to move the value math that drew you in.
                        </p>
                        <p>
                            None of this is Asana being a bad product. It is the cost of running a structured operational process on a tool built for general work coordination. Most teams that push Asana past task management meet some version of this curve. The broader framing lives in our <Link href="/blog/build-vs-buy-software-2026" className="text-sky-400 hover:underline">build vs buy software guide</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When custom wins</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            A custom app tends to win when your process has outgrown a task model, you are faking structure with custom fields, you need the workflow tied to your own data, or per-seat pricing across the company has passed the amortized cost of a build. <Link href="/services/web-applications" className="text-sky-400 hover:underline">Custom web applications</Link> give you a proper PostgreSQL schema with the entities your business actually has, a UI tuned to the workflow, and logic that lives in tested code rather than stacked rules.
                        </p>
                        <p>
                            The other common driver is integration with the rest of the business. When the workflow needs to read and write your customer records, billing, or inventory directly, a custom build gives you that natively along with a clean API and reporting straight off the database. If you are building a brand-new operational tool from a validated idea, our <Link href="/services/mvp-development" className="text-sky-400 hover:underline">MVP development</Link> path picks up from there, and our <Link href="/blog/internal-tools-platform-engineering-guide" className="text-sky-400 hover:underline">internal tools guide</Link> covers the patterns.
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
                                    <th className="px-4 py-3 text-left font-semibold">Asana</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-gray-300">
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Pricing model</td>
                                    <td className="px-4 py-3">One-time build + optional retainer</td>
                                    <td className="px-4 py-3">$11 to $25 per seat / month + add-ons</td>
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
                                    <td className="px-4 py-3 text-gray-400">Data model</td>
                                    <td className="px-4 py-3">Your real entities</td>
                                    <td className="px-4 py-3">Tasks on projects</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Relationships</td>
                                    <td className="px-4 py-3">Real foreign keys, enforced</td>
                                    <td className="px-4 py-3">Dependencies + linked tasks</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Data integrity</td>
                                    <td className="px-4 py-3">Constraints + validation</td>
                                    <td className="px-4 py-3">Custom fields, loosely enforced</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Automation</td>
                                    <td className="px-4 py-3">Tested TypeScript, version-controlled</td>
                                    <td className="px-4 py-3">Rules engine + integrations</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Reporting</td>
                                    <td className="px-4 py-3">Direct SQL, any BI tool</td>
                                    <td className="px-4 py-3">Dashboards, portfolios, goals</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Integrations</td>
                                    <td className="px-4 py-3">Native API code, no markup</td>
                                    <td className="px-4 py-3">App library, some paid</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Source code</td>
                                    <td className="px-4 py-3">Owned by client</td>
                                    <td className="px-4 py-3">Proprietary platform</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Data residency</td>
                                    <td className="px-4 py-3">Your infrastructure / region</td>
                                    <td className="px-4 py-3">Asana-managed</td>
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
                            <h3 className="text-white font-semibold mb-4">Where Asana wins</h3>
                            <ul className="space-y-2">
                                {proAsana.map((item) => (
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
                            Run the simple version. A team on Asana Advanced, 40 seats, three years:
                        </p>
                        <ul className="space-y-2 text-sm text-gray-300 mb-4">
                            <li className="flex gap-2"><span className="text-sky-400">~$25/seat/mo</span><span className="text-gray-400">=</span><span className="text-white">Asana Advanced at 40 seats</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">× 36 months</span><span className="text-gray-400">=</span><span className="text-white font-semibold">~$36k</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">+ ~$12k</span><span className="text-gray-400">=</span><span className="text-white">paid integrations + add-ons</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">+ ~$18k</span><span className="text-gray-400">=</span><span className="text-white">rule upkeep + admin time</span></li>
                            <li className="flex gap-2 border-t border-white/5 pt-2 mt-2"><span className="text-emerald-400 font-semibold">~$66k</span><span className="text-gray-400">=</span><span className="text-white font-semibold">3-year Asana TCO at this size</span></li>
                        </ul>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Compare against a custom workflow app at $45k to $80k one-time, plus $14k to $22k annually for feature work and maintenance. That comes to $87k to $146k over three years — typically more in year one and competitive from year two as seats and data grow. The gap closes fastest when the alternative to a build is more custom fields and rules patching around a task model that does not fit.
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            The math stays with Asana for general work coordination at almost any team size. The flip happens for structured operational processes, where seats plus add-ons plus the cost of maintaining stacked rules exceed the amortized cost of a one-time custom build.
                        </p>
                    </div>
                    <div className="mt-4">
                        <Link
                            href="/pricing"
                            className="inline-flex items-center gap-1 text-sky-400 hover:underline text-sm"
                        >
                            See our pricing for custom workflow work <ArrowRight className="w-3 h-3" />
                        </Link>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Migration path off Asana</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The cutover follows a predictable pattern. Week one is data modeling — we map your projects, tasks, and custom fields into a clean PostgreSQL schema built around the entities your business actually has, and we decide which loosely-typed fields become enforced constraints. Week two is extraction through the Asana REST API and CSV export, covering tasks, sections, dependencies, custom fields, comments, and attachments, with reconciliation reports so nothing goes missing.
                        </p>
                        <p>
                            From there it is a normal build — application screens, boards, and timelines that replace the views your team relied on, rules rewritten as tested code, and integrations wired natively into the rest of your stack. Asana stays live in parallel during the build so day-to-day work never stops, then you cut over once the new app reaches parity. Asana can remain a read-only archive for a window before being retired, so there is never a moment where the work history is only in one place.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <ConsultationCTA label="Get an Asana Migration Scope" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "When is custom workflow tooling a better fit than Asana?",
                                a: "Custom usually wins when your process has outgrown a task-and-project model, you are stacking custom fields and rules to fake structure Asana does not have, you need the workflow tied directly to your own business data, or per-seat pricing across the whole company has passed the cost of a one-time build. For general team task coordination and project tracking, Asana is excellent and hard to beat.",
                            },
                            {
                                q: "Can you migrate our Asana projects to a custom app?",
                                a: "Yes. Asana exposes a full REST API covering tasks, projects, custom fields, sections, dependencies, comments, and attachments, plus CSV export. We model the work into a proper PostgreSQL schema with real relationships and constraints, port the rules into tested code, and rebuild the boards, lists, and timelines your team relies on as application views.",
                            },
                            {
                                q: "Is Asana ever the right long-term choice?",
                                a: "Often, yes. For cross-team task coordination, project planning, and lightweight process tracking, Asana is polished, fast to adopt, and should not be replaced. The hybrid pattern keeps Asana for general work management and builds custom only for the operational workflow that has outgrown a task model.",
                            },
                            {
                                q: "How does the cost compare at 40 seats?",
                                a: "Asana's Starter and Advanced plans run roughly $11 to $25 per seat per month billed annually, so 40 seats lands somewhere around $5k to $12k per year before add-ons. A custom workflow app at $45k to $80k one-time with a $14k to $22k annual retainer is usually a touch more in year one, then competitive to cheaper from year two as seats and data grow.",
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
                            href="/vs/jira"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">vs Jira</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">Issue tracking and agile boards versus a custom workflow app.</p>
                        </Link>
                        <Link
                            href="/vs/notion"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">vs Notion</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">Docs-and-databases workspace versus a purpose-built app.</p>
                        </Link>
                        <Link
                            href="/blog/build-vs-buy-software-2026"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">Build vs Buy Software (2026)</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">Three-year TCO math and a decision framework.</p>
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
                            Do the math on your Asana setup.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or <Link href="/contact" className="text-sky-400 hover:underline">book a 20-minute scope call</Link>. We will walk through your projects, your custom fields, and your seat count and tell you straight whether Asana is still right, custom is right, or you should run a hybrid.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
