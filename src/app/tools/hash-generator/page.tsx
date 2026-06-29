import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Fingerprint, ArrowRight, Lock, ShieldCheck, Layers } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";
import { HashGenerator } from "./HashGenerator";

export const metadata: Metadata = pageMetadata({
    title: "Free SHA-256 & SHA-512 Hash Generator | QUANT LAB USA",
    description:
        "Generate SHA-1, SHA-256, SHA-384 and SHA-512 hex digests of any text using Web Crypto. Fast, free, and 100% in-browser — your input is never uploaded anywhere.",
    slug: "/tools/hash-generator",
    keywords: [
        "hash generator",
        "sha-256 generator",
        "sha-512 hash",
        "sha-1 hash online",
        "online hash tool",
        "checksum generator",
        "web crypto hash",
    ],
});

const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "SHA Hash Generator",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    url: "https://quantlabusa.dev/tools/hash-generator",
    description:
        "Compute SHA-1, SHA-256, SHA-384 and SHA-512 hex digests of text in your browser with the Web Crypto API. No data ever leaves your device.",
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Is my input sent to a server?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No. Every digest is computed in your browser with the native Web Crypto API (crypto.subtle.digest). Your text is encoded to UTF-8 bytes locally and hashed on your own CPU — nothing is uploaded, logged, or stored. You can verify this in your browser's network tab: hashing produces zero network requests. That makes it safe to hash secrets, file contents, or tokens you are checking, because the plaintext never leaves your machine.",
            },
        },
        {
            "@type": "Question",
            name: "Why is there no MD5 option?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The browser's SubtleCrypto API deliberately does not implement MD5, because MD5 is cryptographically broken — practical collisions have existed for years, so it is unsafe for signatures, integrity checks, or anything security-sensitive. This tool only offers the algorithms the platform actually provides: SHA-1, SHA-256, SHA-384, and SHA-512. Note that SHA-1 is also considered weak for collision resistance and should be treated as legacy; prefer SHA-256 or stronger for new work.",
            },
        },
        {
            "@type": "Question",
            name: "What is a hash, and what should I not use it for?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A cryptographic hash is a one-way function: it turns any input into a fixed-length fingerprint, and the same input always yields the same digest, but you cannot reverse it back to the input. Hashes are excellent for verifying integrity — confirming a download or message was not altered. They are not encryption, so never use a hash to hide data you need to recover. And critically, a plain SHA digest is the wrong tool for storing passwords: use a slow, salted password hash such as bcrypt, scrypt, or Argon2 instead, which are designed to resist brute-force attacks.",
            },
        },
        {
            "@type": "Question",
            name: "Do whitespace and encoding affect the result?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Absolutely — hashing is exact. A single trailing space, a different line ending (CRLF versus LF), or a stray byte order mark will produce a completely different digest. This tool hashes the precise UTF-8 byte sequence of whatever you type, so if your digest does not match an expected value, the usual culprit is invisible whitespace or a character-encoding mismatch between the two sides.",
            },
        },
        {
            "@type": "Question",
            name: "How long is each digest?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The hex length reflects the bit size: SHA-1 is 160 bits (40 hex characters), SHA-256 is 256 bits (64 hex characters), SHA-384 is 384 bits (96 hex characters), and SHA-512 is 512 bits (128 hex characters). A longer digest offers a larger output space and stronger collision resistance, at a small cost in size. For most integrity and fingerprinting needs SHA-256 is the sensible default.",
            },
        },
    ],
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Tools", item: "https://quantlabusa.dev/tools" },
        {
            "@type": "ListItem",
            position: 3,
            name: "Hash Generator",
            item: "https://quantlabusa.dev/tools/hash-generator",
        },
    ],
};

