import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { RelatedIndustries } from "@/components/RelatedIndustries";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Boise Software Development & Pen Testing | QUANT LAB USA",
    description:
        "Boise custom software and penetration testing for semiconductor suppliers, the Micron ecosystem, and Treasure Valley startups. Founder-led. Call (770) 652-1282.",
    slug: "software-development-boise-id",
    image: "/og-image.png",
    type: "article",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-boise-id#localbusiness",
    name: "QUANT LAB USA — Boise Coverage",
    url: "https://quantlabusa.dev/software-development-boise-id",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Boise", containedInPlace: { "@type": "State", name: "Idaho" } },
        { "@type": "City", name: "Meridian" },
        { "@type": "City", name: "Nampa" },
        { "@type": "City", name: "Eagle" },
        { "@type": "City", name: "Caldwell" },
        { "@type": "City", name: "Garden City" },
        { "@type": "AdministrativeArea", name: "Ada County" },
        { "@type": "AdministrativeArea", name: "Canyon County" },
        { "@type": "AdministrativeArea", name: "Treasure Valley" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 43.6150, longitude: -116.2023 },
    address: { "@type": "PostalAddress", addressLocality: "Boise", addressRegion: "ID", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Penetration Testing",
    name: "Custom Software Development & Penetration Testing in Boise, ID",
    provider: { "@id": "https://quantlabusa.dev/#organization" },
    areaServed: { "@type": "City", name: "Boise", containedInPlace: { "@type": "State", name: "Idaho" } },
    description:
        "Custom software for semiconductor suppliers and the Micron ecosystem, SaaS for Treasure Valley startups, and MITRE-aligned penetration testing in Boise.",
    url: "https://quantlabusa.dev/software-development-boise-id",
};

const services = [
    {
        title: "Semiconductor-Adjacent Software",
        desc: "Supplier portals, traceability, telemetry ingestion, and operations dashboards for the Micron ecosystem and its suppliers. Typical: $25k–$100k.",
    },
    {
        title: "SaaS Products for Treasure Valley Startups",
        desc: "Multi-tenant SaaS on Next.js, TypeScript, Node, and PostgreSQL — built to scale and easy for a team to own. Typical: $30k–$120k.",
    },
    {
        title: "Custom CRMs & Operations Dashboards",
        desc: "Purpose-built tooling for manufacturers, services firms, and growth-stage companies across the Valley. Typical: $20k–$70k.",
    },
    {
        title: "Penetration Testing (Web, Network, AD)",
        desc: "Full engagements with formal MITRE-ATT&CK-aligned reports for compliance and customer security reviews. Typical: $12k–$40k.",
    },
    {
        title: "Stripe & Subscription Billing",
        desc: "Stripe-powered subscriptions, metered billing, and entitlements for Boise SaaS and DTC founders. Typical: $8k–$28k.",
    },
    {
        title: "Manufacturing & Supply-Chain Tooling",
        desc: "Inventory, supplier portals, and traceability software for Treasure Valley manufacturers. Typical: $25k–$90k.",
    },
];

const faqs = [
    {
        q: "Do you build software for semiconductor suppliers and the Micron ecosystem?",
        a: "Yes — supplier portals, traceability, telemetry ingestion, and operations dashboards are common Boise builds. We keep the software layer clean and reliable around complex manufacturing operations.",
    },
    {
        q: "Do you build SaaS for Treasure Valley startups?",
        a: "Yes — multi-tenant SaaS on a modern stack, with tenant isolation, onboarding, and billing built to scale. Full handover at acceptance so your team can own the codebase.",
    },
    {
        q: "What is the time-zone overlap with Mountain Time?",
        a: "We work from Eastern HQ, two hours ahead of Mountain. Our late morning is your mid-morning and our afternoon overlaps most of your workday — we keep a long shared window for standups, reviews, and pairing.",
    },
    {
        q: "Do you support Stripe subscription and billing?",
        a: "Yes — Stripe-powered subscriptions, metered billing, entitlements, and licensing are routine. We wire webhook idempotency, dunning, and proration correctly at build time.",
    },
    {
        q: "What pen testing methodology do you use?",
        a: "Our framework is MITRE ATT&CK end-to-end. Every finding is mapped to a technique ID across recon, credential spraying, Kerberoasting, ADCS abuse, lateral movement, and web app exploitation.",
    },
    {
        q: "Do you ship code a Boise team can take over?",
        a: "Yes — strict TypeScript, ESLint, CI on every deploy, architecture docs co-located with the code, and full handover of repositories and accounts. The build is designed to be owned, not rented.",
    },
    {
        q: "Can you fly in for kickoffs across the Treasure Valley?",
        a: "For engagements above roughly $25k, yes — BOI is well connected to Atlanta. We plan on-site afternoons in Boise, Meridian, Nampa, or Eagle as scope warrants.",
    },
    {
        q: "What is a typical timeline for a Boise engagement?",
        a: "A standalone external pen test runs 2–3 weeks including reporting. A full internal-plus-external with AD scope runs 4–6 weeks. Custom software follows separate fixed-scope scoping.",
    },
];

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://quantlabusa.dev/services" },
        { "@type": "ListItem", position: 3, name: "Software Development Boise, ID", item: "https://quantlabusa.dev/software-development-boise-id" },
    ],
};

