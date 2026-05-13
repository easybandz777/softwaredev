import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "NYC Custom Software Development, Fintech & Pen Test | QUANT LAB",
    description:
        "New York custom software and penetration testing for fintech, ad-tech, agencies, and SaaS. Senior, founder-led engineering. Call (770) 652-1282.",
    slug: "software-development-new-york-ny",
    image: "/og-image.png",
    type: "article",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-new-york-ny#localbusiness",
    name: "QUANT LAB USA — New York Coverage",
    url: "https://quantlabusa.dev/software-development-new-york-ny",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "New York", containedInPlace: { "@type": "State", name: "New York" } },
        { "@type": "City", name: "Brooklyn" },
        { "@type": "City", name: "Jersey City", containedInPlace: { "@type": "State", name: "New Jersey" } },
        { "@type": "AdministrativeArea", name: "Manhattan" },
        { "@type": "AdministrativeArea", name: "New York County" },
        { "@type": "AdministrativeArea", name: "Tri-State Area" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 40.7128, longitude: -74.006 },
    address: { "@type": "PostalAddress", addressLocality: "New York", addressRegion: "NY", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Penetration Testing",
    name: "Custom Software Development & Penetration Testing in New York, NY",
    provider: { "@id": "https://quantlabusa.dev/#organization" },
    areaServed: { "@type": "City", name: "New York", containedInPlace: { "@type": "State", name: "New York" } },
    description:
        "Fintech and brokerage-adjacent tooling, pre-procurement pen testing, and high-stakes custom web apps for New York clients.",
    url: "https://quantlabusa.dev/software-development-new-york-ny",
};

const services = [
    {
        title: "Fintech & Brokerage-Adjacent Tooling",
        desc: "Algorithmic trading bots, internal trade ops dashboards, and Stripe-billed SaaS. Typical: $25k–$120k.",
    },
    {
        title: "Penetration Testing for Pre-Procurement",
        desc: "Web, AD, and MITRE ATT&CK engagements with formal deliverables for institutional DD. Typical: $12k–$40k.",
    },
    {
        title: "High-Stakes Custom Web Apps",
        desc: "When the cost of a bug is real and 'I&apos;ll fix it next sprint' is not acceptable. Typical: $30k–$120k.",
    },
    {
        title: "Ad-Tech & Media Operations Tooling",
        desc: "Custom CRMs, programmatic reporting, and creative-ops tooling for agency holding-co clients. Typical: $25k–$80k.",
    },
    {
        title: "Hedge Fund & Family Office Tooling",
        desc: "Internal portfolio dashboards, position reconciliation, and reporting hooks. Typical: $25k–$100k.",
    },
    {
        title: "Investor Due-Diligence Packages",
        desc: "Architecture diagrams, SBOM, pen test report, and threat model — ready for VC or institutional review. Typical: $10k–$25k.",
    },
];

const faqs = [
    {
        q: "Can you support due diligence requests from institutional investors?",
        a: "Yes — pen test reports, architecture diagrams, SBOM-style summaries, and threat models on request, formatted for the kind of due-diligence package VCs, family offices, and institutional LPs expect.",
    },
    {
        q: "Do you fly in for kickoffs and reviews?",
        a: "For engagements above ~$25k, yes — usually a single afternoon at your office in Midtown, FiDi, Hudson Yards, Brooklyn, or Jersey City. NYC is a 2.5-hour flight from Atlanta.",
    },
    {
        q: "East Coast hours?",
        a: "Yes — Georgia HQ, full Eastern Time. Same business day as Manhattan, no timezone friction.",
    },
    {
        q: "Are you familiar with NYDFS Cybersecurity Regulation Part 500?",
        a: "Yes — pen testing and reporting deliverables map to NYDFS 23 NYCRR 500 requirements for financial-services entities operating under DFS oversight.",
    },
    {
        q: "Do you build for hedge funds and family offices?",
        a: "Yes — internal portfolio dashboards, position reconciliation, broker-API integration, and bespoke reporting. We scope this carefully because the trust bar is high; expect NDA before substantive scope discussion.",
    },
    {
        q: "Can you ship a SaaS MVP ahead of a VC pitch cycle?",
        a: "Yes — 6–10 weeks to a usable MVP is the typical NYC founder engagement. Fixed scope, weekly Friday staging URL, full handover at acceptance.",
    },
    {
        q: "How do you handle NYC-grade engineering review?",
        a: "Every line of code is reviewed before merge, every architectural decision is documented, and every deploy runs strict TypeScript, ESLint, and CI checks. NYC reviewers are unforgiving and we engineer accordingly.",
    },
    {
        q: "Do you work with ad-tech and agency holding companies?",
        a: "Yes — custom CRMs, programmatic reporting tools, and creative-ops platforms for IPG, WPP, Omnicom, and Publicis network agencies, plus independent shops. The ad-tech and media-ops vertical is one of our larger NYC categories.",
    },
];

