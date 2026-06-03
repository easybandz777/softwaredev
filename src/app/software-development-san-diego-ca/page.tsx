import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { RelatedIndustries } from "@/components/RelatedIndustries";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "San Diego Software Development & Pen Testing | QUANT LAB USA",
    description:
        "San Diego custom software and penetration testing for biotech, defense, and cybersecurity firms. Founder-led, MITRE ATT&CK-aligned. Call (770) 652-1282.",
    slug: "software-development-san-diego-ca",
    image: "/og-image.png",
    type: "article",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-san-diego-ca#localbusiness",
    name: "QUANT LAB USA — San Diego Coverage",
    url: "https://quantlabusa.dev/software-development-san-diego-ca",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "San Diego", containedInPlace: { "@type": "State", name: "California" } },
        { "@type": "City", name: "La Jolla" },
        { "@type": "City", name: "Carlsbad" },
        { "@type": "City", name: "Sorrento Valley" },
        { "@type": "City", name: "Chula Vista" },
        { "@type": "City", name: "Escondido" },
        { "@type": "City", name: "Oceanside" },
        { "@type": "AdministrativeArea", name: "San Diego County" },
        { "@type": "AdministrativeArea", name: "North County" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 32.7157, longitude: -117.1611 },
    address: { "@type": "PostalAddress", addressLocality: "San Diego", addressRegion: "CA", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Penetration Testing",
    name: "Custom Software Development & Penetration Testing in San Diego, CA",
    provider: { "@id": "https://quantlabusa.dev/#organization" },
    areaServed: { "@type": "City", name: "San Diego", containedInPlace: { "@type": "State", name: "California" } },
    description:
        "Custom software, research and lab tooling, and MITRE-aligned penetration testing for San Diego biotech, defense, and cybersecurity companies.",
    url: "https://quantlabusa.dev/software-development-san-diego-ca",
};

const services = [
    {
        title: "Biotech & Lab Operations Tooling",
        desc: "Sample tracking, LIMS-adjacent workflows, and research-ops dashboards for the Torrey Pines and Sorrento Valley cluster. Typical: $25k–$90k.",
    },
    {
        title: "Penetration Testing (Web, Network, AD)",
        desc: "Full engagements with formal MITRE-ATT&CK-aligned reports for compliance and customer security reviews. Typical: $12k–$40k.",
    },
    {
        title: "MITRE ATT&CK Assessments",
        desc: "Attack-chain documentation mapped to MITRE techniques for executive and security teams. Typical: $12k–$35k.",
    },
    {
        title: "Custom Software for Defense-Adjacent Vendors",
        desc: "Scoped per requirement — most are unclassified ops, supplier, and data tooling for the San Diego defense base. Typical: $25k–$120k.",
    },
    {
        title: "Custom CRMs & Operations Dashboards",
        desc: "Purpose-built tooling for life-science, device, and contracting firms across San Diego County. Typical: $20k–$70k.",
    },
    {
        title: "Stripe & Licensing Systems",
        desc: "Subscription products and software licensing infrastructure for local SaaS and device founders. Typical: $8k–$28k.",
    },
];

const faqs = [
    {
        q: "Do you build software for biotech and life-science companies?",
        a: "Yes — sample tracking, lab-ops dashboards, LIMS-adjacent workflows, and research data tooling are common San Diego builds. Anything touching regulated data is scoped with the right controls from the start.",
    },
    {
        q: "Can you support the San Diego defense and naval base?",
        a: "Yes — most of our defense-adjacent work is unclassified ops, supplier, and data tooling. Anything touching cleared or controlled environments is scoped case-by-case under NDA.",
    },
    {
        q: "Can you produce a pen test report I can hand to a customer or auditor?",
        a: "Yes — our reports are formatted for compliance and supply-chain review, with technical detail for security teams and an executive summary for leadership.",
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
        a: "Yes — CCPA, CPRA, and the broader California consumer-data framework are standard considerations in our San Diego builds. We wire consent surfaces and data-rights flows in at build time.",
    },
    {
        q: "Can you fly in for kickoffs across San Diego County?",
        a: "For engagements above roughly $25k, yes — SAN is a direct flight from Atlanta. We plan on-site afternoons in Sorrento Valley, La Jolla, Carlsbad, or downtown as scope warrants.",
    },
    {
        q: "What is a typical timeline for a San Diego engagement?",
        a: "A standalone external pen test runs 2–3 weeks including reporting. A full internal-plus-external with AD scope runs 4–6 weeks. Custom software follows separate fixed-scope scoping.",
    },
];

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://quantlabusa.dev/services" },
        { "@type": "ListItem", position: 3, name: "Software Development San Diego, CA", item: "https://quantlabusa.dev/software-development-san-diego-ca" },
    ],
};

