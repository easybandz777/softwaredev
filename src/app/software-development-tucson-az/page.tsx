import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { RelatedIndustries } from "@/components/RelatedIndustries";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Tucson Software Development & Pen Testing | QUANT LAB USA",
    description:
        "Tucson AZ custom software and pen testing for aerospace, optics and photonics, and University of Arizona research spinouts. Founder-led. Call (770) 652-1282.",
    slug: "software-development-tucson-az",
    image: "/og-image.png",
    type: "article",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-tucson-az#localbusiness",
    name: "QUANT LAB USA — Tucson Coverage",
    url: "https://quantlabusa.dev/software-development-tucson-az",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Tucson", containedInPlace: { "@type": "State", name: "Arizona" } },
        { "@type": "City", name: "Oro Valley" },
        { "@type": "City", name: "Marana" },
        { "@type": "City", name: "Sahuarita" },
        { "@type": "City", name: "Vail" },
        { "@type": "City", name: "Sierra Vista" },
        { "@type": "AdministrativeArea", name: "Pima County" },
        { "@type": "AdministrativeArea", name: "Southern Arizona" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 32.2226, longitude: -110.9747 },
    address: { "@type": "PostalAddress", addressLocality: "Tucson", addressRegion: "AZ", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Penetration Testing",
    name: "Custom Software Development & Penetration Testing in Tucson, AZ",
    provider: { "@id": "https://quantlabusa.dev/#organization" },
    areaServed: { "@type": "City", name: "Tucson", containedInPlace: { "@type": "State", name: "Arizona" } },
    description:
        "Aerospace and optics supplier tooling, university research-spinout platforms, and penetration testing for Southern Arizona.",
    url: "https://quantlabusa.dev/software-development-tucson-az",
};

const services = [
    {
        title: "Aerospace & Defense Supplier Tooling",
        desc: "Supplier portals, compliance tracking, and ITAR-aware workflows for the Raytheon and defense-vendor ecosystem. Typical: $35k–$140k.",
    },
    {
        title: "Optics, Photonics & Research Platforms",
        desc: "Data capture, instrument dashboards, and lab tooling for the Optics Valley and University of Arizona spinouts. Typical: $30k–$120k.",
    },
    {
        title: "SaaS & Startup MVP Builds",
        desc: "Multi-tenant platforms and product MVPs for Tech Parks Arizona and university-incubated startups. Typical: $25k–$90k.",
    },
    {
        title: "Web Application Penetration Testing",
        desc: "OWASP-aligned testing for research platforms, SaaS products, and customer portals. Typical: $8k–$28k.",
    },
    {
        title: "Custom CRMs & Operations Dashboards",
        desc: "Purpose-built tooling for services, healthcare, and distribution firms across Pima County. Typical: $20k–$70k.",
    },
    {
        title: "MITRE ATT&CK Assessments",
        desc: "Full attack-chain documentation for vendor-risk, supplier-security, and compliance programs. Typical: $14k–$40k.",
    },
];

const faqs = [
    {
        q: "Do you work with aerospace and defense suppliers?",
        a: "Yes — supplier portals, compliance tracking, and ITAR-aware workflows are in scope for the Raytheon and broader defense-vendor ecosystem in Tucson. Cleared environments are scoped case-by-case, and clearance status is discussed under NDA rather than on a public page.",
    },
    {
        q: "Can you build software for optics, photonics, and research labs?",
        a: "Yes — instrument dashboards, data-capture pipelines, and lab tooling are a natural fit for the Optics Valley cluster and University of Arizona spinouts. We scope data-integrity and reproducibility requirements up front.",
    },
    {
        q: "Do you help University of Arizona spinouts and startups?",
        a: "Yes — we build multi-tenant SaaS platforms and product MVPs for Tech Parks Arizona tenants and university-incubated companies, with a fixed-scope path from prototype to a fundable product.",
    },
    {
        q: "Do you do web application penetration testing?",
        a: "Yes — OWASP-aligned testing for research platforms, SaaS products, and customer portals. Every finding is mapped to a MITRE ATT&CK technique and delivered with reproduction steps and a remediation roadmap.",
    },
    {
        q: "What pen testing methodology do you use?",
        a: "Our framework is MITRE ATT&CK end-to-end. Every finding is mapped to a technique ID across recon, credential spraying, Kerberoasting, ADCS abuse, lateral movement, and C2 infrastructure.",
    },
    {
        q: "Can you fly in for kickoffs in Southern Arizona?",
        a: "Yes — for engagements above roughly $25k we fly into TUS for an on-site kickoff afternoon. Downtown Tucson, the University area, Oro Valley, and Marana are all easy to reach, and on-site internal testing is scheduled for the active window.",
    },
    {
        q: "How does the time zone work with your Georgia HQ?",
        a: "Arizona does not observe daylight saving time, so the offset from Georgia HQ shifts seasonally — two hours behind in winter, three in summer. Our morning and your early morning overlap, and we plan async handoffs around the window.",
    },
    {
        q: "What is a typical timeline for a Tucson engagement?",
        a: "A standalone web app pen test runs 2–3 weeks including reporting. A meaningful custom build typically runs 4–6 months, with a staging URL shipped weekly during development.",
    },
];

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://quantlabusa.dev/services" },
        { "@type": "ListItem", position: 3, name: "Software Development Tucson, AZ", item: "https://quantlabusa.dev/software-development-tucson-az" },
    ],
};

