import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { FileJson, ArrowRight, Search, Sparkles, Layers } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";
import { SchemaGenerator } from "./SchemaGenerator";

export const metadata: Metadata = pageMetadata({
    title: "JSON-LD Schema Generator | Free SEO Tool | QUANT LAB USA",
    description:
        "Generate valid JSON-LD structured data for Organization, LocalBusiness, FAQPage, Article, and Product. Live validation. Copy-paste ready. Free.",
    slug: "/tools/schema-generator",
    keywords: [
        "json-ld generator",
        "schema markup generator",
        "structured data generator",
        "faqpage schema",
        "localbusiness schema",
        "article schema",
        "product schema",
    ],
});

const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "JSON-LD Schema Generator",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    url: "https://quantlabusa.dev/tools/schema-generator",
    description:
        "Free in-browser generator for valid JSON-LD structured data. Supports the five highest-impact schema types: Organization, LocalBusiness, FAQPage, Article, and Product.",
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
            name: "Which schema types win the most rich results in Google?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "FAQPage and HowTo are the highest-volume rich-result types. Product gets the price + availability snippet, Article powers the Top Stories carousel, and LocalBusiness is the foundation for the map pack. Organization is rarely a rich result on its own but is essential as Google's entity anchor — it lets Search Console attribute reviews, sitelinks, and knowledge panels to your brand.",
            },
        },
        {
            "@type": "Question",
            name: "Where do I put the JSON-LD script tag?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Anywhere inside <head> or <body>. Google ignores placement — it scans the entire HTML for application/ld+json blocks. In Next.js, render it inside the page component using a <script type=\"application/ld+json\"> tag. Avoid putting it inside conditional client components that might not render server-side, because Googlebot may not execute JavaScript for every crawl.",
            },
        },
        {
            "@type": "Question",
            name: "Will Google penalize me for marking up content that doesn't render on the page?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes — and it's the single most common reason FAQPage rich results disappear. Google's structured data policy requires the questions and answers in your JSON-LD to be visibly on the page. If you copy a generated FAQ into your <head> but never render the Q&A in <body>, expect Google to drop it from rich results within a few crawls.",
            },
        },
        {
            "@type": "Question",
            name: "Should I use Organization or LocalBusiness?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "LocalBusiness if you serve customers at a physical address — the address, phone, and hours unlock the map pack and local SERP features. Organization if you're a SaaS, online-only retailer, or service business without storefronts. You can use both: Organization on the root page for entity establishment, LocalBusiness on each location landing page.",
            },
        },
        {
            "@type": "Question",
            name: "Does this generator output valid schema.org?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We validate the required fields and common formats (URLs, dates, emails). For the final check before deploying, paste the generated JSON into Google's Rich Results Test or Schema.org's official validator. Those tools catch edge cases — like ItemList nesting requirements or Offer price types — that a quick syntax check can't.",
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
            name: "JSON-LD Schema Generator",
            item: "https://quantlabusa.dev/tools/schema-generator",
        },
    ],
};

