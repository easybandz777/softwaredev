import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Calculator, ArrowRight, Check, Zap, Shield, Clock } from "lucide-react";
import { CrmRoiCalculator } from "./CrmRoiCalculator";

export const metadata: Metadata = {
    title: "Custom CRM ROI Calculator | Salesforce vs Build | QUANT LAB",
    description:
        "Model a custom CRM vs Salesforce or HubSpot over 3 years. Payback, savings, productivity hours, recovered revenue — calculated live.",
    alternates: { canonical: "https://quantlabusa.dev/calculators/crm-roi" },
    openGraph: {
        title: "Custom CRM ROI Calculator | Salesforce vs Build | QUANT LAB",
        description:
            "Model a custom CRM vs Salesforce or HubSpot over 3 years. Payback, savings, productivity hours, recovered revenue.",
        url: "https://quantlabusa.dev/calculators/crm-roi",
        type: "website",
        siteName: "QUANT LAB USA",
    },
    twitter: {
        card: "summary_large_image",
        title: "Custom CRM ROI Calculator | Salesforce vs Build | QUANT LAB",
        description:
            "Model a custom CRM vs Salesforce or HubSpot over 3 years. Payback, savings, productivity hours, recovered revenue.",
    },
};

const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Custom CRM ROI Calculator",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    url: "https://quantlabusa.dev/calculators/crm-roi",
    description:
        "Interactive calculator that models a 3-year TCO comparison between Salesforce or HubSpot and a custom-built CRM, including payback period, productivity hours saved, and recovered revenue from reduced deal leakage.",
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
            name: "Where do the build cost assumptions come from?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We use a per-seat build complexity model anchored at $1,800-$3,200 per active seat with a $45,000 floor for the smallest builds. That range covers a production-grade pipeline UI, custom data model, role-based access, reporting dashboards, and email/calendar/integration glue. It's tuned from a decade of CRM builds at QuantLab USA. The final scope is always validated in a 20-minute call.",
            },
        },
        {
            "@type": "Question",
            name: "Why do you assume 9% annual license inflation on the SaaS side?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Salesforce list pricing has risen roughly 9 percent annually over the last several years, with HubSpot Sales Hub Professional and Enterprise tracking similar increases. We use 9% as a defensible mid-point so your model isn't unfairly biased toward custom. Your renewal quote will tell you whether your specific seat tier runs higher or lower.",
            },
        },
        {
            "@type": "Question",
            name: "How is the productivity hours saved calculated?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We assume a fit-to-purpose CRM saves about 50% of the hours your reps spend over a 3-hour-per-week baseline of necessary CRM work. The valuation per saved hour uses $65/hr — a blended sales/ops fully-loaded rate that's conservative compared to most rep total comp. This is the slice of the ROI story that gets ignored by license-cost-only comparisons.",
            },
        },
        {
            "@type": "Question",
            name: "Is the recovered revenue number defensible?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We assume a custom CRM tuned to your sales motion recovers 40% of the deals currently leaking from pipeline friction. That's grounded in pipeline-leakage research from RAIN Group and Forrester, which puts typical poor-process leakage at 10-20% of pipeline value. If your leakage number is a guess, run the calculator twice with low and high inputs to see your sensitivity.",
            },
        },
        {
            "@type": "Question",
            name: "What's not included in this CRM ROI estimate?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We deliberately don't model: data migration cost (one-time, scope-dependent), training cost on the new system, parallel-run period (typical 30-60 days), or strategic factors like vendor lock-in and data sovereignty. The PDF version of this output adds those as a sensitivity table. The 20-minute call is where we tune each of these to your situation.",
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
        { "@type": "ListItem", position: 3, name: "Custom CRM ROI Calculator", item: "https://quantlabusa.dev/calculators/crm-roi" },
    ],
};

