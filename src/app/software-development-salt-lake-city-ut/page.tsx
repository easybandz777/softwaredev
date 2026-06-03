import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { RelatedIndustries } from "@/components/RelatedIndustries";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Salt Lake City Software Development & Pen Testing | QUANT LAB USA",
    description:
        "Salt Lake City and Silicon Slopes SaaS development plus penetration testing. Senior, founder-led engineering, fixed-quote, MITRE-aligned. Call (770) 652-1282.",
    slug: "software-development-salt-lake-city-ut",
    image: "/og-image.png",
    type: "article",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-salt-lake-city-ut#localbusiness",
    name: "QUANT LAB USA — Salt Lake City Coverage",
    url: "https://quantlabusa.dev/software-development-salt-lake-city-ut",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Salt Lake City", containedInPlace: { "@type": "State", name: "Utah" } },
        { "@type": "City", name: "Lehi" },
        { "@type": "City", name: "Provo" },
        { "@type": "City", name: "Draper" },
        { "@type": "City", name: "Sandy" },
        { "@type": "City", name: "Ogden" },
        { "@type": "AdministrativeArea", name: "Salt Lake County" },
        { "@type": "AdministrativeArea", name: "Utah County" },
        { "@type": "AdministrativeArea", name: "Silicon Slopes" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 40.7608, longitude: -111.8910 },
    address: { "@type": "PostalAddress", addressLocality: "Salt Lake City", addressRegion: "UT", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Penetration Testing",
    name: "Custom Software Development & Penetration Testing in Salt Lake City, UT",
    provider: { "@id": "https://quantlabusa.dev/#organization" },
    areaServed: { "@type": "City", name: "Salt Lake City", containedInPlace: { "@type": "State", name: "Utah" } },
    description:
        "Multi-tenant SaaS, billing infrastructure, internal platforms, and MITRE-aligned penetration testing for Salt Lake City and Silicon Slopes companies.",
    url: "https://quantlabusa.dev/software-development-salt-lake-city-ut",
};

const services = [
    {
        title: "Multi-Tenant SaaS Products",
        desc: "Next.js, TypeScript, Node, PostgreSQL — tenant isolation, onboarding, and billing done right for Silicon Slopes startups. Typical: $30k–$120k.",
    },
    {
        title: "Subscription & Billing Infrastructure",
        desc: "Stripe-powered subscriptions, metered billing, entitlements, and revenue tooling. Typical: $8k–$28k.",
    },
    {
        title: "Penetration Testing (Web, Network, AD)",
        desc: "Full engagements with formal MITRE-ATT&CK-aligned reports for SOC 2 and customer security reviews. Typical: $12k–$40k.",
    },
    {
        title: "SOC 2 Pen Test Preparation",
        desc: "Pre-audit testing mapped cleanly to SOC 2 CC controls, with a remediation roadmap your auditor will recognize. Typical: $12k–$35k.",
    },
    {
        title: "Internal Tools & Platform Engineering",
        desc: "Ops dashboards, admin panels, and internal platforms for fast-scaling SaaS teams. Typical: $25k–$90k.",
    },
    {
        title: "Custom CRMs & Revenue Operations",
        desc: "Purpose-built CRM and RevOps tooling for growth-stage companies across the Wasatch Front. Typical: $20k–$70k.",
    },
];

const faqs = [
    {
        q: "Do you build multi-tenant SaaS for Silicon Slopes startups?",
        a: "Yes — multi-tenant architecture, tenant isolation with Postgres row-level security, onboarding, and billing are routine. We build SaaS the way a growth-stage team needs to scale it.",
    },
    {
        q: "Can you prepare us for a SOC 2 audit?",
        a: "Yes — we run pre-audit penetration testing mapped to SOC 2 CC controls and deliver a remediation roadmap your auditor will recognize. We have prep guidance specific to the 2026 audit cycle.",
    },
    {
        q: "What is the time-zone overlap with Mountain Time?",
        a: "We work from Eastern HQ, two hours ahead of Mountain. Our late morning is your mid-morning and our afternoon overlaps your workday almost completely — we run standups that land mid-morning your time and keep a long shared window for reviews.",
    },
    {
        q: "Do you support Stripe subscription and billing infrastructure?",
        a: "Yes — Stripe-powered subscriptions, metered billing, entitlements, and revenue tooling are routine. We wire webhook idempotency, dunning, and proration correctly at build time.",
    },
    {
        q: "What pen testing methodology do you use?",
        a: "Our framework is MITRE ATT&CK end-to-end. Every finding is mapped to a technique ID across recon, credential spraying, Kerberoasting, ADCS abuse, lateral movement, and web app exploitation.",
    },
    {
        q: "Do you ship code that survives a technical review?",
        a: "Yes — strict TypeScript, ESLint, CI on every deploy, and architecture docs co-located with the code. Every line is reviewed before merge, and the README holds up to an investor or acquirer DD call.",
    },
    {
        q: "Can you fly in for kickoffs across the Wasatch Front?",
        a: "For engagements above roughly $25k, yes — SLC is a direct flight from Atlanta. We plan on-site afternoons in Salt Lake City, Lehi, Draper, or Provo as scope warrants.",
    },
    {
        q: "What is a typical timeline for a Salt Lake City engagement?",
        a: "A standalone external pen test runs 2–3 weeks including reporting. A full internal-plus-external with AD scope runs 4–6 weeks. Custom software follows separate fixed-scope scoping.",
    },
];

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://quantlabusa.dev/services" },
        { "@type": "ListItem", position: 3, name: "Software Development Salt Lake City, UT", item: "https://quantlabusa.dev/software-development-salt-lake-city-ut" },
    ],
};

