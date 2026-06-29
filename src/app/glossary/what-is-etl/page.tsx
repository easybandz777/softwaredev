import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is ETL (Extract, Transform, Load)? Guide | QUANT LAB USA",
    description:
        "ETL moves data from sources into a warehouse: extract, transform, load. Plain-English definition, ETL vs. ELT, pipelines and pitfalls. By QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-etl" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "ETL (Extract, Transform, Load)",
    description:
        "ETL is a data integration process that extracts data from source systems, transforms it into a clean and consistent structure, and loads it into a destination such as a data warehouse for analysis.",
    url: "https://quantlabusa.dev/glossary/what-is-etl",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "ETL", item: "https://quantlabusa.dev/glossary/what-is-etl" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is ETL in one sentence?", acceptedAnswer: { "@type": "Answer", text: "ETL extracts data from source systems, transforms it into a clean and consistent shape, and loads it into a destination like a data warehouse so it can be analyzed." } },
        { "@type": "Question", name: "What is the difference between ETL and ELT?", acceptedAnswer: { "@type": "Answer", text: "ETL transforms data before loading it; ELT loads raw data first and transforms it inside the destination. ELT has become common because modern cloud warehouses are powerful enough to do the heavy lifting." } },
        { "@type": "Question", name: "What is the transform step actually doing?", acceptedAnswer: { "@type": "Answer", text: "Cleaning and standardizing: fixing types and formats, deduplicating, joining sources, applying business rules, and reshaping data so different systems agree on what a customer or an order means." } },
        { "@type": "Question", name: "What tools are used for ETL?", acceptedAnswer: { "@type": "Answer", text: "Ingestion tools like Fivetran or Airbyte, transformation tools like dbt, and orchestrators like Airflow or Dagster — though the right mix depends on scale, sources, and team skills." } },
        { "@type": "Question", name: "Why do data pipelines break so often?", acceptedAnswer: { "@type": "Answer", text: "Because source systems change without warning — a renamed column, a new format, a schema migration upstream. Pipelines need monitoring, testing, and idempotent design to survive that reality." } },
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
                        <li className="text-gray-300">ETL</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Data & AI</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is ETL (Extract, Transform, Load)?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        ETL is the plumbing of analytics. It is the process that pulls data out of the systems where it is born — databases, APIs, files, SaaS apps — reshapes it into something clean and consistent, and lands it somewhere you can actually query it. Almost every dashboard, report, and machine-learning model sits at the end of an ETL pipeline, whether anyone names it or not.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The three letters</h2>
                    <p>
                        Extract: read data out of source systems — a production database, a
                        payments API, a CRM, log files — often the trickiest step because
                        every source has its own format, rate limits, and quirks.
                        Transform: clean and standardize it — fix data types, deduplicate,
                        join sources together, apply business rules, and reshape it so the
                        whole organization agrees on what "a customer" or "an order" means.
                        Load: write the result into a destination, typically a{" "}
                        <Link href="/glossary/what-is-a-data-warehouse" className="text-sky-400 hover:underline">data warehouse</Link>{" "}
                        or{" "}
                        <Link href="/glossary/what-is-a-data-lake" className="text-sky-400 hover:underline">data lake</Link>,
                        where analysts and models can reach it.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">ETL vs. ELT</h2>
                    <p>
                        The order of operations has shifted. Classic ETL transforms data on
                        a separate server before loading, because old warehouses were too
                        expensive to use for heavy processing. Modern cloud warehouses
                        flipped that: ELT loads the raw data first, then transforms it
                        inside the warehouse using its own compute. ELT keeps a raw copy you
                        can re-transform when requirements change, and tools like dbt made
                        in-warehouse transformation the default for many teams. The choice
                        depends on data volume, source constraints, and how much you value
                        keeping the untouched raw data.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The transform step is where the value is</h2>
                    <p>
                        Extraction and loading are largely solved by off-the-shelf
                        connectors. The transform step is where data engineering earns its
                        keep, because raw data is almost never analysis-ready. Dates arrive
                        in five formats, the same customer appears three times under
                        different spellings, currencies are mixed, and two systems disagree
                        on the definition of "active." Transformation encodes the business
                        logic that resolves all of that into a single trustworthy version of
                        the truth. Get it wrong and every downstream report inherits the
                        error.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why pipelines break</h2>
                    <p>
                        Data pipelines are uniquely fragile because they depend on systems
                        outside their control. An upstream team renames a column, changes a
                        date format, or migrates a schema — with no notice — and the
                        pipeline silently produces wrong numbers or fails outright.
                        Resilient pipelines are built defensively: validate inputs, alert on
                        anomalies, and design each step to be{" "}
                        <Link href="/glossary/what-is-idempotency" className="text-sky-400 hover:underline">idempotent</Link>{" "}
                        so a retry after a failure cannot double-count or corrupt data.
                        Treating a pipeline as fire-and-forget is how teams end up not
                        trusting their own dashboards.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">ETL feeds AI too</h2>
                    <p>
                        ETL is not just for business intelligence. The same pipelines feed
                        machine learning: clean, consistent data is what a model trains on,
                        and the transformation logic that produces a feature for training
                        must match the logic that produces it at serving time — a
                        consistency problem a{" "}
                        <Link href="/glossary/what-is-a-feature-store" className="text-sky-400 hover:underline">feature store</Link>{" "}
                        exists to solve. Reliable ETL is the unglamorous foundation beneath{" "}
                        <Link href="/glossary/what-is-mlops" className="text-sky-400 hover:underline">MLOps</Link>;
                        a model is only as trustworthy as the pipeline feeding it.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        Most "our dashboards are wrong" problems we see trace back to a
                        pipeline, not the dashboard. Our{" "}
                        <Link href="/services/data-engineering" className="text-sky-400 hover:underline">data engineering</Link>{" "}
                        work treats pipelines like the production software they are:
                        version-controlled transformations, tests on the data, monitoring
                        and alerting on freshness and volume, and idempotent design so
                        failures heal cleanly. The goal is a single source of truth the
                        business can actually trust — and a clean foundation for the{" "}
                        <Link href="/services/business-intelligence-dashboards" className="text-sky-400 hover:underline">dashboards</Link>{" "}
                        and models built on top.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        topics={["stack", "internal-tools"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-a-data-warehouse" className="text-sky-400 hover:underline">What is a data warehouse?</Link></li>
                        <li><Link href="/glossary/what-is-a-data-lake" className="text-sky-400 hover:underline">What is a data lake?</Link></li>
                        <li><Link href="/glossary/what-is-a-feature-store" className="text-sky-400 hover:underline">What is a feature store?</Link></li>
                        <li><Link href="/glossary/what-is-mlops" className="text-sky-400 hover:underline">What is MLOps?</Link></li>
                        <li><Link href="/glossary/what-is-idempotency" className="text-sky-400 hover:underline">What is idempotency?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Pipelines you can actually trust?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We build tested, monitored, idempotent data pipelines so your
                        dashboards and models rest on a single source of truth. Book a
                        30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-etl" />
                        <Link href="/services/data-engineering" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Data engineering
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
