import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "San Francisco Custom Software, AI/SaaS & Pen Testing | QL USA",
    description:
        "San Francisco SaaS, AI, fintech, and quant software development plus penetration testing. Senior, founder-led engineering. Call (770) 652-1282.",
    slug: "software-development-san-francisco-ca",
    image: "/og-image.png",
    type: "article",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-san-francisco-ca#localbusiness",
    name: "QUANT LAB USA — San Francisco Coverage",
    url: "https://quantlabusa.dev/software-development-san-francisco-ca",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "San Francisco", containedInPlace: { "@type": "State", name: "California" } },
        { "@type": "City", name: "Oakland" },
        { "@type": "City", name: "Berkeley" },
        { "@type": "City", name: "Palo Alto" },
        { "@type": "City", name: "Mountain View" },
        { "@type": "City", name: "San Jose" },
        { "@type": "AdministrativeArea", name: "San Francisco County" },
        { "@type": "AdministrativeArea", name: "San Mateo County" },
        { "@type": "AdministrativeArea", name: "Santa Clara County" },
        { "@type": "AdministrativeArea", name: "Bay Area" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 37.7749, longitude: -122.4194 },
    address: { "@type": "PostalAddress", addressLocality: "San Francisco", addressRegion: "CA", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Penetration Testing",
    name: "Custom Software Development & Penetration Testing in San Francisco, CA",
    provider: { "@id": "https://quantlabusa.dev/#organization" },
    areaServed: { "@type": "City", name: "San Francisco", containedInPlace: { "@type": "State", name: "California" } },
    description:
        "Bay-standard SaaS builds, AI-backed product engineering, algorithmic trading and quant tooling, and MITRE-aligned penetration testing for San Francisco companies.",
    url: "https://quantlabusa.dev/software-development-san-francisco-ca",
};

const services = [
    {
        title: "AI-Backed SaaS Products",
        desc: "Production OpenAI, Anthropic, and inference-API-backed builds with rate-limit handling and cost monitoring. Typical: $25k–$120k.",
    },
    {
        title: "SaaS Products on a Bay-Standard Stack",
        desc: "Next.js, TypeScript, Node, PostgreSQL, Docker. Typical: $30k–$120k.",
    },
    {
        title: "Algorithmic Trading & Quant Tooling",
        desc: "Niche, real, in-house capability — not a junior pretending to know finance. Typical: $25k–$120k.",
    },
    {
        title: "Penetration Testing",
        desc: "Web app, network, and AD engagements with formal MITRE-ATT&CK-aligned reports. Typical: $12k–$40k.",
    },
    {
        title: "Pre-Series-A Investor Due Diligence",
        desc: "Architecture diagrams, SBOM, pen test, threat model — ready for Sequoia, a16z, Founders Fund DD. Typical: $10k–$25k.",
    },
    {
        title: "Developer Tooling & Internal Platforms",
        desc: "Internal CI tooling, observability dashboards, and platform-engineering work. Typical: $25k–$90k.",
    },
];

