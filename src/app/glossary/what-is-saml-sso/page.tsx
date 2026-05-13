import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata: Metadata = pageMetadata({
    title: "What is SAML SSO? Definition & How It Works | QUANT LAB",
    description:
        "SAML SSO is the XML-based single sign-on protocol that runs most enterprise IT. How the SP-IdP dance works, where it bites, and how QUANT LAB ships it.",
    slug: "/glossary/what-is-saml-sso",
});

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "SAML SSO",
    description:
        "SAML (Security Assertion Markup Language) is an XML-based open standard for exchanging authentication and authorization data between an identity provider and a service provider, most commonly used to implement single sign-on across enterprise applications.",
    url: "https://quantlabusa.dev/glossary/what-is-saml-sso",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "What is SAML SSO?", item: "https://quantlabusa.dev/glossary/what-is-saml-sso" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What does SAML stand for?", acceptedAnswer: { "@type": "Answer", text: "SAML stands for Security Assertion Markup Language — an XML-based open standard, originally published by OASIS in 2002 and updated to SAML 2.0 in 2005." } },
        { "@type": "Question", name: "What is the difference between SAML and SSO?", acceptedAnswer: { "@type": "Answer", text: "SSO (single sign-on) is the user-experience goal: log in once, get access to many applications. SAML is one of the protocols used to implement SSO. OAuth 2 / OpenID Connect is the other major option, and is dominant for newer apps." } },
        { "@type": "Question", name: "What are SP and IdP?", acceptedAnswer: { "@type": "Answer", text: "The SP is the service provider — the application the user is trying to log into. The IdP is the identity provider — the system that authenticates the user and asserts who they are to the SP. Okta, Microsoft Entra ID, and Google Workspace are common IdPs." } },
        { "@type": "Question", name: "Is SAML being replaced?", acceptedAnswer: { "@type": "Answer", text: "For new applications, OAuth 2 and OpenID Connect (OIDC) have largely replaced SAML — they are simpler, JSON-based, and friendlier to mobile and SPA front-ends. SAML remains entrenched in enterprise IT and is unlikely to disappear for at least another decade." } },
        { "@type": "Question", name: "Why is SAML often called the \"enterprise tax\"?", acceptedAnswer: { "@type": "Answer", text: "Because SaaS vendors typically charge a premium for SAML-based SSO — the so-called \"SSO tax\" — on the theory that customers who need SAML are by definition large enterprises that can afford to pay. The practice is controversial but standard." } },
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
                        <li className="text-gray-300">What is SAML SSO?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Security</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is SAML SSO?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        SAML SSO is the XML-based single sign-on protocol that lets a user log into an identity provider once — usually Okta, Microsoft Entra ID, or Google Workspace — and then access dozens of separate enterprise applications without typing a password into any of them, and is the reason most enterprise IT functions exist in the shape they do.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where SAML came from</h2>
                    <p>
                        OASIS published SAML 1.0 in 2002 to standardize how separate web applications could share authentication. SAML 2.0 followed in 2005 and is the version essentially every modern deployment uses. The protocol was designed for a world of enterprise web applications behind a corporate firewall, federated to a single identity provider — exactly the use case Microsoft Active Directory Federation Services, IBM Tivoli, and later Okta built businesses around.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The SP-IdP dance</h2>
                    <p>
                        Two actors and one user. The Service Provider (SP) is the application the user is trying to reach — your SaaS, a vendor portal, a corporate intranet. The Identity Provider (IdP) is the system that authenticates users — Okta, Entra ID, Google Workspace, Ping, ADFS. When the user tries to access the SP, the SP redirects the browser to the IdP with an authentication request. The IdP authenticates the user (password, MFA, hardware key) and responds with a SAML assertion — a signed XML document that says "this is alice@company.com, here are her group memberships, this assertion is valid for the next hour." The SP verifies the signature, trusts the assertion, and lets the user in.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What SAML actually buys an enterprise</h2>
                    <p>
                        Three things. Single sign-on — users log in once per day, not once per app. Centralized lifecycle — when an employee leaves, deprovisioning their identity at the IdP cuts off access to every connected SP simultaneously, instead of hunting through forty SaaS admin panels. Centralized policy — MFA requirements, conditional access, device posture checks all live at the IdP and apply consistently across every connected app. Without SAML, every SaaS gets its own password and its own offboarding ritual, and "Sarah left two months ago" becomes a phrase that ruins someone's morning.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">SAML vs OIDC</h2>
                    <p>
                        OpenID Connect (OIDC), built on top of <Link href="/glossary/what-is-oauth2" className="text-sky-400 hover:underline">OAuth 2</Link>, is the modern alternative. OIDC uses JSON and JWTs instead of XML, plays much better with mobile and single-page-app frontends, and is dramatically simpler to implement correctly. For consumer products and modern SaaS, OIDC has essentially won. SAML remains entrenched in enterprise IT because the existing IdP installations, the procurement workflows, and the muscle memory of corporate security teams are all built around it — and large enterprises specifically request SAML in their procurement RFPs.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        Every <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platform</Link> we build for enterprise customers ships SAML SSO as part of the enterprise tier, even when the founders would rather support OIDC alone — because procurement teams ask for SAML and the deals stop without it. We typically use a managed provider (WorkOS, Stytch, Auth0 Enterprise, Clerk) on the implementation side rather than rolling raw XML signature verification, because SAML's edge cases (encrypted assertions, signed responses vs signed assertions, IdP-initiated flows) are a sharp surface to land on.
                    </p>
                    <p>
                        For internal apps and admin consoles, we federate to whatever IdP the client already runs — typically Google Workspace or Microsoft Entra. The wire protocol is sometimes SAML, sometimes OIDC, but the user experience is identical and the access is centrally governed. Read our <Link href="/glossary/what-is-an-iam" className="text-sky-400 hover:underline">IAM glossary entry</Link> for the broader picture, or <Link href="/contact" className="text-sky-400 hover:underline">book a call</Link> if you have an enterprise deal blocked on SSO.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-oauth2" className="text-sky-400 hover:underline">What is OAuth 2?</Link></li>
                        <li><Link href="/glossary/what-is-an-jwt" className="text-sky-400 hover:underline">What is a JWT?</Link></li>
                        <li><Link href="/glossary/what-is-an-iam" className="text-sky-400 hover:underline">What is an IAM?</Link></li>
                        <li><Link href="/glossary/what-is-active-directory" className="text-sky-400 hover:underline">What is Active Directory?</Link></li>
                        <li><Link href="/glossary/what-is-fido2" className="text-sky-400 hover:underline">What is FIDO2?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Enterprise deal blocked on SSO?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We ship SAML and OIDC into existing apps in weeks, not quarters — federated to any IdP your customer brings.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-saml" />
                        <Link href="/services/saas-platform-development" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            SaaS platform development
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
