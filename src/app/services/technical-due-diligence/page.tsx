import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { ShieldCheck, Check, ArrowRight, MapPin } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Technical Due Diligence for Investors & Acquirers | QUANT LAB USA",
    description:
        "Independent technical due diligence: code, architecture, and security review before you invest or acquire. Founder-led, plain-English risk reporting, USA. Free intro call.",
    slug: "services/technical-due-diligence",
    image: "/og-services.png",
    type: "article",
});

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Technical Due Diligence",
    name: "Technical Due Diligence for Investors and Acquirers",
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Founder-led technical due diligence for investors, acquirers, and boards. We review the target's codebase, architecture, security posture, and engineering practices, then deliver a plain-English risk report with a severity-ranked findings list and a remediation cost estimate — so the deal decision rests on facts, not a demo.",
    url: "https://quantlabusa.dev/services/technical-due-diligence",
    offers: {
        "@type": "Offer",
        priceRange: "$8,000-$45,000",
        priceCurrency: "USD",
        description: "Fixed-fee scope per engagement",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://quantlabusa.dev/services" },
        { "@type": "ListItem", position: 3, name: "Technical Due Diligence", item: "https://quantlabusa.dev/services/technical-due-diligence" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What does technical due diligence actually cover?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Code quality and maintainability, architecture and scalability, security posture, the state of testing and CI, infrastructure and operational risk, third-party dependencies and licensing, intellectual-property ownership of the code, and the health and key-person risk of the engineering team. The output is a severity-ranked findings list, not a vague thumbs up or down.",
            },
        },
        {
            "@type": "Question",
            name: "How long does a technical due diligence engagement take?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Most engagements run one to three weeks depending on the size of the codebase and the depth required. A focused review for an early-stage seed or Series A target can be completed in about a week; a deeper acquisition diligence on a larger, multi-service system takes two to three.",
            },
        },
        {
            "@type": "Question",
            name: "Will you sign an NDA, and how do you handle confidential code?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We sign your NDA before any access is granted and work under read-only access scoped to the diligence. Code, credentials, and findings are handled confidentially, and access is revoked at the end of the engagement. Discretion is part of the job.",
            },
        },
        {
            "@type": "Question",
            name: "Do you give a go or no-go recommendation, or just a report?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We give you the facts and our honest read, framed for a deal decision rather than a pass or fail grade. The report ranks every finding by severity, estimates what remediation would cost, and flags anything that should change the price or terms. The investment decision is yours; our job is to make sure it is informed.",
            },
        },
        {
            "@type": "Question",
            name: "Can you assess security as part of due diligence?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. A security posture review is part of every diligence — authentication, data handling, dependency vulnerabilities, secrets management, and obvious exposure. For a deeper, hands-on offensive assessment of the target's application, we can scope dedicated penetration testing alongside or after the diligence.",
            },
        },
        {
            "@type": "Question",
            name: "Why use an independent firm instead of our own technical team?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "An outside reviewer has no stake in the deal closing and no internal politics, so the read is candid. We also do this specific work repeatedly, so we know which findings actually threaten a deal versus which are normal startup technical debt. Your team gets a clear, defensible artifact for the investment committee or board.",
            },
        },
    ],
};

