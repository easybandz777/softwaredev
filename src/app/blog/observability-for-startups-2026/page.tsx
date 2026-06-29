import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AuthorByline } from "@/components/AuthorByline";
import { EditorialFooter } from "@/components/EditorialFooter";
import { Sources } from "@/components/Sources";
import { ArrowRight, Check, Activity } from "lucide-react";
import { articleMetadata } from "@/lib/seoMeta";
import { articleSchema, faqSchema } from "@/lib/schemas";
import { getAuthor, authorUrl } from "@/lib/authors";

const SLUG = "observability-for-startups-2026";
const PUBLISHED = "2026-06-03";
const TITLE = "Observability for Startups (2026)";
const author = getAuthor("bill-beltz");

export const metadata: Metadata = articleMetadata({
    title: "Observability for Startups: A Practical 2026 Guide",
    description:
        "The three pillars — logs, metrics, traces — plus structured logging, the four golden signals, SLOs, error budgets, and actionable alerts a small team can run.",
    slug: `blog/${SLUG}`,
    image: "/og-image.png",
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    authors: [author.name],
    keywords: [
        "observability for startups",
        "logs metrics traces",
        "four golden signals slo",
        "structured logging 2026",
    ],
});

const faqs = [
    {
        q: "What is the difference between monitoring and observability?",
        a: "Monitoring tells you whether known conditions are true — is CPU high, is the site up — using dashboards and alerts you defined in advance. Observability is the ability to ask new questions about your system's behavior without shipping new code, by exploring rich telemetry after the fact. Monitoring answers 'is it broken?'; observability answers 'why is it broken, for whom, and since when?' You need both: monitoring catches the known failure modes, observability lets you debug the ones you never anticipated.",
    },
    {
        q: "What are the three pillars of observability?",
        a: "Logs, metrics, and traces. Logs are timestamped records of discrete events — ideally structured as JSON so they are queryable. Metrics are numeric measurements aggregated over time, like request rate or error percentage, cheap to store and ideal for alerting. Traces follow a single request across services and components, showing where time went and where it failed. Each pillar answers a different question, and together they let you move from 'something is wrong' to a specific line of code.",
    },
    {
        q: "What are the four golden signals?",
        a: "From Google's SRE practice, the four golden signals are latency (how long requests take), traffic (how much demand the system is under), errors (the rate of failing requests), and saturation (how full your most constrained resource is). If a small team instruments only four things, these are the four. They cover the vast majority of user-facing problems and give you a compact, high-signal dashboard before you invest in anything more elaborate.",
    },
    {
        q: "What is an SLO and an error budget?",
        a: "A service level objective (SLO) is a target for reliability, such as 99.9% of requests succeeding over 30 days. The error budget is the allowed shortfall — the 0.1% you can fail without breaching the objective. The budget turns reliability into a quantitative decision: while you have budget, ship features; when you burn through it, stop and invest in stability. It replaces arguments about whether something is 'reliable enough' with a number both engineering and the business agree on.",
    },
    {
        q: "Why is structured logging important?",
        a: "Structured logs emit machine-parseable key-value records (typically JSON) instead of free-form text, so you can filter, aggregate, and correlate them — 'show every error for tenant 42 in the last hour' becomes a query rather than a grep. Free-text logs are fine for a single developer reading a terminal, but they do not scale to a production system where you need to slice by user, request ID, or endpoint. Structured logging with a consistent schema is the cheapest high-leverage observability investment a startup can make.",
    },
    {
        q: "How do you avoid alert fatigue?",
        a: "Alert on symptoms users feel, not on every internal metric. A good alert is actionable, urgent, and tied to an SLO or a clear user impact — high error rate, latency past a threshold, a queue backing up. Page a human only for things that need immediate action; route everything else to a dashboard or a ticket. Every alert that fires without requiring action trains the team to ignore alerts, so prune noisy ones aggressively. Fewer, sharper alerts beat a wall of warnings nobody reads.",
    },
];

const sources = [
    {
        label: "Google SRE Book — Monitoring Distributed Systems (Golden Signals)",
        href: "https://sre.google/sre-book/monitoring-distributed-systems/",
        publisher: "Google",
    },
    {
        label: "Google SRE Workbook — Implementing SLOs",
        href: "https://sre.google/workbook/implementing-slos/",
        publisher: "Google",
    },
    {
        label: "OpenTelemetry — What is OpenTelemetry?",
        href: "https://opentelemetry.io/docs/what-is-opentelemetry/",
        publisher: "OpenTelemetry / CNCF",
    },
    {
        label: "Google SRE Book — Service Level Objectives",
        href: "https://sre.google/sre-book/service-level-objectives/",
        publisher: "Google",
    },
];

