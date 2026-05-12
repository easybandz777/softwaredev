import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { MapPin, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Columbus GA Custom Software Developer | QUANT LAB USA",
    description:
        "Columbus GA software development — CRMs, dashboards, and Stripe integrations for businesses around Fort Moore and the Chattahoochee Valley.",
    alternates: { canonical: "https://quantlabusa.dev/software-development-columbus-ga" },
    openGraph: {
        title: "Columbus GA Custom Software Developer | QUANT LAB USA",
        description:
            "Columbus GA software development — CRMs, dashboards, and Stripe integrations for businesses around Fort Moore.",
        url: "https://quantlabusa.dev/software-development-columbus-ga",
        type: "article",
    },
    twitter: {
        card: "summary",
        title: "Columbus GA Custom Software Developer | QUANT LAB USA",
        description:
            "Columbus GA software development — CRMs, dashboards, and Stripe integrations for businesses around Fort Moore.",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development",
    name: "Custom Software Development in Columbus, GA",
    provider: { "@id": "https://quantlabusa.dev/#org" },
    areaServed: { "@type": "City", name: "Columbus" },
    description:
        "Founder-led custom CRMs, Stripe billing, and operations dashboards for Chattahoochee Valley businesses.",
    url: "https://quantlabusa.dev/software-development-columbus-ga",
};

const services = [
    {
        title: "Custom CRMs",
        desc: "Replace clipboard-and-spreadsheet workflows with a system your team will actually adopt.",
    },
    {
        title: "Stripe & Billing Integrations",
        desc: "Subscription, one-time, and milestone-based payment flows.",
    },
    {
        title: "Operations Dashboards",
        desc: "Consolidate inventory, dispatch, jobsite, and crew data into one screen.",
    },
];

const faqs = [
    {
        q: "Do you serve businesses on the Alabama side of the river?",
        a: "Yes — Phenix City and the metro area absolutely.",
    },
    {
        q: "How long does a custom CRM project take?",
        a: "A focused MVP typically lands in 6–10 weeks; full builds 3–5 months.",
    },
    {
        q: "Can you integrate with our existing tooling?",
        a: "Usually yes — QuickBooks, Stripe, HubSpot, and most modern APIs are well covered.",
    },
];

export default function ColumbusLandingPage() {
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
                        <li className="text-gray-300">Columbus, GA</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-blue-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development in Columbus, GA
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Columbus and the surrounding Chattahoochee Valley have a unique business profile: a strong defense-adjacent economy around Fort Moore, established manufacturing and logistics anchored by Aflac and TSYS legacy ecosystems, and a steady stream of family-owned businesses across the river into Alabama.
                    </p>
                    <ConsultationCTA label="Scope a Columbus Project" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA builds the custom software that helps these operators digitize without taking on enterprise-priced consultants.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What We Build for Columbus Businesses</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Columbus Owners Choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Founder-led, Georgia-based, fixed-scope quotes. We do not staff projects with junior offshore developers. William Beltz owns the build personally. That is rare at our price point, and it is the entire reason owners along the Chattahoochee work with us instead of national consultancies.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Proof of Work</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Our deployed client portfolio is publicly browsable — Northcrest Fence (northcrestfencing.com), Bridgepointe Painting (bridgepointepainting.com), and HobbsPeak (hobbspeak.com) all run on infrastructure we built and maintain.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Georgia-based with full coverage of the Chattahoochee Valley",
                            "Serves businesses on both sides of the river including Phenix City",
                            "Fixed-scope quotes — no T&M surprises",
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
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "CRMs and ops tooling built around your workflow." },
                            { href: "/services/payments-invoicing-licensing", title: "Payments, Invoicing & Licensing", desc: "Stripe-powered billing and licensing systems." },
                            { href: "/software-development-macon-ga", title: "Macon, GA", desc: "Our HQ — Middle Georgia coverage." },
                            { href: "/software-development-atlanta-ga", title: "Atlanta, GA", desc: "Fintech, logistics, and SaaS." },
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
                            Build it with a Georgia firm.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call (770) 652-1282 to scope your Columbus project.
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
