import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Scale, Check, ArrowRight } from "lucide-react";
import { comparisonMetadata } from "@/lib/seoMeta";

export const metadata: Metadata = comparisonMetadata({
    competitor: "Mendix",
    title: "QUANT LAB USA vs Mendix: Custom App Development in 2026",
    description:
        "Mendix is a capable enterprise low-code platform with strong governance and speed. When licensing, lock-in, and the visual ceiling start to bite, a custom build wins. Honest 2026 comparison.",
    slug: "/vs/mendix",
});

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "QUANT LAB USA vs Mendix: Custom App vs Enterprise Low-Code in 2026",
    description:
        "Honest comparison of Mendix against a custom-built application. Feature matrix, per-app and per-user licensing, platform lock-in, the visual-modeling ceiling, and where a real codebase beats low-code.",
    url: "https://quantlabusa.dev/vs/mendix",
    isPartOf: {
        "@type": "WebSite",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
    },
    about: {
        "@type": "Thing",
        name: "Mendix Alternative",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Custom Business Software", item: "https://quantlabusa.dev/services/custom-business-software" },
        { "@type": "ListItem", position: 3, name: "vs Mendix", item: "https://quantlabusa.dev/vs/mendix" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "When is a custom app a better fit than Mendix?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Custom usually wins when your app has unusual logic that fights the visual modeler, you need full control of the data model and infrastructure, platform licensing across apps and users has passed the cost of a one-time build, or vendor lock-in is a strategic risk. Below that, Mendix's governance, speed, and enterprise tooling are genuinely strong.",
            },
        },
        {
            "@type": "Question",
            name: "Can you migrate our Mendix apps to a custom codebase?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Mendix apps run on a documented data model backed by a relational database, and expose REST and OData endpoints. We model the domain into a clean PostgreSQL schema with real foreign keys and constraints, reimplement the microflows and business rules as tested TypeScript, and rebuild the pages your users rely on as application screens.",
            },
        },
        {
            "@type": "Question",
            name: "What is the timeline to replace a Mendix app?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "8 to 16 weeks for the first production release. A single app with a handful of microflows is fast. A multi-module enterprise app with complex workflows, integrations, and role-based access takes the upper end of that range.",
            },
        },
        {
            "@type": "Question",
            name: "Do we own the code if we leave Mendix?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Completely. You get the GitHub repository, the PostgreSQL schema, the deployment configs, and the documentation. No per-app license, no per-user runtime fee, no platform subscription, and no exit cost as the application and the user base grow.",
            },
        },
        {
            "@type": "Question",
            name: "Is Mendix ever the right long-term choice?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Often, yes. For large enterprises that need fast delivery across many internal apps, strong governance, and a low-code workforce, Mendix is a serious platform and should not be replaced wholesale. The hybrid pattern keeps Mendix for the broad portfolio and builds custom only for the flagship app that has outgrown the modeler.",
            },
        },
        {
            "@type": "Question",
            name: "How does the cost compare for a single business app?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Mendix is licensed by platform tier plus runtime, typically scaling with apps and internal or external users, which for one substantial production app commonly lands in the tens of thousands per year. A custom app at $50k to $90k one-time with a $14k to $24k annual retainer is usually cost-neutral to slightly more in year one, then cheaper from year two as users grow.",
            },
        },
    ],
};

const proCustom = [
    "You own the schema, the source code, and the deployment",
    "No visual-modeling ceiling — any logic is just code",
    "No per-app or per-user runtime licensing to design around",
    "Full control of infrastructure, data residency, and stack",
    "No platform lock-in or proprietary runtime dependency",
];

const proMendix = [
    "Genuinely fast delivery for standard enterprise workflows",
    "Strong governance, role management, and application lifecycle tooling",
    "Visual modeling lets business-adjacent teams contribute",
    "Mature connectors, marketplace, and cloud deployment options",
    "Roadmap funded by Mendix R&D, not your engineering budget",
];

