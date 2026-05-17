import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata: Metadata = pageMetadata({
    title: "What is CQRS? Definition + 2026 Examples | QUANT LAB USA",
    description:
        "CQRS (Command Query Responsibility Segregation) splits reads from writes for scale. Plain-English definition, when it pays back, 2026 examples. By QUANT LAB USA.",
    slug: "/glossary/what-is-cqrs",
});

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "CQRS (Command Query Responsibility Segregation)",
    description:
        "CQRS is an architectural pattern in which the model used to mutate state (commands) is intentionally separated from the model used to query state (queries), often backed by different data stores tuned for each workload.",
    url: "https://quantlabusa.dev/glossary/what-is-cqrs",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "What is CQRS?", item: "https://quantlabusa.dev/glossary/what-is-cqrs" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What does CQRS stand for?", acceptedAnswer: { "@type": "Answer", text: "CQRS stands for Command Query Responsibility Segregation — the principle that the model used to change data should be separated from the model used to read it." } },
        { "@type": "Question", name: "Who introduced CQRS?", acceptedAnswer: { "@type": "Answer", text: "Greg Young popularized CQRS in the late 2000s, building on Bertrand Meyer's older Command-Query Separation principle. The architectural form — separate stores, eventually consistent read models — emerged from the .NET DDD community around 2010." } },
        { "@type": "Question", name: "Is CQRS the same as event sourcing?", acceptedAnswer: { "@type": "Answer", text: "No. CQRS is about splitting write and read models. Event sourcing is about how the write model persists state. They pair well, but each works independently." } },
        { "@type": "Question", name: "When should I use CQRS?", acceptedAnswer: { "@type": "Answer", text: "When read and write loads have very different patterns, when one side needs different scaling than the other, or when the write model is genuinely complex and forcing the same shape on reads makes them slow. For typical CRUD apps, it is usually unjustified complexity." } },
        { "@type": "Question", name: "What are the downsides of CQRS?", acceptedAnswer: { "@type": "Answer", text: "Eventual consistency between write and read sides has to be handled in the UI. The system has more moving parts. Engineers unfamiliar with the pattern make mistakes that are subtle until production. Most teams adopt CQRS only on the slices that actually benefit." } },
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
                        <li className="text-gray-300">What is CQRS?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Software</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is CQRS?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        CQRS — Command Query Responsibility Segregation — is the architectural decision to use different models, and often different databases, for changing state and for reading state, on the premise that the two have such different requirements that forcing them to share is what creates most of the complexity in growing systems.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where it came from</h2>
                    <p>
                        The seed is Bertrand Meyer's Command-Query Separation principle from the 1980s — every method should either change state (a command) or return information (a query), never both. Greg Young extended that single-method idea to the architectural level in the late 2000s, arguing that the same separation makes sense for entire models. The pattern came of age in the .NET domain-driven-design community around 2010 and spread from there, often paired with <Link href="/glossary/what-is-event-sourcing" className="text-sky-400 hover:underline">event sourcing</Link>.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The mismatch CQRS solves</h2>
                    <p>
                        In a typical CRUD application, a single domain model serves both reads and writes. The User entity carries validation rules and lifecycle logic for changing email and password, and the same shape also feeds the dashboard, the admin page, the search results, and the export job. As the application grows, the read side and the write side want different things: the write side wants strict invariants and a small, focused shape; the read side wants denormalized, pre-joined data optimized for whichever screen is asking. Forcing them to share is the source of slow queries, awkward joins, and code that feels like it is fighting itself.
                    </p>
                    <p>
                        CQRS makes the split explicit. The write side has commands (CreateOrder, CancelInvoice, PromoteUser) that go through a domain model with all the validation and business rules. The read side has queries that hit denormalized, often pre-computed projections in a store tuned for that read shape — sometimes the same database, sometimes Postgres for writes and Elasticsearch for reads, sometimes Postgres for writes and a column-store warehouse for reporting reads.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The eventual consistency trap</h2>
                    <p>
                        The hardest thing about CQRS in practice is not the architecture — it is the user experience. When write and read sides are separate stores, there is a delay between an action and the read model reflecting it. A user submits a form, sees a success message, navigates to the list page, and the item they just created is not there yet. Solving that requires either (a) accepting and designing for the lag with optimistic UI, (b) making the write transaction also update the read model synchronously where consistency matters, or (c) routing the user's own reads to the write store for a short window. Pretending the lag does not exist is how teams get to "the bug nobody can reproduce."
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">When the pattern is worth it</h2>
                    <p>
                        CQRS pays off when read and write loads are wildly asymmetric (think a marketplace with millions of reads per write), when the write model is genuinely complex and read shapes are wildly varied (analytics on top of a transactional system), or when the team is already committed to event sourcing and CQRS comes along for the ride. For a typical CRUD product with balanced load, applying CQRS is the kind of architectural decision that pleases architects and burns engineering time on problems that did not need to exist.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        We apply CQRS selectively, not as a blanket choice. <Link href="/services/algorithmic-trading-systems" className="text-sky-400 hover:underline">Trading platforms</Link> we build use it for the order management side — the write model is strict, the read model is a denormalized view tuned for the trader's UI, and the two are kept in sync via an event stream. Most <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS products</Link> we ship do not need it across the whole codebase, but often have one or two slices — reporting, search, analytics — where the pattern earns its keep.
                    </p>
                    <p>
                        The decision is usually made during the discovery phase of a <Link href="/services/custom-business-software" className="text-sky-400 hover:underline">custom build</Link> by looking at the actual access patterns rather than imagined ones. If you want a sober review of whether CQRS would help your system or make it worse, <Link href="/contact" className="text-sky-400 hover:underline">book a 30-minute call</Link>.
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
                        <li><Link href="/glossary/what-is-domain-driven-design" className="text-sky-400 hover:underline">What is domain-driven design?</Link></li>
                        <li><Link href="/glossary/what-is-microservices-architecture" className="text-sky-400 hover:underline">What is microservices architecture?</Link></li>
                        <li><Link href="/glossary/what-is-a-data-warehouse" className="text-sky-400 hover:underline">What is a data warehouse?</Link></li>
                        <li><Link href="/glossary/what-is-rest-vs-graphql" className="text-sky-400 hover:underline">REST vs GraphQL</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">CQRS — yes or no for your system?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        Half an hour with an engineer is enough to map your read and write loads and tell you honestly whether the pattern would help or hurt.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-cqrs" />
                        <Link href="/services/custom-business-software" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Custom business software
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
