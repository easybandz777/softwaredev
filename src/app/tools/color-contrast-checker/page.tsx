import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Contrast, ArrowRight, Lock, Eye, CheckCircle2 } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";
import { ColorContrastChecker } from "./ColorContrastChecker";

export const metadata: Metadata = pageMetadata({
    title: "WCAG Color Contrast Checker (AA / AAA) | QUANT LAB USA",
    description:
        "Check the WCAG contrast ratio between two hex colors and see AA/AAA pass or fail for normal and large text. Fast, free, and 100% in-browser — nothing is uploaded.",
    slug: "/tools/color-contrast-checker",
    keywords: [
        "color contrast checker",
        "wcag contrast ratio",
        "aa aaa contrast",
        "accessibility contrast",
        "hex contrast checker",
        "wcag 2.1 contrast",
        "text contrast tool",
    ],
});

const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "WCAG Color Contrast Checker",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    url: "https://quantlabusa.dev/tools/color-contrast-checker",
    description:
        "Compute the WCAG 2.x contrast ratio between two colors and check AA/AAA conformance for normal and large text, entirely in your browser. No data ever leaves your device.",
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
            name: "How is the contrast ratio calculated?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "It follows the WCAG 2.x formula exactly. Each color's sRGB channels are linearized — divided by 255, then gamma-corrected — and combined into a relative luminance using the weights 0.2126 red, 0.7152 green, and 0.0722 blue. The ratio is (lighter luminance + 0.05) divided by (darker luminance + 0.05). The result ranges from 1:1 (identical colors) to 21:1 (pure black on pure white). All of this runs locally in your browser.",
            },
        },
        {
            "@type": "Question",
            name: "What do AA and AAA mean?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "AA and AAA are conformance levels in the Web Content Accessibility Guidelines. For normal body text, AA requires a contrast ratio of at least 4.5:1 and AAA requires 7:1. For large text — 18pt (24px) regular or 14pt (18.66px) bold and larger — the thresholds drop to 3:1 for AA and 4.5:1 for AAA, because larger glyphs remain legible at lower contrast. AA is the level most legal and procurement requirements target; AAA is an enhanced bar that is not always achievable for every design.",
            },
        },
        {
            "@type": "Question",
            name: "What counts as large text?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "WCAG defines large text as at least 18 point (roughly 24 CSS pixels) for regular weight, or at least 14 point (roughly 18.66 CSS pixels) when bold. Anything smaller is treated as normal text and must meet the stricter ratios. This distinction matters because hitting AA for a small caption is far harder than for a big heading, so the same color pair can pass for large text and fail for body copy.",
            },
        },
        {
            "@type": "Question",
            name: "Does this also cover icons and form controls?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. WCAG 2.1 added a non-text contrast rule requiring a 3:1 ratio for user-interface components and meaningful graphics — think input borders, button outlines, focus indicators, and icons that convey information. We surface that 3:1 check alongside the text levels, because teams frequently nail their text contrast but ship a checkbox border or focus ring that is effectively invisible against the background.",
            },
        },
        {
            "@type": "Question",
            name: "Is contrast alone enough for accessibility?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No — contrast is necessary but not sufficient. You also need to avoid using color as the only way to convey meaning (so add icons, labels, or patterns), provide visible focus states, support keyboard navigation, and structure content with proper semantic HTML and ARIA where needed. Contrast is the easiest win to verify, which is why it is a good starting point, but a genuinely accessible interface considers the whole experience for users with low vision, color blindness, and motor or cognitive differences.",
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
            name: "Color Contrast Checker",
            item: "https://quantlabusa.dev/tools/color-contrast-checker",
        },
    ],
};

export default function ColorContrastCheckerPage() {
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
                        <li className="text-gray-300">Color Contrast Checker</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-amber-500 to-rose-400 mb-6">
                        <Contrast className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Color Contrast Checker
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-3xl">
                        Enter two hex colors to see their WCAG contrast ratio and instant AA / AAA
                        pass-or-fail verdicts for normal text, large text, and UI components. Live as
                        you type, completely free, and entirely in your browser.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                            <Lock className="w-4 h-4 text-emerald-400" />
                            <span>In-browser, nothing uploaded</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-sky-400" />
                            <span>AA &amp; AAA verdicts</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Eye className="w-4 h-4 text-amber-400" />
                            <span>Live preview</span>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <ColorContrastChecker />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        What this tool does, and why contrast matters
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-5">
                        <p>
                            Contrast ratio measures how distinguishable text is from the surface behind
                            it. The <strong className="text-white">Web Content Accessibility
                            Guidelines</strong> define a precise formula and a set of thresholds, and
                            this tool applies them exactly: it linearizes each color&apos;s sRGB
                            channels, computes a relative luminance, and returns the ratio of lighter to
                            darker. Values run from 1:1 for identical colors up to 21:1 for black on
                            white.
                        </p>
                        <p>
                            The verdicts map to real requirements.{" "}
                            <strong className="text-white">AA</strong> — the level most accessibility
                            laws and procurement rules target — needs 4.5:1 for body text and 3:1 for
                            large text. <strong className="text-white">AAA</strong> raises that to 7:1
                            and 4.5:1. WCAG 2.1 also added a 3:1 rule for{" "}
                            <strong className="text-white">non-text elements</strong>: input borders,
                            focus rings, button outlines, and informative icons. We surface that check
                            too, because it is the one teams most often miss.
                        </p>
                        <p>
                            Everything is computed locally as you type — no color values are uploaded,
                            and the live preview renders your exact pairing so you can sanity-check the
                            number against your own eyes. Accessibility is not a cosmetic afterthought:
                            in the United States it intersects with the ADA and Section 508, and poor
                            contrast is one of the most frequently cited issues in accessibility audits.
                            We bake conformance into the interfaces we build —{" "}
                            <Link href="/services/web-development" className="text-sky-400 underline-offset-2 hover:underline">
                                explore our web development services
                            </Link>
                            .
                        </p>
                        <p>
                            <strong className="text-white">One caveat:</strong> passing contrast is
                            necessary but not sufficient. Never rely on color alone to convey meaning,
                            always provide a visible focus state, and structure content semantically so
                            it works with a keyboard and a screen reader. Contrast is simply the
                            easiest dimension to verify objectively, which makes it a sound place to
                            start.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How to use it</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-5">
                        <p>
                            Set your foreground (text) and background colors using the swatch pickers or
                            by typing a hex value — both <code className="text-sky-300">#rgb</code> and{" "}
                            <code className="text-sky-300">#rrggbb</code> shorthand work. The ratio and
                            the AA / AAA table update live, and the preview panel shows your colors on
                            real sample text. Use &ldquo;Swap colors&rdquo; to flip foreground and
                            background. Nothing is stored, so a refresh clears everything.
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
                            { label: "Base64 encoder / decoder", href: "/tools/base64-encoder-decoder" },
                            { label: "Regex tester", href: "/tools/regex-tester" },
                            { label: "Web development", href: "/services/web-development" },
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
                            Need an interface that is accessible by design?
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl mx-auto">
                            Contrast is one slice of accessibility — focus states, keyboard support,
                            and semantic structure all matter for ADA and Section 508 alignment. We
                            build web apps with conformance baked in from the first commit. Talk to us
                            about a new build or an accessibility-focused review.
                        </p>
                        <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
                            Or reach us directly:{" "}
                            <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline">beltz@quantlabusa.dev</a>
                        </p>
                        <ConsultationCTA label="Book a 20-min Design Call" source="color-contrast-checker" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
