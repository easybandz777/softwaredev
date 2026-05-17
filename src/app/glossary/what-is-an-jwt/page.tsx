import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata: Metadata = pageMetadata({
    title: "What is a JWT (JSON Web Token)? Guide | QUANT LAB USA",
    description:
        "A JWT is a signed token used to prove identity in stateless APIs. Plain-English definition, security gotchas, when to use sessions instead. By QUANT LAB USA.",
    slug: "/glossary/what-is-an-jwt",
});

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "JWT (JSON Web Token)",
    description:
        "A JSON Web Token (JWT) is a compact, URL-safe, cryptographically signed JSON object used to convey claims between two parties — most commonly for authentication, session state, and OAuth 2 / OIDC token formats.",
    url: "https://quantlabusa.dev/glossary/what-is-an-jwt",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "What is a JWT?", item: "https://quantlabusa.dev/glossary/what-is-an-jwt" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What does JWT stand for?", acceptedAnswer: { "@type": "Answer", text: "JWT stands for JSON Web Token. It is pronounced \"jot\" by the protocol's authors and \"J-W-T\" by everyone else." } },
        { "@type": "Question", name: "What is inside a JWT?", acceptedAnswer: { "@type": "Answer", text: "Three base64-encoded sections separated by dots: a header (algorithm and type), a payload (the claims — user ID, expiration, scopes, anything the issuer wants to include), and a signature over the first two. The contents are signed, not encrypted, and anyone with the token can read its payload." } },
        { "@type": "Question", name: "Is a JWT encrypted?", acceptedAnswer: { "@type": "Answer", text: "No, not by default. A standard JWT is signed but readable by anyone who has it. The JWE (JSON Web Encryption) variant adds encryption, but is rarely used in practice — most teams either keep tokens out of untrusted contexts or accept that the payload is visible." } },
        { "@type": "Question", name: "Should I use JWTs for session tokens?", acceptedAnswer: { "@type": "Answer", text: "It depends. JWTs are great for short-lived access tokens in stateless distributed systems. For long-lived browser sessions, opaque session IDs backed by a server-side store are usually safer — you can revoke them instantly, which is much harder with a JWT." } },
        { "@type": "Question", name: "What is the most common JWT mistake?", acceptedAnswer: { "@type": "Answer", text: "Accepting the \"none\" algorithm in the header, which makes the token effectively unsigned. The historical implementation bug was libraries that trusted the alg field in the header to decide what verification to perform, which let attackers forge tokens by simply changing alg to \"none.\" Modern libraries fix this, but the pattern still appears in poorly-maintained code." } },
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
                        <li className="text-gray-300">What is a JWT?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Security</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is a JWT?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        A JSON Web Token (JWT) is a compact, URL-safe, cryptographically signed JSON object used to convey claims about a user or service — typically issued by an authorization server and consumed by an API that wants to know who is calling without phoning home to verify.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where JWTs came from</h2>
                    <p>
                        The IETF published the JWT specification as RFC 7519 in 2015, alongside the broader JOSE (JSON Object Signing and Encryption) family of standards. The motivating use case was OAuth 2 — the protocol wanted a token format that could carry claims, be cryptographically verified without a database lookup, and travel safely in URLs and HTTP headers. JWTs are now the standard token format for OpenID Connect, most modern OAuth deployments, and many internal service-to-service systems.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Anatomy of a token</h2>
                    <p>
                        A JWT is three base64url-encoded segments separated by dots. The header declares the signing algorithm and the token type. The payload is a JSON object containing claims — standard claims defined by the spec (issuer, subject, audience, expiration, issued-at) and any custom claims the issuer wants to include (user role, tenant ID, scopes). The signature is computed over the first two segments using either a shared secret (HMAC) or a public-key algorithm (RSA, ECDSA, EdDSA). Recipients verify the signature using the secret or public key; if the signature is valid and the claims pass policy checks, the token is trusted.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Signed, not secret</h2>
                    <p>
                        A common misunderstanding: JWTs are signed, not encrypted by default. Anyone who has the token can decode the payload and read the claims — base64 is encoding, not encryption. This matters for two reasons. First, do not put sensitive data in a JWT you might pass through untrusted contexts; the claims are visible. Second, the security property a JWT provides is integrity (the claims have not been tampered with) and authenticity (they were signed by the expected issuer), not confidentiality. If you need confidentiality, use the JWE (JSON Web Encryption) variant or keep the sensitive data on the server and reference it by an opaque token.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">When JWTs are the right tool — and when they are not</h2>
                    <p>
                        JWTs shine as short-lived access tokens in distributed systems. The receiver verifies a signature locally and trusts the claims; no database lookup. They are the standard OIDC ID token format and the most common OAuth 2 access token format. For long-lived browser sessions, however, opaque session IDs backed by a server-side session store are often safer — you can revoke them instantly, which is much harder with a JWT, because every service that holds the public key has to be told the token is now invalid. The "blacklist a revoked JWT" pattern works but defeats half the point of using JWTs in the first place. The pragmatic answer is short access-token lifetimes (5 to 15 minutes), longer refresh tokens stored server-side, and accepting that a stolen access token is exploitable for its lifetime.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        Our <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platform builds</Link> use JWTs for the short-lived access tokens in our <Link href="/glossary/what-is-oauth2" className="text-sky-400 hover:underline">OAuth 2</Link> flows and for service-to-service authentication inside the system. Browser sessions are typically opaque HTTP-only cookies backed by a server-side session store, because instant revocation matters for a user-facing app.
                    </p>
                    <p>
                        Our <Link href="/services/web-app-pentest" className="text-sky-400 hover:underline">pen-test team</Link> regularly finds JWT-related vulnerabilities in production systems — accepting the "none" algorithm, weak HMAC secrets reused for years, missing audience checks, signatures verified with the wrong key, and tokens used past their useful lifetime. Read our <Link href="/blog/stripe-webhook-security-best-practices" className="text-sky-400 hover:underline">Stripe webhook security guide</Link> for a related signature-verification pattern, or <Link href="/contact" className="text-sky-400 hover:underline">book a call</Link> for a code review of your token-handling layer.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        topics={["stack"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-oauth2" className="text-sky-400 hover:underline">What is OAuth 2?</Link></li>
                        <li><Link href="/glossary/what-is-saml-sso" className="text-sky-400 hover:underline">What is SAML SSO?</Link></li>
                        <li><Link href="/glossary/what-is-an-iam" className="text-sky-400 hover:underline">What is an IAM?</Link></li>
                        <li><Link href="/glossary/what-is-an-api" className="text-sky-400 hover:underline">What is an API?</Link></li>
                        <li><Link href="/glossary/what-is-secrets-management" className="text-sky-400 hover:underline">What is secrets management?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Token-handling code that scares you?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We code-review JWT and OAuth implementations the way an attacker would test them — and rebuild what does not stand up.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-jwt" />
                        <Link href="/services/web-app-pentest" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Web app pentest
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
