import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { RelatedIndustries } from "@/components/RelatedIndustries";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Sacramento Software Development & Pen Testing | QUANT LAB USA",
    description:
        "Sacramento custom software and penetration testing for gov-tech, ag-tech, and health organizations. Founder-led, fixed-quote, MITRE-aligned. Call (770) 652-1282.",
    slug: "software-development-sacramento-ca",
    image: "/og-image.png",
    type: "article",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-sacramento-ca#localbusiness",
    name: "QUANT LAB USA — Sacramento Coverage",
    url: "https://quantlabusa.dev/software-development-sacramento-ca",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Sacramento", containedInPlace: { "@type": "State", name: "California" } },
        { "@type": "City", name: "Roseville" },
        { "@type": "City", name: "Folsom" },
        { "@type": "City", name: "Elk Grove" },
        { "@type": "City", name: "Davis" },
        { "@type": "City", name: "Rancho Cordova" },
        { "@type": "AdministrativeArea", name: "Sacramento County" },
        { "@type": "AdministrativeArea", name: "Placer County" },
        { "@type": "AdministrativeArea", name: "Yolo County" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 38.5816, longitude: -121.4944 },
    address: { "@type": "PostalAddress", addressLocality: "Sacramento", addressRegion: "CA", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Penetration Testing",
    name: "Custom Software Development & Penetration Testing in Sacramento, CA",
    provider: { "@id": "https://quantlabusa.dev/#organization" },
    areaServed: { "@type": "City", name: "Sacramento", containedInPlace: { "@type": "State", name: "California" } },
    description:
        "Custom software for gov-tech vendors, ag-tech operators, and health organizations, plus MITRE-aligned penetration testing, serving Sacramento and the Capital region.",
    url: "https://quantlabusa.dev/software-development-sacramento-ca",
};

const services = [
    {
        title: "Gov-Tech Vendor Software",
        desc: "Constituent portals, permitting and licensing workflows, and reporting dashboards for vendors selling into state and local agencies. Typical: $30k–$120k.",
    },
    {
        title: "Ag-Tech Operations Tooling",
        desc: "Field operations, supply-chain tracking, and grower-portal software for Central Valley ag and food businesses. Typical: $25k–$90k.",
    },
    {
        title: "Health & Care Operations Dashboards",
        desc: "HIPAA-aware intake, scheduling, and ops tooling for clinics, health systems, and care providers. Typical: $25k–$90k.",
    },
    {
        title: "Penetration Testing (Web, Network, AD)",
        desc: "Full engagements with formal MITRE-ATT&CK-aligned reports for compliance and customer security reviews. Typical: $12k–$40k.",
    },
    {
        title: "Custom CRMs & Operations Dashboards",
        desc: "Purpose-built tooling for agencies, associations, and services firms across the Capital region. Typical: $20k–$70k.",
    },
    {
        title: "Stripe & Licensing Systems",
        desc: "Subscription products, payment portals, and software licensing infrastructure for local SaaS founders. Typical: $8k–$28k.",
    },
];

const faqs = [
    {
        q: "Do you build software for gov-tech vendors selling into California agencies?",
        a: "Yes — constituent portals, permitting and licensing workflows, and reporting dashboards are common Sacramento builds. We scope accessibility and data-handling requirements in at the start.",
    },
    {
        q: "Can you support ag-tech and Central Valley food businesses?",
        a: "Yes — field operations, supply-chain tracking, and grower-portal software are routine. We keep the software clean and usable for field teams, not just office staff.",
    },
    {
        q: "Do you build HIPAA-aware health software?",
        a: "Yes — intake, scheduling, and ops dashboards on a BAA-eligible cloud with encrypted PHI flows and audit-friendly logging. We wire the controls in at build time, not after.",
    },
    {
        q: "What pen testing methodology do you use?",
        a: "Our framework is MITRE ATT&CK end-to-end. Every finding is mapped to a technique ID across recon, credential spraying, Kerberoasting, ADCS abuse, lateral movement, and web app exploitation.",
    },
    {
        q: "What is the time-zone overlap with Pacific Time?",
        a: "We work from Eastern HQ, three hours ahead of Pacific. Our late morning is your early morning and our late afternoon is your mid-morning — we run standups at 11am ET / 8am PT routinely, leaving a clean overlap window.",
    },
    {
        q: "Are you familiar with California-specific compliance (CCPA, CPRA)?",
        a: "Yes — CCPA, CPRA, and the broader California consumer-data framework are standard considerations in our Sacramento builds, alongside the accessibility expectations common in gov-tech work.",
    },
    {
        q: "Can you fly in for kickoffs across the Capital region?",
        a: "For engagements above roughly $25k, yes — SMF is a direct flight from Atlanta. We plan on-site afternoons in downtown Sacramento, Roseville, Folsom, or Davis as scope warrants.",
    },
    {
        q: "What is a typical timeline for a Sacramento engagement?",
        a: "A standalone external pen test runs 2–3 weeks including reporting. A full internal-plus-external with AD scope runs 4–6 weeks. Custom software follows separate fixed-scope scoping.",
    },
];

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://quantlabusa.dev/services" },
        { "@type": "ListItem", position: 3, name: "Software Development Sacramento, CA", item: "https://quantlabusa.dev/software-development-sacramento-ca" },
    ],
};

