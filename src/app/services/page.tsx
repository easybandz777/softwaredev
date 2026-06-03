import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { TopicClusters } from "@/components/TopicClusters";
import { JsonLd } from "@/components/JsonLd";
import { Terminal, Bot, Globe, CreditCard, Shield, Lock, ArrowRight, MapPin, Building2, GitCompare, Database, BarChart3, RefreshCw, Rocket, FileSearch, Compass, Cloud, FlaskConical } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";
import { breadcrumbSchema, ORGANIZATION_ID, SITE_URL, WEBSITE_ID } from "@/lib/schemas";

export const metadata = pageMetadata({
    title: "Software Development & Cybersecurity Services | QUANT LAB USA",
    description:
        "Custom CRMs, Stripe integrations, Next.js apps, and pen testing for US businesses in Atlanta, Macon, Austin, Dallas, NYC, SF, and 8 more cities. 2026 services.",
    slug: "services",
    image: "/og-services.png",
    type: "website",
});

const servicesBreadcrumb = breadcrumbSchema(
    [
        { name: "Home", url: `${SITE_URL}/` },
        { name: "Services", url: `${SITE_URL}/services` },
    ],
    "/services",
);

type ServiceCard = {
    icon: typeof Terminal;
    color: string;
    title: string;
    slug: string;
    headline: string;
    description: string;
    tag: string;
};

const buildAndShip: ServiceCard[] = [
    {
        icon: Terminal,
        color: "from-blue-500 to-cyan-400",
        title: "Custom Business Software",
        slug: "custom-business-software",
        headline: "CRMs, dashboards, work orders, internal tools",
        description:
            "Internal platforms shaped around your workflows — not the other way around. Shipped across 4+ industries.",
        tag: "In production across 4 industries",
    },
    {
        icon: Terminal,
        color: "from-sky-500 to-cyan-400",
        title: "Custom CRM Development",
        slug: "custom-crm-development",
        headline: "Pipeline software for the way you actually sell",
        description:
            "Custom CRMs built on Next.js + PostgreSQL. Pipeline, automation, reporting. You own the code — no per-seat tax.",
        tag: "8 to 16 weeks to production",
    },
    {
        icon: Globe,
        color: "from-cyan-500 to-emerald-400",
        title: "Next.js Web Applications",
        slug: "web-applications",
        headline: "SaaS apps, client portals, platforms",
        description:
            "Full-stack web applications built on Next.js and deployed on Vercel with global CDN. Built for real use, not demos.",
        tag: "Full-stack web apps in production",
    },
    {
        icon: Lock,
        color: "from-pink-500 to-violet-400",
        title: "Cloud Infrastructure & DevOps",
        slug: "cloud-infrastructure",
        headline: "Deploy, monitor, scale — without the 3am pages.",
        description:
            "Docker, Nginx, CI/CD, auto-scaling, Sentry monitoring on DigitalOcean, Fly.io, and Vercel. Zero unplanned outages.",
        tag: "Zero unplanned outages",
    },
    {
        icon: Bot,
        color: "from-violet-500 to-blue-400",
        title: "Algorithmic Trading Systems",
        slug: "algorithmic-trading-systems",
        headline: "Live trading bots running real money",
        description:
            "MA Supertrend, VWAP, momentum, multi-strategy setups. Real-time market feeds, configurable risk, 24/7 uptime.",
        tag: "5 live systems deployed",
    },
    {
        icon: Database,
        color: "from-sky-500 to-cyan-400",
        title: "Data Engineering",
        slug: "data-engineering",
        headline: "ETL/ELT pipelines and a warehouse you own",
        description:
            "Pipelines from Stripe, QuickBooks, and your app database into a tested Postgres, BigQuery, or Snowflake warehouse — the clean data layer your dashboards can trust.",
        tag: "ELT with dbt, tested on every run",
    },
    {
        icon: BarChart3,
        color: "from-violet-500 to-fuchsia-400",
        title: "Business Intelligence Dashboards",
        slug: "business-intelligence-dashboards",
        headline: "KPI reporting everyone actually trusts",
        description:
            "Executive dashboards, embedded analytics, and a governed semantic layer where each metric is defined once. One source of truth — no per-viewer license tax.",
        tag: "One definition per metric",
    },
    {
        icon: RefreshCw,
        color: "from-amber-500 to-orange-400",
        title: "Legacy System Modernization",
        slug: "legacy-system-modernization",
        headline: "Replatform without the big-bang rewrite",
        description:
            "Strangler-fig migrations that move capability by capability behind a routing layer. Every cutover is parity-tested and reversible — the business never stands still.",
        tag: "Reversible, capability-by-capability",
    },
    {
        icon: Rocket,
        color: "from-emerald-500 to-teal-400",
        title: "MVP Development",
        slug: "mvp-development",
        headline: "A real first version in 6 to 10 weeks",
        description:
            "Scoped down to the one feature that proves your idea, built on a production Next.js stack you own outright — ready for users and investors, not a throwaway prototype.",
        tag: "6 to 10 weeks to launch",
    },
    {
        icon: FileSearch,
        color: "from-sky-500 to-indigo-400",
        title: "Technical Due Diligence",
        slug: "technical-due-diligence",
        headline: "Independent code and security review before you invest",
        description:
            "Code, architecture, and security review for investors and acquirers, delivered as a plain-English risk report with severity-ranked findings and a remediation estimate.",
        tag: "Severity-ranked findings report",
    },
    {
        icon: Compass,
        color: "from-indigo-500 to-violet-400",
        title: "Fractional CTO Services",
        slug: "fractional-cto-services",
        headline: "Senior technical leadership, part-time",
        description:
            "Architecture, technology strategy, engineering hiring, and a roadmap your board can trust — on a month-to-month retainer, aimed at making the role unnecessary as your team grows.",
        tag: "Month-to-month, no lock-in",
    },
    {
        icon: Cloud,
        color: "from-cyan-500 to-sky-400",
        title: "Cloud Migration",
        slug: "cloud-migration",
        headline: "Move clouds without downtime or a surprise bill",
        description:
            "Migrate onto, between, or off the cloud with infrastructure as code, parity testing, and an instant rollback — then right-size the result so the monthly bill drops.",
        tag: "Parity-tested, infrastructure as code",
    },
    {
        icon: FlaskConical,
        color: "from-rose-500 to-pink-400",
        title: "QA & Test Automation",
        slug: "qa-and-test-automation",
        headline: "Catch regressions in the PR, not in production",
        description:
            "A test strategy matched to your real risk, fast unit, integration, and end-to-end suites, and CI gates that block a broken build before it reaches users. You own the tests.",
        tag: "CI gates on every merge",
    },
];