export default function TucsonLandingPage() {
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
                        <li className="text-gray-300">Tucson, AZ</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development & Penetration Testing in Tucson, AZ
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Tucson is a research and aerospace town with a technical edge most metros its size cannot match. Raytheon&apos;s missile-systems operation, the &quot;Optics Valley&quot; photonics cluster, and the University of Arizona drive demand for software vendors who can work with serious engineering and research teams.
                    </p>
                    <ConsultationCTA label="Scope a Tucson Engagement" city="Tucson, AZ" source="city-tucson" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA combines custom software engineering with hands-on penetration testing rooted in the MITRE ATT&amp;CK framework — not just selling development hours. Tucson buyers, from defense suppliers to university spinouts, expect a vendor who can build a production system and break it like an attacker. We do both in-house.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Tucson organizations choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Tucson punches well above its weight technically. Raytheon&apos;s missile-systems business is one of the largest employers in Southern Arizona and anchors a deep tier of aerospace and defense suppliers. The region is known as &quot;Optics Valley&quot; — a globally significant cluster of optics and photonics companies tied to the University of Arizona&apos;s Wyant College of Optical Sciences. The university itself is a major research institution whose Tech Parks Arizona and Tech Launch Arizona programs spin out startups every year, and Davis-Monthan Air Force Base adds another defense-services layer. Mining operations across Pima County, a growing healthcare sector around Banner – University Medical Center, and a steady services and distribution mid-market round out the economy.
                        </p>
                        <p>
                            Most generalist agencies cannot credibly speak to penetration testing methodology, and most security shops cannot ship production software. We do both. Active Directory abuse paths, lateral movement, ADCS certificate abuse, Kerberoasting, and web app exploitation are in-house capability, not a subcontracted line item — and every line of software we ship is reviewed against the same threat models we use on offensive engagements. For Tucson defense suppliers, research labs, and spinouts that need both engineering and security credibility, that combination is the entire pitch.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for Tucson clients</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Proof of work</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Our pen testing track record includes a full Active Directory engagement for a regional financial services firm — an end-to-end internal assessment running eleven attack modules, every finding mapped to a MITRE ATT&amp;CK technique, with the full attack chain from standard user to Domain Admin documented in screenshots and timestamps. The client passed their compliance audit on the first attempt and re-engaged us on a six-month cadence. That is the same methodology we apply to every Tucson engagement, whether the buyer is a defense supplier, an optics company, or a university spinout.
                        </p>
                        <p>
                            QUANT LAB USA is founder-led and accountable end-to-end. We ship production web and SaaS applications on a modern Next.js, TypeScript, PostgreSQL, and Docker stack, and we keep our proof generic with references available under NDA — we do not name-drop clients who did not sign up to be a marketing line.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Founder-led and accountable end-to-end",
                            "In-house offensive security capability (AD abuse paths, web app, network)",
                            "ITAR-aware workflows for aerospace and defense suppliers",
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work remotely with Tucson teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Arizona does not observe daylight saving time, so the offset from Georgia HQ shifts seasonally — two hours behind in winter, three in summer — but our morning and your early morning always overlap for standups and design reviews. Most engagements start with a 60-minute scope by video, followed by a fly-in for an on-site kickoff afternoon — downtown Tucson, the University area, Oro Valley, or Marana. After kickoff, build cycles run weekly with a Friday staging URL, written notes, and the next-week plan. Internal pen tests requiring on-site network access are scheduled on-site for the active window with remote reporting following. We bill fixed scope on virtually every Tucson engagement, and code, database, hosting accounts, and full documentation transfer at acceptance — exactly what procurement and supplier-security review need.
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
                        industries={["manufacturing","saas","healthcare","fintech"]}
                        heading="Industries we serve in Tucson"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["saas","pentest","build-vs-buy"]}
                        pinned={["build-vs-buy-software-2026","what-is-penetration-testing","penetration-test-cost-2026"]}
                        heading="Reading for Tucson founders"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services & nearby cities</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { href: "/services/saas-platform-development", title: "SaaS Platform Development", desc: "Multi-tenant platforms and product MVPs." },
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "Supplier portals and lab tooling." },
                            { href: "/services/web-app-pentest", title: "Web Application Pen Test", desc: "OWASP-aligned web app testing." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, network, wireless, and AD engagements." },
                            { href: "/services/mitre-attack-assessment", title: "MITRE ATT&CK Assessment", desc: "Full attack-chain mapping for vendor risk." },
                            { href: "/services/api-development", title: "API Development", desc: "Instrument, data, and system integrations." },
                            { href: "/blog/what-is-penetration-testing", title: "What Is Penetration Testing?", desc: "Founder's buyer guide to pen tests." },
                            { href: "/blog/penetration-test-cost-2026", title: "Penetration Test Cost 2026", desc: "Pricing benchmarks and scope drivers." },
                            { href: "/software-development-phoenix-az", title: "Phoenix, AZ", desc: "Semiconductors, fintech, and aerospace." },
                            { href: "/software-development-albuquerque-nm", title: "Albuquerque, NM", desc: "National labs, aerospace, and research." },
                            { href: "/pricing", title: "Pricing", desc: "Fixed-quote ranges by engagement type." },
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
                            Scope a Tucson engagement.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or email <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a> to discuss Tucson engagements.
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
