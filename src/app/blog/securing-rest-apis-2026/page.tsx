import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AuthorByline } from "@/components/AuthorByline";
import { EditorialFooter } from "@/components/EditorialFooter";
import { Sources } from "@/components/Sources";
import { ArrowRight, Check, Server } from "lucide-react";
import { articleMetadata } from "@/lib/seoMeta";
import { articleSchema, faqSchema } from "@/lib/schemas";
import { getAuthor, authorUrl } from "@/lib/authors";

const SLUG = "securing-rest-apis-2026";
const PUBLISHED = "2026-06-03";
const TITLE = "Securing REST APIs (2026)";
const author = getAuthor("bill-beltz");

export const metadata: Metadata = articleMetadata({
    title: "Securing REST APIs: A 2026 Engineering Guide",
    description:
        "A 2026 guide to securing REST APIs: TLS, auth, CORS, HTTP method and status discipline, error handling, and versioning — with code and MITRE ATT&CK mapping.",
    slug: `blog/${SLUG}`,
    image: "/og-pentest.png",
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    authors: [author.name],
    keywords: [
        "securing rest apis",
        "rest api security",
        "cors security",
        "rest api authentication 2026",
    ],
});

const faqs = [
    {
        q: "What does it mean to secure a REST API?",
        a: "It means enforcing transport security, authentication, and authorization on every endpoint, while also getting the REST-specific details right: correct HTTP method semantics, conservative CORS, safe error handling that does not leak internals, strict input validation, and rate limiting. REST's stateless, resource-oriented design has its own pitfalls — verbs that mutate on a GET, overly permissive cross-origin headers, and verbose stack traces in error bodies are common, exploitable mistakes that are unique to how REST APIs are built.",
    },
    {
        q: "How should a REST API handle CORS securely?",
        a: "Reflect only an explicit allow-list of trusted origins, never echo the request's Origin header blindly, and never combine a wildcard origin with credentials — browsers forbid it for good reason. Restrict allowed methods and headers to what the API actually uses, keep preflight cache durations reasonable, and remember that CORS is a browser protection, not server-side access control. CORS decides which web origins may read responses; it does not authenticate or authorize the request itself.",
    },
    {
        q: "Why do HTTP methods matter for REST API security?",
        a: "Because method semantics encode safety guarantees that caches, proxies, and crawlers rely on. GET and HEAD must be safe and side-effect-free; a GET that mutates state can be triggered by a prefetch or a cached link and bypasses CSRF assumptions. Mutating verbs (POST, PUT, PATCH, DELETE) should require authentication and, for cookie-based sessions, CSRF protection. Map each route to the correct method and reject mismatches rather than treating all verbs the same.",
    },
    {
        q: "How should a REST API return errors safely?",
        a: "Return the correct status code with a minimal, structured body — and nothing more. A 500 should not include a stack trace, SQL fragment, file path, or framework version, all of which hand an attacker a map of your internals. Use 401 versus 403 deliberately, return 404 instead of 403 where revealing that a resource exists would itself leak information, and log the full detail server-side while sending the client only what it needs to act.",
    },
    {
        q: "Should REST APIs use API keys or tokens?",
        a: "Prefer short-lived bearer tokens (OAuth 2.0 / OpenID Connect access tokens) for user-facing and service-to-service calls, validating signature, issuer, audience, and expiry on every request. API keys are acceptable for server-to-server integrations where a full token flow is impractical, but they should be scoped to least privilege, rotated on a schedule, and never embedded in client-side or mobile bundles where they are trivially extracted.",
    },
    {
        q: "How do you test a REST API for security issues?",
        a: "With authenticated, role-aware penetration testing rather than scanning alone. A tester uses low-privilege accounts to attempt access to other users' and tenants' resources, manipulate object properties, abuse method semantics, probe CORS and error handling, and exhaust resources. Findings are mapped to the OWASP API Security Top 10 and the relevant MITRE ATT&CK techniques so engineers and auditors can prioritize and verify each fix.",
    },
];

const sources = [
    {
        label: "OWASP REST Security Cheat Sheet",
        href: "https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html",
        publisher: "OWASP",
    },
    {
        label: "OWASP API Security Top 10 (2023)",
        href: "https://owasp.org/API-Security/editions/2023/en/0x11-t10/",
        publisher: "OWASP",
    },
    {
        label: "RFC 9110 — HTTP Semantics",
        href: "https://www.rfc-editor.org/rfc/rfc9110",
        publisher: "IETF",
    },
    {
        label: "MITRE ATT&CK Enterprise Matrix",
        href: "https://attack.mitre.org/matrices/enterprise/",
        publisher: "MITRE",
    },
];

