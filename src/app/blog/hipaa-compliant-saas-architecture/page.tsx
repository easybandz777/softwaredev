import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { articleMetadata } from "@/lib/seoMeta";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { ArrowRight, Check, HeartPulse } from "lucide-react";

const SLUG = "hipaa-compliant-saas-architecture";
const TITLE = "HIPAA-Compliant SaaS Architecture: A Builder's Guide (2026)";
const DESCRIPTION =
    "Engineering reference for building HIPAA-compliant SaaS in 2026. BAAs, encryption, audit logs, access controls, infrastructure choices, and the gotchas that fail audits.";
const PUBLISHED_ISO = "2026-05-12";

export const metadata: Metadata = articleMetadata({
    title: TITLE,
    description: DESCRIPTION,
    slug: `/blog/${SLUG}`,
    image: "/og-security.png",
    imageAlt: "HIPAA-compliant SaaS architecture builder's guide 2026",
    publishedTime: PUBLISHED_ISO,
    modifiedTime: PUBLISHED_ISO,
    authors: ["Bill Beltz"],
    keywords: [
        "HIPAA compliant SaaS",
        "HIPAA architecture",
        "PHI encryption",
        "BAA",
        "healthcare SaaS",
    ],
});

const faqItems = [
    {
        q: "What does HIPAA-compliant SaaS actually mean?",
        a: "HIPAA does not certify software. A SaaS is 'HIPAA-compliant' when it implements the Security Rule's administrative, physical, and technical safeguards, has signed Business Associate Agreements (BAAs) with every vendor that touches PHI, and can prove the controls through documentation, audit logs, and access policies. Compliance is a posture and a paper trail, not a label.",
    },
    {
        q: "What is a Business Associate Agreement (BAA)?",
        a: "A BAA is a contract between a Covered Entity (your healthcare customer) and a Business Associate (you, the SaaS) that allocates HIPAA responsibilities and binds the BA to the same Security and Privacy Rule obligations. You sign BAAs upstream with your healthcare customers and downstream with every infrastructure vendor that processes PHI on your behalf — AWS, Vercel, Sentry, OpenAI, Twilio, etc.",
    },
    {
        q: "Which cloud providers offer BAAs?",
        a: "AWS, GCP, Azure all offer BAAs for their HIPAA-eligible service lists. Vercel offers a BAA on Enterprise plans. Cloudflare offers a BAA on Enterprise. Render offers a BAA on Team plans and above. Supabase offers a BAA on Team and Enterprise. Stripe offers a BAA. The trap: not all services within a provider are BAA-eligible — verify the specific services you use are on the list.",
    },
    {
        q: "Do I need to encrypt PHI at rest?",
        a: "Functionally yes, even though the Security Rule technically calls encryption 'addressable' rather than 'required.' Most BAAs and most state laws make encryption non-negotiable. Use AES-256 at the storage layer (database TDE or volume encryption) plus application-layer encryption for sensitive fields like SSN and clinical notes. Key management via AWS KMS, GCP KMS, or HashiCorp Vault.",
    },
    {
        q: "Does HIPAA require multi-factor authentication?",
        a: "Yes, in practice. The Security Rule requires unique user IDs and 'reasonable and appropriate' access controls. Every audit we have seen demands MFA on workforce member access to PHI systems and SSO with MFA for admin access. Skip MFA and you will fail any reasonable risk assessment.",
    },
    {
        q: "Can I use OpenAI or other LLM APIs with PHI?",
        a: "OpenAI offers a BAA on Enterprise/API tiers (with the zero-data-retention policy enabled). Anthropic offers BAAs through AWS Bedrock. Microsoft Copilot has Azure OpenAI with BAA. Self-hosted LLMs (Llama, Mistral) avoid the third-party question entirely. Do not pass PHI to any model API without a signed BAA covering it.",
    },
    {
        q: "What about logging — can I log PHI?",
        a: "Logs that contain PHI are themselves PHI. They need encryption, access controls, audit trails, and BAA coverage from your logging vendor. Better practice: redact PHI before logs leave your application. Use structured logging with explicit field allowlists and drop unknown fields by default.",
    },
    {
        q: "How long do I need to retain audit logs?",
        a: "HIPAA requires six years of retention for security incident documentation. Most teams retain access logs and audit trails for the same six years to be safe. Storage cost is trivial relative to the cost of being unable to produce an audit trail during an incident response.",
    },
    {
        q: "What is the minimum-necessary standard?",
        a: "The Privacy Rule requires that PHI access be limited to the minimum necessary to accomplish the intended purpose. In software, this translates to role-based access controls with granular permissions, just-in-time elevation for support staff, and audit logs that capture both legitimate and anomalous access patterns.",
    },
    {
        q: "Do I need annual penetration testing for HIPAA?",
        a: "HIPAA does not name 'penetration testing' explicitly, but it requires 'regular' evaluation and risk analysis. Every healthcare auditor we have worked with expects annual penetration tests on PHI-handling systems. Plan on $15K to $40K annually for a single application scope. See our penetration test cost guide for ranges.",
    },
    {
        q: "What is HITRUST and do I need it?",
        a: "HITRUST CSF is a control framework that maps HIPAA, NIST, ISO, and other standards. HITRUST certification is more expensive and rigorous than self-attestation HIPAA compliance, and many large hospital systems prefer or require it from vendors. Plan on $50K to $200K and 9 to 18 months for HITRUST. Pursue it if your buyers demand it; not before.",
    },
    {
        q: "How long does HIPAA compliance take for a new SaaS?",
        a: "From cold start to defensible HIPAA posture: 3 to 6 months for a focused SaaS with a clean stack. The work splits into engineering (encryption, access controls, audit logs, BAA-eligible infrastructure), legal (BAA templates, policy documentation), and operational (workforce training, incident response, risk analysis). We build clients to HIPAA readiness as part of every healthcare engagement.",
    },
];

