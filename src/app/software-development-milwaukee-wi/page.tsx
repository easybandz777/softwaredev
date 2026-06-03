import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { RelatedIndustries } from "@/components/RelatedIndustries";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Milwaukee Software Development & Pen Testing | QUANT LAB USA",
    description:
        "Milwaukee custom software for manufacturing, finance, and water-tech — ops dashboards, custom CRMs, Stripe billing, and pen testing. Call (770) 652-1282.",
    slug: "software-development-milwaukee-wi",
    image: "/og-image.png",
    type: "article",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-milwaukee-wi#localbusiness",
    name: "QUANT LAB USA — Milwaukee Coverage",
    url: "https://quantlabusa.dev/software-development-milwaukee-wi",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Milwaukee", containedInPlace: { "@type": "State", name: "Wisconsin" } },
        { "@type": "City", name: "Wauwatosa" },
        { "@type": "City", name: "Brookfield" },
        { "@type": "City", name: "Waukesha" },
        { "@type": "City", name: "West Allis" },
        { "@type": "AdministrativeArea", name: "Milwaukee County" },
        { "@type": "AdministrativeArea", name: "Waukesha County" },
        { "@type": "AdministrativeArea", name: "Greater Milwaukee" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 43.0389, longitude: -87.9065 },
    address: { "@type": "PostalAddress", addressLocality: "Milwaukee", addressRegion: "WI", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Cybersecurity",
    name: "Custom Software Development & Cybersecurity in Milwaukee, WI",
    provider: { "@id": "https://quantlabusa.dev/#organization" },
    areaServed: { "@type": "City", name: "Milwaukee", containedInPlace: { "@type": "State", name: "Wisconsin" } },
    description:
        "Manufacturing and water-tech software, finance and insurance tooling, custom CRMs, Stripe billing, and MITRE ATT&CK penetration testing for Greater Milwaukee.",
    url: "https://quantlabusa.dev/software-development-milwaukee-wi",
};

const services = [
    {
        title: "Manufacturing & Industrial Ops Dashboards",
        desc: "Real-time visibility into production, jobs, inventory, and machine data for Milwaukee's deep industrial base. Typical: $25k–$90k.",
    },
    {
        title: "Water-Tech & IoT Platforms",
        desc: "Sensor-data ingestion, monitoring dashboards, and operations tooling for the Milwaukee Water Council ecosystem. Typical: $25k–$100k.",
    },
    {
        title: "Finance & Insurance Software",
        desc: "Back-office tooling, policy and claims systems, and reporting for the deep Milwaukee financial-services base. Typical: $25k–$90k.",
    },
    {
        title: "Penetration Testing (Web, Network, AD)",
        desc: "Full-scope engagements with formal reports for SOC 2 and customer security reviews. Typical: $10k–$35k.",
    },
    {
        title: "ERP & Systems Integration",
        desc: "Connecting legacy MES, ERP, and SCADA-adjacent systems with modern web apps through hardened, documented APIs. Typical: $15k–$60k.",
    },
    {
        title: "Stripe & Subscription Billing",
        desc: "Subscription products, metered usage, and software licensing infrastructure for local SaaS founders. Typical: $8k–$28k.",
    },
];

const faqs = [
    {
        q: "Do you build software for manufacturers?",
        a: "Yes — Milwaukee has one of the densest industrial bases in the country, and ops dashboards, inventory tooling, and MES/ERP integration are recurring work for us. We give you real-time visibility into jobs, machines, and inventory without ripping out the systems you already run.",
    },
    {
        q: "Do you build water-tech and IoT platforms?",
        a: "Yes — Milwaukee is a recognized global water-technology hub, and sensor-data ingestion, monitoring dashboards, and operations tooling are work we do well. We build the ingestion and visualization layer and integrate with the device and telemetry platforms you already use.",
    },
    {
        q: "Can you produce a pen test report for a SOC 2 or customer security review?",
        a: "Yes — our reports are formatted to drop straight into audit binders and vendor-security questionnaires, with technical reproduction steps for engineers and an executive summary with a prioritized remediation roadmap for leadership. Every finding is mapped to a MITRE ATT&CK technique.",
    },
    {
        q: "Do you build finance and insurance software?",
        a: "Yes — Milwaukee has a deep financial-services and insurance base, and back-office tooling, policy and claims systems, and reporting are recurring work. We integrate with carrier and core banking systems rather than replacing them.",
    },
    {
        q: "Are you local to Milwaukee, or remote?",
        a: "We are headquartered in Macon, Georgia and work remote-first across the United States. For engagements above roughly $25k we travel to Milwaukee for an on-site kickoff and for internal pen tests that require physical network access — downtown, Wauwatosa, and the Brookfield and Waukesha corridor are all easy from the airport.",
    },
    {
        q: "What pen testing methodology do you use?",
        a: "Our framework is MITRE ATT&CK end-to-end. Every finding is mapped to a technique ID. We run eleven attack modules covering recon, credential spraying, Kerberoasting, ADCS abuse, lateral movement, and command-and-control infrastructure.",
    },
    {
        q: "What is a typical timeline for a Milwaukee engagement?",
        a: "A standalone external pen test runs two to three weeks including reporting. A manufacturing or water-tech tool typically runs eight to fourteen weeks depending on integrations. We give a fixed scope and fixed price before any work begins.",
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
        { "@type": "ListItem", position: 3, name: "Software Development Milwaukee, WI", item: "https://quantlabusa.dev/software-development-milwaukee-wi" },
    ],
};

