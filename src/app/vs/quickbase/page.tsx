import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Scale, Check, ArrowRight } from "lucide-react";
import { comparisonMetadata } from "@/lib/seoMeta";

export const metadata: Metadata = comparisonMetadata({
    competitor: "Quickbase",
    title: "QUANT LAB USA vs Quickbase: Custom App Development 2026",
    description:
        "Quickbase is a strong low-code platform for fast operational apps and citizen development. When per-user pricing, formula limits, and lock-in bite, custom wins. Honest 2026 comparison.",
    slug: "/vs/quickbase",
});

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "QUANT LAB USA vs Quickbase: Custom App vs Low-Code in 2026",
    description:
        "Honest comparison of Quickbase against a custom-built application. Feature matrix, per-user pricing, formula and automation limits, platform lock-in, and where a real codebase beats low-code.",
    url: "https://quantlabusa.dev/vs/quickbase",
    isPartOf: {
        "@type": "WebSite",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
    },
    about: {
        "@type": "Thing",
        name: "Quickbase Alternative",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Custom Business Software", item: "https://quantlabusa.dev/services/custom-business-software" },
        { "@type": "ListItem", position: 3, name: "vs Quickbase", item: "https://quantlabusa.dev/vs/quickbase" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "When is a custom app a better fit than Quickbase?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Custom usually wins when your logic outgrows formula fields and pipelines, you need real relational integrity beyond what the table model enforces, per-user pricing across the whole team has passed the cost of a one-time build, or platform lock-in has become a strategic risk. Below that, Quickbase's speed and citizen-development model are genuinely strong.",
            },
        },
        {
            "@type": "Question",
            name: "Can you migrate our Quickbase apps to a custom codebase?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Quickbase exposes a REST API and table-level export covering records, fields, relationships, and reports. We model the data into a proper PostgreSQL schema with real foreign keys and constraints, port the pipelines and formula logic into tested code, and rebuild the reports and forms your team relies on as application screens.",
            },
        },
        {
            "@type": "Question",
            name: "What is the timeline to replace a Quickbase app?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "6 to 14 weeks for the first production release. A single app with a few tables and pipelines is fast. A multi-app realm with interlinked tables, many pipelines, and role-based access takes the upper end of that range.",
            },
        },
        {
            "@type": "Question",
            name: "Do we own the code if we leave Quickbase?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Completely. You get the GitHub repository, the PostgreSQL schema, the deployment configs, and the documentation. No per-user pricing, no app or table limits, no automation-run caps, and no exit cost as the team and the data grow.",
            },
        },
        {
            "@type": "Question",
            name: "Is Quickbase ever the right long-term choice?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Often, yes. For operations teams that need to stand up and reshape internal apps quickly without engineering, Quickbase is excellent and should not be replaced. The hybrid pattern keeps Quickbase for fast, evolving operational work and builds custom only for the app that has outgrown the platform.",
            },
        },
        {
            "@type": "Question",
            name: "How does the cost compare at 40 users?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Quickbase is priced by plan with per-user scaling and minimum seat counts, so a 40-user operational deployment commonly lands in the tens of thousands per year before add-ons. A custom app at $45k to $80k one-time with a $14k to $22k annual retainer is usually cost-neutral to slightly more in year one, then cheaper from year two as users grow.",
            },
        },
    ],
};

const proCustom = [
    "You own the schema, the source code, and the deployment",
    "Real relational integrity, constraints, and validation",
    "No formula-field ceiling — any logic is just code",
    "No per-user ratchet as the whole team gets access",
    "No platform lock-in or proprietary app format",
];

const proQuickbase = [
    "Genuinely fast to stand up operational apps without engineering",
    "Strong citizen-development model and role management",
    "Pipelines and formulas cover a lot of workflow ground",
    "Mature reporting, dashboards, and connectors out of the box",
    "Roadmap funded by Quickbase R&D, not your engineering budget",
];

