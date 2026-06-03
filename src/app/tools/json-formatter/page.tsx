import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Braces, ArrowRight, Lock, CheckCircle2, Minimize2 } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";
import { JsonFormatter } from "./JsonFormatter";

export const metadata: Metadata = pageMetadata({
    title: "Free JSON Formatter, Validator & Minifier | QUANT LAB USA",
    description:
        "Paste JSON to pretty-print, minify, or validate it with clear line-and-column error messages. Fast, free, and 100% in-browser — your data is never uploaded.",
    slug: "/tools/json-formatter",
    keywords: [
        "json formatter",
        "json validator",
        "json beautifier",
        "json minifier",
        "pretty print json",
        "format json online",
        "json lint",
    ],
});

const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "JSON Formatter & Validator",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    url: "https://quantlabusa.dev/tools/json-formatter",
    description:
        "Pretty-print, minify, and validate JSON in your browser with precise error messages. No data ever leaves your device.",
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
            name: "Is my JSON sent to a server?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No. All parsing, formatting, and validation happen in your browser using the native JSON.parse and JSON.stringify functions. Nothing is uploaded, logged, or stored. You can confirm this by opening your browser's network tab — formatting produces zero network requests. That makes it safe for config files and API responses you would not want to paste into a remote service.",
            },
        },
        {
            "@type": "Question",
            name: "Why does my JSON fail to validate?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The most common causes are trailing commas, single quotes instead of double quotes, unquoted object keys, and comments — all of which are valid in JavaScript object literals but illegal in strict JSON. JSON requires double-quoted keys and strings, no trailing commas, and no comments. This tool surfaces the parser's error message along with the approximate line and column so you can jump straight to the problem character.",
            },
        },
        {
            "@type": "Question",
            name: "What is the difference between pretty-printing and minifying?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Pretty-printing adds indentation and line breaks so JSON is readable by humans — ideal when you are debugging an API response or editing a config file. Minifying strips all non-essential whitespace to produce the smallest valid representation, which is what you want when shipping JSON over the wire or embedding it in code. Both produce semantically identical data; only the whitespace differs.",
            },
        },
        {
            "@type": "Question",
            name: "Does formatting change my data?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No. The tool round-trips your input through JSON.parse and JSON.stringify, which preserves every value exactly. One subtlety worth knowing: object key order is preserved by modern engines, but JSON itself does not guarantee key order, so never rely on it for correctness. Also, very large integers beyond JavaScript's safe range can lose precision in any JSON parser — if you handle 64-bit IDs, transmit them as strings.",
            },
        },
        {
            "@type": "Question",
            name: "Can it handle large JSON files?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "It handles most everyday payloads — API responses, config files, exports of a few megabytes — without trouble, since everything runs locally on your machine's CPU. Extremely large documents (tens of megabytes) may feel sluggish because the browser must parse, re-serialize, and render the whole string. For files that big, a streaming parser in a build step is the better tool than any in-browser formatter.",
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
            name: "JSON Formatter",
            item: "https://quantlabusa.dev/tools/json-formatter",
        },
    ],
};

export default function JsonFormatterPage() {
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
                        <li className="text-gray-300">JSON Formatter</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-400 mb-6">
                        <Braces className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        JSON Formatter &amp; Validator
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-3xl">
                        Paste JSON to pretty-print it, minify it, or validate it with a clear
                        line-and-column error message. Live as you type, completely free, and
                        entirely in your browser.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                            <Lock className="w-4 h-4 text-emerald-400" />
                            <span>In-browser, nothing uploaded</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-sky-400" />
                            <span>Validate with precise errors</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Minimize2 className="w-4 h-4 text-amber-400" />
                            <span>Pretty-print or minify</span>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <JsonFormatter />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        What this tool does, and why it stays local
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-5">
                        <p>
                            This formatter does three jobs. It{" "}
                            <strong className="text-white">pretty-prints</strong> — adding
                            indentation so a dense API response becomes readable. It{" "}
                            <strong className="text-white">minifies</strong> — stripping whitespace
                            down to the smallest valid string for transport. And it{" "}
                            <strong className="text-white">validates</strong> — telling you the
                            moment your input stops being legal JSON, with the parser&apos;s message
                            and an approximate line and column to point you at the offending
                            character.
                        </p>
                        <p>
                            Everything happens in your browser with the native{" "}
                            <code className="text-sky-300">JSON.parse</code> and{" "}
                            <code className="text-sky-300">JSON.stringify</code> functions. There is
                            no server round-trip, which is the whole point: API responses,
                            environment configs, and webhook payloads frequently contain access
                            tokens, customer data, or internal hostnames you should never paste into
                            a remote service. Because this tool issues zero network requests, you can
                            format that data without it ever leaving your machine.
                        </p>
                        <p>
                            <strong className="text-white">The errors that trip everyone up</strong>{" "}
                            are the JavaScript-isms that are not legal JSON: trailing commas after
                            the last array element or object property, single quotes instead of
                            double quotes, unquoted keys, and <code className="text-sky-300">//</code>{" "}
                            comments. Strict JSON forbids all of these. If you are hand-editing a
                            config and it will not parse, that is almost always the cause — and the
                            line-and-column hint will land you within a character or two of it.
                        </p>
                        <p>
                            <strong className="text-white">A precision gotcha worth internalizing:</strong>{" "}
                            JSON numbers are IEEE 754 doubles in every JavaScript engine, so an
                            integer larger than 2^53 silently loses precision when parsed. If your
                            API returns 64-bit IDs (think Twitter-style snowflakes or large database
                            keys), serialize them as strings. We see this bite teams when a perfectly
                            valid-looking ID quietly rounds off in transit. We design APIs to avoid
                            exactly this class of bug —{" "}
                            <Link href="/blog/nextjs-stripe-integration-guide" className="text-sky-400 underline-offset-2 hover:underline">
                                our Next.js and Stripe integration guide
                            </Link>{" "}
                            walks through robust request and response handling end to end.
                        </p>
                        <p>
                            Need to go from a sample JSON payload to a typed schema or database
                            model? Pair this with our{" "}
                            <Link href="/tools/schema-generator" className="text-sky-400 underline-offset-2 hover:underline">
                                schema generator
                            </Link>
                            , and learn the fundamentals in our glossary entry on{" "}
                            <Link href="/glossary/what-is-an-api" className="text-sky-400 underline-offset-2 hover:underline">
                                what an API is
                            </Link>
                            .
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How to use it</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-5">
                        <p>
                            Paste your JSON into the input box. Pick an indent style — two spaces,
                            four spaces, or minify — and the formatted output updates live. If the
                            input is valid you will see a green confirmation and a character and line
                            count; if it is not, you will get the exact parser error and the
                            approximate position to fix. Use the copy button to grab the result.
                            Nothing is stored, so a refresh clears everything.
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
                            { label: "Schema generator", href: "/tools/schema-generator" },
                            { label: "API development", href: "/services/api-development" },
                            { label: "Custom business software", href: "/services/custom-business-software" },
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
                            Drowning in undocumented JSON APIs?
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl mx-auto">
                            We build APIs with strict schemas, predictable error shapes, and typed
                            clients — so your payloads validate the first time and stay stable as
                            you ship. Talk to us about API design, integration work, or untangling
                            a legacy service that returns surprises.
                        </p>
                        <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
                            Or reach us directly:{" "}
                            <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline">(770) 652-1282</a>{" "}
                            · <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline">beltz@quantlabusa.dev</a>
                        </p>
                        <ConsultationCTA label="Book a 20-min Architecture Call" source="json-formatter" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
