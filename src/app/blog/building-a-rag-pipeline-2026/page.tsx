import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AuthorByline } from "@/components/AuthorByline";
import { EditorialFooter } from "@/components/EditorialFooter";
import { Sources } from "@/components/Sources";
import { ArrowRight, Check, Layers } from "lucide-react";
import { articleMetadata } from "@/lib/seoMeta";
import { articleSchema, faqSchema } from "@/lib/schemas";
import { getAuthor, authorUrl } from "@/lib/authors";

const SLUG = "building-a-rag-pipeline-2026";
const PUBLISHED = "2026-06-03";
const TITLE = "Building a RAG Pipeline (2026)";
const author = getAuthor("bill-beltz");

export const metadata: Metadata = articleMetadata({
    title: "Building a RAG Pipeline: A 2026 Engineering Guide",
    description:
        "A practical 2026 guide to building a retrieval-augmented generation pipeline: chunking, embeddings, vector search, reranking, prompt assembly, and evaluation — with code.",
    slug: `blog/${SLUG}`,
    image: "/og-image.png",
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    authors: [author.name],
    keywords: [
        "building a rag pipeline",
        "retrieval augmented generation 2026",
        "rag chunking embeddings reranking",
        "rag evaluation",
    ],
});

const faqs = [
    {
        q: "What is a RAG pipeline?",
        a: "A retrieval-augmented generation (RAG) pipeline grounds a large language model in your own data instead of relying solely on what the model memorized during training. At query time it retrieves the most relevant passages from a knowledge base — usually via vector similarity search — and injects them into the prompt as context. The model then answers from that retrieved evidence, which reduces hallucination and lets you cite sources. A RAG pipeline has two halves: an offline ingestion path that chunks and embeds documents, and an online query path that retrieves, reranks, assembles a prompt, and generates an answer.",
    },
    {
        q: "How should I chunk documents for RAG?",
        a: "Chunk on semantic boundaries — headings, paragraphs, or logical sections — rather than a fixed character count that splits sentences mid-thought. A common starting point is 300 to 800 tokens per chunk with a small overlap of 10 to 15 percent so context is not lost at boundaries. Always attach metadata to each chunk (source document, section title, URL, timestamp) so you can filter retrieval and cite the origin. Tune chunk size against your evaluation set: too large and retrieval gets noisy, too small and chunks lose the context needed to be useful.",
    },
    {
        q: "Do I need a reranker in my RAG pipeline?",
        a: "Often yes. Vector search is fast but approximate — it retrieves passages that are semantically near the query, not necessarily the ones that best answer it. A cross-encoder reranker takes the top 20 to 50 candidates from vector search and rescores each one against the query directly, surfacing the genuinely relevant passages to the top. The two-stage pattern — cheap recall-oriented vector retrieval followed by precise reranking — is the single highest-leverage quality improvement in most production RAG systems.",
    },
    {
        q: "How do I evaluate a RAG pipeline?",
        a: "Evaluate retrieval and generation separately. For retrieval, build a labeled set of questions with known relevant chunks and measure recall and precision at k. For generation, measure faithfulness (does the answer stay grounded in the retrieved context?), answer relevance, and citation accuracy. Automated LLM-as-judge scoring plus a small human-reviewed golden set catches regressions before they ship. Without evaluation you are tuning chunk size and prompts blind, and quality silently drifts as your corpus grows.",
    },
    {
        q: "RAG vs fine-tuning — which should I use?",
        a: "They solve different problems. RAG injects knowledge that changes frequently or is too large to memorize — documentation, support tickets, product catalogs — and lets you update answers by updating data, with citations. Fine-tuning changes behavior, format, or tone, and teaches the model patterns rather than facts. Most production systems start with RAG because it is cheaper to iterate and easier to audit, then add light fine-tuning only when they need a consistent output style the prompt cannot reliably enforce.",
    },
    {
        q: "How do I keep a RAG pipeline secure?",
        a: "Treat retrieved content as untrusted input and apply per-user authorization to the index so a query only retrieves documents that user is allowed to see — RAG over a shared index is a classic data-leak path. Guard against prompt injection hidden inside retrieved documents, never let retrieved text silently override system instructions, and log what was retrieved for each answer so you can audit a bad response. We cover the injection threat in our prompt-injection guide.",
    },
];

