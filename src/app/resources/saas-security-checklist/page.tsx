import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { ResourceLeadForm } from "../ResourceLeadForm";
import { ShieldCheck, Check, ArrowRight, FileText, Clock, Target } from "lucide-react";

const SLUG = "saas-security-checklist";
const TITLE = "The SaaS Security Checklist";
const PDF_FILENAME = "saas-security-checklist.pdf";

export const metadata: Metadata = {
    title: "SaaS Security Checklist (Free, 2026) | QUANT LAB USA",
    description:
        "A practical SaaS security checklist covering authentication, tenant isolation, data protection, infrastructure, secrets, logging, and vendor risk — the controls to ship and run a SaaS you can defend.",
    alternates: { canonical: `https://quantlabusa.dev/resources/${SLUG}` },
    openGraph: {
        title: "SaaS Security Checklist (Free, 2026) | QUANT LAB USA",
        description:
            "Authentication, tenant isolation, data protection, infrastructure, secrets, and vendor risk — a practical security checklist for the SaaS you ship and run.",
        url: `https://quantlabusa.dev/resources/${SLUG}`,
        type: "article",
        siteName: "QUANT LAB USA",
    },
    twitter: {
        card: "summary_large_image",
        title: "SaaS Security Checklist (Free, 2026) | QUANT LAB USA",
        description:
            "Authentication, tenant isolation, data protection, secrets, logging, and vendor risk controls for SaaS.",
    },
};

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: TITLE,
    url: `https://quantlabusa.dev/resources/${SLUG}`,
    description:
        "A SaaS security checklist covering authentication and access control, tenant isolation, data protection, infrastructure and network, secrets management, logging and monitoring, and third-party vendor risk.",
    isPartOf: {
        "@type": "WebSite",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
    },
    publisher: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Is this checklist enough to pass a SOC 2 audit?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No checklist replaces an audit, but these controls map closely to the technical security expectations a SOC 2 examiner looks for. Treat this as the engineering groundwork: implement the controls, document them, and an auditor has far less to push back on. Formal compliance still needs policies, evidence collection, and an independent assessor.",
            },
        },
        {
            "@type": "Question",
            name: "We are a small team. Which items matter most first?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Start with authentication, tenant isolation, and secrets management. Weak auth, leaking one tenant's data into another, and a hardcoded credential in a repo are the three failures most likely to end a startup. Everything else is important, but those three are where a single mistake becomes an existential incident.",
            },
        },
        {
            "@type": "Question",
            name: "How is SaaS security different from a one-time pentest?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A penetration test is a point-in-time check of how an attacker could break in today. This checklist is about the ongoing controls that keep you defensible between tests — least privilege, encryption, logging, patching, and vendor review. The two are complementary: the checklist builds the baseline, the pentest validates it.",
            },
        },
        {
            "@type": "Question",
            name: "Does multi-tenant SaaS need special security attention?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. The defining risk of multi-tenant SaaS is one customer seeing another customer's data through a missing authorization check or a query that forgets to scope by tenant. Tenant isolation has to be enforced server-side on every request and tested deliberately, not assumed because the UI hides the data.",
            },
        },
    ],
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Resources", item: "https://quantlabusa.dev/resources" },
        { "@type": "ListItem", position: 3, name: "SaaS Security Checklist", item: `https://quantlabusa.dev/resources/${SLUG}` },
    ],
};

const authItems = [
    "Enforce strong authentication: support multi-factor authentication, and require it for admin and privileged accounts without exception.",
    "Use a vetted identity mechanism — OAuth 2.0, OIDC, or a reputable auth provider — rather than rolling your own password and session handling.",
    "Hash passwords with a modern, slow algorithm (bcrypt, scrypt, or Argon2) and never store or log them in plaintext.",
    "Enforce authorization on the server for every request; never trust a client-supplied role, and never rely on an unguessable URL as access control.",
    "Apply least privilege to user roles and to internal service accounts, and review elevated access on a recurring schedule.",
    "Expire and rotate sessions sensibly, invalidate them on logout and password change, and rate-limit login and password-reset endpoints.",
];

