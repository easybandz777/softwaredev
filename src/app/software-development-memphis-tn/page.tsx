import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { RelatedIndustries } from "@/components/RelatedIndustries";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Memphis TN Software Development & Pen Testing | QUANT LAB USA",
    description:
        "Memphis custom software for logistics, healthcare, and distribution — plus penetration testing rooted in MITRE ATT&CK. Founder-led, remote-first from Macon. Call (770) 652-1282.",
    slug: "software-development-memphis-tn",
    image: "/og-image.png",
    type: "article",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-memphis-tn#localbusiness",
    name: "QUANT LAB USA — Memphis Coverage",
    url: "https://quantlabusa.dev/software-development-memphis-tn",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Memphis", containedInPlace: { "@type": "State", name: "Tennessee" } },
        { "@type": "City", name: "Germantown" },
        { "@type": "City", name: "Collierville" },
        { "@type": "City", name: "Bartlett" },
        { "@type": "City", name: "Southaven" },
        { "@type": "AdministrativeArea", name: "Shelby County" },
        { "@type": "AdministrativeArea", name: "DeSoto County" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 35.1495, longitude: -90.0490 },
    address: { "@type": "PostalAddress", addressLocality: "Memphis", addressRegion: "TN", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Penetration Testing",
    name: "Custom Software Development & Penetration Testing in Memphis, TN",
    provider: {
        "@id": "https://quantlabusa.dev/#organization",
        "@type": "Organization",
        name: "QUANT LAB USA",
    },
    areaServed: { "@type": "City", name: "Memphis", containedInPlace: { "@type": "State", name: "Tennessee" } },
    description:
        "Logistics and distribution dashboards, healthcare platforms, Stripe billing, and full-scope penetration testing for Memphis operators.",
    url: "https://quantlabusa.dev/software-development-memphis-tn",
};

const services = [
    {
        title: "Logistics & Distribution Dashboards",
        desc: "Real-time dispatch, freight tracking, last-mile, and warehouse inventory tooling for the global logistics capital. Typical: $25k–$90k.",
    },
    {
        title: "Healthcare Intake & Operations Platforms",
        desc: "HIPAA-aware intake, scheduling, and dashboards for the Memphis medical district and St. Jude ecosystem. Typical: $25k–$80k.",
    },
    {
        title: "Penetration Testing (Web, Network, AD)",
        desc: "Full engagements with formal reports for SOC 2, PCI, and vendor security reviews. Typical: $8k–$28k.",
    },
    {
        title: "Stripe & Subscription Billing",
        desc: "Subscription billing, metered usage, multi-tenant entitlements, and dispute workflows. Typical: $8k–$28k.",
    },
    {
        title: "Custom CRMs & Operations Dashboards",
        desc: "Replace a HubSpot or Salesforce stack with software you own. Typical: $20k–$70k.",
    },
    {
        title: "API & Integration Layers",
        desc: "Connect legacy WMS, TMS, and ERP feeds into a single source of truth. Typical: $15k–$60k.",
    },
];

const faqs = [
    {
        q: "Do you work with Memphis logistics and distribution operators?",
        a: "Yes — Memphis is the global logistics capital, home to the FedEx world hub and a dense distribution and third-party-logistics base. Dispatch, freight-tracking, last-mile, and warehouse inventory tooling are core to our Memphis work, and we consolidate legacy WMS and TMS feeds into a single real-time dashboard.",
    },
    {
        q: "Do you serve the Memphis medical district and healthcare ecosystem?",
        a: "Yes — the Memphis medical district, St. Jude Children's Research Hospital, and the regional hospital systems anchor a major healthcare economy. We build HIPAA-aware intake, scheduling, and operations dashboards with protected health information kept in BAA-eligible infrastructure.",
    },
    {
        q: "Are you based in Memphis?",
        a: "We are headquartered in Macon, Georgia and serve Memphis remote-first across the Central Time zone — Macon keeps a one-hour offset and full working-day overlap. For major builds and on-site network pen tests we travel to Shelby and DeSoto counties. We do not claim a physical Memphis office.",
    },
    {
        q: "Can you support a SOC 2 or vendor security review?",
        a: "Yes — our pen testing reports map to SOC 2 CC controls, PCI requirements, and supply-chain and vendor due-diligence questionnaires. We schedule pre-audit tests 60–90 days ahead of your window.",
    },
    {
        q: "Do you build integrations across logistics and ERP systems?",
        a: "Yes — most distribution operators run a patchwork of WMS, TMS, and ERP systems. We build the API and integration layers that unify them, so dispatch, inventory, and billing draw from one reliable source of truth.",
    },
    {
        q: "What pen testing methodology do you use?",
        a: "Our framework is MITRE ATT&CK end-to-end. Every finding is mapped to a technique ID. We run eleven attack modules covering recon, credential spraying, Kerberoasting, ADCS abuse, lateral movement, and C2 infrastructure.",
    },
    {
        q: "What is your typical timeline for a Memphis MVP?",
        a: "Most Memphis SaaS and ops platforms ship a usable MVP in 8–12 weeks on a fixed-scope quote. Full builds run 3–6 months. A standalone external pen test runs 2–3 weeks including reporting.",
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
        { "@type": "ListItem", position: 3, name: "Software Development Memphis, TN", item: "https://quantlabusa.dev/software-development-memphis-tn" },
    ],
};

