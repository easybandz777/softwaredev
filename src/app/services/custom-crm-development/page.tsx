import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Terminal, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Custom CRM Development | Built for Your Workflow | QuantLab",
    description:
        "Custom CRM development that fits how you actually sell. Next.js + PostgreSQL builds, founder-led, no SaaS lock-in. Call (770) 652-1282 for a free scope call.",
    alternates: { canonical: "https://quantlabusa.dev/services/custom-crm-development" },
    openGraph: {
        title: "Custom CRM Development for Companies That Outgrew the Templates",
        description:
            "Pipeline, lead capture, automations, and reporting that mirror your actual sales motion. Next.js + PostgreSQL. You own the code.",
        url: "https://quantlabusa.dev/services/custom-crm-development",
        type: "article",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom CRM Development",
    name: "Custom CRM Development",
    provider: {
        "@type": "Organization",
        name: "QuantLab Software Solutions",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#org",
    },
    areaServed: "United States",
    description:
        "Custom CRM software development for B2B and service businesses that have outgrown HubSpot, Salesforce, and Pipedrive. Next.js + PostgreSQL builds with pipeline management, lead enrichment, communication logging, automation, and reporting. Source code, database, and deployment owned by the client — no per-seat lock-in.",
    url: "https://quantlabusa.dev/services/custom-crm-development",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How long does a custom CRM development project take?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "8 to 16 weeks is typical for the first production release. Discovery and data modeling take 2 weeks, the bulk of the build runs 6 to 12 weeks, and we always ship a usable v1 before adding nice-to-haves.",
            },
        },
        {
            "@type": "Question",
            name: "Will my team have to migrate off our current CRM?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, and we handle it. Data migration from HubSpot, Salesforce, Pipedrive, Zoho, or spreadsheets is part of every project. Your historical contacts, deals, and notes come with you.",
            },
        },
        {
            "@type": "Question",
            name: "Do we own the code?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Completely. You get the GitHub repository, the database schema, the deployment configs, and all documentation. There is no per-seat fee, no platform tax, and no exit ransom.",
            },
        },
        {
            "@type": "Question",
            name: "Can the CRM integrate with our accounting, email, and calendar tools?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We routinely wire CRMs to QuickBooks, Stripe, Gmail/Outlook, Google Calendar, Slack, and Twilio. Custom integrations are quoted with the build.",
            },
        },
        {
            "@type": "Question",
            name: "What if our process changes after launch?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "That is normal and we plan for it. You can either retain us monthly for ongoing feature work, or bring it in-house — the codebase is documented for either path.",
            },
        },
    ],
};