export default function ObservabilityPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        articleSchema({
                            headline:
                                "Observability for Startups: A Practical 2026 Guide",
                            description:
                                "Logs, metrics, traces, structured logging, the four golden signals, SLOs, error budgets, and actionable alerts for small teams.",
                            datePublished: PUBLISHED,
                            slug: SLUG,
                            image: "https://quantlabusa.dev/og-image.png",
                            author: { name: author.name, url: authorUrl(author.slug) },
                            section: "Engineering",
                            keywords: [
                                "observability for startups",
                                "logs metrics traces",
                                "four golden signals slo",
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
                        <Activity className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs uppercase tracking-widest text-sky-400 mb-3">
                        Reliability Engineering · 2026
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                        Observability for Startups: A Practical 2026 Guide
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed mb-6 max-w-2xl">
                        You cannot fix what you cannot see. But a small team does not need a
                        six-figure observability stack — it needs the right handful of signals.
                        This guide covers logs, metrics, and traces, the four golden signals,
                        SLOs, and alerts that fire only when a human should act.
                    </p>
                    <AuthorByline
                        author={author}
                        publishedDate={PUBLISHED}
                        readMinutes={12}
                        className="mb-8"
                    />
                    <ConsultationCTA
                        label="Talk Through Your Stack"
                        service="Custom Software Development"
                        source="blog-observability"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Quick answer
                        </h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>
                                Start with structured (JSON) logs, the four golden signals —
                                latency, traffic, errors, saturation — and distributed tracing tied
                                together by a request ID. Define one or two SLOs and let the error
                                budget decide when to ship versus stabilize. Alert only on
                                user-facing symptoms that require immediate action, and route
                                everything else to dashboards. Use OpenTelemetry so your
                                instrumentation is portable, and resist buying a heavyweight stack
                                before your traffic justifies it.
                            </strong>
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Observability has a reputation as an enterprise concern with an
                            enterprise price tag. It is not. The principles scale down cleanly, and
                            a startup that instruments the right few things debugs incidents in
                            minutes instead of hours. We build and operate production systems for a
                            living, and our{" "}
                            <Link href="/services" className="text-sky-400 hover:underline">
                                custom software practice
                            </Link>{" "}
                            wires observability in from the first deploy. It is also the connective
                            tissue under every other engineering topic — migrations, queues,
                            caching, and events all need to be observed to be operated safely.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        1. The three pillars: logs, metrics, traces
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Each pillar answers a different question. You want all three, but they
                            are not interchangeable.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong className="text-white">Logs</strong> — discrete,
                                timestamped events. Best for the detail of what happened in one
                                place. Make them structured so they are queryable.
                            </li>
                            <li>
                                <strong className="text-white">Metrics</strong> — numeric values
                                aggregated over time (request rate, error percent, p95 latency).
                                Cheap to store and the right basis for alerting.
                            </li>
                            <li>
                                <strong className="text-white">Traces</strong> — the path of one
                                request across services and components, showing where time went and
                                where it failed.
                            </li>
                        </ul>
                        <p>
                            The thread that ties them together is a{" "}
                            <strong className="text-white">request (correlation) ID</strong>{" "}
                            propagated through logs, spans, and downstream calls. With it, a metric
                            spike leads to a trace leads to the exact log line. Without it, you are
                            grepping in the dark.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        2. Structured logging from day one
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Free-text logs are fine for a developer reading a terminal and useless
                            at production scale. Emit structured records with a consistent schema so
                            &quot;every error for this tenant in the last hour&quot; is a query, not
                            a grep.
                        </p>
                        <pre className="overflow-x-auto rounded-xl border border-white/10 bg-[#0a1120] p-4 text-sm">
                            <code>{`// Structured log line — queryable, correlatable, safe
logger.info({
  msg: "order.created",
  requestId: ctx.requestId,   // ties to trace + other logs
  tenantId: ctx.tenantId,
  orderId: order.id,
  amountCents: order.amountCents,
  durationMs: timer.elapsed(),
  // never log secrets, tokens, full PANs, or raw PII
});`}</code>
                        </pre>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                Standardize the fields every log carries: timestamp, level, message,
                                request ID, tenant ID.
                            </li>
                            <li>
                                Log at the boundaries — request in/out, external call in/out — and on
                                every error with enough context to act.
                            </li>
                            <li>
                                Never log secrets, tokens, or raw personal data. A log store is a
                                breach target; treat it like one. Our{" "}
                                <Link
                                    href="/blog/api-security-best-practices-2026"
                                    className="text-sky-400 hover:underline"
                                >
                                    API security guide
                                </Link>{" "}
                                covers the secrets-handling side.
                            </li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        3. The four golden signals
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            If you instrument only four things, instrument these. Google&apos;s SRE
                            practice distilled them from years of running large systems, and they
                            cover the overwhelming majority of user-facing problems.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong className="text-white">Latency.</strong> How long requests
                                take — track p50, p95, and p99, and measure failed and successful
                                requests separately.
                            </li>
                            <li>
                                <strong className="text-white">Traffic.</strong> Demand on the system
                                — requests per second, by endpoint.
                            </li>
                            <li>
                                <strong className="text-white">Errors.</strong> The rate of failing
                                requests, including the slow successes that are effectively failures.
                            </li>
                            <li>
                                <strong className="text-white">Saturation.</strong> How full your
                                most constrained resource is — CPU, memory, connection pool, queue
                                depth.
                            </li>
                        </ul>
                        <p>
                            These four make a compact, high-signal dashboard you can stand up in an
                            afternoon — and they are exactly the signals that tell you whether a
                            migration, a queue backlog, or a cache miss storm is hurting users right
                            now.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        4. SLOs, error budgets, and alerts that matter
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            An <strong className="text-white">SLO</strong> turns &quot;reliable
                            enough&quot; into a number — say, 99.9% of requests succeed over 30
                            days. The <strong className="text-white">error budget</strong> is the
                            0.1% you are allowed to fail. While budget remains, ship features; when
                            it is spent, stop and invest in stability. It replaces opinion with a
                            shared metric.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                Pick one or two SLOs that reflect what users actually feel —
                                availability and latency of the core flow — not a dozen internal
                                metrics.
                            </li>
                            <li>
                                Alert on <strong className="text-white">symptoms</strong>, not
                                causes: page when the error rate or latency breaches the SLO, not
                                when CPU ticks up.
                            </li>
                            <li>
                                Every page should be urgent and actionable. Route the rest to
                                dashboards and tickets — alert fatigue is a reliability risk in
                                itself.
                            </li>
                            <li>
                                Consider burn-rate alerts that fire faster when the budget is being
                                consumed quickly and slower when it is a gradual drift.
                            </li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Mid-post: instrument before you scale, not after
                    </h2>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-8 text-center">
                        <p className="text-gray-300 mb-6">
                            The cheapest time to wire in observability is before your first
                            incident, not during it. Want help standing up the right signals for
                            your stack? Book a free scoping call.
                        </p>
                        <ConsultationCTA
                            label="Set Up My Observability"
                            service="Custom Software Development"
                            source="blog-observability-mid"
                        />
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        What to instrument first, by priority
                    </h2>
                    <div className="overflow-x-auto mt-4">
                        <table className="w-full text-sm text-left border border-white/10 rounded-xl overflow-hidden">
                            <thead className="bg-[#0d1526] text-white">
                                <tr>
                                    <th className="px-4 py-3 border-b border-white/10">Step</th>
                                    <th className="px-4 py-3 border-b border-white/10">
                                        What it gives you
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">1. Error tracking</td>
                                    <td className="px-4 py-3">
                                        Grouped exceptions with stack traces and context
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">2. Structured logs</td>
                                    <td className="px-4 py-3">
                                        Queryable events correlated by request ID
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">3. Golden signals</td>
                                    <td className="px-4 py-3">
                                        Latency, traffic, errors, saturation on one dashboard
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">4. Uptime check</td>
                                    <td className="px-4 py-3">
                                        External probe so you hear before your users do
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">5. Tracing</td>
                                    <td className="px-4 py-3">
                                        Per-request path across services to localize slowness
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">6. SLOs + alerts</td>
                                    <td className="px-4 py-3">
                                        Symptom-based paging tied to an error budget
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
                            Observability is a practice, not a purchase. A few habits keep it useful
                            as you grow:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong className="text-white">Use OpenTelemetry.</strong> A vendor-
                                neutral standard for logs, metrics, and traces keeps your
                                instrumentation portable when you change backends.
                            </li>
                            <li>
                                <strong className="text-white">Watch the systems that fail
                                quietly.</strong> Queue depth, replication lag, and cache hit rate
                                are the early warnings behind topics like{" "}
                                <Link
                                    href="/blog/background-jobs-and-queues-in-production-2026"
                                    className="text-sky-400 hover:underline"
                                >
                                    background jobs
                                </Link>{" "}
                                and{" "}
                                <Link
                                    href="/blog/caching-strategies-for-saas-2026"
                                    className="text-sky-400 hover:underline"
                                >
                                    caching
                                </Link>
                                .
                            </li>
                            <li>
                                <strong className="text-white">Mind cost and cardinality.</strong>{" "}
                                High-cardinality labels and verbose logs are the two things that blow
                                up an observability bill — sample and aggregate deliberately.
                            </li>
                        </ul>
                        <p>
                            And observe your riskiest changes most closely. The rollout discipline
                            in our{" "}
                            <Link
                                href="/blog/database-migrations-without-downtime-2026"
                                className="text-sky-400 hover:underline"
                            >
                                zero-downtime migrations guide
                            </Link>{" "}
                            depends entirely on having these signals in place.
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
                            { href: "/blog/caching-strategies-for-saas-2026", label: "Caching strategies for SaaS (2026)" },
                            { href: "/blog/database-migrations-without-downtime-2026", label: "Database migrations without downtime" },
                            { href: "/blog/event-driven-architecture-for-saas-2026", label: "Event-driven architecture for SaaS" },
                            { href: "/blog/api-rate-limiting-strategies-2026", label: "API rate limiting strategies (2026)" },
                            { href: "/services", label: "Custom software development services" },
                            { href: "/blog", label: "All engineering articles" },
                            { href: "/contact", label: "Talk to Bill about reliability" },
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
                            See the problem before your users do.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            We wire observability into the systems we build so incidents are
                            minutes, not hours. Book a free scoping call to set up the right
                            signals for your stack.
                        </p>
                        <ConsultationCTA
                            label="Book the Scoping Call"
                            service="Custom Software Development"
                            source="blog-observability-cta"
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
