import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Globe, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Next.js Web App & SaaS Development — Vercel-Ready | QuantLab",
    description:
        "Custom Next.js, React, and TypeScript web apps and SaaS products. Client portals, contractor tools, and platforms shipped to production on Vercel — not just demos.",
    alternates: { canonical: "https://quantlabusa.dev/services/web-applications" },
    openGraph: {
        title: "Next.js Development Company — Custom Next.js Apps Built for Production",
        description:
            "Full-stack Next.js and TypeScript web applications and SaaS products. Deployed to Vercel CDN. Client portals, contractor platforms, artist sites.",
        url: "https://quantlabusa.dev/services/web-applications",
        type: "article",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Next.js Custom Software Development",
    name: "Next.js Custom Software & Web App Development",
    provider: {
        "@type": "Organization",
        name: "QuantLab Software Solutions",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Next.js custom software development for marketing sites, SaaS dashboards, customer portals, and internal tools. App Router, TypeScript, Tailwind, Prisma, PostgreSQL, NextAuth, and Stripe — deployed to Vercel or self-hosted on AWS / Cloud Run.",
    url: "https://quantlabusa.dev/services/web-applications",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "App Router or Pages Router?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "App Router for all new builds. We will work in Pages Router only when the existing codebase requires it and migration is out of scope. Server Components by default, Client Components when interactivity demands.",
            },
        },
        {
            "@type": "Question",
            name: "Do you do server-side rendering, static generation, or both?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Both, plus ISR where it fits. The choice is per-route — we use SSR for personalized pages, SSG for marketing pages, and ISR for content that updates on a schedule. Same codebase, sensible defaults.",
            },
        },
        {
            "@type": "Question",
            name: "Will my Next.js app rank in Google?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "With proper metadata, structured data, sitemap, internal linking, and performance budgets — yes. SEO is part of the build, not an afterthought. We hit Core Web Vitals in the green and ship structured data on every public route.",
            },
        },
        {
            "@type": "Question",
            name: "Can you take over an existing Next.js codebase?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We audit first — dependency health, route structure, type coverage, performance, and security — then quote remediation and feature work separately. We can do audits, feature work, migrations from older React or PHP apps, and take over projects whose previous dev disappeared.",
            },
        },
        {
            "@type": "Question",
            name: "Self-host or Vercel?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Vercel is the default because it is good. Self-hosting on AWS, GCP, or your own Kubernetes is fully supported when scale, compliance, or cost demands it. We have shipped both patterns.",
            },
        },
    ],
};

