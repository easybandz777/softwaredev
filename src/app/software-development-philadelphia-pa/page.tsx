import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { RelatedIndustries } from "@/components/RelatedIndustries";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Philadelphia Software Development & Pen Testing | QUANT LAB USA",
    description:
        "Philadelphia custom software and penetration testing for eds-and-meds, hospital systems, and SaaS. Founder-led, US-based. Call (770) 652-1282.",
    slug: "software-development-philadelphia-pa",
    image: "/og-image.png",
    type: "article",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-philadelphia-pa#localbusiness",
    name: "QUANT LAB USA — Philadelphia Coverage",
    url: "https://quantlabusa.dev/software-development-philadelphia-pa",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Philadelphia", containedInPlace: { "@type": "State", name: "Pennsylvania" } },
        { "@type": "City", name: "King of Prussia" },
        { "@type": "City", name: "Conshohocken" },
        { "@type": "City", name: "Camden", containedInPlace: { "@type": "State", name: "New Jersey" } },
        { "@type": "AdministrativeArea", name: "Philadelphia County" },
        { "@type": "AdministrativeArea", name: "Montgomery County" },
        { "@type": "AdministrativeArea", name: "Greater Philadelphia" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 39.9526, longitude: -75.1652 },
    address: { "@type": "PostalAddress", addressLocality: "Philadelphia", addressRegion: "PA", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Penetration Testing",
    name: "Custom Software Development & Penetration Testing in Philadelphia, PA",
    provider: { "@id": "https://quantlabusa.dev/#organization" },
    areaServed: { "@type": "City", name: "Philadelphia", containedInPlace: { "@type": "State", name: "Pennsylvania" } },
    description:
        "Custom software, healthcare-aware platforms, and MITRE ATT&CK-aligned penetration testing for Philadelphia hospital systems, universities, and SaaS teams.",
    url: "https://quantlabusa.dev/software-development-philadelphia-pa",
};

const services = [
    {
        title: "Healthcare & Hospital-System Tooling",
        desc: "Intake, scheduling, and operations dashboards built with HIPAA-aware data handling. Typical: $25k–$90k.",
    },
    {
        title: "Penetration Testing (Web, Network, AD)",
        desc: "Formal engagements with deliverables for HIPAA, SOC 2, and enterprise security reviews. Typical: $12k–$40k.",
    },
    {
        title: "University & EdTech Platforms",
        desc: "Student-facing apps, research tooling, and admin portals for the region&apos;s deep university base. Typical: $25k–$80k.",
    },
    {
        title: "Custom CRMs & Operations Dashboards",
        desc: "Purpose-built internal tooling for professional-services and mid-market firms. Typical: $20k–$70k.",
    },
    {
        title: "Stripe & Subscription Billing",
        desc: "Subscription products and licensing infrastructure for Philadelphia SaaS founders. Typical: $8k–$28k.",
    },
    {
        title: "Compliance Due-Diligence Packages",
        desc: "Architecture diagrams, threat model, and pen test report ready for partner and payer reviews. Typical: $10k–$25k.",
    },
];

const faqs = [
    {
        q: "Do you build software for hospital systems and healthcare teams?",
        a: "Yes — intake and scheduling, operations dashboards, and back-office tooling with HIPAA-aware data handling, encrypted PHI flows, and audit-friendly logging. We scope data handling carefully because payer and partner reviews are unforgiving.",
    },
    {
        q: "Can you support a Penn, Drexel, or Temple spinout?",
        a: "Yes — taking a research or campus prototype to a fundable product is a common Philadelphia engagement. Fixed scope, weekly Friday staging URL, full handover of code and accounts at acceptance.",
    },
    {
        q: "East Coast hours?",
        a: "Yes — our HQ is in Macon, Georgia on Eastern Time, so you get full same-day overlap with Philadelphia and no timezone friction.",
    },
    {
        q: "Do you fly in for kickoffs and reviews?",
        a: "For engagements above roughly 25,000 dollars, yes — typically a single working afternoon in Center City, University City, or King of Prussia. Atlanta to Philadelphia is about a 2-hour flight.",
    },
    {
        q: "Can you produce a pen test report for a HIPAA or SOC 2 audit?",
        a: "Yes — our reports include technical reproduction steps and remediation detail for engineers, plus an executive summary, and they map cleanly to HIPAA Security Rule and SOC 2 CC control expectations.",
    },
    {
        q: "Are you a local Philadelphia office?",
        a: "No — we are a Macon, Georgia firm working remote-first across the United States, with travel to Philadelphia for major-build kickoffs and on-site internal pen tests. You get senior, founder-led engineering without local overhead.",
    },
    {
        q: "What pen testing methodology do you use?",
        a: "MITRE ATT&CK end-to-end. Every finding maps to a technique ID. Internal engagements run modules covering recon, credential spraying, Kerberoasting, ADCS abuse, lateral movement, and command-and-control.",
    },
    {
        q: "What is a typical timeline for a Philadelphia engagement?",
        a: "A standalone external pen test runs 2–3 weeks including reporting. A SaaS MVP is usually 6–10 weeks. Larger healthcare or platform builds follow separate scoping with weekly milestones.",
    },
];

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://quantlabusa.dev/services" },
        { "@type": "ListItem", position: 3, name: "Software Development Philadelphia, PA", item: "https://quantlabusa.dev/software-development-philadelphia-pa" },
    ],
};

