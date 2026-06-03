import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { RelatedIndustries } from "@/components/RelatedIndustries";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Fort Worth Software Development & Pen Testing | QUANT LAB USA",
    description:
        "Fort Worth TX custom software, logistics dashboards, and pen testing for aerospace, freight, and manufacturing. Founder-led, fixed-quote. Call (770) 652-1282.",
    slug: "software-development-fort-worth-tx",
    image: "/og-image.png",
    type: "article",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-fort-worth-tx#localbusiness",
    name: "QUANT LAB USA — Fort Worth Coverage",
    url: "https://quantlabusa.dev/software-development-fort-worth-tx",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Fort Worth", containedInPlace: { "@type": "State", name: "Texas" } },
        { "@type": "City", name: "Arlington" },
        { "@type": "City", name: "Grapevine" },
        { "@type": "City", name: "North Richland Hills" },
        { "@type": "City", name: "Keller" },
        { "@type": "City", name: "Mansfield" },
        { "@type": "AdministrativeArea", name: "Tarrant County" },
        { "@type": "AdministrativeArea", name: "Parker County" },
        { "@type": "AdministrativeArea", name: "Johnson County" },
        { "@type": "AdministrativeArea", name: "West DFW Metroplex" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 32.7555, longitude: -97.3308 },
    address: { "@type": "PostalAddress", addressLocality: "Fort Worth", addressRegion: "TX", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Penetration Testing",
    name: "Custom Software Development & Penetration Testing in Fort Worth, TX",
    provider: { "@id": "https://quantlabusa.dev/#organization" },
    areaServed: { "@type": "City", name: "Fort Worth", containedInPlace: { "@type": "State", name: "Texas" } },
    description:
        "Logistics dashboards, aerospace supplier tooling, and network penetration testing for the Fort Worth and West DFW industrial base.",
    url: "https://quantlabusa.dev/software-development-fort-worth-tx",
};

const services = [
    {
        title: "Logistics & Freight Operations Dashboards",
        desc: "Real-time dispatch, freight tracking, and WMS integration for the AllianceTexas and BNSF freight corridor. Typical: $25k–$90k.",
    },
    {
        title: "Aerospace & Defense Supplier Tooling",
        desc: "Supplier portals, compliance tracking, and ITAR-aware workflows for the Lockheed Martin and Bell Textron network. Typical: $35k–$140k.",
    },
    {
        title: "Internal Network Penetration Testing",
        desc: "AD abuse paths, lateral movement, ADCS, and segmentation review for manufacturers and distributors. Typical: $12k–$35k.",
    },
    {
        title: "Legacy Internal Tool Modernization",
        desc: "Replace fragile Access/Excel/VB stacks with Next.js + PostgreSQL apps your team will actually use. Typical: $30k–$120k.",
    },
    {
        title: "Custom CRMs for Mid-Market",
        desc: "Replace Salesforce or HubSpot stacks with software you own, built for services and industrial sales teams. Typical: $25k–$90k.",
    },
    {
        title: "MITRE ATT&CK Red Team Assessments",
        desc: "Full attack-chain documentation for vendor-risk, PCI, or supplier-security programs. Typical: $14k–$40k.",
    },
];

const faqs = [
    {
        q: "Do you work with aerospace and defense suppliers?",
        a: "Yes — supplier portals, compliance tracking, and ITAR-aware workflows are in scope for the Lockheed Martin Aeronautics and Bell Textron supplier network. Cleared environments are scoped case-by-case.",
    },
    {
        q: "Do you build logistics and freight software?",
        a: "Yes — real-time dispatch, freight tracking, and WMS integration are among our highest-demand verticals in the DFW area, given the AllianceTexas inland port and BNSF's national headquarters in Fort Worth.",
    },
    {
        q: "Do you do internal network pen tests?",
        a: "Yes — internal AD, lateral movement, ADCS certificate abuse, Kerberoasting, and segmentation reviews. We have shipped a full Active Directory engagement that demonstrated a complete attack chain from standard user to Domain Admin.",
    },
    {
        q: "Can you modernize an existing internal app instead of rebuilding from scratch?",
        a: "Often yes — we run a 1–2 week assessment first to determine whether a Strangler Fig migration is cleaner than a full rewrite. Many West DFW mid-market tools modernize without a from-scratch teardown.",
    },
    {
        q: "Do you bill fixed scope or time and materials?",
        a: "Fixed scope on most engagements. Time and materials is reserved for open-ended R&D or staff augmentation. Most Fort Worth procurement teams prefer the predictability of a fixed quote for board approval.",
    },
    {
        q: "Can you fly in for kickoffs?",
        a: "Yes — for engagements above roughly $25k we fly into DFW or Meacham for an on-site kickoff afternoon. Downtown Fort Worth, Arlington, Grapevine, and the Alliance corridor are all easy to reach.",
    },
    {
        q: "What pen testing methodology do you use?",
        a: "Our framework is MITRE ATT&CK end-to-end. Every finding is mapped to a technique ID across recon, credential spraying, Kerberoasting, ADCS abuse, lateral movement, and C2 infrastructure.",
    },
    {
        q: "What is your typical timeline for a legacy modernization?",
        a: "Assessment in 1–2 weeks, then a fixed-scope build typically running 4–6 months for a meaningful internal tool. We ship to a staging URL weekly during the build.",
    },
];

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://quantlabusa.dev/services" },
        { "@type": "ListItem", position: 3, name: "Software Development Fort Worth, TX", item: "https://quantlabusa.dev/software-development-fort-worth-tx" },
    ],
};

