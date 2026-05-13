import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata: Metadata = pageMetadata({
    title: "What is Passkey Authentication? | QUANT LAB",
    description:
        "Passkeys replace passwords with phishing-resistant, synced FIDO2 credentials. What they are, how they work in practice, and how QUANT LAB ships them.",
    slug: "/glossary/what-is-passkey-authentication",
});

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Passkey Authentication",
    description:
        "Passkey authentication is the use of FIDO2 credentials — typically synced across a user's devices via Apple, Google, or Microsoft account infrastructure — as a phishing-resistant replacement for passwords during login.",
    url: "https://quantlabusa.dev/glossary/what-is-passkey-authentication",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "What is passkey authentication?", item: "https://quantlabusa.dev/glossary/what-is-passkey-authentication" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is a passkey?", acceptedAnswer: { "@type": "Answer", text: "A passkey is a FIDO2 credential — a public/private keypair — that lives on a user's device, is unlocked with the device biometric, and replaces a password during login." } },
        { "@type": "Question", name: "Are passkeys the same as FIDO2?", acceptedAnswer: { "@type": "Answer", text: "Passkeys are a consumer-friendly application of FIDO2 and WebAuthn. The underlying protocol is the same; the term \"passkey\" emphasizes the user experience and the cross-device syncing that the major platforms (Apple, Google, Microsoft, password managers) provide on top of it." } },
        { "@type": "Question", name: "Are passkeys synced across devices?", acceptedAnswer: { "@type": "Answer", text: "Multi-device passkeys are. Apple syncs them through iCloud Keychain, Google through the Google account, Microsoft through Microsoft accounts, and password managers like 1Password and Bitwarden through their own infrastructure. Hardware-bound passkeys (typically on security keys) do not sync." } },
        { "@type": "Question", name: "Can a passkey be phished?", acceptedAnswer: { "@type": "Answer", text: "No. Like all FIDO2 credentials, a passkey is bound to the origin where it was created. A phishing site at a lookalike domain cannot produce a valid login because the user's device refuses to sign for the wrong origin." } },
        { "@type": "Question", name: "What if a user loses all their devices?", acceptedAnswer: { "@type": "Answer", text: "Recovery is the hard problem. Synced passkeys come back when the user signs back into iCloud, Google, or their password manager. Hardware-bound passkeys require an account-recovery flow — backup keys, recovery codes, or a verified human process. Designing the recovery path is part of any serious passkey rollout." } },
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
                        <li className="text-gray-300">What is passkey authentication?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Security</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is Passkey Authentication?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        Passkey authentication replaces the password with a FIDO2 credential stored on the user's device, unlocked by a biometric or device PIN, synced across the user's devices through Apple, Google, Microsoft, or a password manager — phishing-resistant by design, dramatically less annoying than a password and a six-digit code.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where the word came from</h2>
                    <p>
                        "Passkey" emerged from Apple's 2021 WWDC announcement of a consumer-friendly term for synced FIDO2 credentials. The major platforms — Apple, Google, Microsoft — coordinated through the FIDO Alliance to support cross-device synchronization through 2022 and 2023. By 2024 the major password managers (1Password, Bitwarden, Dashlane) had also added passkey support, and by 2026 most consumer sites that support phishing-resistant authentication describe it to users as a "passkey" regardless of the underlying implementation.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Relationship to FIDO2 and WebAuthn</h2>
                    <p>
                        Underneath, a passkey is a <Link href="/glossary/what-is-fido2" className="text-sky-400 hover:underline">FIDO2</Link> credential created and exercised via the WebAuthn browser API. The cryptography is identical to what hardware security keys have done since the mid-2010s. What changed is the user experience: instead of plugging in a YubiKey, the user authenticates with the same biometric they use to unlock their phone, and the credential lives in a platform secure enclave that the user does not have to consciously manage. The synchronization layer (iCloud Keychain, Google Password Manager, etc.) means the credential is available across the user's devices without the user explicitly enrolling each one.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Synced vs device-bound</h2>
                    <p>
                        The FIDO specs distinguish two flavors. Multi-device passkeys (the typical consumer experience) are synced — the same credential is usable across all the user's devices that share the same platform account. Device-bound passkeys live on a single device and cannot be moved; this is the model used by hardware security keys and by some high-assurance enterprise deployments where keys are explicitly per-device. From the server's perspective the protocol is the same — the difference is the authenticator's attestation about whether the credential is synced or hardware-bound. Enterprise security teams sometimes restrict to device-bound for the highest-tier accounts.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The recovery problem</h2>
                    <p>
                        Designing the recovery path is the hardest part of a passkey rollout. With synced passkeys, recovery is usually "sign in to your iCloud / Google / password manager again" — the credentials come back along with everything else. That covers the majority case but assumes the user can still access their platform account. For higher-risk products (banks, healthcare portals, admin consoles) the right answer is usually a combination of passkeys plus a secondary recovery method — backup codes, a second passkey on a different device, or an out-of-band human verification process. Skipping this design step is how a passkey rollout becomes a customer-support nightmare three months in.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        We ship passkey support as a first-class option in our <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platforms</Link> and <Link href="/services/custom-business-software" className="text-sky-400 hover:underline">custom builds</Link>. The typical implementation uses SimpleWebAuthn or a managed provider (Clerk, Stytch, Auth0) and supports passkey-only flows for new users, passkey-as-second-factor for users who still want a password, and explicit registration of additional passkeys for users who want multi-device redundancy without relying on cloud sync.
                    </p>
                    <p>
                        For <Link href="/industries/healthcare" className="text-sky-400 hover:underline">healthcare</Link> and <Link href="/industries/fintech" className="text-sky-400 hover:underline">fintech</Link> products we usually layer device-bound passkeys for administrative accounts on top of synced passkeys for end users. Our <Link href="/services/penetration-testing" className="text-sky-400 hover:underline">pen-testing team</Link> tests the implementation end-to-end, because a misconfigured WebAuthn flow that falls back to password silently is worse than no passkey at all. <Link href="/contact" className="text-sky-400 hover:underline">Book a call</Link> if you are planning a rollout.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-fido2" className="text-sky-400 hover:underline">What is FIDO2?</Link></li>
                        <li><Link href="/glossary/what-is-an-iam" className="text-sky-400 hover:underline">What is an IAM?</Link></li>
                        <li><Link href="/glossary/what-is-saml-sso" className="text-sky-400 hover:underline">What is SAML SSO?</Link></li>
                        <li><Link href="/glossary/what-is-oauth2" className="text-sky-400 hover:underline">What is OAuth 2?</Link></li>
                        <li><Link href="/glossary/what-is-an-jwt" className="text-sky-400 hover:underline">What is a JWT?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Killing passwords?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We design passkey rollouts that handle the easy 80% and the support-team-killing 20% — recovery paths, attestation policies, and the audit trail.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-passkey" />
                        <Link href="/services/saas-platform-development" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            SaaS platform development
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
