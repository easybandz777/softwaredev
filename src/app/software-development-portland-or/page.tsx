import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { RelatedIndustries } from "@/components/RelatedIndustries";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Portland OR Software Development & Pen Testing | QUANT LAB USA",
    description:
        "Portland custom software and pen testing for athletic, apparel-tech, and open-source-driven companies. Founder-led, fixed-quote, MITRE-aligned. Call (770) 652-1282.",
    slug: "software-development-portland-or",
    image: "/og-image.png",
    type: "article",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-portland-or#localbusiness",
    name: "QUANT LAB USA — Portland Coverage",
    url: "https://quantlabusa.dev/software-development-portland-or",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Portland", containedInPlace: { "@type": "State", name: "Oregon" } },
        { "@type": "City", name: "Beaverton" },
        { "@type": "City", name: "Hillsboro" },
        { "@type": "City", name: "Lake Oswego" },
        { "@type": "City", name: "Gresham" },
        { "@type": "City", name: "Vancouver" },
        { "@type": "AdministrativeArea", name: "Multnomah County" },
        { "@type": "AdministrativeArea", name: "Washington County" },
        { "@type": "AdministrativeArea", name: "Portland Metro" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 45.5152, longitude: -122.6784 },
    address: { "@type": "PostalAddress", addressLocality: "Portland", addressRegion: "OR", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Penetration Testing",
    name: "Custom Software Development & Penetration Testing in Portland, OR",
    provider: { "@id": "https://quantlabusa.dev/#organization" },
    areaServed: { "@type": "City", name: "Portland", containedInPlace: { "@type": "State", name: "Oregon" } },
    description:
        "Custom commerce platforms, athletic and apparel-tech tooling, open-source-friendly engineering, and MITRE-aligned penetration testing for Portland-area companies.",
    url: "https://quantlabusa.dev/software-development-portland-or",
};

const services = [
    {
        title: "Commerce & DTC Platforms",
        desc: "Custom carts, subscription billing, and Shopify alternatives for athletic and apparel brands across the metro. Typical: $25k–$100k.",
    },
    {
        title: "Apparel-Tech & Product Tooling",
        desc: "Catalog, inventory, and product-lifecycle tooling for footwear, apparel, and outdoor-gear teams. Typical: $25k–$90k.",
    },
    {
        title: "Open-Source-Friendly Engineering",
        desc: "Clean, well-documented work on modern open stacks — Next.js, TypeScript, Node, PostgreSQL — built for a team to own. Typical: $30k–$120k.",
    },
    {
        title: "Penetration Testing (Web, Network, AD)",
        desc: "Full engagements with formal MITRE-ATT&CK-aligned reports for compliance and customer security reviews. Typical: $12k–$40k.",
    },
    {
        title: "Custom CRMs & Operations Dashboards",
        desc: "Purpose-built tooling for brands, agencies, and services firms across the Portland metro. Typical: $20k–$70k.",
    },
    {
        title: "Stripe & Subscription Billing",
        desc: "Stripe-powered subscriptions, metered billing, and entitlements for DTC and SaaS founders. Typical: $8k–$28k.",
    },
];

const faqs = [
    {
        q: "Do you build commerce platforms for athletic and apparel brands?",
        a: "Yes — custom carts, subscription billing, catalog and inventory tooling, and Shopify alternatives are common Portland builds. We keep the storefront fast and the back office clean.",
    },
    {
        q: "Do you work on open-source-friendly stacks?",
        a: "Yes — we build on modern open stacks (Next.js, TypeScript, Node, PostgreSQL, Docker) with well-documented code your team can own. No proprietary lock-in, and full handover at acceptance.",
    },
    {
        q: "What is the time-zone overlap with Pacific Time?",
        a: "We work from Eastern HQ, three hours ahead of Pacific. Our late morning is your early morning and our late afternoon is your mid-morning — we run standups at 11am ET / 8am PT routinely, leaving a clean overlap window.",
    },
    {
        q: "Do you support Stripe subscription and DTC billing?",
        a: "Yes — Stripe-powered subscriptions, metered billing, entitlements, and licensing are routine. We wire webhook idempotency, dunning, and proration correctly at build time.",
    },
    {
        q: "What pen testing methodology do you use?",
        a: "Our framework is MITRE ATT&CK end-to-end. Every finding is mapped to a technique ID across recon, credential spraying, Kerberoasting, ADCS abuse, lateral movement, and web app exploitation.",
    },
    {
        q: "Do you ship code that a Portland engineering team can take over?",
        a: "Yes — strict TypeScript, ESLint, CI on every deploy, architecture docs co-located with the code, and full handover of repositories and accounts. The build is designed to be owned, not rented.",
    },
    {
        q: "Can you fly in for kickoffs across the Portland metro?",
        a: "For engagements above roughly $25k, yes — PDX is a direct flight from Atlanta. We plan on-site afternoons in downtown Portland, Beaverton, Hillsboro, or Lake Oswego as scope warrants.",
    },
    {
        q: "What is a typical timeline for a Portland engagement?",
        a: "A standalone external pen test runs 2–3 weeks including reporting. A full internal-plus-external with AD scope runs 4–6 weeks. Custom software follows separate fixed-scope scoping.",
    },
];

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://quantlabusa.dev/services" },
        { "@type": "ListItem", position: 3, name: "Software Development Portland, OR", item: "https://quantlabusa.dev/software-development-portland-or" },
    ],
};

