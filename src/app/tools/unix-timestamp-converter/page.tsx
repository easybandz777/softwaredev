import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Clock, ArrowRight, Lock, RefreshCw, Globe2 } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";
import { UnixTimestampConverter } from "./UnixTimestampConverter";

export const metadata: Metadata = pageMetadata({
    title: "Unix Timestamp Converter (Epoch ↔ Date) | QUANT LAB USA",
    description:
        "Convert Unix epoch timestamps to human-readable UTC and local dates and back, in seconds or milliseconds. Fast, free, and 100% in-browser — nothing is uploaded.",
    slug: "/tools/unix-timestamp-converter",
    keywords: [
        "unix timestamp converter",
        "epoch converter",
        "unix time to date",
        "timestamp to date",
        "epoch to human readable",
        "milliseconds to date",
        "utc timestamp converter",
    ],
});

const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Unix Timestamp Converter",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    url: "https://quantlabusa.dev/tools/unix-timestamp-converter",
    description:
        "Convert between Unix epoch timestamps and human-readable UTC or local datetimes, in seconds or milliseconds, entirely in your browser. No data ever leaves your device.",
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
            name: "What is a Unix timestamp?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A Unix timestamp, also called epoch time, is the number of seconds that have elapsed since 00:00:00 UTC on 1 January 1970, not counting leap seconds. It is a single integer that represents an exact instant independent of time zone, which is why systems use it for logs, databases, tokens, and APIs. Because it is just a count from a fixed origin, the same timestamp means the same moment everywhere on Earth — the time zone only matters when you format it for a human.",
            },
        },
        {
            "@type": "Question",
            name: "Seconds or milliseconds — how do I tell them apart?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "It is the single most common timestamp bug. Unix tools and most backends use seconds, while JavaScript's Date and many web APIs use milliseconds — a factor of 1000 difference. A quick sanity check: a current seconds-based timestamp is about 10 digits, while a milliseconds one is about 13 digits. If a date comes out in 1970 you almost certainly fed milliseconds into a seconds parser; if it lands tens of thousands of years in the future, you did the reverse. This tool lets you pick the unit explicitly so there is no guessing.",
            },
        },
        {
            "@type": "Question",
            name: "Why do UTC and local time differ here?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The underlying instant is identical; only the presentation changes. UTC is the universal reference with no offset, and it is what you should store and transmit. Local time applies your machine's time-zone offset and daylight-saving rules so the value reads naturally to you. The golden rule for software is store in UTC, display in local: keep every timestamp as UTC (or a raw epoch integer) in your database and logs, and convert to the user's zone only at the very edge when you render it.",
            },
        },
        {
            "@type": "Question",
            name: "Is my data sent anywhere?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No. Every conversion uses the browser's native Date object and runs entirely on your machine — there are no network requests, and nothing is logged or stored. The live current-time display simply reads your system clock. You can confirm the absence of traffic in your browser's network tab. That makes it safe to paste timestamps pulled from production logs or access tokens without exposing them to a third party.",
            },
        },
        {
            "@type": "Question",
            name: "What about the year 2038 problem?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Systems that store Unix time in a signed 32-bit integer overflow on 19 January 2038, when the second count exceeds 2,147,483,647 and wraps to a negative number. The fix is to use 64-bit timestamps, which most modern languages and databases already do. This tool uses JavaScript numbers, which represent the millisecond value as a double and comfortably cover dates far beyond 2038 — though extremely distant dates eventually hit the engine's safe-integer limits, at which point precision degrades.",
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
            name: "Unix Timestamp Converter",
            item: "https://quantlabusa.dev/tools/unix-timestamp-converter",
        },
    ],
};

