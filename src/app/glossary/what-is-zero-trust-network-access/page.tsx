import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata: Metadata = pageMetadata({
    title: "What is Zero Trust Network Access (ZTNA)? | QUANT LAB",
    description:
        "ZTNA is the identity-aware replacement for the corporate VPN. What it is, how it differs from zero trust, what the vendor landscape actually offers, and how QUANT LAB designs it.",
    slug: "/glossary/what-is-zero-trust-network-access",
});

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Zero Trust Network Access (ZTNA)",
    description:
        "Zero Trust Network Access is a security model in which access to private applications is granted per-session, per-resource, after verifying user, device, and context — replacing the all-or-nothing trust granted by traditional VPNs.",
    url: "https://quantlabusa.dev/glossary/what-is-zero-trust-network-access",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "What is ZTNA?", item: "https://quantlabusa.dev/glossary/what-is-zero-trust-network-access" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is ZTNA?", acceptedAnswer: { "@type": "Answer", text: "Zero Trust Network Access (ZTNA) is a security model and a category of products that grant access to private applications on a per-session, per-resource basis after verifying user identity, device posture, and context — replacing traditional VPNs that grant broad network access once a user is in." } },
        { "@type": "Question", name: "Is ZTNA the same as zero trust?", acceptedAnswer: { "@type": "Answer", text: "ZTNA is one slice of a broader zero trust architecture. Zero trust covers identity, devices, networks, applications, and data; ZTNA specifically addresses how users reach private applications. A complete zero trust deployment usually includes ZTNA among many other components." } },
        { "@type": "Question", name: "How is ZTNA different from a VPN?", acceptedAnswer: { "@type": "Answer", text: "A VPN puts the user \"on the network\" with broad access. ZTNA grants access only to specific applications, evaluated per request, with the underlying network never directly reachable. Lateral movement after a compromise becomes much harder." } },
        { "@type": "Question", name: "Who makes ZTNA products?", acceptedAnswer: { "@type": "Answer", text: "Zscaler ZPA, Cloudflare Access, Twingate, Tailscale, Palo Alto Prisma Access, Netskope, Cisco Duo, and many others. Each takes a different stance on agent vs agentless, identity provider integrations, and which protocols it supports." } },
        { "@type": "Question", name: "Does ZTNA replace VPNs entirely?", acceptedAnswer: { "@type": "Answer", text: "For most modern access patterns, yes — and that is increasingly the goal of mature security programs. Some legacy protocols (specific UDP applications, very-low-latency workloads) still benefit from a network-level tunnel, and many organizations run ZTNA and a smaller-scope VPN in parallel during transition." } },
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
                        <li className="text-gray-300">What is ZTNA?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Security</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is Zero Trust Network Access?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        Zero Trust Network Access (ZTNA) is a security model — and a product category — that grants access to private applications on a per-session, per-resource basis, after verifying who the user is, what device they are on, and whether the request looks normal. It is the identity-aware replacement for the corporate VPN, and the practical front door of any real zero trust deployment.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where the term came from</h2>
                    <p>
                        Gartner coined "ZTNA" around 2019 to put a name to the category of products that had emerged from Google's BeyondCorp papers and the early Cloudflare Access, Zscaler ZPA, and Akamai Enterprise Application Access offerings. The motivating problem was the same one BeyondCorp was solving inside Google — the traditional VPN model put users "on the network" with broad access, which was both operationally clumsy and a catastrophic compromise vector when any single user's device got popped. ZTNA narrows the grant from "the corporate network" to "this specific application, for this user, right now, on this device."
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How a ZTNA request actually flows</h2>
                    <p>
                        Two common shapes. In the agent-based model, the user's device runs a ZTNA client (Cloudflare WARP, Zscaler Client Connector, Tailscale). When the user tries to reach an internal app, the client routes the request through the ZTNA provider, which authenticates the user against the identity provider, checks the device's posture (patched, encrypted, MFA enrolled), evaluates policy, and either proxies the request to the application or denies it. In the agentless model, the user reaches a public URL fronted by an identity-aware proxy that does the same evaluation in the browser, no client needed. Either way, the underlying network containing the application is never directly reachable from the public internet.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What ZTNA is not</h2>
                    <p>
                        ZTNA is one slice of a complete zero trust architecture, not the whole of it. <Link href="/glossary/what-is-zero-trust" className="text-sky-400 hover:underline">Zero trust</Link> as an architectural pattern covers identity, devices, networks, applications, and data. ZTNA primarily addresses the "how do users reach private applications" question. Adopting a ZTNA product without also tightening identity, MFA, device posture, and per-application authorization is the most common way teams end up with a "we bought zero trust" claim that does not survive a pen test.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The vendor landscape in 2026</h2>
                    <p>
                        Zscaler ZPA and Cloudflare Access dominate the enterprise market on the agent-based and agentless ends respectively. Twingate and Tailscale have won meaningful share with smaller engineering teams that prefer self-serve onboarding. Palo Alto Prisma Access, Netskope, and Cisco Duo round out the broader SASE category, which extends ZTNA to also cover web traffic and SaaS-app access. Each makes different tradeoffs in identity provider support, protocol coverage, and operational model — the right choice depends on which IdP you already run, which apps need ZTNA, and how willing the team is to deploy agents on every endpoint.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        For clients running modern <Link href="/services/cloud-infrastructure" className="text-sky-400 hover:underline">cloud infrastructure</Link>, our default recommendation is to put internal admin consoles, dashboards, and any private application behind an identity-aware proxy from day one — Cloudflare Access and Tailscale both make this nearly free for small teams, and the security improvement over "VPN into the bastion host" is enormous.
                    </p>
                    <p>
                        Our <Link href="/services/active-directory-pentest" className="text-sky-400 hover:underline">Active Directory pen-test</Link> and <Link href="/services/network-pentest" className="text-sky-400 hover:underline">network pen-test</Link> practices regularly find environments where the ZTNA story on the architecture diagram and the ZTNA story in practice do not match — VPN access still flows around the supposed gateway, or service accounts with broad permissions can sidestep the identity check. Read our <Link href="/glossary/what-is-zero-trust" className="text-sky-400 hover:underline">zero trust glossary entry</Link> for the broader pattern, or <Link href="/contact" className="text-sky-400 hover:underline">book a call</Link> if you are scoping a VPN replacement.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-zero-trust" className="text-sky-400 hover:underline">What is zero trust?</Link></li>
                        <li><Link href="/glossary/what-is-an-iam" className="text-sky-400 hover:underline">What is an IAM?</Link></li>
                        <li><Link href="/glossary/what-is-active-directory" className="text-sky-400 hover:underline">What is Active Directory?</Link></li>
                        <li><Link href="/glossary/what-is-saml-sso" className="text-sky-400 hover:underline">What is SAML SSO?</Link></li>
                        <li><Link href="/glossary/what-is-secrets-management" className="text-sky-400 hover:underline">What is secrets management?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Retiring the VPN?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We design ZTNA deployments that actually replace the VPN — and we pen-test the result the way an adversary would.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-ztna" />
                        <Link href="/services/cloud-infrastructure" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Cloud infrastructure
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
