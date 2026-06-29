import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is a VPC (Virtual Private Cloud)? Guide | QUANT LAB USA",
    description:
        "A VPC is an isolated virtual network inside a public cloud. Plain-English definition, subnets, security groups, NAT gateways, peering. By QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-a-vpc" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Virtual Private Cloud",
    description:
        "A Virtual Private Cloud (VPC) is a logically isolated section of a public cloud where you define your own private network — IP address ranges, subnets, routing, and firewall rules — giving cloud resources the security boundary of a private network on shared infrastructure.",
    url: "https://quantlabusa.dev/glossary/what-is-a-vpc",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "Virtual Private Cloud", item: "https://quantlabusa.dev/glossary/what-is-a-vpc" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is a VPC in one sentence?", acceptedAnswer: { "@type": "Answer", text: "A Virtual Private Cloud is a logically isolated network you define inside a public cloud, with your own IP ranges, subnets, routing, and firewall rules, so your cloud resources behave like they live on a private network." } },
        { "@type": "Question", name: "What is the difference between a public and private subnet?", acceptedAnswer: { "@type": "Answer", text: "A public subnet has a route to an internet gateway, so its resources can be reached from or reach the internet directly. A private subnet has no such route; its resources reach the internet only through a NAT gateway and cannot be reached inbound from it." } },
        { "@type": "Question", name: "What is the difference between a security group and a NACL?", acceptedAnswer: { "@type": "Answer", text: "A security group is a stateful firewall attached to individual resources — return traffic is allowed automatically. A network ACL is a stateless firewall at the subnet level that evaluates each direction independently. They are complementary layers." } },
        { "@type": "Question", name: "What is VPC peering?", acceptedAnswer: { "@type": "Answer", text: "VPC peering is a private network connection between two VPCs so resources can communicate using private IPs without traversing the public internet. For many VPCs, a transit gateway is used instead to avoid a tangle of point-to-point peerings." } },
        { "@type": "Question", name: "Do all cloud providers have VPCs?", acceptedAnswer: { "@type": "Answer", text: "Yes, though names vary. AWS and Google Cloud call it a VPC, Azure calls it a Virtual Network (VNet). The concept — a private, isolated, software-defined network inside the provider's shared infrastructure — is the same across all of them." } },
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
                        <li className="text-gray-300">Virtual Private Cloud</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Infrastructure</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is a VPC (Virtual Private Cloud)?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        A Virtual Private Cloud is a logically isolated network you carve out inside a public cloud, complete with your own IP address ranges, subnets, routing tables, and firewall rules — so that even though your servers run on hardware shared with thousands of other tenants, they behave as if they sit on a private network you control.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why it exists</h2>
                    <p>
                        Early public cloud put every instance on a flat, shared network,
                        which made enterprises nervous: their database could, in principle,
                        be one misconfiguration away from the open internet. The VPC,
                        introduced by AWS in 2009 and now standard across every major
                        provider, solved this by giving each customer a private,
                        software-defined network. Inside it you decide what is reachable
                        from the internet and what is not, how traffic flows, and which
                        resources can talk to which. It is the foundational boundary almost
                        everything else in a cloud architecture sits within.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Subnets and availability zones</h2>
                    <p>
                        A VPC is given a block of private IP addresses — say 10.0.0.0/16 —
                        which you divide into subnets, smaller ranges each pinned to a
                        single availability zone (a distinct data center within a region).
                        The crucial distinction is public versus private. A public subnet
                        has a route to an internet gateway, so a load balancer or bastion
                        host placed there can be reached from the internet. A private
                        subnet has no such route, which is where databases and application
                        servers belong — they should never be directly reachable from
                        outside. Spreading subnets across multiple zones is also how you
                        survive the loss of a single data center.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Reaching out without being reachable: NAT</h2>
                    <p>
                        Resources in a private subnet often still need outbound internet
                        access — to download updates or call an external API — without
                        being exposed to inbound connections. A NAT (Network Address
                        Translation) gateway provides exactly that asymmetry: it sits in a
                        public subnet and lets private resources initiate outbound traffic
                        while blocking anything trying to connect inbound. This one-way
                        valve is a cornerstone of a secure VPC layout, and it is a frequent
                        source of surprise cloud bills, since NAT gateways charge for every
                        gigabyte that passes through them.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Two layers of firewall</h2>
                    <p>
                        VPCs give you two complementary firewalls. Security groups attach
                        to individual resources and are stateful — if you allow an inbound
                        request, the response is automatically allowed back out — which
                        makes them the everyday tool for controlling access to a server or
                        database. Network ACLs operate at the subnet level and are
                        stateless, evaluating inbound and outbound rules independently;
                        they act as a coarse guardrail around an entire subnet. Used
                        together they implement defense in depth, and tightening them is a
                        natural fit with{" "}
                        <Link href="/glossary/what-is-zero-trust" className="text-sky-400 hover:underline">zero trust</Link>{" "}
                        thinking — never assume something is safe just because it is "inside"
                        the network.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Connecting VPCs together</h2>
                    <p>
                        Real organizations end up with many VPCs — per environment, per
                        team, per acquisition — and need them to talk privately. VPC
                        peering creates a direct private link between two of them. But
                        peering does not scale gracefully: ten VPCs that all need to reach
                        each other would require a tangle of forty-five separate
                        peerings. A transit gateway solves this by acting as a central hub
                        that every VPC connects to once. For linking a cloud VPC back to an
                        on-premises data center, a VPN tunnel or a dedicated private circuit
                        (AWS Direct Connect, Azure ExpressRoute) does the job.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        A well-designed VPC is the quiet foundation of every system we ship
                        under{" "}
                        <Link href="/services/cloud-infrastructure" className="text-sky-400 hover:underline">cloud infrastructure</Link>.
                        We put databases and application servers in private subnets, expose
                        only load balancers to the internet, and define the whole network
                        as{" "}
                        <Link href="/glossary/what-is-terraform" className="text-sky-400 hover:underline">Terraform</Link>{" "}
                        so the layout is reviewable and reproducible. This matters for
                        security as much as architecture: in our{" "}
                        <Link href="/services/penetration-testing" className="text-sky-400 hover:underline">penetration tests</Link>,
                        a flat VPC with databases on public subnets and over-broad security
                        groups is one of the most common — and most exploitable — findings.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        topics={["stack","pentest"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-infrastructure-as-code" className="text-sky-400 hover:underline">What is infrastructure as code?</Link></li>
                        <li><Link href="/glossary/what-is-terraform" className="text-sky-400 hover:underline">What is Terraform?</Link></li>
                        <li><Link href="/glossary/what-is-observability" className="text-sky-400 hover:underline">What is observability?</Link></li>
                        <li><Link href="/glossary/what-is-redis" className="text-sky-400 hover:underline">What is Redis?</Link></li>
                        <li><Link href="/glossary/what-is-database-sharding" className="text-sky-400 hover:underline">What is database sharding?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Designing a secure cloud network?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We design VPC layouts that keep databases private, expose only what
                        must be exposed, and live in version control. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-vpc" />
                        <Link href="/services/cloud-infrastructure" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Cloud infrastructure
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
