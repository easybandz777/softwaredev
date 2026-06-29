import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AuthorByline } from "@/components/AuthorByline";
import { EditorialFooter } from "@/components/EditorialFooter";
import { Sources } from "@/components/Sources";
import { ArrowRight, Check, Coins } from "lucide-react";
import { articleMetadata } from "@/lib/seoMeta";
import { articleSchema, faqSchema } from "@/lib/schemas";
import { getAuthor, authorUrl } from "@/lib/authors";

const SLUG = "llm-cost-optimization-2026";
const PUBLISHED = "2026-06-03";
const TITLE = "LLM Cost Optimization (2026)";
const author = getAuthor("bill-beltz");

export const metadata: Metadata = articleMetadata({
    title: "LLM Cost Optimization: A 2026 Engineering Guide",
    description:
        "Cut LLM API spend without hurting quality: prompt caching, model routing, context trimming, batching, output limits, and per-tenant quotas — with code and a checklist.",
    slug: `blog/${SLUG}`,
    image: "/og-image.png",
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    authors: [author.name],
    keywords: [
        "llm cost optimization",
        "reduce llm api costs 2026",
        "prompt caching model routing",
        "llm token cost",
    ],
});

const faqs = [
    {
        q: "How do I reduce LLM API costs?",
        a: "Attack the token bill from several angles at once. Cache responses and reuse prompt prefixes so you stop paying to recompute identical work. Route easy requests to a small cheap model and reserve the frontier model for hard ones. Trim prompts and retrieved context to what the task needs. Cap output length. Batch background jobs to discounted batch endpoints. And set per-tenant quotas so a single customer cannot blow up your bill. Each lever is independent, so they stack — together they routinely cut spend by a large fraction with no quality loss.",
    },
    {
        q: "What is prompt caching and how much does it save?",
        a: "Prompt caching lets the provider reuse the computation for a stable prompt prefix — a long system prompt, few-shot examples, or retrieved context that repeats across requests. Instead of paying full input price every call, the cached portion is billed at a steep discount. The savings are largest when you have a big fixed prefix and many requests, which is exactly the shape of most production RAG and agent workloads. Structure prompts so the stable part comes first and the variable part comes last to maximize cache hits.",
    },
    {
        q: "Should I use a smaller model to save money?",
        a: "For many requests, yes — and the right answer is usually a router, not a single model. Send simple classification, extraction, and short rewrites to a small fast model, and escalate only the genuinely hard requests to a frontier model. A cascade that tries the cheap model first and falls back on low confidence captures most of the savings while protecting quality on the hard cases. Validate the split against your evaluation set so you know the cheaper model actually holds up on the traffic you route to it.",
    },
    {
        q: "Does a longer context window cost more?",
        a: "Yes. You pay per input token, so stuffing a large context window with marginally relevant text is a direct cost with diminishing returns. In a RAG system, reranking and trimming to the few passages that actually answer the query cuts input tokens sharply and often improves quality by reducing noise. Treat context as a budget: include what is needed to answer, not everything you retrieved.",
    },
    {
        q: "What is batch processing for LLMs?",
        a: "Many providers offer a batch or asynchronous endpoint that processes large volumes of requests at a significant discount in exchange for higher latency. For any workload that does not need a real-time answer — bulk classification, enrichment, offline summarization, evaluation runs — routing it through the batch endpoint cuts the per-token cost substantially. Keep interactive requests on the standard endpoint and push everything that can wait to batch.",
    },
    {
        q: "How do I track and attribute LLM costs?",
        a: "Instrument cost at the request level: log input and output token counts, the model used, the cache-hit ratio, and the user or tenant for every call. Roll those up into cost per request, cost per feature, and cost per active user. Without per-tenant attribution you cannot tell which customers are unprofitable or meter usage into pricing. Cost observability is the prerequisite for every other optimization — you cannot cut what you cannot see.",
    },
];

const sources = [
    {
        label: "Anthropic Docs — Prompt Caching",
        href: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching",
        publisher: "Anthropic",
    },
    {
        label: "Anthropic Docs — Message Batches",
        href: "https://docs.anthropic.com/en/docs/build-with-claude/message-batches",
        publisher: "Anthropic",
    },
    {
        label: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks",
        href: "https://arxiv.org/abs/2005.11401",
        publisher: "arXiv",
    },
];

