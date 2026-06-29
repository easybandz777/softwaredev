import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is Fine-Tuning? Plain-English Guide (2026) | QUANT LAB USA",
    description:
        "Fine-tuning adapts a pretrained model to your task with extra training. Plain-English definition, when to use it vs. RAG, LoRA, costs. By QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-fine-tuning" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Fine-Tuning",
    description:
        "Fine-tuning is the process of taking a pretrained machine-learning model and training it further on a smaller, task-specific dataset so it adapts its behavior, tone, or format to a particular use case.",
    url: "https://quantlabusa.dev/glossary/what-is-fine-tuning",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "Fine-Tuning", item: "https://quantlabusa.dev/glossary/what-is-fine-tuning" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is fine-tuning in one sentence?", acceptedAnswer: { "@type": "Answer", text: "Fine-tuning continues training a pretrained model on a smaller, task-specific dataset so it adapts its behavior, tone, or output format to your particular use case." } },
        { "@type": "Question", name: "Should I fine-tune or use RAG?", acceptedAnswer: { "@type": "Answer", text: "Use RAG when you need the model to know specific or changing facts. Use fine-tuning when you need it to behave differently — a consistent format, tone, or domain style. Many systems use both." } },
        { "@type": "Question", name: "What is LoRA?", acceptedAnswer: { "@type": "Answer", text: "LoRA (Low-Rank Adaptation) is a parameter-efficient fine-tuning method that trains a small set of added weights instead of the whole model, cutting cost and storage dramatically while keeping most of the benefit." } },
        { "@type": "Question", name: "How much data do I need to fine-tune?", acceptedAnswer: { "@type": "Answer", text: "Often less than people expect — sometimes a few hundred to a few thousand high-quality, consistent examples. Quality and consistency of the examples matter far more than raw volume." } },
        { "@type": "Question", name: "Can fine-tuning go wrong?", acceptedAnswer: { "@type": "Answer", text: "Yes. It can overfit narrow examples, cause the model to forget general skills, or bake in mistakes from low-quality data. Without an evaluation set you cannot tell improvement from regression." } },
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
                        <li className="text-gray-300">Fine-Tuning</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Data & AI</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is Fine-Tuning?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        Fine-tuning takes a model that already learned general capabilities during pretraining and trains it a little further on a smaller, focused dataset — so it adopts a specific behavior, tone, or output format. It is how you teach a general-purpose model to act like a specialist, without training one from scratch.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Standing on a pretrained base</h2>
                    <p>
                        Training a capable{" "}
                        <Link href="/glossary/what-is-an-llm" className="text-sky-400 hover:underline">large language model</Link>{" "}
                        from zero costs millions of dollars and enormous datasets. Fine-tuning
                        sidesteps that by starting from a model that already understands
                        language, code, and reasoning, then nudging its weights with a few
                        hundred to a few thousand task-specific examples. You inherit all
                        the general capability and spend a tiny fraction of the compute to
                        specialize it. The same idea applies to image and audio models,
                        though the language-model case dominates current demand.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Behavior, not facts</h2>
                    <p>
                        The most common mistake is reaching for fine-tuning to make a model
                        "know" your company's data. That is usually the wrong tool.
                        Fine-tuning excels at shaping how a model responds — enforcing a
                        rigid JSON format, adopting a brand voice, classifying into your
                        categories, or speaking a niche domain dialect. For injecting
                        facts that change over time, <Link href="/glossary/what-is-retrieval-augmented-generation" className="text-sky-400 hover:underline">retrieval-augmented generation</Link>{" "}
                        is the better fit, because you can update the knowledge instantly
                        without retraining and can cite sources.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Fine-tuning vs. RAG vs. prompting</h2>
                    <p>
                        Think of three escalating levers. Prompt engineering is free,
                        instant, and should always be tried first — a better prompt solves
                        a surprising number of problems. RAG adds knowledge from an
                        external store. Fine-tuning changes the model itself and is the
                        heaviest lever: it costs money, takes time, and produces an
                        artifact you must version and maintain. The right architecture
                        often combines them — a fine-tuned model for consistent behavior,
                        fed by RAG for current facts, steered by a tight prompt.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">LoRA and parameter-efficient methods</h2>
                    <p>
                        Updating every weight in a multi-billion-parameter model is
                        expensive and produces a full-size copy per task. Parameter-efficient
                        fine-tuning avoids that. LoRA (Low-Rank Adaptation) freezes the
                        original weights and trains a small set of added matrices, capturing
                        most of the benefit for a fraction of the compute and storage — and
                        letting you swap adapters per task. These techniques are why
                        fine-tuning moved from a big-lab luxury to something a small team
                        can do on modest hardware.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The data is the hard part</h2>
                    <p>
                        Fine-tuning is only as good as its examples. A few hundred clean,
                        consistent, representative examples beat tens of thousands of noisy
                        ones; the model faithfully learns whatever patterns — including
                        mistakes — live in the data. The work is in curation, labeling, and
                        deduplication, the same{" "}
                        <Link href="/services/data-engineering" className="text-sky-400 hover:underline">data engineering</Link>{" "}
                        discipline that underpins any model. And you cannot tell whether a
                        run helped without a held-out evaluation set measured before and
                        after — which is squarely an{" "}
                        <Link href="/glossary/what-is-mlops" className="text-sky-400 hover:underline">MLOps</Link>{" "}
                        concern.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        Our first move on an{" "}
                        <Link href="/services/ai-integration-services" className="text-sky-400 hover:underline">AI integration</Link>{" "}
                        project is usually to talk teams out of fine-tuning — at least at
                        first. A sharper prompt or a solid retrieval layer often delivers
                        what they actually want without the cost and maintenance burden of a
                        custom model. When fine-tuning is genuinely the right call — a hard
                        format requirement, a specialized domain, a latency-sensitive
                        narrow task — we invest in the data curation and the evaluation
                        harness up front, because that is what separates a model that
                        improves from one that quietly regresses.
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
                        <li><Link href="/glossary/what-is-retrieval-augmented-generation" className="text-sky-400 hover:underline">What is RAG?</Link></li>
                        <li><Link href="/glossary/what-is-an-embedding" className="text-sky-400 hover:underline">What is an embedding?</Link></li>
                        <li><Link href="/glossary/what-is-mlops" className="text-sky-400 hover:underline">What is MLOps?</Link></li>
                        <li><Link href="/glossary/what-is-prompt-injection" className="text-sky-400 hover:underline">What is prompt injection?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Not sure if you should fine-tune?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We help teams choose between prompting, RAG, and fine-tuning — and
                        build the data and evaluation pipeline behind whichever wins. Book a
                        30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-finetuning" />
                        <Link href="/services/ai-integration-services" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            AI integration services
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
