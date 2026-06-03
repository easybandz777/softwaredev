import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { RelatedIndustries } from "@/components/RelatedIndustries";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Detroit Software Development & Pen Testing | QUANT LAB USA",
    description:
        "Detroit custom software for auto, mobility, and manufacturing — supplier portals, ops dashboards, integrations, and pen testing. Founder-led. Call (770) 652-1282.",
    slug: "software-development-detroit-mi",
    image: "/og-image.png",
    type: "article",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-detroit-mi#localbusiness",
    name: "QUANT LAB USA — Detroit Coverage",
    url: "https://quantlabusa.dev/software-development-detroit-mi",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Detroit", containedInPlace: { "@type": "State", name: "Michigan" } },
        { "@type": "City", name: "Dearborn" },
        { "@type": "City", name: "Troy" },
        { "@type": "City", name: "Warren" },
        { "@type": "City", name: "Ann Arbor" },
        { "@type": "AdministrativeArea", name: "Wayne County" },
        { "@type": "AdministrativeArea", name: "Oakland County" },
        { "@type": "AdministrativeArea", name: "Metro Detroit" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 42.3314, longitude: -83.0458 },
    address: { "@type": "PostalAddress", addressLocality: "Detroit", addressRegion: "MI", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Cybersecurity",
    name: "Custom Software Development & Cybersecurity in Detroit, MI",
    provider: { "@id": "https://quantlabusa.dev/#organization" },
    areaServed: { "@type": "City", name: "Detroit", containedInPlace: { "@type": "State", name: "Michigan" } },
    description:
        "Auto and mobility software, supplier portals, manufacturing ops dashboards, and MITRE ATT&CK penetration testing for Metro Detroit.",
    url: "https://quantlabusa.dev/software-development-detroit-mi",
};

const services = [
    {
        title: "Supplier Portals & Tier-1 Tooling",
        desc: "Custom portals, EDI workflows, and quality-tracking tools for automotive suppliers and the OEM supply chain. Typical: $25k–$100k.",
    },
    {
        title: "Manufacturing Ops Dashboards",
        desc: "Real-time visibility into production lines, jobs, inventory, and machine data for Metro Detroit plants. Typical: $25k–$90k.",
    },
    {
        title: "Mobility & Logistics Software",
        desc: "Fleet, telematics integration, and operations tooling for the mobility and logistics ecosystem. Typical: $25k–$100k.",
    },
    {
        title: "Penetration Testing (Web, Network, AD)",
        desc: "Full-scope engagements with formal reports for TISAX, SOC 2, and OEM supplier security reviews. Typical: $10k–$35k.",
    },
    {
        title: "ERP & Systems Integration",
        desc: "Connecting legacy MES, ERP, and PLM systems with modern web apps through hardened, documented APIs. Typical: $15k–$60k.",
    },
    {
        title: "Stripe & Subscription Billing",
        desc: "Subscription products, metered usage, and licensing for local SaaS and mobility-tech founders. Typical: $8k–$28k.",
    },
];

const faqs = [
    {
        q: "Do you build software for automotive suppliers?",
        a: "Yes — supplier portals, EDI workflows, and quality-tracking tools for the Tier-1 and Tier-2 supply chain are core work for us. We integrate with the EDI, MES, and PLM systems the OEMs require rather than replacing them.",
    },
    {
        q: "Can you produce a pen test report for an OEM or TISAX security review?",
        a: "Yes — our reports are formatted to drop straight into audit binders and supplier-security questionnaires, with technical reproduction steps for engineers and an executive summary with a prioritized remediation roadmap for leadership. Every finding is mapped to a MITRE ATT&CK technique.",
    },
    {
        q: "Do you build mobility and fleet software?",
        a: "Yes — Detroit is the center of the mobility industry, and fleet operations, telematics integration, and logistics dashboards are recurring work for us. We build the operational layer and integrate with the telematics and vehicle-data providers you already use.",
    },
    {
        q: "Are you local to Detroit, or remote?",
        a: "We are headquartered in Macon, Georgia and work remote-first across the United States. For engagements above roughly $25k we travel to Detroit for an on-site kickoff and for internal pen tests that require physical network access — downtown, Dearborn, the Troy and Auburn Hills corridor, and Ann Arbor are all easy from DTW.",
    },
    {
        q: "What pen testing methodology do you use?",
        a: "Our framework is MITRE ATT&CK end-to-end. Every finding is mapped to a technique ID. We run eleven attack modules covering recon, credential spraying, Kerberoasting, ADCS abuse, lateral movement, and command-and-control infrastructure.",
    },
    {
        q: "What is your timezone overlap with Detroit?",
        a: "Detroit runs on Eastern Time, the same as our Georgia headquarters, so we share the full business day — complete overlap for standups, reviews, and same-day responses.",
    },
    {
        q: "What is a typical timeline for a Detroit engagement?",
        a: "A standalone external pen test runs two to three weeks including reporting. A supplier portal or manufacturing tool typically runs eight to fourteen weeks depending on integrations. We give a fixed scope and fixed price before any work begins.",
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
        { "@type": "ListItem", position: 3, name: "Software Development Detroit, MI", item: "https://quantlabusa.dev/software-development-detroit-mi" },
    ],
};

