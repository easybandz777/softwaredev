import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";

export const metadata: Metadata = {
    title: "What is a Web Application Firewall (WAF)? | QUANT LAB",
    description:
        "A WAF inspects HTTP traffic and blocks common attacks before they reach your app. How WAFs work, their limits, why they are not a substitute for secure code.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-a-web-app-firewall" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Web Application Firewall (WAF)",
    description:
        "A Web Application Firewall is a reverse proxy that sits in front of a web application and inspects HTTP traffic, blocking requests that match attack signatures or behavioral patterns.",
    url: "https://quantlabusa.dev/glossary/what-is-a-web-app-firewall",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "Web Application Firewall", item: "https://quantlabusa.dev/glossary/what-is-a-web-app-firewall" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What does WAF stand for?", acceptedAnswer: { "@type": "Answer", text: "Web Application Firewall. A reverse-proxy layer that inspects incoming HTTP requests and blocks common attack patterns before they reach the application." } },
        { "@type": "Question", name: "Is a WAF the same as a network firewall?", acceptedAnswer: { "@type": "Answer", text: "No. A network firewall filters at the IP and port level. A WAF understands the HTTP protocol and inspects request bodies, headers, and parameters at the application layer." } },
        { "@type": "Question", name: "Does a WAF replace pentesting?", acceptedAnswer: { "@type": "Answer", text: "Absolutely not. A WAF mitigates known attack patterns at scale; it cannot fix authorization bugs, broken access control, or business logic flaws. Most real findings in a pentest cannot be blocked by a WAF." } },
        { "@type": "Question", name: "What are the most common WAFs?", acceptedAnswer: { "@type": "Answer", text: "Cloudflare, AWS WAF, Akamai, Imperva, and Fastly Next-Gen WAF dominate the market. Each has different rule engines and pricing models, but the core function is similar." } },
        { "@type": "Question", name: "Do I need a WAF for SOC 2?", acceptedAnswer: { "@type": "Answer", text: "Not strictly. Most SOC 2 audits accept a WAF as evidence of perimeter controls, but the underlying requirement is some form of protection — a well-configured CDN with managed rules usually suffices." } },
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
                        <li className="text-gray-300">Web Application Firewall</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Security</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is a Web Application Firewall?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        A Web Application Firewall (WAF) is a reverse-proxy layer that sits in front of a web application, inspects every incoming HTTP request, and blocks or challenges requests that match known attack signatures or anomalous behavior — a perimeter filter for the application layer.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Network firewall vs WAF</h2>
                    <p>
                        A traditional network firewall operates at OSI layers three and
                        four — IP addresses, ports, TCP state. It does not understand
                        HTTP. A WAF operates at layer seven — it parses the actual
                        request, looks at headers, body, query parameters, and the
                        response, and applies rules against that content. A network
                        firewall blocks the wrong port; a WAF blocks the wrong shape of
                        request to the right port.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What a WAF actually blocks</h2>
                    <p>
                        WAFs are good at three categories of attack. Generic injection
                        attempts — SQL injection patterns, cross-site scripting payloads,
                        command injection probes — that match well-known signatures.
                        Bot and scraping traffic — high request rates, suspicious user
                        agents, headless browser fingerprints. And volumetric or
                        application-layer DDoS — request floods that look abnormal at
                        the rate or path level.
                    </p>
                    <p>
                        WAFs are weak against bespoke attacks and business-logic flaws.
                        A request that exfiltrates another tenant's data through your
                        own API by hitting GET /api/invoices/123 looks like a normal
                        request — there is no signature for "this user should not have
                        access to that record." That kind of vulnerability has to be
                        fixed in the application code.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Deployment modes</h2>
                    <p>
                        WAFs deploy in three modes. Reverse proxy: traffic flows
                        through the WAF as a separate gateway, which gives full
                        inspection but adds latency and a hop. Embedded module: the
                        WAF runs inside your web server or app server (ModSecurity
                        inside nginx is the classic example), avoiding the extra hop
                        but coupling the WAF to your deployment. CDN-integrated:
                        Cloudflare and AWS WAF run the rule engine at the CDN edge,
                        which is operationally the simplest and the dominant pattern
                        for modern apps.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The big WAF vendors</h2>
                    <p>
                        Cloudflare and AWS WAF dominate the commodity end. Akamai,
                        Imperva, F5, and Fastly Next-Gen WAF (acquired from Signal
                        Sciences) sit in the enterprise tier with deeper rule engines
                        and managed services. ModSecurity is the long-standing
                        open-source option, often deployed with the OWASP Core Rule Set
                        as a base ruleset. Different vendors balance false-positive rate
                        against coverage differently — there is no single right answer.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        Every customer-facing app we ship runs behind a CDN with a
                        managed WAF — usually Cloudflare or AWS WAF — for the
                        commodity protection it provides. Where the application handles
                        sensitive data, we tune the rules, add custom signatures, and
                        feed WAF logs to detection tooling. But our standing position is
                        that a WAF is the last line, not the first. The real defense
                        comes from secure development practices and{" "}
                        <Link href="/services/web-app-pentest" className="text-sky-400 hover:underline">regular pentesting</Link>{" "}
                        of the application itself, validated against the{" "}
                        <Link href="/glossary/what-is-owasp-top-10" className="text-sky-400 hover:underline">OWASP Top 10</Link>{" "}
                        and the broader OWASP ASVS.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The false-positive tax</h2>
                    <p>
                        The dirtiest secret of WAFs is the false-positive rate. A
                        rule set tuned aggressively will block legitimate traffic —
                        a user submitting a long form, an integration partner
                        posting JSON the rules consider suspicious, a security
                        researcher you actually want talking to your app. Every
                        team operating a WAF spends time triaging blocked requests,
                        tuning rules, and adding allowlists. Most managed services
                        give you sensible defaults, but defaults are not a strategy
                        — a WAF you never tune is a WAF that will eventually block
                        your most important customer.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-owasp-top-10" className="text-sky-400 hover:underline">OWASP Top 10</Link></li>
                        <li><Link href="/glossary/what-is-penetration-testing" className="text-sky-400 hover:underline">What is penetration testing?</Link></li>
                        <li><Link href="/glossary/what-is-zero-trust" className="text-sky-400 hover:underline">Zero trust architecture</Link></li>
                        <li><Link href="/glossary/what-is-soc-2" className="text-sky-400 hover:underline">What is SOC 2?</Link></li>
                        <li><Link href="/glossary/what-is-an-api" className="text-sky-400 hover:underline">What is an API?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Pentest your app properly</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        A WAF will not catch the bugs that matter most. We test the
                        application itself, the way a real attacker would.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-waf" />
                        <Link href="/services/web-app-pentest" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Web app pentest
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
