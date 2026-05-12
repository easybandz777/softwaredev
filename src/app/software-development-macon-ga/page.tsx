import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { MapPin, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Custom Software Development in Macon, GA | QUANT LAB USA",
    description:
        "Macon-based, founder-led software developer building CRMs, web apps, Stripe billing, and trading systems for Middle Georgia businesses. Call (770) 652-1282.",
    alternates: { canonical: "https://quantlabusa.dev/software-development-macon-ga" },
    openGraph: {
        title: "Custom Software Development in Macon, GA | QUANT LAB USA",
        description:
            "Macon-based, founder-led software developer building CRMs, web apps, Stripe billing, and trading systems for Middle Georgia businesses.",
        url: "https://quantlabusa.dev/software-development-macon-ga",
        type: "article",
    },
    twitter: {
        card: "summary",
        title: "Custom Software Development in Macon, GA | QUANT LAB USA",
        description:
            "Macon-based, founder-led software developer building CRMs, web apps, Stripe billing, and trading systems for Middle Georgia businesses.",
    },
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-macon-ga#localbusiness",
    name: "QUANT LAB USA — Macon HQ",
    url: "https://quantlabusa.dev/software-development-macon-ga",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Macon", containedInPlace: { "@type": "State", name: "Georgia" } },
        { "@type": "City", name: "Warner Robins" },
        { "@type": "AdministrativeArea", name: "Bibb County" },
        { "@type": "AdministrativeArea", name: "Houston County" },
        { "@type": "AdministrativeArea", name: "Middle Georgia" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 32.8407, longitude: -83.6324 },
    address: { "@type": "PostalAddress", addressLocality: "Macon", addressRegion: "GA", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development",
    name: "Custom Software Development in Macon, GA",
    provider: { "@id": "https://quantlabusa.dev/#org" },
    areaServed: { "@type": "City", name: "Macon", containedInPlace: { "@type": "State", name: "Georgia" } },
    description:
        "Founder-led custom software development for Middle Georgia: web apps, CRMs, Stripe integrations, licensing systems, and quant tooling on a modern stack.",
    url: "https://quantlabusa.dev/software-development-macon-ga",
};

const services = [
    {
        title: "Custom Web Apps & Operations Dashboards",
        desc: "Replace the spreadsheet jungle with a tool your team actually uses. Typical: $18k–$60k.",
    },
    {
        title: "CRMs Tailored to Your Workflow",
        desc: "Not a Salesforce subscription, an asset you own. Typical: $20k–$70k.",
    },
    {
        title: "Stripe Integrations & Licensing Systems",
        desc: "Turn services into recurring revenue products. Typical: $8k–$28k.",
    },
    {
        title: "QuickBooks Online Sync & Bookkeeping Parity",
        desc: "Bi-directional sync of customers, vendors, items, and accounts. Typical: $10k–$25k.",
    },
    {
        title: "Mobile-First Estimate & Proposal Engines",
        desc: "Quote from the truck. Itemized branded PDFs in under 30 minutes. Typical: $14k–$40k.",
    },
    {
        title: "Algorithmic Trading & Quant Tooling",
        desc: "Real-time feeds, broker APIs, hard risk controls. Typical: $25k–$120k.",
    },
    {
        title: "Penetration Testing for Local Compliance",
        desc: "Web app, network, wireless, and AD engagements with formal reports. Typical: $6k–$22k.",
    },
];

const deliverables = [
    "Headquartered in Macon — on-site discovery across Bibb and surrounding counties",
    "Full coverage of Middle Georgia including Warner Robins, Perry, and Forsyth",
    "Founder-led delivery — the engineer on the kickoff call is the one writing the code",
    "Modern Next.js / TypeScript / PostgreSQL / Docker stack",
    "Fixed-scope quotes on most engagements, with no junior offshore handoff",
];

const faqs = [
    {
        q: "Do you work with Macon businesses in person?",
        a: "Yes. We meet on-site across Macon, Warner Robins, Perry, and Middle Georgia at no extra travel cost. For most discovery sessions we drive — we are local.",
    },
    {
        q: "Can you replace our current SaaS subscriptions?",
        a: "Often — when your monthly SaaS spend exceeds about $400 across stacked tools, a custom platform typically pays for itself inside 12–18 months and you own the code afterward.",
    },
    {
        q: "Do you offer cybersecurity in addition to software development?",
        a: "Yes. Penetration testing — web app, network, wireless, and Active Directory — is a core service alongside development. Reports are MITRE ATT&CK-aligned.",
    },
    {
        q: "How long does a typical Macon project take?",
        a: "A focused MVP usually lands in 6–10 weeks. A full custom CRM or operations platform runs 3–5 months. Trading and lot-management systems can extend to 12–16 weeks.",
    },
    {
        q: "Are you familiar with Georgia business-tax and compliance basics?",
        a: "Yes — we work with Georgia LLCs, S-Corps, and C-Corps daily and understand BAA, Stripe Tax, and Georgia sales-tax integrations where they apply.",
    },
    {
        q: "Can you integrate with QuickBooks Online for our bookkeeping?",
        a: "Yes. We build bi-directional QBO syncs for customers, vendors, items, and chart-of-accounts. We have shipped a production QuickBooks integration for a local luxury contractor.",
    },
    {
        q: "What stacks do you use and why?",
        a: "Next.js, TypeScript, Node, PostgreSQL, Prisma, and Docker. The reason is hiring continuity — any competent developer can pick up the codebase five years from now without translation.",
    },
    {
        q: "Do you take on small one-page sites or only large platforms?",
        a: "Both. We have built single-page advisor sites under $5k and multi-month lot-management platforms. Scope drives quote, not arbitrary minimums.",
    },
];

export default function MaconLandingPage() {
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
                        <li className="text-gray-300">Macon, GA</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-blue-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development in Macon, GA
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        QUANT LAB USA is headquartered right here in Macon, Georgia. Middle Georgia businesses don&apos;t need a faceless agency in another time zone — they need a founder-led shop that answers the phone and ships code that actually fits how their company runs.
                    </p>
                    <ConsultationCTA label="Scope a Macon Project" city="Macon, GA" source="city-macon" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            From healthcare practices off Forsyth Road to logistics outfits along I-75 and family-run trades across Bibb and surrounding counties, we build the custom software that keeps local businesses competitive against larger metro players. Macon&apos;s economy mixes healthcare administration, manufacturing, transportation, and a deep professional-services base — each generating its own software demand that national vendors quote at metro Atlanta prices and deliver from a ticket queue.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Macon businesses choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Macon is the closest thing the southeast has to a true cross-roads city. I-75 carries freight from Florida to Atlanta and beyond, Robins Air Force Base anchors a defense-adjacent payroll spanning Warner Robins and Perry, Atrium Health Navicent and the broader healthcare ecosystem employs a five-figure workforce, and a steady pool of trades, manufacturers, and family-owned operators run the rest of the local economy. Every one of those verticals has the same complaint: software was sold to them by someone in another city, configured by a junior who didn&apos;t understand the workflow, and now lives as a stack of brittle integrations that nobody on the team really owns.
                        </p>
                        <p>
                            We are local. William Beltz writes the architecture, leads the build, and stays on the project through delivery — there is no offshore handoff, no junior outsourcing, no ticket queue. Every project ships on a modern stack — Next.js, TypeScript, Node, PostgreSQL, Docker — that another developer can pick up five years from now without translation. For Middle Georgia owners that means three things: you can drive 15 minutes and meet your developer in person, the codebase is yours to keep, and the person you hired is the person doing the work.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for Macon clients</h2>
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
                            Our Macon-area portfolio includes <Link href="/work/northcrest-fence" className="text-sky-400 hover:underline">Northcrest Fence &amp; Gate</Link>, <Link href="/work/bridgepointe-painting" className="text-sky-400 hover:underline">Bridgepointe Painting</Link>, and <Link href="/work/hobbspeak" className="text-sky-400 hover:underline">HobbsPeak</Link> — real, deployed sites and tooling helping local operators run leaner. Northcrest cut proposal turnaround from 1–3 days to under 30 minutes with a custom mobile-first estimate platform. Bridgepointe replaced spreadsheets with a deep QuickBooks Online sync covering customers, vendors, items, and accounts so the back office runs without double-entry. HobbsPeak runs a headless commerce platform with live S&amp;S Activewear catalog sync and an AI-assisted digitizing pipeline.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {deliverables.map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work with Macon teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Macon is our home base, so most discovery happens in person. We meet at your office, your jobsite, or anywhere in the Bibb–Houston corridor — no travel fee, no minimum engagement. Kickoff is typically a 90-minute walkthrough of the actual workflow we are replacing, followed by a fixed-scope proposal within 3–5 business days. Build cycles run weekly: every Friday you get a deployed staging URL with that week&apos;s work, written notes, and the next-week plan. We do not bill against a vague hourly contract — almost every Macon engagement is fixed scope, fixed price, with a written acceptance milestone at the end. When the project ships, the code, the database, the hosting accounts, and the documentation all transfer to you. You own it.
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
                            { href: "/services/custom-crm-development", title: "Custom CRM Development", desc: "Own your CRM instead of renting one." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Network, web app, and Active Directory engagements." },
                            { href: "/services/payments-invoicing-licensing", title: "Payments & Licensing", desc: "Stripe-powered subscription and licensing systems." },
                            { href: "/services/algorithmic-trading-systems", title: "Algorithmic Trading Systems", desc: "Production trading bots with hard risk controls." },
                            { href: "/blog/custom-crm-development-guide", title: "Custom CRM Development Guide", desc: "Long-form pillar — build vs. buy, costs, timelines." },
                            { href: "/work/bridgepointe-painting", title: "Case Study: Bridgepointe Painting", desc: "QuickBooks-synced operations platform." },
                            { href: "/work/hobbspeak", title: "Case Study: HobbsPeak", desc: "Headless commerce with AI digitizing pipeline." },
                            { href: "/software-development-atlanta-ga", title: "Atlanta, GA", desc: "Fintech, logistics, and SaaS — up I-75." },
                            { href: "/software-development-columbus-ga", title: "Columbus, GA", desc: "Chattahoochee Valley CRMs and dashboards." },
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
                            Build it with a Macon firm.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or email <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a> to scope your Macon project.
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
