import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { RelatedIndustries } from "@/components/RelatedIndustries";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Columbus OH Software Development & Pen Testing | QUANT LAB USA",
    description:
        "Columbus, Ohio custom software for insurance and retail tech — policy and claims tooling, ops dashboards, Stripe billing, and pen testing. Call (770) 652-1282.",
    slug: "software-development-columbus-oh",
    image: "/og-image.png",
    type: "article",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-columbus-oh#localbusiness",
    name: "QUANT LAB USA — Columbus Coverage",
    url: "https://quantlabusa.dev/software-development-columbus-oh",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Columbus", containedInPlace: { "@type": "State", name: "Ohio" } },
        { "@type": "City", name: "Dublin" },
        { "@type": "City", name: "Westerville" },
        { "@type": "City", name: "Hilliard" },
        { "@type": "City", name: "Grove City" },
        { "@type": "AdministrativeArea", name: "Franklin County" },
        { "@type": "AdministrativeArea", name: "Delaware County" },
        { "@type": "AdministrativeArea", name: "Central Ohio" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 39.9612, longitude: -82.9988 },
    address: { "@type": "PostalAddress", addressLocality: "Columbus", addressRegion: "OH", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Cybersecurity",
    name: "Custom Software Development & Cybersecurity in Columbus, OH",
    provider: { "@id": "https://quantlabusa.dev/#organization" },
    areaServed: { "@type": "City", name: "Columbus", containedInPlace: { "@type": "State", name: "Ohio" } },
    description:
        "Insurance and retail-tech software, custom CRMs, Stripe billing, and MITRE ATT&CK penetration testing for Columbus, Ohio operators.",
    url: "https://quantlabusa.dev/software-development-columbus-oh",
};

const services = [
    {
        title: "Insurance Admin & Claims Tooling",
        desc: "Policy management, claims intake, and broker portals for the deep Central Ohio insurance market. Typical: $25k–$90k.",
    },
    {
        title: "Retail & E-Commerce Platforms",
        desc: "Custom carts, fulfillment dashboards, and subscription billing for Columbus retail and DTC brands. Typical: $20k–$80k.",
    },
    {
        title: "Custom CRMs & Operations Dashboards",
        desc: "Purpose-built tooling for agencies, logistics firms, and service businesses across Franklin County. Typical: $20k–$70k.",
    },
    {
        title: "Penetration Testing (Web, Network, AD)",
        desc: "Full-scope engagements with formal reports for compliance and customer security reviews. Typical: $10k–$35k.",
    },
    {
        title: "Stripe & Subscription Billing",
        desc: "Subscription products, metered usage, and software licensing infrastructure for local SaaS founders. Typical: $8k–$28k.",
    },
    {
        title: "API & Systems Integration",
        desc: "Connecting legacy carrier systems, ERPs, and modern web apps with hardened, documented APIs. Typical: $15k–$60k.",
    },
];

const faqs = [
    {
        q: "Do you build software for insurance carriers and agencies?",
        a: "Yes — Central Ohio has one of the densest insurance labor markets in the country, and policy administration, claims intake, and broker-portal tooling are core work for us. We integrate with carrier systems and existing rating engines rather than replacing them.",
    },
    {
        q: "Can you produce a pen test report for a SOC 2 or carrier security review?",
        a: "Yes — our reports are formatted to drop straight into audit binders and vendor-security questionnaires, with technical reproduction steps for engineers and an executive summary with a prioritized remediation roadmap for leadership.",
    },
    {
        q: "Are you local to Columbus, or remote?",
        a: "We are headquartered in Macon, Georgia and work remote-first across the United States. For engagements above roughly $25k we travel to Columbus for an on-site kickoff and for internal pen tests that require physical network access — Dublin, Westerville, and the Easton corridor are all easy from the airport.",
    },
    {
        q: "What pen testing methodology do you use?",
        a: "Our framework is MITRE ATT&CK end-to-end. Every finding is mapped to a technique ID. We run eleven attack modules covering recon, credential spraying, Kerberoasting, ADCS abuse, lateral movement, and command-and-control infrastructure.",
    },
    {
        q: "Do you build retail and e-commerce platforms?",
        a: "Yes — from custom carts and fulfillment dashboards to subscription billing for DTC brands. Columbus has a strong retail and apparel heritage, and we ship tooling that off-the-shelf platforms cannot handle cleanly once volume and custom logic grow.",
    },
    {
        q: "What is your timezone overlap with Columbus?",
        a: "Columbus runs on Eastern Time, the same as our Georgia headquarters, so we share the full business day — complete overlap for standups, reviews, and same-day responses.",
    },
    {
        q: "What is a typical timeline for a Columbus engagement?",
        a: "A standalone external pen test runs two to three weeks including reporting. A custom CRM or claims tool typically runs six to twelve weeks depending on integrations. We give a fixed scope and fixed price before any work begins.",
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
        { "@type": "ListItem", position: 3, name: "Software Development Columbus, OH", item: "https://quantlabusa.dev/software-development-columbus-oh" },
    ],
};

