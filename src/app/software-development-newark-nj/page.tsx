import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { RelatedIndustries } from "@/components/RelatedIndustries";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Newark NJ Software Development & Pen Testing | QUANT LAB USA",
    description:
        "Newark and New Jersey custom software and penetration testing for insurance and pharma. Founder-led, US-based, security-aware. Call (770) 652-1282.",
    slug: "software-development-newark-nj",
    image: "/og-image.png",
    type: "article",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-newark-nj#localbusiness",
    name: "QUANT LAB USA — Newark Coverage",
    url: "https://quantlabusa.dev/software-development-newark-nj",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Newark", containedInPlace: { "@type": "State", name: "New Jersey" } },
        { "@type": "City", name: "Jersey City" },
        { "@type": "City", name: "Princeton" },
        { "@type": "City", name: "New Brunswick" },
        { "@type": "AdministrativeArea", name: "Essex County" },
        { "@type": "AdministrativeArea", name: "Hudson County" },
        { "@type": "AdministrativeArea", name: "Northern New Jersey" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 40.7357, longitude: -74.1724 },
    address: { "@type": "PostalAddress", addressLocality: "Newark", addressRegion: "NJ", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Penetration Testing",
    name: "Custom Software Development & Penetration Testing in Newark, NJ",
    provider: { "@id": "https://quantlabusa.dev/#organization" },
    areaServed: { "@type": "City", name: "Newark", containedInPlace: { "@type": "State", name: "New Jersey" } },
    description:
        "Custom software, insurance and pharma tooling, and MITRE ATT&CK-aligned penetration testing for Newark and New Jersey teams.",
    url: "https://quantlabusa.dev/software-development-newark-nj",
};

const services = [
    {
        title: "Insurance & Claims Platforms",
        desc: "Policy management, claims workflows, broker portals, and document automation for NJ carriers. Typical: $30k–$120k.",
    },
    {
        title: "Penetration Testing (Web, Network, AD)",
        desc: "Formal engagements with deliverables for compliance and enterprise security reviews. Typical: $12k–$40k.",
    },
    {
        title: "Pharma & Life-Sciences Tooling",
        desc: "Operations dashboards and data tooling for the pharma corridor with rigorous data handling. Typical: $25k–$100k.",
    },
    {
        title: "Custom CRMs & Operations Dashboards",
        desc: "Purpose-built internal tooling for mid-market and professional-services firms. Typical: $20k–$70k.",
    },
    {
        title: "Stripe & Subscription Billing",
        desc: "Subscription products and licensing infrastructure for New Jersey SaaS founders. Typical: $8k–$28k.",
    },
    {
        title: "Compliance Due-Diligence Packages",
        desc: "Architecture diagrams, threat model, and pen test report ready for carrier and partner review. Typical: $10k–$25k.",
    },
];

const faqs = [
    {
        q: "Do you build software for insurance carriers?",
        a: "Yes — policy management, claims workflows, broker and agent portals, and document automation. New Jersey has one of the densest insurance footprints in the country, and this is one of our core verticals.",
    },
    {
        q: "Do you work with pharma and life-sciences companies?",
        a: "Yes — New Jersey&apos;s pharma corridor runs from Newark through Princeton and New Brunswick. We build operations dashboards and data tooling with the rigorous data handling and audit trails these buyers require.",
    },
    {
        q: "East Coast hours?",
        a: "Yes — our HQ is in Macon, Georgia on Eastern Time, so you get full same-day overlap with New Jersey and no timezone friction.",
    },
    {
        q: "Do you fly in for kickoffs and reviews?",
        a: "For engagements above roughly 25,000 dollars, yes — typically a single working afternoon in Newark, Jersey City, or Princeton. Newark Liberty is about a 2.5-hour flight from Atlanta.",
    },
    {
        q: "Can you produce a pen test report for a carrier security review?",
        a: "Yes — our reports include technical reproduction steps and remediation detail for engineers, plus a board-readable executive summary, formatted for the security and vendor reviews carriers and pharma partners run.",
    },
    {
        q: "Are you a local New Jersey office?",
        a: "No — we are a Macon, Georgia firm working remote-first across the United States, with travel to New Jersey for major-build kickoffs and on-site internal pen tests. You get senior, founder-led engineering without local overhead.",
    },
    {
        q: "What pen testing methodology do you use?",
        a: "MITRE ATT&CK end-to-end. Every finding maps to a technique ID. Internal engagements run modules covering recon, credential spraying, Kerberoasting, ADCS abuse, lateral movement, and command-and-control.",
    },
    {
        q: "What is a typical timeline for a New Jersey engagement?",
        a: "A standalone external pen test runs 2–3 weeks including reporting. A SaaS MVP is usually 6–10 weeks. Larger insurance or pharma platforms follow separate scoping with weekly milestones.",
    },
];

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://quantlabusa.dev/services" },
        { "@type": "ListItem", position: 3, name: "Software Development Newark, NJ", item: "https://quantlabusa.dev/software-development-newark-nj" },
    ],
};

