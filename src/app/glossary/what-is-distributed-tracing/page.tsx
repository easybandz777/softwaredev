import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is Distributed Tracing? Plain-English Guide | QUANT LAB USA",
    description:
        "Distributed tracing follows a single request across every service it touches. Plain-English definition, spans, trace context, OpenTelemetry. By QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-distributed-tracing" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Distributed Tracing",
    description:
        "Distributed tracing is an observability technique that follows a single request as it travels through every service, queue, and database in a distributed system, recording the timing and outcome of each step so engineers can see exactly where latency or errors occur.",
    url: "https://quantlabusa.dev/glossary/what-is-distributed-tracing",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "Distributed Tracing", item: "https://quantlabusa.dev/glossary/what-is-distributed-tracing" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is distributed tracing in one sentence?", acceptedAnswer: { "@type": "Answer", text: "Distributed tracing follows a single request as it moves through every service, queue, and database in a system, recording how long each step took and whether it succeeded, so you can see exactly where time or errors are being spent." } },
        { "@type": "Question", name: "What is a span?", acceptedAnswer: { "@type": "Answer", text: "A span is a single unit of work within a trace — one service call, one database query, one function. Each span records a start time, duration, status, and attributes. Spans nest into a tree that forms the complete trace of a request." } },
        { "@type": "Question", name: "What is trace context propagation?", acceptedAnswer: { "@type": "Answer", text: "It is how a trace ID is passed from one service to the next, usually via HTTP headers following the W3C Trace Context standard. Without propagation, each service would create disconnected traces instead of one end-to-end picture." } },
        { "@type": "Question", name: "What is the difference between tracing and logging?", acceptedAnswer: { "@type": "Answer", text: "Logs are independent records of events within a single service. Traces stitch events across services into the story of one request. A log tells you what happened in one place; a trace tells you the whole journey and where the time went." } },
        { "@type": "Question", name: "What is tail-based sampling?", acceptedAnswer: { "@type": "Answer", text: "Tracing every request is expensive, so systems sample. Tail-based sampling waits until a trace is complete, then keeps it if it is interesting — slow or errored — and discards routine ones. This keeps the valuable traces without storing everything." } },
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
                        <li className="text-gray-300">Distributed Tracing</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Infrastructure</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is Distributed Tracing?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        Distributed tracing is the technique of following a single request as it travels through every service, queue, and database that handles it, recording how long each hop took and whether it succeeded — turning "the app feels slow" into a precise picture of exactly which step, in which service, is eating the time.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The problem it solves</h2>
                    <p>
                        In a single monolithic application, a slow request is relatively
                        easy to diagnose — attach a profiler, read the logs, find the slow
                        function. In a distributed system, one user action might fan out
                        across a dozen microservices, several databases, a message queue,
                        and a few third-party APIs. When that action is slow, logs from
                        each service tell you what happened locally but not how the pieces
                        connect. Distributed tracing exists to reconstruct that connection:
                        it is the part of{" "}
                        <Link href="/glossary/what-is-observability" className="text-sky-400 hover:underline">observability</Link>{" "}
                        that answers "where did the time actually go?"
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Traces and spans</h2>
                    <p>
                        A trace represents the full journey of one request. It is made of
                        spans — each span is a single unit of work, like an HTTP call to
                        one service, a database query, or a meaningful function. Every span
                        records a start time, a duration, a status (success or error), and
                        attributes such as the endpoint or the SQL statement. Spans nest:
                        the API gateway's span is the parent, the service it calls is a
                        child, the database query inside that service is a grandchild. Lay
                        the spans out on a timeline and you get the familiar waterfall view
                        where a long bar instantly reveals the bottleneck.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Trace context propagation</h2>
                    <p>
                        The magic that ties spans across services together is context
                        propagation. When the first service receives a request, it
                        generates a unique trace ID. As it calls downstream services, it
                        passes that ID along — typically in HTTP headers following the W3C
                        Trace Context standard, which has largely replaced earlier
                        vendor-specific formats. Each service attaches its spans to the
                        same trace ID. Without propagation you would get a pile of
                        disconnected single-service traces; with it you get one coherent
                        end-to-end story, even across language and team boundaries.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Sampling — you cannot trace everything</h2>
                    <p>
                        Recording a full trace for every request in a high-traffic system
                        would generate an unaffordable volume of data, so tracing systems
                        sample. Head-based sampling decides at the start of a request
                        whether to record it — simple, but it might discard the one slow
                        request you needed. Tail-based sampling buffers spans until the
                        trace finishes, then keeps it only if it is interesting — slow,
                        errored, or otherwise notable — and drops the routine majority.
                        Tail-based sampling costs more to run but is far better at
                        retaining exactly the traces an engineer will want during an
                        incident.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The tooling landscape</h2>
                    <p>
                        The lineage runs from Google's internal Dapper system through
                        open-source projects like Zipkin and Jaeger. Today most teams
                        instrument with OpenTelemetry, the vendor-neutral standard, and
                        send traces to a backend of their choice — Jaeger or Grafana Tempo
                        on the open-source side, or commercial platforms like Honeycomb,
                        Datadog, and New Relic. Because OpenTelemetry decouples
                        instrumentation from the backend, you can change where traces are
                        stored and visualized without touching the code that produces
                        them.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        When we build multi-service systems under{" "}
                        <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platform development</Link>{" "}
                        or operate them under{" "}
                        <Link href="/services/devops-engineering" className="text-sky-400 hover:underline">DevOps engineering</Link>,
                        we wire in distributed tracing with OpenTelemetry so the team can
                        follow a real user request end to end. It changes incident response
                        from arguing about which service is at fault to opening the trace
                        and reading the answer. Tracing also exposes the hidden cost of
                        chatty service-to-service calls — the kind of pattern that a
                        thoughtful{" "}
                        <Link href="/glossary/what-is-caching" className="text-sky-400 hover:underline">caching</Link>{" "}
                        layer or an API redesign can eliminate once you can finally see it.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        topics={["stack","saas"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-observability" className="text-sky-400 hover:underline">What is observability?</Link></li>
                        <li><Link href="/glossary/what-is-caching" className="text-sky-400 hover:underline">What is caching?</Link></li>
                        <li><Link href="/glossary/what-is-load-testing" className="text-sky-400 hover:underline">What is load testing?</Link></li>
                        <li><Link href="/glossary/what-is-database-sharding" className="text-sky-400 hover:underline">What is database sharding?</Link></li>
                        <li><Link href="/glossary/what-is-chaos-engineering" className="text-sky-400 hover:underline">What is chaos engineering?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Hunting latency across services?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We instrument distributed systems with end-to-end tracing so slow
                        requests stop being a mystery. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-tracing" />
                        <Link href="/services/devops-engineering" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            DevOps engineering
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
