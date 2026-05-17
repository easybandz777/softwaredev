import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Scale, Check, ArrowRight } from "lucide-react";
import { comparisonMetadata } from "@/lib/seoMeta";

export const metadata: Metadata = comparisonMetadata({
    competitor: "NetSuite",
    title: "NetSuite Alternative: Custom ERP for SMB 2026 | QUANT LAB USA",
    description:
        "NetSuite fits established mid-market. For 10-150 employee teams with vertical workflows, custom ERP wins on TCO and fit. 2026 cost math + migration path.",
    slug: "/vs/netsuite",
});

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "QUANT LAB vs NetSuite: Custom ERP vs the All-in-One",
    description:
        "Honest comparison of NetSuite ERP against a custom ERP build for growing companies. Feature matrix, cost compounding, migration path, and breakeven math.",
    url: "https://quantlabusa.dev/vs/netsuite",
    isPartOf: {
        "@type": "WebSite",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
    },
    about: {
        "@type": "Thing",
        name: "NetSuite Alternative",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Custom Business Software", item: "https://quantlabusa.dev/services/custom-business-software" },
        { "@type": "ListItem", position: 3, name: "vs NetSuite", item: "https://quantlabusa.dev/vs/netsuite" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "When is custom ERP development a better fit than NetSuite?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Custom is usually a better fit when you have 10 to 150 employees, your industry vertical is not well-served by the NetSuite SuiteIndustry packages, your chart of accounts and revenue recognition have characteristics that fight the NetSuite data model, or implementation quotes from NetSuite Solution Providers are running 1.5x to 3x the annual license. The fit problem is usually a bigger driver than the cost problem.",
            },
        },
        {
            "@type": "Question",
            name: "Can you migrate us from NetSuite to a custom ERP?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. NetSuite data exports through SuiteTalk REST and SOAP, the SuiteAnalytics Connect ODBC driver, and saved searches cover accounts, customers, vendors, items, transactions, custom records, and the full general ledger. The schema gets remodeled into PostgreSQL with double-entry accounting preserved and reconciliation reports so the closing balances match to the cent.",
            },
        },
        {
            "@type": "Question",
            name: "What is the timeline to replace NetSuite?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "16 to 28 weeks for the first production release on most mid-market replacements. ERP is the heaviest custom build category — discovery is longer because the chart of accounts, revenue recognition rules, and intercompany flows all need to be modeled correctly. We typically run a parallel close for the first two months after cutover so finance can verify the new system independently.",
            },
        },
        {
            "@type": "Question",
            name: "Do we own the code if we leave NetSuite?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Completely. You get the GitHub repository, the PostgreSQL schema, the deployment configs, and the documentation. No per-user ratchet, no SuiteApp tax, no exit cost. The chart of accounts and the revenue recognition logic live in your repo.",
            },
        },
        {
            "@type": "Question",
            name: "How does the cost compare at 50 users?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "NetSuite licensing at 50 users typically runs $150k to $300k per year before SuiteApps, customization, and Solution Provider implementation fees. Three-year TCO with implementation often lands between $700k and $1.5M. A custom ERP build runs $250k to $500k one-time with a $50k to $80k annual retainer — meaningfully cheaper from year two and onward.",
            },
        },
        {
            "@type": "Question",
            name: "Can we keep NetSuite for accounting and build custom around it?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. The hybrid pattern is common in mid-market — NetSuite remains the accounting system of record, and the custom build owns the operational layer (inventory, manufacturing, project accounting, services billing). SuiteTalk gives the integration surface, and the hybrid usually reduces NetSuite license counts by removing operational users from the system.",
            },
        },
    ],
};

const proCustom = [
    "Industry-vertical workflow modeled as first-class objects, not SuiteScript stretches",
    "Chart of accounts and revenue recognition shaped to your real business, not a template",
    "No per-user ratchet on operational headcount that does not touch accounting daily",
    "PostgreSQL-native reporting beats saved searches for cohort and time-series finance work",
    "You own the schema, the source code, and the deployment",
];

const proNetSuite = [
    "Mature, audited financials with deep public-company compliance heritage",
    "SuiteIndustry packages for retail, services, manufacturing already battle-tested",
    "Multi-entity, multi-currency, and intercompany features that are genuinely hard to rebuild",
    "Mature integration ecosystem for tax, payroll, banks, and EDI",
    "Brand recognition during M&A diligence and audit",
];

