import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Building2, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Custom Software for Government | QUANT LAB USA",
    description:
        "Custom government software — FedRAMP, StateRAMP, FISMA, NIST 800-53/800-171, CMMC, and Section 508 aware. Citizen portals, case management, secure builds.",
    slug: "industries/government",
    image: "/og-services.png",
    type: "article",
});

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Custom Software for Government",
    url: "https://quantlabusa.dev/industries/government",
    description:
        "Government and public-sector software development that aligns with FedRAMP, StateRAMP, FISMA, NIST 800-53 and 800-171, CMMC, and Section 508. Founder-led, US-based, mutual NDA from day one.",
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
        { "@type": "ListItem", position: 3, name: "Government", item: "https://quantlabusa.dev/industries/government" },
    ],
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Government Software Development",
    name: "Custom Software Development for Government",
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Custom software development for state, local, and federal agencies and their contractors — citizen-facing portals, case management, forms digitization, and legacy modernization. Builds that align with FedRAMP, StateRAMP, FISMA, NIST 800-53 and 800-171, CMMC, and Section 508. Penetration testing mapped to the RMF and public-sector threat models.",
    url: "https://quantlabusa.dev/industries/government",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Do you build to FedRAMP and StateRAMP requirements?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We build systems that align with FedRAMP Moderate and Low baselines and with StateRAMP, and we produce the technical evidence an authorization package needs — NIST 800-53 control implementations, hardened configuration, audit logging, and continuous-monitoring hooks. To be clear about scope: the authorization belongs to the system owner and the sponsoring agency. We are not a FedRAMP-authorized cloud and we do not hold an ATO on your behalf. We engineer to the controls so your assessor and authorizing official have something real to evaluate.",
            },
        },
        {
            "@type": "Question",
            name: "Can you meet Section 508 and WCAG 2.1 AA conformance?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Public-facing government software is held to Section 508, which incorporates WCAG 2.1 Level AA. We build accessibility in from the component layer — semantic markup, keyboard operability, focus management, color contrast, and screen-reader testing with NVDA, JAWS, and VoiceOver. We can produce an Accessibility Conformance Report (ACR) using the VPAT template so your contracting officer has the documentation the solicitation requires.",
            },
        },
        {
            "@type": "Question",
            name: "Do you handle NIST 800-171 and CMMC for defense contractors?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. If you are a contractor in the defense industrial base handling Controlled Unclassified Information (CUI), DFARS 252.204-7012 points you at NIST 800-171, and CMMC 2.0 layers an assessment on top. We build systems that implement the relevant 800-171 controls — access control, audit and accountability, media protection, encryption with FIPS-validated modules — and we help assemble the System Security Plan (SSP) and Plan of Action and Milestones (POA&M) evidence. The certification itself is yours to obtain through a C3PAO; we engineer the system to support it.",
            },
        },
        {
            "@type": "Question",
            name: "Can you support an ATO package and produce SSP and POA&M evidence?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We can map each NIST 800-53 control to its implementation in your system, document those implementations in System Security Plan language, and track open items as a Plan of Action and Milestones. We support the security-control assessment with artifacts — architecture diagrams, configuration baselines, scan output, and audit-log samples. The Authority to Operate is granted by your authorizing official; our role is to make the technical body of evidence accurate and complete.",
            },
        },
        {
            "@type": "Question",
            name: "Do you subcontract on government RFPs?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We frequently work as a subcontractor to a prime that holds the vehicle — a GSA Schedule, a SEWP award, a state master contract, or an IDIQ. We can contribute the technical volume to an RFP or RFQ response, scope a statement of work, and deliver against period-of-performance milestones. We are realistic about the documentation burden and the pace of public-sector procurement, and we price and plan accordingly.",
            },
        },
        {
            "@type": "Question",
            name: "Is offshore development a CUI or IP risk for government work?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "It can be a serious one. Controlled Unclassified Information generally carries handling and, in many cases, US-person and US-location expectations, and agency data residency requirements can rule offshore out entirely. We are US-based and founder-led. Source code lives in your repository, sensitive data stays inside the boundary you authorize, and mutual NDAs are signed before discovery. For CUI work we keep the data plane in environments such as AWS GovCloud (US) when the contract requires it.",
            },
        },
        {
            "@type": "Question",
            name: "Do you run penetration testing aligned to the RMF?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We run penetration tests scoped to the system boundary and to public-sector threat models — nation-state actors, hacktivists, and commodity ransomware — and we map every finding to NIST 800-53 controls and the relevant RMF step so the results plug directly into your assessment and continuous-monitoring program. The deliverable is written to feed a POA&M, not just to sit in an inbox.",
            },
        },
        {
            "@type": "Question",
            name: "What does a $25,000 government build look like?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Around $25,000 covers a focused, accessible MVP — one citizen-facing workflow built well. Example: a single permit or license application form with a clean Section 508-conformant front end, server-side validation, role-based staff review, and an audit log. It ships in 4 to 8 weeks, scoped tight to one form and one workflow so the first release is real and defensible rather than a half-finished portal.",
            },
        },
    ],
};

