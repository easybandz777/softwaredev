import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { RelatedIndustries } from "@/components/RelatedIndustries";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "San Antonio Software Development & Pen Testing | QUANT LAB USA",
    description:
        "San Antonio TX custom software and penetration testing for Cyber City USA — military cyber, healthcare, and biosciences. Founder-led. Call (770) 652-1282.",
    slug: "software-development-san-antonio-tx",
    image: "/og-image.png",
    type: "article",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-san-antonio-tx#localbusiness",
    name: "QUANT LAB USA — San Antonio Coverage",
    url: "https://quantlabusa.dev/software-development-san-antonio-tx",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "San Antonio", containedInPlace: { "@type": "State", name: "Texas" } },
        { "@type": "City", name: "New Braunfels" },
        { "@type": "City", name: "Schertz" },
        { "@type": "City", name: "Boerne" },
        { "@type": "City", name: "Converse" },
        { "@type": "City", name: "Seguin" },
        { "@type": "AdministrativeArea", name: "Bexar County" },
        { "@type": "AdministrativeArea", name: "Comal County" },
        { "@type": "AdministrativeArea", name: "Guadalupe County" },
        { "@type": "AdministrativeArea", name: "Greater San Antonio" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 29.4241, longitude: -98.4936 },
    address: { "@type": "PostalAddress", addressLocality: "San Antonio", addressRegion: "TX", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Cybersecurity",
    name: "Custom Software Development & Cybersecurity in San Antonio, TX",
    provider: { "@id": "https://quantlabusa.dev/#organization" },
    areaServed: { "@type": "City", name: "San Antonio", containedInPlace: { "@type": "State", name: "Texas" } },
    description:
        "Penetration testing and custom software for San Antonio's cyber, military, healthcare, and biosciences ecosystem, rooted in MITRE ATT&CK methodology.",
    url: "https://quantlabusa.dev/software-development-san-antonio-tx",
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
        title: "Active Directory Hardening",
        desc: "Post-test remediation, GPO review, ADCS reconfiguration, and credential-spray mitigation. Typical: $6k–$20k.",
    },
    {
        title: "Healthcare & Biosciences Platforms",
        desc: "HIPAA-aware intake, research data tooling, and ops dashboards for the South Texas Medical Center and biosciences corridor. Typical: $25k–$90k.",
    },
    {
        title: "Custom CRMs & Operations Dashboards",
        desc: "Purpose-built tooling for services firms, tourism operators, and distributors across Bexar County. Typical: $20k–$70k.",
    },
    {
        title: "Custom Software for Defense-Adjacent Vendors",
        desc: "Scoped per requirement — most are unclassified work for vendors in the military-cyber ecosystem. Typical: $25k–$120k.",
    },
];

const faqs = [
    {
        q: "Do you hold security clearances?",
        a: "Clearance status is discussed under NDA, not on a public page. Ask us directly when you scope your engagement.",
    },
    {
        q: "Why is San Antonio such a strong fit for a security-first software firm?",
        a: "San Antonio is one of the largest cybersecurity hubs in the country outside Washington, with the 16th Air Force at Lackland, the NSA Texas presence, and a dense base of cyber contractors. Buyers here expect a vendor who speaks fluent attacker — which is exactly how we build and test.",
    },
    {
        q: "Can you produce a pen test report I can hand to a prime contractor?",
        a: "Yes — our reports are formatted for compliance and supply-chain review, with technical detail for security teams and an executive summary for leadership. Every finding is mapped to a MITRE ATT&CK technique ID.",
    },
    {
        q: "Do you build HIPAA-aware healthcare software?",
        a: "Yes — for the South Texas Medical Center and biosciences corridor we build HIPAA-aware intake, scheduling, research data tooling, and ops platforms on BAA-eligible cloud with encrypted data flows and audit-friendly logging.",
    },
    {
        q: "What pen testing methodology do you use?",
        a: "Our framework is MITRE ATT&CK end-to-end. We run eleven attack modules covering recon, credential spraying, Kerberoasting, ADCS abuse, lateral movement, and C2 infrastructure, with every finding mapped to a technique ID.",
    },
    {
        q: "Can you fly in for kickoffs and on-site testing?",
        a: "Yes — for engagements above roughly $25k we fly into SAT for an on-site kickoff, and internal pen tests requiring on-site network access are scheduled on-site for the active testing window. Downtown, the Medical Center, Schertz, and New Braunfels are all easy to reach.",
    },
    {
        q: "What is a typical timeline for a San Antonio engagement?",
        a: "A standalone external pen test runs 2–3 weeks including reporting. A full internal-plus-external with AD scope runs 4–6 weeks. Custom software follows separate scoping, typically 4–6 months for a meaningful build.",
    },
    {
        q: "Do you follow up after remediation?",
        a: "Yes — most engagements include one round of retest on remediated findings within 60 days of the initial report at no additional charge.",
    },
];

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://quantlabusa.dev/services" },
        { "@type": "ListItem", position: 3, name: "Software Development San Antonio, TX", item: "https://quantlabusa.dev/software-development-san-antonio-tx" },
    ],
};

