import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Custom Software Development in Midtown Atlanta | QUANT LAB",
    description:
        "Custom software development in Midtown Atlanta — Tech Square, Georgia Tech corridor, and venture-backed SaaS builds. Founder-led, fixed-quote engagements.",
    alternates: { canonical: "https://quantlabusa.dev/locations/atlanta-midtown" },
    openGraph: {
        title: "Custom Software Development in Midtown Atlanta | QUANT LAB",
        description: "Tech Square-focused custom software and pen testing for Midtown SaaS and startup operators.",
        url: "https://quantlabusa.dev/locations/atlanta-midtown",
        type: "article",
    },
    twitter: {
        card: "summary",
        title: "Custom Software Development in Midtown Atlanta | QUANT LAB",
        description: "Tech Square-focused custom software and pen testing for Midtown SaaS operators.",
    },
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/locations/atlanta-midtown#localbusiness",
    name: "QUANT LAB USA — Midtown Atlanta Coverage",
    url: "https://quantlabusa.dev/locations/atlanta-midtown",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "Place", name: "Midtown", containedInPlace: { "@type": "City", name: "Atlanta" } },
        { "@type": "Place", name: "Tech Square" },
        { "@type": "Place", name: "Georgia Tech" },
        { "@type": "Place", name: "Atlantic Station" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 33.7831, longitude: -84.3831 },
    address: { "@type": "PostalAddress", addressLocality: "Atlanta", addressRegion: "GA", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development",
    name: "Custom Software Development in Midtown Atlanta",
    provider: { "@id": "https://quantlabusa.dev/#org" },
    areaServed: { "@type": "Place", name: "Midtown, Atlanta, GA" },
    description:
        "Venture-backed SaaS builds, Stripe Connect, fintech infrastructure, and SOC 2 pen tests for Midtown Atlanta and the Georgia Tech / Tech Square corridor.",
    url: "https://quantlabusa.dev/locations/atlanta-midtown",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Locations", item: "https://quantlabusa.dev/locations" },
        { "@type": "ListItem", position: 3, name: "Midtown Atlanta", item: "https://quantlabusa.dev/locations/atlanta-midtown" },
    ],
};

const services = [
    {
        title: "SaaS MVPs for Venture-Backed Teams",
        desc: "Multi-tenant SaaS, Stripe metered billing, dashboarding, and admin tooling — built ship-ready for series A / seed pitches.",
    },
    {
        title: "Custom CRMs for Mid-Market SaaS",
        desc: "Replace HubSpot/Salesforce with a platform you own. Lead-to-revenue plumbing without per-seat creep.",
    },
    {
        title: "Penetration Testing for SOC 2",
        desc: "Pre-Type-I engagements for Tech Square-incubated SaaS companies preparing for first enterprise contracts.",
    },
    {
        title: "API & Webhook Infrastructure",
        desc: "Public APIs, webhook fan-out, OAuth/SSO for B2B SaaS shipping out of the Tech Square / Centergy ecosystem.",
    },
];

const faqs = [
    {
        q: "Do you work with Tech Square and Georgia Tech-affiliated startups?",
        a: "Yes. Centergy, the Advanced Technology Development Center, and the cluster of corporate innovation labs along 5th and Spring Streets are a steady source of seed and Series A SaaS work. We scope MVPs that ship in 8–12 weeks against a fixed quote.",
    },
    {
        q: "Can you meet at a Midtown office?",
        a: "Yes — we drive up from Macon on I-75 and meet at Tech Square, Centergy, Atlantic Station, or any of the Class A buildings along Peachtree between 10th and 17th. About 80 minutes door to door.",
    },
    {
        q: "What is a typical Midtown SaaS engagement?",
        a: "Most Midtown engagements are a fixed-scope MVP build for a venture-backed or bootstrapped SaaS team. Typical timelines run 8–14 weeks, with fixed-price proposals and weekly Friday demos.",
    },
    {
        q: "How is Midtown different from Buckhead for a software buyer?",
        a: "Midtown skews venture-backed, tech-first, and dense with corporate innovation labs. Buckhead skews wealth management, RIA, and corporate HQ. The engagement structure is similar but Midtown buyers move faster and care more about pre-Series-A speed.",
    },
    {
        q: "Do you support Midtown corporate innovation labs?",
        a: "Yes — Tech Square hosts innovation outposts for AT&T, Anthem, NCR, Home Depot, and several others. We have scoped custom tooling, vendor diligence pen tests, and prototype builds for that buyer profile.",
    },
    {
        q: "Do you offer ongoing maintenance after launch?",
        a: "Yes — monthly retainers for hosting, security patching, and small feature work. Or take the codebase fully in-house. No lock-in either way.",
    },
];