export default function FortWorthLandingPage() {
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
                        <li className="text-gray-300">Fort Worth, TX</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development & Penetration Testing in Fort Worth, TX
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Fort Worth is where DFW builds and ships things. BNSF&apos;s national headquarters, the AllianceTexas inland port, Lockheed Martin Aeronautics, and Bell Textron anchor a freight, aerospace, and manufacturing economy that runs on operational software off-the-shelf SaaS cannot serve cleanly.
                    </p>
                    <ConsultationCTA label="Scope Fort Worth Work" city="Fort Worth, TX" source="city-fort-worth" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Many of these operators need someone who can modernize a creaking internal tool, wire a logistics dashboard to existing systems, or harden an exposed application without paying a Big Four consulting rate. That is where QUANT LAB USA fits — senior engineering, fixed scope, founder-accountable, with documentation written for procurement and audit.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Fort Worth businesses choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Fort Worth is the industrial half of the metroplex. BNSF Railway runs its national operation from downtown, and the AllianceTexas development north of the city — anchored by a Union Pacific intermodal yard, Fort Worth Alliance Airport, and a sprawling logistics park — has made the region one of the densest freight and distribution corridors in the country. Lockheed Martin Aeronautics builds the F-35 in west Fort Worth, Bell Textron designs and assembles rotorcraft nearby, and a deep tier of aerospace and defense suppliers feeds both. American Airlines is headquartered in adjacent Fort Worth, and the manufacturing, oilfield-services, and distribution mid-market across Tarrant, Parker, and Johnson counties rounds out a business base built on operations, not consumer apps.
                        </p>
                        <p>
                            Big-four firms quote enterprise prices and assign juniors. National boutiques disappear when scope tightens. QUANT LAB USA is founder-led, fixed-scope, and accountable end-to-end — and our internal network and Active Directory pen testing is in-house, not a subcontracted line item. You get senior engineering at a mid-market price with documentation written for procurement and supplier-security review. For Fort Worth operators in aerospace supply chains and freight logistics, that combination is the entire pitch.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for Fort Worth clients</h2>
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
                            Our most directly relevant case study for Fort Worth corporate IT is a full Active Directory penetration test for a regional financial services firm — an internal assessment running eleven attack modules, every finding mapped to MITRE ATT&amp;CK, with the full attack chain from standard user credential to Domain Admin documented in screenshots and timestamps. The client passed their compliance audit on the first attempt and re-engaged us on a six-month cadence. We bring the same rigor to supplier-security reviews across the aerospace and freight base.
                        </p>
                        <p>
                            QUANT LAB USA is founder-led and accountable end-to-end. We ship production web and SaaS applications on a modern Next.js, TypeScript, PostgreSQL, and Docker stack, and we keep our proof generic with references available under NDA — we do not name-drop clients who did not sign up to be a marketing line.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Senior engineering at mid-market pricing",
                            "Fixed-scope quotes on most engagements",
                            "Internal network and AD pen testing in-house",
                            "ITAR-aware workflows for aerospace suppliers",
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work remotely with Fort Worth teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Fort Worth is one hour behind Georgia HQ, so our morning and your late morning overlap completely for standups and design reviews. Most engagements start with a 60-minute scope by video, followed by a fly-in for an on-site kickoff afternoon — downtown Fort Worth, Arlington, Grapevine, or the Alliance corridor. After kickoff, build cycles run weekly with a Friday staging URL, written notes, and the next-week plan. Internal pen tests requiring on-site network access are scheduled on-site for the active testing window with remote reporting following. We bill fixed scope on virtually every Fort Worth engagement; time and materials is reserved for open-ended R&amp;D. Code, database, hosting account, and full documentation transfer at acceptance — exactly what a procurement or supplier-security team needs to clear ownership and audit review.
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
                        industries={["manufacturing","fintech","insurance","construction"]}
                        heading="Industries we serve in Fort Worth"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["build-vs-buy","internal-tools","pentest"]}
                        pinned={["build-vs-buy-software-2026","custom-crm-development-guide","penetration-test-cost-2026"]}
                        heading="Reading for Fort Worth founders"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services & nearby cities</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Internal AD, lateral movement, web app." },
                            { href: "/services/network-pentest", title: "Network Pen Test", desc: "Internal and external network engagements." },
                            { href: "/services/active-directory-pentest", title: "Active Directory Pen Test", desc: "Kerberoasting, ADCS abuse, lateral movement." },
                            { href: "/services/mitre-attack-assessment", title: "MITRE ATT&CK Assessment", desc: "Full attack-chain mapping for vendor risk." },
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "Legacy modernization and ops tooling." },
                            { href: "/services/custom-crm-development", title: "Custom CRM Development", desc: "Software you own instead of Salesforce." },
                            { href: "/blog/build-vs-buy-software-2026", title: "Build vs Buy Software 2026", desc: "Three-year TCO and a decision framework." },
                            { href: "/blog/custom-crm-development-guide", title: "Custom CRM Development Guide", desc: "Pillar resource — build vs. buy." },
                            { href: "/software-development-houston-tx", title: "Houston, TX", desc: "Energy, medical, and logistics." },
                            { href: "/software-development-san-antonio-tx", title: "San Antonio, TX", desc: "Cybersecurity, healthcare, military." },
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
                            Scope Fort Worth work.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or email <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a> to scope Fort Worth work.
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
