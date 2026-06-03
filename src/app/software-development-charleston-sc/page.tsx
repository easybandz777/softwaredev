import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { RelatedIndustries } from "@/components/RelatedIndustries";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Charleston SC Software Development & Pen Testing | QUANT LAB USA",
    description:
        "Charleston custom software for tech, tourism, ports, and aerospace — plus penetration testing for SOC 2. Founder-led, remote-first from Macon. Call (770) 652-1282.",
    slug: "software-development-charleston-sc",
    image: "/og-image.png",
    type: "article",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-charleston-sc#localbusiness",
    name: "QUANT LAB USA — Charleston Coverage",
    url: "https://quantlabusa.dev/software-development-charleston-sc",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Charleston", containedInPlace: { "@type": "State", name: "South Carolina" } },
        { "@type": "City", name: "Mount Pleasant" },
        { "@type": "City", name: "North Charleston" },
        { "@type": "City", name: "Summerville" },
        { "@type": "City", name: "Daniel Island" },
        { "@type": "AdministrativeArea", name: "Charleston County" },
        { "@type": "AdministrativeArea", name: "Berkeley County" },
        { "@type": "AdministrativeArea", name: "Dorchester County" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 32.7765, longitude: -79.9311 },
    address: { "@type": "PostalAddress", addressLocality: "Charleston", addressRegion: "SC", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Penetration Testing",
    name: "Custom Software Development & Penetration Testing in Charleston, SC",
    provider: {
        "@id": "https://quantlabusa.dev/#organization",
        "@type": "Organization",
        name: "QUANT LAB USA",
    },
    areaServed: { "@type": "City", name: "Charleston", containedInPlace: { "@type": "State", name: "South Carolina" } },
    description:
        "Multi-tenant SaaS platforms, tourism and hospitality booking, port logistics dashboards, and full-scope penetration testing for Charleston operators.",
    url: "https://quantlabusa.dev/software-development-charleston-sc",
};

const services = [
    {
        title: "Multi-Tenant SaaS Platforms",
        desc: "Tenant isolation, onboarding, entitlements, and customer-success tooling for Silicon Harbor startups. Typical: $25k–$90k.",
    },
    {
        title: "Booking & Hospitality Platforms",
        desc: "Reservation engines, guest portals, and tour-and-event tooling for the Lowcountry tourism economy. Typical: $20k–$70k.",
    },
    {
        title: "Penetration Testing for SOC 2",
        desc: "Web app, network, wireless, AD, and MITRE ATT&CK engagements ahead of your enterprise sales cycle. Typical: $8k–$28k.",
    },
    {
        title: "Port & Logistics Operations Dashboards",
        desc: "Dispatch, freight tracking, and inventory tools for operators feeding the Port of Charleston. Typical: $25k–$80k.",
    },
    {
        title: "Stripe & Subscription Billing",
        desc: "Memberships, ticketing, usage-based pricing, and dunning wired to Stripe. Typical: $8k–$28k.",
    },
    {
        title: "Custom CRMs & Operations Dashboards",
        desc: "Replace a HubSpot or Salesforce stack with software you own. Typical: $20k–$70k.",
    },
];

const faqs = [
    {
        q: "Do you work with Charleston tech startups?",
        a: "Yes — the Silicon Harbor scene around the Charleston Digital Corridor produces a steady flow of SaaS, and multi-tenant architecture, Stripe billing, and onboarding flows are core to our practice. We build the kind of platform that survives an enterprise security review.",
    },
    {
        q: "Can you support a SOC 2 readiness window?",
        a: "Yes — our pen testing reports map to SOC 2 CC controls and customer due-diligence questionnaires. We schedule pre-audit tests 60–90 days ahead of your Type I window so enterprise deals do not stall.",
    },
    {
        q: "Do you build for the Lowcountry tourism and hospitality economy?",
        a: "Yes — reservation engines, guest portals, ticketing, and tour-and-event tooling are common asks. We integrate with existing property-management and point-of-sale systems rather than forcing a rip-and-replace.",
    },
    {
        q: "Are you based in Charleston?",
        a: "We are headquartered in Macon, Georgia and serve Charleston remote-first across the same Eastern Time zone. For major builds and on-site network pen tests we travel to Charleston, Berkeley, and Dorchester counties. We do not claim a physical Charleston office.",
    },
    {
        q: "Do you work with port logistics and aerospace operators?",
        a: "Yes — the Port of Charleston and the Boeing South Carolina aerospace cluster in North Charleston sustain a supplier base that needs dispatch, inventory, and integration tooling. We scope unclassified support case-by-case.",
    },
    {
        q: "What pen testing methodology do you use?",
        a: "Our framework is MITRE ATT&CK end-to-end. Every finding is mapped to a technique ID. We run eleven attack modules covering recon, credential spraying, Kerberoasting, ADCS abuse, lateral movement, and C2 infrastructure.",
    },
    {
        q: "What is your typical timeline for a Charleston MVP?",
        a: "Most Charleston SaaS and ops platforms ship a usable MVP in 8–12 weeks on a fixed-scope quote. Full builds run 3–6 months. A standalone external pen test runs 2–3 weeks including reporting.",
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
        { "@type": "ListItem", position: 3, name: "Software Development Charleston, SC", item: "https://quantlabusa.dev/software-development-charleston-sc" },
    ],
};

