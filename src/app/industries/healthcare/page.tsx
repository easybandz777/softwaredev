import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Activity, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Custom Healthcare Software Development | QuantLab",
    description:
        "HIPAA-aware healthcare software development — patient portals, provider scheduling, telehealth back-ends, billing integrations. Secure by default. MITRE ATT&CK ready.",
    alternates: { canonical: "https://quantlabusa.dev/industries/healthcare" },
    openGraph: {
        title: "Custom Healthcare Software — HIPAA-Aware, Secure by Default",
        description:
            "HIPAA-aware patient portals, provider scheduling, telehealth back-ends, and billing — paired with MITRE ATT&CK pentests and AD assessments.",
        url: "https://quantlabusa.dev/industries/healthcare",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Custom Healthcare Software Development | QuantLab",
        description:
            "HIPAA-aware, secure-by-default healthcare builds. Encryption, RBAC, audit logging. Pentest-ready.",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Healthcare Software Development",
    name: "Custom Healthcare Software Development",
    provider: {
        "@type": "Organization",
        name: "QuantLab Software Solutions",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Custom healthcare software development — patient portals, provider scheduling, telehealth back-ends, and billing integrations. HIPAA and HITECH aware, BAA-ready, with encryption at rest and in transit, role-based access, immutable audit logging, and pentesting tied to healthcare threat models.",
    url: "https://quantlabusa.dev/industries/healthcare",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Do you sign BAAs?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, where a development engagement involves access to PHI or production environments that store PHI. We coordinate with your compliance officer and counsel on BAA terms — including downstream BAAs with hosting providers (AWS, Vercel Enterprise, Cloud Run with the BAA program).",
            },
        },
        {
            "@type": "Question",
            name: "Have you shipped a healthcare client yet?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Not yet. We are being explicit about that. What we have is the security and compliance architecture pattern — encryption, RBAC, audit logging, MITRE ATT&CK pentesting — and a methodology that maps directly to HIPAA Security Rule and HITECH. We will not fabricate a case study. Discovery on a new healthcare engagement starts with a compliance gap review.",
            },
        },
        {
            "@type": "Question",
            name: "What does secure-by-default actually mean here?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Encryption at rest with envelope keys backed by KMS. TLS 1.3 in transit. Role-based access on every admin and clinical surface. Immutable audit logging captured at the data-layer level. Session timeouts, MFA, and break-glass workflows. PHI minimization in logs. Threat-modeled before the first line of code is written, then validated with a MITRE ATT&CK-aligned pentest before go-live.",
            },
        },
        {
            "@type": "Question",
            name: "Can you integrate with our EHR (Epic, Cerner, Athena)?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Where FHIR or HL7 APIs exist, yes. Most modern EHRs expose FHIR R4 endpoints we can integrate with for patient demographics, scheduling, and basic clinical data. Legacy HL7 v2 interfaces are also supported via integration engines (Mirth, Rhapsody) we wire into.",
            },
        },
    ],
};

