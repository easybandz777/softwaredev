import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { RelatedIndustries } from "@/components/RelatedIndustries";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Los Angeles Software Development & Pen Testing | QUANT LAB USA",
    description:
        "Los Angeles custom software, SaaS, and penetration testing for media, entertainment-tech, and aerospace firms. Founder-led, fixed-quote. Call (770) 652-1282.",
    slug: "software-development-los-angeles-ca",
    image: "/og-image.png",
    type: "article",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-los-angeles-ca#localbusiness",
    name: "QUANT LAB USA — Los Angeles Coverage",
    url: "https://quantlabusa.dev/software-development-los-angeles-ca",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Los Angeles", containedInPlace: { "@type": "State", name: "California" } },
        { "@type": "City", name: "Santa Monica" },
        { "@type": "City", name: "Burbank" },
        { "@type": "City", name: "Glendale" },
        { "@type": "City", name: "Pasadena" },
        { "@type": "City", name: "Culver City" },
        { "@type": "City", name: "El Segundo" },
        { "@type": "City", name: "Long Beach" },
        { "@type": "AdministrativeArea", name: "Los Angeles County" },
        { "@type": "AdministrativeArea", name: "Greater Los Angeles" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 34.0522, longitude: -118.2437 },
    address: { "@type": "PostalAddress", addressLocality: "Los Angeles", addressRegion: "CA", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Penetration Testing",
    name: "Custom Software Development & Penetration Testing in Los Angeles, CA",
    provider: { "@id": "https://quantlabusa.dev/#organization" },
    areaServed: { "@type": "City", name: "Los Angeles", containedInPlace: { "@type": "State", name: "California" } },
    description:
        "Custom SaaS, media and entertainment tooling, billing infrastructure, and MITRE-aligned penetration testing for Los Angeles media, entertainment-tech, and aerospace companies.",
    url: "https://quantlabusa.dev/software-development-los-angeles-ca",
};

const services = [
    {
        title: "Media & Entertainment Platforms",
        desc: "Custom rights, royalty, scheduling, and production-workflow tooling for studios, agencies, and post houses. Typical: $30k–$120k.",
    },
    {
        title: "Subscription & Licensing Systems",
        desc: "Stripe-powered subscription products, DTC billing, and software licensing for entertainment-tech founders. Typical: $8k–$28k.",
    },
    {
        title: "Custom CRMs & Operations Dashboards",
        desc: "Purpose-built tooling for agencies, production companies, and aerospace suppliers across LA County. Typical: $20k–$70k.",
    },
    {
        title: "Penetration Testing (Web, Network, AD)",
        desc: "Full engagements with formal MITRE-ATT&CK-aligned reports for compliance and customer security reviews. Typical: $12k–$40k.",
    },
    {
        title: "Custom Software for Aerospace-Adjacent Vendors",
        desc: "Scoped per requirement — unclassified ops, supplier, and data tooling for the El Segundo aerospace corridor. Typical: $25k–$120k.",
    },
    {
        title: "AI-Backed Product Engineering",
        desc: "Production OpenAI and Anthropic integrations with cost monitoring, evals, and rate-limit handling for media and SaaS builds. Typical: $25k–$120k.",
    },
];

const faqs = [
    {
        q: "Do you build software for studios, agencies, and production companies?",
        a: "Yes — rights and royalty tracking, production scheduling, talent and crew operations, and back-office dashboards are common LA builds. We scope each one fixed-price after a requirements call.",
    },
    {
        q: "Can you support the El Segundo and South Bay aerospace corridor?",
        a: "Yes — most of our defense-adjacent work is unclassified ops, supplier, and data tooling. Anything touching controlled environments is scoped case-by-case under NDA.",
    },
    {
        q: "What is the time-zone overlap with Pacific Time?",
        a: "We work from Eastern HQ, three hours ahead of Pacific. Our late morning is your early morning and our late afternoon is your mid-morning — we run standups at 11am ET / 8am PT routinely, which leaves a full block of overlap for reviews.",
    },
    {
        q: "Do you support DTC subscription and streaming-adjacent billing?",
        a: "Yes — Stripe-powered subscriptions, metered billing, entitlements, and licensing are routine. We wire webhook idempotency, dunning, and proration correctly at build time.",
    },
    {
        q: "Are you familiar with California-specific compliance (CCPA, CPRA)?",
        a: "Yes — CCPA, CPRA, and the broader California consumer-data framework are standard considerations in our LA builds. We wire consent surfaces and data-rights flows in at build time, not as an afterthought.",
    },
    {
        q: "Can you fly in for kickoffs across Greater Los Angeles?",
        a: "For engagements above roughly $25k, yes — LAX and BUR are a direct flight from Atlanta. We plan on-site afternoons in Santa Monica, Culver City, Burbank, Pasadena, or El Segundo as scope warrants.",
    },
    {
        q: "What pen testing methodology do you use?",
        a: "Our framework is MITRE ATT&CK end-to-end. Every finding is mapped to a technique ID across recon, credential spraying, Kerberoasting, ADCS abuse, lateral movement, and web app exploitation.",
    },
    {
        q: "What is a typical timeline for a Los Angeles engagement?",
        a: "A standalone external pen test runs 2–3 weeks including reporting. A full internal-plus-external with AD scope runs 4–6 weeks. Custom software follows separate fixed-scope scoping.",
    },
];

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://quantlabusa.dev/services" },
        { "@type": "ListItem", position: 3, name: "Software Development Los Angeles, CA", item: "https://quantlabusa.dev/software-development-los-angeles-ca" },
    ],
};

