import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Scale, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "QUANT LAB vs HubSpot: 2026 CRM Comparison | QUANT LAB USA",
    description:
        "HubSpot is great for early-stage teams. Once contact tiers and seats start to ratchet, a custom CRM build often wins on TCO and fit. Honest comparison.",
    alternates: { canonical: "https://quantlabusa.dev/vs/hubspot" },
    openGraph: {
        title: "QUANT LAB vs HubSpot: 2026 CRM Comparison | QUANT LAB USA",
        description:
            "When HubSpot wins. When custom CRM wins. Honest TCO math at the contact-tier ratchet and a fair comparison from a custom build shop.",
        url: "https://quantlabusa.dev/vs/hubspot",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "QUANT LAB vs HubSpot: 2026 CRM Comparison | QUANT LAB USA",
        description:
            "When HubSpot wins. When custom CRM wins. A fair-minded breakdown of the contact-tier ratchet.",
    },
};

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "QUANT LAB vs HubSpot: 2026 CRM Comparison",
    description:
        "Honest comparison of HubSpot vs custom CRM development for growing teams. Cost compounding, feature matrix, migration path, and breakeven math.",
    url: "https://quantlabusa.dev/vs/hubspot",
    isPartOf: {
        "@type": "WebSite",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
    },
    about: {
        "@type": "Thing",
        name: "HubSpot Alternative",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Custom CRM", item: "https://quantlabusa.dev/services/custom-crm-development" },
        { "@type": "ListItem", position: 3, name: "vs HubSpot", item: "https://quantlabusa.dev/vs/hubspot" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Can you migrate us from HubSpot to a custom CRM?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. HubSpot data exports through the CRM API and the Engagements API cover contacts, companies, deals, tickets, sequences, properties, lists, and engagement history. Workflows are remodeled into native code, not ported one-to-one, because the new system can usually do more with less.",
            },
        },
        {
            "@type": "Question",
            name: "What is the timeline for a HubSpot replacement build?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "8 to 14 weeks for the first production release. Two weeks of discovery and data modeling, then a phased build that ships a usable v1 before adding marketing automation, sequences, and reporting. HubSpot stays live during cutover so revenue and lead flow do not stop.",
            },
        },
        {
            "@type": "Question",
            name: "Do we lose HubSpot's marketing automation if we leave?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No. We rebuild the workflows you actually use (lead routing, nurture sequences, deal-stage automation) as native code or via Postmark/Resend for transactional and SendGrid for bulk. The features you never used go away — and you stop paying for them.",
            },
        },
        {
            "@type": "Question",
            name: "What happens when our contact list grows past HubSpot's tier?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "That is the breakeven moment. HubSpot ratchets pricing by marketing contact count and seat count. A custom CRM does not — your costs scale with infrastructure, not with the size of your list. Most clients who move at this point save 50 to 70 percent in year two onward.",
            },
        },
        {
            "@type": "Question",
            name: "At what team size does a custom CRM beat HubSpot on cost?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Roughly 25 seats on HubSpot Sales Pro, or any team where marketing contact count has pushed you to the next pricing tier. At that point the per-seat plus per-contact ratchet compounds faster than the amortized cost of a custom build over three years.",
            },
        },
        {
            "@type": "Question",
            name: "Can I keep HubSpot for marketing and build a custom sales CRM?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes — and that is the hybrid pattern we recommend most often in 2026. Keep HubSpot at the Starter tier ($50 a month) for transactional email, forms, and inbound capture. Push contacts and events into a custom CRM that owns the sales record. This pulls the per-seat ratchet out of your sales workflow entirely.",
            },
        },
    ],
};

const proCustom = [
    "You own the schema, the source code, and the deployment",
    "No marketing-contact tier ratchet — scale your list without scaling cost",
    "Workflow automation modeled to your sales motion, not HubSpot's",
    "PostgreSQL-native reporting — any view your ops team can write in SQL",
    "Data residency under your control (US-only, your AWS region)",
];

