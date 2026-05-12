import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Calculator, ArrowRight, Check, Zap, Shield, Clock } from "lucide-react";
import { BuildVsBuyCalculator } from "./BuildVsBuyCalculator";

export const metadata: Metadata = {
    title: "Build vs Buy Calculator | Custom Software vs SaaS | QUANT LAB",
    description:
        "Should you build custom software or stay on SaaS? 3-year TCO + 0-100 decision score in 60 seconds. CFO-ready answer for ops leaders.",
    alternates: { canonical: "https://quantlabusa.dev/calculators/build-vs-buy" },
    openGraph: {
        title: "Build vs Buy Calculator | Custom Software vs SaaS | QUANT LAB",
        description:
            "Should you build custom software or stay on SaaS? 3-year TCO + 0-100 decision score in 60 seconds.",
        url: "https://quantlabusa.dev/calculators/build-vs-buy",
        type: "website",
        siteName: "QUANT LAB USA",
    },
    twitter: {
        card: "summary_large_image",
        title: "Build vs Buy Calculator | Custom Software vs SaaS | QUANT LAB",
        description:
            "Should you build custom software or stay on SaaS? 3-year TCO + 0-100 decision score in 60 seconds.",
    },
};

const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Build vs Buy Decision Calculator",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    url: "https://quantlabusa.dev/calculators/build-vs-buy",
    description:
        "Interactive decision calculator that scores a custom-software build vs SaaS situation across six factors, returning a 0-100 score, 3-year TCO comparison, and a build/hybrid/buy recommendation.",
    provider: {
        "@type": "Organization",
        name: "QuantLab Software Solutions",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How does the build vs buy score work?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The score starts at 50 and moves up or down based on six factors: SaaS spend, integrations needed, workflow features the SaaS can't deliver, data sensitivity, team size adjacent to the tool, and the 3-year TCO delta. Scores 80+ are clear build cases. 65-80 lean build. 40-65 hybrid (build on top of SaaS). 25-40 lean buy. Below 25 stay on SaaS. The scoring weights are tuned from 10+ years of build-vs-buy decisions across mid-market clients.",
            },
        },
        {
            "@type": "Question",
            name: "What's a 'hybrid' approach mean?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A hybrid keeps your SaaS for the commoditized parts (auth, basic CRUD, standard reports) and builds custom on top for the 2-3 workflow features that are uniquely yours. This is the right move when full custom is overkill but you've already paid for customization that doesn't quite fit. We build the integration layer and the custom UI for the workflow features that aren't negotiable, and you keep the SaaS as the system of record.",
            },
        },
        {
            "@type": "Question",
            name: "Where does the 9% annual SaaS inflation assumption come from?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Industry surveys of mid-market SaaS renewals consistently show 8-12% annual price increases on enterprise and professional tiers. We use 9% as a defensible mid-point. Your specific renewal quote is the better data source — if you've been hit with 15% increases two years running, run the calculator with that number and the build case gets much stronger.",
            },
        },
        {
            "@type": "Question",
            name: "Why does data sensitivity matter for build vs buy?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "When you're processing regulated PII, PHI, or financial data, the data plane is a strategic asset. Owning the data plane (where it lives, who has access, how it's encrypted, what audit trail exists) becomes much easier when you own the application. SaaS platforms can be compliant, but you're trusting their controls, their personnel, and their incident response. For high-sensitivity data, that risk transfer is itself worth points in the build column.",
            },
        },
        {
            "@type": "Question",
            name: "Is this calculator biased toward building?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "It's tuned to be honest. We tell teams to stay on SaaS routinely — the calculator returns 'buy' or 'lean buy' verdicts whenever the team size, SaaS spend, or workflow uniqueness doesn't justify the upfront build cost. Our business benefits more from a 'build' verdict, but our reputation depends on getting these decisions right, so the math is calibrated honestly. Run the calculator with low inputs and you'll see it returns 'buy' clearly.",
            },
        },
    ],
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Calculators", item: "https://quantlabusa.dev/calculators" },
        { "@type": "ListItem", position: 3, name: "Build vs Buy Decision Calculator", item: "https://quantlabusa.dev/calculators/build-vs-buy" },
    ],
};

export default function BuildVsBuyCalculatorPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <div className="container mx-auto px-6 max-w-5xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">Calculators</li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">Build vs Buy</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-400 mb-6">
                        <Calculator className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Build vs Buy Calculator — Custom Software vs SaaS, Scored in 60 Seconds
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-3xl">
                        A 0-100 decision score plus a 3-year TCO comparison between staying on your SaaS and shipping <Link href="/services/custom-business-software" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">custom business software</Link>. Tuned to six factors that actually drive the right answer: spend, integrations, blocked workflow features, data sensitivity, team size, and TCO. Walk into your next leadership meeting with a defensible recommendation — not just a vibe.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-emerald-400" /><span>60-second answer</span></div>
                        <div className="flex items-center gap-2"><Zap className="w-4 h-4 text-sky-400" /><span>Tuned from 10+ years of decisions</span></div>
                        <div className="flex items-center gap-2"><Shield className="w-4 h-4 text-amber-400" /><span>No email required to see the score</span></div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <BuildVsBuyCalculator />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        Why the build-vs-buy decision is harder now than it was 5 years ago
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Five years ago this decision had a default answer. Buy. SaaS was cheaper than building, deployment was simpler, vendor maturity was higher than most in-house engineering organizations. The default has shifted. Per-seat SaaS pricing has compounded at 8-12% annually, customization platforms (Salesforce Apex, HubSpot Operations Hub, Monday.com automations) charge ever more for &ldquo;configuration&rdquo; that never quite fits, integration costs balloon as Zapier and Workato and middleware tax every connector, and the maturity gap between modern dev tooling and platform extensibility has narrowed. The result: more teams are quietly running custom builds where they used to settle for SaaS. The hard part is deciding which side of that line your specific situation falls on.
                        </p>
                        <p>
                            This calculator scores six factors that reliably predict the right answer. Each factor moves the score up or down from a neutral 50. SaaS spend matters because per-seat pricing eventually crosses the line where the amortized cost of a build is lower than the SaaS bill. Integrations matter because each one is either a connector subscription or middleware contract you can collapse by owning the integration layer. Blocked workflow features matter the most — they&apos;re the signal that you&apos;re already paying for customization that doesn&apos;t fit, and they&apos;re the leading indicator that custom will outperform. Data sensitivity matters because owning the data plane is a strategic asset for any regulated workload. Team size matters because build payback scales with how many people the tool serves. And the 3-year TCO delta matters because numbers, ultimately, are how this decision gets approved.
                        </p>
                        <h3 className="text-xl font-bold text-white mt-8 mb-3">When to build</h3>
                        <p>
                            High score (80+) cases share three things. First, your workflow is uniquely yours — you&apos;ve already paid for SaaS customization that doesn&apos;t quite fit, and you have a documented list of 5+ features the platform can&apos;t deliver. Second, your spend on SaaS plus customization plus middleware is north of $5,000/month, which puts amortized build cost in striking distance. Third, you have integration depth — three or more systems this tool must talk to, where each one is a connector subscription or a brittle Zap that breaks in production. When all three line up, custom usually wins by year 2 and the gap widens from there. The clearest signal is when leadership has already greenlit a &ldquo;feasibility study&rdquo; — that&apos;s your sign the decision has been informally made and you&apos;re collecting the math to defend it.
                        </p>
                        <h3 className="text-xl font-bold text-white mt-8 mb-3">When to buy</h3>
                        <p>
                            Low score (under 25) cases also share three things. Small teams (under 10 active users). Modest SaaS spend (under $1,000/month). And a workflow that&apos;s commoditized — what you&apos;re doing isn&apos;t different from what every other company in your industry is doing, so the platform&apos;s default workflow is good enough. In these cases the SaaS economics work in your favor and the cost of building is straight-up overkill. We tell teams in this range to stay on the SaaS and revisit when something material changes — team size doubles, SaaS bill jumps 20%+ at renewal, or a critical workflow feature gets blocked. <Link href="/blog/how-to-choose-a-software-development-company-checklist" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">Our guide to choosing a software development company</Link> walks through how to know when the decision has actually flipped.
                        </p>
                        <h3 className="text-xl font-bold text-white mt-8 mb-3">The hybrid sweet spot</h3>
                        <p>
                            Scores in the 40-65 range are the most interesting. Full custom is overkill, but you&apos;ve hit real friction with the SaaS. The right play is a hybrid: keep the SaaS for what it&apos;s good at (auth, standard CRUD, baseline reporting) and build custom on top for the 2-3 workflow features that are uniquely yours. We see this most often in mid-market RevOps stacks — the team has Salesforce or HubSpot doing the system-of-record work but has built a custom pricing engine, a custom quote-to-cash flow, and a custom onboarding tool sitting on top. That hybrid layer is where we spend a lot of our build time. It captures the customization upside without the full replatform cost.
                        </p>
                        <h3 className="text-xl font-bold text-white mt-8 mb-3">The decision factors that don&apos;t show up in the score</h3>
                        <p>
                            The calculator&apos;s score is honest but not complete. Three soft factors swing real decisions and don&apos;t fit cleanly into a number. First, in-house engineering capacity — if you have a 2-person dev team already swamped with the existing roadmap, taking on a custom build means hiring, building, or buying engineering time. Second, vendor lock-in — owning your data and your codebase has strategic value that compounds as your business gets bigger and your switching cost gets higher. Third, customer-facing differentiation — when your workflow is part of how you sell, custom lets you ship features your competitors literally cannot, which is hard to put a dollar value on but very real. The 20-minute scoping call we offer is where we walk through these soft factors and turn them into rough sensitivity adjustments on the score.
                        </p>
                        <h3 className="text-xl font-bold text-white mt-8 mb-3">What &ldquo;build&rdquo; actually costs in 2026</h3>
                        <p>
                            Build costs have stabilized in the last 2 years. A production-grade internal tool for a 25-50 person team runs $45K-$120K for the initial build, with 18% annual maintenance. A serious customer-facing SaaS product is $120K-$400K initial, same maintenance ratio. Stripe-heavy or payment-driven products land in a similar range — see our <Link href="/calculators/stripe-cost" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">Stripe integration cost calculator</Link> for that specific case. The calculator above uses $1,500/seat + integration cost + blocked-feature cost as its build baseline with a 1.0-1.25x data-sensitivity multiplier, and a $35K floor for the smallest scopes. These are anchored on our recent project data and they line up reasonably well with industry surveys from Capterra and G2 build-vs-buy reports. The mid-point is what we&apos;d quote on a scoping call before any deep discovery.
                        </p>
                        <h3 className="text-xl font-bold text-white mt-8 mb-3">How to pitch the result internally</h3>
                        <p>
                            The downloadable PDF version of this calculator includes a 1-page CFO memo template. The structure is straightforward: today&apos;s 3-year SaaS TCO, projected 3-year custom TCO, payback period, decision score with context on why, and three risks plus mitigations. That format works because it gives the CFO a number to scrutinize, a recommendation to react to, and an exit ramp if the numbers don&apos;t hold up. Use the PDF as a starting draft and tune the language to your leadership&apos;s communication style. If you want a second pair of eyes on the memo before you send it, drop us a note via <Link href="/contact" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">the contact page</Link> and we&apos;ll look at it.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What you&apos;ll get</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            "A 0-100 decision score with a clear verdict (Build / Lean Build / Hybrid / Lean Buy / Buy)",
                            "A 3-year TCO comparison between SaaS and a custom build",
                            "A defensible build cost range based on your specific scope drivers",
                            "Plain-English explanation of what's moving your score",
                            "A PDF decision guide + 1-page CFO memo template (gated by email)",
                            "A 20-minute scoping call on the calendar if you want a second pair of eyes",
                        ].map((item) => (
                            <div key={item} className="flex gap-3 rounded-xl border border-white/5 bg-[#0d1526]/60 p-4">
                                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related reading</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Link href="/services/custom-business-software" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                            <p className="text-sm font-semibold text-white mb-1">Custom Business Software</p>
                            <p className="text-xs text-gray-400">Ops dashboards, internal tools, integration layers, custom data models.</p>
                        </Link>
                        <Link href="/services/custom-crm-development" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                            <p className="text-sm font-semibold text-white mb-1">Custom CRM Development</p>
                            <p className="text-xs text-gray-400">For when the decision is specifically about replacing or building on top of Salesforce/HubSpot.</p>
                        </Link>
                        <Link href="/calculators/crm-roi" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                            <p className="text-sm font-semibold text-white mb-1">Custom CRM ROI Calculator</p>
                            <p className="text-xs text-gray-400">A CRM-specific 3-year TCO + payback model.</p>
                        </Link>
                        <Link href="/calculators/stripe-cost" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                            <p className="text-sm font-semibold text-white mb-1">Stripe Integration Cost Calculator</p>
                            <p className="text-xs text-gray-400">For payment and subscription-driven product builds.</p>
                        </Link>
                        <Link href="/blog/how-to-choose-a-software-development-company-checklist" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                            <p className="text-sm font-semibold text-white mb-1">How to Choose a Software Development Company</p>
                            <p className="text-xs text-gray-400">A 23-point checklist for vetting custom-build vendors.</p>
                        </Link>
                        <Link href="/blog/best-custom-software-development-companies-atlanta-2026" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                            <p className="text-sm font-semibold text-white mb-1">Best Custom Software Firms in Atlanta (2026)</p>
                            <p className="text-xs text-gray-400">A regional comparison of vendor capability, pricing, and engagement model.</p>
                        </Link>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            { q: "How does the build vs buy score work?", a: "The score starts at 50 and moves up or down based on six factors: SaaS spend, integrations needed, workflow features the SaaS can't deliver, data sensitivity, team size adjacent to the tool, and the 3-year TCO delta. Scores 80+ are clear build cases. 65-80 lean build. 40-65 hybrid. 25-40 lean buy. Below 25 stay on SaaS." },
                            { q: "What's a 'hybrid' approach mean?", a: "A hybrid keeps your SaaS for the commoditized parts (auth, basic CRUD, standard reports) and builds custom on top for the 2-3 workflow features that are uniquely yours. This is the right move when full custom is overkill but you've already paid for customization that doesn't quite fit." },
                            { q: "Where does the 9% annual SaaS inflation assumption come from?", a: "Industry surveys of mid-market SaaS renewals consistently show 8-12% annual price increases on enterprise and professional tiers. We use 9% as a defensible mid-point." },
                            { q: "Why does data sensitivity matter for build vs buy?", a: "When you're processing regulated PII, PHI, or financial data, the data plane is a strategic asset. Owning the data plane becomes much easier when you own the application. For high-sensitivity data, that risk transfer is worth points in the build column." },
                            { q: "Is this calculator biased toward building?", a: "It's tuned to be honest. We tell teams to stay on SaaS routinely — the calculator returns 'buy' or 'lean buy' verdicts whenever the team size, SaaS spend, or workflow uniqueness doesn't justify the upfront build cost." },
                        ].map((item) => (
                            <details key={item.q} className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-6 open:bg-[#0d1526]">
                                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-semibold text-white">
                                    <span>{item.q}</span>
                                    <ArrowRight className="w-4 h-4 text-sky-400 transition-transform group-open:rotate-90" />
                                </summary>
                                <p className="text-gray-400 mt-3 leading-relaxed text-sm">{item.a}</p>
                            </details>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 to-emerald-500/5 p-8 md:p-12 text-center">
                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                            Pressure-test your score on a 20-minute call
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl mx-auto">
                            If your score is anywhere above 40, the cheapest next move is 20 minutes on a call. We&apos;ll walk through your inputs, layer in the soft factors the score doesn&apos;t capture, and tell you whether a build is the right next step — or whether your situation is better solved by negotiating your SaaS contract.
                        </p>
                        <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
                            Or reach us directly: <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> · <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a>
                        </p>
                        <ConsultationCTA label="Book a 20-min Decision Call" source="build-vs-buy-calculator" service="Custom Business Software" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