export default function WebApplicationsPage() {
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
                    <ol className="flex items-center gap-2 text-xs text-gray-500">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/services" className="hover:text-sky-400 transition-colors">Services</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">Web Applications</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-400 mb-6">
                        <Globe className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Next.js Custom Software Development
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Production Next.js apps end-to-end — App Router, Server Components, TypeScript, Stripe, and PostgreSQL. Marketing sites, SaaS dashboards, and customer portals shipped to Vercel (or self-hosted when scale demands it).
                    </p>
                    <ConsultationCTA label="Start a Project" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">A Next.js development company that ships to production</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Next.js makes hard things possible and easy things tempting. The result is a lot of apps that look fine at the demo and fall over in production — hydration mismatches, server actions that leak, edge runtime confusion, App Router patterns copy-pasted from blog posts. We know the difference between Server Components, RSC payloads, route handlers, server actions, and middleware — and use each one correctly.
                        </p>
                        <p>
                            Client portals where your customers log in and see their accounts, invoices, project status, or usage data. SaaS products where public users sign up, pick a plan, and get value on the same day. Contractor and service platforms that manage estimates, proposals, scheduling, and document delivery. And artist or musician sites that tie together booking, merch, media, and a fan email list in one place.
                        </p>
                        <p>
                            Everything renders on the server where it matters for SEO and user-perceived speed, and on the client where it matters for interactivity. You don't have to know which is which.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build with Next.js</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            <strong className="text-gray-200">Marketing sites</strong> — SEO-led, programmatic city/service pages, structured data baked in.
                        </p>
                        <p>
                            <strong className="text-gray-200">SaaS dashboards</strong> — role-based auth, real-time data, complex tables and charts, NextAuth or Clerk for identity.
                        </p>
                        <p>
                            <strong className="text-gray-200">Customer portals</strong> — self-serve account management tied to Stripe or your billing system.
                        </p>
                        <p>
                            <strong className="text-gray-200">Internal tools</strong> — operations dashboards, admin panels, automation consoles.
                        </p>
                        <p>
                            <strong className="text-gray-200">Hybrid apps</strong> — public marketing plus authenticated app in one codebase, one deploy.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Who this is for</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Founders of small-to-mid SaaS businesses, service companies outgrowing Squarespace, and teams whose current site is either a WordPress instance that takes 30 seconds to load a page or a static marketing brochure that doesn't actually do anything.
                        </p>
                        <p>
                            Good fit if: you have real traffic, real customers, or a real product and the site is blocking you from scaling or charging more. Less good fit if: you need a pure landing page with a form. A template will do.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we approach it</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            We start by separating what the public site has to do from what the authenticated app has to do. These often get jammed together in a single build and cost a lot later. Clean separation early means the marketing pages can iterate without risking the billing flow.
                        </p>
                        <p>
                            Design goes through low-fidelity wireframes before any pixel work, so we're deciding structure and hierarchy when it's cheap to change. Visual design lands next. Then we build against real API schemas in TypeScript — no floating JSON — so breakage is caught at compile time, not by a customer.
                        </p>
                        <p>
                            Every deploy runs through a preview URL on a pull request. You see the change on a real domain before it hits production. Nothing ships without that step.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech &amp; tools</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            "Next.js 16",
                            "React",
                            "TypeScript",
                            "Tailwind CSS",
                            "PostgreSQL / Prisma",
                            "Vercel edge / CDN",
                            "Stripe",
                            "Framer Motion",
                            "Sentry",
                        ].map((tool) => (
                            <div key={tool} className="rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 text-sm text-gray-300">
                                {tool}
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                        This stack is chosen because it lets a small team build and ship fast without sacrificing type safety or performance. Vercel gives us global CDN, preview deploys, and zero-downtime rollouts. Prisma on Postgres keeps the database layer honest.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What you get</h2>
                    <ul className="space-y-3">
                        {[
                            "A production-ready Next.js application deployed on Vercel with custom domain",
                            "Authentication, role-based access, and session management",
                            "Stripe billing integration (if the product takes payments)",
                            "Server-rendered public pages with proper SEO metadata and structured data",
                            "Preview deployments on every pull request",
                            "Sentry-based error monitoring and performance tracking",
                            "Source code, infrastructure credentials, and deployment docs handed over",
                            "Optional ongoing retainer for feature work and infra management",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
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
                                q: "App Router or Pages Router?",
                                a: "App Router for all new builds. We will work in Pages Router only when the existing codebase requires it and migration is out of scope. Server Components by default, Client Components when interactivity demands.",
                            },
                            {
                                q: "Do you do server-side rendering, static generation, or both?",
                                a: "Both, plus ISR where it fits. The choice is per-route — we use SSR for personalized pages, SSG for marketing pages, and ISR for content that updates on a schedule. Same codebase, sensible defaults.",
                            },
                            {
                                q: "Will my Next.js app rank in Google?",
                                a: "With proper metadata, structured data, sitemap, internal linking, and performance budgets — yes. SEO is part of the build, not an afterthought. We hit Core Web Vitals in the green and ship structured data on every public route.",
                            },
                            {
                                q: "Can you take over an existing Next.js codebase?",
                                a: "Yes. We audit first — dependency health, route structure, type coverage, performance, and security — then quote remediation and feature work separately. We can do audits, feature work, migrations from older React or PHP apps, and take over projects whose previous dev disappeared.",
                            },
                            {
                                q: "Self-host or Vercel?",
                                a: "Vercel is the default because it is good. Self-hosting on AWS, GCP, or your own Kubernetes is fully supported when scale, compliance, or cost demands it. We have shipped both patterns.",
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
                            { slug: "custom-crm-development", title: "Custom CRM Development", desc: "Pipeline and lead capture built into the same Next.js codebase." },
                            { slug: "payments-invoicing-licensing", title: "Payments & Licensing", desc: "Stripe, subscriptions, and license servers." },
                            { slug: "cloud-infrastructure", title: "Cloud Infrastructure", desc: "CDN, CI/CD, and monitoring on Vercel and beyond." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-emerald-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Have a project in your head already?
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Tell us what you're trying to build. First call is free, and we'll tell you straight if it's something we can ship or not.
                        </p>
                        <ConsultationCTA label="Book a Consultation" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
