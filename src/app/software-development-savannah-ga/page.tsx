import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { MapPin, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Savannah GA Software Development & SaaS Build | QUANT LAB USA",
    description:
        "Savannah custom software — port logistics, hospitality, and SaaS development from a Georgia firm. Founder-led. Call (770) 652-1282.",
    alternates: { canonical: "https://quantlabusa.dev/software-development-savannah-ga" },
    openGraph: {
        title: "Savannah GA Software Development & SaaS Build | QUANT LAB USA",
        description:
            "Savannah custom software — port logistics, hospitality, and SaaS development from a Georgia firm.",
        url: "https://quantlabusa.dev/software-development-savannah-ga",
        type: "article",
    },
    twitter: {
        card: "summary",
        title: "Savannah GA Software Development & SaaS Build | QUANT LAB USA",
        description:
            "Savannah custom software — port logistics, hospitality, and SaaS development from a Georgia firm.",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development",
    name: "Custom Software Development in Savannah, GA",
    provider: { "@id": "https://quantlabusa.dev/#org" },
    areaServed: { "@type": "City", name: "Savannah" },
    description:
        "Logistics, hospitality, and SaaS development for Savannah operators — built by a same-state Georgia firm.",
    url: "https://quantlabusa.dev/software-development-savannah-ga",
};

const services = [
    {
        title: "Logistics & Port-Adjacent Tooling",
        desc: "Drayage scheduling, container tracking dashboards, and integrations with TMS systems.",
    },
    {
        title: "Hospitality Booking & Operations Platforms",
        desc: "Custom alternatives to expensive vertical SaaS for tour operators, boutique hotels, and event venues.",
    },
    {
        title: "SaaS MVPs for Savannah Founders",
        desc: "Pre-seed and bootstrapped builds at a price point real founders can stomach.",
    },
];

const faqs = [
    {
        q: "Can you build software for tour and charter operators?",
        a: "Yes — bookings, deposits, waivers, and customer comms in one app.",
    },
    {
        q: "Do you support port-adjacent logistics integrations?",
        a: "Yes — we have experience with EDI, freight APIs, and ops dashboards.",
    },
    {
        q: "Are you available for on-site visits to Savannah?",
        a: "Yes — discovery in person when it helps.",
    },
];

export default function SavannahLandingPage() {
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
                        <li className="text-gray-300">Savannah, GA</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-blue-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development in Savannah, GA
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Savannah&apos;s economy runs on three pillars: the Port of Savannah (now the third-busiest container port in the US), a deep hospitality and tourism sector, and a fast-growing tech and creative footprint emerging around SCAD and the historic district.
                    </p>
                    <ConsultationCTA label="Start a Savannah Project" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Each of those markets generates demand for very different software — and QUANT LAB USA builds for all three from a Georgia HQ.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What We Build for Savannah Operators</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Savannah Founders Choose Us</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Atlanta agencies treat Savannah as an out-of-market account. We do not. We are a same-state firm, we drive down I-16, and we ship product. No offshore handoff, no junior outsourcing — the person on your kickoff call writes the code.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Local Credibility</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA&apos;s portfolio includes UEhub, Wilder Recovery, and Aaron Coleman Music — examples of niche operational platforms and content-driven sites we have shipped to production.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Georgia-based — short drive down I-16",
                            "Logistics, hospitality, and SaaS specialization",
                            "On-site discovery and kickoffs available",
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
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "Operations dashboards and CRMs." },
                            { href: "/services/web-applications", title: "Web Applications", desc: "SaaS MVPs and customer-facing builds." },
                            { href: "/software-development-atlanta-ga", title: "Atlanta, GA", desc: "Fintech, logistics, and SaaS." },
                            { href: "/software-development-charlotte-nc", title: "Charlotte, NC", desc: "Banking and fintech-adjacent work." },
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
                            Start a Savannah project.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call (770) 652-1282 to start a Savannah project.
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
