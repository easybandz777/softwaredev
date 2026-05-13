import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata: Metadata = pageMetadata({
    title: "What is Zero-Knowledge Architecture? | QUANT LAB",
    description:
        "Zero-knowledge architecture means the service provider cannot see the user's data even when subpoenaed. How it works, why it matters, and where QUANT LAB applies it.",
    slug: "/glossary/what-is-zero-knowledge-architecture",
});

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Zero-Knowledge Architecture",
    description:
        "Zero-knowledge architecture is a system design in which the service provider is structurally unable to read the user's data — encryption keys never reach the server, and the server stores only ciphertext it cannot decrypt.",
    url: "https://quantlabusa.dev/glossary/what-is-zero-knowledge-architecture",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "What is zero-knowledge architecture?", item: "https://quantlabusa.dev/glossary/what-is-zero-knowledge-architecture" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is zero-knowledge architecture?", acceptedAnswer: { "@type": "Answer", text: "A system design in which the service provider cannot read the user's data because encryption and decryption happen entirely on the client, and the keys never leave the user's devices." } },
        { "@type": "Question", name: "Is zero-knowledge architecture the same as zero-knowledge proofs?", acceptedAnswer: { "@type": "Answer", text: "No. Zero-knowledge proofs are a specific cryptographic primitive that lets a prover convince a verifier of a statement without revealing the underlying data. Zero-knowledge architecture is a system-design pattern that uses client-side encryption to keep server operators ignorant of plaintext." } },
        { "@type": "Question", name: "Who uses zero-knowledge architecture?", acceptedAnswer: { "@type": "Answer", text: "Password managers like 1Password and Bitwarden, secure messaging apps like Signal, end-to-end encrypted cloud storage providers like Tresorit and Proton Drive, and a growing slice of healthcare and legal SaaS." } },
        { "@type": "Question", name: "What are the limitations?", acceptedAnswer: { "@type": "Answer", text: "Server-side search and analytics are hard or impossible without leaking information. Password reset requires careful design — a forgotten password is forgotten data. Sharing requires per-recipient key exchange. Performance can suffer because the server cannot prefilter results." } },
        { "@type": "Question", name: "Does compliance require zero-knowledge?", acceptedAnswer: { "@type": "Answer", text: "Not usually by name. HIPAA, GDPR, and SOC 2 require strong encryption and access controls, which zero-knowledge architecture satisfies. Most compliance frameworks allow lower bars; zero-knowledge is a product-trust differentiator more than a regulatory one." } },
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
                        <li className="text-gray-300">What is zero-knowledge architecture?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Security</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is Zero-Knowledge Architecture?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        Zero-knowledge architecture is a system design in which the service provider is structurally unable to read the user's data — encryption keys are generated and held only on the user's devices, the server stores only opaque ciphertext, and even a subpoena, insider, or breach yields nothing useful.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Terminology, briefly</h2>
                    <p>
                        The phrase "zero-knowledge architecture" borrows the cryptography world's "zero-knowledge" prefix without strictly meaning the same thing. Zero-knowledge proofs (ZKPs) are a specific cryptographic primitive that lets you prove a statement is true without revealing why. Zero-knowledge architecture is a system-design pattern in which the provider has no knowledge of the protected data — usually because encryption is end-to-end with client-held keys. The mechanisms are different; the marketing word is shared. Be careful which one a vendor means.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The threat model</h2>
                    <p>
                        Normal SaaS has a fundamental trust problem: even if the user trusts the company today, they cannot trust everyone the company will hire forever, every government that will subpoena it, every breach it will eventually have. The data is sitting on the server in readable form, and any of those events can expose it. Zero-knowledge architecture moves the trust boundary. The server holds ciphertext that even the people running the server cannot decrypt. A breach exposes encrypted blobs. A subpoena returns encrypted blobs. A rogue employee sees encrypted blobs.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How it works mechanically</h2>
                    <p>
                        The user's password (or a hardware token, or a passkey) derives a key on the client. The key never leaves the device — it is not sent to the server, not stored unencrypted on disk, not visible to JavaScript in another tab. The user's data is encrypted before it is uploaded and decrypted only after it is downloaded. The server's role is reduced to a kind of dumb storage and synchronization service for blobs whose contents it has no view into. Authentication uses something like SRP or OPAQUE so that the password proves the user's identity to the server without the server ever seeing the password.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The honest tradeoffs</h2>
                    <p>
                        Search becomes hard. A normal SaaS does server-side full-text search by reading the documents; a zero-knowledge SaaS cannot. The standard answers are client-side search (download the index, search locally), searchable encryption (a heavyweight cryptographic technique), or accepting that search is limited to metadata. Sharing requires per-recipient encryption. Password reset is a real product decision — losing a password in a zero-knowledge product means losing data, and "I forgot my password, please let me back in" is fundamentally at odds with the architecture. Most products solve it with recovery keys or hardware-backed account recovery, never with email-based reset.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        Zero-knowledge architecture is appropriate for products whose data is genuinely sensitive — legal communications, healthcare records, financial positions, intellectual property — and whose customers will pay a premium for a credible promise that the vendor cannot read it. We build zero-knowledge or end-to-end encrypted slices into <Link href="/industries/legal-services" className="text-sky-400 hover:underline">legal</Link> and <Link href="/industries/healthcare" className="text-sky-400 hover:underline">healthcare</Link> products where this trust property is material.
                    </p>
                    <p>
                        For most <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platforms</Link> the architecture is overkill — and the limitations on search, analytics, and support are real product costs. We are deliberate about which slices of a system genuinely need it and which can live with strong encryption-at-rest plus a clean <Link href="/glossary/what-is-soc-2" className="text-sky-400 hover:underline">SOC 2</Link> posture. <Link href="/services/penetration-testing" className="text-sky-400 hover:underline">Our pen testers</Link> see the most common implementation flaws and can audit a zero-knowledge implementation end to end. <Link href="/contact" className="text-sky-400 hover:underline">Book a call</Link> to talk through whether you need this property at all.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-zero-trust" className="text-sky-400 hover:underline">What is zero trust?</Link></li>
                        <li><Link href="/glossary/what-is-zero-trust-network-access" className="text-sky-400 hover:underline">What is ZTNA?</Link></li>
                        <li><Link href="/glossary/what-is-secrets-management" className="text-sky-400 hover:underline">What is secrets management?</Link></li>
                        <li><Link href="/glossary/what-is-hipaa-compliance" className="text-sky-400 hover:underline">What is HIPAA compliance?</Link></li>
                        <li><Link href="/glossary/what-is-fido2" className="text-sky-400 hover:underline">What is FIDO2?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Sensitive enough to need zero-knowledge?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We design and audit zero-knowledge slices — and we are honest when a product does not actually need them.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-zero-knowledge" />
                        <Link href="/services/penetration-testing" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Penetration testing
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
