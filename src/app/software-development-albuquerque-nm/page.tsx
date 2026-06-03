import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { RelatedIndustries } from "@/components/RelatedIndustries";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Albuquerque Software Development & Pen Testing | QUANT LAB USA",
    description:
        "Albuquerque NM custom software and pen testing for the national-labs ecosystem, aerospace, and UNM research spinouts. Founder-led. Call (770) 652-1282.",
    slug: "software-development-albuquerque-nm",
    image: "/og-image.png",
    type: "article",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-albuquerque-nm#localbusiness",
    name: "QUANT LAB USA — Albuquerque Coverage",
    url: "https://quantlabusa.dev/software-development-albuquerque-nm",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Albuquerque", containedInPlace: { "@type": "State", name: "New Mexico" } },
        { "@type": "City", name: "Rio Rancho" },
        { "@type": "City", name: "Santa Fe" },
        { "@type": "City", name: "Los Lunas" },
        { "@type": "City", name: "Bernalillo" },
        { "@type": "City", name: "Los Alamos" },
        { "@type": "AdministrativeArea", name: "Bernalillo County" },
        { "@type": "AdministrativeArea", name: "Sandoval County" },
        { "@type": "AdministrativeArea", name: "Central New Mexico" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 35.0844, longitude: -106.6504 },
    address: { "@type": "PostalAddress", addressLocality: "Albuquerque", addressRegion: "NM", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Cybersecurity",
    name: "Custom Software Development & Cybersecurity in Albuquerque, NM",
    provider: { "@id": "https://quantlabusa.dev/#organization" },
    areaServed: { "@type": "City", name: "Albuquerque", containedInPlace: { "@type": "State", name: "New Mexico" } },
    description:
        "Penetration testing, lab-vendor tooling, and research-spinout platforms for Albuquerque's national-labs and aerospace ecosystem, rooted in MITRE ATT&CK methodology.",
    url: "https://quantlabusa.dev/software-development-albuquerque-nm",
};

const services = [
    {
        title: "Custom Software for Lab & Defense Vendors",
        desc: "Scoped per requirement — most are unclassified work for contractors serving Sandia, Kirtland, and the national-labs ecosystem. Typical: $25k–$120k.",
    },
    {
        title: "Penetration Testing (Web, Network, AD)",
        desc: "Full red-team-style engagements with formal reports for compliance and supply-chain security reviews. Typical: $8k–$28k.",
    },
    {
        title: "MITRE ATT&CK Assessments",
        desc: "Attack-chain documentation mapped to MITRE techniques for executive and security teams. Typical: $12k–$35k.",
    },
    {
        title: "Research & Spinout Platforms",
        desc: "Data tooling, instrument dashboards, and SaaS MVPs for UNM and Sandia Science & Technology Park spinouts. Typical: $30k–$120k.",
    },
    {
        title: "Active Directory Hardening",
        desc: "Post-test remediation, GPO review, ADCS reconfiguration, and credential-spray mitigation. Typical: $6k–$20k.",
    },
    {
        title: "Custom CRMs & Operations Dashboards",
        desc: "Purpose-built tooling for services, healthcare, and distribution firms across the metro. Typical: $20k–$70k.",
    },
];

const faqs = [
    {
        q: "Do you hold security clearances?",
        a: "Clearance status is discussed under NDA, not on a public page. Ask us directly when you scope your engagement.",
    },
    {
        q: "Do you build software for national-lab and defense vendors?",
        a: "Yes — most of our defense-adjacent work is unclassified support for contractors serving Sandia National Laboratories, Kirtland Air Force Base, and the broader national-labs ecosystem. Cleared environments are scoped case-by-case.",
    },
    {
        q: "Can you produce a pen test report I can hand to a prime or a lab?",
        a: "Yes — our reports are formatted for compliance and supply-chain review, with technical detail for security teams and an executive summary for leadership. Every finding is mapped to a MITRE ATT&CK technique ID.",
    },
    {
        q: "Do you help UNM and Sandia park spinouts?",
        a: "Yes — we build data tooling, instrument dashboards, and SaaS MVPs for University of New Mexico and Sandia Science & Technology Park spinouts, with a fixed-scope path from prototype to a fundable product.",
    },
    {
        q: "What pen testing methodology do you use?",
        a: "Our framework is MITRE ATT&CK end-to-end. We run eleven attack modules covering recon, credential spraying, Kerberoasting, ADCS abuse, lateral movement, and C2 infrastructure, with every finding mapped to a technique ID.",
    },
    {
        q: "Can you fly in for kickoffs and on-site testing?",
        a: "Yes — for engagements above roughly $25k we fly into ABQ for an on-site kickoff, and internal pen tests requiring on-site network access are scheduled on-site for the active window. Downtown Albuquerque, Rio Rancho, and Santa Fe are all reachable.",
    },
    {
        q: "How does the time zone work with your Georgia HQ?",
        a: "Albuquerque is on Mountain Time, two hours behind Georgia HQ. Our early afternoon and your late morning overlap cleanly for standups and design reviews, and we plan async handoffs around the window.",
    },
    {
        q: "What is a typical timeline for an Albuquerque engagement?",
        a: "A standalone external pen test runs 2–3 weeks including reporting. A full internal-plus-external with AD scope runs 4–6 weeks. Custom software follows separate scoping, typically 4–6 months for a meaningful build.",
    },
];

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://quantlabusa.dev/services" },
        { "@type": "ListItem", position: 3, name: "Software Development Albuquerque, NM", item: "https://quantlabusa.dev/software-development-albuquerque-nm" },
    ],
};

