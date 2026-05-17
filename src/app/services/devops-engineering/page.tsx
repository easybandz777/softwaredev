import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { GitBranch, Check, ArrowRight, MapPin } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

const cities: { slug: string; city: string; state: string }[] = [
    { slug: "atlanta-ga", city: "Atlanta", state: "GA" },
    { slug: "macon-ga", city: "Macon", state: "GA" },
    { slug: "augusta-ga", city: "Augusta", state: "GA" },
    { slug: "columbus-ga", city: "Columbus", state: "GA" },
    { slug: "savannah-ga", city: "Savannah", state: "GA" },
    { slug: "miami-fl", city: "Miami", state: "FL" },
    { slug: "austin-tx", city: "Austin", state: "TX" },
    { slug: "dallas-tx", city: "Dallas", state: "TX" },
    { slug: "chicago-il", city: "Chicago", state: "IL" },
    { slug: "seattle-wa", city: "Seattle", state: "WA" },
    { slug: "new-york-ny", city: "New York", state: "NY" },
    { slug: "charlotte-nc", city: "Charlotte", state: "NC" },
    { slug: "nashville-tn", city: "Nashville", state: "TN" },
    { slug: "san-francisco-ca", city: "San Francisco", state: "CA" },
];

export const metadata = pageMetadata({
    title: "DevOps Engineering: CI/CD & Observability | QUANT LAB USA",
    description:
        "DevOps engineering services: CI/CD pipelines, infrastructure-as-code, observability, secrets management, on-call playbooks. Founder-led, USA. Free quote.",
    slug: "services/devops-engineering",
    image: "/og-services.png",
    type: "article",
});

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "DevOps Engineering",
    name: "DevOps Engineering and CI/CD Consulting",
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Founder-led DevOps engineering for engineering teams that are tired of fighting deploys. CI/CD pipelines on GitHub Actions, infrastructure as code with Terraform and Pulumi, containerization with Docker and Kubernetes, observability with Sentry and OpenTelemetry, and the operational runbooks your on-call rotation can actually follow.",
    url: "https://quantlabusa.dev/services/devops-engineering",
    offers: {
        "@type": "Offer",
        priceRange: "$10,000-$80,000",
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
        { "@type": "ListItem", position: 3, name: "DevOps Engineering", item: "https://quantlabusa.dev/services/devops-engineering" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Vercel and Fly.io are fine for us — do we need real DevOps?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Often, no. We frequently advise teams to stay on Vercel or Fly.io and skip the Kubernetes migration. DevOps engineering is what you need when your stack outgrows managed platforms — multi-region traffic, custom hardware, regulated workloads, or per-environment isolation. We tell you straight on the first call.",
            },
        },
        {
            "@type": "Question",
            name: "Can you help us migrate from Heroku, Vercel, or Render to AWS or our own infrastructure?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Migrations off managed platforms onto AWS, GCP, or self-hosted Kubernetes are a common engagement. We containerize, write Terraform, build the CI/CD pipeline, set up observability, and run a side-by-side production parity check before cutover.",
            },
        },
        {
            "@type": "Question",
            name: "How do you handle observability — logs, metrics, tracing?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Sentry for errors, Grafana or DataDog for metrics, OpenTelemetry for distributed tracing, and structured JSON logs shipped to a queryable store. The on-call rotation gets one dashboard and one paging path, not seven SaaS tools fighting for attention.",
            },
        },
        {
            "@type": "Question",
            name: "What about CI/CD — GitHub Actions, GitLab CI, CircleCI?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Default to GitHub Actions because the developer experience is best and the cost model is predictable. GitLab CI when your org runs on GitLab. CircleCI when you have an existing investment. Every pipeline we ship runs tests, security scans, and a staged rollout — never a deploy-on-merge that bypasses verification.",
            },
        },
        {
            "@type": "Question",
            name: "Do we keep the infrastructure after you leave?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Completely. Everything is in Terraform or Pulumi in your repository. The cloud accounts are in your name. The runbooks are documented. There is no managed-service lock-in — you can hire any DevOps engineer to take it over.",
            },
        },
    ],
};

