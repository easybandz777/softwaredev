import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Scale, Check, ArrowRight } from "lucide-react";
import { comparisonMetadata } from "@/lib/seoMeta";

export const metadata: Metadata = comparisonMetadata({
    competitor: "OutSystems",
    title: "QUANT LAB USA vs OutSystems: Custom Build vs Low-Code 2026",
    description:
        "OutSystems is a mature enterprise low-code platform that ships internal apps fast. When licensing, portability, and platform constraints start to bite, a custom build wins. Honest 2026 comparison.",
    slug: "/vs/outsystems",
});

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "QUANT LAB USA vs OutSystems: Custom App vs Enterprise Low-Code in 2026",
    description:
        "Honest comparison of OutSystems against a custom-built application. Where enterprise low-code accelerates delivery, where licensing and platform lock-in push you to owned code, and the point a custom build wins.",
    url: "https://quantlabusa.dev/vs/outsystems",
    isPartOf: {
        "@type": "WebSite",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
    },
    about: {
        "@type": "Thing",
        name: "OutSystems Alternative",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Custom Business Software", item: "https://quantlabusa.dev/services/custom-business-software" },
        { "@type": "ListItem", position: 3, name: "vs OutSystems", item: "https://quantlabusa.dev/vs/outsystems" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "When is a custom app a better fit than OutSystems?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Custom usually wins when annual platform licensing has grown past the amortized cost of a build, when you need full control of the stack and the freedom to host anywhere, when the app is a differentiated product rather than internal tooling, or when platform lock-in is a real strategic risk. For broad enterprise app portfolios delivered fast under central governance, OutSystems is genuinely strong.",
            },
        },
        {
            "@type": "Question",
            name: "Can you migrate our OutSystems apps to a custom codebase?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. OutSystems apps run on a relational database and expose service and REST APIs, so the data and integration surface are reachable. We model the domain into a clean PostgreSQL schema with real foreign keys and constraints, reimplement the application logic as tested TypeScript, and rebuild the screens your users rely on as a standard web application you own outright.",
            },
        },
        {
            "@type": "Question",
            name: "What is the timeline to replace an OutSystems app?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "8 to 16 weeks for the first production release of a single substantial app. A focused app with a clear data model and a handful of integrations is fast. A large app with deep workflow logic, many integrations, and years of accumulated rules takes the upper end of that range.",
            },
        },
        {
            "@type": "Question",
            name: "Do we own the code if we leave OutSystems?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Completely. You get the GitHub repository, the PostgreSQL schema, the deployment configs, and the documentation. There are no platform license seats, no runtime tiers, and no per-app fees to keep paying as usage grows — and no exit cost the next time your platform vendor changes its pricing.",
            },
        },
        {
            "@type": "Question",
            name: "Is OutSystems ever the right long-term choice?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Often, yes. For enterprises standardizing delivery across many internal apps, with strong governance needs and a trained low-code workforce, OutSystems is a serious platform and should not be replaced wholesale. The hybrid pattern keeps OutSystems for the broad internal portfolio and builds custom only for the flagship or customer-facing app that has outgrown it.",
            },
        },
        {
            "@type": "Question",
            name: "How does the cost compare for a single business app?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "OutSystems is licensed by platform tier plus runtime and typically scales with applications and end users, which for one substantial production app commonly lands in the tens of thousands of dollars per year on an ongoing basis. A custom app at $50k to $90k one-time with a $14k to $24k annual retainer is usually cost-neutral to slightly more in year one, then cheaper from year two as users grow.",
            },
        },
    ],
};

const proCustom = [
    "You own the schema, the source code, and the deployment",
    "No platform license tiers or per-app fees as usage grows",
    "Full control of the stack and freedom to host anywhere",
    "No vendor lock-in or exposure to platform pricing changes",
    "Ideal for differentiated, customer-facing products",
];

const proOutSystems = [
    "Mature, proven enterprise low-code with strong tooling",
    "Very fast delivery of internal apps under central governance",
    "Built-in CI/CD, environments, and lifecycle management",
    "Lets a low-code workforce ship without deep engineering",
    "Roadmap funded by OutSystems R&D, not your engineering budget",
];

