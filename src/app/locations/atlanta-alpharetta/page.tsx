import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Custom Software Development in Alpharetta GA | QUANT LAB",
    description:
        "Custom software development in Alpharetta GA — fintech, North Point corridor SaaS, and SOC 2 penetration tests. Founder-led, fixed-quote engagements.",
    alternates: { canonical: "https://quantlabusa.dev/locations/atlanta-alpharetta" },
    openGraph: {
        title: "Custom Software Development in Alpharetta GA | QUANT LAB",
        description: "Alpharetta-focused fintech and SaaS builds plus penetration testing along the North Point corridor.",
        url: "https://quantlabusa.dev/locations/atlanta-alpharetta",
        type: "article",
    },
    twitter: {
        card: "summary",
        title: "Custom Software Development in Alpharetta GA | QUANT LAB",
        description: "Alpharetta-focused fintech and SaaS builds plus penetration testing.",
    },
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/locations/atlanta-alpharetta#localbusiness",
    name: "QUANT LAB USA — Alpharetta Coverage",
    url: "https://quantlabusa.dev/locations/atlanta-alpharetta",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Alpharetta", containedInPlace: { "@type": "State", name: "Georgia" } },
        { "@type": "City", name: "Roswell" },
        { "@type": "City", name: "Johns Creek" },
        { "@type": "City", name: "Milton" },
        { "@type": "AdministrativeArea", name: "North Fulton County" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 34.0754, longitude: -84.2941 },
    address: { "@type": "PostalAddress", addressLocality: "Alpharetta", addressRegion: "GA", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development",
    name: "Custom Software Development in Alpharetta, GA",
    provider: { "@id": "https://quantlabusa.dev/#organization" },
    areaServed: { "@type": "City", name: "Alpharetta, GA" },
    description:
        "Fintech-grade Stripe, custom CRMs, ops platforms, and SOC 2 penetration tests for Alpharetta and the North Point corridor.",
    url: "https://quantlabusa.dev/locations/atlanta-alpharetta",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Locations", item: "https://quantlabusa.dev/locations" },
        { "@type": "ListItem", position: 3, name: "Alpharetta", item: "https://quantlabusa.dev/locations/atlanta-alpharetta" },
    ],
};

const services = [
    {
        title: "Fintech & Payment Infrastructure",
        desc: "Alpharetta is one half of the Transaction Alley fintech corridor — Stripe Connect, ACH, KYC/KYB, and PCI-adjacent architectures are core to our practice.",
    },
    {
        title: "Custom CRMs for North Fulton Operators",
        desc: "Replace HubSpot/Salesforce. Lead-to-revenue plumbing for service businesses across Alpharetta, Roswell, Johns Creek, and Milton.",
    },
    {
        title: "Penetration Testing for SOC 2",
        desc: "Web app, network, AD, and wireless engagements for North Point-corridor SaaS and fintech firms.",
    },
    {
        title: "Field & Operations Platforms",
        desc: "Mobile-first estimate flows, automated proposals, and admin dashboards for contractors and field service operators in North Fulton.",
    },
];

const faqs = [
    {
        q: "Do you work with Alpharetta fintech companies?",
        a: "Yes — Alpharetta hosts a deep bench of payment processors, card-issuing platforms, and ACH operators that form the northern half of Transaction Alley. Most of our local fintech work originates between Windward Parkway and Mansell Road.",
    },
    {
        q: "Are you familiar with the North Point corridor?",
        a: "Yes. The North Point Parkway / GA-400 corridor is dense with Class A office space, SaaS HQs, and fintech operators. Most Alpharetta engagements meet at offices in that corridor or in the Avalon mixed-use complex.",
    },
    {
        q: "Do you cover Roswell, Johns Creek, and Milton too?",
        a: "Yes. Our existing case study work — Northcrest Fence — already serves contractors across Alpharetta, Roswell, Johns Creek, Milton, and Marietta. We treat North Fulton as a single coverage area.",
    },
    {
        q: "What is the typical Alpharetta engagement timeline?",
        a: "Most Alpharetta MVPs ship in 8–12 weeks against a fixed-scope quote. Full builds run 3–6 months and close at written acceptance — not open-ended T&M.",
    },
    {
        q: "Can you support a SOC 2 readiness window?",
        a: "Yes — pen testing reports map directly to SOC 2 CC controls. We schedule pre-audit tests 60–90 days ahead of your Type I window for North-Point-corridor SaaS clients.",
    },
    {
        q: "How does Alpharetta differ from Buckhead for a software buyer?",
        a: "Alpharetta skews fintech, B2B SaaS, and high-growth tech operators. Buckhead skews wealth, real estate, and corporate HQ. Both are excellent submarkets but the buyer profiles and procurement cycles look different.",
    },
];

