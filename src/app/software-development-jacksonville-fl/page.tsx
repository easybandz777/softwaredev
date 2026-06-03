import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { RelatedIndustries } from "@/components/RelatedIndustries";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Jacksonville FL Software Development & Pen Testing | QUANT LAB USA",
    description:
        "Jacksonville custom software for finance, logistics, insurance, and healthcare — plus penetration testing rooted in MITRE ATT&CK. Founder-led, remote-first. Call (770) 652-1282.",
    slug: "software-development-jacksonville-fl",
    image: "/og-image.png",
    type: "article",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-jacksonville-fl#localbusiness",
    name: "QUANT LAB USA — Jacksonville Coverage",
    url: "https://quantlabusa.dev/software-development-jacksonville-fl",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Jacksonville", containedInPlace: { "@type": "State", name: "Florida" } },
        { "@type": "City", name: "Jacksonville Beach" },
        { "@type": "City", name: "Orange Park" },
        { "@type": "City", name: "St. Augustine" },
        { "@type": "City", name: "Fernandina Beach" },
        { "@type": "AdministrativeArea", name: "Duval County" },
        { "@type": "AdministrativeArea", name: "St. Johns County" },
        { "@type": "AdministrativeArea", name: "Clay County" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 30.3322, longitude: -81.6557 },
    address: { "@type": "PostalAddress", addressLocality: "Jacksonville", addressRegion: "FL", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Penetration Testing",
    name: "Custom Software Development & Penetration Testing in Jacksonville, FL",
    provider: {
        "@id": "https://quantlabusa.dev/#organization",
        "@type": "Organization",
        name: "QUANT LAB USA",
    },
    areaServed: { "@type": "City", name: "Jacksonville", containedInPlace: { "@type": "State", name: "Florida" } },
    description:
        "Logistics dashboards, fintech-grade Stripe billing, insurance and healthcare platforms, and full-scope penetration testing for Jacksonville operators.",
    url: "https://quantlabusa.dev/software-development-jacksonville-fl",
};

const services = [
    {
        title: "Logistics & Port Operations Dashboards",
        desc: "Real-time dispatch, freight tracking, and warehouse inventory tools for operators feeding JAXPORT. Typical: $25k–$80k.",
    },
    {
        title: "Fintech-grade Stripe & Billing Systems",
        desc: "Subscription billing, metered usage, multi-tenant entitlements, and dispute workflows for downtown finance operators. Typical: $10k–$35k.",
    },
    {
        title: "Insurance & Claims Platforms",
        desc: "Policy management, claims, broker portals, and document workflows for Jacksonville&apos;s insurance base. Typical: $25k–$90k.",
    },
    {
        title: "Penetration Testing for SOC 2 & PCI",
        desc: "Web app, network, wireless, AD, and MITRE ATT&CK engagements ahead of your next audit. Typical: $8k–$28k.",
    },
    {
        title: "Healthcare Intake & Operations Tooling",
        desc: "HIPAA-aware intake, scheduling, and dashboards for the Baptist, Mayo Clinic, and UF Health ecosystem. Typical: $25k–$80k.",
    },
    {
        title: "Custom CRMs for Mid-Market",
        desc: "Replace a HubSpot or Salesforce stack with software you own. Typical: $25k–$90k.",
    },
];

const faqs = [
    {
        q: "Do you work with Jacksonville logistics and port operators?",
        a: "Yes — JAXPORT and the rail-and-trucking complex around it generate steady demand for dispatch, freight-tracking, and warehouse inventory tooling. We consolidate legacy WMS and TMS feeds into a single real-time dashboard.",
    },
    {
        q: "Do you work with Jacksonville finance and fintech firms?",
        a: "Yes — Stripe Connect, ACH, and PCI-adjacent architectures are core to our practice. Jacksonville&apos;s downtown and Southside finance corridor is dense with banks, payment operators, and the FIS headquarters ecosystem.",
    },
    {
        q: "Do you build for the insurance industry here?",
        a: "Yes — Jacksonville is a major insurance hub, and we build policy management, claims, broker portals, and document-automation platforms. We design around the audit and retention requirements carriers face.",
    },
    {
        q: "Are you based in Jacksonville?",
        a: "We are headquartered in Macon, Georgia and serve Jacksonville remote-first across the same Eastern Time zone — and it is a straight shot down I-75 and I-10. For major builds and on-site network pen tests we travel to Duval, St. Johns, and Clay counties. We do not claim a physical Jacksonville office.",
    },
    {
        q: "Can you support a SOC 2 or PCI readiness window?",
        a: "Yes — our pen testing reports map to SOC 2 CC controls and PCI requirements, and to customer due-diligence questionnaires. We schedule pre-audit tests 60–90 days ahead of your window.",
    },
    {
        q: "What pen testing methodology do you use?",
        a: "Our framework is MITRE ATT&CK end-to-end. Every finding is mapped to a technique ID. We run eleven attack modules covering recon, credential spraying, Kerberoasting, ADCS abuse, lateral movement, and C2 infrastructure.",
    },
    {
        q: "What is your typical timeline for a Jacksonville MVP?",
        a: "Most Jacksonville SaaS and ops platforms ship a usable MVP in 8–12 weeks on a fixed-scope quote. Full builds run 3–6 months. A standalone external pen test runs 2–3 weeks including reporting.",
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
        { "@type": "ListItem", position: 3, name: "Software Development Jacksonville, FL", item: "https://quantlabusa.dev/software-development-jacksonville-fl" },
    ],
};

