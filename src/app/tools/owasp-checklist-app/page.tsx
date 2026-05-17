import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { ShieldCheck, ArrowRight, ListChecks, Save, Printer } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";
import { OwaspChecklistApp } from "./OwaspChecklistApp";
import { OWASP_ASVS, countItems } from "@/lib/tools/owasp-asvs";

const totals = countItems();

export const metadata: Metadata = pageMetadata({
    title: "OWASP ASVS Checklist App (Free Web Tool) | QUANT LAB USA",
    description: `Interactive OWASP ASVS Level 1+2 web app security checklist — ${totals.total} controls across 13 categories. Progress saved locally, printable PDF, 100% free.`,
    slug: "/tools/owasp-checklist-app",
    keywords: [
        "owasp asvs checklist",
        "asvs level 1",
        "asvs level 2",
        "web app security checklist",
        "appsec checklist",
        "secure coding checklist",
        "owasp checklist tool",
    ],
});

const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "OWASP ASVS Checklist App",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    url: "https://quantlabusa.dev/tools/owasp-checklist-app",
    description: `Interactive OWASP ASVS L1+L2 checklist with ${totals.total} security controls across ${OWASP_ASVS.length} categories. Progress and notes persist in local storage. Printable for audits.`,
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is OWASP ASVS?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "ASVS stands for Application Security Verification Standard. It is OWASP's canonical list of security requirements for web applications — what a developer should build and what a tester should verify. Level 1 is the bare minimum every public-facing app should meet. Level 2 is what apps handling personal data, payments, or B2B contracts should target. Level 3 is reserved for high-assurance systems like government, finance, or healthcare.",
            },
        },
        {
            "@type": "Question",
            name: "How do I use this checklist for a real audit?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Walk it top to bottom with the engineer who owns each area. For every item, decide: implemented, partially implemented, not applicable, or gap. The notes field is where you record the evidence — link to the code, the config, the architecture decision record. At the end you have a defensible artifact for SOC 2, ISO 27001, or a board security review.",
            },
        },
        {
            "@type": "Question",
            name: "Is my progress sent anywhere?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No. Every checkbox, every note, every state change is written to your browser's local storage only. We never send your checklist data anywhere. Clearing your browser data will wipe it — so before doing that, print or save it to PDF.",
            },
        },
        {
            "@type": "Question",
            name: "Why aren't all 200+ ASVS items listed?",
            acceptedAnswer: {
                "@type": "Answer",
                text: `We selected ${totals.total} of the highest-impact L1 and L2 requirements — the ones that show up in real-world penetration tests and compliance audits. The full ASVS document has more granular requirements, including L3 controls for high-assurance systems. For a complete audit, run this checklist first to clean up the obvious gaps, then engage a tester for the residual edge cases.`,
            },
        },
        {
            "@type": "Question",
            name: "How is this different from the OWASP Top 10?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The Top 10 is a risk awareness document — it tells you what categories of vulnerabilities to worry about. ASVS is a verification standard — it tells you the specific controls to implement and verify. Think of Top 10 as the syllabus and ASVS as the homework. Both are by OWASP; ASVS is what auditors and pentesters actually work from.",
            },
        },
    ],
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Tools", item: "https://quantlabusa.dev/tools" },
        {
            "@type": "ListItem",
            position: 3,
            name: "OWASP ASVS Checklist App",
            item: "https://quantlabusa.dev/tools/owasp-checklist-app",
        },
    ],
};

