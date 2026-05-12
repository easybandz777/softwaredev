import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { MapPin, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Miami Custom Software & SaaS Development | QUANT LAB USA",
    description:
        "Miami software development for fintech, hospitality, and LATAM-facing SaaS. Multi-currency Stripe, custom dashboards. Call (770) 652-1282.",
    alternates: { canonical: "https://quantlabusa.dev/software-development-miami-fl" },
    openGraph: {
        title: "Miami Custom Software & SaaS Development | QUANT LAB USA",
        description:
            "Miami software development for fintech, hospitality, and LATAM-facing SaaS. Multi-currency Stripe, custom dashboards.",
        url: "https://quantlabusa.dev/software-development-miami-fl",
        type: "article",
    },
    twitter: {
        card: "summary",
        title: "Miami Custom Software & SaaS Development | QUANT LAB USA",
        description:
            "Miami software development for fintech, hospitality, and LATAM-facing SaaS.",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development",
    name: "Custom Software Development in Miami, FL",
    provider: { "@id": "https://quantlabusa.dev/#org" },
    areaServed: { "@type": "City", name: "Miami" },
    description:
        "Multi-currency Stripe, hospitality and booking platforms, and penetration testing for Miami-based fintech and LATAM-facing companies.",
    url: "https://quantlabusa.dev/software-development-miami-fl",
};

const services = [
    {
        title: "LATAM-Ready Stripe & Multi-Currency Billing",
        desc: "Subscription products that handle USD, BRL, MXN, and COP without the usual edge-case bugs.",
    },
    {
        title: "Hospitality & Booking Platforms",
        desc: "Custom alternatives to vertical SaaS for hotels, restaurants, and event groups across Miami-Dade.",
    },
    {
        title: "Penetration Testing",
        desc: "Web app and Active Directory engagements for fintechs preparing for institutional investor due diligence.",
    },
];

const faqs = [
    {
        q: "Do you support Spanish-language UI builds?",
        a: "Yes — i18n is standard in our Next.js builds.",
    },
    {
        q: "Can you handle LATAM payments?",
        a: "Yes — Stripe is our default; we also know the limitations and when to route through local processors.",
    },
    {
        q: "Are you available for on-site work in Miami?",
        a: "Yes, for engagements that warrant travel.",
    },
];

export default function MiamiLandingPage() {
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
                        <li className="text-gray-300">Miami, FL</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-blue-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development in Miami, FL
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Miami has become a serious tech market — a magnet for fintech founders relocating from New York and the Bay, an inbound capital gateway for Latin America, and a hospitality powerhouse from Brickell through South Beach.
                    </p>
                    <ConsultationCTA label="Scope a Miami Build" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            That mix creates one of the most interesting development markets in the country: bilingual products, multi-currency billing, cross-border compliance, and ambitious founders who need to ship fast. QUANT LAB USA builds for exactly that profile.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What We Build for Miami Companies</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Miami Founders Choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            You will not be passed to an offshore team. William Beltz leads every project end-to-end. We work remotely with Miami clients efficiently, with overlap hours that match East Coast schedules and a willingness to fly in when scope demands it.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Track Record</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Our portfolio spans operations platforms (J5 Sales OS, UEhub), content sites (ProtectWithBri at protectwithbri.com, Aaron Coleman Music), and trade brands (Northcrest Fence at northcrestfencing.com).
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Full ET overlap from Georgia HQ",
                            "i18n / Spanish-language UI builds standard",
                            "Multi-currency Stripe across USD, BRL, MXN, and COP",
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
                            { href: "/services/payments-invoicing-licensing", title: "Payments, Invoicing & Licensing", desc: "Multi-currency Stripe and licensing systems." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Pre-investor due-diligence engagements." },
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
                            Scope a Miami build.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call (770) 652-1282 to scope a Miami build.
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
