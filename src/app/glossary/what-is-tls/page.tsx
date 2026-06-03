import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is TLS? Transport Layer Security Explained | QUANT LAB USA",
    description:
        "TLS is the protocol that encrypts data in transit and powers the padlock in your browser. Plain-English definition, how the handshake works, and why it matters — by QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-tls" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "TLS (Transport Layer Security)",
    description:
        "TLS is a cryptographic protocol that encrypts data in transit between two systems, verifies the identity of the server, and protects the data from tampering — the technology behind HTTPS and the browser padlock.",
    url: "https://quantlabusa.dev/glossary/what-is-tls",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "What is TLS?", item: "https://quantlabusa.dev/glossary/what-is-tls" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What does TLS stand for?", acceptedAnswer: { "@type": "Answer", text: "TLS stands for Transport Layer Security. It is a cryptographic protocol that encrypts data as it travels between two systems, verifies the server's identity, and detects tampering. It is the technology behind HTTPS and the padlock in your browser." } },
        { "@type": "Question", name: "What is the difference between TLS and SSL?", acceptedAnswer: { "@type": "Answer", text: "SSL (Secure Sockets Layer) is the older protocol TLS replaced. People still say 'SSL certificate' out of habit, but every secure connection today actually uses TLS. SSL itself is deprecated and insecure." } },
        { "@type": "Question", name: "What is the difference between TLS and HTTPS?", acceptedAnswer: { "@type": "Answer", text: "HTTPS is just HTTP running inside a TLS-encrypted connection. TLS is the general-purpose encryption layer; HTTPS is the specific case of using it for web traffic. TLS also secures email, APIs, and many other protocols." } },
        { "@type": "Question", name: "Does TLS protect data stored on a server?", acceptedAnswer: { "@type": "Answer", text: "No. TLS protects data in transit while it moves across a network. Protecting stored data is the job of encryption at rest. A secure system needs both, because they defend against different attacks." } },
        { "@type": "Question", name: "Can TLS be misconfigured?", acceptedAnswer: { "@type": "Answer", text: "Frequently. Using outdated protocol versions, weak cipher suites, expired or improperly validated certificates, or failing to enforce HTTPS are all common mistakes that penetration tests routinely find, even when a padlock appears in the browser." } },
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
                        <li className="text-gray-300">What is TLS?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Security</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is TLS?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        TLS (Transport Layer Security) is the cryptographic protocol that encrypts data as it travels between two systems, proves you are talking to the real server and not an impostor, and detects any tampering along the way — it is the technology behind HTTPS and the padlock in your browser&apos;s address bar.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What does it mean?</h2>
                    <p>
                        When you send data across the internet, it hops through many networks you do
                        not control — coffee-shop Wi-Fi, internet service providers, backbone
                        routers. Without protection, anyone positioned along that path could read it
                        or alter it. TLS solves three problems at once. It provides{" "}
                        <strong>confidentiality</strong> by encrypting the data so eavesdroppers see
                        only ciphertext. It provides <strong>integrity</strong> so any tampering in
                        transit is detected and rejected. And it provides <strong>authentication</strong> so
                        you can be confident the server on the other end really is who it claims to be.
                    </p>
                    <p>
                        That third guarantee is the one people overlook. Encryption alone would be
                        useless if you were encrypting your data straight to an attacker
                        impersonating your bank. TLS uses digital certificates, issued by trusted
                        authorities, to verify identity — which is what the padlock actually
                        represents. It does not mean &quot;this site is safe&quot;; it means &quot;your connection
                        to this specific site is private and you are really talking to it.&quot;
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where the term came from</h2>
                    <p>
                        TLS is the direct descendant of SSL (Secure Sockets Layer), which Netscape
                        created in the mid-1990s so that people could safely enter credit-card
                        numbers on this strange new thing called the World Wide Web. SSL went through
                        versions 2.0 and 3.0, both of which were eventually found to have serious
                        flaws. When the protocol was standardized by the Internet Engineering Task
                        Force in 1999, it was renamed TLS to mark the clean break. This is why people
                        still say &quot;SSL certificate&quot; out of pure habit even though every secure
                        connection today actually runs TLS — the old name simply stuck.
                    </p>
                    <p>
                        The protocol kept evolving. TLS 1.0 and 1.1 are now deprecated and considered
                        insecure. TLS 1.2 remains widely used, and TLS 1.3 — finalized in 2018 — is
                        the modern standard, faster and stripped of the legacy cryptography that
                        caused most historical vulnerabilities. The arc of the whole story is a
                        steady removal of weak options as attackers found ways to exploit them.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How it works</h2>
                    <p>
                        Every TLS connection opens with a handshake. The client and server agree on a
                        protocol version and a set of cryptographic algorithms (a &quot;cipher suite&quot;).
                        The server presents its certificate, and the client checks that the
                        certificate is valid, unexpired, and signed by a certificate authority it
                        trusts. Then the two sides use public-key cryptography to securely agree on a
                        shared secret key that only they know. Once that is done, the rest of the
                        conversation is encrypted with fast symmetric cryptography using that shared
                        key. Modern TLS 1.3 streamlines this into fewer round trips, so the security
                        comes with little speed penalty.
                    </p>
                    <p>
                        It is worth being precise about scope. TLS protects data <em>in transit</em>;
                        it is the counterpart to{" "}
                        <Link href="/glossary/what-is-encryption-at-rest" className="text-sky-400 hover:underline">encryption at rest</Link>,
                        which protects data <em>in storage</em>. HTTPS is simply ordinary HTTP web
                        traffic running inside a TLS tunnel, but the same protocol also secures email
                        delivery, API calls, database connections, and much more. And because TLS
                        verifies identity at every connection, it is a quiet but essential building
                        block of a{" "}
                        <Link href="/glossary/what-is-zero-trust" className="text-sky-400 hover:underline">zero trust</Link> architecture.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">When it matters</h2>
                    <p>
                        TLS matters everywhere data crosses a network, which today means everywhere.
                        Browsers mark plain-HTTP sites as &quot;Not Secure,&quot; search engines favor HTTPS,
                        and every compliance framework —{" "}
                        <Link href="/glossary/what-is-soc-2" className="text-sky-400 hover:underline">SOC 2</Link>,
                        PCI-DSS, HIPAA — expects sensitive data to be encrypted in transit. The trap
                        is assuming the padlock means the job is done. A site can show a valid
                        padlock while still accepting deprecated TLS versions, supporting weak cipher
                        suites, mishandling certificate validation on its back-end API calls, or
                        failing to redirect insecure requests to HTTPS. These misconfigurations are
                        invisible to a normal user and are exactly the kind of thing a careful{" "}
                        <Link href="/glossary/what-is-penetration-testing" className="text-sky-400 hover:underline">penetration test</Link> exists
                        to catch.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        When we build{" "}
                        <Link href="/services/custom-business-software" className="text-sky-400 hover:underline">custom business software</Link>,
                        TLS is enforced end to end — modern protocol versions only, strong cipher
                        suites, HTTPS forced everywhere, and proper certificate validation on every
                        internal service call, not just the public front door. When we run a{" "}
                        <Link href="/services/web-app-pentest" className="text-sky-400 hover:underline">web application pentest</Link>,
                        TLS configuration is part of the checklist: we look for outdated protocols,
                        weak ciphers, mixed-content leaks, missing HTTPS enforcement, and the subtle
                        certificate-validation bugs that let a man-in-the-middle attacker slip in
                        despite the padlock. We map the findings to{" "}
                        <Link href="/glossary/what-is-mitre-attack" className="text-sky-400 hover:underline">MITRE ATT&amp;CK</Link> and
                        the{" "}
                        <Link href="/glossary/what-is-owasp-top-10" className="text-sky-400 hover:underline">OWASP Top 10</Link> so
                        you can see precisely how an attacker would intercept data you assumed was
                        protected. For a concrete example of transit-security done right, see our{" "}
                        <Link href="/blog/stripe-webhook-security-best-practices" className="text-sky-400 hover:underline">Stripe webhook security guide</Link>.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        pinned={["stripe-webhook-security-best-practices", "what-is-penetration-testing", "soc2-pentest-prep-guide-2026"]}
                        topics={["pentest", "stripe"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-encryption-at-rest" className="text-sky-400 hover:underline">What is encryption at rest?</Link></li>
                        <li><Link href="/glossary/what-is-zero-trust" className="text-sky-400 hover:underline">Zero trust architecture</Link></li>
                        <li><Link href="/glossary/what-is-multi-factor-authentication" className="text-sky-400 hover:underline">What is MFA?</Link></li>
                        <li><Link href="/glossary/what-is-owasp-top-10" className="text-sky-400 hover:underline">OWASP Top 10</Link></li>
                        <li><Link href="/glossary/what-is-penetration-testing" className="text-sky-400 hover:underline">What is penetration testing?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Padlock showing, but is it solid?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        Outdated protocols, weak ciphers, and certificate-validation bugs hide behind
                        a green padlock. We will find them. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-tls" />
                        <Link href="/services/web-app-pentest" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Web app penetration testing
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
