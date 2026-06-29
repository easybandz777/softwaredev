import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is Chaos Engineering? Plain-English Guide | QUANT LAB USA",
    description:
        "Chaos engineering deliberately injects failure to prove a system survives it. Plain-English definition, principles, blast radius, Chaos Monkey. By QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-chaos-engineering" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Chaos Engineering",
    description:
        "Chaos engineering is the discipline of deliberately injecting controlled failures into a system — killing servers, adding latency, severing dependencies — to verify that it withstands turbulent real-world conditions and to find weaknesses before they cause outages.",
    url: "https://quantlabusa.dev/glossary/what-is-chaos-engineering",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "Chaos Engineering", item: "https://quantlabusa.dev/glossary/what-is-chaos-engineering" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is chaos engineering in one sentence?", acceptedAnswer: { "@type": "Answer", text: "Chaos engineering is the practice of deliberately injecting controlled failures into a system — such as killing servers or adding network latency — to prove it can withstand real-world turbulence and to expose weaknesses before they cause an outage." } },
        { "@type": "Question", name: "What is Chaos Monkey?", acceptedAnswer: { "@type": "Answer", text: "Chaos Monkey is a tool Netflix built that randomly terminates production instances during business hours, forcing engineers to build services that tolerate sudden failure. It launched the broader Simian Army and popularized chaos engineering." } },
        { "@type": "Question", name: "What is blast radius in chaos engineering?", acceptedAnswer: { "@type": "Answer", text: "Blast radius is how much of the system a chaos experiment can affect. Good practice starts with a tiny blast radius — one instance, a small slice of traffic — and expands only as confidence grows, so an experiment cannot cause a large outage." } },
        { "@type": "Question", name: "Is chaos engineering done in production?", acceptedAnswer: { "@type": "Answer", text: "Mature teams run experiments in production because that is the only place real conditions exist, but always with a defined hypothesis, a limited blast radius, and an automatic abort. Many teams start in staging and graduate to production carefully." } },
        { "@type": "Question", name: "What is a game day?", acceptedAnswer: { "@type": "Answer", text: "A game day is a scheduled exercise where a team deliberately triggers failures and practices responding, testing both the system's resilience and the team's runbooks, alerts, and incident process in a controlled setting." } },
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
                        <li className="text-gray-300">Chaos Engineering</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Infrastructure</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is Chaos Engineering?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        Chaos engineering is the deliberate practice of breaking your own system on purpose — killing servers, injecting network latency, cutting off dependencies — under controlled conditions, so you can prove it survives the kinds of failures that happen in the real world, and find the weaknesses on your own terms instead of at 3 a.m. during an outage.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The counterintuitive premise</h2>
                    <p>
                        At first it sounds reckless: why would anyone deliberately break a
                        working system? The answer is that distributed systems are going to
                        fail whether you like it or not — networks drop packets, disks die,
                        a dependency times out, a cloud zone goes dark. The only question is
                        whether you discover how your system responds to those failures in a
                        controlled experiment, with engineers watching and a plan to abort,
                        or in an unplanned production incident with customers screaming.
                        Chaos engineering chooses the former. It is the empirical answer to
                        a hope-based assumption that "the failover will just work."
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where it came from: Netflix and Chaos Monkey</h2>
                    <p>
                        The discipline was popularized by Netflix around 2010 as it moved
                        to the cloud. The team built Chaos Monkey, a tool that randomly
                        terminates production instances during business hours. The logic was
                        brilliant: if a server can be killed at any moment, engineers are
                        forced to build services that tolerate it, and the painful work of
                        resilience gets done continuously instead of deferred forever. Chaos
                        Monkey grew into the "Simian Army" — tools that simulated everything
                        from regional outages to latency spikes — and Netflix's published
                        principles turned an internal practice into an industry discipline.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">It is a scientific method, not vandalism</h2>
                    <p>
                        Done properly, chaos engineering is rigorous, not random
                        destruction. Each experiment follows a clear shape. You define the
                        steady state — a measurable signal of healthy behavior, like orders
                        per second. You form a hypothesis: "if we kill one payment service
                        instance, the steady state will hold because traffic reroutes." You
                        introduce the failure. Then you compare reality to the hypothesis.
                        If the system held, you have earned real confidence; if it did not,
                        you have found a weakness cheaply, in daylight, with the people who
                        can fix it already paying attention.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Blast radius and the abort button</h2>
                    <p>
                        The discipline that separates chaos engineering from negligence is
                        controlling the blast radius — how much of the system an experiment
                        can affect. You start tiny: one instance, one percent of traffic,
                        one non-critical dependency. You confirm you can observe the impact
                        and automatically halt the experiment the instant the steady state
                        degrades past a threshold. Only as confidence grows do you widen the
                        scope. Running experiments in production is the goal, because that is
                        the only place real conditions exist, but always with a small blast
                        radius and a working stop switch.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Observability is the prerequisite</h2>
                    <p>
                        You cannot do chaos engineering without strong{" "}
                        <Link href="/glossary/what-is-observability" className="text-sky-400 hover:underline">observability</Link>.
                        The entire method depends on measuring the steady state and watching
                        what happens when you inject failure — if you cannot see the impact
                        in real time, you cannot run a safe experiment or learn anything
                        from it. This is why chaos engineering tends to arrive after a team
                        has solid metrics, dashboards, and{" "}
                        <Link href="/glossary/what-is-distributed-tracing" className="text-sky-400 hover:underline">distributed tracing</Link>{" "}
                        in place. It also complements{" "}
                        <Link href="/glossary/what-is-load-testing" className="text-sky-400 hover:underline">load testing</Link>:
                        one asks "does it survive a crowd?" while chaos asks "does it survive
                        its own pieces breaking?"
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        We see chaos engineering as a maturity step, not a starting point.
                        For the systems we build under{" "}
                        <Link href="/services/cloud-infrastructure" className="text-sky-400 hover:underline">cloud infrastructure</Link>{" "}
                        and operate under{" "}
                        <Link href="/services/devops-engineering" className="text-sky-400 hover:underline">DevOps engineering</Link>,
                        we first make sure the fundamentals are real —{" "}
                        <Link href="/glossary/what-is-infrastructure-as-code" className="text-sky-400 hover:underline">infrastructure as code</Link>,
                        redundancy, and observability — then use controlled failure
                        experiments and game days to prove the redundancy actually works
                        rather than just existing on a diagram. There is a security parallel
                        too: deliberately injecting failure to test resilience is, in
                        spirit, the same instinct behind a{" "}
                        <Link href="/services/penetration-testing" className="text-sky-400 hover:underline">penetration test</Link>{" "}
                        — you would rather find the failure yourself than have someone else
                        find it for you.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        topics={["stack","pentest"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-observability" className="text-sky-400 hover:underline">What is observability?</Link></li>
                        <li><Link href="/glossary/what-is-load-testing" className="text-sky-400 hover:underline">What is load testing?</Link></li>
                        <li><Link href="/glossary/what-is-distributed-tracing" className="text-sky-400 hover:underline">What is distributed tracing?</Link></li>
                        <li><Link href="/glossary/what-is-infrastructure-as-code" className="text-sky-400 hover:underline">What is infrastructure as code?</Link></li>
                        <li><Link href="/glossary/what-is-a-vpc" className="text-sky-400 hover:underline">What is a VPC?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Is your redundancy real or just on paper?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We use controlled failure experiments to prove your system survives
                        the failures it claims to. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-chaos" />
                        <Link href="/services/cloud-infrastructure" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Cloud infrastructure
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
