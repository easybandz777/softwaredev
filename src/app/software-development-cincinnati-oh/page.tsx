import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { RelatedIndustries } from "@/components/RelatedIndustries";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Cincinnati OH Software Development & Pen Testing | QUANT LAB USA",
    description:
        "Cincinnati custom software for CPG, retail, and fintech — ops dashboards, custom CRMs, Stripe billing, and pen testing. Founder-led. Call (770) 652-1282.",
    slug: "software-development-cincinnati-oh",
    image: "/og-image.png",
    type: "article",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-cincinnati-oh#localbusiness",
    name: "QUANT LAB USA — Cincinnati Coverage",
    url: "https://quantlabusa.dev/software-development-cincinnati-oh",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Cincinnati", containedInPlace: { "@type": "State", name: "Ohio" } },
        { "@type": "City", name: "Blue Ash" },
        { "@type": "City", name: "Mason" },
        { "@type": "City", name: "West Chester" },
        { "@type": "City", name: "Florence" },
        { "@type": "AdministrativeArea", name: "Hamilton County" },
        { "@type": "AdministrativeArea", name: "Warren County" },
        { "@type": "AdministrativeArea", name: "Greater Cincinnati" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 39.1031, longitude: -84.5120 },
    address: { "@type": "PostalAddress", addressLocality: "Cincinnati", addressRegion: "OH", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Cybersecurity",
    name: "Custom Software Development & Cybersecurity in Cincinnati, OH",
    provider: { "@id": "https://quantlabusa.dev/#organization" },
    areaServed: { "@type": "City", name: "Cincinnati", containedInPlace: { "@type": "State", name: "Ohio" } },
    description:
        "CPG and retail-tech software, fintech tooling, custom CRMs, Stripe billing, and MITRE ATT&CK penetration testing for Greater Cincinnati.",
    url: "https://quantlabusa.dev/software-development-cincinnati-oh",
};

const services = [
    {
        title: "CPG & Retail Ops Dashboards",
        desc: "Trade-promotion tracking, supply-chain visibility, and merchandising tooling for consumer-brand and grocery operators. Typical: $25k–$90k.",
    },
    {
        title: "Fintech & Payments Software",
        desc: "Payment infrastructure, billing systems, and back-office tooling for the Greater Cincinnati financial-services base. Typical: $25k–$100k.",
    },
    {
        title: "Custom CRMs & Operations Dashboards",
        desc: "Purpose-built tooling for distributors, agencies, and service firms across Hamilton and Warren counties. Typical: $20k–$70k.",
    },
    {
        title: "Penetration Testing (Web, Network, AD)",
        desc: "Full-scope engagements with formal reports for PCI, SOC 2, and customer security reviews. Typical: $10k–$35k.",
    },
    {
        title: "Stripe & Subscription Billing",
        desc: "Subscription products, marketplace payments, metered usage, and licensing for local SaaS founders. Typical: $8k–$28k.",
    },
    {
        title: "API & Systems Integration",
        desc: "Connecting ERPs, POS systems, and modern web apps through hardened, documented APIs. Typical: $15k–$60k.",
    },
];

const faqs = [
    {
        q: "Do you build software for consumer-brand and retail companies?",
        a: "Yes — Cincinnati is a global CPG capital, and trade-promotion tracking, supply-chain visibility, and merchandising tooling are core work for us. We integrate with the ERP and POS systems you already run rather than replacing them.",
    },
    {
        q: "Can you produce a pen test report for a PCI or SOC 2 audit?",
        a: "Yes — our reports are formatted to drop straight into audit binders and vendor-security questionnaires, with technical reproduction steps for engineers and an executive summary with a prioritized remediation roadmap for leadership. Every finding is mapped to a MITRE ATT&CK technique.",
    },
    {
        q: "Do you build fintech and payments software?",
        a: "Yes — Greater Cincinnati has a deep financial-services and payments base, and we build payment infrastructure, subscription billing, and back-office tooling. We route card data through Stripe to keep PCI scope small, and we build the reporting hooks your finance and compliance teams need.",
    },
    {
        q: "Are you local to Cincinnati, or remote?",
        a: "We are headquartered in Macon, Georgia and work remote-first across the United States. For engagements above roughly $25k we travel to Cincinnati for an on-site kickoff and for internal pen tests that require physical network access — downtown, Blue Ash, Mason, and the Northern Kentucky corridor are all easy from CVG.",
    },
    {
        q: "What pen testing methodology do you use?",
        a: "Our framework is MITRE ATT&CK end-to-end. Every finding is mapped to a technique ID. We run eleven attack modules covering recon, credential spraying, Kerberoasting, ADCS abuse, lateral movement, and command-and-control infrastructure.",
    },
    {
        q: "What is your timezone overlap with Cincinnati?",
        a: "Cincinnati runs on Eastern Time, the same as our Georgia headquarters, so we share the full business day — complete overlap for standups, reviews, and same-day responses.",
    },
    {
        q: "What is a typical timeline for a Cincinnati engagement?",
        a: "A standalone external pen test runs two to three weeks including reporting. A custom CRM or ops dashboard typically runs six to twelve weeks depending on integrations. We give a fixed scope and fixed price before any work begins.",
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
        { "@type": "ListItem", position: 3, name: "Software Development Cincinnati, OH", item: "https://quantlabusa.dev/software-development-cincinnati-oh" },
    ],
};

