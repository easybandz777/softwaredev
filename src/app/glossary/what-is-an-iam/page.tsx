import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata: Metadata = pageMetadata({
    title: "What is an IAM (Identity and Access Management)? | QUANT LAB",
    description:
        "IAM is the system that decides who can do what in your stack. The cloud meaning vs the workforce meaning, the principles that matter, and how QUANT LAB designs it.",
    slug: "/glossary/what-is-an-iam",
});

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "IAM (Identity and Access Management)",
    description:
        "Identity and Access Management is the discipline — and the collection of systems that implement it — for determining who a user or service is, what resources they may access, and under what conditions.",
    url: "https://quantlabusa.dev/glossary/what-is-an-iam",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "What is an IAM?", item: "https://quantlabusa.dev/glossary/what-is-an-iam" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What does IAM stand for?", acceptedAnswer: { "@type": "Answer", text: "IAM stands for Identity and Access Management — the systems and policies that decide who is who and what they are allowed to do." } },
        { "@type": "Question", name: "Is IAM the same as AWS IAM?", acceptedAnswer: { "@type": "Answer", text: "AWS IAM is one of the best-known IAM products and the term is often used as a shorthand, but IAM as a concept is much broader. Okta, Microsoft Entra ID, Google Workspace, and Ping are all IAM platforms in the workforce sense; AWS IAM, GCP IAM, and Azure RBAC are IAM in the cloud-resource sense." } },
        { "@type": "Question", name: "What is the principle of least privilege?", acceptedAnswer: { "@type": "Answer", text: "The principle that any user, service, or process should have the minimum permissions necessary to do their job — and nothing more. Most IAM disasters trace back to over-broad permissions granted because it was easier than scoping correctly." } },
        { "@type": "Question", name: "What is RBAC vs ABAC?", acceptedAnswer: { "@type": "Answer", text: "Role-Based Access Control assigns permissions to roles, and users get permissions by being assigned to roles. Attribute-Based Access Control evaluates each request against rules about the user, resource, and environment. RBAC is simpler; ABAC handles complex policies like \"only during business hours from a corporate device.\"" } },
        { "@type": "Question", name: "Why do IAM mistakes cause so many breaches?", acceptedAnswer: { "@type": "Answer", text: "Because permissions accumulate. An employee changes roles, gets new permissions, and old ones are rarely revoked. A contractor gets temporary access that quietly stays after the contract ends. A service account is granted broad permissions during a deploy and never trimmed. Attackers chain those over-permissions into devastating breaches." } },
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
                        <li className="text-gray-300">What is an IAM?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Security</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is an IAM?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        Identity and Access Management (IAM) is the system that decides who someone is when they show up at your door, what they are allowed to do once you let them in, and when those answers should change — and it is, in practice, the layer most cyberattacks ultimately abuse.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Two senses of the word</h2>
                    <p>
                        "IAM" gets used in two overlapping ways. Workforce IAM is what Okta, Microsoft Entra ID, Google Workspace, JumpCloud, and Ping do — the identity provider that manages your employees, their SSO across SaaS apps, their MFA, and their lifecycle (onboarding, role changes, offboarding). Cloud-resource IAM is what AWS IAM, GCP IAM, and Azure RBAC do — the system inside a cloud provider that decides which users, services, and roles can perform which API actions on which resources. They are different systems serving different audiences, but they intersect — your workforce IAM is often what federates into your cloud IAM via <Link href="/glossary/what-is-saml-sso" className="text-sky-400 hover:underline">SAML SSO</Link>.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The four classic capabilities</h2>
                    <p>
                        Identification — knowing who is making a request, usually via a username, email, or service-account ID. Authentication — verifying that the entity is who it claims to be, via a password, passkey, hardware key, or service-to-service credential. Authorization — deciding whether the now-authenticated entity is allowed to do the thing it is trying to do. Auditing — keeping a record of who did what, when, from where, so that a breach can be investigated and a compliance auditor can answer the question. A real IAM system has all four; products that claim "IAM" while only doing authentication are common and worth questioning.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">RBAC, ABAC, and policy as code</h2>
                    <p>
                        The authorization sub-problem has its own ecosystem. Role-Based Access Control (RBAC) assigns permissions to named roles (Admin, Editor, Viewer) and assigns users to roles. It scales reasonably well up to mid-size organizations and is the default in most products. Attribute-Based Access Control (ABAC) evaluates each request against rules about the user, the resource, and the context (time, location, device posture). ABAC handles nuance — "only on a corporate device, only between 8am and 7pm, only for resources in their region" — that RBAC cannot. Policy-as-code engines like Open Policy Agent (OPA) and Cedar (the policy language behind AWS) let teams write authorization rules in declarative languages and run them consistently across services.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where IAM disasters come from</h2>
                    <p>
                        Permission drift is the dominant failure mode. People change roles and old permissions stay. Contractors arrive, are granted temporary access, and the access outlives the contract by years. A service account gets sudo-equivalent permissions during a deploy that nobody remembers to remove. Attackers do not need a zero-day if they can compromise one credential whose permissions have been quietly compounding since 2019. The fix is process: quarterly access reviews, automatic revocation on role change, time-bounded grants for temporary access, and continuous monitoring for unused permissions.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        Every <Link href="/services/cloud-infrastructure" className="text-sky-400 hover:underline">cloud infrastructure</Link> build we ship starts with a deliberate IAM design — workforce identity federated from the client's existing provider (Okta, Google, Entra), per-service IAM roles for every workload, and an automated review of unused permissions. Our <Link href="/services/active-directory-pentest" className="text-sky-400 hover:underline">Active Directory pen tests</Link> consistently find that the IAM disasters are not at the cloud layer — they are in the legacy directory the cloud federates against.
                    </p>
                    <p>
                        For SaaS products, our <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platform builds</Link> include a typed authorization layer from day one — Postgres row-level security plus a policy engine — so the question "is this user allowed to see this resource" has one consistent answer across every endpoint. Read our piece on <Link href="/blog/building-multi-tenant-saas-postgres-rls" className="text-sky-400 hover:underline">multi-tenant SaaS with Postgres RLS</Link> for the data-layer pattern, or <Link href="/contact" className="text-sky-400 hover:underline">book a call</Link> if your IAM has been accreting since the early days.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-saml-sso" className="text-sky-400 hover:underline">What is SAML SSO?</Link></li>
                        <li><Link href="/glossary/what-is-oauth2" className="text-sky-400 hover:underline">What is OAuth 2?</Link></li>
                        <li><Link href="/glossary/what-is-an-jwt" className="text-sky-400 hover:underline">What is a JWT?</Link></li>
                        <li><Link href="/glossary/what-is-zero-trust" className="text-sky-400 hover:underline">What is zero trust?</Link></li>
                        <li><Link href="/glossary/what-is-active-directory" className="text-sky-400 hover:underline">What is Active Directory?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">IAM that has been compounding since 2019?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We audit and rebuild IAM the way an adversary would test it — and the way a SOC 2 auditor wants to see it.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-iam" />
                        <Link href="/services/cloud-infrastructure" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Cloud infrastructure
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
