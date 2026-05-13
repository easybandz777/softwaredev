import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Users, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "QUANT LAB vs Toptal: 2026 Dev Agency Comparison | QUANT LAB USA",
    description:
        "Toptal is great for staff augmentation. For end-to-end delivery without a CTO on staff, a single accountable shop usually wins. Honest comparison from a build shop.",
    alternates: { canonical: "https://quantlabusa.dev/vs/toptal" },
    openGraph: {
        title: "QUANT LAB vs Toptal: 2026 Dev Agency Comparison | QUANT LAB USA",
        description:
            "When Toptal wins. When a delivery shop wins. Honest comparison of staff augmentation vs end-to-end accountability.",
        url: "https://quantlabusa.dev/vs/toptal",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "QUANT LAB vs Toptal: 2026 Dev Agency Comparison | QUANT LAB USA",
        description:
            "Staff augmentation vs delivery accountability. A fair-minded breakdown.",
    },
};

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "QUANT LAB vs Toptal: 2026 Dev Agency Comparison",
    description:
        "Honest comparison of Toptal vs an end-to-end delivery shop for custom software builds. Staff augmentation vs accountability, cost math, and when each wins.",
    url: "https://quantlabusa.dev/vs/toptal",
    isPartOf: {
        "@type": "WebSite",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
    },
    about: {
        "@type": "Thing",
        name: "Toptal Alternative",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://quantlabusa.dev/services" },
        { "@type": "ListItem", position: 3, name: "vs Toptal", item: "https://quantlabusa.dev/vs/toptal" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Why not just hire Toptal contractors for a custom build?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "It works if you already have a senior engineering manager or CTO on staff who can own architecture, code review, integration, and delivery. Without that role, Toptal puts the project-management burden on the client. We deliver the system, not the hours — fixed scope, fixed deadline, one accountable shop.",
            },
        },
        {
            "@type": "Question",
            name: "What does Toptal actually cost compared to a delivery shop?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Toptal screens for the top three percent and bills accordingly — $80 to $180 per hour for individual contractors, depending on stack and seniority. A delivery shop bills against a fixed scope. On a typical $50k to $100k build, the bottom line tends to be similar; the difference is who owns the outcome.",
            },
        },
        {
            "@type": "Question",
            name: "What happens if the Toptal developer leaves mid-project?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Toptal will rematch you, but the new developer has to onboard against undocumented code your previous contractor wrote alone. We work in pairs and document everything we build, so a single departure does not stall the project. The continuity is part of what you pay a shop for.",
            },
        },
        {
            "@type": "Question",
            name: "Can we use Toptal contractors after the build?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes — and many clients do. We hand off documented code, a clean PostgreSQL schema, and deployment configs that any competent developer can pick up. Toptal contractors are great for ongoing feature work after a delivery shop ships the system. The roles are complementary, not competing.",
            },
        },
    ],
};

const proCustom = [
    "Single accountable contract — we own delivery, not hours",
    "Fixed scope, fixed deadline, no PM burden on the client",
    "Pairs and documentation by default — no single-developer risk",
    "Architecture decisions made by a team that has shipped before",
    "30-day post-launch support and direct line to the founder",
];

const proToptal = [
    "Best-in-class talent pool — top three percent of applicants",
    "Hourly billing — pay only for hours worked, scale up or down",
    "Faster start than an agency on small or well-defined tasks",
    "Replacement guarantee if a contractor is not working out",
    "Excellent for staff augmentation when you have a strong in-house lead",
];

