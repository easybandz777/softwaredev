import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Software Development in Buckhead Atlanta | QUANT LAB USA",
    description:
        "Custom software development & pen testing for Buckhead financial, legal, and SaaS firms. Founder-led, same-state Georgia firm. Call (770) 652-1282 for a quote.",
    alternates: { canonical: "https://quantlabusa.dev/locations/atlanta-buckhead" },
    openGraph: {
        title: "Custom Software Development in Buckhead Atlanta | QUANT LAB USA",
        description:
            "Buckhead-focused custom software, CRM, and pen testing engagements. Founder-led, fixed-quote delivery.",
        url: "https://quantlabusa.dev/locations/atlanta-buckhead",
        type: "article",
    },
    twitter: {
        card: "summary",
        title: "Custom Software Development in Buckhead Atlanta | QUANT LAB USA",
        description:
            "Buckhead-focused custom software, CRM, and pen testing engagements.",
    },
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/locations/atlanta-buckhead#localbusiness",
    name: "QUANT LAB USA — Buckhead Atlanta Coverage",
    url: "https://quantlabusa.dev/locations/atlanta-buckhead",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "Place", name: "Buckhead", containedInPlace: { "@type": "City", name: "Atlanta" } },
        { "@type": "Place", name: "Lenox" },
        { "@type": "Place", name: "Phipps" },
        { "@type": "Place", name: "Tuxedo Park" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 33.8487, longitude: -84.3733 },
    address: { "@type": "PostalAddress", addressLocality: "Atlanta", addressRegion: "GA", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development",
    name: "Custom Software Development in Buckhead Atlanta",
    provider: { "@id": "https://quantlabusa.dev/#organization" },
    areaServed: { "@type": "Place", name: "Buckhead, Atlanta, GA" },
    description:
        "Fintech-grade Stripe billing, custom CRMs, and SOC 2 penetration tests for Buckhead-headquartered firms along the Peachtree and Lenox corridors.",
    url: "https://quantlabusa.dev/locations/atlanta-buckhead",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Locations", item: "https://quantlabusa.dev/locations" },
        { "@type": "ListItem", position: 3, name: "Buckhead Atlanta", item: "https://quantlabusa.dev/locations/atlanta-buckhead" },
    ],
};

const services = [
    {
        title: "Fintech-grade Stripe & Billing Systems",
        desc: "Subscription billing, metered usage, multi-tenant entitlements for Buckhead-based fintech and SaaS operators.",
    },
    {
        title: "Custom CRMs for Wealth & Advisory",
        desc: "Buckhead is dense with RIAs and family offices — we replace HubSpot/Salesforce with owned platforms that handle client lifecycle without per-seat creep.",
    },
    {
        title: "Penetration Testing for SOC 2",
        desc: "Web app, AD, and network engagements before procurement at Fortune 500 buyers headquartered along Peachtree.",
    },
    {
        title: "Operations Dashboards",
        desc: "Real-time KPI tooling for hospitality, retail flagship, and commercial real-estate operators between Lenox and Phipps.",
    },
];

const faqs = [
    {
        q: "Do you work with Buckhead-based fintech and RIA firms?",
        a: "Yes — Buckhead is the densest concentration of registered investment advisors and family offices in the southeast. We have shipped Stripe-grade billing, lead-to-AUM CRMs, and pen test reports that survive RIA broker-dealer review along the Peachtree corridor between West Paces Ferry and Lenox.",
    },
    {
        q: "Can you meet at a Buckhead office?",
        a: "Yes. For engagements above ~$25k we plan one or two in-person sessions, typically inside the office towers along Peachtree, Piedmont, or the Lenox-area Class A buildings. We drive up from Macon on I-75 — about 80 minutes door to door.",
    },
    {
        q: "What is the typical timeline for a Buckhead MVP?",
        a: "Most Buckhead SaaS and ops platforms ship a usable MVP in 8–12 weeks against a fixed-scope quote. Full builds run 3–6 months and close at written acceptance — not open-ended T&M.",
    },
    {
        q: "Are you familiar with the Buckhead financial corridor?",
        a: "Yes. Buckhead concentrates wealth management, private banking, commercial real estate, and family-office operations. Our fintech work — Stripe Connect, ACH, KYC/KYB workflows — maps directly to the buyer profile in this submarket.",
    },
    {
        q: "How is Buckhead different from Midtown for a software buyer?",
        a: "Midtown skews younger and more venture-backed (Tech Square, Georgia Tech). Buckhead skews wealth, real estate, and established corporate HQs. The procurement style is more formal and the typical engagement size is larger.",
    },
    {
        q: "Do you offer ongoing maintenance after launch?",
        a: "Yes — monthly retainers covering hosting, security patching, and small feature work. Or you can take the codebase fully in-house. No lock-in.",
    },
];

