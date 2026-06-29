import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is a Feature Store? Plain-English Guide | QUANT LAB USA",
    description:
        "A feature store centralizes ML features so training and serving stay consistent. Plain-English definition, training-serving skew, when you need one. By QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-a-feature-store" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Feature Store",
    description:
        "A feature store is a centralized system for defining, storing, and serving the engineered input variables (features) used by machine-learning models, ensuring the same feature values are used consistently in training and in production.",
    url: "https://quantlabusa.dev/glossary/what-is-a-feature-store",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "Feature Store", item: "https://quantlabusa.dev/glossary/what-is-a-feature-store" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is a feature store in one sentence?", acceptedAnswer: { "@type": "Answer", text: "A feature store is a central system for defining, storing, and serving the input variables a machine-learning model uses, so the same values are computed the same way in training and production." } },
        { "@type": "Question", name: "What is a feature in machine learning?", acceptedAnswer: { "@type": "Answer", text: "A feature is an input variable a model learns from — for example a customer's average order value or days since last login. Models are only as good as the features fed into them." } },
        { "@type": "Question", name: "What is training-serving skew?", acceptedAnswer: { "@type": "Answer", text: "It is when a feature is computed one way during training and a slightly different way in production, so the model sees inconsistent inputs and silently underperforms. Feature stores exist largely to prevent it." } },
        { "@type": "Question", name: "What is the difference between offline and online features?", acceptedAnswer: { "@type": "Answer", text: "Offline features are large historical batches used for training; online features are the same definitions served at low latency for live predictions. A feature store keeps both in sync." } },
        { "@type": "Question", name: "Do I need a feature store?", acceptedAnswer: { "@type": "Answer", text: "Usually only when multiple models or teams share features, or you serve real-time predictions at scale. A single model on batch data rarely justifies the added infrastructure." } },
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
                        <li className="text-gray-300">Feature Store</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Data & AI</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is a Feature Store?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        A feature store is the system that manages the inputs to machine-learning models — the engineered variables, or features, that a model learns from and predicts on. Its core job is consistency: guaranteeing that a feature computed during training is computed the exact same way when the model runs live, so the model is not quietly fed two different versions of reality.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">First, what is a feature?</h2>
                    <p>
                        A feature is a single input variable a model learns from: a
                        customer's average order value, the number of failed logins in the
                        last hour, days since last purchase, a product category. Models do
                        not learn from raw data directly; they learn from features
                        engineered out of it. The quality of those features usually matters
                        more to a model's accuracy than the choice of algorithm — which is
                        why so much machine-learning work is really{" "}
                        <Link href="/services/data-engineering" className="text-sky-400 hover:underline">data engineering</Link>{" "}
                        in disguise.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The problem it solves</h2>
                    <p>
                        Picture a fraud model. During training, a data scientist computes
                        "average transaction amount over the last 30 days" with a SQL query
                        over historical data. In production, an engineer recomputes the same
                        feature in application code, under time pressure, and rounds
                        slightly differently or uses a 28-day window. The model now sees
                        inputs that do not match what it learned from, and its accuracy
                        quietly degrades. This mismatch is called training-serving skew, and
                        it is one of the most common reasons a model that looked great in a
                        notebook disappoints in production.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Offline and online, one definition</h2>
                    <p>
                        A feature store solves skew by making each feature defined once and
                        served two ways from that single definition. The offline store holds
                        large historical batches for training. The online store serves the
                        same features at low latency for live predictions. Because both flow
                        from one definition, training and serving stay in lockstep. A good
                        feature store also handles point-in-time correctness — assembling
                        the feature values as they were at a past moment, so a model is not
                        accidentally trained on information from the future it could not have
                        known at prediction time.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Reuse and governance</h2>
                    <p>
                        Beyond consistency, a feature store is a library. Once someone
                        defines "customer lifetime value" or "30-day login frequency,"
                        every model and team can reuse it instead of rebuilding it slightly
                        differently. That cuts duplicated work, enforces a shared
                        definition, and adds governance — lineage, documentation, and access
                        control over the inputs your models depend on. As an organization
                        runs more models, this shared catalog of trusted features becomes
                        more valuable than any single model.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Do you actually need one?</h2>
                    <p>
                        Often, no. A single model trained and served in batch can live
                        happily without a dedicated feature store; the infrastructure would
                        be overhead with no payoff. Feature stores earn their cost at a
                        specific threshold: multiple models or teams sharing features,
                        real-time serving at scale, or a maturing{" "}
                        <Link href="/glossary/what-is-mlops" className="text-sky-400 hover:underline">MLOps</Link>{" "}
                        practice where training-serving skew has actually bitten you. They
                        depend on solid{" "}
                        <Link href="/glossary/what-is-etl" className="text-sky-400 hover:underline">ETL</Link>{" "}
                        feeding them — frequently from a{" "}
                        <Link href="/glossary/what-is-a-data-lake" className="text-sky-400 hover:underline">data lake</Link>{" "}
                        or warehouse — so the foundation matters more than the store itself.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        We treat a feature store as a tool to reach for when the pain it
                        cures is real, not a default box on an architecture diagram. On{" "}
                        <Link href="/services/ai-integration-services" className="text-sky-400 hover:underline">AI integration</Link>{" "}
                        work we focus first on the fundamentals — well-defined features,
                        consistent computation between training and serving, and the{" "}
                        <Link href="/services/data-engineering" className="text-sky-400 hover:underline">data pipelines</Link>{" "}
                        that produce them reliably. When a team genuinely needs shared,
                        low-latency features across multiple models, a feature store is the
                        right answer; before then, it is usually infrastructure looking for
                        a problem.
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
                        <li><Link href="/glossary/what-is-mlops" className="text-sky-400 hover:underline">What is MLOps?</Link></li>
                        <li><Link href="/glossary/what-is-etl" className="text-sky-400 hover:underline">What is ETL?</Link></li>
                        <li><Link href="/glossary/what-is-a-data-lake" className="text-sky-400 hover:underline">What is a data lake?</Link></li>
                        <li><Link href="/glossary/what-is-a-data-warehouse" className="text-sky-400 hover:underline">What is a data warehouse?</Link></li>
                        <li><Link href="/glossary/what-is-fine-tuning" className="text-sky-400 hover:underline">What is fine-tuning?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Scaling machine learning across teams?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We build the feature pipelines and consistency guarantees that keep
                        models accurate in production — and add a feature store when it
                        truly earns its place. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-featurestore" />
                        <Link href="/services/data-engineering" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Data engineering
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
