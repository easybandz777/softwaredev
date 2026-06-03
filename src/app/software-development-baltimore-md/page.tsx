import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { RelatedIndustries } from "@/components/RelatedIndustries";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Baltimore Software Development & Pen Testing | QUANT LAB USA",
    description:
        "Baltimore custom software and penetration testing for the cyber corridor near Fort Meade, plus health and edu. Founder-led, US-based. Call (770) 652-1282.",
    slug: "software-development-baltimore-md",
    image: "/og-image.png",
    type: "article",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-baltimore-md#localbusiness",
    name: "QUANT LAB USA — Baltimore Coverage",
    url: "https://quantlabusa.dev/software-development-baltimore-md",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Baltimore", containedInPlace: { "@type": "State", name: "Maryland" } },
        { "@type": "City", name: "Columbia" },
        { "@type": "City", name: "Annapolis" },
        { "@type": "City", name: "Towson" },
        { "@type": "AdministrativeArea", name: "Anne Arundel County" },
        { "@type": "AdministrativeArea", name: "Howard County" },
        { "@type": "AdministrativeArea", name: "Greater Baltimore" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 39.2904, longitude: -76.6122 },
    address: { "@type": "PostalAddress", addressLocality: "Baltimore", addressRegion: "MD", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Cybersecurity",
    name: "Custom Software Development & Cybersecurity in Baltimore, MD",
    provider: { "@id": "https://quantlabusa.dev/#organization" },
    areaServed: { "@type": "City", name: "Baltimore", containedInPlace: { "@type": "State", name: "Maryland" } },
    description:
        "Penetration testing, custom software, and health-tech tooling for the Baltimore cyber corridor near Fort Meade, rooted in MITRE ATT&CK methodology.",
    url: "https://quantlabusa.dev/software-development-baltimore-md",
};

const services = [
    {
        title: "Penetration Testing (Web, Network, Wireless, AD)",
        desc: "Full engagements with formal reports for compliance and customer security reviews. Typical: $12k–$40k.",
    },
    {
        title: "MITRE ATT&CK Assessments",
        desc: "Attack-chain documentation mapped to MITRE techniques for security teams and executives. Typical: $12k–$35k.",
    },
    {
        title: "Cyber-Sector Custom Software",
        desc: "Unclassified web apps and dashboards for contractors and vendors in the Fort Meade orbit. Typical: $25k–$120k.",
    },
    {
        title: "Health-Tech Platforms",
        desc: "Patient-facing apps and clinical operations tooling built with HIPAA-aware data handling. Typical: $25k–$90k.",
    },
    {
        title: "Active Directory Hardening",
        desc: "Post-test remediation, GPO review, ADCS reconfiguration, and credential-spray mitigation. Typical: $6k–$20k.",
    },
    {
        title: "Compliance Due-Diligence Packages",
        desc: "Architecture diagrams, threat model, and pen test report formatted for prime and payer review. Typical: $10k–$25k.",
    },
];

const faqs = [
    {
        q: "Do you hold security clearances?",
        a: "Clearance status is discussed under NDA, not on a public page. Most of our work is unclassified support for cleared organizations — ask us directly when you scope your engagement.",
    },
    {
        q: "Can you produce a pen test report I can hand to a federal prime?",
        a: "Yes — our reports are formatted for compliance and supply-chain review, with technical reproduction detail for security teams and an executive summary for leadership.",
    },
    {
        q: "Do you build software for the Fort Meade contractor ecosystem?",
        a: "We scope this case-by-case. Most of our work is unclassified support for cleared organizations and cyber-sector vendors around Fort Meade, Columbia, and the BWI corridor — talk to us about your specific requirements.",
    },
    {
        q: "Do you build for hospital systems and health tech?",
        a: "Yes — Baltimore is a major health and research hub. We build patient-facing apps and clinical operations tooling with HIPAA-aware data handling, encrypted PHI flows, and audit-friendly logging.",
    },
    {
        q: "East Coast hours?",
        a: "Yes — our HQ is in Macon, Georgia on Eastern Time, so you get full same-day overlap with Baltimore and no timezone friction.",
    },
    {
        q: "Do you fly in for kickoffs and reviews?",
        a: "For engagements above roughly 25,000 dollars, yes — typically a single working afternoon in Baltimore, Columbia, or Annapolis. Atlanta to BWI is about a 2-hour flight, and internal pen tests requiring on-site network access are planned on-site.",
    },
    {
        q: "Are you a local Baltimore office?",
        a: "No — we are a Macon, Georgia firm working remote-first across the United States, with travel to Baltimore for major-build kickoffs and on-site internal pen tests. You get senior, founder-led engineering without local overhead.",
    },
    {
        q: "What pen testing methodology do you use?",
        a: "MITRE ATT&CK end-to-end. Every finding maps to a technique ID. Internal engagements run modules covering recon, credential spraying, Kerberoasting, ADCS abuse, lateral movement, and command-and-control.",
    },
];

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://quantlabusa.dev/services" },
        { "@type": "ListItem", position: 3, name: "Software Development Baltimore, MD", item: "https://quantlabusa.dev/software-development-baltimore-md" },
    ],
};

