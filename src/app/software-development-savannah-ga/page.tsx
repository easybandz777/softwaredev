import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Savannah GA Custom Software Development & SaaS Build | QUANT LAB",
    description:
        "Savannah custom software — port logistics, hospitality, and SaaS development from a same-state Georgia firm. Founder-led. Call (770) 652-1282.",
    slug: "software-development-savannah-ga",
    image: "/og-image.png",
    type: "article",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-savannah-ga#localbusiness",
    name: "QUANT LAB USA — Savannah Coverage",
    url: "https://quantlabusa.dev/software-development-savannah-ga",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Savannah", containedInPlace: { "@type": "State", name: "Georgia" } },
        { "@type": "City", name: "Pooler" },
        { "@type": "City", name: "Garden City" },
        { "@type": "City", name: "Hinesville" },
        { "@type": "AdministrativeArea", name: "Chatham County" },
        { "@type": "AdministrativeArea", name: "Coastal Empire" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 32.0809, longitude: -81.0912 },
    address: { "@type": "PostalAddress", addressLocality: "Savannah", addressRegion: "GA", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development",
    name: "Custom Software Development in Savannah, GA",
    provider: { "@id": "https://quantlabusa.dev/#organization" },
    areaServed: { "@type": "City", name: "Savannah", containedInPlace: { "@type": "State", name: "Georgia" } },
    description:
        "Logistics, hospitality, and SaaS development for Savannah operators — built by a same-state Georgia firm.",
    url: "https://quantlabusa.dev/software-development-savannah-ga",
};

const services = [
    {
        title: "Port & Drayage Logistics Tooling",
        desc: "Container tracking dashboards, drayage scheduling, and TMS integrations. Typical: $25k–$90k.",
    },
    {
        title: "Hospitality Booking Platforms",
        desc: "Custom alternatives to vertical SaaS for tour operators, boutique hotels, and event venues. Typical: $20k–$70k.",
    },
    {
        title: "SaaS MVPs for Savannah Founders",
        desc: "Pre-seed and bootstrapped builds at a price point real founders can stomach. Typical: $18k–$60k.",
    },
    {
        title: "EDI & Freight API Integrations",
        desc: "EDI 204/210/214, carrier APIs, and routing-guide automation for inland freight. Typical: $12k–$40k.",
    },
    {
        title: "Restaurant & Event Ops Dashboards",
        desc: "POS-integrated reporting, reservation routing, and event-day staffing tools. Typical: $15k–$45k.",
    },
    {
        title: "Manufacturing & Aerospace-Adjacent Tooling",
        desc: "Custom dashboards for Hyundai Metaplant and Gulfstream supplier-side operators. Typical: $20k–$70k.",
    },
];

const faqs = [
    {
        q: "Can you build software for tour and charter operators?",
        a: "Yes — bookings, deposits, waivers, customer comms, and after-tour review collection in one app. Several River Street and historic-district operators are exactly our profile.",
    },
    {
        q: "Do you support port-adjacent logistics integrations?",
        a: "Yes — EDI, carrier APIs, drayage scheduling, and chassis tracking. The Garden City Terminal is now the busiest single-terminal container facility in the US and the inland logistics network around it generates real tooling demand.",
    },
    {
        q: "Are you available for on-site visits to Savannah?",
        a: "Yes — Macon to Savannah is about 2.5 hours on I-16. We drive over for kickoffs, major milestones, and any work requiring physical site access.",
    },
    {
        q: "Do you work with Gulfstream and Hyundai Metaplant suppliers?",
        a: "Yes — the supplier networks around aerospace and EV manufacturing have software needs (compliance tracking, supplier portals, defect reporting) that we scope per requirement.",
    },
    {
        q: "Can you build for the SCAD-adjacent creative and content economy?",
        a: "Yes — content management, portfolio platforms, alumni networks, and SaaS for creative-services agencies are well within scope.",
    },
    {
        q: "Do you work with hotels and short-term rental operators?",
        a: "Yes — custom booking engines for boutique hotels and STR operators who want to skip the OTA commission structure on direct bookings.",
    },
    {
        q: "What is your typical engagement model?",
        a: "Fixed-scope, fixed-price proposals on most engagements. Weekly Friday staging URLs. Full code and account handover at the end.",
    },
    {
        q: "Are you familiar with Georgia hospitality and event taxation?",
        a: "Yes — for booking platforms and event tools, we wire Stripe Tax and Avalara correctly for Georgia hotel-motel tax and event-services collection.",
    },
];

