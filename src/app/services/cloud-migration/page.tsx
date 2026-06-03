import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { CloudCog, Check, ArrowRight, MapPin } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Cloud Migration & Cost Optimization | QUANT LAB USA",
    description:
        "Cloud migration done with parity testing and a clear rollback — plus cost optimization that cuts the bill. Founder-led, fixed-quote, USA. Call (770) 652-1282 for a free scope call.",
    slug: "services/cloud-migration",
    image: "/og-services.png",
    type: "article",
});

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Cloud Migration",
    name: "Cloud Migration and Cost Optimization",
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Founder-led cloud migration for teams moving onto, between, or off the major clouds. We assess the workload first, migrate with infrastructure as code and parity testing, cut over only when the new environment matches the old, and right-size the result so the bill drops. Cloud accounts and Terraform stay in your name.",
    url: "https://quantlabusa.dev/services/cloud-migration",
    offers: {
        "@type": "Offer",
        priceRange: "$10,000-$90,000",
        priceCurrency: "USD",
        description: "Fixed-fee scope per engagement",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://quantlabusa.dev/services" },
        { "@type": "ListItem", position: 3, name: "Cloud Migration", item: "https://quantlabusa.dev/services/cloud-migration" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Should we migrate to the cloud at all, or are we fine where we are?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Sometimes you are fine where you are, and we will tell you so on the first call. A migration is worth it when your current setup blocks scaling, costs more than it should, fails compliance requirements, or runs on infrastructure you can no longer maintain. If none of that applies, we will not sell you a migration you do not need.",
            },
        },
        {
            "@type": "Question",
            name: "Will the migration cause downtime?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We design for little to none. The standard approach is to stand up the new environment in parallel, run it against real traffic to confirm parity, and cut over during a low-traffic window with DNS and traffic routing ready to roll back instantly. For most applications the switch is invisible to users.",
            },
        },
        {
            "@type": "Question",
            name: "Can you help us cut our cloud bill, not just move us?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, and it is often the main reason teams call. Cloud bills balloon from over-provisioned instances, idle resources, the wrong storage tiers, and unused reserved capacity. We right-size compute, clean up waste, apply savings plans, and tune autoscaling — frequently paying for the engagement out of the savings in the first year.",
            },
        },
        {
            "@type": "Question",
            name: "Do you handle migrations off a cloud, not just onto one?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Moving off an over-priced managed platform onto leaner infrastructure, repatriating workloads to cut cost, or moving between clouds for compliance or pricing reasons are all common. The same parity-tested, infrastructure-as-code method applies in every direction.",
            },
        },
        {
            "@type": "Question",
            name: "Who owns the cloud accounts and infrastructure afterward?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "You do. The cloud accounts are in your name, all infrastructure is defined as code in Terraform or Pulumi in your GitHub repository, and the runbooks are documented. There is no proprietary management layer and no lock-in to us — any cloud engineer can take it over.",
            },
        },
        {
            "@type": "Question",
            name: "How long does a cloud migration take?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A single application with a database typically migrates in 4 to 8 weeks including parity testing. Larger estates with multiple services, data stores, and integrations run 8 to 16 weeks, executed in waves so the riskiest pieces move with the most care.",
            },
        },
    ],
};

