import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { ResourceLeadForm } from "../ResourceLeadForm";
import { Plug, Check, ArrowRight, FileText, Clock, Target } from "lucide-react";

const SLUG = "api-integration-requirements-template";
const TITLE = "The API Integration Requirements Template";
const PDF_FILENAME = "api-integration-requirements-template.pdf";

export const metadata: Metadata = {
    title: "API Integration Requirements Template (Free) | QUANT LAB USA",
    description:
        "A fill-in template to scope an API integration: business goals, data mapping, authentication, error and retry handling, rate limits, webhooks, and testing — so the integration ships without surprises.",
    alternates: { canonical: `https://quantlabusa.dev/resources/${SLUG}` },
    openGraph: {
        title: "API Integration Requirements Template (Free) | QUANT LAB USA",
        description:
            "Scope an API integration cleanly: goals, data mapping, auth, error and retry handling, rate limits, webhooks, and a test plan — a fill-in requirements template.",
        url: `https://quantlabusa.dev/resources/${SLUG}`,
        type: "article",
        siteName: "QUANT LAB USA",
    },
    twitter: {
        card: "summary_large_image",
        title: "API Integration Requirements Template (Free) | QUANT LAB USA",
        description:
            "Goals, data mapping, auth, error handling, rate limits, webhooks, and testing — a fill-in API integration spec.",
    },
};

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: TITLE,
    url: `https://quantlabusa.dev/resources/${SLUG}`,
    description:
        "An API integration requirements template covering business objectives and scope, data mapping and contracts, authentication and security, error handling and reliability, rate limits and performance, webhooks and events, and the test and rollout plan.",
    isPartOf: {
        "@type": "WebSite",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
    },
    publisher: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "When should we fill this out — before or after picking the API?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Fill in the goals, data, and reliability sections before you commit to a specific third-party API. Requirements should drive the choice of provider, not the other way around. Once a provider is chosen, complete the auth, rate-limit, and webhook sections against that provider's actual documentation.",
            },
        },
        {
            "@type": "Question",
            name: "Why does data mapping deserve its own section?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Because most integration pain is data pain. Mismatched field types, different ID formats, unexpected nulls, and timezone or currency assumptions surface late and cause silent corruption. Mapping every field you read and write up front, with its type and meaning, is the cheapest way to avoid a class of bugs that are miserable to debug in production.",
            },
        },
        {
            "@type": "Question",
            name: "Do we really need to plan for errors and retries before building?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Third-party APIs fail, rate-limit, and time out — that is normal operation, not an edge case. Deciding up front how you retry, where you make operations idempotent, and how you surface a persistent failure to a human is the difference between an integration that heals itself and one that quietly drops data.",
            },
        },
        {
            "@type": "Question",
            name: "Is this template only for third-party APIs?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "It is written with third-party integrations in mind, but it works just as well for an internal service you depend on. The same questions — contract, auth, failure modes, rate limits, and testing — apply whether the API belongs to a vendor or another team in your own company.",
            },
        },
    ],
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Resources", item: "https://quantlabusa.dev/resources" },
        { "@type": "ListItem", position: 3, name: "API Integration Requirements Template", item: `https://quantlabusa.dev/resources/${SLUG}` },
    ],
};

const goalsItems = [
    "Business objective: state in one sentence what this integration must achieve and how you will know it worked.",
    "Direction of data: define whether you are reading, writing, or both, and which system is the source of truth for each entity.",
    "Sync model: real-time, scheduled batch, or event-driven — and the freshness the business actually requires.",
    "Scope and non-goals: list what is explicitly in and out, so the build does not quietly expand.",
    "Volume: estimate request and record volumes today and at expected growth, since they shape every other decision.",
];

const dataItems = [
    "Field mapping: for every field you read or write, record the source field, the destination field, the type, and its meaning.",
    "Identifiers: define how records are matched across systems and how you handle differing ID formats.",
    "Transformations: document any conversions — units, currencies, timezones, enumerations — and where they happen.",
    "Edge values: decide how you handle nulls, missing fields, truncation, and unexpected types rather than discovering them in production.",
    "Schema versioning: note how you will detect and absorb changes to the provider's data contract over time.",
];

const authItems = [
    "Auth mechanism: capture how the API authenticates — OAuth 2.0, API keys, signed requests — and the scopes you need.",
    "Credential handling: store secrets in a secrets manager, scope them to least privilege, and define how they rotate.",
    "Environments: separate credentials and endpoints for sandbox and production so a test can never touch live data.",
    "Transport security: require HTTPS, and verify certificates and webhook signatures where applicable.",
    "Access boundaries: record exactly what data the integration can reach and confirm it is no more than needed.",
];

const reliabilityItems = [
    "Failure modes: list how the API can fail — timeouts, 4xx, 5xx, rate limits — and the intended response to each.",
    "Retries and backoff: define a retry policy with exponential backoff and a cap, and which operations are safe to retry.",
    "Idempotency: make write operations idempotent so a retry cannot create duplicates.",
    "Dead-letter and alerting: decide where a permanently failing message goes and how a human is told about it.",
    "Degradation: define what your product does when the integration is down, rather than failing the whole flow.",
];

