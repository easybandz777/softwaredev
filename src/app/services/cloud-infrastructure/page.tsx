import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Lock, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "DevOps & CI/CD Consulting — Zero Outages | QuantLab",
    description:
        "Docker, Nginx, CI/CD, auto-scaling, and Sentry monitoring on DigitalOcean, Fly.io, and Vercel. Zero unplanned outages across active deployments. Free scoping call.",
    alternates: { canonical: "https://quantlabusa.dev/services/cloud-infrastructure" },
    openGraph: {
        title: "Deploy, Monitor, Scale — Without the 3am Pages",
        description:
            "Docker, Nginx, CI/CD, auto-scaling, and monitoring across DigitalOcean, Fly.io, and Vercel. Zero unplanned outages in production.",
        url: "https://quantlabusa.dev/services/cloud-infrastructure",
        type: "article",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Cloud Infrastructure and DevOps Consulting",
    name: "Cloud Infrastructure & DevOps",
    provider: {
        "@type": "Organization",
        name: "QuantLab Software Solutions",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Cloud infrastructure setup, CI/CD pipelines, Docker containerization, Nginx configuration, auto-scaling, and Sentry-based monitoring on DigitalOcean, Fly.io, and Vercel.",
    url: "https://quantlabusa.dev/services/cloud-infrastructure",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Do you do AWS or just Vercel and DigitalOcean?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We work with AWS on select projects — mostly S3, CloudFront, SES, and RDS where those specific services are needed. For most small-to-mid apps, AWS is overkill. DigitalOcean, Fly.io, and Vercel give you 80% of the value for 20% of the operational complexity. We match tools to the size of the problem.",
            },
        },
        {
            "@type": "Question",
            name: "Can you take over existing infrastructure?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Common engagement: a team inherited an infra stack that's held together with SSH keys and one person's memory. We audit what's running, document it, codify the pieces that matter (Docker, Nginx config, CI/CD pipelines), and hand you back something a new engineer can operate without six weeks of ramp.",
            },
        },
        {
            "@type": "Question",
            name: "What does 'zero unplanned outages' mean?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Across our active client deployments, we have not had an unplanned production outage. Planned maintenance windows are a different thing. We can't promise zero outages forever — anyone who does is lying — but the current track record is what it is because we lean hard on boring, well-tested infrastructure over exotic setups.",
            },
        },
        {
            "@type": "Question",
            name: "Do you set up monitoring and alerting?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Sentry for error monitoring by default. UptimeRobot or Better Stack for external uptime checks. Log aggregation through the platform's native tools (Vercel Logs, Fly.io, DO Monitoring) or Papertrail when something more serious is needed. Alerts go to Slack and email, tuned so you're not drowning in false positives.",
            },
        },
        {
            "@type": "Question",
            name: "How do you handle backups and disaster recovery?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Daily automated database backups with periodic restore tests — an untested backup is not a backup. Off-site copies where the data is sensitive or business-critical. For application code, everything's in Git, and infrastructure is increasingly described as code so a full rebuild is a weekend, not a quarter.",
            },
        },
    ],
};

