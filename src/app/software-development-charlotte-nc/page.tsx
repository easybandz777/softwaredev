import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { MapPin, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Charlotte NC Software Development, Banking & Pen Test | QUANT LAB",
    description:
        "Charlotte custom software development and penetration testing for banking, fintech, and SaaS firms. Founder-led, Georgia-based. Call (770) 652-1282.",
    alternates: { canonical: "https://quantlabusa.dev/software-development-charlotte-nc" },
    openGraph: {
        title: "Charlotte NC Software Development, Banking & Pen Test | QUANT LAB",
        description:
            "Charlotte custom software development and penetration testing for banking, fintech, and SaaS firms.",
        url: "https://quantlabusa.dev/software-development-charlotte-nc",
        type: "article",
    },
    twitter: {
        card: "summary",
        title: "Charlotte NC Software Development, Banking & Pen Test | QUANT LAB",
        description:
            "Charlotte custom software development and penetration testing for banking and fintech.",
    },
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-charlotte-nc#localbusiness",
    name: "QUANT LAB USA — Charlotte Coverage",
    url: "https://quantlabusa.dev/software-development-charlotte-nc",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Charlotte", containedInPlace: { "@type": "State", name: "North Carolina" } },
        { "@type": "City", name: "Concord" },
        { "@type": "City", name: "Huntersville" },
        { "@type": "City", name: "Matthews" },
        { "@type": "City", name: "Rock Hill", containedInPlace: { "@type": "State", name: "South Carolina" } },
        { "@type": "AdministrativeArea", name: "Mecklenburg County" },
        { "@type": "AdministrativeArea", name: "Carolinas" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 35.2271, longitude: -80.8431 },
    address: { "@type": "PostalAddress", addressLocality: "Charlotte", addressRegion: "NC", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Penetration Testing",
    name: "Custom Software Development & Penetration Testing in Charlotte, NC",
    provider: { "@id": "https://quantlabusa.dev/#org" },
    areaServed: { "@type": "City", name: "Charlotte", containedInPlace: { "@type": "State", name: "North Carolina" } },
    description:
        "Fintech-adjacent custom software, vendor-risk-ready penetration testing, and CRMs for Charlotte&apos;s banking sector.",
    url: "https://quantlabusa.dev/software-development-charlotte-nc",
};

const services = [
    {
        title: "Fintech-Adjacent Custom Software",
        desc: "Stripe billing, licensing systems, internal ops dashboards for fintech vendors selling into BoA, Truist, and Wells. Typical: $25k–$80k.",
    },
    {
        title: "Pen Testing for Bank Vendor Reviews",
        desc: "Formal reports aligned to MITRE ATT&CK, ready for bank-grade vendor assessments and TPRM questionnaires. Typical: $10k–$30k.",
    },
    {
        title: "CRMs and Operations Platforms",
        desc: "Purpose-built tooling for the mid-market firms supplying Charlotte&apos;s financial sector. Typical: $25k–$90k.",
    },
    {
        title: "Active Directory Hardening",
        desc: "Post-test remediation, GPO review, ADCS reconfiguration, and credential-spray mitigation. Typical: $8k–$22k.",
    },
    {
        title: "Insurance & Wealth-Management Tooling",
        desc: "Advisor CRMs, lead routing, and intake for the Charlotte wealth and insurance market. Typical: $20k–$70k.",
    },
    {
        title: "Energy & Utilities Adjacent Software",
        desc: "Custom ops tooling for the Duke Energy and broader Carolinas utility supplier network. Typical: $25k–$90k.",
    },
];

const faqs = [
    {
        q: "Can you produce a pen test report that survives a BoA or Truist vendor review?",
        a: "Yes — that is exactly what these reports are built to do. Findings are mapped to MITRE ATT&CK with reproduction steps and remediation detail, plus an executive summary for the vendor-management or TPRM team handling the review.",
    },
    {
        q: "Do you build for fintech-adjacent SaaS selling into banks?",
        a: "Yes — and we understand the security questionnaire game. SIG, CAIQ, and bank-specific TPRM packages are routine for our pre-procurement pen test clients.",
    },
    {
        q: "Are you available for in-person Charlotte meetings?",
        a: "Yes — Macon to Charlotte is about 5 hours by car or a 1-hour flight. We drive or fly for kickoffs and major milestones at Uptown, South End, Ballantyne, or the SouthPark corridor.",
    },
    {
        q: "What is your timezone overlap?",
        a: "Georgia HQ — full Eastern Time, identical to Charlotte. Same business day, no friction.",
    },
    {
        q: "Are you familiar with NC-specific compliance and banking law?",
        a: "Yes — we work with NC LLCs, S-Corps, and C-Corps. Most banking compliance work is federally driven (OCC, FDIC, FFIEC, GLBA) and we structure pen test and software deliverables to drop into those audit cycles.",
    },
    {
        q: "Do you support GLBA, SOX 404, and FFIEC frameworks?",
        a: "Yes — pen test reports map cleanly to FFIEC Information Security and GLBA Safeguards Rule controls. SOX 404 is supported for publicly-traded fintech vendors.",
    },
    {
        q: "Can you build for the Carolinas insurance market?",
        a: "Yes — advisor CRMs, lead intake, and policy-comparison tools for life and supplemental insurance brokers across the region.",
    },
    {
        q: "Do you work with Duke Energy supplier-network firms?",
        a: "Yes — supplier portal, compliance tracking, and ops tooling for the deep utility-supplier ecosystem around Duke. NERC CIP scoping is handled case by case.",
    },
];

export default function CharlotteLandingPage() {
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
                        <li className="text-gray-300">Charlotte, NC</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development & Penetration Testing in Charlotte, NC
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Charlotte is the southeast&apos;s banking capital — second only to New York in US banking assets, anchored by Bank of America and Truist, and surrounded by a fast-growing fintech and supplier ecosystem in Uptown and South End.
                    </p>
                    <ConsultationCTA label="Scope a Charlotte Build" city="Charlotte, NC" source="city-charlotte" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            That density of regulated finance creates two constant needs: well-engineered custom software that survives an audit, and serious penetration testing that survives a procurement review. QUANT LAB USA delivers both, from a same-region Georgia HQ with full Eastern Time overlap.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Charlotte businesses choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Charlotte concentrates more banking assets than any US city outside New York. Bank of America&apos;s global HQ sits at Hearst Tower, Truist&apos;s HQ sits at Truist Center across town, and Wells Fargo&apos;s East Coast operations dominate the South Tryon corridor. Around that anchor sits a deep fintech, payments, and bank-supplier ecosystem in Uptown, South End, and Ballantyne — TPRM teams, SaaS vendors, payment processors, and the legal and compliance firms that orbit them. The Charlotte Metro extends across the SC line into Rock Hill and Fort Mill, and includes a fast-growing tech labor market that punches above the metro&apos;s population. Duke Energy&apos;s HQ adds a utility supplier-network layer. And the Carolinas insurance and wealth-management market is one of the densest in the southeast.
                        </p>
                        <p>
                            We are a short drive up I-85 from Macon. Same-region, same-time-zone, no offshore handoff. Founder-led delivery means the engineer on the kickoff call is the engineer in the codebase. That accountability matters when you are selling into a bank&apos;s procurement process — TPRM teams want to talk to the person who built the thing, not a project manager four layers from the code. Our <Link href="/work/active-directory-pentest" className="text-sky-400 hover:underline">Active Directory pen test for a regional financial services firm</Link> is the most directly relevant proof point: a full attack chain from standard user to Domain Admin, every finding mapped to MITRE ATT&amp;CK, executive summary built for board and audit consumption.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for Charlotte clients</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Track record</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Public portfolio includes <Link href="/work/j5-sales-os" className="text-sky-400 hover:underline">J5 Sales OS</Link>, <Link href="/work/protectwithbri" className="text-sky-400 hover:underline">ProtectWithBri</Link>, <Link href="/work/northcrest-fence" className="text-sky-400 hover:underline">Northcrest Fence</Link>, <Link href="/work/bridgepointe-painting" className="text-sky-400 hover:underline">Bridgepointe Painting</Link>, and UEhub. The <Link href="/work/active-directory-pentest" className="text-sky-400 hover:underline">Active Directory pen test</Link> case study is most directly relevant for Charlotte fintech and bank-supplier buyers — it is exactly the kind of deliverable that survives a BoA or Truist TPRM review.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Short drive up I-85 from our Georgia HQ",
                            "Pen test reports survive bank-grade vendor reviews",
                            "Bank-vendor TPRM and SIG questionnaire experience",
                            "Full Eastern Time overlap with Charlotte business hours",
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work remotely with Charlotte teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Charlotte sits in the same time zone as Georgia HQ — same business day, identical hours. Most engagements start with a 60-minute video scope. For engagements above ~$25k we drive up I-85 (5 hours from Macon) or fly in for an on-site kickoff afternoon at your office — Uptown, South End, Ballantyne, and the SouthPark corridor are all easy. Pen tests scoped for bank-vendor or TPRM review run as a defined-scope, defined-deliverable engagement: kickoff, active testing window, draft report review, final deliverable, and one round of retest within 60 days at no additional charge. Custom software builds run weekly Friday staging URLs with written notes and the next-week plan. Full code, database, hosting account, and documentation handover at acceptance — exactly what a bank TPRM or internal-audit team needs to clear the engagement.
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
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Bank-vendor-ready engagements." },
                            { href: "/services/active-directory-pentest", title: "Active Directory Pen Test", desc: "Kerberoasting, ADCS, lateral movement." },
                            { href: "/services/web-app-pentest", title: "Web App Pen Test", desc: "OWASP-aligned web app testing." },
                            { href: "/services/mitre-attack-assessment", title: "MITRE ATT&CK Assessment", desc: "Full attack-chain mapping." },
                            { href: "/services/network-pentest", title: "Network Pen Test", desc: "Internal and external network testing." },
                            { href: "/services/payments-invoicing-licensing", title: "Payments & Licensing", desc: "Stripe and licensing infrastructure." },
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "Operations dashboards and CRMs." },
                            { href: "/services/custom-crm-development", title: "Custom CRM Development", desc: "Own your CRM — don&apos;t rent it." },
                            { href: "/work/active-directory-pentest", title: "Case Study: AD Pen Test", desc: "Financial services firm — domain admin demonstrated." },
                            { href: "/blog/best-penetration-testing-companies-georgia-2026", title: "Best Pen Test Firms 2026", desc: "Southeast comparison guide." },
                            { href: "/blog/custom-crm-development-guide", title: "Custom CRM Development Guide", desc: "Pillar resource — build vs. buy." },
                            { href: "/software-development-atlanta-ga", title: "Atlanta, GA", desc: "Fintech, logistics, and SaaS." },
                            { href: "/software-development-nashville-tn", title: "Nashville, TN", desc: "Healthcare and music-tech." },
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
                            Scope your Charlotte build.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> to scope your Charlotte build.
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