const faqs = [
    {
        q: "Can you handle a technical bake-off against in-house engineers?",
        a: "Yes — code samples, architecture walkthroughs, and pair-programming sessions available on request. Bay buyers expect to validate vendors against their own bar; we engineer accordingly.",
    },
    {
        q: "Do you build trading systems?",
        a: "Yes — our portfolio includes a production multi-strategy trading system running sub-12ms order latency with hard risk controls and zero unplanned downtime. Real money, real exchanges.",
    },
    {
        q: "Time-zone overlap with PT?",
        a: "Comfortable working morning through early afternoon Pacific from Georgia HQ. We run standups at 11am ET / 8am PT routinely; our late afternoon overlaps with your mid-morning for reviews.",
    },
    {
        q: "Do you support OpenAI, Anthropic, and other AI/ML product builds?",
        a: "Yes — production OpenAI, Anthropic, and inference-API-backed builds are routine in 2026. We handle rate limits, prompt versioning, cost monitoring, fallback chains, and evals as standard.",
    },
    {
        q: "Are you familiar with California-specific compliance (CCPA, CPRA)?",
        a: "Yes — CCPA, CPRA, and the broader California consumer-data regulatory framework are routine considerations in our SF SaaS builds. We wire consent surfaces and data-rights flows correctly at build time.",
    },
    {
        q: "Can you fly in for kickoffs?",
        a: "For engagements above ~$25k, yes — SFO is a 5-hour flight. We plan on-site afternoons in SoMa, FiDi, the Mission, Palo Alto, or Mountain View as scope warrants.",
    },
    {
        q: "Do you ship code that survives a Bay-grade review?",
        a: "Yes — strict TypeScript, ESLint, CI on every deploy, architecture docs co-located with the code, and a README that holds up to an a16z technical-due-diligence call. Every line is reviewed before merge.",
    },
    {
        q: "Can you support a Bay-area founder with a runway-conscious scope?",
        a: "Yes — most of our pre-Series A engagements close on fixed-scope, fixed-price proposals with weekly Friday staging URLs. Predictability over hourly billing is the Bay-founder default.",
    },
];