export default function DetroitLandingPage() {
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
                        <li className="text-gray-300">Detroit, MI</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development & Cybersecurity in Detroit, MI
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Detroit is the center of the auto and mobility world, and the software demand that comes with it is enormous — supplier portals, manufacturing operations, fleet and telematics tooling, and the integration layer that holds the supply chain together.
                    </p>
                    <ConsultationCTA label="Talk Detroit Projects" city="Detroit, MI" source="city-detroit-mi" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA pairs custom software engineering with hands-on penetration testing rooted in the MITRE ATT&amp;CK framework — not just selling development hours. For an automotive supply chain where OEM security requirements are non-negotiable, that combination fits unusually well.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Detroit organizations choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Detroit&apos;s economy still runs on the automobile, but the software story is bigger than the Big Three. General Motors, Ford, and Stellantis anchor a supply chain that runs thousands of Tier-1 and Tier-2 suppliers deep across Wayne, Oakland, and Macomb counties — and every one of them runs on EDI, MES, PLM, and quality-tracking systems that have to talk to the OEMs and to each other. The mobility shift has layered new demand on top: autonomous and connected-vehicle work, telematics and fleet platforms, and a research corridor anchored by the University of Michigan in Ann Arbor and the American Center for Mobility. Detroit&apos;s downtown resurgence, led by Rocket Companies and a growing tech and fintech base, adds yet another layer of software demand. Across all of it, operations tooling, supplier portals, and integration work are constant needs.
                        </p>
                        <p>
                            Detroit has plenty of staffing firms and enterprise consultancies. What is harder to find is a founder-led shop that ships modern web applications, builds the integration layer between legacy MES or PLM systems and new tooling, and runs credible offensive security engagements — all under one roof. That is what we offer. Active Directory abuse paths, lateral movement, ADCS certificate abuse, Kerberoasting, web app exploitation — that is in-house capability, not a subcontracted line item. And every line of software we ship is reviewed against the same threat models we use on offensive engagements.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for Detroit clients</h2>
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
                            QUANT LAB USA is a founder-led shop with a track record of shipping production software and running full-scope security engagements. Our pen testing work includes an end-to-end internal Active Directory assessment for a regional financial-services firm — eleven attack modules, every finding mapped to a MITRE ATT&amp;CK technique, the full attack chain from standard user to Domain Admin documented with screenshots and timestamps. The client passed their compliance audit on the first attempt. That is the same methodology we apply to every Detroit-region engagement, whether the buyer is an automotive supplier, a mobility-tech company, or a Metro Detroit SaaS founder.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Founder-led — you work directly with the engineer building your system",
                            "Supplier portals and EDI workflows for the OEM supply chain",
                            "In-house offensive security (AD abuse paths, web app, network)",
                            "Reports formatted for OEM and TISAX supplier-security reviews",
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work remotely with Detroit teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Detroit runs on Eastern Time, the same as our Macon, Georgia headquarters, so we share the entire business day — no awkward windows for standups, reviews, or same-day questions. Most engagements start with a 60-minute scope by video. For engagements above roughly $25k we travel to Detroit for an on-site kickoff and for internal pen tests that require physical network access. Build cycles run weekly with a Friday staging URL, written notes, and the next-week plan. Pen test reports are delivered in two formats: a technical deliverable with reproduction steps and remediation detail for the security team, and a board-readable executive summary with a prioritized remediation roadmap. Fixed-scope, fixed-price proposals on most engagements; full code, database, and infrastructure handover at acceptance.
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
                        industries={["manufacturing","fintech","saas","insurance"]}
                        heading="Industries we serve in Detroit"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["build-vs-buy","internal-tools","pentest"]}
                        pinned={["build-vs-buy-software-2026","what-is-penetration-testing","custom-crm-development-guide"]}
                        heading="Reading for Detroit founders"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services & nearby cities</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "Supplier portals and ops dashboards." },
                            { href: "/services/api-development", title: "API Development", desc: "EDI, MES, and PLM integration layers." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, network, and AD engagements." },
                            { href: "/services/mitre-attack-assessment", title: "MITRE ATT&CK Assessment", desc: "Full attack-chain mapping and reporting." },
                            { href: "/services/network-pentest", title: "Network Penetration Testing", desc: "Internal and external network engagements." },
                            { href: "/services/custom-crm-development", title: "Custom CRM Development", desc: "Purpose-built CRMs for suppliers." },
                            { href: "/blog/build-vs-buy-software-2026", title: "Build vs Buy Software 2026", desc: "Three-year TCO decision framework." },
                            { href: "/blog/what-is-penetration-testing", title: "What Is Penetration Testing", desc: "A founder's buyer guide." },
                            { href: "/software-development-cleveland-oh", title: "Cleveland, OH", desc: "Healthcare and manufacturing software." },
                            { href: "/software-development-milwaukee-wi", title: "Milwaukee, WI", desc: "Manufacturing and water-tech software." },
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
                            Talk Detroit projects.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or email <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a> to discuss Detroit engagements.
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