export default function CustomCRMDevelopmentPage() {
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
                        <li className="text-gray-300">Custom CRM Development</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Terminal className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom CRM Development for Companies That Outgrew the Templates
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Custom CRM software that mirrors your actual sales motion — pipeline stages, automation, integrations, and reporting — so the system serves your team instead of the other way around.
                    </p>
                    <ConsultationCTA label="Scope a CRM Build" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why custom over off-the-shelf</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Off-the-shelf CRMs force your team to work the software's way. Custom fields fill up. Workflows get bolted on. Your reps stop logging activity because the tool is in their way. Meanwhile your AE pulls deals into a spreadsheet, your operations lead manages a parallel Notion board, and your founder still can't get a clean revenue forecast.
                        </p>
                        <p>
                            A custom CRM puts the database schema, the UI, and the automation layer around how you actually sell. No "Salesforce object model" tax. No per-seat ratchet. No vendor-defined report types when the report you need is one SQL view away.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build</h2>
                    <ul className="space-y-3">
                        {[
                            "Pipeline & deal management sized to your sales cycle (B2B service, e-com, multi-stage RFP, etc.)",
                            "Lead capture + enrichment wired to your website forms, Apify scrapers, and inbound channels",
                            "Communication logging — email, SMS, calls, with full thread history per contact",
                            "Custom automations — assignment rules, follow-up sequences, deal aging alerts, SLA enforcement",
                            "Reporting & dashboards built on PostgreSQL views, not vendor 'metrics packs'",
                            "Permissioned multi-user access with audit trails for regulated industries",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Our methodology</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Two-week discovery sprint → wireframes + data model → phased build (8 to 16 weeks typical) → founder-led handoff with documentation. You own the source code, the database, and the deployment. No per-seat ratchet.
                        </p>
                        <p>
                            Discovery is paid separately at $2,500 so you can decide whether to commit to the full build before any code is written. We come out of it with a wireframed UI, a database schema, and a phased estimate — useful even if you take it to another dev.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech &amp; tools</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            "Next.js 15 + App Router",
                            "TypeScript",
                            "PostgreSQL",
                            "Prisma",
                            "Node API layer",
                            "Stripe",
                            "QuickBooks API",
                            "Twilio / SMTP",
                            "Docker",
                        ].map((tool) => (
                            <div key={tool} className="rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 text-sm text-gray-300">
                                {tool}
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                        Hosted on Vercel, AWS, or your own infrastructure — your call. PostgreSQL is the source of truth for everything; the rest of the stack defers to it.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Reference builds</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Our internal sales platform runs on the same architecture pattern we use for custom CRM clients: contact deduplication, outreach presets, dual-mode lead flow (auto + curated), embedded reporting, and Stripe/QuickBooks integration. Production-grade from day one. We dogfood the patterns before we ship them.
                        </p>
                        <p>
                            CRM-adjacent builds in production: <Link href="/work/northcrest-fence" className="text-sky-400 hover:underline">Northcrest Fence</Link> for contractor lead routing, <Link href="/work/bridgepointe-painting" className="text-sky-400 hover:underline">Bridgepointe Painting</Link> for invoice-to-CRM sync, <Link href="/work/contractor-estimating-proposal-engine" className="text-sky-400 hover:underline">a contractor estimating engine</Link> with automatic CRM lead creation, and <Link href="/work/motorcycle-shop-ops-platform" className="text-sky-400 hover:underline">a motorcycle shop ops platform</Link> with customer record consolidation. Same patterns, different verticals.
                        </p>
                        <p>
                            Served from <Link href="/software-development-macon-ga" className="text-sky-400 hover:underline">Macon, GA</Link>, with clients across <Link href="/software-development-atlanta-ga" className="text-sky-400 hover:underline">Atlanta</Link>, <Link href="/software-development-savannah-ga" className="text-sky-400 hover:underline">Savannah</Link>, <Link href="/software-development-augusta-ga" className="text-sky-400 hover:underline">Augusta</Link>, and beyond.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pricing</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Fixed-fee per phase. Typical custom CRM build: $18k – $65k depending on scope. Discovery sprint billed separately at $2,500 so you can decide before committing to the full build. 30-day post-launch support included. Optional retainer for continued feature work.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What you get</h2>
                    <ul className="space-y-3">
                        {[
                            "Full source code repository (yours, no lock-in)",
                            "Production deployment + staging environment",
                            "Admin and user documentation",
                            "30-day post-launch support included",
                            "Data migration from your existing CRM or spreadsheets",
                            "Integrations with Stripe, QuickBooks, Gmail, Calendar, Slack, Twilio as scoped",
                            "Optional retainer for continued feature work",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
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
                                q: "How long does a custom CRM development project take?",
                                a: "8 to 16 weeks is typical for the first production release. Discovery and data modeling take 2 weeks, the bulk of the build runs 6 to 12 weeks, and we always ship a usable v1 before adding nice-to-haves.",
                            },
                            {
                                q: "Will my team have to migrate off our current CRM?",
                                a: "Yes, and we handle it. Data migration from HubSpot, Salesforce, Pipedrive, Zoho, or spreadsheets is part of every project. Your historical contacts, deals, and notes come with you.",
                            },
                            {
                                q: "Do we own the code?",
                                a: "Completely. You get the GitHub repository, the database schema, the deployment configs, and all documentation. There is no per-seat fee, no platform tax, and no exit ransom.",
                            },
                            {
                                q: "Can the CRM integrate with our accounting, email, and calendar tools?",
                                a: "Yes. We routinely wire CRMs to QuickBooks, Stripe, Gmail/Outlook, Google Calendar, Slack, and Twilio. Custom integrations are quoted with the build.",
                            },
                            {
                                q: "What if our process changes after launch?",
                                a: "That is normal and we plan for it. You can either retain us monthly for ongoing feature work, or bring it in-house — the codebase is documented for either path.",
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
                            { slug: "payments-invoicing-licensing", title: "Custom Stripe Integration", desc: "Wire billing into the CRM record from day one." },
                            { slug: "web-applications", title: "Next.js Development", desc: "Same stack, broader scope — portals, dashboards, SaaS." },
                            { slug: "custom-business-software", title: "Custom Business Software", desc: "Beyond the CRM — ops dashboards, internal tools, ERP." },
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

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Stop fighting your CRM.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz directly at (770) 652-1282 or book a 20-minute scope call to walk through your sales process. Founder-led from quote to handoff.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