const proHubSpot = [
    "Fastest path to a working CRM — minutes, not weeks",
    "Marketing automation, email, and forms in one product",
    "Free tier that genuinely works for early-stage teams",
    "Mature ecosystem of integrations and certified partners",
    "Roadmap funded by HubSpot R&D, not your engineering budget",
];

export default function CustomCrmVsHubSpotPage() {
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
                        <li className="text-gray-300">vs HubSpot</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Scale className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        QUANT LAB vs HubSpot
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        HubSpot is genuinely the right answer for early-stage teams who need a CRM running by lunchtime. Once you cross the contact tiers, the seat ratchet, and the Operations Hub markup, a <Link href="/services/custom-crm-development" className="text-sky-400 hover:underline">custom CRM</Link> usually wins on cost and fit. Here is the honest comparison.
                    </p>
                    <ConsultationCTA label="Scope a HubSpot Replacement" />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Custom CRM vs HubSpot: which should I choose?</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>Choose HubSpot when you have fewer than 25 employees, want CRM plus marketing automation in a single bill, and your contact list is comfortably under the next pricing tier. Choose a custom CRM when contact counts cross HubSpot's marketing tier ratchet, when your sales motion is RFP-heavy or services-billed, or when more than 30% of your workflow lives in HubSpot custom properties. The hybrid pattern (HubSpot Starter for forms, custom for the sales record) often wins for teams in between.</strong>
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
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Early-stage team (under 25 people), inbound-led motion</td><td className="px-4 py-3 font-semibold text-white">HubSpot</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Mid-market with vertical workflow, contact list past tier limit</td><td className="px-4 py-3 font-semibold text-white">Custom CRM</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Want marketing automation but custom sales workflow</td><td className="px-4 py-3 font-semibold text-white">Hybrid (HubSpot Starter + custom)</td></tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When HubSpot is the right call</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            HubSpot earned its reputation. It is the best fit when you are a sub-25-person team, you want CRM plus marketing automation plus forms plus a help desk in one bill, you sell B2B with a standard demo-to-close motion, and your contact list is comfortably under the next pricing tier. The Free CRM plus the Starter tier give you a real working system for under a thousand dollars a month, and the onboarding is famously good.
                        </p>
                        <p>
                            If you are validating a go-to-market motion, running outbound from a small SDR pod, or building inbound on top of a content library, HubSpot is almost always the right call. The product is mature, the API is well documented, and the certified-partner network is everywhere. Founders who pick HubSpot at Series A and never outgrow it are getting genuine value.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Where HubSpot starts to hurt</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            HubSpot hits a ceiling at a specific compounding pattern. The first squeeze is the marketing-contact ratchet — once your list crosses 10,000, then 25,000, then 50,000 contacts, each tier jump adds hundreds to thousands of dollars per month for the same product you were already paying for. The second squeeze is per-seat pricing on the paid Hubs. The third squeeze is Operations Hub, which sells data-sync and custom-property automation that a custom build does natively for free.
                        </p>
                        <p>
                            The deeper problem is workflow rigidity. HubSpot models a clean Contact-Company-Deal-Ticket world. If your sales motion has multi-stakeholder approvals, vertical-specific compliance objects, RFP workflows, or a non-linear pipeline, you end up faking it with custom properties, hidden fields, and increasingly fragile Workflow logic. Every tweak takes longer than the last. None of that is HubSpot being a bad product — it is the cost of stretching a horizontal platform into a vertical use case.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When custom wins</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Custom CRM development tends to be the better answer when you have crossed 25 to 50 paid seats, your marketing-contact count is in five or six figures, your sales motion does not map cleanly to Contact-Company-Deal, your differentiation lives in the workflow itself, or data residency and IP concerns push the math toward owning the stack. The other driver is rate of change — if your operations team is rewriting the sales process every quarter, fighting HubSpot Workflow versioning and property permissions slows you down more than it helps.
                        </p>
                        <p>
                            A <Link href="/services/custom-business-software" className="text-sky-400 hover:underline">custom business software</Link> build lets you change the schema and the UI in a sprint, not a release train. Your reporting is direct PostgreSQL — any chart your ops team can write in SQL, you have. No paying extra for the Reporting & Analytics add-on. No five-figure annual surprise when you cross a contact tier.
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
                                    <th className="px-4 py-3 text-left font-semibold">HubSpot</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-gray-300">
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Pricing model</td>
                                    <td className="px-4 py-3">One-time build + optional retainer</td>
                                    <td className="px-4 py-3">Per-seat + contact tier + Hub add-ons</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Contact list scaling</td>
                                    <td className="px-4 py-3">Flat infrastructure cost</td>
                                    <td className="px-4 py-3">Tier ratchet at 10k, 25k, 50k+</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Workflow fit</td>
                                    <td className="px-4 py-3">Modeled to your motion</td>
                                    <td className="px-4 py-3">Best for standard B2B demo-to-close</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Marketing automation</td>
                                    <td className="px-4 py-3">Postmark/Resend/SendGrid wiring</td>
                                    <td className="px-4 py-3">First-class, in-product</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Custom objects</td>
                                    <td className="px-4 py-3">First-class PostgreSQL tables</td>
                                    <td className="px-4 py-3">Enterprise tier only</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Reporting</td>
                                    <td className="px-4 py-3">PostgreSQL views, any BI tool</td>
                                    <td className="px-4 py-3">HubSpot Reports + add-ons</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Data sync / ETL</td>
                                    <td className="px-4 py-3">Native, code-level</td>
                                    <td className="px-4 py-3">Operations Hub add-on</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Source code</td>
                                    <td className="px-4 py-3">Owned by client</td>
                                    <td className="px-4 py-3">Proprietary platform</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Data residency</td>
                                    <td className="px-4 py-3">Your infrastructure / region</td>
                                    <td className="px-4 py-3">HubSpot-managed (US / EU)</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Time to v1</td>
                                    <td className="px-4 py-3">8 to 14 weeks</td>
                                    <td className="px-4 py-3">Hours to days</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Long-term TCO</td>
                                    <td className="px-4 py-3">Flat after build</td>
                                    <td className="px-4 py-3">Compounds with growth</td>
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
                            <h3 className="text-white font-semibold mb-4">Where HubSpot wins</h3>
                            <ul className="space-y-2">
                                {proHubSpot.map((item) => (
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Cost comparison: the contact-tier ratchet</h2>
                    <div className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Run the simple version. A growing B2B team on HubSpot Marketing Hub Professional plus Sales Hub Professional, 20 seats, 25,000 marketing contacts, three years:
                        </p>
                        <ul className="space-y-2 text-sm text-gray-300 mb-4">
                            <li className="flex gap-2"><span className="text-sky-400">~$3,600/mo</span><span className="text-gray-400">=</span><span className="text-white">Marketing Hub Pro at 25k contacts</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">+ ~$2,400/mo</span><span className="text-gray-400">=</span><span className="text-white">Sales Hub Pro at 20 seats</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">+ ~$800/mo</span><span className="text-gray-400">=</span><span className="text-white">Operations Hub + add-ons</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">× 36 months</span><span className="text-gray-400">=</span><span className="text-white font-semibold">~$245k</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">+ ~$30k</span><span className="text-gray-400">=</span><span className="text-white">implementation + ongoing admin work</span></li>
                            <li className="flex gap-2 border-t border-white/5 pt-2 mt-2"><span className="text-emerald-400 font-semibold">~$275k</span><span className="text-gray-400">=</span><span className="text-white font-semibold">3-year HubSpot TCO at this size</span></li>
                        </ul>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Compare against a custom CRM at $45k to $70k one-time, plus $18k to $25k annually for feature work and maintenance. That comes to $99k to $145k over three years. Breakeven typically lands inside the first 14 to 18 months — and the gap widens every year as your contact list grows.
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            The math flips for organizations under 10 paid seats with fewer than 5,000 marketing contacts. There HubSpot at $50 to $90 per seat is unbeatable. The math swings hard against HubSpot once you cross 25 seats and 25,000 contacts at the same time.
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Migration path off HubSpot</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The cutover follows a predictable pattern. Week one is data modeling — we map your HubSpot objects (Contacts, Companies, Deals, Tickets, custom objects) into a clean PostgreSQL schema that matches your actual workflow, not HubSpot's defaults. Week two is API extraction through the CRM API and Engagements API, with reconciliation reports so nothing goes missing.
                        </p>
                        <p>
                            Weeks three through ten are the new system build — Next.js admin console, lead routing, deal pipeline, sequences, embedded reporting. HubSpot stays live in parallel during this window so lead flow and revenue do not stop. The cutover happens during a single weekend with a final delta sync, then HubSpot moves to read-only for 60 days as an archive before being decommissioned. The pattern is documented in our <Link href="/blog/custom-crm-development-guide" className="text-sky-400 hover:underline">custom CRM development guide</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Real-world example</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            <Link href="/work/j5-sales-os" className="text-sky-400 hover:underline">J5 Sales OS</Link> is the closest internal analogue — a QUANT LAB-built sales platform with contact deduplication, outreach presets, dual-mode lead flow, embedded reporting, and Stripe + QuickBooks integration. Same architecture pattern we ship to custom CRM clients. Production-grade from day one, no per-seat tax, no contact-tier ratchet.
                        </p>
                        <p>
                            <Link href="/work/bridgepointe-painting" className="text-sky-400 hover:underline">Bridgepointe Painting</Link> is a vertical proof point. Painting and field-service businesses have a sales motion HubSpot does not model cleanly — job-by-job estimates, retainers, partial payments, per-job profitability. We built a custom CRM plus <Link href="/services/stripe-integration" className="text-sky-400 hover:underline">Stripe integration</Link> plus QuickBooks stack that closed their month-end from three days to thirty minutes. Try doing that on the standard HubSpot deal pipeline.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "Can you migrate us from HubSpot to a custom CRM?",
                                a: "Yes. HubSpot data exports through the CRM API and the Engagements API cover contacts, companies, deals, tickets, sequences, properties, lists, and engagement history. Workflows are remodeled into native code, not ported one-to-one, because the new system can usually do more with less.",
                            },
                            {
                                q: "What is the timeline for a HubSpot replacement build?",
                                a: "8 to 14 weeks for the first production release. Two weeks of discovery and data modeling, then a phased build that ships a usable v1 before adding marketing automation, sequences, and reporting. HubSpot stays live during cutover so revenue and lead flow do not stop.",
                            },
                            {
                                q: "Do we lose HubSpot's marketing automation if we leave?",
                                a: "No. We rebuild the workflows you actually use (lead routing, nurture sequences, deal-stage automation) as native code or via Postmark/Resend for transactional and SendGrid for bulk. The features you never used go away — and you stop paying for them.",
                            },
                            {
                                q: "What happens when our contact list grows past HubSpot's tier?",
                                a: "That is the breakeven moment. HubSpot ratchets pricing by marketing contact count and seat count. A custom CRM does not — your costs scale with infrastructure, not with the size of your list. Most clients who move at this point save 50 to 70 percent in year two onward.",
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
                            href="/vs/salesforce"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">vs Salesforce</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">The other major CRM comparison — different math, same honest framing.</p>
                        </Link>
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Do the math on your contact list.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or <Link href="/contact" className="text-sky-400 hover:underline">book a 20-minute scope call</Link>. We will walk through your contact tier, your seat count, and your workflows and tell you straight whether HubSpot is right, custom is right, or you should run a hybrid.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