const tenantItems = [
    "Scope every database query by tenant, and verify isolation server-side on each request rather than assuming the UI hides other tenants' data.",
    "Test cross-tenant access deliberately: attempt to read and modify another tenant's records by ID and confirm the request is refused.",
    "Isolate tenant data in storage, caches, and background jobs, not just in the primary database, so an export or async task cannot leak across tenants.",
    "Avoid global identifiers that are guessable or sequential where they grant access; pair them with an authorization check every time.",
    "Where the threat model demands it, consider stronger isolation — separate schemas or databases — and document the trade-off you chose.",
];

const dataItems = [
    "Encrypt data in transit with TLS everywhere, and encrypt sensitive data at rest using managed keys.",
    "Classify what data you hold, minimize collection of sensitive fields, and define retention so you are not storing data you no longer need.",
    "Protect personally identifiable and regulated data according to the rules that apply to you, and support deletion and export requests.",
    "Mask or tokenize the most sensitive fields, and never expose secrets, tokens, or full payment details in logs or error responses.",
    "Restrict and audit access to production data; engineers should not query customer data casually or without a logged, justified reason.",
];

const infraItems = [
    "Define infrastructure as code so configuration is reviewable, reproducible, and not changed by hand in a console under pressure.",
    "Lock down network access with private subnets, security groups, and the principle of least exposure; do not put databases on the public internet.",
    "Patch operating systems, runtimes, and dependencies on a schedule, and track known-vulnerable packages with automated scanning.",
    "Harden cloud accounts: enforce MFA on the root and admin identities, separate environments, and avoid long-lived broad-scope credentials.",
    "Put a web application firewall and rate limiting in front of public endpoints, and design for graceful degradation under abuse.",
];

const secretsItems = [
    "Store secrets in a dedicated secrets manager, never in source control, environment files committed to a repo, or plaintext config.",
    "Scope each credential to least privilege and support rotation, so a single leaked key can be revoked without taking down every integration.",
    "Scan repositories and CI logs for accidentally committed keys, and rotate immediately if one is exposed.",
    "Use short-lived, automatically issued credentials for service-to-service access where your platform supports it.",
    "Separate secrets per environment so a development key can never touch production data.",
];

const monitoringItems = [
    "Log authentication events, authorization failures, and administrative actions, and retain logs long enough to investigate an incident.",
    "Centralize logs and alert on the signals that matter — repeated auth failures, privilege changes, and unusual data access — not on noise.",
    "Protect logs from tampering and ensure they do not themselves capture passwords, tokens, or sensitive payloads.",
    "Maintain an incident response plan with named owners, communication steps, and a path to notify affected customers when required.",
    "Run backups, encrypt them, and test restoration so a ransomware event or bad deploy does not become permanent data loss.",
];

const vendorItems = [
    "Inventory every third-party service and subprocessor that touches your data, and review their security posture before you onboard them.",
    "Prefer vendors that can produce a SOC 2 report or equivalent evidence, and record the data each one processes on your behalf.",
    "Limit what each integration can access, use scoped API keys, and remove access promptly when a vendor relationship ends.",
    "Track your dependency on critical vendors and have a plan for an outage or a breach on their side, not just on yours.",
];

const sections = [
    { heading: "1. Authentication & access control", items: authItems },
    { heading: "2. Tenant isolation", items: tenantItems },
    { heading: "3. Data protection & privacy", items: dataItems },
    { heading: "4. Infrastructure & network", items: infraItems },
    { heading: "5. Secrets management", items: secretsItems },
    { heading: "6. Logging, monitoring & recovery", items: monitoringItems },
    { heading: "7. Third-party & vendor risk", items: vendorItems },
];

