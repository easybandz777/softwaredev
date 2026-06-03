import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { RelatedIndustries } from "@/components/RelatedIndustries";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Knoxville TN Software Development & Pen Testing | QUANT LAB USA",
    description:
        "Knoxville custom software for energy, research, healthcare, and SaaS — plus penetration testing rooted in MITRE ATT&CK. Founder-led, remote-first. Call (770) 652-1282.",
    slug: "software-development-knoxville-tn",
    image: "/og-image.png",
    type: "article",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-knoxville-tn#localbusiness",
    name: "QUANT LAB USA — Knoxville Coverage",
    url: "https://quantlabusa.dev/software-development-knoxville-tn",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Knoxville", containedInPlace: { "@type": "State", name: "Tennessee" } },
        { "@type": "City", name: "Oak Ridge" },
        { "@type": "City", name: "Maryville" },
        { "@type": "City", name: "Farragut" },
        { "@type": "City", name: "Alcoa" },
        { "@type": "AdministrativeArea", name: "Knox County" },
        { "@type": "AdministrativeArea", name: "Blount County" },
        { "@type": "AdministrativeArea", name: "Anderson County" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 35.9606, longitude: -83.9207 },
    address: { "@type": "PostalAddress", addressLocality: "Knoxville", addressRegion: "TN", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Penetration Testing",
    name: "Custom Software Development & Penetration Testing in Knoxville, TN",
    provider: {
        "@id": "https://quantlabusa.dev/#organization",
        "@type": "Organization",
        name: "QUANT LAB USA",
    },
    areaServed: { "@type": "City", name: "Knoxville", containedInPlace: { "@type": "State", name: "Tennessee" } },
    description:
        "Research and energy data tooling, multi-tenant SaaS, Stripe billing, and full-scope penetration testing for Knoxville and Oak Ridge operators.",
    url: "https://quantlabusa.dev/software-development-knoxville-tn",
};

const services = [
    {
        title: "Research & Energy Data Dashboards",
        desc: "Data pipelines, dashboards, and integration tooling for the Oak Ridge research and energy ecosystem. Typical: $25k–$90k.",
    },
    {
        title: "Multi-Tenant SaaS Platforms",
        desc: "Tenant isolation, onboarding, entitlements, and customer-success tooling for Knoxville startups. Typical: $25k–$90k.",
    },
    {
        title: "Penetration Testing (Web, Network, AD)",
        desc: "Full engagements with formal reports for SOC 2, vendor reviews, and supply-chain security questionnaires. Typical: $8k–$28k.",
    },
    {
        title: "Healthcare Intake & Operations Tooling",
        desc: "HIPAA-aware intake, scheduling, and dashboards for the UT Medical Center and Covenant Health ecosystem. Typical: $25k–$80k.",
    },
    {
        title: "Stripe & Subscription Billing",
        desc: "Memberships, usage-based pricing, and dunning wired to Stripe. Typical: $8k–$28k.",
    },
    {
        title: "Custom Software for Federal-Adjacent Vendors",
        desc: "Scoped per requirement — most are unclassified support for Oak Ridge supply-chain operators. Typical: $25k–$120k.",
    },
];

const faqs = [
    {
        q: "Do you work with the Oak Ridge research and energy ecosystem?",
        a: "Yes — the national-lab and energy cluster in Oak Ridge sustains a deep bench of contractors and supply-chain operators that need data pipelines, dashboards, and integration tooling. We scope unclassified support case-by-case and discuss any sensitivity requirements under NDA.",
    },
    {
        q: "Do you work with University of Tennessee spinouts and startups?",
        a: "Yes — UT and the Knoxville Entrepreneur Center produce a steady flow of SaaS and research-driven startups. Multi-tenant architecture, Stripe billing, and onboarding flows are core to our practice.",
    },
    {
        q: "Do you serve the UT Medical Center and Covenant Health systems?",
        a: "Yes — we build HIPAA-aware intake, scheduling, and operations dashboards. Protected health information stays in BAA-eligible infrastructure with encrypted flows and audit-friendly logging.",
    },
    {
        q: "Are you based in Knoxville?",
        a: "We are headquartered in Macon, Georgia and serve Knoxville remote-first across the same Eastern Time zone. For major builds and on-site network pen tests we travel to Knox, Blount, and Anderson counties. We do not claim a physical Knoxville office.",
    },
    {
        q: "Can you support a SOC 2 or supply-chain security review?",
        a: "Yes — our pen testing reports map to SOC 2 CC controls and to supply-chain and vendor due-diligence questionnaires. We schedule pre-audit tests 60–90 days ahead of your window.",
    },
    {
        q: "What pen testing methodology do you use?",
        a: "Our framework is MITRE ATT&CK end-to-end. Every finding is mapped to a technique ID. We run eleven attack modules covering recon, credential spraying, Kerberoasting, ADCS abuse, lateral movement, and C2 infrastructure.",
    },
    {
        q: "What is your typical timeline for a Knoxville MVP?",
        a: "Most Knoxville SaaS and ops platforms ship a usable MVP in 8–12 weeks on a fixed-scope quote. Full builds run 3–6 months. A standalone external pen test runs 2–3 weeks including reporting.",
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
        { "@type": "ListItem", position: 3, name: "Software Development Knoxville, TN", item: "https://quantlabusa.dev/software-development-knoxville-tn" },
    ],
};

