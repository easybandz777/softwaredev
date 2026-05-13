import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata: Metadata = pageMetadata({
    title: "What is OAuth 2? The Authorization Framework Explained | QUANT LAB",
    description:
        "OAuth 2 is the authorization framework that lets apps act on behalf of a user without seeing their password. Real grant types, common mistakes, and how QUANT LAB ships it.",
    slug: "/glossary/what-is-oauth2",
});

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "OAuth 2",
    description:
        "OAuth 2.0 is an open authorization framework, defined by IETF RFC 6749, that lets a third-party application obtain limited access to a user's resources on another service without ever seeing the user's credentials.",
    url: "https://quantlabusa.dev/glossary/what-is-oauth2",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "What is OAuth 2?", item: "https://quantlabusa.dev/glossary/what-is-oauth2" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "Is OAuth 2 authentication or authorization?", acceptedAnswer: { "@type": "Answer", text: "OAuth 2 is an authorization framework, not an authentication protocol. OpenID Connect (OIDC) is the layer built on top of OAuth 2 that adds authentication. The two are commonly conflated and the distinction matters when designing identity flows." } },
        { "@type": "Question", name: "What is the difference between OAuth 1 and OAuth 2?", acceptedAnswer: { "@type": "Answer", text: "OAuth 1 used signed request URLs with shared secrets. OAuth 2, defined in 2012 by RFC 6749, simplified to bearer tokens over TLS — easier to implement, more flexible, but more dependent on transport-layer security." } },
        { "@type": "Question", name: "What are the OAuth 2 grant types?", acceptedAnswer: { "@type": "Answer", text: "The main ones in 2026: Authorization Code (with PKCE) for web and mobile apps, Client Credentials for service-to-service, Device Code for TVs and CLIs, and Refresh Token for renewal. The Implicit and Resource Owner Password Credentials grants are deprecated." } },
        { "@type": "Question", name: "What is PKCE?", acceptedAnswer: { "@type": "Answer", text: "Proof Key for Code Exchange — an extension that prevents code-interception attacks during the authorization-code flow. Originally for mobile apps, PKCE is now recommended for every OAuth 2 client including web apps." } },
        { "@type": "Question", name: "Why is OAuth 2 hard to get right?", acceptedAnswer: { "@type": "Answer", text: "The spec describes a framework, not a single protocol — many decisions are left to implementers, and small mistakes (incorrect redirect URI checking, wide token scopes, weak state handling) become exploitable. Real-world implementations should follow OAuth 2.1 best practice and use a battle-tested library." } },
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
                        <li className="text-gray-300">What is OAuth 2?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Security</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is OAuth 2?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        OAuth 2 is the open authorization framework — published by the IETF in 2012 as RFC 6749 — that lets one application act on behalf of a user inside another application without ever seeing the user's password. It is what "Sign in with Google," "Connect to Stripe," and every API integration in your stack actually runs on under the hood.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Authorization, not authentication</h2>
                    <p>
                        The single most common mistake about OAuth 2 is treating it as a login protocol. It is not. OAuth 2 is an authorization framework — it answers "is this application allowed to act on this user's behalf, and with what permissions?" It says nothing, by itself, about who the user is. OpenID Connect (OIDC), published by the OpenID Foundation in 2014, is the layer built on top of OAuth 2 that adds authentication — a standardized way to identify the user and convey identity claims via a <Link href="/glossary/what-is-an-jwt" className="text-sky-400 hover:underline">JWT</Link> called an ID token. When you use "Sign in with Google" on a third-party site, the protocol underneath is OIDC, not raw OAuth 2.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Roles in the protocol</h2>
                    <p>
                        Four roles. The resource owner is the user who has data they might let another app access. The resource server is the API where that data lives — Google, Stripe, your own backend. The client is the application requesting access. The authorization server is the service that issues tokens after the user consents. Often the resource server and the authorization server are run by the same vendor (Google's API and Google's OAuth endpoints), but they are distinct concepts in the spec.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Grant types in 2026</h2>
                    <p>
                        The Authorization Code grant — now with mandatory PKCE — is the canonical flow for any client where a user is present, whether that client is a web app, a single-page app, or a mobile app. Client Credentials is for machine-to-machine flows where no user is involved — your service calling another service with its own credentials. Device Code is for inputs without keyboards (smart TVs, CLIs, IoT devices) where the user authorizes on a separate browser. Refresh Token lets long-lived clients renew access without prompting the user again. The Implicit grant and the Resource Owner Password Credentials grant were both common in older docs and have been formally deprecated in OAuth 2.1; if you see them in a tutorial, find a newer tutorial.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where it goes wrong</h2>
                    <p>
                        OAuth 2 is a framework, not a closed protocol — which means the spec leaves many decisions to implementers, and small mistakes become real vulnerabilities. Redirect URI checking that allows substring matches instead of exact matches lets an attacker redirect tokens to a domain they control. Bearer tokens transported over HTTP instead of HTTPS get intercepted. Wide-scope tokens that an app does not actually need become useful loot for an attacker. State parameters omitted from the flow open the door to CSRF on the callback. None of these are theoretical; <Link href="/services/web-app-pentest" className="text-sky-400 hover:underline">our pen-test team</Link> finds them on real production systems regularly.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        We use OAuth 2 (and OIDC on top) in essentially every <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platform</Link> and integration we build — federated login for users, machine-to-machine tokens for service calls, and OAuth-based integrations into any vendor that supports it. Implementations typically use a managed provider (Clerk, Auth0, WorkOS) or a battle-tested library (NextAuth/Auth.js, Ory) rather than rolling raw flows.
                    </p>
                    <p>
                        For higher-assurance contexts — finance, healthcare, admin consoles — we layer <Link href="/glossary/what-is-fido2" className="text-sky-400 hover:underline">FIDO2</Link> and <Link href="/glossary/what-is-passkey-authentication" className="text-sky-400 hover:underline">passkeys</Link> on top of the OAuth flow at the authorization server, so the password is never the limiting factor. Read our piece on <Link href="/blog/stripe-webhook-security-best-practices" className="text-sky-400 hover:underline">Stripe webhook security</Link> for a real-world OAuth-adjacent integration pattern, or <Link href="/contact" className="text-sky-400 hover:underline">book a call</Link> if your OAuth implementation has been quietly accumulating tutorial debt since 2018.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-saml-sso" className="text-sky-400 hover:underline">What is SAML SSO?</Link></li>
                        <li><Link href="/glossary/what-is-an-jwt" className="text-sky-400 hover:underline">What is a JWT?</Link></li>
                        <li><Link href="/glossary/what-is-an-iam" className="text-sky-400 hover:underline">What is an IAM?</Link></li>
                        <li><Link href="/glossary/what-is-an-api" className="text-sky-400 hover:underline">What is an API?</Link></li>
                        <li><Link href="/glossary/what-is-fido2" className="text-sky-400 hover:underline">What is FIDO2?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">OAuth implementation aging badly?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We audit OAuth 2 and OIDC flows the way an attacker would — and rebuild them against OAuth 2.1 best practice.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-oauth2" />
                        <Link href="/services/web-app-pentest" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Web app pentest
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
