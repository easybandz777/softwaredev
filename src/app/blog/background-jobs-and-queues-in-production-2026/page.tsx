import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AuthorByline } from "@/components/AuthorByline";
import { EditorialFooter } from "@/components/EditorialFooter";
import { Sources } from "@/components/Sources";
import { ArrowRight, Check, ListChecks } from "lucide-react";
import { articleMetadata } from "@/lib/seoMeta";
import { articleSchema, faqSchema } from "@/lib/schemas";
import { getAuthor, authorUrl } from "@/lib/authors";

const SLUG = "background-jobs-and-queues-in-production-2026";
const PUBLISHED = "2026-06-03";
const TITLE = "Background Jobs & Queues in Production (2026)";
const author = getAuthor("bill-beltz");

export const metadata: Metadata = articleMetadata({
    title: "Background Jobs & Queues in Production: 2026 Guide",
    description:
        "Run background jobs reliably: idempotency, retries with backoff, dead-letter queues, concurrency, scheduling, and graceful shutdown — with code and failure modes.",
    slug: `blog/${SLUG}`,
    image: "/og-image.png",
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    authors: [author.name],
    keywords: [
        "background jobs in production",
        "job queue retries backoff",
        "dead letter queue pattern",
        "idempotent worker 2026",
    ],
});

const faqs = [
    {
        q: "What work belongs in a background job versus the request?",
        a: "Move anything slow, external, or failure-prone out of the request path: sending email, generating reports or PDFs, calling third-party APIs, image and video processing, and bulk database operations. The request should do the minimum to be correct — validate, persist, enqueue — and return quickly. Keeping a slow or flaky operation inline ties your response time and reliability to a dependency you do not control, and blocks a web worker that could be serving other users.",
    },
    {
        q: "Why must background jobs be idempotent?",
        a: "Because every reliable queue retries, and retries mean a job can run more than once. A worker can crash after doing its work but before acknowledging the message, so the queue redelivers it. An idempotent job produces the same result whether it runs once or three times — by checking whether the work is already done, using a unique key on the side effect, or making the operation a safe upsert. Without idempotency, retries send duplicate emails and double-charge customers.",
    },
    {
        q: "How should job retries and backoff work?",
        a: "Retry transient failures automatically with exponential backoff and jitter so a flaky dependency is not hammered by synchronized retries. Cap the number of attempts, then move the job to a dead-letter queue rather than retrying forever. Distinguish retryable errors (a timeout, a 503) from permanent ones (a validation failure, a 400) — retrying a permanent error wastes capacity and delays the inevitable. Always pair retries with idempotency, or you multiply side effects.",
    },
    {
        q: "What is a dead-letter queue?",
        a: "A dead-letter queue (DLQ) is where messages go after they exhaust their retry budget or are rejected as un-processable. It prevents a single poison message — one that fails every time — from blocking the queue or looping forever. The DLQ turns a silent, repeating failure into a visible backlog you can inspect, fix, and replay. A DLQ with no alerting is just a place jobs go to die quietly, so always monitor its depth.",
    },
    {
        q: "How do you handle graceful shutdown of workers?",
        a: "When a worker receives a termination signal during a deploy or scale-down, it should stop accepting new jobs, finish or safely checkpoint the job in flight, acknowledge or release it, and only then exit. Without graceful shutdown, an in-progress job is killed mid-execution, which either loses work or — if the queue redelivers — relies entirely on idempotency to avoid corruption. Set a shutdown timeout slightly under your platform's kill deadline so cleanup actually completes.",
    },
    {
        q: "Should you use a database-backed queue or a dedicated broker?",
        a: "For small to mid-sized SaaS, a database-backed queue (using SELECT ... FOR UPDATE SKIP LOCKED in Postgres) is often the right call — it reuses infrastructure you already operate, gives you transactional enqueue, and is simple to reason about. Move to a dedicated broker like Redis-backed queues, SQS, or Kafka when throughput, fan-out, or routing needs outgrow what a database table handles comfortably. Do not adopt heavy messaging infrastructure before the workload justifies the operational cost.",
    },
];

