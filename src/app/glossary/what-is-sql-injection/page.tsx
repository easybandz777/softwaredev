import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is SQL Injection? Plain-English Guide (2026) | QUANT LAB USA",
    description:
        "SQL injection lets attackers tamper with the queries an app sends to its database. Plain-English definition, how it happens, and how to prevent it. By QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-sql-injection" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "SQL Injection",
    description:
        "SQL injection is a web vulnerability in which attacker-controlled input is concatenated into a database query, letting the attacker read, modify, or destroy data the application never intended to expose.",
    url: "https://quantlabusa.dev/glossary/what-is-sql-injection",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "SQL Injection", item: "https://quantlabusa.dev/glossary/what-is-sql-injection" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is SQL injection in one sentence?", acceptedAnswer: { "@type": "Answer", text: "SQL injection is a vulnerability where untrusted input is treated as part of a database query, letting an attacker change what that query does." } },
        { "@type": "Question", name: "What is the single best defense against SQL injection?", acceptedAnswer: { "@type": "Answer", text: "Parameterized queries (prepared statements). They send the query structure and the user data to the database separately, so input can never change the meaning of the statement." } },
        { "@type": "Question", name: "Do ORMs prevent SQL injection?", acceptedAnswer: { "@type": "Answer", text: "Mostly. ORMs parameterize by default, but raw-SQL escape hatches, dynamic column or table names, and string-built LIKE clauses can reintroduce the flaw if you are not careful." } },
        { "@type": "Question", name: "What is blind SQL injection?", acceptedAnswer: { "@type": "Answer", text: "A variant where the application does not return query results directly, so the attacker infers data one bit at a time from true/false responses or time delays in the page." } },
        { "@type": "Question", name: "Is SQL injection still common in 2026?", acceptedAnswer: { "@type": "Answer", text: "Yes. Injection has appeared in the OWASP Top 10 for over two decades and still surfaces regularly in legacy code, hand-rolled query builders, and reporting features." } },
    ],
};

export default function Page() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <article className="container mx-auto px-6 max-w-3xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/glossary" className="hover:text-sky-400 transition-colors">Glossary</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">SQL Injection</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Security</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is SQL Injection?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        SQL injection is a vulnerability that occurs when an application builds a database query by gluing untrusted user input directly into the query text. Because the database cannot tell the difference between the developer&apos;s intended command and the attacker&apos;s smuggled-in fragment, a single unescaped field can let an outsider read every row in a table, bypass a login, or in the worst cases delete the database entirely.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The root cause</h2>
                    <p>
                        Almost every web application talks to a database in SQL, a
                        language where keywords, table names, and the actual data values
                        all live in the same string. The vulnerability appears the moment
                        a developer constructs that string by concatenation — taking a
                        value typed into a search box or a login form and pasting it into
                        the middle of a query. The database faithfully executes whatever
                        it receives, so if an attacker types something that looks like SQL
                        instead of an ordinary value, the database runs it as code. The
                        whole class of bug comes down to mixing instructions and data in
                        the same channel.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">A long, expensive history</h2>
                    <p>
                        SQL injection was first described publicly in the late 1990s and
                        has never left the OWASP Top 10. It sat at the very top of that
                        list for years and remains folded into the broader{" "}
                        <Link href="/glossary/what-is-owasp-top-10" className="text-sky-400 hover:underline">OWASP Top 10</Link>{" "}
                        injection category today. It has been behind some of the largest
                        breaches on record — retail point-of-sale systems, payment
                        processors, and government databases — precisely because a query
                        flaw in one neglected endpoint can expose an entire data store.
                        The persistence of such an old, well-understood bug is a reminder
                        that secure coding is a discipline, not a one-time fix.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What an attacker can do</h2>
                    <p>
                        The impact ranges from embarrassing to catastrophic. Read access
                        lets an attacker dump customer records, password hashes, and
                        internal data. Authentication bypass lets them log in as any user,
                        sometimes as an administrator, without a password. Write access
                        lets them alter prices, grant themselves privileges, or plant
                        malicious content. In environments where the database account is
                        over-permissioned, injection can escalate into command execution
                        on the server itself — turning a web bug into a full host
                        compromise. Severity tracks directly with how much the application
                        and its database account are allowed to do.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How to prevent it</h2>
                    <p>
                        The fix is decades old and reliable: use parameterized queries,
                        also called prepared statements, so the query structure is sent to
                        the database separately from the user-supplied values. With
                        parameters, input is always treated as data and can never change
                        the shape of the statement. A well-configured{" "}
                        <Link href="/glossary/what-is-an-orm" className="text-sky-400 hover:underline">ORM</Link>{" "}
                        does this by default. Layer on least-privilege database accounts,
                        strict input validation, and a{" "}
                        <Link href="/glossary/what-is-a-web-app-firewall" className="text-sky-400 hover:underline">web application firewall</Link>{" "}
                        as defense in depth — but the firewall is a backstop, not a
                        substitute for parameterization in the code.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        We attack SQL injection from both sides. In our{" "}
                        <Link href="/services/web-app-pentest" className="text-sky-400 hover:underline">web application penetration tests</Link>{" "}
                        we hunt for injectable parameters across search fields, filters,
                        reporting tools, and the JSON bodies of internal APIs — the places
                        teams forget when they assume their ORM has them covered. On the
                        build side, the applications we ship use parameterized queries
                        everywhere by default, scoped database roles, and code review that
                        flags any hand-built SQL string. Catching an injection flaw before
                        launch is cheap; catching it after a{" "}
                        <Link href="/glossary/what-is-a-cve" className="text-sky-400 hover:underline">CVE</Link>{" "}
                        is published is not.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">A note on close cousins</h2>
                    <p>
                        SQL injection is the most famous member of a larger family of
                        injection flaws. The same mix-code-with-data mistake produces
                        command injection, LDAP injection, NoSQL injection, and template
                        injection. The defensive instinct is identical everywhere: never
                        let untrusted input cross into an interpreter as code. If you
                        internalize that one principle for SQL, you have most of what you
                        need to reason about the rest of the category — and about related
                        client-side flaws like{" "}
                        <Link href="/glossary/what-is-cross-site-scripting" className="text-sky-400 hover:underline">cross-site scripting</Link>.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        topics={["pentest","stack"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-cross-site-scripting" className="text-sky-400 hover:underline">What is cross-site scripting?</Link></li>
                        <li><Link href="/glossary/what-is-owasp-top-10" className="text-sky-400 hover:underline">What is the OWASP Top 10?</Link></li>
                        <li><Link href="/glossary/what-is-penetration-testing" className="text-sky-400 hover:underline">What is penetration testing?</Link></li>
                        <li><Link href="/glossary/what-is-a-vulnerability" className="text-sky-400 hover:underline">What is a vulnerability?</Link></li>
                        <li><Link href="/glossary/what-is-a-web-app-firewall" className="text-sky-400 hover:underline">What is a WAF?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Worried your app is injectable?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We test web applications the way a real attacker would and ship
                        code that closes injection by design. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-sqli" />
                        <Link href="/services/web-app-pentest" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Web app pentest
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
