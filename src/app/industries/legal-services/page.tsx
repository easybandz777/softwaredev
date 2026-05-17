import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Scale, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Legal Services Software Development | QUANT LAB USA",
    description:
        "Custom legal software — matter management, intake automation, e-signature, conflict checks, IOLTA-aware billing, document automation. By QUANT LAB USA.",
    slug: "industries/legal-services",
    image: "/og-services.png",
    type: "article",
});

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Custom Software for Legal Services",
    url: "https://quantlabusa.dev/industries/legal-services",
    description:
        "Custom legal software — matter management, intake automation, e-signature, conflict checks, IOLTA-aware billing, and document automation for solo, boutique, and mid-market firms.",
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
        { "@type": "ListItem", position: 3, name: "Legal Services", item: "https://quantlabusa.dev/industries/legal-services" },
    ],
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Legal Services Software Development",
    name: "Custom Software Development for Law Firms and Legal Operations",
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Custom legal software development — intake automation, matter management, document automation, e-signature workflows, conflict checks, IOLTA-aware billing, and litigation analytics for solo, boutique, and mid-market firms.",
    url: "https://quantlabusa.dev/industries/legal-services",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Why is legal services treated as a special case for software development?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Three pressures converge. First, the data is privileged. Attorney-client communications, work product, and matter data are subject to confidentiality rules that exceed almost every other industry's privacy obligations. Second, the regulatory chain is unusual: state bar rules on advertising, fee splitting, unauthorized practice of law, IOLTA accounting, ABA Model Rules 1.6 and 5.3 on technology competence and supervision of non-lawyer assistants, conflict-check duties, and increasing state-level guidance on generative AI in legal work. Third, the existing systems (Clio, MyCase, PracticePanther) are built for a generalist firm — but most growing practices have specialty workflows the platforms cannot model cleanly.",
            },
        },
        {
            "@type": "Question",
            name: "Can you integrate with Clio, MyCase, or PracticePanther?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, where the platform exposes an API. Clio has the most complete REST API of the three — we typically build the lead capture, intake, and matter-launch surface on top of Clio while keeping the matter and billing system inside Clio. MyCase and PracticePanther integrations are more limited; we work with what each platform exposes.",
            },
        },
        {
            "@type": "Question",
            name: "How do you handle IOLTA and trust accounting?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We do not replace trust accounting software — that work belongs in a system built for the bar's three-way reconciliation rules. We do build the surrounding workflow: retainer intake, trust-deposit capture, fee-application authorization, and audit-grade logging that ties into the firm's trust accounting platform.",
            },
        },
        {
            "@type": "Question",
            name: "Can you build for plaintiff or mass-tort firms with high intake volume?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. High-volume intake is where custom pays back fastest. We build the lead-capture funnel, automated qualification scoring (often with OpenAI structured extraction), conflict screening, retainer e-signature, and matter-creation handoff into the case management platform. The Mass-tort or PI practice gets a real pipeline instead of a 60-message email thread.",
            },
        },
        {
            "@type": "Question",
            name: "What does a $25,000 legal services build look like?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A focused intake-to-matter flow — modern landing page with conversion-optimized intake, structured questionnaire with conditional logic, e-signature retainer, and handoff into Clio or the firm's case management. Four to eight weeks.",
            },
        },
        {
            "@type": "Question",
            name: "How do you handle generative AI in legal workflows safely?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Carefully. ABA Formal Opinion 512 and recent state-bar guidance require lawyer supervision, accuracy verification, and confidentiality safeguards. We default to private-tenant LLM endpoints (Azure OpenAI, AWS Bedrock with custom guardrails), prompt-isolation between matters, no training-data sharing, and human review checkpoints on every output that leaves the firm.",
            },
        },
        {
            "@type": "Question",
            name: "Do you build for solos, boutiques, or larger firms?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "All three, with different scopes. Solos and small firms typically need a focused intake automation and document-generation tool. Boutiques need a practice-area-specific workflow (estate planning intake, immigration case status, employment-law document pipeline). Mid-market firms need internal tooling that the platforms (Clio, MyCase) cannot model cleanly — conflict checking on complex corporate structures, lateral attorney intake, or matter-budget governance.",
            },
        },
        {
            "@type": "Question",
            name: "How do you handle e-signature and document authenticity?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We integrate DocuSign, HelloSign (now Dropbox Sign), or Adobe Sign for binding signatures. Every signature event ties back to an audit-grade event log with IP, user-agent, and timestamp, mapped to the matter record. For court filings or notarized documents, we work with platforms like Notarize and Stavvy where remote online notarization is in scope.",
            },
        },
    ],
};