export default function CharlestonLandingPage() {
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
                        <li className="text-gray-300">Charleston, SC</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development &amp; Penetration Testing in Charleston, SC
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Charleston has quietly become one of the southeast&apos;s most interesting tech markets — a Silicon Harbor startup scene on top of a deep-water port, a Boeing aerospace cluster, and one of the country&apos;s premier tourism economies. Each of those needs custom software and the security to back it.
                    </p>
                    <ConsultationCTA label="Talk Through a Charleston Build" city="Charleston, SC" source="city-charleston" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA pairs custom software engineering with hands-on penetration testing rooted in the MITRE ATT&amp;CK framework. We are a Macon, Georgia firm serving Charleston remote-first across the same Eastern Time zone, with travel into Charleston, Berkeley, and Dorchester counties for major builds and on-site network work. Charleston operators typically need the same things: multi-tenant SaaS that scales cleanly, booking and billing that holds up in peak season, and a pen test report that unblocks enterprise procurement and SOC 2.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Charleston businesses choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Charleston&apos;s software demand spans tech, tourism, and industry. The Charleston Digital Corridor catalyzed a Silicon Harbor startup scene — Blackbaud on Daniel Island is the anchor, and a long tail of SaaS, fintech, and software companies has grown around it. The Port of Charleston is one of the busiest container ports on the East Coast, and the logistics base feeding it needs dispatch and inventory tooling. Boeing South Carolina in North Charleston anchors an aerospace manufacturing cluster with its own supplier software needs. And the Lowcountry tourism economy — historic downtown, Mount Pleasant, and the beaches — runs on reservations, ticketing, and guest-experience platforms. It is a compact metro with a genuinely diverse set of software needs and rising security expectations from enterprise buyers.
                        </p>
                        <p>
                            Most Charleston shops are either boutique design studios or staff-augmentation bodies. We sit in the middle: founder-led delivery with enterprise-grade engineering practices and in-house offensive security. No offshore handoff and no junior outsourcing — William Beltz scopes, builds, and ships. That matters when a Silicon Harbor SaaS needs both a clean codebase and a pen test report that closes an enterprise deal, or when a tourism operator needs a booking flow that does not buckle on a festival weekend.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for Charleston clients</h2>
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
                            Charleston buyers want senior accountability without consultancy overhead. Our model delivers exactly that: every engagement is scoped, built, and shipped by the founder, on a fixed-scope and fixed-price proposal with a written acceptance milestone — not open-ended time-and-materials billing. Our pen testing is in-house capability, not a subcontracted line item: Active Directory abuse paths, lateral movement, ADCS certificate abuse, Kerberoasting, wireless attacks, and web application exploitation, with every finding mapped to a MITRE ATT&amp;CK technique ID. And every line of software we ship is reviewed against the same threat models we use on offensive engagements.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Macon-based, full Eastern Time overlap with Charleston teams",
                            "SaaS, tourism, port logistics, and aerospace specialization",
                            "Pen test reports that map directly to SOC 2 CC controls",
                            "In-house offensive security capability (AD abuse paths, wireless, ADCS, web app)",
                            "Fixed-scope quotes — no T&M billing surprises",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work with Charleston teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            We run full Eastern Time overlap from Macon, which keeps standups and reviews on Charleston&apos;s clock. Most kickoffs are a video call followed by a single on-site afternoon — typically downtown, on Daniel Island, in Mount Pleasant, or in North Charleston — to walk the workflow we are replacing. From there, build cycles run weekly: every Friday you get a deployed staging URL, written notes on what changed, and the next-week plan. Pen testing engagements run from secure remote infrastructure with strict source-IP allowlisting and authenticated VPN tunnels for internal scope, and we travel to Charleston for sensitive scoping and for internal tests requiring on-site network access. Reports ship in two formats: a technical deliverable with reproduction steps for the security team, and a board-readable executive summary with a prioritized remediation roadmap. Most Charleston engagements close inside 4–6 weeks from kickoff to final report.
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
                        industries={["saas","e-commerce","manufacturing","real-estate"]}
                        heading="Industries we serve in Charleston"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["saas","compliance","pentest"]}
                        pinned={["soc2-pentest-prep-guide-2026","custom-crm-development-guide","what-is-penetration-testing"]}
                        heading="Reading for Charleston founders"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services &amp; nearby cities</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { href: "/services/saas-platform-development", title: "SaaS Platform Development", desc: "Multi-tenant architecture and billing." },
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "Booking and ops tooling built around your workflow." },
                            { href: "/services/stripe-integration", title: "Stripe Integration", desc: "Memberships, ticketing, and subscription billing." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, network, wireless, and AD engagements." },
                            { href: "/services/web-app-pentest", title: "Web Application Pen Test", desc: "OWASP-aligned testing for SaaS apps." },
                            { href: "/services/custom-crm-development", title: "Custom CRM Development", desc: "Own your CRM — don&apos;t rent it." },
                            { href: "/blog/soc2-pentest-prep-guide-2026", title: "SOC 2 Pentest Prep Guide", desc: "Pre-audit testing mapped to CC controls." },
                            { href: "/blog/what-is-penetration-testing", title: "What Is Penetration Testing?", desc: "A founder's buyer guide to pen testing." },
                            { href: "/blog/custom-crm-development-guide", title: "Custom CRM Development Guide", desc: "Pillar resource — build vs. buy, cost models." },
                            { href: "/software-development-savannah-ga", title: "Savannah, GA", desc: "Port logistics down the coast." },
                            { href: "/software-development-charlotte-nc", title: "Charlotte, NC", desc: "Banking and fintech-adjacent SaaS." },
                            { href: "/contact", title: "Start a Project", desc: "Scoping calls, fixed-quote proposals." },
                        ].map((s) => (
                            <Link
                                key={s.href}
                                href={s.href}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-teal-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-teal-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to talk Charleston?
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or email <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a> to talk through your Charleston build.
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
