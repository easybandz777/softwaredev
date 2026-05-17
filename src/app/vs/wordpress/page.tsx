import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { FileCode, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "QUANT LAB vs WordPress: 2026 Web App Comparison | QUANT LAB USA",
    description:
        "WordPress powers 40 percent of the web — for content. When you need real apps, custom workflows, or security beyond plugins, custom code wins. Honest take.",
    alternates: { canonical: "https://quantlabusa.dev/vs/wordpress" },
    openGraph: {
        title: "QUANT LAB vs WordPress: 2026 Web App Comparison | QUANT LAB USA",
        description:
            "When WordPress wins. When custom code wins. Honest comparison of plugin-stack websites vs real Next.js applications.",
        url: "https://quantlabusa.dev/vs/wordpress",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "QUANT LAB vs WordPress: 2026 Web App Comparison | QUANT LAB USA",
        description:
            "Content site vs real app. A fair-minded breakdown.",
    },
};

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "QUANT LAB vs WordPress: 2026 Web App Comparison",
    description:
        "Honest comparison of WordPress + plugins vs custom Next.js development. When WordPress wins, when custom code wins, cost math, and migration paths.",
    url: "https://quantlabusa.dev/vs/wordpress",
    isPartOf: {
        "@type": "WebSite",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
    },
    about: {
        "@type": "Thing",
        name: "WordPress Alternative",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://quantlabusa.dev/services" },
        { "@type": "ListItem", position: 3, name: "vs WordPress", item: "https://quantlabusa.dev/vs/wordpress" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Why not just keep building on WordPress?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "For a content site, blog, or simple business site, you should. WordPress runs 40 percent of the web for a reason. The breakdown happens when the project needs real application logic, custom workflows that fight WP's hooks system, or a security posture you can defend in a SOC 2 audit. Plugin stacks are the failure mode, not the strength.",
            },
        },
        {
            "@type": "Question",
            name: "Can you migrate our WordPress site to a custom build?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. WordPress content exports cleanly via the WP REST API or WXR — posts, pages, media, custom post types, taxonomies, and users all map into a clean Next.js content layer. Plugin functionality is rebuilt as native code, not ported plugin-for-plugin, because the new system can usually do more with less.",
            },
        },
        {
            "@type": "Question",
            name: "What about WordPress security? Is it really that bad?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Core WordPress is well-maintained. The risk is the plugin ecosystem — a typical business site runs 15 to 30 plugins from different vendors with different update cadences and different security disciplines. Most WordPress breaches are plugin breaches, not core breaches. A Next.js stack ships none of that supply chain by default.",
            },
        },
        {
            "@type": "Question",
            name: "Can WordPress handle a real web application?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "It can be forced to. Headless WordPress plus Next.js frontends is a real pattern, and there are real production applications running on WP. The honest answer is the application surface is fighting the platform — every custom workflow, every role-based gate, every integration adds plugin debt or custom PHP that future maintainers have to inherit. Real applications are usually better off on a real application stack.",
            },
        },
    ],
};

const proCustom = [
    "No plugin supply-chain risk — code you own, dependencies you audit",
    "Real application logic — auth, RBAC, custom workflows, real-time",
    "PostgreSQL data model, not WordPress's options/postmeta workaround",
    "Performance by default — SSR/ISR, no plugin overhead, CWV green",
    "Source code, deployment configs, and full client ownership",
];

const proWordPress = [
    "Massive ecosystem — 60,000+ plugins for almost any use case",
    "Familiar to non-technical content owners — easiest CMS in the world",
    "Lowest cost of entry — managed WP hosting from $10/month",
    "Huge global talent pool of WordPress developers and agencies",
    "Excellent for blogs, brochure sites, and content-heavy publications",
];

