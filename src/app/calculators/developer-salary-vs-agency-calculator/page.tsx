import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Calculator, ArrowRight, Check, Zap, Shield, Clock } from "lucide-react";
import { DeveloperSalaryVsAgencyCalculator } from "./DeveloperSalaryVsAgencyCalculator";

export const metadata: Metadata = {
    title: "In-House Dev vs Agency Cost Calculator | QUANT LAB USA",
    description:
        "Compare the true cost of an in-house developer (salary plus overhead) against an agency or contractor over 1–3 years, with a clear breakeven. Free, in-browser.",
    alternates: { canonical: "https://quantlabusa.dev/calculators/developer-salary-vs-agency-calculator" },
    openGraph: {
        title: "In-House Dev vs Agency Cost Calculator | QUANT LAB USA",
        description:
            "Compare a fully-loaded in-house developer against an agency or contractor over 1–3 years and see exactly where the breakeven sits — calculated live in your browser.",
        url: "https://quantlabusa.dev/calculators/developer-salary-vs-agency-calculator",
        type: "website",
        siteName: "QUANT LAB USA",
    },
    twitter: {
        card: "summary_large_image",
        title: "In-House Dev vs Agency Cost Calculator | QUANT LAB USA",
        description:
            "Compare a fully-loaded in-house developer against an agency or contractor over 1–3 years and see exactly where the breakeven sits.",
    },
};

const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "In-House Developer vs Agency Cost Calculator",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    url: "https://quantlabusa.dev/calculators/developer-salary-vs-agency-calculator",
    description:
        "Interactive calculator that compares the fully-loaded cost of an in-house developer (base salary times an overhead multiplier) against an agency or contractor (blended hourly rate times monthly hours) over one to three years and finds the breakeven.",
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
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
            name: "Why multiply a developer's salary by an overhead factor?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Base salary is only part of what an employee costs. Payroll taxes, health insurance, paid time off, equipment, software licenses, office or remote stipends, recruiting, and management time all stack on top. A common rule of thumb puts the fully-loaded cost of an employee at roughly 1.25 to 1.4 times base salary, and higher once you factor in recruiting and ramp-up. The multiplier in this calculator lets you set that factor to match your own situation.",
            },
        },
        {
            "@type": "Question",
            name: "How is the breakeven between in-house and agency calculated?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We compute the fully-loaded annual cost of the in-house developer and the annual cost of the agency engagement (blended hourly rate times monthly hours times twelve), then compare them across one, two, and three years. The breakeven is the point where cumulative spend on the two options crosses. If the agency is more expensive per year, the in-house hire pays back its higher fixed commitment over time; if the agency is cheaper for the hours you actually need, it may never cross.",
            },
        },
        {
            "@type": "Question",
            name: "Does the cheaper option on this calculator mean it is the right choice?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No — cost is one input among several. An in-house hire builds durable institutional knowledge and is always available, but carries fixed cost, management overhead, and hiring risk. An agency or contractor gives you senior skills on demand, no long-term commitment, and faster starts, but the relationship ends when the engagement does. The right answer depends on how steady the work is, how critical the knowledge is to retain, and how quickly you need to ship. This tool sizes the money; the judgment is yours.",
            },
        },
        {
            "@type": "Question",
            name: "When does a hybrid of in-house and agency make the most sense?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Very often. A common pattern is to bring an agency in to design the architecture, ship the first production version fast, and establish the standards, then hand off to an in-house team for steady-state maintenance and incremental work. That captures the agency's speed at the start and the cost efficiency of employees over the long run. We are frequently the agency in that arrangement, and we build the handoff documentation that makes it work rather than locking you in.",
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
        { "@type": "ListItem", position: 3, name: "In-House Dev vs Agency Calculator", item: "https://quantlabusa.dev/calculators/developer-salary-vs-agency-calculator" },
    ],
};

