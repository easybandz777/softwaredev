import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { FlaskConical, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Biotech Software Development (GxP) | QUANT LAB USA",
    description:
        "GxP-aware biotech software — LIMS, ELN integrations, 21 CFR Part 11 e-records, clinical-trial portals, CSV/CSA validation. Founder-led, US-based, secure by default.",
    slug: "industries/biotech",
    image: "/og-services.png",
    type: "article",
});

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Custom Biotech & Life-Sciences Software Development",
    url: "https://quantlabusa.dev/industries/biotech",
    description:
        "Biotech and life-sciences software with 21 CFR Part 11, GxP, and HIPAA-aware architecture. LIMS and ELN integrations, clinical-trial portals, sample chain-of-custody, and computer-system validation.",
    isPartOf: {
        "@type": "WebSite",
        url: "https://quantlabusa.dev",
        name: "QUANT LAB USA",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Industries", item: "https://quantlabusa.dev/industries" },
        { "@type": "ListItem", position: 3, name: "Biotech", item: "https://quantlabusa.dev/industries/biotech" },
    ],
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Biotech Software Development",
    name: "Custom Software Development for Biotech & Life Sciences",
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Custom software development for biotech and life sciences — LIMS and ELN integrations, clinical-trial portals, sample chain-of-custody, and lab-instrument data capture. 21 CFR Part 11, GxP, and HIPAA-aware builds with computer-system validation, immutable audit trails, and pentesting tied to life-sciences threat models.",
    url: "https://quantlabusa.dev/industries/biotech",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Do you build to 21 CFR Part 11 for electronic records and signatures?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Part 11 governs electronic records and electronic signatures in FDA-regulated work. We build the controls it requires — unique user IDs with no shared logins, sequenced audit trails that capture who changed what and when, record immutability, signature manifestation (printed name, date/time, meaning of the signature), and operational checks like account lockout and session timeout. We document each control so your validation lead can map it to the regulation.",
            },
        },
        {
            "@type": "Question",
            name: "Can you handle computer-system validation (CSV) or the newer CSA approach?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We produce the artifacts a GAMP 5 / CSA effort expects — a risk assessment, a requirements trace matrix, IQ/OQ/PQ scripts where they add value, and a validation summary. We lean into the FDA's Computer Software Assurance guidance: critical-thinking-led, risk-based testing rather than scripting every screen. Your QA/validation team owns the formal package; we supply the evidence and the system that survives it.",
            },
        },
        {
            "@type": "Question",
            name: "Do you integrate with LIMS, ELN, and lab instruments?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We integrate with LIMS (LabWare, STARLIMS, Benchling, LabVantage) and ELN platforms via their REST or SOAP APIs, and we capture instrument output through file watchers, SiLA 2, or vendor SDKs where they exist. Where an instrument only emits CSV or proprietary files to a network share, we build a validated ingestion pipeline with checksums and an audit trail so the data lineage holds up.",
            },
        },
        {
            "@type": "Question",
            name: "Is offshore development an IP risk for biotech?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "It can be. Biotech IP — assay protocols, sequence data, formulation parameters, and the software that orchestrates them — is the core asset, and it is exactly what you do not want sitting on a foreign contractor's laptop. We are US-based, founder-led, and signing mutual NDAs is the first step of every engagement. Source lives in your GitHub org, not ours.",
            },
        },
        {
            "@type": "Question",
            name: "Why is biotech treated as a special case for software development?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Three forces converge. First, the regulatory perimeter is unusual: 21 CFR Part 11, GxP (GLP/GCP/GMP), HIPAA when human subjects are involved, plus the EU GDPR and Annex 11 if trials cross the Atlantic. Second, software is validated, not just tested — a change that would be a routine deploy elsewhere can trigger a re-validation event here. Third, the integration surface is genuinely hard: LIMS, ELN, instruments speaking SiLA or proprietary formats, EDC/CTMS systems, and data standards like CDISC SDTM. A generic team learns all of this on your dime and at audit time.",
            },
        },
        {
            "@type": "Question",
            name: "What does a $25,000 biotech build look like?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Around $25,000 covers a tightly scoped, validatable tool — a sample chain-of-custody tracker with barcode scanning and an immutable audit log, a study-coordinator intake portal, or a validated ingestion pipeline that pulls one instrument's output into a clean, queryable store. Discovery is scoped tight, the validation strategy is decided up front, and the build ships in 4 to 8 weeks without feature creep.",
            },
        },
        {
            "@type": "Question",
            name: "Do you handle HIPAA when the software touches clinical-trial subjects?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Once identifiable subject data is in scope, HIPAA and (for federally funded research) the Common Rule and IRB obligations apply. We encrypt PHI at rest with envelope keys, enforce role-based access tied to site and study scope, log every disclosure, and sign a BAA where the engagement touches PHI. We coordinate with your privacy officer and the IRB on consent and data-handling flows.",
            },
        },
        {
            "@type": "Question",
            name: "Can you support a data integrity (ALCOA+) review?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. ALCOA+ — attributable, legible, contemporaneous, original, accurate, plus complete, consistent, enduring, and available — is the lens FDA and MHRA inspectors apply to records. We build for it: attribution via authenticated identity, contemporaneous timestamps from a trusted clock, originals preserved with no silent overwrite, and audit trails that are reviewable and exportable. We can walk an inspector or your QA lead through the data lineage end to end.",
            },
        },
    ],
};

