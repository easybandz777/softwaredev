import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Scale, Check, ArrowRight } from "lucide-react";
import { comparisonMetadata } from "@/lib/seoMeta";

export const metadata: Metadata = comparisonMetadata({
    competitor: "Make",
    title: "QUANT LAB USA vs Make: Custom Integrations in 2026",
    description:
        "Make (formerly Integromat) is a powerful visual automation tool. When scenarios sprawl, operation pricing climbs, and reliability matters, custom integrations win. Honest 2026 comparison.",
    slug: "/vs/make",
});

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "QUANT LAB USA vs Make: Custom Integrations vs Visual Automation in 2026",
    description:
        "Honest comparison of Make (formerly Integromat) against custom-built integrations. Feature matrix, operation-based cost compounding, the limits of visual scenarios, and the point where coded integrations beat a sprawling scenario.",
    url: "https://quantlabusa.dev/vs/make",
    isPartOf: {
        "@type": "WebSite",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
    },
    about: {
        "@type": "Thing",
        name: "Make.com Alternative",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Custom Business Software", item: "https://quantlabusa.dev/services/custom-business-software" },
        { "@type": "ListItem", position: 3, name: "vs Make", item: "https://quantlabusa.dev/vs/make" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "When are custom integrations a better fit than Make?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Custom usually wins when a Make scenario has grown into a sprawling visual graph nobody fully understands, operation-based pricing climbs as data volume grows, you need reliability and testing the canvas cannot provide, or the logic has outgrown a visual builder. For mid-complexity automations and connecting apps without code, Make is powerful and hard to beat.",
            },
        },
        {
            "@type": "Question",
            name: "Can you rebuild our Make scenarios as custom integrations?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We audit your scenarios to document every module, router, filter, and the apps they touch, then rebuild them as a small coded integration service using the same vendor APIs and webhooks. The logic becomes tested TypeScript with real retries, idempotency, and structured logging, deployed on your own infrastructure.",
            },
        },
        {
            "@type": "Question",
            name: "What is the timeline to replace a Make setup?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "4 to 10 weeks for the first production release. A few scenarios across well-documented APIs is fast. A large estate of interdependent scenarios with deep routing, iterators, aggregators, and obscure endpoints takes the upper end of that range.",
            },
        },
        {
            "@type": "Question",
            name: "Do we own the code if we leave Make?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Completely. You get the GitHub repository, the integration service, the deployment configs, and the documentation. No operation quotas, no per-scenario pricing, no scheduling limits, and no exit cost as automation volume grows.",
            },
        },
        {
            "@type": "Question",
            name: "Is Make ever the right long-term choice?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Often, yes. For mid-complexity automations, multi-step data routing, and connecting apps where a visual canvas speeds development, Make is excellent and should not be replaced. The hybrid pattern keeps Make for flexible, non-critical automation and builds custom only for the high-volume or business-critical scenarios.",
            },
        },
        {
            "@type": "Question",
            name: "How does the cost compare at high operation volume?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Make is priced largely by operations consumed, so a complex estate where each run burns many operations can climb into the high four or five figures a year, plus the hidden cost of maintaining sprawling scenarios. A custom integration service at $25k to $55k one-time with a $10k to $18k annual retainer is usually cost-neutral to cheaper once volume is high and reliability matters.",
            },
        },
    ],
};

const proCustom = [
    "You own the integration code and the deployment",
    "Real retries, idempotency, and error handling, not best-effort runs",
    "No operation quotas or per-scenario pricing as volume grows",
    "Logic in tested, reviewable code, not a sprawling visual graph",
    "Event-driven via webhooks, observable in your own monitoring",
];

const proMake = [
    "Powerful visual builder for genuinely complex routing",
    "Granular control with routers, iterators, and aggregators",
    "Large connector library plus generic HTTP modules",
    "Faster than code for mid-complexity, non-critical automation",
    "Roadmap and connector upkeep funded by Make, not you",
];

