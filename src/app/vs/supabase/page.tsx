import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Scale, Check, ArrowRight } from "lucide-react";
import { comparisonMetadata } from "@/lib/seoMeta";

export const metadata: Metadata = comparisonMetadata({
    competitor: "Supabase",
    title: "QUANT LAB USA vs Supabase: Custom Build vs BaaS 2026",
    description:
        "Supabase is an excellent open-source Postgres backend that gets products to launch fast. When complex logic, scale, and full ownership matter, a custom build wins. Honest 2026 comparison.",
    slug: "/vs/supabase",
});

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "QUANT LAB USA vs Supabase: Custom Build vs BaaS in 2026",
    description:
        "Honest comparison of Supabase against a fully custom backend. Feature matrix, where the auto-generated API and RLS model fit, where complex logic and scale push you to custom, and the migration path.",
    url: "https://quantlabusa.dev/vs/supabase",
    isPartOf: {
        "@type": "WebSite",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
    },
    about: {
        "@type": "Thing",
        name: "Supabase Alternative",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "SaaS Platform Development", item: "https://quantlabusa.dev/services/saas-platform-development" },
        { "@type": "ListItem", position: 3, name: "vs Supabase", item: "https://quantlabusa.dev/vs/supabase" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "When is a custom backend a better fit than Supabase?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Custom usually wins when your business logic has outgrown row-level security and edge functions, you need a real service layer with complex transactions and background jobs, you want full control of architecture and deployment, or compliance requires it. Below that, Supabase is an excellent, fast, Postgres-native foundation and often the right tool for the whole project.",
            },
        },
        {
            "@type": "Question",
            name: "Can you migrate our Supabase project to a custom backend?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, and it is one of the cleaner migrations because Supabase is just PostgreSQL. We can keep your existing database, take ownership of the schema, and move logic out of RLS policies and edge functions into a real tested service layer at the pace you choose. Auth and storage can be lifted incrementally without a big-bang cutover.",
            },
        },
        {
            "@type": "Question",
            name: "What is the timeline to move off Supabase as a backend?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "4 to 12 weeks depending on how much logic lives in policies and functions. Because the database is already Postgres, the data itself does not move — the work is rebuilding the API, auth flows, and jobs as a maintainable service. A thin project is fast; a logic-heavy one takes the upper end.",
            },
        },
        {
            "@type": "Question",
            name: "Do we own everything if we leave Supabase?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Completely. You get the GitHub repository, the PostgreSQL database and schema, the deployment configs, and the documentation. Because Supabase is open source and Postgres-native, there is unusually little lock-in — you are never trapped, which is one of the platform's genuine strengths.",
            },
        },
        {
            "@type": "Question",
            name: "Is Supabase ever the right long-term choice?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Very often, yes. For MVPs, internal tools, and many production SaaS apps, Supabase's Postgres core, auth, storage, and instant API are an excellent foundation that we are happy to build on rather than replace. The hybrid pattern keeps Supabase for what it does well and adds a custom service layer only where the logic demands it.",
            },
        },
        {
            "@type": "Question",
            name: "How does the cost compare as the product scales?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Supabase's managed tiers scale with usage — compute, storage, bandwidth, and add-ons — which is very economical early and grows with the product. A custom build is a larger one-time investment with flatter ongoing infrastructure cost. The right move is usually to start on Supabase and introduce custom services only where logic or scale justifies it.",
            },
        },
    ],
};

const proCustom = [
    "You own the architecture, the service layer, and the deployment",
    "Complex logic in tested code, not RLS policies and functions",
    "Real background jobs, queues, and multi-step transactions",
    "Full control of scaling, caching, and infrastructure choices",
    "Tuned exactly to the product, with no platform-shaped seams",
];

const proSupabase = [
    "Genuinely fast path to a production-grade Postgres backend",
    "Auth, storage, realtime, and instant API out of the box",
    "Open source and Postgres-native — unusually low lock-in",
    "Excellent for MVPs, internal tools, and many production apps",
    "Roadmap funded by Supabase R&D, not your engineering budget",
];

