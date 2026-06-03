import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { RelatedIndustries } from "@/components/RelatedIndustries";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Pittsburgh Software Development & Pen Testing | QUANT LAB USA",
    description:
        "Pittsburgh custom software and penetration testing for robotics, AI, and health tech. Founder-led, US-based, security-aware. Call (770) 652-1282.",
    slug: "software-development-pittsburgh-pa",
    image: "/og-image.png",
    type: "article",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-pittsburgh-pa#localbusiness",
    name: "QUANT LAB USA — Pittsburgh Coverage",
    url: "https://quantlabusa.dev/software-development-pittsburgh-pa",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Pittsburgh", containedInPlace: { "@type": "State", name: "Pennsylvania" } },
        { "@type": "City", name: "Oakland" },
        { "@type": "City", name: "Bakery Square" },
        { "@type": "City", name: "Cranberry Township" },
        { "@type": "AdministrativeArea", name: "Allegheny County" },
        { "@type": "AdministrativeArea", name: "Western Pennsylvania" },
        { "@type": "AdministrativeArea", name: "Greater Pittsburgh" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 40.4406, longitude: -79.9959 },
    address: { "@type": "PostalAddress", addressLocality: "Pittsburgh", addressRegion: "PA", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Penetration Testing",
    name: "Custom Software Development & Penetration Testing in Pittsburgh, PA",
    provider: { "@id": "https://quantlabusa.dev/#organization" },
    areaServed: { "@type": "City", name: "Pittsburgh", containedInPlace: { "@type": "State", name: "Pennsylvania" } },
    description:
        "Custom software, AI integration, and MITRE ATT&CK-aligned penetration testing for Pittsburgh robotics, AI, and health-tech teams.",
    url: "https://quantlabusa.dev/software-development-pittsburgh-pa",
};

const services = [
    {
        title: "AI Integration & Data Tooling",
        desc: "Model-backed features, data pipelines, and internal tools that put research output into production. Typical: $25k–$100k.",
    },
    {
        title: "Penetration Testing (Web, Network, AD)",
        desc: "Formal engagements with deliverables for investor diligence and enterprise security reviews. Typical: $12k–$40k.",
    },
    {
        title: "Robotics & Hardware-Adjacent Dashboards",
        desc: "Fleet monitoring, telemetry ingestion, and operator consoles for robotics and autonomy teams. Typical: $30k–$110k.",
    },
    {
        title: "Health-Tech Platforms",
        desc: "Patient-facing apps and clinical operations tooling built with HIPAA-aware data handling. Typical: $25k–$90k.",
    },
    {
        title: "Custom CRMs & Operations Dashboards",
        desc: "Purpose-built internal tooling for mid-market and professional-services firms. Typical: $20k–$70k.",
    },
    {
        title: "Investor Due-Diligence Packages",
        desc: "Architecture diagrams, threat model, SBOM summary, and pen test report ready for VC review. Typical: $10k–$25k.",
    },
];

const faqs = [
    {
        q: "Do you work with robotics and autonomy teams?",
        a: "Yes — fleet monitoring, telemetry ingestion, operator consoles, and the web and data layer that wraps a hardware or autonomy product. We do not build the embedded firmware itself, but we build the software systems around it.",
    },
    {
        q: "Can you put a CMU research prototype into production?",
        a: "Yes — moving a lab or research prototype to a fundable, production-grade product is one of our most common Pittsburgh engagements, especially around AI and ML features. Fixed scope, weekly Friday staging URL, full handover at acceptance.",
    },
    {
        q: "Do you do AI integration work?",
        a: "Yes — model-backed features, retrieval pipelines, data tooling, and the engineering discipline to ship them safely. We integrate models into real products rather than selling demos.",
    },
    {
        q: "East Coast hours?",
        a: "Yes — our HQ is in Macon, Georgia on Eastern Time, so you get full same-day overlap with Pittsburgh and no timezone friction.",
    },
    {
        q: "Do you fly in for kickoffs and reviews?",
        a: "For engagements above roughly 25,000 dollars, yes — typically a single working afternoon in Oakland, Bakery Square, or the Strip District. Atlanta to Pittsburgh is about a 1.5-hour flight.",
    },
    {
        q: "Are you a local Pittsburgh office?",
        a: "No — we are a Macon, Georgia firm working remote-first across the United States, with travel to Pittsburgh for major-build kickoffs and on-site internal pen tests. You get senior, founder-led engineering without local overhead.",
    },
    {
        q: "What pen testing methodology do you use?",
        a: "MITRE ATT&CK end-to-end. Every finding maps to a technique ID. Internal engagements run modules covering recon, credential spraying, Kerberoasting, ADCS abuse, lateral movement, and command-and-control.",
    },
    {
        q: "What is a typical timeline for a Pittsburgh engagement?",
        a: "A standalone external pen test runs 2–3 weeks including reporting. A research-to-production MVP is usually 6–10 weeks. Larger robotics or health-tech platforms follow separate scoping with weekly milestones.",
    },
];

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://quantlabusa.dev/services" },
        { "@type": "ListItem", position: 3, name: "Software Development Pittsburgh, PA", item: "https://quantlabusa.dev/software-development-pittsburgh-pa" },
    ],
};