export default function TechnicalDueDiligencePage() {
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
                        <li className="text-gray-300">Technical Due Diligence</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-400 mb-6">
                        <ShieldCheck className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Technical Due Diligence Before You Write the Check
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Independent code, architecture, and security review for investors and acquirers — delivered as a plain-English risk report with severity-ranked findings and a remediation estimate, so the deal rests on facts instead of a polished demo.
                    </p>
                    <ConsultationCTA label="Request a Diligence Scope" service="Technical Due Diligence" source="services-tech-dd" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">A demo is not diligence</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Every target looks great in a demo. The product loads, the founder is sharp, the deck says the architecture is modern and scalable. None of that tells you whether the code behind the demo is an asset or a liability. We have seen impressive-looking products built on a copy-pasted prototype with no tests, hard-coded credentials, a single founder who is the only person who understands the system, and a dependency that was abandoned three years ago. That is the kind of thing that turns a clean term sheet into a painful surprise eighteen months later.
                        </p>
                        <p>
                            Technical due diligence is an independent look under the hood before you commit capital. We read the actual code, map the real architecture, probe the security posture, and assess how the engineering team works. Then we tell you, in plain language, what you would be buying — what is solid, what is risky, what it would cost to fix, and what should affect the price or the terms.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we review</h2>
                    <ul className="space-y-3">
                        {[
                            "Code quality and maintainability — structure, readability, consistency, and accumulated technical debt",
                            "Architecture and scalability — whether the system can handle the growth the deal thesis assumes",
                            "Security posture — authentication, data handling, dependency vulnerabilities, secrets, and exposure",
                            "Testing and CI — how much is actually verified automatically versus tested by clicking around",
                            "Infrastructure and operational risk — deployment, monitoring, backups, and single points of failure",
                            "Dependencies and licensing — abandoned packages, security advisories, and license obligations",
                            "Intellectual property — whether the company actually owns the code, including contractor contributions",
                            "Team and key-person risk — bus factor, documentation, and how much lives in one person's head",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Our methodology</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            We start with a scoping call to understand the deal, the thesis, and the depth you need — a quick read for a seed round is different from acquisition diligence on a system you will operate. We agree on a fixed fee and a delivery date up front, sign your NDA, and take scoped read-only access to the codebase and infrastructure.
                        </p>
                        <p>
                            From there we review the code and architecture, interview the engineering lead, and probe the security and operational posture. You receive a written report with an executive summary your investment committee can read in five minutes, a severity-ranked findings list, a remediation cost estimate, and the specific items we think should affect price or terms. We are available to walk your team and the target through it.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Process &amp; timeline</h2>
                    <ul className="space-y-3">
                        {[
                            "Scoping call: deal context, diligence depth, fixed fee and delivery date, NDA signed",
                            "Days 1-2: Access setup, repository and infrastructure walkthrough, engineering lead interview",
                            "Days 3-8: Code, architecture, and security review with findings logged and severity-ranked",
                            "Days 9-12: Report drafting — executive summary, findings, remediation estimate, deal-impact flags",
                            "Delivery: Written report plus a live readout with your team and the target's engineering lead",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we look at</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            "Source repositories",
                            "Architecture diagrams",
                            "CI/CD pipelines",
                            "Dependency manifests",
                            "Cloud infrastructure",
                            "Security configuration",
                            "Test coverage",
                            "IP & contributor history",
                            "Engineering interviews",
                        ].map((tool) => (
                            <div key={tool} className="rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 text-sm text-gray-300">
                                {tool}
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                        Pairs naturally with hands-on <Link href="/services/penetration-testing" className="text-sky-400 hover:underline">penetration testing</Link> when the deal warrants a deeper security read, and with <Link href="/services/legacy-system-modernization" className="text-sky-400 hover:underline">legacy modernization</Link> if the target carries real technical debt. Helpful background: <Link href="/glossary/what-is-technical-debt" className="text-sky-400 hover:underline">what is technical debt</Link>.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why an independent read</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            We are an engineering firm, not a deal advisor, and we have no incentive for your deal to close or fall through. That independence is the value. We also separate signal from noise: a startup with some technical debt and thin test coverage is normal and fixable, while undocumented architecture controlled by a single departing engineer is a real threat to the thesis. Knowing which is which comes from building and inheriting systems for a living, not from a checklist.
                        </p>
                        <p>
                            Because the engagement is founder-led, the person reading the code is the person writing the report and sitting on the readout call — not a junior analyst whose findings get summarized away. You get a candid, defensible artifact you can put in front of an investment committee or a board.
                        </p>
                        <p>
                            Delivered confidentially and remotely to investors and acquirers across the United States from our base in Macon, Georgia.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pricing</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Fixed-fee per engagement. Typical ranges:
                        </p>
                        <ul className="space-y-2 list-disc list-inside">
                            <li>Focused diligence on an early-stage seed or Series A target: $8k – $18k</li>
                            <li>Standard diligence on a growth-stage product with multiple services: $18k – $30k</li>
                            <li>Deep acquisition diligence on a larger, multi-team system: $30k – $45k</li>
                            <li>Add-on hands-on penetration test of the target application: scoped separately</li>
                            <li>Post-deal remediation roadmap and oversight: scoped as a follow-on engagement</li>
                        </ul>
                        <p>
                            Fixed fee and delivery date agreed before access is granted. No hourly meter running during a time-sensitive deal.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What you get</h2>
                    <ul className="space-y-3">
                        {[
                            "A written report with a five-minute executive summary for the investment committee",
                            "A severity-ranked list of every finding, not a vague pass or fail",
                            "A remediation cost estimate for the issues that matter",
                            "Specific flags for anything that should affect price or terms",
                            "A security posture assessment of the target",
                            "An IP and key-person risk read on the code and the team",
                            "A live readout call with your team and the target's engineering lead",
                            "Confidential handling under your NDA, with access revoked at the end",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
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
                                q: "What does technical due diligence actually cover?",
                                a: "Code quality and maintainability, architecture and scalability, security posture, the state of testing and CI, infrastructure and operational risk, third-party dependencies and licensing, intellectual-property ownership of the code, and the health and key-person risk of the engineering team. The output is a severity-ranked findings list, not a vague thumbs up or down.",
                            },
                            {
                                q: "How long does a technical due diligence engagement take?",
                                a: "Most engagements run one to three weeks depending on the size of the codebase and the depth required. A focused review for an early-stage seed or Series A target can be completed in about a week; a deeper acquisition diligence on a larger, multi-service system takes two to three.",
                            },
                            {
                                q: "Will you sign an NDA, and how do you handle confidential code?",
                                a: "Yes. We sign your NDA before any access is granted and work under read-only access scoped to the diligence. Code, credentials, and findings are handled confidentially, and access is revoked at the end of the engagement. Discretion is part of the job.",
                            },
                            {
                                q: "Do you give a go or no-go recommendation, or just a report?",
                                a: "We give you the facts and our honest read, framed for a deal decision rather than a pass or fail grade. The report ranks every finding by severity, estimates what remediation would cost, and flags anything that should change the price or terms. The investment decision is yours; our job is to make sure it is informed.",
                            },
                            {
                                q: "Can you assess security as part of due diligence?",
                                a: "Yes. A security posture review is part of every diligence — authentication, data handling, dependency vulnerabilities, secrets management, and obvious exposure. For a deeper, hands-on offensive assessment of the target's application, we can scope dedicated penetration testing alongside or after the diligence.",
                            },
                            {
                                q: "Why use an independent firm instead of our own technical team?",
                                a: "An outside reviewer has no stake in the deal closing and no internal politics, so the read is candid. We also do this specific work repeatedly, so we know which findings actually threaten a deal versus which are normal startup technical debt. Your team gets a clear, defensible artifact for the investment committee or board.",
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
                        topics={["build-vs-buy", "pentest", "compliance"]}
                        heading="Diligence & risk reading"
                        pinned={["2026-state-of-custom-software-development", "build-vs-buy-software-2026"]}
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { slug: "penetration-testing", title: "Penetration Testing", desc: "Hands-on offensive security testing of the target application." },
                            { slug: "legacy-system-modernization", title: "Legacy System Modernization", desc: "De-risk and replatform a target that carries real technical debt." },
                            { slug: "fractional-cto-services", title: "Fractional CTO Services", desc: "Post-deal technical leadership to execute the remediation roadmap." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
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
                    <p className="text-sm text-gray-400 mt-6 leading-relaxed">
                        Diligence for deals in <Link href="/industries/fintech" className="text-sky-400 hover:underline">fintech</Link>, <Link href="/industries/saas" className="text-sky-400 hover:underline">SaaS</Link>, and <Link href="/industries/healthcare" className="text-sky-400 hover:underline">healthcare</Link>. To scope a review, <Link href="/contact" className="text-sky-400 hover:underline">contact us</Link> directly.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <MapPin className="w-6 h-6 text-sky-400" />
                        <h2 className="text-2xl md:text-3xl font-bold text-white">Technical Due Diligence — Where We Serve</h2>
                    </div>
                    <p className="text-gray-400 leading-relaxed mb-6 max-w-3xl">
                        Georgia-based engineering team serving investors and acquirers nationwide. Diligence runs remotely under NDA with scoped, read-only access; in-person readouts are available in Atlanta and the Southeast.
                    </p>
                    <p className="text-gray-400 leading-relaxed max-w-3xl">
                        Founder-led from scoping call through readout. Browse the full <Link href="/services" className="text-sky-400 hover:underline">services lineup</Link> or read about our <Link href="/services/web-app-pentest" className="text-sky-400 hover:underline">web app penetration testing</Link> for a deeper security read on a target.
                    </p>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Know what you are buying.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz directly at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or book a 20-minute scoping call. We will frame the diligence to your deal and put facts behind the decision before you commit capital.
                        </p>
                        <ConsultationCTA label="Book a Scoping Call" service="Technical Due Diligence" source="services-tech-dd" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
