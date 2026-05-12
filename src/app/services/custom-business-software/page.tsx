import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Terminal, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Custom CRM, ERP & Internal Tools — Built to Fit | QuantLab",
    description:
        "Custom CRMs, dashboards, and work order systems built around your workflow — not Salesforce's. Shipped across 4 industries. Free scoping call in 24 hours.",
    alternates: { canonical: "https://quantlabusa.dev/services/custom-business-software" },
    openGraph: {
        title: "Stop Reshaping Your Business Around Salesforce",
        description:
            "Custom CRMs, ERPs, and internal tools designed around how your business actually runs. Working v1 in 4–8 weeks. You own the code.",
        url: "https://quantlabusa.dev/services/custom-business-software",
        type: "article",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Business Software Development",
    name: "Custom Business Software",
    provider: {
        "@type": "Organization",
        name: "QuantLab Software Solutions",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Custom CRM, ERP, operations dashboards, work order systems, inventory tracking, and internal tools built to match how a specific business actually runs.",
    url: "https://quantlabusa.dev/services/custom-business-software",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How is this different from buying a CRM or ERP off the shelf?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Off-the-shelf tools force you to reshape your business around someone else's model. Custom software works the other way. If your scheduling depends on seasonal mechanic availability or your billing uses odd per-song session math, we build the feature that matches the reality rather than asking you to translate it into Salesforce fields.",
            },
        },
        {
            "@type": "Question",
            name: "What's the typical timeline?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A tight v1 for a single department (say, a work order intake and dispatch flow) usually takes 4 to 8 weeks. A full multi-module system takes longer. We aim to get a usable slice into production fast rather than shipping a giant release at the end.",
            },
        },
        {
            "@type": "Question",
            name: "Who owns the code?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "You do. We hand over the full repository, infrastructure access, and documentation. If you want to bring in another developer or take it fully in-house later, nothing is locked behind our tooling.",
            },
        },
        {
            "@type": "Question",
            name: "Do you offer ongoing support?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. After launch we offer monthly retainers for bug fixes, new features, and infrastructure management. Or you can bring the project fully in-house — your choice.",
            },
        },
        {
            "@type": "Question",
            name: "Can you migrate us off HubSpot, Salesforce, or another SaaS CRM?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes — data migration from HubSpot, Salesforce, Pipedrive, Zoho, or even a stack of spreadsheets is part of every CRM build we do. Historical contacts, deals, notes, and attachments come with you, and we run a parallel period before cutover so nothing gets lost.",
            },
        },
    ],
};

