import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AuthorByline } from "@/components/AuthorByline";
import { EditorialFooter } from "@/components/EditorialFooter";
import { Sources } from "@/components/Sources";
import { articleMetadata } from "@/lib/seoMeta";
import { articleSchema, faqSchema } from "@/lib/schemas";
import { getAuthor, authorUrl } from "@/lib/authors";
import { ArrowRight, Check, Tags } from "lucide-react";

const SLUG = "saas-pricing-models-explained-2026";
const TITLE = "SaaS Pricing Models Explained (2026): Flat, Tiered, Usage, Seat & Hybrid";
const DESCRIPTION =
    "The five SaaS pricing models — flat-rate, tiered, usage-based, per-seat, and hybrid — explained for 2026: when each fits, the billing engineering each demands, and how to implement them in Stripe.";
const PUBLISHED_ISO = "2026-06-03";

const author = getAuthor("bill-beltz");

export const metadata: Metadata = articleMetadata({
    title: TITLE,
    description: DESCRIPTION,
    slug: `/blog/${SLUG}`,
    image: "/og-stripe.png",
    imageAlt: "SaaS pricing models explained — flat, tiered, usage, per-seat, and hybrid",
    publishedTime: PUBLISHED_ISO,
    modifiedTime: PUBLISHED_ISO,
    authors: [author.name],
    keywords: [
        "SaaS pricing models",
        "usage-based pricing",
        "per-seat pricing",
        "tiered pricing",
        "hybrid pricing SaaS",
    ],
});

const faqItems = [
    {
        q: "What are the main SaaS pricing models?",
        a: "Five dominate in 2026: flat-rate (one price, all features), tiered (good/better/best packages), per-seat (price scales with users), usage-based or consumption (price scales with metered usage like API calls or storage), and hybrid (a base platform fee plus usage or seats on top). Most successful SaaS companies converge on a hybrid model as they mature because it captures both predictable baseline revenue and upside from heavy users.",
    },
    {
        q: "Is usage-based pricing better than per-seat?",
        a: "Neither is universally better — they align price to different value metrics. Per-seat fits collaboration tools where value scales with the number of people using them, and it is simple to forecast. Usage-based fits infrastructure, APIs, and AI products where value scales with consumption, and it lowers the barrier to entry but makes revenue less predictable. The right choice is whichever metric most closely tracks the value the customer actually receives.",
    },
    {
        q: "What is hybrid SaaS pricing?",
        a: "Hybrid pricing combines a recurring platform fee with a variable component — usually usage or seats. A common shape is a fixed monthly base that includes a usage allowance, then metered overage above it. Hybrid is popular because it gives the vendor a predictable revenue floor while still capturing upside from power users, and it gives customers a clear entry price without an open-ended bill.",
    },
    {
        q: "How does usage-based pricing affect billing engineering?",
        a: "Significantly. Usage-based pricing requires a metering pipeline that records billable events accurately and idempotently, aggregates them per billing period, and produces a correct invoice. In Stripe, the modern approach is Billing Meters, which decouples event ingestion from invoice generation — you report meter events as they happen and Stripe aggregates and bills at the cycle boundary. You also need to handle late-arriving events, usage caps, and clear customer-facing usage dashboards.",
    },
    {
        q: "What pricing model should an early-stage SaaS start with?",
        a: "Start simpler than you think you need. A small number of tiered packages (often three) with a clear value metric is easy to communicate, easy to build, and easy to change. Avoid usage-based billing on day one unless consumption is genuinely your value metric, because the metering infrastructure is real work. You can always layer usage or seats on later as a hybrid once you understand how customers actually derive value.",
    },
    {
        q: "How do I change pricing without breaking existing customers?",
        a: "Grandfather existing customers onto their current plan and introduce new pricing for new signups. In Stripe, create new Price objects rather than editing old ones — prices are designed to be immutable, and existing subscriptions keep referencing the price they were created with. Communicate changes early, offer a migration path, and use proration carefully when customers move plans. The technical key is modeling plans and prices as versioned objects, not mutable settings.",
    },
];