export default function NewYorkLandingPage() {
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
                        <li className="text-gray-300">New York, NY</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development & Penetration Testing in New York, NY
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        New York is the toughest software buyer&apos;s market in the country. Fintech, ad-tech, agency holding companies, hedge funds, and a relentless current of SaaS founders all have the same demand: senior engineering, ship fast, no excuses.
                    </p>
                    <ConsultationCTA label="Talk Through a NYC Engagement" city="New York, NY" source="city-nyc" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The wrong contractor burns weeks and tens of thousands. QUANT LAB USA&apos;s pitch in NYC is simple — founder-led, accountable, modern stack, security-aware from day one. Same time zone as Manhattan, full overlap, no junior layer between you and the engineer writing the code.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why New York businesses choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            New York&apos;s software economy is uniquely demanding. Wall Street and the broader financial-services layer — Goldman Sachs, JPMorgan, Morgan Stanley, Citi, BlackRock, plus an enormous fintech and brokerage-adjacent vendor ecosystem — sets the technical bar most other cities aspire to. Ad-tech and media-ops anchored by IPG, WPP, Omnicom, and Publicis network agencies generates a steady demand for custom CRM, programmatic reporting, and creative-ops tooling. Hedge funds and family offices scattered from Greenwich south through Midtown need internal portfolio, position reconciliation, and broker-API integration work. And the relentless current of pre-seed through Series A SaaS founders — Brooklyn, FiDi, Williamsburg, Long Island City — keeps the MVP-velocity demand alive. Every one of those segments shares the same expectation: the vendor on the other end of the contract had better know what they are doing.
                        </p>
                        <p>
                            There is no junior layer between you and the engineer. Every project is led personally by William Beltz, every architectural decision is documented, and every line of code is reviewed before it ships. That is hard to find in the New York market at our price tier. We have shipped a <Link href="/work/multi-strategy-trading-system" className="text-sky-400 hover:underline">production multi-strategy trading system</Link> with sub-12ms order latency and zero unplanned downtime, plus a full <Link href="/work/active-directory-pentest" className="text-sky-400 hover:underline">Active Directory pen test</Link> documenting a full attack chain from standard user to Domain Admin — both directly relevant for NYC fintech and financial-services buyers.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for New York clients</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Selected work</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Production work includes <Link href="/work/j5-sales-os" className="text-sky-400 hover:underline">J5 Sales OS</Link>, UEhub, <Link href="/work/protectwithbri" className="text-sky-400 hover:underline">ProtectWithBri</Link>, <Link href="/work/wilder-recovery" className="text-sky-400 hover:underline">Wilder Recovery</Link>, and <Link href="/work/northcrest-fence" className="text-sky-400 hover:underline">Northcrest Fence</Link>. The most directly relevant case studies for NYC buyers are the <Link href="/work/multi-strategy-trading-system" className="text-sky-400 hover:underline">multi-strategy trading system</Link> — a production engine running MA Supertrend and VWAP in parallel with hard risk controls wired into the order path itself — and the <Link href="/work/active-directory-pentest" className="text-sky-400 hover:underline">Active Directory penetration test</Link> for a regional financial services firm. The trading system pitch resonates with quant and brokerage-adjacent NYC buyers; the AD pen test pitch resonates with fintech and SaaS founders preparing for institutional DD or NYDFS-driven review.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Full ET overlap from Georgia HQ — same business day as Manhattan",
                            "Fintech and brokerage-adjacent specialization",
                            "Documented architecture for institutional due diligence",
                            "Pen test reports formatted for pre-procurement and NYDFS review",
                            "Modern Next.js / TypeScript / PostgreSQL / Docker stack",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work remotely with NYC teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            NYC sits in the same time zone as Georgia HQ — same business day, identical hours. Most kickoffs run as a 60–90 minute video session, with a fly-in for engagements above ~$25k. Atlanta to LGA or EWR is 2.5 hours; we plan on-site afternoons in Midtown, FiDi, Hudson Yards, Brooklyn, or Jersey City as scope warrants. Build cycles run weekly with a Friday staging URL, written notes, and the next-week plan. Most NYC engagements close on fixed-scope, fixed-price proposals — exactly the predictability a runway-conscious founder or institutional buyer expects. Every architectural decision is documented in the repo, every line of code is reviewed before merge, and every deploy runs strict TypeScript, ESLint, and CI checks. The deliverable at acceptance is the code, the database, the hosting accounts, and the architecture documentation in one handover — exactly what NYC procurement and engineering review processes expect.
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
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, AD, and MITRE-aligned engagements." },
                            { href: "/services/active-directory-pentest", title: "Active Directory Pen Test", desc: "Kerberoasting, ADCS, lateral movement." },
                            { href: "/services/web-app-pentest", title: "Web App Pen Test", desc: "OWASP-aligned web app testing." },
                            { href: "/services/mitre-attack-assessment", title: "MITRE ATT&CK Assessment", desc: "Full attack-chain mapping for DD." },
                            { href: "/services/algorithmic-trading-systems", title: "Algorithmic Trading Systems", desc: "Trading bots and ops dashboards." },
                            { href: "/services/custom-crm-development", title: "Custom CRM Development", desc: "Own your CRM — don&apos;t rent it." },
                            { href: "/services/payments-invoicing-licensing", title: "Payments & Licensing", desc: "Stripe-powered subscription billing." },
                            { href: "/work/multi-strategy-trading-system", title: "Case Study: Trading System", desc: "<12ms latency, multi-strategy production." },
                            { href: "/work/active-directory-pentest", title: "Case Study: AD Pen Test", desc: "Financial services — domain admin demonstrated." },
                            { href: "/blog/custom-crm-development-guide", title: "Custom CRM Development Guide", desc: "Pillar resource — build vs. buy." },
                            { href: "/software-development-charlotte-nc", title: "Charlotte, NC", desc: "Banking and fintech-adjacent work." },
                            { href: "/software-development-chicago-il", title: "Chicago, IL", desc: "Finance, logistics, manufacturing." },
                            { href: "/contact", title: "Start a Project", desc: "Scoping calls, fixed-quote proposals." },
                        ].map((s) => (
                            <Link
                                key={s.href}
                                href={s.href}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-red-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-red-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Talk through your NYC engagement.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> to talk through your NYC engagement.
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
