import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Hash, ArrowRight, Lock, Database, Download } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";
import { UuidGenerator } from "./UuidGenerator";

export const metadata: Metadata = pageMetadata({
    title: "Free UUID & ID Generator (v4, v7, ULID, CUID) | QUANT LAB USA",
    description:
        "Generate UUID v4, v7, nanoid, ULID, CUID, and short slugs in your browser — cryptographically secure. Download as JSON, CSV, or TXT. 100% free, no signup.",
    slug: "/tools/uuid-and-id-generator",
    keywords: [
        "uuid generator",
        "uuid v4 generator",
        "uuid v7 generator",
        "nanoid generator",
        "ulid generator",
        "cuid generator",
        "bulk uuid generator",
    ],
});

const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "UUID & ID Generator",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    url: "https://quantlabusa.dev/tools/uuid-and-id-generator",
    description:
        "Generate UUID v4, UUID v7, nanoid, ULID, CUID, and short slugs in your browser. All IDs are produced with crypto.getRandomValues — cryptographically secure, never transmitted.",
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
            name: "When should I use UUID v7 instead of v4?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "UUID v7 is time-sortable — the first 48 bits encode the millisecond timestamp. That makes v7 a better default for primary keys in B-tree-backed databases (Postgres, MySQL) because new inserts append at the right end of the index instead of scattering it. Use v4 only when you specifically need non-time-leaking randomness (security tokens, opaque external references). For internal database keys, v7 is the modern recommendation.",
            },
        },
        {
            "@type": "Question",
            name: "Is nanoid safe? It's shorter than UUID.",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. A 21-character nanoid using the default URL-safe alphabet has approximately 149 bits of entropy — comparable to UUID v4's 122 random bits. It's shorter (21 vs 36 characters), URL-safe by default, and collision-resistant for billions of IDs. The trade-off is that you lose the human-recognizable UUID format if your operations team is used to it.",
            },
        },
        {
            "@type": "Question",
            name: "What's the difference between ULID and UUID v7?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Both are time-sortable. ULID uses Crockford's Base32 alphabet (no I, L, O, U to avoid confusion) and is always 26 characters. UUID v7 uses standard UUID hex format. ULID is slightly more compact for the same entropy and is human-readable. UUID v7 is a standard (RFC 9562) and has built-in database support. Pick ULID if you're prioritizing readability; pick UUID v7 if you want standard tooling.",
            },
        },
        {
            "@type": "Question",
            name: "Are these IDs cryptographically secure?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Every ID format on this page uses crypto.getRandomValues — the Web Crypto API's cryptographically secure pseudo-random number generator. The same underlying entropy as crypto.randomUUID. Suitable for session tokens, password reset codes, and any application where unpredictability matters.",
            },
        },
        {
            "@type": "Question",
            name: "Why use short slugs at all if they collide?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Short slugs are great for human-facing URLs (think Bitly, GitHub gists). They're not collision-resistant on their own — an 8-character slug from a 36-character alphabet has only ~41 bits of entropy. The pattern is: generate slug, attempt insert with a UNIQUE constraint, retry with a fresh slug on collision. The shorter the slug, the more retries you'll need at scale.",
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
            name: "UUID & ID Generator",
            item: "https://quantlabusa.dev/tools/uuid-and-id-generator",
        },
    ],
};

