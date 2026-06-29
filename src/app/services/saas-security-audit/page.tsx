import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { ShieldCheck, Check, ArrowRight, MapPin } from "lucide-react";
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
    title: "SaaS Security Audit | App, Cloud & Multi-Tenant | QUANT LAB USA",
    description:
        "Independent SaaS security audit — app pentest, cloud config, multi-tenant isolation, and SOC 2 readiness. Findings with proof and fixes. Call (770) 652-1282.",
    slug: "services/saas-security-audit",
    image: "/og-services.png",
    type: "article",
});

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "SaaS Security Audit",
    name: "SaaS Security Audit and Multi-Tenant Penetration Test",
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Independent security audit for SaaS products covering application penetration testing, multi-tenant data isolation, authentication and authorization, cloud configuration, secrets management, and SOC 2 control readiness. Every finding is reproduced with proof and paired with a concrete remediation.",
    url: "https://quantlabusa.dev/services/saas-security-audit",
    offers: {
        "@type": "Offer",
        priceRange: "$7,000-$45,000",
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
        { "@type": "ListItem", position: 3, name: "SaaS Security Audit", item: "https://quantlabusa.dev/services/saas-security-audit" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is the difference between a SaaS security audit and a generic pentest?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A SaaS audit goes beyond the perimeter. It tests the things unique to multi-tenant software — whether one tenant can reach another tenant's data, whether role and permission checks hold on the server, how secrets and keys are managed, and whether the cloud configuration leaks anything. A generic pentest checks the front door; a SaaS audit checks every door between customers.",
            },
        },
        {
            "@type": "Question",
            name: "Will this help us pass a SOC 2 audit or a customer security questionnaire?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Findings map to SOC 2 Common Criteria and to the questions enterprise buyers ask in security questionnaires. You get a clean report you can share with auditors and prospects, and a remediation list that closes the gaps before they become blockers in a deal.",
            },
        },
        {
            "@type": "Question",
            name: "Do you test against production or a staging environment?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Usually a staging or pre-production environment that mirrors production, seeded with test tenants we control. Where production testing is required, we coordinate a window, rate-limit our activity, and avoid destructive checks. We never touch real customer data.",
            },
        },
        {
            "@type": "Question",
            name: "How do you make sure the findings are real and not just scanner noise?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Every finding is reproduced by hand with a proof-of-concept, a severity rating using CVSS, and the exact steps to trigger it. Automated scanning is a starting point, not the report. If we cannot demonstrate it, it does not go in as a vulnerability.",
            },
        },
        {
            "@type": "Question",
            name: "Do you help fix the issues or just report them?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Both. The report includes a prioritized remediation plan with concrete code-level guidance, and we offer a complimentary retest of fixed findings. Because we are also a software development firm, we can implement the fixes directly if you want us to.",
            },
        },
    ],
};

