import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata: Metadata = pageMetadata({
    title: "What is Event Sourcing? Definition, Tradeoffs & Examples | QUANT LAB",
    description:
        "Event sourcing stores every change as an immutable event rather than overwriting state. What it solves, where it breaks, and when QUANT LAB recommends it.",
    slug: "/glossary/what-is-event-sourcing",
});

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Event Sourcing",
    description:
        "Event sourcing is a persistence pattern in which the system of record is an append-only log of immutable domain events, and current state is derived by replaying those events rather than updating rows in place.",
    url: "https://quantlabusa.dev/glossary/what-is-event-sourcing",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "What is event sourcing?", item: "https://quantlabusa.dev/glossary/what-is-event-sourcing" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "Who originated event sourcing?", acceptedAnswer: { "@type": "Answer", text: "Martin Fowler's 2005 essay codified the pattern, though the underlying idea — append-only ledgers — predates software by centuries. Greg Young's talks in the late 2000s popularized it in the .NET and DDD community." } },
        { "@type": "Question", name: "Is event sourcing the same as CQRS?", acceptedAnswer: { "@type": "Answer", text: "No, but they pair well. CQRS separates the model used to write data from the model used to read it. Event sourcing is one way to implement the write side; you can do CQRS without event sourcing and event sourcing without CQRS, but the combination is common." } },
        { "@type": "Question", name: "What does event sourcing actually give you?", acceptedAnswer: { "@type": "Answer", text: "A complete, immutable audit trail; the ability to rebuild any past state by replaying events; natural fit for systems that need temporal queries (\"what was the balance on March 14?\"); and a clean integration mechanism — other services subscribe to the event stream." } },
        { "@type": "Question", name: "What are the downsides?", acceptedAnswer: { "@type": "Answer", text: "Schema evolution is harder because old events have to keep being replayable. Queries against current state require derived projections. The cognitive load on the team is higher than a CRUD application — and most teams underestimate this." } },
        { "@type": "Question", name: "When should I use event sourcing?", acceptedAnswer: { "@type": "Answer", text: "When the audit trail is a core requirement (finance, healthcare, compliance), when temporal queries matter, or when the domain genuinely is a stream of events (trading, IoT, real-time collaboration). For a normal CRUD app, it is usually overkill." } },
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
                        <li className="text-gray-300">What is event sourcing?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Software</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is Event Sourcing?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        Event sourcing is a persistence pattern in which the system of record is not a table of current rows but an append-only log of immutable events — every change is captured as a fact about what happened, and current state is derived by replaying that log.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where the idea comes from</h2>
                    <p>
                        The pattern has older roots than software. Double-entry accounting, invented in the 13th century, is an event-sourced system — you never erase a transaction, you write a correcting one. Martin Fowler's 2005 essay codified event sourcing for software engineers, and Greg Young's talks in the late 2000s pushed it into the mainstream of the domain-driven design community. Today it shows up in financial ledgers, trading systems, collaborative editors like Figma, version-control systems, and any product whose audit trail is a regulatory requirement.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How it differs from CRUD</h2>
                    <p>
                        A standard CRUD application has a row in a table that gets updated in place. A user changes their email and the email column is overwritten. The old email is gone unless you remembered to add an audit table. Event sourcing inverts that. The system stores an UserEmailChanged event with the old value, the new value, who did it, and when. The user's current email is whatever the most recent UserEmailChanged event says it is, computed by walking the log. The row in the application database is a projection of the log, not the source of truth.
                    </p>
                    <p>
                        That shift has real consequences. Bugs become recoverable — you replay the log up to the point before the bad code shipped and rebuild a clean state. Audits become trivial — you can produce a record of every change to any aggregate, ever. Integration becomes easier — other services subscribe to the event stream rather than polling the database.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where it pairs with CQRS</h2>
                    <p>
                        Event sourcing and <Link href="/glossary/what-is-cqrs" className="text-sky-400 hover:underline">CQRS</Link> are often discussed together because they fit so naturally. CQRS separates the model used to write data from the model used to read it. Event sourcing gives the write model a perfect implementation — an append-only log — and lets the read side build whatever projections it needs. You can have multiple read models off the same event stream: one for the application UI, one for analytics, one for compliance reports.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The honest downsides</h2>
                    <p>
                        Event sourcing is not free. Schema evolution is the hard problem — once you have a billion events of a given type in the log, changing the event shape is something between annoying and treacherous, because the old events still have to be replayable forever. Queries against current state require a projection layer; you cannot just write a SELECT to find every active user the way you would in a CRUD app. The cognitive load on the engineering team is meaningfully higher than a normal database-backed application, and teams that adopt event sourcing without buying into <Link href="/glossary/what-is-domain-driven-design" className="text-sky-400 hover:underline">domain-driven design</Link> often regret it within a year.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        We use event sourcing when the audit trail is part of the product spec, not an afterthought. <Link href="/services/algorithmic-trading-systems" className="text-sky-400 hover:underline">Trading systems</Link> we build store every order, fill, cancel, and replace as an event — reconstructing a portfolio's state at 14:32:17.213 on a Tuesday is a feature, not a debugging exercise. <Link href="/industries/healthcare" className="text-sky-400 hover:underline">Healthcare</Link> and <Link href="/industries/fintech" className="text-sky-400 hover:underline">fintech</Link> clients use it because regulators want a complete history of every record change.
                    </p>
                    <p>
                        For a typical <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platform</Link>, we usually recommend against event sourcing the entire system — but we do recommend event-sourcing the parts that genuinely benefit (billing ledger, audit log, agreement signatures) while keeping the rest as plain Postgres. The mix is usually right. <Link href="/contact" className="text-sky-400 hover:underline">Book a call</Link> if you want a 30-minute review of whether your system actually needs it.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-cqrs" className="text-sky-400 hover:underline">What is CQRS?</Link></li>
                        <li><Link href="/glossary/what-is-domain-driven-design" className="text-sky-400 hover:underline">What is domain-driven design?</Link></li>
                        <li><Link href="/glossary/what-is-microservices-architecture" className="text-sky-400 hover:underline">What is microservices architecture?</Link></li>
                        <li><Link href="/glossary/what-is-a-data-warehouse" className="text-sky-400 hover:underline">What is a data warehouse?</Link></li>
                        <li><Link href="/glossary/what-is-webhooks" className="text-sky-400 hover:underline">What are webhooks?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Building a system that needs a perfect audit trail?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We design event-sourced cores for financial, trading, and compliance-heavy systems — and we know when not to use the pattern.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-event-sourcing" />
                        <Link href="/services/algorithmic-trading-systems" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Trading systems
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
