import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Custom Software Development in Bibb County GA | QUANT LAB",
    description:
        "Custom software development in Bibb County GA — manufacturing, healthcare, and I-75 corridor operators. Founder-led, local Middle Georgia delivery.",
    alternates: { canonical: "https://quantlabusa.dev/locations/macon-bibb-county" },
    openGraph: {
        title: "Custom Software Development in Bibb County GA | QUANT LAB",
        description: "Bibb County software builds for manufacturing, healthcare, and I-75 corridor operators in Middle Georgia.",
        url: "https://quantlabusa.dev/locations/macon-bibb-county",
        type: "article",
    },
    twitter: {
        card: "summary",
        title: "Custom Software Development in Bibb County GA | QUANT LAB",
        description: "Bibb County software builds for Middle Georgia manufacturers and healthcare operators.",
    },
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/locations/macon-bibb-county#localbusiness",
    name: "QUANT LAB USA — Bibb County Coverage",
    url: "https://quantlabusa.dev/locations/macon-bibb-county",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "AdministrativeArea", name: "Bibb County", containedInPlace: { "@type": "State", name: "Georgia" } },
        { "@type": "City", name: "Macon" },
        { "@type": "Place", name: "Robins AFB-adjacent corridor" },
        { "@type": "Place", name: "I-75 corridor" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 32.8068, longitude: -83.6324 },
    address: { "@type": "PostalAddress", addressLocality: "Macon", addressRegion: "GA", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development",
    name: "Custom Software Development in Bibb County, GA",
    provider: { "@id": "https://quantlabusa.dev/#organization" },
    areaServed: { "@type": "AdministrativeArea", name: "Bibb County, GA" },
    description:
        "Custom software, manufacturing ops platforms, healthcare-adjacent tooling, and pen testing for Bibb County operators across Middle Georgia.",
    url: "https://quantlabusa.dev/locations/macon-bibb-county",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Locations", item: "https://quantlabusa.dev/locations" },
        { "@type": "ListItem", position: 3, name: "Bibb County", item: "https://quantlabusa.dev/locations/macon-bibb-county" },
    ],
};

const services = [
    {
        title: "Manufacturing & Distribution Ops",
        desc: "Inventory, dispatch, and warehouse tooling consolidating legacy WMS feeds. Built for Bibb County and I-75 corridor manufacturers and distributors.",
    },
    {
        title: "Healthcare-Adjacent SaaS",
        desc: "Patient intake, scheduling, and administrative tooling for clinics and ancillary healthcare operators around the Atrium / Coliseum medical corridors.",
    },
    {
        title: "Defense-Supplier Tooling",
        desc: "Robins AFB-adjacent suppliers regularly need scheduling, compliance reporting, and audit-ready ops platforms. We scope and deliver these on fixed-quote terms.",
    },
    {
        title: "Penetration Testing for CMMC & SOC 2",
        desc: "Network, AD, and web app engagements that map directly to CMMC, SOC 2 CC controls, and customer due-diligence questionnaires.",
    },
];

const faqs = [
    {
        q: "What sectors are strongest in Bibb County?",
        a: "Manufacturing, distribution, and healthcare dominate the Bibb County market. Robins AFB sits just south in Houston County but its supplier ecosystem stretches into Bibb. The I-75 corridor between Macon and Warner Robins anchors most of the operator base.",
    },
    {
        q: "Do you work with Robins AFB-adjacent suppliers?",
        a: "Yes. Defense suppliers need scheduling, compliance reporting, audit-ready ops platforms, and pen test reports that map to CMMC controls. We scope each of those engagement types on fixed-quote terms.",
    },
    {
        q: "Are you actually based in Middle Georgia?",
        a: "Yes. QUANT LAB USA INC is a Georgia C-Corp headquartered in Macon — Bibb County is our home county. We are not an out-of-state agency parachuting in.",
    },
    {
        q: "How does Bibb County differ from Downtown Macon for a software buyer?",
        a: "Downtown Macon skews professional services, Mercer-adjacent organizations, and the creative economy. Greater Bibb County widens the market to manufacturing, healthcare, and defense-supplier operators along the I-75 corridor.",
    },
    {
        q: "What is the typical Bibb County engagement timeline?",
        a: "Most Bibb County MVPs ship in 8–12 weeks against a fixed-scope quote. Larger manufacturing and ops platform builds run 3–6 months and close at written acceptance — not open-ended T&M.",
    },
    {
        q: "Can you support Atlanta-bound work from a Bibb County HQ?",
        a: "Yes. We regularly travel up I-75 — Macon to Atlanta is about 80 minutes. Many of our Bibb County clients also have Atlanta-metro operations and we handle both ends.",
    },
];

