import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { RelatedIndustries } from "@/components/RelatedIndustries";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "San Jose Software Development & Pen Testing | QUANT LAB USA",
    description:
        "San Jose and Silicon Valley custom SaaS, hardware-adjacent software, and penetration testing. Senior, founder-led engineering. Call (770) 652-1282.",
    slug: "software-development-san-jose-ca",
    image: "/og-image.png",
    type: "article",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-san-jose-ca#localbusiness",
    name: "QUANT LAB USA — San Jose Coverage",
    url: "https://quantlabusa.dev/software-development-san-jose-ca",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "San Jose", containedInPlace: { "@type": "State", name: "California" } },
        { "@type": "City", name: "Santa Clara" },
        { "@type": "City", name: "Sunnyvale" },
        { "@type": "City", name: "Mountain View" },
        { "@type": "City", name: "Cupertino" },
        { "@type": "City", name: "Milpitas" },
        { "@type": "City", name: "Palo Alto" },
        { "@type": "AdministrativeArea", name: "Santa Clara County" },
        { "@type": "AdministrativeArea", name: "Silicon Valley" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 37.3382, longitude: -121.8863 },
    address: { "@type": "PostalAddress", addressLocality: "San Jose", addressRegion: "CA", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Penetration Testing",
    name: "Custom Software Development & Penetration Testing in San Jose, CA",
    provider: { "@id": "https://quantlabusa.dev/#organization" },
    areaServed: { "@type": "City", name: "San Jose", containedInPlace: { "@type": "State", name: "California" } },
    description:
        "Silicon Valley-standard SaaS, hardware-adjacent software, internal platforms, and MITRE-aligned penetration testing for San Jose and South Bay companies.",
    url: "https://quantlabusa.dev/software-development-san-jose-ca",
};

const services = [
    {
        title: "SaaS Products on a Valley-Standard Stack",
        desc: "Next.js, TypeScript, Node, PostgreSQL, Docker — multi-tenant architecture done right. Typical: $30k–$120k.",
    },
    {
        title: "Hardware-Adjacent Software",
        desc: "Device dashboards, provisioning tooling, telemetry ingestion, and admin portals for hardware and IoT teams. Typical: $25k–$100k.",
    },
    {
        title: "Developer Tooling & Internal Platforms",
        desc: "Internal CI tooling, observability dashboards, and platform-engineering work for fast-moving teams. Typical: $25k–$90k.",
    },
    {
        title: "Penetration Testing (Web, Network, AD)",
        desc: "Full engagements with formal MITRE-ATT&CK-aligned reports for SOC 2 and customer security reviews. Typical: $12k–$40k.",
    },
    {
        title: "AI-Backed Product Engineering",
        desc: "Production OpenAI and Anthropic integrations with cost monitoring, evals, and rate-limit handling. Typical: $25k–$120k.",
    },
    {
        title: "Investor Due-Diligence Packages",
        desc: "Architecture diagrams, SBOM, pen test, and threat model ready for a Valley technical DD process. Typical: $10k–$25k.",
    },
];

const faqs = [
    {
        q: "Can you handle a technical bake-off against in-house engineers?",
        a: "Yes — code samples, architecture walkthroughs, and pair-programming sessions are available on request. Valley buyers validate vendors against their own bar, and we engineer accordingly.",
    },
    {
        q: "Do you build hardware-adjacent software?",
        a: "Yes — device dashboards, provisioning and fleet tooling, telemetry ingestion, and admin portals for hardware and IoT teams are routine. We keep the software layer clean even when the device layer is messy.",
    },
    {
        q: "What is the time-zone overlap with Pacific Time?",
        a: "We work from Eastern HQ, three hours ahead of Pacific. Our late morning is your early morning and our late afternoon is your mid-morning — we run standups at 11am ET / 8am PT routinely, leaving a clean overlap window for reviews.",
    },
    {
        q: "Do you support OpenAI, Anthropic, and other AI product builds?",
        a: "Yes — production OpenAI, Anthropic, and inference-API-backed builds are routine. We handle rate limits, prompt versioning, cost monitoring, fallback chains, and evals as standard.",
    },
    {
        q: "Do you ship code that survives a Valley-grade review?",
        a: "Yes — strict TypeScript, ESLint, CI on every deploy, and architecture docs co-located with the code. Every line is reviewed before merge, and the README holds up to a technical-due-diligence call.",
    },
    {
        q: "Are you familiar with California-specific compliance (CCPA, CPRA)?",
        a: "Yes — CCPA, CPRA, and the broader California consumer-data framework are standard considerations in our South Bay builds. We wire consent surfaces and data-rights flows in at build time.",
    },
    {
        q: "Can you fly in for kickoffs across the South Bay?",
        a: "For engagements above roughly $25k, yes — SJC and SFO are direct flights from Atlanta. We plan on-site afternoons in Santa Clara, Sunnyvale, Mountain View, Cupertino, or Palo Alto as scope warrants.",
    },
    {
        q: "What is a typical timeline for a San Jose engagement?",
        a: "A standalone external pen test runs 2–3 weeks including reporting. A full internal-plus-external with AD scope runs 4–6 weeks. Custom software follows separate fixed-scope scoping.",
    },
];

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://quantlabusa.dev/services" },
        { "@type": "ListItem", position: 3, name: "Software Development San Jose, CA", item: "https://quantlabusa.dev/software-development-san-jose-ca" },
    ],
};

