import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What are Webhooks? Plain-English Definition | QUANT LAB USA",
    description:
        "Webhooks are HTTP callbacks that fire when an event happens. Plain-English definition, Stripe & GitHub examples, retry patterns. By QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-webhooks" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Webhooks",
    description:
        "Webhooks are HTTP callbacks: when an event happens in System A, it sends a POST request with structured data to a URL you own in System B, enabling real-time integrations.",
    url: "https://quantlabusa.dev/glossary/what-is-webhooks",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "What are Webhooks?", item: "https://quantlabusa.dev/glossary/what-is-webhooks" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is a webhook?", acceptedAnswer: { "@type": "Answer", text: "A webhook is an HTTP POST that one system sends to another when an event occurs. Instead of asking a server every minute whether something changed, you give the server a URL and it tells you when something happened." } },
        { "@type": "Question", name: "What is the difference between an API and a webhook?", acceptedAnswer: { "@type": "Answer", text: "An API call is you asking the other system for data. A webhook is the other system telling you something happened. APIs are pull; webhooks are push." } },
        { "@type": "Question", name: "Are webhooks reliable?", acceptedAnswer: { "@type": "Answer", text: "They can be, but only if you build them correctly. You need idempotency, retry handling, signature verification, and a queue between receipt and processing." } },
        { "@type": "Question", name: "What is webhook signature verification?", acceptedAnswer: { "@type": "Answer", text: "Most webhook senders sign the payload with a shared secret. The receiver verifies the signature on every request to make sure the data really came from the sender and was not tampered with in transit." } },
        { "@type": "Question", name: "What happens if my server is down when a webhook fires?", acceptedAnswer: { "@type": "Answer", text: "Most platforms retry on failure for some period — Stripe retries for three days, GitHub for a few hours. Beyond that window, events are lost unless you separately reconcile." } },
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
                        <li className="text-gray-300">What are Webhooks?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Software</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What are Webhooks?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        A webhook is an HTTP POST request that one system sends to a URL you own the moment something happens — a customer pays, a contract is signed, a user signs up — so your application can react in real time without constantly polling the other system to check.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The "do not call us, we will call you" pattern</h2>
                    <p>
                        Before webhooks, the way one system learned about events in another was
                        polling — every minute, ask "anything new?" and process whatever came
                        back. Polling wastes work when nothing has changed, misses events that
                        come and go between polls, and scales badly when you have hundreds of
                        accounts to check.
                    </p>
                    <p>
                        Webhooks flip the direction. You register a URL with the other system,
                        and when something interesting happens it sends a JSON POST to that
                        URL. Your code reacts immediately. The cost is that you now own a
                        public endpoint that strangers can hit, and you have to do the work
                        to make sure only the real sender can write to your data.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What real webhook code has to handle</h2>
                    <p>
                        A naive webhook handler is twenty lines. A correct one is two hundred.
                        It has to verify the signature on every request to make sure the
                        sender is who they claim to be. It has to be idempotent — the same
                        event might arrive twice on retry, and your code cannot create a
                        duplicate record. It needs to acknowledge fast (most senders time out
                        in a few seconds) and process slow work asynchronously in a queue. It
                        needs to log everything, because debugging webhooks after the fact
                        without logs is impossible.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why most webhook bugs are silent</h2>
                    <p>
                        Webhook bugs do not crash the page. They go missing. A
                        misbehaving handler drops a "subscription cancelled" event
                        and the customer keeps getting charged. A duplicate handler
                        creates two invoices for one payment. A signature
                        verification skip lets a malicious actor send forged events.
                        These bugs do not surface until someone notices the numbers
                        do not match — often weeks later, after a customer
                        complaint. The fix is alerting on the gap between events
                        you expected and events you processed, plus periodic
                        reconciliation jobs against the source system.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where you will run into webhooks</h2>
                    <p>
                        Every SaaS you integrate with — Stripe (charge succeeded, subscription
                        canceled), GitHub (push, PR opened), Shopify (order created), Slack
                        (message posted), Zoom (meeting ended). Modern products ship dozens of
                        webhook event types as a primary integration surface alongside their
                        REST API.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        Webhook integration is bread-and-butter work on our{" "}
                        <Link href="/services/stripe-integration" className="text-sky-400 hover:underline">Stripe integration</Link>{" "}
                        and{" "}
                        <Link href="/services/api-development" className="text-sky-400 hover:underline">API development</Link>{" "}
                        engagements. Every webhook handler we ship includes signature
                        verification, idempotency keys, a durable queue between receipt and
                        processing, dead-letter logging for unrecoverable errors, and a replay
                        mechanism for when something downstream broke. The Stripe webhook code
                        running on our own production billing system has caught and
                        gracefully handled every retry, duplicate, and out-of-order event
                        Stripe has thrown at it for years.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Testing webhooks locally</h2>
                    <p>
                        Webhooks are hard to develop against because your local
                        machine is not reachable from the public internet. Tools
                        like Stripe CLI, ngrok, Cloudflare Tunnels, and the
                        webhook tester built into many platforms forward live
                        events to a localhost port for development. We require
                        every webhook integration to ship with a documented
                        replay mechanism so support engineers can re-feed a
                        single event when something goes wrong — much cheaper
                        than asking customers to recreate the conditions that
                        produced the event.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        topics={["stripe","stack"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-an-api" className="text-sky-400 hover:underline">What is an API?</Link></li>
                        <li><Link href="/glossary/what-is-rest-vs-graphql" className="text-sky-400 hover:underline">REST vs GraphQL</Link></li>
                        <li><Link href="/glossary/what-is-saas" className="text-sky-400 hover:underline">What is SaaS?</Link></li>
                        <li><Link href="/glossary/what-is-multi-tenant-saas" className="text-sky-400 hover:underline">What is multi-tenant SaaS?</Link></li>
                        <li><Link href="/glossary/what-is-owasp-top-10" className="text-sky-400 hover:underline">OWASP Top 10</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Building webhook integrations?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We have shipped production webhook handlers for Stripe, GitHub,
                        Shopify, Slack, and a dozen niche SaaS tools. Book a 30-minute
                        consultation.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-webhooks" />
                        <Link href="/services/api-development" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            API development
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