export default function CustomDevVsToptalPage() {
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
                        <li className="text-gray-300">vs Toptal</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Users className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        QUANT LAB vs Toptal
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Toptal is genuinely great at what it does — top-tier individual contractors, billed by the hour, screened harder than most engineering interviews. They staff. We ship. For founders without a CTO on staff who need a system delivered against a fixed scope and deadline, a delivery shop usually wins. Here is the honest comparison.
                    </p>
                    <ConsultationCTA label="Scope a Fixed-Bid Build" />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Toptal vs delivery shop: which is right for me?</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>Choose Toptal when you have an in-house CTO or VP Engineering who can own architecture, code review, and integration — you are buying senior hours, not delivery. Choose a delivery shop when you need a system shipped against a fixed scope and deadline without a technical owner on staff. The hybrid pattern (shop builds v1, Toptal contractors take ongoing feature work) is the most common 2026 pattern for founder-led companies.</strong>
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
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Senior engineering manager / CTO on staff, well-defined tasks</td><td className="px-4 py-3 font-semibold text-white">Toptal</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">No technical owner, need fixed scope plus accountability</td><td className="px-4 py-3 font-semibold text-white">Delivery shop</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Ship v1 fast, then scale feature work</td><td className="px-4 py-3 font-semibold text-white">Hybrid (shop, then Toptal)</td></tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When Toptal is the right call</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Toptal earned its reputation on a real promise — the top three percent of applicants, screened across coding, communication, and project history. It is the best fit when you already have a senior engineering manager, a VP Engineering, or a CTO on staff who can own architecture, code review, and delivery. In that setup, Toptal contractors are pure leverage — extra hands attached to a strong existing brain, billed by the hour, scaled up and down on demand.
                        </p>
                        <p>
                            Toptal also wins on well-defined tasks. If you know exactly what you need built — a specific endpoint, a specific integration, a specific component — and you have someone in-house who can scope, review, and integrate the work, you can get a Toptal contractor running inside a week. The talent pool is genuinely good. The vetting is real.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Where Toptal gets harder</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Toptal is staff augmentation. It is not delivery. That distinction sounds small until you are the one running the project. Without an internal engineering lead, the client ends up doing the PM work themselves — sprint planning, code review, architecture review, integration debugging, deadline management. The hourly contractor delivers their hours; somebody else has to deliver the outcome. For founders without a technical co-founder, that gap is where Toptal projects most often go sideways.
                        </p>
                        <p>
                            The second issue is continuity. Toptal contractors are independent freelancers — they take other gigs, they take vacations, they sometimes disappear mid-project. Toptal will rematch you, but the new contractor has to onboard against code the previous one wrote alone, often without documentation. The replacement guarantee covers the contract, not the schedule slippage. And single-developer projects accumulate undocumented decisions that become expensive to unwind a year later.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When a delivery shop wins</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            A <Link href="/services/custom-business-software" className="text-sky-400 hover:underline">custom business software</Link> shop wins when you need the system delivered, not the hours. We work in pairs by default, so a single departure does not stall the project. We document every architectural decision, every API contract, every schema migration, so a year later your in-house team can pick the codebase up cold. The contract is for the outcome, not the time — fixed scope, fixed deadline, one accountable signature on the work.
                        </p>
                        <p>
                            That model is most valuable for founders without a CTO, ops leaders replacing a vendor system, and any team that wants the project-management burden off their plate. It is also where a <Link href="/services/custom-crm-development" className="text-sky-400 hover:underline">custom CRM build</Link> or a <Link href="/services/stripe-integration" className="text-sky-400 hover:underline">Stripe integration</Link> with deep accounting wiring earns its keep — the work is too tightly coupled to hand to a rotating contractor pool.
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
                                    <th className="px-4 py-3 text-left font-semibold text-white">QUANT LAB (delivery shop)</th>
                                    <th className="px-4 py-3 text-left font-semibold">Toptal (staff aug)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-gray-300">
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Engagement model</td>
                                    <td className="px-4 py-3">Fixed scope, fixed deadline</td>
                                    <td className="px-4 py-3">Hourly contractors</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Outcome ownership</td>
                                    <td className="px-4 py-3">Single accountable shop</td>
                                    <td className="px-4 py-3">Client owns delivery</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Project management</td>
                                    <td className="px-4 py-3">Included</td>
                                    <td className="px-4 py-3">Client-provided</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Architecture</td>
                                    <td className="px-4 py-3">Senior team, prior shipped systems</td>
                                    <td className="px-4 py-3">Per-contractor, varies</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Continuity risk</td>
                                    <td className="px-4 py-3">Pairs + documentation by default</td>
                                    <td className="px-4 py-3">Single-developer, contractor turnover</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Code review</td>
                                    <td className="px-4 py-3">Internal peer review</td>
                                    <td className="px-4 py-3">Client-provided</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Documentation</td>
                                    <td className="px-4 py-3">Architectural docs + runbooks</td>
                                    <td className="px-4 py-3">Per-contractor, often minimal</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Best for</td>
                                    <td className="px-4 py-3">Founders without a CTO</td>
                                    <td className="px-4 py-3">Teams with engineering leadership</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Time to start</td>
                                    <td className="px-4 py-3">1 to 2 weeks (kickoff)</td>
                                    <td className="px-4 py-3">3 to 7 days (matching)</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Post-launch</td>
                                    <td className="px-4 py-3">30-day support + retainer</td>
                                    <td className="px-4 py-3">Continued hourly billing</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                            <h3 className="text-white font-semibold mb-4">Where a delivery shop wins</h3>
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
                            <h3 className="text-white font-semibold mb-4">Where Toptal wins</h3>
                            <ul className="space-y-2">
                                {proToptal.map((item) => (
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Cost comparison: hours vs outcome</h2>
                    <div className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            The bottom-line math is often closer than people expect. Toptal contractor rates run $80 to $180 per hour depending on stack and seniority. A typical custom CRM or web-app build of around 600 to 900 hours lands somewhere in this range:
                        </p>
                        <ul className="space-y-2 text-sm text-gray-300 mb-4">
                            <li className="flex gap-2"><span className="text-sky-400">~$130/hr × 700 hrs</span><span className="text-gray-400">=</span><span className="text-white font-semibold">$91k</span> Toptal direct cost</li>
                            <li className="flex gap-2"><span className="text-sky-400">+ ~$15k</span><span className="text-gray-400">=</span><span className="text-white">internal PM time (200 hrs at $75 fully loaded)</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">+ ~$8k</span><span className="text-gray-400">=</span><span className="text-white">contingency for rematch / scope creep</span></li>
                            <li className="flex gap-2 border-t border-white/5 pt-2 mt-2"><span className="text-emerald-400 font-semibold">~$114k</span><span className="text-gray-400">=</span><span className="text-white font-semibold">all-in Toptal TCO for a typical build</span></li>
                        </ul>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Compare against a fixed-bid custom build at $55k to $95k, scope locked, deadline locked, PM included. The headline number is lower and the variance is much lower. The Toptal model wins on flexibility — the shop model wins on certainty.
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            The math flips for organizations that already have a strong CTO and want extra hands without absorbing a fixed contract. There Toptal is unbeatable. The math swings hard toward a shop for founders running without an engineering lead.
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Migration path from Toptal mid-project</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Half the projects that come to us already have a Toptal codebase. The pattern is usually the same — a strong individual contractor built v0.3, then left, and the rematch has not caught up. We do a one-week technical audit on the repo, the database, and the deployment, then either continue the existing architecture or replan against a clean foundation, depending on what the audit finds. The choice is the client's, not ours.
                        </p>
                        <p>
                            From there it is a normal delivery engagement — fixed scope, fixed deadline, full documentation against the existing codebase. The audit is non-binding; if the codebase is in good shape, we say so and recommend you keep building with Toptal. We do not pretend every project needs to be rebuilt to win the gig.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Real-world example</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            <Link href="/work/j5-sales-os" className="text-sky-400 hover:underline">J5 Sales OS</Link> is a delivery-shop archetype — contact deduplication, outreach presets, dual-mode lead flow, embedded reporting, Stripe and QuickBooks integration. Production-grade from day one. The system was shipped against a fixed scope with documentation, not built hour by hour by a rotating contractor pool. The client did not need to staff a CTO to land it.
                        </p>
                        <p>
                            <Link href="/work/bridgepointe-painting" className="text-sky-400 hover:underline">Bridgepointe Painting</Link> is the other archetype — a non-technical owner who needed a job-by-job CRM, Stripe checkout, and QuickBooks sync, but had no internal engineer to manage individual contractors. The QUANT LAB engagement closed their month-end from three days to thirty minutes and stayed within a fixed budget. That class of project is exactly where a shop beats staff aug.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "Why not just hire Toptal contractors for a custom build?",
                                a: "It works if you already have a senior engineering manager or CTO on staff who can own architecture, code review, integration, and delivery. Without that role, Toptal puts the project-management burden on the client. We deliver the system, not the hours — fixed scope, fixed deadline, one accountable shop.",
                            },
                            {
                                q: "What does Toptal actually cost compared to a delivery shop?",
                                a: "Toptal screens for the top three percent and bills accordingly — $80 to $180 per hour for individual contractors, depending on stack and seniority. A delivery shop bills against a fixed scope. On a typical $50k to $100k build, the bottom line tends to be similar; the difference is who owns the outcome.",
                            },
                            {
                                q: "What happens if the Toptal developer leaves mid-project?",
                                a: "Toptal will rematch you, but the new developer has to onboard against undocumented code your previous contractor wrote alone. We work in pairs and document everything we build, so a single departure does not stall the project. The continuity is part of what you pay a shop for.",
                            },
                            {
                                q: "Can we use Toptal contractors after the build?",
                                a: "Yes — and many clients do. We hand off documented code, a clean PostgreSQL schema, and deployment configs that any competent developer can pick up. Toptal contractors are great for ongoing feature work after a delivery shop ships the system. The roles are complementary, not competing.",
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
                            href="/vs/upwork"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">vs Upwork</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">The other freelance-market comparison — different vetting, same trade-off.</p>
                        </Link>
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Need the outcome, not the hours?
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or <Link href="/contact" className="text-sky-400 hover:underline">book a 20-minute scope call</Link>. We will walk through your build, your in-house technical depth, and your deadline and tell you straight whether Toptal is right, a delivery shop is right, or you should run a hybrid.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
