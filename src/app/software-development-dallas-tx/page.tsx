import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { MapPin, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Dallas Custom Software & Penetration Testing | QUANT LAB USA",
    description:
        "Dallas enterprise-grade software development and penetration testing for corporate IT, logistics, and SaaS. Founder-led. Call (770) 652-1282.",
    alternates: { canonical: "https://quantlabusa.dev/software-development-dallas-tx" },
    openGraph: {
        title: "Dallas Custom Software & Penetration Testing | QUANT LAB USA",
        description:
            "Dallas enterprise-grade software development and penetration testing for corporate IT, logistics, and SaaS.",
        url: "https://quantlabusa.dev/software-development-dallas-tx",
        type: "article",
    },
    twitter: {
        card: "summary",
        title: "Dallas Custom Software & Penetration Testing | QUANT LAB USA",
        description:
            "Dallas enterprise-grade software development and penetration testing for corporate IT and logistics.",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Penetration Testing",
    name: "Custom Software Development & Penetration Testing in Dallas, TX",
    provider: { "@id": "https://quantlabusa.dev/#org" },
    areaServed: { "@type": "City", name: "Dallas" },
    description:
        "Legacy internal tool modernization, corporate IT penetration testing, and ops dashboards for the DFW metroplex.",
    url: "https://quantlabusa.dev/software-development-dallas-tx",
};

const services = [
    {
        title: "Legacy Internal Tool Modernization",
        desc: "Replace fragile Access/Excel/VB stacks with Next.js + PostgreSQL apps your team will actually use.",
    },
    {
        title: "Penetration Testing for Corporate IT",
        desc: "Internal network, Active Directory abuse paths, wireless, and web app engagements.",
    },
    {
        title: "Operations Dashboards & Logistics Integrations",
        desc: "DFW's freight and distribution density makes this our highest-demand vertical here.",
    },
];

const faqs = [
    {
        q: "Do you do internal network pen tests?",
        a: "Yes — internal AD, lateral movement, and segmentation reviews.",
    },
    {
        q: "Can you modernize an existing internal app instead of rebuilding from scratch?",
        a: "Often yes — we do an assessment first.",
    },
    {
        q: "Do you bill fixed scope or T&M?",
        a: "Fixed scope on most engagements, T&M only for open-ended R&D.",
    },
];

export default function DallasLandingPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />

            <div className="container mx-auto px-6 max-w-4xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/services" className="hover:text-sky-400 transition-colors">Services</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">Dallas, TX</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development & Penetration Testing in Dallas, TX
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        The DFW metroplex is a corporate IT and supply-chain heavyweight — home to one of the largest concentrations of Fortune 500 headquarters in the country, a massive logistics and freight base, and a deep pool of mid-market companies running on aging custom software.
                    </p>
                    <ConsultationCTA label="Scope DFW Work" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Many of those mid-market operators are looking for someone who can modernize a creaking internal tool or harden an exposed application without paying a Big Four consulting rate. That is where QUANT LAB USA fits.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What We Build for Dallas Organizations</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Dallas IT Leaders Choose Us</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Big-four firms quote enterprise prices and assign juniors. National boutiques disappear when scope tightens. QUANT LAB USA is founder-led, fixed-scope, and accountable end-to-end. You get senior engineering at a mid-market price, with reports and documentation written for procurement and audit.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Selected Work</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Production builds and portfolio sites include J5 Sales OS, UEhub, Bridgepointe Painting (bridgepointepainting.com), and Northcrest Fence (northcrestfencing.com).
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Senior engineering at mid-market pricing",
                            "Fixed-scope quotes on most engagements",
                            "Internal network and AD pen testing in-house",
                            "Documentation written for procurement and audit",
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
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Internal AD, lateral movement, web app." },
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "Legacy modernization and ops tooling." },
                            { href: "/software-development-austin-tx", title: "Austin, TX", desc: "Texas startup and SaaS market." },
                            { href: "/software-development-chicago-il", title: "Chicago, IL", desc: "Finance, logistics, manufacturing." },
                        ].map((s) => (
                            <Link
                                key={s.href}
                                href={s.href}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-red-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-red-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Scope DFW work.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> to scope DFW work.
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
