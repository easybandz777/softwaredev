import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Custom Software Development in SoMa San Francisco | QUANT LAB",
    description:
        "Custom software development in SoMa San Francisco — venture-backed SaaS, AI infra, and SOC 2 pen testing. Founder-led, fixed-quote delivery.",
    alternates: { canonical: "https://quantlabusa.dev/locations/san-francisco-soma" },
    openGraph: {
        title: "Custom Software Development in SoMa San Francisco | QUANT LAB",
        description: "SoMa-focused SaaS MVPs, AI infrastructure builds, and pen testing for venture-backed teams.",
        url: "https://quantlabusa.dev/locations/san-francisco-soma",
        type: "article",
    },
    twitter: {
        card: "summary",
        title: "Custom Software Development in SoMa San Francisco | QUANT LAB",
        description: "SoMa SaaS, AI infra builds, and pen testing.",
    },
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/locations/san-francisco-soma#localbusiness",
    name: "QUANT LAB USA — SoMa San Francisco Coverage",
    url: "https://quantlabusa.dev/locations/san-francisco-soma",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "Place", name: "SoMa", containedInPlace: { "@type": "City", name: "San Francisco" } },
        { "@type": "Place", name: "Mission Bay" },
        { "@type": "Place", name: "South Park" },
        { "@type": "Place", name: "Yerba Buena" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 37.7820, longitude: -122.4058 },
    address: { "@type": "PostalAddress", addressLocality: "San Francisco", addressRegion: "CA", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development",
    name: "Custom Software Development in SoMa San Francisco",
    provider: { "@id": "https://quantlabusa.dev/#organization" },
    areaServed: { "@type": "Place", name: "SoMa, San Francisco, CA" },
    description:
        "Venture-backed SaaS, AI infrastructure, Stripe Connect, and SOC 2 pen tests for SoMa-headquartered firms.",
    url: "https://quantlabusa.dev/locations/san-francisco-soma",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Locations", item: "https://quantlabusa.dev/locations" },
        { "@type": "ListItem", position: 3, name: "SoMa San Francisco", item: "https://quantlabusa.dev/locations/san-francisco-soma" },
    ],
};

const services = [
    {
        title: "SaaS MVPs for Venture-Backed Teams",
        desc: "Multi-tenant SaaS, Stripe metered billing, dashboarding, and admin tooling — ship-ready for seed and Series A pitches in the SoMa corridor.",
    },
    {
        title: "AI Infrastructure & ML-Adjacent Tooling",
        desc: "Model orchestration, eval pipelines, prompt management, and audit logging for AI-native SaaS firms operating between Folsom and the Embarcadero.",
    },
    {
        title: "Penetration Testing for SOC 2",
        desc: "Pre-Type-I pen tests for SoMa SaaS and AI-native firms entering enterprise procurement cycles.",
    },
    {
        title: "API & Webhook Infrastructure",
        desc: "OAuth/SSO, webhook fan-out, and public APIs for B2B SaaS shipping out of the SoMa, Mission Bay, and South Park ecosystem.",
    },
];

const faqs = [
    {
        q: "Do you work with SoMa venture-backed SaaS and AI firms?",
        a: "Yes. SoMa, South Park, Mission Bay, and Yerba Buena concentrate one of the densest seed-to-Series-C SaaS and AI-native firm pools in the world. We scope MVPs and full platform builds on fixed-quote terms.",
    },
    {
        q: "Can you cover Pacific Time delivery from a Georgia HQ?",
        a: "Yes. Our standard workday extends across Eastern and Central time with adjusted hours into Pacific Time for SoMa engagements. Most syncs land in the late morning or early afternoon Pacific to keep both sides fresh.",
    },
    {
        q: "Can you meet at a SoMa office?",
        a: "Yes — we travel into SF for major engagements. Typical meetings happen at offices along Folsom, Brannan, Townsend, or near the Embarcadero. One on-site session per major milestone is standard for larger builds.",
    },
    {
        q: "Do you support AI-native SaaS infrastructure?",
        a: "Yes. Model orchestration, eval pipelines, prompt management, audit logging, and Stripe metered billing for inference-priced products are all in scope. We do not train foundation models — we build the platforms around them.",
    },
    {
        q: "What is the typical SoMa engagement timeline?",
        a: "Most SoMa MVPs ship in 8–12 weeks against a fixed-scope quote. Full platform builds run 3–6 months and close at written acceptance — not open-ended T&M.",
    },
    {
        q: "Do you offer ongoing maintenance after launch?",
        a: "Yes — monthly retainers covering hosting, security patching, and small feature work. Or take the codebase fully in-house. No lock-in.",
    },
];

