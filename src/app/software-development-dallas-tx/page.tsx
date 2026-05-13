import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Dallas Custom Software, Legacy Modernization & Pen Test | QL USA",
    description:
        "Dallas enterprise-grade software development, legacy tool modernization, and penetration testing for corporate IT, logistics, and SaaS. Call (770) 652-1282.",
    slug: "software-development-dallas-tx",
    image: "/og-image.png",
    type: "article",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-dallas-tx#localbusiness",
    name: "QUANT LAB USA — Dallas Coverage",
    url: "https://quantlabusa.dev/software-development-dallas-tx",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Dallas", containedInPlace: { "@type": "State", name: "Texas" } },
        { "@type": "City", name: "Fort Worth" },
        { "@type": "City", name: "Plano" },
        { "@type": "City", name: "Frisco" },
        { "@type": "City", name: "Irving" },
        { "@type": "City", name: "Arlington" },
        { "@type": "AdministrativeArea", name: "Dallas County" },
        { "@type": "AdministrativeArea", name: "Tarrant County" },
        { "@type": "AdministrativeArea", name: "Collin County" },
        { "@type": "AdministrativeArea", name: "DFW Metroplex" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 32.7767, longitude: -96.797 },
    address: { "@type": "PostalAddress", addressLocality: "Dallas", addressRegion: "TX", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Penetration Testing",
    name: "Custom Software Development & Penetration Testing in Dallas, TX",
    provider: { "@id": "https://quantlabusa.dev/#organization" },
    areaServed: { "@type": "City", name: "Dallas", containedInPlace: { "@type": "State", name: "Texas" } },
    description:
        "Legacy internal tool modernization, corporate IT penetration testing, and ops dashboards for the DFW metroplex.",
    url: "https://quantlabusa.dev/software-development-dallas-tx",
};

const services = [
    {
        title: "Legacy Internal Tool Modernization",
        desc: "Replace fragile Access/Excel/VB stacks with Next.js + PostgreSQL apps your team will actually use. Typical: $30k–$120k.",
    },
    {
        title: "Internal Network Penetration Testing",
        desc: "AD abuse paths, lateral movement, ADCS, segmentation review. Typical: $12k–$35k.",
    },
    {
        title: "Operations Dashboards & Logistics Integrations",
        desc: "Real-time dispatch, freight tracking, and WMS integration. DFW&apos;s freight density makes this our highest-demand vertical here. Typical: $25k–$90k.",
    },
    {
        title: "Custom CRMs for Mid-Market",
        desc: "Replace Salesforce or HubSpot stacks with software you own. Typical: $25k–$90k.",
    },
    {
        title: "Aerospace & Defense Supplier Tooling",
        desc: "Supplier portal, compliance tracking, and ITAR-aware workflows for the Lockheed and Bell network. Typical: $35k–$140k.",
    },
    {
        title: "MITRE ATT&CK Red Team Assessments",
        desc: "Full attack-chain documentation for SOX, PCI, or vendor risk programs. Typical: $14k–$40k.",
    },
];

const faqs = [
    {
        q: "Do you do internal network pen tests?",
        a: "Yes — internal AD, lateral movement, ADCS certificate abuse, Kerberoasting, and segmentation reviews. We have shipped a full Active Directory engagement to a regional financial services firm that demonstrated a full attack chain from standard user to Domain Admin.",
    },
    {
        q: "Can you modernize an existing internal app instead of rebuilding from scratch?",
        a: "Often yes — we do a 1–2 week assessment first to determine if a Strangler Fig migration is cleaner than a full rewrite. Many DFW mid-market internal tools modernize cleanly without a from-scratch teardown.",
    },
    {
        q: "Do you bill fixed scope or T&M?",
        a: "Fixed scope on most engagements. T&M only for open-ended R&D or staff-augmentation work. Most DFW procurement teams prefer the predictability of fixed-scope quotes for board approval.",
    },
    {
        q: "Are you familiar with SOX, PCI, and SOC 2 for DFW corporate IT?",
        a: "Yes — pen test reports are mapped to MITRE ATT&CK and formatted to drop directly into audit binders. SOC 2 CC controls, PCI-DSS, and SOX 404 program work is routine.",
    },
    {
        q: "Can you fly in for kickoffs?",
        a: "Yes — for engagements above ~$25k we fly into DFW or DAL for an on-site kickoff afternoon. Plano, Frisco, Irving, downtown Dallas, and Fort Worth are all easy.",
    },
    {
        q: "Do you work with aerospace and defense suppliers?",
        a: "Yes — supplier portal, compliance tracking, and ITAR-aware workflows are in scope. Cleared environments are scoped case-by-case.",
    },
    {
        q: "What is your typical timeline for a legacy modernization?",
        a: "Assessment in 1–2 weeks, then a fixed-scope build typically running 4–6 months for a meaningful internal tool. We ship to staging weekly during the build.",
    },
    {
        q: "Do you support Power BI, Snowflake, or Databricks integrations?",
        a: "Yes — we wire dashboards to existing data warehouses cleanly. Most DFW mid-market clients already have a BI stack and want operational tooling that integrates with it, not replaces it.",
    },
];

