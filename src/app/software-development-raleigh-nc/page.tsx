import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { RelatedIndustries } from "@/components/RelatedIndustries";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Raleigh NC Software Development & Pen Testing | QUANT LAB USA",
    description:
        "Raleigh and Research Triangle custom software for SaaS, biotech, and fintech — plus penetration testing for SOC 2. Founder-led, remote-first. Call (770) 652-1282.",
    slug: "software-development-raleigh-nc",
    image: "/og-image.png",
    type: "article",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-raleigh-nc#localbusiness",
    name: "QUANT LAB USA — Raleigh Coverage",
    url: "https://quantlabusa.dev/software-development-raleigh-nc",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Raleigh", containedInPlace: { "@type": "State", name: "North Carolina" } },
        { "@type": "City", name: "Durham" },
        { "@type": "City", name: "Cary" },
        { "@type": "City", name: "Chapel Hill" },
        { "@type": "City", name: "Morrisville" },
        { "@type": "AdministrativeArea", name: "Wake County" },
        { "@type": "AdministrativeArea", name: "Durham County" },
        { "@type": "AdministrativeArea", name: "Research Triangle" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 35.7796, longitude: -78.6382 },
    address: { "@type": "PostalAddress", addressLocality: "Raleigh", addressRegion: "NC", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Penetration Testing",
    name: "Custom Software Development & Penetration Testing in Raleigh, NC",
    provider: {
        "@id": "https://quantlabusa.dev/#organization",
        "@type": "Organization",
        name: "QUANT LAB USA",
    },
    areaServed: { "@type": "City", name: "Raleigh", containedInPlace: { "@type": "State", name: "North Carolina" } },
    description:
        "Multi-tenant SaaS platforms, biotech and clinical tooling, Stripe billing, and full-scope penetration testing for Research Triangle operators.",
    url: "https://quantlabusa.dev/software-development-raleigh-nc",
};

const services = [
    {
        title: "Multi-Tenant SaaS Platforms",
        desc: "Tenant isolation on Postgres RLS, onboarding, entitlements, and customer-success tooling for Triangle startups. Typical: $25k–$90k.",
    },
    {
        title: "Penetration Testing for SOC 2",
        desc: "Web app, network, wireless, AD, and MITRE ATT&CK engagements ahead of your enterprise sales cycle. Typical: $8k–$28k.",
    },
    {
        title: "Biotech & Clinical Operations Tooling",
        desc: "Sample tracking, lab dashboards, and integration layers for the RTP life-sciences cluster. Typical: $25k–$90k.",
    },
    {
        title: "Stripe & Subscription Billing",
        desc: "Usage-based pricing, seat management, and dunning wired to Stripe for venture-backed SaaS. Typical: $10k–$35k.",
    },
    {
        title: "Custom CRMs & Operations Dashboards",
        desc: "Replace a HubSpot or Salesforce stack with software you own. Typical: $20k–$70k.",
    },
    {
        title: "AI Integration & Internal Tools",
        desc: "Retrieval, automation, and admin tooling layered onto your existing data and workflows. Typical: $15k–$60k.",
    },
];

const faqs = [
    {
        q: "Do you work with Research Triangle SaaS startups?",
        a: "Yes — multi-tenant architecture, Postgres row-level security, Stripe billing, and onboarding flows are core to our practice. The Triangle&apos;s venture density means most of our local work is early- to growth-stage SaaS.",
    },
    {
        q: "Can you support a SOC 2 readiness window?",
        a: "Yes — our pen testing reports map to SOC 2 CC controls and customer due-diligence questionnaires. We schedule pre-audit tests 60–90 days ahead of your Type I window so enterprise deals do not stall.",
    },
    {
        q: "Do you serve the RTP biotech and life-sciences cluster?",
        a: "Yes — sample tracking, lab operations dashboards, and integration tooling are common asks from Research Triangle Park life-sciences operators. We scope around the validation and data-integrity expectations these teams face.",
    },
    {
        q: "Are you based in Raleigh?",
        a: "We are headquartered in Macon, Georgia and serve Raleigh and the broader Research Triangle remote-first across the same Eastern Time zone. For major builds and on-site network pen tests we travel to Wake and Durham counties. We do not claim a physical Raleigh office.",
    },
    {
        q: "Do you hire from the local talent pool?",
        a: "Our delivery is founder-led, not staffed from a bench. The Triangle&apos;s NC State, Duke, and UNC pipeline is excellent, but you work directly with the engineer who scopes and ships your project — no junior handoff.",
    },
    {
        q: "What pen testing methodology do you use?",
        a: "Our framework is MITRE ATT&CK end-to-end. Every finding is mapped to a technique ID. We run eleven attack modules covering recon, credential spraying, Kerberoasting, ADCS abuse, lateral movement, and C2 infrastructure.",
    },
    {
        q: "What is your typical timeline for a Raleigh MVP?",
        a: "Most Triangle SaaS platforms ship a usable MVP in 8–12 weeks on a fixed-scope quote. Full builds run 3–6 months. A standalone external pen test runs 2–3 weeks including reporting.",
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
        { "@type": "ListItem", position: 3, name: "Software Development Raleigh, NC", item: "https://quantlabusa.dev/software-development-raleigh-nc" },
    ],
};

