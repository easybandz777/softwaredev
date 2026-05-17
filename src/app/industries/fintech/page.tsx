import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Landmark, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Custom Software for Fintech (2026) | QUANT LAB USA",
    description:
        "Custom fintech development — PCI-DSS, SOC 2, SOX, KYC/AML aware. Trading dashboards, Stripe Connect marketplaces, advisor CRMs, MITRE pentests. Founder-led.",
    slug: "industries/fintech",
    image: "/og-services.png",
    type: "article",
});

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Custom Software for Fintech",
    url: "https://quantlabusa.dev/industries/fintech",
    description:
        "Fintech-specific software development with PCI-DSS, SOC 2, SOX, and KYC/AML controls baked in. Founder-led, US-based, mutual NDA from day one.",
    isPartOf: {
        "@type": "WebSite",
        url: "https://quantlabusa.dev",
        name: "QUANT LAB USA",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Industries", item: "https://quantlabusa.dev/industries" },
        { "@type": "ListItem", position: 3, name: "Fintech", item: "https://quantlabusa.dev/industries/fintech" },
    ],
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Fintech Software Development",
    name: "Custom Software Development for Fintech",
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Custom software development for fintech — advisory CRMs, Stripe Connect marketplaces, trading dashboards, and algorithmic trading systems. Compliance-aware builds with PCI-DSS, SOC 2, SOX, and KYC/AML controls. Pentesting tied to financial-services threat models via MITRE ATT&CK.",
    url: "https://quantlabusa.dev/industries/fintech",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Do you handle PCI-DSS scope for fintech builds?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Default architecture keeps you in SAQ A — Stripe Elements or Checkout tokenize cards, we never store PAN data on your servers. For higher-scope cases (Connect marketplaces, custom card capture), we scope the architecture explicitly with your QSA in the loop.",
            },
        },
        {
            "@type": "Question",
            name: "Can you build to SOC 2 audit readiness?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We build with SOC 2 Common Criteria in mind — encryption at rest and in transit, role-based access, immutable audit logging, change management, and incident response hooks. We coordinate with your SOC 2 auditor on evidence collection.",
            },
        },
        {
            "@type": "Question",
            name: "How do you handle KYC and AML for marketplaces?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Stripe Connect handles identity verification and beneficial-ownership checks for marketplaces. For deeper KYC/AML — sanctions screening, transaction monitoring, SAR workflows — we integrate dedicated vendors (Persona, Alloy, ComplyAdvantage) and persist the audit trail in your database.",
            },
        },
        {
            "@type": "Question",
            name: "Is offshore development an IP risk for fintech?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "It can be. Fintech IP — trading logic, scoring models, customer data flows — is the kind of asset you do not want sitting on a foreign contractor's laptop. We are US-based, founder-led, and signing mutual NDAs is the first step of every engagement.",
            },
        },
        {
            "@type": "Question",
            name: "Why is fintech treated as a special case for software development?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Three reasons converge. First, the regulatory perimeter is unusually wide — PCI-DSS, SOC 2, SOX 404, GLBA, KYC and AML, state money-transmission rules, and consumer-protection statutes like Reg E, Reg Z, and the FTC Safeguards Rule can all apply to the same product. Second, the data sensitivity is among the highest in tech: card numbers, account numbers, trading positions, and customer financial profiles are all attractive to credentialed adversaries. Third, the integrations are non-trivial — Plaid, Stripe Connect, broker APIs, KYC vendors, clearing systems, and core-banking BaaS providers all have their own quirks. A generic developer team learns this on your dime.",
            },
        },
        {
            "@type": "Question",
            name: "What does a $25,000 fintech build look like?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Around $25,000 covers a focused MVP — a single high-value workflow built well. Example: an advisor-facing pipeline tool with Stripe Checkout for fee collection, a clean dashboard, role-based access, and an audit log. Or a Connect-based payout console for an existing platform. The build is scoped tight, ships in 4 to 8 weeks, and avoids feature creep on the first release.",
            },
        },
        {
            "@type": "Question",
            name: "Can you support our SOC 2 Type II audit window?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We can build new systems with SOC 2 Common Criteria mapped to each control, produce the evidence trail your auditor expects, and respond to auditor follow-ups during your observation window. We have worked alongside SOC 2 firms in observation periods and can plug into your GRC tooling — Vanta, Drata, Secureframe, or whatever your team uses.",
            },
        },
        {
            "@type": "Question",
            name: "How do you handle SOX 404 controls for public-company affiliates?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "When a fintech build touches financial reporting for a public-company parent or affiliate, SOX 404 ICFR controls apply. We document changes, enforce segregation of duties on production deploys, log who-changed-what on financial logic, and align with the IT general controls (ITGCs) your internal audit team owns. We coordinate directly with internal audit and external SOX advisors when the engagement requires it.",
            },
        },
    ],
};