export default function MaconBibbCountyPage() {
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
                        <li className="text-gray-300">Bibb County</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-blue-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development in Bibb County GA
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Bibb County is the Middle Georgia anchor — Macon at its center and the I-75 corridor running south toward Robins AFB. The operator base spans manufacturing and distribution along the freight corridor, healthcare and ancillary clinics around the Coliseum and Atrium medical campuses, and a steady supplier ecosystem feeding the Air Force base just down the highway.
                    </p>
                    <ConsultationCTA label="Scope a Bibb County Project" city="Bibb County, GA" source="neighborhood-bibb-county" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Bibb County businesses partner with QUANT LAB</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Middle Georgia operators face two procurement realities: either pay an Atlanta agency markup to get a senior engineer on the call, or settle for a local generalist without the engineering depth a serious build requires. QUANT LAB closes that gap. We are a Georgia C-Corp headquartered in Macon, with a senior engineering bench that runs the same delivery cadence as any agency in Atlanta or Charlotte. No offshore handoff, no junior outsourcing, no agency markup. William Beltz scopes, builds, and ships every project personally.
                        </p>
                        <p>
                            The Bibb County buyer profile rewards depth in operations engineering. Manufacturers want inventory, dispatch, and warehouse tooling that consolidates legacy WMS feeds. Healthcare-adjacent operators want patient-intake and scheduling platforms that survive HIPAA-adjacent review. Defense suppliers want CMMC-mapped pen tests and audit-ready compliance tooling. We deliver all three on fixed-scope, fixed-price proposals with weekly Friday demos and written acceptance milestones.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build for Bibb County clients</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work with Bibb County teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Bibb County is our home county — meeting at your office, a warehouse along the I-75 corridor, or a downtown Macon coffee shop is a normal Tuesday. Most engagements start with a video call or in-person walkthrough of the workflow we&apos;re replacing. From there, builds run weekly: every Friday you get a deployed staging URL, written change notes, and the next-week plan. Bibb County engagements close on fixed-scope, fixed-price proposals with a written acceptance milestone — no T&M billing surprises.
                        </p>
                    </div>
                    <div className="mt-6">
                        <ConsultationCTA label="Book a Bibb County Visit" city="Bibb County, GA" source="neighborhood-bibb-county-mid" />
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
                            { href: "/locations/macon-downtown", title: "Downtown Macon", desc: "Mercer corridor and professional services." },
                            { href: "/locations/atlanta-marietta", title: "Marietta, GA", desc: "Cobb County and northwest Atlanta metro." },
                            { href: "/locations/atlanta-alpharetta", title: "Alpharetta, GA", desc: "North metro fintech and SaaS." },
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "Manufacturing and ops platforms." },
                            { href: "/services/mitre-attack-assessment", title: "MITRE ATT&CK Assessment", desc: "CMMC-aligned defense-supplier security." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, network, AD engagements." },
                            { href: "/services/cloud-infrastructure", title: "Cloud Infrastructure", desc: "AWS/Vercel/Docker deployments." },
                            { href: "/work/motorcycle-shop-ops-platform", title: "Case Study: Motorcycle Shop Ops", desc: "Service operations platform." },
                            { href: "/work/hobbspeak", title: "Case Study: Hobbspeak", desc: "Custom communication platform." },
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
                            Ready to talk Bibb County?
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