export default function OwaspChecklistAppPage() {
    return (
        <>
            <style>{`
                @media print {
                    @page { size: letter; margin: 0.5in; }
                    body { background: white !important; color: black !important; }
                    .print\\:hidden { display: none !important; }
                    .print\\:block { display: block !important; }
                    .print\\:text-black { color: black !important; }
                    .print\\:bg-white { background: white !important; }
                    .print\\:border-black { border-color: black !important; }
                    .print\\:rounded-none { border-radius: 0 !important; }
                    main { padding: 0 !important; background: white !important; }
                }
            `}</style>
            <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24 print:pt-0 print:pb-0 print:bg-white">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

                <div className="container mx-auto px-6 max-w-6xl">
                    <nav aria-label="Breadcrumb" className="mb-8 print:hidden">
                        <ol className="flex items-center gap-2 text-xs text-gray-400">
                            <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                            <li aria-hidden="true" className="text-gray-700">›</li>
                            <li><Link href="/tools" className="hover:text-sky-400 transition-colors">Tools</Link></li>
                            <li aria-hidden="true" className="text-gray-700">›</li>
                            <li className="text-gray-300">OWASP ASVS Checklist App</li>
                        </ol>
                    </nav>

                    <AnimatedSection className="mb-12 print:hidden">
                        <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-400 mb-6">
                            <ShieldCheck className="w-6 h-6 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                            OWASP ASVS Checklist App
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-3xl">
                            The OWASP Application Security Verification Standard, Level 1 and 2, as a
                            free interactive web app. {totals.total} controls across{" "}
                            {OWASP_ASVS.length} categories. Check items off as you verify them in
                            your app — progress and notes persist in your browser. Print or save as
                            PDF for audits.
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                            <div className="flex items-center gap-2">
                                <ListChecks className="w-4 h-4 text-emerald-400" />
                                <span>{totals.total} ASVS L1/L2 controls</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Save className="w-4 h-4 text-sky-400" />
                                <span>Progress + notes auto-saved locally</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Printer className="w-4 h-4 text-amber-400" />
                                <span>Print / Save PDF for audits</span>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <OwaspChecklistApp />
                    </AnimatedSection>

                    <AnimatedSection className="mb-16 print:hidden">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            How to actually use this checklist
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-5">
                            <p>
                                The single biggest mistake teams make with ASVS is treating it as a
                                document to read. ASVS is a workflow. You walk it row by row with
                                the person who owns the corresponding code, and for every line you
                                decide one of three states: <strong className="text-white">verified</strong>,{" "}
                                <strong className="text-white">gap with owner and date</strong>, or{" "}
                                <strong className="text-white">not applicable with rationale</strong>. A line
                                ignored is a line that will surface in your next penetration test.
                            </p>
                            <p>
                                We use this exact tool internally when scoping our{" "}
                                <Link href="/services/penetration-testing" className="text-sky-400 underline-offset-2 hover:underline">
                                    penetration testing engagements
                                </Link>{" "}
                                — it tells the client what we&apos;re going to verify before we
                                start. About 60% of teams that walk this checklist before their
                                first pentest find at least a dozen gaps they can fix internally —
                                which means the pentest finds harder, more interesting issues and
                                they walk away with a better report.
                            </p>
                            <p>
                                <strong className="text-white">Level 1</strong> covers the bare minimum every public-
                                facing application should meet — no SQL injection, no XSS, no missing
                                authentication. If you fail L1 you are below the bar set by
                                reasonable industry practice, and that&apos;s a problem in a
                                negligence context. L1 controls are mostly verifiable by automated
                                scanners and a careful code review.
                            </p>
                            <p>
                                <strong className="text-white">Level 2</strong> is what most production apps handling
                                personal data, payments, or contracts should target. It assumes a
                                determined attacker with limited resources — the kind of threat
                                model a SOC 2 Type II audit, ISO 27001 certification, or HIPAA
                                covered-entity contract implies. L2 adds requirements like MFA on
                                admin interfaces, structured logging for all access decisions, and
                                proper secrets management.
                            </p>
                            <p>
                                <strong className="text-white">Level 3</strong> (not in this tool) is for high-
                                assurance applications — defense, critical infrastructure, primary
                                healthcare records. If your app needs L3, you&apos;re past the point
                                where a self-service checklist suffices and into the territory of
                                formal threat modeling and code review.
                            </p>
                            <p>
                                For organizations doing this for the first time, we recommend
                                splitting the work along the natural seams. Authentication and
                                session belong to whoever owns identity. Validation, output
                                encoding, and crypto belong to whoever owns the API and shared
                                libraries. Communications and configuration belong to whoever owns
                                infrastructure. Business logic and access control should be walked
                                jointly because that&apos;s where most real-world breaches live.
                            </p>
                            <p>
                                The Notes field is more valuable than the checkbox. When you tick
                                an item, the note should answer two questions: <em>where is the
                                evidence?</em> (file path, ADR link, framework version) and{" "}
                                <em>who confirmed it?</em> (person and date). An auditor reading your
                                printed checklist a year from now needs to be able to verify any
                                claim without re-talking to your engineers.
                            </p>
                            <p>
                                When you&apos;re done, hit <strong className="text-white">Print / Save PDF</strong>.
                                The output is print-optimized — clean black-and-white, no UI chrome,
                                with notes inline. Drop it into your compliance binder, attach it to
                                your annual penetration test scope, or send it to the prospect
                                asking for a security questionnaire.
                            </p>
                            <p>
                                Want help interpreting the gaps? Our{" "}
                                <Link href="/services/cybersecurity" className="text-sky-400 underline-offset-2 hover:underline">
                                    cybersecurity services
                                </Link>{" "}
                                and{" "}
                                <Link href="/services/penetration-testing" className="text-sky-400 underline-offset-2 hover:underline">
                                    pentest team
                                </Link>{" "}
                                walk customers through this exact workflow. Or estimate scope with
                                the{" "}
                                <Link href="/calculators/pentest-cost" className="text-sky-400 underline-offset-2 hover:underline">
                                    pentest cost calculator
                                </Link>
                                .
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16 print:hidden">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                        <div className="space-y-4">
                            {faqSchema.mainEntity.map((item) => (
                                <details
                                    key={item.name}
                                    className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-6 open:bg-[#0d1526]"
                                >
                                    <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-semibold text-white">
                                        <span>{item.name}</span>
                                        <ArrowRight className="w-4 h-4 text-sky-400 transition-transform group-open:rotate-90" />
                                    </summary>
                                    <p className="text-gray-400 mt-3 leading-relaxed text-sm">{item.acceptedAnswer.text}</p>
                                </details>
                            ))}
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16 print:hidden">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Keep going</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {[
                                { label: "Penetration testing services", href: "/services/penetration-testing" },
                                { label: "Cybersecurity services", href: "/services/cybersecurity" },
                                { label: "Pentest cost calculator", href: "/calculators/pentest-cost" },
                                { label: "All free tools", href: "/tools" },
                                { label: "Stripe webhook tester", href: "/tools/stripe-webhook-tester" },
                                { label: "Glossary", href: "/glossary" },
                                { label: "Security certifications", href: "/certifications-credentials" },
                                { label: "Talk to QuantLab", href: "/contact" },
                            ].map((l) => (
                                <Link
                                    key={l.href}
                                    href={l.href}
                                    className="rounded-xl border border-white/5 bg-[#0d1526]/60 hover:border-sky-400/30 hover:bg-[#0d1526] transition-colors p-4 text-sm text-gray-300 hover:text-white"
                                >
                                    {l.label} <ArrowRight className="inline w-3 h-3 ml-1 text-sky-400" />
                                </Link>
                            ))}
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16 print:hidden">
                        <RelatedPosts
                            topics={["pentest"]}
                            heading="Companion reading for the OWASP checklist"
                            pinned={["what-is-penetration-testing", "soc2-pentest-prep-guide-2026", "red-team-vs-pen-test-vs-audit"]}
                        />
                    </AnimatedSection>

                    <AnimatedSection className="print:hidden">
                        <div className="rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 to-emerald-500/5 p-8 md:p-12 text-center">
                            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                                Need a pentest scoped from this checklist?
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl mx-auto">
                                Send us the printed checklist with your gaps highlighted. We&apos;ll
                                turn it into a focused testing scope, an estimate, and a remediation
                                plan you can take to the board.
                            </p>
                            <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
                                Or reach us directly:{" "}
                                <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline">(770) 652-1282</a>{" "}
                                · <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline">beltz@quantlabusa.dev</a>
                            </p>
                            <ConsultationCTA label="Scope a 20-min Security Call" source="owasp-checklist" />
                        </div>
                    </AnimatedSection>
                </div>
            </main>
        </>
    );
}