export default function SaltLakeCityLandingPage() {
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
                        <li className="text-gray-300">Salt Lake City, UT</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development & Penetration Testing in Salt Lake City, UT
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Salt Lake City anchors Silicon Slopes — one of the fastest-growing SaaS corridors in the country. Growth-stage software companies along the Wasatch Front need senior engineering, clean multi-tenant architecture, and a security story that survives a SOC 2 audit.
                    </p>
                    <ConsultationCTA label="Scope a Salt Lake City Engagement" city="Salt Lake City, UT" source="city-salt-lake-city" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA combines custom SaaS engineering with hands-on penetration testing rooted in the MITRE ATT&amp;CK framework — founder-led delivery, a modern stack, and security-aware engineering by default. For a Silicon Slopes company scaling fast and prepping for audits, that pairing is exactly the point.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Salt Lake City businesses choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Silicon Slopes is real. The corridor running from Salt Lake City down through Draper, Lehi, and Provo has produced a dense cluster of SaaS companies — Qualtrics, Domo, Pluralsight, Podium, Lucid, and a constant stream of growth-stage startups behind them. That ecosystem buys software the way you would expect: multi-tenant SaaS products, subscription and billing infrastructure, internal platforms, and RevOps tooling, all built to scale and all eventually facing a SOC 2 audit and customer security reviews. The Wasatch Front pairs serious venture activity with a culture that prizes execution, which makes it a strong market for senior contract engineering that can actually deliver.
                        </p>
                        <p>
                            The Slopes market has plenty of agencies selling development hours and plenty of freelancers of variable quality. We aim at the gap — senior, founder-led, fixed-scope, modern stack, security-aware by default, with no junior layer and no offshore handoff. And because offensive security is in-house — Active Directory abuse paths, lateral movement, ADCS abuse, and web app exploitation — every line we ship is reviewed against the same threat models we use on engagements. For a Salt Lake City SaaS founder heading into a SOC 2 cycle or a growth round, that combination is the entire pitch.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for Salt Lake City clients</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work remotely with Salt Lake City teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Salt Lake City sits two hours behind our Eastern HQ on Mountain Time, which makes the overlap especially generous — our late morning is your mid-morning, and our afternoon covers most of your workday. We run standups that land mid-morning your time and keep a long shared window for reviews and pairing. For engagements above roughly $25k we fly into SLC for an on-site kickoff afternoon — Salt Lake City, Lehi, Draper, or Provo as scope warrants. Build cycles run weekly with a Friday staging URL, written notes, and the next-week plan. Engineering standards are the default: every line of code reviewed before merge, strict TypeScript, ESLint, CI on every deploy, and architecture docs co-located in the repo. For SOC 2 work, we run pre-audit pen testing mapped to CC controls. Most Salt Lake City engagements close on fixed-scope, fixed-price proposals with full code, infrastructure, and account handover at acceptance.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Multi-tenant SaaS, billing, and platform engineering — real, in-house",
                            "Pre-audit SOC 2 pen testing mapped to CC controls",
                            "Generous Mountain-time overlap from Eastern HQ",
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
                        industries={["saas","fintech","e-commerce","insurance"]}
                        heading="Industries we serve in Salt Lake City"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["saas","compliance","build-vs-buy"]}
                        pinned={["soc2-pentest-prep-guide-2026","build-vs-buy-software-2026","custom-crm-development-guide"]}
                        heading="Reading for Salt Lake City founders"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services & nearby cities</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { href: "/services/saas-platform-development", title: "SaaS Platform Development", desc: "Multi-tenant products, billing, onboarding." },
                            { href: "/services/subscription-billing", title: "Subscription Billing", desc: "Metered billing and entitlements." },
                            { href: "/services/stripe-integration", title: "Stripe Integration", desc: "Payments, subscriptions, and webhooks." },
                            { href: "/services/custom-crm-development", title: "Custom CRM Development", desc: "CRM and RevOps tooling you own." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, network, and AD engagements." },
                            { href: "/services/web-app-pentest", title: "Web App Pen Test", desc: "OWASP-aligned web app testing." },
                            { href: "/services/active-directory-pentest", title: "Active Directory Pen Test", desc: "Kerberoasting, ADCS, lateral movement." },
                            { href: "/services/mitre-attack-assessment", title: "MITRE ATT&CK Assessment", desc: "Full attack-chain mapping and reporting." },
                            { href: "/blog/soc2-pentest-prep-guide-2026", title: "SOC 2 Pentest Prep 2026", desc: "Pre-audit testing mapped to CC controls." },
                            { href: "/software-development-boise-id", title: "Boise, ID", desc: "Semiconductors and startups." },
                            { href: "/software-development-las-vegas-nv", title: "Las Vegas, NV", desc: "Gaming, hospitality, and fintech." },
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
                            Scope a Salt Lake City engagement.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or email <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a> to discuss Salt Lake City engagements.
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
