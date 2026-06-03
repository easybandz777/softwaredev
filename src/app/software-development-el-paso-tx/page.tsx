import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { RelatedIndustries } from "@/components/RelatedIndustries";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "El Paso Software Development & Pen Testing | QUANT LAB USA",
    description:
        "El Paso TX custom software, cross-border logistics dashboards, and pen testing for maquiladora supply chains, Fort Bliss vendors, and healthcare. Call (770) 652-1282.",
    slug: "software-development-el-paso-tx",
    image: "/og-image.png",
    type: "article",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-el-paso-tx#localbusiness",
    name: "QUANT LAB USA — El Paso Coverage",
    url: "https://quantlabusa.dev/software-development-el-paso-tx",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "El Paso", containedInPlace: { "@type": "State", name: "Texas" } },
        { "@type": "City", name: "Socorro" },
        { "@type": "City", name: "Horizon City" },
        { "@type": "City", name: "Sunland Park" },
        { "@type": "City", name: "Las Cruces" },
        { "@type": "City", name: "Fort Bliss" },
        { "@type": "AdministrativeArea", name: "El Paso County" },
        { "@type": "AdministrativeArea", name: "Doña Ana County" },
        { "@type": "AdministrativeArea", name: "Borderplex Region" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 31.7619, longitude: -106.485 },
    address: { "@type": "PostalAddress", addressLocality: "El Paso", addressRegion: "TX", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Penetration Testing",
    name: "Custom Software Development & Penetration Testing in El Paso, TX",
    provider: { "@id": "https://quantlabusa.dev/#organization" },
    areaServed: { "@type": "City", name: "El Paso", containedInPlace: { "@type": "State", name: "Texas" } },
    description:
        "Cross-border logistics dashboards, maquiladora supply-chain tooling, and network penetration testing for the Borderplex region.",
    url: "https://quantlabusa.dev/software-development-el-paso-tx",
};

const services = [
    {
        title: "Cross-Border Logistics Dashboards",
        desc: "Customs brokerage tracking, bonded-warehouse visibility, and freight coordination across the Santa Teresa and Bridge of the Americas crossings. Typical: $25k–$90k.",
    },
    {
        title: "Maquiladora Supply-Chain Tooling",
        desc: "Inventory, production tracking, and supplier portals spanning manufacturing on both sides of the border. Typical: $30k–$120k.",
    },
    {
        title: "Custom Software for Defense-Adjacent Vendors",
        desc: "Scoped per requirement — most are unclassified work for vendors serving the Fort Bliss ecosystem. Typical: $25k–$120k.",
    },
    {
        title: "Healthcare Intake & Ops Platforms",
        desc: "HIPAA-aware intake, scheduling, and operations tooling for El Paso's growing medical sector. Typical: $25k–$90k.",
    },
    {
        title: "Penetration Testing (Web, Network, AD)",
        desc: "Full engagements with formal reports for compliance and customer security reviews. Typical: $8k–$28k.",
    },
    {
        title: "Custom CRMs & Operations Dashboards",
        desc: "Purpose-built tooling for distributors, services firms, and brokers across El Paso County. Typical: $20k–$70k.",
    },
];

const faqs = [
    {
        q: "Do you build cross-border logistics and customs software?",
        a: "Yes — customs brokerage tracking, bonded-warehouse visibility, and freight coordination are core work for us in El Paso, given the volume moving through the Santa Teresa, Zaragoza, and Bridge of the Americas crossings. We integrate with existing carrier and warehouse systems rather than forcing a rip-and-replace.",
    },
    {
        q: "Can you handle maquiladora supply-chain tooling that spans both sides of the border?",
        a: "Yes — inventory, production tracking, and supplier portals that span manufacturing operations in El Paso and Ciudad Juárez are a natural fit. We scope multi-site and multi-currency requirements up front.",
    },
    {
        q: "Do you work with Fort Bliss-area vendors?",
        a: "Yes — most of our defense-adjacent work is unclassified support for vendors serving the Fort Bliss ecosystem. Cleared environments are scoped case-by-case, and clearance status is discussed under NDA rather than on a public page.",
    },
    {
        q: "Do you build HIPAA-aware healthcare software?",
        a: "Yes — HIPAA-aware intake, scheduling, and ops platforms on BAA-eligible cloud with encrypted data flows and audit-friendly logging, suited to El Paso's expanding medical sector.",
    },
    {
        q: "What pen testing methodology do you use?",
        a: "Our framework is MITRE ATT&CK end-to-end. Every finding is mapped to a technique ID across recon, credential spraying, Kerberoasting, ADCS abuse, lateral movement, and C2 infrastructure.",
    },
    {
        q: "Can you fly in for kickoffs in the Borderplex?",
        a: "Yes — for engagements above roughly $25k we fly into ELP for an on-site kickoff afternoon. Downtown El Paso, the Santa Teresa industrial park, and Las Cruces are all reachable, and internal pen tests requiring on-site network access are scheduled on-site for the active window.",
    },
    {
        q: "How does the time zone work with your Georgia HQ?",
        a: "El Paso is on Mountain Time, two hours behind Georgia HQ. Our early afternoon and your late morning overlap cleanly for standups and design reviews, and we plan async handoffs around the window.",
    },
    {
        q: "What is a typical timeline for an El Paso engagement?",
        a: "A standalone external pen test runs 2–3 weeks including reporting. A meaningful custom build typically runs 4–6 months, with a staging URL shipped weekly during development.",
    },
];

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://quantlabusa.dev/services" },
        { "@type": "ListItem", position: 3, name: "Software Development El Paso, TX", item: "https://quantlabusa.dev/software-development-el-paso-tx" },
    ],
};

