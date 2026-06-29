import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Link2, ArrowRight, Lock, Repeat, SlidersHorizontal } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";
import { UrlEncoderDecoder } from "./UrlEncoderDecoder";

export const metadata: Metadata = pageMetadata({
    title: "Free URL Encoder / Decoder Online | QUANT LAB USA",
    description:
        "Percent-encode or decode URLs and query values online. Switch between whole-URL and single-component modes. Fast, free, and 100% in-browser — nothing is uploaded.",
    slug: "/tools/url-encoder-decoder",
    keywords: [
        "url encoder",
        "url decoder",
        "percent encoding",
        "encodeuricomponent",
        "uri encode online",
        "query string encoder",
        "decode url",
    ],
});

const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "URL Encoder / Decoder",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    url: "https://quantlabusa.dev/tools/url-encoder-decoder",
    description:
        "Encode and decode URLs and URI components in your browser, with separate whole-URL and component modes. No data ever leaves your device.",
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
            name: "What is the difference between component and whole-URL mode?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Component mode uses encodeURIComponent / decodeURIComponent, which escapes every reserved character including the slash, colon, question mark, ampersand, and hash. Use it when you are encoding a single value that will live inside a URL — a query-string value, a path segment, or a fragment. Whole-URL mode uses encodeURI / decodeURI, which deliberately leaves the structural characters (: / ? # [ ] @ & =) intact so the overall URL stays well-formed. Picking the wrong one is the most common URL bug we see: encode a full URL with encodeURIComponent and the slashes turn into %2F, breaking the link.",
            },
        },
        {
            "@type": "Question",
            name: "Is my input sent to a server?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No. Encoding and decoding run entirely in your browser using the native encodeURIComponent, decodeURIComponent, encodeURI, and decodeURI functions. Nothing is uploaded, logged, or stored, and you can confirm that by checking your browser's network tab while you type — there are zero requests. That makes it safe for URLs that contain access tokens, signed query parameters, or internal hostnames you would not want to paste into a remote service.",
            },
        },
        {
            "@type": "Question",
            name: "Why does decoding sometimes throw an error?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The decode functions throw a URIError when they hit a malformed percent-escape — for example a lone % sign, or a multi-byte UTF-8 sequence such as %E0 that is missing its trailing bytes. When that happens this tool surfaces the error instead of returning a half-mangled string. The fix is almost always to re-encode the value correctly at the source, or to confirm you are decoding something that was actually percent-encoded in the first place.",
            },
        },
        {
            "@type": "Question",
            name: "How are spaces and plus signs handled?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "These functions encode a space as %20, which is correct for path segments and modern query strings. The legacy application/x-www-form-urlencoded format used by HTML form posts encodes a space as a plus sign (+) instead, and treats a literal plus as %2B. If you are round-tripping classic form data, be aware that decodeURIComponent will not turn a + back into a space — that conversion belongs to form decoding, not URI decoding.",
            },
        },
        {
            "@type": "Question",
            name: "Does encoding change the meaning of my URL?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Correct encoding never changes meaning — it only makes the URL safe to transmit by escaping characters that would otherwise be ambiguous or illegal. A correctly encoded URL decodes back to exactly the original. The danger is double-encoding: if you run an already-encoded string through the encoder again, %20 becomes %2520 and the link silently breaks. When in doubt, decode first, confirm you see the human-readable form, then encode once.",
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
            name: "URL Encoder / Decoder",
            item: "https://quantlabusa.dev/tools/url-encoder-decoder",
        },
    ],
};

