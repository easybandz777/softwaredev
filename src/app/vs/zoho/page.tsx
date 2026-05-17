import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Scale, Check, ArrowRight } from "lucide-react";
import { comparisonMetadata } from "@/lib/seoMeta";

export const metadata: Metadata = comparisonMetadata({
    competitor: "Zoho",
    title: "Zoho CRM Alternative: Custom CRM in 2026 | QUANT LAB USA",
    description:
        "Zoho One is a great value at the low end. When you outgrow it, custom CRM wins on fit and stays cheaper than Zoho Enterprise long-term. Honest 2026 cost comparison.",
    slug: "/vs/zoho",
});

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "QUANT LAB vs Zoho: Custom CRM vs Zoho CRM in 2026",
    description:
        "Honest comparison of Zoho CRM and Zoho One against a custom CRM build. Feature matrix, cost compounding, migration path, and breakeven math for SMB and mid-market teams.",
    url: "https://quantlabusa.dev/vs/zoho",
    isPartOf: {
        "@type": "WebSite",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
    },
    about: {
        "@type": "Thing",
        name: "Zoho CRM Alternative",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Custom CRM", item: "https://quantlabusa.dev/services/custom-crm-development" },
        { "@type": "ListItem", position: 3, name: "vs Zoho", item: "https://quantlabusa.dev/vs/zoho" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "When is custom CRM development a better fit than Zoho?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Custom usually wins when you have crossed 25 to 40 paid seats on Zoho One, your sales motion uses heavy custom modules and Deluge scripting to compensate for the standard data model, your reports require joins Zoho Analytics handles awkwardly, or your operations team is fighting limits inside Zoho Creator rather than building forward.",
            },
        },
        {
            "@type": "Question",
            name: "Can you migrate us from Zoho CRM to a custom CRM?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Zoho data exports through the Zoho CRM API (v2 and v8), the Bulk Read API, and the standard CSV export cover leads, contacts, accounts, deals, custom modules, custom fields, related lists, and workflow history. Deluge scripts get remodeled into native code so the new system can do more with less brittle automation.",
            },
        },
        {
            "@type": "Question",
            name: "What is the timeline to replace Zoho One with a custom build?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "8 to 16 weeks for the first production release. Zoho One has more surface area than Zoho CRM alone, so discovery focuses on which apps you actually use, which integrations move with you, and which are quietly unused.",
            },
        },
        {
            "@type": "Question",
            name: "Do we own the code if we leave Zoho?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Completely. You get the GitHub repository, the PostgreSQL schema, the deployment configs, and the documentation. No per-seat ratchet, no Zoho Marketplace tax, no exit cost.",
            },
        },
        {
            "@type": "Question",
            name: "Can we keep some Zoho apps and replace the CRM?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. The hybrid pattern keeps lightweight Zoho apps you genuinely use (Zoho Mail, Zoho Books for some teams) and replaces only the CRM, Creator, or Analytics layer where the workflow has outgrown the platform. Custom integrations call the Zoho API where useful and stop where they are not.",
            },
        },
        {
            "@type": "Question",
            name: "How does the cost compare at 30 seats?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Zoho One at roughly $40 to $90 per user per month for 30 seats runs $14k to $32k per year before add-ons. A custom CRM at $40k to $65k one-time with a $15k to $22k annual retainer is typically cost-neutral to slightly more expensive in year one, then significantly cheaper from year two onward.",
            },
        },
    ],
};

const proCustom = [
    "You own the schema, the source code, and the deployment",
    "No Marketplace tax for the integrations you actually use",
    "Vertical workflow modeled as first-class objects, not Custom Modules + Deluge",
    "PostgreSQL-native reporting beats Zoho Analytics joins on complex queries",
    "Data residency under your control (US-only, your AWS region)",
];

const proZoho = [
    "Genuinely one of the best CRM values per seat at the low end",
    "Zoho One bundles 40+ apps for the price of one good seat license",
    "Mature partner network with Zoho-certified implementers in every major US metro",
    "Deluge scripting + Creator gives non-engineers low-code automation",
    "Roadmap funded by Zoho R&D, not your engineering budget",
];

