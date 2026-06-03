import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Scale, Check, ArrowRight } from "lucide-react";
import { comparisonMetadata } from "@/lib/seoMeta";

export const metadata: Metadata = comparisonMetadata({
    competitor: "Airtable",
    title: "QUANT LAB USA vs Airtable: Custom App Development in 2026",
    description:
        "Airtable is a brilliant flexible database for small teams and prototypes. When records, automations, and per-seat pricing start fighting your workflow, a custom app wins. Honest 2026 comparison.",
    slug: "/vs/airtable",
});

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "QUANT LAB USA vs Airtable: Custom App vs Flexible Database in 2026",
    description:
        "Honest comparison of Airtable against a custom-built application. Feature matrix, record and automation limits, per-seat cost compounding, and the point where a real app beats the spreadsheet-database.",
    url: "https://quantlabusa.dev/vs/airtable",
    isPartOf: {
        "@type": "WebSite",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
    },
    about: {
        "@type": "Thing",
        name: "Airtable Alternative",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Custom Business Software", item: "https://quantlabusa.dev/services/custom-business-software" },
        { "@type": "ListItem", position: 3, name: "vs Airtable", item: "https://quantlabusa.dev/vs/airtable" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "When is a custom app a better fit than Airtable?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Custom usually wins when you bump into per-base record caps, your automations have grown into a fragile web of scripts and third-party connectors, you need real relational integrity and validation, or per-seat pricing across the team has passed the cost of a one-time build. Below that, Airtable's flexibility and speed are genuinely hard to match.",
            },
        },
        {
            "@type": "Question",
            name: "Can you migrate our Airtable bases to a custom app?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Airtable exposes a full REST API and CSV export per table, which covers records, fields, attachments, and linked-record relationships. We model the data into a proper PostgreSQL schema with real foreign keys and constraints, port the automations into tested code, and rebuild the views your team relies on as application screens.",
            },
        },
        {
            "@type": "Question",
            name: "What is the timeline to replace an Airtable workflow?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "6 to 12 weeks for the first production release. A single base with a few automations is fast. A multi-base operation with interlinked records, sync, and a pile of third-party connectors takes the upper end of that range.",
            },
        },
        {
            "@type": "Question",
            name: "Do we own the code if we leave Airtable?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Completely. You get the GitHub repository, the PostgreSQL schema, the deployment configs, and the documentation. No per-seat pricing, no record caps, no automation-run limits, no exit cost as the team and the data grow.",
            },
        },
        {
            "@type": "Question",
            name: "Is Airtable ever the right long-term choice?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Often, yes. For small teams, content calendars, lightweight CRMs, and anything still finding its shape, Airtable is excellent and should not be replaced. The hybrid pattern keeps Airtable for flexible, low-volume work and builds custom only for the workflow that has outgrown it.",
            },
        },
        {
            "@type": "Question",
            name: "How does the cost compare at 25 seats?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Airtable's Team and Business plans run roughly $20 to $54 per seat per month, so 25 seats lands somewhere around $6k to $16k per year before add-ons and connector fees. A custom app at $40k to $70k one-time with a $12k to $20k annual retainer is usually cost-neutral to slightly more in year one, then cheaper from year two as seats and records grow.",
            },
        },
    ],
};

const proCustom = [
    "You own the schema, the source code, and the deployment",
    "Real relational integrity, constraints, and validation",
    "No record caps or automation-run limits to design around",
    "Business logic in tested TypeScript, not chained automations",
    "No per-seat ratchet as the whole team gets access",
];

const proAirtable = [
    "Genuinely the fastest way to model and reshape data without code",
    "Brilliant for prototypes, content ops, and anything still evolving",
    "Rich field types, views, and a friendly interface non-engineers love",
    "Huge connector and automation ecosystem out of the box",
    "Roadmap funded by Airtable R&D, not your engineering budget",
];