const limitsItems = [
    "Rate limits: record the provider's documented limits and design your call patterns to stay safely under them.",
    "Throughput targets: state the latency and volume your integration must support, and how you will measure it.",
    "Batching and caching: decide where you batch requests or cache responses to reduce load and cost.",
    "Quotas and cost: note any usage-based pricing so the integration's cost is understood before launch.",
];

const eventsItems = [
    "Webhooks: list the events you will receive, and verify each payload's signature before trusting it.",
    "Delivery guarantees: account for duplicate and out-of-order delivery, and process events idempotently.",
    "Reconciliation: define a periodic sync to catch anything a missed webhook left inconsistent.",
    "Replay: decide how you handle replayed or backfilled events without corrupting state.",
];

const testingItems = [
    "Test environment: confirm a sandbox exists, and define the scenarios — success, failure, rate limit, malformed data — you will exercise.",
    "Acceptance criteria: write the conditions that must be true for the integration to be considered done.",
    "Monitoring: define the metrics and alerts that tell you the integration is healthy in production.",
    "Rollout: plan a staged release with a rollback path, and a runbook for the on-call engineer.",
];

const sections = [
    { heading: "1. Business objectives & scope", items: goalsItems },
    { heading: "2. Data mapping & contracts", items: dataItems },
    { heading: "3. Authentication & security", items: authItems },
    { heading: "4. Error handling & reliability", items: reliabilityItems },
    { heading: "5. Rate limits & performance", items: limitsItems },
    { heading: "6. Webhooks & events", items: eventsItems },
    { heading: "7. Testing & rollout", items: testingItems },
];

