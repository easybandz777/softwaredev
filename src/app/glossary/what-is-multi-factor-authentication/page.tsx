import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is Multi-Factor Authentication (MFA)? | QUANT LAB USA",
    description:
        "MFA requires two or more kinds of proof to log in, so a stolen password is not enough. Plain-English definition, the three factors, and why MFA matters — by QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-multi-factor-authentication" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Multi-Factor Authentication (MFA)",
    description:
        "Multi-factor authentication is a login method that requires two or more independent categories of evidence — something you know, something you have, or something you are — so that a single stolen credential is not enough to gain access.",
    url: "https://quantlabusa.dev/glossary/what-is-multi-factor-authentication",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "What is Multi-Factor Authentication?", item: "https://quantlabusa.dev/glossary/what-is-multi-factor-authentication" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What does MFA stand for?", acceptedAnswer: { "@type": "Answer", text: "MFA stands for Multi-Factor Authentication. It is a login method that requires two or more independent kinds of proof, so a stolen password alone is not enough to get in. Two-factor authentication (2FA) is the most common form." } },
        { "@type": "Question", name: "What are the three authentication factors?", acceptedAnswer: { "@type": "Answer", text: "Something you know (a password or PIN), something you have (a phone, security key, or token), and something you are (a fingerprint or face scan). True MFA combines factors from different categories, not two of the same kind." } },
        { "@type": "Question", name: "Is MFA the same as 2FA?", acceptedAnswer: { "@type": "Answer", text: "2FA is the most common type of MFA, using exactly two factors. MFA is the broader term covering any setup that uses two or more. All 2FA is MFA, but MFA can involve more than two factors." } },
        { "@type": "Question", name: "Can MFA be bypassed?", acceptedAnswer: { "@type": "Answer", text: "Weaker forms can be. SMS codes are vulnerable to SIM swapping, and push-based MFA can be defeated by 'MFA fatigue' attacks where users approve a flood of prompts. Phishing-resistant methods like passkeys and hardware security keys close most of these gaps." } },
        { "@type": "Question", name: "What is the strongest form of MFA?", acceptedAnswer: { "@type": "Answer", text: "Phishing-resistant MFA based on the FIDO2/WebAuthn standards — passkeys and hardware security keys — is the strongest widely available option because the credential is cryptographically bound to the real site and cannot be phished or replayed." } },
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
                        <li className="text-gray-300">What is Multi-Factor Authentication?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Security</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is Multi-Factor Authentication?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        Multi-factor authentication (MFA) is a login method that requires two or more independent kinds of proof before it lets you in — so that an attacker who steals just your password still cannot get into your account.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What does it mean?</h2>
                    <p>
                        Passwords have a fatal flaw: they are a single secret, and single secrets get
                        stolen, guessed, reused, and phished constantly. MFA fixes the flaw by
                        demanding evidence from more than one independent category, so compromising
                        one does not compromise the account. Security people sort that evidence into
                        three classic buckets. Something you <em>know</em> — a password or PIN.
                        Something you <em>have</em> — your phone, a hardware security key, an
                        authenticator app. And something you <em>are</em> — a fingerprint, a face
                        scan, another biometric.
                    </p>
                    <p>
                        The word &quot;multi&quot; is doing real work here. Requiring a password and then a
                        second password is not MFA, because both come from the same category; an
                        attacker who phishes one can usually phish the other. True MFA combines
                        factors from <em>different</em> buckets, which is why the most common setup —
                        a password plus a code from your phone — pairs &quot;something you know&quot; with
                        &quot;something you have.&quot; Two-factor authentication (2FA) is simply MFA with
                        exactly two factors, and it is the version most people encounter daily.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where the term came from</h2>
                    <p>
                        The underlying idea is decades old — ATM cards have required &quot;something you
                        have&quot; (the card) plus &quot;something you know&quot; (the PIN) since the 1970s. In the
                        corporate world, physical hardware tokens that displayed a rotating six-digit
                        code, like the RSA SecurID, popularized the second factor through the 1990s
                        and 2000s. The term became mainstream consumer vocabulary in the 2010s as a
                        wave of massive password breaches made it obvious that &quot;just a password&quot; was
                        no longer defensible, and major platforms began pushing MFA to everyone.
                    </p>
                    <p>
                        The technology has steadily improved. Early app-based codes used the TOTP
                        standard (time-based one-time passwords). The current frontier is the
                        FIDO2/WebAuthn family — the basis for{" "}
                        <Link href="/glossary/what-is-passkey-authentication" className="text-sky-400 hover:underline">passkeys</Link> and
                        hardware security keys — which is engineered specifically to resist phishing,
                        the weakness that still defeats older MFA methods.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How it works</h2>
                    <p>
                        A typical MFA login runs in two stages. You enter your password — the first
                        factor — and if it is correct the system issues a challenge for the second.
                        That challenge might be a six-digit code from an authenticator app, a push
                        notification you approve on your phone, a one-time code by text message, or a
                        tap on a hardware security key. Only when both factors check out are you
                        granted a session.
                    </p>
                    <p>
                        Not all second factors are created equal, and the differences matter.
                        SMS codes are better than nothing but vulnerable to SIM-swapping, where an
                        attacker hijacks your phone number. Push approvals can be defeated by &quot;MFA
                        fatigue&quot; attacks, where an attacker who already has your password spams you
                        with prompts until you tap &quot;approve&quot; out of annoyance — a technique that
                        appears directly in the{" "}
                        <Link href="/glossary/what-is-mitre-attack" className="text-sky-400 hover:underline">MITRE ATT&amp;CK</Link> catalog.
                        The phishing-resistant tier — passkeys and security keys built on{" "}
                        <Link href="/glossary/what-is-fido2" className="text-sky-400 hover:underline">FIDO2</Link> — closes
                        those gaps because the credential is cryptographically tied to the genuine
                        website and simply will not work on a lookalike phishing page.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">When it matters</h2>
                    <p>
                        MFA is one of the single highest-return security controls in existence:
                        enabling it blocks the overwhelming majority of account-takeover attacks that
                        rely on stolen or guessed passwords. It belongs on every administrative
                        account, every email account, every system holding sensitive data, and
                        increasingly on every customer-facing login. It is also a near-universal
                        compliance requirement —{" "}
                        <Link href="/glossary/what-is-soc-2" className="text-sky-400 hover:underline">SOC 2</Link>,
                        PCI-DSS, and HIPAA all expect it on privileged access — and a foundational
                        piece of any{" "}
                        <Link href="/glossary/what-is-zero-trust" className="text-sky-400 hover:underline">zero trust</Link> strategy,
                        where every access request must prove identity rather than being trusted by
                        default. The caveat worth internalizing is that enabling MFA and configuring
                        it well are different jobs; a weak factor or a sloppy account-recovery flow
                        can quietly hand an attacker the bypass.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        We see MFA from two angles, and both inform how we work. When we build{" "}
                        <Link href="/services/custom-business-software" className="text-sky-400 hover:underline">custom business software</Link>,
                        we implement MFA properly — favoring phishing-resistant factors and closing
                        the account-recovery paths that so often become the back door. When we run a{" "}
                        <Link href="/services/penetration-testing" className="text-sky-400 hover:underline">penetration test</Link>,
                        MFA is one of the first things we probe: can it be bypassed through a weak
                        recovery flow, an MFA-fatigue attack, a phishable factor, or a session that
                        outlives the check? We map each of those bypasses to{" "}
                        <Link href="/services/mitre-attack-assessment" className="text-sky-400 hover:underline">MITRE ATT&amp;CK</Link> so
                        you can see exactly how an attacker would defeat the control you assumed was
                        airtight. For the deeper compliance picture, our{" "}
                        <Link href="/blog/soc2-pentest-prep-guide-2026" className="text-sky-400 hover:underline">SOC 2 pentest prep guide</Link> covers
                        where authentication controls get scrutinized.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        pinned={["soc2-pentest-prep-guide-2026", "what-is-penetration-testing", "penetration-test-cost-2026"]}
                        topics={["pentest", "compliance"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-phishing" className="text-sky-400 hover:underline">What is phishing?</Link></li>
                        <li><Link href="/glossary/what-is-zero-trust" className="text-sky-400 hover:underline">Zero trust architecture</Link></li>
                        <li><Link href="/glossary/what-is-tls" className="text-sky-400 hover:underline">What is TLS?</Link></li>
                        <li><Link href="/glossary/what-is-mitre-attack" className="text-sky-400 hover:underline">MITRE ATT&amp;CK</Link></li>
                        <li><Link href="/glossary/what-is-penetration-testing" className="text-sky-400 hover:underline">What is penetration testing?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Is your MFA actually airtight?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We probe for the bypasses attackers actually use — weak recovery flows,
                        phishable factors, MFA fatigue. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-mfa" />
                        <Link href="/services/penetration-testing" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Penetration testing services
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