export default function SecuringRestApisPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        articleSchema({
                            headline: "Securing REST APIs: A 2026 Engineering Guide",
                            description:
                                "TLS, auth, CORS, HTTP method and status discipline, error handling, and versioning to secure REST APIs, with code and MITRE ATT&CK mapping.",
                            datePublished: PUBLISHED,
                            slug: SLUG,
                            image: "https://quantlabusa.dev/og-pentest.png",
                            author: { name: author.name, url: authorUrl(author.slug) },
                            section: "Security",
                            keywords: [
                                "securing rest apis",
                                "rest api security",
                                "cors security",
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
                        <Server className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs uppercase tracking-widest text-sky-400 mb-3">
                        API Security · 2026
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                        Securing REST APIs: A 2026 Engineering Guide
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed mb-6 max-w-2xl">
                        REST&apos;s stateless, resource-oriented design is simple to build and
                        easy to get subtly wrong. This is the practitioner&apos;s guide to the
                        REST-specific controls that matter: transport, authentication, CORS,
                        HTTP method and status discipline, error handling, and versioning — with
                        code and MITRE ATT&amp;CK mapping.
                    </p>
                    <AuthorByline
                        author={author}
                        publishedDate={PUBLISHED}
                        readMinutes={13}
                        className="mb-8"
                    />
                    <ConsultationCTA
                        label="Get an API Pentest"
                        service="Penetration Testing"
                        source="blog-rest-api-security"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Quick answer
                        </h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>
                                Secure a REST API by enforcing TLS everywhere, authenticating every
                                request and authorizing every resource on the server, restricting
                                CORS to an explicit origin allow-list, mapping each route to the
                                correct HTTP method, returning minimal error bodies with the right
                                status code, and rate-limiting every endpoint. Get the REST-specific
                                details right — they are where these APIs most often leak. Then
                                verify with authenticated, role-aware penetration testing.
                            </strong>
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            This guide focuses on the controls specific to REST — the HTTP-level
                            details, CORS, and error discipline that the protocol&apos;s design
                            makes easy to fumble. For the full risk taxonomy and the
                            authorization-first ordering of the OWASP API Top 10, pair it with our{" "}
                            <Link
                                href="/blog/api-security-best-practices-2026"
                                className="text-sky-400 hover:underline"
                            >
                                API security best practices guide
                            </Link>
                            . We build APIs for a living — our{" "}
                            <Link
                                href="/services/api-development"
                                className="text-sky-400 hover:underline"
                            >
                                API development practice
                            </Link>{" "}
                            bakes these defenses in, and our{" "}
                            <Link
                                href="/services/web-app-pentest"
                                className="text-sky-400 hover:underline"
                            >
                                web app pentest
                            </Link>{" "}
                            tests them.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        1. Transport and authentication
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Every REST endpoint must be served over TLS — including internal
                            service-to-service calls — so credentials and data are never exposed on
                            the wire. On top of that, authenticate every request using a standard:
                            short-lived bearer tokens for user and service calls, scoped API keys
                            only where a full token flow is impractical. Validate the token on every
                            request; never trust one because it &quot;looks right.&quot;
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                Enforce TLS and HSTS; redirect plain HTTP and reject downgrade. See{" "}
                                <Link
                                    href="/glossary/what-is-tls"
                                    className="text-sky-400 hover:underline"
                                >
                                    what TLS is
                                </Link>{" "}
                                for the primer.
                            </li>
                            <li>
                                Validate token signature, issuer, audience, and expiry on every
                                request. Keep access tokens short-lived.
                            </li>
                            <li>
                                Send credentials in the <code className="text-sky-300">Authorization</code>{" "}
                                header, not the URL — query strings end up in logs and proxies.
                            </li>
                        </ul>
                        <p className="text-sm text-gray-400">
                            <strong className="text-gray-300">ATT&amp;CK link:</strong> weak
                            authentication enables Valid Accounts (T1078); cleartext transport
                            enables Adversary-in-the-Middle (T1557).
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        2. CORS: a browser control, not an access control
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Cross-Origin Resource Sharing decides which web origins a browser will
                            let read your responses. It is routinely misconfigured into a
                            vulnerability by reflecting the request&apos;s{" "}
                            <code className="text-sky-300">Origin</code> back unconditionally — which
                            effectively allows every site — especially when combined with
                            credentials.
                        </p>
                        <pre className="overflow-x-auto rounded-xl border border-white/10 bg-[#0a1120] p-4 text-sm">
                            <code>{`// VULNERABLE — reflects any origin AND allows credentials
res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
res.setHeader("Access-Control-Allow-Credentials", "true");

// FIXED — allow-list the origin; only then send credentials
const ALLOWED = new Set(["https://app.example.com"]);
const origin = req.headers.origin;
if (origin && ALLOWED.has(origin)) {
  res.setHeader("Access-Control-Allow-Origin", origin);
  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Credentials", "true");
}`}</code>
                        </pre>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                Never combine{" "}
                                <code className="text-sky-300">Allow-Origin: *</code> with
                                credentials — and never reflect an unvalidated origin.
                            </li>
                            <li>
                                Restrict allowed methods and headers to what the API actually uses.
                            </li>
                            <li>
                                Remember CORS does not authenticate or authorize — server-side checks
                                still do all the real work.
                            </li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        3. HTTP method and status discipline
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            REST leans on HTTP semantics, and those semantics carry security
                            guarantees. <code className="text-sky-300">GET</code> and{" "}
                            <code className="text-sky-300">HEAD</code> must be safe — no state change
                            — because browsers, caches, and crawlers may call them at will. A
                            mutation behind a GET can be triggered by a prefetch or a cached link and
                            sidesteps CSRF assumptions entirely.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                Map each route to the correct verb; reject method mismatches with{" "}
                                <code className="text-sky-300">405</code> rather than handling them
                                anyway.
                            </li>
                            <li>
                                For cookie-based sessions, require CSRF protection on mutating verbs;
                                token-in-header auth is naturally resistant.
                            </li>
                            <li>
                                Use status codes deliberately — <code className="text-sky-300">401</code>{" "}
                                for unauthenticated, <code className="text-sky-300">403</code> for
                                forbidden, <code className="text-sky-300">429</code> for rate-limited.
                            </li>
                        </ul>
                        <p className="text-sm text-gray-400">
                            <strong className="text-gray-300">ATT&amp;CK link:</strong> method and
                            request abuse maps to Exploit Public-Facing Application (T1190).
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        4. Error handling and information disclosure
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            A verbose error response is a free reconnaissance gift. Stack traces, SQL
                            fragments, file paths, and framework version banners tell an attacker
                            exactly what you are running and where the seams are. Return a minimal,
                            structured body and log the detail server-side.
                        </p>
                        <pre className="overflow-x-auto rounded-xl border border-white/10 bg-[#0a1120] p-4 text-sm">
                            <code>{`// VULNERABLE — leaks internals to the client
catch (err) {
  res.status(500).json({ error: err.stack }); // SQL, paths, versions
}

// FIXED — log detail server-side, return an opaque body
catch (err) {
  logger.error({ err, reqId: req.id });
  res.status(500).json({ error: "internal_error", reqId: req.id });
}`}</code>
                        </pre>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                Strip server banners and{" "}
                                <code className="text-sky-300">X-Powered-By</code>; do not advertise
                                your stack.
                            </li>
                            <li>
                                Return <code className="text-sky-300">404</code> instead of{" "}
                                <code className="text-sky-300">403</code> where existence itself is
                                sensitive.
                            </li>
                            <li>
                                Validate every input against a strict schema at the boundary —
                                parameterize all database access (see{" "}
                                <Link
                                    href="/blog/preventing-sql-injection-2026"
                                    className="text-sky-400 hover:underline"
                                >
                                    preventing SQL injection
                                </Link>
                                ).
                            </li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        5. Versioning, inventory, and rate limiting
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Forgotten endpoints are how breaches happen. An old{" "}
                            <code className="text-sky-300">/v1</code> still live after{" "}
                            <code className="text-sky-300">/v2</code> shipped, an undocumented staging
                            route, or a debug endpoint left enabled — each is an unmonitored door.
                            Pair a clean versioning strategy with an authoritative inventory and rate
                            limits on everything.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                Maintain an up-to-date inventory of every endpoint and version;
                                decommission deliberately, do not just stop documenting.
                            </li>
                            <li>
                                Rate-limit per authenticated identity and per IP, with tighter limits
                                on expensive routes; return{" "}
                                <code className="text-sky-300">429</code> with{" "}
                                <code className="text-sky-300">Retry-After</code>.
                            </li>
                            <li>
                                Log authentication, authorization-denied, and high-value actions, and
                                alert on anomalies.
                            </li>
                        </ul>
                        <p className="text-sm text-gray-400">
                            <strong className="text-gray-300">ATT&amp;CK link:</strong> forgotten
                            endpoints feed Exploit Public-Facing Application (T1190); missing limits
                            enable Endpoint Denial of Service (T1499).
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Mid-post: test the API, don&apos;t just harden it
                    </h2>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-8 text-center">
                        <p className="text-gray-300 mb-6">
                            Hardening is half the work. An authenticated, role-aware API pentest
                            proves your CORS, auth, and authorization checks actually hold. Book a
                            free scoping call.
                        </p>
                        <ConsultationCTA
                            label="Scope an API Pentest"
                            service="Penetration Testing"
                            source="blog-rest-api-security-mid"
                        />
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        REST security checklist at a glance
                    </h2>
                    <div className="overflow-x-auto mt-4">
                        <table className="w-full text-sm text-left border border-white/10 rounded-xl overflow-hidden">
                            <thead className="bg-[#0d1526] text-white">
                                <tr>
                                    <th className="px-4 py-3 border-b border-white/10">Control</th>
                                    <th className="px-4 py-3 border-b border-white/10">
                                        What good looks like
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Transport</td>
                                    <td className="px-4 py-3">
                                        TLS + HSTS everywhere; no plaintext, no downgrade
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Auth</td>
                                    <td className="px-4 py-3">
                                        Short-lived tokens validated on every request
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">CORS</td>
                                    <td className="px-4 py-3">
                                        Explicit origin allow-list; no wildcard with credentials
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Methods</td>
                                    <td className="px-4 py-3">
                                        Safe verbs are side-effect-free; mismatches return 405
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Errors</td>
                                    <td className="px-4 py-3">
                                        Minimal bodies; detail logged server-side, not returned
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Inventory</td>
                                    <td className="px-4 py-3">
                                        Every endpoint and version tracked; old routes retired
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-gray-400 mt-4">
                        For the authorization-first risk ordering, see{" "}
                        <Link
                            href="/blog/api-security-best-practices-2026"
                            className="text-sky-400 hover:underline"
                        >
                            API security best practices
                        </Link>{" "}
                        and the{" "}
                        <Link
                            href="/glossary/what-is-an-api"
                            className="text-sky-400 hover:underline"
                        >
                            glossary entry on APIs
                        </Link>
                        .
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Operational practices that hold over time
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            REST APIs sprawl as products grow. Three habits keep them secure past
                            launch day:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong className="text-white">Contract-driven testing.</strong> Lint
                                your OpenAPI spec and reject requests that do not match it — a strong
                                contract is also a security boundary.
                            </li>
                            <li>
                                <strong className="text-white">Secrets hygiene.</strong> Keep keys in
                                a secrets manager and out of client bundles — the pattern is in{" "}
                                <Link
                                    href="/blog/secrets-management-best-practices-2026"
                                    className="text-sky-400 hover:underline"
                                >
                                    secrets management best practices
                                </Link>
                                .
                            </li>
                            <li>
                                <strong className="text-white">Regular testing.</strong> Re-test after
                                any release that changes auth or data access. For SaaS teams, the
                                broader view is in{" "}
                                <Link
                                    href="/blog/cybersecurity-services-for-saas-startups-2026"
                                    className="text-sky-400 hover:underline"
                                >
                                    cybersecurity services for SaaS startups
                                </Link>
                                .
                            </li>
                        </ul>
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
                            { href: "/services/api-development", label: "API Development service" },
                            { href: "/services/web-app-pentest", label: "Web Application Pentest service" },
                            { href: "/services/penetration-testing", label: "Penetration Testing service overview" },
                            { href: "/blog/api-security-best-practices-2026", label: "API security best practices (2026)" },
                            { href: "/blog/preventing-sql-injection-2026", label: "Preventing SQL injection (2026)" },
                            { href: "/blog/xss-prevention-guide-2026", label: "XSS prevention guide (2026)" },
                            { href: "/blog/secrets-management-best-practices-2026", label: "Secrets management best practices (2026)" },
                            { href: "/glossary/what-is-an-api", label: "What is an API?" },
                            { href: "/blog/owasp-top-10-explained-2026", label: "The OWASP Top 10 explained (2026)" },
                            { href: "/contact", label: "Talk to Bill about your API security" },
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
                            Harden it, then prove it holds.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            An authenticated API pentest maps every finding to the OWASP API Top 10
                            and the ATT&amp;CK technique it enables. Book a free scoping call and
                            we&apos;ll cover the right depth for your API.
                        </p>
                        <ConsultationCTA
                            label="Book the Scoping Call"
                            service="Penetration Testing"
                            source="blog-rest-api-security-cta"
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
                            "api-security-best-practices-2026",
                            "preventing-sql-injection-2026",
                            "what-is-penetration-testing",
                        ]}
                        heading="More engineering security reading"
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