export default function BaltimoreLandingPage() {
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
                        <li className="text-gray-300">Baltimore, MD</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development & Cybersecurity in Baltimore, MD
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Baltimore anchors one of the most concentrated cybersecurity corridors in the country. With Fort Meade and the NSA next door, a dense contractor base in Columbia, and Johns Hopkins driving health and research, this region demands vendors fluent in offensive security.
                    </p>
                    <ConsultationCTA label="Discuss a Baltimore Engagement" city="Baltimore, MD" source="city-baltimore" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA pairs custom software engineering with hands-on penetration testing rooted in the MITRE ATT&amp;CK framework. We are founder-led and US-based, and Baltimore&apos;s cyber corridor expects its vendors to speak fluent attacker — which we do.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Baltimore organizations choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Baltimore sits at the heart of a cybersecurity cluster unlike almost any other. Fort Meade — home to the NSA and US Cyber Command — anchors a dense ecosystem of cleared contractors and cyber-sector vendors stretching through Columbia, Annapolis Junction, and the BWI corridor. Layered on top of that is a major health and research economy led by Johns Hopkins, plus a university base feeding the talent pipeline, and a steady stream of commercial SaaS and professional-services firms across the metro. Each of those segments needs software that off-the-shelf products do not solve cleanly, and the cyber-adjacent buyers in particular expect their vendors to understand security at a technical level.
                        </p>
                        <p>
                            Most generalist agencies cannot credibly speak to penetration testing methodology, and a Fort Meade-adjacent buyer will spot that instantly. We can. Active Directory abuse paths, lateral movement, ADCS certificate abuse, Kerberoasting, wireless attacks, web application exploitation — that is in-house capability, not a subcontracted line item. Every line of software we ship is reviewed against the same threat models we use on offensive engagements. For a Baltimore cyber-sector vendor facing a supply-chain review, or a Hopkins-adjacent health-tech team preparing for a payer audit, that combination of build capability and security depth is the entire pitch.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for Baltimore clients</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work with Baltimore teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Baltimore sits in the same time zone as our Macon, Georgia HQ, so you get full Eastern Time overlap and same-business-day responsiveness. Most kickoffs run as a 60–90 minute video session, with an on-site afternoon for engagements above roughly 25,000 dollars — Atlanta to BWI is about 2 hours, and we plan working sessions in Baltimore, Columbia, or Annapolis as scope warrants. Scoping for sensitive work is always on-call or in person, and we travel for internal pen tests requiring on-site network access. Pen tests run from secured remote infrastructure with strict source-IP allowlisting and authenticated VPN tunnels for internal scope. Reports come in two formats: a technical deliverable with reproduction steps for security teams, and a board-readable executive summary with a prioritized remediation roadmap. Custom builds close on fixed-scope, fixed-price proposals, with a full handover of code, database, hosting accounts, and architecture documentation at acceptance.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Full Eastern Time overlap from Georgia HQ — same business day as Baltimore",
                            "In-house offensive security (AD abuse paths, wireless, ADCS, web app)",
                            "Reports formatted for federal-prime supply-chain review",
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
                        industries={["saas","healthcare","fintech","legal-services"]}
                        heading="Industries we serve in Baltimore"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["pentest","compliance","build-vs-buy"]}
                        pinned={["what-is-penetration-testing","penetration-test-cost-2026","soc2-pentest-prep-guide-2026"]}
                        heading="Reading for Baltimore founders"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services & nearby cities</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, network, wireless, and AD engagements." },
                            { href: "/services/active-directory-pentest", title: "Active Directory Pen Test", desc: "Kerberoasting, ADCS abuse, lateral movement." },
                            { href: "/services/mitre-attack-assessment", title: "MITRE ATT&CK Assessment", desc: "Full attack-chain mapping and reporting." },
                            { href: "/services/network-pentest", title: "Network Penetration Testing", desc: "Internal and external network engagements." },
                            { href: "/services/web-app-pentest", title: "Web Application Pen Test", desc: "OWASP-aligned web app testing." },
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "Dashboards and operations tooling." },
                            { href: "/services/saas-platform-development", title: "SaaS Platform Development", desc: "Multi-tenant apps and portals." },
                            { href: "/blog/penetration-test-cost-2026", title: "Penetration Test Cost 2026", desc: "Pricing benchmarks and scope drivers." },
                            { href: "/blog/what-is-penetration-testing", title: "What Is Penetration Testing?", desc: "A founder&apos;s buyer guide." },
                            { href: "/software-development-washington-dc", title: "Washington, DC", desc: "Gov-tech and federal contractors." },
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
                            Scope a Baltimore engagement.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or email <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a> to discuss Baltimore engagements.
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