const paymentsAndLicensing: ServiceCard[] = [
    {
        icon: CreditCard,
        color: "from-emerald-500 to-cyan-400",
        title: "Stripe Integration",
        slug: "stripe-integration",
        headline: "Production-grade Stripe Checkout, Billing, and webhooks",
        description:
            "Stripe Checkout, Stripe Billing, subscription lifecycle webhooks, customer portal, and tax handling — wired into Next.js the right way.",
        tag: "Founder-led Stripe builds",
    },
    {
        icon: CreditCard,
        color: "from-emerald-500 to-teal-400",
        title: "Subscription Billing",
        slug: "subscription-billing",
        headline: "Recurring revenue infrastructure that doesn't leak",
        description:
            "Plan tiers, metered usage, proration, dunning, churn recovery, revenue dashboards. Stripe Billing or custom — your call.",
        tag: "Recurring revenue done right",
    },
    {
        icon: Lock,
        color: "from-amber-500 to-orange-400",
        title: "Software Licensing System",
        slug: "license-server",
        headline: "License keys, JWT validation, seat management",
        description:
            "License servers with JWT validation, usage tracking, machine fingerprinting, and seat management for desktop, SaaS, and bot distribution.",
        tag: "Licensed bot and SaaS distribution",
    },
    {
        icon: CreditCard,
        color: "from-emerald-500 to-cyan-400",
        title: "Payments, Invoicing & Licensing",
        slug: "payments-invoicing-licensing",
        headline: "Get paid. Manage access. Ship software.",
        description:
            "The combined parent service — Stripe, ACH, auto-invoicing, revenue dashboards, license servers, and seat management.",
        tag: "Live payment and licensing systems shipped",
    },
];

const cyberAndPentest: ServiceCard[] = [
    {
        icon: Shield,
        color: "from-red-500 to-orange-400",
        title: "Penetration Testing",
        slug: "penetration-testing",
        headline: "We break in so someone else doesn't.",
        description:
            "Full-scope pentests across network, wireless, web app, and Active Directory. Custom 11-module red team toolkit, mapped to MITRE ATT&CK.",
        tag: "Custom red team toolkit with 11 attack modules",
    },
    {
        icon: Shield,
        color: "from-rose-500 to-red-400",
        title: "Web Application Pentest",
        slug: "web-app-pentest",
        headline: "Real exploits, not just Burp scan output",
        description:
            "OWASP Top 10, IDOR chains, broken auth, business-logic bugs, API security. Manual exploitation against staging or production.",
        tag: "Manual exploitation, real payloads",
    },
    {
        icon: Shield,
        color: "from-red-500 to-pink-400",
        title: "Network Pentest",
        slug: "network-pentest",
        headline: "Internal and external network attack simulation",
        description:
            "Perimeter assessment, internal pivot testing, lateral movement, credential abuse, and detection-evasion playbooks for your blue team.",
        tag: "Internal + external scopes",
    },
    {
        icon: Shield,
        color: "from-red-500 to-amber-400",
        title: "Active Directory Pentest",
        slug: "active-directory-pentest",
        headline: "Kerberoasting, ADCS abuse, Domain Admin path",
        description:
            "Full AD attack chain: Kerberoasting, AS-REP, ADCS (ESC1–ESC11), delegation abuse, credential dumping, and the path to Domain Admin.",
        tag: "Standard user to Domain Admin",
    },
    {
        icon: Shield,
        color: "from-orange-500 to-red-400",
        title: "MITRE ATT&CK Assessment",
        slug: "mitre-attack-assessment",
        headline: "Map your defenses to real adversary TTPs",
        description:
            "Threat-emulation engagements that exercise documented APT/ransomware TTPs and produce a defended/missed heatmap for your SOC.",
        tag: "ATT&CK-mapped purple team",
    },
];

