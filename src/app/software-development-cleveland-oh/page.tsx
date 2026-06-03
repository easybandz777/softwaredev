import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { RelatedIndustries } from "@/components/RelatedIndustries";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Cleveland OH Software Development & Pen Testing | QUANT LAB USA",
    description:
        "Cleveland, Ohio custom software for healthcare and manufacturing — HIPAA-aware platforms, ops dashboards, integrations, and pen testing. Call (770) 652-1282.",
    slug: "software-development-cleveland-oh",
    image: "/og-image.png",
    type: "article",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-cleveland-oh#localbusiness",
    name: "QUANT LAB USA — Cleveland Coverage",
    url: "https://quantlabusa.dev/software-development-cleveland-oh",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Cleveland", containedInPlace: { "@type": "State", name: "Ohio" } },
        { "@type": "City", name: "Lakewood" },
        { "@type": "City", name: "Parma" },
        { "@type": "City", name: "Westlake" },
        { "@type": "City", name: "Beachwood" },
        { "@type": "AdministrativeArea", name: "Cuyahoga County" },
        { "@type": "AdministrativeArea", name: "Lake County" },
        { "@type": "AdministrativeArea", name: "Greater Cleveland" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 41.4993, longitude: -81.6944 },
    address: { "@type": "PostalAddress", addressLocality: "Cleveland", addressRegion: "OH", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Cybersecurity",
    name: "Custom Software Development & Cybersecurity in Cleveland, OH",
    provider: { "@id": "https://quantlabusa.dev/#organization" },
    areaServed: { "@type": "City", name: "Cleveland", containedInPlace: { "@type": "State", name: "Ohio" } },
    description:
        "Healthcare and manufacturing software, HIPAA-aware platforms, ops dashboards, and MITRE ATT&CK penetration testing for Greater Cleveland.",
    url: "https://quantlabusa.dev/software-development-cleveland-oh",
};

const services = [
    {
        title: "HIPAA-Aware Healthcare Platforms",
        desc: "Patient intake, scheduling, and operations tooling for clinics and health-tech vendors. PHI flows scoped carefully under BAA. Typical: $25k–$100k.",
    },
    {
        title: "Manufacturing Ops Dashboards",
        desc: "Real-time visibility into jobs, inventory, machines, and crews for Northeast Ohio manufacturers. Typical: $25k–$90k.",
    },
    {
        title: "Penetration Testing (Web, Network, AD)",
        desc: "Full-scope engagements with formal reports for HIPAA, SOC 2, and customer security reviews. Typical: $10k–$35k.",
    },
    {
        title: "Custom CRMs & Operations Dashboards",
        desc: "Purpose-built tooling for medical practices, distributors, and service firms across Cuyahoga County. Typical: $20k–$70k.",
    },
    {
        title: "ERP & Systems Integration",
        desc: "Connecting legacy MES, ERP, and EHR systems with modern web apps through hardened, documented APIs. Typical: $15k–$60k.",
    },
    {
        title: "Stripe & Subscription Billing",
        desc: "Subscription products, metered usage, and licensing for local SaaS and health-tech founders. Typical: $8k–$28k.",
    },
];

const faqs = [
    {
        q: "Do you build HIPAA-aware healthcare software?",
        a: "Yes — Cleveland is a global healthcare hub, and patient intake, scheduling, and operations tooling are core work for us. We architect on BAA-eligible cloud, keep PHI flows encrypted and audit-logged, and scope any PHI-touching component carefully. We are software engineers, not your compliance officer, so we work alongside your privacy and compliance teams.",
    },
    {
        q: "Can you produce a pen test report for a HIPAA or SOC 2 audit?",
        a: "Yes — our reports are formatted to drop straight into audit binders and vendor-security questionnaires, with technical reproduction steps for engineers and an executive summary with a prioritized remediation roadmap for leadership. Every finding is mapped to a MITRE ATT&CK technique.",
    },
    {
        q: "Are you local to Cleveland, or remote?",
        a: "We are headquartered in Macon, Georgia and work remote-first across the United States. For engagements above roughly $25k we travel to Cleveland for an on-site kickoff and for internal pen tests that require physical network access — downtown, Beachwood, and the Westlake corridor are all easy from Hopkins.",
    },
    {
        q: "Do you build software for manufacturers?",
        a: "Yes — Northeast Ohio has one of the densest manufacturing bases in the country, and ops dashboards, inventory tooling, and MES/ERP integration are recurring work for us. We give you real-time visibility into jobs, machines, and inventory without ripping out the systems you already run.",
    },
    {
        q: "What pen testing methodology do you use?",
        a: "Our framework is MITRE ATT&CK end-to-end. Every finding is mapped to a technique ID. We run eleven attack modules covering recon, credential spraying, Kerberoasting, ADCS abuse, lateral movement, and command-and-control infrastructure.",
    },
    {
        q: "What is your timezone overlap with Cleveland?",
        a: "Cleveland runs on Eastern Time, the same as our Georgia headquarters, so we share the full business day — complete overlap for standups, reviews, and same-day responses.",
    },
    {
        q: "What is a typical timeline for a Cleveland engagement?",
        a: "A standalone external pen test runs two to three weeks including reporting. A custom healthcare or manufacturing tool typically runs eight to fourteen weeks depending on integrations. We give a fixed scope and fixed price before any work begins.",
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
        { "@type": "ListItem", position: 3, name: "Software Development Cleveland, OH", item: "https://quantlabusa.dev/software-development-cleveland-oh" },
    ],
};