export default function CrmRoiCalculatorPage() {
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
                        <li className="text-gray-300">Custom CRM ROI</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-400 mb-6">
                        <Calculator className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom CRM ROI Calculator — Salesforce vs Custom Build, In 60 Seconds
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-3xl">
                        Plug in your seat count, your real CRM bill, and how much time your reps actually spend in the system. Get a defensible 3-year TCO comparison between staying on Salesforce or HubSpot and shipping a <Link href="/services/custom-crm-development" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">custom CRM</Link> tuned to your sales motion — with payback period, recovered productivity, and recovered revenue from reduced deal leakage.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-emerald-400" /><span>60-second estimate</span></div>
                        <div className="flex items-center gap-2"><Zap className="w-4 h-4 text-sky-400" /><span>Based on real CRM build data</span></div>
                        <div className="flex items-center gap-2"><Shield className="w-4 h-4 text-amber-400" /><span>No email required to see the number</span></div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <CrmRoiCalculator />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        Why the CRM build-vs-buy decision keeps landing on RevOps desks
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            The first reason CRM TCO conversations end badly is that they&apos;re framed wrong. Comparing a Salesforce seat to a custom CRM build on per-month sticker price alone is like comparing rent to a mortgage on the monthly payment line. The interesting numbers are downstream: license fee inflation, the hours your reps waste in a UI that doesn&apos;t match how they actually sell, the deals that leak when the CRM is too painful to update, and the strategic exposure of running your revenue stack on someone else&apos;s platform.
                        </p>
                        <p>
                            This calculator handles all four. The 3-year TCO line accounts for ~9% annual license inflation (the multi-year trend for both <Link href="/blog/custom-crm-vs-salesforce-vs-hubspot-2026" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">Salesforce and HubSpot</Link>) plus an 18% annual maintenance assumption on the custom side, which is in line with industry benchmarks for production SaaS products. The productivity line values saved hours at $65/hr — conservatively below most fully-loaded sales rep comp. The recovered revenue line uses a 40% recovery rate on leaked pipeline, anchored on RAIN Group and Forrester research on CRM-driven pipeline friction.
                        </p>
                        <p>
                            If your number comes back close to a wash, the decision usually gets made by softer factors. Vendor lock-in. Data sovereignty when your compliance team starts asking where customer PII actually lives. Customization debt — the apex predator of every Salesforce org we&apos;ve audited. The ability to ship a new workflow in a week instead of a quarter. These don&apos;t appear in the headline TCO but they&apos;re the reason ops leaders eventually call us.
                        </p>
                        <h3 className="text-xl font-bold text-white mt-8 mb-3">When custom CRM is the right call</h3>
                        <p>
                            Three signals reliably predict that a custom build will outperform a SaaS CRM over a 3-5 year window. First, when your sales motion is unique enough that you&apos;ve already paid a Salesforce or HubSpot consultant to build out custom objects, custom flows, and custom Apex/operations hub bundles to make the platform fit. At that point you&apos;ve effectively built a custom CRM on top of a per-seat SaaS — without owning the source code or the data model. Second, when your seat count is over ~30 and growing, the per-seat economics of any major CRM platform start working against you. Third, when integration depth is real — multiple inbound and outbound systems that need to talk to your sales data — you usually win more by owning the integration layer than by paying for middleware (<Link href="/services/custom-business-software" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">a problem we solve with custom business software</Link>) or yet another connector subscription.
                        </p>
                        <h3 className="text-xl font-bold text-white mt-8 mb-3">When you should stay on Salesforce or HubSpot</h3>
                        <p>
                            Custom isn&apos;t always the answer and we&apos;ll tell you that on the call. If your sales motion is commoditized — inbound demo requests, single product, simple stage gates — you&apos;re not getting much upside from a custom build. If your seat count is under 10, the headcount math rarely works. If your team can&apos;t articulate what&apos;s wrong with your current CRM beyond &ldquo;it feels expensive,&rdquo; a workflow audit on your existing tool is almost always cheaper. We do those too — see the <Link href="/blog/custom-crm-development-guide" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">custom CRM development guide</Link> and read the section on &ldquo;audit before you build.&rdquo;
                        </p>
                        <h3 className="text-xl font-bold text-white mt-8 mb-3">How we built the productivity number</h3>
                        <p>
                            The hours-saved-per-rep number assumes 50% of CRM hours above a 3-hour-per-week baseline are recoverable with a fit-to-purpose UI. That figure comes from a half-decade of pre/post measurements on our own builds — when reps stop fighting a generic UI and start working in a screen designed around their actual stage gates, the easiest hour to find is the 30-60 minutes they spend each day reformatting notes, hunting for the right field, or waiting on a sync. Even if you discount this number by half, it usually still tips the model. That&apos;s the point.
                        </p>
                        <h3 className="text-xl font-bold text-white mt-8 mb-3">How we built the leakage number</h3>
                        <p>
                            Deal leakage is the slipperiest input — most teams have never measured it. Industry research from RAIN Group, Forrester, and HubSpot&apos;s own data puts typical pipeline leakage from CRM friction in the 10-20% range for mid-market B2B. We assume a custom CRM recovers 40% of that leakage by making it easier to log activity, by removing dead-end fields, and by enforcing follow-up flows the platform CRMs make optional. If you don&apos;t trust that number, set the leakage % to zero — the calculator will still tell you a useful story.
                        </p>
                        <h3 className="text-xl font-bold text-white mt-8 mb-3">What this calculator deliberately doesn&apos;t model</h3>
                        <p>
                            Data migration cost, training time on the new tool, the parallel-run period most teams need to switch over, and the qualitative cost of vendor lock-in. All four of those tilt the math toward staying put in the short term and toward custom over the long run. Our 20-minute scoping call adds these as a sensitivity layer — you&apos;ll leave with a build cost range, a payback range, and a realistic timeline anchored on your specific compliance and team constraints. Skip to the bottom of the page or jump straight to <Link href="/contact" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">the contact page</Link> to grab a slot.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What you&apos;ll get</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            "A 3-year TCO comparison between your current CRM and a custom build",
                            "A defensible payback period in months",
                            "Productivity hours saved per year + dollar value at $65/hr",
                            "Recovered revenue per year from reduced deal leakage",
                            "A green/yellow/red verdict you can defend in front of leadership",
                            "A PDF breakdown + boardroom slide template (optional — gated by email)",
                        ].map((item) => (
                            <div key={item} className="flex gap-3 rounded-xl border border-white/5 bg-[#0d1526]/60 p-4">
                                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526]/80 to-[#0a0f1e]/80 p-8 md:p-10">
                        <p className="text-xs uppercase tracking-widest text-emerald-400 mb-3">Real Project · Recent Build</p>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            A 40-seat field-services team replaced Salesforce with a custom workflow CRM
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Salesforce Enterprise at $165/seat/month plus a half-time admin and a Conga + Mulesoft stack was running this customer ~$132,000/yr. Their actual workflow needed five fields and four stage transitions per deal — almost everything else in the platform was unused. We built a CRM tuned to their motion in 11 weeks. Year-one all-in cost was 38% under their Salesforce baseline. Year three projects 61% under. Most importantly, their reps stopped duct-taping Google Sheets together because the new UI matched how they actually sold. Read more about how we approach <Link href="/services/custom-crm-development" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">custom CRM development</Link>.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/5">
                            <div>
                                <p className="text-2xl font-bold text-white">11 weeks</p>
                                <p className="text-xs text-gray-400 uppercase tracking-wide">Build to live</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-white">61% TCO drop</p>
                                <p className="text-xs text-gray-400 uppercase tracking-wide">Year-3 vs Salesforce</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-white">~6 hrs/wk/rep</p>
                                <p className="text-xs text-gray-400 uppercase tracking-wide">CRM time saved</p>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related reading</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Link href="/blog/custom-crm-vs-salesforce-vs-hubspot-2026" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                            <p className="text-sm font-semibold text-white mb-1">Custom CRM vs Salesforce vs HubSpot (2026)</p>
                            <p className="text-xs text-gray-400">A side-by-side decision framework for ops leaders rebuilding their CRM stack.</p>
                        </Link>
                        <Link href="/blog/custom-crm-development-guide" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                            <p className="text-sm font-semibold text-white mb-1">The Custom CRM Development Guide</p>
                            <p className="text-xs text-gray-400">Build phases, scope buckets, and the ops-leader-friendly version of &ldquo;what does it cost.&rdquo;</p>
                        </Link>
                        <Link href="/services/custom-business-software" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                            <p className="text-sm font-semibold text-white mb-1">Custom Business Software</p>
                            <p className="text-xs text-gray-400">Beyond CRM — ops dashboards, internal tools, custom data layers.</p>
                        </Link>
                        <Link href="/calculators/build-vs-buy" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                            <p className="text-sm font-semibold text-white mb-1">Build vs Buy Calculator</p>
                            <p className="text-xs text-gray-400">A broader build-vs-buy scoring tool when your decision isn&apos;t just about CRM.</p>
                        </Link>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            { q: "Where do the build cost assumptions come from?", a: "We use a per-seat build complexity model anchored at $1,800-$3,200 per active seat with a $45,000 floor for the smallest builds. That range covers a production-grade pipeline UI, custom data model, role-based access, reporting dashboards, and email/calendar/integration glue. It's tuned from a decade of CRM builds at QuantLab USA. The final scope is always validated in a 20-minute call." },
                            { q: "Why do you assume 9% annual license inflation on the SaaS side?", a: "Salesforce list pricing has risen roughly 9% annually over the last several years, with HubSpot Sales Hub Professional and Enterprise tracking similar increases. We use 9% as a defensible mid-point so your model isn't unfairly biased toward custom. Your renewal quote will tell you whether your specific seat tier runs higher or lower." },
                            { q: "How is the productivity hours saved calculated?", a: "We assume a fit-to-purpose CRM saves about 50% of the hours your reps spend over a 3-hour-per-week baseline of necessary CRM work. The valuation per saved hour uses $65/hr — a blended sales/ops fully-loaded rate that's conservative compared to most rep total comp." },
                            { q: "Is the recovered revenue number defensible?", a: "We assume a custom CRM tuned to your sales motion recovers 40% of the deals currently leaking from pipeline friction. That's grounded in pipeline-leakage research from RAIN Group and Forrester, which puts typical poor-process leakage at 10-20% of pipeline value." },
                            { q: "What's not included in this CRM ROI estimate?", a: "We deliberately don't model: data migration cost (one-time, scope-dependent), training cost on the new system, parallel-run period (typical 30-60 days), or strategic factors like vendor lock-in and data sovereignty. The PDF version of this output adds those as a sensitivity table." },
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
                            Talk through your number on a 20-minute CRM call
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl mx-auto">
                            If your calculator output is green or even yellow, the next step is a 20-minute scoping call. We&apos;ll walk through your seat count, your real workflow, and the 5 places your current CRM is silently costing you the most — and you&apos;ll leave with a defensible build cost and timeline for your next leadership meeting.
                        </p>
                        <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
                            Or reach out directly: <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> · <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a>
                        </p>
                        <ConsultationCTA label="Book a 20-min CRM Call" source="crm-roi-calculator" service="Custom CRM Development" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
