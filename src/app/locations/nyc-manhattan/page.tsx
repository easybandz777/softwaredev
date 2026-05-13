import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Custom Software Development in Manhattan NYC | QUANT LAB",
    description:
        "Custom software development in Manhattan NYC — Wall Street fintech, Midtown media SaaS, and SOC 2 pen testing. Founder-led, fixed-quote delivery.",
    alternates: { canonical: "https://quantlabusa.dev/locations/nyc-manhattan" },
    openGraph: {
        title: "Custom Software Development in Manhattan NYC | QUANT LAB",
        description: "Manhattan-focused fintech, agency SaaS, and SOC 2 pen testing builds. Founder-led delivery.",
        url: "https://quantlabusa.dev/locations/nyc-manhattan",
        type: "article",
    },
    twitter: {
        card: "summary",
        title: "Custom Software Development in Manhattan NYC | QUANT LAB",
        description: "Manhattan fintech, media SaaS, and pen testing builds.",
    },
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/locations/nyc-manhattan#localbusiness",
    name: "QUANT LAB USA — Manhattan Coverage",
    url: "https://quantlabusa.dev/locations/nyc-manhattan",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "Place", name: "Manhattan", containedInPlace: { "@type": "City", name: "New York" } },
        { "@type": "Place", name: "Financial District" },
        { "@type": "Place", name: "Midtown Manhattan" },
        { "@type": "Place", name: "Flatiron" },
        { "@type": "Place", name: "SoHo" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 40.7831, longitude: -73.9712 },
    address: { "@type": "PostalAddress", addressLocality: "New York", addressRegion: "NY", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development",
    name: "Custom Software Development in Manhattan, NYC",
    provider: { "@id": "https://quantlabusa.dev/#organization" },
    areaServed: { "@type": "Place", name: "Manhattan, New York, NY" },
    description:
        "Wall Street fintech, Midtown media SaaS, agency-side platforms, and SOC 2 pen tests for Manhattan-headquartered firms.",
    url: "https://quantlabusa.dev/locations/nyc-manhattan",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Locations", item: "https://quantlabusa.dev/locations" },
        { "@type": "ListItem", position: 3, name: "Manhattan", item: "https://quantlabusa.dev/locations/nyc-manhattan" },
    ],
};

const services = [
    {
        title: "Wall Street Fintech & Trading Tooling",
        desc: "Production trading systems, broker integrations, and quant tooling with hard risk controls for Financial District buyers. We do not provide investment advice or execute trades.",
    },
    {
        title: "Media & Agency SaaS",
        desc: "Multi-tenant platforms for Midtown media operators, agency-side tooling, campaign management, and content workflow systems.",
    },
    {
        title: "Fintech-grade Stripe & ACH Builds",
        desc: "Subscription billing, ACH, multi-currency, and KYC/KYB workflows for Manhattan-based fintech and SaaS operators.",
    },
    {
        title: "Penetration Testing for SOC 2",
        desc: "Web app, network, AD, and wireless engagements for Manhattan fintech and enterprise SaaS firms entering procurement cycles.",
    },
];

const faqs = [
    {
        q: "Do you work with Wall Street fintech and trading firms?",
        a: "Yes. We ship production trading systems with hard risk controls, broker integrations, and quant tooling for Financial District buyers. We do not provide investment advice and we do not execute trades on behalf of clients — we build the platforms.",
    },
    {
        q: "Are you familiar with Midtown media and agency SaaS?",
        a: "Yes. Midtown concentrates one of the densest agency, publisher, and media-tech operator pools in the country. We build multi-tenant platforms, campaign management tooling, and content workflow systems for that buyer profile.",
    },
    {
        q: "Can you meet in Manhattan?",
        a: "Yes — we travel into NYC for major engagements. Typical meetings happen at offices in the Financial District, Midtown, Flatiron, or SoHo. One on-site session per major milestone is standard for larger builds.",
    },
    {
        q: "How is Manhattan procurement different from other markets?",
        a: "Manhattan procurement is faster than Dallas enterprise but more formal than Austin venture-backed. MSA review, DPA negotiation, and detailed third-party diligence are common. We accommodate full RFP cycles when required.",
    },
    {
        q: "What is the typical Manhattan engagement timeline?",
        a: "Most Manhattan MVPs ship in 8–12 weeks against a fixed-scope quote. Enterprise platform builds run 4–8 months and close at written acceptance — not open-ended T&M.",
    },
    {
        q: "Do you offer ongoing maintenance after launch?",
        a: "Yes — monthly retainers covering hosting, security patching, and small feature work. Or take the codebase fully in-house. No lock-in.",
    },
];

