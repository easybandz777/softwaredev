import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata: Metadata = pageMetadata({
    title: "What is Domain-Driven Design (DDD)? | QUANT LAB USA",
    description:
        "DDD aligns software design with the business domain. Plain-English definition, bounded contexts, when DDD is worth the upfront cost. By QUANT LAB USA.",
    slug: "/glossary/what-is-domain-driven-design",
});

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Domain-Driven Design (DDD)",
    description:
        "Domain-driven design is a software design approach that organizes code and architecture around the business domain it represents, using a shared language between engineers and domain experts and modeling boundaries around cohesive subdomains.",
    url: "https://quantlabusa.dev/glossary/what-is-domain-driven-design",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "What is domain-driven design?", item: "https://quantlabusa.dev/glossary/what-is-domain-driven-design" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "Who created domain-driven design?", acceptedAnswer: { "@type": "Answer", text: "Eric Evans introduced the term in his 2003 book Domain-Driven Design: Tackling Complexity in the Heart of Software, distilling techniques he had been using on complex insurance and shipping systems for years." } },
        { "@type": "Question", name: "What is a bounded context?", acceptedAnswer: { "@type": "Answer", text: "A bounded context is an explicit boundary within which a particular domain model applies. The same word (Customer, Order, Account) can mean different things in different bounded contexts, and DDD makes those differences explicit instead of pretending one model serves all." } },
        { "@type": "Question", name: "What is ubiquitous language?", acceptedAnswer: { "@type": "Answer", text: "Ubiquitous language is the shared vocabulary used by engineers, product, and domain experts inside a bounded context. The code, tests, conversations, and documentation all use the same words for the same things — and when the words drift, that drift is treated as a bug." } },
        { "@type": "Question", name: "Is DDD only for big enterprise systems?", acceptedAnswer: { "@type": "Answer", text: "No, but it pays off the most when the business domain has real complexity — insurance, healthcare, trading, supply chain — and less when the domain is a thin CRUD layer over an obvious model." } },
        { "@type": "Question", name: "Does DDD require microservices?", acceptedAnswer: { "@type": "Answer", text: "No. DDD predates microservices by a decade. Bounded contexts can be modules inside a single deployable. Many of the worst microservices nightmares come from teams that adopted microservices without first doing the DDD work to find the right boundaries." } },
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
                        <li className="text-gray-300">What is domain-driven design?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Software</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is Domain-Driven Design?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        Domain-driven design (DDD) is a software design approach in which the code is organized around the language and structure of the business it serves — engineers and domain experts share one vocabulary, models are bounded to the contexts in which they make sense, and the most important rule is "do not let the architecture invent words the business does not use."
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Origin</h2>
                    <p>
                        Eric Evans published Domain-Driven Design: Tackling Complexity in the Heart of Software in 2003, distilling lessons from years of building complex enterprise systems in insurance and logistics. The "blue book," as engineers came to call it, did not invent the underlying techniques — object-oriented modeling, separation of concerns — but it named the patterns that made software resilient against the very real complexity of real businesses. A second wave of DDD writing in the 2010s (Vaughn Vernon, Greg Young, Alberto Brandolini) extended the ideas with practical workshops like Event Storming.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ubiquitous language</h2>
                    <p>
                        The single most under-rated DDD idea is ubiquitous language. Engineers and domain experts agree on one vocabulary for the parts of the business that matter — and that vocabulary lives in the code, in the tests, in the diagrams, in the standup conversation, identically. When an underwriter says "endorsement," the class is called Endorsement, not PolicyAmendment. When a trader says "fill," the table is called fills, not order_executions. The discipline sounds trivial until you have worked on a system where it failed; the cost of disagreement compounds for years.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Bounded contexts</h2>
                    <p>
                        The second big idea is that "the same word means different things in different parts of the business, and that is fine — but you have to draw the line on a map." A Customer in the billing context has a payment method and a credit history. A Customer in the support context has a tier and an SLA. A Customer in the marketing context has a segment and a campaign membership. Treating them as one mega-Customer object is how teams end up with a 4,000-line class that nobody understands. Bounded contexts make the seams explicit: each subdomain owns its own Customer model, and translations happen at the edges.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Strategic vs tactical DDD</h2>
                    <p>
                        DDD has two halves that often get conflated. Strategic DDD is the map-making work: identifying subdomains, drawing bounded contexts, deciding which contexts are core (the company's competitive advantage), which are supporting, and which can be bought off the shelf. Tactical DDD is the in-code patterns: entities, value objects, aggregates, repositories, domain events, application services. A team can do excellent strategic DDD and write the tactical code in plain Rails or Express — and they will still get most of the value. A team that obsesses over tactical patterns without first doing the strategic work usually builds something elegant in the small and incoherent in the large.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        Our <Link href="/services/custom-business-software" className="text-sky-400 hover:underline">custom software</Link> projects start with a discovery phase that is essentially compressed DDD — we sit with the people doing the work, write down the words they use, sketch the actual flow of an order, a claim, a deal, and only then put a domain model on the whiteboard. The result is that the code that ships uses the same words the business uses, which makes onboarding new engineers a matter of weeks rather than months.
                    </p>
                    <p>
                        DDD pairs especially well with <Link href="/glossary/what-is-event-sourcing" className="text-sky-400 hover:underline">event sourcing</Link> and <Link href="/glossary/what-is-cqrs" className="text-sky-400 hover:underline">CQRS</Link> in domains where the audit trail matters — <Link href="/industries/insurance" className="text-sky-400 hover:underline">insurance</Link>, <Link href="/industries/fintech" className="text-sky-400 hover:underline">fintech</Link>, healthcare. For simpler domains we keep the strategic ideas and the language discipline and skip the heavier tactical patterns. <Link href="/contact" className="text-sky-400 hover:underline">Book a call</Link> if you have a complex business domain and want a clean model to start from.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        topics={["stack"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-event-sourcing" className="text-sky-400 hover:underline">What is event sourcing?</Link></li>
                        <li><Link href="/glossary/what-is-cqrs" className="text-sky-400 hover:underline">What is CQRS?</Link></li>
                        <li><Link href="/glossary/what-is-microservices-architecture" className="text-sky-400 hover:underline">What is microservices architecture?</Link></li>
                        <li><Link href="/glossary/what-is-a-monorepo" className="text-sky-400 hover:underline">What is a monorepo?</Link></li>
                        <li><Link href="/glossary/what-is-an-mvp" className="text-sky-400 hover:underline">What is an MVP?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">A complex domain that deserves a clean model?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We run discovery the DDD way — words first, code second. Thirty minutes to see if we are a fit.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-ddd" />
                        <Link href="/services/custom-business-software" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Custom business software
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
