import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Miami Custom Software, SaaS & LATAM Fintech Dev | QUANT LAB USA",
    description:
        "Miami software development for fintech, hospitality, and LATAM-facing SaaS. Multi-currency Stripe, custom dashboards, pen testing. Call (770) 652-1282.",
    slug: "software-development-miami-fl",
    image: "/og-image.png",
    type: "article",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-miami-fl#localbusiness",
    name: "QUANT LAB USA — Miami Coverage",
    url: "https://quantlabusa.dev/software-development-miami-fl",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Miami", containedInPlace: { "@type": "State", name: "Florida" } },
        { "@type": "City", name: "Miami Beach" },
        { "@type": "City", name: "Coral Gables" },
        { "@type": "City", name: "Doral" },
        { "@type": "City", name: "Brickell" },
        { "@type": "AdministrativeArea", name: "Miami-Dade County" },
        { "@type": "AdministrativeArea", name: "South Florida" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 25.7617, longitude: -80.1918 },
    address: { "@type": "PostalAddress", addressLocality: "Miami", addressRegion: "FL", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development",
    name: "Custom Software Development in Miami, FL",
    provider: { "@id": "https://quantlabusa.dev/#organization" },
    areaServed: { "@type": "City", name: "Miami", containedInPlace: { "@type": "State", name: "Florida" } },
    description:
        "Multi-currency Stripe, hospitality and booking platforms, LATAM-ready SaaS, and penetration testing for Miami fintech and cross-border companies.",
    url: "https://quantlabusa.dev/software-development-miami-fl",
};

const services = [
    {
        title: "LATAM-Ready Multi-Currency Stripe",
        desc: "Subscription products handling USD, BRL, MXN, COP, and CLP without the usual edge-case bugs. Typical: $12k–$35k.",
    },
    {
        title: "Hospitality & Booking Platforms",
        desc: "Custom alternatives to vertical SaaS for hotels, restaurants, and event groups across Miami-Dade. Typical: $20k–$70k.",
    },
    {
        title: "Penetration Testing for Investor DD",
        desc: "Web app, network, and AD engagements ahead of institutional investor due diligence. Typical: $8k–$28k.",
    },
    {
        title: "i18n / Spanish-Language UI Builds",
        desc: "Bilingual EN/ES product surfaces with proper locale routing and date/currency formatting. Typical: included or +$4k–$12k.",
    },
    {
        title: "Cross-Border Compliance Tooling",
        desc: "KYC routing, sanctions screening, OFAC checks, and per-country onboarding flows. Typical: $15k–$45k.",
    },
    {
        title: "Real-Estate & Luxury-Brand SaaS",
        desc: "Listing platforms, CRM, and broker tooling for the South Florida luxury market. Typical: $25k–$80k.",
    },
];

const faqs = [
    {
        q: "Do you support Spanish-language UI builds?",
        a: "Yes — i18n is standard in our Next.js builds. We ship EN/ES out of the gate with proper locale routing, currency, and date formatting. Portuguese is available on request for Brazil-facing products.",
    },
    {
        q: "Can you handle LATAM payments?",
        a: "Yes — Stripe is our default, and we know which currencies it handles cleanly versus when to route through local processors like dLocal or PayU. We have shipped USD, BRL, MXN, and COP billing flows.",
    },
    {
        q: "Are you available for on-site work in Miami?",
        a: "Yes, for engagements that warrant travel. We fly into MIA for kickoffs and major milestones — Brickell, Wynwood, Coral Gables, or Aventura are all easy.",
    },
    {
        q: "Do you work with Miami fintech and crypto-adjacent companies?",
        a: "Yes — the Miami fintech relocation wave brought a lot of stablecoin, neobank, and remittance work. We scope crypto-adjacent and exchange-adjacent work case by case.",
    },
    {
        q: "What about Florida data and privacy compliance?",
        a: "We are familiar with the Florida Information Protection Act and FDUTPA. For products handling protected health information or cross-border data, we scope BAA and DPA flows deliberately.",
    },
    {
        q: "Can you build for cruise-industry and hospitality operators?",
        a: "Yes — booking, manifesting, and crew-management tooling for cruise-adjacent and Port of Miami operators is in scope. South Florida hospitality is one of our largest verticals here.",
    },
    {
        q: "Do you handle institutional investor due-diligence security reviews?",
        a: "Yes — pen test reports, architecture diagrams, and SBOM-style summaries on request, formatted for the kind of due-diligence package VCs and family offices expect.",
    },
    {
        q: "What is your timezone overlap with Miami?",
        a: "Georgia HQ — full Eastern Time, identical to Miami. No timezone friction at all.",
    },
];

