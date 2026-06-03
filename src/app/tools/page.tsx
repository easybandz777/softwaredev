import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import {
    ArrowRight,
    Shield,
    FileJson,
    ShieldCheck,
    Clock,
    Hash,
    Calculator,
    DollarSign,
    Building2,
    SearchCheck,
    KeyRound,
    Braces,
    Regex,
    Binary,
    ListTree,
    LineChart,
    AlertTriangle,
    Wrench,
} from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata: Metadata = pageMetadata({
    title: "Free Dev Tools & Cost Calculators (2026) | QUANT LAB USA",
    description:
        "5 free developer utilities (Stripe webhook tester, JSON-LD schema, OWASP, cron, UUID) + 4 cost calculators (build vs buy, CRM ROI, pentest, Stripe). In-browser.",
    slug: "/tools",
    keywords: [
        "free developer tools",
        "free seo tools",
        "free security tools",
        "stripe webhook tester",
        "json-ld schema generator",
        "owasp checklist",
        "cron expression builder",
        "uuid generator",
        "developer calculators",
    ],
});

const TOOLS = [
    {
        href: "/tools/stripe-webhook-tester",
        title: "Stripe Webhook Signature Tester",
        blurb: "Verify HMAC-SHA256 webhook signatures in your browser. Step-by-step output for every check — timestamp tolerance, payload format, replay defense.",
        icon: Shield,
        tag: "Security",
        color: "from-emerald-500 to-cyan-400",
    },
    {
        href: "/tools/schema-generator",
        title: "JSON-LD Schema Generator",
        blurb: "Build valid structured data for Organization, LocalBusiness, FAQPage, Article, and Product. Live validation, copy-paste ready.",
        icon: FileJson,
        tag: "SEO",
        color: "from-sky-500 to-indigo-400",
    },
    {
        href: "/tools/owasp-checklist-app",
        title: "OWASP ASVS Checklist App",
        blurb: "Interactive OWASP Application Security Verification Standard L1+L2 checklist. Progress + notes saved locally. Print or save as PDF for audits.",
        icon: ShieldCheck,
        tag: "Security",
        color: "from-rose-500 to-amber-400",
    },
    {
        href: "/tools/cron-expression-builder",
        title: "Cron Expression Builder",
        blurb: "Visual cron builder with live next-fire-times preview. Twelve curated presets for hourly, daily, weekday, monthly, yearly jobs.",
        icon: Clock,
        tag: "DevOps",
        color: "from-violet-500 to-fuchsia-400",
    },
    {
        href: "/tools/uuid-and-id-generator",
        title: "UUID & ID Generator",
        blurb: "Generate UUID v4, v7, nanoid, ULID, CUID, and short slugs. Cryptographically secure. Bulk up to 10,000. Export JSON / CSV / TXT.",
        icon: Hash,
        tag: "Developer",
        color: "from-teal-500 to-emerald-400",
    },
    {
        href: "/tools/jwt-decoder",
        title: "JWT Decoder",
        blurb: "Paste a JSON Web Token to decode its header and payload, inspect every claim, and check expiry — runs in your browser, decode-only, signatures are not verified.",
        icon: KeyRound,
        tag: "Security",
        color: "from-emerald-500 to-cyan-400",
    },
    {
        href: "/tools/json-formatter",
        title: "JSON Formatter & Validator",
        blurb: "Pretty-print, minify, or validate JSON with a clear line-and-column error message. Live as you type and entirely in your browser — nothing is uploaded.",
        icon: Braces,
        tag: "Developer",
        color: "from-sky-500 to-indigo-400",
    },
    {
        href: "/tools/regex-tester",
        title: "Regex Tester",
        blurb: "Test JavaScript regular expressions live: toggle flags, highlight matches inline, and break out every numbered and named capture group as you type.",
        icon: Regex,
        tag: "Developer",
        color: "from-violet-500 to-fuchsia-400",
    },
    {
        href: "/tools/base64-encoder-decoder",
        title: "Base64 Encoder & Decoder",
        blurb: "Encode and decode text to and from Base64 and URL-safe base64url with full UTF-8 support. Runs in your browser — your text is never uploaded.",
        icon: Binary,
        tag: "Developer",
        color: "from-rose-500 to-amber-400",
    },
    {
        href: "/tools/http-status-reference",
        title: "HTTP Status Code Reference",
        blurb: "A clean, searchable reference of HTTP status codes 1xx–5xx with plain-English meanings and when to use each. Filter by code or keyword, all in-browser.",
        icon: ListTree,
        tag: "Developer",
        color: "from-teal-500 to-cyan-400",
    },
] as const;

