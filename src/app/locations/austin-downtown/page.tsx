import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Software Development in Downtown Austin TX | QUANT LAB USA",
    description:
        "Custom software development for downtown Austin SaaS and startup founders. Founder-led, US-based, Stripe and pen test ready. Call (770) 652-1282.",
    alternates: { canonical: "https://quantlabusa.dev/locations/austin-downtown" },
    openGraph: {
        title: "Custom Software Development in Downtown Austin TX | QUANT LAB USA",
        description: "Downtown Austin SaaS builds, fintech, and pen testing along the Second Street and Rainey corridors.",
        url: "https://quantlabusa.dev/locations/austin-downtown",
        type: "article",
    },
    twitter: {
        card: "summary",
        title: "Custom Software Development in Downtown Austin TX | QUANT LAB USA",
        description: "Downtown Austin SaaS builds and pen testing.",
    },
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/locations/austin-downtown#localbusiness",
    name: "QUANT LAB USA — Downtown Austin Coverage",
    url: "https://quantlabusa.dev/locations/austin-downtown",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "Place", name: "Downtown Austin", containedInPlace: { "@type": "City", name: "Austin" } },
        { "@type": "Place", name: "Second Street District" },
        { "@type": "Place", name: "Rainey Street" },
        { "@type": "Place", name: "East Austin" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 30.2672, longitude: -97.7431 },
    address: { "@type": "PostalAddress", addressLocality: "Austin", addressRegion: "TX", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development",
    name: "Custom Software Development in Downtown Austin, TX",
    provider: { "@id": "https://quantlabusa.dev/#organization" },
    areaServed: { "@type": "Place", name: "Downtown Austin, TX" },
    description:
        "Venture-backed SaaS builds, Stripe Connect, fintech infrastructure, and SOC 2 pen tests for Downtown Austin and the Second Street / Rainey corridors.",
    url: "https://quantlabusa.dev/locations/austin-downtown",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Locations", item: "https://quantlabusa.dev/locations" },
        { "@type": "ListItem", position: 3, name: "Downtown Austin", item: "https://quantlabusa.dev/locations/austin-downtown" },
    ],
};

const services = [
    {
        title: "SaaS MVPs for Venture-Backed Teams",
        desc: "Multi-tenant SaaS, Stripe metered billing, dashboarding, and admin tooling — built ship-ready for seed and Series A pitches in the Downtown corridor.",
    },
    {
        title: "Fintech & Crypto-Adjacent Builds",
        desc: "Austin&apos;s fintech bench has deep crypto, treasury management, and consumer-finance representation. We ship Stripe Connect, custody-adjacent ops, and ACH plumbing.",
    },
    {
        title: "Penetration Testing for SOC 2 & Audit",
        desc: "Pre-Type-I pen tests for Downtown Austin SaaS firms entering enterprise procurement cycles.",
    },
    {
        title: "API & Webhook Infrastructure",
        desc: "OAuth/SSO, webhook fan-out, and public APIs for B2B SaaS shipping out of the Second Street and Rainey corridors.",
    },
];

const faqs = [
    {
        q: "Do you work with Downtown Austin venture-backed SaaS firms?",
        a: "Yes. The Second Street District, Rainey Street corridor, and the East Austin tech belt north of I-35 concentrate one of the highest densities of seed-to-Series-B SaaS firms in the country. We scope MVPs that ship in 8–12 weeks on fixed-quote terms.",
    },
    {
        q: "Can you meet at a Downtown Austin office?",
        a: "Yes — we travel into Austin regularly. Typical meetings happen at offices along Second Street, Congress Avenue, or near Lady Bird Lake. We coordinate one on-site session per major engagement.",
    },
    {
        q: "Are you remote-friendly for Austin clients?",
        a: "Yes. Most of our delivery is remote with weekly Friday staging URLs and written change notes. Austin clients see us on-site for kickoffs and major review milestones.",
    },
    {
        q: "What is the typical Downtown Austin engagement timeline?",
        a: "Most Downtown Austin MVPs ship in 8–12 weeks against a fixed-scope quote. Full builds run 3–6 months and close at written acceptance — not open-ended T&M.",
    },
    {
        q: "Do you handle Texas-specific SaaS billing concerns?",
        a: "Yes — Texas treats most SaaS as taxable digital service at the state level, so multi-state Stripe Tax configuration matters when you sell across state lines. We wire it up correctly at billing time.",
    },
    {
        q: "Do you support crypto and treasury-management infrastructure?",
        a: "Yes — Austin has a deep crypto and treasury-management buyer base. We have scoped custody-adjacent ops, on-chain reporting, and ACH-to-stablecoin plumbing for that profile. We do not provide investment advice and we do not execute trades on behalf of clients.",
    },
];

