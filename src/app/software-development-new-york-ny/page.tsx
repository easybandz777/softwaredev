import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { MapPin, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "NYC Custom Software Development & Pen Testing | QUANT LAB USA",
    description:
        "New York custom software and penetration testing for fintech, agencies, and SaaS. Senior, founder-led engineering. Call (770) 652-1282.",
    alternates: { canonical: "https://quantlabusa.dev/software-development-new-york-ny" },
    openGraph: {
        title: "NYC Custom Software Development & Pen Testing | QUANT LAB USA",
        description:
            "New York custom software and penetration testing for fintech, agencies, and SaaS. Founder-led engineering.",
        url: "https://quantlabusa.dev/software-development-new-york-ny",
        type: "article",
    },
    twitter: {
        card: "summary",
        title: "NYC Custom Software Development & Pen Testing | QUANT LAB USA",
        description:
            "New York custom software and penetration testing for fintech, agencies, and SaaS.",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Penetration Testing",
    name: "Custom Software Development & Penetration Testing in New York, NY",
    provider: { "@id": "https://quantlabusa.dev/#org" },
    areaServed: { "@type": "City", name: "New York" },
    description:
        "Fintech and brokerage-adjacent tooling, pre-procurement pen testing, and high-stakes custom web apps for New York clients.",
    url: "https://quantlabusa.dev/software-development-new-york-ny",
};

const services = [
    {
        title: "Fintech & Brokerage-Adjacent Tooling",
        desc: "Algorithmic trading bots, internal trade operations dashboards, and Stripe-billed SaaS.",
    },
    {
        title: "Penetration Testing for Pre-Procurement Reviews",
        desc: "Web, AD, and MITRE ATT&CK engagements with formal deliverables.",
    },
    {
        title: "High-Stakes Custom Web Apps",
        desc: "When the cost of a bug is real and 'I'll fix it next sprint' is not acceptable.",
    },
];

const faqs = [
    {
        q: "Can you support due diligence requests from institutional investors?",
        a: "Yes — pen test reports, architecture diagrams, and SBOM-style summaries on request.",
    },
    {
        q: "Do you fly in for kickoffs and reviews?",
        a: "For engagements above a certain scope, yes.",
    },
    {
        q: "East Coast hours?",
        a: "Yes — Georgia HQ, full ET overlap.",
    },
];

export default function NewYorkLandingPage() {
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
                        <li className="text-gray-300">New York, NY</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development & Penetration Testing in New York, NY
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        New York is the toughest software buyer&apos;s market in the country. Fintech, ad-tech, agency holding companies, hedge funds, and a relentless current of SaaS founders all have the same demand: senior engineering, ship fast, no excuses.
                    </p>
                    <ConsultationCTA label="Talk Through a NYC Engagement" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The wrong contractor burns weeks and tens of thousands. QUANT LAB USA&apos;s pitch in NYC is simple — founder-led, accountable, modern stack, security-aware from day one.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What We Build for New York Clients</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why NYC Buyers Choose Us</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            There is no junior layer between you and the engineer. Every project is led personally by William Beltz, every architectural decision is documented, and every line of code is reviewed before it ships. That is hard to find in the New York market at our price tier.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Selected Work</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Production work includes J5 Sales OS, UEhub, ProtectWithBri (protectwithbri.com), Wilder Recovery, and Northcrest Fence (northcrestfencing.com).
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Full ET overlap from Georgia HQ",
                            "Fintech and brokerage-adjacent specialization",
                            "Documented architecture for institutional due diligence",
                            "Pen test reports formatted for pre-procurement review",
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
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, AD, and MITRE-aligned engagements." },
                            { href: "/services/algorithmic-trading-systems", title: "Algorithmic Trading Systems", desc: "Trading bots and ops dashboards." },
                            { href: "/software-development-charlotte-nc", title: "Charlotte, NC", desc: "Banking and fintech-adjacent work." },
                            { href: "/software-development-chicago-il", title: "Chicago, IL", desc: "Finance, logistics, manufacturing." },
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
                            Talk through your NYC engagement.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call (770) 652-1282 to talk through your NYC engagement.
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
