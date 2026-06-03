import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { RelatedIndustries } from "@/components/RelatedIndustries";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Washington DC Software Development & Pen Testing | QUANT LAB USA",
    description:
        "Washington DC custom software and penetration testing for gov-tech, federal contractors, and associations. Founder-led, US-based. Call (770) 652-1282.",
    slug: "software-development-washington-dc",
    image: "/og-image.png",
    type: "article",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-washington-dc#localbusiness",
    name: "QUANT LAB USA — Washington DC Coverage",
    url: "https://quantlabusa.dev/software-development-washington-dc",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Washington", containedInPlace: { "@type": "AdministrativeArea", name: "District of Columbia" } },
        { "@type": "City", name: "Arlington", containedInPlace: { "@type": "State", name: "Virginia" } },
        { "@type": "City", name: "Alexandria", containedInPlace: { "@type": "State", name: "Virginia" } },
        { "@type": "City", name: "Bethesda", containedInPlace: { "@type": "State", name: "Maryland" } },
        { "@type": "AdministrativeArea", name: "Fairfax County" },
        { "@type": "AdministrativeArea", name: "Northern Virginia" },
        { "@type": "AdministrativeArea", name: "DMV Region" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 38.9072, longitude: -77.0369 },
    address: { "@type": "PostalAddress", addressLocality: "Washington", addressRegion: "DC", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Penetration Testing",
    name: "Custom Software Development & Penetration Testing in Washington, DC",
    provider: { "@id": "https://quantlabusa.dev/#organization" },
    areaServed: { "@type": "City", name: "Washington", containedInPlace: { "@type": "AdministrativeArea", name: "District of Columbia" } },
    description:
        "Custom software, association tooling, and MITRE ATT&CK-aligned penetration testing for Washington DC gov-tech, federal contractors, and membership organizations.",
    url: "https://quantlabusa.dev/software-development-washington-dc",
};

const services = [
    {
        title: "Penetration Testing (Web, Network, AD)",
        desc: "Formal engagements with deliverables for compliance, ATO support, and supply-chain security reviews. Typical: $12k–$40k.",
    },
    {
        title: "MITRE ATT&CK Assessments",
        desc: "Attack-chain documentation mapped to MITRE techniques for security teams and executives. Typical: $12k–$35k.",
    },
    {
        title: "Association & Membership Platforms",
        desc: "Member portals, event tooling, and dues billing for DC&apos;s dense nonprofit and association base. Typical: $25k–$90k.",
    },
    {
        title: "Gov-Tech-Adjacent Custom Software",
        desc: "Unclassified web apps and dashboards for federal-prime suppliers and contractor support. Typical: $25k–$120k.",
    },
    {
        title: "Active Directory Hardening",
        desc: "Post-test remediation, GPO review, ADCS reconfiguration, and credential-spray mitigation. Typical: $6k–$20k.",
    },
    {
        title: "Compliance Due-Diligence Packages",
        desc: "Architecture diagrams, threat model, and pen test report formatted for federal and prime review. Typical: $10k–$25k.",
    },
];

const faqs = [
    {
        q: "Do you hold security clearances?",
        a: "Clearance status is discussed under NDA, not on a public page. Most of our work is unclassified support for cleared organizations — ask us directly when you scope your engagement.",
    },
    {
        q: "Can you produce a pen test report I can hand to a federal prime?",
        a: "Yes — our reports are formatted for compliance and supply-chain review, with technical reproduction detail for security teams and an executive summary for leadership. They support ATO and authorization workflows.",
    },
    {
        q: "Do you build software for cleared environments?",
        a: "We scope this case-by-case. Most of our work is unclassified support for cleared organizations and federal-prime suppliers — talk to us about your specific requirements.",
    },
    {
        q: "Do you build for associations and nonprofits?",
        a: "Yes — DC has one of the densest concentrations of trade associations, membership organizations, and nonprofits in the country. We build member portals, event and registration tooling, and dues billing systems for them.",
    },
    {
        q: "East Coast hours?",
        a: "Yes — our HQ is in Macon, Georgia on Eastern Time, so you get full same-day overlap with the DMV and no timezone friction.",
    },
    {
        q: "Do you fly in for kickoffs and reviews?",
        a: "For engagements above roughly 25,000 dollars, yes — typically a single working afternoon in DC, Arlington, Reston, or Bethesda. Atlanta to Reagan National is about a 2-hour flight, and internal pen tests requiring on-site network access are planned on-site.",
    },
    {
        q: "Are you a local DC office?",
        a: "No — we are a Macon, Georgia firm working remote-first across the United States, with travel to the DMV for major-build kickoffs and on-site internal pen tests. You get senior, founder-led engineering without Beltway overhead.",
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
        { "@type": "ListItem", position: 3, name: "Software Development Washington, DC", item: "https://quantlabusa.dev/software-development-washington-dc" },
    ],
};

