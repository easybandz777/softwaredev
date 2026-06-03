import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { RelatedIndustries } from "@/components/RelatedIndustries";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Buffalo NY Software Development & Pen Testing | QUANT LAB USA",
    description:
        "Buffalo custom software and penetration testing for health systems and advanced manufacturing. Founder-led, US-based. Call (770) 652-1282.",
    slug: "software-development-buffalo-ny",
    image: "/og-image.png",
    type: "article",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-buffalo-ny#localbusiness",
    name: "QUANT LAB USA — Buffalo Coverage",
    url: "https://quantlabusa.dev/software-development-buffalo-ny",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Buffalo", containedInPlace: { "@type": "State", name: "New York" } },
        { "@type": "City", name: "Amherst" },
        { "@type": "City", name: "Cheektowaga" },
        { "@type": "City", name: "Niagara Falls" },
        { "@type": "AdministrativeArea", name: "Erie County" },
        { "@type": "AdministrativeArea", name: "Western New York" },
        { "@type": "AdministrativeArea", name: "Greater Buffalo" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 42.8864, longitude: -78.8784 },
    address: { "@type": "PostalAddress", addressLocality: "Buffalo", addressRegion: "NY", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Penetration Testing",
    name: "Custom Software Development & Penetration Testing in Buffalo, NY",
    provider: { "@id": "https://quantlabusa.dev/#organization" },
    areaServed: { "@type": "City", name: "Buffalo", containedInPlace: { "@type": "State", name: "New York" } },
    description:
        "Custom software, manufacturing systems, and MITRE ATT&CK-aligned penetration testing for Buffalo health systems and advanced-manufacturing teams.",
    url: "https://quantlabusa.dev/software-development-buffalo-ny",
};

const services = [
    {
        title: "Manufacturing Systems & Supplier Portals",
        desc: "Inventory, traceability, MES integrations, and supplier portals for advanced-manufacturing firms. Typical: $30k–$120k.",
    },
    {
        title: "Health-System & Clinical Tooling",
        desc: "Intake, scheduling, and operations dashboards built with HIPAA-aware data handling. Typical: $25k–$90k.",
    },
    {
        title: "Penetration Testing (Web, Network, AD)",
        desc: "Formal engagements with deliverables for compliance and enterprise security reviews. Typical: $12k–$40k.",
    },
    {
        title: "Custom CRMs & Operations Dashboards",
        desc: "Purpose-built internal tooling for mid-market and family-owned firms. Typical: $20k–$70k.",
    },
    {
        title: "Stripe & Subscription Billing",
        desc: "Subscription products and licensing infrastructure for Western New York SaaS founders. Typical: $8k–$28k.",
    },
    {
        title: "Legacy Modernization",
        desc: "Replacing brittle spreadsheets and aging line-of-business apps with maintainable systems. Typical: $25k–$100k.",
    },
];

const faqs = [
    {
        q: "Do you build software for advanced-manufacturing firms?",
        a: "Yes — inventory and traceability, MES integrations, supplier and vendor portals, and the web and data layer around production. Western New York has a deep manufacturing base, and this is one of our core verticals.",
    },
    {
        q: "Do you work with health systems and clinical teams?",
        a: "Yes — Buffalo is a regional health hub anchored by the Buffalo Niagara Medical Campus. We build intake, scheduling, and operations tooling with HIPAA-aware data handling, encrypted PHI flows, and audit-friendly logging.",
    },
    {
        q: "Can you modernize an aging line-of-business system?",
        a: "Yes — legacy modernization is common in Western New York, where many established firms still run on brittle spreadsheets or decade-old apps. We migrate them to maintainable systems without losing history.",
    },
    {
        q: "East Coast hours?",
        a: "Yes — our HQ is in Macon, Georgia on Eastern Time, so you get full same-day overlap with Buffalo and no timezone friction.",
    },
    {
        q: "Do you fly in for kickoffs and reviews?",
        a: "For engagements above roughly 25,000 dollars, yes — typically a single working afternoon in downtown Buffalo, Amherst, or on the Medical Campus. Atlanta to Buffalo Niagara is about a 2.5-hour flight.",
    },
    {
        q: "Are you a local Buffalo office?",
        a: "No — we are a Macon, Georgia firm working remote-first across the United States, with travel to Buffalo for major-build kickoffs and on-site internal pen tests. You get senior, founder-led engineering without local overhead.",
    },
    {
        q: "What pen testing methodology do you use?",
        a: "MITRE ATT&CK end-to-end. Every finding maps to a technique ID. Internal engagements run modules covering recon, credential spraying, Kerberoasting, ADCS abuse, lateral movement, and command-and-control.",
    },
    {
        q: "What is a typical timeline for a Buffalo engagement?",
        a: "A standalone external pen test runs 2–3 weeks including reporting. A modernization or MVP build is usually 6–10 weeks. Larger manufacturing or health platforms follow separate scoping with weekly milestones.",
    },
];

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://quantlabusa.dev/services" },
        { "@type": "ListItem", position: 3, name: "Software Development Buffalo, NY", item: "https://quantlabusa.dev/software-development-buffalo-ny" },
    ],
};