const sources = [
    {
        label: "PostgreSQL — SELECT FOR UPDATE SKIP LOCKED",
        href: "https://www.postgresql.org/docs/current/sql-select.html#SQL-FOR-UPDATE-SHARE",
        publisher: "PostgreSQL",
    },
    {
        label: "AWS — Amazon SQS dead-letter queues",
        href: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html",
        publisher: "Amazon Web Services",
    },
    {
        label: "AWS Builders' Library — Timeouts, retries, and backoff with jitter",
        href: "https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/",
        publisher: "Amazon Web Services",
    },
    {
        label: "Google SRE — Addressing cascading failures",
        href: "https://sre.google/sre-book/addressing-cascading-failures/",
        publisher: "Google",
    },
];

export default function BackgroundJobsPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        articleSchema({
                            headline:
                                "Background Jobs & Queues in Production: 2026 Guide",
                            description:
                                "Idempotency, retries with backoff, dead-letter queues, concurrency, scheduling, and graceful shutdown for production workers.",
                            datePublished: PUBLISHED,
                            slug: SLUG,
                            image: "https://quantlabusa.dev/og-image.png",
                            author: { name: author.name, url: authorUrl(author.slug) },
                            section: "Engineering",
                            keywords: [
                                "background jobs in production",
                                "job queue retries backoff",
                                "dead letter queue pattern",
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
                        <ListChecks className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs uppercase tracking-widest text-sky-400 mb-3">
                        Backend Engineering · 2026
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                        Background Jobs &amp; Queues in Production: A 2026 Guide
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed mb-6 max-w-2xl">
                        Almost every real app needs to do work outside the request — send mail,
                        process files, call third-party APIs. Doing it reliably is harder than it
                        looks. This guide covers idempotency, retries, dead-letter queues,
                        concurrency, and graceful shutdown for production workers.
                    </p>
                    <AuthorByline
                        author={author}
                        publishedDate={PUBLISHED}
                        readMinutes={12}
                        className="mb-8"
                    />
                    <ConsultationCTA
                        label="Talk Through Your Job System"
                        service="Custom Software Development"
                        source="blog-background-jobs"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Quick answer
                        </h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>
                                Move slow, external, or flaky work out of the request and into
                                background jobs. Make every job idempotent because the queue will
                                retry it, use exponential backoff with jitter on transient failures,
                                and send exhausted jobs to a dead-letter queue you monitor. Bound
                                concurrency so workers do not overwhelm downstreams, handle
                                termination signals with graceful shutdown, and start with a
                                database-backed queue before reaching for a dedicated broker you do
                                not yet need.
                            </strong>
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            A background job system looks trivial in a demo and reveals its
                            complexity the first time a worker crashes mid-job in production. The
                            patterns that matter are about failure, not the happy path. We build
                            and operate these systems for a living, and our{" "}
                            <Link href="/services" className="text-sky-400 hover:underline">
                                custom software practice
                            </Link>{" "}
                            treats reliability as the default. If your jobs react to domain events
                            rather than direct enqueues, pair this with{" "}
                            <Link
                                href="/blog/event-driven-architecture-for-saas-2026"
                                className="text-sky-400 hover:underline"
                            >
                                event-driven architecture for SaaS
                            </Link>
                            .
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        1. What belongs in a job
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            The request path should do the minimum to be correct and return fast.
                            Everything slow or unreliable moves to a worker.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                Sending email, SMS, and push notifications — never block a response
                                on an email provider&apos;s latency.
                            </li>
                            <li>
                                Calling third-party APIs you do not control, where a timeout would
                                otherwise become your timeout.
                            </li>
                            <li>
                                Report generation, PDF rendering, image and video processing, and
                                bulk imports or exports.
                            </li>
                            <li>
                                Fan-out work: one user action that triggers many downstream updates.
                            </li>
                        </ul>
                        <p>
                            The pattern in the request is always the same:{" "}
                            <strong className="text-white">validate, persist, enqueue, return.</strong>{" "}
                            The job does the heavy lifting after the user already has their answer.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        2. Idempotency: the non-negotiable
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Every reliable queue retries, and a worker can crash after completing
                            its side effect but before acknowledging the message. So every job will
                            occasionally run twice. Idempotency makes that harmless.
                        </p>
                        <pre className="overflow-x-auto rounded-xl border border-white/10 bg-[#0a1120] p-4 text-sm">
                            <code>{`// Idempotency key guards the side effect, not just the job
async function sendInvoiceEmail(job) {
  const key = \`invoice-email:\${job.invoiceId}\`;
  const claimed = await db.idempotency.tryInsert(key); // unique row
  if (!claimed) return; // already sent on a prior attempt

  await email.send(renderInvoice(job.invoiceId));
  // If we crash here, the key exists, so a retry safely no-ops.
}`}</code>
                        </pre>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                Derive a stable idempotency key from the job&apos;s inputs, not a
                                random value generated at run time.
                            </li>
                            <li>
                                Prefer naturally idempotent operations — an upsert, a
                                set-status-to-X — over check-then-act where you can.
                            </li>
                            <li>
                                Pass idempotency keys through to third-party APIs that support them
                                (Stripe, for example) so the provider dedupes too.
                            </li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        3. Retries, backoff, and dead-letter queues
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Transient failures are normal — a momentary timeout, a rate-limited
                            dependency, a brief network blip. Retry them, but intelligently.
                        </p>
                        <pre className="overflow-x-auto rounded-xl border border-white/10 bg-[#0a1120] p-4 text-sm">
                            <code>{`// Exponential backoff with full jitter, capped attempts
function nextDelayMs(attempt) {
  const base = Math.min(30_000, 1000 * 2 ** attempt); // cap at 30s
  return Math.floor(Math.random() * base);            // full jitter
}

// On failure: if attempt < MAX and error is retryable, requeue
// with nextDelayMs(attempt); otherwise route to the dead-letter queue.`}</code>
                        </pre>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                Use exponential backoff <em>with jitter</em> so retries from many
                                workers do not synchronize into a thundering herd on the dependency.
                            </li>
                            <li>
                                Separate retryable errors (timeout, 503) from permanent ones (400,
                                validation) — never retry a request that cannot succeed.
                            </li>
                            <li>
                                Cap attempts and route exhausted jobs to a{" "}
                                <strong className="text-white">dead-letter queue</strong> so one
                                poison message cannot block the stream or loop forever.
                            </li>
                            <li>
                                Alert on DLQ depth. A dead-letter queue nobody watches is just a
                                silent failure with extra steps.
                            </li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        4. Concurrency, scheduling, and shutdown
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Once jobs run reliably, the operational concerns are how many run at
                            once, when recurring ones fire, and what happens on deploy.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong className="text-white">Bound concurrency.</strong> Limit
                                workers per queue and per downstream so a backlog burst does not
                                overwhelm your database or a third-party API. Pair this with the same
                                thinking as{" "}
                                <Link
                                    href="/blog/api-rate-limiting-strategies-2026"
                                    className="text-sky-400 hover:underline"
                                >
                                    API rate limiting
                                </Link>
                                .
                            </li>
                            <li>
                                <strong className="text-white">Scheduling.</strong> For recurring
                                work, ensure only one instance fires each tick — a distributed lock
                                or a single scheduler — so three app servers do not run the nightly
                                job three times.
                            </li>
                            <li>
                                <strong className="text-white">Graceful shutdown.</strong> On a
                                termination signal, stop pulling new jobs, finish or checkpoint the
                                one in flight, ack or release it, then exit — within a timeout under
                                the platform&apos;s kill deadline.
                            </li>
                            <li>
                                <strong className="text-white">Visibility timeout.</strong> Set it
                                longer than your slowest job so the queue does not redeliver work
                                that is still running.
                            </li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Mid-post: start with the queue you already operate
                    </h2>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-8 text-center">
                        <p className="text-gray-300 mb-6">
                            A Postgres-backed queue with SKIP LOCKED handles more load than most
                            teams expect — and avoids new infrastructure you would have to run.
                            Want help right-sizing your job system? Book a free scoping call.
                        </p>
                        <ConsultationCTA
                            label="Right-Size My Queue"
                            service="Custom Software Development"
                            source="blog-background-jobs-mid"
                        />
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Failure modes and their defenses
                    </h2>
                    <div className="overflow-x-auto mt-4">
                        <table className="w-full text-sm text-left border border-white/10 rounded-xl overflow-hidden">
                            <thead className="bg-[#0d1526] text-white">
                                <tr>
                                    <th className="px-4 py-3 border-b border-white/10">
                                        Failure mode
                                    </th>
                                    <th className="px-4 py-3 border-b border-white/10">Defense</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Duplicate run</td>
                                    <td className="px-4 py-3">
                                        Idempotency key on the side effect
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Transient error</td>
                                    <td className="px-4 py-3">
                                        Retry with exponential backoff + jitter
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Poison message</td>
                                    <td className="px-4 py-3">
                                        Capped attempts → dead-letter queue + alert
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Overloaded downstream</td>
                                    <td className="px-4 py-3">
                                        Bounded concurrency and per-dependency limits
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Deploy mid-job</td>
                                    <td className="px-4 py-3">
                                        Graceful shutdown + adequate visibility timeout
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Duplicate schedule</td>
                                    <td className="px-4 py-3">
                                        Distributed lock or single scheduler per tick
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
                            A queue is a system you operate, not a fire-and-forget library:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong className="text-white">Watch queue depth and age.</strong> A
                                growing backlog or rising oldest-message age is your earliest signal
                                that capacity is short — see{" "}
                                <Link
                                    href="/blog/observability-for-startups-2026"
                                    className="text-sky-400 hover:underline"
                                >
                                    observability for startups
                                </Link>
                                .
                            </li>
                            <li>
                                <strong className="text-white">Make jobs replayable.</strong> When
                                you fix a bug, you want to drain the DLQ back through the corrected
                                worker, not lose the work.
                            </li>
                            <li>
                                <strong className="text-white">Keep payloads small.</strong> Enqueue
                                an ID and re-fetch inside the job; a fat payload goes stale and bloats
                                the queue.
                            </li>
                        </ul>
                        <p>
                            If a job runs long-lived database changes, the batching and idempotency
                            rules from our{" "}
                            <Link
                                href="/blog/database-migrations-without-downtime-2026"
                                className="text-sky-400 hover:underline"
                            >
                                zero-downtime migrations guide
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
                            { href: "/blog/event-driven-architecture-for-saas-2026", label: "Event-driven architecture for SaaS" },
                            { href: "/blog/api-rate-limiting-strategies-2026", label: "API rate limiting strategies (2026)" },
                            { href: "/blog/database-migrations-without-downtime-2026", label: "Database migrations without downtime" },
                            { href: "/blog/caching-strategies-for-saas-2026", label: "Caching strategies for SaaS (2026)" },
                            { href: "/blog/observability-for-startups-2026", label: "Observability for startups (2026)" },
                            { href: "/services", label: "Custom software development services" },
                            { href: "/blog", label: "All engineering articles" },
                            { href: "/contact", label: "Talk to Bill about your backend" },
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
                            Reliable work, even when things fail.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            We build background job systems with idempotency, retries, and
                            dead-letter handling designed in from the start. Book a free scoping
                            call to talk through your workload.
                        </p>
                        <ConsultationCTA
                            label="Book the Scoping Call"
                            service="Custom Software Development"
                            source="blog-background-jobs-cta"
                        />
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mt-16 mb-12">
                    <RelatedPosts
                        currentSlug={SLUG}
                        topics={["stack", "saas"]}
                        pinned={[
                            "scaling-a-saas-database-guide-2026",
                            "nextjs-16-app-router-guide-2026",
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