export default function LegalServicesIndustryPage() {
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
                        <li className="text-gray-300">Legal Services</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-slate-500 to-zinc-400 mb-6">
                        <Scale className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software for Law Firms & Legal Operations
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Intake automation, matter management, document workflows, e-signature, and IOLTA-aware billing — built for solo firms, boutiques, and mid-market practices that need software fitted to the way they actually work.
                    </p>
                    <ConsultationCTA label="Scope a Legal Build" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why legal services is a special case</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Legal work combines three pressures that almost no other industry has at once. The data is privileged. Attorney-client communications, work product, and matter data are subject to confidentiality rules that exceed almost every other industry&apos;s privacy obligations. A vendor learning about your data model from a stack-trace email is a malpractice risk, not a customer-service issue. Second, the regulatory chain is unusually wide and unusually personal. State bar rules on advertising, fee splitting, unauthorized practice of law, IOLTA accounting, ABA Model Rules 1.6 and 5.3, conflict-check duties, and the rapidly evolving state-level guidance on generative AI in legal work all carry direct disciplinary consequences for the lawyer, not just the firm.
                        </p>
                        <p>
                            Third, the integration surface is awkward. Clio, MyCase, PracticePanther, Smokeball, Filevine, and a handful of practice-area-specific platforms each implement intake, document automation, conflict checking, and trust accounting in their own way. A boutique with a specific intake workflow finds the platforms cover 70% of what they need and force the other 30% into spreadsheets and email. We build that other 30% directly, leaving the matter and billing system inside the platform that does it well.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build for law firms</h2>
                    <ul className="space-y-3">
                        {[
                            "Lead-to-matter intake automation — landing pages, qualification scoring, conflict screening, retainer e-signature",
                            "Practice-area document automation — estate planning packages, immigration filings, employment agreements, real estate closing documents",
                            "Matter management overlays on Clio or MyCase — task templates, deadline calendaring, status dashboards",
                            "E-signature and document authenticity workflows with DocuSign, Adobe Sign, or HelloSign integration",
                            "Conflict-check tooling for boutiques with corporate-structure or family-relationship complexity",
                            "Litigation analytics and case-tracking dashboards",
                            "Client portals — case status, document sharing, secure messaging, fee history",
                            "Trust-deposit and retainer-application workflow with IOLTA accounting integration",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-slate-300 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Common legal services projects we scope</h2>
                    <ul className="space-y-3">
                        {[
                            { t: "Plaintiff or PI intake funnel", d: "High-volume lead capture, automated qualification with OpenAI structured extraction, conflict screening, retainer e-signature, and matter handoff into Clio or Filevine. Cuts intake-to-matter time from days to hours." },
                            { t: "Estate planning document package", d: "Guided intake (will, trust, healthcare directive, financial POA), conditional drafting, attorney review checkpoints, and final document generation with e-signature. State-specific clauses included." },
                            { t: "Immigration case-status portal", d: "Client-facing portal showing current stage, RFE deadlines, document upload, and translation-status. Internal queue for paralegals with USCIS receipt and approval tracking." },
                            { t: "Employment-law agreement workflow", d: "Severance, offer letter, NDA, and consulting agreement generation with attorney-review checkpoints and tracked-changes export." },
                            { t: "Boutique conflict-checking system", d: "Custom conflict-check tool for firms with complex corporate ownership graphs, family-office relationships, or multi-jurisdictional matters that the platforms cannot model cleanly." },
                            { t: "Class action or mass tort claimant portal", d: "Claimant intake, eligibility scoring, documentation requirements tracking, settlement-distribution status, and tax-form (1099) handling." },
                            { t: "Real estate closing coordination", d: "Buyer/seller/lender/title coordination, document checklist, closing-date calendar, and integrated remote online notarization where in scope." },
                            { t: "Lateral attorney onboarding", d: "Internal tool for capturing new attorney intake, conflict ingest from prior firm, book of business import, and IP/restrictive-covenant due diligence." },
                            { t: "Matter-budget governance dashboard", d: "Mid-market internal tool for matter-budget approvals, scope creep alerts, and partner sign-off on phase transitions." },
                            { t: "Firm marketing site with content engine", d: "Practice-area-specific content marketing site with structured intake forms, attorney-bio routing, and TCPA-aware lead handling." },
                        ].map((item) => (
                            <li key={item.t} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-slate-300 flex-shrink-0 mt-0.5" />
                                <span><span className="text-white font-semibold">{item.t}.</span> {item.d}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Compliance and security considerations</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            <span className="text-white font-semibold">ABA Model Rules 1.1, 1.6, and 5.3.</span> Technology competence (1.1), confidentiality of information (1.6), and supervision of non-lawyer assistants including vendors (5.3) all apply to the engineering team that touches firm data. We sign confidentiality agreements that exceed standard NDAs and segregate access at the matter level.
                        </p>
                        <p>
                            <span className="text-white font-semibold">State bar advertising rules.</span> Lawyer-advertising regulation varies wildly by state — TCPA-aware lead handling, mandatory disclosures, and prohibition on certain testimonial structures all live in different state rules. We build forms and content modules that can be tuned per jurisdiction.
                        </p>
                        <p>
                            <span className="text-white font-semibold">IOLTA and trust accounting.</span> Three-way reconciliation, no-commingling, fee-application authorization, and audit trails. We integrate with the firm&apos;s IOLTA accounting system rather than replacing it; we provide the surrounding workflow and evidence trail.
                        </p>
                        <p>
                            <span className="text-white font-semibold">Confidentiality and segregation of matter data.</span> Row-level access control tied to the matter and the user&apos;s role on that matter. Audit log captures every read and write. PII and confidential data minimized in logs and observability.
                        </p>
                        <p>
                            <span className="text-white font-semibold">Generative AI in legal workflows.</span> ABA Formal Opinion 512 and state-bar opinions (CA, NY, FL, and growing) require lawyer supervision, accuracy verification, and confidentiality safeguards. We default to private-tenant LLM endpoints (Azure OpenAI, AWS Bedrock with custom guardrails), prompt isolation between matters, no training-data sharing, and human review checkpoints.
                        </p>
                        <p>
                            <span className="text-white font-semibold">SOC 2 and cyber insurance.</span> Larger firms and corporate clients increasingly require SOC 2. Our builds align with Common Criteria; cyber-insurance underwriters get pentest reports formatted to their checklists. See <Link href="/services/penetration-testing" className="text-slate-300 hover:underline">penetration testing</Link> for details.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech stack we recommend for legal services</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Next.js 15 or 16 with React 19 and TypeScript for the web layer. Postgres on Neon or RDS for the system of record. Prisma or Drizzle as the ORM. Clio API or MyCase API as the matter-management system of record where the firm is already on a platform; otherwise a custom matter model with row-level access control. DocuSign or Adobe Sign for binding signatures. AWS S3 with server-side encryption and bucket policy lockdown for matter documents.
                        </p>
                        <p>
                            For generative AI features, Azure OpenAI Service or AWS Bedrock with private tenancy, prompt isolation, and explicit no-training contracts. Output verification with a citation-checker step before any drafted text reaches a client. Auth via Clerk or Auth0 with MFA-required on every attorney and paralegal surface. Logging via Better Stack or Datadog with PII/PHI/privileged-info redaction. Hosting on Vercel for the web tier; the matter document store stays in a hardened VPC.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pricing transparency</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { tier: "$25K", title: "Focused intake or document automation", body: "Lead capture, qualification scoring, e-signature retainer, and a single document-generation flow tied into Clio or the firm's case management. 4 to 8 weeks." },
                            { tier: "$60K", title: "Practice-area workflow platform", body: "Full intake-to-matter pipeline, document automation for the practice area (estate planning, immigration, employment), client portal, and conflict-check integration. 12 to 18 weeks." },
                            { tier: "$150K+", title: "Boutique or mid-market firm platform", body: "Multi-practice intake, matter-budget governance, lateral onboarding, AI-assisted drafting with supervision checkpoints, and SOC 2-mapped controls. 18 to 32 weeks." },
                        ].map((band) => (
                            <div key={band.tier} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <div className="text-slate-300 font-mono text-sm mb-2">{band.tier}</div>
                                <h3 className="text-white font-semibold mb-2">{band.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{band.body}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                        Discovery is paid separately at $2,500 and creditable against any full engagement. <Link href="/contact" className="text-slate-300 hover:underline">Book a scope call</Link> to walk through your practice areas, your case management platform, and your intake volume.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pitfalls we have seen</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Three patterns recur. First, the firm tries to replace Clio or MyCase. Almost always the wrong move — those platforms are good at matter and billing, and the bar-aware accounting is genuinely hard. The right scope is to keep the system of record where it is and build the workflow the platform does not handle. The economic case is clearer and the rollout is dramatically less painful.
                        </p>
                        <p>
                            Second, generative AI gets bolted on without supervision controls. A drafting tool ships, a paralegal stops reading the output carefully, and the first time a hallucinated citation makes it into a filing the firm has a malpractice problem. We bake supervision checkpoints in: every AI-drafted text passes through a citation-verification step and a named human reviewer before any client-facing release.
                        </p>
                        <p>
                            Third, intake automation is built without conflict screening. A firm shoots up the lead volume by 5x and discovers two months later that conflicts are slipping through because the intake form did not capture the parties needed to run the conflict check. Conflict screening belongs at the lead stage, not at the matter-open stage.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            { q: "Why is legal services treated as a special case for software development?", a: "The data is privileged, the regulatory chain (state bar rules, ABA Model Rules, IOLTA accounting, generative AI guidance) carries direct disciplinary consequences for the lawyer, and the existing platforms (Clio, MyCase) cover the generalist case but leave practice-specific workflows in spreadsheets and email." },
                            { q: "Can you integrate with Clio, MyCase, or PracticePanther?", a: "Yes, where the platform exposes an API. Clio has the most complete REST API. We build the intake and workflow surface on top while keeping matter and billing inside the platform." },
                            { q: "How do you handle IOLTA and trust accounting?", a: "We do not replace trust accounting — that work belongs in a platform built for the bar's three-way reconciliation rules. We build the surrounding workflow: retainer intake, trust-deposit capture, fee-application authorization, and audit-grade logging." },
                            { q: "Can you build for plaintiff or mass-tort firms with high intake volume?", a: "Yes. High-volume intake is where custom pays back fastest. Lead capture, automated qualification scoring, conflict screening, retainer e-signature, and matter-creation handoff." },
                            { q: "What does a $25,000 legal services build look like?", a: "A focused intake-to-matter flow — modern landing page, structured questionnaire with conditional logic, e-signature retainer, and handoff into Clio. 4 to 8 weeks." },
                            { q: "How do you handle generative AI in legal workflows safely?", a: "Private-tenant LLM endpoints (Azure OpenAI, AWS Bedrock with guardrails), prompt isolation between matters, no training-data sharing, and human review checkpoints on every output that leaves the firm." },
                            { q: "Do you build for solos, boutiques, or larger firms?", a: "All three. Solos need focused intake automation and document generation. Boutiques need practice-area-specific workflows. Mid-market firms need internal tooling for conflict checking, lateral intake, and matter-budget governance." },
                            { q: "How do you handle e-signature and document authenticity?", a: "DocuSign, Adobe Sign, or HelloSign for binding signatures, with every signature event tied to an audit-grade event log mapped to the matter record." },
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
                            { slug: "custom-crm-development", title: "Custom CRM Development", desc: "Lead-to-matter pipeline, qualification scoring, and intake automation tailored to your practice areas." },
                            { slug: "web-applications", title: "Web Applications", desc: "Client portals, attorney dashboards, and firm marketing sites." },
                            { slug: "penetration-testing", title: "Penetration Testing", desc: "SOC 2 and cyber-insurance-ready pentest reports for firms handling sensitive client data." },
                            { slug: "custom-business-software", title: "Custom Business Software", desc: "Document automation, conflict-check tooling, and matter governance internal tools." },
                            { slug: "stripe-integration", title: "Custom Stripe Integration", desc: "Retainer collection, fee billing, and reconciliation with the firm's accounting system." },
                            { slug: "mitre-attack-assessment", title: "MITRE ATT&CK Assessment", desc: "Threat-group simulations for firms targeted by business-email-compromise actors." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-slate-300/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-slate-300 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["compliance","internal-tools","saas"]}
                        heading="Legal-services software reading"
                    />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Build the workflow your case management cannot.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or <Link href="/contact" className="text-slate-300 hover:underline">book a 20-minute scope call</Link>. Mutual confidentiality agreement signed before discovery. Founder-led from intake to handoff.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
