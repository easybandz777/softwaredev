import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Calculator, ArrowRight, Check, Zap, Shield, Clock } from "lucide-react";
import { CloudHostingCostCalculator } from "./CloudHostingCostCalculator";

export const metadata: Metadata = {
    title: "Cloud Hosting Cost Calculator — Monthly Cloud Spend | QUANT LAB USA",
    description:
        "Estimate your monthly and annual cloud bill from compute, storage, egress, and managed database inputs. Free, in-browser, no signup, no API calls.",
    alternates: { canonical: "https://quantlabusa.dev/calculators/cloud-hosting-cost-calculator" },
    openGraph: {
        title: "Cloud Hosting Cost Calculator | Monthly Cloud Spend | QUANT LAB USA",
        description:
            "Add compute instances, storage, egress, and a managed DB to see your estimated monthly and annual cloud spend — calculated live in your browser.",
        url: "https://quantlabusa.dev/calculators/cloud-hosting-cost-calculator",
        type: "website",
        siteName: "QUANT LAB USA",
    },
    twitter: {
        card: "summary_large_image",
        title: "Cloud Hosting Cost Calculator | Monthly Cloud Spend | QUANT LAB USA",
        description:
            "Add compute, storage, egress, and a managed DB to see your estimated monthly and annual cloud spend — calculated live in your browser.",
    },
};

const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Cloud Hosting Cost Calculator",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    url: "https://quantlabusa.dev/calculators/cloud-hosting-cost-calculator",
    description:
        "Interactive calculator that turns compute instances and hourly rate, storage, monthly egress, and a managed database into an itemized monthly and annual cloud-hosting estimate in real time.",
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
            name: "How is the monthly compute cost calculated?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We multiply the number of instances by their blended hourly rate and by the hours you expect them to run each month (730 hours represents a full month of always-on uptime). So three instances at $0.10/hour running 24/7 work out to 3 x 0.10 x 730, or about $219 per month. Drop the monthly hours to model autoscaled or scheduled workloads that are not running around the clock.",
            },
        },
        {
            "@type": "Question",
            name: "Why does data egress cost so much more than storage?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "On every major cloud, storing a gigabyte is cheap — often a couple of cents per month — while moving that gigabyte out to the public internet is billed separately and is frequently the single most surprising line on a cloud bill. This calculator prices egress per GB transferred out each month so you can see the difference. Inbound transfer is usually free, which is why we only ask for egress.",
            },
        },
        {
            "@type": "Question",
            name: "Is this estimate going to match my actual cloud invoice?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Treat it as a planning estimate, not a quote. Real invoices add load balancers, snapshots, IP addresses, inter-zone traffic, support plans, and request-level charges, and every provider and region prices the same resource differently. The point of this tool is to get you a defensible order-of-magnitude number and to show which line item dominates your spend before you commit to an architecture.",
            },
        },
        {
            "@type": "Question",
            name: "How can I bring a cloud bill that is growing faster than the product down?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The biggest wins usually come from right-sizing over-provisioned compute, adding a CDN or caching layer to cut egress, choosing reserved or committed-use pricing for steady baseline load, and moving cold data to cheaper storage tiers. These are exactly the levers we tune when we take on infrastructure and cost-optimization work — the goal is a bill that scales with usage rather than with neglect.",
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
        { "@type": "ListItem", position: 3, name: "Cloud Hosting Cost Calculator", item: "https://quantlabusa.dev/calculators/cloud-hosting-cost-calculator" },
    ],
};

