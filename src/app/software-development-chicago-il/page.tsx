import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { MapPin, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Chicago Custom Software, Quant Trading & Pen Test | QUANT LAB USA",
    description:
        "Chicago software development for finance, logistics, and manufacturing — algorithmic trading systems, ops dashboards, and penetration testing. Call (770) 652-1282.",
    alternates: { canonical: "https://quantlabusa.dev/software-development-chicago-il" },
    openGraph: {
        title: "Chicago Custom Software, Quant Trading & Pen Test | QUANT LAB USA",
        description:
            "Chicago software development for finance, logistics, and manufacturing — trading systems, ops dashboards, and pen testing.",
        url: "https://quantlabusa.dev/software-development-chicago-il",
        type: "article",
    },
    twitter: {
        card: "summary",
        title: "Chicago Custom Software, Quant Trading & Pen Test | QUANT LAB USA",
        description:
            "Chicago software development for finance, logistics, and manufacturing.",
    },
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-chicago-il#localbusiness",
    name: "QUANT LAB USA — Chicago Coverage",
    url: "https://quantlabusa.dev/software-development-chicago-il",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Chicago", containedInPlace: { "@type": "State", name: "Illinois" } },
        { "@type": "City", name: "Evanston" },
        { "@type": "City", name: "Naperville" },
        { "@type": "City", name: "Schaumburg" },
        { "@type": "City", name: "Oak Park" },
        { "@type": "AdministrativeArea", name: "Cook County" },
        { "@type": "AdministrativeArea", name: "DuPage County" },
        { "@type": "AdministrativeArea", name: "Chicagoland" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 41.8781, longitude: -87.6298 },
    address: { "@type": "PostalAddress", addressLocality: "Chicago", addressRegion: "IL", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development",
    name: "Custom Software Development in Chicago, IL",
    provider: { "@id": "https://quantlabusa.dev/#org" },
    areaServed: { "@type": "City", name: "Chicago", containedInPlace: { "@type": "State", name: "Illinois" } },
    description:
        "Algorithmic trading tooling, logistics and manufacturing ops dashboards, and penetration testing for Chicago operators.",
    url: "https://quantlabusa.dev/software-development-chicago-il",
};

const services = [
    {
        title: "Algorithmic Trading Bots & Quant Tooling",
        desc: "Production trading systems with hard risk controls, broker API integration, and <12ms order latency. Typical: $25k–$120k.",
    },
    {
        title: "Logistics & Manufacturing Ops Dashboards",
        desc: "Real-time visibility into routes, jobs, inventory, and crews. Typical: $25k–$90k.",
    },
    {
        title: "Penetration Testing",
        desc: "Full-scope engagements including AD abuse paths and MITRE ATT&CK coverage. Typical: $10k–$35k.",
    },
    {
        title: "Rail & Freight Integration Tooling",
        desc: "Class I rail API integration, intermodal scheduling, and EDI for Chicago&apos;s rail-hub operators. Typical: $20k–$80k.",
    },
    {
        title: "Insurance & Healthcare Admin Software",
        desc: "Custom tooling for the deep Chicago insurance and healthcare-admin labor market. Typical: $25k–$90k.",
    },
    {
        title: "Stripe & Licensing Systems",
        desc: "Subscription billing, metered usage, and license keys. Typical: $8k–$25k.",
    },
];

const faqs = [
    {
        q: "Do you build algorithmic trading systems for individuals or prop shops?",
        a: "We have done both — scope and broker integration determine the engagement. Our production multi-strategy system runs <12ms order latency with hard risk controls baked into the order path itself, not just the UI.",
    },
    {
        q: "Can you support a SOX-driven internal audit cycle with pen test data?",
        a: "Yes — reports are formatted to drop into audit binders. Every finding is mapped to a MITRE ATT&CK technique with reproduction steps, remediation detail, and an executive summary for leadership.",
    },
    {
        q: "Do you fly in for kickoffs?",
        a: "For engagements above ~$25k, yes — usually a single afternoon at your office. The Loop, River North, Fulton Market, and the western collar suburbs are all easy from ORD.",
    },
    {
        q: "Are you familiar with CFTC or NFA reporting for trading-adjacent products?",
        a: "We build reporting hooks for downstream regulatory feeds, but we are software engineers, not compliance officers. We work alongside your existing CCO or compliance counsel rather than replacing them.",
    },
    {
        q: "What is your timezone overlap with Central?",
        a: "Georgia HQ — full Eastern Time. Our morning and your late morning overlap completely for standups; our late afternoon and your mid-afternoon overlap for reviews.",
    },
    {
        q: "Do you support FIX protocol or broker-specific APIs?",
        a: "Yes — we have shipped REST and WebSocket exchange integrations. FIX is scoped per requirement; not every engagement needs it.",
    },
    {
        q: "Can you build for rail and intermodal operators?",
        a: "Yes — Chicago is the largest rail hub in North America and the intermodal tooling demand is real. Our logistics dashboards transfer cleanly to rail-adjacent yard, intermodal, and drayage operations.",
    },
    {
        q: "Do you work with healthcare-admin and insurance vendors?",
        a: "Yes — for the deep Blue Cross Blue Shield, Allstate, and admin-tech ecosystem. PHI-touching work is scoped under BAA carefully; most engagements are operational tooling that does not touch PHI directly.",
    },
];

export default function ChicagoLandingPage() {
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
                        <li className="text-gray-300">Chicago, IL</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-blue-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development in Chicago, IL
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Chicago&apos;s economy is unusually rich for software demand: the trading and proprietary-finance ecosystem around the CBOT and CME, a massive logistics and rail-hub footprint, and a deep manufacturing base across the metro and out into the collar counties.
                    </p>
                    <ConsultationCTA label="Talk Chicago Projects" city="Chicago, IL" source="city-chicago" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Each of these markets generates serious software needs — and QUANT LAB USA&apos;s combination of algorithmic trading capability, ops tooling, and security testing fits the city&apos;s profile unusually well.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Chicago businesses choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Chicago&apos;s software demand is unusually layered. The trading ecosystem — CME Group, Cboe Global Markets, DRW, Citadel Securities, Jump Trading, Optiver, IMC — anchors a deep prop-trading and quant labor market clustered in the Loop, River North, and Fulton Market. The logistics base is the country&apos;s largest: BNSF, Union Pacific, CSX, CN, and Norfolk Southern all converge here, creating the largest intermodal rail-and-truck transfer hub in North America. UPS Worldport in Louisville and the FedEx hub in Memphis send freight through Chicago&apos;s collar-county warehousing every day. Manufacturing across DuPage and Lake counties — Abbott, Caterpillar component plants, food processing, plastics — generates ops-tooling demand that vertical SaaS does not solve cleanly. And the insurance and healthcare-admin layer (Allstate, Blue Cross Blue Shield of Illinois, the Walgreens Boots Alliance HQ in Deerfield) rounds out a labor market that pays well for software-adjacent talent and expects the same bar from vendors.
                        </p>
                        <p>
                            Chicago has plenty of enterprise consulting firms. What is harder to find is a founder-led shop that genuinely understands quant tooling, ships modern web apps, and runs credible offensive security engagements — all under one roof. That combination is what we offer. We have shipped a <Link href="/work/multi-strategy-trading-system" className="text-sky-400 hover:underline">production multi-strategy trading system</Link> running sub-12ms order latency with zero unplanned downtime, a full <Link href="/work/active-directory-pentest" className="text-sky-400 hover:underline">Active Directory pen test</Link> from standard user to Domain Admin for a regional financial firm, and operational tooling for several mid-market operators.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for Chicago clients</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Portfolio note</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Production sites and platforms in our portfolio include <Link href="/work/j5-sales-os" className="text-sky-400 hover:underline">J5 Sales OS</Link>, UEhub, <Link href="/work/protectwithbri" className="text-sky-400 hover:underline">ProtectWithBri</Link>, and <Link href="/work/wilder-recovery" className="text-sky-400 hover:underline">Wilder Recovery</Link>. Most directly relevant for Chicago is the <Link href="/work/multi-strategy-trading-system" className="text-sky-400 hover:underline">multi-strategy trading system</Link> case study — a production trading engine running MA Supertrend and VWAP strategies in parallel, with real-time exchange feeds, hard risk controls, and a Node.js dashboard for live positions and P&amp;L. Average order latency under 12ms, zero unplanned downtime since launch, full signal-and-fill audit trail in Postgres.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Algorithmic trading bots and quant tooling — real, in-house",
                            "Founder-led ops dashboards for logistics and manufacturing",
                            "Pen testing aligned to MITRE ATT&CK and SOX-friendly audits",
                            "Modern Next.js / TypeScript / PostgreSQL / Docker stack",
                            "Fixed-scope quotes on most engagements",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work remotely with Chicago teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Chicago is one hour behind Georgia HQ, which means our morning and your late morning overlap completely for standups and your mid-afternoon overlaps with our late afternoon for reviews. Most engagements start with a 60-minute scope by video. For engagements above ~$25k we fly into ORD or MDW for an on-site kickoff afternoon — the Loop, River North, Fulton Market, or one of the collar suburbs along I-90. Build cycles run weekly with a Friday staging URL, written notes, and the next-week plan. For trading engagements specifically, we build a separate staging exchange or paper-trade integration so the system can be exercised against real market data without putting capital at risk. Fixed-scope, fixed-price proposals on most engagements; full code, database, and infrastructure handover at acceptance.
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
                            { href: "/services/algorithmic-trading-systems", title: "Algorithmic Trading Systems", desc: "Trading bots and quant tooling." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Full-scope AD and MITRE engagements." },
                            { href: "/services/active-directory-pentest", title: "Active Directory Pen Test", desc: "Kerberoasting, ADCS abuse, lateral movement." },
                            { href: "/services/mitre-attack-assessment", title: "MITRE ATT&CK Assessment", desc: "Full attack-chain mapping for SOX." },
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "Ops dashboards and CRMs." },
                            { href: "/services/web-applications", title: "Web Applications", desc: "Internal apps and customer-facing builds." },
                            { href: "/work/multi-strategy-trading-system", title: "Case Study: Trading System", desc: "<12ms latency, multi-strategy production." },
                            { href: "/work/active-directory-pentest", title: "Case Study: AD Pen Test", desc: "Financial services firm — domain admin demonstrated." },
                            { href: "/blog/custom-crm-development-guide", title: "Custom CRM Development Guide", desc: "Pillar resource — build vs. buy." },
                            { href: "/software-development-new-york-ny", title: "New York, NY", desc: "Fintech and brokerage-adjacent tooling." },
                            { href: "/software-development-dallas-tx", title: "Dallas, TX", desc: "Corporate IT modernization." },
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
                            Talk Chicago projects.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> to talk Chicago projects.
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