export default function SaasSecurityChecklistPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <div className="container mx-auto px-6 max-w-6xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/resources" className="hover:text-sky-400 transition-colors">Resources</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">SaaS Security Checklist</li>
                    </ol>
                </nav>

                <div className="grid lg:grid-cols-5 gap-10 mb-20">
                    <div className="lg:col-span-3">
                        <AnimatedSection>
                            <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                                <ShieldCheck className="w-6 h-6 text-white" />
                            </div>
                            <p className="text-xs uppercase tracking-widest text-sky-300 font-semibold mb-3">
                                SaaS security checklist · auth, isolation, data, infra, vendors
                            </p>
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-5">
                                Ship a SaaS you can actually defend.
                            </h1>
                            <p className="text-lg text-gray-400 leading-relaxed mb-6">
                                A practical security checklist for SaaS teams, covering authentication, tenant
                                isolation, data protection, infrastructure, secrets, logging, and vendor risk.
                                Most breaches are not exotic zero-days — they are a missing authorization check,
                                a leaked key, or a tenant boundary nobody tested. This is the baseline that
                                closes those gaps.
                            </p>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8">
                                <div className="flex items-center gap-2"><FileText className="w-4 h-4 text-sky-400" /><span>7 sections, ~40 controls</span></div>
                                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-emerald-400" /><span>Review in an afternoon</span></div>
                                <div className="flex items-center gap-2"><Target className="w-4 h-4 text-amber-400" /><span>For founders &amp; engineering leads</span></div>
                            </div>
                        </AnimatedSection>
                    </div>
                    <div className="lg:col-span-2">
                        <AnimatedSection>
                            <ResourceLeadForm
                                slug={SLUG}
                                title={TITLE}
                                pdfFilename={PDF_FILENAME}
                                drip="D1"
                                successHeadline="The SaaS Security Checklist is yours."
                                relatedServiceHref="/services/web-app-pentest"
                                relatedServiceLabel="web application penetration testing"
                            />
                        </AnimatedSection>
                    </div>
                </div>

                <div className="max-w-4xl">
                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Why a SaaS security baseline matters
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                Most SaaS incidents are not sophisticated. They are an authorization check that
                                was never written, a database query that forgot to scope by tenant, an API key
                                committed to a repo, or a database left reachable from the public internet. Each
                                one is mundane in isolation; each one has ended companies. The job of a security
                                baseline is to make the mundane mistakes hard to make and easy to catch.
                            </p>
                            <p>
                                This checklist gathers the controls we apply on every{" "}
                                <Link href="/services/saas-platform-development" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    SaaS platform we build
                                </Link>
                                . It is organized so you can hand it to your team and work top to bottom. If you
                                want formal definitions of the terms here, the{" "}
                                <Link href="/glossary/what-is-zero-trust" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    zero trust
                                </Link>{" "}
                                and{" "}
                                <Link href="/glossary/what-is-encryption-at-rest" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    encryption at rest
                                </Link>{" "}
                                glossary entries are quick primers, and the{" "}
                                <Link href="/glossary/what-is-an-soc-2-report" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    SOC 2 report
                                </Link>{" "}
                                entry explains what auditors expect.
                            </p>
                        </div>
                    </AnimatedSection>

                    {sections.map((section) => (
                        <AnimatedSection key={section.heading} className="mb-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                                {section.heading}
                            </h2>
                            <ul className="space-y-3">
                                {section.items.map((item) => (
                                    <li key={item} className="flex gap-3 text-gray-300">
                                        <Check className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                                        <span className="leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </AnimatedSection>
                    ))}

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            How to apply the checklist
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                Do not try to do everything at once. Walk the list and mark each item as done,
                                partial, or missing, then triage. For a small team, the highest-leverage trio is
                                authentication, tenant isolation, and secrets management — weak auth, a leaking
                                tenant boundary, or a hardcoded credential is where a single mistake becomes an
                                existential incident. Fix those first, then work outward to infrastructure,
                                logging, and vendor review.
                            </p>
                            <p>
                                Treat the checklist as living. Re-run it before a major launch, after a big
                                architectural change, and on a recurring cadence so controls do not quietly
                                decay. It pairs naturally with a deliberate{" "}
                                <Link href="/glossary/what-is-threat-modeling" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    threat-modeling
                                </Link>{" "}
                                exercise and with the{" "}
                                <Link href="/glossary/what-is-owasp-top-10" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    OWASP Top 10
                                </Link>
                                , which catalogs the application-level failures this list is designed to prevent.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            How this connects to our work
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                Security is not a phase we bolt on at the end; it is how we build. The controls
                                here are the default starting point for every{" "}
                                <Link href="/services/saas-platform-development" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    SaaS platform development
                                </Link>{" "}
                                engagement, and they are what our{" "}
                                <Link href="/services/penetration-testing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    penetration testing
                                </Link>{" "}
                                work validates from an attacker's point of view. When we run a{" "}
                                <Link href="/services/web-app-pentest" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    web application pentest
                                </Link>
                                , this is the kind of baseline we expect to find — and the gaps we find are
                                usually somewhere on this list.
                            </p>
                            <p>
                                If you are preparing for a customer security review or a SOC 2 audit, or you want
                                an independent look at how defensible your SaaS really is, see{" "}
                                <Link href="/pricing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    how we scope and price the work
                                </Link>{" "}
                                or{" "}
                                <Link href="/contact" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    reach out
                                </Link>{" "}
                                to talk it through.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Frequently asked questions
                        </h2>
                        <div className="space-y-6">
                            {[
                                {
                                    q: "Is this checklist enough to pass a SOC 2 audit?",
                                    a: "No checklist replaces an audit, but these controls map closely to the technical security expectations a SOC 2 examiner looks for. Treat this as the engineering groundwork: implement the controls, document them, and an auditor has far less to push back on. Formal compliance still needs policies, evidence collection, and an independent assessor.",
                                },
                                {
                                    q: "We are a small team. Which items matter most first?",
                                    a: "Start with authentication, tenant isolation, and secrets management. Weak auth, leaking one tenant's data into another, and a hardcoded credential in a repo are the three failures most likely to end a startup. Everything else is important, but those three are where a single mistake becomes an existential incident.",
                                },
                                {
                                    q: "How is SaaS security different from a one-time pentest?",
                                    a: "A penetration test is a point-in-time check of how an attacker could break in today. This checklist is about the ongoing controls that keep you defensible between tests — least privilege, encryption, logging, patching, and vendor review. The two are complementary: the checklist builds the baseline, the pentest validates it.",
                                },
                                {
                                    q: "Does multi-tenant SaaS need special security attention?",
                                    a: "Yes. The defining risk of multi-tenant SaaS is one customer seeing another customer's data through a missing authorization check or a query that forgets to scope by tenant. Tenant isolation has to be enforced server-side on every request and tested deliberately, not assumed because the UI hides the data.",
                                },
                            ].map((item) => (
                                <details key={item.q} className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-6 open:bg-[#0d1526]">
                                    <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-semibold text-white">
                                        <span>{item.q}</span>
                                        <ArrowRight className="w-4 h-4 text-sky-400 transition-transform group-open:rotate-90" />
                                    </summary>
                                    <p className="text-gray-400 mt-3 leading-relaxed text-sm">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Related resources &amp; reading
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <Link href="/resources/web-app-pentest-checklist" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Web App Pentest Checklist</p>
                                <p className="text-xs text-gray-400 leading-relaxed">The attacker's-eye view of the controls in this list.</p>
                            </Link>
                            <Link href="/resources/vendor-security-questionnaire-template" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Vendor Security Questionnaire Template</p>
                                <p className="text-xs text-gray-400 leading-relaxed">Vet the third parties that touch your data.</p>
                            </Link>
                            <Link href="/resources/incident-response-plan-template" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Incident Response Plan Template</p>
                                <p className="text-xs text-gray-400 leading-relaxed">What to do when a control fails and an incident hits.</p>
                            </Link>
                            <Link href="/blog/cybersecurity-services-for-saas-startups-2026" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Cybersecurity for SaaS Startups</p>
                                <p className="text-xs text-gray-400 leading-relaxed">How early-stage SaaS teams should sequence security work.</p>
                            </Link>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 to-emerald-500/5 p-8 md:p-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Want a second opinion on your SaaS security?
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl">
                                Whether you are hardening a baseline before a launch or preparing for a customer
                                security review, we can pressure-test your controls and tell you where the real
                                risk is. See{" "}
                                <Link href="/pricing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    how engagements are priced
                                </Link>{" "}
                                or book a call.
                            </p>
                            <ConsultationCTA label="Book a 20-min call" source={`${SLUG}-resource`} service="Web App Pentest" />
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </main>
    );
}