export default function ColumbusOhioLandingPage() {
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
                        <li className="text-gray-300">Columbus, OH</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-blue-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development & Cybersecurity in Columbus, OH
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Columbus is one of the fastest-growing metros in the Midwest, anchored by a deep insurance industry, a strong retail and apparel heritage, and a fast-maturing startup scene. That combination generates serious demand for custom software that off-the-shelf SaaS does not solve cleanly.
                    </p>
                    <ConsultationCTA label="Talk Columbus Projects" city="Columbus, OH" source="city-columbus-oh" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA pairs custom software engineering with hands-on penetration testing rooted in the MITRE ATT&amp;CK framework — not just selling development hours. For a city built on insurance, retail, and a growing technology base, that combination fits unusually well.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Columbus organizations choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Columbus has an economic profile that few cities its size can match. Nationwide is headquartered here, and around it sits one of the deepest concentrations of insurance and financial-services talent in the country — carriers, agencies, third-party administrators, and the actuarial and claims operations that support them. The retail heritage runs just as deep: L Brands spun out Victoria&apos;s Secret and Bath &amp; Body Works here, Big Lots and Designer Brands are headquartered in the metro, and a thriving DTC and apparel ecosystem grew up alongside them. Add a fast-growing logistics footprint, a major research university in Ohio State, and an Intel semiconductor megafab rising in Licking County, and you have a market where operations software, claims tooling, and customer-facing platforms are in constant demand.
                        </p>
                        <p>
                            Columbus has no shortage of staffing shops and enterprise consultancies. What is harder to find is a founder-led firm that ships modern web applications, builds the integration layer between legacy carrier systems and new tooling, and runs credible offensive security engagements — all under one roof. That is what we offer. Active Directory abuse paths, lateral movement, ADCS certificate abuse, Kerberoasting, web app exploitation — that is in-house capability, not a subcontracted line item. And every line of software we ship is reviewed against the same threat models we use on offensive engagements.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for Columbus clients</h2>
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
                            QUANT LAB USA is a founder-led shop with a track record of shipping production software and running full-scope security engagements. Our pen testing work includes an end-to-end internal Active Directory assessment for a regional financial-services firm — eleven attack modules, every finding mapped to a MITRE ATT&amp;CK technique, the full attack chain from standard user to Domain Admin documented with screenshots and timestamps. The client passed their compliance audit on the first attempt. That is the same methodology we apply to every Columbus-region engagement, whether the buyer is an insurance agency, a retail operator, or a Central Ohio SaaS founder.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Founder-led — you work directly with the engineer building your system",
                            "In-house offensive security (AD abuse paths, web app, network)",
                            "Reports formatted for SOC 2 and carrier vendor-security reviews",
                            "MITRE ATT&CK technique mapping on every finding",
                            "Modern Next.js / TypeScript / PostgreSQL / Docker stack",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work remotely with Columbus teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Columbus runs on Eastern Time, the same as our Macon, Georgia headquarters, so we share the entire business day — no awkward windows for standups, reviews, or same-day questions. Most engagements start with a 60-minute scope by video. For engagements above roughly $25k we travel to Columbus for an on-site kickoff and for internal pen tests that require physical network access. Build cycles run weekly with a Friday staging URL, written notes, and the next-week plan. Pen test reports are delivered in two formats: a technical deliverable with reproduction steps and remediation detail for the security team, and a board-readable executive summary with a prioritized remediation roadmap. Fixed-scope, fixed-price proposals on most engagements; full code, database, and infrastructure handover at acceptance.
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
                        industries={["insurance","e-commerce","saas","fintech"]}
                        heading="Industries we serve in Columbus"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["build-vs-buy","crm","pentest"]}
                        pinned={["build-vs-buy-software-2026","custom-crm-development-guide","what-is-penetration-testing"]}
                        heading="Reading for Columbus founders"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services & nearby cities</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "Claims tooling and ops dashboards." },
                            { href: "/services/custom-crm-development", title: "Custom CRM Development", desc: "Purpose-built CRMs for agencies." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, network, and AD engagements." },
                            { href: "/services/mitre-attack-assessment", title: "MITRE ATT&CK Assessment", desc: "Full attack-chain mapping and reporting." },
                            { href: "/services/ecommerce-development", title: "E-Commerce Development", desc: "Custom carts and fulfillment dashboards." },
                            { href: "/services/stripe-integration", title: "Stripe Integration", desc: "Subscription billing and licensing." },
                            { href: "/blog/build-vs-buy-software-2026", title: "Build vs Buy Software 2026", desc: "Three-year TCO decision framework." },
                            { href: "/blog/custom-crm-vs-salesforce-vs-hubspot-2026", title: "Custom CRM vs Salesforce 2026", desc: "Capability and pricing comparison." },
                            { href: "/software-development-cleveland-oh", title: "Cleveland, OH", desc: "Healthcare and manufacturing software." },
                            { href: "/software-development-cincinnati-oh", title: "Cincinnati, OH", desc: "CPG, fintech, and ops tooling." },
                            { href: "/industries/insurance", title: "Insurance Software", desc: "Policy, claims, and broker portals." },
                            { href: "/contact", title: "Start a Project", desc: "Scoping calls, fixed-quote proposals." },
                        ].map((s) => (
                            <Link
                                key={s.href}
                                href={s.href}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Talk Columbus projects.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or email <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a> to discuss Columbus engagements.
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
