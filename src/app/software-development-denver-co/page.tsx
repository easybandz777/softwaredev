import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { RelatedIndustries } from "@/components/RelatedIndustries";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Denver Software Development & Pen Testing | QUANT LAB USA",
    description:
        "Denver CO custom software and pen testing for aerospace, cannabis-tech, and SaaS across the Front Range. Founder-led, fixed-quote. Call (770) 652-1282.",
    slug: "software-development-denver-co",
    image: "/og-image.png",
    type: "article",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-denver-co#localbusiness",
    name: "QUANT LAB USA — Denver Coverage",
    url: "https://quantlabusa.dev/software-development-denver-co",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Denver", containedInPlace: { "@type": "State", name: "Colorado" } },
        { "@type": "City", name: "Aurora" },
        { "@type": "City", name: "Boulder" },
        { "@type": "City", name: "Lakewood" },
        { "@type": "City", name: "Centennial" },
        { "@type": "City", name: "Westminster" },
        { "@type": "City", name: "Colorado Springs" },
        { "@type": "AdministrativeArea", name: "Denver County" },
        { "@type": "AdministrativeArea", name: "Arapahoe County" },
        { "@type": "AdministrativeArea", name: "Front Range" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 39.7392, longitude: -104.9903 },
    address: { "@type": "PostalAddress", addressLocality: "Denver", addressRegion: "CO", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Penetration Testing",
    name: "Custom Software Development & Penetration Testing in Denver, CO",
    provider: { "@id": "https://quantlabusa.dev/#organization" },
    areaServed: { "@type": "City", name: "Denver", containedInPlace: { "@type": "State", name: "Colorado" } },
    description:
        "Aerospace supplier tooling, cannabis-tech and seed-to-sale platforms, and SaaS penetration testing for the Front Range.",
    url: "https://quantlabusa.dev/software-development-denver-co",
};

const services = [
    {
        title: "Aerospace & Space Supplier Tooling",
        desc: "Supplier portals, compliance tracking, and ITAR-aware workflows for the Lockheed Martin Space, Ball Aerospace, and Buckley ecosystem. Typical: $35k–$140k.",
    },
    {
        title: "Cannabis-Tech & Seed-to-Sale Platforms",
        desc: "Compliance-aware inventory, Metrc integration, and ops dashboards for licensed operators in Colorado's regulated market. Typical: $30k–$120k.",
    },
    {
        title: "Fintech & SaaS Platforms",
        desc: "Multi-tenant architecture, payment integrations, and onboarding flows for the RiNo and Boulder startup corridor. Typical: $30k–$120k.",
    },
    {
        title: "Web Application Penetration Testing",
        desc: "OWASP-aligned testing for SaaS products, fintech apps, and customer portals. Typical: $8k–$28k.",
    },
    {
        title: "Stripe & Subscription Billing Systems",
        desc: "Recurring billing, licensing, and payment infrastructure for Denver SaaS founders. Typical: $8k–$28k.",
    },
    {
        title: "MITRE ATT&CK Assessments",
        desc: "Full attack-chain documentation for SOC 2, PCI, and vendor-risk programs. Typical: $14k–$40k.",
    },
];

const faqs = [
    {
        q: "Do you work with aerospace and space companies?",
        a: "Yes — supplier portals, compliance tracking, and ITAR-aware workflows are in scope for the Lockheed Martin Space, Ball Aerospace, Sierra Space, and broader Front Range space ecosystem. Cleared environments are scoped case-by-case, and clearance status is discussed under NDA.",
    },
    {
        q: "Can you build compliant cannabis-tech and seed-to-sale software?",
        a: "Yes — compliance-aware inventory, Metrc state-tracking integration, and operations dashboards for licensed operators in Colorado's regulated market. We scope state-reporting and audit requirements up front rather than bolting them on later.",
    },
    {
        q: "Do you work with Denver fintech and SaaS startups?",
        a: "Yes — multi-tenant architecture, payment integrations, onboarding flows, and Stripe billing are core work for us, well-suited to the startup corridor in RiNo, downtown Denver, and Boulder.",
    },
    {
        q: "Do you do web application penetration testing?",
        a: "Yes — OWASP-aligned testing for SaaS products, fintech apps, and customer portals. Every finding is mapped to a MITRE ATT&CK technique and delivered with reproduction steps and a remediation roadmap.",
    },
    {
        q: "Can you help us prep for a SOC 2 audit?",
        a: "Yes — pre-audit penetration testing that maps cleanly to SOC 2 CC controls, with reports formatted to drop into your audit binder. This is routine for Front Range SaaS companies pursuing enterprise deals.",
    },
    {
        q: "Can you fly in for kickoffs along the Front Range?",
        a: "Yes — for engagements above roughly $25k we fly into DEN for an on-site kickoff afternoon. Downtown Denver, RiNo, the Tech Center, Boulder, and Colorado Springs are all reachable, and on-site internal testing is scheduled for the active window.",
    },
    {
        q: "How does the time zone work with your Georgia HQ?",
        a: "Denver is on Mountain Time, two hours behind Georgia HQ. Our early afternoon and your late morning overlap cleanly for standups and design reviews, and we plan async handoffs around the window.",
    },
    {
        q: "What is a typical timeline for a Denver engagement?",
        a: "A standalone web app pen test runs 2–3 weeks including reporting. A meaningful custom build typically runs 4–6 months, with a staging URL shipped weekly during development.",
    },
];

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://quantlabusa.dev/services" },
        { "@type": "ListItem", position: 3, name: "Software Development Denver, CO", item: "https://quantlabusa.dev/software-development-denver-co" },
    ],
};

