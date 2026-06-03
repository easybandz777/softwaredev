import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { RelatedIndustries } from "@/components/RelatedIndustries";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Birmingham AL Software Development & Pen Testing | QUANT LAB USA",
    description:
        "Birmingham custom software for healthcare, finance, and insurance — plus penetration testing rooted in MITRE ATT&CK. Founder-led, remote-first from Macon. Call (770) 652-1282.",
    slug: "software-development-birmingham-al",
    image: "/og-image.png",
    type: "article",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-birmingham-al#localbusiness",
    name: "QUANT LAB USA — Birmingham Coverage",
    url: "https://quantlabusa.dev/software-development-birmingham-al",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Birmingham", containedInPlace: { "@type": "State", name: "Alabama" } },
        { "@type": "City", name: "Hoover" },
        { "@type": "City", name: "Vestavia Hills" },
        { "@type": "City", name: "Homewood" },
        { "@type": "City", name: "Tuscaloosa" },
        { "@type": "AdministrativeArea", name: "Jefferson County" },
        { "@type": "AdministrativeArea", name: "Shelby County" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 33.5186, longitude: -86.8104 },
    address: { "@type": "PostalAddress", addressLocality: "Birmingham", addressRegion: "AL", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Penetration Testing",
    name: "Custom Software Development & Penetration Testing in Birmingham, AL",
    provider: {
        "@id": "https://quantlabusa.dev/#organization",
        "@type": "Organization",
        name: "QUANT LAB USA",
    },
    areaServed: { "@type": "City", name: "Birmingham", containedInPlace: { "@type": "State", name: "Alabama" } },
    description:
        "HIPAA-aware healthcare platforms, fintech-grade Stripe billing, insurance and ops dashboards, and full-scope penetration testing for Birmingham operators.",
    url: "https://quantlabusa.dev/software-development-birmingham-al",
};

const services = [
    {
        title: "Healthcare Intake & Operations Platforms",
        desc: "HIPAA-aware intake, scheduling, and dashboards for the UAB Medicine and biotech ecosystem. Typical: $25k–$90k.",
    },
    {
        title: "Fintech-grade Stripe & Billing Systems",
        desc: "Subscription billing, metered usage, multi-tenant entitlements, and dispute workflows. Typical: $10k–$35k.",
    },
    {
        title: "Insurance & Claims Platforms",
        desc: "Policy management, claims, broker portals, and document workflows for Birmingham&apos;s insurance and benefits base. Typical: $25k–$90k.",
    },
    {
        title: "Penetration Testing for SOC 2 & HIPAA",
        desc: "Web app, network, wireless, AD, and MITRE ATT&CK engagements ahead of your next audit. Typical: $8k–$28k.",
    },
    {
        title: "Custom CRMs & Operations Dashboards",
        desc: "Replace a HubSpot or Salesforce stack with software you own. Typical: $20k–$70k.",
    },
    {
        title: "MITRE ATT&CK Assessments",
        desc: "Attack-chain documentation mapped to MITRE techniques for executive and security teams. Typical: $12k–$35k.",
    },
];

const faqs = [
    {
        q: "Do you serve the UAB Medicine and healthcare ecosystem?",
        a: "Yes — UAB anchors one of the largest academic medical centers in the country, and healthcare is the city's biggest employer. We build HIPAA-aware intake, scheduling, and operations dashboards, with protected health information kept in BAA-eligible infrastructure and audit-friendly logging.",
    },
    {
        q: "Do you work with Birmingham finance and fintech firms?",
        a: "Yes — Birmingham has a deep banking and financial-services history, and Stripe Connect, ACH, and PCI-adjacent architectures are core to our practice. Most of our local fintech work comes from the downtown and US-280 corridor operators.",
    },
    {
        q: "Do you build for the insurance and benefits industry here?",
        a: "Yes — Birmingham is a significant insurance and employee-benefits center, and we build policy management, claims, broker portals, and document-automation platforms designed around carrier audit and retention requirements.",
    },
    {
        q: "Are you based in Birmingham?",
        a: "We are headquartered in Macon, Georgia and serve Birmingham remote-first across the Central Time zone — Macon keeps a one-hour offset and full working-day overlap. For major builds and on-site network pen tests we travel to Jefferson and Shelby counties. We do not claim a physical Birmingham office.",
    },
    {
        q: "Can you support a SOC 2 or HIPAA readiness window?",
        a: "Yes — our pen testing reports map to SOC 2 CC controls and to HIPAA security-rule expectations, plus customer due-diligence questionnaires. We schedule pre-audit tests 60–90 days ahead of your window.",
    },
    {
        q: "What pen testing methodology do you use?",
        a: "Our framework is MITRE ATT&CK end-to-end. Every finding is mapped to a technique ID. We run eleven attack modules covering recon, credential spraying, Kerberoasting, ADCS abuse, lateral movement, and C2 infrastructure.",
    },
    {
        q: "What is your typical timeline for a Birmingham MVP?",
        a: "Most Birmingham SaaS and ops platforms ship a usable MVP in 8–12 weeks on a fixed-scope quote. Full builds run 3–6 months. A standalone external pen test runs 2–3 weeks including reporting.",
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
        { "@type": "ListItem", position: 3, name: "Software Development Birmingham, AL", item: "https://quantlabusa.dev/software-development-birmingham-al" },
    ],
};