export default function NYCManhattanPage() {
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
                        <li className="text-gray-300">Manhattan</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-blue-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development in Manhattan NYC
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Manhattan is the densest mid-market and enterprise software buyer pool in the country. The Financial District anchors Wall Street fintech and trading-system demand; Midtown concentrates media operators, agency-side platforms, and the publisher ecosystem; Flatiron and SoHo host venture-backed B2B SaaS at every stage from seed to growth. Each submarket buys software differently — but the engineering depth required is consistent.
                    </p>
                    <ConsultationCTA label="Scope a Manhattan Project" city="Manhattan, New York, NY" source="neighborhood-nyc-manhattan" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Manhattan businesses partner with QUANT LAB</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Manhattan procurement is fast and formal at the same time. Wall Street fintech buyers, Midtown publishers, and Flatiron SaaS operators all share one constraint: they need senior engineering accountable to the contract, security posture that survives third-party diligence, and a fixed-quote model that does not balloon mid-engagement. QUANT LAB delivers exactly that. William Beltz scopes, builds, and ships every project personally. No offshore handoff, no junior outsourcing, no agency markup layer.
                        </p>
                        <p>
                            The Manhattan buyer profile rewards engineering depth in fintech, trading systems, and media SaaS. Production trading platforms with hard risk controls and broker integrations, multi-tenant publisher tooling, agency campaign-management systems, and SOC 2 CC-mapped pen test reports — these are the primitives our Manhattan engagements lean on. Most close on fixed-scope, fixed-price proposals with weekly Friday demos and a written acceptance milestone.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build for Manhattan clients</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work with Manhattan teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            We are headquartered in Macon, Georgia and run Eastern Time delivery — same time zone as NYC, with full overlap. Manhattan engagements are remote-first, with one on-site session per major milestone — typically at an office in the Financial District, Midtown, Flatiron, or SoHo. Build cycles run weekly: every Friday you get a deployed staging URL, written change notes, and the next-week plan. Manhattan engagements close on fixed-scope, fixed-price proposals — no open-ended T&M billing surprises.
                        </p>
                    </div>
                    <div className="mt-6">
                        <ConsultationCTA label="Book a Manhattan Scoping Call" city="Manhattan, New York, NY" source="neighborhood-nyc-manhattan-mid" />
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
                            { href: "/software-development-new-york-ny", title: "New York, NY (parent)", desc: "Full NYC-metro coverage page." },
                            { href: "/locations/miami-brickell", title: "Brickell Miami", desc: "LATAM fintech and crypto." },
                            { href: "/locations/san-francisco-soma", title: "SoMa San Francisco", desc: "West Coast venture-backed SaaS." },
                            { href: "/locations/dallas-uptown", title: "Uptown Dallas", desc: "Texas enterprise SaaS." },
                            { href: "/services/algorithmic-trading-systems", title: "Algorithmic Trading Systems", desc: "Production trading bots with risk controls." },
                            { href: "/services/saas-platform-development", title: "SaaS Platform Development", desc: "Multi-tenant platform builds." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Pre-SOC-2 engagements for fintech." },
                            { href: "/services/api-development", title: "API Development", desc: "OAuth, webhooks, public APIs." },
                            { href: "/work/multi-strategy-trading-system", title: "Case Study: Trading System", desc: "Production trading platform." },
                            { href: "/work/active-directory-pentest", title: "Case Study: AD Pen Test", desc: "Network and identity engagement." },
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
                            Ready to talk Manhattan?
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> to scope your Manhattan build.
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
