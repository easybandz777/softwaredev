import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Augusta GA Software Dev & Penetration Testing | QUANT LAB USA",
    description:
        "Augusta-area custom software and penetration testing built for the cyber corridor around Fort Eisenhower and Army Cyber Command. Founder-led. Call (770) 652-1282.",
    slug: "software-development-augusta-ga",
    image: "/og-image.png",
    type: "article",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-augusta-ga#localbusiness",
    name: "QUANT LAB USA — Augusta Coverage",
    url: "https://quantlabusa.dev/software-development-augusta-ga",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Augusta", containedInPlace: { "@type": "State", name: "Georgia" } },
        { "@type": "City", name: "Evans" },
        { "@type": "City", name: "Martinez" },
        { "@type": "City", name: "Grovetown" },
        { "@type": "AdministrativeArea", name: "Richmond County" },
        { "@type": "AdministrativeArea", name: "Columbia County" },
        { "@type": "AdministrativeArea", name: "CSRA" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 33.4735, longitude: -82.0105 },
    address: { "@type": "PostalAddress", addressLocality: "Augusta", addressRegion: "GA", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Cybersecurity",
    name: "Custom Software Development & Cybersecurity in Augusta, GA",
    provider: { "@id": "https://quantlabusa.dev/#organization" },
    areaServed: { "@type": "City", name: "Augusta", containedInPlace: { "@type": "State", name: "Georgia" } },
    description:
        "Penetration testing and custom software engineering for the Augusta cyber corridor, rooted in MITRE ATT&CK methodology.",
    url: "https://quantlabusa.dev/software-development-augusta-ga",
};

const services = [
    {
        title: "Penetration Testing (Web, Network, Wireless, AD)",
        desc: "Full red-team-style engagements with formal reports for compliance and customer security reviews. Typical: $8k–$28k.",
    },
    {
        title: "MITRE ATT&CK Assessments",
        desc: "Attack-chain documentation mapped to MITRE techniques for executive and security teams. Typical: $12k–$35k.",
    },
    {
        title: "Custom CRMs & Operations Dashboards",
        desc: "Purpose-built tooling for medical, legal, and contracting firms across the CSRA. Typical: $20k–$70k.",
    },
    {
        title: "Stripe & Licensing Systems",
        desc: "Subscription products and software licensing infrastructure for local SaaS founders. Typical: $8k–$28k.",
    },
    {
        title: "Active Directory Hardening",
        desc: "Post-test remediation, GPO review, ADCS reconfiguration, and credential-spray mitigation. Typical: $6k–$20k.",
    },
    {
        title: "Custom Software for Defense-Adjacent Vendors",
        desc: "Scoped per requirement — most are unclassified work for federal-prime suppliers. Typical: $25k–$120k.",
    },
];

const faqs = [
    {
        q: "Do you hold security clearances?",
        a: "Clearance status is discussed under NDA, not on a public page. Ask us directly when you scope your engagement.",
    },
    {
        q: "Can you produce a pen test report I can hand to a federal prime?",
        a: "Yes — our reports are formatted for compliance and supply-chain review, with both technical detail for security teams and an executive summary for leadership.",
    },
    {
        q: "Do you build software for cleared environments?",
        a: "We scope this case-by-case. Most of our work is unclassified support for cleared organizations — talk to us about your specific requirements.",
    },
    {
        q: "What pen testing methodology do you use?",
        a: "Our framework is MITRE ATT&CK end-to-end. Every finding is mapped to a technique ID. We run eleven attack modules covering recon, credential spraying, Kerberoasting, ADCS abuse, lateral movement, and C2 infrastructure.",
    },
    {
        q: "Are you available for in-person engagements in the CSRA?",
        a: "Yes — we drive up I-20 from Macon for kickoffs, internal pen tests requiring on-site network access, and report-readout meetings.",
    },
    {
        q: "Do you work with Plant Vogtle and energy-sector clients?",
        a: "We scope nuclear-adjacent and energy-sector work case-by-case. ICS/SCADA assessments require specialized scope and are quoted differently from corporate-network tests.",
    },
    {
        q: "What is a typical timeline for an Augusta engagement?",
        a: "A standalone external pen test runs 2–3 weeks including reporting. A full internal-plus-external with AD scope runs 4–6 weeks. Custom software follows separate scoping.",
    },
    {
        q: "Do you follow up after remediation?",
        a: "Yes — most engagements include one round of retest on remediated findings within 60 days of the initial report at no additional charge.",
    },
];

