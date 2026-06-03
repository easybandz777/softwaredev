import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { KeyRound, ArrowRight, Lock, Eye, ShieldAlert } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";
import { JwtDecoder } from "./JwtDecoder";

export const metadata: Metadata = pageMetadata({
    title: "Free JWT Decoder — Decode Header & Payload Online | QUANT LAB USA",
    description:
        "Paste a JWT and instantly decode its header and payload (base64url), inspect claims, and see token expiry. Runs 100% in your browser — nothing is uploaded. Decode-only; signatures are not verified.",
    slug: "/tools/jwt-decoder",
    keywords: [
        "jwt decoder",
        "decode jwt",
        "jwt parser",
        "json web token decoder",
        "jwt claims",
        "jwt expiry checker",
        "base64url decode jwt",
    ],
});

const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "JWT Decoder",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    url: "https://quantlabusa.dev/tools/jwt-decoder",
    description:
        "Decode a JSON Web Token's header and payload in your browser. Inspect claims and expiry. Decode-only — signatures are not verified and the token never leaves your device.",
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Does this JWT decoder verify the signature?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No. This is a decode-only tool. It splits the token on the dots and base64url-decodes the header and payload so you can read them, but it never checks the signature against a key. Decoding tells you what a token claims; only signature verification tells you whether those claims are authentic. Always verify the signature server-side with the issuer's public key (or shared secret) before trusting any claim for authorization.",
            },
        },
        {
            "@type": "Question",
            name: "Is it safe to paste a JWT here?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The decoding happens entirely in your browser with the built-in atob function — the token is never sent to a server, logged, or stored. That said, a valid JWT is a bearer credential: anyone who holds it can act as that user until it expires. As a matter of good hygiene, avoid pasting live production tokens into any third-party tool, and prefer expired or test tokens when you just need to inspect structure.",
            },
        },
        {
            "@type": "Question",
            name: "Why can I read the payload without a secret?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Because a standard JWT is signed, not encrypted. The header and payload are merely base64url-encoded JSON — encoding is not encryption. Anyone can decode and read the claims. The signature only guarantees the token has not been tampered with; it does not hide the contents. If you need the payload to be confidential, use an encrypted token (JWE) instead of a signed one (JWS), and never put secrets like passwords in a JWT payload.",
            },
        },
        {
            "@type": "Question",
            name: "What do the exp, iat, and nbf claims mean?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "They are registered time claims expressed as Unix timestamps (seconds since 1970). 'iat' is issued-at — when the token was created. 'exp' is the expiry — after this instant the token must be rejected. 'nbf' is not-before — the token is invalid until this time. This tool renders each as a human-readable local date so you can spot a token that is expired or not yet valid at a glance.",
            },
        },
        {
            "@type": "Question",
            name: "What algorithm should my JWTs use?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "For most APIs, HS256 (HMAC with a strong shared secret) is fine when the same party issues and verifies. Use an asymmetric algorithm like RS256 or ES256 when verifiers should not hold the signing key — for example, third parties validating tokens from your identity provider. Critically, never accept the 'none' algorithm and always pin the expected algorithm during verification; libraries that trust the header's alg field have historically been the source of serious authentication bypasses.",
            },
        },
    ],
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Tools", item: "https://quantlabusa.dev/tools" },
        {
            "@type": "ListItem",
            position: 3,
            name: "JWT Decoder",
            item: "https://quantlabusa.dev/tools/jwt-decoder",
        },
    ],
};

