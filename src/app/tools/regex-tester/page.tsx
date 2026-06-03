import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Regex, ArrowRight, Lock, Zap, Layers } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";
import { RegexTester } from "./RegexTester";

export const metadata: Metadata = pageMetadata({
    title: "Free Regex Tester — Live Matches & Groups | QUANT LAB USA",
    description:
        "Test JavaScript regular expressions live. Enter a pattern and flags, highlight matches in your test string, and inspect capture groups and named groups. 100% in-browser.",
    slug: "/tools/regex-tester",
    keywords: [
        "regex tester",
        "regular expression tester",
        "javascript regex tester",
        "regex match groups",
        "regex online",
        "test regex",
        "regex capture groups",
    ],
});

const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Regex Tester",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    url: "https://quantlabusa.dev/tools/regex-tester",
    description:
        "Test JavaScript regular expressions in your browser with live match highlighting, capture groups, and named groups. Nothing is uploaded.",
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
            name: "Which regex flavor does this tester use?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "It uses the JavaScript (ECMAScript) regular expression engine built into your browser via the native RegExp object. That means it matches exactly what your front-end code and Node.js will do. Be aware that flavors differ: lookbehind, named groups, and Unicode property escapes are supported in modern JavaScript but the syntax and feature set are not identical to PCRE, Python's re, or .NET. Test in the engine you will actually deploy to.",
            },
        },
        {
            "@type": "Question",
            name: "What do the flags g, i, m, s, u, and y do?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "g (global) finds all matches instead of stopping at the first. i (ignore case) makes the match case-insensitive. m (multiline) makes ^ and $ match at line breaks rather than only the string's start and end. s (dotall) lets the dot match newline characters. u (unicode) enables correct handling of code points beyond the basic plane and Unicode property escapes. y (sticky) anchors each match to the current lastIndex position. Toggle them and watch the highlights update live.",
            },
        },
        {
            "@type": "Question",
            name: "How do capture groups and named groups show up?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Every set of parentheses in your pattern creates a numbered capture group, listed under each match in order. If you write a named group with the (?<name>...) syntax, it appears labeled by its name as well. This makes it easy to confirm that the part of the match you actually care about — the domain in an email, the year in a date — is being captured correctly before you wire the pattern into code.",
            },
        },
        {
            "@type": "Question",
            name: "Is my pattern or test data sent anywhere?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No. The pattern and the test string never leave your browser — matching runs entirely on your machine with the native RegExp engine. There are no network requests, no logging, and nothing stored after you close the tab. That makes it safe to test against real log lines or sample records without exposing them to a remote service.",
            },
        },
        {
            "@type": "Question",
            name: "Why is my regex slow or hanging on some inputs?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "That is usually catastrophic backtracking — a pattern with nested quantifiers like (a+)+ can take exponential time on certain inputs, which is the basis of ReDoS (regular-expression denial of service) attacks. If a regex runs on user-supplied input on your server, an attacker can craft a string that pins your CPU. The fix is to avoid ambiguous nested quantifiers, anchor patterns, and prefer specific character classes. This is exactly the kind of issue we look for in a security review.",
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
            name: "Regex Tester",
            item: "https://quantlabusa.dev/tools/regex-tester",
        },
    ],
};

