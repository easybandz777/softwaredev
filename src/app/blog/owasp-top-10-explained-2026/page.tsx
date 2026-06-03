import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AuthorByline } from "@/components/AuthorByline";
import { EditorialFooter } from "@/components/EditorialFooter";
import { Sources } from "@/components/Sources";
import { ArrowRight, Check, ListChecks } from "lucide-react";
import { articleMetadata } from "@/lib/seoMeta";
import { articleSchema, faqSchema } from "@/lib/schemas";
import { getAuthor, authorUrl } from "@/lib/authors";

const SLUG = "owasp-top-10-explained-2026";
const PUBLISHED = "2026-06-03";
const TITLE = "The OWASP Top 10 Explained (2026)";
const author = getAuthor("bill-beltz");

export const metadata: Metadata = articleMetadata({
    title: "The OWASP Top 10 Explained in Plain English (2026)",
    description:
        "Each OWASP Top 10 category explained in plain English with a real-world example and the concrete defense. The 2026 reference for founders and engineers.",
    slug: `blog/${SLUG}`,
    image: "/og-pentest.png",
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    authors: [author.name],
    keywords: [
        "owasp top 10 explained",
        "owasp top 10 2026",
        "owasp top 10 examples",
        "web application security risks",
    ],
});

const faqs = [
    {
        q: "What is the OWASP Top 10?",
        a: "The OWASP Top 10 is a periodically updated, community-driven list of the ten most critical web application security risks, published by the Open Worldwide Application Security Project. It is a risk-awareness document, not a checklist or a standard. Engineers use it as a shared vocabulary and a starting point for secure design; auditors and pentest reports map findings to it so non-specialists can understand impact.",
    },
    {
        q: "Is the OWASP Top 10 a compliance standard?",
        a: "No. It is an awareness document. You cannot 'certify' against the OWASP Top 10. However, many compliance frameworks reference it indirectly: PCI DSS expects coverage of common web vulnerabilities, and SOC 2 auditors look favorably on pentest methodologies that align to OWASP. Treat it as the floor of web security awareness, not the ceiling.",
    },
    {
        q: "How often does the OWASP Top 10 change?",
        a: "Roughly every three to four years. The current edition reorganized categories around root causes rather than individual bugs — for example, broken access control rose to the top spot, and categories like insecure design and software-and-data integrity failures were introduced. Because it shifts, treat the specific ranking as guidance and the underlying classes of flaw as durable.",
    },
    {
        q: "What is the difference between the OWASP Top 10 and the OWASP API Security Top 10?",
        a: "The OWASP Top 10 covers web applications broadly. The OWASP API Security Top 10 is a separate, API-specific list that emphasizes authorization flaws unique to APIs — broken object-level authorization, broken object property-level authorization, and unrestricted resource consumption. If you ship an API, you need both lists. Modern apps are mostly API behind a thin UI, so the API list is increasingly the one that bites.",
    },
    {
        q: "How does a pentest use the OWASP Top 10?",
        a: "A penetration tester uses it as a coverage map and a reporting taxonomy, not a script. During testing, the categories ensure no major risk class is skipped. In the report, each finding is tagged with its OWASP category and, where relevant, a MITRE ATT&CK technique, so both engineers and auditors can place the issue in a familiar framework and prioritize remediation.",
    },
    {
        q: "Can automated scanners find all OWASP Top 10 issues?",
        a: "No. Scanners are good at the mechanical categories — outdated components, missing security headers, some injection. They are poor at the categories that require understanding intent, especially broken access control and insecure design, which are the two highest-impact entries on the list. Those require a human who can reason about what a request should and should not be allowed to do.",
    },
];