export default function CloudInfrastructurePage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
                        <li className="text-gray-300">Cloud Infrastructure</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-pink-500 to-violet-400 mb-6">
                        <Lock className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Cloud Infrastructure &amp; DevOps
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Docker, Nginx, CI/CD, auto-scaling, and monitoring on DigitalOcean, Fly.io, and Vercel. Zero unplanned outages across our active deployments.
                    </p>
                    <ConsultationCTA label="Audit My Setup" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Most engagements are one of three shapes. Greenfield setup: you have an app, we put it into production properly — Dockerfile, reverse proxy, database, CI/CD, monitoring, the works. Migration: you're on a tangled VPS or trapped on a legacy Heroku dyno and want to move to something cheaper or more reliable. Audit and cleanup: you have infrastructure already but nobody knows quite how it works, so we document, harden, and rebuild the weak parts.
                        </p>
                        <p>
                            Concretely, we set up Docker images that actually use multi-stage builds and don't ship as 1.2GB, Nginx configs that do TLS, caching, rate limiting, and proper buffering, CI/CD pipelines on GitHub Actions that build, test, and deploy on merge, auto-scaling groups on DigitalOcean App Platform or Fly.io when load spikes warrant it, and managed Postgres with daily backups that we actually test.
                        </p>
                        <p>
                            Monitoring goes in from day one: Sentry for errors, uptime checks on public endpoints, log aggregation, and Slack alerts for anything that needs human attention. You shouldn't learn your site is down from a customer email.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Who this is for</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Founders whose AWS or DigitalOcean bill is creeping up and nobody can explain why. Teams whose deploys currently require SSHing into a box and running a script nobody wrote down. Businesses whose single developer left and took half the infrastructure knowledge with them. Startups with one app on Heroku who need to move before the bill triples on their next scale.
                        </p>
                        <p>
                            Also: companies with a solid app but no CI/CD, so every release is a manual risk. And teams whose current monitoring setup is "check the app ourselves every morning and hope."
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we approach it</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Start with an infrastructure walkthrough — we read what you have, run a few diagnostics, and document every piece currently in production. This alone is often the most valuable deliverable. You'd be surprised how many SaaS businesses don't have an accurate list of the services they're paying for.
                        </p>
                        <p>
                            From there, we prioritize by risk: secrets management, backup verification, and TLS config come first because a failure there is catastrophic. CI/CD, staging environments, and observability come second because they compound — every deploy is safer and faster once they're in place. Cost optimization is usually last and often pays for the engagement by itself.
                        </p>
                        <p>
                            Everything we set up is documented in the repo alongside the code. Infrastructure-as-code where it makes sense (Dockerfiles, GitHub Actions workflows, Fly.io and Vercel config files committed). The goal is that a new engineer can onboard without depending on whoever set things up originally.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech &amp; tools</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            "Docker / docker-compose",
                            "Nginx",
                            "DigitalOcean (Droplets + App Platform)",
                            "Fly.io",
                            "Vercel",
                            "GitHub Actions (CI/CD)",
                            "Managed Postgres",
                            "Sentry",
                            "Let's Encrypt / Caddy",
                        ].map((tool) => (
                            <div key={tool} className="rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 text-sm text-gray-300">
                                {tool}
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                        We pick platforms based on what the app needs. Vercel for Next.js projects that live at the edge. Fly.io when you need real servers near users and Dockerized workloads. DigitalOcean when you want predictable pricing and a VPS you can SSH into. AWS when the specific service (S3, SES, Redshift) is the right answer.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What you get</h2>
                    <ul className="space-y-3">
                        {[
                            "Production infrastructure set up, documented, and handed to you",
                            "CI/CD pipeline that builds, tests, and deploys on every merge",
                            "TLS, reverse proxy, and rate limiting configured correctly",
                            "Database backups with a tested restore procedure",
                            "Sentry error tracking and Slack alerts tuned to signal, not noise",
                            "A staging environment identical to production",
                            "Infrastructure notes committed to the repo — no tribal knowledge",
                            "Optional monthly retainer for ongoing ops and on-call coverage",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
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
                                q: "Do you do AWS or just Vercel and DigitalOcean?",
                                a: "We work with AWS on select projects — mostly S3, CloudFront, SES, and RDS where those specific services are needed. For most small-to-mid apps, AWS is overkill. DigitalOcean, Fly.io, and Vercel give you 80% of the value for 20% of the operational complexity. We match tools to the size of the problem.",
                            },
                            {
                                q: "Can you take over existing infrastructure?",
                                a: "Yes. Common engagement: a team inherited an infra stack that's held together with SSH keys and one person's memory. We audit what's running, document it, codify the pieces that matter (Docker, Nginx config, CI/CD pipelines), and hand you back something a new engineer can operate without six weeks of ramp.",
                            },
                            {
                                q: "What does 'zero unplanned outages' mean?",
                                a: "Across our active client deployments, we have not had an unplanned production outage. Planned maintenance windows are a different thing. We can't promise zero outages forever — anyone who does is lying — but the current track record is what it is because we lean hard on boring, well-tested infrastructure over exotic setups.",
                            },
                            {
                                q: "Do you set up monitoring and alerting?",
                                a: "Sentry for error monitoring by default. UptimeRobot or Better Stack for external uptime checks. Log aggregation through the platform's native tools (Vercel Logs, Fly.io, DO Monitoring) or Papertrail when something more serious is needed. Alerts go to Slack and email, tuned so you're not drowning in false positives.",
                            },
                            {
                                q: "How do you handle backups and disaster recovery?",
                                a: "Daily automated database backups with periodic restore tests — an untested backup is not a backup. Off-site copies where the data is sensitive or business-critical. For application code, everything's in Git, and infrastructure is increasingly described as code so a full rebuild is a weekend, not a quarter.",
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { slug: "web-applications", title: "Web Applications", desc: "The apps that live on the infrastructure we set up." },
                            { slug: "algorithmic-trading-systems", title: "Trading Systems", desc: "24/7 uptime for systems moving real capital." },
                            { slug: "penetration-testing", title: "Penetration Testing", desc: "Verify your hardened infra actually is hardened." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-violet-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-violet-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Stop babysitting your servers.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Book a free infra audit. We'll walk through what you have, what's at risk, and what a cleaner setup looks like.
                        </p>
                        <ConsultationCTA label="Book a Consultation" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