export default function RegexTesterPage() {
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
                        <li className="text-gray-300">Regex Tester</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-400 mb-6">
                        <Regex className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Regex Tester
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-3xl">
                        Enter a regular expression, toggle flags, and type a test string — matches
                        highlight live and every capture group is broken out for you. Built on the
                        same JavaScript engine your code runs on.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                            <Lock className="w-4 h-4 text-emerald-400" />
                            <span>In-browser, nothing uploaded</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Zap className="w-4 h-4 text-sky-400" />
                            <span>Live match highlighting</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Layers className="w-4 h-4 text-amber-400" />
                            <span>Numbered &amp; named groups</span>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RegexTester />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        How to read what this tool shows you
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-5">
                        <p>
                            Type a pattern, pick your flags, and paste a test string. Every match is
                            highlighted inline so you can see exactly what the engine grabbed, and
                            each match is listed below with its start index, length, and a breakdown
                            of every capture group. Named groups — the{" "}
                            <code className="text-sky-300">{`(?<name>...)`}</code> syntax — are
                            labeled by name. The whole thing recomputes as you type, so you can dial
                            a pattern in by feel.
                        </p>
                        <p>
                            <strong className="text-white">The global flag changes everything.</strong>{" "}
                            Without <code className="text-sky-300">g</code>, the engine returns the
                            first match and stops. With it, you get every non-overlapping match in
                            the string. This tester handles the subtle trap that bites people writing
                            their own match loops: a zero-width match (a pattern that can match the
                            empty string) will loop forever unless you manually advance past it. We
                            advance <code className="text-sky-300">lastIndex</code> for you, so empty
                            matches do not hang the page.
                        </p>
                        <p>
                            <strong className="text-white">A word on engine differences.</strong>{" "}
                            This runs the browser&apos;s native JavaScript regex engine, so it mirrors
                            what your front-end and Node.js code will do. But regex flavors are not
                            interchangeable: a pattern that works in Python&apos;s{" "}
                            <code className="text-sky-300">re</code> or PCRE may behave differently or
                            be invalid here, and vice versa. Always test in the engine you will ship
                            to. If your validation logic lives in several languages, that
                            inconsistency is a real source of bugs we untangle during{" "}
                            <Link href="/services/custom-business-software" className="text-sky-400 underline-offset-2 hover:underline">
                                custom software builds
                            </Link>
                            .
                        </p>
                        <p>
                            <strong className="text-white">Regex is a security surface, not just a utility.</strong>{" "}
                            A carelessly written pattern with nested quantifiers — the classic{" "}
                            <code className="text-sky-300">(a+)+</code> shape — can be driven into
                            exponential backtracking by a malicious input, freezing the thread that
                            runs it. This is ReDoS, and it is a genuine denial-of-service vector when
                            the regex touches user input on your server. Validating untrusted data
                            with hand-rolled patterns is one of the things we scrutinize during a{" "}
                            <Link href="/services/web-app-pentest" className="text-sky-400 underline-offset-2 hover:underline">
                                web application penetration test
                            </Link>{" "}
                            and our{" "}
                            <Link href="/services/penetration-testing" className="text-sky-400 underline-offset-2 hover:underline">
                                broader penetration testing engagements
                            </Link>
                            .
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How to use it</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-5">
                        <p>
                            Put your expression in the pattern box — no surrounding slashes needed,
                            they are shown for clarity. Toggle flags with the buttons; the active set
                            appears after the closing slash. Paste or type your test string and the
                            matches highlight immediately, with a per-match breakdown of groups
                            underneath. If your pattern is syntactically invalid, you will get the
                            engine&apos;s error message instead of silent failure. Nothing leaves
                            your browser, so a refresh resets the tool.
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
                            { label: "JSON formatter", href: "/tools/json-formatter" },
                            { label: "JWT decoder", href: "/tools/jwt-decoder" },
                            { label: "Cron expression builder", href: "/tools/cron-expression-builder" },
                            { label: "Custom business software", href: "/services/custom-business-software" },
                            { label: "Penetration testing", href: "/services/penetration-testing" },
                            { label: "What is penetration testing?", href: "/blog/what-is-penetration-testing" },
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
                    <RelatedPosts topics={["stack", "pentest"]} heading="Related engineering reading" />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 to-emerald-500/5 p-8 md:p-12 text-center">
                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                            Input validation should not be a guessing game
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl mx-auto">
                            From email and phone parsing to ReDoS-safe validation on untrusted
                            input, getting regex right is part craft, part security. We build
                            software that validates correctly and resists abuse — and we audit the
                            patterns you already ship. Talk to us about a build or a security
                            review.
                        </p>
                        <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
                            Or reach us directly:{" "}
                            <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline">(770) 652-1282</a>{" "}
                            · <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline">beltz@quantlabusa.dev</a>
                        </p>
                        <ConsultationCTA label="Book a 20-min Architecture Call" source="regex-tester" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
