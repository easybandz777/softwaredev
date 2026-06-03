import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is Encryption at Rest? Plain-English Definition | QUANT LAB USA",
    description:
        "Encryption at rest scrambles stored data so a stolen disk or database is useless without the key. Plain-English definition, how it works, and its limits — by QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-encryption-at-rest" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Encryption at Rest",
    description:
        "Encryption at rest is the practice of encrypting data while it is stored on disk, in a database, or in backups, so that physical access to the storage media does not grant access to the data without the decryption key.",
    url: "https://quantlabusa.dev/glossary/what-is-encryption-at-rest",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "What is Encryption at Rest?", item: "https://quantlabusa.dev/glossary/what-is-encryption-at-rest" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is encryption at rest?", acceptedAnswer: { "@type": "Answer", text: "Encryption at rest is the practice of encrypting data while it sits in storage — on disk, in a database, or in backups — so that stealing the physical media or a raw copy gives an attacker scrambled bytes instead of readable data." } },
        { "@type": "Question", name: "What is the difference between encryption at rest and encryption in transit?", acceptedAnswer: { "@type": "Answer", text: "Encryption at rest protects stored data; encryption in transit, usually via TLS, protects data while it moves across a network. They defend against different attacks, and a secure system needs both." } },
        { "@type": "Question", name: "Does encryption at rest protect against hackers in my application?", acceptedAnswer: { "@type": "Answer", text: "Largely no. Encryption at rest defends against someone who steals the disk, the backup, or a raw database file. An attacker who compromises your running application reads the data through the app, which sees it already decrypted. It is one layer, not a complete defense." } },
        { "@type": "Question", name: "Is encryption at rest required for compliance?", acceptedAnswer: { "@type": "Answer", text: "It is expected by most frameworks. SOC 2, HIPAA, and PCI-DSS all treat encryption of stored sensitive data as a baseline control, and many cloud providers enable it by default." } },
        { "@type": "Question", name: "Where are the encryption keys stored?", acceptedAnswer: { "@type": "Answer", text: "In a separate key management system (KMS) or hardware security module, kept apart from the encrypted data. If the keys sit next to the data they protect, an attacker who steals the data usually steals the keys too, defeating the purpose." } },
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
                        <li className="text-gray-300">What is Encryption at Rest?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Security</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is Encryption at Rest?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        Encryption at rest is the practice of scrambling your data while it sits in storage — on a disk, in a database, in a backup — so that anyone who physically steals the storage gets unreadable gibberish instead of your actual information.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What does it mean?</h2>
                    <p>
                        Data spends its life in three states: in use (loaded in memory while a
                        program works on it), in transit (moving across a network), and at rest
                        (sitting in storage waiting to be read again). Encryption at rest is the
                        protection for that third state. The data is transformed into ciphertext
                        using an encryption algorithm and a key, and without the key the stored bytes
                        are mathematically useless.
                    </p>
                    <p>
                        The threat it defends against is concrete and physical: a stolen laptop, a
                        decommissioned hard drive that was not wiped, a backup tape that fell off a
                        truck, or a raw database file an attacker manages to copy off a server. In
                        every one of those cases, encryption at rest is the difference between &quot;an
                        attacker has our customer data&quot; and &quot;an attacker has a brick of random-looking
                        bytes.&quot; It is the locked safe, not the locked front door — it protects the
                        contents specifically when someone has already walked off with the container.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where the term came from</h2>
                    <p>
                        Encryption itself is ancient, but &quot;at rest&quot; as a distinct category became
                        standard vocabulary as the industry settled on the three-states model of data
                        protection (in use, in transit, at rest) in the 2000s. The driver was a wave
                        of embarrassing breaches caused not by clever hacking but by lost or stolen
                        hardware — laptops left in cars, drives sold on auction sites with data still
                        on them. Regulators responded: many U.S. data-breach notification laws carve
                        out a &quot;safe harbor&quot; that excuses you from notifying customers if the lost
                        data was encrypted, which turned encryption at rest from a nice-to-have into
                        a financial and legal incentive almost overnight.
                    </p>
                    <p>
                        Cloud computing then made it nearly frictionless. Where encrypting a disk
                        once required deliberate effort, the major cloud providers now encrypt
                        storage volumes, managed databases, and object storage by default, so for
                        most modern applications encryption at rest is the baseline rather than the
                        exception.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How it works</h2>
                    <p>
                        Under the hood, the data is encrypted with a symmetric algorithm — almost
                        always AES, typically with 256-bit keys — because symmetric encryption is
                        fast enough to encrypt and decrypt large volumes on the fly. Encryption can
                        happen at different layers: full-disk encryption protects the entire volume,
                        database-level encryption (often called transparent data encryption) protects
                        the database files, and application-level or field-level encryption protects
                        specific sensitive columns even from the database administrator.
                    </p>
                    <p>
                        The part that actually determines whether encryption at rest is meaningful is
                        key management. The whole scheme collapses if the decryption key is stored
                        right next to the data it protects — an attacker who steals one steals both.
                        Done correctly, keys live in a separate key management system (KMS) or
                        hardware security module, with strict access controls and rotation, which is
                        exactly the discipline covered by{" "}
                        <Link href="/glossary/what-is-secrets-management" className="text-sky-400 hover:underline">secrets management</Link>. A
                        well-run system can also revoke access by simply destroying a key, rendering
                        the corresponding data permanently unreadable.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">When it matters</h2>
                    <p>
                        Encryption at rest matters anywhere you store data you would not want exposed
                        if the storage were stolen — which is essentially everywhere personal,
                        financial, or proprietary data lives. It is an explicit expectation in{" "}
                        <Link href="/glossary/what-is-soc-2" className="text-sky-400 hover:underline">SOC 2</Link>,
                        HIPAA, and PCI-DSS, and it is one of the cheapest controls to satisfy given
                        modern cloud defaults. The critical thing to understand is its limit:
                        encryption at rest does <em>nothing</em> against an attacker who compromises
                        your running application, because the application reads the data through a
                        layer that has already decrypted it. It defends against physical theft of
                        storage, not against logical compromise of the system. That is precisely why
                        it must be paired with{" "}
                        <Link href="/glossary/what-is-tls" className="text-sky-400 hover:underline">encryption in transit</Link>,
                        strong access controls, and application security — it is one layer of defense
                        in depth, never the whole wall.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        When we build{" "}
                        <Link href="/services/custom-business-software" className="text-sky-400 hover:underline">custom business software</Link>,
                        encryption at rest is a default rather than an afterthought — we encrypt
                        storage and databases, keep keys in a dedicated management system separate
                        from the data, and apply field-level encryption to the most sensitive columns
                        where it is warranted. When we run a{" "}
                        <Link href="/services/penetration-testing" className="text-sky-400 hover:underline">penetration test</Link>,
                        we test the thing teams most often get wrong: not whether the checkbox is
                        ticked, but whether the keys are protected, whether the application leaks
                        decrypted data through other paths, and whether an attacker who lands in your
                        environment can reach the data anyway. We map those findings to{" "}
                        <Link href="/glossary/what-is-mitre-attack" className="text-sky-400 hover:underline">MITRE ATT&amp;CK</Link> so
                        you see how an adversary would actually get to your data despite the
                        encryption. For a related deep-dive on protecting sensitive data flows, see
                        our{" "}
                        <Link href="/blog/stripe-webhook-security-best-practices" className="text-sky-400 hover:underline">Stripe webhook security guide</Link>.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        pinned={["stripe-webhook-security-best-practices", "soc2-pentest-prep-guide-2026", "what-is-penetration-testing"]}
                        topics={["compliance", "pentest"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-tls" className="text-sky-400 hover:underline">What is TLS?</Link></li>
                        <li><Link href="/glossary/what-is-secrets-management" className="text-sky-400 hover:underline">What is secrets management?</Link></li>
                        <li><Link href="/glossary/what-is-soc-2" className="text-sky-400 hover:underline">What is SOC 2?</Link></li>
                        <li><Link href="/glossary/what-is-zero-trust" className="text-sky-400 hover:underline">Zero trust architecture</Link></li>
                        <li><Link href="/glossary/what-is-penetration-testing" className="text-sky-400 hover:underline">What is penetration testing?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Is your data actually protected?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        Ticking the encryption box is easy; protecting the keys and closing the leak
                        paths is the hard part. We will test the difference. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-encryption-at-rest" />
                        <Link href="/services/penetration-testing" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Penetration testing services
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
