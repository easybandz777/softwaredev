import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { MapPin, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Atlanta Software Developer & Pen Testing | QUANT LAB USA",
    description:
        "Atlanta custom software development for fintech, logistics, and SaaS — plus penetration testing. Georgia-based, founder-led. Call (770) 652-1282.",
    alternates: { canonical: "https://quantlabusa.dev/software-development-atlanta-ga" },
    openGraph: {
        title: "Atlanta Software Developer & Pen Testing | QUANT LAB USA",
        description:
            "Atlanta custom software development for fintech, logistics, and SaaS — plus penetration testing.",
        url: "https://quantlabusa.dev/software-development-atlanta-ga",
        type: "article",
    },
    twitter: {
        card: "summary",
        title: "Atlanta Software Developer & Pen Testing | QUANT LAB USA",
        description:
            "Atlanta custom software development for fintech, logistics, and SaaS — plus penetration testing.",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Penetration Testing",
    name: "Custom Software Development & Penetration Testing in Atlanta, GA",
    provider: { "@id": "https://quantlabusa.dev/#org" },
    areaServed: { "@type": "City", name: "Atlanta" },
    description:
        "Fintech-grade Stripe, logistics and operations dashboards, plus full-scope penetration testing for Atlanta clients.",
    url: "https://quantlabusa.dev/software-development-atlanta-ga",
};

const services = [
    {
        title: "Fintech-grade Stripe & Licensing Systems",
        desc: "Subscription billing, metered usage, multi-tenant entitlements, dispute workflows.",
    },
    {
        title: "Logistics & Operations Dashboards",
        desc: "Real-time dispatch, freight tracking, and warehouse inventory tools that consolidate legacy WMS feeds.",
    },
    {
        title: "Penetration Testing",
        desc: "Web app, network, wireless, Active Directory, and MITRE ATT&CK engagements before your next SOC 2 audit.",
    },
];

const faqs = [
    {
        q: "Do you work with Atlanta fintech and payment companies?",
        a: "Yes — Stripe Connect, ACH, and PCI-adjacent architectures are core to our practice.",
    },
    {
        q: "Can you support a SOC 2 readiness window?",
        a: "Yes — pen testing reports map to SOC 2 CC controls and customer due-diligence questionnaires.",
    },
    {
        q: "Where do you meet Atlanta clients?",
        a: "We travel into ATL regularly and run most discovery remotely with on-site visits as needed.",
    },
];

export default function AtlantaLandingPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />

            <div className="container mx-auto px-6 max-w-4xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-500">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/services" className="hover:text-sky-400 transition-colors">Services</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">Atlanta, GA</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-blue-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development & Penetration Testing in Atlanta, GA
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Atlanta is the southeast&apos;s fintech and logistics capital — Transaction Alley moves over 70% of US card payments. That density of payment processors, supply-chain operators, and venture-backed SaaS creates two constant needs: serious custom software, and serious security around it.
                    </p>
                    <ConsultationCTA label="Talk Through an Atlanta Build" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA delivers both, from a Georgia HQ just down I-75. Metro Atlanta sits at the center of distribution networks reaching the entire eastern seaboard, and our clients there typically need the same things: Stripe-grade billing, real-time ops dashboards, and pen test reports that survive procurement.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What We Build for Atlanta Companies</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {services.map((s) => (
                            <div key={s.title} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-5">
                                <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Atlanta Teams Choose Us</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Most ATL software shops are either bloated consultancies or solo freelancers. We sit in the middle: founder-led delivery with enterprise-grade engineering practices. No offshore handoff, no junior outsourcing — William Beltz scopes, builds, and ships. That matters when you are pitching a Fortune 500 buyer in Buckhead and your security posture is part of the deal.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Track Record</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA&apos;s work powers operational tooling for clients including J5 Sales OS, Wilder Recovery, and UEhub — internal platforms purpose-built for sales, recovery operations, and education workflows respectively.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Same-state with full I-75 corridor coverage",
                            "Fintech, logistics, and SaaS specialization",
                            "Pen test reports that map directly to SOC 2 CC controls",
                            "Modern Next.js / TypeScript / PostgreSQL / Docker stack",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQ</h2>
                    <div className="space-y-6">
                        {faqs.map((item) => (
                            <div key={item.q} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services & nearby cities</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, network, wireless, and AD engagements." },
                            { href: "/services/payments-invoicing-licensing", title: "Payments, Invoicing & Licensing", desc: "Stripe-powered subscription and licensing systems." },
                            { href: "/software-development-macon-ga", title: "Macon, GA", desc: "Our HQ — Middle Georgia coverage." },
                            { href: "/software-development-augusta-ga", title: "Augusta, GA", desc: "Cyber corridor and Fort Eisenhower." },
                        ].map((s) => (
                            <Link
                                key={s.href}
                                href={s.href}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to talk Atlanta?
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call (770) 652-1282 to talk through your Atlanta build.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-quant-bg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Start a Project <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
