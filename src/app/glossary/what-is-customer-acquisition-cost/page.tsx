import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is Customer Acquisition Cost (CAC)? | QUANT LAB USA",
    description:
        "CAC is the fully loaded cost of winning one new customer. Plain-English definition, the CAC formula, the LTV-to-CAC ratio, and payback period — explained for founders by QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-customer-acquisition-cost" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "CAC (Customer Acquisition Cost)",
    description:
        "Customer Acquisition Cost is the total sales and marketing spend required to win one new customer over a given period, including salaries, ad spend, tools, and commissions.",
    url: "https://quantlabusa.dev/glossary/what-is-customer-acquisition-cost",
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
            name: "What is Customer Acquisition Cost?",
            item: "https://quantlabusa.dev/glossary/what-is-customer-acquisition-cost",
        },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What does CAC stand for?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "CAC stands for Customer Acquisition Cost. It is the fully loaded amount a business spends on sales and marketing to win one new customer over a defined period.",
            },
        },
        {
            "@type": "Question",
            name: "How do you calculate CAC?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Add up all sales and marketing costs for a period — ad spend, salaries, commissions, and tools — then divide by the number of new customers acquired in that same period. If you spent 50,000 dollars and gained 100 customers, your CAC is 500 dollars.",
            },
        },
        {
            "@type": "Question",
            name: "What is a good LTV-to-CAC ratio?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A widely cited benchmark is 3 to 1 — a customer should be worth at least three times what it cost to acquire them. A ratio near 1 to 1 means you are losing money on growth, while a ratio far above 3 to 1 may mean you are underinvesting in acquisition.",
            },
        },
        {
            "@type": "Question",
            name: "What is CAC payback period?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "CAC payback period is how many months of revenue from a customer it takes to recoup the cost of acquiring them. Under 12 months is generally considered healthy for B2B SaaS, because cash comes back fast enough to reinvest.",
            },
        },
        {
            "@type": "Question",
            name: "Should I include salaries in CAC?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. A fully loaded CAC includes the salaries of sales and marketing staff, not just ad spend. Excluding payroll produces a flattering but misleading number that hides the true cost of growth.",
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
                        <li className="text-gray-300">What is Customer Acquisition Cost?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">
                        Glossary · Business
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                        What is Customer Acquisition Cost?
                    </h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        Customer Acquisition Cost (CAC) is the fully loaded amount your business spends to win one new customer — every dollar of advertising, salary, commission, and tooling on the sales and marketing side, divided by the number of customers those efforts produced. It is the price tag on growth.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What CAC means</h2>
                    <p>
                        Acquiring customers is never free. Even &quot;organic&quot; growth costs the salary of the person writing the content and the tools that distribute it. CAC captures that reality in a single number: on average, how much did it cost to convince one more person to buy? Knowing this figure turns marketing from a guessing game into an investment decision, because you can compare what a customer costs against what they are worth.
                    </p>
                    <p>
                        The key word is <strong>fully loaded</strong>. A CAC that counts only ad spend is a vanity metric — it ignores the salespeople, the marketers, the software, and the overhead that actually closed the deals. An honest CAC includes all of it, which is why the real number is almost always higher than founders expect the first time they calculate it properly.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where the metric came from</h2>
                    <p>
                        CAC has roots in direct-response marketing, where mail-order and catalog businesses tracked cost-per-acquisition long before the internet existed. The discipline sharpened with digital advertising, which made it possible to attribute a sale to a specific click and campaign, and it became a cornerstone of startup finance once&nbsp;
                        <Link href="/glossary/what-is-saas" className="text-sky-400 hover:underline">SaaS</Link> companies needed to prove their growth was economically sound.
                    </p>
                    <p>
                        CAC rarely travels alone. It is almost always quoted next to&nbsp;
                        <Link href="/glossary/what-is-customer-lifetime-value" className="text-sky-400 hover:underline">customer lifetime value</Link>, because the two together answer the question that decides whether a business model works: do customers generate more money than they cost to acquire? That pairing — the LTV-to-CAC ratio — became the single most scrutinized unit-economics figure in venture investing.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How to calculate CAC</h2>
                    <p>
                        The formula is <strong>CAC = total sales and marketing spend ÷ new customers acquired</strong>, both measured over the same window. Spend $50,000 across a quarter — ads, salaries, commissions, and software — and acquire 100 customers, and your CAC is $500. Use a consistent period and be ruthless about including every cost, or the number lies to you.
                    </p>
                    <p>
                        Two companion measures make CAC actionable. The <strong>LTV-to-CAC ratio</strong> compares lifetime value to acquisition cost; a 3:1 ratio is the common rule of thumb for a healthy business, meaning each customer is worth three times what they cost to win. The <strong>CAC payback period</strong> measures how many months of revenue it takes to recoup the cost — under twelve months is generally considered strong for B2B SaaS, because the cash returns quickly enough to fund the next round of acquisition. A great LTV-to-CAC ratio with a three-year payback can still starve a company of cash, which is why both numbers matter.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">When CAC matters</h2>
                    <p>
                        CAC matters the moment you start spending money to grow on purpose. It tells you whether to pour fuel on a channel or shut it off, how much runway a marketing budget actually buys, and whether your growth is profitable or merely expensive. Investors lean on it heavily, because a company that acquires customers for less than they are worth can scale safely, while one with inverted economics simply loses money faster the more it grows.
                    </p>
                    <p>
                        CAC is also tightly coupled to&nbsp;
                        <Link href="/glossary/what-is-customer-churn" className="text-sky-400 hover:underline">churn</Link>. High churn shortens customer lifespan, which lowers lifetime value, which makes a given CAC look worse — so two businesses with identical acquisition costs can have wildly different economics depending on how long their customers stay. The cheapest way to improve your CAC math is often not to spend less on acquisition but to keep customers longer.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        CAC is only as trustworthy as the data behind it, and the data behind it usually lives in a tangle of an ad platform, a&nbsp;
                        <Link href="/glossary/what-is-a-crm" className="text-sky-400 hover:underline">CRM</Link>, and a billing system that do not talk to each other. When we build a&nbsp;
                        <Link href="/services/custom-crm-development" className="text-sky-400 hover:underline">custom CRM</Link> or a&nbsp;
                        <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platform</Link>, we close that loop — tying the campaign or source that produced a lead all the way through to the revenue that lead eventually generates, so CAC and LTV are computed from the same connected record rather than reconciled by hand.
                    </p>
                    <p>
                        The pragmatic builder&apos;s point is about attribution plumbing. Most founders cannot trust their CAC because they cannot trace which channel produced which paying customer; the lead source gets lost somewhere between the ad click and the&nbsp;
                        <Link href="/services/stripe-integration" className="text-sky-400 hover:underline">Stripe</Link> charge. Designing that thread into the system from the start is far cheaper than retrofitting it, and it is the difference between knowing your true unit economics and guessing at them. If you are deciding whether to build that tracking yourself, our&nbsp;
                        <Link href="/blog/build-vs-buy-software-2026" className="text-sky-400 hover:underline">build vs buy framework</Link> can help you scope it.
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
                        <li><Link href="/glossary/what-is-customer-lifetime-value" className="text-sky-400 hover:underline">What is customer lifetime value?</Link></li>
                        <li><Link href="/glossary/what-is-customer-churn" className="text-sky-400 hover:underline">What is customer churn?</Link></li>
                        <li><Link href="/glossary/what-is-mrr" className="text-sky-400 hover:underline">What is MRR?</Link></li>
                        <li><Link href="/glossary/what-is-product-led-growth" className="text-sky-400 hover:underline">What is product-led growth?</Link></li>
                        <li><Link href="/glossary/what-is-a-crm" className="text-sky-400 hover:underline">What is a CRM?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Talk to the engineer who would build it</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        If you want CAC and LTV computed from one connected system — lead source to
                        revenue — instead of reconciled by hand, book a 30-minute conversation.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-cac" />
                        <Link href="/services/custom-crm-development" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Custom CRM development
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