export default function AlbuquerqueLandingPage() {
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
                        <li className="text-gray-300">Albuquerque, NM</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development & Cybersecurity in Albuquerque, NM
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Albuquerque sits next to one of the densest concentrations of scientific and defense research in the country. Sandia National Laboratories, Kirtland Air Force Base, and the gravitational pull of Los Alamos make this a region that expects vendors who genuinely understand security.
                    </p>
                    <ConsultationCTA label="Discuss an Albuquerque Engagement" city="Albuquerque, NM" source="city-albuquerque" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA combines custom software engineering with hands-on penetration testing rooted in the MITRE ATT&amp;CK framework — not just selling development hours. Albuquerque&apos;s buyers, surrounded by national-lab security culture, expect their vendors to speak fluent attacker. We do.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Albuquerque organizations choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Albuquerque&apos;s economy is anchored by science and defense. Sandia National Laboratories — one of the nation&apos;s premier research labs — sits on Kirtland Air Force Base, and together they support a vast ecosystem of contractors, suppliers, and spinouts. Los Alamos National Laboratory is a short drive north near Santa Fe, deepening the regional research pull. The University of New Mexico and its health sciences center add a major research-university layer, and the Sandia Science &amp; Technology Park hosts technology firms commercializing lab-born innovation. The metro has also drawn a growing film-production base, with Netflix and NBCUniversal studios at Mesa del Sol, alongside an Intel manufacturing presence in Rio Rancho and a steady services, healthcare, and distribution mid-market.
                        </p>
                        <p>
                            Most generalist agencies cannot credibly speak to penetration testing methodology. We can. Active Directory abuse paths, lateral movement, ADCS certificate abuse, Kerberoasting, wireless attacks, and web app exploitation are in-house capability, not a subcontracted line item — and every line of software we ship is reviewed against the same threat models we use on offensive engagements. For Albuquerque organizations serving the labs, running compliance audits, or commercializing research, that combination is the entire pitch.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for Albuquerque clients</h2>
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
                            Our pen testing track record includes a full Active Directory engagement for a regional financial services firm — an end-to-end internal assessment running eleven attack modules, every finding mapped to a MITRE ATT&amp;CK technique, with the full attack chain from standard user to Domain Admin documented in screenshots and timestamps. The client passed their compliance audit on the first attempt and re-engaged us on a six-month cadence. That is the same methodology we apply to every Albuquerque engagement, whether the buyer is a lab contractor, a defense supplier, or a research spinout.
                        </p>
                        <p>
                            QUANT LAB USA is founder-led and accountable end-to-end. We ship production web and SaaS applications on a modern Next.js, TypeScript, PostgreSQL, and Docker stack, and we keep our proof generic with references available under NDA — we do not name-drop clients who did not sign up to be a marketing line.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Founder-led and accountable end-to-end",
                            "In-house offensive security capability (AD abuse paths, wireless, ADCS, web app)",
                            "Reports formatted for prime-contractor and lab supply-chain review",
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work remotely with Albuquerque teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Albuquerque runs on Mountain Time, two hours behind Georgia HQ, so our early afternoon and your late morning overlap cleanly for standups and design reviews. Pen testing runs from a secure remote infrastructure with strict source IP allowlisting and authenticated client-side VPN tunnels for internal scope — and we fly into ABQ for sensitive scoping discussions and internal pen tests requiring on-site network access. Reports are delivered in two formats: a technical deliverable with reproduction steps and remediation detail for the security team, and a board-readable executive summary with a prioritized roadmap. Custom software builds are fixed-scope and fixed-price, with a weekly Friday staging URL and full handover of code and accounts at the end. Most Albuquerque engagements close inside 4–6 weeks from kickoff to final report.
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
                        industries={["saas","fintech","healthcare","manufacturing"]}
                        heading="Industries we serve in Albuquerque"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["pentest","compliance"]}
                        pinned={["what-is-penetration-testing","soc2-pentest-prep-guide-2026","penetration-test-cost-2026"]}
                        heading="Reading for Albuquerque founders"
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
                            { href: "/services/saas-platform-development", title: "SaaS Platform Development", desc: "Spinout MVPs and multi-tenant platforms." },
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "Lab-vendor tooling and ops dashboards." },
                            { href: "/blog/what-is-penetration-testing", title: "What Is Penetration Testing?", desc: "Founder's buyer guide to pen tests." },
                            { href: "/blog/soc2-pentest-prep-guide-2026", title: "SOC 2 Pentest Prep 2026", desc: "Pre-audit testing mapped to CC controls." },
                            { href: "/software-development-phoenix-az", title: "Phoenix, AZ", desc: "Semiconductors, fintech, and aerospace." },
                            { href: "/software-development-denver-co", title: "Denver, CO", desc: "Aerospace, cannabis-tech, and SaaS." },
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
                            Scope an Albuquerque engagement.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or email <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a> to discuss Albuquerque engagements.
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