export default function AtlantaBuckheadPage() {
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
                        <li className="text-gray-300">Buckhead Atlanta</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-blue-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development in Buckhead Atlanta
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Buckhead is Atlanta&apos;s wealth management and corporate-headquarters corridor — the stretch of Peachtree Road running from Pharr Road through Lenox and into Phipps concentrates more registered investment advisors, family offices, and commercial real estate operators than the rest of the metro combined. The software demand follows the money: portfolio CRMs, RIA-grade billing, audit-ready security reports, and ops dashboards for retail, hospitality, and CRE operators.
                    </p>
                    <ConsultationCTA label="Scope a Buckhead Project" city="Buckhead, Atlanta, GA" source="neighborhood-buckhead" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Buckhead businesses partner with QUANT LAB</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Buckhead procurement is formal. RIAs, private banks, and Fortune 500 satellite offices in the Lenox-Tower corridor expect a few things from a software vendor that off-the-shelf builders rarely deliver: a senior engineer accountable to the contract, security posture that survives a real third-party diligence review, and a fixed-quote model that does not balloon mid-engagement. QUANT LAB sits exactly in that gap. William Beltz scopes, builds, and ships every project personally — there is no junior-outsourced handoff, no offshore team, no project manager translating between you and the engineer writing the code.
                        </p>
                        <p>
                            The buyer profile here also rewards depth in fintech-adjacent engineering. Stripe Connect, ACH, KYC/KYB workflows, and audit logging that maps to SOC 2 CC controls are core to our practice. Buckhead family offices and wealth advisors care about those primitives because their downstream clients ask about them on every renewal. We deliver them as part of the build, not as a separate scope line.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build for Buckhead clients</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work with Buckhead teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            We are Macon-based — about 80 minutes south on I-75 — which gives us full Eastern Time overlap and a same-day drive when an engagement warrants in-person work. Most kickoffs run as a video call followed by a single on-site afternoon at your Peachtree, Piedmont, or Lenox-area office to walk the workflow we&apos;re replacing. From there, build cycles run weekly: every Friday you get a deployed staging URL, written notes on what changed, and the next-week plan. Buckhead engagements close on fixed-scope, fixed-price proposals with written acceptance milestones. No T&M billing surprises.
                        </p>
                    </div>
                    <div className="mt-6">
                        <ConsultationCTA label="Book a Buckhead Scoping Call" city="Buckhead, Atlanta, GA" source="neighborhood-buckhead-mid" />
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
                            { href: "/locations/atlanta-midtown", title: "Midtown Atlanta", desc: "Tech Square and Georgia Tech corridor." },
                            { href: "/locations/atlanta-alpharetta", title: "Alpharetta, GA", desc: "North metro fintech and SaaS." },
                            { href: "/locations/atlanta-marietta", title: "Marietta, GA", desc: "Cobb County and northwest metro." },
                            { href: "/services/custom-crm-development", title: "Custom CRM Development", desc: "RIA and advisory CRMs you actually own." },
                            { href: "/services/payments-invoicing-licensing", title: "Payments & Licensing", desc: "Stripe Connect, ACH, and billing systems." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, network, AD engagements for SOC 2." },
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "Ops platforms built around your workflow." },
                            { href: "/work/bridgepointe-painting", title: "Case Study: Bridgepointe", desc: "Buckhead-adjacent luxury operator platform." },
                            { href: "/work/northcrest-fence", title: "Case Study: Northcrest Fence", desc: "North metro contractor sales platform." },
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
                            Ready to talk Buckhead?
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> to scope your Peachtree-corridor build.
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