export default function MemphisLandingPage() {
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
                        <li className="text-gray-300">Memphis, TN</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development &amp; Penetration Testing in Memphis, TN
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Memphis is the logistics capital of the world — the FedEx world hub, the fourth-busiest cargo airport on the planet, and a river-rail-road crossroads that moves a huge share of US freight. That distribution density, plus a major medical economy, creates two constant needs: serious custom software, and serious security around it.
                    </p>
                    <ConsultationCTA label="Talk Through a Memphis Build" city="Memphis, TN" source="city-memphis" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA delivers both, from a Macon, Georgia HQ that keeps a one-hour offset to Memphis&apos;s Central Time and a full working-day overlap. We serve Memphis remote-first, with travel into Shelby and DeSoto counties for major builds and on-site network work. Our clients there typically need the same things: logistics dashboards that unify legacy systems, integration layers across WMS and TMS feeds, pen test reports that survive a vendor review, and a single accountable engineer who picks up the phone.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Memphis businesses choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Memphis runs on movement. The FedEx world hub anchors the largest cargo operation in the hemisphere, and the surrounding distribution, warehousing, and third-party-logistics base — feeding the river port, five Class I railroads, and the interstate crossroads — generates relentless demand for dispatch, freight-tracking, last-mile, and inventory software. The medical economy is the other pillar: the Memphis medical district, St. Jude Children&apos;s Research Hospital, and regional hospital systems sustain a large healthcare base that needs intake, scheduling, and operations tooling. Add consumer-goods and distribution headquarters across Germantown and Collierville, and you have a metro whose software needs are dominated by logistics complexity and healthcare compliance.
                        </p>
                        <p>
                            Most Memphis shops are either large logistics-IT integrators or solo freelancers. We sit in the middle: founder-led delivery with enterprise-grade engineering practices and in-house offensive security. No offshore handoff and no junior outsourcing — William Beltz scopes, builds, and ships. That matters when a distribution operator needs a real-time dashboard that does not buckle at peak volume, or when a medical-district operator needs both a HIPAA-aware platform and a pen test report that maps to their compliance obligations.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for Memphis clients</h2>
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
                            Memphis buyers want senior accountability without consultancy overhead. Our model delivers exactly that: every engagement is scoped, built, and shipped by the founder, on a fixed-scope and fixed-price proposal with a written acceptance milestone — not open-ended time-and-materials billing. Our pen testing is in-house capability, not a subcontracted line item: Active Directory abuse paths, lateral movement, ADCS certificate abuse, Kerberoasting, wireless attacks, and web application exploitation, with every finding mapped to a MITRE ATT&amp;CK technique ID. And every line of software we ship is reviewed against the same threat models we use on offensive engagements.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Macon-based, full working-day overlap with Memphis teams",
                            "Logistics, distribution, and healthcare specialization",
                            "Pen test reports that map to SOC 2 and vendor security reviews",
                            "In-house offensive security capability (AD abuse paths, wireless, ADCS, web app)",
                            "Fixed-scope quotes — no T&M billing surprises",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work with Memphis teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            We work from Macon on a one-hour offset to Memphis&apos;s Central Time, which still leaves a full working-day overlap for standups and reviews. Most kickoffs are a video call followed by a single on-site afternoon — typically downtown, in the medical district, or out in Germantown and Collierville — to walk the workflow we are replacing. From there, build cycles run weekly: every Friday you get a deployed staging URL, written notes on what changed, and the next-week plan. Pen testing engagements run from secure remote infrastructure with strict source-IP allowlisting and authenticated VPN tunnels for internal scope, and we travel to Memphis for sensitive scoping and for internal tests requiring on-site network access. Reports ship in two formats: a technical deliverable with reproduction steps for the security team, and a board-readable executive summary with a prioritized remediation roadmap. Most Memphis engagements close inside 4–6 weeks from kickoff to final report.
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
                        industries={["manufacturing","healthcare","e-commerce","fintech"]}
                        heading="Industries we serve in Memphis"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["pentest","build-vs-buy","compliance"]}
                        pinned={["custom-crm-development-guide","soc2-pentest-prep-guide-2026","what-is-penetration-testing"]}
                        heading="Reading for Memphis founders"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services &amp; nearby cities</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "Logistics dashboards and ops tooling." },
                            { href: "/services/api-development", title: "API Development", desc: "Integrations across WMS, TMS, and ERP feeds." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, network, wireless, and AD engagements." },
                            { href: "/services/custom-crm-development", title: "Custom CRM Development", desc: "Own your CRM — don&apos;t rent it." },
                            { href: "/services/stripe-integration", title: "Stripe Integration", desc: "Subscription and billing systems." },
                            { href: "/services/network-pentest", title: "Network Penetration Testing", desc: "Internal and external network engagements." },
                            { href: "/blog/custom-crm-development-guide", title: "Custom CRM Development Guide", desc: "Pillar resource — build vs. buy, cost models." },
                            { href: "/blog/soc2-pentest-prep-guide-2026", title: "SOC 2 Pentest Prep Guide", desc: "Pre-audit testing mapped to CC controls." },
                            { href: "/blog/penetration-test-cost-2026", title: "Penetration Test Cost 2026", desc: "Pricing benchmarks and scope drivers." },
                            { href: "/software-development-nashville-tn", title: "Nashville, TN", desc: "Healthcare HQ and music tech." },
                            { href: "/software-development-dallas-tx", title: "Dallas, TX", desc: "Enterprise, fintech, and logistics." },
                            { href: "/contact", title: "Start a Project", desc: "Scoping calls, fixed-quote proposals." },
                        ].map((s) => (
                            <Link
                                key={s.href}
                                href={s.href}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-purple-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to talk Memphis?
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or email <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a> to talk through your Memphis build.
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
