import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is an Embedding? Plain-English Guide | QUANT LAB USA",
    description:
        "An embedding turns text, images, or audio into a vector that captures meaning. Plain-English definition, how it powers semantic search and RAG. By QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-an-embedding" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Embedding",
    description:
        "An embedding is a list of numbers (a vector) produced by a machine-learning model that represents the meaning of a piece of text, image, or other data, such that semantically similar items end up close together in vector space.",
    url: "https://quantlabusa.dev/glossary/what-is-an-embedding",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "Embedding", item: "https://quantlabusa.dev/glossary/what-is-an-embedding" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is an embedding in one sentence?", acceptedAnswer: { "@type": "Answer", text: "An embedding is a vector of numbers that captures the meaning of text, an image, or other data, so that similar things sit close together in that numeric space." } },
        { "@type": "Question", name: "How are embeddings used?", acceptedAnswer: { "@type": "Answer", text: "They power semantic search, recommendations, clustering, deduplication, classification, and retrieval-augmented generation — anywhere you need to compare meaning rather than match exact words." } },
        { "@type": "Question", name: "What does the dimension of an embedding mean?", acceptedAnswer: { "@type": "Answer", text: "It is the length of the vector — how many numbers describe each item, often a few hundred to a few thousand. More dimensions can capture more nuance but cost more memory and compute." } },
        { "@type": "Question", name: "Do embeddings only work for text?", acceptedAnswer: { "@type": "Answer", text: "No. Models can embed images, audio, and even combinations. Multimodal embeddings place text and images in the same space, so you can search images with a text query." } },
        { "@type": "Question", name: "Does the embedding model matter?", acceptedAnswer: { "@type": "Answer", text: "A lot. A model trained on general text may handle a legal or medical corpus poorly. Choosing or adapting the right embedding model is often the biggest lever on search and RAG quality." } },
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
                        <li className="text-gray-300">Embedding</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Data & AI</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is an Embedding?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        An embedding is a list of numbers — a vector — that a machine-learning model produces to represent the meaning of something: a sentence, a paragraph, an image, a product. The trick is that meaning becomes geometry. Things that mean similar things land close together, and that single property is the foundation of semantic search, recommendations, and modern AI retrieval.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Meaning as coordinates</h2>
                    <p>
                        Imagine placing every word, sentence, or document as a point in a
                        space with hundreds or thousands of axes. A good embedding model
                        arranges those points so that distance corresponds to similarity of
                        meaning: "dog" and "puppy" sit near each other, "dog" and "tax
                        law" sit far apart. The model learns this layout from massive
                        amounts of data during training. You never interpret the individual
                        numbers — what matters is the relationships between vectors, which
                        you measure with cosine similarity or dot product.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why this beats keyword matching</h2>
                    <p>
                        Traditional search matches words. Ask it for "how do I cancel my
                        plan" and it misses a document titled "ending your subscription,"
                        because the words do not overlap. Embeddings match meaning, so the
                        two land close together regardless of vocabulary. This is what
                        people mean by semantic search: results ranked by conceptual
                        relevance rather than literal term overlap. It is dramatically more
                        forgiving of paraphrase, synonyms, and the messy ways real users
                        ask questions.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where embeddings show up</h2>
                    <p>
                        Beyond search, the same vectors drive recommendation engines
                        ("items like this one"), clustering and topic discovery,
                        deduplication, classification, and anomaly detection. In the AI
                        stack their headline role is{" "}
                        <Link href="/glossary/what-is-retrieval-augmented-generation" className="text-sky-400 hover:underline">retrieval-augmented generation</Link>:
                        documents are chunked, each chunk is embedded, and at query time the
                        nearest chunks are retrieved to ground a{" "}
                        <Link href="/glossary/what-is-an-llm" className="text-sky-400 hover:underline">large language model</Link>.
                        To do this at scale you store the vectors in a{" "}
                        <Link href="/glossary/what-is-a-vector-database" className="text-sky-400 hover:underline">vector database</Link>.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Dimensions and trade-offs</h2>
                    <p>
                        An embedding's dimension is simply how many numbers describe each
                        item — commonly a few hundred to a few thousand. Higher dimensions
                        can capture more nuance but cost more memory, storage, and query
                        time, and can hit diminishing returns. Multimodal models embed text
                        and images into a shared space, so you can search a photo library
                        with a sentence. The practical levers are which model you use, what
                        dimension it outputs, and how you chunk the input before embedding
                        it.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The model choice is the quality lever</h2>
                    <p>
                        An embedding is only as good as the model that produced it. A model
                        trained on general web text can badly misjudge similarity in a
                        specialized domain — legal, clinical, financial — where the
                        vocabulary and relationships differ from everyday language. For
                        many teams, picking or adapting the right embedding model moves the
                        needle on search and{" "}
                        <Link href="/glossary/what-is-retrieval-augmented-generation" className="text-sky-400 hover:underline">RAG</Link>{" "}
                        quality more than any other single decision, and it is downstream of
                        solid{" "}
                        <Link href="/services/data-engineering" className="text-sky-400 hover:underline">data engineering</Link>.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        Embeddings are the quiet foundation under most of the AI features
                        we build. When clients want semantic search or a retrieval-backed
                        assistant, our{" "}
                        <Link href="/services/ai-integration-services" className="text-sky-400 hover:underline">AI integration</Link>{" "}
                        work spends real effort on the parts that determine quality: which
                        embedding model fits the domain, how documents are chunked before
                        embedding, and how we measure whether retrieval is actually
                        returning the right material. Get the embeddings right and the rest
                        of the pipeline has a fighting chance; get them wrong and no clever
                        prompt will save it.
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
                        <li><Link href="/glossary/what-is-a-vector-database" className="text-sky-400 hover:underline">What is a vector database?</Link></li>
                        <li><Link href="/glossary/what-is-retrieval-augmented-generation" className="text-sky-400 hover:underline">What is RAG?</Link></li>
                        <li><Link href="/glossary/what-is-an-llm" className="text-sky-400 hover:underline">What is an LLM?</Link></li>
                        <li><Link href="/glossary/what-is-fine-tuning" className="text-sky-400 hover:underline">What is fine-tuning?</Link></li>
                        <li><Link href="/glossary/what-is-a-data-lake" className="text-sky-400 hover:underline">What is a data lake?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Building semantic search?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We pick the right embedding model for your domain and build the
                        pipeline that turns it into search users trust. Book a 30-minute
                        call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-embedding" />
                        <Link href="/services/ai-integration-services" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            AI integration services
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