export default function AugustaLandingPage() {
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
                        <li className="text-gray-300">Augusta, GA</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development & Cybersecurity in Augusta, GA
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Augusta sits at the center of the southeast&apos;s cyber corridor. With Fort Eisenhower, Army Cyber Command, and the growing private-sector ecosystem along Reynolds and Broad Streets, this region demands software vendors who genuinely understand offensive security.
                    </p>
                    <ConsultationCTA label="Discuss an Augusta Engagement" city="Augusta, GA" source="city-augusta" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA combines custom software engineering with hands-on penetration testing rooted in the MITRE ATT&amp;CK framework — not just selling development hours. Augusta&apos;s buyers expect their vendors to speak fluent attacker, and we do.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Augusta organizations choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Augusta is unique in the southeast. Fort Eisenhower hosts the US Army Cyber Center of Excellence, Army Cyber Command, and the Signal Corps — the gravitational center for everything happening downstream of it. The Georgia Cyber Center on the riverwalk pulled the Georgia Bureau of Investigation Cyber Crime Center, Augusta University&apos;s School of Computer and Cyber Sciences, and a growing tenant base of private cybersecurity firms into one building. Across Columbia and Richmond counties you have a deep bench of cleared contractors, medical research at the Medical College of Georgia, and an established legal and contracting base — each with software needs that off-the-shelf SaaS does not solve cleanly.
                        </p>
                        <p>
                            Most generalist agencies in the southeast cannot credibly speak to penetration testing methodology. We can. Active Directory abuse paths, lateral movement, ADCS certificate abuse, Kerberoasting, wireless attacks, web app exploitation — that is in-house capability, not a subcontracted line item. And every line of software we ship is reviewed against the same threat models we use on offensive engagements. For Augusta organizations selling into federal primes or running compliance audits, that combination is the entire pitch.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for Augusta clients</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Local proof of work</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Our pen testing track record includes a full <Link href="/work/active-directory-pentest" className="text-sky-400 hover:underline">Active Directory engagement for a regional financial services firm</Link> — an end-to-end internal assessment running eleven attack modules, every finding mapped to a MITRE ATT&amp;CK technique, full attack chain from standard user to Domain Admin documented with screenshots and timestamps. The client passed their compliance audit on the first attempt and has since engaged us for follow-up testing on a six-month cadence. That is the same methodology applied to every Augusta-region engagement, whether the buyer is a federal prime supplier, a cleared contractor, or a hospital-adjacent SaaS vendor.
                        </p>
                        <p>
                            QUANT LAB USA is Georgia-based and Georgia-staffed. We are a short drive up I-20. Our broader client portfolio includes deployed sites and platforms for Inked Artistry, Aaron Coleman Music, and <Link href="/work/protectwithbri" className="text-sky-400 hover:underline">ProtectWithBri</Link> — production work that demonstrates we ship.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Georgia-based and Georgia-staffed — short drive up I-20",
                            "In-house offensive security capability (AD abuse paths, wireless, ADCS, web app)",
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work with Augusta teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Pen testing engagements run from a secure remote infrastructure with strict source IP allowlisting and authenticated client-side VPN tunnels for internal scope. Scoping is always on-call or in person — we will drive to Augusta for sensitive scoping discussions and for internal pen tests requiring on-site network access. Reports are delivered in two formats: a technical deliverable with reproduction steps and remediation detail for the security team, and a board-readable executive summary with a prioritized remediation roadmap. Custom software builds follow the same model as our Macon and Atlanta work — fixed-scope, fixed-price, weekly Friday staging URL, full handover of code and accounts at the end. Most Augusta engagements close inside 4–6 weeks from kickoff to final report.
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
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, network, wireless, and AD engagements." },
                            { href: "/services/active-directory-pentest", title: "Active Directory Pen Test", desc: "Kerberoasting, ADCS abuse, lateral movement." },
                            { href: "/services/mitre-attack-assessment", title: "MITRE ATT&CK Assessment", desc: "Full attack-chain mapping and reporting." },
                            { href: "/services/network-pentest", title: "Network Penetration Testing", desc: "Internal and external network engagements." },
                            { href: "/services/web-app-pentest", title: "Web Application Pen Test", desc: "OWASP-aligned web app testing." },
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "CRMs and operations dashboards." },
                            { href: "/work/active-directory-pentest", title: "Case Study: AD Pen Test", desc: "Financial services firm — domain admin demonstrated." },
                            { href: "/blog/best-penetration-testing-companies-georgia-2026", title: "Best GA Pen Test Firms 2026", desc: "Comparison guide for Georgia buyers." },
                            { href: "/blog/penetration-test-cost-2026", title: "Penetration Test Cost 2026", desc: "Pricing benchmarks and scope drivers." },
                            { href: "/software-development-atlanta-ga", title: "Atlanta, GA", desc: "Fintech, logistics, and SaaS." },
                            { href: "/software-development-macon-ga", title: "Macon, GA", desc: "Our HQ — Middle Georgia coverage." },
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
                            Scope an Augusta engagement.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or email <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a> to discuss Augusta engagements.
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
