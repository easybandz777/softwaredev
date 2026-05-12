import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { DollarSign, Check, ArrowRight, Calculator, FileText, Shield } from "lucide-react";

export const metadata: Metadata = {
    title: "Pricing — Custom Software Development & Pentesting | QuantLab",
    description:
        "Transparent pricing for custom CRMs, web apps, pentests, and SaaS builds. $4K to $200K+ range. No surprise invoices, no hidden retainers, founder-led.",
    alternates: { canonical: "https://quantlabusa.dev/pricing" },
    openGraph: {
        title: "Transparent Pricing — Custom Software & Pentest Engagements | QuantLab",
        description:
            "Published price ranges for custom CRM, Stripe, pentests, trading systems, and SaaS builds. Project, retainer, and audit models. No surprise invoices.",
        url: "https://quantlabusa.dev/pricing",
        type: "website",
        images: [{ url: "/og-image.png" }],
    },
};

type ServiceRow = {
    name: string;
    href: string;
    tier1: string;
    tier1Label: string;
    tier2: string;
    tier2Label: string;
    tier3: string;
    tier3Label: string;
    priceLow: number;
    priceHigh: number;
};

const services: ServiceRow[] = [
    {
        name: "Custom CRM Development",
        href: "/services/custom-crm-development",
        tier1: "$20K",
        tier1Label: "MVP",
        tier2: "$60K",
        tier2Label: "Full platform",
        tier3: "$120K+",
        tier3Label: "Enterprise",
        priceLow: 20000,
        priceHigh: 200000,
    },
    {
        name: "Stripe Integration",
        href: "/services/stripe-integration",
        tier1: "$8K",
        tier1Label: "Basic checkout",
        tier2: "$20K",
        tier2Label: "Subscriptions + dunning",
        tier3: "$40K+",
        tier3Label: "Stripe Connect / marketplace",
        priceLow: 8000,
        priceHigh: 80000,
    },
    {
        name: "Web App Penetration Test",
        href: "/services/web-app-pentest",
        tier1: "$4K",
        tier1Label: "Small app",
        tier2: "$12K",
        tier2Label: "Medium",
        tier3: "$25K+",
        tier3Label: "Enterprise / SOC2 prep",
        priceLow: 4000,
        priceHigh: 60000,
    },
    {
        name: "Network Penetration Test",
        href: "/services/network-pentest",
        tier1: "$5K",
        tier1Label: "Small environment",
        tier2: "$12K",
        tier2Label: "Mid-size",
        tier3: "$20K+",
        tier3Label: "Multi-site / segmented",
        priceLow: 5000,
        priceHigh: 35000,
    },
    {
        name: "Active Directory Pentest",
        href: "/services/active-directory-pentest",
        tier1: "$6K",
        tier1Label: "Single domain",
        tier2: "$10K",
        tier2Label: "Forest with trusts",
        tier3: "$15K+",
        tier3Label: "Hybrid AD / Entra",
        priceLow: 6000,
        priceHigh: 30000,
    },
    {
        name: "MITRE ATT&CK Assessment",
        href: "/services/mitre-attack-assessment",
        tier1: "$8K",
        tier1Label: "Single tactic review",
        tier2: "$18K",
        tier2Label: "Full matrix maturity",
        tier3: "$30K+",
        tier3Label: "Multi-environment + purple team",
        priceLow: 8000,
        priceHigh: 60000,
    },
    {
        name: "Algorithmic Trading Systems",
        href: "/services/algorithmic-trading-systems",
        tier1: "$30K",
        tier1Label: "Single-strategy execution",
        tier2: "$75K",
        tier2Label: "Multi-strategy + risk engine",
        tier3: "$150K+",
        tier3Label: "Full platform + market data + ops",
        priceLow: 30000,
        priceHigh: 300000,
    },
    {
        name: "License Server",
        href: "/services/license-server",
        tier1: "$12K",
        tier1Label: "Key issuance + activation",
        tier2: "$22K",
        tier2Label: "Seat management + Stripe sync",
        tier3: "$35K+",
        tier3Label: "Floating licenses / offline / audit",
        priceLow: 12000,
        priceHigh: 75000,
    },
    {
        name: "Custom Business Software",
        href: "/services/custom-business-software",
        tier1: "Quote",
        tier1Label: "Tooling / internal",
        tier2: "Quote",
        tier2Label: "Multi-module ops platform",
        tier3: "Quote",
        tier3Label: "ERP replacement / large scope",
        priceLow: 15000,
        priceHigh: 250000,
    },
    {
        name: "Subscription Billing",
        href: "/services/subscription-billing",
        tier1: "$15K",
        tier1Label: "Basic plans + invoicing",
        tier2: "$30K",
        tier2Label: "Tiered / usage-based",
        tier3: "$50K+",
        tier3Label: "Enterprise contracts / SOC2 trail",
        priceLow: 15000,
        priceHigh: 100000,
    },
    {
        name: "Cloud Infrastructure",
        href: "/services/cloud-infrastructure",
        tier1: "$5K",
        tier1Label: "Audit / cost review",
        tier2: "$20K",
        tier2Label: "Greenfield build",
        tier3: "$60K+",
        tier3Label: "Multi-region / migration",
        priceLow: 5000,
        priceHigh: 120000,
    },
];

