import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Custom Software Development in Uptown Dallas TX | QUANT LAB",
    description:
        "Custom software development in Uptown Dallas TX — McKinney Avenue corridor, fintech, and enterprise SaaS builds. Founder-led, fixed-quote delivery.",
    alternates: { canonical: "https://quantlabusa.dev/locations/dallas-uptown" },
    openGraph: {
        title: "Custom Software Development in Uptown Dallas TX | QUANT LAB",
        description: "Uptown Dallas software builds and SOC 2 pen testing along the McKinney Avenue corridor.",
        url: "https://quantlabusa.dev/locations/dallas-uptown",
        type: "article",
    },
    twitter: {
        card: "summary",
        title: "Custom Software Development in Uptown Dallas TX | QUANT LAB",
        description: "Uptown Dallas software builds and pen testing.",
    },
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/locations/dallas-uptown#localbusiness",
    name: "QUANT LAB USA — Uptown Dallas Coverage",
    url: "https://quantlabusa.dev/locations/dallas-uptown",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "Place", name: "Uptown Dallas", containedInPlace: { "@type": "City", name: "Dallas" } },
        { "@type": "Place", name: "McKinney Avenue corridor" },
        { "@type": "Place", name: "Knox-Henderson" },
        { "@type": "Place", name: "Victory Park" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 32.7989, longitude: -96.8019 },
    address: { "@type": "PostalAddress", addressLocality: "Dallas", addressRegion: "TX", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development",
    name: "Custom Software Development in Uptown Dallas, TX",
    provider: { "@id": "https://quantlabusa.dev/#org" },
    areaServed: { "@type": "Place", name: "Uptown Dallas, TX" },
    description:
        "Enterprise SaaS, fintech infrastructure, custom CRMs, and SOC 2 penetration tests for Uptown Dallas firms along the McKinney Avenue corridor.",
    url: "https://quantlabusa.dev/locations/dallas-uptown",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Locations", item: "https://quantlabusa.dev/locations" },
        { "@type": "ListItem", position: 3, name: "Uptown Dallas", item: "https://quantlabusa.dev/locations/dallas-uptown" },
    ],
};

const services = [
    {
        title: "Enterprise SaaS & Mid-Market Platforms",
        desc: "Multi-tenant SaaS, admin dashboards, and white-label platforms for DFW enterprise operators and venture-backed mid-market firms.",
    },
    {
        title: "Fintech-grade Stripe & ACH Builds",
        desc: "Subscription billing, ACH integrations, and multi-tenant entitlements for Uptown-headquartered fintech and SaaS operators.",
    },
    {
        title: "Custom CRMs for DFW Operators",
        desc: "Replace Salesforce or HubSpot with a platform you own. Lead-to-revenue plumbing for energy, real estate, and professional services firms.",
    },
    {
        title: "Penetration Testing for SOC 2",
        desc: "Web app, AD, and network engagements for Uptown-corridor SaaS firms entering enterprise procurement cycles.",
    },
];

const faqs = [
    {
        q: "Do you work with Uptown Dallas SaaS and fintech firms?",
        a: "Yes. The McKinney Avenue corridor, Victory Park, and Knox-Henderson concentrate one of the densest mid-market SaaS and fintech buyer pools in Texas. We scope MVPs and full platform builds on fixed-quote terms.",
    },
    {
        q: "Can you meet at an Uptown Dallas office?",
        a: "Yes — we travel into DFW regularly. Typical meetings happen at offices along McKinney Avenue, Victory Park, or the Knox-Henderson corridor. One on-site session per major milestone is standard for larger engagements.",
    },
    {
        q: "Are you familiar with DFW enterprise procurement?",
        a: "Yes. Dallas enterprise buyers tend to run more formal procurement than Austin venture-backed teams. We accommodate full RFP cycles, MSA review, and DPA negotiation when required.",
    },
    {
        q: "What is the typical Uptown Dallas engagement timeline?",
        a: "Most Dallas MVPs ship in 8–12 weeks against a fixed-scope quote. Enterprise platform builds run 4–8 months and close at written acceptance — not open-ended T&M.",
    },
    {
        q: "Do you handle Texas franchise tax and SaaS billing concerns?",
        a: "Yes. Texas treats most SaaS as taxable digital service at the state level. We wire Stripe Tax up correctly for multi-state billing at the platform layer so franchise-tax reporting is clean.",
    },
    {
        q: "Do you offer ongoing maintenance after launch?",
        a: "Yes — monthly retainers covering hosting, security patching, and small feature work. Or take the codebase fully in-house. No lock-in.",
    },
];

