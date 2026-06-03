import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { ChartColumn, Check, ArrowRight, MapPin } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Business Intelligence Dashboards & KPI Reporting | QUANT LAB USA",
    description:
        "Custom BI dashboards, KPI reporting, and embedded analytics built on a data layer you own. Founder-led, fixed-quote, USA. Call (770) 652-1282 for a free scope call.",
    slug: "services/business-intelligence-dashboards",
    image: "/og-services.png",
    type: "article",
});

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Business Intelligence Dashboards",
    name: "Business Intelligence Dashboards and Reporting",
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Founder-led business intelligence for teams that need one source of truth instead of a folder full of dueling spreadsheets. We build KPI dashboards, executive reporting, and embedded analytics on a governed data layer, with metric definitions everyone agrees on. You own the dashboards, the queries, and the data — no per-viewer license tax.",
    url: "https://quantlabusa.dev/services/business-intelligence-dashboards",
    offers: {
        "@type": "Offer",
        priceRange: "$8,000-$60,000",
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
        { "@type": "ListItem", position: 3, name: "Business Intelligence Dashboards", item: "https://quantlabusa.dev/services/business-intelligence-dashboards" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Should we use Looker, Power BI, Metabase, or a custom-built dashboard?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "It depends on the audience. For internal analysts, an off-the-shelf tool like Metabase or Power BI on top of a clean warehouse is usually the right call, and we will set it up rather than overbuild. For dashboards your own customers see inside your product, a custom embedded build gives you full control of the look, performance, and permissions. We recommend the cheaper path when it fits.",
            },
        },
        {
            "@type": "Question",
            name: "Our numbers never match between tools — can BI fix that?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "That is the core problem BI solves. Mismatched numbers almost always come from each tool defining a metric its own way. We agree on a single definition for each KPI, encode it once in a governed semantic layer, and have every dashboard read from that. The dashboards stop disagreeing because they are computing the same thing.",
            },
        },
        {
            "@type": "Question",
            name: "Do you build the data pipeline too, or only the dashboards?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Both, as needed. A dashboard is only as good as the data underneath it. If you already have a clean warehouse, we build on it. If you do not, we pair this with our data engineering work to stand up the pipelines and warehouse first, then put the reporting on top.",
            },
        },
        {
            "@type": "Question",
            name: "Can we embed dashboards inside our own application for customers?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Embedded analytics — per-tenant dashboards inside your SaaS product with row-level security so each customer sees only their own data — is a common build. We handle the permission model, caching, and performance so it stays fast as you add customers.",
            },
        },
        {
            "@type": "Question",
            name: "Will we be locked into per-viewer license fees?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Not with a custom build. You own the dashboards, the queries, and the data, and you can give access to as many people as you like. If we deploy an open-source tool like Metabase, there is no per-seat ransom either. We steer you away from per-viewer pricing traps wherever we can.",
            },
        },
        {
            "@type": "Question",
            name: "How long does a BI dashboard project take?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "If the data layer is already clean, a focused executive dashboard ships in 2 to 4 weeks. With data modeling included it is typically 5 to 10 weeks. Embedded, multi-tenant analytics inside a product runs longer depending on the permission and performance requirements.",
            },
        },
    ],
};