const CALCULATORS = [
    {
        href: "/calculators/stripe-cost",
        title: "Stripe Integration Cost Calculator",
        blurb: "Get a defensible hours + dollars range for your custom Stripe build. Subscriptions, multi-currency, Connect, tax handling, the works.",
        icon: DollarSign,
        tag: "Payments",
    },
    {
        href: "/calculators/crm-roi",
        title: "CRM ROI Calculator",
        blurb: "Quantify the return on a custom CRM versus a generic SaaS subscription, based on your team size and current process drag.",
        icon: Calculator,
        tag: "Sales Ops",
    },
    {
        href: "/calculators/pentest-cost",
        title: "Penetration Test Cost Calculator",
        blurb: "Estimate the cost of a black-box, gray-box, or white-box pentest based on your application surface, compliance needs, and timeline.",
        icon: SearchCheck,
        tag: "Security",
    },
    {
        href: "/calculators/build-vs-buy",
        title: "Build vs Buy Calculator",
        blurb: "Walk through TCO, time-to-market, and switching cost trade-offs for any major software decision. Output is a defensible recommendation.",
        icon: Building2,
        tag: "Strategy",
    },
    {
        href: "/calculators/saas-pricing-calculator",
        title: "SaaS Pricing Calculator",
        blurb: "Drop in your plan tiers, prices, and customers per tier to get live MRR, ARR, and blended ARPU — plus what your churn rate quietly costs you every year.",
        icon: LineChart,
        tag: "Pricing",
    },
    {
        href: "/calculators/downtime-cost-calculator",
        title: "Downtime Cost Calculator",
        blurb: "Turn revenue, hours down, and affected percentage into a defensible cost for a single outage — direct lost revenue plus recovery cost and reputation drag.",
        icon: AlertTriangle,
        tag: "Reliability",
    },
    {
        href: "/calculators/technical-debt-calculator",
        title: "Technical Debt Calculator",
        blurb: "Put a dollar figure on technical debt from team size, salary, and time lost, with compounding interest — and see the payback and three-year refactor payoff.",
        icon: Wrench,
        tag: "Engineering",
    },
] as const;

const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Free Tools & Calculators",
    description:
        "Hub for QUANT LAB USA's ten free interactive developer tools and seven engineering cost calculators.",
    url: "https://quantlabusa.dev/tools",
    isPartOf: { "@type": "WebSite", url: "https://quantlabusa.dev" },
    mainEntity: {
        "@type": "ItemList",
        itemListElement: [...TOOLS, ...CALCULATORS].map((t, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `https://quantlabusa.dev${t.href}`,
            name: t.title,
        })),
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Tools", item: "https://quantlabusa.dev/tools" },
    ],
};

