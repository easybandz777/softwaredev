import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { MapPin, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Chicago Custom Software Developer | QUANT LAB USA",
    description:
        "Chicago software development for finance, logistics, and manufacturing — trading systems, ops dashboards, and pen testing. Call (770) 652-1282.",
    alternates: { canonical: "https://quantlabusa.dev/software-development-chicago-il" },
    openGraph: {
        title: "Chicago Custom Software Developer | QUANT LAB USA",
        description:
            "Chicago software development for finance, logistics, and manufacturing — trading systems, ops dashboards, and pen testing.",
        url: "https://quantlabusa.dev/software-development-chicago-il",
        type: "article",
    },
    twitter: {
        card: "summary",
        title: "Chicago Custom Software Developer | QUANT LAB USA",
        description:
            "Chicago software development for finance, logistics, and manufacturing.",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development",
    name: "Custom Software Development in Chicago, IL",
    provider: { "@id": "https://quantlabusa.dev/#org" },
    areaServed: { "@type": "City", name: "Chicago" },
    description:
        "Algorithmic trading tooling, logistics/manufacturing ops dashboards, and penetration testing for Chicago operators.",
    url: "https://quantlabusa.dev/software-development-chicago-il",
};

const services = [
    {
        title: "Algorithmic Trading Bots & Quant Tooling",
        desc: "A genuine niche capability, built on TypeScript/Node and integrated with broker APIs.",
    },
    {
        title: "Logistics & Manufacturing Operations Dashboards",
        desc: "Real-time visibility into routes, jobs, inventory, and crews.",
    },
    {
        title: "Penetration Testing",
        desc: "Full-scope engagements including AD abuse paths and MITRE ATT&CK coverage.",
    },
];

const faqs = [
    {
        q: "Do you build algorithmic trading systems for individuals or prop shops?",
        a: "We have done both — scope and broker integration determine the engagement.",
    },
    {
        q: "Can you support a SOX-driven internal audit cycle with pen test data?",
        a: "Yes — reports are formatted to drop into audit binders.",
    },
    {
        q: "Do you fly in for kickoffs?",
        a: "For engagements that warrant it, yes.",
    },
];

export default function ChicagoLandingPage() {
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
                        <li className="text-gray-300">Chicago, IL</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-blue-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development in Chicago, IL
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Chicago&apos;s economy is unusually rich for software demand: the trading and proprietary-finance ecosystem around the CBOT and CME, a massive logistics and rail-hub footprint, and a deep manufacturing base across the metro and out into the collar counties.
                    </p>
                    <ConsultationCTA label="Talk Chicago Projects" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Each of these markets generates serious software needs — and QUANT LAB USA&apos;s combination of algorithmic trading capability, ops tooling, and security testing fits the city&apos;s profile unusually well.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What We Build for Chicago Operators</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Chicago Companies Choose Us</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Chicago has plenty of enterprise consulting firms. What is harder to find is a founder-led shop that genuinely understands quant tooling, ships modern web apps, and runs credible offensive security engagements — all under one roof. That combination is what we offer.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Portfolio Note</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Production sites and platforms in our portfolio include J5 Sales OS, UEhub, ProtectWithBri (protectwithbri.com), and Wilder Recovery.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Algorithmic trading bots and quant tooling — real, in-house",
                            "Founder-led ops dashboards for logistics and manufacturing",
                            "Pen testing aligned to MITRE ATT&CK and SOX-friendly audits",
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
                            { href: "/services/algorithmic-trading-systems", title: "Algorithmic Trading Systems", desc: "Trading bots and quant tooling." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Full-scope AD and MITRE engagements." },
                            { href: "/software-development-new-york-ny", title: "New York, NY", desc: "Fintech and brokerage-adjacent tooling." },
                            { href: "/software-development-dallas-tx", title: "Dallas, TX", desc: "Corporate IT modernization." },
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
                            Talk Chicago projects.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call (770) 652-1282 to talk Chicago projects.
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
