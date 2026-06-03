import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { RelatedIndustries } from "@/components/RelatedIndustries";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Phoenix Software Development & Pen Testing | QUANT LAB USA",
    description:
        "Phoenix AZ custom software and pen testing for semiconductors, fintech, and aerospace across the Valley of the Sun. Founder-led, fixed-quote. Call (770) 652-1282.",
    slug: "software-development-phoenix-az",
    image: "/og-image.png",
    type: "article",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-phoenix-az#localbusiness",
    name: "QUANT LAB USA — Phoenix Coverage",
    url: "https://quantlabusa.dev/software-development-phoenix-az",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Phoenix", containedInPlace: { "@type": "State", name: "Arizona" } },
        { "@type": "City", name: "Scottsdale" },
        { "@type": "City", name: "Tempe" },
        { "@type": "City", name: "Mesa" },
        { "@type": "City", name: "Chandler" },
        { "@type": "City", name: "Gilbert" },
        { "@type": "City", name: "Glendale" },
        { "@type": "AdministrativeArea", name: "Maricopa County" },
        { "@type": "AdministrativeArea", name: "Valley of the Sun" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 33.4484, longitude: -112.074 },
    address: { "@type": "PostalAddress", addressLocality: "Phoenix", addressRegion: "AZ", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Penetration Testing",
    name: "Custom Software Development & Penetration Testing in Phoenix, AZ",
    provider: { "@id": "https://quantlabusa.dev/#organization" },
    areaServed: { "@type": "City", name: "Phoenix", containedInPlace: { "@type": "State", name: "Arizona" } },
    description:
        "Semiconductor supplier tooling, fintech and SaaS platforms, and web application penetration testing for the Greater Phoenix metro.",
    url: "https://quantlabusa.dev/software-development-phoenix-az",
};

const services = [
    {
        title: "Semiconductor & Advanced-Manufacturing Tooling",
        desc: "Supplier portals, yield-tracking dashboards, and compliance workflows for the TSMC, Intel, and Amkor supply chain. Typical: $35k–$140k.",
    },
    {
        title: "Fintech & SaaS Platforms",
        desc: "Multi-tenant architecture, brokerage and payment integrations, and onboarding flows for the East Valley fintech cluster. Typical: $30k–$120k.",
    },
    {
        title: "Web Application Penetration Testing",
        desc: "OWASP-aligned testing for customer portals, fintech apps, and SaaS products. Typical: $8k–$28k.",
    },
    {
        title: "Stripe & Subscription Billing Systems",
        desc: "Recurring billing, licensing, and payment infrastructure for Phoenix SaaS founders. Typical: $8k–$28k.",
    },
    {
        title: "Custom CRMs & Operations Dashboards",
        desc: "Purpose-built tooling for real estate, services, and distribution firms across Maricopa County. Typical: $20k–$70k.",
    },
    {
        title: "MITRE ATT&CK Assessments",
        desc: "Full attack-chain documentation for SOC 2, PCI, and vendor-risk programs. Typical: $14k–$40k.",
    },
];

const faqs = [
    {
        q: "Do you build software for semiconductor and advanced-manufacturing companies?",
        a: "Yes — supplier portals, yield-tracking dashboards, and compliance workflows for the TSMC, Intel, and Amkor supply chain in the Valley. We scope multi-site and traceability requirements up front and integrate with existing MES and ERP systems.",
    },
    {
        q: "Do you work with Phoenix fintech and SaaS companies?",
        a: "Yes — multi-tenant architecture, brokerage and payment integrations, onboarding flows, and Stripe billing are core work for us, well-suited to the fintech cluster anchored in Scottsdale, Tempe, and Chandler.",
    },
    {
        q: "Do you do web application penetration testing?",
        a: "Yes — OWASP-aligned testing for customer portals, fintech apps, and SaaS products. Every finding is mapped to a MITRE ATT&CK technique and delivered with reproduction steps and a remediation roadmap.",
    },
    {
        q: "Can you help us prep for a SOC 2 audit?",
        a: "Yes — pre-audit penetration testing that maps cleanly to SOC 2 CC controls, with reports formatted to drop into your audit binder. This is routine for Phoenix SaaS companies pursuing enterprise deals.",
    },
    {
        q: "Do you bill fixed scope or time and materials?",
        a: "Fixed scope on most engagements. Time and materials is reserved for open-ended R&D or staff augmentation. Most Phoenix procurement teams prefer the predictability of a fixed quote for budget approval.",
    },
    {
        q: "Can you fly in for kickoffs in the Valley?",
        a: "Yes — for engagements above roughly $25k we fly into PHX for an on-site kickoff afternoon. Downtown Phoenix, Scottsdale, Tempe, Chandler, and Gilbert are all easy to reach, and on-site internal testing is scheduled for the active window.",
    },
    {
        q: "How does the time zone work with your Georgia HQ?",
        a: "Arizona does not observe daylight saving time, so the offset from Georgia HQ shifts seasonally — two hours behind in winter, three in summer. Our morning and your early morning overlap, and we plan async handoffs around the window.",
    },
    {
        q: "What is a typical timeline for a Phoenix engagement?",
        a: "A standalone web app pen test runs 2–3 weeks including reporting. A meaningful custom build typically runs 4–6 months, with a staging URL shipped weekly during development.",
    },
];

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://quantlabusa.dev/services" },
        { "@type": "ListItem", position: 3, name: "Software Development Phoenix, AZ", item: "https://quantlabusa.dev/software-development-phoenix-az" },
    ],
};