export default function BoiseLandingPage() {
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
                        <li className="text-gray-300">Boise, ID</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development & Penetration Testing in Boise, ID
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Boise pairs a serious semiconductor base — anchored by Micron and its supplier ecosystem — with one of the fastest-growing startup scenes in the Mountain West. Both need senior software engineering that ships clean, ownable code.
                    </p>
                    <ConsultationCTA label="Scope a Boise Engagement" city="Boise, ID" source="city-boise" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA combines custom software engineering with hands-on penetration testing rooted in the MITRE ATT&amp;CK framework — founder-led delivery, a modern stack, and security-aware engineering by default. For a Boise supplier or a Treasure Valley startup, that pairing means one shop for clean software and a real security story.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Boise organizations choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Boise&apos;s economy carries an unusually deep technology base for its size. Micron Technology is headquartered here, and its semiconductor operations anchor a broad ecosystem of suppliers, equipment vendors, and service firms — all generating demand for supplier portals, traceability, telemetry ingestion, and operations dashboards where the software layer has to stay clean around genuinely complex manufacturing. Alongside that, the Treasure Valley — Boise, Meridian, Nampa, and Eagle — has become one of the fastest-growing startup and small-business markets in the Mountain West, with a steady stream of SaaS founders and growth-stage companies that need multi-tenant products, CRMs, and internal tooling built to a high standard.
                        </p>
                        <p>
                            Most generalist shops sell development hours and leave behind code a team cannot maintain. We sell senior, founder-led engineering on a modern stack, with full handover at acceptance — plus genuine offensive-security capability in the same shop. Active Directory abuse paths, lateral movement, ADCS abuse, and web app exploitation are in-house, not a subcontracted line item, and every line we ship is reviewed against the same threat models we use on engagements. For a Boise supplier under a customer security review or a Treasure Valley startup that wants software it can actually own, that combination is the entire pitch.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for Boise clients</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work remotely with Boise teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Boise sits two hours behind our Eastern HQ on Mountain Time, which makes the overlap generous — our late morning is your mid-morning, and our afternoon covers most of your workday. We keep a long shared window for standups, reviews, and pairing. For engagements above roughly $25k we fly into BOI for an on-site kickoff afternoon — Boise, Meridian, Nampa, or Eagle as scope warrants. Pen testing engagements run from a secure remote infrastructure with strict source-IP allowlisting and authenticated client-side VPN tunnels for internal scope. Reports come in two formats: a technical deliverable with reproduction steps and remediation detail, and a board-readable executive summary with a prioritized roadmap. Custom software builds are fixed-scope and fixed-price, with a weekly Friday staging URL and full handover of code and accounts at acceptance. Most Boise engagements close inside 4–6 weeks from kickoff to final report.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Semiconductor-adjacent, SaaS, and manufacturing software — real, in-house",
                            "Clean, documented code with full handover — code your team can own",
                            "Generous Mountain-time overlap from Eastern HQ",
                            "MITRE ATT&CK technique mapping on every finding",
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
                        industries={["manufacturing","saas","fintech","e-commerce"]}
                        heading="Industries we serve in Boise"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["build-vs-buy","saas","crm"]}
                        pinned={["build-vs-buy-software-2026","custom-crm-development-guide","custom-crm-vs-salesforce-vs-hubspot-2026"]}
                        heading="Reading for Boise founders"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services & nearby cities</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "Supplier portals and operations dashboards." },
                            { href: "/services/saas-platform-development", title: "SaaS Platform Development", desc: "Multi-tenant products, billing, onboarding." },
                            { href: "/services/custom-crm-development", title: "Custom CRM Development", desc: "Own your CRM — don&apos;t rent it." },
                            { href: "/services/api-development", title: "API Development", desc: "Robust, documented, versioned APIs." },
                            { href: "/services/stripe-integration", title: "Stripe Integration", desc: "Payments, subscriptions, and webhooks." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, network, and AD engagements." },
                            { href: "/services/web-app-pentest", title: "Web App Pen Test", desc: "OWASP-aligned web app testing." },
                            { href: "/services/active-directory-pentest", title: "Active Directory Pen Test", desc: "Kerberoasting, ADCS, lateral movement." },
                            { href: "/blog/custom-crm-development-guide", title: "Custom CRM Development Guide", desc: "Pillar resource — build vs. buy." },
                            { href: "/software-development-salt-lake-city-ut", title: "Salt Lake City, UT", desc: "Silicon Slopes SaaS." },
                            { href: "/software-development-portland-or", title: "Portland, OR", desc: "Athletic, apparel-tech, open-source." },
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
                            Scope a Boise engagement.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or email <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a> to discuss Boise engagements.
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
