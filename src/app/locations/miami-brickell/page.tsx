import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Software Development in Brickell Miami FL | QUANT LAB USA",
    description:
        "Custom software development & pen testing for Brickell fintech and LATAM-facing SaaS firms. Multi-currency Stripe ready. Call (770) 652-1282.",
    alternates: { canonical: "https://quantlabusa.dev/locations/miami-brickell" },
    openGraph: {
        title: "Custom Software Development in Brickell Miami | QUANT LAB USA",
        description: "Brickell-focused fintech, crypto, and LATAM-facing platform builds plus SOC 2 pen testing.",
        url: "https://quantlabusa.dev/locations/miami-brickell",
        type: "article",
    },
    twitter: {
        card: "summary",
        title: "Custom Software Development in Brickell Miami | QUANT LAB USA",
        description: "Brickell fintech and crypto platform builds.",
    },
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/locations/miami-brickell#localbusiness",
    name: "QUANT LAB USA — Brickell Miami Coverage",
    url: "https://quantlabusa.dev/locations/miami-brickell",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "Place", name: "Brickell", containedInPlace: { "@type": "City", name: "Miami" } },
        { "@type": "Place", name: "Downtown Miami" },
        { "@type": "Place", name: "Brickell Key" },
        { "@type": "Place", name: "Mary Brickell Village" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 25.7617, longitude: -80.1918 },
    address: { "@type": "PostalAddress", addressLocality: "Miami", addressRegion: "FL", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development",
    name: "Custom Software Development in Brickell Miami",
    provider: { "@id": "https://quantlabusa.dev/#organization" },
    areaServed: { "@type": "Place", name: "Brickell, Miami, FL" },
    description:
        "LATAM-facing fintech, crypto infrastructure, banking-adjacent SaaS, and SOC 2 pen tests for Brickell-headquartered firms.",
    url: "https://quantlabusa.dev/locations/miami-brickell",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Locations", item: "https://quantlabusa.dev/locations" },
        { "@type": "ListItem", position: 3, name: "Brickell", item: "https://quantlabusa.dev/locations/miami-brickell" },
    ],
};

const services = [
    {
        title: "LATAM-Facing Fintech Infrastructure",
        desc: "Multi-currency Stripe Connect, cross-border ACH/wire, and KYC/KYB workflows for Brickell-based fintech operators serving the LATAM market.",
    },
    {
        title: "Crypto & Treasury-Management Builds",
        desc: "Custody-adjacent ops, on-chain reporting, and stablecoin-to-ACH plumbing for Miami&apos;s deep crypto bench. We do not provide investment advice or execute trades.",
    },
    {
        title: "Banking-Adjacent SaaS",
        desc: "Multi-tenant platforms for private banking, wealth management, and family office operators headquartered along Brickell Avenue.",
    },
    {
        title: "Penetration Testing for SOC 2 & PCI",
        desc: "Web app, network, AD, and wireless engagements for Brickell fintech and crypto firms entering enterprise procurement cycles.",
    },
];

const faqs = [
    {
        q: "Do you work with Brickell fintech and crypto firms?",
        a: "Yes — Brickell is one of the deepest fintech and crypto buyer pools in the country. The corridor along Brickell Avenue between SE 8th and SE 14th concentrates LATAM-facing fintech, private banks, and crypto operators that need serious custom software and security.",
    },
    {
        q: "Are you familiar with LATAM-facing payment infrastructure?",
        a: "Yes. Multi-currency Stripe Connect, cross-border ACH and wire, KYC/KYB workflows for Mexican and Brazilian counterparties, and stablecoin-to-fiat plumbing are all part of our practice for Brickell-based fintech.",
    },
    {
        q: "Can you meet at a Brickell office?",
        a: "Yes — we travel to Miami for major engagements. Typical meetings happen at offices along Brickell Avenue, Brickell Key, or Mary Brickell Village. One on-site session per major milestone is standard for larger builds.",
    },
    {
        q: "How is Brickell different from broader Miami for a software buyer?",
        a: "Brickell concentrates banking, fintech, crypto, and private wealth at densities much higher than the rest of the metro. The procurement style is more formal and the typical engagement size is larger. Wynwood and Miami Beach skew creative-economy and consumer; Brickell skews financial.",
    },
    {
        q: "Do you support crypto-native businesses?",
        a: "Yes. Custody-adjacent ops, on-chain accounting, treasury management, and stablecoin payment plumbing are all in scope. We do not provide investment advice and we do not execute trades on behalf of clients.",
    },
    {
        q: "Do you offer ongoing maintenance after launch?",
        a: "Yes — monthly retainers covering hosting, security patching, and small feature work. Or take the codebase fully in-house. No lock-in.",
    },
];

