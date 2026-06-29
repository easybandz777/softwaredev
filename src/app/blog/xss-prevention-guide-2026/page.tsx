import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AuthorByline } from "@/components/AuthorByline";
import { EditorialFooter } from "@/components/EditorialFooter";
import { Sources } from "@/components/Sources";
import { ArrowRight, Check, Code2 } from "lucide-react";
import { articleMetadata } from "@/lib/seoMeta";
import { articleSchema, faqSchema } from "@/lib/schemas";
import { getAuthor, authorUrl } from "@/lib/authors";

const SLUG = "xss-prevention-guide-2026";
const PUBLISHED = "2026-06-03";
const TITLE = "XSS Prevention Guide (2026)";
const author = getAuthor("bill-beltz");

export const metadata: Metadata = articleMetadata({
    title: "XSS Prevention Guide: Stop Cross-Site Scripting (2026)",
    description:
        "A 2026 guide to preventing cross-site scripting: contextual output encoding, CSP, framework auto-escaping, and trusted types — with code and MITRE ATT&CK mapping.",
    slug: `blog/${SLUG}`,
    image: "/og-pentest.png",
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    authors: [author.name],
    keywords: [
        "xss prevention",
        "cross-site scripting prevention",
        "content security policy",
        "output encoding 2026",
    ],
});

const faqs = [
    {
        q: "What is the best way to prevent cross-site scripting?",
        a: "Contextual output encoding combined with a modern framework's automatic escaping. Encode untrusted data at the point it is inserted into a page, using the encoding appropriate for that context — HTML body, attribute, JavaScript, URL, or CSS. Frameworks like React, Angular, and Vue auto-escape interpolated values by default, which closes the common case. Layer a strict Content Security Policy on top as defense in depth, and never disable a framework's escaping without sanitizing first.",
    },
    {
        q: "What are the three types of XSS?",
        a: "Stored XSS, where a payload is saved on the server and served to other users; reflected XSS, where a payload in the request is immediately echoed back in the response; and DOM-based XSS, where client-side JavaScript writes untrusted data into the page without it ever reaching the server. Stored is usually the most damaging because it hits every visitor; DOM-based is the easiest to miss because server-side filtering never sees the payload.",
    },
    {
        q: "Does React prevent XSS automatically?",
        a: "React escapes values you interpolate into JSX by default, which prevents the most common injection. It does not protect you everywhere: dangerouslySetInnerHTML inserts raw HTML, untrusted values in href or src attributes can carry javascript: URLs, and passing user data into refs or third-party DOM libraries bypasses React entirely. Treat auto-escaping as a strong baseline, sanitize any HTML you must render with a library like DOMPurify, and validate URL schemes.",
    },
    {
        q: "What is a Content Security Policy and does it stop XSS?",
        a: "A Content Security Policy is an HTTP response header that tells the browser which sources of script, style, and other resources are allowed to load and execute. A strict CSP — ideally nonce- or hash-based rather than allow-listed domains — blocks inline script and unauthorized sources, so even if an injection slips through, the malicious script often will not run. CSP is a powerful mitigation, but it is a second line of defense, not a substitute for output encoding.",
    },
    {
        q: "What is DOM-based XSS and why is it harder to catch?",
        a: "DOM-based XSS happens entirely in the browser: client-side JavaScript reads from a source the attacker controls — such as the URL fragment or query string — and writes it into a dangerous sink like innerHTML, document.write, or eval, without sanitization. Because the payload may never be sent to the server, server-side filtering and many scanners miss it. The defense is to avoid dangerous sinks, use safe DOM APIs like textContent, and adopt Trusted Types where supported.",
    },
    {
        q: "How do you test an application for XSS?",
        a: "With authenticated penetration testing that injects context-aware payloads into every input — form fields, URL parameters, headers, and stored values — and observes where they execute, including in the DOM. A tester confirms the payload actually runs rather than just appearing in the response, distinguishing exploitable XSS from harmless reflection. Findings are mapped to OWASP and the relevant MITRE ATT&CK technique so engineers can prioritize and verify the fix.",
    },
];

