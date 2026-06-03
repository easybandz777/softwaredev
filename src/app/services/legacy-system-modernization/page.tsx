import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { RefreshCw, Check, ArrowRight, MapPin } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Legacy System Modernization & Replatforming | QUANT LAB USA",
    description:
        "Legacy system modernization without the big-bang rewrite. Strangler-fig migrations, replatforming, and de-risked cutovers. Founder-led, fixed-quote, USA. Free scope call.",
    slug: "services/legacy-system-modernization",
    image: "/og-services.png",
    type: "article",
});

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Legacy System Modernization",
    name: "Legacy System Modernization and Replatforming",
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Founder-led legacy system modernization for companies whose business runs on software nobody dares to touch. We replatform aging applications with the strangler-fig pattern — wrapping the old system, moving capability by capability, and de-risking every cutover — instead of betting the company on a big-bang rewrite. You own the new codebase and the migration plan.",
    url: "https://quantlabusa.dev/services/legacy-system-modernization",
    offers: {
        "@type": "Offer",
        priceRange: "$20,000-$150,000",
        priceCurrency: "USD",
        description: "Fixed-fee scope per phase",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://quantlabusa.dev/services" },
        { "@type": "ListItem", position: 3, name: "Legacy System Modernization", item: "https://quantlabusa.dev/services/legacy-system-modernization" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is the strangler-fig pattern and why do you prefer it to a rewrite?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The strangler-fig pattern wraps the old system and routes traffic through a thin layer in front of it. You move one capability at a time into the new system behind that layer, while everything not yet migrated keeps running on the old code. The legacy system shrinks until it can be retired. We prefer it because a big-bang rewrite asks you to run two systems in parallel for a year and then flip a switch and pray — the strangler-fig delivers value continuously and is reversible at every step.",
            },
        },
        {
            "@type": "Question",
            name: "Can you modernize without freezing all new feature work?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, and that is the whole point of an incremental approach. Because we migrate capability by capability behind a routing layer, the business keeps shipping. New features get built in the modern system, while the legacy code keeps serving what has not moved yet. There is no multi-month freeze where the company stands still.",
            },
        },
        {
            "@type": "Question",
            name: "Our old system has no documentation and the original developers are gone — can you still help?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "That is the normal starting point, not a blocker. We begin with a discovery phase that reverse-engineers the behavior from the running system, the database, and whatever code exists. We document the real behavior — including the quirks people depend on — before we move anything, so nothing silently breaks during the migration.",
            },
        },
        {
            "@type": "Question",
            name: "How do you avoid losing data or breaking integrations during the move?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Every cutover runs through a parity phase first: the new path runs alongside the old one, we compare outputs on real traffic, and we only switch when they match. Data is migrated with reconciliation checks, and integrations are re-pointed one at a time with rollback ready. De-risking the cutover is the work, not an afterthought.",
            },
        },
        {
            "@type": "Question",
            name: "Should we modernize at all, or keep maintaining the old system?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Sometimes the honest answer is to keep maintaining it, and we will say so. Modernization is worth it when the legacy system blocks revenue, carries real security or compliance risk, depends on technology you can no longer hire for, or costs more to keep alive than to replace. If none of that is true, we tell you to leave it alone.",
            },
        },
        {
            "@type": "Question",
            name: "How long does legacy modernization take?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "It is phased rather than a single timeline. Discovery and the first migrated capability typically land in 6 to 10 weeks, and each subsequent capability is its own scoped phase. Most full modernizations run 6 to 18 months of part-time, incremental work — but value ships continuously, not at the end.",
            },
        },
    ],
};

