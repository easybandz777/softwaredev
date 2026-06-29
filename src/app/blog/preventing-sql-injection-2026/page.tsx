import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AuthorByline } from "@/components/AuthorByline";
import { EditorialFooter } from "@/components/EditorialFooter";
import { Sources } from "@/components/Sources";
import { ArrowRight, Check, Database } from "lucide-react";
import { articleMetadata } from "@/lib/seoMeta";
import { articleSchema, faqSchema } from "@/lib/schemas";
import { getAuthor, authorUrl } from "@/lib/authors";

const SLUG = "preventing-sql-injection-2026";
const PUBLISHED = "2026-06-03";
const TITLE = "Preventing SQL Injection (2026)";
const author = getAuthor("bill-beltz");

export const metadata: Metadata = articleMetadata({
    title: "Preventing SQL Injection: A 2026 Developer Guide",
    description:
        "How to prevent SQL injection in 2026 with parameterized queries, ORMs, least privilege, and input validation — with vulnerable vs. fixed code and ATT&CK mapping.",
    slug: `blog/${SLUG}`,
    image: "/og-pentest.png",
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    authors: [author.name],
    keywords: [
        "preventing sql injection",
        "parameterized queries",
        "sql injection prevention 2026",
        "prepared statements",
    ],
});

const faqs = [
    {
        q: "What is the best way to prevent SQL injection?",
        a: "Use parameterized queries (prepared statements) for every database call without exception. Parameterization separates the SQL command from the data, so user input can never be parsed as code. This single control eliminates the overwhelming majority of injection flaws. Layer on input validation, least-privilege database accounts, and a well-maintained ORM, but treat parameterized queries as the non-negotiable baseline — string concatenation to build SQL is the root cause of nearly every injection breach.",
    },
    {
        q: "Do ORMs prevent SQL injection automatically?",
        a: "Mostly, but not entirely. Reputable ORMs like Prisma, Drizzle, SQLAlchemy, and Hibernate parameterize standard queries for you, which closes the common case. The danger is escape hatches: raw query methods, string-interpolated WHERE fragments, dynamic ORDER BY or column names, and LIKE patterns built from user input. An ORM protects you only while you stay on its safe path. The moment you drop to raw SQL with concatenated input, you reintroduce the vulnerability.",
    },
    {
        q: "Is input validation enough to stop SQL injection?",
        a: "No. Input validation is a valuable defense-in-depth layer, but it is not a substitute for parameterized queries. Blocklists of dangerous characters are routinely bypassed, and many legitimate inputs (names with apostrophes, for example) contain characters that naive filters reject. Validate input against a strict allow-list of expected types, lengths, and formats to reduce attack surface — then rely on parameterization to make the query structurally safe regardless of what slips through.",
    },
    {
        q: "What database privileges should an application use?",
        a: "The least privilege required for its actual workload. An application account should not own its schema, cannot DROP tables, and ideally has no access to system tables or other applications' data. Separate read-only and read-write roles where practical, and never connect as a superuser or the database owner. If injection does occur, least privilege limits the blast radius from a full database takeover to whatever that constrained role could already do.",
    },
    {
        q: "How do you test an application for SQL injection?",
        a: "With a combination of static analysis to flag concatenated queries, dependency scanning, and authenticated penetration testing that actively probes every input — URL parameters, form fields, JSON bodies, headers, and cookies — for injection. A tester confirms exploitability rather than just flagging a pattern, distinguishing a real finding from a false positive. Findings are mapped to OWASP and the relevant MITRE ATT&CK technique so engineers can prioritize and verify the fix.",
    },
    {
        q: "What is a second-order SQL injection?",
        a: "It is an injection where the malicious payload is stored safely on one request and then executed unsafely on a later one. A username is saved correctly via a parameterized INSERT, but a downstream report or admin query later concatenates that stored value into a new SQL statement. Because the input arrived through a trusted internal path, it bypasses boundary validation. The defense is the same: parameterize every query, including those that read previously stored data.",
    },
];

