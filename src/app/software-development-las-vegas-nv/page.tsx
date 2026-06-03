import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { RelatedIndustries } from "@/components/RelatedIndustries";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Las Vegas Software Development & Pen Testing | QUANT LAB USA",
    description:
        "Las Vegas custom software and penetration testing for gaming, hospitality, and fintech operators. Founder-led, fixed-quote, MITRE-aligned. Call (770) 652-1282.",
    slug: "software-development-las-vegas-nv",
    image: "/og-image.png",
    type: "article",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-las-vegas-nv#localbusiness",
    name: "QUANT LAB USA — Las Vegas Coverage",
    url: "https://quantlabusa.dev/software-development-las-vegas-nv",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Las Vegas", containedInPlace: { "@type": "State", name: "Nevada" } },
        { "@type": "City", name: "Henderson" },
        { "@type": "City", name: "North Las Vegas" },
        { "@type": "City", name: "Summerlin" },
        { "@type": "City", name: "Paradise" },
        { "@type": "City", name: "Spring Valley" },
        { "@type": "AdministrativeArea", name: "Clark County" },
        { "@type": "AdministrativeArea", name: "Las Vegas Valley" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 36.1699, longitude: -115.1398 },
    address: { "@type": "PostalAddress", addressLocality: "Las Vegas", addressRegion: "NV", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Penetration Testing",
    name: "Custom Software Development & Penetration Testing in Las Vegas, NV",
    provider: { "@id": "https://quantlabusa.dev/#organization" },
    areaServed: { "@type": "City", name: "Las Vegas", containedInPlace: { "@type": "State", name: "Nevada" } },
    description:
        "Custom gaming, hospitality, and fintech software plus MITRE-aligned penetration testing for Las Vegas operators and the Clark County hospitality economy.",
    url: "https://quantlabusa.dev/software-development-las-vegas-nv",
};

const services = [
    {
        title: "Hospitality & Operations Platforms",
        desc: "Booking, guest-experience, loyalty, and back-of-house operations tooling for resorts, venues, and hospitality groups. Typical: $30k–$120k.",
    },
    {
        title: "Gaming-Adjacent & Player Tooling",
        desc: "Loyalty, player-management, and analytics software built with the data-handling discipline a regulated industry expects. Typical: $30k–$120k.",
    },
    {
        title: "Fintech & Payments Infrastructure",
        desc: "Stripe-grade payment flows, treasury tooling, and subscription billing for Las Vegas fintech and payments operators. Typical: $12k–$40k.",
    },
    {
        title: "Penetration Testing (Web, Network, AD)",
        desc: "Full engagements with formal MITRE-ATT&CK-aligned reports for compliance and customer security reviews. Typical: $12k–$40k.",
    },
    {
        title: "Custom CRMs & Operations Dashboards",
        desc: "Purpose-built tooling for hospitality groups, agencies, and services firms across the Valley. Typical: $20k–$70k.",
    },
    {
        title: "AI-Backed Product Engineering",
        desc: "Production OpenAI and Anthropic integrations with cost monitoring, evals, and rate-limit handling for guest and ops tooling. Typical: $25k–$120k.",
    },
];

const faqs = [
    {
        q: "Do you build software for hospitality and resort operators?",
        a: "Yes — booking, guest-experience, loyalty, and back-of-house operations tooling are common Las Vegas builds. We keep the guest-facing experience fast and the operations layer reliable.",
    },
    {
        q: "Can you build gaming-adjacent or player-management tooling?",
        a: "Yes — loyalty, player-management, and analytics software, built with the data-handling and audit discipline a regulated industry expects. Anything touching licensed gaming systems is scoped carefully and case-by-case.",
    },
    {
        q: "Do you handle fintech and payments infrastructure?",
        a: "Yes — Stripe-grade payment flows, treasury tooling, and subscription billing are routine. We wire webhook idempotency, reconciliation, and PCI scope reduction in at build time.",
    },
    {
        q: "What is the time-zone overlap with Pacific Time?",
        a: "We work from Eastern HQ, three hours ahead of Pacific. Our late morning is your early morning and our late afternoon is your mid-morning — we run standups at 11am ET / 8am PT routinely, leaving a clean overlap window.",
    },
    {
        q: "What pen testing methodology do you use?",
        a: "Our framework is MITRE ATT&CK end-to-end. Every finding is mapped to a technique ID across recon, credential spraying, Kerberoasting, ADCS abuse, lateral movement, and web app exploitation.",
    },
    {
        q: "Can you produce a pen test report I can hand to a partner or auditor?",
        a: "Yes — our reports are formatted for compliance and supply-chain review, with technical detail for security teams and an executive summary for leadership.",
    },
    {
        q: "Can you fly in for kickoffs across the Las Vegas Valley?",
        a: "For engagements above roughly $25k, yes — LAS is a direct flight from Atlanta. We plan on-site afternoons on the Strip, in Henderson, or in Summerlin as scope warrants.",
    },
    {
        q: "What is a typical timeline for a Las Vegas engagement?",
        a: "A standalone external pen test runs 2–3 weeks including reporting. A full internal-plus-external with AD scope runs 4–6 weeks. Custom software follows separate fixed-scope scoping.",
    },
];

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://quantlabusa.dev/services" },
        { "@type": "ListItem", position: 3, name: "Software Development Las Vegas, NV", item: "https://quantlabusa.dev/software-development-las-vegas-nv" },
    ],
};