export default function UnixTimestampConverterPage() {
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
                        <li className="text-gray-300">Unix Timestamp Converter</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 mb-6">
                        <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Unix Timestamp Converter
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-3xl">
                        Convert Unix epoch timestamps to readable UTC and local dates — and back —
                        in seconds or milliseconds, with a live clock. Updates as you type,
                        completely free, and entirely in your browser.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                            <Lock className="w-4 h-4 text-emerald-400" />
                            <span>In-browser, nothing uploaded</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <RefreshCw className="w-4 h-4 text-sky-400" />
                            <span>Both directions, live</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Globe2 className="w-4 h-4 text-amber-400" />
                            <span>UTC &amp; local time</span>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <UnixTimestampConverter />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        What this tool does, and the traps to avoid
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-5">
                        <p>
                            A <strong className="text-white">Unix timestamp</strong> is just an
                            integer: the number of seconds since the start of 1 January 1970 UTC. That
                            simplicity is its strength — it pins down an exact instant with no time-zone
                            ambiguity, which is why logs, databases, JWTs, and APIs lean on it. This
                            tool converts that integer into readable UTC and local datetimes and back
                            again, recalculating the moment you type.
                        </p>
                        <p>
                            <strong className="text-white">The seconds-versus-milliseconds mismatch</strong>{" "}
                            is the bug we see most often. The Unix convention is seconds; JavaScript&apos;s{" "}
                            <code className="text-sky-300">Date</code> and many web APIs use
                            milliseconds — a 1000× difference. Feed seconds into a millisecond parser
                            and your date lands in 1970; do the reverse and it rockets tens of thousands
                            of years into the future. A current seconds value is ~10 digits and a
                            milliseconds value is ~13, so the digit count is a fast sanity check. Here
                            you choose the unit explicitly, so there is nothing to guess.
                        </p>
                        <p>
                            The other recurring mistake is mixing up <strong className="text-white">UTC
                            and local time</strong>. The instant never changes — only how it is
                            displayed. The discipline that prevents an entire category of scheduling and
                            reporting bugs is simple: <em>store in UTC, display in local</em>. Keep raw
                            epoch integers or UTC in your database and logs, and apply the
                            viewer&apos;s time zone only at the final render step. We architect data
                            layers around exactly this principle —{" "}
                            <Link href="/services/custom-business-software" className="text-sky-400 underline-offset-2 hover:underline">
                                see our custom business software work
                            </Link>
                            .
                        </p>
                        <p>
                            Everything runs locally with the native <code className="text-sky-300">Date</code>{" "}
                            object — no requests, nothing stored — so you can safely paste timestamps
                            lifted straight from production logs or token payloads. The live clock at
                            the top simply reads your system time, which is handy for grabbing
                            &ldquo;now&rdquo; in either unit with one click.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How to use it</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-5">
                        <p>
                            To go from a timestamp to a date, choose Seconds or Millis, then type or
                            paste your epoch value — you will get the UTC ISO string, a readable UTC
                            time, your local time, and a relative &ldquo;x ago / in x&rdquo; hint. Press
                            &ldquo;Use now&rdquo; to drop in the current timestamp. To go the other way,
                            pick a date and time in the picker (interpreted in your local zone) and copy
                            out the matching seconds or milliseconds. Nothing is stored, so a refresh
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
                            { label: "JWT decoder", href: "/tools/jwt-decoder" },
                            { label: "Cron expression builder", href: "/tools/cron-expression-builder" },
                            { label: "JSON formatter", href: "/tools/json-formatter" },
                            { label: "API development", href: "/services/api-development" },
                            { label: "Custom business software", href: "/services/custom-business-software" },
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
                    <RelatedPosts topics={["stack"]} heading="Related engineering reading" />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 to-emerald-500/5 p-8 md:p-12 text-center">
                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                            Time-zone bugs eating your reports?
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl mx-auto">
                            Off-by-one days, double-counted hours after daylight saving, and
                            seconds-versus-milliseconds slips come from data layers that were never
                            designed for time correctly. We build systems that store in UTC and render
                            in local, so your timestamps stay trustworthy. Talk to us about a build or
                            an audit.
                        </p>
                        <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
                            Or reach us directly:{" "}
                            <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline">beltz@quantlabusa.dev</a>
                        </p>
                        <ConsultationCTA label="Book a 20-min Architecture Call" source="unix-timestamp-converter" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