const sources = [
    {
        label: "OWASP Cross Site Scripting Prevention Cheat Sheet",
        href: "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html",
        publisher: "OWASP",
    },
    {
        label: "OWASP DOM Based XSS Prevention Cheat Sheet",
        href: "https://cheatsheetseries.owasp.org/cheatsheets/DOM_based_XSS_Prevention_Cheat_Sheet.html",
        publisher: "OWASP",
    },
    {
        label: "Content Security Policy (CSP)",
        href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP",
        publisher: "MDN Web Docs",
    },
    {
        label: "MITRE ATT&CK Enterprise Matrix",
        href: "https://attack.mitre.org/matrices/enterprise/",
        publisher: "MITRE",
    },
];

export default function XssPreventionPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        articleSchema({
                            headline: "XSS Prevention Guide: Stop Cross-Site Scripting (2026)",
                            description:
                                "Contextual output encoding, CSP, framework auto-escaping, and Trusted Types to prevent cross-site scripting, with code and MITRE ATT&CK mapping.",
                            datePublished: PUBLISHED,
                            slug: SLUG,
                            image: "https://quantlabusa.dev/og-pentest.png",
                            author: { name: author.name, url: authorUrl(author.slug) },
                            section: "Security",
                            keywords: [
                                "xss prevention",
                                "cross-site scripting prevention",
                                "content security policy",
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
                        <Code2 className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs uppercase tracking-widest text-sky-400 mb-3">
                        Secure Development · 2026
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                        XSS Prevention Guide: Stop Cross-Site Scripting
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed mb-6 max-w-2xl">
                        Cross-site scripting lets an attacker run their JavaScript in your
                        users&apos; browsers — hijacking sessions, stealing data, and
                        rewriting the page. This is the practitioner&apos;s guide to
                        preventing it: contextual output encoding, framework auto-escaping,
                        Content Security Policy, and Trusted Types — with code and MITRE
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
                        source="blog-xss"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Quick answer
                        </h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>
                                Prevent cross-site scripting by encoding untrusted data for the
                                exact context it lands in — HTML, attribute, JavaScript, URL, or CSS
                                — and by relying on a modern framework&apos;s automatic escaping.
                                Sanitize any HTML you must render with a vetted library, validate
                                URL schemes, and avoid dangerous DOM sinks. Add a strict, nonce-based
                                Content Security Policy as defense in depth. Then verify with
                                authenticated penetration testing.
                            </strong>
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Cross-site scripting is an injection flaw where untrusted input is
                            rendered into a page in a way that lets it execute as script in the
                            victim&apos;s browser. It is one of the longest-standing entries on the{" "}
                            <Link
                                href="/blog/owasp-top-10-explained-2026"
                                className="text-sky-400 hover:underline"
                            >
                                OWASP Top 10
                            </Link>{" "}
                            and shares its root cause with{" "}
                            <Link
                                href="/blog/preventing-sql-injection-2026"
                                className="text-sky-400 hover:underline"
                            >
                                SQL injection
                            </Link>
                            : mixing data and code. We build front ends for a living — our{" "}
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
                            verifies them. The sections below follow the order that matters in
                            practice.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        1. Contextual output encoding: the core defense
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            The defining rule of XSS prevention is to encode untrusted data for the
                            context where it is inserted. The same value needs different treatment
                            in an HTML body, an HTML attribute, a JavaScript string, a URL, or a CSS
                            value. Encoding for the wrong context — or not at all — is the bug.
                        </p>
                        <pre className="overflow-x-auto rounded-xl border border-white/10 bg-[#0a1120] p-4 text-sm">
                            <code>{`// VULNERABLE — raw user input written into the DOM as HTML
element.innerHTML = "Welcome, " + userName;
// userName = <img src=x onerror=alert(document.cookie)>  executes

// FIXED — assign as text; the browser never parses it as markup
element.textContent = "Welcome, " + userName;`}</code>
                        </pre>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                Prefer safe sinks: <code className="text-sky-300">textContent</code>{" "}
                                over <code className="text-sky-300">innerHTML</code>, and let the
                                framework interpolate rather than building HTML strings.
                            </li>
                            <li>
                                Encode for the specific context; HTML-encoding a value placed inside
                                a <code className="text-sky-300">&lt;script&gt;</code> block does not
                                make it safe.
                            </li>
                            <li>
                                Validate URL schemes — reject <code className="text-sky-300">javascript:</code>{" "}
                                and <code className="text-sky-300">data:</code> in{" "}
                                <code className="text-sky-300">href</code> and{" "}
                                <code className="text-sky-300">src</code> attributes.
                            </li>
                        </ul>
                        <p className="text-sm text-gray-400">
                            <strong className="text-gray-300">ATT&amp;CK link:</strong> XSS supports
                            Drive-by Compromise (T1189) and theft of Web Session Cookies (T1539).
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        2. Framework auto-escaping, and where it leaks
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Modern frameworks escape interpolated values by default, which is why
                            framework-based UIs are generally safer. The leaks are the explicit
                            escape hatches: raw-HTML insertion, attribute injection, and handing
                            untrusted data to third-party DOM code.
                        </p>
                        <pre className="overflow-x-auto rounded-xl border border-white/10 bg-[#0a1120] p-4 text-sm">
                            <code>{`// VULNERABLE — raw HTML from an untrusted source
<div dangerouslySetInnerHTML={{ __html: comment.body }} />

// FIXED — sanitize first with a vetted library
import DOMPurify from "dompurify";
<div
  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(comment.body) }}
/>`}</code>
                        </pre>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                Avoid <code className="text-sky-300">dangerouslySetInnerHTML</code>{" "}
                                (React) and <code className="text-sky-300">v-html</code> (Vue) on
                                untrusted data. When unavoidable, sanitize with DOMPurify.
                            </li>
                            <li>
                                Never interpolate user data into a{" "}
                                <code className="text-sky-300">&lt;script&gt;</code> tag or an inline
                                event handler.
                            </li>
                            <li>
                                Keep the framework patched — escaping behavior and known bypasses do
                                change between versions.
                            </li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        3. DOM-based XSS: the bug the server never sees
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            DOM-based XSS happens entirely in the browser: client-side code reads
                            from an attacker-controlled source — the URL fragment, query string, or{" "}
                            <code className="text-sky-300">postMessage</code> data — and writes it
                            into a dangerous sink. Because the payload may never hit the server,
                            server-side filtering and many scanners miss it entirely.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                Avoid dangerous sinks: <code className="text-sky-300">innerHTML</code>,{" "}
                                <code className="text-sky-300">document.write</code>,{" "}
                                <code className="text-sky-300">eval</code>, and{" "}
                                <code className="text-sky-300">setTimeout</code> with a string
                                argument.
                            </li>
                            <li>
                                Treat <code className="text-sky-300">location</code>,{" "}
                                <code className="text-sky-300">document.referrer</code>, and message
                                events as untrusted sources.
                            </li>
                            <li>
                                Adopt Trusted Types where supported — it enforces that only
                                sanitized values can reach dangerous sinks, turning a silent bug into
                                a build-time error.
                            </li>
                        </ul>
                        <p className="text-sm text-gray-400">
                            <strong className="text-gray-300">ATT&amp;CK link:</strong> client-side
                            execution maps to Drive-by Compromise (T1189).
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        4. Content Security Policy and cookie hardening
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            A strict Content Security Policy is your safety net: even if an injection
                            slips through, a good CSP can stop the malicious script from running.
                            Prefer a nonce- or hash-based policy over domain allow-lists, which are
                            easy to misconfigure into uselessness.
                        </p>
                        <pre className="overflow-x-auto rounded-xl border border-white/10 bg-[#0a1120] p-4 text-sm">
                            <code>{`// Nonce-based CSP: only scripts with this request's nonce execute
Content-Security-Policy:
  default-src 'self';
  script-src 'self' 'nonce-r4nd0m';
  object-src 'none';
  base-uri 'self'`}</code>
                        </pre>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                Set session cookies <code className="text-sky-300">HttpOnly</code> so
                                a script cannot read them, plus{" "}
                                <code className="text-sky-300">Secure</code> and{" "}
                                <code className="text-sky-300">SameSite</code>.
                            </li>
                            <li>
                                Roll CSP out in <code className="text-sky-300">Report-Only</code> mode
                                first to catch violations without breaking the site.
                            </li>
                            <li>
                                Pair CSP with a sound{" "}
                                <Link
                                    href="/blog/securing-rest-apis-2026"
                                    className="text-sky-400 hover:underline"
                                >
                                    API security posture
                                </Link>{" "}
                                — the front end and the API defend different layers of the same app.
                            </li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Mid-post: prove the encoding holds
                    </h2>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-8 text-center">
                        <p className="text-gray-300 mb-6">
                            Encoding and CSP are the fix. An authenticated pentest that injects
                            context-aware payloads proves none of your sinks execute. Book a free
                            scoping call.
                        </p>
                        <ConsultationCTA
                            label="Scope a Web App Pentest"
                            service="Penetration Testing"
                            source="blog-xss-mid"
                        />
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        The three types of XSS at a glance
                    </h2>
                    <div className="overflow-x-auto mt-4">
                        <table className="w-full text-sm text-left border border-white/10 rounded-xl overflow-hidden">
                            <thead className="bg-[#0d1526] text-white">
                                <tr>
                                    <th className="px-4 py-3 border-b border-white/10">Type</th>
                                    <th className="px-4 py-3 border-b border-white/10">
                                        What it means
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Stored</td>
                                    <td className="px-4 py-3">
                                        Payload saved server-side and served to every user who views
                                        it
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Reflected</td>
                                    <td className="px-4 py-3">
                                        Payload in the request is echoed straight back in the
                                        response
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">DOM-based</td>
                                    <td className="px-4 py-3">
                                        Client-side script writes untrusted data into a dangerous
                                        sink
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Mutation (mXSS)</td>
                                    <td className="px-4 py-3">
                                        Browser re-parsing mutates &quot;safe&quot; HTML back into an
                                        executing payload
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-gray-400 mt-4">
                        For where XSS fits the wider risk list, see{" "}
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
                            XSS creeps back in as a UI grows. Three habits keep it out:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong className="text-white">Lint the sinks.</strong> Use ESLint
                                rules that flag <code className="text-sky-300">innerHTML</code> and{" "}
                                <code className="text-sky-300">dangerouslySetInnerHTML</code> so every
                                use is a deliberate, reviewed decision.
                            </li>
                            <li>
                                <strong className="text-white">Centralize sanitization.</strong> Wrap
                                DOMPurify in one helper so the whole team uses the same vetted
                                configuration.
                            </li>
                            <li>
                                <strong className="text-white">Regular testing.</strong> Re-test
                                after UI changes. The difference between a scan and a real test is in{" "}
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
                            XSS rarely travels alone. The server-side companion is{" "}
                            <Link
                                href="/blog/preventing-sql-injection-2026"
                                className="text-sky-400 hover:underline"
                            >
                                preventing SQL injection
                            </Link>
                            , and for SaaS teams the broader program is in{" "}
                            <Link
                                href="/blog/cybersecurity-services-for-saas-startups-2026"
                                className="text-sky-400 hover:underline"
                            >
                                cybersecurity services for SaaS startups
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
                            { href: "/blog/preventing-sql-injection-2026", label: "Preventing SQL injection (2026)" },
                            { href: "/blog/securing-rest-apis-2026", label: "Securing REST APIs (2026)" },
                            { href: "/blog/api-security-best-practices-2026", label: "API security best practices (2026)" },
                            { href: "/blog/cybersecurity-services-for-saas-startups-2026", label: "Cybersecurity services for SaaS startups" },
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
                            Encode it, then prove it holds.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            An authenticated web app pentest injects context-aware payloads and maps
                            every finding to the ATT&amp;CK technique it enables. Book a free scoping
                            call and we&apos;ll cover the right depth for your app.
                        </p>
                        <ConsultationCTA
                            label="Book the Scoping Call"
                            service="Penetration Testing"
                            source="blog-xss-cta"
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
                            "preventing-sql-injection-2026",
                            "owasp-top-10-explained-2026",
                            "api-security-best-practices-2026",
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
