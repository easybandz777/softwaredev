import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is a Message Queue? Definition + How It Works | QUANT LAB USA",
    description:
        "A message queue lets one part of a system hand work to another asynchronously and reliably. Plain-English definition and how it works — by QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-a-message-queue" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Message Queue",
    description:
        "A message queue is a buffer that holds tasks or events sent by one part of a system until another part is ready to process them, enabling asynchronous, decoupled, and reliable communication between services.",
    url: "https://quantlabusa.dev/glossary/what-is-a-message-queue",
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
            name: "What is a Message Queue?",
            item: "https://quantlabusa.dev/glossary/what-is-a-message-queue",
        },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is a message queue in simple terms?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A message queue is a waiting line for work. One part of your system drops a task into the queue and moves on, and another part picks the task up and handles it when it can. It lets the two sides run at their own pace without waiting on each other.",
            },
        },
        {
            "@type": "Question",
            name: "Why use a message queue instead of calling a service directly?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A direct call forces the caller to wait and fails if the other service is down. A queue lets the caller respond instantly, smooths out traffic spikes, and holds the work safely until the consumer is available, so a temporary outage does not lose the task.",
            },
        },
        {
            "@type": "Question",
            name: "What is the difference between a queue and a pub/sub system?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "In a classic queue each message is handled by exactly one consumer. In publish/subscribe, a message is broadcast to every interested subscriber. Some brokers support both patterns; the right one depends on whether work should be done once or fanned out widely.",
            },
        },
        {
            "@type": "Question",
            name: "What is a dead-letter queue?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A dead-letter queue is where messages go after they fail to be processed too many times. Instead of blocking the queue or vanishing, the problem message is set aside so engineers can inspect and replay it later.",
            },
        },
        {
            "@type": "Question",
            name: "What tools provide message queues?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Common options include RabbitMQ, Apache Kafka, Amazon SQS, and Redis-based queues. The choice depends on throughput, ordering and delivery guarantees, and whether you want a managed cloud service or to run the broker yourself.",
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
                        <li className="text-gray-300">What is a Message Queue?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">
                        Glossary · Software
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                        What is a Message Queue?
                    </h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        A message queue is a buffer that holds tasks or events sent by one part of a system until another part is ready to handle them — letting the sender hand off work and move on instead of waiting, and ensuring the work is not lost if the receiver is briefly unavailable.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What a message queue means</h2>
                    <p>
                        A <strong>message queue</strong> is a waiting line for work that sits between two
                        parts of a system. One side, the <em>producer</em>, writes a message describing a
                        task — &quot;send this welcome email,&quot; &quot;resize this image,&quot;
                        &quot;sync this order to the warehouse&quot; — and then carries on without waiting
                        for it to be done. The other side, the <em>consumer</em>, reads messages off the
                        queue and processes them at its own pace. The queue itself is the durable buffer in
                        the middle that holds the backlog.
                    </p>
                    <p>
                        This is the heart of <em>asynchronous</em> processing. The producer and consumer
                        are <em>decoupled</em>: they do not have to be running at the same speed, or even
                        at the same time. If the consumer is slow or temporarily offline, messages simply
                        wait in line until it catches up, rather than failing or being lost.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where it came from</h2>
                    <p>
                        Message-oriented middleware dates back to enterprise systems of the 1980s and
                        1990s, where reliable, asynchronous communication between mainframe applications
                        was a hard requirement. The pattern was formalized in standards and products that
                        let systems exchange messages without being directly wired together.
                    </p>
                    <p>
                        The rise of web-scale and microservices architectures made queues mainstream.
                        Open-source brokers like RabbitMQ and Apache Kafka, and managed cloud services like
                        Amazon SQS, turned what was once heavyweight enterprise infrastructure into a
                        routine building block. As applications split into many small services, queues
                        became the connective tissue that let those services talk reliably without
                        depending on one another to be up at any given instant.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How it works</h2>
                    <p>
                        A producer publishes a message to a <em>broker</em>, the service that owns the
                        queue and stores messages durably so they survive a crash. One or more consumers
                        pull messages off and process them. When a consumer finishes a message
                        successfully, it sends an <em>acknowledgment</em>, and the broker removes the
                        message; if the consumer fails or never acknowledges, the broker redelivers the
                        message so the work is not lost. Running several consumers in parallel lets you
                        scale throughput simply by adding more workers.
                    </p>
                    <p>
                        Because a message can be delivered more than once — after a timeout or a retry —
                        consumers are designed to be <em>idempotent</em>, so reprocessing the same message
                        does no harm. Messages that keep failing are routed to a <em>dead-letter
                        queue</em>, a holding area where they can be inspected and replayed instead of
                        blocking everything behind them. Some systems also support the publish/subscribe
                        pattern, where a single message is broadcast to many subscribers rather than
                        consumed by just one.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">When it matters</h2>
                    <p>
                        A message queue matters whenever work can happen later, can fail and need retrying,
                        or arrives faster than it can be processed. Sending email, generating reports,
                        processing uploads, talking to flaky third-party APIs, and absorbing traffic spikes
                        are textbook cases. Moving that work off the request path keeps your application
                        responsive — the user gets an instant reply while the heavy lifting happens in the
                        background — and the queue&apos;s durability means a momentary outage delays the
                        work rather than dropping it. The cost is added operational complexity and the
                        need to design consumers that tolerate retries, which is real but well worth it
                        once asynchronous work is in play.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        We reach for a queue whenever work does not need to finish inside the user&apos;s
                        request. In the{" "}
                        <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platforms</Link> we
                        build, things like sending transactional email, generating exports, and syncing
                        with outside systems run as background jobs off a queue, so the app stays snappy and
                        a slow third-party service can never freeze the user interface. The user gets an
                        immediate confirmation; the work completes moments later in a worker.
                    </p>
                    <p>
                        Queues are also how we make integrations reliable. When we process a{" "}
                        <Link href="/glossary/what-is-webhooks" className="text-sky-400 hover:underline">webhook</Link> from a payment
                        provider, we accept it fast, enqueue it, and process it in a worker that is built to
                        be{" "}
                        <Link href="/glossary/what-is-idempotency" className="text-sky-400 hover:underline">idempotent</Link>, so a
                        retried delivery never double-charges or double-counts. Designing those resilient
                        asynchronous flows is a core part of our{" "}
                        <Link href="/services/api-development" className="text-sky-400 hover:underline">API development</Link> work.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        topics={["stack", "saas"]}
                        pinned={["nextjs-stripe-integration-guide", "building-multi-tenant-saas-postgres-rls", "build-vs-buy-software-2026"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-idempotency" className="text-sky-400 hover:underline">What is idempotency?</Link></li>
                        <li><Link href="/glossary/what-is-webhooks" className="text-sky-400 hover:underline">What are webhooks?</Link></li>
                        <li><Link href="/glossary/what-is-microservices-architecture" className="text-sky-400 hover:underline">What is microservices architecture?</Link></li>
                        <li><Link href="/glossary/what-is-serverless" className="text-sky-400 hover:underline">What is serverless?</Link></li>
                        <li><Link href="/glossary/what-is-an-api" className="text-sky-400 hover:underline">What is an API?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Talk to the engineer who would build it</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        If you want a 30-minute conversation about adding reliable background
                        processing to your app — not a pitch — book a call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-message-queue" />
                        <Link href="/services/api-development" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            API development
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
