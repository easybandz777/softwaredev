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

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Custom Healthcare Software Development",
    url: "https://quantlabusa.dev/industries/healthcare",
    description:
        "Custom healthcare software with HIPAA, HITECH, and BAA-aware architecture. Patient portals, provider scheduling, telehealth back-ends, billing integrations, and EHR sync via FHIR.",
    isPartOf: {
        "@type": "WebSite",
        url: "https://quantlabusa.dev",
        name: "QuantLab USA",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Industries", item: "https://quantlabusa.dev/industries" },
        { "@type": "ListItem", position: 3, name: "Healthcare", item: "https://quantlabusa.dev/industries/healthcare" },
    ],
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
        {
            "@type": "Question",
            name: "Why is healthcare treated as a special case for software development?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Three structural reasons. First, the data is uniquely sensitive — PHI is a high-value target for ransomware affiliates, and breach notification costs at scale can end a practice. Second, the integration surface is unusually rigid: EHRs like Epic, Cerner, and Athena have proprietary access models, FHIR coverage is uneven, and legacy HL7 v2 still runs much of the country's clinical messaging. Third, the regulatory chain is long: HIPAA, HITECH, state privacy statutes (CCPA, CMIA, MHMDA), the 21st Century Cures Act on information blocking, and 42 CFR Part 2 for substance-use records each impose specific architectural constraints.",
            },
        },
        {
            "@type": "Question",
            name: "What does a $25,000 healthcare build look like?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Around $25,000 covers a tightly scoped tool — a patient intake portal with secure form capture and encrypted document storage, or a telehealth scheduling widget tied to an existing calendar with HIPAA-compliant notifications, or a back-office reconciliation tool sitting alongside the EHR. Discovery is paid separately so the architecture is documented before we commit to the build.",
            },
        },
        {
            "@type": "Question",
            name: "How do you support our HIPAA Security Rule risk analysis?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We produce the technical inputs your compliance team needs — data flow diagrams, asset inventory, access control matrices, audit log schemas, encryption documentation, incident response runbooks, and a list of administrative, physical, and technical safeguards mapped to 45 CFR § 164.308, .310, and .312. We do not author the formal risk analysis — that is your Privacy Officer's job — but we make sure the artifacts to support it actually exist.",
            },
        },
        {
            "@type": "Question",
            name: "Do you handle 42 CFR Part 2 for substance-use disorder records?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, with explicit scoping. Part 2 has stricter consent and disclosure rules than HIPAA, including specific re-disclosure prohibitions. We segregate Part 2 data in the schema, gate access on a separate consent state, and log every disclosure with the redisclosure notice attached.",
            },
        },
    ],
};