export default function PhoenixLandingPage() {
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
                        <li className="text-gray-300">Phoenix, AZ</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development & Penetration Testing in Phoenix, AZ
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        The Valley of the Sun has become a semiconductor and fintech powerhouse. TSMC&apos;s multi-billion-dollar fabs in north Phoenix, Intel&apos;s Chandler campus, and a fast-growing East Valley tech cluster generate demand for software vendors who understand both modern engineering and security.
                    </p>
                    <ConsultationCTA label="Scope a Phoenix Engagement" city="Phoenix, AZ" source="city-phoenix" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA combines custom software engineering with hands-on penetration testing rooted in the MITRE ATT&amp;CK framework — not just selling development hours. Phoenix buyers, from chip-supply-chain operators to SaaS founders chasing enterprise deals, expect a vendor who can build a production system and break it like an attacker. We do both in-house.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Phoenix organizations choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Phoenix is one of the fastest-growing metros in the country, and semiconductors are at the center of the story. TSMC is investing tens of billions in fabs in north Phoenix, Intel runs a massive campus in Chandler, and Amkor, NXP, and a deep tier of advanced-manufacturing suppliers fill out the ecosystem. The East Valley — Tempe, Chandler, Gilbert, and Scottsdale — has become a genuine tech and fintech cluster, home to operations for firms across payments, lending, and insurance, with Arizona State University feeding one of the largest engineering pipelines in the nation. Aerospace and defense add another layer through the Boeing, Honeywell Aerospace, and Northrop Grumman presence, and a sprawling real estate, healthcare, and distribution mid-market runs underneath it all across Maricopa County.
                        </p>
                        <p>
                            Most generalist agencies cannot credibly speak to penetration testing methodology, and most security shops cannot ship production software. We do both. Active Directory abuse paths, lateral movement, ADCS certificate abuse, Kerberoasting, and web app exploitation are in-house capability, not a subcontracted line item — and every line of software we ship is reviewed against the same threat models we use on offensive engagements. For Phoenix companies in regulated supply chains or chasing SOC 2 and enterprise security reviews, that combination is the entire pitch.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for Phoenix clients</h2>
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
                            Our pen testing track record includes a full Active Directory engagement for a regional financial services firm — an end-to-end internal assessment running eleven attack modules, every finding mapped to a MITRE ATT&amp;CK technique, with the full attack chain from standard user to Domain Admin documented in screenshots and timestamps. The client passed their compliance audit on the first attempt and re-engaged us on a six-month cadence. That is the same methodology we apply to every Phoenix engagement, whether the buyer is a chip-supply-chain operator, an East Valley fintech, or a SaaS company prepping for SOC 2.
                        </p>
                        <p>
                            QUANT LAB USA is founder-led and accountable end-to-end. We ship production web and SaaS applications on a modern Next.js, TypeScript, PostgreSQL, and Docker stack, and we keep our proof generic with references available under NDA — we do not name-drop clients who did not sign up to be a marketing line.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Founder-led and accountable end-to-end",
                            "In-house offensive security capability (AD abuse paths, web app, network)",
                            "SOC 2 and PCI pre-audit pen testing",
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work remotely with Phoenix teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Arizona does not observe daylight saving time, so the offset from Georgia HQ shifts seasonally — two hours behind in winter, three in summer — but our morning and your early morning always overlap for standups and design reviews. Most engagements start with a 60-minute scope by video, followed by a fly-in for an on-site kickoff afternoon — downtown Phoenix, Scottsdale, Tempe, Chandler, or Gilbert. After kickoff, build cycles run weekly with a Friday staging URL, written notes, and the next-week plan. Internal pen tests requiring on-site network access are scheduled on-site for the active window with remote reporting following. We bill fixed scope on virtually every Phoenix engagement, and code, database, hosting accounts, and full documentation transfer at acceptance — exactly what procurement needs for ownership and audit review.
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
                        industries={["saas","fintech","manufacturing","real-estate"]}
                        heading="Industries we serve in Phoenix"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["saas","compliance","stripe"]}
                        pinned={["soc2-pentest-prep-guide-2026","nextjs-stripe-integration-guide","build-vs-buy-software-2026"]}
                        heading="Reading for Phoenix founders"
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
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "Supplier portals and ops dashboards." },
                            { href: "/blog/soc2-pentest-prep-guide-2026", title: "SOC 2 Pentest Prep 2026", desc: "Pre-audit testing mapped to CC controls." },
                            { href: "/blog/nextjs-stripe-integration-guide", title: "Next.js + Stripe Guide", desc: "Subscriptions, webhooks, and the Payment Element." },
                            { href: "/software-development-tucson-az", title: "Tucson, AZ", desc: "Aerospace, optics, and the UA research base." },
                            { href: "/software-development-denver-co", title: "Denver, CO", desc: "Aerospace, cannabis-tech, and SaaS." },
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
                            Scope a Phoenix engagement.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or email <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a> to discuss Phoenix engagements.
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