export default function CloudHostingCostCalculatorPage() {
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
                        <li className="text-gray-300">Cloud Hosting Cost</li>
                    </ol>
                </nav>

                {/* Hero */}
                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-400 mb-6">
                        <Calculator className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Cloud Hosting Cost Calculator — Estimate Monthly Spend in 60 Seconds
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-3xl">
                        Plug in your compute instances, storage, monthly egress, and managed database. Get an itemized monthly and annual cloud-hosting estimate — and see at a glance which line item is quietly dominating your bill. Built by the team that ships <Link href="/services" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">production cloud infrastructure</Link> for a living.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-emerald-400" /><span>60-second estimate</span></div>
                        <div className="flex items-center gap-2"><Zap className="w-4 h-4 text-sky-400" /><span>Itemized monthly &amp; annual</span></div>
                        <div className="flex items-center gap-2"><Shield className="w-4 h-4 text-amber-400" /><span>100% in your browser — no API calls</span></div>
                    </div>
                </AnimatedSection>

                {/* Calculator widget */}
                <AnimatedSection className="mb-16">
                    <CloudHostingCostCalculator />
                </AnimatedSection>

                {/* Long-form SEO copy */}
                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        How this cloud hosting cost calculator works
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            A cloud bill is really four bills stacked on top of each other: compute, storage, data egress, and managed services. This calculator estimates each line separately and then sums them, so instead of one intimidating total you get a breakdown that tells you where the money actually goes. Everything runs locally in your browser as you type — no account, no API calls, no data leaving your machine.
                        </p>
                        <p>
                            <strong>Compute</strong> is the largest line for most application workloads. We multiply your instance count by a blended hourly rate and by the hours each instance runs per month. A full always-on month is roughly 730 hours, so lowering the monthly-hours input is how you model autoscaled, scheduled, or spot workloads that are not running 24/7. <strong>Storage</strong> is priced per GB-month at a rate you control, defaulting to a typical general-purpose SSD figure. <strong>Egress</strong> — data transferred out to the internet — is billed per GB and is the line that surprises teams most often. <strong>Managed database</strong> is entered as a flat monthly figure because hosted database pricing varies so widely by engine, size, and replica count that a single field is more honest than a fake formula.
                        </p>
                        <h3 className="text-xl font-bold text-white mt-8 mb-3">Why egress is the line to watch</h3>
                        <p>
                            Storing a gigabyte costs a couple of cents a month. Moving that same gigabyte out to your users can cost ten to twenty times as much, and unlike compute it scales directly with traffic and product success. A viral launch or a chatty mobile client can multiply egress overnight while every other line stays flat. That is why a content-delivery network and a sensible caching strategy are among the highest-leverage cost decisions you can make — they turn repeat egress into cache hits you do not pay full freight for.
                        </p>
                        <h3 className="text-xl font-bold text-white mt-8 mb-3">What this calculator deliberately leaves out</h3>
                        <p>
                            This is a planning estimate, not an invoice simulator. Real bills add load balancers, public IP addresses, snapshots and backups, inter-availability-zone traffic, NAT gateways, per-request charges, logging and monitoring, and a support plan on top. Pricing also differs by provider and region for the exact same resource. The simplifications are what make this fast and useful for an architecture gut-check; when you need a number you can put in a budget, we model the real line items against a specific provider and region. Our <Link href="/blog" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">engineering blog</Link> goes deeper on the trade-offs, and the <Link href="/glossary" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">glossary</Link> explains the terms if any of this is new.
                        </p>
                        <h3 className="text-xl font-bold text-white mt-8 mb-3">When cloud cost becomes an engineering problem</h3>
                        <p>
                            There is a predictable point where the cloud bill stops being a finance line item and becomes an engineering project: when it grows faster than usage. That is usually a signal of over-provisioned compute, missing caching, on-demand pricing for steady baseline load, or hot storage holding cold data. Right-sizing, reserved-capacity commitments, a CDN, and tiered storage routinely cut a bill by a third or more without touching the product. Owning that optimization work — and the infrastructure decisions that prevent the sprawl in the first place — is part of what our <Link href="/services" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">software development practice</Link> does.
                        </p>
                    </div>
                </AnimatedSection>

                {/* What you'll get */}
                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What you&apos;ll get</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            "An itemized monthly estimate split across compute, storage, egress, and managed DB",
                            "The annual figure, so budgeting conversations start from the right number",
                            "A clear view of which line item dominates your spend",
                            "Adjustable monthly compute hours to model autoscaled or scheduled workloads",
                            "A plain-English read on where your biggest savings likely sit",
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
                        <Link href="/calculators/developer-salary-vs-agency-calculator" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                            <p className="text-sm font-semibold text-white mb-1">In-House Dev vs Agency Calculator</p>
                            <p className="text-xs text-gray-400">Compare the true cost of an in-house engineer against an agency over 1–3 years.</p>
                        </Link>
                        <Link href="/calculators/saas-pricing-calculator" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                            <p className="text-sm font-semibold text-white mb-1">SaaS Pricing Calculator</p>
                            <p className="text-xs text-gray-400">Turn your pricing tiers into live MRR, ARR, and blended ARPU.</p>
                        </Link>
                        <Link href="/tools" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                            <p className="text-sm font-semibold text-white mb-1">All Free Tools &amp; Calculators</p>
                            <p className="text-xs text-gray-400">Browse the full set of free estimators built by QUANT LAB USA.</p>
                        </Link>
                        <Link href="/services" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                            <p className="text-sm font-semibold text-white mb-1">Cloud Infrastructure &amp; Cost Optimization</p>
                            <p className="text-xs text-gray-400">Right-sizing, caching, reserved capacity — a bill that scales with usage.</p>
                        </Link>
                    </div>
                </AnimatedSection>

                {/* FAQ */}
                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "How is the monthly compute cost calculated?",
                                a: "We multiply the number of instances by their blended hourly rate and by the hours you expect them to run each month (730 hours represents a full month of always-on uptime). So three instances at $0.10/hour running 24/7 work out to 3 x 0.10 x 730, or about $219 per month. Drop the monthly hours to model autoscaled or scheduled workloads that are not running around the clock.",
                            },
                            {
                                q: "Why does data egress cost so much more than storage?",
                                a: "On every major cloud, storing a gigabyte is cheap — often a couple of cents per month — while moving that gigabyte out to the public internet is billed separately and is frequently the single most surprising line on a cloud bill. This calculator prices egress per GB transferred out each month so you can see the difference. Inbound transfer is usually free, which is why we only ask for egress.",
                            },
                            {
                                q: "Is this estimate going to match my actual cloud invoice?",
                                a: "Treat it as a planning estimate, not a quote. Real invoices add load balancers, snapshots, IP addresses, inter-zone traffic, support plans, and request-level charges, and every provider and region prices the same resource differently. The point of this tool is to get you a defensible order-of-magnitude number and to show which line item dominates your spend before you commit to an architecture.",
                            },
                            {
                                q: "How can I bring a cloud bill that is growing faster than the product down?",
                                a: "The biggest wins usually come from right-sizing over-provisioned compute, adding a CDN or caching layer to cut egress, choosing reserved or committed-use pricing for steady baseline load, and moving cold data to cheaper storage tiers. These are exactly the levers we tune when we take on infrastructure and cost-optimization work — the goal is a bill that scales with usage rather than with neglect.",
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
                            Turn a runaway cloud bill into one that scales with usage
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl mx-auto">
                            If your spend is climbing faster than your traffic — over-provisioned compute, surprise egress, on-demand pricing for steady load — the spreadsheet stops being enough. Book a 20-minute call and we&apos;ll pressure-test your architecture and find the line items worth optimizing first.
                        </p>
                        <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
                            Or reach out directly: <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a>
                        </p>
                        <ConsultationCTA label="Book a 20-min Cloud Cost Review" source="cloud-hosting-cost-calculator" service="Cloud Infrastructure" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
