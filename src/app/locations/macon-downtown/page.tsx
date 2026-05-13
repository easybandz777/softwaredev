import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Custom Software Development in Downtown Macon GA | QUANT LAB",
    description:
        "Custom software development in Downtown Macon GA — Mercer corridor builds, custom CRMs, and pen testing. Founder-led, local Middle Georgia delivery.",
    alternates: { canonical: "https://quantlabusa.dev/locations/macon-downtown" },
    openGraph: {
        title: "Custom Software Development in Downtown Macon GA | QUANT LAB",
        description: "Downtown Macon software builds, Mercer-corridor SaaS, and SOC 2 pen testing. Local Middle Georgia delivery.",
        url: "https://quantlabusa.dev/locations/macon-downtown",
        type: "article",
    },
    twitter: {
        card: "summary",
        title: "Custom Software Development in Downtown Macon GA | QUANT LAB",
        description: "Downtown Macon software builds and SOC 2 pen testing.",
    },
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/locations/macon-downtown#localbusiness",
    name: "QUANT LAB USA — Downtown Macon Coverage",
    url: "https://quantlabusa.dev/locations/macon-downtown",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "Place", name: "Downtown Macon", containedInPlace: { "@type": "City", name: "Macon" } },
        { "@type": "Place", name: "Mercer University corridor" },
        { "@type": "Place", name: "College Hill" },
        { "@type": "Place", name: "Bealls Hill" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 32.8407, longitude: -83.6324 },
    address: { "@type": "PostalAddress", addressLocality: "Macon", addressRegion: "GA", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development",
    name: "Custom Software Development in Downtown Macon, GA",
    provider: { "@id": "https://quantlabusa.dev/#organization" },
    areaServed: { "@type": "Place", name: "Downtown Macon, GA" },
    description:
        "Custom software development, CRMs, ops platforms, and penetration tests for Downtown Macon, the Mercer corridor, and Middle Georgia operators.",
    url: "https://quantlabusa.dev/locations/macon-downtown",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Locations", item: "https://quantlabusa.dev/locations" },
        { "@type": "ListItem", position: 3, name: "Downtown Macon", item: "https://quantlabusa.dev/locations/macon-downtown" },
    ],
};

const services = [
    {
        title: "Custom CRMs for Middle Georgia Operators",
        desc: "Replace HubSpot/Salesforce with a platform you own. Lead-to-revenue plumbing without per-seat creep — built for Downtown Macon professional services and Mercer-adjacent operators.",
    },
    {
        title: "Mercer & University-Adjacent Tooling",
        desc: "Student systems, alumni CRMs, departmental tooling, and research-adjacent platforms for organizations operating around the Mercer corridor.",
    },
    {
        title: "Penetration Testing for SOC 2 & HIPAA",
        desc: "Web app, network, and AD engagements for healthcare-adjacent, fintech, and B2B SaaS operators in Middle Georgia.",
    },
    {
        title: "Operations Dashboards & Custom SaaS",
        desc: "Real-time KPI tooling, scheduling, dispatch, and admin portals for service operators across Bibb County and the I-75 corridor.",
    },
];

const faqs = [
    {
        q: "Are you actually based in Macon?",
        a: "Yes. QUANT LAB USA INC is a Georgia C-Corp headquartered in Macon — Middle Georgia is our home market. The Downtown Macon corridor between the Mercer campus, College Hill, and the Ocmulgee River is our most familiar geography.",
    },
    {
        q: "Do you work with Mercer-adjacent operators?",
        a: "Yes. Mercer University and the medical and law schools anchor a steady ecosystem of student-services SaaS, departmental tooling, alumni CRMs, and research-adjacent platforms. We have scoped each of those engagement types in the past.",
    },
    {
        q: "Can we meet at a Downtown Macon office or co-working space?",
        a: "Yes — Downtown Macon is our home base. We meet at offices along Mulberry Street, Poplar Street, and Cherry Street, or at local co-working space when that is more convenient.",
    },
    {
        q: "How does Downtown Macon differ from greater Bibb County for a software buyer?",
        a: "Downtown skews professional services, Mercer-adjacent organizations, and creative or hospitality operators around the College Hill corridor. Greater Bibb County widens the market to manufacturing, logistics, and healthcare operators along the I-75 corridor and the Robins AFB-adjacent supplier base.",
    },
    {
        q: "What is the typical Macon engagement timeline?",
        a: "Most Macon MVPs ship in 8–12 weeks against a fixed-scope quote. Full builds run 3–6 months and close at written acceptance — not open-ended T&M.",
    },
    {
        q: "Do you offer ongoing maintenance after launch?",
        a: "Yes — monthly retainers for hosting, security patching, and small feature work. Or take the codebase fully in-house. No lock-in.",
    },
];

