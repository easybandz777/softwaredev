import type { Metadata } from "next";
import Link from "next/link";
import {
    ShieldCheck,
    Lock,
    Key,
    Eye,
    GitBranch,
    FileSearch,
    Network,
    Trash2,
    Globe,
    Mail,
    AlertTriangle,
} from "lucide-react";
import { ConsultationCTA } from "@/components/ConsultationCTA";

export const metadata: Metadata = {
    title: "Security Practices | QUANT LAB USA — How We Protect Client Data",
    description:
        "How QUANT LAB USA protects client source code, secrets, and pentest data. TLS 1.3, 2FA-enforced repos, Vercel env secrets, GDPR-aware, NDA-ready.",
    openGraph: {
        title: "Security Practices | QUANT LAB USA — How We Protect Client Data",
        description:
            "Source code in private 2FA repos. Secrets in Vercel. TLS 1.3. Pentest data destroyed on schedule. The full QUANT LAB security posture.",
        url: "https://quantlabusa.dev/security",
        type: "article",
    },
    alternates: {
        canonical: "https://quantlabusa.dev/security",
    },
};

const securityStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": "https://quantlabusa.dev/security#webpage",
            url: "https://quantlabusa.dev/security",
            name: "QUANT LAB USA Security Practices",
            description:
                "How QUANT LAB USA protects client source code, secrets, pentest data, and intellectual property.",
            inLanguage: "en-US",
            isPartOf: { "@id": "https://quantlabusa.dev/#website" },
            about: { "@id": "https://quantlabusa.dev/#organization" },
            author: { "@id": "https://quantlabusa.dev/#william-beltz" },
        },
        {
            "@type": "Person",
            "@id": "https://quantlabusa.dev/#william-beltz",
            name: "William Beltz",
            alternateName: "Bill Beltz",
            jobTitle: "Founder & Lead Engineer",
            worksFor: { "@id": "https://quantlabusa.dev/#organization" },
            url: "https://quantlabusa.dev/about/team",
        },
        {
            "@type": "Organization",
            "@id": "https://quantlabusa.dev/#organization",
            name: "QUANT LAB USA",
            url: "https://quantlabusa.dev",
            telephone: "+17706521282",
            email: "beltz@quantlabusa.dev",
        },
        {
            "@type": "BreadcrumbList",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://quantlabusa.dev",
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "Security",
                    item: "https://quantlabusa.dev/security",
                },
            ],
        },
    ],
};

const controls = [
    {
        icon: GitBranch,
        title: "Source code in private repos",
        body: "All client source code lives in private GitHub repositories under the client's organization, not ours. Branch protection is enforced on main. Two-factor authentication is enforced for every account with repository access — no exceptions for contractors.",
    },
    {
        icon: Key,
        title: "Secrets via Vercel environment variables",
        body: "API keys, database URLs, Stripe keys, and any production credentials live in Vercel environment variables, scoped per environment. Secrets are never committed to source. GitGuardian scans every commit on push to catch accidental leaks before they merge.",
    },
    {
        icon: Lock,
        title: "TLS 1.3 across all environments",
        body: "Production, staging, and preview environments all run TLS 1.3 by default through Vercel's edge. HSTS is preloaded where appropriate, and we enforce HTTPS at every redirect, both internal and external.",
    },
    {
        icon: ShieldCheck,
        title: "Two-factor on every account",
        body: "GitHub, Vercel, AWS, Stripe, Resend, Sentry, and every other service touching client work has two-factor authentication enforced on every account. Recovery codes are stored in a dedicated password manager, not in any document attached to the project.",
    },
    {
        icon: FileSearch,
        title: "Dependency scanning",
        body: "Dependabot runs on every repository. Snyk scans dependencies on each CI build. GitGuardian watches for secret leaks. Findings are triaged within one business day, and critical CVEs are patched in a same-day deploy when the upstream patch is available.",
    },
    {
        icon: Network,
        title: "Pentest data isolation",
        body: "Penetration tests are executed from isolated, time-boxed environments dedicated to the engagement. Test data, screenshots, raw scanner output, and notes are stored in an encrypted, access-controlled location and never mixed with other client material.",
    },
    {
        icon: Trash2,
        title: "Pentest data destruction",
        body: "Pentest evidence is retained for 90 days post-delivery to allow remediation discussion and retesting, then permanently destroyed. The final report stays in the client's possession. Raw artifacts are not held indefinitely on our side.",
    },
    {
        icon: Globe,
        title: "GDPR-aware data handling",
        body: "Our analytics defaults are privacy-respecting. We do not run third-party tracking pixels on client production environments without explicit client authorization. Client-collected personal data stays on client infrastructure, not on ours.",
    },
];