export default function JacksonvilleLandingPage() {
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
                        <li className="text-gray-300">Jacksonville, FL</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development &amp; Penetration Testing in Jacksonville, FL
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Jacksonville is Florida&apos;s logistics and finance powerhouse — a deep-water port, three Class I railroads, a major insurance and banking base, and a growing health-systems economy. That mix creates two constant needs: serious custom software, and serious security around it.
                    </p>
                    <ConsultationCTA label="Talk Through a Jacksonville Build" city="Jacksonville, FL" source="city-jacksonville" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA delivers both, from a Macon, Georgia HQ that shares Jacksonville&apos;s Eastern Time zone and sits a straight shot up I-10 and I-75. We serve Jacksonville remote-first, with travel into Duval, St. Johns, and Clay counties for major builds and on-site network work. Our clients there typically need the same things: logistics dashboards that unify legacy systems, Stripe-grade billing, pen test reports that survive procurement, and a single accountable engineer who picks up the phone.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Jacksonville businesses choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Jacksonville&apos;s economy is built on movement and money. JAXPORT is one of the busiest container and vehicle ports in the southeast, and the rail-and-trucking complex around it — served by CSX, which is headquartered downtown — generates constant demand for dispatch, freight-tracking, and warehouse inventory software. The finance corridor is just as deep: FIS anchors a fintech base, and the city is one of the largest insurance employment centers in the country, with carriers and broker operations across the Southside and downtown. Layer in the Baptist Health, Mayo Clinic, and UF Health systems, plus a large Navy presence at Naval Air Station Jacksonville and Mayport, and you have a metro with broad, sophisticated software needs.
                        </p>
                        <p>
                            Most Jacksonville shops are either large enterprise integrators or solo freelancers. We sit in the middle: founder-led delivery with enterprise-grade engineering practices and in-house offensive security. No offshore handoff and no junior outsourcing — William Beltz scopes, builds, and ships. That matters when a logistics operator needs a real-time dashboard that does not buckle at scale, or when an insurer needs both a custom claims platform and a pen test report that maps to their compliance obligations.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for Jacksonville clients</h2>
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
                            Jacksonville buyers want senior accountability without consultancy overhead. Our model delivers exactly that: every engagement is scoped, built, and shipped by the founder, on a fixed-scope and fixed-price proposal with a written acceptance milestone — not open-ended time-and-materials billing. Our pen testing is in-house capability, not a subcontracted line item: Active Directory abuse paths, lateral movement, ADCS certificate abuse, Kerberoasting, wireless attacks, and web application exploitation, with every finding mapped to a MITRE ATT&amp;CK technique ID. And every line of software we ship is reviewed against the same threat models we use on offensive engagements.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Macon-based, full Eastern Time overlap and a straight shot down I-75/I-10",
                            "Logistics, fintech, insurance, and healthcare specialization",
                            "Pen test reports that map directly to SOC 2 and PCI requirements",
                            "In-house offensive security capability (AD abuse paths, wireless, ADCS, web app)",
                            "Fixed-scope quotes — no T&M billing surprises",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work with Jacksonville teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            We run full Eastern Time overlap from Macon, which keeps standups and reviews on Jacksonville&apos;s clock. Most kickoffs are a video call followed by a single on-site afternoon — typically downtown, on the Southside, or near the beaches — to walk the workflow we are replacing. From there, build cycles run weekly: every Friday you get a deployed staging URL, written notes on what changed, and the next-week plan. Pen testing engagements run from secure remote infrastructure with strict source-IP allowlisting and authenticated VPN tunnels for internal scope, and we travel to Jacksonville for sensitive scoping and for internal tests requiring on-site network access. Reports ship in two formats: a technical deliverable with reproduction steps for the security team, and a board-readable executive summary with a prioritized remediation roadmap. Most Jacksonville engagements close inside 4–6 weeks from kickoff to final report.
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
                        industries={["insurance","fintech","healthcare","manufacturing"]}
                        heading="Industries we serve in Jacksonville"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["pentest","compliance","build-vs-buy"]}
                        pinned={["soc2-pentest-prep-guide-2026","custom-crm-development-guide","what-is-penetration-testing"]}
                        heading="Reading for Jacksonville founders"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services &amp; nearby cities</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "Logistics dashboards and ops tooling." },
                            { href: "/services/custom-crm-development", title: "Custom CRM Development", desc: "Own your CRM — don&apos;t rent it." },
                            { href: "/services/stripe-integration", title: "Stripe Integration", desc: "Subscription and billing systems." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, network, wireless, and AD engagements." },
                            { href: "/services/network-pentest", title: "Network Penetration Testing", desc: "Internal and external network engagements." },
                            { href: "/services/api-development", title: "API Development", desc: "Integrations across WMS, TMS, and ERP feeds." },
                            { href: "/blog/soc2-pentest-prep-guide-2026", title: "SOC 2 Pentest Prep Guide", desc: "Pre-audit testing mapped to CC controls." },
                            { href: "/blog/custom-crm-development-guide", title: "Custom CRM Development Guide", desc: "Pillar resource — build vs. buy, cost models." },
                            { href: "/blog/penetration-test-cost-2026", title: "Penetration Test Cost 2026", desc: "Pricing benchmarks and scope drivers." },
                            { href: "/software-development-orlando-fl", title: "Orlando, FL", desc: "Tourism, simulation, and healthcare." },
                            { href: "/software-development-savannah-ga", title: "Savannah, GA", desc: "Port logistics up I-95." },
                            { href: "/contact", title: "Start a Project", desc: "Scoping calls, fixed-quote proposals." },
                        ].map((s) => (
                            <Link
                                key={s.href}
                                href={s.href}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-blue-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to talk Jacksonville?
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or email <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a> to talk through your Jacksonville build.
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
