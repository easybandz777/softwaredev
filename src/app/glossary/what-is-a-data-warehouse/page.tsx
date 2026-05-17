import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata: Metadata = pageMetadata({
    title: "What is a Data Warehouse? Definition & Examples | QUANT LAB USA",
    description:
        "A data warehouse is the analytics DB where teams ask hard questions across years of data. How it differs from your app DB, when you need one. By QUANT LAB USA.",
    slug: "/glossary/what-is-a-data-warehouse",
});

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Data Warehouse",
    description:
        "A data warehouse is a database optimized for analytical queries — column-oriented storage, massive parallel processing, and large historical tables — that consolidates data from multiple sources so the business can run cross-cutting reports without touching the production application database.",
    url: "https://quantlabusa.dev/glossary/what-is-a-data-warehouse",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "What is a data warehouse?", item: "https://quantlabusa.dev/glossary/what-is-a-data-warehouse" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "How is a data warehouse different from a database?", acceptedAnswer: { "@type": "Answer", text: "An application database (OLTP) is optimized for many small reads and writes — login, checkout, click. A data warehouse (OLAP) is optimized for fewer, much larger analytical queries across years of history, using columnar storage and parallel execution." } },
        { "@type": "Question", name: "What is the difference between a data warehouse and a data lake?", acceptedAnswer: { "@type": "Answer", text: "A warehouse stores structured, schema-enforced data ready for SQL. A lake stores raw files of any shape — JSON, Parquet, video, logs — without enforcing a schema upfront. Modern \"lakehouses\" like Databricks blur the line." } },
        { "@type": "Question", name: "What are the main data warehouses today?", acceptedAnswer: { "@type": "Answer", text: "Snowflake, Google BigQuery, Amazon Redshift, Databricks, and ClickHouse cover the majority of new deployments. Each has tradeoffs in cost model, ecosystem, and operational style." } },
        { "@type": "Question", name: "When does a startup need a data warehouse?", acceptedAnswer: { "@type": "Answer", text: "Usually when (a) analytics queries start slowing the production app, (b) the team starts wanting to join data across Stripe, the app, marketing, and support, or (c) finance or investors are asking for reports the app database cannot produce in reasonable time." } },
        { "@type": "Question", name: "Can Postgres be a data warehouse?", acceptedAnswer: { "@type": "Answer", text: "For small data — tens of millions of rows — Postgres with proper indexes is often fine. Past that, columnar warehouses become dramatically faster and cheaper to run, and the migration becomes worth the effort." } },
    ],
};

export default function Page() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <article className="container mx-auto px-6 max-w-3xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/glossary" className="hover:text-sky-400 transition-colors">Glossary</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">What is a data warehouse?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Software</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is a Data Warehouse?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        A data warehouse is a database engineered for analytical workloads — long, wide queries across years of history — so the business can ask hard questions of its data without bringing the production application to its knees.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where the idea came from</h2>
                    <p>
                        Bill Inmon coined "data warehouse" in the 1990s and defined the basic shape: a subject-oriented, integrated, time-variant, and non-volatile collection of data. Translated out of textbook English — a single place to put everything your business has ever recorded, organized by what the business cares about (customers, orders, sessions) rather than by which application emitted the data. Ralph Kimball added the dimensional modeling approach that made warehouses queryable by non-engineers. The cloud era — Redshift in 2012, BigQuery in 2010, Snowflake in 2014 — made warehouses cheap enough that a Series A company could run one.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why a separate database</h2>
                    <p>
                        The application database — the Postgres or MySQL instance running your product — is optimized for the kind of work an app does: write a row when a user signs up, read a row when they log in, update a balance when they pay. That workload is small, fast, and constant. The analytical workload is the opposite: read forty million rows, group by month and country, join four tables. Mixing the two on the same instance is how product engineers learn the phrase "the database is on fire" — a finance analyst running a quarterly report can lock tables, blow the page cache, and slow every customer login.
                    </p>
                    <p>
                        The warehouse is a separate copy of the data, refreshed on a schedule (often hourly or nightly), stored in columnar format so that analytical scans are 10 to 100 times faster, and sized for the analytical workload independently. The price is some staleness — the warehouse is rarely up-to-the-second — and a pipeline to keep it fresh.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The modern data stack around it</h2>
                    <p>
                        A warehouse never lives alone. A modern data stack typically has: extraction tools (Fivetran, Airbyte, custom scripts) that pull data out of Postgres, Stripe, HubSpot, Google Ads, and dozens of other sources; the warehouse itself (Snowflake, BigQuery, Databricks, or ClickHouse); a transformation layer (dbt is the standard) that turns raw landed tables into clean, modeled tables; and a visualization tool on top (Metabase, Looker, Hex, Tableau) where business users actually answer questions. The warehouse is the middle of that stack, not the whole of it.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">When you actually need one</h2>
                    <p>
                        Three pretty reliable triggers. First, an analyst query takes more than a minute on the production database, or has caused a customer-facing slowdown. Second, the team starts asking questions that require joining the app, Stripe, the marketing platform, and the support tool — none of which share a database. Third, a board deck or investor update needs a report you cannot produce in twenty minutes because the data lives in seven places. Any one of those is enough; two of them is the sign you have already waited too long.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        Our <Link href="/services/cloud-infrastructure" className="text-sky-400 hover:underline">cloud infrastructure</Link> practice builds warehouses for clients whose product database is no longer enough — usually BigQuery or Snowflake, with Fivetran or custom Python jobs for extraction and dbt for transformation. We also help <Link href="/services/algorithmic-trading-systems" className="text-sky-400 hover:underline">trading and quant clients</Link> build research warehouses that store tick-level history and make backtests reproducible.
                    </p>
                    <p>
                        For early-stage SaaS companies we usually recommend starting with a single dbt project pointed at a managed warehouse rather than over-engineering a Kafka-based pipeline. Read our piece on <Link href="/blog/building-multi-tenant-saas-postgres-rls" className="text-sky-400 hover:underline">multi-tenant SaaS with Postgres</Link> for how the application database is structured before the warehouse stage, and <Link href="/contact" className="text-sky-400 hover:underline">book a call</Link> if you want a one-hour review of your current analytics setup.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        topics={["stack","saas"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-event-sourcing" className="text-sky-400 hover:underline">What is event sourcing?</Link></li>
                        <li><Link href="/glossary/what-is-cqrs" className="text-sky-400 hover:underline">What is CQRS?</Link></li>
                        <li><Link href="/glossary/what-is-microservices-architecture" className="text-sky-400 hover:underline">What is microservices architecture?</Link></li>
                        <li><Link href="/glossary/what-is-an-api" className="text-sky-400 hover:underline">What is an API?</Link></li>
                        <li><Link href="/glossary/what-is-multi-tenant-saas" className="text-sky-400 hover:underline">What is multi-tenant SaaS?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Outgrowing the app database?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We design analytics warehouses sized to your data and your team — not the over-engineered Kafka monster the consultant pitched.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-data-warehouse" />
                        <Link href="/services/cloud-infrastructure" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Cloud infrastructure
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
