import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Database, Check, ArrowRight, MapPin } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Data Engineering: Pipelines, Warehouses & ETL | QUANT LAB USA",
    description:
        "Data engineering services: ETL/ELT pipelines, data warehouses, and the clean data layer your dashboards run on. Founder-led, fixed-quote, USA. Free scope call.",
    slug: "services/data-engineering",
    image: "/og-services.png",
    type: "article",
});

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Data Engineering",
    name: "Data Engineering and Pipeline Development",
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Founder-led data engineering for teams whose reporting is held together by brittle spreadsheets and overnight scripts. We build ETL and ELT pipelines, model a warehouse on Postgres, BigQuery, or Snowflake, and stand up the clean, tested data layer that BI dashboards and product analytics can actually trust. You own the warehouse, the transformation code, and the orchestration.",
    url: "https://quantlabusa.dev/services/data-engineering",
    offers: {
        "@type": "Offer",
        priceRange: "$12,000-$90,000",
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
        { "@type": "ListItem", position: 3, name: "Data Engineering", item: "https://quantlabusa.dev/services/data-engineering" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is the difference between ETL and ELT, and which do you use?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "ETL transforms data before it lands in the warehouse; ELT loads raw data first and transforms it in-warehouse with SQL. We default to ELT with dbt because modern warehouses are cheap to compute against and version-controlled SQL transformations are far easier to test and audit. We use classic ETL when the source is rate-limited or the data must be cleaned before it ever touches storage.",
            },
        },
        {
            "@type": "Question",
            name: "Do we need a Snowflake or BigQuery warehouse, or is Postgres enough?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Most small and mid-market companies are well served by a dedicated Postgres warehouse for a long time, and we will tell you that on the first call rather than sell you a Snowflake contract you do not need. We move teams to BigQuery or Snowflake when query volume, concurrency, or data size genuinely outgrows Postgres.",
            },
        },
        {
            "@type": "Question",
            name: "Can you pull data from our existing tools — Stripe, QuickBooks, HubSpot, our app database?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Stripe, QuickBooks, HubSpot, Salesforce, Shopify, Google Analytics, and your production application database are all common sources. We use managed connectors where they make sense and write custom extractors for APIs that do not have one.",
            },
        },
        {
            "@type": "Question",
            name: "How do you make sure the numbers are actually correct?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Every transformation ships with data tests — uniqueness, referential integrity, freshness, and accepted-value checks — that run on each pipeline execution. When a source changes shape or a row count drops unexpectedly, the pipeline alerts before a wrong number reaches a dashboard.",
            },
        },
        {
            "@type": "Question",
            name: "Who owns the pipelines and the warehouse when the project ends?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "You do. The warehouse lives in your cloud account, the transformation code is in your GitHub repository, and the orchestration config is documented. There is no proprietary middleware and no per-row platform fee. Any data engineer can take it over.",
            },
        },
        {
            "@type": "Question",
            name: "How long does a data engineering project take?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A first warehouse with two or three core sources and a tested transformation layer typically takes 4 to 8 weeks. Larger platforms with many sources, change-data-capture, and a full semantic layer run 8 to 16 weeks. We always ship a usable first model before expanding coverage.",
            },
        },
    ],
};