const sources = [
    {
        label: "OWASP Top 10 — Web Application Security Risks",
        href: "https://owasp.org/www-project-top-ten/",
        publisher: "OWASP",
    },
    {
        label: "OWASP API Security Top 10 (2023)",
        href: "https://owasp.org/API-Security/editions/2023/en/0x11-t10/",
        publisher: "OWASP",
    },
    {
        label: "OWASP Application Security Verification Standard (ASVS)",
        href: "https://owasp.org/www-project-application-security-verification-standard/",
        publisher: "OWASP",
    },
    {
        label: "MITRE ATT&CK Enterprise Matrix",
        href: "https://attack.mitre.org/matrices/enterprise/",
        publisher: "MITRE",
    },
];

const categories = [
    {
        id: "A01",
        name: "Broken Access Control",
        plain:
            "The application lets a user do or see something they are not authorized to. This is now the most common high-impact web flaw.",
        example:
            "A user changes the account ID in a URL from their own to a stranger's and the app happily returns the stranger's invoice — no permission check at all.",
        defense:
            "Enforce authorization on the server for every request, deny by default, and never trust an identifier supplied by the client. Test it with a low-privilege account, not an admin one.",
        attack: "Maps loosely to Valid Accounts (T1078) and privilege abuse once a foothold exists.",
    },
    {
        id: "A02",
        name: "Cryptographic Failures",
        plain:
            "Sensitive data is exposed because it was not encrypted, was encrypted weakly, or the keys were mishandled.",
        example:
            "Passwords stored as unsalted MD5, or session tokens sent over plain HTTP on an internal admin tool that someone assumed nobody could reach.",
        defense:
            "Encrypt sensitive data in transit (TLS everywhere) and at rest, use modern algorithms and a vetted library, hash passwords with bcrypt/argon2, and manage keys in a secrets manager — never in source.",
        attack: "Feeds Adversary-in-the-Middle (T1557) and credential theft.",
    },
    {
        id: "A03",
        name: "Injection",
        plain:
            "Untrusted input is interpreted as a command. SQL injection is the classic, but the same flaw covers OS command, LDAP, and NoSQL injection.",
        example:
            "A login form that builds a query by string concatenation, so typing ' OR '1'='1 into the username field logs an attacker in as the first user in the table.",
        defense:
            "Use parameterized queries / prepared statements and ORMs that bind parameters. Validate and encode output. Never build a query or shell command by concatenating user input.",
        attack: "A textbook Exploit Public-Facing Application (T1190).",
    },
    {
        id: "A04",
        name: "Insecure Design",
        plain:
            "The flaw is in the design itself, not the code. No amount of clean implementation fixes a feature that was unsafe by concept.",
        example:
            "A password-reset flow that emails a 4-digit code with no rate limit and no lockout — the implementation is bug-free, but the design lets an attacker brute-force the code.",
        defense:
            "Threat-model features before building them, define abuse cases alongside use cases, and apply secure-by-design patterns (rate limits, lockouts, defense in depth) at the architecture stage.",
        attack: "Often the root cause behind Brute Force (T1110) success.",
    },
    {
        id: "A05",
        name: "Security Misconfiguration",
        plain:
            "Insecure default settings, verbose error messages, unnecessary features left enabled, or missing hardening.",
        example:
            "A cloud storage bucket left publicly readable, a debug endpoint shipped to production, or default admin credentials never changed.",
        defense:
            "Harden every environment from a documented baseline, disable unused features, suppress stack traces in production, and verify configuration with automated checks in CI.",
        attack: "Enables Exploit Public-Facing Application (T1190) and exposure of secrets.",
    },
    {
        id: "A06",
        name: "Vulnerable and Outdated Components",
        plain:
            "Using a library, framework, or runtime with a known vulnerability — including transitive dependencies you did not choose directly.",
        example:
            "An app pinned to a years-old version of a serialization library with a published remote-code-execution CVE that an attacker exploits with a public proof-of-concept.",
        defense:
            "Maintain a dependency inventory (SBOM), run npm audit / pip-audit / Dependabot, patch on a cadence, and remove components you no longer use.",
        attack: "Exploitation for Client Execution (T1203) and public-facing exploitation.",
    },
    {
        id: "A07",
        name: "Identification and Authentication Failures",
        plain:
            "Weaknesses in how the app proves who a user is — weak passwords, broken session handling, missing MFA, or credential stuffing exposure.",
        example:
            "No rate limit on login plus no MFA, so a leaked password list from another breach is replayed until accounts fall.",
        defense:
            "Require MFA on sensitive accounts, rate-limit and lock out on failed logins, rotate and invalidate sessions properly, and check passwords against known-breached lists.",
        attack: "Brute Force (T1110) and Valid Accounts (T1078).",
    },
    {
        id: "A08",
        name: "Software and Data Integrity Failures",
        plain:
            "Code or data is trusted without verifying it was not tampered with — insecure deserialization, unsigned updates, or a compromised CI/CD pipeline.",
        example:
            "A build pipeline that pulls a dependency from an unverified source, letting a poisoned package execute in your production build (a supply-chain attack).",
        defense:
            "Verify signatures on dependencies and updates, lock and review your CI/CD, use integrity checks (subresource integrity, signed artifacts), and never deserialize untrusted data into objects.",
        attack: "Supply Chain Compromise (T1195).",
    },
    {
        id: "A09",
        name: "Security Logging and Monitoring Failures",
        plain:
            "You cannot detect or investigate an attack because the right events were not logged, or the logs are not monitored.",
        example:
            "An attacker enumerates accounts for weeks, but failed-login and authorization-denied events were never logged, so nobody noticed until customer data appeared for sale.",
        defense:
            "Log authentication, authorization, and high-value actions with enough context to investigate, centralize logs, alert on anomalies, and test that your alerts actually fire.",
        attack: "The absence that lets every other ATT&CK technique go unnoticed.",
    },
    {
        id: "A10",
        name: "Server-Side Request Forgery (SSRF)",
        plain:
            "The app fetches a URL supplied or influenced by the user, letting an attacker make the server request internal resources it should not reach.",
        example:
            "An image-import feature that fetches any URL the user provides, which an attacker points at a cloud metadata endpoint to steal instance credentials.",
        defense:
            "Validate and allow-list outbound destinations, block requests to internal and metadata IP ranges, and do not let user input choose the host of a server-side request.",
        attack: "A pivot toward Cloud Instance Metadata API abuse and internal recon.",
    },
];

