import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";

export const metadata: Metadata = {
    title: "What is Zero Trust Architecture? | QUANT LAB",
    description:
        "Zero trust is the network model that assumes the perimeter is already breached. Never trust, always verify. What it really means, and how QUANT LAB implements it.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-zero-trust" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Zero Trust Architecture",
    description:
        "Zero Trust is a security model that assumes the network is already compromised and verifies every request — user, device, and context — against a policy engine before granting access to any resource.",
    url: "https://quantlabusa.dev/glossary/what-is-zero-trust",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "Zero Trust Architecture", item: "https://quantlabusa.dev/glossary/what-is-zero-trust" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is zero trust in one sentence?", acceptedAnswer: { "@type": "Answer", text: "Zero trust is a security model that never grants implicit trust based on network location and verifies every request against identity, device, and context policies before allowing access." } },
        { "@type": "Question", name: "Is zero trust a product?", acceptedAnswer: { "@type": "Answer", text: "No. It is an architectural pattern. Many products help — Okta, Zscaler, Cloudflare Access, Tailscale, BeyondCorp-style proxies — but no one product makes you zero trust." } },
        { "@type": "Question", name: "What is BeyondCorp?", acceptedAnswer: { "@type": "Answer", text: "Google's internal zero-trust implementation, started after the 2009 Aurora attacks. They published a series of papers that became the unofficial industry blueprint." } },
        { "@type": "Question", name: "Does zero trust replace VPNs?", acceptedAnswer: { "@type": "Answer", text: "It can. Many zero-trust implementations replace the traditional network VPN with identity-aware proxies that authenticate every request rather than trusting anyone inside the VPN tunnel." } },
        { "@type": "Question", name: "Is zero trust required for compliance?", acceptedAnswer: { "@type": "Answer", text: "Not directly. The US federal government mandates it for agencies via OMB M-22-09. Commercial compliance frameworks (SOC 2, ISO 27001) do not require zero trust by name but the underlying controls map to it." } },
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
                        <li className="text-gray-300">Zero Trust Architecture</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Security</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is Zero Trust Architecture?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        Zero Trust is a security model that throws out the idea of a trusted internal network and replaces it with a policy engine that verifies every request — who you are, what device you are on, where you are coming from, what you are trying to do — before granting access to any resource, even if the request came from inside the building.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The phrase</h2>
                    <p>
                        Forrester analyst John Kindervag coined "Zero Trust" in 2010 to
                        describe a security model in which no implicit trust is granted
                        to anything inside or outside the network perimeter. Google's
                        BeyondCorp papers (published 2014 onward) operationalized the
                        idea at scale, and the US National Institute of Standards and
                        Technology codified it in SP 800-207 in 2020. The Biden
                        administration's 2022 OMB memo M-22-09 made it the federal
                        baseline.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why the old perimeter model failed</h2>
                    <p>
                        For decades the model was: build a fence around the office network,
                        trust everything inside, distrust everything outside, and route
                        remote employees through a VPN that put them "inside." That model
                        breaks the moment one machine inside the fence is compromised — a
                        single phishing victim hands the attacker the keys to everything on
                        the trusted network. It also stopped reflecting reality: employees
                        work from coffee shops, services live on twelve different SaaS
                        platforms, and "inside" stopped being a meaningful concept.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What zero trust is not</h2>
                    <p>
                        Zero trust is not "buy this product and you are done." Several
                        vendors market a single appliance as "the zero trust solution"
                        and the framing is misleading — zero trust is an organizing
                        principle that touches identity, endpoint, network, application,
                        and data, no one product covers all of it. It is also not the
                        same as "no VPN" — replacing a VPN with an identity-aware proxy
                        is a common zero trust pattern, but you can have a VPN inside a
                        well-designed zero trust environment and you can have zero
                        actual zero trust inside a VPN-less network.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The three pillars</h2>
                    <p>
                        Identity: every request is tied to a strongly authenticated user,
                        usually with phishing-resistant multi-factor authentication.
                        Device: the requesting device's posture is evaluated — is it
                        patched, encrypted, free of known malware? Context: is the
                        request coming from a reasonable location, at a reasonable time,
                        for a resource this user normally accesses? All three are
                        evaluated on every request, not once at login.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        Zero trust shows up in our work in two places. First, our{" "}
                        <Link href="/services/cloud-infrastructure" className="text-sky-400 hover:underline">cloud infrastructure</Link>{" "}
                        builds default to identity-aware proxies and per-service IAM
                        rather than relying on network-level trust. Second, our{" "}
                        <Link href="/services/penetration-testing" className="text-sky-400 hover:underline">penetration tests</Link>{" "}
                        on internal environments often reveal that the "zero trust"
                        diagrams on the wall do not match how policy actually works —
                        gaps an{" "}
                        <Link href="/glossary/what-is-active-directory" className="text-sky-400 hover:underline">Active Directory</Link>{" "}
                        attacker can drive a truck through. Real zero trust is harder
                        than buying a product; the architecture has to be enforced
                        everywhere or it is enforced nowhere.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">A pragmatic adoption path</h2>
                    <p>
                        Most organizations do not implement zero trust in one
                        project — they do it one application at a time, starting
                        with the most sensitive systems. A practical sequence:
                        consolidate identity to a single provider with MFA on every
                        application; put your most sensitive apps behind an
                        identity-aware proxy that evaluates user and device on
                        every request; replace standing VPN access with
                        per-session, per-resource grants; then expand the model to
                        less sensitive resources over time. Trying to do it all at
                        once is how mature programs end up with shelfware.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-active-directory" className="text-sky-400 hover:underline">What is Active Directory?</Link></li>
                        <li><Link href="/glossary/what-is-mitre-attack" className="text-sky-400 hover:underline">MITRE ATT&CK</Link></li>
                        <li><Link href="/glossary/what-is-penetration-testing" className="text-sky-400 hover:underline">What is penetration testing?</Link></li>
                        <li><Link href="/glossary/what-is-soc-2" className="text-sky-400 hover:underline">What is SOC 2?</Link></li>
                        <li><Link href="/glossary/what-is-a-web-app-firewall" className="text-sky-400 hover:underline">What is a WAF?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Building a zero trust environment?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We architect identity-aware access for cloud-first organizations
                        and test it like an adversary would. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-zerotrust" />
                        <Link href="/services/cloud-infrastructure" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Cloud infrastructure
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
