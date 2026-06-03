import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { RelatedIndustries } from "@/components/RelatedIndustries";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Minneapolis Software Development & Pen Testing | QUANT LAB USA",
    description:
        "Minneapolis custom software for medtech, retail, and Fortune-500 vendors — ops dashboards, custom CRMs, Stripe billing, and pen testing. Call (770) 652-1282.",
    slug: "software-development-minneapolis-mn",
    image: "/og-image.png",
    type: "article",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-minneapolis-mn#localbusiness",
    name: "QUANT LAB USA — Minneapolis Coverage",
    url: "https://quantlabusa.dev/software-development-minneapolis-mn",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Minneapolis", containedInPlace: { "@type": "State", name: "Minnesota" } },
        { "@type": "City", name: "Saint Paul" },
        { "@type": "City", name: "Bloomington" },
        { "@type": "City", name: "Plymouth" },
        { "@type": "City", name: "Eden Prairie" },
        { "@type": "AdministrativeArea", name: "Hennepin County" },
        { "@type": "AdministrativeArea", name: "Ramsey County" },
        { "@type": "AdministrativeArea", name: "Twin Cities" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 44.9778, longitude: -93.2650 },
    address: { "@type": "PostalAddress", addressLocality: "Minneapolis", addressRegion: "MN", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Cybersecurity",
    name: "Custom Software Development & Cybersecurity in Minneapolis, MN",
    provider: { "@id": "https://quantlabusa.dev/#organization" },
    areaServed: { "@type": "City", name: "Minneapolis", containedInPlace: { "@type": "State", name: "Minnesota" } },
    description:
        "Medtech and retail software, custom CRMs, Fortune-500 vendor tooling, Stripe billing, and MITRE ATT&CK penetration testing for the Twin Cities.",
    url: "https://quantlabusa.dev/software-development-minneapolis-mn",
};

const services = [
    {
        title: "Medtech & HIPAA-Aware Platforms",
        desc: "Device-adjacent software, patient and clinical workflows, and operations tooling for the Twin Cities medical-device cluster. PHI flows scoped under BAA. Typical: $25k–$100k.",
    },
    {
        title: "Retail & Supply-Chain Dashboards",
        desc: "Merchandising, fulfillment, and supply-chain visibility tooling for retail and consumer-brand operators. Typical: $25k–$90k.",
    },
    {
        title: "Custom CRMs & Operations Dashboards",
        desc: "Purpose-built tooling for agencies, distributors, and service firms across Hennepin and Ramsey counties. Typical: $20k–$70k.",
    },
    {
        title: "Penetration Testing (Web, Network, AD)",
        desc: "Full-scope engagements with formal reports for SOC 2, HIPAA, and Fortune-500 vendor security reviews. Typical: $10k–$35k.",
    },
    {
        title: "Vendor & Integration Tooling for Enterprise",
        desc: "Software for firms that sell into the deep Twin Cities Fortune-500 base, including hardened integrations and reporting. Typical: $25k–$100k.",
    },
    {
        title: "Stripe & Subscription Billing",
        desc: "Subscription products, metered usage, and software licensing infrastructure for local SaaS founders. Typical: $8k–$28k.",
    },
];

const faqs = [
    {
        q: "Do you build medtech and healthcare software?",
        a: "Yes — the Twin Cities are a global medical-device hub, and device-adjacent software, clinical workflows, and operations tooling are core work for us. We architect on BAA-eligible cloud, keep PHI flows encrypted and audit-logged, and scope any PHI-touching component carefully alongside your compliance team.",
    },
    {
        q: "Can you produce a pen test report for a SOC 2 or enterprise vendor review?",
        a: "Yes — our reports are formatted to drop straight into audit binders and vendor-security questionnaires, with technical reproduction steps for engineers and an executive summary with a prioritized remediation roadmap for leadership. Every finding is mapped to a MITRE ATT&CK technique.",
    },
    {
        q: "We sell into the big Minneapolis Fortune-500 companies. Can you help us pass their security reviews?",
        a: "Yes — that is one of our most common engagements. We pen test your platform against the same questions enterprise procurement asks, hand you a report you can attach to the questionnaire, and remediate the findings so the deal does not stall.",
    },
    {
        q: "Do you build retail and supply-chain software?",
        a: "Yes — the Twin Cities have a deep retail and consumer-brand base, and merchandising, fulfillment, and supply-chain visibility dashboards are recurring work. We integrate with the ERP and POS systems you already run rather than replacing them.",
    },
    {
        q: "Are you local to Minneapolis, or remote?",
        a: "We are headquartered in Macon, Georgia and work remote-first across the United States. For engagements above roughly $25k we travel to the Twin Cities for an on-site kickoff and for internal pen tests that require physical network access — downtown, Bloomington, and the western suburbs are all easy from MSP.",
    },
    {
        q: "What is your timezone overlap with the Twin Cities?",
        a: "Minneapolis runs on Central Time, one hour behind our Georgia headquarters, so our morning and your late morning overlap completely for standups, and your mid-afternoon overlaps with our late afternoon for reviews.",
    },
    {
        q: "What is a typical timeline for a Minneapolis engagement?",
        a: "A standalone external pen test runs two to three weeks including reporting. A custom CRM or medtech tool typically runs eight to fourteen weeks depending on integrations. We give a fixed scope and fixed price before any work begins.",
    },
    {
        q: "Do you follow up after remediation?",
        a: "Yes — most pen testing engagements include one round of retest on remediated findings within 60 days of the initial report at no additional charge.",
    },
];

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://quantlabusa.dev/services" },
        { "@type": "ListItem", position: 3, name: "Software Development Minneapolis, MN", item: "https://quantlabusa.dev/software-development-minneapolis-mn" },
    ],
};

