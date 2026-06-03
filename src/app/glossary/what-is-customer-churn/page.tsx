import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is Customer Churn? Definition + Formula | QUANT LAB USA",
    description:
        "Customer churn is the rate at which customers cancel or stop paying. Plain-English definition, the churn formula, logo vs revenue churn, and why it quietly caps growth — by QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-customer-churn" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Customer Churn",
    description:
        "Customer churn is the rate at which customers stop doing business with a company over a given period — canceling a subscription, ending a contract, or otherwise no longer paying.",
    url: "https://quantlabusa.dev/glossary/what-is-customer-churn",
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
            name: "What is Customer Churn?",
            item: "https://quantlabusa.dev/glossary/what-is-customer-churn",
        },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is customer churn?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Customer churn is the rate at which customers stop paying you over a given period — by canceling a subscription, ending a contract, or letting an account lapse. It is usually expressed as a percentage per month or per year.",
            },
        },
        {
            "@type": "Question",
            name: "How do you calculate churn rate?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Divide the number of customers lost during a period by the number of customers you had at the start of that period, then multiply by 100. If you started the month with 200 customers and lost 10, your monthly churn rate is 5 percent.",
            },
        },
        {
            "@type": "Question",
            name: "What is the difference between logo churn and revenue churn?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Logo churn counts the number of customers lost regardless of size. Revenue churn measures the dollars lost, which weights larger accounts more heavily. Losing one enterprise client can be tiny logo churn but catastrophic revenue churn.",
            },
        },
        {
            "@type": "Question",
            name: "What is a good churn rate?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "It depends on the segment. Best-in-class B2B SaaS often runs under 1 percent monthly revenue churn, while self-serve consumer products can see 5 percent or more per month. The healthiest companies offset churn with expansion revenue for net negative churn.",
            },
        },
        {
            "@type": "Question",
            name: "Why is reducing churn more valuable than acquiring new customers?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Because churn compounds against you. High churn means you refill a leaking bucket every month before you can grow, and it lowers customer lifetime value, which in turn limits how much you can afford to spend on acquisition.",
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
                        <li className="text-gray-300">What is Customer Churn?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">
                        Glossary · Business
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                        What is Customer Churn?
                    </h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        Customer churn is the rate at which customers stop paying you over a given period — by canceling a subscription, ending a contract, or quietly letting an account lapse. It is the leak in the bucket: the percentage of your customer base or revenue that walks out the back door while you are busy bringing new business in the front.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What churn means</h2>
                    <p>
                        Every subscription business loses some customers. Churn is the metric that puts a number on that loss so you can manage it. It is almost always expressed as a percentage over a time window — 3 percent monthly churn, 25 percent annual churn — which lets you compare periods and segments on equal footing.
                    </p>
                    <p>
                        The reason churn earns so much attention is that it works against you continuously. New revenue is something you have to go earn; churn is something that happens automatically unless you actively prevent it. A business with high churn is running on a treadmill — it must sign a meaningful chunk of new customers each month just to stand still, and only the surplus above that line turns into actual growth.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where the term came from</h2>
                    <p>
                        &quot;Churn&quot; entered business vocabulary through industries with recurring billing long before software did — telecom carriers and cable companies obsessed over it in the 1990s, because winning a mobile subscriber was expensive and losing one to a competitor erased that investment. The word itself evokes the constant turning over of a customer base, like butter being churned.
                    </p>
                    <p>
                        When the&nbsp;
                        <Link href="/glossary/what-is-saas" className="text-sky-400 hover:underline">SaaS</Link> model made nearly every software company a subscription business, churn became central to startup thinking. It sits directly downstream of&nbsp;
                        <Link href="/glossary/what-is-mrr" className="text-sky-400 hover:underline">MRR</Link>: churned MRR is one of the four components that determine whether your recurring revenue grew or shrank in a month. Today no SaaS board meeting is complete without a churn slide.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How to calculate churn</h2>
                    <p>
                        The basic formula is straightforward: <strong>churn rate = customers lost during the period ÷ customers at the start of the period × 100</strong>. Begin the month with 200 customers, lose 10, and your monthly churn is 5 percent. The same logic applies to revenue: revenue churn is dollars lost divided by dollars you started with.
                    </p>
                    <p>
                        The distinction that trips founders up is <strong>logo churn versus revenue churn</strong>. Logo churn counts heads — every lost account weighs the same. Revenue churn counts dollars, so losing one big enterprise client barely moves logo churn but can devastate revenue churn. The best operators also track <strong>net revenue churn</strong>, which subtracts expansion revenue from existing customers. When upgrades outpace cancellations, net churn goes negative — meaning your existing customer base grows in value even if you never sign anyone new, which is one of the strongest signals a SaaS business can show.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">When churn matters</h2>
                    <p>
                        Churn matters from the moment you have customers paying on a recurring basis, but it becomes existential as you scale. At a small base, a few percent of churn is a handful of customers you can win back by hand. At thousands of customers, that same percentage is a structural drag that no sales team can outrun. Churn also caps&nbsp;
                        <Link href="/glossary/what-is-customer-lifetime-value" className="text-sky-400 hover:underline">customer lifetime value</Link>: the faster customers leave, the shorter their average lifespan, and the less you can afford to spend acquiring the next one.
                    </p>
                    <p>
                        High churn is usually a symptom, not a disease. It points to weak&nbsp;
                        <Link href="/glossary/what-is-product-market-fit" className="text-sky-400 hover:underline">product-market fit</Link>, a clumsy onboarding experience, pricing that does not match the value delivered, or a product that solves a one-time problem rather than an ongoing one. That is why fixing churn often means fixing the product, not adding a retention email — and why a low, stable churn rate is one of the most honest indicators that customers genuinely need what you built.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        When we build software, we treat churn as something the product can <strong>see coming</strong>, not just count after the fact. The customers who cancel rarely do so without warning — their usage drops, they stop logging in, they quit hitting the feature that hooked them. A well-instrumented&nbsp;
                        <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platform</Link> captures those signals so a team can intervene while there is still a relationship to save, rather than learning about the cancellation from a&nbsp;
                        <Link href="/services/stripe-integration" className="text-sky-400 hover:underline">Stripe</Link> webhook after the money is gone.
                    </p>
                    <p>
                        The pragmatic builder&apos;s view is that churn instrumentation should be designed in from day one, because retrofitting usage tracking onto a product that was never modeled for it is painful and lossy. We wire churn analytics into the same database that powers the app, so a founder can answer &quot;which accounts are at risk this month&quot; without exporting CSVs into a separate tool. Reducing churn is almost always cheaper than acquiring replacement customers — the leverage is in keeping who you already have.
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
                        <li><Link href="/glossary/what-is-mrr" className="text-sky-400 hover:underline">What is MRR?</Link></li>
                        <li><Link href="/glossary/what-is-arr" className="text-sky-400 hover:underline">What is ARR?</Link></li>
                        <li><Link href="/glossary/what-is-customer-lifetime-value" className="text-sky-400 hover:underline">What is customer lifetime value?</Link></li>
                        <li><Link href="/glossary/what-is-customer-acquisition-cost" className="text-sky-400 hover:underline">What is customer acquisition cost?</Link></li>
                        <li><Link href="/glossary/what-is-product-market-fit" className="text-sky-400 hover:underline">What is product-market fit?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Talk to the engineer who would build it</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        If you want a product that flags at-risk accounts before they cancel — not a
                        dashboard that reports the damage afterward — book a 30-minute conversation.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-customer-churn" />
                        <Link href="/services/saas-platform-development" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            SaaS platform development
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
