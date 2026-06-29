import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is MLOps? Plain-English Guide (2026) | QUANT LAB USA",
    description:
        "MLOps applies DevOps discipline to machine learning: versioning, deployment, monitoring, and retraining. Plain-English definition and lifecycle. By QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-mlops" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "MLOps",
    description:
        "MLOps is the set of practices for reliably deploying, monitoring, and maintaining machine-learning models in production, applying the automation and discipline of DevOps to data, models, and the systems that serve them.",
    url: "https://quantlabusa.dev/glossary/what-is-mlops",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "MLOps", item: "https://quantlabusa.dev/glossary/what-is-mlops" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is MLOps in one sentence?", acceptedAnswer: { "@type": "Answer", text: "MLOps is the discipline of deploying, monitoring, and maintaining machine-learning models in production reliably — DevOps practices extended to cover data and models, not just code." } },
        { "@type": "Question", name: "How is MLOps different from DevOps?", acceptedAnswer: { "@type": "Answer", text: "DevOps ships code. MLOps also has to version data and models, handle retraining, and monitor for the model silently getting worse as the real world drifts away from its training data." } },
        { "@type": "Question", name: "What is model drift?", acceptedAnswer: { "@type": "Answer", text: "Drift is when a model's accuracy decays over time because the live data no longer matches what it was trained on. Unlike a code bug, it produces no error — just quietly worse predictions." } },
        { "@type": "Question", name: "Do I need MLOps for an LLM feature?", acceptedAnswer: { "@type": "Answer", text: "Yes, in spirit. Even when you call a hosted model, you still need versioned prompts, evaluation sets, monitoring, and a rollback path — the same operational discipline under a different name." } },
        { "@type": "Question", name: "What tools are used for MLOps?", acceptedAnswer: { "@type": "Answer", text: "Experiment trackers like MLflow or Weights & Biases, feature stores, model registries, pipeline orchestrators, and monitoring tools — but tools follow the practice, they do not replace it." } },
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
                        <li className="text-gray-300">MLOps</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Data & AI</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is MLOps?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        MLOps is what it takes to run machine learning in production without it quietly falling apart. It extends the automation and discipline of DevOps to cover the messy extras that models bring — versioned data, trained artifacts, evaluation, monitoring for silent decay, and a repeatable path to retrain and redeploy. It is the difference between a demo and a system you can trust.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why models need their own operations</h2>
                    <p>
                        A traditional application is deterministic: the same input yields
                        the same output until someone changes the code. A machine-learning
                        system has three moving parts — code, data, and the trained model —
                        and any of them can change the behavior. The training data shifts,
                        the model is retrained, a hyperparameter is tuned, and suddenly the
                        output is different with no code change at all. MLOps exists because
                        you cannot manage that with the same assumptions you bring to
                        ordinary software.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">MLOps vs. DevOps</h2>
                    <p>
                        MLOps inherits everything from{" "}
                        <Link href="/services/devops-engineering" className="text-sky-400 hover:underline">DevOps</Link>{" "}
                        — automated builds, continuous deployment, infrastructure as code —
                        and adds the parts unique to learning systems. You version not just
                        code but datasets and model artifacts, so any prediction can be
                        traced back to the exact data and weights that produced it. You
                        treat retraining as a first-class pipeline, not a manual chore. And
                        you monitor a failure mode that has no equivalent in normal
                        software: a model that throws no errors yet steadily gets worse.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The lifecycle</h2>
                    <p>
                        A mature MLOps loop runs continuously: ingest and validate data;
                        engineer features (often through a{" "}
                        <Link href="/glossary/what-is-a-feature-store" className="text-sky-400 hover:underline">feature store</Link>{" "}
                        so training and serving stay consistent); train and track
                        experiments so results are reproducible; evaluate against a
                        held-out set and gate deployment on the metrics; deploy behind the
                        same safeguards as any service; then monitor inputs, outputs, and
                        accuracy in production. When monitoring detects drift, the loop
                        kicks off again. The whole thing rests on a reliable{" "}
                        <Link href="/services/data-engineering" className="text-sky-400 hover:underline">data engineering</Link>{" "}
                        foundation.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The drift problem</h2>
                    <p>
                        The most insidious MLOps failure is model drift. The world moves —
                        customer behavior shifts, fraud patterns evolve, a product launches
                        — and the live data drifts away from what the model learned. The
                        model keeps returning confident answers; they are just increasingly
                        wrong. There is no stack trace, no 500 error, nothing to page on
                        unless you are explicitly watching prediction quality. Catching
                        drift requires monitoring the distribution of inputs and outputs and
                        comparing live performance to a baseline, which is why observability
                        is core to MLOps rather than an afterthought.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">LLMOps is the same discipline</h2>
                    <p>
                        The rise of hosted{" "}
                        <Link href="/glossary/what-is-an-llm" className="text-sky-400 hover:underline">large language models</Link>{" "}
                        does not let you skip operations — it just relabels them. You no
                        longer train the model, but you still version prompts, maintain
                        evaluation sets, monitor cost and latency per token, guard against{" "}
                        <Link href="/glossary/what-is-prompt-injection" className="text-sky-400 hover:underline">prompt injection</Link>,
                        and keep a rollback path when a provider changes a model under you.
                        Whether you call a{" "}
                        <Link href="/glossary/what-is-fine-tuning" className="text-sky-400 hover:underline">fine-tuned</Link>{" "}
                        model or a hosted one, the operational discipline is the same.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        We treat an AI or ML feature as a system to be operated, not a model
                        to be demoed. On{" "}
                        <Link href="/services/ai-integration-services" className="text-sky-400 hover:underline">AI integration</Link>{" "}
                        work that means an evaluation harness before launch, versioned
                        prompts or models, monitoring for drift and cost, and a clean
                        rollback path — the same engineering rigor our{" "}
                        <Link href="/services/devops-engineering" className="text-sky-400 hover:underline">DevOps</Link>{" "}
                        practice brings to any production service. The flashy part is the
                        model; the part that keeps it useful six months later is MLOps.
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
                        <li><Link href="/glossary/what-is-a-feature-store" className="text-sky-400 hover:underline">What is a feature store?</Link></li>
                        <li><Link href="/glossary/what-is-an-llm" className="text-sky-400 hover:underline">What is an LLM?</Link></li>
                        <li><Link href="/glossary/what-is-fine-tuning" className="text-sky-400 hover:underline">What is fine-tuning?</Link></li>
                        <li><Link href="/glossary/what-is-etl" className="text-sky-400 hover:underline">What is ETL?</Link></li>
                        <li><Link href="/glossary/what-is-ci-cd" className="text-sky-400 hover:underline">What is CI/CD?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Putting a model into production?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We build the evaluation, monitoring, and retraining pipeline that
                        keeps an ML or AI feature trustworthy long after launch. Book a
                        30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-mlops" />
                        <Link href="/services/devops-engineering" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            DevOps engineering
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