export default function UrlEncoderDecoderPage() {
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
                        <li className="text-gray-300">URL Encoder / Decoder</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-400 mb-6">
                        <Link2 className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        URL Encoder &amp; Decoder
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-3xl">
                        Percent-encode or decode URLs and query-string values, with separate modes
                        for a single component versus a whole URL. Live as you type, completely free,
                        and entirely in your browser.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                            <Lock className="w-4 h-4 text-emerald-400" />
                            <span>In-browser, nothing uploaded</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <SlidersHorizontal className="w-4 h-4 text-sky-400" />
                            <span>Component vs whole-URL modes</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Repeat className="w-4 h-4 text-amber-400" />
                            <span>One-click round-trip</span>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <UrlEncoderDecoder />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        What this tool does, and why the mode matters
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-5">
                        <p>
                            URLs can only safely carry a limited alphabet of characters. Everything
                            else — spaces, ampersands, non-Latin letters, emoji — must be{" "}
                            <strong className="text-white">percent-encoded</strong>, replacing the raw
                            byte with a <code className="text-sky-300">%</code> followed by its
                            hexadecimal value. This tool encodes that representation and decodes it
                            back, in both directions, the instant you type.
                        </p>
                        <p>
                            The single most important choice is the{" "}
                            <strong className="text-white">scope</strong>.{" "}
                            <code className="text-sky-300">encodeURIComponent</code> (Component mode)
                            escapes <em>everything</em> reserved, including{" "}
                            <code className="text-sky-300">/ : ? # &amp; =</code>. That is exactly
                            what you want when you are dropping one untrusted value into a query
                            string. <code className="text-sky-300">encodeURI</code> (Whole-URL mode)
                            leaves those structural characters alone so the URL stays parseable. Feed
                            a complete URL through the component encoder by mistake and every slash
                            becomes <code className="text-sky-300">%2F</code> — a classic broken-link
                            bug.
                        </p>
                        <p>
                            Everything runs locally with the browser&apos;s native URI functions, so
                            there are no network requests. That privacy matters more than it first
                            appears: query strings routinely carry signed tokens, session
                            identifiers, OAuth state, and internal hostnames. Because nothing leaves
                            your machine, you can safely decode a suspicious callback URL to see what
                            it actually contains. We build that same defensive instinct into the
                            software and security work we ship —{" "}
                            <Link href="/services/cybersecurity" className="text-sky-400 underline-offset-2 hover:underline">
                                see our cybersecurity services
                            </Link>
                            .
                        </p>
                        <p>
                            <strong className="text-white">The other trap is double-encoding.</strong>{" "}
                            If a value is already encoded and you encode it again,{" "}
                            <code className="text-sky-300">%20</code> turns into{" "}
                            <code className="text-sky-300">%2520</code> and the link silently breaks.
                            The safe habit is to decode first, confirm you see the human-readable
                            string, then encode exactly once. Use the &ldquo;Use output as input&rdquo;
                            button to round-trip a value and verify it survives the trip unchanged.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How to use it</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-5">
                        <p>
                            Choose Encode or Decode, then pick a scope — Component for a single value,
                            or Whole URL for a full address. Type or paste your text and the result
                            updates live. If a decode fails because of a malformed escape, you will
                            see the exact error rather than a garbled string. Copy the output with one
                            click, or send it straight back through with &ldquo;Use output as
                            input&rdquo; to confirm a clean round-trip. Nothing is stored; a refresh
                            clears everything.
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
                            { label: "Base64 encoder / decoder", href: "/tools/base64-encoder-decoder" },
                            { label: "JSON formatter", href: "/tools/json-formatter" },
                            { label: "JWT decoder", href: "/tools/jwt-decoder" },
                            { label: "API development", href: "/services/api-development" },
                            { label: "Cybersecurity", href: "/services/cybersecurity" },
                            { label: "What is an API?", href: "/glossary/what-is-an-api" },
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
                            Fighting URLs that break in production?
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl mx-auto">
                            Encoding bugs, double-escaped redirects, and leaky query parameters are
                            symptoms of integration code that was never designed carefully. We build
                            APIs and web apps with correct encoding, signed URLs, and predictable
                            routing baked in. Talk to us about integration work or a security review.
                        </p>
                        <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
                            Or reach us directly:{" "}
                            <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline">beltz@quantlabusa.dev</a>
                        </p>
                        <ConsultationCTA label="Book a 20-min Architecture Call" source="url-encoder-decoder" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
