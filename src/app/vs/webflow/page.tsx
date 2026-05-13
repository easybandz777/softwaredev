import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Code, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "QUANT LAB vs Webflow: 2026 Web App Comparison | QUANT LAB USA",
    description:
        "Webflow is great for marketing sites. The moment you need real application logic, auth, custom data, or integrations, real code wins. Honest comparison.",
    alternates: { canonical: "https://quantlabusa.dev/vs/webflow" },
    openGraph: {
        title: "QUANT LAB vs Webflow: 2026 Web App Comparison | QUANT LAB USA",
        description:
            "When Webflow wins. When real code wins. Honest comparison of low-code builders vs custom Next.js applications.",
        url: "https://quantlabusa.dev/vs/webflow",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "QUANT LAB vs Webflow: 2026 Web App Comparison | QUANT LAB USA",
        description:
            "Marketing sites vs real apps. A fair-minded breakdown.",
    },
};

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "QUANT LAB vs Webflow: 2026 Web App Comparison",
    description:
        "Honest comparison of Webflow vs custom Next.js development. When low-code wins, when real code wins, cost math, and migration paths.",
    url: "https://quantlabusa.dev/vs/webflow",
    isPartOf: {
        "@type": "WebSite",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
    },
    about: {
        "@type": "Thing",
        name: "Webflow Alternative",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://quantlabusa.dev/services" },
        { "@type": "ListItem", position: 3, name: "vs Webflow", item: "https://quantlabusa.dev/vs/webflow" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Why not just build the whole thing in Webflow?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "For a marketing site, you should. Webflow's visual builder, hosting, and CMS are excellent at brochure-style content. The moment the product needs authenticated user accounts, custom database tables, role-based access, third-party integrations beyond basic Zapier hops, or a dashboard your customers will actually depend on, Webflow Logic and Memberships hit a ceiling fast.",
            },
        },
        {
            "@type": "Question",
            name: "Can you migrate our marketing site from Webflow?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes — and often we recommend you do not. If the Webflow site is doing its job, keep it. We build the application layer on a subdomain and link the two. Migrating brochure content into Next.js is rarely worth the cost when Webflow is handling it well already.",
            },
        },
        {
            "@type": "Question",
            name: "What does a custom Next.js build actually deliver that Webflow cannot?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Real application logic — authenticated dashboards, custom data models, role-based access, complex forms with validation and persistence, payment processing with Stripe, real-time features, third-party API integrations, custom search, and SEO-grade SSR/ISR with full structured data. The kind of features your users log in to use, not just read.",
            },
        },
        {
            "@type": "Question",
            name: "Is the SEO actually better on a Next.js build?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Webflow's SEO is genuinely good for marketing pages. For programmatic SEO at scale (10,000+ pages from a database), dynamic content, or sites with complex structured data, Next.js with SSR plus ISR wins. The deciding factor is volume and dynamism — not the static-page quality.",
            },
        },
    ],
};

const proCustom = [
    "Real application logic — auth, dashboards, role-based access",
    "Custom data models in PostgreSQL, not Webflow Collections",
    "Third-party integrations without the Zapier middle layer",
    "Programmatic SEO at scale (10k+ database-driven pages)",
    "Source code, deployment configs, and full ownership",
];

const proWebflow = [
    "Best-in-class visual designer — non-developer accessible",
    "Excellent hosting, CDN, and SSL out of the box",
    "Built-in CMS that marketing teams can edit without engineering",
    "Smooth animations and design fidelity without writing CSS",
    "Faster time to launch for brochure-style marketing sites",
];