export default function MaconDowntownPage() {
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
                        <li className="text-gray-300">Downtown Macon</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-blue-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development in Downtown Macon GA
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Downtown Macon is our home base. The corridor running from Mercer University through College Hill, Beall&apos;s Hill, and the Cherry Street downtown core anchors Middle Georgia&apos;s professional services, healthcare-adjacent operators, university ecosystem, and creative economy. As a Georgia C-Corp headquartered here, we know this submarket better than any other.
                    </p>
                    <ConsultationCTA label="Scope a Downtown Macon Project" city="Downtown Macon, GA" source="neighborhood-macon-downtown" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Downtown Macon businesses partner with QUANT LAB</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Downtown Macon software buyers face the same constraint as their counterparts in Atlanta or Charlotte: they need senior engineering accountable to the contract, security posture that survives diligence, and a fixed-quote model that does not balloon mid-engagement. The difference is that most options force you to pay an Atlanta agency markup just to get a senior engineer on the call. QUANT LAB sits directly inside Middle Georgia and runs the same engineering bench. Same delivery cadence. Same fixed-scope structure. Local rates.
                        </p>
                        <p>
                            William Beltz scopes, builds, and ships every project personally — no offshore handoff, no junior outsourcing, no agency markup layer. For Downtown Macon clients that often means in-person kickoffs, on-site reviews, and the kind of accountability that only a local vendor can offer. Mercer-adjacent organizations, downtown professional services, and the creative economy along Cherry Street all get the same delivery model: weekly Friday staging URLs, written change notes, and a single written acceptance milestone.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build for Downtown Macon clients</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work with Downtown Macon teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Downtown Macon is our home base, which means in-person kickoffs and on-site reviews are easy to schedule. Most engagements start with a coffee at a downtown spot followed by a walkthrough of the workflow we&apos;re replacing. From there, builds run weekly: every Friday you get a deployed staging URL, written change notes, and the next-week plan. Macon engagements close on fixed-scope, fixed-price proposals with a written acceptance milestone — no T&M billing surprises.
                        </p>
                    </div>
                    <div className="mt-6">
                        <ConsultationCTA label="Book a Downtown Macon Coffee" city="Downtown Macon, GA" source="neighborhood-macon-downtown-mid" />
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
                            { href: "/software-development-macon-ga", title: "Macon, GA (parent)", desc: "Full Macon-metro coverage page." },
                            { href: "/locations/macon-bibb-county", title: "Bibb County, GA", desc: "Greater Macon market — manufacturing and healthcare." },
                            { href: "/locations/atlanta-buckhead", title: "Buckhead Atlanta", desc: "Atlanta wealth and corporate HQ corridor." },
                            { href: "/locations/atlanta-midtown", title: "Midtown Atlanta", desc: "Tech Square and Georgia Tech corridor." },
                            { href: "/services/custom-crm-development", title: "Custom CRM Development", desc: "Own your CRM. No per-seat creep." },
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "Ops platforms built around your workflow." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, network, AD engagements." },
                            { href: "/services/payments-invoicing-licensing", title: "Payments & Licensing", desc: "Stripe and ACH-grade billing." },
                            { href: "/work/northcrest-fence", title: "Case Study: Northcrest Fence", desc: "Contractor sales platform." },
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
                            Ready to talk Downtown Macon?
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> to scope your Middle Georgia build.
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
