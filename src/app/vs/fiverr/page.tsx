import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Scale, Check, ArrowRight } from "lucide-react";
import { comparisonMetadata } from "@/lib/seoMeta";

export const metadata: Metadata = comparisonMetadata({
    competitor: "Fiverr",
    title: "QUANT LAB USA vs Fiverr: Founder-Led Firm vs Gig Marketplace (2026)",
    description:
        "Fiverr is great for cheap, well-scoped one-off gigs. For software you depend on, a founder-led firm wins on accountability, continuity, and ownership. Honest 2026 comparison.",
    slug: "/vs/fiverr",
});

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "QUANT LAB USA vs Fiverr: Founder-Led Firm vs Gig Marketplace in 2026",
    description:
        "Honest comparison of hiring on Fiverr versus engaging a founder-led software firm. Accountability, continuity, code ownership, and where each model actually fits.",
    url: "https://quantlabusa.dev/vs/fiverr",
    isPartOf: {
        "@type": "WebSite",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
    },
    about: {
        "@type": "Thing",
        name: "Fiverr Alternative",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://quantlabusa.dev/services" },
        { "@type": "ListItem", position: 3, name: "vs Fiverr", item: "https://quantlabusa.dev/vs/fiverr" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "When is a founder-led firm a better fit than Fiverr?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A firm wins when the software is something your business depends on, the scope is bigger than a single well-defined task, you need one accountable team across discovery, build, and support, or security and data handling matter. Fiverr is genuinely better for cheap, tightly-scoped one-off work like a logo, a landing page tweak, or a script.",
            },
        },
        {
            "@type": "Question",
            name: "Can you take over a project that started on Fiverr?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, and it is common. We audit what was delivered, document the gaps, bring the code up to a maintainable standard or rebuild the parts that are not salvageable, and put it under proper version control and CI. You get a clear assessment up front of what is worth keeping and what is not.",
            },
        },
        {
            "@type": "Question",
            name: "Why is a firm more expensive than a Fiverr gig?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Because you are buying different things. A Fiverr gig is a fixed task at a fixed price from a seller you may never work with again. A firm engagement includes discovery, architecture, testing, documentation, accountability, and a relationship that persists, so the work holds up and someone owns the outcome. For throwaway tasks that premium is not worth it; for software you run on, it is.",
            },
        },
        {
            "@type": "Question",
            name: "Do we own the code either way?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "With us, completely — you get the GitHub repository, the schema, the deployment configs, and the documentation. On Fiverr it depends entirely on the individual seller and the terms of that gig, and code quality and licensing vary widely, so ownership and maintainability are something you have to verify per order.",
            },
        },
        {
            "@type": "Question",
            name: "Is Fiverr ever the right choice for software work?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, for the right shape of work. A small, well-specified, low-risk task with a clear deliverable is exactly what the marketplace is good at, and the price is hard to beat. The trouble starts when a throwaway-priced gig quietly becomes load-bearing software with no continuity, tests, or owner behind it.",
            },
        },
    ],
};

const proCustom = [
    "One accountable team and a named founder across the whole engagement",
    "Discovery and architecture before code, so the build fits the problem",
    "You own the repo, the schema, and the deployment, fully documented",
    "Continuity — the same team supports and extends what it built",
    "US-based, security-literate handling of your data and access",
];

const proFiverr = [
    "Unbeatable price for small, well-scoped one-off tasks",
    "Fast to start — browse, order, and receive without a contract",
    "Huge pool of sellers across design, copy, and quick scripts",
    "Escrow and ratings give a baseline of buyer protection",
    "Ideal for experiments and throwaway work you will not maintain",
];

