import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Scale, Check, ArrowRight } from "lucide-react";
import { comparisonMetadata } from "@/lib/seoMeta";

export const metadata: Metadata = comparisonMetadata({
    competitor: "Wix",
    title: "QUANT LAB USA vs Wix: Custom Web Development in 2026",
    description:
        "Wix gets a small-business site live cheaply with drag-and-drop ease. When you need real application features, performance, and ownership, custom development wins. Honest 2026 comparison.",
    slug: "/vs/wix",
});

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "QUANT LAB USA vs Wix: Custom Web Development vs Website Builder in 2026",
    description:
        "Honest comparison of Wix against custom web development. Where the drag-and-drop builder is the right call, where it caps you, and when application features demand real code.",
    url: "https://quantlabusa.dev/vs/wix",
    isPartOf: {
        "@type": "WebSite",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
    },
    about: {
        "@type": "Thing",
        name: "Wix Alternative",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Web Applications", item: "https://quantlabusa.dev/services/web-applications" },
        { "@type": "ListItem", position: 3, name: "vs Wix", item: "https://quantlabusa.dev/vs/wix" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "When is custom development a better fit than Wix?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Custom wins when your site needs real application features — accounts, dashboards, complex booking or workflow logic, deep integrations — when performance and technical SEO matter, or when you want to own the code rather than rent a platform. For a straightforward small-business site, Wix is faster and cheaper.",
            },
        },
        {
            "@type": "Question",
            name: "Can you rebuild our Wix site as a custom site?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We migrate your content, pages, and media into a clean Next.js codebase, matching or improving the design. Wix's editor output is not portable, so the build is a proper rebuild rather than an import, but the content and structure carry over and the result is code you own.",
            },
        },
        {
            "@type": "Question",
            name: "What is the timeline to replace a Wix site?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "4 to 10 weeks for a custom site with real functionality. A content-focused rebuild is on the fast end. Booking systems, member areas, or integrations into your back office push toward the upper end of that range.",
            },
        },
        {
            "@type": "Question",
            name: "Do we own the code if we leave Wix?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Completely. You get the GitHub repository, the codebase, the deployment configs, and the documentation, hosted wherever you like. No monthly platform fee, no premium-app subscriptions, and no lock-in to Wix's proprietary editor.",
            },
        },
        {
            "@type": "Question",
            name: "Is Wix ever the right long-term choice?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Often, yes. For a small-business brochure site, a local-service page, or a simple shop, Wix is excellent value and there is no reason to build custom. The hybrid pattern works too — keep Wix for the marketing site and build any real application as a separate custom app.",
            },
        },
    ],
};

const proCustom = [
    "Real application features — accounts, dashboards, custom booking logic",
    "Deep integrations into your own systems, no premium-app ceiling",
    "Full control over performance, Core Web Vitals, and technical SEO",
    "You own the codebase and host anywhere, no monthly platform fee",
    "Design with no editor constraints and clean, portable markup",
];

const proWix = [
    "Genuinely the easiest drag-and-drop builder for non-technical owners",
    "Fast and cheap to get a small-business site live",
    "Large app market covers booking, forms, and basic commerce",
    "Hosting, SSL, and updates handled — nothing to maintain",
    "Templates and AI tools give a polished start with little effort",
];

