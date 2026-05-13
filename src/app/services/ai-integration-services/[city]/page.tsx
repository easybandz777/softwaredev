import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Brain, Check, ArrowRight, MapPin } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const dynamicParams = false;

type CityConfig = {
    slug: string;
    city: string;
    state: string;
    stateFull: string;
    angle: string;
    intro: string;
    problem: string;
    modules: { title: string; desc: string }[];
    caseStudyParagraph: string;
    pricingNote: string;
    faqs: { q: string; a: string }[];
    siblings: { slug: string; city: string; desc: string }[];
};

const CITIES: Record<string, CityConfig> = {
    "macon-ga": {
        slug: "macon-ga",
        city: "Macon",
        state: "GA",
        stateFull: "Georgia",
        angle: "operator-grade LLM integration for Middle Georgia",
        intro: "Most Middle Georgia operators have watched the AI conversation happen from the sidelines. The vendors selling them ChatGPT-flavored CRMs are charging enterprise rates for features that should cost a fifth of that, and the in-house path requires engineering depth that an HVAC shop or a small clinic does not carry. A founder-led AI integration partner closes that gap.",
        problem: "Generic AI add-ons get bolted onto SaaS products without thought to the actual operator workflow. The result is a chatbot the customer ignores, a summarization feature nobody trusts, and a monthly bill that does not move the business. Real AI integration means picking the right model for the right step in the workflow — and that takes experience.",
        modules: [
            { title: "OpenAI + Anthropic API integration", desc: "GPT-4 class and Claude class wired into your existing app — summarization, classification, extraction, drafting. Real workflows, not demoware." },
            { title: "Document intake + extraction", desc: "Invoice, contract, intake form, and PDF extraction into your operational database. The pattern that actually pays back for trades, clinics, and small operators." },
            { title: "Retrieval-augmented generation (RAG)", desc: "Postgres + pgvector-backed semantic search over your business knowledge base. Answers grounded in your actual data, not the model's training set." },
            { title: "Macon-area on-site discovery", desc: "Same area code. We meet at the office to map the workflow before we touch a line of code." },
        ],
        caseStudyParagraph: "Macon-relevant AI reference work includes the AI features we ship across our portfolio — document extraction in our contractor estimating engine, semantic search and summarization patterns in our operations platforms (J5 Sales OS, UEhub), and prompt-engineering discipline across client work. Same patterns translate cleanly to a Macon clinic's intake automation or a Middle Georgia manufacturer's quote-document extraction.",
        pricingNote: "Macon AI integration engagements typically scope between $15,000 and $60,000 for a focused integration, with most clients on fixed-fee per-phase. Document extraction and RAG builds land mid-range.",
        faqs: [
            { q: "Will an AI integration actually pay back for a Macon trades or clinic operation?", a: "Sometimes yes, sometimes no. We will tell you straight at discovery. Document extraction, intake automation, and summarization usually pay back inside a year for operators handling 50+ documents a week." },
            { q: "OpenAI, Anthropic, or open-source models?", a: "Depends on the workflow. Closed-source for accuracy-critical extraction and classification; open-source via Ollama or vLLM when latency and cost dominate. We scope the right tool at discovery." },
            { q: "How do you handle PHI or PII in an AI workflow?", a: "Carefully. PHI never goes to a third-party LLM without a BAA. We scope HIPAA-aligned workflows deliberately and use on-prem or BAA-covered model providers when the data demands it." },
            { q: "Are you available for on-site Macon discovery?", a: "Yes. HQ is in Macon. On-site workflow mapping across Bibb, Houston, Jones, and Monroe counties is standard." },
            { q: "How long does an AI integration take to ship?", a: "Typical Macon AI integration ships in 4 to 8 weeks for a focused build, longer for full RAG systems with custom embedding pipelines." },
            { q: "Who owns the prompts and the integration code?", a: "You do. Full handoff at delivery — prompts, code, and any custom model fine-tuning artifacts." },
        ],
        siblings: [
            { slug: "atlanta-ga", city: "Atlanta, GA", desc: "Fintech and logistics AI up I-75." },
            { slug: "augusta-ga", city: "Augusta, GA", desc: "Defense-adjacent and CSRA AI builds." },
        ],
    },
    "atlanta-ga": {
        slug: "atlanta-ga",
        city: "Atlanta",
        state: "GA",
        stateFull: "Georgia",
        angle: "fintech, logistics, and SaaS AI integration",
        intro: "Atlanta's AI demand is shaped by Transaction Alley, the logistics and freight base, and a SaaS founder pool that has been pitched a thousand AI features. The buyers who win the next two years are not the ones who slap a chatbot on top of their product — they are the ones who pick the right LLM for the right step in their actual workflow and wire it cleanly into their data layer.",
        problem: "Atlanta's AI agency ecosystem will happily quote $200,000 for a generic GPT integration. The freelance market produces prototypes that never reach production. The middle path — senior engineering, fixed scope, real production-grade integration — is the gap we sit in.",
        modules: [
            { title: "Fintech AI workflows", desc: "Customer support classification, dispute summarization, compliance-document extraction for Transaction Alley clients. Built with audit trails by default." },
            { title: "Logistics + freight AI", desc: "Load-document extraction, route summarization, dispatch-call transcription and routing for the Atlanta freight base." },
            { title: "SaaS AI features", desc: "RAG over customer data, smart-default suggestions, semantic search inside your existing SaaS product — wired cleanly into your Postgres source of truth." },
            { title: "SOC 2-aware AI integration", desc: "PII redaction, audit logging, and prompt-injection-aware guardrails in the SDLC." },
        ],
        caseStudyParagraph: "Atlanta-relevant AI reference work includes the AI features we ship in our portfolio — document extraction in our contractor estimating engine, semantic search and prompt engineering in J5 Sales OS, and our algorithmic trading systems work that informs how we wire low-latency AI inference into operator dashboards. Same patterns ship into a fintech support classifier or a freight broker's load-document extractor.",
        pricingNote: "Atlanta AI integration engagements typically scope between $25,000 and $110,000 for a production-grade integration, with fintech and compliance-aware builds at the upper end.",
        faqs: [
            { q: "Will the AI integration survive a SOC 2 review?", a: "Yes. We document the data flow, redact PII before sending to LLM providers, and produce the audit logging procurement teams ask for." },
            { q: "Can you handle prompt injection and abuse?", a: "Yes — input validation, output filtering, rate limiting, and red-team review are standard for our AI builds." },
            { q: "Do you understand Stripe + AI workflows?", a: "Yes — Stripe is a core practice. Dispute summarization, support classification, and entitlement-aware AI flows are in scope." },
            { q: "Will you bake-off against an in-house Atlanta engineering team?", a: "Yes. Code samples, architecture walk-through, and a live whiteboard on request." },
            { q: "Closed-source vs open-source LLM?", a: "Depends on the workflow. We scope the right tool at discovery." },
            { q: "Available for on-site Atlanta kickoffs?", a: "Yes. Short drive up I-75 from the HQ." },
        ],
        siblings: [
            { slug: "macon-ga", city: "Macon, GA", desc: "Our HQ — Middle Georgia AI integration." },
            { slug: "charlotte-nc", city: "Charlotte, NC", desc: "Banking-adjacent AI integration." },
        ],
    },
    "augusta-ga": {
        slug: "augusta-ga",
        city: "Augusta",
        state: "GA",
        stateFull: "Georgia",
        angle: "defense-adjacent and CSRA SMB AI integration",
        intro: "Augusta's AI demand is split between the Fort Eisenhower cyber corridor — vendors thinking about controlled-environment LLMs — and the medical, legal, and contracting base that needs document extraction and intake automation without sending PHI to a third-party model. The integration patterns that survive in this market are HIPAA-aware, audit-friendly, and shipped by people who understand the security context.",
        problem: "Most AI agencies are too consumer-focused to take federal supply-chain or HIPAA reviews seriously. Augusta SMB and defense-adjacent AI work needs a partner who treats data control as a first-class concern from day one.",
        modules: [
            { title: "On-prem and BAA-covered LLM workflows", desc: "Open-source models via Ollama, vLLM, or Llama.cpp for environments where third-party LLM APIs are off the table — or BAA-covered Anthropic / OpenAI when the data permits." },
            { title: "Document extraction for federal vendors", desc: "Invoice, contract, RFP, and capture-document extraction modeled into your Postgres database — audit-logged on every step." },
            { title: "Provider-facing intake automation", desc: "Patient intake summarization and routing for CSRA medical practices, scoped with BAA and HIPAA-aligned architecture." },
            { title: "Security-aware AI SDLC", desc: "Same shop that runs the pen tests writes the AI integration — prompt injection, output filtering, and abuse modeling in the process." },
        ],
        caseStudyParagraph: "Augusta-relevant AI work crosses into our cybersecurity practice — penetration testing reports formatted for federal supply-chain and SOC 2 review, with the same threat-modeling discipline showing up in our AI builds. ProtectWithBri (a client-facing portal handling sensitive communications) is one published reference; AI patterns we ship include redaction, audit logging, and signed-token activation that hold up to a real security review.",
        pricingNote: "Augusta AI engagements typically scope between $20,000 and $80,000 — small-clinic intake automation lands at the bottom; federally-reviewable on-prem LLM workflows land at the top.",
        faqs: [
            { q: "Can you build an AI integration that passes a federal vendor review?", a: "Yes. Architecture documentation, audit trails, and on-prem or BAA-covered model providers when the data demands it." },
            { q: "Do you handle PHI in an AI workflow?", a: "Case-by-case with BAA and HIPAA-aligned architecture. PHI does not go to non-BAA providers." },
            { q: "Are you available for on-site Augusta work?", a: "Yes. Short drive up I-20." },
            { q: "On-prem LLM via Ollama or vLLM?", a: "Yes — open-source models in controlled environments are in scope." },
            { q: "Can the AI work in an air-gapped environment?", a: "Yes. Open-source models running on customer infrastructure are supported." },
            { q: "Who owns the prompts and the integration code?", a: "You do." },
        ],
        siblings: [
            { slug: "atlanta-ga", city: "Atlanta, GA", desc: "Fintech and logistics AI." },
            { slug: "charlotte-nc", city: "Charlotte, NC", desc: "Banking-adjacent AI." },
        ],
    },
    "columbus-ga": {
        slug: "columbus-ga",
        city: "Columbus",
        state: "GA",
        stateFull: "Georgia",
        angle: "Chattahoochee Valley operator AI integration",
        intro: "The Chattahoochee Valley business base — defense-adjacent, manufacturers, and trades on both sides of the river — has watched the AI conversation from the sidelines. The vendors selling them GPT features are charging Atlanta prices for tools that nearly fit. A founder-led AI partner who can ship a focused, paid-back integration for a Columbus or Phenix City operator is the gap.",
        problem: "Generic AI add-ons do not understand jobsite workflows, manufacturing line records, or QuickBooks-driven small-operator accounting. Custom AI integration scoped to the actual workflow is what closes that gap without enterprise pricing.",
        modules: [
            { title: "Document extraction for manufacturers", desc: "Invoice, PO, BOM, and shipping-document extraction into your operational database." },
            { title: "Jobsite intake summarization", desc: "Voice-note transcription and summarization from the truck into the CRM record." },
            { title: "Cross-state Alabama coverage", desc: "Phenix City and Alabama-side first-class." },
            { title: "QuickBooks-aware AI", desc: "Invoice categorization and reconciliation suggestions wired into your existing QuickBooks Online setup." },
        ],
        caseStudyParagraph: "Reference work for Columbus-relevant AI integration includes the AI features in our contractor estimating engine (document extraction and quote suggestions), our operations platforms (J5 Sales OS, UEhub), and the prompt-engineering discipline across client work.",
        pricingNote: "Columbus AI engagements typically scope between $15,000 and $55,000 for a focused integration. Document extraction and intake automation land mid-range.",
        faqs: [
            { q: "Alabama-side operators?", a: "Yes — Phenix City first-class." },
            { q: "QuickBooks integration?", a: "Yes — standard pattern." },
            { q: "How long to ship?", a: "4 to 8 weeks for a focused integration." },
            { q: "On-site Columbus discovery?", a: "Yes. Short drive down I-185." },
            { q: "Closed-source vs open-source?", a: "Depends on workflow. We will tell you at discovery." },
            { q: "Who owns the prompts and code?", a: "You do." },
        ],
        siblings: [
            { slug: "macon-ga", city: "Macon, GA", desc: "Our HQ — Middle Georgia coverage." },
            { slug: "atlanta-ga", city: "Atlanta, GA", desc: "Mid-market Atlanta AI." },
        ],
    },
    "savannah-ga": {
        slug: "savannah-ga",
        city: "Savannah",
        state: "GA",
        stateFull: "Georgia",
        angle: "port-logistics and hospitality AI integration",
        intro: "Savannah's AI demand splits between the Port of Savannah and its drayage and 3PL ecosystem, the hospitality and tourism sector, and a SCAD-orbit founder base. The integration patterns that survive here are document extraction for freight, summarization for hospitality customer comms, and lean RAG over operational knowledge bases.",
        problem: "Generic AI features do not understand drayage paperwork, tour-operator booking flows, or pre-seed founder budgets. Focused custom AI integration scoped to the actual Savannah workflow is the gap.",
        modules: [
            { title: "Drayage and freight document AI", desc: "Container, BOL, and customs-document extraction into your dispatcher's pipeline." },
            { title: "Hospitality customer-comms AI", desc: "Inquiry classification, response drafting, and booking-data extraction for boutique hotels and tour operators." },
            { title: "SCAD-founder RAG MVPs", desc: "Lean Postgres + pgvector RAG builds for founders at a pre-seed price." },
            { title: "Port-adjacent integrations", desc: "TMS, AES, and freight-API integrations wired into the AI data layer." },
        ],
        caseStudyParagraph: "Savannah-relevant AI work includes the AI features in our portfolio — document extraction, semantic search, and summarization across operations platforms (J5 Sales OS, UEhub). Same patterns ship into a drayage document extractor or a boutique-hotel customer-comms classifier.",
        pricingNote: "Savannah AI engagements typically scope between $15,000 and $65,000 — pre-seed builds land low; freight-integrated drayage AI lands at the upper end.",
        faqs: [
            { q: "Tour operator AI?", a: "Yes — inquiry classification and booking extraction." },
            { q: "EDI and freight AI?", a: "Yes — drayage and container tracking in scope." },
            { q: "On-site Savannah visits?", a: "Yes — drive down I-16." },
            { q: "Pre-seed AI MVP?", a: "Yes — sized to actual runway." },
            { q: "Closed vs open-source models?", a: "Depends on workflow." },
            { q: "Who owns the prompts and code?", a: "You do." },
        ],
        siblings: [
            { slug: "macon-ga", city: "Macon, GA", desc: "Our HQ." },
            { slug: "atlanta-ga", city: "Atlanta, GA", desc: "Atlanta logistics and fintech AI." },
        ],
    },
    "miami-fl": {
        slug: "miami-fl",
        city: "Miami",
        state: "FL",
        stateFull: "Florida",
        angle: "bilingual LATAM-facing AI integration",
        intro: "Miami's AI demand is uniquely shaped — bilingual products, multi-currency context, LATAM-facing fintechs, and a hospitality sector that needs Spanish-English customer-comms classification on day one. Generic AI integrations get the language wrong and the cultural context wrong. A bilingual-aware AI partner is the gap.",
        problem: "Most AI shops train and tune for English-only workflows. By the time you switch language in Miami, accuracy degrades, latency goes up, and customer experience suffers. Bilingual AI demands explicit language detection, model selection, and prompt scaffolding from day one.",
        modules: [
            { title: "Bilingual ES/EN classification + drafting", desc: "Customer comms in both languages handled with proper language detection and per-language prompt scaffolds." },
            { title: "LATAM-aware semantic search", desc: "Postgres + pgvector RAG with bilingual embeddings — handles ES content and EN content in the same index correctly." },
            { title: "Multi-currency document extraction", desc: "Invoices, contracts, and POs across USD, BRL, MXN, COP, ARS — currency handled at the data-model level, not the prompt." },
            { title: "Hospitality AI workflows", desc: "Inquiry triage, deposit-and-folio summarization, and booking automation for the Brickell-to-South-Beach hospitality base." },
        ],
        caseStudyParagraph: "Miami-relevant AI reference work spans bilingual content sites (ProtectWithBri, Aaron Coleman Music) and operations platforms (J5 Sales OS, UEhub). Same architecture pattern: Next.js front, PostgreSQL source of truth, AI features wired into the data layer with i18n by default.",
        pricingNote: "Miami AI engagements typically scope between $20,000 and $90,000 — bilingual hospitality AI lands mid-range; multi-currency fintech AI lands at the upper end.",
        faqs: [
            { q: "Spanish-language AI?", a: "Yes — bilingual detection and per-language prompt scaffolds standard." },
            { q: "LATAM payment context in AI?", a: "Yes — multi-currency at the data-model level." },
            { q: "On-site Miami work?", a: "Yes for engagements that warrant it." },
            { q: "Survive institutional buyer review?", a: "Yes." },
            { q: "Closed vs open-source?", a: "Depends on workflow." },
            { q: "Who owns the prompts and code?", a: "You do." },
        ],
        siblings: [
            { slug: "new-york-ny", city: "New York, NY", desc: "Vertical fintech and agency AI." },
            { slug: "atlanta-ga", city: "Atlanta, GA", desc: "Mid-market fintech AI." },
        ],
    },
    "austin-tx": {
        slug: "austin-tx",
        city: "Austin",
        state: "TX",
        stateFull: "Texas",
        angle: "SaaS founder AI integration",
        intro: "Austin is full of SaaS founders thinking about AI features in their product. The good ones are not building chatbots — they are wiring LLM inference into a specific step in their customer's workflow where the model genuinely helps. The bad ones are building demoware. The difference is engineering discipline, and that is what we ship.",
        problem: "Most Austin pre-seeds get pitched generic AI feature shops or offshore prompt engineers. Senior-engineering AI integration that ships clean code, real evaluations, and full source-code handoff is rare. We fill that gap.",
        modules: [
            { title: "Product-embedded LLM features", desc: "Smart defaults, summarization, classification, and drafting inside your SaaS product — wired into your Postgres source of truth." },
            { title: "RAG over customer data", desc: "Postgres + pgvector RAG with per-tenant isolation. Tenant data never leaks across the embedding boundary." },
            { title: "Eval-first prompt development", desc: "Real test sets, scored against real customer data, with regression runs on every prompt change." },
            { title: "Cost + latency budgets", desc: "Per-call cost and latency budgets enforced at the integration layer. No surprise OpenAI bills." },
        ],
        caseStudyParagraph: "Austin-relevant AI reference work includes J5 Sales OS (sales operations with AI-assisted lead routing and summarization), the AI features in our contractor estimating engine, and the prompt-engineering discipline across client work. Same patterns ship into an Austin SaaS pre-seed building AI-first product features or a Series-A SaaS adding LLM workflows.",
        pricingNote: "Austin AI integration engagements typically scope between $20,000 and $85,000 sized to actual runway. Fixed-fee per phase, milestone-based.",
        faqs: [
            { q: "Pre-seed Austin SaaS founders?", a: "Yes — most engagements are pre-seed through Series A." },
            { q: "RAG over multi-tenant data?", a: "Yes — per-tenant isolation at the embedding layer." },
            { q: "Central time overlap?", a: "Full ET overlap from a Georgia HQ." },
            { q: "Survive Series A code review?", a: "Yes." },
            { q: "Closed vs open-source models?", a: "Depends on workflow." },
            { q: "Who owns the prompts and code?", a: "You do." },
        ],
        siblings: [
            { slug: "dallas-tx", city: "Dallas, TX", desc: "Enterprise IT AI." },
            { slug: "san-francisco-ca", city: "San Francisco, CA", desc: "Senior-engineering AI." },
        ],
    },
    "dallas-tx": {
        slug: "dallas-tx",
        city: "Dallas",
        state: "TX",
        stateFull: "Texas",
        angle: "enterprise IT AI integration",
        intro: "DFW is a corporate IT and supply-chain heavyweight. The AI integration demand here is shaped by Fortune 500 procurement teams asking for document extraction, contract analysis, and call summarization on existing internal systems. The Big Four sells $500,000 AI consulting engagements; the freelance market produces a prototype that never reaches IT review. We sit in the gap.",
        problem: "Mid-market DFW AI work needs procurement-ready documentation, fixed scope, and a partner who can produce architecture diagrams alongside the working integration. Generic AI shops cannot deliver that.",
        modules: [
            { title: "Document and contract AI", desc: "Extraction, classification, and clause-level analysis for legal, procurement, and operations teams." },
            { title: "Logistics + freight AI", desc: "Load-document extraction, route summarization, and dispatch-call transcription for the DFW freight base." },
            { title: "Procurement-ready documentation", desc: "Architecture diagrams, data-flow diagrams, SBOM-style summaries." },
            { title: "Fixed-scope AI modernization", desc: "Quoted up front, delivered against milestones. No T&M creep." },
        ],
        caseStudyParagraph: "Production AI builds in our portfolio include document extraction in our contractor estimating engine, semantic search in operations platforms (J5 Sales OS, UEhub), and the AI features across our portfolio. Same patterns translate into a DFW mid-market AI integration project.",
        pricingNote: "Dallas AI engagements typically scope between $30,000 and $120,000 for a production-grade integration with enterprise-procurement-ready documentation.",
        faqs: [
            { q: "Modernize existing AI prototypes?", a: "Often yes — assessment first." },
            { q: "Fixed scope or T&M?", a: "Fixed scope on most engagements." },
            { q: "Survive enterprise procurement?", a: "Yes." },
            { q: "Fly in for DFW kickoffs?", a: "For engagements that warrant it." },
            { q: "On-prem vs API?", a: "Both supported." },
            { q: "Who owns the prompts and code?", a: "You do." },
        ],
        siblings: [
            { slug: "austin-tx", city: "Austin, TX", desc: "SaaS founder AI." },
            { slug: "atlanta-ga", city: "Atlanta, GA", desc: "Mid-market fintech and logistics AI." },
        ],
    },
    "chicago-il": {
        slug: "chicago-il",
        city: "Chicago",
        state: "IL",
        stateFull: "Illinois",
        angle: "trading-desk and logistics AI integration",
        intro: "Chicago's AI demand is unusual — the trading and proprietary-finance ecosystem around the CBOT and CME wants low-latency inference wired into operator dashboards, the logistics base wants document extraction across legacy TMS feeds, and collar-county manufacturers want quote-and-spec extraction. Each demands engineering depth.",
        problem: "Trading desks do not buy generic chatbots. Freight brokers do not buy off-the-shelf document extractors. Custom AI integration scoped to the actual Chicago workflow is what closes the gap.",
        modules: [
            { title: "Trading-desk inference integration", desc: "Low-latency model calls wired into position, exposure, and conversation-history views. P/L, fill, and slippage context in the prompt." },
            { title: "Freight + logistics AI", desc: "Load, lane, and BOL document extraction across legacy TMS and WMS feeds." },
            { title: "Manufacturing spec + quote AI", desc: "BOM, spec sheet, and quote-document extraction for collar-county manufacturers." },
            { title: "Algorithmic ops integration", desc: "We build trading bots — we know how to wire low-latency AI inference into operator dashboards." },
        ],
        caseStudyParagraph: "Chicago-relevant AI reference work includes our algorithmic trading systems (TypeScript/Node broker integrations against IBKR, Alpaca, Tradier), the AI features in our operations platforms, and document-extraction patterns we ship across the portfolio. Same architecture supports a trading-desk AI dashboard or a freight broker's document extractor.",
        pricingNote: "Chicago AI engagements typically scope between $25,000 and $110,000. Trading-desk and low-latency builds land at the upper end.",
        faqs: [
            { q: "Trading-desk AI integration?", a: "Yes — we have algorithmic trading capability." },
            { q: "Consolidate legacy TMS feeds with AI?", a: "Yes — standard pattern." },
            { q: "Fly in for kickoffs?", a: "For engagements that warrant it." },
            { q: "Real-time inference?", a: "Yes." },
            { q: "Closed vs open-source models?", a: "Depends on workflow." },
            { q: "Who owns the prompts and code?", a: "You do." },
        ],
        siblings: [
            { slug: "new-york-ny", city: "New York, NY", desc: "Vertical finance and agency AI." },
            { slug: "dallas-tx", city: "Dallas, TX", desc: "Enterprise IT and logistics AI." },
        ],
    },
    "seattle-wa": {
        slug: "seattle-wa",
        city: "Seattle",
        state: "WA",
        stateFull: "Washington",
        angle: "dev-tools and cloud-native AI integration",
        intro: "Seattle is anchored by Amazon and Microsoft, with a deep SaaS and dev-tools ecosystem and a steady current of bootstrapped founders. Most companies here speak fluent cloud — what they want from an AI partner is Docker-native, cloud-portable, API-first AI integration that does not lock them into a specific LLM vendor.",
        problem: "Generic AI shops bring vendor SDKs that lock you into a specific model provider and a specific cloud. Seattle technical buyers want LLM-vendor-agnostic integration — clean module boundaries, documented endpoints, no lock-in.",
        modules: [
            { title: "LLM-vendor-agnostic integration", desc: "OpenAI, Anthropic, AWS Bedrock, Azure OpenAI, and open-source via Ollama or vLLM — all addressable through a thin abstraction layer." },
            { title: "Docker-native AI deployment", desc: "Container-first AI integration that drops into AWS, GCP, Azure, or your own Kubernetes." },
            { title: "API-first AI surface", desc: "Every AI workflow is a documented REST or GraphQL endpoint. Your dev tools and SaaS product call it like a peer service." },
            { title: "IAM-grade access for AI", desc: "OIDC, SAML, fine-grained RBAC on AI endpoints." },
        ],
        caseStudyParagraph: "Seattle-relevant AI reference work includes operations platforms (J5 Sales OS, UEhub) and developer-tool patterns we ship — Docker-native deploys, OpenAPI-documented endpoints, vendor-agnostic LLM abstractions. The architecture meets what a Seattle-grade engineering reviewer expects.",
        pricingNote: "Seattle AI engagements typically scope between $25,000 and $110,000 for a production-grade integration. Senior-engineering bake-off included.",
        faqs: [
            { q: "AWS Bedrock or Azure OpenAI?", a: "Yes, both supported." },
            { q: "AI as a peer service?", a: "Yes — every workflow is a documented endpoint." },
            { q: "Pacific time overlap?", a: "Morning through early afternoon Pacific from a Georgia HQ." },
            { q: "Bake-off against in-house engineers?", a: "Yes." },
            { q: "SAML/OIDC on AI endpoints?", a: "Yes." },
            { q: "Who owns the prompts and code?", a: "You do." },
        ],
        siblings: [
            { slug: "san-francisco-ca", city: "San Francisco, CA", desc: "Senior-engineering AI." },
            { slug: "austin-tx", city: "Austin, TX", desc: "SaaS founder AI." },
        ],
    },
    "new-york-ny": {
        slug: "new-york-ny",
        city: "New York",
        state: "NY",
        stateFull: "New York",
        angle: "vertical AI for finance and agency operations",
        intro: "New York is the toughest AI buyer's market in the country. Fintech, ad-tech, agency holding companies, hedge funds, SaaS founders — every one of them has been pitched an AI product, and most have been burned. The AI integrations that survive are vertical, modeled on the actual workflow, and shipped by people who can actually engineer.",
        problem: "NYC buyers do not buy AI demos. They buy verticalized AI that mirrors their actual deal flow, pitch process, or client engagement model. Most AI shops cannot ship that.",
        modules: [
            { title: "Agency client + project AI", desc: "Brief summarization, client-comms classification, and deliverable extraction joined to the project record." },
            { title: "Fund-administration-aware AI", desc: "Pitch-deck extraction, deal-IC summarization, LP-comms drafting modeled into the fund workflow." },
            { title: "Ad-tech revenue ops AI", desc: "Insertion order extraction, pacing-alert classification, and campaign brief drafting." },
            { title: "Procurement-ready AI architecture", desc: "Data-flow diagrams, SBOM-style summaries, audit logs for institutional due diligence." },
        ],
        caseStudyParagraph: "Reference AI work for NYC-style buyers spans operations platforms (J5 Sales OS, UEhub), trade and brand sites (ProtectWithBri, Wilder Recovery, Northcrest Fence), and quantitative tooling with AI surfaces. Same architecture pattern: clean Postgres schema, audit trails by default, role-scoped access.",
        pricingNote: "NYC AI engagements typically scope between $30,000 and $135,000 for a production-grade integration. Institutional-investor-ready builds land at the upper end.",
        faqs: [
            { q: "Institutional due-diligence packet?", a: "Yes — pen test reports, architecture diagrams, audit logs." },
            { q: "Fly in for kickoffs?", a: "For engagements above a certain scope." },
            { q: "Agency holding-company AI?", a: "Yes." },
            { q: "Hedge fund AI?", a: "Yes." },
            { q: "Closed vs open-source models?", a: "Depends on workflow." },
            { q: "Who owns the prompts and code?", a: "You do." },
        ],
        siblings: [
            { slug: "charlotte-nc", city: "Charlotte, NC", desc: "Banking-adjacent AI." },
            { slug: "chicago-il", city: "Chicago, IL", desc: "Trading-desk and logistics AI." },
        ],
    },
    "charlotte-nc": {
        slug: "charlotte-nc",
        city: "Charlotte",
        state: "NC",
        stateFull: "North Carolina",
        angle: "banking-adjacent compliance-aware AI integration",
        intro: "Charlotte is the southeast's banking capital. AI integrations selling into BoA, Truist, and their vendor ecosystem must clear bank-grade security review. Generic AI shops do not understand the vendor-risk game and lose the deal at procurement. We build for the regulated environment from day one.",
        problem: "Bank vendors need PII redaction, audit logging, on-prem or BAA-covered model providers, and architecture documentation that survives a real review. Off-the-shelf AI integrations check none of those boxes.",
        modules: [
            { title: "Vendor-risk-ready AI architecture", desc: "Data flow, access model, encryption-at-rest, and audit logs that survive a BoA or Truist vendor-risk review." },
            { title: "PII redaction + tokenization", desc: "Sensitive data redacted before model calls; tokenization for audit trails." },
            { title: "On-prem or BAA-covered LLM", desc: "Open-source models on customer infrastructure, or BAA-covered Anthropic / OpenAI when permissible." },
            { title: "Fintech-vendor AI modules", desc: "Pipeline, deal IC, contract analysis, and HIPAA-vendor-review state classification." },
        ],
        caseStudyParagraph: "Charlotte-relevant AI work includes J5 Sales OS (sales operations with AI-assisted summarization), ProtectWithBri (sensitive-comms portal), and the AI features across our portfolio. Same audit-trail and access-model discipline ships into Charlotte AI integration.",
        pricingNote: "Charlotte AI engagements typically scope between $30,000 and $120,000 for a production-grade integration with bank-grade security documentation.",
        faqs: [
            { q: "Survive BoA or Truist vendor review?", a: "Yes." },
            { q: "PII redaction in AI workflows?", a: "Yes — standard pattern." },
            { q: "On-site Charlotte meetings?", a: "Yes — short drive up I-85." },
            { q: "SOC 2 Type II?", a: "Yes." },
            { q: "Enterprise SSO on AI endpoints?", a: "Yes." },
            { q: "Who owns the prompts and code?", a: "You do." },
        ],
        siblings: [
            { slug: "atlanta-ga", city: "Atlanta, GA", desc: "Mid-market fintech AI." },
            { slug: "nashville-tn", city: "Nashville, TN", desc: "Healthcare and music-tech AI." },
        ],
    },
    "nashville-tn": {
        slug: "nashville-tn",
        city: "Nashville",
        state: "TN",
        stateFull: "Tennessee",
        angle: "healthcare-admin and music-tech AI",
        intro: "Nashville's AI demand splits between healthcare administration — HCA Healthcare and the surrounding provider, payer, and admin-tech ecosystem — and music and entertainment tech. Healthcare AI needs HIPAA-aligned architecture. Music-tech AI needs catalog and royalty modeling. Neither gets it off the shelf.",
        problem: "Generic AI shops do not understand HIPAA-aligned architecture for healthcare admin, and they do not understand royalty data modeling for publishers. Custom AI integration scoped to either vertical is the gap.",
        modules: [
            { title: "Provider-facing healthcare AI", desc: "Patient intake summarization, scheduling triage, and clinical-document extraction. PHI-touching with BAA and HIPAA-aligned architecture." },
            { title: "Royalty and catalog AI", desc: "Royalty-statement extraction, catalog metadata normalization, and writer-publisher splits classification." },
            { title: "Payer + admin-tech AI", desc: "Claim, contract, and HIPAA-vendor-review classification for companies selling into HCA." },
            { title: "Audit-ready AI logs", desc: "User, action, before/after — drops into HIPAA risk-analysis documentation." },
        ],
        caseStudyParagraph: "Aaron Coleman Music informs how we model catalog and royalty data for Nashville music-tech AI. Broader reference work includes UEhub (provider-facing education), Wilder Recovery (audit-aware records), and J5 Sales OS.",
        pricingNote: "Nashville AI engagements typically scope between $25,000 and $105,000. HIPAA-aligned and royalty-modeling AI land mid-to-upper range.",
        faqs: [
            { q: "PHI-touching AI?", a: "Case-by-case with BAA and HIPAA-aligned architecture." },
            { q: "Royalty extraction AI?", a: "Yes — catalog, writer, publisher modeling." },
            { q: "On-site Nashville?", a: "Yes — short drive up I-24." },
            { q: "Survive HCA vendor review?", a: "Yes." },
            { q: "Closed vs open-source models?", a: "Depends on workflow." },
            { q: "Who owns the prompts and code?", a: "You do." },
        ],
        siblings: [
            { slug: "atlanta-ga", city: "Atlanta, GA", desc: "Mid-market fintech AI." },
            { slug: "charlotte-nc", city: "Charlotte, NC", desc: "Banking-adjacent AI." },
        ],
    },
    "san-francisco-ca": {
        slug: "san-francisco-ca",
        city: "San Francisco",
        state: "CA",
        stateFull: "California",
        angle: "peer-credible AI integration",
        intro: "San Francisco is the most technical AI buyer market in the country. Every founder is one degree from a senior AI engineer. Every CTO has shipped LLM features before. Contract pitches that lean on AI buzzwords die fast on the technical screen. What survives is engineering depth — eval-first prompt development, clean abstractions, and the ability to ship.",
        problem: "Bay AI buyers see through demoware fast. The competition is in-house engineers and ex-FAANG ML leads. The partner that wins has to clear a technical bake-off the same week they pitch.",
        modules: [
            { title: "Eval-first prompt development", desc: "Real test sets scored against real customer data, with regression runs on every prompt change." },
            { title: "LLM-vendor-agnostic abstractions", desc: "Clean module boundaries between OpenAI, Anthropic, Bedrock, Azure, and open-source providers." },
            { title: "Cost + latency budgets", desc: "Per-call cost and latency budgets enforced at the integration layer." },
            { title: "Algorithmic-ops integration", desc: "We build trading bots — low-latency inference wired into operator dashboards is in our DNA." },
        ],
        caseStudyParagraph: "Bay-relevant AI reference work spans operations platforms (J5 Sales OS, UEhub), trading systems (TypeScript/Node broker integrations), and the AI features across our portfolio. Technical bake-offs work in our favor — code walk-through or live architecture session on request.",
        pricingNote: "SF AI engagements typically scope between $30,000 and $135,000 for a production-grade integration with senior-engineering bake-off included.",
        faqs: [
            { q: "Technical bake-off?", a: "Yes." },
            { q: "Quant-adjacent AI?", a: "Yes." },
            { q: "Pacific time overlap?", a: "Morning through early afternoon." },
            { q: "Eval-first prompt development?", a: "Yes — real test sets, regression runs." },
            { q: "Closed vs open-source?", a: "Depends on workflow." },
            { q: "Who owns the prompts and code?", a: "You do." },
        ],
        siblings: [
            { slug: "seattle-wa", city: "Seattle, WA", desc: "Dev-tools and cloud-native AI." },
            { slug: "austin-tx", city: "Austin, TX", desc: "SaaS founder AI." },
        ],
    },
};