export default function ClevelandOhioLandingPage() {
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
                        <li className="text-gray-300">Cleveland, OH</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development & Cybersecurity in Cleveland, OH
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Cleveland is a global healthcare hub wrapped around one of the country&apos;s deepest manufacturing bases. Between the hospital systems, the medical-device ecosystem, and the industrial corridor along the lake, the region runs on software that off-the-shelf SaaS does not solve cleanly.
                    </p>
                    <ConsultationCTA label="Talk Cleveland Projects" city="Cleveland, OH" source="city-cleveland-oh" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA pairs custom software engineering with hands-on penetration testing rooted in the MITRE ATT&amp;CK framework — not just selling development hours. For a healthcare-and-manufacturing economy where compliance and uptime are non-negotiable, that combination fits unusually well.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Cleveland organizations choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Cleveland punches far above its weight in healthcare. Cleveland Clinic, University Hospitals, and MetroHealth anchor a medical ecosystem with global reach, and around them sits a dense layer of medical-device makers, health-tech startups, biotech research, and the practices and specialty groups that feed the hospital systems. The other half of the economy is industrial: Northeast Ohio remains one of the most concentrated manufacturing regions in the country, from steel and polymers to precision components, with companies like Sherwin-Williams, Parker Hannifin, Eaton, and Lincoln Electric headquartered in the metro. Both halves run on operations software — patient intake and scheduling on one side, jobs and inventory and machine data on the other — and both face hard compliance and security expectations.
                        </p>
                        <p>
                            Cleveland has plenty of staffing firms and enterprise consultancies. What is harder to find is a founder-led shop that ships modern web applications, builds the integration layer between legacy EHR or MES systems and new tooling, and runs credible offensive security engagements — all under one roof. That is what we offer. Active Directory abuse paths, lateral movement, ADCS certificate abuse, Kerberoasting, web app exploitation — that is in-house capability, not a subcontracted line item. And every line of software we ship is reviewed against the same threat models we use on offensive engagements.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for Cleveland clients</h2>
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
                            QUANT LAB USA is a founder-led shop with a track record of shipping production software and running full-scope security engagements. Our pen testing work includes an end-to-end internal Active Directory assessment for a regional financial-services firm — eleven attack modules, every finding mapped to a MITRE ATT&amp;CK technique, the full attack chain from standard user to Domain Admin documented with screenshots and timestamps. The client passed their compliance audit on the first attempt. That is the same methodology we apply to every Cleveland-region engagement, whether the buyer is a health-tech vendor, a manufacturer, or a Greater Cleveland SaaS founder.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Founder-led — you work directly with the engineer building your system",
                            "HIPAA-aware architecture — BAA-eligible cloud, encrypted PHI flows",
                            "In-house offensive security (AD abuse paths, web app, network)",
                            "MITRE ATT&CK technique mapping on every finding",
                            "Modern Next.js / TypeScript / PostgreSQL / Docker stack",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work remotely with Cleveland teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Cleveland runs on Eastern Time, the same as our Macon, Georgia headquarters, so we share the entire business day — no awkward windows for standups, reviews, or same-day questions. Most engagements start with a 60-minute scope by video. For engagements above roughly $25k we travel to Cleveland for an on-site kickoff and for internal pen tests that require physical network access. Build cycles run weekly with a Friday staging URL, written notes, and the next-week plan. Pen test reports are delivered in two formats: a technical deliverable with reproduction steps and remediation detail for the security team, and a board-readable executive summary with a prioritized remediation roadmap. Fixed-scope, fixed-price proposals on most engagements; full code, database, and infrastructure handover at acceptance.
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
                        industries={["healthcare","manufacturing","saas","fintech"]}
                        heading="Industries we serve in Cleveland"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["compliance","build-vs-buy","pentest"]}
                        pinned={["build-vs-buy-software-2026","what-is-penetration-testing","soc2-pentest-prep-guide-2026"]}
                        heading="Reading for Cleveland founders"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services & nearby cities</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "Healthcare and manufacturing ops tooling." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, network, and AD engagements." },
                            { href: "/services/mitre-attack-assessment", title: "MITRE ATT&CK Assessment", desc: "Full attack-chain mapping and reporting." },
                            { href: "/services/api-development", title: "API Development", desc: "EHR, MES, and ERP integration layers." },
                            { href: "/services/custom-crm-development", title: "Custom CRM Development", desc: "Purpose-built CRMs for practices and distributors." },
                            { href: "/services/web-app-pentest", title: "Web Application Pen Test", desc: "OWASP-aligned web app testing." },
                            { href: "/blog/soc2-pentest-prep-guide-2026", title: "SOC 2 Pentest Prep 2026", desc: "Pre-audit testing mapped to CC controls." },
                            { href: "/blog/build-vs-buy-software-2026", title: "Build vs Buy Software 2026", desc: "Three-year TCO decision framework." },
                            { href: "/software-development-columbus-oh", title: "Columbus, OH", desc: "Insurance and retail-tech software." },
                            { href: "/software-development-cincinnati-oh", title: "Cincinnati, OH", desc: "CPG, fintech, and ops tooling." },
                            { href: "/industries/healthcare", title: "Healthcare Software", desc: "HIPAA-aware platforms and intake." },
                            { href: "/contact", title: "Start a Project", desc: "Scoping calls, fixed-quote proposals." },
                        ].map((s) => (
                            <Link
                                key={s.href}
                                href={s.href}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-emerald-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Talk Cleveland projects.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or email <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a> to discuss Cleveland engagements.
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
