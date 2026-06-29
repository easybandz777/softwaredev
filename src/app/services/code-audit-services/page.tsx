import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { FileSearch, Check, ArrowRight, MapPin } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

const cities: { slug: string; city: string; state: string }[] = [
    { slug: "atlanta-ga", city: "Atlanta", state: "GA" },
    { slug: "macon-ga", city: "Macon", state: "GA" },
    { slug: "augusta-ga", city: "Augusta", state: "GA" },
    { slug: "columbus-ga", city: "Columbus", state: "GA" },
    { slug: "savannah-ga", city: "Savannah", state: "GA" },
    { slug: "miami-fl", city: "Miami", state: "FL" },
    { slug: "austin-tx", city: "Austin", state: "TX" },
    { slug: "dallas-tx", city: "Dallas", state: "TX" },
    { slug: "chicago-il", city: "Chicago", state: "IL" },
    { slug: "seattle-wa", city: "Seattle", state: "WA" },
    { slug: "new-york-ny", city: "New York", state: "NY" },
    { slug: "charlotte-nc", city: "Charlotte", state: "NC" },
    { slug: "nashville-tn", city: "Nashville", state: "TN" },
    { slug: "san-francisco-ca", city: "San Francisco", state: "CA" },
];

export const metadata = pageMetadata({
    title: "Code Audit Services | Codebase & Security Review | QUANT LAB USA",
    description:
        "Independent code audit: architecture, security, and quality review with a prioritized tech-debt report and remediation roadmap. Founder-led, US-based engineers.",
    slug: "services/code-audit-services",
    image: "/og-services.png",
    type: "article",
});

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Code Audit",
    name: "Codebase, Architecture, Security, and Quality Audit",
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Independent code audit covering architecture, security, performance, test coverage, dependencies, and maintainability. Deliverables include a severity-ranked findings report, a quantified technical-debt assessment, and a phased remediation roadmap your team or ours can execute.",
    url: "https://quantlabusa.dev/services/code-audit-services",
    offers: {
        "@type": "Offer",
        priceRange: "$5,000-$45,000",
        priceCurrency: "USD",
        description: "Fixed-fee scope per audit",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://quantlabusa.dev/services" },
        { "@type": "ListItem", position: 3, name: "Code Audit Services", item: "https://quantlabusa.dev/services/code-audit-services" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What does a code audit actually look at?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Architecture and module boundaries, security posture, data model integrity, test coverage and quality, dependency health and known CVEs, performance hot spots, error handling, secrets management, build and deployment, and overall maintainability. We read the code, run the tooling, and interview the team that built it.",
            },
        },
        {
            "@type": "Question",
            name: "How is this different from a penetration test?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A penetration test attacks the running application from the outside to find exploitable holes. A code audit reads the source from the inside to assess architecture, quality, security patterns, and technical debt. They are complementary — a pentest tells you what an attacker can reach today, an audit tells you why and how expensive it is to fix.",
            },
        },
        {
            "@type": "Question",
            name: "What do I get at the end?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A written report with an executive summary for non-engineers, a severity-ranked list of findings with file-level references and concrete fixes, a quantified technical-debt assessment, and a phased remediation roadmap with effort estimates. We also walk your team through it live so nothing gets lost in a PDF.",
            },
        },
        {
            "@type": "Question",
            name: "Will you also fix what you find?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We can. The audit is independent and stands on its own, but the remediation roadmap is scoped so we — or your own engineers — can execute it. Many clients have us handle the highest-severity items and a few representative debt fixes, then hand the rest to their team with the roadmap as the playbook.",
            },
        },
        {
            "@type": "Question",
            name: "Is this useful before an acquisition or investment?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. A code audit gives a buyer or investor an objective read on what they are actually acquiring — the architecture, the debt, the security exposure, and the cost to maintain it. If that is the goal, our technical due diligence service is the right framing; the underlying review is the same rigor.",
            },
        },
    ],
};

