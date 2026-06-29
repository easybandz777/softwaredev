import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Scale, Check, ArrowRight } from "lucide-react";
import { comparisonMetadata } from "@/lib/seoMeta";

export const metadata: Metadata = comparisonMetadata({
    competitor: "Firebase",
    title: "QUANT LAB USA vs Firebase: Custom Build vs BaaS 2026",
    description:
        "Firebase is a mature Google BaaS that ships apps fast with realtime sync and easy auth. When relational data, complex queries, and lock-in bite, custom wins. Honest 2026 comparison.",
    slug: "/vs/firebase",
});

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "QUANT LAB USA vs Firebase: Custom Build vs BaaS in 2026",
    description:
        "Honest comparison of Firebase against a fully custom backend. Feature matrix, the document model and realtime strengths, where relational data and complex queries push you to custom, and migration.",
    url: "https://quantlabusa.dev/vs/firebase",
    isPartOf: {
        "@type": "WebSite",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
    },
    about: {
        "@type": "Thing",
        name: "Firebase Alternative",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "SaaS Platform Development", item: "https://quantlabusa.dev/services/saas-platform-development" },
        { "@type": "ListItem", position: 3, name: "vs Firebase", item: "https://quantlabusa.dev/vs/firebase" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "When is a custom backend a better fit than Firebase?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Custom usually wins when your data is genuinely relational, you need complex queries, joins, and reporting the document model makes awkward, your Cloud Functions logic has sprawled, or vendor lock-in to the Google platform is a strategic risk. Below that, Firebase's realtime sync, easy auth, and fast launch are genuinely hard to beat.",
            },
        },
        {
            "@type": "Question",
            name: "Can you migrate our Firebase app to a custom backend?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We export your Firestore or Realtime Database collections, model the data into a proper PostgreSQL schema with real foreign keys and constraints, reimplement Cloud Functions logic as a tested service layer, and move auth to a custom or integrated provider. The denormalized document data is reshaped into clean relational tables as part of the work.",
            },
        },
        {
            "@type": "Question",
            name: "What is the timeline to move off Firebase?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "6 to 14 weeks depending on data shape and how much logic lives in Cloud Functions. Reshaping denormalized document data into a relational schema and rebuilding queries is the bulk of the work; auth and storage migrate more mechanically. A simple app is fast; a query-heavy one takes the upper end.",
            },
        },
        {
            "@type": "Question",
            name: "Do we own everything if we leave Firebase?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Completely. You get the GitHub repository, the PostgreSQL database and schema, the deployment configs, and the documentation. No Firestore read/write metering, no platform-shaped data model, and no dependency on a single cloud vendor as the app and the data grow.",
            },
        },
        {
            "@type": "Question",
            name: "Is Firebase ever the right long-term choice?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Often, yes. For realtime apps, chat, collaborative tools, mobile backends, and fast MVPs, Firebase's sync, auth, and managed scale are excellent and should not be replaced. The hybrid pattern keeps Firebase for realtime and auth and adds a custom relational backend only where the data and queries demand it.",
            },
        },
        {
            "@type": "Question",
            name: "How does the cost compare as the app scales?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Firebase meters reads, writes, storage, bandwidth, and function invocations, which is very economical early but can become unpredictable as traffic and document fan-out grow. A custom build is a larger one-time investment with flatter, more predictable infrastructure cost. The right move is usually to start on Firebase and go custom where data shape or cost predictability justifies it.",
            },
        },
    ],
};

const proCustom = [
    "You own the architecture, the service layer, and the deployment",
    "Real relational schema with joins, constraints, and integrity",
    "Complex queries and reporting straight off the database",
    "Predictable infrastructure cost, not metered reads and writes",
    "No single-vendor lock-in to one cloud platform",
];

const proFirebase = [
    "Genuinely excellent realtime sync and offline support",
    "Easy, mature auth and a fast path to a mobile or web backend",
    "Managed scale with very little operational overhead",
    "Great for chat, collaboration, and fast MVPs",
    "Roadmap funded by Google, not your engineering budget",
];