export default function MilwaukeeLandingPage() {
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
                        <li className="text-gray-300">Milwaukee, WI</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development & Cybersecurity in Milwaukee, WI
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Milwaukee runs on a deep industrial base, a serious financial-services sector, and a globally recognized water-technology cluster. That mix generates real demand for manufacturing operations tooling, IoT and sensor platforms, and the finance software that off-the-shelf SaaS does not solve cleanly.
                    </p>
                    <ConsultationCTA label="Talk Milwaukee Projects" city="Milwaukee, WI" source="city-milwaukee-wi" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA pairs custom software engineering with hands-on penetration testing rooted in the MITRE ATT&amp;CK framework — not just selling development hours. For an industrial-and-finance economy where uptime and security both matter, that combination fits unusually well.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Milwaukee organizations choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Milwaukee has a manufacturing heritage that few American cities can match, and it is still very much a working industrial economy. Rockwell Automation, Johnson Controls, Harley-Davidson, GE Healthcare, Briggs &amp; Stratton, and a dense field of precision manufacturers and machine builders anchor a base that runs on MES, ERP, and operations software every day. The city is also a globally recognized water-technology hub — the Water Council and its cluster of water-tech companies and researchers have made Milwaukee a center for sensor, monitoring, and IoT work tied to water systems. The financial-services sector is deep too, led by Northwestern Mutual&apos;s downtown headquarters and a broad insurance and banking base. Each of these sectors generates demand for operations dashboards, IoT platforms, policy and claims tooling, and custom integrations that vertical SaaS cannot handle cleanly.
                        </p>
                        <p>
                            Milwaukee has plenty of staffing firms and enterprise consultancies. What is harder to find is a founder-led shop that ships modern web applications, builds the integration layer between legacy MES or core systems and new tooling, and runs credible offensive security engagements — all under one roof. That is what we offer. Active Directory abuse paths, lateral movement, ADCS certificate abuse, Kerberoasting, web app exploitation — that is in-house capability, not a subcontracted line item. And every line of software we ship is reviewed against the same threat models we use on offensive engagements.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for Milwaukee clients</h2>
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
                            QUANT LAB USA is a founder-led shop with a track record of shipping production software and running full-scope security engagements. Our pen testing work includes an end-to-end internal Active Directory assessment for a regional financial-services firm — eleven attack modules, every finding mapped to a MITRE ATT&amp;CK technique, the full attack chain from standard user to Domain Admin documented with screenshots and timestamps. The client passed their compliance audit on the first attempt. That is the same methodology we apply to every Milwaukee engagement, whether the buyer is a manufacturer, a water-tech company, or a finance and insurance firm.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Founder-led — you work directly with the engineer building your system",
                            "Manufacturing and IoT dashboards with real-time visibility",
                            "In-house offensive security (AD abuse paths, web app, network)",
                            "MITRE ATT&CK technique mapping on every finding",
                            "Modern Next.js / TypeScript / PostgreSQL / Docker stack",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work remotely with Milwaukee teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Milwaukee runs on Central Time, one hour behind our Macon, Georgia headquarters, which means our morning and your late morning overlap completely for standups, and your mid-afternoon overlaps with our late afternoon for reviews. Most engagements start with a 60-minute scope by video. For engagements above roughly $25k we travel to Milwaukee for an on-site kickoff and for internal pen tests that require physical network access. Build cycles run weekly with a Friday staging URL, written notes, and the next-week plan. Pen test reports are delivered in two formats: a technical deliverable with reproduction steps and remediation detail for the security team, and a board-readable executive summary with a prioritized remediation roadmap. Fixed-scope, fixed-price proposals on most engagements; full code, database, and infrastructure handover at acceptance.
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
                        industries={["manufacturing","fintech","insurance","saas"]}
                        heading="Industries we serve in Milwaukee"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["build-vs-buy","internal-tools","pentest"]}
                        pinned={["build-vs-buy-software-2026","what-is-penetration-testing","custom-crm-development-guide"]}
                        heading="Reading for Milwaukee founders"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services & nearby cities</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "Manufacturing and IoT ops dashboards." },
                            { href: "/services/api-development", title: "API Development", desc: "MES, ERP, and telemetry integrations." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, network, and AD engagements." },
                            { href: "/services/network-pentest", title: "Network Penetration Testing", desc: "Internal and external network engagements." },
                            { href: "/services/mitre-attack-assessment", title: "MITRE ATT&CK Assessment", desc: "Full attack-chain mapping and reporting." },
                            { href: "/services/custom-crm-development", title: "Custom CRM Development", desc: "Purpose-built CRMs for industrial firms." },
                            { href: "/blog/build-vs-buy-software-2026", title: "Build vs Buy Software 2026", desc: "Three-year TCO decision framework." },
                            { href: "/blog/what-is-penetration-testing", title: "What Is Penetration Testing", desc: "A founder's buyer guide." },
                            { href: "/software-development-detroit-mi", title: "Detroit, MI", desc: "Auto, mobility, and manufacturing software." },
                            { href: "/software-development-minneapolis-mn", title: "Minneapolis, MN", desc: "Medtech, retail, and Fortune-500 vendors." },
                            { href: "/industries/manufacturing", title: "Manufacturing Software", desc: "Inventory, MES integrations, traceability." },
                            { href: "/contact", title: "Start a Project", desc: "Scoping calls, fixed-quote proposals." },
                        ].map((s) => (
                            <Link
                                key={s.href}
                                href={s.href}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-cyan-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Talk Milwaukee projects.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or email <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a> to discuss Milwaukee engagements.
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
