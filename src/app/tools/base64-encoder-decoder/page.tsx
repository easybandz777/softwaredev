import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Binary, ArrowRight, Lock, Repeat, Link2 } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";
import { Base64Tool } from "./Base64Tool";

export const metadata: Metadata = pageMetadata({
    title: "Free Base64 Encoder & Decoder (incl. base64url) | QUANT LAB USA",
    description:
        "Encode and decode text to and from Base64 and URL-safe base64url, with full UTF-8 support. Fast, free, and 100% in-browser — your text is never uploaded.",
    slug: "/tools/base64-encoder-decoder",
    keywords: [
        "base64 encoder",
        "base64 decoder",
        "base64url encode",
        "base64url decode",
        "encode text to base64",
        "decode base64 online",
        "base64 converter",
    ],
});

const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Base64 Encoder & Decoder",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    url: "https://quantlabusa.dev/tools/base64-encoder-decoder",
    description:
        "Encode and decode text to and from Base64 and base64url in your browser with UTF-8 support. Nothing is uploaded.",
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
            name: "Is Base64 encryption?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No — and this is the single most important thing to understand. Base64 is an encoding, not encryption. It reversibly maps binary data onto 64 printable ASCII characters so that data can travel safely through text-only channels like email headers or JSON. Anyone can decode it instantly with no key. Never use Base64 to hide passwords, tokens, or secrets; it provides zero confidentiality. Use real encryption (and TLS in transit) when data must stay private.",
            },
        },
        {
            "@type": "Question",
            name: "What is the difference between Base64 and base64url?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Standard Base64 uses + and / as its last two characters and pads with = signs. Those characters have special meaning in URLs and filenames, so base64url swaps + for - and / for _, and usually drops the padding. It is the variant used inside JSON Web Tokens, in many JWT and OAuth flows, and anywhere a value rides in a URL path or query string. Toggle the URL-safe option in this tool to switch between the two.",
            },
        },
        {
            "@type": "Question",
            name: "Does it handle emoji and non-English text?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. The tool encodes text as UTF-8 bytes before Base64-encoding, so emoji, accented characters, and non-Latin scripts round-trip correctly. This matters because the raw btoa function only handles single-byte characters and throws on anything outside Latin-1. By going through UTF-8 first, the full Unicode range is supported in both directions.",
            },
        },
        {
            "@type": "Question",
            name: "Why is my Base64 output longer than the input?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Base64 represents every 3 bytes of input as 4 ASCII characters, so encoded output is roughly 33% larger than the original. That overhead is the cost of being text-safe. It is why you embed small assets like icons as Base64 data URIs but stream large files as binary — inlining a multi-megabyte image as Base64 bloats your HTML and hurts load time.",
            },
        },
        {
            "@type": "Question",
            name: "Is my text sent to a server?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No. Encoding and decoding happen entirely in your browser using the native btoa and atob functions over UTF-8 bytes. Nothing is uploaded, logged, or stored, and the tool makes zero network requests. You can verify this in your browser's network tab. That makes it safe for values you would not want to paste into a remote service.",
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
            name: "Base64 Encoder & Decoder",
            item: "https://quantlabusa.dev/tools/base64-encoder-decoder",
        },
    ],
};

