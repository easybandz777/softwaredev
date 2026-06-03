import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is ARR? Annual Recurring Revenue Explained | QUANT LAB USA",
    description:
        "ARR is your annualized subscription revenue — the headline number investors use to value a SaaS company. Plain-English definition, how to calculate it, and how it differs from MRR — by QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-arr" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "ARR (Annual Recurring Revenue)",
    description:
        "ARR is the annualized value of a subscription business's recurring revenue — the predictable income it expects to collect over a twelve-month period, excluding one-time fees.",
    url: "https://quantlabusa.dev/glossary/what-is-arr",
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
            name: "What is ARR?",
            item: "https://quantlabusa.dev/glossary/what-is-arr",
        },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What does ARR stand for?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "ARR stands for Annual Recurring Revenue. It is the annualized value of the predictable subscription revenue a business expects to collect over twelve months, excluding one-time and non-recurring fees.",
            },
        },
        {
            "@type": "Question",
            name: "How do you calculate ARR?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The fastest way is to multiply MRR by twelve. Alternatively, sum the annualized value of every active subscription, normalizing monthly plans up to a yearly figure and counting annual contracts at their full term value.",
            },
        },
        {
            "@type": "Question",
            name: "Is ARR the same as revenue?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No. ARR is a forward-looking run rate based on currently active subscriptions, while GAAP revenue is the income actually recognized in a period. A company can have one million in ARR but recognize far less revenue this quarter, and it excludes one-time services entirely.",
            },
        },
        {
            "@type": "Question",
            name: "When should I report ARR instead of MRR?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Use ARR when most of your contracts are annual, when you are raising a later-stage round, or when you want a stable headline number that does not swing with a single monthly churn. Early monthly-billed startups usually lead with MRR instead.",
            },
        },
        {
            "@type": "Question",
            name: "What ARR milestones matter to investors?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "One million in ARR is a common signal of early product-market fit. Ten million ARR is often cited as the threshold of a scalable business, and a hundred million ARR is the rough neighborhood where an IPO becomes a realistic conversation.",
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
                        <li className="text-gray-300">What is ARR?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">
                        Glossary · Business
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                        What is ARR?
                    </h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        ARR (Annual Recurring Revenue) is the annualized value of your subscription business — the predictable revenue you expect to collect over a full twelve months from contracts that are active today, excluding one-time fees. It is the headline number investors use to size and value a SaaS company.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What ARR means</h2>
                    <p>
                        ARR is a <strong>run rate</strong>: it takes the recurring revenue you are booking right now and projects it across a year, as if today&apos;s subscriptions simply continued. If every active contract kept renewing and you signed nothing new, ARR is what you would collect over the next twelve months. That forward-looking framing is exactly why it is so useful — and why it is not the same as the revenue your accountant recognizes.
                    </p>
                    <p>
                        Like its monthly sibling, ARR counts only <strong>recurring</strong> income. Implementation fees, training, custom integration work, and other one-time line items are excluded, because they do not repeat and would inflate the run rate with revenue you cannot count on next year. What remains is a clean, durable figure that describes the underlying engine of the business.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where the metric came from</h2>
                    <p>
                        ARR and&nbsp;
                        <Link href="/glossary/what-is-mrr" className="text-sky-400 hover:underline">MRR</Link> grew up together as the&nbsp;
                        <Link href="/glossary/what-is-saas" className="text-sky-400 hover:underline">SaaS</Link> model matured. Once subscriptions became the default way to sell software, the venture-capital world needed a single number to compare companies and set valuations. ARR became that number because it is large enough to feel meaningful, stable enough to survive a single bad month, and standardized enough that a $10M-ARR company in fintech can be compared to a $10M-ARR company in logistics.
                    </p>
                    <p>
                        Over time ARR turned into a kind of shorthand for company stage. &quot;We are a Series A at four million ARR&quot; communicates revenue scale, growth expectations, and team size all at once. That convenience is also a hazard: because ARR is so widely quoted, it gets stretched and gamed, with founders sometimes folding non-recurring revenue into the figure to look bigger than they are.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How to calculate ARR</h2>
                    <p>
                        The shortcut almost everyone uses is <strong>ARR = MRR × 12</strong>. If your Monthly Recurring Revenue is $50,000, your ARR is $600,000. This works because MRR already normalizes every plan to a monthly unit, so multiplying by twelve simply re-expresses it on an annual basis.
                    </p>
                    <p>
                        You can also build ARR directly from contracts: add up the full annual value of every active subscription, counting a $24,000 two-year deal as $12,000 of ARR per year and a $99/month plan as $1,188. Either route should produce the same answer. The discipline that separates a trustworthy ARR from a vanity number is subtraction — you must remove churned accounts the moment they cancel and strip out any setup fees, or the run rate quietly overstates the health of the business.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">When ARR matters</h2>
                    <p>
                        ARR matters most in two rooms: the boardroom and the fundraising pitch. Investors value SaaS companies on a multiple of ARR, so the difference between $4M and $5M of ARR can move a valuation by millions. Hitting recognized milestones — $1M, $10M, $100M — signals a stage of maturity that changes how the company is perceived and what kind of capital it can attract.
                    </p>
                    <p>
                        It also matters operationally for businesses that sell annual contracts, because ARR maps more naturally to a sales cycle measured in quarters than MRR does. The caution is the same one that applies to every run-rate metric: ARR describes the present projected forward, not the future. A company with $5M ARR and 40 percent annual&nbsp;
                        <Link href="/glossary/what-is-customer-churn" className="text-sky-400 hover:underline">churn</Link> is in far worse shape than one with $3M ARR and near-zero churn, even though the first number looks bigger.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        We treat ARR the same way we treat MRR: as a number the software should compute, not a figure someone reverse-engineers in a board deck the night before a meeting. When we build a&nbsp;
                        <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platform</Link>, the billing model is the source of truth, and ARR is derived from it. Annual contracts are stored with their term and renewal date, monthly plans are annualized consistently, and cancellations flow through immediately — so the headline number is always defensible.
                    </p>
                    <p>
                        The pragmatic builder&apos;s warning here is about <strong>contract modeling</strong>. The most common way ARR goes wrong is that the underlying system was never designed to distinguish recurring revenue from one-time fees, so a custom-development invoice or a setup charge ends up inflating the run rate. Getting the data model right at build time — with&nbsp;
                        <Link href="/services/stripe-integration" className="text-sky-400 hover:underline">Stripe</Link> wired in correctly — is far cheaper than untangling a misreported ARR after an investor has already seen it. If you are weighing whether to build that billing core yourself or stitch it together from tools, our&nbsp;
                        <Link href="/blog/build-vs-buy-software-2026" className="text-sky-400 hover:underline">build vs buy framework</Link> lays out the trade-offs.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        topics={["saas", "stripe"]}
                        pinned={["build-vs-buy-software-2026", "custom-crm-development-guide", "custom-crm-vs-salesforce-vs-hubspot-2026"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-mrr" className="text-sky-400 hover:underline">What is MRR?</Link></li>
                        <li><Link href="/glossary/what-is-customer-churn" className="text-sky-400 hover:underline">What is customer churn?</Link></li>
                        <li><Link href="/glossary/what-is-customer-lifetime-value" className="text-sky-400 hover:underline">What is customer lifetime value?</Link></li>
                        <li><Link href="/glossary/what-is-product-market-fit" className="text-sky-400 hover:underline">What is product-market fit?</Link></li>
                        <li><Link href="/glossary/what-is-saas" className="text-sky-400 hover:underline">What is SaaS?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Talk to the engineer who would build it</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        If you want an ARR figure you can defend in a board meeting — derived from a
                        billing model built right — book a 30-minute conversation, not a pitch.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-arr" />
                        <Link href="/services/saas-platform-development" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            SaaS platform development
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
