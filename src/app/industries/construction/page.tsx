import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { HardHat, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Construction Industry Software Development | QuantLab",
    description:
        "Custom software for construction & trades — proposal portals, QuickBooks/Xero sync, customer portals, mobile field tools. Built by contractor-vertical specialists.",
    alternates: { canonical: "https://quantlabusa.dev/industries/construction" },
    openGraph: {
        title: "Custom Software for Construction & Trades — Field-First, Office-Synced",
        description:
            "Contractor management software development — proposals, scheduling, QBO sync, and customer portals for residential and commercial trades.",
        url: "https://quantlabusa.dev/industries/construction",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Custom Software for Construction & Trades | QuantLab",
        description:
            "Field-first, office-synced contractor software. Proposals, QBO sync, customer portals. Founder-led builds.",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Construction Industry Software Development",
    name: "Custom Software Development for Construction & Trades",
    provider: {
        "@type": "Organization",
        name: "QuantLab Software Solutions",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Custom software development for construction, trades, and home services. Mobile-first proposal generation, customer portals, QuickBooks Online and Xero sync, project tracking, subcontractor management, and field-to-office data flow.",
    url: "https://quantlabusa.dev/industries/construction",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Can you integrate with QuickBooks Online and Xero?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Deep bi-directional sync of customers, vendors, items, and chart-of-accounts entries is part of most contractor builds. We shipped this for Bridgepointe Painting — see the case study for the reference architecture.",
            },
        },
        {
            "@type": "Question",
            name: "Does this work for estimators on a job site?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Mobile-first is the default for contractor builds — we assume the estimator is on a phone or tablet in a truck. The Northcrest Fence build runs the entire proposal flow from the field with branded PDF output before the estimator drives back to the office.",
            },
        },
        {
            "@type": "Question",
            name: "How long does a contractor platform build take?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "8 to 16 weeks for a typical first production release. Discovery and data modeling take 2 weeks, the bulk of the build runs 6 to 12, and we always ship a usable v1 before adding nice-to-haves.",
            },
        },
        {
            "@type": "Question",
            name: "Can you replace ServiceTitan, Jobber, or Housecall Pro?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We can build the parts those tools cover well, plus the parts they cover badly or not at all. The economic case is usually about per-seat fees and missing workflows — once you have more than a handful of users or a unique workflow, a custom build can pay back inside two years.",
            },
        },
    ],
};

