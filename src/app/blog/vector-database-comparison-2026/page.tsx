import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AuthorByline } from "@/components/AuthorByline";
import { EditorialFooter } from "@/components/EditorialFooter";
import { Sources } from "@/components/Sources";
import { ArrowRight, Check, Database } from "lucide-react";
import { articleMetadata } from "@/lib/seoMeta";
import { articleSchema, faqSchema } from "@/lib/schemas";
import { getAuthor, authorUrl } from "@/lib/authors";

const SLUG = "vector-database-comparison-2026";
const PUBLISHED = "2026-06-03";
const TITLE = "Vector Database Comparison (2026)";
const author = getAuthor("bill-beltz");

export const metadata: Metadata = articleMetadata({
    title: "Vector Database Comparison: A 2026 Buyer's Guide",
    description:
        "A 2026 comparison of vector databases for RAG and AI search: pgvector, Pinecone, Qdrant, Weaviate, Milvus — indexes, filtering, scale, cost, and how to choose.",
    slug: `blog/${SLUG}`,
    image: "/og-image.png",
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    authors: [author.name],
    keywords: [
        "vector database comparison",
        "pgvector vs pinecone 2026",
        "best vector database for rag",
        "vector search hnsw",
    ],
});

const faqs = [
    {
        q: "What is a vector database?",
        a: "A vector database stores high-dimensional embeddings and finds the ones most similar to a query vector quickly, usually using an approximate nearest neighbor (ANN) index such as HNSW. It is the retrieval engine behind semantic search and retrieval-augmented generation: you embed your documents once, store the vectors with metadata, and at query time embed the question and ask the database for the nearest chunks. A purpose-built vector database adds metadata filtering, scaling, and operational tooling on top of raw similarity search.",
    },
    {
        q: "Do I need a dedicated vector database or can I use Postgres?",
        a: "For many applications, Postgres with the pgvector extension is enough — and it is the right first choice when your data already lives in Postgres, your corpus is in the thousands to low millions of vectors, and you value one system over two. A dedicated vector database earns its keep at large scale (tens of millions of vectors and up), with very high query throughput, or when you need advanced features like distributed sharding and managed autoscaling. Start with pgvector, measure, and move only when the numbers say so.",
    },
    {
        q: "What is HNSW and why does it matter?",
        a: "HNSW (Hierarchical Navigable Small World) is the dominant approximate nearest neighbor index. It builds a multi-layer graph that lets queries skip across the vector space and reach the nearest neighbors in logarithmic-ish time instead of scanning everything. It trades a little recall for a large speed gain, and its build parameters let you tune the recall-versus-speed-versus-memory balance. Most modern vector databases — and pgvector — offer HNSW; understanding its parameters is the key to tuning retrieval quality and latency.",
    },
    {
        q: "How important is metadata filtering in a vector database?",
        a: "Critical for real applications, and a common differentiator. You almost always need to combine similarity search with structured filters — restrict results to one tenant, one document type, a date range, or a permission scope. The question is whether the database filters efficiently alongside the vector search (pre-filtering) or filters after retrieving, which can return too few results. For multi-tenant SaaS, efficient per-tenant filtering is non-negotiable, because retrieving across tenants is a data-leak path.",
    },
    {
        q: "Which vector database is best for RAG?",
        a: "There is no single best — it depends on scale, existing stack, and ops appetite. pgvector is the pragmatic default for teams already on Postgres at small-to-mid scale. Pinecone is a fully managed option that removes operational burden. Qdrant, Weaviate, and Milvus are strong open-source engines with different strengths in filtering, hybrid search, and distributed scale, available self-hosted or managed. Pick based on your data volume, query throughput, filtering needs, and whether you want to run infrastructure yourself.",
    },
    {
        q: "Should I self-host or use a managed vector database?",
        a: "Managed services trade money for operational simplicity — no index tuning, scaling, backups, or upgrades to run yourself, which is often worth it for a small team shipping fast. Self-hosting gives you cost control at scale, data residency, and full configurability, at the price of running stateful infrastructure with its own failure modes. For most early-stage products, managed (or pgvector inside your existing managed Postgres) is the faster path; revisit when scale or compliance changes the math.",
    },
];