const CITY_SLUGS = Object.keys(CITIES);

export function generateStaticParams() {
    return CITY_SLUGS.map((city) => ({ city }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ city: string }>;
}): Promise<Metadata> {
    const { city } = await params;
    const config = CITIES[city];
    if (!config) return { title: "AI Integration Services | QUANT LAB USA" };

    const title = `AI Integration Services in ${config.city}, ${config.state} | QUANT LAB USA`;
    const description = `Custom OpenAI, Anthropic, and open-source LLM integration for ${config.city} ${config.stateFull} businesses. Founder-led, eval-first, fixed-scope delivery.`;

    return pageMetadata({
        title,
        description,
        slug: `services/ai-integration-services/${config.slug}`,
        image: "/og-services.png",
        type: "article",
    });
}

export default async function AIIntegrationCityPage({
    params,
}: {
    params: Promise<{ city: string }>;
}) {
    const { city } = await params;
    const config = CITIES[city];
    if (!config) notFound();

    const url = `https://quantlabusa.dev/services/ai-integration-services/${config.slug}`;

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "AI Integration Services",
        name: `AI Integration Services in ${config.city}, ${config.state}`,
        provider: { "@id": "https://quantlabusa.dev/#organization" },
        areaServed: {
            "@type": "City",
            name: config.city,
            address: {
                "@type": "PostalAddress",
                addressLocality: config.city,
                addressRegion: config.state,
                addressCountry: "US",
            },
        },
        description: `Custom AI integration services for ${config.city}, ${config.stateFull} businesses — OpenAI, Anthropic, AWS Bedrock, Azure OpenAI, and open-source LLM integration with eval-first prompt development.`,
        url,
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${url}#localbusiness`,
        name: `QUANT LAB USA — AI Integration in ${config.city}`,
        url,
        areaServed: {
            "@type": "City",
            name: config.city,
            address: {
                "@type": "PostalAddress",
                addressLocality: config.city,
                addressRegion: config.state,
                addressCountry: "US",
            },
        },
        telephone: "+1-770-652-1282",
        parentOrganization: { "@id": "https://quantlabusa.dev/#organization" },
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
            { "@type": "ListItem", position: 2, name: "Services", item: "https://quantlabusa.dev/services" },
            {
                "@type": "ListItem",
                position: 3,
                name: "AI Integration Services",
                item: "https://quantlabusa.dev/services/ai-integration-services",
            },
            { "@type": "ListItem", position: 4, name: `${config.city}, ${config.state}`, item: url },
        ],
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: config.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
    };

    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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
                        <li>
                            <Link href="/services/ai-integration-services" className="hover:text-sky-400 transition-colors">
                                AI Integration Services
                            </Link>
                        </li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">{config.city}, {config.state}</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Brain className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        AI Integration Services in {config.city}, {config.state}
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        {config.intro}
                    </p>
                    <ConsultationCTA
                        label={`Scope a ${config.city} AI Build`}
                        service="AI Integration Services"
                        city={`${config.city}, ${config.state}`}
                        source={`ai-${config.slug}`}
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        The problem with off-the-shelf AI in {config.city}
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>{config.problem}</p>
                        <p>
                            Real AI integration means picking the right model for the right step, wiring it into your existing data layer, and building eval-first so prompt regressions get caught before they reach production. For {config.city} buyers specifically, that means AI shaped for {config.angle} — not a generic chatbot.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        What we ship for {config.city} buyers
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {config.modules.map((m) => (
                            <div key={m.title} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-5">
                                <h3 className="text-white font-semibold mb-2">{m.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">{m.desc}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech stack</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            "OpenAI (GPT-4 class)",
                            "Anthropic Claude",
                            "AWS Bedrock",
                            "Azure OpenAI",
                            "Ollama / vLLM",
                            "Postgres + pgvector",
                            "TypeScript",
                            "Next.js 15",
                            "Docker",
                        ].map((tool) => (
                            <div key={tool} className="rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 text-sm text-gray-300">
                                {tool}
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                        LLM-vendor-agnostic abstraction so you can switch providers without a rewrite. Postgres + pgvector for RAG.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Reference builds</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>{config.caseStudyParagraph}</p>
                        <p className="text-sm">
                            Reference work: <Link href="/work/j5-sales-os" className="text-sky-400 hover:underline">J5 Sales OS</Link>, <Link href="/work/contractor-estimating-proposal-engine" className="text-sky-400 hover:underline">contractor estimating engine</Link>, and <Link href="/work/multi-strategy-trading-system" className="text-sky-400 hover:underline">multi-strategy trading system</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work remote from Georgia</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA is founder-led from Macon, Georgia. William Beltz runs every AI engagement from kickoff through handoff. Discovery is a structured workflow-mapping session; eval-first prompt development from week one; staging is live from week two.
                        </p>
                        <p>
                            For {config.city} buyers, that means full Eastern-time overlap, fixed-scope contracting against milestones, and on-site work when scope warrants. <Link href="/contact" className="text-sky-400 hover:underline">Book a scope call</Link> to walk through your workflow.
                        </p>
                    </div>
                    <div className="mt-6">
                        <ConsultationCTA
                            label={`Talk to William about ${config.city} AI`}
                            service="AI Integration Services"
                            city={`${config.city}, ${config.state}`}
                            source={`ai-${config.slug}-mid`}
                        />
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pricing for {config.city} AI integration</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>{config.pricingNote}</p>
                        <p>
                            We quote fixed-fee scope after a 30-minute discovery call. Engagements include the integration code, eval test sets, prompt versioning, and runtime cost-and-latency budgets. Source-code handoff at delivery. See our <Link href="/services/ai-integration-services" className="text-sky-400 hover:underline">parent AI service page</Link> for the broader engagement model.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What you get</h2>
                    <ul className="space-y-3">
                        {[
                            "Full source code repository (yours, no lock-in)",
                            "Prompt library + eval test sets",
                            "LLM-vendor-agnostic abstraction layer",
                            "Cost + latency budgets at integration layer",
                            "Audit logging on AI workflow events",
                            "30-day post-launch support included",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{config.city} AI integration FAQ</h2>
                    <div className="space-y-6">
                        {config.faqs.map((item) => (
                            <div key={item.q} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { slug: "saas-platform-development", title: "SaaS Platform Development", desc: "Full-stack SaaS with AI features built in." },
                            { slug: "custom-crm-development", title: "Custom CRM Development", desc: "AI-assisted lead routing and summarization on your CRM." },
                            { slug: "mobile-app-development", title: "Mobile App Development", desc: "On-device and server-side AI inside your mobile app." },
                            { slug: "api-development", title: "API Development", desc: "Documented endpoints for your AI workflows." },
                            { slug: "web-app-pentest", title: "Web App Pentest", desc: "Prompt-injection-aware security testing on AI features." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Nearby cities we serve</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {config.siblings.map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/ai-integration-services/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-sky-400" />
                                        <h3 className="text-white font-semibold">{s.city}</h3>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ship a real AI integration in {config.city}.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz directly at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or book a 20-minute scope call. Founder-led from quote to handoff.
                        </p>
                        <ConsultationCTA
                            label={`Book a ${config.city} AI Scope Call`}
                            service="AI Integration Services"
                            city={`${config.city}, ${config.state}`}
                            source={`ai-${config.slug}-footer`}
                        />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
