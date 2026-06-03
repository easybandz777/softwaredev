import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Scale, Check, ArrowRight } from "lucide-react";
import { comparisonMetadata } from "@/lib/seoMeta";

export const metadata: Metadata = comparisonMetadata({
    competitor: "Squarespace",
    title: "QUANT LAB USA vs Squarespace: Custom Web App Development (2026)",
    description:
        "Squarespace makes a beautiful brochure site fast and cheap. When you need real application logic, integrations, and ownership, a custom web app wins. Honest 2026 comparison.",
    slug: "/vs/squarespace",
});

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "QUANT LAB USA vs Squarespace: Custom Web App vs Website Builder in 2026",
    description:
        "Honest comparison of Squarespace against a custom-built web application. Where the builder is the right call, where it caps you, and when application logic demands real code.",
    url: "https://quantlabusa.dev/vs/squarespace",
    isPartOf: {
        "@type": "WebSite",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
    },
    about: {
        "@type": "Thing",
        name: "Squarespace Alternative",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Web Applications", item: "https://quantlabusa.dev/services/web-applications" },
        { "@type": "ListItem", position: 3, name: "vs Squarespace", item: "https://quantlabusa.dev/vs/squarespace" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "When is a custom web app a better fit than Squarespace?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Custom wins when your site needs real application logic — accounts, dashboards, calculators, gated workflows, complex forms — that goes beyond pages and a blog, when you need deep integrations into your own systems, or when performance, SEO control, and ownership matter. For a marketing site or a simple storefront, Squarespace is faster and cheaper.",
            },
        },
        {
            "@type": "Question",
            name: "Can you rebuild our Squarespace site as a custom web app?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Squarespace content exports to a standard format and we can scrape and migrate pages, posts, and media into a clean Next.js codebase. The look can be matched closely or improved, and the parts that were genuinely just brochure pages stay simple while the new application features get built properly behind them.",
            },
        },
        {
            "@type": "Question",
            name: "What is the timeline to replace a Squarespace site?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "4 to 10 weeks for a custom site with real functionality. A straight content rebuild is on the fast end. Adding accounts, a dashboard, or integrations into your back office pushes toward the upper end of that range.",
            },
        },
        {
            "@type": "Question",
            name: "Do we own the code if we leave Squarespace?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Completely. You get the GitHub repository, the codebase, the deployment configs, and the documentation, hosted wherever you like. No monthly platform fee, no template lock-in, no transaction fees on the commerce side.",
            },
        },
        {
            "@type": "Question",
            name: "Is Squarespace ever the right long-term choice?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Often, yes. For a marketing site, a portfolio, a blog, or a simple shop, Squarespace is excellent value and there is no reason to build custom. The hybrid pattern is common too — keep Squarespace for the marketing pages and build the application part as a separate custom app.",
            },
        },
    ],
};

const proCustom = [
    "Real application logic — accounts, dashboards, gated workflows",
    "Deep integrations into your own systems and data, no plugin ceiling",
    "Full control over performance, Core Web Vitals, and technical SEO",
    "You own the codebase and host anywhere, no monthly platform fee",
    "Design with no template constraints and no transaction-fee tax",
];

const proSquarespace = [
    "Beautiful, polished templates that look great with little effort",
    "Genuinely fast and cheap for a marketing site or simple shop",
    "Hosting, SSL, and updates handled — nothing to maintain",
    "A non-technical owner can edit content without a developer",
    "Built-in blog, commerce, and email tools out of the box",
];

