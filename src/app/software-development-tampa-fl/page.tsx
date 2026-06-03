import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { RelatedIndustries } from "@/components/RelatedIndustries";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Tampa FL Software Development & Pen Testing | QUANT LAB USA",
    description:
        "Tampa Bay custom software for finance, healthcare, and defense-adjacent firms — plus penetration testing rooted in MITRE ATT&CK. Founder-led, remote-first. Call (770) 652-1282.",
    slug: "software-development-tampa-fl",
    image: "/og-image.png",
    type: "article",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-tampa-fl#localbusiness",
    name: "QUANT LAB USA — Tampa Coverage",
    url: "https://quantlabusa.dev/software-development-tampa-fl",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Tampa", containedInPlace: { "@type": "State", name: "Florida" } },
        { "@type": "City", name: "St. Petersburg" },
        { "@type": "City", name: "Clearwater" },
        { "@type": "City", name: "Brandon" },
        { "@type": "City", name: "Wesley Chapel" },
        { "@type": "AdministrativeArea", name: "Hillsborough County" },
        { "@type": "AdministrativeArea", name: "Pinellas County" },
        { "@type": "AdministrativeArea", name: "Pasco County" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 27.9506, longitude: -82.4572 },
    address: { "@type": "PostalAddress", addressLocality: "Tampa", addressRegion: "FL", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Penetration Testing",
    name: "Custom Software Development & Penetration Testing in Tampa, FL",
    provider: {
        "@id": "https://quantlabusa.dev/#organization",
        "@type": "Organization",
        name: "QUANT LAB USA",
    },
    areaServed: { "@type": "City", name: "Tampa", containedInPlace: { "@type": "State", name: "Florida" } },
    description:
        "Fintech-grade Stripe, operations dashboards, healthcare platforms, and full-scope penetration testing for Tampa Bay finance, health, and defense-adjacent operators.",
    url: "https://quantlabusa.dev/software-development-tampa-fl",
};

const services = [
    {
        title: "Fintech-grade Stripe & Billing Systems",
        desc: "Subscription billing, metered usage, multi-tenant entitlements, and dispute workflows for Tampa finance operators. Typical: $10k–$35k.",
    },
    {
        title: "Penetration Testing for SOC 2",
        desc: "Web app, network, wireless, AD, and MITRE ATT&CK engagements ahead of your next SOC 2 audit. Typical: $8k–$28k.",
    },
    {
        title: "Custom CRMs & Operations Dashboards",
        desc: "Purpose-built tooling for Westshore finance, USF Health systems, and Brandon services firms. Typical: $20k–$70k.",
    },
    {
        title: "Healthcare Intake & Scheduling Platforms",
        desc: "HIPAA-aware intake, scheduling, and ops dashboards for the BayCare and USF Health ecosystem. Typical: $25k–$80k.",
    },
    {
        title: "MITRE ATT&CK Assessments",
        desc: "Attack-chain documentation mapped to MITRE techniques for executive and security teams. Typical: $12k–$35k.",
    },
    {
        title: "Custom Software for Defense-Adjacent Vendors",
        desc: "Scoped per requirement — most are unclassified support for contractors around the MacDill ecosystem. Typical: $25k–$120k.",
    },
];

const faqs = [
    {
        q: "Do you work with Tampa finance and fintech firms?",
        a: "Yes — Stripe Connect, ACH, and PCI-adjacent architectures are core to our practice. The Westshore and downtown finance corridor is dense with banks, insurers, and payment operators, and that is where most of our local fintech work originates.",
    },
    {
        q: "Can you support a SOC 2 readiness window?",
        a: "Yes — our pen testing reports map to SOC 2 CC controls and customer due-diligence questionnaires. We schedule pre-audit tests 60–90 days ahead of your Type I window.",
    },
    {
        q: "Do you serve the USF Health and BayCare healthcare ecosystem?",
        a: "Yes — we build HIPAA-aware intake, scheduling, and operations dashboards. Protected health information stays in BAA-eligible infrastructure with encrypted flows and audit-friendly logging.",
    },
    {
        q: "Are you based in Tampa?",
        a: "We are headquartered in Macon, Georgia and serve Tampa Bay remote-first across the same Eastern Time zone. For major builds and on-site network pen tests we travel to Hillsborough, Pinellas, and Pasco counties. We do not claim a physical Tampa office.",
    },
    {
        q: "Do you work with defense-adjacent contractors around MacDill?",
        a: "We scope this case-by-case. Tampa hosts a deep bench of contractors supporting the commands at MacDill Air Force Base, and most of our work for them is unclassified software and security support. Clearance status is discussed under NDA, not on a public page.",
    },
    {
        q: "What pen testing methodology do you use?",
        a: "Our framework is MITRE ATT&CK end-to-end. Every finding is mapped to a technique ID. We run eleven attack modules covering recon, credential spraying, Kerberoasting, ADCS abuse, lateral movement, and C2 infrastructure.",
    },
    {
        q: "What is your typical timeline for a Tampa MVP?",
        a: "Most Tampa SaaS and ops platforms ship a usable MVP in 8–12 weeks on a fixed-scope quote. Full builds run 3–6 months. A standalone external pen test runs 2–3 weeks including reporting; a full internal-plus-external with AD scope runs 4–6 weeks.",
    },
    {
        q: "Do you offer ongoing maintenance after launch?",
        a: "Yes — monthly retainers cover hosting, security patching, and small feature work, or you can take the codebase fully in-house. No lock-in.",
    },
];

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Locations", item: "https://quantlabusa.dev/locations" },
        { "@type": "ListItem", position: 3, name: "Software Development Tampa, FL", item: "https://quantlabusa.dev/software-development-tampa-fl" },
    ],
};

