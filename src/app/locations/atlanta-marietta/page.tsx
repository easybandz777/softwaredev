import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Software Development in Marietta GA | QUANT LAB USA",
    description:
        "Custom software development & pen testing for Marietta and Cobb County companies. Founder-led, same-state Georgia firm. Call (770) 652-1282.",
    alternates: { canonical: "https://quantlabusa.dev/locations/atlanta-marietta" },
    openGraph: {
        title: "Custom Software Development in Marietta GA | QUANT LAB USA",
        description: "Cobb County software builds, contractor CRMs, and SOC 2 pen testing for Marietta-area operators.",
        url: "https://quantlabusa.dev/locations/atlanta-marietta",
        type: "article",
    },
    twitter: {
        card: "summary",
        title: "Custom Software Development in Marietta GA | QUANT LAB USA",
        description: "Cobb County software builds and SOC 2 pen testing for Marietta-area operators.",
    },
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/locations/atlanta-marietta#localbusiness",
    name: "QUANT LAB USA — Marietta Coverage",
    url: "https://quantlabusa.dev/locations/atlanta-marietta",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Marietta", containedInPlace: { "@type": "State", name: "Georgia" } },
        { "@type": "City", name: "Kennesaw" },
        { "@type": "City", name: "Smyrna" },
        { "@type": "City", name: "Vinings" },
        { "@type": "AdministrativeArea", name: "Cobb County" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 33.9526, longitude: -84.5499 },
    address: { "@type": "PostalAddress", addressLocality: "Marietta", addressRegion: "GA", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development",
    name: "Custom Software Development in Marietta, GA",
    provider: { "@id": "https://quantlabusa.dev/#organization" },
    areaServed: { "@type": "City", name: "Marietta, GA" },
    description:
        "Custom CRMs, operations platforms, contractor estimating systems, and penetration tests for Marietta and Cobb County operators.",
    url: "https://quantlabusa.dev/locations/atlanta-marietta",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Locations", item: "https://quantlabusa.dev/locations" },
        { "@type": "ListItem", position: 3, name: "Marietta", item: "https://quantlabusa.dev/locations/atlanta-marietta" },
    ],
};

const services = [
    {
        title: "Contractor & Field Service Platforms",
        desc: "Mobile-first estimate flows, automated PDF proposals, scheduling, and admin portals for Cobb County contractors and field service operators.",
    },
    {
        title: "QuickBooks-Synced Ops Platforms",
        desc: "Deep QuickBooks Online integration covering customers, vendors, items, and chart-of-accounts. Bookkeeping reconciliation without spreadsheet manual entry.",
    },
    {
        title: "Custom CRMs for Mid-Market Cobb Operators",
        desc: "Replace HubSpot/Salesforce stacks with platforms you own. Lead-to-revenue plumbing without per-seat creep.",
    },
    {
        title: "Penetration Testing",
        desc: "Web app, network, and AD engagements for Marietta-area SaaS, healthcare-adjacent, and defense-contractor suppliers.",
    },
];

const faqs = [
    {
        q: "Do you cover Cobb County more broadly than just Marietta?",
        a: "Yes — Marietta, Kennesaw, Smyrna, Vinings, and the broader Cobb County operator base. Our Bridgepointe Painting case study spans Cobb, Roswell, Sandy Springs, and Buckhead.",
    },
    {
        q: "What sectors are strongest in the Marietta market?",
        a: "Cobb County skews heavy contracting, field services, healthcare-adjacent operators, defense suppliers around Dobbins ARB, and mid-market service businesses. Each has consistent custom software needs around estimating, scheduling, and dispatch.",
    },
    {
        q: "Can you meet at a Marietta or Cobb County office?",
        a: "Yes. We drive up from Macon — Marietta is roughly two hours via I-75 and I-285. For engagements above ~$25k we plan one or two on-site sessions at your office.",
    },
    {
        q: "Are you familiar with QuickBooks-heavy operators?",
        a: "Yes — Cobb County mid-market operators run heavily on QuickBooks Online. Our Bridgepointe Painting build covers deep QBO sync — customers, vendors, items, and chart-of-accounts — so bookkeeping reconciliation runs without manual spreadsheet entry.",
    },
    {
        q: "What is the typical Marietta engagement timeline?",
        a: "Most Marietta MVPs ship in 8–12 weeks against a fixed-scope quote. Full builds run 3–6 months and close at written acceptance.",
    },
    {
        q: "Do you offer ongoing maintenance after launch?",
        a: "Yes — monthly retainers for hosting, security patching, and small feature work. Or take the codebase fully in-house. No lock-in.",
    },
];