export default function ConstructionIndustryPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="container mx-auto px-6 max-w-4xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-500">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/industries" className="hover:text-sky-400 transition-colors">Industries</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">Construction</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-amber-500 to-orange-400 mb-6">
                        <HardHat className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software for Construction & Trades — Field-First, Office-Synced
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Mobile-first proposal generation, customer portals, QuickBooks sync, and project tracking — built for fencing contractors, paint and remodeling crews, electricians, roofers, and the rest of the trades who lose deals to whoever quotes first.
                    </p>
                    <ConsultationCTA label="Scope a Construction Build" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Most contractor software was not built for contractors</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The typical residential or commercial contractor we work with is running four tools that do not talk to each other. A spreadsheet for leads. A Word template for proposals. A group chat for scheduling. QuickBooks Online for the books. When a quote goes out, the data lives in three of those places — but updates only one. Job changes get phoned in. Material orders happen via text. The accountant chases ghost transactions for two days every month.
                        </p>
                        <p>
                            Off-the-shelf field-service platforms — Jobber, Housecall Pro, ServiceTitan — solve part of it, then bolt on per-seat fees and force you into their template for proposals. The brand that took fifteen years to build gets replaced by a generic SaaS-look PDF. Premium contractors lose deals because the paperwork no longer matches the work.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build for trades operators</h2>
                    <ul className="space-y-3">
                        {[
                            "Mobile-first proposal portals — estimators quote from the truck, branded PDF lands in the homeowner's inbox before they walk back inside",
                            "Customer portals — project status, document storage, milestone visibility, and direct messaging",
                            "QuickBooks Online and Xero sync — customers, vendors, items, and chart-of-accounts bi-directional",
                            "Project tracking from estimate to invoice to completion with photo and document attachments",
                            "Subcontractor and crew management — assignments, certifications, insurance, and pay records",
                            "Service-area and city pages for local SEO across every metro you serve",
                            "Stripe payments wired directly into the QBO invoice so reconciliation is automatic",
                            "Admin portal so the owner sees lead pipeline, project status, and revenue on one screen",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Two reference contractor builds in production</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            <Link href="/work/northcrest-fence" className="text-amber-400 hover:underline">Northcrest Fence &amp; Gate</Link> is the reference build for residential trades. A unified Next.js 16 application: public marketing site with city/service-area SEO pages across Alpharetta, Roswell, Johns Creek, Milton, and Marietta; mobile-first multi-step estimate capture so estimators quote from the truck; admin portal for leads, proposals, gallery, and service areas; automated branded PDF proposal generation via @react-pdf/renderer; transactional email through Resend. Proposal turnaround dropped from 1–3 business days to under 30 minutes.
                        </p>
                        <p>
                            <Link href="/work/bridgepointe-painting" className="text-amber-400 hover:underline">Bridgepointe Painting</Link> is the reference for premium remodeling contractors with deep accounting needs. A bespoke Next.js/TypeScript platform with bi-directional QuickBooks Online sync of customers, vendors, items, and chart-of-accounts; customer portal at /portal; employee and subcontractor management; estimates and invoices generated in-app and mirrored to QBO; premium marketing site spanning nine Atlanta-metro service areas. Bookkeeping reconciliation time dropped from hours per week to near zero.
                        </p>
                        <p>
                            For commercial general contractors with complex estimating, see the <Link href="/work/contractor-estimating-proposal-engine" className="text-amber-400 hover:underline">contractor estimating &amp; proposal engine</Link> — input-driven rules engine that cut proposal time from four hours to twenty minutes with automatic CRM lead creation on send.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Methodology built for field operations</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            We spend the first week on the job site, not in the office. Watching how leads come in, how estimators quote, how the work gets scheduled, how invoices get cut. The data model gets shaped by that — not by a generic CRM template. Then we build in 2-week sprints with the owner reviewing each release before the field crew sees it.
                        </p>
                        <p>
                            Discovery sprint is paid separately at $2,500 so you can decide before committing to the full build. You come out with a wireframed UI, a database schema, and a phased estimate — useful even if you take it to another dev. Typical contractor platform build runs $18k–$65k depending on scope.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "Can you integrate with QuickBooks Online and Xero?",
                                a: "Yes. Deep bi-directional sync of customers, vendors, items, and chart-of-accounts entries is part of most contractor builds. We shipped this for Bridgepointe Painting — see the case study for the reference architecture.",
                            },
                            {
                                q: "Does this work for estimators on a job site?",
                                a: "Yes. Mobile-first is the default for contractor builds — we assume the estimator is on a phone or tablet in a truck. The Northcrest Fence build runs the entire proposal flow from the field with branded PDF output before the estimator drives back to the office.",
                            },
                            {
                                q: "How long does a contractor platform build take?",
                                a: "8 to 16 weeks for a typical first production release. Discovery and data modeling take 2 weeks, the bulk of the build runs 6 to 12, and we always ship a usable v1 before adding nice-to-haves.",
                            },
                            {
                                q: "Can you replace ServiceTitan, Jobber, or Housecall Pro?",
                                a: "We can build the parts those tools cover well, plus the parts they cover badly or not at all. The economic case is usually about per-seat fees and missing workflows — once you have more than a handful of users or a unique workflow, a custom build can pay back inside two years.",
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { slug: "custom-crm-development", title: "Custom CRM Development", desc: "Pipeline, lead capture, and proposal-to-invoice flow tailored to your trade." },
                            { slug: "payments-invoicing-licensing", title: "Payments & Invoicing", desc: "Stripe + QuickBooks sync wired into the project record from day one." },
                            { slug: "web-applications", title: "Web Applications", desc: "Customer portals, admin dashboards, and field-tool web apps." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-amber-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Quote faster. Run cleaner. Own the system.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz directly at (770) 652-1282 or book a 20-minute scope call to walk through your sales and ops flow. Founder-led from quote to handoff.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
