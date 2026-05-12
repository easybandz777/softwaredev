import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { MapPin, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Austin TX Custom Software Developer for Startups | QUANT LAB",
    description:
        "Austin startup-grade software development — MVPs, SaaS builds, Stripe, and pen testing. Founder-led, no offshore. Call (770) 652-1282.",
    alternates: { canonical: "https://quantlabusa.dev/software-development-austin-tx" },
    openGraph: {
        title: "Austin TX Custom Software Developer for Startups | QUANT LAB",
        description:
            "Austin startup-grade software development — MVPs, SaaS builds, Stripe, and pen testing.",
        url: "https://quantlabusa.dev/software-development-austin-tx",
        type: "article",
    },
    twitter: {
        card: "summary",
        title: "Austin TX Custom Software Developer for Startups | QUANT LAB",
        description:
            "Austin startup-grade software development — MVPs, SaaS builds, Stripe, and pen testing.",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development",
    name: "Custom Software Development in Austin, TX",
    provider: { "@id": "https://quantlabusa.dev/#org" },
    areaServed: { "@type": "City", name: "Austin" },
    description:
        "SaaS MVPs, Stripe and licensing systems, and algorithmic trading tooling for Austin founders on a modern stack.",
    url: "https://quantlabusa.dev/software-development-austin-tx",
};

const services = [
    {
        title: "SaaS MVPs on a Modern Stack",
        desc: "Next.js, TypeScript, PostgreSQL, Docker. Ship something investors can use, not a Figma deck.",
    },
    {
        title: "Stripe + Licensing Systems",
        desc: "Subscription, usage-based billing, license keys, customer self-serve portals.",
    },
    {
        title: "Algorithmic Trading & Quant Tooling",
        desc: "Niche capability for the small but real ATX trading and quant founder pool.",
    },
];

const faqs = [
    {
        q: "Do you work with pre-seed and seed-stage Austin founders?",
        a: "Yes — most of our SaaS clients fit that profile.",
    },
    {
        q: "Can you help us prepare for a security review during fundraising?",
        a: "Yes — pen testing aligned to MITRE ATT&CK is a core service.",
    },
    {
        q: "Are you East Coast based?",
        a: "Yes — Georgia HQ, full overlap with CT hours.",
    },
];

export default function AustinLandingPage() {
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
                        <li className="text-gray-300">Austin, TX</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-blue-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development in Austin, TX
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Austin is a builder&apos;s town. Between the SaaS ecosystem along MoPac, the venture money that followed Tesla and Oracle in, and the dense pool of solo founders working out of East Austin coffee shops, the city has one of the strongest founder-density profiles in the US.
                    </p>
                    <ConsultationCTA label="Talk Austin Builds" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            What it does not always have is engineering partners who match founder velocity without burning a seed round. That is the niche QUANT LAB USA fills.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What We Build for Austin Founders</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Austin Builders Choose Us</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            We have shipped algorithmic trading bots, internal sales platforms, ops dashboards, and full SaaS products. Founder-led, fixed-scope, modern stack. No three-tier agency overhead, no junior offshore handoff. The person scoping your build is the person writing the migrations.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Proof of Work</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA&apos;s deployed work includes J5 Sales OS (sales operations platform), UEhub (education platform), and a number of production marketing sites including HobbsPeak (hobbspeak.com).
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Pre-seed and seed-stage SaaS specialization",
                            "Algorithmic trading and quant tooling in-house",
                            "Full CT-hours overlap from Georgia HQ",
                            "MITRE ATT&CK-aligned pen testing for fundraising security reviews",
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
                            { href: "/services/web-applications", title: "Web Applications", desc: "SaaS MVPs and customer-facing apps." },
                            { href: "/software-development-dallas-tx", title: "Dallas, TX", desc: "DFW enterprise and corporate IT." },
                            { href: "/software-development-san-francisco-ca", title: "San Francisco, CA", desc: "Bay Area SaaS, fintech, and quant." },
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
                            Talk Austin builds.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call (770) 652-1282 to talk Austin builds.
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