export default function SanFranciscoLandingPage() {
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
                        <li className="text-gray-300">San Francisco, CA</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development & Penetration Testing in San Francisco, CA
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        San Francisco is the most technical buyer market in the country. Every founder is one degree of separation from a senior engineer, every CTO has built the thing before, and contract pitches that lean on agency theater die fast.
                    </p>
                    <ConsultationCTA label="Scope an SF Engagement" city="San Francisco, CA" source="city-sf" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            What survives is genuine senior engineering, clean architecture, and the ability to ship. That is the entire pitch behind QUANT LAB USA in the Bay — founder-led delivery, modern stack, security-aware by default, and code that holds up to a Bay-grade review.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why San Francisco businesses choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            San Francisco&apos;s software demand is unlike any other US city. The AI boom anchored in SoMa, Hayes Valley, and the Mission — OpenAI, Anthropic, Scale AI, Mistral&apos;s US presence, plus an enormous orbit of AI-wrapper SaaS founders — has reshaped what buyers expect from contract engineering: production-grade OpenAI integration, cost-controlled inference, prompt versioning, evals, and rate-limit handling as a default. Below that sits the broader SaaS layer — Stripe, Notion, Figma, Linear, Vercel, Cloudflare — and below that the Peninsula and South Bay enterprise software cluster (Google, Salesforce, Workday, ServiceNow, Oracle, Cisco). The fintech layer — Stripe, Plaid, Brex, Mercury, Ramp, Bolt — generates payments and treasury tooling demand. And the small but real Bay Area quant and prop-trading scene (Hudson River Trading offices, Two Sigma&apos;s SF presence, plus independent shops in Sausalito and the Peninsula) generates trading-systems demand most contract shops cannot serve.
                        </p>
                        <p>
                            The Bay has two main contractor profiles: top-tier shops at enterprise pricing, and a vast freelance market with wildly variable quality. We aim at the gap — senior, founder-led, fixed-scope, modern stack, security-aware by default. No junior layer, no offshore handoff. The engineer on your kickoff is the engineer writing the code. For SF founders that means contracted senior engineering at well below the cost of a full-time hire, on a stack the eventual team can pick up cleanly. Our <Link href="/work/multi-strategy-trading-system" className="text-sky-400 hover:underline">production trading system</Link> case study lands particularly well with quant and brokerage-adjacent buyers; the <Link href="/work/j5-sales-os" className="text-sky-400 hover:underline">J5 Sales OS</Link> AI-prospecting build lands with the SaaS founder pool.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for SF clients</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Public work</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Portfolio sites and platforms include <Link href="/work/j5-sales-os" className="text-sky-400 hover:underline">J5 Sales OS</Link> (sales operations and AI-powered prospecting), UEhub (education platform), <Link href="/work/hobbspeak" className="text-sky-400 hover:underline">HobbsPeak</Link> (headless commerce with live S&amp;S Activewear catalog sync and AI-assisted artwork digitizing), and <Link href="/work/protectwithbri" className="text-sky-400 hover:underline">ProtectWithBri</Link> (high-trust advisor landing page). The most directly relevant case studies for Bay buyers are the <Link href="/work/multi-strategy-trading-system" className="text-sky-400 hover:underline">multi-strategy trading system</Link> — Python execution engine running MA Supertrend and VWAP in parallel with sub-12ms order latency — and the <Link href="/work/active-directory-pentest" className="text-sky-400 hover:underline">Active Directory pen test</Link> demonstrating a full attack chain from standard user to Domain Admin with every finding mapped to MITRE ATT&amp;CK.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "AI-backed SaaS, algorithmic trading, and quant tooling — real, in-house",
                            "Code samples and architecture walkthroughs on request",
                            "PT morning–early afternoon overlap from Georgia HQ",
                            "MITRE ATT&CK-aligned pen test reports for investor DD",
                            "Modern Next.js / TypeScript / PostgreSQL / Docker stack",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work remotely with San Francisco teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            SF sits three hours behind Georgia HQ — we work your morning. Our late morning is your early morning, our late afternoon is your mid-morning. We run standups at 11am ET / 8am PT routinely. For engagements above ~$25k we fly into SFO or OAK for an on-site kickoff afternoon — SoMa, FiDi, the Mission, Hayes Valley, Palo Alto, Mountain View, or San Jose. Build cycles run weekly with a Friday staging URL, written notes, and the next-week plan. Bay-grade engineering standards are the default: every line of code reviewed before merge, strict TypeScript, ESLint, CI on every deploy, architecture docs co-located in the repo. For AI-backed builds, we wire in cost monitoring, prompt versioning, evals, and fallback chains as standard. Most SF engagements close on fixed-scope, fixed-price proposals; full code, infrastructure, and account handover at acceptance — exactly what a Bay buyer or institutional DD process expects.
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
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, network, and AD engagements." },
                            { href: "/services/active-directory-pentest", title: "Active Directory Pen Test", desc: "Kerberoasting, ADCS, lateral movement." },
                            { href: "/services/web-app-pentest", title: "Web App Pen Test", desc: "OWASP-aligned web app testing." },
                            { href: "/services/web-applications", title: "Web Applications", desc: "Bay-standard Next.js / TypeScript builds." },
                            { href: "/services/cloud-infrastructure", title: "Cloud Infrastructure", desc: "AWS, GCP, Docker, IaC." },
                            { href: "/services/payments-invoicing-licensing", title: "Payments & Licensing", desc: "Stripe-powered subscription billing." },
                            { href: "/services/custom-crm-development", title: "Custom CRM Development", desc: "Own your CRM — don&apos;t rent it." },
                            { href: "/work/multi-strategy-trading-system", title: "Case Study: Trading System", desc: "<12ms latency, multi-strategy production." },
                            { href: "/work/j5-sales-os", title: "Case Study: J5 Sales OS", desc: "AI prospecting and pipeline SaaS." },
                            { href: "/work/hobbspeak", title: "Case Study: HobbsPeak", desc: "Headless commerce with AI digitizing." },
                            { href: "/blog/custom-crm-development-guide", title: "Custom CRM Development Guide", desc: "Pillar resource — build vs. buy." },
                            { href: "/software-development-seattle-wa", title: "Seattle, WA", desc: "PNW SaaS and dev tools." },
                            { href: "/software-development-austin-tx", title: "Austin, TX", desc: "Startup SaaS and quant tooling." },
                            { href: "/contact", title: "Start a Project", desc: "Scoping calls, fixed-quote proposals." },
                        ].map((s) => (
                            <Link
                                key={s.href}
                                href={s.href}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-red-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-red-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Scope an SF engagement.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> to scope an SF engagement.
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