export default function MinneapolisLandingPage() {
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
                        <li className="text-gray-300">Minneapolis, MN</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-violet-500 to-purple-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development & Cybersecurity in Minneapolis, MN
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        The Twin Cities hold one of the highest concentrations of Fortune-500 headquarters in the country, a global medical-device cluster, and a deep retail heritage. That mix generates serious demand for medtech platforms, retail operations tooling, and the software vendors that sell into big enterprise buyers.
                    </p>
                    <ConsultationCTA label="Talk Minneapolis Projects" city="Minneapolis, MN" source="city-minneapolis-mn" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA pairs custom software engineering with hands-on penetration testing rooted in the MITRE ATT&amp;CK framework — not just selling development hours. For a market where enterprise security reviews and medical-device compliance are routine, that combination fits unusually well.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Minneapolis organizations choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The Twin Cities are an enterprise town. The metro is home to one of the densest clusters of Fortune-500 headquarters anywhere — UnitedHealth Group, Target, Best Buy, 3M, U.S. Bancorp, General Mills, Ecolab, and Cargill among them — which means a vast ecosystem of vendors, suppliers, and service firms that have to clear enterprise-grade security reviews to win business. The medical-device industry is world-leading, with Medtronic and Boston Scientific operations anchoring a cluster of device makers and health-tech startups. Retail runs deep thanks to Target and Best Buy, and with it a supply-chain and merchandising-tech base. Add the financial-services presence around U.S. Bancorp and Ameriprise, and you have a market where custom platforms, vendor integrations, and security testing are constant needs.
                        </p>
                        <p>
                            Minneapolis has plenty of staffing firms and enterprise consultancies. What is harder to find is a founder-led shop that ships modern web applications, builds medtech and retail tooling, and runs credible offensive security engagements — all under one roof. That is what we offer. Active Directory abuse paths, lateral movement, ADCS certificate abuse, Kerberoasting, web app exploitation — that is in-house capability, not a subcontracted line item. And every line of software we ship is reviewed against the same threat models we use on offensive engagements.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for Minneapolis clients</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Portfolio note</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA is a founder-led shop with a track record of shipping production software and running full-scope security engagements. Our pen testing work includes an end-to-end internal Active Directory assessment for a regional financial-services firm — eleven attack modules, every finding mapped to a MITRE ATT&amp;CK technique, the full attack chain from standard user to Domain Admin documented with screenshots and timestamps. The client passed their compliance audit on the first attempt. That is the same methodology we apply to every Twin Cities engagement, whether the buyer is a medtech vendor, a retail operator, or a SaaS firm selling into the Fortune-500 base.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Founder-led — you work directly with the engineer building your system",
                            "HIPAA-aware architecture for medtech — BAA-eligible cloud",
                            "Reports formatted for enterprise vendor-security reviews",
                            "MITRE ATT&CK technique mapping on every finding",
                            "Modern Next.js / TypeScript / PostgreSQL / Docker stack",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work remotely with Minneapolis teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Minneapolis runs on Central Time, one hour behind our Macon, Georgia headquarters, which means our morning and your late morning overlap completely for standups, and your mid-afternoon overlaps with our late afternoon for reviews. Most engagements start with a 60-minute scope by video. For engagements above roughly $25k we travel to the Twin Cities for an on-site kickoff and for internal pen tests that require physical network access. Build cycles run weekly with a Friday staging URL, written notes, and the next-week plan. Pen test reports are delivered in two formats: a technical deliverable with reproduction steps and remediation detail for the security team, and a board-readable executive summary with a prioritized remediation roadmap. Fixed-scope, fixed-price proposals on most engagements; full code, database, and infrastructure handover at acceptance.
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
                        industries={["healthcare","e-commerce","saas","fintech"]}
                        heading="Industries we serve in Minneapolis"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["compliance","saas","pentest"]}
                        pinned={["soc2-pentest-prep-guide-2026","build-vs-buy-software-2026","what-is-penetration-testing"]}
                        heading="Reading for Minneapolis founders"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services & nearby cities</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "Medtech and retail ops tooling." },
                            { href: "/services/saas-platform-development", title: "SaaS Platform Development", desc: "Multi-tenant apps, billing, onboarding." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, network, and AD engagements." },
                            { href: "/services/web-app-pentest", title: "Web Application Pen Test", desc: "OWASP-aligned web app testing." },
                            { href: "/services/mitre-attack-assessment", title: "MITRE ATT&CK Assessment", desc: "Full attack-chain mapping and reporting." },
                            { href: "/services/custom-crm-development", title: "Custom CRM Development", desc: "Purpose-built CRMs for enterprise vendors." },
                            { href: "/blog/soc2-pentest-prep-guide-2026", title: "SOC 2 Pentest Prep 2026", desc: "Pre-audit testing mapped to CC controls." },
                            { href: "/blog/what-is-penetration-testing", title: "What Is Penetration Testing", desc: "A founder's buyer guide." },
                            { href: "/software-development-milwaukee-wi", title: "Milwaukee, WI", desc: "Manufacturing and water-tech software." },
                            { href: "/software-development-kansas-city-mo", title: "Kansas City, MO", desc: "Ag-tech, logistics, and health-IT." },
                            { href: "/industries/healthcare", title: "Healthcare Software", desc: "HIPAA-aware platforms and intake." },
                            { href: "/contact", title: "Start a Project", desc: "Scoping calls, fixed-quote proposals." },
                        ].map((s) => (
                            <Link
                                key={s.href}
                                href={s.href}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-violet-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-violet-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Talk Minneapolis projects.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or email <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a> to discuss Minneapolis engagements.
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
