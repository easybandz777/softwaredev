import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is Cross-Site Scripting (XSS)? Guide (2026) | QUANT LAB USA",
    description:
        "Cross-site scripting (XSS) lets attackers run their own JavaScript in your users' browsers. Plain-English definition, the three types, and how to prevent it. By QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-cross-site-scripting" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Cross-Site Scripting (XSS)",
    description:
        "Cross-site scripting is a web vulnerability in which an attacker injects script into pages other users view, causing their browsers to execute attacker-controlled code in the context of the trusted site.",
    url: "https://quantlabusa.dev/glossary/what-is-cross-site-scripting",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "Cross-Site Scripting (XSS)", item: "https://quantlabusa.dev/glossary/what-is-cross-site-scripting" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is cross-site scripting in one sentence?", acceptedAnswer: { "@type": "Answer", text: "Cross-site scripting is a vulnerability that lets an attacker run their own JavaScript inside another user's browser session on a trusted website." } },
        { "@type": "Question", name: "What are the three types of XSS?", acceptedAnswer: { "@type": "Answer", text: "Stored XSS, where malicious script is saved on the server and served to every visitor; reflected XSS, where the script bounces off the server from a crafted link; and DOM-based XSS, which happens entirely in client-side code." } },
        { "@type": "Question", name: "How do you prevent XSS?", acceptedAnswer: { "@type": "Answer", text: "Context-aware output encoding, a strict Content Security Policy, framework auto-escaping, and treating any HTML built from user input as dangerous unless run through a vetted sanitizer." } },
        { "@type": "Question", name: "Does React prevent XSS automatically?", acceptedAnswer: { "@type": "Answer", text: "React escapes values rendered as text by default, but dangerouslySetInnerHTML, unsanitized href or src attributes, and injected script URLs can still introduce XSS." } },
        { "@type": "Question", name: "Why is XSS dangerous if it just runs JavaScript?", acceptedAnswer: { "@type": "Answer", text: "That JavaScript runs with the victim's privileges on the trusted site, so it can steal session tokens, perform actions as the user, capture keystrokes, or rewrite the page to phish credentials." } },
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
                        <li className="text-gray-300">Cross-Site Scripting (XSS)</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Security</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is Cross-Site Scripting (XSS)?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        Cross-site scripting is a vulnerability that lets an attacker get their own JavaScript to run inside another person&apos;s browser while that person is on a trusted website. Because the malicious code executes with the full privileges of the site the victim is logged into, it can quietly steal their session, act on their behalf, or rewrite the page to harvest passwords — all without the attacker ever touching the victim&apos;s machine directly.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The core idea</h2>
                    <p>
                        A browser trusts the code a website sends it. XSS abuses that trust:
                        if an attacker can sneak a snippet of script into the HTML a site
                        serves, the victim&apos;s browser runs it as though it came from the
                        site itself. The root cause is the same mix-code-with-data mistake
                        behind{" "}
                        <Link href="/glossary/what-is-sql-injection" className="text-sky-400 hover:underline">SQL injection</Link>,
                        except the interpreter being abused is the browser rather than the
                        database. Any place a site reflects user input back into a page
                        without properly encoding it is a candidate for XSS.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The three flavors</h2>
                    <p>
                        Stored XSS is the most dangerous: the attacker&apos;s script is saved
                        on the server — in a comment, a profile bio, a support ticket — and
                        served to everyone who views that content, including admins.
                        Reflected XSS bounces off the server immediately, usually through a
                        crafted link the attacker tricks a victim into clicking, so the
                        payload is never stored. DOM-based XSS never reaches the server at
                        all; it happens when client-side JavaScript reads from the URL or
                        page and writes it back into the document unsafely. All three end
                        the same way: attacker code running in a trusted context.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What an attacker gains</h2>
                    <p>
                        Once script runs in the victim&apos;s session it can read cookies and
                        tokens not protected by HttpOnly, make authenticated requests as
                        the user, log keystrokes, swap out a login form for a fake one, or
                        chain into a worm that spreads through every profile that views the
                        infected one. On internal admin tools the stakes are even higher,
                        because a single XSS against an administrator can hand over the keys
                        to the whole application. The damage is bounded only by what the
                        victim&apos;s account is allowed to do on the site.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How to prevent it</h2>
                    <p>
                        The primary defense is context-aware output encoding: escape data
                        differently depending on whether it lands in HTML, an attribute,
                        JavaScript, or a URL. Modern frameworks like React, Angular, and
                        Vue auto-escape text by default, which removes most reflected and
                        stored XSS — until a developer reaches for an escape hatch such as
                        dangerouslySetInnerHTML. Layer on a strict Content Security Policy
                        to limit what scripts can run even if a payload slips through, set
                        HttpOnly and SameSite on session cookies, and route any
                        user-supplied HTML through a vetted sanitizer rather than rolling
                        your own.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        XSS is one of the first things we probe in a{" "}
                        <Link href="/services/web-app-pentest" className="text-sky-400 hover:underline">web application penetration test</Link>,
                        because it hides in the gaps frameworks do not cover — rich-text
                        editors, markdown renderers, SVG uploads, and any feature that
                        renders HTML from user data. On the build side, the apps we ship
                        lean on framework auto-escaping, ship a tuned Content Security
                        Policy, and sanitize untrusted HTML server-side. We treat XSS the
                        way we treat the rest of the{" "}
                        <Link href="/glossary/what-is-owasp-top-10" className="text-sky-400 hover:underline">OWASP Top 10</Link>:
                        as a category to design out, not patch in after a report lands.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why CSP matters</h2>
                    <p>
                        A Content Security Policy is the seatbelt for XSS: even when a
                        payload makes it onto the page, a well-written policy can stop the
                        browser from executing inline scripts or loading code from
                        attacker-controlled domains. It does not replace encoding — a site
                        that relies on CSP alone is one misconfiguration away from
                        trouble — but it dramatically shrinks the blast radius of a missed
                        bug. Pairing strong encoding with a strict, nonce-based policy is
                        the combination mature teams converge on, and it pairs naturally
                        with the other browser-trust defenses behind{" "}
                        <Link href="/glossary/what-is-csrf" className="text-sky-400 hover:underline">CSRF</Link>{" "}
                        protection.
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
                        <li><Link href="/glossary/what-is-sql-injection" className="text-sky-400 hover:underline">What is SQL injection?</Link></li>
                        <li><Link href="/glossary/what-is-csrf" className="text-sky-400 hover:underline">What is CSRF?</Link></li>
                        <li><Link href="/glossary/what-is-owasp-top-10" className="text-sky-400 hover:underline">What is the OWASP Top 10?</Link></li>
                        <li><Link href="/glossary/what-is-penetration-testing" className="text-sky-400 hover:underline">What is penetration testing?</Link></li>
                        <li><Link href="/glossary/what-is-a-web-app-firewall" className="text-sky-400 hover:underline">What is a WAF?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Want your app tested for XSS?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We hunt cross-site scripting in the corners frameworks miss and
                        ship apps hardened against it. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-xss" />
                        <Link href="/services/web-app-pentest" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Web app pentest
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