export default function LlmCostOptimizationPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        articleSchema({
                            headline: "LLM Cost Optimization: A 2026 Engineering Guide",
                            description:
                                "Prompt caching, model routing, context trimming, batching, output limits, and per-tenant quotas to cut LLM API spend without hurting quality.",
                            datePublished: PUBLISHED,
                            slug: SLUG,
                            image: "https://quantlabusa.dev/og-image.png",
                            author: { name: author.name, url: authorUrl(author.slug) },
                            section: "AI Engineering",
                            keywords: [
                                "llm cost optimization",
                                "reduce llm api costs 2026",
                                "prompt caching model routing",
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
                        <Coins className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs uppercase tracking-widest text-violet-400 mb-3">
                        AI Engineering · 2026
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                        LLM Cost Optimization: A 2026 Engineering Guide
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed mb-6 max-w-2xl">
                        An AI feature that loses money on every call is a liability, not a
                        feature. This is the practitioner&apos;s guide to cutting LLM API spend
                        without touching quality: prompt caching, model routing, context
                        trimming, batching, output limits, and per-tenant quotas — with code
                        and a checklist.
                    </p>
                    <AuthorByline
                        author={author}
                        publishedDate={PUBLISHED}
                        readMinutes={12}
                        className="mb-8"
                    />
                    <ConsultationCTA
                        label="Audit Your AI Spend"
                        service="AI Integration Services"
                        source="blog-llm-cost"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-violet-400/30 bg-violet-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Quick answer
                        </h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>
                                Cut LLM cost by stacking independent levers: cache responses and
                                prompt prefixes, route easy requests to a cheap model and hard ones
                                to a frontier model, trim prompts and retrieved context to what the
                                task needs, cap output length, push non-real-time work to batch
                                endpoints, and quota per tenant. Instrument cost per request first —
                                you cannot cut what you cannot see. Done together, these routinely
                                cut spend by a large fraction with no quality loss.
                            </strong>
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Token cost is a cost of goods sold, and at scale it dominates the
                            margin of an AI feature. We build cost controls into AI features from
                            day one through our{" "}
                            <Link
                                href="/services/ai-integration-services"
                                className="text-violet-400 hover:underline"
                            >
                                AI integration practice
                            </Link>
                            , and we meter expensive features into pricing through{" "}
                            <Link
                                href="/services/subscription-billing"
                                className="text-violet-400 hover:underline"
                            >
                                subscription &amp; usage billing
                            </Link>
                            . The levers below are ordered roughly by return on effort.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        1. Measure first: cost observability
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            You cannot optimize what you cannot see. Before changing anything, log
                            the cost of every call so you know where the money goes.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                Record input tokens, output tokens, model, cache-hit ratio, and the
                                tenant for each request.
                            </li>
                            <li>
                                Roll up to cost per request, cost per feature, and cost per active
                                user.
                            </li>
                            <li>
                                Alert on cost spikes the same way you alert on error rates — a
                                runaway loop can be expensive fast.
                            </li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        2. Prompt caching: stop paying twice
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Most production prompts have a large stable prefix — a system prompt,
                            few-shot examples, or retrieved context — followed by a small variable
                            part. Prompt caching bills that stable prefix at a steep discount on
                            subsequent calls. Structure the prompt so the fixed content comes
                            first.
                        </p>
                        <pre className="overflow-x-auto rounded-xl border border-white/10 bg-[#0a1120] p-4 text-sm">
                            <code>{`// Put the STABLE prefix first so it can be cached;
// the variable user turn comes last.
const messages = [
  { role: "system", content: LONG_STABLE_INSTRUCTIONS, cache: true },
  { role: "system", content: FEW_SHOT_EXAMPLES,        cache: true },
  { role: "user",   content: userQuestion },   // the only part that changes
];`}</code>
                        </pre>
                        <p>
                            Also cache full responses for identical inputs in your own layer — an
                            exact-match or semantic cache in front of the model turns repeated
                            questions into near-zero-cost lookups.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        3. Model routing and cascades
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Not every request needs your most expensive model. Route by difficulty:
                            classify the request, send simple ones to a small fast model, and
                            escalate only hard ones to a frontier model. A cascade tries the cheap
                            model first and falls back on low confidence.
                        </p>
                        <pre className="overflow-x-auto rounded-xl border border-white/10 bg-[#0a1120] p-4 text-sm">
                            <code>{`// Cheap-first cascade: escalate only when needed
async function answer(task) {
  const cheap = await smallModel(task);
  if (cheap.confidence >= 0.8) return cheap;   // most traffic stops here
  return await frontierModel(task);            // reserve the expensive call
}`}</code>
                        </pre>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Validate the routing split against your evaluation set.</li>
                            <li>Use small models for classification, extraction, and short rewrites.</li>
                            <li>Reserve frontier models for reasoning-heavy or high-stakes output.</li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        4. Trim context and cap output
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            You pay for every token in and out. In a RAG system, reranking and
                            trimming to the few passages that truly answer the query cuts input
                            cost and often improves quality by removing noise — see our{" "}
                            <Link
                                href="/blog/building-a-rag-pipeline-2026"
                                className="text-violet-400 hover:underline"
                            >
                                RAG pipeline guide
                            </Link>
                            .
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Pass only the context needed to answer, not everything retrieved.</li>
                            <li>Set a max-output-tokens limit; unbounded generations are unbounded cost.</li>
                            <li>Prefer concise output formats; ask for JSON or bullet points, not prose, when that is all you need.</li>
                            <li>Summarize long conversation history instead of resending it verbatim every turn.</li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        5. Batch, quota, and meter
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Anything that does not need a real-time answer belongs on a discounted
                            batch endpoint. And on the demand side, protect yourself: per-tenant
                            quotas stop one customer from running up the bill, and metering folds
                            genuinely expensive usage back into pricing.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                Route bulk classification, enrichment, and offline jobs to batch
                                endpoints for a large per-token discount.
                            </li>
                            <li>
                                Set per-user and per-tenant rate limits and quotas; fail closed when
                                exceeded.
                            </li>
                            <li>
                                Meter heavy AI usage into your plan — see{" "}
                                <Link
                                    href="/blog/saas-pricing-models-explained-2026"
                                    className="text-violet-400 hover:underline"
                                >
                                    SaaS pricing models explained
                                </Link>
                                .
                            </li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Mid-post: find the spend, then cut it
                    </h2>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-8 text-center">
                        <p className="text-gray-300 mb-6">
                            Most AI bills hide easy wins — uncached prefixes, the frontier model
                            doing work a small model could, unbounded output. Book a free scoping
                            call and we&apos;ll find the biggest levers in your stack.
                        </p>
                        <ConsultationCTA
                            label="Audit Your AI Spend"
                            service="AI Integration Services"
                            source="blog-llm-cost-mid"
                        />
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        The cost levers at a glance
                    </h2>
                    <div className="overflow-x-auto mt-4">
                        <table className="w-full text-sm text-left border border-white/10 rounded-xl overflow-hidden">
                            <thead className="bg-[#0d1526] text-white">
                                <tr>
                                    <th className="px-4 py-3 border-b border-white/10">Lever</th>
                                    <th className="px-4 py-3 border-b border-white/10">
                                        What it cuts
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Prompt caching</td>
                                    <td className="px-4 py-3">
                                        Repeated input tokens on stable prefixes
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Response cache</td>
                                    <td className="px-4 py-3">Full cost of repeated identical requests</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Model routing</td>
                                    <td className="px-4 py-3">Frontier-model cost on easy requests</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Context trimming</td>
                                    <td className="px-4 py-3">Input tokens from over-stuffed prompts</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Output limits</td>
                                    <td className="px-4 py-3">Runaway output token cost</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Batch endpoints</td>
                                    <td className="px-4 py-3">Per-token price on non-real-time jobs</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-gray-400 mt-4">
                        For where cost control fits into shipping AI features at all, see{" "}
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
                            Cost discipline decays without process. Three habits keep spend in
                            check past launch:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong className="text-white">Cost in CI.</strong> Track token cost
                                on your evaluation runs so a prompt change that doubles cost is
                                caught before it ships.
                            </li>
                            <li>
                                <strong className="text-white">Re-shop the model market.</strong>{" "}
                                Pricing and capability move fast; re-evaluate your routing tiers on a
                                cadence.
                            </li>
                            <li>
                                <strong className="text-white">Guard the loops.</strong> Cap retries
                                and agent iterations; a misbehaving loop is the most common surprise
                                bill.
                            </li>
                        </ul>
                        <p>
                            Where your data and caches live affects cost too — our{" "}
                            <Link
                                href="/services/data-engineering"
                                className="text-violet-400 hover:underline"
                            >
                                data engineering practice
                            </Link>{" "}
                            builds the retrieval and caching layers that keep token usage low.
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
                            { href: "/services/subscription-billing", label: "Subscription & Usage Billing service" },
                            { href: "/blog/building-a-rag-pipeline-2026", label: "Building a RAG pipeline (2026)" },
                            { href: "/blog/adding-ai-features-to-your-saas-2026", label: "Adding AI features to your SaaS" },
                            { href: "/blog/vector-database-comparison-2026", label: "Vector database comparison (2026)" },
                            { href: "/blog/saas-pricing-models-explained-2026", label: "SaaS pricing models explained (2026)" },
                            { href: "/contact", label: "Talk to Bill about your AI spend" },
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
                            Keep the feature, cut the bill.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            We audit AI workloads for the highest-return cost levers — caching,
                            routing, context, batching — and implement them without hurting
                            quality. Book a free scoping call.
                        </p>
                        <ConsultationCTA
                            label="Book the Scoping Call"
                            service="AI Integration Services"
                            source="blog-llm-cost-cta"
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
                        topics={["saas", "stack"]}
                        pinned={[
                            "saas-pricing-models-explained-2026",
                            "scaling-a-saas-database-guide-2026",
                            "subscription-billing-system-architecture",
                        ]}
                        heading="More SaaS engineering reading"
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
