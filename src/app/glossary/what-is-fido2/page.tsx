import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata: Metadata = pageMetadata({
    title: "What is FIDO2? Phishing-Resistant Authentication Explained | QUANT LAB",
    description:
        "FIDO2 is the open standard behind phishing-resistant authentication — security keys, passkeys, and WebAuthn. What it is, how it works, and what QUANT LAB recommends.",
    slug: "/glossary/what-is-fido2",
});

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "FIDO2",
    description:
        "FIDO2 is an open authentication standard, developed by the FIDO Alliance and the W3C, that enables phishing-resistant login using public-key cryptography on hardware security keys or built-in platform authenticators.",
    url: "https://quantlabusa.dev/glossary/what-is-fido2",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "What is FIDO2?", item: "https://quantlabusa.dev/glossary/what-is-fido2" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What does FIDO stand for?", acceptedAnswer: { "@type": "Answer", text: "FIDO stands for Fast IDentity Online. The FIDO Alliance is the industry consortium that develops the standards." } },
        { "@type": "Question", name: "What is FIDO2 made of?", acceptedAnswer: { "@type": "Answer", text: "FIDO2 has two main specifications: WebAuthn (the W3C standard for browsers to talk to authenticators) and CTAP2 (the FIDO Alliance protocol for browsers and OSes to talk to external hardware keys)." } },
        { "@type": "Question", name: "Is FIDO2 the same as a passkey?", acceptedAnswer: { "@type": "Answer", text: "Passkeys are a consumer-friendly application of FIDO2. Underneath, a passkey is a FIDO2 credential stored on a platform authenticator and often synced across a user's devices." } },
        { "@type": "Question", name: "Why is FIDO2 phishing-resistant?", acceptedAnswer: { "@type": "Answer", text: "The authenticator only signs challenges for the exact origin (domain) where the credential was registered. A phishing site at a lookalike domain cannot trick the user's key into producing a valid signature, because the cryptographic protocol incorporates the origin." } },
        { "@type": "Question", name: "Do I need a hardware key for FIDO2?", acceptedAnswer: { "@type": "Answer", text: "Not anymore. Modern phones, laptops, and browsers include platform authenticators backed by secure enclaves, so users can do FIDO2 authentication with Touch ID, Face ID, Windows Hello, or Android biometrics. Hardware keys (YubiKey, Titan) remain the gold standard for high-assurance use cases." } },
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
                        <li className="text-gray-300">What is FIDO2?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Security</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is FIDO2?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        FIDO2 is the open authentication standard, jointly developed by the FIDO Alliance and the W3C, that lets users log in with a security key or a built-in biometric on their phone or laptop — using public-key cryptography in a way that is fundamentally immune to phishing.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What FIDO actually stands for</h2>
                    <p>
                        FIDO is short for "Fast IDentity Online." The FIDO Alliance was founded in 2013 by PayPal, Lenovo, Nok Nok Labs, and others, with the explicit goal of replacing passwords with something the industry could agree on. FIDO U2F (Universal Second Factor) shipped first, in 2014 — that was the spec behind early YubiKeys. FIDO2 followed in 2018 and is the current generation, encompassing both the browser side (WebAuthn, a W3C standard) and the device side (CTAP2, the Client to Authenticator Protocol).
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why public-key cryptography matters here</h2>
                    <p>
                        Passwords are shared secrets. The user knows the password and the server knows a hash of the password, and any time both ends agree on the secret, login succeeds. The catastrophic property of shared secrets is that anyone else who learns the secret can also log in — which is why credential stuffing, phishing kits, and database leaks are so devastating. FIDO2 uses public-key cryptography instead. The user's device holds a private key it never shares. The server holds the matching public key. Login is a challenge-response: the server sends a random challenge, the device signs it, the server verifies the signature against the stored public key. There is no shared secret to steal.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The phishing-resistance property</h2>
                    <p>
                        The reason FIDO2 cannot be phished is structural, not behavioral. When a credential is created, it is bound to the origin (the exact domain) of the site that registered it. When the user later authenticates, the browser tells the authenticator which origin is making the request, and the authenticator refuses to sign for any other origin. A phishing site at "g00gle.com" cannot produce a valid login at "google.com" because the user's key will not sign for the wrong origin — no matter how convincing the phishing page looks, no matter what the user clicks. The cryptographic protocol does what training and user vigilance cannot.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Hardware keys vs platform authenticators</h2>
                    <p>
                        FIDO2 supports two kinds of authenticators. Roaming authenticators are external — a YubiKey, a Titan key, a NitroKey, plugged in over USB or tapped over NFC — and travel with the user across devices. Platform authenticators are built in — Touch ID on a Mac, Face ID on an iPhone, Windows Hello, Android biometrics — and live in the device's secure enclave. Platform authenticators are what made FIDO2 mainstream: most users have one already, on a device they always carry. Hardware keys remain the gold standard for high-assurance environments (admin accounts, finance, government) where the additional physical-factor guarantee matters.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        Adding WebAuthn-based <Link href="/glossary/what-is-passkey-authentication" className="text-sky-400 hover:underline">passkey</Link> support to a modern application is days of work, not weeks, and the security improvement over passwords is dramatic. We implement FIDO2 on our <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platforms</Link> with libraries like SimpleWebAuthn on the Node side, paired with a fallback that supports both passwordless and password-plus-passkey flows during the transition.
                    </p>
                    <p>
                        For clients in <Link href="/industries/fintech" className="text-sky-400 hover:underline">fintech</Link>, <Link href="/industries/healthcare" className="text-sky-400 hover:underline">healthcare</Link>, and any environment where account takeover is a board-level risk, we recommend mandatory hardware keys for administrative accounts and passkey support for everyone else. Our <Link href="/services/penetration-testing" className="text-sky-400 hover:underline">pen testers</Link> see the cost of password-only auth every week — phishing remains the number-one initial-access vector in 2026. <Link href="/contact" className="text-sky-400 hover:underline">Book a call</Link> if you are scoping a passkey rollout.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-passkey-authentication" className="text-sky-400 hover:underline">What is passkey authentication?</Link></li>
                        <li><Link href="/glossary/what-is-an-iam" className="text-sky-400 hover:underline">What is an IAM?</Link></li>
                        <li><Link href="/glossary/what-is-saml-sso" className="text-sky-400 hover:underline">What is SAML SSO?</Link></li>
                        <li><Link href="/glossary/what-is-oauth2" className="text-sky-400 hover:underline">What is OAuth 2?</Link></li>
                        <li><Link href="/glossary/what-is-zero-trust" className="text-sky-400 hover:underline">What is zero trust?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Rolling out phishing-resistant auth?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We add WebAuthn and passkey flows to existing apps — and we stress-test the implementation like an adversary would.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-fido2" />
                        <Link href="/services/penetration-testing" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Penetration testing
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