export default function CustomAppVsAirtablePage() {
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
                        <li className="text-gray-300">vs Airtable</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Scale className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        QUANT LAB USA vs Airtable
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Airtable is a brilliant flexible database. For a small team modeling a workflow that is still finding its shape, almost nothing lets you iterate faster. The math turns when the records pile up, the automations sprawl into a fragile web, and you start designing around platform limits that a <Link href="/services/custom-business-software" className="text-sky-400 hover:underline">custom app</Link> would simply not have. Here is the honest comparison.
                    </p>
                    <ConsultationCTA label="Scope an Airtable Replacement" />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Custom app vs Airtable: which should I choose?</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>Choose Airtable when your data model is still evolving, the team is small, and the flexibility of reshaping a base in seconds matters more than relational rigor. Choose a custom app when you are bumping into record caps, your automations have become a maintenance liability, you need real data integrity and validation, or per-seat pricing across the whole team has passed the cost of a build. The hybrid pattern keeps Airtable for flexible, low-volume work and builds custom for the workflow that has outgrown it.</strong>
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
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Small team, evolving model, prototype or content ops</td><td className="px-4 py-3 font-semibold text-white">Airtable</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">High record volume, real relationships, heavy automations</td><td className="px-4 py-3 font-semibold text-white">Custom app</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Keep Airtable for planning, build the operational app custom</td><td className="px-4 py-3 font-semibold text-white">Hybrid</td></tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When Airtable is the right call</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Airtable earned its place by making relational data approachable. Field types that just work, views you can spin up in seconds, linked records, and an interface a non-engineer is happy to live in. For a content calendar, a lightweight CRM, an asset tracker, or any workflow that is still finding its shape, the speed of iteration is genuinely hard to match by writing an application.
                        </p>
                        <p>
                            If your data volume is modest, your team is small, and your processes change often enough that locking them into a schema would slow you down, Airtable is the right call. The automation builder and the connector ecosystem cover a lot of ground, and Airtable&apos;s interfaces feature lets you put a clean front end on a base without code. That is the use case the product was built for, and it serves it extremely well.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Where Airtable starts to break</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Airtable hits a ceiling at a predictable point. The first squeeze is volume — per-base record limits force you to split data across bases, and the moment your records live in more than one base, the linked-record model that made Airtable elegant starts to creak. Cross-base sync and lookups become workarounds rather than features.
                        </p>
                        <p>
                            The second squeeze is automation sprawl. What started as one tidy automation becomes a chain of scripts, conditional steps, and third-party connectors with no version control and no real way to test before something breaks in production. The third squeeze is integrity and per-seat economics — Airtable will happily let a field hold the wrong kind of data, and as the whole team needs editor access, the per-seat bill on the Business tier starts to move the value math that drew you in.
                        </p>
                        <p>
                            None of this is Airtable being a bad product. It is the cost of running an operational system on a flexible database designed for exploration. Every team that grows past the prototype stage meets some version of this curve. The broader framing lives in our <Link href="/blog/build-vs-buy-software-2026" className="text-sky-400 hover:underline">build vs buy software guide</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When custom wins</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            A custom app tends to win when your record volume has pushed you into splitting bases, your automations have become something nobody wants to touch, you need real relational integrity and validation, or per-seat pricing across the team has passed the amortized cost of a build. <Link href="/services/web-applications" className="text-sky-400 hover:underline">Custom web applications</Link> give you a proper PostgreSQL schema with foreign keys and constraints, a UI tuned to the workflow, and logic that lives in tested code.
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
                                    <th className="px-4 py-3 text-left font-semibold">Airtable</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-gray-300">
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Pricing model</td>
                                    <td className="px-4 py-3">One-time build + optional retainer</td>
                                    <td className="px-4 py-3">$20 to $54 per seat / month + add-ons</td>
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
                                    <td className="px-4 py-3 text-gray-400">Record limits</td>
                                    <td className="px-4 py-3">None beyond infrastructure</td>
                                    <td className="px-4 py-3">Per-base caps by plan</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Relationships</td>
                                    <td className="px-4 py-3">Real foreign keys, enforced</td>
                                    <td className="px-4 py-3">Linked records, within base</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Data integrity</td>
                                    <td className="px-4 py-3">Constraints + validation</td>
                                    <td className="px-4 py-3">Field types, loosely enforced</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Automation</td>
                                    <td className="px-4 py-3">Tested TypeScript, version-controlled</td>
                                    <td className="px-4 py-3">Automation builder + scripts</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Reporting</td>
                                    <td className="px-4 py-3">Direct SQL, any BI tool</td>
                                    <td className="px-4 py-3">Views, dashboards, extensions</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Integrations</td>
                                    <td className="px-4 py-3">Native API code, no markup</td>
                                    <td className="px-4 py-3">Connectors, some paid</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Source code</td>
                                    <td className="px-4 py-3">Owned by client</td>
                                    <td className="px-4 py-3">Proprietary platform</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Data residency</td>
                                    <td className="px-4 py-3">Your infrastructure / region</td>
                                    <td className="px-4 py-3">Airtable-managed</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Long-term TCO at 25+ seats</td>
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
                            <h3 className="text-white font-semibold mb-4">Where Airtable wins</h3>
                            <ul className="space-y-2">
                                {proAirtable.map((item) => (
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Cost comparison at 25 seats</h2>
                    <div className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Run the simple version. A team on Airtable Business, 25 seats, three years:
                        </p>
                        <ul className="space-y-2 text-sm text-gray-300 mb-4">
                            <li className="flex gap-2"><span className="text-sky-400">~$45/seat/mo</span><span className="text-gray-400">=</span><span className="text-white">Airtable Business at 25 seats</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">× 36 months</span><span className="text-gray-400">=</span><span className="text-white font-semibold">~$40k</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">+ ~$14k</span><span className="text-gray-400">=</span><span className="text-white">connectors, sync tools, extensions</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">+ ~$22k</span><span className="text-gray-400">=</span><span className="text-white">automation upkeep + admin time</span></li>
                            <li className="flex gap-2 border-t border-white/5 pt-2 mt-2"><span className="text-emerald-400 font-semibold">~$76k</span><span className="text-gray-400">=</span><span className="text-white font-semibold">3-year Airtable TCO at this size</span></li>
                        </ul>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Compare against a custom app at $40k to $70k one-time, plus $12k to $20k annually for feature work and maintenance. That comes to $76k to $130k over three years — typically cost-neutral in year one and cheaper from year two as seats and records grow. The gap widens fastest when the alternative to a build is more connectors patching around platform limits.
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            The math flips for teams under 10 to 12 seats with modest data. There Airtable is genuinely the best value going. The flip happens when seats plus connector fees plus the cost of maintaining sprawling automations exceed the amortized cost of a one-time custom build.
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Migration path off Airtable</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The cutover follows a predictable pattern. Week one is data modeling — we map your bases and tables into a clean PostgreSQL schema with real foreign keys, and we decide which loosely-typed fields become enforced constraints. Week two is extraction through the Airtable REST API and CSV export, covering records, fields, attachments, and linked relationships, with reconciliation reports so nothing goes missing.
                        </p>
                        <p>
                            From there it is a normal build — application screens that replace the views your team relied on, automations rewritten as tested code, and integrations wired natively. Airtable stays live in parallel during the build so day-to-day work never stops, then you cut over once the new app reaches parity. Airtable can stay as a read-only archive for a window before being retired, so there is never a moment where the data is only in one place.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <ConsultationCTA label="Get an Airtable Migration Scope" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "When is a custom app a better fit than Airtable?",
                                a: "Custom usually wins when you bump into per-base record caps, your automations have grown into a fragile web of scripts and third-party connectors, you need real relational integrity and validation, or per-seat pricing across the team has passed the cost of a one-time build. Below that, Airtable's flexibility and speed are genuinely hard to match.",
                            },
                            {
                                q: "Can you migrate our Airtable bases to a custom app?",
                                a: "Yes. Airtable exposes a full REST API and CSV export per table, which covers records, fields, attachments, and linked-record relationships. We model the data into a proper PostgreSQL schema with real foreign keys and constraints, port the automations into tested code, and rebuild the views your team relies on as application screens.",
                            },
                            {
                                q: "Is Airtable ever the right long-term choice?",
                                a: "Often, yes. For small teams, content calendars, lightweight CRMs, and anything still finding its shape, Airtable is excellent and should not be replaced. The hybrid pattern keeps Airtable for flexible, low-volume work and builds custom only for the workflow that has outgrown it.",
                            },
                            {
                                q: "How does the cost compare at 25 seats?",
                                a: "Airtable's Team and Business plans run roughly $20 to $54 per seat per month, so 25 seats lands somewhere around $6k to $16k per year before add-ons and connector fees. A custom app at $40k to $70k one-time with a $12k to $20k annual retainer is usually cost-neutral to slightly more in year one, then cheaper from year two as seats and records grow.",
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
                            href="/vs/retool"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">vs Retool</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">Internal admin panels on low-code versus a custom codebase.</p>
                        </Link>
                        <Link
                            href="/vs/bubble-io"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">vs Bubble</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">No-code app building compared to a custom build you own.</p>
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
                            Do the math on your Airtable stack.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or <Link href="/contact" className="text-sky-400 hover:underline">book a 20-minute scope call</Link>. We will walk through your record volume, your automations, and your seat count and tell you straight whether Airtable is still right, custom is right, or you should run a hybrid.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