export default function DenverLandingPage() {
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

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />


            <div className="container mx-auto px-6 max-w-4xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/services" className="hover:text-sky-400 transition-colors">Services</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">Denver, CO</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development & Penetration Testing in Denver, CO
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        The Front Range is one of the most distinctive tech economies in the country — a national center for the space industry, the birthplace of the legal cannabis market, and a magnet for fintech and SaaS startups. Each of these demands software vendors who understand both engineering and security.
                    </p>
                    <ConsultationCTA label="Scope a Denver Engagement" city="Denver, CO" source="city-denver" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA combines custom software engineering with hands-on penetration testing rooted in the MITRE ATT&amp;CK framework — not just selling development hours. Denver buyers, from space-supply-chain operators to compliance-bound cannabis operators to SaaS founders, expect a vendor who can build a production system and break it like an attacker. We do both in-house.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Denver organizations choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Denver and the broader Front Range have one of the most diverse tech economies in the West. The region is a national hub for the space industry — Lockheed Martin Space in Littleton, Ball Aerospace in Boulder, Sierra Space, United Launch Alliance, and a constellation of suppliers feed a sector reinforced by Buckley Space Force Base and Schriever down in Colorado Springs. Colorado pioneered the legal cannabis market, and a whole category of compliance-bound seed-to-sale and operations software grew up around it. Downtown Denver, the RiNo district, and Boulder host a dense fintech and SaaS startup scene, while energy, telecom, and a deep healthcare base around the Anschutz Medical Campus in Aurora round out the economy. The University of Colorado and the Colorado School of Mines keep the engineering talent pipeline full.
                        </p>
                        <p>
                            Most generalist agencies cannot credibly speak to penetration testing methodology, and most security shops cannot ship production software. We do both. Active Directory abuse paths, lateral movement, ADCS certificate abuse, Kerberoasting, and web app exploitation are in-house capability, not a subcontracted line item — and every line of software we ship is reviewed against the same threat models we use on offensive engagements. For Front Range companies in regulated markets or chasing SOC 2 and enterprise security reviews, that combination is the entire pitch.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for Denver clients</h2>
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
                            Our pen testing track record includes a full Active Directory engagement for a regional financial services firm — an end-to-end internal assessment running eleven attack modules, every finding mapped to a MITRE ATT&amp;CK technique, with the full attack chain from standard user to Domain Admin documented in screenshots and timestamps. The client passed their compliance audit on the first attempt and re-engaged us on a six-month cadence. That is the same methodology we apply to every Denver engagement, whether the buyer is a space supplier, a cannabis-tech operator, or a SaaS company prepping for SOC 2.
                        </p>
                        <p>
                            QUANT LAB USA is founder-led and accountable end-to-end. We ship production web and SaaS applications on a modern Next.js, TypeScript, PostgreSQL, and Docker stack, and we keep our proof generic with references available under NDA — we do not name-drop clients who did not sign up to be a marketing line.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Founder-led and accountable end-to-end",
                            "In-house offensive security capability (AD abuse paths, web app, network)",
                            "Compliance-aware builds for regulated markets",
                            "MITRE ATT&CK technique mapping on every finding",
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work remotely with Denver teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Denver runs on Mountain Time, two hours behind Georgia HQ, so our early afternoon and your late morning overlap cleanly for standups and design reviews. Most engagements start with a 60-minute scope by video, followed by a fly-in for an on-site kickoff afternoon — downtown Denver, RiNo, the Tech Center, Boulder, or Colorado Springs. After kickoff, build cycles run weekly with a Friday staging URL, written notes, and the next-week plan. Internal pen tests requiring on-site network access are scheduled on-site for the active window with remote reporting following. We bill fixed scope on virtually every Denver engagement, and code, database, hosting accounts, and full documentation transfer at acceptance — exactly what procurement needs for ownership and audit review.
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
                    <RelatedIndustries
                        industries={["saas","fintech","healthcare","e-commerce"]}
                        heading="Industries we serve in Denver"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["saas","compliance","stripe"]}
                        pinned={["soc2-pentest-prep-guide-2026","nextjs-stripe-integration-guide","build-vs-buy-software-2026"]}
                        heading="Reading for Denver founders"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services & nearby cities</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { href: "/services/saas-platform-development", title: "SaaS Platform Development", desc: "Multi-tenant architecture and billing." },
                            { href: "/services/web-app-pentest", title: "Web Application Pen Test", desc: "OWASP-aligned web app testing." },
                            { href: "/services/mitre-attack-assessment", title: "MITRE ATT&CK Assessment", desc: "Full attack-chain mapping for SOC 2, PCI." },
                            { href: "/services/stripe-integration", title: "Stripe Integration", desc: "Payments, subscriptions, and licensing." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, network, wireless, and AD engagements." },
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "Compliance-aware ops dashboards." },
                            { href: "/blog/soc2-pentest-prep-guide-2026", title: "SOC 2 Pentest Prep 2026", desc: "Pre-audit testing mapped to CC controls." },
                            { href: "/blog/nextjs-stripe-integration-guide", title: "Next.js + Stripe Guide", desc: "Subscriptions, webhooks, and the Payment Element." },
                            { href: "/software-development-phoenix-az", title: "Phoenix, AZ", desc: "Semiconductors, fintech, and aerospace." },
                            { href: "/software-development-albuquerque-nm", title: "Albuquerque, NM", desc: "National labs, aerospace, and research." },
                            { href: "/pricing", title: "Pricing", desc: "Fixed-quote ranges by engagement type." },
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
                            Scope a Denver engagement.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or email <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a> to discuss Denver engagements.
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