export default function LasVegasLandingPage() {
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
                        <li className="text-gray-300">Las Vegas, NV</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development & Penetration Testing in Las Vegas, NV
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Las Vegas runs on three data-intensive worlds: gaming, a vast hospitality economy, and a growing fintech and payments scene. All three handle sensitive data at scale, and all three need software vendors who take security as seriously as they do.
                    </p>
                    <ConsultationCTA label="Scope a Las Vegas Engagement" city="Las Vegas, NV" source="city-las-vegas" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA combines custom software engineering with hands-on penetration testing rooted in the MITRE ATT&amp;CK framework — founder-led delivery, a modern stack, and security-aware engineering by default. For Las Vegas operators handling player data, guest records, or payment flows, that pairing is the point.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Las Vegas organizations choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Las Vegas is one of the most data-intensive cities in the country. The gaming industry — casinos, the technology suppliers behind them, and the analytics and player-management systems that run them — operates under heavy regulation and serious data-handling expectations. Layered on top is a hospitality economy of enormous scale: resorts, venues, conventions, restaurants, and entertainment groups across the Strip, Henderson, and Summerlin, all running booking, guest-experience, loyalty, and back-of-house operations software. And the city&apos;s fintech and payments scene continues to grow, generating demand for Stripe-grade payment flows, treasury tooling, and subscription billing.
                        </p>
                        <p>
                            Most generalist agencies sell development hours. We sell senior engineering plus genuine offensive-security capability in the same shop. Active Directory abuse paths, lateral movement, ADCS certificate abuse, Kerberoasting, and web app exploitation are in-house, not a subcontracted line item — and every line of software we ship is reviewed against the same threat models we use on engagements. For a Las Vegas hospitality group protecting guest data, a gaming-adjacent vendor under audit, or a payments operator reducing PCI scope, that combination is the entire pitch.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for Las Vegas clients</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work remotely with Las Vegas teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Las Vegas sits three hours behind our Eastern HQ — we work your morning. Our late morning is your early morning and our late afternoon is your mid-morning, so there is a clean overlap window for standups and reviews; we run standups at 11am ET / 8am PT routinely. For engagements above roughly $25k we fly into LAS for an on-site kickoff afternoon — the Strip, Henderson, or Summerlin as scope warrants. Pen testing engagements run from a secure remote infrastructure with strict source-IP allowlisting and authenticated client-side VPN tunnels for internal scope. Reports come in two formats: a technical deliverable with reproduction steps and remediation detail, and a board-readable executive summary with a prioritized roadmap. Custom software builds are fixed-scope and fixed-price, with a weekly Friday staging URL and full handover of code and accounts at acceptance. Most Las Vegas engagements close inside 4–6 weeks from kickoff to final report.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Gaming, hospitality, and fintech software — real, in-house",
                            "In-house offensive security capability (AD abuse paths, ADCS, web app)",
                            "Pacific morning–early afternoon overlap from Eastern HQ",
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
                        industries={["fintech","saas","e-commerce","real-estate"]}
                        heading="Industries we serve in Las Vegas"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["pentest","stripe","compliance"]}
                        pinned={["what-is-penetration-testing","nextjs-stripe-integration-guide","penetration-test-cost-2026"]}
                        heading="Reading for Las Vegas founders"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services & nearby cities</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "Operations dashboards and platforms." },
                            { href: "/services/stripe-integration", title: "Stripe Integration", desc: "Payments, subscriptions, and webhooks." },
                            { href: "/services/subscription-billing", title: "Subscription Billing", desc: "Metered billing and entitlements." },
                            { href: "/services/custom-crm-development", title: "Custom CRM Development", desc: "Own your CRM — don&apos;t rent it." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, network, and AD engagements." },
                            { href: "/services/network-pentest", title: "Network Penetration Testing", desc: "Internal and external network engagements." },
                            { href: "/services/web-app-pentest", title: "Web App Pen Test", desc: "OWASP-aligned web app testing." },
                            { href: "/services/mitre-attack-assessment", title: "MITRE ATT&CK Assessment", desc: "Full attack-chain mapping and reporting." },
                            { href: "/blog/what-is-penetration-testing", title: "What Is Penetration Testing?", desc: "A founder's buyer guide." },
                            { href: "/software-development-salt-lake-city-ut", title: "Salt Lake City, UT", desc: "Silicon Slopes SaaS." },
                            { href: "/software-development-los-angeles-ca", title: "Los Angeles, CA", desc: "Media, entertainment-tech, aerospace." },
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
                            Scope a Las Vegas engagement.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or email <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a> to discuss Las Vegas engagements.
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