export default function SacramentoLandingPage() {
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
                        <li className="text-gray-300">Sacramento, CA</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development & Penetration Testing in Sacramento, CA
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        As California&apos;s capital, Sacramento runs on three software-heavy worlds: gov-tech vendors selling into state and local agencies, ag-tech operators across the Central Valley, and a growing health and care sector. Each has data and workflow needs off-the-shelf SaaS rarely fits.
                    </p>
                    <ConsultationCTA label="Scope a Sacramento Engagement" city="Sacramento, CA" source="city-sacramento" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA combines custom software engineering with hands-on penetration testing rooted in the MITRE ATT&amp;CK framework — founder-led delivery, a modern stack, and security-aware engineering by default. For Sacramento buyers handling constituent data, regulated health records, or supply-chain operations, that combination matters.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Sacramento organizations choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Sacramento&apos;s economy is anchored by state government, which pulls in a large ecosystem of gov-tech vendors building constituent portals, permitting and licensing workflows, case-management systems, and reporting dashboards — software with real accessibility and data-handling requirements that generic products handle poorly. Surrounding the capital, the Central Valley is one of the most productive agricultural regions in the world, and the ag-tech operators serving it need field operations, supply-chain tracking, and grower-portal software that holds up in the field. And the region&apos;s health and care sector — health systems, clinics, and care providers across Sacramento, Roseville, and Folsom — generates demand for HIPAA-aware intake, scheduling, and ops tooling.
                        </p>
                        <p>
                            Most generalist agencies sell development hours. We sell senior engineering plus genuine offensive-security capability in the same shop. Active Directory abuse paths, lateral movement, ADCS certificate abuse, Kerberoasting, and web app exploitation are in-house, not a subcontracted line item — and every line of software we ship is reviewed against the same threat models we use on engagements. For a Sacramento gov-tech vendor under a security review, a health provider protecting PHI, or an ag operator hardening its systems, that combination is the entire pitch.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for Sacramento clients</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work remotely with Sacramento teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Sacramento sits three hours behind our Eastern HQ — we work your morning. Our late morning is your early morning and our late afternoon is your mid-morning, so there is a clean overlap window for standups and reviews; we run standups at 11am ET / 8am PT routinely. For engagements above roughly $25k we fly into SMF for an on-site kickoff afternoon — downtown Sacramento, Roseville, Folsom, or Davis as scope warrants. Pen testing engagements run from a secure remote infrastructure with strict source-IP allowlisting and authenticated client-side VPN tunnels for internal scope. Reports are delivered in two formats: a technical deliverable with reproduction steps and remediation detail for the security team, and a board-readable executive summary with a prioritized roadmap. Custom software builds are fixed-scope and fixed-price, with a weekly Friday staging URL and full handover of code and accounts at acceptance. Most Sacramento engagements close inside 4–6 weeks from kickoff to final report.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Gov-tech, ag-tech, and health software — real, in-house",
                            "In-house offensive security capability (AD abuse paths, ADCS, web app)",
                            "Pacific morning–early afternoon overlap from Eastern HQ",
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
                        industries={["healthcare","saas","insurance","fintech"]}
                        heading="Industries we serve in Sacramento"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["compliance","pentest","build-vs-buy"]}
                        pinned={["build-vs-buy-software-2026","what-is-penetration-testing","soc2-pentest-prep-guide-2026"]}
                        heading="Reading for Sacramento founders"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services & nearby cities</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "Portals, dashboards, and workflows." },
                            { href: "/services/custom-crm-development", title: "Custom CRM Development", desc: "Own your CRM — don&apos;t rent it." },
                            { href: "/services/web-applications", title: "Web Applications", desc: "Accessible Next.js / TypeScript builds." },
                            { href: "/services/stripe-integration", title: "Stripe Integration", desc: "Payment portals and subscriptions." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, network, and AD engagements." },
                            { href: "/services/web-app-pentest", title: "Web App Pen Test", desc: "OWASP-aligned web app testing." },
                            { href: "/services/network-pentest", title: "Network Penetration Testing", desc: "Internal and external network engagements." },
                            { href: "/services/mitre-attack-assessment", title: "MITRE ATT&CK Assessment", desc: "Full attack-chain mapping and reporting." },
                            { href: "/blog/what-is-penetration-testing", title: "What Is Penetration Testing?", desc: "A founder's buyer guide." },
                            { href: "/software-development-san-jose-ca", title: "San Jose, CA", desc: "Silicon Valley hardware and SaaS." },
                            { href: "/software-development-los-angeles-ca", title: "Los Angeles, CA", desc: "Media, entertainment-tech, aerospace." },
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
                            Scope a Sacramento engagement.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or email <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a> to discuss Sacramento engagements.
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