export default function KnoxvilleLandingPage() {
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
                        <li className="text-gray-300">Knoxville, TN</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development &amp; Penetration Testing in Knoxville, TN
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Knoxville pairs a major research university with the national-lab and energy cluster in nearby Oak Ridge — an unusual concentration of technical talent for a metro its size. That base, plus a growing startup and health-systems scene, produces software work that demands real engineering and real security.
                    </p>
                    <ConsultationCTA label="Talk Through a Knoxville Build" city="Knoxville, TN" source="city-knoxville" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA pairs custom software engineering with hands-on penetration testing rooted in the MITRE ATT&amp;CK framework. We are a Macon, Georgia firm serving Knoxville remote-first across the same Eastern Time zone, with travel into Knox, Blount, and Anderson counties for major builds and on-site network work. Knoxville operators typically need the same things: data tooling that integrates cleanly, multi-tenant SaaS that scales, and a pen test report that satisfies a supply-chain or SOC 2 review.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Knoxville businesses choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Knoxville&apos;s software demand is shaped by research and energy. The national-lab and energy ecosystem in Oak Ridge — the largest science and energy research complex in the region — anchors a supply chain of contractors, engineering firms, and technology vendors that need data pipelines, dashboards, and integration tooling, often with elevated security expectations. The University of Tennessee feeds a talent pipeline and a spinout scene supported by the Knoxville Entrepreneur Center and Innovation Crossing. The metro also hosts notable employers across logistics and consumer goods, plus a health-systems base anchored by UT Medical Center and Covenant Health. The common thread is that buyers here are technically literate and care about how software is built and secured.
                        </p>
                        <p>
                            Most Knoxville shops are either small generalist studios or staff-augmentation bodies. We sit in the middle: founder-led delivery with enterprise-grade engineering practices and in-house offensive security. No offshore handoff and no junior outsourcing — William Beltz scopes, builds, and ships. That matters when an Oak Ridge supply-chain operator needs both custom tooling and a pen test report that satisfies a security questionnaire, or when a UT spinout needs a clean multi-tenant platform.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for Knoxville clients</h2>
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
                            Knoxville buyers are technical and expect senior accountability. Our model delivers exactly that: every engagement is scoped, built, and shipped by the founder, on a fixed-scope and fixed-price proposal with a written acceptance milestone — not open-ended time-and-materials billing. Our pen testing is in-house capability, not a subcontracted line item: Active Directory abuse paths, lateral movement, ADCS certificate abuse, Kerberoasting, wireless attacks, and web application exploitation, with every finding mapped to a MITRE ATT&amp;CK technique ID. And every line of software we ship is reviewed against the same threat models we use on offensive engagements.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Macon-based, full Eastern Time overlap with Knoxville teams",
                            "Research, energy, healthcare, and SaaS specialization",
                            "Pen test reports that map to SOC 2 and supply-chain reviews",
                            "In-house offensive security capability (AD abuse paths, wireless, ADCS, web app)",
                            "Fixed-scope quotes — no T&M billing surprises",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work with Knoxville teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            We run full Eastern Time overlap from Macon, which keeps standups and reviews on Knoxville&apos;s clock. Most kickoffs are a video call followed by a single on-site afternoon — typically downtown, in Farragut, or out toward Oak Ridge — to walk the workflow we are replacing. From there, build cycles run weekly: every Friday you get a deployed staging URL, written notes on what changed, and the next-week plan. Pen testing engagements run from secure remote infrastructure with strict source-IP allowlisting and authenticated VPN tunnels for internal scope, and we travel to Knoxville for sensitive scoping and for internal tests requiring on-site network access. Reports ship in two formats: a technical deliverable with reproduction steps for the security team, and a board-readable executive summary with a prioritized remediation roadmap. Most Knoxville engagements close inside 4–6 weeks from kickoff to final report.
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
                        industries={["saas","healthcare","manufacturing","fintech"]}
                        heading="Industries we serve in Knoxville"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["pentest","saas","compliance"]}
                        pinned={["soc2-pentest-prep-guide-2026","what-is-penetration-testing","build-vs-buy-software-2026"]}
                        heading="Reading for Knoxville founders"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services &amp; nearby cities</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "Data dashboards and ops tooling built around your workflow." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, network, wireless, and AD engagements." },
                            { href: "/services/saas-platform-development", title: "SaaS Platform Development", desc: "Multi-tenant architecture and billing." },
                            { href: "/services/api-development", title: "API Development", desc: "Integrations across research and ERP data feeds." },
                            { href: "/services/mitre-attack-assessment", title: "MITRE ATT&CK Assessment", desc: "Full attack-chain mapping and reporting." },
                            { href: "/services/stripe-integration", title: "Stripe Integration", desc: "Memberships and subscription billing." },
                            { href: "/blog/soc2-pentest-prep-guide-2026", title: "SOC 2 Pentest Prep Guide", desc: "Pre-audit testing mapped to CC controls." },
                            { href: "/blog/what-is-penetration-testing", title: "What Is Penetration Testing?", desc: "A founder's buyer guide to pen testing." },
                            { href: "/blog/build-vs-buy-software-2026", title: "Build vs Buy Software 2026", desc: "Three-year TCO and a decision framework." },
                            { href: "/software-development-nashville-tn", title: "Nashville, TN", desc: "Healthcare HQ and music tech." },
                            { href: "/software-development-atlanta-ga", title: "Atlanta, GA", desc: "Fintech, logistics, and SaaS." },
                            { href: "/contact", title: "Start a Project", desc: "Scoping calls, fixed-quote proposals." },
                        ].map((s) => (
                            <Link
                                key={s.href}
                                href={s.href}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-yellow-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-yellow-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to talk Knoxville?
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or email <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a> to talk through your Knoxville build.
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