export default function CincinnatiOhioLandingPage() {
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
                        <li className="text-gray-300">Cincinnati, OH</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-red-500 to-rose-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development & Cybersecurity in Cincinnati, OH
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Cincinnati is a consumer-goods and retail powerhouse with a deep financial-services base layered on top. Between the global CPG headquarters, the grocery and retail giants, and a growing fintech scene, the region generates serious demand for software that off-the-shelf SaaS does not solve cleanly.
                    </p>
                    <ConsultationCTA label="Talk Cincinnati Projects" city="Cincinnati, OH" source="city-cincinnati-oh" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA pairs custom software engineering with hands-on penetration testing rooted in the MITRE ATT&amp;CK framework — not just selling development hours. For a CPG-and-fintech economy where supply chains and payment data are mission-critical, that combination fits unusually well.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Cincinnati organizations choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Cincinnati has a corporate density that belies its size. Procter &amp; Gamble anchors a global consumer-goods ecosystem, and Kroger runs one of the largest grocery operations in the country from downtown — both surrounded by the agencies, suppliers, logistics firms, and data-and-analytics vendors that orbit them. The financial-services base is just as serious: Fifth Third Bank and Western &amp; Southern are headquartered here, and a growing fintech and payments scene has grown up around that capital and talent. Manufacturing across Hamilton and Warren counties and into Northern Kentucky rounds out the picture, alongside healthcare systems and a strong university presence. Each of these sectors generates demand for trade-promotion tooling, supply-chain dashboards, payment infrastructure, and custom CRMs that vertical SaaS cannot handle cleanly at scale.
                        </p>
                        <p>
                            Cincinnati has plenty of staffing firms and enterprise consultancies. What is harder to find is a founder-led shop that ships modern web applications, builds the integration layer between legacy ERP and POS systems and new tooling, and runs credible offensive security engagements — all under one roof. That is what we offer. Active Directory abuse paths, lateral movement, ADCS certificate abuse, Kerberoasting, web app exploitation — that is in-house capability, not a subcontracted line item. And every line of software we ship is reviewed against the same threat models we use on offensive engagements.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for Cincinnati clients</h2>
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
                            QUANT LAB USA is a founder-led shop with a track record of shipping production software and running full-scope security engagements. Our pen testing work includes an end-to-end internal Active Directory assessment for a regional financial-services firm — eleven attack modules, every finding mapped to a MITRE ATT&amp;CK technique, the full attack chain from standard user to Domain Admin documented with screenshots and timestamps. The client passed their compliance audit on the first attempt. That is the same methodology we apply to every Cincinnati-region engagement, whether the buyer is a consumer-brand supplier, a payments company, or a Greater Cincinnati SaaS founder.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Founder-led — you work directly with the engineer building your system",
                            "Stripe-grade payment infrastructure — PCI scope kept small",
                            "In-house offensive security (AD abuse paths, web app, network)",
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work remotely with Cincinnati teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Cincinnati runs on Eastern Time, the same as our Macon, Georgia headquarters, so we share the entire business day — no awkward windows for standups, reviews, or same-day questions. Most engagements start with a 60-minute scope by video. For engagements above roughly $25k we travel to Cincinnati for an on-site kickoff and for internal pen tests that require physical network access. Build cycles run weekly with a Friday staging URL, written notes, and the next-week plan. Pen test reports are delivered in two formats: a technical deliverable with reproduction steps and remediation detail for the security team, and a board-readable executive summary with a prioritized remediation roadmap. Fixed-scope, fixed-price proposals on most engagements; full code, database, and infrastructure handover at acceptance.
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
                        industries={["e-commerce","fintech","saas","manufacturing"]}
                        heading="Industries we serve in Cincinnati"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["stripe","build-vs-buy","pentest"]}
                        pinned={["nextjs-stripe-integration-guide","build-vs-buy-software-2026","what-is-penetration-testing"]}
                        heading="Reading for Cincinnati founders"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services & nearby cities</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "CPG and retail ops dashboards." },
                            { href: "/services/stripe-integration", title: "Stripe Integration", desc: "Payment infrastructure and billing." },
                            { href: "/services/subscription-billing", title: "Subscription Billing", desc: "Metered usage and recurring revenue." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, network, and AD engagements." },
                            { href: "/services/custom-crm-development", title: "Custom CRM Development", desc: "Purpose-built CRMs for distributors." },
                            { href: "/services/mitre-attack-assessment", title: "MITRE ATT&CK Assessment", desc: "Full attack-chain mapping and reporting." },
                            { href: "/blog/nextjs-stripe-integration-guide", title: "Next.js + Stripe Guide", desc: "Complete payment integration playbook." },
                            { href: "/blog/build-vs-buy-software-2026", title: "Build vs Buy Software 2026", desc: "Three-year TCO decision framework." },
                            { href: "/software-development-columbus-oh", title: "Columbus, OH", desc: "Insurance and retail-tech software." },
                            { href: "/software-development-cleveland-oh", title: "Cleveland, OH", desc: "Healthcare and manufacturing software." },
                            { href: "/industries/e-commerce", title: "E-Commerce Software", desc: "Custom carts and subscription billing." },
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
                            Talk Cincinnati projects.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or email <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a> to discuss Cincinnati engagements.
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
