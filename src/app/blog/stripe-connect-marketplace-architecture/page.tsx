import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { ArrowRight, Check, CreditCard } from "lucide-react";
import { articleMetadata } from "@/lib/seoMeta";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";

const SLUG = "stripe-connect-marketplace-architecture";
const PUBLISHED = "2026-05-12";

export const metadata: Metadata = articleMetadata({
    title: "Stripe Connect Marketplace Architecture That Scales (2026)",
    description:
        "Stripe Connect marketplace patterns that scale: account model choice, payout flows, refund handling, KYC, webhook reliability, and idempotency for 2026 builds.",
    slug: `blog/${SLUG}`,
    image: "/og-stripe.png",
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    authors: ["Bill Beltz"],
    keywords: ["stripe connect marketplace", "stripe connect architecture", "marketplace payments"],
});

const faqs = [
    { q: "Which Stripe Connect account type should a marketplace use?", a: "Express for 90% of marketplaces. It gives you a Stripe-hosted onboarding flow, KYC, and dashboard that the seller sees, while you keep the customer-facing branding and the platform-level control. Standard is best for product-led platforms where sellers already have an existing Stripe account. Custom is for marketplaces that need complete UI control and are willing to take on KYC obligations, fraud monitoring, and the engineering load that comes with it." },
    { q: "How do I handle refunds when the platform has already taken its fee?", a: "Refund the full charge and Stripe will reverse the application_fee_amount automatically. If the platform fee was already paid out, Stripe creates a negative balance that gets recouped from the next payout. For partial refunds, use the `refund_application_fee` parameter to control whether the platform retains or returns its cut. Document the policy and surface it to sellers up front; refund disputes are 60% of marketplace support load." },
    { q: "How should webhook events be processed for reliability?", a: "Three rules. First, always respond 2xx within 5 seconds even if downstream work fails — queue the work asynchronously. Second, dedupe by event ID, not by payload hash. Third, store the raw event payload immutably for at least 30 days so you can replay if a bug corrupts state. Stripe will retry for 3 days; treat the queue as the source of truth and the webhook handler as a router only." },
    { q: "What is the platform fee model that actually works at scale?", a: "Percentage of GMV with a floor. A 2.9% to 5% take rate on top of Stripe's processing fee is industry standard. A floor (e.g., $0.50 minimum per transaction) protects you on small orders where the fixed Stripe fee eats the variable take. Some marketplaces add a subscription on top of the take rate; that works only when the platform delivers continuous value beyond payment routing." },
    { q: "How do I handle KYC and seller onboarding without slowing signup?", a: "Use Express. Stripe handles KYC, the seller sees Stripe's branding, and you get back a verified account. Onboarding takes 5 to 15 minutes for most sellers. For unverified sellers, gate access to payouts but allow them to take their first charge. This single change usually lifts seller signup completion by 30 to 50%." },
    { q: "What does it cost to build a Stripe Connect marketplace?", a: "A Stripe Connect marketplace integration on top of an existing application runs $35K to $80K for an MVP and $80K to $200K for a production-grade platform with dispute handling, payouts, refunds, and reporting. Greenfield marketplace builds with Connect integration run $120K to $400K depending on the catalog complexity and seller workflows." },
    { q: "How do I handle disputes and chargebacks in Connect?", a: "Stripe routes the dispute to the platform account by default, with optional liability transfer to the connected account if the seller is the responsible party. Build a dispute response workflow into the seller dashboard with a 5-day SLA. The marketplace pays the dispute fee ($15 to $25), then chargebacks against the seller's next payout. Document the policy explicitly in the seller agreement." },
    { q: "Should the marketplace be the platform account or the connected account?", a: "Platform. Always. The marketplace operator is the platform; the sellers are connected accounts. This is non-negotiable architecturally because the platform account is the entity Stripe has the contract with, and the platform is responsible for the funds flow and KYC compliance." },
    { q: "How do I test Stripe Connect without going live?", a: "Stripe provides a full test mode for Connect, including test account creation, test charges, test payouts, and even test disputes. Use the Stripe CLI to forward webhooks to your local dev environment. Run your full payout cycle in test mode end-to-end before going live; the gotcha is usually the timing — test mode payouts settle in seconds, production payouts take 2 to 7 business days." },
    { q: "What is the worst architecture mistake in a Connect marketplace?", a: "Treating Stripe as the source of truth for marketplace state. Stripe is the source of truth for funds; the marketplace is the source of truth for orders. When the two get out of sync — because of a webhook miss, a manual refund, or a payout adjustment — the marketplace breaks. Build a reconciliation job that reconciles charges, refunds, and payouts daily and surfaces drift." },
    { q: "How does Stripe Connect handle tax?", a: "Stripe Tax computes and collects sales tax at the platform level. For marketplaces, the responsibility usually falls on the marketplace (you), not the connected account, under most US state marketplace facilitator laws. Stripe Tax integrates with Connect to handle this automatically, but the marketplace still needs to register in every state where it has nexus." },
    { q: "Can QUANT LAB USA build our marketplace?", a: "Yes. We build marketplaces on Next.js plus Stripe Connect with full payout, dispute, and reconciliation flows. Engagements run 12 to 28 weeks. We have shipped marketplace platforms for service providers, two-sided rental marketplaces, and licensing platforms. See the case studies linked below." },
];