const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "SaaS Pricing Models Explained (2026)", href: `/blog/${SLUG}` },
];

const articleLd = articleSchema({
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: PUBLISHED_ISO,
    image: "https://quantlabusa.dev/og-stripe.png",
    slug: SLUG,
    section: "SaaS Pricing",
    author: { name: author.name, url: authorUrl(author.slug) },
    keywords: ["SaaS pricing", "usage-based", "per-seat", "tiered", "hybrid"],
});
const faqLd = faqSchema(faqItems);

const modelRows = [
    { model: "Flat-rate", fits: "Single-persona tools, simple products", value: "Access", billing: "One recurring price" },
    { model: "Tiered", fits: "Broad market, multiple personas", value: "Feature packages", billing: "A price per tier" },
    { model: "Per-seat", fits: "Collaboration, team tools", value: "Number of users", billing: "Quantity on a subscription" },
    { model: "Usage-based", fits: "APIs, infra, AI, data", value: "Consumption", billing: "Metered with Billing Meters" },
    { model: "Hybrid", fits: "Maturing SaaS, mixed value", value: "Base + variable", billing: "Platform fee + meter/seats" },
];

export default function SaasPricingModelsPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

            <div className="container mx-auto px-6 max-w-4xl">
                <Breadcrumbs items={breadcrumbItems} />

                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Tags className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs uppercase tracking-widest text-sky-400 mb-3">Pricing &amp; Billing Strategy · 2026</p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                        SaaS Pricing Models Explained (2026): Flat, Tiered, Usage, Seat &amp; Hybrid
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed mb-6 max-w-2xl">
                        Your pricing model is a product decision, a go-to-market decision, and a billing-engineering
                        decision all at once. Here are the five models that matter in 2026, where each one fits, and
                        what each demands of the system you build to bill it.
                    </p>
                    <AuthorByline
                        author={author}
                        publishedDate={PUBLISHED_ISO}
                        readMinutes={12}
                        className="mb-8"
                    />
                    <ConsultationCTA label="Pressure-Test Your Pricing" service="Subscription Billing" source="blog-saas-pricing-models" />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Quick answer: which model should you use?</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>
                                Choose the model whose unit most closely tracks the value your customer receives.
                                Per-seat for collaboration tools, usage-based for APIs and infrastructure, tiered for
                                broad multi-persona markets, flat-rate for simple single-persona products. Most SaaS
                                companies end up hybrid — a predictable base fee plus a variable usage or seat component —
                                because it captures baseline revenue and upside at once. Start simpler than you think you
                                need; the billing engineering grows fast as you move from flat to metered.
                            </strong>
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-5">
                        <p>
                            Founders treat pricing as a marketing slide and discover, weeks into a billing build, that
                            it is actually a systems-architecture decision. The model you choose dictates your data
                            model, your invoicing logic, and how much metering infrastructure you sign up for. At{" "}
                            <Link href="/" className="text-sky-400 hover:underline">QUANT LAB USA</Link> we have built billing
                            for all five of these, and this is how we walk founders through the tradeoffs. It pairs
                            with our{" "}
                            <Link href="/blog/subscription-billing-system-architecture" className="text-sky-400 hover:underline">subscription billing system architecture</Link>{" "}
                            deep-dive and the practical{" "}
                            <Link href="/blog/nextjs-stripe-integration-guide" className="text-sky-400 hover:underline">Next.js + Stripe guide</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">The five models at a glance</h2>
                    <div className="overflow-x-auto mt-4">
                        <table className="w-full text-sm text-left border border-white/10 rounded-xl overflow-hidden">
                            <thead className="bg-[#0d1526] text-white">
                                <tr>
                                    <th className="px-4 py-3 border-b border-white/10">Model</th>
                                    <th className="px-4 py-3 border-b border-white/10">Best fit</th>
                                    <th className="px-4 py-3 border-b border-white/10">Value metric</th>
                                    <th className="px-4 py-3 border-b border-white/10">Billing shape</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                {modelRows.map((r) => (
                                    <tr key={r.model} className="border-b border-white/5">
                                        <td className="px-4 py-3 font-medium text-white">{r.model}</td>
                                        <td className="px-4 py-3">{r.fits}</td>
                                        <td className="px-4 py-3">{r.value}</td>
                                        <td className="px-4 py-3">{r.billing}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">1. Flat-rate pricing</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            One product, one price, every feature included. Flat-rate is the easiest model to
                            communicate and the easiest to build — a single recurring Price object in Stripe and
                            you are done. It fits products with a single buyer persona and a narrow feature set.
                        </p>
                        <p>
                            The downside is that it leaves money on the table at both ends: heavy enterprise users
                            pay the same as light users, and price-sensitive small customers may balk at a price
                            calibrated for the median. Most flat-rate products eventually graduate to tiered as their
                            audience widens.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">2. Tiered (good / better / best)</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Tiered pricing packages features into a small number of plans — three is the canonical
                            count because it anchors a middle option most buyers gravitate toward. It serves multiple
                            personas with one price sheet and is the default for the broad mid-market.
                        </p>
                        <p>
                            Billing-wise, each tier is a distinct Price (or set of Prices). The engineering subtlety
                            is <em>entitlements</em>: your application must know which features each tier unlocks, and
                            that mapping should live in a configuration table synced from your subscription state — not
                            hard-coded in feature checks. Get this right and launching a new tier is a data change, not
                            a deploy. We cover the entitlement pattern in the{" "}
                            <Link href="/blog/subscription-billing-system-architecture" className="text-sky-400 hover:underline">billing architecture guide</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">3. Per-seat pricing</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Price scales with the number of users (seats). It fits collaboration software where value
                            grows with team size, and it is straightforward to forecast: revenue equals seats times
                            price. In Stripe, a seat is the <code className="text-cyan-300">quantity</code> on a
                            subscription item, and adding or removing seats mid-cycle triggers proration.
                        </p>
                        <p>
                            The edge cases are where per-seat gets interesting. Do you bill immediately when a seat is
                            added (prorated) or at the next renewal? What happens when a seat is removed — credit, or
                            no refund until renewal? How do you handle a customer who wants to commit to a seat block
                            at a discount? Each of these is a proration-policy decision you should make explicitly and
                            document, because seat-count surprises are a top driver of billing support tickets.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">4. Usage-based (consumption) pricing</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Price scales with metered consumption — API calls, gigabytes stored, messages sent, AI
                            tokens processed. Usage-based pricing has surged with infrastructure and AI products
                            because it aligns price directly to value delivered and lowers the entry barrier (you pay
                            for what you use). The cost is unpredictable revenue for you and unpredictable bills for
                            customers, both of which need active management.
                        </p>
                        <p>
                            This is the model with the heaviest billing-engineering footprint. You need a metering
                            pipeline that records every billable event accurately and idempotently, aggregates per
                            billing period, and reconciles against the invoice. The modern Stripe approach is{" "}
                            <strong className="text-white">Billing Meters</strong>, which decouples event ingestion
                            from invoice generation: you report meter events as usage happens, and Stripe aggregates
                            and invoices at the cycle boundary. Plan explicitly for late-arriving events, idempotent
                            event keys, usage caps to protect customers from runaway bills, and a usage dashboard so
                            customers can see their consumption before the invoice lands.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">5. Hybrid pricing (where most SaaS lands)</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Hybrid combines a recurring platform fee with a variable component — usage or seats on top.
                            A typical shape: a fixed monthly base that includes an allowance, then metered overage
                            above it. Hybrid gives you a predictable revenue floor while still capturing upside from
                            heavy users, and it gives customers a clear entry price without an open-ended bill. It is
                            where most maturing SaaS companies converge.
                        </p>
                        <p>
                            Hybrid is also the most demanding to build because it stacks the complexity of multiple
                            models: a base subscription Price, a metered Price tied to a Billing Meter, included-usage
                            allowances, and proration on the fixed component. This is exactly the kind of multi-part
                            billing we design end to end on a{" "}
                            <Link href="/services/subscription-billing" className="text-sky-400 hover:underline">subscription billing engagement</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Choosing and evolving your model</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            The decision rule is simple to state and hard to apply: pick the unit that most closely
                            tracks the value the customer receives. If value scales with people, charge per seat. If
                            it scales with consumption, charge for usage. If different segments value different things,
                            tier or go hybrid. Then validate it against three constraints — can you communicate it on
                            a pricing page, can customers forecast their bill, and can you actually build the billing
                            for it on a sane timeline?
                        </p>
                        <p>
                            Pricing is not set once. When you change it, version your plans: create new Stripe Price
                            objects rather than editing existing ones (prices are immutable by design), grandfather
                            current customers, and introduce new pricing for new signups. Whether to rebuild billing
                            in-house at all is a classic{" "}
                            <Link href="/blog/build-vs-buy-software-2026" className="text-sky-400 hover:underline">build vs buy decision</Link>{" "}
                            — and for many teams, the right answer for the surrounding{" "}
                            <Link href="/glossary/what-is-saas" className="text-sky-400 hover:underline">SaaS</Link>{" "}
                            platform is a mix of both.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">FAQ</h2>
                    <div className="space-y-6">
                        {faqItems.map((item) => (
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
                            { href: "/services/subscription-billing", label: "Subscription Billing service" },
                            { href: "/services/saas-platform-development", label: "SaaS Platform Development" },
                            { href: "/services/stripe-integration", label: "Stripe Integration service" },
                            { href: "/blog/subscription-billing-system-architecture", label: "Subscription billing system architecture" },
                            { href: "/blog/build-vs-buy-software-2026", label: "Build vs buy software (2026)" },
                            { href: "/glossary/what-is-saas", label: "What is SaaS?" },
                            { href: "/calculators/stripe-cost", label: "Stripe cost calculator" },
                            { href: "/contact", label: "Talk to an engineer" },
                        ].map((l) => (
                            <li key={l.href} className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-sky-400 flex-shrink-0" />
                                <Link href={l.href} className="text-sky-400 hover:underline">{l.label}</Link>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <Sources
                        items={[
                            { label: "Usage-based billing and meters", href: "https://docs.stripe.com/billing/subscriptions/usage-based", publisher: "Stripe Docs" },
                            { label: "Products and prices model", href: "https://docs.stripe.com/products-prices/overview", publisher: "Stripe Docs" },
                            { label: "Per-seat (quantity) subscriptions", href: "https://docs.stripe.com/billing/subscriptions/per-seat", publisher: "Stripe Docs" },
                            { label: "Pricing model strategy for SaaS", href: "https://stripe.com/resources/more/saas-pricing-models", publisher: "Stripe" },
                        ]}
                    />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get your pricing model built right.</h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Book a 30-minute call and we will map your value metric to a model, then scope the billing
                            system to bill it cleanly — tiers, seats, meters, or hybrid. One engineer, end to end.
                        </p>
                        <ConsultationCTA label="Book a Pricing Strategy Call" service="Subscription Billing" source="blog-saas-pricing-cta" />
                        <div className="mt-6 text-sm text-gray-400">
                            Or call Bill at <a href="tel:+17706521282" className="text-sky-400 hover:underline">(770) 652-1282</a>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mt-12">
                    <EditorialFooter reviewedDate={PUBLISHED_ISO} />
                </AnimatedSection>

                <AnimatedSection className="mt-16 mb-12">
                    <RelatedPosts
                        currentSlug={SLUG}
                        topics={["saas", "stripe"]}
                        pinned={[
                            "building-multi-tenant-saas-postgres-rls",
                            "nextjs-stripe-integration-guide",
                            "build-vs-buy-software-2026",
                        ]}
                        heading="More SaaS engineering reading"
                    />
                </AnimatedSection>

                <AnimatedSection className="mt-12">
                    <div className="flex items-center justify-between text-sm text-gray-400">
                        <Link href="/blog" className="hover:text-sky-400 inline-flex items-center gap-1">
                            <ArrowRight className="w-3 h-3 rotate-180" /> All blog posts
                        </Link>
                        <span>Published June 3, 2026</span>
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