export default function PhiladelphiaLandingPage() {
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
                        <li className="text-gray-300">Philadelphia, PA</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development & Penetration Testing in Philadelphia, PA
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Philadelphia is an eds-and-meds town. Penn, Drexel, Temple, and Jefferson sit beside one of the densest hospital-system and healthcare-payer clusters in the country — a market where software has to be careful, compliant, and built to last.
                    </p>
                    <ConsultationCTA label="Discuss a Philadelphia Engagement" city="Philadelphia, PA" source="city-philadelphia" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA pairs custom software engineering with hands-on penetration testing rooted in the MITRE ATT&amp;CK framework. We are founder-led, US-based, and security-aware from day one — which is exactly what Philadelphia&apos;s healthcare and university buyers require from a vendor.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Philadelphia organizations choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Philadelphia&apos;s economy is built on eds-and-meds. The hospital and health-system layer — Penn Medicine, Jefferson, Children&apos;s Hospital of Philadelphia, Temple Health — plus a heavy concentration of pharma and healthcare-payer operations creates constant demand for intake, scheduling, and operations software built with real data-handling discipline. The university engine at Penn, Drexel, Temple, and Villanova feeds a steady stream of spinouts and EdTech ventures. And a growing SaaS and professional-services base across Center City, University City, and the King of Prussia corridor needs custom CRMs, billing infrastructure, and internal tooling that off-the-shelf products do not solve cleanly.
                        </p>
                        <p>
                            Most generalist agencies cannot credibly speak to penetration testing methodology, and a healthcare-grade buyer in Philadelphia will notice immediately. We can. Active Directory abuse paths, lateral movement, ADCS certificate abuse, Kerberoasting, web application exploitation — that is in-house capability, not a subcontracted line item. Every line of software we ship is reviewed against the same threat models we use on offensive engagements. For a Philadelphia health system facing a payer security review, or a SaaS founder preparing for a SOC 2 audit, that combination of build capability and security depth is the whole pitch.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for Philadelphia clients</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work with Philadelphia teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Philadelphia sits in the same time zone as our Macon, Georgia HQ, so you get full Eastern Time overlap and same-business-day responsiveness. Most kickoffs run as a 60–90 minute video session, with an on-site afternoon for engagements above roughly 25,000 dollars — Atlanta to Philadelphia is about 2 hours, and we plan working sessions in Center City, University City, or King of Prussia as scope warrants. Build cycles run weekly with a Friday staging URL, written notes, and the next week&apos;s plan. Pen tests run from secured remote infrastructure with strict source-IP allowlisting and authenticated VPN tunnels for internal scope. Reports come in two formats: a technical deliverable with reproduction steps for engineers, and a board-readable executive summary with a prioritized remediation roadmap. Custom builds close on fixed-scope, fixed-price proposals, and the handover at acceptance is the code, the database, the hosting accounts, and the architecture documentation in one package.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Full Eastern Time overlap from Georgia HQ — same business day as Philadelphia",
                            "Healthcare and eds-and-meds specialization",
                            "HIPAA-aware data handling and audit-friendly logging",
                            "Pen test reports formatted for HIPAA and SOC 2 review",
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
                        industries={["healthcare","saas","legal-services","fintech"]}
                        heading="Industries we serve in Philadelphia"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["compliance","pentest","saas"]}
                        pinned={["soc2-pentest-prep-guide-2026","what-is-penetration-testing","build-vs-buy-software-2026"]}
                        heading="Reading for Philadelphia founders"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services & nearby cities</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, network, and AD engagements." },
                            { href: "/services/web-app-pentest", title: "Web App Pen Test", desc: "OWASP-aligned web app testing." },
                            { href: "/services/mitre-attack-assessment", title: "MITRE ATT&CK Assessment", desc: "Full attack-chain mapping and reporting." },
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "Healthcare and ops dashboards." },
                            { href: "/services/saas-platform-development", title: "SaaS Platform Development", desc: "Multi-tenant apps and portals." },
                            { href: "/services/custom-crm-development", title: "Custom CRM Development", desc: "Own your CRM — don&apos;t rent it." },
                            { href: "/services/stripe-integration", title: "Stripe Integration", desc: "Subscription billing and licensing." },
                            { href: "/blog/soc2-pentest-prep-guide-2026", title: "SOC 2 Pentest Prep Guide", desc: "Pre-audit testing mapped to CC controls." },
                            { href: "/blog/what-is-penetration-testing", title: "What Is Penetration Testing?", desc: "A founder&apos;s buyer guide." },
                            { href: "/software-development-new-york-ny", title: "New York, NY", desc: "Fintech, ad-tech, and SaaS." },
                            { href: "/pricing", title: "Pricing", desc: "How fixed-quote engagements are scoped." },
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
                            Scope a Philadelphia engagement.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or email <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a> to discuss Philadelphia engagements.
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