export default function BuffaloLandingPage() {
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
                        <li className="text-gray-300">Buffalo, NY</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development & Penetration Testing in Buffalo, NY
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Buffalo runs on health and advanced manufacturing. With the Buffalo Niagara Medical Campus driving a health-and-research resurgence and a deep manufacturing base across Western New York, this is a region where practical, durable software wins.
                    </p>
                    <ConsultationCTA label="Discuss a Buffalo Engagement" city="Buffalo, NY" source="city-buffalo" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA pairs custom software engineering with hands-on penetration testing rooted in the MITRE ATT&amp;CK framework. We are founder-led, US-based, and security-aware from day one — and we build the kind of practical, durable systems Buffalo&apos;s health and manufacturing buyers actually need.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Buffalo organizations choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Buffalo&apos;s economy has two strong engines. The health and life-sciences sector, centered on the Buffalo Niagara Medical Campus and Roswell Park, has driven a genuine downtown resurgence and needs intake, scheduling, and clinical operations tooling built with real data discipline. Advanced manufacturing remains a regional backbone across Erie and Niagara counties — firms that need inventory and traceability systems, MES integrations, supplier portals, and modernization of aging line-of-business software. Around those anchors sits a practical base of family-owned and mid-market firms, plus a growing SaaS scene supported by the University at Buffalo, all needing custom software that off-the-shelf products do not solve cleanly.
                        </p>
                        <p>
                            Most generalist agencies cannot credibly speak to penetration testing methodology, and they often treat security as an afterthought. We do not. Active Directory abuse paths, lateral movement, ADCS certificate abuse, Kerberoasting, web application exploitation — that is in-house capability, not a subcontracted line item. Every line of software we ship is reviewed against the same threat models we use on offensive engagements. For a Buffalo manufacturer modernizing operations, or a health-system-adjacent team preparing for a security review, that combination of build capability and security depth is the entire pitch.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for Buffalo clients</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work with Buffalo teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Buffalo sits in the same time zone as our Macon, Georgia HQ, so you get full Eastern Time overlap and same-business-day responsiveness. Most kickoffs run as a 60–90 minute video session, with an on-site afternoon for engagements above roughly 25,000 dollars — Atlanta to Buffalo Niagara is about 2.5 hours, and we plan working sessions in downtown Buffalo, Amherst, or on the Medical Campus as scope warrants. Build cycles run weekly with a Friday staging URL, written notes, and the next week&apos;s plan. Pen tests run from secured remote infrastructure with strict source-IP allowlisting and authenticated VPN tunnels for internal scope. Reports come in two formats: a technical deliverable with reproduction steps for engineers, and a board-readable executive summary with a prioritized remediation roadmap. Custom builds close on fixed-scope, fixed-price proposals, with a full handover of code, database, hosting accounts, and architecture documentation at acceptance.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Full Eastern Time overlap from Georgia HQ — same business day as Buffalo",
                            "Advanced-manufacturing and health-system specialization",
                            "Legacy modernization without losing history",
                            "In-house offensive security (AD abuse paths, web app, network)",
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
                        industries={["manufacturing","healthcare","saas","construction"]}
                        heading="Industries we serve in Buffalo"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["build-vs-buy","saas","pentest"]}
                        pinned={["build-vs-buy-software-2026","custom-crm-development-guide","what-is-penetration-testing"]}
                        heading="Reading for Buffalo founders"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services & nearby cities</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "Manufacturing and ops systems." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, network, and AD engagements." },
                            { href: "/services/web-app-pentest", title: "Web App Pen Test", desc: "OWASP-aligned web app testing." },
                            { href: "/services/mitre-attack-assessment", title: "MITRE ATT&CK Assessment", desc: "Full attack-chain mapping and reporting." },
                            { href: "/services/custom-crm-development", title: "Custom CRM Development", desc: "Own your CRM — don&apos;t rent it." },
                            { href: "/services/api-development", title: "API Development", desc: "MES integrations and data pipelines." },
                            { href: "/services/stripe-integration", title: "Stripe Integration", desc: "Subscription billing and licensing." },
                            { href: "/blog/build-vs-buy-software-2026", title: "Build vs Buy Software 2026", desc: "Three-year TCO decision framework." },
                            { href: "/blog/custom-crm-development-guide", title: "Custom CRM Development Guide", desc: "When custom beats Salesforce." },
                            { href: "/industries/manufacturing", title: "Manufacturing", desc: "Inventory, MES, supplier portals." },
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
                            Scope a Buffalo engagement.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or email <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a> to discuss Buffalo engagements.
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