export default function BirminghamLandingPage() {
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
                        <li className="text-gray-300">Birmingham, AL</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development &amp; Penetration Testing in Birmingham, AL
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Birmingham reinvented itself from a steel town into Alabama&apos;s medical, financial, and insurance capital, anchored by UAB Medicine and a deep banking history. Those regulated industries create two constant needs: serious custom software, and serious security around it.
                    </p>
                    <ConsultationCTA label="Talk Through a Birmingham Build" city="Birmingham, AL" source="city-birmingham" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA pairs custom software engineering with hands-on penetration testing rooted in the MITRE ATT&amp;CK framework. We are a Macon, Georgia firm serving Birmingham remote-first — Macon keeps a one-hour offset to Central Time and full working-day overlap — with travel into Jefferson and Shelby counties for major builds and on-site network work. Birmingham operators in healthcare, finance, and insurance typically need the same things: HIPAA-aware and PCI-aware platforms, ops dashboards that unify legacy systems, and pen test reports that survive a compliance audit.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Birmingham businesses choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Birmingham&apos;s economy is anchored by regulated industries. UAB and UAB Medicine are the largest employer in Alabama, driving an academic-medical and biotech ecosystem — including the Southern Research and Innovation Depot startup scene — that runs on intake, scheduling, and clinical operations software. The city has a deep financial-services history and remains a regional banking and payments center. Birmingham is also one of the South&apos;s notable insurance and employee-benefits hubs, with carriers and benefits administrators that need policy, claims, and broker software. Layer in the engineering base around the US-280 corridor and Hoover, plus the University of Alabama an hour away in Tuscaloosa, and you have a metro whose software needs are dominated by compliance-sensitive verticals.
                        </p>
                        <p>
                            Most Birmingham shops are either large regional integrators or solo freelancers. We sit in the middle: founder-led delivery with enterprise-grade engineering practices and in-house offensive security. No offshore handoff and no junior outsourcing — William Beltz scopes, builds, and ships. That matters when a UAB-adjacent health operator needs a HIPAA-aware platform, or when an insurer needs both a custom claims system and a pen test report that maps to their compliance obligations.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for Birmingham clients</h2>
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
                            Birmingham buyers in regulated industries want senior accountability and a clean audit trail. Our model delivers exactly that: every engagement is scoped, built, and shipped by the founder, on a fixed-scope and fixed-price proposal with a written acceptance milestone — not open-ended time-and-materials billing. Our pen testing is in-house capability, not a subcontracted line item: Active Directory abuse paths, lateral movement, ADCS certificate abuse, Kerberoasting, wireless attacks, and web application exploitation, with every finding mapped to a MITRE ATT&amp;CK technique ID. And every line of software we ship is reviewed against the same threat models we use on offensive engagements.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Macon-based, full working-day overlap with Birmingham teams",
                            "Healthcare, finance, and insurance specialization",
                            "Pen test reports that map to SOC 2 and HIPAA expectations",
                            "In-house offensive security capability (AD abuse paths, wireless, ADCS, web app)",
                            "Fixed-scope quotes — no T&M billing surprises",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work with Birmingham teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            We work from Macon on a one-hour offset to Birmingham&apos;s Central Time, which still leaves a full working-day overlap for standups and reviews. Most kickoffs are a video call followed by a single on-site afternoon — typically downtown, in Hoover, or along the US-280 corridor — to walk the workflow we are replacing. From there, build cycles run weekly: every Friday you get a deployed staging URL, written notes on what changed, and the next-week plan. Pen testing engagements run from secure remote infrastructure with strict source-IP allowlisting and authenticated VPN tunnels for internal scope, and we travel to Birmingham for sensitive scoping and for internal tests requiring on-site network access. Reports ship in two formats: a technical deliverable with reproduction steps for the security team, and a board-readable executive summary with a prioritized remediation roadmap. Most Birmingham engagements close inside 4–6 weeks from kickoff to final report.
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
                        industries={["healthcare","fintech","insurance","saas"]}
                        heading="Industries we serve in Birmingham"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["pentest","compliance","build-vs-buy"]}
                        pinned={["soc2-pentest-prep-guide-2026","custom-crm-development-guide","what-is-penetration-testing"]}
                        heading="Reading for Birmingham founders"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services &amp; nearby cities</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "Healthcare and ops tooling built around your workflow." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, network, wireless, and AD engagements." },
                            { href: "/services/mitre-attack-assessment", title: "MITRE ATT&CK Assessment", desc: "Full attack-chain mapping and reporting." },
                            { href: "/services/stripe-integration", title: "Stripe Integration", desc: "Subscription and billing systems." },
                            { href: "/services/custom-crm-development", title: "Custom CRM Development", desc: "Own your CRM — don&apos;t rent it." },
                            { href: "/services/network-pentest", title: "Network Penetration Testing", desc: "Internal and external network engagements." },
                            { href: "/blog/soc2-pentest-prep-guide-2026", title: "SOC 2 Pentest Prep Guide", desc: "Pre-audit testing mapped to CC controls." },
                            { href: "/blog/custom-crm-development-guide", title: "Custom CRM Development Guide", desc: "Pillar resource — build vs. buy, cost models." },
                            { href: "/blog/penetration-test-cost-2026", title: "Penetration Test Cost 2026", desc: "Pricing benchmarks and scope drivers." },
                            { href: "/software-development-atlanta-ga", title: "Atlanta, GA", desc: "Fintech, logistics, and SaaS." },
                            { href: "/software-development-nashville-tn", title: "Nashville, TN", desc: "Healthcare HQ and music tech." },
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
                            Ready to talk Birmingham?
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or email <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a> to talk through your Birmingham build.
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
