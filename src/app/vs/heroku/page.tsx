import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Scale, Check, ArrowRight } from "lucide-react";
import { comparisonMetadata } from "@/lib/seoMeta";

export const metadata: Metadata = comparisonMetadata({
    competitor: "Heroku",
    title: "QUANT LAB USA vs Heroku: Custom Build & Hosting 2026",
    description:
        "Heroku is a polished PaaS that makes deploying apps simple. But hosting is not building — you still need the app itself. Where a custom build fits, and the migration path. Honest 2026 comparison.",
    slug: "/vs/heroku",
});

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "QUANT LAB USA vs Heroku: Custom Build and Hosting in 2026",
    description:
        "Honest comparison clarifying that Heroku is a hosting platform, not an app builder. Where the PaaS dyno model fits, where dyno cost and constraints push you to other infrastructure, and how a custom build relates.",
    url: "https://quantlabusa.dev/vs/heroku",
    isPartOf: {
        "@type": "WebSite",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
    },
    about: {
        "@type": "Thing",
        name: "Heroku Alternative",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Cloud Infrastructure", item: "https://quantlabusa.dev/services/cloud-infrastructure" },
        { "@type": "ListItem", position: 3, name: "vs Heroku", item: "https://quantlabusa.dev/vs/heroku" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Is Heroku an alternative to a custom build?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Not quite — they solve different problems. Heroku is a place to run an application; it does not write the application for you. QUANT LAB USA builds the custom app itself and then deploys it wherever fits best, which can absolutely be Heroku. The real comparison is where Heroku's dyno model is the right host versus where other infrastructure serves the app better.",
            },
        },
        {
            "@type": "Question",
            name: "Can you build an app and deploy it on Heroku?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Heroku is a perfectly good target for many apps, especially early on — its buildpacks, add-ons, and simple git-based deploys make it fast to ship. We build the application, you own the code, and we deploy it to Heroku if its model fits, with the freedom to move later without a rewrite.",
            },
        },
        {
            "@type": "Question",
            name: "When should we move off Heroku to other infrastructure?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "When dyno and add-on costs at your scale exceed comparable infrastructure, when you need control Heroku's model does not expose, or when specific performance, networking, or compliance requirements push you elsewhere. Because we build standard, portable applications, moving the host is an infrastructure task, not an app rewrite.",
            },
        },
        {
            "@type": "Question",
            name: "Do we own the app regardless of where it is hosted?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Completely. You get the GitHub repository, the database and schema, the deployment configs, and the documentation. The app is built on a standard, portable stack, so the hosting choice — Heroku, a major cloud, or elsewhere — is yours to make and to change without being locked in.",
            },
        },
        {
            "@type": "Question",
            name: "Is Heroku ever the right long-term choice?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Often, yes. For many apps the operational simplicity of Heroku is worth the premium for years — managed dynos, add-ons, and zero server maintenance let a small team focus on the product. The decision is about whether that convenience is worth the cost at your scale, not about the platform being wrong.",
            },
        },
        {
            "@type": "Question",
            name: "How does Heroku's cost compare to other hosting at scale?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Heroku prices for convenience — dynos and managed add-ons carry a premium over raw infrastructure, which is well worth it early when engineering time is the scarce resource. As traffic and the add-on footprint grow, comparable capacity on a major cloud or a leaner PaaS is often cheaper, and a portable app lets you make that move when the math says so.",
            },
        },
    ],
};

const proCustom = [
    "You own the app, the source code, and the deployment configs",
    "Built on a standard, portable stack — host anywhere",
    "Logic and data tuned to the product, not a starter template",
    "Freedom to deploy on Heroku now and move later, no rewrite",
    "Hosting is a deliberate decision, never a lock-in",
];

const proHeroku = [
    "Genuinely simple git-based deploys and buildpacks",
    "Rich add-on marketplace for databases, queues, and more",
    "Managed dynos with zero server maintenance",
    "Excellent for shipping fast and small-team operations",
    "Mature, stable platform with a long track record",
];