export default function SavannahLandingPage() {
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

            <div className="container mx-auto px-6 max-w-4xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/services" className="hover:text-sky-400 transition-colors">Services</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">Savannah, GA</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-blue-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development in Savannah, GA
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Savannah&apos;s economy runs on four pillars now: the Port of Savannah (busiest single-terminal container facility in the US), a deep hospitality and tourism sector, the Hyundai Metaplant EV operation in Bryan County, and a fast-growing tech and creative footprint emerging around SCAD and the historic district.
                    </p>
                    <ConsultationCTA label="Start a Savannah Project" city="Savannah, GA" source="city-savannah" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Each of those markets generates demand for very different software — and QUANT LAB USA builds for all of them from a Georgia HQ. We are same-state, same-time-zone, and a 2.5-hour drive down I-16 when on-site work is warranted.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Savannah businesses choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Savannah&apos;s coastal economy has changed sharply in the last five years. Georgia Ports Authority crossed three million TEUs annually at the Garden City Terminal and now ranks as the busiest single-terminal container facility in the country. The $7.6 billion Hyundai Metaplant in Bryan County brought EV battery and assembly demand into the region, with a supplier network spreading along I-16 and US-280. Gulfstream Aerospace continues to anchor manufacturing-engineering employment north of the airport. On the tourism side, hospitality runs as one of the region&apos;s top employers — Forsyth Park hotels, River Street operators, SCAD-anchored cultural tourism, and STR operators across the historic district. SCAD itself spins out content, creative-agency, and SaaS founders every cycle.
                        </p>
                        <p>
                            Atlanta agencies treat Savannah as an out-of-market account. We do not. We are a same-state firm, we drive down I-16, and we ship product. No offshore handoff, no junior outsourcing — the person on your kickoff call writes the code. For coastal operators that means the same engagement standard Atlanta-metro buyers get, without the metro-Atlanta surcharge or the assumption that you should run all your reviews over video.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for Savannah clients</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Local proof of work</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA&apos;s portfolio includes UEhub, <Link href="/work/wilder-recovery" className="text-sky-400 hover:underline">Wilder Recovery</Link>, and Aaron Coleman Music — examples of niche operational platforms and content-driven sites shipped to production. <Link href="/work/wilder-recovery" className="text-sky-400 hover:underline">Wilder Recovery</Link> in particular is relevant for Savannah operators: a full lot-management platform with vehicle intake, photo and document chain-of-custody, personal-property inventory, role-based admin, and an immutable audit log. The same architecture transfers cleanly to drayage yards, container terminals, and bonded warehouse operations along the coastal corridor.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Georgia-based — 2.5-hour drive down I-16",
                            "Logistics, hospitality, manufacturing, and SaaS specialization",
                            "On-site discovery and kickoffs available",
                            "Modern Next.js / TypeScript / PostgreSQL / Docker stack",
                            "Fixed-scope quotes — no T&M billing surprises",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work with Savannah teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            We are a 2.5-hour drive down I-16, so on-site work is realistic and routine. Kickoff is typically a 60-minute video scope, then an on-site afternoon — at the historic-district office, the Pooler logistics campus, the Garden City terminal area, or anywhere on Hutchinson Island as scope warrants. After kickoff, build cycles run weekly: every Friday you get a deployed staging URL, written notes on what changed, and the next-week plan. Most engagements close on fixed-scope, fixed-price proposals with a written acceptance milestone. Eastern Time HQ means full overlap with your office and any inland freight or supply-chain partners across the eastern seaboard. When the project ships, the code, the database, and the hosting accounts all transfer to you.
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services & nearby cities</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "Operations dashboards and CRMs." },
                            { href: "/services/web-applications", title: "Web Applications", desc: "SaaS MVPs and customer-facing builds." },
                            { href: "/services/custom-crm-development", title: "Custom CRM Development", desc: "Own your CRM — don&apos;t rent it." },
                            { href: "/services/payments-invoicing-licensing", title: "Payments & Licensing", desc: "Stripe-powered subscription and licensing." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, network, and AD engagements." },
                            { href: "/blog/custom-crm-development-guide", title: "Custom CRM Development Guide", desc: "Pillar resource — build vs. buy, costs." },
                            { href: "/work/wilder-recovery", title: "Case Study: Wilder Recovery", desc: "Lot-management with chain-of-custody." },
                            { href: "/work/hobbspeak", title: "Case Study: HobbsPeak", desc: "Headless commerce with live catalog sync." },
                            { href: "/software-development-atlanta-ga", title: "Atlanta, GA", desc: "Fintech, logistics, and SaaS." },
                            { href: "/software-development-macon-ga", title: "Macon, GA", desc: "Our HQ — Middle Georgia coverage." },
                            { href: "/software-development-charlotte-nc", title: "Charlotte, NC", desc: "Banking and fintech-adjacent work." },
                            { href: "/contact", title: "Start a Project", desc: "Scoping calls, fixed-quote proposals." },
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
                            Start a Savannah project.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> to start a Savannah project.
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
