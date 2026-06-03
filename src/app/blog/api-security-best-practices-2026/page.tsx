import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AuthorByline } from "@/components/AuthorByline";
import { EditorialFooter } from "@/components/EditorialFooter";
import { Sources } from "@/components/Sources";
import { ArrowRight, Check, KeyRound } from "lucide-react";
import { articleMetadata } from "@/lib/seoMeta";
import { articleSchema, faqSchema } from "@/lib/schemas";
import { getAuthor, authorUrl } from "@/lib/authors";

const SLUG = "api-security-best-practices-2026";
const PUBLISHED = "2026-06-03";
const TITLE = "API Security Best Practices (2026)";
const author = getAuthor("bill-beltz");

export const metadata: Metadata = articleMetadata({
    title: "API Security Best Practices: A 2026 Engineering Guide",
    description:
        "A practical 2026 API security guide: authentication, authorization, rate limiting, input validation, secrets, and the OWASP API Top 10 — with code and MITRE ATT&CK mapping.",
    slug: `blog/${SLUG}`,
    image: "/og-pentest.png",
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    authors: [author.name],
    keywords: [
        "api security best practices",
        "owasp api top 10",
        "api authentication authorization",
        "api rate limiting 2026",
    ],
});

const faqs = [
    {
        q: "What are the most important API security best practices?",
        a: "Authenticate every request, authorize every object access on the server, validate and constrain all input, rate-limit and quota every endpoint, keep secrets out of code and clients, and log security-relevant events. Above all, enforce object-level authorization — the single most common and most damaging API flaw is an endpoint that trusts an ID from the client instead of checking it against the authenticated session.",
    },
    {
        q: "What is the difference between authentication and authorization in an API?",
        a: "Authentication proves who is making the request — verifying a token, key, or session. Authorization decides what that identity is allowed to do. APIs frequently get authentication right and authorization wrong: a valid token is accepted, but the server never checks whether that user owns the specific record being requested. That gap is broken object-level authorization, the top entry on the OWASP API Security Top 10.",
    },
    {
        q: "What is the OWASP API Security Top 10?",
        a: "It is OWASP's API-specific risk list, separate from the web Top 10. It leads with authorization failures unique to APIs: broken object-level authorization (API1), broken authentication (API2), broken object property-level authorization (API3), and unrestricted resource consumption (API4). Because modern apps are mostly APIs behind a thin UI, this list is often the one that determines whether you get breached.",
    },
    {
        q: "How should APIs handle rate limiting?",
        a: "Apply limits per authenticated identity and per IP, with stricter limits on expensive or sensitive endpoints — login, password reset, search, export, and anything that triggers downstream cost. Return 429 with a Retry-After header, fail closed when the limiter is unavailable, and pair limits with quotas so a single tenant cannot exhaust shared capacity. Rate limiting is your primary defense against credential stuffing and resource-consumption abuse.",
    },
    {
        q: "Where should API secrets and keys be stored?",
        a: "In a dedicated secrets manager (AWS Secrets Manager, GCP Secret Manager, HashiCorp Vault) or platform environment variables that are never committed to source. Never embed secret keys in client-side bundles or mobile apps, where they are trivially extractable. Rotate keys on a schedule and on suspicion of compromise, scope them to the least privilege required, and prefer short-lived tokens over long-lived static keys.",
    },
    {
        q: "How do you test API security?",
        a: "With authenticated, role-aware penetration testing rather than scanning alone. A tester uses low-privilege accounts on each role tier and tries to access objects belonging to other users and tenants, manipulate object properties, abuse business logic, and exhaust resources. Findings are mapped to the OWASP API Top 10 and the relevant MITRE ATT&CK techniques so engineers and auditors can prioritize the fix.",
    },
];

const sources = [
    {
        label: "OWASP API Security Top 10 (2023)",
        href: "https://owasp.org/API-Security/editions/2023/en/0x11-t10/",
        publisher: "OWASP",
    },
    {
        label: "OWASP Cheat Sheet Series — REST Security",
        href: "https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html",
        publisher: "OWASP",
    },
    {
        label: "RFC 6749 — The OAuth 2.0 Authorization Framework",
        href: "https://www.rfc-editor.org/rfc/rfc6749",
        publisher: "IETF",
    },
    {
        label: "MITRE ATT&CK Enterprise Matrix",
        href: "https://attack.mitre.org/matrices/enterprise/",
        publisher: "MITRE",
    },
];

