import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Type, ArrowRight, Lock, Zap, ListChecks } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";
import { TextCaseConverter } from "./TextCaseConverter";

export const metadata: Metadata = pageMetadata({
    title: "Text Case Converter — camelCase, snake_case & More | QUANT LAB USA",
    description:
        "Convert text to UPPER, lower, Title, camelCase, PascalCase, snake_case, kebab-case and CONSTANT_CASE at once. Fast, free, and 100% in-browser — nothing is uploaded.",
    slug: "/tools/text-case-converter",
    keywords: [
        "text case converter",
        "camelcase converter",
        "snake case converter",
        "kebab case",
        "title case generator",
        "constant case",
        "change text case online",
    ],
});

const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Text Case Converter",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    url: "https://quantlabusa.dev/tools/text-case-converter",
    description:
        "Transform text into UPPER, lower, Title, camelCase, PascalCase, snake_case, kebab-case and CONSTANT_CASE simultaneously, entirely in your browser. No data ever leaves your device.",
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
            name: "Which case should I use for code?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "It depends on the language and the kind of identifier. JavaScript, TypeScript, and Java use camelCase for variables, functions, and object properties, and PascalCase for classes, types, and React components. Python and Ruby favor snake_case for variables and functions, with PascalCase for classes. SQL columns are commonly snake_case. CSS classes, URL slugs, and file names lean on kebab-case. Environment variables and compile-time constants are CONSTANT_CASE. Matching the convention of the surrounding code is what keeps a codebase readable.",
            },
        },
        {
            "@type": "Question",
            name: "How does the converter detect word boundaries?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "It tokenizes your text into words using three signals: runs of spaces or punctuation become separators, a lowercase-to-uppercase transition splits camelCase and PascalCase into separate words, and an acronym followed by a capitalized word — like HTMLParser — splits into HTML and Parser. Those words are then recombined into whichever target convention you copy. That means you can paste in any style and convert cleanly to any other, rather than only working from plain spaced text.",
            },
        },
        {
            "@type": "Question",
            name: "What is the difference between Title Case and Sentence case?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Title Case capitalizes the first letter of every word, which suits headings and button labels. Sentence case capitalizes only the first letter of each sentence and leaves the rest lowercase, which reads more naturally in body copy and is increasingly preferred in user interfaces. Note that strict editorial title case also lowercases short conjunctions and prepositions like 'and' or 'of'; this tool applies the simpler every-word rule, which is the right default for code-adjacent and UI text.",
            },
        },
        {
            "@type": "Question",
            name: "Is my text sent to a server?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No. All transformations run in your browser with plain JavaScript string operations — nothing is uploaded, logged, or stored, and there are zero network requests, which you can verify in your browser's network tab. That makes it safe to convert internal field names, code snippets, or draft copy you would not want to paste into a remote service. A page refresh clears everything.",
            },
        },
        {
            "@type": "Question",
            name: "Does it handle numbers and accented characters?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Numbers are preserved and treated as part of the adjacent word, so 'version2Beta' tokenizes sensibly. The word-splitting logic is tuned for ASCII letters and digits, which covers the overwhelming majority of identifiers and slugs. Accented or non-Latin characters are passed through by the upper and lower transforms but may not trigger a word boundary, so for heavily accented prose the spaced cases (UPPER, lower, Title, Sentence) are the most reliable.",
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
            name: "Text Case Converter",
            item: "https://quantlabusa.dev/tools/text-case-converter",
        },
    ],
};

export default function TextCaseConverterPage() {
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
                        <li className="text-gray-300">Text Case Converter</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-pink-500 to-rose-400 mb-6">
                        <Type className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Text Case Converter
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-3xl">
                        Paste any text and get it in UPPER, lower, Title, Sentence, camelCase,
                        PascalCase, snake_case, kebab-case, and CONSTANT_CASE — all at once. Live as
                        you type, completely free, and entirely in your browser.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                            <Lock className="w-4 h-4 text-emerald-400" />
                            <span>In-browser, nothing uploaded</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <ListChecks className="w-4 h-4 text-sky-400" />
                            <span>Nine cases at once</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Zap className="w-4 h-4 text-amber-400" />
                            <span>Live, one-click copy</span>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <TextCaseConverter />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        What this tool does, and which case to pick
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-5">
                        <p>
                            Naming conventions are a quiet but constant source of friction. Paste a
                            phrase, a column name, or a heading and this tool renders it in nine
                            conventions simultaneously, recomputing the instant you type. Copy whichever
                            one fits where it is going — no manual retyping, no slips.
                        </p>
                        <p>
                            The choice of case is rarely arbitrary; it signals intent.{" "}
                            <strong className="text-white">camelCase</strong> is the JavaScript, Type­
                            Script, and Java convention for variables and properties, while{" "}
                            <strong className="text-white">PascalCase</strong> marks classes, types, and
                            React components. <strong className="text-white">snake_case</strong> is home
                            ground for Python identifiers and SQL columns.{" "}
                            <strong className="text-white">kebab-case</strong> belongs to URL slugs, CSS
                            classes, and file names. And{" "}
                            <strong className="text-white">CONSTANT_CASE</strong> flags environment
                            variables and compile-time constants. For prose,{" "}
                            <strong className="text-white">Title Case</strong> suits headings while{" "}
                            <strong className="text-white">Sentence case</strong> reads more naturally in
                            UI copy.
                        </p>
                        <p>
                            Under the hood, the converter tokenizes your input intelligently: it splits
                            on punctuation and spaces, on lowercase-to-uppercase boundaries (so{" "}
                            <code className="text-sky-300">camelCase</code> separates correctly), and on
                            acronym edges (so <code className="text-sky-300">HTMLParser</code> becomes{" "}
                            <em>HTML</em> + <em>Parser</em>). That means you can feed it text in any
                            style and convert cleanly to any other. Consistent naming is one of the
                            cheapest ways to keep a codebase readable, and it is the kind of discipline
                            we hold to across the systems we build —{" "}
                            <Link href="/services/custom-business-software" className="text-sky-400 underline-offset-2 hover:underline">
                                explore our custom software work
                            </Link>
                            .
                        </p>
                        <p>
                            Everything runs locally with plain string operations — no requests, nothing
                            stored — so you can safely transform internal field names, snippets, or draft
                            copy without sending anything to a server.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How to use it</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-5">
                        <p>
                            Type or paste your text into the input box. Every case variant updates live
                            below, each labeled with where it is typically used. Click the copy button
                            on any card to grab that version. The character and word counts confirm the
                            tool tokenized your input the way you expected. Nothing is stored, so a
                            refresh clears everything.
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
                            { label: "Regex tester", href: "/tools/regex-tester" },
                            { label: "URL encoder / decoder", href: "/tools/url-encoder-decoder" },
                            { label: "Custom business software", href: "/services/custom-business-software" },
                            { label: "Web development", href: "/services/web-development" },
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
                            Inconsistent naming slowing your team down?
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl mx-auto">
                            A clean, consistent codebase is faster to read, safer to change, and easier
                            to onboard into. We build software with disciplined conventions, typed
                            interfaces, and tooling that enforces them. Talk to us about a new build or
                            untangling a legacy project.
                        </p>
                        <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
                            Or reach us directly:{" "}
                            <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline">beltz@quantlabusa.dev</a>
                        </p>
                        <ConsultationCTA label="Book a 20-min Architecture Call" source="text-case-converter" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