export default function CustomBuildVsHerokuPage() {
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
                        <li><Link href="/services/cloud-infrastructure" className="hover:text-sky-400 transition-colors">Cloud Infrastructure</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">vs Heroku</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Scale className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        QUANT LAB USA vs Heroku
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        This comparison needs an honest caveat up front: Heroku is a place to run an application, not a way to build one. It is a polished platform-as-a-service that makes deploying apps wonderfully simple. QUANT LAB USA builds the <Link href="/services/custom-business-software" className="text-sky-400 hover:underline">custom application itself</Link> — and then deploys it wherever fits, which can absolutely be Heroku. The real question is where Heroku&apos;s dyno model is the right host and where other infrastructure serves the app better. Here is the honest comparison.
                    </p>
                    <ConsultationCTA label="Scope a Custom Build" />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Custom build vs Heroku: which should I choose?</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>This is not really an either/or. You need an application built, and you need somewhere to run it. QUANT LAB USA builds the app; Heroku can be one of the places it runs. Choose Heroku as the host when operational simplicity is worth the premium and its model fits your workload. Choose other infrastructure when dyno and add-on costs at scale, control, or specific requirements push you elsewhere. Because we build portable apps, you keep the freedom to deploy on Heroku now and move later without a rewrite.</strong>
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Quick verdict</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left border border-white/10 rounded-xl overflow-hidden">
                            <thead className="bg-[#0d1526] text-white">
                                <tr>
                                    <th className="px-4 py-3 border-b border-white/10">Need</th>
                                    <th className="px-4 py-3 border-b border-white/10">Answer</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Someone to build the actual application</td><td className="px-4 py-3 font-semibold text-white">QUANT LAB USA</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Simple managed hosting, small team, ship fast</td><td className="px-4 py-3 font-semibold text-white">Heroku as host</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Build the app, deploy on Heroku, keep it portable</td><td className="px-4 py-3 font-semibold text-white">Both together</td></tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When Heroku is the right call</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Heroku earned its place by making deployment almost invisible. Push to git, a buildpack detects your stack, and your app is live on a managed dyno with no servers to patch. The add-on marketplace covers databases, queues, caching, logging, and more with a click, and the whole experience is tuned so a small team can ship and operate without a dedicated ops function. For that, it is genuinely excellent and remains a strong default.
                        </p>
                        <p>
                            If your priority is shipping fast, keeping operations simple, and spending engineering time on the product rather than infrastructure, Heroku is the right host — often for years. The premium it charges buys back real time and risk. That is the use case the platform was built for, and for many applications it is the smart, boring, correct choice. We are happy to build an app and deploy it straight to Heroku when that fits.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Where the limitation actually is</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The key point is what Heroku does not do: it does not build your application. A PaaS gives you a great place to run code, but the code — the data model, the business logic, the UI, the integrations — still has to be designed and written. Choosing Heroku answers the hosting question and leaves the building question entirely open. That is the gap QUANT LAB USA fills.
                        </p>
                        <p>
                            On the hosting side itself, Heroku strains at a predictable point. The first squeeze is cost — dynos and managed add-ons carry a premium over raw infrastructure that is well worth it early but grows with scale. The second is control — the dyno model deliberately abstracts away the machine, which is the point, but it also means certain networking, performance-tuning, and configuration needs are simply not exposed. The third is fit for specific compliance, region, or architecture requirements that a more configurable platform handles directly.
                        </p>
                        <p>
                            None of this is Heroku being a bad platform — it is the trade every PaaS makes, convenience for control. The mistake is treating a hosting choice as if it were a build decision. The broader framing lives in our <Link href="/blog/build-vs-buy-software-2026" className="text-sky-400 hover:underline">build vs buy software guide</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Where a custom build comes in</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            A custom build is the application Heroku would host. <Link href="/services/web-applications" className="text-sky-400 hover:underline">Custom web applications</Link> give you a proper PostgreSQL schema, a real service layer in tested TypeScript, and a UI tuned to exactly what the product does — built on a standard, portable stack so the hosting decision stays yours. Deploy it on Heroku for the operational simplicity, and you lose nothing; the app is not married to the platform.
                        </p>
                        <p>
                            When the time comes that Heroku&apos;s cost or constraints no longer fit, moving is an infrastructure task rather than a rewrite, and our <Link href="/services/cloud-infrastructure" className="text-sky-400 hover:underline">cloud infrastructure</Link> work handles the relocation to a major cloud or a leaner platform. If the product is a full platform with billing and tenancy, our <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platform development</Link> path picks up from there. The point throughout is that you own a portable app and choose the host deliberately.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Side-by-side: build versus host</h2>
                    <div className="overflow-x-auto rounded-xl border border-white/5 bg-[#0d1526]/60">
                        <table className="min-w-full text-sm">
                            <thead className="bg-[#0a1120]/80 text-gray-400">
                                <tr>
                                    <th className="px-4 py-3 text-left font-semibold">Dimension</th>
                                    <th className="px-4 py-3 text-left font-semibold text-white">Custom build (QUANT LAB USA)</th>
                                    <th className="px-4 py-3 text-left font-semibold">Heroku</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-gray-300">
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">What it is</td>
                                    <td className="px-4 py-3">Builds the application</td>
                                    <td className="px-4 py-3">Hosts the application</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Writes your code</td>
                                    <td className="px-4 py-3">Yes — that is the work</td>
                                    <td className="px-4 py-3">No — you bring the code</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Pricing model</td>
                                    <td className="px-4 py-3">One-time build + optional retainer</td>
                                    <td className="px-4 py-3">Dynos + add-ons, monthly</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Deploy simplicity</td>
                                    <td className="px-4 py-3">We set up the pipeline</td>
                                    <td className="px-4 py-3">Excellent, git-based</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Infrastructure control</td>
                                    <td className="px-4 py-3">Full — your stack and host</td>
                                    <td className="px-4 py-3">Abstracted by dyno model</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Cost at scale</td>
                                    <td className="px-4 py-3">Host-dependent, your choice</td>
                                    <td className="px-4 py-3">Premium grows with dynos/add-ons</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Portability</td>
                                    <td className="px-4 py-3">Standard stack, host anywhere</td>
                                    <td className="px-4 py-3">Buildpack/add-on conventions</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Operational overhead</td>
                                    <td className="px-4 py-3">Depends on chosen host</td>
                                    <td className="px-4 py-3">Very low, fully managed</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Source code</td>
                                    <td className="px-4 py-3">Owned by client</td>
                                    <td className="px-4 py-3">Yours; runs on their platform</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Can be used together</td>
                                    <td className="px-4 py-3">Yes — we deploy to Heroku</td>
                                    <td className="px-4 py-3">Yes — hosts our builds</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                            <h3 className="text-white font-semibold mb-4">What a custom build gives you</h3>
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
                            <h3 className="text-white font-semibold mb-4">What Heroku is great at</h3>
                            <ul className="space-y-2">
                                {proHeroku.map((item) => (
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Cost: convenience versus raw infrastructure</h2>
                    <div className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Heroku prices for convenience, and that is a feature, not a flaw. The question is when the premium stops being worth it:
                        </p>
                        <ul className="space-y-2 text-sm text-gray-300 mb-4">
                            <li className="flex gap-2"><span className="text-sky-400">Early / small team</span><span className="text-gray-400">→</span><span className="text-white">Heroku premium is well worth the saved ops time</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">Growing footprint</span><span className="text-gray-400">→</span><span className="text-white">dyno + add-on costs start to add up</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">At scale</span><span className="text-gray-400">→</span><span className="text-white">comparable cloud capacity is often cheaper</span></li>
                            <li className="flex gap-2 border-t border-white/5 pt-2 mt-2"><span className="text-emerald-400 font-semibold">Net</span><span className="text-gray-400">=</span><span className="text-white font-semibold">a portable app lets you move when the math flips</span></li>
                        </ul>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Because we build on a standard, portable stack, you are never forced to choose between Heroku&apos;s simplicity today and cheaper infrastructure tomorrow. Start where it is easiest, and relocate when scale changes the calculation — without rewriting the application.
                        </p>
                    </div>
                    <div className="mt-4">
                        <Link
                            href="/pricing"
                            className="inline-flex items-center gap-1 text-sky-400 hover:underline text-sm"
                        >
                            See our pricing for custom build work <ArrowRight className="w-3 h-3" />
                        </Link>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Migration path off Heroku</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Moving off Heroku is an infrastructure exercise, not an app rebuild, when the application is portable. Week one is mapping — we inventory your dynos, add-ons, config vars, and the Heroku Postgres database, then design the target on your chosen cloud or platform. Because the app is standard, almost nothing about the code needs to change.
                        </p>
                        <p>
                            From there it is a normal cutover — the database is migrated with reconciliation reports, add-ons are replaced with managed equivalents or self-hosted services, the deployment pipeline is rebuilt for the new target, and traffic is shifted once the new environment reaches parity. Heroku stays live in parallel during the move so the app never goes dark, and you cut over with a clean rollback path. If you would rather stay on Heroku, that is equally fine — the point is the choice is yours.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <ConsultationCTA label="Get a Hosting and Build Scope" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "Is Heroku an alternative to a custom build?",
                                a: "Not quite — they solve different problems. Heroku is a place to run an application; it does not write the application for you. QUANT LAB USA builds the custom app itself and then deploys it wherever fits best, which can absolutely be Heroku. The real comparison is where Heroku's dyno model is the right host versus where other infrastructure serves the app better.",
                            },
                            {
                                q: "Can you build an app and deploy it on Heroku?",
                                a: "Yes. Heroku is a perfectly good target for many apps, especially early on — its buildpacks, add-ons, and simple git-based deploys make it fast to ship. We build the application, you own the code, and we deploy it to Heroku if its model fits, with the freedom to move later without a rewrite.",
                            },
                            {
                                q: "When should we move off Heroku to other infrastructure?",
                                a: "When dyno and add-on costs at your scale exceed comparable infrastructure, when you need control Heroku's model does not expose, or when specific performance, networking, or compliance requirements push you elsewhere. Because we build standard, portable applications, moving the host is an infrastructure task, not an app rewrite.",
                            },
                            {
                                q: "How does Heroku's cost compare to other hosting at scale?",
                                a: "Heroku prices for convenience — dynos and managed add-ons carry a premium over raw infrastructure, which is well worth it early when engineering time is the scarce resource. As traffic and the add-on footprint grow, comparable capacity on a major cloud or a leaner PaaS is often cheaper, and a portable app lets you make that move when the math says so.",
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
                            href="/services/cloud-infrastructure"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">Cloud Infrastructure</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">The full service page — hosting, deployment, and migration work.</p>
                        </Link>
                        <Link
                            href="/vs/render"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">vs Render</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">The other modern PaaS — same build-versus-host framing.</p>
                        </Link>
                        <Link
                            href="/vs/supabase"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">vs Supabase</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">A backend-as-a-service rather than pure hosting.</p>
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
                        topics={["stack","saas"]}
                        heading="Related engineering reading"
                    />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Need the app built, not just hosted?
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or <Link href="/contact" className="text-sky-400 hover:underline">book a 20-minute scope call</Link>. We will figure out what you actually need built, whether Heroku is the right host for it, and how to keep the app portable so the hosting decision stays yours.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