export default function DeveloperSalaryVsAgencyCalculatorPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <div className="container mx-auto px-6 max-w-5xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">&rsaquo;</li>
                        <li className="text-gray-300">Calculators</li>
                        <li aria-hidden="true" className="text-gray-700">&rsaquo;</li>
                        <li className="text-gray-300">In-House Dev vs Agency</li>
                    </ol>
                </nav>

                {/* Hero */}
                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-400 mb-6">
                        <Calculator className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        In-House Developer vs Agency — Compare the Real Cost
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-3xl">
                        Enter a developer&apos;s salary and your overhead multiplier, then an agency&apos;s blended hourly rate and the hours you need each month. See the fully-loaded cost of each over one, two, and three years — and exactly where the breakeven sits. Built by an <Link href="/services" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">agency that ships production software</Link> and tells you the honest trade-off.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-emerald-400" /><span>60-second comparison</span></div>
                        <div className="flex items-center gap-2"><Zap className="w-4 h-4 text-sky-400" /><span>1, 2 &amp; 3-year view + breakeven</span></div>
                        <div className="flex items-center gap-2"><Shield className="w-4 h-4 text-amber-400" /><span>100% in your browser</span></div>
                    </div>
                </AnimatedSection>

                {/* Calculator widget */}
                <AnimatedSection className="mb-16">
                    <DeveloperSalaryVsAgencyCalculator />
                </AnimatedSection>

                {/* Long-form SEO copy */}
                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        How this in-house vs agency calculator works
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            The build-it-with-employees versus hire-an-agency decision usually gets made on a gut feel about the sticker price — a developer&apos;s salary against an agency&apos;s hourly rate. That comparison is misleading because the two numbers are not measuring the same thing. This calculator puts them on equal footing: it computes the fully-loaded annual cost of an in-house developer and the annual cost of an agency engagement, then compares cumulative spend across one, two, and three years. Everything runs in your browser as you type.
                        </p>
                        <p>
                            For the <strong>in-house</strong> side we take base salary and multiply it by an overhead factor you control. Base pay is rarely more than 70–80% of what an employee actually costs once you add payroll taxes, benefits, paid time off, equipment, software, recruiting, and the management time the role consumes. A multiplier of 1.3 is a reasonable starting point; set it to match your own loaded cost. For the <strong>agency</strong> side we take a blended hourly rate and multiply it by the hours you genuinely need each month, then annualize. The breakeven is simply the point where the two cumulative lines cross.
                        </p>
                        <h3 className="text-xl font-bold text-white mt-8 mb-3">Why the overhead multiplier changes everything</h3>
                        <p>
                            Teams routinely under-count the cost of an employee by a third or more, which makes in-house look cheaper than it is. The multiplier exists to correct that. When you set it honestly, the agency&apos;s higher headline rate often closes most of the gap — because that rate already bundles benefits, downtime, tooling, and the fact that you only pay for the hours you use. The flip side is that a full-time employee working steady 40-hour weeks on the same rate would be far more expensive as a contractor. The right comparison is always loaded employee cost against the hours you actually need.
                        </p>
                        <h3 className="text-xl font-bold text-white mt-8 mb-3">Cost is not the whole decision</h3>
                        <p>
                            This tool sizes the money, but money is one factor. An in-house engineer accrues institutional knowledge, is available for whatever comes up, and aligns tightly with your team — at the price of fixed cost, hiring risk, ramp time, and management overhead. An agency or senior contractor gives you experienced skills on demand, a faster start, and no long-term commitment, but the relationship is bounded by the engagement. The steadier and more proprietary the work, the more an employee makes sense; the more bursty or specialized it is, the more an agency does. Our <Link href="/blog" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">blog</Link> digs into how to make that call, and the <Link href="/glossary" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">glossary</Link> covers the terms.
                        </p>
                        <h3 className="text-xl font-bold text-white mt-8 mb-3">The hybrid almost everyone lands on</h3>
                        <p>
                            In practice the answer is frequently both. A high-leverage pattern is to bring an agency in to set the architecture, ship the first production release quickly, and establish the engineering standards, then transition to an in-house team for steady-state ownership. You get the agency&apos;s speed and senior judgment up front and the cost efficiency of employees over the long haul. We are often the agency in exactly that arrangement, and we write the handoff documentation that makes the transition clean rather than building in lock-in. If that sounds like your situation, our <Link href="/services" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">development services</Link> are structured around it.
                        </p>
                    </div>
                </AnimatedSection>

                {/* What you'll get */}
                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What you&apos;ll get</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            "Fully-loaded in-house cost, with an overhead multiplier you control",
                            "Annual agency cost from a blended hourly rate and the hours you actually need",
                            "Side-by-side totals across one, two, and three years",
                            "A clear breakeven point — including when there isn't one",
                            "A plain-English read on which option the numbers favor and why",
                            "Zero network calls — every figure is computed locally in your browser",
                        ].map((item) => (
                            <div key={item} className="flex gap-3 rounded-xl border border-white/5 bg-[#0d1526]/60 p-4">
                                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                {/* Related reading */}
                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related reading &amp; tools</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Link href="/calculators/cloud-hosting-cost-calculator" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                            <p className="text-sm font-semibold text-white mb-1">Cloud Hosting Cost Calculator</p>
                            <p className="text-xs text-gray-400">Estimate the monthly cloud spend behind whatever the team is building.</p>
                        </Link>
                        <Link href="/calculators/saas-ltv-cac-calculator" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                            <p className="text-sm font-semibold text-white mb-1">SaaS LTV:CAC Calculator</p>
                            <p className="text-xs text-gray-400">Check whether the unit economics justify the engineering spend at all.</p>
                        </Link>
                        <Link href="/tools" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                            <p className="text-sm font-semibold text-white mb-1">All Free Tools &amp; Calculators</p>
                            <p className="text-xs text-gray-400">Browse the full set of free estimators built by QUANT LAB USA.</p>
                        </Link>
                        <Link href="/services" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                            <p className="text-sm font-semibold text-white mb-1">Custom Software Development</p>
                            <p className="text-xs text-gray-400">Architecture, first release, and a clean handoff — the hybrid done right.</p>
                        </Link>
                    </div>
                </AnimatedSection>

                {/* FAQ */}
                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "Why multiply a developer's salary by an overhead factor?",
                                a: "Base salary is only part of what an employee costs. Payroll taxes, health insurance, paid time off, equipment, software licenses, office or remote stipends, recruiting, and management time all stack on top. A common rule of thumb puts the fully-loaded cost of an employee at roughly 1.25 to 1.4 times base salary, and higher once you factor in recruiting and ramp-up. The multiplier in this calculator lets you set that factor to match your own situation.",
                            },
                            {
                                q: "How is the breakeven between in-house and agency calculated?",
                                a: "We compute the fully-loaded annual cost of the in-house developer and the annual cost of the agency engagement (blended hourly rate times monthly hours times twelve), then compare them across one, two, and three years. The breakeven is the point where cumulative spend on the two options crosses. If the agency is more expensive per year, the in-house hire pays back its higher fixed commitment over time; if the agency is cheaper for the hours you actually need, it may never cross.",
                            },
                            {
                                q: "Does the cheaper option on this calculator mean it is the right choice?",
                                a: "No — cost is one input among several. An in-house hire builds durable institutional knowledge and is always available, but carries fixed cost, management overhead, and hiring risk. An agency or contractor gives you senior skills on demand, no long-term commitment, and faster starts, but the relationship ends when the engagement does. The right answer depends on how steady the work is, how critical the knowledge is to retain, and how quickly you need to ship. This tool sizes the money; the judgment is yours.",
                            },
                            {
                                q: "When does a hybrid of in-house and agency make the most sense?",
                                a: "Very often. A common pattern is to bring an agency in to design the architecture, ship the first production version fast, and establish the standards, then hand off to an in-house team for steady-state maintenance and incremental work. That captures the agency's speed at the start and the cost efficiency of employees over the long run. We are frequently the agency in that arrangement, and we build the handoff documentation that makes it work rather than locking you in.",
                            },
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

                {/* Bottom CTA */}
                <AnimatedSection>
                    <div className="rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 to-emerald-500/5 p-8 md:p-12 text-center">
                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                            Not sure whether to hire or partner? Let&apos;s size it together
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl mx-auto">
                            The numbers are a starting point — the right call depends on how steady the work is and how fast you need to ship. Book a 20-minute call and we&apos;ll walk through your specific situation honestly, including when an agency is the wrong answer.
                        </p>
                        <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
                            Or reach out directly: <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a>
                        </p>
                        <ConsultationCTA label="Book a 20-min Build-vs-Hire Call" source="developer-salary-vs-agency-calculator" service="Custom Software Development" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
