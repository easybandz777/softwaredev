import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata: Metadata = pageMetadata({
    title: "What is Secrets Management? | QUANT LAB",
    description:
        "Secrets management is how API keys, database credentials, and signing certificates are stored, rotated, and accessed safely. What good looks like, the common failures, and what QUANT LAB recommends.",
    slug: "/glossary/what-is-secrets-management",
});

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Secrets Management",
    description:
        "Secrets management is the discipline of securely storing, distributing, rotating, and auditing the credentials — API keys, database passwords, signing keys, certificates — that software systems use to authenticate to other systems.",
    url: "https://quantlabusa.dev/glossary/what-is-secrets-management",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "What is secrets management?", item: "https://quantlabusa.dev/glossary/what-is-secrets-management" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is a secret in this context?", acceptedAnswer: { "@type": "Answer", text: "Any credential a system uses to authenticate to another system — API keys for Stripe or SendGrid, database passwords, signing keys for JWTs, TLS private keys, cloud provider access keys, SSH keys. If exposure of the value would let an attacker impersonate the system, it is a secret." } },
        { "@type": "Question", name: "What is wrong with .env files?", acceptedAnswer: { "@type": "Answer", text: "They are fine for local development. The trouble starts when .env values get committed to git, copied around in chat messages, baked into container images, or never rotated even after an engineer leaves. A real secrets manager solves the lifecycle, not just the local-dev convenience." } },
        { "@type": "Question", name: "What tools manage secrets?", acceptedAnswer: { "@type": "Answer", text: "AWS Secrets Manager, GCP Secret Manager, Azure Key Vault, HashiCorp Vault, Doppler, Infisical, Akeyless, and 1Password Secrets Automation are the most common. Each handles storage, access policies, and rotation differently." } },
        { "@type": "Question", name: "How often should secrets be rotated?", acceptedAnswer: { "@type": "Answer", text: "It depends on the secret and the blast radius. Short-lived workload credentials should rotate every few hours and ideally be auto-rotated. Long-lived credentials for external vendors should rotate at least annually, on every personnel change touching that system, and immediately on any suspicion of exposure." } },
        { "@type": "Question", name: "What is the most common secrets failure?", acceptedAnswer: { "@type": "Answer", text: "Secrets committed to git, often in private repos that get later made public, in container images uploaded to a registry, or in build logs that get archived. GitGuardian, TruffleHog, and GitHub's own secret scanning find tens of thousands of leaked credentials a day." } },
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
                        <li className="text-gray-300">What is secrets management?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Security</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is Secrets Management?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        Secrets management is the practice of securely storing, distributing, rotating, and auditing the credentials a system uses to authenticate to other systems — API keys, database passwords, signing keys, certificates — so that no human reads them, no git commit contains them, no container image bakes them in, and any one of them can be revoked instantly without a deploy.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What counts as a secret</h2>
                    <p>
                        Anything whose exposure would let someone impersonate the system or read data they should not. The Stripe live key. The Postgres connection string. The signing key for your JWTs. The AWS access key for the deploy role. The SSH private key for the bastion host. The OAuth client secret for the SaaS integration. The TLS private key for the certificate. The webhook signing secret. Each of these is a credential whose leak is a security incident, and the discipline of secrets management is treating every one of them with the seriousness that implies.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why a .env file is not enough</h2>
                    <p>
                        Local development with .env files is fine. Production is not. A production system needs four things that .env files do not provide. Storage that is encrypted at rest and accessible only to authenticated workloads. Distribution that gets the secret into the running process without a human ever seeing it. Rotation that can change the value across every consumer without a coordinated deploy. Auditing that records every access so a forensics team can answer "who saw what, when." A secrets manager is the system that does all four.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The vendor landscape</h2>
                    <p>
                        Cloud-native: AWS Secrets Manager, GCP Secret Manager, Azure Key Vault. These integrate tightly with the cloud's own IAM and are the right default for workloads inside that cloud. Self-hosted: HashiCorp Vault is the dominant choice and supports a much richer set of features (dynamic secrets, PKI as a service, encryption-as-a-service) at the cost of operational complexity. Cross-cloud / developer-friendly: Doppler, Infisical, 1Password Secrets Automation, and Akeyless target teams that want a polished UX and multi-cloud support. For most early-stage SaaS, the cloud-native option is sufficient; the case for a heavier solution grows with the team and the variety of clouds.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where leaks come from</h2>
                    <p>
                        The same three places, every year. Secrets committed to git — usually in a private repo that later becomes public, or in a public repo when someone forgot the file was there. Secrets baked into container images uploaded to a registry, where the layer history preserves them even if the latest Dockerfile does not. Secrets pasted into chat or ticket systems and forgotten about. Tools like GitGuardian, TruffleHog, and GitHub's own secret scanning find tens of thousands of exposed credentials every day. The single highest-leverage habit is to make it impossible for secrets to reach git: pre-commit hooks, CI scanning, and a culture where the answer to "where is the API key" is always "in the secrets manager."
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        Every <Link href="/services/cloud-infrastructure" className="text-sky-400 hover:underline">cloud infrastructure</Link> build we deliver wires up a secrets manager on day one — AWS Secrets Manager or GCP Secret Manager for the workload secrets, with workload identity (IAM roles, service accounts) so that the running process can fetch its secrets without any long-lived credential of its own. Pre-commit hooks and CI checks scan every diff for accidentally-committed secrets.
                    </p>
                    <p>
                        For <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS products</Link> we also rotate the secrets that face external vendors (Stripe, SendGrid, third-party integrations) on a schedule, and on every personnel change. Our <Link href="/services/penetration-testing" className="text-sky-400 hover:underline">pen-testing team</Link> regularly finds environments where one expired credential never got cleaned up; the cleanest fix is automation, not vigilance. Read our piece on <Link href="/blog/stripe-webhook-security-best-practices" className="text-sky-400 hover:underline">Stripe webhook security</Link> for a specific case study, or <Link href="/contact" className="text-sky-400 hover:underline">book a call</Link> if your .env files have been accreting since 2020.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-zero-trust" className="text-sky-400 hover:underline">What is zero trust?</Link></li>
                        <li><Link href="/glossary/what-is-zero-trust-network-access" className="text-sky-400 hover:underline">What is ZTNA?</Link></li>
                        <li><Link href="/glossary/what-is-an-iam" className="text-sky-400 hover:underline">What is an IAM?</Link></li>
                        <li><Link href="/glossary/what-is-oauth2" className="text-sky-400 hover:underline">What is OAuth 2?</Link></li>
                        <li><Link href="/glossary/what-is-zero-knowledge-architecture" className="text-sky-400 hover:underline">What is zero-knowledge architecture?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Secrets sprawl across .env, git, and chat?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We migrate secrets into a proper manager, wire up rotation, and scan the repo for everything that should not still be there.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-secrets" />
                        <Link href="/services/cloud-infrastructure" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Cloud infrastructure
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
