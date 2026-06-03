import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Scale, Check, ArrowRight } from "lucide-react";
import { comparisonMetadata } from "@/lib/seoMeta";

export const metadata: Metadata = comparisonMetadata({
    competitor: "Freshworks",
    title: "QUANT LAB USA vs Freshworks: Custom CRM in 2026",
    description:
        "Freshworks is a clean, fairly-priced CRM and support suite for mid-market teams. When fit and per-seat economics turn, a custom CRM wins. Honest 2026 cost comparison.",
    slug: "/vs/freshworks",
});

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "QUANT LAB USA vs Freshworks: Custom CRM vs Freshworks Suite in 2026",
    description:
        "Honest comparison of Freshsales, Freshdesk, and the Freshworks suite against a custom CRM build. Feature matrix, per-seat cost compounding, migration path, and breakeven math.",
    url: "https://quantlabusa.dev/vs/freshworks",
    isPartOf: {
        "@type": "WebSite",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
    },
    about: {
        "@type": "Thing",
        name: "Freshworks Alternative",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Custom CRM", item: "https://quantlabusa.dev/services/custom-crm-development" },
        { "@type": "ListItem", position: 3, name: "vs Freshworks", item: "https://quantlabusa.dev/vs/freshworks" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "When is custom CRM development a better fit than Freshworks?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Custom usually wins when you have crossed 30 to 50 paid seats across Freshsales and Freshdesk, your sales or support motion needs workflows the suite cannot model without heavy customization, your reporting outgrows the built-in analytics, or add-on modules and per-seat pricing have pushed the bill past the amortized cost of a build. Below that, Freshworks is a strong, fairly-priced choice.",
            },
        },
        {
            "@type": "Question",
            name: "Can you migrate us from Freshworks to a custom CRM?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Freshsales and Freshdesk both expose REST APIs plus CSV export covering contacts, accounts, deals, tickets, custom fields, and activity history. We model the data into a clean PostgreSQL schema, port the workflow automations into tested code, and rebuild the views and dashboards your team relies on.",
            },
        },
        {
            "@type": "Question",
            name: "What is the timeline to replace the Freshworks suite?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "8 to 16 weeks for the first production release. A CRM-only replacement is faster. Replacing both the sales CRM and the support desk together, with shared customer records and reporting, takes the upper end of that range.",
            },
        },
        {
            "@type": "Question",
            name: "Do we own the code if we leave Freshworks?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Completely. You get the GitHub repository, the PostgreSQL schema, the deployment configs, and the documentation. No per-seat ratchet, no per-module add-on fees, no marketplace tax, and no exit cost as headcount grows.",
            },
        },
        {
            "@type": "Question",
            name: "Can we replace just the CRM and keep the support desk?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. The hybrid pattern replaces only the layer that has outgrown the suite — usually the sales CRM — and keeps Freshdesk for support, with a clean integration between them. Custom code calls the Freshworks API where it is useful and stops where it is not.",
            },
        },
        {
            "@type": "Question",
            name: "How does the cost compare at 40 seats?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Freshworks mid and upper tiers run roughly $30 to $80 per user per month per product, so 40 seats across sales and support lands somewhere around $20k to $45k per year before add-ons. A custom CRM at $45k to $70k one-time with a $15k to $22k annual retainer is usually cost-neutral in year one and meaningfully cheaper from year two.",
            },
        },
    ],
};

const proCustom = [
    "You own the schema, the source code, and the deployment",
    "Sales and support modeled as one data model, not two synced products",
    "No per-seat ratchet or per-module add-on fees as you grow",
    "Reporting straight off PostgreSQL, any BI tool, no analytics seat",
    "Workflow automations in tested TypeScript, not suite-specific config",
];

const proFreshworks = [
    "Clean, modern UI that teams adopt quickly with little training",
    "Genuinely fair per-seat pricing relative to the enterprise suites",
    "Sales, support, and marketing in one connected product family",
    "Built-in AI assist and automations cover common workflows",
    "Roadmap funded by Freshworks R&D, not your engineering budget",
];

