import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is a Man-in-the-Middle Attack? (2026) | QUANT LAB USA",
    description:
        "A man-in-the-middle attack secretly relays traffic between two parties who think they are talking directly. Plain-English definition and defenses. QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-a-man-in-the-middle-attack" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Man-in-the-Middle Attack (MITM)",
    description:
        "A man-in-the-middle attack is an interception in which an attacker secretly relays and possibly alters communications between two parties who believe they are communicating directly with each other.",
    url: "https://quantlabusa.dev/glossary/what-is-a-man-in-the-middle-attack",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "Man-in-the-Middle Attack", item: "https://quantlabusa.dev/glossary/what-is-a-man-in-the-middle-attack" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is a man-in-the-middle attack in one sentence?", acceptedAnswer: { "@type": "Answer", text: "A man-in-the-middle attack is when an attacker secretly positions themselves between two parties, relaying and potentially altering their messages while each side believes it is communicating directly and privately with the other." } },
        { "@type": "Question", name: "How does TLS prevent man-in-the-middle attacks?", acceptedAnswer: { "@type": "Answer", text: "TLS encrypts the connection and, crucially, uses certificates to authenticate the server. The client verifies the server's certificate against trusted authorities, so an interceptor cannot impersonate the server without a valid certificate the client will accept." } },
        { "@type": "Question", name: "What is ARP spoofing?", acceptedAnswer: { "@type": "Answer", text: "ARP spoofing is a local-network MITM technique where an attacker sends forged ARP messages to associate their device with another host's IP address, causing traffic meant for that host to flow through the attacker instead." } },
        { "@type": "Question", name: "Is public Wi-Fi safe from man-in-the-middle attacks?", acceptedAnswer: { "@type": "Answer", text: "Public Wi-Fi is a classic MITM environment, but properly implemented TLS protects your data even on a hostile network. The risk comes from sites without TLS, ignored certificate warnings, or evil-twin access points combined with weak app security." } },
        { "@type": "Question", name: "What is certificate pinning?", acceptedAnswer: { "@type": "Answer", text: "Certificate pinning hardcodes which certificate or public key a client will accept for a specific server, so even a fraudulently issued but technically valid certificate is rejected. It is common in mobile apps to resist sophisticated interception." } },
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
                        <li className="text-gray-300">Man-in-the-Middle Attack</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Security</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is a Man-in-the-Middle Attack?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        A man-in-the-middle attack is an interception: the attacker quietly inserts themselves between two parties — say, your browser and your bank — relaying messages back and forth so each side believes it is talking directly and privately to the other. From that position, the attacker can read everything, and often alter it: steal credentials, hijack a session, or silently change a payment destination mid-transfer.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The core idea</h2>
                    <p>
                        Every secure conversation rests on two guarantees: that nobody
                        else can read it (confidentiality) and that you are actually
                        talking to who you think you are (authentication). A
                        man-in-the-middle attack breaks the second to defeat the first.
                        If the attacker can convince your browser that they are the bank
                        and convince the bank that they are you, then encryption alone
                        does not help — you have simply established a perfectly secure
                        channel with the wrong party. This is why authentication, not
                        just encryption, is the heart of the defense.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How attackers get in the middle</h2>
                    <p>
                        There are many roads to the middle position. On a local network,
                        ARP spoofing lets an attacker masquerade as the gateway so all
                        traffic flows through them. Rogue or "evil twin" Wi-Fi access
                        points lure devices onto a network the attacker controls.{" "}
                        <Link href="/glossary/what-is-dns" className="text-sky-400 hover:underline">DNS</Link>{" "}
                        spoofing and cache poisoning redirect a name to the attacker's
                        server. Compromised routers, malicious proxies, and BGP hijacks
                        operate at larger scale. The common thread is that the attacker
                        gains a position on the path and then impersonates one or both
                        endpoints — the technique varies, but the goal is always to be
                        the invisible relay.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why TLS is the answer</h2>
                    <p>
                        The primary defense is{" "}
                        <Link href="/glossary/what-is-tls" className="text-sky-400 hover:underline">TLS</Link>,
                        and specifically the authentication half of it. TLS encrypts the
                        channel, but its anti-MITM power comes from certificates: the
                        client checks the server's certificate against trusted authorities
                        in the{" "}
                        <Link href="/glossary/what-is-public-key-infrastructure" className="text-sky-400 hover:underline">public key infrastructure</Link>,
                        so an interceptor cannot pretend to be your bank without a valid
                        certificate your browser will accept — which they cannot obtain.
                        This is why the certificate warning your browser throws is not
                        noise; clicking through it is often the exact moment a
                        man-in-the-middle attack succeeds, because you have manually
                        overridden the one check that stops it.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Hardening beyond basic TLS</h2>
                    <p>
                        Strong systems add layers. HTTP Strict Transport Security (HSTS)
                        forces browsers to use HTTPS and refuse to downgrade, defeating
                        attacks that try to strip encryption away. Certificate pinning
                        hardcodes which certificate a client will trust for a given
                        server, so even a fraudulently issued certificate is rejected —
                        common in mobile apps. Mutual TLS authenticates both sides, not
                        just the server, which matters for service-to-service traffic in a{" "}
                        <Link href="/glossary/what-is-zero-trust" className="text-sky-400 hover:underline">zero trust</Link>{" "}
                        architecture. And robust session handling limits the damage if an
                        attacker does manage to capture a token.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        We defend against interception by getting the transport layer
                        right and proving it holds. The{" "}
                        <Link href="/services/web-applications" className="text-sky-400 hover:underline">web applications</Link>{" "}
                        and APIs we build enforce TLS everywhere, set HSTS, and validate
                        certificates rather than trusting whatever shows up. During a{" "}
                        <Link href="/services/penetration-testing" className="text-sky-400 hover:underline">penetration test</Link>,
                        intercepting traffic is one of the first things we attempt — and
                        we routinely find apps that accept invalid certificates, mobile
                        clients with no pinning, or mixed HTTP and HTTPS content that
                        opens a downgrade path. Each of those quietly hands an attacker
                        the middle seat, and each is fixable before it is exploited.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Staying off the middle seat</h2>
                    <p>
                        The defensive checklist is well established. Use TLS for
                        everything, with no plaintext fallbacks, and never ship code that
                        disables certificate validation "to make it work." Enable HSTS and
                        consider pinning for high-value clients. Treat certificate
                        warnings as hard stops, both in apps and in user training. On
                        sensitive networks, watch for ARP and DNS anomalies. And design
                        on the assumption that the network is hostile — which is exactly
                        the zero-trust posture — so that even an attacker who reaches the
                        middle finds an authenticated, encrypted channel they cannot
                        usefully break.
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
                        <li><Link href="/glossary/what-is-tls" className="text-sky-400 hover:underline">What is TLS?</Link></li>
                        <li><Link href="/glossary/what-is-public-key-infrastructure" className="text-sky-400 hover:underline">What is PKI?</Link></li>
                        <li><Link href="/glossary/what-is-dns" className="text-sky-400 hover:underline">What is DNS?</Link></li>
                        <li><Link href="/glossary/what-is-phishing" className="text-sky-400 hover:underline">What is phishing?</Link></li>
                        <li><Link href="/glossary/what-is-zero-trust" className="text-sky-400 hover:underline">What is Zero Trust?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Worried about traffic interception?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We build apps that enforce TLS correctly and test them by trying
                        to intercept the traffic ourselves. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-mitm" />
                        <Link href="/services/penetration-testing" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Penetration testing
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