export default function CustomAppVsQuickbasePage() {
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
                        <li className="text-gray-300">vs Quickbase</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Scale className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        QUANT LAB USA vs Quickbase
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Quickbase is a strong low-code platform for operational apps. For a team that needs to stand up and reshape internal workflows fast, without waiting on engineering, it is genuinely good. The math turns when the logic outgrows formula fields, when per-user pricing compounds across the team, and when platform lock-in becomes a risk a <Link href="/services/custom-business-software" className="text-sky-400 hover:underline">custom app</Link> would simply not carry. Here is the honest comparison.
                    </p>
                    <ConsultationCTA label="Scope a Quickbase Replacement" />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Custom app vs Quickbase: which should I choose?</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>Choose Quickbase when you need to build and reshape operational apps fast, your team includes citizen developers, and speed matters more than owning the runtime. Choose a custom app when your logic has outgrown formula fields and pipelines, you need real relational integrity, per-user pricing across the team has passed the cost of a build, or lock-in is a risk you cannot accept. The hybrid pattern keeps Quickbase for fast, evolving work and builds custom for the app that has outgrown it.</strong>
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
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Fast operational apps, citizen developers, evolving workflows</td><td className="px-4 py-3 font-semibold text-white">Quickbase</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Logic beyond formulas, real relationships, lock-in risk</td><td className="px-4 py-3 font-semibold text-white">Custom app</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Keep Quickbase for ops, build the core app custom</td><td className="px-4 py-3 font-semibold text-white">Hybrid</td></tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When Quickbase is the right call</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Quickbase earned its place by making operational apps approachable for the people who run the operation. Tables and relationships you can shape without code, pipelines to automate work across them, dashboards and reports that come for free, and a role model an admin can actually manage. For a logistics tracker, a project-intake system, a field-service workflow, or anything an ops team needs to stand up this quarter, the speed of iteration is genuinely hard to match by writing an application.
                        </p>
                        <p>
                            If your processes change often, your team includes citizen developers who own their own apps, and centralized IT delivery would be a bottleneck, Quickbase is the right call. The pipelines engine and connector ecosystem cover a lot of ground, and the platform&apos;s governance lets an organization let many teams build without losing control. That is the use case the product was built for, and it serves it extremely well.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Where Quickbase starts to break</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Low-code hits a ceiling at a predictable point. The first squeeze is logic — formula fields and pipelines are expressive, but when an app needs branching workflows, complex calculations, or behavior the builder does not model cleanly, you end up bending the platform around the gap. The elegance that made it fast starts to fight you.
                        </p>
                        <p>
                            The second squeeze is integrity and per-user economics. The table model enforces less than a real relational schema, so it will happily let data drift in ways a constraint would have caught, and as the whole team needs access the per-user pricing on the higher plans starts to move the value math that drew you in. The third squeeze is lock-in — apps live in Quickbase&apos;s proprietary format and runtime, so the more central the app becomes, the more leaving means a rebuild.
                        </p>
                        <p>
                            None of this is Quickbase being a bad product. It is the cost of running a core operational system on a low-code platform optimized for fast, broad citizen development. Most teams meet some version of this curve on their most important app. The broader framing lives in our <Link href="/blog/build-vs-buy-software-2026" className="text-sky-400 hover:underline">build vs buy software guide</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When custom wins</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            A custom app tends to win when your logic has outgrown formula fields and pipelines, you need real relational integrity and validation, per-user pricing across the team has passed the amortized cost of a build, or platform lock-in is a risk the business cannot carry. <Link href="/services/web-applications" className="text-sky-400 hover:underline">Custom web applications</Link> give you a proper PostgreSQL schema with foreign keys and constraints, a UI tuned to the workflow, and logic that lives in tested code rather than a proprietary builder.
                        </p>
                        <p>
                            The other common driver is correctness and scale. When the data is the business, you want a system that enforces the rules rather than trusting every editor to enter the right thing in the right field. A custom build also gives you a clean API for the rest of your stack and reporting straight off the database. If the workflow is closer to a product than a back office, our <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platform development</Link> path picks up from there.
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
                                    <th className="px-4 py-3 text-left font-semibold">Quickbase</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-gray-300">
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Pricing model</td>
                                    <td className="px-4 py-3">One-time build + optional retainer</td>
                                    <td className="px-4 py-3">Plan + per-user, seat minimums</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">User scaling</td>
                                    <td className="px-4 py-3">Flat infrastructure cost</td>
                                    <td className="px-4 py-3">Linear per-user ratchet</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Build speed (operational apps)</td>
                                    <td className="px-4 py-3">Weeks</td>
                                    <td className="px-4 py-3">Days</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Custom logic ceiling</td>
                                    <td className="px-4 py-3">None — it is all code</td>
                                    <td className="px-4 py-3">Formulas + pipelines, then workarounds</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Relationships</td>
                                    <td className="px-4 py-3">Real foreign keys, enforced</td>
                                    <td className="px-4 py-3">Table relationships, loosely enforced</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Data integrity</td>
                                    <td className="px-4 py-3">Constraints + validation</td>
                                    <td className="px-4 py-3">Field rules, loosely enforced</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Automation</td>
                                    <td className="px-4 py-3">Tested TypeScript, version-controlled</td>
                                    <td className="px-4 py-3">Pipelines + formulas</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Reporting</td>
                                    <td className="px-4 py-3">Direct SQL, any BI tool</td>
                                    <td className="px-4 py-3">Built-in reports + dashboards</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Integrations</td>
                                    <td className="px-4 py-3">Native API code, no markup</td>
                                    <td className="px-4 py-3">Pipelines + connectors</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Source code</td>
                                    <td className="px-4 py-3">Owned by client</td>
                                    <td className="px-4 py-3">Proprietary platform</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Vendor lock-in</td>
                                    <td className="px-4 py-3">None — standard stack</td>
                                    <td className="px-4 py-3">Proprietary app format</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Long-term TCO at 40+ users</td>
                                    <td className="px-4 py-3">Flat after build</td>
                                    <td className="px-4 py-3">Compounds with users</td>
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
                            <h3 className="text-white font-semibold mb-4">Where Quickbase wins</h3>
                            <ul className="space-y-2">
                                {proQuickbase.map((item) => (
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Cost comparison at 40 users</h2>
                    <div className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Run the simple version. An operational deployment on Quickbase, 40 users, three years:
                        </p>
                        <ul className="space-y-2 text-sm text-gray-300 mb-4">
                            <li className="flex gap-2"><span className="text-sky-400">plan + per-user</span><span className="text-gray-400">=</span><span className="text-white">tens of thousands per year at this size</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">× 3 years</span><span className="text-gray-400">=</span><span className="text-white font-semibold">~$75k+</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">+ connectors/add-ons</span><span className="text-gray-400">=</span><span className="text-white">integrations and premium pipelines</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">+ workaround upkeep</span><span className="text-gray-400">=</span><span className="text-white">admin time bending the platform around gaps</span></li>
                            <li className="flex gap-2 border-t border-white/5 pt-2 mt-2"><span className="text-emerald-400 font-semibold">~$75k–$120k+</span><span className="text-gray-400">=</span><span className="text-white font-semibold">3-year Quickbase TCO at this size</span></li>
                        </ul>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Compare against a custom app at $45k to $80k one-time, plus $14k to $22k annually for feature work and maintenance. That comes to roughly $87k to $146k over three years — typically cost-neutral in year one and increasingly favorable from year two as users grow and per-user pricing would have compounded. The gap widens fastest when the alternative is more connectors and workarounds patching around platform limits.
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            The math favors Quickbase for smaller teams with evolving, broad operational needs where citizen development pays for itself. The flip happens when users, add-ons, and the cost of bending the platform around its limits exceed the amortized cost of a one-time custom build.
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Migration path off Quickbase</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The cutover follows a predictable pattern. Week one is data modeling — we map your tables and relationships into a clean PostgreSQL schema with real foreign keys, and we decide which loosely-enforced field rules become real constraints. Week two is extraction through the Quickbase REST API and table exports, covering records, fields, relationships, and reports, with reconciliation reports so nothing goes missing.
                        </p>
                        <p>
                            From there it is a normal build — application screens that replace the forms and reports your team relied on, pipelines and formula logic rewritten as tested code, and integrations wired natively. Quickbase stays live in parallel during the build so day-to-day work never stops, then you cut over once the new app reaches parity. The realm can stay as a read-only archive for a window before being retired, so there is never a moment where the data is only in one place.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <ConsultationCTA label="Get a Quickbase Migration Scope" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "When is a custom app a better fit than Quickbase?",
                                a: "Custom usually wins when your logic outgrows formula fields and pipelines, you need real relational integrity beyond what the table model enforces, per-user pricing across the whole team has passed the cost of a one-time build, or platform lock-in has become a strategic risk. Below that, Quickbase's speed and citizen-development model are genuinely strong.",
                            },
                            {
                                q: "Can you migrate our Quickbase apps to a custom codebase?",
                                a: "Yes. Quickbase exposes a REST API and table-level export covering records, fields, relationships, and reports. We model the data into a proper PostgreSQL schema with real foreign keys and constraints, port the pipelines and formula logic into tested code, and rebuild the reports and forms your team relies on as application screens.",
                            },
                            {
                                q: "Is Quickbase ever the right long-term choice?",
                                a: "Often, yes. For operations teams that need to stand up and reshape internal apps quickly without engineering, Quickbase is excellent and should not be replaced. The hybrid pattern keeps Quickbase for fast, evolving operational work and builds custom only for the app that has outgrown the platform.",
                            },
                            {
                                q: "How does the cost compare at 40 users?",
                                a: "Quickbase is priced by plan with per-user scaling and minimum seat counts, so a 40-user operational deployment commonly lands in the tens of thousands per year before add-ons. A custom app at $45k to $80k one-time with a $14k to $22k annual retainer is usually cost-neutral to slightly more in year one, then cheaper from year two as users grow.",
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
                            href="/vs/mendix"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">vs Mendix</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">Enterprise low-code compared to a custom build you own.</p>
                        </Link>
                        <Link
                            href="/vs/airtable"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">vs Airtable</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">Flexible database for small teams versus a custom application.</p>
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
                            Do the math on your Quickbase stack.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or <Link href="/contact" className="text-sky-400 hover:underline">book a 20-minute scope call</Link>. We will walk through your app&apos;s logic, your user count, and your plan and tell you straight whether Quickbase is still right, custom is right, or you should run a hybrid.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