export default function LegacySystemModernizationPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
                        <li className="text-gray-300">Legacy System Modernization</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-amber-500 to-orange-400 mb-6">
                        <RefreshCw className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Legacy System Modernization Without the Big-Bang Rewrite
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Replatform the software your business runs on, one capability at a time, with the strangler-fig pattern. Value ships continuously, every cutover is reversible, and the company never has to stand still.
                    </p>
                    <ConsultationCTA label="Scope a Modernization" service="Legacy System Modernization" source="services-legacy-modernization" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why rewrites fail and strangler-fig works</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Most legacy systems do not get replaced because everyone is afraid to touch them. The application works — mostly — but it is built on a framework that is end-of-life, the original developers left years ago, and there is no documentation. The standard pitch is a full rewrite: build a shiny new system in parallel for a year, then flip a switch one weekend. That weekend is where companies lose customers, data, and sometimes the business, because all the risk is concentrated in a single moment with no way back.
                        </p>
                        <p>
                            The strangler-fig pattern inverts that. We put a thin routing layer in front of the old system and migrate one capability at a time behind it. Each piece ships and earns its keep before we start the next. The legacy system gradually shrinks until what remains can be safely switched off. There is no betting-the-company weekend — just a steady, reversible march where you always have a working system and a way back.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we do</h2>
                    <ul className="space-y-3">
                        {[
                            "Reverse-engineer and document the real behavior of an undocumented legacy system before touching it",
                            "Stand up a strangler-fig routing layer so old and new run side by side during the migration",
                            "Replatform capability by capability onto a modern Next.js, TypeScript, and PostgreSQL stack",
                            "Migrate data with reconciliation checks so nothing is silently lost or transformed wrong",
                            "Re-point integrations one at a time, each with a tested rollback path",
                            "Run parity testing — new path against old on real traffic — before every cutover",
                            "Untangle a monolith into clear modules, or consolidate scattered systems into one",
                            "Retire the legacy system safely once the last capability has moved off it",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Our methodology</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Discovery first. We map what the legacy system actually does — not what the documentation claims — by studying the running application, the database, and the integrations. You get a one-page modernization plan: the capabilities, the order we would migrate them in, the risks, and a phased estimate. Discovery is billed separately at $2,500 so you can decide before committing, and the plan is useful even if another team executes it.
                        </p>
                        <p>
                            From there we work in scoped phases, each delivering one migrated capability behind the routing layer, fully tested for parity, with the old path still available as a fallback. You own the new codebase, the migration plan, and the runbooks at every step. If at any point the honest answer is to stop, the work done so far stands on its own.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Process &amp; timeline</h2>
                    <ul className="space-y-3">
                        {[
                            "Phase 0: Discovery — behavior mapping, risk register, capability inventory, phased migration plan",
                            "Phase 1: Foundation — routing layer in front of the legacy system, modern stack and CI in place",
                            "Phase 2-N: Migration — one capability per phase, parity-tested, with the old path as fallback",
                            "Cutover: Reconciled data migration and integration re-pointing, switched only when outputs match",
                            "Decommission: Retire the legacy system once nothing depends on it; documented handoff",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech &amp; tools</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            "Next.js 16 + App Router",
                            "TypeScript",
                            "PostgreSQL",
                            "Strangler-fig routing",
                            "Change-data-capture",
                            "Docker + Terraform",
                            "Parity test harness",
                            "Feature flags",
                            "CI/CD pipelines",
                        ].map((tool) => (
                            <div key={tool} className="rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 text-sm text-gray-300">
                                {tool}
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                        Modernization usually pairs with <Link href="/services/cloud-migration" className="text-amber-400 hover:underline">cloud migration</Link> and a fresh <Link href="/services/devops-engineering" className="text-amber-400 hover:underline">DevOps</Link> foundation. Background reading: <Link href="/glossary/what-is-technical-debt" className="text-amber-400 hover:underline">what is technical debt</Link>. You own the new codebase, hosted on your cloud accounts.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we de-risk it</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            De-risking is the entire job. We never move a capability without a parity phase where the new implementation runs against real traffic and its output is compared, row by row, to the legacy system. Feature flags let us route a small percentage of traffic to the new path first, watch it, and widen the rollout only when it behaves. If anything looks wrong, flipping the flag back is instant. Nothing about a cutover should require courage.
                        </p>
                        <p>
                            We also document the quirks. Legacy systems are full of behaviors that look like bugs but turn out to be load-bearing — a rounding rule a customer depends on, an edge case in an integration. We catalog those during discovery and preserve them deliberately, rather than discovering them in production after the old system is gone.
                        </p>
                        <p>
                            Founder-led from discovery through decommission, delivered remotely to clients across the United States from our base in Macon, Georgia.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pricing</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Fixed-fee per phase. Typical ranges:
                        </p>
                        <ul className="space-y-2 list-disc list-inside">
                            <li>Discovery with documented behavior and a phased migration plan: $2,500 flat</li>
                            <li>Strangler-fig foundation plus the first migrated capability: $20k – $45k</li>
                            <li>Each subsequent capability phase, parity-tested with rollback: $15k – $40k</li>
                            <li>Monolith decomposition or multi-system consolidation program: $60k – $150k phased</li>
                            <li>Data migration with reconciliation and integration re-pointing: $18k – $50k</li>
                        </ul>
                        <p>
                            Phased so you fund one capability at a time and can pause between phases. Optional retainer for ongoing migration work.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What you get</h2>
                    <ul className="space-y-3">
                        {[
                            "A documented map of what your legacy system actually does",
                            "A phased migration plan you can fund one capability at a time",
                            "The new codebase in your GitHub repository, no lock-in",
                            "A reversible cutover for every capability, with the old path as fallback",
                            "Reconciled data migration with verification checks",
                            "Re-pointed integrations, each tested before switchover",
                            "Runbooks and documentation so your team owns the result",
                            "Optional retainer for continued modernization phases",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "What is the strangler-fig pattern and why do you prefer it to a rewrite?",
                                a: "The strangler-fig pattern wraps the old system and routes traffic through a thin layer in front of it. You move one capability at a time into the new system behind that layer, while everything not yet migrated keeps running on the old code. The legacy system shrinks until it can be retired. We prefer it because a big-bang rewrite asks you to run two systems in parallel for a year and then flip a switch and pray — the strangler-fig delivers value continuously and is reversible at every step.",
                            },
                            {
                                q: "Can you modernize without freezing all new feature work?",
                                a: "Yes, and that is the whole point of an incremental approach. Because we migrate capability by capability behind a routing layer, the business keeps shipping. New features get built in the modern system, while the legacy code keeps serving what has not moved yet. There is no multi-month freeze where the company stands still.",
                            },
                            {
                                q: "Our old system has no documentation and the original developers are gone — can you still help?",
                                a: "That is the normal starting point, not a blocker. We begin with a discovery phase that reverse-engineers the behavior from the running system, the database, and whatever code exists. We document the real behavior — including the quirks people depend on — before we move anything, so nothing silently breaks during the migration.",
                            },
                            {
                                q: "How do you avoid losing data or breaking integrations during the move?",
                                a: "Every cutover runs through a parity phase first: the new path runs alongside the old one, we compare outputs on real traffic, and we only switch when they match. Data is migrated with reconciliation checks, and integrations are re-pointed one at a time with rollback ready. De-risking the cutover is the work, not an afterthought.",
                            },
                            {
                                q: "Should we modernize at all, or keep maintaining the old system?",
                                a: "Sometimes the honest answer is to keep maintaining it, and we will say so. Modernization is worth it when the legacy system blocks revenue, carries real security or compliance risk, depends on technology you can no longer hire for, or costs more to keep alive than to replace. If none of that is true, we tell you to leave it alone.",
                            },
                            {
                                q: "How long does legacy modernization take?",
                                a: "It is phased rather than a single timeline. Discovery and the first migrated capability typically land in 6 to 10 weeks, and each subsequent capability is its own scoped phase. Most full modernizations run 6 to 18 months of part-time, incremental work — but value ships continuously, not at the end.",
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
                    <RelatedPosts
                        topics={["build-vs-buy", "stack", "saas"]}
                        heading="Modernization & strategy reading"
                        pinned={["build-vs-buy-software-2026", "2026-state-of-custom-software-development"]}
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { slug: "cloud-migration", title: "Cloud Migration", desc: "Move the modernized system to scalable, cost-efficient cloud infrastructure." },
                            { slug: "custom-business-software", title: "Custom Business Software", desc: "The modern application that replaces the legacy system." },
                            { slug: "technical-due-diligence", title: "Technical Due Diligence", desc: "An independent read on whether a system is worth modernizing." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-amber-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-6 leading-relaxed">
                        Modernizing systems in <Link href="/industries/manufacturing" className="text-amber-400 hover:underline">manufacturing</Link>, <Link href="/industries/healthcare" className="text-amber-400 hover:underline">healthcare</Link>, and <Link href="/industries/fintech" className="text-amber-400 hover:underline">fintech</Link>. To scope a migration, <Link href="/contact" className="text-amber-400 hover:underline">contact us</Link> directly.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <MapPin className="w-6 h-6 text-amber-400" />
                        <h2 className="text-2xl md:text-3xl font-bold text-white">Legacy Modernization — Where We Serve</h2>
                    </div>
                    <p className="text-gray-400 leading-relaxed mb-6 max-w-3xl">
                        Georgia-based engineering team serving clients nationwide. Modernization runs remotely with scoped access to your systems; in-person discovery and planning sessions are available in Atlanta and the Southeast.
                    </p>
                    <p className="text-gray-400 leading-relaxed max-w-3xl">
                        Founder-led from discovery through decommission. Browse the full <Link href="/services" className="text-amber-400 hover:underline">services lineup</Link> or read about our <Link href="/services/api-development" className="text-amber-400 hover:underline">API development</Link> work that often glues old and new systems together during a migration.
                    </p>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Modernize without betting the company.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz directly at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or book a 20-minute scope call. We will map your legacy system and lay out a migration plan you can fund one phase at a time.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" service="Legacy System Modernization" source="services-legacy-modernization" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
