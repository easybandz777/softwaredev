import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is Observability? Plain-English Guide (2026) | QUANT LAB USA",
    description:
        "Observability is the ability to understand a system's internal state from its outputs. Plain-English definition, the three pillars, vs monitoring. By QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-observability" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Observability",
    description:
        "Observability is the degree to which you can understand a system's internal state by examining the data it emits — logs, metrics, and traces — so you can answer new questions about its behavior without shipping new code.",
    url: "https://quantlabusa.dev/glossary/what-is-observability",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "Observability", item: "https://quantlabusa.dev/glossary/what-is-observability" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is observability in one sentence?", acceptedAnswer: { "@type": "Answer", text: "Observability is the ability to understand what is happening inside a system — and ask new questions about it — purely from the data it emits, such as logs, metrics, and traces, without having to ship new instrumentation first." } },
        { "@type": "Question", name: "What are the three pillars of observability?", acceptedAnswer: { "@type": "Answer", text: "Logs (timestamped records of discrete events), metrics (numeric measurements aggregated over time), and traces (the path of a single request across services). Together they let you move from 'something is wrong' to 'here is exactly where and why.'" } },
        { "@type": "Question", name: "What is the difference between observability and monitoring?", acceptedAnswer: { "@type": "Answer", text: "Monitoring tells you whether known conditions are happening — dashboards and alerts for things you predicted. Observability lets you investigate problems you did not predict by querying rich data after the fact. Monitoring is a subset of observability." } },
        { "@type": "Question", name: "What is OpenTelemetry?", acceptedAnswer: { "@type": "Answer", text: "OpenTelemetry (OTel) is a vendor-neutral open standard and set of libraries for generating and exporting logs, metrics, and traces. It lets you instrument code once and send the data to any compatible backend, avoiding lock-in." } },
        { "@type": "Question", name: "What are SLIs, SLOs, and error budgets?", acceptedAnswer: { "@type": "Answer", text: "An SLI is a service level indicator — a measurement like request latency. An SLO is the target for that indicator, like 99.9% of requests under 300ms. The error budget is how much you are allowed to miss the SLO before you must stop shipping risky changes." } },
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
                        <li className="text-gray-300">Observability</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Infrastructure</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is Observability?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        Observability is how well you can understand what is happening inside a running system just from the data it emits — its logs, metrics, and traces — so that when something breaks in a way nobody predicted, you can ask new questions of that data and find the answer without first shipping new code to go look.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The term, borrowed from control theory</h2>
                    <p>
                        "Observability" comes from control theory, where it measures how
                        well a system's internal state can be inferred from its external
                        outputs. The software industry adopted the word as architectures
                        shifted from a handful of servers to sprawling distributed systems
                        of microservices, queues, and managed cloud services. In that
                        world, the old question "is the server up?" stopped being useful;
                        the hard problems became "why is this one request slow?" and "why
                        is this customer seeing errors when nobody else is?" — questions
                        you cannot answer with a binary health check.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Observability vs. monitoring</h2>
                    <p>
                        The two are often conflated, but the distinction is real.
                        Monitoring watches for conditions you already know to look for:
                        CPU over 90%, error rate above a threshold, disk nearly full. It
                        is about known unknowns. Observability is about unknown unknowns —
                        the failure modes you did not anticipate. A monitored system tells
                        you that something is wrong; an observable system lets you explore
                        the rich data it emits to discover why, even for a problem you have
                        never seen before. Monitoring is best understood as a subset of
                        observability, not a competitor to it.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The three pillars</h2>
                    <p>
                        Most observability practice rests on three kinds of telemetry.
                        Logs are timestamped records of discrete events — useful for the
                        detail of what happened at a specific moment. Metrics are numeric
                        measurements aggregated over time — request counts, latencies,
                        queue depths — cheap to store and ideal for dashboards and alerts.
                        Traces follow a single request as it travels across every service
                        it touches, which is the only way to see where latency actually
                        accumulates in a distributed call. The deep version of traces gets
                        its own treatment under{" "}
                        <Link href="/glossary/what-is-distributed-tracing" className="text-sky-400 hover:underline">distributed tracing</Link>.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">OpenTelemetry and avoiding lock-in</h2>
                    <p>
                        For years, instrumenting an application meant committing to a
                        specific vendor's agent and SDK. OpenTelemetry — usually shortened
                        to OTel — changed that. It is a vendor-neutral open standard, now
                        a CNCF project, that defines how to generate and export logs,
                        metrics, and traces. You instrument your code against OTel once and
                        can send the resulting telemetry to Datadog, Grafana, Honeycomb,
                        New Relic, or an open-source stack, switching backends without
                        re-instrumenting. For teams that care about not being locked into a
                        single observability vendor, OTel is the practical foundation.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">SLIs, SLOs, and error budgets</h2>
                    <p>
                        Observability data becomes a management tool through service level
                        objectives. A service level indicator (SLI) is a measurement that
                        reflects user experience — the fraction of requests served under
                        300 milliseconds, say. A service level objective (SLO) is the
                        target for that indicator over a window, such as 99.9% over thirty
                        days. The gap between the target and 100% is the error budget: how
                        much unreliability you can spend. When the budget is healthy, ship
                        fast; when it is exhausted, slow down and stabilize. This reframes
                        reliability from a vague aspiration into a number teams can plan
                        against.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        We build observability into systems from the start rather than
                        bolting it on after the first outage. The platforms we ship under{" "}
                        <Link href="/services/devops-engineering" className="text-sky-400 hover:underline">DevOps engineering</Link>{" "}
                        and{" "}
                        <Link href="/services/cloud-infrastructure" className="text-sky-400 hover:underline">cloud infrastructure</Link>{" "}
                        come instrumented with structured logs, meaningful metrics, and
                        traces tied to real user journeys, so when something goes wrong the
                        client can find it in minutes instead of guessing. Good
                        observability also pairs naturally with{" "}
                        <Link href="/glossary/what-is-chaos-engineering" className="text-sky-400 hover:underline">chaos engineering</Link>{" "}
                        and{" "}
                        <Link href="/glossary/what-is-load-testing" className="text-sky-400 hover:underline">load testing</Link>:
                        there is no point breaking a system deliberately or pushing it to
                        its limits if you cannot see what happened.
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
                        <li><Link href="/glossary/what-is-distributed-tracing" className="text-sky-400 hover:underline">What is distributed tracing?</Link></li>
                        <li><Link href="/glossary/what-is-chaos-engineering" className="text-sky-400 hover:underline">What is chaos engineering?</Link></li>
                        <li><Link href="/glossary/what-is-load-testing" className="text-sky-400 hover:underline">What is load testing?</Link></li>
                        <li><Link href="/glossary/what-is-infrastructure-as-code" className="text-sky-400 hover:underline">What is infrastructure as code?</Link></li>
                        <li><Link href="/glossary/what-is-caching" className="text-sky-400 hover:underline">What is caching?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Flying blind in production?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We instrument systems with logs, metrics, and traces so you can
                        find and fix problems before customers do. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-observability" />
                        <Link href="/services/devops-engineering" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            DevOps engineering
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