export default function CustomWebVsWebflowPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="container mx-auto px-6 max-w-4xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/services" className="hover:text-sky-400 transition-colors">Services</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">vs Webflow</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Code className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        QUANT LAB vs Webflow
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Webflow is genuinely great. As a marketing-site builder it is one of the best products on the internet. The moment your project crosses into real application territory — authenticated dashboards, custom data, role-based access, integrations beyond basic Zapier — real code wins. Here is the honest comparison.
                    </p>
                    <ConsultationCTA label="Scope a Real Web App" />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Webflow vs custom code: when do I need real code?</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>Choose Webflow for marketing sites, landing pages, content-heavy blogs, and any project under roughly 1,000 pages where the deliverable is informational content with great visual design. Choose custom code when you need authenticated user accounts, custom data models, role-based access beyond three tiers, third-party API integrations beyond basic Zapier, or programmatic SEO at scale. The most common pattern: Webflow for the marketing site, custom Next.js for the application.</strong>
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Quick verdict</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left border border-white/10 rounded-xl overflow-hidden">
                            <thead className="bg-[#0d1526] text-white">
                                <tr>
                                    <th className="px-4 py-3 border-b border-white/10">Scenario</th>
                                    <th className="px-4 py-3 border-b border-white/10">Best choice</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Marketing site, landing pages, blog, portfolio</td><td className="px-4 py-3 font-semibold text-white">Webflow</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Auth, custom data, RBAC, payment, real-time, programmatic SEO</td><td className="px-4 py-3 font-semibold text-white">Custom code</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Want both — fast marketing site + real application</td><td className="px-4 py-3 font-semibold text-white">Hybrid (Webflow + Next.js)</td></tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When Webflow is the right call</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Webflow earned its position. It is the best fit for marketing websites, brochure sites, design-forward landing pages, content-heavy blogs, and any project where the deliverable is informational content paired with great visual design. The visual designer outputs clean semantic HTML, the hosting is genuinely fast, and the CMS lets a marketing team publish without bothering engineering for every typo fix. The Editor mode is the right level of abstraction for non-technical content owners.
                        </p>
                        <p>
                            If the project is a marketing site, a launch page, a portfolio, a blog, or any kind of content site under roughly a thousand pages, Webflow is almost always the right call. The design fidelity is excellent and the time-to-launch is unbeatable. Plenty of our clients run their marketing site on Webflow alongside the custom application we build for them — that is the right configuration.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Where Webflow breaks: real applications</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Webflow hits a ceiling at the boundary between content and application. Webflow Memberships handles basic gated content. Webflow Logic handles basic workflow automation. Webflow Collections handles basic structured content. The issue is the word "basic" — once your project crosses into custom database tables, role-based access more granular than three tiers, complex forms with validation against external systems, real-time features, custom search, or any third-party API integration beyond basic Zapier hops, you are fighting the platform.
                        </p>
                        <p>
                            The deeper problem is that the application logic in Webflow is not portable. If you build a hundred Webflow Logic flows and decide to migrate off the platform, you are rebuilding everything from scratch in real code anyway. The lock-in is on the application surface, not the marketing surface — Webflow CMS content exports cleanly through the API, but application logic does not.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When real code wins</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            <Link href="/services/web-applications" className="text-sky-400 hover:underline">Custom web application development</Link> wins when the project needs authenticated user accounts that log in to do real work, custom data models that go beyond Webflow Collections, role-based access more granular than free/paid/admin, third-party API integrations that Webflow Logic cannot reach, payment processing beyond static checkout, real-time features, programmatic SEO at scale (10,000+ database-driven pages), or complex search and filtering. Once any of those requirements is on the list, the trajectory is real code.
                        </p>
                        <p>
                            The hybrid configuration is often the right call. Webflow runs the marketing site at the root domain. The custom application runs on a subdomain (<code className="text-sky-300 text-sm">app.yourbrand.com</code> or <code className="text-sky-300 text-sm">platform.yourbrand.com</code>). Marketing keeps Webflow's design ergonomics; the product gets a real Next.js stack. The two integrate through shared auth and a clean API boundary.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Side-by-side feature matrix</h2>
                    <div className="overflow-x-auto rounded-xl border border-white/5 bg-[#0d1526]/60">
                        <table className="min-w-full text-sm">
                            <thead className="bg-[#0a1120]/80 text-gray-400">
                                <tr>
                                    <th className="px-4 py-3 text-left font-semibold">Dimension</th>
                                    <th className="px-4 py-3 text-left font-semibold text-white">Custom Next.js (QUANT LAB)</th>
                                    <th className="px-4 py-3 text-left font-semibold">Webflow</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-gray-300">
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Best for</td>
                                    <td className="px-4 py-3">Real applications + product UI</td>
                                    <td className="px-4 py-3">Marketing sites + content</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">User authentication</td>
                                    <td className="px-4 py-3">Full RBAC, SSO, MFA</td>
                                    <td className="px-4 py-3">Memberships (basic tiers)</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Data model</td>
                                    <td className="px-4 py-3">PostgreSQL, any schema</td>
                                    <td className="px-4 py-3">Collections (CMS-style)</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Forms</td>
                                    <td className="px-4 py-3">Validation + custom logic</td>
                                    <td className="px-4 py-3">Basic submission + Zapier</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Third-party APIs</td>
                                    <td className="px-4 py-3">Direct code integration</td>
                                    <td className="px-4 py-3">Zapier / Make middle layer</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Payment processing</td>
                                    <td className="px-4 py-3">Full Stripe / custom flows</td>
                                    <td className="px-4 py-3">Webflow Ecommerce (basic)</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Real-time features</td>
                                    <td className="px-4 py-3">WebSockets, SSE, polling</td>
                                    <td className="px-4 py-3">Not natively supported</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">SEO</td>
                                    <td className="px-4 py-3">SSR/ISR, programmatic at scale</td>
                                    <td className="px-4 py-3">Strong static SEO</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Content editing</td>
                                    <td className="px-4 py-3">Headless CMS optional</td>
                                    <td className="px-4 py-3">Best-in-class visual editor</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Time to launch</td>
                                    <td className="px-4 py-3">10 to 20 weeks (real app)</td>
                                    <td className="px-4 py-3">Days to weeks (marketing site)</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Source code</td>
                                    <td className="px-4 py-3">Owned by client</td>
                                    <td className="px-4 py-3">Hosted, no code export</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                            <h3 className="text-white font-semibold mb-4">Where real code wins</h3>
                            <ul className="space-y-2">
                                {proCustom.map((item) => (
                                    <li key={item} className="flex gap-2 text-gray-300 text-sm">
                                        <Check className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                            <h3 className="text-white font-semibold mb-4">Where Webflow wins</h3>
                            <ul className="space-y-2">
                                {proWebflow.map((item) => (
                                    <li key={item} className="flex gap-2 text-gray-300 text-sm">
                                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Cost comparison: marketing site vs application</h2>
                    <div className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Webflow and Next.js are not really competing on cost — they are competing on what is actually being built. Run the comparison honestly:
                        </p>
                        <ul className="space-y-2 text-sm text-gray-300 mb-4">
                            <li className="flex gap-2"><span className="text-sky-400">Marketing site on Webflow</span><span className="text-gray-400">=</span><span className="text-white">$3k to $15k design + $300/yr hosting</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">Same site as custom Next.js</span><span className="text-gray-400">=</span><span className="text-white">$15k to $40k design + build + ~$240/yr hosting</span></li>
                            <li className="flex gap-2 border-t border-white/5 pt-2 mt-2"><span className="text-emerald-400 font-semibold">Webflow wins for content</span></li>
                        </ul>
                        <ul className="space-y-2 text-sm text-gray-300 mb-4">
                            <li className="flex gap-2"><span className="text-sky-400">Real app on Webflow + Memberships + Logic</span><span className="text-gray-400">=</span><span className="text-white">$25k to $60k stretching the platform</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">Same app as custom Next.js</span><span className="text-gray-400">=</span><span className="text-white">$50k to $120k built right the first time</span></li>
                            <li className="flex gap-2 border-t border-white/5 pt-2 mt-2"><span className="text-emerald-400 font-semibold">Next.js wins for applications</span></li>
                        </ul>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            The hidden cost of stretching Webflow into application territory is the eventual rebuild. About half of the Webflow-built "apps" we audit get replatformed onto real code within two years — usually after the platform's limitations force a hard architecture decision that should have been made up front.
                        </p>
                    </div>
                    <div className="mt-4">
                        <Link
                            href="/calculators/stripe-cost"
                            className="inline-flex items-center gap-1 text-sky-400 hover:underline text-sm"
                        >
                            Try the related Stripe cost calculator <ArrowRight className="w-3 h-3" />
                        </Link>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Migration path: when to leave, when to stay</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The first conversation is always honest. If the Webflow site is doing its job, keep it. Plenty of our clients run a Webflow marketing site at the root domain (<code className="text-sky-300 text-sm">yourbrand.com</code>) and a custom Next.js application at a subdomain (<code className="text-sky-300 text-sm">app.yourbrand.com</code>). Single sign-on bridges the two. Marketing keeps Webflow's design ergonomics; the product gets a real stack. That is the right configuration about three quarters of the time.
                        </p>
                        <p>
                            When a full migration is the right call — usually because the marketing site itself needs programmatic SEO at scale, complex search, or tight integration with the product surface — we export Webflow CMS content through the Webflow API, remodel it into a clean Next.js content layer (MDX, Sanity, Contentful, or a custom Postgres CMS), and rebuild the visual design in Tailwind. The migration runs in parallel with the live Webflow site, so there is no SEO blackout window.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Real-world example</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            <Link href="/work/hobbspeak" className="text-sky-400 hover:underline">HobbsPeak</Link> is the clearest example of where real code is the only honest answer. The brand sells custom headwear and apparel where the catalog is effectively infinite — every S&S Activewear blank, in every color and size, at live wholesale-tier pricing. Webflow simply cannot model the live wholesale catalog sync, the digital proofing workflow, or the artwork digitizer pipeline. We built HobbsPeak.com as a headless commerce platform on Next.js 16 + React 19, with Stripe checkout, Vercel Blob, Neon Postgres, and live S&S Activewear API ingest.
                        </p>
                        <p>
                            <Link href="/work/j5-sales-os" className="text-sky-400 hover:underline">J5 Sales OS</Link> is the same lesson at a different scale — contact deduplication, outreach presets, embedded reporting, Stripe and QuickBooks integration. Authentication, custom data, role-based access, real-time features. The kind of system users log in to use, not just read. Webflow would have been a multi-quarter mistake; <Link href="/services/web-applications" className="text-sky-400 hover:underline">Next.js</Link> shipped it on time.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "Why not just build the whole thing in Webflow?",
                                a: "For a marketing site, you should. Webflow's visual builder, hosting, and CMS are excellent at brochure-style content. The moment the product needs authenticated user accounts, custom database tables, role-based access, third-party integrations beyond basic Zapier hops, or a dashboard your customers will actually depend on, Webflow Logic and Memberships hit a ceiling fast.",
                            },
                            {
                                q: "Can you migrate our marketing site from Webflow?",
                                a: "Yes — and often we recommend you do not. If the Webflow site is doing its job, keep it. We build the application layer on a subdomain and link the two. Migrating brochure content into Next.js is rarely worth the cost when Webflow is handling it well already.",
                            },
                            {
                                q: "What does a custom Next.js build actually deliver that Webflow cannot?",
                                a: "Real application logic — authenticated dashboards, custom data models, role-based access, complex forms with validation and persistence, payment processing with Stripe, real-time features, third-party API integrations, custom search, and SEO-grade SSR/ISR with full structured data. The kind of features your users log in to use, not just read.",
                            },
                            {
                                q: "Is the SEO actually better on a Next.js build?",
                                a: "Webflow's SEO is genuinely good for marketing pages. For programmatic SEO at scale (10,000+ pages from a database), dynamic content, or sites with complex structured data, Next.js with SSR plus ISR wins. The deciding factor is volume and dynamism — not the static-page quality.",
                            },
                        ].map((item) => (
                            <div key={item.q} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Link
                            href="/services/web-applications"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">Web Application Development</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">The full Next.js + PostgreSQL stack we use for custom dashboards and product surfaces.</p>
                        </Link>
                        <Link
                            href="/vs/wordpress"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">vs WordPress</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">The other no-code comparison — same lesson with a different platform.</p>
                        </Link>
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Hit the Webflow wall yet?
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or <Link href="/contact" className="text-sky-400 hover:underline">book a 20-minute scope call</Link>. We will walk through what is on your roadmap and tell you straight whether Webflow can handle it, whether you need a real Next.js build, or whether the hybrid (Webflow plus app subdomain) is the right call.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