export default function AtlantaMidtownPage() {
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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

            <div className="container mx-auto px-6 max-w-4xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/locations" className="hover:text-sky-400 transition-colors">Locations</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">Midtown Atlanta</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-blue-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development in Midtown Atlanta
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Midtown Atlanta is the densest software corridor in the southeast. Tech Square — anchored by Georgia Tech, the Advanced Technology Development Center, and Centergy — hosts corporate innovation outposts for AT&T, Anthem, NCR, Home Depot, and dozens of others. The blocks between 5th, 10th, Peachtree, and Spring Streets generate more SaaS pitches per acre than any submarket in Georgia.
                    </p>
                    <ConsultationCTA label="Scope a Midtown Project" city="Midtown, Atlanta, GA" source="neighborhood-midtown" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Midtown businesses partner with QUANT LAB</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Midtown buyers move fast. Venture-backed SaaS, bootstrapped B2B operators, and Tech Square innovation labs all share the same constraint: they need a senior engineer who can scope, build, and ship an MVP without a six-month discovery phase or an offshore handoff. QUANT LAB runs founder-led delivery. William Beltz writes the code. There is no agency markup layer, no junior outsourcing, no project manager translating between you and engineering.
                        </p>
                        <p>
                            The Midtown buyer profile rewards depth in modern web infrastructure. Stripe Connect and metered billing for SaaS, OAuth/SSO and webhook fan-out for API products, and pen test reports that map to SOC 2 CC controls — those are the primitives that show up in every Series A diligence packet. We deliver them as part of the build, not as a separate scope line. Most Midtown engagements close on fixed-scope proposals with weekly Friday staging URLs and a single written acceptance milestone.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build for Midtown clients</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work with Midtown teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            We are Macon-based — 80 minutes south on I-75 — which lets us drive up the same day for any Midtown kickoff or on-site review. Most engagements start with a video call followed by a single on-site afternoon at Tech Square, Centergy, Atlantic Station, or a Peachtree-corridor office. From there, builds run weekly: every Friday you get a deployed staging URL, written change notes, and the next-week plan. We close on fixed-scope, fixed-price proposals — no open-ended T&M billing surprises.
                        </p>
                    </div>
                    <div className="mt-6">
                        <ConsultationCTA label="Book a Midtown Scoping Call" city="Midtown, Atlanta, GA" source="neighborhood-midtown-mid" />
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related submarkets & services</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { href: "/software-development-atlanta-ga", title: "Atlanta, GA (parent)", desc: "Full Atlanta-metro coverage page." },
                            { href: "/locations/atlanta-buckhead", title: "Buckhead Atlanta", desc: "Wealth, RIA, and corporate HQ corridor." },
                            { href: "/locations/atlanta-alpharetta", title: "Alpharetta, GA", desc: "North metro fintech and SaaS." },
                            { href: "/locations/atlanta-marietta", title: "Marietta, GA", desc: "Cobb County and northwest metro." },
                            { href: "/services/saas-platform-development", title: "SaaS Platform Development", desc: "Multi-tenant MVPs and platform builds." },
                            { href: "/services/api-development", title: "API Development", desc: "OAuth, webhooks, and public APIs." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Pre-SOC-2 engagements for SaaS." },
                            { href: "/services/stripe-integration", title: "Stripe Integration", desc: "Subscription, metered, and Connect builds." },
                            { href: "/work/j5-sales-os", title: "Case Study: J5 Sales OS", desc: "Custom sales operations platform." },
                            { href: "/work/wilder-recovery", title: "Case Study: Wilder Recovery", desc: "Operations and field-team tooling." },
                            { href: "/pricing", title: "Pricing", desc: "Fixed-quote ranges by project type." },
                            { href: "/contact", title: "Start a Project", desc: "Scoping calls and fixed-quote proposals." },
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
                            Ready to talk Midtown?
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> to scope your Tech Square-corridor build.
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