export default function LosAngelesLandingPage() {
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
                        <li className="text-gray-300">Los Angeles, CA</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development & Penetration Testing in Los Angeles, CA
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Los Angeles runs on three industries that all need custom software: media and entertainment, a fast-growing entertainment-tech and DTC startup scene, and the South Bay aerospace corridor. Off-the-shelf SaaS rarely fits any of them cleanly.
                    </p>
                    <ConsultationCTA label="Scope an LA Engagement" city="Los Angeles, CA" source="city-los-angeles" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA combines custom software engineering with hands-on penetration testing rooted in the MITRE ATT&amp;CK framework — founder-led delivery, a modern stack, and code that survives a serious technical review. We build for LA the way LA buyers expect: predictable scope, predictable price, and an engineer who actually ships.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Los Angeles organizations choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Los Angeles is the entertainment capital of the world, and entertainment is a software problem hiding behind a creative one. Studios, networks, agencies, post houses, and music companies across Burbank, Culver City, Hollywood, and Santa Monica run on a tangle of rights databases, royalty calculations, production schedules, talent and crew operations, and finance workflows that no single off-the-shelf product covers. Below that sits a thriving entertainment-tech and DTC layer — streaming-adjacent startups, creator tooling, ticketing, and direct-to-consumer brands — that lives and dies on Stripe-grade billing and clean subscription mechanics. And out in El Segundo and the South Bay, the aerospace corridor anchored by SpaceX, the broader space-launch ecosystem, and a deep bench of suppliers generates demand for unclassified ops, supplier, and data tooling.
                        </p>
                        <p>
                            Most generalist agencies in the LA market sell development hours. We sell senior engineering plus genuine offensive-security capability in the same shop. Active Directory abuse paths, lateral movement, ADCS certificate abuse, Kerberoasting, and web app exploitation are in-house, not a subcontracted line item — and every line of software we ship is reviewed against the same threat models we use on engagements. For an LA founder raising money, a studio vendor passing a customer security review, or an aerospace supplier under audit, that combination is the entire pitch.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for LA clients</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work remotely with Los Angeles teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Los Angeles sits three hours behind our Eastern HQ — we work your morning. Our late morning is your early morning and our late afternoon is your mid-morning, so there is a clean overlap window for standups and reviews; we run standups at 11am ET / 8am PT routinely. For engagements above roughly $25k we fly into LAX or BUR for an on-site kickoff afternoon — Santa Monica, Culver City, Burbank, Pasadena, or El Segundo as scope warrants. Pen testing engagements run from a secure remote infrastructure with strict source-IP allowlisting and authenticated client-side VPN tunnels for internal scope. Reports are delivered in two formats: a technical deliverable with reproduction steps and remediation detail for the security team, and a board-readable executive summary with a prioritized roadmap. Custom software builds are fixed-scope and fixed-price, with a weekly Friday staging URL and full handover of code and accounts at acceptance. Most LA engagements close inside 4–6 weeks from kickoff to final report.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Media, entertainment-tech, and aerospace-adjacent software — real, in-house",
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
                        industries={["saas","fintech","e-commerce","healthcare"]}
                        heading="Industries we serve in Los Angeles"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["saas","stripe","build-vs-buy"]}
                        pinned={["build-vs-buy-software-2026","nextjs-stripe-integration-guide","custom-crm-development-guide"]}
                        heading="Reading for Los Angeles founders"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services & nearby cities</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "CRMs, dashboards, and operations tooling." },
                            { href: "/services/subscription-billing", title: "Subscription Billing", desc: "Metered billing and entitlements." },
                            { href: "/services/stripe-integration", title: "Stripe Integration", desc: "Payments, subscriptions, and webhooks." },
                            { href: "/services/saas-platform-development", title: "SaaS Platform Development", desc: "Multi-tenant products on a modern stack." },
                            { href: "/services/ai-integration-services", title: "AI Integration", desc: "OpenAI and Anthropic, wired for production." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, network, and AD engagements." },
                            { href: "/services/web-app-pentest", title: "Web App Pen Test", desc: "OWASP-aligned web app testing." },
                            { href: "/services/active-directory-pentest", title: "Active Directory Pen Test", desc: "Kerberoasting, ADCS, lateral movement." },
                            { href: "/blog/build-vs-buy-software-2026", title: "Build vs Buy Software 2026", desc: "A decision framework for founders." },
                            { href: "/software-development-san-diego-ca", title: "San Diego, CA", desc: "Biotech, defense, and cyber." },
                            { href: "/software-development-san-jose-ca", title: "San Jose, CA", desc: "Silicon Valley hardware and SaaS." },
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
                            Scope a Los Angeles engagement.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or email <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a> to discuss Los Angeles engagements.
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