export default function CloudMigrationPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="container mx-auto px-6 max-w-4xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/services" className="hover:text-sky-400 transition-colors">Services</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">Cloud Migration</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-sky-400 mb-6">
                        <CloudCog className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Cloud Migration Without the Downtime or the Surprise Bill
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Move onto, between, or off the cloud with infrastructure as code, parity testing, and an instant rollback — then right-size the result so the monthly bill actually drops. Founder-led, and honest about when you do not need it.
                    </p>
                    <ConsultationCTA label="Scope a Cloud Migration" service="Cloud Migration" source="services-cloud-migration" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When a migration is worth it</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Cloud migrations get sold as transformation and delivered as a mess: a lift-and-shift that copies every bad habit into a more expensive environment, a cutover that takes the application down for a weekend, and a bill that somehow goes up instead of down. The reason is almost always that nobody assessed the workload first. They moved everything as-is, hoped it would be fine, and discovered the over-provisioned instances and idle resources only when the invoice arrived.
                        </p>
                        <p>
                            We treat migration as an engineering problem with a clear answer. First we figure out whether you should migrate at all — and tell you honestly if the answer is no. When it is yes, we model the target environment as code, move workloads with parity testing so the new setup provably matches the old, cut over with a rollback ready, and right-size everything so the result is cheaper and cleaner than where you started. A migration should leave you with a lower bill and a better-run system, not just a new logo on the invoice.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we do</h2>
                    <ul className="space-y-3">
                        {[
                            "Assess the current workload and give an honest migrate-or-stay recommendation with a cost model",
                            "Migrations onto AWS, GCP, or Azure from on-prem, a data center, or a managed platform",
                            "Migrations off over-priced managed platforms onto leaner infrastructure to cut cost",
                            "Migrations between clouds for pricing, compliance, or consolidation reasons",
                            "Infrastructure as code in Terraform or Pulumi so the new environment is versioned and reproducible",
                            "Parity testing — new environment against old on real traffic — before any cutover",
                            "Near-zero-downtime cutover with DNS and traffic routing set up for instant rollback",
                            "Cost optimization — right-sizing, idle cleanup, savings plans, storage tiers, and autoscaling",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Our methodology</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            A one-week assessment comes first. We inventory the current environment, model what the target would cost, identify the risky pieces, and produce a one-page migration plan with a phased estimate. The assessment is billed separately at $2,500 so you can decide before committing — and it includes the honest call on whether to migrate at all.
                        </p>
                        <p>
                            From there we migrate in waves, starting with low-risk workloads to prove the pattern before moving the critical ones. Every wave is parity-tested and reversible. We hand off cloud accounts in your name, the full Terraform or Pulumi codebase, and operational runbooks. Optional retainer for ongoing cost optimization and platform work.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Process &amp; timeline</h2>
                    <ul className="space-y-3">
                        {[
                            "Week 1: Assessment — workload inventory, target cost model, risk register, phased migration plan",
                            "Week 2-3: Foundation — target environment as code, networking, security, and CI/CD in place",
                            "Week 4-6: Migration waves — low-risk workloads first, each parity-tested against the old environment",
                            "Week 7-10: Cutover & optimization — critical workloads moved, then right-sizing and waste cleanup",
                            "Optional retainer: continued cost optimization, scaling work, and platform maintenance",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech &amp; tools</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            "AWS + GCP + Azure",
                            "Terraform + Pulumi",
                            "Docker + Kubernetes",
                            "Database replication",
                            "Change-data-capture",
                            "DNS + traffic routing",
                            "Cost Explorer / FinOps",
                            "Parity test harness",
                            "CI/CD pipelines",
                        ].map((tool) => (
                            <div key={tool} className="rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 text-sm text-gray-300">
                                {tool}
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                        Closely tied to our <Link href="/services/cloud-infrastructure" className="text-cyan-400 hover:underline">cloud infrastructure</Link> and <Link href="/services/devops-engineering" className="text-cyan-400 hover:underline">DevOps engineering</Link> work, and a common companion to <Link href="/services/legacy-system-modernization" className="text-cyan-400 hover:underline">legacy modernization</Link>. New to the tooling? See <Link href="/glossary/what-is-docker" className="text-cyan-400 hover:underline">what is Docker</Link>. Cloud accounts stay in your name.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we de-risk it</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The dangerous moments in a migration are the data move and the cutover. We de-risk the data move with replication and change-data-capture so the new database stays in sync with the old one right up to the switch, plus reconciliation checks that confirm nothing was lost. We de-risk the cutover with parity testing and traffic routing that lets us shift a sliver of users to the new environment, watch it, and widen the rollout — or roll all the way back in seconds if something looks wrong.
                        </p>
                        <p>
                            We dogfood this. Our own systems run on infrastructure-as-code on the cloud, deployed through the same CI/CD and rollback patterns we use for client migrations. We move your workloads the way we would move our own — assuming something will go wrong and making sure it is recoverable when it does.
                        </p>
                        <p>
                            Founder-led from assessment through cutover, delivered remotely to clients across the United States from our base in Macon, Georgia.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pricing</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Fixed-fee per scope. Typical ranges:
                        </p>
                        <ul className="space-y-2 list-disc list-inside">
                            <li>One-week assessment with a target cost model and migration plan: $2,500 flat</li>
                            <li>Single application plus database migrated with parity testing: $10k – $25k</li>
                            <li>Multi-service estate migrated in waves with infrastructure as code: $30k – $65k</li>
                            <li>Large or regulated migration with strict parity and compliance needs: $55k – $90k</li>
                            <li>Standalone cost optimization sprint on your existing cloud: $8k – $20k</li>
                        </ul>
                        <p>
                            Cost optimization frequently pays for itself within the first year. Optional retainer for ongoing FinOps and platform work.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What you get</h2>
                    <ul className="space-y-3">
                        {[
                            "Cloud accounts in your name, with no proprietary management layer",
                            "All infrastructure as code in Terraform or Pulumi in your GitHub repository",
                            "A parity-tested, reversible cutover for every workload",
                            "A right-sized environment with a measurably lower bill",
                            "Reconciled data migration with verification checks",
                            "A cost optimization report with the savings achieved and recommended",
                            "Runbooks so your team can operate the new platform",
                            "Optional retainer for ongoing cost and scaling work",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "Should we migrate to the cloud at all, or are we fine where we are?",
                                a: "Sometimes you are fine where you are, and we will tell you so on the first call. A migration is worth it when your current setup blocks scaling, costs more than it should, fails compliance requirements, or runs on infrastructure you can no longer maintain. If none of that applies, we will not sell you a migration you do not need.",
                            },
                            {
                                q: "Will the migration cause downtime?",
                                a: "We design for little to none. The standard approach is to stand up the new environment in parallel, run it against real traffic to confirm parity, and cut over during a low-traffic window with DNS and traffic routing ready to roll back instantly. For most applications the switch is invisible to users.",
                            },
                            {
                                q: "Can you help us cut our cloud bill, not just move us?",
                                a: "Yes, and it is often the main reason teams call. Cloud bills balloon from over-provisioned instances, idle resources, the wrong storage tiers, and unused reserved capacity. We right-size compute, clean up waste, apply savings plans, and tune autoscaling — frequently paying for the engagement out of the savings in the first year.",
                            },
                            {
                                q: "Do you handle migrations off a cloud, not just onto one?",
                                a: "Yes. Moving off an over-priced managed platform onto leaner infrastructure, repatriating workloads to cut cost, or moving between clouds for compliance or pricing reasons are all common. The same parity-tested, infrastructure-as-code method applies in every direction.",
                            },
                            {
                                q: "Who owns the cloud accounts and infrastructure afterward?",
                                a: "You do. The cloud accounts are in your name, all infrastructure is defined as code in Terraform or Pulumi in your GitHub repository, and the runbooks are documented. There is no proprietary management layer and no lock-in to us — any cloud engineer can take it over.",
                            },
                            {
                                q: "How long does a cloud migration take?",
                                a: "A single application with a database typically migrates in 4 to 8 weeks including parity testing. Larger estates with multiple services, data stores, and integrations run 8 to 16 weeks, executed in waves so the riskiest pieces move with the most care.",
                            },
                        ].map((item) => (
                            <div key={item.q} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["stack", "saas", "compliance"]}
                        heading="Cloud & infrastructure reading"
                        pinned={["building-multi-tenant-saas-postgres-rls", "2026-state-of-custom-software-development"]}
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { slug: "cloud-infrastructure", title: "Cloud Infrastructure", desc: "Design and run the environment you migrate into, end to end." },
                            { slug: "devops-engineering", title: "DevOps Engineering", desc: "CI/CD, observability, and runbooks for the migrated platform." },
                            { slug: "legacy-system-modernization", title: "Legacy System Modernization", desc: "Replatform aging applications as part of the move." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-cyan-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-6 leading-relaxed">
                        Migrations for teams in <Link href="/industries/saas" className="text-cyan-400 hover:underline">SaaS</Link>, <Link href="/industries/fintech" className="text-cyan-400 hover:underline">fintech</Link>, and <Link href="/industries/healthcare" className="text-cyan-400 hover:underline">healthcare</Link>. To scope a migration, <Link href="/contact" className="text-cyan-400 hover:underline">contact us</Link> or review <Link href="/pricing" className="text-cyan-400 hover:underline">pricing</Link>.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <MapPin className="w-6 h-6 text-cyan-400" />
                        <h2 className="text-2xl md:text-3xl font-bold text-white">Cloud Migration — Where We Serve</h2>
                    </div>
                    <p className="text-gray-400 leading-relaxed mb-6 max-w-3xl">
                        Georgia-based engineering team serving clients nationwide. Migrations run remotely with scoped access to your current and target environments; in-person planning sessions are available in Atlanta and the Southeast.
                    </p>
                    <p className="text-gray-400 leading-relaxed max-w-3xl">
                        Founder-led from assessment through cutover. Browse the full <Link href="/services" className="text-cyan-400 hover:underline">services lineup</Link> or read about our <Link href="/services/api-development" className="text-cyan-400 hover:underline">API development</Link> work that often bridges systems mid-migration.
                    </p>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            A lower bill and a better-run system.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz directly at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or book a 20-minute scope call. We will model the target cost and tell you straight whether a migration is worth it.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" service="Cloud Migration" source="services-cloud-migration" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
