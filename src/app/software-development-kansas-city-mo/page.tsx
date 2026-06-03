import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { RelatedIndustries } from "@/components/RelatedIndustries";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Kansas City Software Development & Pen Testing | QUANT LAB USA",
    description:
        "Kansas City custom software for ag-tech, logistics, and health-IT — ops dashboards, custom CRMs, Stripe billing, and pen testing. Founder-led. Call (770) 652-1282.",
    slug: "software-development-kansas-city-mo",
    image: "/og-image.png",
    type: "article",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-kansas-city-mo#localbusiness",
    name: "QUANT LAB USA — Kansas City Coverage",
    url: "https://quantlabusa.dev/software-development-kansas-city-mo",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Kansas City", containedInPlace: { "@type": "State", name: "Missouri" } },
        { "@type": "City", name: "Overland Park" },
        { "@type": "City", name: "Independence" },
        { "@type": "City", name: "Lee's Summit" },
        { "@type": "City", name: "Olathe" },
        { "@type": "AdministrativeArea", name: "Jackson County" },
        { "@type": "AdministrativeArea", name: "Johnson County" },
        { "@type": "AdministrativeArea", name: "Greater Kansas City" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 39.0997, longitude: -94.5786 },
    address: { "@type": "PostalAddress", addressLocality: "Kansas City", addressRegion: "MO", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Cybersecurity",
    name: "Custom Software Development & Cybersecurity in Kansas City, MO",
    provider: { "@id": "https://quantlabusa.dev/#organization" },
    areaServed: { "@type": "City", name: "Kansas City", containedInPlace: { "@type": "State", name: "Missouri" } },
    description:
        "Ag-tech, logistics, and health-IT software, custom CRMs, Stripe billing, and MITRE ATT&CK penetration testing for Greater Kansas City.",
    url: "https://quantlabusa.dev/software-development-kansas-city-mo",
};

const services = [
    {
        title: "Ag-Tech & Animal-Health Platforms",
        desc: "Field-data tooling, traceability, and operations software for the KC Animal Health Corridor and ag-tech ecosystem. Typical: $25k–$100k.",
    },
    {
        title: "Logistics & Freight Dashboards",
        desc: "Route, yard, intermodal, and shipment-visibility tooling for Kansas City's rail and trucking hub. Typical: $25k–$90k.",
    },
    {
        title: "Health-IT & HIPAA-Aware Software",
        desc: "Clinical workflows, intake, and operations tooling that build on KC's deep health-IT talent base. PHI flows scoped under BAA. Typical: $25k–$100k.",
    },
    {
        title: "Penetration Testing (Web, Network, AD)",
        desc: "Full-scope engagements with formal reports for HIPAA, SOC 2, and customer security reviews. Typical: $10k–$35k.",
    },
    {
        title: "Custom CRMs & Operations Dashboards",
        desc: "Purpose-built tooling for distributors, agencies, and service firms across Jackson and Johnson counties. Typical: $20k–$70k.",
    },
    {
        title: "Stripe & Subscription Billing",
        desc: "Subscription products, metered usage, and software licensing infrastructure for local SaaS founders. Typical: $8k–$28k.",
    },
];

const faqs = [
    {
        q: "Do you build ag-tech and animal-health software?",
        a: "Yes — Kansas City anchors the Animal Health Corridor and a strong ag-tech ecosystem, and field-data tooling, traceability, and operations software are recurring work for us. We build the operational layer and integrate with the field-data and ERP systems you already run.",
    },
    {
        q: "Can you produce a pen test report for a HIPAA or SOC 2 audit?",
        a: "Yes — our reports are formatted to drop straight into audit binders and vendor-security questionnaires, with technical reproduction steps for engineers and an executive summary with a prioritized remediation roadmap for leadership. Every finding is mapped to a MITRE ATT&CK technique.",
    },
    {
        q: "Do you build health-IT software?",
        a: "Yes — Kansas City has one of the deepest health-IT talent pools in the country, seeded by the electronic-health-records industry that grew up here. We build clinical workflows, intake, and operations tooling, architect on BAA-eligible cloud, and scope any PHI-touching component carefully alongside your compliance team.",
    },
    {
        q: "Do you build logistics and freight software?",
        a: "Yes — Kansas City is one of the largest rail and trucking hubs in the country, and route, yard, intermodal, and shipment-visibility dashboards transfer cleanly to KC's logistics operators. We integrate with the TMS and carrier systems you already use.",
    },
    {
        q: "Are you local to Kansas City, or remote?",
        a: "We are headquartered in Macon, Georgia and work remote-first across the United States. For engagements above roughly $25k we travel to Kansas City for an on-site kickoff and for internal pen tests that require physical network access — downtown, the Overland Park and Olathe corridor in Johnson County are all easy from MCI.",
    },
    {
        q: "What is your timezone overlap with Kansas City?",
        a: "Kansas City runs on Central Time, one hour behind our Georgia headquarters, so our morning and your late morning overlap completely for standups, and your mid-afternoon overlaps with our late afternoon for reviews.",
    },
    {
        q: "What is a typical timeline for a Kansas City engagement?",
        a: "A standalone external pen test runs two to three weeks including reporting. A custom ag-tech or health-IT tool typically runs eight to fourteen weeks depending on integrations. We give a fixed scope and fixed price before any work begins.",
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
        { "@type": "ListItem", position: 3, name: "Software Development Kansas City, MO", item: "https://quantlabusa.dev/software-development-kansas-city-mo" },
    ],
};