export default function CustomAppVsMendixPage() {
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
                        <li className="text-gray-300">vs Mendix</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Scale className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        QUANT LAB USA vs Mendix
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Mendix is a capable enterprise low-code platform. For an organization that needs to ship a portfolio of internal apps quickly, with governance and a workforce that does not all write code, it is genuinely strong. The math turns when a flagship app outgrows the visual modeler, when per-app and per-user licensing compounds, and when platform lock-in becomes a strategic risk a <Link href="/services/custom-business-software" className="text-sky-400 hover:underline">custom app</Link> would not carry. Here is the honest comparison.
                    </p>
                    <ConsultationCTA label="Scope a Mendix Replacement" />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Custom app vs Mendix: which should I choose?</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>Choose Mendix when you are delivering many standard enterprise apps, governance and lifecycle tooling matter, and a low-code workforce needs to contribute. Choose a custom app when one application has unusual logic that fights the modeler, you need full control of the data model and infrastructure, platform licensing has passed the cost of a build, or vendor lock-in is a risk you cannot accept. The hybrid pattern keeps Mendix for the broad portfolio and builds custom for the flagship that has outgrown it.</strong>
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
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Large portfolio of internal apps, governance-first, low-code teams</td><td className="px-4 py-3 font-semibold text-white">Mendix</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Flagship app with unusual logic, full infra control, lock-in risk</td><td className="px-4 py-3 font-semibold text-white">Custom app</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Keep Mendix for the portfolio, build the flagship custom</td><td className="px-4 py-3 font-semibold text-white">Hybrid</td></tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When Mendix is the right call</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Mendix earned its place in the enterprise by making application delivery fast and governable. Visual domain models, microflows for logic, a marketplace of connectors, and lifecycle tooling that an IT organization can actually administer. For a company that needs to deliver many internal apps on a predictable cadence — and to let business-adjacent teams participate without all of them writing code — that combination is genuinely hard to match with bespoke development on every project.
                        </p>
                        <p>
                            If your priority is breadth and speed across a portfolio, your workflows are reasonably standard, and centralized governance and role management matter more than owning the runtime, Mendix is the right call. Its cloud deployment options and enterprise support give an organization a managed path that a small custom-build effort would struggle to replicate. That is the use case the platform was built for, and it serves it well.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Where Mendix starts to break</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Low-code hits a ceiling at a predictable point. The first squeeze is the visual modeler itself — when an app needs logic that does not map cleanly to microflows, teams reach for custom Java actions and widgets, and the further you go down that road the more you are writing code anyway, just inside a proprietary wrapper. The elegance that made the platform fast starts to work against you.
                        </p>
                        <p>
                            The second squeeze is licensing and lock-in. Mendix is licensed by platform tier plus runtime, scaling with apps and users, so a single successful application with a growing user base moves the cost math that drew you in. And because the app lives inside the Mendix runtime and modeling format, leaving means a rebuild — the more strategic the app, the more that lock-in weighs. The third squeeze is control: data residency, infrastructure choices, and deep integration patterns are bounded by what the platform exposes.
                        </p>
                        <p>
                            None of this is Mendix being a bad product. It is the cost of running a flagship system on a low-code platform optimized for portfolio breadth. Most organizations meet some version of this curve on their most important app. The broader framing lives in our <Link href="/blog/build-vs-buy-software-2026" className="text-sky-400 hover:underline">build vs buy software guide</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When custom wins</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            A custom app tends to win when one application has logic the modeler fights, you need full ownership of the data model and infrastructure, platform licensing across apps and users has passed the amortized cost of a build, or vendor lock-in is a risk the business cannot carry. <Link href="/services/web-applications" className="text-sky-400 hover:underline">Custom web applications</Link> give you a proper PostgreSQL schema with foreign keys and constraints, a UI tuned exactly to the workflow, and logic that lives in tested code rather than a proprietary runtime.
                        </p>
                        <p>
                            The other common driver is strategic independence and scale. When an app is central to the business, you want to own the stack, control where the data lives, and integrate without being bounded by a platform&apos;s exposed surface. A custom build gives you a clean API for the rest of your systems and reporting straight off the database. If the application is closer to a product than an internal tool, our <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platform development</Link> path picks up from there.
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
                                    <th className="px-4 py-3 text-left font-semibold">Mendix</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-gray-300">
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Pricing model</td>
                                    <td className="px-4 py-3">One-time build + optional retainer</td>
                                    <td className="px-4 py-3">Platform tier + runtime, per app/user</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">User scaling</td>
                                    <td className="px-4 py-3">Flat infrastructure cost</td>
                                    <td className="px-4 py-3">Scales with users and apps</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Delivery speed (standard apps)</td>
                                    <td className="px-4 py-3">Weeks</td>
                                    <td className="px-4 py-3">Days to weeks</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Custom logic ceiling</td>
                                    <td className="px-4 py-3">None — it is all code</td>
                                    <td className="px-4 py-3">Microflows, then custom Java actions</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Data model</td>
                                    <td className="px-4 py-3">Real foreign keys, enforced</td>
                                    <td className="px-4 py-3">Domain model on managed DB</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Infrastructure control</td>
                                    <td className="px-4 py-3">Full — your stack and region</td>
                                    <td className="px-4 py-3">Bounded by platform options</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Governance tooling</td>
                                    <td className="px-4 py-3">Built to your process</td>
                                    <td className="px-4 py-3">Mature, built-in lifecycle tools</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Reporting</td>
                                    <td className="px-4 py-3">Direct SQL, any BI tool</td>
                                    <td className="px-4 py-3">Built-in plus OData export</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Integrations</td>
                                    <td className="px-4 py-3">Native API code, no markup</td>
                                    <td className="px-4 py-3">Connectors + marketplace</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Source code</td>
                                    <td className="px-4 py-3">Owned by client</td>
                                    <td className="px-4 py-3">Proprietary model + runtime</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Vendor lock-in</td>
                                    <td className="px-4 py-3">None — standard stack</td>
                                    <td className="px-4 py-3">Runtime and model format</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Long-term TCO for a flagship app</td>
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
                            <h3 className="text-white font-semibold mb-4">Where Mendix wins</h3>
                            <ul className="space-y-2">
                                {proMendix.map((item) => (
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Cost comparison for a flagship app</h2>
                    <div className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Run the simple version. One substantial production app on Mendix, growing user base, three years:
                        </p>
                        <ul className="space-y-2 text-sm text-gray-300 mb-4">
                            <li className="flex gap-2"><span className="text-sky-400">platform + runtime</span><span className="text-gray-400">=</span><span className="text-white">tens of thousands per year, scaling with users</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">× 3 years</span><span className="text-gray-400">=</span><span className="text-white font-semibold">~$90k+</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">+ custom Java/widgets</span><span className="text-gray-400">=</span><span className="text-white">specialist time for logic the modeler fights</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">+ lock-in risk</span><span className="text-gray-400">=</span><span className="text-white">future rebuild cost if you ever leave</span></li>
                            <li className="flex gap-2 border-t border-white/5 pt-2 mt-2"><span className="text-emerald-400 font-semibold">~$90k–$140k+</span><span className="text-gray-400">=</span><span className="text-white font-semibold">3-year Mendix TCO for one flagship app</span></li>
                        </ul>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Compare against a custom app at $50k to $90k one-time, plus $14k to $24k annually for feature work and maintenance. That comes to roughly $92k to $162k over three years — typically cost-neutral in year one and increasingly favorable from year two as the user base grows and licensing would have compounded. The gap widens fastest when the alternative is heavy custom code wrapped inside a licensed runtime.
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            The math favors Mendix when you are spreading delivery across many apps and the platform&apos;s governance and reuse pay for themselves. The flip happens on the single flagship app where licensing, custom-code workarounds, and lock-in exceed the amortized cost of a one-time custom build.
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Migration path off Mendix</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The cutover follows a predictable pattern. Week one is data modeling — we map your Mendix domain model into a clean PostgreSQL schema with real foreign keys, and we decide which platform-managed entities become enforced constraints. The following weeks cover extraction through the app&apos;s REST and OData endpoints against the underlying database, with reconciliation reports so nothing goes missing.
                        </p>
                        <p>
                            From there it is a normal build — application screens that replace the pages your users relied on, microflows and business rules rewritten as tested code, and integrations wired natively. The Mendix app stays live in parallel during the build so day-to-day work never stops, then you cut over once the new app reaches parity. The platform can stay as a read-only reference for a window before being retired, so there is never a moment where the data is only in one place.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <ConsultationCTA label="Get a Mendix Migration Scope" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "When is a custom app a better fit than Mendix?",
                                a: "Custom usually wins when your app has unusual logic that fights the visual modeler, you need full control of the data model and infrastructure, platform licensing across apps and users has passed the cost of a one-time build, or vendor lock-in is a strategic risk. Below that, Mendix's governance, speed, and enterprise tooling are genuinely strong.",
                            },
                            {
                                q: "Can you migrate our Mendix apps to a custom codebase?",
                                a: "Yes. Mendix apps run on a documented data model backed by a relational database, and expose REST and OData endpoints. We model the domain into a clean PostgreSQL schema with real foreign keys and constraints, reimplement the microflows and business rules as tested TypeScript, and rebuild the pages your users rely on as application screens.",
                            },
                            {
                                q: "Is Mendix ever the right long-term choice?",
                                a: "Often, yes. For large enterprises that need fast delivery across many internal apps, strong governance, and a low-code workforce, Mendix is a serious platform and should not be replaced wholesale. The hybrid pattern keeps Mendix for the broad portfolio and builds custom only for the flagship app that has outgrown the modeler.",
                            },
                            {
                                q: "How does the cost compare for a single business app?",
                                a: "Mendix is licensed by platform tier plus runtime, typically scaling with apps and internal or external users, which for one substantial production app commonly lands in the tens of thousands per year. A custom app at $50k to $90k one-time with a $14k to $24k annual retainer is usually cost-neutral to slightly more in year one, then cheaper from year two as users grow.",
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
                            href="/vs/quickbase"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">vs Quickbase</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">Another low-code app platform compared to a custom build you own.</p>
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
                        topics={["build-vs-buy","saas"]}
                        heading="Related build-vs-buy reading"
                    />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Do the math on your Mendix app.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or <Link href="/contact" className="text-sky-400 hover:underline">book a 20-minute scope call</Link>. We will walk through your app&apos;s logic, your user count, and your licensing and tell you straight whether Mendix is still right, custom is right, or you should run a hybrid.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
