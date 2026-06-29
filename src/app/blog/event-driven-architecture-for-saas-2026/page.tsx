import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AuthorByline } from "@/components/AuthorByline";
import { EditorialFooter } from "@/components/EditorialFooter";
import { Sources } from "@/components/Sources";
import { ArrowRight, Check, Workflow } from "lucide-react";
import { articleMetadata } from "@/lib/seoMeta";
import { articleSchema, faqSchema } from "@/lib/schemas";
import { getAuthor, authorUrl } from "@/lib/authors";

const SLUG = "event-driven-architecture-for-saas-2026";
const PUBLISHED = "2026-06-03";
const TITLE = "Event-Driven Architecture for SaaS (2026)";
const author = getAuthor("bill-beltz");

export const metadata: Metadata = articleMetadata({
    title: "Event-Driven Architecture for SaaS: A 2026 Guide",
    description:
        "When event-driven design helps a SaaS, when it hurts: the outbox pattern, idempotent consumers, ordering, exactly-once myths, and choreography vs orchestration — with code.",
    slug: `blog/${SLUG}`,
    image: "/og-image.png",
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    authors: [author.name],
    keywords: [
        "event driven architecture saas",
        "transactional outbox pattern",
        "idempotent event consumer",
        "choreography vs orchestration 2026",
    ],
});

const faqs = [
    {
        q: "What is event-driven architecture?",
        a: "Event-driven architecture is a style where services communicate by publishing and reacting to events — immutable records that something happened, such as OrderPlaced or PaymentCaptured — rather than calling each other directly. A producer emits an event without knowing who consumes it, and any number of consumers react independently. This decouples services in time and in dependency, letting them scale, fail, and deploy on their own schedules. The tradeoff is that the overall flow becomes harder to trace and reason about.",
    },
    {
        q: "When should a SaaS use event-driven architecture?",
        a: "Reach for events when you have genuinely independent reactions to a state change — sending email, updating search indexes, billing, analytics — that should not block or couple to the main request. It also fits when teams need to evolve services independently or when you must absorb spiky load by buffering work. For a small app with one team and a single database, a direct function call or a simple background job is usually clearer and cheaper than the operational weight of a broker.",
    },
    {
        q: "What is the transactional outbox pattern?",
        a: "The outbox pattern solves the dual-write problem: you cannot atomically write to your database and publish to a message broker in one transaction, so a crash between the two loses or duplicates events. Instead, you write the event into an outbox table in the same database transaction as the business change. A separate relay process reads unpublished rows and pushes them to the broker, marking them sent. The event is published if and only if the business data committed.",
    },
    {
        q: "Why must event consumers be idempotent?",
        a: "Because real message systems deliver at least once, not exactly once. Network retries, redeliveries after a crash, and broker semantics all mean a consumer will occasionally see the same event twice. An idempotent consumer produces the same result whether it processes an event once or five times — typically by recording processed event IDs and skipping duplicates, or by making the side effect naturally repeatable. Without idempotency, retries double-charge customers and double-send emails.",
    },
    {
        q: "Is exactly-once delivery possible?",
        a: "Exactly-once delivery over a network is effectively a myth; what systems offer is at-least-once delivery plus exactly-once processing through idempotency and deduplication. Some brokers advertise exactly-once semantics, but they achieve it with idempotent producers and transactional reads within their own boundary — the moment your consumer has an external side effect, you are responsible for making that effect idempotent. Design as if every event can arrive more than once, because it can.",
    },
    {
        q: "What is the difference between choreography and orchestration?",
        a: "In choreography, each service reacts to events and emits its own, with no central coordinator — the workflow emerges from local rules. It is loosely coupled but the end-to-end process is implicit and hard to see. In orchestration, a central coordinator (often a saga or workflow engine) explicitly directs each step and handles compensation when something fails. Orchestration makes complex, long-running business processes visible and testable; choreography keeps simple reactions decoupled. Many systems use both.",
    },
];