const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: "HIPAA-Compliant SaaS Architecture", url: `/blog/${SLUG}` },
];

const articleLd = articleSchema({
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: PUBLISHED_ISO,
    image: "https://quantlabusa.dev/og-security.png",
    slug: SLUG,
    section: "Healthcare & Compliance",
    keywords: ["HIPAA", "healthcare SaaS", "PHI", "BAA", "compliance architecture"],
});
const breadcrumbLd = breadcrumbSchema(breadcrumbItems, `/blog/${SLUG}`);
const faqLd = faqSchema(faqItems);

export default function HipaaSaaSArchitecturePage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

            <div className="container mx-auto px-6 max-w-4xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/blog" className="hover:text-sky-400 transition-colors">Blog</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">HIPAA-compliant SaaS architecture</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <HeartPulse className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs uppercase tracking-widest text-sky-400 mb-3">MOFU Architecture Reference · 2026</p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                        HIPAA-Compliant SaaS Architecture: A Builder's Guide
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed mb-6 max-w-2xl">
                        Engineering reference for shipping a HIPAA-defensible SaaS in 2026. BAAs, encryption strategy, audit logging, access controls, BAA-eligible infrastructure, and the gotchas that fail audits.
                    </p>
                    <p className="text-sm text-gray-500 mb-8">
                        By <Link href="/about" className="text-sky-400 hover:underline">Bill Beltz</Link>, founder of QUANT LAB USA INC · Published May 12, 2026
                    </p>
                    <ConsultationCTA label="Talk to a HIPAA-Aware Engineer" service="Custom Business Software" source="blog-hipaa-architecture" />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Quick answer: what does HIPAA-compliant SaaS architecture require?</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>Six pillars: signed BAAs with every vendor that touches PHI, encryption at rest (AES-256) and in transit (TLS 1.2+), unique user IDs with MFA enforced, role-based access with minimum-necessary scoping, immutable audit logs retained for six years, and a written incident response and breach notification plan. Build on BAA-eligible infrastructure (AWS, GCP, Azure, Vercel Enterprise, Render Team+), redact PHI from logs at the application boundary, and design for "show your work" — auditors care about evidence as much as controls.</strong>
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-5">
                        <p>
                            HIPAA-compliant SaaS is not a label you buy. It is a posture you build, document, and prove. The Security Rule's safeguards are deliberately principles-based, which means two clean implementations can both be defensible and look nothing alike. This guide is the architecture we ship at <Link href="/" className="text-sky-400 hover:underline">QUANT LAB USA</Link> when the build touches PHI.
                        </p>
                        <p>
                            Background: <Link href="/glossary/what-is-hipaa-compliance" className="text-sky-400 hover:underline">What is HIPAA compliance?</Link> and our <Link href="/industries/healthcare" className="text-sky-400 hover:underline">healthcare industry page</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">The six architectural pillars</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-3">
                        <ol className="list-decimal pl-6 space-y-3">
                            <li><strong>BAA coverage end-to-end.</strong> Every vendor in the PHI data path has a signed BAA. No exceptions.</li>
                            <li><strong>Encryption.</strong> At rest (AES-256, KMS-managed keys) and in transit (TLS 1.2+, modern ciphers).</li>
                            <li><strong>Identity and access.</strong> Unique IDs, MFA on workforce access, SSO for admin, RBAC with minimum-necessary.</li>
                            <li><strong>Audit logging.</strong> Immutable, six-year retention, anomaly alerting.</li>
                            <li><strong>Incident response.</strong> Written plan, breach notification timeline (60 days), tabletop exercise annually.</li>
                            <li><strong>Risk analysis.</strong> Annual SRA, with documented decisions on addressable vs required controls.</li>
                        </ol>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">BAA-eligible infrastructure stack (2026)</h2>
                    <div className="overflow-x-auto mt-4">
                        <table className="w-full text-sm text-left border border-white/10 rounded-xl overflow-hidden">
                            <thead className="bg-[#0d1526] text-white">
                                <tr>
                                    <th className="px-4 py-3 border-b border-white/10">Layer</th>
                                    <th className="px-4 py-3 border-b border-white/10">BAA-eligible options</th>
                                    <th className="px-4 py-3 border-b border-white/10">Notes</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Hosting</td><td className="px-4 py-3">AWS, GCP, Azure, Vercel Enterprise, Render Team+, Fly.io</td><td className="px-4 py-3">Cloudflare BAA on Enterprise only</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Database</td><td className="px-4 py-3">AWS RDS, GCP CloudSQL, Supabase Team, Neon Business</td><td className="px-4 py-3">Verify the specific Postgres tier is BAA-eligible</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Email</td><td className="px-4 py-3">Postmark with BAA, SendGrid HIPAA, Paubox</td><td className="px-4 py-3">Standard SendGrid is NOT covered</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">SMS / Telephony</td><td className="px-4 py-3">Twilio with BAA, Bandwidth</td><td className="px-4 py-3">Twilio BAA is opt-in via account team</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Payments</td><td className="px-4 py-3">Stripe with BAA</td><td className="px-4 py-3">Standard Stripe accounts already have BAA available</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Logging / observability</td><td className="px-4 py-3">Datadog (HIPAA tier), Sentry Business+, AWS CloudWatch</td><td className="px-4 py-3">Verify before sending PHI to any observability tool</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Auth</td><td className="px-4 py-3">Auth0, AWS Cognito, Okta, Clerk (with BAA)</td><td className="px-4 py-3">Clerk BAA is on Enterprise</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">File storage</td><td className="px-4 py-3">AWS S3, GCP Cloud Storage, Azure Blob</td><td className="px-4 py-3">Cloudflare R2 is BAA on Enterprise</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">LLM / AI</td><td className="px-4 py-3">OpenAI Enterprise, Anthropic via AWS Bedrock, Azure OpenAI</td><td className="px-4 py-3">Self-host Llama/Mistral to avoid the question</td></tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Encryption strategy</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Layer your encryption. The standard pattern we ship:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Volume / disk:</strong> Provider-managed (EBS encryption, GCP persistent disk encryption). Covers backups, snapshots automatically.</li>
                            <li><strong>Database TDE:</strong> Postgres TDE via the cloud provider's managed offering. Encrypts the data files on disk.</li>
                            <li><strong>Application-layer column encryption:</strong> For sensitive fields like SSN, DOB, clinical notes. Use envelope encryption with KMS-managed data encryption keys.</li>
                            <li><strong>TLS everywhere:</strong> TLS 1.2 minimum (TLS 1.3 preferred), HSTS with preload, no SSLv3/TLS 1.0/1.1.</li>
                            <li><strong>Backup encryption:</strong> Encrypted with separate keys from production. Test restore quarterly.</li>
                            <li><strong>Key management:</strong> AWS KMS, GCP KMS, Azure Key Vault, or HashiCorp Vault. Annual key rotation. Audit log for every key access.</li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Identity, access, and the minimum-necessary standard</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Access controls are the most-cited HIPAA finding category. Build them at the data layer, not the UI layer. UI-only hiding is a recurring audit fail.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Unique user IDs.</strong> No shared accounts. Service accounts get unique IDs too.</li>
                            <li><strong>MFA enforced.</strong> SSO with MFA for all workforce access. Hardware keys for admins where feasible.</li>
                            <li><strong>RBAC at the database.</strong> Use Postgres row-level security (RLS) or equivalent. Application middleware is a backup, not the primary boundary. See our <Link href="/blog/building-multi-tenant-saas-postgres-rls" className="text-sky-400 hover:underline">multi-tenant SaaS with Postgres RLS guide</Link>.</li>
                            <li><strong>Just-in-time elevation.</strong> Support staff request elevated access per-incident with reason capture and time limits.</li>
                            <li><strong>Termination automation.</strong> When workforce members offboard, all access revokes within 24 hours, ideally same day.</li>
                            <li><strong>Privileged session recording.</strong> Database admin sessions, prod shell sessions, captured for review.</li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Audit logging architecture</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Audit logs are how you prove the program works. The pattern we ship:
                        </p>
                        <ol className="list-decimal pl-6 space-y-2">
                            <li>Application emits structured audit events on every PHI access (read, create, update, delete).</li>
                            <li>Events written to an append-only Postgres table with row-level immutability triggers.</li>
                            <li>Events also forwarded to long-term archive (S3 Glacier with object-lock, BAA covered).</li>
                            <li>Six-year retention minimum. Many programs keep ten.</li>
                            <li>Real-time anomaly detection on unusual access patterns (volume spikes, off-hours access, geographic outliers).</li>
                            <li>Quarterly audit log review by the privacy officer. Documented.</li>
                        </ol>
                        <p>
                            What to log: actor identity, action, resource ID, timestamp, IP, user agent, outcome (success/fail), and request reason for elevated-access flows. Do NOT log the PHI itself unless absolutely necessary — log the resource ID instead.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">PHI redaction at the application boundary</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            The single most common HIPAA architecture mistake we see: PHI leaks into logs, error reports, and third-party analytics. Build redaction at the application boundary so PHI does not escape into systems without BAA coverage.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Structured logging with explicit field allowlists. Unknown fields drop by default.</li>
                            <li>Pre-Sentry middleware that scrubs request bodies and stack-trace variables.</li>
                            <li>No client-side telemetry of patient inputs. PostHog and similar require careful field-level scrubbing.</li>
                            <li>Sanitize URL paths — patient IDs in URLs end up in CDN logs.</li>
                            <li>Audit your CDN and WAF logs. Cloudflare WAF logs without BAA coverage are a risk.</li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Incident response and breach notification</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            HIPAA mandates a 60-day breach notification window for impermissible disclosures affecting 500+ individuals. Have the plan written before you need it.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Defined incident classification (Sev 1/2/3) with response timelines.</li>
                            <li>Named incident commander role with delegation.</li>
                            <li>Breach assessment protocol — what triggers the 60-day clock.</li>
                            <li>OCR notification template ready.</li>
                            <li>Individual notification template ready.</li>
                            <li>Annual tabletop exercise. Document it.</li>
                            <li>Forensic readiness — log retention, evidence collection procedure.</li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Risk analysis (SRA): the unsexy backbone</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            The Security Risk Analysis is the most-skipped HIPAA requirement and the easiest finding for an auditor. Annual SRA, documented, with risk treatment decisions, owners, and remediation timelines.
                        </p>
                        <p>
                            We use NIST 800-30 as the SRA methodology. Threats and vulnerabilities are inventoried, likelihood and impact scored, residual risk calculated after compensating controls, and treatment decisions logged. The output is a 30-50 page document that auditors love.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Penetration testing and vulnerability management</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            HIPAA does not name penetration testing explicitly, but auditors expect it. Plan on:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Annual web application penetration test. Budget $15K to $40K. See our <Link href="/blog/penetration-test-cost-2026" className="text-sky-400 hover:underline">pentest cost guide</Link>.</li>
                            <li>Quarterly authenticated vulnerability scans.</li>
                            <li>Dependency scanning in CI (Snyk, Dependabot, Trivy).</li>
                            <li>SAST in CI for code review automation.</li>
                            <li>Documented patch SLA (critical &lt; 7 days, high &lt; 30 days).</li>
                        </ul>
                        <p>
                            See our <Link href="/blog/what-is-a-pen-test-vs-vulnerability-scan" className="text-sky-400 hover:underline">pentest vs scan explainer</Link> for the distinction.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">When to consider HITRUST</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            HITRUST CSF is a control framework that maps HIPAA, NIST, ISO, and others. Many large hospital systems prefer or require HITRUST i1 or r2 certification from vendors. Plan on $50K to $200K and 9 to 18 months for full HITRUST r2.
                        </p>
                        <p>
                            Pursue HITRUST when buyers are demanding it. Do not pursue it before then — HIPAA self-attestation plus SOC 2 Type II is usually sufficient for most healthcare buyers.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">FAQ</h2>
                    <div className="space-y-6">
                        {faqItems.map((item) => (
                            <div key={item.q} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                                <p className="text-gray-300 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Related reading and next steps</h2>
                    <ul className="space-y-3">
                        {[
                            { href: "/services/custom-business-software", label: "Custom Business Software service" },
                            { href: "/services/saas-platform-development", label: "SaaS Platform Development" },
                            { href: "/services/penetration-testing", label: "Penetration Testing service" },
                            { href: "/industries/healthcare", label: "Healthcare industry expertise" },
                            { href: "/blog/building-multi-tenant-saas-postgres-rls", label: "Multi-tenant SaaS with Postgres RLS" },
                            { href: "/blog/penetration-test-cost-2026", label: "Penetration Test Cost 2026" },
                            { href: "/blog/soc2-pentest-prep-guide-2026", label: "SOC 2 Pentest Prep Guide" },
                            { href: "/blog/what-is-a-pen-test-vs-vulnerability-scan", label: "Pentest vs Vulnerability Scan" },
                            { href: "/glossary/what-is-hipaa-compliance", label: "What is HIPAA compliance?" },
                            { href: "/glossary/what-is-zero-trust", label: "What is Zero Trust?" },
                            { href: "/work/regional-medical-billing", label: "Case study — Regional Medical Billing" },
                            { href: "/contact", label: "Talk to an engineer" },
                        ].map((l) => (
                            <li key={l.href} className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-sky-400 flex-shrink-0" />
                                <Link href={l.href} className="text-sky-400 hover:underline">{l.label}</Link>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Build HIPAA-ready from day one.</h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Free 30-minute architecture review. We will walk through your stack, BAA coverage, and risk posture. If you are about to ship something that fails an audit, you want to know now.
                        </p>
                        <ConsultationCTA label="Book Architecture Review" service="Custom Business Software" source="blog-hipaa-cta" />
                        <div className="mt-6 text-sm text-gray-400">
                            Or call Bill at <a href="tel:+17706521282" className="text-sky-400 hover:underline">(770) 652-1282</a>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mt-12">
                    <div className="flex items-center justify-between text-sm text-gray-400">
                        <Link href="/blog" className="hover:text-sky-400 inline-flex items-center gap-1">
                            <ArrowRight className="w-3 h-3 rotate-180" /> All blog posts
                        </Link>
                        <span>Updated May 12, 2026</span>
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
