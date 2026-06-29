import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is Infrastructure as Code (IaC)? Guide (2026) | QUANT LAB USA",
    description:
        "Infrastructure as code provisions servers, networks, and cloud resources from version-controlled files. Plain-English definition, tools, benefits. By QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-infrastructure-as-code" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Infrastructure as Code",
    description:
        "Infrastructure as Code (IaC) is the practice of defining and provisioning computing infrastructure — servers, networks, load balancers, databases — through machine-readable configuration files kept in version control, rather than through manual console clicks.",
    url: "https://quantlabusa.dev/glossary/what-is-infrastructure-as-code",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "Infrastructure as Code", item: "https://quantlabusa.dev/glossary/what-is-infrastructure-as-code" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is infrastructure as code in one sentence?", acceptedAnswer: { "@type": "Answer", text: "Infrastructure as code is the practice of defining your servers, networks, and cloud resources in version-controlled text files so they can be created, changed, and destroyed automatically instead of by hand." } },
        { "@type": "Question", name: "What is the difference between declarative and imperative IaC?", acceptedAnswer: { "@type": "Answer", text: "Declarative tools (Terraform, CloudFormation) describe the desired end state and let the tool figure out the steps. Imperative tools (scripts, Ansible playbooks) spell out the steps in order. Most modern IaC is declarative." } },
        { "@type": "Question", name: "What tools are used for IaC?", acceptedAnswer: { "@type": "Answer", text: "Terraform and OpenTofu for multi-cloud provisioning, AWS CloudFormation and Azure Bicep for single-cloud, Pulumi for code-based definitions, and Ansible, Chef, or Puppet for configuration management." } },
        { "@type": "Question", name: "What is configuration drift?", acceptedAnswer: { "@type": "Answer", text: "Configuration drift is when the real infrastructure no longer matches what the code says — usually because someone made a manual change in the console. IaC tools detect drift by comparing actual state to the declared state." } },
        { "@type": "Question", name: "Is infrastructure as code only for the cloud?", acceptedAnswer: { "@type": "Answer", text: "No. IaC is most associated with public cloud, but the same tools provision on-premises VMware, bare-metal, Kubernetes clusters, DNS records, and SaaS configuration. Anything with an API can usually be managed as code." } },
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
                        <li className="text-gray-300">Infrastructure as Code</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Infrastructure</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is Infrastructure as Code?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        Infrastructure as Code (IaC) is the practice of defining your servers, networks, databases, and every other cloud resource in version-controlled text files, then letting a tool create, change, and tear them down automatically — so spinning up an entire environment becomes a reviewable, repeatable command instead of an afternoon of clicking through a console.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The shift it replaced</h2>
                    <p>
                        For most of computing history, infrastructure was provisioned by
                        hand: an engineer logged into a console or SSH session, clicked
                        through wizards, edited config files on individual machines, and
                        wrote a runbook documenting what they did. The result was
                        environments that no two people could rebuild identically, servers
                        nobody dared touch, and "it works on staging but not production"
                        as a way of life. IaC replaced the runbook with the actual
                        executable definition — the documentation and the implementation
                        became the same file.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Declarative vs. imperative</h2>
                    <p>
                        There are two broad styles. Imperative IaC spells out the steps:
                        create this VM, then attach this disk, then open this port.
                        Declarative IaC describes the desired end state — "I want three
                        web servers behind a load balancer" — and the tool computes the
                        difference between what exists and what you asked for, then makes
                        only the changes needed to close the gap. Most modern tooling
                        (Terraform, CloudFormation, Bicep) is declarative because it is
                        idempotent: running it twice produces the same result, and it can
                        be safely re-applied to repair drift.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Provisioning vs. configuration management</h2>
                    <p>
                        It helps to separate two jobs that both fall under "IaC."
                        Provisioning tools like{" "}
                        <Link href="/glossary/what-is-terraform" className="text-sky-400 hover:underline">Terraform</Link>{" "}
                        create the resources themselves — the network, the database, the
                        compute instances. Configuration management tools like Ansible,
                        Chef, and Puppet take a server that already exists and bring its
                        contents into a known state: install packages, write files, start
                        services. Many teams use both, with provisioning handling the
                        cloud-level shape and configuration management handling what runs
                        inside each box. On Kubernetes, much of the configuration layer
                        moves into manifests and Helm charts instead.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why it matters</h2>
                    <p>
                        The payoff is not just speed. Because infrastructure lives in
                        version control, every change is reviewed in a pull request,
                        attributed to an author, and reversible. Disaster recovery becomes
                        re-running the code in a new region. Compliance auditors can read
                        exactly how a system is built. New environments — a per-developer
                        sandbox, an ephemeral preview for a feature branch — become cheap
                        because they are one command. And configuration drift, the slow
                        decay where reality diverges from documentation, gets caught by a
                        plan that shows the diff before anything changes.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        We treat infrastructure as code as the default, not an upgrade.
                        Every environment we build under{" "}
                        <Link href="/services/cloud-infrastructure" className="text-sky-400 hover:underline">cloud infrastructure</Link>{" "}
                        and{" "}
                        <Link href="/services/devops-engineering" className="text-sky-400 hover:underline">DevOps engineering</Link>{" "}
                        ships as version-controlled definitions so the client owns a
                        reproducible system rather than a snowflake nobody can rebuild.
                        It also matters for security: when infrastructure is declared in
                        code, an over-permissive IAM policy or a publicly exposed bucket
                        shows up in a diff and a review, not six months later in an
                        incident. Pairing IaC with{" "}
                        <Link href="/glossary/what-is-observability" className="text-sky-400 hover:underline">observability</Link>{" "}
                        gives you a system you can both rebuild and explain.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">A pragmatic adoption path</h2>
                    <p>
                        You do not have to codify everything at once. A practical
                        sequence: start by importing the resources you are most afraid to
                        touch so they are at least captured; put the code in a repository
                        with required reviews; wire a CI pipeline that runs a plan on every
                        pull request so reviewers see the exact diff; store state remotely
                        with locking so two engineers cannot apply at the same time; and
                        only then expand to new environments. Trying to convert a large
                        legacy estate in one sprint is how teams end up abandoning IaC
                        halfway and living with a worse hybrid than before.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        topics={["stack","build-vs-buy"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-terraform" className="text-sky-400 hover:underline">What is Terraform?</Link></li>
                        <li><Link href="/glossary/what-is-observability" className="text-sky-400 hover:underline">What is observability?</Link></li>
                        <li><Link href="/glossary/what-is-a-vpc" className="text-sky-400 hover:underline">What is a VPC?</Link></li>
                        <li><Link href="/glossary/what-is-chaos-engineering" className="text-sky-400 hover:underline">What is chaos engineering?</Link></li>
                        <li><Link href="/glossary/what-is-caching" className="text-sky-400 hover:underline">What is caching?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Want reproducible infrastructure?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We build cloud environments as version-controlled code so you own a
                        system you can rebuild, review, and audit. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-iac" />
                        <Link href="/services/devops-engineering" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            DevOps engineering
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