export default function AtlantaAlpharettaPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: faqs.map((f) => ({
                            "@type": "Question",
                            name: f.q,
                            acceptedAnswer: { "@type": "Answer", text: f.a },
                        })),
                    }),
                }}
            />

            <div className="container mx-auto px-6 max-w-4xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/locations" className="hover:text-sky-400 transition-colors">Locations</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">Alpharetta</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-blue-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development in Alpharetta, GA
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Alpharetta and the GA-400 / North Point corridor form the northern anchor of Transaction Alley — Atlanta&apos;s fintech and payments belt. The stretch from Windward Parkway down through Mansell Road and the Avalon mixed-use district concentrates payment processors, card-issuing platforms, ACH operators, and high-growth B2B SaaS. The result is one of the most software-dense submarkets in the southeast.
                    </p>
                    <ConsultationCTA label="Scope an Alpharetta Project" city="Alpharetta, GA" source="neighborhood-alpharetta" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Alpharetta businesses partner with QUANT LAB</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            North Fulton software buyers want the same three things: a senior engineer accountable to the contract, security posture that survives third-party diligence, and a fixed-quote model that does not balloon mid-engagement. QUANT LAB delivers exactly that. William Beltz scopes, builds, and ships every project personally — no offshore handoff, no junior outsourcing, no agency markup layer.
                        </p>
                        <p>
                            Our existing Atlanta-metro case study work — Northcrest Fence — already serves the contractor market across Alpharetta, Roswell, Johns Creek, Milton, and Marietta. That platform replaced a clipboard estimate workflow with a mobile-first intake, automated PDF proposals, and a unified admin portal. Turnaround dropped from 1–3 days to under 30 minutes. The same engineering bench, the same delivery cadence, applies to fintech and SaaS builds across the North Point corridor.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build for Alpharetta clients</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {services.map((s) => (
                            <div key={s.title} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-5">
                                <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work with Alpharetta teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            We are Macon-based — roughly two hours from Alpharetta via I-75 and GA-400 — and run full Eastern Time delivery. Most kickoffs start as a video call followed by a single on-site afternoon at an office along North Point Parkway, Windward Parkway, or in Avalon. From there, build cycles run weekly: every Friday you get a deployed staging URL, written change notes, and the next-week plan. Alpharetta engagements close on fixed-scope, fixed-price proposals with a written acceptance milestone. No T&M billing surprises.
                        </p>
                    </div>
                    <div className="mt-6">
                        <ConsultationCTA label="Book an Alpharetta Scoping Call" city="Alpharetta, GA" source="neighborhood-alpharetta-mid" />
                    </div>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related submarkets & services</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { href: "/software-development-atlanta-ga", title: "Atlanta, GA (parent)", desc: "Full Atlanta-metro coverage page." },
                            { href: "/locations/atlanta-buckhead", title: "Buckhead Atlanta", desc: "Wealth, RIA, and corporate HQ corridor." },
                            { href: "/locations/atlanta-midtown", title: "Midtown Atlanta", desc: "Tech Square and Georgia Tech corridor." },
                            { href: "/locations/atlanta-marietta", title: "Marietta, GA", desc: "Cobb County and northwest metro." },
                            { href: "/services/payments-invoicing-licensing", title: "Payments & Licensing", desc: "Stripe Connect, ACH, billing systems." },
                            { href: "/services/custom-crm-development", title: "Custom CRM Development", desc: "Own your CRM. No per-seat creep." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Pre-SOC-2 engagements for fintech." },
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "Ops platforms built around your workflow." },
                            { href: "/work/northcrest-fence", title: "Case Study: Northcrest Fence", desc: "North Fulton contractor sales platform." },
                            { href: "/work/bridgepointe-painting", title: "Case Study: Bridgepointe Painting", desc: "Atlanta-metro QBO-synced ops platform." },
                            { href: "/pricing", title: "Pricing", desc: "Fixed-quote ranges by project type." },
                            { href: "/contact", title: "Start a Project", desc: "Scoping calls and fixed-quote proposals." },
                        ].map((s) => (
                            <Link
                                key={s.href}
                                href={s.href}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to talk Alpharetta?
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> to scope your North Point-corridor build.
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