export default function DallasLandingPage() {
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
                        <li className="text-gray-300">Dallas, TX</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development & Penetration Testing in Dallas, TX
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        The DFW metroplex is a corporate IT and supply-chain heavyweight — home to one of the largest concentrations of Fortune 500 headquarters in the country, a massive logistics and freight base, and a deep pool of mid-market companies running on aging custom software.
                    </p>
                    <ConsultationCTA label="Scope DFW Work" city="Dallas, TX" source="city-dallas" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Many of those mid-market operators are looking for someone who can modernize a creaking internal tool or harden an exposed application without paying a Big Four consulting rate. That is where QUANT LAB USA fits — senior engineering, fixed scope, founder-accountable, with documentation written for procurement and audit.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Dallas businesses choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            DFW concentrates more Fortune 500 headquarters than almost any other US metro — AT&amp;T, ExxonMobil, McKesson, American Airlines, Texas Instruments, Caterpillar, Toyota Motor North America, Charles Schwab, and JPMorgan&apos;s second-largest operational footprint all anchor the region. Around them sits one of the country&apos;s densest logistics and freight bases: BNSF&apos;s national HQ in Fort Worth, the DFW airport hub, and the warehousing and distribution corridor running from Alliance Texas south through Dallas. The Lockheed Martin and Bell Textron defense ecosystem adds another layer of supplier-network software demand. And underneath the F500 layer sits a deep mid-market bench — energy services, healthcare admin, oilfield, real estate, and contract logistics — running on aging custom software that no longer fits how the business operates.
                        </p>
                        <p>
                            Big-four firms quote enterprise prices and assign juniors. National boutiques disappear when scope tightens. QUANT LAB USA is founder-led, fixed-scope, and accountable end-to-end. You get senior engineering at a mid-market price, with reports and documentation written for procurement and audit. For DFW mid-market IT leaders, that combination — senior accountability without the Big Four invoice — is the entire pitch.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for Dallas clients</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Selected work</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Our most directly relevant case study for DFW corporate IT is the <Link href="/work/active-directory-pentest" className="text-sky-400 hover:underline">Active Directory penetration test</Link> for a regional financial services firm — a full internal assessment running eleven attack modules, every finding mapped to MITRE ATT&amp;CK, full attack chain from standard user credential to Domain Admin documented with screenshots and timestamps. The client passed their compliance audit on the first attempt and engaged us for follow-up testing on a six-month cadence. Production builds and portfolio sites include <Link href="/work/j5-sales-os" className="text-sky-400 hover:underline">J5 Sales OS</Link>, UEhub, <Link href="/work/bridgepointe-painting" className="text-sky-400 hover:underline">Bridgepointe Painting</Link>, and <Link href="/work/northcrest-fence" className="text-sky-400 hover:underline">Northcrest Fence</Link>.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Senior engineering at mid-market pricing",
                            "Fixed-scope quotes on most engagements",
                            "Internal network and AD pen testing in-house",
                            "Documentation written for procurement and audit",
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work remotely with Dallas teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            DFW is one hour behind Georgia HQ, which means our morning and your late morning overlap completely for standups and design reviews. Most engagements start with a 60-minute scope by video, followed by a fly-in for an on-site kickoff afternoon — Plano, Frisco, Irving, downtown Dallas, or Fort Worth. After kickoff, build cycles run weekly with a Friday staging URL, written notes, and the next-week plan. Internal pen tests requiring on-site network access are scheduled on-site for the active testing window with remote reporting following. We bill fixed scope on virtually every Dallas engagement; T&amp;M is reserved for open-ended R&amp;D. Code, database, hosting account, and full documentation transfer happens at acceptance — exactly what a procurement team needs for the project to clear audit and ownership review.
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
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Internal AD, lateral movement, web app." },
                            { href: "/services/active-directory-pentest", title: "Active Directory Pen Test", desc: "Kerberoasting, ADCS abuse, lateral movement." },
                            { href: "/services/network-pentest", title: "Network Pen Test", desc: "Internal and external network engagements." },
                            { href: "/services/mitre-attack-assessment", title: "MITRE ATT&CK Assessment", desc: "Full attack-chain mapping for SOX, PCI." },
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "Legacy modernization and ops tooling." },
                            { href: "/services/web-applications", title: "Web Applications", desc: "Internal apps and customer-facing builds." },
                            { href: "/services/cloud-infrastructure", title: "Cloud Infrastructure", desc: "AWS, GCP, Docker, IaC." },
                            { href: "/work/active-directory-pentest", title: "Case Study: AD Pen Test", desc: "Financial services firm — domain admin demonstrated." },
                            { href: "/blog/custom-crm-development-guide", title: "Custom CRM Development Guide", desc: "Pillar resource — build vs. buy." },
                            { href: "/software-development-austin-tx", title: "Austin, TX", desc: "Texas startup and SaaS market." },
                            { href: "/software-development-chicago-il", title: "Chicago, IL", desc: "Finance, logistics, manufacturing." },
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
                            Scope DFW work.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> to scope DFW work.
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