export default function CustomErpVsNetSuitePage() {
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
                        <li className="text-gray-300">vs NetSuite</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Scale className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        QUANT LAB vs NetSuite
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        NetSuite is the right answer for a lot of mid-market and enterprise companies — its multi-entity, multi-currency, and audited financials story is genuinely strong. For 10 to 150 employee companies whose vertical workflow fights the data model, whose implementation quotes are running 1.5x to 3x the annual license, or whose chart of accounts is non-standard, a <Link href="/services/custom-business-software" className="text-sky-400 hover:underline">custom ERP build</Link> often wins on fit. Here is the honest comparison.
                    </p>
                    <ConsultationCTA label="Scope a NetSuite Alternative" />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Custom ERP vs NetSuite: which should I choose?</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>Choose NetSuite when you have 150+ employees, multi-entity and multi-currency complexity, an active acquisition strategy, or audit/compliance requirements that benefit from a recognized platform. Choose a custom ERP when you have 10 to 150 employees, your vertical workflow fights the standard data model, your implementation quote is running 1.5x to 3x the annual license, or your differentiation lives in operational software the SuiteIndustry packages do not model cleanly. The hybrid pattern (NetSuite for accounting, custom for operations) works for teams in between.</strong>
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
                                <tr className="border-b border-white/5"><td className="px-4 py-3">150+ employees, multi-entity, multi-currency, active M&A</td><td className="px-4 py-3 font-semibold text-white">NetSuite</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">10-150 employees, vertical workflow, non-standard chart of accounts</td><td className="px-4 py-3 font-semibold text-white">Custom ERP</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Keep NetSuite for accounting, build operational software on top</td><td className="px-4 py-3 font-semibold text-white">Hybrid</td></tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When NetSuite is the right call</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            NetSuite earned its position as the mid-market and lower-enterprise ERP leader. It is the right call when you have more than 150 employees, you operate multiple legal entities or currencies, you run an active acquisition strategy that needs a platform auditors recognize, or you have public-company aspirations that benefit from a recognized accounting system. The multi-entity, multi-currency, and intercompany features are genuinely hard to rebuild — those are decades of accounting product work and a custom build does not pretend to replace them at scale.
                        </p>
                        <p>
                            If your industry vertical has a NetSuite SuiteIndustry package that fits cleanly, if your tax and payroll integrations are standard, and if your finance team already speaks NetSuite, the platform usually earns its license. For companies whose differentiation is not in their operational software, NetSuite is the safe, audit-friendly, M&A-friendly answer.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Where NetSuite starts to hurt</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            NetSuite hits a ceiling at a predictable pattern. The first squeeze is implementation cost. A NetSuite Solution Provider implementation for a 50-employee company often quotes between 1.5x and 3x the annual license — six- and low-seven-figure projects are common, and the work is genuinely hard because the platform is genuinely deep. None of that is wasted; it is the cost of stamping a horizontal platform onto a vertical business.
                        </p>
                        <p>
                            The second squeeze is workflow fit. Companies whose vertical lives outside the SuiteIndustry templates (custom-manufacturing job shops, services firms with retainer-plus-time-and-materials billing, vertical-software companies with usage-based revenue) end up with significant SuiteScript and SuiteFlow code that exists to bend the platform around the actual business. That code is real engineering, owned by a Solution Provider rather than your team, and rebuilt every time you touch a release.
                        </p>
                        <p>
                            The third squeeze is per-user ratchet. NetSuite licensing charges meaningfully for operational users who only touch the system for one workflow — warehouse operators, technicians, project leads. At 50+ operational seats this becomes a real line item, and the value-to-price ratio bends because most of those users only need a slice of the platform.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When custom wins</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Custom ERP development tends to win when you have 10 to 150 employees, your vertical is not well-served by SuiteIndustry packages, your chart of accounts and revenue recognition have characteristics that fight the NetSuite data model, your implementation quote has come back at 2x or more the annual license, or your operational differentiation justifies owning the software outright. The break point is usually fit rather than headline price — companies pay for NetSuite when they get NetSuite-shaped value, and look at custom when they are paying for breadth they do not use.
                        </p>
                        <p>
                            A custom build lets you model the chart of accounts to your real business, ship operational software (inventory, manufacturing, project accounting, services billing) shaped to your motion, and skip per-user ratchet on operational headcount. Your reporting is direct PostgreSQL — any cohort, any cross-period, any time-series — without paying for SuiteAnalytics Connect or exporting to a separate warehouse. Pair the build with <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platform development</Link> if part of your motion is selling the operational software back to your industry.
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
                                    <th className="px-4 py-3 text-left font-semibold text-white">Custom ERP (QUANT LAB)</th>
                                    <th className="px-4 py-3 text-left font-semibold">NetSuite</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-gray-300">
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Pricing model</td>
                                    <td className="px-4 py-3">One-time build + retainer</td>
                                    <td className="px-4 py-3">Per-user license + module fees + implementation</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Workflow fit</td>
                                    <td className="px-4 py-3">Modeled to your vertical</td>
                                    <td className="px-4 py-3">SuiteIndustry packages or SuiteScript</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Chart of accounts</td>
                                    <td className="px-4 py-3">Shaped to your business</td>
                                    <td className="px-4 py-3">Template + customization</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Multi-entity / multi-currency</td>
                                    <td className="px-4 py-3">Modeled when you need it</td>
                                    <td className="px-4 py-3">Best-in-class out of the box</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Audit / compliance</td>
                                    <td className="px-4 py-3">Your auditor approves your stack</td>
                                    <td className="px-4 py-3">Recognized platform, easier diligence</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Reporting</td>
                                    <td className="px-4 py-3">PostgreSQL views, any BI tool</td>
                                    <td className="px-4 py-3">Saved searches + SuiteAnalytics</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Operational user economics</td>
                                    <td className="px-4 py-3">No per-user ratchet</td>
                                    <td className="px-4 py-3">Per-user even for slice users</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Source code</td>
                                    <td className="px-4 py-3">Owned by client</td>
                                    <td className="px-4 py-3">Proprietary platform</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Data residency</td>
                                    <td className="px-4 py-3">Your infrastructure / region</td>
                                    <td className="px-4 py-3">Oracle-managed</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Time to v1</td>
                                    <td className="px-4 py-3">16 to 28 weeks</td>
                                    <td className="px-4 py-3">6 to 18 months typical implementation</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Long-term TCO at 50+ users</td>
                                    <td className="px-4 py-3">Flat after build</td>
                                    <td className="px-4 py-3">Compounds with users + modules</td>
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
                            <h3 className="text-white font-semibold mb-4">Where NetSuite wins</h3>
                            <ul className="space-y-2">
                                {proNetSuite.map((item) => (
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Cost comparison at 50 users</h2>
                    <div className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Run the simple version. A mid-market company on NetSuite, 50 users, three years:
                        </p>
                        <ul className="space-y-2 text-sm text-gray-300 mb-4">
                            <li className="flex gap-2"><span className="text-sky-400">~$180k/yr</span><span className="text-gray-400">=</span><span className="text-white">NetSuite licensing at 50 users (mid-market typical)</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">+ ~$80k/yr</span><span className="text-gray-400">=</span><span className="text-white">SuiteApps + Advanced modules + sandboxes</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">× 3 years</span><span className="text-gray-400">=</span><span className="text-white font-semibold">~$780k</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">+ ~$300k</span><span className="text-gray-400">=</span><span className="text-white">Solution Provider implementation (typical)</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">+ ~$120k</span><span className="text-gray-400">=</span><span className="text-white">SuiteScript / SuiteFlow customization over 3 years</span></li>
                            <li className="flex gap-2 border-t border-white/5 pt-2 mt-2"><span className="text-emerald-400 font-semibold">~$1.2M</span><span className="text-gray-400">=</span><span className="text-white font-semibold">3-year NetSuite TCO at this size</span></li>
                        </ul>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Compare against a custom ERP at $250k to $500k one-time, plus $50k to $80k annually for feature work and maintenance. That comes to $400k to $740k over three years — meaningfully cheaper, with the gap widening as headcount grows. The math swings further if your operational headcount is mostly slice-users who do not justify a full NetSuite license. Pair the build with <Link href="/services/api-development" className="text-sky-400 hover:underline">API development</Link> to integrate banks, tax, and EDI without paying SuiteApp markup.
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            The math flips for organizations above 150 employees with multi-entity, multi-currency, or active M&A. There NetSuite's audit story and the depth of multi-entity intercompany features earn the price. The flip happens when fit becomes the binding constraint or when your operational seats are mostly slice-users.
                        </p>
                    </div>
                    <div className="mt-4">
                        <Link
                            href="/pricing"
                            className="inline-flex items-center gap-1 text-sky-400 hover:underline text-sm"
                        >
                            See our pricing for custom business software <ArrowRight className="w-3 h-3" />
                        </Link>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Migration path off NetSuite</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            ERP migrations are heavier than CRM migrations because the chart of accounts, revenue recognition, and intercompany flows all need to come across without error. The cutover starts with three to four weeks of discovery — your finance team and our engineers map your current chart of accounts, the saved searches your close depends on, the SuiteScript and SuiteFlow code that is doing real work, and the integrations (banks, tax, payroll, EDI) that need to move with you.
                        </p>
                        <p>
                            Data extraction uses SuiteTalk REST and SOAP, the SuiteAnalytics Connect ODBC driver, and saved searches to pull accounts, customers, vendors, items, transactions, custom records, and the general ledger. The build then runs 12 to 24 weeks. The cutover happens at fiscal-period boundary so the opening balances are clean. We typically run a parallel close for the first two months so your finance team can verify the new system independently before going single-system. The pattern is documented in our <Link href="/blog/custom-crm-development-guide" className="text-sky-400 hover:underline">custom build methodology guide</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <ConsultationCTA label="Get a NetSuite Migration Scope" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Real-world example</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            <Link href="/work/bridgepointe-painting" className="text-sky-400 hover:underline">Bridgepointe Painting</Link> is the closest vertical proof point. Field-service and project-based businesses have a revenue model — job-by-job estimates, retainers, partial payments, per-job profitability, materials cost tracking — that standard ERP data models do not handle cleanly without significant customization work. We built a custom system plus <Link href="/services/stripe-integration" className="text-sky-400 hover:underline">Stripe integration</Link> plus QuickBooks stack that closed their month-end from three days to thirty minutes. Same architecture pattern scales up to a full NetSuite-equivalent build for larger operations.
                        </p>
                        <p>
                            <Link href="/work/j5-sales-os" className="text-sky-400 hover:underline">J5 Sales OS</Link> shows the operational-software side — a QUANT LAB-built platform with contact deduplication, outreach presets, dual-mode lead flow, embedded reporting, and Stripe plus QuickBooks integration. The same component library and architecture is what we extend into custom ERP builds for clients whose operational software is the differentiator.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "When is custom ERP development a better fit than NetSuite?",
                                a: "Custom is usually a better fit when you have 10 to 150 employees, your industry vertical is not well-served by the NetSuite SuiteIndustry packages, your chart of accounts and revenue recognition have characteristics that fight the NetSuite data model, or implementation quotes from NetSuite Solution Providers are running 1.5x to 3x the annual license. The fit problem is usually a bigger driver than the cost problem.",
                            },
                            {
                                q: "Can you migrate us from NetSuite to a custom ERP?",
                                a: "Yes. NetSuite data exports through SuiteTalk REST and SOAP, the SuiteAnalytics Connect ODBC driver, and saved searches cover accounts, customers, vendors, items, transactions, custom records, and the full general ledger. The schema gets remodeled into PostgreSQL with double-entry accounting preserved and reconciliation reports so the closing balances match to the cent.",
                            },
                            {
                                q: "What is the timeline to replace NetSuite?",
                                a: "16 to 28 weeks for the first production release on most mid-market replacements. ERP is the heaviest custom build category — discovery is longer because the chart of accounts, revenue recognition rules, and intercompany flows all need to be modeled correctly. We typically run a parallel close for the first two months after cutover so finance can verify the new system independently.",
                            },
                            {
                                q: "Can we keep NetSuite for accounting and build custom around it?",
                                a: "Yes. The hybrid pattern is common in mid-market — NetSuite remains the accounting system of record, and the custom build owns the operational layer (inventory, manufacturing, project accounting, services billing). SuiteTalk gives the integration surface, and the hybrid usually reduces NetSuite license counts by removing operational users from the system.",
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
                            <p className="text-sm text-gray-400 leading-relaxed">The umbrella service page covering custom ERP, operational software, and back office.</p>
                        </Link>
                        <Link
                            href="/services/saas-platform-development"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">SaaS Platform Development</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">If your operational software is the product, this is the build pattern.</p>
                        </Link>
                        <Link
                            href="/vs/salesforce"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">vs Salesforce</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">The CRM-side equivalent comparison — different platform, same break-point math.</p>
                        </Link>
                        <Link
                            href="/blog/custom-crm-development-guide"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">Custom Build Methodology Guide</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">The full methodology, timeline, and pricing breakdown for custom builds.</p>
                        </Link>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["build-vs-buy","internal-tools"]}
                        heading="Related ERP & internal tools reading"
                    />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Do the math on your ERP stack.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or <Link href="/contact" className="text-sky-400 hover:underline">book a 20-minute scope call</Link>. We will walk through your headcount, your chart of accounts, the SuiteScript inventory, and the parts of your workflow NetSuite handles awkwardly — and tell you straight whether NetSuite is right, custom is right, or you should run a hybrid.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