export default function ApiSecurityPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        articleSchema({
                            headline: "API Security Best Practices: A 2026 Engineering Guide",
                            description:
                                "Authentication, authorization, rate limiting, input validation, secrets, and the OWASP API Top 10, with code and MITRE ATT&CK mapping.",
                            datePublished: PUBLISHED,
                            slug: SLUG,
                            image: "https://quantlabusa.dev/og-pentest.png",
                            author: { name: author.name, url: authorUrl(author.slug) },
                            section: "Security",
                            keywords: [
                                "api security best practices",
                                "owasp api top 10",
                                "api authentication authorization",
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
                        <KeyRound className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs uppercase tracking-widest text-sky-400 mb-3">
                        API Security · 2026
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                        API Security Best Practices: A 2026 Engineering Guide
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed mb-6 max-w-2xl">
                        Your application is mostly an API now, and that is where the
                        high-impact breaches happen. This is the practitioner&apos;s guide to
                        the controls that matter: authentication, authorization, rate limiting,
                        input validation, and secrets — organized around the OWASP API Security
                        Top 10, with code and MITRE ATT&amp;CK mapping.
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
                        source="blog-api-security"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Quick answer
                        </h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>
                                Secure an API by authenticating every request, authorizing every
                                object access on the server, validating and constraining all
                                input, rate-limiting and quota-ing every endpoint, and keeping
                                secrets out of code and clients. The single highest-impact control
                                is object-level authorization — never trust an identifier supplied
                                by the client. Organize the work around the OWASP API Security Top
                                10 and verify it with authenticated, role-aware penetration
                                testing.
                            </strong>
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            The classic{" "}
                            <Link
                                href="/blog/owasp-top-10-explained-2026"
                                className="text-sky-400 hover:underline"
                            >
                                OWASP Top 10
                            </Link>{" "}
                            was written for web pages. APIs have their own failure modes, which is
                            why OWASP maintains a separate API Security Top 10 that leads with
                            authorization rather than injection. We build APIs for a living —
                            our{" "}
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
                            tests them. The sections below follow the order that matters in
                            practice, not the order people expect.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        1. Authentication: prove who is calling
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Authentication verifies identity. Use a standard rather than rolling
                            your own: OAuth 2.0 / OpenID Connect for user-facing APIs, signed
                            short-lived tokens (JWT or opaque) for service-to-service calls, and
                            scoped API keys only where a full token flow is impractical. The
                            failure mode here is OWASP{" "}
                            <strong className="text-white">API2: Broken Authentication</strong>{" "}
                            — weak tokens, missing expiry, no rotation, or accepting tokens that
                            were never validated.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                Validate token signature, issuer, audience, and expiry on every
                                request — do not trust an unverified token because it &quot;looks
                                right.&quot;
                            </li>
                            <li>Keep access tokens short-lived; use refresh tokens deliberately.</li>
                            <li>Require MFA on the human login that mints those tokens.</li>
                            <li>
                                Rate-limit the login and token endpoints (see section 4) to blunt
                                credential stuffing.
                            </li>
                        </ul>
                        <p className="text-sm text-gray-400">
                            <strong className="text-gray-300">ATT&amp;CK link:</strong> weak
                            authentication enables Valid Accounts (T1078) and Brute Force (T1110).
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        2. Authorization: the bug that actually breaches you
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Authorization decides what an authenticated caller may do. This is
                            where most real API breaches happen, and it splits into two OWASP
                            entries:{" "}
                            <strong className="text-white">
                                API1: Broken Object-Level Authorization (BOLA)
                            </strong>{" "}
                            and{" "}
                            <strong className="text-white">
                                API3: Broken Object Property-Level Authorization
                            </strong>
                            . BOLA is the classic: the endpoint trusts an ID from the client
                            instead of checking ownership against the session.
                        </p>
                        <pre className="overflow-x-auto rounded-xl border border-white/10 bg-[#0a1120] p-4 text-sm">
                            <code>{`// VULNERABLE — trusts the URL parameter
app.get("/api/orders/:id", auth, async (req, res) => {
  const order = await db.orders.findById(req.params.id);
  return res.json(order); // any logged-in user reads any order
});

// FIXED — scope the lookup to the authenticated owner
app.get("/api/orders/:id", auth, async (req, res) => {
  const order = await db.orders.findOne({
    id: req.params.id,
    ownerId: req.user.id, // ownership enforced server-side
  });
  if (!order) return res.status(404).end();
  return res.json(order);
});`}</code>
                        </pre>
                        <p>
                            Property-level authorization is the subtler cousin: a user is allowed
                            to update <em>a</em> record but should not be allowed to set every{" "}
                            <em>field</em> on it. Mass-assignment bugs let a caller flip{" "}
                            <code className="text-sky-300">role: &quot;admin&quot;</code> or{" "}
                            <code className="text-sky-300">isVerified: true</code> through an
                            update endpoint that blindly spreads the request body.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Enforce authorization on the server for every object access. Deny by default.</li>
                            <li>
                                Allow-list which fields a request may set; never spread the raw
                                body into a database write.
                            </li>
                            <li>
                                For multi-tenant systems, scope every query by tenant — consider
                                database-level row isolation. Our{" "}
                                <Link
                                    href="/services/saas-platform-development"
                                    className="text-sky-400 hover:underline"
                                >
                                    SaaS platform development
                                </Link>{" "}
                                practice builds tenant isolation in at the data layer.
                            </li>
                            <li>Test with a low-privilege account, never an admin one.</li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        3. Input validation and output handling
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Validate every input against a strict schema at the boundary — types,
                            ranges, lengths, and allowed values. Reject what does not conform
                            rather than trying to sanitize it. A schema validator (Zod, JSON
                            Schema, Pydantic) at the edge of each handler closes a wide class of
                            injection and logic bugs before they reach your data layer.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                Use parameterized queries / prepared statements everywhere — never
                                build SQL by concatenation.
                            </li>
                            <li>
                                Constrain numeric and quantity fields. A negative or absurdly large
                                amount is a business-logic exploit waiting to happen.
                            </li>
                            <li>
                                Set and verify <code className="text-sky-300">Content-Type</code>;
                                reject unexpected payload formats.
                            </li>
                            <li>
                                Guard against server-side request forgery: if your API fetches a
                                URL, allow-list the destination and block internal and
                                cloud-metadata ranges.
                            </li>
                        </ul>
                        <p className="text-sm text-gray-400">
                            <strong className="text-gray-300">ATT&amp;CK link:</strong> input flaws
                            feed Exploit Public-Facing Application (T1190).
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        4. Rate limiting and resource consumption
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            OWASP{" "}
                            <strong className="text-white">
                                API4: Unrestricted Resource Consumption
                            </strong>{" "}
                            covers the cost-and-availability side. Without limits, one client can
                            exhaust your capacity, run up your cloud bill, or brute-force
                            credentials. Apply limits per authenticated identity and per IP, with
                            tighter limits on expensive endpoints.
                        </p>
                        <pre className="overflow-x-auto rounded-xl border border-white/10 bg-[#0a1120] p-4 text-sm">
                            <code>{`// Stricter limit on a sensitive endpoint
// 5 attempts / 15 min / IP on login; fail closed on limiter error
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,       // emit RateLimit + Retry-After
  handler: (_req, res) =>
    res.status(429).json({ error: "too_many_requests" }),
});
app.post("/api/login", loginLimiter, loginHandler);`}</code>
                        </pre>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                Return <code className="text-sky-300">429</code> with a{" "}
                                <code className="text-sky-300">Retry-After</code> header.
                            </li>
                            <li>Stricter limits on login, password reset, search, and export.</li>
                            <li>
                                Pair limits with per-tenant quotas so one customer cannot starve
                                the rest.
                            </li>
                            <li>
                                Bound pagination and payload sizes; reject unbounded list requests.
                            </li>
                        </ul>
                        <p className="text-sm text-gray-400">
                            <strong className="text-gray-300">ATT&amp;CK link:</strong> missing
                            limits enable Brute Force (T1110) and Endpoint Denial of Service
                            (T1499).
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        5. Secrets, keys, and transport
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Secrets belong in a secrets manager or platform environment
                            variables, never in source control and never in a client bundle where
                            they are trivially extracted. This is the raw material for account
                            takeover, so treat a leaked key as an incident.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                Store secrets in AWS Secrets Manager, GCP Secret Manager, or Vault.
                            </li>
                            <li>Rotate on a schedule and on any suspicion of exposure.</li>
                            <li>Scope keys to least privilege; prefer short-lived tokens.</li>
                            <li>Enforce TLS on every endpoint, including internal service calls.</li>
                            <li>
                                Verify signatures on inbound webhooks — see our{" "}
                                <Link
                                    href="/blog/stripe-webhook-security-best-practices"
                                    className="text-sky-400 hover:underline"
                                >
                                    Stripe webhook security guide
                                </Link>{" "}
                                for the pattern.
                            </li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Mid-post: test the API, don&apos;t just harden it
                    </h2>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-8 text-center">
                        <p className="text-gray-300 mb-6">
                            Hardening is half the work. An authenticated, role-aware API pentest
                            proves the authorization checks actually hold. Book a free scoping
                            call.
                        </p>
                        <ConsultationCTA
                            label="Scope an API Pentest"
                            service="Penetration Testing"
                            source="blog-api-security-mid"
                        />
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        The OWASP API Security Top 10 at a glance
                    </h2>
                    <div className="overflow-x-auto mt-4">
                        <table className="w-full text-sm text-left border border-white/10 rounded-xl overflow-hidden">
                            <thead className="bg-[#0d1526] text-white">
                                <tr>
                                    <th className="px-4 py-3 border-b border-white/10">Risk</th>
                                    <th className="px-4 py-3 border-b border-white/10">
                                        What it means
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">API1 BOLA</td>
                                    <td className="px-4 py-3">
                                        Object access not scoped to the authenticated owner
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">API2 Auth</td>
                                    <td className="px-4 py-3">
                                        Broken or weak authentication of the caller
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">API3 Property auth</td>
                                    <td className="px-4 py-3">
                                        Caller can read/write fields they should not (mass
                                        assignment)
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">API4 Resources</td>
                                    <td className="px-4 py-3">
                                        No rate limits or quotas; consumption abuse
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">API5 Function auth</td>
                                    <td className="px-4 py-3">
                                        Regular users reach admin-only functions
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">API6–API10</td>
                                    <td className="px-4 py-3">
                                        Business-flow abuse, SSRF, misconfiguration, inventory
                                        gaps, unsafe third-party API use
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-gray-400 mt-4">
                        For the web-application companion list, see{" "}
                        <Link
                            href="/blog/owasp-top-10-explained-2026"
                            className="text-sky-400 hover:underline"
                        >
                            the OWASP Top 10 explained
                        </Link>
                        , and the short definition lives in the{" "}
                        <Link
                            href="/glossary/what-is-owasp-top-10"
                            className="text-sky-400 hover:underline"
                        >
                            glossary
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
                            Controls decay without process. Three habits keep an API secure past
                            launch day:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong className="text-white">Inventory.</strong> Maintain an
                                up-to-date list of every endpoint and version. OWASP API9
                                (improper inventory management) is how forgotten staging or v1
                                endpoints become the breach.
                            </li>
                            <li>
                                <strong className="text-white">Logging and monitoring.</strong> Log
                                authentication, authorization-denied, and high-value actions with
                                enough context to investigate, and alert on anomalies.
                            </li>
                            <li>
                                <strong className="text-white">Regular testing.</strong> Re-test
                                after any release that changes auth or data access. For
                                compliance-driven cadence, see{" "}
                                <Link
                                    href="/blog/how-to-prepare-for-a-soc-2-audit-2026"
                                    className="text-sky-400 hover:underline"
                                >
                                    how to prepare for a SOC 2 audit
                                </Link>
                                .
                            </li>
                        </ul>
                        <p>
                            For founders building payment or money-movement APIs, the stakes are
                            higher still — our{" "}
                            <Link
                                href="/blog/penetration-testing-for-fintech-startups-2026"
                                className="text-sky-400 hover:underline"
                            >
                                fintech penetration testing guide
                            </Link>{" "}
                            covers the threat model specific to APIs that touch funds, and the{" "}
                            <Link
                                href="/services/saas-platform-development"
                                className="text-sky-400 hover:underline"
                            >
                                SaaS platform development
                            </Link>{" "}
                            practice builds these controls in from day one.
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
                            { href: "/services/api-development", label: "API Development service" },
                            { href: "/services/web-app-pentest", label: "Web Application Pentest service" },
                            { href: "/services/saas-platform-development", label: "SaaS Platform Development service" },
                            { href: "/services/penetration-testing", label: "Penetration Testing service overview" },
                            { href: "/blog/owasp-top-10-explained-2026", label: "The OWASP Top 10 explained (2026)" },
                            { href: "/blog/penetration-testing-for-fintech-startups-2026", label: "Penetration testing for fintech startups" },
                            { href: "/blog/stripe-webhook-security-best-practices", label: "Stripe webhook security best practices" },
                            { href: "/blog/red-team-vs-pen-test-vs-audit", label: "Red team vs pen test vs audit" },
                            { href: "/glossary/what-is-owasp-top-10", label: "What is the OWASP Top 10?" },
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
                            An authenticated API pentest maps every finding to the OWASP API Top
                            10 and the ATT&amp;CK technique it enables. Book a free scoping call
                            and we&apos;ll cover the right depth for your API.
                        </p>
                        <ConsultationCTA
                            label="Book the Scoping Call"
                            service="Penetration Testing"
                            source="blog-api-security-cta"
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
                        topics={["pentest", "stack", "saas"]}
                        pinned={[
                            "stripe-webhook-security-best-practices",
                            "what-is-penetration-testing",
                            "red-team-vs-pen-test-vs-audit",
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
