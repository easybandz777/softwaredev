import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Custom Software Development in South Lake Union Seattle | QUANT LAB",
    description:
        "Custom software development in South Lake Union Seattle — cloud, biotech-adjacent SaaS, and SOC 2 pen testing. Founder-led, fixed-quote delivery.",
    alternates: { canonical: "https://quantlabusa.dev/locations/seattle-south-lake-union" },
    openGraph: {
        title: "Custom Software Development in South Lake Union Seattle | QUANT LAB",
        description: "SLU-focused SaaS, cloud, and biotech-adjacent builds plus pen testing. Founder-led delivery.",
        url: "https://quantlabusa.dev/locations/seattle-south-lake-union",
        type: "article",
    },
    twitter: {
        card: "summary",
        title: "Custom Software Development in South Lake Union Seattle | QUANT LAB",
        description: "SLU SaaS, cloud, and biotech-adjacent builds.",
    },
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/locations/seattle-south-lake-union#localbusiness",
    name: "QUANT LAB USA — South Lake Union Coverage",
    url: "https://quantlabusa.dev/locations/seattle-south-lake-union",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "Place", name: "South Lake Union", containedInPlace: { "@type": "City", name: "Seattle" } },
        { "@type": "Place", name: "Denny Triangle" },
        { "@type": "Place", name: "Cascade" },
        { "@type": "Place", name: "Lake Union waterfront" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 47.6249, longitude: -122.3370 },
    address: { "@type": "PostalAddress", addressLocality: "Seattle", addressRegion: "WA", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development",
    name: "Custom Software Development in South Lake Union Seattle",
    provider: { "@id": "https://quantlabusa.dev/#org" },
    areaServed: { "@type": "Place", name: "South Lake Union, Seattle, WA" },
    description:
        "Cloud platforms, biotech-adjacent SaaS, custom CRMs, and SOC 2 pen tests for South Lake Union-headquartered firms.",
    url: "https://quantlabusa.dev/locations/seattle-south-lake-union",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Locations", item: "https://quantlabusa.dev/locations" },
        { "@type": "ListItem", position: 3, name: "South Lake Union Seattle", item: "https://quantlabusa.dev/locations/seattle-south-lake-union" },
    ],
};

const services = [
    {
        title: "Cloud Infrastructure & DevOps Platforms",
        desc: "AWS, GCP, and Vercel-native deployments, internal developer tooling, and platform engineering for SLU-headquartered cloud and enterprise SaaS firms.",
    },
    {
        title: "Biotech-Adjacent SaaS",
        desc: "Lab operations, sample tracking, study management, and HIPAA-aware platforms for biotech and life-sciences operators near the Lake Union waterfront.",
    },
    {
        title: "Custom CRMs for PNW Mid-Market",
        desc: "Replace HubSpot/Salesforce with a platform you own. Lead-to-revenue plumbing for Pacific Northwest enterprise operators.",
    },
    {
        title: "Penetration Testing for SOC 2 & HIPAA",
        desc: "Web app, network, AD, and wireless engagements for SLU SaaS and biotech-adjacent firms entering enterprise procurement cycles.",
    },
];

const faqs = [
    {
        q: "Do you work with South Lake Union SaaS and biotech firms?",
        a: "Yes. SLU concentrates one of the densest pools of cloud-platform engineers, enterprise SaaS HQs, and biotech-adjacent operators in the country. The corridor between Mercer Street, Westlake, and Fairview anchors most of the buyer base.",
    },
    {
        q: "Can you cover Pacific Time delivery from a Georgia HQ?",
        a: "Yes. Our standard workday extends across Eastern and Central time with adjusted hours into Pacific Time for SLU engagements. Most syncs land in the late morning or early afternoon Pacific.",
    },
    {
        q: "Can you meet at an SLU office?",
        a: "Yes — we travel to Seattle for major engagements. Typical meetings happen at offices in SLU, the Denny Triangle, or near the Lake Union waterfront. One on-site session per major milestone is standard for larger builds.",
    },
    {
        q: "Are you familiar with biotech-adjacent compliance?",
        a: "Yes. Lab operations, sample tracking, study management, HIPAA-aware data handling, and audit logging that maps to SOC 2 CC controls are core to our biotech-adjacent practice. We do not provide clinical or medical advice — we build the platforms around the science.",
    },
    {
        q: "What is the typical SLU engagement timeline?",
        a: "Most SLU MVPs ship in 8–12 weeks against a fixed-scope quote. Full platform builds run 3–6 months and close at written acceptance — not open-ended T&M.",
    },
    {
        q: "Do you offer ongoing maintenance after launch?",
        a: "Yes — monthly retainers covering hosting, security patching, and small feature work. Or take the codebase fully in-house. No lock-in.",
    },
];

