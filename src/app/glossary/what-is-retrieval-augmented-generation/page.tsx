import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is RAG (Retrieval-Augmented Generation)? | QUANT LAB USA",
    description:
        "RAG retrieves relevant documents and feeds them to an LLM so answers are grounded in your data. Plain-English definition, architecture, pitfalls. By QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-retrieval-augmented-generation" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Retrieval-Augmented Generation (RAG)",
    description:
        "Retrieval-augmented generation is a pattern that retrieves relevant documents from a knowledge source and inserts them into a language model's prompt, so the model's answer is grounded in specific, current data rather than only its training.",
    url: "https://quantlabusa.dev/glossary/what-is-retrieval-augmented-generation",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "Retrieval-Augmented Generation", item: "https://quantlabusa.dev/glossary/what-is-retrieval-augmented-generation" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is RAG in one sentence?", acceptedAnswer: { "@type": "Answer", text: "RAG retrieves the most relevant pieces of your own data and inserts them into a language model's prompt, so the model answers from specific, current sources instead of guessing from training data." } },
        { "@type": "Question", name: "Why use RAG instead of fine-tuning?", acceptedAnswer: { "@type": "Answer", text: "RAG keeps knowledge in an external store you can update instantly without retraining, and it can cite sources. Fine-tuning changes the model's behavior and style but is slower to update and harder to attribute." } },
        { "@type": "Question", name: "Does RAG stop hallucinations?", acceptedAnswer: { "@type": "Answer", text: "It reduces them by grounding answers in retrieved text, but it does not eliminate them. A model can still misread or ignore the context, so citations and evaluation are essential." } },
        { "@type": "Question", name: "What do I need to build RAG?", acceptedAnswer: { "@type": "Answer", text: "A way to chunk and embed your documents, a vector store for similarity search, a retrieval step that fetches top matches, and a language model that generates an answer from those matches." } },
        { "@type": "Question", name: "Is RAG only for chatbots?", acceptedAnswer: { "@type": "Answer", text: "No. The same pattern powers internal search, support deflection, document Q&A, contract analysis, and any feature where an answer must be grounded in a specific, changing body of knowledge." } },
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
                        <li className="text-gray-300">Retrieval-Augmented Generation</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Data & AI</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is Retrieval-Augmented Generation (RAG)?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        RAG is a pattern that bolts a search step onto a language model: before the model answers, the system retrieves the most relevant passages from your own documents and pastes them into the prompt. The result is an answer grounded in specific, current data the model never saw during training — with sources you can show the user.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The problem it solves</h2>
                    <p>
                        A{" "}
                        <Link href="/glossary/what-is-an-llm" className="text-sky-400 hover:underline">large language model</Link>{" "}
                        only knows what it absorbed during training. It has no idea about
                        your internal wiki, last week's policy change, or a customer's
                        contract. Ask it anyway and it will often produce a confident,
                        plausible, wrong answer. RAG fixes this by retrieving the actual
                        relevant text and handing it to the model as context, so the model
                        summarizes and reasons over real sources instead of improvising
                        from memory.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The architecture</h2>
                    <p>
                        A standard RAG pipeline has two phases. Ingestion (done ahead of
                        time): split documents into chunks, turn each chunk into an{" "}
                        <Link href="/glossary/what-is-an-embedding" className="text-sky-400 hover:underline">embedding</Link>,
                        and store those in a{" "}
                        <Link href="/glossary/what-is-a-vector-database" className="text-sky-400 hover:underline">vector database</Link>.
                        Query time: embed the user's question, retrieve the most similar
                        chunks, assemble them into a prompt with the question, and let the
                        model generate an answer. Good systems also return citations so the
                        user can verify the source.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">RAG vs. fine-tuning</h2>
                    <p>
                        These are often posed as rivals; they solve different problems. RAG
                        injects knowledge — facts, documents, current data — and lets you
                        update that knowledge instantly by changing the store, with no
                        retraining. <Link href="/glossary/what-is-fine-tuning" className="text-sky-400 hover:underline">Fine-tuning</Link>{" "}
                        changes behavior — tone, format, domain phrasing, how the model
                        responds — and is the right tool when you need the model to act
                        differently, not just know different facts. Many production systems
                        use both: fine-tuning for style, RAG for knowledge.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where RAG goes wrong</h2>
                    <p>
                        Most RAG failures are retrieval failures, not model failures. If
                        the retriever returns the wrong chunks, the best model in the world
                        will answer from bad context. Common culprits: chunks too large or
                        too small, an embedding model mismatched to the domain, no metadata
                        filtering, and no re-ranking of results. Another quiet failure is
                        the prompt injection risk — if you retrieve from untrusted content,
                        a malicious document can carry instructions. See{" "}
                        <Link href="/glossary/what-is-prompt-injection" className="text-sky-400 hover:underline">prompt injection</Link>{" "}
                        for how that plays out.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Evaluation matters</h2>
                    <p>
                        Because RAG has moving parts, you cannot eyeball quality from a
                        handful of demos. Serious teams measure retrieval quality (did we
                        fetch the right passages?) separately from answer quality (did the
                        model use them faithfully?). They build a labeled question set,
                        track metrics over time, and re-run them on every change to
                        chunking, embeddings, or prompts. This evaluation discipline is
                        part of treating an AI feature as a real product, the same way{" "}
                        <Link href="/glossary/what-is-mlops" className="text-sky-400 hover:underline">MLOps</Link>{" "}
                        treats a model.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        When clients ask for an "AI feature," what they usually need is
                        RAG done carefully. Our{" "}
                        <Link href="/services/ai-integration-services" className="text-sky-400 hover:underline">AI integration</Link>{" "}
                        work starts with the unglamorous parts: clean ingestion, sensible
                        chunking, the right embedding model, and an evaluation harness so we
                        can prove the thing actually works before it ships. We also treat
                        retrieved content as untrusted input and design the prompt
                        boundary accordingly. A grounded answer with a citation beats a
                        fluent answer with no source, every time.
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
                        <li><Link href="/glossary/what-is-an-llm" className="text-sky-400 hover:underline">What is an LLM?</Link></li>
                        <li><Link href="/glossary/what-is-an-embedding" className="text-sky-400 hover:underline">What is an embedding?</Link></li>
                        <li><Link href="/glossary/what-is-a-vector-database" className="text-sky-400 hover:underline">What is a vector database?</Link></li>
                        <li><Link href="/glossary/what-is-fine-tuning" className="text-sky-400 hover:underline">What is fine-tuning?</Link></li>
                        <li><Link href="/glossary/what-is-prompt-injection" className="text-sky-400 hover:underline">What is prompt injection?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Want a RAG feature that actually works?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We build grounded, source-citing AI features with an evaluation
                        harness behind them — not demos that fall apart in production.
                        Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-rag" />
                        <Link href="/services/ai-integration-services" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            AI integration services
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