export default function BiotechIndustryPage() {
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
                        <li className="text-gray-300">Biotech</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-sky-400 mb-6">
                        <FlaskConical className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software for Biotech — Validated, Auditable, Built to Survive Inspection
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        LIMS and ELN integrations, clinical-trial portals, sample chain-of-custody, and instrument data capture — built by a US-based, founder-led team that treats 21 CFR Part 11, GxP, and data integrity as requirements, not afterthoughts.
                    </p>
                    <ConsultationCTA label="Scope a Biotech Build" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Biotech software is validated, not just shipped.</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            In most industries a deploy is a deploy. In FDA-regulated life sciences, a system that creates, modifies, or stores GxP records lives under 21 CFR Part 11, and the software has to be validated — proven fit for its intended use and kept in that state through change control. A contractor who has never read a validation plan will ship something that works in a demo and fails the first data-integrity inspection.
                        </p>
                        <p>
                            We build with that reality in the first architecture diagram. Records are attributable to an authenticated identity with no shared logins. Audit trails are sequenced, immutable, and reviewable. Timestamps come from a trusted clock, not the user's browser. Electronic signatures carry the signer's printed name, the date and time, and the meaning of the signature. The validation strategy — risk-based, in line with the FDA's Computer Software Assurance guidance — is decided before code is written, so your QA team inherits a system that survives audit instead of one that triggers a remediation project.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why biotech is a special case</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Most industries deal with one or two overlapping frameworks. A life-sciences product routinely sits at the intersection of several. A single study portal that collects consent, captures lab results from a LIMS, and feeds a CTMS can simultaneously touch 21 CFR Part 11 for the electronic records, GCP for the trial conduct, HIPAA for the subject data, and the Common Rule and IRB oversight if the research is federally funded. Add a European site and EU Annex 11 and GDPR join the stack.
                        </p>
                        <p>
                            The integration surface is the other hard part. LIMS platforms like LabWare, STARLIMS, Benchling, and LabVantage; ELN systems; instruments that speak SiLA 2, OPC-UA, or a proprietary file drop onto a network share; EDC and CTMS systems; and clinical data standards like CDISC SDTM and ADaM. Each has its own quirks, its own validated state to preserve, and its own failure mode when an overnight batch silently drops a record. We have wired ingestion pipelines, chain-of-custody trackers, and audit-grade data layers before, and we know where the time gets eaten — usually in vendor onboarding and in proving data lineage, not in the UI.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build for biotech and life-sciences operators</h2>
                    <ul className="space-y-3">
                        {[
                            "Sample and specimen chain-of-custody trackers — barcode/QR scanning, freezer and location management, immutable custody logs",
                            "LIMS and ELN integration layers — bidirectional sync, result reconciliation, and validated data capture",
                            "Validated instrument-ingestion pipelines — file watchers, SiLA 2 / SDK capture, checksums, and full data lineage",
                            "Clinical-trial and study-coordinator portals — consent capture, visit scheduling, subject status, and document workflows",
                            "Lab and manufacturing back-office tools — batch records, deviation logging, CAPA tracking, and review/approval chains",
                            "Research data platforms — assay results, sequence metadata, and queryable stores with role-based scoping",
                            "Internal dashboards for study or production status, with Part 11 e-signatures where records require them",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Common biotech projects we scope</h2>
                    <ul className="space-y-3">
                        {[
                            { t: "Sample chain-of-custody system", d: "Barcode/QR scanning at every handoff, freezer and rack location tracking, custody transfer with reason codes, and an immutable audit log that reconstructs a sample's full lifecycle for an inspector." },
                            { t: "Validated instrument-data ingestion pipeline", d: "File watcher or SiLA 2 capture from a plate reader, sequencer, or HPLC; checksum verification; structured storage; and documented data lineage from raw output to queryable record." },
                            { t: "Clinical-trial coordinator portal", d: "Subject roster, visit scheduling, consent versioning and capture, adverse-event intake hooks, and document workflows. Integrates with an EDC/CTMS where one exists." },
                            { t: "LIMS/ELN integration and reconciliation layer", d: "Bidirectional sync with LabWare, STARLIMS, Benchling, or LabVantage; result matching; exception queues; and a reconciliation dashboard for the lab team." },
                            { t: "Batch-record and deviation tracking tool", d: "Electronic batch records with Part 11 signatures, deviation and CAPA workflows, controlled review/approval chains, and exportable evidence for a GMP audit." },
                            { t: "Research data platform", d: "Assay and experiment results, sequence and sample metadata, search and filtering, and role-based access scoped to project, lab, or program." },
                            { t: "Quality and document-control back-office", d: "SOP versioning, training-record tracking, controlled-document distribution, and acknowledgement capture with an audit trail." },
                            { t: "Subject or patient-facing eConsent flow", d: "Versioned consent forms, signature capture, withdrawal handling, and an immutable record of what each subject agreed to and when." },
                            { t: "CDISC-aware data export", d: "Mapping of captured data toward SDTM/ADaM-shaped exports for downstream statistical work, with traceability back to source." },
                            { t: "Lab operations and scheduling dashboard", d: "Instrument and bench scheduling, reagent inventory with lot tracking and expiry, and utilization reporting for lab managers." },
                        ].map((item) => (
                            <li key={item.t} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span><span className="text-white font-semibold">{item.t}.</span> {item.d}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Compliance and security considerations</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            <span className="text-white font-semibold">21 CFR Part 11.</span> The baseline for electronic records and signatures in FDA-regulated work. We implement unique authenticated identities, sequenced and immutable audit trails, record protection against silent overwrite, signature manifestation, and the operational controls Part 11 expects — account lockout, session timeout, and authority checks. Each control is documented for your validation package.
                        </p>
                        <p>
                            <span className="text-white font-semibold">GxP and GAMP 5 / CSA.</span> Good Laboratory, Clinical, and Manufacturing Practice all shape how software is validated. We follow GAMP 5 second edition and the FDA's Computer Software Assurance guidance — a risk-based, critical-thinking-led approach that focuses testing where patient safety and data integrity actually live, rather than scripting every screen. You get a requirements trace matrix, risk assessment, targeted IQ/OQ/PQ, and a validation summary.
                        </p>
                        <p>
                            <span className="text-white font-semibold">Data integrity (ALCOA+).</span> Inspectors evaluate records against ALCOA+ principles. We build attribution, contemporaneous trusted timestamps, preserved originals, and reviewable, exportable audit trails so the data lineage holds up from raw instrument output to final record.
                        </p>
                        <p>
                            <span className="text-white font-semibold">HIPAA and the Common Rule.</span> When identifiable human-subject data is involved, HIPAA applies, and federally funded research adds Common Rule and IRB obligations. We encrypt PHI at rest with envelope keys, scope access by site and study, log disclosures, and sign a BAA where appropriate, coordinating with your privacy officer and IRB.
                        </p>
                        <p>
                            <span className="text-white font-semibold">EU Annex 11 and GDPR.</span> If trials or operations cross into the EU, Annex 11 mirrors Part 11 for computerized systems and GDPR governs personal data. We build encryption, access control, and data-subject-rights handling that satisfy both regimes with one architecture rather than two parallel builds.
                        </p>
                        <p>
                            <span className="text-white font-semibold">SOC 2 and vendor diligence.</span> Pharma and CRO partners increasingly run security questionnaires before they connect to your systems. We build with SOC 2 Common Criteria in mind — encryption, RBAC, change management, audit logging, and incident response — so the diligence is an evidence exercise, not a scramble.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech stack we recommend for biotech</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Next.js 16 on the App Router with React 19 and TypeScript end to end. Postgres as the validated system of record — usually Neon, Supabase, or RDS depending on BAA needs and the compliance posture — with Prisma or Drizzle as the type-safe ORM. Sensitive columns get KMS-backed envelope encryption, and audit trails live in a separate append-only store so they cannot be edited in place. Resend handles transactional email with a verified domain and DMARC alignment.
                        </p>
                        <p>
                            For instrument and integration work we lean Python on the ingestion side — file watchers, SiLA 2 clients, or vendor SDKs feeding a FastAPI or queue-backed pipeline (Inngest or BullMQ on Redis), with checksums and structured logging at every hop so data lineage is provable. A TypeScript dashboard sits over the top for human review and sign-off. Auth uses Auth0, Clerk, or a Lucia-style stack with MFA required on every record-creating surface and no shared accounts, which Part 11 forbids. Observability runs through Sentry plus a log aggregator (Datadog or Better Stack) with PII/PHI-aware redaction in the logger. The web tier deploys to Vercel; the data plane runs in a hardened VPC when BAA or validation scope requires it.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pricing transparency</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { tier: "$25K", title: "Focused validatable tool", body: "A single high-value workflow shipped clean — a sample chain-of-custody tracker, a coordinator intake portal, or a validated single-instrument ingestion pipeline. 4 to 8 weeks, validation strategy decided up front." },
                            { tier: "$60K", title: "Production GxP system", body: "A real life-sciences product — a study portal with consent capture and EDC sync, or a batch-record tool with Part 11 signatures and CAPA workflows, plus the validation evidence pack. 10 to 16 weeks." },
                            { tier: "$150K+", title: "Platform or multi-instrument integration", body: "A research data platform or a validated integration layer spanning LIMS, ELN, and multiple instruments with full data lineage and a reconciliation console. 16 to 28 weeks, phased delivery." },
                        ].map((band) => (
                            <div key={band.tier} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <div className="text-emerald-400 font-mono text-sm mb-2">{band.tier}</div>
                                <h3 className="text-white font-semibold mb-2">{band.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{band.body}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                        Discovery is paid separately at $2,500 and is creditable against any full engagement. See the <Link href="/contact" className="text-emerald-400 hover:underline">contact page</Link> for the full scoping flow.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pitfalls we have seen</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Three patterns repeat. First, the audit trail is bolted on after launch. A team ships a lab tool, then learns during the first data-integrity review that it cannot reconstruct who changed a result or when. Retro-fitting an immutable, sequenced audit trail means re-instrumenting every write path. Build the audit trail first, not last.
                        </p>
                        <p>
                            Second, validation is treated as a documentation task at the end. The system gets built like any web app, and then someone is asked to validate it after the fact — discovering that shared logins, editable timestamps, and silent overwrites are baked into the design. Validation is an architecture decision made on day one, not a binder assembled in week twenty.
                        </p>
                        <p>
                            Third, instrument and LIMS integration scope is underestimated. A founder assumes the instrument has a clean API and the LIMS sync is a sprint. The reality is proprietary file formats, vendor onboarding that takes weeks, and uneven sandbox parity. We pad those timelines and start vendor coordination the week the contract signs, because that is where life-sciences builds actually slip.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why founder-led matters for biotech</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The asset in biotech is the science and the data — assay protocols, sequence data, formulation parameters, and the validated software that orchestrates them. The quiet existential risk is not a bug; it is your core IP sitting on a foreign contractor's laptop, or a validated system silently broken by an undocumented change. That is precisely why we are US-based, founder-led, and engagement-first on every project.
                        </p>
                        <p>
                            William Beltz writes or reviews every line of code that touches your records, your samples, or your subject data. NDAs are mutual and signed before discovery. Source code lives in your GitHub organization, not ours. Changes are documented and change-controlled so your validated state holds, and the handoff is documented for either ongoing collaboration or in-house ownership — your call.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">MITRE ATT&amp;CK pentests tied to life-sciences threat models</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Biotech is a documented target for nation-state IP theft — research data, trial results, and manufacturing know-how are strategic — alongside the ransomware affiliates that hit every sector. We run <Link href="/services/mitre-attack-assessment" className="text-emerald-400 hover:underline">MITRE ATT&amp;CK-aligned assessments</Link> that simulate those groups&apos; documented TTPs against your environment, then deliver an ATT&amp;CK heatmap of which techniques succeed, which get detected, and which get blocked.
                        </p>
                        <p>
                            Standard <Link href="/services/penetration-testing" className="text-emerald-400 hover:underline">penetration testing</Link> covers the rest — external perimeter, web application, and API surface — with reporting that supports your security questionnaires and cyber-insurance requirements. For labs running their own domain, our <Link href="/services/active-directory-pentest" className="text-emerald-400 hover:underline">Active Directory pentest</Link> walks the full chain from a standard workstation to Domain Admin, with every step mapped to ATT&amp;CK technique IDs your SOC or MSSP can alert on.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">A note on case studies</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA does not yet have a published biotech case study, and we are saying that plainly rather than inventing one. What we have is the audit-grade architecture pattern — authenticated identity, immutable audit trails, validated data lineage, encryption, and ATT&amp;CK-aligned pentesting — that other regulated domains already run on in production, including <Link href="/work/regional-medical-billing" className="text-emerald-400 hover:underline">healthcare back-office systems</Link> with auditable record handling.
                        </p>
                        <p>
                            A discovery engagement for biotech starts with a validation and data-integrity review — your intended use, your regulatory scope, your existing instruments and LIMS, and the records that have to survive inspection. You come out with a wireframed UI, a data model with record boundaries and audit points marked, a validation strategy, and a phased estimate — useful even if you take it to another developer.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "Do you build to 21 CFR Part 11 for electronic records and signatures?",
                                a: "Yes. We build unique authenticated identities with no shared logins, sequenced and immutable audit trails, record protection, and signature manifestation (printed name, date/time, meaning), plus operational controls like account lockout and session timeout. Each control is documented for your validation package.",
                            },
                            {
                                q: "Can you handle computer-system validation (CSV) or the newer CSA approach?",
                                a: "Yes. We produce a risk assessment, requirements trace matrix, targeted IQ/OQ/PQ, and a validation summary, following GAMP 5 and the FDA's Computer Software Assurance guidance — risk-based, critical-thinking-led testing rather than scripting every screen. Your QA team owns the formal package; we supply the evidence.",
                            },
                            {
                                q: "Do you integrate with LIMS, ELN, and lab instruments?",
                                a: "Yes. We integrate with LabWare, STARLIMS, Benchling, and LabVantage via REST/SOAP, and capture instrument output through file watchers, SiLA 2, or vendor SDKs. Where an instrument only drops CSV to a share, we build a validated pipeline with checksums and full data lineage.",
                            },
                            {
                                q: "Is offshore development an IP risk for biotech?",
                                a: "It can be. Assay protocols, sequence data, and formulation parameters are your core asset and exactly what you do not want on a foreign contractor's laptop. We are US-based, founder-led, sign mutual NDAs first, and keep source in your GitHub org.",
                            },
                            {
                                q: "Why is biotech treated as a special case for software development?",
                                a: "The regulatory perimeter spans Part 11, GxP, HIPAA, and EU Annex 11/GDPR; software is validated rather than just tested, so changes can trigger re-validation; and the integration surface — LIMS, ELN, SiLA instruments, EDC/CTMS, CDISC — is genuinely hard. A generic team learns it at audit time, on your dime.",
                            },
                            {
                                q: "What does a $25,000 biotech build look like?",
                                a: "A tightly scoped, validatable tool — a sample chain-of-custody tracker, a coordinator intake portal, or a validated single-instrument ingestion pipeline. Scoped to 4 to 8 weeks with the validation strategy decided up front.",
                            },
                            {
                                q: "Can you support a data integrity (ALCOA+) review?",
                                a: "Yes. We build attribution via authenticated identity, contemporaneous trusted timestamps, preserved originals with no silent overwrite, and reviewable, exportable audit trails — so the data lineage holds up from raw instrument output to final record.",
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
                            { slug: "custom-business-software", title: "Custom Business Software", desc: "Lab ops, chain-of-custody, batch records, and quality back-office tools." },
                            { slug: "data-engineering", title: "Data Engineering", desc: "Validated instrument-ingestion pipelines with checksums and full data lineage." },
                            { slug: "api-development", title: "API Development", desc: "Integration layers for LIMS, ELN, EDC, and CTMS systems." },
                            { slug: "penetration-testing", title: "Penetration Testing", desc: "Evidence-backed pentests for security questionnaires and cyber-insurance." },
                            { slug: "mitre-attack-assessment", title: "MITRE ATT&CK Assessment", desc: "Threat-group simulations for IP-theft and ransomware adversaries." },
                            { slug: "business-intelligence-dashboards", title: "BI Dashboards", desc: "Study, lab, and production-status dashboards with role-based access." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-emerald-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["compliance","stack","build-vs-buy"]}
                        heading="Life-sciences engineering & compliance reading"
                        pinned={["hipaa-compliant-saas-architecture","soc2-pentest-prep-guide-2026","build-vs-buy-software-2026"]}
                    />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ship biotech software that survives inspection.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz directly at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or <Link href="/contact" className="text-emerald-400 hover:underline">book a 20-minute scope call</Link>. Mutual NDA signed before discovery. Founder-led from quote to handoff.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