export default function SaaSSecurityAuditPage() {
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
                        <li className="text-gray-300">SaaS Security Audit</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-400 mb-6">
                        <ShieldCheck className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        SaaS Security Audit for Products That Hold Other People's Data
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        An independent, hands-on review of your application, tenant isolation, authentication, cloud configuration, and secrets — the parts of a SaaS that actually get breached. Every finding reproduced with proof and paired with a fix you can ship.
                    </p>
                    <ConsultationCTA label="Scope a Security Audit" service="SaaS Security Audit" source="services-saas-security-audit" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">The breach is almost never the front door</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            SaaS breaches rarely come from a kicked-in perimeter. They come from an authorization check that runs in the browser but not on the server, a tenant ID a user can change in a URL, an S3 bucket left public, an API key committed to a repository, or a password reset flow that leaks whether an account exists. These are the failures a multi-tenant product is uniquely exposed to, and they are exactly the failures a generic vulnerability scan walks right past.
                        </p>
                        <p>
                            A SaaS security audit is a structured, manual hunt for those failures. We log in as a tenant and try to reach another tenant's data. We tamper with every identifier the client sends. We map the auth and permission model and probe it from below. We read the cloud configuration and the secrets handling. The output is a report that tells you what an attacker would actually find — with proof — and a remediation plan that closes it.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What the audit covers</h2>
                    <ul className="space-y-3">
                        {[
                            "Multi-tenant data isolation — can one tenant read, write, or enumerate another tenant's records",
                            "Authentication — session handling, password reset, MFA, OAuth/SSO flows, and account enumeration",
                            "Authorization — broken object-level and function-level access control (IDOR, privilege escalation)",
                            "Application layer — injection, XSS, SSRF, request tampering, and the OWASP Top 10",
                            "API security — auth, rate limiting, mass assignment, and the OWASP API Top 10",
                            "Cloud configuration — IAM, storage buckets, security groups, public exposure, and logging gaps",
                            "Secrets management — keys in source, env handling, rotation, and over-scoped credentials",
                            "Business logic — abuse of trials, billing, invitations, and tenant provisioning flows",
                            "Dependency and supply-chain review — known-vulnerable packages and risky transitive deps",
                            "SOC 2 readiness mapping — findings tied to the Common Criteria auditors evaluate",
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
                            The audit starts with a scoping call and a quick architecture walkthrough so we understand the tenancy model, the trust boundaries, and what matters most to you. We provision test tenants we control, then work through a structured methodology that blends OWASP testing guides with the SaaS-specific checks that scanners miss. Findings are reproduced by hand, rated with CVSS, and written up so an engineer can fix them and an auditor can read them.
                        </p>
                        <p>
                            Scoping → testing window (1 to 3 weeks typical) → report and debrief call → complimentary retest of fixed findings. You get a developer-grade report, an executive summary, and a remediation plan prioritized by real-world risk.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tools &amp; standards</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            "OWASP Top 10 + ASVS",
                            "OWASP API Top 10",
                            "Burp Suite Pro",
                            "CVSS v3.1 scoring",
                            "MITRE ATT&CK mapping",
                            "Cloud config review (AWS/GCP)",
                            "Secrets scanning",
                            "Manual logic testing",
                            "SOC 2 CC mapping",
                        ].map((tool) => (
                            <div key={tool} className="rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 text-sm text-gray-300">
                                {tool}
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                        The same testing discipline runs through every <Link href="/services/web-app-pentest" className="text-indigo-400 hover:underline">web app pentest</Link>, <Link href="/services/penetration-testing" className="text-indigo-400 hover:underline">penetration test</Link>, and <Link href="/services/managed-security-services" className="text-indigo-400 hover:underline">managed security engagement</Link> we run.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why an independent audit matters</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The team that built the system shares its blind spots. An independent audit brings an attacker's eyes to assumptions the builders never questioned — the permission that was "obviously" safe, the tenant check that "always" runs, the bucket that was "only" for assets. That outside perspective is exactly what a SOC 2 auditor and an enterprise security reviewer want to see, and it is what turns a stalled deal into a signed one.
                        </p>
                        <p>
                            Because QUANT LAB USA also builds software, the report is not a wall of jargon you have to translate. Findings come with code-level guidance, and if you want the fixes implemented, we can do that too.
                        </p>
                        <p>
                            SaaS security audits served from <Link href="/software-development-macon-ga" className="text-indigo-400 hover:underline">Macon, GA</Link>, with clients across <Link href="/software-development-atlanta-ga" className="text-indigo-400 hover:underline">Atlanta</Link>, <Link href="/software-development-new-york-ny" className="text-indigo-400 hover:underline">New York</Link>, <Link href="/software-development-san-francisco-ca" className="text-indigo-400 hover:underline">San Francisco</Link>, and the rest of the US.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pricing</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Fixed-fee per engagement, scoped to the size and complexity of the product. Typical ranges:
                        </p>
                        <ul className="space-y-2 list-disc list-inside">
                            <li>Focused audit — single app, core tenant-isolation and auth review: $7k – $15k</li>
                            <li>Standard SaaS audit — app, API, authz, and cloud configuration: $14k – $28k</li>
                            <li>Comprehensive audit — full app, API, cloud, secrets, and logic testing: $25k – $45k</li>
                            <li>SOC 2 readiness audit mapped to the Common Criteria: $18k – $40k</li>
                            <li>Scoping and architecture review session: $1,500 flat</li>
                        </ul>
                        <p>
                            Every engagement includes a complimentary retest of fixed findings. Recurring annual audits and an ongoing retainer are available.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What you get</h2>
                    <ul className="space-y-3">
                        {[
                            "A developer-grade report — every finding with proof-of-concept, CVSS severity, and reproduction steps",
                            "An executive summary suitable for the board, auditors, and enterprise prospects",
                            "A remediation plan prioritized by real-world risk with code-level guidance",
                            "SOC 2 Common Criteria mapping for the findings that touch your control set",
                            "A live debrief call to walk your engineers through every issue",
                            "A complimentary retest of fixed findings to confirm closure",
                            "An attestation letter you can share with customers once findings are remediated",
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
                                q: "What is the difference between a SaaS security audit and a generic pentest?",
                                a: "A SaaS audit goes beyond the perimeter. It tests the things unique to multi-tenant software — whether one tenant can reach another tenant's data, whether role and permission checks hold on the server, how secrets and keys are managed, and whether the cloud configuration leaks anything. A generic pentest checks the front door; a SaaS audit checks every door between customers.",
                            },
                            {
                                q: "Will this help us pass a SOC 2 audit or a customer security questionnaire?",
                                a: "Yes. Findings map to SOC 2 Common Criteria and to the questions enterprise buyers ask in security questionnaires. You get a clean report you can share with auditors and prospects, and a remediation list that closes the gaps before they become blockers in a deal.",
                            },
                            {
                                q: "Do you test against production or a staging environment?",
                                a: "Usually a staging or pre-production environment that mirrors production, seeded with test tenants we control. Where production testing is required, we coordinate a window, rate-limit our activity, and avoid destructive checks. We never touch real customer data.",
                            },
                            {
                                q: "How do you make sure the findings are real and not just scanner noise?",
                                a: "Every finding is reproduced by hand with a proof-of-concept, a severity rating using CVSS, and the exact steps to trigger it. Automated scanning is a starting point, not the report. If we cannot demonstrate it, it does not go in as a vulnerability.",
                            },
                            {
                                q: "Do you help fix the issues or just report them?",
                                a: "Both. The report includes a prioritized remediation plan with concrete code-level guidance, and we offer a complimentary retest of fixed findings. Because we are also a software development firm, we can implement the fixes directly if you want us to.",
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
                        topics={["pentest", "compliance", "saas"]}
                        heading="Security & compliance reading"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { slug: "web-app-pentest", title: "Web App Penetration Testing", desc: "Deep manual testing of a single web application." },
                            { slug: "managed-security-services", title: "Managed Security Services", desc: "Ongoing monitoring and recurring testing on retainer." },
                            { slug: "code-audit-services", title: "Code Audit Services", desc: "Source-level review of security and code quality." },
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
                        Background reading on what to expect: <Link href="/blog/what-is-penetration-testing" className="text-indigo-400 hover:underline">the founder's pentest buyer guide</Link> and <Link href="/blog/how-to-prepare-for-a-soc-2-audit-2026" className="text-indigo-400 hover:underline">how to prepare for a SOC 2 audit</Link>. To scope an audit, <Link href="/contact" className="text-indigo-400 hover:underline">contact us</Link> directly.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <MapPin className="w-6 h-6 text-indigo-400" />
                        <h2 className="text-2xl md:text-3xl font-bold text-white">SaaS Security Audit — Where We Serve</h2>
                    </div>
                    <p className="text-gray-400 leading-relaxed mb-6 max-w-3xl">
                        Georgia-based security team, working with SaaS companies across 14 US metros. Audits run remotely; in-person debriefs available in Atlanta and the Southeast.
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
                            Find it before an attacker or an auditor does.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz directly at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or book a 20-minute scope call. Founder-led from scoping through retest.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" service="SaaS Security Audit" source="services-saas-security-audit" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