export default function HealthcareIndustryPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
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
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why healthcare is a special case</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Healthcare combines three pressures that almost no other industry has at once. First, the data is unusually sensitive and unusually attractive to attackers. PHI fetches more on illicit markets than card data, and ransomware affiliates have decided healthcare networks are easier to pressure into paying than almost any other sector. The threat model is real, not theoretical. Second, the integration surface is famously rigid. Epic, Cerner, Athena, eClinicalWorks, and Meditech each implement FHIR R4 differently, expose different scopes, and gate API access through their own vendor programs. HL7 v2 still moves a massive share of the country's clinical messaging in 2026, and you cannot ignore it.
                        </p>
                        <p>
                            Third, the regulatory chain is long and overlapping. HIPAA Security Rule and Privacy Rule, HITECH breach notification, the 2024 HIPAA Privacy Rule final amendments on reproductive health, 21st Century Cures Act information-blocking rules under ONC, 42 CFR Part 2 for substance-use disorder records, state-level statutes like CCPA in California and MHMDA in Washington, and FDA SaMD (Software as a Medical Device) classification when a tool starts making clinical decisions — each one carries specific architectural consequences. A generic SaaS contractor cannot ship a compliant build by reading the framework page on Wikipedia. The work goes faster when the people writing the code have wired this stack before.
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Common healthcare projects we scope</h2>
                    <ul className="space-y-3">
                        {[
                            { t: "HIPAA-aware patient intake portal", d: "Mobile-first form capture, encrypted document upload, photo ID capture, insurance card ingestion, and signed-consent storage with retention policy enforcement." },
                            { t: "Provider scheduling and no-show analytics", d: "Calendar abstraction across providers, recurring template slots, no-show tracking, and reminder workflows over SMS and email with PHI-minimized templates." },
                            { t: "Telehealth back-end", d: "Session signaling, queue management, scheduled and on-demand visits, recording metadata, and audit-trail capture. Integrates a HIPAA-eligible WebRTC vendor (Doxy.me, Daily, or AWS Chime SDK) rather than rolling media in-house." },
                            { t: "Practice operations dashboard", d: "Real-time utilization, no-show rates, AR aging, payor mix, and provider productivity. Built on top of EHR exports and clearinghouse data." },
                            { t: "FHIR R4 integration layer", d: "Smart-on-FHIR app launches inside Epic or Cerner, demographic and scheduling sync, and patient-mediated data pull from major EHR vendor app stores." },
                            { t: "Revenue cycle automation", d: "Eligibility checks against payer APIs, claim status polling, EOB ingestion, denial triage queues, and integration with clearinghouse partners like Availity or Change Healthcare." },
                            { t: "Clinical questionnaire and screening flow", d: "Conditional logic, scoring, PDF generation, and structured export to EHR. Useful for PHQ-9, GAD-7, intake forms, and disease-specific protocols." },
                            { t: "Compliance-aware document workflow", d: "PHI-tagged document store with retention policies, role-based access, watermarking, and audit logging on every read and download." },
                            { t: "Patient-mediated payment portal", d: "HIPAA-aware payment flow that does not stuff PHI into Stripe metadata. Statements, payment plans, and Care Credit or HSA card handling." },
                            { t: "Practice marketing site with structured intake", d: "Clinic-branded public site with appointment booking, content marketing for community health topics, and HIPAA-aware lead capture that does not log PHI into analytics." },
                        ].map((item) => (
                            <li key={item.t} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                                <span><span className="text-white font-semibold">{item.t}.</span> {item.d}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Compliance and security considerations</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            <span className="text-white font-semibold">HIPAA Security Rule (45 CFR § 164.302–.318).</span> Administrative safeguards: workforce training, access management, contingency planning, periodic risk analysis. Physical safeguards: facility access, workstation security, device controls. Technical safeguards: unique user identification, automatic logoff, encryption, transmission security, audit controls. Every build we ship maps each control to a concrete implementation artifact your auditor can read.
                        </p>
                        <p>
                            <span className="text-white font-semibold">HIPAA Privacy Rule.</span> Minimum-necessary access on every read, patient rights to access and amend their record, accounting-of-disclosures support, and the 2024 reproductive-health amendments that further restrict downstream disclosure. We tag PHI elements at the schema level so minimum-necessary is enforced by the data layer, not by good intentions.
                        </p>
                        <p>
                            <span className="text-white font-semibold">HITECH and breach notification.</span> If a breach happens despite the controls, the clock starts. Notification windows, content requirements, OCR reporting, and state-level overlays all hit at once. We bake structured incident response runbooks and forensic-grade logging in so the breach-response timeline is supportable.
                        </p>
                        <p>
                            <span className="text-white font-semibold">BAA chain.</span> Every business associate down to the cloud provider needs a BAA. We work with AWS, Google Cloud (BAA-enabled services), Azure, and Vercel Enterprise — none of the consumer tiers. Sentry, Datadog, and similar tooling either get BAAs in place or get replaced by HIPAA-eligible equivalents.
                        </p>
                        <p>
                            <span className="text-white font-semibold">Information blocking and ONC certification.</span> The 21st Century Cures Act forbids EHR vendors and providers from blocking patient or provider access to their own data. Builds that integrate with EHRs must honor the patient-mediated data flow and the information-blocking exceptions.
                        </p>
                        <p>
                            <span className="text-white font-semibold">42 CFR Part 2.</span> Substance-use disorder records have tighter consent and redisclosure rules than HIPAA. We segregate Part 2 data in the schema, gate access on a separate consent state, and emit the redisclosure notice on every disclosure event.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech stack we recommend for healthcare</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Next.js 15 or 16 with React 19 and TypeScript for the application layer. Postgres for the system of record — usually AWS RDS or Aurora with an AWS BAA, or Google Cloud SQL on the BAA-enabled list. Prisma or Drizzle as the ORM; we use signed audit triggers at the database level for every PHI table. AWS KMS or Google Cloud KMS for envelope-encryption key material; sensitive columns are encrypted at the application layer above database encryption-at-rest.
                        </p>
                        <p>
                            Auth via Auth0 with MFA-required, Clerk on a HIPAA-aware tier, or a self-hosted stack on top of Lucia. Telehealth media via Doxy.me, Daily, or AWS Chime SDK — never a raw WebRTC build. Logging via CloudWatch or Datadog with PHI redaction in the logger; Sentry only with an executed BAA. Background workers on Inngest (BAA-eligible) or a self-hosted BullMQ + Redis stack. Email via Postmark or AWS SES with a BAA, never SendGrid free-tier. Hosting on Vercel Enterprise with a BAA for the web tier and AWS or GCP for the data plane.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pricing transparency</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { tier: "$25K", title: "Compliance-aware MVP", body: "A tightly scoped tool — patient intake portal, telehealth scheduling widget, or a back-office reconciliation app sitting alongside the EHR. Discovery scoped tight. 4 to 8 weeks." },
                            { tier: "$60K", title: "Practice platform", body: "Provider scheduling, patient portal, secure messaging, billing integration, full admin console, and an EHR sync layer over FHIR. 12 to 18 weeks with phased delivery." },
                            { tier: "$150K+", title: "Multi-practice or telehealth system", body: "Telehealth back-end with provider directories, multi-organization scoping, payer integrations, clinical questionnaires, and full HIPAA Security Rule mapping. 18 to 32 weeks." },
                        ].map((band) => (
                            <div key={band.tier} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <div className="text-teal-400 font-mono text-sm mb-2">{band.tier}</div>
                                <h3 className="text-white font-semibold mb-2">{band.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{band.body}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                        Discovery for any healthcare build is paid separately at $2,500 and credited against the engagement. <Link href="/contact" className="text-teal-400 hover:underline">Book a scope call</Link> to walk through your compliance posture and integration surface.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pitfalls we have seen</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Three patterns repeat in healthcare builds that did not survive their first audit. First, PHI gets stuffed into observability tooling. A team enables Sentry on a Friday, ships a patient portal on a Tuesday, and discovers six months later that the error reports captured first names, dates of birth, and medical-record numbers in stack traces and request payloads. The remediation is brutal because the logs are immutable on purpose. The fix is to bake PHI redaction into the logger from day one and to default to no payload capture in Sentry unless an explicit allowlist applies.
                        </p>
                        <p>
                            Second, EHR integration scope is underestimated. A founder assumes Epic or Cerner exposes a clean FHIR API and the integration will take a sprint. The reality is that EHR app-store onboarding takes months, scopes are restricted, sandbox parity with production is uneven, and the slowest paths get rate-limited in ways the vendor will not document. We pad timelines accordingly and start vendor onboarding the same week the contract signs.
                        </p>
                        <p>
                            Third, BAAs get treated as paperwork. A team picks vendors without checking whether each one is HIPAA-eligible, signs SaaS contracts, and then discovers two months in that the analytics tool, the email provider, and the customer-support widget all need to be ripped out and replaced. A short BAA chain audit at architecture phase saves the rework.
                        </p>
                    </div>
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
                            Healthcare is the top target for ransomware affiliates — Conti, BlackCat, LockBit successors, and the operators that picked up after the major takedowns. Our <Link href="/services/mitre-attack-assessment" className="text-teal-400 hover:underline">MITRE ATT&amp;CK assessments</Link> simulate those groups&apos; documented TTPs against your environment, then deliver an ATT&amp;CK heatmap of which techniques succeed, which get detected, and which get blocked.
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
                            {
                                q: "Why is healthcare treated as a special case for software development?",
                                a: "The data is uniquely sensitive and uniquely targeted, the integration surface (Epic, Cerner, FHIR, HL7 v2) is rigid, and the regulatory chain is long: HIPAA, HITECH, state privacy statutes, ONC information-blocking, and 42 CFR Part 2 each impose specific architectural constraints.",
                            },
                            {
                                q: "What does a $25,000 healthcare build look like?",
                                a: "A tightly scoped tool — a patient intake portal, a telehealth scheduling widget tied to an existing calendar, or a back-office reconciliation app sitting alongside the EHR. Discovery is paid separately so the architecture is documented before we commit.",
                            },
                            {
                                q: "How do you support our HIPAA Security Rule risk analysis?",
                                a: "We produce the technical artifacts your Privacy Officer needs — data flow diagrams, asset inventory, access control matrices, audit log schemas, encryption documentation, incident response runbooks — and map each safeguard to 45 CFR § 164.308, .310, and .312.",
                            },
                            {
                                q: "Do you handle 42 CFR Part 2 for substance-use disorder records?",
                                a: "Yes. Part 2 has stricter consent and redisclosure rules than HIPAA. We segregate Part 2 data in the schema, gate access on a separate consent state, and log every disclosure with the redisclosure notice attached.",
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
                            { slug: "web-applications", title: "Web Applications", desc: "Patient portals, provider dashboards, and clinic marketing sites." },
                            { slug: "custom-crm-development", title: "Custom CRM Development", desc: "Practice CRMs with referral tracking, patient lifecycle, and follow-up automation." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-teal-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-teal-400 group-hover:translate-x-0.5 transition-all" />
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
                            Call William Beltz at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or <Link href="/contact" className="text-teal-400 hover:underline">book a 20-minute discovery call</Link>. Founder-led, BAA-ready, no fabricated case studies.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
