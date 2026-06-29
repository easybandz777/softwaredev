import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is a Vector Database? Plain-English Guide | QUANT LAB USA",
    description:
        "A vector database stores embeddings and finds the nearest ones to a query. Plain-English definition, how ANN search works, when you need one. By QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-a-vector-database" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Vector Database",
    description:
        "A vector database is a system that stores high-dimensional vectors (embeddings) and answers similarity queries — given a query vector, it returns the stored vectors closest to it, usually via approximate nearest-neighbor search.",
    url: "https://quantlabusa.dev/glossary/what-is-a-vector-database",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "Vector Database", item: "https://quantlabusa.dev/glossary/what-is-a-vector-database" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is a vector database in one sentence?", acceptedAnswer: { "@type": "Answer", text: "A vector database stores numeric embeddings and, given a query vector, quickly returns the stored items whose vectors are most similar — the backbone of semantic search and retrieval-augmented generation." } },
        { "@type": "Question", name: "How is it different from a normal database?", acceptedAnswer: { "@type": "Answer", text: "A relational database answers exact-match and range queries on structured columns. A vector database answers 'what is most similar to this' on high-dimensional vectors using distance metrics like cosine or dot product." } },
        { "@type": "Question", name: "What are some vector databases?", acceptedAnswer: { "@type": "Answer", text: "Dedicated stores include Pinecone, Weaviate, Qdrant, Milvus, and Chroma. Postgres with pgvector and Elasticsearch/OpenSearch also offer vector search, often good enough to avoid a separate system." } },
        { "@type": "Question", name: "What is ANN search?", acceptedAnswer: { "@type": "Answer", text: "Approximate nearest-neighbor search trades a small amount of accuracy for huge speed gains. Algorithms like HNSW build a navigable graph so you avoid comparing the query against every stored vector." } },
        { "@type": "Question", name: "Do I need a vector database for RAG?", acceptedAnswer: { "@type": "Answer", text: "You need vector search, not necessarily a dedicated product. For small corpora, pgvector or an in-memory index is fine. Dedicated databases earn their keep at scale, with filtering, and with high query volume." } },
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
                        <li className="text-gray-300">Vector Database</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Data & AI</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is a Vector Database?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        A vector database is a system built to store high-dimensional vectors — the numeric fingerprints that machine-learning models produce for text, images, and audio — and to answer one specific question fast: given this query vector, which stored vectors are most similar? It is the engine behind semantic search, recommendations, and retrieval-augmented generation.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The core idea</h2>
                    <p>
                        A machine-learning model can turn a sentence, an image, or a
                        product description into a list of a few hundred to a few
                        thousand numbers — an{" "}
                        <Link href="/glossary/what-is-an-embedding" className="text-sky-400 hover:underline">embedding</Link>{" "}
                        that captures meaning. Things that mean similar things end up
                        close together in that high-dimensional space. A vector database
                        exists to make use of that geometry: store millions of these
                        vectors, then answer "find the closest ones to this query
                        vector" in milliseconds. Distance is measured with cosine
                        similarity, dot product, or Euclidean distance.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why a regular database is not enough</h2>
                    <p>
                        Relational databases are excellent at exact matches, ranges, and
                        joins: "all orders over $500 placed last week." They are terrible
                        at "which of these ten million paragraphs is most semantically
                        similar to this question," because that requires comparing the
                        query against every stored vector and ranking by distance. Doing
                        that naively is a brute-force scan. Vector databases solve it with
                        purpose-built index structures and approximate nearest-neighbor
                        algorithms that skip the vast majority of comparisons.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How ANN search works</h2>
                    <p>
                        Approximate nearest-neighbor (ANN) search accepts a tiny loss of
                        accuracy in exchange for enormous speed. The most common index,
                        HNSW (Hierarchical Navigable Small World), builds a layered graph
                        you can hop across to reach the right neighborhood without
                        touching most vectors. Other approaches include IVF (inverted file
                        indexes that cluster vectors first) and product quantization
                        (compressing vectors to fit more in memory). The trade-off you
                        tune is recall versus latency versus memory.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where it fits in an AI stack</h2>
                    <p>
                        The dominant use case in 2026 is{" "}
                        <Link href="/glossary/what-is-retrieval-augmented-generation" className="text-sky-400 hover:underline">retrieval-augmented generation</Link>:
                        documents are split into chunks, each chunk is embedded and
                        stored, and at query time the most relevant chunks are retrieved
                        and handed to a{" "}
                        <Link href="/glossary/what-is-an-llm" className="text-sky-400 hover:underline">large language model</Link>{" "}
                        as context. Beyond RAG, vector databases power semantic search,
                        deduplication, recommendation engines, anomaly detection, and
                        image similarity. Many also support metadata filtering, so you can
                        combine "most similar" with "and tagged finance, written after
                        January."
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Dedicated vs. bolt-on</h2>
                    <p>
                        You do not always need a new piece of infrastructure. Postgres
                        with the pgvector extension adds vector columns and ANN indexes to
                        a database you may already run, which keeps your{" "}
                        <Link href="/glossary/what-is-a-data-lake" className="text-sky-400 hover:underline">data</Link>{" "}
                        in one place. Dedicated systems — Pinecone, Weaviate, Qdrant,
                        Milvus, Chroma — earn their cost at large scale, high query
                        volume, or when you need advanced filtering and horizontal
                        sharding. The right answer depends on corpus size and traffic, not
                        hype.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        When we build{" "}
                        <Link href="/services/ai-integration-services" className="text-sky-400 hover:underline">AI integration</Link>{" "}
                        features, the vector store is a deliberate decision, not a default.
                        We start by asking how big the corpus is, how often it changes, and
                        how many queries per second the feature must serve. For most
                        teams a Postgres-based index is the pragmatic starting point; we
                        reach for a dedicated database only when the numbers demand it.
                        Either way, the embedding model, chunking strategy, and{" "}
                        <Link href="/services/data-engineering" className="text-sky-400 hover:underline">data pipeline</Link>{" "}
                        feeding it matter far more to quality than the brand on the box.
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
                        <li><Link href="/glossary/what-is-an-embedding" className="text-sky-400 hover:underline">What is an embedding?</Link></li>
                        <li><Link href="/glossary/what-is-retrieval-augmented-generation" className="text-sky-400 hover:underline">What is RAG?</Link></li>
                        <li><Link href="/glossary/what-is-an-llm" className="text-sky-400 hover:underline">What is an LLM?</Link></li>
                        <li><Link href="/glossary/what-is-a-data-lake" className="text-sky-400 hover:underline">What is a data lake?</Link></li>
                        <li><Link href="/glossary/what-is-a-data-warehouse" className="text-sky-400 hover:underline">What is a data warehouse?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Building semantic search or RAG?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We design retrieval pipelines that pick the right vector store for
                        your scale — not the trendiest one. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-vectordb" />
                        <Link href="/services/ai-integration-services" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            AI integration services
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
