import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata: Metadata = pageMetadata({
    title: "What is Product-Led Growth (PLG)? Examples | QUANT LAB USA",
    description:
        "PLG uses the product itself as the primary acquisition channel. Plain-English definition, key 2026 examples, and the architecture it requires. By QUANT LAB USA.",
    slug: "/glossary/what-is-product-led-growth",
});

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Product-Led Growth (PLG)",
    description:
        "Product-led growth is a go-to-market strategy in which the product itself is the primary engine of customer acquisition, activation, and expansion — users sign up and reach value before talking to a salesperson.",
    url: "https://quantlabusa.dev/glossary/what-is-product-led-growth",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "What is product-led growth?", item: "https://quantlabusa.dev/glossary/what-is-product-led-growth" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What does PLG stand for?", acceptedAnswer: { "@type": "Answer", text: "PLG stands for product-led growth — a go-to-market strategy where the product itself, not the sales team, is the primary driver of customer acquisition and expansion." } },
        { "@type": "Question", name: "Who coined product-led growth?", acceptedAnswer: { "@type": "Answer", text: "The term was popularized by Blake Bartlett at OpenView Venture Partners around 2016, describing a pattern they had observed in companies like Slack, Atlassian, Dropbox, and Twilio." } },
        { "@type": "Question", name: "Is PLG only for SaaS?", acceptedAnswer: { "@type": "Answer", text: "Mostly yes. PLG requires the product to be reachable, self-serve, and instantly valuable — that combination is dramatically easier in cloud SaaS than in on-premise enterprise software or hardware." } },
        { "@type": "Question", name: "Does PLG mean no sales team?", acceptedAnswer: { "@type": "Answer", text: "No. Most successful PLG companies still have sales teams — they just focus on existing users who have already adopted the product, rather than cold-outbound prospects. PLG and sales-led are points on a spectrum, not opposites." } },
        { "@type": "Question", name: "What does PLG require technically?", acceptedAnswer: { "@type": "Answer", text: "Self-serve signup, instant value, low-friction onboarding, in-product upgrade paths, usage instrumentation, and self-serve billing. If any one of those is broken, the motion stalls." } },
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
                        <li className="text-gray-300">What is product-led growth?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Software</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is Product-Led Growth?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        Product-led growth (PLG) is a go-to-market strategy in which the product itself acquires, activates, and expands customers — users can sign up, hit a real "aha" moment, and start paying without ever speaking to a salesperson, and the sales team's job is to follow demand rather than create it.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Origin of the term</h2>
                    <p>
                        Blake Bartlett, a partner at OpenView Venture Partners, popularized "product-led growth" around 2016 to describe a pattern he and his colleagues had been watching in the wild: Dropbox, Slack, Atlassian, Twilio, Calendly, Zoom, and Figma had all grown into very large businesses with proportionally tiny outbound sales teams. The product was doing the selling. The phrase put a name to something that had been quietly emerging for a decade, and it has become the dominant framing for early-stage SaaS go-to-market.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What it requires structurally</h2>
                    <p>
                        PLG only works if four things are simultaneously true. The product is reachable — a prospect can find it, sign up, and start using it inside a single sitting, with no demo request, no procurement cycle, no provisioning email. The product delivers real value in the first session — not after a thirty-day setup, not after configuring twelve fields, but inside the first ten or fifteen minutes. The product creates natural expansion pressure — usage grows, more teammates get pulled in, and the upgrade is obvious. And every step of that flow is instrumented well enough that the team can see where users drop off and fix it before the cohort cools.
                    </p>
                    <p>
                        Take away any one of those and the motion breaks. A great free tier with terrible onboarding is just a leaky bucket. A self-serve trial that ends in "request a quote" is sales-led with PLG cosplay. The discipline is in shipping each piece honestly.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">PLG vs sales-led growth</h2>
                    <p>
                        The honest framing is that they are points on a spectrum, not opposites. Even very PLG companies eventually have account executives, because once a team of five users becomes a team of five hundred, the buying decision moves to a procurement department that wants a contract, not a credit card. Conversely, very sales-led companies often add PLG motions on top of their existing pipeline — Salesforce launched an entirely self-serve product line in part to feed its enterprise pipeline with already-warm logos. The right mix depends on average contract value, complexity of the use case, and whether the product can credibly deliver value before a buyer's IT team is involved.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where founders get it wrong</h2>
                    <p>
                        Two common failure modes. The first is treating PLG as a marketing term — slapping "free trial" on a sales-led product without rebuilding the onboarding to actually deliver value during that trial. The second is overestimating the product's ability to sell to the buyer — engineers love a self-serve tool, but the person writing the check is often three layers above them, and that person still wants a security review, a quote, and a conversation. Companies that nail PLG usually do both motions in parallel rather than betting the company on one.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        When we build a <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platform</Link>, we design the signup, onboarding, and self-serve billing as first-class features rather than something to bolt on after launch. That usually means a <Link href="/services/stripe-integration" className="text-sky-400 hover:underline">Stripe</Link> implementation that supports trials, metered upgrades, and team plans on day one; an in-product event stream that feeds an analytics tool so the team can see drop-off in real time; and an admin panel for the founders to look at any account's funnel without writing SQL.
                    </p>
                    <p>
                        Read our guide on <Link href="/blog/building-multi-tenant-saas-postgres-rls" className="text-sky-400 hover:underline">building multi-tenant SaaS with Postgres RLS</Link> for the data-layer pattern that makes self-serve onboarding feasible, or <Link href="/blog/nextjs-stripe-integration-guide" className="text-sky-400 hover:underline">our Next.js + Stripe guide</Link> for the billing flow. If you want a 30-minute review of whether your product is structurally ready for a PLG motion, <Link href="/contact" className="text-sky-400 hover:underline">book a call</Link>.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        topics={["saas","build-vs-buy"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-saas" className="text-sky-400 hover:underline">What is SaaS?</Link></li>
                        <li><Link href="/glossary/what-is-multi-tenant-saas" className="text-sky-400 hover:underline">What is multi-tenant SaaS?</Link></li>
                        <li><Link href="/glossary/what-is-an-mvp" className="text-sky-400 hover:underline">What is an MVP?</Link></li>
                        <li><Link href="/glossary/what-is-feature-flagging" className="text-sky-400 hover:underline">What is feature flagging?</Link></li>
                        <li><Link href="/glossary/what-is-a-crm" className="text-sky-400 hover:underline">What is a CRM?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Designing the self-serve funnel?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We build the signup, billing, and onboarding flows that make PLG actually work — not the cosplay version. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-plg" />
                        <Link href="/services/saas-platform-development" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            SaaS platform development
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