export default function CustomBuildVsSupabasePage() {
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
                        <li><Link href="/services/saas-platform-development" className="hover:text-sky-400 transition-colors">SaaS Platform Development</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">vs Supabase</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Scale className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        QUANT LAB USA vs Supabase
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Supabase is an excellent backend-as-a-service. Built on real PostgreSQL, with auth, storage, realtime, and an instant API, it gets a product to launch fast — and because it is open source and Postgres-native, it carries unusually little lock-in. The question is rarely whether Supabase is good. It is when your logic, scale, and need for a real service layer outgrow what a BaaS is meant to carry, and a <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">custom build</Link> takes over. Here is the honest comparison.
                    </p>
                    <ConsultationCTA label="Scope a Custom Backend" />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Custom build vs Supabase: which should I choose?</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>Choose Supabase when you want to launch fast on a real Postgres foundation, your logic fits comfortably in row-level security and edge functions, and a managed backend lets you focus on the product. Choose a custom build when your business logic has outgrown policies and functions, you need a real service layer with complex transactions and jobs, or you want full architectural control. The hybrid pattern — which we genuinely recommend — keeps Supabase for what it does well and adds custom services only where the logic demands.</strong>
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
                                <tr className="border-b border-white/5"><td className="px-4 py-3">MVP or product where logic fits RLS and edge functions</td><td className="px-4 py-3 font-semibold text-white">Supabase</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Complex logic, jobs, transactions, full architectural control</td><td className="px-4 py-3 font-semibold text-white">Custom build</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Keep Supabase for auth/storage, add a custom service layer</td><td className="px-4 py-3 font-semibold text-white">Hybrid</td></tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When Supabase is the right call</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Supabase earned its reputation by building a backend on the right foundation. It is real PostgreSQL — not a proprietary datastore — wrapped with auth, storage, realtime subscriptions, edge functions, and an instant REST and GraphQL-style API generated from your schema. For getting a product in front of users quickly, that combination is genuinely excellent, and the Postgres core means you are building on a database that scales with you rather than a black box.
                        </p>
                        <p>
                            If you are launching an MVP, an internal tool, or a SaaS app whose logic fits comfortably in row-level security policies and a handful of edge functions, Supabase is the right call — and often the right call for the entire life of the product. Its open-source nature and Postgres foundation mean that even when you do outgrow part of it, you are never trapped. We frequently build on Supabase rather than replacing it, which is the highest compliment you can pay a backend platform.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Where Supabase starts to strain</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            A BaaS strains at a predictable point, and it is about logic, not the database. The first squeeze is business rules — row-level security is powerful for access control, but when complex authorization and workflow logic all live in SQL policies, it becomes hard to read, test, and reason about. Edge functions cover a lot, but a serious application eventually wants a real service layer with structure, not a growing pile of individual functions.
                        </p>
                        <p>
                            The second squeeze is orchestration — multi-step transactions, reliable background jobs, queues, scheduled work, and integrations with external systems are things a dedicated backend does cleanly and a BaaS makes you assemble. The third squeeze is control: as the product grows, you want deliberate decisions about caching, scaling, and architecture rather than working within the shape the platform assumes.
                        </p>
                        <p>
                            None of this is Supabase being a bad product — it is genuinely one of the best in its category. It is the difference between a backend-as-a-service and a backend built for one application. Most products that succeed eventually meet some version of this line. The broader framing lives in our <Link href="/blog/build-vs-buy-software-2026" className="text-sky-400 hover:underline">build vs buy software guide</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When custom wins</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            A custom build tends to win when your business logic has outgrown RLS and edge functions, you need real background jobs and multi-step transactions, or you want deliberate control over architecture, scaling, and deployment. <Link href="/services/web-applications" className="text-sky-400 hover:underline">Custom web applications</Link> give you a proper service layer in tested TypeScript, logic that is easy to read and reason about, and an architecture tuned to exactly what the product does.
                        </p>
                        <p>
                            The good news is the foundation usually stays. Because Supabase is just PostgreSQL, the database often comes along unchanged — we take ownership of the schema and move logic into a real service layer at the pace that makes sense. If the product is a full platform with billing, tenancy, and complex workflows, our <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platform development</Link> path picks up from there, and our <Link href="/services/stripe-integration" className="text-sky-400 hover:underline">Stripe integration</Link> work handles the payments side.
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
                                    <th className="px-4 py-3 text-left font-semibold text-white">Custom build (QUANT LAB USA)</th>
                                    <th className="px-4 py-3 text-left font-semibold">Supabase</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-gray-300">
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Pricing model</td>
                                    <td className="px-4 py-3">One-time build + infra + optional retainer</td>
                                    <td className="px-4 py-3">Usage-based managed tiers</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Time to first launch</td>
                                    <td className="px-4 py-3">Weeks</td>
                                    <td className="px-4 py-3">Days</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Database</td>
                                    <td className="px-4 py-3">PostgreSQL, fully owned</td>
                                    <td className="px-4 py-3">PostgreSQL, managed</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Business logic</td>
                                    <td className="px-4 py-3">Tested service layer</td>
                                    <td className="px-4 py-3">RLS policies + edge functions</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">API</td>
                                    <td className="px-4 py-3">Hand-shaped to the domain</td>
                                    <td className="px-4 py-3">Auto-generated from schema</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Auth</td>
                                    <td className="px-4 py-3">Custom or integrated provider</td>
                                    <td className="px-4 py-3">Built-in, excellent</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Background jobs / queues</td>
                                    <td className="px-4 py-3">First-class, reliable</td>
                                    <td className="px-4 py-3">Assembled from functions + cron</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Realtime</td>
                                    <td className="px-4 py-3">Custom channels as needed</td>
                                    <td className="px-4 py-3">Built-in, excellent</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Scaling control</td>
                                    <td className="px-4 py-3">Deliberate, your choices</td>
                                    <td className="px-4 py-3">Managed by platform tiers</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Source code</td>
                                    <td className="px-4 py-3">Owned by client</td>
                                    <td className="px-4 py-3">Open source, self-hostable</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Lock-in</td>
                                    <td className="px-4 py-3">None — standard stack</td>
                                    <td className="px-4 py-3">Low — Postgres-native, OSS</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Best stage</td>
                                    <td className="px-4 py-3">Scale, complex logic, full control</td>
                                    <td className="px-4 py-3">Launch through early scale</td>
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
                            <h3 className="text-white font-semibold mb-4">Where Supabase wins</h3>
                            <ul className="space-y-2">
                                {proSupabase.map((item) => (
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Cost and stage, not just price</h2>
                    <div className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            With Supabase the comparison is about stage as much as dollars. Supabase&apos;s managed tiers scale with usage — compute, storage, bandwidth, and add-ons — which is very economical at launch and grows with the product. A custom build is a larger one-time investment with flatter ongoing infrastructure cost once it is live.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-300 mb-4">
                            <li className="flex gap-2"><span className="text-sky-400">Launch stage</span><span className="text-gray-400">→</span><span className="text-white">Supabase is almost always the right value</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">Early scale</span><span className="text-gray-400">→</span><span className="text-white">Supabase + a thin custom service layer</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">Complex/at scale</span><span className="text-gray-400">→</span><span className="text-white">custom service layer on the same Postgres</span></li>
                            <li className="flex gap-2 border-t border-white/5 pt-2 mt-2"><span className="text-emerald-400 font-semibold">Net</span><span className="text-gray-400">=</span><span className="text-white font-semibold">start on Supabase, go custom where logic justifies it</span></li>
                        </ul>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Because the database is Postgres either way, this is not a costly all-or-nothing bet. You are not choosing a platform you will have to escape — you are deciding how much of the backend should be a managed service versus owned code, and that line can move gradually as the product grows.
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Migration path off Supabase</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            This is one of the cleaner migrations precisely because Supabase is open source and Postgres-native. The database itself usually does not move — we take ownership of the existing schema, then incrementally lift logic out of row-level security policies and edge functions into a real, tested service layer. There is no proprietary export to wrestle with and no data trapped in a closed format.
                        </p>
                        <p>
                            From there it is a normal build — auth flows reimplemented or wired to your chosen provider, background jobs and transactions moved into proper services, and the API hand-shaped to the domain rather than auto-generated. Because everything sits on the same Postgres, the old and new paths can run side by side, and you cut each surface over as it reaches parity. There is never a moment where the data is only in one place or the product goes dark.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <ConsultationCTA label="Get a Supabase Migration Scope" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "When is a custom backend a better fit than Supabase?",
                                a: "Custom usually wins when your business logic has outgrown row-level security and edge functions, you need a real service layer with complex transactions and background jobs, you want full control of architecture and deployment, or compliance requires it. Below that, Supabase is an excellent, fast, Postgres-native foundation and often the right tool for the whole project.",
                            },
                            {
                                q: "Can you migrate our Supabase project to a custom backend?",
                                a: "Yes, and it is one of the cleaner migrations because Supabase is just PostgreSQL. We can keep your existing database, take ownership of the schema, and move logic out of RLS policies and edge functions into a real tested service layer at the pace you choose. Auth and storage can be lifted incrementally without a big-bang cutover.",
                            },
                            {
                                q: "Is Supabase ever the right long-term choice?",
                                a: "Very often, yes. For MVPs, internal tools, and many production SaaS apps, Supabase's Postgres core, auth, storage, and instant API are an excellent foundation that we are happy to build on rather than replace. The hybrid pattern keeps Supabase for what it does well and adds a custom service layer only where the logic demands it.",
                            },
                            {
                                q: "How does the cost compare as the product scales?",
                                a: "Supabase's managed tiers scale with usage — compute, storage, bandwidth, and add-ons — which is very economical early and grows with the product. A custom build is a larger one-time investment with flatter ongoing infrastructure cost. The right move is usually to start on Supabase and introduce custom services only where logic or scale justifies it.",
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
                            href="/services/saas-platform-development"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">SaaS Platform Development</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">The full service page — what we build, methodology, pricing.</p>
                        </Link>
                        <Link
                            href="/vs/firebase"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">vs Firebase</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">The other major BaaS — document model versus Postgres and custom.</p>
                        </Link>
                        <Link
                            href="/vs/render"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">vs Render</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">Where the app gets hosted, paired with who builds and owns it.</p>
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
                        topics={["saas","stack"]}
                        heading="Related engineering reading"
                    />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Building on Supabase and feeling the seams?
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or <Link href="/contact" className="text-sky-400 hover:underline">book a 20-minute scope call</Link>. We will look at how much logic lives in your policies and functions and tell you straight whether Supabase still fits, a custom service layer is due, or a hybrid is the smart move.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
