import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Scale, Check, ArrowRight } from "lucide-react";
import { comparisonMetadata } from "@/lib/seoMeta";

export const metadata: Metadata = comparisonMetadata({
    competitor: "Pipedrive",
    title: "Pipedrive Alternative: Custom CRM 2026 | QUANT LAB USA",
    description:
        "Pipedrive ships the cleanest visual pipeline for small B2B teams. When your motion is multi-stakeholder or vertical, custom CRM wins. 2026 cost & feature comparison.",
    slug: "/vs/pipedrive",
});

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "QUANT LAB vs Pipedrive: When to Outgrow the Visual Pipeline",
    description:
        "Honest comparison of Pipedrive against a custom CRM build for growing B2B teams. Feature matrix, cost ratchet, migration path, and breakeven math.",
    url: "https://quantlabusa.dev/vs/pipedrive",
    isPartOf: {
        "@type": "WebSite",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
    },
    about: {
        "@type": "Thing",
        name: "Pipedrive Alternative",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Custom CRM", item: "https://quantlabusa.dev/services/custom-crm-development" },
        { "@type": "ListItem", position: 3, name: "vs Pipedrive", item: "https://quantlabusa.dev/vs/pipedrive" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "When does it make sense to leave Pipedrive?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Custom usually starts to make sense when your sales motion is no longer a single linear pipeline — multi-stakeholder approvals, services billed against retainers, vertical-specific compliance objects, or RFP workflows. Add-on costs (LeadBooster, Smart Docs, Campaigns) crossing the value math is the financial trigger; workflow friction is the operational one.",
            },
        },
        {
            "@type": "Question",
            name: "Can you migrate us from Pipedrive to a custom CRM?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Pipedrive data exports through the official API cover persons, organizations, deals, activities, notes, products, custom fields, and pipeline stages. Pipeline-stage automations get remodeled into native code so the new system can handle non-linear motions without faking it with hidden fields.",
            },
        },
        {
            "@type": "Question",
            name: "What is the timeline to replace Pipedrive?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "6 to 12 weeks for the first production release. Pipedrive's data model is smaller and cleaner than HubSpot's or Salesforce's, so the migration phase is shorter — most of the work is modeling the workflow Pipedrive could not represent, not moving records.",
            },
        },
        {
            "@type": "Question",
            name: "Do we lose Pipedrive's visual pipeline?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No. The Kanban-style pipeline is a UI pattern, not a Pipedrive monopoly. Custom builds ship the same drag-and-drop pipeline view as a starting point and then add the views Pipedrive does not — multi-pipeline cross-views, multi-stakeholder approval flows, retainer-vs-deal split views, etc.",
            },
        },
        {
            "@type": "Question",
            name: "How does the cost compare at 20 seats?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Pipedrive Professional at $49 to $79 per user per month for 20 seats runs $12k to $19k per year before add-ons. Power and Enterprise tiers plus LeadBooster, Smart Docs, Campaigns, and Projects can push effective per-user cost well above $120 per month. At those add-on counts a custom CRM at $40k to $65k one-time is typically cheaper in year two and onward.",
            },
        },
        {
            "@type": "Question",
            name: "Can we keep Pipedrive for the pipeline and build custom on top?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. The hybrid pattern is straightforward — Pipedrive remains the system of record for deal stages and rep activity, and the custom build owns the workflow layer (RFP routing, services billing, vertical compliance objects). Pipedrive's API is well-designed and the hybrid is one of the lower-friction CRM hybrids on the market.",
            },
        },
    ],
};

const proCustom = [
    "Non-linear sales motions modeled as first-class workflow, not custom-field stretches",
    "No add-on tax (LeadBooster, Smart Docs, Campaigns, Projects) for capabilities you actually need",
    "Multi-pipeline cross-views and reporting Pipedrive Insights does not support cleanly",
    "PostgreSQL-native reporting beats Insights for revenue attribution and cohort work",
    "You own the schema, the source code, and the deployment",
];

const proPipedrive = [
    "The cleanest visual pipeline UX on the market for small B2B teams",
    "Onboarding measured in hours — sales reps get productive without IT involvement",
    "Per-seat economics that genuinely beat HubSpot Sales Hub and Salesforce at low seat counts",
    "Mature mobile experience for outside sales and field-based reps",
    "Roadmap funded by Pipedrive R&D, not your engineering budget",
];

