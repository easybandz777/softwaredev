import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is Customer Lifetime Value (LTV)? | QUANT LAB USA",
    description:
        "Customer lifetime value is the total profit a customer generates before they churn. Plain-English definition, the LTV formula, the LTV-to-CAC ratio, and why it caps your ad budget — by QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-customer-lifetime-value" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Customer Lifetime Value (LTV)",
    description:
        "Customer lifetime value is the total revenue or gross profit a business expects to earn from a single customer over the entire span of their relationship, before they churn.",
    url: "https://quantlabusa.dev/glossary/what-is-customer-lifetime-value",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        {
            "@type": "ListItem",
            position: 3,
            name: "What is Customer Lifetime Value?",
            item: "https://quantlabusa.dev/glossary/what-is-customer-lifetime-value",
        },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What does LTV stand for?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "LTV stands for Lifetime Value, sometimes written CLV or CLTV. It is the total revenue or gross profit a business expects from one customer across their entire relationship, before they churn.",
            },
        },
        {
            "@type": "Question",
            name: "How do you calculate LTV?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A common formula is average revenue per customer per month, multiplied by gross margin, divided by the monthly churn rate. Dividing by churn works because the inverse of churn is the average customer lifespan in months.",
            },
        },
        {
            "@type": "Question",
            name: "Should LTV use revenue or gross profit?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Gross profit gives the more honest answer. A customer who pays 1,000 dollars but costs 400 dollars to serve is only worth 600 dollars in value, so multiplying by gross margin keeps you from overestimating what a customer is really worth.",
            },
        },
        {
            "@type": "Question",
            name: "What is the LTV-to-CAC ratio?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "It compares lifetime value to customer acquisition cost. A ratio of 3 to 1 is a common benchmark for a healthy business, meaning each customer is worth roughly three times what it cost to acquire them.",
            },
        },
        {
            "@type": "Question",
            name: "How do I increase customer lifetime value?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Reduce churn so customers stay longer, expand revenue through upsells and added seats, and improve gross margin by serving customers more efficiently. Lowering churn usually has the largest effect because lifespan sits in the denominator.",
            },
        },
    ],
};