export default function MiamiBrickellPage() {
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
                        <li className="text-gray-300">Brickell Miami</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-blue-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development in Brickell Miami
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Brickell is the financial capital of LATAM-facing fintech and one of the deepest crypto buyer pools in the country. The stretch of Brickell Avenue between SE 8th and SE 14th concentrates private banks, wealth advisors, multi-currency fintech operators, and the post-2020 wave of crypto firms that relocated south. The software demand follows the money: multi-currency Stripe Connect, cross-border ACH and wire, KYC/KYB for Mexican and Brazilian counterparties, and SOC 2 pen tests that survive bank-grade diligence.
                    </p>
                    <ConsultationCTA label="Scope a Brickell Project" city="Brickell, Miami, FL" source="neighborhood-miami-brickell" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Brickell businesses partner with QUANT LAB</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Brickell procurement is formal. Private banks, LATAM-facing fintech, and crypto firms expect bank-grade engineering posture from any vendor that touches the money rails: senior accountability, security that survives third-party diligence, and a fixed-quote model that does not balloon mid-engagement. QUANT LAB sits in that gap. William Beltz scopes, builds, and ships every project personally. No offshore handoff, no junior outsourcing, no agency markup.
                        </p>
                        <p>
                            The Brickell buyer profile rewards deep fintech engineering. Multi-currency Stripe Connect, cross-border ACH and wire, KYC/KYB workflows for Mexican and Brazilian counterparties, and audit logging that maps to SOC 2 CC controls are core to our practice. Crypto-native operators add custody-adjacent ops, on-chain reporting, and stablecoin-to-fiat plumbing on top. We deliver these as part of the build — not as separate scope lines — and close on fixed-scope proposals with weekly Friday demos and written acceptance milestones.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build for Brickell clients</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work with Brickell teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            We are headquartered in Macon, Georgia and run Eastern Time delivery — same time zone as Miami, with full overlap. Brickell engagements are remote-first, with one on-site session per major milestone — typically at an office along Brickell Avenue, Brickell Key, or Mary Brickell Village. Build cycles run weekly: every Friday you get a deployed staging URL, written change notes, and the next-week plan. Brickell engagements close on fixed-scope, fixed-price proposals — no open-ended T&M billing surprises.
                        </p>
                    </div>
                    <div className="mt-6">
                        <ConsultationCTA label="Book a Brickell Scoping Call" city="Brickell, Miami, FL" source="neighborhood-miami-brickell-mid" />
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
                            { href: "/software-development-miami-fl", title: "Miami, FL (parent)", desc: "Full Miami-metro coverage page." },
                            { href: "/locations/atlanta-buckhead", title: "Buckhead Atlanta", desc: "Southeast wealth and corporate HQ." },
                            { href: "/locations/nyc-manhattan", title: "Manhattan, NYC", desc: "Wall Street fintech." },
                            { href: "/locations/austin-downtown", title: "Downtown Austin", desc: "Texas fintech and crypto." },
                            { href: "/services/payments-invoicing-licensing", title: "Payments & Licensing", desc: "Stripe Connect, ACH, billing systems." },
                            { href: "/services/stripe-integration", title: "Stripe Integration", desc: "Multi-currency and Connect builds." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Pre-SOC-2 engagements for fintech." },
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "Banking and wealth ops platforms." },
                            { href: "/work/multi-strategy-trading-system", title: "Case Study: Trading System", desc: "Production trading platform." },
                            { href: "/work/protectwithbri", title: "Case Study: ProtectWithBri", desc: "Custom platform delivery." },
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
                            Ready to talk Brickell?
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> to scope your Brickell Avenue-corridor build.
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