export default function CustomCrmVsZohoPage() {
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
                        <li className="text-gray-300">vs Zoho</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Scale className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        QUANT LAB vs Zoho
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Zoho is one of the strongest values in CRM at the SMB end of the market. Zoho One bundles a serious amount of working software for less than a single seat of the enterprise alternatives. The math turns when your workflow has outgrown the standard data model and you are paying engineers to maintain Deluge scripts that a <Link href="/services/custom-crm-development" className="text-sky-400 hover:underline">custom CRM</Link> would handle natively. Here is the honest comparison.
                    </p>
                    <ConsultationCTA label="Scope a Zoho Replacement" />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Custom CRM vs Zoho: which should I choose?</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>Choose Zoho when you have fewer than 25 seats, want a real CRM plus a bundle of working business apps for a flat low price, and your sales motion fits inside the standard data model with light custom-field tweaking. Choose a custom CRM when you are past 25 to 40 seats on Zoho One, your workflow runs on heavy custom modules and Deluge scripting, your reporting outgrows Zoho Analytics, or your operations team is fighting platform limits inside Zoho Creator. The hybrid pattern (keep Zoho Books or Zoho Mail, replace the CRM) works for teams in between.</strong>
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
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Under 25 seats, standard B2B motion, want bundled apps cheap</td><td className="px-4 py-3 font-semibold text-white">Zoho</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">25 to 200 seats, vertical workflow, heavy Deluge or Creator code</td><td className="px-4 py-3 font-semibold text-white">Custom CRM</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Keep Zoho Books/Mail, replace the CRM layer</td><td className="px-4 py-3 font-semibold text-white">Hybrid</td></tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When Zoho is the right call</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Zoho earned its position as the value leader. The bundled Zoho One subscription at roughly $40 to $90 per user per month covers a working CRM, mail, books, projects, desk, campaigns, social, and another thirty-plus apps you may or may not touch. For a sub-25-person company that needs CRM plus accounting plus shared mail plus help desk in one bill, the math is hard to beat with anything else on the market.
                        </p>
                        <p>
                            If your sales motion fits a standard B2B Account-Contact-Deal data model, your reporting needs are dashboard-shaped rather than warehouse-shaped, and your team is comfortable in a no-code-plus-Deluge environment, Zoho is genuinely the right call. The product is mature, the API is stable, and the Zoho-certified partner network can implement most use cases without you hiring a single engineer.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Where Zoho starts to break</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Zoho hits a ceiling at a predictable point. The first squeeze is the workflow stretch — you start modeling your real sales motion with custom modules, custom layouts, custom fields, and Deluge scripts that orchestrate the platform around the actual business. The platform handles it, but every change costs a Deluge engineer half a day, and the script library quietly grows into a maintenance liability nobody owns.
                        </p>
                        <p>
                            The second squeeze is reporting. Zoho Analytics is good for what it is, but cross-module joins, time-series cohorts, and revenue-attribution queries push you toward export-and-warehouse workflows that the platform was not designed to feed cleanly. The third squeeze is per-seat economics in the Enterprise tier, where adding a few sales hires and an analytics seat or two starts to move the needle on the value math that drew you to Zoho in the first place.
                        </p>
                        <p>
                            None of this is Zoho being a bad product. It is the cost of bending a horizontal SMB platform into a vertical mid-market workflow. Every CRM vendor hits this — Zoho's break point sits at a different scale and a different shape than HubSpot's or Salesforce's, but the curve is the same.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When custom wins</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Custom CRM development tends to win when you have crossed 25 to 40 paid seats on Zoho One or 40 to 60 on Zoho CRM Enterprise, your operations team has built more than 15 Deluge functions to compensate for the standard data model, your reporting requires SQL-shaped queries that Zoho Analytics handles awkwardly, or your differentiation lives in workflow nuance the platform cannot model cleanly. <Link href="/services/custom-business-software" className="text-sky-400 hover:underline">Custom business software</Link> gives you the schema and the UI to match your real motion.
                        </p>
                        <p>
                            The other common driver is rate of change. If your operations team rewrites the sales process every two quarters, fighting Zoho module permissions, custom layout rules, and Deluge versioning slows you down. A custom CRM lets you change the schema and the UI in a sprint. Your reporting is direct PostgreSQL — any chart your ops team can write in SQL, you have, without paying for an Analytics seat.
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
                                    <th className="px-4 py-3 text-left font-semibold text-white">Custom CRM (QUANT LAB)</th>
                                    <th className="px-4 py-3 text-left font-semibold">Zoho One / Zoho CRM</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-gray-300">
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Pricing model</td>
                                    <td className="px-4 py-3">One-time build + optional retainer</td>
                                    <td className="px-4 py-3">$40 to $90 per user / month (bundled)</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Seat scaling</td>
                                    <td className="px-4 py-3">Flat infrastructure cost</td>
                                    <td className="px-4 py-3">Linear per-seat ratchet</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Workflow fit</td>
                                    <td className="px-4 py-3">Modeled to your motion</td>
                                    <td className="px-4 py-3">Custom Modules + Deluge stretches</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Automation language</td>
                                    <td className="px-4 py-3">TypeScript, native and testable</td>
                                    <td className="px-4 py-3">Deluge (Zoho-specific)</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Reporting</td>
                                    <td className="px-4 py-3">PostgreSQL views, any BI tool</td>
                                    <td className="px-4 py-3">Zoho Analytics, paid per seat</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Custom objects</td>
                                    <td className="px-4 py-3">First-class PostgreSQL tables</td>
                                    <td className="px-4 py-3">Custom Modules + per-record limits</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Integrations</td>
                                    <td className="px-4 py-3">Native API code, no markup</td>
                                    <td className="px-4 py-3">Zoho Marketplace, often paid</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Bundled apps</td>
                                    <td className="px-4 py-3">Only what you build or wire</td>
                                    <td className="px-4 py-3">40+ apps, most you will not use</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Source code</td>
                                    <td className="px-4 py-3">Owned by client</td>
                                    <td className="px-4 py-3">Proprietary platform</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Data residency</td>
                                    <td className="px-4 py-3">Your infrastructure / region</td>
                                    <td className="px-4 py-3">Zoho-managed regions</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Time to v1</td>
                                    <td className="px-4 py-3">8 to 16 weeks</td>
                                    <td className="px-4 py-3">Days to weeks</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Long-term TCO at 30+ seats</td>
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
                            <h3 className="text-white font-semibold mb-4">Where Zoho wins</h3>
                            <ul className="space-y-2">
                                {proZoho.map((item) => (
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Cost comparison at 30 seats</h2>
                    <div className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Run the simple version. A mid-market team on Zoho One Enterprise, 30 users, three years:
                        </p>
                        <ul className="space-y-2 text-sm text-gray-300 mb-4">
                            <li className="flex gap-2"><span className="text-sky-400">~$57/user/mo</span><span className="text-gray-400">=</span><span className="text-white">Zoho One Enterprise at 30 seats</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">× 36 months</span><span className="text-gray-400">=</span><span className="text-white font-semibold">~$61k</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">+ ~$25k</span><span className="text-gray-400">=</span><span className="text-white">Marketplace add-ons + Analytics seats</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">+ ~$30k</span><span className="text-gray-400">=</span><span className="text-white">Deluge / Creator engineering + admin work</span></li>
                            <li className="flex gap-2 border-t border-white/5 pt-2 mt-2"><span className="text-emerald-400 font-semibold">~$116k</span><span className="text-gray-400">=</span><span className="text-white font-semibold">3-year Zoho TCO at this size</span></li>
                        </ul>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Compare against a custom CRM at $40k to $65k one-time, plus $15k to $22k annually for feature work and maintenance. That comes to $85k to $131k over three years — typically cost-neutral in year one and meaningfully cheaper from year two, with the gap widening as headcount grows. Pair the build with a <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platform</Link> roadmap and the marginal cost of new capability lives in your repo, not in a vendor's roadmap.
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            The math flips for organizations under 15 to 20 seats. There Zoho One at $40 per user is genuinely unbeatable. The flip happens when seat count plus Deluge / Creator engineering plus Marketplace markup combined exceed the amortized cost of a one-time custom build.
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Migration path off Zoho</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The cutover follows a predictable pattern. Week one is data modeling — we map your Zoho modules (Leads, Contacts, Accounts, Deals, Custom Modules) into a clean PostgreSQL schema that matches the actual workflow, not Zoho's defaults. Week two is API extraction through the Zoho CRM API and the Bulk Read API, with reconciliation reports so nothing goes missing. Your Deluge functions get triaged — the ones doing real work get rewritten as TypeScript, and the ones that exist only to patch around the data model get retired.
                        </p>
                        <p>
                            Weeks three through twelve are the new system build — Next.js admin console, pipeline UI, embedded reporting, integrations. Zoho stays live in parallel during this window so lead flow and revenue do not stop. The cutover happens during a single weekend with a final delta sync, then Zoho moves to read-only for 60 days as an archive before being decommissioned. The full pattern is documented in our <Link href="/blog/custom-crm-development-guide" className="text-sky-400 hover:underline">custom CRM development guide</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <ConsultationCTA label="Get a Zoho Migration Scope" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Real-world example</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            <Link href="/work/j5-sales-os" className="text-sky-400 hover:underline">J5 Sales OS</Link> is the closest internal analogue — a QUANT LAB-built sales platform with contact deduplication, outreach presets, dual-mode lead flow, embedded reporting, and Stripe plus QuickBooks integration. Same architecture pattern we ship to custom CRM clients leaving Zoho — production-grade from day one, no per-seat tax, no Marketplace markup.
                        </p>
                        <p>
                            <Link href="/work/bridgepointe-painting" className="text-sky-400 hover:underline">Bridgepointe Painting</Link> is a vertical proof point. Painting and field-service businesses have a job-by-job revenue model that Zoho's standard Deals object does not handle cleanly without significant Deluge work. We built a custom CRM plus <Link href="/services/stripe-integration" className="text-sky-400 hover:underline">Stripe integration</Link> plus QuickBooks stack that closed their month-end from three days to thirty minutes — without a single Deluge script to maintain.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "When is custom CRM development a better fit than Zoho?",
                                a: "Custom usually wins when you have crossed 25 to 40 paid seats on Zoho One, your sales motion uses heavy custom modules and Deluge scripting to compensate for the standard data model, your reports require joins Zoho Analytics handles awkwardly, or your operations team is fighting limits inside Zoho Creator rather than building forward.",
                            },
                            {
                                q: "Can you migrate us from Zoho CRM to a custom CRM?",
                                a: "Yes. Zoho data exports through the Zoho CRM API (v2 and v8), the Bulk Read API, and the standard CSV export cover leads, contacts, accounts, deals, custom modules, custom fields, related lists, and workflow history. Deluge scripts get remodeled into native code so the new system can do more with less brittle automation.",
                            },
                            {
                                q: "Can we keep some Zoho apps and replace the CRM?",
                                a: "Yes. The hybrid pattern keeps lightweight Zoho apps you genuinely use (Zoho Mail, Zoho Books for some teams) and replaces only the CRM, Creator, or Analytics layer where the workflow has outgrown the platform. Custom integrations call the Zoho API where useful and stop where they are not.",
                            },
                            {
                                q: "How does the cost compare at 30 seats?",
                                a: "Zoho One at roughly $40 to $90 per user per month for 30 seats runs $14k to $32k per year before add-ons. A custom CRM at $40k to $65k one-time with a $15k to $22k annual retainer is typically cost-neutral to slightly more expensive in year one, then significantly cheaper from year two onward.",
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
                            href="/vs/salesforce"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">vs Salesforce</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">For teams comparing the high end and the value end of CRM.</p>
                        </Link>
                        <Link
                            href="/vs/hubspot"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">vs HubSpot</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">The other major SMB CRM comparison — different math, same honest framing.</p>
                        </Link>
                        <Link
                            href="/blog/custom-crm-development-guide"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">Custom CRM Development Guide</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">The full methodology, timeline, and pricing breakdown.</p>
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
                            Do the math on your Zoho stack.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or <Link href="/contact" className="text-sky-400 hover:underline">book a 20-minute scope call</Link>. We will walk through your seat count, your Deluge inventory, and your reporting needs and tell you straight whether Zoho is still right, custom is right, or you should run a hybrid.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