export default function SecurityPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(securityStructuredData),
                }}
            />

            <section className="pt-32 pb-14 relative overflow-hidden">
                <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-quant-blue/8 rounded-full blur-[160px] pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10 max-w-4xl">
                    <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-sky-400">Home</Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-300">Security</span>
                    </nav>
                    <span className="inline-block text-quant-blue text-sm font-semibold tracking-[0.2em] uppercase mb-5">
                        Security Practices
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                        How we protect your code and your data.
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl">
                        We run penetration tests for a living. Our own security posture
                        is held to the standards we expect from clients. Here is what
                        that looks like in practice.
                    </p>
                </div>
            </section>

            <section className="py-12 relative">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="rounded-2xl border border-white/8 bg-[#0d1526]/70 backdrop-blur-sm p-7">
                        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 mb-4">
                            The Principle
                        </p>
                        <div className="text-gray-300 text-base md:text-lg leading-relaxed space-y-4">
                            <p>
                                We have read enough pentest reports of agencies to know
                                the most common findings: secrets in repos, no 2FA,
                                shared admin accounts, archive copies of pentest evidence
                                kept indefinitely. We refuse to be the firm those reports
                                get written about.
                            </p>
                            <p>
                                The controls below are not aspirational. They are the
                                baseline every engagement runs against. For the standards
                                they align to, see{" "}
                                <Link href="/certifications-credentials" className="text-sky-400 hover:underline">
                                    certifications & credentials
                                </Link>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 relative">
                <div className="container mx-auto px-6 max-w-5xl">
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 mb-5">
                        Active Controls
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 leading-tight">
                        How client data is actually protected.
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {controls.map(({ icon: Icon, title, body }) => (
                            <div
                                key={title}
                                className="rounded-2xl border border-white/8 bg-[#0d1526]/70 backdrop-blur-sm p-7"
                            >
                                <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-4">
                                    <Icon className="w-5 h-5 text-sky-400" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 relative border-t border-white/5 bg-black/30">
                <div className="container mx-auto px-6 max-w-3xl">
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 mb-5">
                        Confidentiality & NDA
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-7 leading-tight">
                        NDAs available on request.
                    </h2>
                    <div className="text-gray-300 text-base md:text-lg leading-relaxed space-y-5">
                        <p>
                            We sign mutual NDAs before discovery on any engagement that
                            touches sensitive IP, internal systems, or non-public
                            financial data. We have a clean template ready to send
                            within an hour of asking. If your legal team has its own
                            preferred NDA, we will sign reasonable counterparts.
                        </p>
                        <p>
                            All employees and contractors with project access sign the
                            NDA. Confidentiality obligations survive the engagement
                            indefinitely. Public case studies, references, and the
                            content of our{" "}
                            <Link href="/work" className="text-sky-400 hover:underline">
                                work page
                            </Link>
                            {" "}only include clients who have explicitly authorized
                            their inclusion.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 relative">
                <div className="container mx-auto px-6 max-w-3xl">
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 mb-5">
                        Tooling
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-7 leading-tight">
                        Specific tools, not generic claims.
                    </h2>
                    <div className="text-gray-300 text-base md:text-lg leading-relaxed space-y-5">
                        <p>
                            The current security tool stack: GitHub with branch
                            protection and required reviews on main, Dependabot for
                            automated dependency PRs, Snyk for vulnerability scanning
                            during CI, GitGuardian for secret leak detection on every
                            push, Vercel for environment-isolated secret management,
                            Sentry for error tracking, 1Password for credential
                            sharing within engagements, and Cloudflare in front of
                            anything that needs DDoS or WAF protection.
                        </p>
                        <p>
                            For penetration testing engagements, the tooling expands to
                            include Burp Suite Pro, Nmap, Nuclei, custom Python
                            scripts, and the Kali ecosystem. None of those tools are
                            ever run from the main QUANT LAB workstation — they live
                            on isolated, time-boxed environments per engagement.
                        </p>
                        <p>
                            For more detail on testing methodology, see{" "}
                            <Link href="/services/web-app-pentest" className="text-sky-400 hover:underline">
                                web app pentest
                            </Link>
                            ,{" "}
                            <Link href="/services/network-pentest" className="text-sky-400 hover:underline">
                                network pentest
                            </Link>
                            , and{" "}
                            <Link href="/services/active-directory-pentest" className="text-sky-400 hover:underline">
                                Active Directory pentest
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 relative border-t border-white/5 bg-black/30">
                <div className="container mx-auto px-6 max-w-3xl">
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 mb-5">
                        Incident Response
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-7 leading-tight">
                        What happens if something goes wrong.
                    </h2>
                    <div className="text-gray-300 text-base md:text-lg leading-relaxed space-y-5">
                        <p>
                            Every QUANT LAB build ships with a written runbook in the
                            client repository. The runbook covers deploy procedure,
                            rollback procedure, common failure modes, monitoring access,
                            and incident-response contacts. It is written so a
                            stranger on call at 3 a.m. can execute it.
                        </p>
                        <p>
                            If a security incident is suspected on a system we operate
                            or have credentials for, the response is: contain (rotate
                            credentials, revoke sessions), preserve (collect logs,
                            screenshots, timestamps), notify (client and any relevant
                            third parties within four hours of confirmation), and
                            remediate (deploy the fix and document the post-mortem
                            within five business days).
                        </p>
                        <p>
                            For ongoing maintenance clients, incident response is
                            covered by the retainer. For one-off engagements,
                            post-launch incidents are covered for the first 48 hours
                            and quoted thereafter.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 relative">
                <div className="container mx-auto px-6 max-w-3xl">
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 mb-5">
                        Reporting a Vulnerability
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-7 leading-tight">
                        Found something on a QUANT LAB property?
                    </h2>
                    <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-7 flex items-start gap-4">
                        <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                        <div className="text-gray-300 text-base leading-relaxed space-y-3">
                            <p>
                                If you have identified a security issue on{" "}
                                <span className="text-gray-100 font-mono text-sm">quantlabusa.dev</span>
                                {" "}or on any system we operate, email{" "}
                                <a
                                    href="mailto:beltz@quantlabusa.dev"
                                    className="text-sky-400 hover:underline"
                                >
                                    beltz@quantlabusa.dev
                                </a>
                                {" "}with the details. We acknowledge in writing within
                                one business day.
                            </p>
                            <p>
                                We do not run a paid bounty program at this size, but
                                we will publicly credit responsible disclosure on this
                                page when the reporter wants the credit. Please give us
                                a reasonable window to remediate before publishing.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 relative border-t border-white/5 bg-black/30">
                <div className="container mx-auto px-6 max-w-3xl">
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 mb-5">
                        Where This Connects
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-7 leading-tight">
                        Security as a through-line.
                    </h2>
                    <div className="text-gray-300 text-base md:text-lg leading-relaxed space-y-5">
                        <p>
                            Our security posture shows up everywhere. It is baked into
                            our{" "}
                            <Link href="/methodology" className="text-sky-400 hover:underline">
                                build methodology
                            </Link>
                            , disclosed in our{" "}
                            <Link href="/process" className="text-sky-400 hover:underline">
                                customer process
                            </Link>
                            , and aligned with the standards on the{" "}
                            <Link href="/certifications-credentials" className="text-sky-400 hover:underline">
                                credentials page
                            </Link>
                            . For the engineer behind it, see{" "}
                            <Link href="/about/team" className="text-sky-400 hover:underline">
                                team & leadership
                            </Link>
                            .
                        </p>
                        <p>
                            For long-form writing on how we run pentest engagements,
                            see{" "}
                            <Link href="/blog/penetration-test-cost-2026" className="text-sky-400 hover:underline">
                                penetration test cost 2026
                            </Link>
                            {" "}and{" "}
                            <Link href="/blog/best-penetration-testing-companies-georgia-2026" className="text-sky-400 hover:underline">
                                pentest firms in Georgia
                            </Link>
                            . For more on how security shapes the way we build software,
                            see{" "}
                            <Link href="/blog/custom-crm-development-guide" className="text-sky-400 hover:underline">
                                the CRM development guide
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 relative border-t border-white/5 bg-black/40">
                <div className="container mx-auto px-6 max-w-3xl text-center">
                    <Eye className="w-10 h-10 text-sky-400 mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Procurement team needs more detail?
                    </h2>
                    <p className="text-gray-400 text-lg mb-3 leading-relaxed">
                        We will fill out reasonable security questionnaires and provide
                        documented evidence for the controls above. Just tell us what
                        you need.
                    </p>
                    <p className="text-gray-400 text-sm mb-8 flex items-center justify-center gap-2 flex-wrap">
                        <Mail className="w-4 h-4" />
                        Call{" "}
                        <a
                            href="tel:+17706521282"
                            className="inline-flex items-center min-h-[44px] text-sky-400 hover:text-sky-300 transition-colors"
                        >
                            (770) 652-1282
                        </a>
                        <span>or email</span>
                        <a
                            href="mailto:beltz@quantlabusa.dev"
                            className="text-sky-400 hover:text-sky-300 transition-colors"
                        >
                            beltz@quantlabusa.dev
                        </a>
                    </p>
                    <div className="flex items-center justify-center gap-3 flex-wrap">
                        <ConsultationCTA label="Book a Consultation" source="security-page" />
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium border border-white/10 text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
                        >
                            Contact us
                        </Link>
                        <Link
                            href="/services/penetration-testing"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium border border-white/10 text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
                        >
                            See penetration testing
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