export default function CustomCrmVsPipedrivePage() {
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
                        <li className="text-gray-300">vs Pipedrive</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Scale className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        QUANT LAB vs Pipedrive
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Pipedrive is genuinely the cleanest visual pipeline on the market for small B2B teams running a single linear sales motion. When your motion outgrows the visual pipeline — multi-stakeholder approvals, services-billed retainers, vertical compliance objects, RFP workflows — a <Link href="/services/custom-crm-development" className="text-sky-400 hover:underline">custom CRM</Link> usually wins. Here is the honest comparison.
                    </p>
                    <ConsultationCTA label="Scope a Pipedrive Replacement" />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Custom CRM vs Pipedrive: which should I choose?</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>Choose Pipedrive when your sales motion is a single linear B2B pipeline, you have fewer than 25 seats, the bundled add-on stack (LeadBooster, Smart Docs, Campaigns) is not yet a meaningful line item, and your reporting needs are dashboard-shaped. Choose a custom CRM when your motion is multi-stakeholder, services-billed, vertical-specific, or non-linear; when add-on costs have compounded past the per-seat base; or when reporting requires SQL-shaped queries Pipedrive Insights cannot answer. The hybrid pattern works for teams in between — Pipedrive owns the deal stage, custom owns the workflow layer.</strong>
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
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Under 25 seats, single linear B2B pipeline</td><td className="px-4 py-3 font-semibold text-white">Pipedrive</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Non-linear motion, services-billed, vertical workflow</td><td className="px-4 py-3 font-semibold text-white">Custom CRM</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Keep Pipedrive for the pipeline, build workflow layer on top</td><td className="px-4 py-3 font-semibold text-white">Hybrid</td></tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When Pipedrive is the right call</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Pipedrive earned its reputation. It is the best fit when your sales motion fits a single linear pipeline, you have fewer than 25 sales reps, your team needs a tool that productizes in hours rather than weeks, and your bundled spend on LeadBooster, Smart Docs, Campaigns, and Projects is still well under the per-seat base. For a small B2B sales team running outbound or inbound on a clean deal-stage motion, Pipedrive is one of the strongest products on the market.
                        </p>
                        <p>
                            If your reps need a mobile-first experience for field-based selling, Pipedrive's mobile app is genuinely good. If your CFO wants a CRM bill that is easy to forecast and a stack that does not require an admin headcount, Pipedrive is hard to beat. Founders who pick Pipedrive at Series A and never outgrow it are getting genuine value.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Where Pipedrive starts to break</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Pipedrive hits a ceiling at a predictable pattern. The first squeeze is the data model. Pipedrive optimizes for a clean Person-Organization-Deal world. If your sales motion has multi-stakeholder approval workflows, services billed against retainers, partial-payment schedules, RFP routing, or vertical-specific compliance objects, you end up faking it with custom fields, hidden activities, and pipeline stages that mean something other than they say. Each workaround is fine in isolation; the accumulation becomes a maintenance liability.
                        </p>
                        <p>
                            The second squeeze is add-on economics. LeadBooster, Smart Docs, Campaigns, and Projects each add per-seat cost on top of the base tier. Teams that adopted Pipedrive specifically for its clean per-seat pricing often find the effective rate has climbed past $120 per user per month by the time the stack is doing what they need. The third squeeze is reporting — Pipedrive Insights is competent for pipeline dashboards but struggles with cross-deal cohort analysis, revenue attribution, and the kind of SQL-shaped queries finance teams want at year-end.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When custom wins</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Custom CRM development tends to win when your motion is no longer a single linear pipeline, when more than 30 percent of your workflow lives in Pipedrive custom fields and hidden activities, when your add-on bill has climbed past your base subscription, or when your reporting requires joins Insights cannot answer cleanly. A <Link href="/services/custom-business-software" className="text-sky-400 hover:underline">custom business software</Link> build gives you the schema and the UI to match your real motion — multi-pipeline cross-views, retainer-vs-deal splits, partial-payment ladders, all as first-class workflow rather than custom-field stretches.
                        </p>
                        <p>
                            The other driver is rate of change. If your operations team is rewriting the sales process every quarter, Pipedrive's pipeline-stage rigidity becomes a constraint. A custom CRM lets you change the schema and the UI in a sprint. Your reporting is direct PostgreSQL — any chart your ops team can write in SQL, you have, without paying for an Insights upgrade or exporting to a warehouse.
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
                                    <th className="px-4 py-3 text-left font-semibold">Pipedrive</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-gray-300">
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Pricing model</td>
                                    <td className="px-4 py-3">One-time build + optional retainer</td>
                                    <td className="px-4 py-3">Per-seat tier + per-seat add-ons</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Workflow fit</td>
                                    <td className="px-4 py-3">Modeled to your motion</td>
                                    <td className="px-4 py-3">Best for single linear pipeline</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Pipeline UX</td>
                                    <td className="px-4 py-3">Same Kanban + bespoke views</td>
                                    <td className="px-4 py-3">Best-in-class Kanban pipeline</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Multi-stakeholder approvals</td>
                                    <td className="px-4 py-3">First-class workflow objects</td>
                                    <td className="px-4 py-3">Custom field stretches</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Services billing / retainers</td>
                                    <td className="px-4 py-3">Native, modeled to your motion</td>
                                    <td className="px-4 py-3">Not natively supported</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Reporting</td>
                                    <td className="px-4 py-3">PostgreSQL views, any BI tool</td>
                                    <td className="px-4 py-3">Insights — dashboard-shaped</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Add-on tax</td>
                                    <td className="px-4 py-3">None — features ship with the build</td>
                                    <td className="px-4 py-3">LeadBooster / Smart Docs / Campaigns</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Mobile experience</td>
                                    <td className="px-4 py-3">PWA / native (scoped)</td>
                                    <td className="px-4 py-3">First-class native app</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Source code</td>
                                    <td className="px-4 py-3">Owned by client</td>
                                    <td className="px-4 py-3">Proprietary platform</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Data residency</td>
                                    <td className="px-4 py-3">Your infrastructure / region</td>
                                    <td className="px-4 py-3">Pipedrive-managed</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Time to v1</td>
                                    <td className="px-4 py-3">6 to 12 weeks</td>
                                    <td className="px-4 py-3">Hours to days</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Long-term TCO at 20+ seats with add-ons</td>
                                    <td className="px-4 py-3">Flat after build</td>
                                    <td className="px-4 py-3">Compounds with add-on adoption</td>
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
                            <h3 className="text-white font-semibold mb-4">Where Pipedrive wins</h3>
                            <ul className="space-y-2">
                                {proPipedrive.map((item) => (
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Cost comparison at 20 seats with add-ons</h2>
                    <div className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Run the simple version. A B2B team on Pipedrive Power with the common add-ons, 20 users, three years:
                        </p>
                        <ul className="space-y-2 text-sm text-gray-300 mb-4">
                            <li className="flex gap-2"><span className="text-sky-400">~$80/user/mo</span><span className="text-gray-400">=</span><span className="text-white">Pipedrive Power base at 20 seats</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">+ ~$45/user/mo</span><span className="text-gray-400">=</span><span className="text-white">LeadBooster + Smart Docs + Campaigns</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">× 36 months × 20 seats</span><span className="text-gray-400">=</span><span className="text-white font-semibold">~$90k</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">+ ~$20k</span><span className="text-gray-400">=</span><span className="text-white">implementation + admin work over 3 years</span></li>
                            <li className="flex gap-2 border-t border-white/5 pt-2 mt-2"><span className="text-emerald-400 font-semibold">~$110k</span><span className="text-gray-400">=</span><span className="text-white font-semibold">3-year Pipedrive TCO at this size</span></li>
                        </ul>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Compare against a custom CRM at $40k to $60k one-time, plus $15k to $20k annually for feature work and maintenance. That comes to $85k to $120k over three years — typically cost-neutral with Pipedrive in year one and meaningfully cheaper from year two, especially as you continue adding capability the add-ons would have charged for. Pair the build with <Link href="/services/api-development" className="text-sky-400 hover:underline">custom API development</Link> to integrate the rest of your stack without paying Marketplace markup.
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            The math stays in Pipedrive's favor for teams under 10 seats running the base tier without add-ons. The flip happens when add-on adoption pushes effective per-user cost past $100 per month, or when you would need to pay implementation cost anyway to fit Pipedrive to a non-linear motion.
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Migration path off Pipedrive</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The cutover is one of the cleaner CRM migrations because Pipedrive's data model is small and well-shaped. Week one is workflow discovery — we identify the non-linear parts of your motion (multi-stakeholder routing, services billing, RFP flows) that Pipedrive could not represent and that drove the move. Week two is API extraction through the Pipedrive REST API covering persons, organizations, deals, activities, notes, products, custom fields, and pipeline stages, with reconciliation reports so nothing goes missing.
                        </p>
                        <p>
                            Weeks three through ten are the new system build — Next.js admin console, Kanban pipeline UI as a starting point, workflow layer for the non-linear pieces, embedded reporting, integrations. Pipedrive stays live in parallel during this window so lead flow and revenue do not stop. The cutover happens during a single weekend with a final delta sync, then Pipedrive moves to read-only for 60 days before being decommissioned. The full pattern is documented in our <Link href="/blog/custom-crm-development-guide" className="text-sky-400 hover:underline">custom CRM development guide</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <ConsultationCTA label="Get a Pipedrive Migration Scope" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Real-world example</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            <Link href="/work/j5-sales-os" className="text-sky-400 hover:underline">J5 Sales OS</Link> is the closest internal analogue — a QUANT LAB-built sales platform with contact deduplication, outreach presets, dual-mode lead flow, embedded reporting, and Stripe plus QuickBooks integration. The same architecture pattern we ship to teams replacing Pipedrive — Kanban pipeline as the entry view, with workflow depth Pipedrive does not model.
                        </p>
                        <p>
                            <Link href="/work/bridgepointe-painting" className="text-sky-400 hover:underline">Bridgepointe Painting</Link> is a non-linear motion proof point. Painting and field-service businesses have job-by-job estimates, retainers, partial payments, and per-job profitability that Pipedrive's Deal object does not model cleanly. We built a custom CRM plus <Link href="/services/stripe-integration" className="text-sky-400 hover:underline">Stripe integration</Link> plus QuickBooks stack that closed their month-end from three days to thirty minutes — without bending Pipedrive's data model.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "When does it make sense to leave Pipedrive?",
                                a: "Custom usually starts to make sense when your sales motion is no longer a single linear pipeline — multi-stakeholder approvals, services billed against retainers, vertical-specific compliance objects, or RFP workflows. Add-on costs (LeadBooster, Smart Docs, Campaigns) crossing the value math is the financial trigger; workflow friction is the operational one.",
                            },
                            {
                                q: "Can you migrate us from Pipedrive to a custom CRM?",
                                a: "Yes. Pipedrive data exports through the official API cover persons, organizations, deals, activities, notes, products, custom fields, and pipeline stages. Pipeline-stage automations get remodeled into native code so the new system can handle non-linear motions without faking it with hidden fields.",
                            },
                            {
                                q: "Do we lose Pipedrive's visual pipeline?",
                                a: "No. The Kanban-style pipeline is a UI pattern, not a Pipedrive monopoly. Custom builds ship the same drag-and-drop pipeline view as a starting point and then add the views Pipedrive does not — multi-pipeline cross-views, multi-stakeholder approval flows, retainer-vs-deal split views, etc.",
                            },
                            {
                                q: "Can we keep Pipedrive for the pipeline and build custom on top?",
                                a: "Yes. The hybrid pattern is straightforward — Pipedrive remains the system of record for deal stages and rep activity, and the custom build owns the workflow layer (RFP routing, services billing, vertical compliance objects). Pipedrive's API is well-designed and the hybrid is one of the lower-friction CRM hybrids on the market.",
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
                            href="/vs/hubspot"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">vs HubSpot</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">The other major SMB CRM comparison — contact-tier ratchet vs add-on ratchet.</p>
                        </Link>
                        <Link
                            href="/vs/zoho"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">vs Zoho</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">The bundled-app value player vs the visual-pipeline specialist — different break points.</p>
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
                            Do the math on your add-on stack.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or <Link href="/contact" className="text-sky-400 hover:underline">book a 20-minute scope call</Link>. We will walk through your seat count, your add-on inventory, and the non-linear parts of your motion and tell you straight whether Pipedrive is still right, custom is right, or you should run a hybrid.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
