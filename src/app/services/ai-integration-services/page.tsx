import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Sparkles, Check, ArrowRight, MapPin } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

const cities: { slug: string; city: string; state: string }[] = [
    { slug: "atlanta-ga", city: "Atlanta", state: "GA" },
    { slug: "macon-ga", city: "Macon", state: "GA" },
    { slug: "augusta-ga", city: "Augusta", state: "GA" },
    { slug: "columbus-ga", city: "Columbus", state: "GA" },
    { slug: "savannah-ga", city: "Savannah", state: "GA" },
    { slug: "miami-fl", city: "Miami", state: "FL" },
    { slug: "austin-tx", city: "Austin", state: "TX" },
    { slug: "dallas-tx", city: "Dallas", state: "TX" },
    { slug: "chicago-il", city: "Chicago", state: "IL" },
    { slug: "seattle-wa", city: "Seattle", state: "WA" },
    { slug: "new-york-ny", city: "New York", state: "NY" },
    { slug: "charlotte-nc", city: "Charlotte", state: "NC" },
    { slug: "nashville-tn", city: "Nashville", state: "TN" },
    { slug: "san-francisco-ca", city: "San Francisco", state: "CA" },
];

export const metadata = pageMetadata({
    title: "AI Integration Services (Claude, OpenAI, RAG) | QUANT LAB USA",
    description:
        "Production AI integration — Claude, OpenAI, Anthropic, RAG, agents, evals. 2026-grade rate-limit handling, cost monitoring, fallback chains. Founder-led USA firm.",
    slug: "services/ai-integration-services",
    image: "/og-services.png",
    type: "article",
});

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "AI Integration Services",
    name: "AI Integration Services — Claude, OpenAI, RAG, and Agentic Systems",
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Founder-led AI integration services for B2B software products. Claude API and OpenAI integration, retrieval-augmented generation (RAG) pipelines, agentic systems with tool use, evaluation harnesses, prompt caching, structured outputs, and the guardrails your product needs to stay correct under production load.",
    url: "https://quantlabusa.dev/services/ai-integration-services",
    offers: {
        "@type": "Offer",
        priceRange: "$8,000-$95,000",
        priceCurrency: "USD",
        description: "Fixed-fee scope per phase",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://quantlabusa.dev/services" },
        { "@type": "ListItem", position: 3, name: "AI Integration Services", item: "https://quantlabusa.dev/services/ai-integration-services" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Claude or OpenAI — which one should we use?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Default to Claude for long-context work, structured outputs, and agentic tool use — particularly Claude Opus and Sonnet for production reliability. OpenAI when you need specific GPT-4o capabilities, real-time voice, or you have an existing infrastructure investment. We frequently ship hybrid setups where the router picks the right model for each task.",
            },
        },
        {
            "@type": "Question",
            name: "What is RAG and do we need it?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Retrieval-augmented generation lets the model answer questions against your private documents, knowledge base, or database without retraining. You need it when your AI feature has to be grounded in specific business data — support agents, internal search, document review, sales enablement. We build RAG pipelines with hybrid keyword + vector retrieval, chunk-level citations, and an eval harness.",
            },
        },
        {
            "@type": "Question",
            name: "How do you handle hallucinations and correctness?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Three layers. Structured outputs with JSON schema validation so the response shape is guaranteed. Citations from retrieved documents so claims are auditable. An evaluation harness with regression tests and human-graded samples so we catch drift before users do. AI features without these layers are demos, not products.",
            },
        },
        {
            "@type": "Question",
            name: "What does prompt caching actually save us?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Anthropic prompt caching cuts the cost of large system prompts and retrieved-context payloads by up to 90% on cache hits and significantly reduces time-to-first-token. We design every Claude integration to cache aggressively — system prompt, tool definitions, retrieved documents — so per-request cost stays predictable as you scale.",
            },
        },
        {
            "@type": "Question",
            name: "Do we own the AI integration code?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Completely. You get the GitHub repository, the prompt templates, the eval harness, and the deployment configuration. The API keys are in your accounts. You can switch providers, swap models, or move on-prem without rebuilding the surrounding system.",
            },
        },
    ],
};