export default function SanFranciscoSoMaPage() {
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
                        <li className="text-gray-300">SoMa San Francisco</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-blue-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development in SoMa San Francisco
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        SoMa is the densest stretch of venture-backed software in the world. The grid running from Folsom and Howard south through South Park, Brannan, and into Mission Bay concentrates the global headquarters of cloud platforms, payment infrastructure operators, and the post-2022 wave of AI-native SaaS that defines the current cycle. The software demand follows the venture money: AI infrastructure, model orchestration, Stripe metered billing for inference-priced products, and SOC 2 pen tests that survive enterprise diligence.
                    </p>
                    <ConsultationCTA label="Scope a SoMa Project" city="SoMa, San Francisco, CA" source="neighborhood-sf-soma" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why SoMa businesses partner with QUANT LAB</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            SoMa software buyers move at venture pace. Seed-to-Series-C SaaS teams and AI-native firms need senior engineering accountable to the contract, security posture that survives Series A or B diligence, and a fixed-quote model that does not balloon mid-engagement. QUANT LAB runs founder-led delivery. William Beltz scopes, builds, and ships every project personally. No offshore handoff, no junior outsourcing, no agency markup. The model travels across time zones — Pacific Time engagements run with adjusted hours so SoMa syncs land in the late morning or early afternoon Pacific.
                        </p>
                        <p>
                            The SoMa buyer profile rewards depth in modern web and AI infrastructure. Stripe metered billing for inference-priced products, OAuth/SSO and webhook fan-out for API platforms, model orchestration and eval pipelines for AI-native SaaS, and SOC 2 CC-mapped pen tests for enterprise procurement — these are the primitives our SoMa engagements lean on. Most close on fixed-scope, fixed-price proposals with weekly Friday demos and a written acceptance milestone.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build for SoMa clients</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work with SoMa teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            We are headquartered in Macon, Georgia and run extended hours into Pacific Time for SoMa engagements. Most syncs land in the late morning or early afternoon Pacific to give both sides fresh attention. SoMa engagements are remote-first, with one on-site session per major milestone — typically at an office along Folsom, Brannan, Townsend, or near the Embarcadero. Build cycles run weekly: every Friday you get a deployed staging URL, written change notes, and the next-week plan. SoMa engagements close on fixed-scope, fixed-price proposals — no open-ended T&M billing surprises.
                        </p>
                    </div>
                    <div className="mt-6">
                        <ConsultationCTA label="Book a SoMa Scoping Call" city="SoMa, San Francisco, CA" source="neighborhood-sf-soma-mid" />
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
                            { href: "/software-development-san-francisco-ca", title: "San Francisco, CA (parent)", desc: "Full SF-metro coverage page." },
                            { href: "/locations/seattle-south-lake-union", title: "South Lake Union Seattle", desc: "Pacific Northwest tech corridor." },
                            { href: "/locations/austin-downtown", title: "Downtown Austin", desc: "Texas venture-backed SaaS." },
                            { href: "/locations/nyc-manhattan", title: "Manhattan, NYC", desc: "Wall Street fintech and media." },
                            { href: "/services/saas-platform-development", title: "SaaS Platform Development", desc: "Multi-tenant MVPs and platform builds." },
                            { href: "/services/api-development", title: "API Development", desc: "OAuth, webhooks, public APIs." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Pre-SOC-2 engagements." },
                            { href: "/services/stripe-integration", title: "Stripe Integration", desc: "Metered billing for AI-native products." },
                            { href: "/work/j5-sales-os", title: "Case Study: J5 Sales OS", desc: "Sales operations platform." },
                            { href: "/work/wilder-recovery", title: "Case Study: Wilder Recovery", desc: "Operations and field-team tooling." },
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
                            Ready to talk SoMa?
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> to scope your SoMa build.
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