export default function CustomWebAppVsSquarespacePage() {
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
                        <li><Link href="/services/web-applications" className="hover:text-sky-400 transition-colors">Web Applications</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">vs Squarespace</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Scale className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        QUANT LAB USA vs Squarespace
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Squarespace makes a beautiful brochure site fast and cheap, and for a marketing page, a portfolio, or a simple shop that is genuinely the right tool. The math turns the moment your site needs to do something — accounts, dashboards, calculators, gated workflows, real integrations — that a template was never meant to carry and a <Link href="/services/web-applications" className="text-sky-400 hover:underline">custom web app</Link> handles natively. Here is the honest comparison.
                    </p>
                    <ConsultationCTA label="Scope a Custom Web App" />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Custom web app vs Squarespace: which should I choose?</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>Choose Squarespace when you need a marketing site, a portfolio, a blog, or a simple storefront and want it to look polished with little effort and no maintenance. Choose a custom web app when the site needs real application logic, deep integrations into your own systems, full control over performance and technical SEO, or ownership of the code. The hybrid pattern is common: keep Squarespace for the marketing pages and build the application as a separate custom app.</strong>
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
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Marketing site, portfolio, blog, or simple shop</td><td className="px-4 py-3 font-semibold text-white">Squarespace</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Accounts, dashboards, logic, deep integrations</td><td className="px-4 py-3 font-semibold text-white">Custom web app</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Keep marketing on Squarespace, build the app custom</td><td className="px-4 py-3 font-semibold text-white">Hybrid</td></tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When Squarespace is the right call</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Squarespace earned its reputation for a reason. The templates are genuinely well-designed, the editor is approachable, and you can have a polished marketing site or a clean shop live in a weekend without writing a line of code. Hosting, SSL, and platform updates are all handled, so there is nothing to maintain and nobody to call when a dependency needs patching.
                        </p>
                        <p>
                            If what you need is pages, a blog, an email capture, and maybe a modest product catalog, Squarespace is the right call and a custom build would be overkill. A non-technical owner can keep the content fresh themselves, the monthly cost is small, and the result looks professional. That is exactly the job the platform was built for, and it does it well.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Where Squarespace starts to break</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Squarespace hits a ceiling at a predictable point. The first squeeze is functionality — the moment you need accounts, a member dashboard, a real calculator, a multi-step gated workflow, or anything that is an application rather than a page, you are bolting third-party widgets and code injections onto a system that was not designed for them. They are fragile, they break on platform updates, and they rarely feel native.
                        </p>
                        <p>
                            The second squeeze is integration and control. Connecting deeply into your own systems, controlling exactly how pages render for performance and technical SEO, or doing anything off the template grid runs into hard limits. The third squeeze is ownership — your site lives inside Squarespace, and when you outgrow it, none of it is portable code you can take with you. The broader trade-off is the subject of our <Link href="/blog/build-vs-buy-software-2026" className="text-sky-400 hover:underline">build vs buy guide</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When custom wins</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            A custom web app tends to win when your site needs to be software, not just content — user accounts, dashboards, gated tools, complex forms, and logic that responds to your business rules. <Link href="/services/web-applications" className="text-sky-400 hover:underline">Custom web applications</Link> built on Next.js give you that functionality as first-class features rather than bolted-on widgets, with full control over how every page renders.
                        </p>
                        <p>
                            The other common driver is integration and growth. When the site has to talk to your CRM, your billing, or your internal tools, a custom build wires those connections directly instead of through a marketplace plugin. You own the codebase, you host it anywhere, and there is no monthly platform tax or transaction fee. If commerce is the heart of it, our <Link href="/services/ecommerce-development" className="text-sky-400 hover:underline">ecommerce development</Link> path takes it further than a template ever could.
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
                                    <th className="px-4 py-3 text-left font-semibold text-white">Custom web app (QUANT LAB USA)</th>
                                    <th className="px-4 py-3 text-left font-semibold">Squarespace</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-gray-300">
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Pricing model</td>
                                    <td className="px-4 py-3">One-time build + hosting</td>
                                    <td className="px-4 py-3">Monthly subscription + fees</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Best for</td>
                                    <td className="px-4 py-3">Sites that are also software</td>
                                    <td className="px-4 py-3">Marketing sites and simple shops</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Application logic</td>
                                    <td className="px-4 py-3">First-class, any complexity</td>
                                    <td className="px-4 py-3">Widgets and code injection</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Accounts & dashboards</td>
                                    <td className="px-4 py-3">Built natively</td>
                                    <td className="px-4 py-3">Limited, third-party</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Integrations</td>
                                    <td className="px-4 py-3">Direct API code, no ceiling</td>
                                    <td className="px-4 py-3">Marketplace plugins</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Performance control</td>
                                    <td className="px-4 py-3">Full, tuned for Core Web Vitals</td>
                                    <td className="px-4 py-3">Platform-managed</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Technical SEO</td>
                                    <td className="px-4 py-3">Total control of markup</td>
                                    <td className="px-4 py-3">Template-bound</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Design freedom</td>
                                    <td className="px-4 py-3">Unconstrained</td>
                                    <td className="px-4 py-3">Within template limits</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Commerce fees</td>
                                    <td className="px-4 py-3">Your processor rate only</td>
                                    <td className="px-4 py-3">Plan + transaction fees</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Maintenance</td>
                                    <td className="px-4 py-3">You or a retainer team</td>
                                    <td className="px-4 py-3">Fully handled by platform</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Code ownership</td>
                                    <td className="px-4 py-3">Owned by client</td>
                                    <td className="px-4 py-3">Proprietary platform</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Time to launch</td>
                                    <td className="px-4 py-3">4 to 10 weeks</td>
                                    <td className="px-4 py-3">Days</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                            <h3 className="text-white font-semibold mb-4">Where custom wins</h3>
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
                            <h3 className="text-white font-semibold mb-4">Where Squarespace wins</h3>
                            <ul className="space-y-2">
                                {proSquarespace.map((item) => (
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pricing reality</h2>
                    <div className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Squarespace and a custom build are priced on different axes. Squarespace is cheap to run and expensive to outgrow; a custom app costs more up front and nothing in platform fees afterward.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-300 mb-4">
                            <li className="flex gap-2"><span className="text-sky-400">~$16 to $52/mo</span><span className="text-gray-400">=</span><span className="text-white">Squarespace plan, by tier</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">+ fees</span><span className="text-gray-400">=</span><span className="text-white">commerce transaction fees + paid plugins</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">+ workaround cost</span><span className="text-gray-400">=</span><span className="text-white">developer time fighting template limits</span></li>
                            <li className="flex gap-2 border-t border-white/5 pt-2 mt-2"><span className="text-emerald-400 font-semibold">$15k to $45k</span><span className="text-gray-400">=</span><span className="text-white font-semibold">a custom web app, one-time, code you own</span></li>
                        </ul>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            For a true brochure site, Squarespace is the cheaper answer for years and there is no contest. The flip happens when you are paying developers to force application behavior through a template — at that point the workaround budget plus the platform fees start to approach the cost of just building it right and owning it.
                        </p>
                    </div>
                    <div className="mt-4">
                        <Link
                            href="/pricing"
                            className="inline-flex items-center gap-1 text-sky-400 hover:underline text-sm"
                        >
                            See our pricing for web app work <ArrowRight className="w-3 h-3" />
                        </Link>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Migration path off Squarespace</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The cutover is straightforward. Week one is content — we export and migrate your pages, posts, and media into a clean Next.js codebase, matching the existing look or improving it. The pieces that were genuinely just brochure pages stay simple; nothing gets over-engineered for the sake of it.
                        </p>
                        <p>
                            From there we build the application features that Squarespace could not carry — accounts, dashboards, integrations, gated workflows — as native parts of the new site. We set up redirects so search rankings carry over, and the old site stays live until the new one is verified. You end with one codebase you own, no monthly platform fee, and room to grow without hitting a template wall.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <ConsultationCTA label="Get a Migration Scope" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "When is a custom web app a better fit than Squarespace?",
                                a: "Custom wins when your site needs real application logic — accounts, dashboards, calculators, gated workflows, complex forms — that goes beyond pages and a blog, when you need deep integrations into your own systems, or when performance, SEO control, and ownership matter. For a marketing site or a simple storefront, Squarespace is faster and cheaper.",
                            },
                            {
                                q: "Can you rebuild our Squarespace site as a custom web app?",
                                a: "Yes. Squarespace content exports to a standard format and we can scrape and migrate pages, posts, and media into a clean Next.js codebase. The look can be matched closely or improved, and the parts that were genuinely just brochure pages stay simple while the new application features get built properly behind them.",
                            },
                            {
                                q: "Is Squarespace ever the right long-term choice?",
                                a: "Often, yes. For a marketing site, a portfolio, a blog, or a simple shop, Squarespace is excellent value and there is no reason to build custom. The hybrid pattern is common too — keep Squarespace for the marketing pages and build the application part as a separate custom app.",
                            },
                            {
                                q: "Do we own the code if we leave Squarespace?",
                                a: "Completely. You get the GitHub repository, the codebase, the deployment configs, and the documentation, hosted wherever you like. No monthly platform fee, no template lock-in, no transaction fees on the commerce side.",
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related comparisons and services</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Link
                            href="/services/web-applications"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">Web Application Development</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">The full service page — what we build, methodology, pricing.</p>
                        </Link>
                        <Link
                            href="/vs/wix"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">vs Wix</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">The other website-builder comparison — same framing, different platform.</p>
                        </Link>
                        <Link
                            href="/vs/wordpress"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">vs WordPress</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">Plugin-driven sites versus a custom codebase you own.</p>
                        </Link>
                        <Link
                            href="/services/ecommerce-development"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">Ecommerce Development</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">Custom storefronts when a template shop is not enough.</p>
                        </Link>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["build-vs-buy","stack"]}
                        heading="Related build-vs-buy reading"
                    />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Outgrowing your Squarespace site?
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or <Link href="/contact" className="text-sky-400 hover:underline">book a 20-minute scope call</Link>. We will look at what your site needs to do and tell you straight whether Squarespace still fits, custom is worth it, or a hybrid is the smart move.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
