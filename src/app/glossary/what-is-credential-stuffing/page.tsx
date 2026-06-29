import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is Credential Stuffing? Plain-English Guide | QUANT LAB USA",
    description:
        "Credential stuffing replays leaked username and password pairs against your login at scale. Plain-English definition, why it works, and how to stop it. By QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-credential-stuffing" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Credential Stuffing",
    description:
        "Credential stuffing is an attack that uses automation to test username and password pairs leaked from one breach against the login pages of many other services, exploiting password reuse to take over accounts.",
    url: "https://quantlabusa.dev/glossary/what-is-credential-stuffing",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "Credential Stuffing", item: "https://quantlabusa.dev/glossary/what-is-credential-stuffing" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is credential stuffing in one sentence?", acceptedAnswer: { "@type": "Answer", text: "Credential stuffing is the automated replay of username and password pairs stolen from one site against many other sites, betting that people reuse the same password." } },
        { "@type": "Question", name: "How is it different from a brute-force attack?", acceptedAnswer: { "@type": "Answer", text: "Brute force guesses many passwords for one account. Credential stuffing tries one known real password per account across many accounts, so it rarely trips simple per-account lockouts." } },
        { "@type": "Question", name: "Why does credential stuffing work?", acceptedAnswer: { "@type": "Answer", text: "Because people reuse passwords. When one site is breached, those exact credentials unlock the same person's accounts everywhere else they reused them, often years later." } },
        { "@type": "Question", name: "What is the single best defense?", acceptedAnswer: { "@type": "Answer", text: "Multi-factor authentication. Even a valid stolen password fails the second factor, which neutralizes the overwhelming majority of credential-stuffing attempts." } },
        { "@type": "Question", name: "How can a site detect credential stuffing?", acceptedAnswer: { "@type": "Answer", text: "Watch for spikes in failed logins, many accounts hit from few addresses, bot-like timing, and known-breached passwords. Bot management, rate limiting, and breached-password checks all help." } },
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
                        <li className="text-gray-300">Credential Stuffing</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Security</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is Credential Stuffing?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        Credential stuffing is an attack that takes username and password pairs leaked from one company&apos;s breach and replays them, by the millions and with automation, against the login pages of unrelated services. It works for one depressing reason: people reuse passwords. When a stolen password from a years-old breach still unlocks the same person&apos;s account somewhere else, the attacker walks straight in — no exploit, no malware, just a valid login.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">It is not brute force</h2>
                    <p>
                        The distinction matters for defense. A brute-force attack guesses
                        many passwords against a single account and trips lockouts fast.
                        Credential stuffing does the opposite: it tries one known-real
                        password against each of many accounts, so any individual account
                        sees only a single failed attempt and classic per-account lockouts
                        never fire. Spread across a botnet of thousands of addresses, the
                        traffic blends into normal login noise. The attacker is not guessing
                        — they are testing credentials that were genuinely valid somewhere
                        else, which is why even a low success rate translates into a large
                        number of compromised accounts at scale.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where the credentials come from</h2>
                    <p>
                        The raw material is the steady stream of data breaches. Billions of
                        username and password combinations circulate in compiled lists, sold
                        and traded and eventually dumped for free. Attackers feed these lists
                        into automated tools — sometimes purpose-built &ldquo;account
                        checker&rdquo; software — that distribute the attempts across many
                        addresses to evade detection. Because passwords are reused for years,
                        a leak from one service stays useful against others long after the
                        original breach is forgotten. The economy is mature: lists, tooling,
                        and proxy networks are all available off the shelf, which keeps the
                        cost of an attack low.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What a takeover costs you</h2>
                    <p>
                        A compromised account is rarely the end goal — it is a foothold.
                        Attackers drain stored value and loyalty points, harvest saved
                        payment details and personal data, commit fraud under the
                        victim&apos;s name, or use the trusted account to launch{" "}
                        <Link href="/glossary/what-is-phishing" className="text-sky-400 hover:underline">phishing</Link>{" "}
                        against the victim&apos;s contacts. For the business, the fallout
                        includes chargebacks, support load, regulatory exposure, and eroded
                        trust. And because the login itself was valid, fraud-detection
                        systems that key on &ldquo;is this a real account?&rdquo; can be slow
                        to notice that the person behind it is not the real owner.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How to stop it</h2>
                    <p>
                        The single most effective control is{" "}
                        <Link href="/glossary/what-is-multi-factor-authentication" className="text-sky-400 hover:underline">multi-factor authentication</Link>:
                        a valid stolen password fails at the second factor, which defeats the
                        overwhelming majority of attempts. Beyond that, check new and changed
                        passwords against known-breached lists and block reuse. Add bot
                        management and intelligent rate limiting that look at patterns across
                        accounts rather than per account. Watch for the telltale signature —
                        a surge of failed logins, many accounts probed from few sources,
                        machine-like timing. Passwordless options such as passkeys remove the
                        reusable secret entirely and are the strongest answer of all.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        Authentication is where credential stuffing lives or dies, so it is
                        where we focus. The applications we{" "}
                        <Link href="/services" className="text-sky-400 hover:underline">build</Link>{" "}
                        support MFA out of the box, check passwords against breach corpora,
                        and apply cross-account rate limiting and bot detection at the login
                        edge rather than relying on naive per-account lockouts. In a{" "}
                        <Link href="/services/web-app-pentest" className="text-sky-400 hover:underline">web application penetration test</Link>{" "}
                        we probe exactly these defenses — looking for login and password-reset
                        flows that lack throttling, leak whether an account exists, or can be
                        automated at scale. Stopping account takeover is mostly about getting
                        the unglamorous login plumbing right.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The reuse problem behind it all</h2>
                    <p>
                        Credential stuffing exists because a single password protects many
                        doors. Every layer of advice — unique passwords, a password manager,
                        MFA everywhere, and ultimately passkeys — chips away at that root
                        cause. For a business, you cannot force good habits on every user, so
                        you design around the assumption that some passwords are already
                        compromised. Defenses that hold up even when the password is known —
                        a second factor, anomaly detection, breached-password blocking — are
                        the ones that age well, the same principle that makes
                        verification-based controls so durable against{" "}
                        <Link href="/glossary/what-is-social-engineering" className="text-sky-400 hover:underline">social engineering</Link>.
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
                        <li><Link href="/glossary/what-is-multi-factor-authentication" className="text-sky-400 hover:underline">What is MFA?</Link></li>
                        <li><Link href="/glossary/what-is-passkey-authentication" className="text-sky-400 hover:underline">What is passkey authentication?</Link></li>
                        <li><Link href="/glossary/what-is-social-engineering" className="text-sky-400 hover:underline">What is social engineering?</Link></li>
                        <li><Link href="/glossary/what-is-phishing" className="text-sky-400 hover:underline">What is phishing?</Link></li>
                        <li><Link href="/glossary/what-is-penetration-testing" className="text-sky-400 hover:underline">What is penetration testing?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Is your login resilient to account takeover?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We build login flows with MFA, breached-password checks, and bot
                        defense, and test them like an attacker. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-credstuffing" />
                        <Link href="/services/web-app-pentest" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Web app pentest
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
