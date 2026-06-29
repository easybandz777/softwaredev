import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is a DDoS Attack? Plain-English Guide (2026) | QUANT LAB USA",
    description:
        "A DDoS attack floods a service with traffic from many machines to knock it offline. Plain-English definition, the attack types, and how to defend against it. By QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-a-ddos-attack" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "DDoS Attack",
    description:
        "A distributed denial-of-service attack overwhelms a target system with traffic or requests from many coordinated sources, exhausting its capacity so that legitimate users can no longer reach the service.",
    url: "https://quantlabusa.dev/glossary/what-is-a-ddos-attack",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "DDoS Attack", item: "https://quantlabusa.dev/glossary/what-is-a-ddos-attack" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is a DDoS attack in one sentence?", acceptedAnswer: { "@type": "Answer", text: "A DDoS attack uses many machines at once to flood a service with more traffic or requests than it can handle, making it unavailable to real users." } },
        { "@type": "Question", name: "What is the difference between DoS and DDoS?", acceptedAnswer: { "@type": "Answer", text: "A DoS attack comes from a single source; a DDoS (distributed) attack comes from many sources at once, usually a botnet, which makes it far harder to filter by blocking one address." } },
        { "@type": "Question", name: "What are the main types of DDoS attacks?", acceptedAnswer: { "@type": "Answer", text: "Volumetric attacks that saturate bandwidth, protocol attacks that exhaust network-layer resources like connection tables, and application-layer attacks that overwhelm expensive endpoints with seemingly legitimate requests." } },
        { "@type": "Question", name: "Can a DDoS attack steal data?", acceptedAnswer: { "@type": "Answer", text: "Not directly — DDoS targets availability, not confidentiality. But attackers sometimes use a DDoS as a smokescreen to distract responders while a separate intrusion is underway." } },
        { "@type": "Question", name: "How do you defend against DDoS?", acceptedAnswer: { "@type": "Answer", text: "Upstream scrubbing services and CDNs that absorb volume, rate limiting and bot detection at the application edge, generous autoscaling, and a tested incident runbook for when an attack hits." } },
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
                        <li className="text-gray-300">DDoS Attack</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Security</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is a DDoS Attack?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        A distributed denial-of-service attack uses a swarm of machines — often a botnet of compromised devices spread across the globe — to bury a website or service under far more traffic than it was built to handle. Unlike attacks that steal data, a DDoS aims to make a service unreachable: real customers get errors and timeouts while the flood drowns out their requests.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Distributed is the key word</h2>
                    <p>
                        A plain denial-of-service attack comes from one machine and is easy
                        to block — you drop traffic from that one address and move on. The
                        &ldquo;distributed&rdquo; in DDoS is what makes it dangerous: the
                        traffic arrives from thousands or millions of sources at once,
                        typically a botnet of hijacked routers, cameras, and servers the
                        owners do not even know are infected. There is no single address to
                        block, the traffic can look superficially legitimate, and the sheer
                        scale can exceed what a single data center&apos;s pipes can carry.
                        That asymmetry — cheap to launch, expensive to absorb — is the whole
                        problem.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Three layers of attack</h2>
                    <p>
                        Volumetric attacks aim to saturate your bandwidth, sometimes
                        amplified by abusing open internet services so a small request
                        triggers a huge response aimed at the victim. Protocol attacks
                        target network-layer resources — exhausting connection tables and
                        firewall state with half-open connections rather than raw volume.
                        Application-layer attacks are the most surgical: they send requests
                        that look real but hammer the most expensive operations, such as
                        search or report generation, so even a modest request rate can tip
                        a server over. Defending well means having an answer at each layer.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why it happens</h2>
                    <p>
                        Motives vary. Some attacks are extortion — pay up or stay offline.
                        Some are competitive sabotage timed to a product launch or a
                        high-traffic sales day. Some are hacktivism or simple vandalism, and
                        some are a deliberate distraction: a noisy DDoS keeps the operations
                        team busy at the front door while a quieter intrusion slips in
                        through a side window. That last pattern is why a sudden traffic
                        flood should raise security alarms, not just availability ones — it
                        can be the cover for a more serious breach.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How to defend against it</h2>
                    <p>
                        No application absorbs a large DDoS on its own — the defense starts
                        upstream. Content delivery networks and dedicated scrubbing
                        providers sit in front of your service, soak up volumetric and
                        protocol floods across their global capacity, and forward only clean
                        traffic. Behind that edge you add application-layer rate limiting,
                        bot detection, and caching so that the expensive endpoints are
                        protected, plus generous autoscaling so legitimate spikes do not get
                        mistaken for an attack. Just as important is a rehearsed runbook:
                        knowing who to call and which mitigations to flip on turns a
                        multi-hour outage into a brief blip.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        Resilience to DDoS is an architecture decision, and we make it
                        early. The systems we build on{" "}
                        <Link href="/services/cloud-infrastructure" className="text-sky-400 hover:underline">cloud infrastructure</Link>{" "}
                        sit behind a CDN with edge caching and rate limiting by default,
                        scale horizontally under load, and keep expensive operations off the
                        hot path so a request flood cannot easily exhaust them. We also
                        treat availability as part of the threat model during a{" "}
                        <Link href="/services/penetration-testing" className="text-sky-400 hover:underline">penetration test</Link>,
                        flagging unauthenticated endpoints that do heavy work — the exact
                        spots a low-volume application-layer attack would target. Designing
                        for the flood beats scrambling during one.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">A note on the broader picture</h2>
                    <p>
                        DDoS protects nothing if the rest of the stack is soft, and it
                        defends against only one of three classic security goals:
                        availability. Confidentiality and integrity still depend on the
                        defenses behind it — sane authentication, patched software with no
                        unaddressed{" "}
                        <Link href="/glossary/what-is-a-cve" className="text-sky-400 hover:underline">CVEs</Link>,
                        and resistance to application bugs like{" "}
                        <Link href="/glossary/what-is-sql-injection" className="text-sky-400 hover:underline">SQL injection</Link>.
                        A mature program treats DDoS mitigation as one slice of a layered
                        defense, not the whole pie.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        topics={["pentest","stack"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-a-web-app-firewall" className="text-sky-400 hover:underline">What is a WAF?</Link></li>
                        <li><Link href="/glossary/what-is-a-cdn" className="text-sky-400 hover:underline">What is a CDN?</Link></li>
                        <li><Link href="/glossary/what-is-a-load-balancer" className="text-sky-400 hover:underline">What is a load balancer?</Link></li>
                        <li><Link href="/glossary/what-is-ransomware" className="text-sky-400 hover:underline">What is ransomware?</Link></li>
                        <li><Link href="/glossary/what-is-penetration-testing" className="text-sky-400 hover:underline">What is penetration testing?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Is your service ready for a flood?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We architect systems that absorb traffic spikes and hold up under
                        application-layer pressure. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-ddos" />
                        <Link href="/services/cloud-infrastructure" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Cloud infrastructure
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