export default function WashingtonDCLandingPage() {
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
                        <li className="text-gray-300">Washington, DC</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development & Penetration Testing in Washington, DC
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        The DMV runs on gov-tech, federal contracting, and the densest association base in the country. From Northern Virginia primes to K Street nonprofits, this is a market that demands vendors who genuinely understand offensive security.
                    </p>
                    <ConsultationCTA label="Discuss a DC Engagement" city="Washington, DC" source="city-washington-dc" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA pairs custom software engineering with hands-on penetration testing rooted in the MITRE ATT&amp;CK framework. We are founder-led and US-based, and our buyers in the DMV expect their vendors to speak fluent attacker — which we do.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Washington DC organizations choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The Washington economy is shaped by the federal government and everything that orbits it. The gov-tech and federal-contracting layer across Northern Virginia — Reston, Tysons, Arlington — generates constant demand for unclassified web applications, dashboards, and supplier-side tooling, all of it held to compliance and supply-chain security standards. The association and nonprofit base concentrated around K Street and Dupont is one of the densest in the country, and it needs member portals, event and registration systems, and dues billing built properly. And a growing commercial SaaS and professional-services base across the District and the Maryland suburbs rounds out the demand for custom software that off-the-shelf products do not solve cleanly.
                        </p>
                        <p>
                            Most generalist agencies cannot credibly speak to penetration testing methodology, and a DC buyer selling into the federal supply chain will notice immediately. We can. Active Directory abuse paths, lateral movement, ADCS certificate abuse, Kerberoasting, web application exploitation — that is in-house capability, not a subcontracted line item. Every line of software we ship is reviewed against the same threat models we use on offensive engagements. For a federal-prime supplier facing a security review, or an association handling member payment data, that combination of build capability and security depth is the whole pitch.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for Washington DC clients</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work with DC teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The DMV sits in the same time zone as our Macon, Georgia HQ, so you get full Eastern Time overlap and same-business-day responsiveness. Most kickoffs run as a 60–90 minute video session, with an on-site afternoon for engagements above roughly 25,000 dollars — Atlanta to Reagan National is about 2 hours, and we plan working sessions in DC, Arlington, Reston, or Bethesda as scope warrants. Scoping for sensitive work is always on-call or in person, and we travel for internal pen tests requiring on-site network access. Pen tests run from secured remote infrastructure with strict source-IP allowlisting and authenticated VPN tunnels for internal scope. Reports come in two formats: a technical deliverable with reproduction steps for security teams, and a board-readable executive summary with a prioritized remediation roadmap formatted for compliance and authorization workflows. Custom builds close on fixed-scope, fixed-price proposals, with a full handover of code, database, hosting accounts, and architecture documentation at acceptance.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Full Eastern Time overlap from Georgia HQ — same business day as the DMV",
                            "In-house offensive security (AD abuse paths, web app, network)",
                            "Reports formatted for federal-prime supply-chain and ATO review",
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
                        industries={["saas","fintech","legal-services","insurance"]}
                        heading="Industries we serve in Washington DC"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["pentest","compliance","build-vs-buy"]}
                        pinned={["what-is-penetration-testing","soc2-pentest-prep-guide-2026","penetration-test-cost-2026"]}
                        heading="Reading for DC founders"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services & nearby cities</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, network, and AD engagements." },
                            { href: "/services/active-directory-pentest", title: "Active Directory Pen Test", desc: "Kerberoasting, ADCS abuse, lateral movement." },
                            { href: "/services/mitre-attack-assessment", title: "MITRE ATT&CK Assessment", desc: "Full attack-chain mapping and reporting." },
                            { href: "/services/network-pentest", title: "Network Penetration Testing", desc: "Internal and external network engagements." },
                            { href: "/services/web-app-pentest", title: "Web Application Pen Test", desc: "OWASP-aligned web app testing." },
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "Association and ops platforms." },
                            { href: "/services/saas-platform-development", title: "SaaS Platform Development", desc: "Member portals and multi-tenant apps." },
                            { href: "/blog/penetration-test-cost-2026", title: "Penetration Test Cost 2026", desc: "Pricing benchmarks and scope drivers." },
                            { href: "/blog/soc2-pentest-prep-guide-2026", title: "SOC 2 Pentest Prep Guide", desc: "Pre-audit testing mapped to CC controls." },
                            { href: "/software-development-baltimore-md", title: "Baltimore, MD", desc: "Cyber and Fort Meade-adjacent work." },
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
                            Scope a DC engagement.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or email <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a> to discuss DC engagements.
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