export default function CustomAppVsOutSystemsPage() {
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
                        <li><Link href="/services/custom-business-software" className="hover:text-sky-400 transition-colors">Custom Business Software</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">vs OutSystems</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Scale className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        QUANT LAB USA vs OutSystems
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        OutSystems is a mature enterprise low-code platform. For an organization standardizing how it ships internal apps — with central governance and a trained low-code team — it delivers fast and reliably. The math changes when annual licensing outpaces a build, when platform constraints start shaping your architecture, and when the app is a differentiated product rather than back-office tooling that a <Link href="/services/custom-business-software" className="text-sky-400 hover:underline">custom app</Link> would handle without a platform tax. Here is the honest comparison.
                    </p>
                    <ConsultationCTA label="Scope an OutSystems Alternative" />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Custom app vs OutSystems: which should I choose?</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>Choose OutSystems when you are delivering a broad portfolio of internal apps fast, central governance and lifecycle management matter, and you have a low-code workforce to maintain them. Choose a custom app when annual platform licensing has passed the amortized cost of a build, when you need full control of the stack and the freedom to host anywhere, when the app is a customer-facing product, or when vendor lock-in is a strategic risk. The hybrid pattern keeps OutSystems for the internal portfolio and builds custom for the flagship app that has outgrown it.</strong>
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
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Many internal apps, central governance, low-code team</td><td className="px-4 py-3 font-semibold text-white">OutSystems</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Differentiated product, full stack control, host anywhere</td><td className="px-4 py-3 font-semibold text-white">Custom app</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Keep OutSystems internally, build the flagship app custom</td><td className="px-4 py-3 font-semibold text-white">Hybrid</td></tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When OutSystems is the right call</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            OutSystems earned its place in the enterprise by making application delivery repeatable. A visual model, generated UI, built-in environments, and lifecycle management that lets a team move an app from development to production under governance without standing up that pipeline by hand. For an organization that needs to ship many internal apps quickly and keep them consistent, that acceleration is genuinely hard to match by writing each one from scratch.
                        </p>
                        <p>
                            If your portfolio is wide, your delivery teams lean on low-code skills more than deep engineering, and central control over who can build and deploy is a requirement rather than a nice-to-have, OutSystems is the right call. The platform handles the plumbing — integrations, access, deployment, and the surrounding lifecycle — so a smaller group can keep a large number of internal apps moving. That is the use case the platform was built for, and it serves it well.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Where OutSystems starts to break</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Enterprise low-code hits a ceiling at a predictable point. The first squeeze is cost — platform licensing recurs every year and tends to scale with applications and users, so an app that was cheap to ship becomes a standing line item that never amortizes the way a one-time build does. For a single substantial app, that ongoing fee can quietly exceed what the same app would have cost to own outright.
                        </p>
                        <p>
                            The second squeeze is portability and control. Apps are expressed in the platform&apos;s model and run on its runtime, so the deeper your investment, the harder it is to move — and the more your architecture bends to what the platform exposes rather than what your product needs. The third squeeze is fit: when an app stops being internal tooling and becomes a differentiated, customer-facing product, the things that make low-code fast for back-office work — generated UI, platform-shaped logic, opinionated patterns — start to constrain the exact places you want full freedom.
                        </p>
                        <p>
                            None of this is OutSystems being a bad platform. It is the cost of running a strategic or product-grade app on infrastructure designed to standardize an internal portfolio. The broader framing lives in our <Link href="/blog/build-vs-buy-software-2026" className="text-sky-400 hover:underline">build vs buy software guide</Link>, and the freedom-to-host angle is covered on our <Link href="/services/cloud-infrastructure" className="text-sky-400 hover:underline">cloud infrastructure</Link> page.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When custom wins</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            A custom app tends to win when annual platform licensing has passed the amortized cost of a build, when you need full control of the stack and the freedom to host anywhere, when the app is a product you intend to differentiate on, or when vendor lock-in has become a strategic risk you no longer want to carry. <Link href="/services/web-applications" className="text-sky-400 hover:underline">Custom web applications</Link> give you a proper PostgreSQL schema with foreign keys and constraints, a UI tuned exactly to the workflow, and logic that lives in tested code you own.
                        </p>
                        <p>
                            The other common driver is product ambition. When the app is the thing customers pay for, you want the freedom to shape every layer — interface, performance, integrations, data model — without negotiating with a platform&apos;s conventions. A custom build also gives you a clean API for the rest of your stack and reporting straight off the database. If the workflow is closer to a product than a back office, our <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platform development</Link> path picks up from there.
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
                                    <th className="px-4 py-3 text-left font-semibold text-white">Custom app (QUANT LAB USA)</th>
                                    <th className="px-4 py-3 text-left font-semibold">OutSystems</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-gray-300">
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Pricing model</td>
                                    <td className="px-4 py-3">One-time build + optional retainer</td>
                                    <td className="px-4 py-3">Annual platform tier + runtime</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Cost over time</td>
                                    <td className="px-4 py-3">Flat after build</td>
                                    <td className="px-4 py-3">Recurs, scales with apps and users</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Delivery speed (internal apps)</td>
                                    <td className="px-4 py-3">Weeks per app</td>
                                    <td className="px-4 py-3">Days to weeks, governed</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Stack control</td>
                                    <td className="px-4 py-3">Full, every layer</td>
                                    <td className="px-4 py-3">Within the platform model</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Hosting</td>
                                    <td className="px-4 py-3">Any cloud or region you choose</td>
                                    <td className="px-4 py-3">Platform-managed runtime</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Data model</td>
                                    <td className="px-4 py-3">Real foreign keys, enforced</td>
                                    <td className="px-4 py-3">Modeled entities on the platform</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Business logic</td>
                                    <td className="px-4 py-3">Tested TypeScript, version-controlled</td>
                                    <td className="px-4 py-3">Visual logic + platform code</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Lifecycle / CI-CD</td>
                                    <td className="px-4 py-3">Your pipeline, standard tooling</td>
                                    <td className="px-4 py-3">Built-in environments + deploys</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Integrations</td>
                                    <td className="px-4 py-3">Native API code, no markup</td>
                                    <td className="px-4 py-3">Connectors + service APIs</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Source code</td>
                                    <td className="px-4 py-3">Owned by client</td>
                                    <td className="px-4 py-3">Proprietary platform model</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Vendor lock-in</td>
                                    <td className="px-4 py-3">None — portable stack</td>
                                    <td className="px-4 py-3">Tied to platform and licensing</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Best fit</td>
                                    <td className="px-4 py-3">Differentiated, product-grade apps</td>
                                    <td className="px-4 py-3">Broad internal app portfolios</td>
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
                            <h3 className="text-white font-semibold mb-4">Where OutSystems wins</h3>
                            <ul className="space-y-2">
                                {proOutSystems.map((item) => (
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Cost comparison for one substantial app</h2>
                    <div className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Run the simple version for a single production app over three years. OutSystems is licensed by platform tier plus runtime, so the exact figure depends on your edition and user counts — but for one substantial app it commonly settles in the tens of thousands per year:
                        </p>
                        <ul className="space-y-2 text-sm text-gray-300 mb-4">
                            <li className="flex gap-2"><span className="text-sky-400">~$40k+/yr</span><span className="text-gray-400">=</span><span className="text-white">platform tier + runtime for one app (illustrative)</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">× 3 years</span><span className="text-gray-400">=</span><span className="text-white font-semibold">~$120k+</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">+ internal</span><span className="text-gray-400">=</span><span className="text-white">low-code maintenance + platform admin time</span></li>
                            <li className="flex gap-2 border-t border-white/5 pt-2 mt-2"><span className="text-emerald-400 font-semibold">~$120k+</span><span className="text-gray-400">=</span><span className="text-white font-semibold">3-year platform cost at this size</span></li>
                        </ul>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Compare against a custom app at $50k to $90k one-time, plus $14k to $24k annually for feature work and maintenance. That comes to roughly $92k to $162k over three years — typically cost-neutral to slightly more in year one and cheaper from year two as users grow, because the build cost does not recur the way platform licensing does. Treat the OutSystems figure above as illustrative and confirm it against your own quote; their pricing is configured per organization and not published as a flat number.
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            The math favors OutSystems when you are spreading the platform across a large internal portfolio, where the per-app cost falls and the governance and delivery speed pay for themselves. It flips toward custom when a single app carries the platform cost on its own, or when that app is a product you want to own outright.
                        </p>
                    </div>
                    <div className="mt-4">
                        <Link
                            href="/pricing"
                            className="inline-flex items-center gap-1 text-sky-400 hover:underline text-sm"
                        >
                            See our pricing for custom app work <ArrowRight className="w-3 h-3" />
                        </Link>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Migration path off OutSystems</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The cutover follows a predictable pattern. Week one is data modeling — we map the platform&apos;s entities into a clean PostgreSQL schema with real foreign keys, and decide which loosely-governed rules become enforced constraints. From there we extract data and exercise the app&apos;s service and REST endpoints, with reconciliation reports so nothing goes missing in the move.
                        </p>
                        <p>
                            Then it is a normal build — application screens that replace the platform-generated UI your users relied on, business logic and workflows reimplemented as tested TypeScript, and integrations wired natively. The OutSystems app stays live in parallel during the build so day-to-day work never stops, then you cut over once the new app reaches parity. The platform can remain as a read-only reference for a window before being retired, so there is never a moment where the data lives in only one place. The same discipline applies when we tackle <Link href="/services/legacy-system-modernization" className="text-sky-400 hover:underline">legacy system modernization</Link> more broadly.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <ConsultationCTA label="Get an OutSystems Migration Scope" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "When is a custom app a better fit than OutSystems?",
                                a: "Custom usually wins when annual platform licensing has grown past the amortized cost of a build, when you need full control of the stack and the freedom to host anywhere, when the app is a differentiated product rather than internal tooling, or when platform lock-in is a real strategic risk. For broad enterprise app portfolios delivered fast under central governance, OutSystems is genuinely strong.",
                            },
                            {
                                q: "Can you migrate our OutSystems apps to a custom codebase?",
                                a: "Yes. OutSystems apps run on a relational database and expose service and REST APIs, so the data and integration surface are reachable. We model the domain into a clean PostgreSQL schema with real foreign keys and constraints, reimplement the application logic as tested TypeScript, and rebuild the screens your users rely on as a standard web application you own outright.",
                            },
                            {
                                q: "Is OutSystems ever the right long-term choice?",
                                a: "Often, yes. For enterprises standardizing delivery across many internal apps, with strong governance needs and a trained low-code workforce, OutSystems is a serious platform and should not be replaced wholesale. The hybrid pattern keeps OutSystems for the broad internal portfolio and builds custom only for the flagship or customer-facing app that has outgrown it.",
                            },
                            {
                                q: "How does the cost compare for a single business app?",
                                a: "OutSystems is licensed by platform tier plus runtime and typically scales with applications and end users, which for one substantial production app commonly lands in the tens of thousands of dollars per year on an ongoing basis. A custom app at $50k to $90k one-time with a $14k to $24k annual retainer is usually cost-neutral to slightly more in year one, then cheaper from year two as users grow.",
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
                            href="/services/custom-business-software"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">Custom Business Software</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">The full service page — what we build, methodology, pricing.</p>
                        </Link>
                        <Link
                            href="/vs/mendix"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">vs Mendix</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">Another enterprise low-code platform compared to a custom build you own.</p>
                        </Link>
                        <Link
                            href="/vs/quickbase"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">vs Quickbase</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">Low-code app platform for operations compared to a custom application.</p>
                        </Link>
                        <Link
                            href="/blog/build-vs-buy-software-2026"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">Build vs Buy Software (2026)</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">Three-year TCO math and a decision framework.</p>
                        </Link>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["build-vs-buy","saas"]}
                        heading="Related build-vs-buy reading"
                    />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Do the math on your OutSystems app.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or <Link href="/contact" className="text-sky-400 hover:underline">book a 20-minute scope call</Link>. We will walk through your app&apos;s logic, your user count, and your licensing and tell you straight whether OutSystems is still right, custom is right, or you should run a hybrid.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
