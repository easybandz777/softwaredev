import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is Load Testing? Plain-English Guide (2026) | QUANT LAB USA",
    description:
        "Load testing simulates real traffic to find a system's limits before users do. Plain-English definition, types, metrics, tools. By QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-load-testing" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Load Testing",
    description:
        "Load testing is a type of performance testing that simulates expected and peak user traffic against a system to measure how it behaves under load, find its breaking point, and surface bottlenecks before real users encounter them.",
    url: "https://quantlabusa.dev/glossary/what-is-load-testing",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "Load Testing", item: "https://quantlabusa.dev/glossary/what-is-load-testing" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is load testing in one sentence?", acceptedAnswer: { "@type": "Answer", text: "Load testing simulates realistic user traffic against a system to measure how it performs under expected and peak demand, revealing bottlenecks and breaking points before real users hit them in production." } },
        { "@type": "Question", name: "What is the difference between load, stress, and soak testing?", acceptedAnswer: { "@type": "Answer", text: "Load testing checks behavior at expected traffic. Stress testing pushes past the limit to find the breaking point and how the system fails. Soak testing applies steady load for hours or days to catch slow problems like memory leaks." } },
        { "@type": "Question", name: "Why measure percentiles instead of averages?", acceptedAnswer: { "@type": "Answer", text: "Averages hide pain. A 200ms average can still mean the slowest 1% of users wait 5 seconds. Percentiles like p95 and p99 describe the tail of the distribution, which is where real users feel slowness, so they are the honest metric." } },
        { "@type": "Question", name: "What tools are used for load testing?", acceptedAnswer: { "@type": "Answer", text: "Common open-source tools include k6, Apache JMeter, Gatling, and Locust. They generate concurrent virtual users, script realistic request flows, and report throughput, latency percentiles, and error rates under increasing load." } },
        { "@type": "Question", name: "When should you run load tests?", acceptedAnswer: { "@type": "Answer", text: "Before a known traffic spike such as a launch or sale, when changing infrastructure, and ideally as a regular part of the pipeline so performance regressions are caught early rather than discovered during an outage." } },
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
                        <li className="text-gray-300">Load Testing</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Infrastructure</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is Load Testing?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        Load testing is the practice of simulating realistic user traffic against a system — hundreds or thousands of concurrent virtual users hammering it the way real customers would — to find out how it behaves under pressure, where it slows down, and exactly when it breaks, all before a real crowd shows up and finds out for you.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why "it works on my machine" is not enough</h2>
                    <p>
                        A system that responds instantly for one developer can collapse the
                        moment real traffic arrives. Database connections run out, a slow
                        query that was fine at ten requests a second falls over at ten
                        thousand, a memory leak that took a week to matter suddenly matters
                        in an hour. None of this shows up in functional tests, which check
                        that features are correct, not that they survive a crowd. Load
                        testing exists to answer a different question: not "does it work?"
                        but "does it still work when everyone shows up at once?"
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The family of performance tests</h2>
                    <p>
                        "Load testing" is often used loosely, but there are distinct
                        flavors. A load test applies the traffic you actually expect,
                        including peak, and confirms the system holds up. A stress test
                        deliberately pushes past the expected limit to discover the breaking
                        point and — just as important — how the system fails: does it
                        degrade gracefully or fall over completely? A spike test slams it
                        with a sudden surge to mimic a viral moment. A soak (or endurance)
                        test holds steady load for hours or days to catch slow killers like
                        memory leaks and connection exhaustion that only appear over time.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The metrics that matter</h2>
                    <p>
                        Throughput — requests per second the system can handle — is the
                        headline number, but latency is where the truth lives, and the key
                        is to look at percentiles rather than averages. An average response
                        time of 200 milliseconds can hide the fact that the slowest one
                        percent of users are waiting five seconds. That is why teams track
                        p95 and p99: the response time below which 95% or 99% of requests
                        fall. The tail of the distribution is what real users feel.
                        Alongside latency you watch the error rate as load climbs — the
                        point where errors spike is effectively the system's ceiling.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Doing it well</h2>
                    <p>
                        A load test is only as good as its realism. Tests should model
                        actual user journeys — log in, browse, add to cart, check out — not
                        just hammer a single endpoint, and they should use realistic data
                        and think-time between actions. They must run against an environment
                        that resembles production, because a test against an undersized
                        staging box tells you about the staging box, not your real capacity.
                        Tools like k6, JMeter, Gatling, and Locust generate the virtual
                        users and report the numbers; the skill is in designing a scenario
                        that reflects how people genuinely use the system.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Finding the fix, not just the failure</h2>
                    <p>
                        A load test that says "it broke at 5,000 users" is only half the
                        value; the other half is knowing why. That is where the test pairs
                        with{" "}
                        <Link href="/glossary/what-is-observability" className="text-sky-400 hover:underline">observability</Link>{" "}
                        and{" "}
                        <Link href="/glossary/what-is-distributed-tracing" className="text-sky-400 hover:underline">distributed tracing</Link>:
                        while the load runs, you watch where time and resources go, and the
                        bottleneck reveals itself — an unindexed query, a missing{" "}
                        <Link href="/glossary/what-is-caching" className="text-sky-400 hover:underline">cache</Link>,
                        a connection pool too small, a service that needs more instances.
                        Often the fix is far cheaper than the brute-force answer of throwing
                        hardware at the problem.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        We treat load testing as part of shipping, not a panic move before
                        a launch. On the platforms we build under{" "}
                        <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platform development</Link>{" "}
                        and validate under{" "}
                        <Link href="/services/qa-and-test-automation" className="text-sky-400 hover:underline">QA and test automation</Link>,
                        we model realistic traffic, watch the percentiles, and find the
                        bottleneck before recommending anything as heavy as{" "}
                        <Link href="/glossary/what-is-database-sharding" className="text-sky-400 hover:underline">sharding</Link>.
                        Done early and repeatedly, it turns capacity from a guess into a
                        number — so a client walks into their big day knowing what their
                        system can take.
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
                        <li><Link href="/glossary/what-is-chaos-engineering" className="text-sky-400 hover:underline">What is chaos engineering?</Link></li>
                        <li><Link href="/glossary/what-is-caching" className="text-sky-400 hover:underline">What is caching?</Link></li>
                        <li><Link href="/glossary/what-is-database-sharding" className="text-sky-400 hover:underline">What is database sharding?</Link></li>
                        <li><Link href="/glossary/what-is-distributed-tracing" className="text-sky-400 hover:underline">What is distributed tracing?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Big launch or traffic spike coming?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We load test against realistic traffic and fix the bottlenecks so
                        your system holds up when it counts. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-loadtesting" />
                        <Link href="/services/qa-and-test-automation" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            QA and test automation
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
