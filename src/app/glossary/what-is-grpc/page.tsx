import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is gRPC? Plain-English Guide (2026) | QUANT LAB USA",
    description:
        "gRPC is a high-performance RPC framework using Protocol Buffers over HTTP/2. Plain-English definition, streaming, and when to use it vs REST. By QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-grpc" },
    openGraph: {
        title: "What is gRPC? Plain-English Guide (2026) | QUANT LAB USA",
        description:
            "gRPC is a high-performance RPC framework using Protocol Buffers over HTTP/2. Streaming, codegen, and when it beats REST, explained in plain English.",
        url: "https://quantlabusa.dev/glossary/what-is-grpc",
        type: "article",
    },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "gRPC",
    description:
        "gRPC is a high-performance, open-source remote procedure call framework that uses Protocol Buffers to define typed service contracts and transmits compact binary messages over HTTP/2, with built-in support for bidirectional streaming.",
    url: "https://quantlabusa.dev/glossary/what-is-grpc",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "gRPC", item: "https://quantlabusa.dev/glossary/what-is-grpc" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is gRPC in one sentence?", acceptedAnswer: { "@type": "Answer", text: "gRPC is a high-performance RPC framework that uses Protocol Buffers to define typed service contracts and sends compact binary messages over HTTP/2, with first-class streaming." } },
        { "@type": "Question", name: "What does gRPC stand for?", acceptedAnswer: { "@type": "Answer", text: "Officially it stands for 'gRPC Remote Procedure Calls' — a recursive acronym. Google originally built and open-sourced it in 2015; it is now a CNCF project." } },
        { "@type": "Question", name: "Is gRPC faster than REST?", acceptedAnswer: { "@type": "Answer", text: "Usually, yes, for service-to-service traffic. Binary Protocol Buffers are smaller and faster to parse than JSON, and HTTP/2 multiplexing reduces overhead. The gap matters most at high request volumes." } },
        { "@type": "Question", name: "Can browsers call gRPC directly?", acceptedAnswer: { "@type": "Answer", text: "Not standard gRPC. Browsers cannot speak raw gRPC because of HTTP/2 frame access limits, so you use gRPC-Web through a proxy, or expose a REST or GraphQL edge for browser clients." } },
        { "@type": "Question", name: "What are Protocol Buffers?", acceptedAnswer: { "@type": "Answer", text: "Protocol Buffers (protobuf) are Google's language-neutral schema format for serializing structured data into a compact binary form. A .proto file defines the messages and services, and codegen produces typed clients and servers." } },
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
                        <li className="text-gray-300">gRPC</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · APIs</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is gRPC?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        gRPC is a high-performance remote procedure call framework: you define your service and its messages in a Protocol Buffers file, a code generator produces typed clients and servers in your language, and the calls travel as compact binary payloads over HTTP/2 — making it the default choice for fast, strongly typed communication between microservices.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">RPC, briefly</h2>
                    <p>
                        Remote procedure call is an old idea: make calling a function on
                        another machine look like calling a local function. gRPC is
                        Google's modern take, open-sourced in 2015 and now a Cloud Native
                        Computing Foundation project. Instead of thinking in URLs and verbs
                        the way a{" "}
                        <Link href="/glossary/what-is-a-rest-api" className="text-sky-400 hover:underline">REST API</Link>{" "}
                        does, you think in methods and messages — <code>GetUser(UserRequest)
                        returns (User)</code> — and the framework handles serialization,
                        transport, and connection management.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Protocol Buffers and codegen</h2>
                    <p>
                        The contract lives in a <code>.proto</code> file: language-neutral
                        definitions of your messages and service methods. A compiler reads
                        it and generates strongly typed client and server stubs in Go,
                        Java, Python, TypeScript, and more. That codegen is the headline
                        productivity win — change a field in the schema, regenerate, and
                        every consumer gets compile-time errors instead of silent runtime
                        surprises. The wire format is compact binary, not JSON, so payloads
                        are smaller and parsing is cheap.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">HTTP/2 and streaming</h2>
                    <p>
                        gRPC rides on HTTP/2, which gives it multiplexing — many concurrent
                        calls over one connection without head-of-line blocking. It also
                        unlocks four call styles: unary (one request, one response), server
                        streaming, client streaming, and bidirectional streaming. That
                        streaming support is why teams pick gRPC for things like live
                        telemetry, chat backplanes, and progress feeds where{" "}
                        <Link href="/glossary/what-are-websockets" className="text-sky-400 hover:underline">WebSockets</Link>{" "}
                        would otherwise be the tool of choice.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The browser problem</h2>
                    <p>
                        Here is the catch that surprises people: browsers cannot speak raw
                        gRPC, because JavaScript has no access to the underlying HTTP/2
                        frames. The workaround is gRPC-Web, a variant that runs through a
                        proxy (often an{" "}
                        <Link href="/glossary/what-is-an-api-gateway" className="text-sky-400 hover:underline">API gateway</Link>{" "}
                        or Envoy). For this reason, many architectures use gRPC for internal
                        service-to-service traffic and expose a REST or GraphQL edge to the
                        public web. gRPC is a backend-to-backend specialist first.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">When to reach for it</h2>
                    <p>
                        gRPC pays off when you have many services talking to each other at
                        high volume, want a single source of truth for the contract, and
                        care about latency and payload size. It is heavier to debug than
                        JSON — you cannot just curl a binary endpoint and read the output —
                        and it adds operational pieces like proxies for the browser. For a
                        small system with a few public endpoints, REST is usually the
                        simpler, cheaper call. For a sprawling{" "}
                        <Link href="/glossary/what-is-microservices-architecture" className="text-sky-400 hover:underline">microservices</Link>{" "}
                        backend, gRPC earns its keep.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        On internal platforms we use gRPC where it fits: a shared{" "}
                        <code>.proto</code> registry, generated clients, and a thin REST or
                        GraphQL edge for browsers. Our{" "}
                        <Link href="/services/api-development" className="text-sky-400 hover:underline">API development</Link>{" "}
                        engagements include the unglamorous parts — versioning the protobuf
                        schema without breaking consumers, wiring deadlines and retries, and
                        putting authentication on every method. We do not bolt gRPC onto a
                        system that would be perfectly happy with a{" "}
                        <Link href="/glossary/what-is-a-rest-api" className="text-sky-400 hover:underline">REST API</Link>;
                        the right protocol is the one that matches the traffic.
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
                        <li><Link href="/glossary/what-is-a-rest-api" className="text-sky-400 hover:underline">What is a REST API?</Link></li>
                        <li><Link href="/glossary/what-is-graphql" className="text-sky-400 hover:underline">What is GraphQL?</Link></li>
                        <li><Link href="/glossary/what-are-websockets" className="text-sky-400 hover:underline">What are WebSockets?</Link></li>
                        <li><Link href="/glossary/what-is-microservices-architecture" className="text-sky-400 hover:underline">Microservices architecture</Link></li>
                        <li><Link href="/glossary/what-is-an-api-gateway" className="text-sky-400 hover:underline">What is an API gateway?</Link></li>
                        <li><Link href="/glossary/what-is-a-service-mesh" className="text-sky-400 hover:underline">What is a service mesh?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Standing up a gRPC backend?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We design protobuf contracts, set up codegen and streaming, and
                        bridge gRPC to the browser cleanly. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-grpc" />
                        <Link href="/services/api-development" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            API development
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