export default function NewarkLandingPage() {
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
                        <li className="text-gray-300">Newark, NJ</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development & Penetration Testing in Newark, NJ
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        New Jersey runs on insurance and pharma. From Newark&apos;s carrier headquarters to the pharma corridor stretching down to Princeton, this is a market where software must be compliant, durable, and built to enterprise standards.
                    </p>
                    <ConsultationCTA label="Discuss a New Jersey Engagement" city="Newark, NJ" source="city-newark" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA pairs custom software engineering with hands-on penetration testing rooted in the MITRE ATT&amp;CK framework. We are founder-led, US-based, and security-aware from day one — exactly what New Jersey&apos;s insurance and pharma buyers require from a software vendor.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why New Jersey organizations choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            New Jersey&apos;s economy is built around two heavyweight industries. The insurance sector — Newark has long been a carrier headquarters town, and the broader state hosts a deep bench of insurers, reinsurers, and brokerages — needs policy management, claims workflows, broker portals, and document automation built to enterprise standards. The pharma and life-sciences corridor, running from Newark through New Brunswick and Princeton, is one of the largest in the world and demands operations and data tooling with serious handling discipline. Around those anchors sits a dense base of professional-services firms and SaaS founders across Essex and Hudson counties, all needing custom software that off-the-shelf products do not solve cleanly.
                        </p>
                        <p>
                            Most generalist agencies cannot credibly speak to penetration testing methodology, and an insurance or pharma buyer running a vendor security review will notice. We can. Active Directory abuse paths, lateral movement, ADCS certificate abuse, Kerberoasting, web application exploitation — that is in-house capability, not a subcontracted line item. Every line of software we ship is reviewed against the same threat models we use on offensive engagements. For a New Jersey carrier modernizing a claims platform, or a pharma-adjacent team preparing for a partner audit, that combination of build capability and security depth is the entire pitch.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for New Jersey clients</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work with New Jersey teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            New Jersey sits in the same time zone as our Macon, Georgia HQ, so you get full Eastern Time overlap and same-business-day responsiveness. Most kickoffs run as a 60–90 minute video session, with an on-site afternoon for engagements above roughly 25,000 dollars — Newark Liberty is about 2.5 hours from Atlanta, and we plan working sessions in Newark, Jersey City, or Princeton as scope warrants. Build cycles run weekly with a Friday staging URL, written notes, and the next week&apos;s plan. Pen tests run from secured remote infrastructure with strict source-IP allowlisting and authenticated VPN tunnels for internal scope. Reports come in two formats: a technical deliverable with reproduction steps for engineers, and a board-readable executive summary with a prioritized remediation roadmap. Custom builds close on fixed-scope, fixed-price proposals, with a full handover of code, database, hosting accounts, and architecture documentation at acceptance.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Full Eastern Time overlap from Georgia HQ — same business day as New Jersey",
                            "Insurance and pharma specialization",
                            "Enterprise-grade data handling and audit-friendly logging",
                            "Pen test reports formatted for carrier and partner reviews",
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
                        industries={["insurance","healthcare","saas","fintech"]}
                        heading="Industries we serve in New Jersey"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["compliance","pentest","build-vs-buy"]}
                        pinned={["soc2-pentest-prep-guide-2026","what-is-penetration-testing","custom-crm-development-guide"]}
                        heading="Reading for New Jersey founders"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services & nearby cities</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "Claims and operations platforms." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, network, and AD engagements." },
                            { href: "/services/web-app-pentest", title: "Web App Pen Test", desc: "OWASP-aligned web app testing." },
                            { href: "/services/mitre-attack-assessment", title: "MITRE ATT&CK Assessment", desc: "Full attack-chain mapping and reporting." },
                            { href: "/services/custom-crm-development", title: "Custom CRM Development", desc: "Broker and agent portals." },
                            { href: "/services/saas-platform-development", title: "SaaS Platform Development", desc: "Multi-tenant apps and portals." },
                            { href: "/services/stripe-integration", title: "Stripe Integration", desc: "Subscription billing and licensing." },
                            { href: "/blog/soc2-pentest-prep-guide-2026", title: "SOC 2 Pentest Prep Guide", desc: "Pre-audit testing mapped to CC controls." },
                            { href: "/blog/custom-crm-development-guide", title: "Custom CRM Development Guide", desc: "When custom beats Salesforce." },
                            { href: "/software-development-new-york-ny", title: "New York, NY", desc: "Fintech, ad-tech, and SaaS." },
                            { href: "/industries/insurance", title: "Insurance", desc: "Policy, claims, and broker portals." },
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
                            Scope a New Jersey engagement.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or email <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a> to discuss New Jersey engagements.
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