export default function DataEngineeringPage() {
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
                        <li className="text-gray-300">Data Engineering</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Database className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Data Engineering for Teams Drowning in Spreadsheet Reports
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        ETL and ELT pipelines, a warehouse you own, and a clean, tested data layer your dashboards can trust. Founder-led data engineering that ends the nightly export-and-pray ritual.
                    </p>
                    <ConsultationCTA label="Scope a Data Pipeline" service="Data Engineering" source="services-data-engineering" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When raw data stops being trustworthy</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Most companies do not have a reporting problem. They have a data problem. The Stripe export does not reconcile with QuickBooks. The HubSpot pipeline lives in a different shape than the product database. Someone built an overnight Python script two years ago, that person left, and now nobody is sure whether last quarter&apos;s revenue number is right. Every executive meeting starts with ten minutes of arguing about whose spreadsheet is correct.
                        </p>
                        <p>
                            Data engineering fixes the layer underneath the reporting. We pull every source into one warehouse, model it into clean tables that mean the same thing everywhere, and put automated tests around the numbers so a broken source fails loudly instead of silently corrupting a board deck. Once the data layer is trustworthy, the dashboards and analytics built on top of it finally agree with each other.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build</h2>
                    <ul className="space-y-3">
                        {[
                            "ETL and ELT pipelines from Stripe, QuickBooks, HubSpot, Salesforce, Shopify, your app database, and flat files",
                            "A warehouse modeled on Postgres, BigQuery, or Snowflake — right-sized to your real query volume",
                            "Transformation layer in dbt: version-controlled SQL models, staging and mart layers, documented lineage",
                            "Data quality tests — uniqueness, freshness, referential integrity, accepted values — on every run",
                            "Orchestration with scheduling, retries, and dependency graphs so pipelines run reliably and recover cleanly",
                            "Change-data-capture and incremental loads so large tables refresh in minutes, not hours",
                            "A clean, documented data layer ready for BI dashboards, product analytics, or a reverse-ETL sync",
                            "Backfill and historical migration so your warehouse starts with all the history, not just today forward",
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
                            One-week data audit first. We map your sources, the questions you are actually trying to answer, and where the current numbers diverge. You get a one-page document with the proposed warehouse, the source list, and a phased estimate. The audit is billed separately at $2,500 so you can decide before committing to the full build — and it is useful even if you hand it to another team.
                        </p>
                        <p>
                            From there we build in vertical slices: one source, modeled end-to-end into a tested mart, with a working query on top, before adding the next. You see correct numbers in week two instead of waiting two months for a big-bang launch. We hand off the warehouse, the dbt project, and the runbooks to your team — no proprietary platform to rent.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Process &amp; timeline</h2>
                    <ul className="space-y-3">
                        {[
                            "Week 1: Data audit — source mapping, metric definitions, warehouse recommendation, phased estimate",
                            "Week 2-3: Foundations — warehouse stood up, first source ingested, staging models and tests in place",
                            "Week 4-6: Modeling — core marts built, lineage documented, data quality tests on every run",
                            "Week 7-12: Expansion — remaining sources, incremental loads, change-data-capture, semantic layer",
                            "Optional retainer: new sources, model changes, and pipeline maintenance as your reporting evolves",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech &amp; tools</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            "PostgreSQL warehouse",
                            "BigQuery + Snowflake",
                            "dbt",
                            "Python + SQL",
                            "Airflow / Dagster",
                            "Fivetran / Airbyte",
                            "Change-data-capture",
                            "Great Expectations",
                            "Docker",
                        ].map((tool) => (
                            <div key={tool} className="rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 text-sm text-gray-300">
                                {tool}
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                        The data layer behind every <Link href="/services/business-intelligence-dashboards" className="text-sky-400 hover:underline">BI dashboard</Link> we ship and a natural companion to <Link href="/services/api-development" className="text-sky-400 hover:underline">API development</Link>. New to the concept? Start with <Link href="/glossary/what-is-a-data-warehouse" className="text-sky-400 hover:underline">what is a data warehouse</Link>. Hosted on your cloud accounts, in your name.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we approach it</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            We treat the warehouse as a product, not a dumping ground. Raw sources land untouched in a staging schema so you always have an audit trail back to the original system. Transformations are SQL in version control, reviewed like any other code, with tests that gate every change. The result is a warehouse where the lineage of any number — from board metric back to source row — is one query away.
                        </p>
                        <p>
                            We dogfood this. Our own sales and revenue reporting runs on the same ELT-into-Postgres-with-dbt pattern we ship to clients: deduplicated contacts, reconciled Stripe and QuickBooks figures, and tested marts behind every dashboard. We build the data layer the way we would want to inherit it.
                        </p>
                        <p>
                            Founder-led from audit to handoff, delivered remotely to clients across the United States from our base in Macon, Georgia.
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
                            <li>One-week data audit with warehouse recommendation: $2,500 flat</li>
                            <li>Postgres warehouse with two to three sources and a tested dbt model: $12k – $28k</li>
                            <li>Multi-source warehouse with incremental loads and a semantic layer: $30k – $60k</li>
                            <li>BigQuery or Snowflake platform with change-data-capture and many sources: $55k – $90k</li>
                            <li>Spreadsheet-and-script teardown rebuilt as a tested, orchestrated pipeline: $18k – $45k</li>
                        </ul>
                        <p>
                            Optional monthly retainer for new sources, model changes, and pipeline maintenance as your reporting needs grow.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What you get</h2>
                    <ul className="space-y-3">
                        {[
                            "A warehouse in your cloud account, in your name",
                            "The full dbt transformation project in your GitHub repository",
                            "Data quality tests running on every pipeline execution",
                            "Documented lineage from source row to reporting metric",
                            "Orchestration config with scheduling, retries, and alerting",
                            "Historical backfill so the warehouse starts with all your history",
                            "Runbooks so your team can operate and extend the pipelines",
                            "Optional retainer for new sources and ongoing maintenance",
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
                                q: "What is the difference between ETL and ELT, and which do you use?",
                                a: "ETL transforms data before it lands in the warehouse; ELT loads raw data first and transforms it in-warehouse with SQL. We default to ELT with dbt because modern warehouses are cheap to compute against and version-controlled SQL transformations are far easier to test and audit. We use classic ETL when the source is rate-limited or the data must be cleaned before it ever touches storage.",
                            },
                            {
                                q: "Do we need a Snowflake or BigQuery warehouse, or is Postgres enough?",
                                a: "Most small and mid-market companies are well served by a dedicated Postgres warehouse for a long time, and we will tell you that on the first call rather than sell you a Snowflake contract you do not need. We move teams to BigQuery or Snowflake when query volume, concurrency, or data size genuinely outgrows Postgres.",
                            },
                            {
                                q: "Can you pull data from our existing tools — Stripe, QuickBooks, HubSpot, our app database?",
                                a: "Yes. Stripe, QuickBooks, HubSpot, Salesforce, Shopify, Google Analytics, and your production application database are all common sources. We use managed connectors where they make sense and write custom extractors for APIs that do not have one.",
                            },
                            {
                                q: "How do you make sure the numbers are actually correct?",
                                a: "Every transformation ships with data tests — uniqueness, referential integrity, freshness, and accepted-value checks — that run on each pipeline execution. When a source changes shape or a row count drops unexpectedly, the pipeline alerts before a wrong number reaches a dashboard.",
                            },
                            {
                                q: "Who owns the pipelines and the warehouse when the project ends?",
                                a: "You do. The warehouse lives in your cloud account, the transformation code is in your GitHub repository, and the orchestration config is documented. There is no proprietary middleware and no per-row platform fee. Any data engineer can take it over.",
                            },
                            {
                                q: "How long does a data engineering project take?",
                                a: "A first warehouse with two or three core sources and a tested transformation layer typically takes 4 to 8 weeks. Larger platforms with many sources, change-data-capture, and a full semantic layer run 8 to 16 weeks. We always ship a usable first model before expanding coverage.",
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
                        topics={["saas", "stack", "build-vs-buy"]}
                        heading="Data & platform reading"
                        pinned={["building-multi-tenant-saas-postgres-rls", "2026-state-of-custom-software-development"]}
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { slug: "business-intelligence-dashboards", title: "Business Intelligence Dashboards", desc: "Reporting and KPI dashboards built on the data layer we engineer." },
                            { slug: "api-development", title: "API Development", desc: "REST and GraphQL APIs to feed and serve your warehouse." },
                            { slug: "cloud-infrastructure", title: "Cloud Infrastructure", desc: "The compute and storage your pipelines and warehouse run on." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
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
                    <p className="text-sm text-gray-400 mt-6 leading-relaxed">
                        Serving data-heavy teams in <Link href="/industries/fintech" className="text-sky-400 hover:underline">fintech</Link> and <Link href="/industries/saas" className="text-sky-400 hover:underline">SaaS</Link>. To scope a pipeline, <Link href="/contact" className="text-sky-400 hover:underline">contact us</Link> or review <Link href="/pricing" className="text-sky-400 hover:underline">pricing</Link>.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <MapPin className="w-6 h-6 text-sky-400" />
                        <h2 className="text-2xl md:text-3xl font-bold text-white">Data Engineering — Where We Serve</h2>
                    </div>
                    <p className="text-gray-400 leading-relaxed mb-6 max-w-3xl">
                        Georgia-based engineering team serving clients nationwide. Data engineering runs remotely with scoped, read-only access to your sources and cloud account; in-person working sessions are available in Atlanta and the Southeast.
                    </p>
                    <p className="text-gray-400 leading-relaxed max-w-3xl">
                        Founder-led from the first audit through handoff. See the full <Link href="/services" className="text-sky-400 hover:underline">services lineup</Link> or read about our <Link href="/services/devops-engineering" className="text-sky-400 hover:underline">DevOps engineering</Link> practice that keeps these pipelines running.
                    </p>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Stop arguing about whose spreadsheet is right.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz directly at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or book a 20-minute scope call. We will map your sources and tell you what a trustworthy data layer actually takes.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" service="Data Engineering" source="services-data-engineering" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
