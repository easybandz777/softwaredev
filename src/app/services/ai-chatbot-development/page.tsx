import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Bot, Check, ArrowRight, MapPin } from "lucide-react";
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
    title: "AI Chatbot Development | RAG, LLM Agents | QUANT LAB USA",
    description:
        "Custom AI chatbot development on GPT, Claude, and open models. RAG over your data, tool-calling agents, guardrails, and evals. Founder-led. Call (770) 652-1282.",
    slug: "services/ai-chatbot-development",
    image: "/og-services.png",
    type: "article",
});

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "AI Chatbot Development",
    name: "Custom AI Chatbot and LLM Agent Development",
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Custom AI chatbot development on GPT, Claude, Gemini, and open-weight models. Retrieval-augmented generation over your own documents, tool-calling agents that take real actions, prompt guardrails, evaluation harnesses, and streaming chat interfaces built on Next.js and TypeScript.",
    url: "https://quantlabusa.dev/services/ai-chatbot-development",
    offers: {
        "@type": "Offer",
        priceRange: "$10,000-$90,000",
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
        { "@type": "ListItem", position: 3, name: "AI Chatbot Development", item: "https://quantlabusa.dev/services/ai-chatbot-development" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Which model should we use — GPT, Claude, Gemini, or open source?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "It depends on the task, the data residency requirements, and the budget. We benchmark candidates against your actual prompts and an eval set, then pick on quality, latency, and cost per conversation. Many production systems route easy turns to a cheap model and escalate hard ones, and we build that routing in.",
            },
        },
        {
            "@type": "Question",
            name: "Can the chatbot answer from our own documents and data?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We build retrieval-augmented generation pipelines that ingest your PDFs, help-center articles, database records, and tickets, chunk and embed them, and ground every answer in citations. The bot says when it does not know instead of hallucinating, which is the difference between a demo and something you can ship.",
            },
        },
        {
            "@type": "Question",
            name: "How do you stop the bot from making things up or going off the rails?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Grounded retrieval with citations, system-prompt guardrails, output schema validation, refusal handling, and an evaluation harness that scores every release on a fixed test set. We also add input filtering and rate limiting so the bot cannot be jailbroken into a liability or run up your token bill.",
            },
        },
        {
            "@type": "Question",
            name: "Can the chatbot take actions, not just answer questions?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Tool-calling agents can look up an order, create a ticket, schedule a meeting, or trigger a workflow through your API. We scope every tool with permissions and confirmation steps so the agent does useful work without doing dangerous work.",
            },
        },
        {
            "@type": "Question",
            name: "Do we own the code and the prompts?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Completely. You get the GitHub repository, the prompt library, the eval suite, the retrieval pipeline, and the deployment configuration. You bring your own model API keys, so there is no per-message markup and no platform lock-in.",
            },
        },
    ],
};