export default function JwtDecoderPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <div className="container mx-auto px-6 max-w-5xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/tools" className="hover:text-sky-400 transition-colors">Tools</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">JWT Decoder</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-400 mb-6">
                        <KeyRound className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        JWT Decoder
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-3xl">
                        Paste a JSON Web Token to decode its header and payload, inspect every
                        claim, and check expiry — instantly, in your browser. Decode-only: this
                        tool reads the token, it does not verify the signature.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                            <Lock className="w-4 h-4 text-emerald-400" />
                            <span>Runs in-browser, nothing uploaded</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Eye className="w-4 h-4 text-sky-400" />
                            <span>Header, payload &amp; claims table</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <ShieldAlert className="w-4 h-4 text-amber-400" />
                            <span>Expiry check (exp / iat / nbf)</span>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <JwtDecoder />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        Decoding is not verifying — and the difference matters
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-5">
                        <p>
                            A JSON Web Token is three base64url-encoded segments joined by dots:{" "}
                            <code className="text-sky-300">header.payload.signature</code>. The
                            header names the signing algorithm and token type. The payload carries
                            the claims — who the token is about, what it grants, and when it
                            expires. The signature is a keyed hash over the first two parts. This
                            tool splits on the dots and base64url-decodes the first two segments so
                            you can read them. It deliberately stops there.
                        </p>
                        <p>
                            The single most important thing to understand about JWTs is that{" "}
                            <strong className="text-white">encoding is not encryption</strong>. The
                            payload is plain JSON anyone can read with two lines of code. The
                            signature does not hide the contents — it only proves the token has not
                            been altered since it was signed. So never put a password, a full credit
                            card number, or any other secret in a JWT payload. If the data must stay
                            confidential, reach for an encrypted token (JWE), not a signed one.
                        </p>
                        <p>
                            <strong className="text-white">Why decode-only is a deliberate choice.</strong>{" "}
                            Verifying a signature requires the signing key, and the security of the
                            whole scheme depends on doing that verification correctly, server-side,
                            with the algorithm pinned. A browser tool that asked you to paste your
                            signing secret would be teaching a dangerous habit. Use this tool to
                            inspect structure and debug claims; do the actual verification in your
                            backend with a battle-tested library.
                        </p>
                        <p>
                            <strong className="text-white">The classic JWT vulnerabilities</strong>{" "}
                            almost all stem from trusting the token too much. The{" "}
                            <code className="text-sky-300">alg: none</code> attack tricks a verifier
                            into accepting an unsigned token. The algorithm-confusion attack feeds an
                            RS256 public key to a verifier expecting HS256, letting an attacker sign
                            tokens with public information. Both are defeated by pinning the expected
                            algorithm rather than trusting the header. We cover this and more in our
                            write-up on{" "}
                            <Link href="/blog/stripe-webhook-security-best-practices" className="text-sky-400 underline-offset-2 hover:underline">
                                signature verification best practices
                            </Link>
                            , and dig into auth design during a{" "}
                            <Link href="/services/web-app-pentest" className="text-sky-400 underline-offset-2 hover:underline">
                                web application penetration test
                            </Link>
                            .
                        </p>
                        <p>
                            For the conceptual background on the APIs these tokens protect, our
                            glossary entries on{" "}
                            <Link href="/glossary/what-is-an-api" className="text-sky-400 underline-offset-2 hover:underline">
                                what an API is
                            </Link>{" "}
                            and{" "}
                            <Link href="/glossary/what-is-tls" className="text-sky-400 underline-offset-2 hover:underline">
                                what TLS is
                            </Link>{" "}
                            are a good starting point — JWTs ride inside HTTPS requests, and TLS is
                            what keeps the bearer token from being read in transit.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How to use it</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-5">
                        <p>
                            Paste your token into the input. The header and payload decode live as
                            you type, and a claims table breaks the payload into individual fields.
                            Time-based claims (<code className="text-sky-300">exp</code>,{" "}
                            <code className="text-sky-300">iat</code>,{" "}
                            <code className="text-sky-300">nbf</code>) are rendered as readable local
                            dates, and an expiry banner tells you immediately whether the token is
                            still valid by its <code className="text-sky-300">exp</code> claim. Use
                            the copy buttons to grab the pretty-printed header or payload. Everything
                            stays on your machine — close the tab and it is gone.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-4">
                        {faqSchema.mainEntity.map((item) => (
                            <details
                                key={item.name}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-6 open:bg-[#0d1526]"
                            >
                                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-semibold text-white">
                                    <span>{item.name}</span>
                                    <ArrowRight className="w-4 h-4 text-sky-400 transition-transform group-open:rotate-90" />
                                </summary>
                                <p className="text-gray-400 mt-3 leading-relaxed text-sm">{item.acceptedAnswer.text}</p>
                            </details>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related tools</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {[
                            { label: "All free tools", href: "/tools" },
                            { label: "Base64 encoder / decoder", href: "/tools/base64-encoder-decoder" },
                            { label: "JSON formatter", href: "/tools/json-formatter" },
                            { label: "OWASP checklist app", href: "/tools/owasp-checklist-app" },
                            { label: "Web app pentest", href: "/services/web-app-pentest" },
                            { label: "API development", href: "/services/api-development" },
                            { label: "What is TLS?", href: "/glossary/what-is-tls" },
                            { label: "Talk to QUANT LAB USA", href: "/contact" },
                        ].map((l) => (
                            <Link
                                key={l.href}
                                href={l.href}
                                className="rounded-xl border border-white/5 bg-[#0d1526]/60 hover:border-sky-400/30 hover:bg-[#0d1526] transition-colors p-4 text-sm text-gray-300 hover:text-white"
                            >
                                {l.label} <ArrowRight className="inline w-3 h-3 ml-1 text-sky-400" />
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts topics={["pentest", "stack"]} heading="Related engineering reading" />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 to-emerald-500/5 p-8 md:p-12 text-center">
                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                            Is your token-based auth actually safe?
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl mx-auto">
                            We have seen production systems trust the JWT header&apos;s algorithm,
                            skip expiry checks, and store tokens where any script can read them. A
                            focused security review catches these before an attacker does. Talk to
                            us about authentication design and web application penetration testing.
                        </p>
                        <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
                            Or reach us directly:{" "}
                            <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline">(770) 652-1282</a>{" "}
                            · <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline">beltz@quantlabusa.dev</a>
                        </p>
                        <ConsultationCTA label="Book a 20-min Security Review" source="jwt-decoder" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
