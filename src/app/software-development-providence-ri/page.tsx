import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { RelatedIndustries } from "@/components/RelatedIndustries";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Providence RI Software Development & Pen Testing | QUANT LAB USA",
    description:
        "Providence custom software and penetration testing for design studios, universities, and SaaS. Founder-led, US-based. Call (770) 652-1282.",
    slug: "software-development-providence-ri",
    image: "/og-image.png",
    type: "article",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-providence-ri#localbusiness",
    name: "QUANT LAB USA — Providence Coverage",
    url: "https://quantlabusa.dev/software-development-providence-ri",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Providence", containedInPlace: { "@type": "State", name: "Rhode Island" } },
        { "@type": "City", name: "Pawtucket" },
        { "@type": "City", name: "Cranston" },
        { "@type": "City", name: "Warwick" },
        { "@type": "AdministrativeArea", name: "Providence County" },
        { "@type": "AdministrativeArea", name: "Rhode Island" },
        { "@type": "AdministrativeArea", name: "Greater Providence" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 41.824, longitude: -71.4128 },
    address: { "@type": "PostalAddress", addressLocality: "Providence", addressRegion: "RI", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Penetration Testing",
    name: "Custom Software Development & Penetration Testing in Providence, RI",
    provider: { "@id": "https://quantlabusa.dev/#organization" },
    areaServed: { "@type": "City", name: "Providence", containedInPlace: { "@type": "State", name: "Rhode Island" } },
    description:
        "Custom software, design-led web apps, and MITRE ATT&CK-aligned penetration testing for Providence design studios, universities, and SaaS teams.",
    url: "https://quantlabusa.dev/software-development-providence-ri",
};

const services = [
    {
        title: "Design-Led Custom Web Apps",
        desc: "Polished, brand-true product builds for studios and design-driven founders who care about craft. Typical: $25k–$90k.",
    },
    {
        title: "Penetration Testing (Web, Network, AD)",
        desc: "Formal engagements with deliverables for investor diligence and enterprise security reviews. Typical: $12k–$40k.",
    },
    {
        title: "University & EdTech Platforms",
        desc: "Student-facing apps, research tooling, and admin portals for Brown, RISD, URI, and Providence College. Typical: $25k–$80k.",
    },
    {
        title: "Custom CRMs & Operations Dashboards",
        desc: "Purpose-built internal tooling for agencies and mid-market firms. Typical: $20k–$70k.",
    },
    {
        title: "Stripe & Subscription Billing",
        desc: "Subscription products and licensing infrastructure for Rhode Island SaaS founders. Typical: $8k–$28k.",
    },
    {
        title: "SaaS MVPs for Founders",
        desc: "From concept to a fundable, usable product on a tight pre-seed timeline. Typical: $30k–$90k.",
    },
];

const faqs = [
    {
        q: "Do you work with design studios and creative-led teams?",
        a: "Yes — Providence has a strong design culture anchored by RISD. We build polished, brand-true web apps and products, and we collaborate closely with in-house or external design teams to ship work that holds a high craft bar.",
    },
    {
        q: "Can you support a Brown or RISD spinout?",
        a: "Yes — taking a campus or studio prototype to a fundable product is a common Providence engagement. Fixed scope, weekly Friday staging URL, full handover of code and accounts at acceptance.",
    },
    {
        q: "East Coast hours?",
        a: "Yes — our HQ is in Macon, Georgia on Eastern Time, so you get full same-day overlap with Providence and no timezone friction.",
    },
    {
        q: "Do you fly in for kickoffs and reviews?",
        a: "For engagements above roughly 25,000 dollars, yes — typically a single working afternoon downtown or on the East Side, and Boston is a short drive north if scheduling a regional trip. Providence is about a 2.5-hour flight from Atlanta via T.F. Green or Logan.",
    },
    {
        q: "Can you produce a pen test report for investor due diligence?",
        a: "Yes — our reports include technical reproduction steps and remediation detail for engineers, plus a board-readable executive summary, formatted for the diligence packages VCs and institutional buyers expect.",
    },
    {
        q: "Are you a local Providence office?",
        a: "No — we are a Macon, Georgia firm working remote-first across the United States, with travel to Providence for major-build kickoffs and on-site internal pen tests. You get senior, founder-led engineering without local overhead.",
    },
    {
        q: "What pen testing methodology do you use?",
        a: "MITRE ATT&CK end-to-end. Every finding maps to a technique ID. Internal engagements run modules covering recon, credential spraying, Kerberoasting, ADCS abuse, lateral movement, and command-and-control.",
    },
    {
        q: "What is a typical timeline for a Providence engagement?",
        a: "A standalone external pen test runs 2–3 weeks including reporting. A SaaS MVP is usually 6–10 weeks. Larger platform builds follow separate scoping with weekly milestones.",
    },
];

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://quantlabusa.dev/services" },
        { "@type": "ListItem", position: 3, name: "Software Development Providence, RI", item: "https://quantlabusa.dev/software-development-providence-ri" },
    ],
};