export default function MiamiLandingPage() {
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
                    <ConsultationCTA label="Scope a Miami Build" city="Miami, FL" source="city-miami" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            That mix creates one of the most interesting development markets in the country: bilingual products, multi-currency billing, cross-border compliance, and ambitious founders who need to ship fast. QUANT LAB USA builds for exactly that profile, with full Eastern Time overlap and a same-day flight when scope warrants in-person work.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Miami businesses choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Miami&apos;s tech economy went from punchline to serious in roughly three years. The 2021 founder migration brought capital, talent, and a critical mass of fintech, neobank, and crypto-adjacent companies that now anchor Brickell and Wynwood. The Miami International Airport is the busiest US gateway for Latin American capital, which means Miami-headquartered software is regularly bilingual by default and routinely needs to invoice in BRL, MXN, COP, and CLP without surprises. South Florida hospitality — Brickell hotels, South Beach event groups, restaurant collectives across Wynwood and the Design District — runs as one of the densest hospitality clusters in the country. And the Port of Miami, the busiest cruise terminal in the world, generates demand for booking, manifesting, and operations tooling that vertical SaaS does not solve cleanly.
                        </p>
                        <p>
                            You will not be passed to an offshore team. William Beltz leads every project end-to-end. We work remotely with Miami clients efficiently, with overlap hours that exactly match East Coast schedules — same time zone, same business day — and a willingness to fly in when scope demands it. For Miami founders that translates to senior engineering at a price point the relocated New York and Bay Area shops cannot match, on a same-state-of-mind East Coast cadence.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for Miami clients</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Track record</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Our portfolio spans operations platforms (<Link href="/work/j5-sales-os" className="text-sky-400 hover:underline">J5 Sales OS</Link>, UEhub), content sites (<Link href="/work/protectwithbri" className="text-sky-400 hover:underline">ProtectWithBri</Link>, Aaron Coleman Music), and trade brands (<Link href="/work/northcrest-fence" className="text-sky-400 hover:underline">Northcrest Fence</Link>). The J5 Sales OS build is the most directly relevant for Miami fintech and SaaS founders: an AI-powered prospecting, enrichment, and pipeline tool combining Google Places lead discovery, concurrent email scraping, OpenAI qualification and outreach generation, and a full CRM pipeline. The same architecture transfers cleanly to LATAM-facing prospecting and bilingual outreach surfaces.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Full ET overlap from Georgia HQ — same business day as Miami",
                            "i18n / Spanish-language UI builds standard",
                            "Multi-currency Stripe across USD, BRL, MXN, COP, and CLP",
                            "Pen test reports formatted for institutional DD packages",
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work remotely with Miami teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Miami sits in the same time zone as our Georgia HQ, which means standups happen on your schedule, not ours. Most kickoffs run as a 90-minute video session followed by a fly-in for engagements above ~$25k — Brickell, Wynwood, Coral Gables, or Aventura are all easy from MIA. After kickoff, build cycles run weekly: every Friday you get a deployed staging URL, written notes on what changed, and the next-week plan. Most Miami engagements close on fixed-scope, fixed-price proposals — fintech founders especially value the predictability when raising or running on a runway. When the project ships, the code, the database, and the hosting accounts all transfer to you. For LATAM-facing products, we explicitly test bilingual flows, currency-edge-case rendering, and locale-aware date and number formatting before sign-off.
                        </p>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services & nearby cities</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { href: "/services/payments-invoicing-licensing", title: "Payments & Licensing", desc: "Multi-currency Stripe and licensing systems." },
                            { href: "/services/stripe-integration", title: "Stripe Integration", desc: "Subscription, metered, and multi-currency billing." },
                            { href: "/services/subscription-billing", title: "Subscription Billing", desc: "Recurring revenue infrastructure." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Pre-investor due-diligence engagements." },
                            { href: "/services/web-applications", title: "Web Applications", desc: "Bilingual Next.js / TypeScript builds." },
                            { href: "/services/custom-crm-development", title: "Custom CRM Development", desc: "Own your CRM — don&apos;t rent it." },
                            { href: "/blog/custom-crm-development-guide", title: "Custom CRM Development Guide", desc: "Pillar resource — build vs. buy, costs." },
                            { href: "/work/j5-sales-os", title: "Case Study: J5 Sales OS", desc: "AI prospecting and CRM pipeline." },
                            { href: "/work/protectwithbri", title: "Case Study: ProtectWithBri", desc: "High-trust advisor landing page." },
                            { href: "/software-development-atlanta-ga", title: "Atlanta, GA", desc: "Fintech, logistics, and SaaS." },
                            { href: "/software-development-charlotte-nc", title: "Charlotte, NC", desc: "Banking and fintech-adjacent work." },
                            { href: "/contact", title: "Start a Project", desc: "Scoping calls, fixed-quote proposals." },
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
                            Scope a Miami build.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> to scope a Miami build.
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