export default function FintechIndustryPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
                        <li><Link href="/industries" className="hover:text-sky-400 transition-colors">Industries</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">Fintech</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-sky-400 mb-6">
                        <Landmark className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software for Fintech — Built Compliant, Built Secure, Built to Ship
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Advisory CRMs, Stripe Connect marketplaces, trading dashboards, and execution systems — built by a US-based, founder-led team that takes PCI-DSS, SOC 2, SOX, and KYC/AML controls seriously from day one.
                    </p>
                    <ConsultationCTA label="Scope a Fintech Build" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Fintech is a regulated environment. Build like it.</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            PCI-DSS scope, SOC 2 Type II, SOX 404 for public-company affiliates, KYC and AML obligations on every onboarded customer, GLBA on customer data, state-level money transmission rules depending on the model — fintech is one of the most regulated software environments outside of healthcare. Off-the-shelf SaaS will not pass your auditor. A code base built by a contractor who has never read a SAQ will not either.
                        </p>
                        <p>
                            We build with those frameworks in mind from the first architecture diagram. Card data is tokenized at the edge — Stripe Elements or Checkout — so your environment stays in SAQ A. PII gets encrypted at rest with envelope keys and in transit with TLS 1.3. Role-based access is wired through every admin surface, and the audit log is immutable by design so your SOC 2 auditor has something real to look at.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why fintech is a special case</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Most industries deal with one or two overlapping frameworks. Fintech routinely sits at the intersection of five or six. A single advisor CRM that bills a recurring fee through Stripe, ingests client investment positions from a custodian feed, and notifies a producer of a suitability change can simultaneously touch PCI-DSS scope, SOC 2 trust criteria, GLBA Safeguards Rule obligations, and broker-dealer recordkeeping under FINRA 17a-4. That is before you get to state-level money-transmission rules if you move customer funds.
                        </p>
                        <p>
                            Scale compounds the problem. The volume of customer records, transactions, and audit-relevant events in even a small fintech is large enough that lazy logging or untested encryption becomes a liability inside a quarter. And the integrations are intricate: Plaid for account aggregation, Stripe Connect for payouts, broker APIs like Interactive Brokers or Alpaca, KYC vendors like Persona or Alloy, sanctions screeners, transaction-monitoring engines, and a clearing or BaaS layer underneath. Each one has its own quirks, its own rate limits, its own retry semantics, and its own failure modes when something goes wrong at 2 a.m. We have wired this stack repeatedly and know where the time gets eaten on a build.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build for fintech operators</h2>
                    <ul className="space-y-3">
                        {[
                            "Custom CRMs for RIAs, advisory firms, and broker-dealers — pipeline, household management, suitability tagging, document workflows",
                            "Stripe Connect marketplaces with platform-fee accounting, payout reconciliation, and 1099 reporting",
                            "Trading dashboards — live positions, P&L, risk attribution, with order entry and audit logging",
                            "Algorithmic trading systems — broker integrations (IBKR, Alpaca, Tradier, TopstepX), risk controls, monitoring",
                            "Lead-gen and prospecting platforms for niche-vertical sales (the J5 Sales OS architecture)",
                            "Customer onboarding flows with KYC vendor integration and beneficial-ownership capture",
                            "Internal back-office tools — reconciliation, settlement, compliance ticketing",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Common fintech projects we scope</h2>
                    <ul className="space-y-3">
                        {[
                            { t: "Stripe Connect marketplace from scratch", d: "Platform onboarding, custom or Express accounts, fee splits, payout reconciliation, 1099 reporting. Wired with QuickBooks Online or Xero sync." },
                            { t: "Advisor CRM with suitability workflow", d: "Pipeline, household hierarchy, suitability scoring, document vault, e-signature integration, and producer dashboards. Often paired with Wealthbox or Redtail data export." },
                            { t: "Algorithmic trading execution layer", d: "Python or TypeScript execution engine wired to IBKR, Alpaca, Tradier, or TopstepX. Hard risk controls, kill switch, monitoring, and a web dashboard for human review." },
                            { t: "Trading desk dashboard", d: "Live positions, P&L attribution, intraday risk, order entry with two-person approval where required, and a tamper-evident audit log." },
                            { t: "KYC and onboarding flow", d: "Persona, Alloy, or ComplyAdvantage integration; ID document capture; beneficial-ownership questionnaire; SAR and CTR workflow hooks; immutable evidence trail." },
                            { t: "Lending and underwriting back-office", d: "Application intake, decision engine, document storage, adverse-action notice generation, and ECOA-aware audit trails." },
                            { t: "Reconciliation and back-office tooling", d: "Daily settlement matching, exception queues, break management, and 1099/MISC reporting workflows that close the books cleanly." },
                            { t: "Compliance ticketing and surveillance triage", d: "Internal tool for handling AML alerts, surveillance hits, customer disputes, and SAR drafting with a controlled review chain." },
                            { t: "Customer-facing brokerage or roboadvisor", d: "Onboarding, funding via Plaid or wire, model-portfolio assignment, performance display, and tax-lot reporting." },
                            { t: "BaaS or embedded-finance integration layer", d: "Wrappers around Treasury Prime, Unit, Synapse-replacements, or Stripe Issuing to ship cards, virtual accounts, and ACH flows from a non-bank product." },
                        ].map((item) => (
                            <li key={item.t} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span><span className="text-white font-semibold">{item.t}.</span> {item.d}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Compliance and security considerations</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            <span className="text-white font-semibold">PCI-DSS.</span> If you take card payments, you are in PCI scope. Our default architecture tokenizes card data with Stripe Elements or Checkout so you live in SAQ A — the lightest validation level. For Stripe Connect platforms collecting card data directly, we work with your QSA to scope SAQ A-EP or SAQ D-Merchant honestly and document the boundary.
                        </p>
                        <p>
                            <span className="text-white font-semibold">SOC 2 Type II.</span> Most enterprise buyers will not even take a meeting without your SOC 2 report. We build with Common Criteria mapped to controls: encryption at rest and in transit, RBAC, change management, immutable audit logging, incident response, vendor management, and access reviews. We can produce evidence packs for Vanta, Drata, or Secureframe in the format your auditor expects.
                        </p>
                        <p>
                            <span className="text-white font-semibold">SOX 404.</span> When your fintech feeds the financial reporting of a public company — directly or via material affiliate — ICFR controls apply. We handle segregation of duties, deployment approvals, and change traceability so your SOX testing does not turn into a fire drill.
                        </p>
                        <p>
                            <span className="text-white font-semibold">KYC, AML, and BSA.</span> Identity verification, sanctions screening, PEP screening, transaction monitoring, and SAR workflows are wired through dedicated vendors (Persona, Alloy, ComplyAdvantage, Sardine). We never roll our own identity verification — the false-positive economics are brutal and the regulatory standard is moving.
                        </p>
                        <p>
                            <span className="text-white font-semibold">GLBA Safeguards Rule.</span> The 2023 FTC amendments brought non-bank financial institutions into a much sharper regime: written information security program, named CISO, board reporting, MFA, encryption, incident response, and annual testing. Our builds align by default; we coordinate with your CISO or compliance officer on the formal program documentation.
                        </p>
                        <p>
                            <span className="text-white font-semibold">State money transmission and consumer-protection statutes.</span> Reg E, Reg Z, Reg DD, NMLS where applicable, and state-by-state MTL obligations vary widely. We do not give legal advice — but we build the audit trail, disclosure capture, and consent-flow logging that your counsel will need to defend the product.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech stack we recommend for fintech</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Next.js 15 or 16 on the App Router with React 19 and TypeScript end-to-end. Postgres for the system of record — usually Neon, Supabase, or RDS depending on the compliance posture and BAA needs. Prisma or Drizzle as the type-safe ORM. Stripe for cards and Connect payouts. Plaid for account aggregation when needed. Resend for transactional email with a verified domain and DMARC alignment. Sentry plus a log aggregator (Datadog or Better Stack) for observability — PHI- and PII-aware redaction baked into the logger.
                        </p>
                        <p>
                            For trading and execution we lean Python on the engine side, with FastAPI or a private gRPC layer between the strategy worker and the broker adapter. A Node or TypeScript dashboard sits over the top for human review. Background workers run on Inngest or a self-hosted queue (BullMQ on Redis) depending on the SLA. Auth0, Clerk, or a Lucia-style stack for authentication; we wire MFA-required everywhere on admin and producer surfaces. KMS-backed envelope encryption for sensitive columns; signed audit logs in a separate append-only store. Deployment goes to Vercel for the web tier and to a hardened VPC for the data plane when SOC 2 or BAA scope requires it.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pricing transparency</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { tier: "$25K", title: "Focused MVP", body: "A single high-value workflow shipped clean — Stripe-Checkout fee collection, a producer dashboard, RBAC, and an audit log. 4 to 8 weeks. Discovery scoped tight to avoid the dreaded v1 feature pile." },
                            { tier: "$60K", title: "Production platform", body: "A real fintech product — advisor CRM with KYC vendor wired in, household model, suitability workflow, Stripe billing, full admin console, and SOC 2 evidence pack. 10 to 16 weeks." },
                            { tier: "$150K+", title: "Marketplace or trading system", body: "Stripe Connect marketplace with 1099 reporting and reconciliation, or an execution engine with multiple broker adapters, risk controls, and a desk dashboard. 16 to 28 weeks with phased delivery." },
                        ].map((band) => (
                            <div key={band.tier} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <div className="text-emerald-400 font-mono text-sm mb-2">{band.tier}</div>
                                <h3 className="text-white font-semibold mb-2">{band.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{band.body}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                        Discovery is paid separately at $2,500 and is creditable against any full engagement. See the <Link href="/contact" className="text-emerald-400 hover:underline">contact page</Link> for the full scoping flow.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pitfalls we have seen</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Three patterns repeat. First, founders push a fintech product live without an immutable audit log and discover during the first SOC 2 readiness assessment that they cannot reconstruct who-did-what on customer money. Rebuilding the audit layer after the fact means re-instrumenting every write path. Build the audit log first, not last.
                        </p>
                        <p>
                            Second, KYC gets implemented as a one-shot signup gate instead of an ongoing program. The first time a sanctions list updates and someone in your existing customer base is suddenly a hit, the company learns it has no rescreening process and no SAR workflow. Identity verification at onboarding is the easy 30%. Ongoing monitoring, escalation, and recordkeeping are the part that actually keeps the company out of trouble.
                        </p>
                        <p>
                            Third, teams overscope the first release. A new fintech product gets pitched with five integrations, three customer personas, two pricing models, and a road map of regulatory states. The realistic build is one persona, one pricing model, and one state — shipped in eight weeks, used by ten beta users, and learned from. We push hard for that scoping discipline because the alternative is a 9-month build that ships a year late and serves no one.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why founder-led matters for fintech</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The thing that gets fintech founders in trouble is not usually a bug. It is the laptop in another country with your trading logic on it, or the contractor who copied your customer database before the engagement ended. IP exfiltration is the quiet existential risk in fintech engineering — and it is precisely why we are US-based, founder-led, and engagement-first on every project.
                        </p>
                        <p>
                            William Beltz writes or reviews every line of code that touches your customers, your money flows, or your trading logic. NDAs are mutual and signed before discovery. Source code lives in your GitHub organization, not ours. The handoff is documented for either ongoing collaboration or in-house ownership — your call.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">MITRE ATT&amp;CK pentests tied to financial-services threat models</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Auditors and cyber-insurance carriers increasingly want pentest reports mapped to the techniques your industry&apos;s actual adversaries use — FIN7 for card-data theft, APT38 and Lazarus for crypto and SWIFT, ransomware affiliates for everyone. We run <Link href="/services/mitre-attack-assessment" className="text-emerald-400 hover:underline">MITRE ATT&amp;CK-aligned assessments</Link> that simulate those groups&apos; documented TTPs against your environment, then deliver an ATT&amp;CK heatmap of which techniques succeed, which get detected, and which get blocked.
                        </p>
                        <p>
                            Standard <Link href="/services/penetration-testing" className="text-emerald-400 hover:underline">penetration testing</Link> covers the rest — internal network, Active Directory, external perimeter, web app, and API surface. Every finding maps to ATT&amp;CK technique IDs so your SOC or MSSP knows what to alert on. See the <Link href="/work/active-directory-pentest" className="text-emerald-400 hover:underline">Active Directory pentest case study</Link> for the reference engagement structure.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Reference builds</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            <Link href="/work/j5-sales-os" className="text-emerald-400 hover:underline">J5 Sales OS</Link> is the architecture pattern we use for prospecting and pipeline platforms in financial services — Google Places discovery, concurrent email enrichment, OpenAI qualification, and a full CRM pipeline in one tool. The same patterns power custom advisory CRMs and marketplace operator dashboards.
                        </p>
                        <p>
                            <Link href="/work/protectwithbri" className="text-emerald-400 hover:underline">ProtectWithBri</Link> is our reference for personal-advisor digital presence — a personal-insurance practice that needed a high-trust, high-conversion site that captured qualified consultation requests. Same architecture works for RIA practice sites and fee-only advisor pages.
                        </p>
                        <p>
                            For execution-side fintech, see the <Link href="/work/multi-strategy-trading-system" className="text-emerald-400 hover:underline">multi-strategy trading system deployment</Link> — Python execution engine, exchange WebSocket feeds, hard risk controls, and a Node dashboard, with sub-12ms order latency and zero unplanned downtime since launch.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "Do you handle PCI-DSS scope for fintech builds?",
                                a: "Yes. Default architecture keeps you in SAQ A — Stripe Elements or Checkout tokenize cards, we never store PAN data on your servers. For higher-scope cases (Connect marketplaces, custom card capture), we scope the architecture explicitly with your QSA in the loop.",
                            },
                            {
                                q: "Can you build to SOC 2 audit readiness?",
                                a: "Yes. We build with SOC 2 Common Criteria in mind — encryption at rest and in transit, role-based access, immutable audit logging, change management, and incident response hooks. We coordinate with your SOC 2 auditor on evidence collection.",
                            },
                            {
                                q: "How do you handle KYC and AML for marketplaces?",
                                a: "Stripe Connect handles identity verification and beneficial-ownership checks for marketplaces. For deeper KYC/AML — sanctions screening, transaction monitoring, SAR workflows — we integrate dedicated vendors (Persona, Alloy, ComplyAdvantage) and persist the audit trail in your database.",
                            },
                            {
                                q: "Is offshore development an IP risk for fintech?",
                                a: "It can be. Fintech IP — trading logic, scoring models, customer data flows — is the kind of asset you do not want sitting on a foreign contractor's laptop. We are US-based, founder-led, and signing mutual NDAs is the first step of every engagement.",
                            },
                            {
                                q: "Why is fintech treated as a special case for software development?",
                                a: "The regulatory perimeter is unusually wide, the data sensitivity is among the highest in tech, and the integrations are non-trivial. A generic developer team learns Plaid, Stripe Connect, KYC vendors, and broker APIs on your dime — and the early misses tend to compound at audit time.",
                            },
                            {
                                q: "What does a $25,000 fintech build look like?",
                                a: "A focused MVP — one high-value workflow shipped well. Example: an advisor pipeline tool with Stripe Checkout for fee collection, RBAC, and an audit log, scoped to 4 to 8 weeks. Discovery scoped tight to avoid v1 feature pile-on.",
                            },
                            {
                                q: "Can you support our SOC 2 Type II audit window?",
                                a: "Yes. We build with Common Criteria mapped to controls, produce evidence packs for Vanta, Drata, or Secureframe, and respond to auditor follow-ups during your observation window.",
                            },
                            {
                                q: "How do you handle SOX 404 controls for public-company affiliates?",
                                a: "Segregation of duties on production deploys, change traceability on financial logic, and coordination with internal audit and external SOX advisors. Documentation aligned with your existing ITGCs.",
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { slug: "penetration-testing", title: "Penetration Testing", desc: "Manual, evidence-backed pentests audit-ready for SOC 2, PCI, and cyber-insurance." },
                            { slug: "custom-crm-development", title: "Custom CRM Development", desc: "Advisory firm CRMs with household management, suitability, and document workflow." },
                            { slug: "stripe-integration", title: "Custom Stripe Integration", desc: "Subscriptions, Connect marketplaces, and QuickBooks reconciliation." },
                            { slug: "algorithmic-trading-systems", title: "Algorithmic Trading Systems", desc: "Custom strategy execution with broker integrations and risk controls." },
                            { slug: "mitre-attack-assessment", title: "MITRE ATT&CK Assessment", desc: "Threat-group-aligned pentests for finance — FIN7, APT38, ransomware affiliates." },
                            { slug: "active-directory-pentest", title: "Active Directory Pentest", desc: "Internal AD assessments — Kerberoasting, ADCS abuse, lateral movement." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-emerald-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["stripe","compliance","build-vs-buy"]}
                        heading="Fintech engineering & compliance reading"
                        pinned={["nextjs-stripe-integration-guide","soc2-pentest-prep-guide-2026","stripe-connect-marketplace-architecture"]}
                    />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ship fintech that holds up in audit.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz directly at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or <Link href="/contact" className="text-emerald-400 hover:underline">book a 20-minute scope call</Link>. Mutual NDA signed before discovery. Founder-led from quote to handoff.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
