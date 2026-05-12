import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { MapPin, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Nashville Custom Software, Healthcare & Music-Tech Dev | QL USA",
    description:
        "Nashville custom software for healthcare admin, music-tech, and SaaS founders. CRMs, Stripe, royalty tooling, pen testing. Call (770) 652-1282.",
    alternates: { canonical: "https://quantlabusa.dev/software-development-nashville-tn" },
    openGraph: {
        title: "Nashville Custom Software, Healthcare & Music-Tech Dev | QL USA",
        description:
            "Nashville custom software for healthcare admin, music-tech, and SaaS founders.",
        url: "https://quantlabusa.dev/software-development-nashville-tn",
        type: "article",
    },
    twitter: {
        card: "summary",
        title: "Nashville Custom Software, Healthcare & Music-Tech Dev | QL USA",
        description:
            "Nashville custom software for healthcare admin, music-tech, and SaaS founders.",
    },
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-nashville-tn#localbusiness",
    name: "QUANT LAB USA — Nashville Coverage",
    url: "https://quantlabusa.dev/software-development-nashville-tn",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Nashville", containedInPlace: { "@type": "State", name: "Tennessee" } },
        { "@type": "City", name: "Franklin" },
        { "@type": "City", name: "Brentwood" },
        { "@type": "City", name: "Murfreesboro" },
        { "@type": "AdministrativeArea", name: "Davidson County" },
        { "@type": "AdministrativeArea", name: "Williamson County" },
        { "@type": "AdministrativeArea", name: "Middle Tennessee" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 36.1627, longitude: -86.7816 },
    address: { "@type": "PostalAddress", addressLocality: "Nashville", addressRegion: "TN", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development",
    name: "Custom Software Development in Nashville, TN",
    provider: { "@id": "https://quantlabusa.dev/#org" },
    areaServed: { "@type": "City", name: "Nashville", containedInPlace: { "@type": "State", name: "Tennessee" } },
    description:
        "Healthcare-adjacent custom tools, music-tech and royalty tooling, and Stripe-powered SaaS for Nashville operators.",
    url: "https://quantlabusa.dev/software-development-nashville-tn",
};

const services = [
    {
        title: "Healthcare-Adjacent Custom Tools",
        desc: "Provider-facing CRMs, scheduling, and operations dashboards. Non-PHI by default; PHI work scoped under BAA. Typical: $25k–$90k.",
    },
    {
        title: "Music-Tech & Royalty Tooling",
        desc: "Custom platforms for catalogs, publishers, and independent artists. Royalty calculation and distribution. Typical: $25k–$100k.",
    },
    {
        title: "Stripe-Powered SaaS Products",
        desc: "Subscription billing, license keys, customer self-serve portals. Typical: $10k–$30k.",
    },
    {
        title: "EHR Adjacent Integrations",
        desc: "HL7 v2 / FHIR / X12 integration tooling for provider-side workflows. Typical: $30k–$120k.",
    },
    {
        title: "Tour, Venue & Event Management",
        desc: "Booking, settlements, and crew management for Nashville&apos;s touring and venue ecosystem. Typical: $20k–$80k.",
    },
    {
        title: "Pen Testing for Healthcare & SaaS",
        desc: "Web app, AD, and MITRE ATT&CK engagements for HIPAA-aware vendors and pre-procurement reviews. Typical: $10k–$30k.",
    },
];

const faqs = [
    {
        q: "Do you build software that touches PHI?",
        a: "Case-by-case — we scope BAA and HIPAA-aligned engagements deliberately, not casually. Most engagements stay non-PHI by design; when PHI is in scope, we sign a BAA and architect appropriately from day one.",
    },
    {
        q: "Can you build royalty or catalog management tools?",
        a: "Yes — custom platforms for music publishers, independent labels, and artists are in scope. Royalty calculation, splits, statement generation, and distribution-to-PROs integration are all routine.",
    },
    {
        q: "Are you available for on-site work in Nashville?",
        a: "Yes — Macon to Nashville is about 6 hours by car or a 1-hour flight. We come up for kickoffs, major milestones, and any work requiring physical site access at HCA campuses, Music Row, or the Franklin healthcare-tech corridor.",
    },
    {
        q: "What is your timezone overlap?",
        a: "Georgia HQ — Eastern Time, one hour ahead of Nashville. Our morning and your morning overlap completely; our late afternoon and your mid-afternoon overlap for reviews.",
    },
    {
        q: "Are you familiar with HIPAA, BAA, and Tennessee healthcare law?",
        a: "Yes — for healthcare-adjacent work we sign a BAA before scope discussions touch PHI. Tennessee has unique requirements around provider licensing data we account for in scope.",
    },
    {
        q: "Do you work with HCA Healthcare supplier-network vendors?",
        a: "Yes — supplier portal, compliance tracking, and vendor-side ops tooling is in scope. We do not work directly with HCA but the supplier ecosystem around it is a routine client profile.",
    },
    {
        q: "Can you integrate with HL7 v2, FHIR, or X12?",
        a: "Yes — provider-side workflows often require HL7 v2 ADT/ORM feeds, FHIR R4 for modern API surfaces, and X12 270/271/837/835 for payer integration. Scope depends on transaction set and trading-partner.",
    },
    {
        q: "Do you build for music publishers and touring operators?",
        a: "Yes — venue booking, tour settlements, royalty splits, and rights management for Music Row publishers and independent artists. Aaron Coleman Music is one of our published portfolio sites.",
    },
];

export default function NashvilleLandingPage() {
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
                        <li className="text-gray-300">Nashville, TN</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-blue-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development in Nashville, TN
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Nashville&apos;s economy is anchored by two unusually large verticals: healthcare administration (HCA Healthcare and a wide ecosystem of provider, payer, and admin tech companies) and music and entertainment tech (publishing, streaming, royalty management).
                    </p>
                    <ConsultationCTA label="Talk Nashville Projects" city="Nashville, TN" source="city-nashville" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Add a maturing SaaS founder pool and a strong professional services base, and you have a city that punches well above its size for software demand. QUANT LAB USA builds for all of it, from a Georgia HQ one timezone east on a same-region driving radius.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Nashville businesses choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Nashville&apos;s healthcare economy is one of the densest in the country. HCA Healthcare&apos;s downtown HQ employs over 13,000 in metro Nashville and anchors a deep ecosystem of provider, payer, admin-tech, and revenue-cycle-management vendors — Change Healthcare, Asurion, CapStar, HealthStream, and an extended supplier network that stretches south through Franklin and Brentwood. The Cool Springs healthcare-tech corridor along I-65 hosts a meaningful slice of the Tennessee mid-market software demand. Music Row anchors the second pillar: BMI, ASCAP, SESAC, the major-label Nashville offices, every independent publisher you have ever heard of, plus the touring, settlements, and rights-management tooling demand that follows. Vanderbilt University Medical Center and the surrounding research hospitals generate a steady stream of healthcare-research-adjacent SaaS founders. And the city&apos;s SaaS founder pool — many transplanted from Austin, the Bay, and NYC — is unusually willing to work with senior contract engineers at a price tier that respects runway.
                        </p>
                        <p>
                            We are a short drive south on I-24. Same region, mostly-overlapping business hours, founder-led. We do not outsource. Every project is scoped and shipped personally by William Beltz on a modern stack. For Nashville healthcare-adjacent operators specifically, the combination of senior engineering and pen-testing-by-default matters — every meaningful provider-side software product faces a HIPAA-aware security review at some point, and we engineer for that bar from day one.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for Nashville clients</h2>
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
                            Aaron Coleman Music is one of our published portfolio sites — an example of how we work with artists and music-adjacent brands. Broader portfolio includes UEhub, <Link href="/work/j5-sales-os" className="text-sky-400 hover:underline">J5 Sales OS</Link>, and <Link href="/work/wilder-recovery" className="text-sky-400 hover:underline">Wilder Recovery</Link> (a recovery-services platform with vehicle intake, photo and document chain-of-custody, personal-property inventory, role-based admin, and an immutable audit log). The Wilder Recovery architecture — deep audit logs, role-based access, document and image chain-of-custody — transfers cleanly to healthcare-adjacent operational tooling where every action needs to be defensible months later.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Short drive south on I-24 — same region",
                            "Healthcare-adjacent and music-tech specialization",
                            "BAA / HIPAA-aligned engagements scoped deliberately",
                            "HL7 v2 / FHIR / X12 integration capability",
                            "Modern Next.js / TypeScript / PostgreSQL / Docker stack",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work remotely with Nashville teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Nashville is one hour behind Georgia HQ on Central Time, which means our morning and your morning overlap and our late afternoon overlaps with your mid-afternoon for reviews. Most engagements start with a 60-minute scope by video. For engagements above ~$25k we drive up I-24 or fly into BNA for an on-site kickoff afternoon — downtown, Cool Springs, Brentwood, Franklin, or Music Row are all easy. For healthcare-adjacent work, we sign a BAA before any scope discussion that might touch PHI. Build cycles run weekly with a Friday staging URL, written notes, and the next-week plan. Most Nashville engagements close on fixed-scope, fixed-price proposals — exactly the predictability provider and music-publisher buyers expect. Full code, database, and hosting account handover at acceptance.
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
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "CRMs and operations dashboards." },
                            { href: "/services/custom-crm-development", title: "Custom CRM Development", desc: "Own your CRM — don&apos;t rent it." },
                            { href: "/services/payments-invoicing-licensing", title: "Payments & Licensing", desc: "Stripe-powered SaaS billing." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "HIPAA-aware and pre-procurement engagements." },
                            { href: "/services/web-applications", title: "Web Applications", desc: "Customer-facing and internal builds." },
                            { href: "/services/cloud-infrastructure", title: "Cloud Infrastructure", desc: "AWS, GCP, Docker-native deploys." },
                            { href: "/work/wilder-recovery", title: "Case Study: Wilder Recovery", desc: "Audit-log heavy operational platform." },
                            { href: "/work/j5-sales-os", title: "Case Study: J5 Sales OS", desc: "AI prospecting and pipeline SaaS." },
                            { href: "/blog/custom-crm-development-guide", title: "Custom CRM Development Guide", desc: "Pillar resource — build vs. buy." },
                            { href: "/software-development-atlanta-ga", title: "Atlanta, GA", desc: "Fintech, logistics, and SaaS." },
                            { href: "/software-development-charlotte-nc", title: "Charlotte, NC", desc: "Banking and fintech-adjacent work." },
                            { href: "/software-development-macon-ga", title: "Macon, GA", desc: "Our HQ — Middle Georgia coverage." },
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
                            Talk Nashville projects.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> to talk Nashville projects.
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