const sources = [
    {
        label: "pgvector — open-source vector similarity search for Postgres",
        href: "https://github.com/pgvector/pgvector",
        publisher: "pgvector",
    },
    {
        label: "Efficient and robust approximate nearest neighbor search using HNSW graphs",
        href: "https://arxiv.org/abs/1603.09320",
        publisher: "arXiv",
    },
    {
        label: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks",
        href: "https://arxiv.org/abs/2005.11401",
        publisher: "arXiv",
    },
];

export default function VectorDatabaseComparisonPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        articleSchema({
                            headline: "Vector Database Comparison: A 2026 Buyer's Guide",
                            description:
                                "Comparing pgvector, Pinecone, Qdrant, Weaviate, and Milvus for RAG and AI search — indexes, filtering, scale, cost, and how to choose.",
                            datePublished: PUBLISHED,
                            slug: SLUG,
                            image: "https://quantlabusa.dev/og-image.png",
                            author: { name: author.name, url: authorUrl(author.slug) },
                            section: "AI Engineering",
                            keywords: [
                                "vector database comparison",
                                "pgvector vs pinecone 2026",
                                "best vector database for rag",
                            ],
                        }),
                    ),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
            />

            <div className="container mx-auto px-6 max-w-4xl">
                <Breadcrumbs
                    items={[
                        { label: "Home", href: "/" },
                        { label: "Blog", href: "/blog" },
                        { label: TITLE },
                    ]}
                />

                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-400 mb-6">
                        <Database className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs uppercase tracking-widest text-violet-400 mb-3">
                        AI Engineering · 2026
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                        Vector Database Comparison: A 2026 Buyer&apos;s Guide
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed mb-6 max-w-2xl">
                        The vector store is the retrieval engine behind every RAG system and AI
                        search feature, and the &quot;best&quot; one depends entirely on your
                        scale and stack. This is the practitioner&apos;s comparison: pgvector,
                        Pinecone, Qdrant, Weaviate, and Milvus — across indexes, filtering,
                        scale, and cost — with a decision framework.
                    </p>
                    <AuthorByline
                        author={author}
                        publishedDate={PUBLISHED}
                        readMinutes={13}
                        className="mb-8"
                    />
                    <ConsultationCTA
                        label="Get an Architecture Review"
                        service="Data Engineering"
                        source="blog-vector-db"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-violet-400/30 bg-violet-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Quick answer
                        </h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>
                                There is no single best vector database — choose by scale, existing
                                stack, filtering needs, and ops appetite. Start with Postgres +
                                pgvector when your data already lives in Postgres and your corpus is
                                in the thousands to low millions of vectors. Move to a dedicated
                                engine — managed Pinecone, or self-hosted Qdrant, Weaviate, or Milvus
                                — at tens of millions of vectors, very high query throughput, or when
                                you need distributed scale. Efficient per-tenant metadata filtering
                                and an HNSW index are the features that matter most in production.
                            </strong>
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            A vector store does one job: given a query embedding, return the
                            nearest stored vectors fast, filtered by metadata. We pick and run
                            these systems for clients through our{" "}
                            <Link
                                href="/services/data-engineering"
                                className="text-violet-400 hover:underline"
                            >
                                data engineering practice
                            </Link>
                            , and we wire them into the retrieval layer of our{" "}
                            <Link
                                href="/services/ai-integration-services"
                                className="text-violet-400 hover:underline"
                            >
                                AI integration practice
                            </Link>
                            . This guide pairs with our{" "}
                            <Link
                                href="/blog/building-a-rag-pipeline-2026"
                                className="text-violet-400 hover:underline"
                            >
                                RAG pipeline guide
                            </Link>{" "}
                            — pick the store, then build the pipeline around it.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        1. What you are actually choosing between
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Every option stores vectors and does approximate nearest neighbor
                            search. The differences that matter in production are narrower than the
                            marketing suggests:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong className="text-white">Index type and tuning.</strong> HNSW
                                is near-universal; how much control you get over its parameters
                                varies.
                            </li>
                            <li>
                                <strong className="text-white">Metadata filtering.</strong> Whether
                                filters are applied efficiently alongside the vector search, which
                                decides multi-tenant viability.
                            </li>
                            <li>
                                <strong className="text-white">Scale model.</strong> Single-node vs
                                distributed/sharded, and how autoscaling works.
                            </li>
                            <li>
                                <strong className="text-white">Operational model.</strong> Managed
                                service vs self-hosted, and what that costs in money and time.
                            </li>
                            <li>
                                <strong className="text-white">Hybrid search.</strong> Native support
                                for combining dense vectors with keyword (BM25) search.
                            </li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        2. pgvector: the pragmatic default
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            If your data already lives in Postgres, pgvector lets you add vector
                            search without adding a second system. You get transactional
                            consistency, your existing backups and access controls, and SQL joins
                            between vectors and your relational data — which makes per-tenant
                            filtering trivial because it is just a <code className="text-violet-300">WHERE</code>{" "}
                            clause.
                        </p>
                        <pre className="overflow-x-auto rounded-xl border border-white/10 bg-[#0a1120] p-4 text-sm">
                            <code>{`-- pgvector: HNSW index + similarity search with a tenant filter
CREATE INDEX ON chunks USING hnsw (embedding vector_cosine_ops);

SELECT id, content
FROM chunks
WHERE tenant_id = $1                 -- per-tenant isolation, just SQL
ORDER BY embedding <=> $2            -- cosine distance to query vector
LIMIT 40;`}</code>
                        </pre>
                        <p>
                            The trade-off is scale: pgvector is excellent into the low millions of
                            vectors, but a dedicated engine pulls ahead at much larger volumes or
                            very high query rates. For most products, that ceiling is far away. Our{" "}
                            <Link
                                href="/blog/postgres-vs-mysql-for-saas-2026"
                                className="text-violet-400 hover:underline"
                            >
                                Postgres vs MySQL guide
                            </Link>{" "}
                            covers why we reach for Postgres first.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        3. Dedicated engines: when scale demands them
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Purpose-built vector databases shine when you outgrow a single
                            Postgres node or need features Postgres does not offer natively.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong className="text-white">Pinecone:</strong> fully managed,
                                serverless. You give up infrastructure control and gain zero ops —
                                a strong fit for small teams shipping fast.
                            </li>
                            <li>
                                <strong className="text-white">Qdrant:</strong> open-source, strong
                                metadata filtering and payload handling, available self-hosted or
                                managed.
                            </li>
                            <li>
                                <strong className="text-white">Weaviate:</strong> open-source with
                                first-class hybrid search and a module ecosystem; self-hosted or
                                cloud.
                            </li>
                            <li>
                                <strong className="text-white">Milvus:</strong> open-source built for
                                very large-scale, distributed vector workloads with multiple index
                                types.
                            </li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        4. Cost, scale, and the data behind it
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Vector storage and search cost scales with vector count, dimensions,
                            and query volume. Managed services bill on those dimensions;
                            self-hosting trades that for the cost of running stateful
                            infrastructure. Two things keep cost sane regardless of engine:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                Right-size embedding dimensions — larger is not automatically better
                                and costs storage and compute.
                            </li>
                            <li>
                                Trim and rerank so you retrieve fewer candidates downstream — see{" "}
                                <Link
                                    href="/blog/llm-cost-optimization-2026"
                                    className="text-violet-400 hover:underline"
                                >
                                    LLM cost optimization
                                </Link>
                                .
                            </li>
                        </ul>
                        <p>
                            Where the source documents themselves live shapes the whole pipeline —
                            see{" "}
                            <Link
                                href="/blog/data-warehouse-vs-data-lake-2026"
                                className="text-violet-400 hover:underline"
                            >
                                data warehouse vs data lake
                            </Link>{" "}
                            for the upstream storage decision.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Mid-post: pick the store that fits your scale
                    </h2>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-8 text-center">
                        <p className="text-gray-300 mb-6">
                            The wrong vector store is an expensive migration later. Book a free
                            scoping call and we&apos;ll size your corpus, throughput, and filtering
                            needs to the right engine the first time.
                        </p>
                        <ConsultationCTA
                            label="Get an Architecture Review"
                            service="Data Engineering"
                            source="blog-vector-db-mid"
                        />
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        The options at a glance
                    </h2>
                    <div className="overflow-x-auto mt-4">
                        <table className="w-full text-sm text-left border border-white/10 rounded-xl overflow-hidden">
                            <thead className="bg-[#0d1526] text-white">
                                <tr>
                                    <th className="px-4 py-3 border-b border-white/10">Option</th>
                                    <th className="px-4 py-3 border-b border-white/10">Best fit</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">pgvector</td>
                                    <td className="px-4 py-3">
                                        Already on Postgres; thousands to low millions of vectors
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Pinecone</td>
                                    <td className="px-4 py-3">
                                        Fully managed, zero-ops, fast to ship
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Qdrant</td>
                                    <td className="px-4 py-3">
                                        Open-source with strong metadata filtering
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Weaviate</td>
                                    <td className="px-4 py-3">
                                        First-class hybrid (vector + keyword) search
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Milvus</td>
                                    <td className="px-4 py-3">
                                        Very large-scale distributed vector workloads
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-gray-400 mt-4">
                        Once you have chosen, build the retrieval and reranking around it — see{" "}
                        <Link
                            href="/blog/building-a-rag-pipeline-2026"
                            className="text-violet-400 hover:underline"
                        >
                            building a RAG pipeline
                        </Link>
                        .
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        A simple decision framework
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>Work top to bottom and stop at the first match:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                Data in Postgres and under a few million vectors?{" "}
                                <strong className="text-white">Use pgvector.</strong>
                            </li>
                            <li>
                                Small team, want zero ops, willing to pay for it?{" "}
                                <strong className="text-white">Use a managed service.</strong>
                            </li>
                            <li>
                                Need heavy metadata filtering or hybrid search self-hosted?{" "}
                                <strong className="text-white">Qdrant or Weaviate.</strong>
                            </li>
                            <li>
                                Tens of millions of vectors and high throughput?{" "}
                                <strong className="text-white">A distributed engine like Milvus.</strong>
                            </li>
                        </ul>
                        <p>
                            Whatever you choose, design for migration — keep your embeddings and
                            chunk metadata reproducible so you can re-index into a different engine
                            if scale changes the answer. Our{" "}
                            <Link
                                href="/services/data-engineering"
                                className="text-violet-400 hover:underline"
                            >
                                data engineering practice
                            </Link>{" "}
                            builds that portability in.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Frequently asked questions
                    </h2>
                    <div className="space-y-6">
                        {faqs.map((item) => (
                            <div
                                key={item.q}
                                className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6"
                            >
                                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                                <p className="text-gray-300 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <Sources items={sources} />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Related reading and next steps
                    </h2>
                    <ul className="space-y-3">
                        {[
                            { href: "/services/data-engineering", label: "Data Engineering service" },
                            { href: "/services/ai-integration-services", label: "AI Integration Services" },
                            { href: "/blog/building-a-rag-pipeline-2026", label: "Building a RAG pipeline (2026)" },
                            { href: "/blog/data-warehouse-vs-data-lake-2026", label: "Data warehouse vs data lake (2026)" },
                            { href: "/blog/llm-cost-optimization-2026", label: "LLM cost optimization (2026)" },
                            { href: "/blog/postgres-vs-mysql-for-saas-2026", label: "Postgres vs MySQL for SaaS (2026)" },
                            { href: "/blog/adding-ai-features-to-your-saas-2026", label: "Adding AI features to your SaaS" },
                            { href: "/contact", label: "Talk to Bill about your vector store" },
                        ].map((l) => (
                            <li key={l.href} className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-violet-400 flex-shrink-0" />
                                <Link href={l.href} className="text-violet-400 hover:underline">
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <EditorialFooter reviewedDate={PUBLISHED} />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Pick the right store, build it once.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            We size your corpus, throughput, and filtering needs to the right
                            vector engine and build the retrieval layer around it. Book a free
                            scoping call.
                        </p>
                        <ConsultationCTA
                            label="Book the Scoping Call"
                            service="Data Engineering"
                            source="blog-vector-db-cta"
                        />
                        <div className="mt-6 text-sm text-gray-400">
                            Or email Bill at{" "}
                            <a
                                href="mailto:beltz@quantlabusa.dev"
                                className="text-violet-400 hover:underline"
                            >
                                beltz@quantlabusa.dev
                            </a>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mt-16 mb-12">
                    <RelatedPosts
                        currentSlug={SLUG}
                        topics={["stack", "saas"]}
                        pinned={[
                            "postgres-vs-mysql-for-saas-2026",
                            "scaling-a-saas-database-guide-2026",
                            "nextjs-16-app-router-guide-2026",
                        ]}
                        heading="More engineering reading"
                    />
                </AnimatedSection>

                <AnimatedSection className="mt-12">
                    <div className="flex items-center justify-between text-sm text-gray-400">
                        <Link
                            href="/blog"
                            className="hover:text-violet-400 inline-flex items-center gap-1"
                        >
                            <ArrowRight className="w-3 h-3 rotate-180" /> All blog posts
                        </Link>
                        <span>Updated June 3, 2026</span>
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
