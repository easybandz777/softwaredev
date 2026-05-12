import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { MapPin, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "San Francisco Custom Software & Pen Testing | QUANT LAB USA",
    description:
        "San Francisco SaaS, fintech, and quant software development plus penetration testing. Senior, founder-led engineering. Call (770) 652-1282.",
    alternates: { canonical: "https://quantlabusa.dev/software-development-san-francisco-ca" },
    openGraph: {
        title: "San Francisco Custom Software & Pen Testing | QUANT LAB USA",
        description:
            "San Francisco SaaS, fintech, and quant software development plus penetration testing.",
        url: "https://quantlabusa.dev/software-development-san-francisco-ca",
        type: "article",
    },
    twitter: {
        card: "summary",
        title: "San Francisco Custom Software & Pen Testing | QUANT LAB USA",
        description:
            "San Francisco SaaS, fintech, and quant software development plus penetration testing.",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Penetration Testing",
    name: "Custom Software Development & Penetration Testing in San Francisco, CA",
    provider: { "@id": "https://quantlabusa.dev/#org" },
    areaServed: { "@type": "City", name: "San Francisco" },
    description:
        "Bay-standard SaaS builds, algorithmic trading and quant tooling, and MITRE-aligned penetration testing for San Francisco companies.",
    url: "https://quantlabusa.dev/software-development-san-francisco-ca",
};

const services = [
    {
        title: "SaaS Products on a Bay-Standard Stack",
        desc: "Next.js, TypeScript, Node, PostgreSQL, Docker.",
    },
    {
        title: "Algorithmic Trading & Quant Tooling",
        desc: "Niche, real, in-house capability — not a junior pretending to know finance.",
    },
    {
        title: "Penetration Testing",
        desc: "Web app, network, and AD engagements with formal MITRE-ATT&CK-aligned reports.",
    },
];

const faqs = [
    {
        q: "Can you handle a technical bake-off against in-house engineers?",
        a: "Yes — code samples and architecture walkthroughs on request.",
    },
    {
        q: "Do you build trading systems?",
        a: "Yes — algorithmic trading bots are a core capability.",
    },
    {
        q: "Time-zone overlap with PT?",
        a: "Comfortable working morning through early afternoon Pacific from a Georgia HQ.",
    },
];

export default function SanFranciscoLandingPage() {
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
                        <li className="text-gray-300">San Francisco, CA</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development & Penetration Testing in San Francisco, CA
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        San Francisco is the most technical buyer market in the country. Every founder is one degree of separation from a senior engineer, every CTO has built the thing before, and contract pitches that lean on agency theater die fast.
                    </p>
                    <ConsultationCTA label="Scope an SF Engagement" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            What survives is genuine senior engineering, clean architecture, and the ability to ship. That is the entire pitch behind QUANT LAB USA in the Bay.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What We Build for SF Companies</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why SF Buyers Choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The Bay has two main contractor profiles: top-tier shops at enterprise pricing, and a vast freelance market with wildly variable quality. We aim at the gap — senior, founder-led, fixed-scope, modern stack, security-aware by default. No junior layer, no offshore handoff. The engineer on your kickoff is the engineer writing the code.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Public Work</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Portfolio sites and platforms include J5 Sales OS (sales operations), UEhub (education platform), HobbsPeak (hobbspeak.com), and ProtectWithBri (protectwithbri.com).
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Algorithmic trading and quant tooling — real, in-house",
                            "Code samples and architecture walkthroughs on request",
                            "PT morning–early afternoon overlap from Georgia HQ",
                            "MITRE ATT&CK-aligned pen test reports",
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
                            { href: "/services/algorithmic-trading-systems", title: "Algorithmic Trading Systems", desc: "Trading bots and quant tooling." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, network, and AD engagements." },
                            { href: "/software-development-seattle-wa", title: "Seattle, WA", desc: "PNW SaaS and dev tools." },
                            { href: "/software-development-austin-tx", title: "Austin, TX", desc: "Startup SaaS and quant tooling." },
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
                            Scope an SF engagement.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call (770) 652-1282 to scope an SF engagement.
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