export default function CustomBusinessSoftwarePage() {
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
                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-500">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/services" className="hover:text-sky-400 transition-colors">Services</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">Custom Business Software</li>
                    </ol>
                </nav>

                {/* Hero */}
                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 mb-6">
                        <Terminal className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Business Software
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        CRMs, operations dashboards, work order systems, inventory tracking, and the internal tools your team actually needs — built around how your business runs, not how Salesforce thinks it should.
                    </p>
                    <ConsultationCTA label="Scope a Build" />
                </AnimatedSection>

                {/* What we build */}
                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Every business has at least one process held together by spreadsheets, emails, and a person who remembers how it works. We replace that — carefully — with an application that does the job in one place.
                        </p>
                        <p>
                            Recent builds include a CRM and lead-management platform with Apify-driven Google Maps scraping and Gmail sync, a contractor estimating and proposal system with e-signature flow, a musician booking and royalty tracker, a motorcycle shop work order and inventory system, and a trading-firm operations dashboard wired into live P&L.
                        </p>
                        <p>
                            The pattern is the same every time: start with the messy real-world process, model it honestly in the database, then build the interface that a non-technical user can run on a Tuesday morning without calling anyone.
                        </p>
                    </div>
                </AnimatedSection>

                {/* Who this is for */}
                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Who this is for</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Owners and operators of businesses doing roughly $500K to $50M in annual revenue who have outgrown spreadsheets and QuickBooks-plus-email but can't find a vertical SaaS that fits. The telltale signs:
                        </p>
                        <ul className="space-y-2 pl-0 list-none">
                            <li className="flex gap-3"><Check className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" /><span>You've tried two or three off-the-shelf tools and ended up exporting data from all of them into a master Google Sheet.</span></li>
                            <li className="flex gap-3"><Check className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" /><span>Onboarding a new employee takes a week because the process lives in your head.</span></li>
                            <li className="flex gap-3"><Check className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" /><span>You have a clear competitive edge in how you operate, and forcing your team into a generic CRM would cost you that edge.</span></li>
                            <li className="flex gap-3"><Check className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" /><span>You want to own your software rather than pay per seat forever.</span></li>
                        </ul>
                    </div>
                </AnimatedSection>

                {/* How we approach it */}
                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we approach it</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            First call is a working session, not a sales pitch. We map the workflow on a whiteboard, identify the one or two painful bottlenecks, and scope a first version that tackles those specifically. If you don't need the full system in week one, we don't build it in week one.
                        </p>
                        <p>
                            Build cycle runs in two-week slices. You see something working by week three, and every slice after adds a piece you can demo to your team. We deploy to staging early so you're testing against real data, not mock fixtures.
                        </p>
                        <p>
                            Data imports, auth, role-based permissions, and audit logs are standard from day one. So is a real TypeScript schema on both ends — no loose JSON bags that turn into tech debt six months in.
                        </p>
                    </div>
                </AnimatedSection>

                {/* Tech & tools */}
                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech &amp; tools</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            "Next.js 16",
                            "React",
                            "TypeScript",
                            "PostgreSQL",
                            "Prisma",
                            "Stripe",
                            "JWT auth",
                            "Tailwind CSS",
                            "Vercel / Fly.io",
                        ].map((tool) => (
                            <div key={tool} className="rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 text-sm text-gray-300">
                                {tool}
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                        Stack picks are deliberate. PostgreSQL plus Prisma gives us migrations and type safety end-to-end. Next.js on Vercel means the same codebase renders the dashboard, the public marketing site, and the API routes — one repo, one deploy.
                    </p>
                </AnimatedSection>

                {/* What you get */}
                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What you get</h2>
                    <ul className="space-y-3">
                        {[
                            "A working application deployed to your infrastructure, not a demo",
                            "Full source code and infra access — you own all of it",
                            "Role-based auth, audit logs, and data export from day one",
                            "Stripe or ACH billing integration if revenue flows through it",
                            "Onboarding docs written for your team, not for engineers",
                            "A staging environment so new changes never hit production raw",
                            "Optional monthly retainer for support and new features",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                {/* FAQs */}
                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "How is this different from buying a CRM or ERP off the shelf?",
                                a: "Off-the-shelf tools force you to reshape your business around someone else's model. Custom software works the other way. If your scheduling depends on seasonal mechanic availability or your billing uses odd per-song session math, we build the feature that matches the reality rather than asking you to translate it into Salesforce fields.",
                            },
                            {
                                q: "What's the typical timeline?",
                                a: "A tight v1 for a single department (say, a work order intake and dispatch flow) usually takes 4 to 8 weeks. A full multi-module system takes longer. We aim to get a usable slice into production fast rather than shipping a giant release at the end.",
                            },
                            {
                                q: "Who owns the code?",
                                a: "You do. We hand over the full repository, infrastructure access, and documentation. If you want to bring in another developer or take it fully in-house later, nothing is locked behind our tooling.",
                            },
                            {
                                q: "Do you offer ongoing support?",
                                a: "Yes. After launch we offer monthly retainers for bug fixes, new features, and infrastructure management. Or you can bring the project fully in-house — your choice.",
                            },
                            {
                                q: "Can you migrate us off HubSpot, Salesforce, or another SaaS CRM?",
                                a: "Yes — data migration from HubSpot, Salesforce, Pipedrive, Zoho, or even a stack of spreadsheets is part of every CRM build we do. Historical contacts, deals, notes, and attachments come with you, and we run a parallel period before cutover so nothing gets lost.",
                            },
                        ].map((item) => (
                            <div key={item.q} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                {/* Related services */}
                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { slug: "custom-crm-development", title: "Custom CRM Development", desc: "Pipeline, lead capture, and automations sized to your sales motion." },
                            { slug: "payments-invoicing-licensing", title: "Payments & Licensing", desc: "Stripe, ACH, license servers, subscription billing." },
                            { slug: "web-applications", title: "Web Applications", desc: "Client portals and SaaS products on Next.js." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                {/* Bottom CTA */}
                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to replace the spreadsheet?
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Book a free scoping call. We'll map the workflow, figure out what's worth building, and tell you straight if it isn't.
                        </p>
                        <ConsultationCTA label="Book a Consultation" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