export default function AIIntegrationServicesPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="container mx-auto px-6 max-w-4xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/services" className="hover:text-sky-400 transition-colors">Services</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">AI Integration Services</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-fuchsia-500 to-pink-400 mb-6">
                        <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        AI Integration Services That Actually Ship to Production
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Claude, OpenAI, and open-source model integration. RAG pipelines, agentic systems, evals, and the guardrails your product needs to stay correct under load. Founder-led — we tell you straight when a feature does not need AI.
                    </p>
                    <ConsultationCTA label="Scope an AI Integration" service="AI Integration Services" source="services-ai" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Past the demo, into production</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Every B2B product has a Slack channel full of AI demos that worked once in a Loom recording and never made it into the product. The pattern is consistent — a senior engineer wires up the OpenAI SDK over a weekend, the demo is great, the team puts it on the roadmap, and then production reveals the problems. Token costs balloon. The model hallucinates in ways the demo never exposed. Edge cases go uncovered because there is no eval harness. The feature ships, breaks for a real customer, and gets quietly turned off.
                        </p>
                        <p>
                            AI integration services are the engineering layer that turns a working demo into a feature you can put your product reputation behind. Structured outputs, schema validation, evaluation harnesses, prompt caching, retrieval-augmented generation, model routing, fallback paths, audit logging — the unsexy parts that decide whether your AI feature stays on or gets turned off.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build</h2>
                    <ul className="space-y-3">
                        {[
                            "Claude API integration — Opus and Sonnet, with prompt caching, tool use, and extended thinking",
                            "OpenAI integration — GPT-4o, GPT-5, structured outputs, function calling, and the Realtime API",
                            "Retrieval-augmented generation (RAG) pipelines with hybrid keyword + vector retrieval and citations",
                            "Vector database setup on pgvector, Pinecone, Qdrant, or Weaviate depending on scale and budget",
                            "Agentic systems with tool use, state management, and the right hand-off model for your domain",
                            "Evaluation harnesses with regression tests, golden datasets, and human-graded sample queues",
                            "Structured outputs with JSON schema validation, retries, and fallback paths when the model fails",
                            "Prompt management — versioning, A/B testing, and rollout controls so prompt changes are deployable",
                            "Model routing — cheap model first, premium model on escalation, with cost and latency tracking",
                            "Open-source model deployment on vLLM, Ollama, or Together AI when self-hosted is the right call",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-fuchsia-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Our methodology</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            One-week AI feasibility audit first. We talk to the team, look at the data, write a one-page document that says either "this is an AI problem worth solving" or "this is a database query and a regex." That audit is paid separately at $2,500 and you keep the doc either way.
                        </p>
                        <p>
                            When the answer is yes, we run a two- to twelve-week build with an eval harness from day one. We do not ship AI features without a baseline eval — too many demos pass vibes-based testing and break the moment a real customer types something unexpected. Production launch is gated by eval scores against the regression set, not founder enthusiasm.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Process &amp; timeline</h2>
                    <ul className="space-y-3">
                        {[
                            "Week 1: AI feasibility audit — data review, baseline eval, written recommendation",
                            "Week 2-3: Prototype — first prompt iteration, structured outputs, basic retrieval if RAG-based",
                            "Week 4-8: Hardening — eval harness, regression suite, prompt caching, model routing, audit logs",
                            "Week 9-12: Production launch — staged rollout, monitoring, cost dashboards, on-call runbook",
                            "Optional retainer: ongoing prompt tuning, model upgrades, eval expansion, new feature integration",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-fuchsia-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech &amp; tools</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            "Claude API + SDK",
                            "OpenAI API + SDK",
                            "Anthropic Prompt Caching",
                            "pgvector + Pinecone",
                            "LangChain + LlamaIndex",
                            "Vercel AI SDK",
                            "PromptLayer + Braintrust",
                            "Ollama + vLLM",
                            "Inngest + Trigger.dev",
                        ].map((tool) => (
                            <div key={tool} className="rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 text-sm text-gray-300">
                                {tool}
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                        Layered on top of our standard <Link href="/services/api-development" className="text-fuchsia-400 hover:underline">API development</Link> stack and <Link href="/services/saas-platform-development" className="text-fuchsia-400 hover:underline">SaaS platform</Link> backbone. The AI is one tier of the system, not the whole product.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Reference builds</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            AI integration shows up across our production work. <Link href="/work/j5-sales-os" className="text-fuchsia-400 hover:underline">J5 Sales OS</Link> uses LLM-driven contact enrichment, outreach personalization, and a curated lead-scoring loop. <Link href="/work/contractor-estimating-proposal-engine" className="text-fuchsia-400 hover:underline">A contractor estimating engine</Link> uses Claude to draft proposal language from job scoping notes. <Link href="/work/wilder-recovery" className="text-fuchsia-400 hover:underline">Wilder Recovery</Link> uses AI-assisted intake and content workflows.
                        </p>
                        <p>
                            We dogfood our own architecture before we ship it to clients. Every prompt cache strategy, eval harness pattern, and RAG retrieval approach we recommend has run against our internal workloads first. No experiments paid for by client projects.
                        </p>
                        <p>
                            AI integration services served from <Link href="/software-development-macon-ga" className="text-fuchsia-400 hover:underline">Macon, GA</Link>, with clients across <Link href="/software-development-atlanta-ga" className="text-fuchsia-400 hover:underline">Atlanta</Link>, <Link href="/software-development-austin-tx" className="text-fuchsia-400 hover:underline">Austin</Link>, <Link href="/software-development-san-francisco-ca" className="text-fuchsia-400 hover:underline">San Francisco</Link>, and beyond.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pricing</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Fixed-fee per scope. Typical ranges:
                        </p>
                        <ul className="space-y-2 list-disc list-inside">
                            <li>One-week AI feasibility audit with written recommendation: $2,500 flat</li>
                            <li>Single AI feature added to an existing product (structured outputs, evals, caching): $8k – $22k</li>
                            <li>Full RAG pipeline with vector DB, retrieval evals, and admin tooling: $18k – $48k</li>
                            <li>Agentic system with tool use, state management, and production guardrails: $30k – $80k</li>
                            <li>AI-native product MVP — full SaaS surface plus AI core: $55k – $95k</li>
                        </ul>
                        <p>
                            30-day post-launch support included. Optional retainer for ongoing prompt tuning, model upgrades, and eval expansion.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What you get</h2>
                    <ul className="space-y-3">
                        {[
                            "Full source code repository in your GitHub organization",
                            "Eval harness with regression tests, golden datasets, and a human-grading queue",
                            "Prompt templates versioned and deployable independently of code releases",
                            "API keys in your Anthropic and OpenAI accounts — no shared credentials",
                            "Cost dashboard with per-feature, per-customer, and per-prompt attribution",
                            "Audit logs for every AI-generated output — input, output, model version, cost, latency",
                            "Production runbook for the top failure modes and how to triage them",
                            "Optional retainer for ongoing AI work and platform upgrades",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-fuchsia-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "Claude or OpenAI — which one should we use?",
                                a: "Default to Claude for long-context work, structured outputs, and agentic tool use — particularly Claude Opus and Sonnet for production reliability. OpenAI when you need specific GPT-4o capabilities, real-time voice, or you have an existing infrastructure investment. We frequently ship hybrid setups where the router picks the right model for each task.",
                            },
                            {
                                q: "What is RAG and do we need it?",
                                a: "Retrieval-augmented generation lets the model answer questions against your private documents, knowledge base, or database without retraining. You need it when your AI feature has to be grounded in specific business data — support agents, internal search, document review, sales enablement. We build RAG pipelines with hybrid keyword + vector retrieval, chunk-level citations, and an eval harness.",
                            },
                            {
                                q: "How do you handle hallucinations and correctness?",
                                a: "Three layers. Structured outputs with JSON schema validation so the response shape is guaranteed. Citations from retrieved documents so claims are auditable. An evaluation harness with regression tests and human-graded samples so we catch drift before users do. AI features without these layers are demos, not products.",
                            },
                            {
                                q: "What does prompt caching actually save us?",
                                a: "Anthropic prompt caching cuts the cost of large system prompts and retrieved-context payloads by up to 90% on cache hits and significantly reduces time-to-first-token. We design every Claude integration to cache aggressively — system prompt, tool definitions, retrieved documents — so per-request cost stays predictable as you scale.",
                            },
                            {
                                q: "Do we own the AI integration code?",
                                a: "Completely. You get the GitHub repository, the prompt templates, the eval harness, and the deployment configuration. The API keys are in your accounts. You can switch providers, swap models, or move on-prem without rebuilding the surrounding system.",
                            },
                        ].map((item) => (
                            <div key={item.q} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["stack","saas"]}
                        heading="Engineering reading"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { slug: "api-development", title: "API Development", desc: "The API layer that fronts your AI features." },
                            { slug: "saas-platform-development", title: "SaaS Platform Development", desc: "AI-native SaaS builds end to end." },
                            { slug: "custom-crm-development", title: "Custom CRM Development", desc: "AI-enriched CRM with model-routed enrichment." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-fuchsia-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-fuchsia-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-6 leading-relaxed">
                        Background on our data-ownership philosophy: <Link href="/blog/custom-crm-development-guide" className="text-fuchsia-400 hover:underline">the custom CRM development guide</Link>. To scope an AI integration, <Link href="/contact" className="text-fuchsia-400 hover:underline">contact us</Link> directly.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <MapPin className="w-6 h-6 text-fuchsia-400" />
                        <h2 className="text-2xl md:text-3xl font-bold text-white">AI Integration Services — Where We Serve</h2>
                    </div>
                    <p className="text-gray-400 leading-relaxed mb-6 max-w-3xl">
                        Georgia-based engineering team, working with AI-curious clients across 14 US metros. Discovery and build run remotely; in-person prompt-engineering sessions easy to schedule in Atlanta and the Southeast.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {cities.map((c) => (
                            <Link
                                key={c.slug}
                                href={`/software-development-${c.slug}`}
                                className="group flex items-center justify-between rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 transition-all hover:border-fuchsia-400/30 hover:bg-[#0d1526]"
                            >
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-fuchsia-400 flex-shrink-0" />
                                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                                        {c.city}, {c.state}
                                    </span>
                                </div>
                                <ArrowRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-fuchsia-400 group-hover:translate-x-0.5 transition-all" />
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ship the AI feature your users actually trust.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz directly at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or book a 20-minute scope call. Founder-led from feasibility audit through production launch.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" service="AI Integration Services" source="services-ai" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