const buildOffersSchema = () =>
    services.map((s) => ({
        "@type": "Offer",
        name: s.name,
        url: `https://quantlabusa.dev${s.href}`,
        priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "USD",
            minPrice: s.priceLow,
            maxPrice: s.priceHigh,
        },
        availability: "https://schema.org/InStock",
        seller: {
            "@type": "Organization",
            name: "QuantLab Software Solutions",
            "@id": "https://quantlabusa.dev/#org",
        },
    }));

const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "QuantLab Custom Software & Pentest Engagements",
    description:
        "Custom software development, security assessments, and platform engineering for B2B and regulated industries. Published price ranges from $4K (one-shot pentest) to $200K+ (enterprise builds). Project, retainer, and audit engagement models.",
    brand: {
        "@type": "Organization",
        name: "QuantLab Software Solutions",
        "@id": "https://quantlabusa.dev/#org",
    },
    image: "https://quantlabusa.dev/og-image.png",
    url: "https://quantlabusa.dev/pricing",
    offers: buildOffersSchema(),
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Pricing", item: "https://quantlabusa.dev/pricing" },
    ],
};

const faqs = [
    {
        q: "Does the price include hosting?",
        a: "No. Hosting (Vercel, AWS, Fly.io, your own infrastructure) is billed directly to you so there is no margin on infrastructure costs. We help size, provision, and harden the environment as part of the build, but the cloud bill is yours from day one. Expect $30 to $400 per month for most production deployments depending on traffic and data volume.",
    },
    {
        q: "What about scope creep?",
        a: "Every project includes two rounds of SOW iteration before kickoff so the scope is real, not aspirational. After kickoff, change requests get a one-page change order with hours and cost before any code is written. Small in-scope course corrections (under 4 hours) are absorbed; anything larger is quoted and approved in writing before work resumes.",
    },
    {
        q: "Do you do rush jobs?",
        a: "Sometimes. Compressed timelines (a 12-week build into 6 weeks, an unannounced compliance pentest before a contract closes) carry a 20 to 40 percent rush premium and depend on current capacity. We will tell you on the discovery call whether the date is feasible before you commit.",
    },
    {
        q: "Do you take equity for early-stage work?",
        a: "Rarely, and never as primary compensation. We will consider partial equity (up to 25 percent of fee) for founders who are post-revenue, have a clear cap table, and can pay the cash portion on a defined schedule. Pre-product or pre-revenue companies pay cash.",
    },
    {
        q: "What is the minimum retainer length?",
        a: "Four months. Anything shorter is better structured as a fixed-scope project. Retainers run 4 to 12 months at $8K to $30K per month depending on hours committed and on-call expectations.",
    },
    {
        q: "Do you sign NDAs and MSAs?",
        a: "Yes to both. We prefer to use a mutual NDA before any technical discussion of your stack or data, and an MSA + SOW structure for any engagement over $25K. We can review your paper or work from ours.",
    },
    {
        q: "What if the pentest finds nothing?",
        a: "Then you have evidence of that, signed and dated, for your auditors. We deliver the report regardless. We have never run a real assessment that produced zero findings, but if it happened the deliverable would still be useful for SOC2 and customer security reviews.",
    },
    {
        q: "Can we split a project into smaller phases to spread cost?",
        a: "Yes. Most builds over $40K are already phased into a usable v1 followed by add-on phases. You can pause between phases, take the code in-house, or shift to a retainer for ongoing work. We do not penalize phase breaks.",
    },
    {
        q: "Do prices include third-party software licenses?",
        a: "No. Stripe fees, Twilio usage, AWS/Vercel hosting, monitoring tools (Sentry, Datadog), and any commercial libraries are billed directly to your account. We will list expected monthly costs in the SOW so there are no surprises after launch.",
    },
    {
        q: "What is your refund policy if the project does not work out?",
        a: "Each phase is invoiced against deliverables. If a phase fails acceptance criteria spelled out in the SOW, you do not pay for that phase. We have not had to invoke this clause, but it is in every contract because it is the right way to write the deal.",
    },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
};

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
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
                        <li className="text-gray-300">Pricing</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <DollarSign className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Transparent pricing. No surprise invoices.
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Custom software, security work, and platform engineering at published price ranges. Three engagement models, eleven priced services, and a payment schedule you can plan around.
                    </p>
                    <ConsultationCTA label="Scope a Project" service="Pricing" source="pricing" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why we publish what we charge</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Most boutique dev shops and security firms refuse to publish rates. The standard play is to gate every number behind a discovery call, qualify the buyer, and then quote whatever the buyer seems able to pay. That model rewards firms with strong sales teams and punishes firms with strong engineering. We are an engineering shop, so we use the opposite play.
                        </p>
                        <p>
                            We publish ranges because the buyers we want to work with already know what custom software costs. A founder who has shipped a SaaS before, a CTO who has bought two pentests, a head of operations who has run a CRM migration — these buyers want to know roughly what a project will cost in the first 30 seconds of a page, not after three sales calls. Publishing the numbers up front filters out the buyers we are wrong for and gives us more time to do the work.
                        </p>
                        <p>
                            The ranges below are the actual ranges. The low end is a real project we have shipped at that price; the high end is a real project we have shipped at that price. Your number will fall inside the band based on scope, integrations, compliance requirements, and timeline.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Three engagement models</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6 hover:border-sky-400/30 transition-all">
                            <div className="flex items-center gap-3 mb-3">
                                <FileText className="w-5 h-5 text-sky-400" />
                                <h3 className="text-white font-semibold">Project — fixed scope</h3>
                            </div>
                            <p className="text-2xl font-bold text-white mb-1">$15K – $200K+</p>
                            <p className="text-xs text-gray-400 mb-4 uppercase tracking-wide">per engagement</p>
                            <p className="text-sm text-gray-400 leading-relaxed mb-4">
                                Defined deliverables, phased milestones, fixed fee per phase. Best for new builds, replatforms, and discrete features where the scope is clear before kickoff.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li className="flex gap-2"><Check className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" /> SOW with acceptance criteria</li>
                                <li className="flex gap-2"><Check className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" /> 8 to 20 weeks typical</li>
                                <li className="flex gap-2"><Check className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" /> Source code handoff included</li>
                            </ul>
                        </div>
                        <div className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6 hover:border-sky-400/30 transition-all">
                            <div className="flex items-center gap-3 mb-3">
                                <Calculator className="w-5 h-5 text-sky-400" />
                                <h3 className="text-white font-semibold">Retainer — build + maintain</h3>
                            </div>
                            <p className="text-2xl font-bold text-white mb-1">$8K – $30K</p>
                            <p className="text-xs text-gray-400 mb-4 uppercase tracking-wide">per month</p>
                            <p className="text-sm text-gray-400 leading-relaxed mb-4">
                                Monthly hours committed for ongoing build, maintenance, and on-call work. Best for live products that need continuous feature work plus operational support.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li className="flex gap-2"><Check className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" /> 4 to 12 month minimum</li>
                                <li className="flex gap-2"><Check className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" /> Net-15 monthly invoicing</li>
                                <li className="flex gap-2"><Check className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" /> Weekly standup + roadmap</li>
                            </ul>
                        </div>
                        <div className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6 hover:border-sky-400/30 transition-all">
                            <div className="flex items-center gap-3 mb-3">
                                <Shield className="w-5 h-5 text-sky-400" />
                                <h3 className="text-white font-semibold">Audit / Pentest — one-shot</h3>
                            </div>
                            <p className="text-2xl font-bold text-white mb-1">$4K – $25K</p>
                            <p className="text-xs text-gray-400 mb-4 uppercase tracking-wide">per assessment</p>
                            <p className="text-sm text-gray-400 leading-relaxed mb-4">
                                Time-boxed security review, code audit, methodology review, or threat model. Best for one-off compliance, due diligence, or pre-launch validation.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li className="flex gap-2"><Check className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" /> 1 to 4 week engagements</li>
                                <li className="flex gap-2"><Check className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" /> Executive + technical report</li>
                                <li className="flex gap-2"><Check className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" /> Retest of fixes included</li>
                            </ul>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Service pricing</h2>
                    <p className="text-gray-400 leading-relaxed mb-6 max-w-3xl">
                        Three reference tiers per service. The low end is a real project we have shipped at that price; the high end is a real project we have shipped at that price. Your scope places you inside the band.
                    </p>
                    <div className="overflow-x-auto rounded-xl border border-white/5 bg-[#0d1526]/60">
                        <table className="w-full text-left text-sm">
                            <thead className="border-b border-white/5 text-xs uppercase tracking-wide text-gray-400">
                                <tr>
                                    <th className="px-4 py-3 font-medium">Service</th>
                                    <th className="px-4 py-3 font-medium">Entry</th>
                                    <th className="px-4 py-3 font-medium">Mid</th>
                                    <th className="px-4 py-3 font-medium">Enterprise</th>
                                </tr>
                            </thead>
                            <tbody>
                                {services.map((s) => (
                                    <tr key={s.name} className="border-b border-white/5 last:border-b-0 hover:bg-white/[0.02] transition-colors">
                                        <td className="px-4 py-4 align-top">
                                            <Link href={s.href} className="text-sky-400 hover:underline font-medium">{s.name}</Link>
                                        </td>
                                        <td className="px-4 py-4 align-top">
                                            <div className="text-white font-semibold">{s.tier1}</div>
                                            <div className="text-xs text-gray-500 mt-0.5">{s.tier1Label}</div>
                                        </td>
                                        <td className="px-4 py-4 align-top">
                                            <div className="text-white font-semibold">{s.tier2}</div>
                                            <div className="text-xs text-gray-500 mt-0.5">{s.tier2Label}</div>
                                        </td>
                                        <td className="px-4 py-4 align-top">
                                            <div className="text-white font-semibold">{s.tier3}</div>
                                            <div className="text-xs text-gray-500 mt-0.5">{s.tier3Label}</div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-xs text-gray-500 mt-3">
                        All prices in USD. Multi-service bundles (CRM + Stripe + pentest, for example) typically receive a 10 to 15 percent package discount versus separate engagements.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What is included at each price level</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                            <h3 className="text-white font-semibold mb-3">Entry tier</h3>
                            <ul className="space-y-2 text-sm text-gray-300">
                                {[
                                    "Single environment build or audit",
                                    "One primary integration",
                                    "Standard SLAs (next-business-day response)",
                                    "Executive summary + technical report",
                                    "30-day post-launch warranty",
                                    "Source code handoff",
                                ].map((item) => (
                                    <li key={item} className="flex gap-2">
                                        <Check className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-xl border border-sky-400/30 bg-[#0d1526]/60 p-6">
                            <h3 className="text-white font-semibold mb-3">Mid tier</h3>
                            <ul className="space-y-2 text-sm text-gray-300">
                                {[
                                    "Multi-environment or multi-module scope",
                                    "Three to five integrations",
                                    "Same-day response on critical issues",
                                    "Retest of all findings included",
                                    "60-day post-launch warranty",
                                    "Staff training + runbooks",
                                    "Data migration from prior system",
                                ].map((item) => (
                                    <li key={item} className="flex gap-2">
                                        <Check className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                            <h3 className="text-white font-semibold mb-3">Enterprise tier</h3>
                            <ul className="space-y-2 text-sm text-gray-300">
                                {[
                                    "Multi-region or hybrid architecture",
                                    "Unlimited integrations within scope",
                                    "Priority on-call + dedicated Slack channel",
                                    "Quarterly retests for first year",
                                    "90-day post-launch warranty",
                                    "Compliance-grade documentation (SOC2 / HIPAA / PCI ready)",
                                    "Executive briefings + board-level reporting",
                                    "Optional retainer with priority capacity",
                                ].map((item) => (
                                    <li key={item} className="flex gap-2">
                                        <Check className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we do not charge for</h2>
                    <p className="text-gray-400 leading-relaxed mb-6 max-w-3xl">
                        A few things stay free because they are part of how we qualify mutually-fit work, not part of the deliverable.
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                        {[
                            "Discovery calls — 30 to 60 minutes, no fee, no obligation",
                            "SOW iteration — up to two rounds of scope and price revisions before kickoff",
                            "Post-launch warranty — 30 days minimum, 60 to 90 at higher tiers",
                            "Slack / email response time during active engagement",
                            "Reference architecture sketches for qualified buyers",
                            "Brief code review of a critical file (under 200 lines) before you commit",
                            "Capacity calls — quick yes/no on whether we can hit your timeline",
                            "Retest of pentest findings you fix within the engagement window",
                        ].map((item) => (
                            <div key={item} className="flex gap-3 rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 text-sm text-gray-300">
                                <Check className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Payment terms</h2>
                    <div className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6 md:p-8">
                        <div className="grid md:grid-cols-3 gap-6 mb-6">
                            <div>
                                <div className="text-3xl font-bold text-sky-400 mb-1">50%</div>
                                <div className="text-xs uppercase tracking-wide text-gray-400 mb-2">Upfront</div>
                                <p className="text-sm text-gray-400 leading-relaxed">At SOW signing. Reserves the slot in our delivery calendar and funds the discovery and architecture phases.</p>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-sky-400 mb-1">25%</div>
                                <div className="text-xs uppercase tracking-wide text-gray-400 mb-2">Mid-project</div>
                                <p className="text-sm text-gray-400 leading-relaxed">At the agreed midpoint milestone — typically after the v1 build is functional in staging and reviewable.</p>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-sky-400 mb-1">25%</div>
                                <div className="text-xs uppercase tracking-wide text-gray-400 mb-2">On delivery</div>
                                <p className="text-sm text-gray-400 leading-relaxed">After production deployment, documentation handoff, and acceptance against SOW criteria.</p>
                            </div>
                        </div>
                        <div className="border-t border-white/5 pt-6 space-y-2 text-sm text-gray-300">
                            <p><span className="text-white font-medium">Retainers:</span> Net-15 invoicing on the first of each month. First month is prorated if mid-month start.</p>
                            <p><span className="text-white font-medium">Audits / pentests:</span> 50% to schedule, 50% on report delivery.</p>
                            <p><span className="text-white font-medium">Accepted methods:</span> Wire (preferred for over $25K), ACH, Stripe (credit card up to $50K). Checks accepted for net-30 retainers.</p>
                            <p><span className="text-white font-medium">Late terms:</span> 1.5% per month past Net-15 on retainer invoices. No interest on project milestone invoices within 15 days.</p>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">The case for published prices</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Hidden pricing is a symptom of a sales process built around extracting maximum value from each buyer rather than running a sustainable engineering shop. When every quote is custom-priced based on a discovery call, the firm spends its margin on sales calls instead of on engineering. The buyer pays for that overhead one way or another.
                        </p>
                        <p>
                            Published ranges create three useful constraints. First, they force us to be honest with ourselves about what we can deliver inside a band — if a project keeps creeping past the high end of a range, the scope was wrong before we started, and we own that. Second, they save buyers six to ten hours of agency calls that otherwise produce the same number. Third, they qualify mutually-fit work: if you bounce off the price, neither of us wasted the call; if you stay, we already share a frame of reference for the conversation that follows.
                        </p>
                        <p>
                            Transparency is not a virtue signal. It is the operating mode that fits how we want to work — engineering-led, lean, founder-accountable. The prices above are the prices. The work above is the work.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Estimate your project</h2>
                    <p className="text-gray-400 leading-relaxed mb-6 max-w-3xl">
                        Four free calculators model the cost of the most common engagements before you book a call.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { href: "/calculators/crm-roi", title: "CRM ROI Calculator", desc: "Estimate the dollar value of replacing HubSpot, Salesforce, or Pipedrive with a custom CRM." },
                            { href: "/calculators/stripe-cost", title: "Stripe Integration Cost", desc: "Project the cost of a custom Stripe build vs an off-the-shelf billing platform." },
                            { href: "/calculators/pentest-cost", title: "Pentest Cost Calculator", desc: "Get a price range for web app, network, AD, or MITRE assessments by scope." },
                            { href: "/calculators/build-vs-buy", title: "Build vs Buy Calculator", desc: "Compare 3-year total cost of building custom vs subscribing to SaaS." },
                        ].map((c) => (
                            <Link
                                key={c.href}
                                href={c.href}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{c.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{c.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {faqs.map((item) => (
                            <div key={item.q} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Reference work at these prices</h2>
                    <p className="text-gray-400 leading-relaxed mb-6 max-w-3xl">
                        Three case studies inside the bands above. Same patterns, different scopes.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { slug: "northcrest-fence", title: "Northcrest Fence", desc: "Contractor lead routing + custom CRM, mid-tier build." },
                            { slug: "motorcycle-shop-ops-platform", title: "Motorcycle Shop Ops", desc: "Customer consolidation + workshop ops, full platform tier." },
                            { slug: "contractor-estimating-proposal-engine", title: "Estimating Engine", desc: "Quote-to-CRM automation with auto lead creation." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/work/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Background reading</h2>
                    <p className="text-gray-400 leading-relaxed mb-4">
                        Long-form guides that walk through the math behind these numbers.
                    </p>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/blog/custom-crm-development-guide" className="text-sky-400 hover:underline">The Custom CRM Development Guide</Link>
                            <span className="text-gray-500"> — when to leave HubSpot, what custom buys you, total cost over three years.</span>
                        </li>
                        <li>
                            <Link href="/blog/penetration-test-cost-2026" className="text-sky-400 hover:underline">Penetration Test Cost — 2026</Link>
                            <span className="text-gray-500"> — what drives pentest pricing and how to scope an assessment.</span>
                        </li>
                        <li>
                            <Link href="/blog/build-vs-buy-software-2026" className="text-sky-400 hover:underline">Build vs Buy Software — 2026</Link>
                            <span className="text-gray-500"> — when SaaS subscriptions cost more than a custom build.</span>
                        </li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready for an actual quote?
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz directly at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or book a 30-minute scope call. We will land on a number you can budget against by the end of the call.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" service="Pricing" source="pricing" />
                        <p className="text-xs text-gray-500 mt-6">
                            Prefer to email? <Link href="/contact" className="text-sky-400 hover:underline">Contact form</Link>.
                        </p>
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
