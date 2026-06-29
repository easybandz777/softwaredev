import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is an LLM (Large Language Model)? Guide | QUANT LAB USA",
    description:
        "An LLM is a neural network trained to predict the next token across vast text. Plain-English definition, how it works, tokens, context windows. By QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-an-llm" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Large Language Model (LLM)",
    description:
        "A large language model is a neural network with billions of parameters trained on vast amounts of text to predict the next token, enabling it to generate, summarize, translate, and reason over natural language.",
    url: "https://quantlabusa.dev/glossary/what-is-an-llm",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "Large Language Model", item: "https://quantlabusa.dev/glossary/what-is-an-llm" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is an LLM in one sentence?", acceptedAnswer: { "@type": "Answer", text: "A large language model is a neural network trained on huge amounts of text to predict the next token, which lets it generate, summarize, translate, and reason over natural language." } },
        { "@type": "Question", name: "What is a token?", acceptedAnswer: { "@type": "Answer", text: "A token is a chunk of text — roughly a word or part of a word — that the model reads and produces one at a time. Pricing, context limits, and speed are all measured in tokens." } },
        { "@type": "Question", name: "What is a context window?", acceptedAnswer: { "@type": "Answer", text: "The context window is the maximum number of tokens the model can consider at once, covering both your input and its output. Exceed it and earlier content is dropped." } },
        { "@type": "Question", name: "Why do LLMs hallucinate?", acceptedAnswer: { "@type": "Answer", text: "An LLM predicts plausible text, not verified facts. When it lacks the right information it still produces fluent output, which can be confidently wrong unless grounded with retrieval." } },
        { "@type": "Question", name: "Are all LLMs the same?", acceptedAnswer: { "@type": "Answer", text: "No. They differ in size, training data, context window, speed, cost, and how they were tuned. Closed models like GPT and Claude and open ones like Llama each suit different use cases." } },
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
                        <li className="text-gray-300">Large Language Model</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Data & AI</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is an LLM (Large Language Model)?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        A large language model is a neural network with billions of parameters trained on enormous quantities of text to do one deceptively simple thing: predict the next token. From that single objective emerges the ability to write, summarize, translate, answer questions, and follow instructions — the capability behind nearly every AI product shipping in 2026.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Next-token prediction</h2>
                    <p>
                        At its core an LLM is a very good autocomplete. Given a sequence of
                        tokens, it outputs a probability distribution over what comes next,
                        picks one, appends it, and repeats. Trained on a large fraction of
                        the public internet, books, and code, this turns into something
                        far richer than autocomplete: to predict the next word in a math
                        proof, a legal clause, or a Python function, the model has to
                        internalize structure, grammar, facts, and patterns of reasoning.
                        Scale — more data, more parameters, more compute — is what made the
                        behavior leap from toy to useful.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Tokens and context windows</h2>
                    <p>
                        LLMs do not read characters or whole words; they read tokens —
                        chunks roughly the size of a word or word-fragment. Two numbers
                        govern almost every practical decision. The context window is how
                        many tokens the model can hold at once, spanning both your prompt
                        and its reply; exceed it and the oldest content falls out of view.
                        Token count also drives cost and latency, since providers bill per
                        token and longer prompts run slower. Designing an AI feature is
                        partly the art of fitting the right information into that window.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">From base model to assistant</h2>
                    <p>
                        A raw pretrained model just continues text; it will not reliably
                        follow instructions. The chat assistants people use are the result
                        of additional training: instruction tuning teaches the model to
                        follow requests, and reinforcement learning from human feedback
                        (RLHF) shapes it toward helpful, honest, harmless responses. You
                        can also adapt a model to your own domain with{" "}
                        <Link href="/glossary/what-is-fine-tuning" className="text-sky-400 hover:underline">fine-tuning</Link>,
                        which adjusts behavior and tone rather than teaching new facts.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why they hallucinate</h2>
                    <p>
                        Because the objective is plausibility, not truth, an LLM will
                        happily produce a fluent, confident, fabricated answer when it
                        lacks the facts. It has no built-in sense of "I do not know." The
                        standard defense is to ground the model in real data using{" "}
                        <Link href="/glossary/what-is-retrieval-augmented-generation" className="text-sky-400 hover:underline">retrieval-augmented generation</Link>,
                        which retrieves relevant documents and inserts them into the prompt
                        so the model summarizes real sources instead of guessing. Citations
                        and evaluation close the loop.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">A new class of security risk</h2>
                    <p>
                        LLMs blur the line between data and instructions: text the model
                        reads can change what the model does. That opens{" "}
                        <Link href="/glossary/what-is-prompt-injection" className="text-sky-400 hover:underline">prompt injection</Link>,
                        a class of attack with no equivalent in traditional software, where
                        a malicious document or web page hijacks the model's behavior. Any
                        application that lets an LLM read untrusted content or take actions
                        needs to treat the model's output as untrusted and bound its
                        permissions accordingly.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        We help teams put LLMs to work without the hype tax. Our{" "}
                        <Link href="/services/ai-integration-services" className="text-sky-400 hover:underline">AI integration</Link>{" "}
                        engagements start by separating what an LLM is genuinely good at —
                        summarization, extraction, drafting, classification — from what it
                        is not, and choosing the right model for the cost, latency, and
                        privacy the use case demands. We pair the model with retrieval for
                        grounding, an evaluation harness for quality, and clear permission
                        boundaries for safety. The model is the easy part; the system
                        around it is the work.
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
                        <li><Link href="/glossary/what-is-retrieval-augmented-generation" className="text-sky-400 hover:underline">What is RAG?</Link></li>
                        <li><Link href="/glossary/what-is-fine-tuning" className="text-sky-400 hover:underline">What is fine-tuning?</Link></li>
                        <li><Link href="/glossary/what-is-an-embedding" className="text-sky-400 hover:underline">What is an embedding?</Link></li>
                        <li><Link href="/glossary/what-is-prompt-injection" className="text-sky-400 hover:underline">What is prompt injection?</Link></li>
                        <li><Link href="/glossary/what-is-mlops" className="text-sky-400 hover:underline">What is MLOps?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Putting an LLM into your product?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We design LLM features that are grounded, evaluated, and safe to
                        ship — choosing the right model for your cost and privacy needs.
                        Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-llm" />
                        <Link href="/services/ai-integration-services" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            AI integration services
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