export default function HashGeneratorPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <div className="container mx-auto px-6 max-w-5xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/tools" className="hover:text-sky-400 transition-colors">Tools</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">Hash Generator</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-400 mb-6">
                        <Fingerprint className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        SHA Hash Generator
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-3xl">
                        Compute SHA-1, SHA-256, SHA-384, and SHA-512 hex digests of any text at once,
                        using the browser&apos;s built-in Web Crypto. Live as you type, completely
                        free, and entirely in your browser.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                            <Lock className="w-4 h-4 text-emerald-400" />
                            <span>In-browser, nothing uploaded</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Layers className="w-4 h-4 text-sky-400" />
                            <span>Four algorithms at once</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-amber-400" />
                            <span>Native Web Crypto, no libraries</span>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <HashGenerator />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        What this tool does, and the security caveats
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-5">
                        <p>
                            A <strong className="text-white">cryptographic hash</strong> is a one-way
                            function that turns any input into a fixed-length fingerprint. The same
                            input always produces the same digest, but you cannot run the function
                            backwards to recover the input. That property makes hashes the standard
                            tool for <strong className="text-white">integrity checks</strong> — proving
                            a file, message, or payload arrived exactly as it left.
                        </p>
                        <p>
                            This tool computes all four digests at once with the browser&apos;s native{" "}
                            <code className="text-sky-300">crypto.subtle.digest</code>. Your text is
                            encoded to UTF-8 bytes with <code className="text-sky-300">TextEncoder</code>{" "}
                            and hashed on your own CPU — no library is loaded and no request is made.
                            Because the plaintext never leaves your device, you can hash a secret you
                            are verifying without exposing it to a remote service. Note that Web Crypto
                            requires a secure context (HTTPS or localhost), which this site provides.
                        </p>
                        <p>
                            <strong className="text-white">A few caveats worth internalizing.</strong>{" "}
                            There is no MD5 here because SubtleCrypto refuses to implement it — MD5 is
                            broken and unsafe. SHA-1 is included for legacy verification but is also
                            weak against collisions; reach for SHA-256 or stronger on anything new. And
                            a plain SHA digest is the <em>wrong</em> way to store passwords: a fast hash
                            is trivially brute-forced, so use a deliberately slow, salted algorithm like
                            bcrypt, scrypt, or Argon2. Getting these choices right is exactly the kind
                            of detail we audit in a{" "}
                            <Link href="/services/penetration-testing" className="text-sky-400 underline-offset-2 hover:underline">
                                penetration test
                            </Link>
                            .
                        </p>
                        <p>
                            Finally, remember that hashing is byte-exact. A trailing space, a CRLF
                            instead of an LF, or a stray byte-order mark changes the digest entirely. If
                            two systems disagree on a hash, the cause is almost always invisible
                            whitespace or an encoding mismatch — not the algorithm.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How to use it</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-5">
                        <p>
                            Type or paste your text into the input box. All four digests recompute live
                            as you type, each shown with its bit length. Use a copy button to grab any
                            single digest. The character and byte counts help you spot trailing
                            whitespace when a digest does not match what you expected. Nothing is
                            stored, so a refresh clears everything.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-4">
                        {faqSchema.mainEntity.map((item) => (
                            <details
                                key={item.name}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-6 open:bg-[#0d1526]"
                            >
                                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-semibold text-white">
                                    <span>{item.name}</span>
                                    <ArrowRight className="w-4 h-4 text-sky-400 transition-transform group-open:rotate-90" />
                                </summary>
                                <p className="text-gray-400 mt-3 leading-relaxed text-sm">{item.acceptedAnswer.text}</p>
                            </details>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related tools</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {[
                            { label: "All free tools", href: "/tools" },
                            { label: "JWT decoder", href: "/tools/jwt-decoder" },
                            { label: "Base64 encoder / decoder", href: "/tools/base64-encoder-decoder" },
                            { label: "UUID & ID generator", href: "/tools/uuid-and-id-generator" },
                            { label: "Penetration testing", href: "/services/penetration-testing" },
                            { label: "Cybersecurity", href: "/services/cybersecurity" },
                            { label: "Tech glossary", href: "/glossary" },
                            { label: "Talk to QUANT LAB USA", href: "/contact" },
                        ].map((l) => (
                            <Link
                                key={l.href}
                                href={l.href}
                                className="rounded-xl border border-white/5 bg-[#0d1526]/60 hover:border-sky-400/30 hover:bg-[#0d1526] transition-colors p-4 text-sm text-gray-300 hover:text-white"
                            >
                                {l.label} <ArrowRight className="inline w-3 h-3 ml-1 text-sky-400" />
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts topics={["pentest"]} heading="Related security reading" />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 to-emerald-500/5 p-8 md:p-12 text-center">
                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                            Unsure if your crypto choices hold up?
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl mx-auto">
                            Weak password hashing, misused algorithms, and integrity gaps are some of
                            the most common findings in a security review. We assess how your
                            application handles hashing, secrets, and data integrity — and fix what we
                            find. Talk to us about a penetration test or secure-build engagement.
                        </p>
                        <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
                            Or reach us directly:{" "}
                            <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline">beltz@quantlabusa.dev</a>
                        </p>
                        <ConsultationCTA label="Book a 20-min Security Call" source="hash-generator" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
