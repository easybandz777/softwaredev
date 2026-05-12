import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { MapPin, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Charlotte NC Software Development & Pen Testing | QUANT LAB",
    description:
        "Charlotte custom software development and penetration testing for banking, fintech, and SaaS firms. Founder-led, Georgia-based. Call (770) 652-1282.",
    alternates: { canonical: "https://quantlabusa.dev/software-development-charlotte-nc" },
    openGraph: {
        title: "Charlotte NC Software Development & Pen Testing | QUANT LAB",
        description:
            "Charlotte custom software development and penetration testing for banking, fintech, and SaaS firms.",
        url: "https://quantlabusa.dev/software-development-charlotte-nc",
        type: "article",
    },
    twitter: {
        card: "summary",
        title: "Charlotte NC Software Development & Pen Testing | QUANT LAB",
        description:
            "Charlotte custom software development and penetration testing for banking and fintech.",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Penetration Testing",
    name: "Custom Software Development & Penetration Testing in Charlotte, NC",
    provider: { "@id": "https://quantlabusa.dev/#org" },
    areaServed: { "@type": "City", name: "Charlotte" },
    description:
        "Fintech-adjacent custom software, vendor-risk-ready penetration testing, and CRMs for Charlotte's banking sector.",
    url: "https://quantlabusa.dev/software-development-charlotte-nc",
};

const services = [
    {
        title: "Fintech-Adjacent Custom Software",
        desc: "Stripe billing, licensing systems, internal ops dashboards for fintech vendors selling into the big banks.",
    },
    {
        title: "Penetration Testing for Vendor Risk Reviews",
        desc: "Formal reports aligned to MITRE ATT&CK, ready for bank-grade vendor assessments.",
    },
    {
        title: "CRMs and Operations Platforms",
        desc: "Purpose-built tooling for the mid-market firms supplying Charlotte's financial sector.",
    },
];

const faqs = [
    {
        q: "Can you produce a pen test report that survives a BoA or Truist vendor review?",
        a: "Yes — that is exactly what these reports are built to do.",
    },
    {
        q: "Do you build for fintech-adjacent SaaS selling into banks?",
        a: "Yes — and we understand the security questionnaire game.",
    },
    {
        q: "Are you available for in-person Charlotte meetings?",
        a: "Yes — for engagements that warrant it.",
    },
];

export default function CharlotteLandingPage() {
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
                        <li className="text-gray-300">Charlotte, NC</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development & Penetration Testing in Charlotte, NC
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Charlotte is the southeast&apos;s banking capital — second only to New York in US banking assets, anchored by Bank of America and Truist, and surrounded by a fast-growing fintech and supplier ecosystem in Uptown and South End.
                    </p>
                    <ConsultationCTA label="Scope a Charlotte Build" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            That density of regulated finance creates two constant needs: well-engineered custom software that survives an audit, and serious penetration testing that survives a procurement review. QUANT LAB USA delivers both.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What We Build for Charlotte Companies</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Charlotte Buyers Choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            We are a short drive up I-85 from Macon. Same-region, same-time-zone, no offshore handoff. Founder-led delivery means the engineer on the kickoff call is the engineer in the codebase. That accountability matters when you are selling into a bank&apos;s procurement process.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Track Record</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Public portfolio includes J5 Sales OS, ProtectWithBri (protectwithbri.com), Northcrest Fence (northcrestfencing.com), Bridgepointe Painting (bridgepointepainting.com), and UEhub.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Short drive up I-85 from our Georgia HQ",
                            "Pen test reports survive bank-grade vendor reviews",
                            "Bank-vendor security questionnaire experience",
                            "Modern Next.js / TypeScript / PostgreSQL / Docker stack",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
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
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Bank-vendor-ready engagements." },
                            { href: "/services/payments-invoicing-licensing", title: "Payments, Invoicing & Licensing", desc: "Stripe and licensing infrastructure." },
                            { href: "/software-development-atlanta-ga", title: "Atlanta, GA", desc: "Fintech, logistics, and SaaS." },
                            { href: "/software-development-nashville-tn", title: "Nashville, TN", desc: "Healthcare and music-tech." },
                        ].map((s) => (
                            <Link
                                key={s.href}
                                href={s.href}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-red-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-red-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Scope your Charlotte build.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call (770) 652-1282 to scope your Charlotte build.
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