export default function PortlandLandingPage() {
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
                        <li className="text-gray-300">Portland, OR</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development & Penetration Testing in Portland, OR
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Portland is an athletic and apparel powerhouse with a strong open-source engineering culture. Brands, product teams, and a deep bench of developers here expect clean, ownable software — not proprietary lock-in dressed up as a deliverable.
                    </p>
                    <ConsultationCTA label="Scope a Portland Engagement" city="Portland, OR" source="city-portland" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA combines custom software engineering with hands-on penetration testing rooted in the MITRE ATT&amp;CK framework — founder-led delivery, modern open stacks, and code your team can own. Portland buyers value craftsmanship and transparency, and that is exactly how we build.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Portland organizations choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Portland&apos;s economy carries an unusually strong athletic and apparel footprint — Nike anchored in Beaverton, Adidas&apos;s North American base, Columbia Sportswear, and a dense ecosystem of footwear, apparel, and outdoor-gear companies and the agencies that serve them. That world generates demand for commerce platforms, catalog and inventory tooling, product-lifecycle software, and DTC subscription mechanics that off-the-shelf products handle awkwardly. Alongside it, Portland has a genuinely strong open-source and developer culture — the kind of market where buyers care about code quality, documentation, and whether their team can take the project over cleanly.
                        </p>
                        <p>
                            Most generalist agencies sell development hours and leave behind code a team cannot maintain. We sell senior, founder-led engineering on modern open stacks, with full handover at acceptance — plus genuine offensive-security capability in the same shop. Active Directory abuse paths, lateral movement, ADCS abuse, and web app exploitation are in-house, not a subcontracted line item, and every line we ship is reviewed against the same threat models we use on engagements. For a Portland brand running a customer security review, or a product team that wants software it can actually own, that combination is the entire pitch.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for Portland clients</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work remotely with Portland teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Portland sits three hours behind our Eastern HQ — we work your morning. Our late morning is your early morning and our late afternoon is your mid-morning, so there is a clean overlap window for standups and reviews; we run standups at 11am ET / 8am PT routinely. For engagements above roughly $25k we fly into PDX for an on-site kickoff afternoon — downtown Portland, Beaverton, Hillsboro, or Lake Oswego as scope warrants. Pen testing engagements run from a secure remote infrastructure with strict source-IP allowlisting and authenticated client-side VPN tunnels for internal scope. Reports come in two formats: a technical deliverable with reproduction steps and remediation detail, and a board-readable executive summary with a prioritized roadmap. Custom software builds are fixed-scope and fixed-price, on modern open stacks, with a weekly Friday staging URL and full handover of code and accounts at acceptance. Most Portland engagements close inside 4–6 weeks from kickoff to final report.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Athletic, apparel-tech, and commerce software — real, in-house",
                            "Open stacks and full handover — code your team can own",
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
                        industries={["e-commerce","saas","fintech","manufacturing"]}
                        heading="Industries we serve in Portland"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["build-vs-buy","stripe","saas"]}
                        pinned={["build-vs-buy-software-2026","nextjs-stripe-integration-guide","custom-crm-development-guide"]}
                        heading="Reading for Portland founders"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services & nearby cities</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { href: "/services/ecommerce-development", title: "E-Commerce Development", desc: "Custom carts and Shopify alternatives." },
                            { href: "/services/subscription-billing", title: "Subscription Billing", desc: "Metered billing and entitlements." },
                            { href: "/services/stripe-integration", title: "Stripe Integration", desc: "Payments, subscriptions, and webhooks." },
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "Catalog, inventory, and ops tooling." },
                            { href: "/services/web-applications", title: "Web Applications", desc: "Clean, ownable Next.js / TypeScript builds." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, network, and AD engagements." },
                            { href: "/services/web-app-pentest", title: "Web App Pen Test", desc: "OWASP-aligned web app testing." },
                            { href: "/services/active-directory-pentest", title: "Active Directory Pen Test", desc: "Kerberoasting, ADCS, lateral movement." },
                            { href: "/blog/build-vs-buy-software-2026", title: "Build vs Buy Software 2026", desc: "A decision framework for founders." },
                            { href: "/software-development-san-jose-ca", title: "San Jose, CA", desc: "Silicon Valley hardware and SaaS." },
                            { href: "/software-development-boise-id", title: "Boise, ID", desc: "Semiconductors and startups." },
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
                            Scope a Portland engagement.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or email <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a> to discuss Portland engagements.
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