export default function SanAntonioLandingPage() {
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
                        <li className="text-gray-300">San Antonio, TX</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development & Cybersecurity in San Antonio, TX
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        San Antonio is &quot;Cyber City USA&quot; — one of the largest concentrations of cybersecurity talent in the country, anchored by the 16th Air Force at Lackland and an NSA presence that pulls in contractors by the hundred. This region expects software vendors who genuinely understand offensive security.
                    </p>
                    <ConsultationCTA label="Discuss a San Antonio Engagement" city="San Antonio, TX" source="city-san-antonio" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA combines custom software engineering with hands-on penetration testing rooted in the MITRE ATT&amp;CK framework — not just selling development hours. San Antonio&apos;s buyers expect their vendors to speak fluent attacker, and we do.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why San Antonio organizations choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            San Antonio runs on cyber, medicine, and military logistics. Joint Base San Antonio — Lackland, Fort Sam Houston, and Randolph — is the center of gravity, hosting the 16th Air Force (Air Forces Cyber), the NSA Texas operation, and the Brooke Army Medical Center. Around that core sits one of the densest cyber-contractor ecosystems in the nation, plus the University of Texas at San Antonio, whose National Security Collaboration Center and cyber programs feed a steady stream of talent. The South Texas Medical Center is the region&apos;s second economic engine, and the biosciences corridor, USAA&apos;s massive insurance and financial operation, and a thriving tourism economy around the River Walk fill out a deep and varied mid-market.
                        </p>
                        <p>
                            Most generalist agencies cannot credibly speak to penetration testing methodology. We can. Active Directory abuse paths, lateral movement, ADCS certificate abuse, Kerberoasting, wireless attacks, and web app exploitation are in-house capability, not a subcontracted line item — and every line of software we ship is reviewed against the same threat models we use on offensive engagements. For San Antonio organizations selling into primes or running compliance audits, that combination is the entire pitch.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for San Antonio clients</h2>
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
                            Our pen testing track record includes a full Active Directory engagement for a regional financial services firm — an end-to-end internal assessment running eleven attack modules, every finding mapped to a MITRE ATT&amp;CK technique, with the full attack chain from standard user to Domain Admin documented in screenshots and timestamps. The client passed their compliance audit on the first attempt and re-engaged us on a six-month cadence. That is the same methodology we apply to every San Antonio engagement, whether the buyer is a cyber contractor, a Medical Center practice, or an insurance-sector SaaS vendor.
                        </p>
                        <p>
                            QUANT LAB USA is founder-led and accountable end-to-end. We ship production web and SaaS applications on a modern Next.js, TypeScript, PostgreSQL, and Docker stack, and we keep our proof generic with references available under NDA — we do not name-drop clients who did not sign up to be a marketing line.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Founder-led and accountable end-to-end",
                            "In-house offensive security capability (AD abuse paths, wireless, ADCS, web app)",
                            "Reports formatted for prime-contractor supply-chain review",
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work remotely with San Antonio teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            San Antonio is one hour behind Georgia HQ, so our morning and your late morning overlap completely for standups and design reviews. Pen testing runs from a secure remote infrastructure with strict source IP allowlisting and authenticated client-side VPN tunnels for internal scope — and we fly into SAT for sensitive scoping discussions and for internal pen tests requiring on-site network access. Reports are delivered in two formats: a technical deliverable with reproduction steps and remediation detail for the security team, and a board-readable executive summary with a prioritized roadmap. Custom software builds are fixed-scope and fixed-price, with a weekly Friday staging URL and full handover of code and accounts at the end. Most San Antonio engagements close inside 4–6 weeks from kickoff to final report.
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
                        industries={["fintech","healthcare","saas","insurance"]}
                        heading="Industries we serve in San Antonio"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["pentest","compliance"]}
                        pinned={["what-is-penetration-testing","soc2-pentest-prep-guide-2026","penetration-test-cost-2026"]}
                        heading="Reading for San Antonio founders"
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
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "CRMs and operations dashboards." },
                            { href: "/blog/what-is-penetration-testing", title: "What Is Penetration Testing?", desc: "Founder's buyer guide to pen tests." },
                            { href: "/blog/soc2-pentest-prep-guide-2026", title: "SOC 2 Pentest Prep 2026", desc: "Pre-audit testing mapped to CC controls." },
                            { href: "/software-development-houston-tx", title: "Houston, TX", desc: "Energy, medical, and logistics." },
                            { href: "/software-development-el-paso-tx", title: "El Paso, TX", desc: "Border logistics and manufacturing." },
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
                            Scope a San Antonio engagement.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or email <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a> to discuss San Antonio engagements.
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