const sources = [
    {
        label: "microservices.io — Transactional Outbox pattern",
        href: "https://microservices.io/patterns/data/transactional-outbox.html",
        publisher: "Chris Richardson",
    },
    {
        label: "microservices.io — Saga pattern",
        href: "https://microservices.io/patterns/data/saga.html",
        publisher: "Chris Richardson",
    },
    {
        label: "Apache Kafka — Design and delivery semantics",
        href: "https://kafka.apache.org/documentation/#semantics",
        publisher: "Apache Kafka",
    },
    {
        label: "AWS — Event-driven architecture",
        href: "https://aws.amazon.com/event-driven-architecture/",
        publisher: "Amazon Web Services",
    },
];

export default function EventDrivenPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        articleSchema({
                            headline:
                                "Event-Driven Architecture for SaaS: A 2026 Guide",
                            description:
                                "The outbox pattern, idempotent consumers, ordering, exactly-once myths, and choreography vs orchestration for SaaS.",
                            datePublished: PUBLISHED,
                            slug: SLUG,
                            image: "https://quantlabusa.dev/og-image.png",
                            author: { name: author.name, url: authorUrl(author.slug) },
                            section: "Engineering",
                            keywords: [
                                "event driven architecture saas",
                                "transactional outbox pattern",
                                "idempotent event consumer",
                            ],
                        }),
                    ),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
            />

            <div className="container mx-auto px-6 max-w-4xl">
                <Breadcrumbs
                    items={[
                        { label: "Home", href: "/" },
                        { label: "Blog", href: "/blog" },
                        { label: TITLE },
                    ]}
                />

                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Workflow className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs uppercase tracking-widest text-sky-400 mb-3">
                        SaaS Architecture · 2026
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                        Event-Driven Architecture for SaaS: A 2026 Guide
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed mb-6 max-w-2xl">
                        Events decouple your services and absorb spiky load — and they
                        introduce a new class of bugs around duplication, ordering, and the
                        dual-write problem. This guide covers when event-driven design earns
                        its keep, and the patterns that keep it honest in production.
                    </p>
                    <AuthorByline
                        author={author}
                        publishedDate={PUBLISHED}
                        readMinutes={13}
                        className="mb-8"
                    />
                    <ConsultationCTA
                        label="Talk Through Your Architecture"
                        service="SaaS Platform Development"
                        source="blog-event-driven"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Quick answer
                        </h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>
                                Use event-driven architecture when independent reactions to a state
                                change — email, indexing, billing, analytics — should not block or
                                couple to the main request. Solve the dual-write problem with the
                                transactional outbox pattern, make every consumer idempotent because
                                delivery is at-least-once, and treat exactly-once as a myth you
                                engineer around with deduplication. Choose orchestration for complex
                                workflows you must see and test, choreography for simple decoupled
                                reactions. For a single small app, a background job is usually
                                clearer than a broker.
                            </strong>
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Event-driven architecture is powerful and frequently over-applied. The
                            decoupling is real, but so is the cost: an asynchronous flow is harder
                            to trace, test, and debug than a function call. We design SaaS platforms
                            for a living, and our{" "}
                            <Link href="/services" className="text-sky-400 hover:underline">
                                platform engineering practice
                            </Link>{" "}
                            reaches for events deliberately, not by default. If your async work is
                            really just deferred tasks, you may want a queue instead — see{" "}
                            <Link
                                href="/blog/background-jobs-and-queues-in-production-2026"
                                className="text-sky-400 hover:underline"
                            >
                                background jobs and queues in production
                            </Link>
                            .
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        1. Events, commands, and when to use which
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            An <strong className="text-white">event</strong> is an immutable fact —{" "}
                            <code className="text-sky-300">OrderPlaced</code> — that the producer
                            emits without knowing or caring who reacts. A{" "}
                            <strong className="text-white">command</strong> is a directed request to
                            do something — <code className="text-sky-300">CapturePayment</code> —
                            aimed at a specific handler. Confusing the two couples services that
                            should be independent.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                Emit events for facts that have already happened; multiple consumers
                                may react in their own way.
                            </li>
                            <li>
                                Send commands when you need a specific thing done and care about the
                                outcome.
                            </li>
                            <li>
                                Name events in the past tense and version their schema — consumers
                                you do not control depend on the shape.
                            </li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        2. The dual-write problem and the outbox
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            The single most common event-driven bug: you commit a row to your
                            database and then publish an event to a broker as two separate steps. A
                            crash in between either loses the event (data committed, no event) or
                            duplicates it (event sent, transaction rolled back). The{" "}
                            <strong className="text-white">transactional outbox</strong> closes the
                            gap.
                        </p>
                        <pre className="overflow-x-auto rounded-xl border border-white/10 bg-[#0a1120] p-4 text-sm">
                            <code>{`// Write the business change and the event in ONE transaction
await db.transaction(async (tx) => {
  await tx.orders.insert(order);
  await tx.outbox.insert({
    id: crypto.randomUUID(),
    type: "OrderPlaced",
    payload: JSON.stringify(order),
    published: false,
  });
});

// A separate relay polls the outbox and publishes, then marks sent.
// The event ships only if the order actually committed.`}</code>
                        </pre>
                        <p>
                            A relay process (polling or change-data-capture) reads unpublished
                            outbox rows, pushes them to the broker, and marks them sent. The event
                            is published if and only if the business data committed — no dual write,
                            no lost or phantom events.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        3. Idempotent consumers and at-least-once delivery
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Real brokers deliver <strong className="text-white">at least
                            once</strong>. Retries and redeliveries mean every consumer will
                            eventually see a duplicate. Idempotency is not optional — it is the
                            price of admission.
                        </p>
                        <pre className="overflow-x-auto rounded-xl border border-white/10 bg-[#0a1120] p-4 text-sm">
                            <code>{`// Dedupe on event id; the unique constraint makes the check atomic
async function onEvent(evt) {
  try {
    await db.processedEvents.insert({ id: evt.id }); // unique PK
  } catch (e) {
    if (isUniqueViolation(e)) return; // already handled — skip
    throw e;
  }
  await handle(evt); // safe: runs at most once per event id
}`}</code>
                        </pre>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                Record processed event IDs and skip duplicates, or make the side
                                effect naturally repeatable (an upsert, a set-to-value).
                            </li>
                            <li>
                                Stop treating &quot;exactly-once delivery&quot; as achievable — aim
                                for at-least-once delivery plus exactly-once <em>processing</em>.
                            </li>
                            <li>
                                Route poison messages that keep failing to a dead-letter queue so one
                                bad event does not block the stream — the same pattern covered in our{" "}
                                <Link
                                    href="/blog/background-jobs-and-queues-in-production-2026"
                                    className="text-sky-400 hover:underline"
                                >
                                    queues guide
                                </Link>
                                .
                            </li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        4. Ordering, choreography, and orchestration
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Ordering is the next trap. Most brokers guarantee order only within a
                            partition, so events for the same aggregate must share a partition key
                            (e.g. the order ID) if their sequence matters. Across partitions, assume
                            no global order.
                        </p>
                        <p>
                            For multi-step business processes, choose your coordination style
                            deliberately:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong className="text-white">Choreography.</strong> Each service
                                reacts and emits; the workflow is emergent. Loosely coupled but the
                                end-to-end flow is implicit and hard to observe.
                            </li>
                            <li>
                                <strong className="text-white">Orchestration (saga).</strong> A
                                central coordinator drives each step and runs compensating actions on
                                failure. Complex flows become explicit, testable, and recoverable.
                            </li>
                            <li>
                                Use a saga for anything money-touching or multi-service where a
                                half-finished process is unacceptable — the compensation logic is the
                                point.
                            </li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Mid-post: most teams need a queue before a broker
                    </h2>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-8 text-center">
                        <p className="text-gray-300 mb-6">
                            Event-driven architecture is the right tool for genuinely decoupled
                            reactions — and overkill for deferred tasks in a single app. Want help
                            deciding which you actually need? Book a free scoping call.
                        </p>
                        <ConsultationCTA
                            label="Pressure-Test My Design"
                            service="SaaS Platform Development"
                            source="blog-event-driven-mid"
                        />
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Event-driven tradeoffs at a glance
                    </h2>
                    <div className="overflow-x-auto mt-4">
                        <table className="w-full text-sm text-left border border-white/10 rounded-xl overflow-hidden">
                            <thead className="bg-[#0d1526] text-white">
                                <tr>
                                    <th className="px-4 py-3 border-b border-white/10">Concern</th>
                                    <th className="px-4 py-3 border-b border-white/10">
                                        What it buys / costs
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Decoupling</td>
                                    <td className="px-4 py-3">
                                        Independent scaling and deploys; harder end-to-end tracing
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Delivery</td>
                                    <td className="px-4 py-3">
                                        At-least-once; you must build idempotency
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Consistency</td>
                                    <td className="px-4 py-3">
                                        Eventual, not immediate; outbox prevents lost events
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Ordering</td>
                                    <td className="px-4 py-3">
                                        Per-partition only; key by aggregate when sequence matters
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Coordination</td>
                                    <td className="px-4 py-3">
                                        Choreography decouples; orchestration makes flows visible
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Operational practices that hold over time
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Asynchronous systems fail quietly; instrumentation is what makes them
                            operable:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong className="text-white">Trace across the boundary.</strong>{" "}
                                Propagate a correlation ID through every event so you can reconstruct
                                a flow that spans services — see{" "}
                                <Link
                                    href="/blog/observability-for-startups-2026"
                                    className="text-sky-400 hover:underline"
                                >
                                    observability for startups
                                </Link>
                                .
                            </li>
                            <li>
                                <strong className="text-white">Version events from day one.</strong>{" "}
                                Add fields, never repurpose them; consumers you do not control will
                                break otherwise.
                            </li>
                            <li>
                                <strong className="text-white">Watch consumer lag.</strong> A
                                consumer falling behind is the early warning that capacity or a poison
                                message is about to become an incident.
                            </li>
                        </ul>
                        <p>
                            If your events drive notifications or third-party callbacks, the
                            signature-verification and idempotency patterns in our{" "}
                            <Link
                                href="/blog/stripe-webhook-security-best-practices"
                                className="text-sky-400 hover:underline"
                            >
                                Stripe webhook security guide
                            </Link>{" "}
                            apply directly.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Frequently asked questions
                    </h2>
                    <div className="space-y-6">
                        {faqs.map((item) => (
                            <div
                                key={item.q}
                                className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6"
                            >
                                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                                <p className="text-gray-300 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <Sources items={sources} />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Related reading and next steps
                    </h2>
                    <ul className="space-y-3">
                        {[
                            { href: "/blog/background-jobs-and-queues-in-production-2026", label: "Background jobs and queues in production" },
                            { href: "/blog/scaling-a-saas-database-guide-2026", label: "Scaling a SaaS database (2026)" },
                            { href: "/blog/api-rate-limiting-strategies-2026", label: "API rate limiting strategies (2026)" },
                            { href: "/blog/stripe-webhook-security-best-practices", label: "Stripe webhook security best practices" },
                            { href: "/blog/observability-for-startups-2026", label: "Observability for startups (2026)" },
                            { href: "/services", label: "SaaS platform development services" },
                            { href: "/blog", label: "All engineering articles" },
                            { href: "/contact", label: "Talk to Bill about your architecture" },
                        ].map((l) => (
                            <li key={l.href} className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-sky-400 flex-shrink-0" />
                                <Link href={l.href} className="text-sky-400 hover:underline">
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <EditorialFooter reviewedDate={PUBLISHED} />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Decouple deliberately. Build it to be debuggable.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            We design event-driven systems with the outbox, idempotency, and
                            tracing built in — and we&apos;ll tell you honestly when a queue is the
                            better answer. Book a free scoping call.
                        </p>
                        <ConsultationCTA
                            label="Book the Scoping Call"
                            service="SaaS Platform Development"
                            source="blog-event-driven-cta"
                        />
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mt-16 mb-12">
                    <RelatedPosts
                        currentSlug={SLUG}
                        topics={["saas", "stack"]}
                        pinned={[
                            "scaling-a-saas-database-guide-2026",
                            "building-multi-tenant-saas-postgres-rls",
                        ]}
                        heading="More engineering reading"
                    />
                </AnimatedSection>

                <AnimatedSection className="mt-12">
                    <div className="flex items-center justify-between text-sm text-gray-400">
                        <Link
                            href="/blog"
                            className="hover:text-sky-400 inline-flex items-center gap-1"
                        >
                            <ArrowRight className="w-3 h-3 rotate-180" /> All blog posts
                        </Link>
                        <span>Updated June 3, 2026</span>
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