export default function SanJoseLandingPage() {
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
                        <li className="text-gray-300">San Jose, CA</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development & Penetration Testing in San Jose, CA
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        San Jose is the capital of Silicon Valley and one of the most technical buyer markets anywhere. Hardware giants, SaaS companies, and a dense startup layer all expect contract engineering that holds up to their own bar — agency theater dies fast here.
                    </p>
                    <ConsultationCTA label="Scope a San Jose Engagement" city="San Jose, CA" source="city-san-jose" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            What survives in the South Bay is genuine senior engineering, clean architecture, and the ability to ship. That is the entire pitch behind QUANT LAB USA in the Valley — founder-led delivery, a modern stack, security-aware by default, and code that holds up to a Valley-grade review.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why San Jose businesses choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            San Jose and the surrounding South Bay carry a uniquely dense software-buying market. The hardware base — semiconductors, networking, storage, and devices anchored by names like Cisco, Nvidia, and the broader Santa Clara and Sunnyvale corridor — generates demand for device dashboards, provisioning and fleet tooling, telemetry ingestion, and admin portals where the software layer has to stay clean even when the hardware layer is anything but. On top of that sits a massive enterprise-SaaS layer and a constant churn of startups in Sunnyvale, Mountain View, Cupertino, and Palo Alto, all of which need multi-tenant products, internal platforms, and developer tooling built to a high standard.
                        </p>
                        <p>
                            The Valley has two main contractor profiles: top-tier shops at enterprise pricing and a vast freelance market with wildly variable quality. We aim at the gap — senior, founder-led, fixed-scope, modern stack, security-aware by default. No junior layer, no offshore handoff. The engineer on your kickoff is the engineer writing the code. And because security is in-house — Active Directory abuse paths, lateral movement, ADCS abuse, and web app exploitation — every line we ship is reviewed against the same threat models we use on engagements, which matters when a SOC 2 audit or a customer security review is on the calendar.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for San Jose clients</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work remotely with San Jose teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            San Jose sits three hours behind our Eastern HQ — we work your morning. Our late morning is your early morning and our late afternoon is your mid-morning, so there is a clean overlap window for standups and reviews; we run standups at 11am ET / 8am PT routinely. For engagements above roughly $25k we fly into SJC or SFO for an on-site kickoff afternoon — Santa Clara, Sunnyvale, Mountain View, Cupertino, or Palo Alto as scope warrants. Build cycles run weekly with a Friday staging URL, written notes, and the next-week plan. Valley-grade engineering standards are the default: every line of code reviewed before merge, strict TypeScript, ESLint, CI on every deploy, and architecture docs co-located in the repo. For AI-backed builds, we wire in cost monitoring, prompt versioning, evals, and fallback chains. Most San Jose engagements close on fixed-scope, fixed-price proposals with full code, infrastructure, and account handover at acceptance — exactly what a Valley buyer or DD process expects.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "SaaS, hardware-adjacent, and platform engineering — real, in-house",
                            "Code samples and architecture walkthroughs on request",
                            "Pacific morning–early afternoon overlap from Eastern HQ",
                            "MITRE ATT&CK-aligned pen test reports for SOC 2 and DD",
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
                        industries={["saas","fintech","manufacturing","e-commerce"]}
                        heading="Industries we serve in San Jose"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["saas","stack","build-vs-buy"]}
                        pinned={["build-vs-buy-software-2026","soc2-pentest-prep-guide-2026","custom-crm-development-guide"]}
                        heading="Reading for San Jose founders"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services & nearby cities</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { href: "/services/saas-platform-development", title: "SaaS Platform Development", desc: "Multi-tenant products, billing, onboarding." },
                            { href: "/services/api-development", title: "API Development", desc: "Robust, documented, versioned APIs." },
                            { href: "/services/devops-engineering", title: "DevOps Engineering", desc: "CI/CD, observability, platform tooling." },
                            { href: "/services/cloud-infrastructure", title: "Cloud Infrastructure", desc: "AWS, GCP, Docker, IaC." },
                            { href: "/services/ai-integration-services", title: "AI Integration", desc: "OpenAI and Anthropic, wired for production." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, network, and AD engagements." },
                            { href: "/services/web-app-pentest", title: "Web App Pen Test", desc: "OWASP-aligned web app testing." },
                            { href: "/services/active-directory-pentest", title: "Active Directory Pen Test", desc: "Kerberoasting, ADCS, lateral movement." },
                            { href: "/blog/soc2-pentest-prep-guide-2026", title: "SOC 2 Pentest Prep 2026", desc: "Pre-audit testing mapped to CC controls." },
                            { href: "/software-development-san-diego-ca", title: "San Diego, CA", desc: "Biotech, defense, and cyber." },
                            { href: "/software-development-sacramento-ca", title: "Sacramento, CA", desc: "Gov-tech, ag-tech, and health." },
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
                            Scope a San Jose engagement.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or email <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a> to discuss San Jose engagements.
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