export default function AustinDowntownPage() {
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
                        <li className="text-gray-300">Downtown Austin</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-blue-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development in Downtown Austin TX
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Downtown Austin is the densest stretch of venture-backed software in Texas. The grid running from the Second Street District through Congress Avenue, Rainey Street, and east across I-35 concentrates seed-to-Series-B SaaS firms, fintech operators, crypto and treasury-management builders, and the consumer-finance bench that grew up around the Austin tech scene over the last decade.
                    </p>
                    <ConsultationCTA label="Scope a Downtown Austin Project" city="Downtown Austin, TX" source="neighborhood-austin-downtown" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Downtown Austin businesses partner with QUANT LAB</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Downtown Austin software buyers move fast. Venture-backed teams need senior engineering accountable to the contract, security posture that survives Series A diligence, and a fixed-quote model that does not balloon mid-engagement. QUANT LAB runs founder-led delivery on every project. William Beltz scopes, builds, and ships. There is no agency markup layer, no junior outsourcing, no project manager translating between you and the engineer writing the code.
                        </p>
                        <p>
                            The Austin buyer profile rewards depth in modern web and fintech infrastructure. Stripe Connect and metered billing for SaaS, OAuth/SSO and webhook fan-out for API products, and pen test reports that map to SOC 2 CC controls — these are the primitives that show up in every Series A diligence packet. We deliver them as part of the build, not as a separate scope line. Austin engagements close on fixed-scope proposals with weekly Friday demos and a written acceptance milestone.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build for Downtown Austin clients</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work with Downtown Austin teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            We are headquartered in Macon, Georgia and run Eastern Time delivery with full overlap into Central Time. Austin engagements are remote-first, with one on-site session per major milestone — typically at a Second Street District office or near Lady Bird Lake. Build cycles run weekly: every Friday you get a deployed staging URL, written change notes, and the next-week plan. Austin engagements close on fixed-scope, fixed-price proposals — no open-ended T&M billing surprises.
                        </p>
                    </div>
                    <div className="mt-6">
                        <ConsultationCTA label="Book a Downtown Austin Scoping Call" city="Downtown Austin, TX" source="neighborhood-austin-downtown-mid" />
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
                            { href: "/software-development-austin-tx", title: "Austin, TX (parent)", desc: "Full Austin-metro coverage page." },
                            { href: "/locations/dallas-uptown", title: "Uptown Dallas", desc: "Texas enterprise and DFW coverage." },
                            { href: "/locations/nyc-manhattan", title: "Manhattan, NYC", desc: "Wall Street fintech and media." },
                            { href: "/locations/san-francisco-soma", title: "SoMa San Francisco", desc: "West Coast venture-backed SaaS." },
                            { href: "/services/saas-platform-development", title: "SaaS Platform Development", desc: "Multi-tenant MVPs and platform builds." },
                            { href: "/services/api-development", title: "API Development", desc: "OAuth, webhooks, and public APIs." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Pre-SOC-2 engagements for SaaS." },
                            { href: "/services/stripe-integration", title: "Stripe Integration", desc: "Subscription, metered, and Connect builds." },
                            { href: "/work/multi-strategy-trading-system", title: "Case Study: Trading System", desc: "Production trading platform." },
                            { href: "/work/j5-sales-os", title: "Case Study: J5 Sales OS", desc: "Custom sales operations platform." },
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
                            Ready to talk Downtown Austin?
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> to scope your Second Street-corridor build.
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
