import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is PKI? Public Key Infrastructure Explained | QUANT LAB USA",
    description:
        "PKI is the system of keys, certificates, and authorities that proves who owns a public key. Plain-English definition of CAs, chains, and revocation. QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-public-key-infrastructure" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Public Key Infrastructure (PKI)",
    description:
        "PKI is the framework of certificate authorities, digital certificates, and revocation mechanisms that binds public keys to verified identities so parties can trust each other's keys.",
    url: "https://quantlabusa.dev/glossary/what-is-public-key-infrastructure",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "Public Key Infrastructure (PKI)", item: "https://quantlabusa.dev/glossary/what-is-public-key-infrastructure" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is PKI in one sentence?", acceptedAnswer: { "@type": "Answer", text: "PKI is the system of certificate authorities, digital certificates, and revocation mechanisms that proves a given public key really belongs to a given identity, so two parties who have never met can trust each other's keys." } },
        { "@type": "Question", name: "What is a certificate authority?", acceptedAnswer: { "@type": "Answer", text: "A certificate authority, or CA, is a trusted organization that verifies an identity and then issues a digitally signed certificate binding that identity to a public key. Browsers and operating systems ship with a list of CAs they trust by default." } },
        { "@type": "Question", name: "What is the difference between a public and private key?", acceptedAnswer: { "@type": "Answer", text: "A key pair has a public key that can be shared freely and a private key that must be kept secret. Anything encrypted to the public key can only be decrypted by the private key, and a signature made with the private key can be verified by the public key." } },
        { "@type": "Question", name: "What is certificate revocation?", acceptedAnswer: { "@type": "Answer", text: "Revocation is how a CA declares a certificate invalid before it expires, usually because the private key was compromised. Clients check revocation status via Certificate Revocation Lists or the Online Certificate Status Protocol, often stapled into the TLS handshake." } },
        { "@type": "Question", name: "Is PKI the same as TLS?", acceptedAnswer: { "@type": "Answer", text: "No. TLS is a protocol that uses PKI. PKI provides the certificates and trust chain; TLS uses those certificates to authenticate a server and negotiate an encrypted session. PKI also underpins code signing, email signing, and device identity." } },
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
                        <li className="text-gray-300">Public Key Infrastructure (PKI)</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Security</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is Public Key Infrastructure (PKI)?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        PKI is the framework of certificate authorities, digital certificates, and revocation mechanisms that answers one hard question: when you receive a public key claiming to belong to "your bank," how do you know it actually does? PKI binds keys to verified identities through chains of trusted signatures, which is what lets total strangers on the internet establish trust without ever having exchanged a secret in advance.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The problem it solves</h2>
                    <p>
                        Public-key cryptography lets anyone encrypt a message to your
                        public key or verify your signature — but it has a gaping hole:
                        nothing in the math says a given public key belongs to a given
                        person. An attacker can generate a key pair and claim it is your
                        bank's. PKI fills that gap with a chain of trust. A small number
                        of certificate authorities are trusted in advance, baked into
                        your browser and operating system, and they vouch for everyone
                        else by signing certificates. Trust the authority, and you can
                        transitively trust everyone it has signed for.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Certificates and the chain of trust</h2>
                    <p>
                        A digital certificate — usually in the X.509 format — bundles a
                        public key together with an identity, an expiry date, and the
                        signature of the authority that issued it. Certificates form a
                        chain: a website's certificate is signed by an intermediate
                        authority, which is signed by a root authority your device
                        already trusts. To validate, a client walks the chain upward,
                        checking each signature, until it reaches a trusted root. If
                        every link verifies and nothing has expired or been revoked, the
                        key is accepted. This is the machinery that makes the padlock in
                        your browser meaningful.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Issuance, expiry, and revocation</h2>
                    <p>
                        Certificates have a lifecycle. They are issued after the
                        authority verifies the requester — for a website, often just
                        proof of domain control, which is what services like Let's
                        Encrypt automate for free. They expire on a fixed date, forcing
                        periodic renewal so stale keys do not linger. And they can be
                        revoked early if a private key is stolen. Revocation is checked
                        through Certificate Revocation Lists or the Online Certificate
                        Status Protocol, the latter often "stapled" into the handshake so
                        the server proves its own freshness. Expired or unrenewed
                        certificates are a leading cause of preventable outages.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where PKI shows up</h2>
                    <p>
                        Most people meet PKI through{" "}
                        <Link href="/glossary/what-is-tls" className="text-sky-400 hover:underline">TLS</Link>,
                        the protocol behind HTTPS, which uses certificates to
                        authenticate the server before negotiating an encrypted session.
                        But the same infrastructure underpins code signing — proving an
                        app came from a real publisher and was not tampered with — as
                        well as signed email, document signing, and machine identity in
                        zero-trust networks where every device carries a certificate.
                        Internally, organizations often run a private PKI to issue
                        certificates to their own servers, services, and employees, with
                        their own root authority rather than a public one.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        PKI is load-bearing in nearly everything we ship. Our{" "}
                        <Link href="/services/cloud-infrastructure" className="text-sky-400 hover:underline">cloud infrastructure</Link>{" "}
                        builds automate certificate issuance and renewal so a forgotten
                        expiry never takes a service down, and service-to-service traffic
                        is authenticated with certificates rather than shared secrets.
                        When we run a{" "}
                        <Link href="/services/penetration-testing" className="text-sky-400 hover:underline">penetration test</Link>,
                        we routinely find weak{" "}
                        <Link href="/glossary/what-is-tls" className="text-sky-400 hover:underline">TLS</Link>{" "}
                        configurations, certificates that are never validated, and{" "}
                        <Link href="/glossary/what-is-secrets-management" className="text-sky-400 hover:underline">private keys</Link>{" "}
                        sitting unprotected in repositories — any one of which quietly
                        undermines the entire trust model.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Operating PKI without surprises</h2>
                    <p>
                        The recurring lessons are about operations, not cryptography.
                        Automate renewal so humans never have to remember a date.
                        Protect private keys as the crown jewels — ideally in a hardware
                        security module or managed key service, never in source control.
                        Keep the certificate chain short and complete so clients can
                        actually validate it. Plan for revocation before you need it, and
                        test that clients honor it. PKI rarely fails because the math is
                        broken; it fails because a certificate expired, a key leaked, or
                        a chain was misconfigured and nobody noticed until customers did.
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
                        <li><Link href="/glossary/what-is-hashing" className="text-sky-400 hover:underline">What is hashing?</Link></li>
                        <li><Link href="/glossary/what-is-encryption-at-rest" className="text-sky-400 hover:underline">What is encryption at rest?</Link></li>
                        <li><Link href="/glossary/what-is-secrets-management" className="text-sky-400 hover:underline">What is secrets management?</Link></li>
                        <li><Link href="/glossary/what-is-zero-trust" className="text-sky-400 hover:underline">What is Zero Trust?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Certificates causing outages or audit findings?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We automate certificate lifecycle and key management for
                        cloud-first teams, then test the trust model. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-pki" />
                        <Link href="/services/cloud-infrastructure" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Cloud infrastructure
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