export default function CustomBuildVsFirebasePage() {
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
                        <li className="text-gray-300">vs Firebase</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Scale className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        QUANT LAB USA vs Firebase
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Firebase is a mature backend-as-a-service from Google. For realtime apps, chat, collaborative tools, and mobile backends, its sync, easy auth, and managed scale get a product live fast with almost no ops overhead. The math turns when your data is genuinely relational, when complex queries fight the document model, and when metered costs and single-vendor lock-in become risks a <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">custom build</Link> would not carry. Here is the honest comparison.
                    </p>
                    <ConsultationCTA label="Scope a Custom Backend" />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Custom build vs Firebase: which should I choose?</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>Choose Firebase when realtime sync, easy auth, and a fast managed launch matter most, and your data fits the document model. Choose a custom build when your data is genuinely relational, you need complex queries and reporting the document model makes awkward, your Cloud Functions have sprawled, or single-vendor lock-in is a risk you cannot accept. The hybrid pattern keeps Firebase for realtime and auth and adds a custom relational backend only where the data demands it.</strong>
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
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Realtime app, chat, collaboration, mobile backend, fast MVP</td><td className="px-4 py-3 font-semibold text-white">Firebase</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Relational data, complex queries, reporting, lock-in risk</td><td className="px-4 py-3 font-semibold text-white">Custom build</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Keep Firebase for realtime/auth, add a relational backend</td><td className="px-4 py-3 font-semibold text-white">Hybrid</td></tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When Firebase is the right call</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Firebase earned its place by making realtime, multi-client apps easy. Firestore and the Realtime Database sync data to every connected client almost instantly, with strong offline support, while Firebase Auth handles sign-in across providers with very little code. Add Cloud Functions, hosting, and storage, and you have a managed backend that gets a mobile or web app live fast and scales without you running servers.
                        </p>
                        <p>
                            If you are building a chat app, a collaborative tool, a live dashboard, a mobile backend, or a fast MVP — anything where realtime sync and easy auth are the core need and the data fits a document shape — Firebase is the right call. The managed scale and minimal ops overhead are genuinely hard to match by building from scratch. That is the use case the platform was built for, and it serves it extremely well.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Where Firebase starts to strain</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            A document BaaS strains at a predictable point, and it usually starts with the data model. Firestore is a NoSQL document store, so the moment your data is genuinely relational — entities with real relationships you need to query across — you are either denormalizing aggressively or fanning out reads, and both get awkward fast. Queries that a relational database answers with a simple join become multiple round trips or duplicated data you have to keep in sync by hand.
                        </p>
                        <p>
                            The second squeeze is querying and reporting — Firestore&apos;s query model is deliberately limited to stay fast, so analytics, ad-hoc reporting, and complex filtering push you toward exporting data elsewhere. The third squeeze is logic and economics: Cloud Functions logic tends to sprawl without a real service structure, and the read/write/invocation metering that is cheap early can become unpredictable as traffic and document fan-out grow. Underneath it all sits single-vendor lock-in to the Google platform.
                        </p>
                        <p>
                            None of this is Firebase being a bad product — for its core use cases it is excellent. It is the cost of running relational, query-heavy workloads on a document store built for realtime sync. Most apps that grow past their first shape meet some version of this line. The broader framing lives in our <Link href="/blog/build-vs-buy-software-2026" className="text-sky-400 hover:underline">build vs buy software guide</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When custom wins</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            A custom build tends to win when your data is genuinely relational, you need complex queries, joins, and reporting, your Cloud Functions logic has outgrown a pile of individual handlers, or single-vendor lock-in is a risk the business cannot carry. <Link href="/services/web-applications" className="text-sky-400 hover:underline">Custom web applications</Link> give you a proper PostgreSQL schema with foreign keys and constraints, a real service layer in tested TypeScript, and queries and reporting straight off the database.
                        </p>
                        <p>
                            The other common driver is cost predictability and integration. A custom backend gives you flat, predictable infrastructure cost instead of metered reads and writes, plus a clean API for the rest of your systems. If the product is a full platform with billing, tenancy, and complex workflows, our <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platform development</Link> path picks up from there. And if realtime is still core, we can keep Firebase for sync while the relational data and logic live in the custom backend.
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
                                    <th className="px-4 py-3 text-left font-semibold">Firebase</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-gray-300">
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Pricing model</td>
                                    <td className="px-4 py-3">One-time build + infra + optional retainer</td>
                                    <td className="px-4 py-3">Metered reads, writes, storage, invocations</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Cost predictability</td>
                                    <td className="px-4 py-3">Flat and predictable</td>
                                    <td className="px-4 py-3">Scales with usage, can spike</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Data model</td>
                                    <td className="px-4 py-3">Relational, real foreign keys</td>
                                    <td className="px-4 py-3">NoSQL document store</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Complex queries / joins</td>
                                    <td className="px-4 py-3">Native SQL</td>
                                    <td className="px-4 py-3">Limited, often denormalized</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Reporting / analytics</td>
                                    <td className="px-4 py-3">Direct SQL, any BI tool</td>
                                    <td className="px-4 py-3">Export to BigQuery / external</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Realtime sync</td>
                                    <td className="px-4 py-3">Custom channels as needed</td>
                                    <td className="px-4 py-3">Built-in, excellent</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Auth</td>
                                    <td className="px-4 py-3">Custom or integrated provider</td>
                                    <td className="px-4 py-3">Built-in, mature</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Business logic</td>
                                    <td className="px-4 py-3">Tested service layer</td>
                                    <td className="px-4 py-3">Cloud Functions</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Offline support</td>
                                    <td className="px-4 py-3">Built as needed</td>
                                    <td className="px-4 py-3">Built-in, strong</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Source code</td>
                                    <td className="px-4 py-3">Owned by client</td>
                                    <td className="px-4 py-3">Proprietary platform</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Vendor lock-in</td>
                                    <td className="px-4 py-3">None — standard stack</td>
                                    <td className="px-4 py-3">Single cloud vendor</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Best fit</td>
                                    <td className="px-4 py-3">Relational data, queries, control</td>
                                    <td className="px-4 py-3">Realtime, sync, fast MVP</td>
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
                            <h3 className="text-white font-semibold mb-4">Where Firebase wins</h3>
                            <ul className="space-y-2">
                                {proFirebase.map((item) => (
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
                            With Firebase the comparison is about stage and data shape as much as dollars. Firebase meters reads, writes, storage, bandwidth, and function invocations — very economical at launch, but as traffic grows and documents fan out, the bill can become hard to predict. A custom build is a larger one-time investment with flatter, more predictable infrastructure cost once it is live.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-300 mb-4">
                            <li className="flex gap-2"><span className="text-sky-400">Launch stage</span><span className="text-gray-400">→</span><span className="text-white">Firebase is almost always the right value</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">Realtime core</span><span className="text-gray-400">→</span><span className="text-white">keep Firebase for sync, add a relational backend</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">Relational / query-heavy</span><span className="text-gray-400">→</span><span className="text-white">custom Postgres backend you own</span></li>
                            <li className="flex gap-2 border-t border-white/5 pt-2 mt-2"><span className="text-emerald-400 font-semibold">Net</span><span className="text-gray-400">=</span><span className="text-white font-semibold">start on Firebase, go custom where data shape justifies it</span></li>
                        </ul>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            The decision is less about a fixed price and more about whether your data and queries fit the document model, and whether metered cost stays predictable at your scale. When either answer turns, a custom backend pays for itself in predictability and the queries you stop fighting.
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Migration path off Firebase</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The cutover follows a predictable pattern, and the data-shape work is the heart of it. Week one is modeling — we export your Firestore or Realtime Database collections and design a clean PostgreSQL schema with real foreign keys, turning denormalized document data back into proper relational tables. We decide what was duplicated for read performance and how it becomes a single source of truth.
                        </p>
                        <p>
                            From there it is a normal build — Cloud Functions logic rewritten as a tested service layer, queries rebuilt as SQL, auth moved to a custom or integrated provider, and storage migrated. Firebase stays live in parallel during the build so the app never goes dark, and if realtime sync is core we can keep that piece while the relational data moves. You cut each surface over as it reaches parity, so there is never a moment where the data is only in one place.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <ConsultationCTA label="Get a Firebase Migration Scope" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "When is a custom backend a better fit than Firebase?",
                                a: "Custom usually wins when your data is genuinely relational, you need complex queries, joins, and reporting the document model makes awkward, your Cloud Functions logic has sprawled, or vendor lock-in to the Google platform is a strategic risk. Below that, Firebase's realtime sync, easy auth, and fast launch are genuinely hard to beat.",
                            },
                            {
                                q: "Can you migrate our Firebase app to a custom backend?",
                                a: "Yes. We export your Firestore or Realtime Database collections, model the data into a proper PostgreSQL schema with real foreign keys and constraints, reimplement Cloud Functions logic as a tested service layer, and move auth to a custom or integrated provider. The denormalized document data is reshaped into clean relational tables as part of the work.",
                            },
                            {
                                q: "Is Firebase ever the right long-term choice?",
                                a: "Often, yes. For realtime apps, chat, collaborative tools, mobile backends, and fast MVPs, Firebase's sync, auth, and managed scale are excellent and should not be replaced. The hybrid pattern keeps Firebase for realtime and auth and adds a custom relational backend only where the data and queries demand it.",
                            },
                            {
                                q: "How does the cost compare as the app scales?",
                                a: "Firebase meters reads, writes, storage, bandwidth, and function invocations, which is very economical early but can become unpredictable as traffic and document fan-out grow. A custom build is a larger one-time investment with flatter, more predictable infrastructure cost. The right move is usually to start on Firebase and go custom where data shape or cost predictability justifies it.",
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
                            href="/vs/supabase"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">vs Supabase</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">The Postgres-native BaaS — relational core versus the document model.</p>
                        </Link>
                        <Link
                            href="/vs/heroku"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">vs Heroku</h3>
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
                            Outgrowing the document model on Firebase?
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or <Link href="/contact" className="text-sky-400 hover:underline">book a 20-minute scope call</Link>. We will look at your data shape, your query needs, and your bill and tell you straight whether Firebase still fits, a custom relational backend is due, or a hybrid is the smart move.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