export default function HealthcareIndustryPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="container mx-auto px-6 max-w-4xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-500">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/industries" className="hover:text-sky-400 transition-colors">Industries</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">Healthcare</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-400 mb-6">
                        <Activity className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Healthcare Software — HIPAA-Aware, Secure by Default
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Patient portals, provider scheduling, telehealth back-ends, and billing integrations — architected for HIPAA, HITECH, and BAA obligations from the first commit. Paired with MITRE ATT&amp;CK-aligned pentesting tied to healthcare threat models.
                    </p>
                    <ConsultationCTA label="Scope a Healthcare Build" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">PHI is the asset. Treat it accordingly.</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            HIPAA Security Rule, HIPAA Privacy Rule, HITECH breach notification, state-level privacy statutes (CCPA, CMIA, MHMDA), and BAA chains that follow PHI through every covered entity, business associate, and subcontractor — healthcare software is one of the most regulated environments in tech. The penalty for getting it wrong is not just regulatory: a breach notification at scale ends careers and closes practices.
                        </p>
                        <p>
                            We build with those frameworks in mind from the architecture phase, not as a retrofit. Encryption at rest, encryption in transit, role-based access on every clinical and admin surface, immutable audit logging, PHI minimization in logs and analytics, session timeouts and MFA on every authenticated path, and a documented incident response playbook before go-live.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build for healthcare operators</h2>
                    <ul className="space-y-3">
                        {[
                            "Patient portals — appointment booking, document upload, secure messaging, intake forms",
                            "Provider scheduling — calendar management, recurring slots, telehealth/in-person split, no-show tracking",
                            "Telehealth back-ends — session signaling, recording metadata, billing-grade audit trail (we integrate WebRTC vendors rather than reinventing media)",
                            "Billing and revenue cycle integrations — clearinghouse APIs, eligibility checks, claim status, EOB ingestion",
                            "EHR integration via FHIR R4 — patient demographics, scheduling, clinical data ingest, smart-on-FHIR launches",
                            "Practice operations dashboards — provider utilization, no-show rates, AR aging, payor mix",
                            "Custom intake and questionnaire flows with conditional logic and PDF generation",
                            "Compliance-aware document workflows with retention policies and audit trails",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Secure-by-default architecture, not bolted-on compliance</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The security controls live in the data layer, not in middleware that can be skipped. Every row touching PHI is encrypted with envelope keys backed by AWS KMS or GCP Cloud KMS. Access is mediated by row-level permissions tied to provider, patient, and organizational scope. Every read and write to a PHI table writes an immutable audit log entry — user, timestamp, action, entity, before/after — to a separate append-only store.
                        </p>
                        <p>
                            Authentication uses passwordless or MFA-required flows. Sessions time out aggressively on clinical surfaces. PHI is scrubbed from log files and error reporting (Sentry/Datadog) before transmission. Break-glass access — for emergencies — is logged with a justification field and notifies the compliance officer.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pentesting tied to healthcare threat models</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Healthcare is the top target for ransomware affiliates — Conti, BlackCat, LockBit successors, and the operators that picked up after the major takedowns. Our <Link href="/services/mitre-attack-assessment" className="text-teal-400 hover:underline">MITRE ATT&amp;CK assessments</Link> simulate those groups' documented TTPs against your environment, then deliver an ATT&amp;CK heatmap of which techniques succeed, which get detected, and which get blocked.
                        </p>
                        <p>
                            Standard <Link href="/services/penetration-testing" className="text-teal-400 hover:underline">penetration testing</Link> covers the rest — external perimeter, web application, and API surface — with reporting formatted to satisfy HIPAA risk analysis (45 CFR § 164.308(a)(1)(ii)(A)) and cyber-insurance carrier requirements. For practices running their own Active Directory, our <Link href="/services/active-directory-pentest" className="text-teal-400 hover:underline">Active Directory pentest</Link> service walks the full chain from a standard workstation to Domain Admin, with every step mapped to ATT&amp;CK.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">A note on case studies</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QuantLab USA does not yet have a published healthcare case study. We are saying that plainly. What we have is the security and compliance architecture pattern that other regulated industries — financial services, towing/repossession with auditable chain-of-custody, contractor platforms with bookkeeping parity — already run on in production. We will not fabricate a healthcare client to fill a page.
                        </p>
                        <p>
                            For a discovery engagement, we start with a compliance gap review — your HIPAA risk analysis, your current technical safeguards, your BAA chain — and produce a phased build plan with explicit architectural decisions tied to specific Security Rule requirements. You come out with a wireframed UI, a data model with PHI boundaries marked, and a phased estimate — useful even if you take it to another developer.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "Do you sign BAAs?",
                                a: "Yes, where a development engagement involves access to PHI or production environments that store PHI. We coordinate with your compliance officer and counsel on BAA terms — including downstream BAAs with hosting providers (AWS, Vercel Enterprise, Cloud Run with the BAA program).",
                            },
                            {
                                q: "Have you shipped a healthcare client yet?",
                                a: "Not yet. We are being explicit about that. What we have is the security and compliance architecture pattern — encryption, RBAC, audit logging, MITRE ATT&CK pentesting — and a methodology that maps directly to HIPAA Security Rule and HITECH. We will not fabricate a case study. Discovery on a new healthcare engagement starts with a compliance gap review.",
                            },
                            {
                                q: "What does secure-by-default actually mean here?",
                                a: "Encryption at rest with envelope keys backed by KMS. TLS 1.3 in transit. Role-based access on every admin and clinical surface. Immutable audit logging captured at the data-layer level. Session timeouts, MFA, and break-glass workflows. PHI minimization in logs. Threat-modeled before the first line of code is written, then validated with a MITRE ATT&CK-aligned pentest before go-live.",
                            },
                            {
                                q: "Can you integrate with our EHR (Epic, Cerner, Athena)?",
                                a: "Where FHIR or HL7 APIs exist, yes. Most modern EHRs expose FHIR R4 endpoints we can integrate with for patient demographics, scheduling, and basic clinical data. Legacy HL7 v2 interfaces are also supported via integration engines (Mirth, Rhapsody) we wire into.",
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { slug: "penetration-testing", title: "Penetration Testing", desc: "HIPAA risk-analysis-grade pentest reports for covered entities and BAs." },
                            { slug: "mitre-attack-assessment", title: "MITRE ATT&CK Assessment", desc: "Ransomware-affiliate threat-group simulations against your environment." },
                            { slug: "active-directory-pentest", title: "Active Directory Pentest", desc: "Internal AD assessments for practices running on-prem domain controllers." },
                            { slug: "custom-business-software", title: "Custom Business Software", desc: "Practice ops, scheduling, billing, and integration layers." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-teal-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-teal-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Start with a compliance gap review.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz at (770) 652-1282 or book a 20-minute discovery call. Founder-led, BAA-ready, no fabricated case studies.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
