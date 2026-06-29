import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is Terraform? Plain-English Guide (2026) | QUANT LAB USA",
    description:
        "Terraform is an infrastructure-as-code tool that provisions cloud resources from declarative files. Plain-English definition, state, providers, OpenTofu. By QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-terraform" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Terraform",
    description:
        "Terraform is an open-source infrastructure-as-code tool from HashiCorp that lets engineers define cloud and on-premises resources in a declarative language and provision them across many providers through a single, plan-then-apply workflow.",
    url: "https://quantlabusa.dev/glossary/what-is-terraform",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "Terraform", item: "https://quantlabusa.dev/glossary/what-is-terraform" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is Terraform in one sentence?", acceptedAnswer: { "@type": "Answer", text: "Terraform is an open-source tool that lets you describe cloud infrastructure in declarative configuration files and then create, change, or destroy it across many providers with a predictable plan-then-apply workflow." } },
        { "@type": "Question", name: "What is Terraform state?", acceptedAnswer: { "@type": "Answer", text: "State is a file Terraform keeps that maps your configuration to the real resources it created. It is how Terraform knows what already exists so it can compute the smallest change needed. Teams store it remotely with locking." } },
        { "@type": "Question", name: "What is the difference between Terraform and Ansible?", acceptedAnswer: { "@type": "Answer", text: "Terraform provisions infrastructure — it creates the servers, networks, and databases. Ansible is primarily configuration management — it installs and configures software on machines that already exist. Many teams use both together." } },
        { "@type": "Question", name: "What is OpenTofu?", acceptedAnswer: { "@type": "Answer", text: "OpenTofu is an open-source fork of Terraform created after HashiCorp changed Terraform's license to the Business Source License in 2023. It is governed by the Linux Foundation and stays compatible with Terraform configurations." } },
        { "@type": "Question", name: "Is Terraform free?", acceptedAnswer: { "@type": "Answer", text: "The Terraform CLI is free to use under the Business Source License for most cases, and the OpenTofu fork is fully open source. HashiCorp also sells a paid platform, HCP Terraform, for teams that want managed state, runs, and policy enforcement." } },
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
                        <li className="text-gray-300">Terraform</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Infrastructure</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is Terraform?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        Terraform is an open-source infrastructure-as-code tool from HashiCorp that lets you describe cloud resources — networks, databases, servers, DNS records — in declarative configuration files, then provision them across hundreds of providers with a workflow that always shows you a plan of what will change before it changes anything.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where it came from</h2>
                    <p>
                        HashiCorp released Terraform in 2014 to solve a specific problem:
                        teams were managing cloud infrastructure through a mix of console
                        clicks and brittle shell scripts, with no reliable way to know
                        what existed or to rebuild it. Terraform introduced a declarative
                        language — HCL, the HashiCorp Configuration Language — where you
                        describe the end state you want and the tool figures out how to
                        get there. It quickly became the de facto standard for
                        cloud-agnostic provisioning, the most common concrete answer to
                        the broader idea of{" "}
                        <Link href="/glossary/what-is-infrastructure-as-code" className="text-sky-400 hover:underline">infrastructure as code</Link>.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Providers and the plugin model</h2>
                    <p>
                        Terraform itself does not know what an S3 bucket or a Cloudflare
                        DNS record is. That knowledge lives in providers — plugins that
                        translate Terraform's generic resource model into the specific API
                        calls of AWS, Azure, Google Cloud, Kubernetes, GitHub, Datadog,
                        and thousands of others. This plugin architecture is why Terraform
                        is "cloud-agnostic": the same workflow manages a multi-cloud
                        estate, and a single configuration can stitch together resources
                        from several providers at once — a database in AWS, monitoring in
                        Datadog, DNS in Cloudflare.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">State — the part that surprises people</h2>
                    <p>
                        Terraform keeps a state file that maps your configuration to the
                        real resources it created and their current attributes. This is
                        how it knows that the database in your code is the database with a
                        specific ID in the cloud, so it can compute the smallest change
                        instead of recreating everything. State is also the most common
                        source of pain: stored locally it cannot be shared, and two people
                        applying at once can corrupt it. The standard fix is a remote
                        backend — S3 with DynamoDB locking, Terraform Cloud, or
                        equivalents — so state is centralized and locked during runs. State
                        can also contain secrets, so it must be treated as sensitive.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The plan-then-apply workflow</h2>
                    <p>
                        The core loop is three commands. <code>terraform init</code>{" "}
                        downloads providers and configures the backend.{" "}
                        <code>terraform plan</code> compares your configuration to state
                        and shows a precise diff: what will be created, changed, or
                        destroyed. <code>terraform apply</code> executes that plan after
                        you approve it. The plan step is the reason teams trust Terraform
                        in production — you see exactly what is about to happen, you can
                        require it as a review artifact in a pull request, and a
                        destructive change is visible before it runs rather than after.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The license change and OpenTofu</h2>
                    <p>
                        In 2023 HashiCorp moved Terraform from an open-source license to
                        the Business Source License, which restricts certain competing
                        uses. A coalition of users and vendors responded by forking the
                        last open-source version into OpenTofu, now governed by the Linux
                        Foundation. OpenTofu aims to stay drop-in compatible with Terraform
                        configurations, so teams that need a fully open-source tool have a
                        path. For most organizations the practical impact is small, but
                        it is worth knowing both exist when you choose a standard.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        Terraform (or OpenTofu) is our usual tool for provisioning the
                        environments we build under{" "}
                        <Link href="/services/cloud-infrastructure" className="text-sky-400 hover:underline">cloud infrastructure</Link>{" "}
                        and{" "}
                        <Link href="/services/cloud-migration" className="text-sky-400 hover:underline">cloud migration</Link>.
                        We set up remote state with locking from day one, gate every
                        change behind a reviewed plan, and structure modules so a client
                        can stand up a new region or a fresh environment without us. It
                        also pays off on the security side: when a{" "}
                        <Link href="/glossary/what-is-a-vpc" className="text-sky-400 hover:underline">VPC</Link>,
                        a security group, and an IAM role are all declared in code, a
                        misconfiguration shows up in a diff and a review rather than
                        surfacing later in a penetration test.
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
                        <li><Link href="/glossary/what-is-infrastructure-as-code" className="text-sky-400 hover:underline">What is infrastructure as code?</Link></li>
                        <li><Link href="/glossary/what-is-a-vpc" className="text-sky-400 hover:underline">What is a VPC?</Link></li>
                        <li><Link href="/glossary/what-is-observability" className="text-sky-400 hover:underline">What is observability?</Link></li>
                        <li><Link href="/glossary/what-is-chaos-engineering" className="text-sky-400 hover:underline">What is chaos engineering?</Link></li>
                        <li><Link href="/glossary/what-is-redis" className="text-sky-400 hover:underline">What is Redis?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Standing up cloud infrastructure?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We provision cloud environments with Terraform so you own
                        reproducible, reviewable infrastructure from day one. Book a
                        30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-terraform" />
                        <Link href="/services/cloud-infrastructure" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Cloud infrastructure
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