export default function StripeConnectMarketplacePage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({ headline: "Stripe Connect for Marketplaces: Architecture That Actually Scales", description: "Stripe Connect marketplace architecture patterns: account model, payouts, refunds, KYC, webhook reliability.", datePublished: PUBLISHED, slug: SLUG, image: "https://quantlabusa.dev/og-stripe.png", author: { name: "Bill Beltz", url: "https://quantlabusa.dev/about" }, section: "Engineering" })) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Blog", url: "/blog" }, { name: "Stripe Connect marketplace", url: `/blog/${SLUG}` }])) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

            <div className="container mx-auto px-6 max-w-4xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/blog" className="hover:text-sky-400 transition-colors">Blog</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">Stripe Connect marketplace architecture</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <CreditCard className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs uppercase tracking-widest text-sky-400 mb-3">MOFU Engineering Guide · 2026</p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                        Stripe Connect for Marketplaces: Architecture Patterns That Actually Scale
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed mb-6 max-w-2xl">
                        The engineering decisions that determine whether a Stripe Connect marketplace survives its first 10,000 transactions. Account model, payout flows, refund handling, KYC, webhook idempotency, reconciliation, and the eight architectural anti-patterns to avoid.
                    </p>
                    <p className="text-sm text-gray-500 mb-8">
                        By <Link href="/about" className="text-sky-400 hover:underline">Bill Beltz</Link>, founder of QUANT LAB USA INC · Published May 12, 2026
                    </p>
                    <ConsultationCTA label="Scope a Marketplace Build" service="Stripe Integration" source="blog-stripe-connect" />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Quick answer</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>A Stripe Connect marketplace should use Express accounts, treat the platform as system of record for orders and Stripe as system of record for funds, dedupe webhooks by event ID, run a daily reconciliation job, and offload all payout, refund, and dispute logic to a queue behind the webhook handler. Build for 2 to 7 day payout settlement, 0.5 to 1% chargeback rate, and a 2.9% to 5% platform take rate on top of Stripe processing.</strong>
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-5">
                        <p>
                            Stripe Connect is a great product. It is also a great way to ship a marketplace that breaks the first time a refund happens at the same instant as a payout, or the first time a webhook is processed twice, or the first time the platform decides to take a flat-rate fee on a discount-priced item.
                        </p>
                        <p>
                            I have built marketplaces on Connect for service platforms, two-sided rental businesses, and licensing systems. The architecture decisions made in the first two weeks determine whether the marketplace scales or burns 20% of engineering time on payment-related bugs for the next two years. This guide is the pattern set.
                        </p>
                        <p>
                            For the foundational Stripe build, see our <Link href="/blog/nextjs-stripe-integration-guide" className="text-sky-400 hover:underline">Next.js Stripe integration guide</Link>. For the deeper service offering, see <Link href="/services/stripe-integration" className="text-sky-400 hover:underline">our Stripe integration service</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Decision 1: Which account model?</h2>
                    <div className="overflow-x-auto mt-4">
                        <table className="w-full text-sm text-left border border-white/10 rounded-xl overflow-hidden">
                            <thead className="bg-[#0d1526] text-white">
                                <tr>
                                    <th className="px-4 py-3 border-b border-white/10">Account type</th>
                                    <th className="px-4 py-3 border-b border-white/10">When to use</th>
                                    <th className="px-4 py-3 border-b border-white/10">Engineering load</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                <tr className="border-b border-white/5"><td className="px-4 py-3"><strong>Standard</strong></td><td className="px-4 py-3">Sellers already have Stripe accounts (e.g., Shopify ecosystem)</td><td className="px-4 py-3">Lowest. Stripe owns onboarding and dashboard entirely.</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3"><strong>Express</strong></td><td className="px-4 py-3">90% of marketplaces. Best balance of branding and Stripe-hosted compliance.</td><td className="px-4 py-3">Medium. Custom branding on top of Stripe-hosted onboarding.</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3"><strong>Custom</strong></td><td className="px-4 py-3">Full UI control needed; willing to take on KYC, fraud, and dashboard.</td><td className="px-4 py-3">Highest. You build the dashboard, you handle the support tickets.</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-gray-400 mt-4">
                        Most founders default to Custom thinking they will need branding control. They almost always regret it. Start with Express. Migrate later if needed.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Decision 2: Payment flow architecture</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Three flows. Pick one and commit; mixing them creates support nightmares.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Direct charges:</strong> Buyer charges the connected account directly. Marketplace takes an application_fee_amount. Best for marketplaces where the seller is the merchant of record (think Etsy).</li>
                            <li><strong>Destination charges:</strong> Buyer charges the platform account. Funds get transferred to the connected account. Marketplace is the merchant of record. Best for service marketplaces where the platform handles support and refunds.</li>
                            <li><strong>Separate charges and transfers:</strong> Charge first, transfer later. Best for marketplaces with delayed delivery, escrow, or complex multi-party splits.</li>
                        </ul>
                        <p>
                            The trap: switching from destination charges to direct charges later means a Stripe Connect migration. Pick once.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Decision 3: Webhook architecture (the one that bites)</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Webhooks are where marketplaces go wrong. The pattern that works at scale:
                        </p>
                        <ol className="list-decimal pl-6 space-y-2">
                            <li>Webhook handler validates the signature, stores the raw event payload to a `stripe_events` table, returns 200. Done. That is the whole handler.</li>
                            <li>A background worker pulls from `stripe_events`, processes one event at a time, and updates application state.</li>
                            <li>Each event is processed at most once. Dedupe by `event.id`. Use a UNIQUE constraint or a Redis lock — application-layer checks alone will race.</li>
                            <li>Failed processing throws back to the queue with exponential backoff. After N retries, alerts page on-call.</li>
                            <li>`stripe_events` rows live for 90 days minimum. Long enough to replay if you find a bug.</li>
                        </ol>
                        <p>
                            The handler returning 200 in under 100ms is non-negotiable. Stripe retries on slow responses, and slow responses are how the same event gets processed three times in production.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Decision 4: Reconciliation job</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            The single most important job in a Connect marketplace is the nightly reconciliation. It compares Stripe&apos;s view of the world (charges, refunds, payouts, application fees) against the marketplace&apos;s view of the world (orders, items, payouts owed). Drift surfaces here before it surfaces in a seller support ticket.
                        </p>
                        <p>
                            The reconciliation job does three things:
                        </p>
                        <ol className="list-decimal pl-6 space-y-2">
                            <li>Pull every charge from Stripe for the last 7 days. Match against orders. Flag mismatches.</li>
                            <li>Pull every payout. Match against expected payouts. Flag amount drift over $0.01.</li>
                            <li>Pull every refund and dispute. Verify the marketplace has recorded a corresponding adjustment.</li>
                        </ol>
                        <p>
                            We have caught webhook drops, double-charge bugs, and incorrect application_fee calculations in this job for every marketplace we have shipped.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Mid-post: build with us</h2>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-8 text-center">
                        <p className="text-gray-300 mb-6">Designing a Connect marketplace? Free 30-minute architecture call. We will sketch the data flow on a whiteboard with you.</p>
                        <ConsultationCTA label="Book the Architecture Call" service="Stripe Integration" source="blog-stripe-connect-mid" />
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Decision 5: Payout cadence</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Stripe defaults to a 2-day rolling payout for US accounts. Marketplace operators usually want longer holds because they want time to detect fraud, process refunds against settled balances, or batch payouts weekly. Connect lets you set a custom payout schedule per connected account.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Daily:</strong> Default. Best seller experience. Highest refund-against-paid-out risk.</li>
                            <li><strong>Weekly:</strong> Common for service marketplaces. Predictable for sellers, gives the platform a 7-day window to handle disputes.</li>
                            <li><strong>Monthly:</strong> Best for marketplaces with high chargeback risk or seasonal seller churn.</li>
                            <li><strong>Manual:</strong> Best for marketplaces with explicit escrow or milestone-based payouts.</li>
                        </ul>
                        <p>
                            Document the payout cadence in the seller agreement. Changing it later is a top-three support load.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">The eight architectural anti-patterns we have seen kill marketplaces</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-3">
                        <ol className="list-decimal pl-6 space-y-3">
                            <li><strong>Synchronous webhook processing.</strong> Long-running handlers cause duplicate events.</li>
                            <li><strong>No reconciliation job.</strong> Drift accumulates silently until support tickets pile up.</li>
                            <li><strong>Storing Stripe IDs as the primary key.</strong> Use UUIDs internally; Stripe ID is a foreign reference.</li>
                            <li><strong>Hard-coded application_fee logic.</strong> Fee rules will change. Move them to a config table.</li>
                            <li><strong>No idempotency keys on charge creation.</strong> Retry storms produce duplicate charges.</li>
                            <li><strong>Mixing destination charges and direct charges in the same product.</strong> Pick one model.</li>
                            <li><strong>Letting sellers self-serve payout schedule changes.</strong> Audit and approval queue.</li>
                            <li><strong>No dispute UI in the seller dashboard.</strong> Sellers cannot respond, marketplace eats the loss.</li>
                        </ol>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Pricing your platform take</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Take rate is the lever that determines whether the marketplace is a business. The 2026 benchmarks:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Service marketplaces (Uber, Fiverr-like): 20 to 35% take</li>
                            <li>Two-sided product marketplaces (Etsy-like): 5 to 15% take</li>
                            <li>B2B SaaS marketplaces (app stores, integration directories): 15 to 30% take</li>
                            <li>Specialty financial marketplaces (lending, securities): 1 to 5% take</li>
                            <li>Subscription-driven marketplaces (membership-based): subscription plus 0 to 10% take</li>
                        </ul>
                        <p>
                            Estimate your unit economics with <Link href="/calculators/stripe-cost" className="text-sky-400 hover:underline">the Stripe cost calculator</Link>. The right take rate is the one that funds platform engineering plus seller acquisition without pricing the marketplace out of the seller&apos;s willingness to pay.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Real-world example: service-marketplace MVP in 14 weeks</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            A representative engagement: a two-sided service marketplace connecting independent contractors to small business buyers. Express accounts, destination charges with application_fee, weekly payouts, dispute UI in the seller dashboard, and Stripe Tax integration. 14 weeks end-to-end on Next.js plus Postgres plus Stripe Connect. Engineering cost: $145K including dispute workflows and reconciliation job.
                        </p>
                        <p>
                            For analogous engagements, see <Link href="/work/j5-sales-os" className="text-sky-400 hover:underline">the J5 Sales OS case study</Link> and <Link href="/work/hobbspeak" className="text-sky-400 hover:underline">the Hobbspeak case study</Link>. For broader marketplace context, see our <Link href="/industries/e-commerce" className="text-sky-400 hover:underline">e-commerce industry page</Link> and <Link href="/industries/saas" className="text-sky-400 hover:underline">SaaS industry page</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Frequently asked questions</h2>
                    <div className="space-y-6">
                        {faqs.map((item) => (
                            <div key={item.q} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                                <p className="text-gray-300 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Related reading and next steps</h2>
                    <ul className="space-y-3">
                        {[
                            { href: "/services/stripe-integration", label: "Stripe Integration service" },
                            { href: "/services/payments-invoicing-licensing", label: "Payments, Invoicing & Licensing" },
                            { href: "/services/subscription-billing", label: "Subscription Billing service" },
                            { href: "/services/saas-platform-development", label: "SaaS Platform Development" },
                            { href: "/blog/nextjs-stripe-integration-guide", label: "Next.js Stripe integration guide" },
                            { href: "/blog/custom-crm-development-guide", label: "Custom CRM development guide (pillar)" },
                            { href: "/work/hobbspeak", label: "Case study — Hobbspeak" },
                            { href: "/work/j5-sales-os", label: "Case study — J5 Sales OS" },
                            { href: "/calculators/stripe-cost", label: "Stripe cost calculator" },
                            { href: "/resources/stripe-integration-checklist", label: "Stripe integration checklist" },
                            { href: "/software-development-atlanta-ga", label: "Atlanta software development" },
                            { href: "/software-development-austin-tx", label: "Austin software development" },
                            { href: "/industries/e-commerce", label: "E-commerce industry" },
                            { href: "/contact", label: "Talk to Bill about your marketplace" },
                        ].map((l) => (
                            <li key={l.href} className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-sky-400 flex-shrink-0" />
                                <Link href={l.href} className="text-sky-400 hover:underline">{l.label}</Link>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Build the marketplace right the first time.</h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Free architecture call. Whiteboard the account model, the funds flow, and the failure modes before you write a line of code.
                        </p>
                        <ConsultationCTA label="Book the Architecture Call" service="Stripe Integration" source="blog-stripe-connect-cta" />
                        <div className="mt-6 text-sm text-gray-400">
                            Or call Bill directly at <a href="tel:+17706521282" className="text-sky-400 hover:underline">(770) 652-1282</a>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mt-16 mb-12">
                    <RelatedPosts
                        currentSlug="stripe-connect-marketplace-architecture"
                        topics={["stripe","stack"]}
                        heading="More Stripe engineering reading"
                    />
                </AnimatedSection>

                <AnimatedSection className="mt-12">
                    <div className="flex items-center justify-between text-sm text-gray-400">
                        <Link href="/blog" className="hover:text-sky-400 inline-flex items-center gap-1">
                            <ArrowRight className="w-3 h-3 rotate-180" /> All blog posts
                        </Link>
                        <span>Updated May 12, 2026</span>
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
