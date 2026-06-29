import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is CSRF (Cross-Site Request Forgery)? (2026) | QUANT LAB USA",
    description:
        "CSRF tricks a logged-in user's browser into making unwanted requests to a site. Plain-English definition, how it works, and how to prevent it. By QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-csrf" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Cross-Site Request Forgery (CSRF)",
    description:
        "Cross-site request forgery is a web vulnerability in which an attacker causes a victim's authenticated browser to submit an unwanted state-changing request to a site the victim is logged into.",
    url: "https://quantlabusa.dev/glossary/what-is-csrf",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "Cross-Site Request Forgery (CSRF)", item: "https://quantlabusa.dev/glossary/what-is-csrf" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is CSRF in one sentence?", acceptedAnswer: { "@type": "Answer", text: "CSRF is an attack that tricks a logged-in user's browser into sending a request the user never intended, exploiting the fact that browsers attach session cookies automatically." } },
        { "@type": "Question", name: "How is CSRF different from XSS?", acceptedAnswer: { "@type": "Answer", text: "XSS runs the attacker's script inside your site; CSRF makes the victim's browser send a forged request from a different site. XSS abuses code execution, CSRF abuses ambient authentication." } },
        { "@type": "Question", name: "What is the SameSite cookie attribute?", acceptedAnswer: { "@type": "Answer", text: "A cookie flag that controls whether a cookie is sent on cross-site requests. SameSite=Lax or Strict blocks most classic CSRF by preventing the session cookie from riding along on a forged cross-site request." } },
        { "@type": "Question", name: "Do APIs that use bearer tokens need CSRF protection?", acceptedAnswer: { "@type": "Answer", text: "Generally no. CSRF relies on the browser automatically attaching credentials like cookies. A token sent in an Authorization header is not auto-attached, so token-based APIs are largely immune." } },
        { "@type": "Question", name: "What is a CSRF token?", acceptedAnswer: { "@type": "Answer", text: "A secret, per-session or per-request value the server issues and the form must echo back. Because an attacker's site cannot read it, the server can reject any state-changing request that lacks the correct token." } },
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
                        <li className="text-gray-300">Cross-Site Request Forgery (CSRF)</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Security</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is CSRF (Cross-Site Request Forgery)?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        Cross-site request forgery is an attack that abuses a browser&apos;s habit of automatically attaching your session cookies to every request it makes to a site. By luring you to a malicious page while you are logged in elsewhere, an attacker can make your own browser fire off a real, authenticated request — changing your email, transferring funds, or updating a setting — without you clicking anything that looks dangerous.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The trick behind it</h2>
                    <p>
                        When you log into a site, the server hands your browser a session
                        cookie, and from then on the browser attaches that cookie to every
                        request bound for that site — including requests triggered by other
                        sites. CSRF weaponizes this &ldquo;ambient authority.&rdquo; An
                        attacker hosts a page with a hidden form or image that points at the
                        target site&apos;s state-changing endpoint. When your authenticated
                        browser loads it, the cookie rides along, and the server cannot tell
                        the forged request apart from one you made deliberately. The
                        attacker never sees the response — they just need the action to fire.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">CSRF versus XSS</h2>
                    <p>
                        The two are often confused but are opposites in mechanism.{" "}
                        <Link href="/glossary/what-is-cross-site-scripting" className="text-sky-400 hover:underline">Cross-site scripting</Link>{" "}
                        runs the attacker&apos;s code inside your site and can read responses,
                        steal tokens, and do nearly anything. CSRF runs nothing inside your
                        site — it simply causes a blind, one-way request from the outside,
                        relying entirely on the credentials the browser sends automatically.
                        That distinction matters for defense: a site fully protected against
                        CSRF can still be wrecked by XSS, because XSS executes within the
                        trusted origin and can forge requests with the correct token already
                        attached.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What it can do</h2>
                    <p>
                        CSRF only matters on requests that change state, but those are the
                        ones that count. A successful attack can change a victim&apos;s
                        password or recovery email — quietly taking over the account — move
                        money, alter permissions, post content, or flip a configuration
                        toggle. Because the request is genuine and authenticated, logs show
                        the victim performing the action themselves, which makes these
                        incidents hard to attribute after the fact. The blast radius is
                        whatever the victim&apos;s account is authorized to do with a single
                        request.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How to prevent it</h2>
                    <p>
                        The modern baseline is the SameSite cookie attribute: setting
                        session cookies to SameSite=Lax or Strict stops the browser from
                        attaching them to cross-site requests, which neutralizes most
                        classic CSRF for free. On top of that, use anti-CSRF tokens — a
                        secret value the server issues and the form must return, which an
                        attacker&apos;s page cannot read or guess. For sensitive actions,
                        validate the Origin or Referer header and require re-authentication.
                        APIs that authenticate with a bearer token in an Authorization
                        header rather than a cookie are largely immune, because that
                        credential is not auto-attached by the browser.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        In a{" "}
                        <Link href="/services/web-app-pentest" className="text-sky-400 hover:underline">web application penetration test</Link>{" "}
                        we map every state-changing endpoint and check whether each one can
                        be triggered cross-origin — paying special attention to legacy
                        forms, internal admin actions, and endpoints that quietly accept
                        both cookie and header auth. The applications we{" "}
                        <Link href="/services" className="text-sky-400 hover:underline">build</Link>{" "}
                        default to SameSite cookies, framework-level CSRF tokens, and
                        header-based auth for APIs, so the protection is structural rather
                        than bolted on. CSRF is cheap to prevent and embarrassing to find in
                        production, so we treat it as a default, not an afterthought.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">A shrinking but not gone threat</h2>
                    <p>
                        Browsers now default new cookies to SameSite=Lax, which has quietly
                        retired a huge swath of historical CSRF. But the threat is not
                        extinct. Endpoints that explicitly loosen SameSite for
                        cross-origin flows, GET requests that wrongly change state, and
                        subdomains that share cookies can all reopen the door. CSRF remains
                        a standard item on the{" "}
                        <Link href="/glossary/what-is-owasp-top-10" className="text-sky-400 hover:underline">OWASP Top 10</Link>{" "}
                        radar precisely because the defaults help but do not absolve a team
                        from thinking through every authenticated, state-changing path.
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
                        <li><Link href="/glossary/what-is-sql-injection" className="text-sky-400 hover:underline">What is SQL injection?</Link></li>
                        <li><Link href="/glossary/what-is-owasp-top-10" className="text-sky-400 hover:underline">What is the OWASP Top 10?</Link></li>
                        <li><Link href="/glossary/what-is-penetration-testing" className="text-sky-400 hover:underline">What is penetration testing?</Link></li>
                        <li><Link href="/glossary/what-is-oauth2" className="text-sky-400 hover:underline">What is OAuth 2.0?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Unsure if your endpoints are forgeable?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We test every state-changing route for CSRF and build apps with
                        SameSite and token defenses by default. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-csrf" />
                        <Link href="/services/web-app-pentest" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Web app pentest
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
