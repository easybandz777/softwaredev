import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Scale, Check, X, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Salesforce Alternative: Custom CRM Build 2026 | QUANT LAB USA",
    description:
        "Salesforce fits enterprise. For sub-200 employee teams with vertical workflows, custom CRM wins on TCO and fit. 2026 cost math at $150/seat vs one-time build.",
    alternates: { canonical: "https://quantlabusa.dev/vs/salesforce" },
    openGraph: {
        title: "Custom CRM Development vs Salesforce | QUANT LAB USA",
        description:
            "When Salesforce wins. When custom CRM wins. Honest TCO math at $150/seat × 50 users vs. a one-time custom build.",
        url: "https://quantlabusa.dev/vs/salesforce",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Custom CRM Development vs Salesforce | QUANT LAB USA",
        description:
            "When Salesforce wins. When custom CRM wins. Honest TCO math and a fair-minded comparison.",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom CRM Development",
    name: "Custom CRM Development (Salesforce Alternative Build)",
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Custom CRM development as a Salesforce alternative for SMB and mid-market companies with vertical workflows that the Salesforce object model does not fit cleanly. Next.js + PostgreSQL builds, client-owned source code, no per-seat ratchet.",
    url: "https://quantlabusa.dev/vs/salesforce",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "When is custom CRM development cheaper than Salesforce?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Custom CRM development is cheaper than Salesforce starting at roughly 25 to 35 paid seats on Sales Cloud Enterprise (around $150 per seat per month). At that scale the per-seat ratchet plus AppExchange integration tax plus the part-time admin exceed the amortized cost of a one-time custom build inside 18 to 24 months.",
            },
        },
        {
            "@type": "Question",
            name: "Can you migrate us FROM Salesforce to a custom CRM?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Salesforce data export through the Data Loader, the Bulk API, or a managed package is part of every migration we run. Contacts, accounts, opportunities, activity history, attachments, and custom objects map into the new schema with reconciliation reports so nothing goes missing.",
            },
        },
        {
            "@type": "Question",
            name: "What is the timeline for a Salesforce replacement build?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "8 to 16 weeks for the first production release. Two weeks of discovery and data modeling, then a phased build that ships a usable v1 before adding the rest of the feature set. Salesforce typically runs in parallel during the cutover window.",
            },
        },
        {
            "@type": "Question",
            name: "Do we own the code if we leave Salesforce for a custom build?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Completely. You get the GitHub repository, the PostgreSQL schema, the deployment configs, and the documentation. No per-seat ratchet, no AppExchange tax, no exit cost.",
            },
        },
        {
            "@type": "Question",
            name: "How does support work after launch?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "30-day post-launch support is included. After that, you can retain us monthly for ongoing feature work or take it in-house — the codebase is documented for either path.",
            },
        },
        {
            "@type": "Question",
            name: "Can I keep Salesforce and build custom on top of it?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. The hybrid pattern keeps Salesforce as the system of record but builds the rep-facing workflow UI, the reporting layer, or the customer portal in custom code against the Salesforce REST API. This works when AppExchange is the only reason to stay on the platform and you want to fix the workflow tax separately.",
            },
        },
    ],
};

const proCustom = [
    "You own the schema, the source code, and the deployment",
    "No per-seat pricing — one-time build cost, predictable maintenance",
    "Vertical workflows modeled as first-class objects (not custom-field workarounds)",
    "PostgreSQL-native reporting — any view your operations team can write in SQL",
    "Data residency under your control (US-only, your AWS region, your cloud)",
];

const proSalesforce = [
    "Mature ecosystem — AppExchange, Trailhead, certified admins everywhere",
    "Enterprise-grade governance, audit, and field-level security out of the box",
    "Brand recognition during M&A diligence and enterprise procurement",
    "Salesforce-certified hires are easy to find in any major US metro",
    "Roadmap funded by Salesforce R&D, not by your engineering budget",
];