export default function OwaspTop10Page() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        articleSchema({
                            headline: "The OWASP Top 10 Explained in Plain English (2026)",
                            description:
                                "Each OWASP Top 10 category in plain English with a real-world example and the concrete defense, plus MITRE ATT&CK mapping.",
                            datePublished: PUBLISHED,
                            slug: SLUG,
                            image: "https://quantlabusa.dev/og-pentest.png",
                            author: { name: author.name, url: authorUrl(author.slug) },
                            section: "Security",
                            keywords: [
                                "owasp top 10 explained",
                                "owasp top 10 2026",
                                "web application security risks",
                            ],
                        }),
                    ),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
            />

            <div className="container mx-auto px-6 max-w-4xl">
                <Breadcrumbs
                    items={[
                        { label: "Home", href: "/" },
                        { label: "Blog", href: "/blog" },
                        { label: TITLE },
                    ]}
                />

                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <ListChecks className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs uppercase tracking-widest text-sky-400 mb-3">
                        Application Security · 2026
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                        The OWASP Top 10 Explained in Plain English (2026)
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed mb-6 max-w-2xl">
                        The OWASP Top 10 is the most cited document in web security and one of
                        the most misread. Here is each category translated into a sentence a
                        non-specialist can understand, a real-world example of how it bites, and
                        the one defense that matters most — with the relevant MITRE ATT&amp;CK
                        technique where it fits.
                    </p>
                    <AuthorByline
                        author={author}
                        publishedDate={PUBLISHED}
                        readMinutes={12}
                        className="mb-8"
                    />
                    <ConsultationCTA
                        label="Get a Web App Pentest"
                        service="Penetration Testing"
                        source="blog-owasp-top-10"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Quick answer
                        </h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>
                                The OWASP Top 10 is a community-maintained awareness list of the
                                ten most critical web application security risks. It is not a
                                standard you certify against — it is the shared vocabulary
                                engineers, auditors, and penetration testers use to talk about
                                risk. The two highest-impact entries, broken access control and
                                insecure design, require human judgment that scanners cannot
                                supply.
                            </strong>
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            The Open Worldwide Application Security Project publishes the Top 10
                            as a snapshot of the risks doing the most damage to real
                            applications. It gets misused in two directions: people treat it as
                            an exhaustive checklist (it is not — it is the floor), and people
                            treat it as a compliance standard (it is not — you cannot certify
                            against it). Used correctly, it is a coverage map and a common
                            language.
                        </p>
                        <p>
                            For the short definition, see our glossary entry on{" "}
                            <Link
                                href="/glossary/what-is-owasp-top-10"
                                className="text-sky-400 hover:underline"
                            >
                                what the OWASP Top 10 is
                            </Link>
                            . For how it differs from an automated scan, read{" "}
                            <Link
                                href="/blog/what-is-a-pen-test-vs-vulnerability-scan"
                                className="text-sky-400 hover:underline"
                            >
                                pen test vs vulnerability scan
                            </Link>
                            . Below, each category gets the same three-part treatment: plain
                            English, a real example, and the defense.
                        </p>
                    </div>
                </AnimatedSection>

                {categories.map((c) => (
                    <AnimatedSection key={c.id} className="mb-10">
                        <div className="rounded-2xl border border-white/8 bg-[#0d1526]/50 p-6 md:p-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                <span className="text-sky-400 font-mono text-xl mr-3">
                                    {c.id}
                                </span>
                                {c.name}
                            </h2>
                            <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-3">
                                <p>
                                    <strong className="text-white">In plain English.</strong>{" "}
                                    {c.plain}
                                </p>
                                <p>
                                    <strong className="text-white">Real-world example.</strong>{" "}
                                    {c.example}
                                </p>
                                <p>
                                    <strong className="text-white">The defense.</strong>{" "}
                                    {c.defense}
                                </p>
                                <p className="text-sm text-gray-400">
                                    <strong className="text-gray-300">ATT&amp;CK link.</strong>{" "}
                                    {c.attack}
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>
                ))}

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        A worked example: chaining A01 into a breach
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Categories rarely bite alone. The most damaging incidents chain two
                            or three together, which is exactly what a penetration test is built
                            to find. Consider a broken-access-control flaw on an API endpoint:
                        </p>
                        <pre className="overflow-x-auto rounded-xl border border-white/10 bg-[#0a1120] p-4 text-sm">
                            <code>{`# A01 Broken Access Control: the ID is trusted, not checked.
GET /api/v1/users/1042/export   Authorization: Bearer <low-priv token>
# Server returns user 1042's full record to a different user.

# Chain with A09: no log of the authorization-denied event...
# because the request was never denied. Nobody sees the export.`}</code>
                        </pre>
                        <p>
                            One missing server-side check (A01) plus missing monitoring (A09)
                            turns a single request into an undetected data export. A scanner sees
                            a 200 OK and moves on. A human tester recognizes that the token
                            belongs to a different user than the record, flags it as broken
                            object-level authorization, and traces the lack of an alert. That is
                            the difference between a{" "}
                            <Link
                                href="/blog/what-is-penetration-testing"
                                className="text-sky-400 hover:underline"
                            >
                                real penetration test
                            </Link>{" "}
                            and scan output with a logo.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Mid-post: map your app against all ten
                    </h2>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-8 text-center">
                        <p className="text-gray-300 mb-6">
                            Want a structured pass over your application against every category?
                            Start with our interactive checklist tool, then book a call to scope
                            a real engagement.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/tools/owasp-checklist-app"
                                className="inline-flex items-center gap-2 text-sky-400 hover:underline font-medium"
                            >
                                Open the OWASP checklist tool
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <ConsultationCTA
                                label="Scope a Web App Pentest"
                                service="Penetration Testing"
                                source="blog-owasp-top-10-mid"
                            />
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Don&apos;t forget the API Top 10
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            The classic Top 10 was written for web applications. Modern apps are
                            mostly an API behind a thin front end, and APIs have their own
                            failure modes — which is why OWASP maintains a separate API Security
                            Top 10. The standout entries are{" "}
                            <strong className="text-white">
                                broken object-level authorization
                            </strong>{" "}
                            (API1) and{" "}
                            <strong className="text-white">
                                broken object property-level authorization
                            </strong>{" "}
                            (API3), both of which are authorization bugs that the web list folds
                            into A01 but that deserve dedicated attention in an API.
                        </p>
                        <p>
                            If you build or ship an API, treat both lists as mandatory. We go
                            deep on the API side in our{" "}
                            <Link
                                href="/blog/api-security-best-practices-2026"
                                className="text-sky-400 hover:underline"
                            >
                                API security best practices guide
                            </Link>
                            , and our{" "}
                            <Link
                                href="/services/api-development"
                                className="text-sky-400 hover:underline"
                            >
                                API development practice
                            </Link>{" "}
                            bakes these defenses in from the design stage.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Frequently asked questions
                    </h2>
                    <div className="space-y-6">
                        {faqs.map((item) => (
                            <div
                                key={item.q}
                                className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6"
                            >
                                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                                <p className="text-gray-300 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <Sources items={sources} />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Related reading and next steps
                    </h2>
                    <ul className="space-y-3">
                        {[
                            { href: "/services/web-app-pentest", label: "Web Application Pentest service" },
                            { href: "/services/penetration-testing", label: "Penetration Testing service overview" },
                            { href: "/services/mitre-attack-assessment", label: "MITRE ATT&CK Assessment" },
                            { href: "/services/api-development", label: "API Development service" },
                            { href: "/blog/api-security-best-practices-2026", label: "API security best practices (2026)" },
                            { href: "/blog/what-is-penetration-testing", label: "What is penetration testing?" },
                            { href: "/blog/what-is-a-pen-test-vs-vulnerability-scan", label: "Pen test vs vulnerability scan" },
                            { href: "/glossary/what-is-owasp-top-10", label: "What is the OWASP Top 10?" },
                            { href: "/glossary/what-is-mitre-attack", label: "What is MITRE ATT&CK?" },
                            { href: "/tools/owasp-checklist-app", label: "Interactive OWASP checklist tool" },
                            { href: "/contact", label: "Talk to Bill about your web app security" },
                        ].map((l) => (
                            <li key={l.href} className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-sky-400 flex-shrink-0" />
                                <Link href={l.href} className="text-sky-400 hover:underline">
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <EditorialFooter reviewedDate={PUBLISHED} />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Know the list. Now test against it.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            A web app pentest maps every finding to the OWASP category and the
                            ATT&amp;CK technique it enables. Book a free scoping call and
                            we&apos;ll cover the right depth for your app.
                        </p>
                        <ConsultationCTA
                            label="Book the Scoping Call"
                            service="Penetration Testing"
                            source="blog-owasp-top-10-cta"
                        />
                        <div className="mt-6 text-sm text-gray-400">
                            Or call Bill directly at{" "}
                            <a href="tel:+17706521282" className="text-sky-400 hover:underline">
                                (770) 652-1282
                            </a>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mt-16 mb-12">
                    <RelatedPosts
                        currentSlug={SLUG}
                        topics={["pentest", "stack"]}
                        pinned={[
                            "what-is-penetration-testing",
                            "what-is-a-pen-test-vs-vulnerability-scan",
                            "penetration-test-cost-2026",
                        ]}
                        heading="More application security reading"
                    />
                </AnimatedSection>

                <AnimatedSection className="mt-12">
                    <div className="flex items-center justify-between text-sm text-gray-400">
                        <Link
                            href="/blog"
                            className="hover:text-sky-400 inline-flex items-center gap-1"
                        >
                            <ArrowRight className="w-3 h-3 rotate-180" /> All blog posts
                        </Link>
                        <span>Updated June 3, 2026</span>
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