export default function AIChatbotDevelopmentPage() {
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
                        <li className="text-gray-300">AI Chatbot Development</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-400 mb-6">
                        <Bot className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        AI Chatbot Development That Survives Contact With Real Users
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Retrieval-augmented chatbots grounded in your own data, tool-calling agents that take real actions, guardrails, and the evaluation harness that keeps quality from drifting. Built on GPT, Claude, and open models with Next.js and TypeScript.
                    </p>
                    <ConsultationCTA label="Scope an AI Chatbot" service="AI Chatbot Development" source="services-ai-chatbot" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When the demo works but production does not</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Anyone can wire a chat box to an LLM API in an afternoon. The demo dazzles. Then a real customer asks a question your training data never covered, the bot invents a refund policy that does not exist, and now you have a support escalation instead of a deflection. The gap between a weekend prototype and a chatbot you can put in front of paying customers is almost entirely the unglamorous parts — grounding, guardrails, evaluation, and observability.
                        </p>
                        <p>
                            Production AI chatbot development is what closes that gap. Answers grounded in your actual documents with citations. Guardrails that keep the bot on-topic and refuse what it should refuse. An eval suite that catches a regression before it ships, not after a customer screenshots it. Logging that shows you exactly what the bot said, why it said it, and which source it pulled from. We build the boring parts so the impressive part actually holds up.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build</h2>
                    <ul className="space-y-3">
                        {[
                            "Retrieval-augmented generation (RAG) over your PDFs, docs, help center, tickets, and database with cited answers",
                            "Tool-calling agents that look up records, create tickets, schedule meetings, and trigger workflows through your API",
                            "Streaming chat UI in Next.js and React with markdown, code blocks, citations, and typing indicators",
                            "Multi-model routing — cheap model for easy turns, frontier model for hard ones — with automatic fallback",
                            "Prompt guardrails, output schema validation, refusal handling, and jailbreak resistance",
                            "Evaluation harness that scores every release against a fixed test set before it ships",
                            "Vector search on pgvector, Pinecone, or Qdrant with hybrid keyword-plus-semantic retrieval",
                            "Conversation memory, session persistence, and per-user context across turns",
                            "Human handoff — escalation to a live agent with full transcript context when the bot is unsure",
                            "Observability — token usage, latency, cost per conversation, and a transcript review dashboard",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Our methodology</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            AI work starts with an eval set, not a prompt. Discovery produces a representative set of real questions and the answers a good bot should give. That eval set becomes the contract: every prompt change, model swap, and retrieval tweak is measured against it, so we are improving a number instead of arguing about vibes. The retrieval pipeline is built and tuned before the conversational layer, because a confident answer grounded in the wrong document is worse than no answer.
                        </p>
                        <p>
                            Two-week discovery → eval-set design and retrieval build → phased agent build (4 to 12 weeks typical) → guarded rollout with transcript review. You own the source code, the prompts, the eval suite, and the deployment, and you bring your own model API keys.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech &amp; tools</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            "OpenAI + Anthropic APIs",
                            "Next.js + TypeScript",
                            "Vercel AI SDK",
                            "pgvector / Pinecone / Qdrant",
                            "LangChain / LlamaIndex",
                            "PostgreSQL + Prisma",
                            "Redis + queues",
                            "Eval harness (Promptfoo)",
                            "Open models (Llama, Mistral)",
                        ].map((tool) => (
                            <div key={tool} className="rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 text-sm text-gray-300">
                                {tool}
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                        Deployed on Vercel, AWS, Fly.io, or your own infrastructure. The chatbot rides on the same PostgreSQL backbone and API discipline we use for every <Link href="/services/ai-integration-services" className="text-indigo-400 hover:underline">AI integration</Link>, <Link href="/services/third-party-api-integration" className="text-indigo-400 hover:underline">API integration</Link>, and <Link href="/services/saas-platform-development" className="text-indigo-400 hover:underline">SaaS platform</Link> we ship.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Where chatbots earn their keep</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The chatbots that pay for themselves are not the ones that try to do everything. They are scoped to a job: deflecting tier-one support tickets with cited answers, helping a sales team draft proposals, letting staff query an internal knowledge base in plain English, or guiding a customer through onboarding. We scope the job first and build the narrowest agent that does it well, then expand.
                        </p>
                        <p>
                            Every chatbot we ship is grounded, evaluated, and observable, so when a stakeholder asks "why did it say that?" there is an answer in the logs. That auditability is what lets you put an AI in a regulated workflow without inheriting a compliance problem.
                        </p>
                        <p>
                            AI chatbot development served from <Link href="/software-development-macon-ga" className="text-indigo-400 hover:underline">Macon, GA</Link>, with clients across <Link href="/software-development-atlanta-ga" className="text-indigo-400 hover:underline">Atlanta</Link>, <Link href="/software-development-new-york-ny" className="text-indigo-400 hover:underline">New York</Link>, <Link href="/software-development-san-francisco-ca" className="text-indigo-400 hover:underline">San Francisco</Link>, and the rest of the US.
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
                            <li>Single-purpose RAG support bot over your help center: $10k – $25k</li>
                            <li>Internal knowledge-base assistant with auth and access control: $18k – $45k</li>
                            <li>Tool-calling agent that takes actions through your API: $30k – $70k</li>
                            <li>Multi-channel deployment (web + Slack + widget) with handoff: $35k – $90k</li>
                            <li>Discovery sprint with eval set and retrieval prototype: $3,500 flat</li>
                        </ul>
                        <p>
                            Model API usage is billed to your own provider account at cost — no per-message markup. 30-day post-launch support included, with an optional retainer for prompt tuning and new tools.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What you get</h2>
                    <ul className="space-y-3">
                        {[
                            "Full source code repository in your GitHub organization",
                            "Prompt library, retrieval pipeline, and the evaluation suite that scores quality",
                            "Production deployment with a staging environment for prompt and model testing",
                            "Transcript review dashboard with token usage, latency, and cost-per-conversation metrics",
                            "30-day post-launch support — prompt tuning, retrieval fixes, and model updates",
                            "Guardrail and refusal policy documentation so stakeholders know the boundaries",
                            "Your own model API keys wired in — no markup, no lock-in, full portability",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
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
                                q: "Which model should we use — GPT, Claude, Gemini, or open source?",
                                a: "It depends on the task, the data residency requirements, and the budget. We benchmark candidates against your actual prompts and an eval set, then pick on quality, latency, and cost per conversation. Many production systems route easy turns to a cheap model and escalate hard ones, and we build that routing in.",
                            },
                            {
                                q: "Can the chatbot answer from our own documents and data?",
                                a: "Yes. We build retrieval-augmented generation pipelines that ingest your PDFs, help-center articles, database records, and tickets, chunk and embed them, and ground every answer in citations. The bot says when it does not know instead of hallucinating, which is the difference between a demo and something you can ship.",
                            },
                            {
                                q: "How do you stop the bot from making things up or going off the rails?",
                                a: "Grounded retrieval with citations, system-prompt guardrails, output schema validation, refusal handling, and an evaluation harness that scores every release on a fixed test set. We also add input filtering and rate limiting so the bot cannot be jailbroken into a liability or run up your token bill.",
                            },
                            {
                                q: "Can the chatbot take actions, not just answer questions?",
                                a: "Yes. Tool-calling agents can look up an order, create a ticket, schedule a meeting, or trigger a workflow through your API. We scope every tool with permissions and confirmation steps so the agent does useful work without doing dangerous work.",
                            },
                            {
                                q: "Do we own the code and the prompts?",
                                a: "Completely. You get the GitHub repository, the prompt library, the eval suite, the retrieval pipeline, and the deployment configuration. You bring your own model API keys, so there is no per-message markup and no platform lock-in.",
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
                        topics={["stack", "saas"]}
                        heading="AI & stack reading"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { slug: "ai-integration-services", title: "AI Integration Services", desc: "Embedding LLMs and AI features into existing products." },
                            { slug: "third-party-api-integration", title: "Third-Party API Integration", desc: "Wiring your bot's tools to the systems it needs to act on." },
                            { slug: "saas-platform-development", title: "SaaS Platform Development", desc: "Full multi-tenant builds where the AI is a core feature." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-indigo-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-6 leading-relaxed">
                        Background reading on the stack we build on: <Link href="/blog/nextjs-16-app-router-guide-2026" className="text-indigo-400 hover:underline">the Next.js 16 App Router guide</Link>. To scope an AI chatbot project, <Link href="/contact" className="text-indigo-400 hover:underline">contact us</Link> directly.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <MapPin className="w-6 h-6 text-indigo-400" />
                        <h2 className="text-2xl md:text-3xl font-bold text-white">AI Chatbot Development — Where We Serve</h2>
                    </div>
                    <p className="text-gray-400 leading-relaxed mb-6 max-w-3xl">
                        Georgia-based engineering team, working with clients across 14 US metros. AI chatbot design and build runs remotely; in-person reviews available in Atlanta and the Southeast.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {cities.map((c) => (
                            <Link
                                key={c.slug}
                                href={`/software-development-${c.slug}`}
                                className="group flex items-center justify-between rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 transition-all hover:border-indigo-400/30 hover:bg-[#0d1526]"
                            >
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                                        {c.city}, {c.state}
                                    </span>
                                </div>
                                <ArrowRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all" />
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to ship an AI chatbot you can defend in a review.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz directly at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or book a 20-minute scope call. Founder-led from eval-set design through guarded rollout.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" service="AI Chatbot Development" source="services-ai-chatbot" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