export default function DevOpsEngineeringPage() {
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
                        <li className="text-gray-300">DevOps Engineering</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-amber-500 to-orange-400 mb-6">
                        <GitBranch className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        DevOps Engineering for Teams Tired of 3am Pages
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        CI/CD pipelines, infrastructure as code, observability, and the operational runbooks your on-call rotation can actually follow. Founder-led DevOps consulting — we tell you straight when you do not need it.
                    </p>
                    <ConsultationCTA label="Scope a DevOps Engagement" service="DevOps Engineering" source="services-devops" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When DevOps actually matters</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The DevOps industry has spent ten years convincing engineering teams they need Kubernetes, a service mesh, and a six-person platform team. They mostly do not. Vercel, Fly.io, Render, and Railway handle the workload for the vast majority of small and mid-market software companies, and a junior engineer with a CI/CD template can usually take it from there.
                        </p>
                        <p>
                            Real DevOps engineering matters when your stack genuinely outgrows managed platforms — when you need multi-region traffic with custom routing, regulated workloads that demand specific cloud postures, per-tenant isolation, custom GPU or trading infrastructure, or hybrid cloud and on-prem deployments. It matters when your CI pipeline takes forty minutes and developers stop running it. It matters when your error tracking, logs, metrics, and traces all live in different SaaS tools and the on-call rotation cannot correlate them. That is when we get the call.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build</h2>
                    <ul className="space-y-3">
                        {[
                            "CI/CD pipelines on GitHub Actions, GitLab CI, or CircleCI with staged rollouts and automatic rollback",
                            "Infrastructure as code in Terraform or Pulumi — every cloud resource versioned, reviewable, and reproducible",
                            "Containerization with Docker and orchestration with Kubernetes, ECS, or Fly.io machines as appropriate",
                            "Observability — Sentry for errors, Grafana or DataDog for metrics, OpenTelemetry for tracing, structured logging",
                            "Database operations — Postgres tuning, automated backups, point-in-time recovery, read-replica patterns",
                            "Secret management with Doppler, AWS Secrets Manager, or HashiCorp Vault — no .env files in git",
                            "Multi-environment setup — dev, staging, preview-per-PR, and production with safe promotion paths",
                            "On-call runbooks, incident response playbooks, and the SLO and alerting setup that supports them",
                            "Cloud cost optimization — right-sizing, savings plans, idle resource cleanup, autoscaling policies",
                            "Security posture work — IAM, network segmentation, encryption, audit logging, and compliance prep",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Our methodology</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            One-week audit first. We look at your current stack, talk to the people who get paged, and produce a one-page document that says either "do this DevOps work" or "your existing setup is fine, here are three small fixes." The audit is paid separately at $2,500 so you can decide whether to commit before we build anything.
                        </p>
                        <p>
                            From there, four- to twelve-week engagements depending on scope. We do not staff a dedicated platform team for you — we build the platform, document it, and hand it to your existing engineering team. Optional retainer for ongoing operations and incident support.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Process &amp; timeline</h2>
                    <ul className="space-y-3">
                        {[
                            "Week 1: Audit — stack review, incident retro, on-call interview, one-page recommendation",
                            "Week 2-4: Foundations — CI/CD pipeline, infrastructure as code, secrets, observability baseline",
                            "Week 5-8: Production hardening — multi-environment, staged rollout, alerting, runbooks",
                            "Week 9-12: Optimization — cost work, performance tuning, security review, handoff",
                            "Optional retainer: monthly hours for incident response, on-call advisory, and platform upgrades",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech &amp; tools</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            "GitHub Actions",
                            "Terraform + Pulumi",
                            "Docker + Kubernetes",
                            "AWS + GCP + Fly.io",
                            "Vercel + DigitalOcean",
                            "Sentry + DataDog",
                            "Grafana + Prometheus",
                            "OpenTelemetry",
                            "Doppler + Vault",
                        ].map((tool) => (
                            <div key={tool} className="rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 text-sm text-gray-300">
                                {tool}
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                        Backbone behind every <Link href="/services/cloud-infrastructure" className="text-amber-400 hover:underline">cloud infrastructure</Link> engagement and every <Link href="/services/saas-platform-development" className="text-amber-400 hover:underline">SaaS platform</Link> we ship. Hosted on your cloud accounts, in your name.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Reference engagements</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Every production system we ship comes with the DevOps layer built in. <Link href="/work/multi-strategy-trading-system" className="text-amber-400 hover:underline">A multi-strategy trading system</Link> runs 24/7 with zero unplanned outages because the CI/CD, monitoring, and alerting were treated as first-class deliverables. <Link href="/work/motorcycle-shop-ops-platform" className="text-amber-400 hover:underline">A motorcycle shop ops platform</Link> uses preview-per-PR environments so the client can review every change before merge. <Link href="/work/j5-sales-os" className="text-amber-400 hover:underline">J5 Sales OS</Link> runs on a Terraform-managed footprint with full observability.
                        </p>
                        <p>
                            We dogfood the patterns we ship. The same CI/CD, observability, and incident response setup that runs our internal systems is what we deliver to clients — no experimental tooling paid for by your project.
                        </p>
                        <p>
                            DevOps engineering served from <Link href="/software-development-macon-ga" className="text-amber-400 hover:underline">Macon, GA</Link>, with clients across <Link href="/software-development-atlanta-ga" className="text-amber-400 hover:underline">Atlanta</Link>, <Link href="/software-development-chicago-il" className="text-amber-400 hover:underline">Chicago</Link>, <Link href="/software-development-seattle-wa" className="text-amber-400 hover:underline">Seattle</Link>, and beyond.
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
                            <li>One-week DevOps audit with written recommendation: $2,500 flat</li>
                            <li>CI/CD pipeline + observability baseline for one application: $10k – $22k</li>
                            <li>Full IaC migration onto AWS or GCP with multi-environment + staged rollout: $25k – $55k</li>
                            <li>Kubernetes platform build with multi-tenant workloads and runbooks: $40k – $80k</li>
                            <li>Heroku, Vercel, or Render → AWS migration with parity testing: $18k – $45k</li>
                        </ul>
                        <p>
                            Optional monthly retainer at a flat hourly bank for incident response, on-call advisory, and continued platform work.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What you get</h2>
                    <ul className="space-y-3">
                        {[
                            "All infrastructure in Terraform or Pulumi in your GitHub repository",
                            "CI/CD pipelines documented and running on every merge",
                            "Observability stack with one dashboard and one paging path for on-call",
                            "Runbooks for the top ten operational scenarios your team will hit",
                            "Cost optimization report with right-sizing recommendations",
                            "Security posture review with prioritized remediation list",
                            "Handoff documentation so your engineers own the platform after we leave",
                            "Optional retainer for ongoing operations and incident support",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
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
                                q: "Vercel and Fly.io are fine for us — do we need real DevOps?",
                                a: "Often, no. We frequently advise teams to stay on Vercel or Fly.io and skip the Kubernetes migration. DevOps engineering is what you need when your stack outgrows managed platforms — multi-region traffic, custom hardware, regulated workloads, or per-environment isolation. We tell you straight on the first call.",
                            },
                            {
                                q: "Can you help us migrate from Heroku, Vercel, or Render to AWS or our own infrastructure?",
                                a: "Yes. Migrations off managed platforms onto AWS, GCP, or self-hosted Kubernetes are a common engagement. We containerize, write Terraform, build the CI/CD pipeline, set up observability, and run a side-by-side production parity check before cutover.",
                            },
                            {
                                q: "How do you handle observability — logs, metrics, tracing?",
                                a: "Sentry for errors, Grafana or DataDog for metrics, OpenTelemetry for distributed tracing, and structured JSON logs shipped to a queryable store. The on-call rotation gets one dashboard and one paging path, not seven SaaS tools fighting for attention.",
                            },
                            {
                                q: "What about CI/CD — GitHub Actions, GitLab CI, CircleCI?",
                                a: "Default to GitHub Actions because the developer experience is best and the cost model is predictable. GitLab CI when your org runs on GitLab. CircleCI when you have an existing investment. Every pipeline we ship runs tests, security scans, and a staged rollout — never a deploy-on-merge that bypasses verification.",
                            },
                            {
                                q: "Do we keep the infrastructure after you leave?",
                                a: "Completely. Everything is in Terraform or Pulumi in your repository. The cloud accounts are in your name. The runbooks are documented. There is no managed-service lock-in — you can hire any DevOps engineer to take it over.",
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
                        topics={["stack"]}
                        heading="DevOps & stack reading"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { slug: "cloud-infrastructure", title: "Cloud Infrastructure", desc: "Docker, Nginx, CI/CD, and auto-scaling on DigitalOcean, Fly.io, Vercel." },
                            { slug: "saas-platform-development", title: "SaaS Platform Development", desc: "Full SaaS builds where DevOps is part of the spec." },
                            { slug: "penetration-testing", title: "Penetration Testing", desc: "Red team validation of your hardened DevOps posture." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-amber-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-6 leading-relaxed">
                        Background on our data-ownership philosophy: <Link href="/blog/custom-crm-development-guide" className="text-amber-400 hover:underline">the custom CRM development guide</Link>. To scope DevOps work, <Link href="/contact" className="text-amber-400 hover:underline">contact us</Link> directly.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <MapPin className="w-6 h-6 text-amber-400" />
                        <h2 className="text-2xl md:text-3xl font-bold text-white">DevOps Engineering — Where We Serve</h2>
                    </div>
                    <p className="text-gray-400 leading-relaxed mb-6 max-w-3xl">
                        Georgia-based engineering team, working with clients across 14 US metros. Most DevOps work runs remotely with read-only cloud account access; in-person reviews available in Atlanta and the Southeast.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {cities.map((c) => (
                            <Link
                                key={c.slug}
                                href={`/software-development-${c.slug}`}
                                className="group flex items-center justify-between rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 transition-all hover:border-amber-400/30 hover:bg-[#0d1526]"
                            >
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
                                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                                        {c.city}, {c.state}
                                    </span>
                                </div>
                                <ArrowRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" />
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Stop fighting your deployments.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz directly at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or book a 20-minute scope call. We will tell you whether you need a real DevOps engagement or three small fixes you can ship next week.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" service="DevOps Engineering" source="services-devops" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
