import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { RelatedIndustries } from "@/components/RelatedIndustries";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Boston Software Development & Pen Testing | QUANT LAB USA",
    description:
        "Boston custom software and penetration testing for biotech, university spinouts, and fintech. Founder-led, US-based, security-aware. Call (770) 652-1282.",
    slug: "software-development-boston-ma",
    image: "/og-image.png",
    type: "article",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-boston-ma#localbusiness",
    name: "QUANT LAB USA — Boston Coverage",
    url: "https://quantlabusa.dev/software-development-boston-ma",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Boston", containedInPlace: { "@type": "State", name: "Massachusetts" } },
        { "@type": "City", name: "Cambridge" },
        { "@type": "City", name: "Somerville" },
        { "@type": "City", name: "Waltham" },
        { "@type": "AdministrativeArea", name: "Suffolk County" },
        { "@type": "AdministrativeArea", name: "Middlesex County" },
        { "@type": "AdministrativeArea", name: "Greater Boston" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 42.3601, longitude: -71.0589 },
    address: { "@type": "PostalAddress", addressLocality: "Boston", addressRegion: "MA", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Penetration Testing",
    name: "Custom Software Development & Penetration Testing in Boston, MA",
    provider: { "@id": "https://quantlabusa.dev/#organization" },
    areaServed: { "@type": "City", name: "Boston", containedInPlace: { "@type": "State", name: "Massachusetts" } },
    description:
        "Custom software, SaaS platforms, and MITRE ATT&CK-aligned penetration testing for Boston biotech, university spinouts, and fintech teams.",
    url: "https://quantlabusa.dev/software-development-boston-ma",
};

const services = [
    {
        title: "Research & Lab Operations Software",
        desc: "Sample tracking, assay pipelines, and ops dashboards for biotech and life-sciences teams. Typical: $25k–$90k.",
    },
    {
        title: "Penetration Testing (Web, Network, AD)",
        desc: "Formal engagements with deliverables for investor diligence and enterprise security reviews. Typical: $12k–$40k.",
    },
    {
        title: "University Spinout MVPs",
        desc: "From lab prototype to fundable product — Next.js apps shipped on a tight pre-seed timeline. Typical: $30k–$90k.",
    },
    {
        title: "Fintech & Asset-Management Tooling",
        desc: "Portfolio dashboards, reporting hooks, and Stripe-billed SaaS for Boston money managers. Typical: $25k–$100k.",
    },
    {
        title: "Custom CRMs & Operations Dashboards",
        desc: "Purpose-built internal tooling that off-the-shelf SaaS does not cover cleanly. Typical: $20k–$70k.",
    },
    {
        title: "Investor Due-Diligence Packages",
        desc: "Architecture diagrams, threat model, SBOM summary, and pen test report ready for VC review. Typical: $10k–$25k.",
    },
];

const faqs = [
    {
        q: "Do you build software for biotech and life-sciences teams?",
        a: "Yes — sample and specimen tracking, assay and workflow pipelines, lab operations dashboards, and instrument-data ingestion. We scope data handling carefully because life-sciences buyers expect rigorous validation and audit trails.",
    },
    {
        q: "Can you support a university spinout coming out of MIT or Harvard?",
        a: "Yes — moving a lab prototype to a fundable product on a pre-seed timeline is one of our most common Boston engagements. Fixed scope, weekly Friday staging URL, full handover of code and accounts at acceptance.",
    },
    {
        q: "East Coast hours?",
        a: "Yes — our HQ is in Macon, Georgia on Eastern Time, so you get full same-day overlap with Boston with no timezone friction.",
    },
    {
        q: "Do you fly in for kickoffs and reviews?",
        a: "For engagements above roughly 25,000 dollars, yes — typically a single working afternoon in the Seaport, Kendall Square, or along Route 128. Atlanta to Logan is about a 2.5-hour flight.",
    },
    {
        q: "Can you produce a pen test report for investor due diligence?",
        a: "Yes — our reports include technical reproduction steps and remediation detail for engineers, plus a board-readable executive summary. Boston VCs and institutional LPs expect this format and we deliver to it.",
    },
    {
        q: "Are you a local Boston office?",
        a: "No — we are a Macon, Georgia firm working remote-first across the United States, with travel to Boston for major-build kickoffs and on-site internal pen tests. You get senior, founder-led engineering without paying for Boston overhead.",
    },
    {
        q: "What pen testing methodology do you use?",
        a: "MITRE ATT&CK end-to-end. Every finding is mapped to a technique ID. Our internal engagements run modules covering recon, credential spraying, Kerberoasting, ADCS abuse, lateral movement, and command-and-control.",
    },
    {
        q: "What is a typical timeline for a Boston engagement?",
        a: "A standalone external pen test runs 2–3 weeks including reporting. A spinout MVP is usually 6–10 weeks. Larger custom platforms follow separate scoping with weekly milestones.",
    },
];

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://quantlabusa.dev/services" },
        { "@type": "ListItem", position: 3, name: "Software Development Boston, MA", item: "https://quantlabusa.dev/software-development-boston-ma" },
    ],
};