export default function CustomWebDevVsWixPage() {
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
                        <li className="text-gray-300">vs Wix</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Scale className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        QUANT LAB USA vs Wix
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Wix is the easiest way for a non-technical owner to get a small-business site live, and for a brochure page or a simple shop that is genuinely the right tool. The math turns the moment your site needs to be an application — accounts, booking logic, dashboards, real integrations — and you start fighting the editor where <Link href="/services/web-applications" className="text-sky-400 hover:underline">custom development</Link> would just build the feature. Here is the honest comparison.
                    </p>
                    <ConsultationCTA label="Scope a Custom Site" />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Custom development vs Wix: which should I choose?</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>Choose Wix when you need a straightforward small-business site, a local-service page, or a simple shop and want drag-and-drop ease with nothing to maintain. Choose custom development when the site needs real application features, deep integrations, full control over performance and technical SEO, or ownership of the code. The hybrid pattern is common: keep Wix for the marketing site and build any real application as a separate custom app.</strong>
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
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Small-business brochure site or simple shop</td><td className="px-4 py-3 font-semibold text-white">Wix</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Accounts, booking logic, dashboards, deep integrations</td><td className="px-4 py-3 font-semibold text-white">Custom development</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Keep marketing on Wix, build the app custom</td><td className="px-4 py-3 font-semibold text-white">Hybrid</td></tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When Wix is the right call</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Wix is excellent at lowering the barrier to a website. The drag-and-drop editor is the most forgiving on the market, the templates and AI site builder give a polished starting point, and a non-technical owner can stand up a presentable small-business site in an afternoon. Hosting, SSL, and updates are all handled, so there is nothing to maintain.
                        </p>
                        <p>
                            If what you need is a brochure site, a local-service page, an event listing, or a modest shop, Wix is the right call and a custom build would be wasted money. The app market covers booking, contact forms, and basic commerce well enough for many small businesses, and the running cost is low. That is the job Wix was built for, and it does it better than almost anyone.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Where Wix starts to break</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Wix hits a ceiling at a predictable point. The first squeeze is functionality — once you need member accounts, custom booking rules, a real dashboard, or logic that responds to your business, you are stacking premium apps and Velo scripts onto a builder that was designed for pages. It can be made to work, but it gets fragile and the pieces rarely feel native.
                        </p>
                        <p>
                            The second squeeze is performance and SEO control. Wix sites carry a lot of platform overhead, and squeezing Core Web Vitals or controlling exactly how pages render runs into hard limits. The third squeeze is ownership and lock-in — your site lives inside Wix&apos;s proprietary editor, the output is not portable, and migrating off means a rebuild because there is no clean export. The broader trade-off is laid out in our <Link href="/blog/build-vs-buy-software-2026" className="text-sky-400 hover:underline">build vs buy guide</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When custom wins</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Custom development tends to win when your site needs to be software, not just content — accounts, dashboards, custom booking or workflow logic, and integrations into the systems you already run. <Link href="/services/web-applications" className="text-sky-400 hover:underline">Custom web applications</Link> built on Next.js give you those features natively, with clean markup and full control over how every page performs and ranks.
                        </p>
                        <p>
                            The other driver is ownership and growth. A custom build is code you own and can host anywhere, with no monthly platform fee and no premium-app subscriptions stacking up. When the workflow grows beyond a website into a real product, the same codebase is the foundation, and our <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platform development</Link> path picks up from there rather than forcing a fresh start.
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
                                    <th className="px-4 py-3 text-left font-semibold text-white">Custom site (QUANT LAB USA)</th>
                                    <th className="px-4 py-3 text-left font-semibold">Wix</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-gray-300">
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Pricing model</td>
                                    <td className="px-4 py-3">One-time build + hosting</td>
                                    <td className="px-4 py-3">Monthly subscription + apps</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Best for</td>
                                    <td className="px-4 py-3">Sites that are also software</td>
                                    <td className="px-4 py-3">Small-business sites and simple shops</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Ease for non-technical owner</td>
                                    <td className="px-4 py-3">Edits via a simple CMS</td>
                                    <td className="px-4 py-3">Best-in-class drag-and-drop</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Application logic</td>
                                    <td className="px-4 py-3">First-class, any complexity</td>
                                    <td className="px-4 py-3">Premium apps + Velo scripts</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Integrations</td>
                                    <td className="px-4 py-3">Direct API code, no ceiling</td>
                                    <td className="px-4 py-3">App market, some paid</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Performance</td>
                                    <td className="px-4 py-3">Tuned, minimal overhead</td>
                                    <td className="px-4 py-3">Heavier platform overhead</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Technical SEO</td>
                                    <td className="px-4 py-3">Total control of markup</td>
                                    <td className="px-4 py-3">Editor-bound</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Design freedom</td>
                                    <td className="px-4 py-3">Unconstrained</td>
                                    <td className="px-4 py-3">Within editor limits</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Portability</td>
                                    <td className="px-4 py-3">Code you own, host anywhere</td>
                                    <td className="px-4 py-3">No clean export</td>
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
                            <h3 className="text-white font-semibold mb-4">Where Wix wins</h3>
                            <ul className="space-y-2">
                                {proWix.map((item) => (
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
                            Wix and a custom build are priced on different axes. Wix is cheap to run and expensive to outgrow; a custom site costs more up front and nothing in platform fees afterward.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-300 mb-4">
                            <li className="flex gap-2"><span className="text-sky-400">~$17 to $59/mo</span><span className="text-gray-400">=</span><span className="text-white">Wix plan, by tier</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">+ apps</span><span className="text-gray-400">=</span><span className="text-white">premium-app subscriptions stack up</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">+ workaround cost</span><span className="text-gray-400">=</span><span className="text-white">developer time fighting editor limits</span></li>
                            <li className="flex gap-2 border-t border-white/5 pt-2 mt-2"><span className="text-emerald-400 font-semibold">$15k to $45k</span><span className="text-gray-400">=</span><span className="text-white font-semibold">a custom site, one-time, code you own</span></li>
                        </ul>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            For a true small-business site, Wix is the cheaper answer for years and there is no contest. The flip happens when you are paying developers to force application behavior through the editor — at that point the workaround budget plus the app subscriptions start to approach the cost of just building it right and owning it.
                        </p>
                    </div>
                    <div className="mt-4">
                        <Link
                            href="/pricing"
                            className="inline-flex items-center gap-1 text-sky-400 hover:underline text-sm"
                        >
                            See our pricing for custom web work <ArrowRight className="w-3 h-3" />
                        </Link>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Migration path off Wix</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Because Wix output is not portable, the cutover is a proper rebuild rather than an import — but it is a well-worn path. Week one is content and structure — we capture your pages, copy, and media and model them into a clean Next.js codebase, matching the existing design or improving it. Nothing simple gets over-engineered.
                        </p>
                        <p>
                            From there we build the application features Wix could not carry natively — accounts, booking logic, dashboards, integrations — as first-class parts of the new site. We set up redirects so search rankings carry over, and the Wix site stays live until the new one is verified in production. You end with a fast, owned codebase and no monthly platform or premium-app fees.
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
                                q: "When is custom development a better fit than Wix?",
                                a: "Custom wins when your site needs real application features — accounts, dashboards, complex booking or workflow logic, deep integrations — when performance and technical SEO matter, or when you want to own the code rather than rent a platform. For a straightforward small-business site, Wix is faster and cheaper.",
                            },
                            {
                                q: "Can you rebuild our Wix site as a custom site?",
                                a: "Yes. We migrate your content, pages, and media into a clean Next.js codebase, matching or improving the design. Wix's editor output is not portable, so the build is a proper rebuild rather than an import, but the content and structure carry over and the result is code you own.",
                            },
                            {
                                q: "Is Wix ever the right long-term choice?",
                                a: "Often, yes. For a small-business brochure site, a local-service page, or a simple shop, Wix is excellent value and there is no reason to build custom. The hybrid pattern works too — keep Wix for the marketing site and build any real application as a separate custom app.",
                            },
                            {
                                q: "Do we own the code if we leave Wix?",
                                a: "Completely. You get the GitHub repository, the codebase, the deployment configs, and the documentation, hosted wherever you like. No monthly platform fee, no premium-app subscriptions, and no lock-in to Wix's proprietary editor.",
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
                            href="/vs/squarespace"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">vs Squarespace</h3>
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
                            href="/vs/webflow"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">vs Webflow</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">A more designer-focused builder compared to custom code.</p>
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
                            Outgrowing your Wix site?
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or <Link href="/contact" className="text-sky-400 hover:underline">book a 20-minute scope call</Link>. We will look at what your site needs to do and tell you straight whether Wix still fits, custom is worth it, or a hybrid is the smart move.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
