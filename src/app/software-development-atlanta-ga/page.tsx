import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { RelatedIndustries } from "@/components/RelatedIndustries";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Atlanta Software Development & Pen Testing | QUANT LAB USA",
    description:
        "Atlanta custom software for fintech, film, logistics, and SaaS — plus penetration testing from a same-state Georgia firm. Founder-led. Call (770) 652-1282.",
    slug: "software-development-atlanta-ga",
    image: "/og-image.png",
    type: "article",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-atlanta-ga#localbusiness",
    name: "QUANT LAB USA — Atlanta Coverage",
    url: "https://quantlabusa.dev/software-development-atlanta-ga",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Atlanta", containedInPlace: { "@type": "State", name: "Georgia" } },
        { "@type": "City", name: "Sandy Springs" },
        { "@type": "City", name: "Roswell" },
        { "@type": "City", name: "Alpharetta" },
        { "@type": "City", name: "Marietta" },
        { "@type": "AdministrativeArea", name: "Fulton County" },
        { "@type": "AdministrativeArea", name: "DeKalb County" },
        { "@type": "AdministrativeArea", name: "Cobb County" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 33.749, longitude: -84.388 },
    address: { "@type": "PostalAddress", addressLocality: "Atlanta", addressRegion: "GA", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Penetration Testing",
    name: "Custom Software Development & Penetration Testing in Atlanta, GA",
    provider: {
        "@id": "https://quantlabusa.dev/#organization",
        "@type": "Organization",
        name: "QUANT LAB USA",
    },
    areaServed: { "@type": "City", name: "Atlanta", containedInPlace: { "@type": "State", name: "Georgia" } },
    description:
        "Fintech-grade Stripe, logistics and operations dashboards, film-and-media tooling, plus full-scope penetration testing for Atlanta clients.",
    url: "https://quantlabusa.dev/software-development-atlanta-ga",
};

const services = [
    {
        title: "Fintech-grade Stripe & Licensing Systems",
        desc: "Subscription billing, metered usage, multi-tenant entitlements, dispute workflows. Typical: $10k–$35k.",
    },
    {
        title: "Logistics & Operations Dashboards",
        desc: "Real-time dispatch, freight tracking, and warehouse inventory tools consolidating legacy WMS feeds. Typical: $25k–$80k.",
    },
    {
        title: "Penetration Testing for SOC 2",
        desc: "Web app, network, wireless, AD, MITRE ATT&CK engagements before your next SOC 2 audit. Typical: $8k–$28k.",
    },
    {
        title: "Custom CRMs for Mid-Market",
        desc: "Replace a HubSpot or Salesforce stack with software you own. Typical: $25k–$90k.",
    },
    {
        title: "Film & Production Workflow Tools",
        desc: "Scheduling, location, crew, and budget tooling for Atlanta&apos;s production economy. Typical: $20k–$60k.",
    },
    {
        title: "Algorithmic Trading & Quant Tooling",
        desc: "Production trading systems with hard risk controls and broker integrations. Typical: $25k–$120k.",
    },
];

const faqs = [
    {
        q: "Do you work with Atlanta fintech and payment companies?",
        a: "Yes — Stripe Connect, ACH, and PCI-adjacent architectures are core to our practice. Transaction Alley is the densest fintech corridor in the southeast and most of our local fintech work originates there.",
    },
    {
        q: "Can you support a SOC 2 readiness window?",
        a: "Yes — pen testing reports map to SOC 2 CC controls and customer due-diligence questionnaires. We schedule pre-audit tests 60–90 days ahead of your Type I window.",
    },
    {
        q: "Where do you meet Atlanta clients?",
        a: "We travel into ATL regularly — most often Buckhead, Midtown, and Sandy Springs — and run most discovery remotely with on-site visits as scope warrants. Macon to Atlanta is roughly 80 minutes on I-75.",
    },
    {
        q: "Do you work with the Atlanta film and production ecosystem?",
        a: "Yes — Georgia&apos;s film tax credit pulled the production base here, and we&apos;ve scoped scheduling, crew, and budget tooling for production-adjacent operators.",
    },
    {
        q: "What is your typical timeline for an Atlanta MVP?",
        a: "Most Atlanta SaaS and ops platforms ship a usable MVP in 8–12 weeks with a fixed-scope quote. Full builds run 3–6 months.",
    },
    {
        q: "Do you handle Georgia state sales tax for SaaS products?",
        a: "Yes — Georgia treats most SaaS as non-taxable digital service, but multi-state Stripe Tax setup matters when you sell across state lines. We wire it up correctly at billing time.",
    },
    {
        q: "Are you available for in-person kickoffs in Atlanta?",
        a: "Yes. For engagements above ~$25k we plan one or two in-person sessions at your office, typically inside the Perimeter.",
    },
    {
        q: "Do you offer ongoing maintenance after launch?",
        a: "Yes — we offer monthly retainers covering hosting, security patching, and small feature work, or you can take the codebase fully in-house. No lock-in.",
    },
];

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Locations", item: "https://quantlabusa.dev/locations" },
        { "@type": "ListItem", position: 3, name: "Software Development Atlanta, GA", item: "https://quantlabusa.dev/software-development-atlanta-ga" },
    ],
};

