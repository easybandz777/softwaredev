import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is MRR? Monthly Recurring Revenue Explained | QUANT LAB USA",
    description:
        "MRR is the predictable revenue your subscription business books every month. Plain-English definition, how to calculate it, and the four moving parts founders track — by QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-mrr" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "MRR (Monthly Recurring Revenue)",
    description:
        "MRR is the total predictable revenue a subscription business expects to collect every month, normalized so that annual and multi-month plans are expressed as a single monthly figure.",
    url: "https://quantlabusa.dev/glossary/what-is-mrr",
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
            name: "What is MRR?",
            item: "https://quantlabusa.dev/glossary/what-is-mrr",
        },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What does MRR stand for?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "MRR stands for Monthly Recurring Revenue. It is the predictable subscription revenue a business expects every month, with annual and multi-month plans normalized to a single monthly number.",
            },
        },
        {
            "@type": "Question",
            name: "How do you calculate MRR?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Multiply the number of paying customers on each plan by that plan's monthly price, then add the plans together. For annual contracts, divide the contract value by twelve so it lands in the same monthly unit as everything else.",
            },
        },
        {
            "@type": "Question",
            name: "Does one-time revenue count toward MRR?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No. Setup fees, one-off services, and usage overages that do not repeat on a predictable schedule are excluded. MRR is specifically the recurring, contracted portion of revenue, which is why investors trust it as a forward-looking number.",
            },
        },
        {
            "@type": "Question",
            name: "What is the difference between MRR and ARR?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "ARR is just MRR multiplied by twelve. Early-stage and monthly-billed businesses tend to track MRR because it changes faster, while companies on annual contracts usually report ARR.",
            },
        },
        {
            "@type": "Question",
            name: "What is a healthy MRR growth rate?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "It depends on stage. A pre-seed SaaS adding its first customers might double MRR month over month off a tiny base, while a company past one million in MRR celebrates a steady five to ten percent monthly compound.",
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
                        <li className="text-gray-300">What is MRR?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">
                        Glossary · Business
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                        What is MRR?
                    </h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        MRR (Monthly Recurring Revenue) is the total predictable revenue your subscription business expects to collect every month — normalized so that an annual plan, a quarterly plan, and a month-to-month plan all show up as a single comparable monthly number you can forecast against.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What MRR means</h2>
                    <p>
                        MRR is the heartbeat of any subscription business. Unlike one-time sales, where revenue arrives in a lump and then you start over from zero next month, recurring revenue carries forward. A customer who pays you in January is, absent churn, still paying you in February — so MRR is less a measure of what you sold and more a measure of what you can reasonably expect to keep collecting.
                    </p>
                    <p>
                        The word that matters is <strong>recurring</strong>. MRR deliberately excludes anything that does not repeat on a predictable schedule: onboarding fees, professional-services work, one-off overages, and refunds. Stripping those out gives you a clean baseline that answers a single question — if we signed no new deals and lost no existing ones, how much would we bank next month?
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where the metric came from</h2>
                    <p>
                        MRR rose to prominence alongside the&nbsp;
                        <Link href="/glossary/what-is-saas" className="text-sky-400 hover:underline">SaaS</Link> business model in the 2000s. When software shifted from a boxed product you bought once to a service you rented monthly, the old way of reporting revenue — booking the whole sale up front — stopped describing reality. Investors and operators needed a number that captured the durable, repeatable nature of subscription income, and MRR became the shared vocabulary.
                    </p>
                    <p>
                        It is now the default unit of measurement in the early-stage startup world. When a founder says &quot;we just crossed ten K,&quot; they almost always mean ten thousand dollars of MRR, not ten thousand in lifetime sales. The metric is portable enough that two companies in completely different industries can compare growth rates simply by comparing how fast their MRR compounds.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How to calculate MRR</h2>
                    <p>
                        The base calculation is simple: take every active subscription, express its price as a monthly figure, and add them up. Forty customers on a $100/month plan plus ten customers on a $500/month plan equals $9,000 MRR. An annual contract worth $12,000 contributes $1,000 to MRR, because you divide the contract value by twelve to land in the same monthly unit as everyone else.
                    </p>
                    <p>
                        Where it gets useful is breaking MRR into its four moving parts. <strong>New MRR</strong> is revenue from brand-new customers. <strong>Expansion MRR</strong> is extra revenue from existing customers upgrading or adding seats. <strong>Contraction MRR</strong> is revenue lost to downgrades. And <strong>churned MRR</strong> is revenue lost to cancellations. Net new MRR for the month is new plus expansion minus contraction minus churn — and when that number stays positive even in a bad month, you have a durable business.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">When MRR matters</h2>
                    <p>
                        MRR matters the moment money starts recurring. It is the number a board asks about first, the input that drives every cash-flow forecast, and the denominator behind retention metrics like net revenue retention. It also shapes day-to-day decisions: whether you can afford a new hire, how much runway a fundraise actually buys, and whether a pricing change helped or quietly bled expansion revenue.
                    </p>
                    <p>
                        The trap founders fall into is celebrating gross MRR growth while ignoring the churn component underneath. Adding $5,000 in new MRR feels great until you notice you also lost $4,000 to cancellations, leaving only $1,000 of real progress. Tracking the four components separately — instead of one headline number — is what separates an operator who understands their business from one who is flying blind.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        When we build a&nbsp;
                        <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platform</Link>, MRR is not a spreadsheet someone updates by hand at month-end — it is a number the system computes from the source of truth. Because we wire&nbsp;
                        <Link href="/services/stripe-integration" className="text-sky-400 hover:underline">Stripe</Link> directly into the application database, every subscription event (a new signup, an upgrade, a cancellation) updates MRR in real time and is attributed to the correct component automatically.
                    </p>
                    <p>
                        That matters because hand-rolled MRR dashboards drift. We have seen founders quote their investors an MRR figure that was off by 20 percent because annual plans were double-counted or refunds were never subtracted. The pragmatic builder&apos;s answer is to make the metric a byproduct of correctly modeled billing data, so the number you see on your dashboard is the same number your accountant would arrive at. If you are unsure whether to build that in-house or assemble it from off-the-shelf tools, our&nbsp;
                        <Link href="/blog/build-vs-buy-software-2026" className="text-sky-400 hover:underline">build vs buy framework</Link> walks through the math.
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
                        <li><Link href="/glossary/what-is-arr" className="text-sky-400 hover:underline">What is ARR?</Link></li>
                        <li><Link href="/glossary/what-is-customer-churn" className="text-sky-400 hover:underline">What is customer churn?</Link></li>
                        <li><Link href="/glossary/what-is-customer-lifetime-value" className="text-sky-400 hover:underline">What is customer lifetime value?</Link></li>
                        <li><Link href="/glossary/what-is-saas" className="text-sky-400 hover:underline">What is SaaS?</Link></li>
                        <li><Link href="/glossary/what-is-product-led-growth" className="text-sky-400 hover:underline">What is product-led growth?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Talk to the engineer who would build it</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        If you want subscription metrics that compute themselves from real billing
                        data instead of a fragile spreadsheet, book a 30-minute conversation — not a pitch.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-mrr" />
                        <Link href="/services/saas-platform-development" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            SaaS platform development
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
