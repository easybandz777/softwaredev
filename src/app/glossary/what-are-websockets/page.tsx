import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What are WebSockets? Plain-English Guide (2026) | QUANT LAB USA",
    description:
        "WebSockets keep a single TCP connection open for full-duplex, real-time messaging between browser and server. Plain-English definition and uses. By QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-are-websockets" },
    openGraph: {
        title: "What are WebSockets? Plain-English Guide (2026) | QUANT LAB USA",
        description:
            "WebSockets keep one connection open for full-duplex, real-time messaging between browser and server. How the handshake, scaling, and use cases work.",
        url: "https://quantlabusa.dev/glossary/what-are-websockets",
        type: "article",
    },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "WebSockets",
    description:
        "WebSockets are a protocol that upgrades a single HTTP connection into a persistent, full-duplex TCP channel, letting a browser and server push messages to each other at any time without repeated requests.",
    url: "https://quantlabusa.dev/glossary/what-are-websockets",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "WebSockets", item: "https://quantlabusa.dev/glossary/what-are-websockets" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What are WebSockets in one sentence?", acceptedAnswer: { "@type": "Answer", text: "WebSockets are a protocol that turns a single HTTP connection into a persistent, two-way channel, so the browser and server can send messages to each other at any time without polling." } },
        { "@type": "Question", name: "How is a WebSocket different from HTTP?", acceptedAnswer: { "@type": "Answer", text: "HTTP is request-response: the client asks, the server answers, the connection is typically done. A WebSocket stays open and is full-duplex — either side can send a message whenever it wants." } },
        { "@type": "Question", name: "When should I use WebSockets?", acceptedAnswer: { "@type": "Answer", text: "Use them when the server needs to push updates to clients in real time and frequently: chat, live dashboards, collaborative editing, multiplayer, and trading feeds. For occasional updates, simpler options like SSE or polling often suffice." } },
        { "@type": "Question", name: "Are WebSockets hard to scale?", acceptedAnswer: { "@type": "Answer", text: "They add complexity. Each open connection consumes server memory and is stateful, so you need sticky sessions or a pub/sub backplane (like Redis) to broadcast across many server instances behind a load balancer." } },
        { "@type": "Question", name: "What is the ws vs wss difference?", acceptedAnswer: { "@type": "Answer", text: "ws:// is an unencrypted WebSocket connection; wss:// is the TLS-encrypted version, the WebSocket equivalent of HTTPS. Production traffic should always use wss." } },
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
                        <li className="text-gray-300">WebSockets</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Web Platform</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What are WebSockets?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        WebSockets are a protocol that upgrades an ordinary HTTP connection into a single, persistent, full-duplex channel — once open, the browser and server can each send messages to the other at any moment, with no new request needed — which is what makes real-time features like chat, live dashboards, and collaborative editing feel instant.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The problem they solve</h2>
                    <p>
                        Plain HTTP is one-directional in spirit: the client asks, the
                        server answers. To fake real-time updates, the early web hammered
                        the server with repeated requests — polling — or held requests open
                        until data arrived, a trick called{" "}
                        <Link href="/glossary/what-is-long-polling" className="text-sky-400 hover:underline">long polling</Link>.
                        Both are wasteful. WebSockets, standardized as RFC 6455 in 2011,
                        replaced the workarounds with a real persistent channel where the
                        server can push the instant something changes.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The upgrade handshake</h2>
                    <p>
                        A WebSocket starts life as a normal HTTP request carrying an{" "}
                        <code>Upgrade: websocket</code> header. If the server agrees, it
                        responds with status <code>101 Switching Protocols</code>, and from
                        that point the same TCP connection stops speaking HTTP and starts
                        exchanging WebSocket frames. Because it begins as HTTP, it travels
                        over the same ports (80 and 443) and slips through firewalls and
                        proxies that already allow web traffic — a big part of why it won.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Full-duplex, and what that buys you</h2>
                    <p>
                        Full-duplex means both directions are live at once, like a phone
                        call rather than a walkie-talkie. The latency drops because there is
                        no per-message handshake, and the overhead is tiny — a few bytes of
                        framing instead of a fresh set of HTTP headers on every update. For
                        a live trading screen, a multiplayer game, or a shared document
                        where keystrokes appear on everyone's screen, that difference is
                        the whole product.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The scaling tax</h2>
                    <p>
                        Persistent connections are stateful, and state is what makes scaling
                        hard. Each open socket holds memory on a specific server, so you
                        cannot just round-robin requests across a fleet the way you would
                        with stateless HTTP behind a{" "}
                        <Link href="/glossary/what-is-a-load-balancer" className="text-sky-400 hover:underline">load balancer</Link>.
                        You need sticky routing to keep a client pinned to its server, and a
                        pub/sub backplane — frequently Redis or a dedicated{" "}
                        <Link href="/glossary/what-is-a-message-queue" className="text-sky-400 hover:underline">message queue</Link>{" "}
                        — so a message published on one node reaches clients connected to all
                        the others.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">When something simpler will do</h2>
                    <p>
                        WebSockets are not always the answer. If updates only flow from
                        server to client — a notifications feed, a progress bar — Server-Sent
                        Events are lighter and auto-reconnect for free. If updates are rare,
                        ordinary polling is fine and far easier to operate. Reach for
                        WebSockets when you genuinely need frequent, low-latency,
                        two-directional traffic; otherwise you are paying the scaling tax
                        for capability you do not use. We lay out the choice in our{" "}
                        <Link href="/glossary/what-is-long-polling" className="text-sky-400 hover:underline">long polling vs WebSockets</Link>{" "}
                        explainer.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        We build real-time features the boring, reliable way: <code>wss</code>
                        everywhere, authenticated connections, heartbeat pings to detect
                        dead sockets, exponential-backoff reconnection on the client, and a
                        Redis-backed backplane so the system scales past one server. Our{" "}
                        <Link href="/services/api-development" className="text-sky-400 hover:underline">API development</Link>{" "}
                        work treats the WebSocket layer as a first-class part of the
                        architecture rather than a demo that falls over under load. And when
                        a project does not actually need a live socket, we say so.
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
                        <li><Link href="/glossary/what-is-long-polling" className="text-sky-400 hover:underline">Long polling vs WebSockets</Link></li>
                        <li><Link href="/glossary/what-is-a-message-queue" className="text-sky-400 hover:underline">What is a message queue?</Link></li>
                        <li><Link href="/glossary/what-is-a-load-balancer" className="text-sky-400 hover:underline">What is a load balancer?</Link></li>
                        <li><Link href="/glossary/what-is-grpc" className="text-sky-400 hover:underline">What is gRPC?</Link></li>
                        <li><Link href="/glossary/what-is-an-api" className="text-sky-400 hover:underline">What is an API?</Link></li>
                        <li><Link href="/glossary/what-is-rate-limiting" className="text-sky-400 hover:underline">What is rate limiting?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Building real-time features?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We design WebSocket layers that survive reconnects, scale past one
                        server, and stay secure. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-websockets" />
                        <Link href="/services/api-development" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            API development
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