export default function ElPasoLandingPage() {
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
                        <li className="text-gray-300">El Paso, TX</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development & Penetration Testing in El Paso, TX
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        El Paso is the heart of the Borderplex — one of the busiest land-trade gateways in the hemisphere, where cross-border manufacturing, customs brokerage, and Fort Bliss logistics generate constant demand for operational software off-the-shelf SaaS cannot serve cleanly.
                    </p>
                    <ConsultationCTA label="Scope an El Paso Engagement" city="El Paso, TX" source="city-el-paso" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Borderplex operators need a vendor who can wire a logistics dashboard to existing carrier and warehouse systems, build supplier tooling that spans both sides of the border, or harden an exposed application — without a Big Four invoice. That is where QUANT LAB USA fits: senior engineering, fixed scope, founder-accountable, with documentation written for procurement and audit.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why El Paso businesses choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            El Paso anchors the Borderplex, a binational metro of more than 2.5 million people that includes Ciudad Juárez and Las Cruces. The El Paso–Juárez corridor is one of the largest manufacturing centers in North America: hundreds of maquiladoras assemble electronics, automotive components, and medical devices, and the goods move north through the Santa Teresa, Zaragoza, and Bridge of the Americas crossings under a dense web of customs brokers and bonded warehouses. Fort Bliss — one of the largest Army installations in the country — drives a defense-services and logistics base, while the University of Texas at El Paso feeds engineering and computing talent into the region. Healthcare, distribution, and a growing call-center and back-office sector round out the economy.
                        </p>
                        <p>
                            Big-four firms quote enterprise prices and assign juniors. National boutiques rarely understand cross-border trade flows. QUANT LAB USA is founder-led, fixed-scope, and accountable end-to-end — and our network and Active Directory pen testing is in-house, not a subcontracted line item. You get senior engineering at a mid-market price, with documentation written for procurement and audit. For Borderplex operators running supply chains across two countries, that combination is the entire pitch.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for El Paso clients</h2>
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
                            Our pen testing track record includes a full Active Directory engagement for a regional financial services firm — an end-to-end internal assessment running eleven attack modules, every finding mapped to a MITRE ATT&amp;CK technique, with the full attack chain from standard user to Domain Admin documented in screenshots and timestamps. The client passed their compliance audit on the first attempt and re-engaged us on a six-month cadence. That is the same methodology we apply to every El Paso engagement, whether the buyer is a logistics broker, a maquiladora operator, or a Fort Bliss-area vendor.
                        </p>
                        <p>
                            QUANT LAB USA is founder-led and accountable end-to-end. We ship production web and SaaS applications on a modern Next.js, TypeScript, PostgreSQL, and Docker stack, and we keep our proof generic with references available under NDA — we do not name-drop clients who did not sign up to be a marketing line.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Senior engineering at mid-market pricing",
                            "Cross-border, multi-site, multi-currency experience",
                            "Network and AD pen testing in-house",
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work remotely with El Paso teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            El Paso runs on Mountain Time, two hours behind Georgia HQ, so our early afternoon and your late morning overlap cleanly for standups and design reviews. Most engagements start with a 60-minute scope by video, followed by a fly-in for an on-site kickoff afternoon — downtown El Paso, the Santa Teresa industrial park, or Las Cruces. After kickoff, build cycles run weekly with a Friday staging URL, written notes, and the next-week plan. Internal pen tests requiring on-site network access are scheduled on-site for the active testing window with remote reporting following. We bill fixed scope on virtually every El Paso engagement, and code, database, hosting accounts, and full documentation transfer at acceptance — exactly what procurement needs for ownership and audit review.
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
                        industries={["manufacturing","healthcare","construction","fintech"]}
                        heading="Industries we serve in El Paso"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["build-vs-buy","internal-tools","pentest"]}
                        pinned={["build-vs-buy-software-2026","custom-crm-development-guide","what-is-penetration-testing"]}
                        heading="Reading for El Paso founders"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services & nearby cities</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "Logistics and ops dashboards." },
                            { href: "/services/custom-crm-development", title: "Custom CRM Development", desc: "Software you own instead of Salesforce." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, network, wireless, and AD engagements." },
                            { href: "/services/network-pentest", title: "Network Pen Test", desc: "Internal and external network engagements." },
                            { href: "/services/mitre-attack-assessment", title: "MITRE ATT&CK Assessment", desc: "Full attack-chain mapping and reporting." },
                            { href: "/services/api-development", title: "API Development", desc: "Carrier, warehouse, and customs integrations." },
                            { href: "/blog/build-vs-buy-software-2026", title: "Build vs Buy Software 2026", desc: "Three-year TCO and a decision framework." },
                            { href: "/blog/what-is-penetration-testing", title: "What Is Penetration Testing?", desc: "Founder's buyer guide to pen tests." },
                            { href: "/software-development-san-antonio-tx", title: "San Antonio, TX", desc: "Cybersecurity, healthcare, military." },
                            { href: "/software-development-phoenix-az", title: "Phoenix, AZ", desc: "Semiconductors, fintech, and logistics." },
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
                            Scope an El Paso engagement.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or email <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a> to discuss El Paso engagements.
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