export default function SchemaGeneratorPage() {
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
                        <li className="text-gray-300">JSON-LD Schema Generator</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-400 mb-6">
                        <FileJson className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        JSON-LD Schema Generator
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-3xl">
                        Generate copy-paste structured data for the five highest-impact schema
                        types — Organization, LocalBusiness, FAQPage, Article, Product. Live
                        validation, drop-in script tag, no external dependencies.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                            <Search className="w-4 h-4 text-emerald-400" />
                            <span>Rich-results-ready JSON-LD</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-sky-400" />
                            <span>Live field validation</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Layers className="w-4 h-4 text-amber-400" />
                            <span>5 schema types, one tool</span>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <SchemaGenerator />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        How to use structured data without getting penalized
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-5">
                        <p>
                            JSON-LD is the format Google explicitly prefers for structured data.
                            It is a separate block of code from your visible HTML, which means
                            you can deliver rich machine-readable signals to search engines
                            without redesigning the page or refactoring components. That
                            convenience comes with one big trap: <strong className="text-white">everything you mark
                            up must also be visibly present on the page</strong>. If your FAQPage schema
                            includes ten questions but the visible page only shows three, Google
                            classifies that as a structured-data manual action and quietly drops
                            your rich results.
                        </p>
                        <p>
                            <strong className="text-white">Organization</strong> is the foundation. It is the schema you
                            put on the root page of your site (and only the root) so Google
                            understands what entity owns the domain. Logo, sameAs links (Twitter,
                            LinkedIn, Wikidata, Crunchbase), and contact info give Google enough
                            signal to attach your knowledge panel and surface sitelinks in
                            branded SERPs. Get this right once and it tends to ride for years.
                        </p>
                        <p>
                            <strong className="text-white">LocalBusiness</strong> is what unlocks the map pack and the
                            local 3-pack for service-area queries. It needs a real address —
                            P.O. Box only fails validation in Google&apos;s eyes. If you serve
                            multiple cities, create a separate landing page per city with its own
                            LocalBusiness schema rather than stuffing multiple addresses into a
                            single Organization block. Our{" "}
                            <Link href="/locations" className="text-sky-400 underline-offset-2 hover:underline">
                                location landing pages
                            </Link>{" "}
                            do exactly this.
                        </p>
                        <p>
                            <strong className="text-white">FAQPage</strong> is the highest-ROI schema for content sites
                            because it expands your SERP real estate from one blue link to one
                            link plus 4–8 question accordions. The catch: Google has tightened
                            FAQPage eligibility over the years. As of 2025, FAQ rich results are
                            generally only shown on government and authoritative health sites
                            for some queries. Even when not shown, having the schema improves
                            AI search citation rates — ChatGPT, Perplexity, and Claude
                            preferentially cite pages with clean FAQPage markup.
                        </p>
                        <p>
                            <strong className="text-white">Article</strong> powers the Top Stories carousel and
                            authorship signals. The two fields that matter most are headline
                            (under 110 characters) and a high-resolution image (≥1200px wide). If
                            you&apos;re writing for AI surfaces — Bing Copilot, Google AI
                            Overviews — Article schema makes your byline and publish date
                            machine-readable, which improves citation attribution.
                        </p>
                        <p>
                            <strong className="text-white">Product</strong> drives the price + availability snippet in
                            shopping SERPs. The two flags that matter most are{" "}
                            <code className="text-sky-300">price</code> and{" "}
                            <code className="text-sky-300">availability</code>. If you have real
                            reviews, add AggregateRating — the stars are the single biggest CTR
                            lift in any product SERP.
                        </p>
                        <p>
                            Once you&apos;ve generated and pasted the JSON-LD, run it through{" "}
                            <a
                                href="https://search.google.com/test/rich-results"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sky-400 underline-offset-2 hover:underline"
                            >
                                Google&apos;s Rich Results Test
                            </a>{" "}
                            before pushing to production. Then deploy and check Search Console&apos;s
                            Enhancements report 7–14 days later — that&apos;s how long Google
                            typically takes to index new structured data and start surfacing rich
                            results.
                        </p>
                        <p>
                            For complete SEO migrations and structured-data audits, see our{" "}
                            <Link href="/services/seo" className="text-sky-400 underline-offset-2 hover:underline">
                                SEO services
                            </Link>{" "}
                            or{" "}
                            <Link href="/contact" className="text-sky-400 underline-offset-2 hover:underline">
                                book a 20-min audit
                            </Link>
                            . If you&apos;re building a site from scratch, our{" "}
                            <Link href="/services/web-development" className="text-sky-400 underline-offset-2 hover:underline">
                                web development team
                            </Link>{" "}
                            bakes JSON-LD into the components from day one.
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Keep exploring</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {[
                            { label: "SEO services", href: "/services/seo" },
                            { label: "Web development", href: "/services/web-development" },
                            { label: "All free tools", href: "/tools" },
                            { label: "All calculators", href: "/calculators" },
                            { label: "Build vs buy calculator", href: "/calculators/build-vs-buy" },
                            { label: "Locations we serve", href: "/locations" },
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
                            Want structured data baked into every page?
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl mx-auto">
                            We design components, layouts, and CMS templates so the schema is a
                            byproduct of the way you write content. No copy-pasting, no missing
                            scripts, no manual maintenance. Talk to us about a site-wide
                            structured-data audit or a from-scratch build.
                        </p>
                        <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
                            Or reach us directly:{" "}
                            <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline">(770) 652-1282</a>{" "}
                            · <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline">beltz@quantlabusa.dev</a>
                        </p>
                        <ConsultationCTA label="Book a 20-min SEO Audit" source="schema-generator" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