export default function TampaLandingPage() {
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
                        <li className="text-gray-300">Tampa, FL</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development &amp; Penetration Testing in Tampa, FL
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Tampa Bay has become one of the southeast&apos;s fastest-growing finance and tech hubs, with a Westshore banking corridor, a major health-systems base, and a deep bench of defense-adjacent contractors. That density creates two constant needs: serious custom software, and serious security around it.
                    </p>
                    <ConsultationCTA label="Talk Through a Tampa Build" city="Tampa, FL" source="city-tampa" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA delivers both, from a Macon, Georgia HQ that shares Tampa&apos;s Eastern Time zone. We serve Tampa Bay remote-first, with travel into Hillsborough, Pinellas, and Pasco counties for major builds and on-site network work. Our clients there typically need the same things: Stripe-grade billing, real-time operations dashboards, pen test reports that survive procurement and SOC 2 review, and a single accountable engineer who picks up the phone.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Tampa businesses choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Tampa Bay&apos;s software demand spans finance, health, and defense. The Westshore business district is the largest office market in Florida, dense with banks, insurers, and payment processors, and downtown Tampa&apos;s Water Street development has pulled fintech and professional-services tenants into a redeveloped core. USF Health, Tampa General, Moffitt Cancer Center, and BayCare anchor a health-systems economy that runs on intake, scheduling, and operations software. MacDill Air Force Base — home to US Central Command and Special Operations Command — sustains a long bench of contractors and defense-adjacent vendors. Across the bay, St. Petersburg and Clearwater add a fast-growing startup and SaaS scene. The result is a metro with broad, sophisticated software needs and rising security expectations from buyers and regulators alike.
                        </p>
                        <p>
                            Most Tampa shops are either bloated consultancies or solo freelancers. We sit in the middle: founder-led delivery with enterprise-grade engineering practices and in-house offensive security. No offshore handoff and no junior outsourcing — William Beltz scopes, builds, and ships. That matters when you are pitching a Westshore bank and your security posture is part of the deal, or when a USF Health operator needs both a custom platform and a pen test report that maps to their compliance obligations.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for Tampa clients</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why founder-led delivery wins here</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Tampa procurement teams move fast and expect senior accountability. Our model delivers exactly that: every engagement is scoped, built, and shipped by the founder, on a fixed-scope and fixed-price proposal with a written acceptance milestone — not open-ended time-and-materials billing. Our pen testing is in-house capability, not a subcontracted line item: Active Directory abuse paths, lateral movement, ADCS certificate abuse, Kerberoasting, wireless attacks, and web application exploitation, with every finding mapped to a MITRE ATT&amp;CK technique ID. And every line of software we ship is reviewed against the same threat models we use on offensive engagements.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Macon-based, full Eastern Time overlap with Tampa Bay teams",
                            "Fintech, healthcare, defense-adjacent, and SaaS specialization",
                            "Pen test reports that map directly to SOC 2 CC controls",
                            "In-house offensive security capability (AD abuse paths, wireless, ADCS, web app)",
                            "Fixed-scope quotes — no T&M billing surprises",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work with Tampa teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            We run full Eastern Time overlap from Macon, which keeps standups and reviews on Tampa&apos;s clock. Most kickoffs are a video call followed by a single on-site afternoon — typically in Westshore, downtown, or across the bay in St. Petersburg — to walk the workflow we are replacing. From there, build cycles run weekly: every Friday you get a deployed staging URL, written notes on what changed, and the next-week plan. Pen testing engagements run from secure remote infrastructure with strict source-IP allowlisting and authenticated VPN tunnels for internal scope, and we travel to Tampa for sensitive scoping and for internal tests requiring on-site network access. Reports ship in two formats: a technical deliverable with reproduction steps for the security team, and a board-readable executive summary with a prioritized remediation roadmap. Most Tampa engagements close inside 4–6 weeks from kickoff to final report.
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
                        heading="Industries we serve in Tampa"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["pentest","compliance","stripe"]}
                        pinned={["soc2-pentest-prep-guide-2026","what-is-penetration-testing","nextjs-stripe-integration-guide"]}
                        heading="Reading for Tampa founders"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services &amp; nearby cities</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, network, wireless, and AD engagements." },
                            { href: "/services/mitre-attack-assessment", title: "MITRE ATT&CK Assessment", desc: "Full attack-chain mapping and reporting." },
                            { href: "/services/stripe-integration", title: "Stripe Integration", desc: "Subscription and licensing systems." },
                            { href: "/services/custom-crm-development", title: "Custom CRM Development", desc: "Own your CRM — don&apos;t rent it." },
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "CRMs and ops dashboards built around your workflow." },
                            { href: "/services/active-directory-pentest", title: "Active Directory Pen Test", desc: "Kerberoasting, ADCS abuse, lateral movement." },
                            { href: "/blog/soc2-pentest-prep-guide-2026", title: "SOC 2 Pentest Prep Guide", desc: "Pre-audit testing mapped to CC controls." },
                            { href: "/blog/what-is-penetration-testing", title: "What Is Penetration Testing?", desc: "A founder's buyer guide to pen testing." },
                            { href: "/blog/penetration-test-cost-2026", title: "Penetration Test Cost 2026", desc: "Pricing benchmarks and scope drivers." },
                            { href: "/software-development-orlando-fl", title: "Orlando, FL", desc: "Tourism, simulation, and healthcare." },
                            { href: "/software-development-miami-fl", title: "Miami, FL", desc: "Fintech, trade, and SaaS." },
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
                            Ready to talk Tampa?
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or email <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a> to talk through your Tampa build.
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