export default function CustomCrmVsFreshworksPage() {
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
                        <li><Link href="/services/custom-crm-development" className="hover:text-sky-400 transition-colors">Custom CRM</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">vs Freshworks</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Scale className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        QUANT LAB USA vs Freshworks
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Freshworks is a clean, fairly-priced suite that puts sales, support, and marketing under one roof, and for a mid-market team it is a strong choice. The math turns when your motion needs workflows the suite cannot model without heavy customization, your reporting outgrows the built-in analytics, and per-seat plus per-module pricing pushes the bill past what a <Link href="/services/custom-crm-development" className="text-sky-400 hover:underline">custom CRM</Link> would cost outright. Here is the honest comparison.
                    </p>
                    <ConsultationCTA label="Scope a Freshworks Replacement" />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Custom CRM vs Freshworks: which should I choose?</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>Choose Freshworks when you have a mid-sized team, want a clean connected suite of sales, support, and marketing at fair per-seat pricing, and your motion fits the product without deep customization. Choose a custom CRM when you are past 30 to 50 seats, your workflow needs more than the suite can model, your reporting has outgrown the built-in analytics, or add-ons and seats have passed the cost of a build. The hybrid pattern replaces only the CRM layer and keeps Freshdesk for support.</strong>
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
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Mid-sized team, standard motion, want a connected suite</td><td className="px-4 py-3 font-semibold text-white">Freshworks</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">30 to 200 seats, vertical workflow, heavy customization</td><td className="px-4 py-3 font-semibold text-white">Custom CRM</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Keep Freshdesk for support, replace the sales CRM</td><td className="px-4 py-3 font-semibold text-white">Hybrid</td></tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When Freshworks is the right call</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Freshworks built a genuinely pleasant suite. Freshsales for CRM, Freshdesk for support, and the marketing tools alongside them share a clean, modern interface that teams pick up quickly, and the per-seat pricing is fair compared to the enterprise incumbents. For a mid-market company that wants sales and support connected without a heavyweight implementation, it is a strong, sensible choice.
                        </p>
                        <p>
                            If your sales motion fits a standard pipeline, your support workflow is ticket-shaped, and your reporting needs are dashboard-shaped rather than warehouse-shaped, Freshworks is the right call. The built-in automations and AI assist cover a lot of common ground, the products are mature, and you can be live in weeks without hiring an engineer. That is exactly the buyer the suite was built for.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Where Freshworks starts to break</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Freshworks hits a ceiling at a predictable point. The first squeeze is the workflow stretch — you start bending the standard objects and automations to model a sales or support motion they were not designed for, and every change becomes a configuration project. The suite handles it, but the customization quietly grows into something only one admin understands.
                        </p>
                        <p>
                            The second squeeze is reporting. The built-in analytics are good for standard dashboards, but cross-product joins, cohort analysis, and custom revenue attribution push you toward exporting data elsewhere. The third squeeze is per-seat and per-module economics — running both Freshsales and Freshdesk at a higher tier, plus add-on modules, across a growing team starts to move the value math that made Freshworks attractive. None of this is the suite being bad; it is the cost of bending a horizontal product into a vertical motion. The same curve, at a different shape, hits every suite — the framing is in our <Link href="/blog/custom-crm-vs-salesforce-vs-hubspot-2026" className="text-sky-400 hover:underline">custom CRM vs Salesforce vs HubSpot comparison</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When custom wins</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Custom CRM development tends to win when you have crossed 30 to 50 paid seats across the suite, your workflow needs more than Freshworks can model without heavy customization, your reporting requires SQL-shaped queries the analytics handle awkwardly, or your differentiation lives in process nuance the products cannot capture. <Link href="/services/custom-crm-development" className="text-sky-400 hover:underline">Custom CRM development</Link> gives you one data model for sales and support instead of two products kept in sync.
                        </p>
                        <p>
                            The other common driver is rate of change. If your go-to-market shifts every couple of quarters, reconfiguring the suite each time slows you down, while a custom CRM lets you change the schema and the UI in a sprint. Reporting is direct PostgreSQL, so any query your ops team can write in SQL is available without an extra analytics seat. The full methodology is in our <Link href="/blog/custom-crm-development-guide" className="text-sky-400 hover:underline">custom CRM development guide</Link>.
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
                                    <th className="px-4 py-3 text-left font-semibold text-white">Custom CRM (QUANT LAB USA)</th>
                                    <th className="px-4 py-3 text-left font-semibold">Freshworks suite</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-gray-300">
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Pricing model</td>
                                    <td className="px-4 py-3">One-time build + optional retainer</td>
                                    <td className="px-4 py-3">$30 to $80 per user / month per product</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Seat scaling</td>
                                    <td className="px-4 py-3">Flat infrastructure cost</td>
                                    <td className="px-4 py-3">Linear per-seat ratchet</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Sales + support data</td>
                                    <td className="px-4 py-3">One unified model</td>
                                    <td className="px-4 py-3">Two products, integrated</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Workflow fit</td>
                                    <td className="px-4 py-3">Modeled to your motion</td>
                                    <td className="px-4 py-3">Standard objects + customization</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Automation</td>
                                    <td className="px-4 py-3">Tested TypeScript</td>
                                    <td className="px-4 py-3">Suite workflow builder</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Reporting</td>
                                    <td className="px-4 py-3">PostgreSQL, any BI tool</td>
                                    <td className="px-4 py-3">Built-in analytics, tiered</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Add-on modules</td>
                                    <td className="px-4 py-3">Built into the price</td>
                                    <td className="px-4 py-3">Often paid extra</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Integrations</td>
                                    <td className="px-4 py-3">Native API code, no markup</td>
                                    <td className="px-4 py-3">Marketplace, some paid</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Source code</td>
                                    <td className="px-4 py-3">Owned by client</td>
                                    <td className="px-4 py-3">Proprietary platform</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Data residency</td>
                                    <td className="px-4 py-3">Your infrastructure / region</td>
                                    <td className="px-4 py-3">Freshworks-managed regions</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Time to v1</td>
                                    <td className="px-4 py-3">8 to 16 weeks</td>
                                    <td className="px-4 py-3">Days to weeks</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Long-term TCO at 40+ seats</td>
                                    <td className="px-4 py-3">Flat after build</td>
                                    <td className="px-4 py-3">Compounds with headcount</td>
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
                            <h3 className="text-white font-semibold mb-4">Where Freshworks wins</h3>
                            <ul className="space-y-2">
                                {proFreshworks.map((item) => (
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
                            Run the simple version. A mid-market team on Freshworks across sales and support, 40 seats, three years:
                        </p>
                        <ul className="space-y-2 text-sm text-gray-300 mb-4">
                            <li className="flex gap-2"><span className="text-sky-400">~$55/user/mo</span><span className="text-gray-400">=</span><span className="text-white">blended Freshsales + Freshdesk at 40 seats</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">× 36 months</span><span className="text-gray-400">=</span><span className="text-white font-semibold">~$79k</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">+ ~$18k</span><span className="text-gray-400">=</span><span className="text-white">add-on modules + marketplace apps</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">+ ~$22k</span><span className="text-gray-400">=</span><span className="text-white">admin and customization time</span></li>
                            <li className="flex gap-2 border-t border-white/5 pt-2 mt-2"><span className="text-emerald-400 font-semibold">~$119k</span><span className="text-gray-400">=</span><span className="text-white font-semibold">3-year Freshworks TCO at this size</span></li>
                        </ul>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Compare against a custom CRM at $45k to $70k one-time, plus $15k to $22k annually for feature work and maintenance. That comes to $90k to $136k over three years — typically cost-neutral in year one and meaningfully cheaper from year two, with the gap widening as headcount grows. Pair the build with a <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platform</Link> roadmap and new capability lives in your repo, not behind a tier upgrade.
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            The math flips for teams under 20 to 25 seats. There Freshworks&apos; fair per-seat pricing is genuinely hard to beat. The flip happens when seats across two products, plus add-on modules, plus customization time exceed the amortized cost of a one-time custom build.
                        </p>
                    </div>
                    <div className="mt-4">
                        <Link
                            href="/pricing"
                            className="inline-flex items-center gap-1 text-sky-400 hover:underline text-sm"
                        >
                            See our pricing for custom CRM work <ArrowRight className="w-3 h-3" />
                        </Link>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Migration path off Freshworks</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The cutover follows a predictable pattern. Week one is data modeling — we map your Freshsales objects (contacts, accounts, deals) and Freshdesk tickets into a clean PostgreSQL schema that treats the customer as one record across sales and support, not two. Week two is extraction through the Freshworks REST APIs and CSV export, covering custom fields and activity history, with reconciliation reports so nothing goes missing.
                        </p>
                        <p>
                            Weeks three through twelve are the new system build — a Next.js console, pipeline and ticketing UI, embedded reporting, and integrations. Freshworks stays live in parallel during this window so sales and support never stop. The cutover happens during a single weekend with a final delta sync, then Freshworks moves to read-only for a window as an archive before being decommissioned.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <ConsultationCTA label="Get a Freshworks Migration Scope" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "When is custom CRM development a better fit than Freshworks?",
                                a: "Custom usually wins when you have crossed 30 to 50 paid seats across Freshsales and Freshdesk, your sales or support motion needs workflows the suite cannot model without heavy customization, your reporting outgrows the built-in analytics, or add-on modules and per-seat pricing have pushed the bill past the amortized cost of a build. Below that, Freshworks is a strong, fairly-priced choice.",
                            },
                            {
                                q: "Can you migrate us from Freshworks to a custom CRM?",
                                a: "Yes. Freshsales and Freshdesk both expose REST APIs plus CSV export covering contacts, accounts, deals, tickets, custom fields, and activity history. We model the data into a clean PostgreSQL schema, port the workflow automations into tested code, and rebuild the views and dashboards your team relies on.",
                            },
                            {
                                q: "Can we replace just the CRM and keep the support desk?",
                                a: "Yes. The hybrid pattern replaces only the layer that has outgrown the suite — usually the sales CRM — and keeps Freshdesk for support, with a clean integration between them. Custom code calls the Freshworks API where it is useful and stops where it is not.",
                            },
                            {
                                q: "How does the cost compare at 40 seats?",
                                a: "Freshworks mid and upper tiers run roughly $30 to $80 per user per month per product, so 40 seats across sales and support lands somewhere around $20k to $45k per year before add-ons. A custom CRM at $45k to $70k one-time with a $15k to $22k annual retainer is usually cost-neutral in year one and meaningfully cheaper from year two.",
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
                            href="/services/custom-crm-development"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">Custom CRM Development</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">The full service page — what we build, methodology, pricing.</p>
                        </Link>
                        <Link
                            href="/vs/zoho"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">vs Zoho</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">The other value-suite CRM comparison — similar math, different platform.</p>
                        </Link>
                        <Link
                            href="/vs/hubspot"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">vs HubSpot</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">A larger CRM suite comparison with the same honest framing.</p>
                        </Link>
                        <Link
                            href="/glossary/what-is-a-crm"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">What Is a CRM?</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">The plain-English glossary definition for anyone new to the term.</p>
                        </Link>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["crm","build-vs-buy"]}
                        heading="Related CRM comparison reading"
                    />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Do the math on your Freshworks stack.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or <Link href="/contact" className="text-sky-400 hover:underline">book a 20-minute scope call</Link>. We will walk through your seat count across sales and support, your customization, and your reporting needs and tell you straight whether Freshworks is still right, custom is right, or you should run a hybrid.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