export default function SeattleSouthLakeUnionPage() {
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
                        <li className="text-gray-300">South Lake Union Seattle</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-blue-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development in South Lake Union Seattle
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        South Lake Union is the densest stretch of cloud and enterprise software in the Pacific Northwest. The corridor between Mercer Street, Westlake, Fairview, and the Lake Union waterfront concentrates cloud-platform headquarters, enterprise SaaS operators, and the biotech-adjacent SaaS bench that grew up around the Allen Institute and the Fred Hutchinson Cancer Center. The software demand follows the technical talent: cloud infrastructure, platform engineering, biotech ops tooling, and SOC 2 pen tests that survive enterprise diligence.
                    </p>
                    <ConsultationCTA label="Scope an SLU Project" city="South Lake Union, Seattle, WA" source="neighborhood-sea-slu" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why South Lake Union businesses partner with QUANT LAB</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            SLU software buyers operate at the intersection of cloud-native engineering and enterprise procurement. Cloud platforms, enterprise SaaS HQs, and biotech-adjacent operators all share one constraint: they need senior engineering accountable to the contract, security posture that survives third-party diligence, and a fixed-quote model that does not balloon mid-engagement. QUANT LAB delivers exactly that. William Beltz scopes, builds, and ships every project personally. No offshore handoff, no junior outsourcing, no agency markup. The Pacific Time delivery cadence is built in — most syncs land in the late morning or early afternoon Pacific to give both sides fresh attention.
                        </p>
                        <p>
                            The SLU buyer profile rewards depth in cloud-native infrastructure and life-sciences-adjacent SaaS. AWS, GCP, and Vercel-native deployments, internal developer platforms, biotech lab-ops tooling, HIPAA-aware data handling, and audit logging mapped to SOC 2 CC controls — these are the primitives our SLU engagements lean on. Most close on fixed-scope, fixed-price proposals with weekly Friday demos and a written acceptance milestone.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build for South Lake Union clients</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work with South Lake Union teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            We are headquartered in Macon, Georgia and run extended hours into Pacific Time for SLU engagements. Most syncs land in the late morning or early afternoon Pacific. SLU engagements are remote-first, with one on-site session per major milestone — typically at an office in the SLU grid, the Denny Triangle, or near the Lake Union waterfront. Build cycles run weekly: every Friday you get a deployed staging URL, written change notes, and the next-week plan. SLU engagements close on fixed-scope, fixed-price proposals — no open-ended T&M billing surprises.
                        </p>
                    </div>
                    <div className="mt-6">
                        <ConsultationCTA label="Book an SLU Scoping Call" city="South Lake Union, Seattle, WA" source="neighborhood-sea-slu-mid" />
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
                            { href: "/software-development-seattle-wa", title: "Seattle, WA (parent)", desc: "Full Seattle-metro coverage page." },
                            { href: "/locations/san-francisco-soma", title: "SoMa San Francisco", desc: "California venture-backed SaaS." },
                            { href: "/locations/austin-downtown", title: "Downtown Austin", desc: "Texas venture-backed SaaS." },
                            { href: "/locations/nyc-manhattan", title: "Manhattan, NYC", desc: "East Coast fintech and media." },
                            { href: "/services/cloud-infrastructure", title: "Cloud Infrastructure", desc: "AWS, GCP, and Vercel-native builds." },
                            { href: "/services/saas-platform-development", title: "SaaS Platform Development", desc: "Multi-tenant platform builds." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Pre-SOC-2 engagements." },
                            { href: "/services/api-development", title: "API Development", desc: "OAuth, webhooks, public APIs." },
                            { href: "/work/wilder-recovery", title: "Case Study: Wilder Recovery", desc: "Operations and field-team tooling." },
                            { href: "/work/j5-sales-os", title: "Case Study: J5 Sales OS", desc: "Sales operations platform." },
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
                            Ready to talk South Lake Union?
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> to scope your SLU build.
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