const sources = [
    {
        label: "OWASP SQL Injection Prevention Cheat Sheet",
        href: "https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html",
        publisher: "OWASP",
    },
    {
        label: "OWASP Top 10 — A03:2021 Injection",
        href: "https://owasp.org/Top10/A03_2021-Injection/",
        publisher: "OWASP",
    },
    {
        label: "CWE-89: Improper Neutralization of Special Elements in an SQL Command",
        href: "https://cwe.mitre.org/data/definitions/89.html",
        publisher: "MITRE",
    },
    {
        label: "MITRE ATT&CK Enterprise Matrix",
        href: "https://attack.mitre.org/matrices/enterprise/",
        publisher: "MITRE",
    },
];

export default function PreventingSqlInjectionPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        articleSchema({
                            headline: "Preventing SQL Injection: A 2026 Developer Guide",
                            description:
                                "Parameterized queries, ORMs, least privilege, and input validation to prevent SQL injection, with vulnerable vs. fixed code and MITRE ATT&CK mapping.",
                            datePublished: PUBLISHED,
                            slug: SLUG,
                            image: "https://quantlabusa.dev/og-pentest.png",
                            author: { name: author.name, url: authorUrl(author.slug) },
                            section: "Security",
                            keywords: [
                                "preventing sql injection",
                                "parameterized queries",
                                "sql injection prevention 2026",
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
                        <Database className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs uppercase tracking-widest text-sky-400 mb-3">
                        Secure Development · 2026
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                        Preventing SQL Injection: A 2026 Developer Guide
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed mb-6 max-w-2xl">
                        SQL injection is decades old and still ranks among the most damaging
                        web vulnerabilities, because one concatenated query is all it takes.
                        This is the practitioner&apos;s guide to designing it out for good:
                        parameterized queries, safe ORM usage, least-privilege accounts, and
                        input validation — with vulnerable versus fixed code and MITRE
                        ATT&amp;CK mapping.
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
                        source="blog-sql-injection"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Quick answer
                        </h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>
                                Prevent SQL injection by using parameterized queries (prepared
                                statements) for every database call, never building SQL by string
                                concatenation. Layer on strict input validation, a least-privilege
                                database account, and a maintained ORM used only on its safe path.
                                Parameterization is the control that actually closes the
                                vulnerability; everything else limits blast radius. Verify it with
                                authenticated penetration testing that probes every input.
                            </strong>
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            SQL injection sits at the top of OWASP&apos;s injection category and
                            is catalogued as CWE-89. The mechanism is simple: an application
                            builds a SQL statement by gluing user input directly into the query
                            text, so an attacker who supplies SQL syntax instead of data can
                            change what the query does — reading other users&apos; records,
                            dumping the whole database, or bypassing authentication entirely. For
                            the short definition, see the{" "}
                            <Link
                                href="/glossary/what-is-sql-injection"
                                className="text-sky-400 hover:underline"
                            >
                                glossary entry on SQL injection
                            </Link>
                            , and for the broader risk landscape see{" "}
                            <Link
                                href="/blog/owasp-top-10-explained-2026"
                                className="text-sky-400 hover:underline"
                            >
                                the OWASP Top 10 explained
                            </Link>
                            . We build data-driven applications for a living — our{" "}
                            <Link
                                href="/services/web-applications"
                                className="text-sky-400 hover:underline"
                            >
                                web application practice
                            </Link>{" "}
                            bakes these defenses in, and our{" "}
                            <Link
                                href="/services/web-app-pentest"
                                className="text-sky-400 hover:underline"
                            >
                                web app pentest
                            </Link>{" "}
                            verifies them.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        1. Parameterized queries: the one control that works
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            A parameterized query sends the SQL command and the data to the
                            database separately. The database compiles the statement first, then
                            binds the values into placeholders — so user input is always treated
                            as data and can never be parsed as SQL. This is the only defense that
                            closes the vulnerability at its root rather than trying to filter
                            around it.
                        </p>
                        <pre className="overflow-x-auto rounded-xl border border-white/10 bg-[#0a1120] p-4 text-sm">
                            <code>{`// VULNERABLE — input concatenated into the query string
const email = req.body.email;
const sql = "SELECT * FROM users WHERE email = '" + email + "'";
const user = await db.query(sql);
// input  ' OR '1'='1  returns every row; auth bypass

// FIXED — input bound as a parameter, never parsed as SQL
const user = await db.query(
  "SELECT * FROM users WHERE email = $1",
  [req.body.email],
);`}</code>
                        </pre>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                Use placeholders (<code className="text-sky-300">$1</code>,{" "}
                                <code className="text-sky-300">?</code>, or named parameters) for
                                every value — including those in <code className="text-sky-300">IN</code>{" "}
                                lists and <code className="text-sky-300">LIKE</code> patterns.
                            </li>
                            <li>
                                Identifiers (table or column names, sort direction) cannot be
                                parameterized. Validate them against a fixed allow-list instead.
                            </li>
                            <li>
                                Apply the same rule to stored procedures — a procedure that builds
                                dynamic SQL internally is just as vulnerable.
                            </li>
                        </ul>
                        <p className="text-sm text-gray-400">
                            <strong className="text-gray-300">ATT&amp;CK link:</strong> injection
                            enables Exploit Public-Facing Application (T1190) and can lead to data
                            staged for exfiltration (T1005).
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        2. ORMs: safe by default, until you leave the path
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            A reputable ORM parameterizes standard queries automatically, which is
                            why ORM-based code is generally safer. The risk lives in the escape
                            hatches every ORM provides: raw-query methods and string-built
                            fragments. The moment you interpolate user input into raw SQL, the
                            ORM&apos;s protection is gone.
                        </p>
                        <pre className="overflow-x-auto rounded-xl border border-white/10 bg-[#0a1120] p-4 text-sm">
                            <code>{`// VULNERABLE — raw fragment with interpolated input
const rows = await prisma.$queryRawUnsafe(
  \`SELECT * FROM "Order" WHERE status = '\${req.query.status}'\`,
);

// FIXED — tagged template parameterizes the value
const rows = await prisma.$queryRaw\`
  SELECT * FROM "Order" WHERE status = \${req.query.status}
\`;`}</code>
                        </pre>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                Prefer the ORM&apos;s query builder over raw SQL. When you must use
                                raw SQL, use its parameter-binding form, never string building.
                            </li>
                            <li>
                                Watch dynamic <code className="text-sky-300">ORDER BY</code> and
                                pagination — map client values to a fixed set of safe columns.
                            </li>
                            <li>
                                Keep the ORM and database driver patched; injection-class bugs do
                                occasionally surface in the libraries themselves.
                            </li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        3. Input validation as defense in depth
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Validation does not replace parameterization, but it shrinks the attack
                            surface and catches malformed input early. Validate against a strict
                            allow-list — expected types, ranges, lengths, and formats — and reject
                            anything that does not conform rather than trying to sanitize it. A
                            schema validator such as Zod or Pydantic at the edge of each handler is
                            the cleanest place to do this.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                Coerce and constrain types: an ID that should be an integer should
                                be parsed and bounded, not passed through as a string.
                            </li>
                            <li>
                                Avoid blocklists of &quot;dangerous&quot; characters — they are
                                bypassable and break legitimate input like names with apostrophes.
                            </li>
                            <li>
                                Validate again on stored data that flows into later queries, to
                                close second-order injection.
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
                        4. Least privilege and blast-radius control
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Assume a single query somewhere will eventually slip through. The
                            account your application connects with should be scoped so that even a
                            successful injection cannot escalate into a full takeover. Least
                            privilege turns a catastrophic breach into a contained one.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                Connect as a constrained role — not the database owner or a
                                superuser. Deny <code className="text-sky-300">DROP</code>,{" "}
                                <code className="text-sky-300">ALTER</code>, and access to system
                                catalogs.
                            </li>
                            <li>
                                Separate read-only and read-write roles where the workload allows.
                            </li>
                            <li>
                                For multi-tenant systems, enforce row-level isolation at the
                                database — our{" "}
                                <Link
                                    href="/services/saas-platform-development"
                                    className="text-sky-400 hover:underline"
                                >
                                    SaaS platform development
                                </Link>{" "}
                                practice builds tenant isolation in at the data layer.
                            </li>
                            <li>
                                Encrypt sensitive columns at rest (see{" "}
                                <Link
                                    href="/glossary/what-is-encryption-at-rest"
                                    className="text-sky-400 hover:underline"
                                >
                                    encryption at rest
                                </Link>
                                ) so a dump is less useful.
                            </li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Mid-post: prove it, don&apos;t just assume it
                    </h2>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-8 text-center">
                        <p className="text-gray-300 mb-6">
                            Parameterizing your queries is the fix. An authenticated pentest that
                            probes every input proves none were missed. Book a free scoping call.
                        </p>
                        <ConsultationCTA
                            label="Scope a Web App Pentest"
                            service="Penetration Testing"
                            source="blog-sql-injection-mid"
                        />
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        SQL injection variants at a glance
                    </h2>
                    <div className="overflow-x-auto mt-4">
                        <table className="w-full text-sm text-left border border-white/10 rounded-xl overflow-hidden">
                            <thead className="bg-[#0d1526] text-white">
                                <tr>
                                    <th className="px-4 py-3 border-b border-white/10">Variant</th>
                                    <th className="px-4 py-3 border-b border-white/10">
                                        What it means
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">In-band</td>
                                    <td className="px-4 py-3">
                                        Results returned directly in the response (union-based or
                                        error-based)
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Blind boolean</td>
                                    <td className="px-4 py-3">
                                        No data returned; attacker infers it from true/false
                                        response differences
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Blind time-based</td>
                                    <td className="px-4 py-3">
                                        Data inferred from how long a deliberately delayed query
                                        takes to respond
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Second-order</td>
                                    <td className="px-4 py-3">
                                        Payload stored safely, then executed unsafely by a later
                                        query
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Out-of-band</td>
                                    <td className="px-4 py-3">
                                        Data exfiltrated over a separate channel such as DNS or HTTP
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-gray-400 mt-4">
                        Every variant has the same root cause and the same fix. For how injection
                        fits the wider list, see{" "}
                        <Link
                            href="/blog/owasp-top-10-explained-2026"
                            className="text-sky-400 hover:underline"
                        >
                            the OWASP Top 10 explained
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
                            Code review and tooling keep injection from creeping back in as a
                            codebase grows:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong className="text-white">Static analysis.</strong> Run a
                                linter or SAST rule that flags string-built SQL in code review,
                                before it merges.
                            </li>
                            <li>
                                <strong className="text-white">Code review discipline.</strong>{" "}
                                Treat any raw query with interpolated input as a blocking finding.
                            </li>
                            <li>
                                <strong className="text-white">Regular testing.</strong> Re-test
                                after releases that touch data access. The difference between a scan
                                and a real test is covered in{" "}
                                <Link
                                    href="/blog/what-is-a-pen-test-vs-vulnerability-scan"
                                    className="text-sky-400 hover:underline"
                                >
                                    pen test vs vulnerability scan
                                </Link>
                                .
                            </li>
                        </ul>
                        <p>
                            Injection is rarely the only input-handling flaw in an application. The
                            companion defense for the browser side is covered in our{" "}
                            <Link
                                href="/blog/xss-prevention-guide-2026"
                                className="text-sky-400 hover:underline"
                            >
                                XSS prevention guide
                            </Link>
                            , and the API-layer view is in{" "}
                            <Link
                                href="/blog/securing-rest-apis-2026"
                                className="text-sky-400 hover:underline"
                            >
                                securing REST APIs
                            </Link>
                            .
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
                            { href: "/services/web-applications", label: "Web Application Development service" },
                            { href: "/services/penetration-testing", label: "Penetration Testing service overview" },
                            { href: "/blog/owasp-top-10-explained-2026", label: "The OWASP Top 10 explained (2026)" },
                            { href: "/blog/xss-prevention-guide-2026", label: "XSS prevention guide (2026)" },
                            { href: "/blog/securing-rest-apis-2026", label: "Securing REST APIs (2026)" },
                            { href: "/blog/api-security-best-practices-2026", label: "API security best practices (2026)" },
                            { href: "/glossary/what-is-sql-injection", label: "What is SQL injection?" },
                            { href: "/blog/what-is-a-pen-test-vs-vulnerability-scan", label: "Pen test vs vulnerability scan" },
                            { href: "/contact", label: "Talk to Bill about your application security" },
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
                            Design it out, then prove it holds.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            An authenticated web app pentest probes every input for injection and
                            maps each finding to the ATT&amp;CK technique it enables. Book a free
                            scoping call and we&apos;ll cover the right depth for your app.
                        </p>
                        <ConsultationCTA
                            label="Book the Scoping Call"
                            service="Penetration Testing"
                            source="blog-sql-injection-cta"
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
                            "owasp-top-10-explained-2026",
                            "api-security-best-practices-2026",
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