export default function FirmVsFiverrPage() {
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
                        <li className="text-gray-300">vs Fiverr</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Scale className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        QUANT LAB USA vs Fiverr
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Fiverr is a marketplace for well-scoped gigs, and for a logo, a landing-page tweak, or a quick script it is genuinely hard to beat on price and speed. A founder-led firm is a different thing entirely. The two stop being comparable the moment a throwaway-priced gig becomes <Link href="/services/custom-business-software" className="text-sky-400 hover:underline">software your business depends on</Link>, with no continuity or owner behind it. Here is the honest comparison.
                    </p>
                    <ConsultationCTA label="Scope a Real Engagement" />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Founder-led firm vs Fiverr: which should I choose?</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>Choose Fiverr for small, well-specified, low-risk tasks with a clear deliverable — a graphic, a copy pass, a one-off script — where the price is unbeatable and you will not maintain the result. Choose a founder-led firm when the software is load-bearing, the scope is bigger than a single task, you need accountability and continuity across discovery and support, or security and data handling matter. The trap is letting marketplace-priced work quietly turn into a system you run on.</strong>
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
                                <tr className="border-b border-white/5"><td className="px-4 py-3">One-off, well-scoped task you will not maintain</td><td className="px-4 py-3 font-semibold text-white">Fiverr</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Load-bearing software, ongoing scope, real accountability</td><td className="px-4 py-3 font-semibold text-white">Founder-led firm</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Cheap prototype now, plan to rebuild properly later</td><td className="px-4 py-3 font-semibold text-white">Either, with eyes open</td></tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When Fiverr is the right call</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Fiverr is excellent at what it was built for. When the task is small, the spec is clear, and the risk of getting it slightly wrong is low, the marketplace is fast and cheap in a way no firm can match. A logo, a set of social graphics, a one-page site, a quick data-cleanup script — order it, get it back in days, move on. There is no contract to negotiate and no minimum engagement.
                        </p>
                        <p>
                            For experiments and throwaway work, that model is genuinely the right call. If you are testing an idea and fully expect to rebuild whatever survives, paying firm rates would be a waste. Escrow and ratings give you a baseline of protection, and the sheer breadth of sellers means you can find someone for almost any narrow task. None of that is in dispute.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Where the gig model starts to break</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The gig model strains at a predictable point. The first squeeze is scope — software that matters is rarely a single well-defined task. It is discovery, architecture decisions, edge cases, testing, and the hundred small judgments that only make sense with context. A marketplace optimized for discrete deliverables has nowhere to put that work, so it tends not to happen.
                        </p>
                        <p>
                            The second squeeze is continuity and accountability. The seller who built the thing may be unavailable, busy, or gone when you need a change or something breaks. There is no one team that understands the whole system, and quality and licensing vary order to order. The third squeeze is what you cannot see — tests you do not have, security shortcuts you will not notice until later, and code nobody owns. None of this means Fiverr is bad. It means a marketplace for tasks is the wrong tool for systems you depend on, which is the core of our <Link href="/blog/build-vs-buy-software-2026" className="text-sky-400 hover:underline">build vs buy framework</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When a firm wins</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            A founder-led firm wins when the software is something the business runs on, the work spans more than a single task, and someone needs to own the outcome end to end. With QUANT LAB USA you get discovery and architecture before any code is written, one accountable team through the build, and full ownership of the repository, schema, and deployment when it ships. <Link href="/services/custom-business-software" className="text-sky-400 hover:underline">Custom business software</Link> built this way holds up because the context that makes it correct is never lost between hands.
                        </p>
                        <p>
                            The other driver is the relationship. The same team that built the system supports and extends it, so changes are fast and informed rather than a cold restart with a new seller. If you are weighing delivery models more broadly — marketplace, freelancer, agency, or firm — our guide on a <Link href="/blog/dedicated-development-team-vs-agency" className="text-sky-400 hover:underline">dedicated development team vs an agency</Link> lays out the trade-offs.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Side-by-side comparison</h2>
                    <div className="overflow-x-auto rounded-xl border border-white/5 bg-[#0d1526]/60">
                        <table className="min-w-full text-sm">
                            <thead className="bg-[#0a1120]/80 text-gray-400">
                                <tr>
                                    <th className="px-4 py-3 text-left font-semibold">Dimension</th>
                                    <th className="px-4 py-3 text-left font-semibold text-white">Founder-led firm (QUANT LAB USA)</th>
                                    <th className="px-4 py-3 text-left font-semibold">Fiverr</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-gray-300">
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Engagement model</td>
                                    <td className="px-4 py-3">Scoped project + ongoing partnership</td>
                                    <td className="px-4 py-3">Discrete gig, per order</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Best for</td>
                                    <td className="px-4 py-3">Load-bearing software</td>
                                    <td className="px-4 py-3">Small one-off tasks</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Discovery & architecture</td>
                                    <td className="px-4 py-3">Included, up front</td>
                                    <td className="px-4 py-3">Rarely part of a gig</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Accountability</td>
                                    <td className="px-4 py-3">Named founder owns the outcome</td>
                                    <td className="px-4 py-3">Per-seller, varies widely</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Continuity</td>
                                    <td className="px-4 py-3">Same team supports & extends</td>
                                    <td className="px-4 py-3">Seller may be unavailable later</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Testing & docs</td>
                                    <td className="px-4 py-3">Standard part of delivery</td>
                                    <td className="px-4 py-3">Optional, often absent</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Security posture</td>
                                    <td className="px-4 py-3">Security-literate, US-based</td>
                                    <td className="px-4 py-3">Unknown, seller-dependent</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Code ownership</td>
                                    <td className="px-4 py-3">Yours, fully documented</td>
                                    <td className="px-4 py-3">Depends on the gig terms</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Upfront cost</td>
                                    <td className="px-4 py-3">Higher</td>
                                    <td className="px-4 py-3">Very low</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Cost of rework</td>
                                    <td className="px-4 py-3">Low — built right once</td>
                                    <td className="px-4 py-3">Can exceed the original gig</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Time to start</td>
                                    <td className="px-4 py-3">A scoping call</td>
                                    <td className="px-4 py-3">Minutes</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Long-term fit for core systems</td>
                                    <td className="px-4 py-3">Strong</td>
                                    <td className="px-4 py-3">Weak</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                            <h3 className="text-white font-semibold mb-4">Where a firm wins</h3>
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
                            <h3 className="text-white font-semibold mb-4">Where Fiverr wins</h3>
                            <ul className="space-y-2">
                                {proFiverr.map((item) => (
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
                            The two are not priced on the same axis, and pretending they are is how projects go wrong. A Fiverr gig can be tens to a few thousand dollars for a clearly bounded deliverable. A firm engagement for real software starts higher because it includes everything a gig leaves out.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-300 mb-4">
                            <li className="flex gap-2"><span className="text-sky-400">Fiverr gig</span><span className="text-gray-400">=</span><span className="text-white">a fixed task, no discovery, no continuity</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">Firm project</span><span className="text-gray-400">=</span><span className="text-white">discovery + architecture + build + tests + docs</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">+ retainer</span><span className="text-gray-400">=</span><span className="text-white">the same team keeps improving it</span></li>
                            <li className="flex gap-2 border-t border-white/5 pt-2 mt-2"><span className="text-emerald-400 font-semibold">hidden cost</span><span className="text-gray-400">=</span><span className="text-white font-semibold">rebuilding gig work that became load-bearing</span></li>
                        </ul>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            The honest rule: if you would be fine throwing the result away, Fiverr&apos;s price is the right answer. If you will depend on it, the cheapest path is usually to build it properly once. The most expensive projects we are called into are the ones that started as a bargain gig and quietly turned into a system nobody owned.
                        </p>
                    </div>
                    <div className="mt-4">
                        <Link
                            href="/pricing"
                            className="inline-flex items-center gap-1 text-sky-400 hover:underline text-sm"
                        >
                            See how we price real engagements <ArrowRight className="w-3 h-3" />
                        </Link>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Taking over work that started on Fiverr</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            We are called in to rescue gig-built projects often, and the process is the same each time. First an audit — we read what was delivered, run it, and document what works, what is fragile, and what is missing. You get an honest assessment of what is worth keeping before any further money is spent.
                        </p>
                        <p>
                            From there we either bring the existing code up to a maintainable standard with tests, version control, and CI, or rebuild the parts that are not salvageable. Either way it ends in a system you fully own and a team that understands it. If the original work was a prototype that proved the idea, that is a perfectly good place to start a proper <Link href="/services/mvp-development" className="text-sky-400 hover:underline">MVP build</Link> from.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <ConsultationCTA label="Get a Project Assessment" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "When is a founder-led firm a better fit than Fiverr?",
                                a: "A firm wins when the software is something your business depends on, the scope is bigger than a single well-defined task, you need one accountable team across discovery, build, and support, or security and data handling matter. Fiverr is genuinely better for cheap, tightly-scoped one-off work like a logo, a landing page tweak, or a script.",
                            },
                            {
                                q: "Can you take over a project that started on Fiverr?",
                                a: "Yes, and it is common. We audit what was delivered, document the gaps, bring the code up to a maintainable standard or rebuild the parts that are not salvageable, and put it under proper version control and CI. You get a clear assessment up front of what is worth keeping and what is not.",
                            },
                            {
                                q: "Why is a firm more expensive than a Fiverr gig?",
                                a: "Because you are buying different things. A Fiverr gig is a fixed task at a fixed price from a seller you may never work with again. A firm engagement includes discovery, architecture, testing, documentation, accountability, and a relationship that persists, so the work holds up and someone owns the outcome. For throwaway tasks that premium is not worth it; for software you run on, it is.",
                            },
                            {
                                q: "Is Fiverr ever the right choice for software work?",
                                a: "Yes, for the right shape of work. A small, well-specified, low-risk task with a clear deliverable is exactly what the marketplace is good at, and the price is hard to beat. The trouble starts when a throwaway-priced gig quietly becomes load-bearing software with no continuity, tests, or owner behind it.",
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
                            href="/services"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">What We Build</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">The full services overview — software, security, and how we work.</p>
                        </Link>
                        <Link
                            href="/vs/upwork"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">vs Upwork</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">The other freelancer-marketplace comparison — same framing, different model.</p>
                        </Link>
                        <Link
                            href="/vs/toptal"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">vs Toptal</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">Vetted freelancers versus an accountable, founder-led team.</p>
                        </Link>
                        <Link
                            href="/blog/dedicated-development-team-vs-agency"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">Dedicated Team vs Agency</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">Engagement-model trade-offs when scaling a software bench.</p>
                        </Link>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["build-vs-buy"]}
                        heading="Related engagement-model reading"
                    />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Building something you will depend on?
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or <Link href="/contact" className="text-sky-400 hover:underline">book a 20-minute scope call</Link>. We will tell you straight whether your project is a Fiverr-shaped task or something that deserves a proper build — and exactly what each path costs you.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