const sources = [
    {
        label: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks (Lewis et al.)",
        href: "https://arxiv.org/abs/2005.11401",
        publisher: "arXiv",
    },
    {
        label: "Dense Passage Retrieval for Open-Domain Question Answering",
        href: "https://arxiv.org/abs/2004.04906",
        publisher: "arXiv",
    },
    {
        label: "OWASP Top 10 for Large Language Model Applications",
        href: "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
        publisher: "OWASP",
    },
];

export default function BuildingRagPipelinePage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        articleSchema({
                            headline: "Building a RAG Pipeline: A 2026 Engineering Guide",
                            description:
                                "Chunking, embeddings, vector search, reranking, prompt assembly, and evaluation for a production retrieval-augmented generation pipeline, with code.",
                            datePublished: PUBLISHED,
                            slug: SLUG,
                            image: "https://quantlabusa.dev/og-image.png",
                            author: { name: author.name, url: authorUrl(author.slug) },
                            section: "AI Engineering",
                            keywords: [
                                "building a rag pipeline",
                                "retrieval augmented generation 2026",
                                "rag chunking embeddings reranking",
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
                        <Layers className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs uppercase tracking-widest text-violet-400 mb-3">
                        AI Engineering · 2026
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                        Building a RAG Pipeline: A 2026 Engineering Guide
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed mb-6 max-w-2xl">
                        Retrieval-augmented generation is how you make a language model
                        answer from <em>your</em> data instead of guessing. This is the
                        practitioner&apos;s guide to the pipeline that matters: chunking,
                        embeddings, vector search, reranking, prompt assembly, and
                        evaluation — with code and the failure modes that bite in
                        production.
                    </p>
                    <AuthorByline
                        author={author}
                        publishedDate={PUBLISHED}
                        readMinutes={14}
                        className="mb-8"
                    />
                    <ConsultationCTA
                        label="Scope a RAG Build"
                        service="AI Integration Services"
                        source="blog-rag-pipeline"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-violet-400/30 bg-violet-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Quick answer
                        </h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>
                                Build a RAG pipeline as two paths. Offline: chunk documents
                                on semantic boundaries, attach metadata, embed each chunk, and
                                store the vectors. Online: embed the query, retrieve the top
                                candidates by vector similarity, rerank them with a
                                cross-encoder, assemble a grounded prompt with citations, and
                                generate the answer. The highest-leverage moves are a
                                two-stage retrieve-then-rerank design and a real evaluation set
                                — without evaluation you are tuning blind.
                            </strong>
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            A language model only knows what it saw in training. RAG closes
                            that gap by retrieving relevant passages from your own corpus at
                            query time and putting them in the prompt, so the model answers
                            from evidence you control and can cite. We build these systems for
                            a living — our{" "}
                            <Link
                                href="/services/ai-integration-services"
                                className="text-violet-400 hover:underline"
                            >
                                AI integration practice
                            </Link>{" "}
                            ships RAG over real client data, and our{" "}
                            <Link
                                href="/services/data-engineering"
                                className="text-violet-400 hover:underline"
                            >
                                data engineering practice
                            </Link>{" "}
                            builds the ingestion plumbing behind it. The sections below
                            follow the order you actually build in, not the order tutorials
                            present.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        1. Ingestion: chunk, then enrich
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Ingestion is offline and unglamorous, and it decides your ceiling.
                            Parse each source into clean text, split it into chunks on
                            semantic boundaries, and attach metadata. The mistake here is
                            fixed-size character splitting that cuts sentences in half and
                            strips the context a chunk needs to be useful.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                Chunk on headings and paragraphs; a 300–800 token target with
                                ~10–15% overlap is a sane starting point.
                            </li>
                            <li>
                                Attach metadata to every chunk — source, section title, URL,
                                timestamp — so you can filter retrieval and cite the origin.
                            </li>
                            <li>
                                Strip boilerplate (nav, footers, repeated headers) before
                                embedding; it pollutes similarity scores.
                            </li>
                            <li>
                                Make ingestion idempotent and re-runnable so you can re-chunk
                                the whole corpus when you change strategy.
                            </li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        2. Embeddings and the vector store
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            An embedding model maps each chunk to a vector so that similar
                            meaning lands nearby in space. Pick one embedding model and use it
                            for <em>both</em> ingestion and queries — mixing models silently
                            destroys retrieval. Store the vectors with their metadata in a
                            vector database or a Postgres extension.
                        </p>
                        <pre className="overflow-x-auto rounded-xl border border-white/10 bg-[#0a1120] p-4 text-sm">
                            <code>{`// Ingest: embed each chunk once, store vector + metadata
for (const chunk of chunks) {
  const embedding = await embed(chunk.text);   // SAME model as query time
  await index.upsert({
    id: chunk.id,
    values: embedding,
    metadata: {
      source: chunk.source,
      title: chunk.title,
      url: chunk.url,
      tenantId: chunk.tenantId,                 // for per-tenant isolation
    },
  });
}`}</code>
                        </pre>
                        <p>
                            Choosing the store is its own decision — managed vector DBs,
                            self-hosted engines, and Postgres + pgvector all trade off
                            differently. Our{" "}
                            <Link
                                href="/blog/vector-database-comparison-2026"
                                className="text-violet-400 hover:underline"
                            >
                                vector database comparison
                            </Link>{" "}
                            walks the options for a production RAG workload.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        3. Retrieval and reranking: the two-stage pattern
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            At query time, embed the question and pull the top 20–50
                            candidates by vector similarity. That stage optimizes recall — it
                            casts a wide net. Then rerank: a cross-encoder scores each
                            candidate against the query directly and surfaces the few that
                            truly answer it. This two-stage design is the single biggest
                            quality lever in most RAG systems.
                        </p>
                        <pre className="overflow-x-auto rounded-xl border border-white/10 bg-[#0a1120] p-4 text-sm">
                            <code>{`// Stage 1: cheap, recall-oriented vector retrieval
const queryVec = await embed(question);
const candidates = await index.query({
  vector: queryVec,
  topK: 40,
  filter: { tenantId },          // never retrieve across tenants
});

// Stage 2: precise cross-encoder rerank, keep the best few
const reranked = await rerank(question, candidates.map((c) => c.text));
const context = reranked.slice(0, 6);   // top passages feed the prompt`}</code>
                        </pre>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                Consider hybrid retrieval — combine dense vectors with keyword
                                (BM25) search to catch exact terms, IDs, and rare names.
                            </li>
                            <li>
                                Always apply a metadata filter for the requesting user/tenant
                                <em>before</em> ranking, not after.
                            </li>
                            <li>
                                Cap the number of passages you pass downstream; more context is
                                not always better and costs tokens.
                            </li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        4. Prompt assembly and generation
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Assemble a prompt that puts the retrieved passages in front of the
                            model with clear instructions: answer only from the provided
                            context, cite the source for each claim, and say &quot;I don&apos;t
                            know&quot; when the context does not contain the answer. Label each
                            passage so the model can cite it.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                Instruct the model to ground its answer in the context and to
                                refuse politely when evidence is missing.
                            </li>
                            <li>
                                Number or tag passages so citations map back to real sources.
                            </li>
                            <li>
                                Treat retrieved text as untrusted — a document can contain
                                instructions aimed at hijacking the model. See our{" "}
                                <Link
                                    href="/blog/preventing-prompt-injection-2026"
                                    className="text-violet-400 hover:underline"
                                >
                                    prompt-injection prevention guide
                                </Link>
                                .
                            </li>
                            <li>
                                Long context windows are not free; trimming and reranking keep
                                cost down — see{" "}
                                <Link
                                    href="/blog/llm-cost-optimization-2026"
                                    className="text-violet-400 hover:underline"
                                >
                                    LLM cost optimization
                                </Link>
                                .
                            </li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        5. Evaluation: stop tuning blind
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Evaluation is what separates a demo from a product. Measure
                            retrieval and generation separately so you know which half to fix.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong className="text-white">Retrieval:</strong> a labeled
                                set of questions with known-good chunks; track recall and
                                precision at k.
                            </li>
                            <li>
                                <strong className="text-white">Faithfulness:</strong> does the
                                answer stay grounded in retrieved context, or invent facts?
                            </li>
                            <li>
                                <strong className="text-white">Answer relevance &amp; citations:</strong>{" "}
                                does it address the question and cite real sources?
                            </li>
                            <li>
                                Run an automated LLM-as-judge pass on every change, backed by a
                                small human-reviewed golden set to catch judge error.
                            </li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Mid-post: ship RAG that holds up in production
                    </h2>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-8 text-center">
                        <p className="text-gray-300 mb-6">
                            A working demo is a weekend. A RAG system that is accurate, secure,
                            and cost-controlled at scale is engineering. Book a free scoping
                            call and we&apos;ll map the right architecture for your data.
                        </p>
                        <ConsultationCTA
                            label="Scope a RAG Build"
                            service="AI Integration Services"
                            source="blog-rag-pipeline-mid"
                        />
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        The RAG pipeline at a glance
                    </h2>
                    <div className="overflow-x-auto mt-4">
                        <table className="w-full text-sm text-left border border-white/10 rounded-xl overflow-hidden">
                            <thead className="bg-[#0d1526] text-white">
                                <tr>
                                    <th className="px-4 py-3 border-b border-white/10">Stage</th>
                                    <th className="px-4 py-3 border-b border-white/10">
                                        What it does
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Chunk</td>
                                    <td className="px-4 py-3">
                                        Split sources on semantic boundaries with overlap + metadata
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Embed</td>
                                    <td className="px-4 py-3">
                                        Map chunks to vectors with one consistent model
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Retrieve</td>
                                    <td className="px-4 py-3">
                                        Pull top-k candidates by similarity, filtered by tenant
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Rerank</td>
                                    <td className="px-4 py-3">
                                        Cross-encoder rescores candidates for precision
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Generate</td>
                                    <td className="px-4 py-3">
                                        Grounded prompt with citations; refuse when no evidence
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Evaluate</td>
                                    <td className="px-4 py-3">
                                        Score retrieval + faithfulness against a golden set
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-gray-400 mt-4">
                        For where RAG fits among other ways to add intelligence to a product,
                        see{" "}
                        <Link
                            href="/blog/adding-ai-features-to-your-saas-2026"
                            className="text-violet-400 hover:underline"
                        >
                            adding AI features to your SaaS
                        </Link>
                        .
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Operational practices that hold over time
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            RAG quality decays as your corpus grows and drifts. Three habits
                            keep it honest past launch:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong className="text-white">Freshness.</strong> Re-ingest on a
                                schedule and on document change; stale chunks produce confidently
                                wrong answers.
                            </li>
                            <li>
                                <strong className="text-white">Observability.</strong> Log the
                                retrieved passages for every answer so you can debug a bad
                                response instead of guessing.
                            </li>
                            <li>
                                <strong className="text-white">Regression testing.</strong> Run
                                the evaluation set in CI so a prompt or chunk-size change cannot
                                silently degrade quality.
                            </li>
                        </ul>
                        <p>
                            When the corpus is large and changes constantly, the storage layer
                            matters — our{" "}
                            <Link
                                href="/services/data-engineering"
                                className="text-violet-400 hover:underline"
                            >
                                data engineering practice
                            </Link>{" "}
                            builds the pipelines that keep an index fresh, and the choice of{" "}
                            <Link
                                href="/blog/data-warehouse-vs-data-lake-2026"
                                className="text-violet-400 hover:underline"
                            >
                                warehouse vs lake
                            </Link>{" "}
                            shapes where your source documents live.
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
                            { href: "/services/ai-integration-services", label: "AI Integration Services" },
                            { href: "/services/data-engineering", label: "Data Engineering service" },
                            { href: "/blog/vector-database-comparison-2026", label: "Vector database comparison (2026)" },
                            { href: "/blog/adding-ai-features-to-your-saas-2026", label: "Adding AI features to your SaaS" },
                            { href: "/blog/preventing-prompt-injection-2026", label: "Preventing prompt injection (2026)" },
                            { href: "/blog/llm-cost-optimization-2026", label: "LLM cost optimization (2026)" },
                            { href: "/blog/data-warehouse-vs-data-lake-2026", label: "Data warehouse vs data lake (2026)" },
                            { href: "/contact", label: "Talk to Bill about your RAG build" },
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
                            Ground your model in your own data.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            From ingestion to evaluation, we build RAG systems that are
                            accurate, secure, and cost-controlled. Book a free scoping call and
                            we&apos;ll cover the right architecture for your corpus.
                        </p>
                        <ConsultationCTA
                            label="Book the Scoping Call"
                            service="AI Integration Services"
                            source="blog-rag-pipeline-cta"
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
                            "nextjs-16-app-router-guide-2026",
                            "scaling-a-saas-database-guide-2026",
                            "postgres-vs-mysql-for-saas-2026",
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