export default function KansasCityLandingPage() {
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
                        <li className="text-gray-300">Kansas City, MO</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development & Cybersecurity in Kansas City, MO
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Kansas City sits at the crossroads of American agriculture, freight, and a surprisingly deep health-IT talent pool. Between the Animal Health Corridor, the rail and trucking hub, and the electronic-health-records legacy, the region generates real demand for ag-tech platforms, logistics dashboards, and clinical software.
                    </p>
                    <ConsultationCTA label="Talk Kansas City Projects" city="Kansas City, MO" source="city-kansas-city-mo" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA pairs custom software engineering with hands-on penetration testing rooted in the MITRE ATT&amp;CK framework — not just selling development hours. For an economy built on agriculture, logistics, and health data, that combination fits unusually well.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Kansas City organizations choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Kansas City has a distinctive economic mix. The metro anchors the Animal Health Corridor — the largest concentration of animal-health and nutrition companies in the world, stretching from Manhattan, Kansas through Columbia, Missouri — and a broader ag-tech and food-production base that generates demand for field-data, traceability, and operations tooling. It is also one of the country&apos;s great freight crossroads, where multiple Class I railroads and major interstate corridors converge, feeding a deep logistics and trucking industry. And it carries an unusually deep health-IT talent pool: the electronic-health-records industry that grew up around Cerner left thousands of engineers and product people who understand clinical software intimately. Layer on a growing startup scene in the Crossroads and a financial-services presence, and you have a market hungry for custom platforms that off-the-shelf SaaS does not solve cleanly.
                        </p>
                        <p>
                            Kansas City has plenty of staffing firms and consultancies. What is harder to find is a founder-led shop that ships modern web applications, builds ag-tech and health-IT tooling, and runs credible offensive security engagements — all under one roof. That is what we offer. Active Directory abuse paths, lateral movement, ADCS certificate abuse, Kerberoasting, web app exploitation — that is in-house capability, not a subcontracted line item. And every line of software we ship is reviewed against the same threat models we use on offensive engagements.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for Kansas City clients</h2>
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
                            QUANT LAB USA is a founder-led shop with a track record of shipping production software and running full-scope security engagements. Our pen testing work includes an end-to-end internal Active Directory assessment for a regional financial-services firm — eleven attack modules, every finding mapped to a MITRE ATT&amp;CK technique, the full attack chain from standard user to Domain Admin documented with screenshots and timestamps. The client passed their compliance audit on the first attempt. That is the same methodology we apply to every Kansas City engagement, whether the buyer is an ag-tech company, a logistics operator, or a health-IT founder.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Founder-led — you work directly with the engineer building your system",
                            "HIPAA-aware architecture for health-IT — BAA-eligible cloud",
                            "Logistics and field-data dashboards with real-time visibility",
                            "In-house offensive security and MITRE ATT&CK reporting",
                            "Modern Next.js / TypeScript / PostgreSQL / Docker stack",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work remotely with Kansas City teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Kansas City runs on Central Time, one hour behind our Macon, Georgia headquarters, which means our morning and your late morning overlap completely for standups, and your mid-afternoon overlaps with our late afternoon for reviews. Most engagements start with a 60-minute scope by video. For engagements above roughly $25k we travel to Kansas City for an on-site kickoff and for internal pen tests that require physical network access. Build cycles run weekly with a Friday staging URL, written notes, and the next-week plan. Pen test reports are delivered in two formats: a technical deliverable with reproduction steps and remediation detail for the security team, and a board-readable executive summary with a prioritized remediation roadmap. Fixed-scope, fixed-price proposals on most engagements; full code, database, and infrastructure handover at acceptance.
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
                        industries={["healthcare","saas","manufacturing","fintech"]}
                        heading="Industries we serve in Kansas City"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["build-vs-buy","compliance","pentest"]}
                        pinned={["build-vs-buy-software-2026","custom-crm-development-guide","what-is-penetration-testing"]}
                        heading="Reading for Kansas City founders"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services & nearby cities</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "Ag-tech and logistics ops tooling." },
                            { href: "/services/custom-crm-development", title: "Custom CRM Development", desc: "Purpose-built CRMs for distributors." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, network, and AD engagements." },
                            { href: "/services/mitre-attack-assessment", title: "MITRE ATT&CK Assessment", desc: "Full attack-chain mapping and reporting." },
                            { href: "/services/api-development", title: "API Development", desc: "TMS, EHR, and field-data integrations." },
                            { href: "/services/saas-platform-development", title: "SaaS Platform Development", desc: "Multi-tenant apps, billing, onboarding." },
                            { href: "/blog/build-vs-buy-software-2026", title: "Build vs Buy Software 2026", desc: "Three-year TCO decision framework." },
                            { href: "/blog/custom-crm-development-guide", title: "Custom CRM Development Guide", desc: "Pillar resource — build vs. buy." },
                            { href: "/software-development-minneapolis-mn", title: "Minneapolis, MN", desc: "Medtech, retail, and Fortune-500 vendors." },
                            { href: "/software-development-milwaukee-wi", title: "Milwaukee, WI", desc: "Manufacturing and water-tech software." },
                            { href: "/industries/healthcare", title: "Healthcare Software", desc: "HIPAA-aware platforms and intake." },
                            { href: "/contact", title: "Start a Project", desc: "Scoping calls, fixed-quote proposals." },
                        ].map((s) => (
                            <Link
                                key={s.href}
                                href={s.href}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-amber-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Talk Kansas City projects.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or email <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a> to discuss Kansas City engagements.
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