export default function RaleighLandingPage() {
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
                        <li className="text-gray-300">Raleigh, NC</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-red-500 to-rose-500 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development &amp; Penetration Testing in Raleigh, NC
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Raleigh anchors the Research Triangle — one of the densest concentrations of SaaS, biotech, and engineering talent in the country, fed by NC State, Duke, and UNC. That talent gravity produces a steady pipeline of venture-backed software that needs to be built right and secured before the enterprise deals close.
                    </p>
                    <ConsultationCTA label="Talk Through a Raleigh Build" city="Raleigh, NC" source="city-raleigh" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA pairs custom software engineering with hands-on penetration testing rooted in the MITRE ATT&amp;CK framework. We are a Macon, Georgia firm serving Raleigh and the broader Triangle remote-first across the same Eastern Time zone, with travel into Wake and Durham counties for major builds and on-site network work. Triangle operators typically need the same things: multi-tenant SaaS that scales cleanly, Stripe-grade billing, and a pen test report that unblocks enterprise procurement and SOC 2.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Raleigh businesses choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The Triangle&apos;s software demand is concentrated and sophisticated. Research Triangle Park — the largest research park in the country — anchors a life-sciences and technology base that includes biotech, pharma, and analytics operators, while downtown Raleigh and Durham have grown a deep startup scene around the universities. SAS in Cary set the template for software in the region decades ago, and the venture and accelerator ecosystem since then has produced a steady flow of growth-stage SaaS. North Carolina State&apos;s Centennial Campus, Duke, and UNC keep the talent pipeline full. The common thread is that these companies sell to enterprise buyers who demand SOC 2, clean multi-tenant architecture, and security that holds up under a customer&apos;s due-diligence review.
                        </p>
                        <p>
                            Most Triangle shops are either large consultancies or staff-augmentation bodies. We sit in the middle: founder-led delivery with enterprise-grade engineering practices and in-house offensive security. No offshore handoff and no junior outsourcing — William Beltz scopes, builds, and ships. That matters when a growth-stage SaaS needs both a clean codebase and a pen test report that closes an enterprise deal, or when a biotech operator needs tooling that respects data-integrity expectations.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for Raleigh clients</h2>
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
                            Triangle founders are technical and will not tolerate a sales team that hands the work to juniors. Our model removes that risk: every engagement is scoped, built, and shipped by the founder, on a fixed-scope and fixed-price proposal with a written acceptance milestone — not open-ended time-and-materials billing. Our pen testing is in-house capability, not a subcontracted line item: Active Directory abuse paths, lateral movement, web application exploitation, and wireless attacks, with every finding mapped to a MITRE ATT&amp;CK technique ID. And every line of software we ship is reviewed against the same threat models we use on offensive engagements.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Macon-based, full Eastern Time overlap with Triangle teams",
                            "Multi-tenant SaaS, biotech, fintech, and internal-tools specialization",
                            "Pen test reports that map directly to SOC 2 CC controls",
                            "Postgres RLS tenant isolation done right from day one",
                            "Fixed-scope quotes — no T&M billing surprises",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work with Raleigh teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            We run full Eastern Time overlap from Macon, which keeps standups and reviews on the Triangle&apos;s clock. Most kickoffs are a video call followed by a single on-site afternoon — typically in downtown Raleigh, Durham, Cary, or Morrisville — to walk the workflow we are replacing. From there, build cycles run weekly: every Friday you get a deployed staging URL, written notes on what changed, and the next-week plan. Pen testing engagements run from secure remote infrastructure with strict source-IP allowlisting and authenticated VPN tunnels for internal scope, and we travel to the Triangle for sensitive scoping and for internal tests requiring on-site network access. Reports ship in two formats: a technical deliverable with reproduction steps for the security team, and a board-readable executive summary with a prioritized remediation roadmap. Most Raleigh engagements close inside 4–6 weeks from kickoff to final report.
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
                        industries={["saas","healthcare","fintech","legal-services"]}
                        heading="Industries we serve in Raleigh"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["saas","compliance","pentest"]}
                        pinned={["soc2-pentest-prep-guide-2026","build-vs-buy-software-2026","custom-crm-development-guide"]}
                        heading="Reading for Raleigh founders"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services &amp; nearby cities</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { href: "/services/saas-platform-development", title: "SaaS Platform Development", desc: "Multi-tenant architecture and billing." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, network, wireless, and AD engagements." },
                            { href: "/services/stripe-integration", title: "Stripe Integration", desc: "Usage-based and subscription billing." },
                            { href: "/services/ai-integration-services", title: "AI Integration Services", desc: "Retrieval and automation on your data." },
                            { href: "/services/custom-crm-development", title: "Custom CRM Development", desc: "Own your CRM — don&apos;t rent it." },
                            { href: "/services/web-app-pentest", title: "Web Application Pen Test", desc: "OWASP-aligned testing for SaaS apps." },
                            { href: "/blog/soc2-pentest-prep-guide-2026", title: "SOC 2 Pentest Prep Guide", desc: "Pre-audit testing mapped to CC controls." },
                            { href: "/blog/build-vs-buy-software-2026", title: "Build vs Buy Software 2026", desc: "Three-year TCO and a decision framework." },
                            { href: "/blog/custom-crm-development-guide", title: "Custom CRM Development Guide", desc: "Pillar resource — build vs. buy, cost models." },
                            { href: "/software-development-charlotte-nc", title: "Charlotte, NC", desc: "Banking and fintech-adjacent SaaS." },
                            { href: "/software-development-atlanta-ga", title: "Atlanta, GA", desc: "Fintech, logistics, and SaaS." },
                            { href: "/contact", title: "Start a Project", desc: "Scoping calls, fixed-quote proposals." },
                        ].map((s) => (
                            <Link
                                key={s.href}
                                href={s.href}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-rose-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-rose-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to talk Raleigh?
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or email <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a> to talk through your Raleigh build.
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