export default function AtlantaMariettaPage() {
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
                        <li className="text-gray-300">Marietta</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-blue-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development in Marietta, GA
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Marietta and the broader Cobb County market — Kennesaw, Smyrna, Vinings, and the corridor along I-75 and I-285 northwest of Atlanta — concentrates a deep mid-market base: contractors, field service operators, healthcare-adjacent firms, and defense suppliers around Dobbins ARB. Software needs cluster around estimating, scheduling, dispatch, and QuickBooks-synced operations.
                    </p>
                    <ConsultationCTA label="Scope a Marietta Project" city="Marietta, GA" source="neighborhood-marietta" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Marietta businesses partner with QUANT LAB</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Cobb County mid-market operators want software that fits how they actually run — not a generic SaaS suite that forces a workflow change. QUANT LAB delivers exactly that. William Beltz scopes, builds, and ships every project personally. No offshore handoff, no junior outsourcing, no agency markup layer. Most Marietta engagements close on fixed-scope, fixed-price proposals with weekly Friday demos and a written acceptance milestone.
                        </p>
                        <p>
                            Our Bridgepointe Painting case study — a luxury contractor across Cobb, Roswell, Sandy Springs, and Buckhead — runs on a bespoke platform with deep QuickBooks Online sync covering customers, vendors, items, and chart-of-accounts. Bookkeeping reconciliation time dropped meaningfully because the file no longer requires manual entry from spreadsheets. That same QBO-aware build pattern fits most Cobb County operators we talk to. Healthcare-adjacent and defense-supplier clients add SOC 2 or CMMC-mapped pen testing on top.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build for Marietta clients</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work with Marietta teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            We are Macon-based and drive up to Cobb County for on-site engagements as scope warrants — Marietta is about two hours via I-75 and I-285. Most kickoffs run as a video call followed by a single on-site afternoon to walk the workflow we&apos;re replacing. From there, builds run weekly: every Friday you get a deployed staging URL, written change notes, and the next-week plan. Marietta engagements close on fixed-scope proposals — no open-ended T&M billing surprises.
                        </p>
                    </div>
                    <div className="mt-6">
                        <ConsultationCTA label="Book a Marietta Scoping Call" city="Marietta, GA" source="neighborhood-marietta-mid" />
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
                            { href: "/locations/atlanta-midtown", title: "Midtown Atlanta", desc: "Tech Square and Georgia Tech corridor." },
                            { href: "/locations/atlanta-alpharetta", title: "Alpharetta, GA", desc: "North metro fintech and SaaS." },
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "Ops platforms built around your workflow." },
                            { href: "/services/custom-crm-development", title: "Custom CRM Development", desc: "Own your CRM. No per-seat creep." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, network, AD engagements." },
                            { href: "/services/payments-invoicing-licensing", title: "Payments & Licensing", desc: "Stripe and ACH-grade billing." },
                            { href: "/work/bridgepointe-painting", title: "Case Study: Bridgepointe Painting", desc: "Cobb-area QBO-synced ops platform." },
                            { href: "/work/contractor-estimating-proposal-engine", title: "Case Study: Estimating Engine", desc: "Contractor estimate-to-proposal automation." },
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
                            Ready to talk Marietta?
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> to scope your Cobb County build.
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
