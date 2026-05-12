import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { MapPin, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Columbus GA Custom Software Developer & Pen Testing | QUANT LAB",
    description:
        "Columbus GA software development — CRMs, dashboards, Stripe, and pen testing for businesses around Fort Moore and the Chattahoochee Valley. Call (770) 652-1282.",
    alternates: { canonical: "https://quantlabusa.dev/software-development-columbus-ga" },
    openGraph: {
        title: "Columbus GA Custom Software Developer & Pen Testing | QUANT LAB",
        description:
            "Columbus GA software development — CRMs, dashboards, Stripe, and pen testing around Fort Moore.",
        url: "https://quantlabusa.dev/software-development-columbus-ga",
        type: "article",
    },
    twitter: {
        card: "summary",
        title: "Columbus GA Custom Software Developer & Pen Testing | QUANT LAB",
        description:
            "Columbus GA software development — CRMs, dashboards, Stripe, and pen testing around Fort Moore.",
    },
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-columbus-ga#localbusiness",
    name: "QUANT LAB USA — Columbus Coverage",
    url: "https://quantlabusa.dev/software-development-columbus-ga",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Columbus", containedInPlace: { "@type": "State", name: "Georgia" } },
        { "@type": "City", name: "Phenix City", containedInPlace: { "@type": "State", name: "Alabama" } },
        { "@type": "City", name: "Fort Moore" },
        { "@type": "AdministrativeArea", name: "Muscogee County" },
        { "@type": "AdministrativeArea", name: "Chattahoochee Valley" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 32.4609, longitude: -84.9877 },
    address: { "@type": "PostalAddress", addressLocality: "Columbus", addressRegion: "GA", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development",
    name: "Custom Software Development in Columbus, GA",
    provider: { "@id": "https://quantlabusa.dev/#org" },
    areaServed: { "@type": "City", name: "Columbus", containedInPlace: { "@type": "State", name: "Georgia" } },
    description:
        "Founder-led custom CRMs, Stripe billing, operations dashboards, and pen testing for Chattahoochee Valley businesses.",
    url: "https://quantlabusa.dev/software-development-columbus-ga",
};

const services = [
    {
        title: "Custom CRMs",
        desc: "Replace clipboard-and-spreadsheet workflows with a system your team will actually adopt. Typical: $20k–$70k.",
    },
    {
        title: "Stripe & Billing Integrations",
        desc: "Subscription, one-time, and milestone-based payment flows. Typical: $8k–$25k.",
    },
    {
        title: "Operations Dashboards",
        desc: "Consolidate inventory, dispatch, jobsite, and crew data into one screen. Typical: $18k–$60k.",
    },
    {
        title: "Insurance & Supplemental Coverage Tools",
        desc: "Custom intake, comparison, and lead-routing tools for Aflac-network agents. Typical: $12k–$40k.",
    },
    {
        title: "Manufacturing & Logistics Tooling",
        desc: "WMS-adjacent dashboards, shipment tracking, and crew scheduling for valley operators. Typical: $20k–$70k.",
    },
    {
        title: "Penetration Testing for Federal-Adjacent Vendors",
        desc: "Web app, network, and AD engagements for Fort Moore contractors and their suppliers. Typical: $8k–$25k.",
    },
];

const faqs = [
    {
        q: "Do you serve businesses on the Alabama side of the river?",
        a: "Yes — Phenix City, Smiths Station, and the broader Chattahoochee Valley absolutely. Cross-state work is routine for us.",
    },
    {
        q: "How long does a custom CRM project take?",
        a: "A focused MVP typically lands in 6–10 weeks; full builds 3–5 months. We quote fixed scope on most engagements.",
    },
    {
        q: "Can you integrate with our existing tooling?",
        a: "Usually yes — QuickBooks, Stripe, HubSpot, Salesforce, and most modern APIs are well covered.",
    },
    {
        q: "Do you work with Fort Moore contractors and federal-prime suppliers?",
        a: "Yes — we scope unclassified work for cleared organizations and produce pen test reports formatted for federal supply-chain review.",
    },
    {
        q: "Are you familiar with multi-state sales tax for Georgia-Alabama operators?",
        a: "Yes — for SaaS and physical goods, we wire Stripe Tax correctly at billing time so cross-state nexus is handled.",
    },
    {
        q: "Do you support Aflac-network or insurance-agency workflows?",
        a: "Yes — Columbus is Aflac&apos;s home base, and we have scoped lead routing, comparison, and intake tooling for supplemental-coverage agents in the network.",
    },
    {
        q: "Can you meet in person in Columbus?",
        a: "Yes — we drive over from Macon and Atlanta for kickoffs and major milestones. Most discovery runs as a video call followed by one on-site afternoon.",
    },
    {
        q: "What is your timezone overlap with Eastern and Central?",
        a: "Georgia HQ — full Eastern Time, with comfortable overlap into Central for Alabama-side operators.",
    },
];

export default function ColumbusLandingPage() {
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
                        <li className="text-gray-300">Columbus, GA</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-blue-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development in Columbus, GA
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Columbus and the surrounding Chattahoochee Valley have a unique business profile: a strong defense-adjacent economy around Fort Moore, established insurance and finance anchored by Aflac and TSYS legacy ecosystems, and a steady stream of family-owned businesses across the river into Alabama.
                    </p>
                    <ConsultationCTA label="Scope a Columbus Project" city="Columbus, GA" source="city-columbus" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA builds the custom software that helps these operators digitize without taking on enterprise-priced consultants. From Phenix City to Smiths Station and across Muscogee County, we serve a metro that needs senior engineering at a price point regional consultancies cannot match.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Columbus businesses choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Columbus has an unusually concentrated economic profile for a city its size. Aflac employs more than 5,000 people downtown and anchors a deep supplemental-insurance agency network across the southeast. Synovus is headquartered here. TSYS — now Global Payments — left a card-processing engineering footprint that still shapes the local technical labor market. Fort Moore, formerly Fort Benning, supports the largest infantry training command in the Army and a contractor ecosystem stretching from Columbus through Cusseta. River-adjacent manufacturers in metals, textiles, and food processing round out the local economy. Each of these verticals has the same software problem: the national tools cost too much and the local IT shops do not match the technical bar Columbus buyers actually need.
                        </p>
                        <p>
                            Founder-led, Georgia-based, fixed-scope quotes. We do not staff projects with junior offshore developers. William Beltz owns the build personally. That is rare at our price point, and it is the entire reason owners along the Chattahoochee work with us instead of national consultancies. We are a 90-minute drive down I-185 from Atlanta and two hours from our Macon HQ — close enough for on-site work, far enough that we are not living in your office.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for Columbus clients</h2>
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
                            Our deployed client portfolio is publicly browsable. <Link href="/work/northcrest-fence" className="text-sky-400 hover:underline">Northcrest Fence &amp; Gate</Link>, <Link href="/work/bridgepointe-painting" className="text-sky-400 hover:underline">Bridgepointe Painting</Link>, and <Link href="/work/hobbspeak" className="text-sky-400 hover:underline">HobbsPeak</Link> all run on infrastructure we built and maintain. The Bridgepointe build in particular is relevant for Columbus contractors and supplier-side businesses: deep QuickBooks Online sync covering customers, vendors, items, and accounts, plus a customer portal, employee management, and project tracking. The same architecture transfers cleanly to manufacturing, contracting, and supplemental-insurance agency workflows across the valley.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Georgia-based with full coverage of the Chattahoochee Valley",
                            "Serves businesses on both sides of the river including Phenix City",
                            "Fixed-scope quotes — no T&M billing surprises",
                            "Modern Next.js / TypeScript / PostgreSQL / Docker stack",
                            "Founder-led delivery — no junior offshore handoff",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work with Columbus teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Most Columbus engagements start with a 60-minute scoping call by video. From there we drive down I-185 for an on-site afternoon — Aflac downtown, the industrial corridor along Victory Drive, or the Phenix City side as needed — to walk the actual workflow we are replacing. After kickoff, build cycles run weekly: every Friday you get a staging URL, written notes, and the next-week plan. We bill fixed scope, fixed price on virtually every Columbus engagement. No T&M surprises, no scope creep without a written change order. Eastern Time HQ gives full overlap with both your office hours and any Atlanta-based vendors or partners you coordinate with. When a project ships, the code, the database, and the hosting accounts transfer to you in full.
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
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "CRMs and ops tooling built around your workflow." },
                            { href: "/services/custom-crm-development", title: "Custom CRM Development", desc: "Own your CRM — don&apos;t rent it." },
                            { href: "/services/payments-invoicing-licensing", title: "Payments & Licensing", desc: "Stripe-powered billing and licensing systems." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, network, and Active Directory engagements." },
                            { href: "/services/web-applications", title: "Web Applications", desc: "Modern Next.js / TypeScript builds." },
                            { href: "/blog/custom-crm-development-guide", title: "Custom CRM Development Guide", desc: "Pillar resource — build vs. buy, cost models." },
                            { href: "/work/bridgepointe-painting", title: "Case Study: Bridgepointe", desc: "QuickBooks-synced contractor ops platform." },
                            { href: "/work/hobbspeak", title: "Case Study: HobbsPeak", desc: "Headless commerce with live wholesale sync." },
                            { href: "/software-development-macon-ga", title: "Macon, GA", desc: "Our HQ — Middle Georgia coverage." },
                            { href: "/software-development-atlanta-ga", title: "Atlanta, GA", desc: "Fintech, logistics, and SaaS." },
                            { href: "/software-development-augusta-ga", title: "Augusta, GA", desc: "Cyber corridor and Fort Eisenhower." },
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
                            Build it with a Georgia firm.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> to scope your Columbus project.
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