export default function UuidGeneratorPage() {
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
                        <li className="text-gray-300">UUID & ID Generator</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-400 mb-6">
                        <Hash className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        UUID &amp; ID Generator
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-3xl">
                        Generate UUID v4, UUID v7, nanoid, ULID, CUID, and short slugs in your
                        browser. Cryptographically secure (crypto.getRandomValues), download as
                        JSON / CSV / TXT, up to 10,000 per batch.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                            <Lock className="w-4 h-4 text-emerald-400" />
                            <span>Generated in-browser, no network call</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Database className="w-4 h-4 text-sky-400" />
                            <span>6 ID formats, one tool</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Download className="w-4 h-4 text-amber-400" />
                            <span>Export to JSON, CSV, or TXT</span>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <UuidGenerator />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        Which ID should you actually use?
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-5">
                        <p>
                            For most new applications: <strong className="text-white">UUID v7</strong>{" "}
                            is the right default in 2025. It is a real ratified standard (RFC 9562,
                            published in 2024), it is time-sortable, and it indexes cleanly in
                            Postgres, MySQL, and every other B-tree database. The time-sortability
                            is the unsung win — random UUID v4 keys scatter your B-tree because
                            every insert hits a random index page, which means more page splits and
                            worse cache locality on large tables. UUID v7 inserts append at the
                            right edge, just like an auto-incrementing integer, but without the
                            single-writer bottleneck.
                        </p>
                        <p>
                            <strong className="text-white">UUID v4</strong> is still appropriate for
                            anything where you don&apos;t want the timestamp to leak. Session IDs,
                            password reset tokens, OAuth state — these should be pure random. Using
                            v7 here would leak the timestamp of token generation, which is usually
                            fine but occasionally a problem (e.g., revealing when a user signed up
                            via their referral ID).
                        </p>
                        <p>
                            <strong className="text-white">nanoid</strong> is the right call when
                            you need a URL-safe identifier shorter than UUID but with similar
                            collision resistance. A 21-character nanoid has ~149 bits of entropy —
                            comparable to UUID v4&apos;s 122 random bits but with 15 fewer
                            characters. Use it for short shareable links, public IDs that show up in
                            URLs, or any context where the human eye will read the ID.
                        </p>
                        <p>
                            <strong className="text-white">ULID</strong> is what you reach for when
                            you want both time-sortability and human readability. The 26-character
                            Crockford Base32 alphabet excludes ambiguous characters (no I, L, O, U)
                            so users can transcribe ULIDs from paper or phone calls without
                            confusion. Great for support-facing reference IDs.
                        </p>
                        <p>
                            <strong className="text-white">CUID</strong> was designed for
                            horizontally scaled systems where multiple servers generate IDs
                            concurrently and want collision resistance without coordination. In
                            practice, UUID v4/v7 do the same job and are more widely supported, so
                            CUID has lost market share. We include it because some Prisma /
                            JavaScript ecosystem teams still use it heavily.
                        </p>
                        <p>
                            <strong className="text-white">Short slugs</strong> exist for one use
                            case: user-facing URLs where length matters more than collision
                            resistance. Bitly. GitHub gists. Imgur. The pattern is always the same —
                            generate slug, attempt insert with a UNIQUE constraint, retry on
                            collision. An 8-character slug from a 36-character alphabet
                            (a-z + 0-9) is ~41 bits of entropy. Fine until you reach hundreds of
                            millions of records, at which point you bump to 10 or 12 characters.
                        </p>
                        <p>
                            <strong className="text-white">A note on auto-incrementing integers.</strong>{" "}
                            Sequence-generated IDs are still the right call when you genuinely need
                            them — for example, invoice numbers users will see and reference. The
                            trade-offs versus UUIDs: integers leak business volume (your{" "}
                            <code className="text-sky-300">/invoice/12345</code> tells a competitor
                            you&apos;ve issued ~12k invoices), make merging databases harder, and
                            create single-writer bottlenecks at extreme scale. The modern pattern
                            we ship in most builds is: UUID v7 primary key for the database, plus
                            a separate user-facing short number (e.g., invoice 1024) generated by
                            a sequence.
                        </p>
                        <p>
                            For deeper system design questions — distributed ID generation,
                            sharding, primary-key strategy — see our{" "}
                            <Link href="/services/api-development" className="text-sky-400 underline-offset-2 hover:underline">
                                API development services
                            </Link>{" "}
                            or{" "}
                            <Link href="/contact" className="text-sky-400 underline-offset-2 hover:underline">
                                book a 20-min architecture call
                            </Link>
                            . If you&apos;re working through{" "}
                            <Link href="/calculators/build-vs-buy" className="text-sky-400 underline-offset-2 hover:underline">
                                build vs buy decisions
                            </Link>
                            , the right ID strategy is one of the foundational choices that
                            determines what your data model can do at scale.
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {[
                            { label: "All free tools", href: "/tools" },
                            { label: "Stripe webhook tester", href: "/tools/stripe-webhook-tester" },
                            { label: "Cron expression builder", href: "/tools/cron-expression-builder" },
                            { label: "API development", href: "/services/api-development" },
                            { label: "Database design", href: "/services/database-design" },
                            { label: "Build vs buy calculator", href: "/calculators/build-vs-buy" },
                            { label: "Glossary", href: "/glossary" },
                            { label: "Talk to QuantLab", href: "/contact" },
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
                    <RelatedPosts
                        topics={["stack"]}
                        heading="Related engineering reading"
                    />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 to-emerald-500/5 p-8 md:p-12 text-center">
                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                            Picking the wrong ID strategy hurts at scale
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl mx-auto">
                            We&apos;ve audited systems where UUID v4 primary keys turned every
                            insert into a B-tree page split. Switching to UUID v7 (or ULID, where
                            tooling supports it) usually unlocks 30-60% write throughput without
                            touching application logic. Talk to us about database design and
                            migration paths.
                        </p>
                        <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
                            Or reach us directly:{" "}
                            <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline">(770) 652-1282</a>{" "}
                            · <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline">beltz@quantlabusa.dev</a>
                        </p>
                        <ConsultationCTA label="Book a 20-min Architecture Call" source="uuid-generator" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