export default function DallasUptownPage() {
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
                        <li className="text-gray-300">Uptown Dallas</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-blue-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development in Uptown Dallas TX
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Uptown Dallas is the densest pocket of mid-market and venture-backed software in North Texas. The corridor running from Victory Park through the McKinney Avenue tram route and east to Knox-Henderson concentrates SaaS HQs, fintech operators, energy-adjacent platforms, and the enterprise procurement bench that defines DFW software demand.
                    </p>
                    <ConsultationCTA label="Scope an Uptown Dallas Project" city="Uptown Dallas, TX" source="neighborhood-dallas-uptown" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Uptown Dallas businesses partner with QUANT LAB</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            DFW enterprise buyers run formal procurement: full RFP cycles, MSA review, DPA negotiation, and detailed third-party diligence. QUANT LAB accommodates all of it without the agency markup. William Beltz scopes, builds, and ships every project personally. There is no offshore handoff, no junior outsourcing, no project manager layer. Most Uptown Dallas engagements close on fixed-scope, fixed-price proposals with weekly Friday demos and a written acceptance milestone.
                        </p>
                        <p>
                            The Dallas buyer profile rewards engineering depth in fintech, energy-adjacent ops, and enterprise SaaS. Stripe Connect and ACH-grade billing, multi-tenant entitlements, OAuth/SSO for API products, and SOC 2 CC-mapped pen test reports — these are the primitives that show up in every Dallas enterprise diligence packet. We deliver them as part of the build, not as a separate scope line.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build for Uptown Dallas clients</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work with Uptown Dallas teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            We are headquartered in Macon, Georgia and run Eastern Time delivery with full overlap into Central Time. Uptown Dallas engagements are remote-first, with one on-site session per major milestone — typically at an office along McKinney Avenue, Victory Park, or near the Knox-Henderson corridor. Build cycles run weekly: every Friday you get a deployed staging URL, written change notes, and the next-week plan. Dallas engagements close on fixed-scope, fixed-price proposals — no open-ended T&M billing surprises.
                        </p>
                    </div>
                    <div className="mt-6">
                        <ConsultationCTA label="Book an Uptown Dallas Scoping Call" city="Uptown Dallas, TX" source="neighborhood-dallas-uptown-mid" />
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
                            { href: "/software-development-dallas-tx", title: "Dallas, TX (parent)", desc: "Full Dallas-metro coverage page." },
                            { href: "/locations/austin-downtown", title: "Downtown Austin", desc: "Texas venture-backed SaaS." },
                            { href: "/locations/nyc-manhattan", title: "Manhattan, NYC", desc: "Wall Street fintech and media." },
                            { href: "/locations/atlanta-buckhead", title: "Buckhead Atlanta", desc: "Southeast wealth and corporate HQ." },
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "Enterprise ops platforms." },
                            { href: "/services/custom-crm-development", title: "Custom CRM Development", desc: "Own your CRM. No per-seat creep." },
                            { href: "/services/payments-invoicing-licensing", title: "Payments & Licensing", desc: "Stripe and ACH-grade billing." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, network, AD engagements." },
                            { href: "/work/multi-strategy-trading-system", title: "Case Study: Trading System", desc: "Production trading platform." },
                            { href: "/work/contractor-estimating-proposal-engine", title: "Case Study: Estimating Engine", desc: "Estimate-to-proposal automation." },
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
                            Ready to talk Uptown Dallas?
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> to scope your McKinney Avenue-corridor build.
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