export default function ApiIntegrationRequirementsTemplatePage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <div className="container mx-auto px-6 max-w-6xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/resources" className="hover:text-sky-400 transition-colors">Resources</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">API Integration Requirements Template</li>
                    </ol>
                </nav>

                <div className="grid lg:grid-cols-5 gap-10 mb-20">
                    <div className="lg:col-span-3">
                        <AnimatedSection>
                            <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                                <Plug className="w-6 h-6 text-white" />
                            </div>
                            <p className="text-xs uppercase tracking-widest text-sky-300 font-semibold mb-3">
                                Integration spec · data mapping, auth, reliability, webhooks, testing
                            </p>
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-5">
                                Scope an API integration before it scopes you.
                            </h1>
                            <p className="text-lg text-gray-400 leading-relaxed mb-6">
                                A fill-in requirements template for any API integration: the business goal, the
                                exact data mapping, authentication, error and retry handling, rate limits,
                                webhooks, and a test plan. Most integration disasters trace back to a question
                                nobody asked up front. This template asks them, so the build ships without
                                ugly surprises.
                            </p>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8">
                                <div className="flex items-center gap-2"><FileText className="w-4 h-4 text-sky-400" /><span>7 sections, fill-in template</span></div>
                                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-emerald-400" /><span>Complete it in a sitting</span></div>
                                <div className="flex items-center gap-2"><Target className="w-4 h-4 text-amber-400" /><span>For PMs &amp; engineers</span></div>
                            </div>
                        </AnimatedSection>
                    </div>
                    <div className="lg:col-span-2">
                        <AnimatedSection>
                            <ResourceLeadForm
                                slug={SLUG}
                                title={TITLE}
                                pdfFilename={PDF_FILENAME}
                                drip="D1"
                                successHeadline="The API Integration Requirements Template is yours."
                                relatedServiceHref="/services/api-development"
                                relatedServiceLabel="API development services"
                            />
                        </AnimatedSection>
                    </div>
                </div>

                <div className="max-w-4xl">
                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Why integrations go sideways
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                An API integration looks simple in the demo and gets complicated in production.
                                The provider rate-limits you mid-sync, a field arrives null that the docs swore
                                was required, a retry creates a duplicate charge, a webhook gets delivered twice
                                and out of order. None of these are exotic — they are the normal behavior of
                                networked systems. The teams that ship clean integrations are the ones that
                                decided how to handle all of it before writing the first line.
                            </p>
                            <p>
                                This template captures those decisions. It is the same scoping we do on every{" "}
                                <Link href="/services/api-development" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    API and integration project
                                </Link>{" "}
                                we take on. If you want the underlying concepts, the{" "}
                                <Link href="/glossary/what-is-an-api" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    API
                                </Link>
                                ,{" "}
                                <Link href="/glossary/what-is-webhooks" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    webhooks
                                </Link>
                                , and{" "}
                                <Link href="/glossary/what-is-idempotency" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    idempotency
                                </Link>{" "}
                                glossary entries are quick primers on the terms used throughout.
                            </p>
                        </div>
                    </AnimatedSection>

                    {sections.map((section) => (
                        <AnimatedSection key={section.heading} className="mb-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                                {section.heading}
                            </h2>
                            <ul className="space-y-3">
                                {section.items.map((item) => (
                                    <li key={item} className="flex gap-3 text-gray-300">
                                        <Check className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                                        <span className="leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </AnimatedSection>
                    ))}

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            How to use this template
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                Fill in the objectives, data, and reliability sections before you commit to a
                                specific provider — your requirements should drive the choice, not the reverse.
                                Once a provider is selected, complete the authentication, rate-limit, and webhook
                                sections against their actual documentation, not your assumptions. The data
                                mapping section is the one to take most seriously: most integration bugs are data
                                bugs, and mapping every field with its type and meaning kills a whole class of
                                them up front.
                            </p>
                            <p>
                                Treat the finished document as the contract between everyone involved — product,
                                engineering, and the vendor. It becomes your test plan and your acceptance
                                criteria. If the integration handles money, pair it with our{" "}
                                <Link href="/resources/stripe-integration-checklist" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    Stripe integration checklist
                                </Link>
                                , which applies this same error-handling and webhook discipline to a payments
                                API specifically.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            How this connects to our work
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                Disciplined scoping is how we approach every{" "}
                                <Link href="/services/api-development" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    API development
                                </Link>{" "}
                                engagement, whether we are consuming a third-party API or building one for others
                                to consume. The same reliability thinking shows up in our{" "}
                                <Link href="/services/stripe-integration" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    Stripe integration
                                </Link>{" "}
                                work, where idempotent writes and verified webhooks are non-negotiable, and in our{" "}
                                <Link href="/services/saas-platform-development" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    SaaS platform development
                                </Link>
                                , where integrations are often the connective tissue of the product.
                            </p>
                            <p>
                                If you are planning a tricky integration and want a second opinion on the
                                requirements, or you have one that keeps dropping data and needs a rethink, see{" "}
                                <Link href="/pricing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    how we scope and price the work
                                </Link>{" "}
                                or{" "}
                                <Link href="/contact" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    reach out
                                </Link>{" "}
                                to talk it through.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Frequently asked questions
                        </h2>
                        <div className="space-y-6">
                            {[
                                {
                                    q: "When should we fill this out — before or after picking the API?",
                                    a: "Fill in the goals, data, and reliability sections before you commit to a specific third-party API. Requirements should drive the choice of provider, not the other way around. Once a provider is chosen, complete the auth, rate-limit, and webhook sections against that provider's actual documentation.",
                                },
                                {
                                    q: "Why does data mapping deserve its own section?",
                                    a: "Because most integration pain is data pain. Mismatched field types, different ID formats, unexpected nulls, and timezone or currency assumptions surface late and cause silent corruption. Mapping every field you read and write up front, with its type and meaning, is the cheapest way to avoid a class of bugs that are miserable to debug in production.",
                                },
                                {
                                    q: "Do we really need to plan for errors and retries before building?",
                                    a: "Yes. Third-party APIs fail, rate-limit, and time out — that is normal operation, not an edge case. Deciding up front how you retry, where you make operations idempotent, and how you surface a persistent failure to a human is the difference between an integration that heals itself and one that quietly drops data.",
                                },
                                {
                                    q: "Is this template only for third-party APIs?",
                                    a: "It is written with third-party integrations in mind, but it works just as well for an internal service you depend on. The same questions — contract, auth, failure modes, rate limits, and testing — apply whether the API belongs to a vendor or another team in your own company.",
                                },
                            ].map((item) => (
                                <details key={item.q} className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-6 open:bg-[#0d1526]">
                                    <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-semibold text-white">
                                        <span>{item.q}</span>
                                        <ArrowRight className="w-4 h-4 text-sky-400 transition-transform group-open:rotate-90" />
                                    </summary>
                                    <p className="text-gray-400 mt-3 leading-relaxed text-sm">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Related resources &amp; reading
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <Link href="/resources/api-design-guidelines-checklist" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">API Design Guidelines Checklist</p>
                                <p className="text-xs text-gray-400 leading-relaxed">The conventions to follow if you are building the API too.</p>
                            </Link>
                            <Link href="/resources/stripe-integration-checklist" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Stripe Integration Checklist</p>
                                <p className="text-xs text-gray-400 leading-relaxed">The same discipline applied to a payments integration.</p>
                            </Link>
                            <Link href="/blog/nextjs-stripe-integration-guide" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Next.js Stripe Integration Guide</p>
                                <p className="text-xs text-gray-400 leading-relaxed">Error handling and webhook verification in a real build.</p>
                            </Link>
                            <Link href="/services/api-development" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">API Development</p>
                                <p className="text-xs text-gray-400 leading-relaxed">How we design, build, and integrate APIs end to end.</p>
                            </Link>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 to-emerald-500/5 p-8 md:p-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Planning a tricky integration?
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl">
                                Whether you are scoping a new integration or untangling one that keeps dropping
                                data, we can help you nail the requirements and build something reliable. See{" "}
                                <Link href="/pricing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    how engagements are priced
                                </Link>{" "}
                                or book a call.
                            </p>
                            <ConsultationCTA label="Book a 20-min call" source={`${SLUG}-resource`} service="API Development" />
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </main>
    );
}