const citySlugs: { slug: string; city: string; state: string }[] = [
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

const industries: { slug: string; name: string; blurb: string }[] = [
    { slug: "fintech", name: "Fintech", blurb: "Trading systems, payments, brokerage integrations." },
    { slug: "construction", name: "Construction", blurb: "Estimating, lead routing, project tracking." },
    { slug: "insurance", name: "Insurance", blurb: "Policy management, claims, agent portals." },
    { slug: "e-commerce", name: "E-Commerce", blurb: "Custom carts, subscription billing, Shopify alternatives." },
    { slug: "healthcare", name: "Healthcare", blurb: "HIPAA-aware platforms, intake, scheduling, ops dashboards." },
];

function ServiceGrid({ items }: { items: ServiceCard[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((service, idx) => {
                const Icon = service.icon;
                return (
                    <AnimatedSection key={service.slug} delay={idx * 0.05}>
                        <Link href={`/services/${service.slug}`} className="block h-full group">
                            <div className="relative h-full rounded-2xl border border-white/5 bg-[#0d1526]/80 backdrop-blur-sm p-7 overflow-hidden transition-all duration-300 group-hover:border-sky-400/30 group-hover:bg-[#0d1526]">
                                <div className="flex flex-col h-full">
                                    <div
                                        className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${service.color} bg-opacity-10 mb-5 w-fit`}
                                    >
                                        <Icon className="w-5 h-5 text-white" />
                                    </div>

                                    <div className="mb-3">
                                        <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase mb-1">{service.title}</p>
                                        <h3 className="text-lg font-bold text-white leading-snug">{service.headline}</h3>
                                    </div>

                                    <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-grow">
                                        {service.description}
                                    </p>

                                    <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                                        <p className={`text-xs font-medium text-transparent bg-clip-text bg-gradient-to-r ${service.color}`}>
                                            {service.tag}
                                        </p>
                                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </AnimatedSection>
                );
            })}
        </div>
    );
}

const ALL_SERVICE_CARDS = [...buildAndShip, ...paymentsAndLicensing, ...cyberAndPentest];

const servicesCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/services#collection`,
    url: `${SITE_URL}/services`,
    name: "Software Development & Cybersecurity Services — QUANT LAB USA",
    description:
        "Custom CRMs, Stripe integrations, Next.js apps, penetration testing — built for businesses in Atlanta, Macon, and 12 more US cities.",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORGANIZATION_ID },
    inLanguage: "en-US",
    mainEntity: {
        "@type": "ItemList",
        name: "QUANT LAB USA Services Catalog",
        numberOfItems: ALL_SERVICE_CARDS.length,
        itemListElement: ALL_SERVICE_CARDS.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${SITE_URL}/services/${s.slug}`,
            name: s.title,
        })),
    },
};

export default function ServicesIndexPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <JsonLd data={servicesCollectionSchema} />
            <JsonLd data={servicesBreadcrumb} />
            <section className="container mx-auto px-6 relative z-10">
                <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
                    <nav aria-label="Breadcrumb" className="mb-6">
                        <ol className="flex items-center justify-center gap-2 text-xs text-gray-400">
                            <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                            <li aria-hidden="true" className="text-gray-700">›</li>
                            <li className="text-gray-300">Services</li>
                        </ol>
                    </nav>
                    <span className="inline-block text-quant-blue text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                        What We Offer
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
                        Software Development &amp; Cybersecurity Services
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                        What we build, end to end — custom CRMs, Stripe and licensing infrastructure, Next.js apps, and full-scope penetration testing.
                    </p>
                </AnimatedSection>

                {/* Build & Ship */}
                <AnimatedSection className="mb-12">
                    <div className="mb-8 max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Build &amp; Ship</h2>
                        <p className="text-gray-400 leading-relaxed">
                            Custom software, CRMs, Next.js apps, cloud infrastructure, and algorithmic trading systems — production-grade work shipped end to end.
                        </p>
                    </div>
                </AnimatedSection>
                <div className="mb-20">
                    <ServiceGrid items={buildAndShip} />
                </div>

                {/* Payments, Subscriptions & Licensing */}
                <AnimatedSection className="mb-12">
                    <div className="mb-8 max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Payments, Subscriptions &amp; Licensing</h2>
                        <p className="text-gray-400 leading-relaxed">
                            Stripe Checkout, Stripe Billing, subscription lifecycle, license keys, JWT validation, and seat management — wired into your product, not bolted onto it.
                        </p>
                    </div>
                </AnimatedSection>
                <div className="mb-20">
                    <ServiceGrid items={paymentsAndLicensing} />
                </div>

                {/* Cybersecurity & Pentest */}
                <AnimatedSection className="mb-12">
                    <div className="mb-8 max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Cybersecurity &amp; Pentest</h2>
                        <p className="text-gray-400 leading-relaxed">
                            Full-scope penetration testing — network, web app, Active Directory, and MITRE ATT&amp;CK-aligned engagements. Real attacks, real evidence, real remediation.
                        </p>
                    </div>
                </AnimatedSection>
                <div className="mb-24">
                    <ServiceGrid items={cyberAndPentest} />
                </div>

                {/* Topic clusters — hub-and-spoke navigation by buyer intent */}
                <AnimatedSection className="mb-24">
                    <div className="border-t border-white/5 pt-16">
                        <TopicClusters
                            heading="Pick a cluster, not a single service"
                            intro="Most QUANT LAB engagements span three or four pages of this site — a service, a comparison, a blog deep-dive, and a calculator. These five clusters bundle the pages that go together, so you can read the whole topic in a sitting."
                        />
                    </div>
                </AnimatedSection>

                {/* Where We Serve */}
                <AnimatedSection className="mb-24">
                    <div className="border-t border-white/5 pt-16">
                        <div className="flex items-center gap-3 mb-4">
                            <MapPin className="w-6 h-6 text-sky-400" />
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Where We Serve</h2>
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-8 max-w-3xl">
                            Georgia-based, working with clients across 14 US metros. Engagements run remotely by default; in-person scoping and red-team work available in Atlanta and the Southeast.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {citySlugs.map((c) => (
                                <Link
                                    key={c.slug}
                                    href={`/software-development-${c.slug}`}
                                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0d1526]/60 px-4 py-2 text-sm text-gray-300 transition-all hover:border-sky-400/40 hover:bg-[#0d1526] hover:text-white"
                                >
                                    <MapPin className="w-3.5 h-3.5 text-sky-400" />
                                    <span>
                                        {c.city}, {c.state}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>

                {/* Industries */}
                <AnimatedSection className="mb-24">
                    <div className="border-t border-white/5 pt-16">
                        <div className="flex items-center gap-3 mb-4">
                            <Building2 className="w-6 h-6 text-emerald-400" />
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Industries We Build For</h2>
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-8 max-w-3xl">
                            Deeper context on how our software and security work shows up in specific verticals.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {industries.map((i) => (
                                <Link
                                    key={i.slug}
                                    href={`/industries/${i.slug}`}
                                    className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 transition-all hover:border-emerald-400/30"
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-white font-semibold">{i.name}</h3>
                                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                                    </div>
                                    <p className="text-sm text-gray-400 leading-relaxed">{i.blurb}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>

                {/* Compare */}
                <AnimatedSection className="mb-20">
                    <div className="border-t border-white/5 pt-16">
                        <div className="flex items-center gap-3 mb-4">
                            <GitCompare className="w-6 h-6 text-violet-400" />
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Compare</h2>
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-8 max-w-3xl">
                            Trying to decide between a SaaS platform and a custom build? Read the head-to-head.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Link
                                href="/vs/salesforce"
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-6 transition-all hover:border-violet-400/30"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold text-lg">Custom CRM vs Salesforce</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-violet-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    What you pay, what you own, and when each one is the right call.
                                </p>
                            </Link>
                            <Link
                                href="/vs/shopify"
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-6 transition-all hover:border-violet-400/30"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold text-lg">Custom Storefront vs Shopify</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-violet-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    Where Shopify wins, where it caps your unit economics, and when to leave.
                                </p>
                            </Link>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="text-center max-w-2xl mx-auto border-t border-white/5 pt-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Not sure which fits?
                    </h2>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                        Most projects touch two or three of these. Book a free consultation and we'll figure out what the right build actually looks like — or tell you if there's a better off-the-shelf option.
                    </p>
                    <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                        Or talk to us directly: <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> · <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a>
                    </p>
                    <ConsultationCTA />
                </AnimatedSection>
            </section>
        </main>
    );
}
