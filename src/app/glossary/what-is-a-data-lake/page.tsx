import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is a Data Lake? Plain-English Guide | QUANT LAB USA",
    description:
        "A data lake stores raw data of any format at scale until you need it. Plain-English definition, data lake vs. warehouse, the lakehouse. By QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-a-data-lake" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Data Lake",
    description:
        "A data lake is a centralized repository that stores large volumes of raw data in its native format — structured, semi-structured, and unstructured — to be processed and analyzed later, typically on inexpensive object storage.",
    url: "https://quantlabusa.dev/glossary/what-is-a-data-lake",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "Data Lake", item: "https://quantlabusa.dev/glossary/what-is-a-data-lake" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is a data lake in one sentence?", acceptedAnswer: { "@type": "Answer", text: "A data lake is a central store that holds large amounts of raw data in any format — structured, semi-structured, or unstructured — until you are ready to process and analyze it." } },
        { "@type": "Question", name: "What is the difference between a data lake and a data warehouse?", acceptedAnswer: { "@type": "Answer", text: "A warehouse stores cleaned, structured data modeled for fast analytics (schema-on-write). A lake stores raw data of any type cheaply and applies structure only when you read it (schema-on-read)." } },
        { "@type": "Question", name: "What is a data swamp?", acceptedAnswer: { "@type": "Answer", text: "A data swamp is a data lake gone wrong — raw data dumped in with no catalog, governance, or quality controls, so no one can find or trust anything. It is the most common data lake failure." } },
        { "@type": "Question", name: "What is a lakehouse?", acceptedAnswer: { "@type": "Answer", text: "A lakehouse combines a lake's cheap, flexible storage with warehouse-style structure and transactions, using table formats like Delta Lake, Apache Iceberg, or Hudi over object storage." } },
        { "@type": "Question", name: "Do I need a data lake?", acceptedAnswer: { "@type": "Answer", text: "Only if you have large, varied, or unstructured data — logs, images, events — that does not fit neatly in a warehouse. Many smaller teams are well served by a warehouse alone." } },
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
                        <li className="text-gray-300">Data Lake</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Data & AI</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is a Data Lake?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        A data lake is a single, large repository that holds raw data in whatever shape it arrives — database rows, JSON events, log files, images, audio — on cheap object storage, to be cleaned and analyzed whenever you need it. The promise is flexibility: store everything now, decide what it means later. The risk is that without discipline, "everything" becomes "nothing usable."
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Store first, structure later</h2>
                    <p>
                        The defining idea of a data lake is schema-on-read. You do not have
                        to design a table layout before you store data; you dump it in its
                        native format and impose structure only at the moment you query it.
                        That is the opposite of the traditional approach, and it is
                        powerful when you do not yet know every question you will ask. It
                        lets you keep raw, high-volume, or oddly shaped data — clickstreams,
                        sensor readings, images for a model — that would never fit cleanly
                        into rows and columns up front.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Data lake vs. data warehouse</h2>
                    <p>
                        The two are complements, not rivals. A{" "}
                        <Link href="/glossary/what-is-a-data-warehouse" className="text-sky-400 hover:underline">data warehouse</Link>{" "}
                        stores cleaned, structured, modeled data optimized for fast
                        business analytics — schema-on-write, where the structure is defined
                        before loading. A lake stores raw data of any type at a fraction of
                        the cost, structuring it only on read. Warehouses answer known
                        business questions quickly; lakes preserve raw material for data
                        science, machine learning, and questions you have not thought of
                        yet. Many organizations run both and move refined data from the lake
                        into the warehouse.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The data swamp problem</h2>
                    <p>
                        The most common way a data lake fails is to become a data swamp.
                        Teams enthusiastically pour raw data in, but without a catalog,
                        clear ownership, documented schemas, and quality checks, no one can
                        find what exists or trust what they find. The "store everything"
                        promise curdles into a write-only graveyard. The fix is governance
                        from day one: a metadata catalog, naming and partitioning standards,
                        access controls, and lifecycle policies — the unglamorous{" "}
                        <Link href="/services/data-engineering" className="text-sky-400 hover:underline">data engineering</Link>{" "}
                        work that separates a lake from a swamp.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The lakehouse</h2>
                    <p>
                        The industry's answer to the lake-versus-warehouse split is the
                        lakehouse: keep the cheap, flexible object storage of a lake, but
                        add the structure, transactions, and performance of a warehouse on
                        top. Open table formats — Delta Lake, Apache Iceberg, Apache Hudi —
                        bring ACID guarantees, schema enforcement, and time travel to data
                        sitting in plain object storage. For many teams in 2026 the
                        lakehouse is the default, collapsing two systems into one and
                        avoiding the cost of constantly copying data between them.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How data gets in and out</h2>
                    <p>
                        Data lands in the lake through ingestion pipelines — batch loads,
                        streaming feeds, change-data-capture from operational databases.
                        Because the lake holds raw data, the heavy transformation often
                        happens on read, an ELT pattern rather than classic{" "}
                        <Link href="/glossary/what-is-etl" className="text-sky-400 hover:underline">ETL</Link>.
                        On the way out, the lake feeds analytics, business intelligence,
                        and machine-learning training, and it frequently serves as the
                        source that populates a{" "}
                        <Link href="/glossary/what-is-a-feature-store" className="text-sky-400 hover:underline">feature store</Link>{" "}
                        for{" "}
                        <Link href="/glossary/what-is-mlops" className="text-sky-400 hover:underline">MLOps</Link>{" "}
                        pipelines.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        We are skeptical of data lakes adopted for their own sake. Plenty of
                        teams build one because it sounds modern, then drown in an
                        ungoverned swamp that delivers no insight. Our{" "}
                        <Link href="/services/data-engineering" className="text-sky-400 hover:underline">data engineering</Link>{" "}
                        work starts from the questions the business actually needs answered
                        and works backward — sometimes that is a lakehouse, sometimes just a
                        well-modeled warehouse. When a lake is the right call, we build the
                        catalog, governance, and quality controls in from the start, so it
                        stays an asset instead of becoming a liability.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        topics={["stack", "build-vs-buy"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-a-data-warehouse" className="text-sky-400 hover:underline">What is a data warehouse?</Link></li>
                        <li><Link href="/glossary/what-is-etl" className="text-sky-400 hover:underline">What is ETL?</Link></li>
                        <li><Link href="/glossary/what-is-a-feature-store" className="text-sky-400 hover:underline">What is a feature store?</Link></li>
                        <li><Link href="/glossary/what-is-mlops" className="text-sky-400 hover:underline">What is MLOps?</Link></li>
                        <li><Link href="/glossary/what-is-a-vector-database" className="text-sky-400 hover:underline">What is a vector database?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Designing a data platform?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We design lakes, warehouses, and lakehouses around the questions
                        your business actually needs answered — with governance baked in.
                        Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-datalake" />
                        <Link href="/services/data-engineering" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Data engineering
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