export default function PittsburghLandingPage() {
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
                        <li className="text-gray-300">Pittsburgh, PA</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development & Penetration Testing in Pittsburgh, PA
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Pittsburgh reinvented itself around robotics, AI, and health. With Carnegie Mellon at the center and a maturing startup base in Oakland, Bakery Square, and the Strip District, this is a city where research-grade ideas need production-grade software.
                    </p>
                    <ConsultationCTA label="Discuss a Pittsburgh Engagement" city="Pittsburgh, PA" source="city-pittsburgh" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA pairs custom software engineering with hands-on penetration testing rooted in the MITRE ATT&amp;CK framework. We are founder-led, US-based, and security-aware from day one — and we specialize in turning research-grade ideas into production-grade software, which is exactly what Pittsburgh produces.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Pittsburgh organizations choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Pittsburgh&apos;s tech economy grew out of Carnegie Mellon, and it shows. The robotics and autonomy cluster — descended from CMU&apos;s Robotics Institute and the National Robotics Engineering Center — needs fleet monitoring, telemetry ingestion, and operator consoles that wrap hardware in reliable software. The AI and machine-learning base, fed by the same university pipeline, needs research prototypes turned into production features. And the health and life-sciences layer anchored by UPMC, one of the largest health systems in the country, generates demand for patient-facing apps and clinical operations tooling built with serious data discipline.
                        </p>
                        <p>
                            Most generalist agencies cannot credibly speak to penetration testing methodology, and a CMU-adjacent team will spot a weak vendor instantly. We can. Active Directory abuse paths, lateral movement, ADCS certificate abuse, Kerberoasting, web application exploitation — that is in-house capability, not a subcontracted line item. Every line of software we ship is reviewed against the same threat models we use on offensive engagements. For a Pittsburgh robotics startup heading into a funding round, or a health-tech venture preparing for a security review, that combination of build capability and security depth is the entire pitch.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for Pittsburgh clients</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work with Pittsburgh teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Pittsburgh sits in the same time zone as our Macon, Georgia HQ, so you get full Eastern Time overlap and same-business-day responsiveness. Most kickoffs run as a 60–90 minute video session, with an on-site afternoon for engagements above roughly 25,000 dollars — Atlanta to Pittsburgh is about 1.5 hours, and we plan working sessions in Oakland, Bakery Square, or the Strip District as scope warrants. Build cycles run weekly with a Friday staging URL, written notes, and the next week&apos;s plan. Pen tests run from secured remote infrastructure with strict source-IP allowlisting and authenticated VPN tunnels for internal scope. Reports come in two formats: a technical deliverable with reproduction steps for engineers, and a board-readable executive summary with a prioritized remediation roadmap. Custom builds close on fixed-scope, fixed-price proposals, and the handover at acceptance is the code, the database, the hosting accounts, and the architecture documentation in one package.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Full Eastern Time overlap from Georgia HQ — same business day as Pittsburgh",
                            "Robotics, AI, and health-tech specialization",
                            "Research-to-production engineering for university spinouts",
                            "In-house offensive security (AD abuse paths, web app, network)",
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
                        industries={["saas","healthcare","manufacturing","fintech"]}
                        heading="Industries we serve in Pittsburgh"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["saas","build-vs-buy","pentest"]}
                        pinned={["build-vs-buy-software-2026","what-is-penetration-testing","soc2-pentest-prep-guide-2026"]}
                        heading="Reading for Pittsburgh founders"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services & nearby cities</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { href: "/services/ai-integration-services", title: "AI Integration Services", desc: "Model-backed features and data tooling." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, network, and AD engagements." },
                            { href: "/services/web-app-pentest", title: "Web App Pen Test", desc: "OWASP-aligned web app testing." },
                            { href: "/services/mitre-attack-assessment", title: "MITRE ATT&CK Assessment", desc: "Full attack-chain mapping for diligence." },
                            { href: "/services/saas-platform-development", title: "SaaS Platform Development", desc: "Multi-tenant apps for spinouts." },
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "Dashboards and operations tooling." },
                            { href: "/services/api-development", title: "API Development", desc: "Telemetry ingestion and integrations." },
                            { href: "/blog/build-vs-buy-software-2026", title: "Build vs Buy Software 2026", desc: "Three-year TCO decision framework." },
                            { href: "/blog/what-is-penetration-testing", title: "What Is Penetration Testing?", desc: "A founder&apos;s buyer guide." },
                            { href: "/software-development-philadelphia-pa", title: "Philadelphia, PA", desc: "Eds-and-meds and SaaS." },
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
                            Scope a Pittsburgh engagement.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or email <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a> to discuss Pittsburgh engagements.
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