export default function BusinessIntelligenceDashboardsPage() {
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
                        <li className="text-gray-300">Business Intelligence Dashboards</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-400 mb-6">
                        <ChartColumn className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Business Intelligence Dashboards That Everyone Actually Trusts
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        KPI dashboards, executive reporting, and embedded analytics built on one governed data layer — so your team stops arguing about whose number is right and starts making decisions.
                    </p>
                    <ConsultationCTA label="Scope a Dashboard Build" service="Business Intelligence Dashboards" source="services-bi-dashboards" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why most dashboards fail</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Most companies do not lack dashboards. They have too many — one in the CRM, one in the payment processor, one a finance analyst rebuilds in a spreadsheet every Monday, and three half-finished views in a BI tool nobody trusts. Each defines &quot;active customer&quot; or &quot;monthly revenue&quot; slightly differently, so the numbers never match, and leadership quietly stops believing any of them.
                        </p>
                        <p>
                            Good business intelligence is not about prettier charts. It is about agreeing on what each metric means, encoding that definition once, and serving every dashboard from the same governed layer. When the marketing report, the board deck, and the in-product analytics all compute revenue the same way, the dashboards finally agree — and people start acting on them instead of double-checking them.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build</h2>
                    <ul className="space-y-3">
                        {[
                            "Executive and KPI dashboards — revenue, retention, pipeline, unit economics — on one source of truth",
                            "A governed semantic layer where each metric is defined once and reused everywhere",
                            "Departmental reporting for sales, finance, operations, and marketing with role-based access",
                            "Embedded, multi-tenant analytics inside your product with row-level security per customer",
                            "Self-serve exploration for analysts using Metabase, Power BI, or Looker on your warehouse",
                            "Automated refresh, scheduled email and Slack digests, and threshold-based alerting",
                            "Cohort, funnel, and time-series views built on tested data, not screenshot-and-paste",
                            "Mobile-friendly views so leadership can check the numbers without opening a laptop",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Our methodology</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            One-week metrics workshop first. We sit down with the people who actually use the numbers and pin down a single definition for each KPI — what counts, what is excluded, and over what window. You get a one-page metrics dictionary and a dashboard plan. The workshop is billed separately at $2,500 so you can commit to the build with eyes open, and the dictionary is valuable on its own.
                        </p>
                        <p>
                            From there we build the most-used dashboard first and get it in front of leadership before expanding. We will tell you honestly when an off-the-shelf tool on a clean warehouse beats a custom build — we would rather configure Metabase well than sell you a bespoke dashboard you do not need. You own the queries, the definitions, and the data.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Process &amp; timeline</h2>
                    <ul className="space-y-3">
                        {[
                            "Week 1: Metrics workshop — KPI definitions, audience mapping, dashboard plan, tool recommendation",
                            "Week 2-3: Semantic layer — metric definitions encoded once, validated against known-good figures",
                            "Week 4-6: First dashboards — executive and top departmental views built and reviewed with users",
                            "Week 7-10: Rollout — remaining reports, alerting, scheduled digests, and access controls",
                            "Optional retainer: new metrics, dashboards, and embedded analytics as the business evolves",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech &amp; tools</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            "Next.js 16 + App Router",
                            "PostgreSQL + warehouse",
                            "Metabase",
                            "Power BI + Looker",
                            "dbt semantic layer",
                            "Recharts / Visx",
                            "Row-level security",
                            "Scheduled refresh",
                            "Slack + email digests",
                        ].map((tool) => (
                            <div key={tool} className="rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 text-sm text-gray-300">
                                {tool}
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                        Reporting only matters when the data underneath it is clean — which is why this pairs with <Link href="/services/data-engineering" className="text-violet-400 hover:underline">data engineering</Link>. Embedded dashboards inside a product are a natural fit for <Link href="/services/saas-platform-development" className="text-violet-400 hover:underline">SaaS platforms</Link>. Hosted on your cloud accounts, in your name.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we approach it</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            We start from decisions, not charts. Before building anything we ask which decision each dashboard is supposed to support, then design the view around that decision. A revenue dashboard that nobody acts on is worse than no dashboard, because it costs maintenance and erodes trust. Every metric we ship traces back to a tested query, so when someone questions a number we can show exactly how it was computed.
                        </p>
                        <p>
                            We dogfood this. Our internal revenue and sales reporting runs on the same governed-semantic-layer pattern we ship to clients — one definition per metric, tested marts underneath, and dashboards that agree with the accounting. We build the reporting the way we would want to rely on it ourselves.
                        </p>
                        <p>
                            Founder-led from workshop to handoff, delivered remotely to clients across the United States from our base in Macon, Georgia.
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
                            <li>One-week metrics workshop with a KPI dictionary and dashboard plan: $2,500 flat</li>
                            <li>Executive dashboard on an existing clean warehouse: $8k – $18k</li>
                            <li>Full BI rollout with semantic layer, departmental reports, and alerting: $20k – $45k</li>
                            <li>Embedded, multi-tenant analytics inside your product with row-level security: $30k – $60k</li>
                            <li>Metabase or Power BI setup on a warehouse we model for you: $15k – $35k</li>
                        </ul>
                        <p>
                            Optional monthly retainer for new metrics, dashboards, and embedded analytics as the business grows.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What you get</h2>
                    <ul className="space-y-3">
                        {[
                            "A one-page metrics dictionary your whole team agrees on",
                            "Dashboards and reports you own, with no per-viewer license tax",
                            "A governed semantic layer that keeps every report consistent",
                            "All queries and dashboard definitions in your GitHub repository",
                            "Role-based access and, for embedded use, per-tenant row-level security",
                            "Scheduled refresh, email and Slack digests, and threshold alerts",
                            "Handoff documentation so your analysts can extend it",
                            "Optional retainer for new metrics and dashboards",
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
                                q: "Should we use Looker, Power BI, Metabase, or a custom-built dashboard?",
                                a: "It depends on the audience. For internal analysts, an off-the-shelf tool like Metabase or Power BI on top of a clean warehouse is usually the right call, and we will set it up rather than overbuild. For dashboards your own customers see inside your product, a custom embedded build gives you full control of the look, performance, and permissions. We recommend the cheaper path when it fits.",
                            },
                            {
                                q: "Our numbers never match between tools — can BI fix that?",
                                a: "That is the core problem BI solves. Mismatched numbers almost always come from each tool defining a metric its own way. We agree on a single definition for each KPI, encode it once in a governed semantic layer, and have every dashboard read from that. The dashboards stop disagreeing because they are computing the same thing.",
                            },
                            {
                                q: "Do you build the data pipeline too, or only the dashboards?",
                                a: "Both, as needed. A dashboard is only as good as the data underneath it. If you already have a clean warehouse, we build on it. If you do not, we pair this with our data engineering work to stand up the pipelines and warehouse first, then put the reporting on top.",
                            },
                            {
                                q: "Can we embed dashboards inside our own application for customers?",
                                a: "Yes. Embedded analytics — per-tenant dashboards inside your SaaS product with row-level security so each customer sees only their own data — is a common build. We handle the permission model, caching, and performance so it stays fast as you add customers.",
                            },
                            {
                                q: "Will we be locked into per-viewer license fees?",
                                a: "Not with a custom build. You own the dashboards, the queries, and the data, and you can give access to as many people as you like. If we deploy an open-source tool like Metabase, there is no per-seat ransom either. We steer you away from per-viewer pricing traps wherever we can.",
                            },
                            {
                                q: "How long does a BI dashboard project take?",
                                a: "If the data layer is already clean, a focused executive dashboard ships in 2 to 4 weeks. With data modeling included it is typically 5 to 10 weeks. Embedded, multi-tenant analytics inside a product runs longer depending on the permission and performance requirements.",
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
                        topics={["saas", "build-vs-buy", "stack"]}
                        heading="Reporting & data reading"
                        pinned={["building-multi-tenant-saas-postgres-rls", "build-vs-buy-software-2026"]}
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { slug: "data-engineering", title: "Data Engineering", desc: "The pipelines and warehouse your dashboards depend on." },
                            { slug: "saas-platform-development", title: "SaaS Platform Development", desc: "Where embedded, per-tenant analytics live inside your product." },
                            { slug: "custom-business-software", title: "Custom Business Software", desc: "Internal tools and ops dashboards beyond reporting." },
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
                    <p className="text-sm text-gray-400 mt-6 leading-relaxed">
                        Reporting for <Link href="/industries/saas" className="text-violet-400 hover:underline">SaaS</Link>, <Link href="/industries/fintech" className="text-violet-400 hover:underline">fintech</Link>, and <Link href="/industries/manufacturing" className="text-violet-400 hover:underline">manufacturing</Link> teams. To scope a dashboard, <Link href="/contact" className="text-violet-400 hover:underline">contact us</Link> or see <Link href="/pricing" className="text-violet-400 hover:underline">pricing</Link>.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <MapPin className="w-6 h-6 text-violet-400" />
                        <h2 className="text-2xl md:text-3xl font-bold text-white">BI Dashboards — Where We Serve</h2>
                    </div>
                    <p className="text-gray-400 leading-relaxed mb-6 max-w-3xl">
                        Georgia-based engineering team serving clients nationwide. Dashboard work runs remotely with scoped access to your warehouse; in-person review sessions are available in Atlanta and the Southeast.
                    </p>
                    <p className="text-gray-400 leading-relaxed max-w-3xl">
                        Founder-led from the metrics workshop through handoff. Browse the full <Link href="/services" className="text-violet-400 hover:underline">services lineup</Link> or pair this with <Link href="/services/data-engineering" className="text-violet-400 hover:underline">data engineering</Link> for an end-to-end build.
                    </p>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            One source of truth. Finally.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz directly at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or book a 20-minute scope call. We will pin down your KPIs and show you what a dashboard your team trusts actually takes.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" service="Business Intelligence Dashboards" source="services-bi-dashboards" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