export default function Base64Page() {
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
                        <li className="text-gray-300">Base64 Encoder &amp; Decoder</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-400 mb-6">
                        <Binary className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Base64 Encoder &amp; Decoder
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-3xl">
                        Encode text to Base64 or decode it back — with a one-click toggle for
                        URL-safe base64url and full UTF-8 support for emoji and non-English text.
                        Free, instant, and entirely in your browser.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                            <Lock className="w-4 h-4 text-emerald-400" />
                            <span>In-browser, nothing uploaded</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link2 className="w-4 h-4 text-sky-400" />
                            <span>Standard &amp; URL-safe variants</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Repeat className="w-4 h-4 text-amber-400" />
                            <span>Full UTF-8 round-trip</span>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <Base64Tool />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        What Base64 is for — and what it is not for
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-5">
                        <p>
                            Base64 solves one specific problem: moving arbitrary binary data through
                            channels that only safely carry text. It maps every three bytes onto four
                            printable ASCII characters drawn from a 64-symbol alphabet. That is why
                            you see it in email attachments (MIME), in data URIs that inline a small
                            image directly into HTML or CSS, in the header and payload of a JWT, and
                            in countless API fields that need to carry bytes inside JSON.
                        </p>
                        <p>
                            <strong className="text-white">It is not encryption.</strong> This bears
                            repeating because it is the most common and most dangerous
                            misunderstanding in the field. Base64 is fully reversible with no key —
                            decoding takes microseconds. We have found credentials &quot;protected&quot;
                            by Base64 in config files, in client-side code, and in logs, all of which
                            is equivalent to storing them in plain text. If a value needs to stay
                            secret, encrypt it properly and protect it in transit with{" "}
                            <Link href="/glossary/what-is-tls" className="text-sky-400 underline-offset-2 hover:underline">
                                TLS
                            </Link>
                            . Encoding and confidentiality are entirely different concerns.
                        </p>
                        <p>
                            <strong className="text-white">Standard vs. URL-safe.</strong> Classic
                            Base64 uses <code className="text-sky-300">+</code> and{" "}
                            <code className="text-sky-300">/</code> and pads with{" "}
                            <code className="text-sky-300">=</code>. Those characters get mangled in
                            URLs and filenames, so base64url substitutes{" "}
                            <code className="text-sky-300">-</code> and{" "}
                            <code className="text-sky-300">_</code> and drops the padding. This is the
                            variant JSON Web Tokens use — which is exactly why our{" "}
                            <Link href="/tools/jwt-decoder" className="text-sky-400 underline-offset-2 hover:underline">
                                JWT decoder
                            </Link>{" "}
                            decodes base64url, not standard Base64. Flip the URL-safe toggle here to
                            match whichever your system expects.
                        </p>
                        <p>
                            <strong className="text-white">The UTF-8 detail that trips people up.</strong>{" "}
                            The browser&apos;s native <code className="text-sky-300">btoa</code> only
                            accepts single-byte (Latin-1) characters and throws the moment you hand it
                            an emoji or an accented letter. This tool encodes your text to UTF-8 bytes
                            first, so the entire Unicode range round-trips cleanly. If you have ever
                            seen a &quot;character out of range&quot; error from <code className="text-sky-300">btoa</code>,
                            this is the fix.
                        </p>
                        <p>
                            Sending binary data through APIs correctly — when to Base64-inline,
                            when to use multipart uploads, when to hand back a signed URL — is a
                            recurring design decision. Our{" "}
                            <Link href="/blog/nextjs-stripe-integration-guide" className="text-sky-400 underline-offset-2 hover:underline">
                                Next.js and Stripe integration guide
                            </Link>{" "}
                            and our{" "}
                            <Link href="/services/api-development" className="text-sky-400 underline-offset-2 hover:underline">
                                API development services
                            </Link>{" "}
                            cover the trade-offs in depth.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How to use it</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-5">
                        <p>
                            Choose Encode or Decode. Type or paste your text on the left and the
                            result updates live on the right. Tick URL-safe if you need base64url
                            (for example, to match a JWT segment). The Swap button feeds the current
                            output back as input and flips direction — handy for round-tripping. If
                            you try to decode something that is not valid Base64, you will get a clear
                            error instead of garbled output. Everything runs locally, so closing the
                            tab clears it all.
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
                            { label: "JSON formatter", href: "/tools/json-formatter" },
                            { label: "Regex tester", href: "/tools/regex-tester" },
                            { label: "API development", href: "/services/api-development" },
                            { label: "Web app pentest", href: "/services/web-app-pentest" },
                            { label: "What is TLS?", href: "/glossary/what-is-tls" },
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
                    <RelatedPosts topics={["stack"]} heading="Related engineering reading" />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 to-emerald-500/5 p-8 md:p-12 text-center">
                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                            Encoding a secret is not securing it
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl mx-auto">
                            If your application leans on Base64 anywhere it should be using real
                            encryption, that is a finding waiting to happen. We design systems that
                            handle credentials and sensitive data correctly, and we audit the ones
                            you already run. Talk to us about a build or a security review.
                        </p>
                        <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
                            Or reach us directly:{" "}
                            <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline">(770) 652-1282</a>{" "}
                            · <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline">beltz@quantlabusa.dev</a>
                        </p>
                        <ConsultationCTA label="Book a 20-min Security Review" source="base64-tool" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