export default function CustomIntegrationsVsMakePage() {
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
                        <li className="text-gray-300">vs Make</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Scale className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        QUANT LAB USA vs Make
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Make, formerly Integromat, is a powerful visual automation tool. For mid-complexity workflows with real routing and data shaping, its canvas gives you far more control than a simple trigger-and-action builder. The math turns when a scenario sprawls into a graph nobody fully understands, operation-based pricing climbs with volume, and you need the reliability and testability that <Link href="/services/api-development" className="text-sky-400 hover:underline">custom integrations</Link> provide. Here is the honest comparison.
                    </p>
                    <ConsultationCTA label="Scope a Make Replacement" />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Custom integrations vs Make: which should I choose?</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>Choose Make when you need flexible, mid-complexity automation, the volume is manageable, and a visual canvas gets you to a working flow faster than code. Choose custom integrations when a scenario has become a business-critical sprawl, operation pricing is climbing with volume, you need real reliability and tests, or the logic has outgrown the canvas. The hybrid pattern keeps Make for flexible, non-critical automation and builds custom for the high-volume or mission-critical scenarios.</strong>
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
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Mid-complexity routing, manageable volume, non-critical</td><td className="px-4 py-3 font-semibold text-white">Make</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">High volume, business-critical, real reliability</td><td className="px-4 py-3 font-semibold text-white">Custom</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Keep Make for flexible glue, build critical flows custom</td><td className="px-4 py-3 font-semibold text-white">Hybrid</td></tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When Make is the right call</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Make earned its place by giving no-code automation real depth. A visual canvas where you wire modules together, routers that branch logic, iterators and aggregators that reshape data, and generic HTTP modules that reach any API. For a mid-complexity workflow that a simple trigger-and-action tool could not express, the canvas lets you build something genuinely capable without writing software.
                        </p>
                        <p>
                            If your automations are flexible and evolving, your volume is manageable, and the visual model gets your team to a working flow faster than code would, Make is the right call. The connector library, the data-mapping tools, and the scheduling controls cover a lot of ground, and the canvas makes complex routing legible to people who do not write software. That is the use case the product was built for, and it serves it extremely well.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Where Make starts to break</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Make hits a ceiling at a predictable point. The first squeeze is volume and economics — operation-based pricing is reasonable at low usage, but a scenario where each run consumes many operations adds up quickly, and a busy estate can quietly become a significant SaaS line item. The very granularity that makes Make powerful is what makes it expensive at scale.
                        </p>
                        <p>
                            The second squeeze is complexity itself. A scenario that grows past a couple of dozen modules with deep routing becomes a visual graph that is hard to read, harder to test, and risky to change, with no real version control and no way to diff what changed. The third squeeze is reliability and ownership — the platform is best-effort, error handling has to be wired by hand, and the whole thing often lives under one person who understands the canvas, which is a real operational risk for a business-critical flow.
                        </p>
                        <p>
                            None of this is Make being a bad product. It is the cost of running high-volume, business-critical integration on a visual automation layer designed for flexible, mid-complexity work. Most teams that push Make into core processes meet some version of this curve. The broader framing lives in our <Link href="/blog/build-vs-buy-software-2026" className="text-sky-400 hover:underline">build vs buy software guide</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When custom wins</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Custom integrations tend to win when a scenario has become business-critical, operation pricing is climbing with volume, you need real reliability and tests, or the logic has outgrown the canvas. A coded integration service built through our <Link href="/services/api-development" className="text-sky-400 hover:underline">API development</Link> work uses the same vendor APIs and webhooks, but with real retries, idempotency, structured logging, and a test suite, deployed on infrastructure you own.
                        </p>
                        <p>
                            The other common driver is maintainability and observability. Logic expressed in reviewable code is far easier to understand, change safely, and hand between engineers than a sprawling visual graph, and errors surface in your monitoring rather than failing quietly inside a scenario. When the automation is part of a larger system you are building, our <Link href="/services/web-applications" className="text-sky-400 hover:underline">custom web applications</Link> path folds it directly into the product, and our <Link href="/blog/internal-tools-platform-engineering-guide" className="text-sky-400 hover:underline">internal tools guide</Link> covers the patterns.
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
                                    <th className="px-4 py-3 text-left font-semibold text-white">Custom integrations (QUANT LAB USA)</th>
                                    <th className="px-4 py-3 text-left font-semibold">Make</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-gray-300">
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Pricing model</td>
                                    <td className="px-4 py-3">One-time build + optional retainer</td>
                                    <td className="px-4 py-3">Operation-based, scales with runs</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Volume scaling</td>
                                    <td className="px-4 py-3">Flat infrastructure cost</td>
                                    <td className="px-4 py-3">Cost climbs with operations</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Setup speed (early)</td>
                                    <td className="px-4 py-3">Days to weeks</td>
                                    <td className="px-4 py-3">Minutes to hours</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Logic model</td>
                                    <td className="px-4 py-3">Code, reviewable and testable</td>
                                    <td className="px-4 py-3">Visual graph, routers + modules</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Reliability</td>
                                    <td className="px-4 py-3">Retries + idempotency, guaranteed</td>
                                    <td className="px-4 py-3">Best-effort, manual error routes</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Error handling</td>
                                    <td className="px-4 py-3">Structured, in your monitoring</td>
                                    <td className="px-4 py-3">Error handlers wired by hand</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Testing</td>
                                    <td className="px-4 py-3">Automated test suite</td>
                                    <td className="px-4 py-3">Manual runs on the canvas</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Version control</td>
                                    <td className="px-4 py-3">Full Git history + review</td>
                                    <td className="px-4 py-3">Scenario versions, no diff</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Connector breadth</td>
                                    <td className="px-4 py-3">Any API, built as needed</td>
                                    <td className="px-4 py-3">Large library + HTTP modules</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Source code</td>
                                    <td className="px-4 py-3">Owned by client</td>
                                    <td className="px-4 py-3">Proprietary platform</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Data residency</td>
                                    <td className="px-4 py-3">Your infrastructure / region</td>
                                    <td className="px-4 py-3">Make-managed</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Long-term TCO at high volume</td>
                                    <td className="px-4 py-3">Flat after build</td>
                                    <td className="px-4 py-3">Compounds with operations</td>
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
                            <h3 className="text-white font-semibold mb-4">Where Make wins</h3>
                            <ul className="space-y-2">
                                {proMake.map((item) => (
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Cost comparison at high volume</h2>
                    <div className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Run the simple version. A complex estate on a higher Make plan, three years:
                        </p>
                        <ul className="space-y-2 text-sm text-gray-300 mb-4">
                            <li className="flex gap-2"><span className="text-sky-400">~$900/mo</span><span className="text-gray-400">=</span><span className="text-white">high-operation plan</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">× 36 months</span><span className="text-gray-400">=</span><span className="text-white font-semibold">~$32k</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">+ ~$10k</span><span className="text-gray-400">=</span><span className="text-white">operation overage + add-ons</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">+ ~$22k</span><span className="text-gray-400">=</span><span className="text-white">maintaining + debugging sprawling scenarios</span></li>
                            <li className="flex gap-2 border-t border-white/5 pt-2 mt-2"><span className="text-emerald-400 font-semibold">~$64k</span><span className="text-gray-400">=</span><span className="text-white font-semibold">3-year Make TCO at this volume</span></li>
                        </ul>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Compare against a custom integration service at $25k to $55k one-time, plus $10k to $18k annually for upkeep and new connectors. That comes to $55k to $109k over three years — typically cost-neutral to cheaper at high volume, with the gap widening as operation counts grow and the cost of a brittle, hard-to-change scenario becomes real money.
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            The math stays firmly with Make at manageable volume and for flexible, non-critical automation. The flip happens when operations consumed plus add-ons plus the cost of maintaining a sprawling scenario estate exceed the amortized cost of a coded integration service you own.
                        </p>
                    </div>
                    <div className="mt-4">
                        <Link
                            href="/pricing"
                            className="inline-flex items-center gap-1 text-sky-400 hover:underline text-sm"
                        >
                            See our pricing for integration work <ArrowRight className="w-3 h-3" />
                        </Link>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Migration path off Make</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The cutover follows a predictable pattern. Week one is an audit — we trace every scenario, its modules, routers, filters, and the apps it touches, and we flag which are business-critical, which burn the most operations, and which can simply stay on Make. Week two is design — the critical scenarios become a small coded integration service using the same vendor APIs and webhooks, with retries, idempotency, and logging designed in from the start.
                        </p>
                        <p>
                            From there it is a normal build — each scenario rebuilt as tested code, wired event-driven where the API supports webhooks, and observable in your monitoring. The scenarios stay live in parallel during the build so nothing stops running, then you switch each flow over one at a time once its coded equivalent is verified. Flexible, low-value automation can stay on Make indefinitely — the goal is to move the scenarios that matter, not to rip out everything for its own sake.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <ConsultationCTA label="Get a Make Migration Scope" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "When are custom integrations a better fit than Make?",
                                a: "Custom usually wins when a Make scenario has grown into a sprawling visual graph nobody fully understands, operation-based pricing climbs as data volume grows, you need reliability and testing the canvas cannot provide, or the logic has outgrown a visual builder. For mid-complexity automations and connecting apps without code, Make is powerful and hard to beat.",
                            },
                            {
                                q: "Can you rebuild our Make scenarios as custom integrations?",
                                a: "Yes. We audit your scenarios to document every module, router, filter, and the apps they touch, then rebuild them as a small coded integration service using the same vendor APIs and webhooks. The logic becomes tested TypeScript with real retries, idempotency, and structured logging, deployed on your own infrastructure.",
                            },
                            {
                                q: "Is Make ever the right long-term choice?",
                                a: "Often, yes. For mid-complexity automations, multi-step data routing, and connecting apps where a visual canvas speeds development, Make is excellent and should not be replaced. The hybrid pattern keeps Make for flexible, non-critical automation and builds custom only for the high-volume or business-critical scenarios.",
                            },
                            {
                                q: "How does the cost compare at high operation volume?",
                                a: "Make is priced largely by operations consumed, so a complex estate where each run burns many operations can climb into the high four or five figures a year, plus the hidden cost of maintaining sprawling scenarios. A custom integration service at $25k to $55k one-time with a $10k to $18k annual retainer is usually cost-neutral to cheaper once volume is high and reliability matters.",
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
                            href="/services/api-development"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">API Development</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">Coded integrations and APIs with real reliability and ownership.</p>
                        </Link>
                        <Link
                            href="/vs/zapier"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">vs Zapier</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">No-code automation versus a coded integration service you own.</p>
                        </Link>
                        <Link
                            href="/vs/outsystems"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">vs OutSystems</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">Enterprise low-code platform versus a custom codebase you own.</p>
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
                        topics={["build-vs-buy","stack"]}
                        heading="Related build-vs-buy reading"
                    />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Do the math on your Make estate.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or <Link href="/contact" className="text-sky-400 hover:underline">book a 20-minute scope call</Link>. We will walk through your scenarios, your operation volume, and which flows are business-critical and tell you straight whether Make is still right, custom is right, or you should run a hybrid.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