export default function SanDiegoLandingPage() {
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
                        <li className="text-gray-300">San Diego, CA</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development & Penetration Testing in San Diego, CA
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        San Diego pairs one of the largest life-science clusters in the country with a deep defense and naval presence and a maturing cybersecurity scene. All three buy software that off-the-shelf SaaS does not cover, and all three care who they let near their systems.
                    </p>
                    <ConsultationCTA label="Scope a San Diego Engagement" city="San Diego, CA" source="city-san-diego" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA combines custom software engineering with hands-on penetration testing rooted in the MITRE ATT&amp;CK framework — not just selling development hours. San Diego buyers expect their vendors to understand both clean engineering and how systems actually get attacked, and we do.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why San Diego organizations choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            San Diego is unusual in carrying three serious software-buying ecosystems at once. The life-science cluster around Torrey Pines, La Jolla, and Sorrento Valley — anchored by the research institutes, a dense biotech and medical-device base, and the labs feeding them — needs sample tracking, lab-ops dashboards, LIMS-adjacent workflows, and research data tooling that generic products handle badly. The defense and naval presence, with Naval Base San Diego, a large contractor base, and the broader maritime-tech ecosystem, generates demand for unclassified ops, supplier, and data tooling. And the city&apos;s cybersecurity scene continues to mature, which means security-aware buyers who want a vendor that speaks attacker fluently.
                        </p>
                        <p>
                            Most generalist agencies cannot credibly speak to penetration testing methodology. We can. Active Directory abuse paths, lateral movement, ADCS certificate abuse, Kerberoasting, and web app exploitation are in-house capability, not a subcontracted line item — and every line of software we ship is reviewed against the same threat models we use on offensive engagements. For a San Diego biotech protecting research data, a defense supplier passing a security review, or a device founder under audit, that combination is the entire pitch.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for San Diego clients</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work remotely with San Diego teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            San Diego sits three hours behind our Eastern HQ — we work your morning. Our late morning is your early morning and our late afternoon is your mid-morning, so there is a clean overlap window for standups and reviews; we run standups at 11am ET / 8am PT routinely. For engagements above roughly $25k we fly into SAN for an on-site kickoff afternoon — Sorrento Valley, La Jolla, Carlsbad, or downtown as scope warrants. Pen testing engagements run from a secure remote infrastructure with strict source-IP allowlisting and authenticated client-side VPN tunnels for internal scope. Reports are delivered in two formats: a technical deliverable with reproduction steps and remediation detail for the security team, and a board-readable executive summary with a prioritized roadmap. Custom software builds are fixed-scope and fixed-price, with a weekly Friday staging URL and full handover of code and accounts at acceptance. Most San Diego engagements close inside 4–6 weeks from kickoff to final report.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Biotech, defense-adjacent, and cyber software — real, in-house",
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
                        industries={["healthcare","fintech","saas","manufacturing"]}
                        heading="Industries we serve in San Diego"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["pentest","compliance","saas"]}
                        pinned={["what-is-penetration-testing","soc2-pentest-prep-guide-2026","penetration-test-cost-2026"]}
                        heading="Reading for San Diego founders"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services & nearby cities</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, network, and AD engagements." },
                            { href: "/services/mitre-attack-assessment", title: "MITRE ATT&CK Assessment", desc: "Full attack-chain mapping and reporting." },
                            { href: "/services/active-directory-pentest", title: "Active Directory Pen Test", desc: "Kerberoasting, ADCS, lateral movement." },
                            { href: "/services/network-pentest", title: "Network Penetration Testing", desc: "Internal and external network engagements." },
                            { href: "/services/web-app-pentest", title: "Web App Pen Test", desc: "OWASP-aligned web app testing." },
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "Lab-ops dashboards and CRMs." },
                            { href: "/services/custom-crm-development", title: "Custom CRM Development", desc: "Own your CRM — don&apos;t rent it." },
                            { href: "/services/stripe-integration", title: "Stripe Integration", desc: "Subscriptions and licensing." },
                            { href: "/blog/what-is-penetration-testing", title: "What Is Penetration Testing?", desc: "A founder's buyer guide." },
                            { href: "/software-development-los-angeles-ca", title: "Los Angeles, CA", desc: "Media, entertainment-tech, aerospace." },
                            { href: "/software-development-san-jose-ca", title: "San Jose, CA", desc: "Silicon Valley hardware and SaaS." },
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
                            Scope a San Diego engagement.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or email <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a> to discuss San Diego engagements.
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