export default function CustomCrmVsSalesforcePage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
                        <li className="text-gray-300">vs Salesforce</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Scale className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom CRM Development vs Salesforce
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Salesforce is the right answer for a lot of companies. For SMB and mid-market teams with vertical workflows that the Salesforce object model does not fit, custom CRM development usually wins on total cost of ownership, fit, and speed of change. Here is the honest comparison.
                    </p>
                    <ConsultationCTA label="Scope a Salesforce Replacement" />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Custom CRM vs Salesforce: which should I choose?</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>Choose Salesforce when you have 200+ reps, operate in a regulated industry that requires platform attestation, or rely on AppExchange integrations no other vendor offers. Choose a custom CRM when you have 15 to 200 seats with vertical workflows that the Account-Opportunity-Lead-Contact model does not fit cleanly, or when seat costs have compounded past $100,000 per year. The TCO break-even is roughly 25 to 35 paid seats.</strong>
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
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Enterprise sales motion, 200+ reps, regulated industry</td><td className="px-4 py-3 font-semibold text-white">Salesforce</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">SMB/mid-market (15-200 seats) with vertical workflow</td><td className="px-4 py-3 font-semibold text-white">Custom CRM</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Keep Salesforce for core data, build custom UI on top</td><td className="px-4 py-3 font-semibold text-white">Hybrid</td></tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When Salesforce is actually the right call</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Salesforce earned its dominance. It is genuinely the best fit when you are an enterprise organization with more than 200 sales reps, you can absorb the seat economics without flinching, you operate in a regulated industry where the Salesforce audit story is already approved by your auditors, and your sales motion maps cleanly to the Account-Opportunity-Lead-Contact data model.
                        </p>
                        <p>
                            If a board member, an enterprise customer, or an M&A acquirer expects to see Salesforce on your stack, that is a real reason to use it. Same for organizations whose admins, ops team, and integrations are already invested in the platform. Pulling those people out of Salesforce is not free.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">The real cost of Salesforce</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The license is only the start. A working Salesforce deployment for a 50-person mid-market sales team usually includes Sales Cloud at $150 per seat per month, three to six AppExchange add-ons running another $40 to $80 per seat, a certified admin or a Salesforce consulting partner billing at $180 to $250 per hour for configuration and integration work, and customization debt accumulated through Flow, Apex, and managed packages that grows quarter over quarter.
                        </p>
                        <p>
                            None of this is a Salesforce flaw. It is the cost of running a platform that has to serve every industry in every country. If your business fits inside that envelope, you pay for breadth you actually use. If it does not, you pay for breadth you do not.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When custom wins</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Custom CRM development tends to be the better answer when you have fewer than 200 employees, your sales motion does not map cleanly to the Salesforce data model (multi-stage RFP, construction job-by-job, field-service routing, regulated-vertical compliance objects), or your differentiation lives in the workflow itself. Data-residency and IP concerns also push the math toward custom — your records on your infrastructure, your AWS region, your backups.
                        </p>
                        <p>
                            The other common driver is rate of change. If your operations team is rewriting the sales process every two quarters, fighting Salesforce object permissions and Flow versioning slows you down more than it helps. A custom CRM lets you change the schema and the UI in a sprint, not a release train.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Side-by-side</h2>
                    <div className="overflow-x-auto rounded-xl border border-white/5 bg-[#0d1526]/60">
                        <table className="min-w-full text-sm">
                            <thead className="bg-[#0a1120]/80 text-gray-400">
                                <tr>
                                    <th className="px-4 py-3 text-left font-semibold">Dimension</th>
                                    <th className="px-4 py-3 text-left font-semibold text-white">Custom CRM (QuantLab)</th>
                                    <th className="px-4 py-3 text-left font-semibold">Salesforce</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-gray-300">
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Pricing model</td>
                                    <td className="px-4 py-3">One-time build + optional retainer</td>
                                    <td className="px-4 py-3">$150+/seat/month, scales with headcount</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Workflow fit</td>
                                    <td className="px-4 py-3">Modeled to your motion</td>
                                    <td className="px-4 py-3">Best-in-class for standard sales motions</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Customization</td>
                                    <td className="px-4 py-3">Direct schema + UI changes</td>
                                    <td className="px-4 py-3">Flow, Apex, managed packages</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Reporting</td>
                                    <td className="px-4 py-3">PostgreSQL views, any BI tool</td>
                                    <td className="px-4 py-3">Salesforce report types + Tableau</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Data residency</td>
                                    <td className="px-4 py-3">Your infrastructure</td>
                                    <td className="px-4 py-3">Salesforce-managed, region selectable</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Source code</td>
                                    <td className="px-4 py-3">Owned by client</td>
                                    <td className="px-4 py-3">Proprietary platform</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Time to v1</td>
                                    <td className="px-4 py-3">8 to 16 weeks</td>
                                    <td className="px-4 py-3">4 to 12 weeks (config) / 6+ months (custom)</td>
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
                            <h3 className="text-white font-semibold mb-4">Where Salesforce wins</h3>
                            <ul className="space-y-2">
                                {proSalesforce.map((item) => (
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">The ROI breakeven math</h2>
                    <div className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Run the simple version. Salesforce Sales Cloud at $150 per seat per month, 50 users, three years:
                        </p>
                        <ul className="space-y-2 text-sm text-gray-300 mb-4">
                            <li className="flex gap-2"><span className="text-sky-400">$150 × 50 × 36</span><span className="text-gray-400">=</span><span className="text-white font-semibold">$270,000</span> in seat license alone</li>
                            <li className="flex gap-2"><span className="text-sky-400">+ ~$40k</span><span className="text-gray-400">=</span><span className="text-white">AppExchange add-ons over 3 years</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">+ ~$60k</span><span className="text-gray-400">=</span><span className="text-white">implementation and ongoing admin/consulting</span></li>
                            <li className="flex gap-2 border-t border-white/5 pt-2 mt-2"><span className="text-emerald-400 font-semibold">~ $370k</span><span className="text-gray-400">=</span><span className="text-white font-semibold">3-year Salesforce TCO at 50 seats</span></li>
                        </ul>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Compare against a custom CRM at $40k to $65k one-time, plus a $15k to $25k annual retainer for feature work and maintenance. That comes to $85k to $140k over the same three years — breakeven typically lands inside the first 18 months.
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            The math flips for organizations under 15 to 20 seats — there the Salesforce seat economics often beat a one-time build. Above ~30 seats with a non-standard motion, custom usually wins. The honest answer is do the math for your situation.
                        </p>
                    </div>
                    <div className="mt-4">
                        <Link
                            href="/calculators/stripe-cost"
                            className="inline-flex items-center gap-1 text-sky-400 hover:underline text-sm"
                        >
                            Try the related Stripe cost calculator <ArrowRight className="w-3 h-3" />
                        </Link>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Real client proof</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            <Link href="/work/j5-sales-os" className="text-sky-400 hover:underline">J5 Sales OS</Link> runs on a QuantLab-built sales platform we use internally and for clients: contact deduplication, outreach presets, dual-mode lead flow, embedded reporting, and Stripe/QuickBooks integration. Same architecture pattern we ship to custom CRM clients — production-grade from day one, no per-seat tax.
                        </p>
                        <p>
                            <Link href="/work/bridgepointe-painting" className="text-sky-400 hover:underline">Bridgepointe Painting</Link> is a construction-vertical proof point. Painting and field-service businesses have a sales motion Salesforce does not model cleanly — job-by-job estimates, retainers, partial payments, per-job profitability. We built a custom CRM + Stripe + QuickBooks stack that closed their month-end from three days to thirty minutes. Try doing that on the standard Salesforce object model.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "Can you migrate us FROM Salesforce to a custom CRM?",
                                a: "Yes. Salesforce data export through the Data Loader, the Bulk API, or a managed package is part of every migration we run. Contacts, accounts, opportunities, activity history, attachments, and custom objects map into the new schema with reconciliation reports so nothing goes missing.",
                            },
                            {
                                q: "What is the timeline for a Salesforce replacement build?",
                                a: "8 to 16 weeks for the first production release. Two weeks of discovery and data modeling, then a phased build that ships a usable v1 before adding the rest of the feature set. Salesforce typically runs in parallel during the cutover window.",
                            },
                            {
                                q: "Do we own the code if we leave Salesforce for a custom build?",
                                a: "Completely. You get the GitHub repository, the PostgreSQL schema, the deployment configs, and the documentation. No per-seat ratchet, no AppExchange tax, no exit cost.",
                            },
                            {
                                q: "How does support work after launch?",
                                a: "30-day post-launch support is included. After that, you can retain us monthly for ongoing feature work or take it in-house — the codebase is documented for either path.",
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related</h2>
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
                            href="/calculators/stripe-cost"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">Stripe Cost Calculator</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">Model the recurring-billing side of your stack with real numbers.</p>
                        </Link>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["crm","build-vs-buy"]}
                        heading="Related CRM comparison reading"
                        pinned={["custom-crm-vs-salesforce-vs-hubspot-2026","crm-migration-from-salesforce-checklist","custom-crm-development-guide"]}
                    />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Do the math on your situation.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or book a 20-minute scope call. We will walk through your seat count, your workflows, and your data model and tell you straight whether Salesforce is right, custom is right, or you should run a hybrid.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