export default function ProvidenceLandingPage() {
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
                        <li className="text-gray-300">Providence, RI</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development & Penetration Testing in Providence, RI
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Providence punches above its weight on design and education. With RISD and Brown shaping a creative, craft-driven culture and a tight-knit founder scene downtown, this is a market where software quality and design polish both matter.
                    </p>
                    <ConsultationCTA label="Discuss a Providence Engagement" city="Providence, RI" source="city-providence" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA pairs custom software engineering with hands-on penetration testing rooted in the MITRE ATT&amp;CK framework. We are founder-led and US-based, and we hold a high craft bar — which resonates with Providence&apos;s design-driven, university-anchored buyers.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Providence organizations choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Providence has a distinct character. The design and creative economy, anchored by the Rhode Island School of Design, sets a high bar for craft and brand expression — studios and design-led founders here expect software that looks and feels as considered as their other work. The university base at Brown, RISD, URI, and Providence College feeds a steady spinout and EdTech pipeline. And a compact but real SaaS and professional-services scene downtown rounds out the demand for custom CRMs, billing infrastructure, and internal tooling that off-the-shelf products do not solve cleanly. The city&apos;s proximity to Boston also means Providence buyers often hold Boston-grade engineering expectations at a more grounded cost.
                        </p>
                        <p>
                            Most generalist agencies cannot credibly speak to penetration testing methodology, and they often treat security as an afterthought. We do not. Active Directory abuse paths, lateral movement, ADCS certificate abuse, Kerberoasting, web application exploitation — that is in-house capability, not a subcontracted line item. Every line of software we ship is reviewed against the same threat models we use on offensive engagements. For a Providence studio shipping a client product, or a founder preparing for a diligence cycle, that combination of design-aware build capability and genuine security depth is the entire pitch.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for Providence clients</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work with Providence teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Providence sits in the same time zone as our Macon, Georgia HQ, so you get full Eastern Time overlap and same-business-day responsiveness. Most kickoffs run as a 60–90 minute video session, with an on-site afternoon for engagements above roughly 25,000 dollars — Atlanta to T.F. Green or Logan is about 2.5 hours, and we plan working sessions downtown or on the East Side as scope warrants. Build cycles run weekly with a Friday staging URL, written notes, and the next week&apos;s plan. We collaborate closely with design teams so engineering decisions respect the craft bar. Pen tests run from secured remote infrastructure with strict source-IP allowlisting and authenticated VPN tunnels for internal scope. Reports come in two formats: a technical deliverable with reproduction steps for engineers, and a board-readable executive summary with a prioritized remediation roadmap. Custom builds close on fixed-scope, fixed-price proposals, with a full handover of code, database, hosting accounts, and architecture documentation at acceptance.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Full Eastern Time overlap from Georgia HQ — same business day as Providence",
                            "Design-aware engineering for studios and creative-led founders",
                            "University spinout and EdTech experience",
                            "In-house offensive security (AD abuse paths, web app, network)",
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
                        industries={["saas","e-commerce","fintech","healthcare"]}
                        heading="Industries we serve in Providence"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["saas","build-vs-buy","stripe"]}
                        pinned={["build-vs-buy-software-2026","nextjs-stripe-integration-guide","custom-crm-development-guide"]}
                        heading="Reading for Providence founders"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services & nearby cities</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { href: "/services/saas-platform-development", title: "SaaS Platform Development", desc: "Multi-tenant apps for founders." },
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "Design-led web apps and dashboards." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, network, and AD engagements." },
                            { href: "/services/web-app-pentest", title: "Web App Pen Test", desc: "OWASP-aligned web app testing." },
                            { href: "/services/mitre-attack-assessment", title: "MITRE ATT&CK Assessment", desc: "Full attack-chain mapping for diligence." },
                            { href: "/services/custom-crm-development", title: "Custom CRM Development", desc: "Own your CRM — don&apos;t rent it." },
                            { href: "/services/stripe-integration", title: "Stripe Integration", desc: "Subscription billing and licensing." },
                            { href: "/blog/build-vs-buy-software-2026", title: "Build vs Buy Software 2026", desc: "Three-year TCO decision framework." },
                            { href: "/blog/nextjs-stripe-integration-guide", title: "Next.js + Stripe Guide", desc: "Complete integration walkthrough." },
                            { href: "/software-development-boston-ma", title: "Boston, MA", desc: "Biotech, universities, and fintech." },
                            { href: "/pricing", title: "Pricing", desc: "How fixed-quote engagements are scoped." },
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
                            Scope a Providence engagement.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or email <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a> to discuss Providence engagements.
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
