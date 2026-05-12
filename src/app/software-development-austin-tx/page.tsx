import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { MapPin, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Austin TX Custom Software Developer for SaaS Startups | QUANT LAB",
    description:
        "Austin startup-grade software development — SaaS MVPs, Stripe billing, algorithmic trading, and pen testing. Founder-led, no offshore. Call (770) 652-1282.",
    alternates: { canonical: "https://quantlabusa.dev/software-development-austin-tx" },
    openGraph: {
        title: "Austin TX Custom Software Developer for SaaS Startups | QUANT LAB",
        description:
            "Austin startup-grade software development — SaaS MVPs, Stripe, algorithmic trading, and pen testing.",
        url: "https://quantlabusa.dev/software-development-austin-tx",
        type: "article",
    },
    twitter: {
        card: "summary",
        title: "Austin TX Custom Software Developer for SaaS Startups | QUANT LAB",
        description:
            "Austin startup-grade software development — SaaS MVPs, Stripe, algorithmic trading, and pen testing.",
    },
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-austin-tx#localbusiness",
    name: "QUANT LAB USA — Austin Coverage",
    url: "https://quantlabusa.dev/software-development-austin-tx",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Austin", containedInPlace: { "@type": "State", name: "Texas" } },
        { "@type": "City", name: "Round Rock" },
        { "@type": "City", name: "Cedar Park" },
        { "@type": "City", name: "Pflugerville" },
        { "@type": "AdministrativeArea", name: "Travis County" },
        { "@type": "AdministrativeArea", name: "Williamson County" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 30.2672, longitude: -97.7431 },
    address: { "@type": "PostalAddress", addressLocality: "Austin", addressRegion: "TX", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development",
    name: "Custom Software Development in Austin, TX",
    provider: { "@id": "https://quantlabusa.dev/#org" },
    areaServed: { "@type": "City", name: "Austin", containedInPlace: { "@type": "State", name: "Texas" } },
    description:
        "SaaS MVPs, Stripe and licensing systems, algorithmic trading tooling, and pen testing for Austin founders on a modern stack.",
    url: "https://quantlabusa.dev/software-development-austin-tx",
};

const services = [
    {
        title: "SaaS MVPs on a Modern Stack",
        desc: "Next.js, TypeScript, PostgreSQL, Docker. Ship something investors can use, not a Figma deck. Typical: $18k–$60k.",
    },
    {
        title: "Stripe + Licensing Systems",
        desc: "Subscription, usage-based billing, license keys, customer self-serve portals. Typical: $10k–$30k.",
    },
    {
        title: "Algorithmic Trading & Quant Tooling",
        desc: "Niche capability for the ATX trading and quant founder pool. Typical: $25k–$120k.",
    },
    {
        title: "AI Wrapper / OpenAI SaaS Builds",
        desc: "Production-grade OpenAI and Anthropic-backed products with rate-limit handling and cost controls. Typical: $20k–$70k.",
    },
    {
        title: "Pen Testing for Pre-Series-A Security Reviews",
        desc: "MITRE ATT&CK-aligned engagements before your investor or enterprise security questionnaire. Typical: $8k–$25k.",
    },
    {
        title: "Crypto & Web3-Adjacent SaaS",
        desc: "Off-chain workflows for crypto-adjacent products — KYC, treasury, accounting integrations. Typical: $20k–$70k.",
    },
];

const faqs = [
    {
        q: "Do you work with pre-seed and seed-stage Austin founders?",
        a: "Yes — most of our SaaS clients fit that profile. We have shipped MVPs at the $18k–$30k tier and full seed-stage builds at $40k–$80k.",
    },
    {
        q: "Can you help us prepare for a security review during fundraising?",
        a: "Yes — pen testing aligned to MITRE ATT&CK is a core service. Most pre-Series A founders need at minimum an external pen test report ready before VCs run their own DD.",
    },
    {
        q: "Are you East Coast based?",
        a: "Yes — Georgia HQ. Full Eastern Time, with comfortable overlap into Central time. Most Austin standups happen during your morning, our late morning.",
    },
    {
        q: "Do you have algorithmic trading experience?",
        a: "Yes — we have shipped a production multi-strategy trading system with sub-12ms order latency, hard risk controls, and zero unplanned downtime since launch. Real money, real exchanges.",
    },
    {
        q: "How fast can you ship an MVP?",
        a: "Most Austin SaaS MVPs ship to a usable staging URL in 6–8 weeks. Public launch follows 2–4 weeks of polish and pre-launch testing.",
    },
    {
        q: "Can you handle Texas franchise tax and multi-state SaaS sales tax?",
        a: "Yes — we wire Stripe Tax and Avalara correctly for Texas-headquartered SaaS products selling across state lines. Texas has no state income tax but the franchise tax and multi-state nexus matter.",
    },
    {
        q: "Do you fly in for kickoffs?",
        a: "For engagements above ~$25k, yes — usually a single afternoon at your office in East Austin, downtown, or the Round Rock corridor. Otherwise we run discovery over video efficiently.",
    },
    {
        q: "Do you support OpenAI and Anthropic API-backed product builds?",
        a: "Yes — most of our 2026 SaaS builds include an AI feature surface. We handle rate limits, cost monitoring, prompt versioning, and fallback chains as standard.",
    },
];

export default function AustinLandingPage() {
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
                        <li className="text-gray-300">Austin, TX</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-blue-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development in Austin, TX
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Austin is a builder&apos;s town. Between the SaaS ecosystem along MoPac, the venture money that followed Tesla and Oracle in, and the dense pool of solo founders working out of East Austin coffee shops, the city has one of the strongest founder-density profiles in the US.
                    </p>
                    <ConsultationCTA label="Talk Austin Builds" city="Austin, TX" source="city-austin" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            What it does not always have is engineering partners who match founder velocity without burning a seed round. That is the niche QUANT LAB USA fills — senior engineering, founder-led delivery, and fixed-scope quotes on a stack VCs and technical co-founders actually recognize.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Austin businesses choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Austin&apos;s software economy is unusually layered. The SaaS old guard — Atlassian&apos;s Austin office, Indeed, RetailMeNot, Bazaarvoice — feeds a deep mid-career engineering labor market. Tesla&apos;s gigafactory and HQ relocation pulled hardware-software hybrid talent in. Oracle&apos;s campus move, plus Apple&apos;s expanding north-Austin presence, anchors enterprise software demand. Below that sits the pre-seed and seed-stage founder pool that defines the Austin reputation: solo and small-team founders working out of East Austin coffee shops, Capital Factory&apos;s downtown space, and home offices across Cedar Park and Pflugerville. SXSW continues to seed new SaaS companies every March. And the small but real ATX trading and quant founder pool — TIAA, Charles Schwab&apos;s presence, and a thread of independent algorithmic shops — generates demand for the kind of execution-engine work most contract shops cannot do.
                        </p>
                        <p>
                            We have shipped <Link href="/work/multi-strategy-trading-system" className="text-sky-400 hover:underline">algorithmic trading bots</Link>, internal sales platforms, ops dashboards, and full SaaS products. Founder-led, fixed-scope, modern stack. No three-tier agency overhead, no junior offshore handoff. The person scoping your build is the person writing the migrations. Austin founders are an unusually informed buyer — they have built the thing before or have a co-founder who has — and they recognize the difference between contract theater and senior delivery.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for Austin clients</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Proof of work</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA&apos;s deployed work includes <Link href="/work/j5-sales-os" className="text-sky-400 hover:underline">J5 Sales OS</Link> (AI-powered lead-gen and pipeline SaaS), UEhub (education platform), a <Link href="/work/multi-strategy-trading-system" className="text-sky-400 hover:underline">production multi-strategy trading system</Link> with sub-12ms order latency and zero unplanned downtime, and a number of production marketing sites including <Link href="/work/hobbspeak" className="text-sky-400 hover:underline">HobbsPeak</Link>. The J5 Sales OS build is the most directly relevant for Austin SaaS founders: niche-vertical lead discovery via Google Places, concurrent email scraping with validation, OpenAI qualification scoring, personalized outreach generation, and a full CRM pipeline — built so one operator can do the work of a team.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Pre-seed and seed-stage SaaS specialization",
                            "Algorithmic trading and quant tooling — real production system in the portfolio",
                            "Full CT-hours overlap from Georgia HQ",
                            "MITRE ATT&CK-aligned pen testing for fundraising security reviews",
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work remotely with Austin teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Austin is one hour behind us at Georgia HQ, which means your morning and our late morning overlap completely. Most kickoffs run as a 60–90 minute video session — Austin founders are unusually comfortable working remotely, and most of our pre-seed and seed-stage clients prefer to stay in-flow rather than coordinate travel. For engagements above ~$25k we fly into AUS for an on-site kickoff afternoon, typically downtown, East Austin, or the Domain. Build cycles run weekly with a Friday staging URL, written notes, and the next-week plan. Most Austin engagements close on fixed-scope, fixed-price proposals — exactly the predictability a runway-conscious founder wants. Code, database, and hosting account handover happens at acceptance. We design every build to be picked up by a future full-time engineering hire without translation.
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
                            { href: "/services/web-applications", title: "Web Applications", desc: "SaaS MVPs and customer-facing apps." },
                            { href: "/services/payments-invoicing-licensing", title: "Payments & Licensing", desc: "Stripe-powered subscription billing." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Pre-Series-A security reviews." },
                            { href: "/services/custom-crm-development", title: "Custom CRM Development", desc: "Own your CRM — don&apos;t rent it." },
                            { href: "/services/stripe-integration", title: "Stripe Integration", desc: "Subscription, metered, and licensing." },
                            { href: "/blog/custom-crm-development-guide", title: "Custom CRM Development Guide", desc: "Pillar resource — build vs. buy, costs." },
                            { href: "/work/j5-sales-os", title: "Case Study: J5 Sales OS", desc: "AI prospecting and pipeline SaaS." },
                            { href: "/work/multi-strategy-trading-system", title: "Case Study: Trading System", desc: "<12ms latency, multi-strategy production." },
                            { href: "/software-development-dallas-tx", title: "Dallas, TX", desc: "DFW enterprise and corporate IT." },
                            { href: "/software-development-san-francisco-ca", title: "San Francisco, CA", desc: "Bay Area SaaS, fintech, and quant." },
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
                            Talk Austin builds.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> to talk Austin builds.
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