export default function ToolsIndexPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <div className="container mx-auto px-6 max-w-6xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li>
                            <Link href="/" className="hover:text-sky-400 transition-colors">
                                Home
                            </Link>
                        </li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">Tools</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Free Tools &amp; Calculators
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-4 max-w-3xl">
                        Seventeen free utilities we built for ourselves and our clients. Ten interactive
                        developer tools plus seven engineering cost calculators.
                    </p>
                    <p className="text-base text-gray-400 leading-relaxed max-w-3xl">
                        Everything runs in your browser. No signup, no email gate on the tool
                        itself, no data sent to our servers. If a tool ever asks for your email, it
                        is for an optional PDF or follow-up — never to deliver the result.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-white">Interactive tools</h2>
                        <p className="text-xs uppercase tracking-widest text-emerald-400">5 free utilities</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                        {TOOLS.map((t) => (
                            <Link
                                key={t.href}
                                href={t.href}
                                className="group block rounded-2xl border border-white/10 bg-[#0a0f1e]/80 hover:border-sky-400/30 hover:bg-[#0d1526] transition-colors p-6 md:p-7"
                            >
                                <div className="flex items-start gap-4 mb-3">
                                    <div className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${t.color} flex-shrink-0`}>
                                        <t.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-[10px] uppercase tracking-widest text-sky-400 mb-1">
                                            {t.tag}
                                        </p>
                                        <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                                            {t.title}
                                        </h3>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed mb-4">{t.blurb}</p>
                                <p className="text-xs text-sky-400 group-hover:text-sky-300 inline-flex items-center gap-1">
                                    Open tool <ArrowRight className="w-3 h-3" />
                                </p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-white">Cost calculators</h2>
                        <p className="text-xs uppercase tracking-widest text-emerald-400">7 free calculators</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                        {CALCULATORS.map((c) => (
                            <Link
                                key={c.href}
                                href={c.href}
                                className="group block rounded-2xl border border-white/10 bg-[#0a0f1e]/80 hover:border-emerald-400/30 hover:bg-[#0d1526] transition-colors p-6 md:p-7"
                            >
                                <div className="flex items-start gap-4 mb-3">
                                    <div className="inline-flex p-2.5 rounded-xl bg-gradient-to-br from-amber-500 to-orange-400 flex-shrink-0">
                                        <c.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-[10px] uppercase tracking-widest text-emerald-400 mb-1">
                                            {c.tag}
                                        </p>
                                        <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                                            {c.title}
                                        </h3>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed mb-4">{c.blurb}</p>
                                <p className="text-xs text-emerald-400 group-hover:text-emerald-300 inline-flex items-center gap-1">
                                    Open calculator <ArrowRight className="w-3 h-3" />
                                </p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        Why we keep building free tools
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-5">
                        <p>
                            Every tool on this page started as something we wrote for ourselves —
                            usually because we got tired of pasting webhook payloads into our IDE,
                            or because a client asked us to walk them through an OWASP checklist for
                            the third time. At some point we noticed the same patterns recurring
                            across engagements, and it seemed lazy to keep them on our laptops.
                        </p>
                        <p>
                            The{" "}
                            <Link href="/tools/stripe-webhook-tester" className="text-sky-400 underline-offset-2 hover:underline">
                                Stripe webhook tester
                            </Link>{" "}
                            exists because every single Stripe integration we&apos;ve audited has
                            had at least one webhook signature failure mode — and tracking down
                            whether the issue is bodyParser, clock drift, or rotated secrets takes
                            longer than the tool itself does. The step-by-step output is the
                            checklist we&apos;d walk through manually.
                        </p>
                        <p>
                            The{" "}
                            <Link href="/tools/owasp-checklist-app" className="text-sky-400 underline-offset-2 hover:underline">
                                OWASP ASVS checklist
                            </Link>{" "}
                            is what we send to clients before a{" "}
                            <Link href="/services/penetration-testing" className="text-sky-400 underline-offset-2 hover:underline">
                                penetration test
                            </Link>
                            . They walk it, mark their gaps, send us the printed PDF — and we end up
                            doing a deeper test on the actually-interesting parts of their stack
                            instead of finding the same OWASP Top 10 issues a junior consultant
                            would catch with Burp.
                        </p>
                        <p>
                            The{" "}
                            <Link href="/tools/schema-generator" className="text-sky-400 underline-offset-2 hover:underline">
                                JSON-LD generator
                            </Link>{" "}
                            is what we use when bootstrapping a new client site to make sure the
                            home page Organization markup is right before we worry about anything
                            else. The five types we support — Organization, LocalBusiness, FAQPage,
                            Article, Product — cover 95% of what 95% of sites need.
                        </p>
                        <p>
                            The{" "}
                            <Link href="/tools/cron-expression-builder" className="text-sky-400 underline-offset-2 hover:underline">
                                cron builder
                            </Link>{" "}
                            and{" "}
                            <Link href="/tools/uuid-and-id-generator" className="text-sky-400 underline-offset-2 hover:underline">
                                UUID generator
                            </Link>{" "}
                            are the &quot;every-day&quot; utilities — the ones you pull up when you
                            need them and forget about until next time. We added them because the
                            existing free alternatives shipped with surprise ads, tracking pixels,
                            or — worse — sent data to a server. None of ours do.
                        </p>
                        <p>
                            The seven cost calculators in the second section are different in
                            nature. They&apos;re estimation tools that compress our pricing
                            knowledge — across QUANT LAB USA engagements — into something a
                            founder or CTO can use to set expectations with their board in 60
                            seconds. They&apos;re not contracts, but they are defensible ranges. If
                            you&apos;re scoping a Stripe build, a custom CRM, a security audit, or
                            a build-versus-buy decision, the calculators are a much faster starting
                            point than an open RFP.
                        </p>
                        <p>
                            Found a bug? Want a tool we haven&apos;t built yet? Email us at{" "}
                            <a href="mailto:beltz@quantlabusa.dev" className="text-sky-400 underline-offset-2 hover:underline">
                                beltz@quantlabusa.dev
                            </a>
                            . The fastest way to influence what shows up here is to ask. We treat
                            tool requests from our existing clients and prospects with the same
                            seriousness as any product feature.
                        </p>
                        <p>
                            If you&apos;re here because you&apos;re evaluating us as a vendor: these
                            tools are a representative sample of how we approach problems.
                            Step-by-step, no magic, no fake AI, no asking for an email before we
                            give you the answer. The full engagement just has a few more zeros and
                            a lot more code.{" "}
                            <Link href="/services" className="text-sky-400 underline-offset-2 hover:underline">
                                Browse what we do
                            </Link>{" "}
                            or{" "}
                            <Link href="/contact" className="text-sky-400 underline-offset-2 hover:underline">
                                book a 20-minute call
                            </Link>
                            .
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 to-emerald-500/5 p-8 md:p-12 text-center">
                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                            Tools are great. Builds are better.
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl mx-auto">
                            If you&apos;re wrestling with one of the problems these tools touch —
                            Stripe integration, structured data, application security, scheduled
                            jobs, ID strategy — let&apos;s talk. A 20-minute call usually saves a
                            week of fumbling.
                        </p>
                        <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
                            Or reach us directly:{" "}
                            <a
                                href="tel:+17706521282"
                                className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline"
                            >
                                (770) 652-1282
                            </a>{" "}
                            ·{" "}
                            <a
                                href="mailto:beltz@quantlabusa.dev"
                                className="text-current hover:text-indigo-400 underline-offset-2 hover:underline"
                            >
                                beltz@quantlabusa.dev
                            </a>
                        </p>
                        <ConsultationCTA label="Book a 20-min Call" source="tools-index" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