export default function GovernmentIndustryPage() {
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
                        <li className="text-gray-300">Government</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-sky-400 mb-6">
                        <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software for Government — Built Accessible, Built Secure, Built to Pass Review
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Citizen-facing portals, case management systems, forms digitization, and legacy modernization — built by a US-based, founder-led team that aligns with FedRAMP, StateRAMP, FISMA, NIST 800-53 and 800-171, CMMC, and Section 508 from day one.
                    </p>
                    <ConsultationCTA label="Scope a Government Build" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Government software lives or dies at review. Build like it.</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            FedRAMP and StateRAMP baselines, FISMA obligations on federal systems, NIST 800-53 controls, NIST 800-171 and CMMC 2.0 for contractors touching Controlled Unclassified Information, the Authority to Operate process with its SSPs and POA&amp;Ms, and Section 508 accessibility on everything the public touches — government is one of the most documentation-heavy software environments there is. A consumer-grade SaaS will not survive a security-control assessment. A code base written by a contractor who has never read NIST 800-53 will not either.
                        </p>
                        <p>
                            We build to those frameworks from the first architecture diagram. Controls are mapped to implementations, not bolted on at the end. CUI and PII are encrypted at rest and in transit with FIPS-validated crypto. Role-based access and least privilege run through every administrative surface, audit logs are immutable by design, and the system emits the continuous-monitoring signal your authorizing official and assessor expect to see. Accessibility is wired in at the component layer so the Section 508 conformance claim in your ACR is true.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why government is a special case</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Most industries answer to one or two frameworks. A single citizen-facing benefits portal can sit at the intersection of half a dozen. It has to align with a FISMA-derived NIST 800-53 control baseline, conform to Section 508 because the public uses it, honor records-retention schedules and FOIA-readiness because the data is a government record, protect PII under agency privacy rules, and — if a contractor in the supply chain touches CUI — satisfy NIST 800-171 and CMMC on top. That is before the procurement vehicle, the period of performance, and the deliverable-based milestones impose their own structure on how the work is even allowed to proceed.
                        </p>
                        <p>
                            The process compounds the engineering. Public-sector procurement moves on RFP and RFQ timelines, statements of work, and authorization gates that have nothing to do with how fast you can write code. An ATO package is its own deliverable. The volume of audit-relevant events, the demand for evidence on demand, and the expectation of continuous monitoring mean lazy logging or untested encryption becomes a finding inside one assessment cycle. And the integrations are their own world — identity via SAML and PIV/CAC, inter-agency data exchanges, GIS-adjacent services, and legacy systems that may still be COBOL on a mainframe. Each one has its own constraints, its own owners, and its own approvals. We plan for that reality instead of discovering it mid-build.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build for public-sector teams</h2>
                    <ul className="space-y-3">
                        {[
                            "Citizen-facing portals — permits, licensing, registrations, and benefits applications with Section 508-conformant front ends",
                            "Case management systems — intake, assignment, status tracking, SLA timers, and a tamper-evident audit trail",
                            "Internal workflow and forms digitization — replacing paper and PDF processes with routed, validated digital forms",
                            "Open-data and transparency dashboards — public reporting surfaces backed by governed, refreshable datasets",
                            "GIS-adjacent tools — parcel, district, and asset views that pair tabular workflows with map context",
                            "Legacy modernization — replacing mainframe and COBOL-era systems with maintainable, documented services",
                            "Inter-agency integration layers — secure data exchanges between systems that were never designed to talk",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Common government projects we scope</h2>
                    <ul className="space-y-3">
                        {[
                            { t: "Citizen-facing permit or license portal", d: "Public application intake, document upload, fee payment, status lookup, and a staff review queue. Section 508-conformant front end and an audit log from day one." },
                            { t: "Benefits or services application system", d: "Eligibility intake, multi-step forms with save-and-resume, caseworker review, and notice generation — with PII handling and records-retention built in." },
                            { t: "Case management system", d: "Intake, routing, assignment, status workflow, SLA timers, and a tamper-evident history. RBAC and least privilege wired through every screen." },
                            { t: "Forms and workflow digitization", d: "Replacing a paper or PDF process with a validated digital form, routing rules, approvals, and an immutable record of who did what and when." },
                            { t: "Open-data and transparency dashboard", d: "A public reporting surface over a governed dataset — refresh pipeline, data dictionary, and accessible charts and tables that hold up to public scrutiny." },
                            { t: "Legacy modernization program", d: "Mapping a mainframe or COBOL-era system, standing up a documented replacement service, and migrating data with reconciliation and a rollback plan." },
                            { t: "Inter-agency integration layer", d: "Secure API or message-based exchange between systems across agency boundaries, with authentication, authorization, and a full audit trail of every transfer." },
                            { t: "GIS-adjacent operational tool", d: "Parcel, district, or asset workflows that combine tabular case handling with map context, backed by governed spatial and attribute data." },
                            { t: "RFP technical volume and prototype", d: "A working proof-of-concept plus the technical narrative, architecture, and compliance crosswalk a prime needs to submit a credible response." },
                            { t: "ATO support and evidence package", d: "NIST 800-53 control-to-implementation mapping, SSP language, configuration baselines, scan output, and POA&M tracking to support a security-control assessment." },
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
                            <span className="text-white font-semibold">FedRAMP and StateRAMP.</span> If your system runs in the cloud for a federal or state agency, it is measured against a FedRAMP or StateRAMP baseline — most commonly FedRAMP Moderate, sometimes Low. We build to those baselines and produce the technical evidence the package needs. The authorization belongs to the system owner and sponsoring agency; we engineer to the controls and stay honest about that boundary.
                        </p>
                        <p>
                            <span className="text-white font-semibold">FISMA and NIST 800-53.</span> Federal information systems inherit a FISMA-driven control baseline drawn from NIST 800-53. We map each applicable control family — access control, audit and accountability, identification and authentication, system and communications protection — to a concrete implementation and document it in System Security Plan language an assessor can verify.
                        </p>
                        <p>
                            <span className="text-white font-semibold">NIST 800-171 and CMMC 2.0.</span> Contractors in the defense industrial base handling CUI fall under DFARS 252.204-7012, NIST 800-171, and a CMMC 2.0 assessment. We implement the relevant 800-171 controls and help assemble the SSP and POA&amp;M evidence. The certification is obtained through a C3PAO — our job is to make the system support it.
                        </p>
                        <p>
                            <span className="text-white font-semibold">The ATO process.</span> Authority to Operate is the gate. We support it with the technical body of evidence — control-to-implementation crosswalks, architecture diagrams, hardened configuration baselines, scan results, and audit-log samples — and we track open items as a POA&amp;M so the path to authorization is explicit rather than a surprise at the end.
                        </p>
                        <p>
                            <span className="text-white font-semibold">Section 508 and WCAG 2.1 AA.</span> Anything the public touches has to conform to Section 508, which incorporates WCAG 2.1 Level AA. We build accessibility in at the component layer and test with NVDA, JAWS, and VoiceOver, then produce an Accessibility Conformance Report on the VPAT template so the conformance claim in your solicitation response is defensible.
                        </p>
                        <p>
                            <span className="text-white font-semibold">Data: PII, CUI, records retention, and FOIA.</span> Government data is a government record. We build to applicable records-retention schedules, keep data FOIA-ready with the right metadata and export paths, handle PII and CUI under the controls the boundary requires, and implement e-signature consistent with applicable rules. We do not give legal advice — we build the audit trail, consent capture, and retention logic your counsel and records officer will rely on.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech stack we recommend for government</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Next.js 16 on the App Router with React 19 and TypeScript end-to-end, built on accessibility-first component patterns so Section 508 and WCAG 2.1 AA conformance is structural rather than retrofitted. Postgres for the system of record. Prisma or Drizzle as the type-safe ORM. Server-side validation on every form, RBAC and least privilege on every administrative surface, and immutable, append-only audit logs in a store separate from application data. Authentication via SSO — SAML, OIDC, and PIV/CAC-aware where the agency identity provider requires it.
                        </p>
                        <p>
                            For the data plane we deploy into a hardened VPC, and into AWS GovCloud (US) when the contract or the CUI boundary calls for it. Encryption uses FIPS 140-2/140-3 validated modules, with KMS-backed envelope encryption for sensitive columns. Continuous-monitoring (ConMon) tooling feeds vulnerability scanning, configuration drift detection, and log aggregation into the evidence stream the authorization expects. Observability is PII- and CUI-aware with redaction baked into the logger. The public web tier can sit behind an agency-approved edge while the sensitive backend stays inside the authorized boundary — keeping the attack surface small and the audit story clean.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pricing transparency</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { tier: "$25K", title: "Focused MVP", body: "A single citizen-facing workflow shipped clean — one permit or license form, Section 508-conformant front end, server-side validation, staff review queue, and an audit log. 4 to 8 weeks. Scoped tight to one form and one workflow." },
                            { tier: "$60K", title: "Production system", body: "A real case-management or benefits system — multi-step intake, caseworker review, notice generation, RBAC and least privilege, 508 conformance with an ACR, and immutable audit logging built to support a security-control assessment. 10 to 16 weeks." },
                            { tier: "$150K+", title: "Modernization or integration program", body: "A legacy-system modernization or multi-agency integration — system mapping, documented replacement services, data migration with reconciliation, secure inter-agency exchange, and an ATO-ready evidence package. 16 to 28 weeks with phased, milestone-based delivery." },
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
                            Three patterns repeat. First, accessibility gets treated as a final-week cleanup instead of a design constraint. The team ships a slick portal, then fails the Section 508 review on keyboard traps, missing labels, and contrast — and discovers that retrofitting conformance means re-touching nearly every component. Accessibility built in from the component layer is cheap; accessibility bolted on at the end is a rebuild.
                        </p>
                        <p>
                            Second, the system gets built and only then does someone ask how it will get its ATO. Controls were never mapped, audit logging is thin, configuration is undocumented, and the security-control assessment turns into a scramble to manufacture evidence after the fact. The fix is to treat the SSP, the control crosswalk, and the audit log as first-class deliverables from the start — not paperwork generated under deadline pressure at the end.
                        </p>
                        <p>
                            Third, teams overscope the first release against the procurement. A solicitation hints at a grand multi-module platform, and the build tries to deliver all of it at once, late, against a fixed period of performance. The realistic path is one workflow, one user group, one accessible release — delivered against a clear milestone, demonstrated to the agency, and built on from there. We push hard for that discipline because deliverable-based milestones reward shipped, defensible increments over a sprawling system that misses its dates.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why founder-led matters for government</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The thing that gets public-sector projects in trouble is rarely a single bug. It is CUI sitting on a laptop in another country, a subcontractor who copied a government dataset, or a control that was claimed in the SSP but never actually implemented. Data-handling discipline and accurate evidence are the quiet existential requirements in government engineering — and they are exactly why we are US-based, founder-led, and engagement-first on every project.
                        </p>
                        <p>
                            William Beltz writes or reviews every line of code that touches citizen data, CUI, or an authorization boundary. NDAs are mutual and signed before discovery. Source code lives in your repository, not ours, and sensitive data stays inside the boundary you authorize. The handoff is documented for either ongoing collaboration or in-house ownership — your call, and your records officer's.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Penetration testing tied to public-sector threat models</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Assessors and authorizing officials want penetration testing scoped to the system boundary and to the adversaries the public sector actually faces — nation-state actors probing government infrastructure, hacktivists targeting public-facing services, and commodity ransomware that does not care who you are. We run <Link href="/services/penetration-testing" className="text-emerald-400 hover:underline">penetration testing</Link> aligned to the Risk Management Framework, then map every finding to NIST 800-53 controls so the results feed your assessment and continuous-monitoring program directly. The deliverable is written to populate a POA&amp;M, not just to sit in an inbox.
                        </p>
                        <p>
                            Coverage spans the surfaces that matter for government systems — the external perimeter, the <Link href="/services/network-pentest" className="text-emerald-400 hover:underline">internal network</Link>, and the <Link href="/services/web-app-pentest" className="text-emerald-400 hover:underline">web application and API</Link> behind every citizen portal. For threat-group-aligned testing we map adversary techniques with a <Link href="/services/mitre-attack-assessment" className="text-emerald-400 hover:underline">MITRE ATT&amp;CK assessment</Link>, producing a heatmap of which techniques succeed, which get detected, and which get blocked, so your SOC or MSSP knows exactly what to alert on.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Architecture patterns we use</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            <span className="text-white font-semibold">Boundary-first deployment.</span> The pattern that keeps a government system authorizable is a small, well-defined boundary. The public web tier sits behind an agency-approved edge; the sensitive data plane lives in a hardened VPC, or AWS GovCloud (US) when the CUI or contract requires it. Every crossing of that boundary is authenticated, authorized, and logged, which keeps both the attack surface and the audit story small.
                        </p>
                        <p>
                            <span className="text-white font-semibold">Evidence as a build artifact.</span> Audit logs are immutable and append-only in a store separate from application data. Control implementations are documented as they are written, so the SSP crosswalk and the configuration baseline are produced alongside the code rather than reconstructed under deadline. Continuous-monitoring tooling emits the scanning and drift-detection signal an authorization expects to see on an ongoing basis.
                        </p>
                        <p>
                            <span className="text-white font-semibold">Accessible-by-default front ends.</span> Citizen-facing surfaces are built on component patterns that bake in semantic markup, keyboard operability, focus management, and contrast — so Section 508 and WCAG 2.1 AA conformance is a property of the system, validated with assistive technology and captured in an ACR, rather than a remediation project after launch.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "Do you build to FedRAMP and StateRAMP requirements?",
                                a: "Yes — we build to FedRAMP Moderate and Low baselines and to StateRAMP, and produce the technical evidence a package needs (NIST 800-53 control implementations, hardened configuration, audit logging, ConMon hooks). The authorization belongs to the system owner and sponsoring agency; we are not a FedRAMP-authorized cloud and do not hold an ATO on your behalf.",
                            },
                            {
                                q: "Can you meet Section 508 and WCAG 2.1 AA conformance?",
                                a: "Yes. We build accessibility in at the component layer — semantic markup, keyboard operability, focus management, contrast — and test with NVDA, JAWS, and VoiceOver. We produce an Accessibility Conformance Report on the VPAT template so your contracting officer has the documentation the solicitation requires.",
                            },
                            {
                                q: "Do you handle NIST 800-171 and CMMC for defense contractors?",
                                a: "Yes. For DIB contractors handling CUI under DFARS 252.204-7012, we implement the relevant NIST 800-171 controls and help assemble the SSP and POA&M evidence. The CMMC 2.0 certification is obtained through a C3PAO; we engineer the system to support it.",
                            },
                            {
                                q: "Can you support an ATO package and produce SSP and POA&M evidence?",
                                a: "Yes. We map NIST 800-53 controls to implementations, document them in SSP language, track open items as a POA&M, and supply the assessment artifacts — architecture diagrams, configuration baselines, scan output, and audit-log samples. The ATO is granted by your authorizing official.",
                            },
                            {
                                q: "Do you subcontract on government RFPs?",
                                a: "Yes. We frequently work as a subcontractor to a prime holding the vehicle — GSA Schedule, SEWP, a state master contract, or an IDIQ. We contribute the technical volume, scope the SOW, and deliver against period-of-performance, deliverable-based milestones.",
                            },
                            {
                                q: "Is offshore development a CUI or IP risk for government work?",
                                a: "It can be. CUI generally carries handling and often US-person and US-location expectations, and data-residency requirements can rule offshore out entirely. We are US-based and founder-led, source code lives in your repository, and CUI stays in environments such as AWS GovCloud (US) when the contract requires it.",
                            },
                            {
                                q: "Do you run penetration testing aligned to the RMF?",
                                a: "Yes. We scope tests to the system boundary and to public-sector threat models, then map every finding to NIST 800-53 controls and the relevant RMF step so the results plug directly into your assessment and continuous-monitoring program — written to feed a POA&M.",
                            },
                            {
                                q: "What does a $25,000 government build look like?",
                                a: "A focused, accessible MVP — one citizen-facing workflow built well. Example: a single permit or license application with a Section 508-conformant front end, server-side validation, role-based staff review, and an audit log, scoped to 4 to 8 weeks and one workflow.",
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
                            { slug: "penetration-testing", title: "Penetration Testing", desc: "Manual, evidence-backed pentests mapped to NIST 800-53 and written to feed a POA&M." },
                            { slug: "legacy-system-modernization", title: "Legacy System Modernization", desc: "Replacing mainframe and COBOL-era systems with documented, maintainable services." },
                            { slug: "custom-business-software", title: "Custom Business Software", desc: "Case management, forms digitization, and internal workflow tools built to spec." },
                            { slug: "cloud-infrastructure", title: "Cloud Infrastructure", desc: "Hardened VPC and GovCloud-aware deployment with FIPS-validated crypto and audit logging." },
                            { slug: "network-pentest", title: "Network Penetration Testing", desc: "Internal and external assessments scoped to the system boundary and the RMF." },
                            { slug: "mitre-attack-assessment", title: "MITRE ATT&CK Assessment", desc: "Threat-group-aligned testing — nation-state, hacktivist, and ransomware TTPs." },
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
                        topics={["compliance","pentest","build-vs-buy"]}
                        heading="Public-sector engineering & compliance reading"
                        pinned={["soc-2-vs-iso-27001-2026","how-to-prepare-for-a-soc-2-audit-2026","what-is-penetration-testing"]}
                    />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ship government software that passes review.
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