export default function CodeAuditServicesPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="container mx-auto px-6 max-w-4xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/services" className="hover:text-sky-400 transition-colors">Services</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">Code Audit Services</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-400 mb-6">
                        <FileSearch className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        An Independent Code Audit That Tells You What You Actually Own
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        A full review of your codebase — architecture, security, quality, and technical debt — delivered as a severity-ranked findings report and a phased remediation roadmap your team can execute. No vague grades, just specifics.
                    </p>
                    <ConsultationCTA label="Scope a Code Audit" service="Code Audit" source="services-code-audit" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When you cannot see inside your own software</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Maybe an outside agency built it and you have no idea what is under the hood. Maybe the original engineers left and the codebase is a black box nobody trusts. Maybe every new feature takes three times as long as it should and you cannot tell whether that is the team or the code. Maybe you are about to buy a company and the only evidence you have about its technology is the founder's word. In every case the problem is the same: decisions are being made about software that nobody has objectively examined.
                        </p>
                        <p>
                            A code audit replaces opinion with evidence. We read the source, run the analysis tooling, trace the data model, and interview the people who built it — then write down exactly what is there, what is risky, what it will cost to fix, and in what order. You come out knowing whether to invest, refactor, rebuild, or walk away.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we review</h2>
                    <ul className="space-y-3">
                        {[
                            "Architecture — module boundaries, coupling, separation of concerns, and whether the structure can support the roadmap",
                            "Security — authentication, authorization, input validation, secrets management, and common vulnerability classes in the source",
                            "Data model — schema integrity, migrations, indexing, and consistency guarantees",
                            "Code quality — readability, duplication, complexity hot spots, and adherence to conventions",
                            "Test coverage — how much is tested, how meaningfully, and where the gaps put you at risk",
                            "Dependencies — outdated packages, known CVEs, abandoned libraries, and license exposure",
                            "Performance — obvious bottlenecks, N+1 queries, and resource-handling problems visible in the code",
                            "Error handling and observability — logging, monitoring readiness, and failure modes",
                            "Build, CI/CD, and deployment — reproducibility, environment handling, and release risk",
                            "Maintainability and bus factor — documentation, onboarding cost, and concentration of knowledge",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Our methodology</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            An audit is only useful if the findings are specific and actionable. We combine automated analysis — static analysis, dependency scanning, complexity and coverage metrics — with manual reading by engineers who build production software, because tooling flags symptoms while a human explains causes. Every finding is tied to a file and a line, rated by severity and effort, and paired with a concrete fix, not a generic recommendation.
                        </p>
                        <p>
                            Scoping call → repository and access setup → automated analysis and manual review → team interviews → draft report and severity calibration → final report and live walkthrough (1 to 4 weeks typical). You own the report and the roadmap, and you decide who executes it.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tools &amp; methods</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            "Static analysis",
                            "Dependency / CVE scanning",
                            "Complexity metrics",
                            "Coverage analysis",
                            "Manual code review",
                            "Architecture mapping",
                            "Threat modeling",
                            "Severity ranking",
                            "Remediation roadmap",
                        ].map((tool) => (
                            <div key={tool} className="rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 text-sm text-gray-300">
                                {tool}
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                        We audit any stack we can read — JavaScript and TypeScript, Python, Ruby, Go, PHP, and more. The same rigor underpins our <Link href="/services/penetration-testing" className="text-indigo-400 hover:underline">penetration testing</Link>, <Link href="/services/saas-security-audit" className="text-indigo-400 hover:underline">SaaS security audits</Link>, and <Link href="/services/technical-due-diligence" className="text-indigo-400 hover:underline">technical due diligence</Link>.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Where a code audit pays off</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The highest-leverage time for an audit is right before a big decision. Before an acquisition or raise, it backs <Link href="/services/technical-due-diligence" className="text-indigo-400 hover:underline">technical due diligence</Link> with evidence instead of assurances. Before a rebuild, it tells you whether the existing code is salvageable or whether <Link href="/services/legacy-system-modernization" className="text-indigo-400 hover:underline">legacy modernization</Link> is the honest path. Before scaling a team onto an unfamiliar codebase, it maps the risks so onboarding does not become archaeology.
                        </p>
                        <p>
                            When security is the primary concern, the audit pairs naturally with a <Link href="/services/penetration-testing" className="text-indigo-400 hover:underline">penetration test</Link>: the audit explains the weaknesses in the source, the pentest proves which ones are reachable from outside. Together they give a complete picture from both ends.
                        </p>
                        <p>
                            Code audits served from <Link href="/software-development-macon-ga" className="text-indigo-400 hover:underline">Macon, GA</Link>, with clients across <Link href="/software-development-atlanta-ga" className="text-indigo-400 hover:underline">Atlanta</Link>, <Link href="/software-development-new-york-ny" className="text-indigo-400 hover:underline">New York</Link>, <Link href="/software-development-san-francisco-ca" className="text-indigo-400 hover:underline">San Francisco</Link>, and the rest of the US.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pricing</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Fixed-fee per audit, scoped to codebase size and depth. Typical ranges:
                        </p>
                        <ul className="space-y-2 list-disc list-inside">
                            <li>Focused review of a single service or module: $5k – $12k</li>
                            <li>Full audit of a small-to-mid product codebase: $12k – $28k</li>
                            <li>Comprehensive audit of a large or multi-service system: $25k – $45k</li>
                            <li>Pre-acquisition / due-diligence audit with investor-ready report: $15k – $40k</li>
                            <li>Rapid health-check sprint with prioritized top findings: $3,500 flat</li>
                        </ul>
                        <p>
                            Every audit includes the written report and a live walkthrough. Remediation work, if you want us to execute it, is scoped separately from the roadmap.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What you get</h2>
                    <ul className="space-y-3">
                        {[
                            "Executive summary written for non-engineers — the state of the codebase in plain language",
                            "Severity-ranked findings with file-level references and a concrete fix for each",
                            "Quantified technical-debt assessment with effort estimates",
                            "Phased remediation roadmap ordered by risk and return",
                            "Architecture and data-model diagrams reconstructed from the actual code",
                            "Dependency and CVE report with upgrade guidance",
                            "Live walkthrough with your team so the findings translate into action",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "What does a code audit actually look at?",
                                a: "Architecture and module boundaries, security posture, data model integrity, test coverage and quality, dependency health and known CVEs, performance hot spots, error handling, secrets management, build and deployment, and overall maintainability. We read the code, run the tooling, and interview the team that built it.",
                            },
                            {
                                q: "How is this different from a penetration test?",
                                a: "A penetration test attacks the running application from the outside to find exploitable holes. A code audit reads the source from the inside to assess architecture, quality, security patterns, and technical debt. They are complementary — a pentest tells you what an attacker can reach today, an audit tells you why and how expensive it is to fix.",
                            },
                            {
                                q: "What do I get at the end?",
                                a: "A written report with an executive summary for non-engineers, a severity-ranked list of findings with file-level references and concrete fixes, a quantified technical-debt assessment, and a phased remediation roadmap with effort estimates. We also walk your team through it live so nothing gets lost in a PDF.",
                            },
                            {
                                q: "Will you also fix what you find?",
                                a: "We can. The audit is independent and stands on its own, but the remediation roadmap is scoped so we — or your own engineers — can execute it. Many clients have us handle the highest-severity items and a few representative debt fixes, then hand the rest to their team with the roadmap as the playbook.",
                            },
                            {
                                q: "Is this useful before an acquisition or investment?",
                                a: "Yes. A code audit gives a buyer or investor an objective read on what they are actually acquiring — the architecture, the debt, the security exposure, and the cost to maintain it. If that is the goal, our technical due diligence service is the right framing; the underlying review is the same rigor.",
                            },
                        ].map((item) => (
                            <div key={item.q} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["pentest", "compliance", "build-vs-buy"]}
                        heading="Audit & quality reading"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { slug: "technical-due-diligence", title: "Technical Due Diligence", desc: "The same audit, framed for an acquisition or raise." },
                            { slug: "penetration-testing", title: "Penetration Testing", desc: "Prove which weaknesses are exploitable from outside." },
                            { slug: "legacy-system-modernization", title: "Legacy System Modernization", desc: "When the verdict is rebuild, not refactor." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-indigo-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-6 leading-relaxed">
                        New to the terminology? The <Link href="/glossary" className="text-indigo-400 hover:underline">glossary</Link> defines the concepts, and the <Link href="/blog" className="text-indigo-400 hover:underline">blog</Link> goes deeper on technical risk. To scope a code audit, <Link href="/contact" className="text-indigo-400 hover:underline">contact us</Link> directly.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <MapPin className="w-6 h-6 text-indigo-400" />
                        <h2 className="text-2xl md:text-3xl font-bold text-white">Code Audits — Where We Serve</h2>
                    </div>
                    <p className="text-gray-400 leading-relaxed mb-6 max-w-3xl">
                        Georgia-based engineering team, working with clients across 14 US metros. Code review and reporting run remotely; in-person readouts available in Atlanta and the Southeast.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {cities.map((c) => (
                            <Link
                                key={c.slug}
                                href={`/software-development-${c.slug}`}
                                className="group flex items-center justify-between rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 transition-all hover:border-indigo-400/30 hover:bg-[#0d1526]"
                            >
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                                        {c.city}, {c.state}
                                    </span>
                                </div>
                                <ArrowRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all" />
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Find out exactly what is in your codebase.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz directly at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or book a 20-minute scope call. Founder-led from first read to the live walkthrough.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" service="Code Audit" source="services-code-audit" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