export default function AtlantaLandingPage() {
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
                        <li className="text-gray-300">Atlanta, GA</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-blue-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development & Penetration Testing in Atlanta, GA
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Atlanta is the southeast&apos;s fintech and logistics capital — Transaction Alley moves over 70% of US card payments. That density of payment processors, supply-chain operators, and venture-backed SaaS creates two constant needs: serious custom software, and serious security around it.
                    </p>
                    <ConsultationCTA label="Talk Through an Atlanta Build" city="Atlanta, GA" source="city-atlanta" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA delivers both, from a Georgia HQ just down I-75. Metro Atlanta sits at the center of distribution networks reaching the entire eastern seaboard, and our clients there typically need the same things: Stripe-grade billing, real-time ops dashboards, pen test reports that survive procurement, and a single accountable engineer who picks up the phone.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Atlanta businesses choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Atlanta&apos;s software demand is unusually broad. Transaction Alley — the corridor running from Alpharetta through Buckhead to downtown — hosts FIS, Global Payments, NCR Atleos, Equifax, InComm, and a deep bench of card-processing and ACH vendors. The Port of Savannah feeds an inland logistics complex anchored by Norfolk Southern, UPS at Hapeville, and the freight density along I-285 and I-75. Hollywood South — Georgia&apos;s film tax credit pulled Tyler Perry Studios, Trilith, and Eagle Rock into metro Atlanta — generates a steady demand for scheduling, crew, location, and budget tooling that vertical SaaS does not solve cleanly. Add Tech Square&apos;s startup density around Georgia Tech and you have one of the most software-hungry mid-market cities in the country.
                        </p>
                        <p>
                            Most ATL software shops are either bloated consultancies or solo freelancers. We sit in the middle: founder-led delivery with enterprise-grade engineering practices. No offshore handoff, no junior outsourcing — William Beltz scopes, builds, and ships. That matters when you are pitching a Fortune 500 buyer in Buckhead and your security posture is part of the deal, or when a Hollywood South production needs a custom scheduling tool that doesn&apos;t exist on the shelf.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for Atlanta clients</h2>
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
                            Two of our flagship Atlanta-metro builds are live and public. <Link href="/work/northcrest-fence" className="text-sky-400 hover:underline">Northcrest Fence &amp; Gate</Link> — serving Alpharetta, Roswell, Johns Creek, Milton, and Marietta — replaced their handwritten clipboard intake with a mobile-first estimate flow, automated PDF proposals, and a unified admin portal. Turnaround dropped from 1–3 days to under 30 minutes. <Link href="/work/bridgepointe-painting" className="text-sky-400 hover:underline">Bridgepointe Painting</Link> — luxury contractor across Cobb, Roswell, Sandy Springs, and Buckhead — runs on a bespoke platform with deep QuickBooks Online sync covering customers, vendors, items, and chart-of-accounts. Bookkeeping reconciliation time dropped meaningfully because the file no longer requires manual entry from spreadsheets.
                        </p>
                        <p>
                            Beyond those, our operational work powers tooling for <Link href="/work/j5-sales-os" className="text-sky-400 hover:underline">J5 Sales OS</Link>, <Link href="/work/wilder-recovery" className="text-sky-400 hover:underline">Wilder Recovery</Link>, and UEhub — internal platforms purpose-built for sales, recovery operations, and education workflows respectively.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Same-state with full I-75 corridor coverage from Macon",
                            "Fintech, logistics, film/production, and SaaS specialization",
                            "Pen test reports that map directly to SOC 2 CC controls",
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work with Atlanta teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            We are Macon-based, which means full Eastern Time overlap and an 80-minute drive up I-75 when an engagement warrants in-person work. Most kickoffs run as a video call followed by a single on-site afternoon — typically in Buckhead, Midtown, Sandy Springs, or Alpharetta — to walk the workflow we&apos;re replacing. From there, build cycles run weekly: every Friday you get a deployed staging URL, written notes on what changed, and the next-week plan. Most Atlanta engagements close on fixed-scope, fixed-price proposals with a written acceptance milestone, not open-ended T&M. Atlanta procurement teams move fast and expect senior accountability — that is exactly the engagement model we run.
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
                    <RelatedIndustries
                        industries={["fintech","saas","e-commerce","construction"]}
                        heading="Industries we serve in Atlanta"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["atlanta","build-vs-buy"]}
                        pinned={["atlanta-software-development-guide-2026","best-custom-software-development-companies-atlanta-2026","best-penetration-testing-companies-georgia-2026"]}
                        heading="Reading for Atlanta founders"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services & nearby cities</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, network, wireless, and AD engagements." },
                            { href: "/services/payments-invoicing-licensing", title: "Payments & Licensing", desc: "Stripe-powered subscription and licensing systems." },
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "CRMs and ops tooling built around your workflow." },
                            { href: "/services/custom-crm-development", title: "Custom CRM Development", desc: "Own your CRM — don&apos;t rent it." },
                            { href: "/services/algorithmic-trading-systems", title: "Algorithmic Trading Systems", desc: "Production trading bots with hard risk controls." },
                            { href: "/blog/custom-crm-development-guide", title: "Custom CRM Development Guide", desc: "Pillar resource — build vs. buy, cost models." },
                            { href: "/work/northcrest-fence", title: "Case Study: Northcrest Fence", desc: "Atlanta-metro contractor sales platform." },
                            { href: "/work/bridgepointe-painting", title: "Case Study: Bridgepointe Painting", desc: "Atlanta-metro QBO-synced ops platform." },
                            { href: "/blog/best-custom-software-development-companies-atlanta-2026", title: "Best Atlanta Software Firms 2026", desc: "Comparison guide for Atlanta buyers." },
                            { href: "/software-development-macon-ga", title: "Macon, GA", desc: "Our HQ — Middle Georgia coverage." },
                            { href: "/software-development-augusta-ga", title: "Augusta, GA", desc: "Cyber corridor and Fort Eisenhower." },
                            { href: "/software-development-charlotte-nc", title: "Charlotte, NC", desc: "Banking and fintech-adjacent SaaS." },
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
                            Ready to talk Atlanta?
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> to talk through your Atlanta build.
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