export default function CustomWebVsWordPressPage() {
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
                        <li className="text-gray-300">vs WordPress</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <FileCode className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        QUANT LAB vs WordPress
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        WordPress runs roughly 40 percent of the web. There is a reason for that — for content sites, blogs, and brochure sites it is genuinely hard to beat. When the project crosses into real application territory, plugin debt, security posture, and workflow rigidity start to cost more than the platform saves. Here is the honest comparison.
                    </p>
                    <ConsultationCTA label="Scope a WordPress Replacement" />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">WordPress vs custom code: which should I choose?</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>Choose WordPress for content sites, blogs, brochure sites, publications, and small WooCommerce stores edited primarily by non-developers. Choose custom code when the project needs authenticated workflows, custom application logic, performance-critical Core Web Vitals, or programmatic SEO at thousands of pages. The most expensive 2026 mistake is running a real application on WordPress through 20+ plugins — plugin debt and supply-chain risk usually exceed the cost of a rebuild.</strong>
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
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Blog, magazine, brochure site, simple WooCommerce</td><td className="px-4 py-3 font-semibold text-white">WordPress</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Custom application, real workflows, programmatic SEO at scale</td><td className="px-4 py-3 font-semibold text-white">Custom code (Next.js)</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Headless: WP as CMS, Next.js front-end</td><td className="px-4 py-3 font-semibold text-white">Hybrid (Headless WP)</td></tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When WordPress is the right call</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            WordPress earned its dominance. It is the best fit for content sites, blogs, brochure sites, publications, small e-commerce stores running WooCommerce, membership communities running BuddyPress, and any project where the primary deliverable is publishable content edited by non-developers. The Gutenberg editor is the most familiar CMS interface in the world, and the plugin ecosystem solves common problems faster than custom code can. Managed hosting starts at ten dollars a month.
                        </p>
                        <p>
                            For a blog, a small business site, a magazine, a portfolio, or a community site, WordPress is almost always the right call. The ecosystem is so deep that almost any feature you want already exists as a well-maintained plugin. The hiring pool for WordPress developers is genuinely massive, and the documentation is exhaustive. If the project fits inside the WordPress envelope, you are paying for breadth you actually use.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Where WordPress breaks down</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The breakdown happens at three specific boundaries. The first is the plugin stack — a typical business site running on WordPress accumulates 15 to 30 plugins from different vendors. Every plugin is a dependency on someone else's release schedule, security discipline, and abandonment risk. Most WordPress breaches are plugin breaches, and most plugin breaches happen in plugins that were lightly maintained for years before going stale. That is supply-chain risk you do not control.
                        </p>
                        <p>
                            The second boundary is application logic. WordPress was built as a content management system, not an application framework. Custom workflows, role-based access more granular than the default WP roles, complex forms, real-time features, and third-party API integrations are all possible — but each one is a custom plugin or a chunk of PHP in <code className="text-sky-300 text-sm">functions.php</code>, fighting against the assumptions of the core hooks system. The result is a fragile stack that future maintainers inherit reluctantly.
                        </p>
                        <p>
                            The third boundary is performance and SEO at scale. WordPress can be made fast — with caching layers, image optimization plugins, CDN integration, and managed hosting — but it requires constant maintenance attention. A Next.js stack ships Core Web Vitals in the green by default with no plugin layer to maintain. For programmatic SEO at thousands of database-driven pages, the gap widens further.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When custom code wins</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            <Link href="/services/web-applications" className="text-sky-400 hover:underline">Custom web application development</Link> wins when the project needs authenticated user accounts that do real work, custom data models beyond the WordPress posts/options/postmeta schema, role-based access more granular than WP's defaults, integration with regulated systems where supply-chain risk matters (HIPAA, SOC 2, ISO 27001 environments), real-time features, programmatic SEO at scale, or any combination of these requirements that would otherwise become a teetering plugin stack.
                        </p>
                        <p>
                            Security posture is the other major driver. Once an organization is going through a <Link href="/services/web-app-pentest" className="text-sky-400 hover:underline">web app pentest</Link>, a <Link href="/services/penetration-testing" className="text-sky-400 hover:underline">penetration test</Link>, or a compliance audit, the question stops being "is WordPress secure" and becomes "can we defend the plugin stack to an auditor". Most teams cannot, honestly. A clean Next.js + PostgreSQL stack with dependencies you can list and audit on one page is a different conversation.
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
                                    <th className="px-4 py-3 text-left font-semibold">WordPress + plugins</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-gray-300">
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Best for</td>
                                    <td className="px-4 py-3">Real applications + product UIs</td>
                                    <td className="px-4 py-3">Blogs, content sites, publications</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Architecture</td>
                                    <td className="px-4 py-3">Code-first, type-safe</td>
                                    <td className="px-4 py-3">Plugin-stack, PHP + MySQL</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Supply-chain risk</td>
                                    <td className="px-4 py-3">Audited dependency list</td>
                                    <td className="px-4 py-3">15 to 30 plugins from many vendors</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Authentication / RBAC</td>
                                    <td className="px-4 py-3">First-class, custom roles</td>
                                    <td className="px-4 py-3">WP roles + Members plugin</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Custom workflows</td>
                                    <td className="px-4 py-3">Native code, no fighting hooks</td>
                                    <td className="px-4 py-3">functions.php + custom plugins</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Performance / CWV</td>
                                    <td className="px-4 py-3">Green by default (SSR/ISR)</td>
                                    <td className="px-4 py-3">Requires caching + optimization</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Security posture</td>
                                    <td className="px-4 py-3">Auditable, defensible</td>
                                    <td className="px-4 py-3">Plugin update treadmill</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Content editing</td>
                                    <td className="px-4 py-3">Headless CMS (Sanity / custom)</td>
                                    <td className="px-4 py-3">Best-in-class Gutenberg editor</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Hosting</td>
                                    <td className="px-4 py-3">Vercel / AWS, ~$240/yr</td>
                                    <td className="px-4 py-3">Managed WP, ~$300 to $3,600/yr</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Time to launch</td>
                                    <td className="px-4 py-3">8 to 16 weeks (real app)</td>
                                    <td className="px-4 py-3">Hours to days (content site)</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Long-term maintenance</td>
                                    <td className="px-4 py-3">Quarterly dep upgrades</td>
                                    <td className="px-4 py-3">Continuous plugin updates</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                            <h3 className="text-white font-semibold mb-4">Where custom code wins</h3>
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
                            <h3 className="text-white font-semibold mb-4">Where WordPress wins</h3>
                            <ul className="space-y-2">
                                {proWordPress.map((item) => (
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Cost comparison: plugin debt vs build once</h2>
                    <div className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            For a content site, WordPress crushes the cost comparison — and it should, because that is the job it was built for. The math flips when the project is forced to behave like an application. A typical mid-market business site that started as WordPress and grew into something heavier:
                        </p>
                        <ul className="space-y-2 text-sm text-gray-300 mb-4">
                            <li className="flex gap-2"><span className="text-sky-400">~$3,600/yr</span><span className="text-gray-400">=</span><span className="text-white">managed WP hosting (WP Engine, Kinsta tier)</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">+ ~$2,400/yr</span><span className="text-gray-400">=</span><span className="text-white">paid plugins (forms, security, SEO, caching, members)</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">+ ~$15k/yr</span><span className="text-gray-400">=</span><span className="text-white">PHP developer retainer (security patches + features)</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">× 3 years</span><span className="text-gray-400">=</span><span className="text-white font-semibold">~$63k</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">+ ~$8k</span><span className="text-gray-400">=</span><span className="text-white">contingency (one breach + cleanup, statistically)</span></li>
                            <li className="flex gap-2 border-t border-white/5 pt-2 mt-2"><span className="text-emerald-400 font-semibold">~$71k</span><span className="text-gray-400">=</span><span className="text-white font-semibold">3-year WordPress TCO for a complex business site</span></li>
                        </ul>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Compare against a custom Next.js build at $40k to $80k one-time, plus $4k to $8k annually in hosting and dependency upgrades. That comes to $52k to $104k over three years — comparable on the surface, with the difference being a stack you actually own and a vastly smaller supply-chain attack surface.
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            For a content site under a hundred pages with no application logic, WordPress crushes the math. The math flips around the moment the project needs custom application surfaces, role-based access, or a defensible security posture for an audit.
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Migration path off WordPress</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The cutover is methodical. Week one is a content audit — every post, page, custom post type, taxonomy, and user table mapped against the new schema. Content exports through the WordPress REST API or a WXR dump, then transforms into the target format (MDX, Sanity, Contentful, or a custom Postgres CMS). Media assets migrate to Vercel Blob or S3 with redirect rules in place so old URLs do not 404 and SEO equity carries over.
                        </p>
                        <p>
                            Plugin functionality gets rebuilt as native code in week two onward — forms, members, custom post types, lead routing, integrations. The old WordPress site stays live during the build so traffic and SEO continue. Cutover is a single weekend with a final content sync, then WordPress moves to read-only for 60 days as a fallback before being decommissioned. Backlinks redirect via a 301 map. For projects also undergoing a <Link href="/services/penetration-testing" className="text-sky-400 hover:underline">security review</Link>, the migration is the right moment to retire plugin risk that audits keep flagging.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Real-world example</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            <Link href="/work/protectwithbri" className="text-sky-400 hover:underline">ProtectWithBri</Link> is a small business that had been on WordPress for years — a Divi theme, ten plugins, a fragile contact form, and a managed-hosting bill that kept creeping up. We migrated the marketing surface to Next.js, rebuilt the lead capture as a typed React form with native validation, integrated <Link href="/services/stripe-integration" className="text-sky-400 hover:underline">Stripe</Link> for paid consultations, and shipped Core Web Vitals in the green from launch. The hosting bill dropped, the plugin treadmill ended, and the site started ranking for terms the WordPress version never touched.
                        </p>
                        <p>
                            <Link href="/work/j5-sales-os" className="text-sky-400 hover:underline">J5 Sales OS</Link> is the same lesson at a different scale — a system that would have required ten WordPress plugins, three custom PHP files, and a constant security scan to even attempt. Contact deduplication, outreach presets, dual-mode lead flow, embedded reporting, Stripe and QuickBooks integration. Real application logic. The kind of thing your team logs in to use, not just read. WordPress would have been the wrong tool from the first sprint.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "Why not just keep building on WordPress?",
                                a: "For a content site, blog, or simple business site, you should. WordPress runs 40 percent of the web for a reason. The breakdown happens when the project needs real application logic, custom workflows that fight WP's hooks system, or a security posture you can defend in a SOC 2 audit. Plugin stacks are the failure mode, not the strength.",
                            },
                            {
                                q: "Can you migrate our WordPress site to a custom build?",
                                a: "Yes. WordPress content exports cleanly via the WP REST API or WXR — posts, pages, media, custom post types, taxonomies, and users all map into a clean Next.js content layer. Plugin functionality is rebuilt as native code, not ported plugin-for-plugin, because the new system can usually do more with less.",
                            },
                            {
                                q: "What about WordPress security? Is it really that bad?",
                                a: "Core WordPress is well-maintained. The risk is the plugin ecosystem — a typical business site runs 15 to 30 plugins from different vendors with different update cadences and different security disciplines. Most WordPress breaches are plugin breaches, not core breaches. A Next.js stack ships none of that supply chain by default.",
                            },
                            {
                                q: "Can WordPress handle a real web application?",
                                a: "It can be forced to. Headless WordPress plus Next.js frontends is a real pattern, and there are real production applications running on WP. The honest answer is the application surface is fighting the platform — every custom workflow, every role-based gate, every integration adds plugin debt or custom PHP that future maintainers have to inherit. Real applications are usually better off on a real application stack.",
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
                            <p className="text-sm text-gray-400 leading-relaxed">The full Next.js + PostgreSQL stack we ship for custom product surfaces.</p>
                        </Link>
                        <Link
                            href="/vs/webflow"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">vs Webflow</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">The other no-code comparison — same lesson with a different platform.</p>
                        </Link>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["stack","build-vs-buy"]}
                        heading="Related platform comparison reading"
                    />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Done with the plugin treadmill?
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or <Link href="/contact" className="text-sky-400 hover:underline">book a 20-minute scope call</Link>. We will walk through your WordPress stack, your plugin list, and your roadmap and tell you straight whether WP is still the right call, whether a custom build is, or whether the hybrid (headless WP plus Next.js front) is the move.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