export default function BostonLandingPage() {
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
                        <li className="text-gray-300">Boston, MA</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development & Penetration Testing in Boston, MA
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Boston runs on biotech, universities, and money management. From Kendall Square labs to Seaport fintech to the spinout pipeline pouring out of MIT and Harvard, this is a market that expects rigor — and vendors who can keep up with it.
                    </p>
                    <ConsultationCTA label="Discuss a Boston Engagement" city="Boston, MA" source="city-boston" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA pairs custom software engineering with hands-on penetration testing rooted in the MITRE ATT&amp;CK framework. We are founder-led, US-based, and security-aware from day one — which is exactly the bar Boston&apos;s research-driven economy holds its vendors to.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Boston organizations choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Boston&apos;s software economy is anchored by three pillars. The life-sciences cluster around Kendall Square and the Longwood Medical Area — biotech, pharma, diagnostics, and the hospital-research complex — generates constant demand for sample tracking, lab operations tooling, and validated data pipelines that no off-the-shelf product handles cleanly. The university engine at MIT, Harvard, BU, Northeastern, and Tufts feeds a relentless spinout pipeline where a lab prototype needs to become a fundable product fast. And the asset-management and fintech layer, from the State Street and Fidelity orbit through the Seaport startup scene, expects portfolio tooling and SaaS built to an institutional standard.
                        </p>
                        <p>
                            Most generalist agencies cannot credibly speak to penetration testing methodology, and Boston buyers notice. We can. Active Directory abuse paths, lateral movement, ADCS certificate abuse, Kerberoasting, web application exploitation — that is in-house capability, not a subcontracted line item. Every line of software we ship is reviewed against the same threat models we use on offensive engagements. For a Boston biotech preparing for a partner security review, or a spinout heading into a Series A diligence cycle, that combination of build capability and security depth is the entire pitch.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for Boston clients</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work with Boston teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Boston sits in the same time zone as our Macon, Georgia HQ, so you get full Eastern Time overlap and same-business-day responsiveness. Most kickoffs run as a 60–90 minute video session, with an on-site afternoon for engagements above roughly 25,000 dollars — Atlanta to Logan is about 2.5 hours, and we plan working sessions in the Seaport, Kendall Square, or along Route 128 as scope warrants. Build cycles run weekly with a Friday staging URL, written notes, and the next week&apos;s plan. Pen tests run from secured remote infrastructure with strict source-IP allowlisting and authenticated VPN tunnels for internal scope. Reports are delivered in two formats: a technical deliverable with reproduction steps for engineers, and a board-readable executive summary with a prioritized remediation roadmap. Custom builds close on fixed-scope, fixed-price proposals, and the handover at acceptance is the code, the database, the hosting accounts, and the architecture documentation in one package.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Full Eastern Time overlap from Georgia HQ — same business day as Boston",
                            "Life-sciences and university-spinout specialization",
                            "In-house offensive security (AD abuse paths, web app, network)",
                            "Pen test reports formatted for investor diligence and partner reviews",
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
                        industries={["healthcare","saas","fintech","legal-services"]}
                        heading="Industries we serve in Boston"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["compliance","saas","build-vs-buy"]}
                        pinned={["soc2-pentest-prep-guide-2026","build-vs-buy-software-2026","what-is-penetration-testing"]}
                        heading="Reading for Boston founders"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services & nearby cities</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, network, and AD engagements." },
                            { href: "/services/web-app-pentest", title: "Web App Pen Test", desc: "OWASP-aligned web app testing." },
                            { href: "/services/mitre-attack-assessment", title: "MITRE ATT&CK Assessment", desc: "Full attack-chain mapping for diligence." },
                            { href: "/services/saas-platform-development", title: "SaaS Platform Development", desc: "Multi-tenant apps for spinouts." },
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "Lab ops and operations dashboards." },
                            { href: "/services/custom-crm-development", title: "Custom CRM Development", desc: "Own your CRM — don&apos;t rent it." },
                            { href: "/services/stripe-integration", title: "Stripe Integration", desc: "Subscription billing and licensing." },
                            { href: "/blog/soc2-pentest-prep-guide-2026", title: "SOC 2 Pentest Prep Guide", desc: "Pre-audit testing mapped to CC controls." },
                            { href: "/blog/build-vs-buy-software-2026", title: "Build vs Buy Software 2026", desc: "Three-year TCO decision framework." },
                            { href: "/software-development-new-york-ny", title: "New York, NY", desc: "Fintech, ad-tech, and SaaS." },
                            { href: "/pricing", title: "Pricing", desc: "How fixed-quote engagements are scoped." },
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
                            Scope a Boston engagement.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or email <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a> to discuss Boston engagements.
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