export default function Page() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <article className="container mx-auto px-6 max-w-3xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/glossary" className="hover:text-sky-400 transition-colors">Glossary</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">What is Customer Lifetime Value?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">
                        Glossary · Business
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                        What is Customer Lifetime Value?
                    </h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        Customer lifetime value (LTV) is the total revenue — or, more honestly, the total gross profit — a single customer generates across the entire span of their relationship with you, from first purchase to the day they churn. It is the answer to a deceptively simple question: how much is one customer actually worth?
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What LTV means</h2>
                    <p>
                        Most businesses instinctively focus on the first sale, but a subscription customer&apos;s real value accrues over months or years of renewals. LTV reframes the relationship as the full stream of money a customer will pay before they leave. A customer who pays $100 a month and stays three years is worth far more than one who pays $300 once, even though the second looks larger on the day of purchase.
                    </p>
                    <p>
                        The honest version of LTV uses <strong>gross profit, not revenue</strong>. A customer who pays you $1,000 but costs $400 to serve is worth $600 of value, not $1,000. Using gross margin keeps you from fooling yourself about how much room you actually have to spend on acquiring and keeping customers.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where the metric came from</h2>
                    <p>
                        The concept comes from direct marketing and database marketing in the late twentieth century, where catalog and retail businesses realized that a customer&apos;s value was not a single transaction but a relationship worth cultivating. It became central to startup economics once&nbsp;
                        <Link href="/glossary/what-is-saas" className="text-sky-400 hover:underline">SaaS</Link> made recurring revenue the norm and a customer&apos;s value literally compounded month after month.
                    </p>
                    <p>
                        LTV is the natural counterweight to&nbsp;
                        <Link href="/glossary/what-is-customer-acquisition-cost" className="text-sky-400 hover:underline">customer acquisition cost</Link>. On its own, knowing a customer is worth $3,000 tells you little; knowing they are worth $3,000 and cost $1,000 to acquire tells you the business works. That comparison — the LTV-to-CAC ratio — is the single most scrutinized figure in unit economics, and LTV supplies its numerator.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How to calculate LTV</h2>
                    <p>
                        A widely used SaaS formula is <strong>LTV = (average revenue per customer per month × gross margin) ÷ monthly churn rate</strong>. The churn rate in the denominator is the clever part: if 5 percent of customers leave each month, the average customer stays about twenty months — because dividing by 0.05 is the same as multiplying by twenty. So a customer paying $100 a month at 80 percent margin with 5 percent monthly churn is worth (100 × 0.80) ÷ 0.05 = $1,600.
                    </p>
                    <p>
                        The formula makes the levers obvious. To raise LTV you can increase revenue per customer through&nbsp;
                        <Link href="/glossary/what-is-mrr" className="text-sky-400 hover:underline">expansion and upsells</Link>, improve gross margin by serving customers more cheaply, or — usually most powerfully — reduce&nbsp;
                        <Link href="/glossary/what-is-customer-churn" className="text-sky-400 hover:underline">churn</Link> so the lifespan in the denominator grows. Because churn sits on the bottom of the fraction, small improvements there have an outsized effect: cutting monthly churn from 5 percent to 2.5 percent doubles LTV without changing price at all.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">When LTV matters</h2>
                    <p>
                        LTV matters most as the ceiling on what you can spend to grow. If a customer is worth $1,600, you can comfortably spend a few hundred dollars to acquire them and still profit; if they are worth $200, your entire acquisition strategy has to be cheap and efficient or the business bleeds. It also guides where to focus retention effort, which customer segments to chase, and how aggressively to price.
                    </p>
                    <p>
                        The caution is that LTV is a projection, and projections built on optimistic assumptions flatter the truth. Using revenue instead of gross profit, assuming churn will stay low when the cohort data says otherwise, or ignoring the time value of money all inflate the figure. A disciplined LTV is conservative, segment-specific, and grounded in actual cohort behavior rather than a hopeful average — because every downstream decision about acquisition spend rests on it.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        A trustworthy LTV needs cohort-level data — when each customer started, what they have paid since, and when they churned — and that data has to come from the system of record, not a spreadsheet someone updates quarterly. When we build a&nbsp;
                        <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platform</Link>, we model subscriptions and revenue events so that lifetime value can be computed per cohort straight from the database, with&nbsp;
                        <Link href="/services/stripe-integration" className="text-sky-400 hover:underline">Stripe</Link> as the billing source of truth.
                    </p>
                    <p>
                        The pragmatic builder&apos;s take is that LTV is a downstream metric: it is only as good as the churn and revenue data feeding it. If the product cannot accurately tell you when customers leave and how much they paid along the way, no LTV formula will save you. We design that instrumentation in from the start, and we connect it back to acquisition source so the LTV-to-CAC ratio comes out of one connected&nbsp;
                        <Link href="/glossary/what-is-a-crm" className="text-sky-400 hover:underline">CRM</Link>-and-billing record rather than three tools that disagree. Knowing your real LTV is what lets you spend confidently on growth instead of guessing.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        topics={["saas", "crm"]}
                        pinned={["build-vs-buy-software-2026", "custom-crm-development-guide", "custom-crm-vs-salesforce-vs-hubspot-2026"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-customer-acquisition-cost" className="text-sky-400 hover:underline">What is customer acquisition cost?</Link></li>
                        <li><Link href="/glossary/what-is-customer-churn" className="text-sky-400 hover:underline">What is customer churn?</Link></li>
                        <li><Link href="/glossary/what-is-mrr" className="text-sky-400 hover:underline">What is MRR?</Link></li>
                        <li><Link href="/glossary/what-is-arr" className="text-sky-400 hover:underline">What is ARR?</Link></li>
                        <li><Link href="/glossary/what-is-product-led-growth" className="text-sky-400 hover:underline">What is product-led growth?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Talk to the engineer who would build it</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        If you want lifetime value computed per cohort from real billing data — not a
                        hopeful average — book a 30-minute conversation, not a pitch.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-ltv" />
                        <Link href="/services/saas-platform-development" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            SaaS platform development
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
